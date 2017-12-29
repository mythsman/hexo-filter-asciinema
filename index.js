/* global hexo */
'use strict';

var js_cdn = 'https://cdn.bootcss.com/asciinema-player/2.4.1/asciinema-player.js';
var css_cdn = 'https://cdn.bootcss.com/asciinema-player/2.4.1/asciinema-player.css';
var js_tag = '<link rel="stylesheet" type="text/css" href="' + css_cdn + '" />';
var css_tag = '<script src="' + js_cdn + '"></script>';
var player_tag = '<asciinema-player src="$1"></asciinema-player>';

hexo.extend.filter.register('before_post_render', function(data) {

  if (hexo.config.asciinema != null && hexo.config.asciinema.enable) {

    data.content = data.content.replace(/\[\@asciinema\]\((.*?)\)/g, js_tag + css_tag + player_tag);

  }

  return data;

});
