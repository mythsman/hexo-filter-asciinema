/* global hexo */
'use strict';

var fs = require('hexo-fs');

var root = hexo.config.root;
if(root.endsWith('/')){
  root = root.slice(0,root.length-1);
}

var css_tag = '<script src="' + root + '/assets/asciinema-player.js"></script>';
var js_tag = '<link rel="stylesheet" type="text/css" href="' + root + '/assets/asciinema-player.css" />';
var player_tag = '<asciinema-player src="$1"></asciinema-player>';

hexo.extend.filter.register('before_post_render', function(data) {

  if (hexo.config.asciinema != null && hexo.config.asciinema.enable) {

    data.content = data.content.replace(/\[\@asciinema\]\((.*?)\)/g, js_tag + css_tag + player_tag);

  }

  return data;

});

hexo.extend.generator.register('asciinema-css', function(locals) {

  return {
    path: 'assets/asciinema-player.css',
    data: function() {
      return fs.createReadStream(__dirname + '/resources/asciinema-player.css');
    }
  };
});

hexo.extend.generator.register('asciinema-js', function(locals) {

  return {
    path: 'assets/asciinema-player.js',
    data: function() {
      return fs.createReadStream(__dirname + '/resources/asciinema-player.js');
    }
  };
});

hexo.extend.generator.register('asciinema-font', function(locals) {

  return {
    path: 'assets/PowerlineSymbols.otf',
    data: function() {
      return fs.createReadStream(__dirname + '/resources/PowerlineSymbols.otf');
    }
  };
});