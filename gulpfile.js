//导入工具包require("node_modules")
var gulp = require("gulp");
var less = require("gulp-less");
var scss = require("gulp-sass");
var connect = require("gulp-connect");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");

//开启一个服务
gulp.task("server",function(){
	connect.server({
		root:"dist",
		livereload:true //热更新
	})
})

//编译less任务
gulp.task('testLess',function () {
	gulp.src('less/*.less')
		.pipe(less())
		.pipe(gulp.dest('dist/css'))
		.pipe(connect.reload())
})
//scss编译
gulp.task('testScss',function () {
	gulp.src('src/scss/main.scss')
		.pipe(less())
		.pipe(gulp.dest('dist/src/css'));	
})
//合并js
gulp.task("concatJS",function(){
	gulp.src(["js/*.js"])
		.pipe(concat("index.js"))
		.pipe(gulp.dest('dist/js'))
})
//处理images
gulp.task('imagemin', function() {
	gulp.src('images/*.{png,jpg,gif}')
		.pipe(imagemin())
	  	.pipe(gulp.dest('dist/images/'))
});

//处理index
gulp.task('copy-index',function () {
	gulp.src('index.html')
		.pipe(gulp.dest('dist'))
		.pipe(connect.reload())
})
//处理libs
gulp.task('copy-libs', function() {
   	gulp.src('libs/**/*')
   		.pipe(gulp.dest('dist/libs'))
});
//处理tpl
gulp.task('copy-tpl', function() {
   	gulp.src('tpl/**/*')
   		.pipe(gulp.dest('dist/tpl'))
});
gulp.task('build',['testLess','concatJS','imagemin','copy-index','copy-libs','copy-tpl'], function() {
    console.log("ok");
});

gulp.task('watch', function() {
    gulp.watch('index.html',["copy-index"]);
    gulp.watch('libs/**/*',["copy-libs"]);
    gulp.watch('tpl/**/*',["copy-tpl"]);
    gulp.watch('less/**/*',["testLess"]);
    gulp.watch('js/**/*',["concatJS"]);
    gulp.watch('images/**/*',["imagemin"]);
});

gulp.task("default",["server","watch"]);
