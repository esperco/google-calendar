/*
  https://www.google.com/calendar/static/307387de4562bc5dba423644325c5f55calendarjs_extrascompiled__en.js
*/

function lG(a) {
  L.call(this, "m");
  this.status = a;
  this.Pa = "connected" == a
}
H(lG, L);

function mG(a, b, c, d, e) {
  b == a.Aa() && a.lf(c);
  var f = Vn(a, b) || {
    eb: 0,
    pi: p,
    Je: n,
    pf: 0,
    Xg: n
  };
  f.eb = c;
  d !== k && (f.pf = d);
  e !== k && (f.Xg = e);
  Tn(a)[b] = f;
  a.A = k
}

function nG(a, b) {
  var c = t;
  0 < b.length ? (c = 1 == b.length ? "Calendar '" + b[0] + '\' did not load. If the problem persists, visit the <a href="//www.google.com/support/calendar/bin/answer.py?answer=63579&hl=en">Help Center</a>.' : 2 == b.length ? "Calendars '" + b[0] + "' and '" + b[1] + '\' did not load. If the problem persists, visit the <a href="//www.google.com/support/calendar/bin/answer.py?answer=63579&hl=en">Help Center</a>.' : "Calendars '" + b[0] + "' and '" + b[1] + "' and " + (b.length - 2) + ' more did not load. If the problem persists, visit the <a href="//www.google.com/support/calendar/bin/answer.py?answer=63579&hl=en">Help Center</a>.', df(29)) : (c = "One or more of your selected calendars could not be loaded at this time. You can try to re-select the hidden calendars in a few moments.", df(30));
  Ir(a.b).o(c)
}
function oG(a, b) {
  var c = b.Aa(),
      d = b.Db() && Sd(9),
      e = b.F;
  return e ? e : nr(a, c, d)
}
function pG(a, b) {
  var c = b.Aa();
  a.A.clear(c);
  var d = a.b[c];
  d || (d = a.b[c] = {});
  c = On(b);
  d[c] = b
}
function qG(a) {
  var b = wo(a.b);
  b && b.isEnabled() && (b = Bo(a), a.P(new lG(b)));
  a.P("l")
}

function rG(a) {
  var b = a.split(":", 5);
  5 != b.length && g(Error("Bad index: " + a));
  a = parseInt(b[1], 10);
  return new Nn(b[0], a, parseInt(b[2], 10), 1 == a ? parseInt(b[3], 10) : k, 1 == a ? parseInt(b[4], 10) : k)
}
function Nfa(a) {
  var b = a.o;
  Bb(a.b, function(a) {
    b.vb(a.element, a.b)
  });
  delete a.b
}
var sG = {},
    tG = [];

function uG(a) {
  a = String(a);
  if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, t))) try {
    return eval("(" + a + ")")
  } catch (b) {}
  g(Error("Invalid JSON string: " + a))
}
Y.prototype.Qq = eu(75, Oa("Cc"));
Y.prototype.mf = eu(74, w("Cc"));
Js.prototype.getZIndex = eu(72, function() {
  return this.b.getZIndex()
});
ks.prototype.getDate = eu(69, w("b"));
Mj.prototype.fv = eu(66, function() {
  var a = dh(this);
  a.sort(bs(this));
  return a
});
Zo.prototype.getData = eu(54, w("b"));
Zo.prototype.reset = eu(53, function() {
  this.b = {}
});
lr.prototype.reset = eu(52, function() {
  this.A.reset();
  for (var a in this.o) {
    var b = this.o[a];
    delete this.o[a];
    var c = rG(a);
    1 == b ? pG(this, c) : -1 == b && (b = this.b[c.Aa()]) && delete b[a]
  }
  this.P("E")
});
mr.prototype.reset = eu(51, function() {
  this.b = {}
});
fy.prototype.reset = eu(50, function() {
  hD(this) && (this.clear(), gD(this))
});
zl.prototype.Rp = eu(43, function(a) {
  var b = Cl(this, a.month, m);
  a = a.year;
  return tl(Ck(this.b.b, gl, 23), [b, a])
});
zl.prototype.Op = eu(39, function(a) {
  var b = Dl(this, a.month, p);
  a = a.Y;
  return tl(Ck(this.b.b, gl, 18), [b, a])
});
pk.prototype.Bn = eu(36, w("D"));
rk.prototype.Bn = eu(35, function() {
  return this.b.Bn()
});
cj.prototype.qj = eu(21, w("o"));
$i.prototype.Ll = eu(20, w("b"));
cj.prototype.Ll = eu(19, w("b"));
xi.prototype.Qa = eu(17, function(a, b) {
  return cu(a, b || this.b)
});
Y.prototype.Qa = eu(16, function(a) {
  return this.V ? this.b.Qa(a, this.V) : n
});
Uh.prototype.$f = eu(11, function() {
  return this.o[0].getName()
});
ah.prototype.removeItem = eu(8, function(a) {
  this.remove(a.getKey())
});
qg.prototype.he = eu(7, w("fb"));
fy.prototype.he = eu(6, w("fb"));
De.prototype.ll = eu(5, function(a) {
  if (this.b) {
    var b = this.b.responseText;
    a && 0 == b.indexOf(a) && (b = b.substring(a.length));
    return uG(b)
  }
});
De.prototype.sF = eu(4, function() {
  this.aa();
  Mb(tG, this)
});
uc.prototype.dc = eu(0, function(a) {
  a = F(K, a);
  this.Pg || (this.Pg = []);
  this.Pg.push(C(k) ? E(a, k) : a)
});

function vG(a) {
  if (tD(a)) return p;
  switch (a.b.get()) {
  case 0:
    return m;
  case 1:
    return a.H;
  case 2:
    return a.C;
  case 3:
    return a.F;
  default:
    return a.b.get(), p
  }
}
function wG(a, b) {
  return a.D && b ? Ab(a.D, b) : -1
}
function xG(a, b) {
  return b.substring(a.getId().length + 1)
}
function yG(a) {
  a.An && (a.An = p, Li(a.sj), a.sj = n, ij(a.ra.G(), "z-index", a.A), a.F(gb(a), p))
}

function Ofa(a, b) {
  if (!a.An) {
    a.An = m;
    a.F = b;
    var c = a.ra.G();
    a.sj = a.o.U("div", "bubble-lightbox");
    Ji(a.sj, c);
    1001 > a.A ? (ij(a.sj, "z-index", 1001), ij(c, "z-index", 1001)) : ij(a.sj, "z-index", a.A);
    a.F(gb(a), m)
  }
}
function zG(a, b, c) {
  b == n || b instanceof gj ? a.yr = b : a.yr = new gj(b, 0, 0, c);
  a.Da() && a.Ua()
}
function AG(a, b) {
  a.W = b || k;
  a.Da() && a.Ua()
}
function BG(a) {
  a.ea = 4;
  a.Da() && a.Ua()
}
function CG(a) {
  var b = a.Fa(),
      c = a.Za();
  a.Db() && a.Ri(b.va(), c.va());
  fq(Yp, a)
}

function DG(a) {
  return new gj(a.top, a.left + a.width, a.top + a.height, a.left)
}
function Pfa(a) {
  Cq(a)
}
function EG(a, b) {
  mG(a, a.Aa(), b)
}
function FG(a) {
  ep("bubble_delete");
  var b = R();
  Rq(b).b(Ba, function() {
    hu(a)
  })
}
function Qfa(a, b, c, d, e) {
  e++;
  var f = Mj.M();
  if (Td(a.b).isEnabled(72) && 0 < b.length && 1 >= e) a.o(b, e), df(49), 0 < d.length && (Yr(f, d, m), nG(a, []));
  else if (0 < b.length || 0 < d.length) b = Db(b, function(a) {
    return a.Aa()
  }), Yr(f, b, m), Yr(f, d, m), nG(a, c)
}
function Rfa(a) {
  return a.A
}

function GG(a, b, c, d, e) {
  var f = R();
  Rq(f).b(xa, E(function() {
    this.b = new Ls(f);
    this.b.yw(b, c, d, e, k, k)
  }, a))
}
function Sfa(a) {
  var b = ["dGFza3NAdGFza3MuZ29vZ2xlLmNvbQ"];
  return Eb(dh(a), function(a) {
    var d = Jb(b, a.getId());
    a = 2 == a.type && a.Ue;
    return !d && a
  })
}
function HG(a, b) {
  return lt(a.B, function(a) {
    return a.Ra in b
  })
}
function IG(a, b, c) {
  var d = [];
  c = c || t;
  b = b || t;
  for (var e in a.b) d.push(b + e + c), d.push(a.b[e].join("#"));
  return d.join(":")
}
function JG(a) {
  L.call(this, "perfupload");
  this.o = a
}
H(JG, L);

function KG(a, b) {
  a.eb != b && (a.eb = b, "?" != a.eb && qG(a))
}
function LG(a) {
  return a.b && "goo.createdBySet" in a.b ? a.b["goo.createdBySet"] != n : p
}
var MG = {},
    Tfa = {},
    Ufa = {};

function NG(a, b) {
  return Zk(a, b, m)
}
function Vfa(a) {
  a.o = new OG;
  Nfa(a)
}
function PG(a) {
  if (a instanceof cj) return a;
  var b = n;
  a.UF && (b = a.qj());
  return ej(I(a.xs ? a.Ll() : String(a)), b)
}
function QG() {
  this.b = sG
}
QG.prototype.xs = m;
QG.prototype.Ll = y(t);
QG.prototype.toString = y("Const{}");

function Wfa(a) {
  return a.C
}
function Xfa() {
  var a = ig.M(),
      b = yD.M();
  a.A = b
}

function RG(a, b) {
  var c = a.A;
  if (!c) return n;
  for (var d = c.o(b), e = n, f = 0; f < d.length; ++f) if (d[f]) {
    e = d[f];
    break
  }
  return e ? (c = c.b(b, m)) ? c.toLowerCase() : n : n
}
function SG(a) {
  a = a.b;
  return 100 == a || 103 == a || 108 == a
}
function TG(a) {
  return ob(a.o, "@calendar.google.com")
}
function UG(a, b) {
  return a.b.get(b)
}
function VG(a, b, c) {
  a.b.set(b, c);
  return a
}
var Yfa = /(\.edu$)|(\.ac\...$)/;

function WG(a) {
  return 0 == a || 3 == a
}
var Zfa = /(["'\f\b\n\t\r\v\\])/gm;

function XG(a) {
  this.o = a || wi()
}
H(XG, uc);
XG.prototype.D = function() {
  Dj(this.G(), "tooltip");
  Ej(this.G(), "live", "polite")
};

function YG(a) {
  return a instanceof cj && a.constructor === cj && a.A === dj ? a.b : "type_error:SafeHtml"
}
function ZG(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
}

function $G(a) {
  this.o = a || wi();
  this.b = this.o.U("div", aH() + "-contentId");
  this.A = this.o.U("div", aH() + "-arrow", this.o.U("div", aH() + "-arrowimplbefore"), this.o.U("div", aH() + "-arrowimplafter"));
  this.B = this.o.U("div", {
    "class": aH(),
    role: "tooltip"
  }, this.b, this.A);
  this.D()
}
H($G, XG);

function aH() {
  return "jfk-tooltip"
}
$G.prototype.G = w("B");
$G.prototype.L = function() {
  this.B && Li(this.B)
};

function $fa(a, b) {
  var c = 0,
      d = 0,
      e = vj(a);
  switch (b) {
  case 2:
    c = e.width / 2;
    break;
  case 1:
    c = e.width / 2;
    d = e.height;
    break;
  case 0:
    d = e.height / 2;
    break;
  case 3:
    c = e.width, d = e.height / 2
  }
  return new ti(c, d)
}
function bH(a, b) {
  switch (a) {
  case 2:
    return 0 == b ? 1 : 3;
  case 1:
    return 0 == b ? 0 : 2;
  case 0:
    return 0 == b ? 6 : 7;
  default:
    return 0 == b ? 4 : 5
  }
}
function cH(a, b) {
  return 15 > b ? 15 : Zd(a, 15, b)
}
function dH() {}
dH.prototype.Ua = Na();

function aga(a, b) {
  var c = lv(a),
      d = lv(b);
  return new ti(c.x - d.x, c.y - d.y)
}
var bga = /\W*function\s+([\w\$]+)\(/;

function eH(a) {
  return a == n ? t : String(a)
}
function fH() {
  var a = R();
  Rq(a).b(Ca, function() {
    gH()
  })
}
function hH(a, b, c, d) {
  a = R();
  Rq(a).b(Ca, function() {
    iH && (clearTimeout(iH), iH = n);
    var a = c.replace(/\s*<\S*>$/, t),
        f = t;
    d && (f = '<br><a href="mailto:' + I(d) + '" onclick="' + jH(kH) + '()">' + I(c) + "</a>");
    a = "<center><b>" + I(a) + "</b>" + f + "<br></center>";
    cga(a, b)
  })
}
function lH(a) {
  return I(a.replace(Zfa, "\\$1"))
}

function dga(a) {
  if (a) switch (a.toLowerCase().split(",")[0]) {
  case "l":
    return 0;
  case "t":
    return 2;
  case "r":
    return 3
  }
  return 1
}
function ega(a) {
  if (a.b) return a.b;
  var b = a.getAttribute("data-tooltip-html");
  b ? a = ej(b, n) : (a = a.getAttribute("data-tooltip"), a instanceof cj || (a = PG(a), a = ej(ZG(YG(a)), a.qj())));
  return a
}
function mH(a) {
  $G.call(this, a)
}
H(mH, $G);
mH.prototype.D = function() {
  Dj(this.G(), "tooltip")
};

function nH(a, b) {
  this.kb = a;
  this.D = !! b;
  this.B = {
    0: this.kb + "-arrowright",
    1: this.kb + "-arrowup",
    2: this.kb + "-arrowdown",
    3: this.kb + "-arrowleft"
  }
}
H(nH, dH);
B = nH.prototype;
B.Ht = p;
B.uw = 2;
B.LD = 20;
B.xw = 3;
B.qv = -5;
B.Ug = Oa("o");

function oH(a, b, c, d, e) {
  b != n && (a.xw = b);
  c != n && (a.uw = c);
  db(d) && (a.LD = Math.max(d, 15));
  db(e) && (a.qv = e)
}
B.Ua = function(a, b, c) {
  a = this.uw;
  2 == a && (a = 0);
  pH(this, this.xw, a, 2 == this.uw ? WG(this.xw) ? this.b.offsetHeight / 2 : this.b.offsetWidth / 2 : this.LD, c)
};

function pH(a, b, c, d, e, f) {
  if (a.o) {
    var h = bH(b, c),
        l;
    l = a.o;
    var q = vj(l);
    var q = (WG(b) ? q.height / 2 : q.width / 2) - d,
        r = dv(l, h),
        s;
    if (s = gv(l)) l = DG(fv(l)), WG(b) ? l.top < s.top && !(r & 1) ? q -= s.top - l.top : l.bottom > s.bottom && r & 1 && (q -= l.bottom - s.bottom) : l.left < s.left && !(r & 2) ? q -= s.left - l.left : l.right > s.right && r & 2 && (q -= l.right - s.right);
    l = q;
    l = WG(b) ? new ti(a.qv, l) : new ti(l, a.qv);
    q = WG(b) ? 6 : 9;
    r = b ^ 3;
    WG(b) && "rtl" == a.o.dir && (r = b);
    h = qv(a.o, bH(r, c), a.b, h, l, e, a.Ht ? q : 0, k, n);
    if (!f && h & 496) {
      pH(a, b ^ 3, c, d, e, m);
      return
    }!a.D || h & 496 || (e = parseFloat(a.b.style.left), f = parseFloat(a.b.style.top), isFinite(e) && 0 == e % 1 && isFinite(f) && 0 == f % 1 || hv(a.b, Math.round(e), Math.round(f)))
  }
  fga(a, b, c, d)
}
function fga(a, b, c, d) {
  var e = a.A;
  zc(a.B, function(a) {
    rv(e, a, p)
  }, a);
  nv(e, a.B[b]);
  e.style.top = e.style.left = e.style.right = e.style.bottom = t;
  a.o ? (c = aga(a.o, a.b), d = $fa(a.o, b), WG(b) ? (a = cH(c.y + d.y, a.b.offsetHeight - 15), e.style.top = a + "px") : (a = cH(c.x + d.x, a.b.offsetWidth - 15), e.style.left = a + "px")) : e.style[0 == c ? WG(b) ? "top" : "left" : WG(b) ? "bottom" : "right"] = d + "px"
}

function qH(a, b) {
  a.innerHTML = YG(b)
}
function jH(a) {
  if (!("name" in a)) {
    var b = bga.exec(a);
    a.name = b[1]
  }
  a = a.name;
  return Va.document && a in Va.document.documentElement ? "window." + a : a
}
function rH(a, b, c) {
  a = om(a);
  if (!c) return a;
  var d = jg(ig.M(), c);
  c = d && d.uid != d.Ma() ? lH(d.Ma()) : t;
  var e = ["<span"];
  d && 100 == d.Bb() && !c.match(/@.*\.google\.com$/) && (b = lH(b), e.push(' onmouseover="', jH(hH), "(this, event, '", b, "', '", c, '\')" onmouseout="', jH(fH), '()"'));
  e.push(">", a, "</span>");
  return e.join(t)
}
var gga = {
  "\x00": "%00",
  "\u0001": "%01",
  "\u0002": "%02",
  "\u0003": "%03",
  "\u0004": "%04",
  "\u0005": "%05",
  "\u0006": "%06",
  "\u0007": "%07",
  "\b": "%08",
  "\t": "%09",
  "\n": "%0A",
  "\x0B": "%0B",
  "\f": "%0C",
  "\r": "%0D",
  "\u000e": "%0E",
  "\u000f": "%0F",
  "\u0010": "%10",
  "\u0011": "%11",
  "\u0012": "%12",
  "\u0013": "%13",
  "\u0014": "%14",
  "\u0015": "%15",
  "\u0016": "%16",
  "\u0017": "%17",
  "\u0018": "%18",
  "\u0019": "%19",
  "\u001a": "%1A",
  "\u001b": "%1B",
  "\u001c": "%1C",
  "\u001d": "%1D",
  "\u001e": "%1E",
  "\u001f": "%1F",
  " ": "%20",
  '"': "%22",
  "'": "%27",
  "(": "%28",
  ")": "%29",
  "<": "%3C",
  ">": "%3E",
  "\\": "%5C",
  "{": "%7B",
  "}": "%7D",
  "\u007f": "%7F",
  "\u0085": "%C2%85",
  "\u00a0": "%C2%A0",
  "\u2028": "%E2%80%A8",
  "\u2029": "%E2%80%A9",
  "\uff01": "%EF%BC%81",
  "\uff03": "%EF%BC%83",
  "\uff04": "%EF%BC%84",
  "\uff06": "%EF%BC%86",
  "\uff07": "%EF%BC%87",
  "\uff08": "%EF%BC%88",
  "\uff09": "%EF%BC%89",
  "\uff0a": "%EF%BC%8A",
  "\uff0b": "%EF%BC%8B",
  "\uff0c": "%EF%BC%8C",
  "\uff0f": "%EF%BC%8F",
  "\uff1a": "%EF%BC%9A",
  "\uff1b": "%EF%BC%9B",
  "\uff1d": "%EF%BC%9D",
  "\uff1f": "%EF%BC%9F",
  "\uff20": "%EF%BC%A0",
  "\uff3b": "%EF%BC%BB",
  "\uff3d": "%EF%BC%BD"
},
    hga = {
    "\x00": "&#0;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "-": "&#45;",
    "/": "&#47;",
    "<": "&lt;",
    "=": "&#61;",
    ">": "&gt;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
    };

function sH(a) {
  Q.call(this);
  this.da = a;
  this.K = new si(this.xW, 0, this);
  this.dc(this.K);
  a = a.Sa();
  this.I(a, ["mouseout", "mousedown", "click", "blur", raa, "keydown"], this.vW, m);
  this.I(a, ["mouseover", "focus", vc], this.wW, m)
}
H(sH, Q);
B = sH.prototype;
B.L = function() {
  tH(this);
  sH.J.L.call(this)
};

function uH(a, b) {
  switch (b.type) {
  case "mousedown":
  case "mouseover":
  case "mouseout":
  case "click":
    a.X = p;
    break;
  case "keydown":
    a.X = m
  }
}
B.wW = function(a) {
  uH(this, a);
  var b = a.target;
  a = "focus" == a.type || a.type == vc;
  var c = this.o && Si(this.o.b, b);
  this.X || !a || c ? (this.O = a, this.B = b) : this.B = n;
  tH(this);
  this.K.start(this.A ? 50 : 300)
};
B.vW = function(a) {
  uH(this, a);
  var b = a.target;
  a = "mousedown" == a.type || "click" == a.type;
  b = this.o && Si(this.o.b, b);
  a && b || (this.B = n, tH(this), this.K.start(this.A ? 50 : 300))
};

function tH(a) {
  a.F && (qe(a.F), a.F = 0, a.A = n)
}
B.xW = function() {
  if (!this.B) vH(this), this.A = n;
  else if (!(this.A && this.o && Si(this.o.G(), this.B))) {
    var a = Yi(this.B, function(a) {
      return a.getAttribute && (a.getAttribute("data-tooltip-contained") || a.getAttribute("data-tooltip") || a.b || a.getAttribute("data-tooltip-html")) && !a.getAttribute("data-tooltip-suspended")
    }, m),
        b = p;
    this.A && this.A != a && (vH(this), this.A = n, b = m);
    if (!this.A && a && (this.A = a, iga(this, a))) {
      var c = fj;
      if (a.getAttribute("data-tooltip-contained")) for (var d = Mt("jfk-tooltip-data", a), e = 0; e < d.length; e++) {
        if (d[e].parentNode == a) {
          c = d[e].cloneNode(m);
          break
        }
      } else c = ega(a);
      var d = a.getAttribute("data-tooltip-align"),
          e = a.getAttribute("data-tooltip-class"),
          f = a.getAttribute("data-tooltip-offset"),
          f = sv(eH(f)) ? -1 : Number(f);
      if (!b && (a = a.getAttribute("data-tooltip-delay"), a = Math.max(0, a - 300))) {
        this.F = pe(F(this.Rz, this.A, c, d, f, e), a, this);
        return
      }
      this.Rz(this.A, c, d, f, e)
    }
  }
};

function iga(a, b) {
  return b.getAttribute("data-tooltip-only-on-overflow") && b.offsetWidth >= b.scrollWidth && b.offsetHeight >= b.scrollHeight || a.O && "mouse" == b.getAttribute("data-tooltip-trigger") ? p : m
}
B.Rz = function(a, b, c, d, e) {
  this.F = 0;
  if (!this.o) {
    this.o = new mH(this.da);
    vH(this);
    this.da.Sa().body.appendChild(this.o.G());
    this.dc(this.o);
    this.D = new nH(aH(), m);
    this.D.Ht = m;
    var f = this.D,
        h = this.o.A;
    f.b = this.o.G();
    f.A = h
  }
  t: {
    if (c) switch (c.toLowerCase().split(",")[1]) {
    case "l":
      f = 0;
      break t;
    case "r":
      f = 1;
      break t
    }
    f = 2
  }
  c = dga(c);oH(this.D, c, f, k, d);mv(this.o.G(), "jfk-tooltip-hide");this.H != e && (this.H && !sv(eH(this.H)) && mv(this.o.G(), this.H), sv(eH(e)) || nv(this.o.G(), e), this.H = e);hv(this.o.G(), 0, 0);
  if (b instanceof cj) qH(this.o.b, b);
  else
  for (Ii(this.o.b); d = b.firstChild;) this.o.b.appendChild(d);this.D.Ug(a);this.D.Ua(n, 0)
};

function vH(a) {
  a.o && nv(a.o.G(), "jfk-tooltip-hide")
}
var wH = {};

function xH(a, b) {
  var c;
  c = '"' == a.charAt(0) ? a.slice(1, a.indexOf('"', 1)) : -1 != a.indexOf(" <") ? a.slice(0, a.indexOf(" <")) : a;
  return rH(c, a, b)
}
var yH = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    jga = /[\x00\x22\x27\x3c\x3e]/g;

function zH(a) {
  return gga[a]
}
function AH(a) {
  return hga[a]
}
function BH(a, b) {
  var c = a.getAttribute("aria-" + b);
  return c == n || c == k ? t : String(c)
}
var CH = {},
    kga = /^[-.%_!# a-zA-Z0-9]+$/;

function DH(a) {
  return a instanceof QG && a.constructor === QG && a.b === sG ? t : "type_error:Const"
}
function EH() {
  var a = {},
      b = Mj.M(),
      c = wo(R()),
      d = c && c.isEnabled();
  b.forEach(function(c) {
    if (b.Af(c) || d && Rr(b, c.getId())) a[c.getId()] = m
  });
  return a
}
var FH = p;

function lga() {
  var a = R();
  Ir(a).b("Refreshing Google Calendar...");
  Rq(a).b(Ca, function() {
    GH()
  })
}
var HH = {
  cn: "http://ditu.google.cn/maps",
  ad: "http://maps.google.ad/maps",
  ae: "http://maps.google.ae/maps",
  as: "http://maps.google.as/maps",
  at: "http://maps.google.at/maps",
  ba: "http://maps.google.ba/maps",
  be: "http://maps.google.be/maps",
  bf: "http://maps.google.bf/maps",
  bg: "http://maps.google.bg/maps",
  bi: "http://maps.google.bi/maps",
  bj: "http://maps.google.bj/maps",
  bs: "http://maps.google.bs/maps",
  ca: "http://maps.google.ca/maps",
  cd: "http://maps.google.cd/maps",
  cf: "http://maps.google.cf/maps",
  cg: "http://maps.google.cg/maps",
  ch: "http://maps.google.ch/maps",
  ci: "http://maps.google.ci/maps",
  cl: "http://maps.google.cl/maps",
  cm: "http://maps.google.cm/maps",
  ao: "http://maps.google.co.ao/maps",
  bw: "http://maps.google.co.bw/maps",
  ck: "http://maps.google.co.ck/maps",
  cr: "http://maps.google.co.cr/maps",
  id: "http://maps.google.co.id/maps",
  "in": "http://maps.google.co.in/maps",
  jp: "http://maps.google.co.jp/maps",
  ke: "http://maps.google.co.ke/maps",
  kr: "http://maps.google.co.kr/maps",
  ls: "http://maps.google.co.ls/maps",
  ma: "http://maps.google.co.ma/maps",
  mz: "http://maps.google.co.mz/maps",
  nz: "http://maps.google.co.nz/maps",
  th: "http://maps.google.co.th/maps",
  tz: "http://maps.google.co.tz/maps",
  ug: "http://maps.google.co.ug/maps",
  gb: "http://maps.google.co.uk/maps",
  ve: "http://maps.google.co.ve/maps",
  vi: "http://maps.google.co.vi/maps",
  za: "http://maps.google.co.za/maps",
  zm: "http://maps.google.co.zm/maps",
  zw: "http://maps.google.co.zw/maps",
  ag: "http://maps.google.com.ag/maps",
  ai: "http://maps.google.com.ai/maps",
  ar: "http://maps.google.com.ar/maps",
  au: "http://maps.google.com.au/maps",
  bd: "http://maps.google.com.bd/maps",
  bh: "http://maps.google.com.bh/maps",
  bn: "http://maps.google.com.bn/maps",
  bo: "http://maps.google.com.bo/maps",
  br: "http://maps.google.com.br/maps",
  bz: "http://maps.google.com.bz/maps",
  co: "http://maps.google.com.co/maps",
  cu: "http://maps.google.com.cu/maps",
  "do": "http://maps.google.com.do/maps",
  ec: "http://maps.google.com.ec/maps",
  eg: "http://maps.google.com.eg/maps",
  et: "http://maps.google.com.et/maps",
  fj: "http://maps.google.com.fj/maps",
  gh: "http://maps.google.com.gh/maps",
  gi: "http://maps.google.com.gi/maps",
  gt: "http://maps.google.com.gt/maps",
  hk: "http://maps.google.com.hk/maps",
  jm: "http://maps.google.com.jm/maps",
  kh: "http://maps.google.com.kh/maps",
  kw: "http://maps.google.com.kw/maps",
  lb: "http://maps.google.com.lb/maps",
  ly: "http://maps.google.com.ly/maps",
  mt: "http://maps.google.com.mt/maps",
  mx: "http://maps.google.com.mx/maps",
  my: "http://maps.google.com.my/maps",
  na: "http://maps.google.com.na/maps",
  ng: "http://maps.google.com.ng/maps",
  ni: "http://maps.google.com.ni/maps",
  np: "http://maps.google.com.np/maps",
  om: "http://maps.google.com.om/maps",
  pa: "http://maps.google.com.pa/maps",
  pe: "http://maps.google.com.pe/maps",
  pg: "http://maps.google.com.pg/maps",
  ph: "http://maps.google.com.ph/maps",
  pr: "http://maps.google.com.pr/maps",
  py: "http://maps.google.com.py/maps",
  qa: "http://maps.google.com.qa/maps",
  sa: "http://maps.google.com.sa/maps",
  sb: "http://maps.google.com.sb/maps",
  sg: "http://maps.google.com.sg/maps",
  sh: "http://maps.google.com.sh/maps",
  sl: "http://maps.google.com.sl/maps",
  sm: "http://maps.google.com.sm/maps",
  sv: "http://maps.google.com.sv/maps",
  tw: "http://maps.google.com.tw/maps",
  ua: "http://maps.google.com.ua/maps",
  uy: "http://maps.google.com.uy/maps",
  vc: "http://maps.google.com.vc/maps",
  cv: "http://maps.google.cv/maps",
  cz: "http://maps.google.cz/maps",
  de: "http://maps.google.de/maps",
  dj: "http://maps.google.dj/maps",
  dk: "http://maps.google.dk/maps",
  dm: "http://maps.google.dm/maps",
  dz: "http://maps.google.dz/maps",
  ee: "http://maps.google.ee/maps",
  es: "http://maps.google.es/maps",
  fi: "http://maps.google.fi/maps",
  fm: "http://maps.google.fm/maps",
  fr: "http://maps.google.fr/maps",
  ga: "http://maps.google.ga/maps",
  ge: "http://maps.google.ge/maps",
  gg: "http://maps.google.gg/maps",
  gl: "http://maps.google.gl/maps",
  gm: "http://maps.google.gm/maps",
  gp: "http://maps.google.gp/maps",
  gr: "http://maps.google.gr/maps",
  gy: "http://maps.google.gy/maps",
  hn: "http://maps.google.hn/maps",
  hr: "http://maps.google.hr/maps",
  ht: "http://maps.google.ht/maps",
  hu: "http://maps.google.hu/maps",
  ie: "http://maps.google.ie/maps",
  im: "http://maps.google.im/maps",
  iq: "http://maps.google.iq/maps",
  is: "http://maps.google.is/maps",
  it: "http://maps.google.it/maps",
  je: "http://maps.google.je/maps",
  jo: "http://maps.google.jo/maps",
  ki: "http://maps.google.ki/maps",
  la: "http://maps.google.la/maps",
  li: "http://maps.google.li/maps",
  lk: "http://maps.google.lk/maps",
  lt: "http://maps.google.lt/maps",
  lu: "http://maps.google.lu/maps",
  lv: "http://maps.google.lv/maps",
  md: "http://maps.google.md/maps",
  me: "http://maps.google.me/maps",
  mg: "http://maps.google.mg/maps",
  mk: "http://maps.google.mk/maps",
  ml: "http://maps.google.ml/maps",
  mn: "http://maps.google.mn/maps",
  ms: "http://maps.google.ms/maps",
  mu: "http://maps.google.mu/maps",
  mv: "http://maps.google.mv/maps",
  mw: "http://maps.google.mw/maps",
  ne: "http://maps.google.ne/maps",
  nf: "http://maps.google.nf/maps",
  nl: "http://maps.google.nl/maps",
  no: "http://maps.google.no/maps",
  nr: "http://maps.google.nr/maps",
  nu: "http://maps.google.nu/maps",
  pl: "http://maps.google.pl/maps",
  pn: "http://maps.google.pn/maps",
  pt: "http://maps.google.pt/maps",
  pw: "http://maps.google.pw/maps",
  ro: "http://maps.google.ro/maps",
  rs: "http://maps.google.rs/maps",
  ru: "http://maps.google.ru/maps",
  rw: "http://maps.google.rw/maps",
  sc: "http://maps.google.sc/maps",
  se: "http://maps.google.se/maps",
  si: "http://maps.google.si/maps",
  sk: "http://maps.google.sk/maps",
  sn: "http://maps.google.sn/maps",
  so: "http://maps.google.so/maps",
  st: "http://maps.google.st/maps",
  sx: "http://maps.google.sx/maps",
  td: "http://maps.google.td/maps",
  tg: "http://maps.google.tg/maps",
  tk: "http://maps.google.tk/maps",
  tl: "http://maps.google.tl/maps",
  tn: "http://maps.google.tn/maps",
  to: "http://maps.google.to/maps",
  tt: "http://maps.google.tt/maps",
  vg: "http://maps.google.vg/maps",
  vu: "http://maps.google.vu/maps",
  ws: "http://maps.google.ws/maps",
  "*": "http://maps.google.com/maps"
},
    IH = /</g,
    JH = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    mga = /^(?!style|on|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|src|usemap)(?:[a-z0-9_$:-]*)$/i,
    nga = /^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;

function oga(a) {
  if (a != n) switch (a.uo) {
  case 1:
    return 1;
  case -1:
    return -1;
  case 0:
    return 0
  }
  return n
}
var KH = {};

function LH(a) {
  if (!fb(a)) return String(a);
  if (a instanceof Jm) {
    if (a.Ce === Im) return a.content;
    if (a.Ce === MG) return I(a.content)
  }
  return "zSoyz"
}

function MH(a, b, c) {
  c || (c = b instanceof cj ? YG(b) : b);
  a.removeAttribute("title");
  a.removeAttribute("data-tooltip-contained");
  a.removeAttribute("data-tooltip");
  a.removeAttribute("data-tooltip-html");
  b ? (b instanceof cj ? a.b = b : (a.setAttribute("data-tooltip", b), a.b = n), a.setAttribute("aria-label", c)) : (a.b = n, a.removeAttribute("aria-label"));
  a = wi(a) || wi();
  b = gb(a.Sa());
  wH[b] || (wH[b] = new sH(a))
}
function NH() {
  this.b = CH
}
NH.prototype.xs = m;
NH.prototype.Ll = y(t);
NH.prototype.UF = m;
NH.prototype.qj = y(1);

function pga(a, b, c, d, e) {
  this.b = a;
  this.B = b;
  this.D = c;
  this.o = d;
  this.A = e
}
var OH = {
  '"': '\\"',
  "\\": "\\\\",
  "/": "\\/",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "\t": "\\t",
  "\x0B": "\\u000b"
};

function qga() {
  var a = Zo.M();
  if (Fc(a.b)) return n;
  var b = ["perf", "perf", IG(a)];
  a.P(new JG(Hc(a.b)));
  a.reset();
  return [b]
}

function rga() {
  var a = HG(Yp, EH());
  if (a.length) {
    var a = ["load", "emf", kt(a, -60), "ctz", ot(), "hl", "en"],
        b = wo(R());
    b && b.isEnabled() && (a.push("ldet", "descrip"), a.push("ldet", "op-pub"), a.push("ldet", "crm"));
    for (var b = Eq(), c = 0; c < b.length; ++c) a.push("lef", b[c]);
    return [a]
  }
  return n
}
function PH(a) {
  gz.test(a) && (a = I(a));
  var b = hz(a);
  return new fz(a, b)
}
function QH(a, b) {
  this.b = a instanceof ti ? a : new ti(a, b)
}
H(QH, dH);
QH.prototype.Ua = function(a, b, c, d) {
  var e;
  e = yi(a);
  var f = e.body;
  e = e.documentElement;
  e = new ti(f.scrollLeft || e.scrollLeft, f.scrollTop || e.scrollTop);
  f = this.b.x + e.x;
  e = this.b.y + e.y;
  var h = ev(a),
      f = f - h.x;
  e -= h.y;
  kv(new ti(f, e), a, b, c, n, n, d)
};

function RH(a, b, c) {
  this.element = a;
  this.b = b;
  this.C = c
}
H(RH, dH);
RH.prototype.Ua = function(a, b, c) {
  qv(this.element, this.b, a, b, k, c, this.C)
};

function sga(a, b, c, d) {
  var e = ci.M().get(c);
  e && 0 !== e.type && 6 !== e.type ? b = xH(b, c) : (e = b.match(/^\"?([^\s\"]*)/), b = rH(e ? e[1] : b, b, c));
  2 === a && (b = "<s>" + b + "</s>");
  d && (b = "(" + b + ")");
  1 !== a && (b = "<font color=gray>" + b + "</font>");
  return b
}
function SH(a) {
  var b = ci.M().get(a);
  if (b && b.Pb && 0 != b.type) return b.Pb;
  if ((a = jg(ig.M(), a)) && !TG(a)) return Ju(a)
}
function TH() {
  var a = Jp.M();
  "g" == a.wc ? lga() : (FH || O(a, "p", TH), FH = m)
}
var UH;

function VH(a) {
  var b = S(R()).getString("country", "US").toLowerCase(),
      b = (HH[b] || HH["*"]) + "?hl=" + encodeURIComponent("en");
  a && (b += "&q=" + encodeURIComponent(a));
  return b + "&source=calendar"
}
var WH = n;

function tga() {
  this.b = encodeURIComponent("calendar")
}
function XH(a, b, c) {
  var d = [];
  d.push("s=" + a.b);
  d.push("a=" + encodeURIComponent(b));
  d.push("c=" + encodeURIComponent(c));
  a = "//clients2.google.com/availability/?" + d.join("&");
  a = a + "&tm=" + (new Date).getTime();
  a += "&zx=";
  a += Math.random();
  (new Image).src = a
}

function uga(a) {
  a = vp(a).B;
  if (!a) return t;
  a = a.replace(/\bplus\b/, "apis");
  var b = "u/" + (Dv() || 0) + "/";
  return a + b + "_/events/widget"
}
function YH(a, b) {
  this.content = String(a);
  this.uo = b != n ? b : n
}
H(YH, Jm);
YH.prototype.Ce = MG;

function ZH(a) {
  return a != n && a.Ce === Im ? a : a instanceof cj ? Nm(YG(a), a.qj()) : Nm(I(String(String(a))), oga(a))
}
function $H(a, b, c, d) {
  d = (d || wi()).createElement("DIV");
  a = LH(a(b || KH, k, c));
  d.innerHTML = a;
  return 1 == d.childNodes.length && (a = d.firstChild, 1 == a.nodeType) ? a : d
}

function vga(a) {
  function b(a) {
    Za(a) ? Bb(a, b) : (a = PG(a), d += YG(a), a = a.qj(), 0 == c ? c = a : 0 != a && c != a && (c = n))
  }
  var c = 0,
      d = t;
  Bb(arguments, b);
  return ej(d, c)
}
var aI = /^[a-zA-Z0-9-]+$/,
    bI = n;

function cI(a) {
  return new pga(a.getStatus(), Je(a, ha), Je(a, "Location"), Je(a, "X-Auto-Login"), Je(a, "X-Cal-Session"))
}
function dI(a) {
  return decodeURIComponent(String(a).replace(/^(?:(?:[^:\/]+:)?\/\/[^\/]*)/, t).replace(/^.*\/|[?#].*$/g, t))
}
var wga = /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,
    xga = /#|$/;

function yga() {}

function eI(a, b, c) {
  switch (typeof b) {
  case "string":
    fI(b, c);
    break;
  case "number":
    c.push(isFinite(b) && !isNaN(b) ? b : "null");
    break;
  case "boolean":
    c.push(b);
    break;
  case "undefined":
    c.push("null");
    break;
  case Ha:
    if (b == n) {
      c.push("null");
      break
    }
    if (Za(b)) {
      var d = b.length;
      c.push("[");
      for (var e = t, f = 0; f < d; f++) c.push(e), eI(a, b[f], c), e = ",";
      c.push("]");
      break
    }
    c.push("{");
    d = t;
    for (e in b) Object.prototype.hasOwnProperty.call(b, e) && (f = b[e], typeof f != Ea && (c.push(d), fI(e, c), c.push(":"), eI(a, f, c), d = ","));
    c.push("}");
    break;
  case Ea:
    break;
  default:
    g(Error("Unknown type: " + typeof b))
  }
}
function fI(a, b) {
  b.push('"', a.replace(Jaa, function(a) {
    if (a in OH) return OH[a];
    var b = a.charCodeAt(0),
        e = "\\u";
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
    return OH[a] = e + b.toString(16)
  }), '"')
}
function gI(a, b, c) {
  if ($a(a)) try {
    Bb(a, b, c)
  } catch (d) {
    d !== ae && g(d)
  } else {
    a = ce(a);
    try {
      for (;;) b.call(c, a.next(), k, a)
    } catch (e) {
      e !== ae && g(e)
    }
  }
}
function hI(a) {
  var b = parseInt(a.b["goo.rtc"], 10),
      c = a.b["goo.rtcParam"];
  a = a.b["goo.rtcDomain"];
  var d = R();
  return new oD(d, b, c, a)
}

function iI(a, b, c) {
  var d = c && c.Wb().uid || b && b.mc,
      e = c && c.ay().uid || b && b.Bc;
  if (a == d || a == e) return p;
  if (c && c.C.Z || b && "false" == b.b["goo.hide_guest_list"]) return m;
  a = b ? b.o : 0;
  c && (c = c.C.o, a += c.vP().length - c.oB().length);
  return 100 < a
}
function jI(a) {
  setTimeout(function() {
    var a = HG(Yp, EH());
    a.length && (a = ["emf", kt(a), "ctz", ot(), "hl", "en"], Cf(Af(R()), "load", a, 0, D))
  }, a)
}

function zga() {
  6E5 !== GC && (GC = 6E5, C(HC) && (window.clearInterval(HC), HC = window.setInterval(F(MC, n, n, n, k), GC)));
  KC(rga);
  KC(qga);
  var a = 6E5 * Math.random() + 12E4;
  window.setTimeout(F(LC, m, k), a)
}
function Aga(a, b, c, d, e, f, h, l) {
  var q = R();
  Rq(q).b(Ba, function() {
    var q = PH(a);
    return kI(q, b, c, d, e, f, h, l)
  })
}
function lI(a, b) {
  this.b = a instanceof ti ? a : new ti(a, b)
}
H(lI, dH);
lI.prototype.Ua = function(a, b, c, d) {
  qv(pj(a), 0, a, b, this.b, c, n, d)
};

function mI(a, b) {
  QH.call(this, a, b)
}
H(mI, QH);
mI.prototype.A = 0;
mI.prototype.o = Oa("A");
mI.prototype.Ua = function(a, b, c, d) {
  var e = pj(a),
      e = gv(e),
      f;
  f = wi(a);
  f = Di(f.b);
  f = new ti(this.b.x + f.scrollLeft, this.b.y + f.scrollTop);
  var h = b,
      l = kv(f, a, h, c, e, 10, d);
  if (0 != (l & 496)) {
    if (l & 16 || l & 32) h ^= 2;
    if (l & 64 || l & 128) h ^= 1;
    l = kv(f, a, h, c, e, 10, d);
    0 != (l & 496) && kv(f, a, b, c, e, this.A, d)
  }
};

function nI(a, b, c, d) {
  RH.call(this, a, b);
  this.A = c ? 5 : 0;
  this.B = d || k
}
H(nI, RH);
nI.prototype.D = w("A");
nI.prototype.o = Oa("A");
nI.prototype.Ua = function(a, b, c, d) {
  var e = qv(this.element, this.b, a, b, n, c, 10, d, this.B);
  if (e & 496) {
    var f = oI(e, this.b);
    b = oI(e, b);
    e = qv(this.element, f, a, b, n, c, 10, d, this.B);
    e & 496 && (f = oI(e, f), b = oI(e, b), qv(this.element, f, a, b, n, c, this.A, d, this.B))
  }
};

function oI(a, b) {
  a & 48 && (b ^= 2);
  a & 192 && (b ^= 1);
  return b
}
function Bga(a) {
  var b = $w.M().b;
  b && b.FB(a)
}
function Cga(a) {
  var b = R();
  Rq(b).b(Ja, function() {
    pI(a)
  })
}

function Dga(a, b, c, d, e, f, h, l, q, r, s, u, x, z, A, G) {
  var M = R();
  Rq(M).b(Ja, function() {
    Ega(a, b, c, d, e, f, h, l, q, r, s, u, x, z, A, G)
  })
}
var Fga = /^([^:]+):(?:\S|$)(.*)/;

function Gga(a, b, c, d, e, f) {
  var h = R();
  Rq(h).b(ya, function() {
    Hga(a, b, c, d, e, f)
  })
}
function Iga(a) {
  var b = R();
  Rq(b).b(ya, function() {
    Jga(a)
  })
}
function Kga(a, b) {
  var c = R();
  Rq(c).b(ya, function() {
    return Lga(a, b)
  })
}
function Mga(a, b, c, d, e, f) {
  Rq(R()).b(ya, function() {
    Nga(a, b, c, d, e, f)
  })
}
function Oga(a, b) {
  var c = R();
  Rq(c).b(ya, function() {
    Pga(a, b)
  })
}

function qI(a, b, c) {
  var d = R();
  Rq(d).b(ya, function() {
    rI(a, b, !! c)
  })
}
function sI() {
  var a = R();
  Rq(a).b(ya, function() {
    var a = Qga();
    rI(a, 0, p)
  })
}
function Rga(a) {
  if (vt != a) if (a = (new Date).getTime(), UH) a >= UH && TH();
  else {
    var b = 36E5 * (3 + 2 * Math.random());
    UH = a + b
  }
}
function tI(a) {
  if (!WH) return VH(a);
  var b = WH.replace("{q}", encodeURIComponent(a)),
      b = b.replace("{hl}", encodeURIComponent("en"));
  0 <= b.indexOf("{googUrl}") && (a = VH(a), b = b.replace("{googUrl}", encodeURIComponent(a)));
  return b
}
function Sga(a) {
  WH = a
}

function uI(a) {
  for (var b = Eq(), c = {}, d = 0; d < b.length; ++d) c[b[d]] = 1;
  b = [];
  for (d = 0; d < a.length; ++d) c[a[d]] && b.push(a[d]);
  for (var c = ct(a, b), d = b.length, e = 0; e < d; ++e) Wr(b[e]);
  var f = Dq();
  if (f !== k) {
    a = [];
    for (e = 0; e < d; ++e) a.push(new et(b[e], f[0], f[1], 1));
    a = dt(a);
    st(a, p, k, k)
  } else c = a;
  0 < c.length && qt(c)
}

function Tga(a) {
  if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return p;
  switch (a.keyCode) {
  case 18:
  case 20:
  case 93:
  case 17:
  case 40:
  case 35:
  case 27:
  case 36:
  case 45:
  case 37:
  case 224:
  case 91:
  case 144:
  case 12:
  case 34:
  case 33:
  case 19:
  case 255:
  case 44:
  case 39:
  case 145:
  case 16:
  case 38:
  case 224:
  case 92:
    return p;
  case 0:
    return !hc;
  default:
    return 166 > a.keyCode || 183 < a.keyCode
  }
}
function Uga(a, b, c) {
  Ks(new Js, a, b, c)
}
function vI() {
  this.tx = new tga;
  this.zs = p
}
vI.prototype.enable = function() {
  this.zs = m
};

function wI() {
  return $q() && !! gbar.addLink
}
var xI = [, "Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "Adar I", "Adar", "Nisan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"],
    yI = [, "Muharram", "Safar", "Rabi\u02bb I", "Rabi\u02bb II", "Jumada I", "Jumada II", "Rajab", "Sha\u02bbban", "Ramadan", "Shawwal", "Dhu\u02bbl-Qi\u02bbdah", "Dhu\u02bbl-Hijjah"],
    zI = [, "Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "Dhu\u02bbl-Q.", "Dhu\u02bbl-H."],
    AI = [, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    BI = [, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function Vga() {
  var a = window,
      b = a.document.getElementById("tip");
  b || (b = a.document.body, a = a.document.createElement("div"), b.appendChild(a), b = a, b.id = "tip");
  return b
}
function CI(a) {
  1 == a ? window.location.reload(m) : (a = window.location.href.replace(/#.*/, ic ? "?" : t), window.location.href = a)
}
function Wga(a, b) {
  var c = R();
  Rq(c).b(Fa, function() {
    cx();
    Tq.b ? Tq.b(a, !! b) : Tq.o = a
  })
}

function DI(a, b) {
  var c = ru(Yp, a);
  c && (c.setTitle(b), Yp.P(iq))
}
function EI(a, b, c, d, e) {
  if (a = ru(Yp, a)) mG(a, b, c, d, e), Yp.A = {}, Yp.P(iq)
}
function FI(a) {
  this.b = a
}
H(FI, uc);
FI.prototype.init = function() {
  GI(this);
  var a = Wa("gapi.load");
  a && (Td(this.b).isEnabled(40) && a("card", E(this.o, this)), Td(this.b).isEnabled(32) || a("evwidget", E(this.A, this)))
};

function GI(a) {
  var b = Wa("gapi.config");
  if (b) {
    var c = Dv();
    b.update("googleapis.config/sessionIndex", c ? c.toString() : "0");
    (c = vp(a.b).B) && -1 == c.indexOf("plus.google.com") && b.update("iframes/:socialhost:", c);
    c = Nh(Ph(a.b)).get("locale");
    b.update("lang", c);
    b.update("gwidget/lang", c);
    b.update("iframes/evwidget/url", uga(a.b));
    b.update("card/source", "calendar")
  }
}
FI.prototype.o = function() {
  GI(this);
  var a = Wa("gapi.card");
  a && a.watch()
};
FI.prototype.A = function() {
  GI(this)
};

function HI(a, b, c) {
  for (var d = dn(a), e = p, f = 0; f < d.length; f++) d[f] == b && (Ov(d, f--, 1), e = m);
  e && (d.push(c), a.className = d.join(" "))
}
function II(a) {
  a != n && a.Ce === Ufa ? a = String(a).replace(yH, zH) : (a = String(a), a = nga.test(a) ? a.replace(yH, zH) : "#zSoyz");
  return a
}
function JI(a) {
  a != n && a.Ce === Tfa ? a = a.content.replace(/([^"'\s])$/, "$1 ") : (a = String(a), a = mga.test(a) ? a : "zSoyz");
  return a
}

function KI(a) {
  a != n && a.Ce === Im ? (a = String(a.content).replace(JH, t).replace(IH, "&lt;"), a = String(a).replace(jga, AH)) : a = I(String(a));
  return a
}
function LI(a, b) {
  return $H(a, b, k, new xi(k))
}
function MI(a) {
  var b = "value" in a ? a.value : "textContent" in a ? a.textContent : a.innerHTML,
      c = t;
  eg.test(b) ? c = "rtl" : dg.test(b) && (c = "ltr");
  a.dir = c
}
function NI(a) {
  alert(Ij(a))
}
function OI(a) {
  return Kg(a.getFullYear(), a.getMonth() + 1, a.getDate())
}
function OG() {}
OG.prototype.vb = function(a, b) {
  b && MH(a, b, k)
};

function PI(a, b) {
  var c = t;
  b && (c = b.id);
  Ej(a, "activedescendant", c)
}
function QI(a, b, c) {
  var d = sj(a),
      e = sj(b),
      f = Zu(b),
      h = d.x - e.x - f.left,
      d = d.y - e.y - f.top,
      e = b.clientWidth - a.offsetWidth;
  a = b.clientHeight - a.offsetHeight;
  var f = b.scrollLeft,
      l = b.scrollTop;
  c ? (f += h - e / 2, l += d - a / 2) : (f += Math.min(h, Math.max(h - e, 0)), l += Math.min(d, Math.max(d - a, 0)));
  c = new ti(f, l);
  b.scrollLeft = c.x;
  b.scrollTop = c.y
}
function RI(a, b) {
  var c = a.style[xb(b)];
  return "undefined" !== typeof c ? c : a.style[kj(a, b)] || t
}

function SI() {
  if (bI) return bI;
  bI = [];
  for (var a = 1; 66 >= a; a++) bI.push(a);
  return bI
}
function TI(a) {
  return new Qg(a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds())
}
function UI(a, b) {
  P.call(this);
  this.A = a;
  b && (this.b = b)
}
H(UI, P);
UI.prototype.o = function(a) {
  var b;
  try {
    b = cI(a)
  } catch (c) {
    return p
  }
  return VI(this, b)
};

function Xga(a, b) {
  if (301 != a && 302 != a) return p;
  if (!b) return m;
  if (!vf(b)) return p;
  var c = dI(b);
  return "Login" == c || "ServiceLogin" == c || "logout" == c || "Logout" == c
}

function VI(a, b) {
  var c = b.b,
      c = !b.B && (J && 200 == c || 0 >= c) || 200 == b.b && b.o != n || Xga(b.b, b.D),
      d = p,
      d = a.A ? $e("CALH") || $e("CALHS") || $e("CALHP") : $e("CAL"),
      e = !! $e("SID"),
      f;
  (f = b.A) ? (a.b || (a.b = f), f = a.b != f) : f = p;
  return f || c && !(d && e)
}
function WI() {
  var a = uf.match(vv);
  return a && a[0] || n
}
function XI() {
  var a = window.location.href.match(wga),
      b = a[4],
      a = a[5],
      a = a.replace(/\/b\/[^/]+/, t),
      b = b + a;
  return b.substring(0, b.lastIndexOf("/") + 1 || b.length)
}
var Yga = {
  Sm: "BIRTHDAY",
  Fu: "ANNIVERSARY",
  Q_: "OTHER",
  yq: "CUSTOM",
  zq: "SELF"
};

function YI(a, b, c, d, e, f, h) {
  var l = new De;
  tG.push(l);
  b && l.Qd.add(wa, b, p, k, k);
  l.Qd.add("ready", l.sF, m, k, k);
  f && (l.D = Math.max(0, f));
  h && (l.Ia = h);
  l.send(a, c, d, e);
  return l
}
function ZI(a, b) {
  var c = a.search(xga),
      d;
  t: {
    d = 0;
    for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
      var f = a.charCodeAt(d - 1);
      if (38 == f || 63 == f) if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break t;
      d += e + 1
    }
    d = -1
  }
  if (0 > d) return n;e = a.indexOf("&", d);
  if (0 > e || e > c) e = c;d += b.length + 1;
  return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
}

function Zga(a, b) {
  return te(2 == arguments.length ? ve([a], arguments[1], 0) : ve([a], arguments, 1))
}
function $I(a, b) {
  P.call(this);
  this.o = a || 1;
  this.b = b || Va;
  this.A = E(this.mM, this);
  this.B = ib()
}
H($I, P);
B = $I.prototype;
B.enabled = p;
B.La = n;
B.setInterval = function(a) {
  this.o = a;
  this.La && this.enabled ? (this.stop(), this.start()) : this.La && this.stop()
};
B.mM = function() {
  if (this.enabled) {
    var a = ib() - this.B;
    0 < a && a < .8 * this.o ? this.La = this.b.setTimeout(this.A, this.o - a) : (this.La && (this.b.clearTimeout(this.La), this.La = n), this.P("tick"), this.enabled && (this.La = this.b.setTimeout(this.A, this.o), this.B = ib()))
  }
};
B.start = function() {
  this.enabled = m;
  this.La || (this.La = this.b.setTimeout(this.A, this.o), this.B = ib())
};
B.stop = function() {
  this.enabled = p;
  this.La && (this.b.clearTimeout(this.La), this.La = n)
};
B.L = function() {
  $I.J.L.call(this);
  this.stop();
  delete this.b
};

function aJ(a) {
  var b = [];
  eI(new yga, a, b);
  return b.join(t)
}
function $ga() {
  var a = {},
      b = window.location.href.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/);
  if (b && b[7]) for (var b = b[7].split(/&/g), c = 0, d = b.length; c < d; ++c) {
    var e = b[c],
        f = e.indexOf("="),
        h;
    0 <= f ? (h = e.substring(0, f), e = e.substring(f + 1)) : (h = e, e = t);
    h = decodeURIComponent(h.replace(/\+/g, " "));
    e = decodeURIComponent(e.replace(/\+/g, " "));
    (a[h] || (a[h] = [])).push(e)
  }
  return a
}
function aha(a) {
  Rh(R()).D = a
}

function bha(a) {
  var b = Rh(R());
  b.b != a && (b.b = a, b.P("a"))
}
function cha(a, b) {
  var c = arguments,
      d = c.length;
  return function() {
    var a;
    d && (a = c[d - 1].apply(this, arguments));
    for (var b = d - 2; 0 <= b; b--) a = c[b].call(this, a);
    return a
  }
}
function bJ(a, b, c) {
  b.b(a, c, k, k)
}
function dha(a, b, c) {
  for (var d = a.length, e = cb(a) ? a.split(t) : a, d = d - 1; 0 <= d; --d) d in e && b.call(c, e[d], d, a)
}
function cJ(a) {
  return a[a.length - 1]
}
function dJ(a) {
  for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  return b
}

function eJ(a, b) {
  a.length > b && (a = a.substring(0, b - 3) + "...");
  return a
}
function fJ(a, b) {
  return t + a + " (" + b + ")"
}
function eha(a) {
  return '"' + a + '" is not a valid email address.'
}
function fha(a) {
  return t + a + " is not a valid calendar"
};
(function() {
  function a(a) {
    this.t = {};
    this.tick = function(a, b, c) {
      var d = c != k ? c : (new Date).getTime();
      this.t[a] = [d, b];
      if (c == k) try {
        window.console.timeStamp("CSI/" + a)
      } catch (e) {}
    };
    this.tick("start", n, a)
  }
  var b;
  window.performance && (b = window.performance.timing);
  var c = b ? new a(b.responseStart) : new a;
  window.jstiming = {
    Timer: a,
    load: c
  };
  if (b) {
    var d = b.navigationStart,
        e = b.responseStart;
    0 < d && e >= d && (window.jstiming.srt = e - d)
  }
  if (b) {
    var f = window.jstiming.load;
    0 < d && e >= d && (f.tick("_wtsrt", k, d), f.tick("wtsrt_", "_wtsrt", e), f.tick("tbsd_", "wtsrt_"))
  }
  try {
    b = n, window.chrome && window.chrome.csi && (b = Math.floor(window.chrome.csi().pageT), f && 0 < d && (f.tick("_tbnd", k, window.chrome.csi().startE), f.tick("tbnd_", "_tbnd", d))), b == n && window.gtbExternal && (b = window.gtbExternal.pageT()), b == n && window.external && (b = window.external.pageT, f && 0 < d && (f.tick("_tbnd", k, window.external.startE), f.tick("tbnd_", "_tbnd", d))), b && (window.jstiming.pt = b)
  } catch (h) {}
})();
if (window.jstiming) {
  window.jstiming.eG = {};
  window.jstiming.iY = 1;
  var gJ = function(a, b, c) {
    var d = a.t[b],
        e = a.t.start;
    if (d && (e || c)) return d = a.t[b][0], c != k ? e = c : e = e[0], d - e
  },
      gha = function(a, b, c) {
      var d = t;
      window.jstiming.srt && (d += "&srt=" + window.jstiming.srt, delete window.jstiming.srt);
      window.jstiming.pt && (d += "&tbsrt=" + window.jstiming.pt, delete window.jstiming.pt);
      try {
        window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
      } catch (e) {}
      var f = window.chrome;
      if (f && (f = f.loadTimes)) {
        f().wasFetchedViaSpdy && (d += "&p=s");
        if (f().wasNpnNegotiated) {
          var d = d + "&npn=1",
              h = f().npnNegotiatedProtocol;
          h && (d += "&npnv=" + (encodeURIComponent || escape)(h))
        }
        f().wasAlternateProtocolAvailable && (d += "&apa=1")
      }
      var l = a.t,
          q = l.start,
          f = [],
          h = [],
          r;
      for (r in l) if ("start" != r && 0 != r.indexOf("_")) {
        var s = l[r][1];
        s ? l[s] && h.push(r + "." + gJ(a, r, l[s][0])) : q && f.push(r + "." + gJ(a, r))
      }
      delete l.start;
      if (b) for (var u in b) d += "&" + u + "=" + b[u];
      (b = c) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
      return [b, "?v=3", "&s=" + (window.jstiming.sn || "calendar") + "&action=", a.name, h.length ? "&it=" + h.join(",") : t, d, "&rt=", f.join(",")].join(t)
      },
      hJ = function(a, b, c) {
      a = gha(a, b, c);
      if (!a) return t;
      b = new Image;
      var d = window.jstiming.iY++;
      window.jstiming.eG[d] = b;
      b.onload = b.onerror = function() {
        window.jstiming && delete window.jstiming.eG[d]
      };
      b.src = a;
      b = n;
      return a
      };
  window.jstiming.report = function(a, b, c) {
    if ("prerender" == document.webkitVisibilityState) {
      var d = p,
          e = function() {
          if (!d) {
            b ? b.prerender = "1" : b = {
              prerender: "1"
            };
            var f;
            "prerender" == document.webkitVisibilityState ? f = p : (hJ(a, b, c), f = m);
            f && (d = m, document.removeEventListener("webkitvisibilitychange", e, p))
          }
          };
      document.addEventListener("webkitvisibilitychange", e, p);
      return t
    }
    return hJ(a, b, c)
  }
};

function iJ(a) {
  if (a = Ph(a).F) this.A = {
    e: a
  }
}
iJ.prototype.o = function(a, b) {
  var c = new window.jstiming.Timer(b);
  c.name = a;
  return new jJ(c, this.A)
};
iJ.prototype.report = function(a) {
  kJ(a, this.A)
};

function kJ(a, b) {
  window.jstiming.report(a, b, "https://www.google.com/csi")
}
function jJ(a, b) {
  this.La = a;
  this.o = b
}
H(jJ, uc);
jJ.prototype.report = function() {
  kJ(this.La, this.o);
  this.aa()
};
jJ.prototype.L = function() {
  this.o = this.La = n
};
jJ.prototype.b = function() {
  this.La.tick("ac", "start", k)
};
jJ.prototype.A = function() {
  this.La.tick("sc", "start", k)
};

function lJ(a) {
  return Jd(a, 812)
}
var hha = {
  sM: "onecal",
  eO: "resavail",
  OT: "render",
  uv: "ep",
  YB: "ep_save"
};
iJ.prototype.b = function() {
  return hha
};
Ou(812, function(a) {
  return new iJ(a)
});

function mJ(a, b, c, d) {
  var e = Mj.M();
  e.contains(a) ? e.Ke(a, m) : (a = ["cid", a, "ltyp", 0, "lact", "ADD", "cpub", b ? "true" : "false"], c && a.push("invEmailKey", c), c = Hr(R(), "Oops, we couldn't load your calendar. Please try again in a few minutes"), Cf(Af(R()), "editcallist", a, 8, d || D, c))
};

function nJ(a, b, c) {
  a = yD.M().o(a);
  var d = ig.M(),
      e = Mj.M();
  e.Eb();
  for (var f = 0; f < a.length; f++) if (a[f] && 0 != a[f].length) {
    var h = RG(d, a[f]);
    if (h) {
      var l = Hu(d, h),
          h = l ? l.uid : h;
      e.contains(h) ? e.Ke(h, m) : (h = ["cid", h, "ltyp", 0, "lact", "ADD", "hl", "en"], Cf(Af(R()), "editcallist", h, 0, function() {
        b && b()
      }))
    } else c && c(a[f], fha)
  }
  e.xb()
}
var iha = /(?:\bjavascript:)|(?:\.exe\b)|(?:\blocalhost\b)|(?:\b127\.0+\.0+\.0*1\b)/i;

function aG(a, b, c) {
  if (!pb(a)) return m;
  var d = ig.M(),
      e = yD.M().b(a, m);
  if (e) {
    var f = Hu(d, e);
    if (f) return mJ(f.uid, p, n, b), m;
    if (!(120 < e.length || iha.test(decodeURIComponent(yv(e).replace(/\+/g, " ").replace(/\s+/g, t))))) return nJ(e, b, c), m
  }
  if (Fga.test(a) && (f = a.indexOf(":"), e = a.substring(0, f), "http" != e && "https" != e)) {
    c = a;
    if (a = e ? RG(d, a.substring(f + 1) + "#" + e + "@group.v.calendar.google.com") : n) if (f = Hu(d, a)) c = f.uid;
    mJ(c, p, n, b);
    return m
  }
  if (a.match(/^\w[\w+\-\.]*$/)) return d = a + (Sw() ? "@" + Rw() : "@gmail.com"), nJ(d, b, c), m;
  c && c(a, eha);
  return p
};

function oJ(a, b) {
  fy.call(this, b.value);
  this.C = a;
  Px(this, b);
  this.clear();
  Dd(Ld(this.C, 802), this.EW, this)
}
H(oJ, fy);
B = oJ.prototype;
B.$ = function() {
  oJ.J.$.call(this);
  pJ(this);
  Z(this).I(this.G().form, "submit", this.gW)
};
B.L = function() {
  this.B && this.B.A(this.G().id);
  delete this.B;
  oJ.J.L.call(this)
};
B.gW = function(a) {
  a.preventDefault();
  this.LE()
};
B.LE = function() {
  var a = this.G();
  dp("cal_add", 0);
  var b = fp(),
      a = a.value,
      a = a.replace(/[,\s]+$/, t);
  aG(a, function() {
    b.b("cal_add_success")
  }, function(a, b) {
    NI(b(a))
  }) && (this.clear(), RB(Jd(this.C, 24), "Adding " + a))
};
B.EW = function(a) {
  this.B = a;
  pJ(this)
};

function pJ(a) {
  a.xa && a.B && a.B.B(a.G().id, p, E(a.LE, a))
};

function qJ() {}
B = qJ.prototype;
B.year = NaN;
B.month = NaN;
B.Y = NaN;
B.Zk = p;
B.yd = NaN;
B.pE = p;
B.hj = p;

function rJ(a) {
  a.pE || (a.o(), a.hj = m, a.pE = m)
}
function sJ(a, b) {
  rJ(a);
  a.yd = b;
  a.A(b);
  return a.hj ? a : n
};

function tJ() {}
H(tJ, qJ);
var jha = {
  0: 3,
  1: 4
},
    kha = {
    0: 10646,
    1: 10645
    };
tJ.prototype.B = NaN;
tJ.prototype.D = NaN;
tJ.prototype.A = function() {
  this.year = (30 * (this.yd - this.B) + kha[this.D]) / 10631 | 0;
  var a = this.b(this.year, 1, 1);
  this.month = (11 * (this.yd - a) + 330) / 325 | 0;
  a = this.b(this.year, this.month, 1);
  this.Y = this.yd - a + 1
};
tJ.prototype.b = function(a, b, c) {
  return this.B - 1 + 354 * (a - 1) + ((11 * a + jha[this.D]) / 30 | 0) + (29 * (b - 1) + b / 2 | 0) + c
};

function uJ() {}
H(uJ, tJ);
uJ.prototype.o = function() {
  this.B = 227015;
  this.D = 0
};

function vJ() {}
H(vJ, tJ);
vJ.prototype.o = function() {
  this.B = 227014;
  this.D = 1
};

function lha() {};

function wJ() {}
H(wJ, qJ);
wJ.prototype.B = n;
wJ.prototype.A = function(a) {
  var b;
  b = this.B;
  var c = Ru(b.b, {
    offset: a
  }, mha);
  0 > c && (c = -c - 2);
  if (-1 != c && c != b.b.length - 1) {
    var d = b.b[c].Dg / 100 | 0,
        e = b.b[c].Dg - 100 * d,
        f = e | 0;
    b = {
      year: d,
      month: f,
      Y: a - b.b[c].offset + 1,
      Zk: .3 < e - f
    }
  } else b = k;
  b ? (this.year = b.year, this.month = b.month, this.Y = b.Y, this.Zk = b.Zk) : this.D(a)
};
wJ.prototype.b = function(a, b, c, d) {
  var e;
  e = this.B;
  d = Ru(e.b, {
    Dg: 100 * a + b + (d ? .5 : 0)
  }, nha);
  e = 0 > d || d == e.b.length - 1 ? -1 : e.b[d].offset + c - 1;
  return -1 == e ? this.F(a, b, c) : e
};

function xJ(a) {
  return 65 <= a && 90 >= a ? a - 65 : 97 <= a && 122 >= a ? a - 71 : 48 <= a && 57 >= a ? a + 4 : 43 == a ? 62 : 47 == a ? 63 : 0
}
function oha(a, b) {
  return (xJ(a.charCodeAt(b)) << 12) + (xJ(a.charCodeAt(b + 1)) << 6) + xJ(a.charCodeAt(b + 2))
}
function pha(a, b) {
  return (xJ(a.charCodeAt(b)) << 6) + xJ(a.charCodeAt(b + 1))
};

function yJ(a) {
  t: {
    var b = a.charAt(0),
        c = parseInt(a.substring(1, 5), 10),
        d = parseInt(a.substring(5, 11), 10);
    a = a.substring(11);
    var e;
    if ("A" == b) b = 0, e = oha;
    else if ("B" == b) b = 1, e = pha;
    else {
      a = n;
      break t
    }
    var f = [],
        h = 1;
    f.push({
      offset: d,
      Dg: 100 * c + h
    });
    for (var l = a.length, q = 0, r = 0, s = 0; s < l;) {
      var u = e(a, s);
      (r = u >> 12) ? (q = r & 15, r = r >> 4 & 1) : q = r = 0;
      for (var x = 0, z; 12 > x;) h == q ? (z = 100 * c + h + .5, d += 29 + (u >> x & 1), f.push({
        offset: d,
        Dg: z
      }), d += 29 + r) : d += 29 + (u >> x & 1), ++h, 13 == h && (h = 1, ++c), z = 100 * c + h, f.push({
        offset: d,
        Dg: z
      }), ++x;
      s += b ? 2 : 3
    }
    a = f
  }
  this.b = a
}
H(yJ, lha);

function mha(a, b) {
  return a.offset < b.offset ? -1 : b.offset < a.offset ? 1 : 0
}
function nha(a, b) {
  return a.Dg < b.Dg ? -1 : b.Dg < a.Dg ? 1 : 0
};

function zJ() {}
H(zJ, wJ);
zJ.prototype.o = function() {
  this.B = new yJ("B1421730216vEuJqVUtWttqbk3J2SqmlWKuVtNqtVqqlNSdldK6W1Wq1VqakuJeVdrabUalVLqXVOquWsup2SslZLyrVatVbS6l5KqVUtqtNsdZbSaVUt")
};
zJ.prototype.D = function(a) {
  a = sJ(new uJ, a);
  this.year = a.year;
  this.month = a.month;
  this.Y = a.Y
};
zJ.prototype.F = function(a, b, c) {
  var d = new uJ;
  rJ(d);
  d.year = a;
  d.month = b;
  d.Y = c;
  d.yd = d.b(d.year, d.month, d.Y);
  sJ(d, d.yd);
  return (d.hj ? d : n).yd
};

function qha() {
  this.b = [];
  var a = 730490;
  this.b.push(a);
  for (var b = 6; 306 > b; ++b) {
    var c;
    c = "730490fr=ypNo),-oon)0-rllx=0pffr=ypNoo-=oon)0-rllx=0rffx=ypNoo-=oon)0-xllx?0rffx=0pNoo-=oon)0-xnn)?0rflx=0pNNp-=oNo),-xnn)0-rflx=0pfNr-ypNo),-xnn)0-rllx=0pffr=ypNo),-oon)0-rllx=0pffr=ypNo),-oon)0-rllx=0pffr=ypNoo-=oon)0-rllx=0pffr=ypNoo-=oon)0-rllx?0rffx=ypNoo-=oon)0-xll)?0rffx=0pNoo-=oon),-xnn)0-rflx=0pN".charCodeAt(b);
    c = 65 <= c && 90 >= c ? c - 65 : 97 <= c && 122 >= c ? c - 71 : 48 <= c && 57 >= c ? c + 4 : 35 <= c && 38 >= c ? c + 27 : 40 <= c && 47 >= c ? c + 26 : 58 <= c && 64 >= c ? c + 16 : 0;
    for (var d = 0; 4 > d; ++d) a += c % 3 + 14, this.b.push(a), c = c / 3 | 0
  }
}
function AJ(a, b) {
  var c = Ru(a.b, b);
  return 0 > c ? -1 : c % 24
};

function BJ() {}
H(BJ, wJ);
BJ.prototype.C = n;
BJ.prototype.D = function() {
  this.hj = p
};
BJ.prototype.F = function() {
  this.hj = p;
  return 0
};

function CJ() {}
H(CJ, BJ);
CJ.prototype.o = function() {
  this.B = new yJ("A4698730509EqbAUrApbCquAVqH3VAukAtJF1TAqVAUtEVdAq1JuqAXSA2lW6KA1KAyVEqeAVWAq1CraAbSGdlAclAZLFZXAyrAVaDVuAtpL9SAtSAslW0LApLASrFK7AWtAtqC2qA2SH6lA0lApVVpNAS2AW1TbS");
  this.C = new qha
};

function DJ() {}
H(DJ, qJ);
DJ.prototype.o = Na();
var EJ = {
  353: 0,
  354: 1,
  355: 2,
  383: 3,
  384: 4,
  385: 5
},
    FJ = [, [0, 0, 0, 0, 0, 0],
    [30, 30, 30, 30, 30, 30],
    [59, 59, 60, 59, 59, 60],
    [88, 89, 90, 88, 89, 90],
    [117, 118, 119, 117, 118, 119],
    [147, 148, 149, 147, 148, 149],
    [147, 148, 149, 177, 178, 179],
    [176, 177, 178, 206, 207, 208],
    [206, 207, 208, 236, 237, 238],
    [235, 236, 237, 265, 266, 267],
    [265, 266, 267, 295, 296, 297],
    [294, 295, 296, 324, 325, 326],
    [324, 325, 326, 354, 355, 356]
    ];

function GJ(a) {
  a = (235 * a - 234) / 19 | 0;
  a = 29 * a + ((12084 + 13753 * a) / 25920 | 0);
  return 3 < 3 * a % 7 ? a + 1 : a
}

function HJ(a) {
  var b = GJ(a - 1),
      c = GJ(a);
  return 356 == GJ(a + 1) - c ? c + 1 : 382 == c - b ? c : c - 1
}
DJ.prototype.A = function() {
  var a = 1 + this.yd - -1373426;
  if (1 > a) this.hj = p;
  else {
    for (this.year = 98496 * a / 35975351 | 0; HJ(this.year + 1) < a;) this.year++;
    var b;
    b = this.year;
    b = EJ[HJ(b + 1) - HJ(b)];
    a -= HJ(this.year);
    for (this.month = 1; 13 > this.month && FJ[this.month + 1][b] < a;) this.month++;
    if (6 == this.month || 7 == this.month && 2 < b) this.Zk = m;
    this.Y = a - FJ[this.month][b]
  }
};
DJ.prototype.b = function(a, b, c) {
  return -1373427 + HJ(a) + FJ[b][EJ[HJ(a + 1) - HJ(a)]] + c
};

function IJ() {}
H(IJ, qJ);
IJ.prototype.o = Na();
IJ.prototype.A = function() {
  this.year = 1 + ((33 * (this.yd - 226895) + 3) / 12053 | 0);
  var a = this.yd - this.b(this.year, 1, 1);
  216 > a ? (this.month = 1 + (a / 31 | 0), this.Y = 1 + a % 31) : (a -= 6, this.month = 1 + (a / 30 | 0), this.Y = 1 + a % 30)
};
IJ.prototype.b = function(a, b, c) {
  return 226894 + 365 * (a - 1) + ((8 * a + 21) / 33 | 0) + (7 >= b ? 31 * (b - 1) : 30 * (b - 1) + 6) + c
};
var JJ = [, "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b", "\u4e5d"],
    KJ = [],
    LJ = [],
    MJ;
for (MJ = 1; 9 >= MJ; ++MJ) KJ[MJ] = "\u521d" + JJ[MJ], KJ[MJ + 10] = "\u5341" + JJ[MJ], KJ[MJ + 20] = "\u5eff" + JJ[MJ];
KJ[10] = "\u521d\u5341";
KJ[20] = JJ[2] + "\u5341";
KJ[30] = JJ[3] + "\u5341";
LJ[1] = "\u6b63";
for (MJ = 2; 9 >= MJ; ++MJ) LJ[MJ] = JJ[MJ];
LJ[10] = "\u5341";
LJ[11] = "\u5341" + JJ[1];
LJ[12] = "\u5341" + JJ[2];
var NJ = "\u5c0f\u5bd2 \u5927\u5bd2 \u7acb\u6625 \u96e8\u6c34 \u9a5a\u87c4 \u6625\u5206 \u6e05\u660e \u7a40\u96e8 \u7acb\u590f \u5c0f\u6eff \u8292\u7a2e \u590f\u81f3 \u5c0f\u6691 \u5927\u6691 \u7acb\u79cb \u8655\u6691 \u767d\u9732 \u79cb\u5206 \u5bd2\u9732 \u971c\u964d \u7acb\u51ac \u5c0f\u96ea \u5927\u96ea \u51ac\u81f3".split(" "),
    OJ = [, , , , "\u60ca\u86f0", , , "\u8c37\u96e8", , "\u5c0f\u6ee1", "\u8292\u79cd", , , , , "\u51e6\u6691", , , , , , , , k];
var rha = [, zI, zI, zI, k, k, [, "Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"], k],
    sha = [, yI, yI, yI, k, k, [, "Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"], k];

function PJ(a, b, c) {
  this.b = a;
  this.o = b;
  this.B = new zl(this.o);
  this.D = C(c) ? c : p
}
function QJ(a, b) {
  return a.D ? String(b) : sha[a.b][b]
}
function RJ(a, b) {
  return a.D ? String(b) : rha[a.b][b]
}
B = PJ.prototype;
B.aw = function(a) {
  return 1 == a.Y ? t + RJ(this, a.month) + " " + a.Y : String(a.Y)
};
B.$v = function(a, b, c, d) {
  return this.Lc(a, d.year == b.year && d.year == c.year)
};
B.Lc = function(a, b) {
  var c = RJ(this, a.month);
  return b ? t + c + " " + a.Y : t + c + " " + a.Y + ", " + a.year
};
B.Zv = function(a) {
  return this.En(a)
};
B.Yv = function(a, b, c) {
  return c ? t + RJ(this, a.month) + " " + a.Y : t + QJ(this, a.month) + " " + a.Y
};
B.Ag = function(a, b) {
  var c = QJ(this, a.month),
      d = QJ(this, b.month);
  return a.year == b.year ? a.month == b.month ? a.Y == b.Y ? t + c + " " + a.Y + ", " + a.year : t + c + " " + a.Y + " \u2013 " + b.Y + ", " + a.year : t + c + " " + a.Y + " \u2013 " + d + " " + b.Y + ", " + a.year : Sa(t + c + " " + a.Y + ", " + a.year, t + d + " " + b.Y + ", " + b.year)
};
B.zv = function(a, b) {
  var c = QJ(this, a.month),
      d = QJ(this, b.month);
  return a.year == b.year ? a.month == b.month ? t + c + " " + a.year : t + c + " \u2013 " + d + " " + a.year : Sa(t + c + " " + a.year, t + d + " " + b.year)
};
B.yv = function(a, b) {
  var c = RJ(this, a.month),
      d = RJ(this, b.month);
  return a.year == b.year ? a.month == b.month ? t + c + " " + a.year : t + c + " \u2013 " + d + " " + a.year : Sa(t + c + " " + a.year, t + d + " " + b.year)
};
B.Xv = function(a) {
  return Fl(this.B, a, this.o)
};
B.JS = function(a) {
  return this.En(a)
};
B.En = function(a) {
  return El(this.B, a, this.o)
};
B.getMonth = function(a) {
  return QJ(this, a)
};

function SJ(a, b) {
  this.b = a;
  this.o = b;
  this.A = 5 == this.b
}
H(SJ, PJ);

function TJ(a, b) {
  return [b.Zk ? a.A ? "\u95f0" : "\u958f" : t, LJ[b.month], "\u6708"].join(t)
}
function UJ(a, b) {
  var c = AJ(b.C, b.yd);
  return 0 > c ? 1 == b.Y ? TJ(a, b) : KJ[b.Y] : 0 > c ? t : a.A ? OJ[c] || NJ[c] : NJ[c]
}
function VJ(a, b) {
  var c = AJ(b.C, b.yd);
  return [TJ(a, b), KJ[b.Y], 0 > c ? t : a.A ? OJ[c] || NJ[c] : NJ[c]].join(t)
}
function WJ(a) {
  return a.A ? "\u519c\u5386" : "\u8fb2\u66c6"
}
B = SJ.prototype;
B.aw = function(a) {
  return UJ(this, a)
};
B.Lc = function(a) {
  return UJ(this, a)
};
B.Zv = function(a) {
  return UJ(this, a)
};
B.Yv = function(a) {
  return UJ(this, a)
};
B.Xv = function(a) {
  return UJ(this, a)
};
B.$v = function(a) {
  return [WJ(this), VJ(this, a)].join(t)
};
B.Ag = function(a, b) {
  return a.yd == b.yd ? [WJ(this), VJ(this, a)].join(t) : [WJ(this), VJ(this, a), " ~ ", VJ(this, b)].join(t)
};
B.En = function(a) {
  return UJ(this, a)
};
B.zv = function(a, b) {
  return [WJ(this), TJ(this, a), " ~ ", TJ(this, b)].join(t)
};

function XJ(a, b) {
  return b ? a + " " + b : a
}
B.yv = function(a, b) {
  return [WJ(this), TJ(this, a), " ~ ", TJ(this, b)].join(t)
};

function YJ(a, b) {
  this.b = a;
  this.o = b
}
H(YJ, PJ);

function ZJ(a) {
  return a.Zk && 7 == a.month ? xI[14] : xI[a.month]
}
function $J(a) {
  return [a.Y.toString(), t + ZJ(a)].join(" ")
}
function aK(a, b) {
  var c = ZJ(a),
      d = ZJ(b),
      e = a.year.toString(),
      f = b.year.toString();
  return a.year == b.year ? a.month == b.month ? [c, e].join(" ") : Sa(c, [d, e].join(" ")) : Sa([c, e].join(" "), [d, f].join(" "))
}
B = YJ.prototype;
B.aw = function(a) {
  return $J(a)
};
B.Lc = function(a) {
  return $J(a)
};
B.Zv = function(a) {
  return $J(a)
};
B.Yv = function(a) {
  return $J(a)
};
B.Xv = function(a) {
  return $J(a)
};
B.En = function(a) {
  return $J(a)
};
B.zv = function(a, b) {
  return aK(a, b)
};
B.yv = function(a, b) {
  return aK(a, b)
};
B.$v = function(a) {
  return $J(a)
};
B.Ag = function(a, b) {
  var c = ZJ(a),
      d = ZJ(b),
      e = a.Y.toString(),
      f = b.Y.toString(),
      h = a.year.toString();
  return a.year == b.year ? a.month == b.month ? a.Y == b.Y ? [e, t + c, h].join(" ") : Sa(e, [f, t + c, h].join(" ")) : Sa([e, t + c].join(" "), [f, t + d, h].join(" ")) : Sa([e, t + c, h].join(" "), [f, t + d, b.year.toString()].join(" "))
};
var tha = [, uJ, vJ, zJ, CJ, CJ, IJ, DJ],
    uha = [, PJ, PJ, PJ, SJ, SJ, PJ, YJ],
    vha = [, fJ, fJ, fJ, XJ, XJ, fJ, fJ];

function wha(a, b) {
  var c = new tha[a];
  rJ(c);
  var d;
  d = b.year;
  var e = d - 1;
  d = 0 + 365 * e + (e / 4 | 0) - (e / 100 | 0) + (e / 400 | 0) + zg(d, b.month, b.Y) + 1;
  sJ(c, d);
  return c.hj ? c : n
};

function bK(a, b, c) {
  this.o = a;
  this.A = b;
  this.B = F(wha, this.A.b);
  this.D = c || fJ
}
H(bK, yl);

function cK(a, b, c, d, e) {
  for (var f = [], h = m, l = 0; l < d.length; ++l) if (f[l] = a.B(d[l]), !f[l]) {
    h = p;
    break
  }
  return h ? a.D(b.apply(a.o, e ? d.concat(e) : d), c.apply(a.A, e ? f.concat(e) : f)) : b.apply(a.o, e ? d.concat(e) : d)
}
B = bK.prototype;
B.Js = function(a) {
  return cK(this, this.o.Js, this.A.aw, [a])
};
B.Xs = function(a, b, c, d) {
  d = d || Ll();
  return cK(this, this.o.Xs, this.A.$v, [a, b, c, d])
};
B.Lc = function(a, b) {
  return cK(this, this.o.Lc, this.A.Lc, [a], [ !! b])
};
B.Ek = function(a, b) {
  return cK(this, this.o.Ek, this.A.Zv, [a], [b])
};
B.xd = function(a, b, c) {
  return cK(this, this.o.xd, this.A.Yv, [a], [b, c])
};
B.Op = function(a) {
  return this.o.Op(a)
};
B.xn = Qa(41);
B.Hk = Qa(44);
B.Ul = function(a, b, c) {
  return this.o.Ul(a, b, c)
};
B.Ag = function(a, b) {
  return cK(this, this.o.Ag, this.A.Ag, [a, b])
};

function dK(a, b, c) {
  var d = Kg(b.year, b.month, 1),
      e = Kg(b.year, b.month, tg(b.year, b.month));
  a.B(b);
  d = a.B(d);
  e = a.B(e);
  b = c ? a.o.Rp(b) : a.o.ak(b);
  return d && e ? (c = c ? a.A.yv(d, e) : a.A.zv(d, e), a.D(b, c)) : b
}
B.ak = function(a) {
  return dK(this, a, p)
};
B.Rp = function(a) {
  return dK(this, a, m)
};
B.Ec = function(a) {
  return cK(this, this.o.Ec, this.A.Xv, [a])
};
B.Xp = function(a) {
  return cK(this, this.o.Xp, this.A.JS, [a])
};
B.Jm = function(a) {
  return cK(this, this.o.Jm, this.A.En, [a])
};
B.getMonth = function(a) {
  return this.o.getMonth(a)
};
B.Ss = function(a) {
  return this.o.Ss(a)
};
B.Bo = function(a) {
  return this.o.Bo(a)
};
B.ob = function(a, b, c) {
  return this.o.ob(a, b, c)
};
B.Zl = function(a) {
  return this.o.Zl(a)
};
B.Ks = function(a) {
  return this.o.Ks(a)
};
B.Qw = Qa(84);

function eK(a, b, c) {
  P.call(this);
  this.target = a;
  this.B = b || a;
  this.A = c || new av(NaN, NaN, NaN, NaN);
  this.b = yi(a);
  this.o = new Q(this);
  this.dc(this.o);
  O(this.B, ["touchstart", "mousedown"], this.iA, p, this)
}
H(eK, P);
var fK = J || hc && qc("1.9.3");
B = eK.prototype;
B.clientX = 0;
B.clientY = 0;
B.xB = 0;
B.yB = 0;
B.Qk = 0;
B.Rk = 0;
B.Ju = m;
B.ej = p;
B.Ta = Oa("Ju");
B.L = function() {
  eK.J.L.call(this);
  $c(this.B, ["touchstart", "mousedown"], this.iA, p, this);
  Yd(this.o);
  fK && this.b.releaseCapture();
  this.B = this.target = n
};
B.iA = function(a) {
  var b = "mousedown" == a.type;
  if (!this.Ju || this.ej || b && !Qu(a)) this.P("earlycancel");
  else if (gK(a), this.P(new hK("start", this, a.clientX, a.clientY))) {
    this.ej = m;
    a.preventDefault();
    var b = this.b,
        c = b.documentElement,
        d = !fK;
    this.o.I(b, ["touchmove", "mousemove"], this.rN, d);
    this.o.I(b, ["touchend", "mouseup"], this.Eq, d);
    fK ? (c.setCapture(p), this.o.I(c, "losecapture", this.Eq)) : this.o.I(Eu(b), "blur", this.Eq);
    this.C && this.o.I(this.C, "scroll", this.sN, d);
    this.clientX = this.xB = a.clientX;
    this.clientY = this.yB =
    a.clientY;
    this.Qk = this.target.offsetLeft;
    this.Rk = this.target.offsetTop;
    this.D = Zi(wi(this.b));
    ib()
  }
};
B.Eq = function(a) {
  Yd(this.o);
  fK && this.b.releaseCapture();
  if (this.ej) {
    gK(a);
    this.ej = p;
    var b = iK(this, this.Qk),
        c = jK(this, this.Rk);
    this.P(new hK("end", this, a.clientX, a.clientY, 0, b, c))
  } else this.P("earlycancel")
};

function gK(a) {
  var b = a.type;
  "touchstart" == b || "touchmove" == b ? a.init(a.b.targetTouches[0], a.A) : "touchend" != b && "touchcancel" != b || a.init(a.b.changedTouches[0], a.A)
}
B.rN = function(a) {
  if (this.Ju) {
    gK(a);
    var b = 1 * (a.clientX - this.clientX),
        c = a.clientY - this.clientY;
    this.clientX = a.clientX;
    this.clientY = a.clientY;
    if (!this.ej) {
      var d = this.xB - this.clientX,
          e = this.yB - this.clientY;
      if (0 < d * d + e * e) if (this.P(new hK("start", this, a.clientX, a.clientY))) this.ej = m;
      else {
        this.isDisposed() || this.Eq(a);
        return
      }
    }
    c = kK(this, b, c);
    b = c.x;
    c = c.y;
    this.ej && this.P(new hK("beforedrag", this, a.clientX, a.clientY, 0, b, c)) && (lK(this, a, b, c), a.preventDefault())
  }
};

function kK(a, b, c) {
  var d = Zi(wi(a.b));
  b += d.x - a.D.x;
  c += d.y - a.D.y;
  a.D = d;
  a.Qk += b;
  a.Rk += c;
  b = iK(a, a.Qk);
  a = jK(a, a.Rk);
  return new ti(b, a)
}
B.sN = function(a) {
  var b = kK(this, 0, 0);
  a.clientX = this.clientX;
  a.clientY = this.clientY;
  lK(this, a, b.x, b.y)
};

function lK(a, b, c, d) {
  a.target.style.left = c + "px";
  a.target.style.top = d + "px";
  a.P(new hK("drag", a, b.clientX, b.clientY, 0, c, d))
}
function iK(a, b) {
  var c = a.A,
      d = isNaN(c.left) ? n : c.left,
      c = isNaN(c.width) ? 0 : c.width;
  return Math.min(d != n ? d + c : Infinity, Math.max(d != n ? d : -Infinity, b))
}

function jK(a, b) {
  var c = a.A,
      d = isNaN(c.top) ? n : c.top,
      c = isNaN(c.height) ? 0 : c.height;
  return Math.min(d != n ? d + c : Infinity, Math.max(d != n ? d : -Infinity, b))
}
function hK(a, b, c, d, e, f, h) {
  L.call(this, a);
  this.clientX = c;
  this.clientY = d;
  this.left = C(f) ? f : b.Qk;
  this.top = C(h) ? h : b.Rk
}
H(hK, L);

function mK(a, b) {
  return a.U("iframe", {
    frameborder: 0,
    style: "border:0;vertical-align:bottom;" + (b || t),
    src: 'javascript:""'
  })
}
function nK(a, b) {
  var c = wi(a),
      d = [];
  d.push("<!DOCTYPE html>");
  d.push("<html><head>", t, "</head><body>", b, "</body></html>");
  c = mK(c, "width:0;height:0;border:0");
  a.appendChild(c);
  var d = d.join(t),
      e = $v(c);
  e.open();
  e.write(d);
  e.close();
  return c
};

function oK(a, b) {
  Y.call(this, b);
  this.Ib = !! a;
  this.Z = n
}
H(oK, Y);
B = oK.prototype;
B.kf = n;
B.Zq = p;
B.Rd = n;
B.$c = n;
B.We = n;
B.Bw = p;
B.Oa = y("goog-modalpopup");
B.dl = w("Rd");
B.ia = function() {
  oK.J.ia.call(this);
  var a = this.G(),
      b = pb(this.Oa()).split(" ");
  bw(a, b);
  Xi(a, m);
  U(a, p);
  pK(this);
  qK(this)
};

function pK(a) {
  a.Ib && !a.$c && (a.$c = mK(a.b), a.$c.className = a.Oa() + "-bg", U(a.$c, p), wj(a.$c, 0));
  a.Rd || (a.Rd = a.b.U("div", a.Oa() + "-bg"), U(a.Rd, p))
}

function qK(a) {
  a.We || (a.We = a.b.createElement("span"), U(a.We, p), Xi(a.We, m), a.We.style.position = "absolute")
}
B.VD = function() {
  this.Bw = p
};
B.rb = function(a) {
  return !!a && "DIV" == a.tagName
};
B.Ya = function(a) {
  oK.J.Ya.call(this, a);
  a = pb(this.Oa()).split(" ");
  bw(this.G(), a);
  pK(this);
  qK(this);
  U(this.G(), p)
};
B.$ = function() {
  this.$c && Ji(this.$c, this.G());
  Ji(this.Rd, this.G());
  oK.J.$.call(this);
  Ki(this.We, this.G());
  this.kf = new lw(this.b.Sa());
  Z(this).I(this.kf, "focusin", this.VR);
  rK(this, p)
};
B.Na = function() {
  this.Da() && this.setVisible(p);
  K(this.kf);
  oK.J.Na.call(this);
  Li(this.$c);
  Li(this.Rd);
  Li(this.We)
};
B.setVisible = function(a) {
  if (a != this.Zq) if (this.H && this.H.stop(), this.O && this.O.stop(), this.F && this.F.stop(), this.K && this.K.stop(), this.xa && rK(this, a), a) {
    if (this.P("beforeshow")) {
      try {
        this.Z = this.b.Sa().activeElement
      } catch (b) {}
      this.Bv();
      this.Ua();
      Z(this).I(Cu(this.b), "resize", this.Bv);
      sK(this, m);
      this.focus();
      this.Zq = m;
      this.H && this.O ? (Zc(this.H, "end", this.Xq, p, this), this.O.rf(), this.H.rf()) : this.Xq()
    }
  } else if (this.P("beforehide")) {
    Z(this).b(Cu(this.b), "resize", this.Bv);
    this.Zq = p;
    this.F && this.K ? (Zc(this.F, "end", this.Rq, p, this), this.K.rf(), this.F.rf()) : this.Rq();
    try {
      var c = this.b.Sa().body,
          d = this.b.Sa().activeElement || c;
      this.Z && d == c && this.Z != c && this.Z.focus()
    } catch (e) {}
    this.Z = n
  }
};

function rK(a, b) {
  if (b) {
    a.C || (a.C = []);
    for (var c = a.b, c = c.nS(c.Sa().body), d = 0; d < c.length; d++) {
      var e = c[d];
      e == a.V || BH(e, "hidden") || (Ej(e, "hidden", m), a.C.push(e))
    }
  } else if (a.C) {
    for (d = 0; d < a.C.length; d++) a.C[d].removeAttribute("aria-hidden");
    a.C = n
  }
}
function sK(a, b) {
  a.$c && U(a.$c, b);
  a.Rd && U(a.Rd, b);
  U(a.G(), b);
  U(a.We, b)
}
B.Xq = function() {
  this.P("show")
};
B.Rq = function() {
  sK(this, p);
  this.P("hide")
};
B.Da = w("Zq");
B.focus = function() {
  this.XF()
};
B.Bv = function() {
  this.$c && U(this.$c, p);
  this.Rd && U(this.Rd, p);
  var a = this.b.Sa(),
      b = Bi(Eu(a) || window),
      c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth)),
      a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
  this.$c && (U(this.$c, m), Fw(this.$c, c, a));
  this.Rd && (U(this.Rd, m), Fw(this.Rd, c, a))
};
B.Ua = function() {
  var a = this.b.Sa(),
      b = Eu(a) || window;
  if ("fixed" == nj(this.G())) var c = a = 0;
  else c = Zi(this.b), a = c.x, c = c.y;
  var d = vj(this.G()),
      b = Bi(b),
      a = Math.max(a + b.width / 2 - d.width / 2, 0),
      c = Math.max(c + b.height / 2 - d.height / 2, 0);
  hv(this.G(), a, c);
  hv(this.We, a, c)
};
B.VR = function(a) {
  this.Bw ? this.VD() : a.target == this.We && pe(this.XF, 0, this)
};
B.XF = function() {
  try {
    J && this.b.Sa().body.focus(), this.G().focus()
  } catch (a) {}
};
B.L = function() {
  K(this.H);
  this.H = n;
  K(this.F);
  this.F = n;
  K(this.O);
  this.O = n;
  K(this.K);
  this.K = n;
  oK.J.L.call(this)
};

function tK(a, b, c) {
  oK.call(this, b, c);
  this.A = a || "modal-dialog";
  this.o = uK()
}
H(tK, oK);
B = tK.prototype;
B.Qs = m;
B.Km = m;
B.fp = m;
B.Ot = m;
B.mq = .5;
B.wk = t;
B.Si = n;
B.Jh = n;
B.Vd = p;
B.gd = n;
B.Yc = n;
B.nq = n;
B.Oc = n;
B.Te = n;
B.Fc = n;
B.Oa = w("A");
B.setTitle = function(a) {
  this.wk = a;
  this.Yc && Ti(this.Yc, a)
};
B.getTitle = w("wk");

function vK(a, b) {
  var c = ej(b, n);
  a.Si = c;
  a.Te && qH(a.Te, c)
}
B.getContent = function() {
  return this.Si != n ? YG(this.Si) : t
};

function wK(a) {
  a.G() || a.render()
}
B.Ab = function() {
  wK(this);
  return this.Te
};
B.dl = function() {
  wK(this);
  return tK.J.dl.call(this)
};

function xK(a, b) {
  a.mq = b;
  if (a.G()) {
    var c = a.dl();
    c && wj(c, a.mq)
  }
}
function yK(a, b) {
  a.fp = b;
  if (a.xa) {
    var c = a.b,
        d = a.dl(),
        e = a.$c;
    b ? (e && c.am(e, a.G()), c.am(d, a.G())) : (c.Uc(e), c.Uc(d))
  }
  a.Da() && rK(a, b)
}
function zK(a, b) {
  var c = pb(a.A + "-title-draggable").split(" ");
  a.G() && (b ? bw(a.gd, c) : aw(a.gd, c));
  b && !a.Jh ? (a.Jh = new eK(a.G(), a.gd), bw(a.gd, c), O(a.Jh, "start", a.lV, p, a)) : !b && a.Jh && (a.Jh.aa(), a.Jh = n)
}
B.ia = function() {
  tK.J.ia.call(this);
  var a = this.G(),
      b = this.b;
  this.gd = b.U("div", this.A + "-title", this.Yc = b.U("span", {
    className: this.A + "-title-text",
    id: this.getId()
  }, this.wk), this.Oc = b.U("span", this.A + "-title-close"));
  Hi(a, this.gd, this.Te = b.U("div", this.A + "-content"), this.Fc = b.U("div", this.A + "-buttons"));
  Dj(this.Yc, "heading");
  Dj(this.Oc, "button");
  Xi(this.Oc, m);
  Ej(this.Oc, "label", "Close");
  this.nq = this.Yc.id;
  Dj(a, "dialog");
  Ej(a, "labelledby", this.nq || t);
  this.Si && qH(this.Te, this.Si);
  U(this.Oc, this.Km);
  this.o && (a = this.o, a.V = this.Fc, a.render());
  U(this.Fc, !! this.o);
  xK(this, this.mq)
};
B.Ya = function(a) {
  tK.J.Ya.call(this, a);
  a = this.G();
  var b = this.A + "-content";
  this.Te = Fu(n, b, a)[0];
  this.Te || (this.Te = this.b.U("div", b), this.Si && qH(this.Te, this.Si), a.appendChild(this.Te));
  var b = this.A + "-title",
      c = this.A + "-title-text",
      d = this.A + "-title-close";
  (this.gd = Fu(n, b, a)[0]) ? (this.Yc = Fu(n, c, this.gd)[0], this.Oc = Fu(n, d, this.gd)[0]) : (this.gd = this.b.U("div", b), a.insertBefore(this.gd, this.Te));
  this.Yc ? (this.wk = Cv(this.Yc), this.Yc.id || (this.Yc.id = this.getId())) : (this.Yc = Ei("span", {
    className: c,
    id: this.getId()
  }), this.gd.appendChild(this.Yc));
  this.nq = this.Yc.id;
  Ej(a, "labelledby", this.nq || t);
  this.Oc || (this.Oc = this.b.U("span", d), this.gd.appendChild(this.Oc));
  U(this.Oc, this.Km);
  b = this.A + "-buttons";
  if (this.Fc = Fu(n, b, a)[0]) {
    if (a = this.o = new AK(this.b), (b = this.Fc) && 1 == b.nodeType) {
      a.V = b;
      for (var b = a.V.getElementsByTagName("button"), c = 0, e, f; d = b[c]; c++) if (e = d.name || d.id, f = Cv(d) || d.value, e) {
        var h = 0 == c;
        a.set(e, f, h, "cancel" == d.name);
        h && nv(d, "goog-buttonset-default")
      }
    }
  } else this.Fc = this.b.U("div", b), a.appendChild(this.Fc), this.o && (a = this.o, a.V = this.Fc, a.render()), U(this.Fc, !! this.o);
  xK(this, this.mq)
};
B.$ = function() {
  tK.J.$.call(this);
  Z(this).I(this.G(), "keydown", this.aF).I(this.G(), "keypress", this.aF);
  Z(this).I(this.Fc, "click", this.cW);
  zK(this, this.Ot);
  Z(this).I(this.Oc, "click", this.dW);
  var a = this.G();
  Dj(a, "dialog");
  this.Yc.id !== t && Ej(a, "labelledby", this.Yc.id);
  this.fp || yK(this, p)
};
B.Na = function() {
  this.Da() && this.setVisible(p);
  zK(this, p);
  tK.J.Na.call(this)
};
B.setVisible = function(a) {
  a != this.Da() && (this.xa || this.render(), tK.J.setVisible.call(this, a))
};
B.Xq = function() {
  tK.J.Xq.call(this);
  this.P("aftershow")
};
B.Rq = function() {
  tK.J.Rq.call(this);
  this.P("afterhide");
  this.Vd && this.aa()
};
B.lV = function() {
  var a = this.b.Sa(),
      b = Bi(Eu(a) || window),
      c = Math.max(a.body.scrollWidth, b.width),
      a = Math.max(a.body.scrollHeight, b.height),
      d = vj(this.G());
  "fixed" == nj(this.G()) ? (b = new av(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height)), this.Jh.A = b || new av(NaN, NaN, NaN, NaN)) : this.Jh.A = new av(0, 0, c - d.width, a - d.height) || new av(NaN, NaN, NaN, NaN)
};
B.dW = function() {
  BK(this)
};

function BK(a) {
  if (a.Km) {
    var b = a.o,
        c = b && b.wf;
    c ? (b = b.get(c), a.P(new CK(c, b)) && a.setVisible(p)) : a.setVisible(p)
  }
}
B.L = function() {
  this.Fc = this.Oc = n;
  tK.J.L.call(this)
};

function DK(a, b) {
  a.o = b;
  if (a.Fc) {
    if (a.o) {
      var c = a.o;
      c.V = a.Fc;
      c.render()
    } else qH(a.Fc, fj);
    U(a.Fc, !! a.o)
  }
}
B.cW = function(a) {
  t: {
    for (a = a.target; a != n && a != this.Fc;) {
      if ("BUTTON" == a.tagName) break t;
      a = a.parentNode
    }
    a = n
  }
  if (a && !a.disabled) {
    a = a.name;
    var b = this.o.get(a);
    this.P(new CK(a, b)) && this.setVisible(p)
  }
};
B.aF = function(a) {
  var b = p,
      c = p,
      d = this.o,
      e = a.target;
  if ("keydown" == a.type) if (this.Qs && 27 == a.keyCode) {
    var f = d && d.wf,
        e = "SELECT" == e.tagName && !e.disabled;
    f && !e ? (c = m, b = d.get(f), b = this.P(new CK(f, b))) : e || (b = m)
  } else {
    if (9 == a.keyCode && a.shiftKey && e == this.G()) {
      this.Bw = m;
      try {
        this.We.focus()
      } catch (h) {}
      pe(this.VD, 0, this)
    }
  } else if (13 == a.keyCode) {
    if ("BUTTON" == e.tagName && !e.disabled) f = e.name;
    else if (e == this.Oc) BK(this);
    else if (d) {
      var l = d.Aq,
          q = l && EK(d, l),
          e = ("TEXTAREA" == e.tagName || "SELECT" == e.tagName || "A" == e.tagName) && !e.disabled;
      !q || q.disabled || e || (f = l)
    }
    f && d && (c = m, b = this.P(new CK(f, String(d.get(f)))))
  } else e == this.Oc && 32 == a.keyCode && BK(this);
  if (b || c) a.stopPropagation(), a.preventDefault();
  b && this.setVisible(p)
};

function CK(a, b) {
  this.type = "dialogselect";
  this.key = a;
  this.caption = b
}
H(CK, L);

function AK(a) {
  a || wi();
  de.call(this)
}
var FK;
H(AK, de);
B = AK.prototype;
B.Aq = n;
B.V = n;
B.wf = n;
B.set = function(a, b, c, d) {
  de.prototype.set.call(this, a, b);
  c && (this.Aq = a);
  d && (this.wf = a);
  return this
};

function GK(a, b, c, d) {
  return a.set(b.key, b.caption, c, d)
}
B.render = function() {
  if (this.V) {
    qH(this.V, fj);
    var a = wi(this.V);
    this.forEach(function(b, c) {
      var d = a.U("button", {
        name: c
      }, b);
      c == this.Aq && (d.className = "goog-buttonset-default");
      this.V.appendChild(d)
    }, this)
  }
};
B.G = w("V");

function EK(a, b) {
  for (var c = a.V.getElementsByTagName("BUTTON"), d = 0, e; e = c[d]; d++) if (e.name == b || e.id == b) return e;
  return n
}
var HK = {
  key: "ok",
  caption: "OK"
},
    IK = {
    key: "cancel",
    caption: "Cancel"
    },
    JK = {
    key: "yes",
    caption: "Yes"
    },
    KK = {
    key: "no",
    caption: "No"
    },
    xha = {
    key: "save",
    caption: "Save"
    },
    yha = {
    key: "continue",
    caption: "Continue"
    };

function LK() {
  return GK(new AK, HK, m, m)
}
function uK() {
  return GK(GK(new AK, HK, m), IK, p, m)
}
function zA() {
  return GK(GK(new AK, JK, m), KK, p, m)
}
"undefined" != typeof document && (LK(), uK(), FK = zA(), GK(GK(GK(new AK, JK), KK, m), IK, p, m), GK(GK(GK(new AK, yha), xha), IK, m, m));
(new V('<div id="${id}content" class="${prefix}-content goog-inline-block"><div id="${id}butterbar" class="${prefix}-butterbar"></div><table class="${prefix}-table"><tr><td class="${prefix}-label">What</td><td class="${prefix}-input"><input id="${id}what" type="text" value="${what}" class="${prefix}-input-field"></input></td></tr><tr><td class="${prefix}-label">When</td><td class="${prefix}-input"><div class="${prefix}-input">${when}</div></td></tr><tr><td class="${prefix}-label">Who</td><td class="${prefix}-input"><div class="${prefix}-input">${who}</div></td></tr><tr><td class="${prefix}-label">Where</td><td class="${prefix}-input"><input id="${id}where" type="text" value="${where}" class="${prefix}-input-field"></input></td></tr><tr><td class="${prefix}-label">Description</td><td class="${prefix}-input"><textarea id="${id}desc" class="${prefix}-input-field">${desc}</textarea></td></tr><tr><td></td><td id="${id}buttonContainer"></td></tr></table></div><div class="${prefix}-tip-cell goog-inline-block"><b>Tip</b>: You can customize the details of the event after you save it.</div>')).put("prefix", "ss-signup");

function MK(a) {
  this.o = a
}
Xa(MK);

function NK(a, b) {
  a && (a.tabIndex = b ? 0 : -1)
}
B = MK.prototype;
B.gx = function(a) {
  return "DIV" == a.tagName
};

function zha(a, b, c) {
  c.id && Ax(b, c.id);
  var d = a.Oa(),
      e = p,
      f = cv(c);
  f && Bb(f, function(a) {
    a == d ? e = m : a && this.ov(b, a, d)
  }, a);
  e || nv(c, d);
  OK(a, b, c);
  return c
}
B.ov = function(a, b, c) {
  b == c + "-disabled" ? a.Ta(p) : b == c + "-horizontal" ? PK(a, "horizontal") : b == c + "-vertical" && PK(a, "vertical")
};

function OK(a, b, c) {
  if (c) for (var d = c.firstChild, e; d && d.parentNode == c;) {
    e = d.nextSibling;
    if (1 == d.nodeType) {
      var f = a.ax(d);
      f && (f.V = d, b.isEnabled() || f.Ta(p), b.ha(f), Px(f, d))
    } else d.nodeValue && pb(d.nodeValue) != t || c.removeChild(d);
    d = e
  }
}
B.ax = function(a) {
  t: {
    var b;
    a = cv(a);
    for (var c = 0, d = a.length; c < d; c++) if (b = a[c], b = b in yy ? yy[b]() : n) {
      a = b;
      break t
    }
    a = n
  }
  return a
};
B.Tw = function(a) {
  a = a.G();
  Dw(a, m, hc);
  J && (a.hideFocus = m);
  var b = this.o;
  b && Dj(a, b)
};
B.ac = function(a) {
  return a.G()
};
B.Oa = y("goog-container");
B.Mv = function(a) {
  var b = this.Oa(),
      c = [b, "horizontal" == a.Qh ? b + "-horizontal" : b + "-vertical"];
  a.isEnabled() || c.push(b + "-disabled");
  return c
};

function QK(a, b, c) {
  Y.call(this, c);
  this.Hh = b || MK.M();
  this.Qh = a || "vertical"
}
H(QK, Y);
B = QK.prototype;
B.jl = n;
B.Yn = n;
B.Hh = n;
B.Qh = n;
B.Ig = m;
B.Hj = m;
B.kj = m;
B.Cd = -1;
B.Ac = n;
B.zg = p;
B.Jg = n;
B.ac = function() {
  return this.jl || this.Hh.ac(this)
};

function RK(a) {
  return a.Yn || (a.Yn = new gy(a.ac()))
}
B.Gc = w("Hh");
B.ia = function() {
  this.V = this.b.U("div", this.Hh.Mv(this).join(" "))
};
B.Ab = function() {
  return this.G()
};
B.rb = function(a) {
  return this.Hh.gx(a)
};
B.Ya = function(a) {
  this.V = zha(this.Hh, this, a);
  "none" == a.style.display && (this.Ig = p)
};
B.$ = function() {
  QK.J.$.call(this);
  Qx(this, function(a) {
    a.xa && SK(this, a)
  }, this);
  var a = this.G();
  this.Hh.Tw(this);
  this.setVisible(this.Ig, m);
  Z(this).I(this, "enter", this.Sw).I(this, "highlight", this.WV).I(this, "unhighlight", this.YV).I(this, "open", this.bW).I(this, "close", this.$V).I(a, "mousedown", this.XV).I(yi(a), "mouseup", this.aW).I(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.ZV);
  this.kj && TK(this, m)
};

function TK(a, b) {
  var c = Z(a),
      d = a.ac();
  b ? c.I(d, "focus", a.hw).I(d, "blur", a.Ir).I(RK(a), "key", a.we) : c.b(d, "focus", a.hw).b(d, "blur", a.Ir).b(RK(a), "key", a.we)
}
B.Na = function() {
  this.Qe(-1);
  this.Ac && this.Ac.kc(p);
  this.zg = p;
  QK.J.Na.call(this)
};
B.L = function() {
  QK.J.L.call(this);
  this.Yn && (this.Yn.aa(), this.Yn = n);
  this.Hh = this.Ac = this.Jg = this.jl = n
};
B.Sw = y(m);
B.WV = function(a) {
  var b = wG(this, a.target);
  if (-1 < b && b != this.Cd) {
    var c = UK(this);
    c && c.xe(p);
    this.Cd = b;
    c = UK(this);
    this.zg && Gy(c, m);
    this.Ac && c != this.Ac && (ty(c, 64) ? c.kc(m) : this.Ac.kc(p))
  }
  b = this.G();
  a.target.G() != n && Ej(b, "activedescendant", a.target.G().id)
};
B.YV = function(a) {
  a.target == UK(this) && (this.Cd = -1);
  this.G().removeAttribute("aria-activedescendant")
};
B.bW = function(a) {
  (a = a.target) && a != this.Ac && a.getParent() == this && (this.Ac && this.Ac.kc(p), this.Ac = a)
};
B.$V = function(a) {
  a.target == this.Ac && (this.Ac = n)
};
B.XV = function(a) {
  this.Hj && (this.zg = m);
  var b = this.ac();
  b && Wi(b) ? b.focus() : a.preventDefault()
};
B.aW = function() {
  this.zg = p
};
B.ZV = function(a) {
  var b;
  t: {
    b = a.target;
    if (this.Jg) for (var c = this.G(); b && b !== c;) {
      var d = b.id;
      if (d in this.Jg) {
        b = this.Jg[d];
        break t
      }
      b = b.parentNode
    }
    b = n
  }
  if (b) switch (a.type) {
  case "mousedown":
    b.Jf(a);
    break;
  case "mouseup":
    b.Df(a);
    break;
  case "mouseover":
    b.Cr(a);
    break;
  case "mouseout":
    b.Dr(a);
    break;
  case "contextmenu":
    b.Cn(a)
  }
};
B.hw = Na();
B.Ir = function() {
  this.Qe(-1);
  this.zg = p;
  this.Ac && this.Ac.kc(p)
};
B.we = function(a) {
  return this.isEnabled() && this.Da() && (0 != Rx(this) || this.jl) && this.cx(a) ? (a.preventDefault(), a.stopPropagation(), m) : p
};
B.cx = function(a) {
  var b = UK(this);
  if (b && typeof b.we == Ea && b.we(a) || this.Ac && this.Ac != b && typeof this.Ac.we == Ea && this.Ac.we(a)) return m;
  if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return p;
  switch (a.keyCode) {
  case 27:
    if (this.kj) this.ac().blur();
    else
    return p;
    break;
  case 36:
    VK(this);
    break;
  case 35:
    Aha(this);
    break;
  case 38:
    if ("vertical" == this.Qh) WK(this);
    else
    return p;
    break;
  case 37:
    if ("horizontal" == this.Qh) Tx(this) ? XK(this) : WK(this);
    else
    return p;
    break;
  case 40:
    if ("vertical" == this.Qh) XK(this);
    else
    return p;
    break;
  case 39:
    if ("horizontal" == this.Qh) Tx(this) ? WK(this) : XK(this);
    else
    return p;
    break;
  default:
    return p
  }
  return m
};

function SK(a, b) {
  var c = b.G(),
      c = c.id || (c.id = b.getId());
  a.Jg || (a.Jg = {});
  a.Jg[c] = b
}
B.ha = function(a, b) {
  QK.J.ha.call(this, a, b)
};
B.On = function(a, b, c) {
  a.Gj |= 2;
  a.Gj |= 64;
  a.lc(32, p);
  By(a, p);
  QK.J.On.call(this, a, b, c);
  a.xa && this.xa && SK(this, a);
  b <= this.Cd && this.Cd++
};
B.removeChild = function(a, b) {
  if (a = cb(a) ? Cx(this, a) : a) {
    var c = wG(this, a); - 1 != c && (c == this.Cd ? (a.xe(p), this.Cd = -1) : c < this.Cd && this.Cd--);
    (c = a.G()) && c.id && this.Jg && Gc(this.Jg, c.id)
  }
  a = QK.J.removeChild.call(this, a, b);
  By(a, m);
  return a
};

function PK(a, b) {
  a.G() && g(Error("Component already rendered"));
  a.Qh = b
}
B.Da = w("Ig");
B.setVisible = function(a, b) {
  if (b || this.Ig != a && this.P(a ? "show" : "hide")) {
    this.Ig = a;
    var c = this.G();
    c && (U(c, a), this.kj && NK(this.ac(), this.Hj && this.Ig), b || this.P(this.Ig ? "aftershow" : "afterhide"));
    return m
  }
  return p
};
B.isEnabled = w("Hj");
B.Ta = function(a) {
  this.Hj != a && this.P(a ? "enable" : "disable") && (a ? (this.Hj = m, Qx(this, function(a) {
    a.xF ? delete a.xF : a.Ta(m)
  })) : (Qx(this, function(a) {
    a.isEnabled() ? a.Ta(p) : a.xF = m
  }), this.zg = this.Hj = p), this.kj && NK(this.ac(), a && this.Ig))
};

function YK(a, b) {
  b != a.kj && a.xa && TK(a, b);
  a.kj = b;
  a.Hj && a.Ig && NK(a.ac(), b)
}
B.Qe = function(a) {
  (a = Sx(this, a)) ? a.xe(m) : -1 < this.Cd && UK(this).xe(p)
};
B.xe = function(a) {
  this.Qe(wG(this, a))
};

function UK(a) {
  return Sx(a, a.Cd)
}

function VK(a) {
  ZK(a, function(a, c) {
    return (a + 1) % c
  }, Rx(a) - 1)
}
function Aha(a) {
  ZK(a, function(a, c) {
    a--;
    return 0 > a ? c - 1 : a
  }, 0)
}
function XK(a) {
  ZK(a, function(a, c) {
    return (a + 1) % c
  }, a.Cd)
}
function WK(a) {
  ZK(a, function(a, c) {
    a--;
    return 0 > a ? c - 1 : a
  }, a.Cd)
}
function ZK(a, b, c) {
  c = 0 > c ? wG(a, a.Ac) : c;
  var d = Rx(a);
  c = b.call(a, c, d);
  for (var e = 0; e <= d;) {
    var f = Sx(a, c);
    if (f && a.TF(f)) {
      a.fx(c);
      break
    }
    e++;
    c = b.call(a, c, d)
  }
}
B.TF = function(a) {
  return a.Da() && a.isEnabled() && ty(a, 2)
};
B.fx = function(a) {
  this.Qe(a)
};

function $K(a) {
  this.b = a;
  this.o = new Q(this);
  this.o.I(a, "highlight", this.ZP);
  this.o.I(a, "enter", this.YP);
  this.o.I(a, "aftershow", this.XP);
  this.o.I(a, "hide", this.WP);
  aL(this, m)
}
H($K, uc);
B = $K.prototype;
B.Ym = n;
B.gw = n;
B.ux = p;
B.YP = function(a) {
  this.ux ? a.preventDefault() : this.Ym = a.target
};
B.ZP = function() {
  aL(this)
};
B.XP = function() {
  this.gw != n ? (this.b.G().scrollTop = this.gw, aL(this, p)) : aL(this, m)
};
B.WP = function(a) {
  a.target == this.b && (this.Ym = n, this.gw = this.b.G().scrollTop)
};

function aL(a, b) {
  var c = UK(a.b);
  a.b.Da() && c && c != a.Ym && (QI(c.G(), a.b.G(), b), Bha(a), a.Ym = n)
}
function Bha(a) {
  a.ux = m;
  pe(function() {
    this.ux = p
  }, 0, a)
}
B.L = function() {
  $K.J.L.call(this);
  this.o.aa();
  this.Ym = n
};

function bL(a, b, c) {
  Y.call(this);
  this.C = a;
  this.A = b || String;
  this.B = c || this.b.Sa().body
}
H(bL, Y);
B = bL.prototype;
B.ia = function() {
  this.V = this.b.createElement("input")
};
B.rb = function(a) {
  return "INPUT" == a.tagName
};
B.Ya = Oa("V");
B.$ = function() {
  bL.J.$.call(this);
  Z(this).I(this.G(), "focus", this.eF);
  Z(this).I(this.G(), "mousedown", this.eF)
};
B.L = function() {
  bL.J.L.call(this);
  this.B = n
};
B.Na = function() {
  bL.J.Na.call(this);
  this.oD()
};
B.oD = function() {
  this.o && (this.b.Uc(this.o.G()), this.o.aa(), this.ra.aa(), this.Ja.aa(), this.o = n)
};
B.eF = function() {
  if (!this.o) {
    var a = this.C(this),
        b = a[0];
    this.o = new QK;
    YK(this.o, m);
    var c = this.o,
        d = this.G();
    if (c.kj) {
      var e = c.ac(),
          f = c.xa;
      c.jl = d;
      var h = c.ac();
      f && (c.jl = e, TK(c, p), c.jl = d, hy(RK(c), h), TK(c, m))
    } else g(Error("Can't set key event target for container that doesn't support keyboard focus!"));
    for (c = 0; c < b.length; c++) this.o.ha(new Ay(String(b[c])), m);
    this.o.G().style.visibility = "hidden";
    this.o.G().style.top = 0;
    this.o.render(this.B);
    this.o.Qe(a[1]);
    this.Ja = new $K(this.o);
    this.ra = new kx(this.o.G(), new nI(this.G(), 5, m));
    BG(this.ra);
    hx(this.ra);
    this.ra.setVisible(m);
    this.o.G().style.visibility = t;
    Cha(this)
  }
};

function Cha(a) {
  var b = a.G(),
      c = Z(a);
  c.I(a.o, "action", a.CT);
  c.I(b, "keydown", function(a) {
    38 != a.keyCode && 40 != a.keyCode && 13 != a.keyCode && this.ra.setVisible(p)
  });
  c.I(a.ra, "hide", a.oD)
}
B.CT = function(a) {
  var b = this.G();
  a = a.target.jf();
  this.A && (a = this.A(a));
  this.ra.setVisible(p);
  b.value = a;
  if (b.onchange) b.onchange(n);
  this.P(v)
};

function cL(a, b, c, d, e) {
  Y.call(this);
  this.o = a;
  this.B = b;
  this.C = C(c) ? c : m;
  this.F = d;
  this.H = C(e) ? e : m;
  Z(this).I(this.o, v, this.Pt)
}
H(cL, Y);
B = cL.prototype;
B.L = function() {
  cL.J.L.call(this)
};
B.Na = function() {
  cL.J.Na.call(this)
};
B.ia = function() {
  var a = this.b.U("div", {
    "class": "ss-slot-opts"
  });
  if (this.C) {
    var b;
    b = "Offer as slots of: " + jm(Dha, {
      id: this.getId()
    }) + " minutes";
    a.innerHTML = jm(Eha, {
      id: this.getId(),
      splitLabel: b
    })
  } else {
    b = this.o.get();
    b = jm(Fha, {
      slotTypeStr: -1 == b ? "Offered as a single appointment" : t + b + " min appointment slots"
    });
    var c = this.H ? this.F ? jm(Gha, {
      bookApptLink: I(this.F),
      bookApptText: "Book an appointment slot"
    }) : t : t;
    a.innerHTML = jm(Hha, {
      slotOptionsHtml: b,
      bookApptHtml: c
    })
  }
  this.V = a
};
B.$ = function() {
  cL.J.$.call(this);
  this.C && (this.Pt(), Z(this).I(this.fa("appSingle"), v, this.uk), Z(this).I(this.fa("appSplit"), v, this.uk), Z(this).I(this.fa("slotSize"), v, this.uk))
};
B.uk = function() {
  if (this.B.Fa().ta() < this.B.Za().ta()) {
    var a = dL(this);
    if (!this.fa("appSplit").checked || Kb(a)) this.o.set(-1);
    else {
      a = this.fa("slotSize").value;
      if (!a || isNaN(a) || 0 >= a || !isFinite(a) || 0 != a % 1) a = new eL(fL[3]), a = -1 == this.o.get() ? a.get() : this.o.get(), this.fa("slotSize").value = a;
      var a = this.fa("slotSize").value,
          b = ai(vz(this.B).duration);
      a > b && (this.fa("slotSize").value = b);
      this.o.set(this.fa("slotSize").value)
    }
  }
};
B.Pt = function() {
  if (this.xa) {
    var a = this.o.get(); - 1 != a ? (this.fa("appSplit").checked = m, this.fa("slotSize").value = a, this.fa("slotSize").disabled = p) : (this.fa("appSingle").checked = m, this.fa("slotSize").disabled = m);
    Iha(this)
  }
};

function Iha(a) {
  a.A && (Z(a).b(a.A, v, a.uk), a.removeChild(a.A), a.A.aa());
  var b = dL(a),
      c = Math.min(Math.max(0, b.length - 1), 3);
  Kb(b) || (a.A = new bL(function() {
    return [b, c]
  }, k, a.G()), a.ha(a.A), Px(a.A, a.fa("slotSize")), Z(a).I(a.A, v, a.uk))
}

function dL(a) {
  var b = ai(vz(a.B).duration);
  a = Pb(fL);
  return Cb(a, function(a) {
    return a <= b
  })
}
var Eha = new V('<div><input type="radio" id="${id}.appSingle" name="splitsingle"><label for="${id}.appSingle">Offer as a single appointment slot</label></div><div><input type="radio" id="${id}.appSplit" name="splitsingle"><label for="${id}.appSplit">${splitLabel}</label></div>'),
    Hha = new V("${slotOptionsHtml}${bookApptHtml}"),
    Fha = new V('<span class="eb-slot-type">${slotTypeStr}</span>'),
    Gha = new V('<a href="${bookApptLink}" target="_blank"class="ss-book-appt lk to-disable" to-disable-tabindex="true">${bookApptText} &raquo;</a>'),
    Dha =
    new V('<input id="${id}.slotSize" style="width:3em;margin:0 0.3em">');

function eL(a, b) {
  var c = b ? Math.min(b, 30) : 30;
  iD.call(this, a || c)
}
H(eL, iD);
var fL = [5, 10, 15, 30, 45, 60];

function gL(a, b, c, d) {
  Y.call(this);
  this.o = a;
  this.A = b;
  this.B = new ez(b.get());
  this.F = c || id;
  this.C = new Q(this);
  this.kb = d || "gcal-ui-cs"
}
H(gL, Y);
B = gL.prototype;
B.Mr = m;
B.ft = n;
B.Ta = function(a) {
  this.Mr != a && (this.Mr = a, hL(this))
};
B.isEnabled = w("Mr");

function hL(a) {
  var b = a.G();
  b && (b.disabled = !a.Mr || !Pt(a.b, "OPTION", n, b).length)
}
B.rb = function(a) {
  return "SELECT" == a.tagName
};
B.Ya = function(a) {
  this.V = a;
  if ((a = a.options) && a.length) {
    var b = this.ft = {};
    Bb(a, function(a) {
      b[a.value] = m
    }, this)
  }
  a = this.C;
  a.I(this.o, "h", this.oC);
  a.I(this.A, v, this.jt);
  this.oC()
};
B.ia = function() {
  this.Ya(this.b.U("SELECT", {
    id: this.getId(),
    className: this.kb
  }))
};
B.L = function() {
  gL.J.L.call(this);
  K(this.C)
};
B.$ = function() {
  gL.J.$.call(this);
  Z(this).I(this.G(), v, this.fW)
};
B.oC = function() {
  for (var a = this.G(), b = this.b, c = this.ft, d = a.options, e = d.length - 1; 0 <= e; --e) c && d[e].value in c || a.remove(e);
  c = this.o.fv ? this.o.fv() : dh(this.o);
  c = Cb(c, this.F);
  dha(c, function(c) {
    var e = c.getKey();
    c = b.U("OPTION", {
      id: this.oa(e),
      value: e,
      text: c.getTitle()
    });
    try {
      a.add(c, d.length ? d[0] : n)
    } catch (l) {
      a.add(c, 0)
    }
  }, this);
  a.selectedIndex = 0;
  this.jt();
  hL(this)
};
B.jt = function() {
  var a = this.G(),
      b = this.o,
      c = this.A.get();
  if (b.contains(c)) for (var b = a.options, d = b.length - 1; 0 <= d; --d) if (b[d].value == c) {
    a.selectedIndex = d;
    break
  }
};
B.fW = function() {
  var a = this.G(),
      b = a.options[a.selectedIndex],
      c = this.ft;
  this.B.set(b && b.value);
  c && b.value in c ? (a.selectedIndex = 0, this.jt()) : this.A.set(this.B.get() || t);
  this.P(v)
};

function iL(a) {
  this.D = "Appointment slots";
  this.b = a;
  this.o = Yg(S(this.b), "showSelfSchedFirstTimeExperience", "true");
  this.H = !Td(a).isEnabled(34)
}
H(iL, Qy);
B = iL.prototype;
B.Qu = function(a) {
  return this.H && !isNaN(a.start.hour)
};
B.Wq = function(a) {
  if (this.o) {
    var b = [];
    b.push('<div class="cb-promo-title">What are appointment slots?</div>');
    b.push('<div class="cb-promo-content">Allow other people to book time on your calendar using appointment slots. Once you\'ve created some appointment slots you can offer these slots to others by publishing an appointment calendar on the web.</div>');
    b.push('<div class="cb-actions">');
    b.push('<div id="' + a.oa("create-link") + '" class="lk goog-inline-block">Get started with appointment slots</div>');
    b.push("<span> | </span>");
    b.push('<div id="' + a.oa("learn-more") + '" class="lk goog-inline-block"><a href="http://support.google.com/calendar/bin/answer.py?answer=190998" target="_blank">Learn more</a></div>');
    b.push("</div>")
  } else {
    var b = [],
        c = '<a href="javascript:void(0)" id="' + a.oa("editLink") + '" class="lk">Edit details <string>&raquo;</strong></a>';
    b.push(Ty("When:", Vy(a, m)));
    b.push(Ty("What:", Uy(a)));
    b.push(Ty("Calendar:", '<div id="' + a.oa("cal") + '"></div>'));
    b.push(Ty("Type:", '<div id="' + a.oa("options") + '"></div>'));
    b.push('<tr><td colspan="2" class="cb-actions"><span id="' + a.oa("create-button") + '"></span> &nbsp; ' + c + "</td></tr>")
  }
  a = b.join(t);
  return Xy(a)
};
B.Nw = function(a) {
  var b = fp(),
      c = a.fa("what").value,
      d = a.B;
  Rq(this.b).b(Ba, E(this.aS, this, a, b, c, d))
};
B.aS = function(a, b, c, d) {
  Rq(this.b);
  c = jL(this, d, c, this.B.o);
  d = (new kL(new zf(this.b, new kr))).b(c, []);
  O(d, "V", F(this.qK, c, b, "ss_new_appt_from_bubble_total"));
  d.start();
  K(this.B);
  K(this.A);
  K(this.F);
  a.P("M");
  b.b("ss_new_appt_from_bubble")
};
B.Jn = function(a) {
  if (this.o) {
    var b = Z(a),
        c = T(a.oa("create-link"));
    b.I(c, "click", E(this.vU, this, a))
  } else Jha(this, a)
};
B.qK = function(a, b, c, d) {
  b && c && b.b(c);
  b = d.target.ll();
  lL(a, b)
};
B.lW = function(a) {
  mL(this, a, a.fa("what").value, this.B.o)
};
B.vU = function(a) {
  mL(this, a);
  this.o && (a = S(this.b), a.set("showSelfSchedFirstTimeExperience", "false"), a.jb(), this.o = p)
};

function mL(a, b, c, d) {
  Rq(a.b).b(Ba, E(function() {
    var a = jL(this, b.B, c || t, d);
    nL(a);
    K(this.B);
    K(this.A);
    K(this.F);
    b.P("M")
  }, a))
}

function jL(a, b, c, d) {
  b = Kha(a.b, b, c, d);
  a.A && b.A.o.set(a.A.get());
  return b
}
function Jha(a, b) {
  var c = T(b.oa("create-button"));
  a.C = new Ky("Create slots", new Oy);
  a.C.render(c);
  var c = Ph(a.b),
      d = c.D;
  a.A = new ez(c.o.uid);
  (new gL(d, a.A, function(a) {
    return a.hb()
  }, "cb-calendar")).render(T(b.oa("cal")));
  window.setTimeout(function() {
    b.fa("what").focus()
  }, 0);
  c = new uz(b.B);
  d = new eL(k, ai(vz(c).duration));
  a.B = new cL(d, c);
  a.B.render(b.fa("options"));
  Lha(a, b)
}

function Lha(a, b) {
  var c = Z(b);
  c.I(a.C, "action", F(b.In));
  c.I(b.fa("what"), "keydown", F(a.kW, b));
  c.I(b.fa("editLink"), "click", E(a.lW, a, b))
}
B.kW = function(a, b) {
  3 != b.keyCode && 13 != b.keyCode || a.In(b)
};
B.tj = function(a) {
  if (!this.o) {
    var b = a.fa("what");
    return iL.J.tj.call(this, a, b)
  }
  return new Py
};
B.uj = function(a, b) {
  if (!this.o) {
    var c = a.fa("what");
    iL.J.uj.call(this, a, b, c)
  }
};

function oL(a) {
  this.A = a || "unknown"
}
oL.prototype.getType = w("A");

function pL() {}
pL.prototype.tu = function() {
  return this.b || []
};

function Mha() {};

function qL() {
  this.b = R()
}
Xa(qL);
var Nha = new V('<div id="fbItem" class="fbox fb-text">${text}</div>'),
    rL = new V('<a href="${url}">${text}</a>');
B = qL.prototype;
B.G = function() {
  return T("funbox")
};

function sL(a) {
  var b = T("fbItem");
  b && (b.innerHTML = tL(a))
}
function uL() {
  return Sw() ? "http://www.google.com/calendar/hosted/gp/" + Rw() : "http://www.google.com/calendar/gp"
}
B.render = function() {
  var a = this.G();
  if (a) {
    if (bi()) {
      var b = jm(rL, {
        url: I(uL()),
        text: "mobile version"
      });
      a.innerHTML = jm(Nha, {
        text: "Switch to " + b
      })
    } else a.innerHTML = '<div class="fbox fb-xtra"><span id="fbNext" class="fb-next-tip">Next tip &raquo;</span></div><div id="fbItem" class="fbox fb-text"></div><div class="clearFloats"></div>', this.A || (this.A = new lA(this.G()), qA(this.A, E(this.AV, this), E(this.zV, this)));
    this.$p()
  }
};
B.$p = function() {
  var a = this.G(),
      b = Xp(this.b);
  if (a) if (bi()) a.style.display = t, b.Wf();
  else {
    var c = S(this.b);
    (c = zo(this.b) && Yg(c, "funboxVisible", "false") && this.o ? vL(this.o) : n) && sL(c);
    c = c ? t : "none";
    a.style.display != c && (a.style.display = c, b.Wf())
  }
};
B.AV = function(a) {
  return "fbNext" == a.id ? a : n
};
B.zV = function() {
  var a;
  a = this.o;
  ++a.B >= a.b.length && (a.B = 0);
  a = vL(a);
  sL(a)
};

function wL() {}
function Oha(a, b, c, d, e) {
  var f = E(a.b, a, b);
  a = R();
  Rq(a).b(Ba, function() {
    xL.M().show(c, d, f, e)
  })
}
wL.prototype.b = function(a) {
  var b = ["cid", a];
  a = R();
  Rq(a).b(Ba, function() {
    xL.M().uT(b)
  })
};

function yL(a) {
  P.call(this);
  this.La = n;
  this.V = a;
  a = J || ic && !qc("531") && "TEXTAREA" == a.tagName;
  this.o = new Q(this);
  this.o.I(this.V, a ? ["keydown", "paste", "cut", "drop", "input"] : "input", this)
}
H(yL, P);
yL.prototype.handleEvent = function(a) {
  if ("input" == a.type) J && qc(10) && 0 == a.keyCode && 0 == a.D || (zL(this), gc && this.V != yi(this.V).activeElement || this.P(AL(a)));
  else if ("keydown" != a.type || Tga(a)) {
    var b = "keydown" == a.type ? this.V.value : n;
    J && 229 == a.keyCode && (b = n);
    var c = AL(a);
    zL(this);
    this.La = pe(function() {
      this.La = n;
      this.V.value != b && this.P(c)
    }, 0, this)
  }
};

function zL(a) {
  a.La != n && (qe(a.La), a.La = n)
}
function AL(a) {
  a = new wc(a.b);
  a.type = "input";
  return a
}
yL.prototype.L = function() {
  yL.J.L.call(this);
  this.o.aa();
  zL(this);
  delete this.V
};

function Pha(a) {
  var b = fp();
  a = a || W("quickadd").value;
  if (/\S/.test(a)) {
    a = ["ctext", a, "qa-src", "quick-add-box"];
    var c = R();
    Af(c).send("compose", a, 11, function(a) {
      a = nz(a);
      a != n ? TF(a.summary, a.nc, a.location, a.start, a.end, a.Al, a.Rr, a.HD) : Zy();
      b.b("quick_add_total")
    }, function() {
      Ir(c).b("Failed to quick add event");
      b.b("quick_add_total")
    }, k, k, 1)
  }
}
function BL(a) {
  return a ? yv(a) : t
}

function nz(a) {
  a = eval(a)[0];
  a = {
    Li: n,
    summary: PH(pb(a[1] || t)),
    nc: a[2],
    location: a[3],
    start: a[4],
    end: a[5],
    Al: a[6],
    Rr: a[7],
    HD: a[8]
  };
  a.nc = BL(a.nc);
  a.location = BL(a.location);
  if (a.Al) for (var b = 0; b < a.Al.length; b++) a.Al[b] = BL(a.Al[b]);
  a.Rr = BL(a.Rr);
  a.nc && (a.nc = pb(a.nc));
  return a
}
function TF(a, b, c, d, e, f, h, l, q) {
  var r = R();
  Rq(r).b(Ba, function() {
    return kI(a, b, c, d, e, f, h, l, q)
  })
};

function Qha(a) {
  this.b = a
};

function CL(a, b) {
  P.call(this);
  this.b = [];
  this.K = !! b;
  this.o = new Q(this);
  this.H = window.parent != window;
  if (a) if (Za(a)) for (var c = 0; c < a.length; c++) DL(this, a[c].Sa());
  else DL(this, a.Sa());
  else DL(this, wi().Sa());
  this.A = ib()
}
H(CL, P);
CL.prototype.C = 0;
var Rha = ["click", "dblclick", "mousedown", "mousemove", "mouseup"],
    Sha = ["touchend", "touchmove", "touchstart"],
    Tha = ["keydown", "keyup"];
CL.prototype.L = function() {
  CL.J.L.call(this);
  this.o.aa();
  this.o = n;
  delete this.b
};

function DL(a, b) {
  if (!Jb(a.b, b)) {
    a.b.push(b);
    var c = !a.K,
        d = Ob(Tha, Rha);
    a.H || Ev(d, Sha);
    a.o.I(b, d, a.F, c)
  }
}
CL.prototype.F = function(a) {
  var b = p;
  switch (a.type) {
  case "mousemove":
    if ("number" == typeof this.B && this.B != a.clientX || "number" == typeof this.D && this.D != a.clientY) b = m;
    this.B = a.clientX;
    this.D = a.clientY;
    break;
  default:
    b = m
  }
  b && (this.A = a = ib(), a > this.C && (this.P("activity"), this.C = a + 3E3))
};

function EL(a, b) {
  P.call(this);
  var c;
  (c = b) || (FL.add(this), GL == n && (GL = new CL), c = GL);
  this.F = a;
  this.A = c;
  this.C = E(this.H, this);
  HL(this)
}
H(EL, P);
EL.prototype.B = p;
EL.prototype.o = n;
EL.prototype.b = p;
var GL = n,
    FL = new ne;

function HL(a) {
  var b = a.F + 1 - (ib() - a.A.A);
  0 < b ? a.o = pe(a.C, b) : (a.b = m, O(a.A, "activity", a.D, p, a), a.B = m, a.P("idle"))
}
EL.prototype.H = function() {
  this.o = n;
  HL(this)
};
EL.prototype.D = function() {
  this.b = p;
  IL(this);
  this.P("active");
  HL(this)
};

function IL(a) {
  a.B && ($c(a.A, "activity", a.D, p, a), a.B = p)
}
EL.prototype.L = function() {
  IL(this);
  this.o != n && (Va.clearTimeout(this.o), this.o = n);
  FL.remove(this);
  GL != n && FL.isEmpty() && (GL.aa(), GL = n);
  EL.J.L.call(this)
};

function JL(a, b, c) {
  this.b = a;
  this.o = new Q(this);
  this.o.I(b, "e", this.kM);
  this.C = c;
  this.o.I(c, "idle", this.It);
  this.o.I(c, "active", E(this.Zt, this, m));
  a = this.b.eb;
  "connected" == a ? this.Zt(p) : "disconnected" == a && (this.A = window.setInterval(E(this.Fi, this), 1E4))
}
H(JL, uc);
B = JL.prototype;
B.Vq = 0;
B.pv = 0;
B.kM = function(a) {
  KL(this, a.o)
};

function KL(a, b) {
  var c = cI(b),
      d = dI(String(b.C)),
      d = "ping" == d || "hello" == d;
  a.D && VI(a.D, c) ? KG(a.b, "loggedOut") : d && KG(a.b, "?");
  if ("loggedOut" != a.b.eb) if (100 <= c.b && 304 >= c.b) a.pv = 0, "connected" != a.b.eb && (a.Vq++, 3 <= a.Vq ? (KG(a.b, "connected"), LL(a), a.C.b || a.Zt(p)) : window.setTimeout(E(a.Fi, a), 5E3));
  else if (c = c.b, "number" != typeof c || !c || 100 > c || 1E3 <= c) a.Vq = 0, "disconnected" != a.b.eb && (a.pv++, 3 <= a.pv ? (KG(a.b, "disconnected"), a.It(), LL(a), a.A = window.setInterval(E(a.Fi, a), 1E4)) : window.setTimeout(E(a.Fi, a), 2E3))
}

function LL(a) {
  a.A && (window.clearInterval(a.A), a.A = 0)
}
B.It = function() {
  this.B && (window.clearInterval(this.B), this.B = 0)
};
B.Zt = function(a) {
  "connected" == this.b.eb && (this.It(), a && this.Fi(), this.B = window.setInterval(E(this.Fi, this), 3E4))
};
B.Fi = function() {
  YI("hello", E(this.FY, this))
};
B.FY = function(a) {
  KL(this, a.target)
};
B.L = function() {
  this.o.aa();
  this.o = n;
  this.A && (window.clearInterval(this.A), this.A = 0);
  JL.J.L.call(this)
};
B.kO = function() {
  "connected" != this.b.eb && (this.Vq = 2, this.Fi())
};

function ML() {
  var a = [];
  this.b = {
    un: function(b) {
      if (!b.length) return 0;
      for (var c = 0; c < a.length; ++c) if (a[c][0].test(b[0])) return a[c][1].un(b);
      return NaN
    }
  };
  Bb(Uha, function(b) {
    var c = [],
        d;
    for (d in b) {
      var e = b[d];
      "number" === typeof e && (this.b[d] = e, c.push(d))
    }
    a.push([new RegExp(c.join("|")), b])
  }, this)
}
Xa(ML);
var Uha = [{
  "\u96f6": 0,
  "\u3007": 0,
  "\u58f9": 1,
  "\u4e00": 1,
  "\u5f0c": 1,
  "\u8cb3": 2,
  "\u8d30": 2,
  "\u4e8c": 2,
  "\u5f0d": 2,
  "\u5169": 2,
  "\u4e24": 2,
  "\u53c4": 3,
  "\u53c1": 3,
  "\u4e09": 3,
  "\u5f0e": 3,
  "\u53c3": 3,
  "\u53c2": 3,
  "\u8086": 4,
  "\u56db": 4,
  "\u4f0d": 5,
  "\u4e94": 5,
  "\u9678": 6,
  "\u516d": 6,
  "\u67d2": 7,
  "\u4e03": 7,
  "\u634c": 8,
  "\u516b": 8,
  "\u7396": 9,
  "\u4e5d": 9,
  "\u62fe": 10,
  "\u5341": 10,
  "\u4ec0": 10,
  "\u5ff5": 20,
  "\u8cb3\u62fe": 20,
  "\u5eff": 20,
  "\u5344": 20,
  "\u4e8c\u5341": 20,
  "\u53c4\u62fe": 30,
  "\u5345": 30,
  "\u4e09\u5341": 30,
  "\u8086\u62fe": 40,
  "\u534c": 40,
  "\u56db\u5341": 40,
  "\u4f70": 100,
  "\u767e": 100,
  "\u4edf": 1E3,
  "\u5343": 1E3,
  "\u842c": 1E4,
  "\u4e07": 1E4,
  "\u767e\u842c": 1E6,
  "\u5104": 1E8,
  "\u4eac": 1E9,
  "\u5409": 1E9,
  "\u5793": 1E12,
  "\u592a": 1E12,
  "\u5146": 1E12,
  "\u62cd": 1E15,
  "\u827e": 1E18,
  "\u6cfd": 1E21,
  "\u7686": 1E21,
  "\u5c27": 1E24,
  "\u4f51": 1E24,
  "\u5206": .1,
  "\u5398": .01,
  "\u91d0": .01,
  "\u6beb": .001,
  "\u6bdb": .001,
  "\u5fae": 1E-6,
  "\u5875": 1E-9,
  "\u5948": 1E-9,
  "\u7eb3": 1E-9,
  "\u6f20": 1E-12,
  "\u76ae": 1E-12,
  un: function(a) {
    function b(a) {
      if (1E3 >= a) return p;
      a = Math.log(a) / Math.log(1E4);
      return .01 > Math.abs(a - Math.round(a))
    }
    function c(a) {
      for (var b = 0, d = 0, e = 0, f, h = 0; h < a.length; ++h) {
        var z = a[h],
            A;
        "number" === typeof z ? (A = z, 10 > A ? A = 1 > A && 0 < A : (A /= 10, A = 1 === A || 4 < A), A = A && (10 !== z || d)) : (A = p, z = c(z));
        A ? (b += (d || 1) * z, e = z, d = 0, f = p) : (f && (d *= 10, e /= 10), d += z, f = 10 > z && (0 === z || 1 <= z), z || (e = 0))
      }
      return b + d * (e && 10 > d ? e / 10 : 1)
    }
    for (var d = [], e = 0, f = 0; f < a.length; ++f) {
      var h = this[a[f]];
      b(h) && (d.splice(e, d.length - e, d.slice(e, d.length)), e = d.length + 1);
      d.push(h)
    }
    return c(d)
  }
}, {
  "\u96f6": 0,
  "\u3007": 0,
  "\uc601": 0,
  "\u4e00": 1,
  "\uc77c": 1,
  "\u4e8c": 2,
  "\uc774": 2,
  "\u4e09": 3,
  "\uc0bc": 3,
  "\u56db": 4,
  "\uc0ac": 4,
  "\u4e94": 5,
  "\uc624": 5,
  "\u516d": 6,
  "\uc721": 6,
  "\u4e03": 7,
  "\uce60": 7,
  "\u516b": 8,
  "\ud314": 8,
  "\u4e5d": 9,
  "\uad6c": 9,
  "\u5341": 10,
  "\uc2ed": 10,
  "\u767e": 100,
  "\ubc31": 100,
  un: function(a) {
    for (var b = 0, c = n, d = 0; d < a.length; ++d) {
      var e = this[a[d]];
      c !== n && e > c ? (b = (b || 1) * e, c = Infinity) : (b += e, c = e)
    }
    return b
  }
}, {
  "\ud558\ub098": 1,
  "\ud55c": 1,
  "\ub458": 2,
  "\ub450": 2,
  "\uc14b": 3,
  "\uc138": 3,
  "\ub137": 4,
  "\ub124": 4,
  "\ub2e4\uc12f": 5,
  "\uc5ec\uc12f": 6,
  "\uc77c\uacf1": 7,
  "\uc5ec\ub35f": 8,
  "\uc544\ud649": 9,
  "\uc5f4": 10,
  "\uc5f4 \ud558\ub098": 11,
  "\uc5f4 \ub458": 12,
  "\uc5f4 \uc14b": 13,
  "\uc5f4 \ub137": 14,
  "\uc5f4 \ub2e4\uc12f": 15,
  "\uc5f4 \uc5ec\uc12f": 16,
  "\uc5f4 \uc77c\uacf1": 17,
  "\uc5f4 \uc5ec\ub35f": 18,
  "\uc5f4 \uc544\ud649": 19,
  "\uc2a4\ubb3c": 20,
  "\uc11c\ub978": 30,
  "\ub9c8\ud754": 40,
  "\uc270": 50,
  "\uc608\uc21c": 60,
  "\uc77c\ud754": 70,
  "\uc5ec\ub4e0": 80,
  "\uc544\ud754": 90,
  un: function(a) {
    for (var b = 0, c = 0; c < a.length; ++c) b += this[a[c]];
    return b
  }
}];

function Vha(a, b, c) {
  this.A = a;
  this.b = b;
  this.o = c
}
var NL = {
  "\u5e74": 1,
  "\u6708": 2,
  "\u65e5": 4,
  "\ub144": 1,
  "\uc6d4": 2,
  "\uc77c": 4
},
    OL = RegExp("([:\u65f6\u5206\u79d2\u6642\uc2dc\ubd84\ucd08/,;_\\-\\.\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\u592a\u5e73\u6d0b\u6807\u51c6\u65f6\u95f4\u590f\u4ee4\u516c\u5143]+)", "g"),
    PL = [],
    QL;
for (QL in NL) PL.push(QL);
for (var PL = PL.join("|"), RL = [], SL = ["\\d+"], TL = 0; TL < RL.length; ++TL) {
  var UL = [];
  for (QL in RL[TL]) UL.push(QL);
  SL.push("(?:[" + UL.join(t) + "]+)")
}
var VL = new RegExp("(" + ("(" + SL.join("|") + ")" + (PL ? "(?:(?:[\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000]*(" + PL + "))?)" : t)) + ")", "g"),
    Wha = RegExp("([A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0904-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e4e\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc\u0edd\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10d0-\u10fa\u10fc\u1100-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bc0-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2183\u2184\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2d00-\u2d25\u2d30-\u2d65\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005\u3006\u3031-\u3035\u303b\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcb\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6e5\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790\ua791\ua7a0-\ua7a9\ua7fa-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]+)", "g");

function WL(a) {
  for (var b = [], c = /i/.test("i"), d = a.length; 0 <= --d;) {
    var e = a[d];
    e && (c && (e = e.toLowerCase()), b[d] = e)
  }
  b.sort();
  for (d = a = 0; d < b.length; ++d) b[d] === b[d - 1] ? ++a : b[d - a] = b[d];
  a && (b = b.slice(0, b.length - a));
  return new RegExp(b.join("|"), "i")
}
var XL = WL(["am".replace(OL, t), "am", t]),
    YL = WL(["a"]),
    ZL = WL(["pm".replace(OL, t), "pm", t]),
    $L = WL(["p"]),
    Xha = RegExp("(?::|\u65f6|\u5206|\u79d2|\uc2dc|\ubd84|\ucd08)", "g");

function aM(a) {
  for (var b = {}, c = 0; c < a.length; ++c) if ("string" == typeof a[c]) for (var d = a[c], e = 0; e < d.length - 1; ++e)" " == d.charAt(e) && (b[d.substring(0, e)] = m);
  return b
}
var bM = function() {
  switch ("en") {
  case "th":
    return aM(BI);
  case "vi":
    return aM(BI.concat(AI));
  default:
    return n
  }
}(),
    Yha = RegExp("[\ufeff\x00]", "g");

function cM(a, b, c, d, e) {
  this.b = !! b;
  a && dM(this, a, d);
  this.depth = e != k ? e : this.ld || 0;
  this.b && (this.depth *= -1);
  this.o = !c
}
H(cM, be);
B = cM.prototype;
B.Zc = n;
B.ld = 0;
B.Dv = p;

function dM(a, b, c, d) {
  if (a.Zc = b) a.ld = db(c) ? c : 1 != a.Zc.nodeType ? 0 : a.b ? -1 : 1;
  db(d) && (a.depth = d)
}
B.Rf = Qa(85);
B.clone = function() {
  return new cM(this.Zc, this.b, !this.o, this.ld, this.depth)
};
B.next = function() {
  var a;
  if (this.Dv) {
    (!this.Zc || this.o && 0 == this.depth) && g(ae);
    a = this.Zc;
    var b = this.b ? -1 : 1;
    if (this.ld == b) {
      var c = this.b ? a.lastChild : a.firstChild;
      c ? dM(this, c) : dM(this, a, -1 * b)
    } else(c = this.b ? a.previousSibling : a.nextSibling) ? dM(this, c) : dM(this, a.parentNode, -1 * b);
    this.depth += this.ld * (this.b ? -1 : 1)
  } else this.Dv = m;
  (a = this.Zc) || g(ae);
  return a
};
B.equals = function(a) {
  return a.Zc == this.Zc && (!this.Zc || a.ld == this.ld)
};
B.splice = function(a) {
  var b = this.Zc,
      c = this.b ? 1 : -1;
  this.ld == c && (this.ld = -1 * c, this.depth += this.ld * (this.b ? -1 : 1));
  this.b = !this.b;
  cM.prototype.next.call(this);
  this.b = !this.b;
  for (var c = $a(arguments[0]) ? arguments[0] : arguments, d = c.length - 1; 0 <= d; d--) Ki(c[d], b);
  Li(b)
};

function eM(a, b, c, d) {
  cM.call(this, a, b, c, n, d)
}
H(eM, cM);
eM.prototype.next = function() {
  do eM.J.next.call(this);
  while (-1 == this.ld);
  return this.Zc
};

function fM(a) {
  P.call(this);
  this.b = a;
  O(this.b, gM, this)
}
H(fM, P);
var gM = J ? ["keypress"] : zn ? ["input", "keypress"] : ["input"];
fM.prototype.handleEvent = function(a) {
  "input" != a.type && "keypress" != a.type || this.P(new L("ba", a.target))
};
fM.prototype.L = function() {
  $c(this.b, gM, this);
  fM.J.L.call(this)
};

function hM() {
  this.b = []
}
H(hM, uc);
Xa(hM);
B = hM.prototype;
B.wl = n;
B.init = function(a) {
  this.wl || (this.wl = new fM(a), O(this.wl, "ba", this.bY, p, this))
};
B.L = function() {
  this.wl && (this.wl.aa(), this.wl = n);
  this.b = [];
  hM.J.L.call(this)
};
B.Os = function(a) {
  var b = gb(a),
      c = this.b[b];
  c ? MI(a) : C(c) || (this.b[b] = a.dir == t && a.style.direction == t && ("INPUT" == a.tagName ? "text" == a.type : m), this.b[b] && MI(a))
};

function iM(a) {
  return "INPUT" == a.tagName || "TEXTAREA" == a.tagName
}
B.bY = function(a) {
  a = a.target;
  iM(a) && this.Os(a)
};

function jM() {
  P.call(this);
  this.b = 0;
  this.H = this.A = n
}
H(jM, P);
jM.prototype.B = function() {
  this.fe("begin")
};
jM.prototype.C = function() {
  this.fe("end")
};
jM.prototype.fe = function(a) {
  this.P(a)
};

function Zha(a, b) {
  Za(b) || (b = [b]);
  var c = Db(b, function(a) {
    return cb(a) ? a : a.cY + " " + a.duration + "s " + a.timing + " " + a.km + "s"
  });
  ij(a, "transition", c.join(","))
}
var $ha = function(a) {
  var b = p,
      c;
  return function() {
    b || (c = a(), b = m);
    return c
  }
}(function() {
  if (J) return qc("10.0");
  var a = document.createElement("div"),
      b = Vu(),
      c = {
      transition: "opacity 1s linear"
      };
  b && (c[b + "-transition"] = "opacity 1s linear");
  c = {
    style: c
  };
  aI.test("div") || g(Error("Invalid tag name <div>."));
  "div" in Dba && g(Error("Tag name <div> is not allowed for SafeHtml."));
  var d = n,
      b = "<div";
  if (c) for (var e in c) {
    aI.test(e) || g(Error('Invalid attribute name "' + e + '".'));
    var f = c[e];
    if (f != n) {
      if (f instanceof QG) f = DH(f);
      else if ("style" == e.toLowerCase()) {
        fb(f) || g(Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof f + " given: " + f));
        if (!(f instanceof $i)) {
          var h = t,
              l = k;
          for (l in f) {
            /^[-_a-zA-Z0-9]+$/.test(l) || g(Error("Name allows only [-_a-zA-Z0-9], got: " + l));
            var q = f[l];
            q != n && (q instanceof QG ? q = DH(q) : kga.test(q) || (q = "zClosurez"), h += l + ":" + q + ";")
          }
          f = h ? bj(h) : Bba
        }
        h = k;
        h = f instanceof $i && f.constructor === $i && f.o === aj ? f.b : "type_error:SafeStyle";
        f = h
      } else / ^ on / i.test(e) && g(Error('Attribute "' + e + '" requires goog.string.Const value, "' + f + '" given.')), f instanceof NH ? f = f instanceof NH && f.constructor === NH && f.b === CH ? t : "type_error:SafeUrl" : e.toLowerCase() in Cba && g(Error('Attribute "' + e + '" requires goog.string.Const or goog.html.SafeUrl value, "' + f + '" given.'));
      b += " " + e + '="' + I(String(f)) + '"'
    }
  }
  e = k;
  C(e) ? Za(e) || (e = [e]) : e = [];
  Aba.div === m ? b += ">" : (d = vga(e), b += ">" + YG(d) + "</div>", d = d.qj());
  (c = c && c.dir) && (/^(ltr|rtl|auto)$/i.test(c) ? d = 0 : d = n);
  b = ej(b, d);
  qH(a, b);
  return RI(a.firstChild, "transition") != t
});

function kM(a, b, c, d, e) {
  jM.call(this);
  this.V = a;
  this.F = b;
  this.X = c;
  this.o = d;
  this.K = Za(e) ? e : [e]
}
H(kM, jM);
B = kM.prototype;
B.rf = function() {
  if (1 == this.b) return p;
  this.B();
  this.fe("play");
  this.A = ib();
  this.b = 1;
  if ($ha()) return ij(this.V, this.X), this.D = pe(this.uO, k, this), m;
  this.Et(p);
  return p
};
B.uO = function() {
  Zha(this.V, this.K);
  ij(this.V, this.o);
  this.D = pe(E(this.Et, this, p), 1E3 * this.F)
};
B.stop = function() {
  1 == this.b && this.Et(m)
};
B.Et = function(a) {
  ij(this.V, "transition", t);
  qe(this.D);
  ij(this.V, this.o);
  this.H = ib();
  this.b = 0;
  a ? this.fe("stop") : this.fe("finish");
  this.C()
};
B.L = function() {
  this.stop();
  kM.J.L.call(this)
};

function lM(a, b, c, d, e) {
  return new kM(a, b, {
    opacity: d
  }, {
    opacity: e
  }, {
    cY: "opacity",
    duration: b,
    timing: c,
    km: 0
  })
};

function mM(a, b, c) {
  this.X = c || (a ? wi(T(a)) : wi());
  kx.call(this, this.X.U("div", {
    style: "position:absolute;display:none;"
  }));
  this.O = new ti(1, 1);
  this.o = new ne;
  a && nM(this, a);
  b != n && this.lh(b)
}
H(mM, kx);
var oM = [];
B = mM.prototype;
B.Kc = n;
B.className = "goog-tooltip";
B.ku = 500;
B.Bp = 0;

function nM(a, b) {
  b = T(b);
  a.o.add(b);
  O(b, "mouseover", a.nE, p, a);
  O(b, "mouseout", a.Zr, p, a);
  O(b, "mousemove", a.mE, p, a);
  O(b, "focus", a.lE, p, a);
  O(b, "blur", a.Zr, p, a)
}

function pM(a, b) {
  if (b) {
    var c = T(b);
    qM(a, c);
    a.o.remove(c)
  } else {
    for (var d = a.o.Hb(), e = 0; c = d[e]; e++) qM(a, c);
    a.o.clear()
  }
}
function qM(a, b) {
  $c(b, "mouseover", a.nE, p, a);
  $c(b, "mouseout", a.Zr, p, a);
  $c(b, "mousemove", a.mE, p, a);
  $c(b, "focus", a.lE, p, a);
  $c(b, "blur", a.Zr, p, a)
}
B.lh = function(a) {
  Ti(this.G(), a)
};
B.Hi = function(a) {
  var b = this.G();
  b && Li(b);
  mM.J.Hi.call(this, a);
  a && (b = this.X.Sa().body, b.insertBefore(a, b.lastChild))
};

function rM(a) {
  return a.B ? a.Da() ? 4 : 1 : a.H ? 3 : a.Da() ? 2 : 0
}
B.Av = function() {
  if (!ex.prototype.Av.call(this)) return p;
  if (this.b) for (var a, b = 0; a = oM[b]; b++) Si(a.G(), this.b) || a.setVisible(p);
  Jb(oM, this) || oM.push(this);
  a = this.G();
  a.className = this.className;
  sM(this);
  O(a, "mouseover", this.mD, p, this);
  O(a, "mouseout", this.lD, p, this);
  tM(this);
  return m
};
B.Wv = function() {
  Mb(oM, this);
  for (var a = this.G(), b, c = 0; b = oM[c]; c++) b.b && Si(a, b.b) && b.setVisible(p);
  this.Ia && uM(this.Ia);
  $c(a, "mouseover", this.mD, p, this);
  $c(a, "mouseout", this.lD, p, this);
  this.b = k;
  0 == rM(this) && (this.da = p);
  ex.prototype.Wv.call(this)
};
B.QC = function(a, b) {
  this.b == a && this.o.contains(this.b) && (this.da || !this.ka ? (this.setVisible(p), this.Da() || (this.b = a, AG(this, b || this.$u(0)), this.setVisible(m))) : this.b = k);
  this.B = k
};
B.kT = function(a) {
  this.H = k;
  a == this.b && (this.Kc != n && (this.Kc == this.G() || this.o.contains(this.Kc)) || this.Z && this.Z.Kc || this.setVisible(p))
};

function vM(a, b) {
  var c = Zi(a.X);
  a.O.x = b.clientX + c.x;
  a.O.y = b.clientY + c.y
}
B.nE = function(a) {
  var b = wM(this, a.target);
  this.Kc = b;
  sM(this);
  b != this.b && (this.b = b, this.B || (this.B = pe(E(this.QC, this, b, k), this.ku)), xM(this), vM(this, a))
};

function wM(a, b) {
  try {
    for (; b && !a.o.contains(b);) b = b.parentNode;
    return b
  } catch (c) {
    return n
  }
}
B.mE = function(a) {
  vM(this, a);
  this.da = m
};
B.lE = function(a) {
  this.Kc = a = wM(this, a.target);
  this.da = m;
  if (this.b != a) {
    this.b = a;
    var b = this.$u(1);
    sM(this);
    this.B || (this.B = pe(E(this.QC, this, a, b), this.ku));
    xM(this)
  }
};
B.$u = function(a) {
  return 0 == a ? (a = this.O.clone(), new yM(a)) : new zM(this.Kc)
};

function xM(a) {
  if (a.b) for (var b, c = 0; b = oM[c]; c++) Si(b.G(), a.b) && (b.Z = a, a.Ia = b)
}
B.Zr = function(a) {
  var b = wM(this, a.target),
      c = wM(this, a.o);
  b != c && (b == this.Kc && (this.Kc = n), tM(this), this.da = p, !this.Da() || a.o && Si(this.G(), a.o) ? this.b = k : uM(this))
};
B.mD = function() {
  var a = this.G();
  this.Kc != a && (sM(this), this.Kc = a)
};
B.lD = function(a) {
  var b = this.G();
  this.Kc != b || a.o && Si(b, a.o) || (this.Kc = n, uM(this))
};

function tM(a) {
  a.B && (qe(a.B), a.B = k)
}

function uM(a) {
  2 == rM(a) && (a.H = pe(E(a.kT, a, a.b), a.Bp))
}
function sM(a) {
  a.H && (qe(a.H), a.H = k)
}
B.L = function() {
  this.setVisible(p);
  tM(this);
  pM(this);
  this.G() && Li(this.G());
  this.Kc = n;
  delete this.X;
  mM.J.L.call(this)
};

function yM(a, b) {
  lI.call(this, a, b)
}
H(yM, lI);
yM.prototype.Ua = function(a, b, c) {
  b = pj(a);
  b = gv(b);
  c = c ? new gj(c.top + 10, c.right, c.bottom, c.left + 10) : new gj(10, 0, 0, 10);
  kv(this.b, a, 4, c, b, 9) & 496 && kv(this.b, a, 4, c, b, 5)
};

function zM(a) {
  RH.call(this, a, 3)
}
H(zM, RH);
zM.prototype.Ua = function(a, b, c) {
  var d = new ti(10, 0);
  qv(this.element, this.b, a, b, d, c, 9) & 496 && qv(this.element, 2, a, 1, d, c, 5)
};

function AM(a, b, c, d, e) {
  d = d || (b ? wi(T(b)) : wi());
  this.A = a;
  d.Sa().body.appendChild(this.A.G());
  U(this.A.G(), p);
  this.className = aH();
  mM.call(this, b, c, d);
  this.dc(this.A);
  this.Hi(this.A.G());
  a = lM(this.A.G(), .13, "ease-out", 0, 1);
  b = lM(this.A.G(), .13, "ease-in", 1, 0);
  this.C = a;
  this.D = b;
  this.F = new nH(aH(), m);
  oH(this.F, e || 1, k, k, -1);
  e = this.F;
  a = this.A.A;
  e.b = this.A.G();
  e.A = a;
  this.F.Ht = m;
  this.ku = 300
}
H(AM, mM);
AM.prototype.K = function(a, b, c, d) {
  oH(this.F, a, b, c, d)
};
AM.prototype.$u = function() {
  this.F.Ug(this.Kc);
  return this.F
};
AM.prototype.lh = function(a) {
  Ti(this.A.b, a)
};

function BM(a, b, c, d) {
  c = c || (a ? wi(T(a)) : wi());
  var e = new $G(c);
  AM.call(this, e, a, b, c, d)
}
H(BM, AM);
BM.prototype.K = function(a, b, c, d) {
  BM.J.K.call(this, a, b, c, d)
};

function CM(a) {
  this.B = 0;
  this.K = a;
  this.o = new Q(this);
  this.A = new BM;
  this.b = new BM;
  this.b.K(3);
  this.b.lh("Drag to hide time range");
  gx(this.b, p)
}
B = CM.prototype;
B.nT = function(a) {
  this.X = a;
  this.B = 1
};
B.hT = function() {
  this.Ut();
  Yd(this.o);
  pM(this.A);
  pM(this.b);
  this.B = 1
};
B.Um = function(a, b, c, d) {
  this.C = a;
  this.F = b;
  this.D = c;
  this.H = d;
  nM(this.A, this.C);
  nM(this.A, this.F);
  this.o.I(this.A, "beforeshow", this.bI);
  this.D && nM(this.b, this.D);
  this.H && nM(this.b, this.H);
  this.B = 2;
  DM(this)
};
B.Ev = function() {
  1 != this.B && this.b.Da() && (this.b.Ua(), DM(this))
};

function DM(a) {
  var b = a.X.A.A,
      c;
  c = a.X;
  var d = c.o.b;
  c = c.A.A ? jo(c.A).b : d.o;
  var d = a.X,
      e = d.o.b,
      d = d.A.A ? jo(d.A).o : e.b;
  c = Sa(Tm(a.K, 0, 0), Tm(a.K, c, 0));
  d = Sa(Tm(a.K, d, 0), Tm(a.K, 24, 0));
  e = a.A.Kc == a.C;
  b ? a.A.lh("Click to show " + (e ? c : d)) : a.A.lh("Click to hide " + (e ? c : d));
  2 != a.B && a.X.C ? 3 == a.B ? a.b.lh("Hide " + c) : 4 == a.B && a.b.lh("Hide " + d) : a.b.lh("Drag to hide time range")
}
B.Ut = function() {
  1 != this.B && (this.A.setVisible(p), this.b.setVisible(p))
};
B.QJ = function(a) {
  1 != this.B && (pM(this.A), this.b.Bp = 2E3, a == this.D ? (pM(this.b, this.H), this.B = 3) : (pM(this.b, this.D), this.B = 4))
};
B.WN = function() {
  if (1 != this.B) {
    nM(this.A, this.C);
    nM(this.A, this.F);
    var a = this.D,
        b = this.H;
    a && !this.b.o.contains(a) && nM(this.b, a);
    b && !this.b.o.contains(b) && nM(this.b, b);
    this.b.Bp = this.A.Bp;
    this.B = 2;
    DM(this)
  }
};
B.bI = function() {
  if (this.A.Kc == this.C) {
    var a = lv(T("scrolltimedeventswk")),
        b = lv(this.C);
    this.A.K(3, 1, (a.y - b.y) / 2 + 15)
  } else {
    var c = T("scrolltimedeventswk"),
        a = lv(c),
        b = lv(this.F),
        c = vj(c).height,
        d = vj(this.F).height;
    this.A.K(3, 0, (b.y + d - (a.y + c)) / 2 + 15)
  }
  this.A.Ua();
  DM(this)
};

function aia(a) {
  this.o = a;
  this.b = p
};

function EM(a, b) {
  this.D = a;
  this.b = b;
  this.B = Jp.M()
}
EM.prototype.init = function() {
  this.V = Ei("a", {
    tabIndex: 0
  });
  this.V.setAttribute("href", "javascript:void(0)");
  this.V.innerHTML = "Click here to enable keyboard shortcuts and set Agenda view (optimized for screenreaders) as your default.";
  this.o = Ei("h1", "hdn");
  document.body.insertBefore(this.o, document.body.firstChild);
  this.o.appendChild(this.V);
  O(this.b, v, this.A, p, this);
  O(this.B, "p", this.A, p, this);
  O(this.V, "click", this.C, p, this);
  this.A()
};
EM.prototype.A = function() {
  var a = "list" == this.b.b.o.Ca() || this.b.b.o.Ca() == Ja;
  U(this.o, "g" == this.B.wc && !a)
};
EM.prototype.C = function() {
  this.b.tf("list");
  var a = Nh(Ph(this.D));
  a.set("defaultCalMode", "list");
  a.set("useKeyboardShortcuts", "true");
  a.jb();
  ep("a11y_entry")
};

function FM(a, b, c) {
  this.b = a;
  this.o = new Q(this);
  this.C = b;
  this.F = c;
  this.A = new nI(a, 5);
  Ku(this.o, a, jA, this.jL);
  this.o.I(a, "mousedown", this.kL);
  this.o.I(a, ["mouseover", "mouseout"], this.lL);
  this.o.I(a, ["keydown", "click"], Yw)
}
H(FM, uc);
B = FM.prototype;
B.kL = function(a) {
  this.D = !this.B;
  a.preventDefault()
};
B.lL = function(a) {
  kn(this.b, "clstMenu-hover", "mouseover" == a.type)
};
B.jL = function(a) {
  if (!Qu(a) || this.D) this.D = p, this.B = m, this.C(this.A, this.F, E(this.HM, this)), en(this.b, "clstMenu-open")
};
B.HM = function() {
  window.setTimeout(E(function() {
    this.B = p
  }, this), 0);
  gn(this.b, "clstMenu-open")
};
B.L = function() {
  K(this.o);
  K(this.A);
  delete this.b;
  delete this.C;
  FM.J.L.call(this)
};

function GM(a) {
  Y.call(this);
  this.H = a
}
H(GM, Y);
var HM = new V('<div id="${id}" class="${className} goog-inline-block" style="background-color: ${color}; border-color: ${borderColor}" aria-labelledby="${labelId} ${id}-label" title="${colorName}" tabindex="0" role="button"><div class="to-select"></div></div><div id="${id}-label" class="hdn">${colorName}</div>');
B = GM.prototype;
B.jc = n;
B.$ = function() {
  GM.J.$.call(this);
  this.kF();
  var a = E(this.oW, this);
  this.Z = new lA(this.G());
  qA(this.Z, a, E(this.pW, this));
  rA(this.Z, a, E(this.lF, this, m), E(this.lF, this, p))
};
B.L = function() {
  K(this.Z);
  GM.J.L.call(this)
};

function IM(a) {
  return Ui(a, function(a) {
    return Ot(a, "to-select")
  })
}
function JM(a) {
  a = IM(a);
  en(a, "bcp-selected")
}
function KM(a) {
  a = IM(a);
  gn(a, "bcp-selected")
}
B.oW = function(a) {
  return Yi(a, E(this.qY, this), m)
};
B.qY = function(a) {
  return (a = a.className) ? sb(a, "rb-default") || sb(a, "rb-color") : p
};
B.lF = function(a, b) {
  a ? b.style.borderColor = t : this.qG(b)
};
B.pW = function(a) {
  LM(this, a) && this.nx(a)
};

function LM(a, b) {
  if (b == a.jc) return p;
  KM(a.jc);
  a.jc = b;
  JM(a.jc);
  a.VF(a.jc);
  return m
}
B.VF = D;

function MM(a, b, c, d, e) {
  GM.call(this, d || "ccp");
  this.ya = a;
  this.ea = b;
  this.wa = c || D;
  this.W = !! e && Td(a).isEnabled(25);
  this.F = this.B = this.C = this.O = this.ka = this.K = n;
  this.o = k
}
H(MM, GM);
B = MM.prototype;
B.ia = function() {
  var a = this.b;
  this.K = a.U("div", {
    "class": "calcolors"
  });
  for (var b = this.ka = a.U("div", {
    "class": "calpalette"
  }), c = [], d = SI(), e = 0, f = 0; f < d.length; f++) if (42 <= f) {
    var h = d[f],
        l = uh(h),
        q = l.b,
        l = l.b,
        r = I(t);
    c.push(jm(HM, {
      className: this.H + "-rb-color",
      id: this.oa(t + h),
      color: q,
      borderColor: l,
      colorName: r,
      labelId: t
    }));
    5 == e % 6 && c.push("<div class=reset></div>");
    e++
  }
  b.innerHTML = c.join(t);
  this.K.appendChild(this.ka);
  this.W && (this.C = a.U("div"), this.B = a.U("div", {
    "class": "ccc-button"
  }), this.F = a.U("div", {
    "class": "ccc-chip"
  }), this.K.appendChild(this.C));
  this.V = this.K
};
B.kF = function() {
  this.A = {};
  for (var a = SI(), b = 0; b < a.length; b++) if (42 <= b) {
    var c = t + a[b];
    this.A[c] = this.fa(c)
  }
  this.W && Rq(this.ya).b(ya, E(this.tR, this))
};
B.tR = function() {
  this.O = new NM(0, this.ea);
  Z(this).I(this.B, "click", function() {
    this.wa();
    this.o && this.O.oj(this.o.o, Dh(this.o));
    this.O.show()
  })
};
B.qG = function(a) {
  var b = xG(this, a.id);
  "custom" == b ? a.style.borderColor = a.style.backgroundColor : (b = uh(parseInt(b, 10)), a.style.borderColor = b.b)
};
B.nx = function() {
  var a = xG(this, this.jc.id);
  if ("custom" == a) {
    if (this.o) {
      var a = this.o.B,
          b = lh(a),
          c = this.o;
      this.ea(b, a, c.B ? c.D : k)
    }
  } else this.ea(parseInt(a, 10));
  this.wa()
};

function OM(a, b, c) {
  Y.call(this);
  this.C = a;
  this.F = b;
  this.o = c;
  a = Rh(a);
  this.B = !! a.Cb && !Yfa.test(a.Cb)
}
H(OM, Y);
B = OM.prototype;
B.ra = n;
B.$s = n;
B.Mi = n;
B.ia = function() {
  var a = this.b,
      b = this.oa("rs"),
      c = this.oa("rsc"),
      d = this.oa("so"),
      e = this.oa("hi"),
      f = this.oa("se"),
      h = this.oa("ce"),
      l = this.oa("sh"),
      q = this.oa("no"),
      r = this.oa("re"),
      s = this.oa("cp"),
      b = ub("<li class=notification id=", c, '>There was a problem refreshing this calendar; some events may not be up to date. <span class="lk" tabindex=0 id=', b, ">Retry now</span></li>"),
      a = a.U("div");
  a.innerHTML = ub('<table cellpadding=0 cellspacing=0 class=ccp><tr><td class="calpopupcell"><div class=boxbody><ul class="caloptions">', b, PM(d, "Display only this Calendar"), PM(e, "Hide this calendar from the list"), PM(f, "Calendar settings"), PM(h, "Create event on this calendar"), PM(l, "Share this Calendar"), PM(q, "Reminders and notifications"), PM(r, QM(this)), "</ul><div id=", s, ' class="calcolor-menuitem goog-menuitem"></div></div></td></tr></table>');
  this.V = a
};

function PM(a, b) {
  return ub('<li tabindex=0 class="goog-menuitem" id=', a, ">", b, "</li>")
}
B.$ = function() {
  OM.J.$.call(this);
  var a = E(this.QS, this),
      b = this.A = new lA(this.G()),
      c = E(this.TS, this),
      c = pA(b, a, c);
  b.B.push(c);
  rA(this.A, a, E(this.kD, this, m), E(this.kD, this, p))
};
B.L = function() {
  OM.J.L.call(this);
  this.Mi = n;
  K(this.ra);
  this.ra = n
};

function RM(a) {
  if (!a.ra) {
    var b = a.b.U("div", {
      id: "cal-list-menu-popup",
      "class": "gcal-popup pbox goog-menu"
    });
    document.body.appendChild(b);
    a.render(b);
    var c = a.fa("cp");
    a.$s = new MM(a.C, E(a.fS, a), E(a.Ka, a), k, m);
    a.$s.render(c);
    b = new kx(b);
    hx(b);
    gx(b, m);
    b.setVisible(p);
    BG(b);
    a.ra = b
  }
  return a.ra
}
B.show = function(a, b) {
  var c = RM(this);
  if (ix(c) && this.Mi == b) return c.setVisible(p), n;
  this.Ra = a;
  this.Mi = b;
  var d = this.o.getItem(this.Ra),
      e = ci.M().get(this.Ra),
      f = 2 == d.type,
      f = e ? e.uc : f ? 70 : 0,
      e = e ? e.B : 0,
      h = d.o;
  U(this.fa("rsc"), d.A);
  U(this.fa("so"), m);
  U(this.fa("hi"), !pu(this.o, this.Ra));
  U(this.fa("se"), !h);
  U(this.fa("ce"), 60 <= f && !h);
  U(this.fa("sh"), 70 <= f && !h);
  U(this.fa("no"), 20 <= f && !h);
  U(this.fa("re"), 20 <= e);
  f = this.$s;
  e = d.color.Fb();
  d = d.color;
  f.jc && (KM(f.jc), f.jc = n);
  f.jc = f.A[t + e];
  f.W && (f.o = d || Bh(e), f.o.A && (f.jc =
  f.F), f.o && f.o.B ? (d = f.o.B, Ii(f.C), f.F.innerHTML = jm(HM, {
    className: f.H + "-rb-color",
    id: f.oa("custom"),
    color: d,
    borderColor: d,
    colorName: "Custom",
    labelId: t
  }), f.B.innerHTML = "Edit color...", en(f.B, "ccc-edit"), f.C.appendChild(f.F), f.C.appendChild(f.B)) : (Ii(f.C), f.B.innerHTML = '<div class="ccc-choose goog-menuitem">Choose custom color</div>', gn(f.B, "ccc-edit"), f.C.appendChild(f.B)));
  f.jc && JM(f.jc);
  AG(c, new nI(this.Mi, 5));
  c.setVisible(m);
  d = cu("calcolor-menuitem", this.G());
  f = cu("ccc-choose", this.G());
  d && f && (f.style.width =
  d.offsetWidth - 30 + "px");
  return c
};
B.Ka = function() {
  RM(this).setVisible(p)
};
B.QS = function(a) {
  var b = xG(this, a.id);
  return Ot(a, "goog-menuitem") && "cp" != b || "rs" == b ? a : n
};
B.kD = function(a, b) {
  b && "rs" != xG(this, b.id) && kn(b, "goog-menuitem-hover", a)
};
B.TS = function(a) {
  if (a) switch (this.Ka(), xG(this, a.id)) {
  case "rs":
    $r(this.Ra);
    break;
  case "so":
    bia(this);
    break;
  case "hi":
    Tr(this.o, this.Ra);
    break;
  case "se":
    qI(this.Ra, 0);
    break;
  case "ce":
    $y("ef_new_from_menu", this.Ra);
    break;
  case "sh":
    qI(this.Ra, 1);
    break;
  case "no":
    qI(this.Ra, 2);
    break;
  case "re":
    a = QM(this);
    var b = this.B ? "I would like to share a calendar with you." : "I've been using Google Calendar to organize my calendar, find interesting events, and share my schedule with friends and family members. Take a look at this interesting calendar!",
        c = ds(this.o, this.Ra, p),
        c = I(c);
    Oha(this.F, this.Ra, a, "Send <b>" + c + "</b> calendar to a friend.", b)
  }
};

function bia(a) {
  var b = a.Ra,
      c = a.o;
  c.forEach(function(a) {
    c.Ke(a.getId(), a.getId() == b)
  }, m)
}
function QM(a) {
  return a.B ? "Send to a coworker" : "Send to a friend"
}
B.fS = function(a, b, c) {
  var d = this.o,
      e = this.Ra,
      f = d.getItem(e),
      h = f.color.Fb() == a;
  b || c || !f.color.A || (h = p);
  b && (f.color.A && f.color.o == b || (h = p));
  c && (f.color.A && Dh(f.color) == c || (h = p));
  h || (h = !! b, b = b || nh(a, 0), f.color = new Ah(a, h, b, c ? c : Dh(f.color), h ? b : f.color.B), a = f.color, c = d.b, f = Td(d.o).isEnabled(25), c.set(e + "/color", a.C.toString()), f && C(a.B) && c.set(e + "/customColor", (a.A ? "1," : "0,") + (a.A ? a.o : a.B) + "," + a.D), d.b.jb(), d.Id())
};

function SM(a, b) {
  this.A = a;
  this.o = b
}
SM.prototype.show = function() {
  this.b = T("mb0");
  cia(this);
  var a;
  a = Mt("hide", this.b)[0];
  bJ(a, jA, E(this.B, this))
};

function cia(a) {
  var b = function(a, b) {
    return '<span class="' + a + ' biw lk" tabindex="0">' + b + "</span>"
  }.call(a, "hide", "Dismiss");
  a.b.innerHTML = a.A.DA ? 'You are using an old browser which will soon be unsupported. Upgrade to a <a href="http://www.whatbrowser.org/" target="_blank">modern browser</a>. ' + b : 'You are using an old browser which will soon be unsupported. Upgrade to a <a href="http://www.whatbrowser.org/" target="_blank">modern browser</a>, such as <a href="http://chrome.google.com/" target="_blank">Google Chrome</a>. ' + b;
  a.b.style.display = "block";
  a.o.Wf()
}
SM.prototype.B = function() {
  this.b.style.display = "none";
  this.b.innerHTML = t;
  this.o.Wf()
};

function TM() {}
TM.prototype.b = D;

function UM(a, b, c) {
  a.timeOfStartCall = (new Date).getTime();
  if (b && JSON && JSON.stringify) {
    var d = JSON.stringify(b);
    200 >= d.length && (a.psdJson = d)
  }
  d = c || Va;
  d.GOOGLE_FEEDBACK_START_ARGUMENTS = arguments;
  var e = a.serverUri || "//www.google.com/tools/feedback",
      f = d.GOOGLE_FEEDBACK_START;
  if (f) f.apply(d, arguments);
  else {
    var e = e + "/load.js?",
        h;
    for (h in a) f = a[h], f != n && !fb(f) && (e += encodeURIComponent(h) + "=" + encodeURIComponent(f) + "&");
    h = d.document;
    d = h.createElement("script");
    d.src = e;
    h.body.appendChild(d)
  }
}
kb("userfeedback.api.startFeedback", UM);
var VM = p,
    WM = t;

function XM(a) {
  a = a.match(/[\d]+/g);
  if (!a) return t;
  a.length = 3;
  return a.join(".")
}
if (navigator.plugins && navigator.plugins.length) {
  var YM = navigator.plugins["Shockwave Flash"];
  YM && (VM = m, YM.description && (WM = XM(YM.description)));
  navigator.plugins["Shockwave Flash 2.0"] && (VM = m, WM = "2.0.0.11")
} else if (navigator.mimeTypes && navigator.mimeTypes.length) {
  var ZM = navigator.mimeTypes["application/x-shockwave-flash"];
  (VM = ZM && ZM.enabledPlugin) && (WM = XM(ZM.enabledPlugin.description))
} else
try {
  var $M = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
      VM = m,
      WM = XM($M.GetVariable("$version"))
} catch (dia) {
  try {
    $M =
    new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), VM = m, WM = "6.0.21"
  } catch (eia) {
    try {
      $M = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), VM = m, WM = XM($M.GetVariable("$version"))
    } catch (fia) {}
  }
}
var gia = WM;

function aN(a) {
  return (a = a.exec(Xb)) ? a[1] : t
}
var hia = function() {
  if (vn) return aN(/Firefox\/([0-9.]+)/);
  if (J || gc) return oc;
  if (yn) return aN(/Chrome\/([0-9.]+)/);
  if (zn) return aN(/Version\/([0-9.]+)/);
  if (wn || xn) {
    var a;
    if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Xb)) return a[1] + "." + a[2]
  } else {
    if (Xba) return (a = aN(/Android\s+([0-9.]+)/)) ? a : aN(/Version\/([0-9.]+)/);
    if (Wba) return aN(/Camino\/([0-9.]+)/)
  }
  return t
}();

function bN(a) {
  return 0 <= vb(hia, a)
};

function cN() {
  var a;
  if (J) {
    if (a = bN("7")) a = 0 <= vb(gia, "9")
  } else a = vn ? bN("3.6") : zn ? bN("5") : yn;
  return a
}
kb("userfeedback.api.isBrowserSupportedForGenie", function() {
  return dN()
});

function dN() {
  return J ? bN("8") : vn ? bN("15") : zn ? bN("5") : yn
}
kb("userfeedback.api.isBrowserSupportedForHelp", dN);

function eN() {}
H(eN, ny);
Xa(eN);
eN.prototype.Oa = y("goog-menuheader");

function fN(a, b, c) {
  Ay.call(this, a, c || eN.M(), b);
  this.lc(1, p);
  this.lc(2, p);
  this.lc(4, p);
  this.lc(32, p);
  this.Rh = 1
}
H(fN, Ay);
xy("goog-menuheader", function() {
  return new fN(n)
});

function gN() {
  this.o = []
}
H(gN, ny);
Xa(gN);

function hN(a, b) {
  var c = a.o[b];
  if (!c) {
    switch (b) {
    case 0:
      c = a.Oa() + "-highlight";
      break;
    case 1:
      c = a.Oa() + "-checkbox";
      break;
    case 2:
      c = a.Oa() + "-content"
    }
    a.o[b] = c
  }
  return c
}
B = gN.prototype;
B.Wh = y("menuitem");
B.pd = function(a) {
  var b = a.b.U("div", py(this, a).join(" "), iN(this, a.getContent(), a.b));
  jN(this, a, b, ty(a, 8) || ty(a, 16));
  return b
};
B.kd = function(a) {
  return a && a.firstChild
};
B.Tb = function(a, b) {
  var c = Oi(b),
      d = hN(this, 2);
  c && jv(c, d) || b.appendChild(iN(this, b.childNodes, a.b));
  jv(b, "goog-option") && (a.lc(16, m), a && b && jN(this, a, b, m));
  return gN.J.Tb.call(this, a, b)
};
B.Yr = function(a, b) {
  var c = this.kd(a),
      d = kN(this, a) ? c.firstChild : n;
  gN.J.Yr.call(this, a, b);
  d && !kN(this, a) && c.insertBefore(d, c.firstChild || n)
};

function iN(a, b, c) {
  a = hN(a, 2);
  return c.U("div", a, b)
}
function kN(a, b) {
  var c = a.kd(b);
  if (c) {
    var c = c.firstChild,
        d = hN(a, 1);
    return !!c && Ri(c) && jv(c, d)
  }
  return p
}

function jN(a, b, c, d) {
  sy(a, c, b.vn());
  qy(a, b, c);
  d != kN(a, c) && (rv(c, "goog-option", d), c = a.kd(c), d ? (a = hN(a, 1), c.insertBefore(b.b.U("div", a), c.firstChild || n)) : c.removeChild(c.firstChild))
}
B.Vn = function(a) {
  switch (a) {
  case 2:
    return hN(this, 0);
  case 16:
  case 8:
    return "goog-option-selected";
  default:
    return gN.J.Vn.call(this, a)
  }
};
B.dx = function(a) {
  var b = hN(this, 0);
  switch (a) {
  case "goog-option-selected":
    return 16;
  case b:
    return 2;
  default:
    return gN.J.dx.call(this, a)
  }
};
B.Oa = y("goog-menuitem");

function lN(a, b, c, d) {
  Ay.call(this, a, d || gN.M(), c);
  this.$a(b)
}
H(lN, Ay);
B = lN.prototype;
B.Ca = function() {
  var a = this.mf();
  return a != n ? a : this.jf()
};
B.$a = function(a) {
  this.Qq(a)
};
B.lc = function(a, b) {
  lN.J.lc.call(this, a, b);
  switch (a) {
  case 8:
    this.hg() && !b && this.Me(p);
    var c = this.G();
    c && this && c && jN(this.Gc(), this, c, b);
    break;
  case 16:
    (c = this.G()) && this && c && jN(this.Gc(), this, c, b)
  }
};
B.jf = function() {
  var a = this.getContent();
  return Za(a) ? (a = Db(a, function(a) {
    return Ri(a) && (jv(a, "goog-menuitem-accel") || jv(a, "goog-menuitem-mnemonic-separator")) ? t : Iw(a)
  }).join(t), Zw(a)) : lN.J.jf.call(this)
};
B.Df = function(a) {
  var b = this.getParent();
  if (b) {
    var c = b.A;
    b.A = n;
    if (b = c && db(a.clientX)) b = new ti(a.clientX, a.clientY), b = c == b ? m : c && b ? c.x == b.x && c.y == b.y : p;
    if (b) return
  }
  lN.J.Df.call(this, a)
};
B.yg = function(a) {
  return a.keyCode == this.wF && this.Of(a) ? m : lN.J.yg.call(this, a)
};
B.zX = w("wF");
xy("goog-menuitem", function() {
  return new lN(n)
});
lN.prototype.vn = function() {
  return ty(this, 16) ? "menuitemcheckbox" : ty(this, 8) ? "menuitemradio" : lN.J.vn.call(this)
};

function mN() {}
H(mN, ny);
Xa(mN);
mN.prototype.pd = function(a) {
  return a.b.U("div", this.Oa())
};
mN.prototype.Tb = function(a, b) {
  b.id && Ax(a, b.id);
  if ("HR" == b.tagName) {
    var c = b;
    b = this.pd(a);
    Ji(b, c);
    Li(c)
  } else nv(b, this.Oa());
  return b
};
mN.prototype.Yr = Na();
mN.prototype.Oa = y("goog-menuseparator");

function nN(a, b) {
  Ay.call(this, n, a || mN.M(), b);
  this.lc(1, p);
  this.lc(2, p);
  this.lc(4, p);
  this.lc(32, p);
  this.Rh = 1
}
H(nN, Ay);
nN.prototype.$ = function() {
  nN.J.$.call(this);
  Dj(this.G(), "separator")
};
xy("goog-menuseparator", function() {
  return new nN
});

function oN(a) {
  this.o = a || "menu"
}
H(oN, MK);
Xa(oN);
oN.prototype.gx = function(a) {
  return "UL" == a.tagName || oN.J.gx.call(this, a)
};
oN.prototype.ax = function(a) {
  return "HR" == a.tagName ? new nN : oN.J.ax.call(this, a)
};
oN.prototype.Oa = y("goog-menu");
oN.prototype.Tw = function(a) {
  oN.J.Tw.call(this, a);
  Ej(a.G(), "haspopup", "true")
};

function pN(a) {
  nN.call(this, mN.M(), a)
}
H(pN, nN);
xy("goog-menuseparator", function() {
  return new nN
});

function qN(a, b) {
  QK.call(this, "vertical", b || oN.M(), a);
  YK(this, p)
}
H(qN, QK);
B = qN.prototype;
B.Lw = m;
B.Oa = function() {
  return this.Gc().Oa()
};

function rN(a, b) {
  if (Si(a.G(), b)) return m;
  for (var c = 0, d = Rx(a); c < d; c++) {
    var e = Sx(a, c);
    if (typeof e.Cw == Ea && e.Cw(b)) return m
  }
  return p
}
function sN(a, b) {
  a.ha(b, m)
}
B.removeItem = function(a) {
  (a = this.removeChild(a, m)) && a.aa()
};

function tN(a, b) {
  (a.Lw = b) && YK(a, m)
}
B.setVisible = function(a, b, c) {
  (b = qN.J.setVisible.call(this, a, b)) && a && this.xa && this.Lw && this.ac().focus();
  a && c && db(c.clientX) ? this.A = new ti(c.clientX, c.clientY) : this.A = n;
  return b
};
B.Sw = function(a) {
  this.Lw && this.ac().focus();
  return qN.J.Sw.call(this, a)
};
B.TF = function(a) {
  return a.isEnabled() && a.Da() && ty(a, 2)
};
B.Ya = function(a) {
  for (var b = this.Gc(), c = Pt(this.b, "div", b.Oa() + "-content", a), d = c.length, e = 0; e < d; e++) OK(b, this, c[e]);
  qN.J.Ya.call(this, a)
};
B.cx = function(a) {
  var b = qN.J.cx.call(this, a);
  b || Qx(this, function(c) {
    !b && c.zX && c.wF == a.keyCode && (this.isEnabled() && this.xe(c), b = c.we(a))
  }, this);
  return b
};
B.Qe = function(a) {
  qN.J.Qe.call(this, a);
  (a = Sx(this, a)) && QI(a.G(), this.G())
};

function uN(a, b, c, d) {
  nI.call(this, a, b, c || d);
  (c || d) && this.o(65 | (d ? 32 : 132))
}
H(uN, nI);

function vN() {}
H(vN, My);
Xa(vN);
vN.prototype.kd = function(a) {
  return vN.J.kd.call(this, a && a.firstChild)
};
vN.prototype.Tb = function(a, b) {
  var c = Fu("*", "goog-menu", b)[0];
  if (c) {
    U(c, p);
    yi(c).body.appendChild(c);
    var d = new qN;
    Px(d, c);
    a.yi(d)
  }
  return vN.J.Tb.call(this, a, b)
};
vN.prototype.Gn = function(a, b) {
  return vN.J.Gn.call(this, [b.U("div", "goog-inline-block " + (this.Oa() + "-caption"), a), b.U("div", "goog-inline-block " + (this.Oa() + "-dropdown"), "\u00a0")], b)
};
vN.prototype.Oa = y("goog-menu-button");

function wN(a, b, c, d, e) {
  Ky.call(this, a, c || vN.M(), d);
  this.lc(64, m);
  this.C = new uN(n, 5);
  b && this.yi(b);
  this.La = new $I(500);
  !wn && !xn || qc("533.17.9") || (this.gq = m);
  this.Ja = e || oN.M()
}
H(wN, Ky);
B = wN.prototype;
B.gq = p;
B.$ = function() {
  wN.J.$.call(this);
  xN(this, m);
  this.o && yN(this, this.o, m);
  Ej(this.V, "haspopup", !! this.o)
};
B.Na = function() {
  wN.J.Na.call(this);
  xN(this, p);
  if (this.o) {
    this.kc(p);
    this.o.Na();
    yN(this, this.o, p);
    var a = this.o.G();
    a && Li(a)
  }
};
B.L = function() {
  wN.J.L.call(this);
  this.o && (this.o.aa(), delete this.o);
  delete this.ya;
  this.La.aa()
};
B.Jf = function(a) {
  wN.J.Jf.call(this, a);
  this.qc() && (this.kc(!uy(this, 64), a), this.o && (this.o.zg = uy(this, 64)))
};
B.Df = function(a) {
  wN.J.Df.call(this, a);
  this.o && !this.qc() && (this.o.zg = p)
};
B.Of = function() {
  Gy(this, p);
  return m
};
B.ON = function(a) {
  this.o && this.o.Da() && !this.Cw(a.target) && this.kc(p)
};
B.Cw = function(a) {
  return a && Si(this.G(), a) || this.o && rN(this.o, a) || p
};
B.yg = function(a) {
  if (32 == a.keyCode) {
    if (a.preventDefault(), "keyup" != a.type) return m
  } else if ("key" != a.type) return p;
  if (this.o && this.o.Da()) {
    var b = this.o.we(a);
    return 27 == a.keyCode ? (this.kc(p), m) : b
  }
  return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode || 13 == a.keyCode ? (this.kc(m, a), m) : p
};
B.Uv = function() {
  this.kc(p)
};
B.PN = function() {
  this.qc() || this.kc(p)
};
B.Qr = function(a) {
  this.gq || this.kc(p);
  wN.J.Qr.call(this, a)
};

function zN(a) {
  a.o || a.yi(new qN(a.b, a.Ja));
  return a.o || n
}
B.yi = function(a) {
  var b = this.o;
  a != b && (b && (this.kc(p), this.xa && yN(this, b, p), delete this.o), this.xa && Ej(this.V, "haspopup", !! a), a && (this.o = a, Bx(a, this), a.setVisible(p), tN(a, this.gq), this.xa && yN(this, a, m)));
  return b
};
B.Gd = function(a) {
  zN(this).ha(a, m)
};
B.Iu = function(a, b) {
  zN(this).On(a, b, m)
};
B.removeItem = function(a) {
  (a = zN(this).removeChild(a, m)) && a.aa()
};
B.bm = Qa(87);
B.setVisible = function(a, b) {
  var c = wN.J.setVisible.call(this, a, b);
  c && !this.Da() && this.kc(p);
  return c
};
B.Ta = function(a) {
  wN.J.Ta.call(this, a);
  this.isEnabled() || this.kc(p)
};

function AN(a) {
  a = a.C.b;
  return 5 == a || 4 == a
}
function BN(a, b) {
  a.C.o && a.C.o(1 | (b ? 32 : 4))
}
function CN(a) {
  return a.C.D && !! (a.C.A & 32)
}
B.kc = function(a, b) {
  wN.J.kc.call(this, a);
  if (this.o && uy(this, 64) == a) {
    if (a) this.o.xa || this.o.render(), this.Ha = gv(this.G()), this.wa = fv(this.G()), this.Nu(), this.o.Qe(!b || 40 != b.keyCode && 38 != b.keyCode ? -1 : 0);
    else {
      Gy(this, p);
      this.o.zg = p;
      var c = this.G();
      c && (Ej(c, "activedescendant", t), Ej(c, "owns", t));
      this.K != n && (this.K = k, (c = this.o.G()) && Fw(c, t, t))
    }
    this.o.setVisible(a, p, b);
    if (!this.isDisposed()) {
      var c = Z(this),
          d = a ? c.I : c.b;
      d.call(c, this.b.Sa(), "mousedown", this.ON, m);
      this.gq && d.call(c, this.o, "blur", this.PN);
      d.call(c, this.La, "tick", this.NN);
      a ? this.La.start() : this.La.stop()
    }
  }
};
B.Nu = function() {
  if (this.o.xa) {
    var a = this.C;
    this.C.element = this.ya || this.G();
    var b = this.o.G();
    this.o.Da() || (b.style.visibility = "hidden", U(b, m));
    !this.K && CN(this) && (this.K = vj(b));
    a.Ua(b, a.b ^ 1, n, this.K);
    this.o.Da() || (U(b, p), b.style.visibility = "visible")
  }
};
B.NN = function() {
  var a = fv(this.G()),
      b = gv(this.G()),
      c = this.wa;
  (c = !(c == a || c && a && c.left == a.left && c.width == a.width && c.top == a.top && c.height == a.height)) || (c = this.Ha, c = !(c == b || c && b && c.top == b.top && c.right == b.right && c.bottom == b.bottom && c.left == b.left));
  c && (this.wa = a, this.Ha = b, this.Nu())
};

function yN(a, b, c) {
  var d = Z(a);
  c = c ? d.I : d.b;
  c.call(d, b, "action", a.Uv);
  c.call(d, b, "highlight", a.iT);
  c.call(d, b, "unhighlight", a.jT)
}
function xN(a, b) {
  var c = Z(a);
  (b ? c.I : c.b).call(c, a.G(), "keydown", a.vS)
}
B.iT = function(a) {
  var b = this.G();
  if (a = a.target.G()) {
    var c = BH(a, "activedescendant");
    a = yi(a).getElementById(c) || a;
    a.id || (c = Ye.M(), a.id = Ze(c));
    PI(b, a);
    Ej(b, "owns", a.id)
  }
};
B.vS = function(a) {
  ty(this, 32) && this.ac() && this.o && this.o.Da() && a.stopPropagation()
};
B.jT = function() {
  if (!UK(this.o)) {
    var a = this.G();
    Ej(a, "activedescendant", t);
    Ej(a, "owns", t)
  }
};
xy("goog-menu-button", function() {
  return new wN(n)
});

function DN(a, b, c) {
  lN.call(this, a, b, c);
  this.lc(8, m)
}
H(DN, lN);
DN.prototype.Of = function() {
  return this.P("action")
};
xy("goog-option", function() {
  return new DN(n)
});
var EN = new V('<span class="${class}">${text}</span>'),
    iia = new V("http://support.google.com/calendar/bin/answer.py?answer=${num}&hl=en");

function FN(a) {
  return jm(iia, {
    num: encodeURIComponent(t + a)
  })
}
var jia = new V("http://support.google.com/calendar/bin/topic.py?topic=${num}&hl=en");

function GN(a) {
  return jm(jia, {
    num: encodeURIComponent(t + a)
  })
};
var HN = {
  zZ: "c1",
  EZ: "c2",
  uZ: "cw1",
  r_: "ww1",
  k_: "ew4",
  j_: "ew1",
  h_: "ew3",
  i_: "ew2",
  HZ: "eww1",
  G0: "wwtz"
};

function IN(a) {
  this.b = a
}
IN.prototype.o = function() {
  Dd(Ld(this.b, 814), E(IN.prototype.A, this))
};

function kia(a, b) {
  var c = S(b);
  JN(a) && !Yg(c, "wwd", p) && a.o()
}
IN.prototype.A = function(a) {
  dp("ww_ld", ib() - _loadStartTime);
  a.o(KN(this), LN(this))
};

function lia(a) {
  if (LN(a) && JN(a)) return E(a.o, a)
}
function JN(a) {
  if (a = S(a.b).get("fl")) {
    a = parseInt(a, 10);
    if (!a) return p;
    var b = ib() + qk;
    return 7 > Hg(ek(new Date(b)), ek(new Date(a)))
  }
  return p
}
function LN(a) {
  a = KN(a);
  return "ww1" == a || "eww1" == a
}

function KN(a) {
  if (Td(a.b).isEnabled(123)) {
    var b = ZI(window.location.href, "wwv");
    if (Ec(HN, b)) return b
  }
  return Oh(Ph(a.b)).getName() ? "eww1" : "ww1"
}
function mia(a) {
  var b = "plus" == ZI(window.location.href, "from"),
      c = Ph(a.b);
  a = S(a.b);
  c.C && (a.set("from", b ? "plus" : "cal"), a.jb())
};

function MN(a, b, c, d, e, f, h) {
  this.da = a;
  this.D = Nh(Ph(a));
  this.B = b;
  this.O = c || D;
  this.Ia = d || D;
  this.Z = e || D;
  this.ea = f || D;
  this.X = h;
  this.C = [];
  this.A = {};
  this.K = p;
  this.o = new Q;
  d = Oy.M();
  a = new qN;
  sN(a, new fN("Display Density:"));
  sN(a, new DN("Comfortable", 1));
  sN(a, new DN("Cozy", 2));
  sN(a, new DN("Compact", 3));
  this.X && (sN(a, new pN), b = new lN("Calendar setup", 21), sN(a, b));
  pw() && (sN(a, new pN), sN(a, new lN("Settings", 7)), sN(a, new lN("Help", 8)));
  sN(a, new pN);
  sN(a, new lN("Sync with mobile device", 16));
  b = new wN(t, a, d);
  this.B.ha(b);
  this.b = b;
  c = new qN;
  sN(c, new lN("Print", 100));
  sN(c, new lN("Refresh", 110));
  d = new wN("More", c, d);
  this.B.ha(d);
  this.W = d;
  e = this.B;
  f = e.b.G("topRightNavigation");
  e.C && e.removeChild(e.C, m);
  e.C = d;
  e.C.render(f);
  e.C.G().id = "mg-more";
  e.A && e.removeChild(e.A, m);
  e.A = b;
  e.A.render(f);
  e.A.G().id = "mg-settings";
  Dy(e.A, "icon-button");
  e.Ja.vb(b.G(), "Settings");
  zo(e.B) || gB(e, p);
  d.G().firstChild.innerHTML = '<div class="goog-inline-block">More</div><div class="goog-inline-block more-arrow"/>';
  this.o.I(a, "show", E(this.F, this, a));
  this.o.I(c, "show", E(this.F, this, c));
  Xd(this.o, this.b, "action", this.H, p, this);
  NN(this);
  Xd(this.o, this.W, "action", this.H, p, this)
}
function ON(a, b) {
  a.C.push(b);
  a.K && b.Un(a)
}
function nia(a) {
  for (var b = 0; b < a.C.length; b++) a.C[b].Un(a);
  a.K = m
}
function PN(a, b, c, d) {
  if (a.b) if (a.A[c] = d, 20 == c) a.b.Gd(new pN), a.b.Gd(new lN(b, c));
  else {
    d = a.b;
    d = d.o ? Rx(d.o) : 0;
    var e = !! a.A[20];
    d = 15 == c ? d - 1 - (e ? 2 : 0) : d - 2 - (e ? 2 : 0) - (a.A[15] ? 1 : 0);
    a.b.Iu(new lN(b, c), d)
  }
}

function NN(a) {
  var b = a.D.get("dense");
  QN(a, 1, "n" == b);
  QN(a, 2, "s" == b);
  QN(a, 3, "t" == b)
}
function QN(a, b, c) {
  a = a.b;
  (a.o ? Sx(a.o, b) : n).Ch("goog-option-selected", c)
}
function RN(a, b) {
  a.D.set("dense", b);
  a.D.jb();
  NN(a);
  (new Hs(a.da)).apply();
  a.ea()
}
MN.prototype.F = function(a) {
  VK(a)
};
MN.prototype.H = function(a) {
  if (a.target.mf) switch (a = a.target.mf(), a) {
  case 1:
    RN(this, "n");
    break;
  case 2:
    RN(this, "s");
    break;
  case 3:
    RN(this, "t");
    break;
  case 100:
    this.O();
    break;
  case 7:
    this.Z();
    break;
  case 8:
    window.open("http://support.google.com/calendar?hl=en");
    break;
  case 110:
    this.Ia();
    break;
  case 21:
    this.X();
    break;
  case 16:
    window.open(GN(13950));
    break;
  default:
    this.A[a]()
  }
};

function SN() {}
function TN() {
  var a = {
    productId: 88,
    locale: "en"
  },
      b = Dv();
  b != n && (a.authuser = t + b);
  UM(a, n)
}
SN.prototype.Un = function(a) {
  cN() && PN(a, "Send feedback", 20, TN)
};

function UN(a, b, c) {
  this.o = a;
  this.A = b;
  this.b = c
}
UN.prototype.remove = function() {
  var a = T("bgImage");
  a && Li(a);
  Ep().className = t
};
UN.prototype.B = function() {
  var a = S(R());
  a.set("BackgroundImage", t);
  a.jb();
  $p(this.o)
};
UN.prototype.insert = function(a) {
  var b;
  t: {
    if (!this.b || this.b.Pa()) if (b = this.A, Yg(b, "UseBackgroundImage", "false") && (b = b.getString("BackgroundImage", t), b = qf(b).toString(), VN(b))) break t;
    b = n
  }
  if (b) {
    var c = T("bgImage");
    a = a ? "bg-div-week" : "bg-div-month";
    if (!c) {
      var c = Ei("div", {
        id: "bgImage"
      }),
          d = this.o,
          e = c,
          f = Ep();
      f.className = "bg-exists";
      Up(d) ? f.insertBefore(e, f.firstChild) : (d = T("mvEventContainer")) && d.insertBefore(e, d.firstChild)
    }
    e = this.A.getString("BackgroundImageStyle", "fit");
    d = n;
    "fit" != e ? (c.className = a + " " + ("center" == e ? "bg-center-div" : "bg-tile-div"), ij(c, "background-image", "url(" + I(b) + ")")) : (c.className = a, d = c.firstChild ? c.firstChild : Ei("img", {
      "class": "bg-fit-img"
    }), d.src != b && (d.onerror = E(this.B, this), d.src = b));
    d ? c.firstChild || c.appendChild(d) : c.firstChild && c.removeChild(c.firstChild)
  } else this.remove()
};
UN.prototype.D = function(a) {
  var b = T("bgImage");
  b && (b.style.height = a)
};

function VN(a) {
  return (a = re(a)[1] || n) && "http" != a && "https" != a ? p : m
};

function WN(a, b, c) {
  P.call(this);
  this.o = a;
  this.b = $h(this.o).Y;
  this.C = b;
  this.B = c
}
H(WN, P);
WN.prototype.init = function() {
  this.A = O(this.o, "newday", E(this.D, this))
};
WN.prototype.D = function() {
  var a = $h(this.o).Y;
  if (a != this.b) if (this.b = a, vn && bN(2) || yn && bN(6)) {
    if (a = T("favicon")) {
      var b = document.createElement("link");
      b.id = "favicon";
      b.rel = "shortcut icon";
      b.type = "image/x-icon";
      b.href = (this.B.Pa() ? this.C : t) + "images/favicon_v2013_" + this.b + ".ico";
      Mi(b, a)
    }
  } else this.P("ca")
};
WN.prototype.L = function() {
  this.A && ad(this.A)
};

function XN() {
  this.b = new EL(6E5)
}
Xa(XN);

function YN() {}
YN.prototype.Un = function(a) {
  PN(a, "Labs", 9, F(Ps, 4))
};

function ZN(a, b, c) {
  this.A = b;
  this.D = c;
  this.o = new Q(this);
  this.dc(this.o);
  this.o.I(this.A, "l", this.C)
}
H(ZN, uc);
ZN.prototype.C = function() {
  var a = this.A.eb;
  "loggedOut" == a ? this.D.b ? this.B() : this.b || (this.b = new Js, GG(this.b, E(this.B, this), "Error", "Sorry, you have been logged out [probably in another window]. Please log in again.", LK())) : "connected" == a && this.b && (this.b.close(), this.b = n)
};
ZN.prototype.B = function() {
  "loggedOut" == this.A.eb && CI(1)
};

function $N(a, b, c, d) {
  Fc(a.b) || (b = $N.b + "=" + encodeURIComponent(IG(a, b, c)), (d || YI)($N.o, n, "POST", b), a.reset())
}
$N.b = "perf";
$N.o = "perf";

function aO(a) {
  P.call(this);
  this.V = a;
  O(a, bO, this.o, p, this);
  O(a, "click", this.b, p, this)
}
H(aO, P);
var bO = hc ? "keypress" : "keydown";
aO.prototype.o = function(a) {
  (13 == a.keyCode || ic && 3 == a.keyCode) && cO(this, a)
};
aO.prototype.b = function(a) {
  cO(this, a)
};

function cO(a, b) {
  var c = new dO(b);
  if (a.P(c)) {
    c = new eO(b);
    try {
      a.P(c)
    } finally {
      b.stopPropagation()
    }
  }
}
aO.prototype.L = function() {
  aO.J.L.call(this);
  $c(this.V, bO, this.o, p, this);
  $c(this.V, "click", this.b, p, this);
  delete this.V
};

function eO(a) {
  wc.call(this, a.b);
  this.type = "action"
}
H(eO, wc);

function dO(a) {
  wc.call(this, a.b);
  this.type = "beforeaction"
}
H(dO, wc);

function oia(a) {
  var b = '<div class="jfk-bubble"><div class="jfk-bubble-content-id"></div>';
  a.zM && (b += '<div class="jfk-bubble-closebtn-id jfk-bubble-closebtn" aria-label="Close" role="button" tabindex=0></div>');
  return Nm(b + '<div class="jfk-bubble-arrow-id jfk-bubble-arrow"><div class="jfk-bubble-arrowimplbefore"></div><div class="jfk-bubble-arrowimplafter"></div></div></div>')
};

function fO(a) {
  Y.call(this, a);
  this.o = new nH(this.kb, m);
  this.ra = new kx;
  this.B = []
}
H(fO, Y);
B = fO.prototype;
B.kb = "jfk-bubble";
B.Qo = m;
B.Ug = function(a) {
  this.o.Ug(a);
  this.Ua()
};

function gO(a, b) {
  var c = a.Ab();
  if (b && c) if (cb(b)) qH(c, ej(b, n));
  else if (b instanceof Km) {
    var d;
    b.Ce === MG ? d = PG(b.toString()) : (b.Ce !== Im && g(Error("Sanitized content was not of kind TEXT or HTML.")), d = ej(b.toString(), b.uo || n));
    qH(c, d)
  } else b instanceof cj ? qH(c, b) : (qH(c, fj), c.appendChild(b))
}
B.Ab = function() {
  return this.Qa(this.kb + "-content-id")
};
B.ia = function() {
  this.V = $H(oia, {
    zM: this.Qo
  }, k, this.b);
  gO(this, this.A);
  U(this.G(), p);
  this.ra.Hi(this.G());
  if (!jc) {
    var a = this.ra,
        b = lM(this.G(), .218, "ease-out", 0, 1),
        c = lM(this.G(), .218, "ease-in", 1, 0);
    a.C = b;
    a.D = c
  }
  bw(this.G(), this.B)
};
B.$ = function() {
  fO.J.$.call(this);
  Z(this).I(this.ra, ["beforeshow", "show", "beforehide", "hide"], this.JL);
  this.Qo && Ku(Z(this), this.Qa(this.kb + "-closebtn-id"), jA, F(this.setVisible, p));
  var a = this.G(),
      b = this.Qa(this.kb + "-arrow-id"),
      c = this.o;
  c.b = a;
  c.A = b;
  AG(this.ra, this.o)
};
B.setVisible = function(a) {
  this.ra.setVisible(a)
};
B.Da = function() {
  return this.ra.Da()
};
B.Ua = function() {
  this.Da() && this.ra.Ua()
};
B.L = function() {
  this.ra.aa();
  delete this.ra;
  fO.J.L.call(this)
};
B.hD = function() {
  lv(this.G());
  return p
};
B.JL = function(a) {
  if ("show" == a.type || "hide" == a.type) {
    var b = Z(this),
        c = this.b,
        c = J ? Cu(c) : c.Sa();
    "show" == a.type ? b.I(c, "scroll", this.hD) : b.b(c, "scroll", this.hD)
  }
  return this.P(a.type)
};

function hO(a) {
  a = a || {};
  var b = '<div role="button"' + (a.id ? ' id="' + KI(a.id) + '"' : t) + ' class="',
      c;
  c = a || {};
  var d = "goog-inline-block jfk-button ";
  switch (c.style) {
  case 0:
    d += "jfk-button-standard";
    break;
  case 2:
    d += "jfk-button-action";
    break;
  case 3:
    d += "jfk-button-primary";
    break;
  case 1:
    d += "jfk-button-default";
    break;
  case 4:
    d += "jfk-button-flat";
    break;
  case 5:
    d += "jfk-button-mini";
    break;
  case 6:
    d += "jfk-button-contrast";
    break;
  default:
    d += "jfk-button-standard"
  }
  d += (1 == c.width ? " jfk-button-narrow" : t) + (c.checked ? " jfk-button-checked" : t) + (c.bc ? " " + c.bc : t) + (c.disabled ? " jfk-button-disabled" : t);
  return Nm(b + KI(new YH(d, k)) + '"' + (a.disabled ? ' aria-disabled="true"' : ' tabindex="' + (a.ox ? KI(a.ox) : "0") + '"') + (a.title ? " " + (a.vT ? "data-tooltip" : "title") + '="' + KI(a.title) + '"' : t) + (a.value ? ' value="' + KI(a.value) + '"' : t) + (a.attributes ? " " + JI(a.attributes) : t) + ">" + ZH(a.content != n ? a.content : t) + "</div>")
};

function iO(a, b, c, d) {
  Ky.call(this, a, jO.M(), b);
  this.o = c || 0;
  this.Ob = d || 0;
  this.ka = p
}
H(iO, Ky);
B = iO.prototype;
B.getStyle = w("o");
B.vb = function(a) {
  this.Fk(a);
  var b = this.G();
  b && a && (this.ka ? MH(b, a, k) : b.title = a)
};
B.Ta = function(a) {
  this.isEnabled() != a && (iO.J.Ta.call(this, a), kO(this))
};
B.wj = function(a) {
  iO.J.wj.call(this, a);
  lO(this, p)
};
B.Jf = function(a) {
  iO.J.Jf.call(this, a);
  this.isEnabled() && lO(this, m)
};
B.Df = function(a) {
  iO.J.Df.call(this, a);
  this.isEnabled() && lO(this, m)
};

function lO(a, b) {
  a.G() && rv(a.G(), "jfk-button-clear-outline", b)
}
function kO(a) {
  a.G() && pia(a.Gc(), a)
}
function jO() {
  this.X = this.Oa() + "-standard";
  this.o = this.Oa() + "-action";
  this.K = this.Oa() + "-primary";
  this.D = this.Oa() + "-default";
  this.C = this.Oa() + "-flat";
  this.H = this.Oa() + "-narrow";
  this.F = this.Oa() + "-mini";
  this.B = this.Oa() + "-contrast"
}
H(jO, wy);
Xa(jO);
B = jO.prototype;
B.rh = function(a, b, c) {
  a && c.o != a && (c.o = a, kO(c));
  b && c.Ob != b && (c.Ob = b, kO(c))
};
B.Oa = y("jfk-button");
B.pd = function(a) {
  var b = a.b,
      c = $H(hO, {
      disabled: !a.isEnabled(),
      checked: a.hg(),
      style: a.getStyle(),
      title: a.ze(),
      vT: a.ka,
      value: a.Ca(),
      width: a.Ob
    }, k, b);
  b.append(c, a.getContent());
  this.Tb(a, c);
  return c
};
B.Tb = function(a, b) {
  jO.J.Tb.call(this, a, b);
  this.A || (this.A = Kc(this.X, F(this.rh, 0, n), this.o, F(this.rh, 2, n), this.K, F(this.rh, 3, n), this.D, F(this.rh, 1, n), this.C, F(this.rh, 4, n), this.F, F(this.rh, 5, n), this.B, F(this.rh, 6, n), this.H, F(this.rh, n, 1)));
  for (var c = cv(b), d = 0; d < c.length; ++d) {
    var e = this.A[c[d]];
    e && e(a)
  }
  if (c = b.getAttribute("data-tooltip")) a.Fk(c), a.ka = m;
  return b
};
B.Ca = function(a) {
  return a.getAttribute("value") || t
};
B.$a = function(a, b) {
  a && a.setAttribute("value", b)
};
B.Qn = function(a, b, c) {
  jO.J.Qn.call(this, a, b, c);
  if (32 == b) try {
    var d = a.G();
    c ? d.focus() : d.blur()
  } catch (e) {}
};

function pia(a, b) {
  function c(a, b) {
    (a ? d : e).push(b)
  }
  var d = [],
      e = [],
      f = b.getStyle();
  c(0 == f, a.X);
  c(2 == f, a.o);
  c(3 == f, a.K);
  c(4 == f, a.C);
  c(5 == f, a.F);
  c(1 == f, a.D);
  c(6 == f, a.B);
  c(1 == b.Ob, a.H);
  c(!b.isEnabled(), a.Oa() + "-disabled");
  aw(b.G(), e);
  bw(b.G(), d)
};

function mO(a, b, c) {
  this.o = a;
  this.D = b;
  this.ja = new Q(this);
  this.B = c
}
H(mO, uc);
B = mO.prototype;
B.dD = m;
B.show = function() {
  if (zo(this.o)) {
    Ph(this.o);
    if (this.A) return nO(this), this.ja.I(this.D, "p", this.tP), this.ja.I(this.B, "resize", this.uP), m;
    this.aa()
  }
};
B.uP = function() {
  this.oG();
  window.setTimeout(E(this.oG, this), 250)
};
B.oG = function() {
  this.b && this.b.Da() && this.b.Ua()
};
B.tP = function() {
  this.b ? oO(this) || this.aa() : nO(this)
};

function oO(a) {
  var b;
  8 == a.A && (b = T("gbg5"));
  return b && xj(b) && (a = vj(b), a.width || a.height) ? b : n
}
function nO(a) {
  var b, c, d;
  8 == a.A && (c = b = 1, d = -10);
  var e = oO(a);
  if (e) {
    a.ja.I(new aO(e), "action", a.eM);
    a.b = new fO;
    gx(a.b.ra, p);
    var f = a.b,
        h = a.C;
    f.A = h;
    gO(f, h);
    a.b.Ug(e);
    oH(a.b.o, b, c, k, d);
    a.b.Qo = m;
    a.b.render(document.body);
    a.ja.I(a.b, "hide", a.fM);
    a.b.setVisible(m)
  }
}
B.fM = function() {
  if (this.dD) {
    var a = S(this.o);
    Gu(a, this.A, p);
    a.jb()
  }
  this.aa()
};
B.eM = function() {
  this.dD = p;
  this.aa()
};
B.L = function() {
  mO.J.L.call(this);
  K(this.b);
  delete this.b;
  K(this.ja);
  delete this.ja;
  delete this.C;
  delete this.D;
  delete this.B
};

function pO(a) {
  Y.call(this);
  this.o = a || "qab";
  this.A = this.o + "-ta-expanded"
}
H(pO, Y);
B = pO.prototype;
B.te = n;
B.Rm = n;
B.ia = function() {
  var a = this.b,
      b = a.U("div", this.o + "-container");
  this.V = b;
  var c = a.U("label", {
    "for": this.oa("textarea")
  }, "Quick Add");
  b.appendChild(c);
  this.te = a.U("textarea", {
    id: this.oa("textarea")
  });
  b.appendChild(this.te);
  this.Rm = new Ky("Add", new Oy);
  this.ha(this.Rm, m);
  a = a.U("p", n, "Example: Dinner with Michael 7pm tomorrow");
  b.appendChild(a)
};
B.$ = function() {
  pO.J.$.call(this);
  var a = Z(this),
      b = new yL(this.te);
  a.I(b, "input", this.bF);
  a.I(this.te, "keydown", this.eW);
  Ku(a, this.Rm.G(), jA, this.dF)
};
B.L = function() {
  Ii(this.G());
  this.Rm = this.te = n;
  pO.J.L.call(this)
};
B.eW = function(a) {
  13 == a.keyCode && (a.preventDefault(), this.dF())
};
B.bF = function() {
  var a = this.te.value,
      a = 25 < a.length || 0 <= a.indexOf("\n");
  kn(this.te, this.A, a)
};
B.dF = function() {
  this.te.value && this.P("submit")
};
B.reset = function() {
  this.te.value = t;
  this.bF()
};
B.focus = function() {
  this.te.focus()
};
B.blur = function() {
  this.te.blur()
};

function qO(a) {
  var b = document.body,
      c = new pO;
  c.render(b);
  en(c.G(), "gcal-popup");
  this.b = c;
  kx.call(this, this.b.G(), new RH(W("sidebar"), 5));
  this.o = a;
  a = new Q;
  Xd(a, this.b, "submit", this.B, k, this);
  Xd(a, this, "show", this.F, k, this);
  Xd(a, this, "beforehide", this.A, k, this);
  hx(this);
  BG(this)
}
H(qO, kx);
qO.prototype.B = function() {
  this.o(this.b.te.value);
  this.setVisible(p)
};
qO.prototype.A = function() {
  this.b.reset();
  this.b.blur()
};
qO.prototype.F = function() {
  this.b.focus();
  if (J) {
    var a = this.b.Rm.G();
    a.className = a.className
  }
};
var rO = n;

function sO() {
  rO || (rO = new qO(Pha));
  return rO
}
function hfa() {
  var a = sO();
  ix(a) || a.setVisible(m)
}
function Rea() {
  sO().setVisible(m)
};

function tO(a, b) {
  this.o = a;
  this.A = b
}
var uO;
tO.prototype.execute = function() {
  this.b() || (E(this.b, this), O(this.o, "idle", this.b, p, this), O(this.A, "p", this.b, p, this))
};
tO.prototype.b = function() {
  return this.o.b && "g" == this.A.wc ? (GH(), m) : p
};

function GH() {
  uO || (uO = m, T("gccFrame").appendChild(Ei("iframe", {
    frameborder: 0,
    style: "border:0;vertical-align:bottom;width:0;height:0",
    src: "pf?param=1"
  })))
};

function vO(a) {
  Y.call(this);
  this.o = a
}
H(vO, Y);
vO.prototype.$ = function() {
  this.B = T("dismissSurveyButton");
  Ku(Z(this), this.B, jA, this.C);
  Z(this).I(yo(this.o), "m", this.F);
  this.A = T("hsbutterbarcont");
  zo(this.o) && U(this.A, m)
};
vO.prototype.C = function() {
  if (zo(this.o)) {
    var a = S(this.o);
    a.set("dismissedSurvey", "true");
    a.jb();
    U(this.A, p)
  }
};
vO.prototype.F = function(a) {
  U(this.A, a.Pa)
};

function wO() {
  this.b = window.performance || window.msPerformance
}
H(wO, uc);
wO.prototype.L = function() {
  delete this.b
};

function xO(a) {
  this.b = a
}
var qia = new V('<table class="yd-dialog"><tr><td><p>${warning}</p><p>${optOutExplanation}</p><p>${question}</p></td></tr></table>');

function yO(a) {
  return a.b ? "Use alpha version" : "Use stable version"
}

function zO() {
  function a(a) {
    "yes" == a.key && (window.location.href = "alpha")
  }
  var b = WI() + "/stable",
      c = jm(qia, {
      warning: "You are about to use the alpha version of Calendar. You'll be on the latest version, but the product may be unstable and can contain more bugs than the stable version.",
      optOutExplanation: 'If you want to switch back to the stable version after switching to the alpha version, select "Use stable version" from the menu or type "' + b + '" into your browser. We suggest you add this as a bookmark in your browser, in case your calendar is unavailable.',
      question: "Are you sure you want to switch to the alpha version of Calendar?"
    });
  return function() {
    ku(new Js, a, "Use alpha version?", c, FK)
  }
}
xO.prototype.Un = function(a) {
  PN(a, yO(this), 10, E(this.o, this, this.b ? "javascript:void(0)" : "stable"))
};
xO.prototype.o = function(a) {
  this.b ? zO()() : window.location.href = a
};

function AO(a, b, c) {
  Ao() && (this.o || (this.o = new Q(this))).I(yo(a), "m", this.B);
  this.A = b;
  this.b = c
}
AO.prototype.B = function(a) {
  if (a.Pa) {
    a = T("onegoogbar");
    var b = T("offline-message"),
        c = T("offline-searchbar");
    a && (b || c) && (U(a, m), b ? (U(b, p), b.innerHTML = t) : (U(c, p), c.innerHTML = t));
    BO(m);
    CO()
  } else DO(this), EO()
};

function DO(a) {
  var b = T("onegoogbar"),
      c = T("offline-message"),
      d = T("offline-searchbar");
  if (b && (c || d)) {
    var e;
    e = c ? jm(a.b ? ria : sia, {
      email: a.A
    }) : a.b ? '<div class="offline-top"></div><div class="offline-bar"><div class="offline-account offline-align">' + ZH(a.A) + '</div><div class="offline-align-image"><img src="images/calendar_logo_offline.png"/></div><div class="offline-align"><div class="offline-new-indicator"><img src="images/activity_indicator_offline.png"/></div><span class="offline-newmessage">' + ZH("Not connected") + '</span><span id="' + KI("retry-online") + '" class="offline-newmessage connect-link">' + ZH("Connect") + "</span></div></div>" : '<div class="offline-top"></div><div class="offline-bar"><div class="offline-account offline-align">' + ZH(a.A) + '</div><div class="offline-align-image"><img src="images/calendar_logo_offline.png"/></div><div class="offline-align"><div class="offline-new-indicator"><img src="images/activity_indicator_offline.png"/></div><span class="offline-newmessage">' + ZH("Your account does not have offline access") + "</span></div></div>";
    c ? (c.innerHTML = e, U(c, m)) : (d.innerHTML = e, U(d, m));
    U(b, p);
    a.b && (b = a.o || (a.o = new Q(a)), jA.b(T("retry-online"), a.b.kO, p, a.b || b.ja || b, b))
  }
  BO(p)
}
function BO(a) {
  var b = T("onegoogbar");
  if (b) for (var b = Jw(b, function(a) {
    (a = a.tagName) && (a = a.toLowerCase());
    return "a" == a
  }), c = a ? 0 : -1, d = 0; d < b.length; d++) b[d].tabIndex = c;
  if (b = T("retry-online")) b.tabIndex = a ? -1 : 0
}

function EO() {
  for (var a = Mt("to-disable"), b = 0; b < a.length; b++) {
    var c = a[b],
        d = c.tagName;
    d && (d = d.toLowerCase());
    if ("button" == d || "input" == d) c.setAttribute("disabled", "disabled");
    else {
      en(c, "ui-disabled");
      var e;
      "a" == d ? (d = c.getAttribute("href"), e = "javascript:void 0;", d != e && (c.setAttribute("dummy", d), c.setAttribute("href", e))) : (d = c.getAttribute("onclick"), e = "return false;", d != e && (c.setAttribute("dummy", d), c.setAttribute("onclick", e)))
    }
    a[b].getAttribute("to-disable-tabindex") && (a[b].tabIndex = -1)
  }
}

function CO() {
  for (var a = Mt("to-disable"), b = 0; b < a.length; b++) {
    var c = a[b],
        d = c.tagName;
    d && (d = d.toLowerCase());
    if ("button" == d || "input" == d) c.removeAttribute("disabled");
    else {
      gn(c, "ui-disabled");
      var e = c.getAttribute("dummy");
      e != n && ("a" == d ? c.setAttribute("href", e) : c.setAttribute("onclick", e))
    }
    a[b].getAttribute("to-disable-tabindex") && (a[b].tabIndex = 0)
  }
}
var ria = new V('<div class=offline-account>${email}</div><div class="offline-indicator"></div> Calendar is offline <span id=retry-online class=offline-message>Go online</span>'),
    sia = new V('<div class=offline-account>${email}</div><div class="offline-indicator"></div> Your account does not have offline access');

function FO() {
  Y.call(this)
}
H(FO, Y);
FO.prototype.ia = function() {
  FO.J.ia.call(this);
  var a = this.G();
  a.className = "asb-w";
  a.tabIndex = 0;
  a.title = "Show search options";
  Dj(a, "button");
  a.innerHTML = "<div class=asb-i></div>"
};
FO.prototype.$ = function() {
  FO.J.$.call(this);
  Ku(Z(this), this.G(), jA, this.o)
};
FO.prototype.o = function() {
  this.P("action")
};

function GO(a, b, c, d, e) {
  this.ja = new Q(this);
  this.ja.I(c, "action", this.yP);
  this.o = a;
  this.A = c;
  this.D = b;
  this.C = d;
  this.F = e;
  Od(this.o, 22, this)
}
H(GO, uc);
B = GO.prototype;
B.yP = function() {
  HO(this)
};

function HO(a) {
  a.C();
  Rq(a.o).b(Ja, E(a.AP, a))
}
B.AP = function() {
  if (!this.b) {
    var a = new IO(this.o, this.D),
        b = gbar.qfgw(),
        c = Ei("div", "asf-gbar");
    b.appendChild(c);
    a.render(c);
    var d = new kx(c);
    hx(d);
    gx(d, p);
    AG(d, new RH(b, 5));
    this.ja.I(a, "close", E(d.setVisible, d, p));
    this.ja.I(d, "hide", E(a.Na, a));
    this.ja.I(d, ["hide", "show"], this.gK);
    this.ja.I(a, "set", this.F);
    this.ja.I(window, "resize", this.lK);
    this.B = c;
    this.ra = d;
    this.b = a
  }
  a = this.b.G().style;
  b = gbar.qfgw();
  b = vj(b);
  a.width = b.width + "px";
  this.ra.setVisible(m);
  this.b.xa || this.b.$();
  this.b.focus()
};
B.lK = function() {
  this.ra.Ua();
  window.setTimeout(E(this.ra.Ua, this.ra), 400)
};
B.gK = function() {
  var a = this.ra.Da();
  U(this.A.G(), !a)
};
B.L = function() {
  GO.J.L.call(this);
  K(this.ja);
  delete this.ja;
  K(this.b);
  delete this.b;
  K(this.ra);
  delete this.ra;
  Li(this.B);
  delete this.B;
  delete this.A
};

function JO() {
  this.b = ib()
}
Xa(JO);

function tia(a) {
  var b;
  if (b = "none" != T("mainbody").style.display) b = xp(R()), b = !! b && b.o() && !b.B.Ql;
  b && (b = R(), yp(vp(b)).D(0 > a.detail ? -1 : 1))
}
function uia() {
  var a = JO.M(),
      b = new KO(T("mainbody"), tia, m);
  if (b.G()) {
    var c = new kw(b.G());
    O(c, "mousewheel", E(a.o, a, b))
  }
}
JO.prototype.o = function(a, b) {
  if (a.o) {
    if (ib() < this.b) return;
    this.b = ib() + 500
  }
  a.b && a.b.call(n, b)
};

function KO(a, b, c) {
  this.V = a;
  this.b = b;
  this.o = c
}
KO.prototype.G = w("V");

function LO(a) {
  this.b = a
}
H(LO, Xv);
LO.prototype.o = function(a) {
  via(a);
  var b = Rq(a),
      c = Ao();
  if (c || zo(a)) {
    var d = yo(a);
    zga();
    wia();
    xia();
    yia(a);
    Od(a, 27, new aia(a));
    new oJ(a, T("searchAddCal"));
    zia(a);
    Aia(d);
    hM.M().init(document.body);
    new FM(T("clst_my_menu"), _AP_show, 1);
    new FM(T("clst_fav_menu"), _AP_show, 2);
    Bia(a);
    Vfa(Jd(a, 12));
    Cia(a);
    MO(m);
    uia();
    NO();
    Xfa();
    var e = S(a),
        f = new Vha(E(e.Nj, e), E(e.vD, e), function() {
        return Ll()
      });
    Od(a, 3, new Qha(f));
    var h = Td(a);
    window.setTimeout(function() {
      (new mO(a, Jp.M(), Rfa(Xp(a)))).show();
      Ir(a)
    }, 2E3);
    h.isEnabled(98) && (f = new iL(a), pC.DC(f));
    Dia();
    Zc(window, "unload", Eia);
    var l = ar(),
        q = pw(),
        f = n,
        r;
    h.isEnabled(120) && (r = new IN(a));
    var f = Xp(a),
        s;
    r && (mia(r), s = lia(r));
    f = new MN(a, JA, yA, fw, Ps, E(f.Gr, f), s);
    s = n;
    q && (s = f);
    Fia(h, l, s);
    Gia(a, s);
    Hia(a, s);
    Iia(h, l, s);
    q && $q() && gbar.qfgw && (s = new FO, s.render(gbar.qfgw()), l = Ir(a), l = E(l.Ka, l), new GO(a, Mj.M(), s, l, function(a) {
      b.b(Ja, function() {
        Jia(a)
      })
    }));
    s = XN.M().b;
    Kia(uk(a), s, d);
    Lia(Dp.M(), e, c ? k : d);
    e = lJ(a);
    Mia(h);
    (l = _delayedLoadContext.timeZoneSuggestion) && Nia(l.id, l.translatedName, l.offset);
    Dd(Ld(a, 806), Oia);
    Pia(a, e);
    At ? At() : r ? kia(r, a) : h.isEnabled(110) && Qia(a);
    r = Af(a);
    r = new JL(d, r, s);
    c && (c = Mh(Ph(a)).Ma(), new AO(a, c, r));
    Ria(a, r, s);
    Sia(a);
    (new FI(a)).init();
    f && nia(f);
    qG(d)
  }
};

function Tia(a, b) {
  var c = R();
  if (b) {
    var c = S(c),
        d;
    for (d in a) c.set(d, a[d]);
    c.jb()
  } else Rq(c).b(ya, function() {
    OO(a)
  })
}
function Mia(a) {
  var b = Rh(R());
  J && (!qc("9") || !qc("10") && a.isEnabled(20)) && (new SM(b, Xp(R()))).show()
}
function Nia(a, b, c) {
  var d = R(),
      e = Xp(d);
  (new PO(d, a, b, c, Tia, E(e.Wf, e))).start()
}

function Dia() {
  var a = R();
  if (ho(a)) {
    var a = new CM(yk(a)),
        b = Dp.M().Z;
    b.b = a;
    b.b.nT(b);
    b.Fr && b.b.Um(LB(b), MB(b), NB(b, "rrd-handle-top"), NB(b, "rrd-handle-bottom"))
  }
}
function Eia() {
  var a = Zo.M();
  Fc(a.b) || (a.log("ou_perf", 0), $N(a))
}
function Iia(a, b, c) {
  if (a.isEnabled(56)) {
    a = new SN;
    if (wI() && cN()) {
      b = Ei("span", b ? "og-lk" : "lk", "Send feedback");
      var d = Ei("a", {
        href: "javascript:void(0)"
      }, b);
      O(b, "mousedown", TN);
      gbar.addLink(d, "gbe", "google-feedback-link")
    }
    c && ON(c, a)
  }
}

function Fia(a, b, c) {
  a.isEnabled(70) && (a = new YN, wI() && (b = b ? Ei("span", "og-lk", "Labs") : Ei("img", {
    id: "labsLink",
    className: "lk",
    title: "Labs",
    alt: "Labs",
    src: pg()
  }), b = Ei("a", {
    href: "javascript:void(0)"
  }, b), gbar.addLink(b, "gbe", "labs-link"), O(b, "mousedown", F(Ps, 4))), c && ON(c, a))
}

function Gia(a, b) {
  if (Td(a).isEnabled(127) && "NEITHER" != _yesterdailyOptInOrOut) {
    var c = new xO("OPT_IN" == _yesterdailyOptInOrOut);
    if (wI()) {
      var d = Ei("a", {
        href: c.b ? "javascript:void(0)" : "stable"
      }, yO(c));
      gbar.addLink(d, "gbn", "opt-in-out-link");
      if (c.b) {
        var e = zO();
        bJ(d, jA, e)
      }
    }
    b && ON(b, c)
  }
}
function yia(a) {
  a = new OM(a, new wL, Mj.M());
  hw.B = a;
  gw.B = a
}
function xia() {
  if (bi()) {
    var a = jm(rL, {
      url: I(uL()),
      text: "mobile version"
    });
    Ir(R()).o("Calendar not working on your browser? Try the " + a + ".")
  }
}

function Aia(a) {
  var b = qL.M();
  if (b.G() && (b.render(), !bi())) {
    var c = new QO;
    c.A.push(new RO("tips", "en"));
    c.load(function() {
      c.b || SO(c);
      var a;
      a = c.b.length;
      a = Math.floor(Math.random() * a);
      c.B = a;
      b.o = c;
      (a = b.G()) && a.hasChildNodes() && b.$p()
    });
    O(a, "m", b.$p, p, b)
  }
}

function Pia(a, b) {
  var c = _postScript - _preScript,
      d = _eoHeadTime - _loadStartTime,
      e = _beginBodyTime - _eoHeadTime,
      f = Dt - _loadStartTime,
      h = Dt - _renderStartTime,
      l = zo(a) ? t : "ol_";
  dp(l + "scriptTime", c);
  dp(l + "renderHeadTime", d);
  dp(l + "waitTime", e);
  dp(l + "loadTime", f);
  dp(l + "renderViewTime", h);
  "number" == typeof _ogEnd && "number" == typeof _ogStart && dp(l + "ogTime", _ogEnd - _ogStart);
  c = wp(a);
  dp("defaultMode", c.getType());
  window.jstiming.pt && (window.jstiming.pt -= gJ(window.jstiming.load, "start", 0) - _loadStartTime);
  c = window.jstiming.pt;
  0 < c && dp("csi_srt", c);
  c = new wO;
  if (d = !! c.b) d = c.b ? 0 === c.b.navigation.type : k;
  d && (d = c.b ? c.b.timing.navigationStart : k, d && dp(l + "wt_srt", _loadStartTime - d), d = c.b ? c.b.timing.responseStart : k, d && dp(l + "wt_ttfb_bias", _loadStartTime - d), c.b ? (d = c.b.timing, d = d.redirectEnd - d.redirectStart) : d = k, d && (e = c.b ? c.b.navigation.redirectCount : k, dp(l + "wt_redir_num", e || 0), dp(l + "wt_redir", d)), c.b ? (d = c.b.timing, d = d.responseStart - d.requestStart) : d = k, dp(l + "wt_rtt", d || 0));
  c.aa();
  yt.b("tot_delayed_extras");
  l = window.jstiming.load;
  l.name =
  b.b().OT;
  l.tick("start", k, _loadStartTime);
  l.tick("prt", k, Dt);
  l.tick("tlt", k, Dt + _tsf);
  b.report(l)
}
var TO = 0;

function NO() {
  var a = Xg(S(R()), "alternateCalendar", "0") || 0;
  if (a != TO) {
    TO = a;
    var b = Kl;
    if (a) var c = Il.M(),
        c = new uha[a](a, c),
        b = new bK(b, c, vha[a]);
    a = xk(R());
    a.b = b;
    a.P(v)
  }
}
function zia(a) {
  zo(a) && (wx(yx(a)).K = new TM)
}
function Kia(a, b, c) {
  a = new WN(a, Ow(), c);
  a.init();
  vn && bN(2) || yn && bN(6) || (b = new tO(b, Jp.M()), O(a, "ca", E(b.execute, b)))
}
function Lia(a, b, c) {
  b = new UN(a, b, c);
  a.B = b;
  b.insert(Up(a))
}

function Ria(a, b, c) {
  var d = new UI(Td(R()).isEnabled(115), Sh(a));
  Af(a).C = d;
  b.D = d;
  a = yo(a);
  new ZN(0, a, c)
}
function Hia(a, b) {
  b && Rq(a).b("offline", function() {
    Nd(a, 11) && Jd(a, 11).kU(b)
  })
}
function Bia(a) {
  Td(a).isEnabled(7) && (new EM(a, JA.o)).init()
}
function Cia(a) {
  var b = Mj.M();
  Sfa(b) || (a = Mh(Ph(a)).uid, b.Ke(a, m))
}
function Sia(a) {
  var b = T("hsbutterbarcont");
  b && (new vO(a)).render(b)
}
function Qia(a) {
  Wfa(Ph(a)) && Rq(a).b(Ba, function() {
    (new UO(a)).render()
  })
}

function via(a) {
  var b = $ga();
  if ("settings" in b && zo(a)) {
    var c = Number(b.settings[0]);
    if (10 == c) {
      var d = n;
      "did" in b && (d = b.did);
      Rq(a).b(ya, function() {
        VO(1, d)
      })
    } else isNaN(c) || Ft(c, p)
  }
}
function Oia(a) {
  a.init(Mj.M(), Jl(), Hp)
};
Ou(805, function(a) {
  return new LO(a)
});

function WO(a) {
  this.D = a
}
H(WO, uc);
WO.prototype.init = function(a, b, c) {
  this.b = c;
  this.ja = new Q(this);
  this.ja.I(Jd(this.D, 21), "F", this.o);
  this.A = "g" == Jp.M().wc;
  this.ja.I(Jp.M(), "o", this.C);
  this.ja.I(a, va, this.o);
  this.ja.I(b, "newday", this.o);
  a = new $I(3E5);
  a.start();
  this.ja.I(a, "tick", this.o);
  this.dc(a)
};
WO.prototype.o = function() {
  this.A ? this.b && (this.b(), this.B = p) : this.B = m
};
WO.prototype.C = function() {
  if (this.A = "g" == Jp.M().wc) Ci(document).y && (Di(document).scrollTop = 0), this.B && this.b && (this.b(), this.B = p)
};
WO.prototype.L = function() {
  WO.J.L.call(this);
  K(this.ja);
  delete this.b
};
Ou(806, function(a) {
  return new WO(a)
});

function XO() {
  this.b = {}
}
H(XO, uc);
XO.prototype.o = function() {
  return this.b["{N, plural, =0 {0 events} =1 {1 event} other {# events}}"] || (this.b["{N, plural, =0 {0 events} =1 {1 event} other {# events}}"] = new Xk("{N, plural, =0 {0 events} =1 {1 event} other {# events}}"))
};
XO.prototype.L = function() {
  XO.J.L.call(this);
  this.b = n
};
Ou(807, function() {
  return new XO
});

function YO() {}
YO.prototype.init = function(a) {
  this.b || (Xq(a, "ur", Dga, pt), Xq(a, "os", Ft, Uia), Xq(a, "p", jI, Via), Xq(a, "sb", Wia, Xia), Xq(a, "pc", Iga, Yia), Xq(a, "pg", Gga), Xq(a, "si", Kga), Xq(a, "sc", Oga), Xq(a, "gcc", aha), Xq(a, "v", Rga), Xq(a, "d", Cq), Xq(a, "e", Zia), Xq(a, "hr", bha), Xq(a, "rel", CI), Xq(a, "di", Uga), Xq(a, "sd", qI), Xq(a, "smu", $ia), Xq(a, "sba", Cga), Xq(a, "ref", aja), Xq(a, "qa", Aga), Xq(a, "gague", Bga), Xq(a, "dds", bja), Xq(a, "csi", Mga), Xq(a, "rtz", cja), Xq(a, "utzc", dja), Xq(a, "ml", Sga), Xq(a, "bp", eja), Xq(a, "rc", fja), Xq(a, "ag", Wga), Xq(a, "ta", gja), this.b = m)
};

function fja() {
  Mj.M().Id()
}
function bja(a) {
  ci.M().remove(a)
}
function eja(a, b, c) {
  for (var d = [], e = [], f = 0; f < a.length; f++) {
    var h = a[f],
        l = h[0],
        q = rz(h[1]).cb(),
        r = rz(h[2]).cb();
    e[f] = new et(l, q, r, parseInt(h[3], 10));
    d[f] = a[f][4]
  }
  a = R();
  a = Jd(a, 25);
  Qfa(a, e, d, b, c)
}
function Yia(a) {
  for (var b = a.length, c = [], d = 0; d < b; ++d) {
    var e = a[d],
        f = {};
    f.id = e[0];
    f.Pb = e[1];
    f.Mf = e[2];
    f.jw = e[3];
    f.lw = e[4];
    (e = Lj(Mj.M(), f.id)) && !e.b || c.push(f)
  }
  a[0] = c;
  a.splice(1, a.length - 1)
}

function Wia(a, b, c, d, e) {
  if (20 != e || Sd(9)) {
    var f;
    C(d) && (f = d);
    var h;
    C(e) && (h = e);
    a = new Nn(a, b, c, f, h);
    b = R();
    pG(Vj(b), a)
  }
}
function Xia(a) {
  a[1] = parseInt(a[1], 10);
  a[2] = parseInt(a[2], 10);
  a[3] && (a[3] = parseInt(a[3], 10));
  a[4] && (a[4] = parseInt(a[4], 10))
}
function Uia(a) {
  a[0] = parseInt(a[0], 10);
  a[1] = "true" == a[1]
}
function Via(a) {
  a[0] = parseInt(a[0], 10)
}
function Zia(a) {
  alert(a)
}
function aja() {
  Mr(R())
}
function gja() {
  Dd(Ld(R(), 800), function(a) {
    a.enable();
    a.zs && XH(a.tx, "render", "scs")
  })
};
Ou(808, function() {
  return new YO
});
var ZO = {};

function $O(a) {
  a = ZO[a || "GETALLTZS"];
  return a != n ? a : n
}
function aP(a, b) {
  if (b) {
    var c = b.selectedIndex;
    if (!c || 0 > c || c >= b.options.length) c = 0;
    c = b.options[c].value;
    b.options.length = 0;
    for (var d = p, e = 0; e < a.length; e += 2) b.options[e / 2] = new Option(a[e + 1], a[e]), c == a[e] && (d = b.options[e / 2].selected = m);
    !d && 0 < b.options.length && (b.options[0].selected = m)
  }
}
function bP(a, b) {
  var c = W(b ? "preftz" : "secondtz");
  return c != n && 0 <= c.selectedIndex ? (c = c.options[c.selectedIndex], cP(c.value, c.text, a)) : a
}

function cP(a, b, c) {
  for (var d = 0; d < c.length; d += 2) if (c[d] == a) return c;
  return [a, b].concat(c)
}
function dja(a, b) {
  var c = R();
  Rq(c).b(ya, function() {
    ZO[b || "GETALLTZS"] = a
  })
}
function cja(a) {
  var b = R();
  Rq(b).b(ya, function() {
    var b = $O(a),
        d = bP(b, p);
    aP(bP(b, m), W("preftz"));
    aP(d, W("secondtz"))
  })
};

function dP() {
  this.A = {};
  this.b = {}
}
dP.prototype.o = Qa(88);

function eP(a, b, c) {
  this.D = a;
  c || Jd(a, 8);
  this.F = Af(a);
  this.C = uk(a);
  this.b = 0;
  this.B = [];
  this.A = [];
  this.o = b || new dP
}
B = eP.prototype;
B.jF = Qa(89);
B.yY = function(a, b, c) {
  var d = a.getName();
  b = fP(this, d, b, c);
  return b != n ? new qg(d, a.ud, a.he(), b, E(this.ZX, this, d)) : n
};
B.ZX = function(a, b) {
  return fP(this, a, b.va(), 1)
};

function fP(a, b, c, d) {
  var e = S(a.D).$f();
  return If((Date.UTC(c.year, c.month - 1, c.Y, 0, 0, 0) + 864E5 * d / 2 - a.C.Bn()) / 6E4, b, e)
}

function gP(a, b, c, d) {
  var e = b();
  e || 2 == a.b ? c(e) : (a.B.push(cha(c, b)), a.A.push(d));
  0 == a.b && (a.b = 1, a.F.send("fetchTZ", [], 21, E(a.$O, a), E(a.ZO, a)))
}
B.My = Qa(90);

function hP(a, b, c, d, e, f) {
  gP(a, E(a.yY, a, b, c, d), e, f)
}
B.$O = function(a) {
  for (var b = 0; b < a.length; b += 2) {
    for (var c = a[b + 0], d = a[b + 1], e = [], f = 0; f < d.length; f += 3) {
      var h = d[f + 0],
          l = d[f + 1];
      _setTzTransitions(h + "{" + d[f + 2]);
      e.push(h);
      e.push(l)
    }
    d = this.o;
    ZO[c || "GETALLTZS"] = e;
    for (f = 0; f < e.length; ++f) h = d, l = c, h.A[e[f]] = l, h.b[l] = l
  }
  this.b = 2;
  iP(this, m)
};
B.ZO = function() {
  this.b = 0;
  iP(this, p)
};

function iP(a, b) {
  var c = b ? a.B : a.A;
  a.B = [];
  a.A = [];
  for (var d = 0; d < c.length; ++d)(0, c[d])()
};
Ou(813, function(a) {
  return new eP(a)
});
Ou(800, function() {
  return new vI
});

function QO() {
  this.A = []
}
H(QO, Mha);
QO.prototype.load = function(a) {
  a = E(this.D, this, a || D);
  for (var b = 0; b < this.A.length; b++) this.A[b].load(a)
};
QO.prototype.D = function(a) {
  for (var b = 0; b < this.A.length; b++) {
    var c = this.A[b];
    if (c.o || !c.B) return
  }
  this.o = n;
  a()
};

function SO(a) {
  if (!a.o) {
    a.o = [];
    for (var b in a.A) a.o = a.o.concat(a.A[b].tu())
  }
  a.B = 0;
  a.b = a.o;
  Rb(a.b, hja)
}
QO.prototype.tu = function() {
  this.b || SO(this);
  return this.b
};

function hja(a, b) {
  return dJ(tL(a)) - dJ(tL(b))
}
function vL(a) {
  return a.tu()[a.B]
};

function jP(a, b, c) {
  oL.call(this, "tip");
  this.B = a;
  this.b = b;
  this.o = c
}
H(jP, oL);

function tL(a) {
  var b = a.B;
  a.o && a.b && (b += '&nbsp;<a class="tip" href="' + a.o + '" target="_blank">' + a.b + "</a>");
  return b
}
function RO(a, b) {
  this.D = a;
  this.C = b || "en";
  this.o = p;
  this.A = this.B = n
}
H(RO, pL);
RO.prototype.load = function(a) {
  this.o || !this.o && this.B || (this.o = m, this.A = new De, O(this.A, wa, E(this.F, this, a || D)), this.A.send(this.D))
};
RO.prototype.F = function(a) {
  var b = this.A.getStatus();
  this.o = p;
  this.B = {};
  if (!(200 > b || 299 < b)) {
    try {
      this.B = uG(this.A.Ki()) || {};
      this.b = [];
      for (var c = this.B.topic.answers, b = 0; b < c.length; b++) {
        var d = c[b],
            e = d.tooltip;
        if (C(e)) {
          var f = d.question,
              h = d.inproduct;
          h && (h = Zga(h, "hl", this.C));
          this.b.push(new jP(e, f, h))
        }
      }
    } catch (l) {}
    a()
  }
};

function kP(a, b, c) {
  Y.call(this);
  this.A = a;
  this.event = b;
  this.o = c;
  this.C = c != n;
  this.K = og(a);
  this.ea = this.K.hb(b)
}
H(kP, Y);
kP.prototype.hb = w("ea");

function lP(a, b) {
  b || wi();
  this.b = a || n
}
lP.prototype.render = function(a, b) {
  var c = a(b || {}, k, this.b ? this.b.getData() : {});
  this.o();
  return String(c)
};
lP.prototype.o = D;

function mP(a) {
  a = a || {};
  var b = '<span class="rtc-hangout-icon goog-inline-block"></span>';
  a.xo ? b += "Join video call" : (a = "Join meeting: " + ZH(a.yo), b += a);
  return Nm(b)
};

function nP(a) {
  var b = vD(a),
      c;
  if (c = b) {
    if (c = 1 == a.b.get()) {
      c = vD(a);
      var d = Oh(Ph(a.D));
      c = c == d.B
    }
    c = !c
  }
  return c ? a.o.get() + " (" + b + ")" : a.o.get()
};

function oP(a, b, c) {
  kP.call(this, a, b, c);
  this.F = Lj(Mj.M(), this.event.Aa()).color;
  this.B = this.Pa() && this.hb() && (Oj(b, 2097152) || xu(b));
  this.Z = new lP
}
H(oP, kP);
var ija = new V('<div class="eb-root"><div class="eb-header">${header}</div><table class="eb-data" cellspacing=0>${main}</table>${eventFromGmailMessage}<div class="eb-footer">${footer}</div><div id="eventColorPopup" class="eb-popup"><div class="eb-popup-tip"></div></div></div>'),
    jja = new V('${eventColorElement}<div id="mtb" class="eb-title goog-inline-block" style="color:${titleColor}">${title}</div><div class="eb-date">${date}</div>'),
    kja = new V('<div class="${eventColorClass} goog-inline-block" id="${id}eventColor" style="background-color: ${color}; border-color:${borderColor};"><div class="eb-dropdown-indicator"></div></div>'),
    lja = new V('<tr><th><div id="${labelId}">${key}</div></th><td>${value}</td></tr>'),
    mja = new V('<tr><td colspan="2">${value}</td></tr>'),
    nja = new V('<a id="${id}details" href="javascript:void(0);" class="eb-action eb-details-link lk">${details} &raquo;</a>'),
    oja = new V('<a id="${id}delete" href="javascript:void(0);" class="eb-action-link lk">${delete}</a>'),
    pja = new V('<a id="${id}rtc" href="${href}" target="_blank" rel="noreferrer" class="eb-rtc lk">${label}</a>'),
    pP = new V('<a id="${id}mapLink" target="_blank" href="${href}" class="eb-map-link lk">map</a>'),
    qP = new V('<span id="${id}footerright" class=eb-actions-right>${right}</span><span id="${id}footerleft" class=eb-actions-left>${left}${sep}${delete}</span> ');
B = oP.prototype;
B.Wo = n;
B.oh = n;
B.qi = n;
B.bt = p;
B.Ni = p;
B.Nm = p;
B.zn = p;
B.rb = y(p);
B.ia = function() {
  oP.J.ia.call(this);
  var a = this.G(),
      b = this.uu(),
      c;
  if (Td(this.A).isEnabled(17)) c = qja(this), c = [c[0], rP(this), rja(this), sja(this), c[1], sP(this)].join(t);
  else {
    if (c = this.event.Tc) {
      var d = om(c);
      this.Pa() && (d += jm(pP, {
        id: this.getId(),
        href: I(tI(c))
      }));
      c = tP(this, "Where", d, "location")
    } else c = t;
    c = [c, rP(this), tja(this), uja(this), vja(this), sP(this)].join(t)
  }
  var d = Oj(this.event, 4194304) ? '<div class="eb-sm">' + eH(_extraMessages[0]) + "</div>" : t,
      e;
  if (this.event.Ge()) e = t;
  else if (Oj(this.event, 64)) e = "<div>(Still saving changes...)</div>";
  else {
    e = [];
    var f = this.getId(),
        h = this.YA();
    h && e.push('<div class="eb-override">', h, "</div>");
    var h = this.XA(),
        l = t;
    this.Pa() && this.hb() && (l = jm(oja, {
      id: f,
      "delete": this.$A()
    }));
    var q = t;
    if (this.Pa() || Rr(Mj.M(), this.event.Aa())) q = jm(nja, {
      id: f,
      details: this.B ? this.aB() : "More details"
    });
    e.push(jm(qP, {
      id: f,
      left: h,
      sep: h && l ? " | " : h || l ? t : "&nbsp;",
      "delete": l,
      right: q
    }));
    e = e.join(t)
  }
  a.innerHTML = jm(ija, {
    header: b,
    main: c,
    eventFromGmailMessage: d,
    footer: e
  });
  this.Wo = Mt("eb-title", this.G())[0];
  this.qi = new ez(yv(this.event.getTitle()));
  this.Pa() && this.hb() && this.C && (this.bt = m, Rq(this.A).b(Ba, E(this.yM, this)))
};

function uP() {
  ep("bubble_early_click")
}
B.yM = function() {
  this.bt = p;
  var a = this.Wo,
      b = Cv(a);
  500 < b.length && (b = b.slice(0, 497) + "...");
  this.oh = vP(this.qi, Oj(this.event, 4194304) ? 1 : 2, b);
  a.innerHTML = t;
  this.oh.render(a);
  if (a = this.oh.o) a.G() || a.ia(), a = a.G(), en(a, "eb-title"), ij(a, "color", qi(this.F).F);
  a = this.oh.A;
  a instanceof wP && a.hR();
  this.xa && xP(this)
};

function xP(a) {
  var b = Z(a);
  if (a.oh) {
    var c = a.oh.o;
    if (c) {
      var d = c.G();
      b.I(c, "focus", a.xP);
      b.I(d, "keypress", a.wP)
    }
    b.b(a.Wo, "click", uP)
  } else a.bt && b.I(a.Wo, "click", uP)
}
B.$ = function() {
  oP.J.$.call(this);
  xP(this);
  yP(this, "details", this.hA);
  yP(this, "delete", this.YK);
  if (this.hb()) {
    var a = Rq(this.A);
    this.C ? (yP(this, "eventColor", this.ZK), a.b(Ba, E(this.VK, this))) : a.b(Ba, E(this.UK, this))
  }
  a = Z(this);
  this.C && a.I(this.o.ra, "beforehide", this.WK);
  var b = yo(this.A);
  Xd(a, b, "m", this.XK, p, this);
  if (a = T(this.oa("location-label"))) {
    t: {
      if (xba && !(J && qc("9") && !qc("10") && Va.SVGElement && a instanceof Va.SVGElement) && (b = a.parentElement)) {
        a = b;
        break t
      }
      b = a.parentNode;
      a = Ri(b) ? b : n
    }
    a = Qi(a);
    for (b = 0; b < a.childNodes.length; b++) {
      var c = a.childNodes[b];
      if (3 == c.nodeType) {
        for (var d = c, c = c.data.split(" "), e = 0; e < c.length; e++) {
          var f = c[e];
          if (24 < f.length) {
            for (var h = [], l = 0, q = 24; q < f.length;) h.push(f.substring(l, q)), l = q, q += 24;
            h.push(f.substring(l));
            c[e] = h.join(String.fromCharCode(8203))
          }
        }
        d.data = c.join(" ")
      }
    }
  }
};
B.UK = function() {
  var a = T(this.getId() + "inlineEventColor");
  a && zP(this).render(a)
};
B.VK = function() {
  var a = cu("eb-popup", this.G());
  a && (zP(this).render(a), a = new kx(a), hx(a), gx(a, m), a.setVisible(p), BG(a), AG(a, new RH(this.b.G(this.getId() + "eventColor"), 5)), a.Ua(), zG(a, 2, -5), this.W = a)
};

function zP(a) {
  var b = ji(a.event);
  a.H = new ez(b ? b : "none");
  b = new AP(a.F, a.H, a.C ? "Choose an event color:" : t, E(a.UC, a), a.C ? k : a.oa("eventColor-label"));
  return a.O = b
}
function yP(a, b, c) {
  (b = a.b.G(a.getId() + b)) && Ku(Z(a), b, jA, c)
}
B.uu = function() {
  var a = Hj(this.event.getTitle()),
      b = nm(Nj(this.event)),
      c = a + b;
  500 < c.length && (c = '<div class="eb-title-big">' + c + "</div>");
  a = t;
  this.C && this.hb() && (b = (a = ji(this.event)) ? "eb-rb-color" : "eb-rb-default", this.Pa() || (b += " ui-disabled"), a = jm(kja, {
    id: this.getId(),
    eventColorClass: b,
    color: a || this.F.b.b,
    borderColor: a || this.F.b.B
  }));
  var b = qi(this.F).F,
      d;
  d = this.event;
  var e = d.Fa(),
      f = d.Za();
  d.Db() && (e = e.va(), f = f.va());
  d.Yf() && (f = e);
  d = Rv(e, f);
  return jm(jja, {
    eventColorElement: a,
    titleColor: b,
    title: c,
    date: d
  })
};
B.YA = y(t);

function rP(a) {
  var b = hI(a.event);
  if (!vG(b)) return t;
  var c = 3 == uD(b) && iI(Sh(a.A), a.event),
      d = b.getUrl(a.event);
  if (!d || c) return t;
  var e;
  switch (uD(b)) {
  case 2:
    e = "VC bridge " + b.o.get();
    break;
  case 1:
  case 3:
    e = a.Z.render(mP, {
      xo: 3 == uD(b),
      yo: nP(b)
    });
    break;
  default:
    uD(b)
  }
  b = jm(pja, {
    id: a.getId(),
    href: d,
    label: e
  });
  return tP(a, "Video call", b, "rtc")
}

function tja(a) {
  var b = Sh(a.A);
  if (a.event.mc == b && a.event.Aa() == b && a.event.mc == a.event.Bc) b = n;
  else
  var b = a.event,
      c = b.mc,
      d = SH(c),
      b = !d || b.oc() ? n : xH(d, c);
  return b ? tP(a, "Calendar", b, "owner") : t
}
function rja(a) {
  var b = Sh(a.A),
      c = a.event.mc;
  if (b == c && b == a.event.Bc && b == a.event.Aa()) return t;
  b = BP(a, c, m);
  return b.xh && TG(b.xh) ? t : tP(a, "Calendar", om(b.Xi), "owner")
}

function uja(a) {
  var b;
  b = a.event;
  var c = b.mc,
      d = b.Bc,
      e = SH(d);
  b = d && e && d != c && !b.oc() ? xH(e, d) : n;
  return !b || Oj(a.event, 4194304) ? t : tP(a, "Created by", b, "creator")
}
function sja(a) {
  var b = a.event.Bc;
  if (b == a.event.mc || Oj(a.event, 4194304)) return t;
  b = BP(a, b, p);
  return tP(a, "Created by", om(b.Xi), "creator")
}

function vja(a) {
  if (0 < a.event.o && !a.event.Ge() && !Oj(a.event, 4194304)) {
    for (var b = [], c = a.event, d = {
      0: [],
      1: [],
      2: [],
      3: []
    }, e = {
      0: [],
      1: [],
      2: [],
      3: []
    }, f = [], h = [], l = [], q = n, r = ig.M(), s = jg(r, Sh(R())), u = 0, x = Un(c), z = 0; z < x.length; z++) {
      var A = x[z],
          G = Vn(c, A),
          M = G.eb;
      if (4 != M && 6 != M && -1 != M) {
        var N = jg(r, A);
        if (N) {
          var X = N.Ma(),
              $ = G.Je || X;
          if ($ && (X && (G = G.pi, s && X == s.Ma() ? q = [A, $, M, X, G] : 103 == N.Bb() && 1 != M ? l.push([A, $, M, X, G]) : 100 != N.Bb() ? h.push([A, $, M, X, G]) : 5 == M ? f.push([A, $, M, X, G]) : G ? e[M].push([A, $, M, X, G]) : d[M].push([A, $, M, X, G]), u++), 10 < u)) break
        }
      }
    }
    c = l;
    10 > c.length && (c = c.concat(d[1], d[2], d[3], d[0]));
    10 > c.length && (c = c.concat(e[1], e[2], e[3], e[0]));
    10 > c.length && (c = c.concat(h));
    10 > c.length && (c = c.concat(f));
    10 > c.length && q != n && c.push(q);
    d = [];
    z = 0;
    for (e = Math.min(c.length, 10); z < e; ++z) G = c[z], A = G[0], f = G[1], M = G[2], G = G[4], d.push(sga(M, f, A, G));
    b.push(d.join(", "));
    z = a.event.o - c.length;
    0 < z && b.push("&nbsp;+&nbsp;", z);
    return tP(a, "Who", b.join(t), "attendees")
  }
  return t
}

function sP(a) {
  return !a.C && a.hb() ? tP(a, "Color", '<div id="' + a.getId() + 'inlineEventColor"></div>', "eventColor") : t
}
B.YK = function() {
  this.Pa() && FG(this.event.getId())
};
B.ZK = function() {
  this.Pa() && this.W && !Oj(this.event, 64) && this.W.setVisible(m)
};
B.KO = function() {
  CP(this);
  this.o.Ka()
};
B.HO = function() {
  this.iE()
};
B.wP = function(a) {
  !this.Pa() || 13 != a.keyCode && 3 != a.keyCode || (this.qi.set(this.oh.o.Ca()), setTimeout(E(this.iE, this), 0))
};
B.iE = function() {
  DP(this) ? this.UC() : (CP(this), this.o.Ka())
};
B.UC = function() {
  if (this.Pa()) {
    this.C && (this.zn = m, this.Ni && !this.Nm && yG(this.o));
    var a = E(this.WR, this),
        b = E(this.$B, this),
        c = this.C && DP(this);
    if (!this.B && c) {
      var c = this.event.Aa(),
          d = jg(ig.M(), c);
      d && (c = Kf(d));
      kz(c, F(a, "ONE"), b)
    } else Wj(this.event) ? jz(c, m, "Any changes made to other events will be kept.", a, b) : a("ONE")
  }
};
B.$B = function() {
  this.C && this.zn && (this.zn = p, this.Ni && !this.Nm && EP(this));
  this.O && this.O.qD()
};
B.WR = function(a) {
  a = E(this.$S, this, a);
  var b = E(this.$B, this),
      c;
  t: {
    c = ig.M();
    for (var d = Sh(this.A), e = Un(this.event), f = 0; f < e.length; f++) {
      var h = e[f];
      if (h != d && (h = jg(c, h), !h || !h.Mc())) {
        c = m;
        break t
      }
    }
    c = p
  }
  d = this.C && DP(this);this.B && d && c ? (e = Nu(Rh(this.A)), FP(p, p, c, d, a, b, e)) : a(p)
};
B.$S = function(a, b) {
  var c = this.qi.get(),
      d = I(c);
  DI(this.event.getId(), d);
  this.B ? b ? ep("bubble_edit_notify_yes") : ep("bubble_edit_notify_no") : ep("bubble_edit_override");
  ep("bubble_edit");
  d = [];
  b && GP(d);
  "ONE" != a && d.push("scp", a);
  this.qi && this.qi.Ba() && d.push("text", c);
  this.H && this.H.Ba() && d.push("pprop", "eventColor:" + this.H.get());
  mz(this.event, d);
  this.C && (this.zn = p, CP(this), this.o.Ka())
};
B.xP = function() {
  if (this.Pa()) {
    if (!this.Ni && this.xa) {
      this.Ni = m;
      EP(this);
      var a = this.o;
      U(a.o.G("bubbleClose" + a.b), p);
      var b = Oy.M(),
          a = new Ky("Discard changes", b),
          b = new Ky("Save", b),
          c = this.getId();
      Mt("eb-footer", this.G())[0].innerHTML = jm(qP, {
        id: c,
        left: t,
        sep: t,
        "delete": t,
        right: t
      });
      a.render(T(c + "footerleft"));
      b.render(T(c + "footerright"));
      en(a.G(), "eb-discard");
      en(b.G(), "eb-save");
      c = Z(this);
      c.I(a, "action", this.KO);
      c.I(b, "action", this.HO)
    }
    this.o.Ua()
  }
};

function CP(a) {
  a.Ni && (a.Ni = p, a.Nm = p, yG(a.o), a = a.o, U(a.o.G("bubbleClose" + a.b), m))
}
function EP(a) {
  var b = Jd(a.A, 9);
  Ofa(a.o, F(function(a, b, e) {
    e ? a.Ii.add(b + t) : a.Ii.remove(b + t)
  }, b))
}
function DP(a) {
  var b = a.oh.o;
  return !!b && b.Ca() != a.qi.Qb()
}
B.WK = function() {
  if (this.Nm || this.zn) return p;
  if (!this.Ni) return m;
  if (DP(this)) {
    this.Nm = m;
    var a = this.o;
    a.An && kn(a.sj, "opaque", m);
    return p
  }
  CP(this);
  return m
};

function tP(a, b, c, d) {
  if (b) {
    var e = lja;
    return jm(e, {
      key: I(b),
      value: c,
      labelId: a.oa(d + "-label")
    })
  }
  e = mja;
  return jm(e, {
    value: c
  })
}
B.Pa = function() {
  return zo(this.A)
};
B.XK = function(a) {
  var b = this.b;
  a = a.Pa;
  HP(b.G(this.getId() + "delete"), a);
  HP(b.G(this.getId() + "mapLink"), a);
  HP(b.G(this.getId() + "copy"), a);
  HP(b.G(this.getId() + "restore"), a);
  Rr(Mj.M(), this.event.Aa()) || HP(b.G(this.getId() + "details"), a)
};

function HP(a, b) {
  a && (b ? gn(a, "ui-disabled") : en(a, "ui-disabled"))
}

function BP(a, b, c) {
  var d = ig.M(),
      e = ci.M();
  c = c ? e.get(b) : n;
  d = jg(d, b);
  a = Vn(a.event, b) || n;
  t: {
    for (var e = [c && c.Pb, d && d.tc(), a && a.Je, d && d.Ma()], f = n, h = 0; h < e.length; ++h) {
      var l = e[h];
      if (l) {
        if (-1 == l.indexOf("@")) {
          e = l;
          break t
        }
        f || (f = l)
      }
    }
    e = f || b
  }
  e = '"' == e.charAt(0) ? e.slice(1, e.indexOf('"', 1)) : -1 != e.indexOf(" <") ? e.slice(0, e.indexOf(" <")) : e;
  return {
    uid: b,
    nc: c,
    xh: d,
    fw: a,
    Xi: e,
    Tv: 255
  }
}

function wja(a, b, c) {
  var d = b.uid,
      e = b.fw;
  b = b.xh;
  var f = e.eb,
      e = e.pi;
  if (4 == f || 6 == f || -1 == f || !b) return 255;
  if (d == c) return 13;
  if (d == a.event.Aa()) return 12;
  if (100 != b.b) return 9;
  switch (f) {
  case 1:
    return e ? 5 : 1;
  case 2:
    return e ? 6 : 2;
  case 3:
    return e ? 7 : 3;
  case 0:
    return e ? 8 : 4;
  default:
    return 255
  }
}
function xja(a, b) {
  var c = b.fw,
      d = I(b.Xi),
      c = IP(d, c);
  return a = sb(a, d) ? a.replace(d, c) : c + (a ? ", " + a : t)
}

function IP(a, b) {
  if (!b) return a;
  var c = b.eb,
      d = b.pi;
  2 === c && (a = "<s>" + a + "</s>");
  d && (a = "(" + a + ")");
  1 !== c && (a = "<font color=gray>" + a + "</font>");
  return a
}
function yja(a) {
  for (var b = Math.min(a.length, 10), c = [], d = 0; d < b; ++d) {
    var e = a[d],
        f;
    var h = e.nc,
        l = e.xh;
    f = e.Xi;
    l && 100 == l.b || h && 0 == h.type ? (h = om(f.split(/\s+/)[0]), f = lH(f), l = lH(l.Ma()), f = '<span onmouseover="' + jH(hH) + "(this, event, '" + f + "', '" + l + '\')" onmouseout="' + jH(fH) + '()">' + h + "</span>") : f = om(f);
    c.push(IP(f, e.fw))
  }
  return c.join(", ")
}

function qja(a) {
  for (var b = Sh(a.A), c = a.event.Tc || t, d = om(c), e = a.event.o, f = 0, h = [], l = Un(a.event), q = 0; q < l.length; q++) {
    var r = BP(a, l[q]),
        s = wja(a, r, b);
    255 != s && (r.xh.Mc() ? (d = xja(d, r), ++f) : (r.Tv = s, h.push(r)))
  }
  b = t;
  e && !Oj(a.event, 4194304) && (h.sort(function(a, b) {
    return a.Tv - b.Tv
  }), b = yja(h), e = e - h.length - f, 0 < e && (b += "&nbsp;+&nbsp;" + e), b = tP(a, "Who", b, "attendees"));
  d && (a.Pa() && (d += jm(pP, {
    id: a.getId(),
    href: I(tI(c))
  })), d = tP(a, "Where", d, "location"));
  return [d, b]
};

function cQ(a, b) {
  var c = XI(),
      c = c.replace(/\/(hosted|(a))\/[^/]+/, t);
  return window.location.protocol + "//" + c + "selfsched?" + ("sstoken=" + encodeURIComponent(a)) + (b ? "&availstart=" + b : t)
};

function dQ(a, b, c) {
  oP.call(this, a, b, c)
}
H(dQ, oP);
var zja = new V('<a href="${bookApptLink}" target="_blank"class="eb-action to-disable lk">${bookApptText} &raquo;</a>'),
    Aja = new V('<div class="eb-slot-type">${slotType}</div>');
B = dQ.prototype;
B.$ = function() {
  dQ.J.$.call(this);
  en(this.G(), "eb-appt")
};
B.uu = function() {
  return [dQ.J.uu.call(this), Bja(this)].join(t)
};

function Bja(a) {
  a = a.event.C.SS_slotsize;
  return jm(Aja, {
    slotType: -1 == a ? "Offered as a single appointment" : t + a + " min appointment slots"
  })
}
B.XA = function() {
  if (this.K.hb(this.event)) return t;
  var a;
  if (zo(this.A)) if (a = this.event.Aa(), (a = ci.M().get(a)) && a.Z) {
    var b = this.event.Fa().va().toString();
    a = cQ(a.Z, b)
  } else a = n;
  else a = n;
  return a ? jm(zja, {
    bookApptLink: I(a),
    bookApptText: "Book an appointment slot"
  }) : t
};
B.hA = function() {
  (this.Pa() || Rr(Mj.M(), this.event.Aa())) && CC(this.event)
};

function CC(a) {
  var b = R();
  Rq(b).b(Ba, function() {
    eQ(a.getId())
  })
}
B.$A = function() {
  return this.B ? "Delete" : "Remove from this calendar"
};
B.aB = y("Edit details");

function fQ(a, b, c) {
  oP.call(this, a, b, c)
}
H(fQ, oP);
var gQ = new V('<a id="${id}accept" href="javascript:void(0);" class="eb-action-link lk">Yes</a>'),
    hQ = new V('<a id="${id}tentative" href="javascript:void(0);"class="eb-action-link lk">Maybe</a>'),
    iQ = new V('<a id="${id}decline" href="javascript:void(0);" class="eb-action-link lk">No</a>'),
    Cja = new V('<a id="${id}restore" href="javascript:void(0);" class="eb-action-link lk">'),
    Dja = new V('<a id="${id}copy" href="javascript:void(0);" class="eb-action-link lk">copy to my calendar</a>');
B = fQ.prototype;
B.$ = function() {
  fQ.J.$.call(this);
  this.getId();
  yP(this, "accept", E(this.bx, this, 1));
  yP(this, "tentative", E(this.bx, this, 3));
  yP(this, "decline", E(this.bx, this, 2));
  yP(this, "copy", this.aX);
  yP(this, "restore", this.bX)
};
B.XA = function() {
  var a;
  if (LG(this.event)) a = Eja(this);
  else if (Oj(this.event, 64) || !this.event.Yd()) a = t;
  else {
    a = this.getId();
    var b = this.event.Dc;
    a = [1 == b ? '<span class="eb-resp-sel">Yes</span>' : jm(gQ, {
      id: a
    }), 3 == b ? '<span class="eb-resp-sel">Maybe</span>' : jm(hQ, {
      id: a
    }), 2 == b ? '<span class="eb-resp-sel">No</span>' : jm(iQ, {
      id: a
    })].join(" - ")
  }
  a ? a = ["<span class=eb-going>Going?</span>", a].join(t) : (a = Sh(R()), a = this.Pa() && this.event.Aa() != a && !Vn(this.event, a) ? jm(Dja, {
    id: this.getId()
  }) : t);
  return a
};

function Eja(a) {
  if (Oj(a.event, 64) || !a.event.Yd()) return t;
  var b = a.getId();
  a = a.event.Dc;
  if (0 == a) return [jm(gQ, {
    id: b
  }), jm(hQ, {
    id: b
  }), jm(iQ, {
    id: b
  })].join(" - ");
  switch (a) {
  case 1:
    return '<span class="eb-resp-sel">Yes</span>';
  case 3:
    return '<span class="eb-resp-sel">Maybe</span>';
  case 2:
    return '<span class="eb-resp-sel">No</span>';
  default:
    return t
  }
}
B.YA = function() {
  return this.K.hb(this.event) && Oj(this.event, 131072) ? "You have made changes to the details of this event.<br>" + (this.Pa() ? t + jm(Cja, {
    id: this.getId()
  }) + "Restore</a> original event details" : t) : t
};
B.$A = function() {
  var a = LG(this.event) ? "Cancel appointment" : "Remove";
  return this.B && Oj(this.event, 2097152) ? "Delete" : a
};
B.aB = y("Edit event");
B.hA = function() {
  (this.Pa() || Rr(Mj.M(), this.event.Aa())) && UF(this.event.getId(), this.B)
};
B.bx = function(a) {
  fu(this.event.getId(), a)
};
B.aX = function() {
  this.Pa() && Fja(this.event.getId())
};
B.bX = function() {
  this.Pa() && UF(this.event.getId(), m, m)
};

function Fja(a) {
  fp().fb = "ef_copy_from_bubble";
  var b = R();
  Rq(b).b(Ba, function() {
    jQ(p, ru(Yp, a).Aa(), a, p)
  })
}
function UF(a, b, c) {
  var d = fp();
  d.fb = "ef_edit_from_bubble";
  var e, f = Vq(R());
  f && (e = f.o(f.b().uv));
  f = R();
  Rq(f).b(Ba, function() {
    d.b("ef_edit_from_bubble.ll_ef");
    DC(a, b, c, k, d, e)
  })
};
var kQ, lQ, mQ = [1, 2, 3],
    nQ = [1, 3];

function oQ() {
  return kQ || (kQ = {
    1: "Email",
    2: "SMS",
    3: "Pop-up"
  })
}
var pQ = [60, 3600, 86400, 604800];
var qQ, rQ, sQ, tQ, uQ, vQ, wQ, xQ, yQ, zQ, AQ, BQ, CQ, DQ, EQ, FQ;
qQ = function() {
  var a = rQ || window;
  a.iframes.setHandler("shareboxDialog", {
    onOpen: function(a) {
      a.openInto(a.getOpenParams().element, {
        "class": "abc",
        scrolling: "auto",
        width: "100%",
        height: "100%",
        allowtransparency: "true"
      });
      var c = a.getIframeEl();
      0 < navigator.userAgent.indexOf("MSIE") && (c.style.visibility = "hidden", c.onreadystatechange = function() {
        c.style.visibility = t;
        delete c.onreadystatechange
      });
      c.focus();
      return a
    },
    onReady: function(b) {
      window.setTimeout(function() {
        sQ = b;
        tQ && b.setPrefill(tQ);
        b.setParamBag(uQ);
        vQ && (wQ = a.document.documentElement.style.overflow, a.document.documentElement.style.overflow = "hidden");
        xQ && xQ({})
      }, 0)
    },
    onClose: function(b, c) {
      c && (c.loggedOut && yQ && yQ(), c.footerCallback && zQ && zQ());
      a.document.body.removeChild(a.document.getElementById("googleShareboxIframeDiv"));
      vQ && (a.document.documentElement.style.overflow = wQ);
      AQ.b = p;
      BQ && BQ(c)
    }
  })
};
CQ = function() {
  if (!sQ) {
    var a = rQ || window;
    a.document.body.removeChild(a.document.getElementById("googleShareboxIframeDiv"));
    AQ.b = p;
    DQ && DQ({})
  }
};
AQ = function(a, b) {
  if (!AQ.b) {
    tQ = a;
    b && (xQ = b.onShareOpened, BQ = b.onShareClosed, DQ = b.onShareTimedOut, yQ = b.onNotLoggedInForGooglePlus, zQ = b.footerCallback, EQ = b.sessionIndex, FQ = b.socialHost, rQ = b.window, b.window = n, vQ = b.hideDoubleScrollBar, uQ = b);
    var c = rQ || window,
        d = c.document;
    EQ = EQ || "0";
    FQ = FQ || "https://plus.google.com";
    qQ();
    AQ.b = m;
    var e = FQ + "/u/" + EQ + "/_/sharebox/dialog",
        f = {};
    f.claimedOrigin = d.location.protocol + "//" + d.location.host;
    var h = p;
    b && (b.hl && (f.hl = b.hl), b.sourceForLogging && (f.source = b.sourceForLogging), b.dialogTitle && (f.dialogTitle = b.dialogTitle), b.dialogSubtitle && (f.dialogSubtitle = b.dialogSubtitle), b.shareButtonText && (f.shareButtonText = b.shareButtonText), b.cancelButtonText && (f.cancelButtonText = b.cancelButtonText), b.showIcons && (f.showIcons = "true"), b.editorText && (f.editorText = b.editorText), b.editorHelperText && (f.editorHelperText = b.editorHelperText), b.segments && (f.segments = c.JSON.stringify(b.segments)), b.birthday && (f.birthday = b.birthday), b.secb && (f.secb = b.secb), b.recipients && (f.rcpt = b.recipients.join(",")), h = !! b.updateMetadata, b.footer && (f.footer = b.footer));
    var l = n;
    if (!h) {
      var q;
      if (a && a.items && 1 == a.items.length && a.items[0].properties) {
        var h = a.items[0].properties,
            r = p,
            s;
        for (s in h) if ("url" != s) {
          r = m;
          break
        }!r && h.url && h.url[0] && (q = h.url[0])
      }
      q ? (f.url = q, l = "url") : a && (f.md = c.gadgets.json.stringify(a), l = "md")
    }
    l && (f.prm = l);
    f.sts = (+new Date).toString(36);
    750 > d.documentElement.clientHeight && (f.susp = m);
    d.documentMode && (f.hostiemode = d.documentMode);
    f.wpp = "1";
    l = d.createElement("div");
    l.id = "googleShareboxIframeDiv";
    l.style.cssText = "left:0;top:0;width:100%;height:100%;position:fixed;z-index:99999";
    d.body.appendChild(l);
    c.iframes.open(e, {
      element: l,
      allowPost: m,
      style: "shareboxDialog"
    }, f, {});
    var u = d.createElement("div");
    u.style.cssText = "left:0;top:0;width:100%;height:100%;position:absolute;background:#fff;opacity:0;transition:opacity 0.25s;-webkit-transition:opacity 0.25s;filter:alpha(opacity=75);z-index:-1";
    l.appendChild(u);
    window.setTimeout(function() {
      u.style.opacity = ".75"
    }, 0);
    window.setTimeout(CQ, 15E3)
  }
};
AQ.b = p;

function GQ(a) {
  return t + (a.pB ? ZH(a.pB) : ZH(a.Xi))
}
function HQ() {
  return t + "Say happy birthday &raquo;"
};

function IQ(a, b, c) {
  kP.call(this, a, b, c);
  this.H = wk(xk(a));
  c && (this.Z = c.Ob)
}
H(IQ, kP);
var JQ = {
  l_: "fb",
  gB: "fb-cont",
  iB: "fb-header",
  jB: "fb-bkg",
  hB: "fb-footer",
  aP: "fb-rmd",
  cP: "fb-rmdh",
  dP: "fb-rmdp",
  eP: "fb-ppt",
  bP: "fb-rmt",
  fP: "fb-time",
  xu: "fb-title"
};
B = IQ.prototype;
B.L = function() {
  this.o && (gn(this.o.G(), "fb"), rx(this.o, this.Z));
  this.B && (this.B.setVisible(p), this.B.aa(), this.B = n);
  IQ.J.L.call(this)
};
B.rb = y(p);
B.$ = function() {
  IQ.J.$.call(this);
  this.o && (en(this.o.G(), "fb"), rx(this.o, 500));
  var a = Z(this),
      b = this.Qa("fb-rmt");
  this.Qt() && b && Ku(a, b, jA, this.NS);
  this.o && a.I(this.o.ra, "beforehide", this.uB)
};
B.Qt = function() {
  return this.event.Yd()
};
B.uB = function(a) {
  return (a = a.target) && this.B && (Bv(a, n, "fb-rmt") || Bv(a, n, "goog-menu")) ? p : m
};
B.mS = function() {
  setTimeout(E(this.cD, this), 0)
};
B.NS = function() {
  if (this.F && !this.F.isDisposed() && (this.cD(), this.removeChild(this.F), this.F.aa(), this.F = n, this.B && this.B.Da())) {
    this.B.setVisible(p);
    return
  }
  var a = this.Qa("fb-rmdp"),
      b = KQ(LQ(this.A)),
      b = new xD(Gja(this), m, b);
  this.F = new MQ(this.A, b);
  this.ha(this.F);
  this.F.render(a);
  this.B ? this.B.setVisible(m) : (a = new kx(a), hx(a), gx(a, m), BG(a), AG(a, new RH(this.Qa("fb-rmdh"), 5)), zG(a, 2, -5), a.setVisible(m), this.B = a, a = Z(this), a.I(this.B, "beforehide", this.uB), a.I(this.B, "hide", this.mS))
};
B.cD = function() {
  this.F && this.F.C().Ba() && Rq(this.A).b(Ba, E(this.FP, this))
};
B.FP = function() {
  var a = this.F.C(),
      b = [];
  b.push("sf", m, "output", "js", "eid", this.event.getId(), "src", this.event.Aa(), "action", "EDIT");
  NQ(a, b);
  zo(this.A) && Af(this.A).send("event", b, 22, D, k, k, k, 2)
};
B.QE = y(m);

function Gja(a) {
  var b = oG(Vj(a.A), a.event),
      c = [],
      d = E(a.QE, a);
  b && Bb(b, function(a) {
    d(a) && c.push(new mD(a.wb(), a.uf))
  });
  return c
};

function OQ(a, b, c) {
  IQ.call(this, a, b, c)
}
H(OQ, IQ);
var Hja = {
  rZ: "bbs",
  aN: "bb-cont-nophoto",
  bN: "bb-cont-photo",
  qB: "bb-links",
  cN: "bb-footer-mainmsg",
  rB: "bb-send-greeting",
  qZ: "bb-profile-link"
};
OQ.prototype.ia = function() {
  OQ.J.ia.call(this);
  var a = TI(uk(this.A).Zg()),
      b = Hg(a, this.event.Fa()),
      b = 0 <= b && 5 > b,
      c = yv(this.event.getTitle()),
      d = this.H.Op(this.event.Fa()),
      e = this.event.b["goo.backgroundImageUrl"],
      f = this.event.b["goo.contactsOverridePhotoUrl"] || this.event.b["goo.contactsPhotoUrl"],
      a = this.event.Fa().cb() == a.cb(),
      h = this.event.b["goo.contactsFullName"],
      l = this.event.b["goo.contactsGivenName"],
      q;
  (q = PQ(this)) ? q = vp(this.A).B + ("u/" + (Dv() || 0) + "/") + q : (q = this.event.b["goo.contactsProfileUrl"], Dv() && q && -1 != q.indexOf("google.com/contacts") && (q = q.replace("/contacts/#contact", "/contacts/u/" + Dv() + "/#contact")));
  d = {
    Tm: JQ,
    $i: Hja,
    Hc: Yga,
    title: c,
    Y: d,
    sB: e,
    Hu: f,
    tB: b,
    dN: a,
    Xi: h,
    pB: l,
    Ok: q,
    email: this.event.b["goo.contactsEmail"],
    type: this.event.b["goo.contactsEventType"],
    Gu: this.event.b["goo.contactsCustomEventType"],
    eN: QQ(this)
  };
  b = this.G();
  c = '<div class="' + KI(d.Tm.iB) + '">';
  e = '<div class="' + KI(d.Tm.jB) + '" style="' + (d.sB ? "background-image: url(" + KI(II(d.sB)) + ")" : t) + '"></div><div class="' + KI(d.Tm.gB) + "  " + (d.Hu ? KI(d.$i.bN) : KI(d.$i.aN)) + '">' + (d.Hu ? (d.Ok ? '<a href="' + KI(II(d.Ok)) + '" target="_blank">' : t) + '<img src="' + KI(II(d.Hu)) + '" title="' + KI(d.Xi) + '">' + (d.Ok ? "</a>" : t) : '<div class="' + KI(d.Tm.xu) + '  single-line-ellipsis">' + (d.Ok ? '<a href="' + KI(II(d.Ok)) + '" target="_blank">' : t) + ZH(d.title) + (d.Ok ? "</a>" : t) + "</div>" + ZH(d.Y)) + "</div>";
  c = c + e + '</div><div class="' + KI(d.Tm.hB) + '">';
  e = '<span class="' + KI(d.$i.cN) + '">';
  if (d.dN) switch (f = t, d.type) {
  case d.Hc.Sm:
    a = GQ(d) + "'s birthday is today!";
    f += a;
    break;
  case d.Hc.zq:
    f += "Your birthday is today!";
    break;
  case d.Hc.Fu:
    a = GQ(d) + "'s anniversary is today!";
    f += a;
    break;
  case d.Hc.yq:
    a = GQ(d) + ("'s " + (ZH(d.Gu) + " is today!"));
    f += a;
    break;
  default:
    a = GQ(d) + "'s special day is today!", f += a
  } else if (d.tB) switch (f = t, d.type) {
  case d.Hc.Sm:
    a = GQ(d) + ("'s birthday was " + ZH(d.Y));
    f += a;
    break;
  case d.Hc.zq:
    a = "Your birthday was " + ZH(d.Y);
    f += a;
    break;
  case d.Hc.Fu:
    a = GQ(d) + ("'s anniversary was " + ZH(d.Y));
    f += a;
    break;
  case d.Hc.yq:
    a = GQ(d) + ("'s " + (ZH(d.Gu) + (" was " + ZH(d.Y))));
    f += a;
    break;
  default:
    a = GQ(d) + ("'s special day was " + ZH(d.Y)), f += a
  } else
  switch (f = t, d.type) {
  case d.Hc.Sm:
    a = GQ(d) + ("'s birthday is " + ZH(d.Y));
    f += a;
    break;
  case d.Hc.zq:
    a = "Your birthday is " + ZH(d.Y);
    f += a;
    break;
  case d.Hc.Fu:
    a = GQ(d) + ("'s anniversary is " + ZH(d.Y));
    f += a;
    break;
  case d.Hc.yq:
    a = GQ(d) + ("'s " + (ZH(d.Gu) + (" is " + ZH(d.Y))));
    f += a;
    break;
  default:
    a = GQ(d) + ("'s special day is " + ZH(d.Y)), f += a
  }
  e = e + f + "</span>";
  d.type != d.Hc.zq ? d.tB ? (d.type == d.Hc.Sm && d.eN ? d = '<span class="' + KI(d.$i.rB) + '"><span class="' + KI(d.$i.qB) + '">' + HQ() + "</span></span>" : d.email ? (f = '<span class="' + KI(d.$i.rB) + '"><a href="mailto:' + KI(d.email) + '" class="' + KI(d.$i.qB) + '">', d = d.type == d.Hc.Sm ? HQ() : t + "Send a greeting &raquo;", d = f + d + "</a></span>") : d = t, d = t + d) : d = t : d = t;
  b.innerHTML = c + (e + d) + "</div>";
  en(this.G(), "bbs")
};
OQ.prototype.$ = function() {
  OQ.J.$.call(this);
  var a = this.Qa("bb-links");
  a && QQ(this) && "BIRTHDAY" == this.event.b["goo.contactsEventType"] && Ku(Z(this), a, jA, this.O)
};
OQ.prototype.Qt = y(p);
OQ.prototype.O = function() {
  var a = {
    sessionIndex: Dv(),
    socialHost: vp(this.A).B,
    sourceForLogging: "sharebox:calendar:birthdays",
    showIcons: m,
    birthday: PQ(this),
    birthdayName: this.event.b["goo.contactsGivenName"] || this.event.b["goo.contactsFullName"],
    editorHelperText: "Share your birthday message"
  };
  AQ({}, a)
};

function PQ(a) {
  return a.event.b["goo.contactsProfileId"]
}
function QQ(a) {
  return !!PQ(a) && Td(a.A).isEnabled(77) && Td(a.A).isEnabled(58)
};

function Ija(a) {
  this.b = a
}
function LQ(a) {
  a = S(a);
  return new Ija(a)
}
function KQ(a) {
  return Yg(a.b, "smsVerifiedFlag", "false")
};

function RQ(a, b) {
  a = a || {};
  var c = '<div class="goog-inline-block per-ru">' + hO({
    bc: "per-button per-du",
    style: 2,
    content: Om('<div><div class="goog-inline-block per-label">' + SQ(b) + '</div><div class="goog-inline-block per-dropdown"></div></div>')
  }) + '</div><div class="goog-inline-block per-ry">',
      d;
  if (b.Pw) {
    d = t;
    var e = NG(new Xk("{VIEWER_GENDER,select,male{You went}female{You went}other{You went}}"), {
      VIEWER_GENDER: b.Nf
    })
  } else d = t, e = NG(new Xk("{VIEWER_GENDER,select,male{Going}female{Going}other{Going}}"), {
    VIEWER_GENDER: b.Nf
  });
  d = Nm(d + e);
  d = Nm(d);
  d = t + hO({
    bc: "per-button per-dy",
    style: 2,
    content: Om('<div><div class="goog-inline-block per-label">' + d + '</div><div class="goog-inline-block per-dropdown"></div></div>')
  });
  c = c + d + '</div><div class="goog-inline-block per-rm">';
  d = t + hO({
    bc: "per-button per-dm",
    style: 2,
    content: Om('<div><div class="goog-inline-block per-label">' + Nm(TQ(b)) + '</div><div class="goog-inline-block per-dropdown"></div></div>')
  });
  c = c + d + '</div><div class="goog-inline-block per-rn">';
  b.Pw ? (d = t, e = NG(new Xk("{VIEWER_GENDER,select,male{Didn't go}female{Didn't go}other{Didn't go}}"), {
    VIEWER_GENDER: b.Nf
  })) : (d = t, e = NG(new Xk("{VIEWER_GENDER,select,male{Not going}female{Not going}other{Not going}}"), {
    VIEWER_GENDER: b.Nf
  }));
  d = Nm(d + e);
  d = Nm(d);
  d = t + hO({
    bc: "per-button per-dn",
    style: 2,
    content: Om('<div><div class="goog-inline-block per-label">' + d + '</div><div class="goog-inline-block per-dropdown"></div></div>')
  });
  c = c + d + "</div>";
  a.RB ? (d = t, e = NG(new Xk("{VIEWER_GENDER,select,male{Remove}female{Remove}other{Remove}}"), {
    VIEWER_GENDER: b.Nf
  }), d = '<div class="goog-inline-block per-cr">' + ('<span class="per-ar" tabindex=0>' + (d + e) + "</span>") + "</div>") : d = t;
  return c + d
}
function Jja(a, b, c) {
  return '<div class="goog-inline-block per-label">' + SQ(c) + "</div>"
}
function Kja(a, b, c) {
  a = t;
  c = NG(new Xk("{VIEWER_GENDER,select,male{Yes}female{Yes}other{Yes}}"), {
    VIEWER_GENDER: c.Nf
  });
  return '<div class="goog-inline-block per-label">' + (a + c) + "</div>"
}
function Lja(a, b, c) {
  return '<div class="goog-inline-block per-label">' + TQ(c) + "</div>"
}

function Mja(a, b, c) {
  a = t;
  c = NG(new Xk("{VIEWER_GENDER,select,male{No}female{No}other{No}}"), {
    VIEWER_GENDER: c.Nf
  });
  return '<div class="goog-inline-block per-label">' + (a + c) + "</div>"
}
function SQ(a) {
  if (a.Pw) {
    var b = t;
    a = NG(new Xk("{VIEWER_GENDER,select,male{Did you go?}female{Did you go?}other{Did you go?}}"), {
      VIEWER_GENDER: a.Nf
    })
  } else b = t, a = NG(new Xk("{VIEWER_GENDER,select,male{Are you going?}female{Are you going?}other{Are you going?}}"), {
    VIEWER_GENDER: a.Nf
  });
  a = Nm(b + a);
  return Nm(a)
}

function TQ(a) {
  var b = t;
  a = NG(new Xk("{VIEWER_GENDER,select,male{Maybe}female{Maybe}other{Maybe}}"), {
    VIEWER_GENDER: a.Nf
  });
  return Nm(b + a)
};

function UQ() {
  Y.call(this)
}
H(UQ, Y);

function VQ(a, b) {
  var c = lQ || (lQ = {
    60: "minutes",
    3600: "hours",
    86400: "days",
    604800: "weeks"
  });
  this.b = a;
  this.o = c;
  this.A = b
}
var WQ;

function XQ(a, b) {
  return b >= a.A && 2419200 >= b && 0 == b % 1
};

function YQ() {}
H(YQ, wy);
Xa(YQ);
B = YQ.prototype;
B.pd = function(a) {
  var b = py(this, a),
      b = a.b.U("div", {
      "class": "goog-inline-block " + b.join(" ")
    }, a.getContent());
  this.vb(b, a.ze());
  qy(this, a, b);
  return b
};
B.Wh = y("button");
B.fs = function(a) {
  return "DIV" == a.tagName
};
B.Tb = function(a, b) {
  nv(b, "goog-inline-block");
  return YQ.J.Tb.call(this, a, b)
};
B.Ca = y(t);
B.Oa = y("goog-flat-button");
xy("goog-flat-button", function() {
  return new Ky(n, YQ.M())
});

function ZQ() {}
H(ZQ, YQ);
Xa(ZQ);
ZQ.prototype.pd = function(a) {
  var b = py(this, a),
      b = a.b.U("div", {
      "class": "goog-inline-block " + b.join(" ")
    }, [$Q(this, a.getContent(), a.b), aR(this, a.b)]);
  this.vb(b, a.ze());
  qy(this, a, b);
  return b
};
ZQ.prototype.kd = function(a) {
  return a && a.firstChild
};
ZQ.prototype.Tb = function(a, b) {
  var c = Fu("*", "goog-menu", b)[0];
  if (c) {
    U(c, p);
    a.b.Sa().body.appendChild(c);
    var d = new qN;
    Px(d, c);
    a.yi(d)
  }
  Fu("*", this.Oa() + "-caption", b)[0] || b.appendChild($Q(this, b.childNodes, a.b));
  Fu("*", this.Oa() + "-dropdown", b)[0] || b.appendChild(aR(this, a.b));
  return ZQ.J.Tb.call(this, a, b)
};

function $Q(a, b, c) {
  return c.U("div", "goog-inline-block " + (a.Oa() + "-caption"), b)
}
function aR(a, b) {
  return b.U("div", {
    "class": "goog-inline-block " + (a.Oa() + "-dropdown"),
    "aria-hidden": m
  }, "\u00a0")
}
ZQ.prototype.Oa = y("goog-flat-menu-button");
xy("goog-flat-menu-button", function() {
  return new wN(n, n, ZQ.M())
});

function bR(a) {
  P.call(this);
  this.b = [];
  Nja(this, a)
}
H(bR, P);
B = bR.prototype;
B.Fg = n;

function Nja(a, b) {
  b && (Bb(b, function(a) {
    cR(a, p)
  }, a), Ev(a.b, b))
}
function dR(a, b, c) {
  b && (cR(b, p), Ov(a.b, c, 0, b))
}
B.removeItem = function(a) {
  a && Mb(this.b, a) && a == this.Fg && (this.Fg = n, this.P("select"))
};
B.qf = w("Fg");

function eR(a, b) {
  b != a.Fg && (cR(a.Fg, p), a.Fg = b, cR(b, m));
  a.P("select")
}
function fR(a) {
  var b = a.Fg;
  return b ? Ab(a.b, b) : -1
}
B.zi = function(a) {
  eR(this, this.b[a] || n)
};
B.clear = function() {
  Lb(this.b);
  this.Fg = n
};
B.L = function() {
  bR.J.L.call(this);
  delete this.b;
  this.Fg = n
};

function cR(a, b) {
  a && typeof a.Fl == Ea && a.Fl(b)
};

function gR(a, b, c, d, e) {
  wN.call(this, a, b, c, d, e || new oN("listbox"));
  this.O = this.getContent();
  this.ea = n;
  this.hx = "listbox"
}
H(gR, wN);
B = gR.prototype;
B.pb = n;
B.$ = function() {
  gR.J.$.call(this);
  hR(this);
  iR(this)
};
B.Ya = function(a) {
  gR.J.Ya.call(this, a);
  (a = this.jf()) ? (this.O = a, hR(this)) : this.qf() || this.zi(0)
};
B.L = function() {
  gR.J.L.call(this);
  this.pb && (this.pb.aa(), this.pb = n);
  this.O = n
};
B.Uv = function(a) {
  jR(this, a.target);
  gR.J.Uv.call(this, a);
  a.stopPropagation();
  this.P("action")
};
B.sX = function() {
  var a = this.qf();
  gR.J.$a.call(this, a && a.Ca());
  hR(this)
};
B.yi = function(a) {
  var b = gR.J.yi.call(this, a);
  a != b && (this.pb && this.pb.clear(), a && (this.pb ? Qx(a, function(a) {
    kR(a);
    var b = this.pb;
    dR(b, a, b.b.length)
  }, this) : lR(this, a)));
  return b
};
B.Gd = function(a) {
  kR(a);
  gR.J.Gd.call(this, a);
  if (this.pb) {
    var b = this.pb;
    dR(b, a, b.b.length)
  } else lR(this, zN(this));
  mR(this)
};
B.Iu = function(a, b) {
  kR(a);
  gR.J.Iu.call(this, a, b);
  this.pb ? dR(this.pb, a, b) : lR(this, zN(this))
};
B.removeItem = function(a) {
  gR.J.removeItem.call(this, a);
  this.pb && this.pb.removeItem(a)
};
B.bm = Qa(86);

function jR(a, b) {
  if (a.pb) {
    var c = a.qf();
    eR(a.pb, b);
    b != c && a.P(v)
  }
}
B.zi = function(a) {
  this.pb && jR(this, this.pb.b[a] || n)
};
B.$a = function(a) {
  if (a != n && this.pb) for (var b = 0, c; c = this.pb.b[b] || n; b++) if (c && typeof c.Ca == Ea && c.Ca() == a) {
    jR(this, c);
    return
  }
  jR(this, n)
};
B.Ca = function() {
  var a = this.qf();
  return a ? a.Ca() : n
};
B.qf = function() {
  return this.pb ? this.pb.qf() : n
};

function lR(a, b) {
  a.pb = new bR;
  b && Qx(b, function(a) {
    kR(a);
    var b = this.pb;
    dR(b, a, b.b.length)
  }, a);
  iR(a)
}
function iR(a) {
  a.pb && Z(a).I(a.pb, "select", a.sX)
}
function hR(a) {
  var b = a.qf();
  Ey(a, b ? b.jf() : a.O);
  var c = a.Gc().kd(a.G());
  c && a.b.HS(c) && (a.ea == n && (a.ea = BH(c, "label")), b = (b = b ? b.G() : n) ? BH(b, "label") : a.ea, Ej(c, "label", b), mR(a))
}

function mR(a) {
  var b = a.Gc();
  if (b && (b = b.kd(a.G()))) {
    var c = a.V;
    b.id || (b.id = Ze(Ye.M()));
    Dj(b, "option");
    Ej(c, "activedescendant", b.id);
    a.pb && (Ej(b, "setsize", a.pb.b.length), Ej(b, "posinset", 1 + fR(a.pb)))
  }
}
function kR(a) {
  a.hx = a instanceof lN ? "option" : "separator"
}
B.kc = function(a, b) {
  gR.J.kc.call(this, a, b);
  uy(this, 64) ? zN(this).Qe(this.pb ? fR(this.pb) : -1) : mR(this)
};
xy("goog-select", function() {
  return new gR(n)
});

function nR(a, b, c) {
  gR.call(this, a, b, ZQ.M(), c);
  this.H = new oR(1E3);
  this.dc(this.H)
}
H(nR, gR);
nR.prototype.ia = function() {
  nR.J.ia.call(this);
  nv(this.G(), "jfk-select")
};
nR.prototype.Nu = function() {
  if (zN(this).xa) {
    var a = this.G(),
        b = lv(a),
        c = AN(this) ? 4 : 6,
        d = zN(this).G(),
        e = p;
    zN(this).Da() || (e = m, d.style.visibility = "hidden", U(d, m));
    var f = Math.max(this.pb ? fR(this.pb) : -1, 0),
        f = Sx(zN(this), f),
        h = 0;
    if (CN(this)) {
      var l = d.scrollTop;
      d.style.overflowY = "visible";
      d.style.height = "auto";
      e || (h = lv(f.G()).y - lv(this.G()).y, h = l - h)
    }
    e = b.y - (f ? f.G().offsetTop : 0);
    (l = gv(a)) && Zd(b.y, l.top, l.bottom) == b.y && (l = gv(d), e = Zd(e, l.top + 2, l.bottom - 2));
    qv(a, c, d, AN(this) ? 4 : 6, new ti(0, e - b.y), n, 65 | (CN(this) ? 32 : 132), n);
    CN(this) && (a = lv(f.G()).y - lv(this.G()).y, d.style.overflowY = "auto", d.scrollTop = h + a);
    zN(this).Da() || (U(d, p), d.style.visibility = "visible")
  }
};
nR.prototype.yg = function(a) {
  var b = nR.J.yg.call(this, a);
  return "key" != a.type || !zN(this) || a.altKey || a.ctrlKey || a.metaKey || a.K ? b : uy(this, 64) || 32 != a.keyCode ? b ? (!uy(this, 64) || 38 != a.keyCode && 40 != a.keyCode || pR(this), m) : Uv(a.keyCode) ? (a = a.D ? String.fromCharCode(a.D) : " ", this.H.add(a), b = this.H.b, this.H.o ? qR(this, a, p) : qR(this, b, 1 < b.length), m) : p : (this.H.B(), b)
};

function pR(a) {
  var b = UK(zN(a));
  b && QI(b.G(), zN(a).Ab())
}
function qR(a, b, c) {
  var d = uy(a, 64) ? zN(a).Cd : a.pb ? fR(a.pb) : -1;
  b = new RegExp("^" + tb(b), "i");
  c || ++d;
  for (var d = 0 > d ? 0 : d, e = zN(a), f = 0, h = Rx(e); f < h; ++f) {
    c = (d + f) % h;
    var l = Sx(e, c),
        q = l.jf();
    if (l.isEnabled() && q && b.test(q)) {
      b = c;
      uy(a, 64) ? (zN(a).Qe(b), pR(a)) : a.zi(b);
      break
    }
  }
}
function oR(a) {
  this.A = new si(this.B, a, this);
  this.dc(this.A)
}
H(oR, uc);
oR.prototype.add = function(a) {
  a == this.b ? this.o = m : this.o || (this.b += a);
  this.A.start()
};
oR.prototype.B = function() {
  this.b = t;
  this.o = p
};
oR.prototype.o = p;
oR.prototype.b = t;

function rR(a, b) {
  Y.call(this);
  this.value = a;
  this.C = b || WQ || (WQ = new VQ(pQ, 0));
  var c;
  t: {
    c = this.Ca();
    var d = this.C.b;
    if (0 != c) for (var e = d.length; e--;) if (0 == c % d[e]) {
      c = d[e];
      break t
    }
    c = d[0]
  }
  this.A = c
}
H(rR, Y);
B = rR.prototype;
B.ia = function() {
  this.K = this.oa("number");
  this.H = this.oa("unit");
  this.V = this.xD(this.K, this.H, this.value, this.A, this.C)
};
B.xD = function() {
  for (var a = [], b = this.C.b, c = 0; c < b.length; c++) a.push('<option value="', b[c], '">', I(this.C.o[b[c]]), "</option>");
  sR.put("options", a.join(t));
  sR.put("numId", this.K);
  sR.put("unitId", this.H);
  sR.put("numberValue", this.Ca() / this.A);
  return Du(this.b, sR.toString())
};
B.$ = function() {
  rR.J.$.call(this);
  this.o = this.b.G(this.K);
  this.F = this.b.G(this.H);
  this.o.value = this.Ca() / this.A;
  this.F.value = this.A;
  var a = Z(this);
  a.I(this.o, v, this.kz);
  a.I(this.value, v, this.gJ);
  this.lz(this.H)
};
B.lz = function() {
  Z(this).I(this.F, v, this.gn)
};
B.Na = function() {
  rR.J.Na.call(this);
  this.gn();
  this.kz()
};
B.gJ = function() {
  this.xa && (this.o.value = this.Ca() / this.A)
};
B.gn = function() {
  this.A = Number(this.F.value);
  XQ(this.C, Number(this.o.value) * this.F.value) ? this.$a(Number(this.o.value) * this.A) : this.o.value = Math.floor(this.Ca() / this.A)
};
B.kz = function() {
  var a = this.o.value,
      b = a.replace(/[^0-9]/g, t);
  a != b && (this.o.value = b);
  XQ(this.C, Number(this.o.value) * this.F.value) ? this.$a(Number(this.o.value) * this.A) : this.o.value = Math.floor(this.Ca() / this.A)
};
var sR = new V('<span class="gcal-durpicker"><input type=text id="${numId}" class="gcal-durpicker-number ' + (J ? "gcal-durpicker-number-ie" : "gcal-durpicker-number-non-ie") + '" value="${numberValue}"></input><select class="gcal-durpicker-unit" id="${unitId}">${options}</select></span>');
rR.prototype.rb = y(p);
rR.prototype.$a = function(a) {
  this.value.set(a)
};
rR.prototype.Ca = function() {
  return this.value.get()
};

function Oja(a) {
  return '<div class="goog-inline-block"><span class="gcal-durpicker"><input type=text id="' + ZH(a.iO) + '" class="gcal-durpicker-number dp-nv' + (a.hO ? " gcal-durpicker-number-ie" : " gcal-durpicker-number-non-ie") + '" value="' + ZH(a.numberValue) + '"></input><div class="gcal-durpicker-unit dp-un goog-inline-block" id="' + ZH(a.jO) + '"></div></span></div>'
}

function Pja(a) {
  return '<div class="rp-it"><div class="gcal-reminder-method rp-rms goog-inline-block"></div><span class="rp-ce"></span><span class="rp-cp"></span><span class="rp-rm">' + (a.IA ? '<span class="lk small">' + ZH(a.IA) + "</span>" : '<div class="rm-remove goog-inline-block" role=button></div>') + "</span></div>"
};

function tR(a, b) {
  rR.call(this, a, b)
}
H(tR, rR);
tR.prototype.xD = function(a, b, c, d, e) {
  a = {
    iO: a,
    jO: b,
    numberValue: c.get() / d,
    hO: J
  };
  b = e.b;
  this.B = new nR(t);
  BN(this.B, p);
  for (c = 0; c < b.length; c++) this.B.Gd(new lN(e.o[b[c]], t + b[c])), d == b[c] && this.B.zi(c);
  en(zN(this.B).G(), "dp-up");
  this.ha(this.B);
  return LI(Oja, a)
};
tR.prototype.lz = function(a) {
  this.B.render(this.b.G(a));
  Z(this).I(this.B, v, this.gn)
};
tR.prototype.gn = function() {
  var a = this.B.qf();
  a && a.Ca() && (a = parseInt(a.Ca(), 10), isNaN(a) || (this.F.value = a, tR.J.gn.call(this)))
};

function uR(a, b, c, d, e) {
  Y.call(this);
  this.Z = a;
  this.ea = b;
  this.wa = c;
  this.A = d;
  this.o = this.H = n;
  this.K = e || t;
  this.C = n;
  this.ka = new Q(this)
}
H(uR, Y);
B = uR.prototype;
B.rb = y(p);
B.ia = function() {
  var a = this.b,
      b = this.wa,
      c = Db(this.ea, function(c) {
      return a.U("option", {
        value: c
      }, a.createTextNode(b[c]))
    }),
      d = this.A.wb();
  this.o = a.U("select", "gcal-reminder-method", c);
  this.o.value = d.get();
  this.ka.I(d, v, this.sy);
  this.H = a.U("span");
  this.C = this.K ? a.U("span", "lk small", a.createTextNode(this.K)) : a.U("div", "rm-remove goog-inline-block");
  Xi(this.C, m);
  Dj(this.C, "button")
};
B.$h = function() {
  this.o.title = "Reminder type";
  this.K || (this.C.title = "Remove reminder")
};
B.$ = function() {
  uR.J.$.call(this);
  Ku(Z(this), this.C, jA, this.mW);
  this.fF()
};
B.fF = function() {
  Z(this).I(this.o, v, this.Hr)
};
B.sy = function() {
  this.xa && (this.o.value = this.A.wb().get())
};
B.Hr = function() {
  this.A.wb().set(Number(this.o.value))
};
B.mW = function() {
  this.P("da")
};
B.Ab = w("H");

function Qja(a) {
  var b = a.wa;
  return Db(a.ea, function(a) {
    return [b[a], t + a]
  })
}
B.focus = function() {
  this.xa && ZB(this.G())
};
B.L = function() {
  K(this.ka);
  uR.J.L.call(this)
};

function vR(a, b, c, d, e, f, h) {
  uR.call(this, a, b, c, d, h);
  this.F = e;
  this.O = f || t
}
H(vR, uR);
vR.prototype.ia = function() {
  vR.J.ia.call(this);
  this.V = this.b.U("div", "gcal-reminder", this.o, this.H, this.b.createTextNode(" " + this.O + " "), this.C);
  this.ha(this.F, m);
  this.$h()
};
vR.prototype.$h = function() {
  vR.J.$h.call(this);
  this.F.G().title = "Reminder time"
};
vR.prototype.jf = w("O");

function wR(a, b, c, d, e, f, h) {
  vR.call(this, a, b, c, d, e, f, h)
}
H(wR, vR);
B = wR.prototype;
B.ia = function() {
  this.V = LI(Pja, {
    IA: this.K
  });
  this.o = this.Qa("rp-rms");
  this.H = this.Qa("rp-ce");
  this.C = this.Qa("rp-rm");
  this.Qa("rp-cp").innerHTML = this.jf();
  var a = this.A.wb();
  this.o.value = a.get();
  this.B = new nR(t);
  BN(this.B, p);
  this.W = new de;
  for (var a = Qja(this), b = 0; b < a.length; b++) {
    var c = a[b][1];
    this.B.Gd(new lN(a[b][0], c));
    this.W.set(c, b)
  }
  en(zN(this.B).G(), "rp-mp");
  this.ha(this.B);
  this.B.render(this.o);
  this.ha(this.F, m);
  this.$h()
};
B.$ = function() {
  wR.J.$.call(this);
  this.gE();
  var a = this.A.wb();
  Z(this).I(a, v, this.gE)
};
B.fF = function() {
  Z(this).I(this.B, v, this.Hr)
};
B.gE = function() {
  this.sy();
  if (this.xa) {
    var a = this.W.get(this.A.wb().get());
    this.B.zi(a)
  }
};
B.Hr = function() {
  var a = this.B.qf();
  a && a.Ca() && (a = parseInt(a.Ca(), 10), isNaN(a) || (this.o.value = a, wR.J.Hr.call(this)))
};

function xR(a, b, c, d) {
  Y.call(this);
  this.C = a;
  this.o = b;
  this.F = c;
  this.Z = d || Infinity;
  this.H = {};
  this.W = new Q(this)
}
H(xR, Y);
B = xR.prototype;
B.ia = function() {
  this.V = this.ij();
  for (var a = dh(this.o), b = 0; b < a.length; b++) yR(this, a[b]);
  this.Mh();
  this.W.I(this.o, "h", this.$T)
};
B.ij = function() {
  var a = this.b;
  this.Md = a.U("div");
  this.A = a.U("span", "lk-button", a.createTextNode("Add a reminder"));
  Xi(this.A, m);
  Dj(this.A, "button");
  return a.U("div", "gcal-reminderlist", this.Md, this.A)
};
B.$ = function() {
  xR.J.$.call(this);
  Ku(Z(this), this.A, jA, this.xV)
};
B.DV = function(a) {
  this.o.remove(a.target.A.getKey());
  this.A.focus()
};
B.xV = function() {
  var a = new mD(this.F.wb().get(), this.F.ed.get(), this.F.$m.get());
  this.o.add(a);
  this.H[a.getKey()].focus()
};
B.$T = function(a) {
  var b = a.o;
  if (a = b.f) for (var c = 0, d = a.length; c < d; ++c) {
    var e;
    e = a[c].getKey();
    e = this.o.getItem(e);
    yR(this, e)
  }
  if (b = b.g) for (c = 0, d = b.length; c < d; ++c) {
    e = b[c].getKey();
    var f = this.H[e];
    this.removeChild(f, m);
    f.aa();
    delete this.H[e]
  }(a || b) && this.Mh()
};

function yR(a, b) {
  var c = a.B(b);
  a.ha(c, m);
  Lu(a.W, c, "da", a.DV, k);
  a.H[b.getKey()] = c
}
B.Mh = function() {
  this.A.style.display = this.o.size() < this.Z ? t : "none"
};
B.Ab = w("Md");
B.rb = y(p);
B.L = function() {
  K(this.W);
  K(this.F);
  xR.J.L.call(this)
};

function zR(a, b, c) {
  xR.call(this, a, b, new mD(3, c || 600), 5);
  this.K = n
}
H(zR, xR);
zR.prototype.B = function(a) {
  return new vR(this.C, this.o.b ? mQ : nQ, oQ(), a, new rR(a.ed))
};
zR.prototype.ij = function() {
  this.K = this.b.U("span", "no-reminders", this.b.createTextNode("No reminders set"));
  return this.b.U("div", {}, this.K, zR.J.ij.call(this))
};
zR.prototype.Mh = function() {
  zR.J.Mh.call(this);
  U(this.K, !this.o.size())
};

function AR(a, b) {
  zR.call(this, a, b)
}
H(AR, zR);
AR.prototype.B = function(a) {
  var b = Cb(this.o.b ? mQ : nQ, function(a) {
    return 1 != a
  }),
      c = WQ || (WQ = new VQ(pQ, 0));
  return new wR(this.C, b, oQ(), a, new tR(a.ed, c))
};

function MQ(a, b) {
  Y.call(this);
  this.o = new AR(a, b)
}
H(MQ, UQ);
MQ.prototype.ia = function() {
  MQ.J.ia.call(this);
  this.ha(this.o, m)
};
MQ.prototype.C = function() {
  return this.o.o
};

function BR(a, b) {
  qN.call(this, a, b);
  tN(this, m);
  this.setVisible(p, m);
  this.o = new de
}
H(BR, qN);
B = BR.prototype;
B.dp = p;
B.qF = 0;
B.Ya = function(a) {
  BR.J.Ya.call(this, a);
  (a = a.getAttribute("for") || a.htmlFor) && CR(this, this.b.G(a), 1)
};
B.$ = function() {
  BR.J.$.call(this);
  this.o.forEach(this.NB, this);
  var a = Z(this);
  a.I(this, "action", this.pP);
  a.I(this.b.Sa(), "mousedown", this.WB, m);
  ic && a.I(this.b.Sa(), "contextmenu", this.WB, m)
};

function CR(a, b, c, d) {
  var e;
  (e = !b) || (e = gb(b), e = !ge(a.o.o, e));
  e && (b ? (c = {
    V: b,
    YC: c,
    iS: d,
    hi: "mousedown",
    yr: k
  }, a.o.set(gb(b), c), b = c) : b = n, a.xa && a.NB(b))
}
B.NB = function(a) {
  Z(this).I(a.V, a.hi, this.aC)
};

function DR(a, b, c, d) {
  var e = a.Da(),
      f;
  (f = a.Da()) || (f = 150 > ib() - a.qF);
  f && a.dp ? a.Ka() : a.P("beforeshow") && (c = "undefined" != typeof c ? c : 4, e || (a.G().style.visibility = "hidden"), U(a.G(), m), b.Ua(a.G(), c, d), e || (a.G().style.visibility = "visible"), a.Qe(-1), a.setVisible(m))
}
B.Ka = function() {
  this.Da() && (this.setVisible(p), this.Da() || (this.qF = ib()))
};
B.pP = function() {
  this.Ka()
};
B.aC = function(a) {
  for (var b = this.o.Kb(), c = 0; c < b.length; c++) {
    var d = this.o.get(b[c]);
    if (d.V == a.A) {
      b = d;
      c = C(b.YC) ? new nI(b.V, b.YC, m) : new mI(a.clientX, a.clientY);
      c.o && c.o(5);
      DR(this, c, b.iS, b.yr);
      a.preventDefault();
      a.stopPropagation();
      break
    }
  }
};
B.WB = function(a) {
  this.Da() && !rN(this, a.target) && this.Ka()
};
B.Ir = function(a) {
  BR.J.Ir.call(this, a);
  this.Ka()
};
B.L = function() {
  BR.J.L.call(this);
  this.o && (this.o.clear(), delete this.o)
};

function ER(a, b) {
  Y.call(this);
  this.ka = a;
  this.A = b
}
H(ER, Y);
ER.prototype.ia = function() {
  ER.J.ia.call(this);
  this.G().innerHTML = RQ({
    RB: !Oj(this.A, 2097152)
  }, FR(this));
  this.Ya(this.G())
};

function GR(a, b) {
  var c = a.b.createElement("div");
  c.innerHTML = b(k, k, FR(a));
  return c
}
function FR(a) {
  var b = $h(uk(a.ka));
  return {
    Nf: "unknown",
    Pw: Wf(a.A, b)
  }
}
ER.prototype.Ya = function(a) {
  ER.J.Ya.call(this, a);
  en(this.G(), "per-root");
  this.O = HR(this, "per-ru");
  this.ea = HR(this, "per-ry");
  this.W = HR(this, "per-rm");
  this.Z = HR(this, "per-rn");
  switch (this.A.Dc) {
  case 1:
    IR(this);
    break;
  case 3:
    JR(this);
    break;
  case 2:
    KR(this);
    break;
  default:
    LR(this, this.O), this.H || (this.H = new iO(n), this.ha(this.H), Px(this.H, HR(this, "per-du"))), this.B = HR(this, "per-du")
  }
};

function HR(a, b) {
  return a.b.Qa(b, a.G())
}
ER.prototype.$ = function() {
  ER.J.$.call(this);
  Ku(Z(this), this.G(), jA, E(this.wa, this))
};
ER.prototype.wa = function(a) {
  if (this.o && this.b.contains(HR(this, "per-miy"), a.target)) IR(this), fu(this.A.getId(), 1);
  else if (this.o && this.b.contains(HR(this, "per-mim"), a.target)) JR(this), fu(this.A.getId(), 3);
  else if (this.o && this.b.contains(HR(this, "per-min"), a.target)) KR(this), fu(this.A.getId(), 2);
  else if (Ot(a.target, "per-ar")) LR(this, n), U(HR(this, "per-cr"), p), FG(this.A.getId());
  else if (this.B && this.b.contains(this.B, a.target)) {
    if (!this.o) {
      a = this.b;
      var b = document.createElement("div");
      a.appendChild(this.G(), b);
      this.o = new BR(a);
      this.o.dp = m;
      Px(this.o, b);
      a = new fN(GR(this, Jja));
      this.o.ha(a, m);
      b = new lN(GR(this, Kja));
      this.o.ha(b, m);
      var c = new lN(GR(this, Lja));
      this.o.ha(c, m);
      var d = new lN(GR(this, Mja));
      this.o.ha(d, m);
      en(a.G(), "per-mh");
      en(b.G(), "per-mi", "per-miy");
      en(c.G(), "per-mi", "per-mim");
      en(d.G(), "per-mi", "per-min");
      this.ha(this.o)
    }
    DR(this.o, new uN(this.B, 4, m), 4, n)
  }
};

function IR(a) {
  LR(a, a.ea);
  a.K || (a.K = new iO(n), a.ha(a.K), Px(a.K, HR(a, "per-dy")));
  a.B = HR(a, "per-dy")
}

function JR(a) {
  LR(a, a.W);
  a.C || (a.C = new iO(n), a.ha(a.C), Px(a.C, HR(a, "per-dm")));
  a.B = HR(a, "per-dm")
}
function KR(a) {
  LR(a, a.Z);
  a.F || (a.F = new iO(n), a.ha(a.F), Px(a.F, HR(a, "per-dn")));
  a.B = HR(a, "per-dn")
}
function LR(a, b) {
  U(a.O, p);
  U(a.ea, p);
  U(a.W, p);
  U(a.Z, p);
  b && U(b, m)
};

function MR(a, b, c) {
  IQ.call(this, a, b, c)
}
H(MR, IQ);
var NR = {
  T_: "pb",
  X_: "pbs",
  V_: "pb-ie8",
  U_: "pb-anfooter",
  gP: "pb-desc",
  hP: "pb-fallback",
  kP: "pb-loc",
  iP: "pb-hoi",
  jP: "pb-hol",
  lP: "pb-nm",
  W_: "pb-org",
  mP: "pb-rsvp",
  nP: "pb-thvr",
  oP: "pb-vw",
  Z_: "pbwc",
  Y_: "pbw"
};
B = MR.prototype;
B.L = function() {
  if (this.o) {
    J && 0 >= vb(oc, "8") && gn(this.o.G(), "pb-ie8");
    gn(this.o.G(), "pb");
    var a = this.b.Qa("bubbleclose");
    a && ij(a, "top", this.W)
  }
  MR.J.L.call(this)
};
B.ia = function() {
  MR.J.ia.call(this);
  var a = this.event.mc,
      b = zo(this.A),
      c = this.event.b["goo.backgroundImageUrl"],
      d = this.event.b["goo.backgroundVideoUrl"],
      e = jg(Jd(this.A, 5), a),
      f = t;
  e && (f = e.tc());
  var h = rw(this.A, this.event),
      e = this.Qt(),
      l = b ? c : t,
      q = b ? d : t,
      r = yv(this.event.getTitle()),
      s = this.H.Bo(this.event.Fa().Jb()),
      u = this.H.ob(this.event.Fa().Lb()),
      x = f,
      f = this.event.Yd(),
      b = !Oj(this.event, 2097152),
      z = this.event.Tc,
      A = this.event.b["goo.rtcHangoutUrl"],
      d = this.event.Sj(),
      c = h ? Yv(this.A, this.event) : t,
      G = new ER(this.A, this.event),
      M = this.G(),
      N = FR(G),
      X = t,
      s = ZH(s) + (", " + ZH(u)),
      X = X + ('<div class="' + KI(JQ.iB) + '"><div class="' + KI(JQ.jB) + '" style="' + (l ? "background-image: url(" + KI(II(l)) + ")" : t) + '">' + (q && l ? '<video autoplay="true" loop="true" style="width: 100%" src="' + KI(II(q)) + '"></video>' : t) + '</div><div class="' + KI(JQ.gB) + '"><div class="' + (h ? KI(JQ.xu) + " single-line-ellipsis  " + KI(NR.nP) : KI(JQ.xu) + " single-line-ellipsis") + '">' + ZH(r) + '</div><div class="' + KI(JQ.bP) + ' goog-inline-block">' + (e ? '<div class="' + KI(JQ.aP) + " goog-inline-block " + KI(JQ.cP) + '">&nbsp;</div>' : t) + '<div class="' + KI(JQ.fP) + ' single-line-ellipsis goog-inline-block">' + s + "</div></div>");
  A ? X += '<div><a class="' + KI(NR.jP) + '" target=_blank href="' + KI(II(A)) + '"><div class="' + KI(NR.iP) + ' goog-inline-block"></div>Google+ Hangout</a></div>' : z && (X += '<div class="' + KI(NR.kP) + ' single-line-ellipsis">' + ZH(z) + "</div>");
  h = X;
  e = "</div>" + (e ? '<div class="' + KI(JQ.dP) + '"><div class="' + KI(JQ.eP) + '"></div></div>' : t) + '</div><div class="' + KI(JQ.hB) + '"><div class="' + KI(NR.hP) + '">';
  l = t;
  x = "By " + ZH(x);
  l += '<div class="' + KI(NR.lP) + ' g-hovercard" data-userid="' + KI(a) + '">' + x + '</div><div class="' + KI(NR.gP) + '">' + ZH(d) + "</div>";
  f && (l += '<div class="' + KI(NR.mP) + '">' + RQ({
    RB: b
  }, N), c && (l += '<a href="' + KI(II(c)) + '" target="_blank" class="' + KI(NR.oP) + '">View on Google+ &raquo;</a>'), l += "</div>");
  M.innerHTML = h + (e + l + "</div></div>");
  this.event.Yd() && (this.ha(G), Px(G, this.Qa("pb-rsvp")));
  en(this.G(), "pbs")
};
B.$ = function() {
  MR.J.$.call(this);
  this.o && en(this.o.G(), "pb");
  if (zo(this.A) && this.event.Aa() == Sh(this.A) && this.o) {
    var a = this.b.U("div", {
      "class": "pbwc"
    }),
        b = this.Qa("pb-fallback");
    b.parentNode.insertBefore(a, b);
    b = this.b.U("div", {
      "class": "pbw"
    });
    a.appendChild(b);
    a = Wa("gapi");
    a.evwidget && a.evwidget.render ? (a.evwidget.render(b, {
      eid: "c" + Av(this.event.getId()).split(" ")[0],
      oid: this.event.mc,
      width: "498px",
      onready: E(this.jK, this),
      onrsvp: E(this.kK, this)
    }), this.O = pe(this.iK, 3E3, this)) : (pe(this.aq, 0, this), OR("pb_widget_not_ready"))
  } else pe(this.aq, 0, this), OR(this.o ? "pb_widget_fallback" : "pb_widget_agenda");
  this.o && J && 0 >= vb(oc, "8") && en(this.o.G(), "pb-ie8");
  a = Z(this);
  (b = this.Qa("pb-thvr")) && Ku(a, b, jA, this.hK);
  this.o && a.I(this.o.ra, "show", this.mK)
};

function OR(a) {
  Zo.M().log(a, 0)
}
B.mK = function() {
  function a() {
    return J && qc(9) && !qc(10) ? c.scrollHeight <= c.offsetHeight + 1 : c.scrollHeight <= c.offsetHeight
  }
  function b(c) {
    for (; c.lastChild;) {
      var e = c.lastChild;
      if (3 == e.nodeType) {
        t: {
          for (var f = e.data.split(" "), h = f.length; 0 < h; --h) if (e.data = f.slice(0, h).join(" ") + "...", a()) {
            e = m;
            break t
          }
          e = p
        }
        if (e) return m
      } else if (b(e)) return m;
      c.removeChild(c.lastChild)
    }
    return p
  }
  var c = this.Qa("pb-desc");
  a() || b(c)
};
B.aq = function() {
  if (this.xa) {
    var a = this.Qa("fb-footer"),
        b = this.Qa("pb-fallback");
    this.Qa("pbwc");
    var c = this.Qa("pbw"),
        d = this.Qa("fb-header");
    xj(b) ? b = c = vj(b).height : (b = vj(d).height - 1, c = vj(c).height);
    this.o ? (uj(a, b + "px"), b = this.b.Qa("bubbleclose"), this.W = RI(b, "top"), en(a, "pb-anfooter"), uj(a, c + "px"), c += 1, ij(d, "top", "-" + c + "px"), ij(b, "top", "-" + (c - 16) + "px"), d = function() {
      ij(a, "overflow", "visible");
      gn(a, "pb-anfooter")
    }, cu("pb-ie8") ? d() : pe(d, 300, this)) : (uj(a, c + "px"), ij(a, "overflow", "visible"))
  }
};
B.iK = function() {
  var a = this.Qa("pbwc");
  this.b.Uc(a);
  pe(this.aq, 0, this);
  OR("pb_widget_failure")
};
B.jK = function() {
  this.O && (qe(this.O), this.O = 0);
  var a = this.Qa("pb-fallback");
  U(a, p);
  pe(this.aq, 0, this);
  OR("pb_widget_success")
};
B.kK = function(a) {
  switch (a.rsvp) {
  case "_click":
    this.B && this.B.setVisible(p);
    break;
  case "_escape":
    this.o && this.o.Ka();
    break;
  case "yes":
    EG(this.event, 1);
    this.o && Hp();
    break;
  case "maybe":
    EG(this.event, 3);
    this.o && Hp();
    break;
  case "no":
    EG(this.event, 2);
    this.o && Hp();
    break;
  case "remove":
    Pfa(this.event.getId()), pe(function() {
      this.o && this.o.Ka();
      Hp()
    }, 500, this)
  }
};
B.QE = function(a) {
  return 1 != a.wb()
};
B.hK = function() {
  sw(this.A, this.event)
};

function eC(a, b) {
  var c = R(),
      d = Td(c),
      e = a.Oo();
  return Jj(a) ? new dQ(c, a, b) : a.oc() && d.isEnabled(83) ? new MR(c, a, b) : e && d.isEnabled(76) ? new OQ(c, a, b) : new fQ(c, a, b)
};

function yea() {
  var a = R();
  Rq(a).b(Ba, function() {
    var b = yx(a),
        c = PR(b.o);
    b.b.Ka();
    QR(c)
  })
};

function RR(a) {
  this.A = a || document.title || t;
  this.b = []
}
H(RR, uc);
Xa(RR);
B = RR.prototype;
B.Dh = 0;
B.an = m;
B.L = function() {
  RR.J.L.call(this);
  K(this.o)
};
B.setTitle = function(a) {
  this.A = a;
  this.an = m;
  this.Dh = 0;
  this.Cm()
};

function SR(a) {
  a.b.length || (document.title = a.A, a.La && a.La.stop())
}
B.Cm = function() {
  !this.an && this.b.length ? (document.title = this.b[this.Dh], this.Dh = (this.Dh + 1) % this.b.length, this.an = !this.Dh) : (document.title = this.A, this.b.length && (this.an = p))
};

function TR(a) {
  this.F = a || t;
  this.A = p;
  this.o = this.b = n
}
H(TR, uc);
TR.prototype.L = function() {
  TR.J.L.call(this);
  this.b && (this.b.contentWindow.document.body.innerHTML = t, Li(this.b), this.b = n);
  this.A = p;
  this.B = n
};
TR.prototype.D = p;
TR.prototype.init = function() {
  var a;
  if (this.o == n) if (this.o = p, J) for (a = 7; 9 > a; a++) try {
    new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + a);
    this.o = m;
    break
  } catch (b) {} else
  for (a = 0; a < navigator.mimeTypes.length; a++) if ("swf" == navigator.mimeTypes[a].suffixes) {
    this.o = m;
    break
  }
  a = this.o;
  if (a) {
    this.b = Ei("iframe");
    this.b.id = "flash-reminder-frame";
    document.body.appendChild(this.b);
    try {
      var c = $v(this.b);
      c.open();
      c.close();
      var d = this.b.contentWindow,
          e = this.F + "remindersound.swf";
      this.B = wi(d.document);
      if (J) {
        var f = d.document.createElement("DIV");
        f.innerHTML = '<object id="flash-reminder" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"><param name="movie" value="SWF_URL"><param name="quality" value="high"></object>'.replace("SWF_URL", e);
        d.document.body.appendChild(f.firstChild)
      } else d.document.body.innerHTML = '<embed id="flash-reminder" src="SWF_URL" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"></embed>'.replace("SWF_URL", e)
    } catch (h) {}
  }
};
TR.prototype.C = function(a, b) {
  if (!this.D) try {
    var c;
    if (this.A) c = m;
    else {
      var d = this.b ? this.B.G("flash-reminder") : n;
      c = d ? this.A = 100 == ("undefined" != typeof d.PercentLoaded ? d.PercentLoaded() : n) : p
    }
    if (c) {
      var e = this.b ? this.B.G("flash-reminder") : n;
      if (e) try {
        e.SetVariable("play", "new_message"), a.b()
      } catch (f) {
        this.D = m
      }
    } else c = b || 0, 30 > c && window.setTimeout(E(this.C, this, a, c + 1), 500)
  } catch (h) {
    this.D = m
  }
};

function UR() {
  this.F = new Q(this);
  this.B = new $I(1E4);
  this.F.I(this.B, "tick", this.wv);
  this.b = {}
}
H(UR, uc);
B = UR.prototype;
B.kA = t;
B.Xl = function(a) {
  var b = RR.M();
  b.b = [];
  b.Dh = 0;
  SR(b);
  b.Cm();
  for (var c in this.b) b = this.b[c], !a && this.D && VR(this.D, b.event), K(b);
  this.b = {}
};
B.add = function(a, b, c) {
  var d = a.getId();
  this.b[d] || (a = this.XC(a, b, c), a.show(), this.b[d] = a, this.B.start())
};

function Rja(a, b) {
  a.C || (a.C = new TR(a.kA), a.C.init());
  a.C.C(b)
}
B.L = function() {
  this.B.stop();
  K(this.B);
  K(this.F);
  K(this.C);
  this.Xl();
  UR.J.L.call(this)
};
B.wv = function() {
  var a = $h(this.H).ta(),
      b = [],
      c;
  for (c in this.b) {
    var d = this.b[c];
    !d.C || d.C > a || (d.aa(), b.push(c))
  }
  if (b.length) {
    for (a = 0; a < b.length; a++) delete this.b[b[a]];
    this.JC();
    Fc(this.b) && this.Xl()
  }
};
B.JC = Na();

function WR(a, b, c, d) {
  this.event = a;
  this.B = b;
  this.C = c;
  this.A = d
}
H(WR, uc);
WR.prototype.show = function() {
  this.D = m;
  var a = this.A,
      b = yv(this.B);
  a.b.push(b);
  a.b.length && (a.La || (a.o = new Q(a), a.La = new $I(2E3), a.o.I(a.La, "tick", a.Cm)), a.La.enabled || (a.La.start(), a.Cm()))
};
WR.prototype.cancel = function() {
  if (this.D) {
    this.D = p;
    var a = this.A,
        b = yv(this.B);
    Mb(a.b, b) && (a.Dh >= a.b.length && (a.Dh = 0, a.an = m), SR(a), a.Cm())
  }
};
WR.prototype.L = function() {
  this.cancel();
  WR.J.L.call(this);
  delete this.A;
  delete this.event
};

function XR(a) {
  UR.call(this);
  this.kb = a || "erd"
}
H(XR, UR);
Xa(XR);
B = XR.prototype;
B.OA = "reminder_dlg";
B.Xl = function(a) {
  XR.J.Xl.call(this, a);
  this.A = n;
  K(this.o);
  K(this.Ga)
};
B.add = function(a, b, c) {
  if (!this.Ga || this.Ga.isDisposed()) {
    var d = new tK("cal-dialog");
    this.A = Ei("div", this.kb + "-container");
    this.o = new Q(d);
    Xd(this.o, d, "dialogselect", this.X, p, this);
    this.o.I(window, "resize", d.Ua);
    this.o.I(window, "scroll", d.Ua);
    d.Ot = p;
    zK(d, p);
    d.setTitle("Event reminder");
    d.Ab().appendChild(Ei("div", this.kb + "-minwidth"));
    d.Ab().appendChild(this.A);
    this.Ga = d
  }
  this.Ga.setVisible(m);
  XR.J.add.call(this, a, b, c);
  YR(this);
  this.pC()
};
B.XC = function(a, b, c) {
  return new ZR(a, b, c, RR.M(), this.A, this.kb)
};
B.pC = function() {
  var a = this.A,
      b = this.kb + "-event-first";
  a.firstChild && a.firstChild.className != b && (a.firstChild.className = b);
  a.scrollTop = 1E5;
  this.Ga.Ua()
};
var Sja = (new AK).set("ok", "OK", m, m),
    Tja = (new AK).set("ok", "OK", m, m).set("continue", "Remind me again in 5 minutes");
XR.prototype.X = function(a) {
  (a = "continue" == a.key) && $R(this.D, Dc(this.b));
  this.K && aS();
  this.Xl(a)
};
XR.prototype.JC = XR.prototype.pC;
XR.prototype.wv = function(a) {
  XR.J.wv.call(this, a);
  this.Ga && !this.Ga.isDisposed() && YR(this)
};

function YR(a) {
  var b = n,
      c;
  for (c in a.b) var d = a.b[c].event,
      b = b ? d.Fa().max(b) : d.Fa();
  b = b && bS(b, a.H) ? Tja : Sja;
  b != a.Ga.o && (DK(a.Ga, b), a.Ga.focus())
}
function cS(a, b, c) {
  Y.call(this);
  this.A = a;
  this.o = b;
  this.kb = c
}
H(cS, Y);
cS.prototype.ia = function() {
  var a = this.b.U("div", this.kb + "-event");
  a.innerHTML = this.o;
  this.V = a
};
cS.prototype.L = function() {
  cS.J.L.call(this);
  delete this.A
};

function ZR(a, b, c, d, e, f) {
  WR.call(this, a, b, c, d);
  this.o = new cS(this, b, f);
  this.b = e
}
H(ZR, WR);
ZR.prototype.show = function() {
  ZR.J.show.call(this);
  this.o.render(this.b)
};
ZR.prototype.L = function() {
  ZR.J.L.call(this);
  K(this.o);
  delete this.b
};
var Uja = function() {
  var a;
  return ac ? (a = /Windows NT ([0-9.]+)/, (a = a.exec(Xb)) ? a[1] : "0") : $b ? (a = /10[_.][0-9_.]+/, (a = a.exec(Xb)) ? a[0].replace(/_/g, ".") : "10") : dc ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(Xb)) ? a[1] : t) : ec || naa ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(Xb)) ? a[1].replace(/_/g, ".") : t) : t
}();

function dS() {
  this.o = "Notification" in window && "permission" in window.Notification;
  this.b = window.webkitNotifications;
  var a;
  if (a = $b) a = 0 <= vb(Uja, 10.8);
  this.A = a
}
Xa(dS);

function eS(a) {
  return a.o ? "granted" == window.Notification.permission : 0 == a.b.checkPermission()
}
function fS(a, b) {
  a.o ? window.Notification.requestPermission(b) : a.b.requestPermission(b)
}

function gS(a, b, c, d, e) {
  a.o ? b = new Notification(c || "Google Calendar", {
    icon: d,
    tag: e,
    body: b
  }) : (b = a.b.createNotification(d || t, c || "Google Calendar", b), e && (b.replaceId = e), b.show());
  a.A && new hS(b);
  return b
}

function aS() {
  var a = dS.M();
  (a.o || a.b) && (a.o ? "default" == window.Notification.permission : 1 == a.b.checkPermission()) && fS(a, function() {
    eS(a) && gS(a, "You can now get Desktop Notifications from Calendar on this browser. :-)", "Google Calendar", "https://calendar.google.com/googlecalendar/images/about-calendar.gif")
  })
}
function hS(a) {
  this.b = a;
  this.o = Zc(window, "focus", this.A, p, this)
}
H(hS, uc);
hS.prototype.A = function() {
  var a = new L("close", this.b),
      b = this.b,
      c = a.type;
  yc(b) ? ed(b, c, p, a) : bd(b, c, p, a);
  this.aa()
};
hS.prototype.L = function() {
  ad(this.o)
};

function iS() {
  UR.call(this)
}
H(iS, UR);
Xa(iS);
iS.prototype.OA = "reminder_chrome";
iS.prototype.XC = function(a, b, c) {
  return new jS(this, a, b, c, dS.M(), RR.M(), this.D)
};

function jS(a, b, c, d, e, f, h) {
  WR.call(this, b, c, d, f);
  this.X = a;
  this.F = b.getId();
  this.H = e;
  this.K = h;
  this.o = new Q(this)
}
H(jS, WR);
B = jS.prototype;
B.show = function() {
  this.b = gS(this.H, yv(this.B), "Google Calendar reminder", "https://calendar.google.com/googlecalendar/images/about-alerts.gif", "cal-evt-" + this.F);
  this.o.I(this.b, "close", this.dM);
  this.o.I(this.b, "click", this.cM);
  jS.J.show.call(this)
};
B.cancel = function() {
  this.D && (this.b.cancel ? this.b.cancel() : this.b.close && this.b.close());
  delete this.X.b[this.F];
  jS.J.cancel.call(this)
};

function kS(a) {
  bS(a.event.Fa()) ? lS(a.K, [a.event]) : VR(a.K, a.event)
}
B.cM = function() {
  window.focus();
  kS(this);
  this.aa()
};
B.dM = function() {
  kS(this);
  this.aa()
};
B.L = function() {
  jS.J.L.call(this);
  this.cancel();
  delete this.A;
  delete this.b;
  delete this.H;
  K(this.o)
};

function mS() {
  P.call(this);
  this.b = {}
}
H(mS, P);

function VR(a, b) {
  delete a.b[b.getId()]
}

function lS(a, b) {
  var c = b[0],
      d = Hj(c.getTitle()),
      e = Va.setTimeout(F(function(b) {
      for (var d = 0; d < b.length; ++d) VR(a, b[d]);
      b = c.getId();
      a.P({
        type: "fa",
        Wr: b
      })
    }, b), 1E4),
      f = Kl.ob(c.Fa()),
      h = "['" + Vja(b).join("','") + "']",
      e = ["<a href=\"javascript:_HideSnoozeMessage('", c.getId(), "');_CalAddAlarm(", h, ",'", e, "');\">Remind me again in 5 minutes</a>"].join(t);
  a.P({
    type: "ea",
    ZU: [f, " ", d, 1 < b.length ? "(+" + (b.length - 1) + " more)" : t, "&nbsp;&nbsp;", e].join(t),
    Wr: c.getId()
  })
}

function $R(a, b, c) {
  for (var d = $h(Jl()), e = 0; e < b.length; ++e) {
    var f = b[e];
    C(c) && Va.clearTimeout(c);
    a.b[f] = d;
    ep("reminder_snz")
  }
}
function bS(a, b) {
  var c = $h(b || Jl());
  return -15 < ai(Yf(a, c))
}
function Vja(a) {
  return Db(a, function(a) {
    return a.getId()
  })
}
kb("_CalAddAlarm", function(a, b) {
  $R(nS(), a, b)
});
kb("_HideSnoozeMessage", function(a) {
  nS().P({
    type: "fa",
    Wr: a
  })
});

function Wja(a) {
  Ir(R()).o(a.ZU, a.Wr)
}
function Xja(a) {
  Ir(R()).Ka(a.Wr)
}
function nS() {
  oS || (oS = new mS, O(oS, "ea", Wja), O(oS, "fa", Xja));
  return oS
}
var oS;

function MO(a) {
  if (!a) {
    var b = S(R()),
        c = Jl(),
        d = $h(c),
        e = d.ta(),
        f = [],
        h = b.getString("remindOnRespondedEventsOnly", "false"),
        l = nS();
    Yp.forEach(function(a) {
      var b = a.Dc;
      if (2 != b && 4 != b && 6 != b && (0 != b || "true" != h)) {
        if (b = a.getId() in l.b) var b = $h(Jl()),
            c = l.b[a.getId()],
            b = c ? 5 <= ai(Yf(b, c)) : p;
        b && (f.push(a), b = $h(Jl()), l.b[a.getId()] = b);
        var e;
        if (!a.K) {
          if (a.F) {
            for (var b = a.F, c = [], q = 0; q < b.length; ++q) {
              var r = b[q];
              3 == r.wb() && c.push(r.uf)
            }
            b = c
          } else b = n;
          a.K = b
        }
        b = a.K;
        if (b == n) if (b = R(), b = Vj(b).b[a.Aa()]) {
          c = [];
          for (e in b)(q = b[e]) && 1 == q.getType() && 3 === q.wb() && c.push(q.uf);
          e = c
        } else e = [];
        else e = b;
        for (b = 0; b < e.length; ++b) if (c = e[b], 0 <= c && (q = Yf(a.Fa(), d).o, q <= c && c - 150 < q)) {
          if (a.ea == c) break;
          f.push(a);
          a.ea = c;
          break
        }
      }
    });
    if (f.length) {
      a = Zo.M();
      f.sort(function(a, b) {
        return a.Fa().ta() - b.Fa().ta()
      });
      var q = p,
          r = p,
          s = p,
          u = Sd(53) && Yg(b, "useGentleReminders", "false");
      if (u) var x = dS.M(),
          r = (q = Yg(b, "grChromeApi", "true") && Sd(54)) && (x.o || !! x.b) && eS(x),
          s = !r;
      for (var x = [], z = 0; z < f.length; ++z) x.push(Yja(f[z], e, s));
      if (u) {
        r ? e = iS.M() : (e = XR.M(), e.K = q);
        q = Yg(b, "grDismiss", "false");
        b = Sd(55) && Yg(b, "grSound", "true");
        a.log(e.OA, 0);
        e.H = c;
        e.D = l;
        for (z = 0; z < x.length; z++) e.add(f[z], x[z], q ? f[z].Za().ta() : n);
        b && (e.kA = vt, a = $o(a), a.fb = "reminder_snd", Rja(e, a))
      } else if (c = x.join("\n"), a.log("reminder_js", 0), NI(yv(c ? c.replace(cf, t) : t)), d = $h(Jl()), a = f[f.length - 1].Fa(), bS(a)) lS(l, f);
      else
      for (z = 0; z < f.length; ++z) VR(l, f[z])
    }
  }
  Va.setTimeout(Zja, 3E4)
}
function Zja() {
  MO(p)
}

function Yja(a, b, c) {
  var d = Mj.M(),
      e = a.Fa().va(),
      f = a.Tc,
      h = Hj(a.getTitle()),
      l = d.getItem(a.Aa()),
      d = Ij(I(cs(d, l))),
      l = Kl.ob(a.Fa()),
      e = e.equals(Ll()) ? n : Kl.Ec(e);
  b = a.Fa().ta() < b;
  f ? (f = om(f), h = e ? b ? t + h + " (" + d + ") has started at " + l + " in " + f + " on " + e + "." : t + h + " (" + d + ") is starting at " + l + " in " + f + " on " + e + "." : b ? t + h + " (" + d + ") has started at " + l + " in " + f + "." : t + h + " (" + d + ") is starting at " + l + " in " + f + ".") : h = e ? b ? t + h + " (" + d + ") has started at " + l + " on " + e + "." : t + h + " (" + d + ") is starting at " + l + " on " + e + "." : b ? t + h + " (" + d + ") has started at " + l + "." : t + h + " (" + d + ") is starting at " + l + ".";
  f = hI(a);
  if (vG(f) && (a = f.getUrl(a))) {
    var q;
    c ? (c = 3 == uD(f) ? "Join video call" : "Join video call \u00bb", q = '<a href="' + a + '" rel=noreferrer target=_blank>' + c + "</a>") : q = (uD(f), "Video call")
  }
  q && (h += " \u2013 " + q);
  return h
};
var iH = n;

function cga(a, b) {
  var c = J ? b.clientX + document.body.scrollLeft : b.pageX,
      d = J ? b.clientY + document.body.scrollTop : b.pageY,
      e = Vga(),
      f = e.style;
  e.innerHTML = a;
  f.position = "absolute";
  f.background = "#ffd";
  f.borderWidth = "1px";
  f.borderStyle = "outset";
  f.padding = "2px";
  e.onmouseover = function() {
    clearTimeout(iH);
    iH = n
  };
  e.onmouseout = gH;
  f.left = c + 16 + "px";
  f.right = t;
  f.top = d + "px";
  f.zIndex = 2E3;
  e.style.display = t
}
function kH() {
  var a = W("tip");
  a && (a.style.display = "none")
}
function gH() {
  iH = setTimeout(kH, 200)
};

function PO(a, b, c, d, e, f) {
  this.K = a;
  this.da = b;
  this.F = e;
  this.X = f;
  this.O = d;
  this.A = new qg(b, c);
  this.o = this.C = n
}
B = PO.prototype;
B.Hy = p;
B.start = function() {
  if ((new Date).getTimezoneOffset() == this.O) {
    this.b = T("mb1");
    var a = S(this.K).Ed();
    this.D = 1 < a.length;
    var b = Jd(this.K, 813),
        c = E(function(a) {
        this.C = a;
        pS(this)
      }, this),
        d = E(function(a) {
        this.o = a;
        pS(this)
      }, this),
        e = E(function(a) {
        this.A = a;
        this.Hy = m;
        pS(this)
      }, this),
        f = OI(new Date);
    hP(b, a[0], f, 0, c, D);
    hP(b, this.A, f, 0, e, D);
    this.D && hP(b, a[1], f, 0, d, D)
  }
};

function pS(a) {
  a.Hy && a.C && (a.o || !a.D) && (a.D ? a.o.o == a.A.o ? (a.B = a.o, a.H = a.C) : (a.B = a.A, a.H = a.o) : a.B = a.A, $ja(a), qS(a, a.yO, "yes"), qS(a, a.zO, "no"), qS(a, a.xO, "never"), qS(a, a.wO, "settings"))
}
function qS(a, b, c) {
  c = Mt(c, a.b)[0];
  var d = E(b, a),
      e = E(a.gU, a);
  bJ(c, jA, function() {
    e();
    d()
  })
}

function $ja(a) {
  var b = E(function(a, b) {
    return '<span class="' + a + ' stz lk" tabindex="0">' + b + "</span>"
  }, a),
      c = b("yes", "Yes"),
      d = b("no", "No"),
      e = b("never", "Never ask again"),
      b = b("settings", "Settings");
  a.b.innerHTML = "Change time zone to " + a.B.ud + "? " + c + d + e + b;
  a.b.style.display = "block";
  a.X()
}
B.gU = function() {
  this.b.style.display = "none";
  this.b.innerHTML = t;
  this.X()
};
B.yO = function() {
  var a = {};
  a.timezone = this.B.getName();
  a.tzlabel = this.B.he();
  this.D && (a.SecondaryDisplayTimezone = this.H.getName(), a.sectzlabel = this.H.he());
  this.F(a, p)
};
B.zO = function() {
  var a = {};
  a.ignoredSuggestTz = this.da;
  this.F(a, m)
};
B.xO = function() {
  this.F({
    neverSuggestTz: "true"
  }, m)
};
B.wO = function() {
  Ps()
};

function Ls(a) {
  this.A = a
}
H(Ls, uc);
B = Ls.prototype;
B.DD = p;
B.L = function() {
  Ls.J.L.call(this);
  K(this.o);
  var a = Jd(this.A, 9),
      b = gb(this);
  a.Ii.remove(b + t);
  K(this.D)
};
B.yw = function(a, b, c, d, e, f) {
  f = new tK(f || "cal-dialog");
  m != f.fp && yK(f, m);
  f.Ot = m;
  zK(f, f.xa);
  f.Vd = m;
  d && DK(f, d);
  b && f.setTitle(b);
  c && vK(f, c);
  b = Jd(this.A, 9);
  c = gb(this);
  b.Ii.add(c + t);
  a && (this.b = a, O(f, "dialogselect", this.HL, m, this));
  O(f, "afterhide", this.FL, p, this);
  f.setVisible(m);
  f.G().style.zIndex = this.getZIndex();
  this.o = new Q(f);
  this.o.I(window, "resize", f.Ua);
  this.o.I(window, "scroll", f.Ua);
  this.D = f;
  e && e()
};
B.HL = function(a) {
  this.DD = m;
  this.b(a)
};
B.FL = function() {
  this.b && !this.DD && this.b(new CK(IK.key, IK.caption));
  this.aa()
};
B.iU = function(a, b, c, d, e, f) {
  if (d) {
    if (!(d instanceof AK)) if (d) {
      for (var h = new AK, l = E(h.set, h), q = 0; q < d.b.length; q++) l.apply(n, d.b[q]);
      d = h
    } else d = n
  } else d = zA();
  this.yw(a, b, c, d, e, f)
};
B.hU = function(a, b, c, d) {
  this.yw(n, a, b, LK(), c, d)
};
B.Ua = function() {
  this.D && this.D.Ua()
};
B.close = function() {
  this.D && this.D.setVisible(p)
};
B.getZIndex = y(1011);

function rS() {}
Xa(rS);
var sS = 60;
B = rS.prototype;
B.Ou = 0;
B.xx = n;
B.Ku = m;
B.Gq = n;
B.qn = n;

function aka(a, b) {
  a.qn = b
}
function tS(a) {
  if (!a.xx) {
    var b = R();
    a.xx = yo(b)
  }
  return a.xx
}
B.RN = function() {
  this.Ku != tS(this).Pa() && uS(this, m)
};
B.UN = function(a) {
  3 <= this.A ? uS(this, m) : (wj(a, String((100 * (3 - this.A) / 3).toFixed() / 100)), this.A++)
};

function uS(a, b) {
  if (b && a.o) {
    var c = a.o.parentNode;
    c && c.removeChild(a.o)
  }
  a.b && (window.clearInterval(a.b), a.Gq && (ad(a.Gq), a.Gq = n), a.qn = n);
  a.b = 0;
  a.o = n
}

function bka() {
  var a = rS.M(),
      b = T("undoLink" + a.Ou);
  uS(a);
  a.o = b;
  a.A = 1;
  a.b = window.setInterval(E(a.UN, a, b), 1E3 * sS / 3);
  a.Ku = tS(a).Pa();
  a.Gq = O(tS(a), "m", E(a.RN, a))
}
function cka() {
  var a = rS.M();
  ++a.Ou;
  return "undoLink" + a.Ou
}
function $ia(a, b) {
  Za(a) ? (a[0] = vS(a[0]), a = a.join("<br>")) : a = vS(a);
  var c = 1E3 * sS + 3E4;
  Ir(R()).o(a, k, function() {
    var a = rS.M();
    uS(a, m)
  }, c);
  bka();
  aka(rS.M(), b)
}
function vS(a) {
  wS.put("undoLink", "Undo");
  wS.put("undoLinkId", cka());
  wS.put("html", a);
  return wS.toString()
}

function LA() {
  var a = rS.M();
  if (a.b && tS(a).Pa() == a.Ku) {
    var b = rS.M(),
        a = R();
    if (tS(b).Pa()) b = Hr(a, "Oops, could not undo due to server error."), Cf(Af(a), "undo", [], 0, D, b);
    else if (b.qn) try {
      b.qn()
    } finally {
      b.qn = n
    } else Ir(a).b("Oops, could not undo due to server error.");
    Ir(R()).Ka()
  }
}
var wS = new V('${html}&nbsp;&nbsp;<span class="ulnk" id="${undoLinkId}"><a onclick="' + rr(function() {
  LA()
}) + '()">${undoLink}</a></span>');
var _Refresh = fw,
    _GenSettings = Ps,
    _SR_backToCalendar = Jt,
    _EH_nwC = sI,
    _forceRefresh = CI;

function _EF_ShowEventDetails(a, b, c, d) {
  var e;
  C(d) && (e = d);
  var f = fp();
  f.fb = "ef_view_from_other";
  d = R();
  var h = Vq(d);
  h && h.o(h.b().uv);
  Rq(d).b(Ba, function() {
    f.b("ef_view_from_other.ll_ef");
    DC(a, !! b, !! c, e)
  })
}
function _ShowPerf() {
  var a = R();
  Rq(a).b(ya, function() {
    dka()
  })
};

function Ur(a) {
  return a ? !a || "F" != a && "C" != a ? "_" == a.charAt(0) ? Ur(a.substring(1)) : xS() : a : xS()
}
function xS() {
  return "US" == S(R()).getString("country", "US") ? "F" : "C"
}
function yS() {
  var a = S(R());
  if (!a.getString("userLoc", t)) return p;
  a = a.getString("weather", t);
  return !a || "F" != a && "C" != a ? p : m
}
function wia() {
  yS() && zS();
  O(Mj.M(), "h", function() {
    var a = S(R());
    a.getString("weather", t) && !Mj.M().contains("cCN3ZWF0aGVyQGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ") && (a.set("weather", t), a.jb())
  })
}

function zS(a) {
  if (Zr("cCN3ZWF0aGVyQGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ")) {
    var b = Mj.M(),
        c = b.getItem("cCN3ZWF0aGVyQGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
    c && c.b && Tr(b, "cCN3ZWF0aGVyQGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
    a && uI(["cCN3ZWF0aGVyQGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"])
  } else mJ("cCN3ZWF0aGVyQGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ", p)
};

function AS(a, b) {
  var c = 0,
      d = 0;
  if (BS(a)) c = a.selectionStart, d = b ? -1 : a.selectionEnd;
  else if (J) {
    var e = CS(a),
        f = e[0],
        e = e[1];
    if (f.inRange(e)) {
      f.setEndPoint("EndToStart", e);
      if ("textarea" == a.type) {
        for (var c = e.duplicate(), h = f.text, d = h, l = e = c.text, q = p; !q;) 0 == f.compareEndPoints("StartToEnd", f) ? q = m : (f.moveEnd("character", -1), f.text == h ? d += "\r\n" : q = m);
        if (b) f = [d.length, -1];
        else {
          for (f = p; !f;) 0 == c.compareEndPoints("StartToEnd", c) ? f = m : (c.moveEnd("character", -1), c.text == e ? l += "\r\n" : f = m);
          f = [d.length, d.length + l.length]
        }
        return f
      }
      c =
      f.text.length;
      b ? d = -1 : d = f.text.length + e.text.length
    }
  }
  return [c, d]
}
function CS(a) {
  var b = a.ownerDocument || a.document,
      c = b.selection.createRange();
  "textarea" == a.type ? (b = b.body.createTextRange(), b.moveToElementText(a)) : b = a.createTextRange();
  return [b, c]
}
function DS(a, b) {
  "textarea" == a.type && (b = zv(a.value.substring(0, b)).length);
  return b
}
function BS(a) {
  try {
    return "number" == typeof a.selectionStart
  } catch (b) {
    return p
  }
};
var ES = {},
    FS = n;

function GS(a) {
  a = gb(a);
  delete ES[a];
  Fc(ES) && FS && FS.stop()
}
function HS() {
  FS || (FS = new si(function() {
    eka()
  }, 20));
  var a = FS;
  a.qc() || a.start()
}
function eka() {
  var a = ib();
  zc(ES, function(b) {
    IS(b, a)
  });
  Fc(ES) || HS()
};

function JS(a, b, c, d) {
  jM.call(this);
  Za(a) && Za(b) || g(Error("Start and end parameters must be arrays"));
  a.length != b.length && g(Error("Start and end points must be the same length"));
  this.D = a;
  this.X = b;
  this.duration = c;
  this.K = d;
  this.o = []
}
H(JS, jM);
B = JS.prototype;
B.xf = 0;
B.rf = function(a) {
  if (a || 0 == this.b) this.xf = 0, this.o = this.D;
  else if (1 == this.b) return p;
  GS(this);
  this.A = a = ib(); - 1 == this.b && (this.A -= this.duration * this.xf);
  this.H = this.A + this.duration;
  this.xf || this.B();
  this.fe("play"); - 1 == this.b && this.fe("resume");
  this.b = 1;
  var b = gb(this);
  b in ES || (ES[b] = this);
  HS();
  IS(this, a);
  return m
};
B.stop = function(a) {
  GS(this);
  this.b = 0;
  a && (this.xf = 1);
  KS(this, this.xf);
  this.fe("stop");
  this.C()
};
B.L = function() {
  0 == this.b || this.stop(p);
  this.fe("destroy");
  JS.J.L.call(this)
};

function IS(a, b) {
  a.xf = (b - a.A) / (a.H - a.A);
  1 <= a.xf && (a.xf = 1);
  KS(a, a.xf);
  1 == a.xf ? (a.b = 0, GS(a), a.fe("finish"), a.C()) : 1 == a.b && a.dv()
}
function KS(a, b) {
  eb(a.K) && (b = a.K(b));
  a.o = Array(a.D.length);
  for (var c = 0; c < a.D.length; c++) a.o[c] = (a.X[c] - a.D[c]) * b + a.D[c]
}
B.dv = function() {
  this.fe("animate")
};
B.fe = function(a) {
  this.P(new LS(a, this))
};

function LS(a, b) {
  L.call(this, a);
  this.x = b.o[0];
  this.y = b.o[1];
  this.duration = b.duration
}
H(LS, L);

function MS(a, b, c, d, e) {
  JS.call(this, b, c, d, e);
  this.element = a
}
H(MS, JS);
MS.prototype.F = D;
MS.prototype.dv = function() {
  this.F();
  MS.J.dv.call(this)
};
MS.prototype.C = function() {
  this.F();
  MS.J.C.call(this)
};
MS.prototype.B = function() {
  this.F();
  MS.J.B.call(this)
};

function NS(a, b) {
  b || (b = {});
  var c = window,
      d = "undefined" != typeof a.href ? a.href : String(a),
      e = b.target || a.target,
      f = [],
      h;
  for (h in b) switch (h) {
  case "width":
  case "height":
  case "top":
  case "left":
    f.push(h + "=" + b[h]);
    break;
  case "target":
  case "noreferrer":
    break;
  default:
    f.push(h + "=" + (b[h] ? 1 : 0))
  }
  f = f.join(",");
  if (b.noreferrer) {
    if (c = c.open(t, e, f)) J && -1 != d.indexOf(";") && (d = "'" + d.replace(/'/g, "%27") + "'"), c.opener = n, d = I(d), c.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + d + '">'), c.document.close()
  } else c.open(d, e, f)
};

function OS() {
  P.call(this)
}
H(OS, Ul);
OS.prototype.rd = function(a) {
  this.set(a, a, a)
};

function PS(a) {
  this.b = a
}
var QS = /\s*;\s*/;
B = PS.prototype;
B.isEnabled = function() {
  return navigator.cookieEnabled
};
B.set = function(a, b, c, d, e, f) {
  /[;=\s]/.test(a) && g(Error('Invalid cookie name "' + a + '"'));
  /[;\r\n]/.test(b) && g(Error('Invalid cookie value "' + b + '"'));
  C(c) || (c = -1);
  e = e ? ";domain=" + e : t;
  d = d ? ";path=" + d : t;
  f = f ? ";secure" : t;
  c = 0 > c ? t : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(ib() + 1E3 * c)).toUTCString();
  this.b.cookie = a + "=" + b + e + d + c + f
};
B.get = function(a, b) {
  for (var c = a + "=", d = (this.b.cookie || t).split(QS), e = 0, f; f = d[e]; e++) {
    if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
    if (f == a) return t
  }
  return b
};
B.remove = function(a, b, c) {
  var d = C(this.get(a));
  this.set(a, t, 0, b, c);
  return d
};
B.Kb = function() {
  return RS(this).keys
};
B.Hb = function() {
  return RS(this).UD
};
B.isEmpty = function() {
  return !this.b.cookie
};
B.mb = function() {
  return this.b.cookie ? (this.b.cookie || t).split(QS).length : 0
};
B.Yk = function(a) {
  for (var b = RS(this).UD, c = 0; c < b.length; c++) if (b[c] == a) return m;
  return p
};
B.clear = function() {
  for (var a = RS(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
};

function RS(a) {
  a = (a.b.cookie || t).split(QS);
  for (var b = [], c = [], d, e, f = 0; e = a[f]; f++) d = e.indexOf("="), -1 == d ? (b.push(t), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
  return {
    keys: b,
    UD: c
  }
}
var SS = new PS(document);
SS.o = 3950;
