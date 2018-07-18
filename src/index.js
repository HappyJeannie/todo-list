import _ from 'lodash';
import $ from 'jquery';
import foo from './foo';
function component () {
  // var element = document.createElement('div');
  var $element = $('<div></div>');

  /* lodash is required for the next line to work */
  $element.html(_.join(['Hello','webpack'], ' '));

  
  return $element;
}

$('body').append(component());
console.log(foo.add())