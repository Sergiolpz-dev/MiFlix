import gulp from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import dependents from "gulp-dependents";
import debug from "gulp-debug";
import rename from "gulp-rename";
import browserSync from "browser-sync";
import postcss from "gulp-postcss";
import pxtorem from "postcss-pxtorem";

// Configurar gulp-sass con Dart Sass
const sass = gulpSass(dartSass);
const server = browserSync.create();

// Opciones de compilación de Sass
const sassOptions = {
	includePaths: ["node_modules"],
	outputStyle: "expanded",
};

// Opciones para postcss-pxtorem
const pxtoremOptions = {
	rootValue: 16,
	unitPrecision: 5,
	propList: ["*"],
	replace: true,
	mediaQuery: false,
	minPixelValue: 1,
};

// Tarea para compilar estilos (desarrollo)
gulp.task("styles", function () {
	return gulp
		.src("assets/scss/style.scss", { sourcemaps: true })
		.pipe(dependents()) // ✅ usar dependents con @import
		.pipe(debug({ title: "scss (dev):" }))
		.pipe(sass(sassOptions).on("error", sass.logError))
		.pipe(postcss([pxtorem(pxtoremOptions)]))
		.pipe(autoprefixer())
		.pipe(rename("style.css"))
		.pipe(gulp.dest("css", { sourcemaps: "." }))
		.pipe(debug({ title: "css (dev):" }))
		.pipe(server.stream());
});

// Tarea para compilar y minimizar estilos (producción)
gulp.task("styles-min", function () {
	console.log("▶ Ejecutando tarea styles-min");

	return gulp
		.src("assets/scss/style.scss", { sourcemaps: true })
		.pipe(dependents()) // ✅ también aquí
		.pipe(debug({ title: "scss (min):" }))
		.pipe(sass(sassOptions).on("error", sass.logError))
		.pipe(postcss([pxtorem(pxtoremOptions)]))
		.pipe(autoprefixer())
		.pipe(cleanCSS())
		.pipe(rename("style.min.css"))
		.pipe(gulp.dest("css", { sourcemaps: "." }))
		.pipe(debug({ title: "css (min):" }))
		.pipe(server.stream());
});

// Tarea principal de compilación
gulp.task("build", gulp.series("styles", "styles-min"));

// Tarea de observación (watch) y sincronización con el navegador
gulp.task("watch", function () {
	server.init({
		server: {
			baseDir: "./",
		},
	});

	gulp.watch(
		["assets/scss/**/*.scss"],
		{
			events: "all",
			ignoreInitial: false,
		},
		gulp.series("styles", "styles-min")
	);

	gulp.watch("**/*.html").on("change", server.reload);
	gulp.watch("assets/js/**/*.js").on("change", server.reload);
});
