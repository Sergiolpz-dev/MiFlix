import gulp from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import cached from "gulp-cached";
import dependents from "gulp-dependents";
import debug from "gulp-debug";
import rename from "gulp-rename";
import browserSync from "browser-sync";
import postcss from "gulp-postcss";
import pxtorem from "postcss-pxtorem";

// Configurar gulp-sass con Dart Sass
const sass = gulpSass(dartSass);

// Opciones de compilación de Sass
const sassOptions = {
  includePaths: [
    "node_modules",
  ],
  outputStyle: "expanded",
};

// Opciones para postcss-pxtorem
const pxtoremOptions = {
  rootValue: 16, // 1rem = 16px (ajusta según tu diseño)
  unitPrecision: 5,
  propList: ["*"],
  replace: true,
  mediaQuery: false,
  minPixelValue: 1,
};

// Tarea para compilar estilos
gulp.task("styles", function () {
  return gulp
    .src("src/main.scss", { sourcemaps: true }) // Actualizamos la ruta
    .pipe(cached("sass"))
    .pipe(dependents())
    .pipe(debug({ title: "scss:" }))
    .pipe(sass(sassOptions).on("error", sass.logError))
    .pipe(postcss([pxtorem(pxtoremOptions)]))
    .pipe(autoprefixer())
    //.pipe(rename({ dirname: "" }))
    .pipe(rename("style.css"))
    .pipe(gulp.dest("src", { sourcemaps: "." }))
    .pipe(gulp.dest("src"))
    .pipe(debug({ title: "css:" }))
    .pipe(browserSync.stream());
});

// Tarea para compilar y minimizar estilos
gulp.task("styles-min", function () {
  return gulp
    .src("src/main.scss") // Actualizamos la ruta
    .pipe(cached("sass"))
    .pipe(dependents())
    .pipe(debug({ title: "scss:" }))
    .pipe(sass(sassOptions).on("error", sass.logError))
    .pipe(postcss([pxtorem(pxtoremOptions)]))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    //.pipe(rename({ dirname: "" }))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("src"))
    .pipe(debug({ title: "css:" }));
});

// Tarea principal de compilación
gulp.task("build", gulp.series("styles"));

// Tarea de observación (watch) y sincronización con el navegador
gulp.task("watch", function () {
  browserSync.init({
    server: {
      baseDir: "src"  // Sirve los archivos desde la raíz del proyecto
    },
    startPath: "pages/home.html"
  });

  // Escucha los cambios en los archivos SCSS dentro de assets
  gulp.watch(
    ["assets/scss/**/*.scss", "assets/components/**/*.scss", "src/main.scss"],
    {
      events: "all",
      ignoreInitial: false,
    },
    gulp.series("styles")
  );

  // Escucha cambios en el CSS generado
  gulp.watch("src/*.css").on("change", browserSync.reload);

  // Escucha cambios en los archivos JS dentro de assets/js
  gulp.watch("src/js/*.js").on("change", browserSync.reload);

  // Escucha cambios en los archivos HTML (en la raíz, por ejemplo, index.html)
  gulp.watch("src/pages/*.html").on("change", browserSync.reload);
});

