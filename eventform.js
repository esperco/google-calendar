/*
  https://www.google.com/calendar/static/307387de4562bc5dba423644325c5f55calendarjs_eventformcompiled__en.js
*/

function rra(a) {
  return Cb(dh(a.b), function(a) {
    return !a.Mc()
  })
}
function c1(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  var c = Math.min(a.length, b.length),
      d;
  for (d = 0; d < c && a.charAt(d) === b.charAt(d); ++d);
  return d
}
var sra = [, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function tra(a) {
  return a.A ? IE(a.o) : rra(a.o)
}

function d1(a, b, c, d) {
  if (d >= b.length) a.length && c.push({
    Nb: a,
    yt: -1
  });
  else
  for (a = a.replace(b[d], "\ufeff$1\x00"); a.length;) {
    var e = a.indexOf("\ufeff");
    if (0 > e) {
      d1(a, b, c, d + 1);
      break
    }
    var f = a.indexOf("\x00", e);
    d1(a.substring(0, e), b, c, d + 1);
    c.push({
      Nb: a.substring(e + 1, f),
      yt: d
    });
    a = a.substring(f + 1)
  }
}
function ura(a) {
  for (var b = -1, c = -1, d = 0; d < AI.length; ++d) {
    var e = sra[d];
    if (e) {
      var f = AI[d],
          h = BI[d];
      (e = Math.max(c1(e, a), c1(f, a), c1(h, a))) && e > c && (b = d, c = e)
    }
  }
  return c >= a.length + 1 >> 1 ? [b, c] : n
}

function e1(a, b, c) {
  this.Y = a;
  this.b = b;
  this.specified = c
}
e1.prototype.toString = function() {
  return this.Y.toString()
};

function vra(a) {
  a.b = {};
  Bb(tra(a), function(a) {
    a.A || a.Mc() || (VD(a) || NE(this, "<top>", a), Bb(this.A ? a.b.Qb() : a.b.get(), function(c) {
      NE(this, c, a)
    }, this))
  }, a)
}
function wra(a) {
  var b = [VL, OL, Wha];
  a = a.replace(Yha, " ");
  var c = [];
  d1(a, b, c, 0);
  return c
}
function xra(a) {
  if (bM) if (a in bM) a = 1;
  else {
    var b = ura(a);
    a = b && b[1] == a.length ? 2 : 0
  } else a = 0;
  return a
}

function yra(a, b, c) {
  a = a.b();
  var d, e, f;
  "DMY" == a && c[0] & 4 && c[1] & 2 ? (f = b[0], e = b[1], d = b[2]) : "MDY" == a && c[1] & 4 && c[0] & 2 && (f = b[1], e = b[0], d = b[2]);
  return f ? (100 > d && (d += 50 > d ? 2E3 : 1900), new e1(Kg(d, e, f), 0, 7)) : n
}
var zra = /\D/;

function Ara(a, b) {
  a.b && (b(a.b), a.b = n)
}
function f1(a, b, c, d) {
  var e = a.b ? a.b + " " + b : b;
  switch (a.o(e)) {
  case 0:
    a.b ? (c(a.b), a.b = n, f1(a, b, c, d)) : d(b);
    break;
  case 1:
    a.b = e;
    break;
  case 2:
    c(e), a.b = n
  }
}
function Bra(a) {
  this.o = a
}
Bra.prototype.b = n;

function Cra(a) {
  if (a.gG) return a.gG;
  var b = [],
      c;
  for (c in a)"number" === typeof a[c] && b.push(c);
  b.sort(function(a, b) {
    return b.length - a.length
  });
  return a.gG = "^(?:" + b.join("|") + ")"
}
function g1(a, b) {
  a.b || vra(a);
  return a.b[b] || a.B
}
var Dra = {
  SU: 0,
  MO: 1,
  TU: 2,
  WE: 3,
  TH: 4,
  FR: 5,
  SA: 6
};

function h1(a, b) {
  var c = a.b(b);
  if (!c) return n;
  var d = c.match(a.C);
  if (!d) return n;
  var e = d[3].toLowerCase();
  "resource.calendar.google.com" == e && (d = c.match(/^(.*)_/)) && (e = d[1]);
  return e
}
var i1 = [
  ["in", "Bahasa Indonesia"],
  ["ca", "Catal&agrave;"],
  ["cs", "\u010ce\u0161tina"],
  ["da", "Dansk"],
  ["de", "Deutsch"],
  ["en_GB", "English (UK)&lrm;"],
  ["en", "English (US)&lrm;"],
  ["es", "Espa&ntilde;ol"],
  ["es_419", "Espa&ntilde;ol (Latinoam\u00e9rica)&lrm;"],
  ["tl", "Filipino"],
  ["fr", "Fran&ccedil;ais"],
  ["hr", "Hrvatski"],
  ["it", "Italiano"],
  ["lv", "Latvie\u0161u"],
  ["lt", "Lietuvi\u0173"],
  ["hu", "Magyar"],
  ["nl", "Nederlands"],
  ["no", "Norsk (bokm\u00e5l)&lrm;"],
  ["pl", "Polski"],
  ["pt_BR", "Portugu\u00eas (Brasil)&lrm;"],
  ["pt_PT", "Portugu\u00eas (Portugal)&lrm;"],
  ["ro", "Rom&acirc;n\u0103"],
  ["sk", "Sloven\u010dina"],
  ["sl", "sloven\u0161\u010dina"],
  ["fi", "Suomi"],
  ["sv", "Svenska"],
  ["tr", "T&uuml;rk&ccedil;e"],
  ["vi", "Ti\u1ebfng Vi\u1ec7t"],
  ["el", "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"],
  ["ru", "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"],
  ["sr", "\u0421\u0440\u043f\u0441\u043a\u0438"],
  ["uk", "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"],
  ["bg", "\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438"],
  ["iw", "\u05e2\u05d1\u05e8\u05d9\u05ea"],
  ["ar", "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"],
  ["fa", "\u0641\u0627\u0631\u0633\u06cc"],
  ["hi", "\u0939\u093f\u0928\u094d\u0926\u0940"],
  ["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"],
  ["zh_TW", "\u4e2d\u6587\uff08\u7e41\u9ad4\uff09&lrm;"],
  ["zh_CN", "\u4e2d\u6587\uff08\u7b80\u4f53\uff09&lrm;"],
  ["ja", "\u65e5\u672c\u8a9e"],
  ["ko", "\ud55c\uad6d\uc5b4"]
],
    j1 = /h|ho\w?r\w?s|hs/i;

function Era(a, b) {
  function c(a, b, c, d) {
    l.push(a);
    r.push("undefined" != typeof b ? b : a.toString().length);
    q.push("undefined" != typeof c ? c : 0);
    h.push("undefined" != typeof d ? d : -1)
  }
  function d(a) {
    VL.exec(t);
    var b = VL.exec(a),
        d = b[2],
        b = b[3],
        e;
    t: {
      var f = ML.M();
      e = d;
      if (/[0-9]/.test(e)) e = Number(e);
      else {
        for (var f = f.b, h = Cra(f), l = []; e;) {
          var q = e.match(h);
          if (!q) {
            e = NaN;
            break t
          }
          q = q[0];
          l.push(q);
          e = e.substring(q.length)
        }
        e = f.un(l)
      }
    }
    if (isNaN(e)) c(a);
    else {
      d = zra.test(d) ? -1 : d.length;
      f = 0;
      b && (f = NL[b] || 0);
      if (!f) if (0 == e && 2 == d) f |= 1;
      else if (12 < e && 31 >= e) f |= 4;
      else if (12 >= e) f |= 6;
      else if (100 > e || 1900 <= e) f |= 1;
      c(e, a.length, f, d)
    }
  }
  function e(a) {
    var b = ura(a);
    b ? c(b[0], b[1], 10) : c(a)
  }
  for (var f = wra(b), h = [], l = [], q = [], r = [], s = new Bra(xra), u = 0; u < f.length; ++u) {
    var x = f[u].Nb;
    switch (f[u].yt) {
    case 0:
      f1(s, x, e, d);
      break;
    case 1:
    case 3:
      /^\s*-\s*$/.test(x) && (x = "-", c(x));
      break;
    case 2:
      f1(s, x, e, e)
    }
  }
  Ara(s, e);
  for (var z = x = s = f = 0, A = 0, u = 0; u < q.length; ++u) q[u] ? (6 === (q[u] & 6) ? ++x : (q[u] & 4 && ++f, q[u] & 2 && ++s), q[u] & 1 && ++z) : "string" === typeof l[u] && ++A;
  if (3 == l.length && 0 == A && (u = yra(a, l, q))) return u;
  if (x) {
    var G = p,
        M = p;
    if (!f || !s) {
      for (var u = p, N = 0; N < q.length + 4 && !q[N];)++N;
      N + 4 < q.length && (2 === h[N] || 4 === h[N]) && "-" === l[N + 1] && "-" === l[N + 3] && 0 <= h[N + 2] && q[N + 2] & 2 && 0 <= h[N + 4] && q[N + 4] & 4 && (u = m);
      if (u) q[N] = 1, q[N + 2] = 2, q[N + 4] = 4, x = 0, z = s = f = 1;
      else if (f) G = m;
      else if (s) M = m;
      else if (1 === x) G = m;
      else
      for (u = 0; u < q.length; ++u) if (6 == (q[u] & 6)) {
        "DMY" != a.b() ? (q[u] &= -5, ++s, --x, M = m) : (q[u] &= -3, ++f, --x, G = m);
        break
      }
    }
    if (G) for (u = 0; u < q.length; ++u) 6 == (q[u] & 6) && (q[u] &= -5, ++s, --x);
    else if (M) for (u = 0; u < q.length; ++u) 6 == (q[u] & 6) && (q[u] &= -3, ++f, --x)
  }
  var X, $, ca, G = 0,
      M = 7;
  if (f) for (u = 0; u < q.length; ++u) {
    if (q[u] & 4) {
      X = l[u];
      q[u] = 0;
      --f;
      break
    }
  } else X = n, M &= -5;
  if (s) {
    N = p;
    for (u = 0; u < q.length; ++u) if (q[u] & 2) {
      $ = l[u];
      q[u] &= -3;
      --s;
      N = 0 !== (q[u] & 8);
      break
    }
    if (N) for (var N = r[u], ua = u + 1; ua < q.length; ++ua) q[ua] & 8 && r[ua] > N && (q[u] |= 2, q[ua] &= -3, $ = l[ua], N = r[ua], u = ua)
  } else $ = n, M &= -3;
  if (N = !! z) for (u = 0; u < q.length; ++u) {
    if (q[u] & 1) {
      ca = l[u];
      q[u] = 0;
      --z;
      break
    }
  } else {
    ca = n;
    if (f | s | x) {
      for (var ua = -1, pa = 0, u = 0; u < q.length; ++u) q[u] && !(q[u] & 8) && l[u] > pa && (ua = u, pa = l[u]);
      if (0 <= ua) {
        ca =
        pa;
        switch (q[ua]) {
        case 4:
          --f;
          break;
        case 2:
          --s;
          break;
        case 6:
          --x
        }
        q[ua] = 0
      }
    }
    n == ca && (G -= 1, ca = a.o(), ca = ca.year + ($ && $ < ca.month ? 1 : 0), M &= -2)
  }
  n === X && (X = 1, G -= .5);
  if (n === $) if (N) $ = 1;
  else
  return n;
  100 > ca && (ca += 50 > ca ? 2E3 : 1900);
  G -= f + s + z + x + (A >> 2);
  return new e1(Kg(ca, $, X), G, M)
}
function k1(a, b, c) {
  return !!g1(a, b).b[c.email]
}
function Fra(a) {
  return Cb(Cc(a.b.Ia), function(a) {
    return a.Mc()
  })
}
function l1(a) {
  var b = FE(a).o;
  Bb(dh(a.b), function(a) {
    this.sq(a) && (b[a.getKey()] = a)
  }, a);
  return Cc(b)
}

function Gra(a, b) {
  return Sb(Dra[a], Dra[b])
}
function m1(a) {
  return a.o.get()
}
function n1(a) {
  return !Uu(a.o.get())
}
function o1(a, b, c) {
  a.Eb();
  c.call(a, b);
  bh(a, "S", b);
  a.xb();
  ch(a)
}
function p1(a) {
  return VD(a) && ob(a.email, "@allusers.d.calendar.google.com") ? "All users in " + a.email.split("@")[0] : a.Zb
}
function Hra(a, b, c) {
  return Cb(b, function(a) {
    var b = h1(this, a);
    if (ob(a, "calendar.google.com")) return p;
    for (a = 0; a < c.length; a++) if (c[a] == b) return p;
    return m
  }, a)
}

function Ira(a, b) {
  if (0 != a.b.length) {
    var c = vr(a, a.o);
    if (!b(a.b[c])) {
      var d = a.hasFocus(),
          e = Nt(a, c, -1, b);
      0 > e && (e = Nt(a, c, 1, b));
      0 <= e && (c = e);
      d ? yr(a, c) : xr(a, c)
    }
  }
}
function q1(a) {
  1 != a.getType() && g(Error("Not a reminder subscription!"));
  var b = C(k) ? k : 1;
  return a.wb() + ":" + a.uf + ":" + b
}
function r1(a) {
  return a.o
}
function s1(a) {
  if (!a.A) {
    var b = new Mf;
    b.b = a.o;
    b.o = a.b;
    b.A = a;
    a.A = b
  }
  return a.A
}
eP.prototype.My = eu(90, function() {
  var a = this.o,
      b = [],
      c;
  for (c in a.b) {
    var d = a.b[c];
    "string" == typeof d && 2 == d.length && b.push(d)
  }
  return b && 0 != b.length ? b : n
});
eP.prototype.jF = eu(89, function(a) {
  a = $O(a);
  if (!a) return n;
  for (var b = [], c = 0; c < a.length; c += 2) b.push(new qg(a[c], a[c + 1]));
  return b
});
dP.prototype.o = eu(88, function(a) {
  return this.A[a] || n
});
bK.prototype.Qw = eu(84, function(a) {
  return this.A && this.B ? (a = this.B(a)) ? this.A.Lc(a) : n : n
});
OE.prototype.vA = eu(83, function(a) {
  return this.B != n && a != this.B.o && a != this.B.b && a != this.B.A
});
OE.prototype.RC = eu(82, function(a) {
  return a != this.W && a != this.C && a != this.B && this.D != n && a != this.D.F
});
OE.prototype.$l = eu(81, function() {
  return 1 == this.K || 2 == this.K ? p : 3 == this.K ? this.O.Ba() || this.b.Ba() || this.tb.Ba() || this.Z.Ba() || this.ya.Ba() || this.D && this.D.Ba() || this.ib && this.ib.Ba() || !! this.H && this.H.Ba() : p
});
DE.prototype.sq = eu(80, function(a) {
  return !(a.email in this.o.A) && (k1(this.F, "<top>", a) || a.Mc())
});
uE.prototype.Ie = eu(79, function() {
  if (!this.Ha) {
    var a = function(a, b) {
      var e = b.get();
      return e != n && t != e ? ";" + a + "=" + e : t
    },
        b = function(a, b, e) {
        b = b.get();
        if (!b || !b.length) return t;
        e && (b = Pb(b), Rb(b, e));
        return ";" + a + "=" + b.join(",")
        };
    this.Ha = ["RRULE:FREQ=", this.C.get(), a("UNTIL", this.F), 0 < this.Z.get() ? a("COUNT", this.Z) : t, 1 < this.B.get() ? a("INTERVAL", this.B) : t, b("BYDAY", this.A, Gra), b("BYYEARDAY", this.W), b("BYWEEKNO", this.O), b("BYMONTH", this.H), b("BYSETPOS", this.K), a("WKST", this.Ja)].join(t)
  }
  return this.Ha
});
oE.prototype.b = eu(78, function(a) {
  this.o.set(a)
});
oE.prototype.A = eu(77, function(a) {
  this.B.set(a)
});
zl.prototype.Hk = eu(45, function(a, b) {
  var c, d, e;
  a instanceof Uf ? (d = a.start, e = a.end) : (d = a, e = b);
  if (isNaN(e.hour)) c = 24 <= (Yf(e, d).o / 3600 | 0) ? this.xn(new Uf(d, e)) : this.xd(d, m);
  else {
    var f = !(d.minute || e.minute);
    c = this.xd(d, m) + ", " + this.ob(d, f);
    d = (d.va() != e.va() ? this.xd(e, m) + ", " : t) + this.ob(e, f);
    c = tl(Ck(this.b.b, gl, 4), [c, d])
  }
  return c
});
bK.prototype.Hk = eu(44, function(a, b) {
  return this.o.Hk(a, b)
});
zl.prototype.xn = eu(42, function(a) {
  return this.Ag(a.start, Mg(a.end, -1))
});
bK.prototype.xn = eu(41, function(a) {
  return this.o.xn(a)
});
zk.prototype.C = eu(37, w("b"));
Uf.prototype.Wi = eu(34, function(a) {
  return new Uf(this.start.min(a.start), this.end.max(a.end))
});
fr.prototype.Wi = eu(33, function(a) {
  var b = this.clone(),
      c;
  for (c in a.b) b.b[c] = n;
  return b
});
fk.prototype.dd = eu(32, function() {
  gk(this);
  return Fg.prototype.dd.call(this)
});
Fg.prototype.dd = eu(31, function() {
  return new $t(this.year, this.month, this.Y, this.hour, this.minute, this.second)
});
$t.prototype.dd = eu(30, function() {
  return this
});
fk.prototype.Rb = eu(29, function() {
  gk(this);
  return Fg.prototype.Rb.call(this)
});
Fg.prototype.Rb = eu(28, function() {
  return new au(this.year, this.month, this.Y)
});
au.prototype.Rb = eu(27, function() {
  return this
});
$t.prototype.Rb = eu(26, function() {
  return new au(this.year, this.month, this.Y)
});

function Jra() {
  Ir(R()).b("Saving settings...");
  CI(0)
}

function Kra() {
  for (var a = [], b = _experimentalLangs ? _experimentalLangs.split(",") : [], c = {}, d = b.length, e = 0; e < d; ++e) c[b[e]] = m;
  b = i1.length;
  for (d = 0; d < b; d++) i1[d][0] in c || a.push(i1[d]);
  _sip && a.push(["en_US_pseudo", "\u00de\u0161\u00e9\u00fb\u00f0\u00f6-\u00c9\u00f1\u011d\u013c\u00ee\u0161\u0125"]);
  return a
}

function t1(a, b, c) {
  var d;
  d = (" " + b + " ").replace(Xha, ":");
  d.replace(/:(\s+)$/, "$1");
  d = d.replace(/\b([0-9]):/g, "0$1:").replace(/:([0-9])(?:[^0-9]|\b)/g, ":$10");
  d = d.replace(/(:[0-9][0-9]):[0-9\.]*/, "$1");
  d = d.replace(/\.[0-9]+/g, t);
  d = d.replace(OL, t);
  var e;
  XL.test(d) ? (b = 0, e = d.replace(XL, t)) : ZL.test(d) ? (b = 12, e = d.replace(ZL, t)) : YL.test(d) ? (b = 0, e = d.replace(YL, t)) : $L.test(d) ? (b = 12, e = d.replace($L, t)) : j1 && j1.test(d) ? (b = 24, e = d.replace(j1, t)) : (b = n, e = d);
  e = e.replace(/\D+/g, t);
  switch (e.length) {
  case 1:
  case 2:
    d = parseInt(e, 10);
    e = 0;
    break;
  case 3:
  case 5:
    d = parseInt(e.charAt(0), 10);
    e = parseInt(e.substring(1, 3), 10);
    break;
  case 4:
  case 6:
    d = parseInt(e.substring(0, 2), 10);
    e = parseInt(e.substring(2, 4), 10);
    break;
  default:
    return n
  }
  if (24 < d || 60 < e) return n;
  var f;
  b !== n ? (f = 12 === b, 0 === b && 12 === d && (d = 0)) : 0 === d || 12 < d ? f = p : a.A() || (c && (c.hour > d || c.hour === d && c.minute > e) ? f = m : 6 >= d && (f = m));
  f ? d = d % 12 + 12 : 24 === d && (d = 0);
  return new Rg(d, e, 0)
}
function u1(a, b) {
  var c = Era(a, b);
  return c && -2 < c.b ? c.Y : n
}
function v1(a) {
  return a.b
}

function w1(a, b) {
  a.Km = b;
  a.Oc && U(a.Oc, a.Km)
}
function Lra(a) {
  for (var b = t, c = t, d = 0; d < a.length;) {
    var e;
    e = a;
    var f = d,
        h = e.charAt(f),
        l = '"<(['.indexOf(h); - 1 == l ? e = h : (h = e.indexOf('">)]'.charAt(l), f + 1), e = 0 <= h ? e.substring(f, h + 1) : e.substr(f));
    "<" == e.charAt(0) ? (c = e.indexOf(">"), c = e.substring(1, -1 != c ? c : e.length)) : c == t && (b += e);
    d += e.length
  }
  c == t && -1 != b.indexOf("@") && (c = b, b = t);
  b = Fv(b);
  b = AD(b, "'\"");
  c = Fv(c);
  return [b, c]
}
function Mra(a) {
  var b = Mh(Ph(a.Sg)).Ma();
  return b == a.A.b || b == a.Xh || b == a.bb
}

function x1(a) {
  return !a.A.D && 0 < a.C.D
}
function Nra(a) {
  return Cb(IE(a), function(a) {
    return !a.A && !a.Mc() && !this.sq(a)
  }, a)
}
function Ora(a, b) {
  var c = b.ic.email;
  a.ya[c] = m;
  var d = Cb(rra(a), function(a) {
    return k1(this.F, c, a)
  }, a);
  a.b.remove(b.ic.email);
  Bb(d, function(a) {
    VD(a) && this.b.add(new TD(a.email))
  }, a)
}
function Pra(a) {
  return !!Hb(dh(a.b), function(a) {
    return 108 == a.ka
  }, a)
}
function Qra(a) {
  a = Fra(a);
  Rb(a, gE);
  return Db(a, function(a) {
    return new CE(a, n)
  })
}

function y1(a) {
  return Cb(l1(a), function(a) {
    return !k1(this.O, "<top>", a)
  }, a)
}
function z1(a) {
  return Cb(Cc(GE(a)), function(a) {
    return !VD(a)
  }, a)
}
function A1(a) {
  return a.xH && !a.C.C
}
var Rra = {
  SECONDLY: 1,
  MINUTELY: 1,
  HOURLY: 1,
  DAILY: 1,
  WEEKLY: 7,
  MONTHLY: 31,
  YEARLY: 365
};

function Sra(a, b, c) {
  if (b.duration != n && !isNaN(b.start.hour) && qE(a)) {
    var d = rE(a);
    a = n1(a) ? m1(a) : d;
    c ? b = new Uf(FD(d, b.start.Ea()), FD(a, b.end.Ea())) : (c = b.start.Ea(), d = BD(d, c, p), b = b.end.Ea(), b = BD(a, b, p), b = new Uf(d, b))
  }
  return b
}

function Tra(a) {
  return {
    Bg: a.b.get(),
    Xm: a.o.get(),
    message: a.A.get()
  }
}
function B1(a) {
  a = a.A.get();
  return 1 == a || 2 == a || 4 == a
}
function C1(a) {
  a = a.A.get();
  return 1 == a || 2 == a || 3 == a
}
function Ura(a) {
  if (!a.hb() || !a.b.Ba() || 3 == a.b.b.get() || a.b.getUrl(n, n)) return n;
  switch (a.b.b.get()) {
  case 0:
    return n;
  case 1:
    return "Please enter a valid video call name.";
  case 2:
    return "Please enter a valid bridge number.";
  default:
    return a.b.b.get(), n
  }
}
function Vra(a, b, c) {
  Jb(b.b.get(), c) || o1(a, b, function(a) {
    a.b.push(c)
  })
}

function Wra(a, b) {
  var c = a.getItem(b);
  o1(a, c, function(a) {
    a.B = m
  })
}
function D1(a, b, c) {
  var d = a.getItem(b);
  o1(a, d, function(a) {
    a.ka = 108;
    a.A = c;
    this.setVisible(b, p)
  })
}
function Xra(a, b, c) {
  p1(b) != c && o1(a, b, function(a) {
    a.Zb = c
  })
}
function Yra(a, b) {
  b.rk || (b.rk = m, a.Eb(), bh(a, "S", b), a.setVisible(b.email, p), a.xb(), ch(a))
}
function Zra(a, b, c) {
  var d = c ? Lc(c) : {};
  a.Eb();
  Bb(a.Kb(), function(a) {
    d[a] || this.setVisible(a, b)
  }, a);
  a.xb()
}
function $ra(a, b) {
  var c = a.b[a.A[b] || b];
  return c ? ZD(a, c) : n
}

function asa(a) {
  return !VD(a) && a.Cc.Qb()
}
function bsa(a, b, c) {
  var d = c.B;
  c = c.C;
  return d && c ? Hra(a, b, Ob([d], c)) : []
}
function csa(a, b) {
  a.B = b;
  a.o && gC(a)
}
function dsa(a) {
  a = a.o;
  a.Pd = "parallel";
  bB(a);
  "parallel" in a.A && a.P(v)
}
function E1() {}
E1.prototype.b = function(a) {
  ep("ef_delete");
  var b = R();
  Rq(b).b(Ba, function() {
    hu(a)
  })
};

function F1(a, b, c) {
  if (0 != a.b.length) {
    var d = vr(a, a.o);
    if (!b(a.b[d])) for (var e = 0; e < a.b.length; e++) if (b(a.b[e])) {
      d = e;
      break
    }
    c ? (a.o = d, Ira(a, c)) : xr(a, d)
  }
}

function esa(a, b) {
  for (var c = [], d = oG(a, b), e = 0; e < d.length; e++) c.push(q1(d[e]));
  return c
}
function G1(a) {
  var b = [],
      c;
  for (c in a.o) {
    var d = a.o[c];
    1 != d && -1 != d || b.push("sub", c + ":" + d)
  }
  return b
}
function fsa(a, b) {
  var c = a.b[b];
  if (!c) return [];
  var d = [],
      e;
  for (e in c) {
    var f = c[e];
    f && f.Aa() == b && (2 != f.wb() || or(a)) && d.push(f)
  }
  return d
}
function H1(a, b, c) {
  b = On(b);
  a.o[b] = c ? 1 : -1
}
function I1(a) {
  return a.b
}
var gsa = {};

function J1(a) {
  return new Uf(a.first, Jg(a.Ub))
}
function K1(a) {
  return r1(xk(a))
}

function L1(a, b) {
  return a.start.ta() <= b.start.ta() && a.end.ta() >= b.end.ta()
}
function M1(a, b) {
  return b.end.ta() > a.start.ta() && b.start.ta() < a.end.ta()
}
function hsa(a) {
  return dh(a)
}
function N1(a, b) {
  C(a.b[b]) || Jh(a, [b]);
  return a.b[b]
}
function O1(a) {
  return a.b
}
function P1(a) {
  return (a | 0) === a
}
function isa(a, b) {
  return s1(a.b).get(b)
}
function Q1(a) {
  a = a.Hd;
  return 0 == a || 2 == a
}

function R1() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ ib()).toString(36)
}
function S1(a) {
  return 1 == a.length ? "0" + a : a
}
var jsa = /^#(?:[0-9a-f]{3}){1,2}$/i;

function ksa(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || 0 > a || 255 < a || isNaN(b) || 0 > b || 255 < b || isNaN(c) || 0 > c || 255 < c) && g(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = S1(a.toString(16));
  b = S1(b.toString(16));
  c = S1(c.toString(16));
  return "#" + a + b + c
}
var lsa = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i,
    msa = /#(.)(.)(.)/;

function T1() {
  P.call(this)
}
H(T1, P);
T1.prototype.start = Na();
T1.prototype.vd = function() {
  this.P("V")
};
T1.prototype.nh = function() {
  this.P("W")
};
T1.prototype.Wp = function() {
  this.P("X")
};

function nsa(a) {
  this.enable = a.oa("en");
  this.nc = a.oa("de");
  this.Do = a.oa("mo");
  a.oa("bu");
  a.oa("do");
  a.oa("pv");
  this.wz = a.oa("pe");
  this.qz = a.oa("ew");
  this.pz = a.oa("ed");
  this.rz = a.oa("jl");
  this.vz = a.oa("jw");
  this.uz = a.oa("jp");
  this.disable = a.oa("di")
}

function osa(a, b, c) {
  a = iI(Sh(a), b, c);
  return PE(c) ? '<span class="rtc-hangout-icon-disabled goog-inline-block"></span>' + (c.H.Ba() ? "Video call added" : "This event has a video call") : a ? '<span class="rtc-hangout-icon-disabled goog-inline-block"></span>Too many attendees for a video call' : 3 == uD(c.H) && c.H.Ba() ? '<span class="rtc-hangout-icon-disabled goog-inline-block"></span>Video call added' : n
}

function psa(a) {
  a = a || {};
  a = t + ('<div class="rtcs"><span class="lk-button" role="button" tabindex="0" id="' + KI(a.Ef.enable) + '">Add video call</span><span id="' + KI(a.Ef.nc) + '"><input id="' + KI(a.Ef.Do) + '" type="hidden" value="' + KI(a.Do) + '"><input class="textinput" id="' + KI(a.Ef.wz) + '" maxlength="' + KI(a.maxLength) + '" value="' + KI(a.ZL) + '"><span id="' + KI(a.Ef.vz) + '"><a class="rtc-link lk" rel="noreferrer" target="_blank" id="' + KI(a.Ef.rz) + '">' + mP(a) + '</a><span class="rtc-us"> | </span></span><span class="rtc-ed"><span id="' + KI(a.Ef.qz) + '"><span id="' + KI(a.Ef.pz) + '" class="lk" role="button" tabindex="0">Change name</span> | </span><span style="display:none" id="' + KI(a.Ef.uz) + '"></span><span class="lk" role="button" tabindex="0" id="' + KI(a.Ef.disable) + '">Remove</span></span></span></div>');
  return Nm(a)
}
function qsa(a) {
  jsa.test(a) || g(Error("'" + a + "' is not a valid hex color"));
  4 == a.length && (a = a.replace(msa, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
var rsa = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: ba,
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};

function U1(a, b, c) {
  a.innerHTML = LH(b(c || KH, k, k))
}
function V1() {
  P.call(this)
}
H(V1, T1);
var ssa = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,
    tsa = /[^\d]+$/;

function W1(a, b, c) {
  var d = c.H,
      e = c.$b;
  Y.call(this);
  this.Ha = a;
  this.A = d;
  this.B = e;
  this.ka = b;
  this.Z = c
}
H(W1, Y);
B = W1.prototype;
B.ia = function() {
  var a = uD(this.A),
      b = 2 == a ? this.A.o.get() || t : t,
      c = new nsa(this);
  this.V = $H(psa, {
    Ef: c,
    Do: a,
    ZL: b,
    yo: nP(this.A),
    xo: this.B.b.A,
    maxLength: 15
  })
};
B.rb = y(p);
B.$ = function() {
  W1.J.$.call(this);
  var a = new nsa(this),
      b = this.b;
  this.K = b.G(a.enable);
  this.H = b.G(a.nc);
  this.O = b.G(a.Do);
  this.o = b.G(a.wz);
  this.W = b.G(a.qz);
  this.ya = b.G(a.pz);
  this.ea = b.G(a.rz);
  this.F = b.G(a.vz);
  this.C = b.G(a.uz);
  this.wa = b.G(a.disable);
  a = Z(this);
  a.I(new aO(this.K), "action", this.nJ);
  a.I(new aO(this.wa), "action", this.lJ);
  a.I(new aO(this.ya), "action", this.mJ);
  a.I(this.O, v, this.oJ);
  a.I(this.o, "keypress", this.rJ);
  a.I(this.o, "focus", this.qJ);
  a.I(this.o, "blur", this.pJ);
  this.Qj()
};
B.oJ = function() {
  var a = uD(this.A),
      b = parseInt(this.O.value, 10);
  a != b && (eE(this.B, b), 3 != b && this.Qj(m))
};
B.nJ = function() {
  var a;
  this.B.b.A ? a = 3 : this.B.b.B ? a = 1 : this.B.b.C ? a = 2 : g(Error("Video call not supported"));
  eE(this.B, a);
  this.Qj(m)
};
B.lJ = function() {
  eE(this.B, 0);
  this.Qj()
};
B.qJ = function() {
  gn(this.o, "rtc-wa")
};
B.pJ = function() {
  kn(this.G(), "rtc-editing", p);
  var a = this.A.o.get(),
      b = this.o.value;
  a != b && (a = this.B, 1 == a.b.b.get() && (a.A = m), a.b.o.set(b));
  this.Qj()
};
B.rJ = function(a) {
  (13 == a.keyCode || ic && 3 == a.keyCode) && this.o.blur()
};
B.mJ = function() {
  U(this.F, p);
  U(this.o, m);
  kn(this.G(), "rtc-editing", m);
  kn(this.o, "rtc-wa", p);
  usa(this)
};

function usa(a) {
  setTimeout(E(function() {
    xj(this.o) && xj(this.H) && this.o.focus()
  }, a), 0)
}
B.Qj = function(a) {
  if (this.K) {
    var b = uD(this.A),
        c = this.A.o.get(),
        d = 0 != b;
    U(this.K, !d);
    U(this.H, d);
    if (d) {
      this.O.value = b;
      this.o.value = c;
      b = 3 == b;
      kn(this.H, "rtc-um", b);
      if (d = this.A.getUrl(this.ka, this.Z)) U1(this.ea, mP, {
        xo: b,
        yo: nP(this.A)
      }), this.ea.href = d;
      b ? ((b = osa(this.Ha, this.ka, this.Z)) ? (this.C.innerHTML = b + " | ", U(this.C, m), U(this.F, p)) : (U(this.C, p), U(this.F, m)), U(this.W, p), U(this.o, p)) : (U(this.W, !! c && this.B.hb()), U(this.o, !c), U(this.F, !! d), U(this.C, p));
      gn(this.o, "rtc-wa");
      c || (a ? usa(this) : en(this.o, "rtc-wa"))
    }
  }
};

function vsa(a) {
  a = a || {};
  return Nm('<a class="lk" href="' + KI(II(a.link)) + '" rel="noreferrer" target="_blank">' + mP(a) + "</a>")
}
function wsa(a) {
  return a instanceof ND ? a.D : a instanceof ez ? a.get() : a || t
}
function X1(a, b, c) {
  this.b = a;
  this.V = c || a.G();
  this.o = new Q(this);
  b && Bb(b, this.EP, this)
}
H(X1, uc);
B = X1.prototype;
B.EP = function(a) {
  var b = this.V || this.b.G();
  switch (a) {
  case v:
    this.o.I(b, v, F(this.Om, a));
    break;
  case "focus":
    this.o.I(b, "focus", F(this.Om, a));
    break;
  case "blur":
    this.o.I(b, "blur", F(this.Om, a));
    break;
  case "enter":
    this.o.I(b, ["mouseover", "mousemove"], this.YO);
    break;
  case "leave":
    this.o.I(b, "mouseout", this.XO)
  }
};
B.Om = function(a) {
  this.b.P(a)
};
B.XO = function(a) {
  this.A && (a = a.o, a && this.b.b.contains(this.V, a) || (this.A = p, this.Om("leave")))
};
B.YO = function() {
  this.A || (this.A = m, this.Om("enter"))
};
B.L = function() {
  K(this.o);
  X1.J.L.call(this)
};

function Y1(a, b) {
  this.o = a;
  this.b = b
}
Y1.prototype.toString = function() {
  return this.o + "_" + this.b
};
Y1.prototype.Fb = w("b");

function xsa(a, b, c, d) {
  d = d ? 'class="' + d + '" ' : t;
  return ['<a href="', a(b), '" target="_blank" ', d, ">", c, "</a>"].join(t)
}
function Z1(a) {
  a = qsa(a);
  return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}

function $1(a) {
  var b = {};
  a = String(a);
  var c = "#" == a.charAt(0) ? a : "#" + a;
  if (jsa.test(c)) return b.Vm = qsa(c), b.type = "hex", b;
  t: {
    var d = a.match(lsa);
    if (d) {
      var c = Number(d[1]),
          e = Number(d[2]),
          d = Number(d[3]);
      if (0 <= c && 255 >= c && 0 <= e && 255 >= e && 0 <= d && 255 >= d) {
        c = [c, e, d];
        break t
      }
    }
    c = []
  }
  if (c.length) return b.Vm = ksa(c[0], c[1], c[2]),
  b.type = "rgb",
  b;
  if (rsa && (c = rsa[a.toLowerCase()])) return b.Vm = c,
  b.type = "named",
  b;g(Error(a + " is not a valid color string"))
}
function ysa(a, b, c) {
  return Kv(a, function(a) {
    return Ot(a, b)
  }, c)
}

function a2(a) {
  var b = a.indexOf("/"),
      c = a.length;
  if (0 <= b) {
    var d = tz(a.substring(0, b));
    a = tz(a.substring(b + 1, c));
    return new Cw(d, a)
  }
  return tz(a)
}
function b2(a, b, c) {
  P.call(this);
  this.o = new pF(a.b, c);
  this.A = b
}
H(b2, V1);
b2.prototype.b = n;
b2.prototype.start = function() {
  b2.J.start.call(this);
  this.b = AF(this.o, this.A);
  this.vd()
};
b2.prototype.Ee = w("b");

function c2(a) {
  Mj.M().forEach(function(b) {
    if (!b.b && p === a(b)) return p
  })
}
function zsa(a) {
  return Dg(a[0]) + "T000000/" + Dg(a[1]) + "T000000"
}

function d2(a) {
  for (var b = [], c = 0, d = 0; d < a.length; d++) {
    for (var e = a.charCodeAt(d); 255 < e;) b[c++] = e & 255, e >>= 8;
    b[c++] = e
  }
  return b
}
var Asa = {
  em: 1,
  ex: 1
},
    Bsa = {
    cm: 1,
    "in": 1,
    mm: 1,
    pc: 1,
    pt: 1
    },
    e2 = n;

function f2(a) {
  return f2.b[a]
}
var Csa = /(\.edu$)|(\.ac\...$)/;

function g2(a, b, c, d, e) {
  3 == b.length && 3 == c.length || g(Error("Start and end points must be 3D"));
  MS.apply(this, arguments)
}
H(g2, MS);
g2.prototype.oj = function() {
  for (var a = [], b = 0; b < this.o.length; b++) a[b] = Math.round(this.o[b]);
  this.element.style.backgroundColor = "rgb(" + a.join(",") + ")"
};
g2.prototype.F = function() {
  this.oj()
};

function h2(a, b, c, d) {
  Y.call(this);
  this.C = a;
  this.F = b || "gc-ib";
  this.B = c;
  this.H = d;
  this.o = {}
}
H(h2, Y);
B = h2.prototype;
B.ia = function() {
  var a = this.b.U("div", this.F);
  this.V = a;
  a.innerHTML = this.C;
  this.A = new lA(a);
  for (var b in this.o) a = this.o[b], qA(this.A, E(this.mA, this, b), a)
};
B.$ = function() {
  h2.J.$.call(this);
  this.B && (this.Xb = new iw(this.B, this.H))
};
B.Na = function() {
  K(this.Xb);
  h2.J.Na.call(this)
};
B.L = function() {
  K(this.A);
  h2.J.L.call(this)
};
B.mA = function(a, b) {
  return ysa(b, a, this.G())
};

function Dsa(a, b, c) {
  a.o || (a.o = {});
  a.o[b] = c;
  a.A && qA(a.A, E(a.mA, a, b), c)
}
function i2(a, b) {
  Y.call(this);
  this.A = a || t;
  this.o = b || t
}
H(i2, Y);
B = i2.prototype;
B.rb = y(m);
B.ia = function() {
  this.Ya(this.b.U("div"))
};
B.$ = function(a) {
  var b = this.A;
  b instanceof ez && Z(this).I(b, v, this.RT);
  this.B = new X1(this, ["enter", "leave"], a)
};
B.Na = function() {
  K(this.B);
  this.B = n;
  i2.J.Na.call(this)
};

function Esa(a, b) {
  var c = a.G();
  if (J) {
    c.innerHTML = "<pre>" + (b || a.o) + "</pre>";
    for (var d = c.firstChild; d.firstChild;) c.appendChild(d.firstChild);
    c.removeChild(d)
  } else c.innerHTML = b || a.o;
  !b && a.o && en(c, "ui-placeholder")
}
B.RT = function() {
  Esa(this, wsa(this.A))
};
B.Ya = function(a) {
  i2.J.Ya.call(this, a);
  Esa(this, wsa(this.A))
};

function j2(a, b, c) {
  return xsa(FN, a, b, c)
}
function k2(a) {
  P.call(this);
  this.Wn = a || window;
  this.ns = O(this.Wn, "resize", this.$X, p, this);
  this.Gk = Bi(this.Wn)
}
H(k2, P);
B = k2.prototype;
B.ns = n;
B.Wn = n;
B.Gk = n;
B.L = function() {
  k2.J.L.call(this);
  this.ns && (ad(this.ns), this.ns = n);
  this.Gk = this.Wn = n
};
B.$X = function() {
  var a = Bi(this.Wn);
  iv(a, this.Gk) || (this.Gk = a, this.P("resize"))
};

function l2(a, b) {
  Dd(Ld(a, 802), function(a) {
    a.A(b)
  })
}
function m2(a, b, c, d) {
  Dd(Ld(a, 802), function(a) {
    a.B(b, c, d)
  })
}
function Fsa(a) {
  this.b = a
}

function Gsa(a) {
  if ("undefined" != typeof DOMParser) return (new DOMParser).parseFromString(a, "application/xml");
  if ("undefined" != typeof ActiveXObject) {
    var b = new ActiveXObject("MSXML2.DOMDocument");
    if (b) {
      b.resolveExternals = p;
      b.validateOnParse = p;
      try {
        b.setProperty("ProhibitDTD", m), b.setProperty("MaxXMLSize", 2048), b.setProperty("MaxElementDepth", 256)
      } catch (c) {}
    }
    b.loadXML(a);
    return b
  }
  g(Error("Your browser does not support loading xml documents"))
}
function Hsa(a, b) {
  return qb(a.getTitle(), b.getTitle())
}
var Isa = ["TH", "TU"],
    Jsa = ["FR", "MO", "WE"],
    Ksa = ["FR", "MO", "TH", "TU", "WE"],
    n2 = "SECONDLY MINUTELY HOURLY DAILY WEEKLY MONTHLY YEARLY".split(" ");

function Lsa(a, b, c, d) {
  a = new RD(a, n, m, n, c);
  d = Db(d, function(a) {
    return new TD(a)
  });
  (new XD(d)).add(new TD(a.b.get()));
  return new PD(new ez(b), new XD(d), a)
}
function Msa(a) {
  window.setTimeout(function() {
    var b = R();
    Rq(b).b(Fa, function() {
      GF(new BF(b), a)
    })
  }, 0)
}

function Nsa(a) {
  var b = [],
      c = ci.M();
  c2(function(a) {
    var d = c.get(a.getId());
    d && 60 <= d.uc && b.push(a)
  });
  b.sort(bs(Mj.M()));
  var d = ['<select name="src" '];
  d.push(">");
  for (var e = 0; e < b.length; ++e) {
    var f = b[e],
        h = c.get(f.getId()),
        h = h && h.Pb ? h.Pb : f.getTitle();
    d.push('<option value="', I(f.getId()), '"');
    a === f.getId() && d.push(" selected");
    d.push(">", I(h), "</option>")
  }
  d.push("</select>");
  return d.join(t)
}

function Osa() {
  var a = n,
      b = ci.M();
  Qv(function(c) {
    var d = b.get(c.getId());
    if (d && 60 <= d.uc) {
      if (a) return a = n, p;
      a = c.getId()
    }
  });
  return a
}
var o2 = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    p2 = "SMTWTFS".split("");

function q2(a) {
  var b = Dq();
  b && a.push("droi", zsa(b))
}
function r2(a) {
  var b = Eq();
  if (b) for (var c = 0; c < b.length; ++c) a.push("lef", b[c])
}

function Psa(a, b, c) {
  "string" == typeof b && (b = mk(b));
  "string" == typeof c && (c = mk(c));
  if (a = ru(Yp, a)) {
    var d = a.Ve,
        e = a.Hf;
    a.Ri(b, c);
    if (d !== a.Ve || e !== a.Hf) dq(Yp, a, d, e), eq(Yp, a), Yp.P(iq)
  }
}
function s2(a) {
  this.o = a
}
H(s2, Sp);
s2.prototype.b = function(a) {
  var b = this.o,
      c = Gg(a);
  c.Y = tg(a.year, a.month);
  b = (c.va().Jb() - b + 7) % 7;
  c.Y -= b + 35;
  return new Pp(a, c.va(), 7, 7)
};

function Qsa(a, b) {
  for (var c = [], d = {}, e = b.length; e--;) c[e] = [], d[b[e]] = e;
  for (var e = 0, f = a.length; e < f; e++) {
    var h = a[e],
        l = d[h.Aa()];
    l != k && c[l].push(h)
  }
  return c
}

function t2(a) {
  return (a = String(a)) ? new YH(a, k) : t
}
function u2(a) {
  return jk(a.year, a.month, a.Y, a.hour, a.minute, a.second)
}

function Rsa(a) {
  var b = mj(a, "fontSize"),
      c;
  c = (c = b.match(tsa)) && c[0] || n;
  if (b && "px" == c) return parseInt(b, 10);
  if (J) {
    if (c in Bsa) return zj(a, b);
    if (a.parentNode && 1 == a.parentNode.nodeType && c in Asa) return a = a.parentNode, c = mj(a, "fontSize"), zj(a, b == c ? "1em" : b)
  }
  c = Ei("span", {
    style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"
  });
  a.appendChild(c);
  b = c.offsetHeight;
  Li(c);
  return b
}

function Ssa(a) {
  switch (a) {
  case "none":
    return "none";
  case "#1111cc":
  case "#a4bdfc":
    return "blue";
  case "#5484ed":
    return "bold blue";
  case "#228822":
  case "#7ae7bf":
    return "green";
  case "#51b749":
    return "bold green";
  case "#551a8b":
  case "#dbadff":
    return "purple";
  case "#ff0000":
  case "#ff887c":
    return "red";
  case "#dc2127":
    return "bold red";
  case "#fbb818":
  case "#fbd75b":
    return "yellow";
  case "#ff6600":
  case "#ffb878":
    return "orange";
  case "#cc0066":
    return "pink";
  case "#46d6db":
    return "turquoise";
  case "#bfbfbf":
  case "#e1e1e1":
    return "gray";
  default:
    return n
  }
}
function Tsa() {
  e2 || (e2 = hi ? "#5484ed #a4bdfc #46d6db #7ae7bf #51b749 #fbd75b #ffb878 #ff887c #dc2127 #dbadff #e1e1e1".split(" ") : "#1111cc #228822 #551a8b #ff0000 #fbb818 #ff6600 #cc0066 #bfbfbf".split(" "));
  return e2
}
function v2(a) {
  return Ph(a).D
}
function w2(a) {
  f2.b || (f2.b = {
    "\\": "\\\\",
    "'": "\\047",
    "\b": "\\b",
    '"': "\\042",
    "<": "\\074",
    ">": "\\076",
    "&": "\\046",
    "\n": "\\n",
    "\r": "\\r",
    "\u0085": "\\205",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  });
  return "'" + a.toString().replace(Haa, f2) + "'"
}

function x2() {
  var a = Rh(R()).getName();
  return !!a && !Csa.test(a)
}
var Usa;

function y2(a, b) {
  var c = {},
      d;
  for (d in a) b.call(k, a[d], d, a) && (c[d] = a[d]);
  return c
}
var z2 = "AF;Afghanistan (\u202b\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646\u202c\u200e);AX;\u00c5land Islands (\u00c5land);AL;Albania (Shqip\u00ebri);DZ;Algeria (\u202b\u0627\u0644\u062c\u0632\u0627\u0626\u0631\u202c\u200e);AS;American Samoa;AD;Andorra;AO;Angola;AI;Anguilla;AQ;Antarctica;AG;Antigua and Barbuda;AR;Argentina;AM;Armenia (\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576);AW;Aruba;AC;Ascension Island;AU;Australia;AT;Austria (\u00d6sterreich);AZ;Azerbaijan (Az\u0259rbaycan);BS;Bahamas;BH;Bahrain (\u202b\u0627\u0644\u0628\u062d\u0631\u064a\u0646\u202c\u200e);BD;Bangladesh (\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6);BB;Barbados;BY;Belarus (\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c);BE;Belgium (Belgi\u00eb);BZ;Belize;BJ;Benin (B\u00e9nin);BM;Bermuda;BT;Bhutan (\u0f60\u0f56\u0fb2\u0f74\u0f42);BO;Bolivia;BA;Bosnia and Herzegovina (\u0411\u043e\u0441\u043d\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043e\u0432\u0438\u043d\u0430);BW;Botswana;BV;Bouvet Island;BR;Brazil (Brasil);IO;British Indian Ocean Territory;VG;British Virgin Islands;BN;Brunei;BG;Bulgaria (\u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f);BF;Burkina Faso;BI;Burundi (Uburundi);KH;Cambodia (\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6);CM;Cameroon (Cameroun);CA;Canada;IC;Canary Islands (islas Canarias);CV;Cape Verde (Kabu Verdi);BQ;Caribbean Netherlands;KY;Cayman Islands;CF;Central African Republic (R\u00e9publique centrafricaine);EA;Ceuta and Melilla (Ceuta y Melilla);TD;Chad (Tchad);CL;Chile;CN;China (\u4e2d\u56fd);CX;Christmas Island;CP;Clipperton Island;CC;Cocos (Keeling) Islands (Kepulauan Cocos (Keeling));CO;Colombia;KM;Comoros (\u202b\u062c\u0632\u0631 \u0627\u0644\u0642\u0645\u0631\u202c\u200e);CD;Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo);CG;Congo (Republic) (Congo-Brazzaville);CK;Cook Islands;CR;Costa Rica;CI;C\u00f4te d\u2019Ivoire;HR;Croatia (Hrvatska);CU;Cuba;CW;Cura\u00e7ao;CY;Cyprus (\u039a\u03cd\u03c0\u03c1\u03bf\u03c2);CZ;Czech Republic (\u010cesk\u00e1 republika);DK;Denmark (Danmark);DG;Diego Garcia;DJ;Djibouti;DM;Dominica;DO;Dominican Republic (Rep\u00fablica Dominicana);EC;Ecuador;EG;Egypt (\u202b\u0645\u0635\u0631\u202c\u200e);SV;El Salvador;GQ;Equatorial Guinea (Guinea Ecuatorial);ER;Eritrea;EE;Estonia (Eesti);ET;Ethiopia;FK;Falkland Islands (Islas Malvinas);FO;Faroe Islands (F\u00f8royar);FJ;Fiji;FI;Finland (Suomi);FR;France;GF;French Guiana (Guyane fran\u00e7aise);PF;French Polynesia (Polyn\u00e9sie fran\u00e7aise);TF;French Southern Territories (Terres australes fran\u00e7aises);GA;Gabon;GM;Gambia;GE;Georgia (\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd);DE;Germany (Deutschland);GH;Ghana (Gaana);GI;Gibraltar;GR;Greece (\u0395\u03bb\u03bb\u03ac\u03b4\u03b1);GL;Greenland (Kalaallit Nunaat);GD;Grenada;GP;Guadeloupe;GU;Guam;GT;Guatemala;GG;Guernsey;GN;Guinea (Guin\u00e9e);GW;Guinea-Bissau (Guin\u00e9 Bissau);GY;Guyana;HT;Haiti;HM;Heard & McDonald Islands;HN;Honduras;HK;Hong Kong (\u9999\u6e2f);HU;Hungary (Magyarorsz\u00e1g);IS;Iceland (\u00cdsland);IN;India (\u092d\u093e\u0930\u0924);ID;Indonesia;IR;Iran (\u202b\u0627\u06cc\u0631\u0627\u0646\u202c\u200e);IQ;Iraq (\u202b\u0627\u0644\u0639\u0631\u0627\u0642\u202c\u200e);IE;Ireland;IM;Isle of Man;IL;Israel (\u202b\u05d9\u05e9\u05e8\u05d0\u05dc\u202c\u200e);IT;Italy (Italia);JM;Jamaica;JP;Japan (\u65e5\u672c);JE;Jersey;JO;Jordan (\u202b\u0627\u0644\u0623\u0631\u062f\u0646\u202c\u200e);KZ;Kazakhstan (\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d);KE;Kenya;KI;Kiribati;XK;Kosovo (Kosov\u00eb);KW;Kuwait (\u202b\u0627\u0644\u0643\u0648\u064a\u062a\u202c\u200e);KG;Kyrgyzstan (\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d);LA;Laos (\u0ea5\u0eb2\u0ea7);LV;Latvia (Latvija);LB;Lebanon (\u202b\u0644\u0628\u0646\u0627\u0646\u202c\u200e);LS;Lesotho;LR;Liberia;LY;Libya (\u202b\u0644\u064a\u0628\u064a\u0627\u202c\u200e);LI;Liechtenstein;LT;Lithuania (Lietuva);LU;Luxembourg;MO;Macau (\u6fb3\u9580);MK;Macedonia (FYROM) (\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u0458\u0430);MG;Madagascar (Madagasikara);MW;Malawi;MY;Malaysia;MV;Maldives;ML;Mali;MT;Malta;MH;Marshall Islands;MQ;Martinique;MR;Mauritania (\u202b\u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627\u202c\u200e);MU;Mauritius (Moris);YT;Mayotte;MX;Mexico (M\u00e9xico);FM;Micronesia;MD;Moldova (Republica Moldova);MC;Monaco;MN;Mongolia (\u041c\u043e\u043d\u0433\u043e\u043b);ME;Montenegro (Crna Gora);MS;Montserrat;MA;Morocco (\u202b\u0627\u0644\u0645\u063a\u0631\u0628\u202c\u200e);MZ;Mozambique (Mo\u00e7ambique);MM;Myanmar (Burma) (\u1019\u103c\u1014\u103a\u1019\u102c);NA;Namibia (Namibi\u00eb);NR;Nauru;NP;Nepal (\u0928\u0947\u092a\u093e\u0932);NL;Netherlands (Nederland);NC;New Caledonia (Nouvelle-Cal\u00e9donie);NZ;New Zealand;NI;Nicaragua;NE;Niger (Nijar);NG;Nigeria;NU;Niue;NF;Norfolk Island;MP;Northern Mariana Islands;KP;North Korea (\uc870\uc120 \ubbfc\uc8fc\uc8fc\uc758 \uc778\ubbfc \uacf5\ud654\uad6d);NO;Norway (Norge);OM;Oman (\u202b\u0639\u064f\u0645\u0627\u0646\u202c\u200e);PK;Pakistan (\u202b\u067e\u0627\u06a9\u0633\u062a\u0627\u0646\u202c\u200e);PW;Palau;PS;Palestine (\u202b\u0641\u0644\u0633\u0637\u064a\u0646\u202c\u200e);PA;Panama (Panam\u00e1);PG;Papua New Guinea;PY;Paraguay;PE;Peru (Per\u00fa);PH;Philippines;PN;Pitcairn Islands;PL;Poland (Polska);PT;Portugal;PR;Puerto Rico;QA;Qatar (\u202b\u0642\u0637\u0631\u202c\u200e);RE;R\u00e9union (La R\u00e9union);RO;Romania (Rom\u00e2nia);RU;Russia (\u0420\u043e\u0441\u0441\u0438\u044f);RW;Rwanda;BL;Saint Barth\u00e9lemy (Saint-Barth\u00e9lemy);SH;Saint Helena;KN;Saint Kitts and Nevis;LC;Saint Lucia;MF;Saint Martin (Saint-Martin (partie fran\u00e7aise));PM;Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon);WS;Samoa;SM;San Marino;ST;S\u00e3o Tom\u00e9 and Pr\u00edncipe (S\u00e3o Tom\u00e9 e Pr\u00edncipe);SA;Saudi Arabia (\u202b\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629\u202c\u200e);SN;Senegal (S\u00e9n\u00e9gal);RS;Serbia (\u0421\u0440\u0431\u0438\u0458\u0430);SC;Seychelles;SL;Sierra Leone;SG;Singapore;SX;Sint Maarten;SK;Slovakia (Slovensko);SI;Slovenia (Slovenija);SB;Solomon Islands;SO;Somalia (Soomaaliya);ZA;South Africa;GS;South Georgia & South Sandwich Islands;KR;South Korea (\ub300\ud55c\ubbfc\uad6d);SS;South Sudan (\u202b\u062c\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062f\u0627\u0646\u202c\u200e);ES;Spain (Espa\u00f1a);LK;Sri Lanka (\u0dc1\u0dca\u200d\u0dbb\u0dd3 \u0dbd\u0d82\u0d9a\u0dcf\u0dc0);VC;St. Vincent & Grenadines;SD;Sudan (\u202b\u0627\u0644\u0633\u0648\u062f\u0627\u0646\u202c\u200e);SR;Suriname;SJ;Svalbard and Jan Mayen (Svalbard og Jan Mayen);SZ;Swaziland;SE;Sweden (Sverige);CH;Switzerland (Schweiz);SY;Syria (\u202b\u0633\u0648\u0631\u064a\u0627\u202c\u200e);TW;Taiwan (\u53f0\u7063);TJ;Tajikistan;TZ;Tanzania;TH;Thailand (\u0e44\u0e17\u0e22);TL;Timor-Leste;TG;Togo;TK;Tokelau;TO;Tonga;TT;Trinidad and Tobago;TA;Tristan da Cunha;TN;Tunisia (\u202b\u062a\u0648\u0646\u0633\u202c\u200e);TR;Turkey (T\u00fcrkiye);TM;Turkmenistan;TC;Turks and Caicos Islands;TV;Tuvalu;UM;U.S. Outlying Islands;VI;U.S. Virgin Islands;UG;Uganda;UA;Ukraine (\u0423\u043a\u0440\u0430\u0457\u043d\u0430);AE;United Arab Emirates (\u202b\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629\u202c\u200e);GB;United Kingdom;US;United States;UY;Uruguay;UZ;Uzbekistan (O\u02bbzbekiston);VU;Vanuatu;VA;Vatican City (Citt\u00e0 del Vaticano);VE;Venezuela;VN;Vietnam (Vi\u1ec7t Nam);WF;Wallis and Futuna;EH;Western Sahara (\u202b\u0627\u0644\u0635\u062d\u0631\u0627\u0621 \u0627\u0644\u063a\u0631\u0628\u064a\u0629\u202c\u200e);YE;Yemen (\u202b\u0627\u0644\u064a\u0645\u0646\u202c\u200e);ZM;Zambia;ZW;Zimbabwe".split(";");

function Vsa(a, b) {
  return "on the fifth " + a + " in " + b
}
function Wsa(a, b) {
  return "on the fourth " + a + " in " + b
}
function Xsa(a, b) {
  return "on the third " + a + " in " + b
}
function Ysa(a, b) {
  return "on the second " + a + " in " + b
}
function Zsa(a, b) {
  return "on the first " + a + " in " + b
}
function $sa(a) {
  return "on the fifth " + a
}
function ata(a) {
  return "on the fourth " + a
}
function bta(a) {
  return "on the third " + a
}
function cta(a) {
  return "on the second " + a
}
function dta(a) {
  return "on the first " + a
}

function eta(a) {
  return "Repeat every " + a + " years"
}
function fta(a) {
  return "Repeat every " + a + " months"
}
function gta(a) {
  return "Repeat every " + a + " weeks"
}
function hta(a) {
  return "Repeat every " + a + " days"
}
function ita(a, b) {
  return 'Are you sure you want to mark "' + a + '" as spam? This will delete the event from calendar ' + b + "."
}
function jta(a) {
  return "Would you like to add the event " + a + " to your calendar?"
}
function kta(a) {
  return "[Update] " + a
}

function lta(a) {
  return "You are about to make changes that will only be reflected on calendar " + a + "."
}
function mta(a) {
  return "The following guest email addresses are invalid: <br><br> " + a + " <br><br>"
}
function nta(a) {
  return "Do you want to notify your guests that you're canceling \"" + a + '"?'
}

function ota() {
  var a = {},
      b = a.document || document,
      c = document.createElement("SCRIPT"),
      d = {
      bG: c,
      vm: k
      },
      e = new wd(pta, d),
      f = n,
      h = a.timeout != n ? a.timeout : 5E3;
  0 < h && (f = window.setTimeout(function() {
    A2(c, m);
    var a = new B2(1, "Timeout reached for loading script https://maps.googleapis.com/maps/api/js?sensor=false&v=3&client=google-calendar&libraries=places&language=en&callback=MapsApiLoaded");
    yd(e);
    zd(e, p, a)
  }, h), d.vm = f);
  c.onload = c.onreadystatechange = function() {
    c.readyState && "loaded" != c.readyState && c.readyState != wa || (A2(c, a.gZ || p, f), e.callback(n))
  };
  c.onerror = function() {
    A2(c, m, f);
    var a = new B2(0, "Error while loading script https://maps.googleapis.com/maps/api/js?sensor=false&v=3&client=google-calendar&libraries=places&language=en&callback=MapsApiLoaded");
    yd(e);
    zd(e, p, a)
  };
  zi(c, {
    type: "text/javascript",
    charset: "UTF-8",
    src: "https://maps.googleapis.com/maps/api/js?sensor=false&v=3&client=google-calendar&libraries=places&language=en&callback=MapsApiLoaded"
  });
  qta(b).appendChild(c)
}

function qta(a) {
  var b = a.getElementsByTagName("HEAD");
  return !b || Kb(b) ? a.documentElement : b[0]
}
function pta() {
  if (this && this.bG) {
    var a = this.bG;
    a && "SCRIPT" == a.tagName && A2(a, m, this.vm)
  }
}
function A2(a, b, c) {
  c != n && Va.clearTimeout(c);
  a.onload = D;
  a.onerror = D;
  a.onreadystatechange = D;
  b && window.setTimeout(function() {
    Li(a)
  }, 0)
}
function B2(a, b) {
  var c = "Jsloader error (code #" + a + ")";
  b && (c += ": " + b);
  lb.call(this, c)
}
H(B2, lb);

function rta() {
  this.b = n
};
Ou(810, function() {
  return new rta
});

function NQ(a, b) {
  if (a && a.Ba()) {
    for (var c = [], d = {}, e = Cc(a.Ia), f = 0; f < e.length; ++f) {
      var h = e[f];
      d[h.wb().Qb() + ":" + h.ed.Qb()] = m
    }
    for (var e = {}, l = dh(a), f = 0; f < l.length; ++f) h = l[f], e[h.wb().get() + ":" + h.ed.get()] = m;
    var f = p,
        q;
    for (q in e) c.push("erem"), q in d ? c.push(q + ":0") : (c.push(q + ":1"), f = m);
    for (q in d) q in e || (c.push("erem", q + ":-1"), f = m);
    f && Ev(b, c)
  }
};

function C2(a) {
  return UD(a) ? a.email + "_O" : a.email
}
function sta(a, b) {
  var c = b.C,
      d = z1(c),
      e = [],
      f = [];
  d.length && !A1(b) && Bb(d, function(a) {
    e.push(C2(a))
  });
  d = Cc(c.o.B);
  d.length && Bb(d, function(b) {
    VD(b) == b.Cc.Qb() ? b.Ba(function(a) {
      return a.getKey() != b.b.getKey()
    }) && f.push(C2(b)) : VD(b) ? a.push("del", b.email) : e.push(C2(b))
  });
  0 < e.length && a.push("add", e.join(","));
  0 < f.length && a.push("amod", f.join(","));
  Bb(c.o.oB(), function(b) {
    a.push("del", b)
  })
}
function tta(a, b, c) {
  c != n && a.push(b, String(c))
}

function uta(a, b) {
  a.push("sprop", "goo.rtc:" + uD(b));
  a.push("sprop", "goo.rtcParam:" + b.o.get());
  a.push("sprop", "goo.rtcDomain:" + vD(b))
}
function vta(a, b) {
  var c = b.Ja;
  if (c && (c.Ba() || PE(b))) {
    var d = function(a) {
      return a ? a.getName() : t
    };
    a.push("stz", d(rE(c)));
    a.push("etz", d(m1(c)))
  }
};

function wta() {
  P.call(this)
}
H(wta, T1);

function D2(a) {
  this.A = a || n;
  this.b = []
}
B = D2.prototype;
B.cU = function(a, b, c, d) {
  a.call(this.A, b, c, d)
};
B.OD = 0;
B.Sr = n;
B.YF = n;
B.rx = n;

function E2(a, b) {
  var c = E(a.cU, a, b);
  a.b.push(c)
}
B.execute = function(a, b, c) {
  this.Sr = a;
  this.YF = b;
  this.rx = c;
  this.KD()
};
B.KD = function() {
  var a = this.OD;
  if (a >= this.b.length) this.ND(m);
  else {
    var a = this.b[a],
        b = E(this.ND, this, p),
        c = E(this.KD, this);
    this.OD++;
    a(this.Sr, c, b)
  }
};
B.ND = function(a) {
  a = a ? F(this.YF, this.Sr) : this.rx;
  this.rx = this.Sr = n;
  a()
};

function F2(a, b) {
  this.B = a;
  this.A = b
}
F2.prototype.b = function(a, b) {
  return new G2(this, a, b, "CREATE")
};
F2.prototype.o = function(a, b) {
  return new G2(this, a, b, 1 == a.K ? "RESPOND" : "EDIT", this.A)
};

function G2(a, b, c, d, e) {
  P.call(this);
  this.b = a;
  this.o = b;
  a = [];
  a.push("sf", m, "output", "js", "action", d);
  sta(a, b);
  var f = PE(b);
  d = b.B;
  if (f || d.o.Ba()) {
    var h = d.o.get();
    a.push("crm", 1 == h ? "AVAILABLE" : 2 == h ? "BLOCKING" : "BUSY")
  }
  if (f || d.b.Ba()) h = d.b.get(), a.push("icc", 4 == h ? "SECRET" : 3 == h ? "PRIVATE" : 2 == h ? "PUBLIC" : "DEFAULT");
  if (f || d.A.Ba()) a.push("sprop", "goo.allowModify:" + (1 == d.A.get())), a.push("sprop", "goo.allowInvitesOther:" + C1(d)), a.push("sprop", "goo.showInvitees:" + B1(d));
  if (f || d.D.Ba()) f = "eventColor:" + d.D.get(), a.push("pprop", f);
  NQ(d.B, a);
  d = PE(b);
  d || (a.push("eid", b.getId()), C(b.Co) && a.push("erev", String(b.Co)));
  f = b.O;
  (d || f.Ba()) && a.push("text", f.get());
  f = b.Z;
  if (d || f.Ba()) a.push("location", f.get()), f = b.Nl.get(), f != n && (h = F(tta, a), h("location_maps_cluster_id", f.X), h("location_name", f.getName()), h("location_address_formatted_address", f.C), h("location_address_country", f.b), h("location_address_locality", f.o), h("location_address_region", f.B), h("location_address_post_office_box_number", f.A), h("location_address_street_address", f.D), h("location_geo_latitude", f.H), h("location_geo_longitude", f.K), h("location_url", f.getUrl()));
  f = b.ya;
  (d || f.Ba()) && a.push("details", f.get());
  f = b.A.b;
  d ? a.push("src", f.get()) : f.Ba() && (a.push("src", f.Qb()), a.push("targ", f.get()));
  d = PE(b);
  f = b.b;
  h = b.tb;
  (d || f.Ba()) && a.push("dates", f.get().toString());
  Sd(24) && (d || h.Ba()) && a.push("unbounded", h.get());
  d = b.W;
  f = d.b;
  f.Ba() && a.push("rst", String(f.get()));
  f = d.A;
  f.Ba() && a.push("rcomment", String(f.get()));
  d = d.o;
  d.Ba() && a.push("rgu", String(d.get()));
  if (d = b.D) d.D.get() && (d.Ba() || PE(b)) ? (a.push("recur", d.Ie()), !PE(b) && d.b.Ba() && a.push("rstart", d.b.get().toString())) : d.D.get() || !d.D.Ba() || PE(b) || (a.push("recur", t), f = b.b.get().start, a.push("rfdt", f.toString())), e && d.D.get() && !PE(b) && !b.$l() && b.B.B && b.B.B.Ba() && (d = b.A.o.get(), (e = HG(e, Kc(d, 1))) && e.length && (e = e[0], a.push("droi", Dg(e.o) + "T000000/" + Dg(e.b) + "T000000")));
  if ((e = b.ib) && (e.Ba() || PE(b))) if (e = dh(e), 0 == e.length) a.push("gdoc-attachment", t);
  else
  for (d = 0; d < e.length; d++) h = e[d], f = [encodeURIComponent(h.getUrl()), encodeURIComponent(h.getTitle()), encodeURIComponent(h.A)], (h = h.getId()) && f.push(h), a.push("gdoc-attachment", f.join(" "));
  (e = b.H) && (e.Ba() || PE(b)) && uta(a, e);
  vta(a, b);
  Ev(a, c);
  this.A = a
}
H(G2, wta);
B = G2.prototype;
B.ZF = n;
B.start = function() {
  G2.J.start.call(this);
  this.b.B.send("event", this.A, 22, E(this.zP, this), E(this.nh, this))
};
B.zP = function(a) {
  this.ZF = a;
  this.vd()
};
B.Ee = w("o");
B.ll = w("ZF");

function kL(a) {
  F2.call(this, a)
}
H(kL, F2);
kL.prototype.b = function(a, b) {
  return new H2(this, a, b, "CREATE")
};
kL.prototype.o = function(a, b) {
  return new H2(this, a, b, "EDIT")
};

function H2(a, b, c, d) {
  var e = [],
      f = b.cc;
  (f.Ba() || PE(b)) && e.push("pprop", "SS_slotsize:" + f.get());
  e.push("pprop", "SS_asid:default", "pprop", "SS_isavail:true");
  Ev(e, c);
  G2.call(this, a, b, e, d)
}
H(H2, G2);

function I2(a, b, c) {
  if (a.Ba()) {
    var d = c || D;
    a = (new nw).set("yes", PE(a) ? "Discard" : "Discard changes", m).set("cancel", "Continue editing", p, m);
    ku(new Js, function(a) {
      "yes" == a.key ? b() : d()
    }, "Your Event", "Your event has not been saved.", a)
  } else b()
};

function xta(a, b, c, d, e, f, h) {
  var l = b.$l();
  if (l || (3 == b.K || 2 == b.K) && b.C.Ba()) {
    var q = b.C;
    b = Nra(q);
    var r = Ob(y1(q), z1(q)),
        q = Cb(IE(q), q.sq, q),
        s = Mh(Ph(a)),
        s = F(yta, s.Ma()),
        r = Cb(r, s);
    b = Cb(b, s);
    q = Cb(q, s);
    r = !! r.length;
    b = !! b.length;
    q = !! q.length;
    a = Nu(Rh(a));
    zta(e, r, b, q, l, c, d, f, h, a)
  } else f()
}
function yta(a, b) {
  var c = b.Bb();
  return b.email != a && (100 == c || 108 == c)
}
function zta(a, b, c, d, e, f, h, l, q, r) {
  b || c || d ? pe(E(f, n, b, c, d, e, function(b) {
    b && GP(a);
    h && h(b);
    l()
  }, q, r), 0) : l()
}

function FP(a, b, c, d, e, f, h) {
  var l = a ? "Send invitations?" : "Send update?";
  (a = Ata(a, b, c, d, h)) ? (b = (new nw).set("yes", "Send", m).set("no", "Don't send"), ku(new Js, function(a) {
    "yes" == a.key ? e(m) : "no" == a.key ? e(p) : f()
  }, l, a, b)) : e(p)
}

function Ata(a, b, c, d, e) {
  var f;
  c && (d || e) ? a && b ? f = "Would you like to send invitations to new guests, updates to existing guests, and cancellations to removed guests?" : a ? f = "Would you like to send invitations to new guests and updates to existing guests?" : b ? f = "Would you like to send updates to existing guests and cancellations to removed guests?" : d && (f = "Would you like to send updates to existing guests?") : a && b ? f = "Would you like to send invitations to new guests and cancellations to removed guests?" : a && c ? f = "Would you like to send invitations to new guests?" : a ? f = "Would you like to send invitations to guests?" : b && (f = "Would you like to send cancellations to removed guests?");
  if (f) return e && (f += '<div class="ep-forcenotifwarn">' + (c ? "Please note: If there are any non-Google Calendar attendees on this invite, ALL attendees will be sent an email update regardless" : "Please note: Even if you select 'Don't Send', all non-Google Calendar attendees on this invitation will be sent an email invitation.") + "</div>"), f
}
function GP(a) {
  a.push("nopts", 2, "nopts", 3, "nopts", 4)
};

function J2(a) {
  this.cc = a.ea;
  OE.call(this, a, [this.cc])
}
H(J2, OE);
J2.prototype.$l = function() {
  return J2.J.$l.call(this) || this.cc.Ba()
};

function Bta() {}
H(Bta, VE);

function Cta() {
  var a = new Bta;
  a.Ia = new jE(0, 1, 4, m, m, m, m);
  a.Z = [];
  return a
};

function Dta(a, b, c, d, e, f) {
  var h = new bL(Eta(a, f));
  a = new bL(Fta(a, h, b, c, d, e, f), Gta);
  return [h, a]
}
function Eta(a, b) {
  return function(c) {
    var d = $h(uk(a));
    (c = K2(a, c.G().value, d)) || (c = d);
    d = 2 * Math.floor(c.hour);
    30 <= c.minute && ++d;
    var e = K1(a);
    return [Hta(c, p, e, b), d]
  }
}

function Fta(a, b, c, d, e, f, h) {
  return function(l) {
    var q = $h(uk(a)),
        r = K2(a, b.G().value, q);
    if (r) {
      var s = Gg(r);
      hk(s, f());
      r = s.Ea()
    }
    s = K2(a, l.G().value, q);
    l = T(c).value == T(d).value;
    (l = !(!r || !l)) ? (q = r, s || (s = Gg(r), s.minute += e, s = s.Ea()), r = ai(Yf(s, r)), r = Math.ceil(r / 30)) : (q = s || r || q, r = 2 * Math.floor(q.hour), 30 <= q.minute && ++r);
    0 > r && (r = 0);
    s = K1(a);
    return [Hta(q, l, s, h), r]
  }
}
function Gta(a) {
  var b = a.match(/(.*) \([^(]*\)$/);
  b && (a = b[1]);
  return a
}

function Hta(a, b, c, d) {
  var e = p;
  b ? (a = Gg(a), e = !d) : (a = new Qg(a.year, a.month, a.Y, 0, 0, 0), a = Gg(a));
  d = [];
  for (var f = 0, h = 0, l = 0; 48 > l; ++l) {
    var q = c.ob(a.Ea());
    if (b) var r = Gl(new Ig(0, 0, f, 0), m, k, e),
        q = q + (" (" + r + ")");
    d.push(q);
    q = h;
    f += 30;
    h = Mv(f, e);
    hk(a, new Ig(0, 0, h - q, 0))
  }
  return d
}
function K2(a, b, c) {
  a = t1(v1(Jd(a, 3)), b, n);
  if (!a) return n;
  c = Gg(c);
  c.hour = a.hour;
  c.minute = a.minute;
  c.second = a.second;
  return P1(c.year) && P1(c.month) && P1(c.Y) && P1(c.hour) && P1(c.minute) && P1(c.second) ? c.Ea() : n
};

function L2(a, b, c, d, e, f, h, l) {
  Y.call(this);
  M2(this, c, d);
  this.O = a;
  this.ib = b;
  this.tb = e || Mw(a);
  this.Sc = l || !Nv(a);
  this.ea = f || Ita;
  this.Wb = h || p;
  this.Z = (a = this.ea.xk()) ? this.ib() : n;
  this.W = a ? this.ib() : n
}
H(L2, Y);
var Ita = {
  xk: id,
  rm: id,
  Fp: id,
  Gp: id
},
    Jta = {
    xk: id,
    rm: id,
    Fp: hd,
    Gp: hd
    };

function Kta(a, b, c, d, e, f, h) {
  var l = c.get(),
      q = new L2(a, b, l ? l.start : n, l ? l.end : n, d, e, f, h);
  O(q, v, function() {
    c.set(q.Ca())
  });
  O(c, v, function() {
    q.$a(c.get())
  });
  return q
}
B = L2.prototype;
B.ia = function() {
  this.Z && this.W && (this.ha(this.Z), this.ha(this.W));
  var a = this.fD(),
      b = this.b.U("div", "drs");
  b.innerHTML = a;
  this.V = b
};
B.rb = y(p);
B.$ = function() {
  L2.J.$.call(this);
  var a = this.getId();
  this.da = this.b.G(a + "-sd");
  this.C = this.b.G(a + "-ed");
  this.H = this.b.G(a + "-st");
  this.F = this.b.G(a + "-et");
  this.A = this.b.G(a + "-ad");
  Sd(24) && (this.K = this.b.G(a + "-etc"), this.cc = this.b.G(a + "-to"));
  (this.B.start.Sb() || this.B.end.Sb()) && Lta(this);
  var b = Z(this);
  this.ea.xk() && (Px(this.Z, this.da), b.I(this.Z, v, this.Qg), Px(this.W, this.C), b.I(this.W, v, this.Qg));
  this.ea.rm() && (a = Dta(this.O, this.da.id, this.C.id, this.tb, E(this.wt, this), this.Sc), b.I(a[0], v, this.Qg), b.I(a[1], v, this.Qg), this.ha(a[0]), this.ha(a[1]), Px(a[0], this.H), Px(a[1], this.F));
  Bb([this.da, this.H, this.C, this.F], function(a) {
    b.I(a, v, this.Qg)
  }, this);
  b.I(this.A, "click", this.Qg);
  Sd(24) && b.I(this.K, "click", this.Qg);
  this.ea.Fp() || (this.A.checked = p, U(this.A.parentNode, p));
  Sd(24) && !this.ea.Gp() && (this.K.checked = m, U(this.K.parentNode, p));
  this.ea.xk() || (this.A.checked = p, U(this.da, p), U(this.C, p), U(this.A.parentNode, p));
  this.ea.rm() || (this.A.checked = m, U(this.H, p), U(this.F, p), U(this.A.parentNode, p))
};
B.Na = function() {
  this.W = this.Z = n
};
B.fD = function() {
  var a = new V(Mta() + Nta() + Ota() + Pta() + (Sd(24) ? Qta() : t));
  Rta(this, a);
  return a.toString()
};

function Rta(a, b) {
  b.put("id", a.getId());
  b.put("timeWidth", 7);
  b.put("dateWidth", 9);
  b.put("groupHeader", "<span class=group>");
  b.put("groupFooter", "</span>")
}

function Mta() {
  return '${groupHeader}<input class="text dr-date" id=${id}-sd size=${dateWidth} title="' + I("From date") + '"><input class="text dr-time" id=${id}-st size=${timeWidth} title="' + I("From time") + '">${groupFooter}'
}
function Nta() {
  return "<span id=${id}-to class=dr-sep>to</span>"
}

function Ota() {
  var a = '<input class="text dr-date" id=${id}-ed size=${dateWidth} title="' + I("Until date") + '">';
  return "${groupHeader}" + ('<input class="text dr-time" id=${id}-et size=${timeWidth} title="' + I("Until time") + '">' + a) + "${groupFooter}"
}
function Pta() {
  return "${groupHeader}<input type=checkbox class=checkbox id=${id}-ad><label for=${id}-ad>All day</label>${groupFooter}"
}

function Qta() {
  return '<span class="ep-etc"><input type=checkbox class=checkbox id=${id}-etc><label for=${id}-etc>End time</label></span>'
}
function M2(a, b, c) {
  b = new Cw(b || new au(NaN, NaN, NaN), c || new au(NaN, NaN, NaN));
  b = qz(b.toString());
  b.equals(a.B) || (a.B = b, a.P(v))
}

function Lta(a) {
  var b = a.B.start,
      c = a.B.end,
      d = N2(a.B);
  a.A.checked = d;
  Sd(24) && (a.K.checked = !a.ka);
  O2(a, a.da, b);
  var e = n;
  c && (e = c, d && !b.equals(c) && (e = P2(c)));
  O2(a, a.C, e);
  d ? (a.H.value = "?:??", a.F.value = "?:??") : (Q2(a, a.H, b ? b : n), Q2(a, a.F, c ? c : n));
  a.Uj()
}
function P2(a) {
  if (!a.Y) return a.Rb();
  var b = u2(a);
  b.Y -= 1;
  return a instanceof au || a instanceof $t ? b.Rb() : b.va()
}
function Sta(a) {
  if (2050 > a) return a;
  a = parseInt(String(a).substring(0, 4), 10);
  return Math.min(a, 2050)
}
B.Qg = function(a) {
  a = a.target;
  a = this.Ts(a instanceof R2 ? a.Nb : a && a.G ? a.G() : a);
  var b;
  if (a.element == this.da) {
    b = u1(a.o, a.element.value);
    var c = a.start,
        d = p;
    b && (c = u2(c), c.year = Sta(b.year), c.month = b.month, c.Y = b.Y, c = a.b ? c.Rb() : c.dd(), d = m, a.element.value = a.A.Ec(c));
    b = new S2(d, c, a.end, !a.B)
  } else if (a.element == this.C) {
    b = Era(a.o, a.element.value);
    var c = !! b && -2 < b.b,
        d = a.start,
        e = a.end;
    c && (b.specified & 1 || (b.year = b.Y.month < d.month || b.Y.month === d.month && b.Y.Y < d.Y ? d.year + 1 : d.year), e = u2(e), e.year = Sta(b.Y.year), e.month = b.Y.month, e.Y = b.Y.Y, a.b && (e.Y += 1), e = a.b ? e.Rb() : e.dd(), a.element.value = a.A.Ec(a.b ? P2(e) : e));
    b = new S2(c, a.start, e, p)
  } else a.element == this.H ? (b = t1(a.o, this.H.value, n), c = !! b, d = a.start, c && !a.b && (d = u2(d), d.hour = b.hour, d.minute = b.minute, d.second = b.second, d = d.dd(), a.element.value = a.A.ob(d)), b = new S2(c, d, a.end, !a.B)) : a.element == this.F ? (b = a.start, c = a.end, d = !a.b && b.Rb().equals(c.Rb()) ? b.Lb() : n, d = t1(a.o, this.F.value, d), (e = !! d) && !a.b && (c = u2(c), c.hour = d.hour, c.minute = d.minute, c.second = d.second, c = c.dd(), a.element.value = a.A.ob(c), b && !T2(this, b, c) && b.Rb().equals(c.Rb()) && (c = u2(c), c.Y += 1, c = c.dd(), this.C.value = a.A.Ec(c))), b = new S2(e, b, c, p)) : a.element == this.A ? a.b ? (b = a.start, c = a.end, b && (b = b.Rb()), c && (c = u2(c), isNaN(c.Y) || (c.Y += 1), c = c.Rb(), O2(this, this.C, P2(c))), b = new S2(m, b, c, !a.B)) : (b = a.start, c = a.end, b && (b = u2(b), (d = t1(a.o, this.H.value, n)) || (d = qz("T100000")), b.hour = d.hour, b.minute = d.minute, b.second = d.second, b = b.dd()), c && (c = u2(c), d = !a.b && b.Rb().equals(c.Rb()) ? b.Lb() : n, d = t1(a.o, this.F.value, d), !d && b && (d = jk(0, 0, 0, b.hour, b.minute + this.tb, b.second).Lb()), isNaN(c.Y) || (c.Y -= 1), d && (c.hour = d.hour, c.minute = d.minute, c.second = d.second), c = c.dd()), b && Q2(this, this.H, b), c && (Q2(this, this.F, c), O2(this, this.C, c)), b = new S2(m, b, c, !a.B)) : Sd(24) && a.element == this.K && (b = a.B ? new S2(m, a.start, a.end, p) : new S2(m, a.start, a.end, m));
  a.element != this.A && kn(a.element, "dr-warning", !b.b);
  c = a.element == this.da || a.element == this.H;
  c = a.duration && c;
  b.start && b.start.Sb() && c && (c = u2(b.start), hk(c, a.duration), b.end = a.b ? c.Rb() : c.dd(), O2(this, this.C, a.b ? P2(b.end) : b.end), a.b || Q2(this, this.F, b.end));
  b.start && b.end && M2(this, b.start, b.end);
  b.$o !== n && this.ff(b.$o);
  this.Uj()
};
B.Ts = function(a) {
  return new Tta(a, this)
};

function Q2(a, b, c) {
  b.value = c ? K1(a.O).ob(c) : t
}
function O2(a, b, c) {
  b.value = c ? K1(a.O).Ec(c) : t;
  a.Z && b == a.da && (c = a.Z, c.A = c.Nb ? c.Nb.value : n);
  a.W && b == a.C && (a = a.W, a.A = a.Nb ? a.Nb.value : n)
}
B.Db = function() {
  return this.A ? this.A.checked : N2(this.B)
};
B.Uj = function() {
  var a = this.B.start,
      b = this.B.end,
      c = this.A.checked,
      d = !this.K || this.K.checked;
  U(this.H, !c);
  U(this.F, !c && d);
  Sd(24) && (U(this.C, d), U(this.cc, d));
  c = T2(this, a, b);
  kn(this.C, "dr-unordered", !c);
  kn(this.F, "dr-unordered", !c);
  kn(this.da, "partial", U2(a));
  kn(this.C, "partial", U2(b));
  kn(this.H, "partial", V2(a));
  kn(this.F, "partial", V2(b))
};

function T2(a, b, c) {
  if (a.A.checked) return b.ta() < c.ta();
  b = Gg(b);
  hk(b, a.wt());
  b = b.Ea();
  return a.Wb ? b.ta() < c.ta() : b.ta() <= c.ta()
}
B.lq = function() {
  var a = this.B.start,
      b = this.B.end,
      c = this.A.checked;
  return T2(this, a, b) && !U2(a) && !U2(b) && (c || !U2(a) && !V2(b))
};
B.Ca = w("B");
B.isEmpty = function() {
  var a = !(this.da.value + this.C.value);
  return this.A.checked ? a : a && !this.H.value && !this.F.value
};

function Uta(a) {
  Bb([a.da, a.C, a.H, a.F], function(a) {
    gn(a, "dr-warning")
  })
}
B.$a = function(a) {
  a.equals(this.B) || (M2(this, a.start, a.end), this.xa && (Lta(this), Uta(this)))
};
B.ff = function(a) {
  this.ka != a && (this.ka = a, this.P(v))
};
B.wt = gd(new Ig(0, 0, 0, 0));

function N2(a) {
  return !!a && !(a.start instanceof $t || a.start instanceof Qg)
}
function V2(a) {
  return a instanceof $t && isNaN(a.hour + a.minute + a.second)
}
function U2(a) {
  return isNaN(a.year + a.month + a.Y)
}
function Tta(a, b) {
  this.element = a;
  this.b = b.A.checked;
  this.start = b.B.start;
  this.end = b.B.end;
  this.B = b.K ? b.K.checked : m;
  this.duration = n;
  this.start && this.end && this.start.ta() <= this.end.ta() && (this.duration = Yf(this.end, this.start));
  this.o = v1(Jd(b.O, 3));
  this.A = K1(b.O)
}

function S2(a, b, c, d) {
  this.b = a;
  this.start = b;
  this.end = c;
  this.$o = d
};

function W2(a, b) {
  Y.call(this);
  this.C = a;
  this.B = b && b.getName();
  this.K = {};
  b && this.vC(b);
  this.H = E(this.NT, this);
  this.F = p
}
H(W2, Y);
B = W2.prototype;
B.vC = function(a) {
  this.K[a.getName()] = a
};
B.ia = function() {
  for (var a = this.b, b = S(this.C).get("country"), c = [], d = 0; d < z2.length; d += 2) {
    var e = {
      value: z2[d]
    };
    z2[d] == b && (e.selected = "true");
    e = a.U("option", e, a.createTextNode(z2[d + 1]));
    c.push(e)
  }
  this.o = a.U("select", "tz-pck-country", c);
  this.A = a.U("select", "tz-pck-timezone");
  this.B ? this.xt([this.K[this.B]], m) : this.xt([], m);
  b = Jd(this.C, 813);
  c = E(this.yI, this);
  d = this.H;
  gP(b, E(b.My, b), c, d);
  this.V = b = a.U("div", "tz-pck-pnl");
  this.O ? (c = this.oa("c"), d = this.oa("t"), this.o.id = c, this.A.id = d, a.append(b, Ei("div", {
    className: "tz-pck-cc goog-inline-block"
  }, Ei("label", {
    "for": c,
    className: "tz-pck-lbl"
  }, "Country:"), this.o), Ei("div", {
    className: "tz-pck-tc goog-inline-block"
  }, Ei("label", {
    "for": d,
    className: "tz-pck-lbl"
  }, "Time zone:"), this.A))) : a.append(b, this.o, this.A)
};
B.yI = function(a) {
  for (var b = {}, c = 0; c < a.length; ++c) b[a[c]] = m;
  a = [];
  for (var d = this.o.options, c = 0; c < d.length; ++c) {
    var e = d[c];
    if (b[e.value]) {
      var f = new Option(e.text, e.value);
      f.selected = e.selected;
      a.push(f)
    }
  }
  for (c = b = d.length = 0; c < a.length; ++c) d[b] = a[c], ++b
};

function X2(a, b) {
  var c = Jd(a.C, 813),
      d = E(a.xt, a),
      e = a.H;
  gP(c, E(c.jF, c, b), d, e)
}
B.xt = function(a, b) {
  var c = S(this.C).Ed()[0],
      d = S(this.C).Ed()[1];
  this.A.options.length = 0;
  var e = this.B;
  this.F && 0 < a.length && (e = a[0].getName());
  var f = p,
      h = 0,
      l = E(this.vC, this),
      q = E(function(a) {
      var b = new Option(a.he() ? t + a.ud + ' "' + a.he() + '"' : a.ud, a.getName());
      a.getName() == e && (f = b.selected = m);
      l(a);
      this.A.options[h] = b;
      ++h
    }, this);
  q(c);
  d && q(d);
  for (var r = 0; r < a.length; ++r) {
    var s = a[r];
    s.getName() == c.getName() || d && s.getName() == d.getName() || q(s)
  }
  f || (this.A.options[0].selected = m);
  b || this.yu()
};
B.gO = function(a) {
  if (!this.F && a) {
    var b;
    b = this.o.options;
    if (0 == b.length) b = p;
    else {
      for (var c = p, d = 0; d < b.length; ++d) {
        var e = b[d];
        e.value == a && (c = e.selected = m)
      }
      b = c
    }
    b && X2(this, a)
  }
};
B.$ = function() {
  W2.J.$.call(this);
  var a = Jd(this.C, 813);
  if (this.B) {
    var b = E(this.gO, this),
        c = this.H;
    gP(a, E(a.o.o, a.o, this.B), b, c)
  } else X2(this, this.o.value), this.yu();
  a = Z(this);
  a.I(this.A, v, this.yu);
  a.I(this.o, v, this.fO)
};
B.yu = function() {
  var a = this.A.selectedIndex;
  0 <= a && (this.B = this.A[a].value)
};
B.fO = function() {
  this.F = m;
  X2(this, this.o.value)
};

function Y2(a) {
  return a.B ? a.K[a.B] : S(a.C).Ed()[0]
}
B.NT = Na();
B.getCountry = function() {
  return this.o.value
};
B.focus = function() {
  this.o && this.o.focus()
};

function Z2(a, b, c, d, e, f) {
  tK.call(this, "ep-etz-dialog", m);
  this.Xa = d && c ? 1 : 0;
  this.ya = new W2(a, b);
  this.Ja = new W2(a, c);
  this.tb = f;
  this.zb = !! b;
  this.W = !! d;
  this.ea = !! e;
  this.setTitle("Event Time Zone");
  this.Vd = m
}
H(Z2, tK);
B = Z2.prototype;
B.ia = function() {
  Z2.J.ia.call(this);
  var a = this.b;
  this.B = a.U("input", {
    id: "ep-etz-stz-cb",
    type: "checkbox"
  });
  this.bb = a.U("label", {
    "for": "ep-etz-stz-cb"
  }, a.createTextNode("Use separate start and end time zones"));
  var b = a.U("legend", "ep-etz-stz-lgd", a.createTextNode("Time zones:"));
  a.U("fieldset", "ep-etz-stz-fls", b, this.B, this.bb);
  this.ib = a.U("div", "ep-etz-text", "A repeated event cannot start and end in different time zones");
  U(this.B, this.W);
  U(this.bb, this.W);
  U(this.ib, this.W && !this.ea);
  this.B.disabled = !this.ea;
  this.Ha = a.U("fieldset", "ep-etz-box-start", a.U("legend", "ep-etz-box-title", a.createTextNode("Event start")));
  this.ka = a.U("fieldset", "ep-etz-box-end", a.U("legend", "ep-etz-box-title", a.createTextNode("Event end")));
  this.Ab().appendChild(this.B);
  this.Ab().appendChild(this.bb);
  this.Ab().appendChild(this.ib);
  this.Ab().appendChild(this.Ha);
  this.Ab().appendChild(this.ka);
  this.ha(this.ya);
  this.ha(this.Ja);
  DK(this, (new AK).set("yes", "Done", m).set("no", "Cancel", p, m));
  this.zb && (this.wa = a.U("span", "lk ep-etz-lk ep-etz-remove", "Remove event time zone..."), Xi(this.wa, m), Dj(this.wa, "link"), wK(this), this.Fc.appendChild(this.wa))
};
B.$ = function() {
  Z2.J.$.call(this);
  this.ya.render(this.Ha);
  this.W && this.ea && this.Ja.render(this.ka);
  Vta(this);
  var a = Z(this);
  Lu(a, this, "dialogselect", this.xU, k);
  this.W && this.ea && Ku(a, this.B, jA, this.zU);
  this.zb && Ku(a, this.wa, jA, this.yU);
  a.I(this, "aftershow", this.wU)
};
B.wU = function() {
  !xj(this.B) || this.B.disabled ? this.ya.focus() : this.B.focus()
};
B.xU = function(a) {
  if ("yes" == a.key) {
    a = Y2(this.ya);
    var b = 1 == this.Xa ? Y2(this.Ja) : n;
    this.tb(a, b)
  }
};
B.zU = function() {
  this.Xa = this.B.checked ? 1 : 0;
  Vta(this)
};
B.yU = function() {
  this.setVisible(p);
  this.tb(n, n)
};

function Vta(a) {
  1 == a.Xa ? (gn(a.Ha, "ep-etz-box-single"), gn(a.ka, "ep-etz-box-single"), a.B.checked = m) : (en(a.Ha, "ep-etz-box-single"), en(a.ka, "ep-etz-box-single"), a.B.checked = p)
};

function $2(a, b, c, d, e, f, h) {
  tK.call(this, f, h);
  this.setTitle(a);
  this.wa = b;
  this.W = c;
  this.ka = [];
  this.ea = e || this.W[0];
  this.B = f || t;
  this.Nc = d;
  m != this.fp && yK(this, m)
}
H($2, tK);
B = $2.prototype;
B.ia = function() {
  $2.J.ia.call(this);
  for (var a = this.b, b = this.oa("options"), c = [], d = 0; d < this.W.length; ++d) {
    var e = this.W[d],
        f = this.oa("option" + d),
        h = {
        type: "radio",
        id: f,
        name: b,
        className: this.B + "-od-radio",
        tabIndex: 0,
        value: e.getKey()
        },
        f = {
        "for": f,
        className: this.B + "-od-label"
        },
        h = a.U("input", h);
    this.ka.push(h);
    c.push(a.U("div", this.B + "-od-radio-div", h, a.U("label", f, e.A)))
  }
  b = a.U("div", this.B + "-od-main");
  this.wa && b.appendChild(a.U("div", this.B + "-od-message", this.wa));
  b.appendChild(a.U("div", this.B + "-od-options", c));
  this.Ab().appendChild(b)
};
B.$ = function() {
  $2.J.$.call(this);
  var a = Z(this);
  a.I(this, "dialogselect", E(this.iW, this));
  for (var b = 0; b < this.ka.length; ++b) {
    var c = this.W[b],
        d = this.ka[b];
    c.getKey() == this.ea.getKey() && (d.checked = "checked");
    Ku(a, d, jA, E(this.jW, this, c))
  }
};
B.Na = function() {
  Yd(Z(this));
  $2.J.Na.call(this)
};
B.jW = Oa("ea");
B.iW = function(a) {
  "ok" == a.key ? this.Nc(this.ea) : this.Nc(n)
};

function a3(a, b) {
  this.o = a;
  this.A = b
}
a3.prototype.getKey = w("o");

function b3(a, b, c, d, e, f, h, l) {
  this.o = d;
  this.zb = m;
  L2.call(this, a, b, n, n, e, f, h, l);
  var q = E(this.Yp, this);
  a = Z(this);
  a.I(this, v, function() {
    var a = this.ka;
    c.o.set(this.Ca());
    c.b.set(a)
  });
  a.I(c, v, function() {
    var a = c.b.get();
    this.$a(Sy(c));
    this.ff(a);
    q(p, E(function() {
      c.o.set(this.Ca())
    }, this))
  });
  Sy(c) && this.Yp(p, E(function() {
    var a = c.b.get();
    this.$a(Sy(c));
    this.ff(a)
  }, this))
}
H(b3, L2);

function Wta(a, b, c, d, e, f, h, l) {
  return new b3(a, b, c, d, e, f, h, l)
}
B = b3.prototype;
B.$ = function() {
  b3.J.$.call(this);
  var a = this.getId();
  this.Ja = this.b.G(a + "-edr-both");
  this.wa = this.b.G(a + "-edr-both-txt");
  this.Xa = this.b.G(a + "-edr-start");
  this.bb = this.b.G(a + "-edr-st-txt");
  this.ya = this.b.G(a + "-edr-end");
  this.Ha = this.b.G(a + "-edr-ed-txt");
  this.Ib = this.b.G(a + "-edr-tz");
  Ku(Z(this), this.Ib, jA, this.$R);
  this.Yp(m)
};
B.fD = function() {
  var a = new V('<span class="ep-edr-first-line"><span id="${id}-edr-both"><span id="${id}-edr-start" class="group">' + Mta() + '<span id="${id}-edr-st-txt" class=edr-txt></span></span>' + Nta() + '<span id="${id}-edr-end" class="group">' + Ota() + '<span id="${id}-edr-ed-txt" class=edr-txt></span></span><span id="${id}-edr-both-txt" class=edr-txt></span></span><span id="${id}-edr-tz" class=lk-button role=link tabindex=0>Time zone</span></span> <span class="ep-edr-second-line">' + Pta() + (Sd(24) ? Qta() : t) + "</span>");
  Rta(this, a);
  return a.toString()
};
B.$R = function() {
  var a = rE(this.o),
      b = n1(this.o) ? m1(this.o) : n,
      a = new Z2(this.O, a, b, !this.ka, this.zb, E(this.YU, this));
  a.Vd = m;
  a.setVisible(m)
};
B.YU = function(a, b) {
  if (a) {
    this.o.Eb();
    this.o.A(a);
    this.o.b(b);
    var c = E(this.P, this, v),
        d = E(this.o.xb, this.o);
    this.Yp(m, function() {
      d();
      c()
    }, d)
  } else Xta(this)
};

function Xta(a) {
  if (qE(a.o)) {
    var b = a.B,
        c = a.Ca(),
        d = K1(a.O),
        e = S(a.O).Ed()[0],
        f = d.ob(b.start),
        b = new c3(t + f + " " + e.ud + " (do not convert to equivalent local time)", b),
        d = d.ob(c.start),
        c = new c3(t + d + " " + e.ud + " (convert to equivalent time in your local time zone)", c),
        c = [b, c];
    a = E(a.OS, a);
    a = new $2("Remove Event Time Zone", "After this change, what time should the event occur?", c, a, k, "ep-etz-remove-dialog", k);
    a.Vd = m;
    a.setVisible(m)
  }
}
B.OS = function(a) {
  a && (this.o.Eb(), this.o.A(n), this.o.b(n), this.o.xb(), this.$a(a.b), this.P(v), this.Uj())
};
B.wt = function() {
  if (rE(this.o) == n || m1(this.o) == n) return new Ig(0, 0, 0, 0);
  var a = this.B,
      b;
  b = rE(this.o);
  var c = a.start.Ea();
  b = b.b(c);
  c = m1(this.o);
  a = a.end.Ea();
  a = c.b(a) - b;
  return new Ig(0, 0, a, 0)
};
B.Yp = function(a, b, c) {
  function d() {
    f();
    c && c()
  }
  function e() {
    f();
    b && b()
  }
  var f = a ? E(this.Uj, this) : D;
  if (qE(this.o)) {
    a = n1(this.o);
    var h = Jd(this.O, 813),
        l = function(a, b, c, e) {
        a && b && hP(h, b, a, 1, function(a) {
          c(a);
          e && e()
        }, d)
        };
    l(this.Ca().start, rE(this.o), E(this.o.A, this.o), a ? n : e);
    a && l(this.Ca().end, m1(this.o), E(this.o.b, this.o), e)
  } else e()
};
B.Uj = function() {
  if (this.wa) {
    if (qE(this.o) && !this.Db()) if (n1(this.o)) {
      d3(this, this.Ja, this.wa);
      var a = rE(this.o),
          b = this.Xa;
      this.b.Oe(this.bb, a.ud);
      en(b, "ep-edr-start-block");
      this.ka ? d3(this, this.ya, this.Ha) : (a = m1(this.o), b = this.ya, this.b.Oe(this.Ha, a.ud), en(b, "ep-edr-end-block"))
    } else d3(this, this.Xa, this.bb), d3(this, this.ya, this.Ha), a = rE(this.o), b = this.Ja, this.b.Oe(this.wa, a.ud), en(b, "ep-edr-start-block");
    else d3(this, this.Ja, this.wa), d3(this, this.Xa, this.bb), d3(this, this.ya, this.Ha);
    U(this.Ib, !this.Db());
    b3.J.Uj.call(this)
  }
};

function d3(a, b, c) {
  a.b.Oe(c, t);
  gn(b, "ep-edr-start-block");
  gn(b, "ep-edr-end-block")
}
B.$a = function(a) {
  a = Sra(this.o, a, m);
  b3.J.$a.call(this, a)
};
B.Ca = function() {
  return Sra(this.o, this.B, p)
};
B.Ts = function(a) {
  a = b3.J.Ts.call(this, a);
  if (!a.duration && a.start && a.end) {
    var b = this.Ca().start,
        c = this.Ca().end;
    b.ta() <= c.ta() && (a.duration = Yf(a.end, a.start))
  }
  return a
};

function c3(a, b) {
  a3.call(this, (Nf++).toString(36), a);
  this.b = b
}
H(c3, a3);

function e3(a, b, c, d, e, f) {
  Y.call(this);
  this.C = a instanceof ez ? a.get() : a || t;
  this.o = b || t;
  this.B = !! c;
  this.A = d || new f3(p, 1, 1);
  !this.B && a instanceof ez && this.Qq(a);
  this.ka = e || "textinput";
  this.H = f || k
}
H(e3, Y);
B = e3.prototype;
B.bl = p;
B.pq = p;

function f3(a, b, c) {
  this.b = a;
  this.A = b || 1;
  this.o = c || Number.MAX_VALUE
}
function g3(a) {
  return a.b || 1 < a.A
}
B.Qq = function(a) {
  this.Cc = a;
  this.$a(a.get());
  this.W = new Q(this);
  this.W.I(a, v, this.SW)
};
B.ia = function() {
  var a = this.getId(),
      b = this.b,
      c = this.C || this.o,
      a = {
      id: a,
      name: a
      };
  this.H && Ww(a, "title", this.H);
  g3(this.A) ? (b = b.U("textarea", a), b.value = c, b.defaultValue = c) : (Ww(a, "type", "text"), Ww(a, "value", c), b = b.U("input", a));
  Yta(this, b)
};

function Yta(a, b) {
  b.readOnly = a.B;
  var c = a.ka;
  en(b, c);
  a.B && en(b, c + "-readonly");
  !a.C && a.o && (en(b, "ui-placeholder"), a.bl = m);
  g3(a.A) && ij(b, "overflow", a.A.o < Number.MAX_VALUE ? "auto" : "hidden");
  a.V = b
}
B.$ = function() {
  e3.J.$.call(this);
  var a = this.G(),
      b = Z(this);
  b.I(a, "focus", this.sP);
  b.I(a, "blur", this.rP);
  b.I(a, v, this.Fq);
  this.O = new X1(this, ["enter", "leave"], a);
  var c = this.A;
  g3(c) && (this.Sp(), c.b && b.I(a, "keyup", this.Sp))
};
B.Na = function() {
  K(this.O);
  this.O = n;
  e3.J.Na.call(this)
};
B.sP = function() {
  this.pq = m;
  this.P("focus") && this.JF()
};
B.JF = function() {
  !this.B && this.bl && h3(this, t)
};
B.rP = function() {
  this.pq && (this.pq = p, this.P("blur") && this.KF())
};
B.KF = function() {
  this.B || !this.o || this.Ca() || i3(this)
};
B.Fq = function() {
  if (this.P(v)) {
    h3(this);
    var a = this.Cc;
    if (a) {
      var b = this.Ca();
      a.aj(b) || a.set(b)
    }
    this.A.b && this.Sp()
  }
};
B.SW = function() {
  var a = this.Cc.get();
  a != this.Ca() && this.$a(a)
};
B.Sp = function() {
  var a = this.A,
      b = this.G(),
      c = a.A,
      a = a.o,
      d;
  d = (d = b.id) ? Zta[d] || (Zta[d] = Rsa(b)) : Rsa(b);
  d = Math.max(.67 * d | 0, 1);
  if (d = b.clientWidth / d | 0) {
    for (var e = b.value, f = 1, h = 0, l; h < e.length; h = l + 1) {
      var q = 1;
      l = e.indexOf("\n", h);
      0 > l && (l = e.length, q = 0);
      f += Math.floor((l - h) / d) + q
    }
    d = f + 1
  } else d = 1;
  c = Zd(d, c, a || Number.MAX_VALUE);
  c != b.rows && (b.rows = c)
};
B.Ca = function() {
  var a = this.G();
  return a ? this.bl ? t : zv(a.value) : this.C
};
B.$a = function(a) {
  this.G() ? (!this.o || a || this.pq ? h3(this, a) : i3(this), this.A.b && this.Sp()) : this.C = a
};

function h3(a, b) {
  var c = a.G();
  gn(c, "ui-placeholder");
  C(b) && (c.value = b);
  a.bl = p
}
function i3(a) {
  var b = a.G();
  en(b, "ui-placeholder");
  b.value = a.o;
  a.bl = m
}
var Zta = {};
e3.prototype.rb = function(a) {
  if (g3(this.A)) return "TEXTAREA" == a.tagName;
  var b = a.getAttribute("type");
  return "INPUT" == a.tagName && (!b || "text" == b)
};
e3.prototype.Ya = function(a) {
  var b = this.C || this.o;
  if ("TEXTAREA" == a.tagName) {
    var c = this.b;
    c.Rj(a);
    a.appendChild(c.createTextNode(b))
  } else a.value = b;
  this.H && (a.title = this.H);
  Yta(this, a)
};
e3.prototype.focus = function() {
  this.G().focus()
};
e3.prototype.L = function() {
  K(this.W);
  e3.J.L.call(this)
};

function j3(a, b, c, d, e, f) {
  e3.call(this, a, b, c, d, e, f)
}
H(j3, e3);
j3.prototype.$ = function() {
  j3.J.$.call(this);
  Z(this).I(this.G(), "click", this.F)
};
j3.prototype.F = function(a) {
  this.G() != a.target || this.Ca() != this.o && this.Ca() != t || h3(this, t)
};
j3.prototype.JF = function() {
  !this.B && this.bl && (h3(this, this.o), this.G().select())
};
j3.prototype.KF = function() {
  this.B || !this.o || this.Ca() && this.Ca() != this.o || i3(this)
};

function k3(a, b, c, d, e, f, h, l, q, r, s) {
  this.X = a;
  this.Cb = b || n;
  this.C = c || n;
  this.b = d || n;
  this.o = e || n;
  this.B = f || n;
  this.A = h || n;
  this.D = l || n;
  this.H = q || n;
  this.K = r || n;
  this.F = s || n
}
k3.prototype.getName = w("Cb");
k3.prototype.getUrl = w("F");

function l3(a, b, c, d) {
  e3.call(this, b, d);
  this.ea = a;
  this.ya = c;
  this.F = this.K = n
}
H(l3, e3);
l3.prototype.$ = function() {
  l3.J.$.call(this);
  var a = Jd(this.ea, 810),
      b = E(this.Z, this);
  if (!a.b) {
    a.b = new wd;
    var c = E(a.b.callback, a.b);
    kb("MapsApiLoaded", c);
    ota()
  }
  Dd(a.b, b)
};
l3.prototype.Z = function() {
  if (this.xa) {
    var a = this.G();
    this.K = new(Wa("google.maps.places.Autocomplete"))(a);
    Wa("google.maps.event.addListener")(this.K, "place_changed", E(this.wa, this))
  }
};
l3.prototype.wa = function() {
  this.F = this.K.getPlace();
  this.Fq();
  this.F = n
};
l3.prototype.Fq = function() {
  l3.J.Fq.call(this);
  this.ya.set($ta(this))
};

function $ta(a) {
  if (sv(a.Ca()) || !a.F) return n;
  a = a.F;
  var b = a.reference;
  if (!b) return n;
  var c = a.name,
      d = a.formatted_address,
      e = a.address_components,
      f = m3(e, "country", p),
      h = m3(e, "locality", m),
      l = m3(e, "administrative_area_level_1", m),
      q = m3(e, "post_box", m),
      e = m3(e, "street_address", m),
      r = n,
      s = n;
  a.geometry && a.geometry.location && (r = a.geometry.location.lat(), s = a.geometry.location.lng());
  return new k3(b, c, d, f, h, l, q, e, r, s, a.url)
}

function m3(a, b, c) {
  if (!a) return n;
  for (var d = 0; d < a.length; d++) {
    var e = a[d];
    if (Jb(e.types, b)) return c ? e.long_name : e.short_name
  }
  return n
};

function wP(a, b) {
  Y.call(this);
  this.o = a || t;
  this.A = b || t
}
H(wP, Y);
B = wP.prototype;
B.hR = function() {
  this.C = m;
  n3(this, o3(this.o))
};
B.ia = function() {
  this.Ya(this.b.U("div"))
};
B.$ = function(a) {
  var b = this.o;
  b instanceof ez && Z(this).I(b, v, this.KS);
  this.B = new X1(this, ["enter", "leave"], a)
};
B.Na = function() {
  K(this.B);
  this.B = n;
  wP.J.Na.call(this)
};

function n3(a, b) {
  var c = a.G();
  Ti(c, b || a.A);
  a.C || b || !a.A ? gn(c, "ui-placeholder") : en(c, "ui-placeholder")
}
B.KS = function() {
  n3(this, o3(this.o))
};
B.Ya = function(a) {
  wP.J.Ya.call(this, a);
  n3(this, o3(this.o))
};

function o3(a) {
  a = a instanceof ez ? a.get() : a || t;
  return pb(a)
};

function p3(a, b, c, d) {
  Y.call(this);
  this.A = a;
  this.C = b || 2;
  this.o = c || n;
  this.B = d || "ui-sch";
  this.F = this.B + "-edit";
  this.O = this.B + "-hover";
  this.H = this.B + "-schmedit";
  this.K = this.B + "-view"
}
H(p3, Y);

function vP(a, b, c) {
  var d = new wP(a, c);
  return aua(d, a, b, c, k)
}
function bua(a, b, c, d) {
  var e = new i2(a, c);
  return aua(e, a, b, c, d)
}
function aua(a, b, c, d, e) {
  var f = 1 == c;
  b = f ? n : new e3(b, d, f, e);
  return new p3(a, c, b)
}

function cua(a, b) {
  var c = K1(a),
      d = b.o,
      e = d.Fa(),
      d = d.Za();
  b.b.get() ? isNaN(e.hour) ? c = c.Lc(e) : (d = c.Lc(e, Zt(c, e)), e = c.ob(e), c = tl(Ck(c.b.b, gl, 5), [d, e])) : c = e && d ? c.Hk(e.Ea(), d.Ea()) : t;
  return c
}
function dua(a, b, c, d) {
  d = d || 2;
  if (1 == d) return c = cua(a, b), c = new i2(c, c || "No time specified"), new p3(c, 1);
  3 == d ? a = new i2 : (a = cua(a, b), a = new i2(a, a || "Add a time"));
  c = c();
  return new p3(a, d, c)
}
B = p3.prototype;
B.or = n;
B.rb = y(m);
B.Ya = function(a) {
  en(a, this.B);
  eua(this, a)
};
B.ia = function() {
  eua(this, this.b.U("div", this.B))
};

function eua(a, b) {
  a.V = b;
  3 == a.C && a.o ? a.ha(a.o, m) : (a.ha(a.A, m), fua(a))
}
B.$ = function() {
  p3.J.$.call(this);
  if (2 == this.C) {
    var a = this.A,
        b = Z(this);
    b.I(a, "focus", this.nD);
    b.I(a, "enter", this.cT);
    b.I(a, "leave", this.ZB);
    b.I(a.G(), "click", this.dT)
  }
};

function fua(a) {
  1 == a.C ? jn(a.A.G(), [a.F, a.H], a.K) : 2 == a.C ? jn(a.A.G(), [a.F, a.K], a.H) : a.o || jn(a.A.G(), [a.H, a.K], a.F)
}
B.cT = function() {
  en(this.A.G(), this.O)
};
B.ZB = function() {
  gn(this.A.G(), this.O)
};
B.dT = function(a) {
  "A" == a.target.tagName && a.target.href || this.nD()
};
B.nD = function() {
  3 != this.C && (this.C = 3, Yd(Z(this)), this.ZB(), this.o ? (this.removeChild(this.A, m), this.A.aa(), this.ha(this.o, m), this.or && Ej(this.o.G(), "labelledby", this.or), this.o.G().focus()) : fua(this))
};

function gua(a, b) {
  a.or = b;
  a.o && a.o.xa && Ej(a.o.G(), "labelledby", a.or)
}
function q3(a) {
  return a.Ml ? 1 : a.K
};

function r3(a, b, c) {
  Y.call(this);
  this.C = a;
  this.A = b;
  this.B = c;
  s3 = "<tr><td colspan=2><div class=${prefix}-dt-hr></div></td></tr>";
  this.cw()
}
var s3, t3, u3, hua, iua, jua, kua, lua, mua;
H(r3, Y);
var nua = p;
r3.prototype.cw = function() {
  nua || (t3 = new V(v3("Where", '<div class="${prefix}-input" id="${id}location"></div><div class="${prefix}-maplink" id="${id}maplink">${maplink}</div>', "location", m)), u3 = new V('<a class="lk" target="_blank" href="${maplink}">map</a>'), hua = new V(v3("Calendar", '<div class="${prefix}-calendar" id="${id}calendarcontainer">${owner}</div>', "calendarcontainer", m)), iua = new V(v3("Calendar", '<div class="${prefix}-calendar" id="${id}calendarcontainer"><select id="${id}calendar">${changeOwnerHtml}</select></div>', "calendar", m)), jua = new V('<option id="${id}changeowner" value="${id}changeowner">Change Owner...</option>'), kua = new V(v3("Created by", '<div class="${prefix}-createdby" id="${id}createdby">${content}</div>', "createdby")), lua = new V(v3("Description", '<div class="${prefix}-descript" id="${id}descript"></div>', "descript")), mua = new V(s3), nua = m)
};

function w3(a) {
  a = a.A.K;
  return 3 == a || 2 == a
}

function oua(a) {
  var b = w3(a),
      c = a.A.A;
  if (!c.D) {
    var d = v2(a.C),
        e = a.A.A.o.get();
    a.F = new gL(d, c.o, function(a) {
      return e == a.getId() || b && a.hb()
    });
    a.ha(a.F)
  }
}
r3.prototype.rb = y(p);

function x3(a, b, c) {
  b && !b.xa && b.render(a.fa(c))
}
function v3(a, b, c, d) {
  return ['<tr id="' + ("${id}" + c + "-row") + '">', "<th class=${prefix}-dt-th ", d ? 'style="vertical-align:middle"' : t, ">", '<label id="' + ("${id}" + c + "-label") + '">', a, "</label></th><td class=${prefix}-dt-td>", b, "</td></tr>"].join(t)
}

function pua(a, b, c, d, e, f) {
  var h = "${id}" + b + "-label",
      l = [];
  l.push("<tr>", "<th class=${prefix}-dt-th>", '<label id="', h, '">', a, "</label>", "</th>", "<td class=${prefix}-dt-td>");
  l.push('<form autocomplete="off" id="${id}', b, '">');
  for (a = 0; a < c.length; ++a) {
    var q = "${id}" + b + c[a],
        r = e[a],
        s = q + "-wrapper";
    l.push('<input id="', q, '"', ' class="${prefix}-radio"', ' name="', b, '"', ' type="radio"', ' value="', String(r), '"', ' aria-labelledby="', h, " ", s, '"', r == f ? ' checked="checked"' : t, ">", '<label class="${prefix}-radio"', ' id="', s, '"', ' for="', q, '"', ">", d[a], "</label>")
  }
  l.push("</form>", "</td>", fa);
  return l.join(t)
};

function y3(a, b) {
  this.C = a;
  this.B = b;
  this.o = p;
  this.D = t;
  this.b = [];
  this.A = n
}
var qua = /^\w/;

function rua(a, b) {
  return a.b() < b.b() ? -1 : a.b() === b.b() ? 0 : 1
}
y3.prototype.size = function() {
  return this.b.length
};
y3.prototype.add = function(a) {
  this.b.push(a);
  this.o = p
};
y3.prototype.filter = function(a) {
  if (!this.o) {
    for (var b = this.b, c = b.length, d = [], e = [], f = 0; f < c; ++f) {
      var h = b[f];
      (qua.test(h.getName()) ? d : e).push(h)
    }
    d.sort(this.A || rua);
    e.sort(this.A || rua);
    this.b = b = d.concat(e);
    d = [];
    for (f = 0; f < c; ++f) h = b[f], d.push(h.getName(), "\u0001", f, "\u0001");
    this.D = d.join(t);
    this.o = m
  }
  b = [];
  if (!this.C(a)) {
    for (a = 0; a < this.b.length; ++a) b.push({
      Od: this.b[a],
      ih: I(this.b[a].getName())
    });
    return b
  }
  c = t;
  for (f = 0; f < a.length; f++) switch (a.charAt(f)) {
  case " ":
  case "*":
    c += "[^\u0001]*";
    break;
  case "\\":
    c += "\\\\";
    break;
  case "/":
  case ".":
  case "?":
  case "^":
  case "$":
  case "+":
  case "{":
  case "[":
  case "|":
  case "(":
  case ")":
  case "]":
    c += "\\" + a.charAt(f);
    break;
  default:
    c += a.charAt(f)
  }
  f = c;
  c = this.D.match(new RegExp("[^\u0001]*" + f + "[^\u0001]*\u0001\\d+\u0001", "gi"));
  if (!c || 0 == c.length) return [{
    ih: 'No matches for "' + I(a) + '"'
  }];
  f = new RegExp("(.*?)(" + f + ")(.*)", "i");
  for (a = 0; a < c.length; ++a) {
    if (a >= this.B) {
      b.push({
        ih: "Fetched first " + this.B + " results"
      });
      break
    }
    d = c[a].split("\u0001");
    h = d[1];
    d = d[0].match(f);
    b.push({
      Od: this.b[parseInt(h, 10)],
      ih: I(d[1]) + "<b>" + I(d[2]) + "</b>" + I(d[3])
    })
  }
  return b
};

function z3(a, b, c) {
  this.B = a;
  this.A = b;
  this.D = c
}
z3.prototype.o = n;
z3.prototype.getName = function() {
  return this.o.getName()
};
z3.prototype.b = function() {
  return this.o.b()
};

function A3(a, b) {
  this.o = a;
  this.A = b
}
A3.prototype.b = function(a, b) {
  for (var c = {}, d = {}, e = 0; e < a.length; e++) c[a[e]] = {}, d[a[e]] = [];
  this.A.forEach(E(this.B, this, c, d));
  b(d)
};
A3.prototype.B = function(a, b, c) {
  var d = jg(this.o, c.Aa());
  if (d && (d = d.Ma(), a = a[d], b = b[d])) for (var d = Un(c), e = 0; e < d.length; e++) {
    var f = jg(this.o, d[e]);
    if (f && 103 == f.Bb()) {
      var f = f.Ma(),
          h = a,
          l = b,
          q = Oj(c, 2097152) ? 1 : .5;
      f in h ? (f = h[f], f.A += q) : (q = new z3(f, q, []), h[f] = q, l.push(q))
    }
  }
};

function sua(a, b, c) {
  b = 0 < b.length && !b[0].Od ? [] : tua(b, a);
  !c || 0 < c.length && !c[0].Od || (a = tua(c, a), Ev(b, a));
  a = {};
  for (var d = c = 0; d < b.length;) {
    var e = b[d++],
        f = e.Od.o.email;
    a[f] || (a[f] = 1, b[c++] = e)
  }
  b.length = c;
  return b
}
function tua(a, b) {
  var c = Pb(a);
  c.sort(F(uua, b.toLowerCase()));
  return c
}
function uua(a, b, c) {
  b = b.Od;
  c = c.Od;
  var d = vua(a, b);
  a = vua(a, c);
  if (d < a) return 1;
  if (a < d) return -1;
  a = b.A;
  d = c.A;
  if (a < d) return 1;
  if (d < a) return -1;
  b = b.b();
  c = c.b();
  return b.localeCompare(c)
}

function vua(a, b) {
  for (var c = b.D, d = 0; d < c.length; d++) if (c[d].toLowerCase() == a) return d;
  return -1
};

function B3(a, b) {
  this.B = a;
  this.A = b || n
}
B3.prototype.b = function(a, b) {
  this.B.send("favrms", ["dtid", a], 32, E(this.D, this, a, b), E(this.o, this, a, b))
};
B3.prototype.D = function(a, b, c) {
  if (c && Za(c)) {
    for (var d = {}, e = 0; e < c.length; e++) {
      var f = c[e];
      if (f) {
        var h = pb(eH(f.calendarId)),
            l = f.roomUsages || [];
        if (!sv(h) && Za(l)) for (f = [], d[h] = f, h = 0; h < l.length; h++) {
          var q = l[h];
          if (q) {
            var r = pb(eH(q.roomEmail)),
                s = pb(eH(q.score)),
                q = q.timeZoneIds || [];
            if (!sv(r) && !/[^0-9]/.test(s) && Za(q)) {
              for (var u = [], x = 0; x < q.length; x++) {
                var z = pb(eH(q[x]));
                sv(z) || u.push(z)
              }
              f.push(new z3(r, parseInt(s, 10), u))
            }
          }
        }
      }
    }
    c = [];
    for (e = 0; e < a.length; e++) h = a[e], (f = d[h]) && f.length || c.push(h);
    c.length ? this.o(c, b, d) : b(d)
  }
};
B3.prototype.o = function(a, b, c) {
  this.A.b(a, function(a) {
    var e = c || {},
        f;
    for (f in a) e[f] && e[f].length || (e[f] = a[f]);
    b(e)
  })
};

function C3(a, b, c, d, e, f, h) {
  P.call(this);
  this.O = a;
  this.da = b;
  this.K = c;
  this.Z = d;
  this.D = e;
  this.X = h;
  b = a.b;
  b || (this.C = m);
  this.W = b;
  b = a.A.b;
  b || (this.C = m);
  this.H = b;
  this.Vl = b.get();
  this.Jo = wua(this);
  this.o = t;
  this.C || (this.ja = new Q(this), this.ja.I(this.W, v, this.$H), this.ja.I(this.H, v, this.YH), this.ja.I(a.F, v, this.ZH), PE(a) || a.F.isEmpty() || D3(this))
}
H(C3, P);

function xua(a, b, c) {
  var d = Td(a),
      e = Rh(a),
      f;
  if (d.isEnabled(44) && e.b) {
    f = ci.M();
    var h = OD(),
        e = Jd(a, 5),
        l = Mh(Ph(a)).Ma(),
        q = new A3(e, Yp);
    d.isEnabled(45) && (a = Af(a), q = new B3(a, q));
    f = new C3(b, l, f, h, q, 0, c);
    yua(f, b, e)
  }
  return f || n
}
function yua(a, b, c) {
  var d = hsa(v2(R()));
  b = Cb(d, F(zua, b));
  b = Db(b, function(a) {
    return jg(c, a.getId()).Ma()
  });
  Aua(a, b)
}
function zua(a, b) {
  var c = a.A.o.get(),
      d = a.K,
      d = 3 == d || 2 == d;
  return c == b.getId() || d && b.hb()
}
B = C3.prototype;
B.L = function() {
  C3.J.L.call(this);
  K(this.ja)
};

function E3(a, b) {
  return !ID(b, a.b, function(a, b) {
    return a.ih == b.ih
  })
}
function wua(a) {
  var b = a.O.Ja,
      c, d;
  b && (c = rE(b), d = m1(b));
  if (c) return c.getName();
  if (d) return d.getName();
  if (b = fi(a.K, a.Vl)) if (b = a.K.get(b)) return b.tz;
  return a.Z
}
B.$H = function() {
  var a = wua(this);
  a != this.Jo && Bua(this, function() {
    this.Jo = a
  })
};
B.YH = function() {
  var a = this.H.get();
  a != this.Vl && Bua(this, function() {
    this.Vl = a
  })
};

function Bua(a, b) {
  var c = a.b;
  b.call(a);
  F3(a, a.o);
  E3(a, c) && (a.F && D3(a), a.P(v))
}
B.ZH = function() {
  D3(this)
};
B.JQ = function(a) {
  if (this.B) for (var b in a) this.B[b] = a[b];
  else this.B = a;
  this.A = m;
  a = this.b;
  this.F && D3(this);
  F3(this, this.o);
  E3(this, a) && this.P(v)
};

function Aua(a, b) {
  a.A = p;
  a.D.b(b, E(a.JQ, a))
}
function D3(a) {
  var b;
  a.F ? (b = a.b, F3(a, a.o), b = E3(a, b)) : b = a.F = m;
  b && a.A && a.P("Bb")
}
function F3(a, b) {
  if (a.C || !a.A) return [];
  a.o = b;
  var c = a.da != a.Vl,
      d = Cua(a, a.B[a.Vl] || []).filter(b);
  c ? (c = Cua(a, a.B[a.da] || []).filter(b), d = sua(a.Jo, d, c)) : d = sua(a.Jo, d);
  return a.b = d
}

function Cua(a, b) {
  var c = new y3(G3, 100);
  if (a.X.b) for (var d = 0; d < b.length; d++) {
    var e = b[d],
        f;
    if (f = (f = e.B) ? a.X.o[f] : n) e.o = f, c.add(e)
  }
  return c
};

function H3(a, b, c, d) {
  Y.call(this);
  this.C = Pb(a);
  this.o = b;
  this.A = c;
  this.F = d || "ui-ts"
}
H(H3, Y);
H3.prototype.B = n;

function Dua(a, b, c) {
  c = C(c) ? c : a.o;
  a.C = Pb(b);
  c == a.o ? a.G() && I3(a) : J3(a, c)
}
function J3(a, b) {
  if (b != a.o) {
    var c = new Eua(b);
    a.o = b;
    a.P(c);
    a.G() && I3(a)
  }
}
H3.prototype.ia = function() {
  this.V = this.b.U("div", this.F);
  I3(this)
};

function I3(a) {
  a.G().innerHTML = a.A.D(a.C, a.o)
}
function Eua(a) {
  L.call(this, "Cb");
  this.Ia = a
}
H(Eua, L);
H3.prototype.$ = function() {
  H3.J.$.call(this);
  this.B = new lA(this.G());
  qA(this.B, E(this.A.A, this.A, this.b), E(this.H, this));
  Z(this).I(this.G(), "keypress", this.K)
};
H3.prototype.K = function(a) {
  13 != a.keyCode && 3 != a.keyCode || J3(this, this.A.o(a.target))
};
H3.prototype.H = function(a) {
  J3(this, this.A.o(a))
};
H3.prototype.Na = function() {
  this.B.aa();
  this.B = n;
  H3.J.Na.call(this)
};

function Fua() {}
function K3(a) {
  this.b = a || "ui-ltsr";
  this.B = this.b + "-tab-"
}
H(K3, Fua);
K3.prototype.C = function(a) {
  return nb(a.className || t, this.b)
};
K3.prototype.A = function(a, b) {
  return a.rF(b, E(this.C, this), m)
};
K3.prototype.o = function(a) {
  return parseInt(a.id.substr(this.B.length), 10)
};
K3.prototype.D = function(a, b) {
  for (var c = [], d = 0; d < a.length; d++) {
    var e = d == b ? t : "tabindex=0";
    L3.put("tab_class", d == b ? this.b + "-selected" : this.b + "-unselected");
    L3.put("tab_name", a[d]);
    L3.put("tab_id", this.B + d);
    L3.put("tab_index", e);
    c.push(L3.toString())
  }
  return c.join("&nbsp;| ")
};
var L3 = new V('<span id="${tab_id}" class="${tab_class}" ${tab_index} role="link">${tab_name}</span>');

function M3(a) {
  this.b = a || "ui-dtsr";
  this.B = this.b + "-tab-";
  this.C = m
}
H(M3, Fua);
M3.prototype.A = function(a, b) {
  return nb(b.className, this.b) ? b : n
};
M3.prototype.o = function(a) {
  return parseInt(a.id.substr(this.B.length), 10)
};
M3.prototype.D = function(a, b) {
  for (var c = [], d = 0; d < a.length; d++) {
    var e = this.b + " ",
        e = e + (d == b ? this.b + "-selected" : this.b + "-unselected");
    0 == d && (e += " " + (this.b + "-first-tab"));
    d == a.length - 1 && (e += " " + (this.b + "-last-tab"));
    var f = this.C && d != b ? "tabindex=0" : t;
    N3.put("tab_class", e);
    N3.put("tab_name", a[d]);
    N3.put("tab_id", this.B + d);
    N3.put("tab_index", f);
    c.push(N3.toString())
  }
  return c.join(t)
};
var N3 = new V('<div id="${tab_id}" class="${tab_class} goog-inline-block" ${tab_index} role="link">${tab_name}</div>');

function Gua(a) {
  a = a || {};
  var b = '<div class="' + KI(a.bc) + '" title="' + KI(a.Gi) + '" style="background:',
      c = a.sO;
  c != n && c.Ce === gsa ? c = c.content : c == n ? c = t : (c = String(c), c = ssa.test(c) ? c : "zSoyz");
  return Nm(b + KI(c) + '">' + (a.clickable ? '<span class="lk ep-gc-chip-text">' + ZH(a.Zb) + "</span>" : '<span class="ep-gc-chip-text">' + ZH(a.Zb) + "</span>") + "</div>")
}
function Hua(a) {
  a = a || {};
  return Nm('<div class="' + KI(a.LM) + '" title="' + KI(a.Gi) + '"></div>')
}

function Iua(a) {
  a = a || {};
  return Nm('<span class="lk ' + KI("ep-gc-remove-link") + '" title="' + KI(a.Gi) + '" tabindex="-1"></span>')
}
function Jua(a) {
  a = a || {};
  a = t + ('<span class="lk ' + KI("ep-gc-restore-link") + '" title="' + KI(a.Gi) + '" tabindex="-1">Restore</span>');
  return Nm(a)
}
function Kua(a) {
  a = a || {};
  var b;
  b = t;
  b = a.Au ? b + "Click to collapse" : b + "Click to expand";
  b = t2(b);
  a = t + (a.Au ? "ep-gc-grp-ex" : "ep-gc-grp-cl");
  a = t2(a);
  b = t + ('<div class="' + KI(a) + '" title="' + KI(b) + '"></div>');
  return Nm(b)
}

function Lua(a) {
  a = a || {};
  var b = t,
      c = NG(new Xk("{MEMBER_COUNT_1,plural,=0{ This group is empty.}=1{ 1 member.}other{ {MEMBER_COUNT_2} members.}}"), {
      MEMBER_COUNT_1: a.Ez,
      MEMBER_COUNT_2: ZH(a.Ez)
    }),
      b = b + ('<div class="ep-gc-comments">' + c),
      c = t2("Expanding this group will invite all members separately. Changes to the group will no longer be reflected in the guest list.");
  a.wJ && (b += ' <span class="lk ' + KI("ep-gc-expl") + '" title="' + KI(c) + '">Expand group</span>');
  return Nm(b + "</div>")
}

function Mua(a) {
  a = a || {};
  var b = t;
  a = NG(new Xk("{EXTRA_GUESTS_1,plural,=0{ unused plural form}=1{ +1 guest}other{ +{EXTRA_GUESTS_2} guests}}"), {
    EXTRA_GUESTS_1: a.hf,
    EXTRA_GUESTS_2: ZH(a.hf)
  });
  return Nm(b + ('<div class="ep-gc-extra-guests">' + a + "</div>"))
}
function Nua(a) {
  a = a || {};
  return Nm('<div class="ep-gc-comments">' + ZH(a.Rg) + "</div>")
};

function Oua(a, b, c, d) {
  this.b = a;
  this.D = b;
  this.C = c;
  this.A = d;
  this.B = this.b.K;
  this.o = new lP
}
function O3(a, b, c) {
  for (var d = [], d = ['<div class="ep-gc-row">'], e = 0; e < b.b; e++) d.push('<div class="ep-gc-cont">');
  d.push(Pua(a, b));
  d.push('<div class="ep-gc-cont">');
  d.push(Qua(a, b), Rua(a, b, c), Sua(a, b), Tua(a, b), Uua(a, b));
  for (e = 0; e < b.b + 2; e++) d.push("</div>");
  return d.join(t)
}
function P3(a, b) {
  var c = b.ic;
  return c.email in a.b.o.b || asa(c) && !b.getParent()
}
function Q3(a, b) {
  return b.email in a.b.o.A
}

function Rua(a, b, c) {
  var d = b.ic,
      e = p1(d),
      f = d.email,
      h = a.b.b.Da(d.email),
      l = O1(N1(a.D, d.email)),
      q = ["ep-gc-chip"];
  Q3(a, d) && !b.getParent() && q.push("ep-gc-removed");
  var r = p,
      s = "transparent",
      u = f;
  d.rk ? (e += "\u00a0*", Q3(a, d) || q.push("ep-gc-unresolved")) : a.C || !WD(d) ? Q3(a, d) || q.push("ep-gc-plain") : (Q3(a, d) || (q.push(c ? "ep-gc-hovered" : h ? "ep-gc-selected" : t), r = m), u = h ? "Hide events: " + f : "Show events: " + f, s = c ? l.o : h ? l.b : s);
  P3(a, b) && q.push("ep-gc-new-guest");
  return a.o.render(Gua, {
    sO: s,
    bc: q.join(" "),
    Gi: u,
    Zb: e,
    clickable: r
  })
}

function Qua(a, b) {
  var c = b.ic,
      d = n,
      e = t;
  if (a.A && c.A && 0 < a.b.D) if (Q3(a, c)) d = "ep-gc-response-unknown", e = t;
  else
  return a.o.render(Kua, {
    Au: HD(a.b.A, b.getId())
  });
  else if (a.A && (108 != c.Bb() ? 0 : !c.A || 0 < a.b.D)) d = "ep-gc-response-unknown", e = t;
  else
  switch (c.ea) {
  case 1:
    d = "ep-gc-response-yes";
    e = "Yes";
    break;
  case 3:
    d = "ep-gc-response-maybe";
    e = "Maybe";
    break;
  case 2:
    d = "ep-gc-response-no";
    e = "No";
    break;
  default:
    d = "ep-gc-response-unknown", e = "Unknown"
  }
  return a.o.render(Hua, {
    LM: d,
    Gi: e
  })
}

function Sua(a, b) {
  var c = b.ic;
  return b.getParent() || !a.B && !P3(a, b) ? t : Q3(a, c) ? a.o.render(Jua, {
    Gi: "This guest has been removed. Click to restore the guest."
  }) : a.o.render(Iua, {
    Gi: "Remove this guest from the event"
  })
}
function Tua(a, b) {
  var c = b.ic;
  return HD(a.b.A, b.getId()) && !b.getParent() && !Q3(a, c) && a.A && c.A && 0 < a.b.D ? (c = Bc(g1(a.b.F, c.email).b), a.o.render(Lua, {
    Ez: c,
    wJ: a.B && 0 < c
  })) : !c.hf || 1 != c.ea && 3 != c.ea ? t : a.o.render(Mua, {
    hf: c.hf
  })
}
function Uua(a, b) {
  var c = b.ic;
  return c.Rg ? a.o.render(Nua, {
    Rg: c.Rg
  }) : t
}

function Vua(a) {
  switch (a) {
  case "ep-gc-oa-disabled-optional-attendance-icon":
    return "Optional attendee. This attendee's status can only be modified by the event's organizer.";
  case "ep-gc-oa-disabled-required-attendance-icon":
    return "Required attendee. This attendee's status can only be modified by the event's organizer.";
  case "ep-gc-oa-optional-attendance-icon":
    return "Click to mark this attendee as required";
  case "ep-gc-oa-required-attendance-icon":
    return "Click to mark this attendee as optional";
  case "ep-gc-oa-removed-optional-attendance-icon":
    return "Optional attendee. This attendee has been removed.";
  case "ep-gc-oa-removed-required-attendance-icon":
    return "Required attendee. This attendee has been removed.";
  case "ep-gc-grp-icon":
    return t;
  default:
    return t
  }
}

function Pua(a, b) {
  var c;
  var d = b.ic;
  if (a.A && d.A && 0 < a.b.D) c = "ep-gc-grp-icon";
  else if (100 != d.ka || b.getParent()) c = n;
  else {
    c = a.b.H;
    var e = UD(d);
    c = P3(a, b) || !Q3(a, d) && c ? e ? "ep-gc-oa-optional-attendance-icon" : "ep-gc-oa-required-attendance-icon" : Q3(a, d) ? e ? "ep-gc-oa-removed-optional-attendance-icon" : "ep-gc-oa-removed-required-attendance-icon" : e ? "ep-gc-oa-disabled-optional-attendance-icon" : "ep-gc-oa-disabled-required-attendance-icon"
  }
  if (!c) return t;
  d = Vua(c);
  c = ["ep-gc-oa-attendance-icon", c];
  a.b.H && c.push("lk");
  return '<span class="' + c.join(" ") + '" alt="' + d + '" title="' + d + '"></span>'
};

function R3(a, b, c, d, e, f) {
  Y.call(this);
  this.Z = a;
  this.ya = Td(this.Z).isEnabled(35);
  this.Ha = Mh(Ph(a));
  this.ea = b;
  this.A = b.C;
  this.o = b.F;
  this.W = !! e;
  this.O = f || "ep-gl";
  this.ka = new Oua(this.ea.C, c, this.W, this.ya);
  this.B = new tr
}
H(R3, Y);
B = R3.prototype;
B.fu = function(a) {
  if (this.B.hasFocus()) {
    var b = zr(this.B);
    switch (a.keyCode) {
    case 38:
      this.B.wg();
      break;
    case 40:
      this.B.rg();
      break;
    case 46:
      b && !this.o.contains(S3(this, b)) ? Wua(this, b) : this.o.remove(S3(this, b));
      break;
    case 32:
      var c = YD(this.o, S3(this, b));
      c && (100 == c.Bb() ? Xua(this, b) : c.A && this.Vy(b));
      break;
    default:
      return
    }
    a.preventDefault()
  }
};
B.rb = y(p);
B.ia = function() {
  var a = this.b.U("div", this.O);
  a.innerHTML = jm(Yua, {
    id: this.getId(),
    prefix: this.O
  }) + jm(Zua, {
    id: this.getId(),
    prefix: this.O
  });
  Dj(a, "listbox");
  Ej(a, "multiselectable", m);
  this.V = a
};
B.$ = function() {
  this.W || Bb(dh(this.o), function(a) {
    var b = this.o.Da(a.email);
    this.o.setVisible(a.email, b && !UD(a))
  }, this);
  R3.J.$.call(this);
  T3(this);
  $ua(this)
};

function $ua(a) {
  var b = a.getId();
  Ku(Z(a), a.b.G(b + "emailGuests"), jA, a.yN);
  Z(a).I(a.b.G(b + "guestErrorDetailsLink"), "click", E(a.LN, a));
  a.C = new lA(a.G());
  qA(a.C, E(a.wN, a), E(a.EN, a));
  qA(a.C, E(a.xN, a), E(a.FN, a));
  a.W || (rA(a.C, E(a.AB, a), E(a.CB, a, m), E(a.CB, a, p)), qA(a.C, E(a.AB, a), E(a.AN, a)));
  Z(a).I(a.o, "h", a.JN);
  Td(a.Z).isEnabled(7) && (Z(a).I(a.G(), "mousedown", Xw), Z(a).I(new gy(a.G()), "key", a.fu));
  qA(a.C, E(a.vN, a), E(a.DN, a));
  qA(a.C, E(a.uN, a), E(a.Vy, a));
  qA(a.C, E(a.tN, a), E(a.zN, a))
}
B.Na = function() {
  this.C && this.C.aa();
  Yd(Z(this));
  R3.J.Na.call(this)
};
B.aa = function() {
  this.F && this.F.aa();
  R3.J.aa.call(this)
};

function U3(a, b) {
  var c = [];
  Bb(b, function(a) {
    var b = O3(this.ka, a);
    if (b) {
      var f = a.ic,
          h = !UD(f),
          l = f.Mc(),
          q = !this.o.getItem(f.email),
          h = 'aria-selected="' + (h || l ? "true" : "false") + '"',
          r = t;
      if (l || q) r = 'aria-readonly="true"';
      f = I(f.Zb + (l ? ", Rooms, etc." : t) + (q ? ", removed" : t));
      c.push('<div class="', this.O + "-guest", '"', ' id="', this.getId(), a.getId(), '"', 'role="option"', h, r, 'title="' + f + '">', b, "</div>")
    }
  }, a);
  return c.join(t)
}
function ava() {
  this.F = p;
  this.o = [];
  this.b = [];
  this.C = [];
  this.A = [];
  this.D = [];
  this.B = {}
}

function bva(a, b) {
  var c = a.b.G(a.getId() + "guestError");
  U(c, b)
}
function cva(a, b) {
  var c = a.A.W ? a.A.Z ? "The full guest list has been hidden because the number of guests is too large." : "The full guest list has been hidden at the organizer's request." : "Yes: " + b.D[1] + ", Maybe: " + b.D[3] + ", No: " + b.D[2] + ", Awaiting: " + b.D[0];
  a.b.G(a.getId() + "guestsResponseCount").innerHTML = c
}

function dva(a, b) {
  var c = a.getId() + "sectionBorder";
  U(a.b.G(c), 0 < dh(a.o).length);
  var c = a.B.hasFocus(),
      d = zr(a.B) ? zr(a.B).id : k,
      e = [];
  V3(a, e, "new", U3(a, b.o));
  V3(a, e, "guests", U3(a, b.b));
  V3(a, e, "resources", U3(a, b.C));
  ur(a.B, e);
  bva(a, b.F);
  cva(a, b);
  eva(a);
  a.W && fva(a, b);
  Td(a.Z).isEnabled(7) && (F1(a.B, function(a) {
    return a.id == d
  }), c && a.B.focus())
}

function fva(a, b) {
  for (var c = [], d = 0; a.H && d < a.H.length; d++) {
    var e = a.H[d].email;
    Bb(b.A, function(a) {
      a.ic.email == e && (a = this.b.G(this.getId() + a.getId()), (a = Mt("ep-gc-chip", a || this.b.b)) && a.length && c.push(a[0]))
    }, a)
  }
  c.length && gva(c, a.wa ? "#fe8" : "#fff7d7", a.wa ? 1 : 0);
  a.H = n
}

function gva(a, b, c) {
  function d(a) {
    a *= c + 2;
    return a < c ? (a = 2 * a % 2, 1 > a ? 1 - a : a - 1) : a < c + 1 ? 1 : 1 - a % 1
  }
  function e(a) {
    a = a.target.element;
    a.style.backgroundColor = t;
    a.animation = n
  }
  b = Z1(b);
  for (var f = 0; f < a.length; ++f) {
    var h = a[f];
    h.animation && h.animation.stop();
    h.style.backgroundColor = t;
    var l = mj(h, "backgroundColor"),
        q = [255, 255, 255];
    "transparent" != l && "rgba(0, 0, 0, 0)" != l && (q = Z1($1(l).Vm));
    l = new g2(h, q, b, 1E3 * (c + 2), d);
    O(l, "end", e);
    l.rf();
    h.animation = l
  }
}

function T3(a) {
  a.K = n;
  var b = new ava;
  b.o = a.A.Fx();
  b.b = a.A.Ex();
  b.C = Qra(a.A);
  hva(a, b);
  var c = !! b.o.length,
      d = !! b.b.length,
      e = c || d;
  dva(a, b);
  var f = a.getId() + "sectionBorder";
  U(a.b.G(f), e);
  f = a.getId() + "sectionHeader";
  U(a.b.G(f), e);
  f = a.getId() + "guestsResponseCount";
  U(a.b.G(f), e);
  c = c && d;
  d = a.getId() + "sectionSeparator";
  U(a.b.G(d), c);
  c = !! b.b.length;
  d = !! b.o.length;
  c = a.A.H ? d || c : a.A.C ? d : p;
  t: {
    d = a.A.C;
    if (a.A.H) for (e = 0; e < b.b.length; e++) if (UD(b.b[e].ic)) {
      d = m;
      break t
    }
    if (d) for (e = 0; e < b.o.length; e++) if (UD(b.o[e].ic)) {
      d = m;
      break t
    }
    d = p
  }
  c = d || c;d = a.getId() + "optionalAttendeesLegend";U(a.b.G(d), c);a.K = b
}
function V3(a, b, c, d) {
  var e = a.getId(),
      f = a.b.G(e + c);
  a = a.b.G(e + c + "Body");
  d && (a.innerHTML = d, a = Ni(a), Ev(b, a));
  U(f, !! d)
}
function W3(a, b) {
  return Kv(b, F(Lv, a.O + "-guest"), a.G())
}
B.AB = function(a) {
  return Kv(a, F(Lv, "ep-gc-chip"), this.G()) ? W3(this, a) : n
};
B.wN = function(a) {
  return Ot(a, "ep-gc-remove-link") ? W3(this, a) : n
};
B.xN = function(a) {
  return Ot(a, "ep-gc-restore-link") ? W3(this, a) : n
};
B.CB = function(a, b) {
  var c = this.K.B[b.id.substr(this.getId().length)];
  c && WD(c.ic) && (b.innerHTML = O3(this.ka, c, a))
};
B.AN = function(a, b) {
  b.preventDefault();
  var c = S3(this, a),
      d = this.o,
      e = d.getItem(c);
  e && WD(e) && d.setVisible(c, !d.Da(c))
};
B.EN = function(a, b) {
  b.preventDefault();
  this.o.remove(S3(this, a))
};
B.FN = function(a, b) {
  b.preventDefault();
  Wua(this, a)
};

function Wua(a, b) {
  var c = a.o,
      d = S3(a, b);
  c.add(c.Ia[d])
}
function S3(a, b) {
  return a.K.B[b.id.substr(a.getId().length)].ic.email
}
B.JN = function(a) {
  var b = a.o,
      c = b.T;
  if (c) {
    var d = [];
    for (a = 0; a < c.length; ++a) d[a] = $ra(this.o, c[a].email);
    this.H = d;
    this.wa = m
  } else b.S ? this.H = Cb(b.S, function(a) {
    return asa(a)
  }) : this.H = b.f, this.wa = p;
  if (Hb([this.H, b.g, b.S, b.change], function(a) {
    return a && a.length
  })) T3(this);
  else
  for (c = b.R || [], Ev(c, b.Q || []), a = 0, b = c.length; a < b; a++) {
    var e = c[a].getKey();
    Bb(this.K.A, function(a) {
      if (a.ic.email == e) {
        var b = this.b.G(this.getId() + a.getId());
        if (a = O3(this.ka, a)) b.innerHTML = a
      }
    }, this)
  }
  eva(this)
};

function eva(a) {
  var b = a.b,
      c = b.G(a.getId() + "emailGuests");
  if (c) {
    var d = a.ea.bb,
        e = a.Ha.Ma(),
        f = Hb(dh(a.o), function(a) {
        a = a.email;
        return a != d && a != e
      });
    PE(a.ea) ? X3(a, p) : f ? (b.Oe(c, "Email guests"), X3(a, m)) : e == d ? X3(a, p) : (b.Oe(c, "Email organizer"), X3(a, m))
  }
}
function X3(a, b) {
  var c = a.b.G(a.getId() + "emailGuests"),
      d = a.b.G(a.getId() + "emailGuestsIcon");
  c && d && (U(c, b), U(d, b))
}
B.yN = function() {
  this.P("Db")
};
B.LN = function() {
  this.F || (this.F = new tK("addgadget-dialog"), this.F.setTitle("Some guest calendars cannot be shown"), vK(this.F, "Google Calendar could not resolve the indicated guests for one of the following reasons: <ul> <li>The guests may not use Google Calendar.</li> <li>You may not have permission to access the indicated calendars.</li> </ul>"), DK(this.F, LK()));
  this.F.setVisible(m)
};

function hva(a, b) {
  b.A = Ob(b.o, b.b, b.C);
  b.D = g1(a.A.O, "<top>").o;
  b.F = Eb(b.A, function(a) {
    return a.ic.rk
  });
  Bb(b.A, function(a) {
    b.B[a.getId()] = a
  })
}
B.vN = function(a) {
  return Ot(a, "ep-gc-oa-optional-attendance-icon") || Ot(a, "ep-gc-oa-required-attendance-icon") ? W3(this, a) : n
};
B.uN = function(a) {
  return Ot(a, "ep-gc-grp-ex") || Ot(a, "ep-gc-grp-cl") ? W3(this, a) : n
};
B.tN = function(a) {
  return Ot(a, "ep-gc-expl") ? W3(this, a) : n
};
B.DN = function(a, b) {
  b.preventDefault();
  Xua(this, a)
};
B.Vy = function(a) {
  a = this.K.B[a.id.substr(this.getId().length)];
  var b = this.A;
  HD(b.A, a.getId()) ? Gc(b.A, a.getId()) : Ww(b.A, a.getId(), m);
  T3(this)
};
B.zN = function(a) {
  Ora(this.A, this.K.B[a.id.substr(this.getId().length)])
};

function Xua(a, b) {
  var c = YD(a.o, S3(a, b)),
      d = a.o,
      e = !UD(c);
  UD(c) !== e && (d.Eb(), c.wa.set(e), d.xb())
}
var Yua = new V('<div id="${id}sectionBorder" class="${prefix}-oa-border"></div><div id="${id}optionalAttendeesLegend" class="${prefix}-oa-legend">Click the <div class="${prefix}-oa-chip-icon ${prefix}-oa-required-attendance-icon goog-inline-block"></div> icons below to mark as optional.</div>'),
    Zua = new V('<div id="${id}guests-all"><div id="${id}sectionHeader" class="${prefix}-head"><span class="${prefix}-guests-header">Guests</span><span id="${id}emailGuests" class="lk ${prefix}-email-guests"tabindex=0></span><div id="${id}emailGuestsIcon" class="${prefix}-email-guests-icon goog-inline-block"></div></div><div class="${prefix}-head-separator"></div><div id="${id}guestsResponseCount" class="${prefix}-count"></div><div id="${id}new" class="${prefix}-oa-new-sec"><div id="${id}newBody"></div></div><div id="${id}sectionSeparator" class="${prefix}-oa-new-sec-sep"></div><div id="${id}guests" class="${prefix}-oa-old-sec"><div id="${id}guestsBody"></div></div></div><div id="${id}resources" class="${prefix}-oa-old-sec"><div id="${id}resourcesHeader" class="${prefix}-head">Rooms, etc.</div><div id="${id}resourcesBody"></div></div><div id="${id}guestError" class="${prefix}-errs">* Calendar cannot be shown. <a id="${id}guestErrorDetailsLink" href="javascript:void(0)">Why?</a></div>');

function Y3(a, b) {
  Y.call(this);
  this.o = a;
  this.H = b || "ep-go"
}
H(Y3, Y);
var iva = new V('<div class="${prefix}"><hr><div class="${prefix}-guests-can"><h3 class="${prefix}-label">Guests can</h3><div class="${prefix}-for"><label><input type="checkbox" id="${id}guests-modify">modify event</label><label><input type="checkbox" id="${id}guests-invite">invite others</label><label><input type="checkbox" id="${id}guests-see-guests">see guest list</label><div id="${id}see-guests-warning" class="${prefix}-see-guests-warning">Guests may be able to view the guest list if changes to this event are made via a 3rd-party client. ${learnMore}</div></div></div></div>');
B = Y3.prototype;
B.rb = y(p);
B.ia = function() {
  this.o.C ? this.V = Kw(jm(iva, {
    id: this.getId(),
    prefix: this.H,
    learnMore: j2(3046349, "Learn more")
  }).toString()) : Y3.J.ia.call(this)
};
B.$ = function() {
  Y3.J.$.call(this);
  if (this.o.C) {
    var a = this.getId();
    this.C = this.b.G(a + "guests-modify");
    this.B = this.b.G(a + "guests-invite");
    this.A = this.b.G(a + "guests-see-guests");
    this.F = this.b.G(a + "see-guests-warning");
    this.ot();
    Z(this).I(this.C, "click", this.nt);
    Z(this).I(this.B, "click", this.nt);
    Z(this).I(this.A, "click", this.cI);
    Z(this).I(this.o.A, v, this.ot);
    Z(this).I(this.o.b, v, this.ot)
  }
};
B.ot = function() {
  var a = this.o,
      b = 1 == a.A.get();
  this.C.disabled = 4 == a.b.get();
  this.B.disabled = b;
  this.A.disabled = b;
  this.C.checked = b;
  this.B.checked = C1(a);
  this.A.checked = B1(a);
  U(this.F, !this.A.checked)
};
B.nt = function() {
  this.o.A.set(GD(this.C.checked, this.B.checked, this.A.checked))
};
B.cI = function() {
  this.nt();
  U(this.F, !this.A.checked)
};

function Z3(a, b, c) {
  this.o = a;
  this.Nc = b;
  this.A = c || 20;
  this.B = E(this.iR, this)
}
H(Z3, uc);
B = Z3.prototype;
B.on = n;
B.L = function() {
  this.stop();
  Z3.J.L.call(this)
};
B.start = function() {
  this.on != n && this.stop();
  this.b = ib();
  this.on = window.setInterval(this.B, this.A)
};
B.stop = function() {
  this.on != n && (window.clearInterval(this.on), this.on = n)
};
B.iR = function() {
  var a = ib() - this.b,
      a = this.o(a);
  this.Nc(a) && this.stop()
};

function $3(a, b, c, d, e) {
  Y.call(this);
  this.ka = a;
  this.o = b;
  this.Nb = new e3(b.B, "Enter email addresses", p, k, k, "Enter email addresses");
  this.ha(this.Nb);
  this.ea = c;
  this.W = !e;
  this.B = d || "ep-gs";
  Dd(Ld(this.ka, 802), this.wS, this)
}
H($3, Y);
B = $3.prototype;
B.ia = function() {
  var a = this.b,
      b = a.U("div", this.B);
  this.V = b;
  var c = a.U("div", this.B + "-ta-cont goog-inline-block");
  b.appendChild(c);
  this.F = a.U("input", {
    "class": this.B + "-ta",
    id: this.oa("ta")
  });
  c.appendChild(this.F);
  var d = a.U("div", this.B + "-actions goog-inline-block");
  b.appendChild(d);
  this.W && (this.H = new Ky("Add", Oy.M()), this.ha(this.H), this.H.render(d));
  this.A = a.U("div", {
    "class": this.B + "-message",
    "aria-live": "polite",
    "aria-relevant": "additions",
    "aria-atomic": "true"
  });
  c.appendChild(this.A);
  this.ea && (this.K =
  a.U("span", this.B + "-ccl", "Contacts"), d.appendChild(this.K))
};
B.$ = function() {
  $3.J.$.call(this);
  var a = this.F;
  this.Nb.xa || Px(this.Nb, a);
  var b = Z(this);
  this.W && (b.I(this.H, "action", this.cK), b.I(a, "keydown", this.bK));
  jva(this);
  this.K && b.I(this.K, "click", this.dK);
  b.I(this.o.b, "h", this.aK);
  b.I(this.o.B, v, this.eK)
};
B.Na = function() {
  a4(this);
  this.C && this.C.A(this.F.id);
  this.A = n;
  $3.J.Na.call(this)
};
B.rb = y(p);
B.L = function() {
  $3.J.L.call(this);
  this.K = this.A = this.H = this.F = n;
  a4(this)
};
B.bK = function(a) {
  if (!this.C || !this.C.D()) if (3 == a.keyCode || 13 == a.keyCode) this.o.B.set(this.Nb.Ca()), window.setTimeout(E(this.Ov, this, m), 0), a.preventDefault()
};
B.dK = function(a) {
  var b = this.Nb ? this.Nb.G() : n;
  b && (this.o.B.set(t), this.ea(a, b))
};
B.$U = function() {
  this.o.B.set(this.Nb.Ca());
  this.Ov(this.W)
};
B.cK = function() {
  this.Ov(m) && this.focus()
};
B.Ov = function(a) {
  a = FE(this.o, a);
  return a.b.length ? (NI(mta(a.b.join("\n")).replace(/<br>/g, "\n")), p) : m
};
B.aK = function(a) {
  var b = kva(this, fh(a, "f"));
  a = kva(this, fh(a, "T"));
  var c, d;
  b.length && a.length ? (c = "Some guests already invited", d = lva) : a.length ? (c = 1 == a.length ? "Guest already invited" : "Guests already invited", d = mva) : b.length && (c = 1 == b.length ? "Guest added" : "Guests added (" + b.length + ")", d = nva);
  c && b4(this, Ij(c), d, m);
  Dd(Ld(this.ka, 803), E(this.WX, this))
};

function kva(a, b) {
  return Cb(b, function(a) {
    return !VD(a)
  }, a)
}
B.WX = function(a) {
  for (var b = dh(this.o.b), c = 0; c < b.length; c++) {
    var d = b[c],
        e = d.getKey(),
        f = p1(d);
    d.Mc() || e != f || a.B(e, E(this.VO, this, d))
  }
};
B.VO = function(a, b) {
  var c = CD(yD.M(), b);
  c && Xra(this.o.b, a, c)
};
B.eK = function() {
  b4(this, t)
};
B.Mw = t;
var nva = "#008800",
    lva = "#000",
    mva = "#c11";

function b4(a, b, c, d) {
  a.A && (a4(a), a.A.innerHTML = b, a.Mw = c || nva, a.yE(a.Mw), d && (a.O = Va.setTimeout(E(a.IV, a), 4E3)))
}
B = $3.prototype;
B.IV = function() {
  this.O = n;
  this.Z = new Z3(E(this.DX, this), E(this.yE, this), 20);
  this.Z.start()
};
B.DX = function(a) {
  return 300 < a ? (b4(this, t, "#eeeeee"), n) : zh(this.Mw, "#eeeeee", a / 300)
};
B.yE = function(a) {
  if (!this.A || !a) return m;
  this.A.style.color = a;
  return p
};

function a4(a) {
  a.O && (Va.clearTimeout(a.O), a.O = n);
  K(a.Z);
  a.Z = n
}
B.focus = function() {
  this.Nb.focus()
};
B.ym = w("F");
B.wS = function(a) {
  this.C = a;
  jva(this)
};

function jva(a) {
  a.xa && a.C && a.C.B(a.F.id, m, E(a.$U, a))
};

function c4(a, b, c, d, e, f, h, l, q, r) {
  Y.call(this);
  this.H = b;
  this.B = b.C.C;
  this.ea = p;
  var s = Td(a).isEnabled(68);
  A1(b) && !b.Ml && s && (this.ea = this.B = m);
  this.wa = Rh(a);
  this.Z = r || "ep-gp";
  this.A = n;
  this.B && (this.A = q || new H3(["Add guests"], PE(b) || 1 >= b.F.size() ? 0 : -1, new K3, this.Z + "-ts"), d4(this) ? e4(this) : (b = Z(this), Lu(b, this.wa, "a", this.fR, k)));
  this.C = this.B ? e || new $3(a, this.H.C, k) : n;
  this.ya = f || new R3(a, this.H, c, 0, d);
  this.W = this.B ? l || n : n;
  this.Ha = h || new Y3(this.H.B);
  this.B && (this.ha(this.A), this.ha(this.C));
  this.ha(this.ya);
  this.W && this.ha(this.W);
  this.ha(this.Ha)
}
H(c4, Y);
c4.prototype.rb = y(p);
c4.prototype.ia = function() {
  var a = this.b,
      b = a.U("div", this.Z);
  if (this.B && (this.K = a.U("div", this.Z + "-sp"), b.appendChild(this.K), this.O = a.U("div", "goog-inline-block"), this.K.appendChild(this.O), this.ka = a.U("div", "goog-inline-block"), this.K.appendChild(this.ka), this.A.render(this.K), this.C.render(this.K), this.ea)) {
    var a = jm(ova, {
      id: this.getId()
    }),
        c = document.createElement("div");
    c.innerHTML = a;
    this.C.G().insertBefore(c, this.C.G().firstChild)
  }
  this.V = b;
  this.ya.render(b);
  this.W && this.W.render(b);
  this.Ha.render(b);
  d4(this) && f4(this)
};
c4.prototype.Ja = function() {
  this.F || (this.F = new tK("addgadget-dialog"), this.F.setTitle("Guest won't appear in the guest list"), vK(this.F, "This event was created outside Google Calendar, so we can't change it directly.<p> If the event has an organizer specified, once a guest that you invited responds, the organizer of the event will be prompted to invite the new guest. New guests will only receive event updates and change notifications once the organizer has added them to the original event.<p> If the event doesn't have an organizer specified (for example, like many travel confirmation events), the guest will receive an invitation but will not appear in the guest list on your view of the event."), DK(this.F, LK()));
  this.F.setVisible(m)
};
var ova = new V('<div class="ep-gp-msg">Guests you invite will receive an invitation, but won\'t appear in the guest list after you save this event. <a id="${id}guestWontAppearLink" href="javascript:void(0)">Why?</a></div>');

function f4(a) {
  a.O && (a.O.innerHTML = d4(a) ? "Add:&nbsp;" : t)
}
B = c4.prototype;
B.L = function() {
  this.ka = this.O = n;
  K(this.o);
  this.o = n;
  K(this.F);
  this.F = n;
  c4.J.L.call(this)
};
B.$ = function() {
  c4.J.$.call(this);
  if (this.B) {
    this.ka.appendChild(this.A.G());
    var a = Z(this);
    a.I(this.A, "Cb", this.QI);
    this.o && (a.I(this.o, "gcal-rp-add", this.Cy), a.I(this.o, "gcal-rp-close", this.Dy));
    var b = this.b.G(this.getId() + "guestWontAppearLink");
    b && a.I(b, "click", E(this.Ja, this));
    a.I(this.H.B.b, v, this.RI);
    g4(this)
  }
};
B.RI = function() {
  f4(this);
  e4(this)
};

function e4(a) {
  a.A && (d4(a) ? Dua(a.A, ["Guests", "Rooms, etc."]) : Dua(a.A, ["Guests"], 0))
}

function pva(a, b) {
  if (!a.o && (a.o = b, a.ha(b), b.render(a.K), a.xa)) {
    var c = Z(a);
    c.I(a.o, "gcal-rp-add", a.Cy);
    c.I(a.o, "gcal-rp-close", a.Dy);
    g4(a)
  }
}
B.QI = function() {
  g4(this);
  var a = 1 == this.A.o;
  a && this.o && this.o.ym() ? this.o.ym().focus() : a || this.C.ym().focus()
};

function g4(a) {
  if (a.xa) {
    var b = a.A.o;
    0 == b ? U(a.C.G(), m) : U(a.C.G(), p);
    (b = 1 == b) && !a.o && a.P("Gb");
    a.o && (U(a.o.G(), b), a.o.Yh.$a(t), b ? a.o.gz = fp() : delete a.o.gz);
    a.P("Eb")
  }
}
B.Dy = function() {
  J3(this.A, -1)
};
B.Cy = function(a) {
  a = a.Od;
  a = new TD(a.email, 0, a.name);
  this.H.F.add(a)
};
B.fR = function() {
  d4(this) && (f4(this), e4(this), this.P("Fb"))
};

function d4(a) {
  var b = a.H.B.b.get();
  return a.B && !a.ea && a.wa.b && 4 != b
};

function h4(a, b) {
  if (1 == a.length) return o2[a[0]];
  for (var c = 0, d = 0; d < a.length; ++d) c |= 1 << a[d];
  switch (c) {
  case 127:
    return b ? "all days" : "day";
  case 62:
    return b ? "weekdays" : "weekday"
  }
  c = [];
  for (d = 0; d < a.length; ++d) c.push(o2[a[d]]);
  return i4(c)
}
function j4(a) {
  for (var b = [], c = 0; c < a.length; ++c) b.push(AI[a[c]]);
  return i4(b)
}
function i4(a) {
  return a.join(", ")
};

function k4(a) {
  this.o = {};
  var b = a.replace(/(?:\r\n?|\n)[ \t]/g, t).match(qva);
  this.Cb = b[1].toUpperCase();
  var c = b[2];
  a = b[3];
  if (c) {
    do b = c.replace(rva, t), c = c.substring(b[0].length), this.o[b[1].toUpperCase()] = b[2] && !b[3] ? b[3] : b[2];
    while (c)
  }
  var d;
  t: {
    var b = this.Cb,
        c = this.o,
        e = sva;
    l4.push(b);
    try {
      d = e[b].call(e, c, a);
      break t
    } finally {
      l4.pop()
    }
    d = k
  }
  this.b = d
}
var qva = /^((?:[^:;\"]|\"[^\"]*\")+)(;(?:[^:\"]|\"[^\"]*\")+)?:([\s\S]*)$/,
    rva = /^;([^=]+)=(?:([^\";]*)|\"([^\"]*)\")/;
k4.prototype.Ie = function() {
  var a = [];
  a.push(this.Cb);
  for (var b in this.o) {
    a.push(";", b, "=");
    var c = this.o[b],
        d = t;
    if (c && c.constructor === Array) for (var e = 0; e < c.length; ++e) {
      e && (d += ",");
      var f = c[e],
          d = d + (f.Ie || f.toString).call(f)
    } else
    switch (b) {
    default:
      d = (c.Ie || c.toString).call(c)
    }
    d.match(/[;:]/) ? a.push('"', d, '"') : a.push(d)
  }
  a.push(":");
  var h = p;
  for (b in this.b) {
    h ? a.push(";") : h = m;
    a.push(b, "=");
    c = this.b[b];
    d = t;
    if (c && c.constructor === Array) for (e = 0; e < c.length; ++e) e && (d += ","), f = c[e], d += (f.Ie || f.toString).call(f);
    else
    switch (b) {
    case "FREQ":
      d = n2[c] || n;
      break;
    case "WKST":
      d = yE[c] || n;
      break;
    case "UNTIL":
      d = c.toString();
      break;
    default:
      d = (c.Ie || c.toString).call(c)
    }
    a.push(d)
  }
  return a.join(t)
};

function tva(a, b, c) {
  if ("BYSETPOS" in a.b || "BYMONTHDAY" in a.b && "BYDAY" in a.b) return n;
  var d = a.b.FREQ,
      e = a.b.INTERVAL || 1,
      f;
  switch (d) {
  case 0:
  case 1:
  case 2:
    return n;
  case 3:
    f = 1 === e ? "Daily" : "Every " + e + " days";
    break;
  case 4:
    f = 1 === e ? "Weekly" : "Every " + e + " weeks";
    break;
  case 5:
    f = 1 === e ? "Monthly" : "Every " + e + " months";
    break;
  case 6:
    f = 1 === e ? "Annually" : "Every " + e + " years"
  }
  var h;
  switch (d) {
  case 3:
    h = t;
    break;
  case 4:
    if ("BYDAY" in a.b) {
      var l = a.b.BYDAY;
      h = Array(l.length);
      for (e = 0; e < l.length; ++e) h[e] = l[e].Ln
    } else h = [b.Jb()];
    h = "on " + h4(h, m);
    break;
  case 5:
    if ("BYDAY" in a.b) {
      d = uva(a.b.BYDAY, 5);
      if (!d) return n;
      if (0 > d.Qc[0]) h = d.Qc[0], h = -1 == h ? "on the last " + h4(d.od) : "on " + h4(d.od) + ", " + (-h).toString() + " weeks before the end of the month";
      else if (d.ow) h = "every " + h4(d.od);
      else if (1 !== d.Qc.length) h = "on " + h4(d.od) + " of weeks " + i4(d.Qc) + " of the month";
      else {
        switch (d.Qc[0]) {
        case 1:
          e = dta;
          break;
        case 2:
          e = cta;
          break;
        case 3:
          e = bta;
          break;
        case 4:
          e = ata;
          break;
        case 5:
          e = $sa;
          break;
        default:
          return n
        }
        h = e(h4(d.od))
      }
    } else if ("BYMONTHDAY" in a.b ? l = a.b.BYMONTHDAY : l = [b.Y], 1 === l.length && 0 > l[0]) h = -1 === l[0] ? "on the last day" : t + (-l[0]).toString() + " days before the end of the month";
    else {
      if (m4(l)) return n;
      h = 1 !== l.length ? "on days " + i4(l) + " of the month" : "on day " + l[0].toString()
    }
    break;
  case 6:
    var q = h = n,
        r = d = n;
    if ("BYMONTH" in a.b) h = a.b.BYMONTH, "BYDAY" in a.b ? q = a.b.BYDAY : "BYMONTHDAY" in a.b ? d = a.b.BYMONTHDAY : d = [b.Y];
    else if ("BYMONTHDAY" in a.b) h = [b.month], d = a.b.BYMONTHDAY;
    else if ("BYYEARDAY" in a.b) r = a.b.BYYEARDAY;
    else if ("BYWEEKNO" in a.b) {
      var s = a.b.BYWEEKNO;
      if ("BYDAY" in a.b) for (var l =
      a.b.BYDAY, q = [], u = 0; u < l.length; ++u) if (0 === l[u].Oh) for (e = 0; e < s.length; ++e) q.push(new n4(s[e], l[u].Ln));
      else
      for (e = 0; e < s.length; ++e) {
        if (s[e] === l[u].Oh) {
          q.push(l[u]);
          break
        }
      } else
      for (l = b.Jb(), q = [], e = 0; e < s.length; ++e) q.push(new n4(s[e], l))
    } else "BYDAY" in a.b ? (h = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], q = a.b.BYDAY) : (h = [b.month], d = [b.Y]);
    if (r) if (m4(r)) {
      if (1 !== r.length) return n;
      h = -1 == r[0] ? "on the last day of the year" : t + (-r[0]).toString() + " days before the end of the year"
    } else h = 1 !== r.length ? "on days " + i4(r) + " of the year" : "on day " + r[0].toString() + " of the year";
    else if (d) if (m4(d)) {
      if (1 !== d.length) return n; - 1 == d[0] ? h = "on the last day of " + j4(h) : (h = j4(h), h = t + (-d[0]).toString() + " days before the end of " + h)
    } else 1 === d.length ? 1 === h.length ? h = "on " + AI[h[0]] + " " + d[0].toString() : (h = j4(h), h = "on day " + d[0].toString() + " of " + h) : (h = j4(h), h = "on days " + i4(d) + " of " + h);
    else if (q) {
      d = uva(q, h ? 5 : 53);
      if (!d) return n;
      if (h) if (0 > d.Qc[0]) - 1 !== d.Qc[0] ? (e = h4(d.od), h = j4(h), h = "on " + e + ", " + (-d.Qc[0]).toString() + " weeks before the end of " + h) : (d = h4(d.od), h = j4(h), h = "on the last " + d + " in " + h);
      else if (d.ow) d = h4(d.od), h = j4(h), h = "on every " + d + " in " + h;
      else if (1 !== d.Qc.length) e = h4(d.od), h = j4(h), h = "on " + e + " of weeks " + i4(d.Qc) + " in " + h;
      else {
        switch (d.Qc[0]) {
        case 1:
          e = Zsa;
          break;
        case 2:
          e = Ysa;
          break;
        case 3:
          e = Xsa;
          break;
        case 4:
          e = Wsa;
          break;
        case 5:
          e = Vsa;
          break;
        default:
          return n
        }
        h = e(h4(d.od), j4(h))
      } else h = 0 > d.Qc[0] ? -1 !== d.Qc[0] ? "on " + h4(d.od) + ", " + (-d.Qc[0]).toString() + " weeks before the end of the year" : "on the last " + h4(d.od) + " of the year" : d.ow ? "on every " + h4(d.od) + " of the year" : 1 !== d.Qc.length ? "on " + h4(d.od) + " of weeks " + i4(d.Qc) + " of the year" : "on " + h4(d.od) + " of week " + d.Qc[0].toString() + " of the year"
    } else
    return n
  }
  if ("UNTIL" in a.b) a = "until " + c.Lc(a.b.UNTIL, p);
  else if ("COUNT" in a.b) {
    a = a.b.COUNT;
    if (1 == a) return "Once";
    a = t + a + " times"
  } else a = "&#32;";
  b instanceof Qg ? (b = c.ob(b), f = t + f + " at " + b + " " + h + " " + a) : f = t + f + " " + h + ", " + a;
  f = f.replace(/(?:&nbsp;|&\#32;)+$/, t);
  f = f.replace(/[,\s]+$/, t);
  f = f.replace(/\s*,+/g, ",");
  return f = f.replace(/^[\s,]+/g, t)
}

function o4(a, b, c) {
  if (c && a.ib && a.Xa) return a.Xa;
  try {
    return tva(new k4(a.Ie()), a.b.get().va(), b)
  } catch (d) {
    return n
  }
}
function p4(a, b) {
  var c = Ab(a, b.toUpperCase());
  return 0 > c ? n : c
}
function n4(a, b) {
  this.Oh = a;
  this.Ln = b
}
n4.prototype.Ie = function() {
  return this.Oh ? t + this.Oh + (yE[this.Ln] || n) : yE[this.Ln] || n
};

function q4() {
  return function(a) {
    a = a.split(/,/);
    for (var b = 0; b < a.length; ++b) a[b] = parseInt(a[b], 10);
    return a
  }
}

function r4() {
  return function(a) {
    a = a.split(/,/);
    for (var b = 0; b < a.length; ++b) a[b] = parseInt(a[b], 10);
    return a
  }
}
function m4(a) {
  for (var b = 0; b < a.length; ++b) if (0 > a[b]) return m;
  return p
}

function uva(a, b) {
  for (var c = Array(2 * b + 1), d = c.length; 0 <= --d;) c[d] = 0;
  for (d = 0; d < a.length; ++d) {
    var e = a[d];
    if (e.Oh < -b || e.Oh > b) return n;
    c[e.Oh + b] |= 1 << e.Ln
  }
  for (var f = 0, e = -1, h = 0, d = 0; d < c.length; d++) {
    var l = c[d],
        f = f | l;
    if (d > b) 0 !== (c[d] |= c[b]) && ++h;
    else if (d < b && l) {
      if (0 <= e && e !== d) return n;
      e = d
    }
  }
  if (0 <= e) {
    if (h) return n;
    for (d = 0; d < c.length; d++) if (c[d] && f != c[d]) return n
  }
  h = [];
  for (d = 0; f; ++d, f >>= 1) f & 1 && h.push(d);
  f = p;
  if (0 <= e) e = [e - b];
  else
  for (e = [], f = m, d = b + 1; d < c.length; d++) c[d] ? e.push(d - b) : f = p;
  return {
    od: h,
    Qc: e,
    ow: f
  }
}
var l4 = [];

function vva(a, b, c) {
  for (var d in b) {
    l4.push(a);
    try {
      b[d] = c[a].call(c, d, b[d])
    } finally {
      l4.pop()
    }
  }
}
function s4(a, b, c) {
  l4.push(a);
  try {
    b = c[a].call(c, b)
  } finally {
    l4.pop()
  }
  return b
}
var sva = {
  RRULE: function(a, b) {
    vva("rrulparam", a, this);
    return s4("recur", b, this)
  },
  rrulparam: Na(),
  recur: function(a) {
    a = a.split(/;/);
    for (var b = {}, c = 0; c < a.length; ++c) {
      var d = a[c].match(/^(FREQ|UNTIL|COUNT|INTERVAL|BYSECOND|BYMINUTE|BYHOUR|BYDAY|BYMONTHDAY|BYYEARDAY|BYWEEKDAY|BYWEEKNO|BYMONTH|BYSETPOS|WKST|X-[A-Z0-9\-]+)=([\s\S]*)/i);
      b[d[1].toUpperCase()] = d[2]
    }
    for (var e in b) b[e] = s4(e, b[e], wva);
    return b
  },
  EXDATE: function(a, b) {
    vva("exdtparam", a, this);
    for (var c = b.split(/,/), d = 0; d < c.length; ++d) c[d] = s4("exdtval", c[d], k);
    return c
  },
  exdtparam: function(a, b) {
    if ("VALUE" == a) return b.match(/^DATE-TIME|DATE$/i), b;
    var c = b;
    if (!a.match(/^X-[A-Z0-9\-]+$/i)) {
      l4.push("tzidparam");
      try {
        c = this.tzidparam.call(this, a, c)
      } finally {
        l4.pop()
      }
    }
    return c
  },
  tzidparam: function(a, b) {
    return b.match(/\/?(.*)$/)[1]
  },
  VALUE: function(a) {
    switch (a) {
    case "DATE-TIME":
      return Qg;
    case "DATE":
      return ak;
    case "TIME":
      return Rg;
    case "PERIOD":
      return Uf;
    case "BINARY":
      return String
    }
  },
  ENDMARKER: n
},
    wva = {
    FREQ: function(a) {
      return s4("freq", a, this)
    },
    UNTIL: function(a) {
      return s4("enddate", a, this)
    },
    COUNT: function(a) {
      a.match(/^[0-9]+$/);
      return parseInt(a, 10)
    },
    INTERVAL: function(a) {
      a.match(/^[0-9]+$/);
      return parseInt(a, 10)
    },
    BYSECOND: function(a) {
      return s4("byseclist", a, this)
    },
    BYMINUTE: function(a) {
      return s4("byminlist", a, this)
    },
    BYHOUR: function(a) {
      return s4("byhrlist", a, this)
    },
    BYDAY: function(a) {
      return s4("bywdaylist", a, this)
    },
    BYMONTHDAY: function(a) {
      return s4("bymodaylist", a, this)
    },
    BYYEARDAY: function(a) {
      return s4("byyrdaylist", a, this)
    },
    BYWEEKNO: function(a) {
      return s4("bywknolist", a, this)
    },
    BYMONTH: function(a) {
      return s4("bymolist", a, this)
    },
    BYSETPOS: function(a) {
      return s4("bysplist", a, this)
    },
    WKST: function(a) {
      return s4("weekday", a, this)
    },
    freq: function(a) {
      return p4(n2, a)
    },
    enddate: function(a) {
      var b = a.indexOf("Z");
      return qz(0 > b ? a : a.substring(0, b))
    },
    byseclist: r4(),
    byminlist: r4(),
    byhrlist: r4(),
    bywdaylist: function(a) {
      a = a.split(/,/);
      for (var b = 0; b < a.length; ++b) {
        var c = a[b].match(/^([+\-]?\d\d?)?(SU|MO|TU|WE|TH|FR|SA)$/i),
            d = p4(yE, c[2]) || 0;
        a[b] = new n4(c[1] ? parseInt(c[1], 10) : 0, d)
      }
      return a
    },
    weekday: function(a) {
      return p4(yE, a)
    },
    bymodaylist: q4(),
    byyrdaylist: q4(),
    bywknolist: q4(),
    bymolist: q4(),
    bysplist: q4(),
    ENDMARKER: n
    };

function R2(a, b, c) {
  Y.call(this);
  this.F = c || 7;
  this.B = a;
  this.C = b || new s2(0);
  this.A = n
}
H(R2, Y);
B = R2.prototype;
B.L = function() {
  this.o && (this.o.aa(), this.o = n, this.ra.aa(), this.ra = n);
  R2.J.L.call(this)
};
B.rb = function(a) {
  return "input" == a.nodeName.toLowerCase()
};
B.Ya = function(a) {
  this.Nb = a;
  this.Nb.setAttribute("autocomplete", "off");
  xva(this);
  R2.J.Ya.call(this, a)
};
B.ia = function() {
  this.Nb = this.b.createElement("input");
  this.Nb.setAttribute("autocomplete", "off");
  this.V = this.Nb;
  xva(this)
};

function xva(a) {
  var b = a.b.U("div", {
    "class": "dpi-popup",
    style: "top:0;display:none"
  }),
      c = a.B,
      d = K1(c),
      d = new Ss(b, d, a.C, E(a.b.G, a.b), a.getId(), k, k, a.F),
      c = uk(c),
      e = new OS;
  e.rd(sk(c));
  a.b.appendChild(a.b.Sa().body, b);
  a.o = new OA(d, c, e, p);
  a.ra = new kx(b, new RH(a.Nb, 5));
  gx(a.ra, m);
  hx(a.ra);
  a.ra.setVisible(p)
}
B.$ = function() {
  R2.J.$.call(this);
  var a = Z(this),
      b = this.Nb;
  a.I(this.o, "N", this.wT);
  a.I(b, "focus", this.yD);
  a.I(b, "click", this.yD);
  a.I(b, "blur", this.xT);
  a.I(b, "keydown", this.zT);
  a.I(b, v, this.yT)
};
B.yD = function() {
  var a = u1(v1(Jd(this.B, 3)), this.Nb.value);
  a && this.o.selection.rd(a);
  this.o.show();
  this.ra.setVisible(m)
};
B.xT = function(a) {
  this.ra.Da() && (Si(this.o.Gc().G(), a.target) || this.ra.setVisible(p));
  t4(this)
};
B.wT = function() {
  yva(this);
  this.ra.setVisible(p)
};

function yva(a) {
  var b = a.o.selection.first;
  if (b) {
    var c = K1(a.B);
    a.Nb.value = c.Ec(b);
    t4(a)
  }
}
B.zT = function(a) {
  if (this.ra.Da()) {
    var b = a.keyCode;
    if (38 == b || 40 == b) {
      if (a = this.o.selection.first) this.o.selection.rd(Mg(a, 38 == b ? -1 : 1)), yva(this)
    } else 13 == b && (this.ra.setVisible(p), a.preventDefault())
  }
};
B.yT = function() {
  t4(this)
};

function t4(a) {
  var b = a.Nb.value;
  a.A != b && (a.P(v), a.A = b)
};

function u4(a, b, c, d, e, f) {
  Y.call(this);
  this.B = a;
  this.K = b;
  this.H = e || n;
  this.C = f || "ep-rec";
  this.A = [new v4(a, b, c), new w4(a, b, c), new x4(a, b, c), new y4(a, b, c), new z4(a, b, c, d), new A4(a, b, c), new B4(a, b, c)]
}
H(u4, Y);
B = u4.prototype;
B.Ip = n;
B.ia = function() {
  var a = this.b,
      b = a.U("table", this.C);
  Dj(b, "presentation");
  this.V = b;
  if (!this.Ip && !o4(this.B, wk(xk(this.K)))) {
    var b = a.U("li", k, "Click Cancel to keep current rule."),
        c = a.U("li", k, "Edit rule and click Done to override current rule.");
    this.Ip = a.U("div", this.C + "-warning", ["This recurrence rule cannot be edited in Google Calendar.", a.U("ul", k, [b, c])])
  }
  this.H && (this.F = a.U("tbody", n, a.U("tr", n, a.U("th"), a.U("td", this.C + "-buttons-padding", this.H))))
};

function zva(a) {
  for (var b = a.b, c = a.A, d = [], e = 0; e < c.length; e++) {
    var f = c[e].getTitle();
    d[e] = b.U("option", {
      value: e,
      selected: a.o == c[e] ? "selected" : t,
      title: f
    }, f)
  }
  c = a.oa("frequency");
  a = a.o.getTitle();
  d = b.U("select", {
    id: c,
    title: "Repeats " + a + "\n    "
  }, d);
  return b.U("tbody", k, b.U("tr", k, b.U("th", k, "Repeats:"), b.U("td", k, d)))
}
B.OL = function(a) {
  C4(this, this.A[parseInt(a.target.value, 10)]);
  this.o.vj(this.B);
  (a = this.fa("frequency")) && a.focus && ZB(a)
};

function Ava(a) {
  var b = n;
  if (a.o && a.o.Kh(a.B)) b = a.o;
  else
  for (var c = 0; c < a.A.length; c++) if (a.A[c].Kh(a.B)) {
    b = a.A[c];
    break
  }
  return b
}
function C4(a, b) {
  if (!a.o || !a.o.xa || b != a.o) {
    a.o && a.removeChild(a.o, m);
    a.o = b;
    Yd(Z(a));
    var c = a.G(),
        d = a.b;
    d.Rj(c);
    a.Ip && (d = d.U("tr", k, d.U("td", {
      colspan: 2
    }, a.Ip)), c.appendChild(d));
    c.appendChild(zva(a));
    a.ha(a.o, m);
    a.F && c.appendChild(a.F);
    c = Z(a);
    c.I(a.B, v, a.LL);
    d = a.fa("frequency");
    c.I(d, v, a.OL)
  }
}
B.LL = function() {
  C4(this, Ava(this))
};
B.$ = function() {
  u4.J.$.call(this);
  C4(this, Ava(this))
};
B.Na = function() {
  u4.J.Na.call(this);
  for (var a = 0; a < this.A.length; a++) this.A[a].aa()
};

function D4(a, b, c, d, e) {
  Y.call(this);
  this.o = a;
  this.A = c;
  this.K = b;
  this.H = d;
  this.B = e || "ep-rec";
  this.C = S(c)
}
H(D4, Y);
D4.prototype.getTitle = w("K");
D4.prototype.ia = function() {
  this.V = this.b.createElement("tbody")
};
D4.prototype.Pm = function() {
  return []
};
D4.prototype.Qf = function() {
  var a = Z(this);
  a.I(this.o, v, this.KQ);
  var b = this.fa("rstart"),
      c = new s2(this.C.hc()),
      d = new R2(this.A, c, this.C.Bf());
  this.ha(d, p);
  Px(d, b);
  a.I(d, v, this.NQ);
  b = this.fa("endson_never");
  a.I(b, "click", this.qr);
  b = this.fa("endson_count");
  a.I(b, "click", this.qr);
  d = this.fa("endson_count_input");
  a.I(d, "click", E(this.lC, this, b));
  a.I(d, v, this.LQ);
  b = this.fa("endson_until");
  a.I(b, "click", this.qr);
  d = this.fa("endson_until_input");
  c = new R2(this.A, c, this.C.Bf());
  this.ha(c, p);
  Px(c, d);
  a.I(c, v, this.OQ);
  a.I(d, "click", E(this.lC, this, b))
};

function Bva(a) {
  var b = a.b,
      c = a.Pm(),
      d = yk(a.A);
  c.push(Cva(a, a.H, a.o.b.get()));
  c.push(Dva(a));
  c.push(Eva(a, o4(a.o, d)));
  d = b.Sa().activeElement;
  b.Rj(a.G());
  for (var e = 0; e < c.length; e++) c[e] && a.G().appendChild(c[e]);
  d && d.id && b.G(d.id).focus()
}

function E4(a, b, c, d) {
  for (var e = a.b, f = [], h = 1; 30 >= h; h++) f[h] = e.U("option", {
    value: h,
    selected: h == b ? "selected" : t
  }, String(h));
  a = e.U("select", {
    id: a.oa("interval"),
    title: d(b)
  }, f);
  return e.U("tr", k, e.U("th", k, "Repeat every:"), e.U("td", k, a, e.U("label", k, c)))
}
var F4 = new V('<span class="${class}"><input id="${id}" name="${name}" type="${type}" ${checked} aria-label="${ariaLabel}" title="${title}"/><label for="${id}" title="${title}">${label}</label></span>');

function Cva(a, b, c) {
  var d = a.b,
      e = K1(a.A).Ec(c);
  c = Fva(a, c);
  var e = {
    id: a.oa("rstart"),
    size: "10",
    value: e,
    disabled: b ? t : "true"
  },
      f = d.U("input", e),
      e = a.oa("rstart-label");
  Ej(f, "labelledby", e);
  f = d.U("td", k, f);
  c && d.append(f, d.U("span", a.B + "-altdate", c));
  return d.U("tr", b ? k : {
    tabIndex: 0
  }, d.U("th", {
    id: e
  }, "Starts on:"), f)
}
function Fva(a, b) {
  if (!b) return n;
  var c = yk(a.A);
  return c.Qw ? c.Qw(b.va()) : n
}

function Dva(a) {
  var b = a.b,
      c = a.o.mb().get() || t,
      d = K1(a.A),
      e = a.o.F.get(),
      d = e ? d.Ec(e) : t,
      f = Fva(a, e),
      e = jm(F4, {
      type: "radio",
      "class": a.B + "-ends-opt",
      id: a.oa("endson_never"),
      name: "endson",
      label: "Never",
      checked: c || d ? t : "checked",
      title: "Ends never",
      ariaLabel: "Ends never"
    }),
      h = '<input id="' + a.oa("endson_count_input") + '" size=3 value="' + c + '"' + (c ? t : " disabled") + ' title="Occurrences">',
      c = jm(F4, {
      type: "radio",
      "class": a.B + "-ends-opt",
      id: a.oa("endson_count"),
      name: "endson",
      label: "After " + h + " occurrences",
      checked: c ? "checked" : t,
      title: "Ends after a number of occurrences",
      ariaLabel: "Ends after a number of occurrences"
    }),
      h = '<input id="' + a.oa("endson_until_input") + '" size=10 value="' + d + '"' + (d ? t : " disabled") + ' title="Specified date">',
      l = '<span class="' + (a.B + "-altdate") + '">' + f + "</span>",
      f = f ? "On " + h + " " + l : "On " + h,
      d = jm(F4, {
      type: "radio",
      "class": a.B + "-ends-opt",
      id: a.oa("endson_until"),
      name: "endson",
      label: f,
      checked: d ? "checked" : t,
      title: "Ends on a specified date",
      ariaLabel: "Ends on a specified date"
    });
  return b.U("tr", k, b.U("th", a.B + "-ends-th", "Ends:"), b.U("td", {
    innerHTML: e + c + d
  }))
}
function Eva(a, b) {
  var c = a.b;
  return c.U("tr", {
    tabIndex: 0,
    id: a.oa("recsummary")
  }, c.U("th", k, "Summary:"), c.U("td", a.B + "-summary", b))
}
B = D4.prototype;
B.ks = function(a) {
  this.o.B.set(parseInt(a.target.value, 10))
};
B.NQ = function() {
  var a = this.fa("rstart"),
      b = u1(v1(Jd(this.A, 3)), a.value);
  if (b) {
    var a = this.o,
        c = b,
        d = a.b.get();
    d instanceof Qg && (b = Gg(b), b.hour = d.hour, b.minute = d.minute, b.second = d.second, c = b.Ea());
    a.b.set(c);
    this.P("Hb")
  }
};
B.LQ = function(a) {
  a = parseInt(a.target.value, 10);
  0 < a && this.o.mb().set(a)
};
B.OQ = function() {
  var a = this.fa("endson_until_input");
  if (a = u1(v1(Jd(this.A, 3)), a.value)) this.o.F.set(a), this.fa("endson_until").checked = m
};
B.lC = function(a, b) {
  b.preventDefault();
  a.checked || (a.checked = m, this.qr())
};
B.qr = function() {
  this.o.Eb();
  var a = this.o.mb(),
      b = this.o.F;
  this.fa("endson_never").checked ? (b.set(n), a.set(0)) : this.fa("endson_count").checked ? (b.set(n), a.get() || a.set(this.Aj())) : this.fa("endson_until").checked && (b.get() || b.set(this.Bj()), a.set(0));
  this.o.xb()
};
B.KQ = function() {
  pe(function() {
    Yd(Z(this));
    this.xa && (Bva(this), this.Qf())
  }, 0, this)
};
B.$ = function() {
  D4.J.$.call(this);
  Bva(this);
  this.Qf()
};

function v4(a, b, c) {
  D4.call(this, a, "Daily", b, c)
}
H(v4, D4);
B = v4.prototype;
B.Kh = function(a) {
  return "DAILY" == a.C.get()
};
B.vj = function(a) {
  a.clear("DAILY")
};
B.Pm = function() {
  return [E4(this, this.o.B.get(), "days", hta)]
};
B.Qf = function() {
  v4.J.Qf.call(this);
  var a = Z(this),
      b = this.fa("interval");
  Xd(a, b, v, this.ks, p, this)
};
B.Aj = y(5);
B.Bj = function() {
  var a = Gg(this.o.b.get());
  a.Y += 5 * this.o.B.get();
  return a.va()
};

function w4(a, b, c) {
  D4.call(this, a, "Every weekday (Monday to Friday)", b, c)
}
H(w4, D4);
w4.prototype.Kh = function(a) {
  return "WEEKLY" == a.C.get() && 1 == a.B.get() && ID(a.A.get(), Ksa)
};
w4.prototype.vj = function(a) {
  a.Eb();
  a.clear("WEEKLY");
  a.A.set(Ksa);
  a.xb()
};
w4.prototype.Aj = y(35);
w4.prototype.Bj = function() {
  var a = Gg(this.o.b.get());
  a.Y += 35 * this.o.B.get();
  return a.va()
};

function x4(a, b, c) {
  D4.call(this, a, "Every Monday, Wednesday, and Friday", b, c)
}
H(x4, D4);
x4.prototype.Kh = function(a) {
  return "WEEKLY" == a.C.get() && 1 == a.B.get() && ID(a.A.get(), Jsa)
};
x4.prototype.vj = function(a) {
  a.Eb();
  a.clear("WEEKLY");
  a.A.set(Jsa);
  a.xb()
};
x4.prototype.Aj = y(35);
x4.prototype.Bj = function() {
  var a = Gg(this.o.b.get());
  a.Y += 35 * this.o.B.get();
  return a.va()
};

function y4(a, b, c) {
  D4.call(this, a, "Every Tuesday, and Thursday", b, c)
}
H(y4, D4);
y4.prototype.Kh = function(a) {
  return "WEEKLY" == a.C.get() && 1 == a.B.get() && ID(a.A.get(), Isa)
};
y4.prototype.vj = function(a) {
  a.Eb();
  a.clear("WEEKLY");
  a.A.set(Isa);
  this.o.xb()
};
y4.prototype.Aj = y(35);
y4.prototype.Bj = function() {
  var a = Gg(this.o.b.get());
  a.Y += 35 * this.o.B.get();
  return a.va()
};

function z4(a, b, c, d) {
  D4.call(this, a, "Weekly", b, c);
  this.F = d
}
H(z4, D4);
B = z4.prototype;
B.Kh = function(a) {
  return "WEEKLY" == a.C.get()
};
B.vj = function(a) {
  a.clear("WEEKLY");
  var b = this.F.Fa() ? this.F.Fa().Jb() : a.b.get().Jb();
  a.A.set([wE(b)])
};
B.Pm = function() {
  var a = E4(this, this.o.B.get(), "weeks", gta),
      b, c = this.o.A.get();
  b = this.b;
  for (var d = [{
    name: "SU",
    label: p2[0],
    title: o2[0]
  }, {
    name: "MO",
    label: p2[1],
    title: o2[1]
  }, {
    name: "TU",
    label: p2[2],
    title: o2[2]
  }, {
    name: "WE",
    label: p2[3],
    title: o2[3]
  }, {
    name: "TH",
    label: p2[4],
    title: o2[4]
  }, {
    name: "FR",
    label: p2[5],
    title: o2[5]
  }, {
    name: "SA",
    label: p2[6],
    title: o2[6]
  }], e = this.C.hc(), f = [], h = 0; h < d.length; h++) {
    var l = h - e,
        q = Jb(c, d[h].name);
    f[(l + d.length) % d.length] = jm(F4, {
      type: "checkbox",
      "class": this.B + "-dow",
      id: this.oa("dow" + h),
      label: d[h].label,
      name: d[h].name,
      checked: q ? "checked" : t,
      title: d[h].title,
      ariaLabel: "Repeat on " + d[h].title
    })
  }
  c = b.U("div", {
    innerHTML: f.join(t)
  });
  b = b.U("tr", k, b.U("th", k, "Repeat on:"), b.U("td", {
    id: this.oa("checkboxes")
  }, c));
  return [a, b]
};
B.Qf = function() {
  z4.J.Qf.call(this);
  var a = Z(this),
      b = this.fa("interval");
  Xd(a, b, v, this.ks, p, this);
  b = this.fa("checkboxes");
  Xd(a, b, "click", this.nX, p, this)
};
B.nX = function() {
  for (var a = [], b = Pt(this.b, "input", k, this.fa("checkboxes")), c = 0; c < b.length; c++) b[c].checked && a.push(b[c].name);
  this.o.A.set(a)
};
B.Aj = y(35);
B.Bj = function() {
  var a = Gg(this.o.b.get());
  a.Y += 35 * this.o.B.get();
  return a.va()
};

function A4(a, b, c) {
  D4.call(this, a, "Monthly", b, c)
}
H(A4, D4);
B = A4.prototype;
B.Pm = function() {
  var a = this.o.A.get()[0] instanceof xE,
      b = E4(this, this.o.B.get(), "months", fta),
      c;
  c = this.b;
  var d = jm(F4, {
    type: "radio",
    "class": t,
    id: this.oa("dowrepeat"),
    label: "day of the week",
    name: "repeatby",
    checked: a ? "checked" : t,
    title: "Repeat by day of the week",
    ariaLabel: "Repeat by day of the week"
  }),
      a = !a,
      a = jm(F4, {
      type: "radio",
      "class": t,
      id: this.oa("domrepeat"),
      label: "day of the month",
      name: "repeatby",
      checked: a ? "checked" : t,
      title: "Repeat by day of the month",
      ariaLabel: "Repeat by day of the month"
    });
  c =
  c.U("tr", k, c.U("th", k, "Repeat by:"), c.U("td", {
    innerHTML: a + d
  }));
  return [b, c]
};
B.Kh = function(a) {
  return "MONTHLY" == a.C.get()
};
B.vj = function(a) {
  a.clear("MONTHLY")
};
B.Qf = function() {
  A4.J.Qf.call(this);
  var a = Z(this),
      b = this.fa("interval");
  a.I(b, v, this.ks);
  b = this.fa("domrepeat");
  a.I(b, "click", E(this.nF, this, p));
  b = this.fa("dowrepeat");
  a.I(b, "click", E(this.nF, this, m))
};
B.nF = function(a) {
  a ? (a = this.o.b.get(), this.o.A.set([zE(a)])) : this.o.A.set([])
};
B.Aj = y(35);
B.Bj = function() {
  var a = Gg(this.o.b.get());
  a.month += 35 * this.o.B.get();
  return a.va()
};

function B4(a, b, c) {
  D4.call(this, a, "Yearly", b, c)
}
H(B4, D4);
B = B4.prototype;
B.Kh = function(a) {
  return "YEARLY" == a.C.get()
};
B.vj = function(a) {
  a.clear("YEARLY")
};
B.Pm = function() {
  return [E4(this, this.o.B.get(), "years", eta)]
};
B.Qf = function() {
  B4.J.Qf.call(this);
  var a = Z(this),
      b = this.fa("interval");
  a.I(b, v, this.ks)
};
B.Aj = y(5);
B.Bj = function() {
  var a = Gg(this.o.b.get());
  a.year += 5 * this.o.B.get();
  return a.va()
};

function G4(a, b, c, d, e, f) {
  Y.call(this);
  this.o = b;
  this.H = a;
  this.ka = c;
  this.C = f || "ep-recl";
  this.K = d;
  this.A = e
}
H(G4, Y);
B = G4.prototype;
B.Ga = n;
B.Em = n;
B.Ps = m;
B.Dm = n;
B.ia = function() {
  var a = this.b.U("div", this.C);
  this.V = a;
  a.innerHTML = jm(Gva, {
    id: this.oa(t),
    prefix: this.C
  })
};
var Gva = new V('<input id="${id}repeatcheckbox" type="checkbox" class="checkbox"><label class="${prefix}-label" for="${id}repeatcheckbox" id="${id}repeatlabel"></label><span class="${prefix}-disabled ${prefix}-disabled-message" id="${id}repeatdisabled">A repeated event cannot start and end in different time zones</span><span class="${prefix}-summary" id="${id}repeatsummary"></span><a href="javascript:void(0)" id="${id}editlink" class="lk">Edit</a><span id="${id}unsupportedwarning" class="${prefix}-warning" style="display:none">This event has a recurrence rule that cannot be edited in Google Calendar</span>');

function H4(a) {
  var b = a.o,
      c = b.D.get(),
      d = b.hb() && zo(a.H);
  U(a.B, d);
  U(a.O, d);
  var e = N2(a.K.get()),
      e = !(!a.A || !n1(a.A)) && !e;
  U(a.wa, e && d);
  a.B.disabled = e;
  kn(a.O, a.C + "-disabled", e);
  a.B.checked = c;
  a.O.innerHTML = c ? "Repeat:&nbsp;" : "Repeat...";
  U(a.Z, c);
  b = o4(b, wk(xk(a.H)), m);
  a.Z.innerHTML = b ? om(b) : "Unknown";
  U(a.ya, c && !b);
  U(a.W, c && d)
}
B = G4.prototype;
B.cO = function() {
  H4(this)
};
B.bO = function() {
  Hva(this)
};
B.EB = function() {
  H4(this)
};
B.dO = function() {
  this.B.checked ? (this.A && this.A.b(n), this.Ps ? Hva(this) : this.o.D.set(m)) : (this.o.D.set(p), this.Ps = p)
};

function Hva(a) {
  a.F = a.o.clone();
  a.F.D.set(m);
  a.Ga = new tK(a.C + "-dialog");
  a.Ga.Vd = m;
  a.Ga.setTitle("Repeat");
  vK(a.Ga, '<div id="' + a.oa("editordialog") + '"></div>');
  var b = Z(a);
  Lu(b, a.Ga, "afterhide", a.xJ, k);
  a.Dm = Hw(document);
  a.Ga.setVisible(m);
  var c = a.b.U("div"),
      d = Oy.M(),
      b = new Ky("Done", d),
      d = new Ky("Cancel", d);
  a.Ga.ha(b);
  a.Ga.ha(d);
  b.render(c);
  d.render(c);
  a.Em = new u4(a.F, a.H, a.ka, a.K, c);
  a.Em.render(a.fa("editordialog"));
  a.Ga.Ua();
  a.Ga.G().focus();
  c = Z(a.Ga);
  Lu(c, b, "action", a.Gz, p, a);
  Lu(c, d, "action", a.Gx, p, a);
  Lu(c, a.Ga, "dialogselect", a.Gz, p, a);
  Xd(c, a.Em, "Hb", a.yJ, p, a)
}
B.yJ = function() {
  this.ea = m
};
B.xJ = function() {
  K(this.Em);
  this.Em = n
};
B.Gz = function(a) {
  if ("cancel" == a.key) this.Gx();
  else {
    this.Ga.setVisible(p);
    a = this.o;
    var b = this.F;
    a.Eb();
    a.C.set(b.C.get());
    a.b.set(b.b.get());
    a.D.set(b.D.get());
    a.$b = b.hb();
    a.F.set(b.F.get());
    a.Z.set(b.mb().get());
    a.B.set(b.B.get());
    a.A.set(b.A.get());
    a.W.set(b.W.get());
    a.O.set(b.O.get());
    a.H.set(b.H.get());
    a.K.set(b.K.get());
    a.Ja.set(b.Ja.get());
    a.xb();
    this.Ps = p;
    this.ea && (this.P("Hb"), this.ea = p);
    Iva(this)
  }
};
B.Gx = function() {
  this.Ga.setVisible(p);
  H4(this);
  Iva(this)
};
B.$ = function() {
  G4.J.$.call(this);
  this.B = this.fa("repeatcheckbox");
  this.O = this.fa("repeatlabel");
  this.wa = this.fa("repeatdisabled");
  this.Z = this.fa("repeatsummary");
  this.W = this.fa("editlink");
  this.ya = this.fa("unsupportedwarning");
  H4(this);
  var a = Z(this);
  a.I(this.o, v, this.cO);
  this.o.hb() && (a.I(this.W, "click", this.bO), a.I(this.B, "click", this.dO));
  this.A && (a.I(this.A, v, this.EB), a.I(this.K, v, this.EB))
};

function Iva(a) {
  a.Dm && a.Dm.focus && (ZB(a.Dm), a.Dm = n)
};

function I4(a, b, c, d, e, f) {
  Y.call(this);
  this.Xa = xua(a, b, c);
  this.C = a;
  this.Ja = S(a);
  this.o = b;
  this.Ha = d || "ep-dp";
  this.F = this.o.K;
  this.B = this.o.hb();
  this.K = e || n;
  this.bb = f;
  Z(this).I(this.o.b, v, this.$K);
  Jva || (Kva = new V(J4("Title", '<div class="${prefix}-input-field" id="${id}title"></div><div class="sseb-explanation">This title will be used for any appointment slot booked from this block.</div>')), Lva = new V('<div class="ep-title" id="${id}title"></div>'), Mva = new V(J4("Time block", '<div class="${prefix}-input" id="${id}whenCell"></div>')), Nva = new V('<div class="ep-drs" id="${id}whenCell"></div>'), Ova = new V(J4("Type:", '<div id="${id}slotOpts"></div>')), Pva = new V('<div class="ep-drs" id="${id}slotOpts"></div>'), Qva = new V(J4("Where", '<div class="${prefix}-input" id="${id}where"></div>')), Rva = new V(J4("Description", '<div class="${prefix}-descript" id="${id}description"></div>')), Jva = m)
}
var Qva, Rva, Kva, Lva, Mva, Nva, Ova, Pva;
H(I4, Y);
var Jva = p;
B = I4.prototype;
B.L = function() {
  I4.J.L.call(this);
  Z(this).b(yo(this.C), "m", this.Wy);
  this.Z && (ad(this.Z), this.Z = n);
  K(this.wa);
  this.H = this.W = this.ya = this.K = this.ka = this.ea = this.A = this.wa = n
};
B.Na = function() {
  I4.J.Na.call(this)
};
B.ia = function() {
  this.B && (this.O = new hB("You must be online to edit appointment slots."), this.ha(this.O));
  this.ya = vP(this.o.O, this.F, 2 == this.F ? "Click to add a title" : "(No title)");
  this.ha(this.ya);
  var a = this.o.Z;
  if (this.B || a.get()) this.W = vP(a, this.F, 2 == this.F ? "Click to add a location" : k), this.ha(this.W);
  a = this.o.ya;
  if (this.B || a.get()) this.H = bua(a, this.F, 2 == this.F ? "Click to add a description" : k, new f3(this.B, 3)), this.ha(this.H);
  if (!this.K) {
    var a = (a = v2(this.C)) ? a.D.clone() : new Ih({}),
        b = new Y;
    this.K =
    new c4(this.C, this.o, a, m, n, n, b)
  }
  this.ha(this.K);
  this.o.D && (this.ea = new G4(this.C, this.o.D, p, this.o.b, n), this.ha(this.ea));
  var a = this.C,
      c = E(this.RG, this),
      b = new wz(this.o.b, new pz(p)),
      d = this.F,
      c = E(Kta, n, a, c, b.o, 30, Jta, m, m);
  this.A = dua(a, b, c, d);
  this.ha(this.A);
  a = zo(this.C);
  this.ka = new cL(this.o.cc, this.o.b, this.B, this.bb, a);
  this.ha(this.ka);
  var a = this.oa(t),
      e = {
      id: a
      },
      f = {
      id: a,
      prefix: this.Ha
      },
      c = this.W ? jm(Qva, f) : t,
      h = this.H ? jm(Rva, f) : t,
      l = this.B ? jm(Kva, f) : t,
      b = this.B ? t : jm(Lva, e),
      q = this.B ? jm(Mva, f) : t,
      d = this.B ? t : jm(Nva, e),
      f = this.B ? jm(Ova, f) : t,
      e = this.B ? t : jm(Pva, e),
      c = jm(Sva, {
      element: "table",
      prefix: this.Ha,
      titleHtml: l,
      dateRangeHtml: q,
      slotOptionsHtml: f,
      locationHtml: c,
      descriptionHtml: h
    }),
      b = jm(Tva, {
      titleHtml: b,
      dateRangeHtml: d,
      slotOptionsHtml: e
    }),
      d = this.b.U("div", "sseb-root");
  d.innerHTML = jm(Uva, {
    id: a,
    nonEditHeader: b,
    details: c
  });
  this.V = d
};
B.RG = function() {
  var a = new s2(this.Ja.hc());
  return new R2(this.C, a, this.Ja.Bf())
};
B.$ = function() {
  I4.J.$.call(this);
  if (!this.ya.xa && (this.ya.render(this.fa("title")), this.W && !this.W.xa && this.W.render(this.fa("where")), this.H && !this.H.xa && this.H.render(this.fa("description")), this.A.render(this.fa("whenCell")), en(this.A.G(), "ep-drs goog-inline-block"), this.ea && (this.ea.render(this.fa("whenCell")), en(this.ea.G(), "goog-inline-block")), this.ka.render(this.fa("slotOpts")), this.K.render(this.fa("guestPanel")), this.B)) {
    this.O.render(this.G());
    var a = Z(this),
        b = yo(this.C);
    Xd(a, b, "m", this.Wy, p, this)
  }
  Z(this).I(window, "resize", this.WO)
};
B.$K = function() {
  var a = this.ka;
  a.B = this.o.b;
  a.uk();
  a.Pt()
};
B.Wy = function(a) {
  a.Pa ? this.Z && (ad(this.Z), this.Z = n) : (this.wa || (this.wa = new k2), this.Z = O(this.wa, "resize", E(this.EF, this, p)));
  this.EF(a.Pa)
};
B.EF = function(a) {
  if (this.O) if (iB(this.O, this, a), a) this.O.Ka();
  else {
    var b = this.fa("chrome");
    a = oj(b);
    b = vj(b);
    this.O.show(a.x, a.y, b.width, b.height)
  }
};
B.WO = function() {
  this.xa && J && (document.body.className = document.body.className)
};
var Uva = new V('<div id="${id}chrome"><div>${nonEditHeader}</div><div class=ep-dp><div class=ep-dp-cont><div class=ep-dp-panel><div><div class=ep-dp-guests id="${id}guestPanel"></div><div class=ep-dp-details>${details}</div></div></div></div></div></div>'),
    Tva = new V("${titleHtml}${dateRangeHtml}${slotOptionsHtml}"),
    Sva = new V('<${element} class="${prefix}-dt">${titleHtml}${dateRangeHtml}${slotOptionsHtml}${locationHtml}${descriptionHtml}</${element}>');

function J4(a, b) {
  return ["<tr><th class=${prefix}-dt-th><label>", a, "</label></th><td class=${prefix}-dt-td>", b, "</td></tr>"].join(t)
};

function K4(a, b, c, d, e, f) {
  P.call(this);
  this.B = a;
  this.Pe = b;
  this.D = c;
  this.o = new Q(this);
  this.b = new I4(this.B, this.Pe, e, k, k, f);
  this.b.render(d)
}
H(K4, P);
B = K4.prototype;
B.Pe = n;
B.RV = function(a, b, c) {
  var d = this.Pe,
      e = Vva(d);
  e ? (a.push("scp", e), b()) : (d = Wva(d), jz(p, m, d, F(function(a, b, c) {
    a.push("scp", c);
    b()
  }, a, b), c, "Would you like to change only these appointment slots, all appointment slots in the series, or this and all future appointment slots in the series?", "Only these appointment slots", "All appointment slots in the series", "All following"))
};
B.QV = function(a) {
  var b = this.Pe,
      c = this.D;
  a = PE(b) ? c.b(b, a) : c.o(b, a);
  c = fp();
  c.fb = PE(b) ? "ss_new_appt_from_edit_page" : "ss_edit_appt";
  this.o.I(a, "V", E(this.hM, this, c));
  this.o.I(a, "W", E(this.gM, this));
  this.A = a;
  this.P("Mb");
  a.start()
};
B.hM = function(a) {
  this.P("Lb");
  a.b();
  this.A = n;
  this.aa()
};
B.gM = function() {
  this.P("Kb");
  this.A = n;
  this.aa()
};
B.ZT = function() {
  this.P("Ib");
  this.aa()
};
B.PV = function(a, b, c) {
  a = this.Pe.b;
  a.Fa().ta() < a.Za().ta() ? b() : (b = 0 == ai(vz(this.Pe.b).duration) ? "Sorry, you can't create appointment slots that have the same start and end time." : "Sorry, you can't create a block of appointment slots that ends before it starts.", Ks(new Js, "Your Appointment Block", b, c))
};
B.L = function() {
  this.P("Jb");
  K4.J.L.call(this);
  K(this.o);
  K(this.b);
  K(this.Pe);
  this.Pe = this.b = this.o = n
};
B.LO = function(a, b) {
  var c = Ir(this.B);
  if (this.isDisposed() || this.A) c.Ka(), a();
  else {
    var d = E(function() {
      this.aa();
      c.Ka();
      a()
    }, this);
    I2(this.Pe, d, b)
  }
};
var Xva = new V('<div class="ss-tip-root"><div class="ss-tip-header"><div class="ss-tip-title goog-inline-block">How does this work?</div><div class="ss-tip-dismiss goog-inline-block lk to-disable">Hide instructions</div><div class="ss-tip-learn-more goog-inline-block lk to-disable">Learn more about appointment slots</div></div><div class="ss-tip-section goog-inline-block"><div class="ss-tip-sec-title">1. Create appointment slots</div><div class="ss-tip-sec-body">Pick a block of time you want to offer to others, and choose how many slots to split it up into; don\'t worry, you can always change it later.</div></div><div class="ss-tip-section goog-inline-block"><div class="ss-tip-sec-title">2. Share your appointment page</div><div class="ss-tip-sec-body">This is the link to your public appointment page. Anyone who has this link can book an appointment slot.</div></div><div class="ss-tip-section goog-inline-block"><div class="ss-tip-sec-title">3. Guests book appointment slots</div><div class="ss-tip-sec-body">Booked appointment slots appear right on your calendar as regular events.</div></div></div>');

function Yva(a) {
  zo(a) && NS("http://support.google.com/calendar/bin/answer.py?answer=190998")
}
function Zva(a, b) {
  if (zo(a)) {
    var c = S(a);
    c.set("dismissedSelfschedulerTips", "true");
    c.jb();
    b.aa()
  }
};

function L4(a, b, c, d, e, f) {
  Y.call(this);
  this.K = a;
  this.Z = b;
  this.F = c;
  this.B = f || n;
  this.W = d;
  this.H = e
}
H(L4, Y);

function $va(a) {
  var b = Oy.M();
  a.o = new Ky(t, b);
  a.o.vb("Back to calendar");
  a.ha(a.o);
  a.H && (a.A = new Ky("Save", b), a.ha(a.A), a.wf = new Ky(a.W ? "Discard changes" : "Discard", b), a.ha(a.wf), a.B && (a.C = new Ky("Delete", b), a.ha(a.C)))
}
L4.prototype.ia = function() {
  $va(this);
  var a = this.b,
      b = a.U("div", "gc-scdc-root");
  this.V = b;
  Qx(this, function(c) {
    var d = a.U("div", "ep-ea-btn-wrapper ss-btn");
    b.appendChild(d);
    c.render(d)
  });
  this.A && (this.A.G().parentNode.className += " action-btn-wrapper");
  this.o && (this.o.G().parentNode.className += " back-btn")
};
L4.prototype.$ = function() {
  L4.J.$.call(this);
  var a = Z(this);
  this.o ? (this.o.G().id = "ss_back_btn", a.I(this.o, "action", this.F)) : a.I(this.fa("backLink"), "click", this.F);
  if (this.H) {
    this.A.G().id = "ss_save_btn";
    this.wf.G().id = "ss_cncl_btn";
    a.I(this.A, "action", this.Z);
    a.I(this.wf, "action", this.F);
    this.B && a.I(this.C, "action", this.B);
    var a = Z(this),
        b = yo(this.K);
    Xd(a, b, "m", this.O, p, this)
  }
};
L4.prototype.O = function(a) {
  a = a.Pa;
  this.A && this.A.Ta(a);
  this.C && this.C.Ta(a)
};
var M4 = n,
    N4 = n;

function nL(a) {
  var b = F(awa, a);
  a = R();
  Rq(a).b(Ba, function() {
    Lp(Jp.M(), "a", b)
  })
}
function bwa(a, b, c) {
  var d = N4,
      d = E(d.ZT, d),
      e = new E1,
      e = PE(c) ? k : F(e.b, c.getId());
  a = new L4(a, cwa, d, !PE(c), c.hb(), e);
  a.render(b);
  M4.push(a)
}

function dwa(a, b) {
  var c = Ze(Ye.M()),
      d = Ze(Ye.M()),
      e = b.A.o,
      f = b.A.b,
      h = R(),
      l = v2(h),
      e = new gL(l, e, function(a) {
      return a.hb()
    }),
      l = O4(f.get()),
      q = cQ(l),
      l = jm(ewa, {
      containerId: c
    }),
      q = jm(fwa, {
      linkId: d,
      url: I(q)
    });
  a.innerHTML = jm(gwa, {
    calSelectorHtml: l,
    publishHtml: q
  });
  e.render(T(c));
  O(f, v, function(a) {
    a = a.target.get();
    a = O4(a);
    a = cQ(a);
    var b = T(d);
    b.href = a;
    b.innerHTML = I(a)
  });
  O(yo(h), "m", F(hwa, e))
}
function hwa(a, b) {
  a.Ta(b.Pa)
}

function awa(a, b) {
  var c = Ze(Ye.M()),
      d = jm(iwa, {
      id: c
    });
  T("coverinner").innerHTML = d;
  var d = R(),
      e;
  !a.hb() || Yg(S(d), "dismissedSelfschedulerTips", "false") ? e = n : (e = new h2(Xva.toString(), "ss-tip"), Dsa(e, "ss-tip-learn-more", F(Yva, d)), Dsa(e, "ss-tip-dismiss", F(Zva, d, e)));
  e && e.render(T(c + "tips"));
  e = T(c + "container");
  a.hb() && dwa(e, a);
  var f = new kL(new zf(d, new kr)),
      h = O4(a.A.b.get()),
      l = a.hb() ? k : a.b.get().start.va().toString(),
      h = cQ(h, l);
  N4 = e = new K4(d, a, f, e, ZF, h);
  f = e.b.K;
  h = e.b.Xa;
  l = new P4(ZF, a.b, m, 0, k, a.D, a.F, h, k);
  Rh(d).b ? Q4() : O(f, "Fb", Q4);
  O(f, "Gb", F(jwa, a, l, f, h, k));
  O(f, "Db", F(kwa, a, F(lwa, a)));
  M4 = [];
  bwa(d, T(c + "topControls"), a);
  bwa(d, T(c + "bottomControls"), a);
  Zc(e, "Mb", mwa);
  Zc(e, "Ib", nwa);
  Zc(e, "Jb", owa);
  c = Jp.M();
  e = E(e.LO, e);
  c.Xd = e || n;
  Ir(d).Ka();
  b()
}
function pwa() {
  var a = Jp.M();
  a.Xd = n;
  Kp(a, "g")
}
function cwa() {
  var a = N4,
      b = a.Pe;
  if (PE(b) || b.Ba() || 6 == b.Sc) {
    var c = new D2(a);
    E2(c, a.PV);
    E2(c, a.RV);
    E2(c, F(xta, a.B, b, FP, k));
    c.execute([], E(a.QV, a), D)
  } else a.P("Ib"), a.aa()
}

function mwa() {
  var a = N4;
  O(a, "Lb", qwa);
  O(a, "Kb", rwa);
  pwa();
  Ir(R()).b("(Still saving changes...)")
}
function qwa(a) {
  var b = a.target;
  a = b.Pe;
  b = b.A.ll();
  lL(a, b)
}

function lL(a, b) {
  var c = a.A.o;
  Mj.M().Ke(c.get(), m);
  c = R();
  if (PE(a)) {
    var d = wk(xk(c)),
        e = a.b.get().start,
        c = d.Lc(e),
        d = d.ob(e),
        f = I(a.O.get());
    if (b && b.length && b[0] && 1 < b[0].length) var h = b[0][1];
    e = R();
    if (h) {
      var l = Ze(Ye.M()),
          f = '<a href="javascript:void(0);" id="' + l + '">' + f + "</a>",
          q = F(swa, l);
      Ir(e).o("Created appointment slots " + f + " on " + c + " at " + d + ".", k, q);
      O(T(l), "click", F(eQ, h))
    } else Ir(e).b("Created appointment slots " + f + " on " + c + " at " + d + ".")
  } else Ir(c).b("Your appointment slots were updated.");
  Kt()
}

function swa(a) {
  Tw(T(a))
}
function eQ(a) {
  var b = R();
  Rq(b).b(Ba, function() {
    var c;
    c = new twa(b);
    c = new R4(c, a, k);
    Zc(c, "V", uwa);
    c.start()
  })
}
function uwa(a) {
  nL(a.target.Ee())
}
function rwa() {
  Ir(R()).b("Failed to save appointment slots")
}
function nwa() {
  pwa()
}
function owa() {
  Bb(M4, K);
  $c(N4, "Mb", mwa);
  $c(N4, "Ib", nwa);
  $c(N4, "Jb", owa);
  $c(yo(R()), "m", hwa);
  N4 = M4 = n
}
function O4(a) {
  a = Hu(ig.M(), a).uid;
  return ci.M().get(a).Z
}
var iwa = new V('<div id="${id}topControls" class="eac-nav"></div><div id="${id}tips" class="eac-tips"></div><div id="${id}container" class="eac-body"></div><div id="${id}bottomControls" class="eac-nav-bot"></div>'),
    gwa = new V('<div class="eac-cal-container">${calSelectorHtml}${publishHtml}</div>'),
    ewa = new V('<div><span style="font-weight:bold">Create appointment slots on calendar: </span><span id="${containerId}"></span></div>'),
    fwa = new V('<div class="eac-ss-publish"><span>This calendar\'s appointment page: <a target="_blank" id="${linkId}" href="${url}" class="eac-ss-url to-disable" to-disable-tabindex="true">${url}</a></span></div>');

function S4(a, b, c) {
  this.name = a;
  this.email = b;
  this.A = c;
  b = a.indexOf("-");
  this.sd = -1 == b ? t : a.substring(0, b)
}
function T4(a, b) {
  return a == b ? 0 : a < b ? -1 : 1
}
S4.prototype.getName = w("name");
S4.prototype.b = function() {
  this.D === k && (this.D = this.name.toLowerCase());
  return this.D
};

function U4() {
  P.call(this);
  this.A = new y3(G3, 100);
  this.o = {}
}
H(U4, P);

function vwa(a, b) {
  var c = T4(a.sd, b.sd);
  return 0 == c ? T4(a.b(), b.b()) : a.sd === t || b.sd != t && 0 < c ? 1 : -1
}
U4.prototype.b = p;
U4.prototype.B = p;
U4.prototype.D = function(a) {
  for (var b = this.A.size(), c = {}, d = a.length, e = 0; e < d; e += 3) {
    var f = a[e],
        h = f.indexOf("-"),
        h = -1 == h ? t : f.substring(0, h);
    c[h] ? c[h]++ : c[h] = 1
  }
  for (e = 0; e < d; e += 3) if (h = a[e + 1], !(h in this.o)) {
    f = a[e];
    f = new S4(f, h, a[e + 2]);
    if (100 < c[f.sd]) {
      var l = f.name.indexOf("-", f.sd.length + 1); - 1 != l && (f.sd = f.name.substring(0, l))
    }
    this.o[h] = f;
    this.A.add(f)
  }
  a = this.A.size();
  c[t] && (a -= c[t]);
  this.B = 10 < a;
  this.b = m;
  c = this.A;
  c.A = this.B ? vwa : n;
  c.o = p;
  this.A.size() > b && this.P("Nb")
};

function G3(a) {
  return !!(a && 1 < a.length)
}
U4.prototype.filter = function(a) {
  return this.A.filter(a)
};
var ZF = new U4;

function V4(a, b, c) {
  this.Nc = a;
  this.D = b;
  this.A = c || 0;
  this.b = [];
  this.o = {}
}
H(V4, uc);

function wwa(a, b, c) {
  this.A = a;
  this.b = b;
  this.o = c
}
V4.prototype.C = function(a, b, c, d) {
  cp(b, c + "_request");
  a = p !== this.Nc(a, d);
  cp(b, c + "_process");
  var e = d.getStatus(),
      f = d.Ki() || t;
  if (200 == e) try {
    if (a && f) {
      var f = f.replace(yf, t),
          h = eval(f);
      cp(b, c + "_eval");
      h instanceof Array && h.length && Ef(D.get(R()), h);
      cp(b, c + "_dispatch")
    }
  } catch (l) {
    g(l)
  }
  this.B(d);
  b.b(c)
};
V4.prototype.B = function(a) {
  a.aa();
  Mb(this.b, a);
  this.b.length || (this.o = {})
};

function xwa(a, b) {
  if (!a.b.length) return b;
  var c = a.o;
  return Cb(b, function(a) {
    return !c[a]
  })
}
V4.prototype.abort = function() {
  for (var a = 0; a < this.b.length; ++a) this.b[a].aa();
  this.b = [];
  this.o = {}
};
V4.prototype.L = function() {
  this.abort()
};

function $F(a) {
  var b = fp();
  Af(R()).send("resources", [], 0, function(c) {
    cp(b, "fetch_resource_request");
    cp(b, "fetch_resource_parse");
    a(c);
    cp(b, "fetch_resource_process");
    b.b("fetch_resource")
  })
};

function P4(a, b, c, d, e, f, h, l, q) {
  Y.call(this);
  this.Sc = lJ(R());
  this.kb = ywa;
  this.o = a;
  this.Td = !! c;
  this.gf = e || t;
  this.Ja = t;
  this.hh = [];
  this.A = {};
  this.wa = {};
  this.Yh = new fy("Filter room");
  this.Xa = b;
  this.O = f;
  (this.K = h) && Z(this).I(h, "h", this.OP);
  a = 10;
  window && window.location && (b = new ff(window.location), b = Number(UG(b, "availability_batch_count")), 0 < b && (a = b));
  (this.F = l || n) && Z(this).I(this.F, "Bb", this.QP);
  this.zb = {};
  this.Ha = q || new V4(E(this.PP, this), ot(), a);
  this.tb = p;
  this.ya = [];
  this.ya.push(O(this.Xa, v, E(this.At, this)));
  this.O && this.ya.push(O(this.O, v, E(this.At, this)));
  this.nb = new tr(this.kb.LP);
  this.Hp = Sd(7)
}
H(P4, Y);
P4.prototype.B = t;
P4.prototype.Uq = m;
P4.prototype.ib = p;
var ywa = {
  sK: "ch-row",
  LP: "ch-cr",
  Wt: "ch",
  Uz: "ch-zippy",
  tK: "ch-zippy-exp",
  vq: "ci",
  rv: "ci-selected",
  rK: "ci-fur",
  mT: "conf-picker"
};
B = P4.prototype;
B.L = function() {
  for (var a = 0; a < this.ya.length; ++a) ad(this.ya[a]);
  window.clearTimeout(this.H);
  K(this.ea);
  K(this.W);
  K(this.C);
  K(this.Yh);
  K(this.Ha);
  P4.J.L.call(this)
};

function zwa() {
  qA(this.Z, E(this.OF, this), E(this.QX, this));
  rA(this.Z, E(this.OF, this), E(this.RX, this), E(this.TX, this))
}
B.$ = function() {
  P4.J.$.call(this);
  var a = this.b,
      b = Z(this),
      c = this.ym();
  Px(this.Yh, c);
  this.bb = new yL(c);
  b.I(this.bb, "input", this.VM);
  b.I(c, "keydown", this.WM);
  this.Z = new lA(this.G());
  qA(this.Z, E(this.RM, this), E(this.lB, this));
  this.Ud();
  c = a.G(this.getId() + "-conflist");
  Awa(this, c, this.o.filter(t), p);
  W4(this);
  b.I(this.o, "Nb", this.mB);
  this.F && b.I(this.F, v, this.mB);
  c = a.G(this.getId() + "-conf-hide-conflicts");
  b.I(c, "click", this.XM);
  this.cc = a.G(this.getId() + "-conf-inst");
  b.I(a.G(this.getId() + "-conf-inst-1"), v, this.nB);
  b.I(a.G(this.getId() + "-conf-inst-15"), v, this.nB);
  if (a = a.G(this.getId() + "-close")) U(a, this.Td), Ku(b, a, jA, this.UM);
  this.tb && this.At();
  this.Hp && Z(this).I(new gy(this.G()), "key", this.fu)
};

function Bwa(a) {
  var b = Oi(a);
  return b ? b.id : a.id
}

function Awa(a, b, c, d) {
  var e = p,
      f = k;
  a.Hp && (e = a.nb.hasFocus()) && (f = Bwa(zr(a.nb)));
  b.innerHTML = Cwa(a, c, d);
  if (a.Hp) {
    var h = a.kb;
    b = Jw(b, function(a) {
      return Ot(a, h.Wt) || Ot(a, h.vq)
    });
    ur(a.nb, b);
    b.length && (b = E(function(a) {
      return Bwa(a) == f
    }, a), F1(a.nb, b, a.Bq), e && a.nb.focus())
  }
}
B.Na = function() {
  P4.J.Na.call(this);
  this.Yh && this.Yh.xa && this.Yh.Na();
  K(this.Z);
  this.Z = n;
  K(this.bb);
  this.bb = n
};
B.At = function() {
  if (this.xa) {
    this.tb = p;
    var a = X4(this);
    this.cc && U(this.cc, a);
    Dwa(this);
    W4(this)
  } else this.tb = m
};

function X4(a) {
  return (a = a.O) ? a.D.get() : p
}
B.XM = function() {
  this.xa && (this.Uq = !! this.b.G(this.getId() + "-conf-hide-conflicts").checked, Y4(this))
};
B.nB = function(a) {
  if (this.xa && (a = 1 == a.target.value, this.ib != a)) {
    if (this.ib = a) for (var b in this.A)(a = this.A[b]) && 1 > a.status && delete this.A[b];
    else this.A = {};
    Y4(this)
  }
};

function Dwa(a) {
  Ewa(a, function(a, c) {
    a.status = 0;
    c && (c.style.backgroundImage = "url(/calendar/images/res_n.gif)")
  })
}

function Z4(a, b, c) {
  if (b) for (var d = 0; d < b.b.length; d++) {
    var e = b.b[d],
        f = a.b.G(a.getId() + "-i" + e);
    c.call(a, e, f)
  }
}
function Ewa(a, b) {
  for (var c in a.A) {
    var d = a.A[c];
    Z4(a, d, function(a, c) {
      b(d, c || n)
    })
  }
}

function Fwa(a, b) {
  var c = $4,
      d = c.A[a];
  d || (d = c.A[a] = new Gwa);
  d.status = b ? 1 : -1;
  Z4(c, d, function(c, d) {
    if (this.hh[c] == a && d) {
      var h = b ? "images/res_a.gif" : "images/res_u.gif",
          h = "url(/calendar/" + h + ")";
      d.style.backgroundImage != h && (d.style.backgroundImage = h);
      h = b || !this.Uq;
      U(d, h);
      this.Hp && !h && d == zr(this.nb) && Ira(this.nb, this.Bq)
    }
  })
}

function W4(a, b) {
  var c = xwa(a.Ha, Hwa(a));
  if (c.length) {
    b || (a.Wb = fp(), a.ka = a.Sc.o(a.Sc.b().eO));
    a.H && window.clearTimeout(a.H);
    var d;
    d = c.length;
    var e = 100;
    10 < d && (e = Math.min(1E3, 100 + 900 * (d - 10) / 40));
    20 < d && C(a.B) && 5 > a.B.length && (e += 100 * (5 - a.B.length));
    X4(a) && (e *= 1.5);
    d = e;
    c = E(a.zu, a, c);
    a.H = window.setTimeout(c, d)
  }
}
B.QP = function() {
  var a = F3(this.F, this.B),
      a = Db(Qb(a, 0, 10), function(a) {
      return a.Od.B
    });
  this.zu(a)
};
B.zu = function(a) {
  delete this.H;
  a = a || Hwa(this);
  if (a.length) {
    var b = this.Ha,
        c = vz(this.Xa),
        d = Iwa(this);
    b.abort();
    b.o = Lc(a);
    for (var e = 0; e < a.length;) {
      for (var f = b.A ? Math.min(a.length, e + b.A) : a.length, h = b, e = new wwa(a.slice(e, f), c, d), l = e.A, q = fp(), r = 10 * Math.floor(l.length / 10), r = "fetch_resource_availability_" + (r + "_" + (r + 9)), s = new nf, u = 0, x = l.length; u < x; ++u) s.add("lefP", l[u]);
      (l = e.o) && s.add("recur", l);
      l = e.b;
      s.add("stim", l.start.Ea());
      s.add("etim", l.end.Ea());
      s.add("ctz", h.D);
      l = new De;
      h.b.push(l);
      O(l, "success", E(h.C, h, e, q, r, l));
      O(l, ["error", "timeout", "abort"], E(h.B, h, l));
      l.send("resavail", "POST", s.toString());
      e = f
    }
  }
};

function Hwa(a) {
  if (0 == a.hh.length) return [];
  for (var b = [], c = {}, d = 0; d < a.hh.length; ++d) {
    var e = a.hh[d],
        f = a.A[e];
    f && f.status || e in c || (c[e] = m, b.push(e))
  }
  return b
}
function Iwa(a) {
  return a.ib ? t : a.O ? a.O.D.get() ? a.O.Ie() : t : a.gf
}
B.rb = y(p);
B.ia = function() {
  var a = this.b.U("div", {
    "class": this.kb.mT
  });
  this.V = a;
  a5.put("pId", this.getId());
  a5.put("hideConflicts", this.Uq ? "checked" : t);
  a5.put("instancesDisplay", X4(this) ? t : "none");
  a.innerHTML = a5.toString()
};
B.VM = function() {
  var a = this.Yh.Ca(),
      b = G3(this.B),
      c = G3(a),
      b = c && this.B != a || !c && b;
  this.B = a;
  b && (a = this.b.G(this.getId() + "-conflist"), 0 != a.scrollTop && (a.scrollTop = 0), Y4(this))
};
B.WM = function(a) {
  a = a.keyCode;
  13 != a && 3 != a || !this.H || (window.clearTimeout(this.H), delete this.H, this.zu())
};
B.mB = function() {
  Y4(this)
};

function Y4(a, b) {
  var c = a.B,
      d = a.b.G(a.getId() + "-conflist");
  a.xa && (Awa(a, d, a.o.filter(c), G3(c)), W4(a, b))
}

function Cwa(a, b, c) {
  var d = [],
      e = t;
  a.hh = [];
  a.Ib = p;
  for (var f in a.A) {
    var h = a.A[f];
    h && (h.b = [])
  }
  f = b.length;
  if (0 < f && a.F && (a.zb = {}, h = F3(a.F, a.B), 0 < h.length)) {
    d.push("<div class=fur>", '<div class="ch ch-fur">', "Frequently Used", Td(R()).isEnabled(60) ? '<div class=rtc-fb>Confidential - <a class=lk target=_blank href="http://goto.google.com/calendardogfoodform">Send Feedback</a></div>' : t, "</div>");
    for (var l = 0, q = 0, r = 0; r < h.length; r++) {
      var s = h[r],
          u = s.Od.B;
      a.zb[u] = m;
      l++;
      if (Jwa(a, u, s.ih, "fr", d, a.kb.rK) && (q++, 5 == q)) break
    }
    q || d.push('<div class="ci ci-fur">None available</div>');
    d.push("</div>")
  }
  for (l = h = 0; l < f; ++l)(r = b[l].Od) ? (q = r.sd || "Other Resources", r = r.email, s = c && 0 != a.wa[q] || !c && 1 == a.wa[q], a.o.B && T4(q, e) && (e = q, d.push('<div class="' + a.kb.sK + '">'), d.push('<div class="' + a.kb.Uz + " ", s ? a.kb.tK : t, '"></div>'), u = a.getId() + h, d.push("<div class=" + a.kb.Wt, " id=" + u + ">", I(q), "</div>"), d.push("</div>"), h++), a.o.B && !s || Jwa(a, r, b[l].ih, "or", d)) : d.push("<div class=cmessage>", b[l].ih, "</div>");
  return d.join(t)
}

function Jwa(a, b, c, d, e, f) {
  var h, l;
  (l = a.A[b]) || (l = a.A[b] = new Gwa);
  switch (l.status) {
  case 1:
    h = "images/res_a.gif";
    break;
  case -1:
    h = "images/res_u.gif";
    break;
  default:
    h = "images/res_n.gif"
  }
  var q = a.hh.length;
  l.b.push(q);
  var r = [a.kb.vq];
  f && r.push(f);
  b == a.Ja && (r.push(a.kb.rv), a.Ib = m);
  b5.put("class", r.join(" "));
  b5.put("pId", a.getId());
  b5.put("type", d);
  b5.put("email", b);
  b5.put("img", h);
  b5.put("index", q);
  b5.put("name", c);
  c = t;
  c = a.K && a.K.contains(b) ? "Remove" : "Add";
  b5.put("action", c);
  l = -1 != l.status || !a.Uq;
  b5.put("display", l ? t : "display:none");
  a.hh.push(b);
  e.push(b5.toString());
  return l
}
function c5(a, b, c) {
  a.Ja && a.Ib && Z4(a, a.A[a.Ja], function(a, b) {
    b && gn(b, this.kb.rv)
  });
  b && c ? (a.Ja = c, a.Ib = m, en(b, a.kb.rv), F1(a.nb, function(a) {
    return a == b
  })) : a.C && a.C.setVisible(p)
}
function Kwa(a, b) {
  var c = b.id.substr(a.getId().length + 2);
  return a.hh[c] || n
}
B.RX = function(a) {
  this.ea || (this.ea = new aq(this.GX, 200, k, this));
  this.W || (this.W = new aq(this.FX, 800, k, this));
  var b = Kwa(this, a);
  this.ea.dh(a, b);
  this.W.cancel()
};
B.FX = function() {
  this.C && this.C.setVisible(p)
};
B.eQ = function() {
  this.W.cancel();
  this.ea.cancel()
};
B.fQ = function() {
  this.W.dh()
};
B.GX = function(a, b) {
  var c = b ? this.o.o[b] : n;
  c.A && c5(this, a, b);
  if (c.A) {
    var d;
    this.C || (d = Ei("div", "conf-info-popup"), d.innerHTML = "<iframe height=200 width=400 frameborder=0></iframe>", this.G().appendChild(d), this.C = new kx(d), this.C.hp = p, Z(this).I(d, "mouseover", this.eQ), Z(this).I(d, "mouseout", this.fQ));
    d = this.C;
    var e = d.G().firstChild;
    e.id = "confInfo" + ib();
    e.src = c.A;
    d.setVisible(m);
    qv(a, 4, d.G(), 6, k, k, 4)
  }
};
B.TX = function() {
  this.ea.cancel();
  this.W.dh()
};
B.RM = function(a) {
  return Ot(a, this.kb.Wt) ? a : Ot(a, this.kb.Uz) ? a.nextSibling : n
};
B.lB = function(a) {
  a = a.lastChild.nodeValue;
  this.wa[a] = !this.wa[a];
  Y4(this)
};
B.OF = function(a) {
  var b = this.kb.vq;
  return Ot(a, b) ? a : Ot(a.parentNode, b) ? a.parentNode : n
};
B.QX = function(a, b) {
  Lwa(this, a, b.target)
};

function Lwa(a, b, c) {
  if (Ot(c, "conf-action-link")) {
    var d = Kwa(a, b) || t;
    a.K ? a.K.contains(d) ? a.K.remove(d) : (c = new TD(d, 0, (d ? a.o.o[d] : n).name), a.K.add(c), ep("rflh_" + a.B.length), b = a.zb[d] ? Ot(b, "ci-fur") ? "favorite_room_added_no_filter_top" : "favorite_room_added_no_filter_bottom" : "non_favorite_room_added_no_filter", a.gz.b(b), Mwa(a, "fetch_resource_avail_wait_e")) : (c.innerHTML = "Added", gn(c, "conf-action-link"), a.P(new Nwa("gcal-rp-add", d ? a.o.o[d] : n)));
    c5(a, n)
  }
}

function H5(a, b, c, d) {
  if (a = a.b.G(a.getId() + "-" + d + "-" + b)) a.innerHTML = c ? "Remove" : "Add"
}
B.OP = function(a) {
  Bb(fh(a, "f"), function(a) {
    a = a.getKey();
    H5(this, a, m, "or");
    H5(this, a, m, "fr")
  }, this);
  Bb(fh(a, "g"), function(a) {
    a = a.getKey();
    H5(this, a, p, "or");
    H5(this, a, p, "fr")
  }, this)
};
B.UM = function() {
  this.P("gcal-rp-close")
};

function Mwa(a, b) {
  a.Wb && (a.Wb.b(b), delete a.Wb);
  a.ka && (a.ka.b(), a.ka.report(), delete a.ka)
}
B.PP = function(a) {
  if (this.isDisposed() || !a.b.equals(this.Xa.get()) || a.o != Iwa(this)) return p;
  $4 = this;
  window.setTimeout(E(function() {
    this.Ha.b.length || Mwa(this, "fetch_resource_avail_wait")
  }, this), 0);
  return m
};
B.fu = function(a, b) {
  if (b || this.nb.hasFocus()) {
    switch (a.keyCode) {
    case 38:
      c5(this, n);
      this.nb.wg(this.Bq, b);
      0 == this.nb.o && (this.b.G(this.getId() + "-conflist").scrollTop = 0);
      break;
    case 40:
      c5(this, n);
      this.nb.rg(this.Bq, b);
      break;
    case 13:
    case 32:
      var c = zr(this.nb);
      if (Ot(c, this.kb.vq)) {
        var d = Fu(k, "conf-action-link", c)[0];
        Lwa(this, c, d)
      } else this.lB(c);
      break;
    default:
      return
    }
    a.preventDefault()
  }
};
B.Bq = function(a) {
  return xj(a)
};
B.ym = function() {
  return this.b.G(this.getId() + "-conf-input")
};
var $4 = n;

function _RE_UpdateAvailability(a) {
  if ($4) for (var b = arguments, c = 0; c < b.length;) {
    var d = b[c++],
        e = b[c++];
    Fwa(d, !! e)
  }
  Y4($4, m)
}
var a5 = new V('<table cellpadding=0 cellspacing=0 width="100%"><tr><td width="100%"><div class="textbox-fill-wrapper"><div class="textbox-fill-mid"><input class="textbox-fill-input" type=text id="${pId}-conf-input"></div></div></td></tr></table><div><label class=ep-gp-smalltext><input class=ep-gp-conf-checkbox type=checkbox id=${pId}-conf-hide-conflicts ${hideConflicts}>Show only available</label></div><div class="ep-gp-conf-inst ep-gp-smalltext" id=${pId}-conf-inst style="display:${instancesDisplay}">Check availability for:<br><label class=ep-gp-conf-label-1><input class=ep-gp-conf-radio type=radio id=${pId}-conf-inst-1 name=ep-gp-conf value=1>This instance only</label><label class=ep-gp-conf-label-15><input class=ep-gp-conf-radio type=radio id=${pId}-conf-inst-15 name=ep-gp-conf value=15 checked>Next 15 instances</label></div><div class=conf-list-wrapper><div class=conf-list><table width="100%" cellpadding=0 cellspacing=0><tr><td id="${pId}-conflist"></td></tr></table></div></div><div class="conf-close"><span id="${pId}-close" class="ui-ltsr-unselected" role="button" tabindex="0">Close</span></div>'),
    b5 =
    new V('<div id="${pId}-i${index}" class="${class}" style="background-image:url(/calendar/${img});${display}"><span id="${pId}-${type}-${email}" class="conf-action conf-action-link">${action}</span>${name}</div>');

function Nwa(a, b) {
  L.call(this, a);
  this.Od = b || n
}
H(Nwa, L);

function Gwa() {
  this.b = []
};

function UO(a) {
  Y.call(this);
  this.A = a
}
H(UO, Y);
var Owa = {
  Ru: "p"
};
UO.prototype.$ = function() {
  UO.J.$.call(this);
  var a, b = this.oa(t);
  a = FN(37064) + "&ctx=welcome";
  a = b = t + ("<div class=wtzp-p>We need to know your time zone so we can display your events properly.<div id=" + ZH(b) + ZH(Owa.Ru) + '></div>You can always change your time zone, or choose an additional time zone to display, by choosing "Settings" from the gear menu.<div><a href="' + ZH(a) + '" target="_blank">' + ZH("Learn more") + "</a></div></div>");
  var c = new AK;
  c.set("save", "Set time zone", m);
  b = new tK;
  b.setTitle("Welcome to Google Calendar!");
  w1(b, p);
  vK(b, a);
  DK(b, c);
  b.setVisible(m);
  en(b.G(), "wtzp-d");
  this.ha(b);
  a = new W2(this.A, S(this.A).Ed()[0]);
  a.O = m;
  this.ha(a);
  a.render(this.fa("p"));
  this.o = a;
  Z(this).I(b, "dialogselect", this.B);
  Z(this).I(b, "afterhide", this.aa)
};
UO.prototype.B = function(a) {
  if ("save" == a.key) {
    a = S(this.A);
    var b = a.Ed()[0],
        c = Y2(this.o),
        d = a.get("country"),
        e = this.o.getCountry();
    e != d && a.set("country", e);
    a.set("wwdi", (new Y1("wwtz", 1)).toString());
    a.set("wwd", "true");
    c.getName() != b.getName() ? (a.set("timezone", c.getName()), a.jb(), Jra()) : a.jb()
  }
};

function I5(a, b) {
  var c = Kw(jm(Pwa, {
    classPrefix: b || t
  }));
  Ji(c, a);
  this.C = a;
  this.b = a.previousSibling;
  a.parentNode.removeChild(a);
  this.b.firstChild.nextSibling.nextSibling.nextSibling.appendChild(a)
}
H(I5, uc);
I5.prototype.L = function() {
  K(this.o);
  Mi(this.C, this.b);
  delete this.b;
  I5.J.L.call(this)
};
I5.prototype.B = function(a) {
  return Math.floor(a / 200) % 300
};
I5.prototype.A = function(a) {
  if (this.D != a) {
    var b = a - 300 + "px",
        c = -a + "px",
        d = this.b,
        e = d.childNodes[1],
        f = d.childNodes[2],
        h = d.childNodes[4];
    d.childNodes[0].style.left = b;
    h.style.left = c;
    e.style.top = c;
    f.style.top = b;
    this.D = a
  }
};
var Pwa = new V('<div class="${classPrefix}drag-halo"><div class="${classPrefix}ants ${classPrefix}ants-top"></div><div class="${classPrefix}ants ${classPrefix}ants-left"></div><div class="${classPrefix}ants ${classPrefix}ants-right"></div><div class="${classPrefix}drag-halo-inner"></div><div class="${classPrefix}ants ${classPrefix}ants-bottom"></div></div>');

function Qwa() {
  this.b = [];
  Rwa(this)
}
var Swa = qz("T000000").Lb(),
    J5 = qz("19700101T000000").Ea(),
    Twa = qz("19700102T000000").Ea();
new Uf(J5, Twa);
var Uwa = new Uf(qz("19700101T090000").Ea(), qz("19700101T170000").Ea());

function Vwa(a) {
  for (var b = 0; 7 > b; b++) {
    var c = [].concat(a.b[b]);
    if (0 < c.length) return c[0]
  }
  return n
}
function K5(a) {
  var b = a.end.ta() < a.start.ta() || Swa.equals(a.end.Lb());
  return new Uf(Nw(J5, a.start.Lb()), Nw(b ? Twa : J5, a.end.Lb()))
}

function Wwa(a, b) {
  var c = new Qwa,
      d = a && a.split("|");
  if (!a || 7 != d.length && !b) {
    for (d = 0; 7 > d; d++) c.b[d] = [Uwa];
    return c
  }
  Rwa(c);
  for (var e = 0; 7 > e; e++) if (d[e] && d[e].length) for (var f = d[e].split(","), h = 0; h < f.length; h++) {
    var l = qz(f[h]);
    c.b[e].push(K5(l))
  }
  return c
}
function Rwa(a) {
  for (var b = 0; 7 > b; b++) a.b[b] = []
};

function L5(a, b, c) {
  Y.call(this);
  this.K = a;
  this.C = b;
  this.o = c || "ep-es";
  this.B = []
}
H(L5, Y);
L5.prototype.A = n;
L5.prototype.ia = function() {
  var a = this.b,
      b = a.U("div", this.o);
  this.V = b;
  b.appendChild(a.U("p", k, this.K));
  var c = a.U("tbody"),
      a = a.U("table", this.o + "-buttons", c);
  b.appendChild(a);
  for (a = 0; a < this.C.length; a++) c.appendChild(Xwa(this, this.C[a]));
  c = Oy.M();
  c = new Ky("Cancel this change", c);
  this.ha(c);
  this.B.push(c);
  c.render(b);
  c.G().className += " " + (this.o + "-cancel-button");
  Z(this).I(c, "action", E(this.H, this, n))
};

function Xwa(a, b) {
  var c = a.b,
      d = Oy.M(),
      e = c.U("td", a.o + "-button-cell"),
      f = c.U("td", a.o + "-explanation-cell"),
      h = c.U("tr", k, e, f),
      d = new Ky(b.title, d);
  Dy(d, a.o + "-button-" + b.scope.toLowerCase());
  a.ha(d);
  d.render(e);
  a.B.push(d);
  b.A && (a.F = d.G());
  Z(a).I(d, "action", E(a.H, a, b.scope));
  f.appendChild(c.U("p", k, b.o));
  b.b && f.appendChild(c.U("p", a.o + "-warning", b.b));
  return h
}
L5.prototype.$ = function() {
  L5.J.$.call(this);
  this.F && this.F.focus()
};
L5.prototype.H = Oa("A");

function M5(a, b, c, d, e) {
  this.scope = a;
  this.title = b;
  this.o = c;
  this.b = d || t;
  this.A = e || p
};

function N5(a, b, c, d) {
  tK.call(this, d || "ep-es-dialog", m);
  this.W = a;
  this.ea = b;
  this.wk = c || "Edit recurring event"
}
H(N5, tK);
N5.prototype.setVisible = function(a) {
  a ? (a = Z(this), this.Vd = m, this.setTitle(this.wk), DK(this, n), N5.J.setVisible.call(this, m), this.B = new L5(this.W, this.ea), this.ha(this.B), this.B.render(this.Ab()), Lu(a, this.B, "action", this.ka, k), this.Ua()) : (this.P("action"), N5.J.setVisible.call(this, p))
};
N5.prototype.ka = function() {
  this.setVisible(p)
};

function Ywa(a, b) {
  return F(Zwa, a, b)
}
function Zwa(a, b, c, d, e) {
  var f = Vva(a),
      h;
  if (h = UE(a) && !a.Xa && a.Ba(E(a.RC, a))) h = a.B.b, h = !(h.Ba() && (4 == h.get() || 4 == h.Qb()));
  var l = Wva(a);
  $wa(a, c, f, h, l, b, d, e)
}
function Vva(a) {
  var b, c = a.D,
      c = c && c.D,
      d = a.Xa || c && c.get();
  PE(a) ? b = d ? "ALL" : "ONE" : c && c.Ba() ? b = "ALL" : d ? a.A.b.Ba() ? b = "ALL" : (UE(a) && !a.Xa ? a = p : (c = a.B, a = Boolean(a.O.Ba() || a.b.Ba() || a.Z.Ba() || a.ya.Ba() || c.o.Ba() || c.b.Ba())), a && (b = "ONE")) : b = "ONE";
  return b
}

function Wva(a) {
  var b;
  if (!(b = DD(a.b))) {
    var c = a.b;
    b = c.Qb();
    c = c.get();
    b = b && c ? !b.start.Lb().equals(c.start.Lb()) : b !== c
  }
  return b ? "Any changes to other events will be lost." : a.B != n && (a.B.o.Ba() || a.B.b.Ba() || a.B.A.Ba()) && !a.Ba(E(a.vA, a)) ? "Any other changed events will not be affected." : "Any changes made to other events will be kept."
}
function $wa(a, b, c, d, e, f, h, l) {
  c ? (axa(a, b, c), f && f(c), h()) : (c = !bxa(a), jz(d, c, e, function(c) {
    axa(a, b, c);
    f && f(c);
    h()
  }, l))
}

function bxa(a) {
  if (!a) return p;
  R();
  var b = a.D,
      b = (b = b && b.b) && b.Ba();
  return DD(a.b) || !! b
}

function jz(a, b, c, d, e, f, h, l, q) {
  var r = [];
  h = new M5("ONE", h || "Only this event", "All other events in the series will remain the same.", k, m);
  q = new M5("TAIL", q || "Following events", "This and all the following events will be changed.", "Any changes to future events will be lost.");
  c = new M5("ALL", l || "All events", "All events in the series will be changed.", c);
  l = R();
  zo(l) ? a ? (r.push(h), r.push(q), b ? (r.push(c), a = "Would you like to change only this event, all events in the series, or this and all following events in the series?") : a = "Would you like to change only this event or this and all future events in the series?") : (a = "Would you like to change only this instance of the event, or all events in this series?", r.push(h), r.push(c)) : (a = "When working offline, changes to recurring events do not apply to the entire series. You can only modify individual instances of recurring events.", r.push(h));
  cxa(function(a) {
    a ? d(a) : e()
  }, f || a, r)
}
function cxa(a, b, c) {
  var d = new N5(b, c);
  O(d, "action", function() {
    a(d.B.A)
  });
  d.setVisible(m)
}

function axa(a, b, c) {
  b.push("scp", c);
  a && a.D && "ONE" == c && (K(a.D), a.D = n)
};

function O5(a, b) {
  this.B = a;
  rR.call(this, b, dxa || (dxa = new VQ([86400, 604800], -86400)))
}
var dxa;
H(O5, rR);
O5.prototype.$a = function(a) {
  var b = new Date(this.B.get().year, this.B.get().month, this.B.get().Y),
      c = this.value.get(),
      c = new Date(b.getTime() - 1E3 * c);
  a = new Date(b.getTime() - 1E3 * a);
  a.setHours(c.getHours());
  a.setMinutes(c.getMinutes());
  a.setSeconds(c.getSeconds());
  b = Yf(TI(b), TI(a));
  this.value.set(b.o)
};
O5.prototype.Ca = function() {
  var a = new Date(this.B.get().year, this.B.get().month, this.B.get().Y),
      b = this.value.get(),
      b = new Date(a.getTime() - 1E3 * b),
      b = OI(b),
      a = Hg(OI(a), b);
  return Math.abs(86400 * a)
};

function P5(a, b, c, d, e, f, h, l) {
  uR.call(this, a, b, c, d, l);
  this.O = e;
  this.F = new bL(Eta(a, m));
  this.B = f;
  this.ya = h || t
}
H(P5, uR);
P5.prototype.ia = function() {
  P5.J.ia.call(this);
  var a = this.b.U("span"),
      b = this.b.U("input");
  nv(b, "gcal-reminder-time-of-day");
  this.V = this.b.U("div", "gcal-reminder", this.o, a, this.b.createTextNode(" " + this.ya + " "), b, this.C);
  this.ha(this.O);
  this.ha(this.F);
  this.O.render(a);
  Px(this.F, b);
  exa(this);
  Z(this).I(this.F, v, this.W);
  Z(this).I(b, v, this.W);
  Z(this).I(this.B, v, this.W);
  this.$h()
};
P5.prototype.$h = function() {
  P5.J.$h.call(this);
  this.O.G().title = "Reminder time";
  this.F.G().title = "Reminder time"
};

function exa(a) {
  var b = new Date(a.B.get().year, a.B.get().month, a.B.get().Y),
      c = a.A.ed.get(),
      b = TI(new Date(b.getTime() - 1E3 * c));
  a.F.G().value = K1(a.Z).ob(b.Lb())
}
P5.prototype.W = function() {
  var a = new Date(this.B.get().year, this.B.get().month, this.B.get().Y),
      b = this.A.ed.get(),
      b = TI(new Date(a.getTime() - 1E3 * b)),
      c = t1(v1(Jd(this.Z, 3)), this.F.G().value);
  c && (b.hour = c.hour, b.minute = c.minute, b.second = c.second, a = Yf(TI(a), b), this.A.ed.set(a.o));
  exa(this)
};

function Q5(a, b, c) {
  xR.call(this, a, b, new mD(3, 54E3), 5);
  this.O = c;
  this.dc(this.O);
  this.K = n
}
H(Q5, xR);
Q5.prototype.B = function(a) {
  return new P5(this.C, this.o.b ? mQ : nQ, oQ(), a, new O5(this.O, a.ed), this.O, "before at")
};
Q5.prototype.ij = function() {
  this.K = this.b.U("span", "no-reminders", this.b.createTextNode("No reminders set"));
  return this.b.U("div", {}, this.K, Q5.J.ij.call(this))
};
Q5.prototype.Mh = function() {
  Q5.J.Mh.call(this);
  U(this.K, !this.o.size())
};

function R5(a, b, c) {
  Y.call(this);
  this.o = c;
  var d = n;
  c = n;
  isNaN(this.o.Fa().hour) && Sd(9) ? (d = new xD(b.B), this.dc(d), c = b) : (d = b, Sd(9) && (c = new xD(b.o), this.dc(c)));
  this.B = new zR(a, d);
  this.A = n;
  Sd(9) && (b = new sE(this.o.Fa().va()), this.A = new Q5(a, c, b))
}
H(R5, UQ);
R5.prototype.ia = function() {
  R5.J.ia.call(this);
  U(this.G(), p);
  this.ha(this.B, m);
  Sd(9) && (this.ha(this.A, m), this.F());
  U(this.G(), m)
};
R5.prototype.$ = function() {
  R5.J.$.call(this);
  Sd(9) && Z(this).I(this.o, v, this.F)
};
R5.prototype.F = function() {
  var a = isNaN(this.o.Fa().hour);
  U(this.B.G(), !a);
  U(this.A.G(), a)
};
R5.prototype.C = function() {
  return isNaN(this.o.Fa().hour) && Sd(9) ? this.A.o : this.B.o
};

function AP(a, b, c, d, e, f) {
  GM.call(this, f || "ecp");
  this.o = a;
  this.C = b;
  this.K = new ez(b.get());
  this.fb = c || t;
  this.F = e;
  this.B = d
}
H(AP, GM);
AP.prototype.ia = function() {
  for (var a = this.H, b = this.b.U("div", a), c = this.o.b, d = this.F || this.oa(t) + "-label", e = this.fb ? jm(fxa, {
    prefix: a,
    labelId: d,
    label: this.fb
  }) : t, f = Ssa("none") || t, c = jm(HM, {
    className: a + "-rb-default",
    id: this.oa("none"),
    labelId: d,
    color: c.b,
    borderColor: c.B,
    colorName: I(f)
  }), d = [], f = Tsa(), h = 0; h < f.length; h++) {
    var l = f[h],
        q = Ssa(l) || t;
    d.push(jm(HM, {
      className: this.H + "-rb-color",
      id: this.oa(l),
      color: l,
      borderColor: l,
      colorName: I(q)
    }))
  }
  b.innerHTML = jm(gxa, {
    prefix: a,
    labelHtml: e,
    defaultColorHtml: c,
    eventColorsHtml: d.join(t)
  });
  this.V = b
};
var gxa = new V('${labelHtml}${defaultColorHtml}<div class="${prefix}-dt-hr goog-inline-block"></div>${eventColorsHtml}'),
    fxa = new V('<div class="${prefix}-label"><label id="${labelId}">${label}</label></div>');
B = AP.prototype;
B.qD = function() {
  this.jc && (KM(this.jc), this.jc = n);
  var a = this.K.get();
  ii(a) && (this.jc = this.A[a]);
  this.jc || (this.jc = this.A.none);
  JM(this.jc)
};
B.kF = function() {
  this.A = {};
  this.A.none = this.fa("none");
  for (var a = Tsa(), b = 0; b < a.length; b++) {
    var c = a[b];
    this.A[c] = this.fa(c)
  }
  this.C.Ba() || this.qD();
  a = Cc(this.A);
  Bb(a, function(a) {
    Dj(a, "radio")
  });
  Dj(this.G(), "radiogroup");
  this.nb = new tr;
  ur(this.nb, a);
  a = Ab(a, this.jc);
  yr(this.nb, a, m);
  Z(this).I(new gy(this.G()), "key", this.qT)
};
B.qT = function(a) {
  switch (a.keyCode) {
  case 38:
  case 37:
    this.nb.wg();
    a.stopPropagation();
    break;
  case 40:
  case 39:
    this.nb.rg();
    a.stopPropagation();
    break;
  case 13:
    this.nx(), a.stopPropagation()
  }
  LM(this, zr(this.nb))
};
B.qG = function(a) {
  var b = xG(this, a.id);
  a.style.borderColor = "none" == b ? this.o.b.B : b
};
B.VF = function(a) {
  a = xG(this, a.id);
  this.C.set(a)
};
B.nx = function() {
  this.B && this.B.call()
};

function S5(a, b, c) {
  Y.call(this);
  this.B = a;
  this.C = b;
  this.o = c || "ep-at"
}
H(S5, Y);
S5.prototype.ia = function() {
  var a = this.b,
      b = a.U("tr", this.o);
  this.V = b;
  var c = a.U("td", this.o + "-doc-col"),
      d = a.U("td", this.o + "-remove-col");
  b.appendChild(c);
  b.appendChild(d);
  var b = a.U("img", {
    "class": this.o + "-icon",
    src: this.B.A
  }),
      e = a.U("span", this.o + "-title", this.B.getTitle()),
      f = a.U("a", {
      "class": this.o + "-link",
      href: this.B.getUrl(),
      target: "_blank"
    });
  f.appendChild(b);
  f.appendChild(e);
  c.appendChild(f);
  this.C && (this.A = a.U("div", this.o + "-remove"), this.A.tabIndex = 0, d.appendChild(this.A))
};
S5.prototype.$ = function() {
  S5.J.$.call(this);
  this.A && Ku(Z(this), this.A, jA, this.F)
};
S5.prototype.F = function() {
  this.P("Ob")
};

function T5(a) {
  this.o = a;
  this.b = {}
}
function U5(a, b) {
  a.fb = b || k;
  return a
}
T5.prototype.C = function() {
  var a = y2(this.b, function(a) {
    return a !== n
  }),
      a = Fc(a) ? n : a,
      a = [this.o, this.fb, a],
      b = Su(a, Pu);
  return a = a.slice(0, b + 1)
};
T5.prototype.toString = function() {
  var a = this.C();
  return "(" + Db(a, function(a) {
    return aJ(a)
  }).join(",") + ")"
};
T5.prototype.getId = w("o");
T5.prototype.he = w("fb");

function V5(a) {
  T5.call(this, "upload");
  this.b.query = a
}
H(V5, T5);

function hxa() {
  V5.call(this, "docs")
}
H(hxa, V5);

function ixa() {
  var a = new hxa;
  a.b.includeFolders = m;
  return a
};

function jxa(a) {
  T5.call(this, a || "all")
}
H(jxa, T5);

function kxa(a) {
  var b = new jxa;
  C(a) ? b.b.ownedByMe = a : delete b.b.ownedByMe;
  return b
}
function lxa(a) {
  a.b.includeFolders = m;
  return a
};

function W5(a) {
  this.action = a;
  this.wfv = p
};

function mxa(a, b) {
  W5.call(this, "set-drive-options");
  this.appId = a;
  this.appOrigin = b
}
H(mxa, W5);

function nxa(a) {
  W5.call(this, "visibility");
  this.visible = a
}
H(nxa, W5);

function oxa(a, b, c) {
  tK.call(this, a, b, c)
}
H(oxa, tK);

function X5(a) {
  a = a && Cu(a) || window;
  return a.gadgets && a.gadgets.rpc
}
var Y5 = n;

function pxa(a, b) {
  var c = b && Cu(b) || window;
  if (X5(b)) a();
  else if (Y5) Y5.push(a);
  else
  var d = Y5 = [a],
      e = c.setInterval(function() {
      if (X5(b)) {
        c.clearInterval(e);
        for (var a = 0; a < d.length; a++) d[a]();
        Y5 = n
      }
    }, 100)
};

function qxa(a, b) {
  var c;
  t: {
    for (c = b.target; c;) {
      if (1 == c.nodeType) {
        var d = mj(c, "overflowY");
        if ("auto" == d || "scroll" == d) break t
      }
      c = c.parentNode
    }
    c = n
  }
  if (!c || !Si(a, c) || c.scrollHeight == c.clientHeight || 0 < b.da && 1 >= Math.abs(c.scrollTop - (c.scrollHeight - c.clientHeight)) || 0 > b.da && 0 == c.scrollTop) b.preventDefault(),
  b.stopPropagation()
};
var Z5;

function $5(a, b, c, d, e) {
  tK.call(this, this.kb, m, c);
  this.B = R1();
  this.W = R1();
  this.il = VG(VG(new ff(a), "rpctoken", this.W), "rpcService", this.B).toString();
  this.Cg && (this.Cg.src = a);
  this.ya = d;
  this.wa = e;
  C(k) ? c = k : C(d) || C(e) ? c = m : (c = UG(qf(a), "hostId"), Z5 || (Z5 = new ne("DocVerse fusiontables geo geowiki gm gmail-gadget gws hotpot jointly orkut presentations pwa sites templates trix trix-copy-sheet webstore".split(" "))), c = !Z5.contains(c));
  this.ea = c;
  b && (UG(qf(a), "hostId"), b = this.b, X5(b) || (b = b || wi(document), c = b.createElement("script"), c.src = "//www-onepick-opensocial.googleusercontent.com/gadgets/js/rpc.js?c=1&container=onepick", c.type = "text/javascript", b.Sa().body.appendChild(c)));
  b = n;
  c = a.indexOf("/picker?"); - 1 < c ? b = a.substring(0, c + 8 - 1) : ob(a, "/picker") && (b = a);
  b && this.setRelayUrl(b + "/resources/rpc_relay.html");
  this.Qs = p;
  DK(this, n)
}
H($5, oxa);
B = $5.prototype;
B.kb = "picker modal-dialog";
B.il = t;
B.Cg = n;
B.Nc = D;
B.$ = function() {
  $5.J.$.call(this);
  var a = this.dl(),
      b = Z(this),
      c = new kw(a);
  b.dc(c);
  b.I(c, "mousewheel", E(qxa, k, a)).I(a, "scroll", E(qxa, k, a))
};
B.render = function(a) {
  $5.J.render.call(this, a);
  a = this.il;
  this.Cg = this.b.U("iframe", {
    id: this.B,
    name: this.B,
    "class": "picker-frame",
    src: rxa(this),
    onload: E(this.dQ, this),
    frameBorder: "0"
  });
  this.Ab().appendChild(this.Cg);
  Xi(this.Cg, m);
  nv(this.G(), "picker-dialog");
  this.Cg.src = a;
  a6(this, E(function(a) {
    a.setAuthToken(this.B, this.W)
  }, this));
  (a = UG(qf(this.il), "title")) && this.setTitle(a)
};

function rxa(a) {
  return J && qc("7") && nb(a.il, "https") ? "https://about:blank" : 'javascript:""'
}
B.dQ = function() {
  var a = Cu(this.b);
  this.Cg.src == rxa(this) ? Z(this).I(a, "keydown", this.sD) : Z(this).b(a, "keydown", this.sD)
};
B.sD = function(a) {
  27 == a.keyCode && (this.setVisible(p), this.Nc({
    action: "cancel"
  }))
};

function a6(a, b) {
  var c = a.b;
  pxa(function() {
    b(Cu(c).gadgets.rpc)
  }, c)
}
function sxa(a, b) {
  a.Nc = b;
  a6(a, E(function(a) {
    a.register(this.B, E(this.nW, this))
  }, a))
}
B.nW = function(a) {
  var b = a.action;
  "loaded" == b && (this.ka && txa(this, new mxa(this.ka, window.location.protocol + "//" + window.location.host)), w1(this, p));
  "picked" != b && "cancel" != b || this.setVisible(p);
  this.Nc(a)
};
B.setRelayUrl = function(a) {
  a6(this, E(function(b) {
    b.setRelayUrl(this.B, a)
  }, this))
};

function txa(a, b) {
  a6(a, E(function(a) {
    a.call(this.B, "picker", n, b)
  }, a))
}
B.Vv = function() {
  var a = this.b.Sa(),
      b = Eu(a) || window;
  if ("true" == UG(qf(this.il), "shadeDialog")) b = Bi(b), a = Math.max(b.width - 80, 0), b = Math.max(b.height - 40, 0);
  else {
    var a = this.ya,
        c = this.wa;
    a ? (a = Math.max(566, Math.min(1051, a)), c || (b = Bi(b), c = .85 * b.height), b = Math.max(350, Math.min(650, c))) : (b = Bi(b), a = .618 * b.width, b = a < b.height ? Math.round(Math.max(350, Math.min(650, .85 * a))) : Math.round(Math.max(350, Math.min(650, .85 * b.height))), a = Math.round(b / .618))
  }
  a = new ui(a, b);
  Fw(this.Ab(), a);
  this.Ua()
};
B.Ua = function() {
  if ("true" == UG(qf(this.il), "shadeDialog")) {
    var a = vj(this.G()),
        a = Math.max(Math.floor(Bi(Cu(this.b)).width / 2 - a.width / 2), 0),
        b = Zi(this.b).y;
    hv(this.G(), a, b)
  } else $5.J.Ua.call(this)
};
B.setVisible = function(a) {
  if (a != this.Da() && this.ea) {
    var b = this.b.Sa(),
        b = Eu(b) || window;
    a ? (this.Vv(), Z(this).I(b, "resize", this.Vv)) : Z(this).b(b, "resize", this.Vv)
  }
  $5.J.setVisible.call(this, a);
  txa(this, new nxa(a))
};
B.focus = function() {
  $5.J.focus.call(this);
  if (this.Cg) try {
    this.Cg.focus()
  } catch (a) {}
};

function uxa() {
  T5.call(this, "blog-search")
}
H(uxa, T5);

function b6() {
  T5.call(this, "image-search")
}
H(b6, T5);
b6.prototype.Eg = Qa(92);
b6.prototype.oj = function(a) {
  this.b.imgcolor = a;
  return this
};

function vxa() {
  T5.call(this, "maps")
}
H(vxa, T5);

function wxa() {
  T5.call(this, "photos")
}
H(wxa, T5);

function xxa() {
  T5.call(this, "url")
}
H(xxa, T5);

function yxa() {
  T5.call(this, "video-search")
}
H(yxa, T5);

function zxa() {
  T5.call(this, "web")
}
H(zxa, T5);

function c6(a) {
  this.o = cb(a) ? new T5(a) : a;
  this.b = [];
  this.A = {}
}
function Axa(a) {
  switch (a) {
  case "blog-search":
    return new uxa;
  case "image-search":
    return new b6;
  case "maps":
    return new vxa;
  case "photos":
    return new wxa;
  case "url":
    return new xxa;
  case "video-search":
    return new yxa;
  case "web":
    return new zxa
  }
  return new T5(a)
}
function d6(a, b) {
  a.b.push(cb(b) ? Axa(b) : b);
  return a
}
function e6(a) {
  return "(" + Db(a.b, function(a) {
    return a.toString()
  }).join(",") + ")"
}

function Bxa(a) {
  a = y2(a.A, function(a) {
    return a !== n
  });
  return (a = Fc(a) ? n : a) ? aJ(Ac(a, function(a) {
    return a.toString()
  })) : t
}
c6.prototype.toString = function() {
  if (this.o) {
    var a = ["{root:", this.o.toString(), ",items:", e6(this)],
        b = Bxa(this);
    b && (a.push(",options:"), a.push(b));
    a.push("}");
    return a.join(t)
  }
  return e6(this)
};

function f6(a) {
  this.B = a || "https://docs.google.com/picker";
  this.o = new c6
}
f6.prototype.o = n;

function Cxa(a) {
  a.o.b.push(U5(new T5(n), "-"));
  return a
}
function g6(a, b) {
  d6(a.o, b);
  return a
};

function Dxa(a) {
  f6.call(this, a)
}
H(Dxa, f6);

function h6(a) {
  f6.call(this, a);
  this.b = new ff(this.B);
  Exa(this);
  (a = window.location.origin) || (a = window.location.protocol + "//" + window.location.host);
  a && VG(this.b, "origin", a);
  this.A = []
}
H(h6, Dxa);

function Fxa(a) {
  VG(a.b, "multiselectEnabled", "true");
  return a
}
B = h6.prototype;
B.getHeight = w("D");
B.getTitle = function() {
  return UG(this.b, "title")
};

function Gxa(a, b) {
  VG(a.b, "authuser", b);
  return a
}
function Hxa(a) {
  VG(a.b, "hostId", "calendar");
  return a
}
function Ixa(a) {
  VG(a.b, "hl", "en");
  return a
}

function Exa(a) {
  VG(a.b, "protocol", "gadgets");
  return a
}
B.setRelayUrl = function(a) {
  VG(this.b, "relayUrl", a);
  return this
};
B.Eg = Qa(91);
B.setTitle = function(a) {
  VG(this.b, "title", a);
  return this
};

function i6(a, b, c, d) {
  P.call(this);
  var e = Ph(a);
  a = Td(a);
  var f = e.A.getName(),
      f = f ? "//docs.google.com/a/${domain}/picker".replace("${domain}", encodeURIComponent(f)) : "//docs.google.com/picker",
      e = e.o.D,
      h = WI() + "/rpc_relay.html",
      e = Gxa(Exa(Ixa(Hxa(new h6(f)))).setRelayUrl(h), e);
  b && e.setTitle(b);
  c ? g6(g6(g6(e, "photos"), "photo-upload"), "url") : a.isEnabled(12) ? Fxa(g6(g6(Cxa(g6(g6(e, U5(lxa(kxa(m)), "My Drive")), U5(lxa(kxa(p)), "Shared with me"))), ixa()), "recently-picked")).setTitle("Add attachment from Google Drive") : (b = d6(d6(d6(d6(d6(new c6("all"), "documents"), "spreadsheets"), "presentations"), "folders"), "forms"), e.o.b.push(b), Fxa(g6(g6(e, new V5("docs")), "recently-picked")));
  b = Dv();
  b != n && Gxa(e, b);
  e.A.length && VG(e.b, "pp", aJ(e.A));
  b = VG(e.b, "nav", e6(e.o)).clone();
  this.o = new $5(b.toString());
  sxa(this.o, E(this.A, this));
  this.o.A = d || "onepick-dialog"
}
H(i6, P);
i6.prototype.b = n;
i6.prototype.show = function() {
  Msa(E(function() {
    this.o.setVisible(m)
  }, this))
};
i6.prototype.A = function(a) {
  if ("picked" == a.action) {
    a = a.docs;
    for (var b = [], c = 0; c < a.length; c++) {
      var d = a[c],
          e = d.url;
      if ("photo" == d.type) {
        var f = d.thumbnails;
        f && 0 < f.length && (e = cJ(f).url)
      }
      b.push(new WE(e, d.id, d.name, d.iconUrl))
    }
    this.b = b;
    this.P(v)
  }
};

function j6(a, b, c, d, e) {
  Y.call(this);
  this.W = a;
  this.A = b;
  this.O = c;
  this.C = d || "ep-ats";
  this.o = e;
  this.ka = new Q(this)
}
H(j6, Y);
B = j6.prototype;
B.ia = function() {
  var a = this.b,
      b = a.U("div", this.C);
  this.V = b;
  this.H = a.U("table", this.C + "-list");
  this.K = a.U("tbody");
  this.H.appendChild(this.K);
  b.appendChild(this.H);
  this.Z = a.U("div", this.C + "-sn", "Make sure the guests have permission to access the attached files. ");
  b.appendChild(this.Z);
  var c = a.U("a", {
    href: "http://support.google.com/docs/?hl=en&p=calendar_docs_share",
    target: "_blank"
  }, "Learn more");
  this.Z.appendChild(c);
  this.ea = a.U("a", {
    "class": this.C + "-cl",
    href: FN(154174),
    target: "_blank"
  }, "Want to add attachments? Learn how to enable the lab!");
  b.appendChild(this.ea);
  this.B = a.U("span", this.C + "-add lk-button", "Add attachment");
  this.B.tabIndex = 0;
  b.appendChild(this.B);
  this.ka.I(this.A, "h", this.qA);
  this.qA()
};
B.$ = function() {
  j6.J.$.call(this);
  Ku(Z(this), this.B, jA, this.KV)
};
B.L = function() {
  j6.J.L.call(this);
  this.ka.aa()
};
B.qA = function() {
  var a = Z(this);
  if (this.F) for (var b = 0; b < this.F.length; b++) this.removeChild(this.F[b]);
  this.F = [];
  Ii(this.K);
  var c = this.O,
      d = dh(this.A);
  d.sort(Hsa);
  for (b = 0; b < d.length; b++) {
    var e = d[b],
        f = new S5(e, c);
    this.ha(f);
    this.F.push(f);
    f.render(this.K);
    a.I(f, "Ob", E(this.gR, this, e))
  }
  a = !this.A.isEmpty();
  b = k6(this) && this.O;
  d = k6(this);
  c = b && a;
  d = !d;
  U(this.H, a);
  U(this.B, b);
  U(this.Z, c);
  U(this.ea, d);
  Ti(this.B, a ? "Add another attachment" : "Add attachment")
};
B.gR = function(a) {
  this.A.remove(a.getKey())
};

function k6(a) {
  var b = Td(a.W),
      c = S(a.W);
  a = b.isEnabled(13);
  c = Yg(c, "useDocAttachment", "false");
  b = b.isEnabled(14);
  return a && c || b
}
B.KV = function() {
  this.o || (this.o = new i6(this.W), Z(this).I(this.o, v, this.sU));
  this.o.show()
};
B.sU = function() {
  ED(this.A, this.o.b) || this.P("Pb")
};
var Jxa = new Ig(0, 0, 30, 0);

function Kxa(a, b) {
  this.b = a;
  this.o = b || []
}
function Lxa(a, b) {
  var c = a.Fa().Ea().ta(),
      d = b.Fa().Ea().ta();
  return c - d
};

function l6(a, b, c) {
  Y.call(this);
  this.F = (b || "ep-st") + "-list";
  this.B = c || wk(xk(a));
  this.nb = new tr;
  this.o = this.F + "-item";
  this.A = []
}
H(l6, Y);
var Mxa = new V('<span class="${className}">${message}</span>'),
    Nxa = new V('<div id="${id}" class="${className}" role="menuitem"><span>${timeString}</span><br />${attendanceHtml}</div>');
B = l6.prototype;
B.wV = function(a) {
  if (this.nb.hasFocus()) {
    switch (a.keyCode) {
    case 38:
      this.nb.wg();
      break;
    case 40:
      this.nb.rg();
      break;
    case 13:
    case 32:
      var b = zr(this.nb);
      if (b && b.id) this.P(new m6(this.A[this.nb.o]));
      else
      return;
      break;
    default:
      return
    }
    a.preventDefault();
    a.stopPropagation()
  }
};
B.ia = function() {
  l6.J.ia.call(this);
  this.reset();
  Dj(this.G(), "menu")
};
B.$ = function() {
  l6.J.$.call(this);
  Z(this).I(new gy(this.G()), "key", this.wV);
  this.C = new lA(this.G());
  qA(this.C, E(this.uV, this), E(this.vV, this))
};
B.Na = function() {
  l6.J.Na.call(this);
  this.C.aa()
};
B.uV = function(a) {
  return Ot(a, this.o) && !sv(a.id) ? a : (a = a.parentNode) && Ot(a, this.o) && !sv(a.id) ? a : n
};
B.vV = function(a) {
  a = xG(this, a.id);
  var b = Number(a);
  this.P(new m6(this.A[0 == b && sv(a) ? NaN : b]))
};

function Oxa(a, b) {
  var c = Ei("div", a.o, b);
  Dj(c, "note");
  var d = a.G();
  d.innerHTML = t;
  Hi(d, c);
  ur(a.nb, [d])
}
B.update = function(a) {
  if (a) {
    var b = a.o;
    if (0 == b.length) b = a.b.end.va(), b = this.B.Ek(b), Oxa(this, "No free times for all participants were found through " + b + ". Choose a different start time to search again.");
    else {
      this.A = [];
      a = jm(Mxa, {
        className: this.o + "-attend",
        message: "All participants can attend"
      }).toString();
      for (var c = [], d = 0; d < b.length; d++) {
        this.A[d] = b[d];
        var e = this.B.Ek(b[d].start.Ea()) + " " + this.B.ob(b[d].start.Ea());
        c.push(jm(Nxa, {
          id: this.oa(t + d),
          className: this.o,
          timeString: e,
          attendanceHtml: a
        }).toString())
      }
      this.G().innerHTML =
      c.join(t);
      b = [];
      Ev(b, Ni(this.G()));
      ur(this.nb, b)
    }
  } else this.reset()
};
B.reset = function() {
  Oxa(this, "Loading...")
};
B.focus = function() {
  this.nb.focus()
};
B.blur = function() {
  this.nb.hasFocus() && zr(this.nb).blur()
};

function m6(a) {
  L.call(this, "Qb");
  this.o = a
}
H(m6, L);

function n6(a, b, c) {
  this.b = a;
  this.ab = b;
  this.Kd = c
}
n6.prototype.Ma = w("b");
n6.prototype.fh = w("Kd");

function o6() {
  this.o = [];
  this.b = {}
}
o6.prototype.add = function(a) {
  Za(a) || (a = [a]);
  for (var b = 0, c = a.length; b < c; ++b) {
    var d = a[b].getId();
    this.b[d] || (this.o.push(a[b]), this.b[d] = m)
  }
};

function p6(a, b, c) {
  b = Eg(b.start.ta(), b.end.ta());
  c = Lc(c);
  return Cb(a.o, F(Pxa, b, c))
}
function Pxa(a, b, c) {
  return b[c.Aa()] ? Vf(c, a) : p
}
o6.prototype.clear = function() {
  this.o = [];
  this.b = {}
};

function q6(a, b, c, d, e, f, h, l, q, r, s) {
  this.o = b || [];
  this.Kd = c || 0;
  this.A = d || {};
  this.X = e || [];
  this.b = a || [];
  this.K = f || [];
  this.H = h || [];
  this.C = l || {};
  this.D = q || {};
  this.B = r || n;
  this.F = s || []
}
q6.prototype.fh = w("Kd");

function r6() {
  P.call(this)
}
H(r6, T1);

function s6(a) {
  this.A = S(a).$f();
  this.o = Af(a)
}
s6.prototype.b = function(a, b) {
  return new t6(this, a, b)
};

function t6(a, b, c) {
  P.call(this);
  this.o = a;
  this.A = b;
  this.b = c
}
H(t6, r6);
B = t6.prototype;
B.wq = n;
B.start = function() {
  t6.J.start.call(this);
  var a = this.A;
  if (a.length) {
    for (var b = [], c = [], d = 0; d < a.length; ++d) {
      0 < d && c.push("\n");
      var e = a[d];
      c.push(e.Ma(), " ", e.ab, " ", e.fh())
    }
    b.push("emf", c.join(t), "ctz", this.o.A, "hl", "en");
    this.b && b.push("eid", this.b);
    this.o.o.send("scheduler", b, 23, E(this.mN, this), E(this.lN, this))
  } else this.wq = new q6, this.vd()
};
B.mN = function(a) {
  if (a) {
    var b = F(Qxa, bg.M()),
        c = [],
        d = 0,
        e = {},
        f = [],
        h = [],
        l = [],
        q = [],
        r = {},
        s = {},
        u = {},
        x = [],
        z = a.schedule,
        d = Number(a.freshness);
    for (a = 0; a < z.length; a++) for (var A = z[a], G = A.id, M = A.type, A = A.resolved, N = [], X = 0; X < A.length; X++) {
      var $ = A[X],
          ca = $.id,
          ua = ca,
          pa = $.status,
          ab = $.type,
          Ra = $.self;
      if ("GAIA_GROUP" != M || "PRIVATE_GROUP" == pa || Ra) G != ca && (r[G] = ca), $.cid && (ua = $.cid.toLowerCase(), s[ca] = ua);
      "THROTTLED" == pa ? q.push(ca) : "OK" != pa && "SKIPPED" != pa && l.push(ca);
      "GAIA_GROUP" == ab && ("PRIVATE_GROUP" == pa || "NO_ACCESS" == pa ? f.push(ca) : "NO_QUOTA" == pa ? x.push(ca) : G == ca || r[G] ? 1 != A.length || A[0].id != G && !A[0].self ? e[ca] = N : h.push(ca) : e[ca] || (e[ca] = []));
      pa = $.events;
      N.push(ca);
      if (pa) for (pa = pa.added, ab = 0; ab < pa.length; ab++) Ra = b(pa[ab]), Ra.Ra = ua, c.push(Ra);
      ($ = $.parentGroups) && (u[ca] = $)
    }
    this.wq = new q6(l, c, d, e, h, q, f, r, s, u, x)
  } else this.wq = new q6;
  this.vd()
};
B.lN = function() {
  this.nh()
};

function Qxa(a, b) {
  var c = b.eid,
      d = b.summary,
      e = mk(b.start),
      f = mk(b.end),
      h = b.location,
      l = b.creator,
      q = b.flags & 7,
      c = new Sf(c, e, f, b.eventType, b.privProps);
  c.setTitle(d);
  c.Tc = h;
  c.Bc = l;
  c.lf(q);
  b.crm != k && (c.Hd = b.crm);
  return c
}
B.kk = w("wq");

function u6(a) {
  var b = 0,
      c = a.length,
      d = {
      Dd: -1640531527,
      De: -1640531527,
      c: 314159265
      },
      e;
  for (e = c; 12 <= e; e -= 12, b += 12) d.Dd += v6(a, b), d.De += v6(a, b + 4), d.c += v6(a, b + 8), Rxa(d);
  d.c += c;
  switch (e) {
  case 11:
    d.c += a[b + 10] << 24;
  case 10:
    d.c += (a[b + 9] & 255) << 16;
  case 9:
    d.c += (a[b + 8] & 255) << 8;
  case 8:
    d.De += v6(a, b + 4);
    d.Dd += v6(a, b);
    break;
  case 7:
    d.De += (a[b + 6] & 255) << 16;
  case 6:
    d.De += (a[b + 5] & 255) << 8;
  case 5:
    d.De += a[b + 4] & 255;
  case 4:
    d.Dd += v6(a, b);
    break;
  case 3:
    d.Dd += (a[b + 2] & 255) << 16;
  case 2:
    d.Dd += (a[b + 1] & 255) << 8;
  case 1:
    d.Dd += a[b + 0] & 255
  }
  return Rxa(d)
}

function Rxa(a) {
  var b = a.Dd,
      c = a.De,
      d = a.c,
      b = b - c - d,
      b = b ^ d >>> 13,
      c = c - d - b,
      c = c ^ b << 8,
      d = d - b,
      d = d - c,
      d = d ^ c >>> 13,
      b = b - c,
      b = b - d,
      b = b ^ d >>> 12,
      c = c - d,
      c = c - b,
      c = c ^ b << 16,
      d = d - b,
      d = d - c,
      d = d ^ c >>> 5,
      b = b - c,
      b = b - d,
      b = b ^ d >>> 3,
      c = c - d,
      c = c - b,
      c = c ^ b << 10,
      d = d - b,
      d = d - c,
      d = d ^ c >>> 15;
  a.Dd = b;
  a.De = c;
  return a.c = d
}
function v6(a, b) {
  return w6(a[b + 0]) + (w6(a[b + 1]) << 8) + (w6(a[b + 2]) << 16) + (w6(a[b + 3]) << 24)
}
function w6(a) {
  return 127 < a ? a - 256 : a
};

function x6(a, b, c, d) {
  P.call(this);
  this.B = a;
  this.A = b;
  this.D = c;
  this.o = d
}
H(x6, P);
B = x6.prototype;
B.dq = k;
B.getId = w("B");
B.getUrl = w("D");
B.submit = function() {
  var a = $v(this.A).getElementById("gccform");
  this.b = window.setTimeout(E(this.QR, this), 3E4);
  a.submit()
};

function Sxa(a) {
  a.b && (window.clearTimeout(a.b), a.b = 0)
}
B.QR = function() {
  this.b = 0;
  this.dq = new q6(this.o);
  this.P("Tb")
};
B.L = function() {
  Sxa(this);
  Li(this.A);
  delete this.A;
  x6.J.L.call(this)
};

function y6(a) {
  this.A = a
}
H(y6, uc);
y6.prototype.b = function(a) {
  for (var b = [], c = n, d = n, e = 0, f = 0; f < a.length; f++) {
    var h = a[f];
    b.push(h.Ma());
    var l = h.ab,
        c = c ? c.min(l.start) : l.start,
        d = d ? d.max(l.end) : l.end,
        e = e ? Math.min(e, h.fh()) : h.fh()
  }
  return new z6(this.A, b, c, d, e)
};
y6.prototype.L = function() {
  y6.J.L.call(this);
  K(this.A)
};

function z6(a, b, c, d, e) {
  P.call(this);
  this.A = a;
  this.D = b;
  this.H = c;
  this.F = d;
  this.C = e;
  this.o = []
}
H(z6, r6);
z6.prototype.start = function() {
  z6.J.start.call(this);
  if (this.D.length) {
    var a = this.A.F,
        b;
    for (b in a) {
      var c = Txa(this.D, b);
      if (c.length) {
        var d = ++this.A.B,
            e = a[b],
            f = d,
            h = c,
            l = Tg(new Date(this.C)).toString(),
            h = "[1," + f + ",[" + h.join(",") + "]," + this.H.toString() + "/" + this.F.toString() + "," + l + "," + this.A.C + "]",
            f = [];
        f.push('<form autocomplete=off id=gccform method=POST action="', I(e), '"><input name="text" value="', I(h), '">');
        "2" == this.A.D && f.push('<input name="', "dn", '" value="', I(this.A.A), '">');
        (h = this.A.K) && f.push('<input name="', "urlpart", '" value="', I(h), '">');
        f.push('<input name="', "postbackUrl", '" value="', I(this.A.H), '">');
        f.push("</form>");
        f = f.join(t);
        f = nK(this.A.o, f);
        f.id = f.name = "gccif" + d;
        c = new x6(d, f, e, c);
        e = E(this.K, this);
        c.addEventListener("Rb", e);
        c.addEventListener("Sb", e);
        c.addEventListener("Tb", e);
        this.A.b[d] = c;
        this.o.push(d);
        c.submit()
      }
    }
  } else this.b = {}, this.B = {}, this.vd()
};
z6.prototype.kk = function() {
  return this.b ? new q6(Dc(this.B), Cc(this.b)) : n
};

function Txa(a, b) {
  return Cb(a, function(a) {
    return sb(a, b)
  })
}
z6.prototype.K = function(a) {
  var b = a.target;
  if ("Tb" == a.type) this.Wp();
  else {
    var c = b.dq;
    this.b = this.b || {};
    a = c.o;
    for (var c = Lc(c.b), d = 0; d < a.length; d++) {
      var e = a[d];
      this.b[e.getId()] = e
    }
    if (this.B) for (var f in this.B) f in c || delete this.B[f];
    else this.B = c;
    b = b.getId();
    f = this.A;
    K(f.b[b]);
    delete f.b[b];
    Mb(this.o, b);
    this.o.length || (b = !Fc(this.b), Fc(this.X) || b ? this.vd() : this.nh())
  }
};
z6.prototype.L = function() {
  z6.J.L.call(this);
  for (var a = 0; a < this.o.length; a++) {
    var b = this.A,
        c = this.o[a];
    K(b.b[c]);
    delete b.b[c]
  }
  this.b = {};
  this.X = {}
};

function A6(a, b, c, d, e, f) {
  this.F = a;
  this.D = b || "1";
  this.H = c;
  this.A = e;
  this.K = d;
  this.o = f;
  this.B = 0;
  this.b = {}
}
H(A6, uc);
A6.prototype.L = function() {
  A6.J.L.call(this);
  for (var a in this.b) K(this.b[a]);
  delete this.b;
  delete this.o
};

function Uxa(a) {
  this.A = S(a).$f();
  this.o = Af(a)
}
Uxa.prototype.b = function(a) {
  for (var b = [], c = n, d = n, e = 0; e < a.length; e++) {
    var f = a[e];
    b.push(f.Ma());
    f = f.ab;
    c = c ? c.min(f.start) : f.start;
    d = d ? d.max(f.end) : f.end
  }
  return new B6(this.o, this.A, b, c, d)
};

function B6(a, b, c, d, e) {
  P.call(this);
  this.D = b;
  this.A = a;
  this.b = c;
  this.B = d;
  this.o = e
}
H(B6, r6);
B = B6.prototype;
B.Vt = n;
B.start = function() {
  B6.J.start.call(this);
  if (this.b.length) {
    var a = Nw(this.B, new Rg(0, 0, 0)).toString(),
        b = Nw(this.o, new Rg(0, 0, 0)).toString();
    this.A.send("gccuseravail", ["stim", a, "etim", b, "email", this.b.join(","), "ctz", this.D, "hl", "en"], 33, E(this.$J, this), E(this.ZJ, this))
  } else this.Vt = new q6, this.vd()
};
B.kk = w("Vt");
B.$J = function(a) {
  if (a) {
    for (var b = new ne(this.b), c = 0; c < a.length; c++) b.remove(a[c].user);
    for (var b = b.Hb(), c = [], d = 0; d < a.length; d++) for (var e = a[d], f = e.user, f = f.toLowerCase(), e = e.det, h = 0; h < e.length; h++) {
      var l = e[h];
      c.push(Vxa(f, l.start, l.end, l.stat, l.loc || t, l.subj || t))
    }
    a = new q6(b, c)
  } else a = new q6;
  this.Vt = a;
  this.vd()
};
B.ZJ = function() {
  this.nh()
};

function Vxa(a, b, c, d, e, f) {
  var h = u6(d2(ub(a, b, c, e, f)));
  b = mk(b);
  c = mk(c);
  h = new Sf(String(h), b, c);
  h.lf(d);
  h.Tc = e;
  h.setTitle(f);
  h.Ra = a;
  h.Hd = 1 == d || 3 == d ? 0 : 1;
  return h
};

function C6(a) {
  this.A = new s6(a);
  var b = Rh(a);
  if (b.A) this.o = new Uxa(a);
  else {
    var c = T("gccFrame"),
        d = b.o || {},
        e = Rh(a),
        b = new A6(d, "1" == e.D ? "1" : "2", WI() + "/mailslot", Dv() != n ? "b/" + Dv() : n, b.getName(), c);
    a = S(a).$f();
    b.C = a;
    this.o = new y6(b)
  }
}
H(C6, uc);
C6.prototype.b = function(a, b) {
  return new D6(this, a, b)
};
C6.prototype.L = function() {
  K(this.A);
  K(this.o)
};

function D6(a, b, c) {
  P.call(this);
  this.F = a;
  this.D = this.F.A.b(b, c);
  this.B = this.F.o.b(b, c);
  this.o = new Q(this);
  this.A = 1;
  this.b = this.C = 0
}
H(D6, r6);
B = D6.prototype;
B.mh = n;
B.Bk = n;
B.Ah = n;
B.wm = function() {
  return 2 == this.A
};
B.start = function() {
  D6.J.start.call(this);
  Lu(this.o, this.D, "V", this.OC, k);
  Lu(this.o, this.D, "W", this.KC, k);
  this.D.start();
  this.wm() && (Lu(this.o, this.B, "V", this.OC, k), Lu(this.o, this.B, "W", this.KC, k), Lu(this.o, this.B, "X", this.ZR, k), this.B.start())
};
B.OC = function(a) {
  a.target == this.D ? this.mh = this.D.kk() : a.target == this.B && (this.Bk = this.B.kk());
  this.C++;
  this.C + this.b == this.A && this.vd()
};
B.KC = function() {
  this.b++;
  this.b == this.A ? this.nh() : this.C + this.b == this.A && this.vd()
};
B.ZR = function() {
  this.b++;
  this.b == this.A ? this.nh() : this.C + this.b == this.A && this.Wp()
};
B.kk = function() {
  if (this.C + this.b != this.A || this.mh == n && this.Bk == n) return n;
  if (this.Ah) return this.Ah;
  if (this.wm() && this.mh && this.Bk) {
    var a = this.mh.o,
        b = Lc(this.mh.b);
    Bb(this.Bk.o, function(c) {
      c.Aa() in b && a.push(c)
    });
    var c = [];
    Bb(this.Bk.b, function(a) {
      a.toLowerCase() in b && c.push(a)
    });
    this.Ah = this.mh;
    this.Ah.b = c;
    this.Ah.o = a
  } else {
    var d = this.mh ? this.mh : this.Bk;
    this.wm() ? c = d.b : c = [];
    this.Ah = d;
    this.Ah.b = c
  }
  return this.Ah
};
B.L = function() {
  K(this.o);
  K(this.D);
  K(this.B);
  D6.J.L.call(this)
};
B.vd = function() {
  Yd(this.o);
  D6.J.vd.call(this)
};
B.nh = function() {
  Yd(this.o);
  D6.J.nh.call(this)
};
B.Wp = function() {
  Yd(this.o);
  D6.J.Wp.call(this)
};

function E6(a, b, c, d, e, f, h, l) {
  P.call(this);
  this.X = a;
  this.C = b;
  this.b = b.F;
  this.Ia = c;
  this.da = d;
  this.K = e;
  this.ka = f;
  this.D = h;
  this.ea = l;
  this.W = this.B = this.O = this.A = n;
  this.Z = {};
  this.F = p;
  this.o = new Q(this);
  this.o.I(this.b, "h", this.pH);
  this.o.I(this.C.A.b, v, this.oH)
}
H(E6, P);
B = E6.prototype;
B.L = function() {
  K(this.o);
  K(this.D);
  E6.J.L.call(this)
};

function F6(a, b, c, d) {
  c.ta() >= d.ta() || (c = new Uf(c, d), a.push(new n6(b, c, 0)))
}
B.pH = function(a) {
  var b = a.o;
  (b.R || []).length + (b.f || []).length + (b.g || []).length + (b.Q || []).length && this.A && (!this.H && G6(this, this.A) ? (a = fh(a, "R"), Wxa(this, Xxa(this, this.A), a, k)) : H6(this, this.A), this.P("Vb"));
  (b.f || []).length && this.B && I6(this, this.B)
};
B.oH = function() {
  this.A && H6(this, this.A)
};

function Xxa(a, b) {
  b = new Uf(b.start.va(), b.end.va());
  return a.A ? L1(a.A, b) ? a.A : a.A.Wi(b) : b
}
function G6(a, b) {
  return !!a.O && L1(a.O, b)
}
function J6(a, b) {
  return !!a.W && L1(a.W, b)
}

function H6(a, b, c) {
  Wxa(a, Xxa(a, b), K6(a), c)
}
function I6(a, b) {
  var c = Yxa,
      d;
  d = b;
  d = new Uf(d.start.va(), d.end.va());
  d = a.B ? L1(a.B, d) ? a.B : a.B.Wi(d) : d;
  c(a, d)
}

function Wxa(a, b, c, d) {
  if (!a.F) {
    for (var e = [], f = 0, h = c.length; f < h; ++f) if (108 != c[f].Bb()) {
      var l = c[f].email,
          q = a.Z[c[f].o];
      q ? (e.push(new n6(l, q.ab, q.fh())), F6(e, l, b.start.va(), q.ab.start.va()), F6(e, l, q.ab.end.va(), b.end.va())) : F6(e, l, b.start.va(), b.end.va())
    }
    e.length && (e = a.Ia.b(e, a.ka), e instanceof D6 && d && (e.A = 2), a.A = b, d = E(a.pA, a, b, c), Lu(a.o, e, "V", d, k), Lu(a.o, e, "W", a.QL, k), b = E(a.RL, a, b, c), Lu(a.o, e, "X", b, k), a.H = e, e.start())
  }
}
B.pA = function(a, b, c) {
  this.P(c);
  c = c.target;
  if (this.H == c) {
    this.H = n;
    c = c.kk();
    var d = c.o;
    this.b.Eb();
    try {
      Zxa(this, a, b, c)
    } finally {
      this.F = m;
      Fc(c.A) || (this.F = p);
      try {
        this.b.xb()
      } finally {
        this.F = p
      }
    }
    this.K.add(d);
    this.O = a;
    this.P("Ub")
  }
};

function Zxa(a, b, c, d) {
  var e = d.A,
      f = d.H,
      h = d.b,
      l = d.K;
  $xa(a, b, c, d);
  var q = Td(a.X).isEnabled(35);
  zc(e, function(a, b) {
    q && d.B ? Bb(a, function(a) {
      var b = d.B[a],
          c = this.b.getItem(a);
      c ? Bb(b, function(a) {
        Vra(this.b, c, a)
      }, this) : this.b.add(new TD(a, k, k, k, k, k, k, m, b))
    }, this) : (this.b.remove(b), ED(this.b, Db(a, function(a) {
      return new TD(a)
    })))
  }, a);
  q && (zc(e, function(a, b) {
    D1(this.b, b, m)
  }, a), Bb(f, function(a) {
    D1(this.b, a, p)
  }, a), Bb(d.X, function(a) {
    D1(this.b, a, p)
  }, a), Bb(d.F, function(a) {
    D1(this.b, a, p);
    Wra(this.b, a)
  }, a));
  b = 0;
  for (c =
  l.length; b < c; ++b) a.b.setVisible(l[b], p);
  e = a.b;
  b = 0;
  for (c = h.length; b < c; ++b) {
    var r = ZD(e, h[b]);
    r && Yra(a.b, r)
  }
  f = Cb(f, function(a) {
    a = this.b.getItem(a);
    return !!a && !VD(a)
  }, a);
  0 < f.length && (h = 1 == f.length ? "You do not have permission to see the members of this group. You can invite this group to the event, but you cannot view the members' schedules and you will not receive individual replies from the members. Also, event will not keep up with changes in group membership." : "You do not have permission to see the members of these groups. You can invite these groups to the event, but you cannot view the members' schedules and you will not receive individual replies from the members. Also, event will not keep up with changes in group membership.", b = new tK("comment-dialog"), b.Vd = m, DK(b, LK()), b.setTitle("Group members are hidden"), vK(b, ["<b>", f.join(", "), "</b><br><br>", h].join(t)), b.setVisible(m));
  0 < l.length && Hb(l, function(a) {
    a = this.b.getItem(a);
    return !!a && !VD(a)
  }, a) && (b = new tK("comment-dialog"), b.Vd = m, DK(b, LK()), vK(b, "We did not fetch the schedules for all your guests. Click on a name to try again for that guest."), b.setVisible(m))
}

function $xa(a, b, c, d) {
  var e = d.C,
      f = d.D;
  d = d.fh();
  for (var h = 0, l = c.length; h < l; ++h) {
    var q = c[h].email;
    if (q in e) {
      var r = e[q],
          s = ZD(a.b, r);
      if (s) a.b.remove(q), c[h] = s;
      else {
        var u = a.b.getItem(q),
            s = a.b.Da(q),
            x = u,
            u = new TD(r, x.ea, x.email == x.Zb ? r : x.Zb, x.Rg, x.hf, x.ka, x.wa.Qb()),
            x = UD(x);
        u.wa.set(x);
        a.b.remove(q);
        a.b.add(u);
        a.b.setVisible(r, s);
        c[h] = u
      }
      q = r
    }
    if (r = f[q]) {
      u = a.b;
      x = q;
      s = r;
      u.A[x] = s;
      delete u.b[x];
      var z = u.b[s];
      if (z != x) if (z && ZD(u, z)) bh(u, "T", u.getItem(x)), u.remove(x), u.getItem(z) || u.add(ZD(u, z));
      else if (u.b[s] = x, u = u.getItem(x)) u.o = s;
      s = a.D;
      u = s.b[r];
      C(u) ? (x = s.b[q], C(x) && (s.o[x.Fb()] -= 1), s.b[q] = u) : (x = N1(s, q), s.b[r] = x)
    }
    q = c[h].o;
    a.Z[q] = new n6(q, b, d || 0)
  }
}
B.QL = function(a) {
  this.H == a.target && (this.H = n, this.P(a))
};
B.RL = function(a, b, c) {
  this.P(c);
  this.pA(a, b, c)
};

function Yxa(a, b) {
  if (!a.F && Td(a.X).isEnabled(126)) {
    a.B = b;
    var c = S(a.X).$f(),
        d = E(function() {
        this.P("Wb");
        this.W = b
      }, a),
        e = new Uf(b.start, Mg(b.end, 1));
    a.da.A(K6(a), c, e, d)
  }
}
function aya(a, b, c) {
  c = c ? [c] : L6(a);
  a = p6(a.K, b, c);
  return Cb(a, function(a) {
    return Q1(a)
  })
}

function K6(a, b) {
  var c = a.C,
      d = a.b,
      e = l1(c.C);
  b && (e = Cb(e, function(a) {
    return d.Da(a.email)
  }, a));
  Rb(e, gE);
  c = c.A.A;
  if (d.contains(c.Ma()) || $ra(d, c.Ma())) return e;
  c = new TD(c.Ma(), 5, Kf(c));
  return Ob(c, e)
}
function L6(a) {
  var b = a.C.A.b.get();
  a = a.b;
  var c = Db(aE(a), function(a) {
    return a.o
  }, []);
  return a.contains(b) ? c : Ob(b, c)
}
function bya(a, b) {
  var c = ZD(a.b, b);
  if (c) return c;
  c = a.C.A.A;
  return c.Ma() == b ? new TD(b, 0, c.tc() || b, k, k, c.Bb()) : new TD(b)
}
B.Ee = w("C");

function cya() {}
function dya(a, b, c) {
  a = a.o(c, b);
  if (a == n) return m;
  if (!a.length || !a[0].contains(b.start)) return p;
  c = a[0].end;
  for (var d = 0; d < a.length; d++) {
    if (c.ta() >= a[d].start.ta()) c = a[d].end.max(c);
    else
    break;
    if (b.end.ta() <= a[d].end.ta()) return m
  }
  return p
};

function M6(a, b) {
  this.F = a;
  this.b = b;
  this.C = this.D = this.B = n;
  if (this.b.start.Y == this.b.end.Y) {
    var c = this.b.start.hour,
        d = this.b.end.hour;
    this.B = 7 > c ? new Ig(0, c, this.b.start.minute, this.b.start.second) : new Ig(0, 7, 0, 0);
    this.D = 19 <= d ? new Ig(0, 24, 0, 0) : new Ig(0, 19, 0, 0)
  }
}
H(M6, cya);
M6.prototype.A = function(a, b, c, d) {
  this.C = c;
  this.F.A(a, b, c, d)
};
M6.prototype.o = function(a, b) {
  var c = this.F.o(a, b);
  if (c) return c;
  if (!this.B) return n;
  c = b || this.C;
  if (!c) return n;
  for (var d = c.start.va(), e = Hg(c.end.va(), d) + 1, f = [], h = 0; h < e; h++) {
    var l = Mg(d, h),
        q = Gg(l);
    hk(q, this.B);
    l = Gg(l);
    hk(l, this.D);
    q = new Uf(q.Ea(), l.Ea());
    M1(c, q) && f.push(q)
  }
  return f
};

function N6(a, b, c) {
  P.call(this);
  this.b = a;
  this.B = b;
  this.F = c;
  this.o = new Q(this);
  this.A = this.C = n;
  this.o.I(this.b, "Ub", this.D);
  this.o.I(this.b, "Vb", this.D);
  this.o.I(this.b, "Wb", this.D);
  this.o.I(this.B, v, this.H);
  eya(this, fya(b))
}
H(N6, P);
N6.prototype.L = function() {
  K(this.o)
};
N6.prototype.D = function() {
  gya(this)
};
N6.prototype.H = function() {
  eya(this, fya(this.B))
};

function fya(a) {
  a = vz(a).start.Ea();
  var b = jk(a.year, a.month, a.Y + 7, a.hour, a.minute, a.second).Ea();
  return new Uf(a, b)
}

function eya(a, b) {
  a.A = new Uf(b.start.Ea(), b.end.Ea());
  var c = new Uf(b.start.va(), Mg(b.end, 1));
  J6(a.b, c) || I6(a.b, c);
  G6(a.b, c) || H6(a.b, c);
  gya(a)
}

function gya(a) {
  var b = vz(a.B),
      c = L6(a.b),
      d, e = a.b;
  d = p6(e.K, a.A, L6(e));
  var e = a.A,
      f = new M6(a.F, b),
      h = d.sort(Lxa);
  d = e;
  b = new Uf(b.start.Ea(), b.end.Ea());
  d = new Uf(d.start.Ea(), d.end.Ea());
  if (h == n || 0 == h.length) h = [];
  else {
    for (var l = [], q = 0; q < h.length; q++) {
      var r = h[q];
      if (r) {
        var s;
        s = r;
        s = new Uf(s.Fa().Ea(), s.Za().Ea());
        Q1(r) && M1(d, s) && (0 == l.length ? l.push(s) : (r = l[l.length - 1], M1(r, s) ? (l.pop(), l.push(r.Wi(s))) : l.push(s)))
      }
    }
    h = l
  }
  if (0 == h.length) d = [d];
  else {
    l = [];
    q = d.start.ta();
    r = d.end.ta();
    for (s = 0; s < h.length; s++) {
      var u =
      h[s],
          x = u.start.ta();
      0 == s && q < x && (d.start.equals(u.start) || l.push(new Uf(d.start, u.start)));
      s < h.length - 1 && (x = h[s + 1], u.end.equals(x.start) || l.push(new Uf(u.end, x.start)));
      x = u.end.ta();
      s == h.length - 1 && r > x && (u.end.equals(d.end) || l.push(new Uf(u.end, d.end)))
    }
    d = l
  }
  if (0 == d.length) b = [];
  else {
    h = [];
    l = Yf(b.end, b.start);
    q = d[0];
    r = b.start;
    r && r instanceof Qg && (0 == r.minute || 30 == r.minute) && 0 == r.second || b.start.ta() != q.start.ta() || (b = new Uf(b.start, l), L1(q, b) && h.push(b));
    for (b = 0; b < d.length; b++) {
      q = d[b];
      r = q.start;
      0 != r.minute && 30 != r.minute || 0 != r.second ? (r = Gg(r), r.second = 0, 30 >= r.minute ? r.minute = 30 : hk(r, new Ig(0, 0, 60 - r.minute, 0)), r = r.Ea()) : r = r.Ea();
      u = r;
      r = l;
      s = [];
      for (x = new Uf(u, r); L1(q, x);) s.push(x), u = Gg(u), hk(u, Jxa), u = u.Ea(), x = new Uf(u, r);
      h = h.concat(s)
    }
    b = h
  }
  d = [];
  for (h = 0; h < b.length; h++) {
    l = b[h];
    q = m;
    for (r = 0; r < c.length; r++) if (!dya(f, l, c[r])) {
      q = p;
      break
    }
    q && d.push(l)
  }
  a.C = new Kxa(e, d);
  a.P("Xb")
};

function O6(a, b, c, d, e, f) {
  Y.call(this);
  this.Z = a;
  this.F = b;
  this.W = b.b;
  this.H = c;
  this.O = d || "ep-st";
  this.o = e || new l6(this.Z, d);
  this.ra = f || new fO;
  this.B = this.K = p;
  this.C = n
}
H(O6, Y);
var hya = new V('<div class="${className}"><span role="link" class="lk" tabindex="0" id="${linkId}">' + I("Suggested times") + "</span></div>");
B = O6.prototype;
B.ia = function() {
  this.H && (O6.J.ia.call(this), this.o.ia(), this.V = Kw(jm(hya, {
    linkId: this.oa("link"),
    className: this.O
  }).toString()))
};
B.$ = function() {
  O6.J.$.call(this);
  P6(this);
  this.o.$();
  this.o.update(this.H.C);
  this.C = this.fa("link");
  Ku(Z(this), this.C, jA, this.sR);
  Z(this).I(this.F, v, this.pR);
  Z(this).I(this.H, "Xb", this.qR);
  Z(this).I(this.o, "Qb", this.rR)
};
B.Na = function() {
  this.B && Q6(this);
  O6.J.Na.call(this);
  this.o.Na()
};
B.Jz = function(a) {
  switch (a.keyCode) {
  case 27:
    Q6(this);
    this.C.focus();
    break;
  default:
    return
  }
  a.preventDefault();
  a.stopPropagation()
};
B.Iz = function(a) {
  a = a.target;
  Si(this.ra.G(), a) || Si(this.C, a) || Q6(this)
};
B.L = function() {
  this.A && this.b.Uc(this.A);
  K(this.ra);
  this.o.aa();
  O6.J.L.call(this)
};
B.sR = function(a) {
  if (this.B) Q6(this);
  else {
    this.B = m;
    if (!this.A) {
      this.A = Ei("div", this.O + "-popup");
      this.b.appendChild(this.A, this.o.G());
      var b = this.ra,
          c = this.A;
      b.A = c;
      gO(b, c);
      this.ra.Ug(this.G());
      this.ra.Qo = p;
      oH(this.ra.o, 0, 2, k, -10);
      gx(this.ra.ra, p);
      this.ra.setVisible(p);
      this.ra.render()
    }
    this.ra.setVisible(m);
    this.o.focus();
    Z(this).I(document, "mousedown", this.Iz);
    Z(this).I(new gy(this.A), "key", this.Jz);
    a.preventDefault()
  }
};

function Q6(a) {
  a.B = p;
  a.o.blur();
  a.ra.setVisible(p);
  Z(a).b(document, "mousedown", a.Iz);
  Z(a).b(new gy(a.A), "key", a.Jz)
}
B.qR = function() {
  P6(this);
  this.o.update(this.H.C);
  this.B && this.o.focus()
};
B.pR = function() {
  P6(this)
};

function P6(a) {
  var b = vz(a.W),
      b = Yf(b.end, b.start),
      c = a.F.F.size(),
      d = a.F.D && a.F.D.D.get();
  a.K = 86400 > b.o && 1 < c && !d;
  U(a.G(), a.K);
  !a.K && a.B && Q6(a)
}
B.rR = function(a) {
  this.W.set(a.o);
  Q6(this);
  this.C.focus()
};

function R6(a, b, c, d, e, f, h, l, q, r, s) {
  r3.call(this, a, c, r || "ep-dp");
  this.o = c;
  b = c.ib;
  r = c.B;
  f = 3 == c.K;
  this.Ud = w3(this) && !PE(c) && 3 != r.b.get() && 4 != r.b.get();
  this.H = n;
  if (s) this.H = s;
  else if (w3(this)) {
    s = c.A.o.get();
    s = (s = Lj(Mj.M(), s)) && s.color ? s.color : Ch(ba);
    var u = this.oa("eventColors-label");
    this.H = new AP(s, r.D, k, k, u)
  }
  this.H && this.ha(this.H);
  this.Z = l || n;
  l || (l = r.B) && l.hb() && (this.Z = new R5(a, l, c.b));
  this.Z && this.ha(this.Z);
  this.ka = h || new j6(a, b, f);
  this.ha(this.ka);
  e = e ? new O6(a, c, e) : k;
  this.O = q || new c4(a, c, d, m, k, k, k, e, k, k);
  this.ha(this.O);
  this.cc = Td(a).isEnabled(97);
  a = q3(this.A);
  d = this.A.Z;
  q = this.A.Nl;
  if (w3(this) || d.get()) e = 2 == a ? "Click to add a location" : k, Td(this.C).isEnabled(73) ? (h = this.C, c = new wP(d, e), d = 1 == a ? n : new l3(h, d, q, e), a = new p3(c, a, d)) : a = vP(d, a, e), this.W = a, this.ha(this.W);
  a = q3(this.A);
  c = w3(this);
  d = this.A.ya;
  if (c || d.get()) this.K = bua(this.A.ya, a, 2 == a ? "Click to add a description" : k, new f3(c, 3)), this.ha(this.K);
  oua(this)
}
var iya, jya, kya, lya, mya, nya, oya, pya, qya, rya, sya, tya, S6, T6, uya;
H(R6, r3);
var vya = /^(https?:\/\/mail.google.com\/mail)(\/u\/\d+)?(\/.*\/[0-9a-f]+)$/;
B = R6.prototype;
B.ia = function() {
  var a = this.b,
      b = this.oa(t),
      a = a.U("div", this.B),
      c = zo(this.C),
      d = {
      id: b
      },
      e = {
      prefix: this.B
      },
      f = {
      id: b,
      prefix: this.B
      },
      h = t;
  c && (u3.put("maplink", this.o.zx), h = u3.toString());
  t3.put("maplink", h);
  var l = this.o.B,
      h = l.B,
      q = this.H != n,
      r = c && h && h.hb(),
      s = lya,
      u = mya,
      x, c = this.ka;
  (h = !c.A.isEmpty()) || (h = k6(c) && c.O);
  x = h;
  var z = {
    id: b,
    start: '<span id="' + b + 'privacySharingLink" class=lk>',
    end: "</span>",
    hclink: FN(34580)
  },
      c = this.B,
      h = this.W ? jm(t3, f) : t,
      A;
  A = this.o.H;
  var G = this.o.$b;
  A = 0 != uD(A) ? 3 == uD(A) ? S6 : T6 : G.b.A ? S6 : T6;
  A = jm(A, f);
  if (TG(this.o.Wb())) G = t;
  else {
    var G = this.oa(t),
        M = this.o.Wb();
    PE(this.o) || x1(this.o) ? (M = w3(this) && !PE(this.o) ? jm(jua, {
      id: G
    }) : t, G = jm(iua, {
      id: G,
      changeOwnerHtml: M,
      prefix: this.B
    })) : G = jm(hua, {
      id: G,
      owner: I(Kf(M)),
      prefix: this.B
    })
  }
  var N;
  var M = this.o.B,
      X = M.K,
      $ = M.O,
      ca = this.o.xG,
      M = ca && ca.getUrl(),
      ca = ca && ca.getTitle();
  if (X || M) {
    var ua, pa = p;
    M ? ((N = vya.exec(M)) ? (ua = Ph(this.C), X = N[1] + "/u/" + (ua.B || 0) + N[3]) : X = n, ua = X || M, N = ca, pa = !! X) : X && (ua = "//mail.google.com/mail/u/" + (Ph(this.C).B || 0) + "/?#all/" + encodeURIComponent(X), N = $, pa = m);
    N = jm(uya, {
      id: b,
      prefix: this.B,
      icon: pa ? "email-icon" : "link-icon",
      title: pa ? "This event was created from an email." : "This event was created from a web page.",
      eventSourceUrl: ua,
      eventSourceTitle: N || (pa ? "Open invitation email" : "Open URL")
    })
  } else N = this.oa(t), ua = this.A.ay(), M = this.A.Wb(), N = ua.Ma() != M.Ma() ? jm(kua, {
    id: N,
    content: I(Kf(ua)),
    prefix: this.B
  }) : t;
  ua = this.K ? jm(lua, f) : t;
  M = x ? jm(oya, f) : t;
  x = x ? t : jm(pya, d);
  e = q || r ? jm(mua, e) : t;
  q = q ? jm(qya, f) : t;
  r = r ? jm(rya, f) : t;
  s = l.W ? jm(s, f) : t;
  f = l.F ? jm(u, f) : t;
  l = l.F ? jm(sya, z) : t;
  d = this.Ud ? jm(tya, d) : t;
  u = {
    id: this.oa(t),
    prefix: this.B
  };
  z = this.o;
  u = z.yG ? jm(jya, u) : z.Xa && UE(z) && 3 == z.K && !Cc(z.F.Ia).length ? jm(kya, u) : t;
  a.innerHTML = jm(nya, {
    id: b,
    prefix: c,
    locationHtml: h,
    rtcHtml: A,
    calendarHtml: G,
    creatorOrSourceHtml: N,
    descriptHtml: ua,
    attachmentsHtml: M,
    attachmentsPromoHtml: x,
    moreOptionsHtml: t,
    reminderDividerHtml: e,
    eventColorHtml: q,
    remindersHtml: r,
    conflictResolutionHtml: s,
    privacyHtml: f,
    privacyHelpHtml: l,
    publishHtml: d,
    overrides: u
  });
  this.V = a
};

function U6(a, b, c) {
  if (b = a.fa(b)) Ku(Z(a), b, jA, c), b.tabIndex = 0;
  return b
}
B.$ = function() {
  R6.J.$.call(this);
  var a = w3(this),
      b = Z(this);
  this.O.xa || this.O.render(this.fa("guests"));
  if (x1(this.o)) {
    if (!this.F.xa) {
      var c = this.fa("calendar");
      Px(this.F, c)
    }
    a && b.I(this.F, v, this.rG)
  }
  this.fa("reminders") && x3(this, this.Z, "reminders");
  x3(this, this.W, "location");
  x3(this, this.K, "descript");
  x3(this, this.H, "eventColors");
  x3(this, this.ka, "attachments");
  if (!this.ea && (c = T(this.oa("rtc-row")), U(c, p), (c = this.o.H) && !tD(c))) {
    var d = n;
    PE(this.o) || (d = ru(Yp, this.o.getId()));
    t: {
      var c = this.C,
          e = d,
          d = this.o,
          f = this.o.K,
          h = d.H;
      if (vG(h)) {
        f = f || 2;
        2 == f && 3 == uD(h) && (f = 1);
        if (3 == f) h = new Y;
        else {
          i: {
            var h = d.H,
                l = h.getUrl(e, d);
            if (l == n) h = t;
            else {
              var q = 3 == uD(h),
                  r = R();
              if (q && (r = osa(r, e, d))) {
                h = r;
                break i
              }
              h = (new lP).render(vsa, {
                link: l,
                xo: q,
                yo: nP(h)
              })
            }
          }
          if (!h) {
            c = n;
            break t
          }
          h = new i2(h)
        }
        1 == f ? c = new p3(h, f) : (c = new W1(c, e, d), O(d, v, E(c.Qj, c)), c = new p3(h, f, c))
      } else c = 3 == uD(h) ? '<span class="rtc-hangout-icon-disabled goog-inline-block"></span><em>Google+ video calls aren\'t enabled for your organization</em>' : "<em>This event uses a restricted video call service.</em>", c = new p3(new i2(c), 1)
    }
    if (this.ea = c) this.ha(this.ea),
    this.xa && (x3(this, this.ea, "rtc"), (c = T(this.oa("rtc-row"))) && U(c, m))
  }
  a && (gua(this.W, this.oa("location-label")), gua(this.K, this.oa("descript-label")), x1(this.o) && Ej(this.F.G(), "labelledby", this.oa("calendar-label")));
  this.wa = U6(this, "conflictResolutionModeAvailable", this.Es);
  this.Ha = U6(this, "conflictResolutionModeBusy", this.Es);
  this.ya = U6(this, "conflictResolutionModeBlocking", this.Es);
  this.Xa = U6(this, "privacyDefault", this.zo);
  this.ib = U6(this, "privacyPublic", this.zo);
  this.bb = U6(this, "privacyPrivate", this.zo);
  this.Ja = U6(this, "privacySecret", this.zo);
  a = this.fa("privacySecret");
  c = V6(this);
  a && U(a, c);
  a = this.fa("privacySecret-wrapper");
  c = V6(this);
  a && U(a, c);
  this.tb = this.fa("privacyHelpDefault");
  this.Wb = this.fa("privacyHelpPublic");
  this.Ib = this.fa("privacyHelpPrivate");
  this.Td = this.fa("privacyHelpSecret");
  this.Sc = this.fa("privacyHelpSecretDisabledResources");
  U6(this, "publish", this.uG);
  U6(this, "privacySharingLink", this.vG);
  U6(this, "overriden", this.tG);
  U6(this, "specialized", this.wG);
  b.I(this.o.B, v, this.Jx);
  b.I(this.o.C, v, this.sG);
  (a = this.fa("maplink")) && U(a, !! this.o.zx);
  b.I(this.o.A.b, v, this.Ix);
  this.Ix();
  this.Jx()
};
B.Na = function() {
  K(this.zb);
  this.zb = n;
  R6.J.Na.call(this)
};
B.Jx = function() {
  var a = this.o.B,
      b = a.o.get(),
      a = a.b.get(),
      c = 4 == a;
  this.wa && (this.wa.checked = 1 == b, this.Ha.checked = 0 == b, this.ya.checked = 2 == b, this.wa.disabled = c, this.Ha.disabled = c, this.ya.disabled = c);
  this.Xa && (this.Xa.checked = 1 == a, this.ib.checked = 2 == a, this.bb.checked = 3 == a, this.Ja.checked = 4 == a, wya(this), xya(this, a))
};
B.sG = function() {
  wya(this)
};

function wya(a) {
  a.Ja.disabled = !Mra(a.o) || !Kb($D(a.o.C.b));
  var b = !Kb($D(a.o.C.b)) && V6(a);
  U(a.Sc, b)
}

function V6(a) {
  var b = 4 == a.o.B.b.get(),
      c = a.o.Ml;
  return a.cc && (b || c) && Mra(a.o)
}
B.pS = function() {
  this.P(new W6("mc"))
};
B.rG = function() {
  var a = this.F.B;
  a && "changeowner" == xG(this, a.get()) && I2(this.o, E(this.pS, this))
};
B.Es = function() {
  var a = 1;
  this.Ha.checked ? a = 0 : this.ya.checked && (a = 2);
  this.o.B.o.set(a)
};
B.zo = function() {
  var a = 1;
  if (this.ib.checked) a = 2;
  else if (this.bb.checked) a = 3;
  else if (this.Ja.checked) {
    var a = 4,
        b = this.o.B;
    b.o.set(1);
    b.A.set(GD(p, C1(b), B1(b)))
  }
  xya(this, a);
  this.o.B.b.set(a)
};

function xya(a, b) {
  U(a.tb, 1 == b);
  U(a.Td, 4 == b);
  U(a.Ib, 3 == b);
  U(a.Wb, 2 == b)
}
B.vG = function() {
  qI(this.o.A.o.get(), 1)
};
B.uG = function() {
  this.P("ac")
};
B.tG = function() {
  this.P("Zb")
};
B.wG = function() {
  this.P("Yb")
};
B.Ix = function() {
  var a = this.fa("conflictResolutionModeBlocking");
  if (a) {
    var b = this.fa("conflictResolutionModeBlocking-wrapper"),
        c = this.o.A.A,
        c = this.o.B.H && 100 == c.Bb();
    U(a, c);
    U(b, c)
  }
};
B.cw = function() {
  iya || (nya = new V('<div class=${prefix}-cont><div class=${prefix}-panel><div class=${prefix}-guests id="${id}guests"></div><div class=${prefix}-details><table class=${prefix}-dt>${locationHtml}${rtcHtml}${calendarHtml}${creatorOrSourceHtml}${descriptHtml}${attachmentsHtml}${moreOptionsHtml}${reminderDividerHtml}${eventColorHtml}${remindersHtml}${conflictResolutionHtml}${privacyHtml}<tr><th></th><td class="${prefix}-privpub ${prefix}-dt-td">${privacyHelpHtml}</td></tr><tr><th></th><td class="${prefix}-publish ${prefix}-dt-td">${publishHtml}</td></tr><tr><td colspan=2>${overrides}</td></tr></table>${attachmentsPromoHtml}</div></div></div>'), T6 =
  new V(v3("Video call", '<div class="${prefix}-rtc" id="${id}rtc"></div>', "rtc")), S6 = new V(v3("Video call", '<div class="${prefix}-rtc" id="${id}rtc"></div>', "rtc")), uya = new V(v3("Source", '<div class="${prefix}-${icon} goog-inline-block" title="${title}"></div><a class="${prefix}-opt-event-source" id="${id}eventsource" href="${eventSourceUrl}" target="_blank">${eventSourceTitle}</a>', "eventsource")), oya = new V(v3("Attachment", '<div class="${prefix}-opt-attachments" id="${id}attachments"></div>', "attachments")), pya = new V('<div id="${id}attachments"></div>'), rya = new V(v3("Reminders", '<div class="${prefix}-opt-reminders" id="${id}reminders"></div>', "reminders")), lya = new V(s3 + pua("Show me as", "conflictResolutionMode", ["Available", "Busy", "Blocking"], ["Available", "Busy", "Busy (decline invitations)"], [1, 0, 2], 0)), mya = new V(pua("Privacy", "privacy", ["Default", "Public", "Private", "Secret"], ["Default", "Public", "Private", "Secret"], [1, 2, 3, 4], 2)), jya = new V('<div class="${prefix}-overriden">You made changes in the past that are not visible to other guests. <span id="${id}overriden" class=lk-button> Restore original event details. </span></div>'), kya = new V('<div class="${prefix}-overriden">This event has been changed from the series. <span id="${id}specialized" class=lk-button> Undo changes. </span></div>'), sya = new V('<div><span id="${id}privacyHelpPublic">Making this event public will expose all event details to anyone who has access to this calendar, even if they can\'t see details of other events.</span><span id="${id}privacyHelpDefault">By default this event will follow the ${start} sharing settings ${end} of this calendar: event details will be visible to anyone who can see details of other events in this calendar.</span><span id="${id}privacyHelpPrivate">Making this event private will hide all event details from anyone who has access to this calendar, unless they have "Make changes to events" level of access or higher.</span><span id="${id}privacyHelpSecret">Making this event secret will make it visible only to you.</span>&nbsp;&nbsp;<a href="${hclink}" class="lk" target="_blank">Learn more</a><span id="${id}privacyHelpSecretDisabledResources"><br /><br />You cannot make this event secret because you booked a room or another resource.</span></div>'), tya = new V('<div><span id="${id}publish" class=lk-button>Publish event</span></div>'), qya = new V(v3("Event color", '<div id="${id}eventColors"></div>', "eventColors")), R6.J.cw.call(this), iya = m)
};

function yya(a, b) {
  var c = [],
      d = Rh(a),
      e = d.getName(),
      f = b.A.A,
      h = yD.M(),
      f = h1(h, f.Ma());
  e && f == e && (c = Db(y1(b.C), function(a) {
    return a.email
  }), c = bsa(h, c, d));
  return F(zya, c)
}

function zya(a, b, c, d) {
  a.length ? (c = F(Aya, c, d), 10 < a.length && (d = a.length - 10, a = Qb(a, 0, 10), a.push("(+" + d + " more)")), d = "The following attendees are from outside your organization.<br> Are you sure you would like to invite them?" + ("<ul><li>" + a.join("<li>") + "</ul>"), a = (new nw).set("yes", "Invite external guests", m).set("cancel", "Continue editing"), ku(new Js, c, "Attendees from outside your organization", d, a)) : c()
}
function Aya(a, b, c) {
  "yes" == c.key ? a() : b()
};

function Bya(a, b, c, d, e) {
  c = a.B.A;
  if (PE(a) || !c.Ba()) d();
  else if (1 == c.get()) {
    c = p;
    var f = a.F,
        h = f.size();
    1 == h ? c = f.Kb()[0] == a.A.b.get() : 1 < h && (c = m);
    c ? b(d, e) : d()
  } else d()
}
function Cya(a, b) {
  var c = (new nw).set("yes", "OK", m).set("no", "Cancel", p, m);
  ku(new Js, function(c) {
    "yes" == c.key ? a() : b()
  }, "Are you sure?", "You are about to allow event modification by guests. This will result in guests losing any overrides that they may have created. Continue?", c)
};

function X6(a) {
  P.call(this);
  this.o = new Q(this);
  this.o.I(a, "shortcut", this.b)
}
H(X6, P);
X6.prototype.L = function() {
  X6.J.L.call(this);
  K(this.o)
};
X6.prototype.b = function(a) {
  a = parseInt(a.o, 10);
  switch (a) {
  case 38:
    this.P("ep-ksh-back");
    break;
  case 39:
    this.P("ep-ksh-delete");
    break;
  case 40:
    this.P("ep-ksh-discard");
    break;
  case 41:
    this.P("ep-ksh-save");
    break;
  default:
    return
  }
  ep("ef_shortcut " + a)
};

function Dya(a) {
  Eb(dh(a), function(a) {
    return UD(a)
  }) && ep("ef_new_event_oa")
};

function Eya(a, b, c, d, e) {
  if (UE(a)) d();
  else if (PE(a) || !a.Ba()) d();
  else {
    c = a.B;
    var f = a.D;
    a.O.Ba() || a.b.Ba() || a.Z.Ba() || a.ya.Ba() || f && f.Ba() || c.o.Ba() || c.b.Ba() ? b(Kf(a.A.A), d, e) : d()
  }
}
function kz(a, b, c) {
  var d = (new nw).set("yes", "Continue", m).set("no", "Don't change the event", p, m);
  ku(new Js, function(a) {
    "yes" == a.key ? b() : c()
  }, "Are you sure?", lta(om(a)), d)
};

function Y6(a, b, c, d, e) {
  this.b = a;
  this.A = b;
  this.B = c;
  this.C = d || 5;
  this.o = new Z3(E(this.RK, this), E(this.QK, this), e)
}
H(Y6, uc);
B = Y6.prototype;
B.L = function() {
  this.o.aa();
  this.o = n;
  Y6.J.L.call(this)
};
B.start = function() {
  this.D = this.b.scrollTop;
  this.o.start()
};
B.stop = function() {
  this.o.stop()
};
B.RK = function(a) {
  return this.B(this.D, this.A, a)
};
B.QK = function(a) {
  if (Math.abs(this.A - a) < this.C) return this.b.scrollTop = this.A, m;
  var b = this.b.scrollTop;
  this.b.scrollTop = a;
  return this.b.scrollTop == b
};

function Z6(a, b) {
  Pm.call(this, a);
  this.A = b;
  this.b = [];
  this.o = 0;
  this.pf = 1
}
H(Z6, Pm);
Z6.prototype.F = function(a, b, c) {
  return 0 == a ? "ep-scg-busy-no" : .5 > a / c ? "ep-scg-busy-some" : "ep-scg-busy-very"
};

function Fya(a, b) {
  var c = b.va(),
      d = b.Lb();
  return c.ta() < a.ta() ? 0 : c.ta() >= Mg(a, 1).ta() ? 24 : d.hour + d.minute / 60
}

function Gya(a, b, c, d) {
  a.b = [];
  a.o = 0;
  a.pf = d;
  if (c && c.length) {
    b = Hya(b, c);
    Rb(b, function(a, b) {
      return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : 0
    });
    for (var e, f = d = 0; f < b.length; f++) d && (c = b[f][0] - e, 0 < c && a.b.push([e, c, d])), e = b[f][0], d += b[f][1], a.o = Math.max(a.o, d)
  }
}
function Hya(a, b) {
  for (var c = [], d = 0; d < b.length; d++) {
    var e = b[d];
    Q1(e) && (c.push([Fya(a, e.Fa()), 1]), c.push([Fya(a, e.Za()), -1]))
  }
  return c
}
Z6.prototype.B = function(a, b, c, d, e, f) {
  f.push("<td>");
  for (b = 0; b < this.b.length; b++) {
    c = this.b[b];.5 > c[1] && (c[1] = .5);
    e = "ep-scg-busy";
    var h = t,
        l = (this.A || this.F)(c[2], this.o, this.pf);
    this.A ? h = l : e += " ep-scg-busy-default " + l;
    f.push('<div class="' + e + '" style="top:', (c[0] - d) * a, "px; height:", c[1] * a, "px; width:", this.Ob, "px; " + h + '"></div>')
  }
  f.push("</td>")
};

function $6(a, b, c) {
  this.X = a;
  this.A = wi();
  this.O = b;
  this.da = this.A.Sa().body;
  this.H = Ze(Ye.M());
  this.C = c;
  this.o = new Q(this);
  this.B = new aq(E(this.Z, this), 250);
  this.D = new aq(E(this.K, this), 500);
  Iya.put("id", this.H);
  a = Du(this.A, Iya.toString());
  this.V = this.da.appendChild(a);
  this.F = new mI(0, 0);
  this.o.I(this.O, "mousemove", this.W)
}
H($6, uc);
$6.prototype.b = p;
$6.prototype.L = function() {
  this.o.aa();
  this.D.aa();
  this.B.aa();
  this.A.Sa().body.removeChild(this.V);
  $6.J.L.call(this)
};
$6.prototype.G = w("V");
$6.prototype.W = function(a) {
  this.F.b.x = a.clientX;
  this.F.b.y = a.clientY;
  this.b && Jya(this)
};

function Jya(a) {
  a.F.Ua(a.V, 1, Kya, vj(a.V))
}
var Kya = new gj(21, 5, 5, 21);
$6.prototype.K = function(a, b, c, d) {
  var e = [];
  E(this.C.ob, this.C);
  for (var f = Math.min(a.length, 5), h = Jd(this.X, 5), l = 0; l < f; l++) {
    var q = a[l],
        r = t;
    q.Db() || (r = this.C.Ul(Tf(q), m, m));
    var s = q.getTitle();
    s && r && (r = t + r + ":");
    var u;
    t: switch (q.Dc) {
    case 1:
    case 5:
      u = "Yes";
      break t;
    case 2:
    case 4:
      u = "No";
      break t;
    default:
      u = "Maybe"
    }
    var x = q.Bc,
        z = Hu(h, x),
        x = z ? Kf(z) : x;e.push(jm(Lya, {
      time: r,
      title: s,
      location: I(q.Tc),
      creatorMsg: sv(x) ? t : "<div>Created by: " + I(x) + "</div>",
      erstatus: u
    }))
  }
  5 < a.length && e.push(jm(Mya, {
    more: "+" + (a.length - 5) + " more"
  }));
  a = this.A.G("flyoverContent" + this.H);
  c = '<span class="flyover-content-name">' + om(c) + "</span>";
  d && (c = t + c + ":");
  a.innerHTML = jm(Nya, {
    title: c,
    summary: d || t,
    color: b.b,
    eventHtml: e.join(t)
  });
  Jya(this);
  this.b = m;
  this.V.style.visibility = "visible"
};
$6.prototype.Z = function() {
  this.V.style.visibility = "hidden";
  this.b = p;
  hv(this.V, 0, 0)
};
$6.prototype.Ka = function() {
  this.D.cancel();
  this.B.dh()
};
$6.prototype.Da = w("b");
var Iya = new V('<div class="flyover"><table cellpadding=0 cellspacing=0 class="flyover-table"><tr><td class="flyover-content"><div style="overflow:hidden" id="flyoverContent${id}"></div></td></tr></table></div>'),
    Nya = new V('<div class="flyover-content-title" style="background-color:${color}">${title} ${summary}</div>${eventHtml}'),
    Lya = new V('<div class="flyover-event"><div><div class="flyover-event-title">${time} ${title}</div><div>${location}</div>${creatorMsg}<div>Going? ${erstatus}</div></div></div>'),
    Mya = new V('<div class="flyover-event">${more}</div>');

function Oya(a, b) {
  for (var c = [], d = {}, e = 0; e < b.length; e++) {
    var f = b[e];
    f.Db() && Q1(f) && (f = f.Aa(), d[f] || (d[f] = m, c.push(Pya(e, a, f))))
  }
  return c
}

function Pya(a, b, c) {
  a = "anonym_" + a;
  if (Co) a = Va.btoa(a);
  else {
    a = d2(a);
    $a(a) || g(Error("encodeByteArray takes an array as a parameter"));
    tv();
    for (var d = pv, e = [], f = 0; f < a.length; f += 3) {
      var h = a[f],
          l = f + 1 < a.length,
          q = l ? a[f + 1] : 0,
          r = f + 2 < a.length,
          s = r ? a[f + 2] : 0,
          u = h >> 2,
          h = (h & 3) << 4 | q >> 4,
          q = (q & 15) << 2 | s >> 6,
          s = s & 63;
      r || (s = 64, l || (q = 64));
      e.push(d[u], d[h], d[q], d[s])
    }
    a = e.join(t)
  }
  d = new Qg(b.year, b.month, b.Y, 0, 0, 0);
  b = new Qg(b.year, b.month, b.Y, 24, 0, 0);
  b = new Sf(a, d, b);
  b.mc = c;
  b.Bc = c;
  b.Ra = c;
  b.Hd = 0;
  b.setTitle("busy");
  return b
};

function a7(a, b, c, d, e, f) {
  To.call(this, r1(xk(a)), b, c, d, new Jo(m));
  this.A = [];
  this.H = f;
  this.b.K = m;
  Td(a).isEnabled(126) && (b = E(this.O, this), this.b.da.push(b));
  this.X = Td(a).isEnabled(27);
  this.da = e
}
H(a7, To);
var b7 = new V('<th title="${title}" class="ep-scg-guestcell">${name}</th>'),
    Qya = new V('<td class="wk-tzlabel" style="width:${width}px">${label}</td>');
a7.prototype.F = function(a, b, c, d) {
  var e = a.b,
      f = [];
  a = [];
  1 > this.A.length ? (f.push(jm(b7, {
    title: t,
    name: this.B.Xp(d)
  })), this.o.b = a, po(this.o), this.o.b.push("<tr>")) : (Bb(this.A, function(a) {
    a = om(a.Zb);
    b7.put("title", a);
    b7.put("name", a);
    f.push(b7.toString())
  }), e = new lo(e, d, this.A.length, 200, 1, F(Rya, this.A)), this.o.b = a, no(e, this.o));
  this.o.b = n;
  for (var e = this.b.D, h = [], l = 0; l < e.length; l++) {
    var q = {
      width: e[l].Ob,
      label: I(e[l].D)
    };
    h.push(jm(Qya, q))
  }
  c7.put("headers", f.join(t));
  c7.put("allDay", a.join(t));
  c7.put("leadingPadding", Zn(this.b) + 0);
  c7.put("trailingPadding", cn());
  c7.put("tz", h.join(t));
  d.equals(Kg(c.year, c.month, c.Y)) ? c7.put("allDayClass", "ep-scg-allday ep-scg-allday-today") : c7.put("allDayClass", "ep-scg-allday");
  b.push(c7.toString())
};

function Rya(a, b) {
  for (var c = {}, d = a.length; d--;) c[a[d].o] = d;
  for (var e = {}, f = [], d = 0, h = b.length; d < h; d++) {
    var l = b[d],
        q = c[l.Aa()];
    q != k && (e[l.getId()] = q, f.push(l))
  }
  c = [];
  h = [];
  d = 0;
  for (q = a.length; d < q; ++d) c[d] = [], h[d] = [];
  d = 0;
  for (q = f.length; d < q; ++d) l = f[d], c[e[l.getId()]].push(new mo(l, 1, 0));
  return {
    Jy: c,
    Ly: h,
    Ky: f.length
  }
}
a7.prototype.C = function(a, b, c, d) {
  var e = a.b;
  a = a.o;
  var f = e.concat(a),
      h = Db(this.A, function(a) {
      return a.o
    });
  Gya(this.H, d, f, this.A.length);
  this.X && (a = Oya(d, e).concat(a));
  e = Qsa(a, h);
  this.b.H = b;
  this.b.render(e, d, c);
  this.b.H = n
};
a7.prototype.O = function(a, b, c, d) {
  if (a = this.da.o(this.A[a].email, new Uf(b, Hba))) {
    c = [];
    var e = 0,
        f;
    f = new Rg(0, 0, 0);
    f = $n(d, f);
    for (var h = m, l = 0; l < a.length; l++) {
      var q = a[l];
      if (q.start.va().ta() == b.ta()) {
        var e = $n(d, q.start) - e,
            r = Sya;
        r.put("top", f);
        r.put("height", e - f);
        c.push(r.toString())
      }
      if (q.end.va().ta() > b.ta()) {
        h = p;
        break
      }
      f = $n(d, q.end) - e
    }
    h && (r = Sya, r.put("top", f), r.put("height", 1008 - e - f), c.push(r.toString()));
    return "<div style=" + bo(d) + ">" + c.join(t) + "</div>"
  }
};
var Sya = new V('<div style="height:${height}px;top:${top}px;" class="ep-scg-nonworkinghours">&nbsp;</div>'),
    c7 = new V('<div class="ep-scg-guestheader" style="padding-right:${trailingPadding}px"><div style="padding-left:${leadingPadding}px;"><table cellpadding=0 cellspacing=0 class="ep-scg-guesttable"><tr>${headers}</tr></table></div><table collpadding=0 cellspacing=0 class=ep-scg-allday-cont><tr><td class="ep-scg-tz-header" style="width:${leadingPadding}px"><table cellpadding=0 cellspacing=0 class="wk-tzheader wk-weektop"><tr>${tz}</tr></table></td><td><table cellpadding=0 cellspacing=0 class="${allDayClass} wk-allday"><tr>${allDay}</tr></table></td></tr></table></div>');

function d7(a, b, c) {
  Y.call(this);
  this.o = a;
  this.Z = b;
  this.H = c || "ep-sac";
  this.O = this.H + "-sel";
  this.A = new Q(this)
}
H(d7, Y);
B = d7.prototype;
B.rb = y(p);
B.ia = function() {
  var a = this.b,
      b = a.U("div", this.H);
  this.V = b;
  this.K = a.U("span", "lk", "Go to event");
  b.appendChild(this.K);
  var c = [];
  c.push(" | ");
  c.push("Show guests");
  this.B = a.U("span", k, "all");
  c.push(": ");
  c.push(this.B);
  this.F = a.U("span", k, "required");
  c.push(" - ");
  c.push(this.F);
  this.C = a.U("span", k, "none");
  c.push(" - ");
  c.push(this.C);
  this.W = a.U("span", k, c);
  b.appendChild(this.W);
  Tya(this);
  this.A = new Q(this);
  this.A.I(this.o, "h", this.XH)
};
B.$ = function() {
  d7.J.$.call(this);
  var a = Z(this);
  a.I(this.K, "click", this.XS);
  a.I(this.B, "click", this.VS);
  a.I(this.C, "click", this.YS);
  a.I(this.F, "click", this.ZS)
};
B.L = function() {
  K(this.A);
  d7.J.L.call(this)
};
B.XH = function() {
  Tya(this)
};

function Tya(a) {
  var b;
  b = a.o.size() == Dc(a.o.o).length;
  var c = Uya(a),
      d;
  d = Dc(a.o.o);
  d = 0 == d.length || 1 == d.length && d[0] == a.Z;
  U(a.W, 1 < a.o.size());
  e7(a, a.B, b);
  e7(a, a.C, d);
  e7(a, a.F, c)
}
function e7(a, b, c) {
  c ? jn(b, "lk", a.O) : jn(b, a.O, "lk")
}

function Uya(a) {
  var b = dh(a.o),
      c = Eb(b, function(a) {
      return !UD(a)
    }, a);
  a = !Eb(b, function(a) {
    return UD(a) == this.o.Da(a.email)
  }, a);
  return !c || a
}
B.XS = function() {
  this.P("cc")
};
B.VS = function() {
  this.P("dc")
};
B.ZS = function() {
  this.P("ec")
};
B.YS = function() {
  this.P("fc")
};

function f7(a, b) {
  this.o = a;
  this.b = b
}
H(f7, xz);
B = f7.prototype;
B.move = function(a, b) {
  this.b(new Uf(b, Yf(a.Za(), a.Fa())))
};
B.kB = function(a, b) {
  this.b(new Uf(a.Fa(), b))
};
B.create = function(a, b, c) {
  this.b(Sy(a));
  c()
};
B.hF = D;
B.kG = w("o");
B.nv = function() {
  return this.o.di ? 60 : ai(Xf(this.o))
};

function g7(a, b) {
  Gj.call(this, a);
  this.b = b;
  this.o = b.D
}
H(g7, Gj);
B = g7.prototype;
B.Ck = function(a) {
  return O1(N1(this.o, a.Aa()))
};
B.of = function(a) {
  var b = N1(this.o, a.Aa());
  a = ji(a);
  ni(a) && Hh(b) && (b = Ch(b.o, "#000000"));
  return b
};
B.Pj = function() {
  return F(ag, E(this.SF, this))
};
B.SF = function(a, b) {
  var c = a.Aa(),
      d = b.Aa();
  if (c == d) return 0;
  c = bya(this.b, c);
  d = bya(this.b, d);
  return gE(c, d)
};
B.Vf = function(a) {
  return a.getId() != this.b.Ee().getId()
};
B.oi = function(a) {
  return this.Vf(a)
};
B.Yj = function(a) {
  return !this.Vf(a)
};
B.fg = function(a) {
  return !this.Vf(a)
};
B.Wl = y(p);
B.vk = function() {
  return !this.Zh()
};

function h7() {
  this.bc = []
}
H(h7, km);
h7.prototype.b = m;
h7.prototype.Dp = function() {
  i7.put("top", this.top);
  i7.put("offset", this.Am);
  i7.put("offsetUnit", this.Bm);
  i7.put("edge", this.Kt);
  i7.put("width", this.width);
  i7.put("widthUnit", this.Lt);
  i7.put("height", this.height - 1);
  i7.put("classes", this.bc.join(" "));
  i7.put("content", this.b ? '<div class="resizer"><div class="rszr_icon sc-rszr_icon">&nbsp;</div></div>' : t);
  return i7.toString()
};
var i7 = new V('<div class="${classes} sc" style="top:${top}px;${edge}:${offset}${offsetUnit};width:${width}${widthUnit};"> <dl style="height:${height}px;">${content}</dl></div>');

function j7(a, b, c) {
  this.o = a;
  this.b = b;
  this.F = c
}
H(j7, An);
j7.prototype.A = function(a) {
  var b = new h7,
      c = a.event;
  b.b = this.b;
  var d = this.F(c);
  b.bc[1] = d ? "sc-conflict" : "sc-normal";
  Cn(this, b, a);
  a = ln(c);
  b.bc[0] = a;
  return b.Dp()
};
j7.prototype.B = function(a, b) {
  (Ot(a, "sc") ? a : Pt(this.o, "*", "sc", a)[0]).getElementsByTagName("dl")[0].style.height = b - 1 + "px"
};

function k7(a, b, c, d, e) {
  Xo.call(this, b, c, d, e);
  this.H = Td(a).isEnabled(27)
}
H(k7, Xo);
k7.prototype.C = function(a, b, c, d, e) {
  if (this.H) {
    var f = a.o;
    a = a.b;
    for (var h = [], l = 0; l < a.length; l++) {
      var q = a[l].Aa();
      Jb(h, q) || h.push(q)
    }
    l = new o6;
    l.add(a);
    for (var q = [], r = 0; r < e; r++) var s = Mg(d, r),
        u = new Uf(s, Jg(s)),
        u = p6(l, u, h),
        q = q.concat(Oya(s, u));
    f = q.concat(f);
    a = new Io(a, f)
  }
  k7.J.C.call(this, a, b, c, d, e)
};

function l7(a, b, c, d, e, f, h, l, q, r, s, u) {
  Y.call(this);
  this.tb = a;
  this.B = u || "ep-scg";
  u = r1(xk(a));
  var x = uk(a);
  this.Ud = S(a);
  this.gf = this.Ud.Nj();
  this.zb = u;
  this.Ml = x;
  this.wo = Jd(a, 5);
  this.K = b;
  this.o = b.Ee();
  this.Wb = this.o.b;
  this.Z = this.o.Ja;
  this.A = c;
  this.Nl = b.D;
  this.cc = b.ea;
  this.bb = d || new dB(["parallel", "week"]);
  this.ha(this.bb);
  this.ib = e || new YA(this.bb, this.A);
  dsa(this.bb);
  this.Td = f || new SA(a, this.A, this.B);
  this.ha(this.Td);
  this.wa = h || new d7(this.o.F, this.o.A.b.get(), k);
  this.ha(this.wa);
  this.Xa = c = l || new g7(a, this.K);
  s || (s = Vya(this));
  q || (q = new Wn(u, c, "scTg"), Yn(q, s), q = new k7(a, u, "scWk", new oo(u, c, m), q));
  this.O = q;
  r || (r = new Z6(8), q = new Wn(u, c, "scTg", m, "scTg-nogutter"), Yn(q, Ob(s, r)), r = new a7(a, "scTg", new oo(u, c, m), q, b.da, r));
  this.ka = r;
  this.Xh = new j7(this.b, !this.cc, hd);
  this.Sc = new j7(this.b, !this.cc, E(this.mH, this));
  ao(this.O.b, "sc-grid", E(function(a) {
    return a.event.getId() == this.o.getId()
  }, this), this.Sc);
  this.C = new Q(this);
  this.C.I(this.Wb, v, this.lH);
  this.Z && this.C.I(this.Z, v, this.kH);
  this.Ib = {}
}
H(l7, Y);
B = l7.prototype;
B.pp = n;
B.Mz = n;
B.Lz = n;
B.Tt = n;
B.St = n;
B.ui = n;
B.Pr = p;
B.Uw = p;
B.Vw = p;
B.L = function() {
  K(this.ib);
  K(this.Ja);
  K(this.C);
  K(this.pp);
  l7.J.L.call(this)
};
B.rb = y(p);
B.ia = function() {
  var a = this.b,
      b = a.U("div", this.B);
  this.V = b;
  var c = a.U("div", this.B + "-nr1");
  b.appendChild(c);
  var d = a.U("a", {
    "class": this.B + "-help",
    href: FN(178219) + "&ctx=tltp",
    target: "_blank"
  }, "How to use this tool");
  c.appendChild(d);
  this.wa.render(c);
  c = a.U("div", this.B + "-nr2");
  b.appendChild(c);
  this.bb.render(c);
  if ((d = Rh(this.tb)) && (!Fc(d.o || {}) || d.A)) {
    d = this.b;
    this.W = d.U("span", {
      className: this.B + "-rg-swh button-strip goog-inline-block"
    });
    this.W.innerHTML = Wya;
    c.appendChild(this.W);
    d = d.U("span", this.B + "-rg button-strip goog-inline-block");
    c.appendChild(d);
    var e = Oy.M();
    this.H = new Ky("Refresh all", e);
    this.H.vb("Check availability of guests not using Google Calendar");
    this.ha(this.H);
    this.H.render(d)
  }
  this.Td.render(c);
  this.ya = a.U("div", this.B + "-header");
  b.appendChild(this.ya);
  c = t;
  ic && (c = "wbkt");
  this.F = a.U("div", c + " " + (this.B + "-grid"));
  this.ii();
  b.appendChild(this.F);
  ic && (a = a.U("div", {
    id: "btmBorderSch",
    "class": "wk-border"
  }), b.appendChild(a));
  this.C.I(this.A, v, this.qH);
  this.C.I(this.wa, "cc", this.sH);
  this.C.I(this.wa, "dc", this.uH);
  this.C.I(this.wa, "ec", this.wH);
  this.C.I(this.wa, "fc", this.vH);
  this.C.I(this.ib, v, this.rH);
  this.C.I(this.K, "Vb", this.ii);
  this.C.I(this.K, "Ub", this.ii);
  this.C.I(this.K, "Wb", this.ii);
  this.C.I(window, "resize", this.tH)
};
B.hW = function() {
  this.P("gc")
};
B.tH = function() {
  this.xa && J && (document.body.className = document.body.className)
};
B.qH = function() {
  Xya(this);
  this.ii()
};

function Xya(a) {
  var b = Vya(a);
  a.O && Yn(a.O.b, b);
  a.ka && Yn(a.ka.b, b)
}
B.sH = function() {
  m7(this)
};
B.uH = function() {
  Zra(this.o.F, m)
};
B.wH = function() {
  var a = this.o.F;
  Bb(dh(a), function(b) {
    a.setVisible(b.email, !UD(b))
  })
};
B.vH = function() {
  var a = this.o.A.b.get();
  Zra(this.o.F, p, [a])
};
B.rH = function() {
  this.ii()
};

function Yya(a, b, c) {
  return (a = Kv(c, F(Lv, "ca-evp"), a)) && b == Ot(a, "drag-chip-wrapper") ? a : n
}
B.KJ = function(a) {
  a = Zv(a);
  (a = this.Ib[a]) && a.getId() != this.o.getId() && (Zya(this, [a], a.Aa()), this.Pr = m)
};
B.LJ = function() {
  this.ui.Ka();
  this.Pr = p
};
B.MJ = function() {
  n7(this) || $ya(this)
};
B.OJ = function(a, b) {
  if (n7(this)) {
    var c;
    c = b.clientX;
    var d = vu(I1(o7(this))),
        d = lv(d.G());
    c = zu(vu(I1(o7(this))), c - d.x);
    c = K6(this.K, m)[c] || n;
    this.Ha != c && (this.Ha = c, $ya(this))
  }
};
B.NJ = function() {
  this.Ha = n;
  this.Pr || this.ui.Ka()
};

function $ya(a) {
  var b = a.Ha && a.Ha.o,
      c = vz(a.o.b);
  (c = aya(a.K, c, b)) && c.length ? (c.sort(E(a.RP, a)), Zya(a, c, b, 1 == c.length ? "1 conflict" : t + c.length + " conflicts")) : a.ui.Ka()
}

function Zya(a, b, c, d) {
  var e;
  if (c) {
    e = O1(N1(a.Nl, c));
    var f = Hu(a.wo, c);
    c = f ? Kf(f) : (f = a.o.F.getItem(c)) ? p1(f) : c
  } else e = uh(39), c = d || "Conflicts", d = k;
  a = a.ui;
  a.B.cancel();
  a.b ? a.K(b, e, c, d) : a.D.dh(b, e, c, d)
}
B.ii = function() {
  var a = [],
      b = [];
  this.xa && aza(this);
  var c = n7(this),
      d;
  d = this.A;
  d = kk(d.first, Vl(d));
  var e = this.K;
  d = p6(e.K, d, L6(e));
  c || d.push(this.o.Ha);
  d.sort(this.Xa.Pj());
  e = d;
  this.Ib = {};
  for (var f = 0; f < e.length; f++) this.Ib[gb(e[f])] = e[f];
  var f = this.A,
      e = f.first,
      h = Vl(f),
      f = $h(this.Ml);
  c ? (c = K6(this.K, m), this.ka.A = c, d = eo(d, e, 1)[0], d = Uo(this.ka, d, f, e, 1, p), a.push(d.Ds), this.ka.A = []) : (c = this.B + "-weektop", d = Uo(this.O, d, f, e, h, p), a.push('<div class="' + c + '">', d.Ds, "</div>"));
  b.push(d.Hx);
  this.ya.innerHTML = a.join(t);
  this.F.innerHTML = b.join(t);
  this.xa && (bza(this), a = this.b.G(Yo(this.O))) && (b = vj(this.b.G(Vo(this.O))).height, ij(a, "height", b + "px"));
  this.xa && this.H && this.H.Ta(m)
};
B.lH = function() {
  this.Uw = m;
  m7(this, m)
};
B.kH = function() {
  Xya(this);
  this.Vw = m;
  m7(this, m)
};

function Vya(a) {
  if (a.Z && qE(a.Z)) {
    var b = [];
    n1(a.Z) && b.push(m1(a.Z));
    b.push(rE(a.Z));
    a = Um(b, J1(a.A), a.gf, a.zb, cza, dza)
  } else a = Um(a.Ud.Ed(), J1(a.A), a.gf, a.zb, Xm, Ym);
  return a
}

function m7(a, b) {
  var c = vz(a.o.b),
      d = c.start.va();
  a.A.focus = d;
  a.xa && (M1(J1(a.A), c) ? b && a.ii() : a.A.rd(d), c = 1 <= vz(a.o.b).duration.Y, d = vz(a.o.b), !c && a.A.contains(d.start.va()) && eza(a))
}
function aza(a) {
  K(a.ea);
  a.ea = n;
  K(a.ui);
  a.Ha = n;
  a.Pr = p;
  a.ui = n;
  K(a.Tt);
  a.Tt = n;
  K(a.St);
  a.St = n;
  K(a.pp);
  K(a.Mz);
  K(a.Lz);
  Tw(a.F)
}
function n7(a) {
  return "parallel" == a.ib.b.o.Ca()
}
function o7(a) {
  return n7(a) ? a.ka : a.O
}

function bza(a) {
  var b = vu(I1(o7(a))),
      c = a.F.firstChild;
  b.V = c;
  b.b = wi(c);
  var c = n7(a),
      d = 1 <= vz(a.o.b).duration.Y;
  if (c) {
    var e = K6(a.K, m).length;
    fza(e, a.F, a.ya)
  } else a.F.style.overflowX = t, a.ya.style.overflowX = t;
  if (!a.cc) {
    var e = {},
        f = a.o.Ha;
    e[gb(f)] = f;
    f = new f7(f, E(a.Wb.set, a.Wb));
    a.Tt = new Yz(a.tb, b, e, E(a.Nz, a, a.Xh), a.Xa, f);
    if (!n7(a)) {
      var h = a.A;
      a.St = new Sz(a.ya, new Bz(a.b.G(Vo(a.O)), new Pp(h.focus, h.first, 1, Vl(h))), e, a.O.o, a.Xa, m, f)
    }
  }
  e = a.G();
  a.ui = new $6(a.tb, e, a.zb);
  a.ea = new lA(e);
  rA(a.ea, F(Yya, e, p), E(a.KJ, a), E(a.LJ, a));
  rA(a.ea, F(Yya, e, m), E(a.MJ, a), E(a.NJ, a), E(a.OJ, a));
  1 < Vl(a.A) && (qA(a.ea, Bw, E(a.JJ, a)), rA(a.ea, Bw, ww, vw));
  c && !d && (a.pp = a.Nz(a.Sc, a.o.Ha), a.pp.ep(b));
  b = ln(a.o.Ha);
  b = Pt(a.b, "*", b, a.G());
  a.Mz = gza(a, b[0] || n);
  a.Lz = gza(a, b[1] || n)
}
function gza(a, b) {
  if (!b) return n;
  1 <= vz(a.o.b).duration.Y ? en(b, "drag-chip") : (b = b.firstChild, b.style.position = "relative");
  var c = new I5(b, "sc-");
  c.o || (c.o = new Z3(E(c.B, c), E(c.A, c), 20), c.o.start());
  return c
}
B.JJ = function(a) {
  a = Aw(a);
  this.A.focus = a;
  this.ib.tf("parallel")
};
B.Nz = function(a, b) {
  o7(this);
  return new Ez(b, a, 42, m)
};

function eza(a, b) {
  var c = a.o.b.get(),
      d = c.start.Ea(),
      e = c.end.Ea();
  d.va().equals(e.va()) || (e = Nw(d.va(), new Rg(23, 59, 0)));
  c = [];
  a.A.contains(d) && c.push($f(d) - 60);
  a.A.contains(e) && c.push($f(e) + 60);
  c.length && (d = vu(I1(o7(a))), d = Ho(d, a.F.clientHeight, c, a.F.scrollTop), b ? a.F.scrollTop = d : a.F.scrollTop != d && (K(a.Ja), a.Ja = new Y6(a.F, d, function(a, b, c) {
    c = Math.pow(.5, c / 150);
    return Math.round(a * c + b * (1 - c))
  }), a.Ja.start()))
}
B.$ = function() {
  l7.J.$.call(this);
  bza(this);
  this.H && Z(this).I(this.H, "action", this.hW);
  this.Uw || this.Vw ? m7(this, m) : eza(this, m)
};
B.Na = function() {
  aza(this);
  this.Vw = this.Uw = p;
  l7.J.Na.call(this)
};

function fza(a, b, c) {
  30 * a > b.offsetWidth ? (b.style.overflowX = "scroll", c.style.overflowX = "hidden", a *= 30, b.firstChild.style.width = a + "px", c.firstChild.style.width = a + "px", O(b, "scroll", function() {
    c.scrollLeft = b.scrollLeft
  })) : (b.style.overflowX = t, c.style.overflowX = t)
}
B.mH = function(a) {
  return !!aya(this.K, Tf(a)).length
};
B.RP = function(a, b) {
  return this.Xa.SF(a, b) || ag(gd(0), a, b)
};

function hza(a) {
  a.W && (a.W.className = a.W.className.replace(a.B + "-rg-swh", a.B + "-rg-swv"))
}
var Wya = '<img src="' + Ow("spinner.gif") + '" alt="" height=22 width=22 style="vertical-align:middle" >',
    dza = new Wm("tg-times-start", "tg-time-start", "tg-time-start-last"),
    cza = new Wm("tg-times-end", "tg-time-end", "tg-time-end-last");

function p7(a, b, c, d, e, f, h) {
  Y.call(this);
  this.W = a;
  this.B = d || new c4(a, b.Ee(), b.D, p, k, k, k, k, k, k);
  this.ha(this.B);
  this.o = e || new l7(a, b, c);
  this.ha(this.o);
  this.A = b;
  this.H = c;
  this.F = h || "ep-sp"
}
H(p7, Y);
B = p7.prototype;
B.rb = y(m);
B.ia = function() {
  var a = this.b,
      b = a.U("div", this.F);
  this.V = b;
  this.O = a.U("div", this.F + "-sched");
  this.K = a.U("div", this.F + "-guests");
  a = a.U("div", this.F + "-panel", this.K, this.O);
  b.appendChild(a)
};
B.$ = function() {
  p7.J.$.call(this);
  this.o.xa || this.o.render(this.O);
  this.B.xa || this.B.render(this.K);
  this.C && this.C.B();
  var a = Rh(this.W);
  if (a && (!Fc(a.o || {}) || a.A)) {
    a = Z(this);
    a.I(this.o, "gc", this.AH);
    a.I(this.A, "V", this.Ys);
    a.I(this.A, "W", this.Ys);
    a.I(this.A, "X", this.Ys);
    a = this.o;
    a.H && a.H.Ta(p);
    var b = this.A,
        a = b.C.A.A.Ma(),
        b = b.b;
    if (b.contains(a) && b.Da(a) ? 1 < aE(b).length : 1 <= aE(b).length) hza(this.o), a = kk(this.H.first, Vl(this.H)), H6(this.A, a, m)
  }
  this.P("show")
};
B.L = function() {
  K(this.B);
  K(this.o);
  p7.J.L.call(this)
};
B.AH = function() {
  var a = this.o;
  a.H && a.H.Ta(p);
  hza(this.o);
  a = kk(this.H.first, Vl(this.H));
  H6(this.A, a, m)
};
B.Ys = function(a) {
  a = a.target;
  a.wm && a.wm() && (a = this.o, a.W && (a.W.className = a.W.className.replace(a.B + "-rg-swv", a.B + "-rg-swh")))
};

function W6(a) {
  L.call(this, a)
}
H(W6, L);

function q7(a) {
  L.call(this, "nc");
  this.o = a
}
H(q7, W6);
q7.prototype.getId = w("o");

function iza(a, b, c, d) {
  a.Xa && a.A.b.Ba() ? (a = F(jza, c, d), b = (new nw).set("yes", "Change for all events", m).set("cancel", "Cancel"), ku(new Js, a, "Change calendar for all events in series?", "It's not possible to change the calendar for a single event in a series. <p> Do you want to change the calendar for all events in this series?", b)) : c()
}
function jza(a, b, c) {
  "yes" == c.key ? a() : b()
};

function kza(a) {
  a = a || {};
  var b = t;
  a = "New members of groups invited to this event will not be automatically added. Please add them directly to the event. " + ('<a href="' + KI(II(a.tQ)) + '" target="_blank">Learn more</a>');
  return Nm(b + a)
};

function lza(a, b, c, d) {
  a = a.C;
  if (b = Pra(a)) b = KE(a) > a.D || LE(a);
  b ? mza(c, d) : c()
}
function mza(a, b) {
  var c = new lP,
      d, e;
  a ? (d = (new nw).set("ok", "Save", m).set("cancel", "Cancel", p, m), e = F(nza, a, b)) : (d = LK(), e = D);
  var f = new Js,
      h;
  c.b && c.b.getData();
  h = new YH(t + "This event has reached the guest limit for groups that automatically update", k);
  c.o();
  ku(f, e, String(h), c.render(kza, {
    tQ: "http://support.google.com/a/answer/" + encodeURIComponent("172013") + "?hl=en"
  }), d)
}

function nza(a, b, c) {
  switch (c.key) {
  case "ok":
    a();
    break;
  default:
    b()
  }
};

function r7(a) {
  return '<input name="rst" value="' + ZH(a.Bg) + '" type="radio" id="' + ZH(a.id) + '"' + (a.Gl ? " checked" : t) + '/><label for="' + ZH(a.id) + '" style="font-size:13px;color:#222;font-family:Arial,Sans-serif">' + ZH(a.label) + "</label>"
}

function oza(a) {
  return '<table cellpadding="0" cellspacing="5" border="0"><tr>' + (a.RF ? '<form id="' + ZH(a.jg) + 'response_form" method="POST" action="' + ZH(a.RF) + '">' : t) + '<td valign="top" class="ep-rc-title">Going?</td><td valign="top" class="ep-rc-font" style="white-space:nowrap">' + r7({
    id: a.jg + "yes_radio",
    Bg: 1,
    Gl: 1 == a.hd.Bg,
    label: "Yes"
  }) + '<span class="ep-rc-guest"> + <input id="' + ZH(a.jg) + 'rgu" name="rgu" class="ep-rc-guestcount"' + (a.hd.Xm ? ' value="' + ZH(a.hd.Xm) + '"' : t) + ' align="right" maxlength="2"/> guests</span><br>' + r7({
    id: a.jg + "maybe_radio",
    Bg: 3,
    Gl: 3 == a.hd.Bg,
    label: "Maybe"
  }) + "<br>" + r7({
    id: a.jg + "no_radio",
    Bg: 2,
    Gl: 2 == a.hd.Bg,
    label: "No"
  }) + '</td><td valign="top"><textarea id="' + ZH(a.jg) + 'rcomment" name="rcomment" class="ep-rc-notesinput">' + (a.hd.message ? ZH(a.hd.message) : t) + "</textarea></td>" + (a.YI ? '<td valign="top" align="right"><a id="' + ZH(a.jg) + 'spam" class="ep-rc-font" href="javascript:void(0)">Report spam</a></td>' : t) + (a.RF ? '<td valign="top"><input type="submit" value="Submit Response"/><br><span class="ep-rc-font ep-rc-dimmed"From: ' + ZH(a.hd.email) + "</span></td></form>" : t) + "</tr></table>"
}

function pza(a) {
  var b = '<table cellpadding="0" cellspacing="5"><tr><td valign="top"><img src="';
  switch (a.hd.Bg) {
  case 1:
    b += ZH(a.av) + "images/icon_color_yes.gif";
    break;
  case 3:
    b += ZH(a.av) + "images/icon_color_maybe.gif";
    break;
  case 2:
    b += ZH(a.av) + "images/icon_color_no.gif"
  }
  b += '" alt=""></td><td valign="top" class="ep-rc-font ep-rc-action">';
  switch (a.hd.Bg) {
  case 1:
    b += '<span class="ep-rc-yes">' + (a.Wk ? ZH(a.Wk) + " is going" : "Yes, I'm going") + "</span>";
    break;
  case 3:
    b += '<span class="ep-rc-maybe">' + (a.Wk ? ZH(a.Wk) + " might go" : "I might go") + "</span>";
    break;
  case 2:
    b += '<span class="ep-rc-no">' + (a.Wk ? ZH(a.Wk) + " is not going" : "No, I'm not going") + "</span>"
  }
  var c;
  a.hd.Xm || a.hd.message ? (c = a.hd, c = t + (c.Xm ? "(+" + ZH(c.Xm) + " guests) " : t) + (c.message ? '"' + ZH(c.message) + '"' : t)) : c = t;
  return b = b + ('</td><td valign="top" class="ep-rc-notessummary">' + c + "&nbsp; " + (a.MB ? '<a id="' + ZH(a.jg) + 'response_form_link" href="' + ZH(a.MB) + '" class="ep-rc-updatelink lk">' + (a.hd.message ? "Change your response" : "Add a note or change your response") + "</a>" : t) + "</td></tr></table>")
};

function s7(a, b, c) {
  Y.call(this);
  this.A = a;
  this.o = b;
  this.B = !c
}
H(s7, Y);
B = s7.prototype;
B.Np = n;
B.Lp = n;
B.Mp = n;
B.Ak = n;
B.rb = function(a) {
  return "DIV" == a.tagName
};
B.Ya = Oa("V");
B.ia = function() {
  this.V = this.b.U("DIV", {
    id: this.getId()
  })
};
B.$ = function() {
  s7.J.$.call(this);
  var a = this.o,
      b = zo(this.A),
      b = !this.B && b;
  U1(this.G(), oza, {
    hd: Tra(a),
    YI: b,
    jg: this.oa(t)
  });
  this.Np = this.fa("yes_radio");
  this.Lp = this.fa("maybe_radio");
  this.Mp = this.fa("no_radio");
  this.Ak = this.fa("rgu");
  t7(this, 1 == a.b.get());
  var c = this.fa("rcomment"),
      a = new e3(a.A, "Add a note", p, new f3(p, 3, 3));
  this.ha(a);
  Px(a, c);
  a = Z(this);
  a.I(this.Np, "click", this.eJ);
  a.I(this.Lp, "click", this.aJ);
  a.I(this.Mp, "click", this.bJ);
  a.I(this.Ak, v, this.cJ);
  b && a.I(this.fa("spam"), "click", this.dJ);
  a.I(this.o, v, this.$I);
  b = yo(this.A);
  Xd(a, b, "m", this.ZI, p, this)
};
B.Na = function() {
  s7.J.Na.call(this);
  qza(this)
};

function t7(a, b) {
  var c = a.Ak;
  b ? c.removeAttribute("disabled") : c.setAttribute("disabled", m);
  ij(c, "background-color", b ? "#fff" : "#ddd")
}
function qza(a) {
  a.Np = n;
  a.Lp = n;
  a.Mp = n;
  a.Ak = n
}
B.$I = function() {
  var a = this.o,
      b = a.b.get();
  this.Np.checked = 1 == b;
  this.Lp.checked = 3 == b;
  this.Mp.checked = 2 == b;
  this.Ak.value = a.o.get() || t
};
B.dJ = function() {
  zo(this.A) && this.P(new W6("oc"))
};
B.eJ = function() {
  this.o.b.set(1);
  t7(this, m)
};
B.aJ = function() {
  this.o.b.set(3);
  t7(this, p)
};
B.bJ = function() {
  this.o.b.set(2);
  t7(this, p)
};
B.cJ = function() {
  var a = this.Ak,
      b = a.value.replace(/\D+/g, t) || "0",
      b = parseInt(b, 10);
  a.value = b;
  this.o.o.set(b)
};
B.ZI = function(a) {
  var b = this.fa("spam");
  b && (a.Pa ? (gn(b, "ui-disabled"), b.tabIndex = 0) : (en(b, "ui-disabled"), b.tabIndex = -1))
};
B.L = function() {
  qza(this);
  s7.J.L.call(this)
};

function u7(a, b, c) {
  Y.call(this);
  this.o = a;
  this.A = b;
  this.B = !! c
}
H(u7, Y);
B = u7.prototype;
B.rb = function(a) {
  return "DIV" == a.tagName
};
B.Ya = Oa("V");
B.ia = function() {
  this.V = this.b.U("DIV", {
    id: this.getId()
  })
};
B.$ = function() {
  u7.J.$.call(this);
  this.zB()
};
B.zB = function() {
  if (this.xa) {
    var a = this.A,
        b = this.B ? Ju(a.D) : n,
        c = zo(this.o) ? Ow() : t;
    U1(this.G(), pza, {
      hd: Tra(a),
      MB: "#",
      Wk: b,
      jg: this.oa(t),
      av: c
    });
    b = Z(this);
    Yd(b);
    b.I(this.fa("response_form_link"), "click", this.tO);
    b.I(a, v, this.zB)
  }
};
B.tO = function() {
  this.P("rc")
};

function v7(a, b, c, d) {
  Y.call(this);
  this.C = b;
  d = new u7(a, b, d);
  this.ha(d);
  a = new s7(a, b, c);
  this.ha(a);
  this.B = d;
  this.o = a
}
H(v7, Y);
B = v7.prototype;
B.rb = function(a) {
  return "DIV" == a.tagName
};
B.Ya = Oa("V");
B.ia = function() {
  this.V = this.b.U("DIV", {
    id: this.getId(),
    className: "ep-rc-div"
  })
};
B.$ = function() {
  v7.J.$.call(this);
  w7(this)
};
B.fa = function(a) {
  var b = this.B;
  return b.xa ? b.fa(a) : (b = this.o) && b.xa ? b.fa(a) : n
};

function w7(a, b) {
  if (a.xa) {
    var c = Z(a),
        d = a.B,
        e = a.C.b;
    b || a.F || 0 == e.get() ? (d.xa && (Yd(c), K(d), a.b.Rj(a.G())), c = a.o, c.xa || Px(c, a.G()), a.A && (c = sj(a.G()), d = vj(a.G()), hv(a.A.$d, 0, c.y + d.height)), a.F = m) : d.xa || (Px(d, a.G()), c.I(d, "rc", a.wI), c.I(e, v, a.xI))
  }
}
B.wI = function() {
  w7(this, m)
};
B.xI = function() {
  w7(this)
};

function x7(a, b, c, d) {
  Y.call(this);
  this.o = a;
  this.A = b;
  this.H = !! c;
  this.C = d || "tp"
}
H(x7, Y);
x7.prototype.ia = function() {
  this.V = this.b.U("div", this.C);
  this.ha(this.o, m)
};
x7.prototype.$ = function() {
  x7.J.$.call(this);
  Z(this).I(this.o, "Cb", this.F);
  var a = this.o.o; - 1 == a ? J3(this.o, 0) : rza(this, a)
};
x7.prototype.F = function(a) {
  rza(this, a.Ia)
};

function rza(a, b) {
  var c = a.A[b],
      d = a.B;
  c != d && (a.B = c, d && (a.H ? U(d.G(), p) : a.removeChild(d, m)), c && (c.xa ? U(c.G(), m) : a.ha(c, m)))
}
x7.prototype.L = function() {
  for (var a = 0; a < this.A.length; a++) {
    var b = this.A[a];
    b.getParent() || b.aa()
  }
  x7.J.L.call(this)
};

function y7(a, b, c, d, e, f, h) {
  Y.call(this);
  this.K = a;
  this.ya = b;
  this.Ja = S(a);
  this.B = e || "ep";
  this.ea = b.K;
  this.W = 3 == this.ea || 2 == this.ea;
  this.Z = d;
  this.o = h
}
H(y7, Y);
y7.prototype.rb = y(p);
y7.prototype.ia = function() {
  this.V = this.b.U("div", this.W ? this.B : this.B + "-ro " + this.B)
};
y7.prototype.Ha = function(a) {
  var b = sza(this),
      c = b[a];
  Bb(b, function(a) {
    a != c && J3(a.A, c.A.o)
  })
};
y7.prototype.tb = function() {
  var a = new s2(this.Ja.hc());
  return new R2(this.K, a, this.Ja.Bf())
};

function sza(a) {
  var b = [a.Z.O];
  a.o && b.push(a.o.B);
  return b
};

function z7(a, b, c) {
  Y.call(this);
  this.F = a;
  this.B = b;
  this.O = Jd(a, 12);
  this.K = c || "ep-ea";
  c = Oy.M();
  b.hb() && (this.A = new Ky("Save", c), this.ha(this.A), this.wf = new Ky(PE(b) ? "Discard" : "Discard changes", c), this.ha(this.wf));
  var d = this.B.K;
  this.C = n;
  PE(this.B) || 3 != d && 2 != d || (d = b.Ud ? "Cancel appointment" : "Remove from this calendar", this.C = new Ky(b.Oj ? "Delete" : d, c), Dy(this.C, this.K + "-delbut"), this.ha(this.C));
  a = hsa(v2(a));
  var e = b.A.o.get();
  this.W = Cb(a, function(a) {
    return a.hb() && a.getId() != e
  });
  this.o = new Ky(t, c);
  this.o.vb("Back to calendar");
  this.ha(this.o);
  zo(this.F) && !PE(this.B) && (this.H = new Ky(t, c), this.ha(this.H), this.H.vb("Print this event"))
}
H(z7, Y);
B = z7.prototype;
B.ia = function() {
  var a = this.b.U("div", this.K + " noprint"),
      b = this.oa(t),
      c = [];
  Bb(this.W, function(a) {
    var b = this.oa(a.getId());
    a = I(a.getTitle());
    b = jm(tza, {
      value: b,
      text: "Copy to " + a
    });
    c.push(b)
  }, this);
  var d = 3 == this.B.K && x1(this.B) && !PE(this.B) ? jm(uza, {
    id: b
  }) : t,
      e = this.B.wo ? jm(vza, {
      id: b
    }) : t,
      d = !PE(this.B) && zo(this.F) ? jm(wza, {
      id: b,
      prefix: this.K,
      changeOwnerHtml: d,
      copyToCalOptions: c.join(t),
      debugInfo: e
    }) : t;
  a.innerHTML = jm(xza, {
    id: b,
    prefix: this.K,
    moreActionsMenuHtml: d
  });
  this.V = a
};
B.$ = function() {
  z7.J.$.call(this);
  var a = Z(this);
  this.o.xa || (this.o.render(this.fa("btcb_top")), this.O.vb(this.o.G(), k));
  Ku(a, this.o.G(), jA, this.cL);
  var b = this.A;
  b && (b.xa || b.render(this.fa("save_top")), Ku(a, b.G(), jA, this.bL));
  if (b = this.wf) b.xa || b.render(this.fa("cancel_top")), Ku(a, b.G(), jA, this.dL);
  if (b = this.C) b.xa || b.render(this.fa("delete_top")), Ku(a, b.G(), jA, this.eL);
  (b = this.fa("moreactions")) && a.I(b, v, this.fL);
  (b = this.H) && !b.xa && (b.render(this.fa("print-btn")), this.O.vb(this.H.G(), k));
  (b = b ? b.G() : this.fa("print-link")) && Ku(a, b, jA, this.gL);
  b = yo(this.F);
  Xd(a, b, "m", this.aL, p, this);
  a.I(this.B.W, v, this.hL);
  zo(this.F) || yza(this, p)
};
B.focus = function() {
  this.o.xa && this.o.G().focus()
};
B.bL = function() {
  this.P(new W6("ic"))
};
B.dL = function() {
  this.P(new W6("jc"))
};
B.eL = function() {
  zo(this.F) && this.P(new W6("kc"))
};
B.gL = function() {
  zo(this.F) && this.P(new W6("pc"))
};
B.cL = function() {
  this.P(new W6("hc"))
};
B.fL = function() {
  if (zo(this.F)) {
    var a = this.fa("moreactions"),
        b = a.options[a.selectedIndex],
        b = b && b.value && xG(this, b.value);
    a.selectedIndex = 0;
    b && "none" != b && ("qc" == b ? Ks(new Js, "Troubleshooting Info", this.B.wo, k, "modal-dialog") : I2(this.B, E(this.FV, this, b)))
  }
};
B.FV = function(a) {
  "mc" == a || "lc" == a ? this.P(new W6(a)) : this.P(new q7(a))
};
B.hL = function() {
  zo(this.F) || this.A && this.A.Ta(this.B.W.Ba())
};
B.aL = function(a) {
  yza(this, a.Pa)
};

function yza(a, b) {
  var c = a.fa("moreactions");
  c && (b ? c.removeAttribute("disabled") : c.setAttribute("disabled", "disabled"));
  a.C && a.C.Ta(b);
  a.A && (a.B.W.Ba() || a.A.Ta(b));
  if (a.H) a.H.Ta(b);
  else if ((c = a.fa("printLinkContent")) && (b ? gn(c, "ui-disabled") : en(c, "ui-disabled")), c = a.fa("print-link")) c.tabIndex = b ? 0 : -1
}
var xza = new V('<div id="${id}print-btn" class="ep-ea-btn-wrapper ${prefix}-print-btn"></div><div id="${id}btcb_top" class="ep-ea-btn-wrapper ${prefix}-back-btn"></div><div id="${id}save_top" class="action-btn-wrapper ep-ea-btn-wrapper"></div>&nbsp;<div id="${id}cancel_top" class="ep-ea-btn-wrapper"></div>&nbsp;<div id="${id}delete_top" class="ep-ea-btn-wrapper"></div>&nbsp;${moreActionsMenuHtml}'),
    wza = new V('<select id="${id}moreactions" size="1" class="prefselect ${prefix}-ma"class="${prefix}-more"><option value="${id}none" selected="selected">More Actions</option>${changeOwnerHtml}<option value="${id}lc" class="ep-dpl-it">Duplicate Event</option>${copyToCalOptions}${debugInfo}</select>'),
    tza = new V('<option value="${value}">${text}</option>'),
    uza = new V('<option value="${id}mc">Change Owner...</option>'),
    vza = new V('<option value="${id}qc" class="event-debug-link">Troubleshooting Info</option>');

function A7(a) {
  this.b = a;
  this.o = new Q(this);
  this.A = new k2;
  this.o.I(this.A, "resize", this.B)
}
H(A7, uc);
A7.prototype.L = function() {
  K(this.A)
};
A7.prototype.B = function() {
  if (this.b.xa) {
    var a = Fu(k, "ep-sp-sched", this.b.G())[0],
        b = this.b.o.G(),
        c = this.A,
        c = (c.Gk ? c.Gk.clone() : n).height,
        d = sj(b).y,
        a = Bj(a, "padding"),
        a = c - d - a.bottom,
        a = Math.max(a, 500),
        d = a = Math.min(a, 1130),
        a = this.b.o.F,
        e = a.parentNode,
        c = a.firstChild,
        f = sj(a).y,
        e = sj(e).y,
        f = f - e,
        e = Zu(a),
        d = d - f - e.top - e.bottom,
        c = vj(c).height;
    0 < c && c--;
    d = Math.min(d, c);
    0 >= d || (c = d + "px", RI(a, "height") != c && ij(a, "height", c));
    if (a = T("btmBorderSch")) a.style.width = b.offsetWidth - 16 + "px"
  }
};

function B7(a, b, c, d, e, f, h, l) {
  this.ka = xua(a, c, h);
  b = new R6(a, 0, c, d.D, f);
  var q;
  f = c.K;
  if (3 == f || 2 == f) q = new p7(a, d, e);
  y7.call(this, a, c, 0, b, l || "ep", 0, q);
  this.O = c;
  this.ib = new z7(a, c);
  this.ha(this.ib, m);
  c.Ud && (d = new h2("This event was created from an appointment slot."), this.ha(d, m));
  e = (d = c.W) ? d.b : k;
  e = C(e) && 0 == e.get();
  l = c.Ud;
  if (d && !d.B && !l || l && e) e = Mh(Ph(a)), l = c.Ha.Bc != e.Ma(), this.wa = new v7(this.K, d, l, c.A.A.uid != e.uid), this.ha(this.wa, m);
  l = Td(this.K);
  d = q3(this.ya);
  e = this.ya.O;
  q = this.W || e.get();
  l.isEnabled(7) ? (q = q ? "Untitled event" : "(No title)", l = new wP(e, q), e = (b = 1 == d) ? n : new j3(e, q, b, k, k, "Event title"), this.F = new p3(l, d, e)) : this.F = vP(e, d, q ? "Click to add a title" : "(No title)");
  this.ha(this.F, m);
  en(this.F.G(), this.B + "-title");
  this.H = new Y;
  this.ha(this.H, m);
  l = E(this.tb, this);
  d = new wz(c.b, c.tb);
  e = q3(c);
  l = E(Wta, n, a, l, d, c.Ja, n, k, k, k);
  this.A = dua(a, d, l, e);
  this.H.ha(this.A, m);
  en(this.A.G(), this.B + "-drs");
  en(this.H.G(), this.B + "-dpc");
  if (d = c.D) this.Xa = new G4(a, d, !PE(c), c.b, c.Ja), this.H.ha(this.Xa, m);
  this.H.G().appendChild(this.b.U("div", "clearFloats", " "));
  this.W ? (a = [this.Z, this.o], c = new M3, c.C = p, c = new H3(["Event details", "Find a time"], 0, c, this.B + "-ts"), this.bb = new x7(c, a, k, this.B + "-tp"), this.ha(this.bb, m)) : this.ha(this.Z, m);
  this.o && (a = new A7(this.o), c = this.o, K(c.C), c.C = a);
  this.W && (this.C = new hB("You must be online to edit this event."), this.ha(this.C, m), this.wa && (this.wa.A = this.C))
}
H(B7, y7);
B = B7.prototype;
B.UP = function() {
  this.ka && D3(this.ka)
};
B.$ = function() {
  B7.J.$.call(this);
  this.G().setAttribute("data-eid", this.O.getId());
  var a = Z(this);
  a.I(this.Z, "Eb", E(this.Ha, this, 0));
  this.o && (a.I(this.o, "Eb", E(this.Ha, this, 1)), a.I(this.o, "show", E(this.UP, this)));
  var b = this.O.D;
  b && (a.I(b, v, this.cC), this.cC());
  (b = this.Xa) && a.I(b, "Hb", this.VP);
  b = yo(this.K);
  Xd(a, b, "m", this.SP, p, this);
  a.I(this.O.C, "U", this.TP);
  zo(this.K) || zza(this, p)
};
B.L = function() {
  if (this.o) {
    var a = this.o;
    K(a.C);
    a.C = n
  }
  B7.J.L.call(this)
};
B.focus = function() {
  3 == this.ea ? this.F.o.G().focus() : this.ib.focus()
};
B.VP = function() {
  var a = this.A.o;
  if (a) {
    var b = this.O.D.b.get();
    O2(a, a.da, b);
    a.Qg(new L(v, a.da))
  }
};
B.cC = function() {
  var a = this.A.o;
  if (a instanceof b3) {
    var b = !this.O.D.D.get();
    a.zb = b
  }
};
B.SP = function(a) {
  zza(this, a.Pa)
};
B.TP = function() {
  Td(this.K).isEnabled(35) && Pra(this.O.C) && !this.zb && (this.zb = m, mza())
};

function zza(a, b) {
  if (a.C) if (iB(a.C, a.F, b), iB(a.C, a.H, b), iB(a.C, a.bb, b), b) a.C.Ka();
  else {
    var c = oj(a.F.G()),
        d = Bj(a.F.G(), "margin"),
        e = vj(a.G());
    a.C.show(0, c.y - d.top, e.width, e.height)
  }
};

function C7(a, b, c) {
  P.call(this);
  this.b = a;
  this.B = c;
  this.A = b;
  this.o = new Q(this);
  this.o.I(c, v, this.D);
  this.o.I(this.A, v, this.C)
}
H(C7, P);
C7.prototype.L = function() {
  C7.J.L.call(this);
  K(this.o)
};
C7.prototype.D = function() {
  Aza(this)
};

function Aza(a) {
  var b = D7(a);
  G6(a.b, b) || H6(a.b, D7(a));
  b = Bza(a).Wi(D7(a));
  J6(a.b, b) || I6(a.b, b)
}
C7.prototype.C = function() {
  var a = Bza(this);
  J6(this.b, a) || I6(this.b, a)
};

function D7(a) {
  a = a.B;
  return kk(a.first, Vl(a))
}
function Bza(a) {
  return new Uf(a.A.Fa().va(), a.A.Za().va())
};

function Cza(a, b, c, d, e) {
  PE(a) || !a.Ba() ? d() : a.Ba(function(b) {
    return b != a.W
  }) ? (c = a.W.Ba(), b(c, d, e)) : d()
}

function Dza(a, b, c) {
  var d = (new nw).set("yes", a ? "Only save response" : "Discard changes", m).set("no", "Stay on page", p, m);
  ku(new Js, function(a) {
    "yes" == a.key ? b() : c()
  }, "Unable to save changes", (a ? "Some changes made to this event cannot be saved while you are offline." : "Changes made to this event cannot be saved while you are offline.") + "<br><br>" + (a ? "You can stay on the page and wait until you are back online, or save your response now and discard other changes." : "You can stay on the page and wait until you are back online, or discard your changes."), d)
};

function E7(a, b, c, d, e, f, h, l, q) {
  P.call(this);
  this.A = a;
  this.V = c;
  this.W = d;
  this.K = e;
  this.ka = f;
  this.X = h;
  this.Z = l;
  this.da = q;
  this.o = new Q(this);
  this.O = p;
  this.ea = ow() && document.activeElement == gbar.qfgq()
}
H(E7, P);
B = E7.prototype;
B.NM = function(a) {
  this.b = a.target.Ee();
  a = this.A;
  for (var b = this.b, c = new o6, d = PE(b) ? n : b.getId(), e = v2(this.A), f = Jd(a, 5), h = Cc(e.A), e = {}, l = 0; l < h.length; ++l) {
    var q = h[l],
        r = jg(f, q.getId());
    r && (e[r.Ma()] = q.color)
  }
  f = [Qh(Ph(a))];
  f = new Ih(e, Cc(this.b.F.Ia), f);
  a = new E6(a, b, this.ka, this.X, c, d, f, p);
  a.qd(this);
  this.C = a;
  a = this.A;
  b = this.b;
  a = new Wl(uk(a), S(a));
  c = b.b.get();
  b = c.start.va();
  c = c.end.va();
  a.So(b, c, b);
  this.F = a;
  this.H = new C7(this.C, this.b.b, this.F);
  Aza(this.H);
  a = this.C;
  a = new N6(a, this.b.b, a.da);
  a = this.B = new B7(this.A, 0, this.b, this.C, this.F, a, this.Z);
  a.render(this.V);
  a.qd(this);
  a.focus();
  this.P("tc");
  b = this.o;
  b.I(a, "jc", this.DH);
  b.I(a, "ic", this.by);
  b.I(a, ["Yb", "Zb"], this.FH)
};
B.QM = function() {
  var a = Hw(document);
  a && a.blur();
  this.by()
};
B.iJ = function(a, b) {
  if (this.isDisposed() || this.D) this.B && this.B.xa && this.B.Na(), Ir(this.A).Ka(), a();
  else {
    var c = E(function() {
      this.aa();
      Ir(this.A).Ka();
      a()
    }, this);
    I2(this.b, c, b)
  }
};

function Eza(a) {
  if (zo(a.A)) {
    var b = new G2(a.K, a.b, [], "RESTORE_ORIGINAL");
    Lu(a.o, b, "V", a.Pz, k);
    Lu(a.o, b, "W", a.Oz, k);
    a.D = b;
    a.P("uc");
    b.start()
  }
}
B.FH = function() {
  this.P("xc")
};
B.DH = function() {
  ep("ef_dismiss");
  this.aa()
};
B.by = function() {
  var a = this.b;
  if (PE(a) || a.Ba() || 6 == a.Sc) if (6 == a.Sc) Eza(this);
  else {
    var b = {
      Dz: n
    },
        c = new D2(this);
    zo(this.A) ? (E2(c, this.nR), E2(c, this.lR), E2(c, this.jR), E2(c, this.mR), Td(this.A).isEnabled(35) && E2(c, F(lza, a)), E2(c, yya(this.A, a)), E2(c, F(Fza, this.A, this.b, this.X, Gza)), E2(c, Ywa(a, function(a) {
      b.Dz = a
    })), E2(c, F(iza, a)), E2(c, F(Eya, a, kz)), E2(c, F(Bya, a, Cya)), A1(this.b) || E2(c, F(xta, this.A, a, FP, k))) : E2(c, F(Cza, a, Dza));
    c.execute([], E(this.kR, this, b), D)
  } else this.aa()
};
B.kR = function(a, b) {
  if (zo(this.A)) {
    Hza(this, a.Dz);
    var c;
    if (!(c = !A1(this.b))) t: {
      c = this.b.Kb();
      for (var d = 0; d < c.length; d++) {
        var e = this.b.getItem(c[d]);
        if (e.Ba() && e != this.b.C) {
          c = m;
          break t
        }
      }
      c = p
    }
    c ? (c = PE(this.b) ? this.K.b(this.b, b) : this.K.o(this.b, b), Lu(this.o, c, "V", this.Pz, k), Lu(this.o, c, "W", this.Oz, k), this.D = c, this.P("uc"), c.start()) : this.aa()
  } else {
    e = this.b;
    if (e.W.Ba()) {
      c = e.getId();
      var d = e.A.o.get(),
          f = e.W,
          e = f.b.get(),
          h = f.o.get(),
          f = f.A.get(),
          l = [];
      l.push("eid", c);
      l.push("src", d);
      l.push("rst", e);
      l.push("rgu", h);
      l.push("rcomment", f);
      var q = wo(this.A);
      q && q.isEnabled() && q.Qz(l);
      EI(c, d, e, h, f);
      Ir(this.A).b("Your event was updated.")
    }
    this.P("wc");
    this.aa()
  }
};

function Hza(a, b) {
  if (A1(a.b) && Td(a.A).isEnabled(68)) {
    var c = z1(a.b.C);
    if (c.length) {
      var d = [];
      d.push("eid", a.b.getId());
      for (var e = 0; e < c.length; e++) {
        var f = c[e].email,
            h = UD(c[e]) ? "invEmailOpt" : "invEmail";
        d.push(h, f)
      }
      d.push("hl", "en");
      "ALL" == b && d.push("scp", "ALL");
      var l = a.A;
      Cf(Af(a.A), "invite", d, 52, D, function() {
        Ir(l).b("Failed to invite guests to the event.")
      })
    }
  }
}
B.Pz = function() {
  this.P("wc");
  this.D = n;
  this.aa()
};
B.Oz = function() {
  this.P("vc");
  this.D = n;
  this.aa()
};
B.lR = function(a, b, c) {
  a = FE(this.b.C, m);
  a.b.length ? (b = Db(a.b, function(a) {
    return om(a)
  }), Ks(new Js, "Your Event", mta(b.join("<br/>")), c)) : b()
};
B.jR = function(a, b, c) {
  a = this.b.b;
  a.Fa().ta() > a.Za().ta() ? Ks(new Js, "Your Event", "Sorry, you can't create an event that ends before it starts.", c) : b()
};
B.nR = function(a, b, c) {
  (a = (a = this.b.$b) && Ura(a)) ? Ks(new Js, "Your Event", a, c) : b()
};
B.mR = function(a, b, c) {
  var d = this.b.D;
  if (d && d.D.get()) {
    a = this.b.b;
    a = Hg(a.Za(), a.Fa());
    var e = d.B.get() || 1,
        d = Rra[d.C.get()];
    a > e * d ? (d = (new nw).set("yes", "Yes, create overlapping events", m).set("no", "No, just one", p, m).set("cancel", "Continue editing", p, m), ku(new Js, E(this.bQ, this, b, c), "Your Event", "Are you sure you want multiple " + a + " day long events?", d)) : b()
  } else b()
};
B.bQ = function(a, b, c) {
  var d = this.b.D;
  switch (c.key) {
  case "no":
    d.D.set(p);
    a();
    break;
  case "yes":
    a();
    break;
  case "cancel":
    b()
  }
};
B.Ee = w("b");

function Iza(a) {
  a.ea && pe(function() {
    var a = "g" == Jp.M().wc,
        c = gbar.qfgq();
    a && c && c.focus()
  }, 300)
}
B.L = function() {
  this.O || this.P("sc");
  Iza(this);
  E7.J.L.call(this);
  K(this.b);
  K(this.Ia);
  K(this.B);
  K(this.H);
  K(this.C);
  K(this.o);
  K(this.F);
  K(this.da);
  this.F = this.o = this.C = this.H = this.B = this.Ia = this.b = n
};

function Fza(a, b, c, d, e, f, h) {
  if (b.Ha.Db()) f();
  else if (e = Mh(Ph(a)), a = wk(xk(a)), PE(b) || e.Ma() == b.bb || UE(b)) {
    var l = b.b,
        q = b.C;
    if (l.Ba() || q.Ba()) if (b = l.get(), b.start.Sb() && b.end.Sb()) {
      b instanceof Cw && (b = new Uf(b.start.Ea(), b.end.Ea()));
      for (var l = l.Ba() ? l1(q) : y1(q), l = 20 < l.length ? [] : l, l = Cb(l, function(a) {
        return !UD(a)
      }), q = [], r = 0; r < l.length; r++) {
        var s = l[r],
            u = s.getKey();
        if (u != e.Ma() && !dya(c, b, u)) {
          var x = Vwa(Wwa(c.o(u).join("|"), m)),
              s = s ? s.Zb : u,
              s = s + (" (Working hours: " + a.ob(x.start) + " - " + a.ob(x.end) + ")");
          q.push(s)
        }
      }
      q.length ? d(q, f, h) : f()
    } else f();
    else f()
  } else f()
}
function Gza(a, b, c) {
  var d = (new nw).set("yes", "Save event", m).set("no", "Do not save", p, m),
      e;
  11 < a.length ? (e = Qb(a, 0, 10), e.push("(+" + (a.length - 10) + " more)")) : e = a;
  ku(new Js, function(a) {
    "yes" == a.key ? b() : c()
  }, "Are you sure?", "Are you sure you want to save this event? This event is scheduled outside of these guests' working hours.<br>Working hours are shown in your local time:<br><ul><li>" + e.join("</li><li>") + "</li></ul>", d)
};

function Jza(a, b) {
  pF.call(this, a, b)
}
H(Jza, pF);

function Kza(a, b) {
  for (var c = AF(a, b), d = 30, e = b.getElementsByTagName("private-property"), f = 0; f < e.length; ++f) {
    var h = e[f];
    if ("SS_slotsize" == h.getAttribute("name")) {
      d = rF(h);
      break
    }
  }
  e = Cta();
  e.b = a.b;
  e.F = c.getId();
  e.o = c.A;
  e.A = c.bb;
  e.B = c.O;
  e.C = c.b;
  e.da = c.Ja;
  e.K = c.Z;
  e.H = c.ya;
  e.W = c.W;
  e.D = c.C;
  e.O = c.D;
  d = parseInt(d, 10);
  d = new eL(isNaN(d) ? k : d);
  e.ea = d;
  e.X = c.K;
  return new J2(e)
};

function twa(a) {
  this.b = a;
  this.o = Af(a)
}
function R4(a, b, c) {
  P.call(this);
  this.b = b;
  this.D = a.o;
  this.o = a.b;
  this.A = new Jza(this.o, c)
}
H(R4, V1);
R4.prototype.start = function() {
  R4.J.start.call(this);
  if (zo(this.o)) this.D.send("event", ["eid", this.b, "sf", "true", "hl", "en", "output", "xml"], 24, E(this.C, this), k, n, "POST", 1);
  else {
    var a = ru(Yp, this.b);
    this.B = (a = a ? ipa(a) : n) ? Kza(this.A, a) : n;
    this.vd()
  }
};
R4.prototype.C = function(a) {
  this.B = Kza(this.A, Gsa(a));
  this.vd()
};
R4.prototype.Ee = w("B");

function Kha(a, b, c, d) {
  var e = Cta();
  e.b = a;
  e.B = new ez(c);
  e.C = new uz(b);
  e.K = new ez(t);
  e.H = new ez(t);
  c = Mh(Ph(a));
  e.W = new nE(c, 5, k, k, m);
  e.F = n;
  e.o = new RD(a, c);
  e.O = vE(b.start);
  e.ea = d || new eL(k, ai(vz(e.C).duration));
  a = new XD;
  e.D = new DE(a, 1, new ez);
  e.A = c.Ma();
  e.X = 3;
  e.da = new oE(n, n);
  return new J2(e)
};

function xL() {
  this.C = R();
  this.o = new Q(this);
  this.A = []
}
Xa(xL);
B = xL.prototype;
B.eq = p;
B.Lm = p;
B.Mo = m;
B.No = m;
B.Lo = p;
B.show = function(a, b, c, d, e, f, h, l, q) {
  this.Lm = this.eq = p;
  this.K = c;
  this.A = [];
  this.Mo = !! f || !! l;
  this.b = (this.Lo = c = cb(e)) ? Lza : Mza;
  this.b.put("overview", b);
  c && this.b.put("subject", I(e));
  this.b.put("message", d || t);
  if (this.Mo) {
    if (f) for (b = 0; b < f.length; b++) d = f[b], l = (e = Hu(ig.M(), d)) ? e.uid : d, this.A.push({
      email: d,
      Zb: e ? Kf(e) : d,
      status: h && h[l] ? h[l].eb : 0,
      selected: m
    });
    else Bb(l, function(a) {
      var b = a.email;
      Hu(ig.M(), b);
      this.A.push({
        email: b,
        Zb: a.Zb || b,
        status: a.ea,
        selected: m
      })
    }, this);
    this.A.sort(function(a, b) {
      return a.Zb < b.Zb ? -1 : 1
    });
    for (b = e = d = h = f = 0; b < this.A.length; b++) switch (this.A[b].status) {
    case 1:
      f++;
      break;
    case 2:
      h++;
      break;
    case 3:
      d++;
      break;
    default:
      e++
    }
    this.B = [{
      check: f,
      type: "yes",
      Zd: this.XL,
      oq: "Yes <strong class=count>(" + f + ")</strong>"
    }, {
      check: d,
      type: "maybe",
      Zd: this.VL,
      oq: "Maybe <strong class=count>(" + d + ")</strong>"
    }, {
      check: h,
      type: "no",
      Zd: this.WL,
      oq: "No <strong class=count>(" + h + ")</strong>"
    }, {
      check: e,
      type: "awaiting",
      Zd: this.UL,
      oq: "Awaiting response <strong class=count>(" + e + ")</strong>"
    }];
    if (this.No = !! (f || d || h || e)) {
      for (b = 0; b < this.B.length; b++) 0 < this.B[b].check ? (F7.put("type", this.B[b].type), F7.put("msg", this.B[b].oq), "awaiting" != this.B[b].type ? F7.put("icon", '<img valign="center" src="images/icon_r_' + this.B[b].type + '.gif">') : F7.put("icon", t), G7.put(this.B[b].type, F7.toString())) : G7.put(this.B[b].type, t);
      this.b.put("guestModule", G7.toString());
      this.b.put("emailInputLabel", t)
    } else this.b.put("guestModule", t), this.b.put("emailInputLabel", "To:");
    this.b.put("toAddresses", I(Nza(this)))
  }
  this.F = (new AK).set("yes", "Send", m).set("no", "Don't send", p, m);
  this.D = new Js;
  ku(this.D, E(this.X, this), a, this.b.toString(), this.F, E(this.YL, this));
  this.H = q;
  H7(this)
};
B.uT = function(a) {
  a = a || [];
  Oza(this, a);
  a.push("invAction", "RECOMMEND");
  Cf(Af(this.C), "invitecaluser", a, 0, D)
};

function Oza(a, b) {
  var c = I7(),
      d = J7(),
      e = W("emailersend_emailme").checked;
  b.push("hl", "en");
  d && b.push("invMsg", d);
  e && b.push("invCopySender", 1);
  a.Lo && b.push("subj", W("emailersubject").value);
  d = 0;
  for (e = c.length; d < e; ++d) b.push("invEmail", c[d])
}

function Nza(a) {
  for (var b = [], c = 0; c < a.A.length; c++) if (a.A[c].selected) {
    var d = a.A[c];
    b.push(d.email == d.Zb ? d.email : '"' + d.Zb + '" <' + d.email + ">")
  }
  return b.join(",\n")
}
function I7() {
  return yD.M().o(W("emailer_inputaddress").value)
}
function K7(a) {
  W("emailer_inputaddress").value = Nza(a);
  H7(a)
}
function J7() {
  return W("emailersend_msg").value
}
B.YL = function() {
  m2(this.C, "emailer_inputaddress", m, E(this.xr, this));
  var a = W("emailer_inputaddress");
  a.style.zIndex = this.D.getZIndex();
  this.o.I(a, "keyup", this.eR);
  this.xr();
  var b = W("emailersend_msg");
  this.o.I(b, "keyup", this.cR);
  sv(a.value) ? qw(a) : qw(b);
  this.Lo && this.o.I(W("emailersubject"), "keyup", this.dR);
  if (this.Mo && this.No) for (a = 0; a < this.B.length; a++) 0 < this.B[a].check && this.o.I(W("emailercheck" + this.B[a].type), "click", this.B[a].Zd);
  this.o.I(W("emailer_inputaddress"), v, this.xr)
};
B.XL = function(a) {
  for (var b = 0; b < this.A.length; b++) 1 == this.A[b].status && (this.A[b].selected = a.target.checked);
  K7(this)
};
B.WL = function(a) {
  for (var b = 0; b < this.A.length; b++) 2 == this.A[b].status && (this.A[b].selected = a.target.checked);
  K7(this)
};
B.VL = function(a) {
  for (var b = 0; b < this.A.length; b++) 3 == this.A[b].status && (this.A[b].selected = a.target.checked);
  K7(this)
};
B.UL = function(a) {
  for (var b = 0; b < this.A.length; b++) 0 == this.A[b].status && (this.A[b].selected = a.target.checked);
  K7(this)
};
B.xr = function() {
  var a = I7(),
      b = W("emailersend_error"),
      c = yD.M();
  this.Lm = p;
  for (var d = 0, e = a.length; d < e; ++d) {
    var f = a[d];
    if (!c.b(f, m)) {
      a = I(f);
      b.innerHTML = "Sorry, this is not a valid email address: <b>" + a + "</b>";
      this.Lm = m;
      break
    }
  }
  this.Lm || (b.innerHTML = "&nbsp;");
  H7(this)
};

function H7(a) {
  var b = p;
  C(a.H) && !a.H ? b = m : a.Lm || a.eq || !I7().length ? b = m : a.Lo && pb(W("emailersubject").value).length || pb(J7()).length ? a.Mo && a.No || (b = !pb(W("emailer_inputaddress").value).length) : b = m;
  t: {
    if (a = a.F && a.F.V.getElementsByTagName("BUTTON")) for (var c = 0; c < a.length; c++) if ("yes" == a[c].name) {
      a = a[c];
      break t
    }
    a = n
  }
  a && (a.disabled = b)
}
B.eR = function() {
  this.vx && clearTimeout(this.vx);
  this.vx = setTimeout(E(this.xr, this), 750)
};
B.vx = k;
B.cR = function(a) {
  var b = W("msg-length");
  a = a.target;
  this.eq = 2400 <= a.value.length;
  b.innerHTML = this.eq ? a.value.length + " / 2400" : "&nbsp;";
  H7(this)
};
B.dR = function() {
  H7(this)
};
var Mza = new V('${overview}<div><span id="emailersend_error" style="color:red">&nbsp;</span></div><table class=emailtable cellpadding=6><tr><td valign=top class=nobr>To:</td><td valign=top><textarea id="emailer_inputaddress" style="overflow:auto" autocomplete=off rows=4 cols=60></textarea><div style="padding-top:.5ex">Enter email addresses separated by commas.</div></td></tr><tr><td valign=top class=nobr>Message:</td><td valign=top><textarea id="emailersend_msg" style="overflow:auto" rows=4 cols=60>${message}</textarea></td></tr><tr><td></td><td><div style="float:left;"><input type=checkbox id="emailersend_emailme" checked>&nbsp;<label for="emailersend_emailme">Send copy to myself</label></div><div id="msg-length" style="float:right;color:red">&nbsp;</div></td></tr></table>'),
    Lza =
    new V('${overview}<div><span id="emailersend_error" style="color:red">&nbsp;</span></div><table class=emailtable cellpadding=6>${guestModule}<tr><td valign=top>${emailInputLabel}</td><td valign=top><textarea id="emailer_inputaddress" autocomplete=off style="overflow:auto" rows=4 cols=60>${toAddresses}</textarea></td></tr><tr><td valign=top>Subject:</td><td valign=top><input id=emailersubject autocomplete=off size=62 value="${subject}" maxlength="100"></td></tr><tr><td valign=top class=nobr>Message:</td><td valign=top><textarea id="emailersend_msg" style="overflow:auto" rows=4 cols=60>${message}</textarea></td></tr><tr><td></td><td><div style="float:left">Note: event information will be included in the message.</div><div id="msg-length" style="float:right;color:red">&nbsp;</div><div style="clear:both"><input type="checkbox" id="emailersend_emailme" checked="true"><label for="emailersend_emailme">Send copy to myself</label></div></td></tr></table>'),
    G7 = new V("<tr><td valign=top>To:</td><td>${yes}${maybe}${no}${awaiting}</td></tr>"),
    F7 = new V('<div style="font-weight:bold"><input type="checkbox" id="emailercheck${type}" checked="true"><label for="emailercheck${type}">${msg}&nbsp;</label>${icon}</div>');
xL.prototype.X = function(a) {
  var b = p;
  "yes" == a.key && this.K && (J7() ? b = this.K() : (Ks(new Js, "Error", "Please enter text in the body of the message."), b = m));
  b ? (a.stopPropagation(), a.preventDefault()) : (l2(this.C, "emailer_inputaddress"), Yd(this.o))
};

function L7(a) {
  this.B = a;
  this.b = {}
}
H(L7, cya);
L7.prototype.A = function(a, b, c, d) {
  this.b = {};
  for (var e = [], f = 0; f < a.length; f++) e.push(a[f].email);
  a = E(this.D, this, c, d);
  for (var f = [], h = 0; h < e.length; h++) f.push("dtid", e[h]);
  f.push("droi", c.toString());
  f.push("ctz", b);
  this.B.send("workinghours", f, 48, a, d, k, k, 1)
};
L7.prototype.o = function(a, b) {
  var c = this.b[a];
  if (!c) return n;
  if (b) {
    for (var d = [], e = 0; e < c.length; e++) M1(b, c[e]) && d.push(c[e]);
    return d
  }
  return Pb(c)
};
L7.prototype.D = function(a, b, c) {
  a = he(c);
  for (var d in a) {
    c = [];
    for (var e = 0; e < a[d].length; e++) c.push(qz(a[d][e]));
    this.b[d] = c
  }
  b()
};

function Pza(a, b, c) {
  var d = Vj(b);
  c.eremte = Db(nr(d, a, p), function(a) {
    return q1(a)
  });
  b = Td(b).isEnabled(9);
  c.eremaded = b ? Db(nr(d, a, m), function(a) {
    return q1(a)
  }) : [];
  c.erem = isNaN(c.dates.start.hour) && b ? c.eremaded : c.eremte
}

function ipa(a, b) {
  var c = bg.M(),
      d, e;
  e = a.H;
  var f = {};
  f.text = hz(a.getTitle());
  f.owner = a.mc;
  f.creator = a.Bc;
  f.location = a.Tc;
  f.details = t;
  C(a.Sj()) && (f.details = a.Sj());
  f.recur = n;
  C(e.D) && (f.recur = e.D);
  f.crm = "BUSY";
  if (C(a.Hd)) {
    var h;
    h = a.Hd;
    h = h != n && 3 != h ? s1(c.o).get(h) : "UNKNOWN";
    f.crm = h
  }
  f.icc = "DEFAULT";
  C(e.b) && (h = e.b, c = h != n ? s1(c.A).get(h) : "DEFAULT", f.icc = c);
  f.rstart = n;
  C(e.A) && (f.rstart = e.A);
  c = a.Db() ? new Uf(a.Fa().va(), a.Za().va()) : new Uf(a.Fa(), a.Za());
  f.dates = c;
  C(e.o) ? d = e.o : d = a.hb() ? 60 : a.Yd() ? 30 : 20;
  c = 30 <= d ? "EDIT" : "VIEW";
  C(e.B) ? e = e.B : b ? e = 130999 : (e = 4, a.Yd() && (e |= 3080));
  h = R();
  h = Vj(h);
  f.eid = a.getId();
  f.src = a.Aa();
  for (var l = {}, q = Un(a), r = 0; r < q.length; r++) l[q[r]] = Vn(a, q[r]);
  f.add = l;
  f.erem = esa(h, a);
  f.sprop = a.b;
  f.pprop = a.C;
  return Qza(c, d, e, f, a.B & 139776)
}

function Qza(a, b, c, d, e) {
  var f = "undefined" != typeof ActiveXObject ? new ActiveXObject("Microsoft.XMLDOM") : document.implementation.createDocument(t, t, n),
      h = f.createElement("eventpage");
  f.appendChild(h);
  var l = d.add || {};
  h.setAttribute("action", a);
  h.setAttribute("url", "event");
  h.setAttribute("access-level", t + b);
  h.setAttribute("specialized", t + (0 != (e & 8192)));
  h.setAttribute("has-overrides", t + (0 != (e & 131072)));
  h.setAttribute("static-file-prefix", vt || t);
  h.setAttribute("lang", "en");
  h.setAttribute("can-respond", t + (0 != (e & 512)));
  b = Qd.b;
  e = h.ownerDocument.createElement("features");
  for (var q = 0; q < b.length; q++) {
    var r = h.ownerDocument.createElement("feature");
    r.setAttribute("enabled", b[q] ? "true" : "false");
    e.appendChild(r)
  }
  h.appendChild(e);
  b = Ll();
  e = h.ownerDocument.createElement("ref-date");
  M7(e, t + b);
  h.appendChild(e);
  if (e = d.eid) q = h.ownerDocument.createElement("eid"), M7(q, e), h.appendChild(q);
  e = Sh(R());
  q = d.owner == e;
  r = h.ownerDocument.createElement("self");
  r.setAttribute("is-signed-in", "true");
  var s = Th(S(R()));
  r.setAttribute("has-weekends", s ? "true" : "false");
  N7(r, l, e, p, q);
  h.appendChild(r);
  if (e = $e(Ka)) q = h.ownerDocument.createElement(Ka), M7(q, e), h.appendChild(q);
  e = d.text || t;
  q = h.ownerDocument.createElement("summary");
  O7(q, c, a, 32768);
  M7(q, e);
  h.appendChild(q);
  (e = d.dates) || "CREATE" != a || (e = new Uf(b, Jg(b)));
  e && (r = e, s = r.start instanceof Qg || r.start instanceof $t, q = h.ownerDocument.createElement("dates"), O7(q, c, a, 16), M7(q, r.start + "/" + r.end), P7(q, "start-date", Kl.Ec(r.start)), s && P7(q, "start-time", Kl.ob(r.start)), s ? (P7(q, "end-date", Kl.Ec(r.end)), P7(q, "end-time", Kl.ob(r.end))) : (s = r.end, s instanceof au && !s.Sb() || (r = Gg(r.end), r.Y -= 1, s = r.Rb()), P7(q, "end-date", Kl.Ec(s))), h.appendChild(q));
  q = !! d.unbounded;
  r = h.ownerDocument.createElement("unbounded");
  M7(r, q);
  h.appendChild(r);
  if (q = d.rstart) q = q.va(), r = h.ownerDocument.createElement("first-start"), O7(r, c, a, 64), M7(r, t + q), Q7(r, Kl.Ec(q)), h.appendChild(r);
  q = d.recur;
  "CREATE" != a || q || (q = t);
  if (q != n) {
    r = q;
    q = e;
    e = h.ownerDocument.createElement("rrule");
    O7(e, c, a, 4096);
    if (s = r.replace(/(?:\r\n?|\n)[ \t]/g, t)) {
      for (var s =
      s.split(/[\r\n]+/), u = [], x = /^(?:RRULE)[;:]/i, z = 0; z < s.length; ++z)!s[z].match(x) != m && u.push(s[z]);
      s = u
    } else s = [];
    if (s = 1 == s.length ? new k4(s[0]) : n) {
      if ("BYDAY" in s.b) {
        u = s.b.BYDAY;
        for (x = 0; x < u.length; x++) u[x] = u[x].Ie();
        e.setAttribute("byday", u.join(","))
      }
      "BYHOUR" in s.b && e.setAttribute("byhour", s.b.BYHOUR);
      "BYMINUTE" in s.b && e.setAttribute("byminute", s.b.BYMINUTE);
      "BYMONTH" in s.b && e.setAttribute("bymonth", s.b.BYMONTH);
      "BYSECOND" in s.b && e.setAttribute("bysecond", s.b.BYSECOND);
      "BYSETPOS" in s.b && e.setAttribute("bysetpos", s.b.BYSETPOS);
      "BYWEEKNO" in s.b && e.setAttribute("byweekno", s.b.BYWEEKNO);
      "BYYEARDAY" in s.b && e.setAttribute("byyearday", s.b.BYYEARDAY);
      "COUNT" in s.b && e.setAttribute("count", s.b.COUNT);
      "FREQ" in s.b && e.setAttribute("freq", n2[s.b.FREQ] || n);
      "UNTIL" in s.b && e.setAttribute("until", t + s.b.UNTIL)
    }
    e.setAttribute("interval", s && s.b.INTERVAL || 1);
    u = s != n ? s.b.WKST : k;
    u == k && "CREATE" == a && (u = Xg(S(R()), "firstDay", "0"));
    u != k && e.setAttribute("wkst", yE[u] || n);
    M7(e, r || t);
    r = "Does not repeat";
    s && (q && q.start.Sb() && (q = q.start, q instanceof
    $t ? b = q.Ea() : q instanceof au && (b = q.va())), r = tva(s, b, yk(R())));
    Q7(e, r);
    h.appendChild(e)
  }
  b = ot();
  e = h.ownerDocument.createElement("timezone");
  M7(e, b);
  Q7(e, b);
  h.appendChild(e);
  Rza(h, c, a, l);
  e = d.location || t;
  b = h.ownerDocument.createElement("location");
  O7(b, c, a, 256);
  M7(b, e);
  e && (e = tI(e), P7(b, "link", e));
  h.appendChild(b);
  e = d.crm;
  q = d.src;
  b = h.ownerDocument.createElement("conflictResolutionMode");
  O7(b, c, a, 65536);
  M7(b, e);
  q = (q = jg(ig.M(), q)) ? q.Bb() : 106;
  r = Sd(15);
  s = Yg(S(R()), "UseAutoResponder", "false");
  q = r && s && 100 == q;
  Q7(b, q && "BLOCKING" == e ? "Busy (decline invitations)" : "AVAILABLE" == e ? "Available" : "Busy");
  e = h.ownerDocument.createElement("blocking");
  e.setAttribute("enabled", q);
  b.appendChild(e);
  h.appendChild(b);
  b = d.icc || "DEFAULT";
  e = h.ownerDocument.createElement("class");
  O7(e, c, a, 128);
  M7(e, b);
  q = "Default";
  switch (b) {
  case "PRIVATE":
    q = "Private";
    break;
  case "PUBLIC":
    q = "Public"
  }
  Q7(e, q);
  h.appendChild(e);
  b = d.details;
  e = h.ownerDocument.createElement("description");
  O7(e, c, a, 32);
  Sza(e, b, "value");
  Sza(e, b, "html");
  h.appendChild(e);
  c & 1024 && (q = d.erem, e = d.eremte, b = d.eremaded, r = h.ownerDocument.createElement("reminders"), O7(r, c, a, 1024), s = Yg(S(R()), "smsVerifiedFlag", "false"), r.setAttribute("sms-verified", t + s), R7(q, r), h.appendChild(r), q = h.ownerDocument.createElement("reminder-te-defaults"), R7(e, q), h.appendChild(q), e = h.ownerDocument.createElement("reminder-ade-defaults"), R7(b, e), h.appendChild(e));
  if (b = d.creator) e = h.ownerDocument.createElement("creator"), N7(e, l, b), h.appendChild(e);
  if (b = d.owner) e = h.ownerDocument.createElement("organizer"), N7(e, l, b, p, m), h.appendChild(e);
  b = d.src;
  e = h.ownerDocument.createElement("source-calendar");
  O7(e, c, a, 16384);
  N7(e, l, b, m, m);
  h.appendChild(e);
  e = d.sprop || {};
  e["goo.allowModify"] = e["goo.allowModify"] || "false";
  e["goo.allowInvitesOther"] = e["goo.allowInvitesOther"] || "true";
  e["goo.showInvitees"] = e["goo.showInvitees"] || "true";
  e["goo.allowInviteYourself"] = e["goo.allowInviteYourself"] || "goo.allowInviteYourself";
  for (var A in e) q = h.ownerDocument.createElement("shared-property"), O7(q, c, a, 8192), q.setAttribute("name", A), M7(q, e[A]), h.appendChild(q);
  if (d = d.pprop) for (var G in d) A = h.ownerDocument.createElement("private-property"), O7(A, c, a, 512), A.setAttribute("name", G), M7(A, d[G]), h.appendChild(A);
  G = h.ownerDocument.createElement("calendars");
  Tza(G, l);
  h.appendChild(G);
  G = [4, 6];
  c & 8 && G.push(8);
  0 === (l[b] && l[b].eb) && G.push(5);
  "CREATE" === a && G.push(3);
  a = h.ownerDocument.createElement("modules");
  for (c = 0; c < G.length; ++c) l = a, d = G[c], A = l.ownerDocument.createElement("module"), A.setAttribute("module-id", t + d), l.appendChild(A);
  h.appendChild(a);
  a = h.ownerDocument.createElement("messages-to-user");
  h.appendChild(a);
  return f
}
function Rza(a, b, c, d) {
  var e = a.ownerDocument.createElement("attendees");
  O7(e, b, c, 2, 1);
  b & 4 || e.setAttribute("partial", "true");
  e.setAttribute("remainingAttendees", t + _delayedLoadContext.maxAttendees);
  b = Dc(d);
  b.sort(function(a, b) {
    var c = jg(ig.M(), a),
        d = jg(ig.M(), b);
    return Ud(c ? c.tc() : a, d ? d.tc() : b)
  });
  for (c = 0; c < b.length; ++c) Uza(e, d, b[c]);
  a.appendChild(e)
}

function Uza(a, b, c) {
  var d = bg.M(),
      e = a.ownerDocument.createElement("attendee"),
      f = jg(ig.M(), c),
      h, l;
  f ? (h = b[f.uid].pf, l = b[f.uid].Xg, N7(e, b, f.uid)) : 0 <= c.indexOf("@") && (b = e.ownerDocument.createElement("principal"), b.setAttribute("id", c), b.setAttribute("status", "4"), b.setAttribute("type", String(isa(d, 102))), h = 0, l = n, M7(b, c), Q7(b, c), e.appendChild(b));
  e.setAttribute("extra-guests", h);
  l && (c = l, d = e.ownerDocument.createElement("response-comment"), M7(d, c), e.appendChild(d));
  a.appendChild(e)
}

function R7(a, b) {
  if (a) for (var c = 0; c < a.length; ++c) {
    var d = Pn(a[c], t);
    if (d) {
      var e = b,
          f = d.wb(),
          d = d.uf,
          h = e.ownerDocument.createElement("reminder");
      h.setAttribute("method", f);
      h.setAttribute("secs-lead", d);
      e.appendChild(h)
    }
  }
}
function Tza(a, b) {
  var c = [],
      d = ci.M();
  c2(function(a) {
    var b = d.get(a.getId());
    b && 60 <= b.uc && c.push(a)
  });
  c.sort(bs(Mj.M()));
  for (var e = 0; e < c.length; ++e) N7(a, b, c[e].getId(), m)
}

function O7(a, b, c, d, e) {
  var f = "readonly";
  b & d ? f = "editable" : e && b & e && (f = "extensible");
  b = "CREATE" == c && "editable" === f;
  a.setAttribute("access", f);
  a.setAttribute("editing", t + b)
}
function P7(a, b, c) {
  var d = a.ownerDocument;
  b = d.createElement(b);
  c && b.appendChild(d.createTextNode(c));
  a.appendChild(b)
}
function M7(a, b) {
  P7(a, "value", b)
}
function Q7(a, b) {
  P7(a, "display", b)
}

function Sza(a, b, c) {
  c = a.ownerDocument.createElement(c || "html");
  if (b) {
    var d = document.createElement("span");
    d.innerHTML = b;
    for (b = d.firstChild; b; b = b.nextSibling) Vza(b, c)
  }
  a.appendChild(c)
}

function Vza(a, b) {
  var c;
  switch (a.nodeType) {
  case 1:
    c = b.ownerDocument.createElement(a.nodeName);
    for (var d = 0, e = a.attributes.length; d < e; ++d) {
      var f = a.attributes[d];
      f.specified && c.setAttribute(f.nodeName, f.nodeValue)
    }
    a.style.cssText && c.setAttribute("style", a.style.cssText);
    for (d = a.firstChild; d; d = d.nextSibling) Vza(d, c);
    break;
  case 3:
  case 4:
    c = b.ownerDocument.createTextNode(a.nodeValue);
    break;
  default:
    return
  }
  b.appendChild(c)
}

function N7(a, b, c, d, e) {
  var f = bg.M();
  b = b[c] && b[c].eb;
  b == k && (b = e ? 5 : 4);
  var h;
  e = jg(ig.M(), c);
  var l = ci.M().get(c);
  if (d) {
    if (!l && !e) return;
    h = l && l.Pb ? l.Pb : Kf(e);
    d = e ? e.Bb() : f.b.get(l.type)
  } else {
    if (!e) return;
    h = Kf(e);
    d = e.Bb()
  }
  var q;
  l && (q = l.Ia);
  l = a.ownerDocument.createElement("principal");
  l.setAttribute("id", c);
  l.setAttribute("status", String(b));
  l.setAttribute("type", String(isa(f, d)));
  q && l.setAttribute("calendar-settings", q);
  M7(l, e.Ma());
  Q7(l, Ij(h));
  a.appendChild(l)
};

function oz(a) {
  var b = a.HP,
      c = a.IP,
      d = a.XB,
      e = PR(a);
  b && (a = a.summary, e.push("ctext", a ? a.$w : t, "qa-src", c));
  c = (Vd++).toString();
  e.push("eid", c);
  Wza(e, d)
}
function zea(a, b) {
  var c = PR(a);
  QR(c, b)
}
function PR(a) {
  var b = a.start,
      c = a.$o ? n : a.end,
      d = a.VB || Sh(R());
  a = Xza(a.summary, a.nc, a.location, b, c, a.Al, a.Rr, "DRAG", a.HD);
  a.push("src", d, "ctz", ot());
  return a
}

function _ES_CopyEvent(a, b, c) {
  ku(new Js, function(c) {
    if ("yes" == c.key) {
      c = ["transeid", a, "transtok", b, "ctz", ot(), "hl", "en"];
      var e = R(),
          f = Hr(e, "Oops, we couldn't edit this event, please try again in a few minutes");
      r2(c);
      Cf(Af(e), "transferevent", c, 0, f)
    }
  }, "Add event?", jta(om(c)), (new nw).set("yes", "Yes, add this event", m).set("no", "No, do not add this event", p, m))
}

function kI(a, b, c, d, e, f, h, l, q) {
  var r = fp();
  r.fb = "ef_new_from_quickadd";
  var s;
  t: {
    var u = a.get(),
        x = d,
        z = e;
    if (u && pb(u) && x && z) {
      var u = x,
          A = z,
          z = a2(u.toString()),
          x = a2(A.toString());
      if (z.Sb()) x.Sb() || ((s = x.Rb()).Sb() && s.va().ta() > z.ta() ? z instanceof $t ? A = s.Ea() : A = s.va() : (s = Gg(z), z instanceof $t ? (s.minute += Mw(R()), A = s.Ea()) : (++s.Y, A = s.va())));
      else if ((s = z.Rb()).Sb()) u = s.va(), s = x.Rb(), s.Sb() ? (A = s.va(), s = Gg(A)) : s = Gg(u), ++s.Y, A = s.va();
      else {
        s = n;
        break t
      }
      s = {
        start: u.toString(),
        end: A.toString()
      }
    } else s = n
  }
  s && (d = s.start, e = s.end);a = Xza(a, b, c, d, e, f, h, "QUICKADD", l);s && !q ? (a.push("src", Sh(R())), q = (Vd++).toString(), a.push("eid", q), Wza(a)) : QR(a, r)
}

function gu(a, b) {
  ep("bubble_respond " + b);
  var c = ru(Yp, a);
  c.oc() || S7();
  c.oc() && ep("pb_respond " + b);
  var d = c.Dc;
  if (d !== b) {
    var e = n;
    6 == b ? (e = Wj(c) || Oj(c, 8192) ? "ALL" : "ONE", Yza(c, e, [])) : Wj(c) || Oj(c, 8192) || (e = "ONE");
    e != n ? (EI(c.getId(), c.Aa(), b), k_(c, b, e, d)) : (e = R(), Rq(e).b(Ba, function() {
      jz(p, p, "Any changes made to other events will be kept.", function(a) {
        EI(c.getId(), c.Aa(), b);
        k_(c, b, a, d)
      }, D)
    }))
  }
}

function Zza(a) {
  var b = ru(Yp, a),
      b = ita(b.getTitle(), ds(Mj.M(), b.Aa(), p)),
      c = (new nw).set("yes", "Report spam", p).set("no", "Don't report spam", m, m);
  ku(new Js, function(b) {
    "yes" == b.key && (S7(), T7(), gu(a, 6))
  }, "Report spam", b, c)
}
function hu(a) {
  var b = ru(Yp, a);
  if (!b.oc() || !Oj(b, 2097152)) if (S7(), Wj(b)) {
    var b = Oj(b, 2097152),
        c = R();
    Rq(c).b(Ba, F($za, a, b))
  } else aAa(a, "ONE")
}

function $za(a, b) {
  var c = [],
      d, e = new M5("ONE", "Only this instance", "All other events in the series will remain.", k, m),
      f = new M5("TAIL", "All following", "This and all the following events will be deleted."),
      h = new M5("ALL", "All events in the series", "All events in the series will be deleted.");
  d = R();
  zo(d) ? (b ? (d = "Would you like to delete only this event, all events in the series, or this and all future events in the series?", c.push(e), c.push(f)) : (d = "Would you like to delete only this instance of the event, or all events in this series?", c.push(e)), c.push(h)) : (d = "When working offline, changes to recurring events do not apply to the entire series. You can only modify individual instances of recurring events.", c.push(e));
  var l = new N5(d, c, "Delete recurring event");
  O(l, "action", function() {
    var b = l.B.A;
    b && aAa(a, b)
  });
  l.setVisible(m)
}

function aAa(a, b) {
  var c = ru(Yp, a);
  if (su(og(R()), c) && (LG(c) || Oj(c, 2097152))) {
    var d = nta(c.getTitle()),
        e = (new nw).set("yes", "Delete & notify guests", m).set("no", "Delete without notifying guests").set("cancel", "Don't delete", p, m);
    ku(new Js, function(a) {
      "yes" != a.key && "no" != a.key || bAa(c, b, "yes" == a.key)
    }, "Delete event?", d, e)
  } else bAa(c, b, p)
}
function Yza(a, b, c) {
  T7();
  var d = Cq(a.getId());
  Hp();
  c.push("src", a.Aa(), "eid", a.getId());
  b && "ONE" !== b && c.push("scp", b);
  r2(c);
  q2(c);
  return d
}

function bAa(a, b, c) {
  S7();
  var d = [],
      e = Yza(a, b, d);
  c && d.push("nopts", 4);
  Cf(Af(R()), "deleteevent", d, 1, D, function() {
    CG(e);
    Hp();
    Ir(R()).b("Oops, we couldn't delete this event, please try again in a few minutes")
  })
}
function S7() {
  wx(yx(R())).Ka()
};

function U7() {}
Xa(U7);
U7.prototype.A = function(a) {
  if ("yes" == a.key) {
    var b;
    var c = W("tr-owner").value;
    c ? (b = yD.M(), c = b.o(c), b = !c || 1 > c.length || 1 < c.length || !b.b(c[0], m) ? p : m) : b = p;
    if (!b) {
      GG(new Js, cAa, "Invalid new owner", I("Please specify a single, valid email address as the new owner."), LK());
      a.preventDefault();
      a.stopPropagation();
      return
    }
    this.Nc && this.Nc(this.o, W("tr-owner").value, W("tr-message").value)
  }
  l2(R(), "tr-owner")
};
U7.prototype.B = function() {
  setTimeout(E(this.b, this), 0)
};
U7.prototype.b = function() {
  m2(R(), "tr-owner", p);
  cAa()
};

function cAa() {
  var a = W("tr-owner");
  a && a.focus()
}
U7.prototype.show = function(a, b) {
  var c = a.O.Qb(),
      d = a.b.Qb();
  this.o = a;
  this.Nc = b || n;
  V7.put("event_title", om(c));
  c = yk(R()).Hk(d);
  V7.put("event_date", c);
  c = (new nw).set("yes", "Change owner").set("no", "Don't change", p, m);
  ku(new Js, E(this.A, this), "Choose new owner", V7.toString(), c, E(this.B, this))
};
var V7 = new V("<div><p>You are transferring ownership of this event:<blockquote><b>${event_title}</b><br>${event_date}</blockquote><p><label for=tr-owner><b>New owner:</b></label><br><input id=tr-owner><p><label for=tr-message><b>Message to the new owner:</b></label><br><textarea id=tr-message rows=3>I would like to transfer ownership of this event using Google Calendar.</textarea></div>");
var dAa = {
  CREATE: "Oops, we couldn't create this event, please try again in a few minutes",
  RESPOND: "Failed to respond to event",
  EDIT: "Oops, we couldn't edit this event, please try again in a few minutes"
};

function eAa(a, b) {
  fp();
  this.content = a;
  this.b = b
}
var W7 = n;

function DC(a, b, c, d, e, f) {
  if (!W7) {
    var h = ru(Yp, a);
    h && h.Ge() || (d = d ? d : h ? h.Aa() : n, a = ["eid", a, "sf", "true", "hl", "en", "output", "xml"], d && a.push("src", d), b && a.push("emid", 4, "emid", 6, "emid", 8), c && a.push("action", "VIEW_ORIGINAL"), X7(a), r2(a), q2(a), W7 = window.setTimeout(fAa, 2500), Af(R()).send("event", a, 18, function(a) {
      Bt( !! b, a);
      Y7(e, f);
      gAa(m)
    }, F(gAa, p), k, k, 1))
  }
}
function X7(a) {
  if (R()) {
    var b = Rq(R());
    qu(b.o, Ca) && UG(new ff(window.location), "eventdeb") && a.push("eventdeb", "1")
  }
}

function fAa() {
  W7 && (window.clearTimeout(W7), W7 = n)
}
function Y7(a, b) {
  fAa();
  a && a.b();
  b && (b.b(), b.report())
}
function QR(a, b) {
  for (var c = Array(a.length), d, e = 0; e < a.length; ++e) 0 == e % 2 && "src" == a[e] && (d = a[e + 1]), c[e] = a[e];
  d || ((d = Osa()) || (d = Sh(R())), c.push("src", d));
  X7(c);
  hAa(c) ? b && b.b() : (c.push("action", "TEMPLATE", "sf", "true", "hl", "en", "output", "xml"), Af(R()).send("event", c, 0, function(a) {
    Bt(p, a);
    Y7(b, k)
  }, k, k, k, 1))
}

function hAa(a) {
  try {
    var b = {};
    b.src = Sh(R());
    for (var c = "????????/????????", d = [], e = {}, f = 0; f < a.length; f += 2) {
      var h = a[f],
          l = a[f + 1];
      if (l) switch (h) {
      case "recur":
      case "details":
      case "text":
      case "location":
      case "src":
      case "unbounded":
        b[h] = l;
        break;
      case "dates":
        c = l;
        break;
      case "add":
        d.push(l);
        break;
      case "pprop":
        var q = l.match(/^([^:]+):(.*)/);
        if (!q) break;
        var r = q[1],
            s = q[2];
        if ("HowCreated" === r) e[r] = s;
        else
        return p;
        break;
      case "ctz":
        break;
      default:
        return p
      }
    }
    if (c) {
      var u = a2(c);
      b.dates = u;
      b.crm = u.start.Sb() && isNaN(u.start.hour) ? "AVAILABLE" : "BUSY"
    } else b.crm = "AVAILABLE";
    if (d.length) {
      a = {};
      for (f = 0; f < d.length; ++f) {
        var x = ig.M(),
            z = d[f],
            A = RG(x, d[f]);
        if (A) {
          var z = A,
              G = Hu(x, A);
          G && (z = G.uid)
        }
        a[z] = 0
      }
      a[Sh(R())] = 1;
      b.add = a
    }
    e && (b.pprop = e);
    var M, N, d = {};
    for (N in b) d[N] = b[N];
    var X = R(),
        $ = Sh(X),
        ca = d.src || $;
    Pza(ca, X, d);
    d.creator = $;
    d.src = ca;
    d.owner = d.src;
    M = Qza("CREATE", 70, 130999, d, 0);
    Bt(p, M);
    return m
  } catch (ua) {
    return p
  }
}

function Wza(a, b) {
  a.push("sf", "true");
  a.push("pprop", "eventColor:none");
  if (iAa(a)) {
    var c = "Would you like to send invitations to guests?",
        d = R();
    Nu(Rh(d)) && (c += "<div class=\"ep-forcenotifwarn\">Please note: Even if you select 'Don't Send', all non-Google Calendar attendees on this invitation will be sent an email invitation.</div>");
    ku(new Js, function(c) {
      switch (c.key) {
      case "yes":
        lz(a);
        Z7(a, "CREATE", b);
        break;
      case "no":
        Z7(a, "CREATE", b);
        break;
      case "cancel":
        c = [];
        for (var d = 0; d < a.length; d += 2) {
          var h = a[d],
              l = a[d + 1];
          switch (h) {
          case "recur":
          case "details":
          case "text":
          case "location":
          case "src":
          case "dates":
          case "add":
          case "pprop":
          case "ctz":
            c.push(h), c.push(l)
          }
        }
        QR(c, b)
      }
    }, "Send invitations?", c, (new nw).set("yes", "Send", m).set("no", "Don't send").set("cancel", "Continue editing", p, m))
  } else Z7(a, "CREATE", b)
}
function iAa(a) {
  for (var b = 0; b < a.length; b += 2) if ("add" == a[b]) return m;
  return p
}
function mz(a, b) {
  var c = Array.apply(window, b);
  c.push("eid", a.getId(), "src", a.Aa(), "sf", "true");
  Wt(a, 64, m);
  Z7(c, "EDIT")
}

function Z7(a, b, c) {
  for (var d = Array(a.length), e = n, f = 0; f < a.length; ++f) d[f] = a[f], "eid" == a[f] && (e = a[f + 1]);
  a = R();
  if ("CREATE" == b) {
    for (var h = p, l, q, f = [], r = 0; !h && r < d.length - 1; r += 2)"sprop" == d[r] && nb(d[r + 1], "goo.rtc:") ? h = m : "add" == d[r] ? f.push(d[r + 1]) : "src" == d[r] ? l = d[r + 1] : "text" == d[r] && (q = d[r + 1]);
    h || (q = q || t, h = fE(Td(a), Ph(a)), 3 != h && 1 != h) || (l = Lsa(a, q, l, f), q = new oD(a, 0, t, t), eE(new dE(q, l, m), h), uta(d, q))
  }
  d.push("action", b, "output", "js");
  r2(d);
  q2(d);
  l = jAa(d);
  l = F(kAa, dAa[b], l);
  Cf(Af(a), "event", d, 17, F(lAa, b, e, c), l, F(mAa, c));
  Hp()
}
function kAa(a, b) {
  b && b();
  Ir(R()).b(a);
  Hp()
}
function mAa(a) {
  a && a.b()
}
function lAa(a, b, c) {
  "CREATE" == a && (Cq(b), Hp());
  c && (a = c.Fa(), b = lJ(R()), a = b.o(b.b().YB, a), a.b(), a.report())
}
function Voa(a, b, c, d, e, f) {
  a = ["eid", a, "src", b, "rst", c, "action", "RESPOND", "sf", "true", "output", "js", "hl", "en"];
  "ALL" === d && a.push("scp", "ALL");
  e && a.push("rgu", e);
  f && a.push("rcomment", f);
  r2(a);
  q2(a);
  X7(a);
  return a
}

function k_(a, b, c, d, e, f) {
  e = Voa(a.getId(), a.Aa(), b, c, e, f);
  Cf(Af(R()), "event", e, 3, F(nAa, a, b, c), F(oAa, a, d, b));
  Hp()
}

function nAa(a, b, c) {
  var d = Ij(a.getTitle()),
      e = Ir(R());
  if (6 == b) e.o("You have reported " + d + " as spam.");
  else {
    switch (b) {
    case 1:
      b = "Yes";
      break;
    case 2:
      b = "No";
      break;
    case 3:
      b = "Maybe";
      break;
    default:
      return
    }
    d = '<span class="lk" onmousedown="_EF_ShowEventDetails(' + w2(a.getId()) + ')">' + d + "</span>";
    if ("ALL" === c) e.o('You have replied "' + b + '" to ' + d + " on all events in the series.");
    else {
      if (a.Db()) a = Kl.Ek(a.Fa());
      else {
        c = Kl;
        var f = a.Fa();
        a = c.xd(f.va(), Zt(c, f));
        f = c.ob(f);
        a = tl(Ck(c.b.b, gl, 5), [a, f])
      }
      e.o('You have replied "' + b + '" to ' + d + " on " + a + ".")
    }
  }
}
function oAa(a, b, c) {
  6 == c && CG(a);
  EI(a.getId(), a.Aa(), b);
  Hp();
  Ir(R()).b("Failed to respond to event")
}

function pAa(a, b) {
  var c;
  cb(a.content) && (a.content = Gsa(a.content));
  c = a.content;
  if (a.b) for (var d = {
    summary: n,
    dates: n,
    rrule: n,
    "first-start": n,
    location: n,
    description: n
  }, e = c.documentElement.firstChild; e; e = e.nextSibling) e.nodeName in d && "editable" === e.getAttribute("access") && e.setAttribute("editing", "true");
  if ((d = c.getElementsByTagName("calendars")[0]) && !d.firstChild) {
    for (var e = {}, f = c.getElementsByTagName("principal"), h = f.length; 0 <= --h;) {
      var l = f[h],
          q = parseInt(l.getAttribute("status"), 10);
      e[l.getAttribute("id")] =
      q
    }
    Tza(d, e)
  }
  b();
  qAa();
  d = R();
  $7 || ($7 = new Fsa(d), e = Af(d), rAa = new F2(e, Yp), e = Rh(d), !e || Fc(e.o || {}) && !e.A ? a8 = new s6(d) : (Rq(d).b("dasher"), a8 = new C6(d), !Fc(e.o || {}) && (b8 = a8.o)));
  sAa = new L7(Af(d));
  e = new X6(NA());
  d = new E7(R(), 0, T("coverinner"), $7, rAa, a8, sAa, ZF, e);
  Zc(d, "tc", tAa);
  c8 = d;
  uAa = e;
  e = Td(R()).isEnabled(15);
  f = Yg(S(R()), "UseAutoResponder", "false");
  c = new b2(d.W, c, e && f);
  Lu(d.o, c, "V", d.NM, k);
  Td(d.A).isEnabled(41) && d.o.I(d.da, "ep-ksh-save", d.QM);
  c.start()
}

function Bt(a, b) {
  uC();
  var c = new eAa(b, a);
  Lp(Jp.M(), "f", F(pAa, c))
}

function vAa(a, b) {
  var c = a.clone(),
      d = [],
      e = [],
      f = [],
      h = p,
      l = !a.o,
      q = R(),
      r = Sh(q),
      s;
  for (s in b) {
    var u = b[s];
    switch (s) {
    case "add":
      for (var x = u.length; 0 <= --x;) {
        var z = u[x],
            A = wAa(z);
        A ? A == r && Wt(a, 512, m) : (A = "FAKEUID" + (Vd++).toString(), z = Lra(z), kg(ig.M(), new Lf(A, z[1], z[0], 100)));
        Vn(a, A) || (mG(a, A, 0, 0, n), a.o += 1)
      }
      break;
    case "del":
      for (x = u.length; 0 <= --x;) if (z = u[x], (A = wAa(z)) && Vn(a, A)) {
        var G = a,
            z = A;
        z == G.Aa() && G.lf(z == G.Bc ? 5 : 4);
        delete Tn(G)[z];
        G.A = k;
        a.o -= 1;
        A == r && Wt(a, 512, p)
      }
      break;
    case "dates":
      h = m;
      x = u[0];
      A = x.indexOf("/");
      u = qz(x.substring(0, A));
      x = qz(x.substring(A + 1));
      Psa(a.getId(), u, x);
      break;
    case "unbounded":
      x = a.getId();
      (x = ru(Yp, x)) && x.ff("true" == u[0]);
      break;
    case "location":
      h = m;
      x = a.getId();
      if (x = ru(Yp, x)) x.Tc = u[0], Yp.P(iq);
      break;
    case "text":
      h = m;
      DI(a.getId(), u[0]);
      break;
    case "rst":
      u = parseInt(u[0], 10);
      u in eba && EI(a.getId(), a.Aa(), u);
      break;
    case "rgu":
      u = parseInt(u[0], 10);
      (x = Vn(a, a.Aa())) ? x.pf = u : x = {
        eb: 0,
        pi: p,
        Je: n,
        pf: u,
        Xg: n
      };
      u = a;
      A = a.Aa();
      Tn(u)[A] = x;
      u.A = k;
      break;
    case "rcomment":
      (x = Vn(a, a.Aa())) ? x.Xg = u[0] : x = {
        eb: 0,
        pi: p,
        Je: n,
        pf: 0,
        Xg: u[0]
      };
      u = a;
      A = a.Aa();
      Tn(u)[A] = x;
      u.A = k;
      break;
    case "sprop":
      for (x = u.length; 0 <= --x;) A = u[x].split(":"), a.b[A[0]] = A[1];
      break;
    case "pprop":
      for (x = u.length; 0 <= --x;) A = u[x].split(":"), a.C[A[0]] = A[1];
      break;
    case "erem":
      for (x = u.length; 0 <= --x;) z = u[x], G = z.lastIndexOf(":") + 1, A = z.substring(G), z = z.substring(0, G) + 1, 0 == A ? d.push(z) : 1 == A ? e.push(z) : f.push(z);
      break;
    case "targ":
      a.Ra = u[0];
      a.ya = r;
      Mj.M().Ke(a.Aa(), m);
      break;
    case "details":
      h = m;
      break;
    case "icc":
      "PRIVATE" == u[0] || "CONFIDENTIAL" == u[0] ? Wt(a, 4096, m) : Wt(a, 4096, p)
    }
  }
  l && 0 < a.o && !Vn(a, r) && (mG(a, r, 1, 0, n), a.o += 1);
  d = ct(d, f);
  d = d.concat(ct(e, d));
  q = Vj(q);
  e = esa(q, a);
  if (d.length != e.length || 0 < ct(e, d).length) {
    e = [];
    q = nr(q, a.Aa(), a.Db() && Sd(9));
    for (f = 0; f < q.length; f++) e.push(q1(q[f]));
    d.length == e.length && 0 == ct(d, e).length ? (a.F = n, Wt(a, 262144, p)) : (d = Qn(d, a.Aa()), a.F = d, Wt(a, 262144, m))
  }
  Oj(a, 2097152) || xu(a) || !h || Wt(a, 131072, m);
  return c
}

function jAa(a) {
  for (var b = {}, c = 0; c < a.length;) {
    var d = a[c++],
        e = a[c++];
    d in b || (b[d] = []);
    "text" == d && (e = I(e));
    b[d].push(e)
  }
  if (b.recur) return n;
  a = b.eid[0];
  if ("CREATE" == b.action[0]) {
    c = b.src[0];
    Mj.M().Ke(c, m);
    var f, h;
    (d = b.dates && b.dates[0]) ? (h = d.indexOf("/"), f = qz(d.substring(0, h)), h = qz(d.substring(h + 1))) : g(Error("missing dates for new event."));
    f = Bq(a, t, f, h, c, c, c, 2097221, 0, n, n, 0, {}, {}, {}, n);
    vAa(f, b);
    return F(Cq, a)
  }
  f = ru(Yp, a);
  if (!f) return n;
  b = vAa(f, b);
  return F(CG, b)
}

function wAa(a) {
  var b = ig.M();
  a = RG(b, a);
  return (b = Hu(b, a)) && SG(b) ? b.uid : n
}
function xAa() {
  ep("ef_dismiss");
  qAa();
  ax(n);
  return m
}
function T7() {
  var a = Jp.M();
  "g" != a.wc && (a.Xd = F(Mp, xAa || id) || n, Kp(a, "g"))
}
function jQ(a, b, c, d, e, f) {
  a = ["action", "TEMPLATE", "tmeid", c, "tmsrc", b, "catt", a ? "true" : "false", "pprop", "HowCreated:DUPLICATE", "sf", "true", "hl", "en", "scp", d ? "ALL" : "ONE", "output", "xml"];
  e && a.push("src", e);
  X7(a);
  Af(R()).send("event", a, 0, function(a) {
    T7();
    Bt(p, a);
    Y7(f, k)
  }, k, k, k, 1)
}

function yAa(a, b) {
  var c = WI(),
      d = Dv(),
      e = Rw(),
      f = c;
  e ? d != n && c != n && (f = xv(c)[0] + "/hosted/" + e) : d != n && c != n && (f = xv(c)[0]);
  c = jm(zAa, {
    href: f + "/event?action=TEMPLATE&tmeid=" + encodeURIComponent(t + a) + "&tmsrc=" + encodeURIComponent(b)
  });
  c = jm(AAa, {
    code: c,
    escapedCode: I(c)
  });
  d = new tK("comment-dialog");
  d.Vd = m;
  DK(d, LK());
  d.setTitle("Publish event");
  vK(d, c);
  d.setVisible(m)
}

function Xza(a, b, c, d, e, f, h, l, q) {
  var r = [];
  c && r.push("location", c);
  d && !/[^\?T]/.test(d.toString()) && (d = n);
  e && !/[^\?T]/.test(e.toString()) && (e = n);
  d && ("string" == typeof d && (d = tz(d)), e || (e = u2(d), d instanceof au ? (e.Y += 1, e = e.Rb()) : (c = Mw(R()), 0 == c ? (e.minute += 60, r.push("unbounded", m)) : e.minute += c, e = e.dd())), r.push("dates", d.toString() + "/" + e.toString()));
  a && r.push("text", a.$w);
  if (f && 0 < f.length) for (a = 0; a < f.length; ++a) if (d = RG(ig.M(), f[a])) f[a] = d, r.push("add", d);
  b && r.push("details", b);
  h && r.push("pprop", "quickAddQuery:" + h);
  r.push("pprop", "HowCreated:" + l);
  q && r.push("recur", q);
  return r
}

function sea(a, b, c, d) {
  var e, f, h;
  c ? (e = Sy(c).start.toString(), f = Sy(c).end.toString(), h = c.b.get()) : (e = xp(R()).A(), e = Ll().max(e[0]).min(e[1]), e = Gg(e), f = $h(Jl()), e.hour = f.hour, e.minute = 30 > f.minute ? 30 : 60, e.second = 0, e = e.Ea(), f = Gg(e), c = Mw(R()), 0 == c ? (f.minute += 60, h = m) : f.minute += c, f = f.Ea().toString(), e = e.toString());
  c = [];
  b && c.push("src", b);
  d && c.push("text", d);
  h && c.push("unbounded", m);
  c.push("dates", e + "/" + f);
  c.push("pprop", "HowCreated:BUTTON");
  QR(c, a)
}
function lz(a) {
  a.push("nopts", 2, "nopts", 3, "nopts", 4)
}
var zAa = new V('<a target="_blank" href="${href}"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif"></a>'),
    AAa = new V('<table style="width:600px"><tr><td align=center>${code}<div id="ep-publish-msg">Put this code on your site so that visitors can easily add this event to their Google Calendar.</div><textarea id="publishCode" rows="3" style="width:600px">${escapedCode}</textarea></td></tr></table>');

function kwa(a, b) {
  var c = a.C,
      d = c.b,
      e = Mh(Ph(R())).Ma(),
      d = Cb(dh(d), function(a) {
      return 100 == a.Bb() && a.email != e
    }),
      f;
  d.length || (d = k, f = [a.bb]);
  var h = kta(a.O.get()),
      l = c.W,
      c = l ? "Enter the message you would like to send to the organizer of this event." : "Enter the message you would like to send to the guests of this event.",
      l = l ? "Send an email to the organizer" : "Send an email to guests",
      q = R(),
      q = zo(q);
  xL.M().show(l, c, b, t, h, f, n, d, q)
}
function jwa(a, b, c, d, e) {
  a = fp();
  var f = R();
  Rq(f).b("dasher", F(BAa, a, b, c, d, e))
}

function BAa(a, b, c, d, e) {
  var f = ZF;
  b.Ud = E(zwa, b);
  c && pva(c, b);
  e && e.o(b);
  a.b("resource_picker");
  var h = d && !d.A;
  if (!f.b || h) c = R(), csa(Jd(c, 809), b.G()), b = function() {
    f.b && !h && a.b("fetch_resource_request_block")
  }, f.b || Zc(f, "Nb", b), h && Zc(d, v, b)
}
function Q4() {
  if (!Usa) {
    Usa = m;
    var a = R();
    Rq(a).b("dasher", function() {
      var a = ZF;
      a.b || $F(function(c) {
        a.D(c)
      })
    })
  }
}
function gAa(a) {
  Dd(Ld(R(), 800), function(b) {
    a ? b.zs && XH(b.tx, "event", "scs") : b.zs && XH(b.tx, "event", "fr")
  })
};
var c8 = n,
    $7 = n,
    rAa = n,
    a8 = n,
    b8 = n,
    sAa = n,
    uAa = n,
    d8 = t;

function qAa() {
  if (c8) {
    var a = c8;
    a.O = m;
    a.aa()
  }
}

function tAa() {
  var a = c8,
      b = a.Ee(),
      c = a.B.ka,
      d = b.bH,
      e = Ir(R());
  0 < d.length ? e.o(d) : e.Ka();
  var d = Jp.M(),
      f = E(a.iJ, a);
  d.Xd = f || n;
  var d = new E1,
      f = b.getId(),
      h = b.A.b.get();
  O(a, "hc", CAa);
  O(a, "oc", F(Zza, f));
  O(a, "kc", F(d.b, f));
  O(a, "pc", F(DAa, b));
  O(a, "uc", EAa);
  O(a, ["lc", "mc", "nc"], F(FAa, b));
  O(a, "ac", F(yAa, f, h));
  O(a, "xc", F(GAa, f));
  Zc(a, "sc", HAa);
  O(a, "Pb", Hr(R(), "One or more documents you picked were already attached to the event"));
  d = j2(183665, "Learn more");
  O(a, "X", E(e.o, e, "The Calendar Connector has timed out. " + d));
  O(a, "V", IAa);
  O(a, "W", JAa);
  e = R();
  (e = Rh(e).b) && Q4();
  d = sza(a.B);
  f = 0;
  for (h = d.length; f < h; ++f) {
    var l = d[f],
        q = new P4(ZF, b.b, m, 0, k, b.D, b.F, c, k);
    e || (O(a, "bc", Q4), O(l, "Fb", Q4));
    O(l, "Gb", F(jwa, b, q, l, c, k));
    O(l, "Db", F(kwa, b, F(lwa, b)))
  }
  Td(R()).isEnabled(41) && O(uAa, "ep-ksh-back", KAa);
  ax(b)
}
function JAa(a) {
  d8 = a.type;
  a = R();
  Ir(a).b("One or more guests or rooms could not be loaded. Please try again in a few moments.", d8)
}
function IAa() {
  Ir(R()).Ka(d8)
}

function lwa(a) {
  var b = ["eid", a.getId(), "src", a.A.b.get()];
  a = xL.M();
  b = b || [];
  Oza(a, b);
  Cf(Af(a.C), "email", b, 0, D);
  return p
}
function EAa() {
  var a = fp(),
      b = lJ(R()),
      b = b.o(b.b().YB);
  Kp(Jp.M(), "g");
  a.b("ef_to_main");
  Ir(R()).b("(Still saving changes...)");
  var c = c8,
      d = c.Ee();
  PE(d) && Dya(d.F);
  var e, f;
  PE(d) ? e = f = LAa(d) : f = MAa(d);
  e && Zc(c, "wc", e);
  Zc(c, "wc", F(NAa, a, b));
  f && Zc(c, "vc", f);
  Zc(c, "vc", F(OAa, a, b))
}

function PAa(a) {
  var b = a.D;
  return b && b.D.get() && "WEEKLY" == b.C.get() ? (b = b.A.get(), a = a.b.get().start.Jb(), Jb(b, yE[a])) : m
}
function QAa(a) {
  a = a.D;
  return !!a && a.Ba()
}
function RAa(a) {
  return I(a)
}
function LAa(a) {
  if (!PAa(a)) return n;
  var b = a.b.get(),
      c = a.A.o.get();
  if (!(b.start instanceof Sg && b.end instanceof Sg)) return n;
  var d = a.getId(),
      e = RAa(a.O.get()),
      f = 2097221;
  Sd(24) && a.tb.get() && (f |= 1048576);
  Bq(d, e, b.start, b.end, c, c, c, f, 0, n, n, 0, {}, {}, {}, n);
  Hp();
  return function() {
    Cq(d);
    Hp()
  }
}

function DAa(a) {
  a = a.getId();
  a = we(["eid", a, "src", ru(Yp, a).Aa(), "sf", "true", "pjs", "true"]);
  var b;
  b = t + "printevent";
  a && (b += "?" + a);
  a = b;
  SS.set("PDF_INLINE", "ok", 120, "/calendar/");
  NS(a, {
    target: "_blank"
  })
}

function MAa(a) {
  var b = a.getId(),
      c = ru(Yp, b);
  if (!c) return n;
  var d = RAa(a.O.get()),
      e = a.A.o.get();
  if (QAa(a)) {
    var f = c.getTitle(),
        h = c.Aa();
    c.setTitle(d);
    c.Ra = e;
    Wt(c, 64, m);
    Hp();
    return function() {
      c.Ra = h;
      c.setTitle(f);
      Wt(c, 64, p);
      Hp()
    }
  }
  var l = c.clone(),
      q = a.b.get();
  c.setTitle(d);
  Psa(b, q.start, q.end);
  c.ff(a.tb.get());
  c.Ra = e;
  Wt(c, 64, m);
  Hp();
  return function() {
    CG(l);
    Hp()
  }
}
function KAa() {
  var a = D,
      b = Hw(document);
  b && (b.blur(), a = function() {
    b.focus()
  });
  SAa(a)
}
function CAa() {
  SAa()
}

function SAa(a) {
  ep("ef_dismiss_back");
  Kp(Jp.M(), "g", k, a)
}
function NAa(a, b, c) {
  c = c.target.D.ll();
  a && a.b("ef_save_success");
  b && b.A();
  Ef(D.get(R()), c);
  b && (b.b(), b.report())
}
function OAa(a, b) {
  Ir(R()).b("Failed to save event");
  a && a.b("ef_save_fail");
  b && (b.b(), b.report())
}
function HAa() {
  var a = Jp.M();
  "f" == a.wc && Kp(a, "g");
  ax(n);
  c8 = n
}
function GAa(a) {
  DC(a, p, m)
}

function FAa(a, b) {
  var c = fp();
  switch (b.type) {
  case "nc":
    c.fb = "ef_dup_from_menu";
    var d = a.D;
    jQ(p, a.A.o.get(), a.getId(), !! d && d.D.get(), b.getId(), c);
    break;
  case "lc":
    c.fb = "ef_copy_from_menu";
    var e = a.A.o.get(),
        d = a.D;
    jQ(m, e, a.getId(), !! d && d.D.get(), e, c);
    break;
  case "mc":
    a.Xa ? (c = F(TAa, a), d = (new nw).set("yes", "Change for all events", m).set("cancel", "Cancel"), ku(new Js, c, "Change owner for all events in series?", "It's not possible to change the owner for a single event in a series. <p> Do you want to change the owner for all events in this series?", d)) : U7.M().show(a, UAa)
  }
}
function UAa(a, b, c) {
  var d = a.D;
  d && d.D.Qb() || a.Xa ? VAa(a, b, c, "ALL") : VAa(a, b, c, "ONE")
}
function TAa(a, b) {
  "yes" == b.key && U7.M().show(a, UAa)
}
function VAa(a, b, c, d) {
  var e = a.getId();
  a.A.o.get();
  a = yD.M().o(b)[0];
  c = ["eid", e, "hl", "en", "invMsg", c, "invEmail", a, "scp", d];
  K(c8);
  Cf(Af(R()), "reqevxfer", c, 0, D)
}
function _ME_AddExternalData(a) {
  var b = R();
  Rq(b).b("dasher", function() {
    WAa(a)
  })
};

function e8(a, b, c, d, e, f) {
  this.A = a;
  this.o = d || D;
  this.B = e || D;
  this.D = f || t;
  this.Ga = new tK("static-form-dialog");
  this.Ga.setTitle(b);
  vK(this.Ga, c);
  this.Ga.Vd = m;
  this.Ga.o.Aq = n;
  a = Z(this.Ga);
  Xd(a, this.Ga, "dialogselect", this.C, p, this);
  XAa(this)
}

function XAa(a) {
  a.b = Ui(a.Ga.Ab(), function(a) {
    return "FORM" == a.tagName
  });
  Mu(Z(a.Ga), a.b, "submit", function(a) {
    a.preventDefault();
    this.o.call(n, this, this.D, this.b)
  }, a);
  for (var b = 0; b < a.b.elements.length; b++) {
    var c = a.b.elements[b];
    "BUTTON" == c.tagName && Mu(Z(a.Ga), c, "click", a.F, a)
  }
}
e8.prototype.setVisible = function(a) {
  this.Ga.setVisible(a);
  var b = Jd(this.A, 9);
  a ? (a = gb(this), b.Ii.add(a + t), this.b.elements[0].focus()) : (a = gb(this), b.Ii.remove(a + t))
};
e8.prototype.F = function(a) {
  this.o.call(n, this, a.target.name, this.b)
};
e8.prototype.C = function() {
  this.setVisible(p);
  this.B.call(n)
};

function f8() {
  P.call(this);
  this.Cb = "closure_frame" + YAa++;
  this.o = [];
  ZAa[this.Cb] = this
}
var g8;
H(f8, P);
var ZAa = {},
    YAa = 0;

function $Aa(a, b) {
  var c = wi(a);
  le(b, function(b, e) {
    var f = c.U("input", {
      type: "hidden",
      name: e,
      value: b
    });
    a.appendChild(f)
  })
}
B = f8.prototype;
B.Vb = n;
B.zc = n;
B.pj = n;
B.pT = 0;
B.If = p;
B.en = p;
B.Tq = p;
B.Kr = n;
B.Uk = 0;
B.Cj = n;
B.send = function(a, b, c, d) {
  this.If && g(Error("[goog.net.IframeIo] Unable to send, already active."));
  a = new ff(a);
  b = b ? b.toUpperCase() : "GET";
  c && VG(a, "zx", R1());
  g8 || (g8 = Ei("form"), g8.acceptCharset = "utf-8", c = g8.style, c.position = "absolute", c.visibility = "hidden", c.top = c.left = "-10px", c.width = c.height = "10px", c.overflow = "hidden", document.body.appendChild(g8));
  this.Vb = g8;
  "GET" == b && $Aa(this.Vb, a.b);
  d && $Aa(this.Vb, d);
  this.Vb.action = a.toString();
  this.Vb.method = b;
  aBa(this);
  h8(this)
};

function bBa(a, b) {
  a.If && g(Error("[goog.net.IframeIo] Unable to send, already active."));
  var c = new ff(b.action);
  a.Vb = b;
  a.Vb.action = c.toString();
  aBa(a)
}
B.abort = function(a) {
  if (this.If) {
    var b = i8(this);
    Tw(b);
    this.Tq = this.If = this.en = p;
    this.Uk = a || 7;
    this.P("abort");
    j8(this)
  }
};
B.L = function() {
  this.If && this.abort();
  f8.J.L.call(this);
  this.zc && cBa(this);
  h8(this);
  this.Vb = n;
  delete this.A;
  this.Kr = this.B = this.Vb = n;
  this.Uk = 0;
  delete ZAa[this.Cb]
};
B.Sb = w("en");
B.oe = w("Tq");
B.qc = w("If");
B.Ki = w("Kr");
B.ll = function() {
  return uG(this.Kr)
};
B.Or = w("Uk");

function aBa(a) {
  a.If = m;
  a.en = p;
  a.Uk = 0;
  a.pj = a.Cb + "_" + (a.pT++).toString(36);
  var b = {
    name: a.pj,
    id: a.pj
  };
  J && 7 > oc && (b.src = 'javascript:""');
  a.zc = wi(a.Vb).U("iframe", b);
  b = a.zc.style;
  b.visibility = "hidden";
  b.width = b.height = "10px";
  b.display = "none";
  ic ? b.marginTop = b.marginLeft = "-10px" : (b.position = "absolute", b.top = b.left = "-10px");
  if (J && !qc("11")) {
    a.Vb.target = a.pj || t;
    wi(a.Vb).Sa().body.appendChild(a.zc);
    O(a.zc, "readystatechange", a.iw, p, a);
    try {
      a.b = p, a.Vb.submit()
    } catch (c) {
      $c(a.zc, "readystatechange", a.iw, p, a), k8(a, 1)
    }
  } else {
    wi(a.Vb).Sa().body.appendChild(a.zc);
    var b = a.pj + "_inner",
        d = $v(a.zc),
        e = "<body><iframe id=" + b + " name=" + b + "></iframe>";
    document.baseURI && (e = '<head><base href="' + I(document.baseURI) + '"></head>' + e);
    gc ? d.documentElement.innerHTML = e : d.write(e);
    O(d.getElementById(b), "load", a.Nr, p, a);
    for (var f = a.Vb.getElementsByTagName("textarea"), e = 0, h = f.length; e < h; e++) {
      var l = f[e].value;
      Iw(f[e]) != l && (Ti(f[e], l), f[e].value = l)
    }
    f = d.importNode(a.Vb, m);
    f.target = b;
    f.action = a.Vb.action;
    d.body.appendChild(f);
    for (var l = a.Vb.getElementsByTagName("select"), q = f.getElementsByTagName("select"), e = 0, h = l.length; e < h; e++) for (var r = l[e].getElementsByTagName("option"), s = q[e].getElementsByTagName("option"), u = 0, x = r.length; u < x; u++) s[u].selected = r[u].selected;
    l = a.Vb.getElementsByTagName("input");
    q = f.getElementsByTagName("input");
    e = 0;
    for (h = l.length; e < h; e++) if ("file" == l[e].type && l[e].value != q[e].value) {
      a.Vb.target = b;
      f = a.Vb;
      break
    }
    try {
      a.b = p, f.submit(), d.close(), hc && pe(a.wD, 250, a)
    } catch (z) {
      $c(d.getElementById(b), "load", a.Nr, p, a), d.close(), k8(a, 2)
    }
  }
}
B.iw = function() {
  if (this.zc.readyState == wa) {
    $c(this.zc, "readystatechange", this.iw, p, this);
    var a;
    try {
      if (a = $v(this.zc), J && "about:blank" == a.location && !navigator.onLine) {
        k8(this, 9);
        return
      }
    } catch (b) {
      k8(this, 1);
      return
    }
    dBa(this, a)
  }
};
B.Nr = function() {
  if (!gc || "about:blank" != (this.zc ? $v(i8(this)) : n).location) {
    $c(i8(this), "load", this.Nr, p, this);
    try {
      dBa(this, this.zc ? $v(i8(this)) : n)
    } catch (a) {
      k8(this, 1)
    }
  }
};

function dBa(a, b) {
  a.en = m;
  a.If = p;
  var c;
  try {
    var d = b.body;
    a.Kr = d.textContent || d.innerText;
    a.B = d.innerHTML
  } catch (e) {
    c = 1
  }
  c || typeof a.A != Ea || (d = a.A(b)) && (c = 4);
  c ? k8(a, c) : (a.Tq = m, a.Uk = 0, a.P(wa), a.P("success"), j8(a))
}
function k8(a, b) {
  a.b || (a.Tq = p, a.If = p, a.en = m, a.Uk = b, a.P(wa), a.P("error"), j8(a), a.b = m)
}
function j8(a) {
  cBa(a);
  h8(a);
  a.Vb = n;
  a.P("ready")
}

function cBa(a) {
  var b = a.zc;
  b && (b.onreadystatechange = n, b.onload = n, b.onerror = n, a.o.push(b));
  a.Cj && (qe(a.Cj), a.Cj = n);
  hc || gc ? a.Cj = pe(a.kE, 2E3, a) : a.kE();
  a.zc = n;
  a.pj = n
}
B.kE = function() {
  this.Cj && (qe(this.Cj), this.Cj = n);
  for (; 0 != this.o.length;) {
    var a = this.o.pop();
    Li(a)
  }
};

function h8(a) {
  a.Vb && a.Vb == g8 && Ii(a.Vb)
}
function i8(a) {
  return a.zc ? J && !qc("11") ? a.zc : $v(a.zc).getElementById(a.pj + "_inner") : n
}
B.wD = function() {
  if (this.If) {
    var a = this.zc ? $v(i8(this)) : n;
    a && !Vb(a, "documentUri") ? ($c(i8(this), "load", this.Nr, p, this), navigator.onLine ? k8(this, 3) : k8(this, 9)) : pe(this.wD, 250, this)
  }
};

function eBa() {
  return new e8(R(), "Add by URL", '<form autocomplete="off" class="gc-dialogbody"><table class="gc-dialogtable gc-dialogouter"><tr><th class="gc-fieldtitle gc-dialogbold"><label for="url">URL:</label></th><td><div><input name="url" class="gc-dialoginput"></div><div class="gc-dialogrow gc-dialogcaption">If you know the address to a calendar (in iCal format), you can type in the address here.</div><div class="gc-dialogrow"><input type="checkbox" name="makepublic" id="makePublicCheck"><label for="makePublicCheck">Make the calendar publicly accessible?</label></div><div class="gc-dialogrow"><button type="button" name="add"class="gc-dialogbold">Add Calendar</button><button type="button">Cancel</button></div></td></tr></table></form>', fBa, k, "add")
}
function fBa(a, b, c) {
  "add" == b && (b = R(), Rq(b).b(ya, function() {
    l8(c.url.value, c.makepublic.checked)
  }));
  a.setVisible(p)
}

function m8(a, b) {
  var c = om(a || t),
      d = "Invite Person:",
      e = t + c + " does not have a Google Calendar account",
      f = "Type in a brief message to invite this person to Google Calendar.",
      h = x2() ? "I've been using Google Calendar to organize my calendar and share my schedule with coworkers. I thought you might like to use Google Calendar too." : "I've been using Google Calendar to organize my calendar, find interesting events, and share my schedule with friends and family members. I thought you might like to use Google Calendar, too.",
      l = "Send Invite";
  "REQUEST" == b && (d = "Request Access:", e = "You do not have access to " + c + "'s calendar", f = "Type in a brief message to request access to this calendar.", h = x2() ? "I've been using Google Calendar to organize my calendar and share my schedule with coworkers. I'd like to be able to view your calendar to make scheduling things together even easier." : "I've been using Google Calendar to organize my schedule, find interesting events, and share my schedule with friends and family members. I'd like to be able to view your calendar to make scheduling things together even easier.", l = "Send Request");
  jm(gBa, {
    title: d,
    message: e,
    instructions: f,
    note: h,
    button: l
  });
  n8.put("email", c);
  n8.put("invite", b ? gBa.toString() : t);
  c = x2() ? "Add a coworker's calendar" : "Add a friend's calendar";
  return new e8(R(), c, n8.toString(), F(hBa, a, b), k, "add")
}

function hBa(a, b, c, d, e) {
  if ("add" == d) {
    var f = e.address.value;
    if (f) a = R(), Rq(a).b(ya, function() {
      iBa(f)
    });
    else {
      Ks(new Js, "Please enter an email address", "You need to enter an email address in order to add somebody else's calendar.");
      return
    }
  } else "invite" == d && (a = ["invEmail", a, "invMsg", e.calinvitemsg.value, "invAction", b, "hl", "en"], Cf(Af(R()), "invitecaluser", a, 0, D));
  c.setVisible(p)
}

function o8() {
  var a = [];
  p8(a, "hl", "en");
  var b = R(),
      c = Sh(b);
  a.push(Nsa(c));
  p8(a, "ctz", ot());
  for (var c = Eq(), d = 0; d < c.length; ++d) p8(a, "lef", I(c[d]));
  p8(a, "droi", I(zsa(Dq())));
  c = $e(Ka);
  p8(a, Ka, I(c || t));
  jBa.put("dropdownFields", a.join(t));
  return new e8(b, "Import calendar", jBa.toString(), kBa, k, "import")
}
function kBa(a, b, c) {
  if ("import" == b) {
    var d = new f8;
    Zc(d, wa, function() {
      vK(a.Ga, d.B || t);
      XAa(a);
      jI(500);
      jI(3E3);
      jI(15E3)
    });
    bBa(d, c)
  } else a.setVisible(p)
}

function p8(a, b, c) {
  a.push("<input type=hidden name=", b, ' value="', I(c), '">')
}
var n8 = new V('<form autocomplete="off" class="gc-dialogbody"><table class="gc-dialogtable gc-dialogouter"><tr><th class="gc-fieldtitle gc-dialogbold gc-dialogrow"><label for="address">Contact Email:</label></th><td><table class="gc-dialogtable-inner"><tr><td style="width:100%"><input name="address" class="gc-dialoginput" value="${email}"></td><td><button type="button" name="add">Add</button></td></tr></table><div class="gc-dialogrow gc-dialogcaption">Enter the email address of another person to view their calendar. Not all of your contacts will have calendar information that is shared with you, but you can invite them to create a Google Calendar account, or share their calendar with you.</div></td></tr>${invite}</table></form>'),
    gBa =
    new V('<tr><td class="gc-dialogspacer"></td></tr><tr><td class="gc-fieldtitle gc-dialogbold">${title}</td><td><div class="gc-dialogbold">${message}</div><div class="gc-dialogcaption gc-dialogrow">${instructions}</div><div class="gc-dialogrow"><textarea name="calinvitemsg" class="gc-dialoginput" rows="5">${note}</textarea></div><div><button type="button" name="invite">${button}</button></div></td></tr>'),
    jBa = new V('<form autocomplete="off" class="gc-dialogbody" method="POST" enctype="multipart/form-data" action="upload_event"><table><tr><th class="gc-fieldtitle gc-dialogbold"><label for="filename">File:</label></th><td><div><input class="gc-dialoginput" name="filename" type="file" size="30"></div><div class="gc-dialogrow gc-dialogcaption">Choose the file that contains your events. Google Calendar can import event information in iCal or CSV (MS Outlook) format.' + j2(34573, "Learn more", "lk") + '</div></td></tr><tr><td class="gc-dialogspacer"></td></tr><tr><th class="gc-fieldtitle gc-dialogbold gc-dialogrow"><label for="src">Calendar:</label></th><td><div>${dropdownFields}</div><div class="gc-dialogrow gc-dialogcaption">Choose the calendar where these events should be saved.</div><div class="gc-dialogrow"><button type="button" name="import" class="gc-dialogbold">Import</button><button type="button">Cancel</button></div></td></tr></table></form>');