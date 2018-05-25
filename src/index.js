'use strict';

exports.handler = function(event, context) {
   console.log(event.currentIntent.name);
};