'use strict';

import angular from 'angular';
import 'angular-mocks';
import {expect} from 'chai';
import round from '../';
import rounder from 'round';
let inject = angular.mock.inject;

describe('angular-round', function () {

  beforeEach(angular.mock.module(round));

  it('exposes the round module for injection', inject(function (round) {
    expect(round).to.equal(rounder);
  }));

  describe('filter', function () {

    function interpolate (template) {
      let result;
      inject(function ($interpolate) {
        result = $interpolate(template)({});
      });
      return result;
    }

    it('rounds to the nearest integer by default', function () {
      expect(interpolate('{{1.2 | round}}')).to.equal('1');
    });

    it('can round to a custom multiple', function () {
      expect(interpolate('{{4.2 | round:5}}')).to.equal('5');
    });

    it('can round by a custom direction', function () {
      expect(interpolate('{{1.2 | round:1:\'up\'}}')).to.equal('2');
    });

  });

});
