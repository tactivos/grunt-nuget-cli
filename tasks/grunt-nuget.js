/*
 * grunt-nuget-cli
 * https://github.com/tactivos/grunt-nuget-cli
 * Copyright (c) 2014 Juli Racca, Santiago Montero & Johnny Halife
 */
module.exports = function(grunt) {
  grunt.registerMultiTask('nuget', 'Restores nuget packages', function() {
    var _ = grunt.util._;
    var done = this.async();
    var async = grunt.util.async;

    var args = []; //arguments to be used for invoking mono

    args.push('--runtime=' + this.options().runtimeVersion);
    args.push(this.options().location);
    args.push(this.data.command);

    if(this.data.args)
      args.push(this.data.args);

    grunt.util.spawn({ cmd: 'mono', args: args }, done);
  });
}
