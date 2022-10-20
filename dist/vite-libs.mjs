import se from "quill";
function ye(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function de(r) {
  var o = r.default;
  if (typeof o == "function") {
    var l = function() {
      return o.apply(this, arguments);
    };
    l.prototype = o.prototype;
  } else
    l = {};
  return Object.defineProperty(l, "__esModule", {
    value: !0
  }), Object.keys(r).forEach(function(f) {
    var u = Object.getOwnPropertyDescriptor(r, f);
    Object.defineProperty(l, f, u.get ? u : {
      enumerable: !0,
      get: function() {
        return r[f];
      }
    });
  }), l;
}
var te = {}, k = {}, A = {}, w = {}, he = function(o) {
  return ve(o) && !ge(o);
};
function ve(r) {
  return !!r && typeof r == "object";
}
function ge(r) {
  var o = Object.prototype.toString.call(r);
  return o === "[object RegExp]" || o === "[object Date]" || be(r);
}
var pe = typeof Symbol == "function" && Symbol.for, me = pe ? Symbol.for("react.element") : 60103;
function be(r) {
  return r.$$typeof === me;
}
function _e(r) {
  return Array.isArray(r) ? [] : {};
}
function q(r, o) {
  return o.clone !== !1 && o.isMergeableObject(r) ? _(_e(r), r, o) : r;
}
function Oe(r, o, l) {
  return r.concat(o).map(function(f) {
    return q(f, l);
  });
}
function Se(r, o, l) {
  var f = {};
  return l.isMergeableObject(r) && Object.keys(r).forEach(function(u) {
    f[u] = q(r[u], l);
  }), Object.keys(o).forEach(function(u) {
    !l.isMergeableObject(o[u]) || !r[u] ? f[u] = q(o[u], l) : f[u] = _(r[u], o[u], l);
  }), f;
}
function _(r, o, l) {
  l = l || {}, l.arrayMerge = l.arrayMerge || Oe, l.isMergeableObject = l.isMergeableObject || he;
  var f = Array.isArray(o), u = Array.isArray(r), y = f === u;
  return y ? f ? l.arrayMerge(r, o, l) : Se(r, o, l) : q(o, l);
}
_.all = function(o, l) {
  if (!Array.isArray(o))
    throw new Error("first argument should be an array");
  return o.reduce(function(f, u) {
    return _(f, u, l);
  }, {});
};
var ke = _;
const Ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ke
}, Symbol.toStringTag, { value: "Module" })), we = /* @__PURE__ */ de(Ae);
var E = {}, N;
function b() {
  if (N)
    return E;
  N = 1, Object.defineProperty(E, "__esModule", {
    value: !0
  });
  var r = function() {
    function y(h, d) {
      for (var s = 0; s < d.length; s++) {
        var n = d[s];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(h, n.key, n);
      }
    }
    return function(h, d, s) {
      return d && y(h.prototype, d), s && y(h, s), h;
    };
  }(), o = m();
  l(o);
  function l(y) {
    return y && y.__esModule ? y : {
      default: y
    };
  }
  function f(y, h) {
    if (!(y instanceof h))
      throw new TypeError("Cannot call a class as a function");
  }
  var u = function() {
    function y(h) {
      f(this, y), this.formatter = h;
    }
    return r(y, [{
      key: "onCreate",
      value: function() {
      }
    }, {
      key: "onDestroy",
      value: function() {
      }
    }, {
      key: "onUpdate",
      value: function() {
      }
    }]), y;
  }();
  return E.default = u, E;
}
var F;
function m() {
  if (F)
    return w;
  F = 1, Object.defineProperty(w, "__esModule", {
    value: !0
  });
  var r = function() {
    function c(t, e) {
      for (var i = 0; i < e.length; i++) {
        var v = e[i];
        v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(t, v.key, v);
      }
    }
    return function(t, e, i) {
      return e && c(t.prototype, e), i && c(t, i), t;
    };
  }(), o = we, l = d(o), f = fe(), u = d(f), y = b();
  d(y);
  var h = O();
  d(h);
  function d(c) {
    return c && c.__esModule ? c : {
      default: c
    };
  }
  function s(c, t) {
    if (!(c instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  var n = function(t, e) {
    return e;
  }, a = function() {
    function c(t) {
      var e = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      s(this, c), this.onClick = function() {
        e.hide();
      }, this.quill = t, this.options = (0, l.default)(u.default, i, {
        arrayMerge: n
      }), this.currentSpec = null, this.actions = [], this.overlay = document.createElement("div"), this.overlay.classList.add(this.options.overlay.className), this.options.overlay.style && Object.assign(this.overlay.style, this.options.overlay.style), document.execCommand("enableObjectResizing", !1, "false"), this.quill.root.parentNode.style.position = this.quill.root.parentNode.style.position || "relative", this.quill.root.addEventListener("click", this.onClick), this.specs = this.options.specs.map(function(v) {
        return new v(e);
      }), this.specs.forEach(function(v) {
        return v.init();
      });
    }
    return r(c, [{
      key: "show",
      value: function(e) {
        this.currentSpec = e, this.currentSpec.setSelection(), this.setUserSelect("none"), this.quill.root.parentNode.appendChild(this.overlay), this.repositionOverlay(), this.createActions(e);
      }
    }, {
      key: "hide",
      value: function() {
        !this.currentSpec || (this.currentSpec.onHide(), this.currentSpec = null, this.quill.root.parentNode.removeChild(this.overlay), this.overlay.style.setProperty("display", "none"), this.setUserSelect(""), this.destroyActions());
      }
    }, {
      key: "update",
      value: function() {
        this.repositionOverlay(), this.actions.forEach(function(e) {
          return e.onUpdate();
        });
      }
    }, {
      key: "createActions",
      value: function(e) {
        var i = this;
        this.actions = e.getActions().map(function(v) {
          var g = new v(i);
          return g.onCreate(), g;
        });
      }
    }, {
      key: "destroyActions",
      value: function() {
        this.actions.forEach(function(e) {
          return e.onDestroy();
        }), this.actions = [];
      }
    }, {
      key: "repositionOverlay",
      value: function() {
        if (!!this.currentSpec) {
          var e = this.currentSpec.getOverlayElement();
          if (!!e) {
            var i = this.quill.root.parentNode, v = e.getBoundingClientRect(), g = i.getBoundingClientRect();
            Object.assign(this.overlay.style, {
              display: "block",
              left: v.left - g.left - 1 + i.scrollLeft + "px",
              top: v.top - g.top + i.scrollTop + "px",
              width: v.width + "px",
              height: v.height + "px"
            });
          }
        }
      }
    }, {
      key: "setUserSelect",
      value: function(e) {
        var i = this, v = ["userSelect", "mozUserSelect", "webkitUserSelect", "msUserSelect"];
        v.forEach(function(g) {
          i.quill.root.style.setProperty(g, e), document.documentElement && document.documentElement.style.setProperty(g, e);
        });
      }
    }]), c;
  }();
  return w.default = a, w;
}
var x = {}, j = {};
Object.defineProperty(j, "__esModule", {
  value: !0
});
var Ee = function() {
  function r(o, l) {
    for (var f = 0; f < l.length; f++) {
      var u = l[f];
      u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(o, u.key, u);
    }
  }
  return function(o, l, f) {
    return l && r(o.prototype, l), f && r(o, f), o;
  };
}();
function I(r, o, l) {
  return o in r ? Object.defineProperty(r, o, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[o] = l, r;
}
function xe(r, o) {
  if (!(r instanceof o))
    throw new TypeError("Cannot call a class as a function");
}
var H = "left", L = "center", U = "right", Pe = function() {
  function r(o) {
    var l = this, f;
    xe(this, r), this.applyStyle = o.aligner.applyStyle, this.alignAttribute = o.attribute, this.alignments = (f = {}, I(f, H, {
      name: H,
      icon: o.icons.left,
      apply: function(y) {
        l.setAlignment(y, H), l.setStyle(y, "inline", "left", "0 1em 1em 0");
      }
    }), I(f, L, {
      name: L,
      icon: o.icons.center,
      apply: function(y) {
        l.setAlignment(y, L), l.setStyle(y, "block", null, "auto");
      }
    }), I(f, U, {
      name: U,
      icon: o.icons.right,
      apply: function(y) {
        l.setAlignment(y, U), l.setStyle(y, "inline", "right", "0 0 1em 1em");
      }
    }), f);
  }
  return Ee(r, [{
    key: "getAlignments",
    value: function() {
      var l = this;
      return Object.keys(this.alignments).map(function(f) {
        return l.alignments[f];
      });
    }
  }, {
    key: "clear",
    value: function(l) {
      l.removeAttribute(this.alignAttribute), this.setStyle(l, null, null, null);
    }
  }, {
    key: "isAligned",
    value: function(l, f) {
      return l.getAttribute(this.alignAttribute) === f.name;
    }
  }, {
    key: "setAlignment",
    value: function(l, f) {
      l.setAttribute(this.alignAttribute, f);
    }
  }, {
    key: "setStyle",
    value: function(l, f, u, y) {
      this.applyStyle && (l.style.setProperty("display", f), l.style.setProperty("float", u), l.style.setProperty("margin", y));
    }
  }]), r;
}();
j.default = Pe;
var $ = {}, V;
function ne() {
  if (V)
    return $;
  V = 1;
  var r = m();
  o(r);
  function o(l) {
    return l && l.__esModule ? l : {
      default: l
    };
  }
  return $;
}
var P = {}, X;
function re() {
  if (X)
    return P;
  X = 1, Object.defineProperty(P, "__esModule", {
    value: !0
  });
  var r = function() {
    function y(h, d) {
      for (var s = 0; s < d.length; s++) {
        var n = d[s];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(h, n.key, n);
      }
    }
    return function(h, d, s) {
      return d && y(h.prototype, d), s && y(h, s), h;
    };
  }();
  ne();
  var o = m();
  l(o);
  function l(y) {
    return y && y.__esModule ? y : {
      default: y
    };
  }
  function f(y, h) {
    if (!(y instanceof h))
      throw new TypeError("Cannot call a class as a function");
  }
  var u = function() {
    function y() {
      f(this, y), this.toolbar = null, this.buttons = [];
    }
    return r(y, [{
      key: "create",
      value: function(d, s) {
        var n = document.createElement("div");
        return n.classList.add(d.options.align.toolbar.mainClassName), this.addToolbarStyle(d, n), this.addButtons(d, n, s), this.toolbar = n, this.toolbar;
      }
    }, {
      key: "destroy",
      value: function() {
        this.toolbar = null, this.buttons = [];
      }
    }, {
      key: "getElement",
      value: function() {
        return this.toolbar;
      }
    }, {
      key: "addToolbarStyle",
      value: function(d, s) {
        d.options.align.toolbar.mainStyle && Object.assign(s.style, d.options.align.toolbar.mainStyle);
      }
    }, {
      key: "addButtonStyle",
      value: function(d, s, n) {
        n.options.align.toolbar.buttonStyle && (Object.assign(d.style, n.options.align.toolbar.buttonStyle), s > 0 && (d.style.borderLeftWidth = "0")), n.options.align.toolbar.svgStyle && Object.assign(d.children[0].style, n.options.align.toolbar.svgStyle);
      }
    }, {
      key: "addButtons",
      value: function(d, s, n) {
        var a = this;
        n.getAlignments().forEach(function(c, t) {
          var e = document.createElement("span");
          e.classList.add(d.options.align.toolbar.buttonClassName), e.innerHTML = c.icon, e.addEventListener("click", function() {
            a.onButtonClick(e, d, c, n);
          }), a.preselectButton(e, c, d, n), a.addButtonStyle(e, t, d), a.buttons.push(e), s.appendChild(e);
        });
      }
    }, {
      key: "preselectButton",
      value: function(d, s, n, a) {
        if (!!n.currentSpec) {
          var c = n.currentSpec.getTargetElement();
          !c || a.isAligned(c, s) && this.selectButton(n, d);
        }
      }
    }, {
      key: "onButtonClick",
      value: function(d, s, n, a) {
        if (!!s.currentSpec) {
          var c = s.currentSpec.getTargetElement();
          !c || this.clickButton(d, c, s, n, a);
        }
      }
    }, {
      key: "clickButton",
      value: function(d, s, n, a, c) {
        var t = this;
        this.buttons.forEach(function(e) {
          t.deselectButton(n, e);
        }), c.isAligned(s, a) ? n.options.align.toolbar.allowDeselect ? c.clear(s) : this.selectButton(n, d) : (this.selectButton(n, d), a.apply(s)), n.update();
      }
    }, {
      key: "selectButton",
      value: function(d, s) {
        s.classList.add("is-selected"), d.options.align.toolbar.addButtonSelectStyle && s.style.setProperty("filter", "invert(20%)");
      }
    }, {
      key: "deselectButton",
      value: function(d, s) {
        s.classList.remove("is-selected"), d.options.align.toolbar.addButtonSelectStyle && s.style.removeProperty("filter");
      }
    }]), y;
  }();
  return P.default = u, P;
}
var W;
function ie() {
  if (W)
    return x;
  W = 1, Object.defineProperty(x, "__esModule", {
    value: !0
  });
  var r = function() {
    function e(i, v) {
      for (var g = 0; g < v.length; g++) {
        var p = v[g];
        p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(i, p.key, p);
      }
    }
    return function(i, v, g) {
      return v && e(i.prototype, v), g && e(i, g), i;
    };
  }(), o = b(), l = s(o), f = m();
  s(f);
  var u = j, y = s(u);
  ne();
  var h = re(), d = s(h);
  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  function n(e, i) {
    if (!(e instanceof i))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(e, i) {
    if (!e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return i && (typeof i == "object" || typeof i == "function") ? i : e;
  }
  function c(e, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof i);
    e.prototype = Object.create(i && i.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), i && (Object.setPrototypeOf ? Object.setPrototypeOf(e, i) : e.__proto__ = i);
  }
  var t = function(e) {
    c(i, e);
    function i(v) {
      n(this, i);
      var g = a(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, v));
      return g.aligner = new y.default(v.options.align), g.toolbar = new d.default(), g;
    }
    return r(i, [{
      key: "onCreate",
      value: function() {
        var g = this.toolbar.create(this.formatter, this.aligner);
        this.formatter.overlay.appendChild(g);
      }
    }, {
      key: "onDestroy",
      value: function() {
        var g = this.toolbar.getElement();
        !g || (this.formatter.overlay.removeChild(g), this.toolbar.destroy());
      }
    }]), i;
  }(l.default);
  return x.default = t, x;
}
var R = {}, G;
function oe() {
  if (G)
    return R;
  G = 1, Object.defineProperty(R, "__esModule", {
    value: !0
  });
  var r = function() {
    function n(a, c) {
      for (var t = 0; t < c.length; t++) {
        var e = c[t];
        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(a, e.key, e);
      }
    }
    return function(a, c, t) {
      return c && n(a.prototype, c), t && n(a, t), a;
    };
  }(), o = b(), l = u(o), f = m();
  u(f);
  function u(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  function y(n, a) {
    if (!(n instanceof a))
      throw new TypeError("Cannot call a class as a function");
  }
  function h(n, a) {
    if (!n)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a && (typeof a == "object" || typeof a == "function") ? a : n;
  }
  function d(n, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof a);
    n.prototype = Object.create(a && a.prototype, {
      constructor: {
        value: n,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(n, a) : n.__proto__ = a);
  }
  var s = function(n) {
    d(a, n);
    function a(c) {
      y(this, a);
      var t = h(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, c));
      return t.onMouseDown = function(e) {
        if (e.target instanceof HTMLElement && (t.dragHandle = e.target, t.setCursor(t.dragHandle.style.cursor), !!t.formatter.currentSpec)) {
          var i = t.formatter.currentSpec.getTargetElement();
          if (!!i) {
            var v = i.getBoundingClientRect();
            t.dragStartX = e.clientX, t.preDragWidth = v.width, t.targetRatio = v.height / v.width, document.addEventListener("mousemove", t.onDrag), document.addEventListener("mouseup", t.onMouseUp);
          }
        }
      }, t.onDrag = function(e) {
        if (!!t.formatter.currentSpec) {
          var i = t.formatter.currentSpec.getTargetElement();
          if (!!i) {
            t.toggleUserSelect(!1);
            var v = e.clientX - t.dragStartX, g = 0;
            t.dragHandle === t.topLeftHandle || t.dragHandle === t.bottomLeftHandle ? g = Math.round(t.preDragWidth - v) : g = Math.round(t.preDragWidth + v);
            var p = t.targetRatio * g;
            i.setAttribute("width", "" + g), i.setAttribute("height", "" + p), t.formatter.update();
          }
        }
      }, t.onMouseUp = function() {
        t.setCursor(""), t.toggleUserSelect(!0), document.removeEventListener("mousemove", t.onDrag), document.removeEventListener("mouseup", t.onMouseUp);
      }, t.topLeftHandle = t.createHandle("top-left", "nwse-resize"), t.topRightHandle = t.createHandle("top-right", "nesw-resize"), t.bottomRightHandle = t.createHandle("bottom-right", "nwse-resize"), t.bottomLeftHandle = t.createHandle("bottom-left", "nesw-resize"), t.dragHandle = null, t.dragStartX = 0, t.preDragWidth = 0, t.targetRatio = 0, t;
    }
    return r(a, [{
      key: "onCreate",
      value: function() {
        this.formatter.overlay.appendChild(this.topLeftHandle), this.formatter.overlay.appendChild(this.topRightHandle), this.formatter.overlay.appendChild(this.bottomRightHandle), this.formatter.overlay.appendChild(this.bottomLeftHandle), this.repositionHandles(this.formatter.options.resize.handleStyle);
      }
    }, {
      key: "onDestroy",
      value: function() {
        this.setCursor(""), this.formatter.overlay.removeChild(this.topLeftHandle), this.formatter.overlay.removeChild(this.topRightHandle), this.formatter.overlay.removeChild(this.bottomRightHandle), this.formatter.overlay.removeChild(this.bottomLeftHandle);
      }
    }, {
      key: "createHandle",
      value: function(t, e) {
        var i = document.createElement("div");
        return i.classList.add(this.formatter.options.resize.handleClassName), i.setAttribute("data-position", t), i.style.cursor = e, this.formatter.options.resize.handleStyle && Object.assign(i.style, this.formatter.options.resize.handleStyle), i.addEventListener("mousedown", this.onMouseDown), i;
      }
    }, {
      key: "repositionHandles",
      value: function(t) {
        var e = "0px", i = "0px";
        t && (t.width && (e = -parseFloat(t.width) / 2 + "px"), t.height && (i = -parseFloat(t.height) / 2 + "px")), Object.assign(this.topLeftHandle.style, {
          left: e,
          top: i
        }), Object.assign(this.topRightHandle.style, {
          right: e,
          top: i
        }), Object.assign(this.bottomRightHandle.style, {
          right: e,
          bottom: i
        }), Object.assign(this.bottomLeftHandle.style, {
          left: e,
          bottom: i
        });
      }
    }, {
      key: "setCursor",
      value: function(t) {
        if (document.body && (document.body.style.cursor = t), this.formatter.currentSpec) {
          var e = this.formatter.currentSpec.getOverlayElement();
          e && (e.style.cursor = t);
        }
      }
    }, {
      key: "toggleUserSelect",
      value: function(t) {
        if (t) {
          document.body.style.setProperty("-moz-user-select", "auto"), document.body.style.setProperty("-webkit-user-select", "auto"), document.body.style.setProperty("-ms-user-select", "auto"), document.body.style.setProperty("-o-user-select", "auto"), document.body.style.setProperty("user-select", "auto"), document.onselectstart = function() {
            return !0;
          }, document.onselect = function() {
            return !0;
          }, document.onselectionchange = function() {
            return !0;
          };
          return;
        }
        document.body.style.setProperty("-moz-user-select", "none"), document.body.style.setProperty("-webkit-user-select", "none"), document.body.style.setProperty("-ms-user-select", "none"), document.body.style.setProperty("-o-user-select", "none"), document.body.style.setProperty("user-select", "none"), document.onselectstart = function() {
          return !1;
        }, document.onselect = function() {
          return !1;
        }, document.onselectionchange = function() {
          return !1;
        };
      }
    }]), a;
  }(l.default);
  return R.default = s, R;
}
var B = {}, K;
function ae() {
  if (K)
    return B;
  K = 1, Object.defineProperty(B, "__esModule", {
    value: !0
  });
  var r = function() {
    function a(c, t) {
      for (var e = 0; e < t.length; e++) {
        var i = t[e];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(c, i.key, i);
      }
    }
    return function(c, t, e) {
      return t && a(c.prototype, t), e && a(c, e), c;
    };
  }(), o = se, l = y(o), f = b(), u = y(f);
  function y(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  function h(a, c) {
    if (!(a instanceof c))
      throw new TypeError("Cannot call a class as a function");
  }
  function d(a, c) {
    if (!a)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return c && (typeof c == "object" || typeof c == "function") ? c : a;
  }
  function s(a, c) {
    if (typeof c != "function" && c !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof c);
    a.prototype = Object.create(c && c.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), c && (Object.setPrototypeOf ? Object.setPrototypeOf(a, c) : a.__proto__ = c);
  }
  var n = function(a) {
    s(c, a);
    function c() {
      var t, e, i, v;
      h(this, c);
      for (var g = arguments.length, p = Array(g), S = 0; S < g; S++)
        p[S] = arguments[S];
      return v = (e = (i = d(this, (t = c.__proto__ || Object.getPrototypeOf(c)).call.apply(t, [this].concat(p))), i), i.onKeyUp = function(z) {
        if (!!i.formatter.currentSpec && (z.keyCode === 46 || z.keyCode === 8)) {
          var C = l.default.find(i.formatter.currentSpec.getTargetElement());
          C && C.deleteAt(0), i.formatter.hide();
        }
      }, e), d(i, v);
    }
    return r(c, [{
      key: "onCreate",
      value: function() {
        document.addEventListener("keyup", this.onKeyUp, !0), this.formatter.quill.root.addEventListener("input", this.onKeyUp, !0);
      }
    }, {
      key: "onDestroy",
      value: function() {
        document.removeEventListener("keyup", this.onKeyUp), this.formatter.quill.root.removeEventListener("input", this.onKeyUp);
      }
    }]), c;
  }(u.default);
  return B.default = n, B;
}
var Y;
function O() {
  if (Y)
    return A;
  Y = 1, Object.defineProperty(A, "__esModule", {
    value: !0
  });
  var r = function() {
    function t(e, i) {
      for (var v = 0; v < i.length; v++) {
        var g = i[v];
        g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(e, g.key, g);
      }
    }
    return function(e, i, v) {
      return i && t(e.prototype, i), v && t(e, v), e;
    };
  }(), o = m();
  n(o);
  var l = b();
  n(l);
  var f = ie(), u = n(f), y = oe(), h = n(y), d = ae(), s = n(d);
  function n(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  function a(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  var c = function() {
    function t(e) {
      a(this, t), this.formatter = e;
    }
    return r(t, [{
      key: "init",
      value: function() {
      }
    }, {
      key: "getActions",
      value: function() {
        return [u.default, h.default, s.default];
      }
    }, {
      key: "getTargetElement",
      value: function() {
        return null;
      }
    }, {
      key: "getOverlayElement",
      value: function() {
        return this.getTargetElement();
      }
    }, {
      key: "setSelection",
      value: function() {
        this.formatter.quill.setSelection(null);
      }
    }, {
      key: "onHide",
      value: function() {
      }
    }]), t;
  }();
  return A.default = c, A;
}
var D = {}, J;
function le() {
  if (J)
    return D;
  J = 1, Object.defineProperty(D, "__esModule", {
    value: !0
  });
  var r = function() {
    function n(a, c) {
      for (var t = 0; t < c.length; t++) {
        var e = c[t];
        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(a, e.key, e);
      }
    }
    return function(a, c, t) {
      return c && n(a.prototype, c), t && n(a, t), a;
    };
  }(), o = O(), l = u(o), f = m();
  u(f);
  function u(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  function y(n, a) {
    if (!(n instanceof a))
      throw new TypeError("Cannot call a class as a function");
  }
  function h(n, a) {
    if (!n)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a && (typeof a == "object" || typeof a == "function") ? a : n;
  }
  function d(n, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof a);
    n.prototype = Object.create(a && a.prototype, {
      constructor: {
        value: n,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(n, a) : n.__proto__ = a);
  }
  var s = function(n) {
    d(a, n);
    function a(c) {
      y(this, a);
      var t = h(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, c));
      return t.onClick = function(e) {
        var i = e.target;
        !(i instanceof HTMLElement) || i.tagName !== "IMG" || (t.img = i, t.formatter.show(t));
      }, t.img = null, t;
    }
    return r(a, [{
      key: "init",
      value: function() {
        this.formatter.quill.root.addEventListener("click", this.onClick);
      }
    }, {
      key: "getTargetElement",
      value: function() {
        return this.img;
      }
    }, {
      key: "onHide",
      value: function() {
        this.img = null;
      }
    }]), a;
  }(l.default);
  return D.default = s, D;
}
var T = {}, M = {};
Object.defineProperty(M, "__esModule", {
  value: !0
});
var Re = function() {
  function r(o, l) {
    for (var f = 0; f < l.length; f++) {
      var u = l[f];
      u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(o, u.key, u);
    }
  }
  return function(o, l, f) {
    return l && r(o.prototype, l), f && r(o, f), o;
  };
}(), Be = O(), De = ue(Be), Te = m();
ue(Te);
function ue(r) {
  return r && r.__esModule ? r : {
    default: r
  };
}
function qe(r, o) {
  if (!(r instanceof o))
    throw new TypeError("Cannot call a class as a function");
}
function je(r, o) {
  if (!r)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o && (typeof o == "object" || typeof o == "function") ? o : r;
}
function Me(r, o) {
  if (typeof o != "function" && o !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof o);
  r.prototype = Object.create(o && o.prototype, {
    constructor: {
      value: r,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(r, o) : r.__proto__ = o);
}
var Q = "data-blot-formatter-unclickable-bound", Ie = "blot-formatter__proxy-image", He = function(r) {
  Me(o, r);
  function o(l, f) {
    qe(this, o);
    var u = je(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, l));
    return u.onTextChange = function() {
      Array.from(document.querySelectorAll(u.selector + ":not([" + Q + "])")).forEach(function(y) {
        y.setAttribute(Q, "true"), y.addEventListener("mouseenter", u.onMouseEnter);
      });
    }, u.onMouseEnter = function(y) {
      var h = y.target;
      h instanceof HTMLElement && (u.nextUnclickable = h, u.repositionProxyImage(u.nextUnclickable));
    }, u.onProxyImageClick = function() {
      u.unclickable = u.nextUnclickable, u.nextUnclickable = null, u.formatter.show(u), u.hideProxyImage();
    }, u.selector = f, u.unclickable = null, u.nextUnclickable = null, u;
  }
  return Re(o, [{
    key: "init",
    value: function() {
      document.body && document.body.appendChild(this.createProxyImage()), this.hideProxyImage(), this.proxyImage.addEventListener("click", this.onProxyImageClick), this.formatter.quill.on("text-change", this.onTextChange);
    }
  }, {
    key: "getTargetElement",
    value: function() {
      return this.unclickable;
    }
  }, {
    key: "getOverlayElement",
    value: function() {
      return this.unclickable;
    }
  }, {
    key: "onHide",
    value: function() {
      this.hideProxyImage(), this.nextUnclickable = null, this.unclickable = null;
    }
  }, {
    key: "createProxyImage",
    value: function() {
      var f = document.createElement("canvas"), u = f.getContext("2d");
      return u.globalAlpha = 0, u.fillRect(0, 0, 1, 1), this.proxyImage = document.createElement("img"), this.proxyImage.src = f.toDataURL("image/png"), this.proxyImage.alt = "", this.proxyImage.classList.add(Ie), Object.assign(this.proxyImage.style, {
        position: "absolute",
        margin: "0"
      }), this.proxyImage;
    }
  }, {
    key: "hideProxyImage",
    value: function() {
      Object.assign(this.proxyImage.style, {
        display: "none"
      });
    }
  }, {
    key: "repositionProxyImage",
    value: function(f) {
      var u = f.getBoundingClientRect();
      Object.assign(this.proxyImage.style, {
        display: "block",
        left: u.left + window.pageXOffset + "px",
        top: u.top + window.pageYOffset + "px",
        width: u.width + "px",
        height: u.height + "px"
      });
    }
  }]), o;
}(De.default);
M.default = He;
var Z;
function ce() {
  if (Z)
    return T;
  Z = 1, Object.defineProperty(T, "__esModule", {
    value: !0
  });
  var r = M, o = f(r), l = m();
  f(l);
  function f(s) {
    return s && s.__esModule ? s : {
      default: s
    };
  }
  function u(s, n) {
    if (!(s instanceof n))
      throw new TypeError("Cannot call a class as a function");
  }
  function y(s, n) {
    if (!s)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n && (typeof n == "object" || typeof n == "function") ? n : s;
  }
  function h(s, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof n);
    s.prototype = Object.create(n && n.prototype, {
      constructor: {
        value: s,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(s, n) : s.__proto__ = n);
  }
  var d = function(s) {
    h(n, s);
    function n(a) {
      return u(this, n), y(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, a, "iframe.ql-video"));
    }
    return n;
  }(o.default);
  return T.default = d, T;
}
var ee;
function fe() {
  if (ee)
    return k;
  ee = 1, Object.defineProperty(k, "__esModule", {
    value: !0
  });
  var r = O();
  y(r);
  var o = le(), l = y(o), f = ce(), u = y(f);
  function y(d) {
    return d && d.__esModule ? d : {
      default: d
    };
  }
  var h = {
    specs: [l.default, u.default],
    overlay: {
      className: "blot-formatter__overlay",
      style: {
        position: "absolute",
        boxSizing: "border-box",
        border: "1px dashed #444"
      }
    },
    align: {
      attribute: "data-align",
      aligner: {
        applyStyle: !0
      },
      icons: {
        left: `
        <svg viewbox="0 0 18 18">
          <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>
          <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>
          <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>
        </svg>
      `,
        center: `
        <svg viewbox="0 0 18 18">
           <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
          <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>
          <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>
        </svg>
      `,
        right: `
        <svg viewbox="0 0 18 18">
          <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
          <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>
          <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>
        </svg>
      `
      },
      toolbar: {
        allowDeselect: !0,
        mainClassName: "blot-formatter__toolbar",
        mainStyle: {
          position: "absolute",
          top: "-12px",
          right: "0",
          left: "0",
          height: "0",
          minWidth: "100px",
          font: "12px/1.0 Arial, Helvetica, sans-serif",
          textAlign: "center",
          color: "#333",
          boxSizing: "border-box",
          cursor: "default",
          zIndex: "1"
        },
        buttonClassName: "blot-formatter__toolbar-button",
        addButtonSelectStyle: !0,
        buttonStyle: {
          display: "inline-block",
          width: "24px",
          height: "24px",
          background: "white",
          border: "1px solid #999",
          verticalAlign: "middle"
        },
        svgStyle: {
          display: "inline-block",
          width: "24px",
          height: "24px",
          background: "white",
          border: "1px solid #999",
          verticalAlign: "middle"
        }
      }
    },
    resize: {
      handleClassName: "blot-formatter__resize-handle",
      handleStyle: {
        position: "absolute",
        height: "12px",
        width: "12px",
        backgroundColor: "white",
        border: "1px solid #777",
        boxSizing: "border-box",
        opacity: "0.80"
      }
    }
  };
  return k.default = h, k;
}
(function(r) {
  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var o = fe();
  Object.defineProperty(r, "DefaultOptions", {
    enumerable: !0,
    get: function() {
      return e(o).default;
    }
  });
  var l = m();
  Object.defineProperty(r, "default", {
    enumerable: !0,
    get: function() {
      return e(l).default;
    }
  });
  var f = b();
  Object.defineProperty(r, "Action", {
    enumerable: !0,
    get: function() {
      return e(f).default;
    }
  });
  var u = ie();
  Object.defineProperty(r, "AlignAction", {
    enumerable: !0,
    get: function() {
      return e(u).default;
    }
  });
  var y = j;
  Object.defineProperty(r, "DefaultAligner", {
    enumerable: !0,
    get: function() {
      return e(y).default;
    }
  });
  var h = re();
  Object.defineProperty(r, "DefaultToolbar", {
    enumerable: !0,
    get: function() {
      return e(h).default;
    }
  });
  var d = ae();
  Object.defineProperty(r, "DeleteAction", {
    enumerable: !0,
    get: function() {
      return e(d).default;
    }
  });
  var s = oe();
  Object.defineProperty(r, "ResizeAction", {
    enumerable: !0,
    get: function() {
      return e(s).default;
    }
  });
  var n = O();
  Object.defineProperty(r, "BlotSpec", {
    enumerable: !0,
    get: function() {
      return e(n).default;
    }
  });
  var a = le();
  Object.defineProperty(r, "ImageSpec", {
    enumerable: !0,
    get: function() {
      return e(a).default;
    }
  });
  var c = M;
  Object.defineProperty(r, "UnclickableBlotSpec", {
    enumerable: !0,
    get: function() {
      return e(c).default;
    }
  });
  var t = ce();
  Object.defineProperty(r, "IframeVideoSpec", {
    enumerable: !0,
    get: function() {
      return e(t).default;
    }
  });
  function e(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
})(te);
const Ue = /* @__PURE__ */ ye(te);
export {
  Ue as BlotFormatter
};
