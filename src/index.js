'use strict';

import angular from 'angular';
import round from 'round';

export default angular.module('round', [])
  .value('round', round)
  .filter('round', filterFactory)
  .name;

filterFactory.$inject = ['round'];
function filterFactory (round) {
  return function roundFilter (value, multiple, direction) {
    if (typeof value !== 'number') return;
    if (multiple && typeof multiple !== 'number') {
      direction = multiple;
      multiple = 1;
    }
    return round(value, multiple, {
      direction: direction
    });
  };
}
