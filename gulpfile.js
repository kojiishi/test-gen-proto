var gulp = require("gulp");
var ejs = require("gulp-ejs");

var ejsSrc = "src/*.ejs";
var singleDest = "single";
var testDest = "test";
var refDest = "ref";

gulp.task("default", ["single", "test", "ref"]);

gulp.task("watch", function () {
    gulp.watch(ejsSrc, ["single", "test", "ref"]);
});

gulp.task("single", function () {
    var data = {
        fontDir: "../support/",
        isReference: true,
        isTest: true,
    };
    gulp.src(ejsSrc)
        .pipe(ejs(data))
        .pipe(gulp.dest(singleDest));
});

gulp.task("test", function () {
    var data = {
        fontDir: "support/",
        isReference: false,
        isTest: true,
    };
    gulp.src(ejsSrc)
        .pipe(ejs(data))
        .pipe(gulp.dest(testDest));
});

gulp.task("ref", function () {
    var data = {
        fontDir: "support/",
        isReference: true,
        isTest: false,
    };
    gulp.src(ejsSrc)
        .pipe(ejs(data))
        .pipe(gulp.dest(refDest));
});
