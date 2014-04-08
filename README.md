grunt-nuget
===========

[Grunt][grunt] task that works as a wrapper for NuGet.exe commands.

## Getting Started

Install this grunt plugin next to your project's gruntfile with: `npm install grunt-nuget-cli --save-dev`

Then add this line to your project's `Gruntfile.js` :

```javascript
grunt.loadNpmTasks('grunt-nuget-cli');
```

Then specify your config:

```javascript
  grunt.initConfig({
    nuget: {
      options: {
        /** @required location of NuGet.exe */
        location: './Tools/NuGet/NuGet.exe',
        /** @required mono runtime version (right now it only works with mono) */
        runtimeVersion: 'v4.0'
      },
      restore: {
        /** @required command to execute for the given target */
        command: 'restore',
        /** @optional  additional arguments to pass to NuGet.exe */
        args: 'restore',
      }
    }
  });
```

[grunt]: https://github.com/cowboy/grunt

### License

The MIT License (MIT)

Copyright (c) 2014 Juli Racca, Santiago Montero &amp; Johnny G Halife

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
