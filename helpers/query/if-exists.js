
var helpers = require('../../lib/query-helpers');
var utils   = require('../../lib/utils');

helpers.register('ifExists', function(ifExists, values, query){
  return ifExists ? 'if exists' : null;
});


helpers.register('exists', function(exists, values, query){
  return values ? 'is not null' : 'is null';
});