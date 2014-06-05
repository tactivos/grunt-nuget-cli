/*
 * grunt-nuget-cli
 * https://github.com/tactivos/grunt-nuget-cli
 * Copyright (c) 2014 Juli Racca, Santiago Montero & Johnny Halife
 */

var path = require('path');

module.exports = function (grunt) {
    grunt.registerMultiTask('nuget', 'Restores nuget packages', function () {
        var _ = grunt.util._;
        var done = this.async();
        var async = grunt.util.async;

        var win = new RegExp(/^win/).test(process.platform);
        var nugetExe = (this.options().location || path.resolve(__dirname, '../nuget/NuGet.exe'));

        var args = [];

        if (!win) { //arguments to be used for invoking mono
            args.push('--runtime=' + this.options().runtimeVersion || 'v4.0');
            args.push(nugetExe);
        }

        args.push(this.data.command);

        if (this.data.args)
            args.push(this.data.args);

        var cmd = win ? nugetExe : 'mono';
        grunt.util.spawn({ cmd: cmd, args: args }, done);
    });
}
