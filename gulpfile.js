let gulp = require('gulp'),
    minifyCss = require('gulp-clean-css'), //压缩css
    rename = require('gulp-rename'), //改名
    connect = require('gulp-connect'), //起服务
    concat = require('gulp-concat'), //合并
    uglify = require('gulp-uglify'), //压缩js
    runSequence = require("run-sequence").use(gulp), //同步执行gulp任务
    shell = require('gulp-shell'),
    babel = require("gulp-babel"),
    homePage = "./public/demo.html",
    root = './',
    modules = ["core", "demo", "iposs", "iposs_sd", "iposs_ah"],
    devModules = modules.map(i => i + '-build'),
    ready = modules.map(i => i + '-ready');
modules.forEach(name => gulp.task(name, shell.task(['cross-env NODE_ENV=dev webpack --config ./webpack/' + name + '.js'])));
modules.forEach(name => gulp.task(name + '-ready', shell.task(['cross-env NODE_ENV=ready webpack --config ./webpack/' + name + '.js'])));
gulp.task('default', ['watch', 'serve']);

gulp.task('watch', function () {
    gulp.watch(homePage, ['reload']);
    modules.forEach(name => {
        gulp.task(name + '-build', callback => {
            runSequence(name, "reload", callback)
        });
        gulp.watch(name + '/**/*.{js,css,html}', [name + '-build']);
    });
});
gulp.task('serve', () => connect.server({
    root: root,
    port: 3000,
    livereload: true
}));

gulp.task('reload', () => gulp.src(homePage).pipe(connect.reload()));

//------------------------------
gulp.task('dev', modules);
gulp.task('ready', function (callback) {
    runSequence('webpack-ready', "concat-files", callback);
});
gulp.task('debugger', function (callback) {
    runSequence('dev', "concat-files", callback);
});

gulp.task('webpack-ready', ready);



var distPath="./dist/";
gulp.task("concat-files", function () {
    cocatFiles(
        ['./public/topo/core.css', './public/topo/iposs.css'],
        ['./public/topo/core.js', './public/topo/iposs.js'],
        distPath+"topo"
    );
    gulp.src("./iposs/menu.json").pipe(gulp.dest(distPath+'topo/'));

    cocatFiles(
        ['./public/topo/core.css', './topo/topo/iposs_sd.css'],
        ['./public/topo/core.js', './topo/topo/iposs_sd.js'],
        distPath+"topo_sd"
    );
    gulp.src("./iposs_sd/menu.json").pipe(gulp.dest(distPath+'topo_sd/'));


    cocatFiles(
        ['./public/topo/core.css', './public/topo/iposs_ah.css'],
        ['./public/topo/core.js', './public/topo/iposs_ah.js'],
        distPath+"topo_ah"
    );
    gulp.src("./iposs_ah/menu.json").pipe(gulp.dest(distPath+'topo_ah/'));
});

function cocatFiles(css, js, path) {
    gulp.src(css) //- 需要处理的css文件，放到一个字符串数组里
        .pipe(concat('topo.min.css')) //- 合并后的文件名
        .pipe(minifyCss()) //- 压缩处理成一行
        .pipe(gulp.dest(path));
    gulp.src(js)
        .pipe(concat('topo.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path));
}