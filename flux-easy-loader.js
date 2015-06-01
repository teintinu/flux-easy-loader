    debugger;

var fluxeasy = require('flux-easy');
var loaderUtils = require('loader-utils');

module.exports = function (source, inputSourceMap) {
    debugger;
    this.cacheable && this.cacheable();

    var sourceFilename = loaderUtils.getRemainingRequest(this);
    var current = loaderUtils.getCurrentRequest(this);

    var options = {
      range: true,
      sourceFileName: sourceFilename,
      //sourceMapName: sourceFilename.replace(/\.jsx?$/gi, '') + '.map',
      inputSourceMap: inputSourceMap
    };

    var gen = fluxeasy.transform_string(sourceFilename, source, options);

    /* if (gen.map) {
        gen.map. version= 3;
        gen.map.sources = [sourceFilename];
        gen.map.file = current;
        gen.map.sourcesContent = [source];
        gen.map.mappings=gen.map._mappings;
        gen.map.names=gen.map._names;
        gen.map.skipValidation=gen.map._skipValidation;
    } */

    this.callback(null, gen.code, gen.map);
}

