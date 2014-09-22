// TODO: Wildcards.

define([], function() {
  var modifyParams, route, routes, walk;
  walk = function(callbacks, params) {
    var fn;
    if (params == null) {
      params = {};
    }
    fn = (function() {
      var prev;
      prev = null;
      return function() {
        var callback, _i, _len, _results;
        if (prev !== location.hash) {
          prev = location.hash;
          _results = [];
          for (_i = 0, _len = callbacks.length; _i < _len; _i++) {
            callback = callbacks[_i];
            _results.push(callback(params, location.hash.slice(1)));
          }
          return _results;
        }
      };
    })();
    if ((window.onhashchange != null) && ((document.documentMode == null) || document.documentMode >= 8)) {
      window.onhashchange = fn;
    } else {
      setInterval(fn, 100);
    }
    return fn();
  };
  routes = function(routes, modifiers) {
    if (routes == null) {
      routes = {};
    }
    if (modifiers == null) {
      modifiers = {};
    }
    return function(params, path) {
      var callback, index, match, newParams, newPath, paramName, pathSplits, route, routeSplits, _i, _ref, _results;
      if (params == null) {
        params = {};
      }
      if (path == null) {
        path = '';
      }
      pathSplits = path.split('/');
      _results = [];
      for (route in routes) {
        callback = routes[route];
        newParams = {};
        routeSplits = route.split('/');
        if (route.search(/:/) >= 0) {
          match = true;
          for (index = _i = 0, _ref = routeSplits.length; 0 <= _ref ? _i < _ref : _i > _ref; index = 0 <= _ref ? ++_i : --_i) {
            if (routeSplits[index][0] === ':') {
              if ((pathSplits[index] != null) && pathSplits[index].length > 0) {
                paramName = routeSplits[index].slice(1);
                newParams[paramName] = pathSplits[index];
              } else {
                match = false;
              }
            } else if (routeSplits[index] !== pathSplits[index]) {
              match = false;
            }
          }
          if (match === true) {
            params = modifyParams(modifiers, params, newParams);
            newPath = pathSplits.slice(routeSplits.length);
            _results.push(callback(params, '/' + newPath.join('/')));
          } else {
            _results.push(void 0);
          }
        } else if (path.indexOf(route) === 0) {
          _results.push(callback(params, path.slice(route.length)));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };
  };
  route = function(method, modifiers) {
    if (modifiers == null) {
      modifiers = {};
    }
    return function(params, path) {
      if (params == null) {
        params = {};
      }
      if (path == null) {
        path = '';
      }
      params = modifyParams(modifiers, params, params);
      return method(params, path);
    };
  };
  modifyParams = function(modifiers, params, newParams) {
    var key, modifier, value;
    if (modifiers == null) {
      modifiers = {};
    }
    if (params == null) {
      params = {};
    }
    if (newParams == null) {
      newParams = {};
    }
    for (key in newParams) {
      value = newParams[key];
      modifier = modifiers[key] || function(value) {
        return value;
      };
      params[key] = modifier(value, params);
    }
    return params;
  };
  return {
    walk: walk,
    routes: routes,
    route: route
  };
});
