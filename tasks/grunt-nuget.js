/*
 * grunt-nuget-cli
 * https://github.com/tactivos/grunt-nuget-cli
 * Copyright (c) 2014 Juli Racca, Santiago Montero & Johnny Halife
 */

var path = require('path');

module.exports = function(grunt) {
  grunt.registerMultiTask('nuget', 'Restores nuget packages', function() {
    var _ = grunt.util._;
    var done = this.async();
    var async = grunt.util.async;

    var nugetExe = (this.options().location || path.resolve(__dirname, '../bin/NuGet.exe'));
    var runtimeVersion = this.options().runtimeVersion || 'v4.0';

    var args = []; //arguments to be used for invoking mono
    args.push('--runtime=' + runtimeVersion);
    args.push(nugetExe);
    args.push(this.data.command);

    if(this.data.args)
      args.push(this.data.args);

    grunt.util.spawn({ cmd: 'mono', args: args }, done);
  });
}
