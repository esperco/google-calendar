/*
  https://www.google.com/calendar/static/307387de4562bc5dba423644325c5f55calendarjs_offlinecompiled__en.js
*/

function Ena(a) {
  var b = [],
      c;
  for (c in a.b) {
    var d = a.b[c],
        e;
    for (e in d) b.push(d[e])
  }
  return b
}
function Fna(a) {
  return a ? a.replace(aca, t).replace(bca, t) : t
}
function aZ(a, b) {
  a.o[b] && delete a.o[b]
}
function Gna(a, b, c) {
  a.o[b] = c
}
function bZ(a) {
  this.b = a
}
H(bZ, Xv);
bZ.prototype.o = function(a) {
  var b = ar();
  (new Hna(a, b, Mj.M())).setup()
};

function cZ() {}
function dZ(a, b) {
  if (!a) return n;
  for (var c = 0; c < a.length; c += 2) if (b == a[c]) return a[c + 1];
  return n
}
Ou(811, function(a) {
  return new bZ(a)
});

function Ina(a) {
  this.A = a
}
H(Ina, uc);

function eZ(a) {
  this.b = a
}
H(eZ, uc);

function fZ(a, b) {
  var c = a.b;
  gZ(E(c.fU, c), b)
}
function Jna(a, b) {
  var c = a.b;
  gZ(E(c.eU, c), b)
}
function hZ(a, b) {
  var c = a.b;
  gZ(E(c.dU, c), b)
}
function iZ(a, b) {
  var c = a.b;
  gZ(E(c.PD, c, n), b)
}
eZ.prototype.write = function(a, b) {
  for (var c = [], d = 0; d < a.length; d++) {
    var e = a[d];
    (e.A || !Fc(e.D) || e.B) && c.push(Kna(e))
  }
  0 == c.length ? b() : this.b.write(c, F(Lna, c, b))
};

function Lna(a, b) {
  for (var c = 0; c < a.length; c++) a[c].aa();
  b()
}
eZ.prototype.L = function() {
  eZ.J.L.call(this);
  delete this.b
};

function jZ(a, b, c, d, e, f) {
  this.B = 0;
  this.b = a;
  this.A = b;
  this.C = d || n;
  this.D = c || D;
  this.X = e != n ? e : n;
  this.K = f != n ? f : n
}
H(jZ, uc);

function kZ(a, b, c, d) {
  (new jZ(a, b, c, d)).o()
}
function Mna(a, b, c, d, e) {
  (new jZ(a, c, d, e, n, b)).o()
}
jZ.prototype.o = function() {
  this.B++;
  this.K != n ? this.b.changeVersion(this.X != n ? this.X : this.b.version, this.K, this.A, E(this.F, this), E(this.H, this)) : this.b.transaction(this.A, E(this.F, this), E(this.H, this))
};
jZ.prototype.F = function(a) {
  3 <= this.B ? (this.D(a.message), this.aa()) : pe(this.o, 2E3, this)
};
jZ.prototype.H = function() {
  this.C();
  this.aa()
};
jZ.prototype.L = function() {
  jZ.J.L.call(this);
  delete this.D;
  delete this.C;
  delete this.A;
  delete this.b
};
var lZ;

function mZ() {
  lZ || (lZ = window.openDatabase("calendar", t, "Google Calendar local storage", 1E7));
  return lZ
}
function gZ(a, b) {
  var c = [];
  kZ(mZ(), function(b) {
    a(b, c)
  }, Na(), F(b, c))
}
function nZ(a, b, c, d, e) {
  a.executeSql(b, c, function(a, b) {
    for (var c = b.rows, q = 0; q < c.length; ++q) {
      var r = c.item(q),
          r = e(r);
      d.push(r)
    }
  }, Na())
}

function oZ(a, b, c, d) {
  a = a.D;
  b = ["INSERT INTO ", b, " ("];
  var e = ["VALUES ("],
      f = [],
      h = m,
      l;
  for (l in a) if (!d || d[l]) h || (b.push(", "), e.push(", ")), h = p, b.push(l.toString()), e.push("?"), f.push(a[l]);
  b.push(") ");
  e.push(");");
  h || c.executeSql(b.join(t) + e.join(t), f, Na(), Na())
}

function pZ(a, b, c, d, e, f) {
  var h = a.D;
  b = ["UPDATE ", b, " SET "];
  a = [];
  var l = m,
      q;
  for (q in h) if (!f || f[q]) l || b.push(", "), l = p, b.push(q, " = ?"), a.push(h[q]);
  b.push(" WHERE ");
  f = [];
  for (q = 0; q < c.length; q++) f.push(c[q] + " = ?"), a.push(d[q]);
  b.push(f.join(" AND "));
  l || e.executeSql(b.join(t), a, Na(), Na())
}
function qZ(a, b, c, d) {
  d.executeSql(["DELETE FROM ", a, " WHERE ", b, " = ?;"].join(t), [c], k, F(Nna, "delete error! "))
}
function rZ(a) {
  return Lc(Cc(a))
}
function Nna() {};

function sZ(a) {
  this.A = a || mZ();
  this.b = {}
}
H(sZ, uc);

function Ona(a, b, c) {
  var d = tZ(a),
      e = E(a.D, a, b, c),
      f = a.b[b];
  if (d >= b) uZ(f, e);
  else {
    c = d <= b;
    for (var h = d + 1; h <= b; ++h) if (a.b[h] == n || !a.b[h].pD()) {
      c = p;
      break
    }
    c ? Pna(a, d + 1, b, e) : d != b ? Qna(f, function() {
      uZ(f, e)
    }) : uZ(f, e)
  }
}
function Pna(a, b, c, d) {
  Rna(a.b[b], E(a.B, a, b, c, d))
}
sZ.prototype.B = function(a, b, c) {
  a = tZ(this);
  a == b ? c() : Pna(this, a + 1, b, c)
};
sZ.prototype.D = function(a, b) {
  this.o = new eZ(this.b[tZ(this)]);
  b(this)
};

function tZ(a) {
  a = a.A.version;
  return a == t ? 0 : parseInt(a, 10)
}
sZ.prototype.L = function() {
  sZ.J.L.call(this);
  delete this.A;
  for (var a in this.b) this.b[a].aa();
  delete this.b;
  this.o && this.o.aa();
  delete this.o
};

function vZ(a) {
  this.b = {};
  this.D = {};
  this.A = a || p;
  this.o = !this.A
}
H(vZ, uc);
vZ.prototype.B = p;

function Sna(a, b) {
  var c = Tna(a, b);
  return c == n ? n : c
}
function wZ(a, b) {
  var c = Tna(a, b);
  return c == n ? n : c
}
function Tna(a, b) {
  var c = a.b[b];
  return c != n ? c : n
}
vZ.prototype.setProperty = function(a, b) {
  this.b[a] != b && (this.b[a] = b, this.o || (this.D[a] = b));
  return this
};

function Kna(a) {
  function b() {}
  b.prototype = a.constructor.prototype;
  var c = new b;
  Una(a, c);
  return c
}
function Una(a, b) {
  b.b = Hc(a.b);
  b.D = a.D;
  a.D = {};
  b.A = a.A;
  b.B = a.B;
  a.A = p
}
vZ.prototype.L = function() {
  vZ.J.L.call(this);
  delete this.b;
  delete this.D
};

function xZ(a, b) {
  vZ.call(this, b);
  this.setProperty("eid", a)
}
H(xZ, vZ);
var Vna = {
  vo: "eid",
  lY: "src",
  n0: "response",
  m0: "comment",
  M_: "guests",
  $Z: "edit_scope",
  E0: "timestamp"
};

function Wna(a, b, c, d, e, f, h) {
  a = h || new xZ(a, m);
  a.setProperty("src", b);
  a.setProperty("response", c);
  a.setProperty("edit_scope", d);
  e && e && a.setProperty("guests", e.toString());
  f && a.setProperty("comment", f);
  b = ib().toString();
  a.setProperty("timestamp", b);
  a.o = p;
  return a
}
xZ.prototype.getId = function() {
  return this.b.eid
};
xZ.prototype.Aa = function() {
  return this.b.src
};

function Xna(a) {
  if (a = wZ(a, "guests")) return parseInt(a, 10)
};

function yZ(a, b) {
  vZ.call(this, b);
  this.setProperty("id", a)
}
H(yZ, vZ);
var Yna = {
  vo: "id",
  K_: "name",
  fG: "type",
  B_: "lastSync"
};

function Zna(a, b) {
  var c = b || new yZ(a.id, m);
  c.setProperty("name", a.name);
  c.setProperty("type", a.type);
  var d = ib().toString();
  c.setProperty("lastSync", d);
  c.o = p;
  return c
}
yZ.prototype.getId = function() {
  return this.b.id
};
yZ.prototype.getName = function() {
  return this.b.name
};
yZ.prototype.getType = function() {
  return this.b.type
};

function zZ(a, b) {
  vZ.call(this, b);
  this.setProperty("id", a)
}
H(zZ, vZ);
var $na = {
  vo: "id",
  hZ: "al",
  e0: "publicAl",
  fG: "type",
  jY: "cn",
  F0: "tz",
  kY: "location",
  VZ: "details",
  u_: "htmlUrl",
  s0: "secretForPrivUrl",
  iZ: "acl",
  y_: "newCalendar",
  O_: "origin",
  v_: "importStatusString",
  m_: "feeduserid",
  FZ: "country",
  nZ: "autoAccept",
  XZ: "domainId",
  WZ: "domainHostname",
  I0: "translatedTz",
  E_: "maxAcl",
  k0: "requiredAcl",
  pZ: "baseUrlForAspFeed",
  N_: "orgTitle",
  z_: "virtual_",
  A0: "supportsFeeds",
  P_: "originalName",
  oZ: "availableTime_",
  M0: "useAvailableTime",
  H0: "tokenForSelfSchedulerUrl"
};

function aoa(a, b) {
  var c = b || new zZ(a.id, m);
  c.setProperty("al", a.uc);
  c.setProperty("publicAl", a.B);
  c.setProperty("type", a.type);
  c.setProperty("cn", a.Pb);
  c.setProperty("tz", a.tz);
  c.setProperty("location", a.location);
  c.setProperty("details", a.nc);
  c.setProperty("htmlUrl", a.K);
  c.setProperty("secretForPrivUrl", a.da);
  var d = aJ(a.o);
  c.setProperty("acl", d);
  c.setProperty("newCalendar", a.b ? 1 : 0);
  c.setProperty("origin", a.origin);
  c.setProperty("importStatusString", a.Ja);
  c.setProperty("feeduserid", a.C);
  c.setProperty("country", a.Ha);
  c.setProperty("autoAccept", a.wa);
  c.setProperty("domainId", a.Vc);
  c.setProperty("domainHostname", a.Ia);
  c.setProperty("translatedTz", a.D);
  d = aJ(a.A);
  c.setProperty("maxAcl", d);
  d = aJ(a.F);
  c.setProperty("requiredAcl", d);
  c.setProperty("baseUrlForAspFeed", a.H);
  c.setProperty("orgTitle", a.X);
  c.setProperty("virtual_", a.O ? 1 : 0);
  c.setProperty("supportsFeeds", a.ea ? 1 : 0);
  c.setProperty("originalName", a.W);
  c.setProperty("availableTime_", a.ya);
  c.setProperty("useAvailableTime", a.ka ? 1 : 0);
  c.setProperty("tokenForSelfSchedulerUrl", a.Z);
  c.o = p;
  return c
}

function boa(a) {
  var b = a.b.al,
      c = a.b.publicAl,
      d = a.getType(),
      e = a.tc(),
      f = a.b.tz,
      h;
  h = (h = wZ(a, "location")) ? h : t;
  var l = wZ(a, "details"),
      q = wZ(a, "htmlUrl"),
      r = wZ(a, "secretForPrivUrl"),
      s = uG(a.b.acl),
      u = 0 != a.b.newCalendar,
      x = a.getOrigin(),
      z = a.getId(),
      A = a.b.importStatusString,
      G = a.b.feeduserid,
      M = a.getCountry(),
      N = a.b.autoAccept,
      X;
  X = (X = wZ(a, "domainId")) ? X : t;
  var $;
  $ = ($ = wZ(a, "domainHostname")) ? $ : t;
  var ca = a.b.translatedTz,
      ua = uG(a.b.maxAcl),
      pa = uG(a.b.requiredAcl),
      ab = wZ(a, "orgTitle"),
      Ra = wZ(a, "tokenForSelfSchedulerUrl"),
      Gb =
      wZ(a, "availableTime_"),
      b = new gi(b, c, d, e, f, h, l, q, r, s, u, x, z, A, G, M, N, X, $, ca, ua, pa, wZ(a, "baseUrlForAspFeed"), ab ? ab : t, 0 != a.b.virtual_, 0 != a.b.supportsFeeds, Gb ? Gb : t, 0 != a.b.useAvailableTime, Ra ? Ra : t);
  b.W = a.b.originalName;
  return b
}
B = zZ.prototype;
B.getId = function() {
  return this.b.id
};
B.getType = function() {
  return this.b.type
};
B.tc = function() {
  return this.b.cn
};
B.getOrigin = function() {
  var a = wZ(this, "origin");
  return a ? a : t
};
B.getCountry = function() {
  var a = wZ(this, "country");
  return a ? a : t
};

function coa(a) {
  return 60 * (60 * (24 * ((12 * (a.year - 1970) + a.month - 1 << 5) + a.Y) + a.hour) + a.minute) + a.second
}
function doa(a) {
  var b = [],
      c;
  for (c in a)"goo.richContent" != c && b.push(c, a[c]);
  return b.join(":")
}
function eoa(a, b) {
  var c = new fk;
  c.second = a % 60;
  a = a / 60 | 0;
  c.minute = a % 60;
  a = a / 60 | 0;
  c.hour = a % 24;
  a = a / 24 | 0;
  c.Y = a & 31;
  a >>= 5;
  c.month = a % 12 + 1;
  c.year = (a / 12 | 0) + 1970;
  return b ? c.va() : c.Ea()
}
function foa(a) {
  var b = {};
  a = a.split(":");
  for (var c = 0; c < a.length; c += 2) b[a[c]] = a[c + 1];
  return b
};

function AZ(a) {
  vZ.call(this, a)
}
H(AZ, vZ);
var goa = {
  vo: "eid",
  TEXT: "text",
  x0: "startInt",
  c_: "endInt",
  S_: "owner",
  lY: "src",
  GZ: "creator",
  n_: "flags",
  f_: "eventType",
  g0: "recurEid",
  kY: "location",
  mZ: "num_att",
  lZ: "att",
  t0: "sharedprops",
  d0: "privprops",
  i0: "reminderOverrides",
  mY: "webContent",
  RZ: "description",
  yZ: "crm",
  c0: "privacy"
};
B = AZ.prototype;
B.getTitle = function() {
  return this.b.text
};
B.setTitle = function(a) {
  this.setProperty("text", a)
};
B.Db = function() {
  return !!(this.b.flags & 16)
};
B.Fa = function() {
  return eoa(this.b.startInt, this.Db())
};
B.Za = function() {
  return eoa(this.b.endInt, this.Db())
};
B.Aa = function() {
  return this.b.src
};
B.Xc = function() {
  var a = wZ(this, "webContent");
  return a ? uG(a) : n
};

function BZ(a, b) {
  vZ.call(this, b);
  this.setProperty("eid", a)
}
H(BZ, AZ);

function hoa(a, b) {
  var c = b || new BZ(a.getId(), m);
  c.setTitle(a.getTitle());
  var d = coa(a.Fa().Ea());
  c.setProperty("startInt", d);
  d = coa(a.Za().Ea());
  c.setProperty("endInt", d);
  c.setProperty("owner", a.mc);
  c.setProperty("src", a.Aa());
  c.setProperty("creator", a.Bc);
  d = a.B;
  d = d & -17 | (a.Db() && 16);
  c.setProperty("flags", d);
  c.setProperty("eventType", a.hi);
  c.setProperty("recurEid", a.ei);
  c.setProperty("location", a.Tc);
  c.setProperty("num_att", a.o);
  if (!a.A) {
    var e;
    if (a.D) {
      var d = a.D,
          f = [];
      for (e in d) {
        var h = [];
        h.push(e);
        h.push(String(d[e].eb));
        h.push(String(d[e].pi ? "1" : t));
        h.push(Fna(d[e].Je));
        h.push(d[e].pf || t);
        d[e].Xg && h.push(Fna(d[e].Xg));
        f.push(h.join("\u0002"))
      }
      e = f.join("\u0001")
    } else e = t;
    a.A = e
  }
  c.setProperty("att", a.A);
  e = doa(a.b);
  c.setProperty("sharedprops", e);
  e = doa(a.C);
  c.setProperty("privprops", e);
  e = a.F;
  c.setProperty("reminderOverrides", e ? e.join(",") : n);
  e = a.b;
  e = "goo.richContent" in e ? aJ(e["goo.richContent"]) : t;
  c.setProperty("webContent", e);
  c.setProperty("description", C(a.O) ? a.Sj() : n);
  e = a.Hd;
  c.setProperty("crm", C(e) ? e : n);
  e = a.H.b;
  c.setProperty("privacy", C(e) ? e : n);
  c.o = p;
  return c
}
BZ.prototype.getId = function() {
  return this.b.eid
};

function CZ(a, b, c, d, e) {
  vZ.call(this, e);
  this.setProperty("calendarId", a);
  this.setProperty("startRdd", b);
  this.setProperty("endRdd", c);
  this.setProperty("freshness", d)
}
H(CZ, vZ);
var ioa = {
  vo: "calendarId",
  y0: "startRdd",
  d_: "endRdd",
  p_: "freshness"
};

function joa(a) {
  a = new CZ(a.Ra, a.o, a.b, a.Kd, m);
  a.o = p;
  return a
}
function koa(a) {
  return new et(a.getId(), a.b.startRdd, a.b.endRdd, a.fh())
}
CZ.prototype.getId = function() {
  return this.b.calendarId
};
CZ.prototype.fh = function() {
  return this.b.freshness
};

function DZ(a, b) {
  vZ.call(this, b);
  this.setProperty("key", a)
}
H(DZ, vZ);
var loa = {
  A_: "key",
  N0: "value"
},
    EZ = n;

function FZ(a) {
  var b = a.getKey();
  a = a.Ca();
  EZ || (EZ = ["basics_offline_optin", "basics_current_user", "basics_locale", "basics_timezones", "basics_full_sync"]);
  return Jb(EZ, b) ? "BASICS" : "subscription" == a ? "SUBSCRIPTIONS" : "USER_PREFS"
}
function GZ(a) {
  var b = a[0];
  a = a[1];
  Ha == typeof a && (a instanceof Boolean || a instanceof Number) && (a = a.valueOf());
  b = new DZ(b, m);
  b.$a(a);
  b.o = p;
  return b
}
DZ.prototype.getKey = function() {
  return this.b.key
};
DZ.prototype.Ca = function() {
  return this.b.value
};
DZ.prototype.$a = function(a) {
  this.setProperty("value", a)
};

function HZ(a, b) {
  vZ.call(this, b);
  this.setProperty("uid", a)
}
H(HZ, vZ);
var moa = {
  vo: "uid",
  a_: "email",
  jY: "cn",
  fG: "type"
};

function noa(a, b) {
  var c = b || new HZ(a.uid, m),
      d = a.Ma();
  c.setProperty("email", d);
  c.setProperty("cn", a.tc());
  c.setProperty("type", a.Bb());
  c.o = p;
  return c
}
HZ.prototype.getId = function() {
  return this.b.uid
};
HZ.prototype.Ma = function() {
  return this.b.email
};
HZ.prototype.tc = function() {
  return this.b.cn
};
HZ.prototype.getType = function() {
  return this.b.type
};

function IZ(a, b) {
  vZ.call(this, b);
  this.setProperty("label", a)
}
H(IZ, vZ);
var ooa = {
  rj: "label",
  D0: "time"
};

function poa(a, b) {
  var c = new IZ(a, m);
  qoa(c, b);
  c.o = p;
  return c
}
IZ.prototype.he = function() {
  return this.b.label
};

function qoa(a, b) {
  Ya(b) == ia ? a.setProperty("time", b.join("#")) : a.setProperty("time", b)
}
IZ.prototype.getTime = function() {
  var a = wZ(this, "time");
  if (a) {
    for (var b = [], a = a.split("#"), c = 0; c < a.length; c++) b.push(parseInt(a[c], 10));
    return b
  }
  return n
};

function JZ(a, b, c) {
  this.A = a;
  this.b = c || mZ();
  this.o = b || D
}
H(JZ, Ina);

function Rna(a, b) {
  Mna(a.b, a.A.toString(), function(b) {
    a.JB(b)
  }, a.o, b)
}
function uZ(a, b) {
  Mna(a.b, a.A.toString(), function(b) {
    roa(a, b)
  }, a.o, b)
}

function soa(a, b, c) {
  kZ(a.b, function(a) {
    a.executeSql("DELETE FROM DETAILS WHERE id = ?;", [b]);
    a.executeSql("DELETE FROM PRINCIPALS WHERE uid = ?;", [b]);
    a.executeSql("DELETE FROM EVENTS WHERE src = ?;", [b]);
    a.executeSql("DELETE FROM MANIFESTS WHERE calendarId = ?;", [b]);
    a.executeSql("DELETE FROM PENDING_RESPONSES WHERE src = ?;", [b])
  }, a.o, c)
}

function toa(a, b, c) {
  kZ(a.b, function(a) {
    a.executeSql("DELETE FROM EVENTS WHERE src = ?;", [b]);
    a.executeSql("DELETE FROM MANIFESTS WHERE calendarId = ?;", [b]);
    a.executeSql("DELETE FROM PENDING_RESPONSES WHERE src = ?;", [b])
  }, a.o, c)
}
function uoa(a, b, c) {
  kZ(a.b, function(a) {
    a.executeSql("DELETE FROM EVENTS WHERE eid = ?;", [b])
  }, a.o, c)
}
function voa(a, b) {
  kZ(a.b, function(a) {
    a.executeSql("DELETE FROM EVENTS;", []);
    a.executeSql("DELETE FROM MANIFESTS;", [])
  }, a.o, b)
}

function woa(a, b) {
  kZ(a.b, function(b) {
    roa(a, b)
  }, a.o, b)
}
function Qna(a, b) {
  kZ(a.b, function(b) {
    var d;
    a.B || (a.B = "CAL_LIST DETAILS EVENTS MANIFESTS PRINCIPALS USER_PREFS BASICS SUBSCRIPTIONS PENDING_RESPONSES PERF_LOGS".split(" "));
    d = a.B;
    for (var e = 0; e < d.length; e++) b.executeSql("DROP TABLE IF EXISTS " + d[e] + ";")
  }, a.o, b)
}
B = JZ.prototype;
B.write = function(a, b) {
  var c = this;
  kZ(this.b, function(b) {
    for (var e = 0; e < a.length; e++) {
      var f = a[e];
      if (f.B) if (f instanceof yZ) {
        var h = b;
        qZ("CAL_LIST", "id", f.getId(), h)
      } else if (f instanceof zZ) h = b, qZ("DETAILS", "id", f.getId(), h);
      else if (f instanceof BZ) h = b, qZ("EVENTS", "eid", f.getId(), h);
      else if (f instanceof HZ) h = b, qZ("PRINCIPALS", "uid", f.getId(), h);
      else if (f instanceof DZ) {
        var h = b,
            l = FZ(f);
        qZ(l, "key", f.getKey(), h)
      } else f instanceof CZ ? (h = b, qZ("MANIFESTS", "calendarId", f.getId(), h)) : f instanceof xZ ? (h = b, qZ("PENDING_RESPONSES", "eid", f.getId(), h)) : f instanceof IZ ? qZ("PERF_LOGS", "label", f.he(), b) : g(Error("Unknown record type"));
      else f instanceof yZ ? f.A ? oZ(f, "CAL_LIST", b, rZ(Yna)) : (h = b, pZ(f, "CAL_LIST", ["id"], [f.getId()], h, rZ(Yna))) : f instanceof zZ ? f.A ? oZ(f, "DETAILS", b, rZ($na)) : (h = b, pZ(f, "DETAILS", ["id"], [f.getId()], h, rZ($na))) : f instanceof BZ ? f.A ? oZ(f, "EVENTS", b, xoa(c)) : (h = c, l = b, pZ(f, "EVENTS", ["eid"], [f.getId()], l, xoa(h))) : f instanceof HZ ? f.A ? oZ(f, "PRINCIPALS", b, rZ(moa)) : (h = b, pZ(f, "PRINCIPALS", ["uid"], [f.getId()], h, rZ(moa))) : f instanceof DZ ? f.A ? (h = b, l = FZ(f), oZ(f, l, h, rZ(loa))) : (h = b, l = FZ(f), pZ(f, l, ["key"], [f.getKey()], h, rZ(loa))) : f instanceof CZ ? f.A ? oZ(f, "MANIFESTS", b, rZ(ioa)) : (h = b, pZ(f, "MANIFESTS", ["calendarId", "startRdd", "endRdd"], [f.getId(), f.b.startRdd, f.b.endRdd], h, rZ(ioa))) : f instanceof xZ ? f.A ? oZ(f, "PENDING_RESPONSES", b, rZ(Vna)) : (h = b, pZ(f, "PENDING_RESPONSES", ["eid", "src"], [f.getId(), f.Aa()], h, rZ(Vna))) : f instanceof IZ ? f.A ? oZ(f, "PERF_LOGS", b, rZ(ooa)) : g(Error("Unsupported operation")) : g(Error("Unknown record type"))
    }
  }, this.o, b)
};
B.eU = function(a, b) {
  nZ(a, "SELECT * FROM CAL_LIST;", [], b, E(this.tY, this))
};
B.dU = function(a, b) {
  nZ(a, "SELECT * FROM DETAILS;", [], b, E(this.sY, this))
};
B.PD = function(a, b, c) {
  var d;
  a ? (d = "SELECT * FROM EVENTS WHERE src = ?;", a = [a]) : (d = "SELECT * FROM EVENTS;", a = []);
  nZ(b, d, a, c, E(this.uY, this))
};

function xoa(a) {
  var b = rZ(goa);
  4 > a.A && delete b.eventType;
  6 > a.A && (delete b.crm, delete b.privacy);
  return b
}
function KZ(a, b, c) {
  gZ(E(a.zY, a, b), c)
}
B.zY = function(a, b, c) {
  var d;
  a ? (d = "SELECT * FROM MANIFESTS WHERE calendarId = ?;", a = [a]) : (d = "SELECT * FROM MANIFESTS;", a = []);
  nZ(b, d, a, c, E(this.vY, this))
};
B.fU = function(a, b) {
  nZ(a, "SELECT * FROM PRINCIPALS;", [], b, E(this.xY, this))
};
B.ny = function(a, b) {
  nZ(a, "SELECT * FROM USER_PREFS;", [], b, E(this.yx, this))
};
B.Xo = function(a, b, c) {
  var d = "SELECT * FROM BASICS";
  a ? (d += " WHERE key = ?;", a = [a]) : (d += ";", a = []);
  nZ(b, d, a, c, E(this.yx, this))
};
B.ky = function(a, b) {
  nZ(a, "SELECT * FROM SUBSCRIPTIONS;", [], b, E(this.yx, this))
};
B.Ft = function(a, b, c, d) {
  var e = ["SELECT * FROM ", "PENDING_RESPONSES"],
      f = [];
  (a || b) && e.push(" WHERE ");
  a && (e.push("eid", " = ?"), f.push(a));
  b && (a && e.push(" AND "), e.push("src", " = ?"), f.push(b));
  e.push(";");
  nZ(c, e.join(t), f, d, E(this.jG, this))
};
B.iy = function(a, b) {
  nZ(a, "SELECT * FROM PERF_LOGS;", [], b, E(this.wY, this))
};

function LZ(a, b, c) {
  JZ.call(this, a || 1, b, c)
}
H(LZ, JZ);
B = LZ.prototype;
B.pD = y(p);

function roa(a, b) {
  b.executeSql("CREATE TABLE IF NOT EXISTS CAL_LIST(id TEXT UNIQUE PRIMARY KEY NOT NULL, name TEXT, type INTEGER(2), lastSync TEXT);");
  b.executeSql("CREATE TABLE IF NOT EXISTS DETAILS(id TEXT UNIQUE PRIMARY KEY NOT NULL, al INTEGER(1) NOT NULL, publicAl INTEGER(1) NOT NULL, type INTEGER(1) NOT NULL, cn TEXT NOT NULL, tz TEXT, location TEXT, details TEXT, htmlUrl TEXT, secretForPrivUrl TEXT, acl TEXT, newCalendar INTEGER(1), origin TEXT, importStatusString TEXT, feeduserid TEXT, country TEXT, autoAccept TEXT, domainId TEXT, domainHostname TEXT, translatedTz TEXT, maxAcl TEXT, requiredAcl TEXT, baseUrlForAspFeed TEXT, orgTitle TEXT, virtual_ INTEGER(1), supportsFeeds INTEGER(1), originalName TEXT, availableTime_ TEXT, useAvailableTime INTEGER(1), tokenForSelfSchedulerUrl TEXT);");
  yoa(b);
  b.executeSql("CREATE TABLE IF NOT EXISTS MANIFESTS(calendarId TEXT NOT NULL, startRdd INTEGER(3) NOT NULL, endRdd INTEGER(3) NOT NULL, freshness INTEGER(8) NOT NULL);");
  b.executeSql("CREATE TABLE IF NOT EXISTS PRINCIPALS(uid TEXT UNIQUE PRIMARY KEY NOT NULL, email TEXT NOT NULL, cn TEXT NOT NULL, type INTEGER(1) NOT NULL);");
  b.executeSql("CREATE TABLE IF NOT EXISTS BASICS(key TEXT UNIQUE PRIMARY KEY NOT NULL, value TEXT NOT NULL);");
  b.executeSql("CREATE TABLE IF NOT EXISTS USER_PREFS(key TEXT UNIQUE PRIMARY KEY NOT NULL, value TEXT NOT NULL);");
  a.wx(b);
  a.cG(b);
  b.executeSql("CREATE TABLE IF NOT EXISTS PERF_LOGS(label TEXT NOT NULL, time TEXT);")
}
B.wx = function(a) {
  a.executeSql("CREATE TABLE IF NOT EXISTS PENDING_RESPONSES(eid TEXT UNIQUE PRIMARY KEY NOT NULL, src TEXT, response TEXT NOT NULL, edit_scope TEXT NOT NULL, timestamp TEXT NOT NULL);")
};
B.cG = Na();

function yoa(a) {
  a.executeSql("CREATE TABLE IF NOT EXISTS EVENTS(eid TEXT UNIQUE PRIMARY KEY NOT NULL, text TEXT, startInt INTEGER(6), endInt INTEGER(6), owner TEXT, src TEXT, creator TEXT, flags INTEGER(4), eventType INTEGER(4), recurEid TEXT, location TEXT, num_att INTEGER(4), att TEXT, sharedprops TEXT, privprops TEXT, reminderOverrides TEXT, webContent TEXT, description TEXT, crm INTEGER(4), privacy INTEGER(4));")
}
B.tY = function(a) {
  var b = new yZ(a.id, p);
  b.setProperty("name", a.name);
  b.setProperty("type", a.type);
  b.setProperty("lastSync", a.lastSync);
  b.o = p;
  return b
};
B.sY = function(a) {
  var b = new zZ(a.id, p);
  b.setProperty("al", a.al);
  b.setProperty("publicAl", a.publicAl);
  b.setProperty("type", a.type);
  b.setProperty("cn", a.cn);
  b.setProperty("tz", a.tz);
  b.setProperty("location", a.location);
  b.setProperty("details", a.details);
  b.setProperty("htmlUrl", a.htmlUrl);
  b.setProperty("secretForPrivUrl", a.secretForPrivUrl);
  b.setProperty("acl", a.acl);
  b.setProperty("newCalendar", a.newCalendar);
  b.setProperty("origin", a.origin);
  b.setProperty("importStatusString", a.importStatusString);
  b.setProperty("feeduserid", a.feeduserid);
  b.setProperty("country", a.country);
  b.setProperty("autoAccept", a.autoAccept);
  b.setProperty("domainId", a.domainId);
  b.setProperty("domainHostname", a.domainHostname);
  b.setProperty("translatedTz", a.translatedTz);
  b.setProperty("maxAcl", a.maxAcl);
  b.setProperty("requiredAcl", a.requiredAcl);
  b.setProperty("baseUrlForAspFeed", a.baseUrlForAspFeed);
  b.setProperty("orgTitle", a.orgTitle);
  b.setProperty("virtual_", a.virtual_);
  b.setProperty("supportsFeeds", a.supportsFeeds);
  b.setProperty("originalName", a.originalName);
  b.setProperty("availableTime_", a.availableTime_);
  b.setProperty("useAvailableTime", a.useAvailableTime);
  b.setProperty("tokenForSelfSchedulerUrl", a.tokenForSelfSchedulerUrl);
  b.o = p;
  return b
};
B.uY = function(a) {
  var b = new BZ(a.eid, p);
  this.Fw(b, a);
  b.o = p;
  return b
};
B.xY = function(a) {
  var b = new HZ(a.uid, p);
  b.setProperty("email", a.email);
  b.setProperty("cn", a.cn);
  b.setProperty("type", a.type);
  b.o = p;
  return b
};
B.yx = function(a) {
  var b = new DZ(a.key, p);
  b.$a(a.value);
  b.o = p;
  return b
};
B.vY = function(a) {
  a = new CZ(a.calendarId, a.startRdd, a.endRdd, a.freshness, p);
  a.o = p;
  return a
};
B.jG = function(a) {
  var b = new xZ(a.eid, p);
  b.setProperty("src", a.src);
  b.setProperty("response", a.response);
  b.setProperty("edit_scope", a.edit_scope);
  b.setProperty("timestamp", a.timestamp);
  b.o = p;
  return b
};
B.wY = function(a) {
  var b = new IZ(a.label, p);
  qoa(b, a.time);
  b.o = p;
  return b
};
B.Fw = function(a, b) {
  a.setTitle(b.text);
  a.setProperty("startInt", b.startInt);
  a.setProperty("endInt", b.endInt);
  a.setProperty("owner", b.owner);
  a.setProperty("src", b.src);
  a.setProperty("creator", b.creator);
  a.setProperty("flags", b.flags);
  a.setProperty("recurEid", b.recurEid);
  a.setProperty("location", b.location);
  a.setProperty("num_att", b.num_att);
  a.setProperty("att", b.att);
  a.setProperty("sharedprops", b.sharedprops);
  a.setProperty("privprops", b.privprops);
  a.setProperty("reminderOverrides", b.reminderOverrides);
  a.setProperty("webContent", b.webContent);
  a.setProperty("description", b.description);
  var c = b.crm;
  a.setProperty("crm", C(c) ? c : n);
  c = b.privacy;
  a.setProperty("privacy", C(c) ? c : n)
};

function MZ(a, b, c) {
  LZ.call(this, a || 2, b, c)
}
H(MZ, LZ);
B = MZ.prototype;
B.pD = y(m);
B.JB = function(a) {
  var b = this;
  a.executeSql("SELECT * FROM PENDING_RESPONSES;", [], function(a, d) {
    zoa(b, a, E(b.QY, b, a, d))
  }, function(a) {
    zoa(b, a)
  })
};

function zoa(a, b, c) {
  b.executeSql("DROP TABLE PENDING_RESPONSES;", [], function(b) {
    a.wx(b, c)
  }, Na())
}
B.QY = function(a, b) {
  for (var c = b.rows, d = 0; d < c.length; d++) {
    var e = c.item(d);
    a.executeSql("INSERT INTO PENDING_RESPONSES(eid, src, response, edit_scope, timestamp) VALUES (?, ?, ?, ?, ?);", [e.eid, e.src, e.response, e.edit_scope, e.timestamp], Na(), Na())
  }
};
B.wx = function(a, b) {
  a.executeSql("CREATE TABLE IF NOT EXISTS PENDING_RESPONSES(eid TEXT UNIQUE PRIMARY KEY NOT NULL, src TEXT, response TEXT NOT NULL, edit_scope TEXT NOT NULL, guests TEXT, comment TEXT, timestamp TEXT NOT NULL);", [], function() {
    b && b()
  }, Na())
};
B.jG = function(a) {
  var b = new xZ(a.eid, p);
  b.setProperty("src", a.src);
  b.setProperty("response", a.response);
  b.setProperty("edit_scope", a.edit_scope);
  var c = a.guests;
  c && b.setProperty("guests", c.toString());
  b.setProperty("comment", a.comment);
  b.setProperty("timestamp", a.timestamp);
  b.o = p;
  return b
};

function NZ(a, b, c) {
  MZ.call(this, a || 3, b, c)
}
H(NZ, MZ);
NZ.prototype.JB = function(a) {
  a.executeSql("DROP TABLE EVENTS;", [], function(a) {
    yoa(a)
  }, Na())
};

function OZ(a, b, c) {
  NZ.call(this, a || 4, b, c)
}
H(OZ, NZ);
OZ.prototype.Fw = function(a, b) {
  OZ.J.Fw.call(this, a, b);
  a.setProperty("eventType", b.eventType)
};

function PZ(a, b, c) {
  OZ.call(this, a || 5, b, c)
}
H(PZ, OZ);
PZ.prototype.cG = function(a) {
  a.executeSql("CREATE TABLE IF NOT EXISTS SUBSCRIPTIONS(key TEXT UNIQUE PRIMARY KEY NOT NULL, value TEXT NOT NULL);")
};

function QZ(a, b, c, d, e, f) {
  this.F = a;
  this.A = b;
  this.B = c;
  this.H = d;
  this.X = f;
  this.C = e
}
H(QZ, uc);
QZ.prototype.o = function() {
  if (this.X.isEnabled() && this.C.Pa()) {
    var a = {},
        b = this.F;
    this.A.forEach(function(c) {
      var d = c.Aa();
      !C(c.O) && Rr(b, d) && (a[d] = 1);
      return m
    });
    Fc(a) || Aoa(this, a)
  }
};

function Aoa(a, b) {
  var c = HG(a.A, b);
  if (c.length) {
    for (var d = [], e = 0; e < c.length; e++) d.push(c[e].clone());
    c = ["emf", d.join("\n"), "ctz", a.H.$f(), "hl", "en", "ldet", "descrip", "ldet", "op-pub", "ldet", "crm", "ldet", "accessLevel", "ldet", "permBits"];
    d = Af(a.B);
    a.b && d.abort(a.b);
    a.b = d.send("loadx", c, 20, E(a.K, a), E(a.D, a))
  }
}
QZ.prototype.K = function(a) {
  delete this.b;
  for (var b = a.a, c = this.A, d = bg.M(), e = 0; e < b.length; e++) {
    var f = b[e],
        h = f.eid,
        l = ru(c, h),
        q = l.H;
    if (l) {
      var r = p,
          s;
      for (s in f) {
        var u = f[s];
        switch (s) {
        case "descrip":
          u !== l.Sj() && (l.O = u, r = m);
          break;
        case "op-pub":
          u = Iu(d, u);
          u !== q.b && (q.b = u, r = m);
          break;
        case "crm":
          u = "UNKNOWN" == u ? 0 : d.o.get(u);
          u !== l.Hd && (l.Hd = u, r = m);
          break;
        case "recur":
          u != q.D && (q.D = u || t, r = m);
          break;
        case "rstart":
          u = mk(u);
          u != q.A && (q.A = u, r = m);
          break;
        case "accessLevel":
          u != q.o && (q.o = u, r = m);
          break;
        case "permBits":
          u != q.B && (q.B =
          u, r = m)
        }
      }
      r && hq(c, h)
    }
  }(a = a.bp) && a.length && this.D()
};
QZ.prototype.D = function() {
  delete this.b
};
QZ.prototype.L = function() {
  this.b && (Af(this.B).abort(this.b), delete this.b)
};

function RZ() {
  P.call(this);
  this.b = p
}
H(RZ, P);
Xa(RZ);

function Boa(a) {
  L.call(this, "eb");
  this.o = a
}
H(Boa, L);
RZ.prototype.enable = function(a) {
  this.b = m;
  this.P(new Boa(a))
};
RZ.prototype.disable = function() {
  this.b = p;
  this.P("fb")
};
RZ.prototype.isEnabled = w("b");

function SZ() {
  P.call(this)
}
H(SZ, P);
B = SZ.prototype;
B.ho = 0;
B.ef = 0;
B.Uf = 100;
B.Tf = 0;
B.Mg = p;
B.$a = function(a) {
  a = TZ(this, a);
  this.ho != a && (this.ho = a + this.Tf > this.Uf ? this.Uf - this.Tf : a < this.ef ? this.ef : a, this.Mg || this.P(v))
};
B.Ca = function() {
  return TZ(this, this.ho)
};

function Coa(a, b) {
  if (a.ef != b) {
    var c = a.Mg;
    a.Mg = m;
    a.ef = b;
    b + a.Tf > a.Uf && (a.Tf = a.Uf - a.ef);
    b > a.ho && a.$a(b);
    b > a.Uf && (a.Tf = 0, Doa(a, b), a.$a(b));
    a.Mg = c;
    a.Mg || a.P(v)
  }
}
function UZ(a) {
  return TZ(a, a.ef)
}

function Doa(a, b) {
  b = TZ(a, b);
  if (a.Uf != b) {
    var c = a.Mg;
    a.Mg = m;
    a.Uf = b;
    b < a.ho + a.Tf && a.$a(b - a.Tf);
    b < a.ef && (a.Tf = 0, Coa(a, b), a.$a(a.Uf));
    b < a.ef + a.Tf && (a.Tf = a.Uf - a.ef);
    a.Mg = c;
    a.Mg || a.P(v)
  }
}
function VZ(a) {
  return TZ(a, a.Uf)
}
function TZ(a, b) {
  return a.ef + 1 * Math.round((b - a.ef) / 1)
};

function WZ(a) {
  Y.call(this, a);
  this.o = new SZ;
  O(this.o, v, this.fV, p, this)
}
H(WZ, Y);
var Eoa = {
  vertical: "progress-bar-vertical",
  horizontal: "progress-bar-horizontal"
};
B = WZ.prototype;
B.ia = function() {
  this.A = this.b.U("div", "progress-bar-thumb");
  this.V = this.b.U("div", Eoa.horizontal, this.A);
  Foa(this);
  Goa(this);
  Hoa(this)
};
B.$ = function() {
  WZ.J.$.call(this);
  J && 7 > oc && O(this.G(), "resize", this.js, p, this);
  this.js();
  var a = this.G();
  Dj(a, "progressbar");
  Ej(a, "live", "polite")
};
B.Na = function() {
  WZ.J.Na.call(this);
  Ioa(this)
};

function Ioa(a) {
  J && 7 > oc && $c(a.G(), "resize", a.js, p, a)
}
B.Ya = function(a) {
  WZ.J.Ya.call(this, a);
  nv(this.G(), Eoa.horizontal);
  a = Fu(n, "progress-bar-thumb", this.G())[0];
  a || (a = this.b.U("div", "progress-bar-thumb"), this.G().appendChild(a));
  this.A = a
};
B.Ca = function() {
  return this.o.Ca()
};
B.$a = function(a) {
  this.o.$a(a);
  this.G() && Foa(this)
};

function Foa(a) {
  Ej(a.G(), "valuenow", a.Ca())
}
function Goa(a) {
  Ej(a.G(), "valuemin", UZ(a.o))
}
function Hoa(a) {
  Ej(a.G(), "valuemax", VZ(a.o))
}
B.fV = function() {
  this.js();
  this.P(v)
};
B.js = function() {
  if (this.A) {
    var a = UZ(this.o),
        b = VZ(this.o),
        a = (this.Ca() - a) / (b - a),
        a = Math.round(100 * a);
    this.A.style.width = a + "%"
  }
};
B.L = function() {
  Ioa(this);
  WZ.J.L.call(this);
  this.A = n;
  this.o.aa()
};

function XZ(a) {
  Y.call(this, a);
  this.o = new WZ(a);
  this.ha(this.o);
  this.A = new de
}
H(XZ, Y);
B = XZ.prototype;
B.$j = p;
B.eb = "ni";
B.Ap = n;
B.ok = n;
B.yp = n;
B.zp = n;
B.KA = n;
B.kb = "goog-offlinestatuscard";
B.getStatus = w("eb");
B.ia = function() {
  var a = this.b;
  this.V = a.U("div", this.kb, a.U("div", "goog-offlinestatuscard-shadow", a.U("div", "goog-offlinestatuscard-content", this.KA = a.U("div", "goog-offlinestatuscard-closecard"), this.Ap = a.U("div", "goog-offlinestatuscard-status"), this.zp = a.U("div", n, this.C = a.U("div", "goog-offlinestatuscard-progressbarstatus")), this.ok = a.U("div", "goog-offlinestatuscard-action"), this.yp = a.U("div", "goog-offlinestatuscard-message"))));
  this.o.ia();
  a.am(this.o.G(), this.C);
  this.update()
};
B.$ = function() {
  XZ.J.$.call(this);
  var a = Z(this);
  a.I(this.o, v, this.JT);
  a.I(this.ok, "click", this.FT);
  a.I(this.KA, "click", this.DT);
  this.$j && this.update()
};
B.DT = function() {
  this.P("dismiss")
};
B.update = function() {
  if (this.G()) {
    var a = this.getStatus(),
        b = t;
    switch (a) {
    case "off":
      b = "Offline. No connection available.";
      break;
    case "on":
      b = "Online";
      break;
    case "s":
      b = "Synchronizing...";
      break;
    case "c":
      b = "Updating software...";
      break;
    case "e":
      b = "Errors have been found."
    }
    this.b.Oe(this.Ap, "Status: " + b);
    Ii(this.ok);
    this.A.clear();
    a = "s" == a || "c" == a;
    U(this.zp, a);
    a && YZ(this);
    U(this.yp, t);
    this.$j = p
  }
};
B.JT = function() {
  YZ(this)
};
B.FT = function(a) {
  (a = this.A.get(gb(a.target))) && this.P(a)
};

function YZ(a) {
  a.b.Oe(a.C, Joa(a))
}
function Joa(a) {
  a = a.o;
  return Math.round((a.Ca() - UZ(a.o)) / (VZ(a.o) - UZ(a.o)) * 100) + "% complete."
}
B.L = function() {
  XZ.J.L.call(this);
  this.o.aa();
  this.o = n;
  this.A.clear();
  this.zp = this.yp = this.ok = this.Ap = this.A = n
};

function ZZ(a) {
  Y.call(this, a)
}
H(ZZ, Y);
B = ZZ.prototype;
B.Ui = p;
B.eb = "ni";
B.Wc = n;
B.ra = n;
B.kb = "goog-offlinestatus";
B.yS = "New! Offline Access";
B.FS = "Paused (offline). Click to connect.";
B.CS = "Offline. No connection available.";
B.DS = "Online. Click for details.";
B.GS = "Synchronizing. Click for details.";
B.zS = "Errors found. Click for details.";
B.getStatus = w("eb");
B.ia = function() {
  this.V = this.b.U("a", {
    "class": this.kb,
    href: "#"
  });
  this.update()
};
B.$ = function() {
  ZZ.J.$.call(this);
  Z(this).I(this.G(), "click", this.Us);
  this.Ui && this.update()
};
B.update = function() {
  var a, b;
  if (this.G()) {
    var c = this.getStatus(),
        d = t;
    a = "&nbsp;&nbsp;&nbsp;";
    b = m;
    switch (c) {
    case "ni":
    case "i":
      a = this.yS;
      b = p;
      break;
    case "p":
      d = this.FS;
      break;
    case "off":
      d = this.CS;
      break;
    case "on":
      d = this.DS;
      break;
    case "s":
      d = this.GS;
      break;
    case "e":
      d = this.zS
    }
    var e = this.G();
    e.title = d;
    var d = this.K,
        f = Koa(d),
        h = Koa(c);
    d && jv(e, f) ? jv(e, f) && (mv(e, f), nv(e, h)) : nv(e, h);
    this.K = c;
    b ? e.innerHTML = a : this.b.Oe(e, a);
    this.Ui = p
  }
};

function Koa(a) {
  var b = t;
  switch (a) {
  case "ni":
    b = "goog-offlinestatus-notinstalled";
    break;
  case "i":
    b = "goog-offlinestatus-installed";
    break;
  case "p":
    b = "goog-offlinestatus-paused";
    break;
  case "off":
    b = "goog-offlinestatus-offline";
    break;
  case "on":
    b = "goog-offlinestatus-online";
    break;
  case "s":
  case "c":
    b = "goog-offlinestatus-syncing";
    break;
  case "e":
    b = "goog-offlinestatus-error"
  }
  return b
}
B.Us = function() {
  this.mG();
  return p
};
B.mG = function() {
  var a = this.getStatus();
  "ni" == a || "i" == a ? this.ps() : this.$g()
};
B.ps = Na();
B.$g = function(a, b) {
  var c = this.Wc;
  if (c) {
    if (!this.ra) {
      c.G() || c.ia();
      this.b.Sa().body.appendChild(c.G());
      this.ha(c);
      var d;
      this.ra || (this.ra = new kx, zG(this.ra, 3, 0));
      d = this.ra;
      AG(d, new RH(b || this.G(), 5, 1));
      d.Hi(c.G())
    }
    this.ra.setVisible(!ix(this.ra))
  }
};
B.L = function() {
  ZZ.J.L.call(this);
  this.Wc && (this.Wc.aa(), this.Wc = n);
  this.ra && (this.ra.aa(), this.ra = n)
};

function $Z() {
  XZ.call(this)
}
H($Z, XZ);
$Z.prototype.update = function() {
  if (this.G()) {
    var a = this.B,
        b = t;
    switch (a) {
    case "jb":
      b = "Offline";
      break;
    case "kb":
      b = "Synchronized";
      break;
    case "lb":
      b = "Synchronizing...";
      break;
    case "mb":
      b = "Updating software...";
      break;
    case "nb":
      b = "Errors have been found."
    }
    this.b.Oe(this.Ap, "Status: " + b);
    b = [];
    switch (a) {
    case "kb":
      b.push({
        message: "Offline settings",
        Hc: "pb"
      }), b.push({
        message: "Disable offline calendar",
        Hc: "qb"
      })
    }
    Ii(this.ok);
    this.A.clear();
    if (b) for (var c = b.length - 1, d = 0; d <= c; d++) {
      var e = b[d],
          f = this.ok,
          h = this.b,
          l =
          h.U("span", d == c ? "goog-offlinestatuscard-action-item-last" : "goog-offlinestatuscard-action-item");
      h.appendChild(f, l);
      h.appendChild(f, h.createTextNode(" "));
      this.A.set(gb(l), e.Hc);
      U(l, m);
      h.Oe(l, e.message)
    }
    a = "lb" == a || "mb" == a;
    U(this.zp, a);
    a && YZ(this);
    U(this.yp, t);
    this.$j = p
  }
};
$Z.prototype.B = "kb";

function a_(a, b) {
  Y.call(this, k);
  this.B = a;
  this.A = b;
  this.F = pw();
  this.o = new Q(this);
  this.H = new Js;
  var c = new $Z;
  this.Wc && (Z(this).b(this.Wc, "dismiss", this.$g, p, this), this.ra.aa(), 0 <= wG(this, this.Wc) && this.removeChild(this.Wc), this.Wc = this.ra = n);
  this.Wc = c;
  Z(this).I(this.Wc, "dismiss", this.$g);
  var d = this.eb;
  c.eb != d && (c.$j = m);
  c.eb = d;
  c.xa && c.update();
  c = (c = wo(this.B)) && c.isEnabled();
  d = b_();
  c ? d && (zo(this.B) ? c_(this, "kb") : c_(this, "jb")) : d ? c_(this, "ib") : c_(this, "hb");
  wI() && (this.A || this.F ? (c = Ei("span", "og-space", n), this.C = Ei("span", "og-lk", "Offline", c), this.render(this.C), this.A && (c = Ei("a", {
    href: "javascript:void(0)"
  }, this.C), gbar.addLink(c, "gbe", "offline-link"), this.o.I(c, "click", this.Us), c = yo(this.B), Xd(this.o, c, "m", this.Ey, p, this))) : (c = Ei("span", {
    id: "offline_sc"
  }), this.render(c), T("offline_sep") && (T("offline_sep").innerHTML = "&nbsp;| "), c = Ei("a", {
    href: "javascript:void(0)"
  }, c), gbar.addLink(c, "gbe", "offline-link")))
}
H(a_, ZZ);
B = a_.prototype;
B.Cq = "ib";
B.Un = function(a) {
  this.C && (PN(a, this.C, 15, E(this.Us, this)), a = yo(this.B), Xd(this.o, a, "m", this.Ey, p, this))
};

function b_() {
  return window.chrome && window.chrome.app && window.chrome.app.isInstalled
}
function c_(a, b) {
  a.Cq != b && (a.$j = m);
  a.Cq = b;
  a.xa && a.update();
  if (a.Wc) {
    var c = a.Wc;
    c.B != b && (c.$j = m);
    c.B = b;
    c.xa && c.update()
  }
}
B.ia = function() {
  a_.J.ia.call(this);
  en(this.G(), "goog-offline-inline-block")
};
B.$ = function() {
  this.A || this.F ? (a_.J.$.call(this), this.Ui && this.update()) : a_.J.$.call(this)
};
B.update = function() {
  var a;
  if (this.G()) {
    var b = this.Cq,
        c = t;
    a = "&nbsp;&nbsp;&nbsp;";
    switch (b) {
    case "hb":
    case "ib":
      this.A || this.F || (a = "Offline");
      break;
    case "jb":
      c = "Offline";
      break;
    case "kb":
      c = "Online. Click for details.";
      break;
    case "lb":
    case "mb":
      c = "Synchronizing. Click for details.";
      break;
    case "nb":
      c = "Errors found. Click for details."
    }
    var d = this.G();
    d.title = c;
    var c = this.O,
        e = Loa(c),
        f = Loa(b);
    c && Ot(d, e) ? HI(d, e, f) : en(d, f);
    this.O = b;
    b = this.b;
    b.Rj(d);
    c = b.U("span");
    c.innerHTML = a;
    b.appendChild(d, c);
    this.Ui = p
  }
};

function Loa(a) {
  var b = t;
  switch (a) {
  case "hb":
    b = "goog-offlinestatus-notinstalled";
    break;
  case "ib":
    b = "goog-offlinestatus-installed";
    break;
  case "jb":
    b = "goog-offlinestatus-offline";
    break;
  case "kb":
    b = "goog-offlinestatus-online";
    break;
  case "lb":
  case "mb":
    b = "goog-offlinestatus-syncing";
    break;
  case "nb":
    b = "goog-offlinestatus-error"
  }
  return b
}
B.mG = function() {
  switch (this.Cq) {
  case "hb":
  case "ib":
    this.ps();
    break;
  default:
    this.$g()
  }
};
B.ps = function() {
  var a = new nw;
  b_() ? (a.set("yes", "Enable", m).set("cancel", "Cancel", p, m), ku(this.H, E(this.pF, this), "Enable Google Calendar Offline", Moa(t), a, k, "offline-dialog")) : (a.set("yes", "Install from Web Store", m).set("cancel", "Cancel", p, m), ku(this.H, E(this.xX, this), "Enable Google Calendar Offline", Moa("To enable offline, you will need to install the Google Calendar web app from the Chrome Web Store."), a, k, "offline-dialog"))
};
B.pF = function(a) {
  "yes" == a.key && (b_() ? (c_(this, "mb"), RZ.M().enable(m), this.$g()) : (c_(this, "hb"), this.ps()))
};
B.xX = function(a) {
  if ("yes" == a.key) {
    NS("https://chrome.google.com/webstore/detail/ejjicmeblgpmajnghnpcppodonldlgfn");
    RZ.M().P("gb");
    c_(this, "ib");
    var b = 0,
        c = window.setInterval(E(function() {
        b++;
        if (b_() || 600 < b) window.clearInterval(c), b_() && this.pF(a)
      }, this), 1E3)
  }
};
B.$g = function() {
  var a;
  (a = this.A ? T("gbg5") : T("mg-settings")) ? a_.J.$g.call(this, k, a) : a_.J.$g.call(this)
};
B.Ey = function(a) {
  c_(this, a.Pa ? "kb" : "jb")
};

function Moa(a) {
  return jm(Noa, {
    introduction: "Google Calendar Offline will allow you to <strong>view and respond </strong>to your calendar events when your computer is not connected to the internet.",
    warning: "Enabling Offline will download your event information onto this computer. <strong>Please make sure you are not using a public or shared computer. </strong>",
    body: a
  })
}
var Noa = new V("${introduction}<p>${warning}</p><p>${body}</p>");

function d_(a) {
  this.A = a;
  this.b = window.applicationCache;
  this.o = new Q(this);
  this.B = new cD(this.DL, 3E3, this);
  this.o.I(this.b, "checking", this.wL);
  this.o.I(this.b, "error", this.uL);
  this.o.I(this.b, "noupdate", this.yL);
  this.o.I(this.b, "downloading", this.xL);
  Xd(this.o, this.b, "progress", this.B.nm, p, this.B);
  this.o.I(this.b, "updateready", this.EL);
  this.o.I(this.b, "cached", this.vL);
  this.o.I(this.b, "obsolete", this.zL)
}
H(d_, uc);
B = d_.prototype;
B.wL = Na();
B.yL = function() {
  this.A && e_(this.A)
};
B.xL = Na();
B.DL = Na();
B.EL = function() {
  this.A && e_(this.A)
};
B.vL = function() {
  this.A && e_(this.A)
};
B.zL = Na();
B.uL = function() {
  this.A && e_(this.A)
};
B.L = function() {
  d_.J.L.call(this);
  delete this.b;
  K(this.o);
  delete this.o;
  K(this.B);
  delete this.B
};

function f_(a, b, c) {
  P.call(this);
  this.A = a;
  this.b = b;
  this.K = c;
  this.o = new Q(this)
}
H(f_, P);
f_.prototype.Pa = function() {
  return zo(this.A)
};
f_.prototype.B = function(a, b) {
  if (b) {
    var c = this.K;
    c.b += b;
    c.A.update()
  } else e_(this.K)
};
f_.prototype.L = function() {
  f_.J.L.call(this);
  K(this.o)
};

function g_(a, b, c) {
  f_.call(this, a, b, c)
}
H(g_, f_);

function Ooa(a) {
  var b = Mj.M();
  Xd(a.o, b, va, a.D, p, a)
}
g_.prototype.D = function() {
  if (this.Pa()) {
    var a = {};
    Mj.M().forEach(function(b) {
      var c = b.getId();
      a[c] = {
        id: c,
        name: b.getTitle(),
        type: b.type
      }
    });
    0 < Bc(a) && Jna(this.b, E(this.F, this, a))
  }
};
g_.prototype.F = function(a, b) {
  for (var c = 0, d = 0, e = 0; e < b.length; e++) {
    var f = b[e],
        h = a[f.getId()];
    h ? (Zna(h, f), delete a[f.getId()], c++) : (f.B = m, d++, h = f.getId(), f = F(cZ, "calendar [" + f.getId() + "] removed"), soa(this.b.b, h, f))
  }
  for (var l in a) b.push(Zna(a[l]));
  this.b.write(b, E(this.B, this, "CalListSyncer: " + Bc(a) + " calendar(s) added, " + c + " updated, " + d + " deleted"))
};
g_.prototype.C = function(a) {
  for (var b = Or(this.A), c = 0; c < a.length; c++) {
    var d = a[c];
    Pr(b, d.getName(), d.getId(), d.getType())
  }
  this.P("lc_cls")
};

function h_(a, b, c) {
  f_.call(this, a, b, c)
}
H(h_, f_);

function Poa(a) {
  var b = ci.M();
  Xd(a.o, b, "detailsadd", a.C, p, a)
}
h_.prototype.C = function(a) {
  if (this.Pa()) {
    var b = {};
    b[a.id] = a.nc;
    hZ(this.b, E(this.D, this, b, p))
  }
};
h_.prototype.D = function(a, b, c) {
  for (var d = 0, e = 0, f = 0; f < c.length; f++) {
    var h = c[f],
        l = h.getId(),
        q = a[l];
    q ? (aoa(q, h), delete a[l], d++) : b && (h.B = m, e++)
  }
  for (var r in a) c.push(aoa(a[r]));
  this.b.write(c, E(this.B, this, "DetailsStoreSyncer: " + Bc(a) + " details added, " + d + " details updated, " + e + " details deleted"))
};

function Qoa(a) {
  var b = {};
  ci.M().forEach(function(a, d) {
    b[a] = d
  });
  Fc(b) || hZ(a.b, E(a.D, a, b, m))
}
h_.prototype.F = function(a) {
  for (var b = ci.M(), c = 0; c < a.length; c++) {
    var d = a[c];
    b.put(d.getId(), boa(d))
  }
  this.P("lc_dss")
};
h_.prototype.L = function() {
  h_.J.L.call(this)
};

function i_(a, b, c, d) {
  f_.call(this, a, b, c);
  this.F = d;
  this.H = Cg;
  this.C = oba;
  this.D = {};
  this.K.o = 100
}
H(i_, f_);

function Roa(a) {
  a.D = Soa(a);
  a.o.I(Yp, "w", a.jQ);
  a.o.I(Yp, "x", a.iQ);
  a.o.I(Yp, "z", a.nQ);
  a.o.I(a.F, va, a.lQ);
  var b = Af(a.A),
      c = E(a.kQ, a);
  b.o.load = c;
  a.o.I(Bp(), v, a.mQ)
}
B = i_.prototype;
B.jQ = function(a) {
  if (this.Pa()) {
    var b = {};
    a = a.o;
    for (var c = 0; c < a.length; ++c) {
      var d = ru(Yp, a[c]);
      d && !Oj(d, 64) && Rr(this.F, d.Aa()) && (b[a[c]] = d)
    }
    Fc(b) || iZ(this.b, E(this.DB, this, b, p))
  }
};
B.DB = function(a, b, c) {
  for (var d = 0, e = 0, f = 0; f < c.length; f++) {
    var h = c[f];
    a[h.getId()] ? (hoa(a[h.getId()], h), delete a[h.getId()], d++) : b && (e++, h.B = m)
  }
  for (var l in a) c.push(hoa(a[l]));
  this.b.write(c, E(this.B, this, "EventSyncer: " + Bc(a) + " event(s) added, " + d + " event(s) updated, " + e + " events removed.", 70))
};
B.lQ = function() {
  var a = this.D,
      b = Soa(this),
      c = {},
      d = p,
      e;
  for (e in b) a[e] || (d = m, c[e] = 1);
  this.D = b;
  d && Toa(this, c);
  c = p;
  for (e in a) b[e] || (c = m, toa(this.b.b, e, F(cZ, "EventSyncer: calendar events [" + e + "] removed")));
  if (d || c) a = E(this.Su, this, Yp.B.slice(0)), KZ(this.b.b, n, a)
};

function Toa(a, b, c) {
  var d = {};
  Yp.forEach(function(a) {
    !Oj(a, 64) && b[a.Aa()] && (d[a.getId()] = a)
  });
  !Fc(d) || c ? iZ(a.b, E(a.DB, a, d, !! c)) : a.B(0, 70)
}
function Soa(a) {
  var b = {};
  a.F.forEach(E(function(a) {
    a = a.getId();
    Rr(this.F, a) && (b[a] = 1)
  }, a));
  return b
}
B.iQ = function(a) {
  this.Pa() && uoa(this.b.b, a.Li, F(cZ, "EventSyncer: event [" + a.Li + "] deleted"))
};
B.nQ = function(a) {
  this.Pa() && (a = E(this.Su, this, a.o), KZ(this.b.b, n, a))
};
B.Su = function(a, b) {
  for (var c = 0; c < b.length; c++) b[c].B = m;
  for (c = 0; c < a.length; c++) {
    var d = a[c];
    this.D[d.Aa()] && b.push(joa(d))
  }
  this.b.write(b, E(this.B, this, "EventSyncer: " + a.length + " manifest entries updated", 30))
};
B.kQ = function(a) {
  a = jt(dZ(a, "emf"));
  var b = yq(a);
  a = Fq(a);
  if (b.length && a.length) for (b = 0; b < a.length; b++) {
    var c = a[b],
        d = E(this.hy, this, p),
        e = this.b.b;
    gZ(E(e.PD, e, c), d);
    e = E(this.fy, this, p);
    KZ(this.b.b, c, e)
  }
};
B.dy = function() {
  if (Fc(this.D)) this.B(0, 70), this.B(0, 30);
  else {
    Toa(this, this.D, m);
    var a = E(this.Su, this, Yp.B.slice(0));
    KZ(this.b.b, n, a)
  }
};
B.hy = function(a, b) {
  for (var c = 0; c < b.length; c++) {
    var d = b[c],
        e = d,
        f = d.getId(),
        d = foa(e.b.sharedprops),
        h = e.Xc();
    h && (d["goo.richContent"] = h);
    var h = e.getTitle(),
        l = e.Fa(),
        q = e.Za(),
        r = e.b.owner,
        s = e.Aa(),
        u = e.b.creator,
        x = e.b.flags,
        z = e.b.eventType,
        A = wZ(e, "recurEid"),
        G = wZ(e, "location"),
        M = e.b.num_att,
        N = e.b.att,
        X = foa(e.b.privprops),
        $ = wZ(e, "reminderOverrides"),
        ca = n;
    if ($) for (var ca = [], $ = $.split(","), ua = $.length; 0 <= --ua;) ca.push(rG($[ua]));
    d = new Rn(f, h, l, q, r, s, u, x, z, A, G, M, N, d, X, ca, wZ(e, "description") != n ? wZ(e, "description") || t : k);
    f = k;
    f = Sna(e, "crm");
    f = f === n ? k : f;
    C(f) && (d.Hd = f);
    f = k;
    e = Sna(e, "privacy");
    f = e === n ? k : e;
    C(f) && (d.H.b = f);
    CG(d)
  }
  a && this.P("rb")
};
B.fy = function(a, b) {
  for (var c = [], d = 0; d < b.length; d++) c.push(koa(b[d]));
  c = dt(c);
  wq(c);
  Yp.A = {};
  Mr(this.A);
  for (d = 0; d < c.length; ++d) {
    var e = c[d];
    this.H < e.o && (this.H = e.o);
    this.C > e.b && (this.C = e.b)
  }
  a && this.P("sb")
};
B.mQ = function(a) {
  if (!this.Pa()) {
    var b = wp(this.A);
    a = a.target.first.cb();
    if (this.H > a || this.C < a + b.b) b = Kl.Lc(dk(this.H)), a = Kl.Lc(dk(this.C)), Ir(this.A).b("Your offline calendar only contains events from " + b + " to " + a)
  }
};
B.L = function() {
  i_.J.L.call(this);
  aZ(Af(this.A), "load")
};

function j_(a, b, c) {
  f_.call(this, a, b, c)
}
H(j_, f_);
j_.prototype.D = function(a) {
  a.Pa && Uoa(this)
};

function Uoa(a) {
  var b = E(a.H, a);
  a = a.b.b;
  gZ(E(a.Ft, a, n, n), b)
}
j_.prototype.C = function(a, b, c, d, e, f, h) {
  0 == h.length ? h.push(Wna(a, b, c, d, e, f)) : 1 == h.length && Wna(a, b, c, d, e, f, h[0]);
  this.b.write(h, E(this.B, this, "PendingResponseSyncer: pending response " + c + " added for event [" + a + "] in calendar [" + b + "]."))
};
j_.prototype.F = function(a) {
  for (var b = 0; b < a.length; b++) {
    var c = a[b];
    EI(c.getId(), c.Aa(), parseInt(c.b.response, 10), Xna(c), wZ(c, "comment") || k)
  }
};
j_.prototype.H = function(a) {
  for (var b = 0, c = 0; c < a.length; c++) {
    var d = a[c],
        e = d.getId(),
        f = d.Aa(),
        h = parseInt(d.b.response, 10),
        l = d.b.edit_scope,
        q = Xna(d),
        r = wZ(d, "comment") || k,
        s = ru(Yp, e);
    if (s) {
      if (e = parseInt(s.C.responseTimestamp, 10), !e || e < parseInt(d.b.timestamp, 10)) k_(s, h, l, s.Dc, q, r), b++
    } else h = Voa(e, f, h, l, q, r), Cf(Af(this.A), "event", h, 0, D);
    d.B = m
  }
  this.b.write(a, E(this.B, this, "PendingResponseSyncer: " + b + " response(s) updated."))
};

function l_(a, b, c) {
  f_.call(this, a, b, c);
  this.D = Zo.M()
}
H(l_, f_);
l_.prototype.F = function(a) {
  if (a.Pa) {
    a = E(this.C, this);
    var b = this.b.b;
    gZ(E(b.iy, b), a)
  } else this.D.log("ol_offline", 0)
};
l_.prototype.H = function(a) {
  if (!this.Pa()) {
    a = a.o;
    var b = [],
        c;
    for (c in a) b.push(poa(c, a[c]));
    this.b.write(b, F(cZ, "PerfLoggerSyncer: " + b.length + " logs stored"))
  }
};
l_.prototype.C = function(a) {
  for (var b = 0; b < a.length; b++) {
    var c = a[b],
        d = c.he(),
        e = c.getTime();
    if (e) for (var f = 0; f < e.length; f++) this.D.log(d, e[f]);
    else this.D.log(d, 0);
    c.B = m
  }
  this.b.write(a, E(this.B, this, "PerfLoggerSyncer: " + a.length + " log(s) updated."))
};

function m_(a, b, c) {
  f_.call(this, a, b, c)
}
H(m_, f_);

function Woa(a) {
  var b = ig.M();
  Xd(a.o, b, "gcal$pae", a.C, p, a)
}
m_.prototype.C = function(a) {
  if (this.Pa()) {
    var b = {};
    b[a.xh.uid] = a.xh;
    fZ(this.b, E(this.D, this, b))
  }
};
m_.prototype.D = function(a, b) {
  for (var c = 0, d = 0; d < b.length; d++) {
    var e = b[d],
        f = e.getId();
    a[f] && (noa(a[f], e), delete a[f], c++)
  }
  for (var h in a) b.push(noa(a[h]));
  this.b.write(b, E(this.B, this, "PrincipalSyncer: " + Bc(a) + " principals added, " + c + " principals updated"))
};

function Xoa(a) {
  var b = {};
  ig.M().forEach(function(a) {
    b[a.uid] = a
  });
  Fc(b) || fZ(a.b, E(a.D, a, b))
}
m_.prototype.F = function(a) {
  for (var b = ig.M(), c = 0; c < a.length; c++) {
    var d;
    d = a[c];
    d = new Lf(d.getId(), d.Ma(), d.tc(), d.getType());
    kg(b, d)
  }
  this.P("lc_ps")
};

function Yoa(a, b) {
  this.A = a;
  this.o = 1;
  this.B = b;
  this.b = 0
}
function e_(a) {
  a.b = a.o;
  a.A.update()
};

function Zoa(a, b, c) {
  this.o = a;
  this.B = a.Wc;
  this.A = b;
  c_(this.o, c || "lb");
  a = this.B.o;
  Coa(a.o, 0);
  a.G() && Goa(a);
  Doa(a.o, b);
  a.G() && Hoa(a);
  a.$a(0);
  this.b = []
}
function n_(a, b) {
  var c = new Yoa(a, b);
  a.b.push(c);
  return c
}
Zoa.prototype.update = function() {
  for (var a = 0, b = 0; b < this.b.length; b++) var c = this.b[b],
      a = a + (c.b > c.o ? c.B : c.b / c.o * c.B);
  a >= this.A && (a = this.A, c_(this.o, "kb"), Va._ol_background && window.close());
  this.B.o.$a(a)
};

function o_() {}
Xa(o_);
o_.prototype.unregister = function() {
  p_.M().B();
  Kp(Jp.M(), "g")
};
o_.prototype.register = function(a) {
  a.b(ya, E(this.o, this))
};
o_.prototype.o = function() {
  p_.M().A(3, "Offline", E(this.b, this), function() {
    q_.put("b1", "Save");
    q_.put("click1", jH($oa) + "()");
    q_.put("click2", jH(r_) + "()");
    return q_.toString()
  }, apa, s_)
};
var bpa = new V("<thead><tr><th class=calname>${calenderName}</th><th class=check>${availableOffline}</th><th>&nbsp;</th></tr></thead>"),
    cpa = new V('<tr><th class="svalues-th-offline"><h3 class="normalSize">${myCalendarsHeading}</h3><table class=rows>${tableHeader}${myCalendars}</table></th></tr><tr class=last><th class="svalues-th-offline"><h3 class="normalSize">${otherCalendarsHeading}</h3><table class=rows>${tableHeader}${otherCalendars}</table></th></tr>');
o_.prototype.b = function(a) {
  var b = [];
  Mj.M().forEach(function(a) {
    b.push(a)
  });
  b.sort(bs(Mj.M()));
  for (var c = [], d = [], e = 0; e < b.length; e++) {
    var f = b[e].type;
    2 == f ? c.push(dpa(a, b[e])) : 1 != f && 0 != f || d.push(dpa(a, b[e]))
  }
  a = jm(bpa, {
    calenderName: "CALENDAR",
    availableOffline: "Available Offline"
  });
  return jm(cpa, {
    tableHeader: a,
    myCalendarsHeading: "My Calendars",
    otherCalendarsHeading: "Other Calendars",
    myCalendars: c.join(t),
    otherCalendars: d.join(t)
  })
};
var epa = new V('<tr class="${className}"><td class=calname>${calendarName}</td><td class=check>${checkbox}</td><td>&nbsp;</td></tr>');

function dpa(a, b) {
  var c = b.getId(),
      d = ci.M().get(c),
      e = d && d.Pb ? d.Pb : b.getTitle(),
      f = Lj(Mj.M(), c).b,
      h = f ? "listhidden" : n,
      f = c == Sh(R()) || !d || f,
      l = a.Va(4, c, c + "/availOffline", "false"),
      q = [];
  t_(t, l, f, t, q);
  return jm(epa, {
    className: h ? h : t,
    calendarName: fpa(c, e, d, f),
    checkbox: q.join(t)
  })
}
function $oa() {
  o_.M();
  var a = u_.o(W("settingsForm"), p),
      b = p,
      c;
  for (c in a) if (ob(c, "/availOffline")) {
    b = m;
    break
  }
  OO();
  b && Mj.M().Id()
};

function v_(a, b, c) {
  f_.call(this, a, b, c);
  this.D = Vj(a)
}
H(v_, f_);
v_.prototype.C = function() {
  var a = E(this.H, this),
      b = this.b.b;
  gZ(E(b.ky, b), a)
};
v_.prototype.H = function(a) {
  var b = {};
  Bb(Ena(this.D), function(a) {
    a = On(a);
    b[a] = "subscription"
  });
  for (var c = Bc(b), d = 0; d < a.length; d++) {
    var e = a[d],
        f = e.getKey();
    b[f] ? (e.$a(b[f]), delete b[f]) : (e.B = m, c++)
  }
  for (var h in b) a.push(GZ([h, b[h]]));
  this.b.write(a, E(this.B, this, "SubscriptionsSyncer: " + c + " subscription(s) updated"))
};
v_.prototype.F = function(a) {
  for (var b = [], c = 0; c < a.length; c++) b.push(a[c].getKey());
  Bb(a, function(a) {
    a = a.getKey();
    pG(this.D, rG(a))
  }, this)
};

function w_(a, b, c) {
  f_.call(this, a, b, c)
}
H(w_, f_);
w_.prototype.D = function() {
  var a = E(this.F, this),
      b = this.b.b;
  gZ(E(b.ny, b), a)
};
w_.prototype.F = function(a) {
  var b = {};
  S(this.A).forEach(function(a, c) {
    b[a] = c
  });
  for (var c = Bc(b), d = 0; d < a.length; d++) {
    var e = a[d],
        f = e.getKey();
    b[f] ? (e.$a(b[f]), delete b[f]) : e.B = m
  }
  for (var h in b) a.push(GZ([h, b[h]]));
  this.b.write(a, E(this.B, this, "UserPrefsSyncer: " + c + " user preference(s) updated"))
};
w_.prototype.C = function(a) {
  for (var b = [], c = 0; c < a.length; c++) {
    var d = a[c];
    b.push([d.getKey(), d.Ca()])
  }
  Yh(S(this.A), b);
  cr ? cr() : er = m;
  this.P("lc_ups")
};
w_.prototype.L = function() {
  w_.J.L.call(this)
};

function Hna(a, b, c) {
  this.b = a;
  this.D = b;
  this.B = c;
  this.o = new Q(this)
}
B = Hna.prototype;
B.gj = n;
B.yc = n;
B.Yg = n;
B.gk = n;
B.fk = n;
B.ik = n;
B.jk = n;
B.ek = n;
B.Yo = n;
B.Zo = n;
B.aA = p;
B.bA = p;
B.$z = p;
B.Zz = p;
B.cA = p;
B.dA = p;
B.nw = n;
B.dg = n;
B.Ne = n;
B.Lu = n;
B.ev = n;
B.setup = function() {
  if (window.location != window.parent.location) this.Lu = new d_(window.parent.calendarAppCacheProgress);
  else if (!Nd(this.b, 11)) {
    var a = E(this.XN, this);
    this.gj = new sZ;
    var b = new MZ;
    this.gj.b[b.A] = b;
    b = new NZ;
    this.gj.b[b.A] = b;
    b = new OZ;
    this.gj.b[b.A] = b;
    b = new PZ;
    this.gj.b[b.A] = b;
    b = Td(this.b).isEnabled(80) ? 5 : 4;
    Ona(this.gj, b, a);
    zo(this.b) || ep("ol_cold");
    a = RZ.M();
    Xd(this.o, a, "eb", this.ZN, p, this);
    a = RZ.M();
    Xd(this.o, a, "fb", this.YN, p, this);
    a = RZ.M();
    Xd(this.o, a, "gb", this.$N, p, this);
    Od(this.b, 11, this)
  }
};
B.XN = function() {
  this.yc = this.gj.o;
  var a = E(this.oQ, this),
      b = this.yc.b;
  gZ(E(b.Xo, b, n), a)
};
B.oQ = function(a) {
  for (var b, c, d, e = 0; e < a.length; e++) {
    var f = a[e],
        h = f.getKey();
    "basics_offline_optin" == h ? d = f.Ca() : "basics_current_user" == h && (b = f, c = f.Ca())
  }
  if (zo(this.b)) c = Sh(this.b), b && (b.$a(c), this.yc.write([b], F(cZ, "Current user updated to [" + c + "].")));
  else if (c != Sh(this.b)) {
    Sh(this.b);
    gpa(this, c);
    return
  }
  a = m;
  d ? (d = d.split("/"), c == d[0] ? "in_progress" == d[1] ? b_() && RZ.M().enable(m) : b_() ? RZ.M().enable(p) : RZ.M().disable() : a = p) : Va._ol_background && (b_() && "1" != SS.get("OL_DISABLE_AUTO_OPTIN") ? RZ.M().enable(m) : window.close());
  a && (this.dg = new a_(this.b, this.D), this.ev && ON(this.ev, this.dg), this.o.I(this.dg.Wc, ["pb", "qb"], this.EO));
  zo(this.b) || this.isEnabled() || gpa(this, c)
};

function gpa(a, b) {
  var c = b ? Av(b) : t;
  cr ? cr() : er = m;
  c = new AO(a.b, c, n);
  DO(c);
  EO()
}
B.EO = function(a) {
  switch (a.type) {
  case "pb":
    Ft(3, p);
    break;
  case "qb":
    RZ.M().disable()
  }
  this.dg.Wc.P("dismiss")
};
B.jy = function(a, b) {
  var c = Sh(this.b) + "/" + a;
  0 == b.length ? b.push(GZ(["basics_offline_optin", c])) : 1 == b.length && b[0].$a(c);
  this.yc.write(b, F(cZ, "Calendar [" + c + "] is enabled for offline."))
};
B.lM = function() {
  this.A && this.A.o()
};
B.nk = function(a) {
  switch (a.type) {
  case "rb":
    this.aA = m;
    break;
  case "sb":
    this.bA = m;
    break;
  case "lc_dss":
    this.$z = m;
    break;
  case "lc_cls":
    this.Zz = m;
    break;
  case "lc_ps":
    this.cA = m;
    break;
  case "lc_ups":
    this.dA = m
  }
  if (this.aA && this.bA && this.$z && this.Zz && this.cA && this.dA) {
    a = new Ms(this.b);
    Os(a);
    Mj.M().Id();
    Qs(a);
    var b = this.ek;
    a = E(b.F, b);
    b = b.b.b;
    gZ(E(b.Ft, b, n, n), a);
    a = this.jk;
    a.o.I(S(a.A), "j", a.D);
    Roa(this.Yg);
    Poa(this.gk);
    Ooa(this.fk);
    Woa(this.ik)
  }
};

function hpa(a) {
  var b = Af(a.b);
  Gna(b, "event", E(a.jU, a));
  Gna(b, "ping", function(a, b, e) {
    e()
  })
}
B.jU = function(a, b) {
  if ("RESPOND" == dZ(a, "action")) this.Qz(a), b(n);
  else {
    var c = ru(Yp, dZ(a, "eid") || t);
    b(c ? ipa(c, m) : n)
  }
};
B.WH = function() {
  if (!_ol_serve_ol) {
    var a = n_(this.Ne, 25);
    window.calendarAppCacheProgress = a;
    var a = UG(new ff(window.location), "deb"),
        b = WI() + "/renderOffline";
    a && (b += "?deb=" + a);
    x_(b);
    x_("http://calendar.google.com/googlecalendar/offline.html");
    x_("https://calendar.google.com/googlecalendar/offline.html");
    nb(b, "https") && x_("http://www.google.com/calendar/offline/offline.html")
  }
};

function x_(a) {
  var b = nK(T("gccFrame"), t);
  b.src = a;
  b.className = "offline-iframe";
  b.tabIndex = -1
}
B.$N = function() {
  var a = E(this.jy, this, "in_progress"),
      b = this.yc.b;
  gZ(E(b.Xo, b, "basics_offline_optin"), a)
};
B.ZN = function(a) {
  a = E(this.pQ, this, a.o);
  woa(this.yc.b, a);
  SS.remove("OL_DISABLE_AUTO_OPTIN")
};
B.pQ = function(a) {
  this.Ne = new Zoa(this.dg, 100, "lb");
  var b = n_(this.Ne, 5),
      c = this.jk = new w_(this.b, this.yc, b);
  c.Pa() ? (c.D(), c.o.I(S(c.A), "j", c.D)) : (b = E(c.C, c), c = c.b.b, gZ(E(c.ny, c), b));
  this.o.I(this.jk, "lc_ups", E(this.nk, this));
  b = n_(this.Ne, 10);
  b = this.fk = new g_(this.b, this.yc, b);
  b.Pa() ? (Ooa(b), b.D()) : Jna(b.b, E(b.C, b));
  this.o.I(this.fk, "lc_cls", E(this.nk, this));
  b = n_(this.Ne, 10);
  b = this.gk = new h_(this.b, this.yc, b);
  b.Pa() ? (Poa(b), Qoa(b)) : hZ(b.b, E(b.F, b));
  this.o.I(this.gk, "lc_dss", E(this.nk, this));
  b = n_(this.Ne, 10);
  b = this.ik = new m_(this.b, this.yc, b);
  b.Pa() ? (Woa(b), Xoa(b)) : fZ(b.b, E(b.F, b));
  this.o.I(this.ik, "lc_ps", E(this.nk, this));
  b = n_(this.Ne, 25);
  b = this.Yg = new i_(this.b, this.yc, b, this.B);
  b.Pa() ? (Roa(b), b.dy()) : (iZ(b.b, E(b.hy, b, m)), c = E(b.fy, b, m), KZ(b.b.b, n, c));
  this.o.I(this.Yg, "rb", E(this.nk, this));
  this.o.I(this.Yg, "sb", E(this.nk, this));
  b = n_(this.Ne, 6);
  b = this.ek = new j_(this.b, this.yc, b);
  b.Pa() && Uoa(b);
  Mu(b.o, yo(b.A), "m", b.D, b);
  b = n_(this.Ne, 4);
  b = this.Yo = new l_(this.b, this.yc, b);
  if (b.Pa()) {
    var c = E(b.C, b),
        d =
        b.b.b;
    gZ(E(d.iy, d), c)
  }
  Mu(b.o, yo(b.A), "m", b.F, b);
  Mu(b.o, b.D, "perfupload", b.H, b);
  b = this.b;
  c = Nh(Ph(b));
  d = yo(b);
  b = new QZ(this.B, Yp, b, c, d, this);
  (Ns || a) && b.o();
  Mu(this.o, JC(), "P", b.o, b);
  this.A = b;
  b = n_(this.Ne, 5);
  Td(this.b).isEnabled(80) ? (b = this.Zo = new v_(this.b, this.yc, b), b.Pa() ? a ? b.C() : (c = D.get(b.A), b.o.I(c.A, "D", b.C)) : (c = E(b.F, b), d = b.b.b, gZ(E(d.ky, d), c)), b.o.I(b.D, "E", b.C)) : e_(b);
  this.o.I(JC(), "P", E(this.VH, this));
  hpa(this);
  window.setTimeout(E(this.WH, this), 5E3);
  a && (a = E(this.jy, this, wa), b = this.yc.b, gZ(E(b.Xo, b, "basics_offline_optin"), a), a = S(this.b), a.set(Sh(this.b) + "/availOffline", "true"), a.jb(), a = GZ(["basics_current_user", Sh(this.b)]), b = GZ(["basics_full_sync", ib().toString()]), this.yc.write([a, b], F(cZ, "Full Sync timestamp updated.")));
  o_.M().register(Rq(this.b))
};
B.VH = function() {
  var a;
  if (a = this.isEnabled()) this.nw || (this.nw = XN.M().b), a = this.nw.b;
  if (a && !FH) {
    a = E(this.rT, this);
    var b = this.yc.b;
    gZ(E(b.Xo, b, "basics_full_sync"), a)
  }
};
B.rT = function(a) {
  var b = ib(),
      c;
  if (0 == a.length) c = GZ(["basics_full_sync", b.toString()]);
  else if (parseInt(a[0].Ca(), 10) <= b - 1728E5) {
    c = this.Yg;
    var d = E(c.dy, c);
    voa(c.b.b, d);
    c = a[0];
    c.$a(b.toString())
  }
  c && this.yc.write([c], F(cZ, "Full Sync timestamp updated."))
};
B.YN = function() {
  this.dg && c_(this.dg, b_() ? "ib" : "hb");
  delete this.Ne;
  K(this.Yg);
  delete this.Yg;
  this.A && (this.o.b(JC(), "P", this.A.o, p, this.A), K(this.A), delete this.A);
  K(this.gk);
  delete this.gk;
  K(this.fk);
  delete this.fk;
  K(this.ik);
  delete this.ik;
  K(this.jk);
  delete this.jk;
  K(this.ek);
  delete this.ek;
  K(this.Yo);
  delete this.Yo;
  K(this.Zo);
  delete this.Zo;
  K(this.Lu);
  delete this.Lu;
  var a = Af(this.b);
  aZ(a, "event");
  aZ(a, "deleteevent");
  aZ(a, "ping");
  a = E(this.QN, this);
  Qna(this.yc.b, a);
  o_.M().unregister();
  SS.set("OL_DISABLE_AUTO_OPTIN", "1", 31536E3)
};
B.QN = function() {
  for (var a = Mt("offline-iframe", T("gccFrame")), b = 0; b < a.length; b++) Li(a[b])
};
B.Qz = function(a) {
  ep("ol_rsvp");
  var b = this.ek,
      c = dZ(a, "eid"),
      d = dZ(a, "src");
  a = E(b.C, b, c, d, dZ(a, "rst").toString(), dZ(a, "scp") || "ONE", dZ(a, "rgu"), dZ(a, "rcomment"));
  b = b.b.b;
  gZ(E(b.Ft, b, c, d), a)
};
B.isEnabled = function() {
  return RZ.M().isEnabled()
};
B.kU = function(a) {
  this.dg ? ON(a, this.dg) : this.ev = a
};
