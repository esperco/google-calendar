/*
  https://www.google.com/calendar/static/307387de4562bc5dba423644325c5f55calendarjs_delayedcorecompiled__en.js
*/

function Lt(a, b, c, d) {
  a = d || a;
  b = b && "*" != b ? b.toUpperCase() : t;
  if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : t));
  if (c && a.getElementsByClassName) {
    a = a.getElementsByClassName(c);
    if (b) {
      d = {};
      for (var e = 0, f = 0, h; h = a[f]; f++) b == h.nodeName && (d[e++] = h);
      d.length = e;
      return d
    }
    return a
  }
  a = a.getElementsByTagName(b || "*");
  if (c) {
    d = {};
    for (f = e = 0; h = a[f]; f++) b = h.className, typeof b.split == Ea && Jb(b.split(/\s+/), c) && (d[e++] = h);
    d.length = e;
    return d
  }
  return a
}

function Mt(a, b) {
  var c = b || document;
  return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : Lt(document, "*", a, b)
}
function Oda(a, b) {
  var c = T("lv_" + a.B),
      d = [];
  try {
    d = Mt(b, c)
  } catch (e) {
    c.querySelectorAll && (d = c.querySelectorAll('*[class~="' + b + '"]'))
  }
  return d
}
function Nt(a, b, c, d) {
  for (; 0 <= b && b < a.b.length;) {
    if (d(a.b[b])) return b;
    b += c
  }
  return -1
}
function Ot(a, b) {
  return Jb(dn(a), b)
}
function Pt(a, b, c, d) {
  return Lt(a.b, b, c, d)
}
function Qt(a) {
  return isNaN(a) ? ga : rg(a)
}

function Rt(a) {
  return a ? String(a) : "????"
}
var Pda = [1, 4, 2];

function St(a, b) {
  return a.da(a.o + b)
}
var Qda = {
  e_: "lvr-",
  IZ: "lvd-",
  D_: "lvl-",
  mY: "lvw-",
  g_: "lv-x",
  vZ: "lv-c"
};

function Tt(a, b) {
  var c = Oda(a, b);
  return Hb(c, function(a) {
    return Ot(a, "lv-navigable")
  })
}
function Ut(a) {
  if (!a) return n;
  var b = a.lastIndexOf("-");
  if (-1 == b || b == a.length - 1) return n;
  var c = a.substr(0, b);
  a = parseInt(a.substr(b + 1), 10);
  if (isNaN(a)) return n;
  a = dk(a);
  return new ks(c, a)
}
function Vt(a, b) {
  var c = a + "-";
  return nb(b, c) ? b.substr(c.length) : n
}

function Wt(a, b, c) {
  a.B = c ? a.B | b : a.B & ~b
}
function Xt(a, b) {
  return Ot(b, "chip") ? b : Pt(a.o, "*", "chip", b)[0]
}
function Yt(a, b) {
  for (var c = dn(b), d = 0; d < c.length; ++d) {
    var e = c[d];
    if (nb(e, a)) return e.substring(a.length)
  }
  return n
}
function Zt(a, b) {
  return b.year == a.o.o().year && 4 > Math.abs(b.month - a.o.o().month)
}
function $t(a, b, c, d, e, f) {
  this.year = a;
  this.month = b;
  this.Y = c;
  this.hour = d;
  this.minute = e;
  this.second = f
}
H($t, Sg);
B = $t.prototype;
B.Rb = Qa(26);
B.dd = Qa(30);
B.Sb = function() {
  return !!(this.year && this.month && this.Y) && !(isNaN(this.hour) || isNaN(this.minute) || isNaN(this.second))
};
B.ta = function() {
  this.b === k && (this.b = this.Sb() ? ((this.year - 1970 << 4) + this.month << 5) + this.Y + (((this.hour << 6) + this.minute << 6) + this.second + 1) * Ag : NaN);
  return this.b
};
B.equals = function(a) {
  return !!a && this.constructor === a.constructor && this.toString() == a.toString()
};
B.El = function() {
  return ub(Rt(this.year), Qt(this.month), Qt(this.Y), "T", Qt(this.hour), Qt(this.minute), Qt(this.second))
};

function au(a, b, c) {
  this.year = a;
  this.month = b;
  this.Y = c
}
H(au, Sg);
B = au.prototype;
B.Rb = Qa(27);
B.Sb = function() {
  return !!(this.year && this.month && this.Y)
};
B.ta = function() {
  this.b === k && (this.b = this.Sb() ? Bg(this.year, this.month, this.Y) : NaN);
  return this.b
};
B.equals = function(a) {
  return !!a && this.constructor === a.constructor && this.toString() == a.toString()
};
B.El = function() {
  return ub(Rt(this.year), Qt(this.month), Qt(this.Y))
};

function Rda(a, b) {
  this.element = a;
  this.b = b
}

function bu(a, b) {
  var c = a.createElement("div");
  J ? (c.innerHTML = "<br>" + b, c.removeChild(c.firstChild)) : c.innerHTML = b;
  if (1 == c.childNodes.length) return c.removeChild(c.firstChild);
  for (var d = a.createDocumentFragment(); c.firstChild;) d.appendChild(c.firstChild);
  return d
}
function cu(a, b) {
  var c = b || document,
      d = n;
  c.querySelectorAll && c.querySelector ? d = c.querySelector("." + a) : d = Lt(document, "*", a, b)[0];
  return d || n
}
function du(a, b) {
  return paa ? a.b.button == b : "click" == a.type ? 0 == b : !! (a.b.button & Pda[b])
}

function eu(a, b) {
  return Pa[a] = b
}
Ys.prototype.Xz = eu(73, function() {
  window.setTimeout(this.A.UV(E(this.UE, this)), 0)
});
Js.prototype.Ua = eu(71, function() {
  this.b.Ua()
});
Gp.prototype.O = eu(70, function(a) {
  return nb(a, "lvd-") || nb(a, "lvl-")
});
ks.prototype.Ld = eu(68, w("o"));
fs.prototype.Ur = eu(67, function(a) {
  a = mh(a.D); - 1 != a && (this.color = Bh(a))
});
tr.prototype.blur = eu(65, function() {
  this.hasFocus() && zr(this).blur()
});
tr.prototype.rg = eu(64, function(a, b) {
  if (a) {
    var c = Nt(this, this.o + 1, 1, a);
    0 <= c && yr(this, c, b)
  } else yr(this, this.o + 1, b)
});
gs.prototype.rg = eu(63, function() {
  this.nb.rg()
});
tr.prototype.wg = eu(62, function(a, b) {
  if (a) {
    var c = Nt(this, this.o - 1, -1, a); - 1 != c && yr(this, c, b)
  } else yr(this, this.o - 1, b)
});
gs.prototype.wg = eu(61, function() {
  this.nb.wg()
});
Dp.prototype.rt = eu(60, function() {
  this.F = !this.F;
  Wp(this, p);
  S(this.b).set("CollapseAllday", this.F.toString());
  S(this.b).jb()
});
Dp.prototype.Yz = eu(59, function(a) {
  a = a.target;
  xp(this.b).o() && ("g" == a.wc ? this.P("t") : this.P("s"))
});
gp.prototype.C = eu(58, function() {
  var a = fp(),
      b = this.b,
      c = sk(b.A);
  b.focus = c;
  bm(b);
  a.b(this.b.b + ".alterPeriod0")
});
kp.prototype.C = eu(57, function() {
  kp.J.C.call(this);
  np(lp.M())
});
Rn.prototype.ff = eu(49, function(a) {
  Wt(this, 1048576, a)
});
Mn.prototype.getHeight = eu(48, function() {
  return this.b.h
});
In.prototype.setVisible = eu(47, Oa("o"));
Gn.prototype.B = eu(46, function(a, b) {
  var c = Xt(this, a),
      d = "DL" != c.firstChild.tagName;
  c.style.height = b ? b - vm + "px" : "auto";
  c.getElementsByTagName("dl")[0].style.height = b ? b - vm - (d ? 5 : 3) + "px" : "auto";
  um && (d = b - (d ? 5 : 3) - 3, cu("mask-left", c).style.height = d + "px", cu("mask-right", c).style.height = d + "px")
});
zl.prototype.Ag = eu(40, function(a, b) {
  var c = a.year,
      d = a.month,
      e = a.Y,
      f = b.year,
      h = b.month,
      l = b.Y,
      q = Dl(this, d, m),
      r = Dl(this, h, m);
  if (c == f) return d == h ? e == l ? (f = tl(Ck(this.b.b, gl, 19), [q, e, c]), l = ol(this.b, a.Jb()), tl(Ck(this.b.b, gl, 31), [l, f])) : tl(Ck(this.b.b, gl, 25), [q, e, l, c]) : tl(Ck(this.b.b, gl, 26), [q, e, r, l, c]);
  c = ul(this.b, q, e, c);
  f = ul(this.b, r, l, f);
  return tl(Ck(this.b.b, gl, 4), [c, f])
});
zl.prototype.xd = eu(38, function(a, b, c) {
  c = Dl(this, a.month, c);
  if (Zt(this, a)) {
    var d = a.Y;
    c = tl(Ck(this.b.b, gl, 18), [c, d])
  } else {
    var d = a.Y,
        e = a.year;
    c = tl(Ck(this.b.b, gl, 19), [c, d, e])
  }
  a = b ? nl(this.b, a.Jb()) : ol(this.b, a.Jb());
  return tl(Ck(this.b.b, gl, 31), [a, c])
});
Gj.prototype.fg = eu(25, y(p));
Kj.prototype.fg = eu(24, function(a) {
  return !this.Vf(a) && "$" != a.getId() && !(a.oc() && !Oj(a, 2097152))
});
Eo.prototype.fg = eu(23, function(a) {
  return Fo(this, a).fg(a)
});
Fj.prototype.vb = eu(22, function(a, b) {
  this.o ? this.o.vb(a, b) : this.b.push(new Rda(a, b))
});
xi.prototype.U = eu(18, function(a, b, c) {
  return Fi(this.b, arguments)
});
xi.prototype.G = eu(15, function(a) {
  return cb(a) ? this.b.getElementById(a) : a
});
Ln.prototype.G = eu(14, w("V"));
Ss.prototype.G = eu(13, w("Wa"));
xi.prototype.Sa = eu(12, w("b"));
ah.prototype.Ba = eu(10, function(a) {
  if (this.zb != this.EX) return m;
  for (var b in this.da) {
    var c = this.da[b];
    if (!a || a(c)) if (c.Ba && c.Ba(a) || !(b in this.Ia)) return m
  }
  return p
});
lr.prototype.Ba = eu(9, function() {
  return 0 < Bc(this.o)
});
wc.prototype.W = eu(3, w("b"));
L.prototype.stopPropagation = eu(2, function() {
  this.C = m
});
wc.prototype.stopPropagation = eu(1, function() {
  wc.J.stopPropagation.call(this);
  this.b.stopPropagation ? this.b.stopPropagation() : this.b.cancelBubble = m
});

function fu(a, b) {
  var c = R();
  Rq(c).b(Ba, function() {
    gu(a, b)
  })
}
function Sda(a) {
  ep("other_delete");
  var b = R();
  Rq(b).b(Ba, function() {
    hu(a)
  })
}

function iu(a, b, c, d) {
  a.Rs = b;
  a.Zx = c;
  d && Vs(a, d);
  if (a.Dl) {
    d = Qp(a.xc);
    b = b.cb();
    c = c.cb();
    for (var e = a.xc.size; e--;) {
      var f = a.D[e],
          h = d[e],
          l = h >= b && h <= c ? f | 2 : f & -3;
      l != f && (f = e, St(a, Qp(a.xc)[f]).className = a.F[l] + (a.C[h] || t), a.D[e] = l)
    }
  } else a.update()
}
function ju(a, b) {
  var c = b.id;
  return c && 0 == c.indexOf(a.o) ? dk(parseInt(c.substr(a.o.length), 10)) : n
}
function ku(a, b, c, d, e, f, h) {
  var l = R();
  Rq(l).b(xa, E(function() {
    this.b = new Ls(l);
    this.b.iU(b, c, d, e, f, h)
  }, a))
}
function lu(a) {
  return 0 == a.A.length ? n : Tt(a, a.A[0])
}

function mu(a, b) {
  var c = n;
  Bb(dn(b), function(a) {
    Eb(Cc(Qda), F(nb, a)) && (c = a)
  }, a);
  return c
}
function Tda(a) {
  var b = [];
  Bb(a.A, function(a) {
    nb(a, "lvr-") && (a = Ut(a.substring(4))) && b.push(a)
  }, a);
  return b
}
function nu(a) {
  return (a = Yt("lvr-", a)) ? Ut(a) : n
}
function ou(a) {
  return (a = zr(a.nb)) ? Vt("label", a.firstChild.id) : n
}
function pu(a, b) {
  return b == Sh(a.o) || Sd(106) && "dGFza3NAdGFza3MuZ29vZ2xlLmNvbQ" == b
}
function qu(a, b) {
  var c = a.A[b];
  return c ? 2 == c.b : p
}
function ru(a, b) {
  return a.D[b] || n
}

function su(a, b) {
  if (!Xj(a, b)) return p;
  for (var c = Un(b), d = 0; d < c.length; d++) {
    var e = c[d],
        f;
    if (f = e != a.o) e = jg(a.A, e), f = !e || !e.Mc();
    if (f) return m
  }
  return p
}
function Uda() {}
function tu(a, b, c) {
  a = a.o;
  2 == b ? a = 1 : 3 == b ? a = 2 : 1 == c ? 3 != a && 6 != a && (a = 0) : a = 4;
  return a
}
function Vda(a) {
  switch (a.o) {
  case 0:
    return "DAY";
  case 2:
    return "MONTH";
  case 4:
  case 5:
    return "COMPACT";
  case 3:
  case 6:
    return "AGENDA";
  default:
    return "WEEK"
  }
}
function uu(a, b) {
  var c = tp(a);
  if (!c) return b;
  4 == a.o && (c = "custom");
  "custom" == c && (c += "," + a.b);
  return c
}

function vu(a) {
  return a.X
}
function wu() {
  return 42
}
function xu(a) {
  return a.b && "goo.allowModify" in a.b ? "true" === a.b["goo.allowModify"].toLowerCase() : p
}
function yu(a, b) {
  return a.o * ($f(b) / 60 - a.D)
}
function zu(a, b) {
  var c = (b - (a.H ? 0 : a.X)) / ((a.V.offsetWidth - a.X) / a.B) | 0,
      d = a.B - 1;
  return Zd(a.H ? d - c : c, 0, d)
}
function Au(a, b, c, d) {
  a = Xt(a, b).getElementsByTagName("dd")[0];
  b = new V(Dm( !! d));
  ym(b, c, c, "text");
  d && b.put("titleClass", d);
  a.innerHTML = b.toString()
}

function Bu(a, b) {
  var c = xm(b, p),
      d = c.bgColor,
      e = c.borderColor,
      c = c.textColor,
      f = [],
      h = [],
      l = [];
  if ("DL" != a.firstChild.tagName) for (var q = a.firstChild; q != n; q = q.nextSibling)"DL" == q.tagName || "cb1" == q.className ? (f.push(q), h.push(q)) : "ct" != q.className && "cb2" != q.className || h.push(q);
  else f.push(a.firstChild), h.push(a.firstChild), l.push(a.firstChild);
  for (q = 0; q < f.length; ++q) f[q].style.backgroundColor = d;
  for (q = 0; q < h.length; ++q) h[q].style.borderColor = e;
  for (q = 0; q < l.length; ++q) l[q].style.color = c;
  c = a.getElementsByTagName("dt")[0];
  c.style.backgroundColor = e;
  if (um) for (c.style.backgroundColor = d, c = Mt("mask", a), q = 0; q < c.length; q++) c[q].style.backgroundColor = d, c[q].style.borderColor = e
}
function Cu(a) {
  a = a.b;
  return a.parentWindow || a.defaultView
}
function Du(a, b) {
  return bu(a.b, b)
}
function Eu(a) {
  return a ? a.parentWindow || a.defaultView : window
}
function Fu(a, b, c) {
  return Lt(document, a, b, c)
}

function Gu(a, b, c) {
  var d = a.getString("bool", t);
  c !== a.B.get(d, b) && (d = [d.slice(0, b), d.slice(0, b + 1), d.slice(b + 1)], d[1] = C(c) ? Number(c) : "x", d[0].length < b && d.splice(1, 0, Array(b - d[0].length + 1).join("x")), d = d.join(t).replace(/x+$/, t));
  a.set("bool", d)
}
function Hu(a, b) {
  if (!b) return n;
  var c = a.o[b];
  return c ? c : 0 <= b.indexOf("<") ? (c = a.A ? a.A.b(b, m) : b) ? a.o[c] : n : 0 > b.indexOf("@") ? a.b[b] : n
}
function Iu(a, b) {
  return "CONFIDENTIAL" == b ? 1 : a.A.get(b)
}
function Wda(a, b, c) {
  return a.Fa().equals(b.Ea()) && a.Za().equals(c.Ea())
}
var Xda = /^[a-zA-Z0-9_]+$/;

function Ju(a) {
  var b = a.o;
  a = a.Je;
  if (!a) return b;
  if (!(0 < b.indexOf("@"))) return a;
  a && -1 == a.indexOf('"') && (a = '"' + a + '"');
  return b ? a + " <" + b + ">" : a
}
function Ku(a, b, c, d) {
  c.b(b, d, k, a.ja || a, a);
  return a
}
function Lu(a, b, c, d, e, f) {
  if (Za(c)) for (var h = 0; h < c.length; h++) Lu(a, b, c[h], d, e, f);
  else(b = Zc(b, c, d || a.handleEvent, e, f || a.ja || a)) && (a.C[b.key] = b)
}
function Mu(a, b, c, d, e) {
  Xd(a, b, c, d, p, e)
}
function Nu(a) {
  return a.F
}
function Ou(a, b) {
  R().o[a] = b
}
function Pu(a) {
  return a
}

function Qu(a) {
  return du(a, 0) && !(ic && $b && a.ctrlKey)
}
function Ru(a, b, c) {
  c = c || Sb;
  for (var d = 0, e = a.length, f; d < e;) {
    var h = d + e >> 1,
        l;
    l = c(b, a[h]);
    0 < l ? d = h + 1 : (e = h, f = !l)
  }
  return f ? d : ~d
}
function Su(a, b, c) {
  for (var d = a.length, e = cb(a) ? a.split(t) : a, d = d - 1; 0 <= d; d--) if (d in e && b.call(c, e[d], d, a)) return d;
  return -1
}
function Tu(a) {
  return a != n
}
function Uu(a) {
  return a === n
}
function Vu() {
  return ic ? "-webkit" : hc ? "-moz" : J ? "-ms" : gc ? "-o" : n
}
var Yda = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/,
    Wu = {
    thin: 2,
    medium: 4,
    thick: 6
    };

function Xu(a, b) {
  if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : n)) return 0;
  var c = a.currentStyle ? a.currentStyle[b + "Width"] : n;
  return c in Wu ? Wu[c] : zj(a, c)
}
function Yu(a) {
  return "rtl" == mj(a, "direction")
}

function Zu(a) {
  if (J && !rc(9)) {
    var b = Xu(a, "borderLeft"),
        c = Xu(a, "borderRight"),
        d = Xu(a, "borderTop");
    a = Xu(a, "borderBottom");
    return new gj(d, c, a, b)
  }
  b = lj(a, "borderLeftWidth");
  c = lj(a, "borderRightWidth");
  d = lj(a, "borderTopWidth");
  a = lj(a, "borderBottomWidth");
  return new gj(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
}

function $u(a) {
  var b;
  if (a.getBoundingClientRect) b = qj(a), b = new ti(b.left, b.top);
  else {
    b = Zi(wi(a));
    var c = sj(a);
    b = new ti(c.x - b.x, c.y - b.y)
  }
  if (hc && !qc(12)) {
    i: {
      c = xb("transform");
      if (a.style[c] === k && (c = hj() + yb(c), a.style[c] !== k)) {
        c = Vu() + "-transform";
        break i
      }
      c = "transform"
    }
    a = (a = mj(a, c) || mj(a, "transform")) ? (a = a.match(Yda)) ? new ti(parseFloat(a[1]), parseFloat(a[2])) : new ti(0, 0) : new ti(0, 0);a = new ti(b.x + a.x, b.y + a.y)
  } else a = b;
  return a
}
function av(a, b, c, d) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = d
}
B = av.prototype;
B.clone = function() {
  return new av(this.left, this.top, this.width, this.height)
};
B.contains = function(a) {
  return a instanceof av ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
B.ceil = function() {
  this.left = Math.ceil(this.left);
  this.top = Math.ceil(this.top);
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
B.floor = function() {
  this.left = Math.floor(this.left);
  this.top = Math.floor(this.top);
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
B.round = function() {
  this.left = Math.round(this.left);
  this.top = Math.round(this.top);
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};

function bv(a, b) {
  return new ti(a.x - b.x, a.y - b.y)
}
function cv(a) {
  if (a.classList) return a.classList;
  a = a.className;
  return cb(a) && a.match(/\S+/g) || []
}

function dv(a, b) {
  return (b & 4 && Yu(a) ? b ^ 2 : b) & -5
}
function ev(a) {
  var b;
  if (a = a.offsetParent) {
    var c = "HTML" == a.tagName || "BODY" == a.tagName;
    c && "static" == nj(a) || (b = sj(a), c || (c = (c = Yu(a)) && hc ? -a.scrollLeft : !c || J && qc("8") || "visible" == mj(a, "overflowX") ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft, b = bv(b, new ti(c, a.scrollTop))))
  }
  return b || new ti
}
function fv(a) {
  var b = sj(a);
  a = vj(a);
  return new av(b.x, b.y, a.width, a.height)
}

function gv(a) {
  for (var b = new gj(0, Infinity, Infinity, 0), c = wi(a), d = c.Sa().body, e = c.Sa().documentElement, f = Di(c.b); a = rj(a);) if (!(J && 0 == a.clientWidth || ic && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != mj(a, "overflow")) {
    var h = sj(a),
        l;
    l = a;
    if (hc && !qc("1.9")) {
      var q = parseFloat(lj(l, "borderLeftWidth"));
      if (Yu(l)) var r = l.offsetWidth - l.clientWidth - q - parseFloat(lj(l, "borderRightWidth")),
          q = q + r;
      l = new ti(q, parseFloat(lj(l, "borderTopWidth")))
    } else l = new ti(l.clientLeft, l.clientTop);
    h.x += l.x;
    h.y += l.y;
    b.top = Math.max(b.top, h.y);
    b.right = Math.min(b.right, h.x + a.clientWidth);
    b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
    b.left = Math.max(b.left, h.x)
  }
  d = f.scrollLeft;
  f = f.scrollTop;
  b.left = Math.max(b.left, d);
  b.top = Math.max(b.top, f);
  c = Bi(Cu(c));
  b.right = Math.min(b.right, d + c.width);
  b.bottom = Math.min(b.bottom, f + c.height);
  return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : n
}
function hv(a, b, c) {
  var d, e = hc && ($b || cc) && qc("1.9");
  b instanceof ti ? (d = b.x, b = b.y) : (d = b, b = c);
  a.style.left = tj(d, e);
  a.style.top = tj(b, e)
}

function iv(a, b) {
  return a == b ? m : a && b ? a.width == b.width && a.height == b.height : p
}
function jv(a, b) {
  return a.classList ? a.classList.contains(b) : Jb(cv(a), b)
}

function kv(a, b, c, d, e, f, h) {
  a = a.clone();
  var l = 0,
      q = dv(b, c);
  c = vj(b);
  h = h ? h.clone() : c.clone();
  if (d || 0 != q) q & 2 ? a.x -= h.width + (d ? d.right : 0) : d && (a.x += d.left), q & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
  if (f && (e ? (l = a, d = 0, 65 == (f & 65) && (l.x < e.left || l.x >= e.right) && (f &= -2), 132 == (f & 132) && (l.y < e.top || l.y >= e.bottom) && (f &= -5), l.x < e.left && f & 1 && (l.x = e.left, d |= 1), l.x < e.left && l.x + h.width > e.right && f & 16 && (h.width = Math.max(h.width - (l.x + h.width - e.right), 0), d |= 4), l.x + h.width > e.right && f & 1 && (l.x = Math.max(e.right - h.width, e.left), d |= 1), f & 2 && (d = d | (l.x < e.left ? 16 : 0) | (l.x + h.width > e.right ? 32 : 0)), l.y < e.top && f & 4 && (l.y = e.top, d |= 2), l.y <= e.top && l.y + h.height < e.bottom && f & 32 && (h.height = Math.max(h.height - (e.top - l.y), 0), l.y = e.top, d |= 8), l.y >= e.top && l.y + h.height > e.bottom && f & 32 && (h.height = Math.max(h.height - (l.y + h.height - e.bottom), 0), d |= 8), l.y + h.height > e.bottom && f & 4 && (l.y = Math.max(e.bottom - h.height, e.top), d |= 2), f & 8 && (d = d | (l.y < e.top ? 64 : 0) | (l.y + h.height > e.bottom ? 128 : 0)), l = d) : l = 256, l & 496)) return l;
  hv(b, a);
  iv(c, h) || (wi(yi(b)), !J || qc("8") ? (b = b.style, hc ? b.MozBoxSizing = "border-box" : ic ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(h.width, 0) + "px", b.height = Math.max(h.height, 0) + "px") : (a = b.style, e = Bj(b, "padding"), b = Zu(b), a.pixelWidth = h.width - b.left - e.left - e.right - b.right, a.pixelHeight = h.height - b.top - e.top - e.bottom - b.bottom));
  return l
}
function lv(a) {
  if (1 == a.nodeType) return $u(a);
  var b = eb(a.W),
      c = a;
  a.targetTouches ? c = a.targetTouches[0] : b && a.b.targetTouches && (c = a.b.targetTouches[0]);
  return new ti(c.clientX, c.clientY)
}

function mv(a, b) {
  a.classList ? a.classList.remove(b) : jv(a, b) && (a.className = Cb(cv(a), function(a) {
    return a != b
  }).join(" "))
}
function nv(a, b) {
  a.classList ? a.classList.add(b) : jv(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
}
var ov = n,
    pv = n;

function qv(a, b, c, d, e, f, h, l, q) {
  var r = ev(c),
      s = fv(a),
      u = gv(a);
  if (u) {
    var x = new av(u.left, u.top, u.right - u.left, u.bottom - u.top),
        u = Math.max(s.left, x.left),
        z = Math.min(s.left + s.width, x.left + x.width);
    if (u <= z) {
      var A = Math.max(s.top, x.top),
          x = Math.min(s.top + s.height, x.top + x.height);
      A <= x && (s.left = u, s.top = A, s.width = z - u, s.height = x - A)
    }
  }
  u = wi(a);
  z = wi(c);
  if (u.Sa() != z.Sa()) {
    var u = u.Sa().body,
        z = Cu(z),
        A = new ti(0, 0),
        x = Eu(yi(u)),
        G = u;
    do {
      var M = x == z ? sj(G) : $u(G);
      A.x += M.x;
      A.y += M.y
    } while (x && x != z && (G = x.frameElement) && (x = x.parent));
    u = bv(A, sj(u));
    s.left += u.x;
    s.top += u.y
  }
  a = dv(a, b);
  s = new ti(a & 2 ? s.left + s.width : s.left, a & 1 ? s.top + s.height : s.top);
  s = bv(s, r);
  e && (s.x += (a & 2 ? -1 : 1) * e.x, s.y += (a & 1 ? -1 : 1) * e.y);
  var N;
  if (h) if (q) N = q;
  else if (N = gv(c)) N.top -= r.y, N.right -= r.x, N.bottom -= r.y, N.left -= r.x;
  return kv(s, c, d, f, N, h, l)
}
function rv(a, b, c) {
  c ? nv(a, b) : mv(a, b)
}
var Zda = /&([^;\s<&]+);?/g;

function sv(a) {
  return /^[\s\xa0]*$/.test(a)
}

function tv() {
  if (!pv) {
    pv = {};
    ov = {};
    for (var a = 0; 65 > a; a++) pv[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), ov[pv[a]] = a
  }
}
var uv = {
  IMG: " ",
  BR: "\n"
},
    $da = {
    SCRIPT: 1,
    STYLE: 1,
    HEAD: 1,
    IFRAME: 1,
    OBJECT: 1
    },
    vv = /^(https?:\/\/[^/]*)\/calendar(\/((hosted)|(a)|(b))\/[^/]*)?/;

function aea(a) {
  return a.replace(/&([^;]+);/g, function(a, c) {
    switch (c) {
    case "amp":
      return "&";
    case "lt":
      return "<";
    case "gt":
      return ">";
    case "quot":
      return '"';
    default:
      if ("#" == c.charAt(0)) {
        var d = Number("0" + c.substr(1));
        if (!isNaN(d)) return String.fromCharCode(d)
      }
      return a
    }
  })
}

function bea(a) {
  var b = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"'
  },
      c;
  c = Va.document.createElement("div");
  return a.replace(Zda, function(a, e) {
    var f = b[a];
    if (f) return f;
    if ("#" == e.charAt(0)) {
      var h = Number("0" + e.substr(1));
      isNaN(h) || (f = String.fromCharCode(h))
    }
    f || (c.innerHTML = a + " ", f = c.firstChild.nodeValue.slice(0, -1));
    return b[a] = f
  })
}

function wv(a, b, c) {
  if (!(a.nodeName in $da)) if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, t)) : b.push(a.nodeValue);
  else if (a.nodeName in uv) b.push(uv[a.nodeName]);
  else
  for (a = a.firstChild; a;) wv(a, b, c), a = a.nextSibling
}
function xv(a) {
  return (a = a.match(vv)) && "b" == a[3] ? [a[1] + "/calendar", a[2]] : n
}
function yv(a) {
  return sb(a, "&") ? "document" in Va ? bea(a) : aea(a) : a
}
function zv(a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n")
}

function Av(a) {
  var b;
  if (Co) b = Va.atob(a);
  else {
    tv();
    var c = ov;
    b = [];
    for (var d = 0; d < a.length;) {
      var e = c[a.charAt(d++)],
          f = d < a.length ? c[a.charAt(d)] : 0;
      ++d;
      var h = d < a.length ? c[a.charAt(d)] : 64;
      ++d;
      var l = d < a.length ? c[a.charAt(d)] : 64;
      ++d;
      e != n && f != n && h != n && l != n || g(Error());
      b.push(e << 2 | f >> 4);
      64 != h && (b.push(f << 4 & 240 | h >> 2), 64 != l && b.push(h << 6 & 192 | l))
    }
    if (8192 > b.length) b = String.fromCharCode.apply(n, b);
    else {
      a = t;
      for (c = 0; c < b.length; c += 8192) a += String.fromCharCode.apply(n, Qb(b, c, c + 8192));
      b = a
    }
  }
  return b
}

function Bv(a, b, c) {
  if (!b && !c) return n;
  var d = b ? b.toUpperCase() : n;
  return Yi(a, function(a) {
    return (!d || a.nodeName == d) && (!c || cb(a.className) && Jb(a.className.split(/\s+/), c))
  }, m)
}
function Cv(a) {
  if (vi && "innerText" in a) a = zv(a.innerText);
  else {
    var b = [];
    wv(a, b, m);
    a = b.join(t)
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, t);
  a = a.replace(/\u200B/g, t);
  vi || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, t));
  return a
}
function Dv() {
  var a = xv(uf);
  return a ? parseInt(a[1].split("/")[2], 10) : n
}

function Ev(a, b) {
  for (var c = 1; c < arguments.length; c++) {
    var d = arguments[c],
        e;
    if (Za(d) || (e = $a(d)) && Object.prototype.hasOwnProperty.call(d, "callee")) a.push.apply(a, d);
    else if (e) for (var f = a.length, h = d.length, l = 0; l < h; l++) a[f + l] = d[l];
    else a.push(d)
  }
}
function Fv(a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, t)
}
function cea(a) {
  return t + (isNaN(a) ? ga : t + (a % 12 || 12))
}
function dea(a, b) {
  return t + (isNaN(a) ? ga : t + (a % 12 || 12)) + ":" + (isNaN(b) ? ga : (10 > b ? "0" : t) + b) + t
}

function eea(a) {
  return t + (isNaN(a) ? ga : t + (a % 12 || 12)) + (12 > a % 24 ? "am" : "pm")
}
function Gv(a, b) {
  return t + (isNaN(a) ? ga : t + (a % 12 || 12)) + ":" + (isNaN(b) ? ga : (10 > b ? "0" : t) + b) + (12 > a % 24 ? "am" : "pm")
}
function Hv(a, b) {
  var c = isNaN(a) ? ga : t + a;
  2 > c.length && (c = "0" + c);
  return t + c + ":" + (isNaN(b) ? ga : (10 > b ? "0" : t) + b)
}
function Iv(a, b, c, d, e, f) {
  var h = t;
  b && (h = Kl.xd(a, m));
  c && (b && (h += ", "), k === f && (f = !! a.minute), h += (d ? Hv : e ? f ? Gv : eea : f ? dea : cea)(a.hour, a.minute));
  return h
}

function Jv(a) {
  switch (a) {
  case 61:
    return 187;
  case 59:
    return 186;
  case 173:
    return 189;
  case 224:
    return 91;
  case 0:
    return 224;
  default:
    return a
  }
}
function Kv(a, b, c) {
  for (; a;) {
    if (b(a)) return a;
    if (c && a == c) break;
    a = a.parentNode
  }
  return n
}
function Lv(a, b) {
  return !Uu(Yt(a, b))
}
function Mv(a, b) {
  if (!b || 0 != a % 30) return a;
  switch (a) {
  case 0:
    return 0;
  case 30:
    return 25;
  default:
    return a - 10
  }
}
function Nv(a) {
  a = Ph(a);
  return Yg(a.b, "speedyMeetings", a.A.HA)
}
function Ov(a, b, c, d) {
  zb.splice.apply(a, Qb(arguments, 1))
}

function Pv(a, b) {
  for (var c = a.split("%s"), d = t, e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
  return d + c.join("%s")
}
function Qv(a) {
  var b = Mj.M();
  b.forEach(function(c) {
    if (b.Af(c) && p === a(c)) return p
  })
}

function Rv(a, b) {
  var c = Yg(S(R()), Da, "false"),
      d = a instanceof ak,
      e = b;
  if (d) {
    if (!b.equals(a)) {
      var f = Gg(b);
      f.Y--;
      e = f.Ea()
    }
  } else if (a.equals(b)) return Iv(a, m, m, c, m);
  f = a.year !== e.year || a.month !== e.month || a.Y !== e.Y;
  d ? (d = Iv(a, m, p, c, p), f && (d = Sa(d, Iv(e, f, p, c, p)))) : (d = !(!a.minute && !b.minute), f ? d = Sa(Iv(a, m, m, c, m, d), Iv(b, f, m, c, m, d)) : (f = Iv(a, m, p, c, m, d), c = Sa(Iv(a, p, m, c, m, d), Iv(b, p, m, c, m, d)), d = t + f + ", " + c));
  return d
}
function Sv(a, b, c) {
  L.call(this, a, b);
  this.Au = c
}
H(Sv, L);

function Tv(a) {
  if (hc) a = Jv(a);
  else if ($b && ic) t: switch (a) {
  case 93:
    a = 91;
    break t
  }
  return a
}
function Uv(a) {
  if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || ic && 0 == a) return m;
  switch (a) {
  case 32:
  case 63:
  case 107:
  case 109:
  case 110:
  case 111:
  case 186:
  case 59:
  case 189:
  case 187:
  case 61:
  case 188:
  case 190:
  case 191:
  case 192:
  case 222:
  case 219:
  case 220:
  case 221:
    return m;
  default:
    return p
  }
}
function Vv(a, b, c, d) {
  wc.call(this, b);
  this.type = "mousewheel";
  this.detail = a;
  this.da = d
}
H(Vv, wc);

function Wv(a, b) {
  return ic && ($b || bc) && 0 != a % b ? a : a / b
}
function Xv(a) {
  this.b = a
}
Xv.prototype.init = function() {
  this.A || (this.A = m, this.o(this.b))
};

function Yv(a, b) {
  var c = vp(a).B;
  if (!c) return t;
  var d = "u/" + (Dv() || 0) + "/",
      e = Av(b.getId()).split(" ")[0],
      e = Td(a).isEnabled(84) ? Pv("events/c%s", e) : Pv("events/c%s/%s", e, b.mc);
  return c + d + e
}
function Zv(a) {
  a = Yt("ca-evp", a);
  return parseInt(a, 10)
}
function $v(a) {
  return a.contentDocument || a.contentWindow.document
}

function aw(a, b) {
  a.classList ? Bb(b, function(b) {
    mv(a, b)
  }) : a.className = Cb(cv(a), function(a) {
    return !Jb(b, a)
  }).join(" ")
}
function bw(a, b) {
  if (a.classList) Bb(b, function(b) {
    nv(a, b)
  });
  else {
    var c = {};
    Bb(cv(a), function(a) {
      c[a] = m
    });
    Bb(b, function(a) {
      c[a] = m
    });
    a.className = t;
    for (var d in c) a.className += 0 < a.className.length ? " " + d : d
  }
}
function cw(a) {
  a = Ph(a);
  return Xg(a.b, "defaultEventLength", a.A.FA)
}
function dw(a) {
  L.call(this, v);
  this.o = a
}
H(dw, L);

function fea(a) {
  Rq(a).b(ya, function() {
    gea(a);
    ew.show()
  })
}

function fw() {
  Gt.P(new L("I"))
}
var gw = k,
    hw = k;

function iw(a, b, c, d, e) {
  function f(a) {
    a && (a.tabIndex = 0, Dj(a, "tab"), nv(a, "goog-zippy-header"), a && h.H.I(a, "click", h.K), a && h.F.I(a, "keydown", h.X))
  }
  P.call(this);
  this.D = e || wi();
  this.o = this.D.G(a) || n;
  this.B = this.D.G(d || n);
  this.A = (this.C = eb(b) ? b : n) || !b ? n : this.D.G(b);
  this.b = c == m;
  this.F = new Q(this);
  this.H = new Q(this);
  var h = this;
  f(this.o);
  f(this.B);
  jw(this, this.b)
}
H(iw, P);
iw.prototype.L = function() {
  iw.J.L.call(this);
  K(this.F);
  K(this.H)
};
iw.prototype.collapse = function() {
  jw(this, p)
};

function jw(a, b) {
  a.A ? U(a.A, b) : b && a.C && (a.A = a.C());
  a.A && nv(a.A, "goog-zippy-content");
  a.B ? (U(a.o, !b), U(a.B, b)) : a.o && (rv(a.o, "goog-zippy-expanded", b), rv(a.o, "goog-zippy-collapsed", !b), Ej(a.o, "expanded", b));
  a.b = b;
  a.P(new Sv("toggle", a, a.b))
}
iw.prototype.X = function(a) {
  if (13 == a.keyCode || 32 == a.keyCode) jw(this, !this.b), this.P(new L("action", this)), a.preventDefault(), a.stopPropagation()
};
iw.prototype.K = function() {
  jw(this, !this.b);
  this.P(new L("action", this))
};

function hea(a, b, c, d, e) {
  if (!(J || ic && qc("525"))) return m;
  if ($b && e) return Uv(a);
  if (e && !d) return p;
  db(b) && (b = Tv(b));
  if (!c && (17 == b || 18 == b || $b && 91 == b)) return p;
  if (ic && d && c) switch (a) {
  case 220:
  case 219:
  case 221:
  case 192:
  case 186:
  case 189:
  case 187:
  case 188:
  case 190:
  case 191:
  case 192:
  case 222:
    return p
  }
  if (J && d && b == a) return p;
  switch (a) {
  case 13:
    return m;
  case 27:
    return !ic
  }
  return Uv(a)
}

function kw(a, b) {
  P.call(this);
  this.V = a;
  var c = Ri(this.V) ? this.V : this.V ? this.V.body : n;
  c && Yu(c);
  this.b = O(this.V, hc ? "DOMMouseScroll" : "mousewheel", this, b)
}
H(kw, P);
kw.prototype.handleEvent = function(a) {
  var b = 0,
      c = 0,
      d = 0;
  a = a.b;
  if ("mousewheel" == a.type) {
    c = 1;
    if (J || ic && (ac || qc("532.0"))) c = 40;
    d = Wv(-a.wheelDelta, c);
    C(a.wheelDeltaX) ? (b = Wv(-a.wheelDeltaX, c), c = Wv(-a.wheelDeltaY, c)) : c = d
  } else d = a.detail, 100 < d ? d = 3 : -100 > d && (d = -3), C(a.axis) && a.axis === a.HORIZONTAL_AXIS ? b = d : c = d;
  db(this.o) && Zd(b, -this.o, this.o);
  db(this.A) && (c = Zd(c, -this.A, this.A));
  b = new Vv(d, a, 0, c);
  this.P(b)
};
kw.prototype.L = function() {
  kw.J.L.call(this);
  ad(this.b);
  this.b = n
};

function lw(a) {
  P.call(this);
  this.V = a;
  a = J ? "focusout" : "blur";
  this.b = O(this.V, J ? "focusin" : "focus", this, !J);
  this.o = O(this.V, a, this, !J)
}
H(lw, P);
lw.prototype.handleEvent = function(a) {
  var b = new wc(a.b);
  b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
  this.P(b)
};
lw.prototype.L = function() {
  lw.J.L.call(this);
  ad(this.b);
  ad(this.o);
  delete this.V
};

function mw(a) {
  switch (a) {
  case "list":
    return "Agenda";
  case "custom,2":
    return "2 Days";
  case "custom,3":
    return "3 Days";
  case "custom,4":
    return "4 Days";
  case "custom,5":
    return "5 Days";
  case "custom,6":
    return "6 Days";
  case "custom,7":
    return "7 Days";
  case "custom,14":
    return "2 Weeks";
  case "custom,21":
    return "3 Weeks";
  case "custom,28":
    return "4 Weeks";
  case "day":
    return "Day";
  case "month":
    return "Month";
  case "parallel":
    return "Day";
  case "week":
    return "Week";
  default:
    return "Search Results"
  }
}
function nw() {
  this.b = []
}
nw.prototype.set = function(a, b, c, d) {
  this.b.push(arguments);
  return this
};

function ow() {
  return $q() && !! gbar.qfgq
}
function pw() {
  return $q() && !! gbar.qfgf
}
function qw(a) {
  if (a = "string" == typeof a ? W(a) : a) try {
    if (a.focus(), "INPUT" == a.tagName && ("text" == a.type || "password" == a.type)) {
      var b = window;
      if (C(a.selectionEnd) && C(a.selectionStart)) a.selectionStart = 0, a.selectionEnd = 0;
      else if (b.document.selection && a.createTextRange) {
        var c = a.createTextRange();
        c.collapse(m);
        c.move("character", 0);
        c.select()
      }
    }
  } catch (d) {}
}

function rw(a, b) {
  return zo(a) && b.Aa() == Sh(a) ? !! Yv(a, b) : p
}
function sw(a, b) {
  var c = Yv(a, b);
  c && window.open(c, "_blank")
}
function tw(a, b, c, d) {
  oo.call(this, a, b, c, p, d)
}
H(tw, oo);
tw.prototype.K = function(a, b, c, d, e, f) {
  a = a.event;
  b = a.Fa();
  uw(this, a, f, d, p, b)
};
tw.prototype.H = function(a, b, c, d, e, f) {
  a = a.event;
  b = a.Za();
  b = Mg(Lg(b), -1);
  uw(this, a, f, p, e, b)
};
tw.prototype.D = function(a, b, c, d, e, f) {
  this.A || (e = d = p);
  tw.J.D.call(this, a, b, c, d, e, f)
};

function uw(a, b, c, d, e, f) {
  var h = t,
      l = "wk-sideevents";
  if (e || d) if (f = a.B.Jm(f), a.A && f) l = d ? "wk-sideeventsb" : "wk-sideeventsa", h = f;
  else if (!a.A) {
    h = a.o.Ck(b);
    b = (b = ji(b)) ? b : h.A;
    h = t;
    d && (c += " wk-more-prealign", h = "st-ad-mpad");
    var q = hg(f),
        h = ko(a.C, f, q, b, t, c, uo(d, e, b), h)
  }
  a = a.b;
  a.push("<td class=" + l + ">");
  a.push(h);
  a.push("</td>")
}
function iea(a) {
  var b = Fu("div", "rszr-icon-hover", a);
  if (b = b && b[0]) b.className = "rszr-icon";
  gn(a, "chip-hover")
}

function jea(a) {
  var b = Fu("div", "rszr-icon", a);
  if (b = b && b[0]) b.className = "rszr-icon-hover";
  en(a, "chip-hover")
}
function vw(a) {
  a.style.textDecoration = t
}
function ww(a) {
  a.style.textDecoration = "underline";
  a.style.cursor = "pointer"
}
function xw(a) {
  a = Yt("ca-elp", a);
  return parseInt(a, 10)
}
function kea(a) {
  return Yi(a, F(Lv, "ca-mlp"), m)
}
function yw(a) {
  return {
    aI: !a.firstChild,
    element: a,
    $x: Zv(a)
  }
}
function zw(a, b) {
  return Kv(b, F(Lv, "ca-evp"), a)
}
function Aw(a) {
  a = Yt("ca-cdp", a);
  return dk(parseInt(a, 10))
}

function Bw(a) {
  return Lv("ca-cdp", a) ? a : n
}
function Cw(a, b) {
  this.start = a;
  this.end = b;
  try {
    this.duration = Yf(this.end, this.start)
  } catch (c) {
    this.duration = n
  }
}
Cw.prototype.toString = function() {
  return this.start + "/" + this.end
};
Cw.prototype.equals = function(a) {
  return !!a && this.constructor === a.constructor && this.start.equals(a.start) && this.end.equals(a.end)
};

function Dw(a, b, c) {
  c = c ? n : a.getElementsByTagName("*");
  if (yj) {
    if (b = b ? "none" : t, a.style[yj] = b, c) {
      a = 0;
      for (var d; d = c[a]; a++) d.style[yj] = b
    }
  } else if (J || gc) if (b = b ? "on" : t, a.setAttribute("unselectable", b), c) for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
}

function Ew(a, b) {
  var c = wi(b),
      d = n,
      e = c.Sa();
  if (J && e.createStyleSheet) c = d = e.createStyleSheet(), J && C(c.cssText) ? c.cssText = a : c.innerHTML = a;
  else {
    e = Pt(c, "head")[0];
    e || (d = Pt(c, "body")[0], e = c.U("head"), d.parentNode.insertBefore(e, d));
    var f = d = c.U("style");
    J && C(f.cssText) ? f.cssText = a : f.innerHTML = a;
    c.appendChild(e, d)
  }
}
function Fw(a, b, c) {
  b instanceof ui ? (c = b.height, b = b.width) : c == k && g(Error("missing height argument"));
  a.style.width = tj(b, m);
  uj(a, c)
}

function Gw(a, b, c) {
  var d = sj(a);
  b instanceof ti && (c = b.y, b = b.x);
  hv(a, a.offsetLeft + (b - d.x), a.offsetTop + (c - d.y))
}
function Hw(a) {
  try {
    return a && a.activeElement
  } catch (b) {}
  return n
}
function Iw(a) {
  var b = [];
  wv(a, b, p);
  return b.join(t)
}
function Jw(a, b) {
  var c = [];
  Vi(a, b, c, p);
  return c
}
function Kw(a) {
  return bu(document, a)
}
function Lw(a, b) {
  var c = a.x - b.x,
      d = a.y - b.y;
  return c * c + d * d
}
function Mw(a) {
  var b = cw(a);
  return Mv(b, Nv(a))
}
function Nw(a, b) {
  return new Qg(a.year, a.month, a.Y, b.hour, b.minute, b.second)
}

function Ow(a) {
  return a ? "//calendar.google.com/googlecalendar/images/" + a : "//calendar.google.com/googlecalendar/"
}
function Pw(a, b) {
  P.call(this);
  this.B = (Nf++).toString(36);
  this.A = b || Pu;
  this.o = this.b = this.X = this.A(a)
}
H(Pw, P);
B = Pw.prototype;
B.Vr = 0;
B.Ba = function() {
  return !this.aj(this.b)
};
B.Ow = function() {
  return 0 < this.Vr
};
B.Eb = function() {
  this.Vr++
};
B.xb = function() {
  this.Vr--;
  Qw(this)
};
B.Ad = function(a) {
  this.X = this.A(a);
  Qw(this)
};

function Qw(a) {
  if (!a.Vr && !a.aj(a.o)) {
    var b = new dw(a.o);
    a.o = a.X;
    a.P(b)
  }
}
B.equals = function(a) {
  return this === a || !! a && this.aj(a.X)
};
B.aj = function(a) {
  var b = this.X;
  return b === a || b && a && b.equals && a.equals && a.equals(b) ? m : p
};
B.getKey = w("B");

function Rw() {
  return Rh(R()).getName()
}
function Sw() {
  return Rh(R()).getName() != n
}
function Tw(a) {
  if (a) if (yc(a)) a.Qd && Qc(a.Qd);
  else if (a = Xc(a)) {
    var b = 0,
        c;
    for (c in a.b) for (var d = a.b[c].concat(), e = 0; e < d.length; ++e) ad(d[e]) && ++b
  }
}
function Uw(a) {
  var b = {},
      c;
  for (c in a) b[a[c]] = c;
  return b
}
function Vw(a, b, c) {
  return b in a ? a[b] : c
}

function Ww(a, b, c) {
  b in a && g(Error('The object already contains the key "' + b + '"'));
  a[b] = c
}
function Xw(a) {
  a.preventDefault()
}
function Yw(a) {
  a.stopPropagation()
}
function Zw(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, t)
}
function $w() {
  this.b = n
}
Xa($w);

function ax(a) {
  var b = $w.M().b;
  b && b.tT(a)
}
function bx() {
  window.setTimeout(function() {
    var a = R();
    Rq(a).b(Fa, function() {
      cx()
    })
  }, 0)
}

function dx(a, b) {
  var c = ["hl", "en", "gadgeturl", a, "gadgetpermissions", parseInt(b || 0, 10)],
      d = R(),
      e = Ir(d),
      e = E(e.Ka, e),
      f = Hr(d, "Failed to add gadget.");
  Cf(Af(d), "gadgets", c, 19, e, f)
};

function ex(a, b) {
  P.call(this);
  this.ja = new Q(this);
  this.Hi(a || n);
  b && (this.Cl = b)
}
H(ex, P);
B = ex.prototype;
B.V = n;
B.tE = m;
B.jE = n;
B.Dj = p;
B.Kw = -1;
B.Jw = -1;
B.vE = p;
B.hp = m;
B.Cl = "toggle_display";
B.getType = w("Cl");
B.G = w("V");
B.Hi = function(a) {
  fx(this);
  this.V = a
};

function gx(a, b) {
  fx(a);
  a.tE = b
}
function hx(a) {
  fx(a);
  a.vE = m
}
function fx(a) {
  a.Dj && g(Error("Can not change this state of the popup while showing."))
}
B.Da = w("Dj");

function ix(a) {
  return a.Dj || 150 > ib() - a.Jw
}
B.setVisible = function(a) {
  this.C && this.C.stop();
  this.D && this.D.stop();
  if (a) {
    if (!this.Dj && this.Av()) {
      this.V || g(Error("Caller must call setElement before trying to show the popup"));
      this.Ua();
      a = yi(this.V);
      this.vE && this.ja.I(a, "keydown", this.yV, m);
      if (this.tE) if (this.ja.I(a, "mousedown", this.uE, m), J) {
        var b;
        try {
          b = a.activeElement
        } catch (c) {}
        for (; b && "IFRAME" == b.nodeName;) {
          try {
            var d = $v(b)
          } catch (e) {
            break
          }
          a = d;
          b = a.activeElement
        }
        this.ja.I(a, "mousedown", this.uE, m);
        this.ja.I(a, "deactivate", this.wE)
      } else this.ja.I(a, "blur", this.wE);
      "toggle_display" == this.Cl ? (this.V.style.visibility = "visible", U(this.V, m)) : "move_offscreen" == this.Cl && this.Ua();
      this.Dj = m;
      this.Kw = ib();
      this.Jw = -1;
      this.C ? (Zc(this.C, "end", this.xE, p, this), this.C.rf()) : this.xE()
    }
  } else jx(this)
};
B.Ua = D;

function jx(a, b) {
  if (!a.Dj || !a.P({
    type: "beforehide",
    target: b
  })) return p;
  a.ja && Yd(a.ja);
  a.Dj = p;
  a.Jw = ib();
  a.D ? (Zc(a.D, "end", F(a.oF, b), p, a), a.D.rf()) : a.oF(b);
  return m
}
B.oF = function(a) {
  "toggle_display" == this.Cl ? this.OX() : "move_offscreen" == this.Cl && (this.V.style.top = "-10000px");
  this.Wv(a)
};
B.OX = function() {
  this.V.style.visibility = "hidden";
  U(this.V, p)
};
B.Av = function() {
  return this.P("beforeshow")
};
B.xE = function() {
  this.P("show")
};
B.Wv = function(a) {
  this.P({
    type: "hide",
    target: a
  })
};
B.uE = function(a) {
  a = a.target;
  Si(this.V, a) || lea(this, a) || 150 > ib() - this.Kw || jx(this, a)
};
B.yV = function(a) {
  27 == a.keyCode && jx(this, a.target) && (a.preventDefault(), a.stopPropagation())
};
B.wE = function(a) {
  if (this.hp) {
    var b = yi(this.V);
    if ("undefined" != typeof document.activeElement) {
      if (a = b.activeElement, !a || Si(this.V, a) || "BODY" == a.tagName) return
    } else if (a.target != b) return;
    150 > ib() - this.Kw || jx(this)
  }
};

function lea(a, b) {
  return Eb(a.jE || [], function(a) {
    return b === a || Si(a, b)
  })
}
B.L = function() {
  ex.J.L.call(this);
  this.ja.aa();
  K(this.C);
  K(this.D);
  delete this.V;
  delete this.ja;
  delete this.jE
};

function kx(a, b) {
  this.ea = 4;
  this.W = b || k;
  ex.call(this, a)
}
H(kx, ex);
kx.prototype.Ua = function() {
  if (this.W) {
    var a = !this.Da() && "move_offscreen" != this.getType(),
        b = this.G();
    a && (b.style.visibility = "hidden", U(b, m));
    this.W.Ua(b, this.ea, this.yr);
    a && U(b, p)
  }
};

function lx(a, b, c) {
  this.X = a;
  this.D = new pr(this);
  this.b = Ze(Ye.M());
  this.A = b || 1001;
  this.o = wi(a);
  this.B = !! c
}
H(lx, uc);
B = lx.prototype;
B.V = n;
B.le = n;
B.ra = n;
B.Ob = 400;
B.gu = 0;
B.iu = 0;
B.hq = p;
B.ou = n;
B.sj = n;
B.An = p;
B.L = function() {
  this.D.aa();
  K(this.ra);
  lx.J.L.call(this)
};
B.init = function() {
  if (!this.V) {
    var a;
    this.B ? (mx.put("id", this.b), mx.put("zIndex", this.A), nx.put("id", this.b), mx.put("prong", nx.toString()), a = mx.toString()) : (a = this.D.b(this.Ka), ox.put("id", this.b), ox.put("zIndex", this.A), ox.put("closeHandler", a), px.put("id", this.b), px.put("closeHandler", a), ox.put("cornerT1", qx(this, "tl")), ox.put("cornerT2", qx(this, "tr")), ox.put("cornerB1", qx(this, "bl")), ox.put("cornerB2", qx(this, "br")), ox.put("prong", px.toString()), a = ox.toString());
    a = Du(this.o, a);
    this.V = this.X.appendChild(a);
    this.V.style.width = this.Ob + "px";
    this.le = this.o.G("prong" + this.b);
    this.ra = new kx(this.V);
    gx(this.ra, m);
    hx(this.ra);
    this.ra.hp = p;
    this.B && O(this.o.G("bubbleClose" + this.b), "click", this.Ka, p, this);
    O(this.ra, "beforehide", E(this.hJ, this));
    O(this.ra, "hide", E(this.oy, this))
  }
};

function rx(a, b) {
  a.Ob = b;
  a.V && (a.V.style.width = b + "px")
}
B.G = w("V");

function qx(a, b) {
  sx.put("id", a.b);
  sx.put("pos", b);
  return sx.toString()
}

function tx(a, b, c) {
  var d = a.left + 10,
      e = a.top + a.height - 10,
      f = a.top + 10;
  return new gj(d, Math.max(a.left + a.width - 10 - b, d), Math.max(e - c, f), f)
}
B.render = function(a, b, c, d, e, f, h) {
  var l = this.o.G("bubbleContent" + this.b);
  if (l) if (cb(c)) {
    for (l.innerHTML = "<pre>" + c + "</pre>"; l.firstChild.firstChild;) l.appendChild(l.firstChild.firstChild);
    l.removeChild(l.firstChild)
  } else this.oy(), l.innerHTML = t, this.ou = c, c.render(l);
  U(this.o.G("bubbleClose" + this.b), !e);
  d && ux(this, d);
  this.gu = a;
  this.iu = b;
  this.hq = !f;
  this.C = c.event && c.event.oc ? c.event.oc() : p;
  this.B && (a = this.o.G("bubblePromo" + this.b), U(a, !! h), h && (h.render(a), this.H = h));
  this.Ua(m);
  this.ra.setVisible(m)
};
B.Ua = function(a) {
  if (this.B) {
    this.hq && (this.le.style.display = "block");
    this.V.style.display = "block";
    var b = this.gu,
        c = this.iu,
        d = this.V.offsetWidth,
        e = this.le.offsetWidth;
    a = Math.round((this.Ob - e) / 2);
    var f = Bi(Cu(this.o)),
        f = new gj(0, f.width, f.height, 0),
        h = this.V.offsetHeight + this.le.offsetHeight - 1,
        l = c - h - 2,
        q = "bottom-prong";
    l < f.top && (l = c + 2, q = "top-prong");
    c = p;
    if (l + h > f.bottom || l < f.top) l = 0, c = m;
    if (!this.hq || c || this.C && l - 220 < f.top) q = "no-prong", this.C && (l = 220);
    c = b - a;
    c + d > f.right && (c = f.right - d, a = Math.min(d - e, b - c));
    this.le.style.display = t;
    this.le.style.left = a - e / 2 + "px";
    this.le.className = q;
    this.V.style.left = c + "px";
    this.V.style.top = l + "px";
    en(this.V, "has-" + q)
  } else t: {
    d = this.gu;
    b = this.iu;
    this.V.style.display = "block";
    this.le.style.display = "block";
    f = Math.round(.4 * this.Ob - .6 * this.le.offsetWidth);
    e = Bi(Cu(this.o));
    e = new av(0, 0, e.width, e.height);
    q = this.V.offsetHeight + this.le.offsetHeight - 1;
    l = tx(e, this.Ob, q);
    q = b - q;
    Zd(q, l.top, l.bottom) != q ? l = n : (c = d - f, l = Zd(c, l.left, l.right) != c ? n : new ti(c, q));
    if (l && this.hq) this.le.style.left =
    f + "px";
    else {
      this.le.style.display = "none";
      if (!a) break t;
      f = this.Ob;
      a = this.V.offsetHeight;
      e = tx(e, f, a);
      d = Zd(d - f / 2, e.left, e.right);
      a = b - a - 10;
      a < e.top && (a = b + 10);
      b = Zd(a, e.top, e.bottom);
      l = new ti(d, b)
    }
    Gw(this.V, l.x, l.y)
  }
};

function ux(a, b) {
  Zc(a.ra, "beforehide", b)
}
B.Ka = function() {
  this.ra && this.ra.setVisible(p)
};
B.hJ = function() {
  J && document.activeElement && Si(this.V, document.activeElement) && document.body.focus()
};
B.oy = function() {
  K(this.ou);
  delete this.ou;
  K(this.H);
  delete this.H
};
B.Da = function() {
  return !(!this.ra || !this.ra.Da())
};
var sx = new V('<div class="bubble-corner" id="${pos}${id}"><div class="bubble-sprite bubble-${pos}"></div></div>'),
    px = new V('<div class="prong" id="prong${id}" onclick="${closeHandler}()"><div class="bubble-sprite"></div></div>'),
    ox = new V('<div style="display:none;z-index:${zIndex}" class="bubble"><table cellpadding=0 cellspacing=0 class="bubble-table"><tr><td class="bubble-cell-side">${cornerT1}<td class="bubble-cell-main"><div class="bubble-top"></div><td class="bubble-cell-side">${cornerT2}<tr><td colspan=3 class="bubble-mid"><div style="overflow:hidden" id="bubbleContent${id}"></div><tr><td>${cornerB1}<td><div class="bubble-bottom"></div><td>${cornerB2}</table><div id="bubbleClose${id}" class="bubble-closebutton" onclick="${closeHandler}();"></div>${prong}</div>'),
    mx =
    new V('<div style="z-index:${zIndex};display:none" class=bubble><div id="bubblePromo${id}"></div><div class=bubblemain><div id=bubbleClose${id} class=bubbleclose></div><div class=bubblecontent id="bubbleContent${id}"></div>${prong}</div></div>'),
    nx = new V("<div id=prong${id} class=no-prong><div class=prong-dk></div><div class=prong-lt></div></div>");

function vx(a) {
  this.b = new lx(document.body, k, m);
  this.o = {};
  rx(this.b, 400);
  this.b.init();
  this.ja = new Q(this.b);
  var b = vp(a);
  this.ja.I(b, "n", this.b.Ka);
  b = Jp.M();
  this.ja.I(b, "p", this.b.Ka);
  a = Ir(a);
  this.ja.I(this.b.ra, "show", E(a.Ka, a, k));
  this.ja.I(this.b.ra, "hide", F(ax, n))
}
function wx(a) {
  return a.b
}
vx.prototype.Ld = function() {
  return this.b.Da() ? this.o.Li : n
};

function xx(a, b, c, d, e, f, h) {
  var l = fp(),
      q = a.b;
  if (q = !(q.ra && ix(q.ra) && b && a.o.Li == b)) {
    a.b.Ka();
    var r = ru(Yp, b),
        s;
    s = a.b;
    var u = Hp;
    s = s.K && r ? s.K.b(r, s, u) : k;
    a.o.Li = b;
    a.b.render(c.x, c.y, d, e, f, h, s);
    l.b("ShowBubbleFor" + (b ? "CreateEvent" : "EventDetails"));
    r && ax(r)
  }
  return q
}
function yx(a) {
  return Jd(a, 801)
};
Ou(801, function(a) {
  return new vx(a)
});

function Y(a) {
  P.call(this);
  this.b = a || wi();
  this.Sg = mea;
  this.$b = n;
  this.xa = p;
  this.V = n;
  this.Lh = k;
  this.Ia = this.D = this.X = this.Cc = n;
  this.Oj = p
}
H(Y, P);
Y.prototype.Co = Ye.M();
var mea = n;

function zx(a, b) {
  switch (a) {
  case 1:
    return b ? "disable" : "enable";
  case 2:
    return b ? "highlight" : "unhighlight";
  case 4:
    return b ? "activate" : "deactivate";
  case 8:
    return b ? "select" : "unselect";
  case 16:
    return b ? "check" : "uncheck";
  case 32:
    return b ? "focus" : "blur";
  case 64:
    return b ? "open" : "close"
  }
  g(Error("Invalid component state"))
}
B = Y.prototype;
B.getId = function() {
  return this.$b || (this.$b = Ze(this.Co))
};

function Ax(a, b) {
  a.X && a.X.Ia && (Gc(a.X.Ia, a.$b), Ww(a.X.Ia, b, a));
  a.$b = b
}
B.G = w("V");
B.Qa = Qa(16);

function Z(a) {
  a.Lh || (a.Lh = new Q(a));
  return a.Lh
}
function Bx(a, b) {
  a == b && g(Error("Unable to set parent component"));
  b && a.X && a.$b && Cx(a.X, a.$b) && a.X != b && g(Error("Unable to set parent component"));
  a.X = b;
  Y.J.qd.call(a, b)
}
B.getParent = w("X");
B.qd = function(a) {
  this.X && this.X != a && g(Error("Method not supported"));
  Y.J.qd.call(this, a)
};
B.ia = function() {
  this.V = this.b.createElement("div")
};
B.render = function(a) {
  Dx(this, a)
};

function Dx(a, b, c) {
  a.xa && g(Error("Component already rendered"));
  a.V || a.ia();
  b ? b.insertBefore(a.V, c || n) : a.b.Sa().body.appendChild(a.V);
  a.X && !a.X.xa || a.$()
}
function Px(a, b) {
  a.xa && g(Error("Component already rendered"));
  if (b && a.rb(b)) {
    a.Oj = m;
    var c = yi(b);
    a.b && a.b.Sa() == c || (a.b = wi(b));
    a.Ya(b);
    a.$()
  } else g(Error("Invalid element to decorate"))
}
B.rb = y(m);
B.Ya = Oa("V");
B.$ = function() {
  this.xa = m;
  Qx(this, function(a) {
    !a.xa && a.G() && a.$()
  })
};
B.Na = function() {
  Qx(this, function(a) {
    a.xa && a.Na()
  });
  this.Lh && Yd(this.Lh);
  this.xa = p
};
B.L = function() {
  this.xa && this.Na();
  this.Lh && (this.Lh.aa(), delete this.Lh);
  Qx(this, function(a) {
    a.aa()
  });
  !this.Oj && this.V && Li(this.V);
  this.X = this.Cc = this.V = this.Ia = this.D = n;
  Y.J.L.call(this)
};
B.oa = function(a) {
  return this.getId() + "." + a
};
B.mf = Qa(74);
B.Qq = Qa(75);
B.fa = function(a) {
  this.xa || g(Error("Operation not supported while component is not in document"));
  return this.b.G(this.oa(a))
};
B.ha = function(a, b) {
  this.On(a, Rx(this), b)
};
B.On = function(a, b, c) {
  !a.xa || !c && this.xa || g(Error("Component already rendered"));
  (0 > b || b > Rx(this)) && g(Error("Child component index out of bounds"));
  this.Ia && this.D || (this.Ia = {}, this.D = []);
  if (a.getParent() == this) {
    var d = a.getId();
    this.Ia[d] = a;
    Mb(this.D, a)
  } else Ww(this.Ia, a.getId(), a);
  Bx(a, this);
  Ov(this.D, b, 0, a);
  a.xa && this.xa && a.getParent() == this ? (c = this.Ab(), c.insertBefore(a.G(), c.childNodes[b] || n)) : c ? (this.V || this.ia(), b = Sx(this, b + 1), Dx(a, this.Ab(), b ? b.V : n)) : this.xa && !a.xa && a.V && a.V.parentNode && 1 == a.V.parentNode.nodeType && a.$()
};
B.Ab = w("V");

function Tx(a) {
  a.Sg == n && (a.Sg = Yu(a.xa ? a.V : a.b.Sa().body));
  return a.Sg
}
function Rx(a) {
  return a.D ? a.D.length : 0
}
function Cx(a, b) {
  return a.Ia && b ? Vw(a.Ia, b) || n : n
}
function Sx(a, b) {
  return a.D ? a.D[b] || n : n
}
function Qx(a, b, c) {
  a.D && Bb(a.D, b, c)
}
B.removeChild = function(a, b) {
  if (a) {
    var c = cb(a) ? a : a.getId();
    a = Cx(this, c);
    c && a && (Gc(this.Ia, c), Mb(this.D, a), b && (a.Na(), a.V && Li(a.V)), Bx(a, n))
  }
  a || g(Error("Child is not in parent component"));
  return a
};

function Ux(a, b, c, d) {
  Y.call(this, b.b);
  Ax(this, a);
  this.B = b;
  this.mj = d !== p;
  this.F = c
}
H(Ux, Y);
B = Ux.prototype;
B.LF = 0;
B.zt = p;
B.Ko = p;
B.Dw = n;
B.Xb = n;
B.setTitle = function(a) {
  this.F = a;
  this.C && (this.C.innerHTML = I(this.F))
};

function Vx(a, b) {
  a.LF = b ? b : 0;
  a.P("L")
}
B.getHeight = w("LF");

function Wx(a, b) {
  a.mj != b && (a.mj = b, a.Xb ? jw(a.Xb, b) : a.G() && Xx(a), a.P(b ? "K" : "J"))
}
B.rX = function() {
  this.mj = this.Xb.b;
  Xx(this)
};

function Xx(a) {
  Yx(a);
  a.P("L");
  a.P(a.mj ? "K" : "J")
}

function Yx(a) {
  a.Md.parentNode.className = "sng-wrapper" + (a.mj ? t : " sng-closed")
}
B.qp = function() {
  var a = this.Dw ? this.Dw.call(n) : this.getHeight();
  this.Md.style.height = a ? a + "px" : t
};
B.getContent = w("B");
var Zx = new V('<div class="sng-frame"><h2 class="sng-title-bar">${remove}<div class="sng-zippy zippy-arrow">&nbsp;</div> <div class="sng-title">&nbsp;</div></h2><div><div class="sng-content"></div></div></div>');
B = Ux.prototype;
B.ia = function() {
  var a = this.b;
  Zx.put("remove", this.Ko ? '<div class="sng-remove sng-remove-disabled" title="This gadget is auto-installed for your domain and cannot be removed."></div>' : this.o ? '<div class="sng-remove"></div>' : t);
  this.V = Du(a, Zx.toString());
  var b = this.G(),
      c = this.By = Pt(a, k, "sng-title-bar", b)[0];
  this.C = Pt(a, k, "sng-title", b)[0];
  this.Md = Pt(a, k, "sng-content", b)[0];
  if (this.o || this.Ko) this.A = Pt(a, k, "sng-remove", b)[0];
  this.ha(this.B, m);
  Yx(this);
  this.qp();
  this.C && (this.C.innerHTML = I(this.F));
  $x(this);
  O(this, "L", this.qp);
  this.o ? Z(this).I(this.A, "click", this.gI) : this.Ko && Z(this).I(this.A, "click", Yw);
  Dw(c, m)
};
B.gI = function(a) {
  a.stopPropagation();
  this.o.call(n)
};
B.Ab = w("Md");
B.L = function() {
  K(this.Xb);
  Ux.J.L.call(this)
};
B.vF = m;

function $x(a) {
  a.Xb = new iw(a.By, k, a.mj);
  Z(a).I(a.Xb, "toggle", a.rX)
};

function ay(a, b) {
  this.D = a;
  this.b = b
}
ay.prototype.A = n;
var by = ay.prototype.o = n;
ay.prototype.B = function() {
  this.A = new cy;
  var a = new Ux("customGadgetsPane", this.A, "Add gadget by URL", m);
  Vx(a, 32);
  a.zt = p;
  a.P("L");
  var b = E(this.C, this);
  a.o = b;
  dy(this.b, a, 0);
  this.o = a;
  this.b.enable()
};
ay.prototype.C = function() {
  ey(this.b, this.o);
  K(this.o);
  K(this.A);
  this.D.set("customGadgetsPane", "false");
  this.D.jb()
};

function cy() {
  Y.call(this);
  this.A = new pr(this)
}
H(cy, Y);
cy.prototype.ia = function() {
  var a = '<form autocomplete="off" id=gadgetaddform onsubmit="' + this.A.b(this.B) + '();return false" style="width:auto"><input id=gadgetaddbox>&nbsp;<input id=gadgetadd type=submit value="Add"></form>',
      b = this.b.createElement("div");
  b.innerHTML = a;
  this.V = b
};
cy.prototype.$ = function() {
  cy.J.$.call(this);
  this.o = new fy("Gadget URL");
  Px(this.o, W("gadgetaddbox"))
};
cy.prototype.B = function() {
  var a = this.o && this.o.Ca();
  a && dx(a)
};
cy.prototype.L = function() {
  this.o.aa();
  cy.J.L.call(this)
};

function gy(a, b) {
  P.call(this);
  a && hy(this, a, b)
}
H(gy, P);
B = gy.prototype;
B.V = n;
B.ss = n;
B.kx = n;
B.ts = n;
B.Ae = -1;
B.Nh = -1;
B.qw = p;
var iy = {
  3: 13,
  12: 144,
  63232: 38,
  63233: 40,
  63234: 37,
  63235: 39,
  63236: 112,
  63237: 113,
  63238: 114,
  63239: 115,
  63240: 116,
  63241: 117,
  63242: 118,
  63243: 119,
  63244: 120,
  63245: 121,
  63246: 122,
  63247: 123,
  63248: 44,
  63272: 46,
  63273: 36,
  63275: 35,
  63276: 33,
  63277: 34,
  63289: 144,
  63302: 45
},
    jy = {
    Up: 38,
    Down: 40,
    Left: 37,
    Right: 39,
    Enter: 13,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    "U+007F": 46,
    Home: 36,
    End: 35,
    PageUp: 33,
    PageDown: 34,
    Insert: 45
    },
    nea = J || ic && qc("525"),
    ky = $b && hc;
B = gy.prototype;
B.LX = function(a) {
  ic && (17 == this.Ae && !a.ctrlKey || 18 == this.Ae && !a.altKey || $b && 91 == this.Ae && !a.metaKey) && (this.Nh = this.Ae = -1); - 1 == this.Ae && (a.ctrlKey && 17 != a.keyCode ? this.Ae = 17 : a.altKey && 18 != a.keyCode ? this.Ae = 18 : a.metaKey && 91 != a.keyCode && (this.Ae = 91));
  nea && !hea(a.keyCode, this.Ae, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.Nh = Tv(a.keyCode), ky && (this.qw = a.altKey))
};
B.NX = function(a) {
  this.Nh = this.Ae = -1;
  this.qw = a.altKey
};
B.handleEvent = function(a) {
  var b = a.b,
      c, d, e = b.altKey;
  J && "keypress" == a.type ? (c = this.Nh, d = 13 != c && 27 != c ? b.keyCode : 0) : ic && "keypress" == a.type ? (c = this.Nh, d = 0 <= b.charCode && 63232 > b.charCode && Uv(c) ? b.charCode : 0) : gc ? (c = this.Nh, d = Uv(c) ? b.keyCode : 0) : (c = b.keyCode || this.Nh, d = b.charCode || 0, ky && (e = this.qw), $b && 63 == d && 224 == c && (c = 191));
  var f = c = Tv(c),
      h = b.keyIdentifier;
  c ? 63232 <= c && c in iy ? f = iy[c] : 25 == c && a.shiftKey && (f = 9) : h && h in jy && (f = jy[h]);
  this.Ae = f;
  a = new ly(f, d, 0, b);
  a.altKey = e;
  this.P(a)
};
B.G = w("V");

function hy(a, b, c) {
  a.ts && my(a);
  a.V = b;
  a.ss = O(a.V, "keypress", a, c);
  a.kx = O(a.V, "keydown", a.LX, c, a);
  a.ts = O(a.V, "keyup", a.NX, c, a)
}
function my(a) {
  a.ss && (ad(a.ss), ad(a.kx), ad(a.ts), a.ss = n, a.kx = n, a.ts = n);
  a.V = n;
  a.Ae = -1;
  a.Nh = -1
}
B.L = function() {
  gy.J.L.call(this);
  my(this)
};

function ly(a, b, c, d) {
  wc.call(this, d);
  this.type = "key";
  this.keyCode = a;
  this.D = b
}
H(ly, wc);

function ny() {}
var oy;
Xa(ny);
var oea = {
  button: "pressed",
  checkbox: "checked",
  menuitem: "selected",
  menuitemcheckbox: "checked",
  menuitemradio: "checked",
  radio: "checked",
  tab: "selected",
  treeitem: "selected"
};
B = ny.prototype;
B.Wh = Na();
B.pd = function(a) {
  var b = a.b.U("div", py(this, a).join(" "), a.getContent());
  qy(this, a, b);
  return b
};
B.kd = Ma();
B.Ch = function(a, b, c) {
  if (a = a.G ? a.G() : a) {
    var d = [b];
    J && !qc("7") && (d = ry(cv(a), b), d.push(b));
    (c ? bw : aw)(a, d)
  }
};
B.fs = y(m);
B.Tb = function(a, b) {
  b.id && Ax(a, b.id);
  var c = this.kd(b);
  c && c.firstChild ? pea(a, c.firstChild.nextSibling ? Pb(c.childNodes) : c.firstChild) : a.xl = n;
  var d = 0,
      e = this.Oa(),
      f = this.Oa(),
      h = p,
      l = p,
      c = p,
      q = Pb(cv(b));
  Bb(q, function(a) {
    h || a != e ? l || a != f ? d |= this.dx(a) : l = m : (h = m, f == e && (l = m))
  }, this);
  a.Rh = d;
  h || (q.push(e), f == e && (l = m));
  l || q.push(f);
  var r = a.Ye;
  r && q.push.apply(q, r);
  if (J && !qc("7")) {
    var s = ry(q);
    0 < s.length && (q.push.apply(q, s), c = m)
  }
  if (!h || !l || r || c) b.className = q.join(" ");
  qy(this, a, b);
  return b
};
B.ED = function(a) {
  Tx(a) && this.tF(a.G(), m);
  a.isEnabled() && this.Kn(a, a.Da())
};

function sy(a, b, c) {
  if (a = c || a.Wh()) c = b.getAttribute("role") || n, a != c && Dj(b, a)
}
function qy(a, b, c) {
  b.Da() || Ej(c, "hidden", !b.Da());
  b.isEnabled() || a.Pf(c, 1, !b.isEnabled());
  ty(b, 8) && a.Pf(c, 8, b.Gl());
  ty(b, 16) && a.Pf(c, 16, b.hg());
  ty(b, 64) && a.Pf(c, 64, uy(b, 64))
}
B.mp = function(a, b) {
  Dw(a, !b, !J && !gc)
};
B.tF = function(a, b) {
  this.Ch(a, this.Oa() + "-rtl", b)
};
B.TE = function(a) {
  var b;
  return ty(a, 32) && (b = a.ac()) ? Wi(b) : p
};
B.Kn = function(a, b) {
  var c;
  if (ty(a, 32) && (c = a.ac())) {
    if (!b && uy(a, 32)) {
      try {
        c.blur()
      } catch (d) {}
      uy(a, 32) && a.Qr(n)
    }
    Wi(c) != b && Xi(c, b)
  }
};
B.setVisible = function(a, b) {
  U(a, b);
  a && Ej(a, "hidden", !b)
};
B.Qn = function(a, b, c) {
  var d = a.G();
  if (d) {
    var e = this.Vn(b);
    e && this.Ch(a, e, c);
    this.Pf(d, b, c)
  }
};
B.Pf = function(a, b, c) {
  oy || (oy = {
    1: "disabled",
    8: "selected",
    16: "checked",
    64: "expanded"
  });
  b = oy[b];
  var d = a.getAttribute("role") || n;
  d && (d = oea[d] || b, b = "checked" == b || "selected" == b ? d : b);
  b && Ej(a, b, c)
};
B.Yr = function(a, b) {
  var c = this.kd(a);
  if (c && (Ii(c), b)) if (cb(b)) Ti(c, b);
  else {
    var d = function(a) {
      if (a) {
        var b = yi(c);
        c.appendChild(cb(a) ? b.createTextNode(a) : a)
      }
    };
    Za(b) ? Bb(b, d) : !$a(b) || "nodeType" in b ? d(b) : Bb(Pb(b), d)
  }
};
B.ac = function(a) {
  return a.G()
};
B.Oa = y("goog-control");

function py(a, b) {
  var c = a.Oa(),
      d = [c],
      e = a.Oa();
  e != c && d.push(e);
  c = b.Rh;
  for (e = []; c;) {
    var f = c & -c;
    e.push(a.Vn(f));
    c &= ~f
  }
  d.push.apply(d, e);
  (c = b.Ye) && d.push.apply(d, c);
  J && !qc("7") && d.push.apply(d, ry(d));
  return d
}

function ry(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Bb([], function(d) {
    !Fb(d, F(Jb, a)) || b && !Jb(d, b) || c.push(d.join("_"))
  });
  return c
}
B.Vn = function(a) {
  this.b || vy(this);
  return this.b[a]
};
B.dx = function(a) {
  this.da || (this.b || vy(this), this.da = Uw(this.b));
  a = parseInt(this.da[a], 10);
  return isNaN(a) ? 0 : a
};

function vy(a) {
  var b = a.Oa();
  sb(b.replace(/\xa0|\s/g, " "), " ");
  a.b = {
    1: b + "-disabled",
    2: b + "-hover",
    4: b + "-active",
    8: b + "-selected",
    16: b + "-checked",
    32: b + "-focused",
    64: b + "-open"
  }
};

function wy() {}
H(wy, ny);
Xa(wy);
B = wy.prototype;
B.Wh = y("button");
B.Pf = function(a, b, c) {
  switch (b) {
  case 8:
  case 16:
    Ej(a, "pressed", c);
    break;
  default:
  case 64:
  case 1:
    wy.J.Pf.call(this, a, b, c)
  }
};
B.pd = function(a) {
  var b = wy.J.pd.call(this, a);
  this.vb(b, a.ze());
  var c = a.Ca();
  c && this.$a(b, c);
  ty(a, 16) && this.Pf(b, 16, a.hg());
  return b
};
B.Tb = function(a, b) {
  b = wy.J.Tb.call(this, a, b);
  var c = this.Ca(b);
  a.Z = c;
  a.Fk(this.ze(b));
  ty(a, 16) && this.Pf(b, 16, a.hg());
  return b
};
B.Ca = D;
B.$a = D;
B.ze = function(a) {
  return a.title
};
B.vb = function(a, b) {
  a && (b ? a.title = b : a.removeAttribute("title"))
};
B.Oa = y("goog-button");

function xy(a, b) {
  a || g(Error("Invalid class name " + a));
  eb(b) || g(Error("Invalid decorator function " + b));
  yy[a] = b
}
var zy = {},
    yy = {};

function Ay(a, b, c) {
  Y.call(this, c);
  if (!b) {
    b = this.constructor;
    for (var d; b;) {
      d = gb(b);
      if (d = zy[d]) break;
      b = b.J ? b.J.constructor : n
    }
    b = d ? eb(d.M) ? d.M() : new d : n
  }
  this.A = b;
  this.xl = C(a) ? a : n
}
H(Ay, Y);
B = Ay.prototype;
B.xl = n;
B.Rh = 0;
B.Nn = 39;
B.Fn = 255;
B.Gj = 0;
B.Xr = m;
B.Ye = n;
B.Jr = m;
B.kp = p;
B.hx = n;

function By(a, b) {
  a.xa && b != a.Jr && Cy(a, b);
  a.Jr = b
}
B.ac = function() {
  return this.A.ac(this)
};
B.Gc = w("A");

function Dy(a, b) {
  b && (a.Ye ? Jb(a.Ye, b) || a.Ye.push(b) : a.Ye = [b], a.A.Ch(a, b, m))
}
B.Ch = function(a, b) {
  b ? Dy(this, a) : a && this.Ye && Mb(this.Ye, a) && (0 == this.Ye.length && (this.Ye = n), this.A.Ch(this, a, p))
};
B.ia = function() {
  var a = this.A.pd(this);
  this.V = a;
  sy(this.A, a, this.vn());
  this.kp || this.A.mp(a, p);
  this.Da() || this.A.setVisible(a, p)
};
B.vn = w("hx");
B.Ab = function() {
  return this.A.kd(this.G())
};
B.rb = function(a) {
  return this.A.fs(a)
};
B.Ya = function(a) {
  this.V = a = this.A.Tb(this, a);
  sy(this.A, a, this.vn());
  this.kp || this.A.mp(a, p);
  this.Xr = "none" != a.style.display
};
B.$ = function() {
  Ay.J.$.call(this);
  this.A.ED(this);
  if (this.Nn & -2 && (this.Jr && Cy(this, m), ty(this, 32))) {
    var a = this.ac();
    if (a) {
      var b = this.F || (this.F = new gy);
      hy(b, a);
      Z(this).I(b, "key", this.we).I(a, "focus", this.VT).I(a, "blur", this.Qr)
    }
  }
};

function Cy(a, b) {
  var c = Z(a),
      d = a.G();
  b ? (c.I(d, "mouseover", a.Cr).I(d, "mousedown", a.Jf).I(d, "mouseup", a.Df).I(d, "mouseout", a.Dr), a.Cn != D && c.I(d, "contextmenu", a.Cn), J && c.I(d, "dblclick", a.eD)) : (c.b(d, "mouseover", a.Cr).b(d, "mousedown", a.Jf).b(d, "mouseup", a.Df).b(d, "mouseout", a.Dr), a.Cn != D && c.b(d, "contextmenu", a.Cn), J && c.b(d, "dblclick", a.eD))
}
B.Na = function() {
  Ay.J.Na.call(this);
  this.F && my(this.F);
  this.Da() && this.isEnabled() && this.A.Kn(this, p)
};
B.L = function() {
  Ay.J.L.call(this);
  this.F && (this.F.aa(), delete this.F);
  delete this.A;
  this.Ye = this.xl = n
};
B.getContent = w("xl");

function Ey(a, b) {
  a.A.Yr(a.G(), b);
  a.xl = b
}
function pea(a, b) {
  a.xl = b
}
B.jf = function() {
  var a = this.getContent();
  if (!a) return t;
  a = cb(a) ? a : Za(a) ? Db(a, Iw).join(t) : Cv(a);
  return Zw(a)
};
B.Da = w("Xr");
B.setVisible = function(a, b) {
  if (b || this.Xr != a && this.P(a ? "show" : "hide")) {
    var c = this.G();
    c && this.A.setVisible(c, a);
    this.isEnabled() && this.A.Kn(this, a);
    this.Xr = a;
    return m
  }
  return p
};
B.isEnabled = function() {
  return !uy(this, 1)
};
B.Ta = function(a) {
  var b = this.getParent();
  b && typeof b.isEnabled == Ea && !b.isEnabled() || !Fy(this, 1, !a) || (a || (Gy(this, p), this.xe(p)), this.Da() && this.A.Kn(this, a), Hy(this, 1, !a))
};
B.xe = function(a) {
  Fy(this, 2, a) && Hy(this, 2, a)
};
B.qc = function() {
  return uy(this, 4)
};

function Gy(a, b) {
  Fy(a, 4, b) && Hy(a, 4, b)
}
B.Gl = function() {
  return uy(this, 8)
};
B.Fl = function(a) {
  Fy(this, 8, a) && Hy(this, 8, a)
};
B.hg = function() {
  return uy(this, 16)
};
B.Me = function(a) {
  Fy(this, 16, a) && Hy(this, 16, a)
};
B.wj = function(a) {
  Fy(this, 32, a) && Hy(this, 32, a)
};
B.kc = function(a) {
  Fy(this, 64, a) && Hy(this, 64, a)
};

function uy(a, b) {
  return !!(a.Rh & b)
}
function Hy(a, b, c) {
  ty(a, b) && c != uy(a, b) && (a.A.Qn(a, b, c), a.Rh = c ? a.Rh | b : a.Rh & ~b)
}
function ty(a, b) {
  return !!(a.Nn & b)
}
B.lc = function(a, b) {
  this.xa && uy(this, a) && !b && g(Error("Component already rendered"));
  !b && uy(this, a) && Hy(this, a, p);
  this.Nn = b ? this.Nn | a : this.Nn & ~a
};

function Iy(a, b) {
  return !!(a.Fn & b) && ty(a, b)
}

function Fy(a, b, c) {
  return ty(a, b) && uy(a, b) != c && (!(a.Gj & b) || a.P(zx(b, c))) && !a.isDisposed()
}
B.Cr = function(a) {
  (!a.o || !Si(this.G(), a.o)) && this.P("enter") && this.isEnabled() && Iy(this, 2) && this.xe(m)
};
B.Dr = function(a) {
  a.o && Si(this.G(), a.o) || !this.P("leave") || (Iy(this, 4) && Gy(this, p), Iy(this, 2) && this.xe(p))
};
B.Cn = D;
B.Jf = function(a) {
  this.isEnabled() && (Iy(this, 2) && this.xe(m), Qu(a) && (Iy(this, 4) && Gy(this, m), this.A.TE(this) && this.ac().focus()));
  !this.kp && Qu(a) && a.preventDefault()
};
B.Df = function(a) {
  this.isEnabled() && (Iy(this, 2) && this.xe(m), this.qc() && this.Of(a) && Iy(this, 4) && Gy(this, p))
};
B.eD = function(a) {
  this.isEnabled() && this.Of(a)
};
B.Of = function(a) {
  Iy(this, 16) && this.Me(!this.hg());
  Iy(this, 8) && this.Fl(m);
  Iy(this, 64) && this.kc(!uy(this, 64));
  var b = new L("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.K = a.K);
  return this.P(b)
};
B.VT = function() {
  Iy(this, 32) && this.wj(m)
};
B.Qr = function() {
  Iy(this, 4) && Gy(this, p);
  Iy(this, 32) && this.wj(p)
};
B.we = function(a) {
  return this.Da() && this.isEnabled() && this.yg(a) ? (a.preventDefault(), a.stopPropagation(), m) : p
};
B.yg = function(a) {
  return 13 == a.keyCode && this.Of(a)
};
eb(Ay) || g(Error("Invalid component class " + Ay));
eb(ny) || g(Error("Invalid renderer class " + ny));
var qea = gb(Ay);
zy[qea] = ny;
xy("goog-control", function() {
  return new Ay(n)
});

function Jy() {}
H(Jy, wy);
Xa(Jy);
B = Jy.prototype;
B.Wh = Na();
B.pd = function(a) {
  By(a, p);
  a.Fn &= -256;
  a.lc(32, p);
  return a.b.U("button", {
    "class": py(this, a).join(" "),
    disabled: !a.isEnabled(),
    title: a.ze() || t,
    value: a.Ca() || t
  }, a.jf() || t)
};
B.fs = function(a) {
  return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
};
B.Tb = function(a, b) {
  By(a, p);
  a.Fn &= -256;
  a.lc(32, p);
  if (b.disabled) {
    var c = this.Vn(1);
    nv(b, c)
  }
  return Jy.J.Tb.call(this, a, b)
};
B.ED = function(a) {
  Z(a).I(a.G(), "click", a.Of)
};
B.mp = D;
B.tF = D;
B.TE = function(a) {
  return a.isEnabled()
};
B.Kn = D;
B.Qn = function(a, b, c) {
  Jy.J.Qn.call(this, a, b, c);
  (a = a.G()) && 1 == b && (a.disabled = c)
};
B.Ca = function(a) {
  return a.value
};
B.$a = function(a, b) {
  a && (a.value = b)
};
B.Pf = D;

function Ky(a, b, c) {
  Ay.call(this, a, b || Jy.M(), c)
}
H(Ky, Ay);
B = Ky.prototype;
B.Ca = w("Z");
B.$a = function(a) {
  this.Z = a;
  this.Gc().$a(this.G(), a)
};
B.ze = w("W");
B.vb = function(a) {
  this.W = a;
  this.Gc().vb(this.G(), a)
};
B.Fk = Oa("W");

function Ly(a, b) {
  var c = a.Gc(),
      d = Tx(a),
      e = c.Oa() + "-collapse-left",
      c = c.Oa() + "-collapse-right";
  a.Ch(d ? c : e, !! (b & 1));
  a.Ch(d ? e : c, !! (b & 2))
}
B.L = function() {
  Ky.J.L.call(this);
  delete this.Z;
  delete this.W
};
B.$ = function() {
  Ky.J.$.call(this);
  if (ty(this, 32)) {
    var a = this.ac();
    a && Z(this).I(a, "keyup", this.yg)
  }
};
B.yg = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Of(a) : 32 == a.keyCode
};
xy("goog-button", function() {
  return new Ky(n)
});

function My() {}
H(My, wy);
Xa(My);
B = My.prototype;
B.pd = function(a) {
  var b = py(this, a),
      b = a.b.U("div", {
      "class": "goog-inline-block " + b.join(" ")
    }, this.Gn(a.getContent(), a.b));
  this.vb(b, a.ze());
  qy(this, a, b);
  return b
};
B.Wh = y("button");
B.kd = function(a) {
  return a && a.firstChild.firstChild
};
B.Gn = function(a, b) {
  return b.U("div", "goog-inline-block " + (this.Oa() + "-outer-box"), b.U("div", "goog-inline-block " + (this.Oa() + "-inner-box"), a))
};
B.fs = function(a) {
  return "DIV" == a.tagName
};
B.rD = function(a, b) {
  var c = a.b.zl(b),
      d = this.Oa() + "-outer-box";
  return c && jv(c, d) && (c = a.b.zl(c), d = this.Oa() + "-inner-box", c && jv(c, d)) ? m : p
};
B.Tb = function(a, b) {
  Ny(b, m);
  Ny(b, p);
  this.rD(a, b) || b.appendChild(this.Gn(b.childNodes, a.b));
  bw(b, ["goog-inline-block", this.Oa()]);
  return My.J.Tb.call(this, a, b)
};
B.Oa = y("goog-custom-button");

function Ny(a, b) {
  if (a) for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) {
    d = b ? c.nextSibling : c.previousSibling;
    if (3 == c.nodeType) {
      var e = c.nodeValue;
      if (pb(e) == t) a.removeChild(c);
      else {
        c.nodeValue = b ? e.replace(/^[\s\xa0]+/, t) : e.replace(/[\s\xa0]+$/, t);
        break
      }
    } else
    break;
    c = d
  }
};

function Oy() {}
H(Oy, My);
Xa(Oy);
Oy.prototype.kd = function(a) {
  return a && a.firstChild && a.firstChild.firstChild && a.firstChild.firstChild.firstChild.lastChild
};
Oy.prototype.Gn = function(a, b) {
  var c = this.Oa();
  return b.U("div", "goog-inline-block " + (c + "-outer-box"), b.U("div", "goog-inline-block " + (c + "-inner-box"), b.U("div", c + "-pos", b.U("div", c + "-top-shadow", "\u00a0"), b.U("div", c + "-content", a))))
};
Oy.prototype.rD = function(a, b) {
  var c = a.b.zl(b),
      d = this.Oa() + "-outer-box";
  return c && jv(c, d) && (c = a.b.zl(c), d = this.Oa() + "-inner-box", c && jv(c, d) && (c = a.b.zl(c), d = this.Oa() + "-pos", c && jv(c, d) && (c = a.b.zl(c), d = this.Oa() + "-top-shadow", c && jv(c, d) && (c = a.b.WT(c), d = this.Oa() + "-content", c && jv(c, d))))) ? m : p
};
Oy.prototype.Oa = y("goog-imageless-button");
xy("goog-imageless-button", function() {
  return new Ky(n, Oy.M())
});
xy("goog-imageless-toggle-button", function() {
  var a = new Ky(n, Oy.M());
  a.lc(16, m);
  return a
});

function Py(a) {
  this.b = a || {}
}
Py.prototype.Ca = function(a) {
  return a in this.b ? this.b[a] : n
};

function Qy(a) {
  this.D = a
}
B = Qy.prototype;
B.getTitle = w("D");
B.Qu = y(m);
B.tj = function(a, b) {
  var c = new Py,
      d = b ? b.value : n;
  d && 0 < d.length && (c.b.title = d);
  return c
};
B.uj = function(a, b, c) {
  a = b.Ca("title");
  c && a && (c.value = a)
};
B.Jn = Na();

function Ry(a, b, c) {
  Y.call(this);
  this.F = a;
  this.o = Sy(this.F);
  var d = this.o;
  a = d.start;
  var e = d.end;
  a instanceof ak || e instanceof ak ? a = d : (d = ai(Yf(e, a)), d = new Ig(0, 0, 25 == d ? 30 : 0 == (d + 10) % 30 ? d + 10 : d, 0), e = Gg(a), hk(e, d), gk(e), a = new Uf(a, e.Ea()));
  this.B = a;
  this.C = b;
  this.A = c
}
H(Ry, Y);

function Ty(a, b) {
  return '<tr><th class="cb-key">' + a + '</th><td class="cb-value">' + b + "</td></tr>"
}

function Uy(a) {
  return '<div class="textbox-fill-wrapper"><div class="textbox-fill-mid"><input id="' + a.oa("what") + '" type="text" class="textbox-fill-input cb-event-title-input"></div></div>'
}
function Vy(a, b) {
  return b ? Rv(a.B.start, a.F.b.get() ? a.B.start : a.B.end) : Rv(a.o.start, a.F.b.get() ? a.o.start : a.o.end)
}
function rea(a, b, c) {
  c = c.getTitle();
  return '<span id="' + a + '" class="' + (b ? "cb-switcher-selected" : "lk cb-switcher-link") + '">' + I(c) + "</span>"
}

function Wy(a) {
  for (var b = [], c = 0; c < a.C.length; ++c) b.push(rea(a.oa("choice" + c), a.C[c] == a.A, a.C[c]));
  return b.join(" | ")
}
function Xy(a) {
  return '<table class="cb-table" cellpadding=0 cellspacing=0>' + a + ea
}
var Yy = new V('<div></div><div class="cb-root">${header}<form autocomplete="off" id="${idPrefix}form" action="javascript:(void)">${tableContent}</form></div>');
B = Ry.prototype;
B.rb = y(p);
B.ia = function() {
  var a = this.b.U("div");
  Yy.put("idPrefix", this.oa(t));
  Yy.put("header", 2 > this.C.length ? t : '<div class="cb-switcher" id="' + this.oa("switcher") + '">' + Wy(this) + "</div>");
  Yy.put("tableContent", this.A.Wq(this));
  a.innerHTML = Yy.toString();
  this.V = a
};
B.$ = function() {
  Ry.J.$.call(this);
  var a = this.fa("form");
  Z(this).I(a, "submit", this.In);
  (a = this.fa("switcher")) && Z(this).I(a, "mousedown", this.JU);
  this.A.Jn(this)
};
B.In = function(a) {
  try {
    this.A.Nw(this)
  } catch (b) {}
  this.P("M");
  a.preventDefault()
};
B.JU = function(a) {
  var b = this.oa("choice");
  a = a.target;
  a.id && nb(a.id, b) && (b = this.C[a.id.substr(b.length)], b != this.A && (a = this.A.tj(this), this.A = b, this.fa("switcher").innerHTML = Wy(this), this.fa("form").innerHTML = b.Wq(this), b.Jn(this), b.uj(this, a)))
};

function Zy(a) {
  $y("ef_new_from_link", a)
}
function $y(a, b, c, d) {
  var e = fp();
  e.fb = a;
  a = R();
  Rq(a).b(Ba, function() {
    return sea(e, b, c, d)
  })
};

function az(a, b, c, d, e) {
  this.D = "Event";
  this.o = a;
  this.b = b;
  this.C = c;
  this.A = d;
  this.B = e
}
H(az, Qy);
B = az.prototype;
B.Wq = function(a) {
  var b = [];
  b.push(Ty("When:", Vy(a)));
  var c;
  c = isNaN(a.o.start.hour);
  c = 86400 >= a.o.duration.o ? "month-grid" == this.o ? "e.g., 7pm Dinner at Pancho's" : c ? "e.g., Mom's birthday" : "e.g., Breakfast at Tiffany's" : c ? "e.g., Visiting in NYC" : "e.g., Breakfast at Tiffany's";
  c = Uy(a) + '<div class="cb-example">' + c + "</div>";
  b.push(Ty("What:", c));
  c = t;
  if (1 < this.b.length) {
    for (var d = a.oa("calendar"), e = [], f = 0; f < this.b.length; ++f) {
      var h = this.b[f];
      e.push('<option value="', I(h.getId()), '"');
      h.getId() == this.C && e.push(" selected");
      e.push(">", Ij(I(cs(this.A, h))), "</option>")
    }
    b.push(Ty("Calendar:", '<select id="' + d + '" class="cb-calendar">' + e.join(t) + "</select>"))
  } else c = '<input type="hidden" id="' + a.oa("calendar") + '">';
  d = '<a href="javascript:void(0)" id="' + a.oa("editLink") + '" class="lk">Edit event <strong>&raquo;</strong></a>';
  b.push('<tr><td colspan="2" class="cb-actions">' + c + '<span id="' + a.oa("create-button") + '"></span> &nbsp; ' + d + "</td></tr>");
  return Xy(b.join(t))
};
B.Nw = function(a) {
  if (!bz(this, a, p)) {
    var b = 86400 >= a.o.duration.o,
        c = this.o,
        d = yx(R()).o;
    d.IP = c;
    d.HP = b;
    b = fp();
    b.fb = "chip_drag_create";
    d.XB = b;
    c = a.b;
    b = c.G(a.oa("what")).value;
    d.summary = cz(b);
    c = c.G(a.oa("calendar")).value;
    d.VB = c;
    dz.lj(c, a.o, b, d)
  }
};
B.Jn = function(a) {
  var b = Z(a),
      c = T(a.oa("create-button")),
      d = new Ky("Create event", new Oy);
  d.render(c);
  b.I(d, "action", F(a.In));
  c = a.fa("editLink");
  d = E(this.HW, this, a);
  b.I(c, "click", d);
  c = a.fa("calendar");
  Xd(b, c, v, this.IW, p, this);
  window.setTimeout(function() {
    if (a.xa) {
      var b = a.fa("what");
      b && b.focus()
    }
  }, 0)
};
B.HW = function(a) {
  if (!bz(this, a, m)) {
    var b = a.fa("what").value,
        c = a.fa("calendar").value;
    $y("ef_new_from_bubble_no_qa", c, a.F, b)
  }
  ep("chip_create_edit")
};

function bz(a, b, c) {
  return b.fa("what").value ? (tea(86400 >= b.o.duration.o, a.o, b, c), m) : p
}
B.IW = function(a) {
  this.B && (a = this.A.getItem(a.target.value).color, this.B(a))
};
B.tj = function(a) {
  var b = a.fa("what");
  return az.J.tj.call(this, a, b)
};
B.uj = function(a, b) {
  var c = a.fa("what");
  az.J.uj.call(this, a, b, c)
};

function ez(a, b) {
  Pw.call(this, a || t, b)
}
H(ez, Pw);
ez.prototype.Qb = w("b");
ez.prototype.get = w("X");
ez.prototype.set = function(a) {
  this.Ad(a)
};

function fz(a, b) {
  this.$w = b;
  ez.call(this, a)
}
H(fz, ez);
fz.prototype.Ad = function(a, b) {
  if (b == k) {
    if (gz.test(a)) return;
    b = hz(a)
  } else {
    if ("\u2639" != a) return;
    a = I(b)
  }
  this.$w = b;
  fz.J.Ad.call(this, a)
};
var gz = /[<>"]|&(?!amp;|gt;|lt;|quot;|#39;)/;

function hz(a) {
  gz.test(a);
  return a.replace(/&(amp|lt|gt|quot|#39);/g, function(a, c) {
    switch (c) {
    case "amp":
      return "&";
    case "lt":
      return "<";
    case "gt":
      return ">";
    case "quot":
      return '"';
    case "#39":
      return "'";
    default:
      return a
    }
  })
}
function cz(a) {
  var b = I(a);
  return new fz(b, a)
};

function uea(a, b, c, d) {
  var e = a.Fa();
  a.Db() && (e = e.va());
  e = e.equals(b);
  if (Wda(a, b, c)) d();
  else {
    var f = R(),
        f = Rq(f);
    if (Oj(a, 131072) || Oj(a, 2097152) || xu(a)) if (Wj(a) && Oj(a, 2097152) && e) {
      var h = iz(a, b, c, m, d);
      f.b(Ba, function() {
        jz(Oj(a, 2097152), m, "Any changes made to other events will be kept.", h, d)
      })
    } else iz(a, b, c, e, d)("ONE");
    else {
      var l = ci.M().get(a.Aa()),
          q;
      q = l && l.Pb ? l.Pb : (l = jg(ig.M(), a.Aa())) ? Ju(l) : t;
      var r = iz(a, b, c, e, d);
      f.b(Ba, function() {
        kz(q, F(r, "ONE"), d)
      })
    }
  }
}

function iz(a, b, c, d, e) {
  return function(f) {
    var h = og(R()),
        l = vea(a, b, c, d, f, e);
    su(h, a) && !a.oc() && (Oj(a, 2097152) || xu(a)) ? (f = "Would you like to notify guests of your changes?", h = R(), Nu(Rh(h)) && (f += '<div class="ep-forcenotifwarn">Please note: If there are any non-Google Calendar attendees on this invite, ALL attendees will be sent an email update regardless</div>'), ku(new Js, function(a) {
      l(a.key)
    }, "Send notification?", f, (new nw).set("yes", "Send", m).set("no", "Don't send").set("cancel", "Cancel this change", p, m))) : l("no")
  }
}
function vea(a, b, c, d, e, f) {
  var h = ["scp", e];
  d && "ONE" !== e ? (c = Yf(c, b).toString(), a.Db() ? c = c.replace(/T.*/, t) : /T/.test(c) || (c += "T0H"), h.push("rdur", c)) : h.push("dates", a.Db() ? b.va().toString() + "/" + c.va().toString() : b.toString() + "/" + c.toString());
  a.Yf() && d && h.push("unbounded", "false");
  "TAIL" == e && h.push("rstart", b.toString());
  "ONE" !== e && h.push("scp", e);
  return function(b) {
    var c = R();
    Rq(c).b(Ba, function() {
      switch (b) {
      case "yes":
        lz(h);
        mz(a, h);
        break;
      case "no":
        mz(a, h)
      }
      f(a)
    })
  }
}

function wea(a, b, c, d) {
  var e = yx(R());
  e.o = {};
  e.o.start = Sy(a).start;
  e.o.end = Sy(a).end;
  e.o.$o = a.b.get();
  xx(e, n, b, c, d)
}
function tea(a, b, c, d) {
  var e = yx(R());
  if (e.b.Da()) {
    var f = c.fa("what").value,
        h = c.fa("calendar").value,
        l = fp();
    l.fb = d ? "ef_new_from_bubble" : "chip_drag_create";
    e = e.o;
    e.summary = cz(f);
    e.VB = h;
    e.XB = l;
    c.P("M");
    var q = ["ctext", f, "qa-src", b, "stim", e.start, "etim", e.end];
    b = R();
    Rq(b).b(Ca, function() {
      Af(R()).send("compose", q, 0, F(xea, a, l, d), yea, k, k, 1)
    })
  }
}

function xea(a, b, c, d) {
  var e = yx(R());
  if (d) {
    d = nz(d);
    var f = e.o;
    a && (f.start = d.start, f.end = d.end);
    d.summary && (f.summary = d.summary);
    for (var h in d) d[h] && !f[h] && (f[h] = d[h])
  }
  cp(b, "ef_new_qa");
  Rq(R()).b(Ba, function() {
    c ? zea(f, b) : oz(f)
  })
};

function pz(a) {
  Pw.call(this, a || p)
}
H(pz, Pw);
pz.prototype.Qb = w("b");
pz.prototype.get = w("X");
pz.prototype.set = function(a) {
  this.Ad(a)
};

function qz(a) {
  var b = a.indexOf("/");
  if (0 <= b) {
    var c = rz(a.substring(0, b));
    a = rz(a.substring(b + 1));
    return isNaN(c.ta() + a.ta()) ? new Cw(c, a) : new Uf(c, a)
  }
  return rz(a)
}
function rz(a) {
  if (0 > a.indexOf("?")) {
    var b = a.charCodeAt(0);
    a = 48 <= b && 58 > b ? mk(a) : 84 == b ? jk(0, 0, 0, lk(a, 1), lk(a, 3), lk(a, 5)).Lb() : 80 == a.charCodeAt(0) ? sz(a.substring(1), 1) : sz(a.substring(2), 44 - b)
  } else a = tz(a);
  return a
}

function sz(a, b) {
  for (var c = a.length, d = new fk, e = 0; e < c; e += 1) {
    var f = 0,
        h = 0;
    do {
      h = a.charAt(e);
      if ("0" > h || "9" < h) break;
      f += 1
    } while ((e += 1) < c);
    if (0 !== f) {
      h = 0;
      for (f = e - f; f < e; ++f) h = 10 * h + (a.charCodeAt(f) - 48);
      h *= b;
      switch (a.charAt(e)) {
      case "W":
        d.Y += 7 * h;
        break;
      case "D":
        d.Y += h;
        break;
      case "H":
        d.hour += h;
        break;
      case "M":
        d.minute += h;
        break;
      case "S":
        d.second += h;
        break;
      default:
        g(Error("Bad duration: " + a))
      }
    }
  }
  return new Ig(d.Y, d.hour, d.minute, d.second)
}
var Aea = /^(?:([0-9]{4,})|\?{4})(?:([0-9]{2})|\?{2})(?:([0-9]{2})|\?{2})$/,
    Bea = /^(?:([0-9]{4,})|\?{4})(?:([0-9]{2})|\?{2})(?:([0-9]{2})|\?{2})T(?:([0-9]{2})|\?{2})(?:([0-9]{2})|\?{2})(?:([0-9]{2})|\?{2})$/;

function tz(a) {
  var b = a.match(Bea);
  b || (b = a.match(Aea));
  for (a = b.length; 1 <= --a;) b[a] = b[a] ? parseInt(b[a], 10) : NaN;
  return 7 === b.length ? new $t(b[1], b[2], b[3], b[4], b[5], b[6]) : new au(b[1], b[2], b[3])
};

function uz(a) {
  Pw.call(this, a || n, Cea)
}
H(uz, Pw);

function Cea(a) {
  return a && qz(String(a))
}
B = uz.prototype;
B.Qb = w("b");
B.get = w("X");
B.set = function(a) {
  this.Ad(a)
};

function vz(a) {
  a = a.get();
  return a instanceof Uf ? a : n
}
B.Fa = function() {
  return this.get() && this.get().start
};
B.Za = function() {
  return this.get() && this.get().end
};

function wz(a, b) {
  this.o = a;
  this.b = b;
  ah.call(this, [this.o, this.b])
}
H(wz, ah);

function Sy(a) {
  return a.o.get()
}
wz.prototype.Fa = function() {
  return this.o.Fa()
};
wz.prototype.Za = function() {
  return this.o.Za()
};

function xz() {};

function yz(a, b) {
  this.B = a;
  this.Jd = b;
  this.o = Mj.M();
  this.A = [];
  this.b = n
}
H(yz, xz);
B = yz.prototype;
B.DC = function(a) {
  this.A.push(a)
};
B.move = function(a, b) {
  ep("chip_move");
  var c = Gg(b);
  hk(c, Yf(a.Za(), a.Fa()));
  c = isNaN(b.hour) ? c.va() : c.Ea();
  $p(Dp.M());
  this.Jd.nj(a, b, c, Hp)
};
B.kB = function(a, b) {
  ep("chip_resize");
  var c = a.Fa();
  $p(Dp.M());
  this.Jd.nj(a, c, b, Hp)
};
B.create = function(a, b, c, d, e) {
  var f = Sy(a),
      h = "month-grid";
  Up(Dp.M()) && (h = isNaN(f.start.hour) ? "all-day-area" : "week-grid");
  var l = zz(this, f),
      q = Az(this, l),
      r = [];
  r.push(new az(h, l, q, this.o, e));
  Ev(r, Cb(this.A, function(a) {
    return a.Qu(f)
  }));
  e = new Ry(a, r, r[0]);
  wea(a, b, e, c);
  Zc(e, "M", this.aO, p, this);
  ax(f);
  Dea(this, d.b, d.Le, a)
};

function Dea(a, b, c, d) {
  c ? a.b = n : a.b = new Eea(b, d)
}
B.hF = function(a) {
  this.b && (36 > Lw(a, this.b.position) ? $y("ef_new_from_bubble_no_qa", k, this.b.b, k) : this.b = n)
};
B.aO = function() {
  wx(yx(R())).Ka()
};
B.kG = function(a, b) {
  var c = Az(this, zz(this, new Uf(a, b))),
      d = Sh(this.B),
      c = new Rn("$", "New event", a, b, c, c, d, 2097408, 0, n, n, 0, n, n, n, []);
  c.lf(1);
  return c
};

function zz(a, b) {
  var c = [],
      d = a.Jd;
  a.o.forEach(function(a) {
    !a.b && d.kl(a.getId(), b) && c.push(a)
  });
  c.sort(bs(Mj.M()));
  return c
}
function Az(a, b) {
  var c = Cb(b, function(a) {
    return this.o.Af(a)
  }, a);
  return 1 == c.length ? c[0].getId() : b[0].getId()
}
B.nv = function() {
  return Mw(R())
};

function Eea(a, b) {
  this.position = a;
  this.b = b
};

function Bz(a, b) {
  this.b = a;
  this.o = b
}
function Cz(a, b) {
  var c = a.o,
      d, e = b.cb();
  d = Ru(Qp(c), e);
  0 > d && (d = -d - 2, d = Math.max(0, Math.min(Qp(c).length - 1, d)));
  var e = fv(a.b),
      f = d / c.b | 0,
      h = d % c.b;
  d = Math.round(e.width * h / c.b);
  var h = Math.round(e.width * (h + 1) / c.b),
      l = Math.round(e.height * f / c.o),
      c = Math.round(e.height * (f + 1) / c.o);
  return new av(e.left + d, e.top + l, h - d, c - l)
}

function Dz(a, b, c) {
  var d = a.o,
      e = lv(a.b),
      f = vj(a.b);
  a = Math.floor((b.y - e.y) * d.o / f.height);
  b = Math.floor((b.x - e.x) * d.b / f.width);
  e = Zd(a, 0, d.o - 1);
  f = Zd(b, 0, d.b - 1);
  c || a == e && b == f ? (c = d.Fb(e, f), d = Qp(d)[c], d = dk(d)) : d = n;
  return d
};

function Ez(a, b, c, d) {
  Q.call(this);
  this.F = a;
  this.D = Tf(a);
  this.K = a.Yf();
  this.H = b;
  this.X = c;
  this.da = d;
  a = this.F;
  b = a.Fa().va();
  c = Fn(0);
  c.o = 0;
  c.event = a;
  c.left = 0;
  c.width = 1;
  c.b = this.X;
  c.D = 24;
  c.A = 0;
  c.C = m;
  a = this.H.A(c, b);
  this.V = Fz(this, a);
  this.o = Fz(this, a)
}
H(Ez, Q);
Ez.prototype.A = n;
var Gz = new V('<div class="${eventClass} drag-chip-wrapper"></div>');

function Fz(a, b) {
  var c = document.createElement("div");
  c.innerHTML = b;
  1 == c.childNodes.length && (c = c.removeChild(c.firstChild));
  c.style.top = "0";
  var d = ln(a.F);
  gn(c, d);
  en(c, "drag-chip");
  Gz.put("eventClass", d);
  d = Kw(Gz.toString());
  d.appendChild(c);
  return d
}
B = Ez.prototype;
B.ff = Oa("K");
B.G = w("V");
B.ep = function(a) {
  this.A = a;
  Hz(this)
};

function Hz(a) {
  if (a.A) {
    var b = a.D,
        c = b && b.start.va(),
        d = n;
    b && b.end.Y != b.start.Y && $f(b.end) && (d = Jg(c));
    Iz(a, a.V, c);
    Iz(a, a.o, d);
    b && (a.Lq(a.V, c), d && a.Lq(a.o, d))
  } else Li(a.V), Li(a.o)
}
B.Lq = function(a, b) {
  var c = this.D,
      d = c.start.Ea().max(b.Ea()),
      d = Math.max(yu(this.A, d), 0);
  a.style.top = d + "px";
  var e = jk(0, 0, 0, this.A.D + this.A.F, 0, -1).Lb(),
      c = c.end.Ea().min(Nw(b, e)),
      c = Math.max(yu(this.A, c) - d, 23);
  this.H.B(a, c)
};

function Iz(a, b, c) {
  var d;
  c ? (d = a.A, a = !a.da, c = Hg(c, d.K), d = d.C ? 0 > c || c >= d.B ? n : d.b.G(d.A + (a ? "Over" : "Col") + c) : c ? n : d.b.G(d.A + "spanningwrapper")) : d = n;
  d != b.parentNode && (Li(b), d && d.appendChild(b))
}
B.L = function() {
  Li(this.V);
  Li(this.o);
  this.o = this.V = n;
  Ez.J.L.call(this)
};

function Jz(a, b, c, d) {
  Ez.call(this, a, b, c, d);
  this.B = b
}
H(Jz, Ez);
Jz.prototype.setTitle = function(a) {
  a = Hj(a);
  Au(this.B, this.G(), a, mn(this.F));
  Au(this.B, this.o, a, mn(this.F))
};
Jz.prototype.Ur = function(a) {
  var b = Xt(this.B, this.G());
  Bu(b, a);
  b = Xt(this.B, this.o);
  Bu(b, a)
};
Jz.prototype.Lq = function(a, b) {
  Jz.J.Lq.call(this, a, b);
  for (var c = this.K ? n : this.D.end.Ea(), c = Hn(this.B, this.D.start.Ea(), c), d = Xt(this.B, a).getElementsByTagName("dt")[0].firstChild; d != n; d = d.nextSibling) if (3 == d.nodeType) {
    d.nodeValue = c;
    break
  }
};
var Kz;

function Lz() {
  C(Kz) || (Kz = window.navigator && window.navigator.msPointerEnabled);
  return Kz
};
var Mz = Lz() ? "MSPointerDown" : "mousedown",
    Fea = Lz() ? "MSPointerUp" : "mouseup";
Lz();
Lz();
var Gea = Lz() ? "MSPointerMove" : "mousemove";

function Nz(a, b) {
  this.b = lv(a);
  this.D = a.target;
  Oz = m;
  this.B = this.b;
  this.C = this.D;
  this.A = b;
  var c = this.C.ownerDocument;
  this.o = new Q(this);
  this.o.I(c, Gea, this.uI, m);
  this.o.I(c, Fea, this.vI, m);
  this.o.I(c, "keydown", this.sI, m);
  this.o.I(c, Mz, this.tI, m);
  this.F = ib()
}
H(Nz, uc);
var Oz = p;
B = Nz.prototype;
B.Le = p;
B.qk = p;
B.uI = function(a) {
  a.preventDefault();
  a.stopPropagation();
  if (!J || a.X || qc("8")) {
    this.b = lv(a);
    this.D = a.target;
    var b;
    (b = this.Le) || (zo(R()) ? (150 < ib() - this.F && 36 <= Lw(this.B, this.b) && (this.Le = m, this.A.Mu(this)), b = this.Le) : b = p);
    b && this.A.Qi(this, a)
  } else this.aa()
};
B.vI = function(a) {
  if (zo(R())) {
    if (this.Le) {
      a.stopPropagation();
      var b = O(this.C.ownerDocument, "click", function(a) {
        a.stopPropagation()
      }, m);
      window.setTimeout(function() {
        ad(b)
      }, 0)
    }
    this.qk = m;
    this.aa()
  }
};
B.tI = function(a) {
  a.stopPropagation();
  a.preventDefault();
  this.aa()
};
B.sI = function(a) {
  27 == a.keyCode && (a.stopPropagation(), this.aa())
};
B.L = function() {
  Oz = p;
  this.A.rl(this);
  this.o.aa();
  Nz.J.L.call(this)
};

function Pz() {}
Pz.prototype.Mu = D;
Pz.prototype.Qi = D;
Pz.prototype.rl = D;

function Qz(a) {
  this.V = Ei("div", {
    className: "drag-lasso-container",
    style: "z-index:" + (a || 500)
  });
  this.Ka();
  document.body.appendChild(this.V)
}
H(Qz, uc);
Qz.prototype.L = function() {
  Li(this.V)
};

function Rz(a, b, c, d, e) {
  var f = [];
  b.top == c.top ? f.push(new av(b.left, b.top, c.left + c.width - b.left, b.height)) : (f.push(new av(b.left, b.top, d + e - b.left, b.height)), f.push(new av(d, c.top, c.left + c.width - d, c.height)), b = b.top + b.height, b < c.top && f.push(new av(d, b, e, c.top - b)));
  c = [];
  for (d = 0; d < f.length; d++) e = f[d], c.push('<div class="drag-lasso" style="left:', e.left, "px;top:", e.top, "px;width:", e.width, "px;height:", e.height, 'px;">&nbsp;</div>');
  a.V.innerHTML = c.join(t);
  a.V.style.display = "block"
}
Qz.prototype.Ka = function() {
  this.V.style.display = "none"
};

function Sz(a, b, c, d, e, f, h, l) {
  this.b = a;
  this.A = b;
  this.K = c;
  this.X = d;
  this.F = !! f;
  this.D = h || n;
  this.H = e;
  this.C = l;
  this.o = new Q(this);
  this.o.I(a, Mz, this.da)
}
H(Sz, uc);
Sz.prototype.B = n;
Sz.prototype.L = function() {
  this.B && this.B.aa();
  this.o.aa()
};
Sz.prototype.da = function(a) {
  if (du(a, 0)) {
    var b = a.target,
        c, d = zw(this.b, b);
    if (d) {
      var b = yw(d),
          e = this.K[b.$x];
      e && !b.aI && this.H.fg(e) && 1 != Rp(this.A.o) && (c = new Tz(this.A, this.X, e, d, this.F, this.D, this.C))
    } else {
      if (e = d = Dz(this.A, lv(a))) b = b.className, e = !! b && (nb(b, "st-c") || nb(b, "st-dtitle") || nb(b, "st-bg"));
      e && (c = new Uz(this.A, d, this.D, this.C))
    }
    c && (a.preventDefault(), a.stopPropagation(), this.B = new Nz(a, c))
  }
};

function Tz(a, b, c, d, e, f, h) {
  this.o = a;
  this.da = b;
  this.A = c;
  this.V = d;
  this.F = f;
  this.H = Math.max(1, Hg(Lg(c.Za()), c.Fa()));
  this.b = n;
  this.C = e;
  this.K = !e || 1 != this.H;
  this.X = h
}
H(Tz, Pz);
B = Tz.prototype;
B.bk = n;
B.lp = n;
B.Mu = function(a) {
  this.bk = Ei("div", {
    className: "drag-event st-contents"
  });
  this.bk.innerHTML = to(this.da, this.A, m);
  var b = vj(this.V);
  if (!this.C) {
    var c = a.B,
        d = lv(this.V);
    this.lp = bv(c, d);
    this.lp.y = b.height;
    200 < b.width && (b.width = 200, this.lp.x = 100);
    Fw(this.bk, b)
  }
  this.B = b;
  J || wj(this.V, .4);
  this.D = new Qz(this.X);
  this.Qi(a, n);
  this.V.ownerDocument.body.appendChild(this.bk)
};
B.Qi = function(a) {
  var b = Dz(this.o, a.b, this.C);
  if (!b) this.D.Ka();
  else if (this.K && (!this.b || !this.b.equals(b))) {
    var c = Mg(b, this.H - 1);
    Rz(this.D, Cz(this.o, b), Cz(this.o, c), sj(this.o.b).x, this.o.b.offsetWidth)
  }
  this.b = b;
  b = this.bk.style;
  if (this.C) {
    a = Cz(this.o, this.b);
    var c = a.left + 5,
        d = a.width - 7;
    b.top = a.top + a.height - this.B.height + "px";
    b.left = c + "px";
    b.width = d + "px"
  } else a = bv(a.b, this.lp), c = fv(this.o.b), d = c.left, d = Math.min(d + c.width - this.B.width, Math.max(d, a.x)) + "px", b.left = d, d = c.top, a = Math.min(d + c.height - this.B.height, Math.max(d, a.y)) + "px", b.top = a
};
B.rl = function(a) {
  a.Le && (Li(this.bk), this.D.aa(), a.qk && this.F && this.b && !this.b.equals(this.A.Fa().va()) ? (a = this.b, this.A.Db() || (a = Nw(a, this.A.Fa().Lb())), this.F.move(this.A, a)) : J || wj(this.V, 1))
};

function Uz(a, b, c, d) {
  this.o = a;
  this.b = this.B = b;
  this.D = c;
  this.A = new Qz(d);
  Vz(this)
}
H(Uz, Pz);
Uz.prototype.Qi = function(a) {
  a = Dz(this.o, a.b, m);
  this.b && this.b.equals(a) || (this.b = a, Vz(this))
};

function Vz(a) {
  Rz(a.A, Cz(a.o, a.b.min(a.B)), Cz(a.o, a.b.max(a.B)), sj(a.o.b).x, a.o.b.offsetWidth)
}
Uz.prototype.rl = function(a) {
  if (a.qk && this.D) {
    var b = new Uf(this.b.min(this.B), Jg(this.b.max(this.B)));
    this.D.create(new wz(new uz(b), new pz(p)), a.b, E(this.A.aa, this.A), a)
  } else this.A.aa()
};

function Wz(a, b) {
  this.o = a;
  this.V = b;
  this.B = window.setInterval(E(this.A, this), 40)
}
H(Wz, uc);
Wz.prototype.b = 1;
Wz.prototype.A = function() {
  if (this.o.isDisposed()) this.aa();
  else if (this.o.Le) {
    var a = lv(this.V),
        b = this.o.b,
        c = Math.floor(8 * this.b);
    this.b = Math.min(10, 1.05 * this.b);
    b.y < a.y + 25 ? this.V.scrollTop -= c : b.y > a.y + this.V.offsetHeight - 25 ? this.V.scrollTop += c : this.b = 1
  }
};
Wz.prototype.L = function() {
  window.clearInterval(this.B)
};

function Xz() {
  this.b = []
}
H(Xz, uc);
Xz.prototype.L = function() {
  for (var a = this.b.length; a--;) this.b[a].style.display = t;
  this.b = [];
  Xz.J.L.call(this)
};

function Yz(a, b, c, d, e, f) {
  this.A = a;
  this.F = b;
  this.b = b.G();
  this.X = c;
  this.C = d;
  this.H = e;
  this.D = f;
  this.o = new Q(this);
  this.o.I(this.b, Mz, this.da)
}
H(Yz, uc);
Yz.prototype.L = function() {
  this.o.aa();
  this.B && (this.B.aa(), this.K.aa());
  Yz.J.L.call(this)
};
Yz.prototype.da = function(a) {
  if (zo(this.A) && du(a, 0)) {
    var b = a.target,
        c = zw(this.b, b),
        d = c && this.X[yw(c).$x],
        c = n;
    d ? (b = "resizer" == b.className || !(!b.parentNode || "resizer" != b.parentNode.className)) && this.H.Yj(d) ? c = new Zz(this.A, d, this.F, this.C, this.D) : !b && this.H.fg(d) && (c = new $z(this.A, d, this.F, this.C, this.D)) : (b = b && b.className, "tg-dualmarker" != b && "tg-hourmarkers" != b && "tg-col-eventwrapper" != b && "tg-today" != b || (c = new aA(this.A, this.F, this.C, this.D)));
    c && (a.preventDefault(), a.stopPropagation(), this.B = new Nz(a, c), a = c, c = this.B, a.X = c, c = c.B, lv(a.D.G()), a.B = bA(a, c, p), a.H = a.B, a.da = bA(a, c, m), a.F = a.da, this.K = new Wz(this.B, this.b.parentNode))
  }
};

function cA(a, b, c, d, e, f) {
  this.W = a;
  this.D = c;
  this.Z = d;
  this.b = b;
  this.A = e;
  this.O = f
}
H(cA, Pz);

function bA(a, b, c, d) {
  a = a.D;
  var e = lv(a.G());
  d || (d = zu(a, b.x - e.x), d = Mg(a.K, d * a.C));
  b = Zd((b.y - e.y + a.D * a.o) / a.da | 0, 0, 47) + (c ? 1 : 0);
  c = Gg(d.va());
  c.minute += 30 * b;
  return c.Ea()
}
cA.prototype.Mu = function() {
  dA(this)
};
cA.prototype.Qi = function(a) {
  var b = this.O ? this.B : k;
  this.H = bA(this, a.b, p, b);
  this.F = bA(this, a.b, m, b);
  this.overlay && (a = this.overlay, b = this.o(), a.D = b, Hz(a))
};

function dA(a) {
  if (!a.overlay) {
    a.K = new Xz;
    var b = a.K,
        c;
    c = a.D;
    var d = ln(a.b);
    c = Pt(c.b, k, d, c.b.G(c.A + "Table"));
    for (d = c.length; d--;) {
      var e = c[d];
      e.style.display = "none";
      b.b.push(e)
    }
    a.overlay = a.Z(a.b);
    a.overlay.ep(a.D);
    b = eA(a);
    a.overlay.ff(b.b.get());
    a = a.overlay;
    b = Sy(b);
    a.D = b;
    Hz(a)
  }
}

function eA(a) {
  var b = !a.X.Le && 0 == a.A.nv();
  a = a.o();
  return new wz(new uz(a), new pz(b))
}
cA.prototype.C = function() {
  K(this.overlay);
  K(this.K)
};

function fA(a, b, c, d) {
  c = ai(Yf(c, b));
  a = d ? new Ig(0, 0, Mv(c, Nv(a.W)), 0) : new Ig(0, 0, c, 0);
  d = Gg(b);
  hk(d, a);
  gk(d);
  return new Uf(b, d.Ea())
}
function $z(a, b, c, d, e) {
  cA.call(this, a, b, c, d, e, p)
}
H($z, cA);
$z.prototype.o = function() {
  var a = Gg(this.b.Fa());
  hk(a, Yf(this.H, this.B));
  var b = Xf(this.b);
  return new Uf(a.Ea(), b)
};
$z.prototype.rl = function(a) {
  a.Le && a.qk && (a = this.o().start, this.A.move(this.b, a));
  this.C()
};

function aA(a, b, c, d) {
  var e = new Qg(2020, 1, 1, 0, 0, 0),
      e = d.kG(e, e);
  cA.call(this, a, e, b, c, d, m)
}
H(aA, cA);
aA.prototype.o = function() {
  if (this.X.Le) return fA(this, this.B.min(this.H), this.da.max(this.F), m);
  var a = this.A.nv();
  0 == a && (a = 60);
  return new Uf(this.B, new Ig(0, 0, a, 0))
};
aA.prototype.rl = function(a) {
  if (a.qk) {
    var b = eA(this);
    dA(this);
    var c = lv(this.overlay.G()),
        d = vj(this.overlay.G());
    c.x += 2 * d.width / 3;
    c.y += 2 * d.height / 3;
    d = this.overlay.Ur && E(this.overlay.Ur, this.overlay);
    this.A.create(b, c, E(this.C, this), a, d)
  } else this.C()
};

function Zz(a, b, c, d, e) {
  cA.call(this, a, b, c, d, e, m);
  a = Gg(this.b.Fa());
  a.hour += 23;
  this.Ia = a.Ea();
  a.hour -= 23;
  a.minute += 15;
  this.ea = a.Ea()
}
H(Zz, cA);
Zz.prototype.Qi = function(a, b) {
  this.overlay.ff(p);
  Zz.J.Qi.call(this, a, b)
};
Zz.prototype.o = function() {
  return fA(this, this.b.Fa(), this.F.max(this.ea).min(this.Ia), !Jj(this.b))
};
Zz.prototype.rl = function(a) {
  a.Le && a.qk && (a = this.o().end, this.A.kB(this.b, a));
  this.C()
};

function gA(a, b, c) {
  a = fv(a);
  var d = I(b.getTitle()),
      e = b.Xc();
  if (e.getUrl()) {
    var f = wf(e.getUrl()),
        h = b.Fa(),
        l = b.Za(),
        q = e.getUrl();
    b = e.getType();
    if (1 == b) if (1 != e.getType()) q = n;
    else {
      f = "http://www.gmodules.com/gadgets/ifr?url=" + encodeURIComponent(e.getUrl()) + "&synd=calendar&w=" + e.b.w + "&h=" + e.getHeight() + "&up_startdate=" + h.va().toString() + "&up_enddate=" + l.va().toString() + "&lang=" + "en".replace("_", "-");
      if (h = e.b.g) for (var r in h) r.match(Xda) && (f += "&up_" + r + "=" + encodeURIComponent(h[r]));
      q = f
    } else q = f;
    hA.put("wcTag", 3 == b ? "img" : "iframe");
    hA.put("wcScrolling", 1 == b ? 'scrolling="no" ' : t);
    hA.put("wcUrl", I(q));
    r = hA.toString();
    e.getHeight();
    b = document.body;
    b != c.b && (c.V && c.Ka(), c.b = b);
    c.render(a.left, a.top + a.height, e.b.w, e.getHeight(), d, r)
  }
}
var hA = new V('<${wcTag} frameborder=0 ${wcScrolling}src="${wcUrl}" class="wc-root"></${wcTag}>');

function iA() {}
var jA = new iA,
    kA = ["click", hc ? "keypress" : "keydown", "keyup"];
iA.prototype.b = function(a, b, c, d, e) {
  function f(a) {
    var c = Vc(b);
    "click" == a.type && Qu(a) ? c.call(d, a) : 13 != a.keyCode && 3 != a.keyCode || "keyup" == a.type ? 32 == a.keyCode && "keyup" == a.type && "button" == (a.target.getAttribute("role") || n) && (c.call(d, a), a.preventDefault()) : (a.type = "keypress", c.call(d, a))
  }
  f.b = b;
  f.A = d;
  e ? e.I(a, kA, f, c) : O(a, kA, f, c)
};

function lA(a) {
  this.b = a;
  this.B = [];
  this.D = [];
  this.C = [];
  this.A = [];
  this.o = new Q(this)
}
H(lA, uc);
lA.prototype.X = p;
lA.prototype.da = p;
lA.prototype.H = n;
lA.prototype.L = function() {
  this.o.aa();
  this.A = this.C = this.D = this.B = this.b = this.o = n
};

function mA(a) {
  this.o = a
}
function nA(a, b) {
  this.o = a;
  this.callback = b
}
H(nA, mA);

function oA(a, b, c, d) {
  this.o = a;
  this.B = b;
  this.D = c;
  this.A = d;
  this.b = n
}
H(oA, mA);

function pA(a, b, c) {
  b = new nA(b, c);
  a.X || (Ku(a.o, a.b, jA, E(a.F, a, a.B)), a.o.I(a.b, "click", E(a.F, a, a.D)), a.o.I(a.b, "dblclick", E(a.F, a, a.C)), a.X = m);
  return b
}
function qA(a, b, c) {
  b = pA(a, b, c);
  a.D.push(b)
}
function rA(a, b, c, d, e) {
  b = new oA(b, c, d, e);
  a.da || (a.o.I(a.b, "mousemove", a.K), a.o.I(a.b, "mouseover", a.K), a.o.I(a.b, "mouseout", a.O), a.da = m);
  a.A.push(b)
}
lA.prototype.F = function(a, b) {
  for (var c = b.target, d = 0; d < a.length; d++) {
    var e = a[d],
        f = e.o(c);
    if (f) {
      e.callback(f, b);
      b.preventDefault();
      break
    }
  }
};
lA.prototype.K = function(a) {
  for (var b = a.target, c = this.H == b, d = 0; d < this.A.length; d++) {
    var e = this.A[d];
    if (!c || e.A) {
      var f = e.o(b);
      if (f) {
        if (e.b) if (e.b != f) sA(e, a);
        else {
          e.A && e.A(f, a);
          continue
        }
        e.b = f;
        e.B(f, a)
      } else e.b && sA(e, a);
      if (this.isDisposed()) break
    }
  }
  this.H = b
};
lA.prototype.O = function(a) {
  var b = a.o;
  if (!b || "thumb" == b.nodeName.toLowerCase() || !Si(this.b, b)) for (b = 0; b < this.A.length; b++) {
    var c = this.A[b];
    c.b && sA(c, a);
    if (this.isDisposed()) return
  }
  this.H = n
};

function sA(a, b) {
  var c = a.b;
  c && (a.b = n, a.D(c, b))
};

function tA(a, b, c, d, e) {
  this.b = a;
  this.H = new tw(Kl, this.b.D, m, m);
  this.A = e;
  this.K = b;
  this.Jd = c;
  this.B = d;
  this.o = new Q(this);
  this.o.I(this.b, "s", this.II);
  this.o.I(this.b, "t", this.Qy);
  this.o.I(this.b, "v", this.HI);
  this.o.I(this.b, "u", this.EI);
  this.Py();
  this.D = Ze(Ye.M())
}
B = tA.prototype;
B.vt = p;
B.vp = n;
B.qt = n;
B.TB = n;
B.rp = n;
B.II = function() {
  uA(this);
  this.A.Ka()
};

function uA(a) {
  K(a.qt);
  delete a.qt;
  K(a.C);
  delete a.C;
  K(a.F);
  delete a.F;
  a.vp && (window.clearInterval(a.vp), delete a.vp);
  a.rp && (ad(a.rp), delete a.rp);
  a.Xb && ($c(a.Xb, "toggle", a.b.rt, p, a.b), a.Xb.aa(), delete a.Xb)
}
B.Qy = function() {
  this.vt || (window.setTimeout(E(this.Py, this), 0), this.vt = m)
};
B.HI = function() {
  uA(this);
  this.Qy()
};
B.Py = function() {
  this.vt = p;
  if (this.b.Eo) {
    uA(this);
    var a = Ep(),
        b = new lA(a);
    qA(b, E(this.Fy, this), E(this.nI, this));
    rA(b, F(zw, a), jea, iea);
    rA(b, E(this.Fy, this), ww, vw);
    qA(b, F(zw, a), E(this.lI, this));
    var c = E(this.iI, this, a),
        d = E(this.mI, this),
        c = pA(b, c, d);
    b.C.push(c);
    qA(b, kea, E(this.oI, this));
    1 < Rp(this.b.Xf) && (qA(b, Bw, E(this.kI, this)), rA(b, Bw, ww, vw));
    this.qt = b;
    b = this.b;
    this.K || (c = Ep(), d = T(Up(b) ? Vo(b.o) : "mvEventContainer"), this.C = new Sz(c, new Bz(d, b.Xf), b.A, b.da, b.D, Up(b), this.B, 10), Up(b) && (this.F = new Yz(R(), b.Ao, b.A, E(this.jI, this), b.D, this.B)));
    Up(b) && (this.vp = window.setInterval(E(this.qI, this), 6E4));
    this.rp = O(yi(a), "dblclick", E(this.pI, this), m);
    if (a = T("allday-disclose" + this.b.o.id)) this.Xb = new iw(a.id, k, !b.F), O(this.Xb, "toggle", b.rt, p, b);
    vA(this)
  }
};
B.pI = function(a) {
  a = lv(a);
  this.B.hF(a)
};
B.jI = function(a) {
  var b = this.b,
      c = new Jz(a, b.H.F, 42, p);
  c.I(b, "s", E(c.ep, c, n));
  Mu(c, b, "t", function() {
    c.ep(b.Ao)
  }, this);
  return c
};
B.oI = function(a) {
  var b, c, d, e, f;
  f = Yt("ca-mlp", a);
  f = dk(parseInt(f, 10));
  e = Bv(a, "TABLE");
  c = Bv(a, "TD");
  d = sj(c).x;
  Up(this.b) ? (a = sj(e).x, b = e.offsetWidth + a, d = d + c.offsetWidth / 2 - 150, d + 300 > b ? d = b - 300 : d < a && (d = a), a = t, b = "wk-moreevents st-contents", c = sj(c).y + c.offsetHeight, e = n) : (a = Kl.xd(f), b = "st-contents", c = sj(e).y, e = 225);
  this.TB = f;
  f = '<div id="' + this.D + '" class="' + b + '">&nbsp;</div>';
  b = this.A;
  var h = Ep();
  h != b.b && (b.V && b.Ka(), b.b = h);
  this.A.render(d, c, e, n, a, f);
  vA(this)
};

function vA(a) {
  var b = a.TB;
  if (T(a.D)) {
    var c = a.b.K,
        d;
    Up(a.b) ? (c = Cb(c, function(a) {
      return a.Db() || a.di
    }), d = a.H) : d = a.b.da;
    var e = [];
    d.b = e;
    po(d);
    no(new lo(c, b, 1, 99), d);
    qo(d);
    T(a.D).innerHTML = e.join(t);
    Hea(a.A)
  }
}
B.lI = function(a, b) {
  var c = Zv(a);
  (c = this.b.A[c]) && this.Jd.Tk(c, b)
};
B.Fy = function(a) {
  a = Yi(a, F(Lv, "ca-elp"), m);
  if (!a) return n;
  var b = xw(a);
  return wA(this.b.A[b]) ? a : n
};
B.iI = function(a, b) {
  var c = zw(a, b);
  if (!c) return n;
  var d = Zv(c);
  return wA(this.b.A[d]) ? c : n
};

function wA(a) {
  var b = R(),
      b = Td(b);
  return a ? a.oc() ? rw(R(), a) : a.Oo() && b.isEnabled(76) ? p : !a.Ge() : p
}
B.nI = function(a, b) {
  var c = xw(a);
  if (c = this.b.A[c]) this.Jd.yf(c, lv(b), "ef_view_from_chip"), vw(a)
};
B.mI = function(a, b) {
  var c = Zv(a);
  (c = this.b.A[c]) && this.Jd.yf(c, lv(b), "ef_view_from_dblclick")
};
B.kI = function(a) {
  a = Aw(a);
  Yl(this.b.C, a, 1);
  zp(vp(R()), "day")
};
B.EI = function(a) {
  Oz && a.preventDefault()
};
B.qI = function() {
  var a = this.b.H,
      b = wi(),
      c = $h(Jl()),
      d = co(a, c),
      c = $n(a, c),
      e = b.G(a.A + "nowmarker");
  e && (U(e, d), e.style.top = c + "px");
  if (a = b.G(a.A + "nowptr")) U(a, d), a.style.top = c - 4 + "px"
};
var xA;

function yA() {
  var a = R();
  if (sp(wp(a))) window.print();
  else {
    var a = Iea(S(a)),
        b = Jea();
    if (xA) try {
      xA.close()
    } catch (c) {}
    var d = window.open("javascript:''", "goocalprint", b, m);
    xA = d;
    Af(R()).send(a, [], 0, function(a) {
      d.document.write(a);
      try {
        d.document.close(), d.focus()
      } catch (b) {}
    }, function() {
      d.close();
      Kea();
      return m
    }, k, k, 1)
  }
}

function Iea(a) {
  var b = Bp(),
      c = b.first,
      d = Jg(b.Ub),
      e = [];
  Qv(function(a) {
    e.push(a)
  });
  e.sort(bs(Mj.M()));
  for (var b = [], f = 0; f < e.length; ++f) b.push(e[f].getId());
  var h = wp(R()),
      l;
  if (f = !a.Kf()) {
    var q = h.getType();
    if (1 == q || 2 == q) l = "23456"
  }
  a = a.hc();
  c = ["dates", c + "/" + d, "ctz", ot(), "hl", "en", "pgsz", "letter", "wkst", a + 1, "mode", Vda(h)];
  l && c.push("wdtp", l);
  f && c.push("hw", 1);
  for (f = 0; f < b.length; ++f) c.push("src", b[f]);
  (l = /deb=(-?\d)/.exec(window.location.href)) && c.push("deb", l[1]);
  l = Lea();
  l = l.replace(/\/?[^\/]*$/, "/print_preview");
  b = "?";
  for (f = 0; f < c.length; f += 2) l += b + encodeURIComponent(c[f]) + "=" + encodeURIComponent(c[f + 1]), b = "&";
  return l
}
function Lea() {
  var a = window.location.href.substr(0, window.location.href.length - window.location.hash.length);
  return a.substr(0, a.length - window.location.search.length)
}
function Jea() {
  var a = 732;
  Sd(85) && (a += 42);
  return "location=0,status=0,fullscreen=0, directories=0,toolbar=0,menubar=0,width=600,height=" + a
}

function Kea() {
  ku(new Js, function(a) {
    "yes" == a.key && setTimeout(function() {
      Kp(Jp.M(), "g");
      window.print()
    }, 0)
  }, "Calendar Print Preview", "Google Calendar printable view is not available offline. Would you like to print this page as it appears in your browser?", zA())
};
var AA = [20, 21, 22, 23, 24, 30, 32, 33, 37],
    Mea = {
    p: 1,
    n: 2,
    k: 1,
    j: 2,
    t: 3,
    a: 10,
    5: 10,
    d: 11,
    1: 11,
    w: 12,
    2: 12,
    m: 13,
    3: 13,
    x: 14,
    4: 14,
    "/": 20,
    "Ctrl+p": 23,
    "Shift+?": 25,
    "Shift+/": 25,
    "Ctrl+?": 25,
    "Ctrl+/": 25,
    e: 31,
    "num-plus": 21,
    "Shift+equals": 21,
    "Shift+num-plus": 21,
    q: 22,
    r: 37,
    s: 24,
    c: 30,
    "delete": 32,
    backspace: 32,
    z: 33,
    "Ctrl+z": 33
    },
    Nea = {
    Esc: 38,
    "Ctrl+s": 41
    },
    Oea = {
    "g y": 34,
    "g m": 36,
    "g n": 35
    };
var BA = {
  8: "backspace",
  9: "tab",
  13: "enter",
  16: "shift",
  17: "ctrl",
  18: "alt",
  19: "pause",
  20: "caps-lock",
  27: "esc",
  32: "space",
  33: "pg-up",
  34: "pg-down",
  35: "end",
  36: "home",
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  45: "insert",
  46: "delete",
  48: "0",
  49: "1",
  50: "2",
  51: "3",
  52: "4",
  53: "5",
  54: "6",
  55: "7",
  56: "8",
  57: "9",
  59: "semicolon",
  61: "equals",
  65: "a",
  66: "b",
  67: "c",
  68: "d",
  69: "e",
  70: "f",
  71: "g",
  72: "h",
  73: "i",
  74: "j",
  75: "k",
  76: "l",
  77: "m",
  78: "n",
  79: "o",
  80: "p",
  81: "q",
  82: "r",
  83: "s",
  84: "t",
  85: "u",
  86: "v",
  87: "w",
  88: "x",
  89: "y",
  90: "z",
  93: "context",
  96: "num-0",
  97: "num-1",
  98: "num-2",
  99: "num-3",
  100: "num-4",
  101: "num-5",
  102: "num-6",
  103: "num-7",
  104: "num-8",
  105: "num-9",
  106: "num-multiply",
  107: "num-plus",
  109: "num-minus",
  110: "num-period",
  111: "num-division",
  112: "f1",
  113: "f2",
  114: "f3",
  115: "f4",
  116: "f5",
  117: "f6",
  118: "f7",
  119: "f8",
  120: "f9",
  121: "f10",
  122: "f11",
  123: "f12",
  186: "semicolon",
  187: "equals",
  189: "dash",
  188: ",",
  190: ".",
  191: "/",
  192: "`",
  219: "open-square-bracket",
  220: "\\",
  221: "close-square-bracket",
  222: "single-quote",
  224: "win"
};

function CA(a) {
  P.call(this);
  this.A = {};
  this.o = {
    Ci: [],
    time: 0
  };
  this.H = Lc(Pea);
  this.K = Lc(Qea);
  this.D = m;
  this.B = n;
  this.b = a;
  O(this.b, "keydown", this.Ro, p, this);
  hc && O(this.b, "keyup", this.Ry, p, this);
  ac && !hc && (O(this.b, "keypress", this.Sy, p, this), O(this.b, "keyup", this.Ty, p, this))
}
var DA;
H(CA, P);
var Pea = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19],
    Qea = ["color", "date", "datetime", "datetime-local", "email", "month", "number", "password", Ja, "tel", "text", "time", "url", "week"];
B = CA.prototype;
B.NV = function(a, b) {
  var c = EA,
      d = this.A,
      e = arguments;
  if (cb(e[1])) {
    for (var e = e[1], e = e.replace(/[ +]*\+[ +]*/g, "+").replace(/[ ]+/g, " ").toLowerCase(), e = e.split(" "), f = [], h, l = 0; h = e[l]; l++) {
      var q = h.split("+"),
          r;
      h = 0;
      for (var s, u = 0; s = q[u]; u++) {
        switch (s) {
        case "shift":
          h |= 1;
          continue;
        case "ctrl":
          h |= 2;
          continue;
        case "alt":
          h |= 4;
          continue;
        case "meta":
          h |= 8;
          continue
        }
        r = s;
        if (!DA) {
          q = {};
          s = k;
          for (s in BA) q[BA[s]] = s;
          DA = q
        }
        r = DA[r];
        break
      }
      f.push({
        keyCode: r,
        XE: h
      })
    }
    e = f
  } else
  for (f = e, l = 1, Za(e[1]) && (f = e[1], l = 0), e = []; l < f.length; l += 2) e.push({
    keyCode: f[l],
    XE: f[l + 1]
  });
  c(d, e, a)
};
B.L = function() {
  CA.J.L.call(this);
  this.A = {};
  $c(this.b, "keydown", this.Ro, p, this);
  hc && $c(this.b, "keyup", this.Ry, p, this);
  ac && !hc && ($c(this.b, "keypress", this.Sy, p, this), $c(this.b, "keyup", this.Ty, p, this));
  this.b = n
};
B.Ry = function(a) {
  if ($b) {
    if (224 == a.keyCode) {
      this.F = m;
      pe(function() {
        this.F = p
      }, 400, this);
      return
    }
    var b = a.metaKey || this.F;
    67 != a.keyCode && 88 != a.keyCode && 86 != a.keyCode || !b || (a.metaKey = b, this.Ro(a))
  }
  32 == this.B && 32 == a.keyCode && a.preventDefault();
  this.B = n
};

function FA(a) {
  return ac && !hc && a.ctrlKey && a.altKey && !a.shiftKey
}
B.Sy = function(a) {
  32 < a.keyCode && FA(a) && (this.C = m)
};
B.Ty = function(a) {
  !this.C && FA(a) && this.Ro(a)
};

function EA(a, b, c) {
  var d = b.shift(),
      d = d.keyCode & 255 | d.XE << 8,
      e = a[d];
  e && c && (0 == b.length || cb(e)) && g(Error("Keyboard shortcut conflicts with existing shortcut"));
  b.length ? (e || (e = a[d] = {}), EA(e, b, c)) : a[d] = c
}
function GA(a, b, c, d) {
  c = c || 0;
  return (d = (d || a.A)[b[c]]) && !cb(d) && 1 < b.length - c ? GA(a, b, c + 1, d) : d
}
B.Ro = function(a) {
  var b;
  b = a.keyCode;
  if (16 == b || 17 == b || 18 == b) b = p;
  else {
    var c = a.target,
        d = "TEXTAREA" == c.tagName || "INPUT" == c.tagName || "BUTTON" == c.tagName || "SELECT" == c.tagName,
        e = !d && (c.isContentEditable || c.ownerDocument && "on" == c.ownerDocument.designMode);
    b = !d && !e || this.H[b] ? m : e ? p : a.altKey || a.ctrlKey || a.metaKey ? m : "INPUT" == c.tagName && this.K[c.type] ? 13 == b : "INPUT" == c.tagName || "BUTTON" == c.tagName ? 32 != b : p
  }
  if (b) if ("keydown" == a.type && FA(a)) this.C = p;
  else {
    b = hc ? Jv(a.keyCode) : a.keyCode;
    var c = b & 255 | ((a.shiftKey ? 1 : 0) | (a.ctrlKey ? 2 : 0) | (a.altKey ? 4 : 0) | (a.metaKey ? 8 : 0)) << 8,
        f, h, d = ib();
    this.o.Ci.length && 1500 >= d - this.o.time ? f = GA(this, this.o.Ci) : this.o.Ci.length = 0;
    f = f ? f[c] : this.A[c];
    f || (f = this.A[c], this.o.Ci = []);
    f && cb(f) ? h = f : f ? (this.o.Ci.push(c), this.o.time = d, hc && a.preventDefault()) : this.o.Ci.length = 0;
    h && (this.D && a.preventDefault(), f = a.target, c = this.P(new HA("shortcut", h, f)), (c &= this.P(new HA("shortcut_" + h, h, f))) || a.preventDefault(), this.o.Ci.length = 0, hc && (this.B = b))
  }
};

function HA(a, b, c) {
  L.call(this, a, c);
  this.o = b
}
H(HA, L);

function IA(a) {
  this.b = a || R();
  this.Jd = dz;
  this.o = Mea;
  a = Td(this.b);
  a.isEnabled(42) && (this.o = Hc(this.o), Jc(this.o, Oea));
  a.isEnabled(41) && (this.o = Hc(this.o), Jc(this.o, Nea))
}
Xa(IA);
B = IA.prototype;
B.ja = n;
B.Pq = n;
B.FE = n;
B.JW = function(a) {
  var b = n,
      c = Rq(this.b);
  qu(c.o, xa) && JA && (b = JA.o);
  a = parseInt(a.o, 10);
  var d = vp(this.b);
  switch (a) {
  case 1:
    d.o.D(-1);
    break;
  case 2:
    d.o.D(1);
    break;
  case 3:
    d.o.C();
    break;
  case 10:
    b ? (b.tf("list"), np(lp.M())) : zp(d, "list");
    break;
  case 12:
    b ? b.tf("week") : zp(d, "week");
    break;
  case 14:
    b ? (c = Wg(S(this.b)), b.tf(c)) : zp(d, "custom");
    break;
  case 20:
    Ht && Jt();
    window.setTimeout(function() {
      ow() ? qw(gbar.qfgq()) : qw("maininput")
    }, 0);
    break;
  case 21:
    window.setTimeout(function() {
      jw(gw.Xb, m);
      qw("searchAddCal")
    }, 0);
    break;
  case 22:
    Ht && Jt();
    c.b(Ca, function() {
      Rea()
    });
    break;
  case 23:
    yA();
    break;
  case 24:
    Ht && It();
    Ps();
    break;
  case 25:
    fea(this.b);
    break;
  case 30:
    Ht && It();
    Zy();
    break;
  case 32:
    b = yx(R());
    if (a = b.Ld()) c = og(this.b), (a = ru(Yp, a)) && c.hb(a) && (b.b.Ka(), this.Jd.yh(a));
    break;
  case 34:
    KA(1);
    break;
  case 35:
    KA(2);
    break;
  case 36:
    KA(3);
    break;
  case 11:
    b ? b.tf("day") : zp(d, "day");
    break;
  case 13:
    b ? b.tf("month") : zp(d, "month");
    break;
  case 31:
    Dd(Ld(R(), 801), function(a) {
      var b = a.Ld();
      b && (b = ru(Yp, b)) && (a.bZ().Ka(), this.Jd.yf(b, new ti(0, 0)))
    });
    break;
  case 33:
    LA();
    break;
  case 37:
    fw()
  }
};

function KA(a) {
  Dd(Ld(R(), 801), function(b) {
    if (b = b.Ld()) {
      var c = ru(Yp, b);
      c && c.Yd() && fu(b, a)
    }
  })
}
B.register = function(a) {
  MA(this);
  this.FE = a;
  this.ja.A = {};
  for (var b in a) {
    var c = a[b];
    $b && (b = b.replace("Ctrl+", "Meta+"));
    this.ja.NV(String(c), b)
  }
};

function NA() {
  var a = IA.M();
  MA(a);
  return a.Pq
}
function MA(a) {
  a.ja || (a.ja = new CA(document), a.ja.D = p, a.Pq = new P, O(a.ja, "shortcut", E(a.LW, a)), O(a.Pq, "shortcut", E(a.JW, a)))
}
B.LW = function(a) {
  if (Jd(this.b, 9).isEnabled() && !Sea(a.target)) {
    var b = parseInt(a.o, 10),
        c;
    if (!(c = !zo(this.b) && Jb(AA, b))) {
      if (b = 33 == b) b = a.target, b = "TEXTAREA" == b.tagName || "INPUT" == b.tagName && "text" == b.type;
      c = b
    }
    c || (a.preventDefault(), this.Pq.P(a))
  }
};

function Sea(a) {
  return a ? !! Yi(a, function(a) {
    return Ri(a) && xj(a) ? "dialog" == (a.getAttribute("role") || n) : p
  }) : p
};

function OA(a, b, c, d) {
  P.call(this);
  this.selection = c;
  this.b = a;
  a.setup(sk(b));
  iu(a, this.selection.first, this.selection.Ub, this.selection.focus);
  this.o = new Q(this);
  this.o.I(c, v, this.Fz);
  this.o.I(a.G(), "mousedown", this.RJ);
  this.o.I(a.G(), "mouseover", this.VJ);
  this.o.I(a.G(), "mouseout", this.UJ);
  this.o.I(b, "newday", this.WJ);
  this.A = new Q(this);
  this.C = b;
  this.D = !! d
}
H(OA, P);
B = OA.prototype;
B.Bh = n;
B.dr = n;
B.uq = n;
B.YM = function(a) {
  var b = ju(this.b, a.target),
      c = this.Bh;
  b && c && !(this.dr || c).equals(b) && (this.dr = b, this.selection.So(c.min(b), c.max(b), b));
  a.preventDefault()
};
B.RJ = function(a) {
  var b = a.target,
      c = ju(this.b, b);
  c ? (this.Bh = c, this.D && this.selection.rd(c), b = this.b.G().ownerDocument, this.A.I(b, "mousemove", this.YM), this.A.I(b, "mouseup", this.$M)) : (c = this.b, (c.B == b.id || b.parentNode && c.B == b.parentNode.id) && this.P("O"));
  a.preventDefault()
};
B.FD = function() {
  var a = this.Bh;
  a && (Yd(this.A), this.Bh = n, this.dr || (this.D ? this.Fz() : this.selection.rd(a)), this.dr = n, this.P("N"))
};
B.$M = OA.prototype.FD;
B.VJ = function(a) {
  if ((a = ju(this.b, a.target)) && this.Bh == n) {
    var b = this.b;
    en(St(b, a.cb()), b.className + "onhover")
  }
};
B.UJ = function(a) {
  if (a = ju(this.b, a.target)) {
    var b = this.b;
    gn(St(b, a.cb()), b.className + "onhover")
  }
};
B.Ka = function() {
  this.FD();
  this.b.Ka()
};
B.Gc = w("b");
B.Fz = function() {
  var a = k;
  this.Bh == n && (a = this.selection.focus);
  iu(this.b, this.selection.first, this.selection.Ub, a)
};
B.WJ = function() {
  var a = this.b,
      b = sk(this.C);
  a.X = b;
  a.update()
};
B.L = function() {
  K(this.o);
  K(this.uq);
  K(this.A);
  K(this.b);
  OA.J.L.call(this)
};
B.show = function() {
  this.b.show()
};
B.Da = function() {
  return this.b.Da()
};

function Tea(a) {
  a.uq || (a.uq = new kw(a.b.G()), O(a.uq, "mousewheel", function(a) {
    Us(this.b, 0 > a.detail ? -1 : 1)
  }, p, a))
}
B.enable = function() {
  this.B && (ad(this.B), this.B = n)
};
B.disable = function(a) {
  this.B = O(T("dp_0_tbl"), "mousedown", function(b) {
    a();
    b.stopPropagation()
  }, m)
};

function PA(a, b, c, d, e) {
  this.A = n;
  this.D = p;
  this.C = a;
  this.B = d;
  this.o = c;
  this.ja = new Q(this);
  this.H = new QA(this.B, b, e, this.o)
}
PA.prototype.da = function(a, b, c) {
  this.Ia = a;
  a = new iw("dp_h", "dp_0", !Zg(this.o, 0, p), "dp_0_cur");
  this.ja.I(a, "toggle", this.X);
  this.b = new RA(b);
  var d = this.H,
      e = [iq, "w", "x"];
  d.b = this.b;
  var f = E(d.F, d);
  b.K = f;
  b.update();
  Xd(d.ja, d.D, e, d.b.Ns, p, d.b);
  Xd(d.ja, d.B, va, d.b.Ns, p, d.b);
  d.A = Yg(d.o, "showDeclined", "true");
  d.ja.I(d.o, "j", d.H);
  this.A = new OA(b, c, this.C, p);
  Tea(this.A);
  this.ja.I(this.C, v, this.W);
  this.ja.I(this.A, "N", this.ea);
  this.ja.I(this.A, "O", E(this.Z, this, a));
  this.F = this.o.hc();
  this.ja.I(this.o, "j", this.K)
};
PA.prototype.O = function() {
  return this.A.Bh != n
};
PA.prototype.X = function(a) {
  this.Ia.P("G");
  Gu(this.o, 0, !a.target.b);
  this.o.jb()
};
PA.prototype.K = function() {
  var a = this.o.hc();
  if (a != this.F) {
    this.F = a;
    var b = this.A.Gc();
    b.A = new Tp(a);
    b.xc = b.A.b(b.xc.A);
    b.update()
  }
};

function RA(a) {
  this.A = a;
  this.b = p
}
RA.prototype.Ns = function() {
  this.b || (this.b = m, Va.setTimeout(E(this.o, this), 0))
};
RA.prototype.o = function() {
  this.b = p;
  this.A.update()
};
PA.prototype.ea = function() {
  this.D && (Et = 100, Hp(), this.D = p)
};
PA.prototype.W = function(a) {
  var b = a.target;
  this.D = a = this.A.Bh != n;
  var c = this.B.b,
      c = a ? 4 : tu(c, b.b, Vl(b)),
      b = Vl(b);
  Et = a ? 0 : 100;
  zp(this.B, c, b) || Hp()
};
PA.prototype.Z = function(a, b) {
  if (a) jw(a, !a.b);
  else {
    var c = b.target;
    $l(c.selection, c.Gc().xc.A)
  }
};

function QA(a, b, c, d) {
  this.C = a;
  this.D = b;
  this.B = c;
  this.o = d;
  this.ja = new Q(this)
}
QA.prototype.F = function(a) {
  if (!this.C.o) return {};
  var b = kk(a.D, Rp(a));
  a = em(this.B, this.o);
  for (var c = this.D, d = b.end, e = nq(c, b.start.cb()), d = nq(c, d.cb()), b = {}; e <= d; ++e) {
    var f = c.b[e];
    if (f) for (var h = 0; h < f.length; ++h) if (gm(a, f[h])) {
      b[f.qe] = m;
      break
    }
  }
  for (var l in b) b[l] = "dp-with-events";
  return b
};
QA.prototype.H = function() {
  var a = Yg(this.o, "showDeclined", "true");
  this.A != a && (this.A = a, this.b.Ns())
};

function SA(a, b, c) {
  Y.call(this);
  this.F = xk(a);
  this.C = uk(a);
  this.o = b;
  this.H = c;
  this.B = new Q(this);
  this.A = Nd(a, 12) ? Jd(a, 12) : n
}
H(SA, Y);
B = SA.prototype;
B.qh = n;
B.L = function() {
  this.B.aa();
  SA.J.L.call(this)
};
B.ia = function() {
  this.V = this.b.U("div", this.H + "-nav");
  this.Zp();
  this.B.I(this.C, "newday", this.Zp);
  this.B.I(this.o, v, this.Zp);
  this.B.I(this.F, v, this.Zp)
};

function TA(a) {
  var b = a.b,
      c = b.G("navBack" + a.getId());
  c && a.A && a.A.vb(c);
  (b = b.G("navForward" + a.getId())) && a.A && a.A.vb(b);
  (b = a.qh.G()) && a.A && a.A.vb(b)
}
B.Zp = function() {
  var a = this.G(),
      b = [],
      c = this.o.contains(sk(this.C)),
      d;
  d = Uea;
  d.put("id", this.getId());
  this.qh = new Ky("Today", new Oy);
  this.qh.Ta(!c);
  b.push(d.toString());
  UA.put("id", this.getId());
  UA.put("currentDate", Vea(this));
  b.push(UA.toString());
  VA.put("navContent", b.join(t));
  a.innerHTML = VA.toString();
  this.xa && (WA(this), XA(this), TA(this))
};

function WA(a) {
  a.qh && !a.qh.xa && a.qh.render(a.b.G("todayButton" + a.getId()))
}

function XA(a) {
  var b = a.b,
      c = a.getId(),
      d = Z(a);
  d.I(b.G("navBack" + c), "mousedown", Xw);
  d.I(b.G("navForward" + c), "mousedown", Xw);
  Ku(d, b.G("navBack" + c), jA, a.qS);
  Ku(d, b.G("navForward" + c), jA, a.rS);
  a.qh.isEnabled() && Ku(d, a.qh.G(), jA, a.sS)
}
B.$ = function() {
  SA.J.$.call(this);
  WA(this);
  XA(this);
  TA(this)
};
B.qS = function() {
  this.o.mr(-1)
};
B.rS = function() {
  this.o.mr(1)
};
B.sS = function() {
  this.o.rd(sk(this.C))
};

function Vea(a) {
  var b = a.F.b;
  return 3 == a.o.b ? (a = a.o.focus, a = Kg(a.year, a.month, 1), b.ak(a)) : b.Ag(a.o.first, a.o.Ub)
}
var VA = new V('<div class="date-controls"><table class="nav-table" cellpadding="0" cellspacing="0" border="0"><tr>${navContent}</tr></table></div>'),
    Uea = new V('<td class=date-nav-today><div id="todayButton${id}"></div></td><td class=date-nav-prev><div id="navBack${id}" tabindex=0 role="button" title="' + I("Previous period") + '" class="navbuttonouter navBackOuter goog-inline-block"><div class="navbutton navBack goog-inline-block"></div></div></td><td class=date-nav-next><div id="navForward${id}" tabindex=0 role="button" title="' + I("Next period") + '" class="navbuttonouter navForwardOuter goog-inline-block"><div class="navbutton navForward goog-inline-block"></div></div></td>'),
    UA = new V('<td id="dateBox${id}" class=date-picker-off><div id="currentDate${id}" class=date-top>${currentDate}</div></td>');

function YA(a, b, c) {
  P.call(this);
  this.b = a;
  this.A = b;
  this.D = C(c) ? c : m;
  this.B = p;
  this.o = new Q(this);
  this.o.I(this.b, v, this.XJ);
  this.o.I(this.A, "k", this.YJ)
}
H(YA, P);
B = YA.prototype;
B.L = function() {
  YA.J.L.call(this);
  this.o.aa()
};
B.XJ = function() {
  this.B || (this.Lr(m), this.D && cm(this.A, Wea(this), Xea(this)), this.P(v), setTimeout(E(this.Lr, this, p), 0))
};
B.Lr = Oa("B");
B.YJ = function() {
  this.B || (this.Lr(m), this.tf(Yea(this)), this.P(v), setTimeout(E(this.Lr, this, p), 0))
};

function Yea(a) {
  var b = a.A.b,
      c = Vl(a.A),
      d = "custom," + c,
      e = a.b.o.Ca();
  a = a.b.A;
  switch (b) {
  case 3:
    return "month";
  case 2:
    return "week";
  case 1:
    return 1 == c ? "list" == e || "parallel" == e || e == Ja ? e : "day" : a == d ? d : n;
  default:
    return n
  }
}
function Wea(a) {
  switch (a.b.o.Ca()) {
  case "list":
  case Ja:
    return a.A.b;
  case "month":
    return 3;
  case "week":
    return 2;
  default:
    return 1
  }
}

function Xea(a) {
  switch (a.b.o.Ca()) {
  case "list":
  case Ja:
    return n;
  case "week":
  case "month":
    return n;
  case "day":
  case "parallel":
    return 1;
  default:
    return (a = a.b.A) && 0 == a.indexOf("custom,") ? parseInt(a.substr(7), 10) : n
  }
}
B.tf = function(a) {
  this.b.o.$a(a)
};

function ZA(a, b, c) {
  Ky.call(this, a, b || My.M(), c);
  this.lc(16, m)
}
H(ZA, Ky);
xy("goog-toggle-button", function() {
  return new ZA(n)
});

function $A(a, b) {
  Y.call(this);
  this.F = b || new Oy;
  this.C = !! a;
  this.A = {}
}
H($A, Y);
B = $A.prototype;
B.Pd = n;
B.$ = function() {
  $A.J.$.call(this);
  for (var a = Rx(this), b = Z(this), c = 0; c < a; c++) {
    var d = Sx(this, c);
    b.I(d, "action", this.pV);
    d = d.ac();
    b.I(d, "click", this.rV);
    this.C && (b.I(d, "focus", this.sV), b.I(d, "blur", this.qV));
    aB(this, c, a)
  }
  b.I(this.G(), "mouseover", this.oV);
  b.I(this.G(), "mouseout", this.nV)
};
B.Na = function() {
  this.B = this.o = p
};
B.sV = function() {
  this.o = m;
  this.tD()
};
B.qV = function() {
  this.o = p;
  window.setTimeout(E(this.uD, this), 100)
};
B.oV = function() {
  this.B = m;
  window.setTimeout(E(this.tD, this), 300)
};
B.tD = function() {
  if (this.B || this.o) {
    en(this.G(), "button-strip-over");
    for (var a = Rx(this), b = 0; b < a; b++) gn(Sx(this, b).G(), "hidden-button"), aB(this, b, a)
  }
};
B.nV = function() {
  this.B = p;
  window.setTimeout(E(this.uD, this), 500)
};
B.uD = function() {
  if (!this.B && !this.o) {
    gn(this.G(), "button-strip-over");
    for (var a = Rx(this), b = 0; b < a; b++) aB(this, b, a);
    bB(this)
  }
};

function aB(a, b, c) {
  c = c || Rx(a);
  var d = Sx(a, b);
  a = a.C && !(a.B || a.o);
  1 == c || a ? Ly(d, 0) : 0 == b ? Ly(d, 2) : b == c - 1 ? Ly(d, 1) : Ly(d, 3)
}
B.$a = function(a) {
  var b = this.Pd !== a;
  this.Pd = a;
  bB(this);
  b && a in this.A && this.P(v)
};
B.Ca = w("Pd");
B.ia = function() {
  var a = this.b,
      b;
  if (ic || hc) b = a.U("div", "trans-strip goog-inline-block");
  this.V = a.U("div", "button-strip goog-inline-block", b)
};
B.rV = function() {
  this.o = p;
  var a = this.A[this.Pd];
  a && a.wj(p)
};
B.pV = function(a) {
  var b = a.target.Ca();
  this.Pd == b ? a.target.Me(m) : (this.Pd = b, bB(this), this.P(v))
};

function bB(a) {
  a.Pd && a.Pd in a.A && (a.H = a.Pd);
  for (var b = Rx(a), c = 0; c < b; c++) {
    var d = Sx(a, c),
        e = d.Ca();
    d.Me(e == a.Pd);
    a.C && (a.B || a.o || e == a.H ? gn(d.G(), "hidden-button") : en(d.G(), "hidden-button"))
  }
};

function cB(a) {
  Y.call(this, a)
}
H(cB, Y);

function dB(a, b, c) {
  Y.call(this, k);
  b = b || a[0];
  this.o = new $A(c);
  this.ha(this.o);
  for (c = 0; c < a.length; c++) {
    var d = a[c],
        e = this.o,
        f = d,
        h = new ZA(mw(d), e.F);
    h.$a(f);
    e.ha(h, m);
    e.A[f] = h;
    e.xa && (f = Rx(e), aB(e, f - 1, f), 1 < f && aB(e, f - 2, f));
    d && 0 == d.indexOf("custom,") && (this.B = c, this.A = d)
  }
  this.o.$a(b)
}
H(dB, cB);
dB.prototype.B = -1;
dB.prototype.A = n;
dB.prototype.ia = function() {
  this.V = this.o.G()
};

function eB(a, b, c, d, e) {
  Y.call(this);
  this.B = a;
  this.Ja = Jd(a, 12);
  this.ya = pw();
  this.ka = b;
  this.H = c;
  this.wa = d;
  this.Z = new SA(this.B, this.ka, t);
  this.Ha = e;
  this.K = vp(this.B);
  this.ea = S(this.B);
  this.ha(this.Z)
}
H(eB, Y);
B = eB.prototype;
B.ia = function() {
  var a = this.b,
      b = a.U("div", "noprint"),
      c = a.U("div", {
      id: "t1"
    }, b);
  this.Z.render(b);
  a = a.G("topRightNavigation");
  this.F || (this.F = new dB(["day", "week", "month", this.H, "list"], this.wa), this.ha(this.F), this.o = new YA(this.F, this.ka, p));
  this.F.render(a);
  var b = Oy.M(),
      d = new Ky(t, b);
  this.ha(d);
  d.render(a);
  this.A = d;
  b = new Ky(t, b);
  this.ha(b);
  b.render(a);
  this.C = b;
  this.V = c;
  fB(this, p)
};
B.rb = y(p);
B.render = function() {
  eB.J.render.call(this, this.b.G("topLeftNavigation"))
};
B.$ = function() {
  eB.J.$.call(this);
  var a = Z(this);
  this.O && a.I(this.O, "action", this.FQ);
  this.W && a.I(this.W, "action", fw);
  var b = yo(this.B);
  Xd(a, b, "m", this.CQ, p, this);
  zo(this.B) || gB(this, p);
  this.o && a.I(this.o, v, this.HQ);
  a.I(this.K, "n", this.DQ);
  a.I(this.ea, "j", this.EQ)
};
B.EQ = function(a) {
  if (a.o && (a = Wg(this.ea), a != this.H)) {
    this.H = a;
    var b = this.o.b;
    b.A = a;
    var c = b.o,
        b = Sx(c, b.B);
    Ey(b, mw(a));
    if (a) {
      var d = b.Ca();
      d !== a && (b.Ca() === c.Pd && (c.Pd = a), b.$a(a), delete c.A[d], c.A[a] = b)
    }
  }
};
B.DQ = function() {
  var a = uu(this.K.b, "week");
  this.o.tf(a);
  fB(this, a == Ja)
};
B.FQ = function() {
  zo(this.B) && this.Ha()
};
B.HQ = function() {
  var a = this.o.b.o.Ca();
  a && zp(this.K, a)
};

function fB(a, b) {
  if (!b || a.ya) {
    var c = a.b;
    U(c.G("topLeftNavigation"), !b);
    U(c.G("topRightNavigation"), !b);
    U(c.G("searchNavigation"), b)
  }
}
B.CQ = function(a) {
  gB(this, a.Pa)
};

function gB(a, b) {
  a.O && a.O.Ta(b);
  a.W && a.W.Ta(b);
  a.A && a.A.Ta(b);
  a.C && a.C.Ta(b)
};

function hB(a, b) {
  Y.call(this);
  this.o = a;
  this.A = b || "gp"
}
H(hB, Y);
B = hB.prototype;
B.$d = n;
B.ia = function() {
  hB.J.ia.call(this);
  this.V = this.$d = this.b.U("div", this.A + "-bg");
  this.o && (this.$d.title = this.o);
  U(this.$d, p)
};
B.show = function(a, b, c, d) {
  Fw(this.$d, c, d);
  hv(this.$d, a, b);
  U(this.$d, m)
};
B.Ka = function() {
  U(this.$d, p)
};

function iB(a, b, c) {
  if (b) {
    var d;
    b instanceof Y ? d = b.G() : d = b;
    a = Jw(d, E(a.qX, a));
    for (b = 0; b < a.length; b++) if (d = a[b], c) if (d.tabIndex != n && 0 <= d.tabIndex) d.removeAttribute("data-oti");
    else {
      if (d.getAttributeNode("data-oti") != n) {
        var e = parseInt(d.getAttribute("data-oti"), 10);
        d.tabIndex = e;
        d.removeAttribute("data-oti")
      }
    } else d.tabIndex != n && 0 <= d.tabIndex && (d.setAttribute("data-oti", t + d.tabIndex), d.tabIndex = -1)
  }
}
B.qX = function(a) {
  if (!Ri(a)) return p;
  var b = a.tagName.toLowerCase();
  return "input" == b || "textarea" == b || "select" == b || "a" == b || "button" == b || a.getAttributeNode("tabindex") != n ? m : Tu(a.getAttribute("data-oti"))
};
B.L = function() {
  hB.J.L.call(this);
  this.$d && (Li(this.$d), this.$d = n)
};

function jB(a, b, c, d) {
  Y.call(this, a);
  this.o = b;
  this.F = c;
  this.B = new hB("You must be online to use gadgets.");
  a = Z(this);
  a.I(c, "p", this.XR);
  a.I(yo(d), "m", this.YR)
}
H(jB, Y);
B = jB.prototype;
B.xg = p;
B.Hn = p;
B.Ww = p;
B.lo = n;
B.QF = 200;
B.Ob = 162;
B.Md = n;
B.ia = function() {
  var a = this.b;
  this.V = Du(a, '<div class="sn-wrapper"><div class="sn-glasspane"></div><div class="sn-frame"><div class="sn-container"></div></div></div>');
  var b = this.G();
  this.Md = Pt(a, k, "sn-container", b)[0];
  Pt(a, k, "sn-frame", b);
  a = Pt(a, k, "sn-glasspane", b)[0];
  this.B.render(a)
};
B.$ = function() {
  jB.J.$.call(this);
  var a = this.G();
  Z(this);
  this.A = a.parentNode;
  kB(this);
  lB(this)
};
B.Ab = w("Md");

function kB(a) {
  var b = 1 == Rx(a) ? Sx(a, 0) : n;
  b && !b.zt && (b = n);
  var c = a.lo;
  a.lo = b;
  a.xa && (c && c != b && c.qp(), b && b.qp());
  a.Ww && mB(a)
}
function lB(a) {
  var b = a.G().firstChild;
  b.style.width = a.Ob + "px";
  b.style.paddingLeft = (a.xg ? 0 : 1) + "px";
  a.xg ? (gn(a.A, "gadgetcell-closed"), b = b.offsetWidth + "px") : (en(a.A, "gadgetcell-closed"), b = t);
  a.A.style.width = b
}
function nB(a, b) {
  a.QF = Math.max(b, 200);
  a.xa && kB(a)
}
B.setVisible = function(a) {
  oB(this, a, m)
};
B.isEnabled = w("Hn");
B.enable = function() {
  this.Hn = m;
  oB(this, "1" == this.o.getString("gadgetsVisible", "0"), p);
  this.P(zx(1, p))
};
B.disable = function() {
  this.Hn = p;
  oB(this, p, p);
  this.P(zx(1, m))
};

function oB(a, b, c) {
  b != a.xg && (a.xg = b, a.P(zx(1, !b)), a.xa && lB(a), c && (a.o.set("gadgetsVisible", a.xg ? "1" : "0"), a.o.jb()), a.xg && a.o.get("gadgets") && bx())
}
B.cE = function(a, b) {
  this.o.set("gadgetsExpanded_" + a, b ? "1" : "0");
  this.o.jb()
};
B.Da = w("xg");
B.BU = function(a) {
  return a == this.lo ? this.QF - 32 : a.getHeight()
};

function dy(a, b, c) {
  var d = E(a.BU, a, b);
  b.Dw = d;
  a.On(b, C(c) ? c : Rx(a), m);
  c = b.getId();
  Wx(b, "1" == a.o.getString("gadgetsExpanded_" + c, "1"));
  Z(a).I(b, "J", E(a.cE, a, c, p));
  Z(a).I(b, "K", E(a.cE, a, c, m));
  Z(a).I(b, "L", a.Ew);
  a.Ew()
}
function ey(a, b) {
  a.removeChild(b);
  a.lo && (a.lo = n);
  0 == Rx(a) && a.disable();
  a.Ew()
}
B.FW = function() {
  delete this.C;
  Zea(this);
  kB(this)
};

function Zea(a) {
  var b = 1 == Rx(a);
  kn(a.Md, "sn-solo", b);
  Qx(a, function(a) {
    var d = !b;
    a.vF != d && ((a.vF = d) && !a.Xb && a.G() ? $x(a) : !d && a.Xb && (K(a.Xb), delete a.Xb, gn(a.By, "goog-zippy-expanded", "goog-zippy-collapsed")), d || a.mj || Wx(a, m))
  })
}
B.Ew = function() {
  this.C || (this.C = window.setTimeout(E(this.FW, this), 0))
};
B.XR = function() {
  var a = this.F.wc;
  (a = "g" != a && "f" != a) && this.Hn ? this.disable() : a || this.Hn || !this.D || 0 == this.D.length || this.enable()
};
B.YR = function(a) {
  this.Da() && this.isEnabled() && (a = a.Pa, iB(this.B, this, a), a ? (this.Ww = p, this.B.Ka()) : (this.Ww = m, mB(this)))
};

function mB(a) {
  var b = vj(a.G()),
      c = oj(a.G());
  a.B.show(c.x, c.y, b.width, b.height)
};

function pB(a, b, c, d) {
  Y.call(this, a);
  this.o = b;
  this.O = c;
  this.H = d;
  this.K = Jd(d, 12).qc("VR");
  Z(this).I(c, "p", this.bT);
  Z(this).I(this.o, ["disable", "enable"], this.update)
}
H(pB, Y);
pB.prototype.Md = n;
pB.prototype.A = n;
pB.prototype.B = "mainbody";
pB.prototype.C = p;
var qB = ["snt-open", "snt-closed", "snt-open-focus", "snt-closed-focus"],
    rB = ["has-sn", "has-sn-ex"];
B = pB.prototype;
B.ia = function() {
  var a = this.b;
  this.V = Du(a, '<div class="snt-wrapper"><div class="snt-container"><div class="snt-pointer"></div></div></div>');
  var b = this.G();
  this.Md = Pt(a, k, "snt-container", b)[0];
  this.F = Pt(a, k, "snt-pointer", b)[0]
};
B.$ = function() {
  pB.J.$.call(this);
  var a = this.G(),
      b = Z(this);
  b.I(a, "mousedown", this.oU);
  b.I(a, "mouseover", this.nU);
  b.I(a, "mouseout", this.mU);
  this.A = a.parentNode
};
B.Ab = w("Md");
B.update = function() {
  if (this.xa) {
    var a = this.o.Da(),
        b = this.o.isEnabled();
    this.A.className = b ? a ? "rhstogglecell-open" : t : "rhstogglecell-hidden";
    var c = this.b.G("maincell");
    b ? (a = a ? 0 : 1, jn(c, rB[a], rB[1 - a])) : gn(c, rB[0], rB[1]);
    b && xj(this.b.G(this.B)) && !this.C && (this.C = m, setTimeout(E(this.vJ, this), 0))
  }
};
B.vJ = function() {
  this.C = p;
  var a = this.b,
      a = this.B && a.G(this.B).offsetHeight || 0,
      b = this.Ab(),
      c = this.isEnabled() ? [this.o.Da() ? "snt-open" : "snt-closed"] : n;
  jn(this.F, qB, c);
  this.K ? b.style.margin = a / 2 - 9 + "px 0" : b.style.height = a + "px";
  this.isEnabled() || sB(this, p)
};
B.isEnabled = function() {
  return zo(this.H) || this.o.Da() ? this.o.isEnabled() : p
};
B.oU = function() {
  if (this.isEnabled()) {
    var a = this.o;
    a.setVisible(!a.xg)
  }
};

function sB(a, b) {
  var c = a.isEnabled(),
      d;
  b && c ? (d = a.o.Da() ? "snt-open-focus" : "snt-closed-focus", en(a.Ab(), "snt-focus")) : (d = a.o.Da() ? "snt-open" : "snt-closed", gn(a.Ab(), "snt-focus"));
  jn(a.F, qB, c ? [d] : n)
}
B.nU = function() {
  sB(this, m)
};
B.mU = function() {
  sB(this, p)
};
B.bT = function() {
  var a = this.O.wc;
  "f" == a ? this.B = "maincell" : "g" == a && (this.B = "mainbody");
  this.update()
};

function tB(a, b) {
  this.b = a;
  this.o = wi(a);
  this.A = new pr(this);
  this.B = b || 30000001
}
H(tB, uc);
B = tB.prototype;
B.V = n;
B.ra = n;
B.L = function() {
  this.A.aa();
  this.ra && (Tw(this.ra), this.ra.aa());
  tB.J.L.call(this)
};

function uB(a) {
  vB.put("closeCallback", a.A.b(a.Ka));
  vB.put("zIndex", a.B);
  a.V = Du(a.o, vB.toString());
  a.ra = new kx(a.V);
  gx(a.ra, m);
  hx(a.ra);
  a.ra.hp = p;
  O(a.ra, "beforehide", a.KL, p, a)
}
B.KL = function() {
  this.o.Uc(this.V)
};
B.render = function(a, b, c, d, e, f) {
  this.V || uB(this);
  this.ra.setVisible(p);
  this.V.style.left = "0";
  this.V.style.top = "0";
  this.b.appendChild(this.V);
  this.V.style.display = t;
  this.V.style.width = c ? c + "px" : t;
  this.V.childNodes[1].style.height = d ? d + "px" : t;
  this.V.childNodes[1].innerHTML = f;
  e && 0 < e.length ? (this.V.childNodes[0].childNodes[1].innerHTML = e, this.V.childNodes[0].style.display = t) : this.V.childNodes[0].style.display = "none";
  d = Bi(Cu(this.o));
  e = d.width;
  f = d.height;
  var h = sj(this.b);
  c = this.V.offsetWidth;
  d = this.V.offsetHeight;
  a = wB(a, e - c - 10);
  c = b;
  b = wB(b, f - d - 10);
  c != b && (a += 16);
  a -= h.x;
  b -= h.y;
  this.V.style.left = a + "px";
  this.V.style.top = b + "px";
  this.ra.setVisible(m)
};

function Hea(a) {
  var b = parseInt(a.V.style.left, 10),
      c = parseInt(a.V.style.top, 10),
      d = a.V.offsetWidth,
      e = a.V.offsetHeight,
      f = Bi(Cu(a.o)),
      h = f.width,
      f = f.height,
      l = sj(a.b),
      b = b + l.x,
      c = c + l.y,
      b = wB(b, h - d - 10),
      c = wB(c, f - e - 10),
      b = b - l.x,
      c = c - l.y;
  a.V.style.left = b + "px";
  a.V.style.top = c + "px"
}
B.Ka = function() {
  this.ra && this.ra.setVisible(p)
};

function wB(a, b) {
  return Math.min(Math.max(a, 10), Math.max(b, 10))
}
var vB = new V('<div class=cc style=z-index:${zIndex}><div class=cc-titlebar><div class=cc-close onclick="${closeCallback}();"></div><div class=cc-title></div></div><div class=cc-body></div></div>');

function xB(a) {
  return '<div class="' + (a.Wm ? "cgd-top-event" : "cgd-bottom-event") + '"><div class="cgd-time">' + a.time + '</div><div class="cgd-title">' + a.title + "</div></div>"
};

function yB(a) {
  In.call(this, m, wu(jo(a)), wu(jo(a)));
  this.b = a
}
H(yB, In);
yB.prototype.wy = function(a, b, c, d, e) {
  if (!this.Da()) return t;
  c = [];
  var f = ["cgd-col"],
      h = "tg-col";
  e && (b.equals(e.va()) && (h = "tg-col-today tg-today"), b.equals(Jg(e)) && 0 < a && (h = "tg-col-today"));
  f.push(h);
  ug(b.Jb()) && f.push("tg-weekend");
  a = f.join(" ");
  c.push('<div style="');
  zB(42, c, m);
  c.push('" class="', a, '"></div>');
  d = 42 * (d.o - d.b) + 1;
  c.push('<div style="');
  zB(42, c);
  c.push("top:", d, 'px" class="cgd-col-last ', a, '"></div>');
  return c.join(t)
};
yB.prototype.vy = function(a, b, c, d) {
  if (!this.Da()) return t;
  a = [];
  for (var e = [], f = 0; f < c.length; ++f) {
    var h = c[f],
        l = io(this.b, h, b);
    l.top && a.push(AB(this, d, m, p, h));
    l.bottom && (l.ah ? e.push(AB(this, d, p, m, h)) : e.push(AB(this, d, p, p, h)))
  }
  b = [];
  d = 42 * (d.o - d.b);
  0 < a.length && (b.push('<div style="'), zB(42, b, m), b.push('">'), BB(b, m, a), b.push("</div>"));
  0 < e.length && (b.push('<div style="'), zB(42, b), b.push("top:", d, 'px">'), BB(b, p, e), b.push("</div>"));
  return b.join(t)
};

function BB(a, b, c) {
  for (var d = 2 < c.length, e = d ? 1 : c.length, f = 0; f < e; ++f) a.push(c[f]);
  d && a.push(xB({
    Wm: b,
    time: t,
    title: "+" + (c.length - e) + " more"
  }))
}
function AB(a, b, c, d, e) {
  a = a.b.H;
  d = d ? "Until " + a.ob(e.Za().Lb(), m, m) : a.Ul(Tf(e), m, m);
  b = b.F.b.Vg(e);
  return xB({
    Wm: c,
    time: d,
    title: b
  })
}
yB.prototype.yy = function(a, b) {
  this.Da() && (b.push('<div style="'), zB(Jn(this), b, m), b.push('"><div class="cgd-gutter-bg-top"></div></div>'))
};
yB.prototype.xy = function(a, b) {
  this.Da() && (b.push('<div style="'), zB(this.Da() ? this.A : 0, b), b.push('"><div class="cgd-gutter-bg-bottom"></div></div>'))
};

function zB(a, b, c) {
  b.push("position:relative;height:", a, "px;margin-bottom:-", a, "px;");
  c && b.push("top:-", a, "px;")
};

function CB(a) {
  Qm.call(this, a)
}
H(CB, Qm);
CB.prototype.B = function(a, b, c, d, e, f) {
  var h = [];
  for (h.push(Sa(Sm(this, 0), Sm(this, d))); d < e; ++d) h.push(Sm(this, d));
  h.push(Sa(Sm(this, e), Sm(this, 24)));
  d = "crd-col " + this.A.ql() + (b ? t : " tg-timesnotlast crd-timesnotlast");
  b = this.A.getItem();
  e = this.A.b;
  d = '<td><div class="' + d + '" style="top:-' + a + "px; margin-bottom:-" + 2 * a + 'px;">';
  for (var l = h.length, q = 0; q < l; q++) d += '<div style="height:' + a + 'px;" class="' + (0 == q ? "crd-top" : t) + (q == l - 1 ? "crd-bottom" : t) + '"><div class="' + b + (q == l - 1 ? " " + e : t) + '" style="height:' + (a - 1) + 'px;">' + h[q] + "</div></div>";
  f.push(d + ("</div>" + c + "</td>"))
};

function DB() {}
H(DB, Vm);
DB.prototype.A = function() {
  return new CB(this)
};

function EB(a) {
  return '<div class="rrd-range-group rrd-' + a.jn + '" style="top:' + a.top + 'px;"><div class="rrd-collapse-area rrd-' + a.jn + " rrd-area-" + a.jn + '" style="' + ("height:" + a.height + "px;margin-bottom:-" + a.height + "px;") + (a.Wm ? " top:-" + a.height + "px;" : t) + '"><div class="rrd-collapse-area rrd-background"></div></div><div class="rrd-handle-container"><div class="rrd-handle-image"></div><div class="rrd-handle rrd-handle-' + a.jn + '"></div></div></div>'
};

function FB(a) {
  Qm.call(this, a);
  this.o = GB(a.B);
  this.b = GB(a.o)
}
H(FB, Qm);

function GB(a) {
  return Math.max(0, Math.min(24, Math.round(a)))
}
FB.prototype.B = function(a, b, c, d, e, f) {
  var h = [];
  if (this.C) {
    var l = (e - d) * a,
        q = this.o * a - l - 1,
        r = this.b * a - l - 1,
        l = {
        jn: "top",
        top: q,
        height: l + q,
        Wm: m
        };
    h.push(EB(l));
    l = {
      jn: "bottom",
      top: r,
      height: -r,
      Wm: p
    };
    h.push(EB(l))
  }
  h.push(c);
  Rm(this, a, b, h.join(t), d, e, p, f)
};

function HB(a, b, c) {
  b = Bv(b, n, "rrd-handle-container");
  this.C = a;
  this.B = Bv(b, n, "rrd-range-group");
  this.b = cu("rrd-collapse-area", this.B);
  this.A = c.o;
  this.o = c.F * this.A;
  this.F = (this.D = Ot(this.B, "rrd-top")) ? a.o * this.A - this.o - 1 : a.b * this.A - this.o - 1
}
HB.prototype.Ev = function(a) {
  var b = this.F + a;
  a = this.A;
  var c = this.o;
  if (this.D) {
    var d = this.C,
        b = GB((b + c + 1) / a);
    2 <= d.b - b && (d.o = b);
    a = d.o * a - c - 1
  } else d = this.C, b = GB((b + c + 1) / a), 2 <= b - d.o && (d.b = b), a = d.b * a - c - 1;
  this.D ? (c = this.o + a, this.B.style.top = a + "px", this.b.style.top = "-" + c + "px", this.b.style.height = c + "px", this.b.style.marginBottom = "-" + c + "px") : (this.B.style.top = a + "px", this.b.style.height = -a + "px", this.b.style.marginBottom = a + "px")
};

function IB(a) {
  this.K = a
}
H(IB, DB);
IB.prototype.B = 0;
IB.prototype.o = 24;
IB.prototype.A = function() {
  return this.K.A ? IB.J.A.call(this) : this.D ? this.b = new FB(this) : new Qm(this)
};

function JB() {
  this.F = new Q(this);
  this.D = new Q(this)
}
B = JB.prototype;
B.Fr = p;
B.init = function(a, b) {
  this.A = b;
  this.o = new IB(b);
  var c = go(b);
  c ? (this.o.B = c.start, this.o.o = c.end) : (this.o.B = 8, this.o.o = 17);
  c = new yB(b);
  b.C && (b.C = p, Bn(b.b.F, 0, 0), Xn(b.b, b.B, b.D));
  b.o = c;
  b.o && (b.o.setVisible(b.A), b.b && (b.b.B = b.o), Hp());
  b.K = this.o;
  Hp();
  this.F.I(a, "t", this.ty);
  this.F.I(a, "s", this.ry);
  this.ty()
};
B.ty = function() {
  window.setTimeout(E(this.AY, this), 0)
};
B.ry = function() {
  Yd(this.D);
  this.b && this.b.hT();
  this.Fr = p
};
B.AY = function() {
  var a = KB(this);
  a && LB(this) && (this.Fr && this.ry(), a = E(this.D.I, this.D, a.ownerDocument), a("mousedown", this.jS), a("mousemove", this.kS), a("mouseup", this.lS), this.b && this.b.Um(LB(this), MB(this), NB(this, "rrd-handle-top"), NB(this, "rrd-handle-bottom")), this.Fr = m)
};

function KB(a) {
  return (a = vu(jo(a.A))) ? a.G() : n
}
function NB(a, b) {
  var c = KB(a);
  return c && cu(b, c)
}
function LB(a) {
  return NB(a, "rrd-area-top") || NB(a, "crd-top")
}
function MB(a) {
  return NB(a, "rrd-area-bottom") || NB(a, "crd-bottom")
}
B.jS = function(a) {
  if (du(a, 0)) {
    var b = a.target;
    if (Bv(b, n, "rrd-handle")) {
      var c = this.o.b;
      this.H = lv(a).y;
      this.C = p;
      this.B = new HB(c, b, vu(jo(this.A)));
      this.b && this.b.QJ(b);
      a.preventDefault();
      a.stopPropagation()
    } else if (Ot(b, "rrd-collapse-area")) OB(this);
    else if (Bv(b, n, "crd-top") || Bv(b, n, "crd-bottom")) a = jo(this.A).b, b = jo(this.A).o, this.o.B = a, this.o.o = b, Xn(jo(this.A), 0, 24), c = this.A, c.A = p, c.o && (c.o.setVisible(p), Hp()), PB(this, a, b, p), this.b && this.b.Ut()
  }
};

function OB(a) {
  var b = a.o.b,
      c = b.o,
      b = b.b;
  Xn(jo(a.A), c, b);
  var d = a.A;
  d.A = m;
  d.o && (d.o.setVisible(m), Hp());
  PB(a, c, b, m);
  a.b && a.b.Ut()
}
function PB(a, b, c, d) {
  b = b + "|" + c + "|" + (d ? "1" : "0");
  a = S(a.A.F);
  a.set("collapsedTime", b);
  a.jb()
}
B.lS = function() {
  if (this.B) {
    var a = this.o.b;
    this.o.B = a.o;
    this.o.o = a.b;
    this.C && OB(this)
  }
  this.B = n;
  this.b && this.b.WN()
};
B.kS = function(a) {
  this.B && (a.preventDefault(), a.stopPropagation(), a = lv(a).y - this.H, 20 < Math.abs(a) && (this.C = m), this.B.Ev(a), this.b && this.b.Ev())
};

function QB() {
  var a = Ei("div", {
    style: "position:absolute;top:-999px;left:-999px;width:0;height:0",
    "aria-live": "polite",
    "aria-relevant": "additions",
    "aria-atomic": "true"
  });
  document.body.appendChild(a);
  this.b = a;
  this.A = new si(this.o, 3E3, this)
}
function RB(a, b) {
  Hi(a.b, b);
  a.A.start()
}
QB.prototype.o = function() {
  Ii(this.b)
};

function SB(a, b, c, d, e, f, h, l) {
  this.D = c;
  this.A = a;
  this.b = b;
  this.o = new Q(this);
  this.C = S(c);
  this.H = h;
  this.K = !! l;
  var q = Zg(this.C, h, m);
  this.Xb = new iw(f, e, !q);
  this.o.I(this.b, "h", function() {
    for (var a = fm(this.b), b = a.length, c = 0; c < b; c++) if (js(this.A, a[c]) && !q) {
      jw(this.Xb, m);
      break
    }
  });
  this.o.I(this.b, "clm.itemstate", function(a) {
    this.b.getItem(a.id).b || (a = a.id, js(this.A, a) && (a = T("label-" + a)) && TB(this, a, p))
  });
  this.o.I(this.Xb, "toggle", this.tJ);
  Td(this.D).isEnabled(7) && this.o.I(new gy(this.A.b), "key", this.sJ);
  this.kf =
  new lw(this.A.b);
  O(this.kf, ["focusin", "focusout"], this.uJ, p, this)
}
H(SB, uc);
B = SB.prototype;
B.uJ = function(a) {
  var b = a.target;
  sb(b.className, "calListRow") && UB(this, b, "focusin" == a.type)
};
B.sJ = function(a) {
  switch (a.keyCode) {
  case 38:
    this.A.wg();
    break;
  case 40:
    this.A.rg();
    break;
  case 32:
    var b = ou(this.A);
    b && VB(this, b);
    break;
  case 46:
    if (!this.K) return;
    (b = ou(this.A)) && Tr(this.b, b);
    break;
  default:
    return
  }
  a.preventDefault()
};
B.init = function() {
  var a = this.A.b;
  this.o.I(a, "mousedown", this.qN);
  this.o.I(a, "mouseover", this.wB);
  this.o.I(a, "mouseout", this.wB)
};
B.L = function() {
  this.o.aa();
  this.Xb.aa();
  SB.J.L.call(this)
};
B.tJ = function() {
  Xp(this.D).ip();
  Gu(this.C, this.H, !this.Xb.b);
  this.C.jb()
};

function VB(a, b) {
  var c = fp(),
      d = a.b,
      e = b && d.getItem(b),
      f = p;
  e && (f = !e.Ue, d.Ke(b, f));
  c.b(f ? "cal_check" : "cal_uncheck")
}
B.qN = function(a) {
  for (var b = a.target, c = this.A.b; b && b != c;) {
    var d, e = b.id;
    if (e) if (a.preventDefault(), d = Vt("popup", e)) {
      zo(this.D) && this.B && (a = this.B.show(d, b)) && (en(b, "calListImg-opn"), this.F = d, b = E(this.PJ, this, b, d), Lu(this.o, a, "hide", b, k));
      break
    } else if (d = Vt("label", e)) {
      VB(this, d);
      break
    }
    b = b.parentNode
  }
};
B.PJ = function(a, b) {
  delete this.F;
  gn(a, "calListImg-opn");
  WB(this, T("label-" + b).parentNode, Ot(a, "calListImg-hvr"))
};
B.wB = function(a) {
  for (var b = a.target, c = this.A.b; b && b != c;) {
    if ("calListRow" == b.className) {
      WB(this, b, "mouseover" == a.type);
      break
    } else sb(b.className, "calListImg") && kn(b, "calListImg-hvr", "mouseover" == a.type);
    b = b.parentNode
  }
};

function WB(a, b, c) {
  var d = Fu("div", "calListChip", b)[0],
      d = Vt("label", d.id);
  d != a.F && Xr(a.b, d) && UB(a, b, c)
}

function TB(a, b, c) {
  var d = a.b.getItem(Vt("label", b.id)),
      e = t;
  a = a.b.Af(d);
  var f = d.Ue;
  c && (e = "black");
  var h;
  if (c || f) h = d.color.b.b;
  d = e;
  b = b.getElementsByTagName("div");
  e = b.length;
  for (f = 0; f < e; ++f) {
    var l = b[f],
        q = l.className;
    sb(q, "calListLabelOuter") ? l.className = "calListLabelOuter" + (c ? " calListLabelOuter-hvr" : t) : sb(q, "calListSquare") ? (q = h || t, l.style.backgroundColor = q, l.style.borderColor = q) : sb(q, "calListLabel") && (l.style.color = d, l.className = a ? "calListLabel-sel" : "calListLabel")
  }
}

function UB(a, b, c) {
  if (document.activeElement != b || c) {
    var d = Fu("div", "calListChip", b)[0];
    b = Fu("div", "calListImg", b)[0];
    TB(a, d, c);
    if (d = Vt("popup", b.id)) a.b.getItem(d), Xr(a.b, d) && a.b.Af(d), kn(b, "calListImg-sel", c)
  }
};

function XB(a, b, c) {
  this.ja = new Q(this);
  this.o = a;
  this.b = c;
  this.ja.I(b, v, this.A)
}
XB.prototype.A = function(a) {
  var b = a.target;
  a = 16;
  switch (tu(this.o.b, b.b, Vl(b))) {
  case 0:
    a = 1;
    break;
  case 1:
    a = 7;
    break;
  case 2:
    a = 42;
    break;
  case 4:
    a = Vl(b)
  }
  var c = Gg(b.first);
  c.Y -= a;
  b = c.Ea();
  c.Y += 4 * a;
  a = c.Ea();
  this.b(b, a)
};

function YB(a) {
  if (!a || !Ri(a)) return p;
  if (Wi(a)) return m;
  switch (a.tagName) {
  case "A":
    return m;
  case "BUTTON":
  case "INPUT":
  case "SELECT":
  case "TEXTAREA":
    return !a.disabled
  }
  return p
}
function ZB(a) {
  YB(a) ? a.focus() : (a = Ui(a, YB)) && a.focus()
};

function $B(a, b, c, d) {
  this.b = a;
  this.K = b;
  this.ea = c;
  this.ka = d;
  this.F = a.A;
  this.W = a.C;
  this.A = {};
  this.Z = [];
  this.O = [];
  this.C = this.H = Td(this.K).isEnabled(7);
  this.da = n;
  this.Ia = p
}
B = $B.prototype;
B.Po = function() {
  this.B && (this.B.aa(), this.B = n);
  this.D && (this.D.aa(), this.D = n);
  this.o && (this.o.aa(), this.o = n);
  this.X && (this.X.aa(), this.X = n);
  this.kf && (this.kf.aa(), this.kf = n)
};
B.JI = function() {
  zc(this.O, function(a) {
    a.aa()
  })
};
B.xz = function(a) {
  this.Po();
  var b = T("lv_" + this.b.b.B);
  this.B = new lA(b);
  aC(this, this.B, "lvr-", this.sL);
  aC(this, this.B, "lvd-", this.qL);
  aC(this, this.B, "lvl-", this.oA);
  aC(this, this.B, "lvw-", this.rL);
  a && (this.D = new lA(a), aC(this, this.D, "lv-x", E(this.nA, this, m)), aC(this, this.D, "lv-c", E(this.nA, this, p)), aC(this, this.D, "lvl-", this.oA));
  this.H && (this.X = new gy(b), this.kf = new lw(document), this.o = new Q(this), this.o.I(this.X, "key", this.mL), this.o.I(this.ka, "shortcut", this.nL), this.o.I(this.kf, "focusin", this.pL), this.o.I(this.ea, v, this.tL), a = Jp.M(), this.o.I(a, "o", this.oL))
};
B.tL = function() {
  this.C = m
};
B.oL = function() {
  this.C = m
};
B.kC = function() {
  if (this.H && (this.C = m, this.b.b)) {
    var a = lu(this.b.b);
    a && ZB(a)
  }
};
B.mL = function(a) {
  var b = this.b.b,
      c = bC(this, a.target);
  if (c != n) {
    var d = mu(b, c),
        c = Ot(c, "lv-navigable"),
        e = n;
    switch (a.keyCode) {
    case 38:
      c ? (d = Ab(b.A, d), e = 0 == d || -1 == d ? n : b.A[d - 1]) : e = d;
      break;
    case 40:
      d = Ab(b.A, d);
      e = d == b.A.length - 1 || -1 == d ? n : b.A[d + 1];
      break;
    case 37:
      d = Ab(b.A, d); - 1 == d ? d = n : (d = Qb(b.A, 0, d), c = Su(d, b.O, b), d = 0 > c ? n : cb(d) ? d.charAt(c) : d[c]);
      e = d;
      break;
    case 39:
      d = Ab(b.A, d);
      e = -1 == d ? n : Hb(Qb(b.A, d + 1), b.O, b);
      break;
    default:
      return
    }
    a.preventDefault();
    e != n && (a = Tt(b, e)) && ZB(a);
    this.Ia || (this.Ia = m, ep("av_anav"))
  }
};
B.nL = function(a) {
  var b = bC(this, a.target);
  if (b != n) {
    var c = nu(b);
    if (c && (c = ru(this.F, c.Ld()))) {
      Ot(b, "lv-navigable");
      a = parseInt(a.o, 10);
      switch (a) {
      case 31:
        b = sj(b);
        dz.yf(c, b);
        break;
      case 32:
        this.W.hb(c) && dz.yh(c);
        break;
      case 34:
        c.Yd() && (b = c.getId(), fu(b, 1));
        break;
      case 35:
        c.Yd() && (b = c.getId(), fu(b, 2));
        break;
      case 36:
        c.Yd() && (b = c.getId(), fu(b, 3));
        break;
      default:
        return
      }
      ep("av_scut " + a)
    }
  }
};

function bC(a, b) {
  var c = a.b.b;
  return Yi(b, function(a) {
    return mu(c, a) != n
  }, m)
}
B.pL = function(a) {
  var b = a.target;
  $ea(this, b) ? this.C = p : cC(this, b) && (this.C = m, a = this.b.b, b = bC(this, b), b != n && (this.da = mu(a, b)))
};

function cC(a, b) {
  var c = a.b.b;
  return c ? (c = T("lv_" + c.B)) ? Si(c, b) : p : p
}
function $ea(a, b) {
  return b == document.body || cC(a, b) ? p : !Yi(b, function(a) {
    return a.getAttribute && "dialog" == a.getAttribute("role")
  }, m)
}
B.zz = function() {
  if (this.H) {
    var a = this.b.b,
        b = n;
    this.C && a && (this.da && (b = Tt(a, this.da)), b || (b = lu(a)));
    b && ZB(b)
  }
};

function aC(a, b, c, d) {
  c = E(a.eS, a, c, b.b);
  a = E(d, a);
  a = pA(b, c, a);
  b.B.push(a)
}
B.eS = function(a, b, c) {
  return (a = Kv(c, F(Lv, a), b)) && !Ot(a, "lv-noact") ? a : n
};
B.sL = function(a) {
  var b = nu(a);
  dC(this, b) ? this.A[b.toString()] ? this.collapse(b) : this.Hv(b) : (b = ru(this.F, b.Ld()), a = sj(a), dz.yf(b, a))
};
B.qL = function(a, b) {
  if ("click" == b.type) {
    var c;
    if (c = (c = Yt("lvd-", a)) && /^[0-9]{8}$/.test(c) ? mk(c) : n) JA && JA.o.tf("day"), Yl(this.b.D, c, 1)
  }
};
B.oA = function(a) {
  a = Yt("lvl-", a);
  var b = this.b.b;
  switch (a) {
  case "e":
    qs(this.b);
    break;
  case "l":
    os(this.b);
    break;
  case "fs":
    mp(b, 1);
    break;
  case "fd":
    mp(b, 2);
    break;
  case "bd":
    mp(b, -2)
  }
  this.kC()
};
B.rL = function(a) {
  var b;
  b = Yt("lvw-", a);
  if (b = Ut(b)) b = ru(this.F, b.Ld()), afa(this, b, a)
};

function afa(a, b, c) {
  Rq(a.K).b(Ca, E(function() {
    var a = new tB(document.body, 180);
    a.V || uB(a);
    O(a.ra, "hide", a.aa, p, a);
    zo(this.K) && gA(c, b, a)
  }, a))
}
B.Hv = function(a) {
  Rq(this.K).b(Ca, E(this.oT, this, a))
};
B.oT = function(a) {
  if (dC(this, a)) {
    var b = T("li-" + a.toString()),
        c = this.b.b;
    this.A[a.toString()] = m;
    if (sv(b.innerHTML)) {
      var d = ru(this.F, a.Ld()),
          e = eC(d, n);
      this.O.push(e);
      d = Ei("div", {
        "class": "lv-event-info" + (d.oc() ? " lv-pb" : t)
      });
      b.appendChild(d);
      e.render(d)
    }
    U(b, m);
    b = T(c.B + "z" + a.toString());
    jn(b, ["lv-zippy"], ["lv-zippy-exp"]);
    Ej(cu("lv-event-title", b.parentNode), "expanded", m);
    (a = T(c.B + "ev" + a.toString())) && U(a, p)
  }
};
B.collapse = function(a) {
  var b = this.b.b;
  U(T("li-" + a.toString()), p);
  delete this.A[a.toString()];
  var c = T(b.B + "z" + a.toString());
  jn(c, ["lv-zippy-exp"], ["lv-zippy"]);
  Ej(cu("lv-event-title", c.parentNode), "expanded", p);
  (a = T(b.B + "ev" + a.toString())) && U(a, m)
};
B.nA = function(a) {
  var b = this.b.b;
  a ? Bb(Tda(b), this.Hv, this) : (this.A = {}, b.render())
};
B.kJ = function(a) {
  for (var b = {}, c = 0; c < a.length; ++c) {
    var d = a[c];
    this.Z[d] || (this.A[d] = m);
    b[d] = m
  }
  this.Z = b
};
B.yz = function() {
  var a = [];
  zc(this.A, function(b, c) {
    if (T("li-" + c) && b) {
      var d = Ut(c);
      this.Hv(d)
    } else a.push(c)
  }, this);
  zc(a, function(a) {
    delete this.A[a]
  }, this)
};

function dC(a, b) {
  var c = ru(a.F, b.Ld());
  return !!c && !a.W.b.getItem(c.Aa()).o
};

function fC(a, b) {
  this.X = a;
  this.b = b || T("lo-c");
  this.o = xj(this.b);
  var c = Rq(a),
      d = Af(a);
  this.D = c = c.o;
  this.C = d;
  this.ja = new Q(this);
  this.ja.I(c, "A", this.K);
  this.ja.I(d, "b", this.K);
  this.ja.I(c, "B", this.H);
  this.ja.I(d, "d", this.H);
  this.F()
}
fC.prototype.K = function() {
  this.o || this.A || (this.A = Va.setTimeout(E(this.F, this), 50))
};
fC.prototype.H = function() {
  this.o && !this.D.b && Fc(this.C.b) && (this.A && (Va.clearTimeout(this.A), this.A = n), this.A = Va.setTimeout(E(this.F, this), 100))
};
fC.prototype.F = function() {
  this.A = n;
  this.o != ( !! this.D.b || !Fc(this.C.b)) && (this.D.b || !Fc(this.C.b) ? this.o || (this.o = m, U(this.b, m), gC(this)) : (this.o = p, U(this.b, p), this.B = n, this.o && gC(this), RB(Jd(this.X, 24), "Loading complete")))
};

function gC(a) {
  a.B ? (qv(a.B, 6, a.b, 6), en(a.b, "spos")) : (a.b.style.left = t, a.b.style.top = t, gn(a.b, "spos"));
  a.B = n
};

function hC(a, b) {
  this.ja = new Q(this);
  this.ja.I(b, "p", this.o);
  this.b = b;
  0 != this.b.eb && iC(this)
}
H(hC, uc);
hC.prototype.L = function() {
  hC.J.L.call(this);
  K(this.ja);
  this.ja = n
};
hC.prototype.o = function() {
  iC(this)
};

function iC(a) {
  a = "g" == a.b.wc;
  U(T("vr-nav"), a);
  U(T("nav"), a)
};

function jC(a, b, c, d) {
  Y.call(this);
  this.F = a;
  this.O = Jd(a, 12);
  this.C = b;
  this.H = c;
  this.K = d || "qnb";
  b = Oy.M();
  a = new Ky("Create", b);
  this.ha(a);
  this.B = a;
  this.H && (b = new Ky("\u25bc", b), this.ha(b), Ly(a, 2), Ly(b, 1), this.o = b)
}
H(jC, Y);
B = jC.prototype;
B.ia = function() {
  this.V = this.b.U("div", this.K + "-container")
};
B.$ = function() {
  jC.J.$.call(this);
  var a = Z(this);
  if (this.A) {
    Ku(a, this.A, jA, this.WA);
    var b = this.A;
    Dx(this.B, b.parentNode, b)
  } else this.B.render(this.G()), this.o && (this.o.render(this.G()), this.O.vb(this.o.G(), "Quick add"));
  zo(this.F) || kC(this, p);
  this.C ? Ku(a, this.B.G(), jA, this.C) : this.B.Ta(p);
  this.o && (Ku(a, this.o.G(), jA, this.WA), en(this.o.G(), this.K + "-qab"));
  b = yo(this.F);
  Xd(a, b, "m", this.xM, p, this)
};
B.L = function() {
  Ii(this.G());
  this.H = this.C = this.A = n;
  jC.J.L.call(this)
};
B.WA = function() {
  zo(this.F) && this.H()
};
B.xM = function(a) {
  kC(this, a.Pa)
};

function kC(a, b) {
  b ? (a.B.Ta( !! a.C), a.o && a.o.Ta(m), a.A && (gn(a.A, "ui-disabled"), a.A.tabIndex = 0)) : (a.B.Ta(p), a.o && a.o.Ta(p), a.A && (en(a.A, "ui-disabled"), a.A.tabIndex = -1))
};

function lC(a, b) {
  Y.call(this);
  this.o = a;
  this.B = pw();
  this.A = b || "msf"
}
H(lC, Y);
B = lC.prototype;
B.jq = n;
B.Se = n;

function bfa(a) {
  a.B && ow() && (gbar.qfgq().setAttribute("placeholder", "Search Calendar"), J && gbar.qfgq().setAttribute("title", "Search Calendar"), pw() && Z(a).I(gbar.qfgf(), "submit", a.Sv))
}
B.ia = function() {
  var a = this.b;
  this.V = this.jq = a.U("form", {
    autocomplete: "off",
    "class": this.A + "-container goog-inline-block"
  });
  var b = {
    "class": "to-disable",
    name: "q",
    maxlength: 2048,
    size: 28,
    id: "maininput",
    placeholder: "Search Calendar"
  };
  J && (b.title = "Search Calendar");
  this.jq.appendChild(a.U("input", b));
  this.Se = new Ky(t, new Oy);
  this.Se.vb("Search my calendars");
  Dy(this.Se, this.A + "-button");
  Dy(this.Se, "icon-button");
  this.ha(this.Se, m)
};
B.$ = function() {
  lC.J.$.call(this);
  var a = Z(this);
  a.I(this.jq, "submit", this.Sv);
  a.I(this.Se, "action", this.Sv);
  var b = yo(this.o);
  Xd(a, b, "m", this.KT, p, this);
  zo(this.o) || mC(this, p)
};
B.L = function() {
  this.Se = n;
  lC.J.L.call(this)
};
B.Sv = function(a) {
  a.preventDefault();
  Rq(this.o).b(Ja, function() {
    cfa()
  })
};
B.KT = function(a) {
  mC(this, a.Pa)
};

function mC(a, b) {
  b ? (a.Se.Ta(m), a.Se.G().tabIndex = 0) : (a.Se.Ta(p), a.Se.G().tabIndex = -1)
};

function nC() {
  this.b = p;
  this.o()
}
nC.prototype.o = function() {
  var a;
  var b;
  a = T("hc-test");
  a || (a = Ei("div", {
    style: "position:absolute;top:-999px;height:5px;border:1px solid;border-color:blue pink;background-image:url(" + pg() + ");",
    id: "hc-test"
  }), document.body.appendChild(a));
  b = a;
  a = oC(b, "borderTopColor");
  var c = oC(b, "borderRightColor");
  b = oC(b, "backgroundImage");
  a && b ? (a = a == c, c = "none" == b || sb(b, "invalid-url"), a = a || c) : (Zo.M().log("hc_fl", 0), a = p);
  a != this.b && ((this.b = a) && Zo.M().log("hc_on", 0), kn(document.body, "hcm", this.b))
};

function oC(a, b) {
  var c = lj(a, b);
  c || (c = a.currentStyle ? a.currentStyle[b] : n);
  return c
};
var dz = n,
    pC = n,
    qC = n,
    rC = p,
    JA = n;

function sC(a) {
  this.b = a
}
H(sC, Xv);
sC.prototype.o = function(a) {
  if (Va._ol_background) tC(a);
  else {
    var b = fp();
    uC();
    cp(b, "delayed_css");
    dfa(a);
    cp(b, "delayed_init");
    yt.b("tot_delayed_load");
    window.setTimeout(function() {
      Zq(a, 805)
    }, 0)
  }
};

function dfa(a) {
  var b = Dp.M(),
      c = Jp.M();
  O(c, "o", b.Yz, k, b);
  var c = vp(a),
      d = new PA(b.C, Yp, S(a), c, Mj.M()),
      e = c.A,
      f = uk(e.A);
  d.da(e, e.b, f);
  e.o = d;
  Od(a, 24, new QB);
  Ld(a, 809);
  new XB(c, b.C, rt);
  Td(a).isEnabled(64) && Od(a, 23, new nC);
  efa(a);
  ho(R()) && (b = new JB, d = Dp.M(), d.Z = b, b.init(d, d.O));
  b = zo(a);
  d = new tB(document.body, 180);
  dz = new vC(new wC(d, ci.M()));
  pC = new yz(a, dz);
  e = Ao();
  new tA(Dp.M(), !b && !e, dz, pC, d);
  b = lp.M();
  d = JA.o;
  e = NA();
  d = new $B(b, a, d, e);
  b.o = d;
  np(b);
  b = Mj.M();
  hw = new SB(tt, b, R(), 0, "lhscalinner_my", "clst_my", 1);
  hw.init();
  gw = new SB(ut, b, R(), 0, "lhscalinner_fav", "clst_fav", 2, m);
  gw.init();
  b = IA.M();
  b.register(b.o);
  ffa(a, c.A);
  gfa(a);
  tC(a);
  b = Xp(a);
  c = new xC;
  b.A = c;
  b.o.I(c, "resize", b.Xz);
  a = new Hs(a);
  O(c, "resize", E(a.apply, a));
  c.Wz()
}
function ffa(a, b) {
  var c = Jp.M(),
      d = Xp(a);
  O(c, "p", function() {
    "g" == c.wc && d.Gr()
  });
  O(b, "G", E(d.ip, d));
  var e = yx(a);
  d.K = e.b
}

function efa(a) {
  var b = Wg(S(a)),
      c = uu(wp(a), b),
      b = new eB(a, Bp(), b, c, yA);
  b.render();
  JA = b;
  Uda(vp(a));
  W("srreg") ? (new lC(a)).render(W("srreg")) : bfa(new lC(a));
  b = Rq(a);
  b = E(b.b, b, Ca, function() {
    hfa()
  });
  c = T("sidebar");
  c.innerHTML = t;
  (new jC(a, F(Zy, n), b)).render(c);
  a = Jp.M();
  new hC(0, a)
}

function gfa(a) {
  var b = Td(a),
      c = b.isEnabled(48),
      b = b.isEnabled(106);
  if (c || b) {
    var d = wi(),
        e = S(a),
        f = Jp.M(),
        h = new jB(d, e, f, a);
    qC = h;
    var l = new pB(d, h, f, a),
        q = Xp(a);
    nB(h, q.b);
    O(q, "H", function() {
      nB(h, q.b);
      l.update()
    });
    h.render(T("gadgetcell"));
    l.render(T("rhstogglecell"));
    b && ifa(new yC(e, h, Mj.M(), dz, yt, E(pC.DC, pC), a));
    c && (by = new ay(e, h), Yg(e, "customGadgetsPane", "false") && by.B(), e.get("gadgets") && bx());
    !zo(a) && h.Da() && h.setVisible(!h.xg)
  }
}

function uC() {
  if (!rC && _delayedLoadContext.css) {
    var a = _delayedLoadContext.css;
    if (!zo(R())) var b = "//calendar.google.com/googlecalendar/".replace(/\//g, "/").replace(/\./g, "."),
        a = a.replace(new RegExp(b, "g"), t);
    Ew(a);
    rC = m
  }
}
var _InjectCss = uC;

function tC(a) {
  _ol_enabled && Ao() && Zq(a, 811)
};
Ou(804, function(a) {
  return new sC(a)
});
Ou(809, function(a) {
  return new fC(a)
});

function zC() {}
zC.prototype.kl = y(p);

function vC(a) {
  this.o = a;
  this.b = {}
}
H(vC, zC);
B = vC.prototype;
B.nj = function(a, b, c, d) {
  (this.b[a.Aa()] || this.o).nj(a, b, c, d)
};
B.Tk = function(a, b) {
  (this.b[a.Aa()] || this.o).Tk(a, b)
};
B.yf = function(a, b, c) {
  (this.b[a.Aa()] || this.o).yf(a, b, c)
};
B.kl = function(a, b) {
  return (this.b[a] || this.o).kl(a, b)
};
B.lj = function(a, b, c, d) {
  (this.b[a] || this.o).lj(a, b, c, d)
};
B.yh = function(a) {
  (this.b[a.Aa()] || this.o).yh(a)
};

function AC() {}
H(AC, zC);
B = AC.prototype;
B.Fj = n;
B.ds = n;
B.VV = function(a) {
  this.ds = a;
  if (this.Fj) {
    for (a = 0; a < this.Fj.length; a++) this.Fj[a].call(n, this.ds);
    this.Fj = n
  }
};

function BC(a, b) {
  if (a.ds) b(a.ds);
  else {
    var c = !a.Fj;
    c && (a.Fj = []);
    a.Fj.push(b);
    c && a.A.call(n)
  }
}
B.nj = function(a, b, c, d) {
  BC(this, function(e) {
    e.nj(a, b, c, d)
  })
};
B.Tk = function(a, b) {
  BC(this, function(c) {
    c.Tk(a, b)
  })
};
B.yf = function(a, b, c) {
  BC(this, function(d) {
    d.yf(a, b, c)
  })
};
B.lj = function(a, b, c, d) {
  BC(this, function(e) {
    e.lj(a, b, c, d)
  })
};
B.yh = function(a) {
  BC(this, function(b) {
    b.yh(a)
  })
};

function wC(a, b) {
  this.b = a;
  this.o = b
}
H(wC, zC);
B = wC.prototype;
B.nj = function(a, b, c, d) {
  uea(a, b, c, d)
};
B.Tk = function(a, b) {
  var c = a.Xc();
  c && c.getUrl() ? zo(R()) && gA(b.target, a, this.b) : Rq(R()).b(Ca, function() {
    var c = yx(R()),
        e = eC(a, c.b);
    xx(c, a.getId(), {
      x: b.clientX,
      y: b.clientY
    }, e)
  })
};
B.yf = function(a, b, c) {
  var d = R();
  if (zo(d) || Rr(Mj.M(), a.Aa())) if (b = Rq(d), Jj(a)) b.b(Ba, function() {
    CC(a)
  });
  else if (a.oc()) sw(d, a);
  else {
    var e = fp(),
        f = c || "ef_view_from_chip";
    e.fb = f;
    var h;
    (c = Vq(d)) && (h = c.o(c.b().uv));
    b.b(Ba, function() {
      e.b(f + ".ll_ef");
      var b = og(d),
          b = (Oj(a, 2097152) || xu(a)) && b.hb(a);
      DC(a.getId(), b, p, k, e, h)
    })
  }
};
B.kl = function(a) {
  a = this.o.get(a);
  return !!a && 60 <= a.uc
};
B.lj = function(a, b, c, d) {
  a = R();
  Rq(a).b(Ba, function() {
    oz(d)
  })
};
B.yh = function(a) {
  Sda(a.getId())
};
var jfa = 0,
    EC = [],
    FC = [],
    GC = 18E4,
    HC, IC;

function JC() {
  return IC || (IC = new P)
}
function KC(a) {
  EC.push(a);
  FC.push(-1)
}
function LC(a, b) {
  C(HC) || (HC = window.setInterval(F(MC, n, n, n, k), Math.max(GC, 1E3)), a && (b || MC)())
}
function kfa(a) {
  NC(a);
  JC().P("P")
}
function lfa(a) {
  NC(a)
}

function MC() {
  for (var a = ++jfa, b = [], c = EC.length; 0 <= --c;) if (-1 === FC[c]) {
    FC[c] = a;
    var d = EC[c];
    try {
      var e = d();
      e && Array.prototype.push.apply(b, e)
    } catch (f) {}
  }
  c = F(kfa, a);
  d = F(lfa, a);
  b = mfa(b);
  if (0 == b.length) NC(a);
  else {
    e = R();
    try {
      Cf(Af(e), "ping", b, 9, c, d)
    } catch (h) {
      NC(a)
    }
  }
}
function Kt() {
  window.clearInterval(HC);
  HC = k;
  LC(m)
}
function NC(a) {
  for (var b = EC.length; 0 <= --b;) FC[b] == a && (FC[b] = -1)
}

function mfa(a) {
  a = Cb(a, function(a) {
    return a instanceof Array && 0 < a.length
  });
  for (var b = [], c = 0; c < a.length; c++) {
    for (var d = a[c], e = [], f = 1; f < d.length; f += 2) e.push(d[f]), e.push(d[f + 1] || t);
    e = we(e);
    b.push(d[0], e)
  }
  return b
};

function OC(a, b) {
  this.D = "Task";
  this.Ra = a;
  this.Jd = b
}
H(OC, Qy);
B = OC.prototype;
B.Qu = function(a) {
  return this.Jd.kl(this.Ra, a)
};
B.Wq = function(a) {
  var b = [];
  b.push(Ty("Task:", Uy(a)));
  b.push(Ty("Due date:", Vy(a)));
  b.push(Ty("Note:", '<div class="textbox-fill-wrapper"><div class="textbox-fill-mid"><textarea id="' + a.oa("note") + '" type="text" class="textbox-fill-input cb-textarea"></textarea></div></div>'));
  b.push('<tr><td colspan="2" class="cb-actions"><span id="' + a.oa("create-button") + '"></span></td></tr>');
  return Xy(b.join(t))
};
B.Nw = function(a) {
  var b = a.fa("what").value,
      c = a.fa("note").value;
  this.Jd.lj(this.Ra, a.o, b, {
    eC: c
  })
};
B.Jn = function(a) {
  var b = T(a.oa("create-button")),
      c = new Ky("Create task", new Oy);
  c.render(b);
  Z(a).I(c, "action", F(a.In));
  window.setTimeout(function() {
    a.xa && a.fa("what").focus()
  }, 0)
};
B.tj = function(a) {
  var b = a.fa("what");
  return OC.J.tj.call(this, a, b)
};
B.uj = function(a, b) {
  var c = a.fa("what");
  OC.J.uj.call(this, a, b, c)
};

function PC(a, b, c, d) {
  this.C = {};
  this.A = {};
  this.b = a;
  this.K = b;
  this.D = c;
  this.B = d;
  this.o = new Q(this);
  this.o.I(this.b, va, this.da);
  this.o.I(this.b, "clm.itemstate", this.X)
}
H(PC, uc);
PC.prototype.L = function() {
  this.o.aa();
  PC.J.L.call(this)
};
PC.prototype.F = Qa(76);
PC.prototype.da = function() {
  for (var a in this.C) QC(this, a)
};
PC.prototype.X = function(a) {
  QC(this, a.id)
};

function QC(a, b) {
  var c = a.C[b];
  c && a.b.Af(b) && c.Um()
}
function RC(a, b, c, d) {
  this.b = a;
  this.o = b;
  this.Cb = c;
  this.C = d;
  this.B = b + "_"
}
H(RC, uc);
B = RC.prototype;
B.iF = p;
B.getId = w("o");
B.getName = w("Cb");
B.Ld = function(a) {
  return this.B + a
};
B.Um = function() {
  this.iF || (this.iF = m, SC(this.F, E(this.D, this)))
};

function TC(a, b, c) {
  RC.call(this, a, c, "Tasks", m);
  this.A = new UC(E(this.Um, this));
  this.F = b
}
H(TC, RC);
TC.prototype.D = function() {
  nfa(this, E(this.A.VV, this.A))
};

function UC(a) {
  this.A = a
}
H(UC, AC);
UC.prototype.kl = function(a, b) {
  return Sd(107) && Jg(b.start).equals(b.end)
};

function VC(a) {
  Y.call(this);
  this.o = a
}
H(VC, Y);
B = VC.prototype;
B.hs = n;
B.ia = function() {
  this.V = this.b.U("div", {
    style: "height:100%"
  }, "Loading...")
};
B.$ = function() {
  VC.J.$.call(this);
  SC(this.o, E(this.uU, this))
};
B.uU = function() {
  this.isDisposed() || (this.hs = new WC(this.G()), XC(this.hs))
};
B.L = function() {
  this.hs && this.hs.aa();
  VC.J.L.call(this)
};

function yC(a, b, c, d, e, f, h) {
  this.b = a;
  this.B = b;
  this.D = c;
  this.o = new Q(this);
  this.K = d;
  this.O = f;
  this.C = new YC(Rq(h), e);
  this.X = h
}
yC.prototype.A = n;
yC.prototype.H = n;
yC.prototype.F = n;

function ifa(a) {
  "rightNav" == a.b.getString("tasksPane", "disabled") && ZC(a);
  $C(a);
  a.o.I(a.D, "clm.itemstate", a.da);
  a.C.o = p
}
yC.prototype.da = function(a) {
  zo(this.X) && a.id == this.F.getId() && (a.o ? this.A || ($C(this), this.b.set("tasksPane", "rightNav"), "rightNav" == this.b.getString("tasksPane", "disabled") && ZC(this), this.b.jb(), this.B.setVisible(m)) : (ey(this.B, this.A), this.A.aa(), this.A = n, this.b.set("tasksPane", "disabled"), this.b.jb()))
};

function $C(a) {
  if (!a.F) {
    var b = new PC(Mj.M(), ci.M(), S(R()), Sh(R())),
        c = new TC(b, a.C, "dGFza3NAdGFza3MuZ29vZ2xlLmNvbQ"),
        d = c.getId(),
        e = c.getName(),
        f = c.C;
    b.C[d] = c;
    b.A[d] = [];
    var h = !pu(b.b, d) && Yg(b.D, d + "/hidden", p),
        l = Yg(b.D, d + da, m);
    Sr(b.b, e, d, f ? 2 : 0, l, h, m);
    b.K.add(d, new gi(f ? 70 : 20, 0, 2, e, b.D.get("timezone"), t, t, n, t, [], p, t, d, t, d, t, "no", t, t, t, [], [], t, t, m, p, t, p, t));
    b.b.Id();
    b = c.getId();
    a.K.b[b] = c.A;
    a.O.call(n, new OC(c.getId(), a.K));
    a.F = c
  }
}

function ZC(a) {
  a.H = new VC(a.C);
  var b = new Ux("tasksPane", a.H, "Tasks", m);
  Vx(b, 300);
  b.zt = m;
  b.P("L");
  var c = E(a.D.Ke, a.D, "dGFza3NAdGFza3MuZ29vZ2xlLmNvbQ", p);
  b.o = c;
  dy(a.B, b, 0);
  a.A = b;
  a.B.enable()
}
function YC(a, b) {
  this.B = a;
  this.A = b
}
YC.prototype.o = m;
YC.prototype.b = p;

function SC(a, b) {
  a.o && (a.b = m);
  a.B.b("tdl", function() {
    aD();
    if (a.b) {
      a.b = p;
      var c = a.A;
      c.b("tasks_js");
      bD.C(E(c.b, c, "tasks_model_loaded"))
    }
    b()
  })
};

function cD(a, b, c) {
  this.b = a;
  this.o = b;
  this.ja = c;
  this.Nc = E(this.hQ, this)
}
H(cD, uc);
B = cD.prototype;
B.us = p;
B.La = n;
B.nm = function() {
  this.La ? this.us = m : dD(this)
};
B.stop = function() {
  this.La && (qe(this.La), this.La = n, this.us = p)
};
B.L = function() {
  cD.J.L.call(this);
  this.stop()
};
B.hQ = function() {
  this.La = n;
  this.us && (this.us = p, dD(this))
};

function dD(a) {
  a.La = pe(a.Nc, a.o);
  a.b.call(a.ja)
};

function xC(a) {
  P.call(this);
  a = a || window;
  this.b = new si(this.jC, 40, this);
  this.o = new cD(this.qQ, 100, this);
  O(a, "resize", E(this.rQ, this))
}
H(xC, P);
B = xC.prototype;
B.yl = p;
B.rQ = function() {
  this.yl || this.b.start()
};
B.jC = function() {
  this.o.nm()
};
B.qQ = function() {
  this.yl = m;
  try {
    this.P("resize")
  } finally {
    this.yl = p
  }
};
B.Wz = function() {
  this.jC()
};
B.UV = function(a) {
  return E(function() {
    var b = this.yl;
    this.yl = m;
    try {
      a()
    } finally {
      this.yl = b
    }
  }, this)
};

function fy(a, b) {
  Y.call(this, b);
  this.fb = a || t
}
H(fy, Y);
fy.prototype.A = n;
var eD = "placeholder" in document.createElement("input");
B = fy.prototype;
B.Ik = p;
B.ia = function() {
  this.V = this.b.U("input", {
    type: "text"
  })
};
B.Ya = function(a) {
  fy.J.Ya.call(this, a);
  this.fb || (this.fb = a.getAttribute("label") || t);
  Hw(yi(a)) == a && (this.Ik = m, mv(this.G(), "label-input-label"));
  eD && (this.G().placeholder = this.fb);
  Ej(this.G(), "label", this.fb)
};
B.$ = function() {
  fy.J.$.call(this);
  var a = new Q(this);
  a.I(this.G(), "focus", this.sA);
  a.I(this.G(), "blur", this.eT);
  eD ? this.o = a : (hc && a.I(this.G(), ["keypress", "keydown", "keyup"], this.fT), a.I(Eu(yi(this.G())), "load", this.gT), this.o = a, fD(this));
  gD(this);
  this.G().o = this
};
B.Na = function() {
  fy.J.Na.call(this);
  this.o && (this.o.aa(), this.o = n);
  this.G().o = n
};

function fD(a) {
  !a.F && a.o && a.G().form && (a.o.I(a.G().form, "submit", a.aT), a.F = m)
}
B.L = function() {
  fy.J.L.call(this);
  this.o && (this.o.aa(), this.o = n)
};
B.sA = function() {
  this.Ik = m;
  mv(this.G(), "label-input-label");
  if (!eD && !hD(this) && !this.H) {
    var a = this,
        b = function() {
        a.G() && (a.G().value = t)
        };
    J ? pe(b, 10) : b()
  }
};
B.eT = function() {
  eD || (this.o.b(this.G(), "click", this.sA), this.A = n);
  this.Ik = p;
  gD(this)
};
B.fT = function(a) {
  27 == a.keyCode && ("keydown" == a.type ? this.A = this.G().value : "keypress" == a.type ? this.G().value = this.A : "keyup" == a.type && (this.A = n), a.preventDefault())
};
B.aT = function() {
  hD(this) || (this.G().value = t, pe(this.pX, 10, this))
};
B.pX = function() {
  hD(this) || (this.G().value = this.fb)
};
B.gT = function() {
  gD(this)
};
B.hasFocus = w("Ik");

function hD(a) {
  return !!a.G() && a.G().value != t && a.G().value != a.fb
}
B.clear = function() {
  this.G().value = t;
  this.A != n && (this.A = t)
};
B.reset = Qa(50);
B.$a = function(a) {
  this.A != n && (this.A = a);
  this.G().value = a;
  gD(this)
};
B.Ca = function() {
  return this.A != n ? this.A : hD(this) ? this.G().value : t
};
B.he = Qa(6);

function gD(a) {
  var b = a.G();
  eD ? a.G().placeholder != a.fb && (a.G().placeholder = a.fb) : fD(a);
  Ej(b, "label", a.fb);
  hD(a) ? (b = a.G(), mv(b, "label-input-label")) : (a.H || a.Ik || (b = a.G(), nv(b, "label-input-label")), eD || pe(a.yW, 10, a))
}
B.Ta = function(a) {
  this.G().disabled = !a;
  rv(this.G(), "label-input-label-disabled", !a)
};
B.isEnabled = function() {
  return !this.G().disabled
};
B.yW = function() {
  !this.G() || hD(this) || this.Ik || (this.G().value = this.fb)
};

function _AP_show(a, b, c) {
  var d = R();
  Rq(d).b(Ja, function() {
    ofa(a, b, c)
  })
};

function iD(a, b) {
  Pw.call(this, a || 0, b)
}
H(iD, Pw);
iD.prototype.Qb = w("b");
iD.prototype.get = w("X");
iD.prototype.set = function(a) {
  this.Ad(a)
};

function jD(a, b) {
  this.A = a;
  this.o = b
}
jD.prototype.b = function(a) {
  return Zd(a, this.A, this.o)
};

function kD(a) {
  a = new jD(a, Number.MAX_VALUE);
  return E(a.b, a)
}
var lD = kD(0),
    pfa = kD(1);

function mD(a, b, c) {
  this.b = new iD(a);
  this.ed = new iD(b);
  this.$m = new iD(c || -1);
  ah.call(this, [this.b, this.ed, this.$m])
}
H(mD, ah);
mD.prototype.wb = w("b");
mD.prototype.equals = function(a) {
  var b;
  if (b = a instanceof mD) b = 0 == ((this.$m.get() || -1) - (a.$m.get() || -1) || this.ed.get() - a.ed.get() || this.wb().get() - a.wb().get());
  return b
};

function nD(a) {
  return a.toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/^-+/, t).replace(/-+$/, t).replace(/--+/g, "-")
};

function oD(a, b, c, d) {
  this.D = a;
  var e = Td(this.D);
  this.C = e.isEnabled(89);
  this.A = pD(e, Ph(a));
  this.H = (this.B = (this.F = a = qD(e, Ph(a))) && e.isEnabled(90)) || e.isEnabled(91) && this.F;
  e = new rD(this);
  e = E(e.o, e);
  this.b = new iD(b, e);
  b = new sD(this);
  b = E(b.o, b);
  this.o = new ez(c, b);
  (c = d) || (c = Oh(Ph(this.D)).B);
  this.K = new ez(c || "talk.google.com", qfa());
  ah.call(this, [this.b, this.o])
}
H(oD, ah);

function qD(a) {
  var b = a.isEnabled(92) || a.isEnabled(90);
  a = a.isEnabled(87);
  return b && a
}

function pD(a) {
  var b = a.isEnabled(90),
      c = a.isEnabled(89);
  return qD(a) && !(b || c)
}
function tD(a) {
  return !a.H && !a.C && !a.F
}
function uD(a) {
  return a.b.get()
}
function vD(a) {
  return 2 == a.b.get() ? t : a.K.get()
}
oD.prototype.getUrl = function(a, b) {
  var c = rfa(this);
  if (c == n) return n;
  var d = this.o.get();
  if (3 == this.b.get()) {
    if (!a) return n;
    d = wD(a, b)
  }
  if (!d) return n;
  var e = [],
      f = Dv();
  f && e.push("authuser=" + f);
  (f = this.K.get()) && 1 == this.b.get() && (d = f + "/" + d, a && e.push("hceid=" + wD(a, b)));
  return c + d + (0 < e.length ? "?" + e.join("&") : t)
};

function wD(a, b) {
  var c = a.mc;
  if (b) {
    var d = b.A.o;
    d.get() != d.Qb() && (c = d.get())
  }
  d = a.ei || a.getId();
  d = Av(d).split(" ")[0];
  return c + "." + d
}
function rfa(a) {
  switch (a.b.get()) {
  case 0:
    return n;
  case 1:
    return "https://plus.google.com/hangouts/_/";
  case 2:
    return "http://goto.google.com/bridge/";
  case 3:
    return "https://plus.google.com/hangouts/_/calendar/";
  default:
    return a.b.get(), n
  }
}
function rD(a) {
  this.b = a
}
rD.prototype.o = function(a) {
  switch (a) {
  case 0:
  case 1:
  case 2:
  case 3:
    return a;
  default:
    return this.b.b.get(), 0
  }
};

function sD(a) {
  this.b = a
}
sD.prototype.o = function(a) {
  if (a == n) return n;
  switch (this.b.b.get()) {
  case 0:
  case 1:
    return nD(a).substring(0, 15);
  case 3:
    return a.replace(/[^A-Za-z0-9-_.]+/g, t);
  case 2:
    return a.replace(/[^\d-]+/g, t).replace(/^-+|-+$/g, t);
  default:
    return this.b.b.get(), t
  }
};

function qfa() {
  return function(a) {
    return a.toLowerCase().replace(/[^.a-z0-9-]/g, t)
  }
};

function xD(a, b, c, d, e) {
  ah.call(this, a);
  this.A = C(b) ? b : m;
  this.b = C(c) ? c : m;
  this.o = e || n;
  this.B = d || n
}
H(xD, ah);
xD.prototype.hb = w("A");

function yD() {
  this.C = /^(((?:(?:[^\s\(\)<>@,;:\\"\.\[\]]+)|(?:"(?:[^\\"]|\\[\s\S])*"))(?:\.(?:(?:[^\s\(\)<>@,;:\\"\.\[\]]+)|(?:"(?:[^\\"]|\\[\s\S])*")))*)@((?:(?:[^\s\(\)<>@,;:\\"\.\[\]]+)(?:\.(?:[^\s\(\)<>@,;:\\"\.\[\]]+))*)))$/;
  this.A = /^(?:(((?:(?:[^\s\(\)<>@,;:\\"\.\[\]]+)|(?:"(?:[^\\"]|\\[\s\S])*"))(?:\.(?:(?:[^\s\(\)<>@,;:\\"\.\[\]]+)|(?:"(?:[^\\"]|\\[\s\S])*")))*)@(?:(?:[^\s\(\)<>@,;:\\"\.\[\]]+)(?:\.(?:[^\s\(\)<>@,;:\\"\.\[\]]+))*))|(?:((?:"?(?:(?:[^\s\(\)<>@,;:\\"\.\[\]]+)(?:\s+)|(?:"(?:[^\\"]|\\[\s\S])*")(?:\s*))*(?:(?:[^\s\(\)<>@,;:\\"\.\[\]]+)|(?:"(?:[^\\"]|\\[\s\S])*"))"?))(?:\s*)(?:<(?:@(?:(?:[^\s\(\)<>@,;:\\"\.\[\]]+)(?:\.(?:[^\s\(\)<>@,;:\\"\.\[\]]+))*)(?:,+@(?:(?:[^\s\(\)<>@,;:\\"\.\[\]]+)(?:\.(?:[^\s\(\)<>@,;:\\"\.\[\]]+))*))*:)?(((?:(?:[^\s\(\)<>@,;:\\"\.\[\]]+)|(?:"(?:[^\\"]|\\[\s\S])*"))(?:\.(?:(?:[^\s\(\)<>@,;:\\"\.\[\]]+)|(?:"(?:[^\\"]|\\[\s\S])*")))*)@(?:(?:[^\s\(\)<>@,;:\\"\.\[\]]+)(?:\.(?:[^\s\(\)<>@,;:\\"\.\[\]]+))*))>)))$/;
  this.H = /^(?:[^@"]|(?:"(?:[^\\"]|\\[\s\S])*"))*@[^\s,]*/;
  this.K = /^(?:\.+|\s+|(?:"(?:[^\\"]|\\[\s\S])*")|[^"<>@.\s]+)/;
  this.F = /[\(\)<>@,;:\\"\.\[\]]/;
  this.B = /[\u200e\u200f]/g;
  this.D = /^\s*<[^<>]+>\s*$/
}
yD.prototype.b = function(a, b) {
  a = Fv(a);
  a = a.replace(this.B, t);
  !b && a.match(this.D) && (a = '"" ' + a);
  var c = a.match(this.A);
  return c ? c[1] || c[4] : n
};
yD.prototype.o = function(a) {
  var b = [];
  a = Fv(a);
  for (a = a.replace(/\u202a|\u202b|\u202c/g, t); a;) {
    a = a.replace(/^[,\s]+/, t);
    if (!a) break;
    var c = a.match(this.H),
        c = c ? c[0] : a;
    a = a.substring(c.length);
    b.length && 0 <= c.indexOf(">") && 0 > b[b.length - 1].indexOf("@") ? b[b.length - 1] += ", " + c : b.push(c)
  }
  for (a = 0; a < b.length; ++a) {
    var c = a,
        d;
    var e = b[a],
        e = e.replace(/^<([^<>]+)>$/, "$1");
    if (d = e.match(/^\s*([^<]+)<([^<>]+)@([^<>@]+)>\s*$/)) {
      var e = zD(this, d[1], p),
          f = zD(this, d[2], m);
      d = d[3];
      d = e + "<" + f + "@" + d + ">"
    } else(d = e.match(/^\s*([^<>]+)@([^<>@]+)\s*$/)) ? (f = zD(this, d[1], m), d = d[2], d = f + "@" + d) : d = e;
    b[c] = d
  }
  return b
};

function zD(a, b, c) {
  for (var d = []; b;) {
    var e = b.match(a.K);
    if (e) e = e[0], b = b.substring(e.length), d.push(e);
    else
    return d.push(b), d.join(t)
  }
  b = p;
  for (var f = k, h = 0; h < d.length; ++h) {
    e = d[h];
    if (!(/^\"/.test(e) || c && "." == e && f && "." != f) && a.F.test(e)) {
      b = m;
      break
    }
    /\S/.test(e) && (f = e)
  }
  "." == f && (b = m);
  if (b) {
    for (h = 0; h < d.length; ++h) e = d[h], /^\".*\"$/.test(e) && (d[h] = e.substring(1, e.length - 1));
    d[0] = d[0].replace(/^(\s*)/, '$1"');
    d[d.length - 1] = d[d.length - 1].replace(/(\s*)$/, '"$1')
  }
  return d.join(t)
}
Xa(yD);
