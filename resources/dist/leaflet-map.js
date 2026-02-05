function _mergeNamespaces(z, B) {
  for (var Z = 0; Z < B.length; Z++) {
    const F = B[Z];
    if (typeof F != "string" && !Array.isArray(F)) {
      for (const T in F)
        if (T !== "default" && !(T in z)) {
          const C = Object.getOwnPropertyDescriptor(F, T);
          C && Object.defineProperty(z, T, C.get ? C : {
            enumerable: !0,
            get: () => F[T]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(z, Symbol.toStringTag, { value: "Module" }));
}
function getDefaultExportFromCjs(z) {
  return z && z.__esModule && Object.prototype.hasOwnProperty.call(z, "default") ? z.default : z;
}
var leafletSrc$1 = { exports: {} };
var leafletSrc = leafletSrc$1.exports, hasRequiredLeafletSrc;
function requireLeafletSrc() {
  return hasRequiredLeafletSrc || (hasRequiredLeafletSrc = 1, (function(z, B) {
    (function(Z, F) {
      F(B);
    })(leafletSrc, (function(Z) {
      var F = "1.9.4";
      function T(_) {
        var k, P, M, S;
        for (P = 1, M = arguments.length; P < M; P++) {
          S = arguments[P];
          for (k in S)
            _[k] = S[k];
        }
        return _;
      }
      var C = Object.create || /* @__PURE__ */ (function() {
        function _() {
        }
        return function(k) {
          return _.prototype = k, new _();
        };
      })();
      function O(_, k) {
        var P = Array.prototype.slice;
        if (_.bind)
          return _.bind.apply(_, P.call(arguments, 1));
        var M = P.call(arguments, 2);
        return function() {
          return _.apply(k, M.length ? M.concat(P.call(arguments)) : arguments);
        };
      }
      var R = 0;
      function U(_) {
        return "_leaflet_id" in _ || (_._leaflet_id = ++R), _._leaflet_id;
      }
      function W(_, k, P) {
        var M, S, D, A;
        return A = function() {
          M = !1, S && (D.apply(P, S), S = !1);
        }, D = function() {
          M ? S = arguments : (_.apply(P, arguments), setTimeout(A, k), M = !0);
        }, D;
      }
      function V(_, k, P) {
        var M = k[1], S = k[0], D = M - S;
        return _ === M && P ? _ : ((_ - S) % D + D) % D + S;
      }
      function q() {
        return !1;
      }
      function ot(_, k) {
        if (k === !1)
          return _;
        var P = Math.pow(10, k === void 0 ? 6 : k);
        return Math.round(_ * P) / P;
      }
      function Re(_) {
        return _.trim ? _.trim() : _.replace(/^\s+|\s+$/g, "");
      }
      function Ut(_) {
        return Re(_).split(/\s+/);
      }
      function at(_, k) {
        Object.prototype.hasOwnProperty.call(_, "options") || (_.options = _.options ? C(_.options) : {});
        for (var P in k)
          _.options[P] = k[P];
        return _.options;
      }
      function bi(_, k, P) {
        var M = [];
        for (var S in _)
          M.push(encodeURIComponent(P ? S.toUpperCase() : S) + "=" + encodeURIComponent(_[S]));
        return (!k || k.indexOf("?") === -1 ? "?" : "&") + M.join("&");
      }
      var Nn = /\{ *([\w_ -]+) *\}/g;
      function xi(_, k) {
        return _.replace(Nn, function(P, M) {
          var S = k[M];
          if (S === void 0)
            throw new Error("No value provided for variable " + P);
          return typeof S == "function" && (S = S(k)), S;
        });
      }
      var Tt = Array.isArray || function(_) {
        return Object.prototype.toString.call(_) === "[object Array]";
      };
      function Ne(_, k) {
        for (var P = 0; P < _.length; P++)
          if (_[P] === k)
            return P;
        return -1;
      }
      var ve = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      function Fe(_) {
        return window["webkit" + _] || window["moz" + _] || window["ms" + _];
      }
      var ki = 0;
      function Pi(_) {
        var k = +/* @__PURE__ */ new Date(), P = Math.max(0, 16 - (k - ki));
        return ki = k + P, window.setTimeout(_, P);
      }
      var He = window.requestAnimationFrame || Fe("RequestAnimationFrame") || Pi, Ti = window.cancelAnimationFrame || Fe("CancelAnimationFrame") || Fe("CancelRequestAnimationFrame") || function(_) {
        window.clearTimeout(_);
      };
      function gt(_, k, P) {
        if (P && He === Pi)
          _.call(k);
        else
          return He.call(window, O(_, k));
      }
      function bt(_) {
        _ && Ti.call(window, _);
      }
      var Fn = {
        __proto__: null,
        extend: T,
        create: C,
        bind: O,
        get lastId() {
          return R;
        },
        stamp: U,
        throttle: W,
        wrapNum: V,
        falseFn: q,
        formatNum: ot,
        trim: Re,
        splitWords: Ut,
        setOptions: at,
        getParamString: bi,
        template: xi,
        isArray: Tt,
        indexOf: Ne,
        emptyImageUrl: ve,
        requestFn: He,
        cancelFn: Ti,
        requestAnimFrame: gt,
        cancelAnimFrame: bt
      };
      function It() {
      }
      It.extend = function(_) {
        var k = function() {
          at(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }, P = k.__super__ = this.prototype, M = C(P);
        M.constructor = k, k.prototype = M;
        for (var S in this)
          Object.prototype.hasOwnProperty.call(this, S) && S !== "prototype" && S !== "__super__" && (k[S] = this[S]);
        return _.statics && T(k, _.statics), _.includes && (Hn(_.includes), T.apply(null, [M].concat(_.includes))), T(M, _), delete M.statics, delete M.includes, M.options && (M.options = P.options ? C(P.options) : {}, T(M.options, _.options)), M._initHooks = [], M.callInitHooks = function() {
          if (!this._initHooksCalled) {
            P.callInitHooks && P.callInitHooks.call(this), this._initHooksCalled = !0;
            for (var D = 0, A = M._initHooks.length; D < A; D++)
              M._initHooks[D].call(this);
          }
        }, k;
      }, It.include = function(_) {
        var k = this.prototype.options;
        return T(this.prototype, _), _.options && (this.prototype.options = k, this.mergeOptions(_.options)), this;
      }, It.mergeOptions = function(_) {
        return T(this.prototype.options, _), this;
      }, It.addInitHook = function(_) {
        var k = Array.prototype.slice.call(arguments, 1), P = typeof _ == "function" ? _ : function() {
          this[_].apply(this, k);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(P), this;
      };
      function Hn(_) {
        if (!(typeof L > "u" || !L || !L.Mixin)) {
          _ = Tt(_) ? _ : [_];
          for (var k = 0; k < _.length; k++)
            _[k] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
        }
      }
      var wt = {
        /* @method on(type: String, fn: Function, context?: Object): this
         * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
         *
         * @alternative
         * @method on(eventMap: Object): this
         * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
         */
        on: function(_, k, P) {
          if (typeof _ == "object")
            for (var M in _)
              this._on(M, _[M], k);
          else {
            _ = Ut(_);
            for (var S = 0, D = _.length; S < D; S++)
              this._on(_[S], k, P);
          }
          return this;
        },
        /* @method off(type: String, fn?: Function, context?: Object): this
         * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
         *
         * @alternative
         * @method off(eventMap: Object): this
         * Removes a set of type/listener pairs.
         *
         * @alternative
         * @method off: this
         * Removes all listeners to all events on the object. This includes implicitly attached events.
         */
        off: function(_, k, P) {
          if (!arguments.length)
            delete this._events;
          else if (typeof _ == "object")
            for (var M in _)
              this._off(M, _[M], k);
          else {
            _ = Ut(_);
            for (var S = arguments.length === 1, D = 0, A = _.length; D < A; D++)
              S ? this._off(_[D]) : this._off(_[D], k, P);
          }
          return this;
        },
        // attach listener (without syntactic sugar now)
        _on: function(_, k, P, M) {
          if (typeof k != "function") {
            console.warn("wrong listener type: " + typeof k);
            return;
          }
          if (this._listens(_, k, P) === !1) {
            P === this && (P = void 0);
            var S = { fn: k, ctx: P };
            M && (S.once = !0), this._events = this._events || {}, this._events[_] = this._events[_] || [], this._events[_].push(S);
          }
        },
        _off: function(_, k, P) {
          var M, S, D;
          if (this._events && (M = this._events[_], !!M)) {
            if (arguments.length === 1) {
              if (this._firingCount)
                for (S = 0, D = M.length; S < D; S++)
                  M[S].fn = q;
              delete this._events[_];
              return;
            }
            if (typeof k != "function") {
              console.warn("wrong listener type: " + typeof k);
              return;
            }
            var A = this._listens(_, k, P);
            if (A !== !1) {
              var N = M[A];
              this._firingCount && (N.fn = q, this._events[_] = M = M.slice()), M.splice(A, 1);
            }
          }
        },
        // @method fire(type: String, data?: Object, propagate?: Boolean): this
        // Fires an event of the specified type. You can optionally provide a data
        // object — the first argument of the listener function will contain its
        // properties. The event can optionally be propagated to event parents.
        fire: function(_, k, P) {
          if (!this.listens(_, P))
            return this;
          var M = T({}, k, {
            type: _,
            target: this,
            sourceTarget: k && k.sourceTarget || this
          });
          if (this._events) {
            var S = this._events[_];
            if (S) {
              this._firingCount = this._firingCount + 1 || 1;
              for (var D = 0, A = S.length; D < A; D++) {
                var N = S[D], H = N.fn;
                N.once && this.off(_, H, N.ctx), H.call(N.ctx || this, M);
              }
              this._firingCount--;
            }
          }
          return P && this._propagateEvent(M), this;
        },
        // @method listens(type: String, propagate?: Boolean): Boolean
        // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
        // Returns `true` if a particular event type has any listeners attached to it.
        // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
        listens: function(_, k, P, M) {
          typeof _ != "string" && console.warn('"string" type argument expected');
          var S = k;
          typeof k != "function" && (M = !!k, S = void 0, P = void 0);
          var D = this._events && this._events[_];
          if (D && D.length && this._listens(_, S, P) !== !1)
            return !0;
          if (M) {
            for (var A in this._eventParents)
              if (this._eventParents[A].listens(_, k, P, M))
                return !0;
          }
          return !1;
        },
        // returns the index (number) or false
        _listens: function(_, k, P) {
          if (!this._events)
            return !1;
          var M = this._events[_] || [];
          if (!k)
            return !!M.length;
          P === this && (P = void 0);
          for (var S = 0, D = M.length; S < D; S++)
            if (M[S].fn === k && M[S].ctx === P)
              return S;
          return !1;
        },
        // @method once(…): this
        // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
        once: function(_, k, P) {
          if (typeof _ == "object")
            for (var M in _)
              this._on(M, _[M], k, !0);
          else {
            _ = Ut(_);
            for (var S = 0, D = _.length; S < D; S++)
              this._on(_[S], k, P, !0);
          }
          return this;
        },
        // @method addEventParent(obj: Evented): this
        // Adds an event parent - an `Evented` that will receive propagated events
        addEventParent: function(_) {
          return this._eventParents = this._eventParents || {}, this._eventParents[U(_)] = _, this;
        },
        // @method removeEventParent(obj: Evented): this
        // Removes an event parent, so it will stop receiving propagated events
        removeEventParent: function(_) {
          return this._eventParents && delete this._eventParents[U(_)], this;
        },
        _propagateEvent: function(_) {
          for (var k in this._eventParents)
            this._eventParents[k].fire(_.type, T({
              layer: _.target,
              propagatedFrom: _.target
            }, _), !0);
        }
      };
      wt.addEventListener = wt.on, wt.removeEventListener = wt.clearAllEventListeners = wt.off, wt.addOneTimeEventListener = wt.once, wt.fireEvent = wt.fire, wt.hasEventListeners = wt.listens;
      var ne = It.extend(wt);
      function X(_, k, P) {
        this.x = P ? Math.round(_) : _, this.y = P ? Math.round(k) : k;
      }
      var Ei = Math.trunc || function(_) {
        return _ > 0 ? Math.floor(_) : Math.ceil(_);
      };
      X.prototype = {
        // @method clone(): Point
        // Returns a copy of the current point.
        clone: function() {
          return new X(this.x, this.y);
        },
        // @method add(otherPoint: Point): Point
        // Returns the result of addition of the current and the given points.
        add: function(_) {
          return this.clone()._add(J(_));
        },
        _add: function(_) {
          return this.x += _.x, this.y += _.y, this;
        },
        // @method subtract(otherPoint: Point): Point
        // Returns the result of subtraction of the given point from the current.
        subtract: function(_) {
          return this.clone()._subtract(J(_));
        },
        _subtract: function(_) {
          return this.x -= _.x, this.y -= _.y, this;
        },
        // @method divideBy(num: Number): Point
        // Returns the result of division of the current point by the given number.
        divideBy: function(_) {
          return this.clone()._divideBy(_);
        },
        _divideBy: function(_) {
          return this.x /= _, this.y /= _, this;
        },
        // @method multiplyBy(num: Number): Point
        // Returns the result of multiplication of the current point by the given number.
        multiplyBy: function(_) {
          return this.clone()._multiplyBy(_);
        },
        _multiplyBy: function(_) {
          return this.x *= _, this.y *= _, this;
        },
        // @method scaleBy(scale: Point): Point
        // Multiply each coordinate of the current point by each coordinate of
        // `scale`. In linear algebra terms, multiply the point by the
        // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
        // defined by `scale`.
        scaleBy: function(_) {
          return new X(this.x * _.x, this.y * _.y);
        },
        // @method unscaleBy(scale: Point): Point
        // Inverse of `scaleBy`. Divide each coordinate of the current point by
        // each coordinate of `scale`.
        unscaleBy: function(_) {
          return new X(this.x / _.x, this.y / _.y);
        },
        // @method round(): Point
        // Returns a copy of the current point with rounded coordinates.
        round: function() {
          return this.clone()._round();
        },
        _round: function() {
          return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
        },
        // @method floor(): Point
        // Returns a copy of the current point with floored coordinates (rounded down).
        floor: function() {
          return this.clone()._floor();
        },
        _floor: function() {
          return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
        },
        // @method ceil(): Point
        // Returns a copy of the current point with ceiled coordinates (rounded up).
        ceil: function() {
          return this.clone()._ceil();
        },
        _ceil: function() {
          return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
        },
        // @method trunc(): Point
        // Returns a copy of the current point with truncated coordinates (rounded towards zero).
        trunc: function() {
          return this.clone()._trunc();
        },
        _trunc: function() {
          return this.x = Ei(this.x), this.y = Ei(this.y), this;
        },
        // @method distanceTo(otherPoint: Point): Number
        // Returns the cartesian distance between the current and the given points.
        distanceTo: function(_) {
          _ = J(_);
          var k = _.x - this.x, P = _.y - this.y;
          return Math.sqrt(k * k + P * P);
        },
        // @method equals(otherPoint: Point): Boolean
        // Returns `true` if the given point has the same coordinates.
        equals: function(_) {
          return _ = J(_), _.x === this.x && _.y === this.y;
        },
        // @method contains(otherPoint: Point): Boolean
        // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
        contains: function(_) {
          return _ = J(_), Math.abs(_.x) <= Math.abs(this.x) && Math.abs(_.y) <= Math.abs(this.y);
        },
        // @method toString(): String
        // Returns a string representation of the point for debugging purposes.
        toString: function() {
          return "Point(" + ot(this.x) + ", " + ot(this.y) + ")";
        }
      };
      function J(_, k, P) {
        return _ instanceof X ? _ : Tt(_) ? new X(_[0], _[1]) : _ == null ? _ : typeof _ == "object" && "x" in _ && "y" in _ ? new X(_.x, _.y) : new X(_, k, P);
      }
      function lt(_, k) {
        if (_)
          for (var P = k ? [_, k] : _, M = 0, S = P.length; M < S; M++)
            this.extend(P[M]);
      }
      lt.prototype = {
        // @method extend(point: Point): this
        // Extends the bounds to contain the given point.
        // @alternative
        // @method extend(otherBounds: Bounds): this
        // Extend the bounds to contain the given bounds
        extend: function(_) {
          var k, P;
          if (!_)
            return this;
          if (_ instanceof X || typeof _[0] == "number" || "x" in _)
            k = P = J(_);
          else if (_ = vt(_), k = _.min, P = _.max, !k || !P)
            return this;
          return !this.min && !this.max ? (this.min = k.clone(), this.max = P.clone()) : (this.min.x = Math.min(k.x, this.min.x), this.max.x = Math.max(P.x, this.max.x), this.min.y = Math.min(k.y, this.min.y), this.max.y = Math.max(P.y, this.max.y)), this;
        },
        // @method getCenter(round?: Boolean): Point
        // Returns the center point of the bounds.
        getCenter: function(_) {
          return J(
            (this.min.x + this.max.x) / 2,
            (this.min.y + this.max.y) / 2,
            _
          );
        },
        // @method getBottomLeft(): Point
        // Returns the bottom-left point of the bounds.
        getBottomLeft: function() {
          return J(this.min.x, this.max.y);
        },
        // @method getTopRight(): Point
        // Returns the top-right point of the bounds.
        getTopRight: function() {
          return J(this.max.x, this.min.y);
        },
        // @method getTopLeft(): Point
        // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
        getTopLeft: function() {
          return this.min;
        },
        // @method getBottomRight(): Point
        // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
        getBottomRight: function() {
          return this.max;
        },
        // @method getSize(): Point
        // Returns the size of the given bounds
        getSize: function() {
          return this.max.subtract(this.min);
        },
        // @method contains(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle contains the given one.
        // @alternative
        // @method contains(point: Point): Boolean
        // Returns `true` if the rectangle contains the given point.
        contains: function(_) {
          var k, P;
          return typeof _[0] == "number" || _ instanceof X ? _ = J(_) : _ = vt(_), _ instanceof lt ? (k = _.min, P = _.max) : k = P = _, k.x >= this.min.x && P.x <= this.max.x && k.y >= this.min.y && P.y <= this.max.y;
        },
        // @method intersects(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds
        // intersect if they have at least one point in common.
        intersects: function(_) {
          _ = vt(_);
          var k = this.min, P = this.max, M = _.min, S = _.max, D = S.x >= k.x && M.x <= P.x, A = S.y >= k.y && M.y <= P.y;
          return D && A;
        },
        // @method overlaps(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds
        // overlap if their intersection is an area.
        overlaps: function(_) {
          _ = vt(_);
          var k = this.min, P = this.max, M = _.min, S = _.max, D = S.x > k.x && M.x < P.x, A = S.y > k.y && M.y < P.y;
          return D && A;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
          return !!(this.min && this.max);
        },
        // @method pad(bufferRatio: Number): Bounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(_) {
          var k = this.min, P = this.max, M = Math.abs(k.x - P.x) * _, S = Math.abs(k.y - P.y) * _;
          return vt(
            J(k.x - M, k.y - S),
            J(P.x + M, P.y + S)
          );
        },
        // @method equals(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle is equivalent to the given bounds.
        equals: function(_) {
          return _ ? (_ = vt(_), this.min.equals(_.getTopLeft()) && this.max.equals(_.getBottomRight())) : !1;
        }
      };
      function vt(_, k) {
        return !_ || _ instanceof lt ? _ : new lt(_, k);
      }
      function yt(_, k) {
        if (_)
          for (var P = k ? [_, k] : _, M = 0, S = P.length; M < S; M++)
            this.extend(P[M]);
      }
      yt.prototype = {
        // @method extend(latlng: LatLng): this
        // Extend the bounds to contain the given point
        // @alternative
        // @method extend(otherBounds: LatLngBounds): this
        // Extend the bounds to contain the given bounds
        extend: function(_) {
          var k = this._southWest, P = this._northEast, M, S;
          if (_ instanceof st)
            M = _, S = _;
          else if (_ instanceof yt) {
            if (M = _._southWest, S = _._northEast, !M || !S)
              return this;
          } else
            return _ ? this.extend(et(_) || ct(_)) : this;
          return !k && !P ? (this._southWest = new st(M.lat, M.lng), this._northEast = new st(S.lat, S.lng)) : (k.lat = Math.min(M.lat, k.lat), k.lng = Math.min(M.lng, k.lng), P.lat = Math.max(S.lat, P.lat), P.lng = Math.max(S.lng, P.lng)), this;
        },
        // @method pad(bufferRatio: Number): LatLngBounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(_) {
          var k = this._southWest, P = this._northEast, M = Math.abs(k.lat - P.lat) * _, S = Math.abs(k.lng - P.lng) * _;
          return new yt(
            new st(k.lat - M, k.lng - S),
            new st(P.lat + M, P.lng + S)
          );
        },
        // @method getCenter(): LatLng
        // Returns the center point of the bounds.
        getCenter: function() {
          return new st(
            (this._southWest.lat + this._northEast.lat) / 2,
            (this._southWest.lng + this._northEast.lng) / 2
          );
        },
        // @method getSouthWest(): LatLng
        // Returns the south-west point of the bounds.
        getSouthWest: function() {
          return this._southWest;
        },
        // @method getNorthEast(): LatLng
        // Returns the north-east point of the bounds.
        getNorthEast: function() {
          return this._northEast;
        },
        // @method getNorthWest(): LatLng
        // Returns the north-west point of the bounds.
        getNorthWest: function() {
          return new st(this.getNorth(), this.getWest());
        },
        // @method getSouthEast(): LatLng
        // Returns the south-east point of the bounds.
        getSouthEast: function() {
          return new st(this.getSouth(), this.getEast());
        },
        // @method getWest(): Number
        // Returns the west longitude of the bounds
        getWest: function() {
          return this._southWest.lng;
        },
        // @method getSouth(): Number
        // Returns the south latitude of the bounds
        getSouth: function() {
          return this._southWest.lat;
        },
        // @method getEast(): Number
        // Returns the east longitude of the bounds
        getEast: function() {
          return this._northEast.lng;
        },
        // @method getNorth(): Number
        // Returns the north latitude of the bounds
        getNorth: function() {
          return this._northEast.lat;
        },
        // @method contains(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle contains the given one.
        // @alternative
        // @method contains (latlng: LatLng): Boolean
        // Returns `true` if the rectangle contains the given point.
        contains: function(_) {
          typeof _[0] == "number" || _ instanceof st || "lat" in _ ? _ = et(_) : _ = ct(_);
          var k = this._southWest, P = this._northEast, M, S;
          return _ instanceof yt ? (M = _.getSouthWest(), S = _.getNorthEast()) : M = S = _, M.lat >= k.lat && S.lat <= P.lat && M.lng >= k.lng && S.lng <= P.lng;
        },
        // @method intersects(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
        intersects: function(_) {
          _ = ct(_);
          var k = this._southWest, P = this._northEast, M = _.getSouthWest(), S = _.getNorthEast(), D = S.lat >= k.lat && M.lat <= P.lat, A = S.lng >= k.lng && M.lng <= P.lng;
          return D && A;
        },
        // @method overlaps(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
        overlaps: function(_) {
          _ = ct(_);
          var k = this._southWest, P = this._northEast, M = _.getSouthWest(), S = _.getNorthEast(), D = S.lat > k.lat && M.lat < P.lat, A = S.lng > k.lng && M.lng < P.lng;
          return D && A;
        },
        // @method toBBoxString(): String
        // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
        toBBoxString: function() {
          return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
        },
        // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
        // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(_, k) {
          return _ ? (_ = ct(_), this._southWest.equals(_.getSouthWest(), k) && this._northEast.equals(_.getNorthEast(), k)) : !1;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
          return !!(this._southWest && this._northEast);
        }
      };
      function ct(_, k) {
        return _ instanceof yt ? _ : new yt(_, k);
      }
      function st(_, k, P) {
        if (isNaN(_) || isNaN(k))
          throw new Error("Invalid LatLng object: (" + _ + ", " + k + ")");
        this.lat = +_, this.lng = +k, P !== void 0 && (this.alt = +P);
      }
      st.prototype = {
        // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
        // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(_, k) {
          if (!_)
            return !1;
          _ = et(_);
          var P = Math.max(
            Math.abs(this.lat - _.lat),
            Math.abs(this.lng - _.lng)
          );
          return P <= (k === void 0 ? 1e-9 : k);
        },
        // @method toString(): String
        // Returns a string representation of the point (for debugging purposes).
        toString: function(_) {
          return "LatLng(" + ot(this.lat, _) + ", " + ot(this.lng, _) + ")";
        },
        // @method distanceTo(otherLatLng: LatLng): Number
        // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
        distanceTo: function(_) {
          return Nt.distance(this, et(_));
        },
        // @method wrap(): LatLng
        // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
        wrap: function() {
          return Nt.wrapLatLng(this);
        },
        // @method toBounds(sizeInMeters: Number): LatLngBounds
        // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
        toBounds: function(_) {
          var k = 180 * _ / 40075017, P = k / Math.cos(Math.PI / 180 * this.lat);
          return ct(
            [this.lat - k, this.lng - P],
            [this.lat + k, this.lng + P]
          );
        },
        clone: function() {
          return new st(this.lat, this.lng, this.alt);
        }
      };
      function et(_, k, P) {
        return _ instanceof st ? _ : Tt(_) && typeof _[0] != "object" ? _.length === 3 ? new st(_[0], _[1], _[2]) : _.length === 2 ? new st(_[0], _[1]) : null : _ == null ? _ : typeof _ == "object" && "lat" in _ ? new st(_.lat, "lng" in _ ? _.lng : _.lon, _.alt) : k === void 0 ? null : new st(_, k, P);
      }
      var zt = {
        // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
        // Projects geographical coordinates into pixel coordinates for a given zoom.
        latLngToPoint: function(_, k) {
          var P = this.projection.project(_), M = this.scale(k);
          return this.transformation._transform(P, M);
        },
        // @method pointToLatLng(point: Point, zoom: Number): LatLng
        // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
        // zoom into geographical coordinates.
        pointToLatLng: function(_, k) {
          var P = this.scale(k), M = this.transformation.untransform(_, P);
          return this.projection.unproject(M);
        },
        // @method project(latlng: LatLng): Point
        // Projects geographical coordinates into coordinates in units accepted for
        // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
        project: function(_) {
          return this.projection.project(_);
        },
        // @method unproject(point: Point): LatLng
        // Given a projected coordinate returns the corresponding LatLng.
        // The inverse of `project`.
        unproject: function(_) {
          return this.projection.unproject(_);
        },
        // @method scale(zoom: Number): Number
        // Returns the scale used when transforming projected coordinates into
        // pixel coordinates for a particular zoom. For example, it returns
        // `256 * 2^zoom` for Mercator-based CRS.
        scale: function(_) {
          return 256 * Math.pow(2, _);
        },
        // @method zoom(scale: Number): Number
        // Inverse of `scale()`, returns the zoom level corresponding to a scale
        // factor of `scale`.
        zoom: function(_) {
          return Math.log(_ / 256) / Math.LN2;
        },
        // @method getProjectedBounds(zoom: Number): Bounds
        // Returns the projection's bounds scaled and transformed for the provided `zoom`.
        getProjectedBounds: function(_) {
          if (this.infinite)
            return null;
          var k = this.projection.bounds, P = this.scale(_), M = this.transformation.transform(k.min, P), S = this.transformation.transform(k.max, P);
          return new lt(M, S);
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates.
        // @property code: String
        // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
        //
        // @property wrapLng: Number[]
        // An array of two numbers defining whether the longitude (horizontal) coordinate
        // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
        // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
        //
        // @property wrapLat: Number[]
        // Like `wrapLng`, but for the latitude (vertical) axis.
        // wrapLng: [min, max],
        // wrapLat: [min, max],
        // @property infinite: Boolean
        // If true, the coordinate space will be unbounded (infinite in both axes)
        infinite: !1,
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where lat and lng has been wrapped according to the
        // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
        wrapLatLng: function(_) {
          var k = this.wrapLng ? V(_.lng, this.wrapLng, !0) : _.lng, P = this.wrapLat ? V(_.lat, this.wrapLat, !0) : _.lat, M = _.alt;
          return new st(P, k, M);
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring
        // that its center is within the CRS's bounds.
        // Only accepts actual `L.LatLngBounds` instances, not arrays.
        wrapLatLngBounds: function(_) {
          var k = _.getCenter(), P = this.wrapLatLng(k), M = k.lat - P.lat, S = k.lng - P.lng;
          if (M === 0 && S === 0)
            return _;
          var D = _.getSouthWest(), A = _.getNorthEast(), N = new st(D.lat - M, D.lng - S), H = new st(A.lat - M, A.lng - S);
          return new yt(N, H);
        }
      }, Nt = T({}, zt, {
        wrapLng: [-180, 180],
        // Mean Earth Radius, as recommended for use by
        // the International Union of Geodesy and Geophysics,
        // see https://rosettacode.org/wiki/Haversine_formula
        R: 6371e3,
        // distance between two geographical points using spherical law of cosines approximation
        distance: function(_, k) {
          var P = Math.PI / 180, M = _.lat * P, S = k.lat * P, D = Math.sin((k.lat - _.lat) * P / 2), A = Math.sin((k.lng - _.lng) * P / 2), N = D * D + Math.cos(M) * Math.cos(S) * A * A, H = 2 * Math.atan2(Math.sqrt(N), Math.sqrt(1 - N));
          return this.R * H;
        }
      }), Mi = 6378137, Ue = {
        R: Mi,
        MAX_LATITUDE: 85.0511287798,
        project: function(_) {
          var k = Math.PI / 180, P = this.MAX_LATITUDE, M = Math.max(Math.min(P, _.lat), -P), S = Math.sin(M * k);
          return new X(
            this.R * _.lng * k,
            this.R * Math.log((1 + S) / (1 - S)) / 2
          );
        },
        unproject: function(_) {
          var k = 180 / Math.PI;
          return new st(
            (2 * Math.atan(Math.exp(_.y / this.R)) - Math.PI / 2) * k,
            _.x * k / this.R
          );
        },
        bounds: (function() {
          var _ = Mi * Math.PI;
          return new lt([-_, -_], [_, _]);
        })()
      };
      function Ge(_, k, P, M) {
        if (Tt(_)) {
          this._a = _[0], this._b = _[1], this._c = _[2], this._d = _[3];
          return;
        }
        this._a = _, this._b = k, this._c = P, this._d = M;
      }
      Ge.prototype = {
        // @method transform(point: Point, scale?: Number): Point
        // Returns a transformed point, optionally multiplied by the given scale.
        // Only accepts actual `L.Point` instances, not arrays.
        transform: function(_, k) {
          return this._transform(_.clone(), k);
        },
        // destructive transform (faster)
        _transform: function(_, k) {
          return k = k || 1, _.x = k * (this._a * _.x + this._b), _.y = k * (this._c * _.y + this._d), _;
        },
        // @method untransform(point: Point, scale?: Number): Point
        // Returns the reverse transformation of the given point, optionally divided
        // by the given scale. Only accepts actual `L.Point` instances, not arrays.
        untransform: function(_, k) {
          return k = k || 1, new X(
            (_.x / k - this._b) / this._a,
            (_.y / k - this._d) / this._c
          );
        }
      };
      function oe(_, k, P, M) {
        return new Ge(_, k, P, M);
      }
      var We = T({}, Nt, {
        code: "EPSG:3857",
        projection: Ue,
        transformation: (function() {
          var _ = 0.5 / (Math.PI * Ue.R);
          return oe(_, 0.5, -_, 0.5);
        })()
      }), Un = T({}, We, {
        code: "EPSG:900913"
      });
      function Ci(_) {
        return document.createElementNS("http://www.w3.org/2000/svg", _);
      }
      function Si(_, k) {
        var P = "", M, S, D, A, N, H;
        for (M = 0, D = _.length; M < D; M++) {
          for (N = _[M], S = 0, A = N.length; S < A; S++)
            H = N[S], P += (S ? "L" : "M") + H.x + " " + H.y;
          P += k ? Y.svg ? "z" : "x" : "";
        }
        return P || "M0 0";
      }
      var Ve = document.documentElement.style, ye = "ActiveXObject" in window, Gn = ye && !document.addEventListener, Di = "msLaunchUri" in navigator && !("documentMode" in document), je = Ct("webkit"), Oi = Ct("android"), Ii = Ct("android 2") || Ct("android 3"), Wn = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), Vn = Oi && Ct("Google") && Wn < 537 && !("AudioNode" in window), qe = !!window.opera, zi = !Di && Ct("chrome"), Ai = Ct("gecko") && !je && !qe && !ye, jn = !zi && Ct("safari"), Zi = Ct("phantom"), Bi = "OTransition" in Ve, qn = navigator.platform.indexOf("Win") === 0, Ri = ye && "transition" in Ve, Ye = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !Ii, Ni = "MozPerspective" in Ve, Yn = !window.L_DISABLE_3D && (Ri || Ye || Ni) && !Bi && !Zi, se = typeof orientation < "u" || Ct("mobile"), Kn = se && je, Jn = se && Ye, Fi = !window.PointerEvent && window.MSPointerEvent, Hi = !!(window.PointerEvent || Fi), Ui = "ontouchstart" in window || !!window.TouchEvent, Xn = !window.L_NO_TOUCH && (Ui || Hi), $n = se && qe, Qn = se && Ai, to = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, eo = (function() {
        var _ = !1;
        try {
          var k = Object.defineProperty({}, "passive", {
            get: function() {
              _ = !0;
            }
          });
          window.addEventListener("testPassiveEventSupport", q, k), window.removeEventListener("testPassiveEventSupport", q, k);
        } catch {
        }
        return _;
      })(), io = (function() {
        return !!document.createElement("canvas").getContext;
      })(), Ke = !!(document.createElementNS && Ci("svg").createSVGRect), no = !!Ke && (function() {
        var _ = document.createElement("div");
        return _.innerHTML = "<svg/>", (_.firstChild && _.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
      })(), oo = !Ke && (function() {
        try {
          var _ = document.createElement("div");
          _.innerHTML = '<v:shape adj="1"/>';
          var k = _.firstChild;
          return k.style.behavior = "url(#default#VML)", k && typeof k.adj == "object";
        } catch {
          return !1;
        }
      })(), so = navigator.platform.indexOf("Mac") === 0, ro = navigator.platform.indexOf("Linux") === 0;
      function Ct(_) {
        return navigator.userAgent.toLowerCase().indexOf(_) >= 0;
      }
      var Y = {
        ie: ye,
        ielt9: Gn,
        edge: Di,
        webkit: je,
        android: Oi,
        android23: Ii,
        androidStock: Vn,
        opera: qe,
        chrome: zi,
        gecko: Ai,
        safari: jn,
        phantom: Zi,
        opera12: Bi,
        win: qn,
        ie3d: Ri,
        webkit3d: Ye,
        gecko3d: Ni,
        any3d: Yn,
        mobile: se,
        mobileWebkit: Kn,
        mobileWebkit3d: Jn,
        msPointer: Fi,
        pointer: Hi,
        touch: Xn,
        touchNative: Ui,
        mobileOpera: $n,
        mobileGecko: Qn,
        retina: to,
        passiveEvents: eo,
        canvas: io,
        svg: Ke,
        vml: oo,
        inlineSvg: no,
        mac: so,
        linux: ro
      }, Gi = Y.msPointer ? "MSPointerDown" : "pointerdown", Wi = Y.msPointer ? "MSPointerMove" : "pointermove", Vi = Y.msPointer ? "MSPointerUp" : "pointerup", ji = Y.msPointer ? "MSPointerCancel" : "pointercancel", Je = {
        touchstart: Gi,
        touchmove: Wi,
        touchend: Vi,
        touchcancel: ji
      }, qi = {
        touchstart: fo,
        touchmove: Le,
        touchend: Le,
        touchcancel: Le
      }, Yt = {}, Yi = !1;
      function ao(_, k, P) {
        return k === "touchstart" && co(), qi[k] ? (P = qi[k].bind(this, P), _.addEventListener(Je[k], P, !1), P) : (console.warn("wrong event specified:", k), q);
      }
      function lo(_, k, P) {
        if (!Je[k]) {
          console.warn("wrong event specified:", k);
          return;
        }
        _.removeEventListener(Je[k], P, !1);
      }
      function ho(_) {
        Yt[_.pointerId] = _;
      }
      function uo(_) {
        Yt[_.pointerId] && (Yt[_.pointerId] = _);
      }
      function Ki(_) {
        delete Yt[_.pointerId];
      }
      function co() {
        Yi || (document.addEventListener(Gi, ho, !0), document.addEventListener(Wi, uo, !0), document.addEventListener(Vi, Ki, !0), document.addEventListener(ji, Ki, !0), Yi = !0);
      }
      function Le(_, k) {
        if (k.pointerType !== (k.MSPOINTER_TYPE_MOUSE || "mouse")) {
          k.touches = [];
          for (var P in Yt)
            k.touches.push(Yt[P]);
          k.changedTouches = [k], _(k);
        }
      }
      function fo(_, k) {
        k.MSPOINTER_TYPE_TOUCH && k.pointerType === k.MSPOINTER_TYPE_TOUCH && pt(k), Le(_, k);
      }
      function _o(_) {
        var k = {}, P, M;
        for (M in _)
          P = _[M], k[M] = P && P.bind ? P.bind(_) : P;
        return _ = k, k.type = "dblclick", k.detail = 2, k.isTrusted = !1, k._simulated = !0, k;
      }
      var po = 200;
      function mo(_, k) {
        _.addEventListener("dblclick", k);
        var P = 0, M;
        function S(D) {
          if (D.detail !== 1) {
            M = D.detail;
            return;
          }
          if (!(D.pointerType === "mouse" || D.sourceCapabilities && !D.sourceCapabilities.firesTouchEvents)) {
            var A = tn(D);
            if (!(A.some(function(H) {
              return H instanceof HTMLLabelElement && H.attributes.for;
            }) && !A.some(function(H) {
              return H instanceof HTMLInputElement || H instanceof HTMLSelectElement;
            }))) {
              var N = Date.now();
              N - P <= po ? (M++, M === 2 && k(_o(D))) : M = 1, P = N;
            }
          }
        }
        return _.addEventListener("click", S), {
          dblclick: k,
          simDblclick: S
        };
      }
      function go(_, k) {
        _.removeEventListener("dblclick", k.dblclick), _.removeEventListener("click", k.simDblclick);
      }
      var Xe = xe(
        ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
      ), re = xe(
        ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
      ), Ji = re === "webkitTransition" || re === "OTransition" ? re + "End" : "transitionend";
      function Xi(_) {
        return typeof _ == "string" ? document.getElementById(_) : _;
      }
      function ae(_, k) {
        var P = _.style[k] || _.currentStyle && _.currentStyle[k];
        if ((!P || P === "auto") && document.defaultView) {
          var M = document.defaultView.getComputedStyle(_, null);
          P = M ? M[k] : null;
        }
        return P === "auto" ? null : P;
      }
      function nt(_, k, P) {
        var M = document.createElement(_);
        return M.className = k || "", P && P.appendChild(M), M;
      }
      function ht(_) {
        var k = _.parentNode;
        k && k.removeChild(_);
      }
      function we(_) {
        for (; _.firstChild; )
          _.removeChild(_.firstChild);
      }
      function Kt(_) {
        var k = _.parentNode;
        k && k.lastChild !== _ && k.appendChild(_);
      }
      function Jt(_) {
        var k = _.parentNode;
        k && k.firstChild !== _ && k.insertBefore(_, k.firstChild);
      }
      function $e(_, k) {
        if (_.classList !== void 0)
          return _.classList.contains(k);
        var P = be(_);
        return P.length > 0 && new RegExp("(^|\\s)" + k + "(\\s|$)").test(P);
      }
      function Q(_, k) {
        if (_.classList !== void 0)
          for (var P = Ut(k), M = 0, S = P.length; M < S; M++)
            _.classList.add(P[M]);
        else if (!$e(_, k)) {
          var D = be(_);
          Qe(_, (D ? D + " " : "") + k);
        }
      }
      function ut(_, k) {
        _.classList !== void 0 ? _.classList.remove(k) : Qe(_, Re((" " + be(_) + " ").replace(" " + k + " ", " ")));
      }
      function Qe(_, k) {
        _.className.baseVal === void 0 ? _.className = k : _.className.baseVal = k;
      }
      function be(_) {
        return _.correspondingElement && (_ = _.correspondingElement), _.className.baseVal === void 0 ? _.className : _.className.baseVal;
      }
      function xt(_, k) {
        "opacity" in _.style ? _.style.opacity = k : "filter" in _.style && vo(_, k);
      }
      function vo(_, k) {
        var P = !1, M = "DXImageTransform.Microsoft.Alpha";
        try {
          P = _.filters.item(M);
        } catch {
          if (k === 1)
            return;
        }
        k = Math.round(k * 100), P ? (P.Enabled = k !== 100, P.Opacity = k) : _.style.filter += " progid:" + M + "(opacity=" + k + ")";
      }
      function xe(_) {
        for (var k = document.documentElement.style, P = 0; P < _.length; P++)
          if (_[P] in k)
            return _[P];
        return !1;
      }
      function Gt(_, k, P) {
        var M = k || new X(0, 0);
        _.style[Xe] = (Y.ie3d ? "translate(" + M.x + "px," + M.y + "px)" : "translate3d(" + M.x + "px," + M.y + "px,0)") + (P ? " scale(" + P + ")" : "");
      }
      function dt(_, k) {
        _._leaflet_pos = k, Y.any3d ? Gt(_, k) : (_.style.left = k.x + "px", _.style.top = k.y + "px");
      }
      function Wt(_) {
        return _._leaflet_pos || new X(0, 0);
      }
      var le, he, ti;
      if ("onselectstart" in document)
        le = function() {
          $(window, "selectstart", pt);
        }, he = function() {
          rt(window, "selectstart", pt);
        };
      else {
        var ue = xe(
          ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
        );
        le = function() {
          if (ue) {
            var _ = document.documentElement.style;
            ti = _[ue], _[ue] = "none";
          }
        }, he = function() {
          ue && (document.documentElement.style[ue] = ti, ti = void 0);
        };
      }
      function ei() {
        $(window, "dragstart", pt);
      }
      function ii() {
        rt(window, "dragstart", pt);
      }
      var ke, ni;
      function oi(_) {
        for (; _.tabIndex === -1; )
          _ = _.parentNode;
        _.style && (Pe(), ke = _, ni = _.style.outlineStyle, _.style.outlineStyle = "none", $(window, "keydown", Pe));
      }
      function Pe() {
        ke && (ke.style.outlineStyle = ni, ke = void 0, ni = void 0, rt(window, "keydown", Pe));
      }
      function $i(_) {
        do
          _ = _.parentNode;
        while ((!_.offsetWidth || !_.offsetHeight) && _ !== document.body);
        return _;
      }
      function si(_) {
        var k = _.getBoundingClientRect();
        return {
          x: k.width / _.offsetWidth || 1,
          y: k.height / _.offsetHeight || 1,
          boundingClientRect: k
        };
      }
      var yo = {
        __proto__: null,
        TRANSFORM: Xe,
        TRANSITION: re,
        TRANSITION_END: Ji,
        get: Xi,
        getStyle: ae,
        create: nt,
        remove: ht,
        empty: we,
        toFront: Kt,
        toBack: Jt,
        hasClass: $e,
        addClass: Q,
        removeClass: ut,
        setClass: Qe,
        getClass: be,
        setOpacity: xt,
        testProp: xe,
        setTransform: Gt,
        setPosition: dt,
        getPosition: Wt,
        get disableTextSelection() {
          return le;
        },
        get enableTextSelection() {
          return he;
        },
        disableImageDrag: ei,
        enableImageDrag: ii,
        preventOutline: oi,
        restoreOutline: Pe,
        getSizedParentNode: $i,
        getScale: si
      };
      function $(_, k, P, M) {
        if (k && typeof k == "object")
          for (var S in k)
            ai(_, S, k[S], P);
        else {
          k = Ut(k);
          for (var D = 0, A = k.length; D < A; D++)
            ai(_, k[D], P, M);
        }
        return this;
      }
      var St = "_leaflet_events";
      function rt(_, k, P, M) {
        if (arguments.length === 1)
          Qi(_), delete _[St];
        else if (k && typeof k == "object")
          for (var S in k)
            li(_, S, k[S], P);
        else if (k = Ut(k), arguments.length === 2)
          Qi(_, function(N) {
            return Ne(k, N) !== -1;
          });
        else
          for (var D = 0, A = k.length; D < A; D++)
            li(_, k[D], P, M);
        return this;
      }
      function Qi(_, k) {
        for (var P in _[St]) {
          var M = P.split(/\d/)[0];
          (!k || k(M)) && li(_, M, null, null, P);
        }
      }
      var ri = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        wheel: !("onwheel" in window) && "mousewheel"
      };
      function ai(_, k, P, M) {
        var S = k + U(P) + (M ? "_" + U(M) : "");
        if (_[St] && _[St][S])
          return this;
        var D = function(N) {
          return P.call(M || _, N || window.event);
        }, A = D;
        !Y.touchNative && Y.pointer && k.indexOf("touch") === 0 ? D = ao(_, k, D) : Y.touch && k === "dblclick" ? D = mo(_, D) : "addEventListener" in _ ? k === "touchstart" || k === "touchmove" || k === "wheel" || k === "mousewheel" ? _.addEventListener(ri[k] || k, D, Y.passiveEvents ? { passive: !1 } : !1) : k === "mouseenter" || k === "mouseleave" ? (D = function(N) {
          N = N || window.event, ui(_, N) && A(N);
        }, _.addEventListener(ri[k], D, !1)) : _.addEventListener(k, A, !1) : _.attachEvent("on" + k, D), _[St] = _[St] || {}, _[St][S] = D;
      }
      function li(_, k, P, M, S) {
        S = S || k + U(P) + (M ? "_" + U(M) : "");
        var D = _[St] && _[St][S];
        if (!D)
          return this;
        !Y.touchNative && Y.pointer && k.indexOf("touch") === 0 ? lo(_, k, D) : Y.touch && k === "dblclick" ? go(_, D) : "removeEventListener" in _ ? _.removeEventListener(ri[k] || k, D, !1) : _.detachEvent("on" + k, D), _[St][S] = null;
      }
      function Vt(_) {
        return _.stopPropagation ? _.stopPropagation() : _.originalEvent ? _.originalEvent._stopped = !0 : _.cancelBubble = !0, this;
      }
      function hi(_) {
        return ai(_, "wheel", Vt), this;
      }
      function ce(_) {
        return $(_, "mousedown touchstart dblclick contextmenu", Vt), _._leaflet_disable_click = !0, this;
      }
      function pt(_) {
        return _.preventDefault ? _.preventDefault() : _.returnValue = !1, this;
      }
      function jt(_) {
        return pt(_), Vt(_), this;
      }
      function tn(_) {
        if (_.composedPath)
          return _.composedPath();
        for (var k = [], P = _.target; P; )
          k.push(P), P = P.parentNode;
        return k;
      }
      function en(_, k) {
        if (!k)
          return new X(_.clientX, _.clientY);
        var P = si(k), M = P.boundingClientRect;
        return new X(
          // offset.left/top values are in page scale (like clientX/Y),
          // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
          (_.clientX - M.left) / P.x - k.clientLeft,
          (_.clientY - M.top) / P.y - k.clientTop
        );
      }
      var Lo = Y.linux && Y.chrome ? window.devicePixelRatio : Y.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
      function nn(_) {
        return Y.edge ? _.wheelDeltaY / 2 : (
          // Don't trust window-geometry-based delta
          _.deltaY && _.deltaMode === 0 ? -_.deltaY / Lo : (
            // Pixels
            _.deltaY && _.deltaMode === 1 ? -_.deltaY * 20 : (
              // Lines
              _.deltaY && _.deltaMode === 2 ? -_.deltaY * 60 : (
                // Pages
                _.deltaX || _.deltaZ ? 0 : (
                  // Skip horizontal/depth wheel events
                  _.wheelDelta ? (_.wheelDeltaY || _.wheelDelta) / 2 : (
                    // Legacy IE pixels
                    _.detail && Math.abs(_.detail) < 32765 ? -_.detail * 20 : (
                      // Legacy Moz lines
                      _.detail ? _.detail / -32765 * 60 : (
                        // Legacy Moz pages
                        0
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }
      function ui(_, k) {
        var P = k.relatedTarget;
        if (!P)
          return !0;
        try {
          for (; P && P !== _; )
            P = P.parentNode;
        } catch {
          return !1;
        }
        return P !== _;
      }
      var wo = {
        __proto__: null,
        on: $,
        off: rt,
        stopPropagation: Vt,
        disableScrollPropagation: hi,
        disableClickPropagation: ce,
        preventDefault: pt,
        stop: jt,
        getPropagationPath: tn,
        getMousePosition: en,
        getWheelDelta: nn,
        isExternalTarget: ui,
        addListener: $,
        removeListener: rt
      }, on = ne.extend({
        // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
        // Run an animation of a given element to a new position, optionally setting
        // duration in seconds (`0.25` by default) and easing linearity factor (3rd
        // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
        // `0.5` by default).
        run: function(_, k, P, M) {
          this.stop(), this._el = _, this._inProgress = !0, this._duration = P || 0.25, this._easeOutPower = 1 / Math.max(M || 0.5, 0.2), this._startPos = Wt(_), this._offset = k.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
        },
        // @method stop()
        // Stops the animation (if currently running).
        stop: function() {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function() {
          this._animId = gt(this._animate, this), this._step();
        },
        _step: function(_) {
          var k = +/* @__PURE__ */ new Date() - this._startTime, P = this._duration * 1e3;
          k < P ? this._runFrame(this._easeOut(k / P), _) : (this._runFrame(1), this._complete());
        },
        _runFrame: function(_, k) {
          var P = this._startPos.add(this._offset.multiplyBy(_));
          k && P._round(), dt(this._el, P), this.fire("step");
        },
        _complete: function() {
          bt(this._animId), this._inProgress = !1, this.fire("end");
        },
        _easeOut: function(_) {
          return 1 - Math.pow(1 - _, this._easeOutPower);
        }
      }), it = ne.extend({
        options: {
          // @section Map State Options
          // @option crs: CRS = L.CRS.EPSG3857
          // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
          // sure what it means.
          crs: We,
          // @option center: LatLng = undefined
          // Initial geographic center of the map
          center: void 0,
          // @option zoom: Number = undefined
          // Initial map zoom level
          zoom: void 0,
          // @option minZoom: Number = *
          // Minimum zoom level of the map.
          // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
          // the lowest of their `minZoom` options will be used instead.
          minZoom: void 0,
          // @option maxZoom: Number = *
          // Maximum zoom level of the map.
          // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
          // the highest of their `maxZoom` options will be used instead.
          maxZoom: void 0,
          // @option layers: Layer[] = []
          // Array of layers that will be added to the map initially
          layers: [],
          // @option maxBounds: LatLngBounds = null
          // When this option is set, the map restricts the view to the given
          // geographical bounds, bouncing the user back if the user tries to pan
          // outside the view. To set the restriction dynamically, use
          // [`setMaxBounds`](#map-setmaxbounds) method.
          maxBounds: void 0,
          // @option renderer: Renderer = *
          // The default method for drawing vector layers on the map. `L.SVG`
          // or `L.Canvas` by default depending on browser support.
          renderer: void 0,
          // @section Animation Options
          // @option zoomAnimation: Boolean = true
          // Whether the map zoom animation is enabled. By default it's enabled
          // in all browsers that support CSS3 Transitions except Android.
          zoomAnimation: !0,
          // @option zoomAnimationThreshold: Number = 4
          // Won't animate zoom if the zoom difference exceeds this value.
          zoomAnimationThreshold: 4,
          // @option fadeAnimation: Boolean = true
          // Whether the tile fade animation is enabled. By default it's enabled
          // in all browsers that support CSS3 Transitions except Android.
          fadeAnimation: !0,
          // @option markerZoomAnimation: Boolean = true
          // Whether markers animate their zoom with the zoom animation, if disabled
          // they will disappear for the length of the animation. By default it's
          // enabled in all browsers that support CSS3 Transitions except Android.
          markerZoomAnimation: !0,
          // @option transform3DLimit: Number = 2^23
          // Defines the maximum size of a CSS translation transform. The default
          // value should not be changed unless a web browser positions layers in
          // the wrong place after doing a large `panBy`.
          transform3DLimit: 8388608,
          // Precision limit of a 32-bit float
          // @section Interaction Options
          // @option zoomSnap: Number = 1
          // Forces the map's zoom level to always be a multiple of this, particularly
          // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
          // By default, the zoom level snaps to the nearest integer; lower values
          // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
          // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
          zoomSnap: 1,
          // @option zoomDelta: Number = 1
          // Controls how much the map's zoom level will change after a
          // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
          // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
          // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
          zoomDelta: 1,
          // @option trackResize: Boolean = true
          // Whether the map automatically handles browser window resize to update itself.
          trackResize: !0
        },
        initialize: function(_, k) {
          k = at(this, k), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(_), this._initLayout(), this._onResize = O(this._onResize, this), this._initEvents(), k.maxBounds && this.setMaxBounds(k.maxBounds), k.zoom !== void 0 && (this._zoom = this._limitZoom(k.zoom)), k.center && k.zoom !== void 0 && this.setView(et(k.center), k.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = re && Y.any3d && !Y.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), $(this._proxy, Ji, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
        },
        // @section Methods for modifying map state
        // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) with the given
        // animation options.
        setView: function(_, k, P) {
          if (k = k === void 0 ? this._zoom : this._limitZoom(k), _ = this._limitCenter(et(_), k, this.options.maxBounds), P = P || {}, this._stop(), this._loaded && !P.reset && P !== !0) {
            P.animate !== void 0 && (P.zoom = T({ animate: P.animate }, P.zoom), P.pan = T({ animate: P.animate, duration: P.duration }, P.pan));
            var M = this._zoom !== k ? this._tryAnimatedZoom && this._tryAnimatedZoom(_, k, P.zoom) : this._tryAnimatedPan(_, P.pan);
            if (M)
              return clearTimeout(this._sizeTimer), this;
          }
          return this._resetView(_, k, P.pan && P.pan.noMoveStart), this;
        },
        // @method setZoom(zoom: Number, options?: Zoom/pan options): this
        // Sets the zoom of the map.
        setZoom: function(_, k) {
          return this._loaded ? this.setView(this.getCenter(), _, { zoom: k }) : (this._zoom = _, this);
        },
        // @method zoomIn(delta?: Number, options?: Zoom options): this
        // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomIn: function(_, k) {
          return _ = _ || (Y.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + _, k);
        },
        // @method zoomOut(delta?: Number, options?: Zoom options): this
        // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomOut: function(_, k) {
          return _ = _ || (Y.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - _, k);
        },
        // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified geographical point on the map
        // stationary (e.g. used internally for scroll zoom and double-click zoom).
        // @alternative
        // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
        setZoomAround: function(_, k, P) {
          var M = this.getZoomScale(k), S = this.getSize().divideBy(2), D = _ instanceof X ? _ : this.latLngToContainerPoint(_), A = D.subtract(S).multiplyBy(1 - 1 / M), N = this.containerPointToLatLng(S.add(A));
          return this.setView(N, k, { zoom: P });
        },
        _getBoundsCenterZoom: function(_, k) {
          k = k || {}, _ = _.getBounds ? _.getBounds() : ct(_);
          var P = J(k.paddingTopLeft || k.padding || [0, 0]), M = J(k.paddingBottomRight || k.padding || [0, 0]), S = this.getBoundsZoom(_, !1, P.add(M));
          if (S = typeof k.maxZoom == "number" ? Math.min(k.maxZoom, S) : S, S === 1 / 0)
            return {
              center: _.getCenter(),
              zoom: S
            };
          var D = M.subtract(P).divideBy(2), A = this.project(_.getSouthWest(), S), N = this.project(_.getNorthEast(), S), H = this.unproject(A.add(N).divideBy(2).add(D), S);
          return {
            center: H,
            zoom: S
          };
        },
        // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets a map view that contains the given geographical bounds with the
        // maximum zoom level possible.
        fitBounds: function(_, k) {
          if (_ = ct(_), !_.isValid())
            throw new Error("Bounds are not valid.");
          var P = this._getBoundsCenterZoom(_, k);
          return this.setView(P.center, P.zoom, k);
        },
        // @method fitWorld(options?: fitBounds options): this
        // Sets a map view that mostly contains the whole world with the maximum
        // zoom level possible.
        fitWorld: function(_) {
          return this.fitBounds([[-90, -180], [90, 180]], _);
        },
        // @method panTo(latlng: LatLng, options?: Pan options): this
        // Pans the map to a given center.
        panTo: function(_, k) {
          return this.setView(_, this._zoom, { pan: k });
        },
        // @method panBy(offset: Point, options?: Pan options): this
        // Pans the map by a given number of pixels (animated).
        panBy: function(_, k) {
          if (_ = J(_).round(), k = k || {}, !_.x && !_.y)
            return this.fire("moveend");
          if (k.animate !== !0 && !this.getSize().contains(_))
            return this._resetView(this.unproject(this.project(this.getCenter()).add(_)), this.getZoom()), this;
          if (this._panAnim || (this._panAnim = new on(), this._panAnim.on({
            step: this._onPanTransitionStep,
            end: this._onPanTransitionEnd
          }, this)), k.noMoveStart || this.fire("movestart"), k.animate !== !1) {
            Q(this._mapPane, "leaflet-pan-anim");
            var P = this._getMapPanePos().subtract(_).round();
            this._panAnim.run(this._mapPane, P, k.duration || 0.25, k.easeLinearity);
          } else
            this._rawPanBy(_), this.fire("move").fire("moveend");
          return this;
        },
        // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) performing a smooth
        // pan-zoom animation.
        flyTo: function(_, k, P) {
          if (P = P || {}, P.animate === !1 || !Y.any3d)
            return this.setView(_, k, P);
          this._stop();
          var M = this.project(this.getCenter()), S = this.project(_), D = this.getSize(), A = this._zoom;
          _ = et(_), k = k === void 0 ? A : k;
          var N = Math.max(D.x, D.y), H = N * this.getZoomScale(A, k), G = S.distanceTo(M) || 1, j = 1.42, K = j * j;
          function tt(ft) {
            var Be = ft ? -1 : 1, hs = ft ? H : N, us = H * H - N * N + Be * K * K * G * G, cs = 2 * hs * K * G, wi = us / cs, Rn = Math.sqrt(wi * wi + 1) - wi, ds = Rn < 1e-9 ? -18 : Math.log(Rn);
            return ds;
          }
          function mt(ft) {
            return (Math.exp(ft) - Math.exp(-ft)) / 2;
          }
          function _t(ft) {
            return (Math.exp(ft) + Math.exp(-ft)) / 2;
          }
          function Pt(ft) {
            return mt(ft) / _t(ft);
          }
          var Lt = tt(0);
          function ie(ft) {
            return N * (_t(Lt) / _t(Lt + j * ft));
          }
          function ss(ft) {
            return N * (_t(Lt) * Pt(Lt + j * ft) - mt(Lt)) / K;
          }
          function rs(ft) {
            return 1 - Math.pow(1 - ft, 1.5);
          }
          var as = Date.now(), Zn = (tt(1) - Lt) / j, ls = P.duration ? 1e3 * P.duration : 1e3 * Zn * 0.8;
          function Bn() {
            var ft = (Date.now() - as) / ls, Be = rs(ft) * Zn;
            ft <= 1 ? (this._flyToFrame = gt(Bn, this), this._move(
              this.unproject(M.add(S.subtract(M).multiplyBy(ss(Be) / G)), A),
              this.getScaleZoom(N / ie(Be), A),
              { flyTo: !0 }
            )) : this._move(_, k)._moveEnd(!0);
          }
          return this._moveStart(!0, P.noMoveStart), Bn.call(this), this;
        },
        // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
        // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
        flyToBounds: function(_, k) {
          var P = this._getBoundsCenterZoom(_, k);
          return this.flyTo(P.center, P.zoom, k);
        },
        // @method setMaxBounds(bounds: LatLngBounds): this
        // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
        setMaxBounds: function(_) {
          return _ = ct(_), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), _.isValid() ? (this.options.maxBounds = _, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
        },
        // @method setMinZoom(zoom: Number): this
        // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
        setMinZoom: function(_) {
          var k = this.options.minZoom;
          return this.options.minZoom = _, this._loaded && k !== _ && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(_) : this;
        },
        // @method setMaxZoom(zoom: Number): this
        // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
        setMaxZoom: function(_) {
          var k = this.options.maxZoom;
          return this.options.maxZoom = _, this._loaded && k !== _ && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(_) : this;
        },
        // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
        // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
        panInsideBounds: function(_, k) {
          this._enforcingBounds = !0;
          var P = this.getCenter(), M = this._limitCenter(P, this._zoom, ct(_));
          return P.equals(M) || this.panTo(M, k), this._enforcingBounds = !1, this;
        },
        // @method panInside(latlng: LatLng, options?: padding options): this
        // Pans the map the minimum amount to make the `latlng` visible. Use
        // padding options to fit the display to more restricted bounds.
        // If `latlng` is already within the (optionally padded) display bounds,
        // the map will not be panned.
        panInside: function(_, k) {
          k = k || {};
          var P = J(k.paddingTopLeft || k.padding || [0, 0]), M = J(k.paddingBottomRight || k.padding || [0, 0]), S = this.project(this.getCenter()), D = this.project(_), A = this.getPixelBounds(), N = vt([A.min.add(P), A.max.subtract(M)]), H = N.getSize();
          if (!N.contains(D)) {
            this._enforcingBounds = !0;
            var G = D.subtract(N.getCenter()), j = N.extend(D).getSize().subtract(H);
            S.x += G.x < 0 ? -j.x : j.x, S.y += G.y < 0 ? -j.y : j.y, this.panTo(this.unproject(S), k), this._enforcingBounds = !1;
          }
          return this;
        },
        // @method invalidateSize(options: Zoom/pan options): this
        // Checks if the map container size changed and updates the map if so —
        // call it after you've changed the map size dynamically, also animating
        // pan by default. If `options.pan` is `false`, panning will not occur.
        // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
        // that it doesn't happen often even if the method is called many
        // times in a row.
        // @alternative
        // @method invalidateSize(animate: Boolean): this
        // Checks if the map container size changed and updates the map if so —
        // call it after you've changed the map size dynamically, also animating
        // pan by default.
        invalidateSize: function(_) {
          if (!this._loaded)
            return this;
          _ = T({
            animate: !1,
            pan: !0
          }, _ === !0 ? { animate: !0 } : _);
          var k = this.getSize();
          this._sizeChanged = !0, this._lastCenter = null;
          var P = this.getSize(), M = k.divideBy(2).round(), S = P.divideBy(2).round(), D = M.subtract(S);
          return !D.x && !D.y ? this : (_.animate && _.pan ? this.panBy(D) : (_.pan && this._rawPanBy(D), this.fire("move"), _.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(O(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
            oldSize: k,
            newSize: P
          }));
        },
        // @section Methods for modifying map state
        // @method stop(): this
        // Stops the currently running `panTo` or `flyTo` animation, if any.
        stop: function() {
          return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
        },
        // @section Geolocation methods
        // @method locate(options?: Locate options): this
        // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
        // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
        // and optionally sets the map view to the user's location with respect to
        // detection accuracy (or to the world view if geolocation failed).
        // Note that, if your page doesn't use HTTPS, this method will fail in
        // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
        // See `Locate options` for more details.
        locate: function(_) {
          if (_ = this._locateOptions = T({
            timeout: 1e4,
            watch: !1
            // setView: false
            // maxZoom: <Number>
            // maximumAge: 0
            // enableHighAccuracy: false
          }, _), !("geolocation" in navigator))
            return this._handleGeolocationError({
              code: 0,
              message: "Geolocation not supported."
            }), this;
          var k = O(this._handleGeolocationResponse, this), P = O(this._handleGeolocationError, this);
          return _.watch ? this._locationWatchId = navigator.geolocation.watchPosition(k, P, _) : navigator.geolocation.getCurrentPosition(k, P, _), this;
        },
        // @method stopLocate(): this
        // Stops watching location previously initiated by `map.locate({watch: true})`
        // and aborts resetting the map view if map.locate was called with
        // `{setView: true}`.
        stopLocate: function() {
          return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
        },
        _handleGeolocationError: function(_) {
          if (this._container._leaflet_id) {
            var k = _.code, P = _.message || (k === 1 ? "permission denied" : k === 2 ? "position unavailable" : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
              code: k,
              message: "Geolocation error: " + P + "."
            });
          }
        },
        _handleGeolocationResponse: function(_) {
          if (this._container._leaflet_id) {
            var k = _.coords.latitude, P = _.coords.longitude, M = new st(k, P), S = M.toBounds(_.coords.accuracy * 2), D = this._locateOptions;
            if (D.setView) {
              var A = this.getBoundsZoom(S);
              this.setView(M, D.maxZoom ? Math.min(A, D.maxZoom) : A);
            }
            var N = {
              latlng: M,
              bounds: S,
              timestamp: _.timestamp
            };
            for (var H in _.coords)
              typeof _.coords[H] == "number" && (N[H] = _.coords[H]);
            this.fire("locationfound", N);
          }
        },
        // TODO Appropriate docs section?
        // @section Other Methods
        // @method addHandler(name: String, HandlerClass: Function): this
        // Adds a new `Handler` to the map, given its name and constructor function.
        addHandler: function(_, k) {
          if (!k)
            return this;
          var P = this[_] = new k(this);
          return this._handlers.push(P), this.options[_] && P.enable(), this;
        },
        // @method remove(): this
        // Destroys the map and clears all related event listeners.
        remove: function() {
          if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id)
            throw new Error("Map container is being reused by another instance");
          try {
            delete this._container._leaflet_id, delete this._containerId;
          } catch {
            this._container._leaflet_id = void 0, this._containerId = void 0;
          }
          this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), ht(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (bt(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
          var _;
          for (_ in this._layers)
            this._layers[_].remove();
          for (_ in this._panes)
            ht(this._panes[_]);
          return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
        },
        // @section Other Methods
        // @method createPane(name: String, container?: HTMLElement): HTMLElement
        // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
        // then returns it. The pane is created as a child of `container`, or
        // as a child of the main map pane if not set.
        createPane: function(_, k) {
          var P = "leaflet-pane" + (_ ? " leaflet-" + _.replace("Pane", "") + "-pane" : ""), M = nt("div", P, k || this._mapPane);
          return _ && (this._panes[_] = M), M;
        },
        // @section Methods for Getting Map State
        // @method getCenter(): LatLng
        // Returns the geographical center of the map view
        getCenter: function() {
          return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
        },
        // @method getZoom(): Number
        // Returns the current zoom level of the map view
        getZoom: function() {
          return this._zoom;
        },
        // @method getBounds(): LatLngBounds
        // Returns the geographical bounds visible in the current map view
        getBounds: function() {
          var _ = this.getPixelBounds(), k = this.unproject(_.getBottomLeft()), P = this.unproject(_.getTopRight());
          return new yt(k, P);
        },
        // @method getMinZoom(): Number
        // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
        getMinZoom: function() {
          return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
        },
        // @method getMaxZoom(): Number
        // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
        getMaxZoom: function() {
          return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
        },
        // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
        // Returns the maximum zoom level on which the given bounds fit to the map
        // view in its entirety. If `inside` (optional) is set to `true`, the method
        // instead returns the minimum zoom level on which the map view fits into
        // the given bounds in its entirety.
        getBoundsZoom: function(_, k, P) {
          _ = ct(_), P = J(P || [0, 0]);
          var M = this.getZoom() || 0, S = this.getMinZoom(), D = this.getMaxZoom(), A = _.getNorthWest(), N = _.getSouthEast(), H = this.getSize().subtract(P), G = vt(this.project(N, M), this.project(A, M)).getSize(), j = Y.any3d ? this.options.zoomSnap : 1, K = H.x / G.x, tt = H.y / G.y, mt = k ? Math.max(K, tt) : Math.min(K, tt);
          return M = this.getScaleZoom(mt, M), j && (M = Math.round(M / (j / 100)) * (j / 100), M = k ? Math.ceil(M / j) * j : Math.floor(M / j) * j), Math.max(S, Math.min(D, M));
        },
        // @method getSize(): Point
        // Returns the current size of the map container (in pixels).
        getSize: function() {
          return (!this._size || this._sizeChanged) && (this._size = new X(
            this._container.clientWidth || 0,
            this._container.clientHeight || 0
          ), this._sizeChanged = !1), this._size.clone();
        },
        // @method getPixelBounds(): Bounds
        // Returns the bounds of the current map view in projected pixel
        // coordinates (sometimes useful in layer and overlay implementations).
        getPixelBounds: function(_, k) {
          var P = this._getTopLeftPoint(_, k);
          return new lt(P, P.add(this.getSize()));
        },
        // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
        // the map pane? "left point of the map layer" can be confusing, specially
        // since there can be negative offsets.
        // @method getPixelOrigin(): Point
        // Returns the projected pixel coordinates of the top left point of
        // the map layer (useful in custom layer and overlay implementations).
        getPixelOrigin: function() {
          return this._checkIfLoaded(), this._pixelOrigin;
        },
        // @method getPixelWorldBounds(zoom?: Number): Bounds
        // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
        // If `zoom` is omitted, the map's current zoom level is used.
        getPixelWorldBounds: function(_) {
          return this.options.crs.getProjectedBounds(_ === void 0 ? this.getZoom() : _);
        },
        // @section Other Methods
        // @method getPane(pane: String|HTMLElement): HTMLElement
        // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
        getPane: function(_) {
          return typeof _ == "string" ? this._panes[_] : _;
        },
        // @method getPanes(): Object
        // Returns a plain object containing the names of all [panes](#map-pane) as keys and
        // the panes as values.
        getPanes: function() {
          return this._panes;
        },
        // @method getContainer: HTMLElement
        // Returns the HTML element that contains the map.
        getContainer: function() {
          return this._container;
        },
        // @section Conversion Methods
        // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
        // Returns the scale factor to be applied to a map transition from zoom level
        // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
        getZoomScale: function(_, k) {
          var P = this.options.crs;
          return k = k === void 0 ? this._zoom : k, P.scale(_) / P.scale(k);
        },
        // @method getScaleZoom(scale: Number, fromZoom: Number): Number
        // Returns the zoom level that the map would end up at, if it is at `fromZoom`
        // level and everything is scaled by a factor of `scale`. Inverse of
        // [`getZoomScale`](#map-getZoomScale).
        getScaleZoom: function(_, k) {
          var P = this.options.crs;
          k = k === void 0 ? this._zoom : k;
          var M = P.zoom(_ * P.scale(k));
          return isNaN(M) ? 1 / 0 : M;
        },
        // @method project(latlng: LatLng, zoom: Number): Point
        // Projects a geographical coordinate `LatLng` according to the projection
        // of the map's CRS, then scales it according to `zoom` and the CRS's
        // `Transformation`. The result is pixel coordinate relative to
        // the CRS origin.
        project: function(_, k) {
          return k = k === void 0 ? this._zoom : k, this.options.crs.latLngToPoint(et(_), k);
        },
        // @method unproject(point: Point, zoom: Number): LatLng
        // Inverse of [`project`](#map-project).
        unproject: function(_, k) {
          return k = k === void 0 ? this._zoom : k, this.options.crs.pointToLatLng(J(_), k);
        },
        // @method layerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding geographical coordinate (for the current zoom level).
        layerPointToLatLng: function(_) {
          var k = J(_).add(this.getPixelOrigin());
          return this.unproject(k);
        },
        // @method latLngToLayerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the [origin pixel](#map-getpixelorigin).
        latLngToLayerPoint: function(_) {
          var k = this.project(et(_))._round();
          return k._subtract(this.getPixelOrigin());
        },
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
        // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
        // CRS's bounds.
        // By default this means longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees.
        wrapLatLng: function(_) {
          return this.options.crs.wrapLatLng(et(_));
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring that
        // its center is within the CRS's bounds.
        // By default this means the center longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees, and the majority of the bounds
        // overlaps the CRS's bounds.
        wrapLatLngBounds: function(_) {
          return this.options.crs.wrapLatLngBounds(ct(_));
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates according to
        // the map's CRS. By default this measures distance in meters.
        distance: function(_, k) {
          return this.options.crs.distance(et(_), et(k));
        },
        // @method containerPointToLayerPoint(point: Point): Point
        // Given a pixel coordinate relative to the map container, returns the corresponding
        // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
        containerPointToLayerPoint: function(_) {
          return J(_).subtract(this._getMapPanePos());
        },
        // @method layerPointToContainerPoint(point: Point): Point
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding pixel coordinate relative to the map container.
        layerPointToContainerPoint: function(_) {
          return J(_).add(this._getMapPanePos());
        },
        // @method containerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the map container, returns
        // the corresponding geographical coordinate (for the current zoom level).
        containerPointToLatLng: function(_) {
          var k = this.containerPointToLayerPoint(J(_));
          return this.layerPointToLatLng(k);
        },
        // @method latLngToContainerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the map container.
        latLngToContainerPoint: function(_) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(et(_)));
        },
        // @method mouseEventToContainerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to the
        // map container where the event took place.
        mouseEventToContainerPoint: function(_) {
          return en(_, this._container);
        },
        // @method mouseEventToLayerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to
        // the [origin pixel](#map-getpixelorigin) where the event took place.
        mouseEventToLayerPoint: function(_) {
          return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(_));
        },
        // @method mouseEventToLatLng(ev: MouseEvent): LatLng
        // Given a MouseEvent object, returns geographical coordinate where the
        // event took place.
        mouseEventToLatLng: function(_) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(_));
        },
        // map initialization methods
        _initContainer: function(_) {
          var k = this._container = Xi(_);
          if (k) {
            if (k._leaflet_id)
              throw new Error("Map container is already initialized.");
          } else throw new Error("Map container not found.");
          $(k, "scroll", this._onScroll, this), this._containerId = U(k);
        },
        _initLayout: function() {
          var _ = this._container;
          this._fadeAnimated = this.options.fadeAnimation && Y.any3d, Q(_, "leaflet-container" + (Y.touch ? " leaflet-touch" : "") + (Y.retina ? " leaflet-retina" : "") + (Y.ielt9 ? " leaflet-oldie" : "") + (Y.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
          var k = ae(_, "position");
          k !== "absolute" && k !== "relative" && k !== "fixed" && k !== "sticky" && (_.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
        },
        _initPanes: function() {
          var _ = this._panes = {};
          this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), dt(this._mapPane, new X(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (Q(_.markerPane, "leaflet-zoom-hide"), Q(_.shadowPane, "leaflet-zoom-hide"));
        },
        // private methods that modify map state
        // @section Map state change events
        _resetView: function(_, k, P) {
          dt(this._mapPane, new X(0, 0));
          var M = !this._loaded;
          this._loaded = !0, k = this._limitZoom(k), this.fire("viewprereset");
          var S = this._zoom !== k;
          this._moveStart(S, P)._move(_, k)._moveEnd(S), this.fire("viewreset"), M && this.fire("load");
        },
        _moveStart: function(_, k) {
          return _ && this.fire("zoomstart"), k || this.fire("movestart"), this;
        },
        _move: function(_, k, P, M) {
          k === void 0 && (k = this._zoom);
          var S = this._zoom !== k;
          return this._zoom = k, this._lastCenter = _, this._pixelOrigin = this._getNewPixelOrigin(_), M ? P && P.pinch && this.fire("zoom", P) : ((S || P && P.pinch) && this.fire("zoom", P), this.fire("move", P)), this;
        },
        _moveEnd: function(_) {
          return _ && this.fire("zoomend"), this.fire("moveend");
        },
        _stop: function() {
          return bt(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
        },
        _rawPanBy: function(_) {
          dt(this._mapPane, this._getMapPanePos().subtract(_));
        },
        _getZoomSpan: function() {
          return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function() {
          this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function() {
          if (!this._loaded)
            throw new Error("Set map center and zoom first.");
        },
        // DOM event handling
        // @section Interaction events
        _initEvents: function(_) {
          this._targets = {}, this._targets[U(this._container)] = this;
          var k = _ ? rt : $;
          k(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && k(window, "resize", this._onResize, this), Y.any3d && this.options.transform3DLimit && (_ ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function() {
          bt(this._resizeRequest), this._resizeRequest = gt(
            function() {
              this.invalidateSize({ debounceMoveend: !0 });
            },
            this
          );
        },
        _onScroll: function() {
          this._container.scrollTop = 0, this._container.scrollLeft = 0;
        },
        _onMoveEnd: function() {
          var _ = this._getMapPanePos();
          Math.max(Math.abs(_.x), Math.abs(_.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function(_, k) {
          for (var P = [], M, S = k === "mouseout" || k === "mouseover", D = _.target || _.srcElement, A = !1; D; ) {
            if (M = this._targets[U(D)], M && (k === "click" || k === "preclick") && this._draggableMoved(M)) {
              A = !0;
              break;
            }
            if (M && M.listens(k, !0) && (S && !ui(D, _) || (P.push(M), S)) || D === this._container)
              break;
            D = D.parentNode;
          }
          return !P.length && !A && !S && this.listens(k, !0) && (P = [this]), P;
        },
        _isClickDisabled: function(_) {
          for (; _ && _ !== this._container; ) {
            if (_._leaflet_disable_click)
              return !0;
            _ = _.parentNode;
          }
        },
        _handleDOMEvent: function(_) {
          var k = _.target || _.srcElement;
          if (!(!this._loaded || k._leaflet_disable_events || _.type === "click" && this._isClickDisabled(k))) {
            var P = _.type;
            P === "mousedown" && oi(k), this._fireDOMEvent(_, P);
          }
        },
        _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
        _fireDOMEvent: function(_, k, P) {
          if (_.type === "click") {
            var M = T({}, _);
            M.type = "preclick", this._fireDOMEvent(M, M.type, P);
          }
          var S = this._findEventTargets(_, k);
          if (P) {
            for (var D = [], A = 0; A < P.length; A++)
              P[A].listens(k, !0) && D.push(P[A]);
            S = D.concat(S);
          }
          if (S.length) {
            k === "contextmenu" && pt(_);
            var N = S[0], H = {
              originalEvent: _
            };
            if (_.type !== "keypress" && _.type !== "keydown" && _.type !== "keyup") {
              var G = N.getLatLng && (!N._radius || N._radius <= 10);
              H.containerPoint = G ? this.latLngToContainerPoint(N.getLatLng()) : this.mouseEventToContainerPoint(_), H.layerPoint = this.containerPointToLayerPoint(H.containerPoint), H.latlng = G ? N.getLatLng() : this.layerPointToLatLng(H.layerPoint);
            }
            for (A = 0; A < S.length; A++)
              if (S[A].fire(k, H, !0), H.originalEvent._stopped || S[A].options.bubblingMouseEvents === !1 && Ne(this._mouseEvents, k) !== -1)
                return;
          }
        },
        _draggableMoved: function(_) {
          return _ = _.dragging && _.dragging.enabled() ? _ : this, _.dragging && _.dragging.moved() || this.boxZoom && this.boxZoom.moved();
        },
        _clearHandlers: function() {
          for (var _ = 0, k = this._handlers.length; _ < k; _++)
            this._handlers[_].disable();
        },
        // @section Other Methods
        // @method whenReady(fn: Function, context?: Object): this
        // Runs the given function `fn` when the map gets initialized with
        // a view (center and zoom) and at least one layer, or immediately
        // if it's already initialized, optionally passing a function context.
        whenReady: function(_, k) {
          return this._loaded ? _.call(k || this, { target: this }) : this.on("load", _, k), this;
        },
        // private methods for getting map state
        _getMapPanePos: function() {
          return Wt(this._mapPane) || new X(0, 0);
        },
        _moved: function() {
          var _ = this._getMapPanePos();
          return _ && !_.equals([0, 0]);
        },
        _getTopLeftPoint: function(_, k) {
          var P = _ && k !== void 0 ? this._getNewPixelOrigin(_, k) : this.getPixelOrigin();
          return P.subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function(_, k) {
          var P = this.getSize()._divideBy(2);
          return this.project(_, k)._subtract(P)._add(this._getMapPanePos())._round();
        },
        _latLngToNewLayerPoint: function(_, k, P) {
          var M = this._getNewPixelOrigin(P, k);
          return this.project(_, k)._subtract(M);
        },
        _latLngBoundsToNewLayerBounds: function(_, k, P) {
          var M = this._getNewPixelOrigin(P, k);
          return vt([
            this.project(_.getSouthWest(), k)._subtract(M),
            this.project(_.getNorthWest(), k)._subtract(M),
            this.project(_.getSouthEast(), k)._subtract(M),
            this.project(_.getNorthEast(), k)._subtract(M)
          ]);
        },
        // layer point of the current center
        _getCenterLayerPoint: function() {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        // offset of the specified place to the current center in pixels
        _getCenterOffset: function(_) {
          return this.latLngToLayerPoint(_).subtract(this._getCenterLayerPoint());
        },
        // adjust center for view to get inside bounds
        _limitCenter: function(_, k, P) {
          if (!P)
            return _;
          var M = this.project(_, k), S = this.getSize().divideBy(2), D = new lt(M.subtract(S), M.add(S)), A = this._getBoundsOffset(D, P, k);
          return Math.abs(A.x) <= 1 && Math.abs(A.y) <= 1 ? _ : this.unproject(M.add(A), k);
        },
        // adjust offset for view to get inside bounds
        _limitOffset: function(_, k) {
          if (!k)
            return _;
          var P = this.getPixelBounds(), M = new lt(P.min.add(_), P.max.add(_));
          return _.add(this._getBoundsOffset(M, k));
        },
        // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
        _getBoundsOffset: function(_, k, P) {
          var M = vt(
            this.project(k.getNorthEast(), P),
            this.project(k.getSouthWest(), P)
          ), S = M.min.subtract(_.min), D = M.max.subtract(_.max), A = this._rebound(S.x, -D.x), N = this._rebound(S.y, -D.y);
          return new X(A, N);
        },
        _rebound: function(_, k) {
          return _ + k > 0 ? Math.round(_ - k) / 2 : Math.max(0, Math.ceil(_)) - Math.max(0, Math.floor(k));
        },
        _limitZoom: function(_) {
          var k = this.getMinZoom(), P = this.getMaxZoom(), M = Y.any3d ? this.options.zoomSnap : 1;
          return M && (_ = Math.round(_ / M) * M), Math.max(k, Math.min(P, _));
        },
        _onPanTransitionStep: function() {
          this.fire("move");
        },
        _onPanTransitionEnd: function() {
          ut(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        },
        _tryAnimatedPan: function(_, k) {
          var P = this._getCenterOffset(_)._trunc();
          return (k && k.animate) !== !0 && !this.getSize().contains(P) ? !1 : (this.panBy(P, k), !0);
        },
        _createAnimProxy: function() {
          var _ = this._proxy = nt("div", "leaflet-proxy leaflet-zoom-animated");
          this._panes.mapPane.appendChild(_), this.on("zoomanim", function(k) {
            var P = Xe, M = this._proxy.style[P];
            Gt(this._proxy, this.project(k.center, k.zoom), this.getZoomScale(k.zoom, 1)), M === this._proxy.style[P] && this._animatingZoom && this._onZoomTransitionEnd();
          }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function() {
          ht(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
        },
        _animMoveEnd: function() {
          var _ = this.getCenter(), k = this.getZoom();
          Gt(this._proxy, this.project(_, k), this.getZoomScale(k, 1));
        },
        _catchTransitionEnd: function(_) {
          this._animatingZoom && _.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function() {
          return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
        },
        _tryAnimatedZoom: function(_, k, P) {
          if (this._animatingZoom)
            return !0;
          if (P = P || {}, !this._zoomAnimated || P.animate === !1 || this._nothingToAnimate() || Math.abs(k - this._zoom) > this.options.zoomAnimationThreshold)
            return !1;
          var M = this.getZoomScale(k), S = this._getCenterOffset(_)._divideBy(1 - 1 / M);
          return P.animate !== !0 && !this.getSize().contains(S) ? !1 : (gt(function() {
            this._moveStart(!0, P.noMoveStart || !1)._animateZoom(_, k, !0);
          }, this), !0);
        },
        _animateZoom: function(_, k, P, M) {
          this._mapPane && (P && (this._animatingZoom = !0, this._animateToCenter = _, this._animateToZoom = k, Q(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
            center: _,
            zoom: k,
            noUpdate: M
          }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(O(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function() {
          this._animatingZoom && (this._mapPane && ut(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
        }
      });
      function bo(_, k) {
        return new it(_, k);
      }
      var Et = It.extend({
        // @section
        // @aka Control Options
        options: {
          // @option position: String = 'topright'
          // The position of the control (one of the map corners). Possible values are `'topleft'`,
          // `'topright'`, `'bottomleft'` or `'bottomright'`
          position: "topright"
        },
        initialize: function(_) {
          at(this, _);
        },
        /* @section
         * Classes extending L.Control will inherit the following methods:
         *
         * @method getPosition: string
         * Returns the position of the control.
         */
        getPosition: function() {
          return this.options.position;
        },
        // @method setPosition(position: string): this
        // Sets the position of the control.
        setPosition: function(_) {
          var k = this._map;
          return k && k.removeControl(this), this.options.position = _, k && k.addControl(this), this;
        },
        // @method getContainer: HTMLElement
        // Returns the HTMLElement that contains the control.
        getContainer: function() {
          return this._container;
        },
        // @method addTo(map: Map): this
        // Adds the control to the given map.
        addTo: function(_) {
          this.remove(), this._map = _;
          var k = this._container = this.onAdd(_), P = this.getPosition(), M = _._controlCorners[P];
          return Q(k, "leaflet-control"), P.indexOf("bottom") !== -1 ? M.insertBefore(k, M.firstChild) : M.appendChild(k), this._map.on("unload", this.remove, this), this;
        },
        // @method remove: this
        // Removes the control from the map it is currently active on.
        remove: function() {
          return this._map ? (ht(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
        },
        _refocusOnMap: function(_) {
          this._map && _ && _.screenX > 0 && _.screenY > 0 && this._map.getContainer().focus();
        }
      }), de = function(_) {
        return new Et(_);
      };
      it.include({
        // @method addControl(control: Control): this
        // Adds the given control to the map
        addControl: function(_) {
          return _.addTo(this), this;
        },
        // @method removeControl(control: Control): this
        // Removes the given control from the map
        removeControl: function(_) {
          return _.remove(), this;
        },
        _initControlPos: function() {
          var _ = this._controlCorners = {}, k = "leaflet-", P = this._controlContainer = nt("div", k + "control-container", this._container);
          function M(S, D) {
            var A = k + S + " " + k + D;
            _[S + D] = nt("div", A, P);
          }
          M("top", "left"), M("top", "right"), M("bottom", "left"), M("bottom", "right");
        },
        _clearControlPos: function() {
          for (var _ in this._controlCorners)
            ht(this._controlCorners[_]);
          ht(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
        }
      });
      var sn = Et.extend({
        // @section
        // @aka Control.Layers options
        options: {
          // @option collapsed: Boolean = true
          // If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
          collapsed: !0,
          position: "topright",
          // @option autoZIndex: Boolean = true
          // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
          autoZIndex: !0,
          // @option hideSingleBase: Boolean = false
          // If `true`, the base layers in the control will be hidden when there is only one.
          hideSingleBase: !1,
          // @option sortLayers: Boolean = false
          // Whether to sort the layers. When `false`, layers will keep the order
          // in which they were added to the control.
          sortLayers: !1,
          // @option sortFunction: Function = *
          // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
          // that will be used for sorting the layers, when `sortLayers` is `true`.
          // The function receives both the `L.Layer` instances and their names, as in
          // `sortFunction(layerA, layerB, nameA, nameB)`.
          // By default, it sorts layers alphabetically by their name.
          sortFunction: function(_, k, P, M) {
            return P < M ? -1 : M < P ? 1 : 0;
          }
        },
        initialize: function(_, k, P) {
          at(this, P), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
          for (var M in _)
            this._addLayer(_[M], M);
          for (M in k)
            this._addLayer(k[M], M, !0);
        },
        onAdd: function(_) {
          this._initLayout(), this._update(), this._map = _, _.on("zoomend", this._checkDisabledLayers, this);
          for (var k = 0; k < this._layers.length; k++)
            this._layers[k].layer.on("add remove", this._onLayerChange, this);
          return this._container;
        },
        addTo: function(_) {
          return Et.prototype.addTo.call(this, _), this._expandIfNotCollapsed();
        },
        onRemove: function() {
          this._map.off("zoomend", this._checkDisabledLayers, this);
          for (var _ = 0; _ < this._layers.length; _++)
            this._layers[_].layer.off("add remove", this._onLayerChange, this);
        },
        // @method addBaseLayer(layer: Layer, name: String): this
        // Adds a base layer (radio button entry) with the given name to the control.
        addBaseLayer: function(_, k) {
          return this._addLayer(_, k), this._map ? this._update() : this;
        },
        // @method addOverlay(layer: Layer, name: String): this
        // Adds an overlay (checkbox entry) with the given name to the control.
        addOverlay: function(_, k) {
          return this._addLayer(_, k, !0), this._map ? this._update() : this;
        },
        // @method removeLayer(layer: Layer): this
        // Remove the given layer from the control.
        removeLayer: function(_) {
          _.off("add remove", this._onLayerChange, this);
          var k = this._getLayer(U(_));
          return k && this._layers.splice(this._layers.indexOf(k), 1), this._map ? this._update() : this;
        },
        // @method expand(): this
        // Expand the control container if collapsed.
        expand: function() {
          Q(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
          var _ = this._map.getSize().y - (this._container.offsetTop + 50);
          return _ < this._section.clientHeight ? (Q(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = _ + "px") : ut(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
        },
        // @method collapse(): this
        // Collapse the control container if expanded.
        collapse: function() {
          return ut(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function() {
          var _ = "leaflet-control-layers", k = this._container = nt("div", _), P = this.options.collapsed;
          k.setAttribute("aria-haspopup", !0), ce(k), hi(k);
          var M = this._section = nt("section", _ + "-list");
          P && (this._map.on("click", this.collapse, this), $(k, {
            mouseenter: this._expandSafely,
            mouseleave: this.collapse
          }, this));
          var S = this._layersLink = nt("a", _ + "-toggle", k);
          S.href = "#", S.title = "Layers", S.setAttribute("role", "button"), $(S, {
            keydown: function(D) {
              D.keyCode === 13 && this._expandSafely();
            },
            // Certain screen readers intercept the key event and instead send a click event
            click: function(D) {
              pt(D), this._expandSafely();
            }
          }, this), P || this.expand(), this._baseLayersList = nt("div", _ + "-base", M), this._separator = nt("div", _ + "-separator", M), this._overlaysList = nt("div", _ + "-overlays", M), k.appendChild(M);
        },
        _getLayer: function(_) {
          for (var k = 0; k < this._layers.length; k++)
            if (this._layers[k] && U(this._layers[k].layer) === _)
              return this._layers[k];
        },
        _addLayer: function(_, k, P) {
          this._map && _.on("add remove", this._onLayerChange, this), this._layers.push({
            layer: _,
            name: k,
            overlay: P
          }), this.options.sortLayers && this._layers.sort(O(function(M, S) {
            return this.options.sortFunction(M.layer, S.layer, M.name, S.name);
          }, this)), this.options.autoZIndex && _.setZIndex && (this._lastZIndex++, _.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
        },
        _update: function() {
          if (!this._container)
            return this;
          we(this._baseLayersList), we(this._overlaysList), this._layerControlInputs = [];
          var _, k, P, M, S = 0;
          for (P = 0; P < this._layers.length; P++)
            M = this._layers[P], this._addItem(M), k = k || M.overlay, _ = _ || !M.overlay, S += M.overlay ? 0 : 1;
          return this.options.hideSingleBase && (_ = _ && S > 1, this._baseLayersList.style.display = _ ? "" : "none"), this._separator.style.display = k && _ ? "" : "none", this;
        },
        _onLayerChange: function(_) {
          this._handlingClick || this._update();
          var k = this._getLayer(U(_.target)), P = k.overlay ? _.type === "add" ? "overlayadd" : "overlayremove" : _.type === "add" ? "baselayerchange" : null;
          P && this._map.fire(P, k);
        },
        // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
        _createRadioElement: function(_, k) {
          var P = '<input type="radio" class="leaflet-control-layers-selector" name="' + _ + '"' + (k ? ' checked="checked"' : "") + "/>", M = document.createElement("div");
          return M.innerHTML = P, M.firstChild;
        },
        _addItem: function(_) {
          var k = document.createElement("label"), P = this._map.hasLayer(_.layer), M;
          _.overlay ? (M = document.createElement("input"), M.type = "checkbox", M.className = "leaflet-control-layers-selector", M.defaultChecked = P) : M = this._createRadioElement("leaflet-base-layers_" + U(this), P), this._layerControlInputs.push(M), M.layerId = U(_.layer), $(M, "click", this._onInputClick, this);
          var S = document.createElement("span");
          S.innerHTML = " " + _.name;
          var D = document.createElement("span");
          k.appendChild(D), D.appendChild(M), D.appendChild(S);
          var A = _.overlay ? this._overlaysList : this._baseLayersList;
          return A.appendChild(k), this._checkDisabledLayers(), k;
        },
        _onInputClick: function() {
          if (!this._preventClick) {
            var _ = this._layerControlInputs, k, P, M = [], S = [];
            this._handlingClick = !0;
            for (var D = _.length - 1; D >= 0; D--)
              k = _[D], P = this._getLayer(k.layerId).layer, k.checked ? M.push(P) : k.checked || S.push(P);
            for (D = 0; D < S.length; D++)
              this._map.hasLayer(S[D]) && this._map.removeLayer(S[D]);
            for (D = 0; D < M.length; D++)
              this._map.hasLayer(M[D]) || this._map.addLayer(M[D]);
            this._handlingClick = !1, this._refocusOnMap();
          }
        },
        _checkDisabledLayers: function() {
          for (var _ = this._layerControlInputs, k, P, M = this._map.getZoom(), S = _.length - 1; S >= 0; S--)
            k = _[S], P = this._getLayer(k.layerId).layer, k.disabled = P.options.minZoom !== void 0 && M < P.options.minZoom || P.options.maxZoom !== void 0 && M > P.options.maxZoom;
        },
        _expandIfNotCollapsed: function() {
          return this._map && !this.options.collapsed && this.expand(), this;
        },
        _expandSafely: function() {
          var _ = this._section;
          this._preventClick = !0, $(_, "click", pt), this.expand();
          var k = this;
          setTimeout(function() {
            rt(_, "click", pt), k._preventClick = !1;
          });
        }
      }), xo = function(_, k, P) {
        return new sn(_, k, P);
      }, ci = Et.extend({
        // @section
        // @aka Control.Zoom options
        options: {
          position: "topleft",
          // @option zoomInText: String = '<span aria-hidden="true">+</span>'
          // The text set on the 'zoom in' button.
          zoomInText: '<span aria-hidden="true">+</span>',
          // @option zoomInTitle: String = 'Zoom in'
          // The title set on the 'zoom in' button.
          zoomInTitle: "Zoom in",
          // @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
          // The text set on the 'zoom out' button.
          zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
          // @option zoomOutTitle: String = 'Zoom out'
          // The title set on the 'zoom out' button.
          zoomOutTitle: "Zoom out"
        },
        onAdd: function(_) {
          var k = "leaflet-control-zoom", P = nt("div", k + " leaflet-bar"), M = this.options;
          return this._zoomInButton = this._createButton(
            M.zoomInText,
            M.zoomInTitle,
            k + "-in",
            P,
            this._zoomIn
          ), this._zoomOutButton = this._createButton(
            M.zoomOutText,
            M.zoomOutTitle,
            k + "-out",
            P,
            this._zoomOut
          ), this._updateDisabled(), _.on("zoomend zoomlevelschange", this._updateDisabled, this), P;
        },
        onRemove: function(_) {
          _.off("zoomend zoomlevelschange", this._updateDisabled, this);
        },
        disable: function() {
          return this._disabled = !0, this._updateDisabled(), this;
        },
        enable: function() {
          return this._disabled = !1, this._updateDisabled(), this;
        },
        _zoomIn: function(_) {
          !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (_.shiftKey ? 3 : 1));
        },
        _zoomOut: function(_) {
          !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (_.shiftKey ? 3 : 1));
        },
        _createButton: function(_, k, P, M, S) {
          var D = nt("a", P, M);
          return D.innerHTML = _, D.href = "#", D.title = k, D.setAttribute("role", "button"), D.setAttribute("aria-label", k), ce(D), $(D, "click", jt), $(D, "click", S, this), $(D, "click", this._refocusOnMap, this), D;
        },
        _updateDisabled: function() {
          var _ = this._map, k = "leaflet-disabled";
          ut(this._zoomInButton, k), ut(this._zoomOutButton, k), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || _._zoom === _.getMinZoom()) && (Q(this._zoomOutButton, k), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || _._zoom === _.getMaxZoom()) && (Q(this._zoomInButton, k), this._zoomInButton.setAttribute("aria-disabled", "true"));
        }
      });
      it.mergeOptions({
        zoomControl: !0
      }), it.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new ci(), this.addControl(this.zoomControl));
      });
      var ko = function(_) {
        return new ci(_);
      }, rn = Et.extend({
        // @section
        // @aka Control.Scale options
        options: {
          position: "bottomleft",
          // @option maxWidth: Number = 100
          // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
          maxWidth: 100,
          // @option metric: Boolean = True
          // Whether to show the metric scale line (m/km).
          metric: !0,
          // @option imperial: Boolean = True
          // Whether to show the imperial scale line (mi/ft).
          imperial: !0
          // @option updateWhenIdle: Boolean = false
          // If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
        },
        onAdd: function(_) {
          var k = "leaflet-control-scale", P = nt("div", k), M = this.options;
          return this._addScales(M, k + "-line", P), _.on(M.updateWhenIdle ? "moveend" : "move", this._update, this), _.whenReady(this._update, this), P;
        },
        onRemove: function(_) {
          _.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
        },
        _addScales: function(_, k, P) {
          _.metric && (this._mScale = nt("div", k, P)), _.imperial && (this._iScale = nt("div", k, P));
        },
        _update: function() {
          var _ = this._map, k = _.getSize().y / 2, P = _.distance(
            _.containerPointToLatLng([0, k]),
            _.containerPointToLatLng([this.options.maxWidth, k])
          );
          this._updateScales(P);
        },
        _updateScales: function(_) {
          this.options.metric && _ && this._updateMetric(_), this.options.imperial && _ && this._updateImperial(_);
        },
        _updateMetric: function(_) {
          var k = this._getRoundNum(_), P = k < 1e3 ? k + " m" : k / 1e3 + " km";
          this._updateScale(this._mScale, P, k / _);
        },
        _updateImperial: function(_) {
          var k = _ * 3.2808399, P, M, S;
          k > 5280 ? (P = k / 5280, M = this._getRoundNum(P), this._updateScale(this._iScale, M + " mi", M / P)) : (S = this._getRoundNum(k), this._updateScale(this._iScale, S + " ft", S / k));
        },
        _updateScale: function(_, k, P) {
          _.style.width = Math.round(this.options.maxWidth * P) + "px", _.innerHTML = k;
        },
        _getRoundNum: function(_) {
          var k = Math.pow(10, (Math.floor(_) + "").length - 1), P = _ / k;
          return P = P >= 10 ? 10 : P >= 5 ? 5 : P >= 3 ? 3 : P >= 2 ? 2 : 1, k * P;
        }
      }), Po = function(_) {
        return new rn(_);
      }, To = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', di = Et.extend({
        // @section
        // @aka Control.Attribution options
        options: {
          position: "bottomright",
          // @option prefix: String|false = 'Leaflet'
          // The HTML text shown before the attributions. Pass `false` to disable.
          prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (Y.inlineSvg ? To + " " : "") + "Leaflet</a>"
        },
        initialize: function(_) {
          at(this, _), this._attributions = {};
        },
        onAdd: function(_) {
          _.attributionControl = this, this._container = nt("div", "leaflet-control-attribution"), ce(this._container);
          for (var k in _._layers)
            _._layers[k].getAttribution && this.addAttribution(_._layers[k].getAttribution());
          return this._update(), _.on("layeradd", this._addAttribution, this), this._container;
        },
        onRemove: function(_) {
          _.off("layeradd", this._addAttribution, this);
        },
        _addAttribution: function(_) {
          _.layer.getAttribution && (this.addAttribution(_.layer.getAttribution()), _.layer.once("remove", function() {
            this.removeAttribution(_.layer.getAttribution());
          }, this));
        },
        // @method setPrefix(prefix: String|false): this
        // The HTML text shown before the attributions. Pass `false` to disable.
        setPrefix: function(_) {
          return this.options.prefix = _, this._update(), this;
        },
        // @method addAttribution(text: String): this
        // Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
        addAttribution: function(_) {
          return _ ? (this._attributions[_] || (this._attributions[_] = 0), this._attributions[_]++, this._update(), this) : this;
        },
        // @method removeAttribution(text: String): this
        // Removes an attribution text.
        removeAttribution: function(_) {
          return _ ? (this._attributions[_] && (this._attributions[_]--, this._update()), this) : this;
        },
        _update: function() {
          if (this._map) {
            var _ = [];
            for (var k in this._attributions)
              this._attributions[k] && _.push(k);
            var P = [];
            this.options.prefix && P.push(this.options.prefix), _.length && P.push(_.join(", ")), this._container.innerHTML = P.join(' <span aria-hidden="true">|</span> ');
          }
        }
      });
      it.mergeOptions({
        attributionControl: !0
      }), it.addInitHook(function() {
        this.options.attributionControl && new di().addTo(this);
      });
      var Eo = function(_) {
        return new di(_);
      };
      Et.Layers = sn, Et.Zoom = ci, Et.Scale = rn, Et.Attribution = di, de.layers = xo, de.zoom = ko, de.scale = Po, de.attribution = Eo;
      var Dt = It.extend({
        initialize: function(_) {
          this._map = _;
        },
        // @method enable(): this
        // Enables the handler
        enable: function() {
          return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
        },
        // @method disable(): this
        // Disables the handler
        disable: function() {
          return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
        },
        // @method enabled(): Boolean
        // Returns `true` if the handler is enabled
        enabled: function() {
          return !!this._enabled;
        }
        // @section Extension methods
        // Classes inheriting from `Handler` must implement the two following methods:
        // @method addHooks()
        // Called when the handler is enabled, should add event hooks.
        // @method removeHooks()
        // Called when the handler is disabled, should remove the event hooks added previously.
      });
      Dt.addTo = function(_, k) {
        return _.addHandler(k, this), this;
      };
      var Mo = { Events: wt }, an = Y.touch ? "touchstart mousedown" : "mousedown", Ft = ne.extend({
        options: {
          // @section
          // @aka Draggable options
          // @option clickTolerance: Number = 3
          // The max number of pixels a user can shift the mouse pointer during a click
          // for it to be considered a valid click (as opposed to a mouse drag).
          clickTolerance: 3
        },
        // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
        // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
        initialize: function(_, k, P, M) {
          at(this, M), this._element = _, this._dragStartTarget = k || _, this._preventOutline = P;
        },
        // @method enable()
        // Enables the dragging ability
        enable: function() {
          this._enabled || ($(this._dragStartTarget, an, this._onDown, this), this._enabled = !0);
        },
        // @method disable()
        // Disables the dragging ability
        disable: function() {
          this._enabled && (Ft._dragging === this && this.finishDrag(!0), rt(this._dragStartTarget, an, this._onDown, this), this._enabled = !1, this._moved = !1);
        },
        _onDown: function(_) {
          if (this._enabled && (this._moved = !1, !$e(this._element, "leaflet-zoom-anim"))) {
            if (_.touches && _.touches.length !== 1) {
              Ft._dragging === this && this.finishDrag();
              return;
            }
            if (!(Ft._dragging || _.shiftKey || _.which !== 1 && _.button !== 1 && !_.touches) && (Ft._dragging = this, this._preventOutline && oi(this._element), ei(), le(), !this._moving)) {
              this.fire("down");
              var k = _.touches ? _.touches[0] : _, P = $i(this._element);
              this._startPoint = new X(k.clientX, k.clientY), this._startPos = Wt(this._element), this._parentScale = si(P);
              var M = _.type === "mousedown";
              $(document, M ? "mousemove" : "touchmove", this._onMove, this), $(document, M ? "mouseup" : "touchend touchcancel", this._onUp, this);
            }
          }
        },
        _onMove: function(_) {
          if (this._enabled) {
            if (_.touches && _.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var k = _.touches && _.touches.length === 1 ? _.touches[0] : _, P = new X(k.clientX, k.clientY)._subtract(this._startPoint);
            !P.x && !P.y || Math.abs(P.x) + Math.abs(P.y) < this.options.clickTolerance || (P.x /= this._parentScale.x, P.y /= this._parentScale.y, pt(_), this._moved || (this.fire("dragstart"), this._moved = !0, Q(document.body, "leaflet-dragging"), this._lastTarget = _.target || _.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), Q(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(P), this._moving = !0, this._lastEvent = _, this._updatePosition());
          }
        },
        _updatePosition: function() {
          var _ = { originalEvent: this._lastEvent };
          this.fire("predrag", _), dt(this._element, this._newPos), this.fire("drag", _);
        },
        _onUp: function() {
          this._enabled && this.finishDrag();
        },
        finishDrag: function(_) {
          ut(document.body, "leaflet-dragging"), this._lastTarget && (ut(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), rt(document, "mousemove touchmove", this._onMove, this), rt(document, "mouseup touchend touchcancel", this._onUp, this), ii(), he();
          var k = this._moved && this._moving;
          this._moving = !1, Ft._dragging = !1, k && this.fire("dragend", {
            noInertia: _,
            distance: this._newPos.distanceTo(this._startPos)
          });
        }
      });
      function ln(_, k, P) {
        var M, S = [1, 4, 2, 8], D, A, N, H, G, j, K, tt;
        for (D = 0, j = _.length; D < j; D++)
          _[D]._code = qt(_[D], k);
        for (N = 0; N < 4; N++) {
          for (K = S[N], M = [], D = 0, j = _.length, A = j - 1; D < j; A = D++)
            H = _[D], G = _[A], H._code & K ? G._code & K || (tt = Te(G, H, K, k, P), tt._code = qt(tt, k), M.push(tt)) : (G._code & K && (tt = Te(G, H, K, k, P), tt._code = qt(tt, k), M.push(tt)), M.push(H));
          _ = M;
        }
        return _;
      }
      function hn(_, k) {
        var P, M, S, D, A, N, H, G, j;
        if (!_ || _.length === 0)
          throw new Error("latlngs not passed");
        kt(_) || (console.warn("latlngs are not flat! Only the first ring will be used"), _ = _[0]);
        var K = et([0, 0]), tt = ct(_), mt = tt.getNorthWest().distanceTo(tt.getSouthWest()) * tt.getNorthEast().distanceTo(tt.getNorthWest());
        mt < 1700 && (K = fi(_));
        var _t = _.length, Pt = [];
        for (P = 0; P < _t; P++) {
          var Lt = et(_[P]);
          Pt.push(k.project(et([Lt.lat - K.lat, Lt.lng - K.lng])));
        }
        for (N = H = G = 0, P = 0, M = _t - 1; P < _t; M = P++)
          S = Pt[P], D = Pt[M], A = S.y * D.x - D.y * S.x, H += (S.x + D.x) * A, G += (S.y + D.y) * A, N += A * 3;
        N === 0 ? j = Pt[0] : j = [H / N, G / N];
        var ie = k.unproject(J(j));
        return et([ie.lat + K.lat, ie.lng + K.lng]);
      }
      function fi(_) {
        for (var k = 0, P = 0, M = 0, S = 0; S < _.length; S++) {
          var D = et(_[S]);
          k += D.lat, P += D.lng, M++;
        }
        return et([k / M, P / M]);
      }
      var Co = {
        __proto__: null,
        clipPolygon: ln,
        polygonCenter: hn,
        centroid: fi
      };
      function un(_, k) {
        if (!k || !_.length)
          return _.slice();
        var P = k * k;
        return _ = Oo(_, P), _ = Do(_, P), _;
      }
      function cn(_, k, P) {
        return Math.sqrt(fe(_, k, P, !0));
      }
      function So(_, k, P) {
        return fe(_, k, P);
      }
      function Do(_, k) {
        var P = _.length, M = typeof Uint8Array < "u" ? Uint8Array : Array, S = new M(P);
        S[0] = S[P - 1] = 1, _i(_, S, k, 0, P - 1);
        var D, A = [];
        for (D = 0; D < P; D++)
          S[D] && A.push(_[D]);
        return A;
      }
      function _i(_, k, P, M, S) {
        var D = 0, A, N, H;
        for (N = M + 1; N <= S - 1; N++)
          H = fe(_[N], _[M], _[S], !0), H > D && (A = N, D = H);
        D > P && (k[A] = 1, _i(_, k, P, M, A), _i(_, k, P, A, S));
      }
      function Oo(_, k) {
        for (var P = [_[0]], M = 1, S = 0, D = _.length; M < D; M++)
          Io(_[M], _[S]) > k && (P.push(_[M]), S = M);
        return S < D - 1 && P.push(_[D - 1]), P;
      }
      var dn;
      function fn(_, k, P, M, S) {
        var D = M ? dn : qt(_, P), A = qt(k, P), N, H, G;
        for (dn = A; ; ) {
          if (!(D | A))
            return [_, k];
          if (D & A)
            return !1;
          N = D || A, H = Te(_, k, N, P, S), G = qt(H, P), N === D ? (_ = H, D = G) : (k = H, A = G);
        }
      }
      function Te(_, k, P, M, S) {
        var D = k.x - _.x, A = k.y - _.y, N = M.min, H = M.max, G, j;
        return P & 8 ? (G = _.x + D * (H.y - _.y) / A, j = H.y) : P & 4 ? (G = _.x + D * (N.y - _.y) / A, j = N.y) : P & 2 ? (G = H.x, j = _.y + A * (H.x - _.x) / D) : P & 1 && (G = N.x, j = _.y + A * (N.x - _.x) / D), new X(G, j, S);
      }
      function qt(_, k) {
        var P = 0;
        return _.x < k.min.x ? P |= 1 : _.x > k.max.x && (P |= 2), _.y < k.min.y ? P |= 4 : _.y > k.max.y && (P |= 8), P;
      }
      function Io(_, k) {
        var P = k.x - _.x, M = k.y - _.y;
        return P * P + M * M;
      }
      function fe(_, k, P, M) {
        var S = k.x, D = k.y, A = P.x - S, N = P.y - D, H = A * A + N * N, G;
        return H > 0 && (G = ((_.x - S) * A + (_.y - D) * N) / H, G > 1 ? (S = P.x, D = P.y) : G > 0 && (S += A * G, D += N * G)), A = _.x - S, N = _.y - D, M ? A * A + N * N : new X(S, D);
      }
      function kt(_) {
        return !Tt(_[0]) || typeof _[0][0] != "object" && typeof _[0][0] < "u";
      }
      function _n(_) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), kt(_);
      }
      function pn(_, k) {
        var P, M, S, D, A, N, H, G;
        if (!_ || _.length === 0)
          throw new Error("latlngs not passed");
        kt(_) || (console.warn("latlngs are not flat! Only the first ring will be used"), _ = _[0]);
        var j = et([0, 0]), K = ct(_), tt = K.getNorthWest().distanceTo(K.getSouthWest()) * K.getNorthEast().distanceTo(K.getNorthWest());
        tt < 1700 && (j = fi(_));
        var mt = _.length, _t = [];
        for (P = 0; P < mt; P++) {
          var Pt = et(_[P]);
          _t.push(k.project(et([Pt.lat - j.lat, Pt.lng - j.lng])));
        }
        for (P = 0, M = 0; P < mt - 1; P++)
          M += _t[P].distanceTo(_t[P + 1]) / 2;
        if (M === 0)
          G = _t[0];
        else
          for (P = 0, D = 0; P < mt - 1; P++)
            if (A = _t[P], N = _t[P + 1], S = A.distanceTo(N), D += S, D > M) {
              H = (D - M) / S, G = [
                N.x - H * (N.x - A.x),
                N.y - H * (N.y - A.y)
              ];
              break;
            }
        var Lt = k.unproject(J(G));
        return et([Lt.lat + j.lat, Lt.lng + j.lng]);
      }
      var zo = {
        __proto__: null,
        simplify: un,
        pointToSegmentDistance: cn,
        closestPointOnSegment: So,
        clipSegment: fn,
        _getEdgeIntersection: Te,
        _getBitCode: qt,
        _sqClosestPointOnSegment: fe,
        isFlat: kt,
        _flat: _n,
        polylineCenter: pn
      }, pi = {
        project: function(_) {
          return new X(_.lng, _.lat);
        },
        unproject: function(_) {
          return new st(_.y, _.x);
        },
        bounds: new lt([-180, -90], [180, 90])
      }, mi = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new lt([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
        project: function(_) {
          var k = Math.PI / 180, P = this.R, M = _.lat * k, S = this.R_MINOR / P, D = Math.sqrt(1 - S * S), A = D * Math.sin(M), N = Math.tan(Math.PI / 4 - M / 2) / Math.pow((1 - A) / (1 + A), D / 2);
          return M = -P * Math.log(Math.max(N, 1e-10)), new X(_.lng * k * P, M);
        },
        unproject: function(_) {
          for (var k = 180 / Math.PI, P = this.R, M = this.R_MINOR / P, S = Math.sqrt(1 - M * M), D = Math.exp(-_.y / P), A = Math.PI / 2 - 2 * Math.atan(D), N = 0, H = 0.1, G; N < 15 && Math.abs(H) > 1e-7; N++)
            G = S * Math.sin(A), G = Math.pow((1 - G) / (1 + G), S / 2), H = Math.PI / 2 - 2 * Math.atan(D * G) - A, A += H;
          return new st(A * k, _.x * k / P);
        }
      }, Ao = {
        __proto__: null,
        LonLat: pi,
        Mercator: mi,
        SphericalMercator: Ue
      }, Zo = T({}, Nt, {
        code: "EPSG:3395",
        projection: mi,
        transformation: (function() {
          var _ = 0.5 / (Math.PI * mi.R);
          return oe(_, 0.5, -_, 0.5);
        })()
      }), mn = T({}, Nt, {
        code: "EPSG:4326",
        projection: pi,
        transformation: oe(1 / 180, 1, -1 / 180, 0.5)
      }), Bo = T({}, zt, {
        projection: pi,
        transformation: oe(1, 0, -1, 0),
        scale: function(_) {
          return Math.pow(2, _);
        },
        zoom: function(_) {
          return Math.log(_) / Math.LN2;
        },
        distance: function(_, k) {
          var P = k.lng - _.lng, M = k.lat - _.lat;
          return Math.sqrt(P * P + M * M);
        },
        infinite: !0
      });
      zt.Earth = Nt, zt.EPSG3395 = Zo, zt.EPSG3857 = We, zt.EPSG900913 = Un, zt.EPSG4326 = mn, zt.Simple = Bo;
      var Mt = ne.extend({
        // Classes extending `L.Layer` will inherit the following options:
        options: {
          // @option pane: String = 'overlayPane'
          // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
          pane: "overlayPane",
          // @option attribution: String = null
          // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
          attribution: null,
          bubblingMouseEvents: !0
        },
        /* @section
         * Classes extending `L.Layer` will inherit the following methods:
         *
         * @method addTo(map: Map|LayerGroup): this
         * Adds the layer to the given map or layer group.
         */
        addTo: function(_) {
          return _.addLayer(this), this;
        },
        // @method remove: this
        // Removes the layer from the map it is currently active on.
        remove: function() {
          return this.removeFrom(this._map || this._mapToAdd);
        },
        // @method removeFrom(map: Map): this
        // Removes the layer from the given map
        //
        // @alternative
        // @method removeFrom(group: LayerGroup): this
        // Removes the layer from the given `LayerGroup`
        removeFrom: function(_) {
          return _ && _.removeLayer(this), this;
        },
        // @method getPane(name? : String): HTMLElement
        // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
        getPane: function(_) {
          return this._map.getPane(_ ? this.options[_] || _ : this.options.pane);
        },
        addInteractiveTarget: function(_) {
          return this._map._targets[U(_)] = this, this;
        },
        removeInteractiveTarget: function(_) {
          return delete this._map._targets[U(_)], this;
        },
        // @method getAttribution: String
        // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
        getAttribution: function() {
          return this.options.attribution;
        },
        _layerAdd: function(_) {
          var k = _.target;
          if (k.hasLayer(this)) {
            if (this._map = k, this._zoomAnimated = k._zoomAnimated, this.getEvents) {
              var P = this.getEvents();
              k.on(P, this), this.once("remove", function() {
                k.off(P, this);
              }, this);
            }
            this.onAdd(k), this.fire("add"), k.fire("layeradd", { layer: this });
          }
        }
      });
      it.include({
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the map
        addLayer: function(_) {
          if (!_._layerAdd)
            throw new Error("The provided object is not a Layer.");
          var k = U(_);
          return this._layers[k] ? this : (this._layers[k] = _, _._mapToAdd = this, _.beforeAdd && _.beforeAdd(this), this.whenReady(_._layerAdd, _), this);
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the map.
        removeLayer: function(_) {
          var k = U(_);
          return this._layers[k] ? (this._loaded && _.onRemove(this), delete this._layers[k], this._loaded && (this.fire("layerremove", { layer: _ }), _.fire("remove")), _._map = _._mapToAdd = null, this) : this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the map
        hasLayer: function(_) {
          return U(_) in this._layers;
        },
        /* @method eachLayer(fn: Function, context?: Object): this
         * Iterates over the layers of the map, optionally specifying context of the iterator function.
         * ```
         * map.eachLayer(function(layer){
         *     layer.bindPopup('Hello');
         * });
         * ```
         */
        eachLayer: function(_, k) {
          for (var P in this._layers)
            _.call(k, this._layers[P]);
          return this;
        },
        _addLayers: function(_) {
          _ = _ ? Tt(_) ? _ : [_] : [];
          for (var k = 0, P = _.length; k < P; k++)
            this.addLayer(_[k]);
        },
        _addZoomLimit: function(_) {
          (!isNaN(_.options.maxZoom) || !isNaN(_.options.minZoom)) && (this._zoomBoundLayers[U(_)] = _, this._updateZoomLevels());
        },
        _removeZoomLimit: function(_) {
          var k = U(_);
          this._zoomBoundLayers[k] && (delete this._zoomBoundLayers[k], this._updateZoomLevels());
        },
        _updateZoomLevels: function() {
          var _ = 1 / 0, k = -1 / 0, P = this._getZoomSpan();
          for (var M in this._zoomBoundLayers) {
            var S = this._zoomBoundLayers[M].options;
            _ = S.minZoom === void 0 ? _ : Math.min(_, S.minZoom), k = S.maxZoom === void 0 ? k : Math.max(k, S.maxZoom);
          }
          this._layersMaxZoom = k === -1 / 0 ? void 0 : k, this._layersMinZoom = _ === 1 / 0 ? void 0 : _, P !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
        }
      });
      var Xt = Mt.extend({
        initialize: function(_, k) {
          at(this, k), this._layers = {};
          var P, M;
          if (_)
            for (P = 0, M = _.length; P < M; P++)
              this.addLayer(_[P]);
        },
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the group.
        addLayer: function(_) {
          var k = this.getLayerId(_);
          return this._layers[k] = _, this._map && this._map.addLayer(_), this;
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the group.
        // @alternative
        // @method removeLayer(id: Number): this
        // Removes the layer with the given internal ID from the group.
        removeLayer: function(_) {
          var k = _ in this._layers ? _ : this.getLayerId(_);
          return this._map && this._layers[k] && this._map.removeLayer(this._layers[k]), delete this._layers[k], this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the group.
        // @alternative
        // @method hasLayer(id: Number): Boolean
        // Returns `true` if the given internal ID is currently added to the group.
        hasLayer: function(_) {
          var k = typeof _ == "number" ? _ : this.getLayerId(_);
          return k in this._layers;
        },
        // @method clearLayers(): this
        // Removes all the layers from the group.
        clearLayers: function() {
          return this.eachLayer(this.removeLayer, this);
        },
        // @method invoke(methodName: String, …): this
        // Calls `methodName` on every layer contained in this group, passing any
        // additional parameters. Has no effect if the layers contained do not
        // implement `methodName`.
        invoke: function(_) {
          var k = Array.prototype.slice.call(arguments, 1), P, M;
          for (P in this._layers)
            M = this._layers[P], M[_] && M[_].apply(M, k);
          return this;
        },
        onAdd: function(_) {
          this.eachLayer(_.addLayer, _);
        },
        onRemove: function(_) {
          this.eachLayer(_.removeLayer, _);
        },
        // @method eachLayer(fn: Function, context?: Object): this
        // Iterates over the layers of the group, optionally specifying context of the iterator function.
        // ```js
        // group.eachLayer(function (layer) {
        // 	layer.bindPopup('Hello');
        // });
        // ```
        eachLayer: function(_, k) {
          for (var P in this._layers)
            _.call(k, this._layers[P]);
          return this;
        },
        // @method getLayer(id: Number): Layer
        // Returns the layer with the given internal ID.
        getLayer: function(_) {
          return this._layers[_];
        },
        // @method getLayers(): Layer[]
        // Returns an array of all the layers added to the group.
        getLayers: function() {
          var _ = [];
          return this.eachLayer(_.push, _), _;
        },
        // @method setZIndex(zIndex: Number): this
        // Calls `setZIndex` on every layer contained in this group, passing the z-index.
        setZIndex: function(_) {
          return this.invoke("setZIndex", _);
        },
        // @method getLayerId(layer: Layer): Number
        // Returns the internal ID for a layer
        getLayerId: function(_) {
          return U(_);
        }
      }), Ro = function(_, k) {
        return new Xt(_, k);
      }, At = Xt.extend({
        addLayer: function(_) {
          return this.hasLayer(_) ? this : (_.addEventParent(this), Xt.prototype.addLayer.call(this, _), this.fire("layeradd", { layer: _ }));
        },
        removeLayer: function(_) {
          return this.hasLayer(_) ? (_ in this._layers && (_ = this._layers[_]), _.removeEventParent(this), Xt.prototype.removeLayer.call(this, _), this.fire("layerremove", { layer: _ })) : this;
        },
        // @method setStyle(style: Path options): this
        // Sets the given path options to each layer of the group that has a `setStyle` method.
        setStyle: function(_) {
          return this.invoke("setStyle", _);
        },
        // @method bringToFront(): this
        // Brings the layer group to the top of all other layers
        bringToFront: function() {
          return this.invoke("bringToFront");
        },
        // @method bringToBack(): this
        // Brings the layer group to the back of all other layers
        bringToBack: function() {
          return this.invoke("bringToBack");
        },
        // @method getBounds(): LatLngBounds
        // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
        getBounds: function() {
          var _ = new yt();
          for (var k in this._layers) {
            var P = this._layers[k];
            _.extend(P.getBounds ? P.getBounds() : P.getLatLng());
          }
          return _;
        }
      }), No = function(_, k) {
        return new At(_, k);
      }, $t = It.extend({
        /* @section
         * @aka Icon options
         *
         * @option iconUrl: String = null
         * **(required)** The URL to the icon image (absolute or relative to your script path).
         *
         * @option iconRetinaUrl: String = null
         * The URL to a retina sized version of the icon image (absolute or relative to your
         * script path). Used for Retina screen devices.
         *
         * @option iconSize: Point = null
         * Size of the icon image in pixels.
         *
         * @option iconAnchor: Point = null
         * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
         * will be aligned so that this point is at the marker's geographical location. Centered
         * by default if size is specified, also can be set in CSS with negative margins.
         *
         * @option popupAnchor: Point = [0, 0]
         * The coordinates of the point from which popups will "open", relative to the icon anchor.
         *
         * @option tooltipAnchor: Point = [0, 0]
         * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
         *
         * @option shadowUrl: String = null
         * The URL to the icon shadow image. If not specified, no shadow image will be created.
         *
         * @option shadowRetinaUrl: String = null
         *
         * @option shadowSize: Point = null
         * Size of the shadow image in pixels.
         *
         * @option shadowAnchor: Point = null
         * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
         * as iconAnchor if not specified).
         *
         * @option className: String = ''
         * A custom class name to assign to both icon and shadow images. Empty by default.
         */
        options: {
          popupAnchor: [0, 0],
          tooltipAnchor: [0, 0],
          // @option crossOrigin: Boolean|String = false
          // Whether the crossOrigin attribute will be added to the tiles.
          // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
          // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
          crossOrigin: !1
        },
        initialize: function(_) {
          at(this, _);
        },
        // @method createIcon(oldIcon?: HTMLElement): HTMLElement
        // Called internally when the icon has to be shown, returns a `<img>` HTML element
        // styled according to the options.
        createIcon: function(_) {
          return this._createIcon("icon", _);
        },
        // @method createShadow(oldIcon?: HTMLElement): HTMLElement
        // As `createIcon`, but for the shadow beneath it.
        createShadow: function(_) {
          return this._createIcon("shadow", _);
        },
        _createIcon: function(_, k) {
          var P = this._getIconUrl(_);
          if (!P) {
            if (_ === "icon")
              throw new Error("iconUrl not set in Icon options (see the docs).");
            return null;
          }
          var M = this._createImg(P, k && k.tagName === "IMG" ? k : null);
          return this._setIconStyles(M, _), (this.options.crossOrigin || this.options.crossOrigin === "") && (M.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), M;
        },
        _setIconStyles: function(_, k) {
          var P = this.options, M = P[k + "Size"];
          typeof M == "number" && (M = [M, M]);
          var S = J(M), D = J(k === "shadow" && P.shadowAnchor || P.iconAnchor || S && S.divideBy(2, !0));
          _.className = "leaflet-marker-" + k + " " + (P.className || ""), D && (_.style.marginLeft = -D.x + "px", _.style.marginTop = -D.y + "px"), S && (_.style.width = S.x + "px", _.style.height = S.y + "px");
        },
        _createImg: function(_, k) {
          return k = k || document.createElement("img"), k.src = _, k;
        },
        _getIconUrl: function(_) {
          return Y.retina && this.options[_ + "RetinaUrl"] || this.options[_ + "Url"];
        }
      });
      function Fo(_) {
        return new $t(_);
      }
      var _e = $t.extend({
        options: {
          iconUrl: "marker-icon.png",
          iconRetinaUrl: "marker-icon-2x.png",
          shadowUrl: "marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41]
        },
        _getIconUrl: function(_) {
          return typeof _e.imagePath != "string" && (_e.imagePath = this._detectIconPath()), (this.options.imagePath || _e.imagePath) + $t.prototype._getIconUrl.call(this, _);
        },
        _stripUrl: function(_) {
          var k = function(P, M, S) {
            var D = M.exec(P);
            return D && D[S];
          };
          return _ = k(_, /^url\((['"])?(.+)\1\)$/, 2), _ && k(_, /^(.*)marker-icon\.png$/, 1);
        },
        _detectIconPath: function() {
          var _ = nt("div", "leaflet-default-icon-path", document.body), k = ae(_, "background-image") || ae(_, "backgroundImage");
          if (document.body.removeChild(_), k = this._stripUrl(k), k)
            return k;
          var P = document.querySelector('link[href$="leaflet.css"]');
          return P ? P.href.substring(0, P.href.length - 11 - 1) : "";
        }
      }), gn = Dt.extend({
        initialize: function(_) {
          this._marker = _;
        },
        addHooks: function() {
          var _ = this._marker._icon;
          this._draggable || (this._draggable = new Ft(_, _, !0)), this._draggable.on({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).enable(), Q(_, "leaflet-marker-draggable");
        },
        removeHooks: function() {
          this._draggable.off({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).disable(), this._marker._icon && ut(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function() {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function(_) {
          var k = this._marker, P = k._map, M = this._marker.options.autoPanSpeed, S = this._marker.options.autoPanPadding, D = Wt(k._icon), A = P.getPixelBounds(), N = P.getPixelOrigin(), H = vt(
            A.min._subtract(N).add(S),
            A.max._subtract(N).subtract(S)
          );
          if (!H.contains(D)) {
            var G = J(
              (Math.max(H.max.x, D.x) - H.max.x) / (A.max.x - H.max.x) - (Math.min(H.min.x, D.x) - H.min.x) / (A.min.x - H.min.x),
              (Math.max(H.max.y, D.y) - H.max.y) / (A.max.y - H.max.y) - (Math.min(H.min.y, D.y) - H.min.y) / (A.min.y - H.min.y)
            ).multiplyBy(M);
            P.panBy(G, { animate: !1 }), this._draggable._newPos._add(G), this._draggable._startPos._add(G), dt(k._icon, this._draggable._newPos), this._onDrag(_), this._panRequest = gt(this._adjustPan.bind(this, _));
          }
        },
        _onDragStart: function() {
          this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function(_) {
          this._marker.options.autoPan && (bt(this._panRequest), this._panRequest = gt(this._adjustPan.bind(this, _)));
        },
        _onDrag: function(_) {
          var k = this._marker, P = k._shadow, M = Wt(k._icon), S = k._map.layerPointToLatLng(M);
          P && dt(P, M), k._latlng = S, _.latlng = S, _.oldLatLng = this._oldLatLng, k.fire("move", _).fire("drag", _);
        },
        _onDragEnd: function(_) {
          bt(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", _);
        }
      }), Ee = Mt.extend({
        // @section
        // @aka Marker options
        options: {
          // @option icon: Icon = *
          // Icon instance to use for rendering the marker.
          // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
          // If not specified, a common instance of `L.Icon.Default` is used.
          icon: new _e(),
          // Option inherited from "Interactive layer" abstract class
          interactive: !0,
          // @option keyboard: Boolean = true
          // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
          keyboard: !0,
          // @option title: String = ''
          // Text for the browser tooltip that appear on marker hover (no tooltip by default).
          // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
          title: "",
          // @option alt: String = 'Marker'
          // Text for the `alt` attribute of the icon image.
          // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
          alt: "Marker",
          // @option zIndexOffset: Number = 0
          // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
          zIndexOffset: 0,
          // @option opacity: Number = 1.0
          // The opacity of the marker.
          opacity: 1,
          // @option riseOnHover: Boolean = false
          // If `true`, the marker will get on top of others when you hover the mouse over it.
          riseOnHover: !1,
          // @option riseOffset: Number = 250
          // The z-index offset used for the `riseOnHover` feature.
          riseOffset: 250,
          // @option pane: String = 'markerPane'
          // `Map pane` where the markers icon will be added.
          pane: "markerPane",
          // @option shadowPane: String = 'shadowPane'
          // `Map pane` where the markers shadow will be added.
          shadowPane: "shadowPane",
          // @option bubblingMouseEvents: Boolean = false
          // When `true`, a mouse event on this marker will trigger the same event on the map
          // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
          bubblingMouseEvents: !1,
          // @option autoPanOnFocus: Boolean = true
          // When `true`, the map will pan whenever the marker is focused (via
          // e.g. pressing `tab` on the keyboard) to ensure the marker is
          // visible within the map's bounds
          autoPanOnFocus: !0,
          // @section Draggable marker options
          // @option draggable: Boolean = false
          // Whether the marker is draggable with mouse/touch or not.
          draggable: !1,
          // @option autoPan: Boolean = false
          // Whether to pan the map when dragging this marker near its edge or not.
          autoPan: !1,
          // @option autoPanPadding: Point = Point(50, 50)
          // Distance (in pixels to the left/right and to the top/bottom) of the
          // map edge to start panning the map.
          autoPanPadding: [50, 50],
          // @option autoPanSpeed: Number = 10
          // Number of pixels the map should pan by.
          autoPanSpeed: 10
        },
        /* @section
         *
         * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
         */
        initialize: function(_, k) {
          at(this, k), this._latlng = et(_);
        },
        onAdd: function(_) {
          this._zoomAnimated = this._zoomAnimated && _.options.markerZoomAnimation, this._zoomAnimated && _.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
        },
        onRemove: function(_) {
          this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && _.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
        },
        getEvents: function() {
          return {
            zoom: this.update,
            viewreset: this.update
          };
        },
        // @method getLatLng: LatLng
        // Returns the current geographical position of the marker.
        getLatLng: function() {
          return this._latlng;
        },
        // @method setLatLng(latlng: LatLng): this
        // Changes the marker position to the given point.
        setLatLng: function(_) {
          var k = this._latlng;
          return this._latlng = et(_), this.update(), this.fire("move", { oldLatLng: k, latlng: this._latlng });
        },
        // @method setZIndexOffset(offset: Number): this
        // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
        setZIndexOffset: function(_) {
          return this.options.zIndexOffset = _, this.update();
        },
        // @method getIcon: Icon
        // Returns the current icon used by the marker
        getIcon: function() {
          return this.options.icon;
        },
        // @method setIcon(icon: Icon): this
        // Changes the marker icon.
        setIcon: function(_) {
          return this.options.icon = _, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
        },
        getElement: function() {
          return this._icon;
        },
        update: function() {
          if (this._icon && this._map) {
            var _ = this._map.latLngToLayerPoint(this._latlng).round();
            this._setPos(_);
          }
          return this;
        },
        _initIcon: function() {
          var _ = this.options, k = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), P = _.icon.createIcon(this._icon), M = !1;
          P !== this._icon && (this._icon && this._removeIcon(), M = !0, _.title && (P.title = _.title), P.tagName === "IMG" && (P.alt = _.alt || "")), Q(P, k), _.keyboard && (P.tabIndex = "0", P.setAttribute("role", "button")), this._icon = P, _.riseOnHover && this.on({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && $(P, "focus", this._panOnFocus, this);
          var S = _.icon.createShadow(this._shadow), D = !1;
          S !== this._shadow && (this._removeShadow(), D = !0), S && (Q(S, k), S.alt = ""), this._shadow = S, _.opacity < 1 && this._updateOpacity(), M && this.getPane().appendChild(this._icon), this._initInteraction(), S && D && this.getPane(_.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function() {
          this.options.riseOnHover && this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && rt(this._icon, "focus", this._panOnFocus, this), ht(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
        },
        _removeShadow: function() {
          this._shadow && ht(this._shadow), this._shadow = null;
        },
        _setPos: function(_) {
          this._icon && dt(this._icon, _), this._shadow && dt(this._shadow, _), this._zIndex = _.y + this.options.zIndexOffset, this._resetZIndex();
        },
        _updateZIndex: function(_) {
          this._icon && (this._icon.style.zIndex = this._zIndex + _);
        },
        _animateZoom: function(_) {
          var k = this._map._latLngToNewLayerPoint(this._latlng, _.zoom, _.center).round();
          this._setPos(k);
        },
        _initInteraction: function() {
          if (this.options.interactive && (Q(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), gn)) {
            var _ = this.options.draggable;
            this.dragging && (_ = this.dragging.enabled(), this.dragging.disable()), this.dragging = new gn(this), _ && this.dragging.enable();
          }
        },
        // @method setOpacity(opacity: Number): this
        // Changes the opacity of the marker.
        setOpacity: function(_) {
          return this.options.opacity = _, this._map && this._updateOpacity(), this;
        },
        _updateOpacity: function() {
          var _ = this.options.opacity;
          this._icon && xt(this._icon, _), this._shadow && xt(this._shadow, _);
        },
        _bringToFront: function() {
          this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function() {
          this._updateZIndex(0);
        },
        _panOnFocus: function() {
          var _ = this._map;
          if (_) {
            var k = this.options.icon.options, P = k.iconSize ? J(k.iconSize) : J(0, 0), M = k.iconAnchor ? J(k.iconAnchor) : J(0, 0);
            _.panInside(this._latlng, {
              paddingTopLeft: M,
              paddingBottomRight: P.subtract(M)
            });
          }
        },
        _getPopupAnchor: function() {
          return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function() {
          return this.options.icon.options.tooltipAnchor;
        }
      });
      function Ho(_, k) {
        return new Ee(_, k);
      }
      var Ht = Mt.extend({
        // @section
        // @aka Path options
        options: {
          // @option stroke: Boolean = true
          // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
          stroke: !0,
          // @option color: String = '#3388ff'
          // Stroke color
          color: "#3388ff",
          // @option weight: Number = 3
          // Stroke width in pixels
          weight: 3,
          // @option opacity: Number = 1.0
          // Stroke opacity
          opacity: 1,
          // @option lineCap: String= 'round'
          // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
          lineCap: "round",
          // @option lineJoin: String = 'round'
          // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
          lineJoin: "round",
          // @option dashArray: String = null
          // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
          dashArray: null,
          // @option dashOffset: String = null
          // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
          dashOffset: null,
          // @option fill: Boolean = depends
          // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
          fill: !1,
          // @option fillColor: String = *
          // Fill color. Defaults to the value of the [`color`](#path-color) option
          fillColor: null,
          // @option fillOpacity: Number = 0.2
          // Fill opacity.
          fillOpacity: 0.2,
          // @option fillRule: String = 'evenodd'
          // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
          fillRule: "evenodd",
          // className: '',
          // Option inherited from "Interactive layer" abstract class
          interactive: !0,
          // @option bubblingMouseEvents: Boolean = true
          // When `true`, a mouse event on this path will trigger the same event on the map
          // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
          bubblingMouseEvents: !0
        },
        beforeAdd: function(_) {
          this._renderer = _.getRenderer(this);
        },
        onAdd: function() {
          this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
        },
        onRemove: function() {
          this._renderer._removePath(this);
        },
        // @method redraw(): this
        // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
        redraw: function() {
          return this._map && this._renderer._updatePath(this), this;
        },
        // @method setStyle(style: Path options): this
        // Changes the appearance of a Path based on the options in the `Path options` object.
        setStyle: function(_) {
          return at(this, _), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && _ && Object.prototype.hasOwnProperty.call(_, "weight") && this._updateBounds()), this;
        },
        // @method bringToFront(): this
        // Brings the layer to the top of all path layers.
        bringToFront: function() {
          return this._renderer && this._renderer._bringToFront(this), this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all path layers.
        bringToBack: function() {
          return this._renderer && this._renderer._bringToBack(this), this;
        },
        getElement: function() {
          return this._path;
        },
        _reset: function() {
          this._project(), this._update();
        },
        _clickTolerance: function() {
          return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
        }
      }), Me = Ht.extend({
        // @section
        // @aka CircleMarker options
        options: {
          fill: !0,
          // @option radius: Number = 10
          // Radius of the circle marker, in pixels
          radius: 10
        },
        initialize: function(_, k) {
          at(this, k), this._latlng = et(_), this._radius = this.options.radius;
        },
        // @method setLatLng(latLng: LatLng): this
        // Sets the position of a circle marker to a new location.
        setLatLng: function(_) {
          var k = this._latlng;
          return this._latlng = et(_), this.redraw(), this.fire("move", { oldLatLng: k, latlng: this._latlng });
        },
        // @method getLatLng(): LatLng
        // Returns the current geographical position of the circle marker
        getLatLng: function() {
          return this._latlng;
        },
        // @method setRadius(radius: Number): this
        // Sets the radius of a circle marker. Units are in pixels.
        setRadius: function(_) {
          return this.options.radius = this._radius = _, this.redraw();
        },
        // @method getRadius(): Number
        // Returns the current radius of the circle
        getRadius: function() {
          return this._radius;
        },
        setStyle: function(_) {
          var k = _ && _.radius || this._radius;
          return Ht.prototype.setStyle.call(this, _), this.setRadius(k), this;
        },
        _project: function() {
          this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
        },
        _updateBounds: function() {
          var _ = this._radius, k = this._radiusY || _, P = this._clickTolerance(), M = [_ + P, k + P];
          this._pxBounds = new lt(this._point.subtract(M), this._point.add(M));
        },
        _update: function() {
          this._map && this._updatePath();
        },
        _updatePath: function() {
          this._renderer._updateCircle(this);
        },
        _empty: function() {
          return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(_) {
          return _.distanceTo(this._point) <= this._radius + this._clickTolerance();
        }
      });
      function Uo(_, k) {
        return new Me(_, k);
      }
      var gi = Me.extend({
        initialize: function(_, k, P) {
          if (typeof k == "number" && (k = T({}, P, { radius: k })), at(this, k), this._latlng = et(_), isNaN(this.options.radius))
            throw new Error("Circle radius cannot be NaN");
          this._mRadius = this.options.radius;
        },
        // @method setRadius(radius: Number): this
        // Sets the radius of a circle. Units are in meters.
        setRadius: function(_) {
          return this._mRadius = _, this.redraw();
        },
        // @method getRadius(): Number
        // Returns the current radius of a circle. Units are in meters.
        getRadius: function() {
          return this._mRadius;
        },
        // @method getBounds(): LatLngBounds
        // Returns the `LatLngBounds` of the path.
        getBounds: function() {
          var _ = [this._radius, this._radiusY || this._radius];
          return new yt(
            this._map.layerPointToLatLng(this._point.subtract(_)),
            this._map.layerPointToLatLng(this._point.add(_))
          );
        },
        setStyle: Ht.prototype.setStyle,
        _project: function() {
          var _ = this._latlng.lng, k = this._latlng.lat, P = this._map, M = P.options.crs;
          if (M.distance === Nt.distance) {
            var S = Math.PI / 180, D = this._mRadius / Nt.R / S, A = P.project([k + D, _]), N = P.project([k - D, _]), H = A.add(N).divideBy(2), G = P.unproject(H).lat, j = Math.acos((Math.cos(D * S) - Math.sin(k * S) * Math.sin(G * S)) / (Math.cos(k * S) * Math.cos(G * S))) / S;
            (isNaN(j) || j === 0) && (j = D / Math.cos(Math.PI / 180 * k)), this._point = H.subtract(P.getPixelOrigin()), this._radius = isNaN(j) ? 0 : H.x - P.project([G, _ - j]).x, this._radiusY = H.y - A.y;
          } else {
            var K = M.unproject(M.project(this._latlng).subtract([this._mRadius, 0]));
            this._point = P.latLngToLayerPoint(this._latlng), this._radius = this._point.x - P.latLngToLayerPoint(K).x;
          }
          this._updateBounds();
        }
      });
      function Go(_, k, P) {
        return new gi(_, k, P);
      }
      var Zt = Ht.extend({
        // @section
        // @aka Polyline options
        options: {
          // @option smoothFactor: Number = 1.0
          // How much to simplify the polyline on each zoom level. More means
          // better performance and smoother look, and less means more accurate representation.
          smoothFactor: 1,
          // @option noClip: Boolean = false
          // Disable polyline clipping.
          noClip: !1
        },
        initialize: function(_, k) {
          at(this, k), this._setLatLngs(_);
        },
        // @method getLatLngs(): LatLng[]
        // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
        getLatLngs: function() {
          return this._latlngs;
        },
        // @method setLatLngs(latlngs: LatLng[]): this
        // Replaces all the points in the polyline with the given array of geographical points.
        setLatLngs: function(_) {
          return this._setLatLngs(_), this.redraw();
        },
        // @method isEmpty(): Boolean
        // Returns `true` if the Polyline has no LatLngs.
        isEmpty: function() {
          return !this._latlngs.length;
        },
        // @method closestLayerPoint(p: Point): Point
        // Returns the point closest to `p` on the Polyline.
        closestLayerPoint: function(_) {
          for (var k = 1 / 0, P = null, M = fe, S, D, A = 0, N = this._parts.length; A < N; A++)
            for (var H = this._parts[A], G = 1, j = H.length; G < j; G++) {
              S = H[G - 1], D = H[G];
              var K = M(_, S, D, !0);
              K < k && (k = K, P = M(_, S, D));
            }
          return P && (P.distance = Math.sqrt(k)), P;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
        getCenter: function() {
          if (!this._map)
            throw new Error("Must add layer to map before using getCenter()");
          return pn(this._defaultShape(), this._map.options.crs);
        },
        // @method getBounds(): LatLngBounds
        // Returns the `LatLngBounds` of the path.
        getBounds: function() {
          return this._bounds;
        },
        // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
        // Adds a given point to the polyline. By default, adds to the first ring of
        // the polyline in case of a multi-polyline, but can be overridden by passing
        // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
        addLatLng: function(_, k) {
          return k = k || this._defaultShape(), _ = et(_), k.push(_), this._bounds.extend(_), this.redraw();
        },
        _setLatLngs: function(_) {
          this._bounds = new yt(), this._latlngs = this._convertLatLngs(_);
        },
        _defaultShape: function() {
          return kt(this._latlngs) ? this._latlngs : this._latlngs[0];
        },
        // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
        _convertLatLngs: function(_) {
          for (var k = [], P = kt(_), M = 0, S = _.length; M < S; M++)
            P ? (k[M] = et(_[M]), this._bounds.extend(k[M])) : k[M] = this._convertLatLngs(_[M]);
          return k;
        },
        _project: function() {
          var _ = new lt();
          this._rings = [], this._projectLatlngs(this._latlngs, this._rings, _), this._bounds.isValid() && _.isValid() && (this._rawPxBounds = _, this._updateBounds());
        },
        _updateBounds: function() {
          var _ = this._clickTolerance(), k = new X(_, _);
          this._rawPxBounds && (this._pxBounds = new lt([
            this._rawPxBounds.min.subtract(k),
            this._rawPxBounds.max.add(k)
          ]));
        },
        // recursively turns latlngs into a set of rings with projected coordinates
        _projectLatlngs: function(_, k, P) {
          var M = _[0] instanceof st, S = _.length, D, A;
          if (M) {
            for (A = [], D = 0; D < S; D++)
              A[D] = this._map.latLngToLayerPoint(_[D]), P.extend(A[D]);
            k.push(A);
          } else
            for (D = 0; D < S; D++)
              this._projectLatlngs(_[D], k, P);
        },
        // clip polyline by renderer bounds so that we have less to render for performance
        _clipPoints: function() {
          var _ = this._renderer._bounds;
          if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(_))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            var k = this._parts, P, M, S, D, A, N, H;
            for (P = 0, S = 0, D = this._rings.length; P < D; P++)
              for (H = this._rings[P], M = 0, A = H.length; M < A - 1; M++)
                N = fn(H[M], H[M + 1], _, M, !0), N && (k[S] = k[S] || [], k[S].push(N[0]), (N[1] !== H[M + 1] || M === A - 2) && (k[S].push(N[1]), S++));
          }
        },
        // simplify each clipped part of the polyline for performance
        _simplifyPoints: function() {
          for (var _ = this._parts, k = this.options.smoothFactor, P = 0, M = _.length; P < M; P++)
            _[P] = un(_[P], k);
        },
        _update: function() {
          this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
        },
        _updatePath: function() {
          this._renderer._updatePoly(this);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(_, k) {
          var P, M, S, D, A, N, H = this._clickTolerance();
          if (!this._pxBounds || !this._pxBounds.contains(_))
            return !1;
          for (P = 0, D = this._parts.length; P < D; P++)
            for (N = this._parts[P], M = 0, A = N.length, S = A - 1; M < A; S = M++)
              if (!(!k && M === 0) && cn(_, N[S], N[M]) <= H)
                return !0;
          return !1;
        }
      });
      function Wo(_, k) {
        return new Zt(_, k);
      }
      Zt._flat = _n;
      var Qt = Zt.extend({
        options: {
          fill: !0
        },
        isEmpty: function() {
          return !this._latlngs.length || !this._latlngs[0].length;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
        getCenter: function() {
          if (!this._map)
            throw new Error("Must add layer to map before using getCenter()");
          return hn(this._defaultShape(), this._map.options.crs);
        },
        _convertLatLngs: function(_) {
          var k = Zt.prototype._convertLatLngs.call(this, _), P = k.length;
          return P >= 2 && k[0] instanceof st && k[0].equals(k[P - 1]) && k.pop(), k;
        },
        _setLatLngs: function(_) {
          Zt.prototype._setLatLngs.call(this, _), kt(this._latlngs) && (this._latlngs = [this._latlngs]);
        },
        _defaultShape: function() {
          return kt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
        },
        _clipPoints: function() {
          var _ = this._renderer._bounds, k = this.options.weight, P = new X(k, k);
          if (_ = new lt(_.min.subtract(P), _.max.add(P)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(_))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            for (var M = 0, S = this._rings.length, D; M < S; M++)
              D = ln(this._rings[M], _, !0), D.length && this._parts.push(D);
          }
        },
        _updatePath: function() {
          this._renderer._updatePoly(this, !0);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(_) {
          var k = !1, P, M, S, D, A, N, H, G;
          if (!this._pxBounds || !this._pxBounds.contains(_))
            return !1;
          for (D = 0, H = this._parts.length; D < H; D++)
            for (P = this._parts[D], A = 0, G = P.length, N = G - 1; A < G; N = A++)
              M = P[A], S = P[N], M.y > _.y != S.y > _.y && _.x < (S.x - M.x) * (_.y - M.y) / (S.y - M.y) + M.x && (k = !k);
          return k || Zt.prototype._containsPoint.call(this, _, !0);
        }
      });
      function Vo(_, k) {
        return new Qt(_, k);
      }
      var Bt = At.extend({
        /* @section
         * @aka GeoJSON options
         *
         * @option pointToLayer: Function = *
         * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
         * called when data is added, passing the GeoJSON point feature and its `LatLng`.
         * The default is to spawn a default `Marker`:
         * ```js
         * function(geoJsonPoint, latlng) {
         * 	return L.marker(latlng);
         * }
         * ```
         *
         * @option style: Function = *
         * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
         * called internally when data is added.
         * The default value is to not override any defaults:
         * ```js
         * function (geoJsonFeature) {
         * 	return {}
         * }
         * ```
         *
         * @option onEachFeature: Function = *
         * A `Function` that will be called once for each created `Feature`, after it has
         * been created and styled. Useful for attaching events and popups to features.
         * The default is to do nothing with the newly created layers:
         * ```js
         * function (feature, layer) {}
         * ```
         *
         * @option filter: Function = *
         * A `Function` that will be used to decide whether to include a feature or not.
         * The default is to include all features:
         * ```js
         * function (geoJsonFeature) {
         * 	return true;
         * }
         * ```
         * Note: dynamically changing the `filter` option will have effect only on newly
         * added data. It will _not_ re-evaluate already included features.
         *
         * @option coordsToLatLng: Function = *
         * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
         * The default is the `coordsToLatLng` static method.
         *
         * @option markersInheritOptions: Boolean = false
         * Whether default Markers for "Point" type Features inherit from group options.
         */
        initialize: function(_, k) {
          at(this, k), this._layers = {}, _ && this.addData(_);
        },
        // @method addData( <GeoJSON> data ): this
        // Adds a GeoJSON object to the layer.
        addData: function(_) {
          var k = Tt(_) ? _ : _.features, P, M, S;
          if (k) {
            for (P = 0, M = k.length; P < M; P++)
              S = k[P], (S.geometries || S.geometry || S.features || S.coordinates) && this.addData(S);
            return this;
          }
          var D = this.options;
          if (D.filter && !D.filter(_))
            return this;
          var A = Ce(_, D);
          return A ? (A.feature = Oe(_), A.defaultOptions = A.options, this.resetStyle(A), D.onEachFeature && D.onEachFeature(_, A), this.addLayer(A)) : this;
        },
        // @method resetStyle( <Path> layer? ): this
        // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
        // If `layer` is omitted, the style of all features in the current layer is reset.
        resetStyle: function(_) {
          return _ === void 0 ? this.eachLayer(this.resetStyle, this) : (_.options = T({}, _.defaultOptions), this._setLayerStyle(_, this.options.style), this);
        },
        // @method setStyle( <Function> style ): this
        // Changes styles of GeoJSON vector layers with the given style function.
        setStyle: function(_) {
          return this.eachLayer(function(k) {
            this._setLayerStyle(k, _);
          }, this);
        },
        _setLayerStyle: function(_, k) {
          _.setStyle && (typeof k == "function" && (k = k(_.feature)), _.setStyle(k));
        }
      });
      function Ce(_, k) {
        var P = _.type === "Feature" ? _.geometry : _, M = P ? P.coordinates : null, S = [], D = k && k.pointToLayer, A = k && k.coordsToLatLng || vi, N, H, G, j;
        if (!M && !P)
          return null;
        switch (P.type) {
          case "Point":
            return N = A(M), vn(D, _, N, k);
          case "MultiPoint":
            for (G = 0, j = M.length; G < j; G++)
              N = A(M[G]), S.push(vn(D, _, N, k));
            return new At(S);
          case "LineString":
          case "MultiLineString":
            return H = Se(M, P.type === "LineString" ? 0 : 1, A), new Zt(H, k);
          case "Polygon":
          case "MultiPolygon":
            return H = Se(M, P.type === "Polygon" ? 1 : 2, A), new Qt(H, k);
          case "GeometryCollection":
            for (G = 0, j = P.geometries.length; G < j; G++) {
              var K = Ce({
                geometry: P.geometries[G],
                type: "Feature",
                properties: _.properties
              }, k);
              K && S.push(K);
            }
            return new At(S);
          case "FeatureCollection":
            for (G = 0, j = P.features.length; G < j; G++) {
              var tt = Ce(P.features[G], k);
              tt && S.push(tt);
            }
            return new At(S);
          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }
      function vn(_, k, P, M) {
        return _ ? _(k, P) : new Ee(P, M && M.markersInheritOptions && M);
      }
      function vi(_) {
        return new st(_[1], _[0], _[2]);
      }
      function Se(_, k, P) {
        for (var M = [], S = 0, D = _.length, A; S < D; S++)
          A = k ? Se(_[S], k - 1, P) : (P || vi)(_[S]), M.push(A);
        return M;
      }
      function yi(_, k) {
        return _ = et(_), _.alt !== void 0 ? [ot(_.lng, k), ot(_.lat, k), ot(_.alt, k)] : [ot(_.lng, k), ot(_.lat, k)];
      }
      function De(_, k, P, M) {
        for (var S = [], D = 0, A = _.length; D < A; D++)
          S.push(k ? De(_[D], kt(_[D]) ? 0 : k - 1, P, M) : yi(_[D], M));
        return !k && P && S.length > 0 && S.push(S[0].slice()), S;
      }
      function te(_, k) {
        return _.feature ? T({}, _.feature, { geometry: k }) : Oe(k);
      }
      function Oe(_) {
        return _.type === "Feature" || _.type === "FeatureCollection" ? _ : {
          type: "Feature",
          properties: {},
          geometry: _
        };
      }
      var Li = {
        toGeoJSON: function(_) {
          return te(this, {
            type: "Point",
            coordinates: yi(this.getLatLng(), _)
          });
        }
      };
      Ee.include(Li), gi.include(Li), Me.include(Li), Zt.include({
        toGeoJSON: function(_) {
          var k = !kt(this._latlngs), P = De(this._latlngs, k ? 1 : 0, !1, _);
          return te(this, {
            type: (k ? "Multi" : "") + "LineString",
            coordinates: P
          });
        }
      }), Qt.include({
        toGeoJSON: function(_) {
          var k = !kt(this._latlngs), P = k && !kt(this._latlngs[0]), M = De(this._latlngs, P ? 2 : k ? 1 : 0, !0, _);
          return k || (M = [M]), te(this, {
            type: (P ? "Multi" : "") + "Polygon",
            coordinates: M
          });
        }
      }), Xt.include({
        toMultiPoint: function(_) {
          var k = [];
          return this.eachLayer(function(P) {
            k.push(P.toGeoJSON(_).geometry.coordinates);
          }), te(this, {
            type: "MultiPoint",
            coordinates: k
          });
        },
        // @method toGeoJSON(precision?: Number|false): Object
        // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
        // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
        toGeoJSON: function(_) {
          var k = this.feature && this.feature.geometry && this.feature.geometry.type;
          if (k === "MultiPoint")
            return this.toMultiPoint(_);
          var P = k === "GeometryCollection", M = [];
          return this.eachLayer(function(S) {
            if (S.toGeoJSON) {
              var D = S.toGeoJSON(_);
              if (P)
                M.push(D.geometry);
              else {
                var A = Oe(D);
                A.type === "FeatureCollection" ? M.push.apply(M, A.features) : M.push(A);
              }
            }
          }), P ? te(this, {
            geometries: M,
            type: "GeometryCollection"
          }) : {
            type: "FeatureCollection",
            features: M
          };
        }
      });
      function yn(_, k) {
        return new Bt(_, k);
      }
      var jo = yn, Ie = Mt.extend({
        // @section
        // @aka ImageOverlay options
        options: {
          // @option opacity: Number = 1.0
          // The opacity of the image overlay.
          opacity: 1,
          // @option alt: String = ''
          // Text for the `alt` attribute of the image (useful for accessibility).
          alt: "",
          // @option interactive: Boolean = false
          // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
          interactive: !1,
          // @option crossOrigin: Boolean|String = false
          // Whether the crossOrigin attribute will be added to the image.
          // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
          // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
          crossOrigin: !1,
          // @option errorOverlayUrl: String = ''
          // URL to the overlay image to show in place of the overlay that failed to load.
          errorOverlayUrl: "",
          // @option zIndex: Number = 1
          // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
          zIndex: 1,
          // @option className: String = ''
          // A custom class name to assign to the image. Empty by default.
          className: ""
        },
        initialize: function(_, k, P) {
          this._url = _, this._bounds = ct(k), at(this, P);
        },
        onAdd: function() {
          this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (Q(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
        },
        onRemove: function() {
          ht(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
        },
        // @method setOpacity(opacity: Number): this
        // Sets the opacity of the overlay.
        setOpacity: function(_) {
          return this.options.opacity = _, this._image && this._updateOpacity(), this;
        },
        setStyle: function(_) {
          return _.opacity && this.setOpacity(_.opacity), this;
        },
        // @method bringToFront(): this
        // Brings the layer to the top of all overlays.
        bringToFront: function() {
          return this._map && Kt(this._image), this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all overlays.
        bringToBack: function() {
          return this._map && Jt(this._image), this;
        },
        // @method setUrl(url: String): this
        // Changes the URL of the image.
        setUrl: function(_) {
          return this._url = _, this._image && (this._image.src = _), this;
        },
        // @method setBounds(bounds: LatLngBounds): this
        // Update the bounds that this ImageOverlay covers
        setBounds: function(_) {
          return this._bounds = ct(_), this._map && this._reset(), this;
        },
        getEvents: function() {
          var _ = {
            zoom: this._reset,
            viewreset: this._reset
          };
          return this._zoomAnimated && (_.zoomanim = this._animateZoom), _;
        },
        // @method setZIndex(value: Number): this
        // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
        setZIndex: function(_) {
          return this.options.zIndex = _, this._updateZIndex(), this;
        },
        // @method getBounds(): LatLngBounds
        // Get the bounds that this ImageOverlay covers
        getBounds: function() {
          return this._bounds;
        },
        // @method getElement(): HTMLElement
        // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
        // used by this overlay.
        getElement: function() {
          return this._image;
        },
        _initImage: function() {
          var _ = this._url.tagName === "IMG", k = this._image = _ ? this._url : nt("img");
          if (Q(k, "leaflet-image-layer"), this._zoomAnimated && Q(k, "leaflet-zoom-animated"), this.options.className && Q(k, this.options.className), k.onselectstart = q, k.onmousemove = q, k.onload = O(this.fire, this, "load"), k.onerror = O(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (k.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), _) {
            this._url = k.src;
            return;
          }
          k.src = this._url, k.alt = this.options.alt;
        },
        _animateZoom: function(_) {
          var k = this._map.getZoomScale(_.zoom), P = this._map._latLngBoundsToNewLayerBounds(this._bounds, _.zoom, _.center).min;
          Gt(this._image, P, k);
        },
        _reset: function() {
          var _ = this._image, k = new lt(
            this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            this._map.latLngToLayerPoint(this._bounds.getSouthEast())
          ), P = k.getSize();
          dt(_, k.min), _.style.width = P.x + "px", _.style.height = P.y + "px";
        },
        _updateOpacity: function() {
          xt(this._image, this.options.opacity);
        },
        _updateZIndex: function() {
          this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
        },
        _overlayOnError: function() {
          this.fire("error");
          var _ = this.options.errorOverlayUrl;
          _ && this._url !== _ && (this._url = _, this._image.src = _);
        },
        // @method getCenter(): LatLng
        // Returns the center of the ImageOverlay.
        getCenter: function() {
          return this._bounds.getCenter();
        }
      }), qo = function(_, k, P) {
        return new Ie(_, k, P);
      }, Ln = Ie.extend({
        // @section
        // @aka VideoOverlay options
        options: {
          // @option autoplay: Boolean = true
          // Whether the video starts playing automatically when loaded.
          // On some browsers autoplay will only work with `muted: true`
          autoplay: !0,
          // @option loop: Boolean = true
          // Whether the video will loop back to the beginning when played.
          loop: !0,
          // @option keepAspectRatio: Boolean = true
          // Whether the video will save aspect ratio after the projection.
          // Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
          keepAspectRatio: !0,
          // @option muted: Boolean = false
          // Whether the video starts on mute when loaded.
          muted: !1,
          // @option playsInline: Boolean = true
          // Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
          playsInline: !0
        },
        _initImage: function() {
          var _ = this._url.tagName === "VIDEO", k = this._image = _ ? this._url : nt("video");
          if (Q(k, "leaflet-image-layer"), this._zoomAnimated && Q(k, "leaflet-zoom-animated"), this.options.className && Q(k, this.options.className), k.onselectstart = q, k.onmousemove = q, k.onloadeddata = O(this.fire, this, "load"), _) {
            for (var P = k.getElementsByTagName("source"), M = [], S = 0; S < P.length; S++)
              M.push(P[S].src);
            this._url = P.length > 0 ? M : [k.src];
            return;
          }
          Tt(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(k.style, "objectFit") && (k.style.objectFit = "fill"), k.autoplay = !!this.options.autoplay, k.loop = !!this.options.loop, k.muted = !!this.options.muted, k.playsInline = !!this.options.playsInline;
          for (var D = 0; D < this._url.length; D++) {
            var A = nt("source");
            A.src = this._url[D], k.appendChild(A);
          }
        }
        // @method getElement(): HTMLVideoElement
        // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
        // used by this overlay.
      });
      function Yo(_, k, P) {
        return new Ln(_, k, P);
      }
      var wn = Ie.extend({
        _initImage: function() {
          var _ = this._image = this._url;
          Q(_, "leaflet-image-layer"), this._zoomAnimated && Q(_, "leaflet-zoom-animated"), this.options.className && Q(_, this.options.className), _.onselectstart = q, _.onmousemove = q;
        }
        // @method getElement(): SVGElement
        // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
        // used by this overlay.
      });
      function Ko(_, k, P) {
        return new wn(_, k, P);
      }
      var Ot = Mt.extend({
        // @section
        // @aka DivOverlay options
        options: {
          // @option interactive: Boolean = false
          // If true, the popup/tooltip will listen to the mouse events.
          interactive: !1,
          // @option offset: Point = Point(0, 0)
          // The offset of the overlay position.
          offset: [0, 0],
          // @option className: String = ''
          // A custom CSS class name to assign to the overlay.
          className: "",
          // @option pane: String = undefined
          // `Map pane` where the overlay will be added.
          pane: void 0,
          // @option content: String|HTMLElement|Function = ''
          // Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
          // passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
          content: ""
        },
        initialize: function(_, k) {
          _ && (_ instanceof st || Tt(_)) ? (this._latlng = et(_), at(this, k)) : (at(this, _), this._source = k), this.options.content && (this._content = this.options.content);
        },
        // @method openOn(map: Map): this
        // Adds the overlay to the map.
        // Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
        openOn: function(_) {
          return _ = arguments.length ? _ : this._source._map, _.hasLayer(this) || _.addLayer(this), this;
        },
        // @method close(): this
        // Closes the overlay.
        // Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
        // and `layer.closePopup()`/`.closeTooltip()`.
        close: function() {
          return this._map && this._map.removeLayer(this), this;
        },
        // @method toggle(layer?: Layer): this
        // Opens or closes the overlay bound to layer depending on its current state.
        // Argument may be omitted only for overlay bound to layer.
        // Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
        toggle: function(_) {
          return this._map ? this.close() : (arguments.length ? this._source = _ : _ = this._source, this._prepareOpen(), this.openOn(_._map)), this;
        },
        onAdd: function(_) {
          this._zoomAnimated = _._zoomAnimated, this._container || this._initLayout(), _._fadeAnimated && xt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), _._fadeAnimated && xt(this._container, 1), this.bringToFront(), this.options.interactive && (Q(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
        },
        onRemove: function(_) {
          _._fadeAnimated ? (xt(this._container, 0), this._removeTimeout = setTimeout(O(ht, void 0, this._container), 200)) : ht(this._container), this.options.interactive && (ut(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
        },
        // @namespace DivOverlay
        // @method getLatLng: LatLng
        // Returns the geographical point of the overlay.
        getLatLng: function() {
          return this._latlng;
        },
        // @method setLatLng(latlng: LatLng): this
        // Sets the geographical point where the overlay will open.
        setLatLng: function(_) {
          return this._latlng = et(_), this._map && (this._updatePosition(), this._adjustPan()), this;
        },
        // @method getContent: String|HTMLElement
        // Returns the content of the overlay.
        getContent: function() {
          return this._content;
        },
        // @method setContent(htmlContent: String|HTMLElement|Function): this
        // Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
        // The function should return a `String` or `HTMLElement` to be used in the overlay.
        setContent: function(_) {
          return this._content = _, this.update(), this;
        },
        // @method getElement: String|HTMLElement
        // Returns the HTML container of the overlay.
        getElement: function() {
          return this._container;
        },
        // @method update: null
        // Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
        update: function() {
          this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
        },
        getEvents: function() {
          var _ = {
            zoom: this._updatePosition,
            viewreset: this._updatePosition
          };
          return this._zoomAnimated && (_.zoomanim = this._animateZoom), _;
        },
        // @method isOpen: Boolean
        // Returns `true` when the overlay is visible on the map.
        isOpen: function() {
          return !!this._map && this._map.hasLayer(this);
        },
        // @method bringToFront: this
        // Brings this overlay in front of other overlays (in the same map pane).
        bringToFront: function() {
          return this._map && Kt(this._container), this;
        },
        // @method bringToBack: this
        // Brings this overlay to the back of other overlays (in the same map pane).
        bringToBack: function() {
          return this._map && Jt(this._container), this;
        },
        // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
        _prepareOpen: function(_) {
          var k = this._source;
          if (!k._map)
            return !1;
          if (k instanceof At) {
            k = null;
            var P = this._source._layers;
            for (var M in P)
              if (P[M]._map) {
                k = P[M];
                break;
              }
            if (!k)
              return !1;
            this._source = k;
          }
          if (!_)
            if (k.getCenter)
              _ = k.getCenter();
            else if (k.getLatLng)
              _ = k.getLatLng();
            else if (k.getBounds)
              _ = k.getBounds().getCenter();
            else
              throw new Error("Unable to get source layer LatLng.");
          return this.setLatLng(_), this._map && this.update(), !0;
        },
        _updateContent: function() {
          if (this._content) {
            var _ = this._contentNode, k = typeof this._content == "function" ? this._content(this._source || this) : this._content;
            if (typeof k == "string")
              _.innerHTML = k;
            else {
              for (; _.hasChildNodes(); )
                _.removeChild(_.firstChild);
              _.appendChild(k);
            }
            this.fire("contentupdate");
          }
        },
        _updatePosition: function() {
          if (this._map) {
            var _ = this._map.latLngToLayerPoint(this._latlng), k = J(this.options.offset), P = this._getAnchor();
            this._zoomAnimated ? dt(this._container, _.add(P)) : k = k.add(_).add(P);
            var M = this._containerBottom = -k.y, S = this._containerLeft = -Math.round(this._containerWidth / 2) + k.x;
            this._container.style.bottom = M + "px", this._container.style.left = S + "px";
          }
        },
        _getAnchor: function() {
          return [0, 0];
        }
      });
      it.include({
        _initOverlay: function(_, k, P, M) {
          var S = k;
          return S instanceof _ || (S = new _(M).setContent(k)), P && S.setLatLng(P), S;
        }
      }), Mt.include({
        _initOverlay: function(_, k, P, M) {
          var S = P;
          return S instanceof _ ? (at(S, M), S._source = this) : (S = k && !M ? k : new _(M, this), S.setContent(P)), S;
        }
      });
      var ze = Ot.extend({
        // @section
        // @aka Popup options
        options: {
          // @option pane: String = 'popupPane'
          // `Map pane` where the popup will be added.
          pane: "popupPane",
          // @option offset: Point = Point(0, 7)
          // The offset of the popup position.
          offset: [0, 7],
          // @option maxWidth: Number = 300
          // Max width of the popup, in pixels.
          maxWidth: 300,
          // @option minWidth: Number = 50
          // Min width of the popup, in pixels.
          minWidth: 50,
          // @option maxHeight: Number = null
          // If set, creates a scrollable container of the given height
          // inside a popup if its content exceeds it.
          // The scrollable container can be styled using the
          // `leaflet-popup-scrolled` CSS class selector.
          maxHeight: null,
          // @option autoPan: Boolean = true
          // Set it to `false` if you don't want the map to do panning animation
          // to fit the opened popup.
          autoPan: !0,
          // @option autoPanPaddingTopLeft: Point = null
          // The margin between the popup and the top left corner of the map
          // view after autopanning was performed.
          autoPanPaddingTopLeft: null,
          // @option autoPanPaddingBottomRight: Point = null
          // The margin between the popup and the bottom right corner of the map
          // view after autopanning was performed.
          autoPanPaddingBottomRight: null,
          // @option autoPanPadding: Point = Point(5, 5)
          // Equivalent of setting both top left and bottom right autopan padding to the same value.
          autoPanPadding: [5, 5],
          // @option keepInView: Boolean = false
          // Set it to `true` if you want to prevent users from panning the popup
          // off of the screen while it is open.
          keepInView: !1,
          // @option closeButton: Boolean = true
          // Controls the presence of a close button in the popup.
          closeButton: !0,
          // @option autoClose: Boolean = true
          // Set it to `false` if you want to override the default behavior of
          // the popup closing when another popup is opened.
          autoClose: !0,
          // @option closeOnEscapeKey: Boolean = true
          // Set it to `false` if you want to override the default behavior of
          // the ESC key for closing of the popup.
          closeOnEscapeKey: !0,
          // @option closeOnClick: Boolean = *
          // Set it if you want to override the default behavior of the popup closing when user clicks
          // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
          // @option className: String = ''
          // A custom CSS class name to assign to the popup.
          className: ""
        },
        // @namespace Popup
        // @method openOn(map: Map): this
        // Alternative to `map.openPopup(popup)`.
        // Adds the popup to the map and closes the previous one.
        openOn: function(_) {
          return _ = arguments.length ? _ : this._source._map, !_.hasLayer(this) && _._popup && _._popup.options.autoClose && _.removeLayer(_._popup), _._popup = this, Ot.prototype.openOn.call(this, _);
        },
        onAdd: function(_) {
          Ot.prototype.onAdd.call(this, _), _.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof Ht || this._source.on("preclick", Vt));
        },
        onRemove: function(_) {
          Ot.prototype.onRemove.call(this, _), _.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof Ht || this._source.off("preclick", Vt));
        },
        getEvents: function() {
          var _ = Ot.prototype.getEvents.call(this);
          return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (_.preclick = this.close), this.options.keepInView && (_.moveend = this._adjustPan), _;
        },
        _initLayout: function() {
          var _ = "leaflet-popup", k = this._container = nt(
            "div",
            _ + " " + (this.options.className || "") + " leaflet-zoom-animated"
          ), P = this._wrapper = nt("div", _ + "-content-wrapper", k);
          if (this._contentNode = nt("div", _ + "-content", P), ce(k), hi(this._contentNode), $(k, "contextmenu", Vt), this._tipContainer = nt("div", _ + "-tip-container", k), this._tip = nt("div", _ + "-tip", this._tipContainer), this.options.closeButton) {
            var M = this._closeButton = nt("a", _ + "-close-button", k);
            M.setAttribute("role", "button"), M.setAttribute("aria-label", "Close popup"), M.href = "#close", M.innerHTML = '<span aria-hidden="true">&#215;</span>', $(M, "click", function(S) {
              pt(S), this.close();
            }, this);
          }
        },
        _updateLayout: function() {
          var _ = this._contentNode, k = _.style;
          k.width = "", k.whiteSpace = "nowrap";
          var P = _.offsetWidth;
          P = Math.min(P, this.options.maxWidth), P = Math.max(P, this.options.minWidth), k.width = P + 1 + "px", k.whiteSpace = "", k.height = "";
          var M = _.offsetHeight, S = this.options.maxHeight, D = "leaflet-popup-scrolled";
          S && M > S ? (k.height = S + "px", Q(_, D)) : ut(_, D), this._containerWidth = this._container.offsetWidth;
        },
        _animateZoom: function(_) {
          var k = this._map._latLngToNewLayerPoint(this._latlng, _.zoom, _.center), P = this._getAnchor();
          dt(this._container, k.add(P));
        },
        _adjustPan: function() {
          if (this.options.autoPan) {
            if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
              this._autopanning = !1;
              return;
            }
            var _ = this._map, k = parseInt(ae(this._container, "marginBottom"), 10) || 0, P = this._container.offsetHeight + k, M = this._containerWidth, S = new X(this._containerLeft, -P - this._containerBottom);
            S._add(Wt(this._container));
            var D = _.layerPointToContainerPoint(S), A = J(this.options.autoPanPadding), N = J(this.options.autoPanPaddingTopLeft || A), H = J(this.options.autoPanPaddingBottomRight || A), G = _.getSize(), j = 0, K = 0;
            D.x + M + H.x > G.x && (j = D.x + M - G.x + H.x), D.x - j - N.x < 0 && (j = D.x - N.x), D.y + P + H.y > G.y && (K = D.y + P - G.y + H.y), D.y - K - N.y < 0 && (K = D.y - N.y), (j || K) && (this.options.keepInView && (this._autopanning = !0), _.fire("autopanstart").panBy([j, K]));
          }
        },
        _getAnchor: function() {
          return J(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
        }
      }), Jo = function(_, k) {
        return new ze(_, k);
      };
      it.mergeOptions({
        closePopupOnClick: !0
      }), it.include({
        // @method openPopup(popup: Popup): this
        // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
        // @alternative
        // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
        // Creates a popup with the specified content and options and opens it in the given point on a map.
        openPopup: function(_, k, P) {
          return this._initOverlay(ze, _, k, P).openOn(this), this;
        },
        // @method closePopup(popup?: Popup): this
        // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
        closePopup: function(_) {
          return _ = arguments.length ? _ : this._popup, _ && _.close(), this;
        }
      }), Mt.include({
        // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
        // Binds a popup to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindPopup: function(_, k) {
          return this._popup = this._initOverlay(ze, this._popup, _, k), this._popupHandlersAdded || (this.on({
            click: this._openPopup,
            keypress: this._onKeyPress,
            remove: this.closePopup,
            move: this._movePopup
          }), this._popupHandlersAdded = !0), this;
        },
        // @method unbindPopup(): this
        // Removes the popup previously bound with `bindPopup`.
        unbindPopup: function() {
          return this._popup && (this.off({
            click: this._openPopup,
            keypress: this._onKeyPress,
            remove: this.closePopup,
            move: this._movePopup
          }), this._popupHandlersAdded = !1, this._popup = null), this;
        },
        // @method openPopup(latlng?: LatLng): this
        // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
        openPopup: function(_) {
          return this._popup && (this instanceof At || (this._popup._source = this), this._popup._prepareOpen(_ || this._latlng) && this._popup.openOn(this._map)), this;
        },
        // @method closePopup(): this
        // Closes the popup bound to this layer if it is open.
        closePopup: function() {
          return this._popup && this._popup.close(), this;
        },
        // @method togglePopup(): this
        // Opens or closes the popup bound to this layer depending on its current state.
        togglePopup: function() {
          return this._popup && this._popup.toggle(this), this;
        },
        // @method isPopupOpen(): boolean
        // Returns `true` if the popup bound to this layer is currently open.
        isPopupOpen: function() {
          return this._popup ? this._popup.isOpen() : !1;
        },
        // @method setPopupContent(content: String|HTMLElement|Popup): this
        // Sets the content of the popup bound to this layer.
        setPopupContent: function(_) {
          return this._popup && this._popup.setContent(_), this;
        },
        // @method getPopup(): Popup
        // Returns the popup bound to this layer.
        getPopup: function() {
          return this._popup;
        },
        _openPopup: function(_) {
          if (!(!this._popup || !this._map)) {
            jt(_);
            var k = _.layer || _.target;
            if (this._popup._source === k && !(k instanceof Ht)) {
              this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(_.latlng);
              return;
            }
            this._popup._source = k, this.openPopup(_.latlng);
          }
        },
        _movePopup: function(_) {
          this._popup.setLatLng(_.latlng);
        },
        _onKeyPress: function(_) {
          _.originalEvent.keyCode === 13 && this._openPopup(_);
        }
      });
      var Ae = Ot.extend({
        // @section
        // @aka Tooltip options
        options: {
          // @option pane: String = 'tooltipPane'
          // `Map pane` where the tooltip will be added.
          pane: "tooltipPane",
          // @option offset: Point = Point(0, 0)
          // Optional offset of the tooltip position.
          offset: [0, 0],
          // @option direction: String = 'auto'
          // Direction where to open the tooltip. Possible values are: `right`, `left`,
          // `top`, `bottom`, `center`, `auto`.
          // `auto` will dynamically switch between `right` and `left` according to the tooltip
          // position on the map.
          direction: "auto",
          // @option permanent: Boolean = false
          // Whether to open the tooltip permanently or only on mouseover.
          permanent: !1,
          // @option sticky: Boolean = false
          // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
          sticky: !1,
          // @option opacity: Number = 0.9
          // Tooltip container opacity.
          opacity: 0.9
        },
        onAdd: function(_) {
          Ot.prototype.onAdd.call(this, _), this.setOpacity(this.options.opacity), _.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
        },
        onRemove: function(_) {
          Ot.prototype.onRemove.call(this, _), _.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
        },
        getEvents: function() {
          var _ = Ot.prototype.getEvents.call(this);
          return this.options.permanent || (_.preclick = this.close), _;
        },
        _initLayout: function() {
          var _ = "leaflet-tooltip", k = _ + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
          this._contentNode = this._container = nt("div", k), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + U(this));
        },
        _updateLayout: function() {
        },
        _adjustPan: function() {
        },
        _setPosition: function(_) {
          var k, P, M = this._map, S = this._container, D = M.latLngToContainerPoint(M.getCenter()), A = M.layerPointToContainerPoint(_), N = this.options.direction, H = S.offsetWidth, G = S.offsetHeight, j = J(this.options.offset), K = this._getAnchor();
          N === "top" ? (k = H / 2, P = G) : N === "bottom" ? (k = H / 2, P = 0) : N === "center" ? (k = H / 2, P = G / 2) : N === "right" ? (k = 0, P = G / 2) : N === "left" ? (k = H, P = G / 2) : A.x < D.x ? (N = "right", k = 0, P = G / 2) : (N = "left", k = H + (j.x + K.x) * 2, P = G / 2), _ = _.subtract(J(k, P, !0)).add(j).add(K), ut(S, "leaflet-tooltip-right"), ut(S, "leaflet-tooltip-left"), ut(S, "leaflet-tooltip-top"), ut(S, "leaflet-tooltip-bottom"), Q(S, "leaflet-tooltip-" + N), dt(S, _);
        },
        _updatePosition: function() {
          var _ = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(_);
        },
        setOpacity: function(_) {
          this.options.opacity = _, this._container && xt(this._container, _);
        },
        _animateZoom: function(_) {
          var k = this._map._latLngToNewLayerPoint(this._latlng, _.zoom, _.center);
          this._setPosition(k);
        },
        _getAnchor: function() {
          return J(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
        }
      }), Xo = function(_, k) {
        return new Ae(_, k);
      };
      it.include({
        // @method openTooltip(tooltip: Tooltip): this
        // Opens the specified tooltip.
        // @alternative
        // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
        // Creates a tooltip with the specified content and options and open it.
        openTooltip: function(_, k, P) {
          return this._initOverlay(Ae, _, k, P).openOn(this), this;
        },
        // @method closeTooltip(tooltip: Tooltip): this
        // Closes the tooltip given as parameter.
        closeTooltip: function(_) {
          return _.close(), this;
        }
      }), Mt.include({
        // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
        // Binds a tooltip to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindTooltip: function(_, k) {
          return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Ae, this._tooltip, _, k), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
        },
        // @method unbindTooltip(): this
        // Removes the tooltip previously bound with `bindTooltip`.
        unbindTooltip: function() {
          return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
        },
        _initTooltipInteractions: function(_) {
          if (!(!_ && this._tooltipHandlersAdded)) {
            var k = _ ? "off" : "on", P = {
              remove: this.closeTooltip,
              move: this._moveTooltip
            };
            this._tooltip.options.permanent ? P.add = this._openTooltip : (P.mouseover = this._openTooltip, P.mouseout = this.closeTooltip, P.click = this._openTooltip, this._map ? this._addFocusListeners() : P.add = this._addFocusListeners), this._tooltip.options.sticky && (P.mousemove = this._moveTooltip), this[k](P), this._tooltipHandlersAdded = !_;
          }
        },
        // @method openTooltip(latlng?: LatLng): this
        // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
        openTooltip: function(_) {
          return this._tooltip && (this instanceof At || (this._tooltip._source = this), this._tooltip._prepareOpen(_) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
        },
        // @method closeTooltip(): this
        // Closes the tooltip bound to this layer if it is open.
        closeTooltip: function() {
          if (this._tooltip)
            return this._tooltip.close();
        },
        // @method toggleTooltip(): this
        // Opens or closes the tooltip bound to this layer depending on its current state.
        toggleTooltip: function() {
          return this._tooltip && this._tooltip.toggle(this), this;
        },
        // @method isTooltipOpen(): boolean
        // Returns `true` if the tooltip bound to this layer is currently open.
        isTooltipOpen: function() {
          return this._tooltip.isOpen();
        },
        // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
        // Sets the content of the tooltip bound to this layer.
        setTooltipContent: function(_) {
          return this._tooltip && this._tooltip.setContent(_), this;
        },
        // @method getTooltip(): Tooltip
        // Returns the tooltip bound to this layer.
        getTooltip: function() {
          return this._tooltip;
        },
        _addFocusListeners: function() {
          this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
        },
        _addFocusListenersOnLayer: function(_) {
          var k = typeof _.getElement == "function" && _.getElement();
          k && ($(k, "focus", function() {
            this._tooltip._source = _, this.openTooltip();
          }, this), $(k, "blur", this.closeTooltip, this));
        },
        _setAriaDescribedByOnLayer: function(_) {
          var k = typeof _.getElement == "function" && _.getElement();
          k && k.setAttribute("aria-describedby", this._tooltip._container.id);
        },
        _openTooltip: function(_) {
          if (!(!this._tooltip || !this._map)) {
            if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
              this._openOnceFlag = !0;
              var k = this;
              this._map.once("moveend", function() {
                k._openOnceFlag = !1, k._openTooltip(_);
              });
              return;
            }
            this._tooltip._source = _.layer || _.target, this.openTooltip(this._tooltip.options.sticky ? _.latlng : void 0);
          }
        },
        _moveTooltip: function(_) {
          var k = _.latlng, P, M;
          this._tooltip.options.sticky && _.originalEvent && (P = this._map.mouseEventToContainerPoint(_.originalEvent), M = this._map.containerPointToLayerPoint(P), k = this._map.layerPointToLatLng(M)), this._tooltip.setLatLng(k);
        }
      });
      var bn = $t.extend({
        options: {
          // @section
          // @aka DivIcon options
          iconSize: [12, 12],
          // also can be set through CSS
          // iconAnchor: (Point),
          // popupAnchor: (Point),
          // @option html: String|HTMLElement = ''
          // Custom HTML code to put inside the div element, empty by default. Alternatively,
          // an instance of `HTMLElement`.
          html: !1,
          // @option bgPos: Point = [0, 0]
          // Optional relative position of the background, in pixels
          bgPos: null,
          className: "leaflet-div-icon"
        },
        createIcon: function(_) {
          var k = _ && _.tagName === "DIV" ? _ : document.createElement("div"), P = this.options;
          if (P.html instanceof Element ? (we(k), k.appendChild(P.html)) : k.innerHTML = P.html !== !1 ? P.html : "", P.bgPos) {
            var M = J(P.bgPos);
            k.style.backgroundPosition = -M.x + "px " + -M.y + "px";
          }
          return this._setIconStyles(k, "icon"), k;
        },
        createShadow: function() {
          return null;
        }
      });
      function $o(_) {
        return new bn(_);
      }
      $t.Default = _e;
      var pe = Mt.extend({
        // @section
        // @aka GridLayer options
        options: {
          // @option tileSize: Number|Point = 256
          // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
          tileSize: 256,
          // @option opacity: Number = 1.0
          // Opacity of the tiles. Can be used in the `createTile()` function.
          opacity: 1,
          // @option updateWhenIdle: Boolean = (depends)
          // Load new tiles only when panning ends.
          // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
          // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
          // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
          updateWhenIdle: Y.mobile,
          // @option updateWhenZooming: Boolean = true
          // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
          updateWhenZooming: !0,
          // @option updateInterval: Number = 200
          // Tiles will not update more than once every `updateInterval` milliseconds when panning.
          updateInterval: 200,
          // @option zIndex: Number = 1
          // The explicit zIndex of the tile layer.
          zIndex: 1,
          // @option bounds: LatLngBounds = undefined
          // If set, tiles will only be loaded inside the set `LatLngBounds`.
          bounds: null,
          // @option minZoom: Number = 0
          // The minimum zoom level down to which this layer will be displayed (inclusive).
          minZoom: 0,
          // @option maxZoom: Number = undefined
          // The maximum zoom level up to which this layer will be displayed (inclusive).
          maxZoom: void 0,
          // @option maxNativeZoom: Number = undefined
          // Maximum zoom number the tile source has available. If it is specified,
          // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
          // from `maxNativeZoom` level and auto-scaled.
          maxNativeZoom: void 0,
          // @option minNativeZoom: Number = undefined
          // Minimum zoom number the tile source has available. If it is specified,
          // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
          // from `minNativeZoom` level and auto-scaled.
          minNativeZoom: void 0,
          // @option noWrap: Boolean = false
          // Whether the layer is wrapped around the antimeridian. If `true`, the
          // GridLayer will only be displayed once at low zoom levels. Has no
          // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
          // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
          // tiles outside the CRS limits.
          noWrap: !1,
          // @option pane: String = 'tilePane'
          // `Map pane` where the grid layer will be added.
          pane: "tilePane",
          // @option className: String = ''
          // A custom class name to assign to the tile layer. Empty by default.
          className: "",
          // @option keepBuffer: Number = 2
          // When panning the map, keep this many rows and columns of tiles before unloading them.
          keepBuffer: 2
        },
        initialize: function(_) {
          at(this, _);
        },
        onAdd: function() {
          this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
        },
        beforeAdd: function(_) {
          _._addZoomLimit(this);
        },
        onRemove: function(_) {
          this._removeAllTiles(), ht(this._container), _._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
        },
        // @method bringToFront: this
        // Brings the tile layer to the top of all tile layers.
        bringToFront: function() {
          return this._map && (Kt(this._container), this._setAutoZIndex(Math.max)), this;
        },
        // @method bringToBack: this
        // Brings the tile layer to the bottom of all tile layers.
        bringToBack: function() {
          return this._map && (Jt(this._container), this._setAutoZIndex(Math.min)), this;
        },
        // @method getContainer: HTMLElement
        // Returns the HTML element that contains the tiles for this layer.
        getContainer: function() {
          return this._container;
        },
        // @method setOpacity(opacity: Number): this
        // Changes the [opacity](#gridlayer-opacity) of the grid layer.
        setOpacity: function(_) {
          return this.options.opacity = _, this._updateOpacity(), this;
        },
        // @method setZIndex(zIndex: Number): this
        // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
        setZIndex: function(_) {
          return this.options.zIndex = _, this._updateZIndex(), this;
        },
        // @method isLoading: Boolean
        // Returns `true` if any tile in the grid layer has not finished loading.
        isLoading: function() {
          return this._loading;
        },
        // @method redraw: this
        // Causes the layer to clear all the tiles and request them again.
        redraw: function() {
          if (this._map) {
            this._removeAllTiles();
            var _ = this._clampZoom(this._map.getZoom());
            _ !== this._tileZoom && (this._tileZoom = _, this._updateLevels()), this._update();
          }
          return this;
        },
        getEvents: function() {
          var _ = {
            viewprereset: this._invalidateAll,
            viewreset: this._resetView,
            zoom: this._resetView,
            moveend: this._onMoveEnd
          };
          return this.options.updateWhenIdle || (this._onMove || (this._onMove = W(this._onMoveEnd, this.options.updateInterval, this)), _.move = this._onMove), this._zoomAnimated && (_.zoomanim = this._animateZoom), _;
        },
        // @section Extension methods
        // Layers extending `GridLayer` shall reimplement the following method.
        // @method createTile(coords: Object, done?: Function): HTMLElement
        // Called only internally, must be overridden by classes extending `GridLayer`.
        // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
        // is specified, it must be called when the tile has finished loading and drawing.
        createTile: function() {
          return document.createElement("div");
        },
        // @section
        // @method getTileSize: Point
        // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
        getTileSize: function() {
          var _ = this.options.tileSize;
          return _ instanceof X ? _ : new X(_, _);
        },
        _updateZIndex: function() {
          this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
        },
        _setAutoZIndex: function(_) {
          for (var k = this.getPane().children, P = -_(-1 / 0, 1 / 0), M = 0, S = k.length, D; M < S; M++)
            D = k[M].style.zIndex, k[M] !== this._container && D && (P = _(P, +D));
          isFinite(P) && (this.options.zIndex = P + _(-1, 1), this._updateZIndex());
        },
        _updateOpacity: function() {
          if (this._map && !Y.ielt9) {
            xt(this._container, this.options.opacity);
            var _ = +/* @__PURE__ */ new Date(), k = !1, P = !1;
            for (var M in this._tiles) {
              var S = this._tiles[M];
              if (!(!S.current || !S.loaded)) {
                var D = Math.min(1, (_ - S.loaded) / 200);
                xt(S.el, D), D < 1 ? k = !0 : (S.active ? P = !0 : this._onOpaqueTile(S), S.active = !0);
              }
            }
            P && !this._noPrune && this._pruneTiles(), k && (bt(this._fadeFrame), this._fadeFrame = gt(this._updateOpacity, this));
          }
        },
        _onOpaqueTile: q,
        _initContainer: function() {
          this._container || (this._container = nt("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
        },
        _updateLevels: function() {
          var _ = this._tileZoom, k = this.options.maxZoom;
          if (_ !== void 0) {
            for (var P in this._levels)
              P = Number(P), this._levels[P].el.children.length || P === _ ? (this._levels[P].el.style.zIndex = k - Math.abs(_ - P), this._onUpdateLevel(P)) : (ht(this._levels[P].el), this._removeTilesAtZoom(P), this._onRemoveLevel(P), delete this._levels[P]);
            var M = this._levels[_], S = this._map;
            return M || (M = this._levels[_] = {}, M.el = nt("div", "leaflet-tile-container leaflet-zoom-animated", this._container), M.el.style.zIndex = k, M.origin = S.project(S.unproject(S.getPixelOrigin()), _).round(), M.zoom = _, this._setZoomTransform(M, S.getCenter(), S.getZoom()), q(M.el.offsetWidth), this._onCreateLevel(M)), this._level = M, M;
          }
        },
        _onUpdateLevel: q,
        _onRemoveLevel: q,
        _onCreateLevel: q,
        _pruneTiles: function() {
          if (this._map) {
            var _, k, P = this._map.getZoom();
            if (P > this.options.maxZoom || P < this.options.minZoom) {
              this._removeAllTiles();
              return;
            }
            for (_ in this._tiles)
              k = this._tiles[_], k.retain = k.current;
            for (_ in this._tiles)
              if (k = this._tiles[_], k.current && !k.active) {
                var M = k.coords;
                this._retainParent(M.x, M.y, M.z, M.z - 5) || this._retainChildren(M.x, M.y, M.z, M.z + 2);
              }
            for (_ in this._tiles)
              this._tiles[_].retain || this._removeTile(_);
          }
        },
        _removeTilesAtZoom: function(_) {
          for (var k in this._tiles)
            this._tiles[k].coords.z === _ && this._removeTile(k);
        },
        _removeAllTiles: function() {
          for (var _ in this._tiles)
            this._removeTile(_);
        },
        _invalidateAll: function() {
          for (var _ in this._levels)
            ht(this._levels[_].el), this._onRemoveLevel(Number(_)), delete this._levels[_];
          this._removeAllTiles(), this._tileZoom = void 0;
        },
        _retainParent: function(_, k, P, M) {
          var S = Math.floor(_ / 2), D = Math.floor(k / 2), A = P - 1, N = new X(+S, +D);
          N.z = +A;
          var H = this._tileCoordsToKey(N), G = this._tiles[H];
          return G && G.active ? (G.retain = !0, !0) : (G && G.loaded && (G.retain = !0), A > M ? this._retainParent(S, D, A, M) : !1);
        },
        _retainChildren: function(_, k, P, M) {
          for (var S = 2 * _; S < 2 * _ + 2; S++)
            for (var D = 2 * k; D < 2 * k + 2; D++) {
              var A = new X(S, D);
              A.z = P + 1;
              var N = this._tileCoordsToKey(A), H = this._tiles[N];
              if (H && H.active) {
                H.retain = !0;
                continue;
              } else H && H.loaded && (H.retain = !0);
              P + 1 < M && this._retainChildren(S, D, P + 1, M);
            }
        },
        _resetView: function(_) {
          var k = _ && (_.pinch || _.flyTo);
          this._setView(this._map.getCenter(), this._map.getZoom(), k, k);
        },
        _animateZoom: function(_) {
          this._setView(_.center, _.zoom, !0, _.noUpdate);
        },
        _clampZoom: function(_) {
          var k = this.options;
          return k.minNativeZoom !== void 0 && _ < k.minNativeZoom ? k.minNativeZoom : k.maxNativeZoom !== void 0 && k.maxNativeZoom < _ ? k.maxNativeZoom : _;
        },
        _setView: function(_, k, P, M) {
          var S = Math.round(k);
          this.options.maxZoom !== void 0 && S > this.options.maxZoom || this.options.minZoom !== void 0 && S < this.options.minZoom ? S = void 0 : S = this._clampZoom(S);
          var D = this.options.updateWhenZooming && S !== this._tileZoom;
          (!M || D) && (this._tileZoom = S, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), S !== void 0 && this._update(_), P || this._pruneTiles(), this._noPrune = !!P), this._setZoomTransforms(_, k);
        },
        _setZoomTransforms: function(_, k) {
          for (var P in this._levels)
            this._setZoomTransform(this._levels[P], _, k);
        },
        _setZoomTransform: function(_, k, P) {
          var M = this._map.getZoomScale(P, _.zoom), S = _.origin.multiplyBy(M).subtract(this._map._getNewPixelOrigin(k, P)).round();
          Y.any3d ? Gt(_.el, S, M) : dt(_.el, S);
        },
        _resetGrid: function() {
          var _ = this._map, k = _.options.crs, P = this._tileSize = this.getTileSize(), M = this._tileZoom, S = this._map.getPixelWorldBounds(this._tileZoom);
          S && (this._globalTileRange = this._pxBoundsToTileRange(S)), this._wrapX = k.wrapLng && !this.options.noWrap && [
            Math.floor(_.project([0, k.wrapLng[0]], M).x / P.x),
            Math.ceil(_.project([0, k.wrapLng[1]], M).x / P.y)
          ], this._wrapY = k.wrapLat && !this.options.noWrap && [
            Math.floor(_.project([k.wrapLat[0], 0], M).y / P.x),
            Math.ceil(_.project([k.wrapLat[1], 0], M).y / P.y)
          ];
        },
        _onMoveEnd: function() {
          !this._map || this._map._animatingZoom || this._update();
        },
        _getTiledPixelBounds: function(_) {
          var k = this._map, P = k._animatingZoom ? Math.max(k._animateToZoom, k.getZoom()) : k.getZoom(), M = k.getZoomScale(P, this._tileZoom), S = k.project(_, this._tileZoom).floor(), D = k.getSize().divideBy(M * 2);
          return new lt(S.subtract(D), S.add(D));
        },
        // Private method to load tiles in the grid's active zoom level according to map bounds
        _update: function(_) {
          var k = this._map;
          if (k) {
            var P = this._clampZoom(k.getZoom());
            if (_ === void 0 && (_ = k.getCenter()), this._tileZoom !== void 0) {
              var M = this._getTiledPixelBounds(_), S = this._pxBoundsToTileRange(M), D = S.getCenter(), A = [], N = this.options.keepBuffer, H = new lt(
                S.getBottomLeft().subtract([N, -N]),
                S.getTopRight().add([N, -N])
              );
              if (!(isFinite(S.min.x) && isFinite(S.min.y) && isFinite(S.max.x) && isFinite(S.max.y)))
                throw new Error("Attempted to load an infinite number of tiles");
              for (var G in this._tiles) {
                var j = this._tiles[G].coords;
                (j.z !== this._tileZoom || !H.contains(new X(j.x, j.y))) && (this._tiles[G].current = !1);
              }
              if (Math.abs(P - this._tileZoom) > 1) {
                this._setView(_, P);
                return;
              }
              for (var K = S.min.y; K <= S.max.y; K++)
                for (var tt = S.min.x; tt <= S.max.x; tt++) {
                  var mt = new X(tt, K);
                  if (mt.z = this._tileZoom, !!this._isValidTile(mt)) {
                    var _t = this._tiles[this._tileCoordsToKey(mt)];
                    _t ? _t.current = !0 : A.push(mt);
                  }
                }
              if (A.sort(function(Lt, ie) {
                return Lt.distanceTo(D) - ie.distanceTo(D);
              }), A.length !== 0) {
                this._loading || (this._loading = !0, this.fire("loading"));
                var Pt = document.createDocumentFragment();
                for (tt = 0; tt < A.length; tt++)
                  this._addTile(A[tt], Pt);
                this._level.el.appendChild(Pt);
              }
            }
          }
        },
        _isValidTile: function(_) {
          var k = this._map.options.crs;
          if (!k.infinite) {
            var P = this._globalTileRange;
            if (!k.wrapLng && (_.x < P.min.x || _.x > P.max.x) || !k.wrapLat && (_.y < P.min.y || _.y > P.max.y))
              return !1;
          }
          if (!this.options.bounds)
            return !0;
          var M = this._tileCoordsToBounds(_);
          return ct(this.options.bounds).overlaps(M);
        },
        _keyToBounds: function(_) {
          return this._tileCoordsToBounds(this._keyToTileCoords(_));
        },
        _tileCoordsToNwSe: function(_) {
          var k = this._map, P = this.getTileSize(), M = _.scaleBy(P), S = M.add(P), D = k.unproject(M, _.z), A = k.unproject(S, _.z);
          return [D, A];
        },
        // converts tile coordinates to its geographical bounds
        _tileCoordsToBounds: function(_) {
          var k = this._tileCoordsToNwSe(_), P = new yt(k[0], k[1]);
          return this.options.noWrap || (P = this._map.wrapLatLngBounds(P)), P;
        },
        // converts tile coordinates to key for the tile cache
        _tileCoordsToKey: function(_) {
          return _.x + ":" + _.y + ":" + _.z;
        },
        // converts tile cache key to coordinates
        _keyToTileCoords: function(_) {
          var k = _.split(":"), P = new X(+k[0], +k[1]);
          return P.z = +k[2], P;
        },
        _removeTile: function(_) {
          var k = this._tiles[_];
          k && (ht(k.el), delete this._tiles[_], this.fire("tileunload", {
            tile: k.el,
            coords: this._keyToTileCoords(_)
          }));
        },
        _initTile: function(_) {
          Q(_, "leaflet-tile");
          var k = this.getTileSize();
          _.style.width = k.x + "px", _.style.height = k.y + "px", _.onselectstart = q, _.onmousemove = q, Y.ielt9 && this.options.opacity < 1 && xt(_, this.options.opacity);
        },
        _addTile: function(_, k) {
          var P = this._getTilePos(_), M = this._tileCoordsToKey(_), S = this.createTile(this._wrapCoords(_), O(this._tileReady, this, _));
          this._initTile(S), this.createTile.length < 2 && gt(O(this._tileReady, this, _, null, S)), dt(S, P), this._tiles[M] = {
            el: S,
            coords: _,
            current: !0
          }, k.appendChild(S), this.fire("tileloadstart", {
            tile: S,
            coords: _
          });
        },
        _tileReady: function(_, k, P) {
          k && this.fire("tileerror", {
            error: k,
            tile: P,
            coords: _
          });
          var M = this._tileCoordsToKey(_);
          P = this._tiles[M], P && (P.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (xt(P.el, 0), bt(this._fadeFrame), this._fadeFrame = gt(this._updateOpacity, this)) : (P.active = !0, this._pruneTiles()), k || (Q(P.el, "leaflet-tile-loaded"), this.fire("tileload", {
            tile: P.el,
            coords: _
          })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), Y.ielt9 || !this._map._fadeAnimated ? gt(this._pruneTiles, this) : setTimeout(O(this._pruneTiles, this), 250)));
        },
        _getTilePos: function(_) {
          return _.scaleBy(this.getTileSize()).subtract(this._level.origin);
        },
        _wrapCoords: function(_) {
          var k = new X(
            this._wrapX ? V(_.x, this._wrapX) : _.x,
            this._wrapY ? V(_.y, this._wrapY) : _.y
          );
          return k.z = _.z, k;
        },
        _pxBoundsToTileRange: function(_) {
          var k = this.getTileSize();
          return new lt(
            _.min.unscaleBy(k).floor(),
            _.max.unscaleBy(k).ceil().subtract([1, 1])
          );
        },
        _noTilesToLoad: function() {
          for (var _ in this._tiles)
            if (!this._tiles[_].loaded)
              return !1;
          return !0;
        }
      });
      function Qo(_) {
        return new pe(_);
      }
      var ee = pe.extend({
        // @section
        // @aka TileLayer options
        options: {
          // @option minZoom: Number = 0
          // The minimum zoom level down to which this layer will be displayed (inclusive).
          minZoom: 0,
          // @option maxZoom: Number = 18
          // The maximum zoom level up to which this layer will be displayed (inclusive).
          maxZoom: 18,
          // @option subdomains: String|String[] = 'abc'
          // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
          subdomains: "abc",
          // @option errorTileUrl: String = ''
          // URL to the tile image to show in place of the tile that failed to load.
          errorTileUrl: "",
          // @option zoomOffset: Number = 0
          // The zoom number used in tile URLs will be offset with this value.
          zoomOffset: 0,
          // @option tms: Boolean = false
          // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
          tms: !1,
          // @option zoomReverse: Boolean = false
          // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
          zoomReverse: !1,
          // @option detectRetina: Boolean = false
          // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
          detectRetina: !1,
          // @option crossOrigin: Boolean|String = false
          // Whether the crossOrigin attribute will be added to the tiles.
          // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
          // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
          crossOrigin: !1,
          // @option referrerPolicy: Boolean|String = false
          // Whether the referrerPolicy attribute will be added to the tiles.
          // If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
          // This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
          // (e.g. to validate an API token).
          // Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
          referrerPolicy: !1
        },
        initialize: function(_, k) {
          this._url = _, k = at(this, k), k.detectRetina && Y.retina && k.maxZoom > 0 ? (k.tileSize = Math.floor(k.tileSize / 2), k.zoomReverse ? (k.zoomOffset--, k.minZoom = Math.min(k.maxZoom, k.minZoom + 1)) : (k.zoomOffset++, k.maxZoom = Math.max(k.minZoom, k.maxZoom - 1)), k.minZoom = Math.max(0, k.minZoom)) : k.zoomReverse ? k.minZoom = Math.min(k.maxZoom, k.minZoom) : k.maxZoom = Math.max(k.minZoom, k.maxZoom), typeof k.subdomains == "string" && (k.subdomains = k.subdomains.split("")), this.on("tileunload", this._onTileRemove);
        },
        // @method setUrl(url: String, noRedraw?: Boolean): this
        // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
        // If the URL does not change, the layer will not be redrawn unless
        // the noRedraw parameter is set to false.
        setUrl: function(_, k) {
          return this._url === _ && k === void 0 && (k = !0), this._url = _, k || this.redraw(), this;
        },
        // @method createTile(coords: Object, done?: Function): HTMLElement
        // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
        // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
        // callback is called when the tile has been loaded.
        createTile: function(_, k) {
          var P = document.createElement("img");
          return $(P, "load", O(this._tileOnLoad, this, k, P)), $(P, "error", O(this._tileOnError, this, k, P)), (this.options.crossOrigin || this.options.crossOrigin === "") && (P.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (P.referrerPolicy = this.options.referrerPolicy), P.alt = "", P.src = this.getTileUrl(_), P;
        },
        // @section Extension methods
        // @uninheritable
        // Layers extending `TileLayer` might reimplement the following method.
        // @method getTileUrl(coords: Object): String
        // Called only internally, returns the URL for a tile given its coordinates.
        // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
        getTileUrl: function(_) {
          var k = {
            r: Y.retina ? "@2x" : "",
            s: this._getSubdomain(_),
            x: _.x,
            y: _.y,
            z: this._getZoomForUrl()
          };
          if (this._map && !this._map.options.crs.infinite) {
            var P = this._globalTileRange.max.y - _.y;
            this.options.tms && (k.y = P), k["-y"] = P;
          }
          return xi(this._url, T(k, this.options));
        },
        _tileOnLoad: function(_, k) {
          Y.ielt9 ? setTimeout(O(_, this, null, k), 0) : _(null, k);
        },
        _tileOnError: function(_, k, P) {
          var M = this.options.errorTileUrl;
          M && k.getAttribute("src") !== M && (k.src = M), _(P, k);
        },
        _onTileRemove: function(_) {
          _.tile.onload = null;
        },
        _getZoomForUrl: function() {
          var _ = this._tileZoom, k = this.options.maxZoom, P = this.options.zoomReverse, M = this.options.zoomOffset;
          return P && (_ = k - _), _ + M;
        },
        _getSubdomain: function(_) {
          var k = Math.abs(_.x + _.y) % this.options.subdomains.length;
          return this.options.subdomains[k];
        },
        // stops loading all tiles in the background layer
        _abortLoading: function() {
          var _, k;
          for (_ in this._tiles)
            if (this._tiles[_].coords.z !== this._tileZoom && (k = this._tiles[_].el, k.onload = q, k.onerror = q, !k.complete)) {
              k.src = ve;
              var P = this._tiles[_].coords;
              ht(k), delete this._tiles[_], this.fire("tileabort", {
                tile: k,
                coords: P
              });
            }
        },
        _removeTile: function(_) {
          var k = this._tiles[_];
          if (k)
            return k.el.setAttribute("src", ve), pe.prototype._removeTile.call(this, _);
        },
        _tileReady: function(_, k, P) {
          if (!(!this._map || P && P.getAttribute("src") === ve))
            return pe.prototype._tileReady.call(this, _, k, P);
        }
      });
      function xn(_, k) {
        return new ee(_, k);
      }
      var kn = ee.extend({
        // @section
        // @aka TileLayer.WMS options
        // If any custom options not documented here are used, they will be sent to the
        // WMS server as extra parameters in each request URL. This can be useful for
        // [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
        defaultWmsParams: {
          service: "WMS",
          request: "GetMap",
          // @option layers: String = ''
          // **(required)** Comma-separated list of WMS layers to show.
          layers: "",
          // @option styles: String = ''
          // Comma-separated list of WMS styles.
          styles: "",
          // @option format: String = 'image/jpeg'
          // WMS image format (use `'image/png'` for layers with transparency).
          format: "image/jpeg",
          // @option transparent: Boolean = false
          // If `true`, the WMS service will return images with transparency.
          transparent: !1,
          // @option version: String = '1.1.1'
          // Version of the WMS service to use
          version: "1.1.1"
        },
        options: {
          // @option crs: CRS = null
          // Coordinate Reference System to use for the WMS requests, defaults to
          // map CRS. Don't change this if you're not sure what it means.
          crs: null,
          // @option uppercase: Boolean = false
          // If `true`, WMS request parameter keys will be uppercase.
          uppercase: !1
        },
        initialize: function(_, k) {
          this._url = _;
          var P = T({}, this.defaultWmsParams);
          for (var M in k)
            M in this.options || (P[M] = k[M]);
          k = at(this, k);
          var S = k.detectRetina && Y.retina ? 2 : 1, D = this.getTileSize();
          P.width = D.x * S, P.height = D.y * S, this.wmsParams = P;
        },
        onAdd: function(_) {
          this._crs = this.options.crs || _.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
          var k = this._wmsVersion >= 1.3 ? "crs" : "srs";
          this.wmsParams[k] = this._crs.code, ee.prototype.onAdd.call(this, _);
        },
        getTileUrl: function(_) {
          var k = this._tileCoordsToNwSe(_), P = this._crs, M = vt(P.project(k[0]), P.project(k[1])), S = M.min, D = M.max, A = (this._wmsVersion >= 1.3 && this._crs === mn ? [S.y, S.x, D.y, D.x] : [S.x, S.y, D.x, D.y]).join(","), N = ee.prototype.getTileUrl.call(this, _);
          return N + bi(this.wmsParams, N, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + A;
        },
        // @method setParams(params: Object, noRedraw?: Boolean): this
        // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
        setParams: function(_, k) {
          return T(this.wmsParams, _), k || this.redraw(), this;
        }
      });
      function ts(_, k) {
        return new kn(_, k);
      }
      ee.WMS = kn, xn.wms = ts;
      var Rt = Mt.extend({
        // @section
        // @aka Renderer options
        options: {
          // @option padding: Number = 0.1
          // How much to extend the clip area around the map view (relative to its size)
          // e.g. 0.1 would be 10% of map view in each direction
          padding: 0.1
        },
        initialize: function(_) {
          at(this, _), U(this), this._layers = this._layers || {};
        },
        onAdd: function() {
          this._container || (this._initContainer(), Q(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
        },
        onRemove: function() {
          this.off("update", this._updatePaths, this), this._destroyContainer();
        },
        getEvents: function() {
          var _ = {
            viewreset: this._reset,
            zoom: this._onZoom,
            moveend: this._update,
            zoomend: this._onZoomEnd
          };
          return this._zoomAnimated && (_.zoomanim = this._onAnimZoom), _;
        },
        _onAnimZoom: function(_) {
          this._updateTransform(_.center, _.zoom);
        },
        _onZoom: function() {
          this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function(_, k) {
          var P = this._map.getZoomScale(k, this._zoom), M = this._map.getSize().multiplyBy(0.5 + this.options.padding), S = this._map.project(this._center, k), D = M.multiplyBy(-P).add(S).subtract(this._map._getNewPixelOrigin(_, k));
          Y.any3d ? Gt(this._container, D, P) : dt(this._container, D);
        },
        _reset: function() {
          this._update(), this._updateTransform(this._center, this._zoom);
          for (var _ in this._layers)
            this._layers[_]._reset();
        },
        _onZoomEnd: function() {
          for (var _ in this._layers)
            this._layers[_]._project();
        },
        _updatePaths: function() {
          for (var _ in this._layers)
            this._layers[_]._update();
        },
        _update: function() {
          var _ = this.options.padding, k = this._map.getSize(), P = this._map.containerPointToLayerPoint(k.multiplyBy(-_)).round();
          this._bounds = new lt(P, P.add(k.multiplyBy(1 + _ * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
        }
      }), Pn = Rt.extend({
        // @section
        // @aka Canvas options
        options: {
          // @option tolerance: Number = 0
          // How much to extend the click tolerance around a path/object on the map.
          tolerance: 0
        },
        getEvents: function() {
          var _ = Rt.prototype.getEvents.call(this);
          return _.viewprereset = this._onViewPreReset, _;
        },
        _onViewPreReset: function() {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function() {
          Rt.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function() {
          var _ = this._container = document.createElement("canvas");
          $(_, "mousemove", this._onMouseMove, this), $(_, "click dblclick mousedown mouseup contextmenu", this._onClick, this), $(_, "mouseout", this._handleMouseOut, this), _._leaflet_disable_events = !0, this._ctx = _.getContext("2d");
        },
        _destroyContainer: function() {
          bt(this._redrawRequest), delete this._ctx, ht(this._container), rt(this._container), delete this._container;
        },
        _updatePaths: function() {
          if (!this._postponeUpdatePaths) {
            var _;
            this._redrawBounds = null;
            for (var k in this._layers)
              _ = this._layers[k], _._update();
            this._redraw();
          }
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            Rt.prototype._update.call(this);
            var _ = this._bounds, k = this._container, P = _.getSize(), M = Y.retina ? 2 : 1;
            dt(k, _.min), k.width = M * P.x, k.height = M * P.y, k.style.width = P.x + "px", k.style.height = P.y + "px", Y.retina && this._ctx.scale(2, 2), this._ctx.translate(-_.min.x, -_.min.y), this.fire("update");
          }
        },
        _reset: function() {
          Rt.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
        },
        _initPath: function(_) {
          this._updateDashArray(_), this._layers[U(_)] = _;
          var k = _._order = {
            layer: _,
            prev: this._drawLast,
            next: null
          };
          this._drawLast && (this._drawLast.next = k), this._drawLast = k, this._drawFirst = this._drawFirst || this._drawLast;
        },
        _addPath: function(_) {
          this._requestRedraw(_);
        },
        _removePath: function(_) {
          var k = _._order, P = k.next, M = k.prev;
          P ? P.prev = M : this._drawLast = M, M ? M.next = P : this._drawFirst = P, delete _._order, delete this._layers[U(_)], this._requestRedraw(_);
        },
        _updatePath: function(_) {
          this._extendRedrawBounds(_), _._project(), _._update(), this._requestRedraw(_);
        },
        _updateStyle: function(_) {
          this._updateDashArray(_), this._requestRedraw(_);
        },
        _updateDashArray: function(_) {
          if (typeof _.options.dashArray == "string") {
            var k = _.options.dashArray.split(/[, ]+/), P = [], M, S;
            for (S = 0; S < k.length; S++) {
              if (M = Number(k[S]), isNaN(M))
                return;
              P.push(M);
            }
            _.options._dashArray = P;
          } else
            _.options._dashArray = _.options.dashArray;
        },
        _requestRedraw: function(_) {
          this._map && (this._extendRedrawBounds(_), this._redrawRequest = this._redrawRequest || gt(this._redraw, this));
        },
        _extendRedrawBounds: function(_) {
          if (_._pxBounds) {
            var k = (_.options.weight || 0) + 1;
            this._redrawBounds = this._redrawBounds || new lt(), this._redrawBounds.extend(_._pxBounds.min.subtract([k, k])), this._redrawBounds.extend(_._pxBounds.max.add([k, k]));
          }
        },
        _redraw: function() {
          this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
        },
        _clear: function() {
          var _ = this._redrawBounds;
          if (_) {
            var k = _.getSize();
            this._ctx.clearRect(_.min.x, _.min.y, k.x, k.y);
          } else
            this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
        },
        _draw: function() {
          var _, k = this._redrawBounds;
          if (this._ctx.save(), k) {
            var P = k.getSize();
            this._ctx.beginPath(), this._ctx.rect(k.min.x, k.min.y, P.x, P.y), this._ctx.clip();
          }
          this._drawing = !0;
          for (var M = this._drawFirst; M; M = M.next)
            _ = M.layer, (!k || _._pxBounds && _._pxBounds.intersects(k)) && _._updatePath();
          this._drawing = !1, this._ctx.restore();
        },
        _updatePoly: function(_, k) {
          if (this._drawing) {
            var P, M, S, D, A = _._parts, N = A.length, H = this._ctx;
            if (N) {
              for (H.beginPath(), P = 0; P < N; P++) {
                for (M = 0, S = A[P].length; M < S; M++)
                  D = A[P][M], H[M ? "lineTo" : "moveTo"](D.x, D.y);
                k && H.closePath();
              }
              this._fillStroke(H, _);
            }
          }
        },
        _updateCircle: function(_) {
          if (!(!this._drawing || _._empty())) {
            var k = _._point, P = this._ctx, M = Math.max(Math.round(_._radius), 1), S = (Math.max(Math.round(_._radiusY), 1) || M) / M;
            S !== 1 && (P.save(), P.scale(1, S)), P.beginPath(), P.arc(k.x, k.y / S, M, 0, Math.PI * 2, !1), S !== 1 && P.restore(), this._fillStroke(P, _);
          }
        },
        _fillStroke: function(_, k) {
          var P = k.options;
          P.fill && (_.globalAlpha = P.fillOpacity, _.fillStyle = P.fillColor || P.color, _.fill(P.fillRule || "evenodd")), P.stroke && P.weight !== 0 && (_.setLineDash && _.setLineDash(k.options && k.options._dashArray || []), _.globalAlpha = P.opacity, _.lineWidth = P.weight, _.strokeStyle = P.color, _.lineCap = P.lineCap, _.lineJoin = P.lineJoin, _.stroke());
        },
        // Canvas obviously doesn't have mouse events for individual drawn objects,
        // so we emulate that by calculating what's under the mouse on mousemove/click manually
        _onClick: function(_) {
          for (var k = this._map.mouseEventToLayerPoint(_), P, M, S = this._drawFirst; S; S = S.next)
            P = S.layer, P.options.interactive && P._containsPoint(k) && (!(_.type === "click" || _.type === "preclick") || !this._map._draggableMoved(P)) && (M = P);
          this._fireEvent(M ? [M] : !1, _);
        },
        _onMouseMove: function(_) {
          if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
            var k = this._map.mouseEventToLayerPoint(_);
            this._handleMouseHover(_, k);
          }
        },
        _handleMouseOut: function(_) {
          var k = this._hoveredLayer;
          k && (ut(this._container, "leaflet-interactive"), this._fireEvent([k], _, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
        },
        _handleMouseHover: function(_, k) {
          if (!this._mouseHoverThrottled) {
            for (var P, M, S = this._drawFirst; S; S = S.next)
              P = S.layer, P.options.interactive && P._containsPoint(k) && (M = P);
            M !== this._hoveredLayer && (this._handleMouseOut(_), M && (Q(this._container, "leaflet-interactive"), this._fireEvent([M], _, "mouseover"), this._hoveredLayer = M)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, _), this._mouseHoverThrottled = !0, setTimeout(O(function() {
              this._mouseHoverThrottled = !1;
            }, this), 32);
          }
        },
        _fireEvent: function(_, k, P) {
          this._map._fireDOMEvent(k, P || k.type, _);
        },
        _bringToFront: function(_) {
          var k = _._order;
          if (k) {
            var P = k.next, M = k.prev;
            if (P)
              P.prev = M;
            else
              return;
            M ? M.next = P : P && (this._drawFirst = P), k.prev = this._drawLast, this._drawLast.next = k, k.next = null, this._drawLast = k, this._requestRedraw(_);
          }
        },
        _bringToBack: function(_) {
          var k = _._order;
          if (k) {
            var P = k.next, M = k.prev;
            if (M)
              M.next = P;
            else
              return;
            P ? P.prev = M : M && (this._drawLast = M), k.prev = null, k.next = this._drawFirst, this._drawFirst.prev = k, this._drawFirst = k, this._requestRedraw(_);
          }
        }
      });
      function Tn(_) {
        return Y.canvas ? new Pn(_) : null;
      }
      var me = (function() {
        try {
          return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(_) {
            return document.createElement("<lvml:" + _ + ' class="lvml">');
          };
        } catch {
        }
        return function(_) {
          return document.createElement("<" + _ + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      })(), es = {
        _initContainer: function() {
          this._container = nt("div", "leaflet-vml-container");
        },
        _update: function() {
          this._map._animatingZoom || (Rt.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function(_) {
          var k = _._container = me("shape");
          Q(k, "leaflet-vml-shape " + (this.options.className || "")), k.coordsize = "1 1", _._path = me("path"), k.appendChild(_._path), this._updateStyle(_), this._layers[U(_)] = _;
        },
        _addPath: function(_) {
          var k = _._container;
          this._container.appendChild(k), _.options.interactive && _.addInteractiveTarget(k);
        },
        _removePath: function(_) {
          var k = _._container;
          ht(k), _.removeInteractiveTarget(k), delete this._layers[U(_)];
        },
        _updateStyle: function(_) {
          var k = _._stroke, P = _._fill, M = _.options, S = _._container;
          S.stroked = !!M.stroke, S.filled = !!M.fill, M.stroke ? (k || (k = _._stroke = me("stroke")), S.appendChild(k), k.weight = M.weight + "px", k.color = M.color, k.opacity = M.opacity, M.dashArray ? k.dashStyle = Tt(M.dashArray) ? M.dashArray.join(" ") : M.dashArray.replace(/( *, *)/g, " ") : k.dashStyle = "", k.endcap = M.lineCap.replace("butt", "flat"), k.joinstyle = M.lineJoin) : k && (S.removeChild(k), _._stroke = null), M.fill ? (P || (P = _._fill = me("fill")), S.appendChild(P), P.color = M.fillColor || M.color, P.opacity = M.fillOpacity) : P && (S.removeChild(P), _._fill = null);
        },
        _updateCircle: function(_) {
          var k = _._point.round(), P = Math.round(_._radius), M = Math.round(_._radiusY || P);
          this._setPath(_, _._empty() ? "M0 0" : "AL " + k.x + "," + k.y + " " + P + "," + M + " 0," + 65535 * 360);
        },
        _setPath: function(_, k) {
          _._path.v = k;
        },
        _bringToFront: function(_) {
          Kt(_._container);
        },
        _bringToBack: function(_) {
          Jt(_._container);
        }
      }, Ze = Y.vml ? me : Ci, ge = Rt.extend({
        _initContainer: function() {
          this._container = Ze("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Ze("g"), this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function() {
          ht(this._container), rt(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            Rt.prototype._update.call(this);
            var _ = this._bounds, k = _.getSize(), P = this._container;
            (!this._svgSize || !this._svgSize.equals(k)) && (this._svgSize = k, P.setAttribute("width", k.x), P.setAttribute("height", k.y)), dt(P, _.min), P.setAttribute("viewBox", [_.min.x, _.min.y, k.x, k.y].join(" ")), this.fire("update");
          }
        },
        // methods below are called by vector layers implementations
        _initPath: function(_) {
          var k = _._path = Ze("path");
          _.options.className && Q(k, _.options.className), _.options.interactive && Q(k, "leaflet-interactive"), this._updateStyle(_), this._layers[U(_)] = _;
        },
        _addPath: function(_) {
          this._rootGroup || this._initContainer(), this._rootGroup.appendChild(_._path), _.addInteractiveTarget(_._path);
        },
        _removePath: function(_) {
          ht(_._path), _.removeInteractiveTarget(_._path), delete this._layers[U(_)];
        },
        _updatePath: function(_) {
          _._project(), _._update();
        },
        _updateStyle: function(_) {
          var k = _._path, P = _.options;
          k && (P.stroke ? (k.setAttribute("stroke", P.color), k.setAttribute("stroke-opacity", P.opacity), k.setAttribute("stroke-width", P.weight), k.setAttribute("stroke-linecap", P.lineCap), k.setAttribute("stroke-linejoin", P.lineJoin), P.dashArray ? k.setAttribute("stroke-dasharray", P.dashArray) : k.removeAttribute("stroke-dasharray"), P.dashOffset ? k.setAttribute("stroke-dashoffset", P.dashOffset) : k.removeAttribute("stroke-dashoffset")) : k.setAttribute("stroke", "none"), P.fill ? (k.setAttribute("fill", P.fillColor || P.color), k.setAttribute("fill-opacity", P.fillOpacity), k.setAttribute("fill-rule", P.fillRule || "evenodd")) : k.setAttribute("fill", "none"));
        },
        _updatePoly: function(_, k) {
          this._setPath(_, Si(_._parts, k));
        },
        _updateCircle: function(_) {
          var k = _._point, P = Math.max(Math.round(_._radius), 1), M = Math.max(Math.round(_._radiusY), 1) || P, S = "a" + P + "," + M + " 0 1,0 ", D = _._empty() ? "M0 0" : "M" + (k.x - P) + "," + k.y + S + P * 2 + ",0 " + S + -P * 2 + ",0 ";
          this._setPath(_, D);
        },
        _setPath: function(_, k) {
          _._path.setAttribute("d", k);
        },
        // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
        _bringToFront: function(_) {
          Kt(_._path);
        },
        _bringToBack: function(_) {
          Jt(_._path);
        }
      });
      Y.vml && ge.include(es);
      function En(_) {
        return Y.svg || Y.vml ? new ge(_) : null;
      }
      it.include({
        // @namespace Map; @method getRenderer(layer: Path): Renderer
        // Returns the instance of `Renderer` that should be used to render the given
        // `Path`. It will ensure that the `renderer` options of the map and paths
        // are respected, and that the renderers do exist on the map.
        getRenderer: function(_) {
          var k = _.options.renderer || this._getPaneRenderer(_.options.pane) || this.options.renderer || this._renderer;
          return k || (k = this._renderer = this._createRenderer()), this.hasLayer(k) || this.addLayer(k), k;
        },
        _getPaneRenderer: function(_) {
          if (_ === "overlayPane" || _ === void 0)
            return !1;
          var k = this._paneRenderers[_];
          return k === void 0 && (k = this._createRenderer({ pane: _ }), this._paneRenderers[_] = k), k;
        },
        _createRenderer: function(_) {
          return this.options.preferCanvas && Tn(_) || En(_);
        }
      });
      var Mn = Qt.extend({
        initialize: function(_, k) {
          Qt.prototype.initialize.call(this, this._boundsToLatLngs(_), k);
        },
        // @method setBounds(latLngBounds: LatLngBounds): this
        // Redraws the rectangle with the passed bounds.
        setBounds: function(_) {
          return this.setLatLngs(this._boundsToLatLngs(_));
        },
        _boundsToLatLngs: function(_) {
          return _ = ct(_), [
            _.getSouthWest(),
            _.getNorthWest(),
            _.getNorthEast(),
            _.getSouthEast()
          ];
        }
      });
      function is(_, k) {
        return new Mn(_, k);
      }
      ge.create = Ze, ge.pointsToPath = Si, Bt.geometryToLayer = Ce, Bt.coordsToLatLng = vi, Bt.coordsToLatLngs = Se, Bt.latLngToCoords = yi, Bt.latLngsToCoords = De, Bt.getFeature = te, Bt.asFeature = Oe, it.mergeOptions({
        // @option boxZoom: Boolean = true
        // Whether the map can be zoomed to a rectangular area specified by
        // dragging the mouse while pressing the shift key.
        boxZoom: !0
      });
      var Cn = Dt.extend({
        initialize: function(_) {
          this._map = _, this._container = _._container, this._pane = _._panes.overlayPane, this._resetStateTimeout = 0, _.on("unload", this._destroy, this);
        },
        addHooks: function() {
          $(this._container, "mousedown", this._onMouseDown, this);
        },
        removeHooks: function() {
          rt(this._container, "mousedown", this._onMouseDown, this);
        },
        moved: function() {
          return this._moved;
        },
        _destroy: function() {
          ht(this._pane), delete this._pane;
        },
        _resetState: function() {
          this._resetStateTimeout = 0, this._moved = !1;
        },
        _clearDeferredResetState: function() {
          this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
        },
        _onMouseDown: function(_) {
          if (!_.shiftKey || _.which !== 1 && _.button !== 1)
            return !1;
          this._clearDeferredResetState(), this._resetState(), le(), ei(), this._startPoint = this._map.mouseEventToContainerPoint(_), $(document, {
            contextmenu: jt,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseMove: function(_) {
          this._moved || (this._moved = !0, this._box = nt("div", "leaflet-zoom-box", this._container), Q(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(_);
          var k = new lt(this._point, this._startPoint), P = k.getSize();
          dt(this._box, k.min), this._box.style.width = P.x + "px", this._box.style.height = P.y + "px";
        },
        _finish: function() {
          this._moved && (ht(this._box), ut(this._container, "leaflet-crosshair")), he(), ii(), rt(document, {
            contextmenu: jt,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseUp: function(_) {
          if (!(_.which !== 1 && _.button !== 1) && (this._finish(), !!this._moved)) {
            this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(O(this._resetState, this), 0);
            var k = new yt(
              this._map.containerPointToLatLng(this._startPoint),
              this._map.containerPointToLatLng(this._point)
            );
            this._map.fitBounds(k).fire("boxzoomend", { boxZoomBounds: k });
          }
        },
        _onKeyDown: function(_) {
          _.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
        }
      });
      it.addInitHook("addHandler", "boxZoom", Cn), it.mergeOptions({
        // @option doubleClickZoom: Boolean|String = true
        // Whether the map can be zoomed in by double clicking on it and
        // zoomed out by double clicking while holding shift. If passed
        // `'center'`, double-click zoom will zoom to the center of the
        //  view regardless of where the mouse was.
        doubleClickZoom: !0
      });
      var Sn = Dt.extend({
        addHooks: function() {
          this._map.on("dblclick", this._onDoubleClick, this);
        },
        removeHooks: function() {
          this._map.off("dblclick", this._onDoubleClick, this);
        },
        _onDoubleClick: function(_) {
          var k = this._map, P = k.getZoom(), M = k.options.zoomDelta, S = _.originalEvent.shiftKey ? P - M : P + M;
          k.options.doubleClickZoom === "center" ? k.setZoom(S) : k.setZoomAround(_.containerPoint, S);
        }
      });
      it.addInitHook("addHandler", "doubleClickZoom", Sn), it.mergeOptions({
        // @option dragging: Boolean = true
        // Whether the map is draggable with mouse/touch or not.
        dragging: !0,
        // @section Panning Inertia Options
        // @option inertia: Boolean = *
        // If enabled, panning of the map will have an inertia effect where
        // the map builds momentum while dragging and continues moving in
        // the same direction for some time. Feels especially nice on touch
        // devices. Enabled by default.
        inertia: !0,
        // @option inertiaDeceleration: Number = 3000
        // The rate with which the inertial movement slows down, in pixels/second².
        inertiaDeceleration: 3400,
        // px/s^2
        // @option inertiaMaxSpeed: Number = Infinity
        // Max speed of the inertial movement, in pixels/second.
        inertiaMaxSpeed: 1 / 0,
        // px/s
        // @option easeLinearity: Number = 0.2
        easeLinearity: 0.2,
        // TODO refactor, move to CRS
        // @option worldCopyJump: Boolean = false
        // With this option enabled, the map tracks when you pan to another "copy"
        // of the world and seamlessly jumps to the original one so that all overlays
        // like markers and vector layers are still visible.
        worldCopyJump: !1,
        // @option maxBoundsViscosity: Number = 0.0
        // If `maxBounds` is set, this option will control how solid the bounds
        // are when dragging the map around. The default value of `0.0` allows the
        // user to drag outside the bounds at normal speed, higher values will
        // slow down map dragging outside bounds, and `1.0` makes the bounds fully
        // solid, preventing the user from dragging outside the bounds.
        maxBoundsViscosity: 0
      });
      var Dn = Dt.extend({
        addHooks: function() {
          if (!this._draggable) {
            var _ = this._map;
            this._draggable = new Ft(_._mapPane, _._container), this._draggable.on({
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this), this._draggable.on("predrag", this._onPreDragLimit, this), _.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), _.on("zoomend", this._onZoomEnd, this), _.whenReady(this._onZoomEnd, this));
          }
          Q(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
        },
        removeHooks: function() {
          ut(this._map._container, "leaflet-grab"), ut(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
        },
        moved: function() {
          return this._draggable && this._draggable._moved;
        },
        moving: function() {
          return this._draggable && this._draggable._moving;
        },
        _onDragStart: function() {
          var _ = this._map;
          if (_._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
            var k = ct(this._map.options.maxBounds);
            this._offsetLimit = vt(
              this._map.latLngToContainerPoint(k.getNorthWest()).multiplyBy(-1),
              this._map.latLngToContainerPoint(k.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
            ), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
          } else
            this._offsetLimit = null;
          _.fire("movestart").fire("dragstart"), _.options.inertia && (this._positions = [], this._times = []);
        },
        _onDrag: function(_) {
          if (this._map.options.inertia) {
            var k = this._lastTime = +/* @__PURE__ */ new Date(), P = this._lastPos = this._draggable._absPos || this._draggable._newPos;
            this._positions.push(P), this._times.push(k), this._prunePositions(k);
          }
          this._map.fire("move", _).fire("drag", _);
        },
        _prunePositions: function(_) {
          for (; this._positions.length > 1 && _ - this._times[0] > 50; )
            this._positions.shift(), this._times.shift();
        },
        _onZoomEnd: function() {
          var _ = this._map.getSize().divideBy(2), k = this._map.latLngToLayerPoint([0, 0]);
          this._initialWorldOffset = k.subtract(_).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
        },
        _viscousLimit: function(_, k) {
          return _ - (_ - k) * this._viscosity;
        },
        _onPreDragLimit: function() {
          if (!(!this._viscosity || !this._offsetLimit)) {
            var _ = this._draggable._newPos.subtract(this._draggable._startPos), k = this._offsetLimit;
            _.x < k.min.x && (_.x = this._viscousLimit(_.x, k.min.x)), _.y < k.min.y && (_.y = this._viscousLimit(_.y, k.min.y)), _.x > k.max.x && (_.x = this._viscousLimit(_.x, k.max.x)), _.y > k.max.y && (_.y = this._viscousLimit(_.y, k.max.y)), this._draggable._newPos = this._draggable._startPos.add(_);
          }
        },
        _onPreDragWrap: function() {
          var _ = this._worldWidth, k = Math.round(_ / 2), P = this._initialWorldOffset, M = this._draggable._newPos.x, S = (M - k + P) % _ + k - P, D = (M + k + P) % _ - k - P, A = Math.abs(S + P) < Math.abs(D + P) ? S : D;
          this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = A;
        },
        _onDragEnd: function(_) {
          var k = this._map, P = k.options, M = !P.inertia || _.noInertia || this._times.length < 2;
          if (k.fire("dragend", _), M)
            k.fire("moveend");
          else {
            this._prunePositions(+/* @__PURE__ */ new Date());
            var S = this._lastPos.subtract(this._positions[0]), D = (this._lastTime - this._times[0]) / 1e3, A = P.easeLinearity, N = S.multiplyBy(A / D), H = N.distanceTo([0, 0]), G = Math.min(P.inertiaMaxSpeed, H), j = N.multiplyBy(G / H), K = G / (P.inertiaDeceleration * A), tt = j.multiplyBy(-K / 2).round();
            !tt.x && !tt.y ? k.fire("moveend") : (tt = k._limitOffset(tt, k.options.maxBounds), gt(function() {
              k.panBy(tt, {
                duration: K,
                easeLinearity: A,
                noMoveStart: !0,
                animate: !0
              });
            }));
          }
        }
      });
      it.addInitHook("addHandler", "dragging", Dn), it.mergeOptions({
        // @option keyboard: Boolean = true
        // Makes the map focusable and allows users to navigate the map with keyboard
        // arrows and `+`/`-` keys.
        keyboard: !0,
        // @option keyboardPanDelta: Number = 80
        // Amount of pixels to pan when pressing an arrow key.
        keyboardPanDelta: 80
      });
      var On = Dt.extend({
        keyCodes: {
          left: [37],
          right: [39],
          down: [40],
          up: [38],
          zoomIn: [187, 107, 61, 171],
          zoomOut: [189, 109, 54, 173]
        },
        initialize: function(_) {
          this._map = _, this._setPanDelta(_.options.keyboardPanDelta), this._setZoomDelta(_.options.zoomDelta);
        },
        addHooks: function() {
          var _ = this._map._container;
          _.tabIndex <= 0 && (_.tabIndex = "0"), $(_, {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          }, this), this._map.on({
            focus: this._addHooks,
            blur: this._removeHooks
          }, this);
        },
        removeHooks: function() {
          this._removeHooks(), rt(this._map._container, {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          }, this), this._map.off({
            focus: this._addHooks,
            blur: this._removeHooks
          }, this);
        },
        _onMouseDown: function() {
          if (!this._focused) {
            var _ = document.body, k = document.documentElement, P = _.scrollTop || k.scrollTop, M = _.scrollLeft || k.scrollLeft;
            this._map._container.focus(), window.scrollTo(M, P);
          }
        },
        _onFocus: function() {
          this._focused = !0, this._map.fire("focus");
        },
        _onBlur: function() {
          this._focused = !1, this._map.fire("blur");
        },
        _setPanDelta: function(_) {
          var k = this._panKeys = {}, P = this.keyCodes, M, S;
          for (M = 0, S = P.left.length; M < S; M++)
            k[P.left[M]] = [-1 * _, 0];
          for (M = 0, S = P.right.length; M < S; M++)
            k[P.right[M]] = [_, 0];
          for (M = 0, S = P.down.length; M < S; M++)
            k[P.down[M]] = [0, _];
          for (M = 0, S = P.up.length; M < S; M++)
            k[P.up[M]] = [0, -1 * _];
        },
        _setZoomDelta: function(_) {
          var k = this._zoomKeys = {}, P = this.keyCodes, M, S;
          for (M = 0, S = P.zoomIn.length; M < S; M++)
            k[P.zoomIn[M]] = _;
          for (M = 0, S = P.zoomOut.length; M < S; M++)
            k[P.zoomOut[M]] = -_;
        },
        _addHooks: function() {
          $(document, "keydown", this._onKeyDown, this);
        },
        _removeHooks: function() {
          rt(document, "keydown", this._onKeyDown, this);
        },
        _onKeyDown: function(_) {
          if (!(_.altKey || _.ctrlKey || _.metaKey)) {
            var k = _.keyCode, P = this._map, M;
            if (k in this._panKeys) {
              if (!P._panAnim || !P._panAnim._inProgress)
                if (M = this._panKeys[k], _.shiftKey && (M = J(M).multiplyBy(3)), P.options.maxBounds && (M = P._limitOffset(J(M), P.options.maxBounds)), P.options.worldCopyJump) {
                  var S = P.wrapLatLng(P.unproject(P.project(P.getCenter()).add(M)));
                  P.panTo(S);
                } else
                  P.panBy(M);
            } else if (k in this._zoomKeys)
              P.setZoom(P.getZoom() + (_.shiftKey ? 3 : 1) * this._zoomKeys[k]);
            else if (k === 27 && P._popup && P._popup.options.closeOnEscapeKey)
              P.closePopup();
            else
              return;
            jt(_);
          }
        }
      });
      it.addInitHook("addHandler", "keyboard", On), it.mergeOptions({
        // @section Mouse wheel options
        // @option scrollWheelZoom: Boolean|String = true
        // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
        // it will zoom to the center of the view regardless of where the mouse was.
        scrollWheelZoom: !0,
        // @option wheelDebounceTime: Number = 40
        // Limits the rate at which a wheel can fire (in milliseconds). By default
        // user can't zoom via wheel more often than once per 40 ms.
        wheelDebounceTime: 40,
        // @option wheelPxPerZoomLevel: Number = 60
        // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
        // mean a change of one full zoom level. Smaller values will make wheel-zooming
        // faster (and vice versa).
        wheelPxPerZoomLevel: 60
      });
      var In = Dt.extend({
        addHooks: function() {
          $(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
        },
        removeHooks: function() {
          rt(this._map._container, "wheel", this._onWheelScroll, this);
        },
        _onWheelScroll: function(_) {
          var k = nn(_), P = this._map.options.wheelDebounceTime;
          this._delta += k, this._lastMousePos = this._map.mouseEventToContainerPoint(_), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
          var M = Math.max(P - (+/* @__PURE__ */ new Date() - this._startTime), 0);
          clearTimeout(this._timer), this._timer = setTimeout(O(this._performZoom, this), M), jt(_);
        },
        _performZoom: function() {
          var _ = this._map, k = _.getZoom(), P = this._map.options.zoomSnap || 0;
          _._stop();
          var M = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), S = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(M)))) / Math.LN2, D = P ? Math.ceil(S / P) * P : S, A = _._limitZoom(k + (this._delta > 0 ? D : -D)) - k;
          this._delta = 0, this._startTime = null, A && (_.options.scrollWheelZoom === "center" ? _.setZoom(k + A) : _.setZoomAround(this._lastMousePos, k + A));
        }
      });
      it.addInitHook("addHandler", "scrollWheelZoom", In);
      var ns = 600;
      it.mergeOptions({
        // @section Touch interaction options
        // @option tapHold: Boolean
        // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
        tapHold: Y.touchNative && Y.safari && Y.mobile,
        // @option tapTolerance: Number = 15
        // The max number of pixels a user can shift his finger during touch
        // for it to be considered a valid tap.
        tapTolerance: 15
      });
      var zn = Dt.extend({
        addHooks: function() {
          $(this._map._container, "touchstart", this._onDown, this);
        },
        removeHooks: function() {
          rt(this._map._container, "touchstart", this._onDown, this);
        },
        _onDown: function(_) {
          if (clearTimeout(this._holdTimeout), _.touches.length === 1) {
            var k = _.touches[0];
            this._startPos = this._newPos = new X(k.clientX, k.clientY), this._holdTimeout = setTimeout(O(function() {
              this._cancel(), this._isTapValid() && ($(document, "touchend", pt), $(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", k));
            }, this), ns), $(document, "touchend touchcancel contextmenu", this._cancel, this), $(document, "touchmove", this._onMove, this);
          }
        },
        _cancelClickPrevent: function _() {
          rt(document, "touchend", pt), rt(document, "touchend touchcancel", _);
        },
        _cancel: function() {
          clearTimeout(this._holdTimeout), rt(document, "touchend touchcancel contextmenu", this._cancel, this), rt(document, "touchmove", this._onMove, this);
        },
        _onMove: function(_) {
          var k = _.touches[0];
          this._newPos = new X(k.clientX, k.clientY);
        },
        _isTapValid: function() {
          return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
        },
        _simulateEvent: function(_, k) {
          var P = new MouseEvent(_, {
            bubbles: !0,
            cancelable: !0,
            view: window,
            // detail: 1,
            screenX: k.screenX,
            screenY: k.screenY,
            clientX: k.clientX,
            clientY: k.clientY
            // button: 2,
            // buttons: 2
          });
          P._simulated = !0, k.target.dispatchEvent(P);
        }
      });
      it.addInitHook("addHandler", "tapHold", zn), it.mergeOptions({
        // @section Touch interaction options
        // @option touchZoom: Boolean|String = *
        // Whether the map can be zoomed by touch-dragging with two fingers. If
        // passed `'center'`, it will zoom to the center of the view regardless of
        // where the touch events (fingers) were. Enabled for touch-capable web
        // browsers.
        touchZoom: Y.touch,
        // @option bounceAtZoomLimits: Boolean = true
        // Set it to false if you don't want the map to zoom beyond min/max zoom
        // and then bounce back when pinch-zooming.
        bounceAtZoomLimits: !0
      });
      var An = Dt.extend({
        addHooks: function() {
          Q(this._map._container, "leaflet-touch-zoom"), $(this._map._container, "touchstart", this._onTouchStart, this);
        },
        removeHooks: function() {
          ut(this._map._container, "leaflet-touch-zoom"), rt(this._map._container, "touchstart", this._onTouchStart, this);
        },
        _onTouchStart: function(_) {
          var k = this._map;
          if (!(!_.touches || _.touches.length !== 2 || k._animatingZoom || this._zooming)) {
            var P = k.mouseEventToContainerPoint(_.touches[0]), M = k.mouseEventToContainerPoint(_.touches[1]);
            this._centerPoint = k.getSize()._divideBy(2), this._startLatLng = k.containerPointToLatLng(this._centerPoint), k.options.touchZoom !== "center" && (this._pinchStartLatLng = k.containerPointToLatLng(P.add(M)._divideBy(2))), this._startDist = P.distanceTo(M), this._startZoom = k.getZoom(), this._moved = !1, this._zooming = !0, k._stop(), $(document, "touchmove", this._onTouchMove, this), $(document, "touchend touchcancel", this._onTouchEnd, this), pt(_);
          }
        },
        _onTouchMove: function(_) {
          if (!(!_.touches || _.touches.length !== 2 || !this._zooming)) {
            var k = this._map, P = k.mouseEventToContainerPoint(_.touches[0]), M = k.mouseEventToContainerPoint(_.touches[1]), S = P.distanceTo(M) / this._startDist;
            if (this._zoom = k.getScaleZoom(S, this._startZoom), !k.options.bounceAtZoomLimits && (this._zoom < k.getMinZoom() && S < 1 || this._zoom > k.getMaxZoom() && S > 1) && (this._zoom = k._limitZoom(this._zoom)), k.options.touchZoom === "center") {
              if (this._center = this._startLatLng, S === 1)
                return;
            } else {
              var D = P._add(M)._divideBy(2)._subtract(this._centerPoint);
              if (S === 1 && D.x === 0 && D.y === 0)
                return;
              this._center = k.unproject(k.project(this._pinchStartLatLng, this._zoom).subtract(D), this._zoom);
            }
            this._moved || (k._moveStart(!0, !1), this._moved = !0), bt(this._animRequest);
            var A = O(k._move, k, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
            this._animRequest = gt(A, this, !0), pt(_);
          }
        },
        _onTouchEnd: function() {
          if (!this._moved || !this._zooming) {
            this._zooming = !1;
            return;
          }
          this._zooming = !1, bt(this._animRequest), rt(document, "touchmove", this._onTouchMove, this), rt(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
        }
      });
      it.addInitHook("addHandler", "touchZoom", An), it.BoxZoom = Cn, it.DoubleClickZoom = Sn, it.Drag = Dn, it.Keyboard = On, it.ScrollWheelZoom = In, it.TapHold = zn, it.TouchZoom = An, Z.Bounds = lt, Z.Browser = Y, Z.CRS = zt, Z.Canvas = Pn, Z.Circle = gi, Z.CircleMarker = Me, Z.Class = It, Z.Control = Et, Z.DivIcon = bn, Z.DivOverlay = Ot, Z.DomEvent = wo, Z.DomUtil = yo, Z.Draggable = Ft, Z.Evented = ne, Z.FeatureGroup = At, Z.GeoJSON = Bt, Z.GridLayer = pe, Z.Handler = Dt, Z.Icon = $t, Z.ImageOverlay = Ie, Z.LatLng = st, Z.LatLngBounds = yt, Z.Layer = Mt, Z.LayerGroup = Xt, Z.LineUtil = zo, Z.Map = it, Z.Marker = Ee, Z.Mixin = Mo, Z.Path = Ht, Z.Point = X, Z.PolyUtil = Co, Z.Polygon = Qt, Z.Polyline = Zt, Z.Popup = ze, Z.PosAnimation = on, Z.Projection = Ao, Z.Rectangle = Mn, Z.Renderer = Rt, Z.SVG = ge, Z.SVGOverlay = wn, Z.TileLayer = ee, Z.Tooltip = Ae, Z.Transformation = Ge, Z.Util = Fn, Z.VideoOverlay = Ln, Z.bind = O, Z.bounds = vt, Z.canvas = Tn, Z.circle = Go, Z.circleMarker = Uo, Z.control = de, Z.divIcon = $o, Z.extend = T, Z.featureGroup = No, Z.geoJSON = yn, Z.geoJson = jo, Z.gridLayer = Qo, Z.icon = Fo, Z.imageOverlay = qo, Z.latLng = et, Z.latLngBounds = ct, Z.layerGroup = Ro, Z.map = bo, Z.marker = Ho, Z.point = J, Z.polygon = Vo, Z.polyline = Wo, Z.popup = Jo, Z.rectangle = is, Z.setOptions = at, Z.stamp = U, Z.svg = En, Z.svgOverlay = Ko, Z.tileLayer = xn, Z.tooltip = Xo, Z.transformation = oe, Z.version = F, Z.videoOverlay = Yo;
      var os = window.L;
      Z.noConflict = function() {
        return window.L = os, this;
      }, window.L = Z;
    }));
  })(leafletSrc$1, leafletSrc$1.exports)), leafletSrc$1.exports;
}
var leafletSrcExports = requireLeafletSrc();
const L$2 = /* @__PURE__ */ getDefaultExportFromCjs(leafletSrcExports), t = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: L$2
}, [leafletSrcExports]);
(function(z, B, Z) {
  function F(T, C) {
    for (; (T = T.parentElement) && !T.classList.contains(C); ) ;
    return T;
  }
  L.drawVersion = "1.0.4", L.Draw = {}, L.drawLocal = { draw: { toolbar: { actions: { title: "Cancel drawing", text: "Cancel" }, finish: { title: "Finish drawing", text: "Finish" }, undo: { title: "Delete last point drawn", text: "Delete last point" }, buttons: { polyline: "Draw a polyline", polygon: "Draw a polygon", rectangle: "Draw a rectangle", circle: "Draw a circle", marker: "Draw a marker", circlemarker: "Draw a circlemarker" } }, handlers: { circle: { tooltip: { start: "Click and drag to draw circle." }, radius: "Radius" }, circlemarker: { tooltip: { start: "Click map to place circle marker." } }, marker: { tooltip: { start: "Click map to place marker." } }, polygon: { tooltip: { start: "Click to start drawing shape.", cont: "Click to continue drawing shape.", end: "Click first point to close this shape." } }, polyline: { error: "<strong>Error:</strong> shape edges cannot cross!", tooltip: { start: "Click to start drawing line.", cont: "Click to continue drawing line.", end: "Click last point to finish line." } }, rectangle: { tooltip: { start: "Click and drag to draw rectangle." } }, simpleshape: { tooltip: { end: "Release mouse to finish drawing." } } } }, edit: { toolbar: { actions: { save: { title: "Save changes", text: "Save" }, cancel: { title: "Cancel editing, discards all changes", text: "Cancel" }, clearAll: { title: "Clear all layers", text: "Clear All" } }, buttons: { edit: "Edit layers", editDisabled: "No layers to edit", remove: "Delete layers", removeDisabled: "No layers to delete" } }, handlers: { edit: { tooltip: { text: "Drag handles or markers to edit features.", subtext: "Click cancel to undo changes." } }, remove: { tooltip: { text: "Click on a feature to remove." } } } } }, L.Draw.Event = {}, L.Draw.Event.CREATED = "draw:created", L.Draw.Event.EDITED = "draw:edited", L.Draw.Event.DELETED = "draw:deleted", L.Draw.Event.DRAWSTART = "draw:drawstart", L.Draw.Event.DRAWSTOP = "draw:drawstop", L.Draw.Event.DRAWVERTEX = "draw:drawvertex", L.Draw.Event.EDITSTART = "draw:editstart", L.Draw.Event.EDITMOVE = "draw:editmove", L.Draw.Event.EDITRESIZE = "draw:editresize", L.Draw.Event.EDITVERTEX = "draw:editvertex", L.Draw.Event.EDITSTOP = "draw:editstop", L.Draw.Event.DELETESTART = "draw:deletestart", L.Draw.Event.DELETESTOP = "draw:deletestop", L.Draw.Event.TOOLBAROPENED = "draw:toolbaropened", L.Draw.Event.TOOLBARCLOSED = "draw:toolbarclosed", L.Draw.Event.MARKERCONTEXT = "draw:markercontext", L.Draw = L.Draw || {}, L.Draw.Feature = L.Handler.extend({ initialize: function(T, C) {
    this._map = T, this._container = T._container, this._overlayPane = T._panes.overlayPane, this._popupPane = T._panes.popupPane, C && C.shapeOptions && (C.shapeOptions = L.Util.extend({}, this.options.shapeOptions, C.shapeOptions)), L.setOptions(this, C);
    var O = L.version.split(".");
    parseInt(O[0], 10) === 1 && parseInt(O[1], 10) >= 2 ? L.Draw.Feature.include(L.Evented.prototype) : L.Draw.Feature.include(L.Mixin.Events);
  }, enable: function() {
    this._enabled || (L.Handler.prototype.enable.call(this), this.fire("enabled", { handler: this.type }), this._map.fire(L.Draw.Event.DRAWSTART, { layerType: this.type }));
  }, disable: function() {
    this._enabled && (L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.DRAWSTOP, { layerType: this.type }), this.fire("disabled", { handler: this.type }));
  }, addHooks: function() {
    var T = this._map;
    T && (L.DomUtil.disableTextSelection(), T.getContainer().focus(), this._tooltip = new L.Draw.Tooltip(this._map), L.DomEvent.on(this._container, "keyup", this._cancelDrawing, this));
  }, removeHooks: function() {
    this._map && (L.DomUtil.enableTextSelection(), this._tooltip.dispose(), this._tooltip = null, L.DomEvent.off(this._container, "keyup", this._cancelDrawing, this));
  }, setOptions: function(T) {
    L.setOptions(this, T);
  }, _fireCreatedEvent: function(T) {
    this._map.fire(L.Draw.Event.CREATED, { layer: T, layerType: this.type });
  }, _cancelDrawing: function(T) {
    T.keyCode === 27 && (this._map.fire("draw:canceled", { layerType: this.type }), this.disable());
  } }), L.Draw.Polyline = L.Draw.Feature.extend({ statics: { TYPE: "polyline" }, Poly: L.Polyline, options: { allowIntersection: !0, repeatMode: !1, drawError: { color: "#b00b00", timeout: 2500 }, icon: new L.DivIcon({ iconSize: new L.Point(8, 8), className: "leaflet-div-icon leaflet-editing-icon" }), touchIcon: new L.DivIcon({ iconSize: new L.Point(20, 20), className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon" }), guidelineDistance: 20, maxGuideLineLength: 4e3, shapeOptions: { stroke: !0, color: "#3388ff", weight: 4, opacity: 0.5, fill: !1, clickable: !0 }, metric: !0, feet: !0, nautic: !1, showLength: !0, zIndexOffset: 2e3, factor: 1, maxPoints: 0 }, initialize: function(T, C) {
    L.Browser.touch && (this.options.icon = this.options.touchIcon), this.options.drawError.message = L.drawLocal.draw.handlers.polyline.error, C && C.drawError && (C.drawError = L.Util.extend({}, this.options.drawError, C.drawError)), this.type = L.Draw.Polyline.TYPE, L.Draw.Feature.prototype.initialize.call(this, T, C);
  }, addHooks: function() {
    L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._markers = [], this._markerGroup = new L.LayerGroup(), this._map.addLayer(this._markerGroup), this._poly = new L.Polyline([], this.options.shapeOptions), this._tooltip.updateContent(this._getTooltipText()), this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), { icon: L.divIcon({ className: "leaflet-mouse-marker", iconAnchor: [20, 20], iconSize: [40, 40] }), opacity: 0, zIndexOffset: this.options.zIndexOffset })), this._mouseMarker.on("mouseout", this._onMouseOut, this).on("mousemove", this._onMouseMove, this).on("mousedown", this._onMouseDown, this).on("mouseup", this._onMouseUp, this).addTo(this._map), this._map.on("mouseup", this._onMouseUp, this).on("mousemove", this._onMouseMove, this).on("zoomlevelschange", this._onZoomEnd, this).on("touchstart", this._onTouch, this).on("zoomend", this._onZoomEnd, this));
  }, removeHooks: function() {
    L.Draw.Feature.prototype.removeHooks.call(this), this._clearHideErrorTimeout(), this._cleanUpShape(), this._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers, this._map.removeLayer(this._poly), delete this._poly, this._mouseMarker.off("mousedown", this._onMouseDown, this).off("mouseout", this._onMouseOut, this).off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this), this._map.removeLayer(this._mouseMarker), delete this._mouseMarker, this._clearGuides(), this._map.off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this).off("zoomlevelschange", this._onZoomEnd, this).off("zoomend", this._onZoomEnd, this).off("touchstart", this._onTouch, this).off("click", this._onTouch, this);
  }, deleteLastVertex: function() {
    if (!(this._markers.length <= 1)) {
      var T = this._markers.pop(), C = this._poly, O = C.getLatLngs(), R = O.splice(-1, 1)[0];
      this._poly.setLatLngs(O), this._markerGroup.removeLayer(T), C.getLatLngs().length < 2 && this._map.removeLayer(C), this._vertexChanged(R, !1);
    }
  }, addVertex: function(T) {
    if (this._markers.length >= 2 && !this.options.allowIntersection && this._poly.newLatLngIntersects(T)) return void this._showErrorTooltip();
    this._errorShown && this._hideErrorTooltip(), this._markers.push(this._createMarker(T)), this._poly.addLatLng(T), this._poly.getLatLngs().length === 2 && this._map.addLayer(this._poly), this._vertexChanged(T, !0);
  }, completeShape: function() {
    this._markers.length <= 1 || !this._shapeIsValid() || (this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable());
  }, _finishShape: function() {
    var T = this._poly._defaultShape ? this._poly._defaultShape() : this._poly.getLatLngs(), C = this._poly.newLatLngIntersects(T[T.length - 1]);
    if (!this.options.allowIntersection && C || !this._shapeIsValid()) return void this._showErrorTooltip();
    this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable();
  }, _shapeIsValid: function() {
    return !0;
  }, _onZoomEnd: function() {
    this._markers !== null && this._updateGuide();
  }, _onMouseMove: function(T) {
    var C = this._map.mouseEventToLayerPoint(T.originalEvent), O = this._map.layerPointToLatLng(C);
    this._currentLatLng = O, this._updateTooltip(O), this._updateGuide(C), this._mouseMarker.setLatLng(O), L.DomEvent.preventDefault(T.originalEvent);
  }, _vertexChanged: function(T, C) {
    this._map.fire(L.Draw.Event.DRAWVERTEX, { layers: this._markerGroup }), this._updateFinishHandler(), this._updateRunningMeasure(T, C), this._clearGuides(), this._updateTooltip();
  }, _onMouseDown: function(T) {
    if (!this._clickHandled && !this._touchHandled && !this._disableMarkers) {
      this._onMouseMove(T), this._clickHandled = !0, this._disableNewMarkers();
      var C = T.originalEvent, O = C.clientX, R = C.clientY;
      this._startPoint.call(this, O, R);
    }
  }, _startPoint: function(T, C) {
    this._mouseDownOrigin = L.point(T, C);
  }, _onMouseUp: function(T) {
    var C = T.originalEvent, O = C.clientX, R = C.clientY;
    this._endPoint.call(this, O, R, T), this._clickHandled = null;
  }, _endPoint: function(T, C, O) {
    if (this._mouseDownOrigin) {
      var R = L.point(T, C).distanceTo(this._mouseDownOrigin), U = this._calculateFinishDistance(O.latlng);
      this.options.maxPoints > 1 && this.options.maxPoints == this._markers.length + 1 ? (this.addVertex(O.latlng), this._finishShape()) : U < 10 && L.Browser.touch ? this._finishShape() : Math.abs(R) < 9 * (z.devicePixelRatio || 1) && this.addVertex(O.latlng), this._enableNewMarkers();
    }
    this._mouseDownOrigin = null;
  }, _onTouch: function(T) {
    var C, O, R = T.originalEvent;
    !R.touches || !R.touches[0] || this._clickHandled || this._touchHandled || this._disableMarkers || (C = R.touches[0].clientX, O = R.touches[0].clientY, this._disableNewMarkers(), this._touchHandled = !0, this._startPoint.call(this, C, O), this._endPoint.call(this, C, O, T), this._touchHandled = null), this._clickHandled = null;
  }, _onMouseOut: function() {
    this._tooltip && this._tooltip._onMouseOut.call(this._tooltip);
  }, _calculateFinishDistance: function(T) {
    var C;
    if (this._markers.length > 0) {
      var O;
      if (this.type === L.Draw.Polyline.TYPE) O = this._markers[this._markers.length - 1];
      else {
        if (this.type !== L.Draw.Polygon.TYPE) return 1 / 0;
        O = this._markers[0];
      }
      var R = this._map.latLngToContainerPoint(O.getLatLng()), U = new L.Marker(T, { icon: this.options.icon, zIndexOffset: 2 * this.options.zIndexOffset }), W = this._map.latLngToContainerPoint(U.getLatLng());
      C = R.distanceTo(W);
    } else C = 1 / 0;
    return C;
  }, _updateFinishHandler: function() {
    var T = this._markers.length;
    T > 1 && this._markers[T - 1].on("click", this._finishShape, this), T > 2 && this._markers[T - 2].off("click", this._finishShape, this);
  }, _createMarker: function(T) {
    var C = new L.Marker(T, { icon: this.options.icon, zIndexOffset: 2 * this.options.zIndexOffset });
    return this._markerGroup.addLayer(C), C;
  }, _updateGuide: function(T) {
    var C = this._markers ? this._markers.length : 0;
    C > 0 && (T = T || this._map.latLngToLayerPoint(this._currentLatLng), this._clearGuides(), this._drawGuide(this._map.latLngToLayerPoint(this._markers[C - 1].getLatLng()), T));
  }, _updateTooltip: function(T) {
    var C = this._getTooltipText();
    T && this._tooltip.updatePosition(T), this._errorShown || this._tooltip.updateContent(C);
  }, _drawGuide: function(T, C) {
    var O, R, U, W = Math.floor(Math.sqrt(Math.pow(C.x - T.x, 2) + Math.pow(C.y - T.y, 2))), V = this.options.guidelineDistance, q = this.options.maxGuideLineLength, ot = W > q ? W - q : V;
    for (this._guidesContainer || (this._guidesContainer = L.DomUtil.create("div", "leaflet-draw-guides", this._overlayPane)); ot < W; ot += this.options.guidelineDistance) O = ot / W, R = { x: Math.floor(T.x * (1 - O) + O * C.x), y: Math.floor(T.y * (1 - O) + O * C.y) }, U = L.DomUtil.create("div", "leaflet-draw-guide-dash", this._guidesContainer), U.style.backgroundColor = this._errorShown ? this.options.drawError.color : this.options.shapeOptions.color, L.DomUtil.setPosition(U, R);
  }, _updateGuideColor: function(T) {
    if (this._guidesContainer) for (var C = 0, O = this._guidesContainer.childNodes.length; C < O; C++) this._guidesContainer.childNodes[C].style.backgroundColor = T;
  }, _clearGuides: function() {
    if (this._guidesContainer) for (; this._guidesContainer.firstChild; ) this._guidesContainer.removeChild(this._guidesContainer.firstChild);
  }, _getTooltipText: function() {
    var T, C, O = this.options.showLength;
    return this._markers.length === 0 ? T = { text: L.drawLocal.draw.handlers.polyline.tooltip.start } : (C = O ? this._getMeasurementString() : "", T = this._markers.length === 1 ? { text: L.drawLocal.draw.handlers.polyline.tooltip.cont, subtext: C } : { text: L.drawLocal.draw.handlers.polyline.tooltip.end, subtext: C }), T;
  }, _updateRunningMeasure: function(T, C) {
    var O, R, U = this._markers.length;
    this._markers.length === 1 ? this._measurementRunningTotal = 0 : (O = U - (C ? 2 : 1), R = L.GeometryUtil.isVersion07x() ? T.distanceTo(this._markers[O].getLatLng()) * (this.options.factor || 1) : this._map.distance(T, this._markers[O].getLatLng()) * (this.options.factor || 1), this._measurementRunningTotal += R * (C ? 1 : -1));
  }, _getMeasurementString: function() {
    var T, C = this._currentLatLng, O = this._markers[this._markers.length - 1].getLatLng();
    return T = L.GeometryUtil.isVersion07x() ? O && C && C.distanceTo ? this._measurementRunningTotal + C.distanceTo(O) * (this.options.factor || 1) : this._measurementRunningTotal || 0 : O && C ? this._measurementRunningTotal + this._map.distance(C, O) * (this.options.factor || 1) : this._measurementRunningTotal || 0, L.GeometryUtil.readableDistance(T, this.options.metric, this.options.feet, this.options.nautic, this.options.precision);
  }, _showErrorTooltip: function() {
    this._errorShown = !0, this._tooltip.showAsError().updateContent({ text: this.options.drawError.message }), this._updateGuideColor(this.options.drawError.color), this._poly.setStyle({ color: this.options.drawError.color }), this._clearHideErrorTimeout(), this._hideErrorTimeout = setTimeout(L.Util.bind(this._hideErrorTooltip, this), this.options.drawError.timeout);
  }, _hideErrorTooltip: function() {
    this._errorShown = !1, this._clearHideErrorTimeout(), this._tooltip.removeError().updateContent(this._getTooltipText()), this._updateGuideColor(this.options.shapeOptions.color), this._poly.setStyle({ color: this.options.shapeOptions.color });
  }, _clearHideErrorTimeout: function() {
    this._hideErrorTimeout && (clearTimeout(this._hideErrorTimeout), this._hideErrorTimeout = null);
  }, _disableNewMarkers: function() {
    this._disableMarkers = !0;
  }, _enableNewMarkers: function() {
    setTimeout((function() {
      this._disableMarkers = !1;
    }).bind(this), 50);
  }, _cleanUpShape: function() {
    this._markers.length > 1 && this._markers[this._markers.length - 1].off("click", this._finishShape, this);
  }, _fireCreatedEvent: function() {
    var T = new this.Poly(this._poly.getLatLngs(), this.options.shapeOptions);
    L.Draw.Feature.prototype._fireCreatedEvent.call(this, T);
  } }), L.Draw.Polygon = L.Draw.Polyline.extend({ statics: { TYPE: "polygon" }, Poly: L.Polygon, options: { showArea: !1, showLength: !1, shapeOptions: { stroke: !0, color: "#3388ff", weight: 4, opacity: 0.5, fill: !0, fillColor: null, fillOpacity: 0.2, clickable: !0 }, metric: !0, feet: !0, nautic: !1, precision: {} }, initialize: function(T, C) {
    L.Draw.Polyline.prototype.initialize.call(this, T, C), this.type = L.Draw.Polygon.TYPE;
  }, _updateFinishHandler: function() {
    var T = this._markers.length;
    T === 1 && this._markers[0].on("click", this._finishShape, this), T > 2 && (this._markers[T - 1].on("dblclick", this._finishShape, this), T > 3 && this._markers[T - 2].off("dblclick", this._finishShape, this));
  }, _getTooltipText: function() {
    var T, C;
    return this._markers.length === 0 ? T = L.drawLocal.draw.handlers.polygon.tooltip.start : this._markers.length < 3 ? (T = L.drawLocal.draw.handlers.polygon.tooltip.cont, C = this._getMeasurementString()) : (T = L.drawLocal.draw.handlers.polygon.tooltip.end, C = this._getMeasurementString()), { text: T, subtext: C };
  }, _getMeasurementString: function() {
    var T = this._area, C = "";
    return T || this.options.showLength ? (this.options.showLength && (C = L.Draw.Polyline.prototype._getMeasurementString.call(this)), T && (C += "<br>" + L.GeometryUtil.readableArea(T, this.options.metric, this.options.precision)), C) : null;
  }, _shapeIsValid: function() {
    return this._markers.length >= 3;
  }, _vertexChanged: function(T, C) {
    var O;
    !this.options.allowIntersection && this.options.showArea && (O = this._poly.getLatLngs(), this._area = L.GeometryUtil.geodesicArea(O)), L.Draw.Polyline.prototype._vertexChanged.call(this, T, C);
  }, _cleanUpShape: function() {
    var T = this._markers.length;
    T > 0 && (this._markers[0].off("click", this._finishShape, this), T > 2 && this._markers[T - 1].off("dblclick", this._finishShape, this));
  } }), L.SimpleShape = {}, L.Draw.SimpleShape = L.Draw.Feature.extend({ options: { repeatMode: !1 }, initialize: function(T, C) {
    this._endLabelText = L.drawLocal.draw.handlers.simpleshape.tooltip.end, L.Draw.Feature.prototype.initialize.call(this, T, C);
  }, addHooks: function() {
    L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._mapDraggable = this._map.dragging.enabled(), this._mapDraggable && this._map.dragging.disable(), this._container.style.cursor = "crosshair", this._tooltip.updateContent({ text: this._initialLabelText }), this._map.on("mousedown", this._onMouseDown, this).on("mousemove", this._onMouseMove, this).on("touchstart", this._onMouseDown, this).on("touchmove", this._onMouseMove, this), B.addEventListener("touchstart", L.DomEvent.preventDefault, { passive: !1 }));
  }, removeHooks: function() {
    L.Draw.Feature.prototype.removeHooks.call(this), this._map && (this._mapDraggable && this._map.dragging.enable(), this._container.style.cursor = "", this._map.off("mousedown", this._onMouseDown, this).off("mousemove", this._onMouseMove, this).off("touchstart", this._onMouseDown, this).off("touchmove", this._onMouseMove, this), L.DomEvent.off(B, "mouseup", this._onMouseUp, this), L.DomEvent.off(B, "touchend", this._onMouseUp, this), B.removeEventListener("touchstart", L.DomEvent.preventDefault), this._shape && (this._map.removeLayer(this._shape), delete this._shape)), this._isDrawing = !1;
  }, _getTooltipText: function() {
    return { text: this._endLabelText };
  }, _onMouseDown: function(T) {
    this._isDrawing = !0, this._startLatLng = T.latlng, L.DomEvent.on(B, "mouseup", this._onMouseUp, this).on(B, "touchend", this._onMouseUp, this).preventDefault(T.originalEvent);
  }, _onMouseMove: function(T) {
    var C = T.latlng;
    this._tooltip.updatePosition(C), this._isDrawing && (this._tooltip.updateContent(this._getTooltipText()), this._drawShape(C));
  }, _onMouseUp: function() {
    this._shape && this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable();
  } }), L.Draw.Rectangle = L.Draw.SimpleShape.extend({ statics: { TYPE: "rectangle" }, options: { shapeOptions: { stroke: !0, color: "#3388ff", weight: 4, opacity: 0.5, fill: !0, fillColor: null, fillOpacity: 0.2, clickable: !0 }, showArea: !0, metric: !0 }, initialize: function(T, C) {
    this.type = L.Draw.Rectangle.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.rectangle.tooltip.start, L.Draw.SimpleShape.prototype.initialize.call(this, T, C);
  }, disable: function() {
    this._enabled && (this._isCurrentlyTwoClickDrawing = !1, L.Draw.SimpleShape.prototype.disable.call(this));
  }, _onMouseUp: function(T) {
    if (!this._shape && !this._isCurrentlyTwoClickDrawing) return void (this._isCurrentlyTwoClickDrawing = !0);
    this._isCurrentlyTwoClickDrawing && !F(T.target, "leaflet-pane") || L.Draw.SimpleShape.prototype._onMouseUp.call(this);
  }, _drawShape: function(T) {
    this._shape ? this._shape.setBounds(new L.LatLngBounds(this._startLatLng, T)) : (this._shape = new L.Rectangle(new L.LatLngBounds(this._startLatLng, T), this.options.shapeOptions), this._map.addLayer(this._shape));
  }, _fireCreatedEvent: function() {
    var T = new L.Rectangle(this._shape.getBounds(), this.options.shapeOptions);
    L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, T);
  }, _getTooltipText: function() {
    var T, C, O, R = L.Draw.SimpleShape.prototype._getTooltipText.call(this), U = this._shape, W = this.options.showArea;
    return U && (T = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(), C = L.GeometryUtil.geodesicArea(T), O = W ? L.GeometryUtil.readableArea(C, this.options.metric) : ""), { text: R.text, subtext: O };
  } }), L.Draw.Marker = L.Draw.Feature.extend({ statics: { TYPE: "marker" }, options: { icon: new L.Icon.Default(), repeatMode: !1, zIndexOffset: 2e3 }, initialize: function(T, C) {
    this.type = L.Draw.Marker.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.marker.tooltip.start, L.Draw.Feature.prototype.initialize.call(this, T, C);
  }, addHooks: function() {
    L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._tooltip.updateContent({ text: this._initialLabelText }), this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), { icon: L.divIcon({ className: "leaflet-mouse-marker", iconAnchor: [20, 20], iconSize: [40, 40] }), opacity: 0, zIndexOffset: this.options.zIndexOffset })), this._mouseMarker.on("click", this._onClick, this).addTo(this._map), this._map.on("mousemove", this._onMouseMove, this), this._map.on("click", this._onTouch, this));
  }, removeHooks: function() {
    L.Draw.Feature.prototype.removeHooks.call(this), this._map && (this._map.off("click", this._onClick, this).off("click", this._onTouch, this), this._marker && (this._marker.off("click", this._onClick, this), this._map.removeLayer(this._marker), delete this._marker), this._mouseMarker.off("click", this._onClick, this), this._map.removeLayer(this._mouseMarker), delete this._mouseMarker, this._map.off("mousemove", this._onMouseMove, this));
  }, _onMouseMove: function(T) {
    var C = T.latlng;
    this._tooltip.updatePosition(C), this._mouseMarker.setLatLng(C), this._marker ? (C = this._mouseMarker.getLatLng(), this._marker.setLatLng(C)) : (this._marker = this._createMarker(C), this._marker.on("click", this._onClick, this), this._map.on("click", this._onClick, this).addLayer(this._marker));
  }, _createMarker: function(T) {
    return new L.Marker(T, { icon: this.options.icon, zIndexOffset: this.options.zIndexOffset });
  }, _onClick: function() {
    this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable();
  }, _onTouch: function(T) {
    this._onMouseMove(T), this._onClick();
  }, _fireCreatedEvent: function() {
    var T = new L.Marker.Touch(this._marker.getLatLng(), { icon: this.options.icon });
    L.Draw.Feature.prototype._fireCreatedEvent.call(this, T);
  } }), L.Draw.CircleMarker = L.Draw.Marker.extend({ statics: { TYPE: "circlemarker" }, options: { stroke: !0, color: "#3388ff", weight: 4, opacity: 0.5, fill: !0, fillColor: null, fillOpacity: 0.2, clickable: !0, zIndexOffset: 2e3 }, initialize: function(T, C) {
    this.type = L.Draw.CircleMarker.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.circlemarker.tooltip.start, L.Draw.Feature.prototype.initialize.call(this, T, C);
  }, _fireCreatedEvent: function() {
    var T = new L.CircleMarker(this._marker.getLatLng(), this.options);
    L.Draw.Feature.prototype._fireCreatedEvent.call(this, T);
  }, _createMarker: function(T) {
    return new L.CircleMarker(T, this.options);
  } }), L.Draw.Circle = L.Draw.SimpleShape.extend({ statics: { TYPE: "circle" }, options: { shapeOptions: { stroke: !0, color: "#3388ff", weight: 4, opacity: 0.5, fill: !0, fillColor: null, fillOpacity: 0.2, clickable: !0 }, showRadius: !0, metric: !0, feet: !0, nautic: !1 }, initialize: function(T, C) {
    this.type = L.Draw.Circle.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.circle.tooltip.start, L.Draw.SimpleShape.prototype.initialize.call(this, T, C);
  }, _drawShape: function(T) {
    if (L.GeometryUtil.isVersion07x()) var C = this._startLatLng.distanceTo(T);
    else var C = this._map.distance(this._startLatLng, T);
    this._shape ? this._shape.setRadius(C) : (this._shape = new L.Circle(this._startLatLng, C, this.options.shapeOptions), this._map.addLayer(this._shape));
  }, _fireCreatedEvent: function() {
    var T = new L.Circle(this._startLatLng, this._shape.getRadius(), this.options.shapeOptions);
    L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, T);
  }, _onMouseMove: function(T) {
    var C, O = T.latlng, R = this.options.showRadius, U = this.options.metric;
    if (this._tooltip.updatePosition(O), this._isDrawing) {
      this._drawShape(O), C = this._shape.getRadius().toFixed(1);
      var W = "";
      R && (W = L.drawLocal.draw.handlers.circle.radius + ": " + L.GeometryUtil.readableDistance(C, U, this.options.feet, this.options.nautic)), this._tooltip.updateContent({ text: this._endLabelText, subtext: W });
    }
  } }), L.Edit = L.Edit || {}, L.Edit.Marker = L.Handler.extend({ initialize: function(T, C) {
    this._marker = T, L.setOptions(this, C);
  }, addHooks: function() {
    var T = this._marker;
    T.dragging.enable(), T.on("dragend", this._onDragEnd, T), this._toggleMarkerHighlight();
  }, removeHooks: function() {
    var T = this._marker;
    T.dragging.disable(), T.off("dragend", this._onDragEnd, T), this._toggleMarkerHighlight();
  }, _onDragEnd: function(T) {
    var C = T.target;
    C.edited = !0, this._map.fire(L.Draw.Event.EDITMOVE, { layer: C });
  }, _toggleMarkerHighlight: function() {
    var T = this._marker._icon;
    T && (T.style.display = "none", L.DomUtil.hasClass(T, "leaflet-edit-marker-selected") ? (L.DomUtil.removeClass(T, "leaflet-edit-marker-selected"), this._offsetMarker(T, -4)) : (L.DomUtil.addClass(T, "leaflet-edit-marker-selected"), this._offsetMarker(T, 4)), T.style.display = "");
  }, _offsetMarker: function(T, C) {
    var O = parseInt(T.style.marginTop, 10) - C, R = parseInt(T.style.marginLeft, 10) - C;
    T.style.marginTop = O + "px", T.style.marginLeft = R + "px";
  } }), L.Marker.addInitHook(function() {
    L.Edit.Marker && (this.editing = new L.Edit.Marker(this), this.options.editable && this.editing.enable());
  }), L.Edit = L.Edit || {}, L.Edit.Poly = L.Handler.extend({ initialize: function(T) {
    this.latlngs = [T._latlngs], T._holes && (this.latlngs = this.latlngs.concat(T._holes)), this._poly = T, this._poly.on("revert-edited", this._updateLatLngs, this);
  }, _defaultShape: function() {
    return L.Polyline._flat ? L.Polyline._flat(this._poly._latlngs) ? this._poly._latlngs : this._poly._latlngs[0] : this._poly._latlngs;
  }, _eachVertexHandler: function(T) {
    for (var C = 0; C < this._verticesHandlers.length; C++) T(this._verticesHandlers[C]);
  }, addHooks: function() {
    this._initHandlers(), this._eachVertexHandler(function(T) {
      T.addHooks();
    });
  }, removeHooks: function() {
    this._eachVertexHandler(function(T) {
      T.removeHooks();
    });
  }, updateMarkers: function() {
    this._eachVertexHandler(function(T) {
      T.updateMarkers();
    });
  }, _initHandlers: function() {
    this._verticesHandlers = [];
    for (var T = 0; T < this.latlngs.length; T++) this._verticesHandlers.push(new L.Edit.PolyVerticesEdit(this._poly, this.latlngs[T], this._poly.options.poly));
  }, _updateLatLngs: function(T) {
    this.latlngs = [T.layer._latlngs], T.layer._holes && (this.latlngs = this.latlngs.concat(T.layer._holes));
  } }), L.Edit.PolyVerticesEdit = L.Handler.extend({ options: { icon: new L.DivIcon({ iconSize: new L.Point(8, 8), className: "leaflet-div-icon leaflet-editing-icon" }), touchIcon: new L.DivIcon({ iconSize: new L.Point(20, 20), className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon" }), drawError: { color: "#b00b00", timeout: 1e3 } }, initialize: function(T, C, O) {
    L.Browser.touch && (this.options.icon = this.options.touchIcon), this._poly = T, O && O.drawError && (O.drawError = L.Util.extend({}, this.options.drawError, O.drawError)), this._latlngs = C, L.setOptions(this, O);
  }, _defaultShape: function() {
    return L.Polyline._flat ? L.Polyline._flat(this._latlngs) ? this._latlngs : this._latlngs[0] : this._latlngs;
  }, addHooks: function() {
    var T = this._poly, C = T._path;
    T instanceof L.Polygon || (T.options.fill = !1, T.options.editing && (T.options.editing.fill = !1)), C && T.options.editing && T.options.editing.className && (T.options.original.className && T.options.original.className.split(" ").forEach(function(O) {
      L.DomUtil.removeClass(C, O);
    }), T.options.editing.className.split(" ").forEach(function(O) {
      L.DomUtil.addClass(C, O);
    })), T.setStyle(T.options.editing), this._poly._map && (this._map = this._poly._map, this._markerGroup || this._initMarkers(), this._poly._map.addLayer(this._markerGroup));
  }, removeHooks: function() {
    var T = this._poly, C = T._path;
    C && T.options.editing && T.options.editing.className && (T.options.editing.className.split(" ").forEach(function(O) {
      L.DomUtil.removeClass(C, O);
    }), T.options.original.className && T.options.original.className.split(" ").forEach(function(O) {
      L.DomUtil.addClass(C, O);
    })), T.setStyle(T.options.original), T._map && (T._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers);
  }, updateMarkers: function() {
    this._markerGroup.clearLayers(), this._initMarkers();
  }, _initMarkers: function() {
    this._markerGroup || (this._markerGroup = new L.LayerGroup()), this._markers = [];
    var T, C, O, R, U = this._defaultShape();
    for (T = 0, O = U.length; T < O; T++) R = this._createMarker(U[T], T), R.on("click", this._onMarkerClick, this), R.on("contextmenu", this._onContextMenu, this), this._markers.push(R);
    var W, V;
    for (T = 0, C = O - 1; T < O; C = T++) (T !== 0 || L.Polygon && this._poly instanceof L.Polygon) && (W = this._markers[C], V = this._markers[T], this._createMiddleMarker(W, V), this._updatePrevNext(W, V));
  }, _createMarker: function(T, C) {
    var O = new L.Marker.Touch(T, { draggable: !0, icon: this.options.icon });
    return O._origLatLng = T, O._index = C, O.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._fireEdit, this).on("touchmove", this._onTouchMove, this).on("touchend", this._fireEdit, this).on("MSPointerMove", this._onTouchMove, this).on("MSPointerUp", this._fireEdit, this), this._markerGroup.addLayer(O), O;
  }, _onMarkerDragStart: function() {
    this._poly.fire("editstart");
  }, _spliceLatLngs: function() {
    var T = this._defaultShape(), C = [].splice.apply(T, arguments);
    return this._poly._convertLatLngs(T, !0), this._poly.redraw(), C;
  }, _removeMarker: function(T) {
    var C = T._index;
    this._markerGroup.removeLayer(T), this._markers.splice(C, 1), this._spliceLatLngs(C, 1), this._updateIndexes(C, -1), T.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._fireEdit, this).off("touchmove", this._onMarkerDrag, this).off("touchend", this._fireEdit, this).off("click", this._onMarkerClick, this).off("MSPointerMove", this._onTouchMove, this).off("MSPointerUp", this._fireEdit, this);
  }, _fireEdit: function() {
    this._poly.edited = !0, this._poly.fire("edit"), this._poly._map.fire(L.Draw.Event.EDITVERTEX, { layers: this._markerGroup, poly: this._poly });
  }, _onMarkerDrag: function(T) {
    var C = T.target, O = this._poly, R = L.LatLngUtil.cloneLatLng(C._origLatLng);
    if (L.extend(C._origLatLng, C._latlng), O.options.poly) {
      var U = O._map._editTooltip;
      if (!O.options.poly.allowIntersection && O.intersects()) {
        L.extend(C._origLatLng, R), C.setLatLng(R);
        var W = O.options.color;
        O.setStyle({ color: this.options.drawError.color }), U && U.updateContent({ text: L.drawLocal.draw.handlers.polyline.error }), setTimeout(function() {
          O.setStyle({ color: W }), U && U.updateContent({ text: L.drawLocal.edit.handlers.edit.tooltip.text, subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext });
        }, 1e3);
      }
    }
    C._middleLeft && C._middleLeft.setLatLng(this._getMiddleLatLng(C._prev, C)), C._middleRight && C._middleRight.setLatLng(this._getMiddleLatLng(C, C._next)), this._poly._bounds._southWest = L.latLng(1 / 0, 1 / 0), this._poly._bounds._northEast = L.latLng(-1 / 0, -1 / 0);
    var V = this._poly.getLatLngs();
    this._poly._convertLatLngs(V, !0), this._poly.redraw(), this._poly.fire("editdrag");
  }, _onMarkerClick: function(T) {
    var C = L.Polygon && this._poly instanceof L.Polygon ? 4 : 3, O = T.target;
    this._defaultShape().length < C || (this._removeMarker(O), this._updatePrevNext(O._prev, O._next), O._middleLeft && this._markerGroup.removeLayer(O._middleLeft), O._middleRight && this._markerGroup.removeLayer(O._middleRight), O._prev && O._next ? this._createMiddleMarker(O._prev, O._next) : O._prev ? O._next || (O._prev._middleRight = null) : O._next._middleLeft = null, this._fireEdit());
  }, _onContextMenu: function(T) {
    var C = T.target;
    this._poly, this._poly._map.fire(L.Draw.Event.MARKERCONTEXT, { marker: C, layers: this._markerGroup, poly: this._poly }), L.DomEvent.stopPropagation;
  }, _onTouchMove: function(T) {
    var C = this._map.mouseEventToLayerPoint(T.originalEvent.touches[0]), O = this._map.layerPointToLatLng(C), R = T.target;
    L.extend(R._origLatLng, O), R._middleLeft && R._middleLeft.setLatLng(this._getMiddleLatLng(R._prev, R)), R._middleRight && R._middleRight.setLatLng(this._getMiddleLatLng(R, R._next)), this._poly.redraw(), this.updateMarkers();
  }, _updateIndexes: function(T, C) {
    this._markerGroup.eachLayer(function(O) {
      O._index > T && (O._index += C);
    });
  }, _createMiddleMarker: function(T, C) {
    var O, R, U, W = this._getMiddleLatLng(T, C), V = this._createMarker(W);
    V.setOpacity(0.6), T._middleRight = C._middleLeft = V, R = function() {
      V.off("touchmove", R, this);
      var q = C._index;
      V._index = q, V.off("click", O, this).on("click", this._onMarkerClick, this), W.lat = V.getLatLng().lat, W.lng = V.getLatLng().lng, this._spliceLatLngs(q, 0, W), this._markers.splice(q, 0, V), V.setOpacity(1), this._updateIndexes(q, 1), C._index++, this._updatePrevNext(T, V), this._updatePrevNext(V, C), this._poly.fire("editstart");
    }, U = function() {
      V.off("dragstart", R, this), V.off("dragend", U, this), V.off("touchmove", R, this), this._createMiddleMarker(T, V), this._createMiddleMarker(V, C);
    }, O = function() {
      R.call(this), U.call(this), this._fireEdit();
    }, V.on("click", O, this).on("dragstart", R, this).on("dragend", U, this).on("touchmove", R, this), this._markerGroup.addLayer(V);
  }, _updatePrevNext: function(T, C) {
    T && (T._next = C), C && (C._prev = T);
  }, _getMiddleLatLng: function(T, C) {
    var O = this._poly._map, R = O.project(T.getLatLng()), U = O.project(C.getLatLng());
    return O.unproject(R._add(U)._divideBy(2));
  } }), L.Polyline.addInitHook(function() {
    this.editing || (L.Edit.Poly && (this.editing = new L.Edit.Poly(this), this.options.editable && this.editing.enable()), this.on("add", function() {
      this.editing && this.editing.enabled() && this.editing.addHooks();
    }), this.on("remove", function() {
      this.editing && this.editing.enabled() && this.editing.removeHooks();
    }));
  }), L.Edit = L.Edit || {}, L.Edit.SimpleShape = L.Handler.extend({ options: { moveIcon: new L.DivIcon({ iconSize: new L.Point(8, 8), className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move" }), resizeIcon: new L.DivIcon({
    iconSize: new L.Point(8, 8),
    className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize"
  }), touchMoveIcon: new L.DivIcon({ iconSize: new L.Point(20, 20), className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move leaflet-touch-icon" }), touchResizeIcon: new L.DivIcon({ iconSize: new L.Point(20, 20), className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize leaflet-touch-icon" }) }, initialize: function(T, C) {
    L.Browser.touch && (this.options.moveIcon = this.options.touchMoveIcon, this.options.resizeIcon = this.options.touchResizeIcon), this._shape = T, L.Util.setOptions(this, C);
  }, addHooks: function() {
    var T = this._shape;
    this._shape._map && (this._map = this._shape._map, T.setStyle(T.options.editing), T._map && (this._map = T._map, this._markerGroup || this._initMarkers(), this._map.addLayer(this._markerGroup)));
  }, removeHooks: function() {
    var T = this._shape;
    if (T.setStyle(T.options.original), T._map) {
      this._unbindMarker(this._moveMarker);
      for (var C = 0, O = this._resizeMarkers.length; C < O; C++) this._unbindMarker(this._resizeMarkers[C]);
      this._resizeMarkers = null, this._map.removeLayer(this._markerGroup), delete this._markerGroup;
    }
    this._map = null;
  }, updateMarkers: function() {
    this._markerGroup.clearLayers(), this._initMarkers();
  }, _initMarkers: function() {
    this._markerGroup || (this._markerGroup = new L.LayerGroup()), this._createMoveMarker(), this._createResizeMarker();
  }, _createMoveMarker: function() {
  }, _createResizeMarker: function() {
  }, _createMarker: function(T, C) {
    var O = new L.Marker.Touch(T, { draggable: !0, icon: C, zIndexOffset: 10 });
    return this._bindMarker(O), this._markerGroup.addLayer(O), O;
  }, _bindMarker: function(T) {
    T.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._onMarkerDragEnd, this).on("touchstart", this._onTouchStart, this).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onTouchEnd, this).on("MSPointerUp", this._onTouchEnd, this);
  }, _unbindMarker: function(T) {
    T.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._onMarkerDragEnd, this).off("touchstart", this._onTouchStart, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onTouchEnd, this).off("MSPointerUp", this._onTouchEnd, this);
  }, _onMarkerDragStart: function(T) {
    T.target.setOpacity(0), this._shape.fire("editstart");
  }, _fireEdit: function() {
    this._shape.edited = !0, this._shape.fire("edit");
  }, _onMarkerDrag: function(T) {
    var C = T.target, O = C.getLatLng();
    C === this._moveMarker ? this._move(O) : this._resize(O), this._shape.redraw(), this._shape.fire("editdrag");
  }, _onMarkerDragEnd: function(T) {
    T.target.setOpacity(1), this._fireEdit();
  }, _onTouchStart: function(T) {
    if (L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, T), typeof this._getCorners == "function") {
      var C = this._getCorners(), O = T.target, R = O._cornerIndex;
      O.setOpacity(0), this._oppositeCorner = C[(R + 2) % 4], this._toggleCornerMarkers(0, R);
    }
    this._shape.fire("editstart");
  }, _onTouchMove: function(T) {
    var C = this._map.mouseEventToLayerPoint(T.originalEvent.touches[0]), O = this._map.layerPointToLatLng(C);
    return T.target === this._moveMarker ? this._move(O) : this._resize(O), this._shape.redraw(), !1;
  }, _onTouchEnd: function(T) {
    T.target.setOpacity(1), this.updateMarkers(), this._fireEdit();
  }, _move: function() {
  }, _resize: function() {
  } }), L.Edit = L.Edit || {}, L.Edit.Rectangle = L.Edit.SimpleShape.extend({ _createMoveMarker: function() {
    var T = this._shape.getBounds(), C = T.getCenter();
    this._moveMarker = this._createMarker(C, this.options.moveIcon);
  }, _createResizeMarker: function() {
    var T = this._getCorners();
    this._resizeMarkers = [];
    for (var C = 0, O = T.length; C < O; C++) this._resizeMarkers.push(this._createMarker(T[C], this.options.resizeIcon)), this._resizeMarkers[C]._cornerIndex = C;
  }, _onMarkerDragStart: function(T) {
    L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, T);
    var C = this._getCorners(), O = T.target, R = O._cornerIndex;
    this._oppositeCorner = C[(R + 2) % 4], this._toggleCornerMarkers(0, R);
  }, _onMarkerDragEnd: function(T) {
    var C, O, R = T.target;
    R === this._moveMarker && (C = this._shape.getBounds(), O = C.getCenter(), R.setLatLng(O)), this._toggleCornerMarkers(1), this._repositionCornerMarkers(), L.Edit.SimpleShape.prototype._onMarkerDragEnd.call(this, T);
  }, _move: function(T) {
    for (var C, O = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(), R = this._shape.getBounds(), U = R.getCenter(), W = [], V = 0, q = O.length; V < q; V++) C = [O[V].lat - U.lat, O[V].lng - U.lng], W.push([T.lat + C[0], T.lng + C[1]]);
    this._shape.setLatLngs(W), this._repositionCornerMarkers(), this._map.fire(L.Draw.Event.EDITMOVE, { layer: this._shape });
  }, _resize: function(T) {
    var C;
    this._shape.setBounds(L.latLngBounds(T, this._oppositeCorner)), C = this._shape.getBounds(), this._moveMarker.setLatLng(C.getCenter()), this._map.fire(L.Draw.Event.EDITRESIZE, { layer: this._shape });
  }, _getCorners: function() {
    var T = this._shape.getBounds();
    return [T.getNorthWest(), T.getNorthEast(), T.getSouthEast(), T.getSouthWest()];
  }, _toggleCornerMarkers: function(T) {
    for (var C = 0, O = this._resizeMarkers.length; C < O; C++) this._resizeMarkers[C].setOpacity(T);
  }, _repositionCornerMarkers: function() {
    for (var T = this._getCorners(), C = 0, O = this._resizeMarkers.length; C < O; C++) this._resizeMarkers[C].setLatLng(T[C]);
  } }), L.Rectangle.addInitHook(function() {
    L.Edit.Rectangle && (this.editing = new L.Edit.Rectangle(this), this.options.editable && this.editing.enable());
  }), L.Edit = L.Edit || {}, L.Edit.CircleMarker = L.Edit.SimpleShape.extend({ _createMoveMarker: function() {
    var T = this._shape.getLatLng();
    this._moveMarker = this._createMarker(T, this.options.moveIcon);
  }, _createResizeMarker: function() {
    this._resizeMarkers = [];
  }, _move: function(T) {
    if (this._resizeMarkers.length) {
      var C = this._getResizeMarkerPoint(T);
      this._resizeMarkers[0].setLatLng(C);
    }
    this._shape.setLatLng(T), this._map.fire(L.Draw.Event.EDITMOVE, { layer: this._shape });
  } }), L.CircleMarker.addInitHook(function() {
    L.Edit.CircleMarker && (this.editing = new L.Edit.CircleMarker(this), this.options.editable && this.editing.enable()), this.on("add", function() {
      this.editing && this.editing.enabled() && this.editing.addHooks();
    }), this.on("remove", function() {
      this.editing && this.editing.enabled() && this.editing.removeHooks();
    });
  }), L.Edit = L.Edit || {}, L.Edit.Circle = L.Edit.CircleMarker.extend({ _createResizeMarker: function() {
    var T = this._shape.getLatLng(), C = this._getResizeMarkerPoint(T);
    this._resizeMarkers = [], this._resizeMarkers.push(this._createMarker(C, this.options.resizeIcon));
  }, _getResizeMarkerPoint: function(T) {
    var C = this._shape._radius * Math.cos(Math.PI / 4), O = this._map.project(T);
    return this._map.unproject([O.x + C, O.y - C]);
  }, _resize: function(T) {
    var C = this._moveMarker.getLatLng();
    L.GeometryUtil.isVersion07x() ? radius = C.distanceTo(T) : radius = this._map.distance(C, T), this._shape.setRadius(radius), this._map.editTooltip && this._map._editTooltip.updateContent({ text: L.drawLocal.edit.handlers.edit.tooltip.subtext + "<br />" + L.drawLocal.edit.handlers.edit.tooltip.text, subtext: L.drawLocal.draw.handlers.circle.radius + ": " + L.GeometryUtil.readableDistance(radius, !0, this.options.feet, this.options.nautic) }), this._shape.setRadius(radius), this._map.fire(L.Draw.Event.EDITRESIZE, { layer: this._shape });
  } }), L.Circle.addInitHook(function() {
    L.Edit.Circle && (this.editing = new L.Edit.Circle(this), this.options.editable && this.editing.enable());
  }), L.Map.mergeOptions({ touchExtend: !0 }), L.Map.TouchExtend = L.Handler.extend({ initialize: function(T) {
    this._map = T, this._container = T._container, this._pane = T._panes.overlayPane;
  }, addHooks: function() {
    L.DomEvent.on(this._container, "touchstart", this._onTouchStart, this), L.DomEvent.on(this._container, "touchend", this._onTouchEnd, this), L.DomEvent.on(this._container, "touchmove", this._onTouchMove, this), this._detectIE() ? (L.DomEvent.on(this._container, "MSPointerDown", this._onTouchStart, this), L.DomEvent.on(this._container, "MSPointerUp", this._onTouchEnd, this), L.DomEvent.on(this._container, "MSPointerMove", this._onTouchMove, this), L.DomEvent.on(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (L.DomEvent.on(this._container, "touchcancel", this._onTouchCancel, this), L.DomEvent.on(this._container, "touchleave", this._onTouchLeave, this));
  }, removeHooks: function() {
    L.DomEvent.off(this._container, "touchstart", this._onTouchStart, this), L.DomEvent.off(this._container, "touchend", this._onTouchEnd, this), L.DomEvent.off(this._container, "touchmove", this._onTouchMove, this), this._detectIE() ? (L.DomEvent.off(this._container, "MSPointerDown", this._onTouchStart, this), L.DomEvent.off(this._container, "MSPointerUp", this._onTouchEnd, this), L.DomEvent.off(this._container, "MSPointerMove", this._onTouchMove, this), L.DomEvent.off(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (L.DomEvent.off(this._container, "touchcancel", this._onTouchCancel, this), L.DomEvent.off(this._container, "touchleave", this._onTouchLeave, this));
  }, _touchEvent: function(T, C) {
    var O = {};
    if (T.touches !== void 0) {
      if (!T.touches.length) return;
      O = T.touches[0];
    } else if (T.pointerType !== "touch" || (O = T, !this._filterClick(T))) return;
    var R = this._map.mouseEventToContainerPoint(O), U = this._map.mouseEventToLayerPoint(O), W = this._map.layerPointToLatLng(U);
    this._map.fire(C, { latlng: W, layerPoint: U, containerPoint: R, pageX: O.pageX, pageY: O.pageY, originalEvent: T });
  }, _filterClick: function(T) {
    var C = T.timeStamp || T.originalEvent.timeStamp, O = L.DomEvent._lastClick && C - L.DomEvent._lastClick;
    return O && O > 100 && O < 500 || T.target._simulatedClick && !T._simulated ? (L.DomEvent.stop(T), !1) : (L.DomEvent._lastClick = C, !0);
  }, _onTouchStart: function(T) {
    this._map._loaded && this._touchEvent(T, "touchstart");
  }, _onTouchEnd: function(T) {
    this._map._loaded && this._touchEvent(T, "touchend");
  }, _onTouchCancel: function(T) {
    if (this._map._loaded) {
      var C = "touchcancel";
      this._detectIE() && (C = "pointercancel"), this._touchEvent(T, C);
    }
  }, _onTouchLeave: function(T) {
    this._map._loaded && this._touchEvent(T, "touchleave");
  }, _onTouchMove: function(T) {
    this._map._loaded && this._touchEvent(T, "touchmove");
  }, _detectIE: function() {
    var T = z.navigator.userAgent, C = T.indexOf("MSIE ");
    if (C > 0) return parseInt(T.substring(C + 5, T.indexOf(".", C)), 10);
    if (T.indexOf("Trident/") > 0) {
      var O = T.indexOf("rv:");
      return parseInt(T.substring(O + 3, T.indexOf(".", O)), 10);
    }
    var R = T.indexOf("Edge/");
    return R > 0 && parseInt(T.substring(R + 5, T.indexOf(".", R)), 10);
  } }), L.Map.addInitHook("addHandler", "touchExtend", L.Map.TouchExtend), L.Marker.Touch = L.Marker.extend({ _initInteraction: function() {
    return this.addInteractiveTarget ? L.Marker.prototype._initInteraction.apply(this) : this._initInteractionLegacy();
  }, _initInteractionLegacy: function() {
    if (this.options.clickable) {
      var T = this._icon, C = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu", "touchstart", "touchend", "touchmove"];
      this._detectIE ? C.concat(["MSPointerDown", "MSPointerUp", "MSPointerMove", "MSPointerCancel"]) : C.concat(["touchcancel"]), L.DomUtil.addClass(T, "leaflet-clickable"), L.DomEvent.on(T, "click", this._onMouseClick, this), L.DomEvent.on(T, "keypress", this._onKeyPress, this);
      for (var O = 0; O < C.length; O++) L.DomEvent.on(T, C[O], this._fireMouseEvent, this);
      L.Handler.MarkerDrag && (this.dragging = new L.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable());
    }
  }, _detectIE: function() {
    var T = z.navigator.userAgent, C = T.indexOf("MSIE ");
    if (C > 0) return parseInt(T.substring(C + 5, T.indexOf(".", C)), 10);
    if (T.indexOf("Trident/") > 0) {
      var O = T.indexOf("rv:");
      return parseInt(T.substring(O + 3, T.indexOf(".", O)), 10);
    }
    var R = T.indexOf("Edge/");
    return R > 0 && parseInt(T.substring(R + 5, T.indexOf(".", R)), 10);
  } }), L.LatLngUtil = { cloneLatLngs: function(T) {
    for (var C = [], O = 0, R = T.length; O < R; O++) Array.isArray(T[O]) ? C.push(L.LatLngUtil.cloneLatLngs(T[O])) : C.push(this.cloneLatLng(T[O]));
    return C;
  }, cloneLatLng: function(T) {
    return L.latLng(T.lat, T.lng);
  } }, (function() {
    var T = { km: 2, ha: 2, m: 0, mi: 2, ac: 2, yd: 0, ft: 0, nm: 2 };
    L.GeometryUtil = L.extend(L.GeometryUtil || {}, { geodesicArea: function(C) {
      var O, R, U = C.length, W = 0, V = Math.PI / 180;
      if (U > 2) {
        for (var q = 0; q < U; q++) O = C[q], R = C[(q + 1) % U], W += (R.lng - O.lng) * V * (2 + Math.sin(O.lat * V) + Math.sin(R.lat * V));
        W = 6378137 * W * 6378137 / 2;
      }
      return Math.abs(W);
    }, formattedNumber: function(C, O) {
      var R = parseFloat(C).toFixed(O), U = L.drawLocal.format && L.drawLocal.format.numeric, W = U && U.delimiters, V = W && W.thousands, q = W && W.decimal;
      if (V || q) {
        var ot = R.split(".");
        R = V ? ot[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + V) : ot[0], q = q || ".", ot.length > 1 && (R = R + q + ot[1]);
      }
      return R;
    }, readableArea: function(C, O, V) {
      var U, W, V = L.Util.extend({}, T, V);
      return O ? (W = ["ha", "m"], type = typeof O, type === "string" ? W = [O] : type !== "boolean" && (W = O), U = C >= 1e6 && W.indexOf("km") !== -1 ? L.GeometryUtil.formattedNumber(1e-6 * C, V.km) + " km²" : C >= 1e4 && W.indexOf("ha") !== -1 ? L.GeometryUtil.formattedNumber(1e-4 * C, V.ha) + " ha" : L.GeometryUtil.formattedNumber(C, V.m) + " m²") : (C /= 0.836127, U = C >= 3097600 ? L.GeometryUtil.formattedNumber(C / 3097600, V.mi) + " mi²" : C >= 4840 ? L.GeometryUtil.formattedNumber(C / 4840, V.ac) + " acres" : L.GeometryUtil.formattedNumber(C, V.yd) + " yd²"), U;
    }, readableDistance: function(C, O, R, U, q) {
      var V, q = L.Util.extend({}, T, q);
      switch (O ? typeof O == "string" ? O : "metric" : R ? "feet" : U ? "nauticalMile" : "yards") {
        case "metric":
          V = C > 1e3 ? L.GeometryUtil.formattedNumber(C / 1e3, q.km) + " km" : L.GeometryUtil.formattedNumber(C, q.m) + " m";
          break;
        case "feet":
          C *= 3.28083, V = L.GeometryUtil.formattedNumber(C, q.ft) + " ft";
          break;
        case "nauticalMile":
          C *= 0.53996, V = L.GeometryUtil.formattedNumber(C / 1e3, q.nm) + " nm";
          break;
        default:
          C *= 1.09361, V = C > 1760 ? L.GeometryUtil.formattedNumber(C / 1760, q.mi) + " miles" : L.GeometryUtil.formattedNumber(C, q.yd) + " yd";
      }
      return V;
    }, isVersion07x: function() {
      var C = L.version.split(".");
      return parseInt(C[0], 10) === 0 && parseInt(C[1], 10) === 7;
    } });
  })(), L.Util.extend(L.LineUtil, { segmentsIntersect: function(T, C, O, R) {
    return this._checkCounterclockwise(T, O, R) !== this._checkCounterclockwise(C, O, R) && this._checkCounterclockwise(T, C, O) !== this._checkCounterclockwise(T, C, R);
  }, _checkCounterclockwise: function(T, C, O) {
    return (O.y - T.y) * (C.x - T.x) > (C.y - T.y) * (O.x - T.x);
  } }), L.Polyline.include({ intersects: function() {
    var T, C, O, R = this._getProjectedPoints(), U = R ? R.length : 0;
    if (this._tooFewPointsForIntersection()) return !1;
    for (T = U - 1; T >= 3; T--) if (C = R[T - 1], O = R[T], this._lineSegmentsIntersectsRange(C, O, T - 2)) return !0;
    return !1;
  }, newLatLngIntersects: function(T, C) {
    return !!this._map && this.newPointIntersects(this._map.latLngToLayerPoint(T), C);
  }, newPointIntersects: function(T, C) {
    var O = this._getProjectedPoints(), R = O ? O.length : 0, U = O ? O[R - 1] : null, W = R - 2;
    return !this._tooFewPointsForIntersection(1) && this._lineSegmentsIntersectsRange(U, T, W, C ? 1 : 0);
  }, _tooFewPointsForIntersection: function(T) {
    var C = this._getProjectedPoints(), O = C ? C.length : 0;
    return O += T || 0, !C || O <= 3;
  }, _lineSegmentsIntersectsRange: function(T, C, O, R) {
    var U, W, V = this._getProjectedPoints();
    R = R || 0;
    for (var q = O; q > R; q--) if (U = V[q - 1], W = V[q], L.LineUtil.segmentsIntersect(T, C, U, W)) return !0;
    return !1;
  }, _getProjectedPoints: function() {
    if (!this._defaultShape) return this._originalPoints;
    for (var T = [], C = this._defaultShape(), O = 0; O < C.length; O++) T.push(this._map.latLngToLayerPoint(C[O]));
    return T;
  } }), L.Polygon.include({ intersects: function() {
    var T, C, O, R, U = this._getProjectedPoints();
    return !this._tooFewPointsForIntersection() && (!!L.Polyline.prototype.intersects.call(this) || (T = U.length, C = U[0], O = U[T - 1], R = T - 2, this._lineSegmentsIntersectsRange(O, C, R, 1)));
  } }), L.Control.Draw = L.Control.extend({ options: { position: "topleft", draw: {}, edit: !1 }, initialize: function(T) {
    if (L.version < "0.7") throw new Error("Leaflet.draw 0.2.3+ requires Leaflet 0.7.0+. Download latest from https://github.com/Leaflet/Leaflet/");
    L.Control.prototype.initialize.call(this, T);
    var C;
    this._toolbars = {}, L.DrawToolbar && this.options.draw && (C = new L.DrawToolbar(this.options.draw), this._toolbars[L.DrawToolbar.TYPE] = C, this._toolbars[L.DrawToolbar.TYPE].on("enable", this._toolbarEnabled, this)), L.EditToolbar && this.options.edit && (C = new L.EditToolbar(this.options.edit), this._toolbars[L.EditToolbar.TYPE] = C, this._toolbars[L.EditToolbar.TYPE].on("enable", this._toolbarEnabled, this)), L.toolbar = this;
  }, onAdd: function(T) {
    var C, O = L.DomUtil.create("div", "leaflet-draw"), R = !1;
    for (var U in this._toolbars) this._toolbars.hasOwnProperty(U) && (C = this._toolbars[U].addToolbar(T)) && (R || (L.DomUtil.hasClass(C, "leaflet-draw-toolbar-top") || L.DomUtil.addClass(C.childNodes[0], "leaflet-draw-toolbar-top"), R = !0), O.appendChild(C));
    return O;
  }, onRemove: function() {
    for (var T in this._toolbars) this._toolbars.hasOwnProperty(T) && this._toolbars[T].removeToolbar();
  }, setDrawingOptions: function(T) {
    for (var C in this._toolbars) this._toolbars[C] instanceof L.DrawToolbar && this._toolbars[C].setOptions(T);
  }, _toolbarEnabled: function(T) {
    var C = T.target;
    for (var O in this._toolbars) this._toolbars[O] !== C && this._toolbars[O].disable();
  } }), L.Map.mergeOptions({ drawControlTooltips: !0, drawControl: !1 }), L.Map.addInitHook(function() {
    this.options.drawControl && (this.drawControl = new L.Control.Draw(), this.addControl(this.drawControl));
  }), L.Toolbar = L.Class.extend({ initialize: function(T) {
    L.setOptions(this, T), this._modes = {}, this._actionButtons = [], this._activeMode = null;
    var C = L.version.split(".");
    parseInt(C[0], 10) === 1 && parseInt(C[1], 10) >= 2 ? L.Toolbar.include(L.Evented.prototype) : L.Toolbar.include(L.Mixin.Events);
  }, enabled: function() {
    return this._activeMode !== null;
  }, disable: function() {
    this.enabled() && this._activeMode.handler.disable();
  }, addToolbar: function(T) {
    var C, O = L.DomUtil.create("div", "leaflet-draw-section"), R = 0, U = this._toolbarClass || "", W = this.getModeHandlers(T);
    for (this._toolbarContainer = L.DomUtil.create("div", "leaflet-draw-toolbar leaflet-bar"), this._map = T, C = 0; C < W.length; C++) W[C].enabled && this._initModeHandler(W[C].handler, this._toolbarContainer, R++, U, W[C].title);
    if (R) return this._lastButtonIndex = --R, this._actionsContainer = L.DomUtil.create("ul", "leaflet-draw-actions"), O.appendChild(this._toolbarContainer), O.appendChild(this._actionsContainer), O;
  }, removeToolbar: function() {
    for (var T in this._modes) this._modes.hasOwnProperty(T) && (this._disposeButton(this._modes[T].button, this._modes[T].handler.enable, this._modes[T].handler), this._modes[T].handler.disable(), this._modes[T].handler.off("enabled", this._handlerActivated, this).off("disabled", this._handlerDeactivated, this));
    this._modes = {};
    for (var C = 0, O = this._actionButtons.length; C < O; C++) this._disposeButton(this._actionButtons[C].button, this._actionButtons[C].callback, this);
    this._actionButtons = [], this._actionsContainer = null;
  }, _initModeHandler: function(T, C, O, R, U) {
    var W = T.type;
    this._modes[W] = {}, this._modes[W].handler = T, this._modes[W].button = this._createButton({ type: W, title: U, className: R + "-" + W, container: C, callback: this._modes[W].handler.enable, context: this._modes[W].handler }), this._modes[W].buttonIndex = O, this._modes[W].handler.on("enabled", this._handlerActivated, this).on("disabled", this._handlerDeactivated, this);
  }, _detectIOS: function() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !z.MSStream;
  }, _createButton: function(T) {
    var C = L.DomUtil.create("a", T.className || "", T.container), O = L.DomUtil.create("span", "sr-only", T.container);
    C.href = "#", C.appendChild(O), T.title && (C.title = T.title, O.innerHTML = T.title), T.text && (C.innerHTML = T.text, O.innerHTML = T.text);
    var R = this._detectIOS() ? "touchstart" : "click";
    return L.DomEvent.on(C, "click", L.DomEvent.stopPropagation).on(C, "mousedown", L.DomEvent.stopPropagation).on(C, "dblclick", L.DomEvent.stopPropagation).on(C, "touchstart", L.DomEvent.stopPropagation).on(C, "click", L.DomEvent.preventDefault).on(C, R, T.callback, T.context), C;
  }, _disposeButton: function(T, C) {
    var O = this._detectIOS() ? "touchstart" : "click";
    L.DomEvent.off(T, "click", L.DomEvent.stopPropagation).off(T, "mousedown", L.DomEvent.stopPropagation).off(T, "dblclick", L.DomEvent.stopPropagation).off(T, "touchstart", L.DomEvent.stopPropagation).off(T, "click", L.DomEvent.preventDefault).off(T, O, C);
  }, _handlerActivated: function(T) {
    this.disable(), this._activeMode = this._modes[T.handler], L.DomUtil.addClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"), this._showActionsToolbar(), this.fire("enable");
  }, _handlerDeactivated: function() {
    this._hideActionsToolbar(), L.DomUtil.removeClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"), this._activeMode = null, this.fire("disable");
  }, _createActions: function(T) {
    var C, O, R, U, W = this._actionsContainer, V = this.getActions(T), q = V.length;
    for (O = 0, R = this._actionButtons.length; O < R; O++) this._disposeButton(this._actionButtons[O].button, this._actionButtons[O].callback);
    for (this._actionButtons = []; W.firstChild; ) W.removeChild(W.firstChild);
    for (var ot = 0; ot < q; ot++) "enabled" in V[ot] && !V[ot].enabled || (C = L.DomUtil.create("li", "", W), U = this._createButton({ title: V[ot].title, text: V[ot].text, container: C, callback: V[ot].callback, context: V[ot].context }), this._actionButtons.push({ button: U, callback: V[ot].callback }));
  }, _showActionsToolbar: function() {
    var T = this._activeMode.buttonIndex, C = this._lastButtonIndex, O = this._activeMode.button.offsetTop - 1;
    this._createActions(this._activeMode.handler), this._actionsContainer.style.top = O + "px", T === 0 && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"), L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-top")), T === C && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"), L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-bottom")), this._actionsContainer.style.display = "block", this._map.fire(L.Draw.Event.TOOLBAROPENED);
  }, _hideActionsToolbar: function() {
    this._actionsContainer.style.display = "none", L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"), L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"), L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-top"), L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-bottom"), this._map.fire(L.Draw.Event.TOOLBARCLOSED);
  } }), L.Draw = L.Draw || {}, L.Draw.Tooltip = L.Class.extend({ initialize: function(T) {
    this._map = T, this._popupPane = T._panes.popupPane, this._visible = !1, this._container = T.options.drawControlTooltips ? L.DomUtil.create("div", "leaflet-draw-tooltip", this._popupPane) : null, this._singleLineLabel = !1, this._map.on("mouseout", this._onMouseOut, this);
  }, dispose: function() {
    this._map.off("mouseout", this._onMouseOut, this), this._container && (this._popupPane.removeChild(this._container), this._container = null);
  }, updateContent: function(T) {
    return this._container ? (T.subtext = T.subtext || "", T.subtext.length !== 0 || this._singleLineLabel ? T.subtext.length > 0 && this._singleLineLabel && (L.DomUtil.removeClass(this._container, "leaflet-draw-tooltip-single"), this._singleLineLabel = !1) : (L.DomUtil.addClass(this._container, "leaflet-draw-tooltip-single"), this._singleLineLabel = !0), this._container.innerHTML = (T.subtext.length > 0 ? '<span class="leaflet-draw-tooltip-subtext">' + T.subtext + "</span><br />" : "") + "<span>" + T.text + "</span>", T.text || T.subtext ? (this._visible = !0, this._container.style.visibility = "inherit") : (this._visible = !1, this._container.style.visibility = "hidden"), this) : this;
  }, updatePosition: function(T) {
    var C = this._map.latLngToLayerPoint(T), O = this._container;
    return this._container && (this._visible && (O.style.visibility = "inherit"), L.DomUtil.setPosition(O, C)), this;
  }, showAsError: function() {
    return this._container && L.DomUtil.addClass(this._container, "leaflet-error-draw-tooltip"), this;
  }, removeError: function() {
    return this._container && L.DomUtil.removeClass(this._container, "leaflet-error-draw-tooltip"), this;
  }, _onMouseOut: function() {
    this._container && (this._container.style.visibility = "hidden");
  } }), L.DrawToolbar = L.Toolbar.extend({ statics: { TYPE: "draw" }, options: { polyline: {}, polygon: {}, rectangle: {}, circle: {}, marker: {}, circlemarker: {} }, initialize: function(T) {
    for (var C in this.options) this.options.hasOwnProperty(C) && T[C] && (T[C] = L.extend({}, this.options[C], T[C]));
    this._toolbarClass = "leaflet-draw-draw", L.Toolbar.prototype.initialize.call(this, T);
  }, getModeHandlers: function(T) {
    return [{ enabled: this.options.polyline, handler: new L.Draw.Polyline(T, this.options.polyline), title: L.drawLocal.draw.toolbar.buttons.polyline }, { enabled: this.options.polygon, handler: new L.Draw.Polygon(T, this.options.polygon), title: L.drawLocal.draw.toolbar.buttons.polygon }, { enabled: this.options.rectangle, handler: new L.Draw.Rectangle(T, this.options.rectangle), title: L.drawLocal.draw.toolbar.buttons.rectangle }, { enabled: this.options.circle, handler: new L.Draw.Circle(T, this.options.circle), title: L.drawLocal.draw.toolbar.buttons.circle }, { enabled: this.options.marker, handler: new L.Draw.Marker(T, this.options.marker), title: L.drawLocal.draw.toolbar.buttons.marker }, { enabled: this.options.circlemarker, handler: new L.Draw.CircleMarker(T, this.options.circlemarker), title: L.drawLocal.draw.toolbar.buttons.circlemarker }];
  }, getActions: function(T) {
    return [{ enabled: T.completeShape, title: L.drawLocal.draw.toolbar.finish.title, text: L.drawLocal.draw.toolbar.finish.text, callback: T.completeShape, context: T }, { enabled: T.deleteLastVertex, title: L.drawLocal.draw.toolbar.undo.title, text: L.drawLocal.draw.toolbar.undo.text, callback: T.deleteLastVertex, context: T }, { title: L.drawLocal.draw.toolbar.actions.title, text: L.drawLocal.draw.toolbar.actions.text, callback: this.disable, context: this }];
  }, setOptions: function(T) {
    L.setOptions(this, T);
    for (var C in this._modes) this._modes.hasOwnProperty(C) && T.hasOwnProperty(C) && this._modes[C].handler.setOptions(T[C]);
  } }), L.EditToolbar = L.Toolbar.extend({ statics: { TYPE: "edit" }, options: { edit: { selectedPathOptions: { dashArray: "10, 10", fill: !0, fillColor: "#fe57a1", fillOpacity: 0.1, maintainColor: !1 } }, remove: {}, poly: null, featureGroup: null }, initialize: function(T) {
    T.edit && (T.edit.selectedPathOptions === void 0 && (T.edit.selectedPathOptions = this.options.edit.selectedPathOptions), T.edit.selectedPathOptions = L.extend({}, this.options.edit.selectedPathOptions, T.edit.selectedPathOptions)), T.remove && (T.remove = L.extend({}, this.options.remove, T.remove)), T.poly && (T.poly = L.extend({}, this.options.poly, T.poly)), this._toolbarClass = "leaflet-draw-edit", L.Toolbar.prototype.initialize.call(this, T), this._selectedFeatureCount = 0;
  }, getModeHandlers: function(T) {
    var C = this.options.featureGroup;
    return [{ enabled: this.options.edit, handler: new L.EditToolbar.Edit(T, { featureGroup: C, selectedPathOptions: this.options.edit.selectedPathOptions, poly: this.options.poly }), title: L.drawLocal.edit.toolbar.buttons.edit }, { enabled: this.options.remove, handler: new L.EditToolbar.Delete(T, { featureGroup: C }), title: L.drawLocal.edit.toolbar.buttons.remove }];
  }, getActions: function(T) {
    var C = [{ title: L.drawLocal.edit.toolbar.actions.save.title, text: L.drawLocal.edit.toolbar.actions.save.text, callback: this._save, context: this }, { title: L.drawLocal.edit.toolbar.actions.cancel.title, text: L.drawLocal.edit.toolbar.actions.cancel.text, callback: this.disable, context: this }];
    return T.removeAllLayers && C.push({ title: L.drawLocal.edit.toolbar.actions.clearAll.title, text: L.drawLocal.edit.toolbar.actions.clearAll.text, callback: this._clearAllLayers, context: this }), C;
  }, addToolbar: function(T) {
    var C = L.Toolbar.prototype.addToolbar.call(this, T);
    return this._checkDisabled(), this.options.featureGroup.on("layeradd layerremove", this._checkDisabled, this), C;
  }, removeToolbar: function() {
    this.options.featureGroup.off("layeradd layerremove", this._checkDisabled, this), L.Toolbar.prototype.removeToolbar.call(this);
  }, disable: function() {
    this.enabled() && (this._activeMode.handler.revertLayers(), L.Toolbar.prototype.disable.call(this));
  }, _save: function() {
    this._activeMode.handler.save(), this._activeMode && this._activeMode.handler.disable();
  }, _clearAllLayers: function() {
    this._activeMode.handler.removeAllLayers(), this._activeMode && this._activeMode.handler.disable();
  }, _checkDisabled: function() {
    var T, C = this.options.featureGroup, O = C.getLayers().length !== 0;
    this.options.edit && (T = this._modes[L.EditToolbar.Edit.TYPE].button, O ? L.DomUtil.removeClass(T, "leaflet-disabled") : L.DomUtil.addClass(T, "leaflet-disabled"), T.setAttribute("title", O ? L.drawLocal.edit.toolbar.buttons.edit : L.drawLocal.edit.toolbar.buttons.editDisabled)), this.options.remove && (T = this._modes[L.EditToolbar.Delete.TYPE].button, O ? L.DomUtil.removeClass(T, "leaflet-disabled") : L.DomUtil.addClass(T, "leaflet-disabled"), T.setAttribute("title", O ? L.drawLocal.edit.toolbar.buttons.remove : L.drawLocal.edit.toolbar.buttons.removeDisabled));
  } }), L.EditToolbar.Edit = L.Handler.extend({ statics: { TYPE: "edit" }, initialize: function(T, C) {
    if (L.Handler.prototype.initialize.call(this, T), L.setOptions(this, C), this._featureGroup = C.featureGroup, !(this._featureGroup instanceof L.FeatureGroup)) throw new Error("options.featureGroup must be a L.FeatureGroup");
    this._uneditedLayerProps = {}, this.type = L.EditToolbar.Edit.TYPE;
    var O = L.version.split(".");
    parseInt(O[0], 10) === 1 && parseInt(O[1], 10) >= 2 ? L.EditToolbar.Edit.include(L.Evented.prototype) : L.EditToolbar.Edit.include(L.Mixin.Events);
  }, enable: function() {
    !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", { handler: this.type }), this._map.fire(L.Draw.Event.EDITSTART, { handler: this.type }), L.Handler.prototype.enable.call(this), this._featureGroup.on("layeradd", this._enableLayerEdit, this).on("layerremove", this._disableLayerEdit, this));
  }, disable: function() {
    this._enabled && (this._featureGroup.off("layeradd", this._enableLayerEdit, this).off("layerremove", this._disableLayerEdit, this), L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.EDITSTOP, { handler: this.type }), this.fire("disabled", { handler: this.type }));
  }, addHooks: function() {
    var T = this._map;
    T && (T.getContainer().focus(), this._featureGroup.eachLayer(this._enableLayerEdit, this), this._tooltip = new L.Draw.Tooltip(this._map), this._tooltip.updateContent({ text: L.drawLocal.edit.handlers.edit.tooltip.text, subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext }), T._editTooltip = this._tooltip, this._updateTooltip(), this._map.on("mousemove", this._onMouseMove, this).on("touchmove", this._onMouseMove, this).on("MSPointerMove", this._onMouseMove, this).on(L.Draw.Event.EDITVERTEX, this._updateTooltip, this));
  }, removeHooks: function() {
    this._map && (this._featureGroup.eachLayer(this._disableLayerEdit, this), this._uneditedLayerProps = {}, this._tooltip.dispose(), this._tooltip = null, this._map.off("mousemove", this._onMouseMove, this).off("touchmove", this._onMouseMove, this).off("MSPointerMove", this._onMouseMove, this).off(L.Draw.Event.EDITVERTEX, this._updateTooltip, this));
  }, revertLayers: function() {
    this._featureGroup.eachLayer(function(T) {
      this._revertLayer(T);
    }, this);
  }, save: function() {
    var T = new L.LayerGroup();
    this._featureGroup.eachLayer(function(C) {
      C.edited && (T.addLayer(C), C.edited = !1);
    }), this._map.fire(L.Draw.Event.EDITED, { layers: T });
  }, _backupLayer: function(T) {
    var C = L.Util.stamp(T);
    this._uneditedLayerProps[C] || (T instanceof L.Polyline || T instanceof L.Polygon || T instanceof L.Rectangle ? this._uneditedLayerProps[C] = { latlngs: L.LatLngUtil.cloneLatLngs(T.getLatLngs()) } : T instanceof L.Circle ? this._uneditedLayerProps[C] = { latlng: L.LatLngUtil.cloneLatLng(T.getLatLng()), radius: T.getRadius() } : (T instanceof L.Marker || T instanceof L.CircleMarker) && (this._uneditedLayerProps[C] = { latlng: L.LatLngUtil.cloneLatLng(T.getLatLng()) }));
  }, _getTooltipText: function() {
    return { text: L.drawLocal.edit.handlers.edit.tooltip.text, subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext };
  }, _updateTooltip: function() {
    this._tooltip.updateContent(this._getTooltipText());
  }, _revertLayer: function(T) {
    var C = L.Util.stamp(T);
    T.edited = !1, this._uneditedLayerProps.hasOwnProperty(C) && (T instanceof L.Polyline || T instanceof L.Polygon || T instanceof L.Rectangle ? T.setLatLngs(this._uneditedLayerProps[C].latlngs) : T instanceof L.Circle ? (T.setLatLng(this._uneditedLayerProps[C].latlng), T.setRadius(this._uneditedLayerProps[C].radius)) : (T instanceof L.Marker || T instanceof L.CircleMarker) && T.setLatLng(this._uneditedLayerProps[C].latlng), T.fire("revert-edited", { layer: T }));
  }, _enableLayerEdit: function(T) {
    var C, O, R = T.layer || T.target || T;
    this._backupLayer(R), this.options.poly && (O = L.Util.extend({}, this.options.poly), R.options.poly = O), this.options.selectedPathOptions && (C = L.Util.extend({}, this.options.selectedPathOptions), C.maintainColor && (C.color = R.options.color, C.fillColor = R.options.fillColor), R.options.original = L.extend({}, R.options), R.options.editing = C), R instanceof L.Marker ? (R.editing && R.editing.enable(), R.dragging.enable(), R.on("dragend", this._onMarkerDragEnd).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onMarkerDragEnd, this).on("MSPointerUp", this._onMarkerDragEnd, this)) : R.editing.enable();
  }, _disableLayerEdit: function(T) {
    var C = T.layer || T.target || T;
    C.edited = !1, C.editing && C.editing.disable(), delete C.options.editing, delete C.options.original, this._selectedPathOptions && (C instanceof L.Marker ? this._toggleMarkerHighlight(C) : (C.setStyle(C.options.previousOptions), delete C.options.previousOptions)), C instanceof L.Marker ? (C.dragging.disable(), C.off("dragend", this._onMarkerDragEnd, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onMarkerDragEnd, this).off("MSPointerUp", this._onMarkerDragEnd, this)) : C.editing.disable();
  }, _onMouseMove: function(T) {
    this._tooltip.updatePosition(T.latlng);
  }, _onMarkerDragEnd: function(T) {
    var C = T.target;
    C.edited = !0, this._map.fire(L.Draw.Event.EDITMOVE, { layer: C });
  }, _onTouchMove: function(T) {
    var C = T.originalEvent.changedTouches[0], O = this._map.mouseEventToLayerPoint(C), R = this._map.layerPointToLatLng(O);
    T.target.setLatLng(R);
  }, _hasAvailableLayers: function() {
    return this._featureGroup.getLayers().length !== 0;
  } }), L.EditToolbar.Delete = L.Handler.extend({ statics: { TYPE: "remove" }, initialize: function(T, C) {
    if (L.Handler.prototype.initialize.call(this, T), L.Util.setOptions(this, C), this._deletableLayers = this.options.featureGroup, !(this._deletableLayers instanceof L.FeatureGroup)) throw new Error("options.featureGroup must be a L.FeatureGroup");
    this.type = L.EditToolbar.Delete.TYPE;
    var O = L.version.split(".");
    parseInt(O[0], 10) === 1 && parseInt(O[1], 10) >= 2 ? L.EditToolbar.Delete.include(L.Evented.prototype) : L.EditToolbar.Delete.include(L.Mixin.Events);
  }, enable: function() {
    !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", { handler: this.type }), this._map.fire(L.Draw.Event.DELETESTART, { handler: this.type }), L.Handler.prototype.enable.call(this), this._deletableLayers.on("layeradd", this._enableLayerDelete, this).on("layerremove", this._disableLayerDelete, this));
  }, disable: function() {
    this._enabled && (this._deletableLayers.off("layeradd", this._enableLayerDelete, this).off("layerremove", this._disableLayerDelete, this), L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.DELETESTOP, { handler: this.type }), this.fire("disabled", { handler: this.type }));
  }, addHooks: function() {
    var T = this._map;
    T && (T.getContainer().focus(), this._deletableLayers.eachLayer(this._enableLayerDelete, this), this._deletedLayers = new L.LayerGroup(), this._tooltip = new L.Draw.Tooltip(this._map), this._tooltip.updateContent({ text: L.drawLocal.edit.handlers.remove.tooltip.text }), this._map.on("mousemove", this._onMouseMove, this));
  }, removeHooks: function() {
    this._map && (this._deletableLayers.eachLayer(this._disableLayerDelete, this), this._deletedLayers = null, this._tooltip.dispose(), this._tooltip = null, this._map.off("mousemove", this._onMouseMove, this));
  }, revertLayers: function() {
    this._deletedLayers.eachLayer(function(T) {
      this._deletableLayers.addLayer(T), T.fire("revert-deleted", { layer: T });
    }, this);
  }, save: function() {
    this._map.fire(L.Draw.Event.DELETED, { layers: this._deletedLayers });
  }, removeAllLayers: function() {
    this._deletableLayers.eachLayer(function(T) {
      this._removeLayer({ layer: T });
    }, this), this.save();
  }, _enableLayerDelete: function(T) {
    (T.layer || T.target || T).on("click", this._removeLayer, this);
  }, _disableLayerDelete: function(T) {
    var C = T.layer || T.target || T;
    C.off("click", this._removeLayer, this), this._deletedLayers.removeLayer(C);
  }, _removeLayer: function(T) {
    var C = T.layer || T.target || T;
    this._deletableLayers.removeLayer(C), this._deletedLayers.addLayer(C), C.fire("deleted");
  }, _onMouseMove: function(T) {
    this._tooltip.updatePosition(T.latlng);
  }, _hasAvailableLayers: function() {
    return this._deletableLayers.getLayers().length !== 0;
  } });
})(window, document);
typeof document > "u" && console.warn('"window.document" is undefined; leaflet.fullscreen requires this object to access the DOM');
const nativeAPI = (() => {
  const z = [
    // Standard
    [
      "requestFullscreen",
      "exitFullscreen",
      "fullscreenElement",
      "fullscreenEnabled",
      "fullscreenchange",
      "fullscreenerror"
    ],
    // New WebKit
    [
      "webkitRequestFullscreen",
      "webkitExitFullscreen",
      "webkitFullscreenElement",
      "webkitFullscreenEnabled",
      "webkitfullscreenchange",
      "webkitfullscreenerror"
    ]
  ], B = z[0], Z = {};
  for (const F of z)
    if (F[1] in document) {
      for (let T = 0; T < F.length; T++)
        Z[B[T]] = F[T];
      return Z;
    }
  return !1;
})(), eventNameMap = {
  change: nativeAPI.fullscreenchange,
  error: nativeAPI.fullscreenerror
}, fullscreenAPI = {
  // Request fullscreen for a specific element
  async request(z, B) {
    z = z || document.documentElement;
    const Z = nativeAPI.requestFullscreen;
    await this._callNative(() => z[Z](B));
  },
  // Exit fullscreen mode
  async exit() {
    if (!this.isFullscreen)
      return;
    const z = nativeAPI.exitFullscreen;
    await this._callNative(() => document[z]());
  },
  // Helper to handle browser differences (Promise vs Event)
  async _callNative(z) {
    const B = z();
    if (B instanceof Promise) {
      await B;
      return;
    }
    await new Promise((Z) => {
      const F = () => {
        this.off("change", F), Z();
      };
      this.on("change", F);
    });
  },
  // Add event listener for fullscreen changes
  on(z, B) {
    const Z = eventNameMap[z];
    Z && document.addEventListener(Z, B);
  },
  // Remove event listener
  off(z, B) {
    const Z = eventNameMap[z];
    Z && document.removeEventListener(Z, B);
  },
  nativeAPI
};
Object.defineProperties(fullscreenAPI, {
  isFullscreen: {
    get() {
      return !!document[nativeAPI.fullscreenElement];
    }
  },
  isEnabled: {
    enumerable: !0,
    get() {
      return !!document[nativeAPI.fullscreenEnabled];
    }
  }
});
const FullScreen = leafletSrcExports.Control.extend({
  options: {
    position: "topleft",
    title: "Full Screen",
    titleCancel: "Exit Full Screen",
    forceSeparateButton: !1,
    forcePseudoFullscreen: !1,
    fullscreenElement: !1
  },
  _screenfull: fullscreenAPI,
  onAdd(z) {
    let B = "leaflet-control-zoom-fullscreen", Z, F = "";
    return z.zoomControl && !this.options.forceSeparateButton ? Z = z.zoomControl._container : Z = leafletSrcExports.DomUtil.create("div", "leaflet-bar"), this.options.content ? F = this.options.content : B += " leaflet-fullscreen-icon", this._createButton(this.options.title, B, F, Z, this.toggleFullScreen, this), this._map.fullscreenControl = this, this._map.on("enterFullscreen exitFullscreen", this._toggleState, this), Z;
  },
  onRemove() {
    leafletSrcExports.DomEvent.off(this.link, "click", leafletSrcExports.DomEvent.stop).off(this.link, "click", this.toggleFullScreen, this), this._screenfull.isEnabled && (leafletSrcExports.DomEvent.off(this._container, this._screenfull.nativeAPI.fullscreenchange, leafletSrcExports.DomEvent.stop).off(this._container, this._screenfull.nativeAPI.fullscreenchange, this._handleFullscreenChange, this), leafletSrcExports.DomEvent.off(document, this._screenfull.nativeAPI.fullscreenchange, leafletSrcExports.DomEvent.stop).off(document, this._screenfull.nativeAPI.fullscreenchange, this._handleFullscreenChange, this));
  },
  _createButton(z, B, Z, F, T, C) {
    return this.link = leafletSrcExports.DomUtil.create("a", B, F), this.link.href = "#", this.link.title = z, this.link.innerHTML = Z, this.link.setAttribute("role", "button"), this.link.setAttribute("aria-label", z), leafletSrcExports.DomEvent.disableClickPropagation(F), leafletSrcExports.DomEvent.on(this.link, "click", leafletSrcExports.DomEvent.stop).on(this.link, "click", T, C), this._screenfull.isEnabled && (leafletSrcExports.DomEvent.on(F, this._screenfull.nativeAPI.fullscreenchange, leafletSrcExports.DomEvent.stop).on(F, this._screenfull.nativeAPI.fullscreenchange, this._handleFullscreenChange, C), leafletSrcExports.DomEvent.on(document, this._screenfull.nativeAPI.fullscreenchange, leafletSrcExports.DomEvent.stop).on(document, this._screenfull.nativeAPI.fullscreenchange, this._handleFullscreenChange, C)), this.link;
  },
  toggleFullScreen() {
    const z = this._map;
    if (z._exitFired = !1, z._isFullscreen) {
      if (this._screenfull.isEnabled && !this.options.forcePseudoFullscreen)
        this._screenfull.exit().then(() => z.invalidateSize());
      else {
        const B = this.options.fullscreenElement ? this.options.fullscreenElement : z._container;
        B && B.classList && B.classList.remove("leaflet-pseudo-fullscreen"), z.invalidateSize();
      }
      z.fire("exitFullscreen"), z._exitFired = !0, z._isFullscreen = !1;
    } else {
      if (this._screenfull.isEnabled && !this.options.forcePseudoFullscreen)
        this._screenfull.request(this.options.fullscreenElement ? this.options.fullscreenElement : z._container).then(() => z.invalidateSize());
      else {
        const B = this.options.fullscreenElement ? this.options.fullscreenElement : z._container;
        B && B.classList && B.classList.add("leaflet-pseudo-fullscreen"), z.invalidateSize();
      }
      z.fire("enterFullscreen"), z._isFullscreen = !0;
    }
  },
  _toggleState() {
    this.link.title = this._map._isFullscreen ? this.options.title : this.options.titleCancel, this.link && this.link.classList && (this._map._isFullscreen ? this.link.classList.remove("leaflet-fullscreen-on") : this.link.classList.add("leaflet-fullscreen-on"));
  },
  _handleFullscreenChange(z) {
    const B = this._map, Z = this.options.fullscreenElement || B.getContainer(), F = z.target === Z, T = !this._screenfull.isFullscreen && !B._exitFired;
    F && T && (B._exitFired = !0, B.fire("exitFullscreen"), B._isFullscreen = !1, this._screenfull.exit().then(() => B.invalidateSize()));
  }
});
leafletSrcExports.Map.include({
  toggleFullscreen() {
    this.fullscreenControl.toggleFullScreen();
  }
});
function e() {
  return e = Object.assign ? Object.assign.bind() : function(z) {
    for (var B = 1; B < arguments.length; B++) {
      var Z = arguments[B];
      for (var F in Z) Object.prototype.hasOwnProperty.call(Z, F) && (z[F] = Z[F]);
    }
    return z;
  }, e.apply(this, arguments);
}
function r(z, B) {
  z.prototype = Object.create(B.prototype), z.prototype.constructor = z, n(z, B);
}
function n(z, B) {
  return n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(Z, F) {
    return Z.__proto__ = F, Z;
  }, n(z, B);
}
function o() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function i(z, B, Z) {
  return i = o() ? Reflect.construct.bind() : function(F, T, C) {
    var O = [null];
    O.push.apply(O, T);
    var R = new (Function.bind.apply(F, O))();
    return C && n(R, C.prototype), R;
  }, i.apply(null, arguments);
}
function s(z, B, Z, F) {
  B === void 0 && (B = ""), F === void 0 && (F = {});
  var T = document.createElement(z);
  return B && (T.className = B), Object.keys(F).forEach(function(C) {
    if (typeof F[C] == "function") {
      var O = C.indexOf("on") === 0 ? C.substr(2).toLowerCase() : C;
      T.addEventListener(O, F[C]);
    } else C === "html" ? T.innerHTML = F[C] : C === "text" ? T.innerText = F[C] : T.setAttribute(C, F[C]);
  }), Z && Z.appendChild(T), T;
}
function a(z) {
  z.preventDefault(), z.stopPropagation();
}
var l = function() {
  return [].slice.call(arguments).filter(Boolean).join(" ").trim();
};
function c(z, B) {
  z && z.classList && (Array.isArray(B) ? B : [B]).forEach(function(Z) {
    z.classList.contains(Z) || z.classList.add(Z);
  });
}
function u(z, B) {
  z && z.classList && (Array.isArray(B) ? B : [B]).forEach(function(Z) {
    z.classList.contains(Z) && z.classList.remove(Z);
  });
}
var h, p = 13, d = 40, f = 38, m = [p, 27, d, f, 37, 39], v = /* @__PURE__ */ (function() {
  function z(Z) {
    var F = this, T = Z.handleSubmit, C = Z.searchLabel, O = Z.classNames, R = O === void 0 ? {} : O;
    this.container = void 0, this.form = void 0, this.input = void 0, this.handleSubmit = void 0, this.hasError = !1, this.container = s("div", l("geosearch", R.container)), this.form = s("form", ["", R.form].join(" "), this.container, { autocomplete: "none", onClick: a, onDblClick: a, touchStart: a, touchEnd: a }), this.input = s("input", ["glass", R.input].join(" "), this.form, { type: "text", placeholder: C || "search", onInput: this.onInput, onKeyUp: function(U) {
      return F.onKeyUp(U);
    }, onKeyPress: function(U) {
      return F.onKeyPress(U);
    }, onFocus: this.onFocus, onBlur: this.onBlur, onClick: function() {
      F.input.focus(), F.input.dispatchEvent(new Event("focus"));
    } }), this.handleSubmit = T;
  }
  var B = z.prototype;
  return B.onFocus = function() {
    c(this.form, "active");
  }, B.onBlur = function() {
    u(this.form, "active");
  }, B.onSubmit = function(Z) {
    try {
      var F = this;
      return a(Z), u(T = F.container, "error"), c(T, "pending"), Promise.resolve(F.handleSubmit({ query: F.input.value })).then(function() {
        u(F.container, "pending");
      });
    } catch (C) {
      return Promise.reject(C);
    }
    var T;
  }, B.onInput = function() {
    this.hasError && (u(this.container, "error"), this.hasError = !1);
  }, B.onKeyUp = function(Z) {
    Z.keyCode === 27 && (u(this.container, ["pending", "active"]), this.input.value = "", document.body.focus(), document.body.blur());
  }, B.onKeyPress = function(Z) {
    Z.keyCode === p && this.onSubmit(Z);
  }, B.setQuery = function(Z) {
    this.input.value = Z;
  }, z;
})(), g = /* @__PURE__ */ (function() {
  function z(Z) {
    var F = this, T = Z.handleClick, C = Z.classNames, O = C === void 0 ? {} : C, R = Z.notFoundMessage;
    this.handleClick = void 0, this.selected = -1, this.results = [], this.container = void 0, this.resultItem = void 0, this.notFoundMessage = void 0, this.onClick = function(U) {
      if (typeof F.handleClick == "function") {
        var W = U.target;
        if (W && F.container.contains(W) && W.hasAttribute("data-key")) {
          var V = Number(W.getAttribute("data-key"));
          F.handleClick({ result: F.results[V] });
        }
      }
    }, this.handleClick = T, this.notFoundMessage = R ? s("div", l(O.notfound), void 0, { html: R }) : void 0, this.container = s("div", l("results", O.resultlist)), this.container.addEventListener("click", this.onClick, !0), this.resultItem = s("div", l(O.item));
  }
  var B = z.prototype;
  return B.render = function(Z, F) {
    var T = this;
    Z === void 0 && (Z = []), this.clear(), Z.forEach(function(C, O) {
      var R = T.resultItem.cloneNode(!0);
      R.setAttribute("data-key", "" + O), R.innerHTML = F({ result: C }), T.container.appendChild(R);
    }), Z.length > 0 ? (c(this.container.parentElement, "open"), c(this.container, "active")) : this.notFoundMessage && (this.container.appendChild(this.notFoundMessage), c(this.container.parentElement, "open")), this.results = Z;
  }, B.select = function(Z) {
    return Array.from(this.container.children).forEach(function(F, T) {
      return T === Z ? c(F, "active") : u(F, "active");
    }), this.selected = Z, this.results[Z];
  }, B.count = function() {
    return this.results ? this.results.length : 0;
  }, B.clear = function() {
    for (this.selected = -1; this.container.lastChild; ) this.container.removeChild(this.container.lastChild);
    u(this.container.parentElement, "open"), u(this.container, "active");
  }, z;
})(), y = { position: "topleft", style: "button", showMarker: !0, showPopup: !1, popupFormat: function(z) {
  return "" + z.result.label;
}, resultFormat: function(z) {
  return "" + z.result.label;
}, marker: { icon: t && leafletSrcExports.Icon ? new leafletSrcExports.Icon.Default() : void 0, draggable: !1 }, maxMarkers: 1, maxSuggestions: 5, retainZoomLevel: !1, animateZoom: !0, searchLabel: "Enter address", clearSearchLabel: "Clear search", notFoundMessage: "", messageHideDelay: 3e3, zoomLevel: 18, classNames: { container: "leaflet-bar leaflet-control leaflet-control-geosearch", button: "leaflet-bar-part leaflet-bar-part-single", resetButton: "reset", msgbox: "leaflet-bar message", form: "", input: "", resultlist: "", item: "", notfound: "leaflet-bar-notfound" }, autoComplete: !0, autoCompleteDelay: 250, autoClose: !1, keepResult: !1, updateMap: !0, resetButton: "×" }, b = "Leaflet must be loaded before instantiating the GeoSearch control", E = { options: e({}, y), classNames: e({}, y.classNames), initialize: function(z) {
  var B, Z, F, T, C = this;
  if (!t) throw new Error(b);
  if (!z.provider) throw new Error("Provider is missing from options");
  this.options = e({}, y, z), this.classNames = e({}, this.classNames, z.classNames), this.markers = new leafletSrcExports.FeatureGroup(), this.classNames.container += " leaflet-geosearch-" + this.options.style, this.searchElement = new v({ searchLabel: this.options.searchLabel, classNames: { container: this.classNames.container, form: this.classNames.form, input: this.classNames.input }, handleSubmit: function(O) {
    return C.onSubmit(O);
  } }), this.button = s("a", this.classNames.button, this.searchElement.container, { title: this.options.searchLabel, href: "#", onClick: function(O) {
    return C.onClick(O);
  } }), leafletSrcExports.DomEvent.disableClickPropagation(this.button), this.resetButton = s("button", this.classNames.resetButton, this.searchElement.form, { text: this.options.resetButton, "aria-label": this.options.clearSearchLabel, onClick: function() {
    C.searchElement.input.value === "" ? C.close() : C.clearResults(null, !0);
  } }), leafletSrcExports.DomEvent.disableClickPropagation(this.resetButton), this.options.autoComplete && (this.resultList = new g({ handleClick: function(O) {
    var R = O.result;
    C.searchElement.input.value = R.label, C.onSubmit({ query: R.label, data: R });
  }, classNames: { resultlist: this.classNames.resultlist, item: this.classNames.item, notfound: this.classNames.notfound }, notFoundMessage: this.options.notFoundMessage }), this.searchElement.form.appendChild(this.resultList.container), this.searchElement.input.addEventListener("keyup", (B = function(O) {
    return C.autoSearch(O);
  }, (Z = this.options.autoCompleteDelay) === void 0 && (Z = 250), F === void 0 && (F = !1), function() {
    var O = [].slice.call(arguments);
    T && clearTimeout(T), T = setTimeout(function() {
      T = null, F || B.apply(void 0, O);
    }, Z), F && !T && B.apply(void 0, O);
  }), !0), this.searchElement.input.addEventListener("keydown", function(O) {
    return C.selectResult(O);
  }, !0), this.searchElement.input.addEventListener("keydown", function(O) {
    return C.clearResults(O, !0);
  }, !0)), this.searchElement.form.addEventListener("click", function(O) {
    O.preventDefault();
  }, !1);
}, onAdd: function(z) {
  var B = this.options, Z = B.showMarker, F = B.style;
  if (this.map = z, Z && this.markers.addTo(z), F === "bar") {
    var T = z.getContainer().querySelector(".leaflet-control-container");
    this.container = s("div", "leaflet-control-geosearch leaflet-geosearch-bar"), this.container.appendChild(this.searchElement.form), T.appendChild(this.container);
  }
  return leafletSrcExports.DomEvent.disableClickPropagation(this.searchElement.form), this.searchElement.container;
}, onRemove: function() {
  var z;
  return (z = this.container) == null || z.remove(), this;
}, open: function() {
  var z = this.searchElement, B = z.input;
  c(z.container, "active"), B.focus();
}, close: function() {
  u(this.searchElement.container, "active"), this.clearResults();
}, onClick: function(z) {
  z.preventDefault(), z.stopPropagation(), this.searchElement.container.classList.contains("active") ? this.close() : this.open();
}, selectResult: function(z) {
  if ([p, d, f].indexOf(z.keyCode) !== -1) if (z.preventDefault(), z.keyCode !== p) {
    var B = this.resultList.count() - 1;
    if (!(B < 0)) {
      var Z = this.resultList.selected, F = z.keyCode === d ? Z + 1 : Z - 1, T = this.resultList.select(F < 0 ? B : F > B ? 0 : F);
      this.searchElement.input.value = T.label;
    }
  } else {
    var C = this.resultList.select(this.resultList.selected);
    this.onSubmit({ query: this.searchElement.input.value, data: C });
  }
}, clearResults: function(z, B) {
  if (B === void 0 && (B = !1), !z || z.keyCode === 27) {
    var Z = this.options, F = Z.autoComplete;
    !B && Z.keepResult || (this.searchElement.input.value = "", this.markers.clearLayers()), F && this.resultList.clear();
  }
}, autoSearch: function(z) {
  try {
    var B = this;
    if (m.indexOf(z.keyCode) > -1) return Promise.resolve();
    var Z = z.target.value, F = B.options.provider, T = (function() {
      if (Z.length) return Promise.resolve(F.search({ query: Z })).then(function(C) {
        C = C.slice(0, B.options.maxSuggestions), B.resultList.render(C, B.options.resultFormat);
      });
      B.resultList.clear();
    })();
    return Promise.resolve(T && T.then ? T.then(function() {
    }) : void 0);
  } catch (C) {
    return Promise.reject(C);
  }
}, onSubmit: function(z) {
  try {
    var B = this;
    return B.resultList.clear(), Promise.resolve(B.options.provider.search(z)).then(function(Z) {
      Z && Z.length > 0 && B.showResult(Z[0], z);
    });
  } catch (Z) {
    return Promise.reject(Z);
  }
}, showResult: function(z, B) {
  var Z = this.options, F = Z.autoClose, T = Z.updateMap, C = this.markers.getLayers();
  C.length >= this.options.maxMarkers && this.markers.removeLayer(C[0]);
  var O = this.addMarker(z, B);
  T && this.centerMap(z), this.map.fireEvent("geosearch/showlocation", { location: z, marker: O }), F && this.closeResults();
}, closeResults: function() {
  var z = this.searchElement.container;
  z.classList.contains("active") && u(z, "active"), this.clearResults();
}, addMarker: function(z, B) {
  var Z = this, F = this.options, T = F.marker, C = F.showPopup, O = F.popupFormat, R = new leafletSrcExports.Marker([z.y, z.x], T), U = z.label;
  return typeof O == "function" && (U = O({ query: B, result: z })), R.bindPopup(U), this.markers.addLayer(R), C && R.openPopup(), T.draggable && R.on("dragend", function(W) {
    Z.map.fireEvent("geosearch/marker/dragend", { location: R.getLatLng(), event: W });
  }), R;
}, centerMap: function(z) {
  var B = this.options, Z = B.retainZoomLevel, F = B.animateZoom, T = z.bounds ? new leafletSrcExports.LatLngBounds(z.bounds) : new leafletSrcExports.LatLng(z.y, z.x).toBounds(10), C = T.isValid() ? T : this.markers.getBounds();
  !Z && T.isValid() && !z.bounds || Z || !T.isValid() ? this.map.setView(C.getCenter(), this.getZoom(), { animate: F }) : this.map.fitBounds(C, { animate: F });
}, getZoom: function() {
  var z = this.options, B = z.zoomLevel;
  return z.retainZoomLevel ? this.map.getZoom() : B;
} };
function w() {
  if (!t) throw new Error(b);
  var z = leafletSrcExports.Control.extend(E);
  return i(z, [].slice.call(arguments));
}
(function(z) {
  z[z.SEARCH = 0] = "SEARCH", z[z.REVERSE = 1] = "REVERSE";
})(h || (h = {}));
var x = /* @__PURE__ */ (function() {
  function z(Z) {
    Z === void 0 && (Z = {}), this.options = void 0, this.options = Z;
  }
  var B = z.prototype;
  return B.getParamString = function(Z) {
    Z === void 0 && (Z = {});
    var F = e({}, this.options.params, Z);
    return Object.keys(F).map(function(T) {
      return encodeURIComponent(T) + "=" + encodeURIComponent(F[T]);
    }).join("&");
  }, B.getUrl = function(Z, F) {
    return Z + "?" + this.getParamString(F);
  }, B.search = function(Z) {
    try {
      var F = this, T = F.endpoint({ query: Z.query, type: h.SEARCH });
      return Promise.resolve(fetch(T)).then(function(C) {
        return Promise.resolve(C.json()).then(function(O) {
          return F.parse({ data: O });
        });
      });
    } catch (C) {
      return Promise.reject(C);
    }
  }, z;
})(), L$1 = /* @__PURE__ */ (function(z) {
  function B() {
    for (var F, T = arguments.length, C = new Array(T), O = 0; O < T; O++) C[O] = arguments[O];
    return (F = z.call.apply(z, [this].concat(C)) || this).searchUrl = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/find", F;
  }
  r(B, z);
  var Z = B.prototype;
  return Z.endpoint = function(F) {
    var T = F.query, C = typeof T == "string" ? { text: T } : T;
    return C.f = "json", this.getUrl(this.searchUrl, C);
  }, Z.parse = function(F) {
    return F.data.locations.map(function(T) {
      return { x: T.feature.geometry.x, y: T.feature.geometry.y, label: T.name, bounds: [[T.extent.ymin, T.extent.xmin], [T.extent.ymax, T.extent.xmax]], raw: T };
    });
  }, B;
})(x);
var I;
(function(z) {
  z[z.INITIALIZED = 0] = "INITIALIZED", z[z.LOADING = 1] = "LOADING", z[z.SUCCESS = 2] = "SUCCESS", z[z.FAILURE = 3] = "FAILURE";
})(I || (I = {}));
class LeafletMapCore {
  constructor(z, B = "/vendor/filament-leaflet/images") {
    this.map = null, this.config = z, this.imgsPath = B, this.layers = [], this.layerGroups = {}, this.baseLayers = {}, this.geoJsonLayer = null, this.info = null, this.layerControl = null, this.editableLayers = null, this.isDrawing = !1;
  }
  /**
   * Inicializa o mapa com todas as configurações
   */
  init() {
    this.createMap(), this.addTileLayers(), this.addLayerGroups(), this.setupMapControls(), Object.keys(this.config.geoJsonData)?.length && (this.setupInfoControl(), this.loadGeoJson()), this.addLayers(), this.setupLayerControl();
  }
  /**
   * Obtém tradução do sistema
   */
  getTranslation(z, B = "") {
    return window.filamentData?.translations?.[z] || B;
  }
  /**
   * Cria o mapa base
   */
  createMap() {
    this.map = L$2.map(this.config.mapId, this.config.mapConfig || {}).setView(this.config.defaultCoord, this.config.defaultZoom), new ResizeObserver(() => {
      this.map && Alpine.raw(this.map).invalidateSize();
    }).observe(Alpine.raw(this.map)._container);
  }
  /**
   * Adiciona camadas de tiles ao mapa
   */
  addTileLayers() {
    this.config.tileLayersUrl.forEach(([z, B, Z], F) => {
      const T = L$2.tileLayer(B, {
        maxZoom: this.config.zoomConfig.max,
        minZoom: this.config.zoomConfig.min,
        attribution: Z || ""
      });
      this.baseLayers[z] = T, F === 0 && T.addTo(Alpine.raw(this.map));
    });
  }
  /**
   * Configura o controle de informações
   */
  setupInfoControl() {
    this.info = L$2.control(), this.info.onAdd = () => {
      const z = L$2.DomUtil.create("div", "info");
      return this.info._div = z, z.style.display = "none", z;
    }, this.info.update = (z) => {
      if (this.info._div)
        if (z) {
          this.info._div.style.display = "block";
          let B = this.config.infoText.replace("{state}", z.name).replace("{density}", z.density);
          this.info._div.innerHTML = B;
        } else
          this.info._div.style.display = "none";
    }, this.info.addTo(Alpine.raw(this.map));
  }
  /**
   * Carrega dados GeoJSON
   */
  async loadGeoJson() {
    if (this.config.geoJsonUrl)
      try {
        const B = await (await fetch(this.config.geoJsonUrl)).json(), Z = Object.entries(this.config.geoJsonData).filter(([F]) => B[F]).map(([F, T]) => ({
          type: "Feature",
          id: F,
          properties: {
            name: B[F].name,
            density: T
          },
          geometry: {
            type: "Polygon",
            coordinates: B[F].coordinates
          }
        }));
        this.geoJsonLayer = L$2.geoJson({
          type: "FeatureCollection",
          features: Z
        }, {
          style: (F) => this.getFeatureStyle(F),
          onEachFeature: (F, T) => {
            T.on({
              mouseover: (C) => this.info?.update(C.target.feature.properties),
              mouseout: () => this.info?.update(),
              click: (C) => Alpine.raw(this.map).fitBounds(C.target.getBounds())
            });
          }
        }).addTo(Alpine.raw(this.map));
      } catch (z) {
        console.error("Erro GeoJSON:", z);
      }
  }
  /**
   * Obtém o estilo de uma feature GeoJSON
   */
  getFeatureStyle(z) {
    const B = Object.values(this.config.geoJsonData), Z = z.properties.density / Math.max(...B), F = Math.max(0, Math.ceil(Z * this.config.geoJsonColors.length) - 1);
    return {
      fillColor: this.config.geoJsonColors[F],
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.8
    };
  }
  /**
   * Adiciona camadas ao mapa
   * Callback onLayerClick pode ser passado para personalizar o comportamento
   */
  addLayers(callbacks = {}) {
    const layers = this.config.layers;
    layers?.length && layers.forEach((layerData) => {
      let layer = null;
      switch (layerData.type) {
        case "marker":
          layer = this.createMarker(layerData);
          break;
        case "circle":
          layer = this.createCircle(layerData);
          break;
        case "circleMarker":
          layer = this.createCircleMarker(layerData);
          break;
        case "rectangle":
          layer = this.createRectangle(layerData);
          break;
        case "polygon":
          layer = this.createPolygon(layerData);
          break;
        case "polyline":
          layer = this.createPolyline(layerData);
          break;
        default:
          console.warn(`Tipo de layer desconhecido: ${layerData.type}`);
          return;
      }
      layer && (layer.options.layerId = layerData.id || null, layer.options.group = layerData.group || null, layerData.popup && this.bindPopup(layer, layerData.popup), layerData.tooltip && this.bindTooltip(layer, layerData.tooltip), layerData.clickAction && callbacks.onLayerClick && layer.on("click", () => {
        callbacks.onLayerClick(layer.options.layerId);
      }), layerData.onMouseOver && layer.on("mouseover", function() {
        eval(layerData.onMouseOver);
      }), layerData.onMouseOut && layer.on("mouseout", function() {
        eval(layerData.onMouseOut);
      }), layerData.editable && this.editableLayers.addLayer(layer), layerData.group ? this.layerGroups[layerData.group].layer.addLayer(layer) : layer.addTo(Alpine.raw(this.map)), this.layers.push(layer));
    });
  }
  /**
   * Adiciona grupos de camadas
   */
  addLayerGroups() {
    this.editableLayers = new L$2.FeatureGroup(), this.editableLayers.addTo(Alpine.raw(this.map)), !(!Object.keys(this.config.layerGroups)?.length > 0) && this.config.layerGroups.forEach((z) => {
      let B = null;
      switch (z.type) {
        case "group":
          B = L$2.layerGroup(z.options);
          break;
        case "feature":
          B = L$2.featureGroup(z.options);
          break;
        case "cluster":
          B = L$2.markerClusterGroup(z.options);
          break;
      }
      B && (B.addTo(Alpine.raw(this.map)), this.layerGroups[z.id] = {
        name: z.name,
        layer: B
      });
    });
  }
  /**
   * Cria um marcador
   */
  createMarker(z) {
    return !z.lat || !z.lng ? null : L$2.marker([z.lat, z.lng], {
      icon: this.createIcon(z),
      draggable: z.draggable || !1
    });
  }
  /**
   * Cria um círculo
   */
  createCircle(z) {
    return z.center ? L$2.circle(z.center, z.options || {}) : null;
  }
  /**
   * Cria um marcador circular
   */
  createCircleMarker(z) {
    return z.center ? L$2.circleMarker(z.center, z.options || {}) : null;
  }
  /**
   * Cria um retângulo
   */
  createRectangle(z) {
    return z.bounds ? L$2.rectangle(z.bounds, z.options || {}) : null;
  }
  /**
   * Cria um polígono
   */
  createPolygon(z) {
    return z.points ? L$2.polygon(z.points, z.options || {}) : null;
  }
  /**
   * Cria uma polilinha
   */
  createPolyline(z) {
    return z.points ? L$2.polyline(z.points, z.options || {}) : null;
  }
  /**
   * Cria um ícone para marcadores
   */
  createIcon(z) {
    const B = {
      iconSize: z.iconSize || [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    };
    if (z.icon)
      B.iconUrl = z.icon;
    else {
      const Z = z.color || "blue";
      B.iconUrl = `${this.imgsPath}/marker-icon-2x-${Z}.png`, B.shadowUrl = `${this.imgsPath}/marker-shadow.png`;
    }
    return L$2.icon(B);
  }
  /**
   * Vincula popup a uma camada
   */
  bindPopup(z, B) {
    let Z = '<div class="custom-popup">';
    B.title && (Z += `<h4>${B.title}</h4>`), B.content && (Z += B.content), B.fields && Object.keys(B.fields).length > 0 && Object.entries(B.fields).forEach(([F, T]) => {
      Z += `<p><span class="field-label">${F}:</span> ${T}</p>`;
    }), Z += "</div>", z.bindPopup(Z, B.options || {});
  }
  /**
   * Vincula tooltip a uma camada
   */
  bindTooltip(z, B) {
    const Z = B.content, F = B.options || {};
    z.bindTooltip(Z, F);
  }
  /**
   * Configura o controle de camadas
   */
  setupLayerControl() {
    let z = Object.values(this.layerGroups).filter((F) => F && F.name).map((F) => [F.name, F.layer]);
    z = Object.fromEntries(z);
    const B = Object.keys(this.baseLayers)?.length > 1, Z = Object.keys(z)?.length > 0;
    !B && !Z || (this.layerControl && Alpine.raw(this.map).removeControl(this.layerControl), this.layerControl = L$2.control.layers(
      this.baseLayers,
      z
    ).addTo(Alpine.raw(this.map)));
  }
  /**
   * Configura os controles do mapa
   */
  setupMapControls() {
    this.config.mapControls.attributionControl && this.setupAttributionControl(), this.config.mapControls.scaleControl && this.setupScaleControl(), this.config.mapControls.zoomControl && this.setupZoomControl(), this.config.mapControls.fullscreenControl && this.setupFullscreenControl(), this.config.mapControls.searchControl && this.setupSearchControl(), this.config.mapControls.drawControl && this.setupDrawControl();
  }
  /**
   * Configura controle de atribuição
   */
  setupAttributionControl() {
    new L$2.control.attribution().addTo(Alpine.raw(this.map));
  }
  /**
   * Configura controle de escala
   */
  setupScaleControl() {
    new L$2.control.scale().addTo(Alpine.raw(this.map));
  }
  /**
   * Configura controle de zoom
   */
  setupZoomControl() {
    new L$2.control.zoom().addTo(Alpine.raw(this.map));
  }
  /**
   * Configura controle de busca
   */
  setupSearchControl() {
    const z = new L$1();
    new w({
      provider: z,
      notFoundMessage: this.getTranslation("address_not_found", ""),
      searchLabel: this.getTranslation("enter_address", ""),
      marker: {
        icon: this.createIcon({
          color: "blue"
        }),
        draggable: !1
      }
    }).addTo(Alpine.raw(this.map));
  }
  /**
   * Configura controle de tela cheia
   */
  setupFullscreenControl() {
    new FullScreen({
      title: this.getTranslation("full_screen", ""),
      titleCancel: this.getTranslation("exit_full_screen", ""),
      forceSeparateButton: !0
    }).addTo(Alpine.raw(this.map));
  }
  /**
   * Configura controle de desenho
   */
  setupDrawControl() {
    const z = new L$2.Control.Draw({
      draw: {
        marker: {
          icon: this.createIcon({
            color: "blue"
          })
        }
      },
      edit: {
        featureGroup: this.editableLayers,
        poly: {
          allowIntersection: !1
        }
      }
    });
    this.setupDrawTranslations(), z.addTo(Alpine.raw(this.map));
  }
  /**
   * Configura traduções do controle de desenho
   */
  setupDrawTranslations() {
    L$2.drawLocal.draw.toolbar.buttons.marker = this.getTranslation("draw_marker", "Marker"), L$2.drawLocal.draw.toolbar.buttons.polygon = this.getTranslation("draw_polygon", "Polygon"), L$2.drawLocal.draw.toolbar.buttons.polyline = this.getTranslation("draw_polyline", "Polyline"), L$2.drawLocal.draw.toolbar.buttons.rectangle = this.getTranslation("draw_rectangle", "Rectangle"), L$2.drawLocal.draw.toolbar.buttons.circle = this.getTranslation("draw_circle", "Circle"), L$2.drawLocal.draw.toolbar.buttons.circlemarker = this.getTranslation("draw_circlemarker", "Circlemarker"), L$2.drawLocal.draw.handlers.circle.tooltip.start = this.getTranslation("draw_handlers_circle_tooltip_start", "Click and drag to draw a circle."), L$2.drawLocal.draw.handlers.circlemarker.tooltip.start = this.getTranslation("draw_handlers_circlemarker_tooltip_start", "Click map to place circle marker."), L$2.drawLocal.draw.handlers.marker.tooltip.start = this.getTranslation("draw_handlers_marker_tooltip_start", "Click map to place marker."), L$2.drawLocal.draw.handlers.polygon.tooltip.start = this.getTranslation("draw_handlers_polygon_tooltip_start", "Click to start drawing polygon."), L$2.drawLocal.draw.handlers.polygon.tooltip.cont = this.getTranslation("draw_handlers_polygon_tooltip_cont", "Click to continue drawing polygon."), L$2.drawLocal.draw.handlers.polygon.tooltip.end = this.getTranslation("draw_handlers_polygon_tooltip_end", "Click first point to close polygon."), L$2.drawLocal.draw.handlers.polyline.error = this.getTranslation("draw_handlers_polyline_error", "Line intersects itself."), L$2.drawLocal.draw.handlers.polyline.tooltip.start = this.getTranslation("draw_handlers_polyline_tooltip_start", "Click to start drawing polyline."), L$2.drawLocal.draw.handlers.polyline.tooltip.cont = this.getTranslation("draw_handlers_polyline_tooltip_cont", "Click to continue drawing polyline."), L$2.drawLocal.draw.handlers.polyline.tooltip.end = this.getTranslation("draw_handlers_polyline_tooltip_end", "Click last point to finish polyline."), L$2.drawLocal.draw.handlers.rectangle.tooltip.start = this.getTranslation("draw_handlers_rectangle_tooltip_start", "Click and drag to draw rectangle."), L$2.drawLocal.draw.handlers.simpleshape.tooltip.end = this.getTranslation("draw_handlers_simpleshape_tooltip_end", "Release mouse to finish drawing."), L$2.drawLocal.draw.toolbar.actions.title = this.getTranslation("draw_toolbar_actions_title", "Cancel drawing"), L$2.drawLocal.draw.toolbar.actions.text = this.getTranslation("draw_toolbar_actions_text", "Cancel"), L$2.drawLocal.draw.toolbar.finish.title = this.getTranslation("draw_toolbar_finish_title", "Finish drawing"), L$2.drawLocal.draw.toolbar.finish.text = this.getTranslation("draw_toolbar_finish_text", "Finish"), L$2.drawLocal.draw.toolbar.undo.title = this.getTranslation("draw_toolbar_undo_title", "Delete last point drawn"), L$2.drawLocal.draw.toolbar.undo.text = this.getTranslation("draw_toolbar_undo_text", "Delete last point"), L$2.drawLocal.edit.toolbar.buttons.edit = this.getTranslation("edit_toolbar_buttons_edit", "Edit layers"), L$2.drawLocal.edit.toolbar.buttons.editDisabled = this.getTranslation("edit_toolbar_buttons_editdisabled", "No layers to edit"), L$2.drawLocal.edit.toolbar.buttons.remove = this.getTranslation("edit_toolbar_buttons_remove", "Delete layers"), L$2.drawLocal.edit.toolbar.buttons.removeDisabled = this.getTranslation("edit_toolbar_buttons_removedisabled", "No layers to remove"), L$2.drawLocal.edit.toolbar.actions.save.title = this.getTranslation("edit_toolbar_actions_save_title", "Save changes"), L$2.drawLocal.edit.toolbar.actions.save.text = this.getTranslation("edit_toolbar_actions_save_text", "Save"), L$2.drawLocal.edit.toolbar.actions.cancel.title = this.getTranslation("edit_toolbar_actions_cancel_title", "Cancel changes"), L$2.drawLocal.edit.toolbar.actions.cancel.text = this.getTranslation("edit_toolbar_actions_cancel_text", "Cancel"), L$2.drawLocal.edit.toolbar.actions.clearAll.title = this.getTranslation("edit_toolbar_actions_clearAll_title", "Clear all"), L$2.drawLocal.edit.toolbar.actions.clearAll.text = this.getTranslation("edit_toolbar_actions_clearAll_text", "Clear all"), L$2.drawLocal.edit.handlers.edit.tooltip.text = this.getTranslation("edit_handlers_edit_tooltip_text", "Drag handles to edit geometry."), L$2.drawLocal.edit.handlers.edit.tooltip.subtext = this.getTranslation("edit_handlers_edit_tooltip_subtext", "Click cancel to undo changes."), L$2.drawLocal.edit.handlers.remove.tooltip.text = this.getTranslation("edit_handlers_remove_tooltip_text", "Click a feature to remove it.");
  }
  /**
   * Configura event handlers base
   * Callbacks podem ser passados para personalizar comportamento
   */
  setupEventHandlers(z = {}) {
    z.onMapLoad && z.onMapLoad(), Alpine.raw(this.map).on("click", (B) => {
      if (this.isDrawing) return;
      const Z = B.latlng;
      z.onMapClick && z.onMapClick(Z.lat, Z.lng);
    }), Alpine.raw(this.map).on("draw:drawstart", () => {
      this.isDrawing = !0;
    }), Alpine.raw(this.map).on("draw:drawstop", () => {
      this.isDrawing = !1;
    }), Alpine.raw(this.map).on("draw:canceled", () => {
      this.isDrawing = !1;
    }), Alpine.raw(this.map).on("draw:editstart", () => {
      this.isDrawing = !0;
    }), Alpine.raw(this.map).on("draw:editstop", () => {
      this.isDrawing = !1;
    }), Alpine.raw(this.map).on("draw:deletestart", () => {
      this.isDrawing = !0;
    }), Alpine.raw(this.map).on("draw:deletestop", () => {
      this.isDrawing = !1;
    }), Alpine.raw(this.map).on("draw:created", (B) => {
      B.layer.addTo(Alpine.raw(this.editableLayers));
    });
  }
  /**
   * Atualiza os dados do mapa
   */
  updateMapData(z, B = {}) {
    this.config = z, Object.keys(this.config.geoJsonData)?.length && (this.setupInfoControl(), this.loadGeoJson()), this.clearLayers(), this.addLayerGroups(), this.addLayers(B), this.setupLayerControl();
  }
  /**
   * Limpa todas as camadas do mapa
   */
  clearLayers() {
    this.layers.forEach((z) => {
      z.options.group ? Alpine.raw(this.layerGroups[z.options.group].layer).removeLayer(Alpine.raw(z)) : Alpine.raw(this.map).removeLayer(Alpine.raw(z));
    }), this.layers = [], Object.values(this.layerGroups).forEach(({ layer: z }) => {
      Alpine.raw(this.map).removeLayer(Alpine.raw(z));
    }), this.layerGroups = {}, this.layerControl && (Alpine.raw(this.map).removeControl(this.layerControl), this.layerControl = null);
  }
  /**
   * Destrói o mapa e limpa recursos
   */
  destroy() {
    this.map && (this.clearLayers(), Alpine.raw(this.map).remove(), this.map = null);
  }
}
document.addEventListener("livewire:init", () => {
  const z = (B, Z) => ({
    mapCore: null,
    config: Z,
    $wire: B,
    state: void 0,
    pickMarker: null,
    init() {
      this.mapCore = new LeafletMapCore(
        this.config,
        "/vendor/filament-leaflet/images"
      ), this.config.field && (this.state = this.getState()), this.mapCore.init(), this.setupEventHandlers(), this.setupLivewireListeners(), this.config.field && this.watchState();
    },
    /**
     * Obtém o estado atual do field
     */
    getState() {
      if (!this.config.field) return;
      const F = this.$wire.get(this.config.field.statePath);
      return {
        lat: F ? F[this.config.field.latitudeFieldName] : 0,
        lng: F ? F[this.config.field.longitudeFieldName] : 0
      };
    },
    /**
     * Define o estado do field
     */
    setState(F, T) {
      this.config.field && this.$wire.set(this.config.field.statePath, {
        [this.config.field.latitudeFieldName]: F,
        [this.config.field.longitudeFieldName]: T
      });
    },
    /**
     * Observa mudanças no estado do field
     */
    watchState() {
      this.config.field && this.$watch("state", (F) => {
        this.setState(F);
      });
    },
    updatePickMarker(F, T) {
      this.pickMarker && Alpine.raw(this.pickMarker).removeFrom(Alpine.raw(this.mapCore.map));
      let C = this.config.field.pickMarker;
      C.lat = F, C.lng = T, this.pickMarker = this.mapCore.createMarker(C), Alpine.raw(this.pickMarker).addTo(Alpine.raw(this.mapCore.map));
    },
    /**
     * Configura event handlers específicos para integração com Filament/Livewire
     */
    setupEventHandlers() {
      const F = {
        onMapLoad: () => {
          if (this.config.field) {
            const T = this.getState();
            this.updatePickMarker(T.lat, T.lng);
          }
        },
        onMapClick: (T, C) => {
          this.config.field ? (this.updatePickMarker(T, C), this.setState(T, C), this.$wire.callSchemaComponentMethod(
            this.config.field.key,
            "handleMapClick",
            {
              latitude: T,
              longitude: C
            }
          )) : this.$wire.call("handleMapClick", T, C);
        },
        onLayerClick: (T) => {
          this.config.field ? this.$wire.callSchemaComponentMethod(
            this.config.field.key,
            "handleLayerClick",
            { layerId: T }
          ) : this.$wire.call("handleLayerClick", [T]);
        }
      };
      this.mapCore.setupEventHandlers(F);
    },
    /**
     * Configura listeners específicos do Livewire
     */
    setupLivewireListeners() {
      window.addEventListener(`update-leaflet-${this.config.mapId}`, (F) => {
        this.updateMapData(F.detail.config);
      });
    },
    /**
     * Atualiza os dados do mapa
     */
    updateMapData(F) {
      this.config = F;
      const T = {
        onLayerClick: (C) => {
          this.config.field ? this.$wire.callSchemaComponentMethod(
            this.config.field.key,
            "handleLayerClick",
            { layerId: C }
          ) : this.$wire.call("handleLayerClick", [C]);
        }
      };
      this.mapCore.updateMapData(F, T);
    }
  });
  window.leafletMap = z;
});
