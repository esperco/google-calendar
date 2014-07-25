/*
  https://www.google.com/calendar/static/307387de4562bc5dba423644325c5f55calendarjs_gadgetcompiled__en.js
*/

function AD(a, b) {
  for (var c = b.length, d = 0; d < c; d++) {
    var e = 1 == c ? b : b.charAt(d);
    if (a.charAt(0) == e && a.charAt(a.length - 1) == e) return a.substring(1, a.length - 1)
  }
  return a
}
function BD(a, b, c) {
  var d = c ? 1 : -1,
      e = b;
  c && (e = new Ig(0, 0, a.b(b), 0), c = Gg(b), hk(c, e), e = c.Ea());
  a = new Ig(0, 0, d * a.b(e), 0);
  c = Gg(b);
  hk(c, a);
  return c.Ea()
}
gp.prototype.A = eu(56, function() {
  return [this.b.first, this.b.Ub]
});
op.prototype.A = eu(55, function() {
  var a = Gg(this.b.focus.va());
  a.Y = 1;
  var b = a.Ea();
  a.Y = tg(a.year, a.month);
  a = a.Ea();
  return [b, a]
});

function CD(a, b) {
  b = Fv(b);
  b = b.replace(a.B, t);
  var c = b.match(a.A);
  return c && c[3] ? AD(c[3], '"') || n : n
}
function DD(a) {
  var b = a.Qb();
  a = a.get();
  return b && a ? !b.start.va().equals(a.start.va()) : b !== a
}
function sfa(a, b) {
  return Db(Dc(b), function(a) {
    return this.da[a]
  }, a)
}
function ED(a, b) {
  a.Eb();
  for (var c = p, d = 0; d < b.length; ++d) c = a.add(b[d]) || c;
  a.xb();
  return c
}
function FD(a, b) {
  return BD(a, b, m)
}
function GD(a, b, c) {
  var d = 5;
  a ? d = 1 : b ? d = c ? 2 : 3 : c && (d = 4);
  return d
}
function HD(a, b) {
  return b in a
}
function tfa(a, b) {
  return a === b
}

function ID(a, b, c) {
  if (!$a(a) || !$a(b) || a.length != b.length) return p;
  var d = a.length;
  c = c || tfa;
  for (var e = 0; e < d; e++) if (!c(a[e], b[e])) return p;
  return m
}
var JD = {
  resource: 103,
  group: 102,
  holiday: 102,
  "import": 104,
  "public": 105,
  domain: 107,
  tasklist: 109,
  intershard: 110
},
    KD = ["calendar.google.com", "v.calendar.google.com"];

function LD(a) {
  a = nD(a);
  var b = a.indexOf("-");
  return -1 == b ? a : a.substring(0, b)
}

function ufa(a) {
  a = nD(a);
  if (!a) return a;
  for (var b = a.split("-"), c = [], d = 0; d < b.length; d++) {
    var e = b[d];
    if (0 == d) {
      if (15 < e.length) return e.substring(0, 15);
      c.push(e)
    } else {
      var f = c.join("-");
      c.push(e);
      if (15 < c.join("-").length) return f
    }
  }
  return a
}
function MD(a, b) {
  Pw.call(this, Pb(a || []), b)
}
H(MD, Pw);
B = MD.prototype;
B.aj = function(a) {
  var b = this.X;
  return b === a ? m : ID(b, a)
};
B.Qb = w("b");
B.get = w("X");
B.set = function(a) {
  this.Ad(Pb(a || []))
};
B.Hi = function(a, b) {
  var c = Pb(this.X);
  c[a] = b;
  this.Ad(c)
};
B.push = function(a) {
  var b = Pb(this.X);
  b.push(a);
  this.Ad(b)
};
B.pop = function() {
  var a = Pb(this.X),
      b = a.pop();
  this.Ad(a);
  return b
};

function ND(a, b) {
  ez.call(this, a || t);
  this.D = b || t
}
H(ND, ez);

function OD() {
  return S(R()).getString("timezone", "Etc/GMT")
}
function PD(a, b, c) {
  this.b = a;
  this.B = b;
  this.A = c;
  this.D = c.b;
  this.o = new Q(this)
}
H(PD, uc);
PD.prototype.get = function() {
  var a = {},
      b = this.A.A;
  b && 100 == b.b && (a[b.Ma()] = m);
  for (var b = dh(this.B), c = 0; c < b.length; c++) {
    var d = b[c];
    d.Mc() || (a[d.getKey()] = m);
    if (2 < Bc(a)) return QD(this, this.b.get())
  }
  if (0 == Bc(a)) return QD(this, this.b.get());
  var b = [],
      e;
  for (e in a) b.push(LD(e));
  Rb(b);
  return b.join("-")
};

function QD(a, b) {
  var c = ufa(b);
  if (c) return c;
  c = a.A.A.Ma();
  return c = LD(c)
}
PD.prototype.L = function() {
  K(this.o);
  PD.J.L.call(this)
};

function RD(a, b, c, d, e) {
  this.B = a = Jd(a, 5);
  d = d || t;
  e = e || t;
  this.A = b = b ? b : d ? Hu(a, d) : jg(a, e);
  this.D = !! c;
  this.b = new ez(b ? b.Ma() : d);
  this.o = new ez(b ? b.uid : e);
  c = new Q(this);
  c.I(this.b, v, this.C);
  c.I(this.o, v, this.F);
  this.ja = c
}
H(RD, uc);
RD.prototype.C = function() {
  var a = this.B;
  a && (this.A = a = Hu(a, this.b.get()), this.o.set(a ? a.uid : t))
};
RD.prototype.F = function() {
  if (this.B) {
    var a = jg(this.B, this.o.get());
    this.A = a;
    this.b.set(a ? a.Ma() : t)
  }
};
RD.prototype.L = function() {
  K(this.b);
  K(this.o);
  K(this.ja);
  RD.J.L.call(this)
};
var SD = {
  5: 0,
  1: 1,
  3: 2,
  2: 3,
  0: 10
};

function TD(a, b, c, d, e, f, h, l, q, r) {
  this.wa = new pz( !! h);
  this.Cc = new pz( !! l);
  this.b = new MD(q || []);
  ah.call(this, [this.wa, this.Cc, this.b]);
  this.email = a;
  this.ea = b != n ? b : 0;
  this.Zb = c || a;
  this.Rg = d || t;
  this.hf = e || 0;
  if (!(b = f)) t: {
    for (var s in JD) for (b = 0, c = KD.length; b < c; ++b) if (ob(a, "@" + s + "." + KD[b])) {
      b = JD[s];
      break t
    }
    b = 100
  }
  this.ka = b;this.A = !! r;this.o = a;this.B = p
}
H(TD, ah);
B = TD.prototype;
B.rk = p;
B.getKey = w("email");
B.Bb = w("ka");
B.Mc = function() {
  return 103 == this.ka
};

function UD(a) {
  return a.wa.get()
}
function VD(a) {
  return a.Cc.get()
}
B.equals = function(a) {
  return this === a || !! a && this.email === a.email && this.ea === a.ea && this.Zb === a.Zb && this.Rg === a.Rg && this.hf === a.hf && this.ka === a.ka && this.wa.equals(a.wa) && this.Cc.equals(a.Cc)
};

function WD(a) {
  return !a.rk && 108 != a.ka
}
B.toString = w("email");

function XD(a) {
  ah.call(this, a);
  this.A = {};
  this.b = {};
  this.o = {};
  a = dh(this);
  for (var b = 0; b < a.length; ++b) {
    var c = a[b],
        d = c.email,
        e = !UD(c);
    WD(c) && e && (this.o[d] = m);
    this.b[d] = d
  }
}
H(XD, ah);

function YD(a, b) {
  return a.getItem(b)
}
function ZD(a, b) {
  return a.getItem(b) || a.Ia[b]
}
function $D(a) {
  return Cb(dh(a), function(a) {
    return a.Mc()
  })
}
XD.prototype.Da = function(a) {
  return !!this.o[a]
};
XD.prototype.setVisible = function(a, b) {
  var c = this.getItem(a);
  !c || this.Da(a) == b || b && !WD(c) || (b ? this.o[a] = m : Gc(this.o, a), bh(this, b ? "R" : "Q", c), ch(this))
};
XD.prototype.add = function(a) {
  var b = a,
      c = b.getKey(),
      d = this.A[c];
  d && d != b.o && (b.o = d);
  if (d = this.b[b.o]) {
    var e = this.getItem(d);
    if (e) {
      if (VD(e)) return e.Cc.set(p), bh(this, "S", e), m;
      bh(this, "T", a);
      return p
    }
    if (a = ZD(this, d)) b = a, c = b.getKey()
  }
  this.Eb();
  (a = XD.J.add.call(this, b)) && (this.b[b.o] = c);
  b.rk || this.setVisible(c, !UD(b));
  this.xb();
  return a
};
XD.prototype.remove = function(a) {
  this.Eb();
  var b = p;
  (b = this.getItem(a)) && 0 < b.b.get().length ? (b.Cc.set(m), bh(this, "S", b), b = m) : (this.setVisible(a, p), b = XD.J.remove.call(this, a));
  this.xb();
  return b
};

function aE(a) {
  return sfa(a, a.o)
}
function bE() {
  return S(R()).get("SecondaryDisplayTimezone") || OD()
}
var cE = {
  1: "accepted",
  2: "declined",
  3: "tentative",
  5: "organizer",
  0: "invited"
};

function dE(a, b, c) {
  this.b = a;
  this.D = b;
  this.o = 1 == this.b.b.get() ? this.b.o.get() : t;
  this.B = 2 == this.b.b.get() ? this.b.o.get() : t;
  this.A = !! this.o && !c;
  !this.A && this.b.B && (a = this.D, b = E(this.C, this), a.o.I(a.b, v, b), a.o.I(a.B, "h", b), a.o.I(a.D, v, b), this.C())
}
dE.prototype.hb = function() {
  switch (this.b.b.get()) {
  case 0:
  case 2:
    return this.b.B || this.b.C || this.b.A;
  case 3:
    return this.b.A;
  case 1:
    return this.b.B;
  default:
    return this.b.b.get(), p
  }
};

function eE(a, b) {
  switch (b) {
  case 0:
    break;
  case 1:
    break;
  case 2:
    break;
  case 3:
    break;
  default:
    return
  }
  var c = a.b.b.get();
  a.b.b.set(b);
  if (a.b.b.get() != c) {
    2 == c ? a.B = a.b.o.get() : 1 == c && (a.o = a.b.o.get());
    switch (a.b.b.get()) {
    case 3:
    case 0:
      c = t;
      break;
    case 1:
      c = a.o;
      break;
    case 2:
      c = a.B;
      break;
    default:
      a.b.b.get(), c = t
    }
    a.b.o.set(c)
  }
}
dE.prototype.C = function() {
  this.A || (this.o = this.D.get(), 1 == this.b.b.get() && this.b.o.set(this.o))
};

function vfa(a) {
  var b = a.b.o.get();
  if (!b) return n;
  switch (a.b.b.get()) {
  case 0:
    return n;
  case 1:
    return Td(a.b.D).isEnabled(94) ? (a = a.b.getUrl(n, n)) && a.split("?")[0] : n;
  case 2:
    return "VC bridge " + b;
  case 3:
    return n;
  default:
    return a.b.b.get(), n
  }
}
function fE(a, b) {
  var c = _delayedLoadContext.defaultHangouts;
  a.isEnabled(88) || (c = Yg(b.b, "autoHO", c));
  if (c && qD(a)) {
    if (a.isEnabled(90)) return 1;
    if (pD(a)) return 3
  }
  return 0
}

function gE(a, b) {
  if (a.wa.Qb() !== b.wa.Qb()) return a.wa.Qb() ? 1 : -1;
  var c = 100 == a.ka,
      d = 100 == b.ka;
  return a.wa.Qb() || c === d ? (c = SD[a.ea] - SD[b.ea]) ? c : qb(a.Zb, b.Zb) || qb(a.email, b.email) : c ? -1 : 1
}

function hE(a) {
  for (var b = {}, c = dh(a), d = 0; d < c.length; ++d) {
    var e = c[d],
        f = e.getKey();
    a.Ia[f] || (b[f] = e)
  }
  this.b = b;
  b = {};
  c = dh(a);
  for (d = 0; d < c.length; ++d) e = c[d], e.Ba && e.Ba() && (b[e.getKey()] = e);
  this.B = b;
  b = {};
  c = Cc(a.Ia);
  for (d = 0; d < c.length; ++d) e = c[d], f = e.getKey(), a.getItem(f) || (b[f] = e);
  this.A = b;
  this.o = new Q(this);
  this.o.I(a, "h", this.iL)
}
H(hE, uc);
B = hE.prototype;
B.iL = function(a) {
  for (var b = fh(a, "f"), c = 0, d = b.length; c < d; ++c) {
    var e = b[c],
        f = b[c].getKey();
    Gc(this.A, f) ? e.Ba && e.Ba() && (this.B[f] = e) : this.b[f] = e
  }
  b = fh(a, v);
  c = 0;
  for (d = b.length; c < d; ++c) e = b[c], f = b[c].getKey(), f in this.b || (e.Ba && e.Ba() ? this.B[f] = e : Gc(this.B, f));
  a = fh(a, "g");
  c = 0;
  for (d = a.length; c < d; ++c) e = a[c], f = e.getKey(), Gc(this.b, f) || (Gc(this.B, f), this.A[f] = e)
};
B.vP = function() {
  return Dc(this.b)
};
B.oB = function() {
  return Dc(this.A)
};
B.Ba = function() {
  return !Fc(this.b) || !Fc(this.B) || !Fc(this.A)
};
B.L = function() {
  K(this.o);
  hE.J.L.call(this)
};

function iE(a) {
  Rb(a);
  return a
}
function jE(a, b, c, d, e, f, h, l, q, r, s) {
  this.o = new iD(a, aba);
  this.W = e;
  this.b = new iD(b, cba);
  this.F = f;
  this.A = new iD(c, bba);
  this.C = h;
  this.H = d;
  this.B = l || n;
  a = ii(q) ? q : "none";
  a = hi ? ki(a) : li(a);
  this.D = new ez(a);
  this.K = r || n;
  this.O = s || n;
  r = [this.o, this.b, this.A, this.D];
  this.B && r.push(this.B);
  ah.call(this, r)
}
H(jE, ah);

function wfa() {
  var a = $w.M().b;
  if (a) for (var b = xp(R()).A(), b = kE(b), c = 0; c < a.D.length; ++c)(0, a.b.call)(a.D[c], "calendar.date_change", n, b)
}
function lE() {
  return Yg(S(R()), "HasSecondaryTimezone", "false")
}
function xfa(a, b, c) {
  for (var d in a) if (b.call(c, a[d], d, a)) return m;
  return p
}
function mE(a) {
  ah.call(this, a)
}
H(mE, ah);

function nE(a, b, c, d, e) {
  this.D = a;
  this.b = new iD(b, dba);
  this.A = new ez(c);
  this.o = new iD(d, lD);
  this.B = !! e;
  ah.call(this, [this.b, this.A, this.o])
}
H(nE, ah);

function oE(a, b) {
  this.B = new pE(a);
  this.o = new pE(b);
  ah.call(this, [this.B, this.o])
}
H(oE, ah);

function qE(a) {
  return !Uu(a.B.get())
}
oE.prototype.A = Qa(77);

function rE(a) {
  return a.B.get()
}
oE.prototype.b = Qa(78);

function pE(a) {
  Pw.call(this, a || n)
}
H(pE, Pw);
pE.prototype.get = w("X");
pE.prototype.set = function(a) {
  this.Ad(a)
};
pE.prototype.aj = function(a) {
  var b = this.get();
  return b === a || b && a && b.equals && a.equals && a.equals(b) ? m : p
};

function sE(a, b, c) {
  Pw.call(this, a || n, c);
  this.D = !! b
}
H(sE, Pw);
sE.prototype.get = w("X");
sE.prototype.set = function(a) {
  this.Ad(a)
};

function tE(a, b) {
  var c = Gg(a.get());
  c.hour = b.hour;
  c.minute = b.minute;
  c.second = b.second;
  c = c.Ea();
  a.set(c)
}
sE.prototype.aj = function(a) {
  var b = this.X;
  return b === a ? m : b && a && b.equals && a.equals ? this.D ? a.va().equals(b.va()) : a.equals(b) : p
};

function uE(a, b, c, d, e, f, h, l, q, r, s, u, x, z, A, G) {
  this.C = new ez(a, yfa);
  this.b = new sE(b, m);
  this.D = new pz(c);
  this.$b = d;
  this.F = new sE(e || n);
  this.Z = new iD(f || 0, lD);
  this.B = new iD(h || 1, pfa);
  this.A = new MD(l || n, iE);
  this.W = new MD(q || n, iE);
  this.O = new MD(r || n, iE);
  this.H = new MD(s || n, iE);
  this.K = new MD(u || n, iE);
  this.Ja = new ez(x || t, zfa);
  this.Ha = z || n;
  this.ib = !! A;
  this.Xa = G || n;
  this.bb = new ah([this.C, this.F, this.Z, this.B, this.A, this.W, this.O, this.H, this.K, this.Ja]);
  this.o = new Q(this);
  this.o.I(this.bb, v, this.dH);
  ah.call(this, [this.bb, this.b, this.D])
}
H(uE, ah);

function vE(a) {
  var b = wE(a.Jb());
  return new uE("WEEKLY", a, p, m, k, k, 1, [b])
}
uE.prototype.ya = n;
uE.prototype.L = function() {
  this.ya && (ad(this.ya), this.ya = n);
  uE.J.L.call(this);
  K(this.o)
};
uE.prototype.clone = function() {
  var a = this.C.get(),
      b = n;
  this.b.get() && (this.b.get() instanceof Qg ? b = Gg(this.b.get()).Ea() : b = Gg(this.b.get()).va());
  var c = this.D.get(),
      d = this.$b,
      e = n;
  this.F.get() && (this.F.get() instanceof Qg ? e = Gg(this.F.get()).Ea() : e = Gg(this.F.get()).va());
  for (var f = this.Z.get(), h = this.B.get(), l = [], q = 0; q < this.A.get().length; q++) {
    var r = this.A.get()[q];
    l[q] = r instanceof xE ? new xE(r.o, r.b) : r
  }
  var q = Pb(this.W.get()),
      r = Pb(this.O.get()),
      s = Pb(this.H.get()),
      u = Pb(this.K.get()),
      x = this.Ja.get();
  return new uE(a, b, c, d, e, f, h, l, q, r, s, u, x, this.Ha)
};
var yfa = Pf(),
    yE = "SU MO TU WE TH FR SA".split(" "),
    Afa = Lc(Cc({
    z0: "SU",
    F_: "MO",
    J0: "TU",
    O0: "WE",
    C0: "TH",
    o_: "FR",
    p0: "SA",
    L0: t
  })),
    zfa = Pf();

function wE(a) {
  if (!(6 < a)) return yE[a]
}
B = uE.prototype;
B.clear = function(a) {
  this.Eb();
  this.C.set(a);
  this.B.set(1);
  this.A.set(n);
  this.W.set(n);
  this.O.set(n);
  this.H.set(n);
  this.K.set(n);
  this.xb()
};
B.Ie = Qa(79);
B.mb = w("Z");
B.hb = w("$b");
B.dH = function() {
  this.Xa = this.Ha = n;
  this.ib = p
};
B.WG = function(a, b, c, d) {
  var e = d.target;
  d = vz(e);
  b ? this.b.set(d.start) : c ? DD(e) ? this.b.set(d.start) : (b = this.b, b.Ad(b.b), isNaN(d.start.hour) || tE(this.b, d.start)) : isNaN(d.start.hour) || tE(this.b, d.start);
  b = this.b.get();
  !isNaN(b.hour) && qE(a) && (b = FD(rE(a), b.Ea()));
  "MONTHLY" == this.C.get() && this.A.get()[0] instanceof xE && this.A.set([zE(b)]);
  "WEEKLY" == this.C.get() && 1 == this.A.get().length && (a = wE(b.Jb()), this.A.set([a]))
};

function xE(a, b) {
  this.o = a;
  this.b = b
}

function zE(a) {
  var b = wE(a.Jb());
  a = ((a.Y - 1) / 7 | 0) + 1;
  4 < a && (a = -1);
  return new xE(a, b)
}
xE.prototype.toString = function() {
  return this.o + this.b
};

function AE(a) {
  Pw.call(this, a || n)
}
H(AE, Pw);
AE.prototype.get = w("X");
AE.prototype.set = function(a) {
  this.Ad(a)
};

function BE(a, b) {
  this.A = a.o;
  this.Xh = a.tb || a.A;
  this.bb = a.A;
  var c = a.o.b;
  this.Oj = c.get() == this.Xh;
  this.O = a.B;
  this.Z = a.K;
  this.Nl = a.Wb || new AE;
  this.ya = a.H;
  this.C = a.D;
  this.F = this.C.b;
  this.Sg = a.b;
  this.bH = a.Z;
  this.Yx = Jd(this.Sg, 5);
  this.K = a.X || 1;
  this.zx = a.ib || t;
  this.wo = a.Ha || t;
  this.xH = !! a.zb;
  this.Ml = !! a.Xa;
  c = [this.O, this.Z, this.Nl, this.ya, c, this.C];
  b && (c = Ob(c, b));
  ah.call(this, c)
}
H(BE, ah);
BE.prototype.ay = function() {
  var a = this.bb;
  return Hu(this.Yx, a) || new Jf(a)
};
BE.prototype.Wb = function() {
  if (this.Oj) return this.A.A;
  var a = this.Xh;
  return Hu(this.Yx, a) || new Jf(a)
};
BE.prototype.L = function() {
  K(this.A);
  BE.J.L.call(this)
};

function Bfa() {};

function CE(a, b) {
  this.ic = a;
  this.A = b;
  for (var c = 0, d = this; d = d.getParent();) c++;
  this.b = c;
  c = this.ic.email;
  for (d = this; d = d.getParent();) c += "/" + d.ic.email;
  this.o = c
}
CE.prototype.getParent = w("A");
CE.prototype.getId = w("o");

function DE(a, b, c, d, e) {
  this.b = a;
  this.o = new hE(a);
  this.C = 1 == b || 2 == b || 3 == b;
  this.K = 1 == b;
  this.H = 1 == b;
  this.W = !(1 == b || 2 == b || 4 == b);
  this.B = c;
  this.Z = !! d;
  this.D = e || 0;
  this.A = {};
  this.O = new EE(this, m);
  this.F = new EE(this, p);
  this.ya = {};
  ah.call(this, [this.b, this.B]);
  this.ja = new Q(this);
  this.ja.I(a, "h", this.nH)
}
H(DE, ah);

function FE(a, b) {
  for (var c = yD.M(), d = [], e = [], f = [], h = c.o(a.B.get()), l = 0; l < h.length; ++l) {
    var q = h[l];
    if (q) {
      var r = c.b(q);
      r ? (r = r.toLowerCase(), e.push(r), q = CD(c, q), d.push(new TD(r, k, q || k))) : f.push(q)
    }
  }
  b && !f.length && (a.B.set(t), ED(a.b, d));
  return new Cfa(d, f)
}
function GE(a) {
  var b = FE(a).o;
  Ev(b, Cc(a.o.b));
  a = {};
  for (var c = 0; c < b.length; ++c) {
    var d = b[c];
    a[d.getKey()] = d
  }
  return a
}
B = DE.prototype;
B.Fx = function() {
  return HE(this, Cc(this.o.b), p)
};
B.Ex = function() {
  var a = IE(this);
  return HE(this, a, m)
};

function IE(a) {
  return Cb(Cc(a.b.Ia), function(a) {
    return !a.Mc()
  })
}
function HE(a, b, c) {
  b = Cb(b, function(a) {
    return !VD(a)
  });
  Rb(b, gE);
  var d = [],
      e = E(function(a, b) {
      var l = new CE(a, b);
      d.push(l);
      !HD(this.A, l.getId()) || l.ic.email in this.o.A || Bb(Dfa(this, a, c), function(a) {
        e(a, l)
      })
    }, a);
  Bb(b, function(a) {
    e(a, n)
  });
  return d
}

function Dfa(a, b, c) {
  var d = {},
      e = [];
  Bb(c ? Cc(a.b.Ia) : Ob(dh(a.b), Cc(a.b.Ia)), function(a) {
    if (!d[a.getKey()]) {
      d[a.getKey()] = m;
      var h = c ? a.b.Qb() : a.b.get();
      !a.Mc() && Jb(h, b.email) && e.push(a)
    }
  }, a);
  Rb(e, gE);
  return e
}
function JE(a, b) {
  for (var c = 0; 2 > c; c++) Bb(b.call(a), function(a) {
    !HD(this.A, a.getId()) && 2 > a.b && 108 == a.ic.Bb() && Ww(this.A, a.getId(), m)
  }, a)
}
B.nH = function(a) {
  this.F.b = n;
  var b = fh(a, "S");
  (0 < fh(a, "f").length && KE(this) > this.D || 0 < b.length && LE(this)) && this.P("U")
};

function LE(a) {
  var b = GE(a);
  return xfa(b, function(a) {
    return !VD(a) && a.B
  }, a)
}
function KE(a) {
  function b(a) {
    Bb(d, function(d) {
      Jb(c[d].b.get(), a) && !e[d] && (e[d] = m, b(d))
    }, this)
  }
  var c = GE(a),
      d = Dc(c),
      e = {};
  Bb(d, function(a) {
    var d = c[a];
    e[a] || VD(d) || (e[a] = m, b(a))
  }, a);
  return Bc(e)
}
B.sq = Qa(80);
B.L = function() {
  K(this.o);
  K(this.ja);
  DE.J.L.call(this)
};

function Cfa(a, b) {
  this.o = a;
  this.b = b
}
function ME() {
  this.b = {};
  this.o = {
    1: 0,
    2: 0,
    3: 0,
    0: 0
  }
}
function EE(a, b) {
  this.o = a;
  this.B = new ME;
  this.A = b
}

function NE(a, b, c) {
  var d = a.b[b];
  d || (d = new ME, a.b[b] = d);
  if (!d.b[c.email]) {
    d.b[c.email] = m;
    var e = c.ea;
    d.o[e] += 1 == e || 3 == e ? 1 + c.hf : 1;
    "<top>" != b && (b = a.A ? a.o.b.Ia[b] : a.o.b.getItem(b)) && (VD(b) || NE(a, "<top>", c), Bb(a.A ? b.b.Qb() : b.b.get(), function(a) {
      NE(this, a, c)
    }, a))
  }
};

function OE(a, b) {
  this.Td = a.F || "newEvent";
  this.Co = a.ka;
  this.Xa = !! a.bb;
  this.yG = !! a.$b;
  this.b = a.C;
  this.Ja = a.da;
  this.tb = a.Ib || new pz(p);
  this.B = a.Ia;
  this.W = a.W;
  if (this.D = a.O) {
    var c = this.D,
        d = this.b,
        e = this.Ja,
        f = PE(this);
    c.ya && ad(c.ya);
    c.ya = O(d, v, E(c.WG, c, e, f, m))
  }
  this.ib = a.ya || n;
  if (this.H = a.Pg || n) c = new PD(a.B, a.D.b, a.o), PE(this) && (d = fE(Td(a.b), Ph(a.b)), 0 != d && (eE(new dE(this.H, c, PE(this)), d), this.H = new oD(a.b, uD(this.H), this.H.o.get(), vD(this.H)))), this.$b = new dE(this.H, c, PE(this));
  this.Ud = a.Cc || p;
  c = this.b.get();
  c = new Sf(this.Td, c.start, c.end);
  d = a.o.b.get();
  c.Ra = d;
  c.setTitle(QE(a.B.get()));
  a.A && (c.Bc = a.A);
  this.Ha = c;
  this.o = new Q(this);
  c = [this.b, this.tb, this.B, this.W];
  b && (c = Ob(c, b));
  this.D && c.push(this.D);
  this.ib && c.push(this.ib);
  this.H && !tD(this.H) && c.push(this.H);
  this.Ja && c.push(this.Ja);
  this.Sc = a.wa || 0;
  BE.call(this, a, c);
  PE(this) && this.C != n && 0 < dh(this.C.b).length && RE(this);
  this.xG = a.Ja || n;
  this.gf = p;
  PE(this) && SE(this) && this.Io();
  this.o.I(this.A.b, v, this.XG);
  this.o.I(this.O, v, this.aH);
  this.o.I(this.B.o, v, this.$G);
  this.o.I(this.b, v, this.ZG);
  this.o.I(this.F, "h", this.YG);
  SE(this) && this.Z.get() == TE(this) && (this.o.I(this.Z, v, this.Sx), this.o.I(this.H, v, this.Io))
}
H(OE, BE);

function SE(a) {
  return Td(a.Sg).isEnabled(94) && !! a.$b && a.$b.hb() && !a.$b.b.A
}
function QE(a) {
  return I(a)
}
B = OE.prototype;
B.Yu = p;
B.aH = function() {
  this.Ha.setTitle(QE(this.O.get()))
};
B.$G = function() {
  this.Yu = m
};
B.ZG = function() {
  var a = vz(this.b);
  if (a) {
    this.Ha.Ri(a.start.Ea(), a.end.Ea());
    var b = this.Ha,
        c = isNaN(a.start.hour);
    b.X = c;
    b.da = !c && b.da
  }!this.Yu && PE(this) && 4 != this.B.b.get() && (a && !isNaN(a.start.hour) ? this.B.o.set(0) : this.B.o.set(1), this.Yu = p)
};
B.YG = function(a) {
  var b = fh(a, "f");
  a = fh(a, "g");
  Hb(Ob(b, a), function(a) {
    return a.Mc()
  }) && this.Io();
  b.length != this.F.size() || a.length || RE(this)
};
B.Sx = function() {
  this.gf || (this.o.b(this.Z, v, this.Sx), this.o.b(this.H, v, this.Io))
};
B.Io = function() {
  if (UE(this)) try {
    this.gf = m, this.Z.set(TE(this))
  } finally {
    this.gf = p
  }
};

function TE(a) {
  var b = [],
      c = $D(a.F);
  c.length && (b = Db(c, function(a) {
    return a.Zb
  }), Rb(b));
  a.$b && a.$b.hb() && (a = vfa(a.$b)) && b.push(a);
  return b.join(", ")
}
function RE(a) {
  var b = a.A.A;
  if (100 != b.Bb()) return p;
  var c = b.Ma(),
      d = a.F;
  if (d.contains(c)) return p;
  a = a.W;
  b = new TD(c, 5, Kf(b), a ? a.A.get() : k, a ? a.o.get() : k, b.Bb());
  d.add(b);
  return m
}
function PE(a) {
  return "newEvent" == a.Td
}
function UE(a) {
  return a.Oj || 1 == a.B.A.get()
}
B.getId = w("Td");
B.XG = function(a) {
  a = a.o;
  var b = this.F;
  b.contains(a) && (b.Eb(), RE(this) && b.remove(a), b.xb());
  a = this.A.A;
  b = a.Ma();
  this.Ha.Ra = b;
  100 != a.Bb() && (a = this.B.o, 2 == a.get() && a.set(0))
};
B.hb = function() {
  return 3 == this.K || 2 == this.K || this.C.C || this.C.K || !this.W.B || !! this.B.B
};
B.L = function() {
  K(this.o);
  OE.J.L.call(this)
};
B.$l = Qa(81);
B.RC = Qa(82);
B.vA = Qa(83);

function VE() {}
H(VE, Bfa);

function WE(a, b, c, d, e) {
  this.b = a;
  this.B = b || n;
  this.D = c || a;
  this.A = d || Efa;
  this.o = e || t
}
var Efa = Ow("attachment.png");
B = WE.prototype;
B.getUrl = function() {
  var a;
  0 < this.o.length ? (a = Dv(), a = a != n ? this.o + "mail/u/" + a + "/" + this.b : Sw() ? this.o + "a/" + Rw() + "/" + this.b : this.o + "mail/" + this.b) : a = this.b;
  return a
};
B.getTitle = w("D");
B.getId = w("B");
B.getKey = function() {
  return this.o + this.b
};
B.equals = function(a) {
  return a == n ? p : this === a || this.getUrl() == a.getUrl() && this.getTitle() == a.getTitle() && this.getId() == a.getId() && this.A == a.A
};

function XE(a, b) {
  this.o = a;
  this.b = b
}
XE.prototype.getTitle = w("b");
XE.prototype.getUrl = w("o");

function pF(a, b) {
  this.b = a;
  this.o = bg.M();
  this.A = b || p
}
function qF(a, b) {
  if (!a) return n;
  var c = a.getElementsByTagName(b);
  return c && c.length ? c[0] : n
}
function rF(a, b) {
  return Cv(qF(a, b || "value"))
}
function sF(a, b) {
  var c = qF(a, b || "value");
  return c ? Cv(c) : n
}

function tF(a, b) {
  var c = b || "html",
      d = qF(a, c),
      e;
  try {
    if ("undefined" != typeof XMLSerializer) e = (new XMLSerializer).serializeToString(d);
    else {
      var f = d.xml;
      f ? e = f : g(Error("Your browser does not support serializing XML documents"))
    }
  } catch (h) {
    return Cv(d)
  }
  if (e == "<" + c + "/>" || e == "<" + c + " />") return t;
  var d = "<" + c + ">",
      f = "</" + c + ">",
      l = e.length - f.length;
  0 == e.indexOf(d) && e.indexOf(f) == l && (e = e.substring(d.length, l));
  "html" != c && (e = yv(e));
  return e
}

function uF(a, b) {
  var c = a.getAttributeNode(b);
  return !(!c || "true" != c.nodeValue)
}
function vF(a) {
  a = a.getAttributeNode("access");
  return !(!a || "editable" != a.nodeValue)
}
function wF(a, b) {
  var c = a[b];
  return c ? c.value : t
}
function xF(a) {
  if (a) {
    var b = a.getAttribute("timeZoneData");
    b && _setTzTransitions(b);
    b = rF(a, "zoneId");
    a = rF(a, "zoneName");
    return new qg(b, a)
  }
  return n
}

function yF(a, b) {
  var c = qF(b, "principal"),
      d = c.getAttribute("id"),
      e = rF(c),
      f = rF(c, "display"),
      c = parseInt(c.getAttribute("type"), 10),
      c = a.o.b.get(c);
  return new Lf(d, e, f, c)
}
function zF(a, b) {
  for (var c = a.getElementsByTagName("reminder"), d = [], e = 0; e < c.length; e++) {
    var f = c[e],
        f = new mD(Number(f.getAttribute("method")), Number(f.getAttribute("secs-lead")));
    (b || 2 != f.wb().get()) && d.push(f)
  }
  return d
}

function Ffa(a) {
  var b = rF(a, "title"),
      c = rF(a, "icon-url"),
      d = rF(a, "url-prefix");
  a = rF(a, "url");
  if (b) {
    for (var e = t; b;) try {
      e = decodeURIComponent(b);
      break
    } catch (f) {
      b = b.substring(0, b.lastIndexOf("%"))
    }
    b = e
  }
  return new WE(decodeURIComponent(a), k, b, decodeURIComponent(c), decodeURIComponent(d))
}

function AF(a, b) {
  if (!b) return n;
  var c = m,
      d = "newEvent",
      e = -1,
      f = qF(b, "eid");
  if (f) {
    var c = p,
        d = rF(f),
        h = qF(b, "erev");
    h && (e = parseInt(rF(h), 10))
  }
  for (var l = {}, q = b.getElementsByTagName("shared-property"), r = 0, s; s = q[r]; ++r) {
    var u = s.getAttribute("name");
    l[u] = {
      value: rF(s),
      editable: vF(s)
    }
  }
  for (var x = {}, z = b.getElementsByTagName("private-property"), r = 0; s = z[r]; ++r) x[s.getAttribute("name")] = rF(s);
  var A, G = rF(qF(b, "dates")),
      M = qz(G),
      N = n,
      X;
  if (M instanceof Cw) {
    var $ = M.start,
        ca;
    if (ca = !! $ && !isNaN($.year)) {
      var ua = $.year;
      ca = !(1E3 > ua || 9999 < ua)
    }
    var pa = !ca || isNaN($.month) || isNaN($.Y) ? n : $;
    pa || (pa = $h(uk(a.b)), pa.minute = 30 > pa.minute ? 30 : 60, pa.second = 0);
    var ab = Gg(pa),
        Ra = ab.Ea();
    Rh(a.b);
    ab.minute += Mw(a.b);
    var Gb = ab.Ea();
    X = new Uf(Ra, Gb)
  } else X = M;
  N = X;
  A = new uz(N);
  var bb = qF(b, "unbounded"),
      gg = new pz(bb ? "true" == tF(bb, "value") : p),
      Ua = n,
      ng = n,
      qh = n,
      rh = qF(b, "startTZ");
  if (rh) var JP = qF(b, "endTZ"),
      ng = xF(rh),
      qh = xF(JP);
  var Ua = new oE(ng, qh),
      ws = qF(b, "source-calendar"),
      Pj = yF(a, ws),
      Ex = yF(a, qF(b, "organizer")),
      Ko = yF(a, qF(b, "self")),
      xs = c ? Ko : yF(a, qF(b, "creator")),
      KP = new RD(a.b, Pj, !vF(ws)),
      LP = new ez(tF(qF(b, "summary"), "value")),
      YE = qF(b, "description"),
      MP = new ND(tF(YE, "value"), tF(YE, "html")),
      ZE = qF(b, "location"),
      $E = new ez(rF(ZE)),
      aF = qF(ZE, "link"),
      bF = aF ? Cv(aF) : t,
      cF, dF = [];
  if (qF(b, "attachments")) for (var eF = b.getElementsByTagName("attachment"), Fx = 0; Fx < eF.length; Fx++) dF.push(Ffa(eF[Fx]));
  cF = new mE(dF);
  for (var ys = [], Gx = qF(b, "attendees").getElementsByTagName("attendee"), Hx = 0, Ml = Gx.length; Hx < Ml; Hx++) {
    var Nl;
    var Ix = a,
        wg = Gx[Hx],
        af = qF(wg, "principal");
    if (af) {
      var Bd = af.getAttribute("id"),
          zs = rF(af),
          Eh = rF(af, "display"),
          Ol, Lo = parseInt(af.getAttribute("type"), 10);
      Ol = Ix.o.b.get(Lo);
      var Qj = new Lf(Bd, zs, Eh, Ol),
          Pl = parseInt(af.getAttribute("status"), 10),
          Mo = wg.getAttribute("extra-guests"),
          NP = Mo ? parseInt(Mo, 10) : 0,
          fF = wg.getAttribute("expanded-group"),
          OP = !! fF && "true" == fF,
          PP = !! af.getAttribute("is-optional"),
          gF = !! af.getAttribute("is-implicit"),
          Jx = Db(af.getElementsByTagName("member-of"), Cv),
          As = wg.getElementsByTagName("response-comment"),
          QP = As && As.length ? rF(As[0]) : k;
      Nl = new TD(Qj.Ma(), Pl, Qj.tc(), QP, NP, Qj.Bb(), PP, gF, Jx, OP)
    } else Nl = n;
    Nl && ys.push(Nl)
  }
  var Fh = c ? [] : ys,
      Kx = c ? ys : [],
      Lx, Rj = qF(b, "attendees"),
      Ql = Rj.getAttribute("access"),
      No = Rj.getAttributeNode("partial"),
      No = No ? "true" == No.nodeValue : p,
      Rl = 5;
  switch (Ql) {
  case "editable":
    Rl = 1;
    break;
  case "extensible":
    Rl = No ? 3 : 2;
    break;
  case "readonly":
    Rl = No ? 5 : 4
  }
  Lx = Rl;
  var Mx = new ez,
      hF, Bs = qF(b, "attendees").getAttributeNode("tooManyInvitees");
  hF = Bs ? "true" == Bs.nodeValue : p;
  var RP = parseInt(qF(b, "attendees").getAttributeNode("remainingAttendees").nodeValue, 10),
      Oo = new XD(Fh);
  Kx.length && ED(Oo, Kx);
  var Sl = new DE(Oo, Lx, Mx, hF, RP);
  20 >= dh(Sl.b).length && (JE(Sl, Sl.Fx), JE(Sl, Sl.Ex));
  Oo.setVisible(Pj.Ma(), m);
  var Cs, Gh = YD(Oo, Pj.Ma()),
      iF = qF(b, "eventpage"),
      SP = !c && Gh && 30 <= iF.getAttribute("access-level");
  Cs = new nE(Pj, Gh ? Gh.ea : 5, Gh ? Gh.Rg : k, Gh ? Gh.hf : k, !SP);
  var jF, TP = c,
      Po = a.A,
      Nx;
  var Sj = qF(b, "reminders");
  if (Sj) {
    var Qo = vF(Sj),
        xg = "true" == Sj.getAttribute("sms-verified"),
        kF = zF(Sj, xg),
        Tl = qF(b, "reminder-ade-defaults"),
        lF = Tl ? zF(Tl, xg) : n,
        Ro = qF(b, "reminder-te-defaults"),
        mF = Ro ? zF(Ro, xg) : n;
    Nx = new xD(kF, Qo, xg, mF, lF)
  } else Nx = n;
  var UP = Po && 100 == Pj.Bb(),
      Ox = qF(b, "conflictResolutionMode"),
      So, Ds = rF(Ox);
  So = "UNKNOWN" == Ds ? 0 : a.o.o.get(Ds);
  Po || 2 != So || (So = 0);
  for (var oqa = vF(Ox), d5 = qF(b, "class"), pqa = Iu(a.o, rF(d5)), qqa = vF(d5), e5 = p, f5 = ["goo.allowModify", "goo.allowInvitesOther", "goo.showInvitees"], VP = 0; VP < f5.length; ++VP) {
    var g5 = l[f5[VP]];
    if (g5 && g5.editable) {
      e5 = m;
      break
    }
  }
  var rqa = e5 && (TP || Pj.id == Ex.id),
      sqa = GD("true" == wF(l, "goo.allowModify"), "true" == wF(l, "goo.allowInvitesOther"), "true" == wF(l, "goo.showInvitees")),
      tqa =
      x.eventColor,
      h5 = x.gmailsubject,
      uqa = h5 ? I(h5) : n;
  jF = new jE(So, pqa, sqa, UP, oqa, qqa, rqa, Nx, tqa, x.gmailid, uqa);
  var vqa = new oD(a.b, parseInt(wF(l, "goo.rtc"), 10) || 0, wF(l, "goo.rtcParam"), wF(l, "goo.rtcDomain")),
      nF;
  var bf = qF(b, "rrule");
  if (bf) {
    var oF = A.Fa().va(),
        i5 = qF(b, "first-start");
    if (i5) {
      var wqa = rF(i5),
          j5 = qz(wqa);
      j5 instanceof au || (oF = j5)
    }
    var k5 = bf.getAttribute("freq"),
        WP = sF(bf),
        xqa = sF(bf, "display") || t,
        l5 = "editable" == bf.getAttribute("access");
    if (k5) {
      var m5 = bf.getAttribute("until"),
          n5 = bf.getAttribute("count"),
          o5 = bf.getAttribute("interval"),
          p5 = bf.getAttribute("byday"),
          q5 = bf.getAttribute("byyearday"),
          r5 = bf.getAttribute("byweekno"),
          s5 = bf.getAttribute("bymonth"),
          t5 = bf.getAttribute("bysetpos"),
          yqa = bf.getAttribute("wkst"),
          zqa = m5 ? qz(m5) : n,
          Aqa = n5 ? parseInt(n5, 10) : 0,
          Bqa = o5 ? parseInt(o5, 10) : 1,
          XP = [];
      if (p5) for (var u5 = p5.split(","), YP = 0; YP < u5.length; YP++) {
        var Es = u5[YP];
        if (2 < Es.length) {
          var v5;
          var w5 = Es.substr(Es.length - 2);
          v5 = Afa[w5] ? w5 : k;
          XP.push(new xE(parseInt(Es.substr(0, Es.length - 2), 10), v5))
        } else XP.push(Es)
      }
      var Cqa =
      q5 ? he("[" + q5 + "]") : n,
          Dqa = r5 ? he("[" + r5 + "]") : n,
          Eqa = s5 ? he("[" + s5 + "]") : n,
          Fqa = t5 ? he("[" + t5 + "]") : n;
      nF = new uE(k5, oF, m, l5, zqa, Aqa, Bqa, XP, Cqa, Dqa, Eqa, Fqa, yqa, WP)
    } else nF = WP ? new uE("WEEKLY", oF, m, l5, k, k, k, k, k, k, k, k, k, WP, m, xqa) : vE(oF)
  } else nF = n;
  var Gqa = Ex.uid != xs.uid ? Ex.Ma() : n,
      ZP = qF(b, "eventpage"),
      Hqa = uF(ZP, "specialized"),
      Iqa = uF(ZP, "has-overrides"),
      x5, Jqa = ZP.getAttribute("action");
  x5 = a.o.B.get(Jqa);
  var y5, z5 = qF(b, "debug-info");
  y5 = z5 ? Cv(z5) : n;
  for (var A5 = qF(b, "summary"), Kqa = vF(A5) ? uF(A5, "editing") ? 3 : 2 : 1, B5 = [], Lqa =
  qF(b, "messages-to-user").getElementsByTagName("display"), $P = 0, C5; C5 = Lqa[$P]; $P++) B5[$P] = I(Cv(C5));
  var D5 = wF(l, "goo.createdBySet"),
      Mqa = D5 != n && 0 < D5.length,
      E5 = qF(b, "private-copy"),
      Nqa = E5 ? "true" == tF(E5, "value") : p,
      F5 = qF(b, "smartmail"),
      Oqa = F5 ? "true" == tF(F5, "value") : p,
      aQ;
  var bQ = qF(b, "event-source");
  if (bQ) {
    var G5 = rF(bQ, "title"),
        Pqa = rF(bQ, "url");
    aQ = new XE(I(Pqa), G5 ? I(G5) : n)
  } else aQ = n;
  var Wb = new VE;
  Wb.b = a.b;
  Wb.F = d;
  Wb.ka = e;
  Wb.o = KP;
  Wb.A = xs.Ma();
  Wb.B = LP;
  Wb.C = A;
  Wb.Ib = gg;
  Wb.da = Ua;
  Wb.K = $E;
  Wb.H = MP;
  Wb.Ia = jF;
  Wb.W = Cs;
  Wb.D = Sl;
  Wb.O = nF;
  Wb.Z = B5;
  Wb.X = Kqa;
  Wb.tb = Gqa;
  Wb.bb = Hqa;
  Wb.$b = Iqa;
  Wb.ya = cF;
  Wb.ib = bF;
  Wb.Ha = y5;
  Wb.wa = x5;
  Wb.Pg = vqa;
  Wb.Cc = Mqa;
  Wb.zb = Nqa;
  Wb.Xa = Oqa;
  Wb.Ja = aQ;
  return new OE(Wb)
};

function BF(a) {
  this.H = a;
  this.o = S(a);
  this.b = this.A = n;
  this.C = [];
  this.B = [];
  this.D = [];
  this.F = {};
  this.X = new aq(this.UH, 1E3, 5E3, this);
  this.da = new aq(this.o.jb, 250, 5E3, this.o);
  this.W = new cD(Kt, 1E4);
  this.K = ib()
}
function CF(a, b, c, d) {
  return function() {
    var e = this.f,
        f = DF(a.A, e);
    if (f && (f.B & c) == c && this.t && e) {
      e = [e];
      d && e.push(this.callback);
      for (f = 0; f < arguments.length; ++f) e.push(arguments[f]);
      return b.apply(a, e)
    }
  }
}
BF.prototype.O = function() {
  return 27E5 >= ib() - this.K ? n : [
    ["updatetoken"]
  ]
};
BF.prototype.Z = function(a, b) {
  this.K = ib();
  var c = EF(this.A, a);
  c && (0, this.b.call)(c.b, "update_security_token", n, b)
};
var FF = p;

function GF(a, b) {
  if (window.gadgets && window.gadgets.rpc) b();
  else {
    if (!FF) {
      FF = m;
      var c = document.createElement("script");
      c.src = "//www-calendar-opensocial.googleusercontent.com/gadgets/js/rpc.js?container=calendar&c=1";
      c.type = "text/javascript";
      document.body.appendChild(c)
    }
    var d = window.setInterval(E(function() {
      window.gadgets && window.gadgets.rpc && (window.clearInterval(d), b())
    }, a), 100)
  }
}
function HF(a) {
  return {
    year: a.year,
    month: a.month,
    date: a.Y,
    hour: a.hour,
    minute: a.minute,
    second: a.second
  }
}

function IF(a, b) {
  var c = [a.year, a.month, a.Y];
  b || c.push(a.hour, a.minute, a.second);
  return c
}
function JF(a, b) {
  var c;
  b ? c = Kg(a.year, a.month, a.date) : c = new Qg(a.year, a.month, a.date, a.hour, a.minute, a.second);
  return c
}
function KF(a) {
  return {
    year: a[0],
    month: a[1],
    date: a[2],
    hour: a[3],
    minute: a[4],
    second: a[5]
  }
}
function kE(a) {
  return {
    startTime: HF(a[0]),
    endTime: HF(a[1])
  }
}
function LF(a) {
  return {
    darkest: a.D,
    dark: a.B,
    medium: a.b,
    light: a.A,
    lightest: a.o
  }
}
function MF() {
  this.data = {};
  this.set("timezone", ot())
}
MF.prototype.set = function(a, b) {
  C(b) && (this.data[a] = b)
};
MF.prototype.clear = function(a) {
  delete this.data[a]
};
var Gfa = Lc("owner", "attendeeCount", "details", "status", "attendees", "icon"),
    NF = {
    80: "root",
    70: "owner",
    60: "editor",
    20: "read",
    10: "freebusy",
    0: "none"
    };

function OF(a) {
  var b = new MF;
  b.set("startTime", HF(a.Fa()));
  b.set("endTime", HF(a.Za()));
  a.Db() && b.set("allDay", m);
  b.set("title", a.getTitle());
  b.set("location", a.Tc);
  b.set("id", a.getId());
  PF(a, b);
  return b
}

function PF(a, b) {
  var c = cE[a.Dc];
  c && b.set("status", c);
  (c = a.Xc()) && b.set("icon", c.o);
  c = R();
  c = og(c).b.getItem(a.Aa()).color.b;
  b.set("color", c.A);
  b.set("palette", LF(c));
  for (var c = [], d = Un(a), e = 0; e < d.length; e++) {
    var f = d[e],
        h = Vn(a, f);
    if (f = QF(f))(h = cE[h.eb]) && (f.status = h), c.push(f)
  }
  b.set("attendees", c);
  b.set("attendeeCount", a.o);
  b.set("calendar", QF(a.Aa()));
  b.set("creator", QF(a.Bc));
  b.set("owner", QF(a.mc));
  c = ci.M().get(a.Aa()) || {};
  (c = NF[c.uc]) && b.set("accessLevel", c)
}

function QF(a) {
  var b = jg(ig.M(), a),
      c;
  if (b) a = b.Ma(), c = b.tc();
  else if (-1 == a.indexOf("@")) return n;
  b = {};
  a && (b.email = a);
  c && c != a && (b.name = c);
  return b
}
B = BF.prototype;
B.tT = function(a) {
  var b = this.C.length;
  if (b) {
    var c = n;
    if (a) if (a instanceof Rn) c = OF(a);
    else if (a instanceof Uf) c = new MF, c.set("startTime", HF(a.start)), c.set("endTime", HF(a.end)), isNaN(a.end.hour) && c.set("allDay", m);
    else {
      if (a instanceof OE) {
        var c = new MF,
            d = a.b.get();
        c.set("startTime", HF(d.start));
        c.set("endTime", HF(d.end));
        isNaN(d.end.hour) && c.set("allDay", m);
        c.set("title", a.O.get());
        c.set("location", a.Z.get());
        c.set("details", a.ya.get());
        if (!PE(a) && (d = a.getId(), c.set("id", d), d = ru(Yp, d))) {
          PF(d, c);
          AF(new pF(R()), n);
          c.clear("attendees");
          c.clear("attendeeCount");
          d = [];
          a = aE(a.F);
          for (var e = 0; e < a.length; e++) {
            var f = a[e],
                h = QF(f.email);
            h && ((f = cE[f.ea]) && (h.status = f), d.push(h))
          }
          c.set("attendees", d);
          c.set("attendeeCount", d.length)
        }
      }
    } else c = {
      data: n
    };
    if (c) for (a = 0; a < b; ++a)(0, this.b.call)(this.C[a], "calendar.event_change", n, c.data)
  }
};

function RF(a, b) {
  var c = [b];
  a.C = ct(a.C, c);
  a.B = ct(a.B, c);
  a.D = ct(a.D, c)
}
B.sT = function() {
  this.B.length && this.X.dh()
};
B.UH = function() {
  for (var a = 0; a < this.B.length; ++a)(0, this.b.call)(this.B[a], "calendar.data_change", n)
};

function SF(a, b) {
  for (var c = 0; c < a.length; ++c) if (a[c] == b) return;
  a.push(b)
}
B.uK = function(a, b) {
  if (b) {
    var c = cz(b.title),
        d = b.details,
        e = b.location,
        f = b.allDay,
        h = b.startTime,
        l = b.endTime;
    h && (h = JF(h, f));
    l && (l = JF(l, f));
    f && h && (!l || h.cb() >= l.cb()) && (l = Jg(h));
    h && (h = h.toString());
    l && (l = l.toString());
    var q = [];
    if (f = b.attendees) for (var r = 0; r < f.length; ++r) {
      var s = f[r];
      s && s.email && q.push(s.email)
    }
    var u = t;
    "rrule" in b && (u = b.rrule);
    f = R();
    Rq(f).b(Ca, function() {
      TF(c, d, e, h, l, q, t, u, m)
    })
  } else Zy()
};
B.IK = function(a, b) {
  UF(b)
};
B.vK = function(a, b) {
  var c = $h(Jl()),
      d = 10;
  0 < b && 50 >= b && (d = b);
  for (var e = Mj.M(), e = em(e, this.o), c = qq(Yp, c, d, e, p), d = [], e = 0; e < c.length; ++e) {
    var f = OF(c[e]);
    d.push(f.data)
  }
  return d
};

function VF(a) {
  for (var b = {}, c = 0; c < a.length; ++c) {
    var d = Hu(ig.M(), a[c]);
    d && d.uid && (b[d.uid] = d.Ma())
  }
  return b
}
function WF(a) {
  for (var b = [], c = 0; c < a.length; ++c) {
    var d = jg(ig.M(), a[c]);
    d && d.Ma() && b.push(d.Ma())
  }
  return b
}
function XF(a) {
  return !!a && "year" in a && "month" in a && "date" in a
}

function YF(a, b) {
  for (var c = ZF, d = {}, e = 0; e < b.length; ++e) {
    var f = b[e],
        h = c.filter(f);
    d[f] = [];
    for (var l = 0; l < h.length && h[l] && h[l].Od; ++l) {
      var q = h[l].Od,
          r = {};
      r.email = q.email;
      r.name = q.name;
      d[f].push(r)
    }
  }
  a(d)
}
B.xK = function(a, b, c) {
  if (b) {
    c || (c = {});
    var d = c.filter || [t];
    a = R();
    Rq(a).b("dasher", function() {
      var a = ZF;
      a.b ? YF(b, d) : $F(function(c) {
        a.D(c);
        YF(b, d)
      })
    })
  }
};
B.yK = function(a, b, c, d, e) {
  "string" == typeof b && ("@viewer" == b ? b = [jg(ig.M(), Sh(this.H)).Ma()] : "selected" == b && (b = fm(Mj.M()), b = WF(b)));
  var f = e && e.requestedFields || [];
  e = {};
  for (var h = 0; h < f.length; ++h) {
    var l = f[h];
    l in Gfa && (e[l] = 1)
  }
  var q = f = n;
  if (XF(c) && XF(d) && (c.hour = c.hour || 0, c.minute = c.minute || 0, c.second = c.second || 0, d.hour = d.hour || 0, d.minute = d.minute || 0, d.second = d.second || 0, f = JF(c, p), q = JF(d, p), h = Hg(q, f), 50 < h || 0 > h)) return;
  var h = b.join(","),
      r = this.F[h];
  r || (r = this.F[h] = []);
  SF(r, a);
  t: if (e && ("details" in e || "attendees" in e)) a = p;
  else {
    a = WF(Eq());
    h = {};
    for (r = 0; r < a.length; ++r) h[a[r]] = 1;
    for (r = 0; r < b.length; ++r) if (!(b[r] in h)) {
      a = p;
      break t
    }
    c && d ? (a = Dq(), a = !a || Bg(c.year, c.month, c.date) < a[0] || Bg(d.year, d.month, d.date) > a[1] ? p : m) : a = m
  }
  if (a) {
    c && d || (f = $h(Jl()), c = Gg(f), ++c.hour, q = c.Ea());
    c = new Uf(f, q);
    d = VF(b);
    d = new dm(Dc(d), p);
    c = Yp.W(c, d);
    d = [];
    l = {};
    for (f = 0; f < b.length; ++f) q = b[f], a = jg(ig.M(), q), a = ci.M().get(a.uid) || {}, l[b[f]] = [q, 0, [], a.uc, a.tz], d.push(l[q]);
    b = VF(b);
    q = "status" in e;
    a = "owner" in e;
    h = "attendeeCount" in e;
    e = "icon" in e;
    for (f =
    0; f < c.length; ++f) {
      var r = c[f],
          s = r.getId(),
          u = r.Db(),
          x = IF(r.Fa(), u),
          u = IF(r.Za(), u),
          z = r.getTitle(),
          A = q ? r.Dc : n,
          G = a ? r.mc : n,
          M = h ? r.o : n,
          N;
      N = e && r.Xc() ? r.Xc().o : n;
      l[b[r.Aa()]][2].push([s, z, x, u, r.Tc, A, G, M, n, n, N])
    }
    this.FB(d)
  } else {
    a = [];
    for (h = 0; h < b.length; h++) a.push("lef", b[h]);
    for (l in e) a.push("fields", l);
    c && d && a.push("stim", f.toString(), "etim", q.toString());
    Cf(Af(R()), "ga_ue", a, 0, D, k)
  }
};
B.FB = function(a) {
  for (var b = [], c = [], b = [], d = 0; d < a.length; d++) {
    var e = a[d],
        f = e[0],
        h;
    t: {
      h = f;
      if (h = Hu(ig.M(), h)) if (h = Lj(Mj.M(), h.uid)) {
        h = h.color.b;
        break t
      }
      h = n
    }
    c.push(f);
    var l = e[1],
        q = {
        email: f
        };
    (f = Hu(ig.M(), f)) && f.tc() && (q.name = f.tc());b.push(q);
    if (l) q.error = l;
    else {
      (f = NF[e[3]]) && (q.accessLevel = f);
      q.timezone = e[4];
      f = [];
      e = e[2];
      for (l = 0; l < e.length; l++) {
        var r = e[l],
            s = {
            id: r[0],
            title: r[1],
            startTime: KF(r[2]),
            endTime: KF(r[3]),
            allDay: 3 == r[2].length,
            location: r[4]
            };
        if ("number" == typeof r[5]) {
          var u = cE[r[5]];
          u && (s.status =
          u)
        }
        r[6] && (s.owner = QF(r[6]));
        "number" == typeof r[7] && (s.attendeeCount = r[7]);
        r[8] && (s.details = r[8]);
        if (r[9] && 0 < r[9].length) for (s.attendees = [], u = 0; u < r[9].length; u++) {
          var x = QF(r[9][u][0]);
          if (x) {
            var z = cE[r[9][u][1]];
            z && (x.status = z);
            s.attendees.push(x)
          }
        }
        r[10] && (s.icon = r[10]);
        h && (s.color = h.A, s.palette = LF(h));
        f.push(s)
      }
      q.events = f
    }
  }
  d = c.join(",");
  if (a = this.F[d]) for (delete this.F[d], d = 0; d < a.length; d++)(0, this.b.call)(a[d], "calendar.setUserEvents", n, b)
};
B.fA = function() {
  this.W.nm()
};
B.wK = function() {
  var a = this.o.getString("country", "US"),
      b = this.o.getString("timezone", "Etc/GMT"),
      c = Xg(this.o, "tzoffset", "0"),
      d = this.o.getString("dtFldOrdr", "MDY"),
      e = Yg(this.o, Da, "false"),
      f = Xg(this.o, "firstDay", "0"),
      h = jg(ig.M(), Sh(this.H)),
      l = Jl().Sq(),
      q;
  q = new Date;
  q = ib() - 6E4 * q.getTimezoneOffset();
  a = {
    country: a,
    tz: b,
    timezone: b,
    timezone_offset: c,
    current_time_offset: l - q,
    dateformat: d,
    military: e,
    startdow: f,
    viewer: h.Ma()
  };
  lE() && (c = bE()) && c != b && (a.alttz = c);
  return a
};
B.GK = function(a, b) {
  this.A.setTitle(a, b)
};
B.EK = function(a, b, c) {
  if (2 < arguments.length && 0 == arguments.length % 2) {
    for (var d = 2; d < arguments.length; d += 2) {
      var e = arguments[d],
          f = arguments[d + 1];
      "string" == typeof e && "string" == typeof f && this.o.set("gadgetPref_" + DF(this.A, a).id + "_0_" + e, f)
    }
    this.da.dh()
  }
};
B.zK = function(a, b, c) {
  var d = this.A;
  if (a = DF(d, a)) {
    if ("canvas" == a.A && "canvas" != b && (d.du(), EF(d, a.o))) return;
    b = ["view", b, "gadgeturl", a.o, "gadgetpermissions", a.B];
    if (c) for (var e in c) b.push("param", e, "param", c[e]);
    c = R();
    e = Hr(c, "Failed to add gadget.");
    Cf(Af(c), "gadgets", b, 19, D, e)
  }
};
B.eA = function(a, b) {
  (0, this.b.setRelayUrl)(a, b)
};
B.BK = function(a, b, c, d) {
  b = Ng(b, c, d).va();
  c = Bp();
  c.focus = b;
  bm(c);
  b = this.A;
  "canvas" == DF(b, a).A && b.du()
};
B.gA = function(a, b, c) {
  a = "The <b>" + I(DF(this.A, a).title) + "</b> gadget suggests adding a calendar.<br><br>";
  c && (c = I(c), a = a + ("The calendar's name is <b>" + c + " </b><br>"));
  c = a;
  a = I(b);
  Hfa(b, c + ("The calendar's address is <b>" + a + "</b><br><br>Do you want to add it?"))
};

function Hfa(a, b) {
  ku(new Js, function(b) {
    "yes" == b.key && (b = R(), Rq(b).b(Ca, function() {
      aG(a, D, D)
    }))
  }, "Do you want to add this calendar?", b, (new nw).set("yes", "Yes, add this calendar", m).set("no", "No, do not add this calendar", p, m))
}
B.NK = function(a) {
  SF(this.C, a)
};
B.JK = function(a) {
  SF(this.B, a)
};
B.KK = function(a) {
  SF(this.D, a);
  var b = xp(this.H),
      b = kE(b.A());
  (0, this.b.call)(a, "calendar.date_change", n, b)
};
B.AK = function(a, b) {
  if ("canvas" != DF(this.A, a).A) {
    var c = bG(b),
        d = this.A.C[a];
    d && c && Vx(d, c)
  }
};

function Ifa(a) {
  this.id = a[0];
  this.o = a[1];
  this.title = a[2];
  this.X = a[3];
  this.b = n;
  this.A = a[4];
  this.K = a[5];
  this.H = a[6];
  this.F = a[7];
  this.C = parseInt(a[8], 10);
  this.B = parseInt(a[9], 10);
  this.D = parseInt(a[10], 10)
};

function cG(a) {
  Y.call(this);
  this.o = a
}
H(cG, Y);
cG.prototype.ia = function() {
  var a = this.b,
      b;
  b = this.o.b;
  b = '<iframe id="' + b + '" name="' + b + '" marginwidth=0 marginheight=0 frameborder=0 scrolling="no" style="width:100%;margin:0;border:0;height:100%" src="' + I(this.o.X) + '"></iframe>';
  this.V = Du(a, b)
};

function dG(a, b, c) {
  this.H = c;
  this.da = 0;
  this.D = a;
  this.b = [];
  this.F = this.A = n;
  this.B = b;
  this.C = {};
  this.o = new Q(this);
  this.o.I(this.B, ["disable", "enable"], this.Z)
}
var eG = n;

function Jfa(a, b) {
  var c = qC;
  if (!eG) {
    var d = new dG(a, c, b);
    GF(a, function() {
      if (window.gadgets && window.gadgets.rpc) {
        KC(E(a.O, a));
        kb("_updateToken", E(a.Z, a));
        a.C = [];
        a.D = [];
        a.A = d;
        a.b = window.gadgets.rpc;
        var b = a.b.register;
        b("resize_iframe", CF(a, a.AK, 1));
        b("set_title", CF(a, a.GK, 1));
        b("set_pref", CF(a, a.EK, 1));
        b("requestNavigateTo", CF(a, a.zK, 1));
        b("calendar.add_relay", CF(a, a.eA, 1));
        b("calendar.set_relay", CF(a, a.eA, 1));
        b("calendar.composeEvent", CF(a, a.uK, 1));
        b("calendar.getPreferences", CF(a, a.wK, 1));
        b("calendar.getNextEvents", CF(a, a.vK, 2));
        b("calendar.showEvent", CF(a, a.IK, 1));
        b("calendar.setDate", CF(a, a.BK, 1));
        b("calendar.getUserEvents", CF(a, a.yK, 2));
        b("calendar.refreshEvents", CF(a, a.fA, 1));
        b("calendar.subscribe.refreshEvents", CF(a, a.fA, 1));
        b("calendar.addCalendar", CF(a, a.gA, 1));
        b("calendar.showCalendar", CF(a, a.gA, 1));
        b("calendar.subscribe.data_change", CF(a, a.JK, 1));
        b("calendar.subscribe.date_change", CF(a, a.KK, 1));
        b("calendar.subscribe.event_change", CF(a, a.NK, 2));
        b("calendar.getResources", CF(a, a.xK, 2, m))
      }
      b = Tq.o;
      b != n && (Tq.o = n, fG(d, gG(b)));
      b = E(d.W, d);
      Tq.b = b;
      ep("gadgets_enabled")
    });
    eG = d
  }
}
dG.prototype.W = function(a, b) {
  var c = gG(a);
  b && 1 == c.length && "canvas" == c[0].A ? (c = c[0], this.A && this.tA(), Kp(Jp.M(), "b", E(this.lU, this, c))) : (fG(this, c), b && this.B.setVisible(m), this.bB())
};

function gG(a) {
  for (var b = [], c = 0; c < a.length; ++c) b.push(new Ifa(a[c]));
  return b
}
function DF(a, b) {
  for (var c = 0; c < a.b.length; ++c) {
    var d = a.b[c];
    if (d.b == b) return d
  }
  return a.A && a.A.b == b ? a.A : n
}

function EF(a, b) {
  for (var c = 0; c < a.b.length; ++c) {
    var d = a.b[c];
    if (d.o == b) return d
  }
  return n
}
function hG(a) {
  var b = Cb(a.b, function(a) {
    return !a.D
  }),
      b = Db(b, function(a) {
      return a.o
    }).join(" ");
  a = S(a.H);
  a.set("gadgets", b);
  a.jb()
}

function fG(a, b) {
  for (var c = 0; c < b.length; ++c) {
    var d = b[c],
        e;
    for (var f = 0; a.b[f] && !a.b[f].D;) f++;
    if (d && d.D) for (;;) {
      e = a.b[f];
      if (!e || e.title > d.title) break;
      f++
    }
    e = f;
    a.b.splice(e, 0, d);
    var f = a,
        h = "gadgetIframe-" + f.da+++iG;
    d.b = h;
    var l = new cG(d),
        l = new Ux(d.id, l, d.title, m);
    Vx(l, bG(d.K) || 200);
    if (d.D) l.Ko = m;
    else {
      var q = E(f.K, f, d);
      l.o = q
    }
    f.C[h] = l;
    dy(f.B, l, Rx(f.B) - (f.b.length - 1) + e);
    (0, f.D.b.setRelayUrl)(h, d.H);
    (0, f.D.b.setAuthToken)(h, d.F)
  }
  c = a.B;
  c.D && 0 != c.D.length && a.B.enable();
  hG(a)
}
dG.prototype.Z = function() {
  var a = this.B.Da();
  ep(a ? "gadgets_hide" : "gadgets_show")
};
var iG = "-" + ib();
dG.prototype.K = function(a) {
  var b = a.b;
  RF(this.D, a.b);
  Mb(this.b, a);
  b != n && (b = this.C[b], ey(this.B, b), b.aa(), hG(this), ep("gadget_remove_" + a.o))
};
var jG = new V('<div class="gadget-canvas"><div class="gadget-canvas-headerfooter"><span onmousedown="${backFunc}()" class=lk><b>&laquo; Back to calendar</b></span><span class="gadget-canvas-title" id="${titleId}">${title}</span></div><div id="${contentId}" style="height:${height}px"></div></div>');

function Kfa(a) {
  a.O || (a.O = new pr(a));
  a.X || (a.X = a.O.b(a.du));
  return a.X
}
B = dG.prototype;
B.lU = function(a) {
  var b = sj(this.B.G()),
      b = Bi().height - b.y - 40,
      c = this.da++;
  a.b = "gadgetIframe-" + c + iG;
  this.A = a;
  jG.put("backFunc", Kfa(this));
  jG.put("titleId", "gadgetTitle-canvas");
  jG.put("title", I(a.title));
  jG.put("contentId", "gadgetContent-canvas");
  jG.put("height", b);
  T("coverinner").innerHTML = jG.toString();
  this.F = new cG(a);
  this.F.render(W("gadgetContent-canvas"));
  (0, this.D.b.setRelayUrl)(a.b, a.H);
  (0, this.D.b.setAuthToken)(a.b, a.F);
  a = Jp.M();
  b = E(this.tA, this);
  a.Xd = F(Mp, b || id) || n;
  return m
};
B.tA = function() {
  var a = this.A;
  a && (RF(this.D, a.b), this.F.aa(), this.A = this.F = n);
  return m
};
B.du = function() {
  Kp(Jp.M(), "g")
};
B.setTitle = function(a, b) {
  var c = this.C[a];
  c ? c.setTitle(b) : this.A && this.A.b == a && (W("gadgetTitle-canvas").innerHTML = I(b))
};

function bG(a) {
  a = parseInt(a, 10);
  500 < a && (a = 500);
  return 0 <= a ? a : n
}
B.bB = function() {
  for (var a = 0; a < this.b.length; ++a) {
    var b = this.b[a],
        c = b.C;
    if ((b.B & c) != c) {
      Lfa(this, b, c);
      break
    }
  }
};
B.lT = function(a, b, c) {
  if (c) {
    c = a.b;
    a.B = b;
    var d = "gadgetPerm_" + DF(this, c).id + "_0",
        e = S(this.H);
    e.set(d, b.toString());
    e.jb();
    if (b = this.C[c]) a = new cG(a), c = b.B, b.removeChild(c), c.aa(), b.B = a, b.ha(b.B, m)
  } else this.K(a);
  setTimeout(E(this.bB, this), 0)
};

function Lfa(a, b, c) {
  var d = Rq(a.H),
      e = E(a.lT, a, b, c);
  d.b(ya, function() {
    Mfa(b, e)
  })
};
var kG = p;

function cx() {
  if (Sd(48)) {
    var a = R();
    if (zo(a) && !kG) {
      kG = m;
      var b = new BF(a);
      $w.M().b = b;
      Jfa(b, a);
      O(Bp(), v, wfa);
      b = E(b.sT, b);
      O(Yp, iq, b);
      O(Mj.M(), va, b);
      O(Mj.M(), "clm.itemstate", b);
      b = Hr(a, "Failed to add gadget.");
      Cf(Af(a), "gadgets", ["hl", "en"], 19, D, b)
    }
  }
};
