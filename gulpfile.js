var gulp = require('gulp'),
	stylus = require('gulp-stylus')
// autoprefixer = require('gulp-autoprefixer')

gulp.task('stylus', function () {
	// Говорим Gulp откуда взять наши Stylus файлы
	return (
		gulp
			.src(['./css/*.styl'])
			// Заменяем текущий поток на кастомный, чтобы избежать умирания вотчера при ошибках в коде

			// Подключаем плагин Stylus
			.pipe(
				stylus({
					'include css': true,
				})
			)

			.pipe(gulp.dest('./css'))
	)
})

gulp.task('watch', function () {
	gulp.watch('./css/*.styl', gulp.parallel('stylus'))
})
