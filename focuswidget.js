/*
  https://www.google.com/calendar/static/307387de4562bc5dba423644325c5f55calendarjs_focuswidgetcompiled__en.js
*/

function jpa(a) {
  window.gapi && window.gapi.load && a()
}
function kpa(a) {
  var b = {
    "googleapis.config": {
      auth: {
        useFirstPartyAuth: m
      }
    }
  };
  a.b && (b["googleapis.config"].root = a.b, b["googleapis.config"]["root-1p"] = a.b); - 1 != a.o && (b.sessionIndex = a.o);
  return b
}
function lpa(a, b) {
  jpa(E(function() {
    gapi.load("client", E(function() {
      if (!this.b) {
        var a = Jd(this.o, 26);
        gapi.client.setApiKey(a.A);
        gapi.config.update(kpa(a));
        this.b = m
      }
      b()
    }, this))
  }, a))
}
function mpa(a) {
  var b = new wd;
  lpa(a, function() {
    b.callback(gapi.client)
  });
  return b
}

function y_(a, b) {
  a instanceof ff || (a = qf(a));
  b instanceof ff || (b = qf(b));
  var c = a,
      d = b,
      e = c.clone(),
      f = !! d.Xe;
  f ? gf(e, d.Xe) : f = !! d.yj;
  f ? e.yj = d.yj : f = !! d.Hg;
  f ? e.Hg = d.Hg : f = d.wh != n;
  var h = d.Ph;
  if (f) hf(e, d.wh);
  else if (f = !! d.Ph) if ("/" != h.charAt(0) && (c.Hg && !c.Ph ? h = "/" + h : (c = e.Ph.lastIndexOf("/"), -1 != c && (h = e.Ph.substr(0, c + 1) + h))), c = h, ".." == c || "." == c) h = t;
  else if (sb(c, "./") || sb(c, "/.")) {
    for (var h = nb(c, "/"), c = c.split("/"), l = [], q = 0; q < c.length;) {
      var r = c[q++];
      "." == r ? h && q == c.length && l.push(t) : ".." == r ? ((1 < l.length || 1 == l.length && l[0] != t) && l.pop(), h && q == c.length && l.push(t)) : (l.push(r), h = m)
    }
    h = l.join("/")
  } else h = c;
  f ? jf(e, h) : f = d.b.toString() !== t;
  f ? kf(e, mf(d.b.toString())) : f = !! d.Pn;
  f && lf(e, d.Pn);
  return e
}
function npa(a) {
  if ($a(a)) return Pb(a);
  a = ce(a);
  var b = [];
  gI(a, function(a) {
    b.push(a)
  });
  return b
}
function z_(a) {
  return a && typeof a.isDisposed == Ea ? a.isDisposed() : p
};
var A_ = [];
A_.push = function() {
  g(Error("Calling push on a read-only array"))
};
var B_ = {
  cancel: Na(),
  nd: y(p)
};

function opa() {};

function C_(a) {
  this.b = a;
  var b;
  b = a[1];
  var c = a[2];
  b = "cl" != a[0] ? b ? b != c && c ? '"' + b + '" <' + c + ">" : b : c : (a = a[6]) ? b + " " + (1 == a ? "(1 contact)" : "(" + (a + " contacts)")) : b + " (group)";
  this.text = b
}
H(C_, opa);
B = C_.prototype;
B.toString = function() {
  return "cl" == this.b[0] ? this.b[2] : this.text
};
B.getId = function() {
  return this.b[4]
};
B.getName = function() {
  return this.b[1] || t
};
B.Ma = function() {
  return "pt" != this.b[0] ? this.b[2] : n
};
B.getType = function() {
  return this.b[0]
};
B.mb = function() {
  return this.b[3] || 0
};
B.px = function() {
  return this.b[7]
};

function D_(a) {
  this.b = a || [];
  a && (this.o = [])
}
var E_ = {};
D_.prototype.A = function(a, b) {
  return 0 <= b && Za(this.b[a]) && b < this.b[a].length
};
D_.prototype.get = function(a, b) {
  return this.b[a] != n ? this.b[a] : b
};
D_.prototype.has = function(a) {
  return this.b[a] != n
};

function ppa(a) {
  var b = F_;
  if (!a.o || !a.o[1]) if (a.b[1]) a.o[1] = new b(a.b[1]);
  else
  return qpa(b);
  return a.o[1]
}
D_.prototype.B = D_.prototype.A;

function G_(a, b, c, d) {
  if (!a.o || !a.o[b] || !a.o[b][c]) if (a.b[b] && a.b[b][c]) a.o[b] || (a.o[b] = []), a.o[b][c] = new d(a.b[b][c]);
  else
  return qpa(d);
  return a.o[b][c]
}
function qpa(a) {
  var b = gb(a);
  b in E_ || (E_[b] = new a([]));
  return E_[b]
};

function H_(a) {
  D_.call(this, a)
}
H(H_, D_);
H_.prototype.toString = y(t);
H_.prototype.Ca = function() {
  return this.get(2, t)
};

function F_(a) {
  D_.call(this, a)
}
H(F_, D_);
F_.prototype.toString = y(t);
F_.prototype.getId = function() {
  return this.get(2, "0")
};
F_.prototype.getAttribute = function(a) {
  return G_(this, 4, a, H_)
};

function I_(a) {
  D_.call(this, a)
}
H(I_, D_);
I_.prototype.toString = y(t);

function J_(a) {
  D_.call(this, a)
}
H(J_, D_);
J_.prototype.toString = y(t);

function K_(a) {
  D_.call(this, a)
}
H(K_, D_);
K_.prototype.toString = y(t);
K_.prototype.ql = function(a) {
  return G_(this, 3, a, L_)
};

function M_(a) {
  D_.call(this, a)
}
H(M_, D_);
M_.prototype.toString = y(t);
M_.prototype.Ca = function() {
  return this.get(2, t)
};

function L_(a) {
  D_.call(this, a)
}
H(L_, D_);
L_.prototype.toString = y(t);
L_.prototype.getId = function() {
  return this.get(2, "0")
};
L_.prototype.getAttribute = function(a) {
  return G_(this, 3, a, M_)
};
L_.prototype.getName = function() {
  return this.get(12, t)
};

function N_(a) {
  D_.call(this, a)
}
H(N_, D_);
N_.prototype.toString = y(t);
N_.prototype.getId = function() {
  return ppa(this).getId()
};
N_.prototype.getAttribute = function(a) {
  return ppa(this).getAttribute(a)
};

function rpa(a, b) {
  var c, d, e = [];
  c = Za(a) ? a : uG(a);
  for (var f = new I_(c), h = 0; h < b.length; h++)(c = f.B(1, h) ? G_(f, 1, h, K_) : k) ? c.get(5, p) || (d = c.get(8, 0) || 1) : d = 2, e.push(new O_(b[h], d, c));
  return e
}
var spa = [t];

function tpa(a, b) {
  var c = a[3] || spa,
      d = a[2];
  if (d || c) {
    var e = a[4],
        f = a[11] || 0,
        h;
    switch (a[1]) {
    case 1:
      h = "ct";
      break;
    case 2:
      h = "cl";
      break;
    case 3:
      h = "li"
    }
    for (var l = a[9], q = a[10], r = a[5], s = a[12], u = a[13], x = 0; x < c.length; x++) {
      var z = c[x];
      (d || z) && b.push(new C_([h, d, z, e, r, f, l, q, s, u]))
    }
  }
};

function P_(a, b, c) {
  this.D = a;
  this.Cb = b;
  this.o = new ne(c);
  this.A = []
}
var Q_ = new P_(["6", "12"], "1"),
    upa = new P_("2 1f 1c 12 16 13 14 1d 22 1b 20".split(" "), "4", [Q_]);
new P_("6 12 16 17 18 1a".split(" "), "3", [Q_]);
new P_("2 4 2a 5 6 9 b 1c d e f 11 12 29 13 14 15 1d 22 16 17 19 28 1e 1b".split(" "), "2", [Q_, upa]);
new P_([]);
P_.prototype.toString = function() {
  var a = this.Cb ? "g" + this.Cb : this.D.join(",");
  this.Cb && this.A.length && (a += "," + this.A.join(","));
  return a
};

function vpa(a) {
  a.B || (a.B = new ne(a.D));
  return a.B
}
P_.prototype.contains = function(a) {
  if (this.o.contains(a)) return m;
  this.b || (this.b = new ne);
  if (this.b.contains(a)) return p;
  var b = vpa(this),
      c = vpa(a);
  if (me(c, b.contains, b)) return this.o.add(a), m;
  this.b.add(a);
  return p
};
var wpa = {
  fc: t,
  Kq: "personal",
  UB: 1,
  Rl: m,
  Tj: m,
  Ol: m,
  Qv: 5E3,
  Ic: -1,
  Rv: 10,
  name: "Load All Contacts"
},
    R_ = {
    Xx: m,
    name: "Load Configuration"
    };

function S_(a, b) {
  var c = new de;
  c.set("ac", !! a.Ol);
  a.Gs && c.set("acc", m);
  a.Cc && c.set("ccnt", m);
  a.Xx && c.set("cf", !! a.Xx);
  a.o && c.set("cids", a.o.join(","));
  if (a.ka) {
    var d = 0,
        e = Db(a.ka, function(a) {
        return a ? (d++, a) : t
      });
    0 < d && c.set("sids", e.join(","))
  }
  a.Sg && c.set("cr", m);
  c.set("ct", !! a.Rl);
  a.X && c.set("pids", a.X.join(","));
  a.A && c.set("emls", a.A.join(","));
  a.Ha && c.set("df", m);
  a.da && c.set("f", a.da.toString());
  a.Hs && c.set("mf", a.Hs.toString());
  a.Xa && c.set("gcnt", m);
  a.D && c.set("gids", a.D.join(","));
  c.set("gp", !! a.Tj);
  a.C && c.set("gmk", aJ(a.C.b));
  c.set("hl", "en");
  a.bb && (c.set("mu", m), c.set("meml", a.cc));
  b && c.set("id", b);
  a.Ic != n && c.set("max", a.Ic);
  a.K ? c.set("out", a.K) : c.set("out", "js");
  a.tb && c.set("pbd", m);
  a.O && c.set("rf", a.O.join(","));
  a.W && c.set("sf", a.W.join(","));
  a.Z && c.set("so", a.Z);
  a.Wb && c.set("sgp", m);
  a.Ia && c.set("sgids", a.Ia.join(","));
  a.ea != n && c.set("st", a.ea);
  C(a.fc) && c.set("tok", a.fc.toLowerCase());
  c.set("type", "4");
  a.B && c.set("xgids", a.B.join(","));
  a.OG && c.set("ev", m);
  a.Ib && c.set("shg", m);
  a.ib && c.set("nge", m);
  a.$b && c.set("clut", m);
  a.H && c.set("ud", !! a.H);
  a.Sl && c.set("gm", m);
  a.zb && c.set("pu", m);
  a.b && c.set("clid", a.b);
  a.ya && c.set("vio", a.ya);
  a.wa && ee(c, a.wa);
  return c
};

function O_(a, b, c) {
  this.b = a;
  this.o = b || 0;
  c && c.has(12) && c.get(12, t);
  this.b && this.b.A(this)
}
O_.prototype.Iq = Na();

function xpa() {
  this.A = 0
};

function ypa(a, b, c) {
  eb(b) ? z_(c) || b.call(c) : b && typeof b.handleEvent == Ea && !z_(b) && b.handleEvent.call(b)
};

function T_(a) {
  this.A = a;
  this.b = [];
  zpa(this, 1E3)
}
T_.prototype.o = 0;
T_.prototype.B = n;

function zpa(a, b) {
  1E3 > b ? b = 1E3 : 3E5 < b && (b = 3E5);
  a.o = Math.round(.85 * b) + Math.round(.3 * b * Math.random())
}
T_.prototype.Cp = function(a, b) {
  0 == this.b.length && (this.o = 1E3);
  a.F();
  this.b.push(new Apa(a, b))
};

function Bpa(a, b) {
  for (var c = 0; c < a.b.length; c++) {
    var d = a.b[c];
    if (b == d.b) {
      d.o = m;
      break
    }
  }
  if (!a.B) {
    ib();
    var d = a.D,
        c = a.o,
        e = eb(d);
    (e || !z_(d)) && e && z_(a);
    e || d && typeof d.handleEvent == Ea || g(Error("Invalid listener argument"));
    d = E(ypa, n, "ppl.store.RequestPool", d, a);
    c = Va.setTimeout(d, c || 0);
    a.B = c;
    zpa(a, 2 * a.o);
    a.A()
  }
}
T_.prototype.D = function() {
  this.B = n;
  this.A();
  for (var a = 0; a < this.b.length; a++) {
    var b = this.b[a];
    b.o && (b.b.F(), b.o = p, b.A())
  }
};

function Cpa(a, b) {
  for (var c = 0; c < a.b.length; c++) if (b == a.b[c].b) {
    Nb(a.b, c);
    0 == a.b.length && a.A();
    break
  }
}
function Apa(a, b) {
  this.b = a;
  this.A = b;
  this.o = p
};

function U_() {
  this.o = 0
}
function Dpa(a) {
  var b = new U_;
  b.B = a;
  b.o = a.A;
  return b
}
function Epa(a) {
  var b = new U_;
  b.b = a;
  b.o = a.o;
  return b
}
function Fpa(a, b) {
  var c = new U_;
  c.o = a;
  c.A = b || "A server error has occurred.";
  return c
}
U_.prototype.Ba = function() {
  return this.b && this.b.b ? this.b.b.Ba() : p
};

function Gpa() {};

function V_() {}
H(V_, Gpa);
V_.prototype.mb = function() {
  var a = 0;
  gI(this.Rc(m), function() {
    a++
  });
  return a
};
V_.prototype.clear = function() {
  var a = npa(this.Rc(m)),
      b = this;
  Bb(a, function(a) {
    b.remove(a)
  })
};

function W_(a) {
  this.b = a
}
H(W_, V_);
B = W_.prototype;
B.set = function(a, b) {
  try {
    this.b.setItem(a, b)
  } catch (c) {
    0 == this.b.length && g("Storage mechanism: Storage disabled"), g("Storage mechanism: Quota exceeded")
  }
};
B.get = function(a) {
  a = this.b.getItem(a);
  cb(a) || a === n || g("Storage mechanism: Invalid value was encountered");
  return a
};
B.remove = function(a) {
  this.b.removeItem(a)
};
B.mb = function() {
  return this.b.length
};
B.Rc = function(a) {
  var b = 0,
      c = this.b,
      d = new be;
  d.next = function() {
    b >= c.length && g(ae);
    var d = c.key(b++);
    if (a) return d;
    d = c.getItem(d);
    cb(d) || g("Storage mechanism: Invalid value was encountered");
    return d
  };
  return d
};
B.clear = function() {
  this.b.clear()
};
B.key = function(a) {
  return this.b.key(a)
};

function Hpa() {
  var a = n;
  try {
    a = window.localStorage || n
  } catch (b) {}
  this.b = a
}
H(Hpa, W_);

function X_(a, b) {
  if (J && !rc(9)) {
    Y_ || (Y_ = new de);
    this.jd = Y_.get(a);
    this.jd || (b ? this.jd = document.getElementById(b) : (this.jd = document.createElement("userdata"), this.jd.addBehavior("#default#userData"), document.body.appendChild(this.jd)), Y_.set(a, this.jd));
    this.qx = a;
    try {
      this.jd.load(this.qx)
    } catch (c) {
      this.jd = n
    }
  }
}
H(X_, V_);
var Ipa = {
  ".": ".2E",
  "!": ".21",
  "~": ".7E",
  "*": ".2A",
  "'": ".27",
  "(": ".28",
  ")": ".29",
  "%": "."
},
    Y_ = n;
B = X_.prototype;
B.jd = n;
B.qx = n;

function Z_(a) {
  return "_" + encodeURIComponent(a).replace(/[.!~*'()%]/g, function(a) {
    return Ipa[a]
  })
}
B.set = function(a, b) {
  this.jd.setAttribute(Z_(a), b);
  $_(this)
};
B.get = function(a) {
  a = this.jd.getAttribute(Z_(a));
  cb(a) || a === n || g("Storage mechanism: Invalid value was encountered");
  return a
};
B.remove = function(a) {
  this.jd.removeAttribute(Z_(a));
  $_(this)
};
B.mb = function() {
  return a0(this).attributes.length
};
B.Rc = function(a) {
  var b = 0,
      c = a0(this).attributes,
      d = new be;
  d.next = function() {
    b >= c.length && g(ae);
    var d = c[b++];
    if (a) return decodeURIComponent(d.nodeName.replace(/\./g, "%")).substr(1);
    d = d.nodeValue;
    cb(d) || g("Storage mechanism: Invalid value was encountered");
    return d
  };
  return d
};
B.clear = function() {
  for (var a = a0(this), b = a.attributes.length; 0 < b; b--) a.removeAttribute(a.attributes[b - 1].nodeName);
  $_(this)
};

function $_(a) {
  try {
    a.jd.save(a.qx)
  } catch (b) {
    g("Storage mechanism: Quota exceeded")
  }
}

function a0(a) {
  return a.jd.XMLDocument.documentElement
};

function b0(a, b) {
  this.Kl = a;
  this.Lj = b + "::"
}
H(b0, V_);
B = b0.prototype;
B.Kl = n;
B.Lj = t;
B.set = function(a, b) {
  this.Kl.set(this.Lj + a, b)
};
B.get = function(a) {
  return this.Kl.get(this.Lj + a)
};
B.remove = function(a) {
  this.Kl.remove(this.Lj + a)
};
B.Rc = function(a) {
  var b = this.Kl.Rc(m),
      c = this,
      d = new be;
  d.next = function() {
    for (var d = b.next(); d.substr(0, c.Lj.length) != c.Lj;) d = b.next();
    return a ? d.substr(c.Lj.length) : c.Kl.get(d)
  };
  return d
};

function c0(a) {
  this.b = a
}
c0.prototype.set = function(a, b) {
  C(b) ? this.b.set(a, aJ(b)) : this.b.remove(a)
};
c0.prototype.get = function(a) {
  var b;
  try {
    b = this.b.get(a)
  } catch (c) {
    return
  }
  if (b !== n) try {
    return uG(b)
  } catch (d) {
    g("Storage: Invalid value was encountered")
  }
};
c0.prototype.remove = function(a) {
  this.b.remove(a)
};

function d0(a) {
  this.b = a
}
H(d0, c0);

function Jpa(a) {
  this.data = a
}
function Kpa(a) {
  return !C(a) || a instanceof Jpa ? a : new Jpa(a)
}
function Lpa(a) {
  a = a.data;
  C(a) || g("Storage: Invalid value was encountered");
  return a
}
d0.prototype.set = function(a, b) {
  d0.J.set.call(this, a, Kpa(b))
};
d0.prototype.o = function(a) {
  a = d0.J.get.call(this, a);
  if (!C(a) || a instanceof Object) return a;
  g("Storage: Invalid value was encountered")
};
d0.prototype.get = function(a) {
  return (a = this.o(a)) ? Lpa(a) : k
};

function e0(a) {
  this.b = a
}
H(e0, d0);

function Mpa(a) {
  var b = a.creation;
  a = a.expiration;
  return !!a && a < ib() || !! b && b > ib()
}
e0.prototype.set = function(a, b, c) {
  if (b = Kpa(b)) {
    if (c) {
      if (c < ib()) {
        e0.prototype.remove.call(this, a);
        return
      }
      b.expiration = c
    }
    b.creation = ib()
  }
  e0.J.set.call(this, a, b)
};
e0.prototype.o = function(a, b) {
  var c = e0.J.o.call(this, a);
  if (c) if (!b && Mpa(c)) e0.prototype.remove.call(this, a);
  else
  return c
};

function f0(a) {
  this.b = a
}
H(f0, e0);

function Npa(a, b) {
  var c = [];
  gI(b, function(a) {
    var b;
    try {
      b = f0.prototype.o.call(this, a, m)
    } catch (f) {
      if ("Storage: Invalid value was encountered" == f) {
        c.push(a);
        return
      }
      g(f)
    }
    if (C(b)) if (Mpa(b)) c.push(a);
    else
    try {
      Lpa(b)
    } catch (h) {
      "Storage: Invalid value was encountered" == h ? c.push(a) : g(h)
    } else c.push(a)
  }, a);
  return c
}
function Opa(a, b) {
  var c = Npa(a, b);
  Bb(c, function(a) {
    f0.prototype.remove.call(this, a)
  }, a)
}
function g0(a) {
  Opa(a, a.b.Rc(m))
};

function Ppa(a, b, c, d, e, f, h, l, q, r) {
  this.B = a;
  this.K = b;
  this.O = c;
  this.A = d;
  this.o = e;
  this.wd = f;
  this.H = h;
  this.da = (r ? r.C() : 0) || l;
  this.D = q;
  this.X = r || n;
  this.F = Qpa++
}
var Qpa = 0;
B = Ppa.prototype;
B.getId = w("F");
B.send = function(a) {
  this.b = m;
  var b = {
    entry: []
  };
  Bb(this.A.Kb(), function(a) {
    b.entry.push({
      key: a,
      value: String(this.A.get(a))
    })
  }, this);
  this.D !== n && (b.delegatorLocalId = this.D);
  this.o !== n && (b.fbsVersionInfo = this.o);
  a = a.request;
  var c = {
    path: "plusi/" + this.K + "/ozInternal/" + this.O,
    method: "POST",
    headers: {
      "Accept-Language": "en"
    },
    body: b
  };
  C(this.B) && (c.params = {
    key: this.B
  });
  a(c).execute(E(this.MI, this));
  this.C = pe(this.OI, this.da, this)
};
B.MI = function(a) {
  if (this.b) {
    this.b = p;
    qe(this.C);
    var b = n,
        c = 0;
    if (C(a.response)) try {
      b = he(a.response)
    } catch (d) {
      c = 2, eJ(a.response, 1E3)
    } else c = (c = a.error ? a.error.code : n) && 404 != c ? 2 : 8;
    var e = a.fbsVersionInfo || n;
    a = Wa("error.code", a);
    401 == a || 403 == a ? this.H() : this.wd(this, b, e, c)
  }
};
B.OI = function() {
  this.b = p;
  this.wd(this, n, n, 10)
};
B.nd = function() {
  return !!this.b
};
B.cancel = function() {
  this.b && (this.b = p, qe(this.C), this.wd(this, n, n, 11))
};
B.zh = w("X");

function h0(a, b, c, d, e, f) {
  this.D = b;
  this.ea = d;
  this.W = c;
  this.Ia = e || D;
  this.B = [];
  this.Z = parseInt(f, 10) || n;
  this.F = 0;
  var h;
  b = new Hpa;
  if (b.b) try {
    b.b.setItem("__sak", "1"), b.b.removeItem("__sak"), h = m
  } catch (l) {
    h = p
  } else h = p;
  (h = h ? new b0(b, "fbs_vi") : n) || (h = new X_("fbs_vi"), h = h.jd ? h : n);
  (this.b = h ? new f0(h) : n) && g0(this.b);
  this.A = new T_(D);
  Dd(a, E(this.jN, this))
}
H(h0, uc);
B = h0.prototype;
B.jN = function(a) {
  this.H = a;
  this.o = this.B;
  delete this.B;
  Bb(this.o, function(a) {
    a.send(this.H)
  }, this)
};
B.Nq = function(a, b, c, d) {
  var e = this.W,
      f = this.ea,
      h;
  this.b !== n && C(this.D) ? (g0(this.b), h = this.b.get(this.D) || n) : h = n;
  a = new Ppa(e, f, a, b, h, E(this.uM, this, c), this.Ia, 3E4, this.Z, d);
  C(this.B) ? this.B.push(a) : (this.o.push(a), a.send(this.H));
  return a
};
B.fz = function(a) {
  return this.Nq("contactstorequery", S_(R_), E(this.gY, this, R_, a))
};
B.RA = function(a, b, c) {
  return this.Nq("contactstorequery", S_(a, b), E(this.hY, this, a, b, c))
};
B.uM = function(a, b, c, d, e) {
  for (var f = 0; f < this.o.length; f++) if (this.o[f] == b) {
    this.o.splice(f, 1);
    break
  }
  d !== n && C(this.D) && (g0(this.b), this.b.set(this.D, d, ib() + 9E5), this.C && qe(this.C), this.C = pe(this.O, 900001, this));
  a(b, c, e)
};
B.gY = function(a, b, c, d, e) {
  a = n;
  e || ((d = i0(d)) && d.b ? a = d.b : e = 6);
  b(a, e)
};
B.hY = function(a, b, c, d, e, f) {
  var h = A_;
  f || ((e = i0(e)) && e.o ? h = e.o || A_ : (f = 6, h = A_));
  c(h, d, b, a, f)
};
B.wC = Na();

function j0(a) {
  try {
    return he(a)
  } catch (b) {}
}

function i0(a) {
  var b = n,
      c = n,
      d = new xpa;
  if (a.Success) {
    if (a = a.Body) {
      c = a.Configuration;
      b = n;
      c && (c = j0(c), b = new J_(c));
      var c = b,
          e = a.Contacts,
          b = n;
      if (e) for (var b = [], e = j0(e), f = 0; f < e.length; f++) b.push(new N_(e[f]));
      e = a.Groups;
      b = n;
      if (e) for (b = [], e = j0(e), f = 0; f < e.length; f++) b.push(new L_(e[f]));
      e = a.AutoComplete;
      b = n;
      if (e) for (b = [], e = j0(e), f = 0; f < e.length; f++) tpa(e[f], b);
      (e = a.ProfileIds) && j0(e);
      (e = a.ManagerUpchain) && j0(e);
      (e = a.MetaData) && (Za(e) || uG(e));
      (a = a.UserData) && j0(a)
    }
  } else d.A = 6;
  d.b = c;
  d.o = b;
  return d
}

function Rpa(a, b, c) {
  if (b && b.Success && (b = b.Body) && b.BatchResponse) return rpa(b.BatchResponse, a);
  var d = [];
  Bb(a, function(a) {
    d.push(new O_(a, c || 1))
  });
  return d
}
function Spa(a) {
  if (C(a.o)) {
    for (var b = 0; b < a.o.length; b++) a.o[b].cancel();
    a.o.length = 0
  }
}
B.L = function() {
  C(this.B) && delete this.B;
  Spa(this);
  this.b && g0(this.b)
};
B.execute = function(a) {
  var b, c;
  a.b() ? (b = "contactstoremutate", c = a.O()) : (b = "contactstorequery", c = S_(a.D(), a.A()));
  if (this.A && "BEST_EFFORT" == a.B()) {
    var d = E(this.vO, this);
    b = E(this.Nq, this, b, c, d, a);
    this.A.Cp(a, b);
    return b()
  }
  d = E(this.da, this);
  return this.Nq(b, c, d, a)
};
B.vO = function(a, b, c) {
  var d = a.zh();
  Tpa[c] ? Bpa(this.A, d) : (Cpa(this.A, d), this.da(a, b, c))
};
var Tpa = {
  2: 1,
  10: 101
};
h0.prototype.da = function(a, b, c) {
  a = a.zh();
  c ? b = Fpa(c, k) : a.b() ? (b = Rpa([a.o()], b, c), b = Epa(b[0])) : (b = i0(b), b = Dpa(b));
  a.Iq(b)
};
h0.prototype.O = function() {
  delete this.C;
  g0(this.b)
};
h0.prototype.K = function() {
  this.F++
};
h0.prototype.X = function() {
  this.F--;
  0 == this.F && Spa(this)
};

function k0(a, b, c) {
  this.b = a;
  this.o = b;
  this.group = c || t + a.o++
}
H(k0, uc);
B = k0.prototype;
B.ql = w("group");
B.oe = function() {
  return l0(this).oe()
};
B.JD = Na();
B.sw = function(a) {
  l0(this).sw(a)
};
B.reset = function() {
  l0(this).reset()
};
B.nd = function() {
  return l0(this).nd()
};
B.cancel = function() {
  this.b.cancel(l0(this))
};

function l0(a) {
  return a.b.b[a.group]
}
B.oE = function() {
  this.o(this)
};

function m0() {
  this.lr = 0;
  this.reset()
}
H(m0, uc);
B = m0.prototype;
B.reset = function() {
  this.jr = this.lr;
  this.b = p;
  this.Ih = 1;
  this.o = this.iC = -1
};
B.oe = w("b");
B.JD = w("lr");
B.sw = Oa("lr");
B.nd = function() {
  return !(4 == this.Ih || 5 == this.Ih)
};
B.L = function() {
  m0.J.L.call(this)
};

function n0() {
  this.b = [];
  this.o = 1
}
H(n0, uc);

function Upa(a, b, c, d, e) {
  c = c || 0;
  var f = ib() + c,
      h = a.b[b.ql()];
  h || (h = new m0, a.b[b.ql()] = h);
  h.sw(Math.max(d || 1, h.JD()));
  switch (h.Ih) {
  case 1:
  case 5:
    h.reset();
    o0(b, c, f);
    break;
  case 6:
    o0(b, c, f);
    break;
  case 4:
    e && (h.reset(), o0(b, c, f));
    break;
  case 2:
    f < h.iC ? (a.cancel(h), h.reset(), o0(b, c, f)) : h.jr = h.lr
  }
}
function o0(a, b, c) {
  0 == b ? (l0(a).Ih = 3, a.oE()) : (l0(a).Ih = 2, l0(a).iC = c, b = pe(a.oE, b, a), l0(a).o = b)
}
n0.prototype.L = function() {
  n0.J.L.call(this);
  for (var a in this.b) {
    var b = this.b[a];
    this.cancel(b);
    K(b);
    delete this.b[a]
  }
  this.b = n
};
n0.prototype.cancel = function(a) {
  2 == a.Ih && qe(a.o)
};

function p0(a, b) {
  this.B = a || n;
  this.A = !! b;
  this.o = new de;
  this.b = new q0(t, k);
  this.b.next = this.b.b = this.b
}
function Vpa(a, b) {
  var c = a.o.get(b);
  c && a.A && (c.remove(), Wpa(a, c));
  return c
}
B = p0.prototype;
B.get = function(a, b) {
  var c = Vpa(this, a);
  return c ? c.value : b
};
B.set = function(a, b) {
  var c = Vpa(this, a);
  c ? c.value = b : (c = new q0(a, b), this.o.set(a, c), Wpa(this, c))
};
B.shift = function() {
  return Xpa(this, this.b.next)
};
B.pop = function() {
  return Xpa(this, this.b.b)
};
B.remove = function(a) {
  return (a = this.o.get(a)) ? (a.remove(), this.o.remove(a.key), m) : p
};
B.mb = function() {
  return this.o.mb()
};
B.isEmpty = function() {
  return this.o.isEmpty()
};
B.Kb = function() {
  return this.map(function(a, b) {
    return b
  })
};
B.Hb = function() {
  return this.map(Ma())
};
B.contains = function(a) {
  return this.some(function(b) {
    return b == a
  })
};
B.clear = function() {
  Ypa(this, 0)
};
B.forEach = function(a, b) {
  for (var c = this.b.next; c != this.b; c = c.next) a.call(b, c.value, c.key, this)
};
B.map = function(a, b) {
  for (var c = [], d = this.b.next; d != this.b; d = d.next) c.push(a.call(b, d.value, d.key, this));
  return c
};
B.some = function(a, b) {
  for (var c = this.b.next; c != this.b; c = c.next) if (a.call(b, c.value, c.key, this)) return m;
  return p
};
B.every = function(a, b) {
  for (var c = this.b.next; c != this.b; c = c.next) if (!a.call(b, c.value, c.key, this)) return p;
  return m
};

function Wpa(a, b) {
  a.A ? (b.next = a.b.next, b.b = a.b, a.b.next = b, b.next.b = b) : (b.b = a.b.b, b.next = a.b, a.b.b = b, b.b.next = b);
  a.B != n && Ypa(a, a.B)
}

function Ypa(a, b) {
  for (var c = a.o.mb(); c > b; c--) {
    var d = a,
        e = a.A ? a.b.b : a.b.next;
    e.remove();
    d.o.remove(e.key)
  }
}
function Xpa(a, b) {
  a.b != b && (b.remove(), a.o.remove(b.key));
  return b.value
}
function q0(a, b) {
  this.key = a;
  this.value = b
}
q0.prototype.remove = function() {
  this.b.next = this.next;
  this.next.b = this.b;
  delete this.b;
  delete this.next
};
var Zpa = {
  v0: "tb",
  ERROR: "ub"
};

function $pa(a, b) {
  L.call(this, a && a[0].o ? "ub" : "tb");
  this.D = b || "wb"
}
H($pa, L);

function r0() {
  this.b = new P;
  this.o = new P;
  this.A = new p0
}
H(r0, uc);
r0.prototype.L = function() {
  r0.J.L.call(this);
  this.b.aa();
  this.b = n;
  this.o.aa();
  this.o = n
};

function aqa(a) {
  this.b = a || D;
  this.La = pe(this.XT, 0, this)
}
B = aqa.prototype;
B.Iq = Oa("b");
B.cancel = function() {
  qe(this.La);
  this.La = n
};
B.nd = function() {
  return !!this.La
};
B.XT = function() {
  this.La = n;
  this.b()
};
B.zh = w("o");

function s0(a) {
  this.D = {};
  this.b = [];
  this.H = [];
  this.C = new n0;
  this.o = new Q(this);
  this.K = !a;
  this.F = [];
  this.A = a || new r0;
  this.F.push(this.A)
}
H(s0, uc);
B = s0.prototype;
B.Zi = function(a, b) {
  this.b.push(a);
  b && this.H.push(a);
  this.D[a.getId()] = a;
  this.o.I(a, Cc(Zpa), E(this.rO, this))
};
B.rO = function(a) {
  var b = this.A;
  b.o.P(a);
  b.b.P(a)
};
B.pk = function(a, b) {
  var c = E(this.dY, this, b);
  return bqa(this, a, function(a) {
    return a.hm
  }, c)
};

function bqa(a, b, c, d) {
  var e = new t0(d),
      f, h;
  if (b.Kq) h = a.D[b.Kq], 0 < b.Qv || 1 < b.Rv ? f = cqa(a, h, c(h), b, d) : f = c(h).call(h, b, d), f && e.add(f);
  else
  for (var l = 0; l < a.b.length; l++) h = a.b[l], 0 < b.Qv || 1 < b.Rv ? f = cqa(a, h, c(h), b, d) : f = c(h).call(h, b, d), f && e.add(f);
  return e
}
B.execute = function(a) {
  dqa(this, a);
  if (this.X) {
    var b = a.K(this.X, E(this.uF, this));
    if (b) return b
  }
  return this.uF(a)
};

function dqa(a, b) {
  Bb(a.F, Na());
  if (b.b()) {
    var c = b.o();
    c && (c = c.b()) && dqa(a, c)
  }
}
B.uF = function(a) {
  if (a.b()) {
    var b = a.o();
    b && (b = b.o()) && this.A.A.set(b, ib())
  }
  if (b = a.A()) if (b = this.D[b]) return b.execute(a);
  var c = new t0;
  c.o = a;
  for (var d = 0; d < this.b.length; d++) b = this.b[d], b.execute && c.add(b.execute(a));
  return c
};

function cqa(a, b, c, d, e) {
  b = E(a.DW, a, b, c, d, e);
  b = new k0(a.C, b, d.name);
  Upa(a.C, b, d.Qv, d.Rv, d.Ja);
  return new u0(b)
}
B.DW = function(a, b, c, d, e) {
  e.request = b.call(a, c, function(a, b, c, q, r) {
    var s;
    s = e.b;
    var u = !r;
    l0(e).b = u;
    var x = l0(e);
    x.jr -= 1;
    !u && 0 < l0(e).jr ? (l0(e).Ih = 6, Upa(s, e, Math.max(100, Math.round(45E3 * Math.random()))), s = p) : (l0(e).Ih = u ? 4 : 5, s = m);
    s && d && d(a, b, c, q, r)
  })
};
B.dY = function(a, b, c, d, e) {
  a && (e.filter && (b = e.filter(b, e.fc)), eqa(b), a(b, c, d, e))
};

function eqa(a) {
  if (0 < a.length) for (var b = a[0].px(), c = 1; c < a.length; c++) {
    var d = a[c],
        e = d.px();
    e < b && (d.yb = d.yb | 1, b = e)
  }
}
B.L = function() {
  s0.J.L.call(this);
  K(this.C);
  this.C = n;
  Bb(this.H, K);
  this.H = this.D = this.b = n;
  K(this.o);
  this.o = n;
  Bb(this.F, function(a) {
    a != this.A && K(a)
  }, this);
  this.F = n;
  this.K && (K(this.A), this.A = n)
};

function t0(a) {
  this.b = [];
  this.wd = a
}
B = t0.prototype;
B.add = function(a) {
  this.b.push(a)
};
B.isEmpty = function() {
  return 0 == this.b.length
};
B.cancel = function() {
  for (var a = 0; a < this.b.length; a++) this.b[a].cancel()
};
B.nd = function() {
  for (var a = 0; a < this.b.length; a++) if (this.b[a].nd()) return m;
  return p
};
B.zh = w("o");

function u0(a) {
  this.op = a;
  this.request = n
}
u0.prototype.cancel = function() {
  this.op.cancel();
  this.request && this.request.cancel()
};
u0.prototype.nd = function() {
  return this.op.nd() || this.op.request && this.op.request.nd()
};

function v0(a, b) {
  this.text = a;
  this.o = b
}
H(v0, opa);
v0.prototype.getName = y(n);
v0.prototype.Ma = y(n);
v0.prototype.getType = y("sr");
v0.prototype.px = y(0);

function w0(a) {
  s0.call(this, a)
}
H(w0, s0);
w0.prototype.Zi = function(a, b) {
  if (1 == this.b.length) {
    var c = this.B = new fqa;
    c.o.push(new x0(c, c.o.length, this.b[0]))
  }
  w0.J.Zi.call(this, a, b);
  this.B && (c = this.B, c.o.push(new x0(c, c.o.length, a)))
};
w0.prototype.pk = function(a, b) {
  var c;
  if (this.B && a.Ol && !a.Kq) {
    c = this.B;
    var d = new y0(a, b);
    z0(c, d);
    c = d
  } else c = w0.J.pk.call(this, a, b);
  return c
};

function fqa() {
  this.o = [];
  this.b = n
}

function z0(a, b, c, d) {
  a.b = [];
  for (var e = 0; e < a.o.length; e++) {
    if (e == c) a.b[e] = d;
    else {
      var f = a.o[e],
          h = b,
          l = h.A[f.b];
      if (!l) {
        f.A = m;
        f.C = p;
        var q = f.B.hm(h.b, E(f.F, f, h, ib()));
        h.Cp(f.b, q);
        f.A = p;
        !f.C && h.b.Ol && 300 < f.D && (l = f.B.D, l = [new v0(l ? "Searching for matches from " + l : "Searching for more matches.", f.o.A)])
      }
      l && (q = f.o, f = f.b, q.b ? q.b[f] = l : z0(q, h, f, l))
    }
    if (0 == e && a.b[e] && a.b[e].length >= b.b.Ic) break
  }
  c = b.b;
  d = a.b;
  q = [];
  e = p;
  for (l = 0; l < d.length && q.length < c.Ic; l++) if (d[l]) {
    f = q.length;
    e = m;
    var h = d[l],
        r = c.Ic,
        s = q.length;
    if (0 == s) q =
    h.length > r ? h.slice(0, r) : h;
    else
    for (var u = 0; u < h.length; u++) {
      for (var x = n, z = 0; z < s && !(x = gqa(q[z], h[u])); z++);
      if (x) x === h[u] && (q[z] = x);
      else if (q.length == s ? q = q.concat(h[u]) : q.push(h[u]), q.length == r) break
    }
    0 < f && q.length > f && (q[f].yb = q[f].yb | 1)
  }
  e ? (eqa(q), c = q) : c = n;
  c && b.wd && b.wd(c, b, n, b.b);
  a.b = n
}
function gqa(a, b) {
  if (a.o || b.o) return n;
  if (a.text == b.text) return a;
  if (a.Ma() == b.Ma() && a.getType() == b.getType()) {
    if (!b.getName()) return a;
    if (!a.getName()) return b
  }
  return n
}
fqa.prototype.A = Na();

function x0(a, b, c) {
  this.o = a;
  this.b = b;
  this.B = c;
  this.D = 0;
  this.A = p
}
x0.prototype.F = function(a, b, c) {
  this.C = m;
  this.A || (this.D = ib() - b);
  a.b.filter && c && (c = a.b.filter(c, a.b.fc));
  a.A[this.b] = c;
  b = this.o;
  var d = this.b;
  b.b ? b.b[d] = c : z0(b, a, d, c)
};
x0.prototype.aa = function() {
  this.o = this.K = n
};

function y0(a, b) {
  this.b = a;
  this.wd = b;
  y0.prototype.o = [];
  y0.prototype.A = []
}
y0.prototype.cancel = function() {
  for (var a in this.o) this.o[a].cancel();
  this.o.length = 0
};
y0.prototype.nd = function() {
  for (var a in this.o) if (this.o[a].nd()) return m;
  return p
};
y0.prototype.Cp = function(a, b) {
  this.o[a] = b
};
var hqa = {
  198: "AE",
  230: "ae",
  306: "IJ",
  307: "ij",
  338: "AE",
  339: "ae"
};

function iqa(a) {
  for (var b = [], c = 0, d = 0; d < a.length; d++) {
    var e;
    e = a.charCodeAt(d);
    if (192 > e || 382 < e) e = n;
    else {
      var f = hqa[e];
      f ? e = f : (f = "AAAAAA*CEEEEIIIIDNOOOOOx0UUUUYpBaaaaaa*ceeeeiiiionooooo^ouuuuypyAaAaAaCcCcCcCcDdDdEeEeEeEeEeGgGgGgGgHhHhIiIiIiIiIi**JjKkkLlLlLLLlttNnNnNnnNnOoOoOo**RrRrRrSsSsSsSsTtTtttUuUuUuUuUuUuWwYyYZzZzZ" [e - 192], e = "^" == f ? n : f)
    }
    e && (c != d && b.push(a.substr(c, d - c)), c = d + 1, b.push(e))
  }
  return 0 < b.length ? (b.push(a.substr(c)), b.join(t)) : a
};

function A0(a, b, c, d, e, f) {
  P.call(this);
  this.C = e || 0;
  this.K = f || jqa;
  this.b = new p0(this.C, m);
  this.A = a || 0;
  this.F = b || 0;
  this.B = c || 0;
  this.o = !! d
}
H(A0, P);
A0.prototype.L = function() {
  A0.J.L.call(this);
  this.b = n
};
A0.prototype.clear = function() {
  this.b.clear()
};

function jqa(a) {
  var b = tb(iqa(a.fc));
  return function(a) {
    var d = new RegExp("(^|\\W+)" + b, "i");
    (d = iqa(String(a[1])).match(d) != n) || (d = a[0], d = a[2].match(new RegExp("^" + b, "i")) != n && "cl" != String(d));
    return d
  }
}

function B0(a, b) {
  var c = "^" + a.fc.toLowerCase();
  b && (a.Rl || (c = "nc" + c), a.Tj || (c = "ng" + c), a.F || (c = "np" + c), a.Gs || (c = "na" + c));
  a.Pg && (c = "pa" + c);
  return c
}
function C0(a, b, c) {
  a.b.set(B0(b, a.o), c);
  if (a.A && (b = a.b.mb(), b > a.A)) {
    c = ib() - a.F;
    do {
      if (a.b.b.b.value.jA >= c) break;
      a.b.pop()
    } while (--b > a.A)
  }
}
function kqa(a, b, c) {
  c = c ? a.b.get(b) : (c = a.b.o.get(b)) ? c.value : k;
  return c && a.B && c.jA + a.B < ib() ? (a.b.remove(b), n) : c
}

function lqa(a, b, c) {
  c = b.length - c.length;
  for (var d = b.length; d >= c; d--) {
    var e = kqa(a, b, p);
    if (e) return e;
    b = b.substr(0, d - 1)
  }
  return n
}
function mqa(a, b) {
  if (b.Gs) return n;
  var c = B0(b, a.o),
      d = lqa(a, c, b.fc);
  return d ? d : a.o && !nb(c, "^") ? (c = B0(b, p), lqa(a, c, b.fc)) : n
}
function D0(a, b, c) {
  this.fc = a;
  this.b = b;
  this.o = !! c;
  this.jA = ib()
}
D0.prototype.Sb = function(a) {
  return !this.o || 0 <= a && a <= this.b.length
};

function E0(a, b, c, d) {
  P.call(this);
  this.B = p;
  this.D = n;
  this.o = b;
  this.A = c;
  this.b = a;
  this.b.K(this.A);
  d && O(d.b, "tb", this.fK, p, this)
}
H(E0, P);
B = E0.prototype;
B.Nk = function(a, b) {
  this.b.wC(a);
  this.D = b;
  this.B || (this.B = m)
};
B.getId = w("A");
B.hm = function(a, b) {
  if (this.B) {
    var c;
    c = this.o;
    var d;
    if (sv(a.fc) && !c.D) d = A_;
    else {
      d = a.Ic;
      var e = kqa(c, B0(a, c.o), m);
      (d = e && d && !e.Sb(d) ? n : e) ? d = d.b : (d = mqa(c, a)) && 0 == d.b.length ? (C0(c, a, new D0(a.fc, A_)), d = A_) : d && !d.o && c.H ? (d = Cb(d.b, c.K(a), c), C0(c, a, new D0(a.fc, d))) : d = n
    }
    d && 0 <= a.Ic && d.length > a.Ic && (d = d.slice(0, a.Ic));
    return (c = d) ? (b && b(c, B_, this.getId(), a), B_) : this.b.RA(a, this.getId(), E(this.wM, this, b))
  }
  b && b(A_, B_, this.getId(), a, 4);
  return B_
};
B.wM = function(a, b, c, d, e, f) {
  f || C0(this.o, e, new D0(e.fc, b, -1 != e.Ic && b.length >= e.Ic));
  a && (b && 0 <= e.Ic && b.length > e.Ic && (b = b.slice(0, e.Ic)), a(b, c, d, e, f))
};
B.fK = function() {
  this.o.clear()
};
B.L = function() {
  E0.J.L.call(this);
  this.o.aa();
  this.o = n;
  this.b.X(this.A);
  this.b = n
};

function F0(a, b, c) {
  A0.call(this, 100, 18E5, 432E5, m, 0, c || nqa);
  this.H = a;
  this.D = b
}
H(F0, A0);

function nqa(a) {
  var b = tb(a.fc),
      c = new RegExp("(^|\\W+)" + b, "i"),
      d = new RegExp("^" + b, "i");
  return function(b) {
    var f;
    (f = Qqa(a, b.getType())) && !(f = Tu(b.getName().match(c))) && (f = Tu(b.Ma().match(d))) && (f = "cl" != b.getType());
    return f
  }
}
function Qqa(a, b) {
  switch (b) {
  case "ct":
    return a.Rl;
  case "cl":
  case "li":
    return a.Tj;
  case "pt":
    return a.F
  }
  return p
};

function G0(a, b, c) {
  this.C = !! c;
  b = b || new F0(m, p, Rqa);
  E0.call(this, a, b, "domain")
}
H(G0, E0);
G0.prototype.hm = function(a, b) {
  a.Tj && !this.C && (a = Hc(a), a.Tj = p);
  return G0.J.hm.call(this, a, b)
};

function Rqa(a) {
  for (var b = Fv(a.fc).toLowerCase().split(/\s+/), c = [], d = [], e = 0; e < b.length; e++) {
    var f = tb(b[e]),
        h = new RegExp("^" + f, "i");
    c.push(new RegExp("(^|\\W+)" + f, "i"));
    d.push(h)
  }
  return function(b) {
    if (Qqa(a, b.getType())) {
      for (var e = 0; e < c.length; e++) if (!b.getName().match(c[e]) && !b.Ma().match(d[e])) return p;
      return m
    }
    return p
  }
}
G0.prototype.execute = function(a) {
  return this.b.execute(a)
};

function H0() {}
function Sqa(a, b) {
  a.b = b
}
H0.prototype.zh = w("o");
H0.prototype.cancel = function() {
  this.b && this.b.cancel()
};
H0.prototype.nd = function() {
  return !!this.b && this.b.nd()
};

function I0() {
  this.o = [];
  this.A = {}
}
H(I0, uc);
B = I0.prototype;
B.Lk = p;
B.tq = p;
B.send = function(a) {
  this.Lk ? this.tq ? J0(a) : Tqa(this, a) : this.o.push(a)
};

function Tqa(a, b) {
  a.A[b.getId()] = b;
  a.b.contentWindow.postMessage(aJ({
    t: "s",
    i: b.A,
    ti: b.B,
    u: b.D.toString(),
    m: b.method,
    d: b.data,
    h: b.headers
  }), a.B)
}
B.abort = function(a) {
  if (this.Lk) this.tq || (this.b.contentWindow.postMessage(aJ({
    i: a,
    t: "a"
  }), this.B), delete this.A[a]);
  else {
    var b = Ib(this.o, function(b) {
      return b.getId() == a
    });
    if (!(0 > b)) {
      var c = this.o[b];
      Nb(this.o, b);
      J0(c);
      c.cancel()
    }
  }
};
B.EA = function(a) {
  a = a.b;
  if (a.source == this.b.contentWindow && a.origin == this.B) switch (a = uG(a.data), a.t) {
  case "i":
    this.Lk = m;
    this.tq = p;
    Db(this.o, function(a) {
      return Tqa(this, a)
    }, this);
    Lb(this.o);
    break;
  case "r":
    var b = a.i,
        c = this.A[b];
    c && (Uqa(c, a.s, a.r, a.st, a.ec), delete this.A[b])
  }
};
B.nM = function() {
  this.Lk || (this.tq = this.Lk = m, Db(this.o, function(a) {
    J0(a)
  }), Lb(this.o))
};
B.L = function() {
  this.b && ($c(window, "message", this.EA, p, this), this.b.parentNode.removeChild(this.b), delete this.b);
  this.Lk = p
};

function Vqa(a, b, c, d, e, f, h, l) {
  this.D = a;
  this.wd = b;
  this.o = c;
  this.B = (l ? l.C() : 0) || d;
  this.method = e || "GET";
  this.data = f;
  this.headers = h;
  this.C = l || n;
  this.A = Wqa++
}
var Wqa = 0;
B = Vqa.prototype;
B.getId = w("A");
B.send = function() {
  this.o ? this.o.send(this) : J0(this)
};

function J0(a) {
  var b = a.b = new De;
  b.D = Math.max(0, a.B);
  O(b, wa, a.uC, p, a);
  b.send(a.D.toString(), a.method, a.data, a.headers)
}
B.uC = function(a) {
  a = a.target;
  a == this.b && ($c(this.b, wa, this.uC, p, this), this.b = n, Uqa(this, a.oe(), a.Ki(), a.getStatus(), a.Or()))
};

function Uqa(a, b, c, d, e) {
  if (b) {
    b = c.indexOf("&&&START&&&") + 11;
    var f = c.lastIndexOf("&&&END&&&");
    c = -1 != b && -1 != f ? he(c.substring(b, f)) : n
  } else c = n;
  b = 0;
  c || (b = 404 == d ? 8 : 8 == e ? 10 : 7 == e ? 11 : 2);
  a.wd(a, c, b)
}
B.nd = function() {
  return !!this.b
};
B.cancel = function() {
  this.b ? this.b.abort() : this.o && this.o.abort(this.A)
};
B.zh = w("C");

function K0(a) {
  this.b = [];
  this.B = k;
  this.D = 0;
  this.o = "https:" != window.location.protocol && a ? new I0 : n
}
B = K0.prototype;
B.Jp = function(a, b, c, d, e, f) {
  a = new Vqa(a, E(this.uQ, this, b), this.o, 15E3, c, d, e, f);
  this.b.push(a);
  a.send();
  return a
};
B.fz = function(a) {
  return this.Jp(L0(this, R_), E(this.eY, this, R_, a))
};
B.RA = function(a, b, c) {
  return this.Jp(L0(this, a, b), E(this.fY, this, a, b, c))
};

function Xqa(a, b) {
  var c = new nf;
  c.add("out", "js");
  c.add("tok", a.B);
  c.add("type", "3");
  b && (c.add("id", b.A()), c.add("op", rb(b.da().toString())));
  return c.toString()
}
B.uQ = function(a, b, c, d) {
  for (var e = 0; e < this.b.length; e++) if (this.b[e] == b) {
    this.b.splice(e, 1);
    break
  }
  a(b, c, d)
};
B.eY = function(a, b, c, d, e) {
  a = n;
  e || ((d = M0(this, d)) && d.b ? a = d.b : e = 6);
  b(a, e)
};
B.fY = function(a, b, c, d, e, f) {
  var h = A_;
  f || ((e = M0(this, e)) && e.o ? h = e.o || A_ : (f = 6, h = A_));
  c(h, d, b, a, f)
};
B.wC = function(a) {
  a instanceof ff || (a = new ff(a));
  this.H = y_(a, "data/contactstore");
  this.F = y_(a, "data/contactstore/mutate");
  if (this.o) {
    var b = this.o,
        c = a.toString();
    b.D != c && (b.D = c, b.b && g(Error("The HTTPS proxy does not support changing its base URI.")), c = y_(a, "ui/HttpsProxy"), gf(c, "https"), VG(c, "parent", window.location.origin), 2009 != a.wh && 8888 != a.wh || hf(c, 4443), b.B = lf(kf(jf(c.clone(), t), k), t).toString(), a = c.toString(), c = b.b = document.createElement("iframe"), c.height = "0", c.width = "0", c.style.visibility = "hidden", c.style.position = "absolute", c.style.top = "-100px", c.src = a, document.body.appendChild(c), O(window, "message", b.EA, p, b), pe(b.nM, 2E3, b))
  }
};

function L0(a, b, c) {
  a = a.H.clone();
  b = S_(b, c);
  Yqa(a, b);
  return a
}
function Yqa(a, b) {
  Bb(b.Kb().sort(), function(c) {
    VG(a, c, b.get(c))
  })
}
function N0(a) {
  try {
    return he(a)
  } catch (b) {}
}

function M0(a, b) {
  var c = n,
      d = n,
      e = new xpa;
  if (b.Success) {
    var f = b.Body;
    if (f) {
      d = f.Configuration;
      c = n;
      d && (d = Za(d) ? d : N0(d), c = new J_(d));
      var d = c,
          h = f.Contacts,
          c = n;
      if (h) for (var c = [], h = Za(h) ? h : N0(h), l = 0; l < h.length; l++) c.push(new N_(h[l]));
      h = f.Groups;
      c = n;
      if (h) for (c = [], h = Za(h) ? h : N0(h), l = 0; l < h.length; l++) c.push(new L_(h[l]));
      h = f.AutoComplete;
      c = n;
      if (h) for (c = [], h = Za(h) ? h : N0(h), l = 0; l < h.length; l++) tpa(h[l], c);
      (h = f.ProfileIds) && (Za(h) || N0(h));
      (h = f.ManagerUpchain) && (Za(h) || N0(h));
      (h = f.MetaData) && (Za(h) || uG(h));
      (h = f.UserData) && (Za(h) || N0(h));
      if (f = f.AuthToken && f.AuthToken.Value) a.B = f
    }
  } else e.A = 6;
  e.b = d;
  e.o = c;
  return e
}
function Zqa(a, b, c) {
  if (b && b.Success && (b = b.Body) && b.BatchResponse) return rpa(b.BatchResponse, a);
  var d = [];
  Bb(a, function(a) {
    d.push(new O_(a, c || 1))
  });
  return d
}
function $qa(a) {
  for (var b = 0; b < a.b.length; b++) a.b[b].cancel();
  a.b.length = 0
}
B.L = function() {
  $qa(this);
  this.o && this.o.aa()
};
B.execute = function(a) {
  var b, c, d, e;
  if (a.b()) {
    if (!this.B) {
      var f = new H0;
      Sqa(f, this.fz(E(function() {
        if (this.B) {
          var b = this.execute(a);
          f.b = b
        }
      }, this)));
      f.o = a;
      return f
    }
    d = Xqa(this, a);
    e = new de;
    e.set("Content-type", "application/x-www-form-urlencoded");
    e.set("Content-length", d.length);
    b = this.F;
    c = "POST"
  } else b = L0(this, a.D(), a.A()), c = "GET";
  var h;
  if (this.A && "BEST_EFFORT" == a.B()) return h = E(this.XI, this), b = E(this.Jp, this, b, h, c, d, e, a), this.A.Cp(a, b), b();
  h = E(this.C, this);
  return this.Jp(b, h, c, d, e, a)
};
B.XI = function(a, b, c) {
  var d = a.zh();
  ara[c] ? Bpa(this.A, d) : (Cpa(this.A, d), this.C(a, b, c))
};
var ara = {
  2: 1,
  10: 101
};
K0.prototype.C = function(a, b, c) {
  a = a.zh();
  c ? b = Fpa(c) : a.b() ? (b = Zqa([a.o()], b, c), b = Epa(b[0])) : (b = M0(this, b), b = Dpa(b));
  a.Iq(b)
};
K0.prototype.K = function() {
  this.D++
};
K0.prototype.X = function() {
  this.D--;
  0 == this.D && $qa(this)
};

function O0(a, b, c, d) {
  E0.call(this, a, b, c, d)
}
H(O0, E0);
O0.prototype.execute = function(a) {
  a.b() && a.H(E(this.C, this, a));
  return this.b.execute(a)
};
O0.prototype.C = function(a, b) {
  if (b.Ba()) {
    var c = b.b;
    (a.X() || c && c.o) && this.P(new $pa([b.b], "vb"))
  }
};

function P0(a, b, c) {
  b = b || new F0(m, m);
  E0.call(this, a, b, "personal", c)
}
H(P0, O0);
P0.prototype.Nk = function(a, b) {
  P0.J.Nk.call(this, a, b)
};

function Q0(a) {
  P.call(this);
  this.b = a;
  var b = E(this.P, this, "tb");
  O(a, "gcal$pae", b)
}
H(Q0, P);
Q0.prototype.hm = function(a, b) {
  var c = [],
      d = a.Ic;
  this.b.forEach(function(b) {
    if (d && 100 != b.b && SG(b)) {
      var f = b.tc(),
          h = a.fc;
      if (!h || sb(String(f).toLowerCase(), h.toLowerCase())) b = new R0(f, b.Ma(), b.Bb()), c.push(b), d--
    }
  });
  b(c, B_, this.getId(), a);
  return B_
};
Q0.prototype.getId = y("gcal");

function R0(a, b, c) {
  var d = [];
  d[1] = a;
  d[2] = b;
  var e;
  t: switch (c) {
  case 108:
    e = "cl";
    break t;
  default:
    e = "sr"
  }
  d[0] = e;C_.call(this, d);this.A = b;this.text = 103 == c ? '"' + a + '" (room)' : '"' + a + '" (calendar)'
}
H(R0, C_);
R0.prototype.toString = w("A");

function S0(a) {
  this.b = a;
  var b = Td(this.b).isEnabled(115);
  a = Ph(this.b);
  var c = a.A.getName();
  if (b) {
    var b = uf.match(vv),
        b = (b && b[1] || n) + "/calendar/",
        d, e = (d = uf.match(vv)) && d[2];
    d = e && "b" != d[3] ? e.split("/")[1] : n;
    c = b + d + "/c/" + c + "/"
  } else c = "/calendar/c/";
  a = a.B;
  C(a) && (c += "u/" + a + "/");
  this.D = c;
  this.o = n
}

function bra(a) {
  if (!a.o) {
    var b = qf(a.D),
        c = Rh(a.b).getName() != n,
        d = c ? new w0 : new s0,
        e;
    if (Td(a.b).isEnabled(23)) {
      e = mpa(Jd(a.b, 27));
      var f = Jd(a.b, 26);
      e = new h0(e, k, "AIzaSyBuUpn1wi2-0JpM3S-tq2csYx0z2_m_pqc", f.B)
    } else e = new K0;
    f = new P0(e);
    f.Nk(b, "Contacts");
    d.Zi(f, m);
    c && (c = new G0(e, n, m), c.Nk(b, "Domain Contacts"), d.Zi(c, m), d.Zi(new Q0(ig.M()), m));
    d.pk(wpa, D);
    a.o = d
  }
  return a.o
}
S0.prototype.B = function(a, b) {
  bra(this).pk({
    fc: a,
    Ic: 1,
    Rl: m,
    UB: 0,
    Hs: Q_,
    Ol: m
  }, E(this.A, this, a, b))
};
S0.prototype.A = function(a, b, c) {
  c && (c = c[0], c instanceof C_ && (c = c.toString(), -1 != c.toLowerCase().indexOf(a) && b(c)))
};
Ou(803, function(a) {
  return new S0(a)
});

function cra() {
  var a = new wd,
      b = dra();
  b.load("client", function() {
    a.callback(b.client)
  });
  return a
}
function dra() {
  for (var a = window, b = Wa("gapi", a); !b && a && a != window.top;) a = a.parent, b = Wa("gapi", a);
  return b
};

function T0(a, b, c) {
  P.call(this);
  this.K = a;
  this.H = c;
  this.o = b;
  O(b, ["hilite", "select", "canceldismiss", "dismiss"], this.handleEvent, p, this);
  this.F = n;
  this.A = [];
  this.D = -1;
  this.B = 0;
  this.C = this.b = n;
  this.da = {}
}
H(T0, P);
B = T0.prototype;
B.fC = 10;
B.Gc = w("o");
B.handleEvent = function(a) {
  var b = this.K;
  if (a.target == this.o) switch (a.type) {
  case "hilite":
    this.Ai(a.row);
    break;
  case "select":
    var c = p;
    if (db(a.row)) {
      a = a.row;
      var d = this.A[U0(this, a)],
          c = !! d && b.Br && b.Br(d);
      d && !c && this.D != a && this.Ai(a)
    }
    c || this.yk();
    break;
  case "canceldismiss":
    V0(this);
    break;
  case "dismiss":
    era(this)
  }
};
B.WC = w("b");

function fra(a) {
  for (var b = a.B + a.A.length - 1, c = a.D, d = 0; d < a.A.length; d++) {
    if (c >= a.B && c < b) c++;
    else if (-1 == c) c = a.B;
    else
    break;
    if (a.Ai(c)) break
  }
}
B.Ai = function(a) {
  var b = U0(this, a),
      c = this.A[b];
  return c && this.K.Br && this.K.Br(c) ? p : (this.D = a, this.o.Ai(a), -1 != b)
};
B.yk = function() {
  var a = U0(this, this.D);
  if (-1 != a) {
    var b = this.A[a],
        c = this.H;
    if (c.Mb) {
      var d = b.toString();
      if (C(k) ? 0 : c.A) {
        var e = gra(c, c.Ca(), AS(c.Mb, m)[0]),
            f = W0(c, c.Ca());
        c.O.test(d) || (d = d.replace(/[\s\xa0]+$/, t) + c.X);
        0 == e || sv(f[e - 1]) || (d = " " + d);
        e == f.length - 1 && (d += " ");
        if (d != f[e]) {
          f[e] = d;
          d = c.Mb;
          (hc || J && qc("9")) && d.blur();
          d.value = f.join(t);
          for (var h = 0, l = 0; l <= e; l++) h += f[l].length;
          d.focus();
          e = h;
          f = c.Mb;
          d = e;
          BS(f) ? f.selectionStart = d : J && (h = CS(f), l = h[0], l.inRange(h[1]) && (d = DS(f, d), l.collapse(m), l.move("character", d), l.select()));
          f = c.Mb;
          BS(f) ? f.selectionEnd = e : J && (h = CS(f), d = h[1], h[0].inRange(d) && (e = DS(f, e), f = DS(f, AS(f, m)[0]), d.collapse(m), d.moveEnd("character", e - f), d.select()))
        }
      } else c.$a(d);
      c.Bu = m
    }
    this.Fe();
    this.P({
      type: "update",
      row: b,
      index: a
    });
    return m
  }
  this.Fe();
  this.P({
    type: "update",
    row: n,
    index: n
  });
  return p
};
B.Fe = function() {
  this.D = -1;
  this.F = n;
  this.B += this.A.length;
  this.A = [];
  window.clearTimeout(this.C);
  this.C = n;
  this.o.Fe();
  this.P("suggestionsupdate");
  this.P("dismiss")
};

function era(a) {
  a.C || (a.C = window.setTimeout(E(a.Fe, a), 100))
}
B.nG = function() {
  return this.C ? (window.clearTimeout(this.C), this.C = n, m) : p
};

function V0(a) {
  a.nG() || window.setTimeout(E(a.nG, a), 10)
}
B.L = function() {
  T0.J.L.call(this);
  delete this.da;
  this.o.aa();
  this.H.aa();
  this.K = n
};
B.xR = function(a, b, c) {
  this.F == a && this.xm(b, c)
};
B.xm = function(a, b) {
  var c = Ya(b) == Ha && b,
      d = (c ? c.ZY() : b) ? U0(this, this.D) : -1;
  this.B += this.A.length;
  this.A = a;
  for (var e = [], f = 0; f < a.length; ++f) e.push({
    id: this.B + f,
    data: a[f]
  });
  f = n;
  this.b && (f = this.da[gb(this.b)] || this.b);
  this.o.Ug(f);
  this.o.xm(e, this.F, this.b);
  f = m;
  c && c.jJ() !== k && (f = c.jJ());
  this.D = -1;
  (f || 0 <= d) && 0 != e.length && this.F && (0 <= d ? this.Ai(this.B + d) : fra(this));
  this.P("suggestionsupdate")
};

function U0(a, b) {
  var c = b - a.B;
  return 0 > c || c >= a.A.length ? -1 : c
}
B.Wu = function(a) {
  var b = this.H;
  b.yX.apply(b, arguments)
};
B.sQ = function(a) {
  var b = this.H;
  b.UW.apply(b, arguments);
  Bb(arguments, function(a) {
    Gc(this.da, gb(a))
  }, this)
};
B.update = function(a) {
  this.H.update(a)
};

function X0(a, b, c, d) {
  d = d || 150;
  this.A = c != n ? c : m;
  this.D = a || ",;";
  this.X = this.D.substring(0, 1);
  a = this.A ? "[\\s" + this.D + "]+" : "[\\s]+";
  this.K = new RegExp("^" + a + "|" + a + "$", "g");
  this.O = new RegExp("\\s*[" + this.D + "]$");
  this.F = b || t;
  this.da = this.A;
  this.La = 0 < d ? new $I(d) : n;
  this.o = new Q(this);
  this.C = new Q(this);
  this.B = new gy;
  this.H = -1
}
H(X0, uc);
var hra = (wn || xn) && !qc("533.17.9");
B = X0.prototype;
B.Pv = n;
B.Mb = n;
B.Nt = t;
B.jh = p;
B.Bu = p;
B.Az = m;
B.Ca = function() {
  return this.Mb.value
};
B.$a = function(a) {
  this.Mb.value = a
};
B.yX = function(a) {
  for (var b = 0; b < arguments.length; b++) {
    var c = arguments[b];
    Ri(c) && Ej(c, "haspopup", m);
    this.o.I(c, "focus", this.hv);
    this.o.I(c, "blur", this.gv);
    this.Mb || (this.C.I(c, "keydown", this.OB), Ri(c) && Hw(yi(c)) == c && ira(this, c))
  }
};
B.UW = function(a) {
  for (var b = 0; b < arguments.length; b++) {
    var c = arguments[b];
    c == this.Mb && this.gv();
    this.o.b(c, "focus", this.hv);
    this.o.b(c, "blur", this.gv);
    this.Mb || this.C.b(c, "keydown", this.OB)
  }
};
B.L = function() {
  X0.J.L.call(this);
  this.Pv != n && window.clearTimeout(this.Pv);
  this.o.aa();
  delete this.o;
  this.C.aa();
  this.B.aa();
  K(this.La)
};
B.we = function(a) {
  switch (a.keyCode) {
  case 40:
    if (this.b.o.Da()) return fra(this.b), a.preventDefault(), m;
    if (!this.A) return this.update(m), a.preventDefault(), m;
    break;
  case 38:
    if (this.b.o.Da()) {
      t: for (var b = this.b, c = b.D, d = 0; d < b.A.length; d++) {
        if (c > b.B) c--;
        else
        break;
        if (b.Ai(c)) break t
      }
      a.preventDefault();
      return m
    }
    break;
  case 9:
    if (!this.b.o.Da() || a.shiftKey) this.b.Fe();
    else if (this.update(), this.b.yk() && this.da) return a.preventDefault(), m;
    break;
  case 13:
    if (this.b.o.Da()) {
      if (this.update(), this.b.yk()) return a.preventDefault(), a.stopPropagation(), m
    } else this.b.Fe();
    break;
  case 27:
    if (this.b.o.Da()) return this.b.Fe(), a.preventDefault(), a.stopPropagation(), m;
    break;
  case 229:
    if (!this.jh) return this.jh || (this.o.I(this.Mb, "keyup", this.Cz), this.o.I(this.Mb, "keypress", this.Bz), this.jh = m), m;
    break;
  default:
    this.La && !this.Az && (this.La.stop(), this.La.start())
  }
  return jra(this, a)
};

function jra(a, b) {
  var c = a.A && b.D && -1 != a.D.indexOf(String.fromCharCode(b.D));
  c && a.update();
  return c && a.b.yk() ? (b.preventDefault(), m) : p
}
B.OO = y(p);
B.hv = function(a) {
  ira(this, a.target || n)
};

function ira(a, b) {
  Yd(a.C);
  a.b && V0(a.b);
  b != a.Mb && (a.Mb = b, a.La && (a.La.start(), a.o.I(a.La, "tick", a.eB)), a.Nt = a.Ca(), hy(a.B, a.Mb), a.o.I(a.B, "key", a.cB), a.o.I(a.Mb, "mousedown", a.dB), J && a.o.I(a.Mb, "keypress", a.fB))
}
B.gv = function() {
  hra ? this.Pv = window.setTimeout(E(this.dG, this), 0) : this.dG()
};
B.dG = function() {
  this.Mb && (this.o.b(this.B, "key", this.cB), my(this.B), this.o.b(this.Mb, "keyup", this.OO), this.o.b(this.Mb, "mousedown", this.dB), J && this.o.b(this.Mb, "keypress", this.fB), this.jh && Y0(this), this.Mb = n, this.La && (this.La.stop(), this.o.b(this.La, "tick", this.eB)), this.b && era(this.b))
};
B.eB = function() {
  this.update()
};
B.OB = function(a) {
  this.hv(a)
};
B.cB = function(a) {
  this.H = a.keyCode;
  this.b && this.we(a)
};
B.Bz = function() {
  this.jh && 229 != this.H && Y0(this)
};
B.Cz = function(a) {
  this.jh && (13 == a.keyCode || 77 == a.keyCode && a.ctrlKey) && Y0(this)
};
B.dB = Na();

function Y0(a) {
  a.jh && (a.jh = p, a.o.b(a.Mb, "keypress", a.Bz), a.o.b(a.Mb, "keyup", a.Cz))
}
B.fB = function(a) {
  jra(this, a)
};
B.update = function(a) {
  if (this.Mb && (a || this.Ca() != this.Nt)) {
    if (a || !this.Bu) {
      var b;
      a = AS(this.Mb, m)[0];
      b = this.Ca();
      a = W0(this, b)[gra(this, b, a)];
      b = this.K ? String(a).replace(this.K, t) : a;
      if (this.b && (this.b.b = this.Mb, a = this.b, this.Ca(), a.F != b)) {
        a.F = b;
        b = a.K;
        var c = E(a.xR, a),
            d = {
            fc: a.F,
            Ic: a.fC,
            Rl: m,
            Tj: b.lA,
            UB: 1,
            Hs: Q_,
            Kq: b.W,
            filter: b.O,
            Ol: m,
            Gs: !! b.Ia,
            OG: p
            },
            c = E(b.yR, b, c);
        if (d.fc && d.fc != t) b.X && (b.Cf && (b.Cf.cancel(), b.Cf = n), b.Cf = b.X.pk(d, c));
        else {
          var e = new aqa,
              f = [];
          b.O && (f = b.O(f, d.fc));
          e.Iq(F(c, f, e, n, d))
        }
        V0(a)
      }
    }
    this.Nt =
    this.Ca()
  }
  this.Bu = p
};

function gra(a, b, c) {
  a = W0(a, b);
  if (c == b.length) return a.length - 1;
  for (var d = b = 0, e = 0; d < a.length && e <= c; d++) e += a[d].length, b = d;
  return b
}
function W0(a, b) {
  if (!a.A) return [b];
  for (var c = String(b).split(t), d = [], e = [], f = 0, h = p; f < c.length; f++) a.F && -1 != a.F.indexOf(c[f]) ? (h || (d.push(e.join(t)), e.length = 0), e.push(c[f]), h = !h) : h || -1 == a.D.indexOf(c[f]) ? e.push(c[f]) : (e.push(c[f]), d.push(e.join(t)), e.length = 0);
  d.push(e.join(t));
  return d
};

function Z0(a, b, c, d) {
  P.call(this);
  this.K = a || document.body;
  this.o = wi(this.K);
  this.da = !a;
  this.V = n;
  this.X = t;
  this.A = [];
  this.B = [];
  this.O = this.H = -1;
  this.C = p;
  this.className = "ac-renderer";
  this.Ia = "ac-highlighted";
  this.D = b || n;
  this.ka = d != n ? d : m;
  this.F = p;
  this.ea = !! c
}
H(Z0, P);
B = Z0.prototype;
B.G = w("V");
B.Ug = Oa("Z");
B.xm = function(a, b, c) {
  this.X = b;
  this.A = a;
  this.H = -1;
  this.O = ib();
  this.b = c;
  this.B = [];
  kra(this)
};
B.Fe = function() {
  this.b && PI(this.b, n);
  this.C && (this.C = p, this.b && Ej(this.b, "haspopup", p), U(this.V, p))
};
B.show = function() {
  this.C || (this.C = m, this.b && (Dj(this.b, "combobox"), Ej(this.b, "autocomplete", "list"), Ej(this.b, "haspopup", m)), U(this.V, m))
};
B.Da = w("C");

function lra(a, b) {
  var c = 0 <= b && b < a.A.length ? a.A[b] : k,
      d = 0 <= b && b < a.B.length ? a.B[b] : k;
  a.P({
    type: "rowhilite",
    cZ: d,
    row: c ? c.data : n
  }) && (0 <= a.H && aw(a.B[a.H], ["ac-active", "active"]), a.H = b, d && (bw(d, ["ac-active", "active"]), a.b && PI(a.b, d), QI(d, a.V)))
}
B.Ai = function(a) {
  if (-1 == a) lra(this, -1);
  else
  for (var b = 0; b < this.A.length; b++) if (this.A[b].id == a) {
    lra(this, b);
    break
  }
};

function mra(a) {
  if (!a.V) {
    var b = a.o.U("div", {
      style: "display:none"
    });
    a.V = b;
    bw(b, pb(a.className).split(" "));
    Dj(b, "listbox");
    b.id = Ze(Ye.M());
    a.o.appendChild(a.K, b);
    O(b, "click", a.xC, p, a);
    O(b, "mousedown", a.yC, p, a);
    O(b, "mouseover", a.zC, p, a)
  }
}

function kra(a) {
  mra(a);
  a.wa && (a.V.style.minWidth = a.wa.clientWidth + "px");
  a.B.length = 0;
  a.o.Rj(a.V);
  a.D && a.D.render ? a.D.render(a, a.V, a.A, a.X) : Bb(a.A, function(a) {
    var c = this.X,
        d = this.o.U("div", {
        className: "ac-row",
        id: Ze(Ye.M())
      });
    Dj(d, "option");
    this.D && this.D.KB ? this.D.KB(a, 0, d) : Ti(d, a.data.toString());
    c && this.ka && (this.W = p, $0(this, d, c));
    nv(d, "ac-row");
    this.B.push(d);
    this.o.appendChild(this.V, d)
  }, a);
  0 == a.A.length ? a.Fe() : (a.show(), a.Ua(), Dw(a.V, m))
}
B.Ua = function() {
  if (this.b && this.da) {
    var a = this.Z || this.b,
        b;
    b = this.ea ? 3 : 1;
    qv(a, b, this.V, b ^ 1, n, n, 65)
  }
};
B.WC = w("b");
B.L = function() {
  this.V && ($c(this.V, "click", this.xC, p, this), $c(this.V, "mousedown", this.yC, p, this), $c(this.V, "mouseover", this.zC, p, this), this.o.Uc(this.V), this.V = n, this.C = p);
  K(this.ya);
  this.K = n;
  Z0.J.L.call(this)
};

function $0(a, b, c) {
  if (a.F || !a.W) if (3 == b.nodeType) {
    var d = n;
    Za(c) && 1 < c.length && !a.F && (d = Qb(c, 1));
    c = nra(a, c);
    if (0 != c.length) {
      var e = b.nodeValue,
          f = new RegExp("\\b(?:" + c + ")", "gi");
      c = [];
      for (var h = 0, l = f.exec(e), q = 0; l;) q++, c.push(e.substring(h, l.index)), c.push(e.substring(l.index, f.lastIndex)), h = f.lastIndex, l = f.exec(e);
      c.push(e.substring(h));
      if (1 < c.length) {
        d = a.F ? q : 1;
        for (e = 0; e < d; e++) f = 2 * e, b.nodeValue = c[f], h = a.o.createElement("b"), h.className = a.Ia, a.o.appendChild(h, a.o.createTextNode(c[f + 1])), h = b.parentNode.insertBefore(h, b.nextSibling), b.parentNode.insertBefore(a.o.createTextNode(t), h.nextSibling), b = h.nextSibling;
        b.nodeValue = Qb(c, 2 * d).join(t);
        a.W = m
      } else d && $0(a, b, d)
    }
  } else
  for (b = b.firstChild; b;) d = b.nextSibling, $0(a, b, c), b = d
}
function nra(a, b) {
  var c = t;
  if (!b) return c;
  Za(b) && (b = Cb(b, function(a) {
    return !sv(eH(a))
  }));
  a.F ? Za(b) ? c = Db(b, tb).join("|") : (c = Fv(b), c = tb(c), c = c.replace(/ /g, "|")) : Za(b) ? c = 0 < b.length ? tb(b[0]) : t : /^\W/.test(b) || (c = tb(b));
  return c
}

function ora(a, b) {
  for (; b && b != a.V && !jv(b, "ac-row");) b = b.parentNode;
  return b ? Ab(a.B, b) : -1
}
B.xC = function(a) {
  var b = ora(this, a.target);
  0 <= b && this.P({
    type: "select",
    row: this.A[b].id
  });
  a.stopPropagation()
};
B.yC = function(a) {
  a.stopPropagation();
  a.preventDefault()
};
B.zC = function(a) {
  a = ora(this, a.target);
  0 <= a && !(300 > ib() - this.O) && this.P({
    type: "hilite",
    row: this.A[a].id
  })
};

function a1(a, b, c, d, e, f, h, l, q, r) {
  f = f || new X0(",;", '"');
  h = new Z0(h || n, q || this, r);
  h.da = m;
  h.className = b;
  h.F = m;
  T0.call(this, this, h, f);
  this.Tp = this.H;
  this.Tp.b = this;
  this.X = a;
  this.W = c;
  this.O = d || n;
  this.fC = e || 15;
  this.Z = !! l
}
H(a1, T0);
B = a1.prototype;
B.L = function() {
  this.Tp.aa();
  this.X && this.Z && K(this.X);
  a1.J.L.call(this)
};
B.Tp = n;
B.lA = m;
B.Br = function(a) {
  return !!a.B
};
B.yR = function(a, b, c, d, e) {
  a(e.fc, b)
};
B.xm = function(a, b) {
  a1.J.xm.call(this, a, b)
};
B.Fe = function() {
  a1.J.Fe.call(this)
};
B.KB = function(a, b, c) {
  b = t;
  a = a = {
    Zb: a.data.text,
    XX: !! (a.data.yb & 1)
  };
  b = '<div class="goog-contacts-ui-autocomplete-name-nochat' + (a.XX ? " goog-contacts-ui-autocomplete-new-section" : t) + '">' + ZH(a.Zb) + "</div>";
  c.innerHTML = b
};
B.yk = function() {
  var a = U0(this, this.D);
  return -1 != a && (a = this.A[a], a.o) ? (a.o(), m) : a1.J.yk.call(this)
};
kb("createAutoComplete", function(a, b, c, d, e, f, h, l, q, r, s, u, x, z) {
  d && (b = b + d + "/");
  b = qf(b);
  var A = !! d;
  d = A ? new w0 : new s0;
  s ? (s = u || cra(), x = new h0(s, k, "AIzaSyBuUpn1wi2-0JpM3S-tq2csYx0z2_m_pqc", z ? "devfull2" : "v2", x)) : x = new K0;
  z = new P0(x);
  b = b || new ff("/mail/c/");
  z.Nk(b, "Personal Contacts");
  d.Zi(z, m);
  A && (h = new G0(x, n, h), h.Nk(b, "Domain Contacts"), d.Zi(h, m));
  f && d.pk(wpa, D);
  c = new a1(d, c, k, q, e, l, r, m);
  c.Wu(T(a));
  return c
});

function pra(a, b) {
  this.o = a;
  this.b = {};
  this.B = b
}
pra.prototype.A = function(a) {
  if (a.row) {
    a = a.target.WC();
    var b = this.B.b[a.id].cS;
    b && b(a)
  }
};

function qra(a, b, c, d) {
  this.id = a;
  this.element = b;
  this.Xu = c;
  this.cS = d
}
function b1(a) {
  this.b = {};
  this.o = new pra(a, this)
}
H(b1, uc);
b1.prototype.L = function() {
  for (var a in this.b) this.A(a);
  delete this.o;
  b1.J.L.call(this)
};
b1.prototype.B = function(a, b, c) {
  c = new qra(a, T(a), b, c);
  this.b[a] = c;
  a = this.o;
  if (zo(a.o)) {
    b = c.Xu + t;
    var d = a.b[b];
    if (d) d.Wu(c.element);
    else {
      var e = bra(Jd(a.o, 803)),
          d = c.element;
      c = c.Xu;
      e = new a1(e, "ac-renderer");
      e.Tp.Az = m;
      e.lA = c;
      e.Wu(d);
      O(e, "update", a.A, p, a);
      a.b[b] = e
    }
  }
};
b1.prototype.A = function(a) {
  var b = this.b[a];
  if (b) {
    var c = this.o.b[b.Xu + t];
    c && c.sQ(b.element)
  }
  delete this.b[a]
};
b1.prototype.D = function() {
  var a;
  t: {
    a = this.o;
    for (var b in a.b) if (a.b[b].o.Da()) {
      a = m;
      break t
    }
    a = p
  }
  return a
};
Ou(802, function(a) {
  return new b1(a)
});
