# hexo-filter-asciinema

[![npm](https://img.shields.io/npm/v/npm.svg)](https://nodejs.org/en/)
[![NPM version](https://badge.fury.io/js/hexo-filter-asciinema.svg)](https://www.npmjs.com/package/hexo-filter-asciinema)
[![npm](https://img.shields.io/npm/dt/hexo-filter-asciinema.svg)](https://www.npmjs.com/package/hexo-filter-asciinema)

## Desciption
A simple plugin which can embed asciinema-player in your article.

## Configuration
Add the following configuration in the _config.yml of your site.

```yml
# hexo-filter-asciinema
asciinema:
  enable: true
```

## Usage
When you want to add asciicast.json in your article, just put the file in the right place and write like this:
```markdown
[@asciinema](asciicast.json)
```
