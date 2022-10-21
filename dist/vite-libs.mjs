import le from "quill";
function ue(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function ce(t) {
  var e = t.default;
  if (typeof e == "function") {
    var o = function() {
      return e.apply(this, arguments);
    };
    o.prototype = e.prototype;
  } else
    o = {};
  return Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.keys(t).forEach(function(n) {
    var r = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(o, n, r.get ? r : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), o;
}
var J = {}, S = {}, k = {}, A = {}, fe = function(e) {
  return se(e) && !ye(e);
};
function se(t) {
  return !!t && typeof t == "object";
}
function ye(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || ve(t);
}
var de = typeof Symbol == "function" && Symbol.for, he = de ? Symbol.for("react.element") : 60103;
function ve(t) {
  return t.$$typeof === he;
}
function ge(t) {
  return Array.isArray(t) ? [] : {};
}
function B(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? _(ge(t), t, e) : t;
}
function pe(t, e, o) {
  return t.concat(e).map(function(n) {
    return B(n, o);
  });
}
function me(t, e, o) {
  var n = {};
  return o.isMergeableObject(t) && Object.keys(t).forEach(function(r) {
    n[r] = B(t[r], o);
  }), Object.keys(e).forEach(function(r) {
    !o.isMergeableObject(e[r]) || !t[r] ? n[r] = B(e[r], o) : n[r] = _(t[r], e[r], o);
  }), n;
}
function _(t, e, o) {
  o = o || {}, o.arrayMerge = o.arrayMerge || pe, o.isMergeableObject = o.isMergeableObject || fe;
  var n = Array.isArray(e), r = Array.isArray(t), l = n === r;
  return l ? n ? o.arrayMerge(t, e, o) : me(t, e, o) : B(e, o);
}
_.all = function(e, o) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(n, r) {
    return _(n, r, o);
  }, {});
};
var be = _;
const _e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: be
}, Symbol.toStringTag, { value: "Module" })), Oe = /* @__PURE__ */ ce(_e);
var w = {}, U;
function b() {
  if (U)
    return w;
  U = 1, Object.defineProperty(w, "__esModule", {
    value: !0
  });
  var t = function() {
    function l(s, f) {
      for (var u = 0; u < f.length; u++) {
        var i = f[u];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(s, i.key, i);
      }
    }
    return function(s, f, u) {
      return f && l(s.prototype, f), u && l(s, u), s;
    };
  }(), e = p();
  o(e);
  function o(l) {
    return l && l.__esModule ? l : {
      default: l
    };
  }
  function n(l, s) {
    if (!(l instanceof s))
      throw new TypeError("Cannot call a class as a function");
  }
  var r = function() {
    function l(s) {
      n(this, l), this.formatter = s;
    }
    return t(l, [{
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
    }]), l;
  }();
  return w.default = r, w;
}
var $;
function p() {
  if ($)
    return A;
  $ = 1, Object.defineProperty(A, "__esModule", {
    value: !0
  });
  var t = function() {
    function h(d, a) {
      for (var c = 0; c < a.length; c++) {
        var v = a[c];
        v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(d, v.key, v);
      }
    }
    return function(d, a, c) {
      return a && h(d.prototype, a), c && h(d, c), d;
    };
  }(), e = Oe, o = f(e), n = ae(), r = f(n), l = b();
  f(l);
  var s = O();
  f(s);
  function f(h) {
    return h && h.__esModule ? h : {
      default: h
    };
  }
  function u(h, d) {
    if (!(h instanceof d))
      throw new TypeError("Cannot call a class as a function");
  }
  var i = function(d, a) {
    return a;
  }, y = function() {
    function h(d) {
      var a = this, c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      u(this, h), this.onClick = function() {
        a.hide();
      }, this.quill = d, this.options = (0, o.default)(r.default, c, {
        arrayMerge: i
      }), this.currentSpec = null, this.actions = [], this.overlay = document.createElement("div"), this.overlay.classList.add(this.options.overlay.className), this.options.overlay.style && Object.assign(this.overlay.style, this.options.overlay.style), document.execCommand("enableObjectResizing", !1, "false"), this.quill.root.parentNode.style.position = this.quill.root.parentNode.style.position || "relative", this.quill.root.addEventListener("click", this.onClick), this.specs = this.options.specs.map(function(v) {
        return new v(a);
      }), this.specs.forEach(function(v) {
        return v.init();
      });
    }
    return t(h, [{
      key: "show",
      value: function(a) {
        this.currentSpec = a, this.currentSpec.setSelection(), this.setUserSelect("none"), this.quill.root.parentNode.appendChild(this.overlay), this.repositionOverlay(), this.createActions(a);
      }
    }, {
      key: "hide",
      value: function() {
        !this.currentSpec || (this.currentSpec.onHide(), this.currentSpec = null, this.quill.root.parentNode.removeChild(this.overlay), this.overlay.style.setProperty("display", "none"), this.setUserSelect(""), this.destroyActions());
      }
    }, {
      key: "update",
      value: function() {
        this.repositionOverlay(), this.actions.forEach(function(a) {
          return a.onUpdate();
        });
      }
    }, {
      key: "createActions",
      value: function(a) {
        var c = this;
        this.actions = a.getActions().map(function(v) {
          var g = new v(c);
          return g.onCreate(), g;
        });
      }
    }, {
      key: "destroyActions",
      value: function() {
        this.actions.forEach(function(a) {
          return a.onDestroy();
        }), this.actions = [];
      }
    }, {
      key: "repositionOverlay",
      value: function() {
        if (!!this.currentSpec) {
          var a = this.currentSpec.getOverlayElement();
          if (!!a) {
            var c = this.quill.root.parentNode, v = a.getBoundingClientRect(), g = c.getBoundingClientRect();
            Object.assign(this.overlay.style, {
              display: "block",
              left: v.left - g.left - 1 + c.scrollLeft + "px",
              top: v.top - g.top + c.scrollTop + "px",
              width: v.width + "px",
              height: v.height + "px"
            });
          }
        }
      }
    }, {
      key: "setUserSelect",
      value: function(a) {
        var c = this, v = ["userSelect", "mozUserSelect", "webkitUserSelect", "msUserSelect"];
        v.forEach(function(g) {
          c.quill.root.style.setProperty(g, a), document.documentElement && document.documentElement.style.setProperty(g, a);
        });
      }
    }]), h;
  }();
  return A.default = y, A;
}
var E = {}, T = {};
Object.defineProperty(T, "__esModule", {
  value: !0
});
var Se = function() {
  function t(e, o) {
    for (var n = 0; n < o.length; n++) {
      var r = o[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }
  return function(e, o, n) {
    return o && t(e.prototype, o), n && t(e, n), e;
  };
}();
function q(t, e, o) {
  return e in t ? Object.defineProperty(t, e, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = o, t;
}
function ke(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var I = "left", H = "center", L = "right", Ae = function() {
  function t(e) {
    var o = this, n;
    ke(this, t), this.applyStyle = e.aligner.applyStyle, this.alignAttribute = e.attribute, this.alignments = (n = {}, q(n, I, {
      name: I,
      icon: e.icons.left,
      apply: function(l) {
        o.setAlignment(l, I), o.setStyle(l, "inline", "left", "0 1em 1em 0");
      }
    }), q(n, H, {
      name: H,
      icon: e.icons.center,
      apply: function(l) {
        o.setAlignment(l, H), o.setStyle(l, "block", null, "auto");
      }
    }), q(n, L, {
      name: L,
      icon: e.icons.right,
      apply: function(l) {
        o.setAlignment(l, L), o.setStyle(l, "inline", "right", "0 0 1em 1em");
      }
    }), n);
  }
  return Se(t, [{
    key: "getAlignments",
    value: function() {
      var o = this;
      return Object.keys(this.alignments).map(function(n) {
        return o.alignments[n];
      });
    }
  }, {
    key: "clear",
    value: function(o) {
      o.removeAttribute(this.alignAttribute), this.setStyle(o, null, null, null);
    }
  }, {
    key: "isAligned",
    value: function(o, n) {
      return o.getAttribute(this.alignAttribute) === n.name;
    }
  }, {
    key: "setAlignment",
    value: function(o, n) {
      o.setAttribute(this.alignAttribute, n);
    }
  }, {
    key: "setStyle",
    value: function(o, n, r, l) {
      this.applyStyle && (o.style.setProperty("display", n), o.style.setProperty("float", r), o.style.setProperty("margin", l));
    }
  }]), t;
}();
T.default = Ae;
var C = {}, z;
function Q() {
  if (z)
    return C;
  z = 1;
  var t = p();
  e(t);
  function e(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  return C;
}
var x = {}, N;
function Z() {
  if (N)
    return x;
  N = 1, Object.defineProperty(x, "__esModule", {
    value: !0
  });
  var t = function() {
    function l(s, f) {
      for (var u = 0; u < f.length; u++) {
        var i = f[u];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(s, i.key, i);
      }
    }
    return function(s, f, u) {
      return f && l(s.prototype, f), u && l(s, u), s;
    };
  }();
  Q();
  var e = p();
  o(e);
  function o(l) {
    return l && l.__esModule ? l : {
      default: l
    };
  }
  function n(l, s) {
    if (!(l instanceof s))
      throw new TypeError("Cannot call a class as a function");
  }
  var r = function() {
    function l() {
      n(this, l), this.toolbar = null, this.buttons = [];
    }
    return t(l, [{
      key: "create",
      value: function(f, u) {
        var i = document.createElement("div");
        return i.classList.add(f.options.align.toolbar.mainClassName), this.addToolbarStyle(f, i), this.addButtons(f, i, u), this.toolbar = i, this.toolbar;
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
      value: function(f, u) {
        f.options.align.toolbar.mainStyle && Object.assign(u.style, f.options.align.toolbar.mainStyle);
      }
    }, {
      key: "addButtonStyle",
      value: function(f, u, i) {
        i.options.align.toolbar.buttonStyle && (Object.assign(f.style, i.options.align.toolbar.buttonStyle), u > 0 && (f.style.borderLeftWidth = "0")), i.options.align.toolbar.svgStyle && Object.assign(f.children[0].style, i.options.align.toolbar.svgStyle);
      }
    }, {
      key: "addButtons",
      value: function(f, u, i) {
        var y = this;
        i.getAlignments().forEach(function(h, d) {
          var a = document.createElement("span");
          a.classList.add(f.options.align.toolbar.buttonClassName), a.innerHTML = h.icon, a.addEventListener("click", function() {
            y.onButtonClick(a, f, h, i);
          }), y.preselectButton(a, h, f, i), y.addButtonStyle(a, d, f), y.buttons.push(a), u.appendChild(a);
        });
      }
    }, {
      key: "preselectButton",
      value: function(f, u, i, y) {
        if (!!i.currentSpec) {
          var h = i.currentSpec.getTargetElement();
          !h || y.isAligned(h, u) && this.selectButton(i, f);
        }
      }
    }, {
      key: "onButtonClick",
      value: function(f, u, i, y) {
        if (!!u.currentSpec) {
          var h = u.currentSpec.getTargetElement();
          !h || this.clickButton(f, h, u, i, y);
        }
      }
    }, {
      key: "clickButton",
      value: function(f, u, i, y, h) {
        var d = this;
        this.buttons.forEach(function(a) {
          d.deselectButton(i, a);
        }), h.isAligned(u, y) ? i.options.align.toolbar.allowDeselect ? h.clear(u) : this.selectButton(i, f) : (this.selectButton(i, f), y.apply(u)), i.update();
      }
    }, {
      key: "selectButton",
      value: function(f, u) {
        u.classList.add("is-selected"), f.options.align.toolbar.addButtonSelectStyle && u.style.setProperty("filter", "invert(20%)");
      }
    }, {
      key: "deselectButton",
      value: function(f, u) {
        u.classList.remove("is-selected"), f.options.align.toolbar.addButtonSelectStyle && u.style.removeProperty("filter");
      }
    }]), l;
  }();
  return x.default = r, x;
}
var F;
function ee() {
  if (F)
    return E;
  F = 1, Object.defineProperty(E, "__esModule", {
    value: !0
  });
  var t = function() {
    function a(c, v) {
      for (var g = 0; g < v.length; g++) {
        var m = v[g];
        m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(c, m.key, m);
      }
    }
    return function(c, v, g) {
      return v && a(c.prototype, v), g && a(c, g), c;
    };
  }(), e = b(), o = u(e), n = p();
  u(n);
  var r = T, l = u(r);
  Q();
  var s = Z(), f = u(s);
  function u(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  function i(a, c) {
    if (!(a instanceof c))
      throw new TypeError("Cannot call a class as a function");
  }
  function y(a, c) {
    if (!a)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return c && (typeof c == "object" || typeof c == "function") ? c : a;
  }
  function h(a, c) {
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
  var d = function(a) {
    h(c, a);
    function c(v) {
      i(this, c);
      var g = y(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, v));
      return g.aligner = new l.default(v.options.align), g.toolbar = new f.default(), g;
    }
    return t(c, [{
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
    }]), c;
  }(o.default);
  return E.default = d, E;
}
var j = {};
Object.defineProperty(j, "__esModule", {
  value: !0
});
var we = function() {
  function t(e, o) {
    for (var n = 0; n < o.length; n++) {
      var r = o[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }
  return function(e, o, n) {
    return o && t(e.prototype, o), n && t(e, n), e;
  };
}(), Ee = b(), xe = te(Ee), Pe = p();
te(Pe);
function te(t) {
  return t && t.__esModule ? t : {
    default: t
  };
}
function Re(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Be(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Te(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var je = function(t) {
  Te(e, t);
  function e(o) {
    Re(this, e);
    var n = Be(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, o));
    return n.onMouseDown = function(r) {
      if (r.target instanceof HTMLElement && (n.dragHandle = r.target, n.setCursor(n.dragHandle.style.cursor), !!n.formatter.currentSpec)) {
        var l = n.formatter.currentSpec.getTargetElement();
        if (!!l) {
          var s = l.getBoundingClientRect();
          n.dragStartX = r.clientX, n.preDragWidth = s.width, n.targetRatio = s.height / s.width, document.addEventListener("mousemove", n.onDrag), document.addEventListener("mouseup", n.onMouseUp);
        }
      }
    }, n.onDrag = function(r) {
      if (!!n.formatter.currentSpec) {
        var l = n.formatter.currentSpec.getTargetElement();
        if (!!l) {
          n.toggleUserSelect(!1);
          var s = r.clientX - n.dragStartX, f = 0;
          n.dragHandle === n.topLeftHandle || n.dragHandle === n.bottomLeftHandle ? f = Math.round(n.preDragWidth - s) : f = Math.round(n.preDragWidth + s);
          var u = n.targetRatio * f;
          l.setAttribute("width", "" + f), l.setAttribute("height", "" + u), n.formatter.update();
        }
      }
    }, n.onMouseUp = function() {
      n.setCursor(""), n.toggleUserSelect(!0), document.removeEventListener("mousemove", n.onDrag), document.removeEventListener("mouseup", n.onMouseUp);
    }, n.topLeftHandle = n.createHandle("top-left", "nwse-resize"), n.topRightHandle = n.createHandle("top-right", "nesw-resize"), n.bottomRightHandle = n.createHandle("bottom-right", "nwse-resize"), n.bottomLeftHandle = n.createHandle("bottom-left", "nesw-resize"), n.dragHandle = null, n.dragStartX = 0, n.preDragWidth = 0, n.targetRatio = 0, n;
  }
  return we(e, [{
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
    value: function(n, r) {
      var l = document.createElement("div");
      return l.classList.add(this.formatter.options.resize.handleClassName), l.setAttribute("data-position", n), l.style.cursor = r, this.formatter.options.resize.handleStyle && Object.assign(l.style, this.formatter.options.resize.handleStyle), l.addEventListener("mousedown", this.onMouseDown), l;
    }
  }, {
    key: "repositionHandles",
    value: function(n) {
      var r = "0px", l = "0px";
      n && (n.width && (r = -parseFloat(n.width) / 2 + "px"), n.height && (l = -parseFloat(n.height) / 2 + "px")), Object.assign(this.topLeftHandle.style, {
        left: r,
        top: l
      }), Object.assign(this.topRightHandle.style, {
        right: r,
        top: l
      }), Object.assign(this.bottomRightHandle.style, {
        right: r,
        bottom: l
      }), Object.assign(this.bottomLeftHandle.style, {
        left: r,
        bottom: l
      });
    }
  }, {
    key: "setCursor",
    value: function(n) {
      if (document.body && (document.body.style.cursor = n), this.formatter.currentSpec) {
        var r = this.formatter.currentSpec.getOverlayElement();
        r && (r.style.cursor = n);
      }
    }
  }, {
    key: "toggleUserSelect",
    value: function(n) {
      if (n) {
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
  }]), e;
}(xe.default);
j.default = je;
var D = {};
Object.defineProperty(D, "__esModule", {
  value: !0
});
var De = function() {
  function t(e, o) {
    for (var n = 0; n < o.length; n++) {
      var r = o[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }
  return function(e, o, n) {
    return o && t(e.prototype, o), n && t(e, n), e;
  };
}(), Me = le, qe = ne(Me), Ie = b(), He = ne(Ie);
function ne(t) {
  return t && t.__esModule ? t : {
    default: t
  };
}
function Le(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function V(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Ue(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var $e = function(t) {
  Ue(e, t);
  function e() {
    var o, n, r, l;
    Le(this, e);
    for (var s = arguments.length, f = Array(s), u = 0; u < s; u++)
      f[u] = arguments[u];
    return l = (n = (r = V(this, (o = e.__proto__ || Object.getPrototypeOf(e)).call.apply(o, [this].concat(f))), r), r.onKeyUp = function(i) {
      if (!!r.formatter.currentSpec && (i.keyCode === 46 || i.keyCode === 8)) {
        var y = qe.default.find(r.formatter.currentSpec.getTargetElement());
        y && y.deleteAt(0), r.formatter.hide();
      }
    }, n), V(r, l);
  }
  return De(e, [{
    key: "onCreate",
    value: function() {
      document.addEventListener("keyup", this.onKeyUp, !0), this.formatter.quill.root.addEventListener("input", this.onKeyUp, !0);
    }
  }, {
    key: "onDestroy",
    value: function() {
      document.removeEventListener("keyup", this.onKeyUp), this.formatter.quill.root.removeEventListener("input", this.onKeyUp);
    }
  }]), e;
}(He.default);
D.default = $e;
var X;
function O() {
  if (X)
    return k;
  X = 1, Object.defineProperty(k, "__esModule", {
    value: !0
  });
  var t = function() {
    function d(a, c) {
      for (var v = 0; v < c.length; v++) {
        var g = c[v];
        g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(a, g.key, g);
      }
    }
    return function(a, c, v) {
      return c && d(a.prototype, c), v && d(a, v), a;
    };
  }(), e = p();
  i(e);
  var o = b();
  i(o);
  var n = ee(), r = i(n), l = j, s = i(l), f = D, u = i(f);
  function i(d) {
    return d && d.__esModule ? d : {
      default: d
    };
  }
  function y(d, a) {
    if (!(d instanceof a))
      throw new TypeError("Cannot call a class as a function");
  }
  var h = function() {
    function d(a) {
      y(this, d), this.formatter = a;
    }
    return t(d, [{
      key: "init",
      value: function() {
      }
    }, {
      key: "getActions",
      value: function() {
        return [r.default, s.default, u.default];
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
    }]), d;
  }();
  return k.default = h, k;
}
var P = {}, W;
function re() {
  if (W)
    return P;
  W = 1, Object.defineProperty(P, "__esModule", {
    value: !0
  });
  var t = function() {
    function i(y, h) {
      for (var d = 0; d < h.length; d++) {
        var a = h[d];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(y, a.key, a);
      }
    }
    return function(y, h, d) {
      return h && i(y.prototype, h), d && i(y, d), y;
    };
  }(), e = O(), o = r(e), n = p();
  r(n);
  function r(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  function l(i, y) {
    if (!(i instanceof y))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(i, y) {
    if (!i)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return y && (typeof y == "object" || typeof y == "function") ? y : i;
  }
  function f(i, y) {
    if (typeof y != "function" && y !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof y);
    i.prototype = Object.create(y && y.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), y && (Object.setPrototypeOf ? Object.setPrototypeOf(i, y) : i.__proto__ = y);
  }
  var u = function(i) {
    f(y, i);
    function y(h) {
      l(this, y);
      var d = s(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this, h));
      return d.onClick = function(a) {
        var c = a.target;
        !(c instanceof HTMLElement) || c.tagName !== "IMG" || (d.img = c, d.formatter.show(d));
      }, d.img = null, d;
    }
    return t(y, [{
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
    }]), y;
  }(o.default);
  return P.default = u, P;
}
var R = {}, M = {};
Object.defineProperty(M, "__esModule", {
  value: !0
});
var Ce = function() {
  function t(e, o) {
    for (var n = 0; n < o.length; n++) {
      var r = o[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }
  return function(e, o, n) {
    return o && t(e.prototype, o), n && t(e, n), e;
  };
}(), ze = O(), Ne = oe(ze), Fe = p();
oe(Fe);
function oe(t) {
  return t && t.__esModule ? t : {
    default: t
  };
}
function Ve(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Xe(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function We(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var G = "data-blot-formatter-unclickable-bound", Ge = "blot-formatter__proxy-image", Ke = function(t) {
  We(e, t);
  function e(o, n) {
    Ve(this, e);
    var r = Xe(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, o));
    return r.onTextChange = function() {
      Array.from(document.querySelectorAll(r.selector + ":not([" + G + "])")).forEach(function(l) {
        l.setAttribute(G, "true"), l.addEventListener("mouseenter", r.onMouseEnter);
      });
    }, r.onMouseEnter = function(l) {
      var s = l.target;
      s instanceof HTMLElement && (r.nextUnclickable = s, r.repositionProxyImage(r.nextUnclickable));
    }, r.onProxyImageClick = function() {
      r.unclickable = r.nextUnclickable, r.nextUnclickable = null, r.formatter.show(r), r.hideProxyImage();
    }, r.selector = n, r.unclickable = null, r.nextUnclickable = null, r;
  }
  return Ce(e, [{
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
      var n = document.createElement("canvas"), r = n.getContext("2d");
      return r.globalAlpha = 0, r.fillRect(0, 0, 1, 1), this.proxyImage = document.createElement("img"), this.proxyImage.src = n.toDataURL("image/png"), this.proxyImage.alt = "", this.proxyImage.classList.add(Ge), Object.assign(this.proxyImage.style, {
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
    value: function(n) {
      var r = n.getBoundingClientRect();
      Object.assign(this.proxyImage.style, {
        display: "block",
        left: r.left + window.pageXOffset + "px",
        top: r.top + window.pageYOffset + "px",
        width: r.width + "px",
        height: r.height + "px"
      });
    }
  }]), e;
}(Ne.default);
M.default = Ke;
var K;
function ie() {
  if (K)
    return R;
  K = 1, Object.defineProperty(R, "__esModule", {
    value: !0
  });
  var t = M, e = n(t), o = p();
  n(o);
  function n(u) {
    return u && u.__esModule ? u : {
      default: u
    };
  }
  function r(u, i) {
    if (!(u instanceof i))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(u, i) {
    if (!u)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return i && (typeof i == "object" || typeof i == "function") ? i : u;
  }
  function s(u, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof i);
    u.prototype = Object.create(i && i.prototype, {
      constructor: {
        value: u,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), i && (Object.setPrototypeOf ? Object.setPrototypeOf(u, i) : u.__proto__ = i);
  }
  var f = function(u) {
    s(i, u);
    function i(y) {
      return r(this, i), l(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, y, "iframe.ql-video"));
    }
    return i;
  }(e.default);
  return R.default = f, R;
}
var Y;
function ae() {
  if (Y)
    return S;
  Y = 1, Object.defineProperty(S, "__esModule", {
    value: !0
  });
  var t = O();
  l(t);
  var e = re(), o = l(e), n = ie(), r = l(n);
  function l(f) {
    return f && f.__esModule ? f : {
      default: f
    };
  }
  var s = {
    specs: [o.default, r.default],
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
  return S.default = s, S;
}
(function(t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var e = ae();
  Object.defineProperty(t, "DefaultOptions", {
    enumerable: !0,
    get: function() {
      return a(e).default;
    }
  });
  var o = p();
  Object.defineProperty(t, "default", {
    enumerable: !0,
    get: function() {
      return a(o).default;
    }
  });
  var n = b();
  Object.defineProperty(t, "Action", {
    enumerable: !0,
    get: function() {
      return a(n).default;
    }
  });
  var r = ee();
  Object.defineProperty(t, "AlignAction", {
    enumerable: !0,
    get: function() {
      return a(r).default;
    }
  });
  var l = T;
  Object.defineProperty(t, "DefaultAligner", {
    enumerable: !0,
    get: function() {
      return a(l).default;
    }
  });
  var s = Z();
  Object.defineProperty(t, "DefaultToolbar", {
    enumerable: !0,
    get: function() {
      return a(s).default;
    }
  });
  var f = D;
  Object.defineProperty(t, "DeleteAction", {
    enumerable: !0,
    get: function() {
      return a(f).default;
    }
  });
  var u = j;
  Object.defineProperty(t, "ResizeAction", {
    enumerable: !0,
    get: function() {
      return a(u).default;
    }
  });
  var i = O();
  Object.defineProperty(t, "BlotSpec", {
    enumerable: !0,
    get: function() {
      return a(i).default;
    }
  });
  var y = re();
  Object.defineProperty(t, "ImageSpec", {
    enumerable: !0,
    get: function() {
      return a(y).default;
    }
  });
  var h = M;
  Object.defineProperty(t, "UnclickableBlotSpec", {
    enumerable: !0,
    get: function() {
      return a(h).default;
    }
  });
  var d = ie();
  Object.defineProperty(t, "IframeVideoSpec", {
    enumerable: !0,
    get: function() {
      return a(d).default;
    }
  });
  function a(c) {
    return c && c.__esModule ? c : {
      default: c
    };
  }
})(J);
const Je = /* @__PURE__ */ ue(J);
export {
  Je as BlotFormatter
};
