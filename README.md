# angular-round [![Build Status](https://travis-ci.org/bendrucker/angular-round.svg?branch=master)](https://travis-ci.org/bendrucker/angular-round) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/angular-round.svg)](https://greenkeeper.io/)
Rounding filter for Angular

## Installing
```sh
# use npm
$ npm install angular-round
# or bower
$ bower install angular-round
```

```js
angular.module('myApp', [
  require('angular-round')
]);
// or
angular.module('myApp', [
  'round'
]);
```

## API

angular-round is powered by [round](https://www.npmjs.com/package/round). Inject the `round` service to use it directly. It also exposes a `round` filter for use in templates.

```html
{{expression | round:multiple:direction}}
```

* `multiple` (`Number`): The multiple to round by. Defaults to `1`.
* `direction` (`'up'`/`'down'`): The direction to round. Defaults to the nearest multiple, either up or down, if no direction is specified.
