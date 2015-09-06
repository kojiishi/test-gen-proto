var gulp = require("gulp");
var ejs = require("gulp-ejs");

var ejsSrc = "src/*.ejs";
var singleDest = "single";
var testDest = "test";
var refDest = "ref";

gulp.task("default", ["single", "test", "ref"]);

gulp.task("single", function () {
    var data = {
        fontDir: "../support/",
        defineTestAndRef: function (test, ref) {
            test();
            ref();
        },
    };
    gulp.src(ejsSrc)
        .pipe(ejs(data))
        .pipe(gulp.dest(singleDest));
});

gulp.task("test", function () {
    var data = {
        fontDir: "support/",
        defineTestAndRef: function (test, ref) {
            test();
        },
    };
    gulp.src(ejsSrc)
        .pipe(ejs(data))
        .pipe(gulp.dest(testDest));
});

gulp.task("ref", function () {
    var data = {
        fontDir: "support/",
        defineTestAndRef: function (test, ref) {
            ref();
        },
    };
    gulp.src(ejsSrc)
        .pipe(ejs(data))
        .pipe(gulp.dest(refDest));
});
