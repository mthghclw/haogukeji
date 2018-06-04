
// 引入下载的gulp包
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-csso');
var uglyfly = require('gulp-uglyfly');
var lessc = require('gulp-less');
var liveserver = require('gulp-live-server');


// 定义默认的任务
gulp.task('default', ['serve']);

// 处理html文档的任务
// gulp.task('html', function(){
// 	return gulp.src(['source/*.html', 'source/**/*.html'])
// 		.pipe(gulp.dest('public'));

// });

// 处理Less文档的任务
gulp.task('less', function(){
	return gulp.src('source/less/*.less')
	.pipe(lessc())
	.pipe(gulp.dest('source/css'));
	
});

// 处理JS文档的任务
/* gulp.task('js', function() {
	return gulp.src('source/js/*.js')
	.pipe();
}); */

// 处理CSS文档的任务
/* gulp.task('css', function(){
	return gulp.src('source/css/*.css')
		.pipe(cssmin())
		.pipe(gulp.dest('public/css'));
}); */


gulp.task('serve', function() {

	var server = liveserver.static('source', 3000);
	server.start();

	// 监视less文件的改变
	gulp.watch('source/less/*.less', ['less']);

	// 监视html、css文件
	gulp.watch([
	'source/css/*.css',
	'source/*.html',
	'source/**/*.html',
	'source/js/*.js'], function(file){
		server.notify.apply(server, [file]);
	});
});








