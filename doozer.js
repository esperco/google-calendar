/*
  https://www.google.com/calendar/static/307387de4562bc5dba423644325c5f55calendarjs_doozercompiled__en.js
*/

function g(a) {
  throw a;
}
var k = void 0,
    m = !0,
    n = null,
    p = !1,
    t = "",
    aa = " rowspan=",
    ba = "#ffffff",
    da = "/off",
    ea = "</table>",
    fa = "</tr>",
    ga = "??",
    ha = "Content-Type",
    ia = "array",
    ja = "calcontent",
    v = "change",
    ka = "cic-av",
    la = "cic-noprs",
    ma = "cic-nr",
    na = "cic-priv",
    oa = "cic-prsn",
    qa = "cic-ques",
    ra = "cic-rcr",
    sa = "cic-spcl",
    ta = "cic-tmr",
    va = "clm.updated",
    wa = "complete",
    xa = "delayedcore",
    ya = "detailssettings",
    za = "eui-s",
    Aa = "eui-t",
    Ba = "eventform",
    Ca = "extras",
    Da = "format24HourTime",
    Ea = "function",
    Fa = "gadget",
    Ga = "lvHeader",
    Ha = "object",
    Ia = "position",
    Ja = "search",
    Ka = "secid",
    La = "weatherOld";

function Ma() {
  return function(a) {
    return a
  }
}
function Na() {
  return function() {}
}
function Oa(a) {
  return function(b) {
    this[a] = b
  }
}
function w(a) {
  return function() {
    return this[a]
  }
}
function y(a) {
  return function() {
    return a
  }
}
var B, Pa = [];

function Qa(a) {
  return function() {
    return Pa[a].apply(this, arguments)
  }
}
function Sa(a, b) {
  return t + a + " \u2013 " + b
};
var Ta = Ta || {},
    Va = this;

function C(a) {
  return a !== k
}
function Wa(a, b) {
  for (var c = a.split("."), d = b || Va, e; e = c.shift();) if (d[e] != n) d = d[e];
  else
  return n;
  return d
}
function D() {}
function Xa(a) {
  a.M = function() {
    return a.FF ? a.FF : a.FF = new a
  }
}

function Ya(a) {
  var b = typeof a;
  if (b == Ha) if (a) {
    if (a instanceof Array) return ia;
    if (a instanceof Object) return b;
    var c = Object.prototype.toString.call(a);
    if ("[object Window]" == c) return Ha;
    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return ia;
    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return Ea
  } else
  return "null";
  else if (b == Ea && "undefined" == typeof a.call) return Ha;
  return b
}
function Za(a) {
  return Ya(a) == ia
}
function $a(a) {
  var b = Ya(a);
  return b == ia || b == Ha && "number" == typeof a.length
}
function cb(a) {
  return "string" == typeof a
}
function db(a) {
  return "number" == typeof a
}
function eb(a) {
  return Ya(a) == Ea
}
function fb(a) {
  var b = typeof a;
  return b == Ha && a != n || b == Ea
}
function gb(a) {
  return a[hb] || (a[hb] = ++aaa)
}
var hb = "closure_uid_" + (1E9 * Math.random() >>> 0),
    aaa = 0;

function baa(a, b, c) {
  return a.call.apply(a.bind, arguments)
}

function caa(a, b, c) {
  a || g(Error());
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function E(a, b, c) {
  E = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? baa : caa;
  return E.apply(n, arguments)
}

function F(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b)
  }
}
var ib = Date.now ||
function() {
  return +new Date
},
    jb = n;

function kb(a, b) {
  var c = a.split("."),
      d = Va;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e; c.length && (e = c.shift());)!c.length && C(b) ? d[e] = b : d[e] ? d = d[e] : d = d[e] = {}
}

function H(a, b) {
  function c() {}
  c.prototype = b.prototype;
  a.J = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.eZ = function(a, c, f) {
    return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
  }
}
Function.prototype.bind = Function.prototype.bind ||
function(a, b) {
  if (1 < arguments.length) {
    var c = Array.prototype.slice.call(arguments, 1);
    c.unshift(this, a);
    return E.apply(n, c)
  }
  return E(this, a)
};

function lb(a) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, lb);
  else {
    var b = Error().stack;
    b && (this.stack = b)
  }
  a && (this.message = String(a))
}
H(lb, Error);
lb.prototype.name = "CustomError";
var mb;

function nb(a, b) {
  return 0 == a.lastIndexOf(b, 0)
}
function ob(a, b) {
  var c = a.length - b.length;
  return 0 <= c && a.indexOf(b, c) == c
}
function pb(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, t)
}
function qb(a, b) {
  var c = String(a).toLowerCase(),
      d = String(b).toLowerCase();
  return c < d ? -1 : c == d ? 0 : 1
}
function rb(a) {
  return encodeURIComponent(String(a))
}

function I(a) {
  if (!daa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(eaa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(faa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(gaa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(haa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(iaa, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(jaa, "&#0;"));
  return a
}
var eaa = /&/g,
    faa = /</g,
    gaa = />/g,
    haa = /"/g,
    iaa = /'/g,
    jaa = /\x00/g,
    daa = /[\x00&<>"']/;

function sb(a, b) {
  return -1 != a.indexOf(b)
}

function tb(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
}
function ub(a) {
  return Array.prototype.join.call(arguments, t)
}

function vb(a, b) {
  for (var c = 0, d = pb(String(a)).split("."), e = pb(String(b)).split("."), f = Math.max(d.length, e.length), h = 0; 0 == c && h < f; h++) {
    var l = d[h] || t,
        q = e[h] || t,
        r = RegExp("(\\d*)(\\D*)", "g"),
        s = RegExp("(\\d*)(\\D*)", "g");
    do {
      var u = r.exec(l) || [t, t, t],
          x = s.exec(q) || [t, t, t];
      if (0 == u[0].length && 0 == x[0].length) break;
      c = wb(0 == u[1].length ? 0 : parseInt(u[1], 10), 0 == x[1].length ? 0 : parseInt(x[1], 10)) || wb(0 == u[2].length, 0 == x[2].length) || wb(u[2], x[2])
    } while (0 == c)
  }
  return c
}
function wb(a, b) {
  return a < b ? -1 : a > b ? 1 : 0
}
var kaa = 2147483648 * Math.random() | 0;

function xb(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  })
}
function yb(a) {
  var b = cb(k) ? tb(k) : "\\s";
  return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : t) + ")([a-z])", "g"), function(a, b, e) {
    return b + e.toUpperCase()
  })
};
var zb = Array.prototype,
    Ab = zb.indexOf ?
    function(a, b, c) {
    return zb.indexOf.call(a, b, c)
    } : function(a, b, c) {
    c = c == n ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (cb(a)) return cb(b) && 1 == b.length ? a.indexOf(b, c) : -1;
    for (; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1
    },
    laa = zb.lastIndexOf ?
    function(a, b, c) {
    return zb.lastIndexOf.call(a, b, c == n ? a.length - 1 : c)
    } : function(a, b, c) {
    c = c == n ? a.length - 1 : c;
    0 > c && (c = Math.max(0, a.length + c));
    if (cb(a)) return cb(b) && 1 == b.length ? a.lastIndexOf(b, c) : -1;
    for (; 0 <= c; c--) if (c in a && a[c] === b) return c;
    return -1
    },
    Bb = zb.forEach ?
    function(a, b, c) {
    zb.forEach.call(a, b, c)
    } : function(a, b, c) {
    for (var d = a.length, e = cb(a) ? a.split(t) : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    Cb = zb.filter ?
    function(a, b, c) {
    return zb.filter.call(a, b, c)
    } : function(a, b, c) {
    for (var d = a.length, e = [], f = 0, h = cb(a) ? a.split(t) : a, l = 0; l < d; l++) if (l in h) {
      var q = h[l];
      b.call(c, q, l, a) && (e[f++] = q)
    }
    return e
    },
    Db = zb.map ?
    function(a, b, c) {
    return zb.map.call(a, b, c)
    } : function(a, b, c) {
    for (var d = a.length, e = Array(d), f = cb(a) ? a.split(t) : a, h = 0; h < d; h++) h in f && (e[h] =
    b.call(c, f[h], h, a));
    return e
    },
    maa = zb.reduce ?
    function(a, b, c, d) {
    d && (b = E(b, d));
    return zb.reduce.call(a, b, c)
    } : function(a, b, c, d) {
    var e = c;
    Bb(a, function(c, h) {
      e = b.call(d, e, c, h, a)
    });
    return e
    },
    Eb = zb.some ?
    function(a, b, c) {
    return zb.some.call(a, b, c)
    } : function(a, b, c) {
    for (var d = a.length, e = cb(a) ? a.split(t) : a, f = 0; f < d; f++) if (f in e && b.call(c, e[f], f, a)) return m;
    return p
    },
    Fb = zb.every ?
    function(a, b, c) {
    return zb.every.call(a, b, c)
    } : function(a, b, c) {
    for (var d = a.length, e = cb(a) ? a.split(t) : a, f = 0; f < d; f++) if (f in e && !b.call(c, e[f], f, a)) return p;
    return m
    };

function Hb(a, b, c) {
  b = Ib(a, b, c);
  return 0 > b ? n : cb(a) ? a.charAt(b) : a[b]
}
function Ib(a, b, c) {
  for (var d = a.length, e = cb(a) ? a.split(t) : a, f = 0; f < d; f++) if (f in e && b.call(c, e[f], f, a)) return f;
  return -1
}
function Jb(a, b) {
  return 0 <= Ab(a, b)
}
function Kb(a) {
  return 0 == a.length
}
function Lb(a) {
  if (!Za(a)) for (var b = a.length - 1; 0 <= b; b--) delete a[b];
  a.length = 0
}
function Mb(a, b) {
  var c = Ab(a, b),
      d;
  (d = 0 <= c) && Nb(a, c);
  return d
}
function Nb(a, b) {
  zb.splice.call(a, b, 1)
}

function Ob(a) {
  return zb.concat.apply(zb, arguments)
}
function Pb(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
    return c
  }
  return []
}
function Qb(a, b, c) {
  return 2 >= arguments.length ? zb.slice.call(a, b) : zb.slice.call(a, b, c)
}
function Rb(a, b) {
  a.sort(b || Sb)
}
function Sb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
function Tb(a) {
  for (var b = [], c = 0; c < a; c++) b[c] = 0;
  return b
};

function Ub(a) {
  Ub[" "](a);
  return a
}
Ub[" "] = D;

function Vb(a, b) {
  try {
    return Ub(a[b]), m
  } catch (c) {}
  return p
};
var Xb;
t: {
  var Yb = Va.navigator;
  if (Yb) {
    var Zb = Yb.userAgent;
    if (Zb) {
      Xb = Zb;
      break t
    }
  }
  Xb = t
};
var $b, ac, bc, cc, dc, ec;

function fc() {
  return Va.navigator || n
}
var gc = sb(Xb, "Opera") || sb(Xb, "OPR"),
    J = sb(Xb, "Trident") || sb(Xb, "MSIE"),
    hc = sb(Xb, "Gecko") && !sb(Xb.toLowerCase(), "webkit") && !(sb(Xb, "Trident") || sb(Xb, "MSIE")),
    ic = sb(Xb.toLowerCase(), "webkit"),
    jc = ic && sb(Xb, "Mobile"),
    kc = fc(),
    lc = kc && kc.platform || t;$b = sb(lc, "Mac");ac = sb(lc, "Win");bc = sb(lc, "Linux");cc = !! fc() && sb(fc().appVersion || t, "X11");
var mc = Xb;dc = !! mc && sb(mc, "Android");ec = !! mc && sb(mc, "iPhone");
var naa = !! mc && sb(mc, "iPad");

function nc() {
  var a = Va.document;
  return a ? a.documentMode : k
}
var oc = function() {
  var a = t,
      b;
  if (gc && Va.opera) return a = Va.opera.version, eb(a) ? a() : a;
  hc ? b = /rv\:([^\);]+)(\)|;)/ : J ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : ic && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(Xb)) ? a[1] : t);
  return J && (b = nc(), b > parseFloat(a)) ? String(b) : a
}(),
    pc = {};

function qc(a) {
  return pc[a] || (pc[a] = 0 <= vb(oc, a))
}
function rc(a) {
  return J && oaa >= a
}
var sc = Va.document,
    oaa = sc && J ? nc() || ("CSS1Compat" == sc.compatMode ? parseInt(oc, 10) : 5) : k;
var paa = !J || rc(9),
    tc = !J || rc(9),
    qaa = J && !qc("9");!ic || qc("528");hc && qc("1.9b") || J && qc("8") || gc && qc("9.5") || ic && qc("528");hc && !qc("8") || J && qc("9");

function uc() {}
B = uc.prototype;B.ix = p;B.isDisposed = w("ix");B.aa = function() {
  this.ix || (this.ix = m, this.L())
};B.dc = Qa(0);B.L = function() {
  if (this.Pg) for (; this.Pg.length;) this.Pg.shift()()
};

function K(a) {
  a && typeof a.aa == Ea && a.aa()
};

function L(a, b) {
  this.type = a;
  this.A = this.target = b;
  this.C = p;
  this.gC = m
}
L.prototype.aa = Na();L.prototype.stopPropagation = Qa(2);L.prototype.preventDefault = function() {
  this.gC = p
};
var vc = J ? "focusin" : "DOMFocusIn",
    raa = J ? "focusout" : "DOMFocusOut";

function wc(a, b) {
  L.call(this, a ? a.type : t);
  this.o = this.A = this.target = n;
  this.D = this.keyCode = this.X = this.clientY = this.clientX = 0;
  this.K = this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = p;
  this.b = n;
  a && this.init(a, b)
}
H(wc, L);
wc.prototype.init = function(a, b) {
  var c = this.type = a.type;
  this.target = a.target || a.srcElement;
  this.A = b;
  var d = a.relatedTarget;
  d ? hc && (Vb(d, "nodeName") || (d = n)) : "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
  this.o = d;
  this.clientX = a.clientX !== k ? a.clientX : a.pageX;
  this.clientY = a.clientY !== k ? a.clientY : a.pageY;
  this.X = a.button;
  this.keyCode = a.keyCode || 0;
  this.D = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.K =
  $b ? a.metaKey : a.ctrlKey;
  this.b = a;
  a.defaultPrevented && this.preventDefault()
};wc.prototype.stopPropagation = Qa(1);wc.prototype.preventDefault = function() {
  wc.J.preventDefault.call(this);
  var a = this.b;
  if (a.preventDefault) a.preventDefault();
  else if (a.returnValue = p, qaa) try {
    if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
  } catch (b) {}
};wc.prototype.W = Qa(3);
var xc = "closure_listenable_" + (1E6 * Math.random() | 0);

function yc(a) {
  return !(!a || !a[xc])
}
var saa = 0;

function zc(a, b, c) {
  for (var d in a) b.call(c, a[d], d, a)
}
function Ac(a, b) {
  var c = {},
      d;
  for (d in a) c[d] = b.call(k, a[d], d, a);
  return c
}
function Bc(a) {
  var b = 0,
      c;
  for (c in a) b++;
  return b
}
function Cc(a) {
  var b = [],
      c = 0,
      d;
  for (d in a) b[c++] = a[d];
  return b
}
function Dc(a) {
  var b = [],
      c = 0,
      d;
  for (d in a) b[c++] = d;
  return b
}
function Ec(a, b) {
  for (var c in a) if (a[c] == b) return m;
  return p
}
function Fc(a) {
  for (var b in a) return p;
  return m
}
function Gc(a, b) {
  var c;
  (c = b in a) && delete a[b];
  return c
}

function Hc(a) {
  var b = {},
      c;
  for (c in a) b[c] = a[c];
  return b
}
var Ic = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function Jc(a, b) {
  for (var c, d, e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d) a[c] = d[c];
    for (var f = 0; f < Ic.length; f++) c = Ic[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
  }
}

function Kc(a) {
  var b = arguments.length;
  if (1 == b && Za(arguments[0])) return Kc.apply(n, arguments[0]);
  b % 2 && g(Error("Uneven number of arguments"));
  for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
  return c
}
function Lc(a) {
  var b = arguments.length;
  if (1 == b && Za(arguments[0])) return Lc.apply(n, arguments[0]);
  for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = m;
  return c
};

function taa(a, b, c, d, e) {
  this.Zd = a;
  this.b = n;
  this.src = b;
  this.type = c;
  this.er = !! d;
  this.wd = e;
  this.key = ++saa;
  this.Gf = this.ir = p
}
function Mc(a) {
  a.Gf = m;
  a.Zd = n;
  a.b = n;
  a.src = n;
  a.wd = n
};

function Nc(a) {
  this.src = a;
  this.b = {};
  this.o = 0
}
Nc.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.b[f];
  a || (a = this.b[f] = [], this.o++);
  var h = Oc(a, b, d, e); - 1 < h ? (b = a[h], c || (b.ir = p)) : (b = new taa(b, this.src, f, !! d, e), b.ir = c, a.push(b));
  return b
};Nc.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.b)) return p;
  var e = this.b[a];
  b = Oc(e, b, c, d);
  return -1 < b ? (Mc(e[b]), Nb(e, b), 0 == e.length && (delete this.b[a], this.o--), m) : p
};

function Pc(a, b) {
  var c = b.type;
  if (!(c in a.b)) return p;
  var d = Mb(a.b[c], b);
  d && (Mc(b), 0 == a.b[c].length && (delete a.b[c], a.o--));
  return d
}
function Qc(a) {
  var b = 0,
      c;
  for (c in a.b) {
    for (var d = a.b[c], e = 0; e < d.length; e++)++b, Mc(d[e]);
    delete a.b[c];
    a.o--
  }
}
function Rc(a, b, c, d, e) {
  a = a.b[b.toString()];
  b = -1;
  a && (b = Oc(a, c, d, e));
  return -1 < b ? a[b] : n
}
function Oc(a, b, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.Gf && f.Zd == b && f.er == !! c && f.wd == d) return e
  }
  return -1
};
var Sc = "closure_lm_" + (1E6 * Math.random() | 0),
    Tc = {},
    Uc = 0;

function O(a, b, c, d, e) {
  if (Za(b)) {
    for (var f = 0; f < b.length; f++) O(a, b[f], c, d, e);
    return n
  }
  c = Vc(c);
  return yc(a) ? a.Qd.add(String(b), c, p, d, e) : Wc(a, b, c, p, d, e)
}
function Wc(a, b, c, d, e, f) {
  b || g(Error("Invalid event type"));
  var h = !! e,
      l = Xc(a);
  l || (a[Sc] = l = new Nc(a));
  c = l.add(b, c, d, e, f);
  if (c.b) return c;
  d = uaa();
  c.b = d;
  d.src = a;
  d.Zd = c;
  a.addEventListener ? a.addEventListener(b.toString(), d, h) : a.attachEvent(Yc(b.toString()), d);
  Uc++;
  return c
}

function uaa() {
  var a = vaa,
      b = tc ?
      function(c) {
      return a.call(b.src, b.Zd, c)
      } : function(c) {
      c = a.call(b.src, b.Zd, c);
      if (!c) return c
      };
  return b
}
function Zc(a, b, c, d, e) {
  if (Za(b)) {
    for (var f = 0; f < b.length; f++) Zc(a, b[f], c, d, e);
    return n
  }
  c = Vc(c);
  return yc(a) ? a.Qd.add(String(b), c, m, d, e) : Wc(a, b, c, m, d, e)
}
function $c(a, b, c, d, e) {
  if (Za(b)) for (var f = 0; f < b.length; f++) $c(a, b[f], c, d, e);
  else c = Vc(c), yc(a) ? a.Qd.remove(String(b), c, d, e) : a && (a = Xc(a)) && (b = Rc(a, b, c, !! d, e)) && ad(b)
}

function ad(a) {
  if (db(a) || !a || a.Gf) return p;
  var b = a.src;
  if (yc(b)) return Pc(b.Qd, a);
  var c = a.type,
      d = a.b;
  b.removeEventListener ? b.removeEventListener(c, d, a.er) : b.detachEvent && b.detachEvent(Yc(c), d);
  Uc--;
  (c = Xc(b)) ? (Pc(c, a), 0 == c.o && (c.src = n, b[Sc] = n)) : Mc(a);
  return m
}
function Yc(a) {
  return a in Tc ? Tc[a] : Tc[a] = "on" + a
}
function bd(a, b, c, d) {
  var e = 1;
  if (a = Xc(a)) if (b = a.b[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
    var f = b[a];
    f && f.er == c && !f.Gf && (e &= cd(f, d) !== p)
  }
  return Boolean(e)
}

function cd(a, b) {
  var c = a.Zd,
      d = a.wd || a.src;
  a.ir && ad(a);
  return c.call(d, b)
}

function vaa(a, b) {
  if (a.Gf) return m;
  if (!tc) {
    var c = b || Wa("window.event"),
        d = new wc(c, this),
        e = m;
    if (!(0 > c.keyCode || c.returnValue != k)) {
      t: {
        var f = p;
        if (0 == c.keyCode) try {
          c.keyCode = -1;
          break t
        } catch (h) {
          f = m
        }
        if (f || c.returnValue == k) c.returnValue = m
      }
      c = [];
      for (f = d.A; f; f = f.parentNode) c.push(f);
      for (var f = a.type, l = c.length - 1; !d.C && 0 <= l; l--) d.A = c[l],
      e &= bd(c[l], f, m, d);
      for (l = 0; !d.C && l < c.length; l++) d.A = c[l],
      e &= bd(c[l], f, p, d)
    }
    return e
  }
  return cd(a, new wc(b, this))
}
function Xc(a) {
  a = a[Sc];
  return a instanceof Nc ? a : n
}
var dd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

function Vc(a) {
  if (eb(a)) return a;
  a[dd] || (a[dd] = function(b) {
    return a.handleEvent(b)
  });
  return a[dd]
};

function P() {
  this.Qd = new Nc(this);
  this.eV = this;
  this.Sl = n
}
H(P, uc);P.prototype[xc] = m;B = P.prototype;B.qd = Oa("Sl");B.addEventListener = function(a, b, c, d) {
  O(this, a, b, c, d)
};B.removeEventListener = function(a, b, c, d) {
  $c(this, a, b, c, d)
};
B.P = function(a) {
  var b, c = this.Sl;
  if (c) for (b = []; c; c = c.Sl) b.push(c);
  var c = this.eV,
      d = a.type || a;
  if (cb(a)) a = new L(a, c);
  else if (a instanceof L) a.target = a.target || c;
  else {
    var e = a;
    a = new L(d, c);
    Jc(a, e)
  }
  var e = m,
      f;
  if (b) for (var h = b.length - 1; !a.C && 0 <= h; h--) f = a.A = b[h], e = ed(f, d, m, a) && e;
  a.C || (f = a.A = c, e = ed(f, d, m, a) && e, a.C || (e = ed(f, d, p, a) && e));
  if (b) for (h = 0; !a.C && h < b.length; h++) f = a.A = b[h], e = ed(f, d, p, a) && e;
  return e
};B.L = function() {
  P.J.L.call(this);
  this.Qd && Qc(this.Qd);
  this.Sl = n
};

function ed(a, b, c, d) {
  b = a.Qd.b[String(b)];
  if (!b) return m;
  b = b.concat();
  for (var e = m, f = 0; f < b.length; ++f) {
    var h = b[f];
    if (h && !h.Gf && h.er == c) {
      var l = h.Zd,
          q = h.wd || h.src;
      h.ir && Pc(a.Qd, h);
      e = l.call(q, d) !== p && e
    }
  }
  return e && d.gC != p
};
var fd;

function gd(a) {
  return function() {
    return a
  }
}
var hd = gd(p),
    id = gd(m);

function jd(a) {
  Va.setTimeout(function() {
    g(a)
  }, 0)
}
var kd;

function waa() {
  if (Va.Promise && Va.Promise.resolve) {
    var a = Va.Promise.resolve();
    return function(b) {
      a.then(function() {
        try {
          b()
        } catch (a) {
          jd(a)
        }
      })
    }
  }
  var b = Va.MessageChannel;
  "undefined" === typeof b && "undefined" !== typeof window && window.postMessage && window.addEventListener && (b = function() {
    var a = document.createElement("iframe");
    a.style.display = "none";
    a.src = t;
    document.documentElement.appendChild(a);
    var b = a.contentWindow,
        a = b.document;
    a.open();
    a.write(t);
    a.close();
    var c = "callImmediate" + Math.random(),
        d = b.location.protocol + "//" + b.location.host,
        a = E(function(a) {
        if (a.origin == d || a.data == c) this.port1.onmessage()
      }, this);
    b.addEventListener("message", a, p);
    this.port1 = {};
    this.port2 = {
      postMessage: function() {
        b.postMessage(c, d)
      }
    }
  });
  if ("undefined" !== typeof b) {
    var c = new b,
        d = {},
        e = d;
    c.port1.onmessage = function() {
      d = d.next;
      var a = d.iG;
      d.iG = n;
      a()
    };
    return function(a) {
      e.next = {
        iG: a
      };
      e = e.next;
      c.port2.postMessage(0)
    }
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ?
  function(a) {
    var b = document.createElement("script");
    b.onreadystatechange = function() {
      b.onreadystatechange = n;
      b.parentNode.removeChild(b);
      b = n;
      a();
      a = n
    };
    document.documentElement.appendChild(b)
  } : function(a) {
    Va.setTimeout(a, 0)
  }
};

function ld(a, b) {
  if (!md) {
    var c = xaa;
    eb(Va.setImmediate) ? Va.setImmediate(c) : (kd || (kd = waa()), kd(c));
    md = m
  }
  nd.push(new yaa(a, b))
}
var md = p,
    nd = [];

function xaa() {
  for (; nd.length;) {
    var a = nd;
    nd = [];
    for (var b = 0; b < a.length; b++) {
      var c = a[b];
      try {
        c.b.call(c.scope)
      } catch (d) {
        jd(d)
      }
    }
  }
  md = p
}
function yaa(a, b) {
  this.b = a;
  this.scope = b
};

function od(a) {
  a.prototype.then = a.prototype.then;
  a.prototype.$goog_Thenable = m
}
function pd(a) {
  if (!a) return p;
  try {
    return !!a.$goog_Thenable
  } catch (b) {
    return p
  }
};

function qd(a, b) {
  this.o = 0;
  this.C = k;
  this.b = this.A = n;
  this.B = this.D = p;
  try {
    var c = this;
    a.call(b, function(a) {
      rd(c, 2, a)
    }, function(a) {
      rd(c, 3, a)
    })
  } catch (d) {
    rd(this, 3, d)
  }
}
qd.prototype.then = function(a, b, c) {
  return zaa(this, eb(a) ? a : n, eb(b) ? b : n, c)
};od(qd);qd.prototype.cancel = function(a) {
  0 == this.o && ld(function() {
    var b = new sd(a);
    td(this, b)
  }, this)
};

function td(a, b) {
  if (0 == a.o) if (a.A) {
    var c = a.A;
    if (c.b) {
      for (var d = 0, e = -1, f = 0, h; h = c.b[f]; f++) if (h = h.Ti) if (d++, h == a && (e = f), 0 <= e && 1 < d) break;
      0 <= e && (0 == c.o && 1 == d ? td(c, b) : (d = c.b.splice(e, 1)[0], ud(c, d, 3, b)))
    }
  } else rd(a, 3, b)
}
function Aaa(a, b) {
  a.b && a.b.length || 2 != a.o && 3 != a.o || vd(a);
  a.b || (a.b = []);
  a.b.push(b)
}

function zaa(a, b, c, d) {
  var e = {
    Ti: n,
    YD: n,
    ZD: n
  };
  e.Ti = new qd(function(a, h) {
    e.YD = b ?
    function(c) {
      try {
        var e = b.call(d, c);
        a(e)
      } catch (r) {
        h(r)
      }
    } : a;
    e.ZD = c ?
    function(b) {
      try {
        var e = c.call(d, b);
        !C(e) && b instanceof sd ? h(b) : a(e)
      } catch (r) {
        h(r)
      }
    } : h
  });
  e.Ti.A = a;
  Aaa(a, e);
  return e.Ti
}
qd.prototype.F = function(a) {
  this.o = 0;
  rd(this, 2, a)
};qd.prototype.H = function(a) {
  this.o = 0;
  rd(this, 3, a)
};

function rd(a, b, c) {
  if (0 == a.o) {
    if (a == c) b = 3, c = new TypeError("Promise cannot resolve to itself");
    else {
      if (pd(c)) {
        a.o = 1;
        c.then(a.F, a.H, a);
        return
      }
      if (fb(c)) try {
        var d = c.then;
        if (eb(d)) {
          Baa(a, c, d);
          return
        }
      } catch (e) {
        b = 3, c = e
      }
    }
    a.C = c;
    a.o = b;
    vd(a);
    3 != b || c instanceof sd || Caa(a, c)
  }
}
function Baa(a, b, c) {
  function d(b) {
    f || (f = m, a.H(b))
  }
  function e(b) {
    f || (f = m, a.F(b))
  }
  a.o = 1;
  var f = p;
  try {
    c.call(b, e, d)
  } catch (h) {
    d(h)
  }
}
function vd(a) {
  a.D || (a.D = m, ld(a.K, a))
}
qd.prototype.K = function() {
  for (; this.b && this.b.length;) {
    var a = this.b;
    this.b = [];
    for (var b = 0; b < a.length; b++) ud(this, a[b], this.o, this.C)
  }
  this.D = p
};

function ud(a, b, c, d) {
  if (2 == c) b.YD(d);
  else {
    for (; a && a.B; a = a.A) a.B = p;
    b.ZD(d)
  }
}
function Caa(a, b) {
  a.B = m;
  ld(function() {
    a.B && Daa.call(n, b)
  })
}
var Daa = jd;

function sd(a) {
  lb.call(this, a)
}
H(sd, lb);sd.prototype.name = "cancel";
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/

function wd(a, b) {
  this.D = [];
  this.O = a;
  this.da = b || n;
  this.B = this.b = p;
  this.A = k;
  this.K = this.W = this.F = p;
  this.C = 0;
  this.o = n;
  this.H = 0
}
wd.prototype.cancel = function(a) {
  if (this.b) this.A instanceof wd && this.A.cancel();
  else {
    if (this.o) {
      var b = this.o;
      delete this.o;
      a ? b.cancel(a) : (b.H--, 0 >= b.H && b.cancel())
    }
    this.O ? this.O.call(this.da, this) : this.K = m;
    this.b || (a = new xd, yd(this), zd(this, p, a))
  }
};wd.prototype.X = function(a, b) {
  this.F = p;
  zd(this, a, b)
};

function zd(a, b, c) {
  a.b = m;
  a.A = c;
  a.B = !b;
  Ad(a)
}

function yd(a) {
  a.b && (a.K || g(new Cd), a.K = p)
}
wd.prototype.callback = function(a) {
  yd(this);
  zd(this, m, a)
};

function Dd(a, b, c) {
  Ed(a, b, n, c)
}
function Ed(a, b, c, d) {
  a.D.push([b, c, d]);
  a.b && Ad(a)
}
wd.prototype.then = function(a, b, c) {
  var d, e, f = new qd(function(a, b) {
    d = a;
    e = b
  });
  Ed(this, d, function(a) {
    a instanceof xd ? f.cancel() : e(a)
  });
  return f.then(a, b, c)
};od(wd);

function Fd(a) {
  return Eb(a.D, function(a) {
    return eb(a[1])
  })
}

function Ad(a) {
  if (a.C && a.b && Fd(a)) {
    var b = a.C,
        c = Gd[b];
    c && (Va.clearTimeout(c.ap), delete Gd[b]);
    a.C = 0
  }
  a.o && (a.o.H--, delete a.o);
  for (var b = a.A, d = c = p; a.D.length && !a.F;) {
    var e = a.D.shift(),
        f = e[0],
        h = e[1],
        e = e[2];
    if (f = a.B ? h : f) try {
      var l = f.call(e || a.da, b);
      C(l) && (a.B = a.B && (l == b || l instanceof Error), a.A = b = l);
      pd(b) && (d = m, a.F = m)
    } catch (q) {
      b = q, a.B = m, Fd(a) || (c = m)
    }
  }
  a.A = b;
  d && (l = E(a.X, a, m), d = E(a.X, a, p), b instanceof wd ? (Ed(b, l, d), b.W = m) : b.then(l, d));
  c && (b = new Hd(b), Gd[b.ap] = b, a.C = b.ap)
}
function Cd() {
  lb.call(this)
}
H(Cd, lb);Cd.prototype.message = "Deferred has already fired";Cd.prototype.name = "AlreadyCalledError";

function xd() {
  lb.call(this)
}
H(xd, lb);xd.prototype.message = "Deferred was canceled";xd.prototype.name = "CanceledError";

function Hd(a) {
  this.ap = Va.setTimeout(E(this.o, this), 0);
  this.b = a
}
Hd.prototype.o = function() {
  delete Gd[this.ap];
  g(this.b)
};
var Gd = {};

function Id() {
  this.b = {};
  this.o = {};
  this.B = {};
  this.A = []
}
H(Id, uc);

function Jd(a, b) {
  var c = a.b[b];
  !c && b in a.o && (c = Kd(a, b));
  return c
}
function Ld(a, b) {
  var c = new wd;
  if (a.b[b]) c.callback(a.b[b]);
  else {
    var d = a.B[b];
    d ? Md(a.C, d, E(a.D, a, b, c)) : a.D(b, c)
  }
  return c
}
Id.prototype.D = function(a, b) {
  var c = this.b[a] || Kd(this, a);
  b.callback(c)
};

function Kd(a, b) {
  var c = (0, a.o[b])(a);
  a.b[b] = c;
  a.A.push(c);
  delete a.o[b];
  return c
}
function Nd(a, b) {
  return !!(b in a.b || b in a.o)
}
function Od(a, b, c) {
  a.b[b] = c;
  a.A.push(c)
}
Id.prototype.L = function() {
  Id.J.L.call(this);
  for (var a = 0; a < this.A.length; ++a) K(this.A[a]);
  this.A = [];
  this.b = {};
  this.o = {};
  this.B = {}
};

function Eaa(a) {
  var b = Faa,
      c;
  for (c in b) {
    var d = Number(c);
    a.B[d] = b[d]
  }
};

function Pd(a, b, c, d) {
  P.call(this);
  this.Cb = a;
  this.B = b;
  this.H = d || t;
  this.b = p;
  this.D = "1";
  this.A = p;
  this.C = c ? Pb(c) : n
}
H(Pd, P);B = Pd.prototype;B.FA = 60;B.HA = p;B.DA = p;B.getName = w("Cb");B.getTitle = w("H");
var Qd;

function Gaa(a, b) {
  Qd = new Rd(a);
  b && Od(b, 4, Qd);
  return Qd
}
function Sd(a) {
  return Qd.isEnabled(a)
}
function Rd(a) {
  this.b = a
}
Rd.prototype.isEnabled = function(a) {
  return !!this.b[a]
};

function Td(a) {
  return Jd(a, 4)
};
var Haa = RegExp("[\\\\'\r\n\b\"<>&\u0085\u2028\u2029]", "g"),
    Ud;Ud = "".localeCompare ?
function(a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase())
} : function(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  return a < b ? -1 : a === b ? 0 : 1
};
var Vd = ib();

function Q(a) {
  this.ja = a;
  this.C = {}
}
H(Q, uc);
var Wd = [];Q.prototype.I = function(a, b, c, d) {
  return Xd(this, a, b, c, d)
};

function Xd(a, b, c, d, e, f) {
  Za(c) || (c && (Wd[0] = c.toString()), c = Wd);
  for (var h = 0; h < c.length; h++) {
    var l = O(b, c[h], d || a.handleEvent, e || p, f || a.ja || a);
    if (!l) break;
    a.C[l.key] = l
  }
  return a
}
Q.prototype.b = function(a, b, c, d, e) {
  if (Za(b)) for (var f = 0; f < b.length; f++) this.b(a, b[f], c, d, e);
  else c = c || this.handleEvent, e = e || this.ja || this, c = Vc(c), d = !! d, b = yc(a) ? Rc(a.Qd, String(b), c, d, e) : a ? (a = Xc(a)) ? Rc(a, b, c, d, e) : n : n, b && (ad(b), delete this.C[b.key]);
  return this
};

function Yd(a) {
  zc(a.C, ad);
  a.C = {}
}
Q.prototype.L = function() {
  Q.J.L.call(this);
  Yd(this)
};Q.prototype.handleEvent = function() {
  g(Error("EventHandler.handleEvent not implemented"))
};

function Zd(a, b, c) {
  return Math.min(Math.max(a, b), c)
}
function $d(a, b, c) {
  return a + c * (b - a)
};
var ae = "StopIteration" in Va ? Va.StopIteration : Error("StopIteration");

function be() {}
be.prototype.next = function() {
  g(ae)
};be.prototype.Rc = function() {
  return this
};

function ce(a) {
  if (a instanceof be) return a;
  if (typeof a.Rc == Ea) return a.Rc(p);
  if ($a(a)) {
    var b = 0,
        c = new be;
    c.next = function() {
      for (;;) {
        b >= a.length && g(ae);
        if (b in a) return a[b++];
        b++
      }
    };
    return c
  }
  g(Error("Not implemented"))
};

function de(a, b) {
  this.o = {};
  this.b = [];
  this.B = this.A = 0;
  var c = arguments.length;
  if (1 < c) {
    c % 2 && g(Error("Uneven number of arguments"));
    for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
  } else a && ee(this, a)
}
B = de.prototype;B.mb = w("A");B.Hb = function() {
  fe(this);
  for (var a = [], b = 0; b < this.b.length; b++) a.push(this.o[this.b[b]]);
  return a
};B.Kb = function() {
  fe(this);
  return this.b.concat()
};B.Yk = function(a) {
  for (var b = 0; b < this.b.length; b++) {
    var c = this.b[b];
    if (ge(this.o, c) && this.o[c] == a) return m
  }
  return p
};
B.equals = function(a, b) {
  if (this === a) return m;
  if (this.A != a.mb()) return p;
  var c = b || Iaa;
  fe(this);
  for (var d, e = 0; d = this.b[e]; e++) if (!c(this.get(d), a.get(d))) return p;
  return m
};

function Iaa(a, b) {
  return a === b
}
B.isEmpty = function() {
  return 0 == this.A
};B.clear = function() {
  this.o = {};
  this.B = this.A = this.b.length = 0
};B.remove = function(a) {
  return ge(this.o, a) ? (delete this.o[a], this.A--, this.B++, this.b.length > 2 * this.A && fe(this), m) : p
};

function fe(a) {
  if (a.A != a.b.length) {
    for (var b = 0, c = 0; b < a.b.length;) {
      var d = a.b[b];
      ge(a.o, d) && (a.b[c++] = d);
      b++
    }
    a.b.length = c
  }
  if (a.A != a.b.length) {
    for (var e = {}, c = b = 0; b < a.b.length;) d = a.b[b], ge(e, d) || (a.b[c++] = d, e[d] = 1), b++;
    a.b.length = c
  }
}
B.get = function(a, b) {
  return ge(this.o, a) ? this.o[a] : b
};B.set = function(a, b) {
  ge(this.o, a) || (this.A++, this.b.push(a), this.B++);
  this.o[a] = b
};

function ee(a, b) {
  var c, d;
  b instanceof de ? (c = b.Kb(), d = b.Hb()) : (c = Dc(b), d = Cc(b));
  for (var e = 0; e < c.length; e++) a.set(c[e], d[e])
}
B.forEach = function(a, b) {
  for (var c = this.Kb(), d = 0; d < c.length; d++) {
    var e = c[d],
        f = this.get(e);
    a.call(b, f, e, this)
  }
};B.clone = function() {
  return new de(this)
};B.Rc = function(a) {
  fe(this);
  var b = 0,
      c = this.b,
      d = this.o,
      e = this.B,
      f = this,
      h = new be;
  h.next = function() {
    for (;;) {
      e != f.B && g(Error("The map has changed since the iterator was created"));
      b >= c.length && g(ae);
      var h = c[b++];
      return a ? h : d[h]
    }
  };
  return h
};

function ge(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
};

function he(a) {
  return eval("(" + a + ")")
}
var Jaa = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

function ie(a) {
  return typeof a.mb == Ea ? a.mb() : $a(a) || cb(a) ? a.length : Bc(a)
}
function je(a) {
  if (typeof a.Hb == Ea) return a.Hb();
  if (cb(a)) return a.split(t);
  if ($a(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
    return b
  }
  return Cc(a)
}
function ke(a) {
  if (typeof a.Kb == Ea) return a.Kb();
  if (typeof a.Hb != Ea) {
    if ($a(a) || cb(a)) {
      var b = [];
      a = a.length;
      for (var c = 0; c < a; c++) b.push(c);
      return b
    }
    return Dc(a)
  }
}

function le(a, b) {
  if (typeof a.forEach == Ea) a.forEach(b, k);
  else if ($a(a) || cb(a)) Bb(a, b, k);
  else
  for (var c = ke(a), d = je(a), e = d.length, f = 0; f < e; f++) b.call(k, d[f], c && c[f], a)
}
function me(a, b, c) {
  if (typeof a.every == Ea) return a.every(b, c);
  if ($a(a) || cb(a)) return Fb(a, b, c);
  for (var d = ke(a), e = je(a), f = e.length, h = 0; h < f; h++) if (!b.call(c, e[h], d && d[h], a)) return p;
  return m
};

function ne(a) {
  this.b = new de;
  if (a) {
    a = je(a);
    for (var b = a.length, c = 0; c < b; c++) this.add(a[c])
  }
}
function oe(a) {
  var b = typeof a;
  return b == Ha && a || b == Ea ? "o" + gb(a) : b.substr(0, 1) + a
}
B = ne.prototype;B.mb = function() {
  return this.b.mb()
};B.add = function(a) {
  this.b.set(oe(a), a)
};B.remove = function(a) {
  return this.b.remove(oe(a))
};B.clear = function() {
  this.b.clear()
};B.isEmpty = function() {
  return this.b.isEmpty()
};B.contains = function(a) {
  a = oe(a);
  return ge(this.b.o, a)
};B.Hb = function() {
  return this.b.Hb()
};B.clone = function() {
  return new ne(this)
};
B.equals = function(a) {
  return this.mb() == ie(a) && Kaa(this, a)
};

function Kaa(a, b) {
  var c = ie(b);
  if (a.mb() > c) return p;
  !(b instanceof ne) && 5 < c && (b = new ne(b));
  return me(a, function(a) {
    var c = b;
    return typeof c.contains == Ea ? c.contains(a) : typeof c.Yk == Ea ? c.Yk(a) : $a(c) || cb(c) ? Jb(c, a) : Ec(c, a)
  })
}
B.Rc = function() {
  return this.b.Rc(p)
};

function pe(a, b, c) {
  eb(a) ? c && (a = E(a, c)) : a && typeof a.handleEvent == Ea ? a = E(a.handleEvent, a) : g(Error("Invalid listener argument"));
  return 2147483647 < b ? -1 : Va.setTimeout(a, b || 0)
}
function qe(a) {
  Va.clearTimeout(a)
};
var Laa = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

function re(a) {
  if (se) {
    se = p;
    var b = Va.location;
    if (b) {
      var c = b.href;
      c && (c = (c = re(c)[3] || n) && decodeURIComponent(c)) && c != b.hostname && (se = m, g(Error()))
    }
  }
  return a.match(Laa)
}
var se = ic;

function te(a) {
  if (a[1]) {
    var b = a[0],
        c = b.indexOf("#");
    0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
    c = b.indexOf("?");
    0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = k)
  }
  return a.join(t)
}

function ue(a, b, c) {
  if (Za(b)) for (var d = 0; d < b.length; d++) ue(a, String(b[d]), c);
  else b != n && c.push("&", a, b === t ? t : "=", rb(b))
}
function ve(a, b, c) {
  for (c = c || 0; c < b.length; c += 2) ue(b[c], b[c + 1], a);
  return a
}
function we(a) {
  a = ve([], a, k);
  a[0] = t;
  return a.join(t)
};

function xe() {}
xe.prototype.b = n;

function ye(a) {
  var b;
  (b = a.b) || (b = {}, ze(a) && (b[0] = m, b[1] = m), b = a.b = b);
  return b
};
var Ae;

function Be() {}
H(Be, xe);

function Ce(a) {
  return (a = ze(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function ze(a) {
  if (!a.o && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.o = d
      } catch (e) {}
    }
    g(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.o
}
Ae = new Be;

function De(a) {
  P.call(this);
  this.headers = new de;
  this.da = a || n;
  this.o = p;
  this.X = this.b = n;
  this.C = t;
  this.B = 0;
  this.A = this.W = this.K = this.O = p;
  this.D = 0;
  this.H = n;
  this.F = t;
  this.Z = this.Ia = p
}
H(De, P);
var Maa = /^https?$/i,
    Naa = ["POST", "PUT"];B = De.prototype;B.sF = Qa(4);B.iz = w("F");
B.send = function(a, b, c, d) {
  this.b && g(Error("[goog.net.XhrIo] Object is active with another request=" + this.C + "; newUri=" + a));
  b = b ? b.toUpperCase() : "GET";
  this.C = a;
  this.B = 0;
  this.O = p;
  this.o = m;
  this.b = this.da ? Ce(this.da) : Ce(Ae);
  this.X = this.da ? ye(this.da) : ye(Ae);
  this.b.onreadystatechange = E(this.Iy, this);
  try {
    this.W = m, this.b.open(b, String(a), m), this.W = p
  } catch (e) {
    Ee(this);
    return
  }
  a = c || t;
  var f = this.headers.clone();
  d && le(d, function(a, b) {
    f.set(b, a)
  });
  d = Hb(f.Kb(), Oaa);
  c = Va.FormData && a instanceof Va.FormData;
  !Jb(Naa, b) || d || c || f.set(ha, "application/x-www-form-urlencoded;charset=utf-8");
  f.forEach(function(a, b) {
    this.b.setRequestHeader(b, a)
  }, this);
  this.F && (this.b.responseType = this.F);
  "withCredentials" in this.b && (this.b.withCredentials = this.Ia);
  try {
    Fe(this), 0 < this.D && ((this.Z = Paa(this.b)) ? (this.b.timeout = this.D, this.b.ontimeout = E(this.vm, this)) : this.H = pe(this.vm, this.D, this)), this.K = m, this.b.send(a), this.K = p
  } catch (h) {
    Ee(this)
  }
};

function Paa(a) {
  return J && qc(9) && db(a.timeout) && C(a.ontimeout)
}

function Oaa(a) {
  return "content-type" == a.toLowerCase()
}
B.vm = function() {
  "undefined" != typeof Ta && this.b && (this.B = 8, this.P("timeout"), this.abort(8))
};

function Ee(a) {
  a.o = p;
  a.b && (a.A = m, a.b.abort(), a.A = p);
  a.B = 5;
  Ge(a);
  He(a)
}
function Ge(a) {
  a.O || (a.O = m, a.P(wa), a.P("error"))
}
B.abort = function(a) {
  this.b && this.o && (this.o = p, this.A = m, this.b.abort(), this.A = p, this.B = a || 7, this.P(wa), this.P("abort"), He(this))
};B.L = function() {
  this.b && (this.o && (this.o = p, this.A = m, this.b.abort(), this.A = p), He(this, m));
  De.J.L.call(this)
};
B.Iy = function() {
  this.isDisposed() || (this.W || this.K || this.A ? Ie(this) : this.tV())
};B.tV = function() {
  Ie(this)
};

function Ie(a) {
  if (a.o && "undefined" != typeof Ta && (!a.X[1] || 4 != (a.b ? a.b.readyState : 0) || 2 != a.getStatus())) if (a.K && 4 == (a.b ? a.b.readyState : 0)) pe(a.Iy, 0, a);
  else if (a.P("readystatechange"), a.Sb()) {
    a.o = p;
    try {
      a.oe() ? (a.P(wa), a.P("success")) : (a.B = 6, a.getStatus(), Ge(a))
    } finally {
      He(a)
    }
  }
}

function He(a, b) {
  if (a.b) {
    Fe(a);
    var c = a.b,
        d = a.X[0] ? D : n;
    a.b = n;
    a.X = n;
    b || a.P("ready");
    try {
      c.onreadystatechange = d
    } catch (e) {}
  }
}
function Fe(a) {
  a.b && a.Z && (a.b.ontimeout = n);
  db(a.H) && (qe(a.H), a.H = n)
}
B.qc = function() {
  return !!this.b
};B.Sb = function() {
  return 4 == (this.b ? this.b.readyState : 0)
};
B.oe = function() {
  var a = this.getStatus(),
      b;
  t: switch (a) {
  case 200:
  case 201:
  case 202:
  case 204:
  case 206:
  case 304:
  case 1223:
    b = m;
    break t;
  default:
    b = p
  }
  if (!b) {
    if (a = 0 === a) a = re(String(this.C))[1] || n, !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1)), a = !Maa.test(a ? a.toLowerCase() : t);
    b = a
  }
  return b
};B.getStatus = function() {
  try {
    return 2 < (this.b ? this.b.readyState : 0) ? this.b.status : -1
  } catch (a) {
    return -1
  }
};B.Ki = function() {
  try {
    return this.b ? this.b.responseText : t
  } catch (a) {
    return t
  }
};B.ll = Qa(5);

function Je(a, b) {
  return a.b && a.Sb() ? a.b.getResponseHeader(b) : k
}
B.Or = w("B");

function Ke() {
  this.b = [];
  this.o = []
}
function Le(a) {
  Kb(a.b) && (a.b = a.o, a.b.reverse(), a.o = []);
  return a.b.pop()
}
B = Ke.prototype;B.mb = function() {
  return this.b.length + this.o.length
};B.isEmpty = function() {
  return Kb(this.b) && Kb(this.o)
};B.clear = function() {
  this.b = [];
  this.o = []
};B.contains = function(a) {
  return Jb(this.b, a) || Jb(this.o, a)
};B.remove = function(a) {
  var b = laa(this.b, a);
  if (0 > b) return Mb(this.o, a);
  Nb(this.b, b);
  return m
};
B.Hb = function() {
  for (var a = [], b = this.b.length - 1; 0 <= b; --b) a.push(this.b[b]);
  for (var c = this.o.length, b = 0; b < c; ++b) a.push(this.o[b]);
  return a
};

function Me(a, b) {
  this.F = a || 0;
  this.A = b || 10;
  this.F > this.A && g(Error("[goog.structs.Pool] Min can not be greater than max"));
  this.b = new Ke;
  this.o = new ne;
  this.km = 0;
  this.D = n;
  this.fq()
}
H(Me, uc);B = Me.prototype;B.xq = function() {
  var a = ib();
  if (!(this.D != n && a - this.D < this.km)) {
    for (var b; 0 < this.b.mb() && (b = Le(this.b), !this.Du(b));) this.fq();
    !b && this.mb() < this.A && (b = this.pu());
    b && (this.D = a, this.o.add(b));
    return b
  }
};B.pm = function(a) {
  this.o.remove(a);
  this.Du(a) && this.mb() < this.A ? this.b.o.push(a) : Ne(a)
};
B.fq = function() {
  for (var a = this.b; this.mb() < this.F;) {
    var b = this.pu();
    a.o.push(b)
  }
  for (; this.mb() > this.A && 0 < this.b.mb();) Ne(Le(a))
};B.pu = function() {
  return {}
};

function Ne(a) {
  if (typeof a.aa == Ea) a.aa();
  else
  for (var b in a) a[b] = n
}
B.Du = function(a) {
  return typeof a.oY == Ea ? a.oY() : m
};B.contains = function(a) {
  return this.b.contains(a) || this.o.contains(a)
};B.mb = function() {
  return this.b.mb() + this.o.mb()
};B.isEmpty = function() {
  return this.b.isEmpty() && this.o.isEmpty()
};
B.L = function() {
  Me.J.L.call(this);
  0 < this.o.mb() && g(Error("[goog.structs.Pool] Objects not released"));
  delete this.o;
  for (var a = this.b; !a.isEmpty();) Ne(Le(a));
  delete this.b
};

function Oe(a, b) {
  this.b = a;
  this.o = b
}
Oe.prototype.getKey = w("b");Oe.prototype.Ca = w("o");Oe.prototype.clone = function() {
  return new Oe(this.b, this.o)
};

function Pe(a) {
  this.b = [];
  if (a) t: {
    var b, c;
    if (a instanceof Pe) {
      if (b = a.Kb(), c = a.Hb(), 0 >= a.mb()) {
        a = this.b;
        for (var d = 0; d < b.length; d++) a.push(new Oe(b[d], c[d]));
        break t
      }
    } else b = Dc(a), c = Cc(a);
    for (d = 0; d < b.length; d++) this.insert(b[d], c[d])
  }
}
B = Pe.prototype;B.insert = function(a, b) {
  var c = this.b;
  c.push(new Oe(a, b));
  for (var c = c.length - 1, d = this.b, e = d[c]; 0 < c;) {
    var f = c - 1 >> 1;
    if (d[f].getKey() > e.getKey()) d[c] = d[f], c = f;
    else
    break
  }
  d[c] = e
};
B.remove = function() {
  var a = this.b,
      b = a.length,
      c = a[0];
  if (!(0 >= b)) {
    if (1 == b) Lb(a);
    else {
      a[0] = a.pop();
      for (var a = 0, b = this.b, d = b.length, e = b[a]; a < d >> 1;) {
        var f = 2 * a + 1,
            h = 2 * a + 2,
            f = h < d && b[h].getKey() < b[f].getKey() ? h : f;
        if (b[f].getKey() > e.getKey()) break;
        b[a] = b[f];
        a = f
      }
      b[a] = e
    }
    return c.Ca()
  }
};B.Hb = function() {
  for (var a = this.b, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].Ca());
  return b
};B.Kb = function() {
  for (var a = this.b, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].getKey());
  return b
};
B.Yk = function(a) {
  return Eb(this.b, function(b) {
    return b.Ca() == a
  })
};B.clone = function() {
  return new Pe(this)
};B.mb = function() {
  return this.b.length
};B.isEmpty = function() {
  return Kb(this.b)
};B.clear = function() {
  Lb(this.b)
};

function Qe() {
  Pe.call(this)
}
H(Qe, Pe);

function Re(a, b) {
  this.C = k;
  this.B = new Qe;
  Me.call(this, a, b)
}
H(Re, Me);B = Re.prototype;B.xq = function(a, b) {
  if (!a) {
    var c = Re.J.xq.call(this);
    c && this.km && (this.C = Va.setTimeout(E(this.$r, this), this.km));
    return c
  }
  this.B.insert(C(b) ? b : 100, a);
  this.$r()
};B.$r = function() {
  for (var a = this.B; 0 < a.mb();) {
    var b = this.xq();
    if (b) a.remove().apply(this, [b]);
    else
    break
  }
};B.pm = function(a) {
  Re.J.pm.call(this, a);
  this.$r()
};B.fq = function() {
  Re.J.fq.call(this);
  this.$r()
};
B.L = function() {
  Re.J.L.call(this);
  Va.clearTimeout(this.C);
  this.B.clear();
  this.B = n
};

function Se(a, b, c) {
  Re.call(this, b, c);
  this.H = a
}
H(Se, Re);Se.prototype.pu = function() {
  var a = new De,
      b = this.H;
  b && b.forEach(function(b, d) {
    a.headers.set(d, b)
  });
  return a
};Se.prototype.Du = function(a) {
  return !a.isDisposed() && !a.qc()
};

function Te(a, b, c, d, e) {
  P.call(this);
  this.D = C(a) ? a : 1;
  this.B = C(e) ? Math.max(0, e) : 0;
  this.A = new Se(b, c, d);
  this.b = new de;
  this.o = new Q(this)
}
H(Te, P);
var Ue = ["ready", wa, "success", "error", "abort", "timeout"];B = Te.prototype;B.send = function(a, b, c, d, e, f, h, l, q) {
  this.b.get(a) && g(Error("[goog.net.XhrManager] ID in use"));
  b = new Ve(b, E(this.zQ, this, a), c, d, e, h, C(l) ? l : this.D, q);
  this.b.set(a, b);
  a = E(this.AQ, this, a);
  this.A.xq(a, f);
  return b
};
B.abort = function(a, b) {
  var c = this.b.get(a);
  if (c) {
    var d = c.zk;
    c.hz = m;
    b && (d && (this.o.b(d, Ue, c.Gt), Zc(d, "ready", function() {
      var a = this.A;
      a.o.remove(d) && a.pm(d)
    }, p, this)), this.b.remove(a));
    d && d.abort()
  }
};B.AQ = function(a, b) {
  var c = this.b.get(a);
  c && !c.zk ? (this.o.I(b, Ue, c.Gt), b.D = Math.max(0, this.B), b.F = c.iz(), c.zk = b, this.P(new We("ready", this, a, b)), Xe(this, a, b), c.hz && b.abort()) : (c = this.A, c.o.remove(b) && c.pm(b))
};
B.zQ = function(a, b) {
  var c = b.target;
  switch (b.type) {
  case "ready":
    Xe(this, a, c);
    break;
  case wa:
    t: {
      var d = this.b.get(a);
      if (7 == c.Or() || c.oe() || d.kq > d.ju) if (this.P(new We(wa, this, a, c)), d && (d.el(m), d.rA)) {
        c = d.rA.call(c, b);
        break t
      }
      c = n
    }
    return c;
  case "success":
    this.P(new We("success", this, a, c));
    break;
  case "timeout":
  case "error":
    d = this.b.get(a);d.kq > d.ju && this.P(new We("error", this, a, c));
    break;
  case "abort":
    this.P(new We("abort", this, a, c))
  }
  return n
};

function Xe(a, b, c) {
  var d = a.b.get(b);
  !d || d.AA || d.kq > d.ju ? (d && (a.o.b(c, Ue, d.Gt), a.b.remove(b)), a = a.A, a.o.remove(c) && a.pm(c)) : (d.kq++, c.send(d.getUrl(), d.wb(), d.getContent(), d.Sz))
}
B.L = function() {
  Te.J.L.call(this);
  this.A.aa();
  this.A = n;
  this.o.aa();
  this.o = n;
  this.b.clear();
  this.b = n
};

function We(a, b, c, d) {
  L.call(this, a, b);
  this.id = c;
  this.zk = d
}
H(We, L);

function Ve(a, b, c, d, e, f, h, l) {
  this.B = a;
  this.o = c || "GET";
  this.b = d;
  this.Sz = e || n;
  this.ju = C(h) ? h : 1;
  this.kq = 0;
  this.hz = this.AA = p;
  this.Gt = b;
  this.rA = f;
  this.A = l || t;
  this.zk = n
}
B = Ve.prototype;B.getUrl = w("B");B.wb = w("o");B.getContent = w("b");B.el = Oa("AA");B.iz = w("A");

function Ye() {}
Xa(Ye);Ye.prototype.b = 0;

function Ze(a) {
  return ":" + (a.b++).toString(36)
};D.get = function(a) {
  return Jd(a, 17)
};
var _dbmode = p,
    Qaa = {
    fastui: ["FASTUI"],
    vr: ["VR"]
    };
var Raa = /\s*;\s*/;

function $e(a) {
  t: {
    for (var b = document.cookie.split(Raa), c = a.length, d = 0, e = b.length; d < e; ++d) {
      var f = b[d];
      if (!(f.length <= c || "=" != f.charAt(c)) && f.substring(0, c) === a) {
        a = f.substring(c + 1);
        break t
      }
    }
    a = n
  }
  return a && unescape(a)
}
var cf = /([\u200e\u200f]*)<\/?\w[^>]*>\1/g;

function df(a) {
  ef(a, "CALERR");
  ef(a, "CALERR2")
}

function ef(a, b) {
  for (var c = $e(b) || t, c = 0 == c.length ? [] : c.split("&"), d = p, e = 0; e < c.length; ++e) {
    var f = c[e],
        h = f.indexOf("=");
    if (0 <= h && f.substring(0, h) == a) {
      d = m;
      c[e] = a + "=" + (1 + parseInt(f.substring(h + 1), 10) || 1);
      break
    }
  }
  d || c.push(a + "=1");
  c = c.join("&");
  d = new Date(ib() + 864E5);
  e = ["/calendar/"];
  if (/\/$/.test(e[0]) && d instanceof Date && 2E3 > d.getFullYear()) for (f = e[0]; f = f.replace(/([^\/]+|\/)$/, t);) e.push(f);
  t: switch (b) {
  case "CAL":
  case "CALH":
    h = "." + window.location.host;
    break t;
  default:
    h = n
  }
  for (var l = 0; l < e.length; ++l) {
    var f =
    e[l],
        q = [];
    q.push(b + "=" + c);
    q.push("path=" + f);
    h && q.push("domain=" + h);
    d instanceof Date && q.push("expires=" + d.toUTCString());
    document.cookie = q.join("; ")
  }
}
kb("_incClientErr", df);

function ff(a, b) {
  var c;
  a instanceof ff ? (this.zj = C(b) ? b : a.zj, gf(this, a.Xe), this.yj = a.yj, this.Hg = a.Hg, hf(this, a.wh), jf(this, a.Ph), kf(this, a.b.clone()), lf(this, a.Pn)) : a && (c = re(String(a))) ? (this.zj = !! b, gf(this, c[1] || t, m), this.yj = mf(c[2] || t), this.Hg = mf(c[3] || t), hf(this, c[4]), jf(this, c[5] || t, m), kf(this, c[6] || t, m), lf(this, c[7] || t, m)) : (this.zj = !! b, this.b = new nf(n, 0, this.zj))
}
B = ff.prototype;B.Xe = t;B.yj = t;B.Hg = t;B.wh = n;B.Ph = t;B.Pn = t;B.zj = p;
B.toString = function() {
  var a = [],
      b = this.Xe;
  b && a.push(of(b, pf), ":");
  if (b = this.Hg) {
    a.push("//");
    var c = this.yj;
    c && a.push(of(c, pf), "@");
    a.push(rb(b));
    b = this.wh;
    b != n && a.push(":", String(b))
  }
  if (b = this.Ph) this.Hg && "/" != b.charAt(0) && a.push("/"), a.push(of(b, "/" == b.charAt(0) ? Saa : Taa));
  (b = this.b.toString()) && a.push("?", b);
  (b = this.Pn) && a.push("#", of(b, Uaa));
  return a.join(t)
};B.clone = function() {
  return new ff(this)
};

function gf(a, b, c) {
  a.Xe = c ? mf(b) : b;
  a.Xe && (a.Xe = a.Xe.replace(/:$/, t))
}

function hf(a, b) {
  b ? (b = Number(b), (isNaN(b) || 0 > b) && g(Error("Bad port number " + b)), a.wh = b) : a.wh = n
}
function jf(a, b, c) {
  a.Ph = c ? mf(b) : b;
  return a
}
function kf(a, b, c) {
  b instanceof nf ? (a.b = b, Vaa(a.b, a.zj)) : (c || (b = of(b, Waa)), a.b = new nf(b, 0, a.zj));
  return a
}
function lf(a, b, c) {
  a.Pn = c ? mf(b) : b;
  return a
}
function qf(a) {
  return a instanceof ff ? a.clone() : new ff(a, k)
}
function mf(a) {
  return a ? decodeURIComponent(a) : t
}
function of(a, b) {
  return cb(a) ? encodeURI(a).replace(b, Xaa) : n
}

function Xaa(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var pf = /[#\/\?@]/g,
    Taa = /[\#\?:]/g,
    Saa = /[\#\?]/g,
    Waa = /[\#\?@]/g,
    Uaa = /#/g;

function nf(a, b, c) {
  this.b = a || n;
  this.o = !! c
}
function rf(a) {
  if (!a.gc && (a.gc = new de, a.Bd = 0, a.b)) for (var b = a.b.split("&"), c = 0; c < b.length; c++) {
    var d = b[c].indexOf("="),
        e = n,
        f = n;
    0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
    e = decodeURIComponent(e.replace(/\+/g, " "));
    e = sf(a, e);
    a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : t)
  }
}
B = nf.prototype;
B.gc = n;B.Bd = n;B.mb = function() {
  rf(this);
  return this.Bd
};B.add = function(a, b) {
  rf(this);
  this.b = n;
  a = sf(this, a);
  var c = this.gc.get(a);
  c || this.gc.set(a, c = []);
  c.push(b);
  this.Bd++;
  return this
};B.remove = function(a) {
  rf(this);
  a = sf(this, a);
  return ge(this.gc.o, a) ? (this.b = n, this.Bd -= this.gc.get(a).length, this.gc.remove(a)) : p
};B.clear = function() {
  this.gc = this.b = n;
  this.Bd = 0
};B.isEmpty = function() {
  rf(this);
  return 0 == this.Bd
};

function tf(a, b) {
  rf(a);
  b = sf(a, b);
  return ge(a.gc.o, b)
}
B.Yk = function(a) {
  var b = this.Hb();
  return Jb(b, a)
};B.Kb = function() {
  rf(this);
  for (var a = this.gc.Hb(), b = this.gc.Kb(), c = [], d = 0; d < b.length; d++) for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
  return c
};B.Hb = function(a) {
  rf(this);
  var b = [];
  if (cb(a)) tf(this, a) && (b = Ob(b, this.gc.get(sf(this, a))));
  else {
    a = this.gc.Hb();
    for (var c = 0; c < a.length; c++) b = Ob(b, a[c])
  }
  return b
};B.set = function(a, b) {
  rf(this);
  this.b = n;
  a = sf(this, a);
  tf(this, a) && (this.Bd -= this.gc.get(a).length);
  this.gc.set(a, [b]);
  this.Bd++;
  return this
};
B.get = function(a, b) {
  var c = a ? this.Hb(a) : [];
  return 0 < c.length ? String(c[0]) : b
};B.toString = function() {
  if (this.b) return this.b;
  if (!this.gc) return t;
  for (var a = [], b = this.gc.Kb(), c = 0; c < b.length; c++) for (var d = b[c], e = rb(d), d = this.Hb(d), f = 0; f < d.length; f++) {
    var h = e;
    d[f] !== t && (h += "=" + rb(d[f]));
    a.push(h)
  }
  return this.b = a.join("&")
};B.clone = function() {
  var a = new nf;
  a.b = this.b;
  this.gc && (a.gc = this.gc.clone(), a.Bd = this.Bd);
  return a
};

function sf(a, b) {
  var c = String(b);
  a.o && (c = c.toLowerCase());
  return c
}

function Vaa(a, b) {
  b && !a.o && (rf(a), a.b = n, a.gc.forEach(function(a, b) {
    var e = b.toLowerCase();
    b != e && (this.remove(b), this.remove(e), 0 < a.length && (this.b = n, this.gc.set(sf(this, e), Pb(a)), this.Bd += a.length))
  }, a));
  a.o = b
};
var uf = "undefined" != typeof window ? window.location.href : t;uf.replace(/#.*/, t);

function vf(a) {
  return !(!a || !a.match(/^(?:https?:)?\/\/(?:[^:\/]+\.)?google\.com(?::\d+)?(?:\/.*$|$)/))
}
function wf(a) {
  return vf(a) ? a.replace(/^https?:\/\//i, "//") : a
}
function xf(a) {
  a = qf(a || t);
  return "http" != a.Xe && "https" != a.Xe && a.Xe != t ? t : a.toString()
};
var yf = /^\s*(while\s*\(\s*1\s*\)\s*;|\)\]\}\'\s*\n)/;

function zf(a, b, c) {
  P.call(this);
  this.F = a;
  this.D = c || new Te;
  this.B = b;
  this.b = {};
  this.o = {};
  this.A = m
}
H(zf, P);

function Af(a) {
  return Jd(a, 6)
}
B = zf.prototype;B.oK = Ye.M();

function Bf(a, b, c, d, e, f, h, l, q, r) {
  var s = q || 0,
      u = b;
  if (Fc(a.b)) try {
    a.P("b")
  } catch (x) {}
  q = Ze(a.oK);
  h = h || {};
  h["X-If-No-Redirect"] = 1;
  l = l || "POST";
  if (a.B) if ("GET" == l) {
    var z = b;
    (b = $e(a.B.b)) ? (z = [z, "&", Ka], b != n && z.push("=", rb(b)), b = te(z)) : b = z
  } else {
    c = c || [];
    if (z = $e(a.B.b)) c = c || [], c.push(Ka, z);
    c = c || k
  }
  a.A ? (u = c && we(c), a.b[q] = a.D.send(q, b, l, u, h, k, E(a.nK, a, q, d, e, f || a.Tz, s, r))) : a.o[u] && (a = E(a.pK, a, b, c, e, f || a.Tz), Va.setTimeout(a, 0));
  return q
}
B.send = function(a, b, c, d, e, f, h, l) {
  return Bf(this, a, b, c, d, e, f, h, l)
};

function Cf(a, b, c, d, e, f, h) {
  Bf(a, b, c, d, e, f, k, k, 2, h)
}
B.nK = function(a, b, c, d, e, f, h) {
  try {
    var l = h.target;
    this.P(new Df(l));
    if (this.C && this.C.o(l)) d();
    else if (l.oe()) {
      var q = l.Ki().replace(yf, t);
      0 == e ? q = he(q) : 2 == e && (f && f(), Yaa(this, q));
      c(q)
    } else if (412 == l.getStatus()) {
      var r = Je(l, "X-Redirect-Location");
      if (r) {
        var s = this.b[a];
        this.send(r, s.getContent(), b, c, d, s.Sz, s.wb())
      }
    } else {
      var u = l.getStatus();
      100 > u || 600 <= u || df(b);
      d()
    }
  } catch (x) {} finally {
    delete this.b[a], this.P("c"), Fc(this.b) && this.P("d")
  }
};

function Yaa(a, b) {
  var c = eval(b);
  c instanceof Array && c.length && Ef(D.get(a.F), c)
}
B.abort = function(a, b) {
  this.D.abort(a, b);
  b && (delete this.b[a], this.P("c"), Fc(this.b) && this.P("d"))
};B.Tz = D;B.pK = function(a, b, c, d) {
  this.o[a](b, c, d)
};

function Zaa(a, b) {
  a.A = b
}
function Df(a) {
  L.call(this, "e");
  this.o = a
}
H(Df, L);

function Ff(a, b) {
  this.o = a;
  this.b = b
}
Ff.prototype.getId = w("o");

function Gf(a, b) {
  for (var c = a.b.length - 2; 0 < c; c -= 2) if (b >= a.b[c]) return a.b[c + 1];
  return a.b[0]
}
var Hf = {};

function _setTzTransitions(a) {
  a = a.split("{");
  for (var b = a[0], c = [], d = 1; d < a.length; d++) c.push(parseInt(a[d], 36));
  1 == c.length % 2 && (Hf[b] = new Ff(b, c))
}

function If(a, b, c) {
  if (b == c) return 0;
  for (var d = [b, c], e = {}, f = m, h = ["tzMode", "1"], l = 0; l < d.length; ++l) {
    var q = d[l],
        r = Hf[q];
    r ? e[q] = r : (f = p, h.push("ctz", q))
  }
  f || Cf(Af(R()), "dispTzOffset", h, 0, D);
  b = e[b];
  c = e[c];
  return b && c ? Gf(b, a) - Gf(c, a) : n
};

function $aa() {};

function Jf(a, b) {
  this.o = a;
  this.Je = b || t
}
Jf.prototype.Ma = w("o");Jf.prototype.tc = w("Je");

function Kf(a) {
  return a.Je || a.o
};

function Lf(a, b, c, d, e, f, h) {
  Jf.call(this, b, c);
  this.uid = a;
  this.b = d || 100;
  this.A = e || t;
  this.B = f || n;
  this.D = h || b
}
H(Lf, Jf);Lf.prototype.Bb = w("b");Lf.prototype.Mc = function() {
  return 103 == this.b
};

function Mf(a) {
  this.b = {};
  this.o = {};
  if (a) for (var b in a) this.put(b, a[b])
}
Mf.prototype.put = function(a, b) {
  this.b[a] = b;
  this.o[b] = a
};Mf.prototype.get = function(a) {
  return this.b[a]
};
var Nf = 0;

function Of() {}
Of.prototype.b = Ma();

function Pf() {
  var a = new Of;
  return E(a.b, a)
};
var aba = Pf();
var bba = Pf();
var cba = Pf();

function Qf(a, b) {
  this.A = a;
  this.o = xf(b)
}
Qf.prototype.getTitle = function() {
  return this.A || t
};

function Rf(a) {
  return !!a.o && "CHIP" != a.b.d
}
Qf.prototype.lq = function() {
  return this.o ? m : p
};

function Sf(a, b, c, d, e) {
  this.Z = a;
  this.Ri(b, c);
  this.hi = d ? d : 0;
  this.C = e || {}
}
B = Sf.prototype;B.mc = t;B.Bc = t;B.lG = t;B.Tc = t;B.Hd = 3;
var dba = Pf();Sf.prototype.Dc = -1;Sf.prototype.lf = Oa("Dc");
var eba = Lc(0, 1, 2, 3, 6);B = Sf.prototype;B.getId = w("Z");B.Fa = w("wa");B.Za = w("ka");

function Tf(a) {
  return new Uf(a.Fa(), a.Za())
}
B.Nv = function(a) {
  return a.Nv(this.Fa(), this.Za())
};

function Vf(a, b) {
  return b(a.Fa().ta(), a.Za().ta())
}
function Wf(a, b) {
  return a.Za().ta() < b.ta()
}
function Xf(a) {
  return Yf(a.Za(), a.Fa())
}
B.Ri = function(a, b) {
  this.wa = a;
  this.ka = b;
  var c = a.ta();
  this.X = isNaN(a.hour);
  this.di = b.ta() >= Zf(c);
  this.da = !this.X && 0 == $f(b);
  this.Ia = (c << 1) + !this.di + c % 1
};B.oc = function() {
  return 1 == this.hi
};B.getTitle = w("lG");B.setTitle = Oa("lG");B.Aa = w("Ra");B.Sj = function() {
  return this.O || t
};B.Xc = y(n);B.Db = w("X");B.Yf = y(p);B.hb = y(p);B.Ge = y(p);B.Ws = y(p);B.equals = function(a) {
  return this == a ? m : !! a && a.getId() == this.getId()
};

function ag(a, b, c) {
  return b.Ia - c.Ia || c.Za().ta() - b.Za().ta() || a(b, c) || qb(b.getTitle(), c.getTitle())
};

function bg() {
  this.o = new Mf({
    AVAILABLE: 1,
    BLOCKING: 2,
    BUSY: 0
  });
  this.A = new Mf({
    SECRET: 4,
    PRIVATE: 3,
    PUBLIC: 2,
    DEFAULT: 1
  });
  this.b = new Mf({
    0: 100,
    2: 102,
    3: 103,
    4: 104,
    5: 105,
    6: 106,
    7: 107,
    8: 108
  });
  this.B = new Mf({
    VIEW: 0,
    TEMPLATE: 1,
    RESPOND: 2,
    EDIT: 3,
    CREATE: 4,
    VIEW_ORIGINAL: 5,
    RESTORE_ORIGINAL: 6
  })
}
Xa(bg);
var cg = RegExp("[\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]"),
    fba = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),
    dg = RegExp("^[^\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),
    eg = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]"),
    gba = /^http:\/\/.*/,
    fg = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(&lt;.*?(&gt;)+)/g,
    hba = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;

function iba(a) {
  return cg.test(a) ? a.replace(fg, "<span dir=rtl>$&</span>") : a.replace(fg, "<span dir=ltr>$&</span>")
}
var jba = /\s+/,
    kba = /\d/;

function hg(a) {
  var b = 0,
      c = 0,
      d = p;
  a = a.split(jba);
  for (var e = 0; e < a.length; e++) {
    var f = a[e];
    eg.test(f) ? (b++, c++) : gba.test(f) ? d = m : fba.test(f) ? c++ : kba.test(f) && (d = m)
  }
  return -1 == (0 == c ? d ? 1 : 0 : .4 < b / c ? -1 : 1)
};

function ig() {
  P.call(this);
  this.b = {};
  this.o = {}
}
H(ig, P);Xa(ig);ig.prototype.L = function() {
  this.o = this.b = n;
  ig.J.L.call(this)
};

function jg(a, b) {
  var c = a.b[b];
  return c ? c : 0 <= b.indexOf("@") ? a.o[b] : n
}
ig.prototype.forEach = function(a) {
  for (var b in this.b) a(this.b[b])
};

function kg(a, b) {
  var c = a.b[b.uid],
      c = lg(c, b);
  a.b[b.uid] = c;
  c = a.o[b.Ma()];
  c = lg(c, b);
  a.o[b.Ma()] = c;
  a.P(new mg(b))
}
function mg(a) {
  L.call(this, "gcal$pae");
  this.xh = a
}
H(mg, L);

function lba(a) {
  for (var b = ig.M(), c = bg.M(), d = 0; d < a.length; d += 5) {
    var e = a[d],
        f = c.b.get(parseInt(a[d + 1], 10));
    kg(b, new Lf(e, a[d + 3], a[d + 2], f, a[d + 4]))
  }
}
function lg(a, b) {
  if (!a) return b;
  var c = b.uid,
      d = b.Ma(),
      e = b.tc();
  e && b.Ma() != e || (e = a.tc());
  return new Lf(c, d, e, b.Bb(), b.A || a.A)
};

function og(a) {
  return Jd(a, 20)
};

function pg() {
  return "//calendar.google.com/googlecalendar/images/blank.gif"
};

function qg(a, b, c, d, e) {
  this.Cb = a;
  this.ud = b;
  this.fb = c || t;
  a = this.fb ? this.fb : (a = this.ud.match(mba)) ? a[0] : this.ud;
  this.A = a;
  this.o = d || 0;
  this.b = e || gd(this.o)
}
var mba = /GMT[+-](([01]\d((?=:00)|(:\d{2})))|((\?)*))/;qg.prototype.getName = w("Cb");qg.prototype.he = Qa(7);qg.prototype.equals = function(a) {
  return a !== n && this.Cb == a.getName() && this.ud == a.ud
};

function rg(a) {
  return 10 > a ? "0" + a : String(a)
}
var sg = [, 31, , 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function tg(a, b) {
  return sg[b] || sg[a] || (sg[a] = 28 + ((a & 3 ? 0 : a % 100 || !(a % 400)) ? 1 : 0))
}
function ug(a) {
  return 0 == a || 6 == a
}
var vg = {};

function yg(a, b) {
  var c = a << 4 | b;
  return vg[c] || (vg[c] = (new Date(a, b - 1, 1, 12, 0, 0, 0)).getDay())
}
var nba = [, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

function zg(a, b, c) {
  a = 2 >= b || 29 - tg(a, 2);
  return nba[b] + c - a
};
var Ag = 1 / 131072;

function Bg(a, b, c) {
  return ((a - 1970 << 4) + b << 5) + c
}
var Cg = Bg(-65535, 1, 1),
    oba = Bg(65535, 12, 31);

function Dg(a) {
  return String((a >> 9) + 1970) + rg(a >> 5 & 15) + rg(a & 31)
}
function Zf(a) {
  if (28 > (a & 31)) return a + 1;
  var b = a >> 5 & 15;
  if ((a & 31) < (sg[b] || tg((a >> 9) + 1970, 2))) return a + 1;
  var c = (a >> 9) + 1970;
  12 < ++b && (b = 1, ++c);
  return Bg(c, b, 1) + a % 1
}
function Eg(a, b) {
  var c = a;
  a % 1 || (a += Ag);
  (b - Ag) % 1 || (b -= Ag);
  return function(d, e) {
    return d < b && (e > a || d >= c)
  }
};

function Fg() {}
B = Fg.prototype;B.year = NaN;B.month = NaN;B.Y = NaN;B.hour = NaN;B.minute = NaN;B.second = NaN;B.toString = function() {
  return this.A || (this.A = this.El())
};B.cb = function() {
  return this.ta() | 0
};B.min = function(a) {
  return this.ta() < a.ta() ? this : a
};B.max = function(a) {
  return this.ta() > a.ta() ? this : a
};

function Yf(a, b) {
  var c = Gg(a);
  isNaN(a.year) || (c.year = NaN, c.month = NaN, c.Y = Hg(a, b));
  isNaN(a.hour) || (c.hour -= b.hour, c.minute -= b.minute, c.second -= b.second);
  return new Ig(c.Y, c.hour, c.minute, c.second)
}

function Hg(a, b) {
  var c = a.year,
      d = a.month,
      e = a.Y,
      f = b.year,
      h = b.month,
      l = b.Y;
  return c == f ? zg(c, d, e) - zg(f, h, l) : Math.round((Date.UTC(c, d - 1, e) - Date.UTC(f, h - 1, l)) / 864E5)
}
function Jg(a) {
  var b = a.year,
      c = a.month;
  a = a.Y;
  28 < ++a && a > tg(b, c) && (a = 1, 13 === ++c && (c = 1, ++b));
  return Kg(b, c, a)
}
function Lg(a) {
  return a.hour || a.minute || a.second ? Jg(a) : a.va()
}
function Mg(a, b) {
  return Ng(a.year, a.month, a.Y + b).va()
}
function Og(a, b) {
  return Mg(a, -((a.Jb() - b + 7) % 7))
}
function Pg(a, b) {
  return Mg(a, (b - a.Jb() + 7) % 7)
}
B.Jb = function() {
  var a = this.Y;
  return (yg(this.year, this.month) + a - 1) % 7
};B.va = function() {
  return Kg(this.year || 0, this.month || 1, this.Y || 1)
};B.Ea = function() {
  return new Qg(this.year || 0, this.month || 1, this.Y || 1, this.hour || 0, this.minute || 0, this.second || 0)
};B.Lb = function() {
  return new Rg(this.hour || 0, this.minute || 0, this.second || 0)
};

function $f(a) {
  return 60 * a.hour + a.minute
};

function Sg() {}
H(Sg, Fg);

function Rg(a, b, c) {
  this.hour = a;
  this.minute = b;
  this.second = c
}
H(Rg, Fg);B = Rg.prototype;B.Lb = function() {
  return this
};B.El = function() {
  return ub("T", rg(this.hour), rg(this.minute), rg(this.second))
};B.equals = function(a) {
  return !!a && this.constructor === a.constructor && this.ta() == a.ta()
};B.ta = function() {
  return this.b || (this.b = (((this.hour << 6) + this.minute << 6) + this.second + 1) * Ag)
};B.Sb = y(m);

function Qg(a, b, c, d, e, f) {
  this.year = a;
  this.month = b;
  this.Y = c;
  this.hour = d;
  this.minute = e;
  this.second = f
}
H(Qg, Sg);B = Qg.prototype;B.Ea = function() {
  return this
};B.ta = function() {
  return this.b || (this.b = ((this.year - 1970 << 4) + this.month << 5) + this.Y + (((this.hour << 6) + this.minute << 6) + this.second + 1) * Ag)
};B.Sb = y(m);B.El = function() {
  return ub(String(this.year), rg(this.month), rg(this.Y), "T", rg(this.hour), rg(this.minute), rg(this.second))
};B.equals = function(a) {
  return !!a && this.constructor === a.constructor && this.ta() == a.ta()
};

function Tg(a) {
  return new Qg(a.getUTCFullYear(), a.getUTCMonth() + 1, a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds())
};

function Ug() {}
Ug.prototype.get = function(a, b) {
  var c = a.charAt(b);
  return "1" == c ? m : "0" == c ? p : k
};

function Vg() {
  P.call(this);
  this.B = new Ug
}
H(Vg, P);

function Wg(a) {
  return a.getString("customCalMode", "custom,4")
}
Vg.prototype.getString = function(a, b) {
  var c = this.get(a);
  return C(c) ? c : b
};

function Xg(a, b, c) {
  a = a.get(b);
  return C(a) ? parseFloat(a) : cb(c) ? parseFloat(c) : c
}
function Yg(a, b, c) {
  a = a.get(b);
  return C(a) ? "true" == a : cb(c) ? "true" == c : c
}
function Zg(a, b, c) {
  var d = a.getString("bool", t);
  a = a.B.get(d, b);
  return C(a) ? a : c
};

function $g(a) {
  P.call(this);
  this.B = a
}
H($g, P);$g.prototype.getId = w("B");$g.prototype.getKey = w("B");$g.prototype.hb = y(p);

function ah(a) {
  P.call(this);
  this.IX = (Nf++).toString(36);
  this.Ib = new P;
  a = a || [];
  for (var b = {}, c = 0; c < a.length; c++) {
    var d = a[c],
        e = d.getKey();
    b[e] = d;
    d.qd && d.qd(this.Ib)
  }
  this.Ia = b;
  this.EX = a.length;
  this.da = Hc(b);
  this.zb = a.length;
  O(this.Ib, v, E(this.JX, this))
}
H(ah, P);B = ah.prototype;B.Il = n;B.os = p;B.Th = 0;B.L = function() {
  ah.J.L.call(this);
  for (var a in this.da) K(this.da[a]);
  this.Ib.aa()
};B.size = w("zb");B.isEmpty = function() {
  return 0 == this.zb
};B.getItem = function(a) {
  return this.da[a]
};
B.contains = function(a) {
  return a in this.da
};B.add = function(a) {
  var b = a.getKey();
  if (b in this.da) return p;
  this.da[b] = a;
  this.zb++;
  a.qd && a.qd(this.Ib);
  this.Th && a.Eb && a.Eb();
  bh(this, "f", a);
  ch(this);
  return m
};B.remove = function(a) {
  if (!(a in this.da)) return p;
  var b = this.da[a];
  Gc(this.da, a);
  this.zb--;
  b.qd && b.qd(n);
  this.Th && b.xb && b.xb();
  bh(this, "g", b);
  ch(this);
  return m
};B.removeItem = Qa(8);B.Kb = function() {
  return Dc(this.da)
};

function dh(a) {
  return Cc(a.da)
}
B.Ow = function() {
  return 0 < this.Th
};
B.Eb = function() {
  this.Th++;
  if (1 == this.Th) for (var a in this.da) {
    var b = this.da[a];
    b.Eb && b.Eb()
  }
};B.xb = function() {
  if (1 == this.Th) for (var a in this.da) {
    var b = this.da[a];
    b.xb && b.xb()
  }
  this.Th--;
  ch(this)
};

function bh(a, b, c) {
  var d = a.Il || {};
  b in d || (d[b] = []);
  d[b].push(c);
  a.Il = d
}
B.JX = function(a) {
  bh(this, v, a.target);
  this.os = m;
  ch(this)
};B.Ba = Qa(10);B.equals = function(a) {
  return a === this
};B.getKey = w("IX");

function ch(a) {
  if (!a.Th && (a.Il || a.os)) {
    a.Eb();
    var b = a.os;
    a.os = p;
    a.Il && (b = new eh(a.Il), a.Il = n, a.P(b), b = m);
    b && a.P(v);
    a.xb()
  }
}
function eh(a) {
  L.call(this, "h");
  this.o = a
}
H(eh, L);

function fh(a, b) {
  return a.o[b] || []
};

function gh(a, b, c, d, e) {
  this.D = a;
  this.B = b;
  this.b = c;
  this.A = d;
  this.o = e
}
function hh(a, b) {
  var c = parseInt(a.substr(1, 2), 16),
      d = parseInt(a.substr(3, 2), 16),
      e = parseInt(a.substr(5, 2), 16),
      c = Math.floor(255 - (255 - c) * b),
      d = Math.floor(255 - (255 - d) * b),
      e = Math.floor(255 - (255 - e) * b);
  return "#" + ih(c) + ih(d) + ih(e)
}

function jh(a) {
  var b;
  b = parseInt(a.substr(1, 2), 16);
  var c = parseInt(a.substr(3, 2), 16),
      d = parseInt(a.substr(5, 2), 16);
  b *= .7;
  var c = .7 * c,
      d = .7 * d,
      e = .3 * b + .59 * c + .11 * d,
      f, h = Math.exp(e / 255);
  f = (.595716 * b - .274453 * c - .321263 * d) * h;
  d = (.211456 * b - .522591 * c + .311135 * d) * h;
  b = Math.floor(Math.min(Math.max(e + .9563 * f + .621 * d, 0), 255));
  c = Math.floor(Math.min(Math.max(e - .2721 * f - .6474 * d, 0), 255));
  d = Math.floor(Math.min(Math.max(e - 1.107 * f + 1.7046 * d, 0), 255));
  b = "#" + ih(b) + ih(c) + ih(d);
  c = hh(a, .33);
  e = Math.min(1, .5 + (parseInt(a.substr(1, 2), 16) + parseInt(a.substr(3, 2), 16) + parseInt(a.substr(5, 2), 16)) / 3 / 255 / 1.5);
  e = hh(a, e);
  return new gh(a, b, a, e, c)
}
gh.prototype.equals = function(a) {
  return this.color == a.color
};
var kh = p;

function lh(a) {
  var b = mh(a.toUpperCase()),
      c;
  if (!(43 <= b)) {
    var b = 0,
        d = parseInt(a.substr(1, 2), 16) / 255,
        e = parseInt(a.substr(3, 2), 16) / 255;
    a = parseInt(a.substr(5, 2), 16) / 255;
    for (var f = 43; 66 > f; f++) {
      var h = nh(f, 0),
          l = d - parseInt(h.substr(1, 2), 16) / 255,
          q = e - parseInt(h.substr(3, 2), 16) / 255,
          h = a - parseInt(h.substr(5, 2), 16) / 255,
          l = l * l + q * q + h * h;
      if (43 == f || l < c) b = f, c = l
    }
  }
  return c = b
}

function nh(a, b) {
  return "#" + "666666888888aaaaaabbbbbbdddddda32929cc3333d96666e69999f0c2c2b1365fdd4477e67399eea2bbf5c7d67a367a994499b373b3cca2cce1c7e15229a36633cc8c66d9b399e6d1c2f029527a336699668cb399b3ccc2d1e12952a33366cc668cd999b3e6c2d1f01b887a22aa9959bfb391d5ccbde6e128754e32926265ad8999c9b1c2dfd00d78131096184cb05288cb8cb8e0ba52880066aa008cbf40b3d580d1e6b388880eaaaa11bfbf4dd5d588e6e6b8ab8b00d6ae00e0c240ebd780f3e7b3be6d00ee8800f2a640f7c480fadcb3b1440edd5511e6804deeaa88f5ccb8865a5aa87070be9494d4b8b8e5d4d47057708c6d8ca992a9c6b6c6ddd3dd4e5d6c6274878997a5b1bac3d0d6db5a69867083a894a2beb8c1d4d4dae54a716c5c8d8785aaa5aec6c3cedddb6e6e41898951a7a77dc4c4a8dcdccb8d6f47b08b59c4a883d8c5ace7dcce8531049f3501c7561ee2723ad6a58c6914268a2d38b5515dcd6a75d0a4a95c1158962181c244abda5dc4d69fcc23164e402175603f997d5cb5a89ac2182c5730487e536ca66d86c0a4afc9060d5e1821863640ad525cc8969acb125a121f753c3c995b5ab67998c2a62f62133d82155ca63279c34fa6c7942f63095a9a087ec2259add42b6d48e5f6b0281910ba7b828c3d445c8d0908755099d7000cf9911ebb42ed9c2858c500baa5a00d47f1eee9939ddb78d7549168d4500b56414d38233cda9866b3304743500914d14b37037bb9d845b123b870b50ab2671c9448ec98eae42104a70237f9643a5b15fc0c09cc7113f4725617d4585a361a0be9dbac73333335151517373738f8f8fb2b2b20f4b38227f6341a5875dc0a29bc7ba856508a59114d1bc36e9d34fddd398711616871111ad2d2dc94a4acb9292ac725e75481eac725ec68c78e6d5cfd06b64924420d06b64db7972f0d0cef83a22a64232f83a22f97d6df6c9c2fa573cd02424fa573cfc8976fed0c8ff7537bb5517ff7537fa9162ffd8c7ffad46cb7403ffad46ffad46ffe8cb42d69250b68e42d69242d692caf4e016a765007d3916a7656bcfa2d1ede07bd1484db8107bd1487bd148daf2ccb3dc6c93c00bb3dc6cb3dc6ceaf5dcfbe983bdb634fbe983fbe983fef9dcfad165bf9608fad165fad165fef2d392e1c033b69492e1c092e1c0e0f7ed9fe1e70bbcb29fe1e79fe1e7e4f7f89fc6e71587bd9fc6e79fc6e7e4eff84986e72c70d14986e78fb5f2dbe7fa9a9cff373ad79a9cffa9abfee3e3ffb99aff6733ddb99affb99affebe3ffc2c2c2979797c2c2c2d0d0d0e6e6e6cabdbf717171cabdbfcabdbfeae6e6cca6ac8a404dcca6accca6acf1e6e8f691b2d21e5bf691b2f9a9c3fce0e9cd74e6ca2ae6cd74e6dd8ef3f1d8f8a47ae29c3ce4a47ae2b38cede6daf7".substr(30 * a + 6 * b, 6).toUpperCase()
}
var oh = n;

function ph() {
  if (oh) return oh;
  for (var a = [], b = 0; 67 > b; b++) {
    var c = nh,
        c = new gh(c(b, 0), c(b, 1), c(b, 2), c(b, 3), c(b, 4));
    c.color = b;
    a[b] = c
  }
  return oh = a
}
var pba = [44, 64, 66, 60, 57, 59, 56, 55, 55, 52, 53, 53, 48, 46, 63, 63, 61, 57, 56, 44, 62, 62, 47, 65, 66, 57, 58, 50, 51, 51, 52, 54, 48, 48, 43, 65, 65, 57, 61, 49, 54, 45],
    qba = [35, 23, 42, 14, 22, 33, 40, 28, 30, 31, 12, 32, 8, 7, 6, 26, 5, 4, 39, 21, 15, 2, 37, 25],
    sh = [26, 23, 41, 28, 33, 37, 35, 30, 38, 40, 24, 31, 27, 22, 25, 42, 29, 32, 34, 36, 39, 6, 1, 12, 9, 14, 4, 21, 8, 19, 7, 2, 11, 10, 3, 20, 13, 5, 15, 16, 17, 18],
    th = [57, 51, 54, 46, 60, 64, 61, 43, 56, 58, 52, 53, 47, 65, 63, 62, 44, 55, 59, 49, 48, 45, 66, 50];

function uh(a) {
  a = kh ? vh(a) : wh(a);
  return ph()[a] || n
}
var xh = n;

function mh(a) {
  a = a.toUpperCase();
  if (!xh) {
    xh = {};
    for (var b = ph(), c = 0, d = b.length; c < d; ++c) xh[b[c].D] = c
  }
  return xh[a] || -1
}
function yh(a, b) {
  a = rba(a);
  if (b) {
    for (var c = b, d = [], e = 0; e < c.length; e++) kh ? d.push(vh(c[e])) : d.push(wh(c[e]));
    b = d
  }
  c = b;
  d = kh ? th : sh;
  if (c && c.length) {
    d = Pb(d);
    for (e = 0; e < c.length; e++) Mb(d, c[e]);
    c = d
  } else c = d;
  for (var d = c[0], e = Infinity, f = 0, h = c.length; f < h; ++f) {
    var l = c[f];
    if (!a[l]) return l;
    var q = a[l];
    q < e && (d = l, e = q)
  }
  return d
}

function zh(a, b, c) {
  var d = $d(parseInt(a.substr(3, 2), 16), parseInt(b.substr(3, 2), 16), c),
      e = $d(parseInt(a.substr(5, 2), 16), parseInt(b.substr(5, 2), 16), c);
  return "#" + ih($d(parseInt(a.substr(1, 2), 16), parseInt(b.substr(1, 2), 16), c)) + ih(d) + ih(e)
}
function ih(a) {
  a = Number(a | 0).toString(16);
  return 2 > a.length ? "0" + a : a
}
function wh(a) {
  return 43 <= a && 66 >= a ? qba[a - 43] : a
}
function vh(a) {
  return 1 <= a && 42 >= a ? pba[a - 1] : a
}

function rba(a) {
  var b = {};
  zc(a, function(a, d) {
    d = parseInt(d, 10);
    d = kh ? vh(d) : wh(d);
    var e = b[d];
    e && (a += e);
    b[d] = a
  });
  return b
};

function Ah(a, b, c, d, e) {
  this.A = b;
  this.C = kh ? vh(a) : wh(a);
  this.o = c;
  this.D = d;
  this.B = e;
  this.b = (b ? jh(c) : uh(a)) || jh(c)
}
function Bh(a) {
  a = kh ? vh(a) : wh(a);
  return new Ah(a, p, nh(a, 0), "#000000", k)
}
function Ch(a, b) {
  var c = lh(a);
  return new Ah(c, m, a, b || "#000000", a)
}
Ah.prototype.Fb = w("C");

function Dh(a) {
  return a.A ? a.D : "#000000"
}
function Hh(a) {
  return "#000000" != Dh(a)
};

function Ih(a, b, c) {
  this.A = a;
  this.b = {};
  this.o = {};
  this.B = c || [];
  Jh(this, b || [])
}
H(Ih, uc);

function Kh(a, b, c) {
  a.b[b] = c;
  b = c.Fb();
  a.o[b] = (a.o[b] || 0) + 1
}
function Jh(a, b) {
  for (var c = 0, d = b.length; c < d; c++) {
    var e = b[c],
        f = a.A[e];
    C(f) && Kh(a, e, f)
  }
  c = 0;
  for (d = b.length; c < d; ++c) e = b[c], C(a.b[e]) || (f = yh(a.o, a.B), Kh(a, e, Bh(f)))
}
Ih.prototype.L = function() {
  Ih.J.L.call(this);
  this.o = this.b = this.A = n
};Ih.prototype.clone = function() {
  var a = new Ih(Hc(this.A));
  a.b = Hc(this.b);
  a.o = Hc(this.o);
  return a
};

function Lh(a) {
  ah.call(this);
  this.D = a || new Ih({});
  this.A = {}
}
H(Lh, ah);Lh.prototype.L = function() {
  this.A = n;
  Lh.J.L.call(this)
};Lh.prototype.add = function(a, b, c) {
  this.Eb();
  var d = Lh.J.add.call(this, a);
  b || (this.A[a.getId()] = a, bh(this, "i", a));
  c && Kh(this.D, a.getId(), c);
  this.xb();
  return d
};Lh.prototype.remove = function(a) {
  this.Eb();
  var b = this.A[a];
  b && (delete this.A[a], bh(this, "i", b));
  a = Lh.J.remove.call(this, a);
  this.xb();
  return a
};Lh.prototype.Af = function(a) {
  cb(a) || (a = a.getId());
  return a in this.A
};

function sba(a, b, c, d, e, f, h) {
  this.o = a;
  this.b = b;
  this.A = c || new Pd(n, n, n);
  this.D = d || n;
  this.F = f || t;
  this.C = !! h;
  this.B = e
}
function Mh(a) {
  return a.o
}
function Nh(a) {
  return a.b
}
function Oh(a) {
  return a.A
}
function Ph(a) {
  return Jd(a, 7)
}
function Qh(a) {
  return Xg(a.b, a.o.uid + "/color", 0)
}
function Rh(a) {
  return Oh(Ph(a))
}
function S(a) {
  return Nh(Ph(a))
}
function Sh(a) {
  return Mh(Ph(a)).uid
};
var tba = Lc("AE BD BH DJ DZ EG IL IQ IR JO KW LB LY MA MR OM PK PS QA SA SD SO SY YE".split(" "));

function Th(a) {
  a = a.getString("country", "US");
  return !tba[a]
};

function Uh(a, b, c, d) {
  Vg.call(this);
  this.D = a;
  this.b = {};
  this.A = {};
  this.o = [];
  this.C = c;
  this.F = d
}
H(Uh, Vg);Uh.prototype.get = function(a) {
  return this.b[a]
};Uh.prototype.set = function(a, b) {
  var c = this.b[a] != b;
  c && (this.b[a] = b, this.A[a] = 0);
  return c
};Uh.prototype.forEach = function(a) {
  for (var b in this.b) a(b, this.b[b])
};

function Vh(a) {
  L.call(this, "j");
  this.o = a
}
H(Vh, L);

function Wh(a, b, c) {
  a.b[b] === k && a.set(b, c)
}
function Xh(a) {
  var b = ["hl", "en"],
      c;
  for (c in a.A) b.push("eup", c + ":" + a.b[c]);
  return b
}
B = Uh.prototype;
B.jb = function(a) {
  var b = Xh(this);
  2 < b.length && (Cf(this.C, "user_prefs", b, 13, a ? a : D, F(this.F, "Failed to save preferences")), this.P(new Vh(m)))
};

function Yh(a, b) {
  for (var c = 0; c < b.length; c++) {
    var d = b[c],
        e = d[0];
    a.b[e] = d[1];
    delete a.A[e]
  }
  a.P(new Vh(p))
}
B.hc = function() {
  return Xg(this, "firstDay", "0")
};B.Kf = function() {
  return Th(this) ? !Yg(this, "weekView5", "false") : m
};B.cj = y(1);B.Bf = function() {
  return Th(this) ? 5 : 7
};B.$q = function(a) {
  return (C(a) ? a : this.Kf()) ? 7 : this.Bf()
};B.$f = Qa(11);B.Ed = w("o");
B.Nj = function() {
  return Yg(this, Da, "false")
};B.vD = function() {
  return this.getString("dtFldOrdr", "MDY")
};

function Zh(a, b) {
  var c = a.getString("timezone", "Etc/GMT"),
      d = a.getString("translatedtz", "(GMT+00:00) GMT (no daylight saving)"),
      e = a.getString("tzlabel", t);
  a.o = [new qg(c, d, e)];
  if ((d = a.getString("SecondaryDisplayTimezone", t)) && Yg(a, "HasSecondaryTimezone", "false")) {
    var e = a.getString("secondarytranstz", d),
        f = a.getString("sectzlabel", t),
        h = a.qE(0, c, d, $h(b));
    h != n && a.o.push(new qg(d, e, f, h, E(a.qE, a, b, c, d)))
  }
}
B.qE = function(a, b, c, d) {
  a = ai(Yf(d.Ea(), Tg(new Date(0))));
  return If(a, c, b)
};

function bi() {
  return jc || -1 != Xb.indexOf("Android")
};

function ci() {
  P.call(this);
  this.o = {}
}
H(ci, P);Xa(ci);
var di = "!";B = ci.prototype;B.add = function(a, b) {
  this.put(a, b);
  this.P(new ei(a, b))
};B.put = function(a, b) {
  this.o[a] = b
};B.get = function(a) {
  return this.o[a]
};B.remove = function(a) {
  delete this.o[a]
};B.forEach = function(a) {
  for (var b in this.o) if (a(b, this.o[b]) === p) break
};

function fi(a, b) {
  var c = n;
  a.forEach(function(a, e) {
    if (e.C == b) return c = a, p
  });
  return c
}
function ei(a, b) {
  L.call(this, "detailsadd");
  this.id = a;
  this.nc = b
}
H(ei, L);

function gi(a, b, c, d, e, f, h, l, q, r, s, u, x, z, A, G, M, N, X, $, ca, ua, pa, ab, Ra, Gb, bb, gg, Ua) {
  this.id = x;
  this.uc = a;
  this.B = b;
  this.type = c;
  this.W = this.Pb = d;
  this.tz = e;
  this.D = $;
  this.location = f;
  this.nc = h;
  this.K = l;
  this.da = q;
  this.o = r;
  this.b = s;
  this.wa = M;
  this.origin = u;
  this.Ja = z;
  this.C = A;
  this.Ha = G;
  this.Vc = N;
  this.Ia = X;
  this.A = ca;
  this.F = ua;
  this.H = pa;
  this.X = ab;
  this.O = !! Ra;
  this.ea = !! Gb;
  this.ya = bb;
  this.ka = !! gg;
  this.Z = Ua
};
var hi = p;

function ii(a) {
  return !!a && /^#[0-9a-fA-F]{6}$/.test(a)
}
function ji(a) {
  var b = ci.M(),
      c = a.Aa(),
      d = b.get(c);
  d || (c = fi(b, c)) && (d = b.get(c));
  if (!d || 60 > d.uc) return t;
  a = a.C.eventColor;
  return ii(a) ? hi ? ki(a) : li(a) : t
}

function mi(a) {
  switch (a) {
  case "#a4bdfc":
    return "#e4ebfe";
  case "#5484ed":
    return "#dde6fb";
  case "#7ae7bf":
    return "#d7f8ec";
  case "#51b749":
    return "#dcf1db";
  case "#dbadff":
    return "#f4e6ff";
  case "#ff887c":
    return "#ffdbd7";
  case "#dc2127":
    return "#f8d3d4";
  case "#fbd75b":
    return "#fef3cd";
  case "#ffb878":
    return "#ffead6";
  case "#46d6db":
    return "#c7f3f4";
  case "#e1e1e1":
    return "#f6f6f6";
  default:
    return zh(ba, a, .33)
  }
}

function li(a) {
  switch (a) {
  case "#a4bdfc":
  case "#5484ed":
  case "#46d6db":
    return "#1111cc";
  case "#7ae7bf":
  case "#51b749":
    return "#228822";
  case "#dbadff":
    return "#551a8b";
  case "#ff887c":
  case "#dc2127":
    return "#ff0000";
  case "#fbd75b":
    return "#fbb818";
  case "#ffb878":
    return "#ff6600";
  case "#e1e1e1":
    return "#bfbfbf";
  default:
    return a
  }
}

function ki(a) {
  switch (a) {
  case "#1111cc":
    return "#a4bdfc";
  case "#228822":
    return "#7ae7bf";
  case "#551a8b":
    return "#dbadff";
  case "#ff0000":
  case "#cc0066":
    return "#ff887c";
  case "#fbb818":
    return "#fbd75b";
  case "#ff6600":
    return "#ffb878";
  case "#bfbfbf":
    return "#e1e1e1";
  default:
    return a
  }
}
function ni(a) {
  return "#a4bdfc" == a || "#7ae7bf" == a || "#dbadff" == a || "#fbd75b" == a || "#ffb878" == a || "#e1e1e1" == a
};

function uba(a) {
  var b = a.b;
  oi ? (this.o = (a = Hh(a)) ? "#eeeeee" : "#1d1d1d", this.H = "#777777", this.W = this.O = b.b, this.Ja = t, this.ya = a ? "#dddddd" : "#333333", this.wa = a ? "#eeeeee" : "#bbbbbb", this.K = b.o, this.A = b.b, this.B = b.B, this.Ha = t, this.b = b.o, this.D = b.A, this.C = t, this.F = b.B, this.da = zh(ba, this.F, .6), this.Z = this.A, this.Ia = this.B, this.ea = t, this.X = this.o, this.ka = this.H) : (this.H = this.o = t, this.A = b.b, this.Ha = this.B = b.D, this.O = b.B, this.W = b.o, this.Ja = b.B, this.b = b.o, this.C = this.D = b.A, this.wa = this.ya = t, this.K = b.o, this.F = b.D, this.Z = this.da = b.o, this.ea = this.Ia = b.A, this.ka = this.X = b.D)
}
var oi = p,
    pi = {};

function qi(a) {
  var b = gb(a);
  pi[b] || (pi[b] = new uba(a));
  return pi[b]
}

function ri(a, b) {
  if (a.A) {
    var c = parseInt(b.substr(1, 2), 16) / 255,
        d = parseInt(b.substr(3, 2), 16) / 255,
        e = parseInt(b.substr(5, 2), 16) / 255,
        f = c + e < d / 4 || d + e < c / 4 ? 5 : 0,
        c = Math.max(0, 5 * (c - .8)),
        d = Math.max(0, 5 * (d - .8)),
        e = Math.max(0, 5 * (e - .8)),
        c = 10 + 30 * (.33 * c + .84 * d + .15 * e) + f,
        c = 5 * Math.round(c / 5);
    return c = Math.max(Math.min(c, 40), 10)
  }
  c = a.Fb();
  if (b == a.b.o) switch (c) {
  case 43:
  case 44:
  case 45:
  case 46:
  case 50:
  case 58:
  case 66:
  case 65:
  case 61:
    return 20;
  case 54:
  case 52:
  case 55:
  case 56:
  case 57:
    return 35;
  case 53:
    return 40;
  default:
    return 25
  } else
  switch (c) {
  case 43:
  case 44:
  case 58:
  case 66:
  case 50:
    return 10;
  case 54:
  case 52:
  case 49:
  case 55:
  case 56:
    return 20;
  case 53:
    return 25;
  default:
    return 15
  }
};

function si(a, b, c) {
  this.b = a;
  this.o = b || 0;
  this.ja = c;
  this.Nc = E(this.gQ, this)
}
H(si, uc);B = si.prototype;B.wn = 0;B.L = function() {
  si.J.L.call(this);
  this.stop();
  delete this.b;
  delete this.ja
};B.start = function(a) {
  this.stop();
  this.wn = pe(this.Nc, C(a) ? a : this.o)
};B.stop = function() {
  this.qc() && qe(this.wn);
  this.wn = 0
};B.qc = function() {
  return 0 != this.wn
};B.gQ = function() {
  this.wn = 0;
  this.b && this.b.call(this.ja)
};

function ti(a, b) {
  this.x = C(a) ? a : 0;
  this.y = C(b) ? b : 0
}
ti.prototype.clone = function() {
  return new ti(this.x, this.y)
};ti.prototype.ceil = function() {
  this.x = Math.ceil(this.x);
  this.y = Math.ceil(this.y);
  return this
};ti.prototype.floor = function() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this
};ti.prototype.round = function() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this
};

function ui(a, b) {
  this.width = a;
  this.height = b
}
B = ui.prototype;B.clone = function() {
  return new ui(this.width, this.height)
};B.isEmpty = function() {
  return !(this.width * this.height)
};B.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};B.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};B.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
var vba = !J || rc(9),
    wba = !hc && !J || J && rc(9) || hc && qc("1.9.1"),
    vi = J && !qc("9"),
    xba = J || gc || ic,
    yba = J && !rc(9);

function wi(a) {
  return a ? new xi(yi(a)) : mb || (mb = new xi)
}
function T(a) {
  return cb(a) ? document.getElementById(a) : a
}
function zi(a, b) {
  zc(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Ai ? a.setAttribute(Ai[d], b) : nb(d, "aria-") || nb(d, "data-") ? a.setAttribute(d, b) : a[d] = b
  })
}
var Ai = {
  cellpadding: "cellPadding",
  cellspacing: "cellSpacing",
  colspan: "colSpan",
  frameborder: "frameBorder",
  height: "height",
  maxlength: "maxLength",
  role: "role",
  rowspan: "rowSpan",
  type: "type",
  usemap: "useMap",
  valign: "vAlign",
  width: "width"
};

function Bi(a) {
  a = (a || window).document.documentElement;
  return new ui(a.clientWidth, a.clientHeight)
}

function Ci(a) {
  var b = Di(a);
  a = a.parentWindow || a.defaultView;
  return J && qc("10") && a.pageYOffset != b.scrollTop ? new ti(b.scrollLeft, b.scrollTop) : new ti(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
}
function Di(a) {
  return ic ? a.body || a.documentElement : a.documentElement
}
function Ei(a, b, c) {
  return Fi(document, arguments)
}

function Fi(a, b) {
  var c = b[0],
      d = b[1];
  if (!vba && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', I(d.name), '"');
    if (d.type) {
      c.push(' type="', I(d.type), '"');
      var e = {};
      Jc(e, d);
      delete e.type;
      d = e
    }
    c.push(">");
    c = c.join(t)
  }
  c = a.createElement(c);
  d && (cb(d) ? c.className = d : Za(d) ? c.className = d.join(" ") : zi(c, d));
  2 < b.length && Gi(a, c, b, 2);
  return c
}

function Gi(a, b, c, d) {
  function e(c) {
    c && b.appendChild(cb(c) ? a.createTextNode(c) : c)
  }
  for (; d < c.length; d++) {
    var f = c[d];
    !$a(f) || fb(f) && 0 < f.nodeType ? e(f) : Bb(zba(f) ? Pb(f) : f, e)
  }
}
function Hi(a, b) {
  Gi(yi(a), a, arguments, 1)
}
function Ii(a) {
  for (var b; b = a.firstChild;) a.removeChild(b)
}
function Ji(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b)
}
function Ki(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
}
function Li(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : n
}

function Mi(a, b) {
  var c = b.parentNode;
  c && c.replaceChild(a, b)
}
function Ni(a) {
  return wba && a.children != k ? a.children : Cb(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
}
function Oi(a) {
  return a.firstElementChild != k ? a.firstElementChild : Pi(a.firstChild)
}
function Qi(a) {
  return a.nextElementSibling != k ? a.nextElementSibling : Pi(a.nextSibling)
}
function Pi(a) {
  for (; a && 1 != a.nodeType;) a = a.nextSibling;
  return a
}
function Ri(a) {
  return fb(a) && 1 == a.nodeType
}

function Si(a, b) {
  if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
  if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
  for (; b && a != b;) b = b.parentNode;
  return b == a
}
function yi(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}

function Ti(a, b) {
  if ("textContent" in a) a.textContent = b;
  else if (3 == a.nodeType) a.data = b;
  else if (a.firstChild && 3 == a.firstChild.nodeType) {
    for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
    a.firstChild.data = b
  } else Ii(a), a.appendChild(yi(a).createTextNode(String(b)))
}
function Ui(a, b) {
  var c = [];
  return Vi(a, b, c, m) ? c[0] : k
}
function Vi(a, b, c, d) {
  if (a != n) for (a = a.firstChild; a;) {
    if (b(a) && (c.push(a), d) || Vi(a, b, c, d)) return m;
    a = a.nextSibling
  }
  return p
}

function Wi(a) {
  var b = a.getAttributeNode("tabindex");
  if (b = b != n && b.specified) a = a.tabIndex, b = db(a) && 0 <= a && 32768 > a;
  return b
}
function Xi(a, b) {
  b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
}
function zba(a) {
  if (a && "number" == typeof a.length) {
    if (fb(a)) return typeof a.item == Ea || "string" == typeof a.item;
    if (eb(a)) return typeof a.item == Ea
  }
  return p
}
function Yi(a, b, c, d) {
  c || (a = a.parentNode);
  c = d == n;
  for (var e = 0; a && (c || e <= d);) {
    if (b(a)) return a;
    a = a.parentNode;
    e++
  }
  return n
}

function xi(a) {
  this.b = a || Va.document || document
}
B = xi.prototype;B.Sa = Qa(12);B.G = Qa(15);B.Qa = Qa(17);B.U = Qa(18);B.createElement = function(a) {
  return this.b.createElement(a)
};B.createTextNode = function(a) {
  return this.b.createTextNode(String(a))
};

function Zi(a) {
  return Ci(a.b)
}
B.appendChild = function(a, b) {
  a.appendChild(b)
};B.append = Hi;B.Rj = Ii;B.am = Ji;B.Bt = Ki;B.Uc = Li;B.DI = Mi;B.nS = Ni;B.zl = Oi;B.WT = Qi;B.HS = Ri;B.contains = Si;B.Oe = Ti;B.TI = Ui;B.rF = Yi;
var Aba = Lc("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));

function $i() {
  this.b = t;
  this.o = aj
}
$i.prototype.xs = m;
var aj = {};$i.prototype.Ll = Qa(20);

function bj(a) {
  var b = new $i;
  b.b = a;
  return b
}
var Bba = bj(t);

function cj() {
  this.b = t;
  this.A = dj;
  this.o = n
}
cj.prototype.UF = m;cj.prototype.qj = Qa(21);cj.prototype.xs = m;cj.prototype.Ll = Qa(19);
var Cba = Lc("action", "cite", "data", "formaction", "href", "manifest", "poster", "src"),
    Dba = Lc("link", "script", "style"),
    dj = {};

function ej(a, b) {
  var c = new cj;
  c.b = a;
  c.o = b;
  return c
}
var fj = ej(t, 0);

function gj(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d
}
B = gj.prototype;B.clone = function() {
  return new gj(this.top, this.right, this.bottom, this.left)
};B.contains = function(a) {
  return this && a ? a instanceof gj ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : p
};
B.ceil = function() {
  this.top = Math.ceil(this.top);
  this.right = Math.ceil(this.right);
  this.bottom = Math.ceil(this.bottom);
  this.left = Math.ceil(this.left);
  return this
};B.floor = function() {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this
};B.round = function() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this
};

function hj() {
  return ic ? "Webkit" : hc ? "Moz" : J ? "ms" : gc ? "O" : n
};

function ij(a, b, c) {
  cb(b) ? jj(a, c, b) : zc(b, F(jj, a))
}
function jj(a, b, c) {
  (c = kj(a, c)) && (a.style[c] = b)
}
function kj(a, b) {
  var c = xb(b);
  if (a.style[c] === k) {
    var d = hj() + yb(c);
    if (a.style[d] !== k) return d
  }
  return c
}
function lj(a, b) {
  var c = yi(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, n)) ? c[b] || c.getPropertyValue(b) || t : t
}
function mj(a, b) {
  return lj(a, b) || (a.currentStyle ? a.currentStyle[b] : n) || a.style && a.style[b]
}
function nj(a) {
  return mj(a, Ia)
}

function oj(a) {
  return new ti(a.offsetLeft, a.offsetTop)
}
function pj(a) {
  a = a ? yi(a) : document;
  var b;
  (b = !J || rc(9)) || (wi(a), b = m);
  return b ? a.documentElement : a.body
}
function qj(a) {
  var b;
  try {
    b = a.getBoundingClientRect()
  } catch (c) {
    return {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    }
  }
  J && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
  return b
}

function rj(a) {
  if (J && !rc(8)) return a.offsetParent;
  var b = yi(a),
      c = mj(a, Ia),
      d = "fixed" == c || "absolute" == c;
  for (a = a.parentNode; a && a != b; a = a.parentNode) if (c = mj(a, Ia), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
  return n
}

function sj(a) {
  var b, c = yi(a),
      d = mj(a, Ia),
      e = hc && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
      f = new ti(0, 0),
      h = pj(c);
  if (a == h) return f;
  if (a.getBoundingClientRect) b = qj(a), a = Zi(wi(c)), f.x = b.left + a.x, f.y = b.top + a.y;
  else if (c.getBoxObjectFor && !e) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
  else {
    b = a;
    do {
      f.x += b.offsetLeft;
      f.y += b.offsetTop;
      b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
      if (ic && "fixed" == nj(b)) {
        f.x += c.body.scrollLeft;
        f.y += c.body.scrollTop;
        break
      }
      b = b.offsetParent
    } while (b && b != a);
    if (gc || ic && "absolute" == d) f.y -= c.body.offsetTop;
    for (b = a;
    (b = rj(b)) && b != c.body && b != h;) f.x -= b.scrollLeft, gc && "TR" == b.tagName || (f.y -= b.scrollTop)
  }
  return f
}
function tj(a, b) {
  "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
  return a
}
function uj(a, b) {
  a.style.height = tj(b, m)
}

function vj(a) {
  var b = Eba;
  if ("none" != mj(a, "display")) return b(a);
  var c = a.style,
      d = c.display,
      e = c.visibility,
      f = c.position;
  c.visibility = "hidden";
  c.position = "absolute";
  c.display = "inline";
  a = b(a);
  c.display = d;
  c.position = f;
  c.visibility = e;
  return a
}
function Eba(a) {
  var b = a.offsetWidth,
      c = a.offsetHeight,
      d = ic && !b && !c;
  return C(b) && !d || !a.getBoundingClientRect ? new ui(b, c) : (a = qj(a), new ui(a.right - a.left, a.bottom - a.top))
}

function wj(a, b) {
  var c = a.style;
  "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = b === t ? t : "alpha(opacity=" + 100 * b + ")")
}
function U(a, b) {
  a.style.display = b ? t : "none"
}
function xj(a) {
  return "none" != a.style.display
}
var yj = hc ? "MozUserSelect" : ic ? "WebkitUserSelect" : n;

function zj(a, b) {
  if (/^\d+px?$/.test(b)) return parseInt(b, 10);
  var c = a.style.left,
      d = a.runtimeStyle.left;
  a.runtimeStyle.left = a.currentStyle.left;
  a.style.left = b;
  var e = a.style.pixelLeft;
  a.style.left = c;
  a.runtimeStyle.left = d;
  return e
}
function Aj(a, b) {
  var c = a.currentStyle ? a.currentStyle[b] : n;
  return c ? zj(a, c) : 0
}

function Bj(a, b) {
  if (J) {
    var c = Aj(a, b + "Left"),
        d = Aj(a, b + "Right"),
        e = Aj(a, b + "Top"),
        f = Aj(a, b + "Bottom");
    return new gj(e, d, f, c)
  }
  c = lj(a, b + "Left");
  d = lj(a, b + "Right");
  e = lj(a, b + "Top");
  f = lj(a, b + "Bottom");
  return new gj(parseFloat(e), parseFloat(d), parseFloat(f), parseFloat(c))
};
var Cj;

function Dj(a, b) {
  b ? a.setAttribute("role", b) : a.removeAttribute("role")
}
function Ej(a, b, c) {
  $a(c) && (c = c.join(" "));
  var d = "aria-" + b;
  c === t || c == k ? (Cj || (Cj = {
    atomic: p,
    autocomplete: "none",
    dropeffect: "none",
    haspopup: p,
    live: "off",
    multiline: p,
    multiselectable: p,
    orientation: "vertical",
    readonly: p,
    relevant: "additions text",
    required: p,
    sort: "none",
    busy: p,
    disabled: p,
    hidden: p,
    invalid: "false"
  }), c = Cj, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
};

function Fj(a) {
  this.Cb = a;
  this.A = {};
  a = Qaa[a];
  for (var b = 0; b < a.length; b++) this.A[a[b]] = m;
  this.b = []
}
function Fba(a, b) {
  var c = new Fj(a);
  Od(b, 12, c)
}
Fj.prototype.qc = function(a) {
  return this.A[a]
};Fj.prototype.getName = w("Cb");Fj.prototype.vb = Qa(22);

function Gj(a) {
  a = a || n;
  this.C = !! a && Jd(a, 12).qc("VR");
  a && Td(a).isEnabled(43) && Td(a).isEnabled(70);
  this.H = this.C
}
B = Gj.prototype;B.Ck = function() {
  var a;
  a = (kh ? th : sh)[0];
  return uh(a)
};B.of = function(a) {
  a = this.Ck(a);
  var b = mh(a.D);
  return 0 <= b ? Bh(b) : Ch(a.D)
};

function Hj(a) {
  return !a || a.match(/^\s*$/) ? "(No title)" : Ij(a)
}
B.Vg = function(a) {
  return Hj(a.getTitle())
};B.Vf = y(m);B.oi = y(p);B.He = y(p);B.Wg = y(p);B.Yj = y(p);B.fg = Qa(25);B.Qp = y(p);B.Pp = y(n);B.mi = y(t);B.ji = y(t);B.Pj = function() {
  return F(ag, gd(0))
};B.Zj = y(1);
B.vk = y(m);B.Zh = w("C");B.Wl = w("H");B.um = y("&nbsp;");

function Jj(a) {
  return Sd(98) ? "SS_asid" in a.C : p
};

function Kj(a, b, c) {
  Gj.call(this, a);
  this.F = b;
  this.b = a;
  this.B = c;
  this.A = og(a)
}
H(Kj, Gj);B = Kj.prototype;B.Ck = function(a) {
  return Lj(Mj.M(), a.Aa()).color.b
};B.of = function(a) {
  var b = Lj(Mj.M(), a.Aa()).color;
  a = ji(a);
  ni(a) && Hh(b) && (b = Ch(b.o, "#000000"));
  return b
};B.Vg = function(a) {
  var b = pb(a.getTitle()),
      b = (b ? b.replace(cf, t) : t) || "(No title)";
  if (Jj(a)) {
    var c = a.C.SS_slotsize; - 1 != parseInt(c, 10) && (b += " " + ("(" + c + "min slots)"))
  } else b += Nj(a);
  this.Wg(a) && (b = "<span class=rsvp-no>" + b + "</span>");
  return b
};
B.Vf = function(a) {
  return !!a && (!this.A.hb(a) || a.oc() && !a.Yd() || Oj(a, 4194304))
};B.oi = function(a) {
  return this.Vf(a)
};B.Yj = function(a) {
  return !this.Vf(a) && "$" != a.getId() && !(a.oc() && !Oj(a, 2097152))
};B.fg = Qa(24);B.Qp = function(a) {
  return a.Yf()
};B.Pp = function(a) {
  if (this.B) {
    var b = jg(this.B, a.mc);
    if (b && 100 == b.b) return b.A;
    if (a = jg(this.B, a.Bc)) return a.A
  }
  return n
};B.Wg = function(a) {
  return 2 == a.Dc
};
B.ji = function(a, b) {
  var c = t,
      d = a.Xc();
  d && d.o && (c = '<img class=cwci src="' + d.o + '">');
  var d = this.He(a),
      e = b && Hh(this.of(a)),
      f = a.Dc;
  return 0 == f ? c + Tj(ma, d, e) : 3 == f ? c + Tj(qa, d, e) : Jj(a) ? c + Tj(ka, d, e) : c
};B.mi = function(a, b) {
  if (!b) return t;
  var c = [],
      d = this.He(a),
      e = b && Hh(this.of(a));
  Uj(Vj(this.b), a) && c.push(Tj(ta, d, e));
  Oj(a, 8192) ? c.push(Tj(sa, d, e)) : Wj(a) && c.push(Tj(ra, d, e));
  a.Ws() && c.push(Tj(na, d, e));
  Xj(this.A, a) && (Yj(this.A, a) ? c.push(Tj(la, d, e)) : c.push(Tj(oa, d, e)));
  return c.join(t)
};B.Pj = function() {
  return F(ag, Gba)
};

function Gba(a, b) {
  return Zj[a.Aa()] - Zj[b.Aa()]
}
B.Zj = function(a) {
  if (!Yg(S(this.b), "fadeunimportant", "true") || !a.ei || !Td(this.b).isEnabled(31) && a.Db()) return 1;
  a = a.Fa();
  var b = $h(this.F);
  a = Zd(Hg(a, b), 1, 365);
  return 8 > a ? $d(1, .6, (a - 1) / 7) : $d(.6, 0, (a - 8) / 357)
};B.He = function(a) {
  if (!Yg(S(this.b), "dimpastevents", "true")) return p;
  var b = $h(this.F);
  return Wf(a, b)
};B.vk = y(p);B.um = function(a) {
  this.D || Dd(Ld(this.b, 807), this.qP, this);
  return this.D ? this.D.o().format({
    N: a
  }) : Kj.J.um.call(this, a)
};B.qP = Oa("D");

function ak() {}
H(ak, Sg);

function bk(a, b, c, d) {
  var e = new ak;
  e.year = a;
  e.month = b;
  e.Y = c;
  e.b = d;
  return ck[d] = e
}
B = ak.prototype;B.va = function() {
  return this
};B.ta = w("b");B.Sb = y(m);B.El = function() {
  return ub(String(this.year), rg(this.month), rg(this.Y))
};B.equals = function(a) {
  return this === a
};
var ck = {};

function Kg(a, b, c) {
  var d = Bg(a, b, c);
  return ck[d] || bk(a, b, c, d)
}
function dk(a) {
  return ck[a] || bk((a >> 9) + 1970, a >> 5 & 15, a & 31, a)
}
function ek(a) {
  return Kg(a.getUTCFullYear(), a.getUTCMonth() + 1, a.getUTCDate())
};

function Ig(a, b, c, d) {
  this.o = a = 60 * (60 * (24 * a + b) + c) + d;
  this.second = a % 60;
  a = a / 60 | 0;
  this.minute = a % 60;
  a = a / 60 | 0;
  this.hour = a % 24;
  this.Y = a / 24 | 0
}
H(Ig, Fg);

function ai(a) {
  return a.o / 60 | 0
}
Ig.prototype.ta = function() {
  return this.b || (this.b = this.Y + (((this.hour << 6) + this.minute << 6) + this.second + 1) * Ag)
};
Ig.prototype.El = function() {
  var a = this.hour || this.minute || this.second || 0,
      b = this.Y || a,
      b = 0 > b ? -1 : 0 < b ? 1 : 0,
      c = 0 > b ? "-P" : "P";
  this.Y && (c = this.Y % 7 ? c + (b * this.Y + "D") : c + (b * this.Y / 7 + "W"));
  a ? (c += "T", this.hour && (c += b * this.hour + "H"), this.minute && (c += b * this.minute + "M"), this.second && (c += b * this.second + "S")) : b || (c += "0D");
  return c
};Ig.prototype.equals = function(a) {
  return !!a && this.constructor === a.constructor && this.ta() == a.ta()
};
var Hba = new Ig(1, 0, 0, 0);

function fk() {}
H(fk, Fg);B = fk.prototype;B.year = 0;B.month = 0;B.Y = 0;B.hour = 0;B.minute = 0;B.second = 0;B.ta = function() {
  var a = this.cb();
  isNaN(this.hour) || (a += (((this.hour << 6) + this.minute << 6) + this.second + 1) * Ag);
  return a
};B.cb = function() {
  gk(this);
  return Bg(this.year, this.month, this.Y)
};

function hk(a, b) {
  a.Y += b.Y;
  a.hour += b.hour;
  a.minute += b.minute;
  a.second += b.second
}

function gk(a) {
  if (a.hour || a.minute || a.second) {
    var b = 60 * (60 * a.hour + a.minute) + a.second,
        c = Math.floor(b / 86400),
        b = b - 86400 * c;
    a.Y += c;
    a.second = b % 60;
    b /= 60;
    a.minute = (b | 0) % 60;
    a.hour = (b / 60 | 0) % 24
  }
  ik(a);
  for (b = tg(a.year, a.month); 1 > a.Y;) a.month -= 1, ik(a), b = tg(a.year, a.month), a.Y += b;
  for (; a.Y > b;) a.Y -= b, a.month += 1, ik(a), b = tg(a.year, a.month)
}
function ik(a) {
  var b;
  if (1 > a.month || 12 < a.month) b = Math.floor((a.month - 1) / 12), a.month -= 12 * b, a.year += b
}
B.va = function() {
  gk(this);
  return Kg(this.year, this.month, this.Y)
};
B.Ea = function() {
  gk(this);
  return new Qg(this.year, this.month, this.Y, this.hour, this.minute, this.second)
};B.Rb = Qa(29);B.dd = Qa(32);B.Lb = function() {
  gk(this);
  return new Rg(this.hour, this.minute, this.second)
};B.Jb = function() {
  gk(this);
  var a = this.Y;
  return (yg(this.year, this.month) + a - 1) % 7
};B.equals = function(a) {
  return !!a && this.constructor == a.constructor && this.ta() == a.ta()
};

function Gg(a) {
  return jk(a.year || 0, a.month || 0, a.Y || 0, a.hour || 0, a.minute || 0, a.second || 0)
}

function jk(a, b, c, d, e, f) {
  var h = new fk;
  h.year = a;
  h.month = b;
  h.Y = c;
  h.hour = d;
  h.minute = e;
  h.second = f;
  return h
}
function Ng(a, b, c) {
  var d = new fk;
  d.year = a;
  d.month = b;
  d.Y = c;
  return d
};

function Uf(a, b) {
  this.start = a;
  if (b.constructor === Ig) {
    var c = Gg(a);
    hk(c, b);
    this.end = this.start instanceof Qg ? c.Ea() : c.va();
    this.duration = b
  } else this.end = b, this.duration = Yf(this.end, this.start)
}
function kk(a, b) {
  return new Uf(a, new Ig(b, 0, 0, 0))
}
B = Uf.prototype;B.toString = function() {
  return this.start + "/" + this.end
};B.equals = function(a) {
  return !!a && this.constructor === a.constructor && this.start.equals(a.start) && this.end.equals(a.end)
};B.Wi = Qa(34);B.Nv = function(a, b) {
  return b.ta() >= this.start.ta() && a.ta() <= this.end.ta()
};
B.contains = function(a) {
  a = a.ta();
  return a >= this.start.ta() && a < this.end.ta()
};

function lk(a, b) {
  return 10 * a.charCodeAt(b) + a.charCodeAt(b + 1) - 528
}
function mk(a) {
  var b = parseInt(a, 10),
      c = b % 100,
      b = b / 100,
      d = (b | 0) % 100,
      b = b / 100 | 0;
  return 8 == a.length ? Kg(b, d, c) : new Qg(b, d, c, lk(a, 9), lk(a, 11), lk(a, 13))
};Fg.prototype.Rb = Qa(28);Fg.prototype.dd = Qa(31);

function nk() {
  P.call(this)
}
H(nk, P);

function ok() {
  P.call(this)
}
H(ok, nk);

function pk(a, b, c) {
  P.call(this);
  this.A = a;
  this.C = b || Infinity;
  this.B = c;
  this.D = this.Vp(ib() + qk);
  this.b = this.Zg();
  this.o = 0;
  this.Mt()
}
H(pk, nk);
var qk = 0;B = pk.prototype;B.Bn = Qa(36);B.Vp = function(a) {
  var b = this.A;
  b === k ? b = -6E4 * (new Date(a)).getTimezoneOffset() : a >= this.C && (b = this.B);
  return b
};B.Sq = function() {
  var a = ib() + qk;
  return this.Vp(a) + a
};B.Zg = function() {
  return new Date(this.Sq())
};B.yn = function() {
  this.b.getUTCDate() != this.Zg().getUTCDate() && (window.clearTimeout(this.o), this.Mt());
  return this.b
};
B.Mt = function() {
  var a = this.b,
      b = this.Zg(),
      c = 18E5 - b.getTime() % 18E5;
  this.o = window.setTimeout(E(this.Mt, this), c);
  a.getUTCDate() !== b.getUTCDate() && (this.b = this.Zg(), this.P("newday"))
};

function rk(a, b, c) {
  P.call(this);
  this.b = new pk(a, b, c);
  this.b.qd(this)
}
H(rk, ok);B = rk.prototype;B.Bn = Qa(35);B.Vp = function(a) {
  return this.b.Vp(a)
};B.Sq = function() {
  return this.b.Sq()
};B.Zg = function() {
  return this.b.Zg()
};B.yn = function() {
  return this.b.yn()
};

function sk(a) {
  return ek(a.yn())
}
function $h(a) {
  return Tg(a.Zg())
};

function tk(a, b, c) {
  rk.call(this, a, b, c)
}
H(tk, rk);

function uk(a) {
  return Jd(a, 1)
};

function vk(a) {
  P.call(this);
  this.b = this.o = a
}
H(vk, P);

function wk(a) {
  return a.b
}
function xk(a) {
  return Jd(a, 2)
}
function yk(a) {
  return wk(xk(a))
};

function zk() {}
function Ak(a, b, c) {
  a.o = {};
  b || (b = []);
  a.F = k;
  a.A = -1;
  a.b = b;
  t: {
    if (a.b.length) {
      b = a.b.length - 1;
      var d = a.b[b];
      if (d && typeof d == Ha && "number" != typeof d.length) {
        a.D = b - a.A;
        a.B = d;
        break t
      }
    }
    a.D = Number.MAX_VALUE
  }
  if (c) for (b = 0; b < c.length; b++) d = c[b],
  d < a.D ? (d += a.A, a.b[d] = a.b[d] || []) : a.B[d] = a.B[d] || []
}
function Bk(a, b) {
  return b < a.D ? a.b[b + a.A] : a.B[b]
}
function Ck(a, b, c) {
  if (!a.o[c]) {
    var d = Bk(a, c);
    d && (a.o[c] = new b(d))
  }
  return a.o[c]
}

function Iba(a) {
  var b = Dk;
  if (!a.o[1]) {
    for (var c = Bk(a, 1), d = [], e = 0; e < c.length; e++) d[e] = new b(c[e]);
    a.o[1] = d
  }
  return a.o[1]
}
zk.prototype.C = Qa(37);zk.prototype.toString = function() {
  return this.b.toString()
};
var Ek = {
  VX: {
    1E3: {
      other: "0K"
    },
    1E4: {
      other: "00K"
    },
    1E5: {
      other: "000K"
    },
    1E6: {
      other: "0M"
    },
    1E7: {
      other: "00M"
    },
    1E8: {
      other: "000M"
    },
    1E9: {
      other: "0B"
    },
    1E10: {
      other: "00B"
    },
    1E11: {
      other: "000B"
    },
    1E12: {
      other: "0T"
    },
    1E13: {
      other: "00T"
    },
    1E14: {
      other: "000T"
    }
  },
  UX: {
    1E3: {
      other: "0 thousand"
    },
    1E4: {
      other: "00 thousand"
    },
    1E5: {
      other: "000 thousand"
    },
    1E6: {
      other: "0 million"
    },
    1E7: {
      other: "00 million"
    },
    1E8: {
      other: "000 million"
    },
    1E9: {
      other: "0 billion"
    },
    1E10: {
      other: "00 billion"
    },
    1E11: {
      other: "000 billion"
    },
    1E12: {
      other: "0 trillion"
    },
    1E13: {
      other: "00 trillion"
    },
    1E14: {
      other: "000 trillion"
    }
  }
},
    Fk = Ek,
    Fk = Ek;
var Gk = {
  AED: [2, "dh", "\u062f.\u0625.", "DH"],
  ALL: [0, "Lek", "Lek"],
  AUD: [2, "$", "AU$"],
  BDT: [2, "\u09f3", "Tk"],
  BGN: [2, "lev", "lev"],
  BRL: [2, "R$", "R$"],
  CAD: [2, "$", "C$"],
  CDF: [2, "FrCD", "CDF"],
  CHF: [2, "CHF", "CHF"],
  CLP: [0, "$", "CL$"],
  CNY: [2, "\u00a5", "RMB\u00a5"],
  COP: [0, "$", "COL$"],
  CRC: [0, "\u20a1", "CR\u20a1"],
  CZK: [50, "K\u010d", "K\u010d"],
  DKK: [18, "kr", "kr"],
  DOP: [2, "$", "RD$"],
  EGP: [2, "\u00a3", "LE"],
  ETB: [2, "Birr", "Birr"],
  EUR: [2, "\u20ac", "\u20ac"],
  GBP: [2, "\u00a3", "GB\u00a3"],
  HKD: [2, "$", "HK$"],
  HRK: [2, "kn", "kn"],
  HUF: [0, "Ft", "Ft"],
  IDR: [0, "Rp", "Rp"],
  ILS: [2, "\u20aa", "IL\u20aa"],
  INR: [2, "\u20b9", "Rs"],
  IRR: [0, "Rial", "IRR"],
  ISK: [0, "kr", "kr"],
  JMD: [2, "$", "JA$"],
  JPY: [0, "\u00a5", "JP\u00a5"],
  KRW: [0, "\u20a9", "KR\u20a9"],
  LKR: [2, "Rs", "SLRs"],
  LTL: [2, "Lt", "Lt"],
  LVL: [2, "Ls", "Ls"],
  MNT: [0, "\u20ae", "MN\u20ae"],
  MXN: [2, "$", "Mex$"],
  MYR: [2, "RM", "RM"],
  NOK: [50, "kr", "NOkr"],
  PAB: [2, "B/.", "B/."],
  PEN: [2, "S/.", "S/."],
  PHP: [2, "\u20b1", "Php"],
  PKR: [0, "Rs", "PKRs."],
  PLN: [50, "z\u0142", "z\u0142"],
  RON: [2, "RON", "RON"],
  RSD: [0, "din", "RSD"],
  RUB: [50, "\u0440\u0443\u0431.", "\u0440\u0443\u0431."],
  SAR: [2, "Rial", "Rial"],
  SEK: [2, "kr", "kr"],
  SGD: [2, "$", "S$"],
  THB: [2, "\u0e3f", "THB"],
  TRY: [2, "TL", "YTL"],
  TWD: [2, "NT$", "NT$"],
  TZS: [0, "TSh", "TSh"],
  UAH: [2, "\u20b4", "UAH"],
  USD: [2, "$", "US$"],
  UYU: [2, "$", "$U"],
  VND: [0, "\u20ab", "VN\u20ab"],
  YER: [0, "Rial", "Rial"],
  ZAR: [2, "R", "ZAR"]
};
var Hk = {
  gS: ".",
  hS: ",",
  GV: "%",
  tC: "0",
  QW: "+",
  OW: "-",
  NW: "E",
  HV: "\u2030",
  $P: "\u221e",
  aQ: "NaN",
  Wx: "#,##0.###",
  jH: "#E0",
  iH: "#,##0%",
  gH: "\u00a4#,##0.00",
  hH: "USD"
},
    Ik = Hk,
    Ik = Hk;

function Jk(a, b, c) {
  this.B = b || Ik.hH;
  this.wa = c || 0;
  this.C = 40;
  this.b = 1;
  this.Ia = 0;
  this.A = 3;
  this.F = this.o = 0;
  this.ka = p;
  this.Z = this.W = t;
  this.H = "-";
  this.K = t;
  this.D = 1;
  this.O = 3;
  this.X = this.ea = p;
  this.da = 0;
  if ("number" == typeof a) switch (a) {
  case 1:
    Kk(this, Ik.Wx);
    break;
  case 2:
    Kk(this, Ik.jH);
    break;
  case 3:
    Kk(this, Ik.iH);
    break;
  case 4:
    a = Ik.gH;
    b = ["0"];
    c = Gk[this.B][0] & 7;
    if (0 < c) {
      b.push(".");
      for (var d = 0; d < c; d++) b.push("0")
    }
    a = a.replace(/0.00/g, b.join(t));
    Kk(this, a);
    break;
  case 5:
    Lk(this, 1);
    break;
  case 6:
    Lk(this, 2);
    break;
  default:
    g(Error("Unsupported pattern type."))
  } else Kk(this, a)
}

function Kk(a, b) {
  a.yt = b.replace(/ /g, "\u00a0");
  var c = [0];
  a.W = Mk(a, b, c);
  for (var d = c[0], e = -1, f = 0, h = 0, l = 0, q = -1, r = b.length, s = m; c[0] < r && s; c[0]++) switch (b.charAt(c[0])) {
  case "#":
    0 < h ? l++ : f++;
    0 <= q && 0 > e && q++;
    break;
  case "0":
    0 < l && g(Error('Unexpected "0" in pattern "' + b + '"'));
    h++;
    0 <= q && 0 > e && q++;
    break;
  case ",":
    q = 0;
    break;
  case ".":
    0 <= e && g(Error('Multiple decimal separators in pattern "' + b + '"'));
    e = f + h + l;
    break;
  case "E":
    a.X && g(Error('Multiple exponential symbols in pattern "' + b + '"'));
    a.X = m;
    a.F = 0;
    c[0] + 1 < r && "+" == b.charAt(c[0] + 1) && (c[0]++, a.ka = m);
    for (; c[0] + 1 < r && "0" == b.charAt(c[0] + 1);) c[0]++, a.F++;
    (1 > f + h || 1 > a.F) && g(Error('Malformed exponential pattern "' + b + '"'));
    s = p;
    break;
  default:
    c[0]--, s = p
  }
  0 == h && 0 < f && 0 <= e && (h = e, 0 == h && h++, l = f - h, f = h - 1, h = 1);
  (0 > e && 0 < l || 0 <= e && (e < f || e > f + h) || 0 == q) && g(Error('Malformed pattern "' + b + '"'));
  l = f + h + l;
  a.A = 0 <= e ? l - e : 0;
  0 <= e && (a.o = f + h - e, 0 > a.o && (a.o = 0));
  a.b = (0 <= e ? e : l) - f;
  a.X && (a.C = f + a.b, 0 == a.A && 0 == a.b && (a.b = 1));
  a.O = Math.max(0, q);
  a.ea = 0 == e || e == l;
  d = c[0] - d;
  a.Z = Mk(a, b, c);
  c[0] < b.length && ";" == b.charAt(c[0]) ? (c[0]++, a.H = Mk(a, b, c), c[0] += d, a.K = Mk(a, b, c)) : (a.H = a.W + a.H, a.K += a.Z)
}
function Lk(a, b) {
  a.da = b;
  Kk(a, Ik.Wx);
  a.o = 0;
  a.A = 2;
  0 < a.o && g(Error("Can't combine significant digits and minimum fraction digits"));
  a.Ia = 2
}
Jk.prototype.format = function(a) {
  if (isNaN(a)) return Ik.aQ;
  var b = [],
      c;
  var d = a,
      e = a;
  0 == this.da ? c = Nk : (d = Math.abs(d), e = Math.abs(e), c = Ok(this, 1 >= d ? 0 : Pk(d)).tv, Qk(this, e / Math.pow(10, c)), d = Qk(this, d / Math.pow(10, c)), c = Ok(this, c + Pk(d.Xy)));
  a /= Math.pow(10, c.tv);
  b.push(c.prefix);
  d = 0 > a || 0 == a && 0 > 1 / a;
  b.push(d ? this.H : this.W);
  if (isFinite(a)) if (a = a * (d ? -1 : 1) * this.D, this.X) if (0 == a) Rk(this, a, this.b, b), Sk(this, 0, b);
  else {
    e = Math.log(a) / Math.log(10);
    e = Math.floor(e + 2E-15);
    a /= Math.pow(10, e);
    var f = this.b;
    if (1 < this.C && this.C > this.b) {
      for (; 0 != e % this.C;) a *= 10, e--;
      f = 1
    } else 1 > this.b ? (e++, a /= 10) : (e -= this.b - 1, a *= Math.pow(10, this.b - 1));
    Rk(this, a, f, b);
    Sk(this, e, b)
  } else Rk(this, a, this.b, b);
  else b.push(Ik.$P);
  b.push(d ? this.K : this.Z);
  b.push(c.dC);
  return b.join(t)
};

function Qk(a, b) {
  var c = Math.pow(10, a.A),
      d = 0 >= a.Ia ? Math.round(b * c) : Math.round(Jba(b * c, a.Ia, a.A)),
      e;
  isFinite(d) ? (e = Math.floor(d / c), c = Math.floor(d - e * c)) : (e = b, c = 0);
  return {
    Xy: e,
    bS: c
  }
}

function Rk(a, b, c, d) {
  a.o > a.A && g(Error("Min value must be less than max value"));
  b = Qk(a, b);
  var e = Math.pow(10, a.A),
      f = b.Xy,
      h = b.bS,
      l = 0 < a.o || 0 < h || p;
  b = a.o;
  l && (b = a.o);
  for (var q = t, r = f; 1E20 < r;) q = "0" + q, r = Math.round(r / 10);
  var q = r + q,
      s = Ik.gS,
      u = Ik.hS,
      r = Ik.tC.charCodeAt(0),
      x = q.length;
  if (0 < f || 0 < c) {
    for (f = x; f < c; f++) d.push(String.fromCharCode(r));
    for (f = 0; f < x; f++) d.push(String.fromCharCode(r + 1 * q.charAt(f))), 1 < x - f && 0 < a.O && 1 == (x - f) % a.O && d.push(u)
  } else l || d.push(String.fromCharCode(r));
  (a.ea || l) && d.push(s);
  a = t + (h + e);
  for (c =
  a.length;
  "0" == a.charAt(c - 1) && c > b + 1;) c--;
  for (f = 1; f < c; f++) d.push(String.fromCharCode(r + 1 * a.charAt(f)))
}
function Sk(a, b, c) {
  c.push(Ik.NW);
  0 > b ? (b = -b, c.push(Ik.OW)) : a.ka && c.push(Ik.QW);
  b = t + b;
  for (var d = Ik.tC, e = b.length; e < a.F; e++) c.push(d);
  c.push(b)
}

function Mk(a, b, c) {
  for (var d = t, e = p, f = b.length; c[0] < f; c[0]++) {
    var h = b.charAt(c[0]);
    if ("'" == h) c[0] + 1 < f && "'" == b.charAt(c[0] + 1) ? (c[0]++, d += "'") : e = !e;
    else if (e) d += h;
    else
    switch (h) {
    case "#":
    case "0":
    case ",":
    case ".":
    case ";":
      return d;
    case "\u00a4":
      if (c[0] + 1 < f && "\u00a4" == b.charAt(c[0] + 1)) c[0]++, d += a.B;
      else
      switch (a.wa) {
      case 0:
        d += Gk[a.B][1];
        break;
      case 2:
        var h = a.B,
            l = Gk[h],
            d = d + (h == l[1] ? h : h + " " + l[1]);
        break;
      case 1:
        d += Gk[a.B][2]
      }
      break;
    case "%":
      1 != a.D && g(Error("Too many percent/permill"));
      a.D = 100;
      d += Ik.GV;
      break;
    case "\u2030":
      1 != a.D && g(Error("Too many percent/permill"));
      a.D = 1E3;
      d += Ik.HV;
      break;
    default:
      d += h
    }
  }
  return d
}
var Nk = {
  prefix: t,
  dC: t,
  tv: 0
};

function Ok(a, b) {
  var c = 1 == a.da ? Fk.VX : Fk.UX;
  if (3 > b) return Nk;
  b = Math.min(14, b);
  c = c[Math.pow(10, b)];
  if (!c) return Nk;
  c = c.other;
  return c && "0" != c ? (c = /([^0]*)(0+)(.*)/.exec(c)) ? {
    prefix: c[1],
    dC: c[3],
    tv: b - (c[2].length - 1)
  } : Nk : Nk
}
function Pk(a) {
  for (var b = 0; 1 <= (a /= 10);) b++;
  return b
}

function Jba(a, b, c) {
  if (!a) return a;
  b = b - Pk(a) - 1;
  if (b < -c) return c = Math.pow(10, c), Math.round(a / c) * c;
  c = Math.pow(10, b);
  return Math.round(a * c) / c
};

function Tk(a) {
  return 1 == a % 10 && 11 != a % 100 ? "one" : 2 == a % 10 && 12 != a % 100 ? "two" : 3 == a % 10 && 13 != a % 100 ? "few" : "other"
}
var Uk = Tk,
    Uk = Tk;

function Kba(a) {
  a = a + t;
  var b = a.indexOf(".");
  return -1 == b ? 0 : a.length - b - 1
}
function Vk(a, b) {
  var c, d = a | 0;
  c = k === b ? Math.min(Kba(a), 3) : b;
  return 1 == d && 0 == c ? "one" : "other"
}
var Wk = Vk,
    Wk = Vk;

function Xk(a) {
  this.b = [];
  this.B = [];
  this.A = new Jk(1);
  a && (a = Lba(this, a), this.B = Yk(this, a))
}
var Mba = RegExp("'([{}#].*?)'", "g"),
    Nba = RegExp("''", "g");Xk.prototype.format = function(a) {
  return Zk(this, a, p)
};

function Zk(a, b, c) {
  if (0 == a.B.length) return t;
  var d = [];
  $k(a, a.B, b, c, d);
  for (b = d.join(t); 0 < a.b.length;) b = b.replace(a.o(a.b), a.b.pop());
  return b
}

function $k(a, b, c, d, e) {
  for (var f = 0; f < b.length; f++) switch (b[f].type) {
  case 4:
    e.push(b[f].value);
    break;
  case 3:
    var h = b[f].value,
        l = a,
        q = e,
        r = c[h];
    C(r) ? (l.b.push(r), q.push(l.o(l.b))) : q.push("Undefined parameter - " + h);
    break;
  case 2:
    h = b[f].value;
    l = e;
    q = h.Jq;
    C(c[q]) ? (q = h[c[q]], C(q) || (q = h.other), $k(a, q, c, d, l)) : l.push("Undefined parameter - " + q);
    break;
  case 0:
    h = b[f].value;
    al(a, h, c, Wk, d, e);
    break;
  case 1:
    h = b[f].value, al(a, h, c, Uk, d, e)
  }
}

function al(a, b, c, d, e, f) {
  var h = b.Jq,
      l = b.OE,
      q = +c[h];
  isNaN(q) ? f.push("Undefined or invalid parameter - " + h) : (l = q - l, h = b[c[h]], C(h) || (d = a.A.ya ? d(l, a.A.ya()) : d(l), h = b[d], C(h) || (h = b.other)), b = [], $k(a, h, c, e, b), c = b.join(t), e ? f.push(c) : (a = a.A.format(l), f.push(c.replace(/#/g, a))))
}
function Lba(a, b) {
  var c = a.b,
      d = E(a.o, a);
  b = b.replace(Nba, function() {
    c.push("'");
    return d(c)
  });
  return b = b.replace(Mba, function(a, b) {
    c.push(b);
    return d(c)
  })
}

function bl(a) {
  var b = 0,
      c = [],
      d = [],
      e = /[{}]/g;
  e.lastIndex = 0;
  for (var f; f = e.exec(a);) {
    var h = f.index;
    "}" == f[0] ? (c.pop(), 0 == c.length && (f = {
      type: 1
    }, f.value = a.substring(b, h), d.push(f), b = h + 1)) : (0 == c.length && (b = a.substring(b, h), b != t && d.push({
      type: 0,
      value: b
    }), b = h + 1), c.push("{"))
  }
  b = a.substring(b);
  b != t && d.push({
    type: 0,
    value: b
  });
  return d
}
var cl = /^\s*(\w+)\s*,\s*plural\s*,(?:\s*offset:(\d+))?/,
    dl = /^\s*(\w+)\s*,\s*selectordinal\s*,/,
    el = /^\s*(\w+)\s*,\s*select\s*,/;

function Yk(a, b) {
  for (var c = [], d = bl(b), e = 0; e < d.length; e++) {
    var f = {};
    if (0 == d[e].type) f.type = 4, f.value = d[e].value;
    else if (1 == d[e].type) {
      var h = d[e].value;
      switch (cl.test(h) ? 0 : dl.test(h) ? 1 : el.test(h) ? 2 : /^\s*\w+\s*/.test(h) ? 3 : 5) {
      case 2:
        f.type = 2;
        f.value = Oba(a, d[e].value);
        break;
      case 0:
        f.type = 0;
        f.value = Pba(a, d[e].value);
        break;
      case 1:
        f.type = 1;
        f.value = Qba(a, d[e].value);
        break;
      case 3:
        f.type = 3, f.value = d[e].value
      }
    }
    c.push(f)
  }
  return c
}

function Oba(a, b) {
  var c = t;
  b = b.replace(el, function(a, b) {
    c = b;
    return t
  });
  var d = {};
  d.Jq = c;
  for (var e = bl(b), f = 0; f < e.length;) {
    var h = e[f].value;
    f++;
    if (1 == e[f].type) var l = Yk(a, e[f].value);
    d[h.replace(/\s/g, t)] = l;
    f++
  }
  return d
}
function Pba(a, b) {
  var c = t,
      d = 0;
  b = b.replace(cl, function(a, b, e) {
    c = b;
    e && (d = parseInt(e, 10));
    return t
  });
  var e = {};
  e.Jq = c;
  e.OE = d;
  for (var f = bl(b), h = 0; h < f.length;) {
    var l = f[h].value;
    h++;
    if (1 == f[h].type) var q = Yk(a, f[h].value);
    e[l.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = q;
    h++
  }
  return e
}

function Qba(a, b) {
  var c = t;
  b = b.replace(dl, function(a, b) {
    c = b;
    return t
  });
  var d = {};
  d.Jq = c;
  d.OE = 0;
  for (var e = bl(b), f = 0; f < e.length;) {
    var h = e[f].value;
    f++;
    if (1 == e[f].type) var l = Yk(a, e[f].value);
    d[h.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = l;
    f++
  }
  return d
}
Xk.prototype.o = function(a) {
  return "\ufddf_" + (a.length - 1).toString(10) + "_"
};
var Rba = ["en", 0, ".", [
  [
    [, 0],
    [" \u2013 "],
    [, 1]
  ]
],
  [
    [
      [, 0],
      [" "],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      [", "],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      ["/"],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      ["/"],
      [, 1],
      ["/"],
      [, 2]
    ]
  ],
  [
    [
      [, 0],
      ["/"],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      ["/"],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      ["/"],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      ["/"],
      [, 1],
      ["/"],
      [, 2]
    ]
  ],
  [
    [
      [, 0],
      ["-"],
      [, 1],
      ["-"],
      [, 2]
    ]
  ],
  [
    [
      [, 0],
      [":00"]
    ]
  ],
  [
    [
      [, 0],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      [":"],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      [":"],
      [, 1],
      [, 2]
    ]
  ],
  [
    [
      [, 0],
      [" "],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      [" "],
      [, 1],
      [", "],
      [, 2]
    ]
  ],
  [
    [
      [, 0],
      [" "],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      [" "],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      [" "],
      [, 1],
      [", "],
      [, 2]
    ]
  ],
  [
    [
      [, 0],
      [" "],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      [" "],
      [, 1],
      [" \u2013 "],
      [, 2],
      [", "],
      [, 3]
    ]
  ],
  [
    [
      [, 0],
      [" "],
      [, 1],
      [" \u2013 "],
      [, 2],
      [", "],
      [, 3]
    ]
  ],
  [
    [
      [, 0],
      [" "],
      [, 1],
      [" \u2013 "],
      [, 2],
      [" "],
      [, 3],
      [", "],
      [, 4]
    ]
  ],
  [
    [
      [, 0],
      [" \u2013 "],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      [" ("],
      [, 1],
      [")"]
    ]
  ],
  [
    [
      [, 0],
      [" \u2013 "],
      [, 1],
      [" "],
      [, 2]
    ]
  ],
  [
    [
      [, 0],
      [" "],
      [, 1]
    ]
  ],
  [
    [
      [, 0],
      [", "],
      [, 1]
    ]
  ], "SMTWTFS".split(""), "Sun Mon Tue Wed Thu Fri Sat".split(" "), "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), "January February March April May June July August September October November December".split(" "), "January February March April May June July August September October November December".split(" "), ["a", "p"],
  ["am", "pm"],
  ["am", "pm"], "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), 0, 0, 0, [
    [
      [, 0],
      [", "],
      [, 1]
    ]
  ]
];

function fl(a) {
  Ak(this, a, [])
}
H(fl, zk);

function gl(a) {
  Ak(this, a, [1])
}
H(gl, zk);

function Dk(a) {
  Ak(this, a, [])
}
H(Dk, zk);

function hl(a) {
  Ak(this, a, [])
}
H(hl, zk);

function il(a) {
  Ak(this, a, [])
}
H(il, zk);

function jl(a) {
  Ak(this, a, [])
}
H(jl, zk);

function kl() {
  this.b = new fl(Rba);
  this.D = ll(Ck(this.b, hl, 32));
  this.B = ll(Ck(this.b, hl, 33));
  this.o = ll(Ck(this.b, hl, 34));
  this.H = ml(Ck(this.b, il, 35));
  this.A = ml(Ck(this.b, il, 36));
  this.C = ml(Ck(this.b, il, 37));
  this.F = ml(Ck(this.b, il, 41))
}
Xa(kl);

function ll(a) {
  return [Bk(a, 1), Bk(a, 2), Bk(a, 3), Bk(a, 4), Bk(a, 5), Bk(a, 6), Bk(a, 7)]
}
function ml(a) {
  return [, Bk(a, 1), Bk(a, 2), Bk(a, 3), Bk(a, 4), Bk(a, 5), Bk(a, 6), Bk(a, 7), Bk(a, 8), Bk(a, 9), Bk(a, 10), Bk(a, 11), Bk(a, 12)]
}
kl.prototype.getMonth = function(a) {
  return this.H[a]
};

function nl(a, b) {
  return a.B[b]
}
function ol(a, b) {
  return a.o[b]
}
function pl(a) {
  return isNaN(a) ? ga : t + (a % 12 || 12)
}
function ql(a) {
  return isNaN(a) ? ga : (10 > a ? "0" : t) + a
}
function rl(a, b) {
  var c;
  isNaN(b) ? c = t : 12 > b % 24 ? (c = Ck(a.b, jl, 39), c = Bk(c, 1)) : (c = Ck(a.b, jl, 39), c = Bk(c, 2));
  return c
}
function sl(a, b) {
  var c;
  isNaN(b) ? c = t : 12 > b % 24 ? c = t : (c = Ck(a.b, jl, 38), c = Bk(c, 2));
  return c
}
function tl(a, b) {
  var c = [];
  Bb(Iba(a), function(a) {
    Bk(a, 1) != n ? c.push(Bk(a, 1)) : c.push(b[Bk(a, 2)])
  });
  return c.join(t)
}

function ul(a, b, c, d) {
  return tl(Ck(a.b, gl, 22), [b, c, d])
}
function vl(a, b, c) {
  this.b = new Xk(a);
  this.A = new Xk(b);
  this.o = new Xk(c)
}
function wl() {
  vl.call(this, "{MINUTES, plural, =1 {1 min}other {# mins}}", "{HOURS, plural, =1 {1 hr}other {# hrs}}", "{DAYS, plural, =1 {1 day}other {# days}}")
}
H(wl, vl);

function xl() {
  vl.call(this, "{MINUTES, plural, =1 {~1 min}other {~# mins}}", "{HOURS, plural, =1 {~1 hr}other {~# hrs}}", "{DAYS, plural, =1 {~1 day}other {~# days}}")
}
H(xl, vl);

function yl() {};

function zl(a, b, c) {
  this.o = a || new Al;
  this.b = b || kl.M();
  this.A = C(c) ? c : m
}
H(zl, yl);B = zl.prototype;B.getMonth = function(a) {
  return this.b.A[a]
};B.Ss = function(a) {
  return this.b.D[a]
};B.Bo = function(a) {
  return this.b.o[a]
};

function Bl(a) {
  return Bk(a.b.b, 1)
}
function Cl(a, b, c) {
  return Bk(a.b.b, 2) ? String(b) : c ? a.b.getMonth(b) : a.b.A[b]
}
function Dl(a, b, c) {
  return a.A && !Bk(a.b.b, 2) ? c ? a.b.F[b] : a.b.C[b] : Cl(a, b, c || "ru" == Bl(a))
}
B.ob = function(a, b, c) {
  this.o.A() || isNaN(a.hour) ? (b = a.hour, a = a.minute, a = tl(Ck(this.b.b, gl, 16), [isNaN(b) ? ga : (10 > b ? "0" : t) + b, ql(a)])) : b && 0 == a.minute ? c ? (b = this.b, a = a.hour, a = tl(Ck(b.b, gl, 15), [pl(a), sl(b, a)])) : (b = this.b, a = a.hour, a = tl(Ck(b.b, gl, 15), [pl(a), rl(b, a)])) : c ? (b = this.b, c = a.hour, a = a.minute, a = tl(Ck(b.b, gl, 17), [pl(c), ql(a), sl(b, c)])) : (b = this.b, c = a.hour, a = a.minute, a = tl(Ck(b.b, gl, 17), [pl(c), ql(a), rl(b, c)]));
  return a
};B.Jm = function(a) {
  return El(this, a, this.o)
};B.Ec = function(a) {
  return Fl(this, a, this.o)
};
B.Ek = function(a, b) {
  var c = b ? nl(this.b, a.Jb()) : ol(this.b, a.Jb()),
      d = this.Jm(a);
  return tl(Ck(this.b.b, gl, 30), [c, d])
};B.xd = Qa(38);B.Op = Qa(39);B.Js = function(a) {
  var b;
  1 == a.Y ? (b = Dl(this, a.month, m), a = a.Y, b = tl(Ck(this.b.b, gl, 21), [b, a])) : b = String(a.Y);
  return b
};B.Lc = function(a, b) {
  var c = Dl(this, a.month, m);
  if (b) var d = a.Y,
      c = tl(Ck(this.b.b, gl, 21), [c, d]);
  else c = ul(this.b, c, a.Y, a.year);
  return c
};B.Xs = function(a, b, c, d) {
  d = d || this.o.o();
  return this.Lc(a, d.year == b.year && d.year == c.year)
};B.Ag = Qa(40);B.xn = Qa(42);B.Rp = Qa(43);
B.ak = function(a) {
  var b = Cl(this, a.month);
  a = a.year;
  return tl(Ck(this.b.b, gl, 20), [b, a])
};B.Hk = Qa(45);B.Ul = function(a, b, c) {
  var d = this.ob(a.start.Lb(), b, c);
  a = this.ob(a.end.Lb(), b, c);
  return tl(Ck(this.b.b, gl, 27), [d, a])
};B.Zl = function(a) {
  return "ru" == Bl(this) ? a.substring(0, 1).toUpperCase() + a.substring(1) : a
};B.Xp = function(a) {
  var b = this.Zl(nl(this.b, a.Jb()));
  a = this.Jm(a);
  return tl(Ck(this.b.b, gl, 30), [b, a])
};B.Ks = function(a) {
  return this.Zl(this.b.B[a])
};

function Gl(a, b, c, d) {
  var e = a.Y,
      f = a.hour;
  a = a.minute;
  c = c || (d ? new xl : new wl);
  b && (!f || !a || a % 15 || (f += a / 60, a = 0), !e || !f || a || f % 6 || (e += f / 24, f = 0));
  b = [];
  0 !== e && b.push(c.o.format({
    DAYS: e
  }));
  (0 !== f || e && a) && b.push(c.A.format({
    HOURS: f
  }));
  0 !== a && b.push(c.b.format({
    MINUTES: a
  }));
  return b.length ? b.join(", ") : c.b.format({
    MINUTES: 0
  })
}
function Al(a, b, c) {
  this.C = a || p;
  this.B = b || 0;
  this.D = c || ek(new Date)
}
Al.prototype.A = w("C");Al.prototype.b = w("B");Al.prototype.o = w("D");

function Hl(a, b, c) {
  if (b) {
    var d;
    if (d = 10 > b) d = "bg" == Bl(a) || "hi" == Bl(a) || "lv" == Bl(a) || "uk" == Bl(a) || 2 == c.b() && "ko" != Bl(a);
    a = d ? "0" + b : String(b)
  } else a = ga;
  return a
}
function Fl(a, b, c) {
  var d = Hl(a, b.Y, c),
      e = Hl(a, b.month, c);
  b = b.year || "????";
  switch (c.b()) {
  case 1:
    return tl(Ck(a.b.b, gl, 8), [d, e, b]);
  case 2:
    return tl(Ck(a.b.b, gl, 13), [b, e, d]);
  default:
    return tl(Ck(a.b.b, gl, 12), [e, d, b])
  }
}

function El(a, b, c) {
  switch (c.b()) {
  case 1:
    return c = b.Y, b = b.month, tl(Ck(a.b.b, gl, 7), [c, b]);
  case 0:
    return c = b.month, b = b.Y, tl(Ck(a.b.b, gl, 10), [c, b]);
  case 2:
    return c = b.month, b = b.Y, tl(Ck(a.b.b, gl, 11), [c, b]);
  default:
    return c = b.month, b = b.Y, tl(Ck(a.b.b, gl, 10), [c, b])
  }
};

function Il() {}
H(Il, Al);
var Sba = {
  MDY: 0,
  YMD: 2,
  DMY: 1
};Il.prototype.A = function() {
  return S(R()).Nj()
};Il.prototype.b = function() {
  var a = S(R()).vD();
  return Sba[a]
};Il.prototype.o = function() {
  return sk(Jl())
};Xa(Il);
var Kl = new zl(Il.M());

function Jl() {
  return uk(R())
}
function Ll() {
  return sk(Jl())
};

function Ul() {
  P.call(this)
}
H(Ul, P);B = Ul.prototype;B.jx = n;B.IF = n;B.HF = n;B.So = function(a, b, c) {
  this.rd(c)
};B.rd = function(a) {
  this.So(a, a, a)
};B.mr = function(a) {
  this.rd(Mg(0 < a ? this.Ub : this.first, a))
};B.contains = function(a) {
  a = a.va();
  return a.ta() >= this.first.ta() && a.ta() <= this.Ub.ta()
};

function Vl(a) {
  return Hg(a.Ub, a.first) + 1
}
B.Gh = function() {
  this.jx && this.focus.equals(this.HF) && this.first.equals(this.jx) && this.Ub.equals(this.IF) || (this.HF = this.focus, this.jx = this.first, this.IF = this.Ub, this.P(v))
};
B.set = function(a, b, c) {
  this.first = a;
  this.Ub = b;
  this.focus = c;
  this.Gh()
};

function Wl(a, b) {
  P.call(this);
  this.o = b;
  this.A = a;
  this.b = 1;
  this.ja = new Q(this);
  this.ja.I(this.o, "j", this.kN)
}
H(Wl, Ul);B = Wl.prototype;B.ew = n;B.L = function() {
  K(this.ja);
  Wl.J.L.call(this)
};

function Xl(a, b) {
  if (!a.focus) a.focus = b;
  else if (!a.contains(a.focus)) {
    var c = sk(a.A);
    a.contains(c) ? a.focus = c : b.ta() < a.first.ta() ? a.focus = a.first : b.ta() > a.Ub.ta() ? a.focus = a.Ub : a.focus = b
  }
}
function Yl(a, b, c) {
  var d = b;
  7 < c && 0 == c % 7 && (b = Og(b, a.o.hc()));
  a.first = b;
  a.Ub = Mg(b, c - 1);
  Xl(a, d);
  a.b = 1;
  a.Gh()
}
B.Gh = function() {
  Wl.J.Gh.call(this);
  this.ew && this.b == this.ew ? 1 == this.b && this.P("k") : (this.ew = this.b, this.P("k"))
};

function Zl(a, b, c, d, e) {
  var f = b.year,
      h = b.month;
  b = Kg(f, h, 1);
  f = Kg(f, h, tg(f, h));
  c || (f = Og(f, a.o.cj()), b = Pg(b, a.o.cj() + a.o.Bf() - 1));
  d && (b = Og(b, a.o.hc()), f = Pg(f, a.o.hc() + 6));
  e.first = b;
  e.Ub = f
}
function $l(a, b) {
  Zl(a, b, a.o.Kf(), p, a);
  Xl(a, b);
  Zl(a, b, a.o.Kf(), m, a);
  a.b = 3;
  a.Gh()
}

function am(a, b, c) {
  var d = C(c) ? c : a.o.Kf();
  c = Og(b, a.o.hc());
  d || (c = Pg(c, a.o.cj()));
  a.first = c;
  d = a.o.$q(d);
  a.Ub = Mg(c, d - 1);
  Xl(a, b);
  a.b = 2;
  a.Gh()
}
B.rd = function(a) {
  this.focus = a;
  this.contains(a) ? 3 == this.b || this.first.equals(this.Ub) ? am(this, a) : Yl(this, a, 1) : bm(this)
};

function bm(a, b) {
  var c = a.focus;
  if (3 == a.b) $l(a, c);
  else if (2 == a.b) {
    var d = 7 == Vl(a),
        d = b ? a.o.Kf() : d;
    am(a, c, d)
  } else 7 < Vl(a) ? c = Og(c, a.o.hc()) : c == a.Ub && (c = a.first), Yl(a, c, Vl(a))
}
B.So = function(a, b, c) {
  this.first = a;
  this.Ub = b;
  this.focus = c;
  7 < Vl(this) && (this.first = Og(this.first, this.o.hc()), this.Ub = Pg(this.Ub, this.o.hc() + 6));
  a = this.first;
  b = this.Ub;
  var d = Vl(this);
  c = this.o.Kf();
  this.b = 1;
  var e = c ? this.o.hc() : this.o.cj();
  d == this.o.$q() && a.Jb() == e ? this.b = 2 : (d = Mg(a, 10), e = {}, Zl(this, d, c, m, e), a.equals(e.first) && b.equals(e.Ub) && (b = d.month, this.b = 3, this.focus.month != b && (c = d.year, d = Kg(c, b, 1), this.focus = this.focus.ta() < a.ta() ? d : Kg(c, b, tg(c, b)))));
  this.Gh()
};
B.mr = function(a) {
  if (3 == this.b) $l(this, Ng(this.focus.year, this.focus.month + a, 1).va());
  else {
    var b = 2 == this.b ? 7 : Vl(this);
    this.first = Mg(this.first, a * b);
    this.Ub = Mg(this.Ub, a * b);
    Xl(this, Mg(this.focus, a * b));
    this.Gh()
  }
};B.kN = function() {
  bm(this, m)
};

function cm(a, b, c) {
  1 == b && c ? Yl(a, a.focus, c) : (a.b = b, bm(a, m))
};

function dm(a, b, c) {
  this.o = Pb(a);
  this.A = b;
  this.b = c ? Ac(c, id) : n
}
function em(a, b) {
  var c = fm(a),
      d = Yg(b, "showDeclined", "true");
  return new dm(c, d)
}
function gm(a, b) {
  hm(a);
  return b.Aa() in a.D && (!a.b || b.getId() in a.b) ? a.A || 2 != b.Dc : p
}
dm.prototype.getKey = function() {
  hm(this);
  return this.B
};

function hm(a) {
  a.o && (a.o.sort(), a.B = a.o.join(" ") + "/" + a.A + "/" + !! a.b, a.D = Lc(a.o), a.o = n)
};

function V(a, b) {
  this.A = a;
  this.B = !! b
}
var Tba = />(\s+)</g,
    Uba = /\s{2,}/g,
    Vba = /\$\{(\w+)\}/g;B = V.prototype;B.su = p;

function im(a) {
  if (!a.su) {
    var b = a.A;
    delete a.A;
    a.B || (b = b.replace(Tba, "><").replace(Uba, " "));
    var c = [];
    a.o = c;
    a.b = {};
    for (var d = b.match(Vba) || [], e = 0, f = d.length, h = 0; h < f; ++h) {
      var l = d[h],
          q = b.indexOf(l, e);
      e != q && c.push(b.substring(e, q));
      e = q + l.length;
      l = l.substring(2, l.length - 1);
      q = a.b[l];
      q || (q = [], a.b[l] = q);
      q.push(c.length);
      c.push(k)
    }
    e != b.length && c.push(b.substring(e));
    a.su = m
  }
}
B.clone = function() {
  im(this);
  var a = new V(t);
  a.su = m;
  a.o = [].concat(this.o);
  a.b = {};
  for (var b in this.b) a.b[b] = this.b[b];
  return a
};B.put = function(a, b) {
  im(this);
  var c = this.b[a],
      d = c.length;
  if (1 == d) this.o[c[0]] = b;
  else
  for (; d--;) this.o[c[d]] = b
};

function jm(a, b) {
  for (var c in b) a.put(c, b[c]);
  return a.toString()
}
B.toString = function() {
  im(this);
  return this.o.join(t)
};B.Kb = function() {
  var a = {},
      b;
  for (b in this.b) a[b] = n;
  return a
};

function km() {
  this.bc = []
}
B = km.prototype;B.top = 0;B.Am = 0;B.Bm = "px";B.Kt = "left";B.height = t;B.width = 100;B.Lt = "%";B.text = t;B.Dp = y(t);
var lm = {};

function mm(a) {
  var b = 2 * a + 1,
      c = lm[b];
  c || (c = [], a && (c.push("direction:rtl"), J && c.push("zoom:1")), c = c.join(";"), lm[b] = c);
  return c
}
function nm(a, b) {
  var c = hg(a),
      d = b || a;
  return c ? "<" == d.charAt(0) ? d.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + d + "</span>" : d
}
function Ij(a) {
  if (a && cg.test(a)) {
    var b = cg.test(a) ? "\u200f" : "\u200e";
    a = "\u202b" + a.replace(hba, b + "$&" + b) + "\u202c"
  }
  return a
}
function om(a) {
  return Ij(I(a))
};
var pm = p,
    qm = new V('<i class="cic ${specialIcon} ${icon}" title="${title}">&nbsp;</i>');

function Tj(a, b, c) {
  var d = t;
  b ? d += "cic-dm " : c && (d += "cic-l ");
  qm.put("icon", a);
  qm.put("specialIcon", d);
  qm.put("title", rm(a));
  return qm.toString()
}

function sm(a, b) {
  var c = pg(),
      d;
  d = t;
  switch (a) {
  case qa:
    d = "Responded maybe";
    break;
  case ma:
    d = "Not yet responded";
    break;
  case "cic-de":
    d = "Responded no";
    break;
  case ta:
    d = "This event has reminders.";
    break;
  case oa:
    d = "This event has invited guests.";
    break;
  case la:
    d = "All invited guests have declined this event.";
    break;
  case ra:
    d = "This recurring event is part of a series.";
    break;
  case sa:
    d = "This recurring event has been changed and is no longer part of a series.";
    break;
  case na:
    d = "This event is private.";
    break;
  case ka:
    d = "Appointment slots"
  }
  d = I(d);
  return ub('<img role=presentation src="', c, '" class="cic ', a + "-inv", " ", b || t, '" alt="', d, '" title="', rm(a), '"> ')
}

function rm(a) {
  if (!pm) return t;
  var b = t;
  switch (a) {
  case qa:
    b = "Responded maybe";
    break;
  case ma:
    b = "Not yet responded";
    break;
  case "cic-de":
    b = "Responded no";
    break;
  case ta:
    b = "Reminders";
    break;
  case oa:
    b = "Guests";
    break;
  case la:
    b = "All guests declined";
    break;
  case ra:
    b = "Recurring event";
    break;
  case sa:
    b = "Edited recurring event";
    break;
  case na:
    b = "Private";
    break;
  case ka:
    b = "Appointment slots"
  }
  return I(b)
};

function tm() {
  this.bc = []
}
H(tm, km);
var um = p,
    vm = 0;B = tm.prototype;B.lg = 0;B.Dt = t;B.az = t;B.$y = t;B.Jt = n;B.Ct = "#fff";B.Yy = "#000";B.Zy = "#000";

function wm(a, b, c) {
  a.lg = c ? a.lg | b : a.lg & ~b
}

function xm(a, b, c, d, e) {
  a = qi(a);
  c = c || 0;
  var f = p;
  um && 2 == c && (c = 4, f = m);
  var h, l, q, r = a.o;
  switch (c) {
  case 1:
    h = a.O;
    l = a.W;
    q = a.Ja;
    break;
  case 2:
    h = a.b;
    l = a.D;
    q = a.C;
    r = a.ya;
    f = m;
    break;
  case 3:
    h = a.Z;
    l = a.Ia;
    q = a.ea;
    r = b ? a.ka : a.X;
    break;
  default:
    h = a.A, l = a.B, q = a.Ha
  }
  b && (h == l ? l = h = a.b : (h = a.b, l = a.D), q = a.C, r = 2 == c ? a.wa : a.H, f = m);
  e && (h = e, b && (h = mi(h)));
  d = C(d) ? d : 1;
  1 > d && 2 != c && !b && (b = zh(a.b, h, d), h == l ? l = h = b : (h = b, l = zh(a.D, l, d)), 3 != c && a.C && (q = zh(a.C, q, d)));
  return {
    bgColor: h,
    borderColor: l,
    JH: q,
    textColor: r,
    LH: f
  }
}

function ym(a, b, c, d) {
  var e = n,
      f = n;
  if (c) {
    var h = mm(hg(c));
    h && (e = '<div style="' + h + '">', f = "</div>")
  }
  um && c && "caption" == d && (h = b.indexOf(Sa(t, t)), b = b.substring(0, h) + b.substring(h).replace(c, "<span class=cbrdcc>" + c + "</span>"));
  a.put(d, b || t);
  a.put(d + "BidiStart", e || t);
  a.put(d + "BidiEnd", f || t)
}
B.Dp = function() {
  this.b = zm.M().b[this.lg];
  this.b.put("classes", this.bc.join(" "));
  var a = [];
  this.lg & 1 && a.push("cro");
  this.lg & 2 || a.push("cbrd");
  this.b.put("extraClasses", a.join(" "));
  this.b.put("top", this.top);
  um && 0 == this.Am && "%" == this.Bm && (this.Am = -1, this.Bm = "px");
  this.b.put("offset", this.Am);
  this.b.put("offsetUnit", this.Bm);
  this.b.put("edge", this.Kt);
  this.b.put("width", this.width);
  this.b.put("widthUnit", this.Lt);
  um && (this.b.put("maskHeight", this.height - (this.lg & 2 ? 5 : 3) - 1 + "px"), this.lg & 16 && this.b.put("bgHeight", this.height + "px"));
  a = this.height;
  this.b.put("height", a ? a - vm - (this.lg & 2 ? 5 : 3) + "px" : "auto");
  this.b.put("borderColor", this.Yy);
  this.b.put("bgColor", this.Ct);
  this.b.put("captionColor", this.Zy);
  this.b.put("textColor", this.o ? "color:" + this.o + ";" : t);
  ym(this.b, this.az, this.$y, "caption");
  ym(this.b, this.text, this.text, "text");
  this.Dt && this.b.put("titleClass", this.Dt);
  this.b.put("beforeIcons", t);
  this.b.put("icons", t);
  this.A && (this.b.put("userId", this.C), this.b.put("organizerPictureFade", this.B ? "cpic-fade" : t), this.b.put("picRot", this.D & 1 ? "cpic-rot-left" : "cpic-rot-right"), this.b.put("organizerPictureSrc", this.A));
  return this.b.toString()
};

function Am() {}
function Bm(a, b) {
  return a ? '<span class="${titleClass}">' + b + "</span>" : b
}
function Cm(a) {
  return '<dt style="background-color:${captionColor};">${captionBidiStart}${beforeIcons}' + Bm(a, "${caption}") + "${icons}${captionBidiEnd}</dt>"
}
function Dm(a) {
  return "${textBidiStart}" + Bm(a, "${text}") + "${textBidiEnd}"
}
var Em = Am.prototype;Em.b = "border-color:${borderColor};background-color:${bgColor};";
var Fm = '<div class="cb1" style="' + Em.b + '">&nbsp;</div>';Em.K = '<div class="ct" style="border-bottom-color:${borderColor}">&nbsp;</div>';Em.H = '<div class="cb2" style="border-color:${borderColor};">&nbsp;</div>' + Fm;Em.o = Fm + '<div class="cb2" style="border-color:${borderColor};">&nbsp;</div>';Em.X = Cm(p);Em.O = Cm(m);Em.da = "<dd>" + Dm(p) + "</dd>";Em.F = "<dd>" + Dm(m) + "</dd>";
var Gm = Em.b;
Em.B = ub('<div><div class="mask mask-top" style="', Gm, '">&nbsp;</div><div class="mask mask-bottom" style="', Gm, '">&nbsp;</div><div class="mask mask-left" style="height:${maskHeight};', Gm, '">&nbsp;</div><div class="mask mask-right" style="height:${maskHeight};', Gm, '">&nbsp;</div></div>');Em.A = ub('<div class="rsvp-no-bg" style="top:${top}px;${edge}:${offset}${offsetUnit};height:${bgHeight};width:${width}${widthUnit};">&nbsp;</div>');Em.C = '<div class="resizer"><div class="rszr-icon">&nbsp;</div></div>';
Em.D = '<div class="g-hovercard cpic ${organizerPictureFade} ${picRot}" data-userid="${userId}" style="border-color:${borderColor};"><img src="${organizerPictureSrc}?sz=24" height="24px" width="24px"></div>';
var Hm = new V('${templateContentSpecialBackground}<div class="$[classes] chip ${organizerPictureClass}" style="top:$[top]px;$[edge]:$[offset]$[offsetUnit];width:$[width]$[widthUnit];"> ${templateContentPre}<dl class="$[extraClasses]" style="height:$[height];${templateColors}$[textColor]">${templateContent}</dl>${templateContentPost}${organizerPicture}</div>');

function zm() {
  this.b = [];
  for (var a = new Am, b = 0; 64 > b; b++) {
    var c;
    c = a;
    var d = !! (b & 1),
        e = !! (b & 2),
        f = !! (b & 4),
        h = !! (b & 8),
        l = !! (b & 32);
    if (f && d) c = n;
    else {
      d = {
        templateColors: c.b,
        templateContentPre: e ? d ? c.H : c.K : t,
        organizerPicture: l ? c.D : t,
        organizerPictureClass: l ? "corg" : t,
        templateContentPost: e ? c.o : t
      };
      d.templateContentSpecialBackground = um && b & 16 ? c.A : t;
      e = t;
      e = c.X + (h ? c.F : c.da);
      um && (e += c.B);
      f && (e += c.C);
      d.templateContent = e;
      c = k;
      for (c in d) Hm.put(c, d[c]);
      c = Hm.toString().replace(/\[/g, "{").replace(/\]/g, "}");
      c = new V(c)
    }
    c && (this.b[b] =
    c)
  }
}
Xa(zm);J && qc(8);
var Im = {};

function Jm() {
  g(Error("Do not instantiate directly"))
}
Jm.prototype.uo = n;Jm.prototype.toString = w("content");

function Km() {
  Jm.call(this)
}
H(Km, Jm);Km.prototype.Ce = Im;

function Lm() {
  Jm.call(this)
}
H(Lm, Jm);Lm.prototype.Ce = {};

function Mm(a) {
  function b() {}
  b.prototype = a.prototype;
  return function(a, d) {
    var e = new b;
    e.content = String(a);
    d !== k && (e.uo = d);
    return e
  }
}
var Nm = Mm(Km);Mm(Lm);
var Om = function(a) {
  function b() {}
  b.prototype = a.prototype;
  return function(a, d) {
    if (!String(a)) return t;
    var e = new b;
    e.content = String(a);
    d !== k && (e.uo = d);
    return e
  }
}(Km);

function Pm(a, b) {
  this.Ob = a;
  this.D = b || t
}
Pm.prototype.setTitle = Oa("D");

function Qm(a) {
  Pm.call(this, 4 < a.title.length ? 60 : a.X ? 45 : 40, a.title);
  this.K = a.H;
  this.F = a.C;
  this.C = a.D;
  this.A = a.F
}
H(Qm, Pm);Qm.prototype.H = w("C");Qm.prototype.B = function(a, b, c, d, e, f) {
  Rm(this, a, b, c, d, e, m, f)
};

function Rm(a, b, c, d, e, f, h, l) {
  l.push('<td class="', a.A.ql(), c ? t : " tg-timesnotlast", '">');
  l.push(t);
  for (c = f - 1; e < f; ++e) {
    var q = h && e == c ? a.A.getItem() + " " + a.A.b : a.A.getItem(),
        r = b,
        s = Sm(a, e);
    l.push('<div style="height:' + r + 'px;"><div class="' + q + '" style="height:' + (r - 1) + 'px;">' + s + "</div></div>")
  }
  l.push(d, "</td>")
}
function Sm(a, b) {
  return Tm(a.F, b, a.K)
}
function Tm(a, b, c) {
  b = jk(2E3, 1, 1, b, c, 0);
  return a.ob(b.Ea(), m)
}

function Um(a, b, c, d, e, f, h) {
  var l = a.length;
  h = h || new Vm;
  var q = Gg(b.start);
  q.second += b.duration.o / 2;
  b = q.Ea();
  for (var q = [], r = 0; r < l; r++) {
    var s = sb(a[r].ud, "30"),
        u = 0 == r;
    h.title = a[r].A;
    h.H = a[r].b(b);
    h.F = u ? e : f;
    h.C = d;
    h.X = s && !c;
    h.D = u;
    q.push(h.A())
  }
  q.reverse();
  return q
}
function Vm() {}
Vm.prototype.D = m;Vm.prototype.A = function() {
  return new Qm(this)
};

function Wm(a, b, c) {
  this.o = a;
  this.A = b;
  this.b = c
}
Wm.prototype.ql = w("o");Wm.prototype.getItem = w("A");
var Xm = new Wm("tg-times-pri", "tg-time-pri", "tg-time-pri-last"),
    Ym = new Wm("tg-times-sec", "tg-time-sec", "tg-time-sec-last");

function Zm(a, b) {
  this.start = a < b ? a : b;
  this.end = a < b ? b : a
}
Zm.prototype.clone = function() {
  return new Zm(this.start, this.end)
};
var $m = J && !rc(8) ? '<table style="table-layout:fixed" cellpadding=0 cellspacing=0><tr><td>' : t,
    an = J && !rc(8) ? "</tr></td></table>" : t,
    bn = 0;

function cn() {
  if (bn) return bn;
  var a = document.createElement("div");
  a.style.cssText = "visibility:hidden;overflow-y:scroll;position:absolute;top:0;width:100px;height:100px";
  document.body.appendChild(a);
  bn = a.offsetWidth - a.clientWidth || 18;
  document.body.removeChild(a);
  return bn
};

function dn(a) {
  a = a.className;
  return cb(a) && a.match(/\S+/g) || []
}
function en(a, b) {
  var c = dn(a);
  fn(c, Qb(arguments, 1));
  a.className = c.join(" ")
}
function gn(a, b) {
  var c = dn(a),
      c = hn(c, Qb(arguments, 1));
  a.className = c.join(" ")
}
function fn(a, b) {
  for (var c = 0; c < b.length; c++) Jb(a, b[c]) || a.push(b[c])
}
function hn(a, b) {
  return Cb(a, function(a) {
    return !Jb(b, a)
  })
}
function jn(a, b, c) {
  var d = dn(a);
  cb(b) ? Mb(d, b) : Za(b) && (d = hn(d, b));
  cb(c) && !Jb(d, c) ? d.push(c) : Za(c) && fn(d, c);
  a.className = d.join(" ")
}

function kn(a, b, c) {
  c ? en(a, b) : gn(a, b)
};

function ln(a) {
  return "ca-evp" + gb(a)
}
function mn(a) {
  return "evt-lk ca-elp" + gb(a)
};
var nn, on, pn, qn, rn, sn, tn;tn = sn = rn = qn = pn = on = nn = p;
var un = Xb;un && (-1 != un.indexOf("Firefox") ? nn = m : -1 != un.indexOf("Camino") ? on = m : -1 != un.indexOf("iPhone") || -1 != un.indexOf("iPod") ? pn = m : -1 != un.indexOf("iPad") ? qn = m : -1 != un.indexOf("Chrome") ? sn = m : -1 != un.indexOf("Android") ? rn = m : -1 != un.indexOf("Safari") && (tn = m));
var vn = nn,
    Wba = on,
    wn = pn,
    xn = qn,
    Xba = rn,
    yn = sn,
    zn = tn;

function An(a) {
  this.o = a
}
An.prototype.C = 0;An.prototype.D = 0;

function Bn(a, b, c) {
  a.C = b;
  a.D = c
}
function Cn(a, b, c) {
  var d = a.C * c.b;
  a = (c.D - a.D) * c.b;
  var e = Math.round((c.Xj / 60 - c.A) * c.b),
      e = Math.max(d, e);
  b.top = e;
  b.Am = 100 * c.left;
  b.Bm = "%";
  b.Kt = "left";
  d = Math.round((c.o / 60 - c.A) * c.b);
  d = Math.min(d, a);
  d = Math.max(d - e, c.b / 2);
  b.height = d;
  b.width = 100 * c.width;
  b.Lt = "%"
}
function Dn() {
  this.o = n
}
H(Dn, An);Dn.prototype.A = y(t);Dn.prototype.B = D;
var Yba = new Dn;

function En() {}
function Fn(a) {
  var b = new En;
  b.Xj = a;
  return b
}
En.prototype.C = p;En.prototype.B = m;

function Gn(a, b, c) {
  this.o = a;
  this.F = b;
  this.b = c
}
H(Gn, An);
Gn.prototype.A = function(a, b, c) {
  var d = a.event,
      e = new tm;
  wm(e, 2, Zba && this.b.vk());
  var f = Jj(d),
      h = this.b.Qp(d),
      l = this.b.of(d),
      q = 0;
  f ? q = 3 : this.b.Wg(d) ? q = 2 : this.b.oi(d) && (q = 1);
  var r = this.b.Zj(d),
      s = ji(d),
      u = this.b.He(d),
      q = xm(l, u, q, r, s);
  e.Jt = l;
  e.Ct = q.bgColor;
  e.Yy = q.borderColor;
  e.Zy = q.JH;
  e.o = q.textColor;
  e.B = q.LH;
  Cn(this, e, a);
  l = this.b.oi(d);
  q = this.b.Wl();
  wm(e, 1, l);
  l && q && (l = e.Jt ? ri(e.Jt, e.Ct) : 15, e.bc.push("ro-chip-" + l));
  l = this.b.Wg(d);
  wm(e, 16, l);
  l && e.bc.push("rsvp-no-chip");
  l = this.b.Yj(d);
  wm(e, 4, l);
  d.oc() && a.B && !d.Ge() && (l = d.getId().charCodeAt(1), q = this.b.Pp(d), r = d.oc() ? d.mc : n, e.A = q, e.D = l, e.C = r, wm(e, 32, !! q));
  l = this.b.Vg(d);
  h ? (h = Hn(this, d.Fa()), q = t, e.text = l) : 30 < a.o - a.Xj ? (h = Hn(this, d.Fa(), d.Za()), q = t, e.text = l) : (a.C && (l = t), h = Hn(this, d.Fa(), d.Za(), l), q = l);
  h = this.b.ji(d, m) + h + " " + this.b.mi(d, m);
  e.az = h;
  e.$y = q || t;
  h = ln(d);
  e.bc.push(h);
  f && e.bc.push("av-chip");
  d = mn(d);
  e.Dt = d;
  wm(e, 8, !! d);
  0 < a.left && (e.bc.push("chip-border"), (a = c && c.va()) && b == a ? e.bc.push("chip-color-today") : e.bc.push("chip-color"));
  return e.Dp()
};

function Hn(a, b, c, d) {
  b = a.F.ob(b.Lb(), m, m);
  return c ? Sa(b, d || a.F.ob(c.Lb(), m, m)) : "At " + b
}
Gn.prototype.B = Qa(46);
var Zba = !(ic || vn);

function In(a, b, c) {
  this.o = a;
  this.B = b;
  this.A = c
}
B = In.prototype;B.wy = y(t);B.vy = y(t);B.yy = D;B.xy = D;

function Jn(a) {
  return a.Da() ? a.B : 0
}
B.Da = w("o");B.setVisible = Qa(47);

function Kn() {
  In.call(this, p, 0, 0)
}
H(Kn, In);Kn.prototype.Da = y(p);

function Ln(a, b, c, d, e, f, h, l, q, r) {
  this.K = a;
  this.B = b;
  this.X = c;
  this.o = d;
  this.da = d / 2;
  this.H = e;
  this.O = f;
  this.A = h;
  this.C = l ? 0 : 1;
  this.D = q;
  this.F = r
}
H(Ln, uc);Ln.prototype.V = n;Ln.prototype.b = n;Ln.prototype.L = function() {
  Ln.J.L.call(this)
};Ln.prototype.G = Qa(14);

function Mn(a) {
  Qf.call(this, a.t, wf(a.i));
  this.b = a;
  this.b.u = xf(this.b.u)
}
H(Mn, Qf);
var $ba = Kc([2, 1, 0, 3]);Mn.prototype.getHeight = Qa(48);Mn.prototype.getUrl = function() {
  return this.b.u
};Mn.prototype.getType = function() {
  return $ba[this.b.p] || 2
};

function Nn(a, b, c, d, e) {
  0 <= a.indexOf(":") && g(Error("id " + a + " contains a colon"));
  this.Ra = a;
  this.o = b;
  this.b = c;
  this.uf = 1 == b ? d : -1;
  this.nn = e || -1
}
B = Nn.prototype;B.Aa = w("Ra");B.getType = w("o");B.wb = w("b");

function On(a) {
  return a.Aa() + ":" + a.getType() + ":" + a.wb() + ":" + a.uf + ":" + a.nn
}
function Pn(a, b) {
  var c = a.match(/^(\d+):(-?\d+):(-?\d+)$/);
  return c ? 0 <= parseInt(c[3], 10) ? new Nn(b, 1, parseInt(c[1], 10), parseInt(c[2], 10)) : n : n
}

function Qn(a, b) {
  if (a == n) return n;
  for (var c = [], d = 0; d < a.length; d++) {
    var e = Pn(a[d], b);
    e && c.push(e)
  }
  return c
}
B.toString = function() {
  return On(this)
};B.equals = function(a) {
  return this.Aa() == a.Aa() && this.getType() == a.getType() && this.wb() == a.wb() && this.uf == a.uf && this.nn == a.nn
};

function Rn(a, b, c, d, e, f, h, l, q, r, s, u, x, z, A, G, M, N) {
  Sf.call(this, a, c, d, q, A);
  Sn(this, b, e, f, h, l, r, s, u, x, z, G, M, N)
}
H(Rn, Sf);
var aca = RegExp("\u0001", "g"),
    bca = RegExp("\u0002", "g");B = Rn.prototype;B.Ri = function(a, b) {
  Rn.J.Ri.call(this, a.Ea(), b.Ea());
  var c = isNaN(a.hour);
  this.X = c;
  this.da = !c && this.da;
  this.Ve = a.cb();
  c = b.cb();
  if (c == this.Ve || b.hour || b.minute || b.second) c = Zf(c);
  this.Hf = c
};B.Oo = function() {
  return "CONTACTS" == this.b["goo.virtualEventType"]
};
B.update = function(a, b, c, d, e, f, h, l, q, r, s, u, x, z, A, G, M, N) {
  this.Z = a;
  this.Ri(c, d);
  this.hi = q ? q : 0;
  this.C = A || {};
  Sn(this, b, e, f, h, l, r, s, u, x, z, G, M, N)
};

function Sn(a, b, c, d, e, f, h, l, q, r, s, u, x, z) {
  a.setTitle(b || t);
  a.Ra = d;
  a.Tc = l || t;
  a.mc = c || t;
  a.Bc = e || t;
  bg.M();
  a.lf(f & 7);
  a.B = f;
  a.ei = h;
  cb(r) ? r != a.A && (a.A = r, a.D = k) : r != a.D && (a.D = r, a.A = k);
  a.o = q;
  a.b = s || {};
  a.F = u;
  C(x) && (a.O = x);
  z ? a.H = z : a.H || (a.H = new cca);
  a.K = n;
  a.W = n
}

function Tn(a) {
  if (!a.D) {
    var b;
    if (a.A) if (b = a.A, 0 == b.length) b = {};
    else {
      b = b.split("\u0001");
      for (var c = b.length, d = {}, e = 0; e < c; ++e) {
        var f = b[e].split("\u0002"),
            h = {};
        h.eb = Number(f[1]);
        h.pi = !! f[2];
        h.Je = f[3] || n;
        h.pf = f[4] | 0;
        h.Xg = f[5] || n;
        d[f[0]] = h
      }
      b = d
    } else b = {};
    a.D = b
  }
  return a.D
}
function Un(a) {
  return Dc(Tn(a))
}
function Vn(a, b) {
  var c = Tn(a)[b];
  return c ? Hc(c) : c
}
function Oj(a, b) {
  return (a.B & b) == b
}
B.lf = function(a) {
  Rn.J.lf.call(this, a);
  this.B &= -8;
  this.B |= a
};B.Ge = function() {
  return Oj(this, 32)
};
B.Yd = function() {
  return Oj(this, 512)
};B.hb = function() {
  return Oj(this, 256)
};

function Wj(a) {
  return Oj(a, 2048) && !Oj(a, 8192)
}
B.Ws = function() {
  return Oj(this, 4096)
};B.Yf = function() {
  return Oj(this, 1048576)
};B.ff = Qa(49);B.Xc = function() {
  if (!this.W) {
    var a = this.b && this.b["goo.richContent"];
    a && (this.W = new Mn(a))
  }
  return this.W || n
};

function cca() {
  this.B = this.o = this.A = this.D = this.b = k
}
B.clone = function() {
  var a = new Rn(this.getId(), this.getTitle(), this.Fa(), this.Za(), this.mc, this.Aa(), this.Bc, this.B, this.hi, this.ei, this.Tc, this.o, k, this.b, this.C, this.F ? Pb(this.F) : n, this.Sj());
  a.Hd = this.Hd;
  a.H = Hc(this.H);
  a.K = this.K ? Pb(this.K) : n;
  a.A = this.A;
  this.D && (a.D = Hc(this.D));
  return a
};

function dca(a, b, c, d) {
  this.event = a;
  this.Xj = b;
  this.b = c;
  this.dI = d;
  this.wp = []
};

function Wn(a, b, c, d, e) {
  this.F = new Gn(wi(), a, b);
  this.A = c || "tg";
  this.K = d || p;
  this.Ia = e || "tg-gutter";
  b = new Vm;
  b.title = t;
  b.H = 0;
  b.C = a;
  b.F = Xm;
  this.D = [b.A()];
  this.da = [];
  this.W = [];
  this.O = [];
  this.B = new Kn;
  this.b = 0;
  this.o = 24;
  this.da.push(eca);
  this.O.push(fca)
}
Wn.prototype.H = n;Wn.prototype.X = n;Wn.prototype.Z = 0;

function Xn(a, b, c) {
  a.b = b;
  a.o = c
}
function Yn(a, b) {
  a.D = b;
  for (var c = 0, d = 0; d < b.length; d++) {
    var e = b[d];
    if (e.H && e.C) break;
    c += e.Ob
  }
  a.Z = c
}

function Zn(a) {
  for (var b = 0, c = 0, d = a.D.length; c < d; c++) b += a.D[c].Ob;
  return b
}
function $n(a, b) {
  return 42 * (b.hour + b.minute / 60 - a.b) | 0
}
function gca(a, b, c, d) {
  var e = a.F;
  if (a.C) for (var f in a.C) if (a.C[f].UI(b, c)) {
    e = a.C[f].WI;
    break
  }
  f = Fn(b.Xj);
  f.o = b.b;
  f.event = b.event;
  f.left = b.left;
  f.width = b.fH;
  f.b = 42;
  f.A = a.b;
  f.B = !b.eH;
  f.D = a.o - a.b;
  return e.A(f, c, d)
}
function ao(a, b, c, d) {
  var e = a.C || {};
  e[b] = {
    UI: c,
    WI: d
  };
  a.C = e
}

function eca(a, b, c, d, e) {
  var f;
  (a = e && e.va()) && b == a && (f = '<div class="tg-today" style="' + bo(d) + '">&nbsp;</div>');
  return f
}
function fca(a, b, c, d, e) {
  var f;
  a = e && e.va();
  b == a && (f = '<div class="tg-hourmarker tg-nowmarker" id="' + d.A + 'nowmarker" style="top:' + $n(d, e) + "px;" + (co(d, e) ? t : "display: none;") + '"> </div>');
  return f
}
function bo(a) {
  a = 42 * (a.o - a.b);
  return "height:" + a + "px;margin-bottom:-" + a + "px;"
}
Wn.prototype.render = function(a, b, c) {
  var d = a.length,
      e = this.H,
      f = bo(this),
      h = 42 * (this.o - this.b) + 2;
  e.push('<div class="tg-mainwrapper" style="margin-top:', Jn(this.B), 'px;"><table id="', this.A, 'Table" class="tg-timedevents" cellpadding="0" cellspacing="0" style="height:', h, 'px">');
  var l = c || n,
      h = this.D;
  e.push('<tr height="1">');
  for (var q = 0, r = h.length; q < r; q++) e.push('<td style="width:', h[q].Ob, 'px;"></td>');
  e.push('<td colspan="', d, '"><div class="tg-spanningwrapper"><div class="tg-hourmarkers">');
  this.B.yy(42, e);
  for (q = this.b; q < this.o; q++) e.push('<div class="tg-markercell"><div class="tg-dualmarker"></div></div>');
  this.B.xy(42, e);
  e.push('</div></div><div class="tg-spanningwrapper tg-chipspanningwrapper" id="', this.A, 'spanningwrapper"></div></td>');
  e.push(fa);
  q = [];
  l && q.push('<div id="', this.A, 'nowptr" class="tg-nowptr" style="left:', this.Z, "px;top:", $n(this, l) - 4, "px;", co(this, l) ? t : "display:none;", '"></div>');
  l = q.join(t);
  e.push("<tr>");
  q = 0;
  for (r = h.length; q < r; q++) {
    var s = q == r - 1;
    h[q].B(42, s, s ? l : t, this.b, this.o, e)
  }
  l = b;
  for (h = 0; h < d; h++) {
    r = [];
    q = a[h];
    if (q.length) {
      for (var r = q, s = l, u = r.length, x = [], z = [], A = [], G = 0; G < u; ++G) {
        var M = r[G],
            N = M.Fa(),
            X = $f(N) || 0;
        N.cb() < s.cb() && (X = 0);
        var $ = M.Za(),
            N = $f($) || 0;
        30 > N - X && (N = X + 30);
        M.Yf() && Sd(24) && (N = X + 60);
        if ($.cb() > s.cb() || 1440 < N) N = 1440;
        for ($ = 0; z[$] > X;) $++;
        var M = new dca(M, X, N, $),
            ca = A[$];
        ca || (ca = A[$] = []);
        ca.push(M);
        z[$] = N;
        x[$] = M;
        0 != $ && (M.xp = [x[$ - 1]], x[$ - 1].wp.push(M));
        for (N = $ + 1; z[N] <= X;) N++;
        if (X = x[N]) M.wp.push(X), X.xp.push(M)
      }
      r = Array.prototype.concat.apply([], A);
      s = r.length;
      z = x = u = k;
      for (x = s; x--;) {
        A = 1;
        G = 0;
        u = r[x];
        for (z = u.wp.length; z--;) X = u.wp[z], G = Math.max(G, X.zy), A = Math.min(A, X.left), X.Xj < u.Xj + 30 && (u.eH = m);
        u.zy = G + 1;
        u.width = A / (u.dI + 1);
        u.left = A - u.width
      }
      for (x = 0; x < s; x++) {
        u = r[x];
        u.left = 0;
        if (u.xp) for (z = u.xp.length; z--;) A = u.xp[z], u.left = Math.max(u.left, A.left + A.width);
        z = (1 - u.left) / u.zy;
        u.width = Math.max(u.width, z);
        u.fH = Math.min(1 - u.left, u.width + .7 * z)
      }
      s = l;
      u = c;
      x = [];
      for (z = 0; z < r.length; z++) x.push(gca(this, r[z], s, u));
      r = x
    }
    s = [];
    for (z = 0; z < this.da.length; ++z) s.push(this.da[z](h, l, q, this, c));
    s.push(this.B.wy(h, l, q, this, c));
    u = [];
    for (z = 0; z < this.W.length; ++z) u.push(this.W[z](h, l, q, this, c));
    u.push(this.B.vy(h, l, q, this, c));
    x = [];
    for (z = 0; z < this.O.length; ++z) x.push(this.O[z](h, l, q, this, c));
    x.push(t);
    q = this.K && h == d - 1 ? "tg-gutter" : this.Ia;
    z = "tg-col";
    c && (l.equals(c.va()) || 1 < d && l.equals(Jg(c)) && 0 < h) && (z = "tg-col-today");
    z = ug(l.Jb()) ? z + " tg-weekend" : z;
    A = this.A;
    G = h;
    e.push('<td class="' + z + '">' + s.join(t) + '<div id="' + A + "Col" + G + '" class="tg-col-eventwrapper" style="' + f + '"><div class="' + q + '">' + r.join(t) + u.join(t) + '</div></div><div id="' + A + "Over" + G + '" class="tg-col-overlaywrapper">' + x.join(t) + "</div></td>");
    this.K || (l = Jg(l))
  }
  e.push(fa);
  e.push(ea);
  e.push("</div>");
  c = Zn(this) + 3;
  f = e = NaN;
  a = Array.prototype.concat.apply([], a);
  l = a.length;
  for (h = 0; h < l; h++) r = a[h], q = $f(r.Fa()), r = $f(r.Za()), r < q || (isNaN(e) ? (e = q, f = r) : (e = Math.min(e, q), f = Math.max(f, r)));
  this.X = new Ln(b, d, c, 42, p, isNaN(e) ? n : new Zm(e, f), this.A, this.K, this.b, this.o - this.b)
};

function co(a, b) {
  return !isNaN(b.hour) && b.hour >= a.b && b.hour < a.o
}

function eo(a, b, c) {
  for (var d = [], e = {}, f = b = b.cb(), h = 0; h < c; h++) d[h] = [], e[f] = h, f = Zf(f);
  c = f;
  for (var h = 0, l = a.length; h < l; h++) for (var q = a[h], f = Math.max(q.Fa().cb(), b), r = Math.min(Lg(q.Za()).cb(), c); f < r;) d[e[f]].push(q), f = Zf(f);
  return d
};

function fo(a, b, c, d, e, f, h) {
  this.F = a;
  this.H = b;
  this.da = c;
  this.O = e;
  this.W = f;
  this.X = h;
  b = go(this);
  ho(a) && b && b.collapsed && (this.A = m, this.B = b.start, this.D = b.end)
}
fo.prototype.C = p;fo.prototype.A = p;

function ho(a) {
  var b = Td(a).isEnabled(21),
      c = Td(a).isEnabled(22);
  a = Yg(Nh(Ph(a)), "collapsingRangesLab", c ? "true" : "false");
  return b && a
}

function hca(a) {
  a.b = new Wn(a.H, a.da, a.O, a.W, a.X);
  ao(a.b, "ud", E(function(a, c) {
    return !io(this, a.event, c).ah
  }, a), Yba);
  a.B != n && Xn(a.b, a.B, a.D);
  a.o ? a.b.B = a.o : a.B != n && a.A && (a.C = m, Xn(a.b, Math.max(a.B - 1, 0), Math.min(a.D + 1, 24)), Bn(a.b.F, 1, 1))
}
function jo(a) {
  a.b || hca(a);
  return a.b
}

function io(a, b, c) {
  function d(a) {
    var b = Gg(c);
    hk(b, new Ig(0, a, 0, 0));
    return b.Ea()
  }
  var e = b.Fa().ta();
  b = b.Za().ta();
  var f = d(a.b.b).ta();
  a = d(a.b.o).ta();
  var h = d(0).ta(),
      l = d(24).ta();
  return b <= h || e >= l ? ica : e < f ? b <= f ? jca : b <= a ? kca : lca : e < a ? b <= a ? mca : nca : oca
}
function go(a) {
  a = S(a.F).get("collapsedTime");
  if (a != n) {
    var b = RegExp("(.*)\\|(.*)\\|(.)", "g").exec(a);
    if (b) {
      a = parseFloat(b[1]);
      var c = parseFloat(b[2]),
          b = "1" == b[3];
      if (!isNaN(a) && !isNaN(c)) return new pca(a, c, b)
    }
  }
  return n
}
var ica = {
  top: p,
  ah: p,
  bottom: p
},
    jca = {
    top: m,
    ah: p,
    bottom: p
    },
    kca = {
    top: m,
    ah: m,
    bottom: p
    },
    mca = {
    top: p,
    ah: m,
    bottom: p
    },
    nca = {
    top: p,
    ah: m,
    bottom: m
    },
    oca = {
    top: p,
    ah: p,
    bottom: m
    },
    lca = {
    top: m,
    ah: m,
    bottom: m
    };

function pca(a, b, c) {
  this.start = a;
  this.end = b;
  this.collapsed = c
};

function qca(a) {
  this.b = !! a
}
function ko(a, b, c, d, e, f, h, l, q) {
  q ? (a = rca, a.put("borderColor", q)) : a = a.b || sca ? tca : uca;
  a.put("color", d);
  a.put("textColor", e);
  a.put("outerClasses", f || t);
  a.put("paddingClasses", l || t);
  a.put("extraHtml", h || t);
  d = a;
  d.put("content", b);
  d.put("dir", c ? ";direction:rtl;;text-align:left" : t);
  return a.toString()
}
var uca = new V('<div class="${outerClasses} rb-o" style="border-color:${color}${dir}"><div class="${paddingClasses} rb-m" style="border-color:${color};background-color:${color};color:${textColor}">${extraHtml}<div class="rb-i">${content}</div></div></div>'),
    tca = new V('<div class="${outerClasses} ${paddingClasses} rb-n" style="color:${textColor};background-color:${color}${dir}">${extraHtml}${content}</div>'),
    rca = new V('<div class="${outerClasses} ${paddingClasses} rb-n" style="border:1px solid ${borderColor};color:${textColor};background-color:${color}${dir}"><div class=rb-ni>${extraHtml}${content}</div></div>'),
    sca = ic || vn;

function lo(a, b, c, d, e, f) {
  this.o = b;
  this.A = c;
  this.F = d;
  if (f) a = f(a);
  else {
    b = [];
    c = [];
    var h;
    d = 0;
    f = this.A;
    var l = this.o,
        q = Eg(l.ta(), Mg(l, f).ta());
    for (h = 0; h < f; h++) b[h] = [], c[h] = [];
    h = 0;
    for (var r = a.length; h < r; h++) {
      var s = a[h];
      if (Vf(s, q)) {
        var u = s.di,
            x = 0,
            z = Hg(s.Fa().va(), l);
        if (0 > z) {
          if (!u) continue;
          z = 0;
          x |= 1
        }
        var A = Hg(Lg(s.Za()), l);
        A > f && (A = f, x |= 2);
        u = new mo(s, u ? A - z : 1, x);
        (s = s.Xc()) && Rf(s) ? c[z].push(u) : (b[z].push(u), d++)
      }
    }
    a = {
      Jy: b,
      Ly: c,
      Ky: d
    }
  }
  this.b = a.Jy;
  this.B = a.Ly;
  this.C = a.Ky;
  this.D = e || 0
}

function mo(a, b, c) {
  this.event = a;
  this.b = b;
  this.yb = c
}

function no(a, b) {
  for (var c = a.A, d = a.C, e = a.F, f = Tb(c), h = Tb(c), l = Tb(c), q = [], r = 0, s = 0; d;) {
    r == c && (r = 0, s++);
    var u = a.b[r][f[r]++];
    if (u) {
      for (var x = u.b; x--;) l[r] = s, s + 1 == e ? q[r] = u : s >= e && (h[r]++, q[r] && (q[r].jz = m)), r++;
      --d
    } else r++
  }
  f = Tb(c);
  d = [];
  x = s;
  s = 0;
  switch (a.D) {
  case 2:
    for (r = 0; r < c; r++) if (a.b[r].length && !(h[r] || q[r] && q[r].jz)) {
      s = 1;
      break
    }
    break;
  case 1:
    s = 1
  }
  for (var e = Math.min(x, e - 1), z = e + 1 + s, s = 0; s < z; s++) {
    var A = z - s;
    b.b.push("<tr>");
    for (r = 0; r < c; r++) if (!d[r]) {
      var u = a.b[r][f[r]++],
          G = s >= l[r];
      if (s == e && (h[r] || q[r] && q[r].jz)) {
        var G =
        b,
            M = Mg(a.o, r),
            u = h[r] + (q[r] ? 1 : 0),
            M = "ca-mlp" + M.cb();
        G.b.push('<td class="', "st-c", " ", "st-more-c", '">');
        G.X && G.A ? G.b.push('<div class="', M, " ", 'st-more st-morewk" >' + G.o.um(u) + "</div>") : G.X ? G.b.push('<div class="', M, " ", 'st-more st-moreicon" >\u25bc</div>') : G.b.push('<span class="', M, " ", 'st-more st-moreul" >' + ("+" + u + " more") + "</span>");
        G.b.push("</td>")
      } else if (u && s <= e) {
        M = 1;
        1 < u.b ? r += u.b - 1 : G && s != x && (M = A, d[r] = m);
        var G = b,
            N = !! (u.yb & 1),
            X = !! (u.yb & 2),
            $ = ln(u.event);
        G.K(u, M, p, N, X, $);
        G.D(u, M, p, N, X, $);
        G.H(u, M, p, N, X, $)
      } else G = (d[r] = G) ? A : 1, u = b.b, u.push('<td class="st-c st-s"'), 1 < G && u.push(aa, G), u.push(">&nbsp;")
    }
  }
};
var vca = new V('<span class="te-c goog-inline-block" style="background-color:${eventColor}">&nbsp;</span>'),
    wca = new V('<div class="${extraClasses} te" style="color:${color}"><span class="te-t">${time}&nbsp;</span>${eventColorSpan}<span class="te-s">${subject}</span></div>'),
    xca = new V('<div class="${extraClasses} te" style="color:${color}"><table cellpadding=0 cellspacing=0 class="te-rev"><tr><td class="te-t">${time}&nbsp;</td><td>${eventColorSpan}&nbsp;</td><td class="te-rev-s"><div class="te-rev-spos">&nbsp;<div class="te-rev-scont" dir="rtl">${subject}</div></div></td></tr></table></div>');

function oo(a, b, c, d, e) {
  this.B = a;
  this.o = b;
  this.C = new qca(!b.vk());
  this.da = c || p;
  this.X = !! d;
  this.F = !! e;
  this.A = b.Zh()
}
oo.prototype.b = n;

function po(a) {
  a.b.push('<table cellpadding="0" cellspacing="0" class="st-grid">')
}
function qo(a) {
  a.b.push(ea)
}
function ro(a, b) {
  for (var c = a.b, d = 0; d < b.length; d++) {
    var e = b[d],
        f = e.event.Xc();
    f.lq() && (so.put("title", I(f.getTitle())), so.put("iconURL", I(f.o)), e = ln(e.event) + " st-wc", f.getUrl() && (e += " st-wc-click"), so.put("class", e), c.push(so.toString()))
  }
}
oo.prototype.K = D;
oo.prototype.D = function(a, b, c, d, e, f) {
  c = this.b;
  c.push("<td class=st-c");
  1 < b && c.push(aa, b);
  1 < a.b && c.push(" colspan=", a.b);
  c.push(">");
  c.push("<div class=st-c-pos>");
  c.push(to(this, a.event, p, d, e, f));
  c.push("</div></td>")
};oo.prototype.H = D;

function to(a, b, c, d, e, f) {
  if (b.di || b.Db()) {
    var h = !! c;
    d = !! d;
    e = !! e;
    f = f || t;
    var l = a.o.ji(b, m);
    (c = a.o.Vg(b)) && a.F && (c = '<span class="' + mn(b) + '">' + c + "</span>");
    var q = a.o.mi(b, m);
    c += q;
    b.Db() || d ? h && (h = Xf(b), 1 < h.Y && (c = "(" + Gl(h) + ") " + c)) : c = "(" + a.B.ob(b.Fa()) + ") " + c;
    c = l + c;
    var q = a.o.He(b),
        r = a.o.oi(b),
        s = a.o.of(b),
        u = qi(s),
        l = q ? u.H : u.o,
        h = a.o.Wg(b) ? u.b : r ? u.O : u.A,
        x = a.o.Zj(b),
        z = ji(b);
    q ? h = z ? mi(z) : u.K : z && (h = z);
    1 > x && (h = zh(u.K, z ? z : h, x));
    r && a.o.Wl() && (s = s ? ri(s, h) : 15, f += " rb-ro-" + s);
    var A;
    a.o.Zh() && (A = q ? r ? u.b : u.D : r ? u.W : u.B);
    q = [];
    d && q.push("st-ad-mpad");
    e && q.push("st-ad-mpadr");
    q = q.join(" ");
    d = uo(d, e, h, A);
    a = a.C;
    e = c;
    c = b.getTitle();
    c = hg(c);
    b = ko(a, e, c ? !(b.Oo && b.Oo()) : p, h, l, f, d, q, A)
  } else A = f || t, d = a.o.ji(b, p), (f = a.o.Vg(b)) && a.F && (f = '<span class="' + mn(b) + '">' + f + "</span>"), e = a.o.mi(b, p), f += e, e = a.o.He(b), c = a.o.Wg(b), c = e || c, e = a.o.of(b), h = qi(e), e = c ? h.da : h.F, l = a.o.Zj(b), !c && 0 <= l && 1 > l && (e = zh(h.da, e, l)), c = ji(b), b = d + a.B.ob(b.Fa(), m, a.da), a = e, d = wca, hg(f) && (d = xca), d.put("color", a), d.put("time", b), d.put("subject", f), d.put("extraClasses", A), d.put("eventColorSpan", c ? jm(vca, {
    eventColor: c
  }) : t), b = d.toString();
  return b
}
function uo(a, b, c, d) {
  if (!a && !b) return t;
  var e = [];
  a && (vo(e, "st-ad-ml", d || c), vo(e, "st-ad-ml2", c));
  b && (vo(e, "st-ad-mr", d || c), vo(e, "st-ad-mr2", c));
  return e.join(t)
}
function vo(a, b, c) {
  a.push("<div class=", b, ' style="border-color: transparent ', c, '"></div>')
}
var so = new V('<img src="${iconURL}" class="${class}" title="${title}" alt="${title}">');

function wo(a) {
  return Nd(a, 11) ? Jd(a, 11) : n
};

function xo(a, b) {
  P.call(this);
  this.b = a;
  this.eb = this.o = b
}
H(xo, P);

function yo(a) {
  return Jd(a, 10)
}
function zo(a) {
  return yo(a).Pa()
}
function Ao() {
  return Va._ol_enabled && yn && qc(10)
}
xo.prototype.register = function(a) {
  Od(a, 10, this)
};xo.prototype.Pa = function() {
  return "disconnected" != Bo(this)
};

function Bo(a) {
  var b = wo(a.b);
  return b && b.isEnabled() ? a.eb : a.o
};
var Co = hc || ic || gc || typeof Va.atob == Ea;

function yca(a, b) {
  this.o = a;
  this.b = b
}
function Do(a, b, c) {
  this.o = a;
  this.A = b;
  this.b = c || 0
}
var zca = new Do(21, 21, 3),
    Aca = new Do(19, 19, 5),
    Bca = new Do(17, 17, 4);

function Eo(a) {
  Gj.call(this);
  this.b = a;
  this.o = {}
}
H(Eo, Gj);

function Fo(a, b) {
  return a.o[b.Aa()] || a.b
}
B = Eo.prototype;B.Ck = function(a) {
  return Fo(this, a).Ck(a)
};B.of = function(a) {
  return Fo(this, a).of(a)
};B.Vg = function(a) {
  return Fo(this, a).Vg(a)
};B.Vf = function(a) {
  return Fo(this, a).Vf(a)
};B.oi = function(a) {
  return Fo(this, a).oi(a)
};B.Wg = function(a) {
  return Fo(this, a).Wg(a)
};B.Yj = function(a) {
  return Fo(this, a).Yj(a)
};B.fg = Qa(23);B.Qp = function(a) {
  return Fo(this, a).Qp(a)
};B.Pp = function(a) {
  return Fo(this, a).Pp(a)
};
B.mi = function(a, b) {
  return Fo(this, a).mi(a, b)
};B.ji = function(a, b) {
  return Fo(this, a).ji(a, b)
};B.Pj = function() {
  return this.b.Pj()
};B.Zj = function(a) {
  return this.b.Zj(a)
};B.He = function(a) {
  return Fo(this, a).He(a)
};B.vk = function() {
  return this.b.vk()
};B.Zh = function() {
  return this.b.Zh()
};B.Wl = function() {
  return this.b.Wl()
};B.um = function(a) {
  return this.b.um(a)
};
var Go = new Zm(5, 20);

function Ho(a, b, c, d) {
  var e = C(d) ? d : 1E5;
  d = C(d) ? d + b : -1;
  a = a.o;
  for (var f = 24 * a, h = NaN, l = NaN, q = p, r = 0; r < c.length; ++r) {
    var s = Zd(c[r] * a / 60, 0, f),
        q = q || s < e || s > d;
    if (isNaN(h)) h = l = s;
    else if (s < h ? h = Math.max(s, l - b) : s > l && (l = Math.min(s, h + b)), l - h >= b) break
  }
  return q ? h : e
};

function Io(a, b) {
  this.b = a;
  this.o = b
};

function Jo(a) {
  this.b = a
}
Jo.prototype.apply = function(a) {
  for (var b = [], c = [], d = 0, e = a.length; d < e; d++) {
    var f = a[d],
        h = f.Xc() && Rf(f.Xc());
    this.b && h || (f.Db() || f.di || h ? b.push(f) : c.push(f))
  }
  return new Io(b, c)
};

function To(a, b, c, d, e) {
  this.B = a;
  this.id = String(b);
  this.o = c;
  this.b = d;
  this.K = e
}
function Uo(a, b, c, d, e, f) {
  f = !! f;
  b = a.K.apply(b);
  var h = [];
  a.F(b, h, c, d, e, f);
  f = [];
  f.push($m);
  a.C(b, f, c, d, e);
  f.push(an);
  return {
    Ds: h.join(t),
    Hx: f.join(t)
  }
}
function Vo(a) {
  return "weekViewAllDay" + a.id
}
function Wo(a) {
  return "scrolltimedevents" + a.id
}
To.prototype.D = function() {
  return "topcontainer" + this.id
};

function Xo(a, b, c, d, e) {
  To.call(this, a, b, c, d, new Jo(p));
  this.X = !! e
}
H(Xo, To);Xo.prototype.A = p;
Xo.prototype.F = function(a, b, c, d, e, f) {
  a = a.b;
  b.push('<table class="wk-weektop', 1 < e ? " wk-full-mode" : t, '" cellpadding=0 cellspacing=0><tr class=wk-daynames>');
  var h = Cca(this, a);
  b.push(Dca(this, h, f));
  for (var h = c.va(), l, q = p, r = 0; r < e; r++) {
    l = Mg(d, r);
    var s = 1 == e ? this.B.Ek(l) : this.B.Xp(l);
    b.push('<th title="', s, '" scope=col><div class="wk-dayname');
    q && (q = p, b.push(" wk-tomorrow"));
    l.equals(h) && (b.push(" wk-today"), r == e - 1 ? b.push(" wk-today-last") : q = m);
    b.push('">');
    b.push('<span class="', "ca-cdp" + l.cb(), ' wk-daylink">', s, "</span></div></th>")
  }
  b.push(['<th class="wk-dummyth" rowspan=3 style="width: ', cn() - 1, 'px;">&nbsp;</th>'].join(t));
  b.push(fa);
  b.push("<tr>");
  b.push('<td class="wk-allday" colspan="', e, '"><div id="', Vo(this), '" class="wk-allday-pos">');
  this.o.b = b;
  c = c.va();
  h = this.o.b;
  h.push('<table id="' + Yo(this) + '" cellpadding=0 cellspacing=0 class="st-bg-all"><tr>');
  if (1 == e && d.equals(c)) h.push('<td class="st-bg-td-last">&nbsp;</td>');
  else
  for (l = p, q = e, r = d; q--; r = Jg(r)) s = t, r.equals(c) ? (l = m, s = r.equals(d) ? "st-bg-td-first" : 0 == q ? "st-bg-td-last" : "st-bg-today") : r.equals(d) || l ? (s = "st-bg-next", l = p) : s = "st-bg", 0 == q && (s += " st-bg-lc"), h.push("<td"), s && h.push(' class="' + s + '"'), h.push(">&nbsp;</td>");
  h.push("</tr></table>");
  po(this.o);
  d = new lo(a, d, e, f ? 1 : 200, this.X && f ? 2 : 1);
  no(d, this.o);
  qo(this.o);
  b.push("</div></td>");
  b.push('</tr><tr class="wk-webcontent">');
  d = d.B;
  for (f = 0; f < e; f++) b.push('<td class="wk-webcontent-td">'), ro(this.o, d[f]), b.push("</td>");
  this.o.b = n;
  b.push(fa);
  b.push(ea)
};

function Cca(a, b) {
  if (!a.A) return p;
  var c = Cb(b, function(a) {
    return !(a.Xc() && Rf(a.Xc()))
  });
  Rb(c, function(a, b) {
    return a.Fa().va().cb() - b.Fa().va().cb()
  });
  for (var d = 1, e = c.length; d < e; ++d) if (c[d - 1].Za().va().cb() > c[d].Fa().va().cb()) return m;
  return p
}
Xo.prototype.C = function(a, b, c, d, e) {
  this.b.H = b;
  a = eo(a.o, d, e);
  this.b.render(a, d, c);
  this.b.H = n
};

function Dca(a, b, c) {
  for (var d = [], e = a.b.D, f = 0, h = 0; h < e.length; h++) f += e[h].Ob, d.push("<td class=wk-tzlabel style=width:", e[h].Ob, "px rowspan=3>", I(e[h].D), h == e.length - 1 && b ? Eca(a, !! c, f) : t, "</td>");
  return d.join(t)
}

function Eca(a, b, c) {
  return "<div class=wk-disclose-pos style=width:" + c + 'px><div id="' + ("allday-disclose" + a.id) + '" title="' + (b ? "Expand All Day events" : "Collapse All Day events") + '" role=button class="wk-disclose goog-zippy-' + (b ? "collapsed" : "expanded") + '"><div class=wk-zip></div></div></div>'
}
Xo.prototype.D = function() {
  return "topcontainer" + this.id
};

function Yo(a) {
  return "weekViewAllDayBg" + a.id
};

function Fca(a, b, c) {
  this.Ql = 7 >= a;
  this.Px = (this.Ql ? a : 7) - b;
  this.QG = b;
  this.Qx = c
};

function Zo() {
  P.call(this);
  this.b = {}
}
H(Zo, P);Xa(Zo);Zo.prototype.reset = Qa(53);
var Gca = /\W/g;Zo.prototype.log = function(a, b) {
  if (!(0 > b || 6E5 < b)) {
    var c = a.replace(Gca, "_");
    c in this.b || (this.b[c] = []);
    this.b[c].push(b)
  }
};Zo.prototype.getData = Qa(54);

function $o(a) {
  return new ap(a)
}
function ap(a) {
  this.B = a;
  bp(this)
}
ap.prototype.b = function(a) {
  a = a || this.fb;
  var b = ib();
  this.B.log(a, b - this.o);
  this.A = b
};ap.prototype.Fa = w("o");

function cp(a, b) {
  var c = b || a.fb,
      d = ib();
  a.B.log(c, d - a.A);
  a.A = d
}

function bp(a, b) {
  a.o = b || ib();
  a.A = a.o
}
function dp(a, b) {
  Zo.M().log(a, b)
}
function ep(a) {
  Zo.M().log(a, 0)
}
function fp() {
  return $o(Zo.M())
};

function gp(a) {
  this.b = a
}
gp.prototype.A = Qa(56);gp.prototype.C = Qa(58);gp.prototype.D = function(a) {
  var b = fp();
  this.b.mr(a);
  b.b(this.b.b + ".alterPeriod" + a)
};gp.prototype.o = y(p);

function hp(a, b) {
  this.b = a;
  this.O = b;
  ip(this)
}
H(hp, gp);hp.prototype.F = p;

function ip(a) {
  var b = a.H() && a.F;
  a.B = new Fca(a.O, b ? 2 : 0, b ? 1 : n)
}
hp.prototype.H = y(p);hp.prototype.da = w("B");hp.prototype.o = y(m);

function jp(a) {
  hp.call(this, a, 1)
}
H(jp, hp);

function kp(a) {
  this.b = a
}
H(kp, gp);kp.prototype.C = Qa(57);kp.prototype.D = function(a) {
  var b = fp(),
      c = lp.M();
  mp(c.b, a);
  np(c);
  b.b(this.b.b + ".alterPeriod" + a)
};kp.prototype.K = y(m);

function op(a, b, c) {
  this.F = b;
  hp.call(this, a, 35);
  this.X = c
}
H(op, hp);op.prototype.H = y(m);op.prototype.A = Qa(55);

function pp(a) {
  this.b = a
}
H(pp, kp);pp.prototype.K = y(p);

function qp(a, b, c) {
  this.F = b;
  hp.call(this, a, 7);
  this.X = c
}
H(qp, hp);qp.prototype.H = y(m);

function rp(a, b) {
  this.o = a;
  this.b = b || 1
}
var Hca = {
  LZ: 0,
  P0: 1,
  G_: 2,
  C_: 3,
  wZ: 4,
  yq: 5,
  q0: 6
},
    Ica = /^custom/;rp.prototype.getType = w("o");

function sp(a) {
  return 6 == a.o
}
rp.prototype.clone = function() {
  return new rp(this.o, this.b)
};rp.prototype.equals = function(a) {
  return this.o == a.getType() && this.b == a.b
};

function tp(a) {
  switch (a.o) {
  case 0:
    return "day";
  case 1:
    return "week";
  case 2:
    return "month";
  case 3:
    return "list";
  case 4:
    return "compact";
  case 5:
    return "custom";
  case 6:
    return Ja;
  default:
    return t
  }
}

function Jca(a) {
  switch (a) {
  case "day":
    return 0;
  case "week":
    return 1;
  case "month":
    return 2;
  case "list":
    return 3;
  case "compact":
    return 4;
  case "custom":
    return 5;
  default:
    return 6
  }
}
rp.prototype.toString = function() {
  var a = tp(this);
  4 == this.o && (a += "," + this.b);
  return a
};

function Kca(a, b, c) {
  var d = S(b),
      e = !d.Kf(),
      d = d.hc();
  uk(b);
  switch (a.o) {
  case 0:
    return a.b = 1, new jp(c);
  case 1:
    return b = new qp(c, e, d), a.b = b.B.Px, b;
  case 2:
    return a.b = 31, new op(c, e, d);
  case 3:
    return a.b = 1, new kp(c);
  case 6:
    return a.b = 1, new pp(c);
  default:
    return new hp(c, a.b)
  }
};

function up(a) {
  P.call(this);
  this.D = a;
  this.b = new rp(1);
  this.A = this.o = n
}
H(up, P);

function vp(a) {
  return Jd(a, 15)
}
function wp(a) {
  return vp(a).b
}
function xp(a) {
  return yp(vp(a))
}
function yp(a) {
  return a.o
}
function Lca(a, b) {
  a.A = b
}
function Mca(a, b) {
  a.B = b
}

function zp(a, b, c) {
  var d = c;
  if (cb(b) && 0 == b.indexOf("custom") || 5 == b) b = Wg(S(a.D)).replace(Ica, "compact"), d = k;
  if (db(b) && Ec(Hca, b)) c = new rp(b, d);
  else {
    var e = b;
    c = d || 1;
    cb(b) && !C(d) && (b = b.split(",", 2), 2 == b.length && (e = b[0], c = parseInt(b[1], 10)));
    b = Jca(e);
    c = C(b) ? new rp(b, c) : new rp(1, 1)
  }
  return Ap(a, c)
}

function Ap(a, b) {
  var c = fp(),
      d = Bp(),
      e = Kca(b, a.D, d),
      f = !b.equals(a.b);
  if (!f && !sp(b)) return p;
  var h = a.b.clone();
  a.b = b.clone();
  f && a.P("n");
  f && sp(b) && (Cp = h.clone());
  a.o && a.o.o() && !e.o() && Dp.M().Na();
  a.o && e.o() && !a.o.o() && (Dp.M(), Ep().innerHTML = t, Fp(p));
  if (3 == h.o && f || sp(h)) h = lp.M(), h.o && (h.o.Po(), h.o.JI()), h.b = n, h.Na();
  if (sp(b) || 3 == b.o && f) f = lp.M(), f.b || (f.b = new Gp(f, f.A, f.B, f.D, 0, f.C, "listview"));
  a.o = e;
  if (e = a.A) e = a.A, e = !! e.o && e.o.O();
  if (e) d = p;
  else {
    i: switch (a.b.o) {
    case 2:
      e = 3;
      break i;
    case 1:
      e = 2;
      break i;
    default:
      e =
      1
    }
    e != d.b || (1 == e || 2 == e) && a.b.b != Vl(d) ? (cm(d, e, a.b.b), d = !! a.A && !! a.A.o) : d = p
  }
  d || Hp();
  c.b("SetMode." + b.toString());
  return m
};

function Ip(a, b, c, d) {
  this.b = a;
  this.B = b;
  this.A = c;
  this.o = d
}
Ip.prototype.hb = function(a) {
  if (Oj(a, 64) || !a.hb()) return p;
  a = this.B.get(a.Aa());
  return !!a && 60 <= a.uc
};

function Xj(a, b) {
  return 1 < b.o || 1 == b.o && !Vn(b, a.o)
}
function Yj(a, b) {
  for (var c = p, d = Un(b), e = 0; e < d.length; e++) {
    var f = d[e],
        h;
    if (h = f != a.o) h = jg(a.A, f), h = !(!h || h.Mc());
    if (h) {
      if (2 != Vn(b, f).eb) return p;
      c = m
    }
  }
  return c
};

function Jp() {
  P.call(this);
  this.eb = 0
}
H(Jp, P);Xa(Jp);B = Jp.prototype;B.wc = n;B.zF = n;B.Xd = n;B.fo = n;B.ko = n;

function Kp(a, b, c, d) {
  Lp(a, b, F(Mp, c || id), d)
}
function Lp(a, b, c, d) {
  d = d || D;
  0 == a.eb || 1 == a.eb || 2 == a.eb ? (a.zF = b, a.fo = c, a.ko = d, a.eb = 3, a.P("q"), a.Xd ? a.Xd(E(a.DF, a), E(a.yF, a)) : a.DF()) : d()
}
B.DF = function() {
  Np(this);
  this.Xd = this.wc = n;
  this.fo && (this.wc = this.zF, this.eb = 4, this.P("o"), this.fo(E(this.HX, this), E(this.yF, this)))
};B.HX = function() {
  this.fo = this.ko = n;
  Op(this)
};

function Op(a) {
  var b = 3 == a.eb;
  a.eb = 2;
  b || a.P("p")
}
function Np(a) {
  var b = 4 == a.eb;
  a.eb = 1;
  b || a.P("r")
}
B.yF = function() {
  this.ko && (this.ko(), this.ko = n);
  this.fo = n;
  3 == this.eb ? Op(this) : (Np(this), this.wc = n)
};

function Mp(a, b, c) {
  a() ? b() : c()
};

function Pp(a, b, c, d, e) {
  this.A = a;
  this.D = b;
  this.C = b.Jb();
  this.o = c;
  this.b = d;
  this.B = e || 7;
  this.size = this.o * this.b
}
function Qp(a) {
  var b;
  if (!(b = a.F)) {
    b = a.D.cb();
    for (var c = a.b, d = a.B, e = [], f = 0, h = 0; h < a.o; h++) {
      for (var l = 0; l < c; l++) e[f++] = b, b = Zf(b);
      for (; l < d; l++) b = Zf(b)
    }
    b = a.F = e
  }
  return b
}
Pp.prototype.equals = function(a) {
  return this.A.equals(a.A) && this.D.equals(a.D) && this.o == a.o && this.b == a.b && this.B == a.B
};

function Rp(a) {
  return (a.o - 1) * a.B + a.b
}
Pp.prototype.Fb = function(a, b) {
  return a * this.b + b
};

function Sp() {}

function Tp(a) {
  this.o = a
}
H(Tp, Sp);Tp.prototype.b = function(a) {
  var b = this.o,
      c = Gg(a);
  c.Y = 1 - (C(k) ? NaN : 1);
  b = (c.va().Jb() - b + 7) % 7;
  c.Y -= b;
  return new Pp(a, c.va(), 6, 7)
};

function Dp() {
  P.call(this);
  this.b = R();
  this.D = new Eo(new Kj(this.b, Jl(), ig.M()));
  var a = yk(this.b);
  this.da = new oo(a, this.D, m);
  this.Ia = new oo(a, this.D, m, m, m);
  this.O = new fo(this.b, a, this.D);
  this.H = jo(this.O);
  this.o = new Xo(a, "wk", this.Ia, this.H, m);
  this.o.A = m;
  this.W = new yca(a, this.da);
  this.A = {};
  this.K = [];
  this.X = S(this.b);
  this.F = Yg(this.X, "CollapseAllday", p)
}
H(Dp, P);Xa(Dp);B = Dp.prototype;B.Ls = t;B.Rx = n;B.Ao = n;B.Ms = 0;B.Eo = p;B.Xf = n;

function Up(a) {
  a = xp(a.b);
  return a.da ? a.B.Ql : p
}

function Ep() {
  return T("gridcontainer")
}
function Vp(a) {
  return Wo(a.o)
}
function Nca(a, b) {
  var c = uk(a.b),
      d = new Wl(c, a.X),
      c = b || sk(c);
  d.set(c, c, c);
  a.C = d
}
function Bp() {
  return Dp.M().C
}

function Wp(a, b) {
  if (a.P("u")) {
    var c = fp(),
        d = a.C.focus.va(),
        e = a.C.first.va(),
        f = xp(a.b).B;
    Nd(a.b, 18) && Xp(a.b).Wf();
    var h = Ep().offsetHeight;
    cp(c, "refresh_resize");
    var l = f.Px,
        e = f.Qx == n ? e : Pg(e, f.Qx),
        q = Math.ceil(Vl(a.C) / 7),
        r = new Pp(d, e, q, l, l + f.QG),
        q = !a.Xf || !r.equals(a.Xf);
    a.Xf = r;
    var s = kk(e, Rp(a.Xf)),
        u;
    b ? u = [] : (r = Mj.M(), r = em(r, a.X), u = Yp.W(s, r), u.sort(a.D.Pj()));
    var x = n,
        r = $h(Jl()),
        z = yk(R()),
        A = p;
    if (f.Ql) f = S(a.b), x = a.O, A = f.Ed(), f = f.Nj(), Yn(jo(x), Um(A, s, f, z, Xm, Ym, x.K)), a.o.B = z, x = Uo(a.o, u, r, e, l, a.F), l = x.Ds, x = x.Hx, A = m;
    else {
      a.W.o = z;
      e = a.W;
      l = u;
      s = a.Xf;
      f = Ll();
      d = d.month;
      z = (z = T(ja)) ? z.className : t;
      z = sb(z, Aa) ? Bca : sb(z, za) ? Aca : zca;
      h = Math.max(1, Math.floor(((h - 20) / s.o + z.b - z.o) / z.A));
      z = [];
      z.push('<div class="mv-container"><table cellpadding=0 cellspacing=0 class="mv-daynames-table" id="mvDaynamesTable"><tr>');
      for (var G = 0; G < s.b; G++) {
        var M = s,
            N = G,
            M = dk(Qp(M)[0 * M.b + N]).Jb(),
            M = e.o.Ks(M);
        z.push('<th class="mv-dayname" title="', M, '">', M, "</th>")
      }
      z.push("</tr></table>");
      z.push('<div class="mv-event-container" id="mvEventContainer', t, '">');
      G = 100 / s.o;
      e.b.b = z;
      for (M = 0; M < s.o; M++) {
        var X, N = s,
            $ = M;
        X = dk(Qp(N)[$ * N.b + 0]);
        z.push('<div class=month-row style="top:', G * M, "%;");
        M < s.o - 1 ? z.push("height:", G + 1, '%">') : z.push('bottom:0">');
        var N = e.b,
            ca = X,
            $ = s.b,
            ua = f,
            pa = N.b;
        pa.push('<table cellpadding=0 cellspacing=0 class="st-bg-table"><tr>');
        for (var ab = m, Ra = $; Ra--; ca = Jg(ca)) pa.push('<td class="st-bg'), ab && (ab = p, pa.push(" st-bg-fc")), ca.equals(ua) && (0 == Ra && N.o.Zh() ? pa.push(" st-bg-td-last") : pa.push(" st-bg-today")), ca.equals(Jg(ua)) && Ra != $ - 1 && pa.push(" st-bg-next"), pa.push('">&nbsp;');
        pa.push(ea);
        po(e.b);
        var N = new lo(l, X, s.b, h),
            $ = e.b,
            ua = s.b,
            pa = f,
            ab = d,
            Ra = N.B,
            ca = E(e.o.Js, e.o),
            Gb = 0 == M,
            bb = $.b;
        bb.push("<tr>");
        for (var gg = m, Ua = Jg(pa), ng = Mg(pa, 7), qh = 0; qh < ua; qh++) {
          var rh = Mg(X, qh);
          bb.push('<td class="st-dtitle');
          Gb && bb.push(" st-dtitle-fr");
          gg && (gg = p, bb.push(" st-dtitle-fc"));
          pa.equals(rh) && (bb.push(" st-dtitle-today"), qh == ua - 1 && bb.push(" st-dtitle-lc"));
          Ua.equals(rh) && 0 != qh && bb.push(" st-dtitle-next");
          ng.equals(rh) && bb.push(" st-dtitle-down");
          rh.month != ab && bb.push(" st-dtitle-nonmonth");
          bb.push('">');
          ro($, Ra[qh]);
          bb.push('<span class="ca-cdp' + rh.cb() + '">', ca(rh), "</span>")
        }
        no(N, e.b);
        qo(e.b);
        z.push("</div>")
      }
      z.push("</div>");
      e.b.b = n;
      l = z.join(t)
    }
    e = "_" + Rp(a.Xf);
    cp(c, "refresh_computeContent_" + e);
    a.K = u;
    a.A = {};
    for (s = 0; s < u.length; s++) a.A[gb(u[s])] = u[s];
    if (l != a.Ls || x != a.Rx) {
      a.Ls = l;
      a.Rx = x;
      u = l;
      a.P("s");
      a.Eo = m;
      if (Up(a)) {
        T(Vp(a)) || (A = a.o, l = '<div id="' + A.D() + '"></div>', l = ic ? l + ('<div id="topcontainerBorder' + A.id + '" class="wk-border"></div><div id="' + Wo(A) + '" class="wbkt wk-scrolltimedevents"></div><div id="' + ("bottomcontainerBorder" + A.id) + '" class="wk-border"></div>') : l + ('<div id="' + Wo(A) + '" class="wk-scrolltimedevents"></div>'), Ep().innerHTML = l);
        T(a.o.D()).innerHTML = u;
        u = T(Vp(a));
        u.innerHTML = x;
        a.B && a.B.insert(m);
        x = a.H.X;
        A = u.firstChild;
        x.V = A;
        x.b = wi(A);
        Zp(a);
        if (q || !a.Ao || u.scrollTop == a.Ms) l = 20 > r.hour ? new Qg(r.year, r.month, r.Y, r.hour + 4, r.minute, r.second) : new Qg(r.year, r.month, r.Y, 23, 59, 59), q = u.clientHeight, A = [], r && (r = $f(r), A.push(r), A.push(r + 30, r - 30)), l && (r = $f(l), A.push(r), A.push(r + 30, r - 30)), (r = x.O) && A.push(r.start, r.end), A.push(60 * Go.start, 60 * Go.end, 1440, 0), q = Ho(x, q, A), a.Ms = q, u.scrollTop = a.Ms;
        a.Ao = x
      } else Ep().innerHTML = u, a.B && a.B.insert(p);
      a.P("t");
      cp(c, "refresh_insertDom_" + e)
    } else A && (c = a.H.X, q = T(Vp(a)).firstChild, c.V = q, c.b = wi(q)), a.P("v")
  }
}
function $p(a) {
  a.Ls = t
}
B.Yz = Qa(59);B.rt = Qa(60);B.Na = function() {
  $p(this);
  this.B && this.B.remove();
  this.A = {};
  this.K = [];
  this.Xf = n;
  this.P("s");
  this.Eo = p
};

function Zp(a) {
  if (a.Eo && Up(a)) {
    var b = T(Vp(a));
    if (b) {
      var c = Math.max(100, Ep().offsetHeight - T(a.o.D()).offsetHeight - 2) + "px";
      a.B && a.B.D(c);
      b.style.height = c;
      if (b = T(Yo(a.o))) a = vj(T(Vo(a.o))).height, ij(b, "height", a + "px")
    }
  }
};

function aq(a, b, c, d) {
  this.b = a;
  this.A = b;
  this.B = c || Number.MAX_VALUE;
  this.ja = d
}
H(aq, uc);B = aq.prototype;B.La = window;B.Qm = n;B.Jk = n;B.qq = n;B.dh = function(a) {
  this.Qm == n && (this.Qm = this.La.setInterval(E(this.xS, this), this.A / 2));
  this.Jk = ib();
  this.o = Array.prototype.slice.call(arguments, 0);
  this.qq == n && (this.qq = this.Jk)
};B.cancel = function() {
  this.Jk = this.o = n
};B.L = function() {
  this.Qm != n && (this.La.clearInterval(this.Qm), this.Qm = n);
  this.o = this.ja = this.b = n;
  aq.J.L.call(this)
};
B.xS = function() {
  if (this.Jk != n) {
    var a = ib();
    if (a >= this.Jk + this.A || a >= this.qq + this.B) this.b.apply(this.ja, this.o), this.Jk = n, this.qq = a
  }
};

function bq() {
  P.call(this);
  this.D = {};
  this.A = {};
  this.C = {};
  this.b = [];
  this.F = [];
  this.O = this.K = p;
  this.o = [];
  this.B = [];
  this.da = 0;
  this.X = {};
  this.H = n;
  this.Z = new aq(this.Ia, 1E3, 5E3, this)
}
H(bq, P);

function cq(a, b, c, d, e, f, h, l, q, r, s, u, x, z, A, G, M) {
  var N = Yp;
  "string" == typeof c && (c = mk(c));
  "string" == typeof d && (d = mk(d));
  var X = N.D[a];
  if (X) {
    var $ = X.Dc,
        ca = X.Ve,
        ua = X.Hf;
    X.update(a, b, c, d, e, f, h, l, q, r, s, u, x, z, A, G, M, k);
    if ($ !== X.Dc || ca !== X.Ve || ua !== X.Hf) dq(N, X, ca, ua), eq(N, X)
  } else X = new Rn(a, b, c, d, e, f, h, l, q, r, s, u, x, z, A, G, M, k);
  fq(N, X);
  return X
}

function fq(a, b) {
  var c = b.ei,
      d = b.getId(),
      e = a.D[d];
  if (e) {
    var f = e.Ve,
        h = e.Hf;
    e.Dc !== b.Dc || f !== b.Ve || h !== b.Hf ? (dq(a, e, f, h), eq(a, b)) : a.D[d] = b
  } else++a.da, eq(a, b), c && a.D[c] && gq(a, c);
  if (c) a.X[c] || (a.X[c] = {}), a.X[c][d] = m;
  else if (c = a.X[d]) {
    for (var l in c) gq(a, l);
    delete a.X[d]
  }
  a.D[d] = b;
  hq(a, d);
  a.P(iq)
}
function gq(a, b) {
  var c = a.D[b];
  c && (a.P(new jq(b)), dq(a, c, c.Ve, c.Hf), delete a.D[b], c.ei && delete a.X[c.ei][b], --a.da, a.P(iq));
  return c
}
bq.prototype.forEach = function(a) {
  for (var b in this.D) if (a(this.D[b]) === p) break
};

function hq(a, b) {
  a.H || (a.H = new kq);
  a.H.o.push(b);
  a.Z.dh()
}
bq.prototype.Ia = function() {
  this.H && (this.P(this.H), this.H = n)
};

function kq() {
  L.call(this, "w");
  this.o = []
}
H(kq, L);

function jq(a) {
  L.call(this, "x");
  this.Li = a
}
H(jq, L);
var iq = "y";

function lq(a) {
  L.call(this, "z");
  this.o = a
}
H(lq, L);
bq.prototype.W = function(a, b) {
  var c = k,
      d = n;
  b.b || (d = a.toString() + ":" + b.getKey(), c = this.A[d]);
  if (C(c)) return c;
  mq(this);
  for (var e = nq(this, a.start.cb()), c = a.start, f = a.end, c = f.hour || f.minute || f.second || c.Y === f.Y && c.month === f.month && c.year === f.year ? Jg(f) : f.va(), f = nq(this, c.cb()), c = [], h = {}; e < f; ++e) for (var l = oq(this, e), q = 0; q < l.length; ++q) {
    var r = l[q];
    h[r.getId()] || (h[r.getId()] = m, r.Nv(a) && gm(b, r) && c.push(r))
  }
  pq(this, d, c);
  return c
};

function qq(a, b, c, d, e) {
  var f = n,
      h = k;
  d.b || (f = b.toString() + " +" + c + ":" + d.getKey(), h = a.A[f]);
  if (C(h)) return h;
  mq(a);
  for (var h = b.cb(), l = nq(a, h), q = l < a.b.length && a.b[l].qe === h, h = [], r = {}; l < a.b.length; ++l) {
    for (var s = oq(a, l), u = p, x = 0; x < s.length; ++x) {
      var z = s[x];
      if (!e) {
        if (r[z.getId()]) continue;
        r[z.getId()] = m
      }
      var A;
      (A = !q) || (A = b, A = z.Za().ta() > A.ta());
      if (A && gm(d, z) && (u || (e && h.push(dk(s.qe)), u = m), h.push(z), 0 >= --c)) {
        l = a.b.length;
        break
      }
    }
    q = p
  }
  pq(a, f, h);
  return h
}

function rq(a, b, c) {
  var d = n,
      e;
  c.b || (d = b.toString() + " -46:" + c.getKey(), e = a.A[d]);
  if (C(e)) return e;
  mq(a);
  e = b.cb();
  var f = nq(a, e),
      h = 0 < f && e == Zf(a.b[f - 1].qe);
  e = [];
  for (var l = 46; 0 <= --f;) {
    for (var q = oq(a, f), r = p, s = q.length; 0 <= --s;) {
      var u = q[s];
      if ((!h || u.Fa().ta() < b.ta()) && gm(c, u) && (e.push(u), r = m, 0 >= --l)) {
        f = -1;
        break
      }
    }
    r && e.push(dk(q.qe));
    h = p
  }
  e.reverse();
  pq(a, d, e);
  return e
}

function nq(a, b) {
  var c = a.C[b];
  if (k !== c) return 0 > c ? ~c : c;
  for (var d = c = 0, e = a.b.length - 1, f = p; e >= d;) {
    var c = e + d >> 1,
        h = a.b[c].qe - b;
    if (0 === h) {
      f = m;
      break
    } else 0 > h ? d = c + 1 : e = c - 1
  }
  c < a.b.length && b > a.b[c].qe && (c += 1);
  a.C[b] = f ? c : ~c;
  return c
}
function mq(a) {
  a.K && a.b.sort(Oca);
  if (a.O || a.K) {
    a.C = {};
    for (var b = a.b.length; 0 <= --b;) a.C[a.b[b].qe] = b;
    a.O = p
  }
  a.K && (a.K = p)
}
function pq(a, b, c) {
  if (b) {
    if (!a.A.size || 10 < a.A.size) a.A = {}, a.A.size = 0;
    a.A[b] = c;
    ++a.A.size
  }
}
function oq(a, b) {
  var c = a.b[b];
  c.Ui && (c.sort(Pca), c.Ui = p);
  return c
}

function sq(a) {
  return 0 < a.o.length ? a.o[0] : n
}
function tq(a) {
  return 0 < a.o.length ? a.o[a.o.length - 1] : n
}
function dq(a, b, c, d) {
  var e = b.getId();
  delete a.F[e];
  var f = a.o;
  if (f.length) {
    b = Oj(b, 32768) ? [c, d] : uq(f, [c, d]);
    c = p;
    d = 0;
    for (f = b.length; d < f;) for (var h = b[d++], l = b[d++]; h < l; h = Zf(h)) {
      var q = a.C[h];
      if (q !== k && 0 <= q) for (var q = a.b[q], r = 0; r < q.length; ++r) if (q[r].getId() === e) {
        q.splice(r, 1);
        c = m;
        break
      }
    }
    c && (a.A = {})
  }
}

function eq(a, b) {
  var c = a.o;
  if (c.length) {
    var d = b.Ve,
        e = b.Hf,
        f = [d, e],
        c = Oj(b, 32768) ? f : uq(c, f);
    if (2 !== c.length || d < c[0] || e > c[c.length - 1]) a.F[b.getId()] = m;
    for (d = 0; d < c.length;) e = c[d++], f = c[d++], vq(a, b, e, f);
    a.A = {}
  } else a.F[b.getId()] = m
}
function vq(a, b, c, d) {
  for (; c < d; c = Zf(c)) {
    var e = a.C[c];
    e !== k && 0 <= e ? e = a.b[e] : (e = [], e.qe = c, a.K = a.K || !! a.b.length && e.qe < a.b[a.b.length - 1].qe, a.O = m, a.C[c] = a.b.length, a.b.push(e));
    e.push(b);
    e.Ui = 1 < e.length
  }
}

function wq(a) {
  for (var b = Yp, c = xq(yq(a), b.o), d = b.o, e = 0, f = 0, h = c.length, l = d.length, q = []; e < h && f < l;) {
    var r = c[e],
        s = d[f];
    if (r <= s) for (s = c[++e], ++e; f < l && d[f + 1] <= s;) f += 2;
    else
    for (r = s, s = d[++f], ++f; e < h && c[e + 1] <= s;) e += 2;
    zq(q, r, s)
  }
  if (e < h) {
    do zq(q, c[e++], c[e++]);
    while (e < h)
  } else
  for (; f < l;) zq(q, d[f++], d[f++]);
  var e = [],
      f = [],
      c = xq(c, d),
      u;
  for (u in b.F) {
    d = b.D[u];
    f[0] = d.Ve;
    f[1] = d.Hf;
    Aq(c, f, e);
    for (h = 0; h < e.length; h += 2) vq(b, d, e[h], e[h + 1]);
    e = xq(f, q);
    e.length || delete b.F[u]
  }
  b.o = q;
  b.B = Qca(b.B, a);
  b.P(new lq(b.B))
}
var Yp = new bq;

function Bq(a, b, c, d, e, f, h, l, q, r, s, u, x, z, A, G, M, N) {
  return cq(a, b, c, d, e, f, h, l, q, r, s, u, x, z, A, G, N)
}
function Cq(a) {
  return gq(Yp, a)
}
function Oca(a, b) {
  return a.qe - b.qe
}
function Pca(a, b) {
  var c = a.Fa().ta() - b.Fa().ta();
  if (c) return c;
  if (a.Yf() != b.Yf()) return a.Yf() ? -1 : 1;
  if (c = a.Za().ta() - b.Za().ta()) return c;
  var c = a.getId(),
      d = b.getId();
  return c == d ? 0 : c < d ? -1 : 1
}
function Dq() {
  var a = yq(Yp.B);
  return a.length ? [a[0], a[a.length - 1]] : k
}
function Eq() {
  return Fq(Yp.B)
};
var Gq = {
  dasher: [xa, Ca, Fa, Ba],
  detailssettings: [xa, Ca, Fa, Ba],
  eventform: [xa, Ca, Fa],
  extras: [xa],
  focuswidget: [xa, Ca],
  gadget: [xa],
  offline: [xa, Ca],
  search: [xa, Ca, Fa, Ba],
  tdl: [xa, Ca],
  ww: [xa, Ca, Fa, Ba]
};

function Hq(a, b, c) {
  P.call(this);
  this.C = a;
  this.A = {};
  this.o = [];
  this.b = n;
  this.X = E(this.H, this);
  this.da = E(this.K, this);
  this.B = cb(b) ? nb(b, "//") ? window.location.protocol + b : b : t;
  this.D = cb(c) ? c : "__en.js"
}
H(Hq, P);

function Iq(a) {
  this.id = a;
  this.A = []
}
Iq.prototype.b = 0;Iq.prototype.o = n;
var Jq = {};

function Kq(a) {
  if (!a.b) {
    for (var b, c = p; 0 < a.o.length;) {
      var c = a.o.shift(),
          d = c.rq,
          c = c.yA,
          e = Lq(a, d);
      if (1 == e.b) c && (a.b = Mq(d, m), Nq(a, d), a.b = n);
      else if (0 == e.b) {
        b = d;
        break
      }
    }
    b ? (d = a.B + b + a.D, a.b = Mq(b, c), a.F.load(d, a.X, a.da)) : a.P("B")
  }
}
Hq.prototype.H = function(a) {
  var b = this.b.rq,
      c = this.b.yA,
      d = Lq(this, b);
  d.o = a;
  c ? Nq(this, b) : d.b = 1;
  this.b = n;
  Kq(this)
};Hq.prototype.K = function() {
  this.P(new Oq(this.b.rq));
  this.b = n;
  Kq(this)
};

function Nq(a, b) {
  var c = Lq(a, b),
      d = m;
  try {
    var e = c.o + ("\n//@ sourceURL=" + (a.B + b + a.D) + "\n");
    if (Va.execScript) Va.execScript(e, "JavaScript");
    else if (Va.eval) if (jb == n && (Va.eval("var _et_ = 1;"), "undefined" != typeof Va._et_ ? (delete Va._et_, jb = m) : jb = p), jb) Va.eval(e);
    else {
      var f = Va.document,
          h = f.createElement("script");
      h.type = "text/javascript";
      h.defer = p;
      h.appendChild(f.createTextNode(e));
      f.body.appendChild(h);
      f.body.removeChild(h)
    } else g(Error("goog.globalEval not available"))
  } catch (l) {
    d = p, a.P(new Oq(b)), df(38)
  }
  c.b =
  2;
  if (d) {
    try {
      c.B && (c.B(a.C), c.B = D)
    } catch (q) {
      df(47)
    }
    for (; 0 < c.A.length;) {
      d = c.A.shift();
      try {
        d.call(n)
      } catch (r) {
        df(39)
      }
    }
  }
  c.A = [];
  c.o = n
}
function Mq(a, b) {
  return {
    rq: a,
    yA: b
  }
}
function Lq(a, b) {
  return a.A[b] || (a.A[b] = new Iq(b))
}
function Md(a, b, c) {
  switch (Lq(a, b).b) {
  case 0:
  case 1:
    0 == a.o.length && a.P("A");
    for (var d = Jq[b] || [], e = 0, f = d.length; e < f; ++e) 2 != Lq(a, d[e]).b && a.o.push(Mq(d[e], m));
    a.o.push(Mq(b, m));
    c && Lq(a, b).A.push(c);
    Kq(a);
    break;
  case 2:
    c && c.call(n)
  }
}
function Pq(a, b) {
  var c = Lq(a, b);
  c.b = 1;
  c.o = "void(0)"
}

function Oq(a) {
  L.call(this, "C");
  this.rq = a
}
H(Oq, L);

function Qq(a) {
  this.o = a
}
function Rq(a) {
  return Jd(a, 13)
}
Qq.prototype.b = function(a, b) {
  Md(this.o, a, b)
};Qq.prototype.A = function(a) {
  var b = this.o;
  0 == b.o.length && b.P("A");
  b.o.push(Mq(a, p));
  Kq(b)
};
for (var Sq in Gq) Jq[Sq] = Gq[Sq];
var Tq = new
function() {
  this.b = this.o = n
};

function W(a) {
  return document.getElementById(a)
};
var Uq = "Sun Mon Tue Wed Thu Fri Sat".split(" ");

function Vq(a) {
  return Nd(a, 812) ? Jd(a, 812) : n
};

function Wq(a) {
  this.B = a;
  this.A = new P;
  this.b = {};
  this.o = {}
}
function Xq(a, b, c, d) {
  a.o[b] = c;
  d && (a.b[b] = d)
}
function Ef(a, b) {
  if (b) {
    cb(b[0]) && (b = [b]);
    for (var c = 0; c < b.length; ++c) {
      var d = b[c],
          e = d[0],
          f = d.slice(1);
      Yq(a, e, f) || (d = a, d.C || Dd(Ld(d.B, 808), E(d.D, d, e, f)))
    }
    a.A.P("D")
  }
}
function Yq(a, b, c) {
  var d = a.o[b];
  !d && nb(b, "_") && eb(Wa(b)) && (d = Wa(b), ep("fnDispatch" + encodeURIComponent(b.substr(0, 30))));
  if (d) {
    (a = a.b[b]) && a(c);
    try {
      return d.apply(n, c), m
    } catch (e) {}
  }
  return p
}
Wq.prototype.D = function(a, b, c) {
  c.init(this);
  this.C = m;
  Yq(this, a, b)
};

function Zq(a, b) {
  Dd(Ld(a, b), function(a) {
    a.init()
  })
};

function $q() {
  return typeof gbar == Ha
}
function ar() {
  return !!($q() && gbar.sb && gbar.sb())
};
var br, cr, dr = p,
    er = p;

function Rca(a) {
  a.A(xa);
  window.setTimeout(E(a.A, a, Ba), 6E3);
  window.setTimeout(E(a.A, a, ya), 3E4)
};

function fr(a) {
  this.b = {};
  if (a) for (var b = 0; b < a.length; b++) this.b[gr(a[b])] = n;
  for (var c in Object.prototype);
}
var Sca = {};

function gr(a) {
  return a in Sca || 32 == String(a).charCodeAt(0) ? " " + a : a
}
function hr(a) {
  return 32 == a.charCodeAt(0) ? a.substr(1) : a
}
B = fr.prototype;B.add = function(a) {
  this.b[gr(a)] = n
};B.clear = function() {
  this.b = {}
};B.clone = function() {
  var a = new fr,
      b;
  for (b in this.b) a.b[b] = n;
  return a
};B.contains = function(a) {
  return gr(a) in this.b
};B.equals = function(a) {
  return ir(this, a) && ir(a, this)
};
B.forEach = function(a, b) {
  for (var c in this.b) a.call(b, hr(c), k, this)
};B.mb = Object.keys ?
function() {
  return Object.keys(this.b).length
} : function() {
  var a = 0,
      b;
  for (b in this.b) a++;
  return a
};B.Wi = Qa(33);B.Hb = Object.keys ?
function() {
  return Object.keys(this.b).map(hr, this)
} : function() {
  var a = [],
      b;
  for (b in this.b) a.push(hr(b));
  return a
};B.isEmpty = function() {
  for (var a in this.b) return p;
  return m
};

function ir(a, b) {
  for (var c in a.b) if (!(c in b.b)) return p;
  return m
}
B.remove = function(a) {
  a = gr(a);
  return a in this.b ? (delete this.b[a], m) : p
};B.Rc = function() {
  return ce(this.Hb())
};

function jr(a, b, c) {
  this.o = a;
  this.A = b;
  this.Ii = new fr;
  this.b = c
}
jr.prototype.isEnabled = function() {
  var a = this.A.wc,
      b = "g" == a,
      c = p;
  this.b.isEnabled(41) && (c = "f" == a);
  return this.Ii.isEmpty() && (b || c) && Yg(this.o, "useKeyboardShortcuts", "true")
};

function kr() {
  this.b = Ka
};

function lr(a) {
  P.call(this);
  this.B = a;
  this.b = {};
  this.o = {};
  this.A = new mr
}
H(lr, P);

function Vj(a) {
  return Jd(a, 16)
}
function nr(a, b, c) {
  var d = a.b[b];
  if (!d) return [];
  c = c ? 20 : 10;
  var e = [],
      f;
  for (f in d) {
    var h = d[f];
    h && h.Aa() == b && 1 == h.getType() && h.nn == c && (2 != h.wb() || or(a)) && e.push(h)
  }
  return e
}
lr.prototype.Ba = Qa(9);lr.prototype.reset = Qa(52);

function or(a) {
  return Yg(S(a.B), "smsVerifiedFlag", "false")
}

function Uj(a, b) {
  var c = b.F;
  if (c) return !!c.length;
  var c = b.Aa(),
      d = b.Db() && Sd(9);
  a.A.has(c, d) || a.A.set(c, d, 0 < nr(a, c, d).length);
  return !!a.A.get(c, d)
}
function mr() {
  this.b = {}
}
B = mr.prototype;B.clear = function(a) {
  delete this.b[a]
};B.reset = Qa(51);B.get = function(a, b) {
  return this.b[a] ? this.b[a][b] : k
};B.has = function(a, b) {
  return C(this.b[a]) && C(this.b[a][b])
};B.set = function(a, b, c) {
  this.b[a] = this.b[a] || {};
  this.b[a][b] = c
};

function pr(a, b, c) {
  this.A = [];
  this.o = b || Tca;
  this.B = c || "gcal$func$";
  this.C = a
}
H(pr, uc);
var Tca = Va.gcal$func$ = {},
    Uca = 0,
    qr = new pr;pr.prototype.L = function() {
  for (var a = 0, b = this.A.length; a < b; ++a) delete this.o[this.A[a]];
  pr.J.L.call(this)
};pr.prototype.b = function(a, b) {
  var c = b || this.C;
  c && (a = E(a, c));
  c = Uca++;
  this.o[c] = a;
  this.A.push(c);
  return this.B + "[" + c + "]"
};pr.prototype.D = function(a) {
  delete this.o[a.substring(this.B.length + 1, a.length - 1)]
};
var rr = E(qr.b, qr);E(qr.D, qr);

function sr(a, b, c, d) {
  this.o = a;
  this.A = b;
  this.b = c;
  this.B = d
}
sr.prototype.register = function(a) {
  Od(a, 26, this)
};

function tr(a) {
  this.o = 0;
  this.b = [];
  this.A = a
}
function ur(a, b) {
  a.b = b;
  if (0 < a.b.length) {
    a.o = vr(a, a.o);
    for (var c = 0; c < a.b.length; c++) wr(a, a.b[c], c == a.o)
  }
}
B = tr.prototype;B.wg = Qa(62);B.rg = Qa(64);

function xr(a, b) {
  0 != a.b.length && (b = vr(a, b), a.o != b && 0 <= a.o && a.o < a.b.length && wr(a, a.b[a.o], p), a.o == b && Wi(a.b[b]) || wr(a, a.b[b], m), a.o = b)
}
function wr(a, b, c) {
  a.A && kn(b, a.A, c);
  Xi(b, c)
}
function yr(a, b, c) {
  0 != a.b.length && (xr(a, b), c || a.b[a.o].focus())
}
B.focus = function() {
  yr(this, this.o)
};B.blur = Qa(65);
B.hasFocus = function() {
  var a = zr(this);
  return !!a && a == document.activeElement
};

function vr(a, b) {
  b >= a.b.length && (b = a.b.length - 1);
  0 > b && (b = 0);
  return b
}
function zr(a) {
  return 0 <= a.o && a.o < a.b.length ? a.b[a.o] : n
};

function Ar(a) {
  this.o = Infinity;
  a.innerHTML = "<div class=calendars><div></div></div><div class=calendars-s-t></div><div class=calendars-s-b></div>";
  this.b = a.firstChild;
  this.B = this.b.firstChild;
  this.C = this.b.nextSibling;
  this.F = this.C.nextSibling;
  var b = new Q(this);
  b.I(a, ["mouseover", "mouseout"], this.K);
  b.I(this.b, "scroll", this.H)
}
Ar.prototype.A = 0;Ar.prototype.K = function(a) {
  this.X = "mouseover" == a.type;
  Br(this)
};Ar.prototype.H = function() {
  Cr(this)
};

function Dr(a) {
  a.A = a.B.offsetHeight;
  var b = Math.max(a.o, 40),
      c = a.b.style;
  a.D = a.A > b;
  c.height = a.D ? b + "px" : t;
  Cr(a);
  Br(a)
}
function Cr(a) {
  var b = a.b.scrollTop,
      c = Zd(b / 20, 0, 1);
  wj(a.C, c);
  b = Zd((a.A - a.o - b) / 20, 0, 1);
  wj(a.F, b)
}
function Br(a) {
  kn(a.b, "calendars-hvr", a.D && a.X)
}
function Er(a, b) {
  a.o != b && (a.o = b, a.b.scrollTop = 0, Dr(a))
};

function Fr(a) {
  this.A = a;
  this.F = new si(F(Gr, p), 3E3);
  this.C = new si(E(this.Ka, this))
}
function Gr(a) {
  var b = T("mothertable");
  b && (Ej(b, "busy", a), Ej(b, "hidden", a))
}
function Vca(a) {
  var b = new Fr(T("ntowner"));
  Od(a, 19, b)
}
function Hr(a, b) {
  var c = Ir(a);
  return E(c.b, c, b)
}
Fr.prototype.aa = function() {
  this.A.innerHTML = t;
  delete this.A;
  delete this.B;
  delete this.D
};
Fr.prototype.b = function(a, b, c) {
  Jr(this);
  Gr(m);
  this.F.start();
  this.A.innerHTML = t;
  this.A.innerHTML = '<div id="nt1"><table class="mbox" cellpadding="0" cellspacing="0" role="presentation"><tr><td><div id="nt2" class="mbox-cont" role="alert" aria-live="assertive" aria-atomic="true" aria-relevant="all"></div></td></tr></table></div>';
  T("nt2").innerHTML = a;
  this.D = b;
  this.C.stop();
  this.C.start(c || 3E4)
};Fr.prototype.o = function(a, b, c, d) {
  Za(a) && (a = a.join("<br>"));
  this.b(a, b, d);
  this.B = c
};
Fr.prototype.Ka = function(a) {
  a && a != this.D || (Jr(this), this.A.innerHTML = t)
};

function Jr(a) {
  a.B && (a.B(), a.B = k)
}
function Ir(a) {
  return Jd(a, 19)
};

function Wca(a) {
  this.b = a
}
var Kr;

function Lr() {
  P.call(this)
}
H(Lr, P);Lr.prototype.P = function(a) {
  return Lr.J.P.call(this, a)
};

function Mr(a) {
  Jd(a, 21).P("F")
};

function Nr(a, b, c) {
  this.B = a;
  this.b = b;
  this.o = S(a);
  this.H = c;
  this.A = []
}
function Or(a) {
  return Jd(a, 14)
}
function Pr(a, b, c, d) {
  if (a.b.getItem(c)) d != a.b.getItem(c).type && (a = a.b.getItem(c), a.type != d && (a.type = d));
  else {
    var e = Yg(a.o, c + "/hidden", p),
        f = e || Yg(a.o, c + da, p);
    a.A.push(new Xca(b, c, d, e, f));
    a.F || (a.F = window.setTimeout(E(a.X, a), 0))
  }
}
Nr.prototype.X = function() {
  this.F = n;
  Qr(this, E(this.H.b, this))
};

function Qr(a, b, c) {
  for (var d = [], e = [], f = Ao(), h = 0; h < a.A.length; ++h) {
    var l = a.A[h],
        q = l.id;
    a.b.getItem(q) || (l.b || (e.push(q), (!l.o || f && Rr(a.b, q)) && d.push(q)), Sr(a.b, l.name, q, l.type, !! l.o, !! l.b))
  }
  c && (e = c(e));
  a.o.jb();
  window.setTimeout(E(a.D, a, e, k), 0);
  b(d);
  a.A = []
}
Nr.prototype.D = function(a, b) {
  var c = b || E(this.K, this),
      d = Hr(this.B, "Oops, we couldn't load details for your calendar, please try again in a few minutes");
  this.C || (this.C = new Wca(this.B));
  var e = this.C,
      f;
  if (0 == a.length) f = n;
  else {
    f = Sh(e.b);
    for (var h = [], l = p, q = 0; q < a.length; ++q) f == a[q] && (l = m), h.push("dtid", a[q]);
    Kr || (Kr = m, h.push("init", "true"), l || h.push("dtid", f));
    f = h
  }
  f && Cf(Af(e.b), "caldetails", f, 4, c, d)
};Nr.prototype.K = function() {
  var a = this.B;
  window.setTimeout(function() {
    Mr(a)
  }, 0)
};

function Xca(a, b, c, d, e) {
  this.name = a;
  this.id = b;
  this.type = c;
  this.b = d;
  this.o = e
};

function Mj() {
  Lh.call(this);
  this.B = p
}
H(Mj, Lh);Xa(Mj);B = Mj.prototype;B.JA = 0;

function Lj(a, b) {
  return a.getItem(b)
}
B.forEach = function(a, b) {
  this.Eb();
  try {
    for (var c = dh(this), d = 0, e = c.length; d < e; ++d) {
      var f = c[d];
      if ((b || !f.o) && a(f) === p) break
    }
  } finally {
    this.xb()
  }
};B.fv = Qa(66);

function fm(a) {
  var b = [];
  a.forEach(function(a) {
    a.Ue && !a.b && b.push(a.getId())
  }, m);
  return b
}

function Tr(a, b) {
  var c = a.getItem(b);
  c.b = !c.b;
  a.b.set(b + "/hidden", c.b ? "true" : "false");
  c.b || a.b.set(b + da, "false");
  if ("cCN3ZWF0aGVyQGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ" == b) if (c.b) {
    var d = a.b.getString("weather", t);
    a.b.set("weather", t);
    a.b.set(La, d)
  } else d = a.b.getString(La, t), d = Ur(d), a.b.set("weather", d), a.b.set(La, t);
  Vr(a, !c.b, b);
  c.b && (c = b + "/availOffline", Yg(a.b, c, "false") && a.b.set(c, "false"), Wr(b));
  a.b.jb();
  a.Id()
}
B.Ke = function(a, b) {
  a && this.contains(a) && b != this.getItem(a).Ue && (Xr(this, a) ? (b && a && this.contains(a) && this.getItem(a).b && Tr(this, a), this.b.set(a + da, b ? "false" : "true"), this.b.jb(), Vr(this, b, a)) : (b && a && this.contains(a) && this.getItem(a).b && Tr(this, a), Vr(this, p, a)))
};

function Yr(a, b, c) {
  for (var d = p, e = 0; e < b.length; ++e) {
    var f = a.getItem(b[e]);
    f && f.A != c && (f.A = c, d = m)
  }
  d && a.Id()
}

function Vr(a, b, c) {
  var d = a.getItem(c);
  d.Ue = !! b;
  if (!d.o) if (Zr(c)) d.Ue && $r(c);
  else {
    var e = fp(),
        f;
    (d = Vq(a.o)) && (f = d.o(d.b().sM));
    Yca([c], function() {
      e.b("sec_cal_load_server");
      f && f.A()
    }, function() {
      e.b("sec_cal_load_total");
      f && (f.b(), f.report())
    });
    ci.M().get(c) || Or(a.o).D([c])
  }
  window.clearTimeout(a.JA);
  a.JA = window.setTimeout(E(a.Id, a), 1E3);
  a.P(new as(c, b))
}
B.Af = function(a) {
  cb(a) && (a = this.getItem(a));
  return !!a && a.Ue && !a.b
};

function bs(a) {
  return E(a.rY, a)
}
B.rY = function(a, b) {
  if (a.getId() == b.getId()) return 0;
  var c = Sh(this.o);
  if (a.getId() == c) return -1;
  if (b.getId() == c) return 1;
  c = b.type - a.type;
  return 0 == c || 2 != a.type && 2 != b.type ? !Td(this.o).isEnabled(104) || 0 == c && 2 == a.type || a.Ue == b.Ue ? cs(Mj.M(), a).toLowerCase().localeCompare(cs(Mj.M(), b).toLowerCase()) : a.Ue ? -1 : 1 : c
};

function cs(a, b) {
  return ds(a, b.getId(), m)
}
function ds(a, b, c) {
  a = a.getItem(b).getTitle();
  return c ? a : I(a)
}
B.Id = function() {
  this.Ow() ? this.B = m : (this.B = p, this.P(new es))
};
B.xb = function() {
  Mj.J.xb.call(this);
  this.B && !this.Ow() && this.Id()
};

function Sr(a, b, c, d, e, f, h) {
  var l = Xg(a.b, c + "/color", 0);
  l && (l | 0) == l && 1 <= l && 66 >= l || (l = yh(Zca(a), [Qh(Ph(a.o))]), a.b.set(c + "/color", l.toString()));
  var q;
  var r = a.b,
      s = Td(a.o).isEnabled(25),
      l = Xg(r, c + "/color", 0),
      r = r.getString(c + "/customColor", k);
  s && (r && r.split ? (s = r.split(","), s = 3 != s.length || "0" != s[0] && "1" != s[0] || !s[1] || 7 != s[1].length || "#" != s[1].charAt(0) || "#000000" != s[2] && "#FFFFFF" != s[2].toUpperCase() ? p : m) : s = p);
  if (s) {
    var r = r.split(","),
        s = 1 == r[0] ? m : p,
        u = r[2],
        x = r[1];
    s ? q = r[1] : q = nh(l, 0);
    q = new Ah(l, s, q, u, x)
  } else q =
  Bh(l);
  b = new fs(b, c, q, d, !e, f, h || p);
  a.add(b, f, b.color)
}
function Zca(a) {
  var b = {};
  a.forEach(function(a) {
    if (!a.b) {
      a = a.color.Fb();
      var d = String(a);
      d in b || (b[d] = 0);
      b[a]++
    }
  });
  return b
}
function fs(a, b, c, d, e, f, h) {
  $g.call(this, b);
  this.Cb = a;
  this.color = c;
  this.type = d;
  this.Ue = e;
  this.b = f;
  this.A = p;
  this.o = h
}
H(fs, $g);fs.prototype.hb = function() {
  var a = ci.M().get(this.getId());
  return !this.o && !! a && 60 <= a.uc
};fs.prototype.getTitle = function() {
  var a = ci.M().get(this.getId());
  return a && a.Pb ? a.Pb : this.Cb
};
fs.prototype.setTitle = Oa("Cb");fs.prototype.Ur = Qa(67);

function es() {
  L.call(this, va)
}
H(es, L);

function as(a, b) {
  L.call(this, "clm.itemstate");
  this.id = a;
  this.o = b
}
H(as, L);
var Zj = {};

function Rr(a, b) {
  return Yg(a.b, b + "/availOffline", p)
}
function Xr(a, b) {
  var c = zo(a.o);
  return c || !c && Rr(a, b)
};

function gs(a, b, c, d, e) {
  this.o = a;
  this.F = c;
  this.B = new Ar(T(this.F));
  this.b = Ei("div", {
    "class": "calList"
  });
  this.B.B.appendChild(this.b);
  Ej(this.b, "multiselectable", m);
  Dj(this.b, "listbox");
  Ej(this.b, "labelledby", d);
  this.D = e;
  this.A = b;
  O(this.o, va, this.C, p, this);
  O(yo(this.A), "m", this.C, p, this);
  this.nb = new tr
}
H(gs, uc);
var hs = new V('<div class="calListChip" id="${labelId}" title="${name}">${chipInternals}</div><div class="calListImg${selectedSuffix} calListImg ${extraClasses}" id="${popupId}" tabindex="-1"></div>'),
    is = new V('<div style="cursor:${cursor};" class="calListLabelOuter"><div class="calListLabel${selectedSuffix}"><div class="calListSquare goog-inline-block" style="background:${bgcolor};border-color:${bgcolor}"></div><span style="${bidiStyles}">${name}</span></div></div>');
gs.prototype.L = function() {
  this.b.innerHTML = t;
  gs.J.L.call(this)
};gs.prototype.wg = Qa(61);gs.prototype.rg = Qa(63);
gs.prototype.C = function() {
  var a = [];
  this.o.forEach(function(b) {
    b.b || a.push(b)
  }, m);
  a.sort(bs(Mj.M()));
  var b = this.nb.hasFocus(),
      c = Td(this.A).isEnabled(7),
      d = -1;
  this.b.innerHTML = t;
  for (var e = [], f = 0; f < a.length; ++f) {
    Zj[a[f].getId()] = f;
    var h = a[f];
    if (js(this, h.getId())) {
      d++;
      var l = cs(this.o, h),
          q = Xr(this.o, h.getId()) && this.o.Af(h),
          h = $ca(this, h, om(l)),
          l = Ei("div", "calListRow");
      e.push(l);
      this.b.appendChild(l);
      l.innerHTML = h;
      Ej(l, "selected", q);
      Dj(l, "option")
    }
  }
  Dr(this.B);
  Nd(this.A, 18) && Xp(this.A).ip();
  ur(this.nb, e);
  c && b && this.nb.focus()
};

function js(a, b) {
  if (b == Sh(a.A)) return a.D;
  var c = a.o.getItem(b);
  return a.D == (2 == c.type)
}

function $ca(a, b, c) {
  var d = b.getId(),
      e = "label-" + d,
      f = b.A,
      h = Xr(a.o, d),
      l = h && a.o.Af(b),
      q = b.getId();
  ci.M().get(q) || Sh(a.A);
  hs.put("chipInternals", ada(c, l ? b.color.b.b : t, l, h));
  hs.put("selectedSuffix", t);
  hs.put("labelId", e);
  hs.put("name", f ? "There was a problem refreshing this calendar." : c);
  hs.put("popupId", "popup-" + d);
  a = zo(a.A);
  hs.put("extraClasses", a ? f ? "calListImg-stale" : t : "ui-disabled");
  return hs.toString()
}

function ada(a, b, c, d) {
  is.put("name", a);
  is.put("bgcolor", b);
  is.put("bidiStyles", mm(hg(a)));
  is.put("selectedSuffix", c ? "-sel" : t);
  is.put("cursor", d ? "pointer" : "default");
  return is.toString()
};

function ks(a, b) {
  this.o = a;
  this.b = b
}
ks.prototype.Ld = Qa(68);ks.prototype.getDate = Qa(69);ks.prototype.toString = function() {
  return this.o + "-" + this.b.cb()
};

function lp() {}
Xa(lp);lp.prototype.b = n;

function bda(a, b, c, d, e, f) {
  a.A = b;
  a.F = c;
  a.C = d;
  a.D = e;
  a.B = f
}
lp.prototype.Na = function() {
  U(T(Ga), p);
  T("gridcontainer").className = t
};

function ls(a) {
  var b = T("gridcontainer");
  b.innerHTML = "<div id=lv_" + a.b.B + "></div>";
  b.className = "lv-gridcontainer";
  U(T(Ga), m)
}
function cda(a) {
  Rq(a.B).b(Ja, E(function() {
    this.o && this.o.Po();
    T(Ga).innerHTML = dda();
    ls(this);
    Fp(m);
    Xp(R()).Wf();
    this.b.render();
    this.o && (this.o.yz(), this.o.xz(), this.o.zz());
    ms ? eda() : 0 == ns() && fda()
  }, a))
}

function os(a, b) {
  if (0 < a.A.o.length) {
    var c = tq(a.A),
        d = dk(sq(a.A)).Ea(),
        c = Gg(dk(c));
    c.Y += 61;
    c = c.Ea();
    ps(d, c, b ? k : 1)
  }
}
function qs(a, b) {
  if (0 < a.A.o.length) {
    var c = tq(a.A),
        d = dk(c).Ea(),
        c = Gg(dk(c));
    c.Y -= 61;
    c = c.Ea();
    ps(c, d, b ? k : -1)
  }
}
function np(a) {
  a.b && a.o && a.o.kC()
};

function Gp(a, b, c, d, e, f, h) {
  this.Z = a;
  this.C = b;
  this.b = c;
  this.K = d;
  this.F = f;
  this.B = h;
  this.H = [];
  this.D = [];
  this.X = [];
  this.o = 0;
  this.A = [];
  this.da = []
}
Gp.prototype.W = n;Gp.prototype.yb = 0;

function rs(a, b) {
  for (var c = [], d = [], e = 0; e < b.length; ++e) {
    var f = b[e];
    f instanceof Sf ? d.push(f) : c.push({
      sd: f,
      Yl: d.length
    })
  }
  a.H = d;
  a.D = c
}
Gp.prototype.render = function(a) {
  if (T("lv_" + this.B) && 0 < this.C.o.length) {
    var b = T("lv_" + this.B);
    this.A = [];
    this.da = [];
    var c = T("gridcontainer").offsetHeight / 30,
        d = ['<table class="printFullHeight listv" cellspacing=0>'],
        e = this.H,
        f = this.D,
        h = xp(this.b).K();
    if (this.yb & 1 && h) {
      var l = sq(this.C),
          l = yk(this.b).Ec(dk(l));
      ss(d, "<i>Showing events after " + l + '. <span tabindex=0 role=button class="lk lvl-e">Look for earlier events</span></i>')
    }
    var q = p,
        r = 0;
    sk(uk(this.b));
    for (var s = l = n, u = 0; u < f.length; ++u) {
      var q = !q,
          x = f[u],
          z = x.sd,
          A = x.Yl,
          x = u + 1 < f.length ? f[u + 1].Yl : e.length;
      if (!(this.o > x)) {
        this.o > A && (A = this.o);
        if (x > A && z) {
          l === n && (l = z);
          this.F.b.getItem(e[A].Aa());
          var s = z,
              G = d,
              M = x - A,
              N = f[0].sd,
              X = f[f.length - 1].sd;
          if (s) {
            var $ = q ? " lv-alt" : t,
                ca = 1 == M ? " lv-lastevent" : t,
                ua = sk(uk(this.b)).equals(s) ? " lv-today" : t,
                pa = "lvd-" + s.toString();
            this.A.push(pa);
            G.push('<tr class="lv-row lv-newdate lv-firstevent ', ua, $, ca, '"', '><th class="lv-datecell" rowspan="', M, '"><span tabindex=0 role=link class="lk lv-datelink ', pa, " ", "lv-navigable", '">', Uq[s.Jb()], " ", yk(this.b).Xs(s, N, X), "</span></th>")
          }
          s = z
        }
        for (N = m; A < x; A++, r++) {
          var M = e[A],
              $ = z,
              G = d,
              ua = N,
              ab = 1 == x - A,
              Ra = q,
              ca = this.F.b.getItem(M.Aa()).color,
              pa = M.Db(),
              Gb = p,
              N = new ks(M.getId(), $),
              X = "lvr-" + N.toString();
          this.A.push(X);
          M.oc() && this.da.push(N.toString());
          pa || !M.di || $.equals(M.Fa().va()) || ($.equals(M.Za().va()) ? Gb = m : pa = m);
          ua || (G.push('<tr class="cal', ca.o, " lv-row"), Ra && G.push(" lv-alt"), ab && G.push(" lv-lastevent"), sk(uk(this.b)).equals($) && G.push(" lv-today"), G.push('">'));
          var Ra = M.Dc,
              ca = ca.b,
              ca = ($ = 2 == Ra) ? ca.A : ca.B,
              ab = $ ? " lv-declined" : t,
              ua = 3 == Ra || 0 == Ra,
              bb = k;
          0 == Ra ? bb = ma : 3 == Ra ? bb = qa : $ ? bb = "cic-de" : Jj(M) && (bb = ka);
          Ra = k;
          Ra = bb ? sm(bb, X) : "&nbsp;";
          G.push('<td class="lv-eventcell lv-status">', Ra, "</td>");
          G.push('<td class="lv-eventcell lv-time', ab, '">');
          G.push('<span class="lv-event-time ', X, '">');
          Ra = bb = k;
          pa ? bb = "All day" : Gb ? (pa = yk(this.b).ob(M.Za()), bb = "&raquo;" + pa, Ra = "Until " + pa) : M.oc() ? (pa = yk(this.b).ob(M.Fa()), bb = "At " + pa) : (pa = M, Gb = yk(this.b), bb = pa.Fa().equals(pa.Za()) ? Gb.ob(pa.Fa()) : Gb.Ul(Tf(pa)));
          Ra = Ra || bb;
          G.push(bb, "</span></td>");
          Gb = M.Xc();
          bb = zo(this.b) && Gb;
          pa = M.getTitle() || (Gb ? I(Gb.getTitle()) : t) || "(No title)";
          G.push('<td class="lv-eventcell lv-titlecell', ab, '">');
          bb && (Gb = wf(Gb.o), G.push('<div><img class="webContent ', "lvw-" + N.toString(), '" src="', I(Gb), '"></div>'));
          G.push('<div class="lv-zippy ', X, '" id="', this.B + "z" + N.toString(), '"></div>');
          G.push('<div class="lv-event-title-line">');
          (Gb = ji(M)) && G.push('<span class="lv-event-color goog-inline-block" id="', this.B + "ev" + N.toString(), '" style="background-color:', Gb, '">&nbsp;</span>');
          Gb = [];
          ab = Ra;
          bb = M;
          Ra = Sh(this.b);
          bb = bb.Aa();
          Ra == bb ? Ra = n : (Ra = jg(Jd(this.b, 5), bb), Ra = Ra != n ? Kf(Ra) : n);
          ab = pa + ", " + ab;
          Ra && (ab += ", Calendar: " + Ra);
          ua ? ab += ", needs action" : $ && (ab += ", declined");
          Gb.push('<span tabindex=0 role=button aria-expanded=false class="lk lv-event-title ', X, " ", "lv-navigable", '" style="color:', ca, '" title="', I(ab), '">');
          Gb.push(iba(pa), "</span>");
          G.push(nm(pa, Gb.join(t)));
          if ($ = I(M.Tc)) $ = nm($), G.push("<em class=lv-location> - ", $, "</em>");
          G.push(" ");
          $ = M;
          Uj(Vj(this.b), $) && G.push(sm(ta));
          !M.Ge() && Wj(M) && G.push(sm(ra));
          !M.Ge() && Oj(M, 8192) && G.push(sm(sa));
          !M.Ge() && M.Ws() && G.push(sm(na));
          $ = M;
          !$.Ge() && Xj(this.F, $) && !Yj(this.F, $) && G.push(sm(oa));
          !M.Ge() && Xj(this.F, M) && Yj(this.F, M) && G.push(sm(la));
          G.push('</div><div id="li-', N.toString(), '" class="', X, ' lv-noact"></div>');
          G.push("</td></tr>");
          N = p
        }
        if (r > c) break
      }
    }
    this.W = s;
    h && (this.yb & 2 ? (e = dk(tq(this.C)), c = "lvl-l") : (e = s, c = "lvl-fs"), e = yk(this.b).Ec(e), ss(d, "<i>Showing events until " + e + '. <span tabindex=0 role=button class="lk ' + c + ' lv-navigable">Look for more</span></i>'), this.A.push(c));
    d.push(ea);
    b.innerHTML = d.join(t);
    a && l != n && Yl(this.K, l, 1)
  }
};

function ss(a, b) {
  a.push("<tr><td colspan=5><blockquote>", b, "</blockquote></td></tr>")
}
function mp(a, b) {
  if (1 == b || -1 == b) {
    var c = a.K.focus,
        d;
    if (-1 == b) {
      for (d = a.X.pop(); d && d.ta() >= c.ta();) d = a.X.pop();
      d ? d = d.max(Mg(c, -28)) : d = Mg(c, -7)
    } else a.W ? d = Jg(c).max(a.W) : d = Mg(c, 28), a.X.push(c);
    a.K.rd(d.va())
  } else 2 == b ? ts(a, 1) : -2 == b && ts(a, -1)
}

function ts(a, b) {
  var c = Gg(a.K.first.va()).va();
  if (0 === a.H.length) us(a, c);
  else if (0 > b) {
    var d = rq(a.C, a.D[0].sd, vs(a));
    0 == d.length ? (a.yb |= 1, a.o = 0) : (c = qq(a.C, c, 46, vs(a), m), rs(a, d.concat(c)), a.o += b + Fs(d), 0 > a.o ? (a.o = 0, a.yb |= 1) : a.yb &= -2)
  } else 1 < a.D.length ? (a.o = a.D[1].Yl, a.yb &= -3) : a.yb |= 2;
  0 < a.o && (a.yb &= -2);
  if (25 > a.H.length - a.o) {
    for (var e = -1, c = 0; c < a.D.length && !(a.D[c].Yl >= a.o + b); ++c) e = c;
    d = -1 == e ? a.K.first.va() : a.D[e].sd;
    c = qq(a.C, d, 46, vs(a), m);
    if (0 < c.length) {
      var e = -1 == e ? 0 : a.D[e].Yl,
          f = Fs(c);
      e + f >= a.H.length && (25 > f ? us(a, d) : (a.o -= e, f = Fs(c), a.yb = 46 > f ? a.yb | 2 : a.yb & -3, rs(a, c)))
    }
  }
  xp(a.b).K() && (1 < b && a.yb & 2 ? os(a.Z, m) : -1 > b && a.yb & 1 && qs(a.Z, m));
  a.render(m)
}
function us(a, b) {
  a.o = 0;
  var c = qq(a.C, b, 46, vs(a), m),
      d = Fs(c);
  if (5 > d) {
    a.yb |= 2;
    var e = rq(a.C, b, vs(a)),
        f = Fs(e),
        c = e.concat(c);
    5 > d + f ? a.yb |= 1 : a.o = d + f - 5
  }
  rs(a, c)
}
function Fs(a) {
  for (var b = 0, c = a.length - 1; 0 <= c; --c) a[c] instanceof Sf && ++b;
  return b
}
function vs(a) {
  var b = Mj.M(),
      c = S(a.b);
  sp(wp(a.b)) ? (a = Gs, b = fm(b), b = new dm(b, m, a)) : b = em(b, c);
  return b
}
Gp.prototype.O = Qa(70);

function Hs(a) {
  this.A = Nh(Ph(a));
  this.b = "x";
  (this.o = $q() && !! gbar.ela) && gbar.ela(p)
}
var gda = {
  "eui-t": "els",
  "eui-s": "elm",
  "eui-n": "ell"
};Hs.prototype.apply = function() {
  var a = Bi(),
      b;
  b = this.A.get("dense");
  b = "s" == b ? za : "t" == b ? Aa : "eui-n";
  1060 >= a.width || 590 >= a.height ? b = Aa : (1252 >= a.width || 640 >= a.height) && b != Aa && (b = za);
  this.b != b && (this.b = b, Is(T(ja), b), (a = T("offline-searchbar")) && Is(a, b), this.o && (a = gbar[gda[za]]) && a())
};

function Is(a, b) {
  switch (b) {
  case Aa:
    jn(a, za, Aa);
    break;
  case za:
    jn(a, Aa, za);
    break;
  default:
    gn(a, Aa, za)
  }
};

function Js() {}
function Ks(a, b, c, d, e) {
  var f = R();
  Rq(f).b(xa, E(function() {
    this.b = new Ls(f);
    this.b.hU(b, c, d, e)
  }, a))
}
Js.prototype.Ua = Qa(71);Js.prototype.close = function() {
  this.b.close()
};Js.prototype.getZIndex = Qa(72);

function Ms(a, b, c) {
  this.b = a;
  this.B = c || n;
  this.A = [];
  this.o = new Q(this)
}
var Ns;

function Os(a) {
  Qr(Or(a.b), E(a.bU, a), E(a.aU, a))
}
B = Ms.prototype;B.bU = function(a) {
  a = this.A = this.A.concat(a);
  for (var b = {}, c = 0, d = 0; d < a.length;) {
    var e = a[d++],
        f = fb(e) ? "o" + gb(e) : (typeof e).charAt(0) + e;
    Object.prototype.hasOwnProperty.call(b, f) || (b[f] = m, a[c++] = e)
  }
  a.length = c
};
B.aU = function(a) {
  if (2E3 < a.length) {
    var b = new Js;
    Ks(b, "Calendar limit reached", ub('<div class="il-dialog"><div class="il-message">', "Your Other Calendars list contains " + a.length + " calendars. Google Calendar can become unresponsive when the list contains more than 2000 calendars.<br><br> To fix this, go to Calendar Settings and unsubscribe or hide the calendars you don't use regularly.", '</div><span id="too_many_cal" class="lk" tabindex="0">Go to Calendar Settings</span></div>'), E(this.EY, this, b));
    a = a.splice(0, 2E3)
  }
  return a
};B.EY = function(a) {
  var b = T("too_many_cal");
  b && (a = E(this.FU, this, a), this.o.I(b, "click", a), this.o.I(b, "keypress", a))
};B.FU = function(a) {
  a.close();
  Ps(1)
};

function Qs(a) {
  var b, c;
  b = sk(uk(a.b));
  var d = Kg(b.year, b.month, 1);
  c = Gg(d);
  var e = _hosted;
  if (!e && xp(a.b)) {
    var f;
    f = (f = Yp) ? f.da : -1;
    if (0 < f) {
      var h;
      h = (h = Dq()) && h.length ? Hg(dk(h[1]), dk(h[0])) : -1;
      0 < h && (e = 5 <= f / h)
    }
  }
  if (e || _hosted) {
    e = S(a.b).hc();
    d = d.Jb() - e;
    0 > d && (d += 7);
    if (30 > tg(b.year, b.month) || 5 > d) d += 7;
    c.Y -= d;
    b = c.Ea();
    c.Y += 60
  } else c.Y -= 42, b = c.Ea(), c.Y += 168;
  c = c.Ea();
  d = E(a.oR, a, fp());
  Rs(b, c, a.A, d)
}
B.oR = function(a) {
  a.b("secondaryCalLoadTime");
  dp("timeToSecondaryCalsLoaded", ib() - _loadStartTime);
  this.A = [];
  this.o.I(Af(this.b), "c", this.eu)
};B.eu = function() {
  if (!Ns) {
    var a = this.A.length,
        b = Sh(this.b);
    1 < a || 1 == a && this.A[0] != b || (this.o.b(Af(this.b), "c", this.eu), Ns = m, this.B && this.B.b("allCalsVisible"), (a = wo(this.b)) && a.lM())
  }
};

function Ss(a, b, c, d, e, f, h, l, q, r) {
  this.da = d;
  this.Wa = a;
  this.id = e || this.Wa.id + "_";
  this.className = f || "dp-";
  this.A = c;
  this.b = b;
  this.C = {};
  a = C(h) ? h : 1;
  l = (1 << a + 7) - (1 << a + (l || 5));
  this.W = l + (l >> 7);
  this.Ia = !! q;
  this.Z = !! r;
  Ts[this.id] = this
}
H(Ss, uc);
var Ts = {};B = Ss.prototype;B.Dl = p;B.Rs = n;B.Zx = n;

function hda(a, b) {
  var c = a.id,
      d = a.className + "cell " + a.className,
      e = a.xc;
  if (!a.o) {
    a.H = [];
    for (var f = 7; f--;) a.H[f] = a.b.Zl(a.b.Ss(f));
    for (var f = a.className, h = [], l = 48; l--;) {
      var q = ["cell"];
      l & 2 ? (q.push(l & 1 ? "weekend-selected" : "weekday-selected"), l & 8 && q.push("today-selected"), q.push(l & 4 ? "onmonth-selected" : "offmonth-selected")) : (q.push(l & 1 ? "weekend" : "weekday"), l & 8 && q.push("today"), q.push(l & 4 ? "onmonth" : "offmonth"));
      l & 16 && q.push("day-left");
      l & 32 && q.push("day-right");
      h[l] = f + q.join(" " + f) + " "
    }
    a.F = h;
    a.D = [];
    a.o = a.id + "day_";
    a.B = a.id + "cur"
  }
  b.push('<div class="', a.className, 'monthtablediv monthtableSpace">');
  b.push('<table class="', a.className, 'monthtable" role="presentation" cellspacing=0 cellpadding=0 style="-moz-user-select:none;-webkit-user-select:none;">');
  a.Ia ? b.push('<tr id="', c, 'header" class="monthtableHeader"><td colspan=', e.b - 2, ' id="', a.B, '" class="', d, 'sb-cur">', a.Z ? '<span class="h zippy-arrow" unselectable=on>&nbsp;</span>' : t, '<span class="calHeaderSpace">', a.b.ak(a.xc.A), '</span></td><td colspan=2 class="', d, 'sb-nav"><span id="', c, 'prev" class="', d, 'sb-prev goog-inline-block"></span><span id="', c, 'next" class="', d, 'sb-next goog-inline-block"></span></td></tr>') : b.push('<tr class="', d, 'heading"  id="', c, 'header"><td id="', c, 'prev" class="', d, 'prev">&laquo;</td><td colspan=', e.b - 2, ' id="', a.B, '" class="', d, 'cur">', a.b.ak(a.xc.A), '</td><td id="', c, 'next" class="', d, 'next">&raquo;</td></tr>');
  b.push(ea);
  f = a.b.ak(a.xc.A);
  a.O && (f = a.O + " - " + f);
  b.push('<table class="', a.className, 'monthtable monthtableBody" summary="', I(f), '" cellspacing=0 cellpadding=0 id="', c, 'tbl" style="-moz-user-select:none;-webkit-user-select:none;"><colgroup span=7>');
  b.push('<tr class="', a.className, 'days">');
  c = a.xc.C;
  f = a.W;
  for (h = 0; h < e.b; h++) b.push('<th scope="col" class="', d, "dayh"), f >> c & 1 && b.push(" ", d, "weekendh"), b.push('" title="', a.b.Bo(c), '">', a.H[c], "</th>"), c = (c + 1) % 7;
  b.push(fa);
  var d = a.xc,
      e = d.b,
      c = a.id,
      f = a.W,
      h = a.F,
      l = Qp(d),
      r = a.Rs,
      q = r ? a.Rs.cb() : 1,
      s = r ? a.Zx.cb() : 0,
      r = r ? "pointer" : "default",
      u = a.X.cb(),
      x = a.xc.A.month,
      z = 0;
  a.K && (a.C = a.K(d));
  for (var A = 0; A < a.xc.o; A++) {
    b.push('<tr style="cursor:', r, '" id="', c, "row_", A, '">');
    for (var G = d.C, M = e; M--; z++) {
      var N = l[z],
          X = (N == u && 8) | ((N >> 5 & 15) == x && 4) | (N >= q && N <= s && 2) | (M == e - 1 && 16) | (0 == M && 32) | f >> G & 1,
          G = (G + 1) % 7;
      a.D[z] = X;
      b.push('<td id="', a.o, N, '" class="', h[X], a.C[N], '">', N & 31, "</td>")
    }
    b.push(fa)
  }
  b.push(ea);
  b.push("</div>")
}
B.render = function() {
  if (this.Dl) {
    var a = [];
    hda(this, a);
    this.Wa.innerHTML = a.join(t);
    var b = this.id,
        a = this.da;
    a(b + "prev").onmousedown = function() {
      Us(Ts[b], -1)
    };
    a(b + "next").onmousedown = function() {
      Us(Ts[b], 1)
    }
  }
};B.G = Qa(13);

function Us(a, b) {
  Vs(a, Ng(a.xc.A.year, a.xc.A.month + b, 1).va())
}
function Vs(a, b) {
  var c = a.xc.A;
  if (b.year != c.year || b.month != c.month) a.xc = a.A.b(b), a.update()
}
B.update = function() {
  this.Dl && this.render()
};B.getId = w("id");B.show = function() {
  this.Dl = m;
  this.render()
};
B.Ka = function() {
  this.Wa.innerHTML = t;
  this.Dl = p
};B.Da = w("Dl");B.setup = function(a) {
  this.X = a;
  this.xc ? this.update() : this.xc = this.A.b(a)
};B.L = function() {
  delete this.Wa;
  delete Ts[this.id];
  Ss.J.L.call(this)
};

function Ws() {
  P.call(this)
}
H(Ws, P);

function Xs(a) {
  P.call(this);
  this.A = a;
  this.o = this.b = n
}
H(Xs, Ws);

function ida(a, b) {
  var c = b.hc(),
      d = new zl,
      c = new Tp(c),
      e = b.cj(),
      f = b.Bf();
  Zg(S(a.A), 0, p) && (T("dp_0").display = "none");
  a.b = new Ss(T("dp_0"), d, c, T, k, k, e, f, m, m);
  a.b.O = "Mini calendar";
  d = uk(a.A);
  a.b.setup(sk(d));
  a.b.show()
};

function Ys(a) {
  P.call(this);
  this.D = a;
  this.b = this.B = 10;
  this.F = p;
  this.o = new Q(this)
}
H(Ys, P);

function Xp(a) {
  return Jd(a, 18)
}
function jda(a) {
  var b = Jp.M(),
      c = new Ys(a);
  document.documentElement.style.overflow = "hidden";
  T("calmaster").style.overflow = "auto";
  c.o.I(b, "o", c.pU);
  Od(a, 18, c)
}
B = Ys.prototype;B.pU = function(a) {
  "g" == a.target.wc && this.F && (this.F = p, this.Gr())
};B.Gr = function() {
  this.A ? this.A.Wz() : this.UE()
};B.Xz = Qa(73);
B.UE = function() {
  var a = T("gridcontainer");
  if (a && 0 != a.offsetHeight) {
    var b = a.scrollTop;
    this.Wf();
    Hp();
    a.scrollTop = b
  } else this.F = m, T("newdirtarget") && (this.B = Bi().height, this.b = 0, this.P("H")), Zs()
};

function $s(a) {
  var b = T("funbox");
  return b && xj(b) ? Yg(S(a.D), "funboxVisible", "false") || bi() ? b : n : n
}
B.Wf = function() {
  var a = T("gridcontainer");
  if (!a.offsetParent || a.offsetParent == document.body) return p;
  var b = oj(T("mothertable")),
      c = Bi().height,
      d, e = oj(a);
  d = (d = $s(this)) ? d.offsetHeight || 26 : 0;
  var f = xp(this.D);
  d = Math.max(f instanceof op ? 316 : 250, c - b.y - e.y - d);
  if (e = 5 <= Math.abs(d - a.offsetHeight)) b = Math.max(d, c - b.y), this.B = c, this.b = b, this.P("H");
  a.style.height != d + "px" && (a.style.height = d + "px");
  c = $s(this);
  kn(a, "has-funbox", !! c);
  a = xp(this.D).o();
  if (!e && !a) return p;
  a = T("calendars_fav");
  c = a.offsetHeight;
  this.ip();
  a.offsetHeight != c && this.K && this.K.Ka();
  Zp(Dp.M());
  Zs();
  return m
};

function Zs() {
  uj(T("calmaster"), Bi().height)
}
B.ip = function() {
  if (this.C) {
    var a = T("clst_my"),
        b = sj(a).y,
        c = Bi().height - b,
        d = T("lhscalinner_my"),
        b = xj(d),
        e = xj(T("lhscalinner_fav")),
        f = Number(b) + Number(e);
    if (f) {
      var a = a.offsetHeight,
          a = a + 2,
          h = T("searchAddCal"),
          h = e && h ? h.offsetHeight : 0,
          d = Bj(d, "padding").bottom,
          f = e ? Math.max(c / f - 2 * a - h, 40) : 0,
          c = b ? Math.max(c - 2 * a - h - f - d, 40) : 0,
          a = b ? Math.max(c - this.C.b.offsetHeight, 0) : 0,
          d = e ? Math.max(f - this.H.b.offsetHeight, 0) : 0;
      b && Er(this.C.B, c + d);
      e && Er(this.H.B, f + a)
    }
  }
};

function kda(a, b) {
  this.b = a;
  this.o = b
};

function at(a, b, c) {
  this.B = a;
  this.b = b;
  this.C = c;
  this.A = (a = T(c)) ? a.scrollTop : n;
  this.o = new Q(this)
}
H(at, uc);at.prototype.L = function() {
  K(this.o);
  delete this.B;
  delete this.b
};

function lda(a, b, c, d) {
  b = new at(b, c, d);
  b.o.I(a, "o", b.D)
}
at.prototype.D = function(a) {
  a = "g" == a.target.wc;
  var b = T(this.C);
  b && !a && (this.A = b.scrollTop);
  U(this.B, a);
  b && a && this.A !== n && (b.scrollTop = this.A);
  this.b.innerHTML = t;
  U(this.b, !a)
};
var Faa = {
  800: Ca,
  801: xa,
  802: "focuswidget",
  803: "focuswidget",
  804: xa,
  805: Ca,
  806: Ca,
  807: Ca,
  808: Ca,
  809: xa,
  810: Ba,
  811: "offline",
  812: Ca,
  813: Ca,
  814: "ww"
};

function bt() {}
bt.prototype.load = function(a, b, c, d) {
  d = d || new De;
  mda(a, b, c, d)
};

function mda(a, b, c, d) {
  d.send(a);
  O(d, wa, function() {
    d.oe() && ob(Je(d, ha) || t, "javascript") ? b(d.Ki()) : c()
  })
};

function ct(a, b) {
  for (var c = {}, d = 0; d < b.length; ++d) c[b[d]] = 1;
  for (var e = [], d = 0; d < a.length; ++d) c[a[d]] || e.push(a[d]);
  return e
};

function xq(a, b) {
  for (var c = 0, d = 0, e = a.length, f = b.length, h = [], l = -Infinity; c < e && d < f;) {
    var q = a[c],
        r = b[d],
        s = a[c + 1],
        u = b[d + 1];
    r <= q ? (l = u, d += 2) : l >= u ? d += 2 : l >= s ? c += 2 : (q = l > q ? l : q, s = r < s ? r : s, q < s && h.push(q, s), l = s == r ? u : s)
  }
  for (; c < e;) q = a[c++], q = q > l ? q : l, s = a[c++], q < s && h.push(q, s);
  return h
}
function uq(a, b) {
  var c = [];
  Aq(a, b, c);
  return c
}

function Aq(a, b, c) {
  for (var d = 0, e = 0, f = a.length, h = b.length, l = -1; d < f && e < h;) {
    var q = a[d],
        r = b[e],
        s = a[d + 1],
        u = b[e + 1];
    q < r ? s <= r ? d += 2 : u <= s ? (c[++l] = r, c[++l] = u, e += 2) : (c[++l] = r, c[++l] = s, d += 2) : u <= q ? e += 2 : s <= u ? (c[++l] = q, c[++l] = s, d += 2) : (c[++l] = q, c[++l] = u, e += 2)
  }++l < c.length && c.splice(l, c.length - l)
}
function zq(a, b, c) {
  var d = a.length - 1;
  0 <= d && a[d] >= b ? a[d] = c : a.push(b, c)
};

function dt(a) {
  a.sort();
  return a
}
function et(a, b, c, d) {
  this.Ra = a;
  this.o = b;
  this.b = c;
  this.Kd = d
}
et.prototype.Aa = w("Ra");et.prototype.toString = function() {
  return this.format()
};et.prototype.format = function(a) {
  a = a || 0;
  var b = this.Ra;
  return (/[\x00-\x20\"]/.test(b) ? '"' + encodeURIComponent(b).replace(ft, "%2B") + '"' : b) + " " + Dg(this.o) + "/" + Dg(this.b) + " " + (this.Kd + a)
};et.prototype.clone = function() {
  return new et(this.Ra, this.o, this.b, 0)
};

function Qca(a, b) {
  var c = [];
  gt(a, b, function(a, b) {
    c.push(!b || a && a.Kd >= b.Kd ? a : b)
  });
  return ht(c)
}
function it(a, b) {
  var c = [];
  gt(a, b, function(a, b) {
    b ? a && b && c.push(b) : c.push(a)
  });
  return ht(c)
}
function jt(a) {
  var b = [];
  if (a) {
    a = a.split(/\n/g);
    for (var c = 0; c < a.length; ++c) {
      var d = a[c].match(/^(\S+) (\d+)\/(\d+) (\d+)$/);
      d && b.push(new et(nda(d[1]), mk(d[2]).cb(), mk(d[3]).cb(), Number(d[4])))
    }
    b.sort(oda)
  }
  return b
}
function kt(a, b) {
  return a ? Db(a, function(a) {
    return a.format(b)
  }).join("\n") : t
}

function yq(a) {
  for (var b = [], c = 0; c < a.length; ++c) {
    var d = a[c];
    b.push([d.o, d.b])
  }
  a = [];
  b.sort(pda);
  for (var e = 0; e < b.length;) {
    c = b[e];
    d = c[1];
    for (e += 1; e < b.length && d >= b[e][0];) d = Math.max(d, b[e][1]), ++e;
    a.push(c[0], d)
  }
  return a
}
function lt(a, b) {
  for (var c = [], d = 0; d < a.length; ++d) {
    var e = a[d];
    b(e) && c.push(e)
  }
  return c
}
function mt(a, b, c) {
  b = Math.max(b, a.o);
  c = Math.min(c, a.b);
  return new et(a.Ra, b, c, a.Kd)
}
function oda(a, b) {
  return a.Ra < b.Ra ? -1 : a.Ra > b.Ra ? 1 : a.o - b.o
}

function gt(a, b, c) {
  function d(d, h) {
    var l;
    d ? (l = b[f], (h === n || h >= l.b) && ++f) : (l = a[e], (h === n || h >= l.b) && ++e);
    var s = mt(l, q, h || l.b);
    q = s.b;
    r = l.Ra;
    d ? c(n, s) : c(s, n)
  }
  for (var e = 0, f = 0, h = a.length, l = b.length, q = Cg, r = n; e < h && f < l;) {
    var s = a[e],
        u = b[f];
    if (s.Ra !== u.Ra) s.Ra < u.Ra ? (s.Ra !== r && (q = Cg), d(0, n)) : (u.Ra !== r && (q = Cg), d(1, n));
    else {
      s.Ra != r && (q = Cg);
      var x = Math.max(q, s.o),
          z = Math.max(q, u.o);
      if (x !== z) x < z ? d(0, u.o) : d(1, s.o);
      else {
        var z = Math.min(s.b, u.b),
            A = mt(s, x, z),
            x = mt(u, x, z),
            q = z,
            r = s.Ra;
        c(A, x);
        s.b <= z && ++e;
        u.b <= z && ++f
      }
    }
  }
  if (e < h) {
    do a[e].Ra !== r && (q = Cg), d(0, n);
    while (e < h)
  } else
  for (; f < l;) b[f].Ra !== r && (q = Cg), d(1, n)
}
function ht(a) {
  for (var b = [], c = n, d = 0; d < a.length; ++d) {
    var e = a[d];
    c && c.Ra === e.Ra && c.Kd === e.Kd && c.b === e.o ? c = b[b.length - 1] = new et(c.Ra, c.o, e.b, c.Kd) : (b.push(e), c = e)
  }
  return b
}
function pda(a, b) {
  return a[0] - b[0] || b[1] - a[1]
}
function Fq(a) {
  for (var b = [], c = k, d = 0; d < a.length; ++d) {
    var e = a[d];
    c !== e.Ra && b.push(e.Ra);
    c = e.Ra
  }
  return b
}
var ft = /\+/g;

function nda(a) {
  if (!a.length || '"' !== a.charAt(0)) return a;
  a = a.substring(1, a.length - 1).replace(ft, " ");
  return decodeURIComponent(a)
}
function nt(a, b, c) {
  var d = [];
  if (b > a) for (var e = 0; e < c.length; ++e) d.push(new et(c[e], a, b, 0));
  return dt(d)
};

function qda(a, b, c, d, e) {
  a = it(a, b);
  e.push("emf", kt(a), "ctz", ot(), "hl", "en");
  for (a = 0; a < c.length; ++a) e.push("lef", c[a]);
  d && e.push("nusr", "true")
}
function pt(a) {
  a[2] = mk(a[2]);
  a[3] = mk(a[3]);
  a[5] === k && (a[5] = a[4]);
  a[6] === k && (a[6] = a[4]);
  a[11] || (a[11] = 0);
  if (a[13]) {
    for (var b = a[13], c = {}, d = 0; d < b.length; d += 2) {
      var e = b[d],
          f = b[d + 1];
      "goo.richContent" == e && (f = eval(f));
      c[e] = f
    }
    a[13] = c
  }
  a[14] && (a[14] = Kc(a[14]));
  a[15] = Qn(a[15], a[5])
}
function rda(a) {
  a[0] = jt(a[0])
};

function sda() {}
function Yca(a, b, c) {
  qt(a, b, c)
};

function ot() {
  return S(R()).get("timezone")
}
function tda(a) {
  wq(a);
  a = Fq(a);
  var b = S(R()),
      c = Mj.M();
  c.Eb();
  Yr(c, a, p);
  try {
    for (var d = 0; d < a.length; ++d) {
      var e = a[d];
      c.Ke(e, !Yg(b, e + da, p))
    }
  } finally {
    c.xb()
  }
}
function rt(a, b, c) {
  Rs(a, b, [], c)
}
function Rs(a, b, c, d) {
  a = a.cb();
  b = (isNaN(b.hour) || b.hour || b.minute || b.second ? Jg(b) : b.va()).cb();
  var e = Eq();
  c = e.concat(ct(c, e));
  var e = c.length > e.length,
      f = Dq();
  if (k !== f) {
    var h = e;
    a < f[0] ? h = m : a = f[0];
    b > f[1] ? h = m : b = f[1];
    if (!h) {
      d && d();
      return
    }
  }
  st(nt(a, b, c), e, d)
}

function Zr(a) {
  return Jb(Eq(), a)
}
function Wr(a) {
  Yp.forEach(function(b) {
    b.Aa() === a && Cq(b.getId())
  });
  Yp.B = lt(Yp.B, function(b) {
    return b.Ra !== a
  });
  Yp.A = {}
}
function qt(a, b, c) {
  var d = Eq();
  a = ct(a, d);
  0 == a.length ? (b && b(), c && c()) : (d = Dq(), k !== d ? st(nt(d[0], d[1], a), m, b, c) : (b && b(), c && c()))
}
function $r(a) {
  var b = Dq();
  b && (a = nt(b[0], b[1], [a]), st(a, p))
}

function st(a, b, c, d, e) {
  function f() {
    var c = it(a, Yp.B.slice(0)),
        e = Mj.M(),
        c = Cb(c, function(a) {
        return 0 == a.Kd ? !e.getItem(a.Ra).A : p
      });
    0 < c.length ? st(c, b, k, d, 0) : d && d()
  }
  if (a.length) {
    var h = [];
    qda(a, Yp.B.slice(0), Eq(), b, h);
    var l = R(),
        q = Hr(l, "Oops, we couldn't load your events, please try again in a few minutes");
    0 < e && h.push("rc", e);
    e = Sd(67) ? f : d || D;
    Cf(Af(l), "load", h, 6, e, q, c)
  } else c && c(), d && d()
};
var tt = k,
    ut = k,
    vt = t;

function R() {
  fd || (fd = new Id);
  return fd
};

function wt() {}
wt.prototype.b = function(a) {
  qt(a)
};

function uda() {
  var a = Jp.M();
  0 != a.eb || Kp(a, "g")
}
function vda(a, b, c, d, e, f, h, l, q, r, s, u, x, z, A, G, M, N, X, $) {
  c = new Lf(c, d, k, 100, k, $, e);
  f = new Pd(f, h, l);
  r && (f.D = r);
  s && !Fc(s) && (f.o = s);
  f.A = u;
  x && (f.F = x);
  f.HA = G;
  M && (f.FA = M);
  f.DA = N;
  Od(a, 7, new sba(c, q, f, b, X, z, A))
}
function wda(a, b) {
  var c = Mj.M(),
      d = new sda;
  c.o = a;
  c.C = d;
  c.b = b;
  return c
}
function xda(a) {
  Td(a).isEnabled(114) && (Kl = new zl(Il.M(), k, m));
  Od(a, 2, new vk(Kl))
}
function yda(a) {
  var b = new up(a);
  Od(a, 15, b)
}
function zda(a) {
  var b = new Nr(a, Mj.M(), new wt);
  Od(a, 14, b)
}

function Ada(a) {
  var b = new lr(a);
  Od(a, 16, b)
}
function Bda(a) {
  var b = S(a);
  if (zo(a)) {
    var c = _nowMS,
        d = ib() + qk;
    3E4 <= Math.abs(d - c) && (qk = c - ib())
  }
  c = b.get("tztransn");
  b = b.get("tznextoff");
  b = new tk(Xg(S(R()), "tzoffset", "0"), C(c) ? parseFloat(c) : k, C(b) ? parseFloat(b) : k);
  Od(a, 1, b)
}
kb("_renderInit", function(a, b, c, d, e, f, h, l, q, r, s, u, x, z, A, G, M, N, X, $, ca, ua, pa, ab, Ra, Gb, bb, gg) {
  var Ua = R();
  Eaa(Ua);
  Od(Ua, 21, new Lr);
  b = new Wq(Ua);
  Cda(b);
  Od(Ua, 17, b);
  b = new zf(Ua, new kr);
  Od(Ua, 6, b);
  Od(Ua, 8, new $aa);
  b = new Uh(Ua, 0, b, function(a) {
    Ir(Ua).b(a)
  });
  var ng = ig.M();
  Od(Ua, 5, ng);
  q = Gaa(q, Ua);
  Od(Ua, 9, new jr(b, Jp.M(), q));
  Fba(N, Ua);
  um = oi = m;
  vm = 4;
  hi = kh = pm = m;
  N = new xo(Ua, _ol_serve_ol ? "disconnected" : "connected");
  N.register(Ua);
  q = wda(Ua, b);
  vda(Ua, q, a, e, f, c, d, u, b, x, z, A, G, M, X, $, ca, ua, 0 <= ab ? ab : k, pa);
  xda(Ua);
  Dda(Ua, q, ci.M(), ng, a);
  yda(Ua);
  Mca(vp(Ua), Ra);
  zda(Ua);
  Ada(Ua);
  (new Hs(Ua)).apply();
  jda(Ua);
  vt = h;
  a = new Hq(Ua, h + "calendarjs_", "compiled__en.js" + l);
  a.F = new bt;
  Ua.C = a;
  c = new Qq(a);
  Od(Ua, 13, c);
  s && (Pq(a, Ba), Pq(a, Ca), Pq(a, Fa), Pq(a, xa));
  _ol_serve_ol && (Pq(a, "offline"), Pq(a, Ca), Pq(a, Fa), Pq(a, xa));
  O(a, "C", F(Eda, Ua));
  O(N, "m", function(a) {
    Af(Ua).A = a.Pa
  });
  Zaa(Af(Ua), r);
  Rca(c);
  O(Yp, "x", function(a) {
    a = a.Li;
    Gs && a in Gs && a in Gs && (xt[Gs[a]]--, delete Gs[a])
  });
  Vca(Ua);
  Od(Ua, 25, new kda(Ua, function(a, b) {
    st(a, p, k, k, b)
  }));
  (new sr(ab, Gb, bb, gg)).register(Ua)
});kb("_renderBody", D);
kb("_renderMain", function(a, b, c, d, e, f, h, l, q, r) {
  var s = R();
  ar();
  if (window.location != window.parent.location) Zq(s, 811);
  else {
    if (J) try {
      document.execCommand("BackgroundImageCache", p, m)
    } catch (u) {}
    var x = W("promo_ads");
    x && (a ? x.style.display = t : (x.style.display = "none", x.parentNode.nextSibling && x.parentNode.parentNode.removeChild(x.parentNode.nextSibling)));
    x = Mj.M();
    tt = new gs(x, s, "calendars_my", "clst_my", m);
    ut = new gs(x, s, "calendars_fav", "clst_fav", p);
    var x = Xp(s),
        z = ut;
    x.C = tt;
    x.H = z;
    a = F(Fda, a, b, c, d, e, f, h, l, q, r);
    er ? a() : cr = a;
    a = S(s);
    b = new Date(1970, 11, 29, 13, 0, 0, 0);
    c = "false";
    "toLocaleTimeString" in b && (c = 0 <= b.toLocaleTimeString().indexOf("13") ? "true" : "false");
    Wh(a, Da, c);
    d = b.toLocaleDateString();
    b = d.indexOf("12");
    c = d.indexOf("29");
    if (0 > b && 0 <= c) for (e = (new Date(1970, 8, 29, 13, 0, 0, 0)).toLocaleDateString(), f = Math.min(d.length, e.length), h = 0; h < f; h++) if (d.charCodeAt(h) != e.charCodeAt(h)) {
      b = h;
      break
    }
    0 <= (b | c) && (d = d.indexOf("70"), Wh(a, "dtFldOrdr", b < c ? 0 <= d && d < b ? "YMD" : "MDY" : "DMY"));
    Wh(a, "weekView5", "false");
    Wh(a, "defaultCalMode", "week");
    Wh(a, "showDeclined", "true");
    Rh(a.D).getName() != n && Wh(a, "useDocAttachment", "true");
    Wh(a, "locale", "en");
    _ol_enabled && _ol_serve_ol && Ao() ? Zq(s, 811) : cr ? cr() : er = m
  }
});

function Fda(a, b, c, d, e, f, h, l, q) {
  a = R();
  Bda(a);
  var r = D.get(a);
  b && Ef(r, b);
  c && Ef(r, c);
  d && Ef(r, d);
  Nca(Dp.M(), f ? mk(f).va() : Ll());
  b = h;
  c = S(a);
  b || (b = c.getString("defaultCalMode", "week"));
  Zh(c, uk(a));
  d = new Gda;
  f = Bp();
  bda(lp.M(), Yp, d, og(a), f, a);
  yt = $o(Zo.M());
  bp(yt, _loadStartTime - _tsf);
  zt = new Ms(a, 0, yt);
  l && Os(zt);
  zp(vp(a), b);
  Qs(zt);
  e && Ef(r, e);
  c.jb();
  q && (At = function() {
    Bt(p, q);
    At = k;
    Ct()
  });
  e = T("mainbody");
  l = T("coverinner");
  a = Vp(Dp.M());
  lda(Jp.M(), e, l, a);
  br ? br() : dr = m
}
var Dt, yt, At, zt;

function Hda(a) {
  Dt = ib();
  yt.b(a ? "totalDlLoadTime" : "totalLoadTime");
  zt && (zt.eu(), zt = n)
}
kb("_renderPost", function() {
  if (window.location == window.parent.location) {
    var a = Ida;
    dr ? a() : br = a
  }
});

function Ida() {
  var a = R(),
      b = new Xs(a);
  ida(b, S(a));
  Lca(vp(a), b);
  var c = Mj.M();
  c.Id();
  O(c, "h", function(a) {
    if (fh(a, "g")) {
      a = Eq();
      for (var b = 0, f = a.length; b < f; ++b) c.contains(a[b]) || Wr(a[b])
    }
  });
  uda();
  (b = !! At) || Ct();
  Hda(b);
  Zq(a, 804)
}
function Ct() {
  T("loadingItem").innerHTML = t;
  gn(T(ja), "hdn")
}

function Eda(a) {
  var b;
  b = zo(a) ? 'We\'re sorry. Google Calendar is temporarily unavailable. Please try again in a few minutes.<br/> If the problem persists, see our <a href="//support.google.com/calendar/bin/static.py?hl=en&page=known_issues.cs">Known Issues page</a> or visit our <a href="//support.google.com/calendar/?hl=en">Help Center</a>.' : "Sorry, Calendar is currently running in offline mode. Please try again in a few minutes.";
  Ir(a).o(b)
}
function Dda(a, b, c, d, e) {
  Od(a, 20, new Ip(b, c, d, e))
};

function Gda() {}
function ps(a, b, c) {
  rt(a, b, function() {
    setTimeout(function() {
      if (c) {
        var a = R();
        yp(vp(a)).D(c)
      }
    }, 0)
  })
};
var Et = 100;

function Hp() {
  if (xp(R()).o()) Wp(Dp.M(), 100 != Et);
  else {
    W("gridcontainer").innerHTML = t;
    W("gridcontainer").style.height = t;
    var a = lp.M();
    if (a.b && 0 < a.A.o.length) {
      var b = a.b;
      b.o = 0;
      b.H = [];
      b.D = [];
      ts(a.b, 0);
      if (sp(wp(a.B))) cda(a);
      else {
        a.o && a.o.Po();
        ls(a);
        var b = I("View one day earlier."),
            c = I("View one day later."),
            b = ['<div class=lv-nav><img tabindex=0 role=button src="', pg(), '" class="lv-up lk ', "lvl-bd", '" title="', b, '" alt="', b, '"> <img src="', pg(), '" tabindex=0 role=button class="lv-down lk ', "lvl-fd", '" title="', c, '" alt="', c, '"></div>'];
        b.push('<div class="chead cheadNotToday noprint">', '<span id=expand_all_link tabindex=0 role=button class="lk ', "lv-x", '">', "Expand All", "</span>&nbsp;&nbsp;&nbsp;", '<span id=collapse_all_link tabindex=0 role=button class="lk ', "lv-c", '">', "Collapse All", "</span></div>");
        c = T(Ga);
        c.innerHTML = b.join(t);
        Fp(m);
        Xp(R()).Wf();
        a.b.render();
        a.o && (a.o.kJ(a.b.da), a.o.yz(), a.o.xz(c), a.o.zz())
      }
    }
  }
  a = R();
  Nd(a, 23) && Jd(a, 23).o()
}

function Fp(a) {
  var b = W("gridcontainer");
  a || (b.scrollTop = 0);
  b.style.overflowY = a ? "scroll" : "visible"
};

function Nj(a) {
  var b = t;
  if (Yg(S(R()), "showguestname", _isGoogUser) && !a.oc()) {
    var c;
    t: {
      var d = Sh(R());
      if (5 <= a.o) c = n;
      else {
        c = ig.M();
        for (var e = 100 == jg(c, a.Aa()).Bb() ? a.Aa() : d, f = p, d = n, h = 0, l = Un(a), q = 0; q < l.length; q++) {
          var r = l[q];
          if (4 != Vn(a, r).eb) {
            var s = jg(c, r);
            if (s && 100 == s.Bb()) {
              if (2 < ++h) {
                c = n;
                break t
              }
              e != r ? d = s : f = m
            }
          }
        }
        2 == h && f && d ? (c = d.tc(), c = 100 == d.b || c && c != d.Ma() ? d : n) : c = n
      }
    }
    c != n && (a = Vn(a, c.uid), b = " (" + I((a ? a.Je : n) || Kf(c)) + ")")
  }
  return b
};
var _SE_weatherOn = p;

function Ps(a) {
  Ft(a || 0, p)
}
function Ft(a, b) {
  var c = R();
  Rq(c).b(ya, function() {
    Jda(a, b)
  })
};
var Gt = new P;
var Ht = p,
    Gs = {},
    xt = {},
    Cp;

function It() {
  Ht = p;
  var a = W("sropt");
  a && (a.style.display = "none", a.innerHTML = t);
  if (a = W("srreg")) a.style.display = t;
  Xp(R()).Gr();
  a = vp(R());
  sp(a.b) && zp(a, Cp.getType(), Cp.b)
}
function Jt() {
  It();
  Kt();
  Kp(Jp.M(), "g")
}
O(Gt, "I", Jt, p, k);

function Cda(a) {
  Xq(a, "a", Bq, pt);
  Xq(a, "us", tda, rda);
  Xq(a, "anp", Kda);
  Xq(a, "_DS_put", _DS_put, Lda);
  Xq(a, "u", Mda);
  Xq(a, "ap", lba);
  Xq(a, "pi", Nda)
}
function Kda(a, b, c, d) {
  c = parseInt(c, 10);
  var e = Or(R());
  "true" != d && (e.o.set(b + "/hidden", "false"), e.o.set(b + da, "false"), e.o.jb());
  Pr(e, a, b, c)
}
function Lda(a) {
  a[1] = parseInt(a[1], 10);
  a[2] = parseInt(a[2], 10)
}
function Mda(a) {
  Yh(S(R()), a)
}
function Nda(a) {
  di = a
};

function _ShowMessage(a, b, c, d) {
  Ir(R()).o(a, b, d);
  c && c()
}
function _HideMessage(a) {
  Ir(R()).Ka(a)
}
function _DS_put(a, b, c, d, e, f, h, l, q, r, s, u, x, z, A, G, M, N, X, $, ca, ua, pa, ab, Ra, Gb, bb, gg) {
  if (70 > b) {
    var Ua = S(R()).get(a + "/name");
    Ua && (e = Ua)
  }
  h = I(h);
  ci.M().add(a, new gi(b, c, d, e, f, h, l, q, r, s, p, u, a, x, z, A, G, M, N, X, $, ca, ua, pa, ab, Ra, Gb, bb, gg))
}
var _Refresh = D;

function _Dispatch(a) {
  var b = R();
  Ef(D.get(b), a)
}
var _GenSettings = D,
    _SR_backToCalendar = D,
    _EH_nwC = D;

function _lastCalFunc() {};
