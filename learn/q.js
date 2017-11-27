window.Q = function(window, document, n) {
    "use strict";

    function e(t, i, n) {
        if (t[hasChildren]()) {
            var s = t._fp || t[getChildren]();
            if (s) {
                s = s._jk || s;
                for (var r = 0, h = s[length]; h > r; r++) if (i[call](n, s[r]) === !1 || e(s[r], i, n) === !1) return !1;
                return !0
            }
        }
    }

    function s(t) {
        if (!t[hasChildren]()) return t instanceof Cq ? t : null;
        for (var i, n = t._fp._jk, e = n.length - 1; e >= 0;) {
            if (i = n[e], i = s(i)) return i;
            e--
        }
        return null
    }

    function r(t, i, n, e) {
        return e ? h(t, i, n) : a(t, i, n)
    }

    function h(t, i, n) {
        t = t._jk || t;
        for (var e, s = 0, r = t.length; r > s; s++) if (e = t[s], e.hasChildren() && !h(e[children], i, n) || i[call](n, e) === !1) return !1;
        return !0
    }

    function a(t, i, n) {
        t = t._jk || t;
        for (var e, s = 0, r = t[length]; r > s; s++) if (e = t[s], i[call](n, e) === !1 || e[hasChildren]() && !a(e.children, i, n)) return !1;
        return !0
    }

    function o(t, i, n, e) {
        return e ? f(t, i, n) : u(t, i, n)
    }

    function f(t, i, n) {
        t = t._jk || t;
        for (var e, s = t[length], r = s - 1; r >= 0; r--) if (e = t[r], e[hasChildren]() && !f(e.children, i, n) || i[call](n, e) === !1) return !1;
        return !0
    }

    function u(t, i, n) {
        t = t._jk || t;
        for (var e, s = t[length], r = s - 1; r >= 0; r--) if (e = t[r], i.call(n, e) === !1 || e[hasChildren]() && !u(e.children, i, n)) return !1;
        return !0
    }

    function c(t, i, n) {
        for (var e, s = (t._jk || t).slice(0); s[length];) {
            e = s[0], s = s[splice](1);
            var r = i.call(n, e);
            if (r === !1) return !1;
            if (e[hasChildren]()) {
                var h = e[children];
                h = h._jk || h, s = s[concat](h)
            }
        }
        return !0
    }

    function _(t, i, n) {
        for (var e, s = (t._jk || t)[slice](0); s[length];) {
            e = s[s.length - 1], s = s.splice(0, s[length] - 1);
            var r = i.call(n, e);
            if (r === !1) return !1;
            if (e.hasChildren()) {
                var h = e[children];
                h = h._jk || h, s = s.concat(h)
            }
        }
        return !0
    }

    function d(t, i) {
        function n(t, n) {
            for (var e = t.length, s = n[length], r = e + s, h = new Array(r), a = 0, o = 0, f = 0; r > f;) h[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
            return h
        }

        function e(t) {
            var i = t.length,
                s = Math[ceil](i / 2);
            return 1 >= i ? t : n(e(t[slice](0, s)), e(t.slice(s)))
        }

        return e(t)
    }

    function l(t, i, n, e) {
        t instanceof fz && (t = t._jk);
        for (var s = 0, r = (t._jk || t).length; r > s; s++) {
            var h = i[call](n, t[s], s, e);
            if (h === !1) return !1
        }
        return !0
    }

    function v(t, i, n) {
        for (var e = t instanceof fz, s = t._jk || t, r = 0, h = s[length]; h > r; r++) {
            var a = s[r];
            i[call](n, a) && (e ? t[remove](a) : t.splice(r, 1), r--, h--)
        }
    }

    function b(t, i, n, e) {
        t instanceof fz && (t = t._jk);
        for (var s = (t._jk || t).length - 1; s >= 0; s--) {
            var r = i[call](n, t[s], s, e);
            if (r === !1) return !1
        }
        return !0
    }

    function y(t) {
        if (t[clone] instanceof Function) return t[clone](!0);
        var i, n = [];
        return l(t, function(t) {
            i = t && t.clone instanceof Function ? t[clone]() : t, n[push](i)
        }, this), n
    }

    function g(t, i, e) {
        e === n || 0 > e ? t[push](i) : t.splice(e, 0, i)
    }

    function p(t, i) {
        var n = t[indexOf](i);
        return 0 > n || n >= t[length] ? !1 : t[splice](n, 1)
    }

    function m(t, i) {
        var n = !1;
        return l(t, function(t) {
            return i == t ? (n = !0, !1) : void 0
        }), n
    }

    function x(t, i) {
        var n = t;
        for (var e in i) if (i.__lookupGetter__) {
            var s = i.__lookupGetter__(e),
                r = i.__lookupSetter__(e);
            s || r ? (s && n.__defineGetter__(e, s), r && n.__defineSetter__(e, r)) : n[e] = i[e]
        } else n[e] = i[e];
        return n
    }

    function E(t, i, n) {
        if (!(t instanceof Function)) throw new Error("subclass must be type of Function");
        var e = null;
        object == typeof i && (e = i, i = t, t = function() {
            i.apply(this, arguments)
        });
        var s = t[prototype],
            r = function() {};
        return r[prototype] = i[prototype], t[prototype] = new r, t.superclass = i[prototype], t.superclass.constructor = i, x(t[prototype], s), e && x(t[prototype], e), n && x(t[prototype], n), t[prototype].class = t, t
    }

    function w(t, i, n) {
        return k(t, i, "constructor", n)
    }

    function k(t, i, n, e) {
        var s = i[superclass];
        if (s) {
            var r = s[n];
            return r ? r[apply](t, e) : void 0
        }
    }

    function T(t, i, n, e) {
        if ("constructor" == n) return M(t, i, e);
        if (i[super_] instanceof Function) {
            var s = i.super_[prototype][n];
            return s instanceof Function ? s[apply](t, e) : void 0
        }
    }

    function M(t, i, n) {
        return i[super_] instanceof Function ? i[super_].apply(t, n) : void 0
    }

    function I(t, i) {
        return t.super_ = i, t[prototype] = Object.create(i.prototype, {
            super_: {
                value: i,
                enumerable: !1
            },
            constructor: {
                value: t,
                enumerable: !1
            }
        }), t
    }

    function O(t, i, n) {
        if (!(t instanceof Function) && t instanceof Object) {
            i = t.super;
            var e;
            return t.hasOwnProperty("constructor") ? (e = t.constructor, delete t.constructor) : e = i ?
                function() {
                    i[apply](this, arguments)
                } : function() {}, O(e, i, t)
        }
        if (i && !(i instanceof Function) && i instanceof Object) return O(t, i.super, i);
        if (i && I(t, i), n) {
            var s = t[prototype];
            for (var r in n) s[r] = n[r]
        }
        return t
    }

    function j(t, i, e, s, r) {
        if (s) return void Object.defineProperty(t, i, {
            value: e,
            enumerable: !0
        });
        var h = {
                configurable: !0,
                enumerable: !0
            },
            a = rh + i;
        e !== n && (t[a] = e), h.get = function() {
            return this[a]
        }, h.set = function(t) {
            var n = this[a];
            if (n == t) return !1;
            var e = new Oz(this, i, t, n);
            return this.beforeEvent(e) ? (this[a] = t, r && r.call(this, t, n), this[hh](e), !0) : !1
        }, Object.defineProperty(t, i, h)
    }

    function S(t, i) {
        for (var n = 0, e = i.length; e > n; n++) {
            var s = i[n];
            j(t, s[ah] || s, s[oh] || s.value, s[fh], s[uh])
        }
    }

    function C(t, i, n) {
        return i instanceof Object ? t = t[ch](i) : i && !n && (n = parseInt(i)), i && !n && (n = parseInt(i)), n ? setTimeout(t, n) : setTimeout(t)
    }

    function A(i, n) {
        return n && (i = i[ch](n)), window[_h](i)
    }

    function L(t, i) {
        return t[dh] = i, t
    }

    function P(t, i) {
        if (!t.hasOwnProperty(lh)) {
            var n = t[vh](bh);
            if (!n) return L(t, i);
            for (var e = n[yh](gh), s = 0, r = e.length; r > s; s++) if (e[s] == i) return;
            return n += gh + i, L(t, n)
        }
        t[lh].add(i)
    }

    function R(t, i) {
        if (!t.hasOwnProperty(lh)) {
            var n = t.getAttribute(bh);
            if (!n || !n.indexOf(i)) return;
            for (var e = "", s = n[yh](gh), r = 0, h = s.length; h > r; r++) s[r] != i && (e += s[r] + gh);
            return L(t, e)
        }
        t[lh][remove](i)
    }

    function D(t) {
        return !isNaN(t) && t instanceof Number || ph == typeof t
    }

    function N(t) {
        return t !== n && (t instanceof String || mh == typeof t)
    }

    function B(t) {
        return t !== n && (t instanceof Boolean || xh == typeof t)
    }

    function $(t) {
        return Array[Eh](t)
    }

    function F(i) {
        i || (i = window[wh]), i.preventDefault ? i[kh]() : i[Th] = !1
    }

    function G(i) {
        i || (i = window[wh]), i.stopPropagation ? i[Mh]() : i[Ih] || (i[Ih] = !0)
    }

    function z(t) {
        F(t), G(t)
    }

    function Y(t) {
        return Math[Oh](Math[jh]() * t)
    }

    function H() {
        return Math[jh]() >= .5
    }

    function q(t) {
        var i = !0;
        for (var n in t) {
            i = !1;
            break
        }
        return i
    }

    function U(t) {
        if (t && t > 0 && 1 > t) {
            var i = Math.floor(16777215 * Math[jh]());
            return Sh + (i >> 16 & 255) + Ch + (i >> 8 & 255) + Ch + (255 & i) + Ch + t[Ah](2) + Lh
        }
        return V(Math.floor(16777215 * Math[jh]()))
    }

    function W(t) {
        return t > 0 ? Math[Oh](t) : Math.ceil(t)
    }

    function X(t) {
        return t > 0 ? Math[ceil](t) : Math[Oh](t)
    }

    function V(t) {
        return 16777216 > t ? Ph + (Rh + t.toString(16)).slice(-6) : Sh + (t >> 16 & 255) + Ch + (t >> 8 & 255) + Ch + (255 & t) + Ch + ((t >> 24 & 255) / 255)[Ah](2) + Lh
    }

    function Z(t, i, n) {
        object != typeof n || n.hasOwnProperty(Dh) || (n[Dh] = !0), Object.defineProperty(t, i, n)
    }

    function J(t, i) {
        for (var n in i) if (Nh != n[0]) {
            var e = i[n];
            object != typeof e || e.hasOwnProperty(Dh) || (e[Dh] = !0)
        }
        Object[Bh](t, i)
    }

    function K(i, n) {
        n || (n = window);
        for (var e = i[yh]($h), s = 0, r = e[length]; r > s; s++) {
            var h = e[s];
            n = n[h]
        }
        return n
    }

    function Q(t) {
        return t instanceof MouseEvent || t instanceof Object && t[Fh] !== n
    }

    function ti(i) {
        window[Gh] && console.log(i)
    }

    function ii(i) {
        window[Gh] && console[zh](i)
    }

    function ni(i) {
        window.console && console[Yh](i)
    }

    function ei(t, i, n) {
        var e, s, r;
        0 == t._my ? (e = -1, r = 0, s = i) : 0 == t._n2 ? (e = 0, r = 1, s = n) : (e = -1 / t._my, s = (t._my - e) * i + t._n0, r = 1);
        var h = new lz;
        return h._my = e, h._n0 = s, h._n2 = r, h._mw = i, h._mu = n, h._kp = Math[Hh](e, r), h[qh] = Math.cos(h._kp), h[Uh] = Math.sin(h._kp), h
    }

    function si(t, i, n, e, s) {
        var r, h;
        i > e ? r = -1 : e > i && (r = 1), n > s ? h = -1 : s > n && (h = 1);
        var a, o;
        if (!r) return o = 0 > h ? t.y : t[Wh], {
            x: i,
            y: o
        };
        if (!h) return a = 0 > r ? t.x : t[Xh], {
            x: a,
            y: n
        };
        var f = (n - s) / (i - e),
            u = n - f * i,
            c = 0 > r ? i - t.x : i - t[Xh],
            _ = 0 > h ? n - t.y : n - t[Wh];
        return Math.abs(f) >= Math.abs(_ / c) ? (o = 0 > h ? t.y : t[Wh], a = (o - u) / f) : (a = 0 > r ? t.x : t[Xh], o = f * a + u), {
            x: a,
            y: o
        }
    }

    function ri(t, i, n, e, s, r, h, a) {
        return 0 >= h || 0 >= a || 0 >= n || 0 >= e ? !1 : (h += s, a += r, n += t, e += i, (s > h || h > t) && (r > a || a > i) && (t > n || n > s) && (i > e || e > r))
    }

    function hi(t, i, n, e, s, r) {
        return s >= t && t + n >= s && r >= i && i + e >= r
    }

    function ai(t, i, n, e, s, r, h, a, o) {
        return o && (t -= o, i -= o, n += o + o, e += o + o), s >= t && r >= i && t + n >= s + h && i + e >= r + a
    }

    function oi(t, i, n, e, s, r, h, a) {
        var o = t;
        o += n;
        var f = i;
        f += e;
        var u = s;
        u += h;
        var c = r;
        return c += a, s > t && (t = s), r > i && (i = r), o > u && (o = u), f > c && (f = c), o -= t, f -= i, 0 > o || 0 > f ? null : new bz(t, i, o, f)
    }

    function fi(t, i, e) {
        if (N(t) && (t = gz[Vh](t)), !t) return {
            x: 0,
            y: 0
        };
        if (t.x !== n) return {
            x: t.x,
            y: t.y
        };
        var s, r, h = t.horizontalPosition,
            a = t.verticalPosition;
        switch (h) {
            case pz:
                s = 0;
                break;
            case xz:
                s = i;
                break;
            default:
                s = i / 2
        }
        switch (a) {
            case Ez:
                r = 0;
                break;
            case kz:
                r = e;
                break;
            default:
                r = e / 2
        }
        return {
            x: s,
            y: r
        }
    }

    function ui(t, i, n) {
        t[children].add(i, n), t[Zh](i, n)
    }

    function ci(t, i) {
        t._fp && (t._fp[remove](i), t[Jh](i))
    }

    function _i(t) {
        return t[Kh](/^-ms-/, Qh)[Kh](/-([\da-z])/gi, function(t, i) {
            return i.toUpperCase()
        })
    }

    function di(t) {
        return t[Kh](/[A-Z]/g, function(t) {
            return ta + t[ia]()
        }).replace(/^ms-/, na)
    }

    function li(t, i) {
        var n = t[ea];
        if (!n) return !1;
        var e, s;
        for (e in i) i.hasOwnProperty(e) && (s = Hz(e)) && (n[s] = i[e]);
        return t
    }

    function vi(t) {
        var i, n, e = "";
        for (i in t) t.hasOwnProperty(i) && (n = Hz(i)) && (e += di(n) + sa + t[i] + ra);
        return e ? e.substring(0, e[length] - 1) : e
    }

    function bi(t, i, n) {
        (i = Hz(i)) && (t[ea][i] = n)
    }

    function yi(t, i) {
        return zz ? (i && !N(i) && (i = vi(i)), zz[ha] ? void zz.insertRule(t + aa + i + oa, 0) : void(zz.addRule && zz[fa](t, i, 0))) : !1
    }

    function gi(i, n) {
        i.touches && (i = i[ua] && i.changedTouches.length ? i[ua][0] : i.touches[0]);
        var e = n[ca](),
            s = i[_a] || 0,
            r = i[da] || 0;
        return hz && iz && (window[la] && s == i.pageX && (s -= window.pageXOffset), window[va] && r == i[ba] && (r -= window.pageYOffset)), {
            x: s - e.left,
            y: r - e.top
        }
    }

    function pi(t, i, n) {
        this._m4 = t, this[ya] = n, this._handler = i, this[ga] = new xi, this[pa]()
    }

    function mi(t) {
        return nz && t[ma] || !nz && t.ctrlKey
    }

    function xi() {
        this[xa] = []
    }

    function Ei(t, i, n, e, s) {
        ki(t, function(e) {
            if (i) {
                var s = e.responseXML;
                if (!s) return void(n || EY)(Ea + t + wa);
                i(s)
            }
        }, n, e, s)
    }

    function wi(t, i, n, e, s) {
        ki(t, function(e) {
            if (i) {
                var s, r = e[ka];
                if (!r) return (n || EY)(Ea + t + Ta), s = new Error(Ea + t + Ta), i(r, s);
                try {
                    r = JSON[Ma](r)
                } catch (h) {
                    (n || EY)(h), s = h
                }
                i(r, s)
            }
        }, n, e, s)
    }

    function ki(t, i, n, e, s) {
        (n === !1 || e === !1) && (s = !1);
        try {
            var r = new XMLHttpRequest,
                h = encodeURI(t);
            if (s !== !1) {
                var a;
                a = h.indexOf(Ia) > 0 ? "&" : Ia, h += a + Oa + Date.now()
            }
            r[ja](Sa, h), r[Ca] = function() {
                return 4 == r[Aa] ? r[La] && 200 != r[La] ? void(n || EY)(Ea + t + Pa) : void(i && i(r)) : void 0
            }, r[Ra](e)
        } catch (o) {
            (n || EY)(Ea + t + Pa, o)
        }
    }

    function ri(t, i, n, e, s, r, h, a) {
        return 0 >= h || 0 >= a || 0 >= n || 0 >= e ? !1 : (h += s, a += r, n += t, e += i, (s > h || h > t) && (r > a || a > i) && (t > n || n > s) && (i > e || e > r))
    }

    function ai(t, i, n, e, s, r, h, a) {
        return s >= t && r >= i && t + n >= s + h && i + e >= r + a
    }

    function Ti(t, i, n) {
        return t instanceof Object && t.x ? Ii(t, i, 0, 0) : Mi(t, i, n, 0, 0)
    }

    function Mi(t, i, n, e, s) {
        var r = Math.sin(n),
            h = Math.cos(n),
            a = t - e,
            o = i - s;
        return t = a * h - o * r + e, i = a * r + o * h + s, new _z(t, i, n)
    }

    function Ii(t, i, n, e) {
        n = n || 0, e = e || 0;
        var s = Math.sin(i),
            r = Math.cos(i),
            h = t.x - n,
            a = t.y - e;
        return t.x = h * r - a * s + n, t.y = h * s + a * r + e, t
    }

    function Oi(t, i, n) {
        return ji(t, i, n, 0, 0)
    }

    function ji(t, i, n, e, s) {
        var r = Mi(t.x, t.y, i, e, s),
            h = Mi(t.x + t[Da], t.y, i, e, s),
            a = Mi(t.x + t[Da], t.y + t[Na], i, e, s),
            o = Mi(t.x, t.y + t[Na], i, e, s);
        return n ? n.clear() : n = new bz, n.addPoint(r), n.addPoint(h), n.addPoint(a), n[Ba](o), n
    }

    function Si(t, i) {
        var n = this.ratio || 1;
        this[ea][Da] = t + $a, this.style.height = i + $a, this.width = t * n, this.height = i * n
    }

    function Ci(t) {
        var i = t[Fa] || t[Ga] || t[za] || t.oBackingStorePixelRatio || t[Ya] || 1;
        return TY / i
    }

    function Ai(t, n, e) {
        var s = document.createElement(Ha);
        if (s.g = s[qa](Ua), t !== !0 && !e) return t && n && (s.width = t, s[Na] = n), s;
        var r = s.g;
        return r[Wa] = s[Wa] = Ci(r), s[Xa] = Si, r._kr = function() {
            this[Ha][Da] = this[Ha].width
        }, t && n && s[Xa](t, n), s
    }

    function Li(t, i) {
        return MY || (MY = Ai()), t && i && (MY.width = t, MY[Na] = i), MY.g
    }

    function Pi(t, i, n) {
        return (n || oz[Va]) + gh + (i || oz[Za]) + Ja + (t || oz[Ka])
    }

    function Ri(t, i, n, e, s, r, h, a, o, f) {
        if (t[Qa](), t[to](n, e), IY && OY > h) {
            var u = h / OY;
            t[io](u, u), h = OY, f = null
        }
        o || (o = oz[no]), h || (h = oz.FONT_SIZE), o *= h, t[eo] = f || Pi(r, h, a), t.textAlign = s, t[so] = ro;
        for (var c = o / 2, _ = i[yh](ho), d = 0, l = _[length]; l > d; d++) {
            var v = _[d];
            t[ao](v, 0, c), c += o
        }
        t.restore()
    }

    function Di(t, i, n, e, s, r) {
        if (!t) return {
            width: 0,
            height: 0
        };
        if (i || (i = oz[Za]), IY && OY > i) {
            var h = i / OY,
                a = Di(t, OY, n, e, s);
            return a[Da] *= h, a[Na] *= h, a
        }
        var o = Li();
        o.font = r || Pi(n, i, e), s || (s = oz[no]);
        for (var f = i * s, u = 0, c = 0, _ = t[yh](ho), d = 0, l = _.length; l > d; d++) {
            var v = _[d];
            u = Math.max(o[oo](v)[Da], u), c += f
        }
        return {
            width: u,
            height: c
        }
    }

    function Ni(t, i, n, e, s) {
        var r;
        if (XG) try {
            r = t[fo](i, n, e, s)
        } catch (h) {} else r = t.getImageData(i, n, e, s);
        return r
    }

    function Bi(t) {
        return Math.log(t + Math.sqrt(t * t + 1))
    }

    function $i(t, i) {
        i = i || t(1);
        var n = 1 / i,
            e = .5 * n,
            s = Math.min(1, i / 100);
        return function(r) {
            if (0 >= r) return 0;
            if (r >= i) return 1;
            for (var h = r * n, a = 0; a++ < 10;) {
                var o = t(h),
                    f = r - o;
                if (Math.abs(f) <= s) return h;
                h += f * e
            }
            return h
        }
    }

    function Fi(t, i, n) {
        var e = 1 - t,
            s = e * e * i[0] + 2 * e * t * i[2] + t * t * i[4],
            r = e * e * i[1] + 2 * e * t * i[3] + t * t * i[5];
        if (n) {
            var h = (i[0] + i[4] - 2 * i[2]) * t + i[2] - i[0],
                a = (i[1] + i[5] - 2 * i[3]) * t + i[3] - i[1];
            return {
                x: s,
                y: r,
                rotate: Math[Hh](a, h)
            }
        }
        return {
            t: t,
            x: s,
            y: r
        }
    }

    function Gi(t, i, n) {
        var e = t - 2 * i + n;
        return 0 != e ? (t - i) / e : -1
    }

    function zi(t, i) {
        i.add(t[4], t[5]);
        var n = Gi(t[0], t[2], t[4]);
        if (n > 0 && 1 > n) {
            var e = Fi(n, t);
            i.add(e.x, e.y)
        }
        var s = Gi(t[1], t[3], t[5]);
        if (s > 0 && 1 > s) {
            var e = Fi(s, t);
            i.add(e.x, e.y)
        }
        return i
    }

    function Yi(t, i) {
        return Math.abs(t - i) < 1e-7
    }

    function Hi(t) {
        if (Yi(t[1], t[3]) && (Yi(t[0], t[2]) || Yi(t[1], t[5]))) {
            var i = t[0],
                n = t[1],
                e = t[4],
                s = t[5],
                r = Math.sqrt(jY(i, n, e, s));
            return function(t) {
                return r * t
            }
        }
        var h = t[0],
            a = t[2],
            o = t[4],
            f = h - 2 * a + o,
            u = 2 * a - 2 * h;
        h = t[1], a = t[3], o = t[5];
        var c = h - 2 * a + o,
            _ = 2 * a - 2 * h,
            d = 4 * (f * f + c * c),
            l = 4 * (f * u + c * _),
            v = u * u + _ * _,
            r = 4 * d * v - l * l,
            b = 1 / r,
            y = .125 * Math.pow(d, -1.5),
            g = 2 * Math.sqrt(d),
            p = (r * Bi(l / Math[uo](r)) + 2 * Math[uo](d) * l * Math[uo](v)) * y;
        return function(t) {
            var i = l + 2 * t * d,
                n = i / Math[uo](r),
                e = i * i * b;
            return (r * Math.log(n + Math[uo](e + 1)) + g * i * Math.sqrt(v + t * l + t * t * d)) * y - p
        }
    }

    function qi(t, i, n) {
        var e = 1 - t,
            s = i[0],
            r = i[2],
            h = i[4],
            a = i[6],
            o = s * e * e * e + 3 * r * t * e * e + 3 * h * t * t * e + a * t * t * t;
        if (n) var f = 3 * t * t * a + (6 * t - 9 * t * t) * h + (9 * t * t - 12 * t + 3) * r + (-3 * t * t + 6 * t - 3) * s;
        s = i[1], r = i[3], h = i[5], a = i[7];
        var u = s * e * e * e + 3 * r * t * e * e + 3 * h * t * t * e + a * t * t * t;
        if (n) {
            var c = 3 * t * t * a + (6 * t - 9 * t * t) * h + (9 * t * t - 12 * t + 3) * r + (-3 * t * t + 6 * t - 3) * s;
            return {
                x: o,
                y: u,
                rotate: Math.atan2(c, f)
            }
        }
        return {
            x: o,
            y: u
        }
    }

    function Ui(t, i, n, e) {
        var s = -t + 3 * i - 3 * n + e;
        if (0 == s) return [(t - i) / (2 * n - 4 * i + 2 * t)];
        var r = 2 * t - 4 * i + 2 * n,
            h = i - t,
            a = r * r - 4 * s * h;
        return 0 > a ? void 0 : 0 == a ? [-r / (2 * s)] : (a = Math[uo](a), [(a - r) / (2 * s), (-a - r) / (2 * s)])
    }

    function Wi(t, i) {
        i.add(t[6], t[7]);
        var n = Ui(t[0], t[2], t[4], t[6]);
        if (n) for (var e = 0; e < n[length]; e++) {
            var s = n[e];
            if (!(0 >= s || s >= 1)) {
                var r = qi(s, t);
                i.add(r.x, r.y)
            }
        }
        if (n = Ui(t[1], t[3], t[5], t[7])) for (var e = 0; e < n[length]; e++) {
            var s = n[e];
            if (!(0 >= s || s >= 1)) {
                var r = qi(s, t);
                i.add(r.x, r.y)
            }
        }
    }

    function Xi(t) {
        var i = {
                x: t[0],
                y: t[1]
            },
            n = {
                x: t[2],
                y: t[3]
            },
            e = {
                x: t[4],
                y: t[5]
            },
            s = {
                x: t[6],
                y: t[7]
            },
            r = i.x - 0,
            h = i.y - 0,
            a = n.x - 0,
            o = n.y - 0,
            f = e.x - 0,
            u = e.y - 0,
            c = s.x - 0,
            _ = s.y - 0,
            d = 3 * (-r + 3 * a - 3 * f + c),
            l = 6 * (r - 2 * a + f),
            v = 3 * (-r + a),
            b = 3 * (-h + 3 * o - 3 * u + _),
            y = 6 * (h - 2 * o + u),
            g = 3 * (-h + o),
            p = function(t) {
                var i = d * t * t + l * t + v,
                    n = b * t * t + y * t + g;
                return Math[uo](i * i + n * n)
            },
            m = (p(0) + 4 * p(.5) + p(1)) / 6;
        return m
    }

    function Vi(t, i) {
        function n(t, i, n, e) {
            var s = -t + 3 * i - 3 * n + e,
                r = 2 * t - 4 * i + 2 * n,
                h = i - t;
            return function(t) {
                return 3 * (s * t * t + r * t + h)
            }
        }

        function e(t, i) {
            var n = s(t),
                e = r(t);
            return Math[uo](n * n + e * e) * i
        }

        var s = n(t[0], t[2], t[4], t[6]),
            r = n(t[1], t[3], t[5], t[7]);
        i = i || 100;
        var h = 1 / i;
        return function(t) {
            if (!t) return 0;
            for (var i, n = 0, s = 0;;) {
                if (i = n + h, i >= t) return s += e(n, i - n);
                s += e(n, h), n = i
            }
        }
    }

    function Zi(t, i, n) {
        return jY(i, n, t.cx, t.cy) <= t[co] + SY
    }

    function Ji(t, i, n, e) {
        return n = n || Ki(t, i), new Qi((t.x + i.x) / 2, (t.y + i.y) / 2, n / 2, t, i, null, e)
    }

    function Ki(t, i) {
        return dz(t.x, t.y, i.x, i.y)
    }

    function Qi(t, i, n, e, s, r, h) {
        this.cx = t, this.cy = i, this.r = n, this[co] = n * n, this.p1 = e, this.p2 = s, this.p3 = r, this._otherPoint = h
    }

    function tn(t, i, n, e) {
        this.cx = t, this.cy = i, this[Da] = n, this[Na] = e
    }

    function nn(t) {
        var i = t[0],
            n = t[1],
            e = t[2],
            s = Qi[_o](i, n, e);
        return sn(t, i, n, e, s)
    }

    function en(t, i) {
        i = i || rn(t);
        for (var n, e = i[Da] / i[Na], s = [], r = t.length, h = 0; r > h; h++) n = t[h], s[push]({
            x: n.x,
            y: n.y * e
        });
        var a = nn(s);
        return a ? new tn(a.cx, a.cy / e, 2 * a.r, 2 * a.r / e) : void 0
    }

    function sn(t, i, n, e, s) {
        for (var r, h, a = t[length], o = s[co], f = 0; a > f; f++) if (r = t[f], r != i && r != n && r != e) {
            var u = jY(s.cx, s.cy, r.x, r.y);
            u - SY > o && (o = u, h = r)
        }
        if (!h) return s;
        var c, _ = Qi[_o](h, i, n),
            d = Qi[_o](h, i, e),
            l = Qi._jhCircle(h, e, n);
        return Zi(_, e.x, e.y) && (c = _), Zi(d, n.x, n.y) && (!c || c.r > d.r) && (c = d), Zi(l, i.x, i.y) && (!c || c.r > l.r) && (c = l), i = c.p1, n = c.p2, e = c.p3 || c[lo], sn(t, i, n, e, c)
    }

    function rn(t) {
        for (var i, n = t[length], e = new bz, s = 0; n > s; s++) i = t[s], e.add(i.x, i.y);
        return e
    }

    function hn(t, i, n, e, s) {
        this._6b && this[vo]();
        var r = s ? this.getBounds(s) : this[bo],
            h = n / r[Da],
            a = t - h * r.x,
            o = e / r[Na],
            f = i - o * r.y,
            u = this._fk,
            c = [];
        return l(u, function(t) {
            var i = t.clone(),
                n = i[xa];
            if (n && n[length]) {
                for (var e = n.length, s = [], r = 0; e > r; r++) {
                    var u = n[r];
                    r++;
                    var _ = n[r];
                    u = h * u + a, _ = o * _ + f, s[push](u), s[push](_)
                }
                i[xa] = s
            }
            c.push(i)
        }, this), new aH(c)
    }

    function an(t, i, n, e, s, r) {
        if (s = s || 0, n = n || 0, !s && !r) return !1;
        if (!e) {
            var h = this[yo](s);
            if (!h[go](t, i, n)) return !1
        }
        var a = Math[po](2 * n) || 1,
            o = Li(a, a),
            f = (o[Ha], -t + n),
            u = -i + n;
        if (o[mo](1, 0, 0, 1, f, u), !o[xo]) {
            this._lg(o), s && o[Eo](), r && o[wo]();
            var c = Ni(o, 0, 0, a, a);
            if (!c) return !1;
            c = c[ko];
            for (var _ = c[length] / 4; _ > 0;) {
                if (c[4 * _ - 1] > hH) return !0;
                --_
            }
            return !1
        }
        return o[To] = (s || 0) + 2 * n, this._lg(o), s && o.isPointInStroke(n, n) ? !0 : r ? o[Mo](n, n) : !1
    }

    function on(t, i, n) {
        if (!this._j4) return null;
        var e = this._fk;
        if (e[length] < 2) return null;
        n === !1 && (t += this._j4);
        var s = e[0];
        if (0 >= t) return Fs(s[xa][0], s.points[1], e[1][xa][0], e[1][xa][1], t, i);
        if (t >= this._j4) {
            s = e[e.length - 1];
            var r, h, a = s.points,
                o = a[length],
                f = a[o - 2],
                u = a[o - 1];
            if (o >= 4) r = a[o - 4], h = a[o - 3];
            else {
                s = e[e[length] - 2];
                var c = s[Io];
                r = c.x, h = c.y
            }
            return Fs(f, u, f + f - r, u + u - h, t - this._j4, i)
        }
        for (var _, d = 0, l = 1, o = e[length]; o > l; l++) if (_ = e[l], _._j4) {
            if (!(d + _._j4 < t)) {
                var v, c = s[Io];
                if (_[Oo] == eH) {
                    var b = _.points;
                    v = fn(t - d, _, c.x, c.y, b[0], b[1], b[2], b[3], _._r)
                } else {
                    if (!_._lf) return Fs(c.x, c.y, _[xa][0], _[xa][1], t - d, i);
                    var y = $i(_._lf, _._j4)(t - d),
                        b = _[xa];
                    v = _[Oo] == nH && 6 == b.length ? qi(y, [c.x, c.y][concat](b), !0) : Fi(y, [c.x, c.y][concat](b), !0)
                }
                return i && (v.x -= i * Math.sin(v[jo] || 0), v.y += i * Math.cos(v[jo] || 0)), v
            }
            d += _._j4, s = _
        } else s = _
    }

    function fn(t, i, n, e, s, r, h, a) {
        if (t <= i._l1) return Fs(n, e, s, r, t, t);
        if (t >= i._j4) return t -= i._j4, Fs(i[So], i[Co], h, a, t, t);
        if (t -= i._l1, i._o) {
            var o = t / i._r;
            i[Ao] && (o = -o);
            var f = Mi(i._p1x, i._p1y, o, i._o.x, i._o.y);
            return f.rotate += i._my1 || 0, f[jo] += Math.PI, f
        }
        return Fs(i._p1x, i[Lo], i[So], i[Co], t, t)
    }

    function ei(t, i, n) {
        var e, s, r;
        0 == t._my ? (e = -1, r = 0, s = i) : 0 == t._n2 ? (e = 0, r = 1, s = n) : (e = -1 / t._my, s = (t._my - e) * i + t._n0, r = 1);
        var h = new lz;
        return h._my = e, h._n0 = s, h._n2 = r, h._mw = i, h._mu = n, h
    }

    function un(t) {
        return t %= 2 * Math.PI, 0 > t && (t += 2 * Math.PI), t
    }

    function cn(t, i, n, e, s, r, h, a) {
        var o = dz(i, n, e, s),
            f = dz(e, s, r, h);
        if (!o || !f) return t._d = 0, t._r = 0, t._l1 = o, t._l2 = f, t._j4 = 0;
        var u = dn(e, s, i, n),
            c = dn(e, s, r, h);
        t._my1 = u, t[Po] = c;
        var _ = u - c;
        _ = un(_), _ > Math.PI && (_ = 2 * Math.PI - _, t[Ao] = !0);
        var d = Math.PI - _,
            l = Math.tan(_ / 2),
            v = a / l,
            b = Math.min(o, f);
        v > b && (v = b, a = l * v);
        var y, g = e + Math.cos(u) * v,
            p = s + Math.sin(u) * v,
            m = e + Math.cos(c) * v,
            x = s + Math.sin(c) * v,
            E = new lz(i, n, e, s),
            w = new lz(e, s, r, h),
            k = ei(E, g, p),
            T = ei(w, m, x),
            M = k._3n(T),
            I = Math[Hh](p - M.y, g - M.x),
            O = Math[Hh](x - M.y, m - M.x);
        y = t._CCW ? O : I;
        for (var j, S = 0; 4 > S;) {
            var C = S * uz;
            if (un(C - y) <= d) {
                var A, L;
                if (j ? j++ : j = 1, 0 == S ? (A = M.x + a, L = M.y) : 1 == S ? (A = M.x, L = M.y + a) : 2 == S ? (A = M.x - a, L = M.y) : (A = M.x, L = M.y - a), t[Ro + j] = {
                        x: A,
                        y: L
                    }, 2 == j) break
            }
            S++
        }
        return t._p1x = g, t[Lo] = p, t[So] = m, t._p2y = x, t._o = M, t._d = v, t._r = a, t._l1 = o - v, t._l2 = f - v, t._j4 = t._l1 + d * a
    }

    function _n(t, i, n, e, s, r, h) {
        var a = dn(n, e, t, i),
            o = dn(n, e, s, r),
            f = a - o;
        return h ? f : (0 > f && (f = -f), f > Math.PI && (f -= Math.PI), f)
    }

    function dn(t, i, n, e) {
        return Math[Hh](e - i, n - t)
    }

    function ln(t) {
        var i = AY[Do](t);
        if (i) return i[1];
        var n = t[No]($h);
        return n >= 0 && n < t.length - 1 ? t[Bo](n + 1) : void 0
    }

    function vn(t) {
        if (!t) return null;
        if (t instanceof aH) return $Y;
        if (t[$o] instanceof Function) return BY;
        if (N(t)) {
            var i = ln(t);
            if (i) {
                if (!XG && LY[Fo](i)) return NY;
                if (PY.test(i)) return DY
            }
            return RY
        }
    }

    function bn(t, i, n) {
        if (this._le = vn(t), !this._le) throw new Error("the image format is not supported", t);
        this._m5 = t, this._myl = i, this._9p = n, this[Da] = i || oz[Go], this.height = n || oz.IMAGE_HEIGHT, this._je = {}
    }

    function yn(t, i, n, e) {
        return i ? (YY[t] = new bn(i, n, e), t) : void delete YY[t]
    }

    function gn(t) {
        if (t._ku) return t._ku;
        var i = N(t);
        if (!i && !t[ah]) return t._ku = new bn(t);
        var n = t[ah] || t;
        return n in YY ? YY[n] : YY[n] = new bn(t)
    }

    function pn(t) {
        return t in YY
    }

    function mn(t, i, n) {
        n = n || {};
        var e = t.getBounds(n[To]);
        if (!e.width || !e.height) return !1;
        var s = i.getContext(Ua),
            r = i[Wa] || 1,
            h = n[zo] || Yo,
            a = /full/i.test(h),
            o = /uniform/i [Fo](h),
            f = 1,
            u = 1;
        if (a) {
            var c = i.width,
                _ = i[Na],
                d = n[Ho],
                l = 0,
                v = 0;
            if (d) {
                var b, y, g, p;
                D(d) ? b = y = g = p = d : (b = d.top || 0, y = d[Wh] || 0, g = d[qo] || 0, p = d[Xh] || 0), c -= g + p, _ -= b + y, l += g, v += b
            }
            f = c / e[Da], u = _ / e.height, o && (f > u ? (l += (c - u * e[Da]) / 2, f = u) : u > f && (v += (_ - f * e.height) / 2, u = f)), (l || v) && s.translate(l, v)
        }
        s.translate(-e.x * f, -e.y * u), t.draw(s, r, n, f, u, !0)
    }

    function xn(t, i, n) {
        var e = gn(t);
        return e ? (e[vo](), (e._le == NY || e._72()) && e[Uo](function(t) {
            t[Wo] && (this[Da] = this[Da], mn(t[Wo], this, n))
        }, i), void mn(e, i, n)) : (wY[Yh](Xo + t), !1)
    }

    function En(t, i, e, s) {
        var r = t.length;
        if (r && !(0 > r)) {
            s = s || 1;
            for (var h, a, o, f = [], u = 0; u++ < r;) if (h = t[Vo](u, 0), h && dz(i, e, h.x, h.y) <= s) {
                a = u, o = h[jo];
                break
            }
            if (a !== n) {
                for (var h, c, _, d = 0, u = 0, l = t._fk[length]; l > u; u++) {
                    if (h = t._fk[u], !c && (d += h._j4 || 0, d > a)) if (c = !0, h[Oo] == tH || h.type == sH) f.push(new rH(tH, [i, e]));
                    else {
                        var v = Math.max(10, h._j4 / 6),
                            b = v * Math.sin(o),
                            y = v * Math.cos(o);
                        if (h[Oo] == nH) {
                            var g = h[xa][0],
                                p = h[xa][1];
                            if (_) {
                                var m = new lz(i, e, i + y, e + b),
                                    x = m._3n(new lz(_.lastPoint.x, _[Io].y, h[xa][0], h.points[1]));
                                x.x !== n && (g = x.x, p = x.y)
                            }
                            f[push](new rH(nH, [g, p, i - y, e - b, i, e]))
                        } else f.push(new rH(iH, [i - y, e - b, i, e]));
                        if (h[xa]) if (h.type == nH) {
                            h[xa][0] = i + y, h[xa][1] = e + b;
                            var m = new lz(i, e, i + y, e + b),
                                x = m._3n(new lz(h[xa][2], h[xa][3], h[xa][4], h.points[5]));
                            x.x !== n && (h[xa][2] = x.x, h[xa][3] = x.y)
                        } else if (h.type == iH) {
                            h.type = nH, h[xa] = [i + y, e + b][concat](h[xa]);
                            var m = new lz(i, e, i + y, e + b),
                                x = m._3n(new lz(h[xa][2], h.points[3], h[xa][4], h[xa][5]));
                            x.x !== n && (h[xa][2] = x.x, h[xa][3] = x.y)
                        } else h[Oo] == tH && (h.type = iH, h[xa] = [i + y, e + b][concat](h[xa]), u == l - 1 && (h[Zo] = !0))
                    }
                    f[push](h), _ = h
                }
                return f
            }
        }
    }

    function wn(t) {
        var i = t[Da],
            n = t[Na],
            e = Ni(t.g, 0, 0, i, n);
        return e ? Tn(e.data, i, n) : void 0
    }

    function kn(t, i, n) {
        this._$v(t, i, n)
    }

    function Tn(t, i, n) {
        return new kn(t, i, n)
    }

    function Mn(t) {
        if (Ph == t[0]) {
            if (t = t[Bo](1), 3 == t.length) t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2];
            else if (6 != t[length]) return;
            return t = parseInt(t, 16), [t >> 16 & 255, t >> 8 & 255, 255 & t]
        }
        if (/^rgb/i [Fo](t)) {
            var i = t[indexOf](Jo),
                n = t[indexOf](Lh);
            if (0 > i || i > n) return;
            if (t = t.substring(i + 1, n), t = t[yh](Ch), t[length] < 3) return;
            var e = parseInt(t[0]),
                s = parseInt(t[1]),
                r = parseInt(t[2]),
                h = 3 == t[length] ? 255 : parseInt(t[3]);
            return [e, s, r, h]
        }
    }

    function In(t, i, n) {
        return n || (n = oz[Ko]), n == kY.BLEND_MODE_MULTIPLY ? t * i : n == kY[Qo] ? Math.min(t, i) : n == kY[tf] ? 1 - (1 - i) / t : n == kY.BLEND_MODE_LINEAR_BURN ? t + i - 1 : n == kY.BLEND_MODE_LIGHTEN ? Math.max(t, i) : n == kY.BLEND_MODE_SCREEN ? t + i - t * i : i
    }

    function On(t, i, n) {
        var e = Mn(i);
        if (!e) return void wY[Yh](nf + i + ef);
        var s = Ni(t.g, 0, 0, t[Da], t.height);
        if (s) {
            var r = s[ko];
            if (n instanceof Function) r = n(t, r, e) || r;
            else {
                var h = e[0] / 255,
                    a = e[1] / 255,
                    o = e[2] / 255;
                if (n == kY[sf]) for (var f = 0, u = r.length; u > f; f += 4) {
                    var c = 77 * r[f] + 151 * r[f + 1] + 28 * r[f + 2] >> 8;
                    r[f] = c * h | 0, r[f + 1] = c * a | 0, r[f + 2] = c * o | 0
                } else for (var f = 0, u = r[length]; u > f; f += 4) r[f] = 255 * In(h, r[f] / 255, n) | 0, r[f + 1] = 255 * In(a, r[f + 1] / 255, n) | 0, r[f + 2] = 255 * In(o, r[f + 2] / 255, n) | 0
            }
            var t = Ai(t.width, t.height);
            return t.g[rf](s, 0, 0), t
        }
    }

    function jn(t, i, n, e) {
        return 1 > n && (n = 1), Sn(t - n, i - n, 2 * n, 2 * n, e)
    }

    function Sn(t, i, n, e, s) {
        n = Math.round(n) || 1, e = Math[po](e) || 1;
        var r = Li(n, e);
        r[mo](1, 0, 0, 1, -t, -i), s.draw(r);
        var h = Ni(r, 0, 0, n, e);
        if (!h) return !1;
        h = h[ko];
        for (var a = h[length] / 4; a-- > 0;) if (h[4 * a - 1] > hH) return !0;
        return !1
    }

    function Cn(t, i, n, e, s, r) {
        t -= s.$x, i -= s.$y;
        var h = s._fl[hf](t, i, n, e);
        if (!h) return !1;
        t = h.x * r, i = h.y * r, n = h[Da] * r, e = h[Na] * r, n = Math[po](n) || 1, e = Math[po](e) || 1;
        var a = Li(),
            o = a.canvas;
        o.width < n || o[Na] < e ? (o.width = n, o[Na] = e) : (a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, n, e)), a[mo](1, 0, 0, 1, -t - s.$x * r, -i - s.$y * r), a.scale(r, r), s._j7(a, 1);
        var f = Ni(a, 0, 0, n, e);
        if (!f) return !1;
        f = f[ko];
        for (var u = f.length / 4; u-- > 0;) if (f[4 * u - 1] > hH) return !0;
        return !1
    }

    function An(t, i, n, e, s, r, h, a, o) {
        if (hi(t, i, n, e, a, o)) return null;
        var f, u, c, _ = new rH(tH, [t + n - s, i]),
            d = new rH(iH, [t + n, i, t + n, i + r]),
            l = new rH(tH, [t + n, i + e - r]),
            v = new rH(iH, [t + n, i + e, t + n - s, i + e]),
            b = new rH(tH, [t + s, i + e]),
            y = new rH(iH, [t, i + e, t, i + e - r]),
            g = new rH(tH, [t, i + r]),
            p = new rH(iH, [t, i, t + s, i]),
            m = (new rH(sH), [_, d, l, v, b, y, g, p]),
            x = new bz(t + s, i + r, n - s - s, e - r - r);
        t > a ? (f = pz, c = 5) : a > t + n ? (f = xz, c = 1) : (f = mz, c = 0), i > o ? (u = Ez, f == pz && (c = 7)) : o > i + e ? (u = kz, f == xz ? c = 3 : f == mz && (c = 4)) : (u = wz, f == pz ? c = 6 : f == xz && (c = 2));
        var E = Bn(c, t, i, n, e, s, r, h, a, o, x),
            w = E[0],
            k = E[1],
            T = new aH,
            M = T._fk;
        M.push(new rH(QY, [w.x, w.y])), M.push(new rH(tH, [a, o])), M[push](new rH(tH, [k.x, k.y])), k._m7 && (M.push(k._m7), k[af]++);
        for (var I = k[af] % 8, O = w[af]; M[push](m[I]), ++I, I %= 8, I != O;);
        return w._m7 && M.push(w._m7), T[of](), T
    }

    function Ln(t, i, e, s, r, h, a, o, f, u, c, _, d, l) {
        var v = new lz(_, d, e, s),
            b = new lz(i[0], i[1], i[4], i[5]),
            y = b._3n(v, c),
            g = y[0],
            p = y[1];
        if (g[ff] !== n) {
            g[af] = (t - 1) % 8, p[af] = (t + 1) % 8;
            var m = g[ff];
            7 == t ? (g.y = h + u + Math.min(l.height, m), p.x = r + f + Math.min(l.width, m)) : 5 == t ? (g.x = r + f + Math.min(l[Da], m), p.y = h + o - u - Math.min(l[Na], m)) : 3 == t ? (g.y = h + o - u - Math.min(l[Na], m), p.x = r + a - f - Math.min(l[Da], m)) : 1 == t && (g.x = r + a - f - Math.min(l[Da], m), p.y = h + u + Math.min(l[Na], m))
        } else {
            v._mk(v._mw, v._mu, g.x, g.y), g = v._$d(i), v._mk(v._mw, v._mu, p.x, p.y), p = v._$d(i);
            var x = $n(i, [g, p]),
                E = x[0],
                w = x[2];
            g[af] = t, p[af] = t, g._m7 = new rH(iH, E.slice(2)), p._m7 = new rH(iH, w[slice](2))
        }
        return [g, p]
    }

    function Pn(t, i, n, e, s, r, h, a, o, f) {
        var u, c;
        if (o - a >= i + r) u = {
            y: n,
            x: o - a
        }, u[af] = 0;
        else {
            u = {
                y: n + h,
                x: Math.max(i, o - a)
            };
            var _ = [i, n + h, i, n, i + r, n],
                d = new lz(o, f, u.x, u.y);
            if (u = d._$d(_)) {
                $(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = $n(_, [u]);
                l = l[0], l && (u._m7 = new rH(iH, l[slice](2))), u._m7NO = 7
            } else u = {
                y: n,
                x: i + r
            }, u[af] = 0
        }
        if (i + e - r >= o + a) c = {
            y: n,
            x: o + a
        }, c[af] = 0;
        else {
            c = {
                y: n + h,
                x: Math.min(i + e, o + a)
            };
            var v = [i + e - r, n, i + e, n, i + e, n + h],
                d = new lz(o, f, c.x, c.y);
            if (c = d._$d(v)) {
                $(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = $n(v, [c]);
                l && l[l[length] - 1] && (c._m7 = new rH(iH, l[l[length] - 1][slice](2))), c[af] = 1
            } else c = {
                y: n,
                x: i + e - r
            }, c[af] = 0
        }
        return [u, c]
    }

    function Rn(t, i, n, e, s, r, h, a, o, f) {
        var u, c;
        if (f - a >= n + h) u = {
            x: i + e,
            y: f - a
        }, u._m7NO = 2;
        else {
            u = {
                x: i + e - r,
                y: Math.max(n, f - a)
            };
            var _ = [i + e - r, n, i + e, n, i + e, n + h],
                d = new lz(o, f, u.x, u.y);
            if (u = d._$d(_)) {
                $(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = $n(_, [u]);
                l = l[0], l && (u._m7 = new rH(iH, l[slice](2))), u[af] = 1
            } else u = {
                x: i + e,
                y: n + h
            }, u[af] = 2
        }
        if (n + s - h >= f + a) c = {
            x: i + e,
            y: f + a
        }, c._m7NO = 2;
        else {
            c = {
                x: i + e - r,
                y: Math.min(n + s, f + a)
            };
            var v = [i + e, n + s - h, i + e, n + s, i + e - r, n + s],
                d = new lz(o, f, c.x, c.y);
            if (c = d._$d(v)) {
                $(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = $n(v, [c]);
                l[1] && (c._m7 = new rH(iH, l[1].slice(2))), c[af] = 3
            } else c = {
                x: i + e,
                y: n + s - h
            }, c[af] = 2
        }
        return [u, c]
    }

    function Dn(t, i, n, e, s, r, h, a, o, f) {
        var u, c;
        if (o - a >= i + r) c = {
            y: n + s,
            x: o - a
        }, c[af] = 4;
        else {
            c = {
                y: n + s - h,
                x: Math.max(i, o - a)
            };
            var _ = [i + r, n + s, i, n + s, i, n + s - h],
                d = new lz(o, f, c.x, c.y);
            if (c = d._$d(_)) {
                $(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = $n(_, [c]);
                l = l[l.length - 1], l && (c._m7 = new rH(iH, l[slice](2))), c[af] = 5
            } else c = {
                y: n + s,
                x: i + r
            }, c._m7NO = 4
        }
        if (i + e - r >= o + a) u = {
            y: n + s,
            x: o + a
        }, u._m7NO = 4;
        else {
            u = {
                y: n + s - h,
                x: Math.min(i + e, o + a)
            };
            var v = [i + e, n + s - h, i + e, n + s, i + e - r, n + s],
                d = new lz(o, f, u.x, u.y);
            if (u = d._$d(v)) {
                $(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = $n(v, [u]);
                l[0] && (u._m7 = new rH(iH, l[0][slice](2))), u._m7NO = 3
            } else u = {
                y: n + s,
                x: i + e - r
            }, u[af] = 4
        }
        return [u, c]
    }

    function Nn(t, i, n, e, s, r, h, a, o, f) {
        var u, c;
        if (f - a >= n + h) c = {
            x: i,
            y: f - a
        }, c._m7NO = 6;
        else {
            c = {
                x: i + r,
                y: Math.max(n, f - a)
            };
            var _ = [i, n + h, i, n, i + r, n],
                d = new lz(o, f, c.x, c.y);
            if (c = d._$d(_)) {
                $(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = $n(_, [c]);
                l = l[l[length] - 1], l && (c._m7 = new rH(iH, l.slice(2)))
            } else c = {
                x: i,
                y: n + h
            };
            c[af] = 7
        }
        if (n + s - h >= f + a) u = {
            x: i,
            y: f + a
        }, u[af] = 6;
        else {
            u = {
                x: i + r,
                y: Math.min(n + s, f + a)
            };
            var v = [i + r, n + s, i, n + s, i, n + s - h],
                d = new lz(o, f, u.x, u.y);
            if (u = d._$d(v)) {
                $(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = $n(v, [u]);
                l[0] && (u._m7 = new rH(iH, l[0][slice](2))), u._m7NO = 5
            } else u = {
                x: i,
                y: n + s - h
            }, u[af] = 6
        }
        return [u, c]
    }

    function Bn(t, i, n, e, s, r, h, a, o, f, u) {
        var c = a / 2;
        switch (t) {
            case 7:
                var _ = [i, n + h, i, n, i + r, n],
                    d = i + r,
                    l = n + h;
                return Ln(t, _, d, l, i, n, e, s, r, h, a, o, f, u);
            case 5:
                return _ = [i + r, n + s, i, n + s, i, n + s - h], d = i + r, l = n + s - h, Ln(t, _, d, l, i, n, e, s, r, h, a, o, f, u);
            case 3:
                return _ = [i + e, n + s - h, i + e, n + s, i + e - r, n + s], d = i + e - r, l = n + s - h, Ln(t, _, d, l, i, n, e, s, r, h, a, o, f, u);
            case 1:
                return _ = [i + e - r, n, i + e, n, i + e, n + h], d = i + e - r, l = n + h, Ln(t, _, d, l, i, n, e, s, r, h, a, o, f, u);
            case 0:
                return Pn(t, i, n, e, s, r, h, c, o, f, u);
            case 2:
                return Rn(t, i, n, e, s, r, h, c, o, f, u);
            case 4:
                return Dn(t, i, n, e, s, r, h, c, o, f, u);
            case 6:
                return Nn(t, i, n, e, s, r, h, c, o, f, u)
        }
    }

    function $n(t, i) {
        for (var e, s, r, h, a, o, f = t[0], u = t[1], c = t[2], _ = t[3], d = t[4], l = t[5], v = [], b = 0; b < i[length]; b++) a = i[b], o = a.t, 0 != o && 1 != o ? (e = f + (c - f) * o, s = u + (_ - u) * o, r = c + (d - c) * o, h = _ + (l - _) * o, v.push([f, u, e, s, a.x, a.y]), f = a.x, u = a.y, c = r, _ = h) : v[push](null);
        return r !== n && v[push]([a.x, a.y, r, h, d, l]), v
    }

    function Fn(t) {
        return this.$layoutByAnchorPoint && this._myt && (t.x -= this[uf].x, t.y -= this[uf].y), this.$rotate && Ii(t, this[cf]), t.x += this[_f] || 0, t.y += this[df] || 0, this[lf] && this[vf] ? Ii(t, this[vf]) : t
    }

    function Gn(t) {
        return this[lf] && this[vf] && Ii(t, -this[vf]), t.x -= this[_f] || 0, t.y -= this.$offsetY || 0, this.$rotate && Ii(t, -this[cf]), this[bf] && this[uf] && (t.x += this._myt.x, t.y += this[uf].y), t
    }

    function zn() {
        var t = this[yf];
        this[yf] && (this.$invalidateSize = !1, this[gf] = !0, this._7q[pf](this._jb), this[mf] && this._7q[xf](this[mf]), this[Ef] && this._7q[xf](this[Ef]));
        var i = this._$m();
        if (i) var n = this.showPointer && this.$pointerWidth;
        return this[gf] && this.$layoutByAnchorPoint && (this.$invalidateAnchorPoint = !1, n && (t = !0), this[uf] = fi(this[wf], this._7q[Da], this._7q.height), this[uf].x += this._7q.x, this._myt.y += this._7q.y), i ? (t && (this[kf] = !0, Yn[call](this, n)), this._n0ackgroundGradientInvalidateFlag && (this[kf] = !1, this[Tf] = this.backgroundGradient && this[Mf] && this[Mf][bo] ? HY.prototype.generatorGradient[call](this[If], this[Mf][bo]) : null), t) : (this.__mgPointer = !1, t)
    }

    function Yn(t) {
        var i = this._7q.x + this[Ef] / 2,
            n = this._7q.y + this[Ef] / 2,
            e = this._7q[Da] - this.$border,
            s = this._7q[Na] - this[Ef],
            r = 0,
            h = 0;
        if (this.$borderRadius && (D(this[Of]) ? r = h = this[Of] : (r = this[Of].x || 0, h = this[Of].y || 0), r = Math.min(r, e / 2), h = Math.min(h, s / 2)), t && (this[jf] = this[uf].x - this[_f] + this[Sf], this[Cf] = this._myt.y - this[df] + this[Af], !this._7q[go](this[jf], this._pointerY))) {
            var a = new fH(i, n, e, s, r, h, this[Lf], this[jf], this[Cf]);
            return this[Mf] = a._m7, this[Mf].bounds.set(i, n, e, s), void(this[Pf] = !0)
        }
        this._lnShape && this[Mf].clear(), this[Mf] = Lq[Rf](i, n, e, s, r, h, this[Mf]), this[Mf].bounds.set(i, n, e, s)
    }

    function Hn(t, i, n, e) {
        return e && (t[Da] < 0 || t[Na] < 0) ? (t.x = i, t.y = n, void(t[Da] = t[Na] = 0)) : (i < t.x ? (t.width += t.x - i, t.x = i) : i > t.x + t.width && (t[Da] = i - t.x), void(n < t.y ? (t[Na] += t.y - n, t.y = n) : n > t.y + t.height && (t[Na] = n - t.y)))
    }

    function qn(t, i, e) {
        var s, r = t.position,
            h = t[Df] === n ? this.layoutByPath : t[Df];
        return this.$data instanceof aH && h ? (s = CY[Nf](r, this[Bf], this[To], i, e), s.x *= this._jo, s.y *= this._ji) : (s = fi(r, this._7q[Da], this._7q[Na]), s.x += this._7q.x, s.y += this._7q.y), Fn[call](this, s)
    }

    function Un(t, i) {
        if (i) if (i._7q[$f]()) t.$x = i.$x, t.$y = i.$y;
        else {
            var n = qn[call](i, t);
            t.$x = n.x, t.$y = n.y, t._hostRotate = n[jo]
        } else t.$x = 0, t.$y = 0;
        t.$invalidateRotate && _H[call](t)
    }

    function Wn(t) {
        if (t[Ff] === n) {
            var i, e;
            if (t[Gf]) i = t[zf], e = t[Gf];
            else {
                var s;
                if (t.mozDash !== n) s = Yf;
                else {
                    if (t[Hf] === n) return !1;
                    s = Hf
                }
                e = function(t) {
                    this[s] = t
                }, i = function() {
                    return this[s]
                }
            }
            Z(t, Ff, {
                get: function() {
                    return i.call(this)
                },
                set: function(t) {
                    e[call](this, t)
                }
            })
        }
        if (t.lineDashOffset === n) {
            var r;
            if (t.mozDashOffset !== n) r = qf;
            else {
                if (t[Uf] === n) return;
                r = Uf
            }
            Z(t, Wf, {
                get: function() {
                    return this[r]
                },
                set: function(t) {
                    this[r] = t
                }
            })
        }
    }

    function Xn(t, i, n, e, s) {
        var r, h, a, o, f, u, c, _, d = function(t) {
                return function(i) {
                    t(i)
                }
            },
            l = function() {
                h = null, a = null, o = f, f = null, u = null
            },
            v = function(t) {
                r = t, c || (c = Ai()), c[Da] = r[Da], c[Na] = r[Na], i[Da] = r[Da], i.height = r[Na]
            },
            b = function(t) {
                y(), l(), h = t.transparencyGiven ? t[Xf] : null, a = 10 * t.delayTime, f = t.disposalMethod
            },
            y = function() {
                if (u) {
                    var t = u[fo](0, 0, r[Da], r[Na]),
                        n = {
                            data: t,
                            _pixels: Tn(t[ko], r.width, r.height),
                            delay: a
                        };
                    s[call](i, n)
                }
            },
            g = function(t) {
                u || (u = c.getContext(Ua));
                var i = t.lctFlag ? t.lct : r.gct,
                    n = u.getImageData(t[Vf], t[Zf], t.width, t[Na]);
                t.pixels[Jf](function(t, e) {
                    h !== t ? (n[ko][4 * e + 0] = i[t][0], n[ko][4 * e + 1] = i[t][1], n.data[4 * e + 2] = i[t][2], n[ko][4 * e + 3] = 255) : (2 === o || 3 === o) && (n[ko][4 * e + 3] = 0)
                }), u[Kf](0, 0, r[Da], r[Na]), u[rf](n, t[Vf], t[Zf])
            },
            p = function() {},
            m = {
                hdr: d(v),
                gce: d(b),
                com: d(p),
                app: {
                    NETSCAPE: d(p)
                },
                img: d(g, !0),
                eof: function() {
                    y(), n[call](i)
                }
            },
            x = new XMLHttpRequest;
        XG || x[Qf]("text/plain; charset=x-user-defined"), x[tu] = function() {
            _ = new yH(x[ka]);
            try {
                pH(_, m)
            } catch (t) {
                e[call](i, Ma)
            }
        }, x[iu] = function() {
            e[call](i, nu)
        }, x[ja](Sa, t, !0), x[Ra]()
    }

    function Vn(t) {
        var i = [51, 10, 10, 100, 101, 109, 111, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 109, 97, 112, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 99, 110, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 10, 50, 46, 48, 10, 49, 52, 57, 50, 54, 55, 54, 49, 48, 53, 50, 50, 48, 10, 10, 10];
        return i.forEach(function(n, e) {
            i[e] = t(n)
        }), i[eu]("")
    }

    function Zn(t, i) {
        try {
            if (null == t || t[length] < 8) return;
            if (null == i || i[length] <= 0) return;
            for (var n = "", e = 0; e < i.length; e++) n += i[su](e).toString();
            var s = Math[Oh](n[length] / 5),
                r = parseInt(n[ru](s) + n.charAt(2 * s) + n[ru](3 * s) + n[ru](4 * s) + n[ru](5 * s), 10),
                h = Math.round(i[length] / 2),
                a = Math.pow(2, 31) - 1,
                o = parseInt(t[Bo](t[length] - 8, t[length]), 16);
            for (t = t[Bo](0, t.length - 8), n += o; n[length] > 10;) n = (parseInt(n[Bo](0, 10), 10) + parseInt(n[Bo](10, n[length]), 10)).toString();
            n = (r * n + h) % a;
            for (var f = "", u = "", e = 0; e < t[length]; e += 2) f = parseInt(parseInt(t.substring(e, e + 2), 16) ^ Math[Oh](n / a * 255), 10), u += String[hu](f), n = (r * n + h) % a;
            return 0 | u[0] ? ZH = TH[au + OH + ou](u) : null
        } catch (c) {}
    }

    function Jn() {
        var t = xH;
        if (!t) return void(nq = !0);
        VH = t;
        var i;
        t = t[yh](Ch);
        for (var n = 0; n < t[length] && (i = Zn(t[n], wH), !(i && i[yh](ho).length >= 8));) 1 == t.length && (i = Zn(t[n], fu)), n++;
        if (!i || i[yh](ho)[length] < 8) return QH = !0, "" === wH || wH == uu + AH + cu + LH + _u || wH == du + CH + lu ? (tq = hq, nq = !1, sq = !1, void(XH = !1)) : (tq = hq, void(nq = !0));
        XH = i[yh](ho);
        var e = XH[3];
        if (e != uW) return QH = !0, void(sq = !0);
        nq = !1, sq = !1;
        var s = XH[0];
        (vu == s || bu == s) && (QH = !1);
        var r = XH[5];
        iq = r;
        var h = XH[6];
        tq = h
    }

    function Kn() {
        var t = VH;
        if (t) {
            var i;
            t = t.split(Ch);
            for (var n = 0; n < t[length] && (i = aq(t[n], wH), !(i && i[yh](ho)[length] >= 8));) 1 == t.length && (i = aq(t[n], fu)), n++;
            if (i.split(ho).length >= 8) return void(eq = !1)
        }
        return wH && wH != uu + AH + cu + LH + _u && wH != du + CH + lu ? void(eq = !0) : void(eq = !1)
    }

    function Qn() {
        if (QH) {
            var t = or[BH + Oo]._j7,
                i = KH;
            or[BH + Oo]._j7 = function() {
                t[apply](this, arguments), i[call](this._n0aseCanvas, this.g)
            };
            var n = xq[BH + Oo]._gz;
            xq[BH + Oo]._gz = function(t) {
                n[apply](this, arguments), i[call](this, t)
            }
        }
    }

    function te() {
        if (iq !== !0 && iq) {
            var t = iq[yh]($h);
            if (3 != t.length) return void(BaseUI[prototype]._j7 = null);
            var i = parseInt(t[0], 10),
                n = parseInt(t[1], 10),
                e = parseInt(t[2], 10),
                s = 3,
                r = (365.2425 * (i - 2e3 + 10 * s) + (n - 1) * s * 10 + e) * s * 8 * s * 1200 * 1e3;
            EH > r && (BaseUI.prototype._j7 = null)
        }
    }

    function ie() {
        var t = 0 | tq;
        t && (fz[BH + Oo]._kf = function(i, e) {
            var s = i.id;
            return s === n || this[yu](s) ? !1 : this._jk.length > t ? !1 : (g(this._jk, i, e), this._li[s] = i, i)
        })
    }

    function ne() {
        nq && (fz[BH + Oo]._kf = fz[BH + Oo]._hg)
    }

    function ee() {
        eq && (xq[BH + Oo]._j7 = xq[BH + Oo][gu])
    }

    function se() {
        rq && (Tq.prototype._fx = Tq[prototype]._ei)
    }

    function re() {
        sq && (mq[BH + Oo].render = xq[BH + Oo]._j7)
    }

    function he() {
        XH === n && (xq[BH + Oo]._j3 = bz[pu])
    }

    function ae(t) {
        var i = Ai(!0);
        return Wn(i.g), i[mu] = function() {
            return !1
        }, t.appendChild(i), i.className = _q, i
    }

    function d(t, i) {
        function n(t, n) {
            for (var e = t[length], s = n.length, r = e + s, h = new Array(r), a = 0, o = 0, f = 0; r > f;) h[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
            return h
        }

        function e(t) {
            var i = t[length],
                s = Math.ceil(i / 2);
            return 1 >= i ? t : n(e(t[slice](0, s)), e(t[slice](s)))
        }

        return e(t)
    }

    function oe(t) {
        t[Da] = t[Da]
    }

    function fe(t) {
        gq || (gq = "imageSmoothingEnabled" in CanvasRenderingContext2D[prototype] ? "imageSmoothingEnabled" : "mozImageSmoothingEnabled" in CanvasRenderingContext2D.prototype ? "mozImageSmoothingEnabled" : "msImageSmoothingEnabled" in CanvasRenderingContext2D[prototype] ? "msImageSmoothingEnabled" : "webkitImageSmoothingEnabled" in CanvasRenderingContext2D[prototype] ? "webkitImageSmoothingEnabled" : "imageSmoothingEnabled"), t[gq] = !1
    }

    function ue(t, i, n, e, s) {
        e = X(i + e) - (i = W(i)), s = X(n + s) - (n = W(n)), t.clearRect(i, n, e, s), t[xu](i, n, e, s)
    }

    function W(t) {
        return Math.floor(t)
    }

    function X(t) {
        return Math[ceil](t)
    }

    function ce(t) {
        var i = [];
        return t.forEach(function(t) {
            i[push](-t)
        }), i
    }

    function _e(t) {
        return t %= wq, 0 > t && (t += wq), t
    }

    function de(t, i, n, e, s, r, h, a) {
        var o = ((t * e - i * n) * (s - h) - (t - n) * (s * a - r * h)) / ((t - n) * (r - a) - (i - e) * (s - h)),
            f = ((t * e - i * n) * (r - a) - (i - e) * (s * a - r * h)) / ((t - n) * (r - a) - (i - e) * (s - h));
        if (isNaN(o) || isNaN(f)) return !1;
        if (t >= n) {
            if (!(o >= n && t >= o)) return !1
        } else if (!(o >= t && n >= o)) return !1;
        if (i >= e) {
            if (!(f >= e && i >= f)) return !1
        } else if (!(f >= i && e >= f)) return !1;
        if (s >= h) {
            if (!(o >= h && s >= o)) return !1
        } else if (!(o >= s && h >= o)) return !1;
        if (r >= a) {
            if (!(f >= a && r >= f)) return !1
        } else if (!(f >= r && a >= f)) return !1;
        return !0
    }

    function le(t, i) {
        for (var n = 0, e = t.length; e > n;) {
            for (var s = t[n], r = t[(n + 1) % e], h = 0; 4 > h;) {
                var a = i[h],
                    o = i[(h + 1) % e];
                if (de(s[0], s[1], r[0], r[1], a[0], a[1], o[0], o[1])) return !0;
                h++
            }
            n++
        }
        return !1
    }

    function ve(t, i, n, e) {
        return [t * e - i * n, t * n + i * e]
    }

    function be(t) {
        return t[Eu] ? (t = t[Eu], t._dt ? t._dt : t instanceof Pq && t._go === !1 ? t : null) : null
    }

    function ye(t, i, n) {
        if (n = n || i[wu], n == t) return !1;
        var e = t.getEdgeBundle(n);
        return e || (e = new QU(t, n), t._linkedNodes[n.id] = e), e._il(i, t)
    }

    function ge(t, i, n) {
        if (n = n || i[wu], n == t) return !1;
        var e = t[ku](n);
        return e ? e._dg(i, t) : void 0
    }

    function pe(t, i, e) {
        return e === n && (e = i[wu]), e != t ? (t._8c || (t._8c = new fz), t._8c.add(i) === !1 ? !1 : void t._8v++) : void 0
    }

    function me(t, i, n) {
        return t._8c && t._8c[remove](i) !== !1 ? (t._8v--, void ge(t, i, n)) : !1
    }

    function xe(t, i) {
        return i[Tu] != t ? (t._8z || (t._8z = new fz), t._8z.add(i) === !1 ? !1 : void t[Mu]++) : void 0
    }

    function Ee(t, i) {
        return t._8z && t._8z[remove](i) !== !1 ? (t._my7--, void ge(i.fromAgent, i, t)) : !1
    }

    function we(t, i) {
        if (i === n && (i = t instanceof Sq), i) {
            if (t[Iu]()) return null;
            var e = we(t.from, !1);
            if (t[Ou]()) return e;
            for (var s = we(t.to, !1); null != e && null != s;) {
                if (e == s) return e;
                if (e[ju](s)) return s;
                if (s[ju](e)) return e;
                e = we(e, !1), s = we(s, !1)
            }
            return null
        }
        for (var r = t[Eu]; null != r;) {
            if (r._i6()) return r;
            r = r[Eu]
        }
        return null
    }

    function ke(t, i, n) {
        t._i6() && t[hasChildren]() && t.children.forEach(function(t) {
            t instanceof Cq && i.add(t) && ke(t, i, n)
        }, this), t.hasFollowers() && t._ds[Jf](function(t) {
            (null == n || n.accept(t)) && i.add(t) && ke(t, i, n)
        })
    }

    function Te(t, i) {
        i[Eu] ? i[Eu].setChildIndex(i, i[Eu][Su] - 1) : t.roots.setIndex(i, t[Cu].length - 1)
    }

    function Me(t, i) {
        if (i instanceof Sq) return void(i[Iu]() || Oe(t, i));
        for (Te(t, i); i = i[Eu];) Te(t, i)
    }

    function Ie(t, i) {
        if (i instanceof Sq) return void(i[Iu]() || Oe(t, i));
        for (Te(t, i); i = i[Eu];) Te(t, i)
    }

    function Oe(t, i) {
        var n = i[Tu];
        if (i.isLooped()) Te(t, n);
        else {
            var e = i.toAgent;
            Te(t, n), Te(t, e)
        }
    }

    function je(t, i) {
        return t._8v++, t._gc ? (i._in = t._ie, t._ie._io = i, void(t._ie = i)) : (t._gc = i, void(t._ie = i))
    }

    function Se(t, i) {
        t._8v--, t._ie == i && (t._ie = i._in), i._in ? i._in._io = i._io : t._gc = i._io, i._io && (i._io._in = i._in), i._in = null, i._io = null, ge(t, i, i.$to)
    }

    function Ce(t, i) {
        return t[Mu]++, t._ig ? (i._k2 = t._jg, t._jg._k5 = i, void(t._jg = i)) : (t._ig = i, void(t._jg = i))
    }

    function Ae(t, i) {
        t._my7--, t._jg == i && (t._jg = i._k2), i._k2 ? i._k2._k5 = i._k5 : t._ig = i._k5, i._k5 && (i._k5._k2 = i._k2), i._k2 = null, i._k5 = null
    }

    function Le(t, i) {
        return i = i || new fz, t[Au](function(t) {
            i.add({
                id: t.id,
                edge: t,
                fromAgent: t[Lu]._dt,
                toAgent: t.$to._dt
            })
        }), t[Pu](function(t) {
            t instanceof Cq && Le(t, i)
        }), i
    }

    function Pe(t, i, n) {
        return De(t, i, n) === !1 ? !1 : Re(t, i, n)
    }

    function Re(t, i, n) {
        if (t._gc) for (var e = t._gc; e;) {
            if (i.call(n, e) === !1) return !1;
            e = e._io
        }
    }

    function De(t, i, n) {
        if (t._ig) for (var e = t._ig; e;) {
            if (i[call](n, e) === !1) return !1;
            e = e._k5
        }
    }

    function Ne(t, i, e, s, r, h, a) {
        return h || a ? (h = h || 0, a = a === n ? h : a || 0, h = Math.min(h, s / 2), a = Math.min(a, r / 2), t[Ru](i + h, e), t[Du](i + s - h, e), t[Nu](i + s, e, i + s, e + a), t.lineTo(i + s, e + r - a), t[Nu](i + s, e + r, i + s - h, e + r), t.lineTo(i + h, e + r), t[Nu](i, e + r, i, e + r - a), t[Du](i, e + a), t[Nu](i, e, i + h, e), t[of](), t) : (t[Ru](i, e), t[Du](i + s, e), t[Du](i + s, e + r), t[Du](i, e + r), t[of](), t)
    }

    function Be(t, i) {
        var n = i.r || 1,
            e = i.cx || 0,
            s = i.cy || 0,
            r = n * Math.tan(Math.PI / 8),
            h = n * Math.sin(Math.PI / 4);
        t[Ru](e + n, s), t.quadTo(e + n, s + r, e + h, s + h), t.quadTo(e + r, s + n, e, s + n), t[Nu](e - r, s + n, e - h, s + h), t[Nu](e - n, s + r, e - n, s), t[Nu](e - n, s - r, e - h, s - h), t.quadTo(e - r, s - n, e, s - n), t[Nu](e + r, s - n, e + h, s - h), t.quadTo(e + n, s - r, e + n, s)
    }

    function $e(t, i, n, e, s) {
        i instanceof tn && (e = i.width, s = i[Na], n = i.cy - s / 2, i = i.cx - e / 2);
        var r = .5522848,
            h = e / 2 * r,
            a = s / 2 * r,
            o = i + e,
            f = n + s,
            u = i + e / 2,
            c = n + s / 2;
        return t[Ru](i, c), t[Bu](i, c - a, u - h, n, u, n), t[Bu](u + h, n, o, c - a, o, c), t.curveTo(o, c + a, u + h, f, u, f), t[Bu](u - h, f, i, c + a, i, c), t
    }

    function Fe(t, i, n, e, s) {
        var r = 2 * e,
            h = 2 * s,
            a = i + e / 2,
            o = n + s / 2;
        return t[Ru](a - r / 4, o - h / 12), t.lineTo(i + .306 * e, n + .579 * s), t.lineTo(a - r / 6, o + h / 4), t.lineTo(i + e / 2, n + .733 * s), t.lineTo(a + r / 6, o + h / 4), t.lineTo(i + .693 * e, n + .579 * s), t.lineTo(a + r / 4, o - h / 12), t[Du](i + .611 * e, n + .332 * s), t[Du](a + 0, o - h / 4), t[Du](i + .388 * e, n + .332 * s), t[of](), t
    }

    function Ge(t, i, n, e, s) {
        return t[Ru](i, n), t.lineTo(i + e, n + s / 2), t[Du](i, n + s), t[of](), t
    }

    function ze(t, i, n, e, s) {
        return t[Ru](i, n + s / 2), t[Du](i + e / 2, n), t[Du](i + e, n + s / 2), t[Du](i + e / 2, n + s), t[of](), t
    }

    function Ye(t, i, n, e, s, r) {
        return t.moveTo(i, n), t.lineTo(i + e, n + s / 2), t.lineTo(i, n + s), r || (t.lineTo(i + .25 * e, n + s / 2), t.closePath()), t
    }

    function He(t, i, n, e, s) {
        if (!t || 3 > t) throw new Error("edge number must greater than 2");
        t = 0 | t, e = e || 50, s = s || 0, i = i || 0, n = n || 0;
        for (var r, h, a = 0, o = 2 * Math.PI / t, f = new aH; t > a;) r = i + e * Math.cos(s), h = n + e * Math.sin(s), a ? f[Du](r, h) : f.moveTo(r, h), ++a, s += o;
        return f.closePath(), f
    }

    function qe() {
        var t = new aH;
        return t[Ru](75, 40), t[Bu](75, 37, 70, 25, 50, 25), t.curveTo(20, 25, 20, 62.5, 20, 62.5), t.curveTo(20, 80, 40, 102, 75, 120), t.curveTo(110, 102, 130, 80, 130, 62.5), t[Bu](130, 62.5, 130, 25, 100, 25), t[Bu](85, 25, 75, 37, 75, 40), t
    }

    function Ue() {
        var t = new aH;
        return t.moveTo(20, 0), t.lineTo(80, 0), t[Du](100, 100), t[Du](0, 100), t[of](), t
    }

    function We() {
        var t = new aH;
        return t.moveTo(100, 0), t.lineTo(100, 80), t[Du](0, 100), t[Du](0, 20), t[of](), t
    }

    function Xe() {
        var t = new aH;
        return t.moveTo(20, 0), t.lineTo(100, 0), t.lineTo(80, 100), t[Du](0, 100), t[of](), t
    }

    function Ve() {
        var t = new aH;
        return t[Ru](43, 23), t[Du](28, 10), t[Du](37, 2), t[Du](63, 31), t[Du](37, 59), t[Du](28, 52), t[Du](44, 38), t[Du](3, 38), t.lineTo(3, 23), t.closePath(), t
    }

    function Ze() {
        var t = new aH;
        return t.moveTo(1, 8), t[Du](7, 2), t[Du](32, 26), t[Du](7, 50), t[Du](1, 44), t[Du](18, 26), t[of](), t[Ru](27, 8), t[Du](33, 2), t[Du](57, 26), t[Du](33, 50), t.lineTo(27, 44), t[Du](44, 26), t[of](), t
    }

    function Je() {
        var t = new aH;
        return t[Ru](0, 15), t[Du](23, 15), t[Du](23, 1), t.lineTo(47, 23), t.lineTo(23, 43), t[Du](23, 29), t[Du](0, 29), t[of](), t
    }

    function Ke() {
        var t = new aH;
        return t[Ru](0, 21), t[Du](30, 21), t[Du](19, 0), t[Du](25, 0), t.lineTo(47, 25), t[Du](25, 48), t[Du](19, 48), t.lineTo(30, 28), t[Du](0, 28), t[of](), t
    }

    function Qe() {
        var t = new aH;
        return t.moveTo(0, 0), t[Du](34, 24), t[Du](0, 48), t[Du](14, 24), t.closePath(), t
    }

    function ts() {
        var t = new aH;
        return t[Ru](20, 0), t[Du](34, 14), t.lineTo(20, 28), t[Du](22, 18), t[Du](1, 25), t.lineTo(10, 14), t[Du](1, 3), t[Du](22, 10), t.closePath(), t
    }

    function is() {
        var t = new aH;
        return t[Ru](4, 18), t[Du](45, 18), t[Du](37, 4), t[Du](83, 25), t.lineTo(37, 46), t[Du](45, 32), t[Du](4, 32), t[of](), t
    }

    function ns() {
        var t = new aH;
        return t[Ru](17, 11), t[Du](27, 11), t[Du](42, 27), t.lineTo(27, 42), t[Du](17, 42), t[Du](28, 30), t.lineTo(4, 30), t[Du](4, 23), t[Du](28, 23), t.closePath(), t
    }

    function es() {
        Lq.register(kY[$u], $e(new aH, 0, 0, 100, 100)), Lq[Fu](kY[Gu], Ne(new aH, 0, 0, 100, 100)), Lq[Fu](kY.SHAPE_ROUNDRECT, Ne(new aH, 0, 0, 100, 100, 20, 20)), Lq.register(kY[zu], Fe(new aH, 0, 0, 100, 100)), Lq.register(kY.SHAPE_TRIANGLE, Ge(new aH, 0, 0, 100, 100)), Lq[Fu](kY[Yu], He(5)), Lq[Fu](kY.SHAPE_HEXAGON, He(6)), Lq[Fu](kY[Hu], ze(new aH, 0, 0, 100, 100)), Lq[Fu](kY[qu], qe()), Lq.register(kY.SHAPE_TRAPEZIUM, Ue()), Lq.register(kY[Uu], We()), Lq[Fu](kY.SHAPE_PARALLELOGRAM, Xe());
        var t = new aH;
        t[Ru](20, 0), t[Du](40, 0), t.lineTo(40, 20), t[Du](60, 20), t[Du](60, 40), t[Du](40, 40), t.lineTo(40, 60), t[Du](20, 60), t[Du](20, 40), t[Du](0, 40), t[Du](0, 20), t[Du](20, 20), t.closePath(), Lq[Fu](kY[Wu], t), Lq[Fu](kY[Xu], Ye(new aH, 0, 0, 100, 100)), Lq[Fu](kY[Vu], Ve()), Lq[Fu](kY.SHAPE_ARROW_2, Ze()), Lq[Fu](kY.SHAPE_ARROW_3, Je()), Lq.register(kY.SHAPE_ARROW_4, Ke()), Lq.register(kY[Zu], Qe()), Lq.register(kY[Ju], ts()), Lq[Fu](kY[Ku], is()), Lq[Fu](kY[Qu], ns()), Lq[Fu](kY.SHAPE_ARROW_OPEN, Ye(new aH, 0, 0, 100, 100, !0))
    }

    function ss() {
        w(this, ss, arguments), this.busLayout = !0
    }

    function rs() {
        w(this, rs), this._$q = new Pz
    }

    function hs() {
        if (this._go === !0) {
            var t = this._8c,
                i = this._8z;
            if (t) for (t = t._jk; t[length];) {
                var n = t[0];
                me(this, n, n.toAgent)
            }
            if (i) for (i = i._jk; i[length];) {
                var n = i[0];
                Ee(this, n, n.fromAgent)
            }
            return void this.forEachChild(function(t) {
                t._i6() && hs.call(t)
            })
        }
        var e = Le(this);
        e.forEach(function(t) {
            t = t[tc];
            var i = t[Lu],
                n = t.$to,
                e = i.isDescendantOf(this),
                s = n[ju](this);
            e && !s ? (pe(this, t), ye(this, t)) : s && !e && (xe(this, t), ye(t[Tu], t, this))
        }, this)
    }

    function as() {
        w(this, as, arguments), this[ic] = null
    }

    function os(t, i, n, e) {
        return t[i] = n, e ? {
            get: function() {
                return this[i]
            },
            set: function(t) {
                if (t !== this[i]) {
                    this[i] = t, !this[nc], this._1h = !0;
                    for (var n = e[length]; --n >= 0;) this[e[n]] = !0
                }
            }
        } : {
            get: function() {
                return this[i]
            },
            set: function(t) {
                t !== this[i] && (this[i] = t)
            }
        }
    }

    function fs(t, i) {
        var n = {},
            e = {};
        for (var s in i) {
            var r = i[s];
            r[ec] && r[ec][Jf](function(t, i, n) {
                n[i] = sc + t, e[t] = !0
            }), n[s] = os(t, rh + s, r.value, r[ec])
        }
        for (var h in e) t[sc + h] = !0;
        Object.defineProperties(t, n)
    }

    function us(t, i, n, e) {
        if (Array[Eh](i)) for (var s = i[length]; --s >= 0;) us(t, i[s], n, e);
        else {
            var r = i[rc];
            if (r) {
                if (r instanceof BaseUI || (r = t[r]), !r) return
            } else r = t;
            if (e || (e = t[hc](i[ac], n)), i[oc] && (r[i[oc]] = e), i[fc]) {
                var h = i.callback;
                h instanceof Function || (h = t[h]), h instanceof Function && h.call(t, e, r)
            }
        }
    }

    function cs() {
        Dq[Jf](function(t) {
            this[t] = {}
        }, this)
    }

    function _s(t, i, n, e) {
        return e == kY[uc] ? void(t[n] = i) : e == kY.PROPERTY_TYPE_CLIENT ? void t.set(n, i) : e == kY.PROPERTY_TYPE_STYLE ? void t[cc](n, i) : !1
    }

    function ds() {
        w(this, ds, arguments)
    }

    function NodeUI() {
        w(this, NodeUI, arguments)
    }

    function vs(t, i, n, e) {
        var s = bs(t, i, n, e),
            r = [];
        if (ms(t)) ys(s, i, n, r, e[_c](Nq.EDGE_EXTEND));
        else {
            Ss(t, i, n, r, s, e);
            var h = gs(t, e),
                a = h ? Ts(t, s, i, n, e[_c](Nq.EDGE_SPLIT_PERCENT)) : e[_c](Nq[dc]);
            0 == a && (s = !s)
        }
        return r
    }

    function bs(t, i, n) {
        if (null != t) {
            if (t == kY[lc] || t == kY[vc] || t == kY[bc] || t == kY[yc] || t == kY[gc]) return !0;
            if (t == kY[pc] || t == kY.EDGE_TYPE_ORTHOGONAL_VERTICAL || t == kY[mc] || t == kY[xc] || t == kY.EDGE_TYPE_EXTEND_BOTTOM) return !1
        }
        var e = ws(i, n),
            s = ks(i, n);
        return e >= s
    }

    function ys(t, i, n, e, s) {
        t ? Rs(i, n, e, s) : Ds(i, n, e, s)
    }

    function gs(t, i) {
        return i.getStyle(Nq[Ec])
    }

    function ps(t) {
        return null != t && (t == kY[xc] || t == kY[yc] || t == kY[wc] || t == kY[gc])
    }

    function ms(t) {
        return t && (t == kY[kc] || t == kY[lc] || t == kY[pc])
    }

    function xs(t, i, n, e, s) {
        if (t == kY[bc] || t == kY[mc]) return new _z(e.x + e.width / 2, e.y + e[Na] / 2);
        var r;
        if (ps(t)) {
            var h = Math.min(n.y, e.y),
                a = Math.min(n.x, e.x),
                o = Math.max(n[Wh], e[Wh]),
                f = Math.max(n[Xh], e[Xh]);
            if (r = s[_c](Nq.EDGE_EXTEND), t == kY[xc]) return new _z((a + f) / 2, h - r);
            if (t == kY[yc]) return new _z(a - r, (h + o) / 2);
            if (t == kY.EDGE_TYPE_EXTEND_BOTTOM) return new _z((a + f) / 2, o + r);
            if (t == kY[gc]) return new _z(f + r, (h + o) / 2)
        }
        var u = gs(t, s);
        if (r = u ? Ts(t, i, n, e, s.getStyle(Nq[Tc])) : s[_c](Nq[dc]), r == Number.NEGATIVE_INFINITY || r == Number[Mc]) return new _z(e.x + e.width / 2, e.y + e.height / 2);
        if (0 == r) return new _z(n.x + n[Da] / 2, n.y + n[Na] / 2);
        if (i) {
            var c = n.x + n.right < e.x + e[Xh];
            return new _z(Os(c, r, n.x, n[Da]), n.y + n.height / 2)
        }
        var _ = n.y + n[Wh] < e.y + e[Wh];
        return new _z(n.x + n[Da] / 2, Os(_, r, n.y, n[Na]))
    }

    function Es(t, i, n, e) {
        var s = Math.max(i, e) - Math.min(t, n);
        return s - (i - t + e - n)
    }

    function ws(t, i) {
        var n = Math.max(t.x + t[Da], i.x + i.width) - Math.min(t.x, i.x);
        return n - t.width - i[Da]
    }

    function ks(t, i) {
        var n = Math.max(t.y + t[Na], i.y + i[Na]) - Math.min(t.y, i.y);
        return n - t[Na] - i[Na]
    }

    function Ts(t, i, n, e, s) {
        var r = Ms(s, i, n, e, null);
        return r * s
    }

    function Ms(t, i, n, e) {
        return i ? Is(t, n.x, n.right, e.x, e.right) : Is(t, n.y, n[Wh], e.y, e[Wh])
    }

    function Is(t, i, n, e, s) {
        var r = Es(i, n, e, s),
            h = e + s > i + n;
        if (r > 0) {
            if (1 == t) return r + (s - e) / 2;
            if (t >= 0 && 1 > t) return r;
            if (0 > t) return h ? e - i : n - s
        }
        return Math.abs(h && t > 0 || !h && 0 > t ? n - s : i - e)
    }

    function Os(t, i, n, e) {
        return t == i > 0 ? n + e + Math.abs(i) : n - Math.abs(i)
    }

    function js(t, i) {
        var n = t.length;
        if (!(3 > n)) {
            var e = i.getStyle(Nq[Ic]);
            if (e != kY[Oc]) {
                var s = i[_c](Nq[jc]),
                    r = 0,
                    h = 0;
                s && (D(s) ? r = h = s : (r = s.x || 0, h = s.y || 0));
                for (var a, o, f, u, c = t[0], _ = t[1], d = null, l = 2; n > l; l++) {
                    var v = t[l],
                        b = _.x - c.x,
                        y = _.y - c.y,
                        m = v.x - _.x,
                        x = v.y - _.y,
                        E = !b || b > -SY && SY > b,
                        w = !y || y > -SY && SY > y,
                        k = !m || m > -SY && SY > m,
                        T = !x || x > -SY && SY > x,
                        M = w;
                    (E && T || w && k) && (M ? (a = Math.min(2 == l ? Math.abs(b) : Math.abs(b) / 2, r), o = Math.min(l == n - 1 ? Math.abs(x) : Math.abs(x) / 2, h), f = new _z(_.x - (b > 0 ? a : -a), _.y), u = new _z(_.x, _.y + (x > 0 ? o : -o))) : (a = Math.min(l == n - 1 ? Math.abs(m) : Math.abs(m) / 2, r), o = Math.min(2 == l ? Math.abs(y) : Math.abs(y) / 2, h), f = new _z(_.x, _.y - (y > 0 ? o : -o)), u = new _z(_.x + (m > 0 ? a : -a), _.y)), p(t, _), l--, n--, (f.x != c.x || f.y != c.y) && (g(t, f, l), l++, n++), e == kY[Sc] ? (g(t, u, l), l++, n++) : e == kY[Cc] && (g(t, [_, u], l), l++, n++)), c = _, _ = v
                }
                null != d && u.x == _.x && u.y == _.y && p(t, _)
            }
        }
    }

    function Ss(t, i, n, e, s, r) {
        var h = r.getStyle(Nq[Ac]),
            a = null == h;
        if (null != h) {
            var o = (new bz)[Lc](i)[Lc](n);
            o[Pc](h) || (s = Cs(h.x, h.y, o.y, o.x, o[Wh], o[Xh]))
        } else h = xs(t, s, i, n, r);
        s ? Ps(i, n, h, e, a) : Ls(i, n, h, e, a)
    }

    function Cs(t, i, n, e, s, r) {
        return n > i && n - i > e - t && n - i > t - r || i > s && i - s > e - t && i - s > t - r ? !1 : !0
    }

    function As(t, i, n) {
        return i >= t.x && i <= t[Xh] && n >= t.y && n <= t[Wh]
    }

    function Ls(t, i, n, e, s) {
        var r = Math.max(t.y, i.y),
            h = Math.min(t.y + t.height, i.y + i[Na]),
            a = null != n ? n.y : h + (r - h) / 2,
            o = t.x + t[Da] / 2,
            f = i.x + i[Da] / 2;
        if (0 == s && null != n && (n.x >= t.x && n.x <= t.x + t[Da] && (o = n.x), n.x >= i.x && n.x <= i.x + i[Da] && (f = n.x)), As(i, o, a) || As(t, o, a) || e.push(new _z(o, a)), As(i, f, a) || As(t, f, a) || e[push](new _z(f, a)), 0 == e.length) if (null != n) As(i, n.x, a) || As(t, n.x, a) || e.push(new _z(n.x, a));
        else {
            var u = Math.max(t.x, i.x),
                c = Math.min(t.x + t[Da], i.x + i[Da]);
            e[push](new _z(u + (c - u) / 2, a))
        }
    }

    function Ps(t, i, n, e, s) {
        var r = Math.max(t.x, i.x),
            h = Math.min(t.x + t.width, i.x + i.width),
            a = null != n ? n.x : h + (r - h) / 2,
            o = t.y + t[Na] / 2,
            f = i.y + i.height / 2;
        if (0 == s && null != n && (n.y >= t.y && n.y <= t.y + t[Na] && (o = n.y), n.y >= i.y && n.y <= i.y + i[Na] && (f = n.y)), As(i, a, o) || As(t, a, o) || e[push](new _z(a, o)), As(i, a, f) || As(t, a, f) || e.push(new _z(a, f)), 0 == e.length) if (null != n) As(i, a, n.y) || As(t, a, n.y) || e.push(new _z(a, n.y));
        else {
            var u = Math.max(t.y, i.y),
                c = Math.min(t.y + t[Na], i.y + i[Na]);
            e[push](new _z(a, u + (c - u) / 2))
        }
    }

    function Rs(t, i, n, e) {
        var s = i.x + i[Da] < t.x,
            r = t.x + t[Da] < i.x,
            h = s ? t.x : t.x + t[Da],
            a = t.y + t.height / 2,
            o = r ? i.x : i.x + i[Da],
            f = i.y + i.height / 2,
            u = e,
            c = s ? -u : u,
            _ = new _z(h + c, a);
        c = r ? -u : u;
        var d = new _z(o + c, f);
        if (s == r) {
            var l = s ? Math.min(h, o) - e : Math.max(h, o) + e;
            n[push](new _z(l, a)), n[push](new _z(l, f))
        } else if (_.x < d.x == s) {
            var v = a + (f - a) / 2;
            n.push(_), n.push(new _z(_.x, v)), n[push](new _z(d.x, v)), n.push(d)
        } else n[push](_), n[push](d)
    }

    function Ds(t, i, n, e) {
        var s = i.y + i[Na] < t.y,
            r = t.y + t[Na] < i.y,
            h = t.x + t.width / 2,
            a = s ? t.y : t.y + t[Na],
            o = i.x + i[Da] / 2,
            f = r ? i.y : i.y + i[Na],
            u = e,
            c = s ? -u : u,
            _ = new _z(h, a + c);
        c = r ? -u : u;
        var d = new _z(o, f + c);
        if (s == r) {
            var l = s ? Math.min(a, f) - e : Math.max(a, f) + e;
            n[push](new _z(h, l)), n.push(new _z(o, l))
        } else if (_.y < d.y == s) {
            var v = h + (o - h) / 2;
            n.push(_), n[push](new _z(v, _.y)), n[push](new _z(v, d.y)), n.push(d)
        } else n.push(_), n[push](d)
    }

    function Ns(t) {
        return t == kY[Rc] || t == kY[vc] || t == kY[bc] || t == kY[Dc] || t == kY.EDGE_TYPE_VERTICAL_HORIZONTAL || t == kY[xc] || t == kY[yc] || t == kY[wc] || t == kY[gc] || t == kY[kc] || t == kY[lc] || t == kY[pc]
    }

    function Bs(t, i) {
        var n, e;
        i && i.width && i[Na] ? (n = i.width, e = i[Na]) : n = e = isNaN(i) ? oz[Nc] : i;
        var s = Lq[Bc](t, -n, -e / 2, n, e);
        return s || (s = new aH, s.moveTo(-n, -e / 2), s[Du](0, 0), s[Du](-n, e / 2)), s
    }

    function $s(t, i) {
        var n = Math.sin(i),
            e = Math.cos(i),
            s = t.x,
            r = t.y;
        return t.x = s * e - r * n, t.y = s * n + r * e, t
    }

    function Fs(t, i, n, e, s, r) {
        var h = Math.atan2(e - i, n - t),
            a = new _z(s, r);
        return a[jo] = h, $s(a, h), a.x += t, a.y += i, a
    }

    function Gs(t, i, e, s, r) {
        i = si(s, i.x, i.y, e.x, e.y), e = si(r, e.x, e.y, i.x, i.y);
        var h = Math.PI / 2 + Math[Hh](e.y - i.y, e.x - i.x),
            a = t * Math.cos(h),
            o = t * Math.sin(h),
            f = e.x - i.x,
            u = e.y - i.y,
            c = i.x + .25 * f,
            _ = i.y + .25 * u,
            d = i.x + .75 * f,
            l = i.y + .75 * u;
        return [new rH(nH, [c + a, _ + o, d + a, l + o, n, n])]
    }

    function zs(t, i, e) {
        if (g(t, new rH(QY, [i.x, i.y]), 0), e) {
            if (t[length] > 1) {
                var s = t[t[length] - 1];
                if (iH == s[Oo] && (s[Zo] || s[xa][2] === n || null === s[xa][2])) return s[xa][2] = e.x, s[xa][3] = e.y, void(s[Zo] = !0);
                if (nH == s[Oo] && (s[Zo] || s.points[4] === n || null === s.points[4])) return s[xa][4] = e.x, s.points[5] = e.y, void(s[Zo] = !0)
            }
            t[push](new rH(tH, [e.x, e.y]))
        }
    }

    function Ys(t, i, n, e, s, r, h, a) {
        return i[$c]() ? void(n._fk = i._96.toDatas()) : e == s ? void t[Fc](n, e, r, h) : void t.drawEdge(n, e, s, r, h, a)
    }

    function Hs(t, i, n, e, s) {
        var r = e == s,
            h = t[Gc][zc](e),
            a = r ? h : t[Gc][zc](s);
        if (h && a) {
            var o = i.edgeType,
                f = h[Yc].clone(),
                u = r ? f : a[Yc][clone](),
                c = t[_c](Nq.EDGE_FROM_OFFSET),
                _ = t.getStyle(Nq.EDGE_TO_OFFSET);
            c && (f.x += c.x || 0, f.y += c.y || 0), _ && (u.x += _.x || 0, u.y += _.y || 0);
            var d = i.hasPathSegments();
            if (!r && !o && !d) {
                var l = e[Hc],
                    v = s[Hc];
                if (l != v) {
                    var b, y, g, p, m = i[qc];
                    l ? (b = h, y = f, g = a, p = u) : (b = a, y = u, g = h, p = f);
                    var x = Zs(y, b, l, g, p, m);
                    if (x && 2 == x[length]) {
                        var E = x[0],
                            w = x[1];
                        return n[Ru](E.x, E.y), w.x == E.x && w.y == E.y && (w.y += .01), n[Du](w.x, w.y), void(n._6b = !0)
                    }
                }
            }
            Ys(t, i, n, h, a, o, f, u), (!r || d) && qs(t, i, n, h, a, o, f, u), n._6b = !0
        }
    }

    function qs(t, i, e, s, r, h, a, o) {
        var f = a[Uc],
            u = o[Uc],
            c = t[Wc],
            _ = t[Xc];
        if (!c && !_) return void zs(e._fk, f, u);
        var d = e._fk;
        if (d.length) {
            if (c) {
                var l = d[0],
                    v = l[Vc];
                a[Zc](v.x, v.y) && (l[Oo] == nH ? (f = v, v = {
                    x: l[xa][2],
                    y: l[xa][3]
                }, l.points = l[xa][slice](2), l.type = iH) : l[Oo] == iH && (f = v, v = {
                    x: l[xa][0],
                    y: l.points[1]
                }, l[xa] = l.points[slice](2), l[Oo] = tH)), Us(s, a, v, f, n, n)
            }
            if (_) {
                var b, y = d[d[length] - 1],
                    g = y.lastPoint,
                    p = y.points[length],
                    m = g.x === n || g.y === n;
                p >= 4 && (m || o.contains(g.x, g.y)) && (m || (u = g), b = !0, g = {
                    x: y[xa][p - 4],
                    y: y[xa][p - 3]
                }, o.contains(g.x, g.y) && (u = g, p >= 6 ? (g = {
                    x: y[xa][p - 6],
                    y: y.points[p - 5]
                }, y[xa] = y[xa].slice(0, 4), y[Oo] = iH) : 1 == d[length] ? (g = {
                    x: f.x,
                    y: f.y
                }, y[xa] = y[xa][slice](0, 2), y[Oo] = tH) : (y = d[d[length] - 2], g = y.lastPoint))), Us(r, o, g, u, n, n), b && (p = y[xa][length], y.points[p - 2] = u.x, y[xa][p - 1] = u.y, u = null)
            }
        } else {
            var x = Math.atan2(u.y - f.y, u.x - f.x),
                E = Math.cos(x),
                w = Math.sin(x);
            c && Us(s, a, u, f, E, w), _ && Us(r, o, f, u, -E, -w)
        }
        zs(e._fk, f, u)
    }

    function Us(t, i, e, s, r, h) {
        if (r === n) {
            var a = Math[Hh](e.y - s.y, e.x - s.x);
            r = Math.cos(a), h = Math.sin(a)
        }
        for (e = {
            x: e.x,
            y: e.y
        }, i[Zc](e.x, e.y) || (e = si(i, s.x, s.y, e.x, e.y));;) {
            if (!i[Zc](e.x, e.y)) return s;
            if (t[Jc](e.x - r, e.y - h, oz[Kc])) {
                s.x = e.x - r / 2, s.y = e.y - h / 2;
                break
            }
            e.x -= r, e.y -= h
        }
        return s
    }

    function Ws(t, i, n, e, s, r, h, a) {
        if (i[$c]()) return i._96;
        var o = i.edgeType;
        if (Ns(o)) {
            var f = vs(o, n, e, t, s, r);
            if (!f || !f[length]) return null;
            g(f, h, 0), f[push](a), o != kY[kc] && js(f, t);
            for (var u = [], c = f.length, _ = 1; c - 1 > _; _++) {
                var d = f[_];
                u[push]($(d) ? new rH(iH, [d[0].x, d[0].y, d[1].x, d[1].y]) : new rH(tH, [d.x, d.y]))
            }
            return u
        }
        if (i.$bundleEnabled) {
            var l = t._24();
            if (!l) return;
            return Gs(l, h, a, n, e)
        }
    }

    function Xs(t, i, n) {
        var e = t[_c](Nq[Qc]),
            s = t._24(),
            r = e + .2 * s,
            h = i.x + i[Da] - r,
            a = i.y,
            o = i.x + i[Da],
            f = i.y + r;
        e += s;
        var u = .707,
            c = -.707,
            _ = i.x + i[Da],
            d = i.y,
            l = _ + u * e,
            v = d + c * e,
            b = {
                x: h,
                y: a
            },
            y = {
                x: l,
                y: v
            },
            g = {
                x: o,
                y: f
            },
            p = b.x,
            m = y.x,
            x = g.x,
            E = b.y,
            w = y.y,
            k = g.y,
            T = ((k - E) * (w * w - E * E + m * m - p * p) + (w - E) * (E * E - k * k + p * p - x * x)) / (2 * (m - p) * (k - E) - 2 * (x - p) * (w - E)),
            M = ((x - p) * (m * m - p * p + w * w - E * E) + (m - p) * (p * p - x * x + E * E - k * k)) / (2 * (w - E) * (x - p) - 2 * (k - E) * (m - p)),
            r = Math.sqrt((p - T) * (p - T) + (E - M) * (E - M)),
            I = Math[Hh](b.y - M, b.x - T),
            O = Math[Hh](g.y - M, g.x - T),
            j = O - I;
        return 0 > j && (j += 2 * Math.PI), Vs(T, M, I, j, r, r, !0, n)
    }

    function Vs(t, i, n, e, s, r, h, a) {
        var o, f, u, c, _, d, l, v, b, y, g;
        if (Math.abs(e) > 2 * Math.PI && (e = 2 * Math.PI), _ = Math.ceil(Math.abs(e) / (Math.PI / 4)), o = e / _, f = o, u = n, _ > 0) {
            d = t + Math.cos(u) * s, l = i + Math.sin(u) * r, moveTo ? a[Ru](d, l) : a.lineTo(d, l);
            for (var p = 0; _ > p; p++) u += f, c = u - f / 2, v = t + Math.cos(u) * s, b = i + Math.sin(u) * r, y = t + Math.cos(c) * (s / Math.cos(f / 2)), g = i + Math.sin(c) * (r / Math.cos(f / 2)), a.quadTo(y, g, v, b)
        }
    }

    function Zs(t, i, e, s, r, h) {
        var a = r.cx,
            o = r.cy,
            f = a < t.x,
            u = a > t[Xh],
            c = o < t.y,
            _ = o > t[Wh],
            d = t.cx,
            l = t.cy,
            v = f || u,
            b = c || _,
            y = h === n || null === h;
        y && (h = Math[Hh](o - l, a - d), v || b || (h += Math.PI));
        var g = Math.cos(h),
            p = Math.sin(h),
            m = Ks(i, t, {
                x: a,
                y: o
            }, -g, -p);
        m || (h = Math[Hh](o - l, a - d), v || b || (h += Math.PI), g = Math.cos(h), p = Math.sin(h), m = Ks(i, t, {
                x: a,
                y: o
            }, -g, -p) || {
                x: d,
                y: l
            });
        var x = Ks(s, r, {
                x: m.x,
                y: m.y
            }, -m.perX || g, -m.perY || p, !1) || {
                x: a,
                y: o
            };
        return e ? [m, x] : [x, m]
    }

    function Js(t, i, n, e, s, r) {
        var h = i < t.x,
            a = i > t.right,
            o = n < t.y,
            f = n > t[Wh];
        if (h && e > 0) {
            var u = t.x - i,
                c = n + u * s / e;
            if (c >= t.y && c <= t.bottom) return {
                x: t.x,
                y: c,
                perX: e,
                perY: s
            }
        }
        if (a && 0 > e) {
            var u = t.right - i,
                c = n + u * s / e;
            if (c >= t.y && c <= t[Wh]) return {
                x: t[Xh],
                y: c,
                perX: e,
                perY: s
            }
        }
        if (o && s > 0) {
            var _ = t.y - n,
                d = i + _ * e / s;
            if (d >= t.x && d <= t[Xh]) return {
                x: d,
                y: t.y,
                perX: e,
                perY: s
            }
        }
        if (f && 0 > s) {
            var _ = t[Wh] - n,
                d = i + _ * e / s;
            if (d >= t.x && d <= t.right) return {
                x: d,
                y: t[Wh],
                perX: e,
                perY: s
            }
        }
        return r !== !1 ? Js(t, i, n, -e, -s, !1) : void 0
    }

    function Ks(t, i, n, e, s, r) {
        if (!i.contains(n.x, n.y)) {
            if (n = Js(i, n.x, n.y, e, s, r), !n) return;
            return Qs(t, i, n, n[t_], n[i_])
        }
        return r === !1 ? Qs(t, i, n, e, s) : Qs(t, i, {
            x: n.x,
            y: n.y,
            perX: e,
            perY: s
        }, e, s) || Qs(t, i, n, -e, -s)
    }

    function Qs(t, i, n, e, s) {
        for (;;) {
            if (!i[Zc](n.x, n.y)) return;
            if (t.hitTest(n.x + e, n.y + s)) break;
            n.x += e, n.y += s
        }
        return n
    }

    function tr(t) {
        return pn(t) ? t : t[n_](/.(gif|jpg|jpeg|png)$/gi) ? t : (t = K(t), t instanceof Object && t[$o] ? t : void 0)
    }

    function ir(t) {
        for (var i = t.parent; i;) {
            if (i[e_]) return i;
            i = i[Eu]
        }
        return null
    }

    function nr() {
        w(this, nr, arguments)
    }

    function er(t, n, e, s, r, h, a) {
        var o = document[s_](r_);
        o[dh] = h_, li(o, iU), n && li(o, n);
        var f = document[s_](a_);
        return h && (hz && (f.ontouchstart = h), Jz || (f[o_] = h)), f.name = a, f.src = e, li(f, nU), r && li(f, r), s && bi(f, f_, u_), o._img = f, o[c_](f), t.appendChild(o), o
    }

    function sr(t, n) {
        this[__] = document[s_](r_), this[__].className = d_, li(this._navPane, {
            "background-color": l_,
            overflow: v_,
            "user-select": b_,
            position: y_
        }), this[g_] = er(this[__], {
            width: p_
        }, oz[m_], !1, null, n, x_), this[E_] = er(this[__], {
            height: p_
        }, oz.NAVIGATION_IMAGE_LEFT, !1, eU, n, qo), this[w_] = er(this[__], {
            height: p_,
            right: k_
        }, oz.NAVIGATION_IMAGE_LEFT, !0, eU, n, Xh), this[T_] = er(this[__], {
            width: p_,
            bottom: k_
        }, oz[m_], !0, null, n, Wh), t.appendChild(this._navPane)
    }

    function rr(t, i) {
        if (!oz[M_]) {
            var n = Ai(20, 40),
                e = n.g;
            e.scale(e[Wa], e[Wa]), e.moveTo(16, 4), e[Du](4, 20), e[Du](16, 36), e[To] = 3, e.lineCap = po, e[I_] = po, e[O_] = j_, e[S_] = C_, e.shadowBlur = 5, e[Eo](), oz.NAVIGATION_IMAGE_LEFT = n[A_]();
            var s = Ai(n[Na], n[Da], !1);
            s.g.translate(s.width, 0), s.g[jo](Math.PI / 2), s.g[L_](n, 0, 0), oz[m_] = s[A_]()
        }
        this[P_] = t;
        var r = function(i) {
            z(i);
            var n, e, s = i[rc],
                r = s.name;
            if (qo == r) n = 1;
            else if (Xh == r) n = -1;
            else if (x_ == r) e = 1;
            else {
                if (Wh != r) return;
                e = -1
            }
            hz && (s[dh] = R_, setTimeout(function() {
                s[dh] = ""
            }, 100)), z(i), t._kk._9d(n, e)
        };
        sr[call](this, i, r), this._30(i.clientWidth, i[D_])
    }

    function hr(t, i) {
        this[P_] = t, this[N_](i, t)
    }

    function ar() {
        w(this, ar, arguments)
    }

    function or(t, i) {
        this[P_] = t, this._j2 = ae(i), this.g = this._j2.g, this._9a = new fz
    }

    function fr(t) {
        var i = t[B_],
            n = [];
        return t.graphModel[Jf](function(i) {
            t[$_](i) && t[F_](i) && n[push](i)
        }), i.set(n)
    }

    function ur(t, i, n) {
        var e = t[bo];
        n = n || e, i = i || 1;
        var s = null;
        s && n.width * n.height * i * i > s && (i = Math.sqrt(s / n.width / n[Na]));
        var r = Ai();
        Wn(r.g), r[Da] = n.width * i, r[Na] = n[Na] * i, t._8j._gz(r.g, i, n);
        var h = null;
        try {
            h = r.toDataURL(G_)
        } catch (a) {
            wY[Yh](a)
        }
        return {
            canvas: r,
            data: h,
            width: r.width,
            height: r[Na]
        }
    }

    function cr(t) {
        this[Gc] = t, this[z_] = t[z_]
    }

    function _r(t, i) {
        this[Y_] = t, this[H_] = i || q_
    }

    function dr() {
        w(this, dr, arguments)
    }

    function lr(t, i) {
        if (!t) return i;
        var e = {};
        for (var s in t) e[s] = t[s];
        for (var s in i) e[s] === n && (e[s] = i[s]);
        return e
    }

    function vr() {
        w(this, vr, arguments)
    }

    function br() {
        w(this, br, arguments)
    }

    function yr() {
        w(this, yr, arguments)
    }

    function gr() {
        w(this, gr, arguments)
    }

    function pr(i, n, e) {
        i += window[la], n += window[va];
        var s = e.getBoundingClientRect();
        return {
            x: i + s[qo],
            y: n + s.top
        }
    }

    function mr(t, i, n) {
        var e = t[U_],
            s = t[W_];
        t.style.left = i - e / 2 + $a, t.style.top = n - s / 2 + $a
    }

    function xr(t) {
        var n = document[s_](Ha),
            e = n[qa](Ua),
            s = getComputedStyle(t, null),
            r = s.font;
        r || (r = s[X_] + gh + s[V_] + gh + s[Z_]), e[eo] = r;
        var h = t[J_],
            a = h[yh](ho),
            o = parseInt(s.fontSize),
            f = 0,
            u = 0;
        return wY.forEach(a, function(t) {
            var i = e[oo](t)[Da];
            i > f && (f = i), u += 1.2 * o
        }), {
            width: f,
            height: u
        }
    }

    function Er(t, n) {
        if (ph == typeof t[K_] && ph == typeof t[Q_]) {
            var e = t[J_],
                s = t[K_];
            t[J_] = e.slice(0, s) + n + e.slice(t[Q_]), t[Q_] = t[K_] = s + n[length]
        } else if (td != typeof document[id]) {
            var r = document.selection[nd]();
            r.text = n, r[ed](!1), r.select()
        }
    }

    function wr(i) {
        if (XG) {
            var n = window[sd] || window.pageXOffset,
                e = window[rd] || window[va];
            return i.select(), void window[hd](n, e)
        }
        i[ad]()
    }

    function kr() {}

    function Tr(t) {
        this[Gc] = t, this[z_] = t[z_], this[od] = hz ? 8 : 5
    }

    function Mr(t) {
        return t[Oo] == iH || t.type == nH
    }

    function Ir(t) {
        this.graph = t, this.topCanvas = t[z_], this[od] = hz ? 8 : 4, this._rotateHandleLength = hz ? 30 : 20
    }

    function Or(t, i) {
        var n = new bz;
        return n[Ba](Fn.call(t, {
            x: i.x,
            y: i.y
        })), n[Ba](Fn[call](t, {
            x: i.x + i[Da],
            y: i.y
        })), n[Ba](Fn[call](t, {
            x: i.x + i.width,
            y: i.y + i[Na]
        })), n[Ba](Fn.call(t, {
            x: i.x,
            y: i.y + i[Na]
        })), n
    }

    function jr(t) {
        t %= 2 * Math.PI;
        var i = Math[po](t / hU);
        return 0 == i || 4 == i ? "ew-resize" : 1 == i || 5 == i ? "nwse-resize" : 2 == i || 6 == i ? "ns-resize" : fd
    }

    function Sr(n, e, s) {
        var r = document[ud],
            h = new wY[cd](window[la], window.pageYOffset, r.clientWidth - 2, r.clientHeight - 2),
            a = n.offsetWidth,
            o = n.offsetHeight;
        e + a > h.x + h[Da] && (e = h.x + h[Da] - a), s + o > h.y + h[Na] && (s = h.y + h[Na] - o), e < h.x && (e = h.x), s < h.y && (s = h.y), n.style[qo] = e + $a, n.style.top = s + $a
    }

    function Cr(t, i, n, e, s) {
        this[Wo] = t, this[Oo] = _d, this.kind = i, this.event = n, this[ko] = e, this[dd] = s
    }

    function Ar(t) {
        this._4m = {}, this._kk = t, this._kk._1k[ld](this._94, this), this[vd] = kY[bd]
    }

    function Lr(t) {
        return t >= 100 && 200 > t
    }

    function Pr(t) {
        return t == TU || t == LU || t == AU || t == OU || t == DU || t == NU
    }

    function Rr() {
        var t, i, n = {},
            e = [],
            s = 0,
            r = {},
            h = 0;
        this[Gc][Jf](function(a) {
            if (this.isLayoutable(a)) if (a instanceof Cq) {
                var o = {
                    node: a,
                    id: a.id,
                    x: a.x,
                    y: a.y
                };
                for (this.appendNodeInfo && this[yd](a, o), n[a.id] = o, e[push](o), s++, i = a.parent; i instanceof Pq;) {
                    t || (t = {});
                    var f = t[i.id];
                    f || (f = t[i.id] = {
                        id: i.id,
                        children: []
                    }), f.children.push(o), i = i[Eu]
                }
            } else if (a instanceof Sq && !a.isLooped() && a[Tu] && a[wu]) {
                var o = {
                    edge: a
                };
                r[a.id] = o, h++
            }
        }, this);
        var a = {};
        for (var o in r) {
            var f = r[o],
                u = f.edge,
                c = u[Tu],
                _ = u[wu],
                d = c.id + ta + _.id,
                l = _.id + ta + c.id;
            if (n[c.id] && n[_.id] && !a[d] && !a[l]) {
                var v = n[c.id],
                    b = n[_.id];
                f[gd] = v, f.to = b, a[d] = f, this.appendEdgeInfo && this.appendEdgeInfo(u, f)
            } else delete r[o], h--
        }
        return {
            groups: t,
            nodesArray: e,
            nodes: n,
            nodeCount: s,
            edges: r,
            edgeCount: h,
            minEnergy: this[pd](s, h)
        }
    }

    function Dr(t) {
        this.graph = t, this[md] = {}
    }

    function Nr() {
        w(this, Nr, arguments)
    }

    function Br(t, i, n, e, s) {
        e ? t[Au](function(e) {
            var r = e[xd](t);
            r != n && r[Ed] != s && i(r, t)
        }, this, !0) : t[wd](function(e) {
            var r = e[wu];
            r != n && r[Ed] != s && i(r, t)
        })
    }
    var hasChildren = "hasChildren";
    var getChildren = "getChildren";
    var length = "length";
    var call = "call";
    var children = "children";
    var splice = "splice";
    var concat = "concat";
    var slice = "slice";
    var ceil = "ceil";
    var remove = "remove";
    var clone = "clone";
    var push = "push";
    var indexOf = "indexOf";
    var object = "object";
    var prototype = "prototype";
    var superclass = "superclass";
    var apply = "apply";
    var super_ = "super_";
    var rh = "$";
    var hh = "onEvent";
    var ah = "name";
    var oh = "defaultValue";
    var fh = "readOnly";
    var uh = "onSetting";
    var ch = "bind";
    var _h = "requestAnimationFrame";
    var dh = "className";
    var lh = "classList";
    var vh = "getAttribute";
    var bh = "class";
    var yh = "split";
    var gh = " ";
    var ph = "number";
    var mh = "string";
    var xh = "boolean";
    var Eh = "isArray";
    var wh = "event";
    var kh = "preventDefault";
    var Th = "returnValue";
    var Mh = "stopPropagation";
    var Ih = "cancelBubble";
    var Oh = "floor";
    var jh = "random";
    var Sh = "rgba(";
    var Ch = ",";
    var Ah = "toFixed";
    var Lh = ")";
    var Ph = "#";
    var Rh = "000000";
    var Dh = "enumerable";
    var Nh = "_";
    var Bh = "defineProperties";
    var $h = ".";
    var Fh = "touches";
    var Gh = "console";
    var zh = "trace";
    var Yh = "error";
    var Hh = "atan2";
    var qh = "_n2os";
    var Uh = "_sin";
    var Wh = "bottom";
    var Xh = "right";
    var Vh = "fromString";
    var Zh = "onChildAdd";
    var Jh = "onChildRemove";
    var Kh = "replace";
    var Qh = "ms-";
    var ta = "-";
    var ia = "toLowerCase";
    var na = "-ms-";
    var ea = "style";
    var sa = ":";
    var ra = ";";
    var ha = "insertRule";
    var aa = "{";
    var oa = "}";
    var fa = "addRule";
    var ua = "changedTouches";
    var ca = "getBoundingClientRect";
    var _a = "clientX";
    var da = "clientY";
    var la = "pageXOffset";
    var va = "pageYOffset";
    var ba = "pageY";
    var ya = "_scope";
    var ga = "_dragPoints";
    var pa = "_install";
    var ma = "metaKey";
    var xa = "points";
    var Ea = "'";
    var wa = "' XML format error.";
    var ka = "responseText";
    var Ta = "' JSON format error.";
    var Ma = "parse";
    var Ia = "?";
    var Oa = "__time=";
    var ja = "open";
    var Sa = "GET";
    var Ca = "onreadystatechange";
    var Aa = "readyState";
    var La = "status";
    var Pa = "' load error";
    var Ra = "send";
    var Da = "width";
    var Na = "height";
    var Ba = "addPoint";
    var $a = "px";
    var Fa = "webkitBackingStorePixelRatio";
    var Ga = "mozBackingStorePixelRatio";
    var za = "msBackingStorePixelRatio";
    var Ya = "backingStorePixelRatio";
    var Ha = "canvas";
    var qa = "getContext";
    var Ua = "2d";
    var Wa = "ratio";
    var Xa = "setSize";
    var Va = "FONT_STYLE";
    var Za = "FONT_SIZE";
    var Ja = "px ";
    var Ka = "FONT_FAMILY";
    var Qa = "save";
    var to = "translate";
    var io = "scale";
    var no = "LINE_HEIGHT";
    var eo = "font";
    var so = "textBaseline";
    var ro = "middle";
    var ho = "\n";
    var ao = "fillText";
    var oo = "measureText";
    var fo = "getImageData";
    var uo = "sqrt";
    var co = "_squareR";
    var _o = "_jhCircle";
    var lo = "_otherPoint";
    var vo = "validate";
    var bo = "bounds";
    var yo = "getBounds";
    var go = "intersectsPoint";
    var po = "round";
    var mo = "setTransform";
    var xo = "isPointInStroke";
    var Eo = "stroke";
    var wo = "fill";
    var ko = "data";
    var To = "lineWidth";
    var Mo = "isPointInPath";
    var Io = "lastPoint";
    var Oo = "type";
    var jo = "rotate";
    var So = "_p2x";
    var Co = "_p2y";
    var Ao = "_CCW";
    var Lo = "_p1y";
    var Po = "_my2";
    var Ro = "$boundaryPoint";
    var Do = "exec";
    var No = "lastIndexOf";
    var Bo = "substring";
    var $o = "draw";
    var Fo = "test";
    var Go = "IMAGE_WIDTH";
    var zo = "scaleMode";
    var Yo = "full.uniform";
    var Ho = "padding";
    var qo = "left";
    var Uo = "_myc";
    var Wo = "source";
    var Xo = "draw image error - ";
    var Vo = "getLocation";
    var Zo = "invalidTerminal";
    var Jo = "(";
    var Ko = "BLEND_MODE";
    var Qo = "BLEND_MODE_DARKEN";
    var tf = "BLEND_MODE_COLOR_BURN";
    var nf = "color error, [";
    var ef = "]";
    var sf = "BLEND_MODE_GRAY";
    var rf = "putImageData";
    var hf = "intersection";
    var af = "_m7NO";
    var of = "closePath";
    var ff = "_rest";
    var uf = "_myt";
    var cf = "$rotate";
    var _f = "$offsetX";
    var df = "$offsetY";
    var lf = "$rotatable";
    var vf = "$_hostRotate";
    var bf = "$layoutByAnchorPoint";
    var yf = "$invalidateSize";
    var gf = "$invalidateAnchorPoint";
    var pf = "setByRect";
    var mf = "$padding";
    var xf = "grow";
    var Ef = "$border";
    var wf = "$anchorPosition";
    var kf = "_n0ackgroundGradientInvalidateFlag";
    var Tf = "_n0ackgroundGradient";
    var Mf = "_lnShape";
    var If = "backgroundGradient";
    var Of = "$borderRadius";
    var jf = "_pointerX";
    var Sf = "$pointerX";
    var Cf = "_pointerY";
    var Af = "$pointerY";
    var Lf = "$pointerWidth";
    var Pf = "__mgPointer";
    var Rf = "getRect";
    var Df = "layoutByPath";
    var Nf = "_n03";
    var Bf = "$data";
    var $f = "isEmpty";
    var Ff = "lineDash";
    var Gf = "setLineDash";
    var zf = "getLineDash";
    var Yf = "mozDash";
    var Hf = "webkitLineDash";
    var qf = "mozDashOffset";
    var Uf = "webkitLineDashOffset";
    var Wf = "lineDashOffset";
    var Xf = "transparencyIndex";
    var Vf = "leftPos";
    var Zf = "topPos";
    var Jf = "forEach";
    var Kf = "clearRect";
    var Qf = "overrideMimeType";
    var tu = "onload";
    var iu = "onerror";
    var nu = "xhr";
    var eu = "join";
    var su = "charCodeAt";
    var ru = "charAt";
    var hu = "fromCharCode";
    var au = "decodeU";
    var ou = "omponent";
    var fu = "qunee";
    var uu = "lo";
    var cu = "lh";
    var _u = "t";
    var du = "12";
    var lu = "0.0.1";
    var vu = "2";
    var bu = "3";
    var yu = "containsById";
    var gu = "render";
    var pu = "equals";
    var mu = "onselectstart";
    var xu = "rect";
    var Eu = "parent";
    var wu = "toAgent";
    var ku = "getEdgeBundle";
    var Tu = "fromAgent";
    var Mu = "_my7";
    var Iu = "isInvalid";
    var Ou = "isLooped";
    var ju = "isDescendantOf";
    var Su = "childrenCount";
    var Cu = "roots";
    var Au = "forEachEdge";
    var Lu = "$from";
    var Pu = "forEachChild";
    var Ru = "moveTo";
    var Du = "lineTo";
    var Nu = "quadTo";
    var Bu = "curveTo";
    var $u = "SHAPE_CIRCLE";
    var Fu = "register";
    var Gu = "SHAPE_RECT";
    var zu = "SHAPE_STAR";
    var Yu = "SHAPE_PENTAGON";
    var Hu = "SHAPE_DIAMOND";
    var qu = "SHAPE_HEART";
    var Uu = "SHAPE_RHOMBUS";
    var Wu = "SHAPE_CROSS";
    var Xu = "SHAPE_ARROW_STANDARD";
    var Vu = "SHAPE_ARROW_1";
    var Zu = "SHAPE_ARROW_5";
    var Ju = "SHAPE_ARROW_6";
    var Ku = "SHAPE_ARROW_7";
    var Qu = "SHAPE_ARROW_8";
    var tc = "edge";
    var ic = "$image";
    var nc = "_myp";
    var ec = "validateFlags";
    var sc = "$invalidate";
    var rc = "target";
    var hc = "getProperty";
    var ac = "property";
    var oc = "bindingProperty";
    var fc = "callback";
    var uc = "PROPERTY_TYPE_ACCESSOR";
    var cc = "setStyle";
    var _c = "getStyle";
    var dc = "EDGE_SPLIT_VALUE";
    var lc = "EDGE_TYPE_ELBOW_HORIZONTAL";
    var vc = "EDGE_TYPE_ORTHOGONAL_HORIZONTAL";
    var bc = "EDGE_TYPE_HORIZONTAL_VERTICAL";
    var yc = "EDGE_TYPE_EXTEND_LEFT";
    var gc = "EDGE_TYPE_EXTEND_RIGHT";
    var pc = "EDGE_TYPE_ELBOW_VERTICAL";
    var mc = "EDGE_TYPE_VERTICAL_HORIZONTAL";
    var xc = "EDGE_TYPE_EXTEND_TOP";
    var Ec = "EDGE_SPLIT_BY_PERCENT";
    var wc = "EDGE_TYPE_EXTEND_BOTTOM";
    var kc = "EDGE_TYPE_ELBOW";
    var Tc = "EDGE_SPLIT_PERCENT";
    var Mc = "POSITIVE_INFINITY";
    var Ic = "EDGE_CORNER";
    var Oc = "EDGE_CORNER_NONE";
    var jc = "EDGE_CORNER_RADIUS";
    var Sc = "EDGE_CORNER_BEVEL";
    var Cc = "EDGE_CORNER_ROUND";
    var Ac = "EDGE_CONTROL_POINT";
    var Lc = "union";
    var Pc = "intersects";
    var Rc = "EDGE_TYPE_ORTHOGONAL";
    var Dc = "EDGE_TYPE_ORTHOGONAL_VERTICAL";
    var Nc = "ARROW_SIZE";
    var Bc = "getShape";
    var $c = "hasPathSegments";
    var Fc = "drawLoopedEdge";
    var Gc = "graph";
    var zc = "getUI";
    var Yc = "bodyBounds";
    var Hc = "busLayout";
    var qc = "angle";
    var Uc = "center";
    var Wc = "fromAtEdge";
    var Xc = "toAtEdge";
    var Vc = "firstPoint";
    var Zc = "contains";
    var Jc = "hitTest";
    var Kc = "LOOKING_EDGE_ENDPOINT_TOLERANCE";
    var Qc = "EDGE_LOOPED_EXTAND";
    var t_ = "perX";
    var i_ = "perY";
    var n_ = "match";
    var e_ = "enableSubNetwork";
    var s_ = "createElement";
    var r_ = "div";
    var h_ = "Q-Graph-Nav-Button";
    var a_ = "img";
    var o_ = "onclick";
    var f_ = "transform";
    var u_ = "rotate(180deg)";
    var c_ = "appendChild";
    var __ = "_navPane";
    var d_ = "Q-Graph-Nav";
    var l_ = "rgba(0, 0, 0, 0)";
    var v_ = "hidden";
    var b_ = "none";
    var y_ = "relative";
    var g_ = "_top";
    var p_ = "100%";
    var m_ = "NAVIGATION_IMAGE_TOP";
    var x_ = "top";
    var E_ = "_left";
    var w_ = "_right";
    var k_ = "0px";
    var T_ = "_n0ottom";
    var M_ = "NAVIGATION_IMAGE_LEFT";
    var I_ = "lineJoin";
    var O_ = "strokeStyle";
    var j_ = "#FFF";
    var S_ = "shadowColor";
    var C_ = "#888";
    var A_ = "toDataURL";
    var L_ = "drawImage";
    var P_ = "_n0aseCanvas";
    var R_ = "hover";
    var D_ = "clientHeight";
    var N_ = "init";
    var B_ = "selectionModel";
    var $_ = "isVisible";
    var F_ = "isSelectable";
    var G_ = "image/png";
    var z_ = "topCanvas";
    var Y_ = "interactions";
    var H_ = "defaultCursor";
    var q_ = "default";
    var U_ = "offsetWidth";
    var W_ = "offsetHeight";
    var X_ = "fontStyle";
    var V_ = "fontSize";
    var Z_ = "fontFamily";
    var J_ = "value";
    var K_ = "selectionStart";
    var Q_ = "selectionEnd";
    var td = "undefined";
    var id = "selection";
    var nd = "createRange";
    var ed = "collapse";
    var sd = "scrollX";
    var rd = "scrollY";
    var hd = "scrollTo";
    var ad = "select";
    var od = "handlerSize";
    var fd = "nesw-resize";
    var ud = "documentElement";
    var cd = "Rect";
    var _d = "interaction";
    var dd = "datas";
    var ld = "addListener";
    var vd = "currentMode";
    var bd = "INTERACTION_MODE_DEFAULT";
    var yd = "appendNodeInfo";
    var gd = "from";
    var pd = "minEnergyFunction";
    var md = "currentMovingNodes";
    var xd = "otherNode";
    var Ed = "_marker";
    var wd = "forEachOutEdge";
    var kd = "navigator";
    var Td = "userAgent";
    var Md = "ontouchstart";
    var Id = "oRequestAnimationFrame";
    var Od = "msRequestAnimationFrame";
    var jd = "setTimeout";
    var Sd = "cancelAnimationFrame";
    var Cd = "mozCancelAnimationFrame";
    var Ad = "oCancelAnimationFrame";
    var Ld = "msCancelAnimationFrame";
    var Pd = "#333";
    var Rd = "normal";
    var Dd = "_fontStyle";
    var Nd = "_fontSize";
    var Bd = "_fontFamily";
    var $d = "_fontChanged";
    var Fd = "_font";
    var Gd = "' not exist";
    var zd = "getById";
    var Yd = "_n0g";
    var Hd = "clear";
    var qd = "toDatas";
    var Ud = "toUpperCase";
    var Wd = "firstChild";
    var Xd = "nodeType";
    var Vd = "tagName";
    var Zd = "nextSibling";
    var Jd = "nextElementSibling";
    var Kd = "Point(";
    var Qd = ", ";
    var tl = "distance";
    var il = "Size(";
    var nl = "intersectsRect";
    var el = "addRect";
    var sl = "MAX_VALUE";
    var rl = " , ";
    var hl = "horizontalPosition";
    var al = "verticalPosition";
    var ol = "sortName";
    var fl = "l";
    var ul = "c";
    var cl = "r";
    var _l = "m";
    var dl = "b";
    var ll = "LEFT_MIDDLE";
    var vl = "LEFT_BOTTOM";
    var bl = "CENTER_TOP";
    var yl = "CENTER_MIDDLE";
    var gl = "CENTER_BOTTOM";
    var pl = "RIGHT_MIDDLE";
    var ml = "RIGHT_BOTTOM";
    var xl = "LEFT_TOP";
    var El = "radius";
    var wl = "classify";
    var kl = "source: ";
    var Tl = ", type: ";
    var Ml = ", kind: ";
    var Il = "kind";
    var Ol = "propertyType";
    var jl = "property.change";
    var Sl = ", propertyName: ";
    var Cl = ", oldValue: ";
    var Al = "oldValue";
    var Ll = ", value: ";
    var Pl = "propertyName";
    var Rl = "oldIndex";
    var Dl = "child.add";
    var Nl = "child.remove";
    var Bl = "child";
    var $l = "newIndex";
    var Fl = "child.index";
    var Gl = "listener";
    var zl = "beforeEvent";
    var Yl = "scope";
    var Hl = "listeners";
    var ql = "list";
    var Ul = ", data: ";
    var Wl = ", index: ";
    var Xl = "index";
    var Vl = ", oldIndex: ";
    var Zl = "KIND_ADD";
    var Jl = "add";
    var Kl = "KIND_CLEAR";
    var Ql = "KIND_INDEX_CHANGE";
    var tv = "index.change";
    var iv = "_n0w";
    var nv = "PROPERTY_TYPE_CLIENT";
    var ev = "onParentChanged";
    var sv = "toChildren";
    var rv = "onChildrenClear";
    var hv = "getId";
    var av = "accept";
    var ov = "_kf";
    var fv = "KIND_REMOVE";
    var uv = "_hg";
    var cv = "filter";
    var _v = "listChangeDispatcher";
    var dv = "selectionChangeDispatcher";
    var lv = "_selectionModel";
    var vv = "dataChangeDispatcher";
    var bv = "parentChangeDispatcher";
    var yv = "childIndexChangeDispatcher";
    var gv = "$roots";
    var pv = "setIndex";
    var mv = "disconnect";
    var xv = "getEdges";
    var Ev = "removeChild";
    var wv = "__6b";
    var kv = "_n2rIndexFlag";
    var Tv = "data '";
    var Mv = "getByIndex";
    var Iv = "_n0oxChangeListener";
    var Ov = "head";
    var jv = "Transform";
    var Sv = "createPopup";
    var Cv = "createTextNode";
    var Av = "text/css";
    var Lv = "qunee-styles";
    var Pv = ";\n";
    var Rv = "handle";
    var Dv = "addEventListener";
    var Nv = "LONG_PRESS_INTERVAL";
    var Bv = "touchstart,touchmove,touchend,touchcancel";
    var $v = "onmousewheel";
    var Fv = "DOMMouseScroll";
    var Gv = "contextmenu,mousedown,mouseup,click,dblclick,mousemove,keydown,keyup,";
    var zv = ",touchstart,touchmove,touchend,touchcancel";
    var Yv = "TouchEvent";
    var Hv = "_n2urrentItem";
    var qv = "_onWindowMouseMove";
    var Uv = "__dragging";
    var Wv = "mousemove";
    var Xv = "mouseup";
    var Vv = "removeEventListener";
    var Zv = "timeStamp";
    var Jv = "__myction";
    var Kv = "_myction";
    var Qv = "_toQEvent";
    var tb = "on";
    var ib = "__longPressTimer";
    var nb = "__onLongPressFunction";
    var eb = "__n2ancelClick";
    var sb = "button";
    var rb = "_onEvent";
    var hb = "onlongpress2";
    var ab = "onlongpress";
    var ob = "_n2ancelLongPressTimer";
    var fb = "__fixTouchEvent";
    var ub = "__touchCountChange";
    var cb = "_ksEvent";
    var _b = "__ksLongPress";
    var db = "__ksMulTouchEvent";
    var lb = "_scale";
    var vb = "dScale";
    var bb = "prevScale";
    var yb = "__pinching";
    var gb = "startpinch";
    var pb = "_ksdrag";
    var mb = "_ondrag";
    var xb = "onpinch";
    var Eb = "endpinch";
    var wb = "_enddrag";
    var kb = "__onclick";
    var Tb = "_handleTouchEvent";
    var Mb = "mousedown";
    var Ib = "_onrelease";
    var Ob = "click";
    var jb = "dblclick";
    var Sb = "_delayClickEvent";
    var Cb = "contextmenu";
    var Ab = "oncontextmenu";
    var Lb = "wheelDelta";
    var Pb = "detail";
    var Rb = "delta";
    var Db = "_handler";
    var Nb = "onevent";
    var Bb = "onmouseup";
    var $b = "screenX";
    var Fb = "screenY";
    var Gb = "_ksDragDistance";
    var zb = "__n2lickTimer";
    var Yb = "ondblclick";
    var Hb = "__dblclicked";
    var qb = "onstart2";
    var Ub = "onstart";
    var Wb = "onrelease2";
    var Xb = "onrelease";
    var Vb = "startdrag2";
    var Zb = "startdrag";
    var Jb = "_myppendDragInfo";
    var Kb = "ondrag2";
    var Qb = "ondrag";
    var ty = "getCurrentSpeed";
    var iy = "enddrag2";
    var ny = "enddrag";
    var ey = "_krStatus";
    var sy = "getElementByMouseEvent";
    var ry = "getUIByMouseEvent";
    var hy = "_mjData";
    var ay = "_iyListeners";
    var oy = "onElementRemoved";
    var fy = "_1vs";
    var uy = "_i5Interactions";
    var cy = "_n2ustomInteractionListeners";
    var _y = "__handleEvent";
    var dy = "destroy";
    var ly = "_i5Interaction";
    var vy = "_ksX";
    var by = "_ksY";
    var yy = "startY";
    var gy = "totalDeltaY";
    var py = "limitCount";
    var my = "-webkit-zoom-in";
    var xy = "-webkit-zoom-out";
    var Ey = "-webkit-grab";
    var wy = "-webkit-grabbing";
    var ky = "-moz-zoom-in";
    var Ty = "-moz-zoom-out";
    var My = "-moz-grab";
    var Iy = "-moz-grabbing";
    var Oy = "crosshair";
    var jy = "move";
    var Sy = "url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFVJREFUeNpi/P//PwMlgBGfAYyMIOn/jGQZANIMoskyAKYZGeAyiGgX4PIOSWGAzRBGUmMBw1CqGUBMlA1yA4gxhKhYwBnfpKQDqqREquRGYgBAgAEAD8h/4adTIzwAAAAASUVORK5CYII=) 8 8,crosshair";
    var Cy = "bounceIn";
    var Ay = "bounceOut";
    var Ly = "_n2allback";
    var Py = "_requestID";
    var Ry = "_onStep";
    var Dy = "_m3";
    var Ny = "_n2p";
    var By = "0.0";
    var $y = "isTouchSupport";
    var Fy = "isIOS";
    var Gy = "containsRect";
    var zy = "Size";
    var Yy = "Point";
    var Hy = "Event";
    var qy = "PropertyChangeEvent";
    var Uy = "ListEvent";
    var Wy = "Handler";
    var Xy = "Position";
    var Vy = "Data";
    var Zy = "SelectionModel";
    var Jy = "IListener";
    var Ky = "loadURL";
    var Qy = "loadXML";
    var tg = "isMetaKey";
    var ig = "calculateDistance";
    var ng = "HashList";
    var eg = "alert";
    var sg = "prompt";
    var rg = "confirm";
    var hg = "addCSSRule";
    var ag = "flip";
    var og = "mirror";
    var fg = "border.rect";
    var ug = "border";
    var cg = "shadow";
    var _g = "elbow";
    var dg = "elbow.H";
    var lg = "elbow.V";
    var vg = "orthogonal";
    var bg = "orthogonal.H";
    var yg = "orthogonal.V";
    var gg = "orthogonal.H.V";
    var pg = "orthogonal.V.H";
    var mg = "extend.top";
    var xg = "extend.left";
    var Eg = "extend.bottom";
    var wg = "extend.right";
    var kg = "zigzag";
    var Tg = "bevel";
    var Mg = "circle";
    var Ig = "ELLIPSE";
    var Og = "oval";
    var jg = "roundrect";
    var Sg = "star";
    var Cg = "triangle";
    var Ag = "hexagon";
    var Lg = "pentagon";
    var Pg = "trapezium";
    var Rg = "rhombus";
    var Dg = "parallelogram";
    var Ng = "heart";
    var Bg = "diamond";
    var $g = "cross";
    var Fg = "arrow.standard";
    var Gg = "arrow.1";
    var zg = "arrow.2";
    var Yg = "arrow.3";
    var Hg = "arrow.4";
    var qg = "arrow.5";
    var Ug = "arrow.6";
    var Wg = "arrow.7";
    var Xg = "arrow.8";
    var Vg = "arrow.open";
    var Zg = "LINE_CAP_TYPE_BUTT";
    var Jg = "butt";
    var Kg = "LINE_CAP_TYPE_ROUND";
    var Qg = "LINE_CAP_TYPE_SQUARE";
    var tp = "square";
    var ip = "LINE_JOIN_TYPE_ROUND";
    var np = "miter";
    var ep = "SELECTION_TYPE";
    var sp = "SELECTION_TYPE_SHADOW";
    var rp = "SELECTION_BORDER";
    var hp = "SELECTION_SHADOW_BLUR";
    var ap = "SELECTION_COLOR";
    var op = "BORDER_RADIUS";
    var fp = "POINTER_WIDTH";
    var up = "IMAGE_MAX_SIZE";
    var cp = "devicePixelRatio";
    var _p = "offset";
    var dp = "arcTo";
    var lp = "_p1x";
    var vp = "$boundaryPoint1";
    var bp = "$boundaryPoint2";
    var yp = "IMAGE_HEIGHT";
    var gp = "_dispatcher";
    var pp = "parentNode";
    var mp = "Image load error - ";
    var xp = "_pixels";
    var Ep = "_n2t";
    var wp = "visibility";
    var kp = "_width";
    var Tp = "fillStyle";
    var Mp = "#CCC";
    var Ip = "clip";
    var Op = "textAlign";
    var jp = "normal ";
    var Sp = "strokeText";
    var Cp = "#000";
    var Ap = "shadowBlur";
    var Lp = "shadowOffsetY";
    var Pp = "Loading...";
    var Rp = "Error...";
    var Dp = "renderColor";
    var Np = "renderColorBlendMode";
    var Bp = "cacheable";
    var $p = "_defaultCache";
    var Fp = "MAX_CACHE_PIXELS";
    var Gp = "maxScale";
    var zp = "image";
    var Yp = "load";
    var Hp = "getAllImages";
    var qp = "colors";
    var Up = "positions";
    var Wp = "GRADIENT_TYPE_RADIAL";
    var Xp = "GRADIENT_TYPE_LINEAR";
    var Vp = "position";
    var Zp = "createRadialGradient";
    var Jp = "addColorStop";
    var Kp = "RADIAL_GRADIENT";
    var Qp = "q";
    var tm = "a";
    var im = "z";
    var nm = "SEGMENT_MOVE_TO";
    var em = "SEGMENT_QUAD_TO";
    var sm = "SEGMENT_CURVE_TO";
    var rm = "SEGMENT_ARC_TO";
    var hm = "isNumber";
    var am = "PathSegment";
    var om = "toJSON";
    var fm = "selectionColor";
    var um = "selectionShadowBlur";
    var cm = "selectionShadowOffsetY";
    var _m = "selectionBorder";
    var dm = "lineCap";
    var lm = "selectionType";
    var vm = "outlineStyle";
    var bm = "fillGradient";
    var ym = "beginPath";
    var gm = "_height";
    var pm = "_pixelSize";
    var mm = "_originalPixelsWidth";
    var xm = "_originalPixels";
    var Em = "darken";
    var wm = "BLEND_MODE_MULTIPLY";
    var km = "multiply";
    var Tm = "color.burn";
    var Mm = "BLEND_MODE_LINEAR_BURN";
    var Im = "linear.burn";
    var Om = "BLEND_MODE_LIGHTEN";
    var jm = "lighten";
    var Sm = "BLEND_MODE_SCREEN";
    var Cm = "screen";
    var Am = "gray";
    var Lm = "rgba(0,0,0,0)";
    var Pm = "restore";
    var Rm = "createLinearGradient";
    var Dm = "#1C6B9D";
    var Nm = "#186493";
    var Bm = "#145E8B";
    var $m = "#115B87";
    var Fm = "#115A85";
    var Gm = "#125C89";
    var zm = "#176291";
    var Ym = "#1D6C9F";
    var Hm = "#2479B0";
    var qm = "#2881BB";
    var Um = "#1F6FA2";
    var Wm = "#115A86";
    var Xm = "#004063";
    var Vm = "bezierCurveTo";
    var Zm = "#2e8ece";
    var Jm = "#efefef";
    var Km = "#135D89";
    var Qm = "#186494";
    var tx = "#1F70A4";
    var ix = "#257AB2";
    var nx = "#2377AD";
    var ex = "#1E6DA0";
    var sx = "#105984";
    var rx = "#f7f8f8";
    var hx = "#6A6969";
    var ax = "#4F4C4B";
    var ox = "#545252";
    var fx = "#646262";
    var ux = "#6F6E6F";
    var cx = "#4C4948";
    var _x = "#494645";
    var dx = "#7D7D7D";
    var lx = "#808080";
    var vx = "#888888";
    var bx = "#939293";
    var yx = "#9E9D9D";
    var gx = "#A7A5A4";
    var px = "#A9A6A5";
    var mx = "#A7A4A3";
    var xx = "#FFFFFF";
    var Ex = "#E9EAEA";
    var wx = "#9fa0a0";
    var kx = "quadraticCurveTo";
    var Tx = "#c9caca";
    var Mx = "#3e3a39";
    var Ix = "#B2CBEA";
    var Ox = "#2E8ECE";
    var jx = "miterLimit";
    var Sx = "#727171";
    var Cx = "#b5b5b6";
    var Ax = "Q-";
    var Lx = "$invalidateRotate";
    var Px = "_n2k";
    var Rx = "_n2ache";
    var Dx = "_i5ed";
    var Nx = "removeListener";
    var Bx = "_n0i";
    var $x = "read";
    var Fx = "readByte";
    var Gx = "readUnsigned";
    var zx = "readBytes";
    var Yx = "Invalid LZW code.";
    var Hx = "GIF";
    var qx = "Not a GIF file.";
    var Ux = "colorRes";
    var Wx = "sorted";
    var Xx = "shift";
    var Vx = "bgColor";
    var Zx = "pixelAspectRatio";
    var Jx = "gctSize";
    var Kx = "reserved";
    var Qx = "disposalMethod";
    var tE = "userInput";
    var iE = "transparencyGiven";
    var nE = "delayTime";
    var eE = "comment";
    var sE = "ptData";
    var rE = "iterations";
    var hE = "terminator";
    var aE = "NETSCAPE";
    var oE = "appData";
    var fE = "identifier";
    var uE = "authCode";
    var cE = "unknown";
    var _E = "label";
    var dE = "extType";
    var lE = "gce";
    var vE = "com";
    var bE = "pte";
    var yE = "app";
    var gE = "lctFlag";
    var pE = "interlaced";
    var mE = "lctSize";
    var xE = "lzwMinCodeSize";
    var EE = "pixels";
    var wE = "ext";
    var kE = "eof";
    var TE = "Unknown block: 0x";
    var ME = "sentinel";
    var IE = "keydown";
    var OE = "shiftKey";
    var jE = "altKey";
    var SE = "keyCode";
    var CE = "\nVersion - ";
    var AE = "version";
    var LE = "\nPublish Date - ";
    var PE = "publishDate";
    var RE = "f43b4e1133375609ab7a3212e157552652782c3dc9abfe47273959defd82eba0b5f3781a7138bf00c4058fe3baecfd0bd71b95ee2829913463cc3e828f92dea6b1279474f1204cef9df67f9c5d1e4e36474b2d00cd8d3e,cb1a696d47a44f741bf667aefb497aa4dcfcdabc9817288dface24a7fd3c0afdb18ddb42e49bdea0c4959fc57cb1376aef9112c0af805babe9409c365ea9b1818c83bca6ae129737465a751e1fffc38ca8c79e05804bca,8dec9f2f783e58213cc13ee1c6783e4acffae48d866bb88ec64115eb395539b9cd39c3825f3114b5dd354090e18299f56a3c9a91344bcda356104a55a973ba087adc941974c224c3738b8b53473fe15403c3d7043df38f";
    var DE = "\nLicensed to: ";
    var NE = "%20website%3A%20demo.qunee.com%2Cmap.qunee.com%2Ccn.qunee.com";
    var BE = "fil";
    var $E = "nee";
    var FE = "RIC";
    var GE = "setT";
    var zE = "ho";
    var YE = "7.";
    var HE = "ca";
    var qE = "os";
    var UE = "ifr";
    var WE = "Canvas";
    var XE = "Rend";
    var VE = "Cont";
    var ZE = "proto";
    var JE = "locat";
    var KE = "create";
    var QE = "11000";
    var tw = "15000";
    var iw = "17000";
    var nw = "20000";
    var ew = "31000";
    var sw = "32000";
    var rw = "imeout";
    var hw = "ion";
    var aw = "stname";
    var ow = "Qu";
    var fw = " for HTML5";
    var uw = "iframe";
    var cw = "display";
    var _w = "contentWindow";
    var dw = "localhost";
    var lw = "127.00.1";
    var vw = "String";
    var bw = "overflow";
    var yw = "Element";
    var gw = "ame";
    var pw = "cont";
    var mw = "entWindow";
    var xw = "ering";
    var Ew = "ext2D";
    var ww = "lText";
    var kw = "absolute";
    var Tw = "0 0";
    var Mw = "Q-Canvas";
    var Iw = "Q-CanvasPanel";
    var Ow = "Q-Graph";
    var jw = "_myr";
    var Sw = "_n2m";
    var Cw = "_lgingList";
    var Aw = "_viewport";
    var Lw = "_n0v";
    var Pw = "setParent";
    var Rw = "_6bs";
    var Dw = "invalidate";
    var Nw = "_n2r";
    var Bw = "size";
    var $w = "viewport";
    var Fw = "_j7ingID";
    var Gw = "_n2x";
    var zw = "_myi";
    var Yw = "fullRefresh";
    var Hw = "__hz";
    var qw = "_myo";
    var Uw = "_my4";
    var Ww = "_my1";
    var Xw = "sort";
    var Vw = "zIndex";
    var Zw = "boundingBox";
    var Jw = "_n2tx";
    var Kw = "_n0uffer";
    var Qw = "_n2rCanvasSizeFlag";
    var tk = "_n2urrentMatrix";
    var ik = "invert";
    var nk = "matrix";
    var ek = "matrix(";
    var sk = "__n2ssMatrix";
    var rk = "visible";
    var hk = "getElementById";
    var ak = "_my5";
    var ok = "SELECTION_TOLERANCE";
    var fk = "uiId";
    var uk = "__jb";
    var ck = "_n25";
    var _k = "_n2rBoundsFlag";
    var dk = "toLogical";
    var lk = "translateTo";
    var vk = "_n0ackCanvas";
    var bk = "clientWidth";
    var yk = "_viewportClips";
    var gk = "getGlobalBounds";
    var pk = "canvasBounds";
    var mk = "_toIntRect";
    var xk = "_n2i";
    var Ek = "NAVIGATION_BUTTON";
    var wk = "navigation.button";
    var kk = "NAVIGATION_SCROLLBAR";
    var Tk = "navigation.scrollbar";
    var Mk = "NAVIGATION_TYPE";
    var Ik = "_j7";
    var Ok = "_topCanvas";
    var jk = "_4v";
    var Sk = "_hzFilter";
    var Ck = "isBundleEnabled";
    var Ak = "uiBounds";
    var Lk = "_6k";
    var Pk = "forEachReverse";
    var Rk = "_30";
    var Dk = "_viewportChanged";
    var Nk = "_originAdjusted";
    var Bk = "originAtCenter";
    var $k = "invalidateVisibility";
    var Fk = "_fn";
    var Gk = "_8tChanged";
    var zk = "element.bounds";
    var Yk = "__3v";
    var Hk = "renderScale";
    var qk = "toCanvas";
    var Uk = "selected";
    var Wk = "invalidateRender";
    var Xk = "uiClass";
    var Vk = "expanded";
    var Zk = "onPropertyChange";
    var Jk = "invalidateData";
    var Kk = "_myv";
    var Qk = "_edgeBundleInvalidateFlag";
    var tT = "validateEdgeBundle";
    var iT = "_myz";
    var nT = "forEachByDepthFirst";
    var eT = "__ky";
    var sT = "hasEdge";
    var rT = "getIndexById";
    var hT = "graphModel";
    var aT = "UI '";
    var oT = "' not found";
    var fT = "setIndexBefore";
    var uT = "setIndexAfter";
    var cT = "viewportBounds";
    var _T = "_kkModel";
    var dT = "reverseTransform";
    var lT = "_n0ackM";
    var vT = "_globalBounds";
    var bT = "$name";
    var yT = "_mye";
    var gT = "ui";
    var pT = "_n0s";
    var mT = "Q.Element";
    var xT = "tooltip";
    var ET = "putStyles";
    var wT = "findGroup";
    var kT = "connect";
    var TT = "Q.Edge";
    var MT = "_n2j";
    var IT = "edges";
    var OT = "path.segment";
    var jT = "firePathChange";
    var ST = "to";
    var CT = "edgeType";
    var AT = "bundleEnabled";
    var LT = "Q-node";
    var PT = "$location";
    var RT = "hasLoops";
    var DT = "_linkedNodes";
    var NT = "location";
    var BT = "host";
    var $T = "hasFollowers";
    var FT = "toFollowers";
    var GT = "_host";
    var zT = "Q.Node";
    var YT = "follower.add";
    var HT = "follower.remove";
    var qT = "anchorPosition";
    var UT = "path";
    var WT = "SHAPENODE_STYLES";
    var XT = "ARROW_TO";
    var VT = "Q.ShapeNode";
    var ZT = "removePathSegment";
    var JT = "segments";
    var KT = "generator";
    var QT = "Q.Bus";
    var tM = "currentSubNetwork";
    var iM = "GROUP_TYPE_RECT";
    var nM = "GROUP_EXPANDED";
    var eM = "GROUP_MIN_SIZE";
    var sM = "GROUP_PADDING";
    var rM = "group";
    var hM = "$minSize";
    var aM = "Q.Group";
    var oM = "minSize";
    var fM = "groupType";
    var uM = "groupImage";
    var cM = "Q.Text";
    var _M = "#444";
    var dM = "$anchorPoint";
    var lM = "selectionShadowOffsetX";
    var vM = "selectionBackgroundColor";
    var bM = "fillRect";
    var yM = "strokeRect";
    var gM = "syncSelection";
    var pM = "syncSelectionStyles";
    var mM = "$alpha";
    var xM = "offsetX";
    var EM = "offsetY";
    var wM = "shadowOffsetX";
    var kM = "_empty";
    var TM = "borderColor";
    var MM = "borderLineDash";
    var IM = "borderLineDashOffset";
    var OM = "$backgroundColor";
    var jM = "$backgroundGradient";
    var SM = "$invalidateData";
    var CM = "measure";
    var AM = "validateSize";
    var LM = "onBoundsChanged";
    var PM = "$invalidateLocation";
    var RM = "$invalidateVisibility";
    var DM = "$showEmpty";
    var NM = "initialize";
    var BM = "doValidate";
    var $M = "doHitTest";
    var FM = "_mym";
    var GM = "Visibility";
    var zM = "Location";
    var YM = "AnchorPoint";
    var HM = "BackgroundGradient";
    var qM = "Rotate";
    var UM = "PROPERTY_TYPE_STYLE";
    var WM = "selection.color";
    var XM = "selection.border";
    var VM = "SELECTION_SHADOW_OFFSET_X";
    var ZM = "SELECTION_SHADOW_OFFSET_Y";
    var JM = "selection.type";
    var KM = "render.color";
    var QM = "ALPHA";
    var tI = "alpha";
    var iI = "SHADOW_BLUR";
    var nI = "shadow.blur";
    var eI = "SHADOW_COLOR";
    var sI = "shadow.color";
    var rI = "SHADOW_OFFSET_X";
    var hI = "shadow.offset.x";
    var aI = "SHADOW_OFFSET_Y";
    var oI = "shadow.offset.y";
    var fI = "SHAPE_STROKE";
    var uI = "shape.stroke";
    var cI = "SHAPE_STROKE_STYLE";
    var _I = "shape.stroke.style";
    var dI = "SHAPE_LINE_DASH";
    var lI = "shape.line.dash";
    var vI = "SHAPE_LINE_DASH_OFFSET";
    var bI = "SHAPE_FILL_COLOR";
    var yI = "shape.fill.color";
    var gI = "SHAPE_FILL_GRADIENT";
    var pI = "shape.fill.gradient";
    var mI = "SHAPE_OUTLINE";
    var xI = "shape.outline";
    var EI = "SHAPE_OUTLINE_STYLE";
    var wI = "shape.outline.style";
    var kI = "line.cap";
    var TI = "line.join";
    var MI = "layout.by.path";
    var II = "background.color";
    var OI = "BACKGROUND_GRADIENT";
    var jI = "background.gradient";
    var SI = "border.width";
    var CI = "border.color";
    var AI = "BORDER_LINE_DASH";
    var LI = "border.line.dash";
    var PI = "BORDER_LINE_DASH_OFFSET";
    var RI = "border.radius";
    var DI = "PADDING";
    var NI = "IMAGE_BACKGROUND_COLOR";
    var BI = "IMAGE_BACKGROUND_GRADIENT";
    var $I = "image.border.width";
    var FI = "IMAGE_BORDER_STYLE";
    var GI = "IMAGE_BORDER_COLOR";
    var zI = "image.border.style";
    var YI = "IMAGE_BORDER_LINE_DASH";
    var HI = "IMAGE_BORDER_LINE_DASH_OFFSET";
    var qI = "IMAGE_RADIUS";
    var UI = "IMAGE_BORDER_RADIUS";
    var WI = "image.radius";
    var XI = "IMAGE_PADDING";
    var VI = "image.padding";
    var ZI = "IMAGE_Z_INDEX";
    var JI = "image.z.index";
    var KI = "IMAGE_ADJUST";
    var QI = "image.adjust";
    var tO = "IMAGE_ALPHA";
    var iO = "image.alpha";
    var nO = "LABEL_ROTATE";
    var eO = "label.rotate";
    var sO = "label.position";
    var rO = "LABEL_VISIBLE";
    var hO = "label.visible";
    var aO = "LABEL_ANCHOR_POSITION";
    var oO = "LABEL_COLOR";
    var fO = "label.color";
    var uO = "LABEL_FONT_SIZE";
    var cO = "label.font.size";
    var _O = "LABEL_FONT_FAMILY";
    var dO = "label.font.family";
    var lO = "LABEL_FONT_STYLE";
    var vO = "label.font.style";
    var bO = "LABEL_PADDING";
    var yO = "label.padding";
    var gO = "label.pointer.width";
    var pO = "LABEL_POINTER";
    var mO = "label.pointer";
    var xO = "LABEL_RADIUS";
    var EO = "label.radius";
    var wO = "LABEL_OFFSET_X";
    var kO = "label.offset.x";
    var TO = "LABEL_OFFSET_Y";
    var MO = "label.offset.y";
    var IO = "LABEL_SIZE";
    var OO = "label.size";
    var jO = "LABEL_ALIGN_POSITION";
    var SO = "label.align.position";
    var CO = "label.border";
    var AO = "LABEL_BORDER_STYLE";
    var LO = "label.border.style";
    var PO = "LABEL_BACKGROUND_COLOR";
    var RO = "LABEL_BACKGROUND_GRADIENT";
    var DO = "LABEL_ROTATABLE";
    var NO = "label.rotatable";
    var BO = "LABEL_SHADOW_BLUR";
    var $O = "label.shadow.blur";
    var FO = "LABEL_SHADOW_COLOR";
    var GO = "label.shadow.color";
    var zO = "LABEL_SHADOW_OFFSET_X";
    var YO = "LABEL_SHADOW_OFFSET_Y";
    var HO = "LABEL_Z_INDEX";
    var qO = "label.z.index";
    var UO = "LABEL_ON_TOP";
    var WO = "label.on.top";
    var XO = "GROUP_BACKGROUND_COLOR";
    var VO = "GROUP_BACKGROUND_GRADIENT";
    var ZO = "GROUP_STROKE";
    var JO = "group.stroke";
    var KO = "GROUP_STROKE_STYLE";
    var QO = "group.stroke.color";
    var tj = "GROUP_STROKE_LINE_DASH_OFFSET";
    var ij = "EDGE_BUNDLE_LABEL_ROTATE";
    var nj = "EDGE_BUNDLE_LABEL_POSITION";
    var ej = "EDGE_BUNDLE_LABEL_COLOR";
    var sj = "EDGE_BUNDLE_LABEL_FONT_SIZE";
    var rj = "EDGE_BUNDLE_LABEL_FONT_FAMILY";
    var hj = "EDGE_BUNDLE_LABEL_POINTER_WIDTH";
    var aj = "EDGE_BUNDLE_LABEL_POINTER";
    var oj = "EDGE_BUNDLE_LABEL_BORDER";
    var fj = "EDGE_BUNDLE_LABEL_BORDER_STYLE";
    var uj = "EDGE_BUNDLE_LABEL_BACKGROUND_COLOR";
    var cj = "EDGE_BUNDLE_LABEL_ROTATABLE";
    var _j = "EDGE_WIDTH";
    var dj = "edge.width";
    var lj = "EDGE_COLOR";
    var vj = "edge.color";
    var bj = "EDGE_OUTLINE";
    var yj = "edge.outline";
    var gj = "EDGE_OUTLINE_STYLE";
    var pj = "edge.outline.style";
    var mj = "EDGE_LINE_DASH";
    var xj = "edge.line.dash";
    var Ej = "EDGE_LINE_DASH_OFFSET";
    var wj = "EDGE_FROM_OFFSET";
    var kj = "edge.from.offset";
    var Tj = "edge.to.offset";
    var Mj = "edge.bundle.gap";
    var Ij = "edge.looped.extand";
    var Oj = "edge.extend";
    var jj = "edge.control.point";
    var Sj = "edge.split.percent";
    var Cj = "edge.split.value";
    var Aj = "edge.corner";
    var Lj = "edge.corner.radius";
    var Pj = "EDGE_FROM_AT_EDGE";
    var Rj = "edge.from.at.edge";
    var Dj = "EDGE_TO_AT_EDGE";
    var Nj = "edge.to.at.edge";
    var Bj = "arrow.from";
    var $j = "ARROW_FROM_SIZE";
    var Fj = "arrow.from.size";
    var Gj = "ARROW_FROM_OFFSET";
    var zj = "arrow.from.offset";
    var Yj = "ARROW_FROM_STROKE";
    var Hj = "arrow.from.stroke";
    var qj = "ARROW_FROM_STROKE_STYLE";
    var Uj = "arrow.from.outline";
    var Wj = "ARROW_FROM_OUTLINE_STYLE";
    var Xj = "arrow.from.line.dash";
    var Vj = "ARROW_FROM_LINE_DASH_OFFSET";
    var Zj = "ARROW_FROM_FILL_COLOR";
    var Jj = "arrow.from.line.cap";
    var Kj = "arrow.from.line.join";
    var Qj = "arrow.to";
    var tS = "ARROW_TO_SIZE";
    var iS = "arrow.to.size";
    var nS = "ARROW_TO_OFFSET";
    var eS = "arrow.to.offset";
    var sS = "ARROW_TO_STROKE";
    var rS = "arrow.to.stroke";
    var hS = "arrow.to.outline";
    var aS = "ARROW_TO_OUTLINE_STYLE";
    var oS = "ARROW_TO_LINE_DASH";
    var fS = "arrow.to.line.dash";
    var uS = "ARROW_TO_LINE_DASH_OFFSET";
    var cS = "ARROW_TO_FILL_COLOR";
    var _S = "arrow.to.fill.color";
    var dS = "ARROW_TO_FILL_GRADIENT";
    var lS = "ARROW_TO_LINE_CAP";
    var vS = "arrow.to.line.cap";
    var bS = "ARROW_TO_LINE_JOIN";
    var yS = "arrow.to.line.join";
    var gS = "LABEL_POSITION";
    var pS = "color";
    var mS = "LABEL_BORDER";
    var xS = "backgroundColor";
    var ES = "showOnTop";
    var wS = "alignPosition";
    var kS = "LABEL_POINTER_WIDTH";
    var TS = "pointerWidth";
    var MS = "showPointer";
    var IS = "borderRadius";
    var OS = "rotatable";
    var jS = "RENDER_COLOR";
    var SS = "_2e";
    var CS = "BACKGROUND_COLOR";
    var AS = "BORDER";
    var LS = "BORDER_COLOR";
    var PS = "_n20";
    var RS = "fillColor";
    var DS = "adjustType";
    var NS = "outline";
    var BS = "LINE_CAP";
    var $S = "LINE_JOIN";
    var FS = "checkBody";
    var GS = "_59";
    var zS = "shape";
    var YS = "GROUP_STROKE_LINE_DASH";
    var HS = "_3v";
    var qS = "EDGE_EXTEND";
    var US = "ARROW_FROM";
    var WS = "fromArrow";
    var XS = "toArrow";
    var VS = "EDGE_TO_OFFSET";
    var ZS = "fromArrowSize";
    var JS = "fromArrowOffset";
    var KS = "fromArrowStroke";
    var QS = "fromArrowStrokeStyle";
    var tC = "ARROW_FROM_OUTLINE";
    var iC = "fromArrowOutline";
    var nC = "fromArrowFillColor";
    var eC = "ARROW_FROM_FILL_GRADIENT";
    var sC = "ARROW_FROM_LINE_DASH";
    var rC = "fromArrowLineDash";
    var hC = "ARROW_FROM_LINE_JOIN";
    var aC = "fromArrowLineJoin";
    var oC = "ARROW_FROM_LINE_CAP";
    var fC = "fromArrowLineCap";
    var uC = "toArrowSize";
    var cC = "toArrowOffset";
    var _C = "toArrowStroke";
    var dC = "ARROW_TO_STROKE_STYLE";
    var lC = "toArrowStrokeStyle";
    var vC = "ARROW_TO_OUTLINE";
    var bC = "toArrowOutline";
    var yC = "toArrowOutlineStyle";
    var gC = "toArrowFillColor";
    var pC = "toArrowFillGradient";
    var mC = "toArrowLineDash";
    var xC = "toArrowLineJoin";
    var EC = "toArrowLineCap";
    var wC = "bundleLabel";
    var kC = "EDGE_BUNDLE_LABEL_ANCHOR_POSITION";
    var TC = "EDGE_BUNDLE_LABEL_RADIUS";
    var MC = "EDGE_BUNDLE_LABEL_OFFSET_X";
    var IC = "EDGE_BUNDLE_LABEL_OFFSET_Y";
    var OC = "EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT";
    var jC = "invalidateShape";
    var SC = "IMAGE_BORDER";
    var CC = "invalidateChildrenIndex";
    var AC = "invalidateSize";
    var LC = "$invalidateChild";
    var PC = "_n27";
    var RC = "onBindingPropertyChange";
    var DC = "addChild";
    var NC = "initBindingProperties";
    var BC = "bindingProperties";
    var $C = "addBinding";
    var FC = "validateChildren";
    var GC = "$selectionBorder";
    var zC = "$shadowOffsetX";
    var YC = "$selectionShadowOffsetX";
    var HC = "$shadowOffsetY";
    var qC = "$selectionShadowOffsetY";
    var UC = "$shadowBlur";
    var WC = "$selectionShadowBlur";
    var XC = "UI_BOUNDS_GROW";
    var VC = "bodyChanged";
    var ZC = "$renderColor";
    var JC = "$renderColorBlendMode";
    var KC = "$shadowColor";
    var QC = "hitTestChildren";
    var tA = "body";
    var iA = "$invalidateBounds";
    var nA = "_n0ody";
    var eA = "onDataChanged";
    var sA = "$size";
    var rA = "_originalBounds";
    var hA = "setMeasuredBounds";
    var aA = "$invalidateScale";
    var oA = "$invalidateFillGradient";
    var fA = "_fillGradient";
    var uA = "generatorGradient";
    var cA = "$fillGradient";
    var _A = "$adjustType";
    var dA = "$fillColor";
    var lA = "Scale";
    var vA = "FillGradient";
    var bA = "$fontStyle";
    var yA = "$fontSize";
    var gA = "ALIGN_POSITION";
    var pA = "$fontFamily";
    var mA = "$font";
    var xA = "Font";
    var EA = "$invalidateFont";
    var wA = "pathBounds";
    var kA = "$invalidateFromArrow";
    var TA = "$invalidateToArrow";
    var MA = "$lineWidth";
    var IA = "$outline";
    var OA = "validateFromArrow";
    var jA = "validateToArrow";
    var SA = "$fromArrow";
    var CA = "$fromArrowShape";
    var AA = "$fromArrowOffset";
    var LA = "fromArrowLocation";
    var PA = "$fromArrowSize";
    var RA = "fromArrowStyles";
    var DA = "fromArrowFillGradient";
    var NA = "$toArrowOffset";
    var BA = "$toArrowShape";
    var $A = "$toArrow";
    var FA = "$toArrowSize";
    var GA = "toArrowStyles";
    var zA = "Gradient";
    var YA = "toArrowLocation";
    var HA = "ArrowStroke";
    var qA = "ArrowStrokeStyle";
    var UA = "ArrowStyles";
    var WA = "ArrowLineDash";
    var XA = "ArrowLineDashOffset";
    var VA = "ArrowFillColor";
    var ZA = "ArrowFillGradient";
    var JA = "ArrowLineCap";
    var KA = "ArrowLineJoin";
    var QA = "ArrowOutline";
    var tL = "ArrowOutlineStyle";
    var iL = "FromArrow";
    var nL = "ToArrow";
    var eL = "canBind";
    var sL = "getYOffset";
    var rL = "isPositiveOrder";
    var hL = "createBundleLabel";
    var aL = "editable";
    var oL = "validatePoints";
    var fL = "EDGE_TYPE_DEFAULT";
    var uL = "extend.";
    var cL = "EDGE_TYPE_ZIGZAG";
    var _L = "pathSegments";
    var dL = "#555555";
    var lL = "#075bc5";
    var vL = "#2898E0";
    var bL = "resize";
    var yL = "updateViewport";
    var gL = "ondrop";
    var pL = "ondragover";
    var mL = "stopEvent";
    var xL = "getData";
    var EL = "text";
    var wL = "getDropInfo";
    var kL = "dropAction";
    var TL = "Node";
    var ML = "Text";
    var IL = "createText";
    var OL = "ShapeNode";
    var jL = "Group";
    var SL = "createGroup";
    var CL = "createNode";
    var AL = "properties";
    var LL = "clientProperties";
    var PL = "styles";
    var RL = "onElementCreated";
    var DL = "checkLimitedBounds";
    var NL = "movable";
    var BL = "selectable";
    var $L = "resizable";
    var FL = "linkable";
    var GL = "canLinkFrom";
    var zL = "canLinkTo";
    var YL = "getDefaultStyle";
    var HL = "limitedBounds";
    var qL = "_n2heckingBounds";
    var UL = "zoomAt";
    var WL = "scaleStep";
    var XL = "zoomIn";
    var VL = "zoomOut";
    var ZL = "_myb";
    var JL = "centerTo";
    var KL = "callLater";
    var QL = "isInvalidate";
    var tP = "zoomAnimation";
    var iP = "minScale";
    var nP = "_panAnimation";
    var eP = "canvasPanel";
    var sP = "focus";
    var rP = "reverseSelect";
    var hP = "setLocation";
    var aP = "isMovable";
    var oP = "_movableFilter";
    var fP = "reverseExpanded";
    var uP = "addCustomInteraction";
    var cP = "removeCustomInteraction";
    var _P = "_onresize";
    var dP = "innerHTML";
    var lP = "Delete Elements - ";
    var vP = "ELEMENT_REMOVED";
    var bP = "onInteractionEvent";
    var yP = "Shape";
    var gP = "ELEMENT_CREATED";
    var pP = "createShapeNode";
    var mP = "Line";
    var xP = "Styles";
    var EP = "LAYOUT_BY_PATH";
    var wP = "createEdge";
    var kP = "Edge";
    var TP = "interactionProperties";
    var MP = "startEdit";
    var IP = "onLabelEdit";
    var OP = "allowEmptyLabel";
    var jP = "invalidateElement";
    var SP = "Label Can't Empty";
    var CP = "agentEdge";
    var AP = "+";
    var LP = "bindableEdges";
    var PP = "delayedRendering";
    var RP = "html";
    var DP = "cursor";
    var NP = "interactionMode";
    var BP = "propertyChangeDispatcher";
    var $P = "_viewportBounds";
    var FP = "_limitedBounds";
    var GP = "DELAYED_RENDERING";
    var zP = "GROUP_MIN_WIDTH";
    var YP = "GROUP_MIN_HEIGHT";
    var HP = "_myj";
    var qP = "GROUP_TYPE_CIRCLE";
    var UP = "GROUP_TYPE_ELLIPSE";
    var WP = "invalidateFlag";
    var XP = "_$s";
    var VP = "GroupUI";
    var ZP = "10px";
    var JP = "opacity 0.2s ease-in";
    var KP = "block";
    var QP = ".Q-Graph-Nav img";
    var tR = "opacity:1;background-color: rgba(0, 0, 0, 0.5)";
    var iR = ".Q-Graph-Nav";
    var nR = "opacity:0;";
    var eR = "transition";
    var sR = ":opacity 3s cubic-bezier(0.8, 0, 0.8, 1)";
    var rR = ".Q-Graph-Nav:hover";
    var hR = "opacity:1;";
    var aR = ":opacity 0.3s linear";
    var oR = ".Q-Graph-ScrollBar";
    var fR = "margin: 2px; position: absolute;box-sizing: border-box;box-shadow: #FFF 0px 0px 1px; background-color: rgba(120,120,120,0.3);border-radius: 4px;margin: 1px;";
    var uR = ".Q-Graph-ScrollBar.hover, .Q-Graph-ScrollBar:hover";
    var cR = "margin-bottom: 8px;";
    var _R = "margin-right: 8px;";
    var dR = ".Q-Graph-ScrollPane";
    var lR = ":opacity 3s cubic-bezier(0.8, 0, 0.8, 1);";
    var vR = "_verticalDragSupport";
    var bR = "Q-Graph-ScrollPane";
    var yR = "_myh";
    var gR = "enableInertia";
    var pR = "Both";
    var mR = "drawable";
    var xR = "ZOOM_ANIMATE";
    var ER = "_n22";
    var wR = "ANIMATION_MAXTIME";
    var kR = "_speedX";
    var TR = "_speedY";
    var MR = "easeOutStrong";
    var IR = "__delayRender";
    var OR = "pauseRendering";
    var jR = "onAnimationStart";
    var SR = "onAnimationEnd";
    var CR = "_myX";
    var AR = "_myY";
    var LR = "_fromTX";
    var PR = "_toTX";
    var RR = "_toTY";
    var DR = "_toScale";
    var NR = "_fromScale";
    var BR = "maxTime";
    var $R = "ANIMATION_TYPE";
    var FR = "_fromTY";
    var GR = "INTERACTION_HANDLER_SIZE_TOUCH";
    var zR = "INTERACTION_ROTATE_HANDLER_SIZE_TOUCH";
    var YR = "INTERACTION_ROTATE_HANDLER_SIZE_DESKTOP";
    var HR = "element";
    var qR = "removeDrawable";
    var UR = "_fzId";
    var WR = "addDrawable";
    var XR = "escapable";
    var VR = "DrawableInteraction";
    var ZR = "drawPoint";
    var JR = "isClosePath";
    var KR = "styleDraw";
    var QR = "getDefaultDrawStyles";
    var tD = "currentPoint";
    var iD = "DrawPathInteraction";
    var nD = "start";
    var eD = "doDraw";
    var sD = "createEdgeByInteraction";
    var rD = "finish";
    var hD = "toLogicalPoint";
    var aD = "responded";
    var oD = "_n0f";
    var fD = "_n0z";
    var uD = "SEGMENT_LINE_TO";
    var cD = "createShapeByInteraction";
    var _D = "createLineByInteraction";
    var dD = "edgeUIClass";
    var lD = "EdgeUI";
    var vD = "drawReferenceLine";
    var bD = "CreateSimpleEdgeInteraction";
    var yD = "LABEL_EDITOR_SUBMIT_WHEN_LOST_FOCUS";
    var gD = "textarea";
    var pD = "Q-LabelEditor";
    var mD = "solid #08E 1px";
    var xD = "5px";
    var ED = "boxShadow";
    var wD = "onkeydown";
    var kD = "cancelEdit";
    var TD = "ctrlKey";
    var MD = "onValueChange";
    var ID = "onSizeChange";
    var OD = "stopEdit";
    var jD = "onClickOnWindow";
    var SD = "setText";
    var CD = "isEditing";
    var AD = "LabelEditor";
    var LD = "labelEditor";
    var PD = "dblclickable";
    var RD = "hasEdgeBundle";
    var DD = "EDGE_BUNDLE";
    var ND = "upSubNetwork";
    var BD = "enableDoubleClickToOverview";
    var $D = "resetScale";
    var FD = "zoomToOverview";
    var GD = "EditInteraction";
    var zD = "exportImage";
    var YD = "export image - ";
    var HD = " x ";
    var qD = "draggingElements";
    var UD = "currentDraggingElement";
    var WD = "isSelected";
    var XD = "ELEMENT_MOVE_START";
    var VD = "moveElements";
    var ZD = "forEachReverseVisibleUI";
    var JD = "linkedWith";
    var KD = "ELEMENT_MOVE_END";
    var QD = "PAN_START";
    var tN = "PAN_END";
    var iN = "_m5PropertyChangeListing";
    var nN = "dataPropertyChangeDispatcher";
    var eN = "_editting";
    var sN = "_mousePressed";
    var rN = "drawLineId";
    var hN = "drawLine";
    var aN = "#555";
    var oN = "isEditable";
    var fN = "_n0e";
    var uN = "isControlPoint";
    var cN = "isResizable";
    var _N = "_n2anEdit";
    var dN = "isFrom";
    var lN = "oldPoints";
    var vN = "prevSegment";
    var bN = "nextSegment";
    var yN = "oldNextPoints";
    var gN = "POINT_MOVE_START";
    var pN = "point";
    var mN = "_n2b";
    var xN = "POINT_MOVING";
    var EN = "totalDeltaX";
    var wN = "POINT_MOVE_END";
    var kN = "SELECTION_RECTANGLE_STROKE";
    var TN = "SELECTION_RECTANGLE_STROKE_COLOR";
    var MN = "SELECTION_RECTANGLE_FILL_COLOR";
    var IN = "SELECT_START";
    var ON = "_fnTimer";
    var jN = "SELECT_END";
    var SN = "_end";
    var CN = "SELECT_BETWEEN";
    var AN = "popupmenu";
    var LN = "hide";
    var PN = "_insets";
    var RN = "nwse-resize";
    var DN = "ns-resize";
    var NN = "RIGHT_TOP";
    var BN = "ew-resize";
    var $N = "rgba(0, 255, 0, 1)";
    var FN = "_rotatePoint";
    var GN = "#FF0";
    var zN = "_n0c";
    var YN = "_n0a";
    var HN = "_rotateHandleLength";
    var qN = "RESIZE_START";
    var UN = "ROTATING";
    var WN = "ResizeInteraction";
    var XN = "SELECT";
    var VN = "setSelection";
    var ZN = "sendToTop";
    var JN = "unSelectAll";
    var KN = "selectAll";
    var QN = "TOOLTIP_DURATION";
    var tB = "Q-Tooltip";
    var iB = "#FFFFCA";
    var nB = "1px solid #D9D9D9";
    var eB = "2px 4px";
    var sB = "_n0n";
    var rB = "_initTimer";
    var hB = "_n0l";
    var aB = "getTooltip";
    var oB = "<br>";
    var fB = "textContent";
    var uB = "pageX";
    var cB = "_deleteTimer";
    var _B = "_n0j";
    var dB = "enableWheelZoom";
    var lB = "element.move.start";
    var vB = "element.moving";
    var bB = "element.move.end";
    var yB = "element.created";
    var gB = "element.removed";
    var pB = "point.move.start";
    var mB = "point.moving";
    var xB = "point.move.end";
    var EB = "resize.start";
    var wB = "resizing";
    var kB = "resize.end";
    var TB = "rotating";
    var MB = "ROTATE_END";
    var IB = "rotate.end";
    var OB = "pan.start";
    var jB = "pan.end";
    var SB = "group.expanded";
    var CB = "edge.bundle";
    var AB = "select.start";
    var LB = "select.between";
    var PB = "select.end";
    var RB = "LONG_CLICK";
    var DB = "long.click";
    var NB = "_interactionSupport";
    var BB = "_onElementRemoved";
    var $B = "_onElementClear";
    var FB = "_kaCustomInteractionListener";
    var GB = "currentInteractionMode";
    var zB = "_n2urrentMode";
    var YB = "getInteractionInstances";
    var HB = "INTERACTION_MODE_VIEW";
    var qB = "view";
    var UB = "zoomin";
    var WB = "zoomout";
    var XB = "INTERACTION_MODE_CREATE_SIMPLE_EDGE";
    var VB = "create.simple.edge";
    var ZB = "INTERACTION_MODE_CREATE_EDGE";
    var JB = "create.edge";
    var KB = "INTERACTION_MODE_CREATE_SHAPE";
    var QB = "create.shape";
    var t$ = "INTERACTION_MODE_CREATE_LINE";
    var i$ = "create.line";
    var n$ = "registerInteractions";
    var e$ = "INTERACTION_MODE_SELECTION";
    var s$ = "INTERACTION_MODE_ZOOMIN";
    var r$ = "PanInteraction";
    var h$ = "MoveInteraction";
    var a$ = "WheelZoomInteraction";
    var o$ = "DoubleClickInteraction";
    var f$ = "ExportInteraction";
    var u$ = "TooltipInteraction";
    var c$ = "RectangleSelectionInteraction";
    var _$ = "PointsInteraction";
    var d$ = "Layouter";
    var l$ = "getUIBounds";
    var v$ = "layoutable";
    var b$ = "animate";
    var y$ = "animationType";
    var g$ = "locations";
    var p$ = "byAnimate";
    var m$ = "duration";
    var x$ = "getLayoutResult";
    var E$ = "updateLocations";
    var w$ = "DIRECTION_RIGHT";
    var k$ = "DIRECTION_CENTER";
    var T$ = "DIRECTION_BOTTOM";
    var M$ = "DIRECTION_TOP";
    var I$ = "DIRECTION_MIDDLE";
    var O$ = "DIRECTION_RIGHT_TOP";
    var j$ = "DIRECTION_LEFT_TOP";
    var S$ = "DIRECTION_LEFT_BOTTOM";
    var C$ = "DIRECTION_BOTTOM_LEFT";
    var A$ = "DIRECTION_BOTTOM_RIGHT";
    var L$ = "DIRECTION_TOP_RIGHT";
    var P$ = "even";
    var R$ = "two.side";
    var D$ = "even.h";
    var N$ = "even.v";
    var B$ = "LAYOUT_TYPE_EVEN";
    var $$ = "LAYOUT_TYPE_EVEN_VERTICAL";
    var F$ = "LAYOUT_TYPE_TWO_SIDE";
    var G$ = "isHorizontalDirection";
    var z$ = "defaultSize";
    var Y$ = "isLayoutable";
    var H$ = "getNodeSize";
    var q$ = "parentChildrenDirection";
    var U$ = "getHGap";
    var W$ = "getVGap";
    var X$ = "getLayoutType";
    var V$ = "hGap";
    var Z$ = "vGap";
    var J$ = "root";
    var K$ = "undirected";
    var Q$ = "_n04";
    var tF = "layoutType";
    var iF = "_n29";
    var nF = "doLayout";
    var eF = "parentBounds";
    var sF = "node";
    var rF = "_n2w";
    var hF = "_di";
    var aF = "hostDY";
    var oF = "hostDX";
    var fF = "_inheritedParentChildrenDirection";
    var uF = "nodeX";
    var cF = "_n07";
    var _F = "nodeY";
    var dF = "_n06";
    var lF = "_mynchorLocation";
    var vF = "layoutReverse";
    var bF = "_n2u";
    var yF = "layoutDatas";
    var gF = "invalidateLayoutDatas";
    var pF = "timer";
    var mF = "stop";
    var xF = "resetLayoutDatas";
    var EF = "getMaxIterations";
    var wF = "nodeCount";
    var kF = "step";
    var TF = "nodes";
    var MF = "onstop";
    var IF = "_jrr";
    var OF = "startAngle";
    var jF = "BalloonLayouter";
    var SF = "proportional";
    var CF = "regular";
    var AF = "uniform";
    var LF = "variable";
    var PF = "ANGLE_SPACING_REGULAR";
    var RF = "RADIUS_MODE_VARIABLE";
    var DF = "getGap";
    var NF = "layouter";
    var BF = "angleSpacing";
    var $F = "_n0u";
    var FF = "node1";
    var GF = "node2";
    var zF = "EDGE_BUNDLE_EXPANDED";
    var YF = "_n2rBindableFlag";
    var HF = "EDGE_BUNDLE_GAP";
    var qF = "_hzInBundle";
    var UF = "stack";
    var WF = "popIdx";
    var XF = "mass";
    var VF = "isInternal";
    var ZF = "quads";
    var JF = "massX";
    var KF = "massY";
    var QF = "reset";
    var tG = "MIN_VALUE";
    var iG = "attractive";
    var nG = "elastic";
    var eG = "layoutMass";
    var sG = "layoutElasticity";
    var rG = "groups";
    var hG = "_nbodyForce";
    var aG = "nodesArray";
    var oG = "repulsion";
    var fG = "update";
    var uG = "minEnergy";
    var cG = "currentEnergy";
    var _G = "timeStep";
    var dG = "SpringLayouter";
    var lG = "oldLocations";
    var vG = "_mynimate";
    var bG = "_onfinish";
    var yG = "hasOutEdge";
    var gG = "forEachByTopoBreadthFirstSearch";
    var pG = "forEachByTopoDepthFirstSearch";
    var mG = "_from";
    var xG = "toColor";
    var EG = "isIE";
    var wG = "isOpera";
    var kG = "isGecko";
    var TG = "isFirefox";
    var MG = "isSafari";
    var IG = "isMac";
    var OG = "DefaultStyles";
    var jG = "Defaults";
    var SG = "Consts";
    var CG = "Graphs";
    var AG = "LabelUI";
    var LG = "ImageUI";
    var PG = "Path";
    var RG = "InteractionEvent";
    var DG = "GraphModel";
    var NG = "EdgeBundle";
    var BG = "TreeLayouter";
    var $G = "Qunee for HTML5";
    var FG = "2.0";
    var GG = "2.6.0.6";
    var zG = "about";
    var YG = "Qunee - Diagramming Components for HTML5/Canvas";
    var HG = "20/4/2017";
    var qG = "0";
    if (window[kd]) {
        var UG = navigator[Td],
            WG = /opera/i [Fo](UG),
            XG = !WG && /msie/i.test(UG),
            VG = /rv:11.0/i.test(UG),
            ZG = /MSIE 10./i [Fo](UG);
        if (VG && (XG = !0), /msie\s[6,7,8]/i [Fo](UG)) throw new Error("your browser is not supported");
        var JG = /webkit|khtml/i.test(UG),
            KG = !JG && /gecko/i [Fo](UG),
            QG = /firefox\//i.test(UG),
            tz = /Chrome\//i.test(UG),
            iz = !tz && /Safari\//i [Fo](UG),
            nz = /Macintosh;/i [Fo](UG),
            ez = /(iPad|iPhone|iPod)/g.test(UG),
            sz = /Android/g.test(UG),
            rz = /Windows Phone/g.test(UG),
            hz = (ez || sz || rz) && Md in window,
            az = UG[n_](/AppleWebKit\/([0-9\.]*)/);
        if (az && az.length > 1) {
            parseFloat(az[1])
        }
        sz && parseFloat(UG[n_](/Android\s([0-9\.]*)/)[1])
    }
    window[_h] || (window[_h] = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window[Id] || window[Od] ||
        function(i) {
            return window[jd](function() {
                i()
            }, 1e3 / 60)
        }), window[Sd] || (window[Sd] = window.webkitCancelAnimationFrame || window[Cd] || window[Ad] || window[Ld] ||
        function(i) {
            return window.clearTimeout(i)
        });
    var oz = {
        SELECTION_TOLERANCE: hz ? 5 : 2,
        LABEL_COLOR: Pd
    };
    J(oz, {
        FONT_STYLE: {
            get: function() {
                return this._fontStyle || (this._fontStyle = Rd)
            },
            set: function(t) {
                this._fontStyle != t && (this[Dd] = t, this._fontChanged = !0)
            }
        },
        FONT_SIZE: {
            get: function() {
                return this._fontSize || (this._fontSize = 12)
            },
            set: function(t) {
                this[Nd] != t && (this._fontSize = t, this._fontChanged = !0)
            }
        },
        FONT_FAMILY: {
            get: function() {
                return this[Bd] || (this[Bd] = "Verdana,helvetica,arial,sans-serif")
            },
            set: function(t) {
                this[Bd] != t && (this[Bd] = t, this[$d] = !0)
            }
        },
        FONT: {
            get: function() {
                return (this[$d] || this[$d] === n) && (this[$d] = !1, this[Fd] = this[Va] + gh + this[Za] + Ja + this[Ka]), this[Fd]
            }
        }
    });
    var fz = function(t) {
        this._jk = [], this._li = {}, t && this.add(t)
    };
    fz[prototype] = {
        _jk: null,
        _li: null,
        get: function(t) {
            return this.getByIndex(t)
        },
        getById: function(t) {
            return this._li[t]
        },
        getByIndex: function(t) {
            return this._jk[t]
        },
        forEach: function(t, i, n) {
            return l(this._jk, t, i, n)
        },
        forEachReverse: function(t, i, n) {
            return b(this._jk, t, i, n)
        },
        size: function() {
            return this._jk[length]
        },
        contains: function(t) {
            return this[yu](t.id)
        },
        containsById: function(t) {
            return this._li.hasOwnProperty(t)
        },
        setIndex: function(t, i) {
            var n = this._jk[indexOf](t);
            if (0 > n) throw new Error(Ea + t.id + Gd);
            return n == i ? !1 : (this._jk[splice](n, 1), this._jk[splice](i, 0, t), !0)
        },
        setIndexAfter: function(t, i) {
            var n = this._jk[indexOf](t);
            if (0 > n) throw new Error(Ea + t.id + Gd);
            return n == i ? i : n == i + 1 ? i + 1 : (n > i && (i += 1), this._jk[splice](n, 1), this._jk[splice](i, 0, t), i)
        },
        setIndexBefore: function(t, i) {
            var n = this._jk[indexOf](t);
            if (0 > n) throw new Error(Ea + t.id + Gd);
            return n == i ? i : n == i - 1 ? i - 1 : (i > n && (i -= 1), this._jk[splice](n, 1), this._jk[splice](i, 0, t), i)
        },
        indexOf: function(t) {
            return this._jk[indexOf](t)
        },
        getIndexById: function(t) {
            var i = this[zd](t);
            return i ? this._jk[indexOf](i) : -1
        },
        add: function(t, i) {
            return $(t) ? this._fy(t, i) : this._kf(t, i)
        },
        addFirst: function(t) {
            return this.add(t, 0)
        },
        _fy: function(t, i) {
            if (0 == t[length]) return !1;
            var e = !1,
                s = i >= 0;
            t = t._jk || t;
            for (var r = 0, h = t[length]; h > r; r++) {
                var a = t[r];
                null !== a && a !== n && this._kf(a, i, !0) && (e = !0, s && i++)
            }
            return e
        },
        _kf: function(t, i) {
            var e = t.id;
            return e === n || this.containsById(e) ? !1 : (g(this._jk, t, i), this._li[e] = t, t)
        },
        remove: function(t) {
            return $(t) ? this[Yd](t) : t.id ? this._hg(t.id, t) : this.removeById(t)
        },
        _n0g: function(t) {
            if (0 == t.length) return !1;
            var i = !1;
            t = t._jk || t;
            for (var e = 0, s = t[length]; s > e; e++) {
                var r = t[e];
                if (null !== r && r !== n) {
                    r.id === n && (r = this._li[r]);
                    var h = r.id;
                    this._hg(h, r, !0) && (i = !0)
                }
            }
            return i
        },
        _hg: function(t, i) {
            return t !== n && this.containsById(t) ? ((null === i || i === n) && (i = this.getById(t)), delete this._li[t], p(this._jk, i), !0) : !1
        },
        removeById: function(t) {
            var i = this._li[t];
            return i ? this._hg(t, i) : !1
        },
        set: function(t) {
            if (!t || 0 == t) return void this[Hd]();
            if (this.isEmpty() || !$(t)) return this.clear(), this.add(t);
            var i = [],
                n = {},
                e = 0;
            if (l(t, function(t) {
                    this._li[t.id] ? (n[t.id] = t, e++) : i[push](t)
                }, this), e != this[length]) {
                var s = [];
                this[Jf](function(t) {
                    n[t.id] || s[push](t)
                }, this), s[length] && this[Yd](s)
            }
            return i.length && this._fy(i), !0
        },
        clear: function() {
            return this.isEmpty() ? !1 : (this._jk[length] = 0, this._li = {}, !0)
        },
        toDatas: function() {
            return this._jk[slice](0)
        },
        isEmpty: function() {
            return 0 == this._jk[length]
        },
        valueOf: function() {
            return this._jk[length]
        },
        clone: function(t) {
            var i = new fz;
            return i.add(t ? y(this._jk) : this[qd]()), i
        }
    }, J(fz.prototype, {
        datas: {
            get: function() {
                return this._jk
            }
        },
        random: {
            get: function() {
                return this._jk && this._jk.length ? this._jk[Y(this._jk[length])] : null
            }
        },
        length: {
            get: function() {
                return this._jk ? this._jk[length] : 0
            }
        }
    });
    var uz = (2 * Math.PI, .5 * Math.PI),
        cz = function(t, i) {
            i = i[Ud]();
            for (var n = XG ? t[Wd] : t.firstElementChild; n && (1 != n[Xd] || n[Vd] && n.tagName[Ud]() != i);) n = XG ? n[Zd] : n[Jd];
            return n && 1 == n[Xd] && n[Vd] && n[Vd][Ud]() == i ? n : null
        },
        _z = function(t, i, n) {
            t instanceof _z && (i = t.y, t = t.x, n = t.rotate), this.set(t, i, n)
        },
        dz = function(t, i, n, e) {
            var s = t - n,
                r = i - e;
            return Math.sqrt(s * s + r * r)
        };
    _z.prototype = {
        x: 0,
        y: 0,
        rotate: n,
        set: function(t, i, n) {
            this.x = t || 0, this.y = i || 0, this[jo] = n || 0
        },
        negate: function() {
            this.x = -this.x, this.y = -this.y
        },
        offset: function(t, i) {
            this.x += t, this.y += i
        },
        equals: function(t) {
            return this.x == t.x && this.y == t.y
        },
        distanceTo: function(t) {
            return dz(this.x, this.y, t.x, t.y)
        },
        toString: function() {
            return Kd + this.x + Qd + this.y + Lh
        },
        clone: function() {
            return new _z(this.x, this.y)
        }
    }, Object.defineProperty(_z[prototype], tl, {
        get: function() {
            return Math[uo](this.x * this.x + this.y * this.y)
        }
    });
    var lz = function(t, i, e, s) {
        t !== n && this._mk(t, i, e, s)
    };
    lz.prototype = {
        _mw: null,
        _mu: null,
        _ms: null,
        _mx: null,
        _my: null,
        _n0: null,
        _n2: 1,
        _mk: function(t, i, n, e) {
            this._mw = t, this._mu = i, this._ms = n, this._mx = e, t == n ? (this._my = -1, this._n2 = 0, this._n0 = t) : (this._my = (i - e) / (t - n), this._n0 = i - this._my * t, this._n2 = 1), this._kp = Math[Hh](this._mx - this._mu, this._ms - this._mw), this[qh] = Math.cos(this._kp), this._sin = Math.sin(this._kp)
        },
        _n2d: function(t) {
            return 0 == this._n2 ? Number.NaN : this._my * t + this._n0
        },
        _n2o: function(t) {
            return 0 == this._my ? Number.NaN : (t - this._n0) / this._my
        },
        _$d: function(t) {
            var i, n, e, s, r, h = t[0],
                a = t[2],
                o = t[4],
                f = t[1],
                u = t[3],
                c = t[5],
                _ = this._my,
                d = this._n0,
                l = this._n2;
            if (0 == l ? (e = Math.sqrt((-_ * _ * h - _ * d) * o + _ * _ * a * a + 2 * _ * d * a - _ * d * h), s = -_ * a + _ * h, r = _ * o - 2 * _ * a + _ * h) : (e = Math.sqrt((-f + _ * h + d) * c + u * u + (-2 * _ * a - 2 * d) * u + (_ * o + d) * f + (-_ * _ * h - _ * d) * o + _ * _ * a * a + 2 * _ * d * a - _ * d * h), s = -u + f + _ * a - _ * h, r = c - 2 * u + f - _ * o + 2 * _ * a - _ * h), 0 != r) {
                i = (e + s) / r, n = (-e + s) / r;
                var v, b;
                return i >= 0 && 1 >= i && (v = Fi(i, t)), n >= 0 && 1 >= n && (b = Fi(n, t)), v && b ? [v, b] : v ? v : b ? b : void 0
            }
        },
        _3n: function(t, i, n) {
            if (this._my == t._my || 0 == this._n2 && 0 == t._n2) return null;
            var e, s;
            if (e = 0 == this._n2 ? this._n0 : 0 == t._n2 ? t._n0 : (t._n0 - this._n0) / (this._my - t._my), s = 0 == this._my ? this._n0 : 0 == t._my ? t._n0 : this._n2 ? this._my * e + this._n0 : t._my * e + t._n0, !i) return {
                x: e,
                y: s
            };
            var r, h, a;
            if (n) r = -i / 2, h = -r;
            else {
                r = -dz(this._mw, this._mu, e, s), h = dz(this._ms, this._mx, e, s);
                var o = -r + h;
                if (o > i) {
                    var f = i / o;
                    r *= f, h *= f
                } else a = (i - o) / 2
            }
            var u = this._7f(e, s, r),
                c = this._7f(e, s, h);
            return a && (u[ff] = a, c[ff] = a), [u, c]
        },
        _7f: function(t, i, n) {
            return 0 == this._n2 ? {
                x: t,
                y: i + n
            } : {
                x: t + n * this[qh],
                y: i + n * this[Uh]
            }
        }
    };
    var vz = function(t, i) {
        this[Da] = t, this.height = i
    };
    vz.prototype = {
        width: 0,
        height: 0,
        isEmpty: function() {
            return this[Da] <= 0 || this.height <= 0
        },
        clone: function() {
            return new vz(this[Da], this[Na])
        },
        toString: function() {
            return il + this[Da] + Qd + this[Na] + Lh
        }
    };
    var bz = function(t, i, e, s) {
        t instanceof Object && !D(t) && (i = t.y, e = t.width, s = t[Na], t = t.x), e === n && (e = -1), s === n && (s = -1), this.x = t || 0, this.y = i || 0, this[Da] = e, this[Na] = s
    };
    bz[prototype] = {
        x: 0,
        y: 0,
        width: -1,
        height: -1,
        setByRect: function(t) {
            this.x = t.x || 0, this.y = t.y || 0, this.width = t.width || 0, this[Na] = t[Na] || 0
        },
        set: function(t, i, n, e) {
            this.x = t || 0, this.y = i || 0, this[Da] = n || 0, this[Na] = e || 0
        },
        offset: function(t, i) {
            return this.x += t, this.y += i, this
        },
        contains: function(t, i) {
            return t instanceof bz ? ai(this.x, this.y, this.width, this[Na], t.x, t.y, t[Da], t[Na], i) : t >= this.x && t <= this.x + this[Da] && i >= this.y && i <= this.y + this.height
        },
        intersectsPoint: function(t, i, n) {
            return this[Da] <= 0 && this[Na] <= 0 ? !1 : n ? this.intersectsRect(t - n, i - n, 2 * n, 2 * n) : t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this.height
        },
        intersectsRect: function(t, i, n, e) {
            return ri(this.x, this.y, this[Da], this[Na], t, i, n, e)
        },
        intersects: function(t, i) {
            return D(t[Da]) ? this[nl](t.x, t.y, t.width, t[Na]) : this[go](t, i)
        },
        intersection: function(t, i, n, e) {
            var s = this.x,
                r = this.y,
                h = s;
            h += this[Da];
            var a = r;
            a += this[Na];
            var o = t;
            o += n;
            var f = i;
            return f += e, t > s && (s = t), i > r && (r = i), h > o && (h = o), a > f && (a = f), h -= s, a -= r, 0 > h || 0 > a ? null : new bz(s, r, h, a)
        },
        addPoint: function(t) {
            this.add(t.x, t.y)
        },
        add: function(t, i) {
            if (D(t.width)) return this[el](t.x, t.y, t[Da], t.height);
            if (D(t.x) && (i = t.y, t = t.x), this.width < 0 || this[Na] < 0) return this.x = t, this.y = i, void(this.width = this[Na] = 0);
            var n = this.x,
                e = this.y,
                s = this.width,
                r = this[Na];
            s += n, r += e, n > t && (n = t), e > i && (e = i), t > s && (s = t), i > r && (r = i), s -= n, r -= e, s > Number.MAX_VALUE && (s = Number.MAX_VALUE), r > Number[sl] && (r = Number.MAX_VALUE), this.set(n, e, s, r)
        },
        addRect: function(t, i, n, e) {
            var s = this[Da],
                r = this[Na];
            (0 > s || 0 > r) && this.set(t, i, n, e);
            var h = n,
                a = e;
            if (!(0 > h || 0 > a)) {
                var o = this.x,
                    f = this.y;
                s += o, r += f;
                var u = t,
                    c = i;
                h += u, a += c, o > u && (o = u), f > c && (f = c), h > s && (s = h), a > r && (r = a), s -= o, r -= f, s > Number[sl] && (s = Number.MAX_VALUE), r > Number[sl] && (r = Number.MAX_VALUE), this.set(o, f, s, r)
            }
        },
        shrink: function(t, i, n, e) {
            return D(t) ? 1 == arguments[length] ? e = i = n = t || 0 : 2 == arguments.length ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[qo] || 0, n = t[Wh] || 0, e = t[Xh] || 0, t = t.top || 0), this.x += i, this.y += t, this[Da] -= i + e, this[Na] -= t + n, this
        },
        grow: function(t, i, n, e) {
            return D(t) ? 1 == arguments[length] ? e = i = n = t || 0 : 2 == arguments[length] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[qo] || 0, n = t[Wh] || 0, e = t[Xh] || 0, t = t.top || 0), this.x -= i, this.y -= t, this[Da] += i + e, this[Na] += t + n, this
        },
        scale: function(t) {
            return this.x *= t, this.y *= t, this[Da] *= t, this[Na] *= t, this
        },
        isEmpty: function() {
            return this[Da] <= 0 && this.height <= 0
        },
        toString: function() {
            return this.x + rl + this.y + rl + this[Da] + rl + this.height
        },
        union: function(t) {
            var i = this[Da],
                n = this[Na];
            if (0 > i || 0 > n) return new bz(t.x, t.y, t[Da], t[Na]);
            var e = t.width,
                s = t[Na];
            if (0 > e || 0 > s) return new bz(this.x, this.y, this[Da], this.height);
            var r = this.x,
                h = this.y;
            i += r, n += h;
            var a = t.x,
                o = t.y;
            return e += a, s += o, r > a && (r = a), h > o && (h = o), e > i && (i = e), s > n && (n = s), i -= r, n -= h, i > Number[sl] && (i = Number.MAX_VALUE), n > Number[sl] && (n = Number[sl]), new bz(r, h, i, n)
        },
        clear: function() {
            this.set(0, 0, -1, -1)
        },
        equals: function(t) {
            return t && this.x == t.x && this.y == t.y && this[Da] == t.width && this[Na] == t[Na]
        },
        clone: function(t, i) {
            return new bz(this.x + (t || 0), this.y + (i || 0), this[Da], this[Na])
        },
        toArray: function() {
            return [this.x, this.y, this.width, this[Na]]
        },
        getIntersectionPoint: function(t, i, n, e) {
            return si(this, t, i, n, e)
        }
    }, E(bz, vz), bz[pu] = function(t, i) {
        return t == i || t && i && t.x == i.x && t.y == i.y && t.width == i[Da] && t[Na] == i[Na]
    }, J(bz.prototype, {
        left: {
            get: function() {
                return this.x
            }
        },
        top: {
            get: function() {
                return this.y
            }
        },
        bottom: {
            get: function() {
                return this.y + this[Na]
            }
        },
        right: {
            get: function() {
                return this.x + this[Da]
            }
        },
        cx: {
            get: function() {
                return this.x + this[Da] / 2
            }
        },
        cy: {
            get: function() {
                return this.y + this.height / 2
            }
        },
        center: {
            get: function() {
                return new _z(this.cx, this.cy)
            }
        }
    }), bz.intersects = ri, bz[hf] = oi, bz.intersectsPoint = hi;
    var yz = function(t, i, n, e) {
        1 == arguments[length] ? i = n = e = t : 2 == arguments.length && (n = t, e = i), this.set(t, i, n, e)
    };
    yz.prototype = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        set: function(t, i, n, e) {
            this.top = t || 0, this[qo] = i || 0, this.bottom = n || 0, this.right = e || 0
        },
        clone: function() {
            return new yz(this.top, this[qo], this[Wh], this[Xh])
        },
        equals: function(t) {
            return t && this.top == t.top && this[Wh] == t[Wh] && this.left == t[qo] && this[Xh] == t[Xh]
        }
    };
    var gz = function(t, i) {
        this[hl] = t, this[al] = i
    };
    gz[prototype] = {
        verticalPosition: !1,
        horizontalPosition: !1,
        toString: function() {
            return (this[hl] || "") + (this[al] || "")
        }
    }, Z(gz[prototype], ol, {
        get: function() {
            return (this[hl] || "") + (this.verticalPosition || "")
        }
    });
    var pz = fl,
        mz = ul,
        xz = cl,
        Ez = _u,
        wz = _l,
        kz = dl;
    gz.LEFT_TOP = new gz(pz, Ez), gz[ll] = new gz(pz, wz), gz[vl] = new gz(pz, kz), gz[bl] = new gz(mz, Ez), gz[yl] = new gz(mz, wz), gz[gl] = new gz(mz, kz), gz.RIGHT_TOP = new gz(xz, Ez), gz[pl] = new gz(xz, wz), gz[ml] = new gz(xz, kz);
    var Tz = [gz[xl], gz[ll], gz[vl], gz.CENTER_TOP, gz[yl], gz.CENTER_BOTTOM, gz.RIGHT_TOP, gz.RIGHT_MIDDLE, gz[ml]];
    Z(gz, jh, {
        get: function() {
            return Tz[Y(Tz.length)]
        }
    }), gz[Vh] = function(t) {
        for (var i in gz) {
            var n = gz[i];
            if (n && jh != i && n instanceof gz && n.toString() == t) return n
        }
    };
    var Mz = function(t, i, n, e, s) {
        this.set(t, i, n, e), this[El] = s
    };
    Mz.prototype = {
        radius: 0,
        classify: function(t, i, n, e) {
            return i > t ? 0 : i + e > t ? 1 : n - e > t ? 2 : n > t ? 3 : 4
        },
        intersectsRect: function(t, i, n, e) {
            if (k(this, Mz, nl, arguments) === !1) return !1;
            var s = this.x,
                r = this.y,
                h = s + this.width,
                a = r + this[Na],
                o = 2 * radius,
                f = 2 * radius,
                u = Math.min(this.width, Math.abs(o)) / 2,
                c = Math.min(this.height, Math.abs(f)) / 2,
                _ = this[wl](t, s, h, u),
                d = this[wl](t + n, s, h, u),
                l = this.classify(i, r, a, c),
                v = this[wl](i + e, r, a, c);
            return 2 == _ || 2 == d || 2 == l || 2 == v ? !0 : 2 > _ && d > 2 || 2 > l && v > 2 ? !0 : (t = 1 == d ? t = t + n - (s + u) : t -= h - u, i = 1 == v ? i = i + e - (r + c) : i -= a - c, t /= u, i /= c, 1 >= t * t + i * i)
        },
        intersectsPoint: function(t, i) {
            if (k(this, Mz, go, arguments) === !1) return !1;
            var n = this.x,
                e = this.y,
                s = n + this[Da],
                r = e + this[Na];
            if (n > t || e > i || t >= s || i >= r) return !1;
            var h = 2 * radius,
                a = 2 * radius,
                o = Math.min(this.width, Math.abs(h)) / 2,
                f = Math.min(this[Na], Math.abs(a)) / 2;
            return t >= (n += o) && t < (n = s - o) ? !0 : i >= (e += f) && i < (e = r - f) ? !0 : (t = (t - n) / o, i = (i - e) / f, 1 >= t * t + i * i)
        },
        clone: function() {
            return new Mz(this.x, this.y, this.width, this[Na], this.radius)
        }
    }, E(Mz, bz);
    var Iz = function(t, i, n, e) {
        this[Wo] = t, this[Oo] = i, this.kind = n, this[J_] = e
    };
    Iz.prototype = {
        source: null,
        type: null,
        kind: null,
        value: null,
        toString: function() {
            return kl + this[Wo] + Tl + this[Oo] + Ml + this[Il]
        }
    };
    var Oz = function(t, i, n, e, s) {
        this[Wo] = t, this[Il] = i, this.oldValue = e, this.value = n, this[Ol] = s
    };
    Oz[prototype] = {
        type: jl,
        propertyType: null,
        toString: function() {
            return kl + this[Wo] + Tl + this.type + Sl + this[Il] + Cl + this[Al] + Ll + this[J_]
        }
    }, E(Oz, Iz), Z(Oz[prototype], Pl, {
        get: function() {
            return this[Il]
        },
        set: function(t) {
            this.kind = t
        }
    });
    var jz = function(t, i, n) {
        this[Wo] = t, this[Al] = t.parent, this.value = i, this.newIndex = n, this[Al] && (this[Rl] = this[Al].getChildIndex(t))
    };
    jz[prototype] = {
        kind: Eu
    }, E(jz, Oz);
    var Sz = function(t, i) {
        this[Wo] = t, this[J_] = i
    };
    Sz.prototype.kind = Dl, E(Sz, Oz);
    var Cz = function(t, i) {
        this[Wo] = t, this[J_] = i
    };
    Cz[prototype][Il] = Nl, E(Cz, Oz);
    var Az = function(t, i, n, e) {
        this[Wo] = i, this.oldValue = n, this[J_] = e, this[Eu] = t, this[Bl] = i, this[Rl] = n, this[$l] = e
    };
    Az[prototype][Il] = Fl, E(Az, Oz);
    var Lz = function() {};
    Lz[prototype] = {
        listener: null,
        beforeEvent: function(t) {
            return null != this.listener && this[Gl][zl] ? this.listener[zl](t) : !0
        },
        onEvent: function(t) {
            null != this[Gl] && this[Gl][hh] && this[Gl][hh](t)
        }
    };
    var Pz = function() {
            w(this, Pz, arguments), this.events = {}, this.listeners = []
        },
        Rz = function(t, i) {
            this.listener = t, this[Yl] = i, t instanceof Function ? this[hh] = t : (this[hh] = t[hh], this[zl] = t[zl]), this[pu] = function(t) {
                return t && this[Gl] == t[Gl] && this[Yl] == t[Yl]
            }
        };
    Rz.prototype = {
        equals: function(t) {
            return t && this[Gl] == t[Gl] && this[Yl] == t.scope
        },
        destroy: function() {
            delete this[Yl], delete this.listener
        }
    }, Pz[prototype] = {
        listeners: null,
        _n0i: function() {
            return this[Hl] && this.listeners[length] > 0
        },
        _7e: function(t, i) {
            return t instanceof Pz ? t : new Rz(t, i)
        },
        _95: function(t, i) {
            if (t instanceof Pz) return this[Hl].indexOf(t);
            for (var n = this[Hl], e = 0, s = n.length; s > e; e++) {
                var r = n[e];
                if (r[Gl] == t && r[Yl] == i) return e
            }
            return -1
        },
        contains: function(t, i) {
            return this._95(t, i) >= 0
        },
        addListener: function(t, i) {
            return this.contains(t, i) ? !1 : void this[Hl][push](this._7e(t, i))
        },
        removeListener: function(t, i) {
            var n = this._95(t, i);
            n >= 0 && this.listeners[splice](n, 1)
        },
        on: function(t, i) {
            this[ld](t, i)
        },
        un: function(t, i, n) {
            this.removeListener(t, i, n)
        },
        onEvent: function(t) {
            return this[Hl] ? void l(this.listeners, function(i) {
                i[hh] && (i[Yl] ? i.onEvent[call](i[Yl], t) : i.onEvent(t))
            }, this) : !1
        },
        beforeEvent: function(t) {
            return this[Hl] ? l(this.listeners, function(i) {
                return i.beforeEvent ? i.scope ? i[zl][call](i[Yl], t) : i[zl](t) : !0
            }, this) : !0
        },
        _dk: function(t) {
            return this[zl](t) === !1 ? !1 : (this[hh](t), !0)
        },
        clear: function() {
            this[Hl] = []
        },
        destroy: function() {
            this.clear()
        }
    }, E(Pz, Lz);
    var Dz = {
            onEvent: function() {},
            beforeEvent: function() {}
        },
        Nz = function(t, i, n, e, s) {
            this.source = t, this.type = ql, this.kind = i, this[ko] = n, this.index = e, this[Rl] = s
        };
    Nz.prototype = {
        index: -1,
        oldIndex: -1,
        toString: function() {
            return kl + this.source + Tl + this[Oo] + Ml + this[Il] + Ul + this[ko] + Wl + this[Xl] + Vl + this.oldIndex
        }
    }, E(Nz, Iz), Nz[Zl] = Jl, Nz.KIND_REMOVE = remove, Nz[Kl] = Hd, Nz[Ql] = tv;
    var Bz = function() {
        this.id = ++qG, this[iv] = {}
    };
    Bz[prototype] = {
        _n0w: null,
        id: null,
        get: function(t) {
            return this[iv][t]
        },
        set: function(t, i) {
            var n = this.get(t);
            if (n === i) return !1;
            var e = new Oz(this, t, i, n);
            return e.propertyType = kY[nv], this._mye(t, i, e, this[iv])
        },
        _mye: function(t, i, e, s) {
            return this[zl](e) === !1 ? !1 : (s || (s = this._n0w), i === n ? delete s[t] : s[t] = i, this[hh](e), !0)
        },
        remove: function(t) {
            this.set(t, null)
        },
        valueOf: function() {
            return this.id
        },
        toString: function() {
            return this.id
        },
        _dr: function(t, i) {
            if (i === n && (i = -1), this == t || t == this._jp) return !1;
            if (t && this == t._jp && !t._dr(null)) return !1;
            var e = new jz(this, t, i);
            if (!this.beforeEvent(e)) return !1;
            var s, r, h = this._jp;
            return t && (s = new Sz(t, this), !t.beforeEvent(s)) ? !1 : null == h || (r = new Cz(h, this), h.beforeEvent(r)) ? (this._jp = t, null != t && ui(t, this, i), null != h && ci(h, this), this[hh](e), null != t && t[hh](s), null != h && h.onEvent(r), this[ev](h, t), !0) : !1
        },
        addChild: function(t, i) {
            var n = t._dr(this, i);
            return n && this.onChildAdd(t, i), n
        },
        onChildAdd: function() {},
        removeChild: function(t) {
            if (!this._fp || !this._fp[Zc](t)) return !1;
            var i = t._dr(null);
            return this[Jh](t), i
        },
        onChildRemove: function() {},
        toChildren: function() {
            return this._fp ? this._fp[qd]() : null
        },
        clearChildren: function() {
            if (this._fp && this._fp.length) {
                var t = this[sv]();
                l(t, function(t) {
                    t._dr(null)
                }, this), this[rv](t)
            }
        },
        forEachChild: function(t, i) {
            return this[hasChildren]() ? this._fp[Jf](t, i) : !1
        },
        onChildrenClear: function() {},
        getChildIndex: function(t) {
            return this._fp && this._fp.length ? this._fp.indexOf(t) : -1
        },
        setChildIndex: function(t, i) {
            if (!this._fp || !this._fp.length) return !1;
            var n = this._fp[indexOf](t);
            if (0 > n || n == i) return !1;
            var e = new Az(this, t, n, i);
            return this.beforeEvent(e) === !1 ? !1 : (this._fp.remove(t) && this._fp.add(t, i), this[hh](e), !0)
        },
        hasChildren: function() {
            return this._fp && this._fp[length] > 0
        },
        getChildAt: function(t) {
            return null == this._fp ? null : this._fp._jk[t]
        },
        isDescendantOf: function(t) {
            if (!t.hasChildren()) return !1;
            for (var i = this[Eu]; null != i;) {
                if (t == i) return !0;
                i = i[Eu]
            }
            return !1
        },
        onParentChanged: function() {},
        firePropertyChangeEvent: function(t, i, n, e) {
            this[hh](new Oz(this, t, i, n, e))
        }
    }, E(Bz, Lz), J(Bz[prototype], {
        childrenCount: {
            get: function() {
                return this._fp ? this._fp[length] : 0
            }
        },
        children: {
            get: function() {
                return this._fp || (this._fp = new fz), this._fp
            }
        },
        parent: {
            get: function() {
                return this._jp
            },
            set: function(t) {
                this._dr(t, -1)
            }
        },
        properties: {
            get: function() {
                return this[iv]
            },
            set: function(t) {
                this._n0w != t && (this._n0w = t)
            }
        }
    });
    var $z = function() {
        this._jk = [], this._li = {}, this._1k = new Pz
    };
    $z[prototype] = {
        beforeEvent: function(t) {
            return null != this._1k && this._1k[zl] ? this._1k[zl](t) : !0
        },
        onEvent: function(t) {
            return this._1k instanceof Function ? void this._1k(t) : void(null != this._1k && this._1k[hh] && this._1k[hh](t))
        },
        _1k: null,
        setIndex: function(t, i) {
            if (!this.contains(t)) throw new Error(Ea + t[hv]() + Gd);
            var n = this[indexOf](t);
            if (n == i) return !1;
            var e = new Nz(this, Nz.KIND_INDEX_CHANGE, t, i, n);
            return this[zl](e) === !1 ? !1 : (this._jk.remove(t) >= 0 && this._jk.add(i, t), this.onEvent(e), !0)
        },
        _fy: function(t, i) {
            if (0 == t.length) return !1;
            var e = !1,
                s = i >= 0,
                r = new Nz(this, Nz[Zl], t, i);
            if (this.beforeEvent(r) === !1) return !1;
            var h = [];
            t = t._jk || t;
            for (var a = 0, o = t[length]; o > a; a++) {
                var f = t[a];
                null !== f && f !== n && this._kf(f, i, !0) && (h[push](f), e = !0, s && i++)
            }
            return r.data = h, this.onEvent(r), e
        },
        _kf: function(t, i, n) {
            if (this[av](t) === !1) return !1;
            if (n) return k(this, $z, ov, arguments);
            var e = new Nz(this, Nz[Zl], t, i);
            return this.beforeEvent(e) === !1 ? !1 : k(this, $z, ov, arguments) ? (this._ki(t, e), t) : !1
        },
        _ki: function(t, i) {
            this[hh](i)
        },
        _n0g: function(t) {
            if (0 == t[length]) return !1;
            var i = new Nz(this, Nz[fv], t);
            if (this[zl](i) === !1) return !1;
            var e = [],
                s = !1;
            t = t._jk || t;
            for (var r = 0, h = t[length]; h > r; r++) {
                var a = t[r];
                if (null !== a && a !== n) {
                    var o = a.id || a;
                    a.id === n && (a = null), this._hg(o, a, !0) && (e[push](a), s = !0)
                }
            }
            return i.data = e, this[hh](i), s
        },
        _hg: function(t, i, n) {
            if (n) return k(this, $z, uv, arguments);
            var e = new Nz(this, Nz[fv], i);
            return this.beforeEvent(e) === !1 ? !1 : k(this, $z, uv, arguments) ? (this[hh](e), !0) : !1
        },
        clear: function() {
            if (this.isEmpty()) return !1;
            var t = new Nz(this, Nz[Kl], this[qd]());
            return this.beforeEvent(t) === !1 ? !1 : k(this, $z, Hd) ? (this[hh](t), !0) : !1
        },
        accept: function(t) {
            return this.filter && this[cv](t) === !1 ? !1 : !0
        }
    }, E($z, fz), Z($z[prototype], _v, {
        get: function() {
            return this._1k
        }
    });
    var Fz = function() {
        w(this, Fz, arguments), this[dv] = new Pz, this[lv] = new Gz(this), this._selectionModel._1k = this[dv], this[vv] = new Pz, this[vv][ld]({
            beforeEvent: this.beforeDataPropertyChange,
            onEvent: this.onDataPropertyChanged
        }, this), this[bv] = new Pz, this[yv] = new Pz, this.$roots = new fz;
        var t = this;
        this[gv][pv] = function(i, n) {
            if (!t.$roots[Zc](i)) throw new Error(Ea + i.id + Gd);
            var e = t[gv]._jk.indexOf(i);
            if (e == n) return !1;
            t[gv]._jk[splice](e, 1), t.$roots._jk.splice(n, 0, i), t._n2rIndexFlag = !0;
            var s = new Az(t, i, e, n);
            return t._1x(s), !0
        }
    };
    Fz.prototype = {
        selectionModel: null,
        selectionChangeDispatcher: null,
        dataChangeDispatcher: null,
        parentChangeDispatcher: null,
        roots: null,
        _ki: function(t, i) {
            t[Gl] = this.dataChangeDispatcher, t.parent || this[gv].add(t), this[hh](i)
        },
        _hg: function(t, i) {
            if (k(this, Fz, uv, arguments)) {
                if (i instanceof Sq) i[mv]();
                else if (i instanceof Cq) {
                    var n = i[xv]();
                    this.remove(n)
                }
                var e = i[Eu];
                return null == e ? this.$roots.remove(i) : (e[Ev](i), e[wv] = !0), i[hasChildren]() && this[remove](i[sv]()), i[Gl] = null, !0
            }
            return !1
        },
        _54: function(t) {
            var i = t.source;
            this[Zc](i) && (null == i[Eu] ? this.$roots.add(i) : null == t[Al] && this.$roots[remove](i), this.parentChangeDispatcher.onEvent(t))
        },
        _1x: function(t) {
            this[yv].onEvent(t)
        },
        beforeDataPropertyChange: function(t) {
            return t instanceof jz ? this.parentChangeDispatcher[zl](t) : !0
        },
        onDataPropertyChanged: function(t) {
            return t instanceof jz ? (this[kv] = !0, t[Wo][kv] = !0, void this._54(t)) : void(t instanceof Az && (this._n2rIndexFlag = !0, t[Wo][kv] = !0, this._1x(t)))
        },
        toRoots: function() {
            return this[gv].toDatas()
        },
        _gy: function(t) {
            var i, n = t._jp;
            i = n ? n._fp : this[gv];
            var e = i[indexOf](t);
            if (0 > e) throw new Error(Tv + t + "' not exist in the box");
            return 0 == e ? n : i[Mv](e - 1)
        },
        _gk: function(t) {
            var i, n = t._jp;
            i = n ? n._fp : this.$roots;
            var e = i[indexOf](t);
            if (0 > e) throw new Error(Tv + t + "' not exist in the box");
            return e == i.length - 1 ? n ? this._gk(n) : null : i[Mv](e + 1)
        },
        forEachByDepthFirst: function(t, i, n) {
            return this[gv].length ? r(this[gv], t, i, n) : !1
        },
        forEachByDepthFirstReverse: function(t, i, n) {
            return this[gv][length] ? o(this[gv], t, i, n) : !1
        },
        forEachByBreadthFirst: function(t, i) {
            return this[gv][length] ? c(this[gv], t, i) : !1
        },
        forEachByBreadthFirstReverse: function(t, i) {
            return this[gv][length] ? _(this[gv], t, i) : !1
        },
        clear: function() {
            return k(this, Fz, Hd) ? (this.$roots[Hd](), this[B_].clear(), !0) : !1
        }
    }, E(Fz, $z), J(Fz[prototype], {
        selectionModel: {
            get: function() {
                return this[lv]
            }
        },
        roots: {
            get: function() {
                return this[gv]
            }
        }
    });
    var Gz = function(t) {
        w(this, Gz), this.box = t, this[Iv] = {
            onEvent: function(t) {
                Nz[fv] == t[Il] ? null != t.data ? this.remove(t.data) : null != t[dd] && this[remove](t[dd]) : Nz.KIND_CLEAR == t[Il] && this.clear()
            }
        }, this.box[_v].addListener(this[Iv], this)
    };
    Gz[prototype] = {
        box: null,
        isSelected: function(t) {
            return this.containsById(t.id || t)
        },
        select: function(t) {
            return this.add(t)
        },
        unselect: function(t) {
            return this.remove(t)
        },
        reverseSelect: function(t) {
            return this.contains(t) ? this[remove](t) : this.add(t)
        },
        accept: function(t) {
            return this.box.contains(t)
        }
    }, E(Gz, $z);
    var zz = null,
        Yz = null,
        Hz = function() {
            if (!document.createElement) return function(t) {
                return t
            };
            var t = document[s_](r_),
                e = t.style,
                s = {};
            return function(t) {
                if (s[t]) return s[t];
                var i = _i(t);
                return e[i] !== n || Yz && e[i = _i(Yz + i)] !== n ? (s[t] = i, i) : t
            }
        }(),
        qz = {};
    !
        function() {
            if (!document[Ov]) return !1;
            for (var e = document.head, s = "Webkit Moz O ms Khtml" [yh](gh), r = 0; r < s[length]; r++) if (e[ea][s[r] + jv] !== n) {
                Yz = ta + s[r][ia]() + ta;
                break
            }
            var h = document[s_](ea);
            window[Sv] || h.appendChild(document[Cv]("")), h.type = Av, h.id = Lv, e[c_](h), zz = h.sheet;
            var a, o;
            for (var f in qz) {
                var u = qz[f];
                a = f, o = "";
                for (var c in u) o += Hz(c) + sa + u[c] + Pv;
                yi(a, o)
            }
        }();
    var Uz = function(t, i, n, e, s) {
            if (s) {
                var r = function(t) {
                    r.handle[call](r[Yl], t)
                };
                return r[Yl] = s, r[Rv] = n, t[Dv](i, r, e), r
            }
            return t[Dv](i, n, e), n
        },
        Wz = function(t, i, n) {
            t.removeEventListener(i, n)
        };
    if (oz.DOUBLE_CLICK_INTERVAL_TIME = 200, oz[Nv] = 800, window[kd] && navigator.userAgent) {
        var Xz, Vz = /mobile|tablet|ip(ad|hone|od)|android/i,
            Zz = Md in window,
            Jz = Zz && Vz[Fo](navigator[Td]);
        if (Jz) Xz = Bv;
        else {
            var Kz = $v in window ? "mousewheel" : Fv;
            Xz = Gv + Kz, Zz && (Xz += zv)
        }
        Xz = Xz[yh](/[\s,]+/);
        var Qz = function(i) {
                return window[Yv] && i instanceof window[Yv]
            },
            tY = function() {
                return oz.DOUBLE_CLICK_INTERVAL_TIME
            },
            iY = function() {
                return oz.LONG_PRESS_INTERVAL
            },
            F = function(t) {
                t[kh] ? t[kh]() : t[Th] = !1
            },
            G = function(t) {
                t[Mh] && t[Mh](), t.cancelBubble = !0
            },
            z = function(t) {
                F(t), G(t)
            },
            nY = function(t) {
                return t.defaultPrevented || t[Th] === !1
            },
            eY = function(t) {
                fY[Hv] && fY._n2urrentItem[qv](t)
            },
            sY = function(t) {
                if (fY[Hv]) {
                    var i = fY[Hv];
                    i._onWindowMouseUp(t), rY(null)
                }
            },
            rY = function(t) {
                fY[Hv] != t && (fY[Hv] && (fY._n2urrentItem[Uv] = !1), fY._n2urrentItem = t)
            },
            hY = function(i, n) {
                Xz[Jf](function(t) {
                    i.addEventListener(t, n, !1)
                }), hz || fY._myp || (fY[nc] = !0, window.addEventListener(Wv, eY, !0), window[Dv](Xv, sY, !0))
            },
            aY = function(t, i) {
                Xz[Jf](function(n) {
                    t[Vv](n, i, !1)
                })
            },
            oY = function(t) {
                return t[Fh] ? {
                    timeStamp: t.timeStamp,
                    x: t.cx,
                    y: t.cy
                } : {
                    timeStamp: t[Zv],
                    x: t.clientX,
                    y: t[da]
                }
            };
        pi[prototype] = {
            _install: function() {
                this[Jv] || (this[Jv] = function(t) {
                    this[Kv](t)
                }[ch](this), hY(this._m4, this[Jv]))
            },
            _uninstall: function() {
                this[Jv] && aY(this._m4, this[Jv])
            },
            _myction: function(t) {
                t = this[Qv](t);
                var i = t[Oo];
                this._handleEvent(t, i) === !1 && this._onEvent(t, tb + i)
            },
            _n2ancelLongPressTimer: function() {
                this[ib] && (clearTimeout(this[ib]), this.__longPressTimer = null)
            },
            __ksLongPress: function(t) {
                this[nb] || (this[nb] = function() {
                    this._ksEvent && (this[eb] = !0, this._ksEvent[sb] ? this[rb](this._ksEvent, hb) : this[rb](this._ksEvent, ab))
                }.bind(this)), this[ob](), this.__longPressTimer = setTimeout(this[nb], iY(t))
            },
            __fixTouchEvent: function(t) {
                for (var i, n, e = 0, s = 0, r = t[Fh][length], h = 0; r > h;) {
                    var a = t.touches[h++],
                        o = a[_a],
                        f = a[da];
                    if (2 == h) {
                        var u = n[0] - o,
                            c = n[1] - f;
                        i = Math[uo](u * u + c * c)
                    }
                    n = [o, f], e += o, s += f
                }
                t.cx = e / r, t.cy = s / r, t[Uc] = {
                    x: t.cx,
                    y: t.cy,
                    clientX: t.cx,
                    clientY: t.cy
                }, t[tl] = i
            },
            __touchCountChange: function(t) {
                this[ga][Hd](), this._98 = oY(t)
            },
            _handleTouchEvent: function(t, i) {
                switch (i) {
                    case "touchstart":
                        G(t), this[fb](t), this[ub](t);
                        var n = t[Fh][length];
                        this[cb] || (this[cb] = t, this._onstart(t), this[eb] = !1, this[_b](t)), 1 == n && (this.__ksMulTouchEvent = null), n >= 2 && !this.__ksMulTouchEvent && (this[db] = {
                            cx: t.cx,
                            cy: t.cy,
                            distance: t[tl]
                        });
                        break;
                    case "touchmove":
                        z(t), this.__fixTouchEvent(t);
                        var n = t[Fh][length];
                        if (n >= 2 && this.__ksMulTouchEvent) {
                            var e = this[db][tl];
                            t[lb] = t.distance / e, t[vb] = this[db][bb] ? t[lb] / this[db].prevScale : t[lb], this.__ksMulTouchEvent[bb] = t[lb], this[yb] || (this.__pinching = !0, this[rb](t, gb))
                        }
                        this[Uv] || (this[Uv] = !0, this[pb](t)), this[mb](t), this.__pinching && this[rb](t, xb);
                        break;
                    case "touchend":
                        z(t);
                        var n = t.touches[length];
                        n && (this[fb](t), this.__touchCountChange(t)), 1 >= n && (this[yb] && (this[yb] = !1, this._onEvent(t, Eb)), this[db] = null), 0 == n && (this.__dragging ? (this[wb](t), this.__dragging = !1) : t[Zv] - this[cb].timeStamp < .8 * tY(t) && this[kb](this[cb]), this._onrelease(t));
                        break;
                    case "touchcancel":
                        this[Uv] = !1, this.__pinching = !1, this[db] = null
                }
                return !1
            },
            _handleEvent: function(t, i) {
                if (Qz(t)) return this[Tb](t, i);
                if (Mb == i) G(t), rY(this), this._98 = oY(t), this[cb] || (this._ksEvent = t, this._onstart(t)), this.__n2ancelClick = !1, this.__ksLongPress(t);
                else if (Xv == i) rY(), this[Ib](t);
                else if (Ob == i) {
                    if (this._delayClickEvent) return this.__onclick(t), !0
                } else if (jb == i) {
                    if (this[Sb]) return !0
                } else {
                    if (Cb == i) return this[rb](t, Ab), this[cb] && nY(t) && rY(this), !0;
                    if (i == Kz) {
                        var e = t[Lb];
                        if (e !== n ? !iz && e % 120 ? e % 12 || (e /= 12) : e /= 120 : e === n && (e = -t[Pb]), !e) return;
                        return t[Rb] = e, this._onEvent(t, $v)
                    }
                }
                return !1
            },
            _onEvent: function(t, i) {
                if (this[Db]) {
                    var n = this[Db];
                    if (i = i || t[Oo], n instanceof Function) return n(t, i);
                    if (!(n[av] instanceof Function && n[av](i, t) === !1)) return n[Nb] instanceof Function && n.onevent(i, t, this[ya] || this._m4), n[i] instanceof Function ? n[i].call(n, t, this._scope || this._m4) : void 0
                }
            },
            _toQEvent: function(t) {
                return t
            },
            _onWindowMouseUp: function(t) {
                this[Uv] && (z(t), this[Uv] = !1, t = this[Qv](t), this[wb](t), this[Ib](t), this._onEvent(t, Bb))
            },
            _ksDragDistance: 4,
            _onWindowMouseMove: function(t) {
                if (this._ksEvent) {
                    if (z(t), !this[Uv]) {
                        var i = this[cb][$b] - t[$b],
                            n = this[cb][Fb] - t[Fb];
                        if (i * i + n * n < this[Gb]) return;
                        this[Uv] = !0, this._ksdrag(t)
                    }
                    this[mb](this._toQEvent(t))
                }
            },
            _delayClickEvent: !0,
            __onclick: function(t) {
                if (!this[eb]) {
                    var i = tY(t);
                    this[zb] ? this.__dblclicked || (clearTimeout(this.__n2lickTimer), this.__n2lickTimer = null, this[rb](t, Yb), this[Hb] = !0) : (this[Hb] = !1, this[zb] = setTimeout(function(t) {
                        this[zb] = null, this.__dblclicked || this[rb](t, o_)
                    }[ch](this, t, i), i))
                }
            },
            _onstart: function(t) {
                t[sb] ? this._onEvent(t, qb) : this._onEvent(t, Ub)
            },
            _onrelease: function(t) {
                this[cb] && (this._n2ancelLongPressTimer(), t.button ? this[rb](t, Wb) : this._onEvent(t, Xb), this[cb] = null, this._98 = null)
            },
            _myppendDragInfo: function(t) {
                var i = this._98;
                this._98 = oY(t), this[ga].add(i, this._98, t)
            },
            _ksdrag: function() {
                this[eb] = !0, this[ob](), this._ksEvent.button ? this[rb](this[cb], Vb) : this[rb](this[cb], Zb)
            },
            _ondrag: function(t) {
                this[Jb](t), this[cb][sb] ? this[rb](t, Kb) : this[rb](t, Qb)
            },
            _enddrag: function(t) {
                if (t.timeStamp - this._98[Zv] < 100) {
                    var i = this[ga][ty]();
                    i && (t.vx = i.x, t.vy = i.y)
                }
                this._ksEvent[sb] ? this._onEvent(t, iy) : this[rb](t, ny), this[ga].clear()
            },
            _i5: function() {
                this[ey]()
            },
            _krStatus: function() {
                fY[Hv] == this && delete fY._n2urrentItem, this[ob](), delete this._98, this[cb] && (delete this._ksEvent.getData, delete this[cb].getUI, delete this[cb])
            }
        };
        var fY = O(function(t) {
            this._kk = t, pi[apply](this, [t.canvasPanel, null, t])
        }, {
            "super": pi,
            _mjData: function(t) {
                return this._kk[sy](t)
            },
            _lc: function(t) {
                return this._kk[ry](t)
            },
            _toQEvent: function(i) {
                return (i instanceof MouseEvent || window.TouchEvent && i instanceof window[Yv]) && (i.getData = this[hy][ch](this, i), i[zc] = this._lc[ch](this, i)), i
            },
            _onElementRemoved: function(t) {
                this[ay](function(i) {
                    i[oy] instanceof Function && i[oy](t, this._kk)
                })
            },
            _onElementClear: function() {
                this[ay](function(t) {
                    t.onClear instanceof Function && t.onClear(this._kk)
                })
            },
            _i5: function(t) {
                this[fy] && this[uy](this[fy], t), this._n2ustomInteractionListeners && this[uy](this._n2ustomInteractionListeners, t), this._krStatus()
            },
            _kk: null,
            _1vs: null,
            _n2ustomInteractionListeners: null,
            _mkInteraction: function(t) {
                return this._1vs == t ? !1 : (this[fy] && this[fy][length] && this[uy](this[fy]), void(this[fy] = t))
            },
            _mrCustomInteractionListener: function(t) {
                this._n2ustomInteractionListeners || (this[cy] = []), this[cy].push(t)
            },
            _kaCustomInteractionListener: function(t) {
                this[cy] && 0 != this[cy][length] && p(this[cy], t)
            },
            _onEvent: function(t, i, n) {
                this._kk[i] instanceof Function && this._kk[i][call](this._kk, t, n), this[fy] && this.__onEvent(t, i, this[fy], n), this[cy] && this.__onEvent(t, i, this[cy], n)
            },
            _iyListeners: function(t) {
                this._1vs && l(this._1vs, t, this), this._n2ustomInteractionListeners && l(this[cy], t, this)
            },
            __onEvent: function(t, i, n, e) {
                if (!$(n)) return void this[_y](t, i, n, e);
                for (var s = 0; s < n[length]; s++) {
                    var r = n[s];
                    this.__handleEvent(t, i, r, e)
                }
            },
            __handleEvent: function(t, i, n, e) {
                if (!(n[av] instanceof Function && n.accept(i, t, this._kk, e) === !1)) {
                    n.onevent instanceof Function && n[Nb](i, t, this._kk, e);
                    var s = n[i];
                    s instanceof Function && s.call(n, t, this._kk, e)
                }
            },
            _i5Interaction: function(t) {
                t.destroy instanceof Function && t[dy][call](t, this._kk)
            },
            _i5Interactions: function(t, i) {
                if (!$(t)) return void this[ly](t, i);
                for (var n = 0; n < t[length]; n++) {
                    var e = t[n];
                    e && this._i5Interaction(e, i)
                }
            }
        })
    }
    xi.prototype = {
        limitCount: 10,
        points: null,
        add: function(t, i, n) {
            0 == this[xa][length] && (this[vy] = t.x, this[by] = t.y);
            var e = i.timeStamp - t.timeStamp || 1;
            n.interval = e;
            var s = i.x - t.x,
                r = i.y - t.y;
            n.dx = s, n.dy = r, n.startX = this[vy], n[yy] = this[by], n.totalDeltaX = i.x - this._ksX, n[gy] = i.y - this[by], this[xa].splice(0, 0, {
                interval: e,
                dx: s,
                dy: r
            }), this[xa][length] > this[py] && this[xa].pop()
        },
        getCurrentSpeed: function() {
            if (!this.points[length]) return null;
            for (var t = 0, i = 0, n = 0, e = 0, s = this[xa].length; s > e; e++) {
                var r = this.points[e],
                    h = r.interval;
                if (h > 150) {
                    t = 0;
                    break
                }
                if (t += h, i += r.dx, n += r.dy, t > 300) break
            }
            return 0 == t || 0 == i && 0 == n ? null : {
                x: i / t,
                y: n / t
            }
        },
        clear: function() {
            this[xa] = []
        }
    };
    var uY, cY, _Y, dY;
    JG ? (uY = my, cY = xy, _Y = Ey, dY = wy) : KG ? (uY = ky, cY = Ty, _Y = My, dY = Iy) : (uY = Oy, cY = Oy, _Y = q_, dY = jy);
    var lY = Sy,
        vY = Math.PI,
        bY = Math.pow,
        yY = Math.sin,
        gY = 1.70158,
        pY = {
            swing: function(t) {
                return -Math.cos(t * vY) / 2 + .5
            },
            easeNone: function(t) {
                return t
            },
            easeIn: function(t) {
                return t * t
            },
            easeOut: function(t) {
                return (2 - t) * t
            },
            easeBoth: function(t) {
                return (t *= 2) < 1 ? .5 * t * t : .5 * (1 - --t * (t - 2))
            },
            easeInStrong: function(t) {
                return t * t * t * t
            },
            easeOutStrong: function(t) {
                return 1 - --t * t * t * t
            },
            easeBothStrong: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : .5 * (2 - (t -= 2) * t * t * t)
            },
            elasticIn: function(t) {
                var i = .3,
                    n = i / 4;
                return 0 === t || 1 === t ? t : -(bY(2, 10 * (t -= 1)) * yY(2 * (t - n) * vY / i))
            },
            elasticOut: function(t) {
                var i = .3,
                    n = i / 4;
                return 0 === t || 1 === t ? t : bY(2, -10 * t) * yY(2 * (t - n) * vY / i) + 1
            },
            elasticBoth: function(t) {
                var i = .45,
                    n = i / 4;
                return 0 === t || 2 === (t *= 2) ? t : 1 > t ? -.5 * bY(2, 10 * (t -= 1)) * yY(2 * (t - n) * vY / i) : bY(2, -10 * (t -= 1)) * yY(2 * (t - n) * vY / i) * .5 + 1
            },
            backIn: function(t) {
                return 1 === t && (t -= .001), t * t * ((gY + 1) * t - gY)
            },
            backOut: function(t) {
                return (t -= 1) * t * ((gY + 1) * t + gY) + 1
            },
            backBoth: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * (((gY *= 1.525) + 1) * t - gY) : .5 * ((t -= 2) * t * (((gY *= 1.525) + 1) * t + gY) + 2)
            },
            bounceIn: function(t) {
                return 1 - pY.bounceOut(1 - t)
            },
            bounceOut: function(t) {
                var i, n = 7.5625;
                return i = 1 / 2.75 > t ? n * t * t : 2 / 2.75 > t ? n * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? n * (t -= 2.25 / 2.75) * t + .9375 : n * (t -= 2.625 / 2.75) * t + .984375
            },
            bounceBoth: function(t) {
                return .5 > t ? .5 * pY[Cy](2 * t) : .5 * pY[Ay](2 * t - 1) + .5
            }
        },
        mY = function(t) {
            this._jr = t
        };
    mY[prototype] = {
        _jr: null,
        _8i: function() {
            this[Ly] instanceof Function && (this[Ly](), this._n2allback = null)
        },
        _ks: function(t) {
            var i = Date.now();
            this._m3(), this[Ly] = t, this[Py] = requestAnimationFrame(function n() {
                var t = Date.now(),
                    e = t - i;
                return !e || this._jr && this._jr(e) !== !1 ? (i = t, void(this[Py] = requestAnimationFrame(n.bind(this)))) : void this._m3()
            }[ch](this))
        },
        _7c: function() {},
        _m3: function() {
            return this[Py] ? (this._7c(), this._8i(), window[Sd](this[Py]), void delete this[Py]) : !1
        },
        _dy: function() {
            return null != this._requestID
        }
    };
    var xY = function(t, i, n, e) {
        this[Ry] = t, this[ya] = i || this, this._3i = e, n && n > 0 && (this._ip = n)
    };
    xY[prototype] = {
        _ip: 1e3,
        _3i: null,
        _ed: 0,
        _m3: function() {
            return this._ed = 0, this._n2p = 0, k(this, xY, Dy)
        },
        _n2p: 0,
        _jr: function(t) {
            if (this._ed += t, this._ed >= this._ip) return this[Ry][call](this._scope, 1, (1 - this._n2p) * this._ip, t, this._ip), !1;
            var i = this._ed / this._ip;
            return this._3i && (i = this._3i(i)), this[Ry].call(this[ya], i, (i - this[Ny]) * this._ip, t, this._ip) === !1 ? !1 : void(this[Ny] = i)
        }
    }, E(xY, mY);
    var EY = function(t) {
            ni(t)
        },
        wY = {
            version: By,
            extend: E,
            doSuperConstructor: w,
            doSuper: k,
            createFunction: function(t, i) {
                return i[ch](t)
            },
            setClass: L,
            appendClass: P,
            removeClass: R,
            forEach: l,
            forEachReverse: b,
            isNumber: D,
            isString: N,
            isBoolean: B,
            isArray: $,
            eventPreventDefault: F,
            eventStopPropagation: G,
            stopEvent: z,
            callLater: C,
            nextFrame: A,
            forEachChild: e,
            forEachByDepthFirst: r,
            forEachByDepthFirstReverse: o,
            forEachByBreadthFirst: c,
            randomInt: Y,
            randomBool: H,
            randomColor: U,
            addEventListener: Uz,
            getFirstElementChildByTagName: cz
        };
    wY[$y] = hz, wY[Fy] = ez, wY.intersectsPoint = hi, wY[Gy] = ai, wY[cd] = bz, wY[zy] = vz, wY[Yy] = _z, wY.Insets = yz, wY[Hy] = Iz, wY[qy] = Oz, wY[Uy] = Nz, wY[Wy] = Lz, wY.Dispatcher = Pz, wY[Xy] = gz, wY[Vy] = Bz, wY[Zy] = Gz, wY.DataModel = Fz, wY[Jy] = Dz, wY[Ky] = ki, wY[Qy] = Ei, wY.loadJSON = wi, wY[tg] = mi, wY[ig] = dz, wY[ng] = fz, wY.DragSupport = pi, wY[eg] = function(t) {
        alert(t)
    }, wY[sg] = function(t, i, n, e) {
        var s = prompt(t, i);
        return s != i && n ? n[call](e, s) : s
    }, wY[rg] = function(t, i, n) {
        var e = confirm(t);
        return e && i ? i.call(n) : e
    }, wY[hg] = yi;
    var kY = {
        IMAGE_ADJUST_FLIP: ag,
        IMAGE_ADJUST_MIRROR: og,
        SELECTION_TYPE_BORDER_RECT: fg,
        SELECTION_TYPE_BORDER: ug,
        SELECTION_TYPE_SHADOW: cg,
        NS_SVG: "http://www.w3.org/2000/svg",
        PROPERTY_TYPE_ACCESSOR: 0,
        PROPERTY_TYPE_STYLE: 1,
        PROPERTY_TYPE_CLIENT: 2,
        EDGE_TYPE_DEFAULT: null,
        EDGE_TYPE_ELBOW: _g,
        EDGE_TYPE_ELBOW_HORIZONTAL: dg,
        EDGE_TYPE_ELBOW_VERTICAL: lg,
        EDGE_TYPE_ORTHOGONAL: vg,
        EDGE_TYPE_ORTHOGONAL_HORIZONTAL: bg,
        EDGE_TYPE_ORTHOGONAL_VERTICAL: yg,
        EDGE_TYPE_HORIZONTAL_VERTICAL: gg,
        EDGE_TYPE_VERTICAL_HORIZONTAL: pg,
        EDGE_TYPE_EXTEND_TOP: mg,
        EDGE_TYPE_EXTEND_LEFT: xg,
        EDGE_TYPE_EXTEND_BOTTOM: Eg,
        EDGE_TYPE_EXTEND_RIGHT: wg,
        EDGE_TYPE_ZIGZAG: kg,
        EDGE_CORNER_NONE: b_,
        EDGE_CORNER_ROUND: po,
        EDGE_CORNER_BEVEL: Tg,
        GROUP_TYPE_RECT: xu,
        GROUP_TYPE_CIRCLE: Mg,
        GROUP_TYPE_ELLIPSE: Ig,
        SHAPE_CIRCLE: Og,
        SHAPE_RECT: xu,
        SHAPE_ROUNDRECT: jg,
        SHAPE_STAR: Sg,
        SHAPE_TRIANGLE: Cg,
        SHAPE_HEXAGON: Ag,
        SHAPE_PENTAGON: Lg,
        SHAPE_TRAPEZIUM: Pg,
        SHAPE_RHOMBUS: Rg,
        SHAPE_PARALLELOGRAM: Dg,
        SHAPE_HEART: Ng,
        SHAPE_DIAMOND: Bg,
        SHAPE_CROSS: $g,
        SHAPE_ARROW_STANDARD: Fg,
        SHAPE_ARROW_1: Gg,
        SHAPE_ARROW_2: zg,
        SHAPE_ARROW_3: Yg,
        SHAPE_ARROW_4: Hg,
        SHAPE_ARROW_5: qg,
        SHAPE_ARROW_6: Ug,
        SHAPE_ARROW_7: Wg,
        SHAPE_ARROW_8: Xg,
        SHAPE_ARROW_OPEN: Vg
    };
    kY[Zg] = Jg, kY[Kg] = po, kY[Qg] = tp, kY.LINE_JOIN_TYPE_BEVEL = Tg, kY[ip] = po, kY.LINE_JOIN_TYPE_MITER = np, oz[ep] = kY[sp], oz.SELECTION_TOLERANCE = Jz ? 8 : 3, oz[rp] = 2, oz[hp] = 7, oz[ap] = V(3422561023), oz.SELECTION_TYPE = kY.SELECTION_TYPE_SHADOW, oz[op] = 10, oz[fp] = 10, oz[Nc] = 10, oz[up] = 200, oz[no] = 1.2;
    var TY = window[cp] || 1;
    1 > TY && (TY = 1);
    var MY;
    wY.createCanvas = Ai;
    var IY = tz && !hz,
        OY = 9,
        jY = function(t, i, n, e) {
            var s = t - n,
                r = i - e;
            return s * s + r * r
        };
    Qi[prototype] = {
        equals: function(t) {
            return this.cx == t.cx && this.cy == t.cy && this.r == t.r
        }
    }, Qi._jhCircle = function(t, i, n) {
        if (!n) return Ji(t, i);
        var e = jY(t.x, t.y, i.x, i.y),
            s = jY(t.x, t.y, n.x, n.y),
            r = jY(n.x, n.y, i.x, i.y);
        if (e + SY >= s + r) return Ji(t, i, 0, n);
        if (s + SY >= e + r) return Ji(t, n, 0, i);
        if (r + SY >= e + s) return Ji(i, n, 0, t);
        var h;
        Math.abs(n.y - i.y) < 1e-4 && (h = t, t = i, i = h), h = n.x * (t.y - i.y) + t.x * (i.y - n.y) + i.x * (-t.y + n.y);
        var a = (n.x * n.x * (t.y - i.y) + (t.x * t.x + (t.y - i.y) * (t.y - n.y)) * (i.y - n.y) + i.x * i.x * (-t.y + n.y)) / (2 * h),
            o = (i.y + n.y) / 2 - (n.x - i.x) / (n.y - i.y) * (a - (i.x + n.x) / 2);
        return new Qi(a, o, dz(a, o, t.x, t.y), t, i, n)
    };
    var SY = .01,
        CY = {
            _n03: function(t, i, e, s, r) {
                if (N(t) && (t = gz.fromString(t)), !t) return {
                    x: 0,
                    y: 0
                };
                var h = 0,
                    a = 0,
                    o = i._j4;
                if (e = e || 0, t.x === n) {
                    var f = t[hl],
                        u = t[al],
                        c = !0;
                    switch (f) {
                        case xz:
                            c = !1;
                            break;
                        case mz:
                            h += o / 2
                    }
                    switch (u) {
                        case Ez:
                            a -= e / 2;
                            break;
                        case kz:
                            a += e / 2
                    }
                } else h = t.x, a = t.y, Math.abs(h) > 0 && Math.abs(h) < 1 && (h *= o);
                r && null != s && (a += s.y, h += Math.abs(s.x) < 1 ? s.x * o : s.x);
                var _ = on.call(i, h, a, c);
                return _ ? (r || null == s || _[_p](s), _) : {
                    x: 0,
                    y: 0
                }
            },
            _lg: function(t, i) {
                var n = i.type,
                    e = i[xa];
                switch (n) {
                    case eH:
                        t[dp](e[0], e[1], e[2], e[3], i._r);
                        break;
                    case QY:
                        t[Ru](e[0], e[1]);
                        break;
                    case tH:
                        t.lineTo(e[0], e[1]);
                        break;
                    case iH:
                        t.quadraticCurveTo(e[0], e[1], e[2], e[3]);
                        break;
                    case nH:
                        t.bezierCurveTo(e[0], e[1], e[2], e[3], e[4], e[5]);
                        break;
                    case sH:
                        t[of]()
                }
            },
            _4y: function(t, i, n, e) {
                var s = i[Oo];
                if (s != QY && s != sH) {
                    var r = n[Io],
                        h = i.points;
                    switch (n[Oo] == QY && t.add(r.x, r.y), s) {
                        case eH:
                            cn(i, r.x, r.y, h[0], h[1], h[2], h[3], h[4]), t.add(h[0], h[1]), t.add(i[lp], i._p1y), t.add(i[So], i[Co]), i.$boundaryPoint1 && t.add(i[vp].x, i[vp].y), i[bp] && t.add(i[bp].x, i.$boundaryPoint2.y);
                            break;
                        case tH:
                            t.add(h[0], h[1]);
                            break;
                        case iH:
                            zi([r.x, r.y].concat(h), t);
                            break;
                        case nH:
                            Wi([r.x, r.y].concat(h), t);
                            break;
                        case sH:
                            e && t.add(e[xa][0], e[xa][1])
                    }
                }
            },
            _50: function(t, i, n) {
                var e = t.type;
                if (e == QY) return 0;
                var s = i[Io],
                    r = t.points;
                switch (e == nH && 4 == r.length && (e = iH), e) {
                    case tH:
                        return dz(r[0], r[1], s.x, s.y);
                    case eH:
                        return t._j4;
                    case iH:
                        var h = Hi([s.x, s.y][concat](r));
                        return t._lf = h, h(1);
                    case nH:
                        var h = Vi([s.x, s.y][concat](r));
                        return t._lf = h, h(1) || Xi([s.x, s.y][concat](r));
                    case sH:
                        if (s && n) return t.points = n[xa], dz(n[xa][0], n[xa][1], s.x, s.y)
                }
                return 0
            }
        },
        AY = /^data:image\/(\w+);base64,/i,
        LY = /^gif/i,
        PY = /^svg/i,
        RY = 10,
        DY = 11,
        NY = 12,
        BY = 20,
        $Y = 30;
    oz.IMAGE_WIDTH = 50, oz[yp] = 30, oz.MAX_CACHE_PIXELS = 1e6;
    var FY = 1,
        GY = 2,
        zY = 3;
    bn[prototype] = {
        _jd: 0,
        _6b: !0,
        _ku: null,
        _j2: null,
        _m5: null,
        _le: null,
        _myl: n,
        _9p: n,
        _72: function() {
            return this._jd == FY
        },
        getBounds: function(t) {
            return this._le == $Y ? this._m5.getBounds(t) : (this._6b && this._fn(), this)
        },
        validate: function() {
            this._6b && this._fn()
        },
        _fn: function() {
            if (this._6b = !1, this._le == $Y) return this._m5[vo](), void this[pf](this._m5[bo]);
            if (this._le == BY) return void this._9q();
            if (this._jd != FY) try {
                this._eg()
            } catch (t) {
                this._jd = zY, wY[Yh](t)
            }
        },
        _4x: function() {
            this._dk(), this[gp][Hd](), delete this._dispatcher
        },
        _hx: function(t) {
            this._ku && this._ku[pp] && this._ku[pp][Ev](this._ku), this._jd = zY, wY[Yh](mp + this._m5), this[xp] = null, this._j2 = null, this._ku = null, t !== !1 && this._4x()
        },
        _eg: function() {
            var t = this._m5;
            if (this._jd = FY, this[gp] = new Pz, this._le == NY) {
                for (var n in lH) this[n] = lH[n];
                return void Xn(this._m5, this, this[Ep], this._hx, this._fi)
            }
            this._ku || (this._ku = document.createElement(a_), XG && (this._ku.style[wp] = v_, document.body.appendChild(this._ku))), this._ku.src = t, this._ku[Da] && (this.width = this._ku[Da], this[Na] = this._ku.height), this._ku[tu] = XG ?
                function(t) {
                    setTimeout(this._7o.bind(this, t), 100)
                }[ch](this) : this._7o.bind(this), this._ku[iu] = this._hx[ch](this)
        },
        _7o: function() {
            this._jd = GY;
            var t = this._ku.width,
                i = this._ku[Na];
            if (this._ku[pp] && this._ku[pp].removeChild(this._ku), !t || !i) return void this._hx();
            this.width = t, this.height = i;
            var n = this._ex();
            n[Da] = t, n[Na] = i, n.g[L_](this._ku, 0, 0, t, i), this[xp] = XG && this._le == DY ? null : wn(n), this._4x()
        },
        _9q: function() {
            var t = this._m5;
            if (!(t[$o] instanceof Function)) return void this._hx(!1);
            if (t.cacheable === !1 && t[Da] && t[Na]) return this.width = t[Da], void(this.height = t.height);
            var i = t.width || oz[up],
                n = t[Na] || oz.IMAGE_MAX_SIZE,
                e = this._ex();
            e[Da] = i, e[Na] = n;
            var s = e.g;
            t[$o](s);
            var r = Ni(s, 0, 0, i, n);
            if (r) {
                var h = Tn(r[ko], i, n);
                this.x = h._x, this.y = h._y, this[Da] = h[kp], this.height = h._height, e[Da] = this.width, e[Na] = this[Na], s[rf](r, -this.x, -this.y), this[xp] = h
            }
        },
        _ex: function() {
            return this._j2 || (this._j2 = Ai())
        },
        _5v: function(t, i, n, e, s, r) {
            i.save(), i[xu](0, 0, e, s), i[Tp] = r || Mp, i[wo](), i[Ip](), i[Op] = Uc, i[so] = ro, i[Tp] = C_;
            var h = 6 * (i[Ha][Wa] || 1);
            i.font = jp + h + "px Verdana,helvetica,arial,sans-serif", i[O_] = j_, i.lineWidth = 1, i[Sp](t, e / 2 + .5, s / 2 + .5), i[O_] = Cp, i.strokeText(t, e / 2 - .5, s / 2 - .5), i.fillText(t, e / 2, s / 2), i.restore()
        },
        draw: function(t, i, n, e, s, r) {
            if (this[Da] && this[Na]) {
                i = i || 1, e = e || 1, s = s || 1;
                var h = this[Da] * e,
                    a = this[Na] * s;
                if (r && n.shadowColor && (t[S_] = n[S_], t[Ap] = (n.shadowBlur || 0) * i, t.shadowOffsetX = (n.shadowOffsetX || 0) * i, t[Lp] = (n.shadowOffsetY || 0) * i), this._jd == FY) return this._5v(Pp, t, i, h, a, n.renderColor);
                if (this._jd == zY) return this._5v(Rp, t, i, h, a, n.renderColor);
                if (this._le == $Y) return t[io](e, s), void this._m5[$o](t, i, n);
                var o = this._gs(i, e, s);
                return o ? ((this.x || this.y) && t[to](this.x * e, this.y * s), t[io](e / o[io], s / o.scale), void o._lg(t, n[Dp], n[Np])) : void this._j3(t, i, e, s, this[Da] * e, this[Na] * s, n)
            }
        },
        _j3: function(t, i, n, e, s, r, h) {
            if (this._le == BY) return 1 != n && 1 != e && t[io](n, e), void this._m5[$o](t, h);
            if (this._ku) {
                if (!QG) return void t[L_](this._ku, 0, 0, s, r);
                var n = i * s / this[Da],
                    e = i * r / this[Na];
                t[io](1 / n, 1 / e), t[L_](this._ku, 0, 0, s * n, r * e)
            }
        },
        _je: null,
        _gs: function(t, i, n) {
            if (this._le == BY && this._m5[Bp] === !1) return null;
            if (this._le == RY || (t *= Math.max(i, n)) <= 1) return this._defaultCache || (this._defaultCache = this._gt(this._j2 || this._ku, 1)), this[$p];
            var e = this._je.maxScale || 0;
            if (t = Math[ceil](t), e >= t) {
                for (var s = t, r = this._je[s]; !r && ++s <= e;) r = this._je[s];
                if (r) return r
            }
            t % 2 && t++;
            var h = this.width * t,
                a = this[Na] * t;
            if (h * a > oz[Fp]) return null;
            var o = Ai(h, a);
            return (this.x || this.y) && o.g[to](-this.x * t, -this.y * t), this._j3(o.g, 1, t, t, h, a), this._gt(o, t)
        },
        _gt: function(t, i) {
            var n = new oH(t, i);
            return this._je[i] = n, this._je[Gp] = i, n
        },
        hitTest: function(t, i, n) {
            if (this._le == $Y) return this._m5[Jc][apply](this._m5, arguments);
            if (!(this[xp] || this._ku && this._ku._pixels)) return !0;
            var e = this._pixels || this._ku._pixels;
            return e._ij(t, i, n)
        },
        _dk: function() {
            this[gp] && this[gp][hh](new Iz(this, zp, Yp, this._ku))
        },
        _myc: function(t, i) {
            this[gp] && this[gp][ld](t, i)
        },
        _6v: function(t, i) {
            this._dispatcher && this[gp].removeListener(t, i)
        },
        _n2f: function(t) {
            this._je = {}, (t || this[Da] * this.height > 1e5) && (this._ku = null, this._j2 = null)
        }
    }, E(bn, bz);
    var YY = {};
    wY[L_] = xn, wY.registerImage = yn, wY.hasImage = pn, wY[Hp] = function() {
        var t = [];
        for (var i in YY) t[push](i);
        return t
    };
    var HY = function(t, i, n, e, s, r) {
        this[Oo] = t, this[qp] = i, this[Up] = n, this[qc] = e || 0, this.tx = s || 0, this.ty = r || 0
    };
    kY[Wp] = cl, kY.GRADIENT_TYPE_LINEAR = fl, HY.prototype = {
        type: null,
        colors: null,
        positions: null,
        angle: null,
        tx: 0,
        ty: 0,
        position: gz[yl],
        isEmpty: function() {
            return null == this[qp] || 0 == this[qp][length]
        },
        _71: function() {
            var t = this[qp][length];
            if (1 == t) return [0];
            for (var i = [], n = 1 / (t - 1), e = 0; t > e; e++) i[push](n * e);
            return this[Up] || (this[Up] = i), i
        },
        generatorGradient: function(t) {
            if (null == this[qp] || 0 == this.colors[length]) return null;
            var i, n = Li();
            if (this[Oo] == kY[Xp]) {
                var e = this[qc];
                e > Math.PI && (e -= Math.PI);
                var s;
                if (e <= Math.PI / 2) {
                    var r = Math[Hh](t[Na], t[Da]),
                        h = Math[uo](t.width * t[Da] + t[Na] * t[Na]),
                        a = r - e;
                    s = Math.cos(a) * h
                } else {
                    var r = Math[Hh](t[Da], t[Na]),
                        h = Math.sqrt(t[Da] * t.width + t[Na] * t[Na]),
                        a = r - (e - Math.PI / 2);
                    s = Math.cos(a) * h
                }
                var o = s / 2,
                    f = o * Math.cos(e),
                    u = o * Math.sin(e),
                    c = t.x + t[Da] / 2 - f,
                    _ = t.y + t.height / 2 - u,
                    d = t.x + t[Da] / 2 + f,
                    l = t.y + t[Na] / 2 + u;
                i = n.createLinearGradient(c, _, d, l)
            } else {
                if (!(this[Oo] = kY[Wp])) return null;
                var v = fi(this[Vp], t.width, t[Na]);
                v.x += t.x, v.y += t.y, this.tx && (v.x += Math.abs(this.tx) < 1 ? t.width * this.tx : this.tx), this.ty && (v.y += Math.abs(this.ty) < 1 ? t[Na] * this.ty : this.ty);
                var b = dz(v.x, v.y, t.x, t.y);
                b = Math.max(b, dz(v.x, v.y, t.x, t.y + t[Na])), b = Math.max(b, dz(v.x, v.y, t.x + t.width, t.y + t.height)), b = Math.max(b, dz(v.x, v.y, t.x + t[Da], t.y)), i = n[Zp](v.x, v.y, 0, v.x, v.y, b)
            }
            var y = this[qp],
                g = this.positions;
            g && g[length] == y.length || (g = this._71());
            for (var p = 0, m = y[length]; m > p; p++) i[Jp](g[p], y[p]);
            return i
        }
    };
    var qY = new HY(kY[Xp], [V(2332033023), V(1154272460), V(1154272460), V(1442840575)], [.1, .3, .7, .9], Math.PI / 2),
        UY = new HY(kY[Xp], [V(2332033023), V(1154272460), V(1154272460), V(1442840575)], [.1, .3, .7, .9], 0),
        WY = (new HY(kY[Xp], [V(1154272460), V(1442840575)], [.1, .9], 0), new HY(kY[Wp], [V(2298478591), V(1156509422), V(1720223880), V(1147561574)], [.1, .3, .7, .9], 0, -.3, -.3)),
        XY = [V(0), V(4294901760), V(4294967040), V(4278255360), V(4278250239), V(4278190992), V(4294901958), V(0)],
        VY = [0, .12, .28, .45, .6, .75, .8, 1],
        ZY = new HY(kY[Xp], XY, VY),
        JY = new HY(kY[Xp], XY, VY, Math.PI / 2),
        KY = new HY(kY[Wp], XY, VY);
    HY.LINEAR_GRADIENT_VERTICAL = qY, HY.LINEAR_GRADIENT_HORIZONTAL = UY, HY[Kp] = WY, HY.RAINBOW_LINEAR_GRADIENT = ZY, HY.RAINBOW_LINEAR_GRADIENT_VERTICAL = JY, HY.RAINBOW_RADIAL_GRADIENT = KY;
    var QY = _l,
        tH = fl,
        iH = Qp,
        nH = ul,
        eH = tm,
        sH = im;
    kY[nm] = QY, kY.SEGMENT_LINE_TO = tH, kY[em] = iH, kY[sm] = nH, kY[rm] = eH, kY.SEGMENT_CLOSE = sH;
    var rH = function(t, i) {
        this.id = ++qG, $(t) ? this[xa] = t : (this[Oo] = t, this[xa] = i)
    };
    rH.prototype = {
        toJSON: function() {
            var t = {
                type: this.type,
                points: this.points
            };
            return this[Zo] && (t.invalidTerminal = !0), t
        },
        parseJSON: function(t) {
            this[Oo] = t[Oo], this[xa] = t[xa], this[Zo] = t[Zo]
        },
        points: null,
        type: tH,
        clone: function() {
            return new rH(this[Oo], this.points ? y(this[xa]) : null)
        },
        move: function(t, i) {
            if (this.points) for (var n = 0, e = this.points[length]; e > n; n++) {
                var s = this[xa][n];
                wY[hm](s) && (this[xa][n] += n % 2 == 0 ? t : i)
            }
        }
    }, J(rH[prototype], {
        lastPoint: {
            get: function() {
                return this[Oo] == eH ? {
                    x: this._p2x,
                    y: this._p2y
                } : {
                    x: this[xa][this[xa][length] - 2],
                    y: this[xa][this[xa][length] - 1]
                }
            }
        },
        firstPoint: {
            get: function() {
                return {
                    x: this[xa][0],
                    y: this[xa][1]
                }
            }
        }
    }), wY[am] = rH;
    var hH = 0,
        aH = function(t) {
            this[bo] = new bz, this._fk = t || []
        };
    aH[prototype] = {
        toJSON: function() {
            var t = [];
            return this._fk.forEach(function(i) {
                t[push](i[om]())
            }), t
        },
        parseJSON: function(t) {
            var i = this._fk;
            t[Jf](function(t) {
                i.push(new rH(t[Oo], t[xa]))
            })
        },
        clear: function() {
            this._fk.length = 0, this[bo][Hd](), this._j4 = 0, this._6b = !0
        },
        _dx: !0,
        _6x: function(t, i) {
            this._dx && 0 === this._fk[length] && t != QY && this._fk.push(new rH(QY, [0, 0])), this._fk[push](new rH(t, i)), this._6b = !0
        },
        add: function(t) {
            this._fk[push](t), this._6b = !0
        },
        removePathSegment: function(t) {
            return t >= this._fk.length ? !1 : (this._fk[splice](t, 1), void(this._6b = !0))
        },
        moveTo: function(t, i) {
            this._6x(QY, [t, i])
        },
        lineTo: function(t, i) {
            this._6x(tH, [t, i])
        },
        quadTo: function(t, i, n, e) {
            this._6x(iH, [t, i, n, e])
        },
        curveTo: function(t, i, n, e, s, r) {
            this._6x(nH, [t, i, n, e, s, r])
        },
        arcTo: function(t, i, n, e, s) {
            this._6x(eH, [t, i, n, e, s])
        },
        closePath: function() {
            this._6x(sH)
        },
        _7p: function(t, i, n, e, s) {
            if (e[fm]) {
                if (n == kY.SELECTION_TYPE_SHADOW) {
                    if (!e[um]) return;
                    return t.shadowColor = e[fm], t[Ap] = e.selectionShadowBlur * i, t.shadowOffsetX = (e.selectionShadowOffsetX || 0) * i, void(t.shadowOffsetY = (e[cm] || 0) * i)
                }
                if (n == kY.SELECTION_TYPE_BORDER) {
                    if (!e.selectionBorder) return;
                    t[O_] = e[fm], t[To] = e[_m] + (s[To] || 0), this._lg(t), t[Eo]()
                }
            }
        },
        _6b: !0,
        _fk: null,
        _j4: 0,
        lineCap: Jg,
        lineJoin: po,
        draw: function(t, i, n, e, s) {
            t[dm] = n[dm] || this.lineCap, t.lineJoin = n[I_] || this[I_], e && (s || (s = n), this._7p(t, i, s[lm], s, n)), n[vm] && (this._lg(t), t[To] = n[To] + 2 * (n.outline || 0), t[O_] = n[vm], t[Eo]()), t[To] = 0, this._lg(t), n.fillColor && (t[Tp] = n[Dp] || n.fillColor, t[wo]()), n.fillGradient && (t[Tp] = n._fillGradient || n[bm], t.fill()), n[To] && (t[To] = n.lineWidth, n[Ff] && (t[Ff] = n[Ff], t.lineDashOffset = n[Wf]), t[O_] = n[Dp] || n[O_], t[Eo](), t.lineDash = [])
        },
        _lg: function(t) {
            t[ym]();
            for (var i, n, e = 0, s = this._fk[length]; s > e; e++) i = this._fk[e], CY._lg(t, i, n), n = i
        },
        invalidate: function() {
            this._6b = !0
        },
        validate: function() {
            if (this._6b = !1, this.bounds[Hd](), this._j4 = 0, 0 != this._fk[length]) for (var t, i, n = this._fk, e = 1, s = n[0], r = s, h = n[length]; h > e; e++) t = n[e], t.type == QY ? r = t : (CY._4y(this.bounds, t, s, r), i = CY._50(t, s, r), t._j4 = i, this._j4 += i), s = t
        },
        getBounds: function(t, i) {
            if (this._6b && this[vo](), i = i || new bz, t) {
                var n = t / 2;
                i.set(this.bounds.x - n, this[bo].y - n, this[bo].width + t, this.bounds.height + t)
            } else i.set(this[bo].x, this[bo].y, this[bo][Da], this[bo][Na]);
            return i
        },
        hitTest: function(t, i, n, e, s, r) {
            return an.call(this, t, i, n, e, s, r)
        },
        toSegments: function() {
            return [][concat](this._fk)
        },
        generator: function(t, i, n, e, s) {
            return hn.call(this, t, i, n, e, s)
        },
        getLocation: function(t, i) {
            return on[call](this, t, i || 0)
        }
    }, J(aH.prototype, {
        segments: {
            get: function() {
                return this._fk
            },
            set: function(t) {
                this[Hd](), this._fk = t
            }
        },
        length: {
            get: function() {
                return this._6b && this[vo](), this._j4
            }
        },
        _empty: {
            get: function() {
                return 0 == this._fk.length
            }
        }
    }), kn[prototype] = {
        _$v: function(t, i) {
            var n, e, s, r, h, a = t.length,
                o = 0,
                f = 0;
            for (h = 0; a > h; h += 4) if (t[h + 3] > 0) {
                n = (h + 4) / i / 4 | 0;
                break
            }
            for (h = a - 4; h >= 0; h -= 4) if (t[h + 3] > 0) {
                e = (h + 4) / i / 4 | 0;
                break
            }
            for (o = 0; i > o; o++) {
                for (f = n; e > f; f++) if (t[f * i * 4 + 4 * o + 3] > 0) {
                    s = o;
                    break
                }
                if (s >= 0) break
            }
            for (o = i - 1; o >= 0; o--) {
                for (f = n; e > f; f++) if (t[f * i * 4 + 4 * o + 3] > 0) {
                    r = o;
                    break
                }
                if (r >= 0) break
            }
            this._x = s, this._y = n, this[kp] = r - s + 1, this[gm] = e - n + 1, this._jb = new bz(s, n, this[kp], this[gm]), this[pm] = this[kp] * this[gm], this[mm] = i, this[xm] = t
        },
        _f6: function(t, i) {
            return this[xm][4 * (t + this._x + (this._y + i) * this._originalPixelsWidth) + 3]
        },
        _ij: function(t, i, n) {
            (!n || 1 >= n) && (n = 1), n = 0 | n, t = Math[po](t - this._x) - n, i = Math[po](i - this._y) - n, n += n;
            for (var e = t, s = i; i + n > s;) {
                for (var e = t; t + n > e;) {
                    if (this._f6(e, s)) return !0;
                    ++e
                }++s
            }
            return !1
        }
    }, kY.BLEND_MODE_DARKEN = Em, kY[wm] = km, kY[tf] = Tm, kY[Mm] = Im, kY[Om] = jm, kY[Sm] = Cm, kY.BLEND_MODE_GRAY = Am, oz[Ko] = kY[Mm];
    var oH = function(t, i, n) {
        this._j2 = t, this[io] = i || 1, t instanceof Image && (n = !1), this._i1 = n
    };
    oH[prototype] = {
        scale: 1,
        _j2: null,
        _je: null,
        _i1: !0,
        _lg: function(t, i, n) {
            if (!i || this._i1 === !1) return void t[L_](this._j2, 0, 0);
            this._je || (this._je = {});
            var e = i + n,
                s = this._je[e];
            if (s || (s = On(this._j2, i, n), s || (this._i1 = !1), this._je[e] = s || this._j2), s) if (XG) try {
                t[L_](s, 0, 0)
            } catch (r) {} else t.drawImage(s, 0, 0)
        }
    };
    var fH = function(t, i, n, e, s, r, h, a, o) {
            this._m7 = An(t, i, n, e, s, r, h, a, o)
        },
        uH = {
            server: {
                draw: function(t) {
                    t.save(), t[to](0, 0), t.beginPath(), t[Ru](0, 0), t.lineTo(40, 0), t.lineTo(40, 40), t[Du](0, 40), t[of](), t.clip(), t[to](0, 0), t.translate(0, 0), t[io](1, 1), t[to](0, 0), t[O_] = Lm, t[dm] = Jg, t[I_] = np, t.miterLimit = 4, t[Qa](), t.save(), t.restore(), t[Qa](), t[Pm](), t[Qa](), t[Pm](), t.save(), t[Pm](), t[Qa](), t[Pm](), t.save(), t.restore(), t.save(), t[Pm](), t.save(), t[Pm](), t[Qa](), t.restore(), t[Qa](), t.restore(), t.save(), t[Pm](), t.save(), t[Pm](), t.save(), t.restore(), t.restore(), t[Qa]();
                    var i = t[Rm](6.75, 3.9033, 30.5914, 27.7447);
                    i.addColorStop(.0493, Dm), i[Jp](.0689, Nm), i[Jp](.0939, Bm), i[Jp](.129, $m), i[Jp](.2266, Fm), i[Jp](.2556, Gm), i.addColorStop(.2869, zm), i[Jp](.3194, Ym), i.addColorStop(.3525, Hm), i[Jp](.3695, qm), i[Jp](.5025, Um), i[Jp](.9212, Wm), i[Jp](1, Xm), t[Tp] = i, t[ym](), t[Ru](25.677, 4.113), t.bezierCurveTo(25.361, 2.4410000000000007, 23.364, 2.7940000000000005, 22.14, 2.7990000000000004), t[Vm](19.261, 2.813, 16.381, 2.8260000000000005, 13.502, 2.8400000000000003), t.bezierCurveTo(12.185, 2.846, 10.699000000000002, 2.652, 9.393, 2.8790000000000004), t[Vm](9.19, 2.897, 8.977, 2.989, 8.805, 3.094), t[Vm](8.084999999999999, 3.5109999999999997, 7.436999999999999, 4.1259999999999994, 6.776, 4.63), t[Vm](5.718999999999999, 5.436, 4.641, 6.22, 3.6029999999999998, 7.05), t.bezierCurveTo(4.207, 6.5889999999999995, 21.601999999999997, 36.579, 21.028, 37.307), t.bezierCurveTo(22.019, 36.063, 23.009999999999998, 34.819, 24.000999999999998, 33.575), t[Vm](24.587999999999997, 32.84, 25.589999999999996, 31.995000000000005, 25.593999999999998, 30.983000000000004), t[Vm](25.595999999999997, 30.489000000000004, 25.598, 29.994000000000003, 25.601, 29.500000000000004), t[Vm](25.612, 26.950000000000003, 25.622, 24.400000000000006, 25.633, 21.85), t[Vm](25.657, 16.318, 25.680999999999997, 10.786000000000001, 25.704, 5.253), t[Vm](25.706, 4.885, 25.749, 4.478, 25.677, 4.113), t[Vm](25.67, 4.077, 25.697, 4.217, 25.677, 4.113), t.closePath(), t[wo](), t[Eo](), t.restore(), t[Qa](), t[Qa](), t.fillStyle = Zm, t[ym](), t[Ru](19.763, 6.645), t.bezierCurveTo(20.002000000000002, 6.643999999999999, 20.23, 6.691999999999999, 20.437, 6.778), t[Vm](20.644000000000002, 6.864999999999999, 20.830000000000002, 6.991, 20.985, 7.146999999999999), t[Vm](21.14, 7.302999999999999, 21.266, 7.488999999999999, 21.352999999999998, 7.696999999999999), t[Vm](21.438999999999997, 7.903999999999999, 21.487, 8.133, 21.487, 8.372), t[Du](21.398, 36.253), t[Vm](21.397, 36.489, 21.349, 36.713, 21.262, 36.917), t[Vm](21.174, 37.121, 21.048000000000002, 37.305, 20.893, 37.458), t.bezierCurveTo(20.738, 37.611, 20.553, 37.734, 20.348, 37.818999999999996), t[Vm](20.141, 37.903999999999996, 19.916, 37.95099999999999, 19.679, 37.949), t.lineTo(4.675, 37.877), t.bezierCurveTo(4.4399999999999995, 37.876000000000005, 4.216, 37.827000000000005, 4.012, 37.741), t[Vm](3.8089999999999997, 37.653999999999996, 3.6249999999999996, 37.528999999999996, 3.4719999999999995, 37.376), t.bezierCurveTo(3.3179999999999996, 37.221, 3.1939999999999995, 37.037, 3.1079999999999997, 36.833999999999996), t[Vm](3.022, 36.629999999999995, 2.9739999999999998, 36.406, 2.9739999999999998, 36.172), t[Du](2.924, 8.431), t.bezierCurveTo(2.923, 8.192, 2.971, 7.964, 3.057, 7.758), t[Vm](3.143, 7.552, 3.267, 7.365, 3.4219999999999997, 7.209), t.bezierCurveTo(3.5769999999999995, 7.052999999999999, 3.76, 6.925, 3.965, 6.837), t.bezierCurveTo(4.17, 6.749, 4.396, 6.701, 4.633, 6.7), t.lineTo(19.763, 6.645), t[of](), t[wo](), t[Eo](), t[Pm](), t[Pm](), t[Qa](), t[Tp] = Jm, t[ym](), t.arc(12.208, 26.543, 2.208, 0, 6.283185307179586, !0), t[of](), t[wo](), t.stroke(), t[Pm](), t[Qa](), t[Tp] = Zm, t.beginPath(), t.arc(12.208, 26.543, 1.876, 0, 6.283185307179586, !0), t[of](), t[wo](), t[Eo](), t[Pm](), t.save(), t[Tp] = Jm, t.beginPath(), t[Ru](19.377, 17.247), t[Vm](19.377, 17.724, 18.991999999999997, 18.108999999999998, 18.516, 18.108999999999998), t[Du](5.882, 18.108999999999998), t[Vm](5.404999999999999, 18.108999999999998, 5.02, 17.723, 5.02, 17.247), t[Du](5.02, 11.144), t[Vm](5.02, 10.666, 5.406, 10.281, 5.882, 10.281), t[Du](18.516, 10.281), t[Vm](18.993, 10.281, 19.377, 10.666, 19.377, 11.144), t[Du](19.377, 17.247), t[of](), t[wo](), t[Eo](), t.restore(), t[Qa](), t[Qa](), t[Tp] = Zm, t[ym](), t[Ru](18.536, 13.176), t[Vm](18.536, 13.518, 18.261000000000003, 13.794, 17.919, 13.794), t[Du](6.479, 13.794), t.bezierCurveTo(6.1370000000000005, 13.794, 5.861, 13.518, 5.861, 13.176), t.lineTo(5.861, 11.84), t[Vm](5.861, 11.498, 6.137, 11.221, 6.479, 11.221), t[Du](17.918, 11.221), t[Vm](18.259999999999998, 11.221, 18.535, 11.497, 18.535, 11.84), t[Du](18.535, 13.176), t.closePath(), t.fill(), t[Eo](), t[Pm](), t.save(), t.fillStyle = Zm, t[ym](), t.moveTo(18.536, 16.551), t[Vm](18.536, 16.892999999999997, 18.261000000000003, 17.168999999999997, 17.919, 17.168999999999997), t.lineTo(6.479, 17.168999999999997), t[Vm](6.1370000000000005, 17.168999999999997, 5.861, 16.892999999999997, 5.861, 16.551), t.lineTo(5.861, 15.215999999999998), t[Vm](5.861, 14.872999999999998, 6.137, 14.596999999999998, 6.479, 14.596999999999998), t.lineTo(17.918, 14.596999999999998), t.bezierCurveTo(18.259999999999998, 14.596999999999998, 18.535, 14.872999999999998, 18.535, 15.215999999999998), t[Du](18.535, 16.551), t.closePath(), t.fill(), t[Eo](), t[Pm](), t[Pm](), t[Pm]()
                }
            },
            exchanger2: {
                draw: function(t) {
                    t[Qa](), t[to](0, 0), t.beginPath(), t[Ru](0, 0), t.lineTo(40, 0), t.lineTo(40, 40), t[Du](0, 40), t[of](), t[Ip](), t[to](0, 0), t[to](0, 0), t[io](1, 1), t[to](0, 0), t[O_] = Lm, t[dm] = Jg, t.lineJoin = np, t.miterLimit = 4, t[Qa](), t[Qa](), t[Pm](), t[Qa](), t[Pm](), t[Qa](), t.restore(), t[Qa](), t[Pm](), t[Qa](), t[Pm](), t.save(), t[Pm](), t[Qa](), t[Pm](), t.save(), t[Pm](), t.save(), t[Pm](), t.save(), t.restore(), t[Pm](), t.save();
                    var i = t[Rm](.4102, 24.3613, 39.5898, 24.3613);
                    i[Jp](0, Dm), i[Jp](.0788, Fm), i.addColorStop(.2046, Km), i.addColorStop(.3649, Qm), i[Jp](.5432, tx), i.addColorStop(.6798, ix), i[Jp](.7462, nx), i.addColorStop(.8508, ex), i[Jp](.98, Gm), i[Jp](1, sx), t[Tp] = i, t[ym](), t[Ru](.41, 16.649), t.bezierCurveTo(.633, 19.767, .871, 20.689, 1.094, 23.807000000000002), t[Vm](1.29, 26.548000000000002, 3.324, 28.415000000000003, 5.807, 29.711000000000002), t[Vm](10.582, 32.202000000000005, 16.477, 32.806000000000004, 21.875999999999998, 32.523), t[Vm](26.929, 32.258, 32.806, 31.197000000000003, 36.709999999999994, 27.992000000000004), t[Vm](38.30499999999999, 26.728000000000005, 38.83599999999999, 25.103000000000005, 38.998999999999995, 23.161000000000005), t.bezierCurveTo(39.589, 16.135000000000005, 39.589, 16.135000000000005, 39.589, 16.135000000000005), t.bezierCurveTo(39.589, 16.135000000000005, 3.26, 16.647, .41, 16.649), t[of](), t[wo](), t[Eo](), t[Pm](), t.save(), t[Qa](), t.fillStyle = Zm, t.beginPath(), t.moveTo(16.4, 25.185), t.bezierCurveTo(12.807999999999998, 24.924999999999997, 9.139, 24.238, 5.857999999999999, 22.705), t[Vm](3.175999999999999, 21.450999999999997, -.32200000000000095, 18.971999999999998, .544999999999999, 15.533999999999999), t.bezierCurveTo(1.3499999999999992, 12.335999999999999, 4.987999999999999, 10.495999999999999, 7.807999999999999, 9.428999999999998), t.bezierCurveTo(11.230999999999998, 8.133999999999999, 14.911999999999999, 7.519999999999999, 18.558, 7.345999999999998), t[Vm](22.233, 7.169999999999998, 25.966, 7.437999999999998, 29.548000000000002, 8.300999999999998), t[Vm](32.673, 9.052999999999999, 36.192, 10.296, 38.343, 12.814999999999998), t.bezierCurveTo(40.86600000000001, 15.768999999999998, 39.208000000000006, 19.066999999999997, 36.406000000000006, 21.043999999999997), t.bezierCurveTo(33.566, 23.046999999999997, 30.055000000000007, 24.071999999999996, 26.670000000000005, 24.676999999999996), t.bezierCurveTo(23.289, 25.28, 19.824, 25.436, 16.4, 25.185), t.bezierCurveTo(13.529, 24.977, 19.286, 25.396, 16.4, 25.185), t.closePath(), t[wo](), t[Eo](), t[Pm](), t[Pm](), t[Qa](), t[Qa](), t.save(), t[Qa](), t[Qa](), t.fillStyle = rx, t[ym](), t[Ru](5.21, 21.754), t[Du](8.188, 17.922), t[Du](9.53, 18.75), t[Du](15.956, 16.004), t[Du](18.547, 17.523), t[Du](12.074, 20.334), t[Du](13.464, 21.204), t[Du](5.21, 21.754), t[of](), t[wo](), t[Eo](), t[Pm](), t[Pm](), t.restore(), t[Qa](), t[Qa](), t[Qa](), t[Tp] = rx, t[ym](), t[Ru](17.88, 14.61), t[Du](9.85, 13.522), t[Du](11.703, 12.757), t[Du](7.436, 10.285), t.lineTo(10.783, 8.942), t.lineTo(15.091, 11.357), t[Du](16.88, 10.614), t.lineTo(17.88, 14.61), t[of](), t.fill(), t[Eo](), t[Pm](), t[Pm](), t[Qa](), t[Qa](), t.fillStyle = rx, t[ym](), t[Ru](17.88, 14.61), t.lineTo(9.85, 13.522), t[Du](11.703, 12.757), t.lineTo(7.436, 10.285), t[Du](10.783, 8.942), t.lineTo(15.091, 11.357), t[Du](16.88, 10.614), t[Du](17.88, 14.61), t[of](), t[wo](), t[Eo](), t[Pm](), t[Pm](), t[Pm](), t[Qa](), t[Qa](), t.save(), t[Tp] = rx, t[ym](), t[Ru](23.556, 15.339), t[Du](20.93, 13.879), t.lineTo(26.953, 11.304), t.lineTo(25.559, 10.567), t[Du](33.251, 9.909), t[Du](31.087, 13.467), t[Du](29.619, 12.703), t[Du](23.556, 15.339), t[of](), t[wo](), t[Eo](), t.restore(), t[Pm](), t[Pm](), t.save(), t[Qa](), t[Qa](), t[Tp] = rx, t.beginPath(), t.moveTo(30.028, 23.383), t[Du](24.821, 20.366), t[Du](22.915, 21.227), t[Du](21.669, 16.762), t.lineTo(30.189, 17.942), t[Du](28.33, 18.782), t.lineTo(33.579, 21.725), t[Du](30.028, 23.383), t.closePath(), t[wo](), t[Eo](), t.restore(), t[Pm](), t[Qa](), t[Qa](), t[Tp] = rx, t[ym](), t[Ru](30.028, 23.383), t.lineTo(24.821, 20.366), t[Du](22.915, 21.227), t[Du](21.669, 16.762), t[Du](30.189, 17.942), t.lineTo(28.33, 18.782), t[Du](33.579, 21.725), t.lineTo(30.028, 23.383), t[of](), t[wo](), t.stroke(), t[Pm](), t[Pm](), t.restore(), t[Pm](), t[Pm](), t.restore()
                }
            },
            exchanger: {
                draw: function(t) {
                    t[Qa](), t[to](0, 0), t[ym](), t.moveTo(0, 0), t[Du](40, 0), t[Du](40, 40), t.lineTo(0, 40), t[of](), t[Ip](), t[to](0, 0), t.translate(0, 0), t[io](1, 1), t[to](0, 0), t.strokeStyle = Lm, t[dm] = Jg, t[I_] = np, t.miterLimit = 4, t.save(), t[Qa](), t.restore(), t[Qa](), t[Pm](), t[Qa](), t[Pm](), t[Qa](), t.restore(), t[Qa](), t[Pm](), t[Qa](), t[Pm](), t[Qa](), t[Pm](), t.restore(), t[Qa]();
                    var i = t.createLinearGradient(.2095, 20.7588, 39.4941, 20.7588);
                    i.addColorStop(0, hx), i.addColorStop(.0788, ax), i[Jp](.352, ox), i[Jp](.6967, fx), i.addColorStop(.8916, ux), i[Jp](.9557, cx), i[Jp](1, _x), t.fillStyle = i, t[ym](), t[Ru](39.449, 12.417), t.lineTo(39.384, 9.424), t[Vm](39.384, 9.424, .7980000000000018, 22.264, .3710000000000022, 23.024), t[Vm](-.026999999999997804, 23.733, .4240000000000022, 24.903000000000002, .5190000000000022, 25.647000000000002), t[Vm](.7240000000000022, 27.244000000000003, .9240000000000023, 28.841, 1.1350000000000022, 30.437), t[Vm](1.3220000000000023, 31.843, 2.7530000000000023, 32.094, 3.9620000000000024, 32.094), t[Vm](8.799000000000003, 32.092, 13.636000000000003, 32.091, 18.473000000000003, 32.089), t[Vm](23.515, 32.086999999999996, 28.556000000000004, 32.086, 33.598, 32.083999999999996), t[Vm](34.859, 32.083999999999996, 36.286, 31.979999999999997, 37.266, 31.081999999999997), t[Vm](37.537, 30.820999999999998, 37.655, 30.535999999999998, 37.699999999999996, 30.229999999999997), t[Du](37.711, 30.316999999999997), t[Du](39.281, 16.498999999999995), t[Vm](39.281, 16.498999999999995, 39.467999999999996, 15.126999999999995, 39.489, 14.666999999999994), t.bezierCurveTo(39.515, 14.105, 39.449, 12.417, 39.449, 12.417), t.closePath(), t[wo](), t.stroke(), t[Pm](), t[Qa](), t.save(), t[Qa](), t.save(), t[Pm](), t[Qa](), t[Pm](), t[Qa](), t[Pm](), t.save(), t[Pm](), t[Qa](), t.restore(), t[Qa](), t[Pm](), t[Qa](), t.restore(), t[Qa](), t.restore(), t[Qa](), t[Pm](), t[Pm](), t[Qa]();
                    var i = t.createLinearGradient(19.8052, 7.7949, 19.8052, 24.7632);
                    i[Jp](0, dx), i[Jp](.1455, lx), i.addColorStop(.2975, vx), i[Jp](.4527, bx), i[Jp](.6099, yx), i.addColorStop(.7687, gx), i.addColorStop(.9268, px), i[Jp](.9754, mx), i[Jp](1, xx), t[Tp] = i, t[ym](), t.moveTo(33.591, 24.763), t.bezierCurveTo(23.868000000000002, 24.754, 14.145, 24.746000000000002, 4.423000000000002, 24.738000000000003), t[Vm](3.140000000000002, 24.737000000000002, -.48799999999999777, 24.838000000000005, .3520000000000021, 22.837000000000003), t[Vm](1.292000000000002, 20.594000000000005, 2.2330000000000023, 18.351000000000003, 3.1730000000000023, 16.108000000000004), t[Vm](4.113000000000002, 13.865000000000006, 5.054000000000002, 11.623000000000005, 5.994000000000002, 9.380000000000004), t.bezierCurveTo(6.728000000000002, 7.629000000000005, 9.521000000000003, 7.885000000000004, 11.156000000000002, 7.880000000000004), t.bezierCurveTo(16.974000000000004, 7.861000000000004, 22.793000000000003, 7.843000000000004, 28.612000000000002, 7.825000000000005), t.bezierCurveTo(30.976000000000003, 7.818000000000005, 33.341, 7.810000000000005, 35.707, 7.803000000000004), t[Vm](36.157000000000004, 7.802000000000004, 36.609, 7.787000000000004, 37.06, 7.804000000000005), t[Vm](37.793, 7.833000000000005, 39.389, 7.875000000000004, 39.385000000000005, 9.424000000000005), t[Vm](39.38400000000001, 9.647000000000006, 39.31, 10.138000000000005, 39.27700000000001, 10.359000000000005), t.bezierCurveTo(38.81900000000001, 13.361000000000004, 38.452000000000005, 15.764000000000006, 37.99400000000001, 18.766000000000005), t.bezierCurveTo(37.806000000000004, 19.998000000000005, 37.61800000000001, 21.230000000000004, 37.43000000000001, 22.462000000000007), t[Vm](37.151, 24.271, 35.264, 24.77, 33.591, 24.763), t.closePath(), t.fill(), t.stroke(), t[Pm](), t[Pm](), t[Pm](), t[Qa](), t[Qa](), t.save(), t[Tp] = rx, t[ym](), t[Ru](10.427, 19.292), t[Du](5.735, 16.452), t[Du](12.58, 13.8), t[Du](12.045, 15.07), t[Du](20.482, 15.072), t[Du](19.667, 17.887), t[Du](11.029, 17.851), t[Du](10.427, 19.292), t[of](), t.fill(), t[Eo](), t[Pm](), t[Pm](), t[Qa](), t[Qa](), t[Tp] = rx, t.beginPath(), t[Ru](13.041, 13.042), t.lineTo(8.641, 10.73), t[Du](14.82, 8.474), t.lineTo(14.373, 9.537), t[Du](22.102, 9.479), t[Du](21.425, 11.816), t[Du](13.54, 11.85), t.lineTo(13.041, 13.042), t[of](), t[wo](), t[Eo](), t.restore(), t.restore(), t.save(), t.save(), t.fillStyle = rx, t.beginPath(), t[Ru](29.787, 16.049), t.lineTo(29.979, 14.704), t[Du](21.51, 14.706), t[Du](22.214, 12.147), t[Du](30.486, 12.116), t.lineTo(30.653, 10.926), t[Du](36.141, 13.4), t[Du](29.787, 16.049), t[of](), t.fill(), t[Eo](), t[Pm](), t[Pm](), t[Qa](), t[Qa](), t[Tp] = rx, t.beginPath(), t[Ru](28.775, 23.14), t[Du](29.011, 21.49), t.lineTo(19.668, 21.405), t[Du](20.523, 18.295), t.lineTo(29.613, 18.338), t.lineTo(29.815, 16.898), t[Du](35.832, 19.964), t[Du](28.775, 23.14), t[of](), t[wo](), t[Eo](), t[Pm](), t[Pm](), t[Pm](), t[Pm]()
                }
            },
            cloud: {
                draw: function(t) {
                    t[Qa](), t[ym](), t[Ru](0, 0), t[Du](90.75, 0), t.lineTo(90.75, 62.125), t.lineTo(0, 62.125), t[of](), t[Ip](), t[O_] = Lm, t.lineCap = Jg, t.lineJoin = np, t.miterLimit = 4, t[Qa]();
                    var i = t[Rm](44.0054, 6.4116, 44.0054, 51.3674);
                    i[Jp](0, "rgba(159, 160, 160, 0.7)"), i.addColorStop(.9726, Ex), t[Tp] = i, t[ym](), t.moveTo(57.07, 20.354), t.bezierCurveTo(57.037, 20.354, 57.006, 20.358, 56.974000000000004, 20.358), t[Vm](54.461000000000006, 14.308, 48.499, 10.049000000000001, 41.538000000000004, 10.049000000000001), t.bezierCurveTo(33.801, 10.049000000000001, 27.309000000000005, 15.316000000000003, 25.408000000000005, 22.456000000000003), t.bezierCurveTo(18.988000000000007, 23.289, 14.025000000000006, 28.765000000000004, 14.025000000000006, 35.413000000000004), t[Vm](14.025000000000006, 42.635000000000005, 19.880000000000006, 48.49, 27.102000000000004, 48.49), t.bezierCurveTo(29.321000000000005, 48.49, 31.407000000000004, 47.933, 33.237, 46.961), t.bezierCurveTo(34.980000000000004, 49.327, 37.78, 50.867999999999995, 40.945, 50.867999999999995), t[Vm](43.197, 50.867999999999995, 45.261, 50.086, 46.896, 48.785999999999994), t[Vm](49.729, 50.78699999999999, 53.244, 51.98799999999999, 57.07, 51.98799999999999), t.bezierCurveTo(66.412, 51.98799999999999, 73.986, 44.90699999999999, 73.986, 36.17099999999999), t[Vm](73.986, 27.436, 66.413, 20.354, 57.07, 20.354), t.closePath(), t[wo](), t.stroke(), t[Pm](), t[Pm]()
                }
            },
            node: {
                width: 60,
                height: 100,
                draw: function(t) {
                    t[Qa](), t.translate(0, 0), t[ym](), t[Ru](0, 0), t.lineTo(40, 0), t.lineTo(40, 40), t[Du](0, 40), t[of](), t[Ip](), t[to](0, 0), t[to](0, 0), t.scale(1, 1), t[to](0, 0), t[O_] = Lm, t.lineCap = Jg, t[I_] = np, t.miterLimit = 4, t[Qa](), t.fillStyle = wx, t.beginPath(), t[Ru](13.948, 31.075), t.lineTo(25.914, 31.075), t.quadraticCurveTo(25.914, 31.075, 25.914, 31.075), t[Du](25.914, 34.862), t[kx](25.914, 34.862, 25.914, 34.862), t[Du](13.948, 34.862), t[kx](13.948, 34.862, 13.948, 34.862), t.lineTo(13.948, 31.075), t[kx](13.948, 31.075, 13.948, 31.075), t[of](), t.fill(), t.stroke(), t.restore(), t[Qa](), t.fillStyle = Tx, t[ym](), t[Ru](29.679, 35.972), t[Vm](29.679, 36.675000000000004, 29.110999999999997, 37.244, 28.407999999999998, 37.244), t[Du](11.456, 37.244), t[Vm](10.751999999999999, 37.244, 10.183, 36.675, 10.183, 35.972), t[Du](10.183, 36.136), t[Vm](10.183, 35.431000000000004, 10.751999999999999, 34.863, 11.456, 34.863), t[Du](28.407, 34.863), t.bezierCurveTo(29.11, 34.863, 29.678, 35.431, 29.678, 36.136), t[Du](29.678, 35.972), t[of](), t.fill(), t[Eo](), t[Pm](), t.save(), t.fillStyle = Tx, t.beginPath(), t.moveTo(.196, 29.346), t.bezierCurveTo(.196, 30.301, .9690000000000001, 31.075, 1.925, 31.075), t[Du](37.936, 31.075), t[Vm](38.891, 31.075, 39.665, 30.301, 39.665, 29.346), t[Du](39.665, 27.174), t[Du](.196, 27.174), t[Du](.196, 29.346), t.closePath(), t[wo](), t[Eo](), t[Pm](), t.save(), t[Tp] = Mx, t[ym](), t.moveTo(37.937, 3.884), t[Du](1.926, 3.884), t[Vm](.97, 3.884, .19699999999999984, 4.657, .19699999999999984, 5.614), t[Du](.19699999999999984, 27.12), t[Du](39.666000000000004, 27.12), t[Du](39.666000000000004, 5.615), t.bezierCurveTo(39.665, 4.657, 38.892, 3.884, 37.937, 3.884), t.closePath(), t[wo](), t[Eo](), t.restore(), t[Qa](), t[Qa](), t[Pm](), t[Qa](), t[Pm](), t[Pm](), t.save();
                    var i = t[Rm](6.9609, 2.9341, 32.9008, 28.874);
                    i.addColorStop(0, Ix), i[Jp](1, Ox), t[Tp] = i, t.beginPath(), t[Ru](35.788, 6.39), t[Du](4.074, 6.39), t[Vm](3.315, 6.39, 2.702, 7.003, 2.702, 7.763), t[Du](2.702, 24.616), t.lineTo(37.159, 24.616), t[Du](37.159, 7.763), t[Vm](37.159, 7.003, 36.546, 6.39, 35.788, 6.39), t[of](), t[wo](), t.stroke(), t[Pm](), t[Pm]()
                }
            },
            group: {
                draw: function(t) {
                    t[Qa](), t[to](0, 0), t.beginPath(), t[Ru](0, 0), t[Du](47.75, 0), t[Du](47.75, 40), t.lineTo(0, 40), t[of](), t[Ip](), t[to](0, 0), t[to](0, 0), t[io](1, 1), t[to](0, 0), t[O_] = Lm, t.lineCap = Jg, t.lineJoin = np, t[jx] = 4, t[Qa](), t[Qa](), t[Tp] = wx, t[ym](), t.moveTo(10.447, 26.005), t[Du](18.847, 26.005), t.quadraticCurveTo(18.847, 26.005, 18.847, 26.005), t[Du](18.847, 28.663), t[kx](18.847, 28.663, 18.847, 28.663), t[Du](10.447, 28.663), t[kx](10.447, 28.663, 10.447, 28.663), t.lineTo(10.447, 26.005), t[kx](10.447, 26.005, 10.447, 26.005), t[of](), t[wo](), t[Eo](), t[Pm](), t.save(), t.fillStyle = Tx, t.beginPath(), t[Ru](21.491, 29.443), t[Vm](21.491, 29.935000000000002, 21.094, 30.338, 20.597, 30.338), t[Du](8.698, 30.338), t.bezierCurveTo(8.201, 30.338, 7.8020000000000005, 29.936, 7.8020000000000005, 29.443), t[Du](7.8020000000000005, 29.557000000000002), t[Vm](7.8020000000000005, 29.063000000000002, 8.201, 28.662000000000003, 8.698, 28.662000000000003), t[Du](20.597, 28.662000000000003), t[Vm](21.093, 28.662000000000003, 21.491, 29.062, 21.491, 29.557000000000002), t[Du](21.491, 29.443), t[of](), t[wo](), t.stroke(), t[Pm](), t.save(), t[Tp] = Tx, t[ym](), t[Ru](.789, 24.79), t.bezierCurveTo(.789, 25.461, 1.334, 26.005, 2.0060000000000002, 26.005), t[Du](27.289, 26.005), t.bezierCurveTo(27.961000000000002, 26.005, 28.504, 25.461, 28.504, 24.79), t[Du](28.504, 23.267), t[Du](.789, 23.267), t[Du](.789, 24.79), t[of](), t[wo](), t[Eo](), t[Pm](), t.save(), t[Tp] = Mx, t[ym](), t[Ru](27.289, 6.912), t[Du](2.006, 6.912), t[Vm](1.3339999999999996, 6.912, .7889999999999997, 7.455, .7889999999999997, 8.126), t[Du](.7889999999999997, 23.227), t.lineTo(28.503999999999998, 23.227), t[Du](28.503999999999998, 8.126), t.bezierCurveTo(28.504, 7.455, 27.961, 6.912, 27.289, 6.912), t[of](), t.fill(), t[Eo](), t.restore(), t[Qa](), t[Qa](), t.restore(), t[Qa](), t[Pm](), t.restore(), t[Qa]();
                    var i = t[Rm](5.54, 6.2451, 23.7529, 24.458);
                    i.addColorStop(0, Ix), i.addColorStop(1, Ox), t[Tp] = i, t.beginPath(), t[Ru](25.78, 8.671), t[Du](3.514, 8.671), t.bezierCurveTo(2.9819999999999998, 8.671, 2.549, 9.101999999999999, 2.549, 9.635), t.lineTo(2.549, 21.466), t.lineTo(26.743, 21.466), t[Du](26.743, 9.636), t[Vm](26.743, 9.102, 26.312, 8.671, 25.78, 8.671), t[of](), t[wo](), t[Eo](), t[Pm](), t[Pm](), t[Qa](), t[Qa](), t[Tp] = wx, t[ym](), t[Ru](27.053, 33.602), t.lineTo(36.22, 33.602), t[kx](36.22, 33.602, 36.22, 33.602), t[Du](36.22, 36.501), t[kx](36.22, 36.501, 36.22, 36.501), t[Du](27.053, 36.501), t.quadraticCurveTo(27.053, 36.501, 27.053, 36.501), t[Du](27.053, 33.602), t[kx](27.053, 33.602, 27.053, 33.602), t[of](), t[wo](), t[Eo](), t[Pm](), t[Qa](), t[Tp] = Tx, t[ym](), t.moveTo(39.104, 37.352), t.bezierCurveTo(39.104, 37.891, 38.67, 38.327, 38.13, 38.327), t[Du](25.143, 38.327), t.bezierCurveTo(24.602, 38.327, 24.166, 37.891, 24.166, 37.352), t[Du](24.166, 37.477999999999994), t[Vm](24.166, 36.937, 24.602, 36.501, 25.143, 36.501), t.lineTo(38.131, 36.501), t[Vm](38.671, 36.501, 39.105, 36.937, 39.105, 37.477999999999994), t[Du](39.105, 37.352), t.closePath(), t[wo](), t.stroke(), t.restore(), t[Qa](), t[Tp] = Tx, t[ym](), t[Ru](16.514, 32.275), t[Vm](16.514, 33.004999999999995, 17.107, 33.601, 17.839, 33.601), t[Du](45.433, 33.601), t.bezierCurveTo(46.166, 33.601, 46.758, 33.005, 46.758, 32.275), t.lineTo(46.758, 30.607999999999997), t.lineTo(16.514, 30.607999999999997), t[Du](16.514, 32.275), t[of](), t[wo](), t[Eo](), t.restore(), t.save(), t[Tp] = Mx, t.beginPath(), t.moveTo(45.433, 12.763), t[Du](17.839, 12.763), t[Vm](17.107, 12.763, 16.514, 13.356, 16.514, 14.089), t[Du](16.514, 30.57), t[Du](46.757999999999996, 30.57), t.lineTo(46.757999999999996, 14.088), t.bezierCurveTo(46.758, 13.356, 46.166, 12.763, 45.433, 12.763), t[of](), t.fill(), t[Eo](), t[Pm](), t.save(), t[Qa](), t[Pm](), t[Qa](), t.restore(), t[Pm](), t[Qa](), i = t.createLinearGradient(21.6973, 12.0352, 41.5743, 31.9122), i[Jp](0, Ix), i[Jp](1, Ox), t[Tp] = i, t[ym](), t[Ru](43.785, 14.683), t[Du](19.486, 14.683), t[Vm](18.903000000000002, 14.683, 18.433, 15.153, 18.433, 15.735), t.lineTo(18.433, 28.649), t[Du](44.837, 28.649), t.lineTo(44.837, 15.734), t[Vm](44.838, 15.153, 44.367, 14.683, 43.785, 14.683), t.closePath(), t.fill(), t[Eo](), t[Pm](), t[Pm](), t[Qa](), t.globalAlpha = .5, t[ym](), t[Ru](23.709, 36.33), t.lineTo(4.232, 36.33), t[Du](4.232, 27.199), t[Du](5.304, 27.199), t[Du](5.304, 35.259), t[Du](23.709, 35.259), t[Du](23.709, 36.33), t[of](), t[wo](), t[Eo](), t[Pm](), t[Pm]()
                }
            },
            subnetwork: {
                draw: function(t) {
                    t.save(), t.translate(0, 0), t[ym](), t[Ru](0, 0), t[Du](60.75, 0), t[Du](60.75, 42.125), t[Du](0, 42.125), t[of](), t[Ip](), t[to](0, .26859504132231393), t[io](.6694214876033058, .6694214876033058), t[to](0, 0), t[O_] = Lm, t.lineCap = Jg, t[I_] = np, t.miterLimit = 4, t[Qa](), t.save(), t[Pm](), t[Qa](), t[Pm](), t[Pm](), t.save();
                    var i = t.createLinearGradient(43.6724, -2.7627, 43.6724, 59.3806);
                    i[Jp](0, "rgba(159, 160, 160, 0.7)"), i[Jp](.9726, Ex), t.fillStyle = i, t[ym](), t.moveTo(61.732, 16.509), t[Vm](61.686, 16.509, 61.644, 16.515, 61.599, 16.515), t.bezierCurveTo(58.126, 8.152000000000001, 49.884, 2.2650000000000006, 40.262, 2.2650000000000006), t[Vm](29.567, 2.2650000000000006, 20.594, 9.545000000000002, 17.966, 19.415), t[Vm](9.09, 20.566, 2.229, 28.136, 2.229, 37.326), t[Vm](2.229, 47.309, 10.322, 55.403000000000006, 20.306, 55.403000000000006), t[Vm](23.374000000000002, 55.403000000000006, 26.257, 54.633, 28.787, 53.28900000000001), t.bezierCurveTo(31.197, 56.56000000000001, 35.067, 58.69000000000001, 39.442, 58.69000000000001), t[Vm](42.555, 58.69000000000001, 45.408, 57.60900000000001, 47.669, 55.81200000000001), t.bezierCurveTo(51.586, 58.57800000000001, 56.443999999999996, 60.238000000000014, 61.732, 60.238000000000014), t.bezierCurveTo(74.64699999999999, 60.238000000000014, 85.116, 50.45000000000002, 85.116, 38.37400000000001), t.bezierCurveTo(85.116, 26.298, 74.646, 16.509, 61.732, 16.509), t.closePath(), t[wo](), t[Eo](), t[Pm](), t[Qa](), t.save(), t.fillStyle = wx, t.beginPath(), t[Ru](34.966, 44.287), t.lineTo(45.112, 44.287), t[kx](45.112, 44.287, 45.112, 44.287), t[Du](45.112, 47.497), t[kx](45.112, 47.497, 45.112, 47.497), t.lineTo(34.966, 47.497), t[kx](34.966, 47.497, 34.966, 47.497), t[Du](34.966, 44.287), t[kx](34.966, 44.287, 34.966, 44.287), t[of](), t.fill(), t.stroke(), t.restore(), t[Qa](), t.fillStyle = Sx, t[ym](), t[Ru](48.306, 48.439), t.bezierCurveTo(48.306, 49.034, 47.824999999999996, 49.52, 47.226, 49.52), t.lineTo(32.854, 49.52), t[Vm](32.253, 49.52, 31.771, 49.034000000000006, 31.771, 48.439), t[Du](31.771, 48.578), t[Vm](31.771, 47.981, 32.253, 47.497, 32.854, 47.497), t[Du](47.226, 47.497), t[Vm](47.824999999999996, 47.497, 48.306, 47.98, 48.306, 48.578), t[Du](48.306, 48.439), t[of](), t[wo](), t.stroke(), t[Pm](), t.save(), t[Tp] = Cx, t[ym](), t[Ru](23.302, 42.82), t[Vm](23.302, 43.63, 23.96, 44.287, 24.772, 44.287), t.lineTo(55.308, 44.287), t[Vm](56.12, 44.287, 56.775, 43.629999999999995, 56.775, 42.82), t[Du](56.775, 40.98), t[Du](23.302, 40.98), t[Du](23.302, 42.82), t[of](), t[wo](), t[Eo](), t[Pm](), t[Qa](), t[Tp] = Mx, t[ym](), t[Ru](55.307, 21.229), t[Du](24.771, 21.229), t[Vm](23.959, 21.229, 23.301000000000002, 21.884, 23.301000000000002, 22.695), t.lineTo(23.301000000000002, 40.933), t[Du](56.774, 40.933), t.lineTo(56.774, 22.695), t[Vm](56.774, 21.884, 56.119, 21.229, 55.307, 21.229), t[of](), t[wo](), t[Eo](), t.restore(), t.save(), t[Qa](), t.restore(), t.save(), t[Pm](), t[Pm](), t[Qa](), i = t[Rm](29.04, 20.4219, 51.0363, 42.4181), i[Jp](0, Ix), i.addColorStop(1, Ox), t[Tp] = i, t.beginPath(), t[Ru](53.485, 23.353), t[Du](26.592, 23.353), t[Vm](25.948999999999998, 23.353, 25.427, 23.873, 25.427, 24.517000000000003), t[Du](25.427, 38.807), t[Du](54.647, 38.807), t.lineTo(54.647, 24.517000000000003), t.bezierCurveTo(54.648, 23.873, 54.127, 23.353, 53.485, 23.353), t[of](), t.fill(), t[Eo](), t[Pm](), t[Pm](), t.restore()
                }
            }
        };
    for (var cH in uH) yn(Ax + cH, uH[cH]);
    var _H = function() {
            this[Lx] = !1;
            var t = this._fl;
            t[Hd]();
            var i = this[Ef] || 0,
                n = this._7q.x + i / 2,
                e = this._7q.y + i / 2,
                s = this._7q.width - i,
                r = this._7q.height - i,
                h = Fn.call(this, {
                    x: n,
                    y: e
                });
            Hn(t, h.x, h.y, !0), h = Fn[call](this, {
                x: n + s,
                y: e
            }), Hn(t, h.x, h.y), h = Fn[call](this, {
                x: n + s,
                y: e + r
            }), Hn(t, h.x, h.y), h = Fn.call(this, {
                x: n,
                y: e + r
            }), Hn(t, h.x, h.y), this.__mgPointer && (h = Fn[call](this, {
                x: this._pointerX,
                y: this[Cf]
            }), Hn(t, h.x, h.y)), i && t[xf](i / 2)
        },
        dH = 20,
        lH = {
            _ho: !1,
            _kc: null,
            _n2k: 0,
            _ky: -1,
            _l0: null,
            _fi: function(t) {
                this._kc || (this._kc = [], this._jd = GY), this._kc[push](t), this._ev(), this._ks()
            },
            _ks: function() {
                if (!this._l0) {
                    var t = this;
                    this._l0 = setTimeout(function i() {
                        return t._ev() !== !1 ? void(t._l0 = setTimeout(i, t._hm())) : void delete t._l0
                    }, this._hm())
                }
            },
            _hm: function() {
                return Math.max(dH, this._kc[this._ky].delay)
            },
            _ev: function() {
                return this._fu(this._ky + 1)
            },
            _fu: function(t) {
                if (this._ho) t %= this[Px];
                else if (t >= this._kc.length) return !1;
                if (this._ky == t) return !1;
                this._ky = t;
                var i = this._kc[this._ky],
                    n = i._n2ache;
                return n || (i[Rx] = n = Ai(this[Da], this[Na]), n.g[rf](i[ko], 0, 0), n[xp] = i[xp]), this._ku = n, this[yf] = !0, this._dk()
            },
            _n2t: function() {
                return this._kc ? (this._ho = !0, this._n2k = this._kc[length], 1 == this[Px] ? this._dk() : void this._ks()) : void this._hx()
            },
            _m3: function() {
                this._l0 && (clearTimeout(this._l0), delete this._l0)
            },
            _dk: function() {
                var t = this._dispatcher.listeners;
                if (!t || !t.length) return !1;
                for (var i = new Iz(this, zp, Yp, this._ku), n = 0, e = t[length]; e > n; n++) {
                    var s = t[n];
                    s[Yl]._jp && s.scope._jp[Dx] ? (t[splice](n, 1), n--, e--) : s[hh][call](s[Yl], i)
                }
                return t[length] > 0
            },
            _myc: function(t, i) {
                this[gp][ld](t, i), this._ho && !this._l0 && this._ks()
            },
            _6v: function(t, i) {
                this._dispatcher[Nx](t, i), this[gp][Bx]() || this._m3()
            },
            _i5: function() {
                this._m3(), this[gp][Hd]()
            },
            _gs: function() {
                var t = this._ku._n0ufferedImage;
                return t || (this._ku._n0ufferedImage = t = new oH(this._ku, 1)), t
            }
        },
        vH = function(t) {
            return t.reduce(function(t, i) {
                return 2 * t + i
            }, 0)
        },
        bH = function(t) {
            for (var i = [], n = 7; n >= 0; n--) i[push]( !! (t & 1 << n));
            return i
        },
        yH = function(t) {
            this[ko] = t, this.len = this[ko][length], this.pos = 0, this.readByte = function() {
                if (this.pos >= this[ko][length]) throw new Error("Attempted to read past end of stream.");
                return 255 & t[su](this.pos++)
            }, this.readBytes = function(t) {
                for (var i = [], n = 0; t > n; n++) i[push](this.readByte());
                return i
            }, this[$x] = function(t) {
                for (var i = "", n = 0; t > n; n++) i += String.fromCharCode(this[Fx]());
                return i
            }, this[Gx] = function() {
                var t = this[zx](2);
                return (t[1] << 8) + t[0]
            }
        },
        gH = function(t, i) {
            for (var n, e, s = 0, r = function(t) {
                for (var n = 0, e = 0; t > e; e++) i[su](s >> 3) & 1 << (7 & s) && (n |= 1 << e), s++;
                return n
            }, h = [], a = 1 << t, o = a + 1, f = t + 1, u = [], c = function() {
                u = [], f = t + 1;
                for (var i = 0; a > i; i++) u[i] = [i];
                u[a] = [], u[o] = null
            };;) if (e = n, n = r(f), n !== a) {
                if (n === o) break;
                if (n < u.length) e !== a && u[push](u[e].concat(u[n][0]));
                else {
                    if (n !== u[length]) throw new Error(Yx);
                    u.push(u[e][concat](u[e][0]))
                }
                h[push][apply](h, u[n]), u[length] === 1 << f && 12 > f && f++
            } else c();
            return h
        },
        pH = function(t, i) {
            i || (i = {});
            var n = function(i) {
                    for (var n = [], e = 0; i > e; e++) n[push](t[zx](3));
                    return n
                },
                e = function() {
                    var i, n;
                    n = "";
                    do i = t[Fx](), n += t[$x](i);
                    while (0 !== i);
                    return n
                },
                s = function() {
                    var e = {};
                    if (e.sig = t.read(3), e.ver = t[$x](3), Hx !== e.sig) throw new Error(qx);
                    e[Da] = t[Gx](), e[Na] = t[Gx]();
                    var s = bH(t[Fx]());
                    e.gctFlag = s.shift(), e[Ux] = vH(s[splice](0, 3)), e[Wx] = s[Xx](), e.gctSize = vH(s[splice](0, 3)), e[Vx] = t[Fx](), e[Zx] = t[Fx](), e.gctFlag && (e.gct = n(1 << e[Jx] + 1)), i.hdr && i.hdr(e)
                },
                r = function(n) {
                    var s = function(n) {
                            var e = (t.readByte(), bH(t.readByte()));
                            n[Kx] = e.splice(0, 3), n[Qx] = vH(e[splice](0, 3)), n[tE] = e.shift(), n[iE] = e[Xx](), n[nE] = t[Gx](), n[Xf] = t.readByte(), n.terminator = t[Fx](), i.gce && i.gce(n)
                        },
                        r = function(t) {
                            t[eE] = e(), i.com && i.com(t)
                        },
                        h = function(n) {
                            t[Fx](), n.ptHeader = t[zx](12), n[sE] = e(), i.pte && i.pte(n)
                        },
                        a = function(n) {
                            var s = function(n) {
                                    t[Fx](), n.unknown = t[Fx](), n[rE] = t[Gx](), n[hE] = t[Fx](), i.app && i.app[aE] && i.app[aE](n)
                                },
                                r = function(t) {
                                    t[oE] = e(), i.app && i.app[t.identifier] && i.app[t[fE]](t)
                                };
                            switch (t[Fx](), n[fE] = t[$x](8), n[uE] = t.read(3), n[fE]) {
                                case "NETSCAPE":
                                    s(n);
                                    break;
                                default:
                                    r(n)
                            }
                        },
                        o = function(t) {
                            t[ko] = e(), i[cE] && i.unknown(t)
                        };
                    switch (n.label = t.readByte(), n[_E]) {
                        case 249:
                            n[dE] = lE, s(n);
                            break;
                        case 254:
                            n[dE] = vE, r(n);
                            break;
                        case 1:
                            n.extType = bE, h(n);
                            break;
                        case 255:
                            n[dE] = yE, a(n);
                            break;
                        default:
                            n.extType = cE, o(n)
                    }
                },
                h = function(s) {
                    var r = function(t, i) {
                        for (var n = new Array(t[length]), e = t.length / i, s = function(e, s) {
                            var r = t[slice](s * i, (s + 1) * i);
                            n[splice][apply](n, [e * i, i][concat](r))
                        }, r = [0, 4, 2, 1], h = [8, 8, 4, 2], a = 0, o = 0; 4 > o; o++) for (var f = r[o]; e > f; f += h[o]) s(f, a), a++;
                        return n
                    };
                    s.leftPos = t[Gx](), s[Zf] = t[Gx](), s.width = t[Gx](), s.height = t[Gx]();
                    var h = bH(t[Fx]());
                    s[gE] = h[Xx](), s[pE] = h[Xx](), s[Wx] = h[Xx](), s[Kx] = h.splice(0, 2), s[mE] = vH(h[splice](0, 3)), s.lctFlag && (s.lct = n(1 << s[mE] + 1)), s[xE] = t[Fx]();
                    var a = e();
                    s[EE] = gH(s[xE], a), s[pE] && (s[EE] = r(s[EE], s.width)), i.img && i.img(s)
                },
                a = function() {
                    var n = {};
                    switch (n.sentinel = t[Fx](), String.fromCharCode(n.sentinel)) {
                        case "!":
                            n[Oo] = wE, r(n);
                            break;
                        case ",":
                            n[Oo] = a_, h(n);
                            break;
                        case ";":
                            n[Oo] = kE, i.eof && i.eof(n);
                            break;
                        default:
                            throw new Error(TE + n[ME].toString(16))
                    }
                    kE !== n[Oo] && setTimeout(a, 0)
                },
                o = function() {
                    s(), setTimeout(a, 0)
                };
            o()
        },
        mH = "";
    document[Dv] && document.addEventListener(IE, function(t) {
        if (t.ctrlKey && t[OE] && t[jE] && 73 == t[SE]) {
            var i = wY[ah] + CE + wY[AE] + LE + wY[PE] + ho + wY.about + ho + wY.copyright + mH;
            wY.alert(i)
        }
    }, !1);
    var xH = RE;
    mH = DE + decodeURIComponent(NE);
    var EH, wH, kH, TH = window,
        MH = BE,
        IH = $E,
        OH = FE,
        jH = GE,
        SH = zE,
        CH = YE,
        AH = HE,
        LH = qE,
        PH = UE,
        RH = WE,
        DH = XE,
        NH = VE,
        BH = ZE,
        $H = JE,
        FH = KE,
        GH = QE,
        zH = tw,
        YH = iw,
        HH = nw,
        qH = ew,
        UH = sw,
        WH = TH[jH + rw];
    WH && (wH = TH[$H + hw][SH + aw], WH[call](TH, Jn, GH), WH[call](TH, Kn, HH), WH[call](TH, function() {
        VH && VH == xH && (rq = !1)
    }, zH));
    var XH, VH, ZH, JH = 111,
        KH = function(t, i) {
            i || (i = ow + IH + fw);
            try {
                kH[call](t, i, 6 * JH, 1 * JH)
            } catch (n) {}
        },
        QH = !0,
        tq = !0,
        iq = !0,
        nq = !0,
        eq = !0,
        sq = !0,
        rq = !0,
        hq = hz ? 200 : 1024,
        aq = function(t, i) {
            return Zn ? Zn(t, i) || "" : void 0
        };
    if (document.createElement) {
        var oq = document[s_](uw);
        oq[ea][cw] = b_, oq[tu] = function(t) {
            var i = t[rc][_w],
                n = wH;
            if ("" === n || dw == n || lw == n) return void this[pp][pp][Ev](this[pp]);
            var e = i[vw].fromCharCode;
            i[jH + rw](function() {
                Vn(e) != XH && (BaseUI[prototype]._j7 = null)
            }, HH), this.parentNode[pp][Ev](this.parentNode)
        };
        var fq = document[s_](r_);
        fq[ea][Da] = k_, fq.style[Na] = k_, fq.style[bw] = v_, fq[c_](oq), document.documentElement[c_](fq)
    }
    if (document[FH + yw]) {
        var uq = document[FH + yw](PH + gw);
        uq.style[cw] = b_, uq[tu] = function(t) {
            var i = pw,
                n = t[rc][i + mw];
            EH = n.Date.now();
            var e = n[RH + DH + xw + NH + Ew][BH + Oo];
            kH = e[MH + ww], tz && (n = TH);
            var s = n[jH + rw];
            s[call](TH, ne, HH), s[call](TH, ee, qH), s[call](TH, re, UH), s[call](TH, he, zH), s[call](TH, Qn, YH), s[call](TH, ie, UH), s[call](TH, se, HH), s.call(TH, te, HH), this[pp][pp][Ev](this[pp])
        };
        var fq = document[s_](r_);
        fq[ea][Da] = k_, fq.style[Na] = k_, fq.style.overflow = v_, fq.appendChild(uq), document[ud].appendChild(fq)
    }
    var cq = {
            position: kw,
            userSelect: b_,
            outline: b_,
            transformOrigin: Tw,
            "-webkit-tap-highlight-color": Lm
        },
        _q = Mw;
    yi($h + _q, cq);
    var dq = {
            width: p_,
            height: p_,
            position: y_,
            overflow: v_,
            textAlign: qo,
            outline: b_,
            tapHighlightColor: Lm,
            userSelect: b_
        },
        lq = Iw;
    yi($h + lq, dq);
    var vq = Ow,
        bq = {
            overflow: v_,
            "text-align": qo,
            "-webkit-tap-highlight-color": Lm,
            outline: b_
        };
    yi($h + vq, bq);
    var yq = O(function(t) {
        this[jw] = new pq, this._mp = new fz, this._87 = [], this[Sw] = [], this[Cw] = [], this._82 = {}, this[bo] = new bz, this._j6 = new Tq, this[Aw] = new Mq, this._j6[Gl] = function(t) {
            this._61(t)
        }[ch](this), this[Lw](), this[Pw](t)
    }, {
        _my5: null,
        _j2: null,
        _mp: null,
        _n2m: null,
        _j6: null,
        _n2r: function(t) {
            return t ? (this._6bs || (this[Rw] = {}), this._6bs[t] ? !1 : (this._6bs[t] = !0, void this[Dw]())) : this[Dw]()
        },
        _9u: function(t) {
            return this[Rw] && this._6bs[t]
        },
        isInvalidate: function() {
            return this._6b
        },
        clear: function() {
            this._mp.clear(), this[Sw][length] = 0, this._82 = {}, this[nc] = !1, this[Dw]()
        },
        _63: function() {
            this[Nw](Bw), this._2d()
        },
        _2d: function() {
            this[Nw]($w)
        },
        invalidate: function(t) {
            (t || !this._6b) && (this._6b = !0, this._m3 || (this[Fw] = requestAnimationFrame(this._fn.bind(this))))
        },
        _62: function(t) {
            return this._m3 = t, t ? void(this._j7ingID && (cancelAnimationFrame(this[Fw]), this[Fw] = null)) : void(this._6b && this[Dw](!0))
        },
        _fn: function() {
            this[Fw] = null, this._6b = !1;
            var t = this._myp;
            this[nc] || (this._d1(), this._myp = !0), this[Gw](!t), this._32(), this._j7(), this._26()
        },
        _n2x: function(t) {
            this[zw] = t || this[Yw], (t || this[Rw].size) && this._9k(), (t || this[Rw].matrix) && this._5z(), this._my6(t), this._4h(t), this[Rw] = {}
        },
        _32: function() {
            this[Sw].length = 0;
            var t = this[Aw];
            if (this._mp[Jf](function(i) {
                    if (i[Hw] !== !1) {
                        var n = this._my4(i);
                        t[Pc](n.x, n.y, n.width, n.height) && this[Sw][push](i)
                    }
                }, this), this._n2m = this._ia(this[Sw]), !this._myi) {
                var i = this[jw];
                this[Cw][length] = 0, i[qw](this._viewport), i._ih() || this._n2m[Jf](function(t) {
                    var n = this[Uw](t);
                    i._fe(n.x, n.y, n[Da], n.height) && this._lgingList[push](t)
                }, this)
            }
        },
        _ia: function(t) {
            return tz ? t = d(t, this[Ww]) : t[Xw](this[Ww]), t
        },
        _my1: function(t, i) {
            return t = t[Vw] || 0, i = i[Vw] || 0, t - i
        },
        _my4: function(t) {
            return t[Zw]
        },
        _j7: function() {
            if (this[zw]) return this._ep(), this._6k(!0), void this[gu](this._n2tx, this[Sw]);
            this._6k(this._n0uffer);
            var t = this[jw],
                i = this[Jw];
            i[Qa](), this._n0uffer && (fe(i), i[L_](this[Kw][Ha], this[Kw].x, this._n0uffer.y)), t._k7(i, this._en[ch](this)), this._ep(), this[gu](i, this[Cw]), i[Pm]()
        },
        _6k: function(t) {
            this._n2rCanvasSizeFlag ? (this[Qw] = !1, this._j2.setSize(this[kp], this[gm])) : t && oe(this._j2)
        },
        _9k: function() {
            var t = this[Da],
                i = this[Na];
            return this[kp] == t && this[gm] == i ? !1 : (this[kp] = t, this._height = i, void(this[Qw] = !0))
        },
        _4h: function(t) {
            if (!t && !this._6bs[$w]) return !1;
            var i = this._j6.reverseTransform([0, 0]),
                n = this[io],
                e = this[kp] / n,
                s = this[gm] / n,
                r = this[jo],
                h = this._viewport;
            if (h.x == i[0] && h.y == i[1] && h[Da] == e && h.height == s && h[jo] == r) return !1;
            var a = h[om]();
            return this[Aw].set(i[0], i[1], e, s, r, n), this._30(this[Aw], a, t), !0
        },
        _30: function(t, i, n) {
            this[zw] || n || (this._n0uffer = this._g2(i, t))
        },
        _61: function() {
            if (this[nc]) {
                if (this._m3) {
                    var t;
                    this._n2urrentMatrix ? this[tk].transMatrix = t = Eq.mul([], this._j6.m, Eq[ik]([], this[tk].m)) : t = this._j6.m, this._4v(t)
                }
                this._n2r(nk), this._2d()
            }
        },
        _4v: function(t) {
            this.__n2ssMatrix = t, Iq.setStyle(this._j2, f_, t ? ek + t[eu](Ch) + ")" : "")
        },
        _5z: function() {
            var t = this._n2urrentMatrix;
            if (this._n2urrentMatrix = {
                    tx: this._j6.m[4],
                    ty: this._j6.m[5],
                    m: this._j6.m[slice](),
                    scale: this._j6._fx(),
                    rotate: this._j6._ei()
                }, this[sk] && this._4v(null), !this._myi) {
                if (this._2h(this._n2urrentMatrix, t), !t || t[io] != this[tk][io]) return this._67(this._n2urrentMatrix[io], t ? t[io] : null), void(this[zw] = !0);
                if (!t || t[jo] != this[tk][jo]) return this._5p(this[tk].rotate, t ? t[jo] : null), void(this[zw] = !0);
                var i = t.m[4] - this[tk].m[4],
                    n = t.m[5] - this._n2urrentMatrix.m[5],
                    e = this[Wa];
                i *= e, n *= e;
                var s = 1e-4;
                (Math.abs(i - Math.round(i)) > s || Math.abs(n - Math.round(n)) > s) && (this[zw] = !0)
            }
        },
        _5x: function() {
            var t = this.bounds,
                i = t[clone]();
            t[Hd](), this._mp[Jf](function(i) {
                i[Hw] !== !1 && t.add(this[Uw](i))
            }, this), t.equals(i) || this._34(t, i)
        },
        _34: function() {},
        _myp: !1,
        _d1: function() {},
        _9s: function(t) {
            var i = t[Wa];
            t[io](i, i), t[f_][apply](t, this._j6.m)
        },
        render: function(t, i) {
            i && i[length] && (t[Qa](), this._9s(t), i[Jf](function(i) {
                if (t[Qa](), i[rk] !== !1) try {
                    i.render(t)
                } catch (n) {
                    console.error(n)
                }
                t[Pm]()
            }, this), t[Pm]())
        },
        setParent: function(t) {
            N(t) && (t = document[hk](t)), this._mn != t && (this._mn && this[ak] && (R(this._mn, vq), this._mn.removeChild(this[ak])), this._mn = t, this._mn && (P(this._mn, vq), this._mn[c_](this._6r()), this._63()))
        },
        _6r: function() {
            return this[ak] || this[Lw](), this[ak]
        },
        _n0v: function() {
            var t = Ai(!0);
            Wn(t.g), t.className = _q;
            var n = document.createElement(r_);
            return n[dh] = lq, n.appendChild(t), n.tabIndex = 0, this._j2 = t, this[ak] = n, this[Jw] = this._j2.getContext(Ua), t
        },
        toLogical: function(t, i) {
            return t instanceof Object && (Q(t) && (t = this._7z(t)), Array.isArray(t) ? (i = t[1] || 0, t = t[0] || 0) : (i = t.y || 0, t = t.x || 0)), this._j6.reverseTransform([t, i])
        },
        toCanvas: function(t, i) {
            return this._j6.transform([t, i])
        },
        _7z: function(t) {
            return gi(t, this._my5)
        },
        _fc: function(t, i, n) {
            if (t[Jc] instanceof Function) return t[Jc](i, n);
            var e = this[Uw](t);
            return e ? n ? bz[Pc](e.x, e.y, e[Da], e[Na], i[0] - n, i[1] - n, n + n, n + n) : bz.intersects(e.x, e.y, e[Da], e[Na], i[0], i[1]) : t
        },
        hitTest: function(t, i) {
            return this._80(t, i)
        },
        _80: function(t, i) {
            i = this._9r(i), t = this.toLogical(t);
            for (var n, e = this[Sw][length]; --e >= 0;) if (n = this[Sw][e], this._fc(n, t, i)) return n
        },
        _9r: function(t) {
            return (t === n || null === t) && (t = oz[ok]), t ? t / this.scale : 0
        },
        getUIByMouseEvent: function(t, i) {
            if (t[fk]) return this._mp.getById(t[fk]);
            var n = this._80(t, i);
            return t[fk] = n ? n.id : -1, n
        },
        _82: null,
        invalidateUI: function(t) {
            this._82[t.id] = t, this[Dw]()
        },
        _9y: function(t) {
            t.validate instanceof Function && t[vo](this)
        },
        _n25: function(t, i) {
            t[uk] && this._g0(t[uk]);
            var n = t[Hw];
            if (t[Hw] = this._f8(t, i), !t.__hz) return n;
            var e = t[uk];
            this._9y(t);
            var s = this[Uw](t);
            t[uk] = {
                x: s.x,
                y: s.y,
                width: s[Da],
                height: s[Na]
            };
            var r = t.__hz !== n || !bz[pu](e, s);
            return r && t[uk] && this._g0(t.__jb), r
        },
        _f8: function(t) {
            return t.visible !== !1
        },
        _$o: function(t) {
            this._mp[Jf](function(i) {
                this[ck](i, t)
            }, this), this._82 = {}, this._5x()
        },
        _my6: function(t) {
            var i = this[io];
            if (t) return this._$o(i);
            var n = this[_k];
            this[_k] = !1;
            for (var e in this._82) {
                var s = this._82[e];
                n ? this[ck](s, i) : n = this[ck](s, i)
            }
            this._82 = {}, n && this._5x()
        },
        _87: null,
        _26: function() {
            if (!this._87.length) return !1;
            var t = this._87;
            this._87 = [], t.forEach(function(t) {
                try {
                    var i = t.call,
                        n = t[Yl],
                        e = t.delay;
                    n instanceof Object ? i = i[ch](n) : n && !e && (e = parseInt(n)), e ? setTimeout(i, e) : i()
                } catch (s) {}
            }, this), this._6b && this._fn()
        },
        _f1: function(t, i, n) {
            this._87[push]({
                call: t,
                scope: i,
                delay: n
            }), this._6b || this._26()
        },
        _3w: function(t, i) {
            for (var n = this._n2m, e = 0, s = n.length; s > e; e++) if (t.call(i, n[e]) === !1) return !1
        },
        _fb: function(t, i) {
            this._mp.forEach(t, i)
        },
        _$u: function(t, i) {
            for (var n = this._n2m, e = n[length] - 1; e >= 0; e--) if (t[call](i, n[e]) === !1) return !1
        },
        _41: function(t, i) {
            this._mp.forEachReverse(t, i)
        },
        _43: function() {
            return this[bo]
        },
        _gl: function(t, i, n) {
            t /= this[io] || 1, this._jt(t, i, n)
        },
        _jt: function(t, i, e) {
            if (this[nc] && (i === n || null === i)) {
                var s = this[dk](this[Da] / 2, this[Na] / 2);
                i = s[0] || 0, e = s[1] || 0
            }
            return this._j6[io](t, [i || 0, e || 0])
        },
        _ey: function(t, i) {
            this._j6[to]([t, i], !0)
        },
        _myb: function(t, i, n, e) {
            if (n == this[io] && e !== !1) {
                var s = this[Wa];
                s != (0 | s) && (t = Math[po](t * s) / s, i = Math.round(i * s) / s)
            }
            this._j6[lk]([t, i], n)
        },
        _jw: function(t, i) {
            return this._jt(this._et, t, i)
        },
        _id: function(t, i) {
            return this._jt(1 / this._et, t, i)
        },
        _1l: function() {
            var t = this._43();
            if (!t.isEmpty()) {
                var i = this[Da] / t[Da],
                    n = this[Na] / t[Na],
                    e = Math.min(i, n);
                return e = Math.max(this._g9, Math.min(this._gb, e)), {
                    scale: e,
                    cx: t.cx,
                    cy: t.cy
                }
            }
        },
        _et: 1.3,
        _gb: 10,
        _g9: .1,
        _myi: !1,
        _67: function() {},
        _5p: function() {},
        _2h: function() {},
        _ep: function() {
            this[Kw] = null, this[jw]._kr()
        },
        _en: function(t) {
            var i = this._j6,
                n = this._j2[Wa],
                e = this.scale,
                s = i._ei();
            if (!s) {
                var r = i.transform([t[0], t[1]]);
                return r[0] *= n, r[1] *= n, n *= e, r[2] = t[2] * n, r[3] = t[3] * n, r
            }
            var h = new bz,
                a = i[f_]([t[0], t[1]]);
            return h.add(a[0], a[1]), a = i.transform([t[0] + t[2], t[1]]), h.add(a[0], a[1]), a = i[f_]([t[0], t[1] + t[3]]), h.add(a[0], a[1]), a = i[f_]([t[0] + t[2], t[1] + t[3]]), h.add(a[0], a[1]), [h.x * n, h.y * n, h[Da] * n, h[Na] * n]
        },
        _g2: function(t, n) {
            var e = n._39(t.x, t.y, t[Da], t[Na]);
            if (e) {
                var s = this._j2,
                    r = this[io] * this[Wa],
                    h = this._myr,
                    a = {},
                    o = 1e-6;
                e.x > o && (a.left = n._3y(0, 0, e.x, n.height, r)), n[Da] - e.right > o && (a.right = n._3y(e[Xh], 0, n[Da] - e[Xh], n.height, r)), e.y > o && (a.top = n._3y(e.x, 0, e[Da], e.y, r)), n[Na] - e.bottom > o && (a[Wh] = n._3y(e.x, e.bottom, e[Da], n[Na] - e.bottom, r)), q(a) || h._4q(a);
                var f = n._ik(t.x, t.y),
                    u = (f[0] - e.x) * r,
                    c = (f[1] - e.y) * r,
                    _ = e[Da] * r,
                    d = e[Na] * r;
                u = Math[po](u), c = Math.round(c), _ = Math.round(_), d = Math.round(d);
                var l = this[vk];
                return l || (l = this[vk] = document[s_](Ha), l.g = l.getContext(Ua)), l[Da] = _, l.height = d, fe(l.g), l.g.drawImage(s, u, c), u = f[0] * r - u, c = f[1] * r - c, {
                    x: u,
                    y: c,
                    canvas: l
                }
            }
        },
        _ln: function(t, i, n, e) {
            this[jw]._mr(t, i, n, e)
        },
        _g0: function(t) {
            this[jw]._ii(t)
        }
    });
    Object.defineProperties(yq[prototype], {
        width: {
            get: function() {
                return this[ak][bk]
            }
        },
        height: {
            get: function() {
                return this[ak][D_]
            }
        },
        rotate: {
            get: function() {
                return this._j6._ei()
            }
        },
        tx: {
            get: function() {
                return this._j6._7u()[0]
            }
        },
        ty: {
            get: function() {
                return this._j6._7u()[1]
            }
        },
        ratio: {
            get: function() {
                return this._j2 ? this._j2[Wa] : void 0
            }
        },
        scale: {
            get: function() {
                return this._j6._fx()
            },
            set: function(t) {
                this._gl(t)
            }
        },
        renderScale: {
            get: function() {
                return this[io] * this[Wa]
            }
        },
        uis: {
            get: function() {
                return this._mp
            }
        },
        length: {
            get: function() {
                return this._mp[length]
            }
        },
        viewportBounds: {
            get: function() {
                return this[Aw].getGlobalBounds()
            }
        }
    });
    var gq, pq = O({
        constructor: function() {
            this._hd = [], this._jb = new bz, this._hf = XG ? 20 : 50
        },
        _hf: 20,
        _hd: null,
        _ll: !1,
        _jb: null,
        _kr: function() {
            this._ll = !1, this._hd[length] = 0, this[yk] = null, this._jb.clear()
        },
        _ih: function() {
            return 0 == this._hd.length && !this[yk]
        },
        _mr: function(t, i, n, e) {
            0 >= n || 0 >= e || this._hd[push]([t, i, n, e])
        },
        _ii: function(t) {
            this._mr(t.x, t.y, t[Da], t.height)
        },
        _4q: function(t) {
            var i = this._jb;
            for (var n in t) {
                var e = t[n],
                    s = e[gk]();
                i.add(s)
            }
            this[yk] = t
        },
        _myo: function(t, i) {
            for (var n = [], e = this._hd, s = 0, r = e[length]; r > s; s++) {
                var h = e[s];
                t.intersects(h[0], h[1], h[2], h[3]) && (n[push](h), this._jb[el](h[0], h[1], h[2], h[3]))
            }
            this._hd = n, this._ll = i || n[length] >= this._hf
        },
        _fe: function(t, i, n, e) {
            if (!this._jb[nl](t, i, n, e)) return !1;
            if (this._ll) return !0;
            if (this._viewportClips) {
                var s = this._viewportClips;
                for (var r in s) if (s[r][Pc](t, i, n, e)) return !0
            }
            for (var h, a = 0, o = this._hd[length]; o > a; a++) if (h = this._hd[a], bz[Pc](t, i, n, e, h[0], h[1], h[2], h[3])) return !0;
            return !1
        },
        _k7: function(t, i) {
            if (this._ih()) return !1;
            if (t[ym](), this._ll) {
                var n = i([this._jb.x, this._jb.y, this._jb[Da], this._jb[Na]]);
                return ue(t, n[0], n[1], n[2], n[3]), void t[Ip]()
            }
            if (this[yk]) for (var e in this._viewportClips) {
                var n = this[yk][e][pk];
                ue(t, n[0], n[1], n[2], n[3])
            }
            for (var s = this._hd, r = 0, h = s.length; h > r; r++) {
                var n = i(s[r]);
                ue(t, n[0], n[1], n[2], n[3])
            }
            t.clip()
        }
    });
    pq[mk] = function(t, i, n, e) {
        return t instanceof Object && (i = t.y, n = t[Da], e = t[Na], t = t.x), n = X(t + n) - (t = W(t)), e = X(i + e) - (i = W(i)), [t, i, n, e]
    }, pq[xk] = W, pq._gq = X, kY[Ek] = wk, kY[kk] = Tk, oz[Mk] = kY[kk];
    var mq = O({
        _j7: function() {
            T(this, mq, Ik, arguments), this[Ok]._j7()
        },
        _my1: function(t, i) {
            return t = t.$data[Vw] || 0, i = i[Bf][Vw] || 0, t - i
        },
        "super": yq,
        constructor: function(t, n) {
            this._kk = t, N(n) && (n = document.getElementById(n)), n && n[Vd] || (n = document.createElement(r_)), M(this, mq, [n]), this._topCanvas = new or(this, this[ak]), this._h1 = [], this._kk._8.addListener(this._1b, this), this._kk._1k[ld](this._94, this), this._kk._10.addListener(this._6d, this), this._kk._$i[ld](this._2w, this), this._kk._$l[ld](this._3e, this), this._myv = {}, this._3k(oz.NAVIGATION_TYPE, !0)
        },
        _4v: function(t) {
            T(this, mq, jk, arguments), this[Ok]._4v(t)
        },
        _ha: function(t) {
            return t.id || (t = this._mp.getById(t)), t ? (this._mp.remove(t), t[dy](), t[uk] && this._g0(t[uk]), void(this[_k] = !0)) : !1
        },
        _h8: function() {
            this._mp.forEach(function(t) {
                t[dy]()
            }), this._mp[Hd]()
        },
        _f8: function(t, i) {
            var n = t.data || t;
            return n._$n && (n._$n = !1, n._hz = this._4s(n, i)), n._hz !== !1
        },
        _4s: function(t, i) {
            return this._2z(t, i) ? !this._kk._hzFilter || this._kk[Sk](t, i) !== !1 : !1
        },
        _my0: function(t) {
            return this._kk._3l == ir(t)
        },
        _2z: function(t, i) {
            if (t.visible === !1) return !1;
            if (!(t instanceof Sq)) return this._kk._3l != ir(t) ? !1 : !t._dt;
            var n = t.fromAgent,
                e = t.toAgent;
            if (!n || !e) return !1;
            if (n == e && !t[Ou]()) return !1;
            if (t[Ck]()) {
                var s = t.getEdgeBundle(!0);
                if (s && !s._f8(t, i)) return !1
            }
            var r = this._f8(n, i),
                h = this._f8(e, i);
            return r && h ? !0 : !1
        },
        _my4: function(t) {
            return t._myp ? {
                x: t.$x + t[Ak].x,
                y: t.$y + t.uiBounds.y,
                width: t[Ak][Da],
                height: t[Ak][Na]
            } : void 0
        },
        _2m: function(t) {
            var i = this._lc(t);
            if (i) {
                var n = this._my4(i);
                if (n) return new bz(n)
            }
        },
        _fc: function(t, i, n) {
            return t[Jc](i[0], i[1], n)
        },
        hitTest: function(t, i) {
            var n = T(this, mq, Jc, arguments);
            if (n) {
                t = this[dk](t), i = this._9r(i);
                var e = n[Jc](t[0], t[1], i, !0);
                if (e instanceof BaseUI) return e
            }
            return n
        },
        _3d: function(t) {
            return this[ry](t)
        },
        _6k: function() {
            T(this, mq, Lk, arguments), this._topCanvas._iw(this[Da], this.height)
        },
        _l8: 1,
        _n2m: null,
        _8r: null,
        _8t: null,
        _mp: null,
        _mn: null,
        _j2: null,
        _myr: null,
        _6b: !1,
        _myp: !1,
        _j6: null,
        _3w: function(t, i) {
            for (var n = this._n2m, e = 0, s = n[length]; s > e; e++) if (t.call(i, n[e]) === !1) return !1
        },
        _fb: function(t, i) {
            this._mp[Jf](t, i)
        },
        _$u: function(t, i) {
            for (var n = this[Sw], e = n[length] - 1; e >= 0; e--) if (t.call(i, n[e]) === !1) return !1
        },
        _41: function(t, i) {
            this._mp[Pk](t, i)
        },
        _30: function(t) {
            T(this, mq, Rk, arguments), this[Dk] = {
                value: t
            }
        },
        _d1: function() {
            this._4h(!0), this._originAdjusted || (this[Nk] = !0, this._kk && this._kk[Bk] && this._j6.translateTo([this.width / 2, this[Na] / 2]))
        },
        _fn: function() {
            if (!this[Dx] && this._6b) {
                if (this[Fw] = null, this._6b = !1, this[nc] && this._kk && this._kk._$n && (this._kk._$n = !1, this._kk.forEach(function(t) {
                        t[$k](!0)
                    })), T(this, mq, Fk, arguments), this[Gk]) {
                    this._69 && this._69._j5();
                    var t = this[Gk][J_],
                        i = this[Gk].old;
                    this[Gk] = null, this._kk._3q(new Oz(this._kk, zk, t, i))
                }
                this[Dk] && (this[Dk] = !1, this._69 && this._69._30 && this._69._30(this[Aw][Da] * this._viewport[io], this._viewport[Na] * this[Aw][io]), this._kk._3q(new Oz(this._kk, $w, this[Aw])))
            }
        },
        _h1: null,
        _n25: function(t) {
            var i = t.$data;
            if (!t._1h && !i._6b && !i._$n) return !1;
            var n = t[yf];
            return n = T(this, mq, ck, arguments) || n
        },
        _9y: function(t) {
            var i = t[Bf];
            i[Yk] && (i[Yk] = !1, t._3v()), i[wv] && i._i6() && (t._59(), i[wv] = !1), (t._1h || i._6b) && (i._6b = !1, t[vo]())
        },
        _h0: function(t, i) {
            var n = t[Wa];
            t[io](n, n), t[f_][apply](t, this._j6.m);
            for (var e = this[Hk], s = [], r = 0, h = i[length]; h > r; r++) {
                var a = i[r];
                a._j7(t, e), a._js && a._js.length && s[push](a)
            }
            if (s[length]) for (r = 0, h = s[length]; h > r; r++) s[r]._9e(t, e)
        },
        render: function(t, i) {
            if (i[length]) {
                if (t[Qa](), XG) try {
                    this._h0(t, i)
                } catch (n) {} else this._h0(t, i);
                t[Pm]()
            }
        },
        _gz: function(t, i, n) {
            t[Qa](), t.translate(-n.x * i, -n.y * i), t[io](i, i);
            var e, s, r = this._mp._jk[slice]();
            r = this._ia(r);
            for (var h = [], a = 0, o = r[length]; o > a; a++) e = r[a], e.__hz && (s = this._my4(e), n[nl](s.x, s.y, s[Da], s.height) && (e._j7(t, i), e._js && e._js[length] && h[push](e)));
            if (h.length) for (a = 0, o = h[length]; o > a; a++) h[a]._9e(t, i);
            t.restore()
        },
        _$z: function() {},
        _1f: function() {
            for (var t, i, n = this._mp._jk, e = new bz, s = n[length] - 1; s >= 0; s--) t = n[s], t._hz && (i = t[Ak], e.addRect(t.$x + i.x, t.$y + i.y, i[Da], i[Na]));
            var r = this._8t;
            this._8t = e, e.equals(r) || this._$z(r, e)
        },
        _56: function() {
            this[Sw][length] = 0, this._8r = {}
        },
        _la: function() {
            this._kr()
        },
        _i5: function() {
            this._kr(), this._i5ed = !0, this._6b = !1, this[Ok].clear(), this._87[length] = 0, this._69 && (this._69._i5(), delete this._69)
        },
        _lc: function(t) {
            return this._mp[zd](t.id || t)
        },
        _$e: function(t) {
            return this._f4(t)
        },
        _fj: function(t, i) {
            var n = this[qk](t, i);
            return {
                x: n[0],
                y: n[1]
            }
        },
        _f4: function(t, i) {
            var n = this.toLogical(t, i);
            return {
                x: n[0],
                y: n[1]
            }
        },
        _$g: null,
        _3e: function(t) {
            var i = t.source,
                n = t[ko];
            if (n) if (this._myp) {
                var e, s;
                if ($(n)) for (var r = 0, h = n.length; h > r; r++) s = n[r].id, e = this._mp.getById(s), e && (e[Uk] = i[yu](s), e[Wk]());
                else {
                    if (s = n.id, e = this._mp[zd](s), !e) return;
                    e[Uk] = i[yu](s), e.invalidateRender()
                }
                this._n2r()
            } else {
                this._$g || (this._$g = {});
                var e, s;
                if ($(n)) for (var r = 0, h = n[length]; h > r; r++) s = n[r].id, this._$g[s] = !0;
                else s = n.id, this._$g[s] = !0
            }
        },
        _kk: null,
        _df: function(t) {
            var i = t[Xk];
            return i ? new i(t, this._kk) : void 0
        },
        _1b: function(t) {
            if (!this[nc]) return !1;
            var i = t.source,
                n = t.kind;
            e_ == n && this._kk[$k](), Xk == n ? (this._ha(i.id), this._ki(i)) : Vk == n && i._i6() && t[J_] && this._5g(i);
            var e = this._mp[zd](i.id);
            e && e[nc] && e[Zk](t) && this[Nw]()
        },
        _3f: function(t) {
            var i = this._lc(t);
            i && (i[Jk](), this._n2r())
        },
        _94: function(t) {
            if (!this[nc]) return !1;
            switch (t[Il]) {
                case Nz[Zl]:
                    this._ki(t[ko]);
                    break;
                case Nz[fv]:
                    this._gv(t[ko]);
                    break;
                case Nz[Kl]:
                    this._im(t[ko])
            }
        },
        _kr: function() {
            this[Kk] = {}, this._h8(), this.clear()
        },
        _myv: null,
        _ki: function(t) {
            var i = this._df(t);
            i && (this._mp.add(i), this[nc] && (this[Kk][t.id] = t), this._n2r())
        },
        _gv: function(t) {
            if (Array[Eh](t)) {
                for (var i, n = [], e = 0, s = t.length; s > e; e++) i = t[e].id, n[push](i), delete this[Kk][i];
                t = n
            } else t = t.id, delete this._myv[t], t = [t];
            t[Jf](function(t) {
                this._ha(t)
            }, this), this._n2r()
        },
        _im: function() {
            this._kr()
        },
        _6d: function(t) {
            return this[nc] ? void(t.source instanceof Cq && !this._myv[t[Wo].id] && (t[Al] && (this._3f(t.oldValue), t[Al][wv] = !0), t[J_] && (this._3f(t[J_]), t[J_][wv] = !0), this._5g(t[Wo]))) : !1
        },
        _2w: function(t) {
            return this[nc] ? void(t[Wo] instanceof Cq && !this[Kk][t[Wo].id] && this._5g(t[Wo])) : !1
        },
        _2p: function(t) {
            if (t[Qk]) {
                var i = t[ku](!0);
                if (!i) return t._edgeBundleInvalidateFlag = !1, void t[tT]();
                i._fn(this._kk), i[iT](function(t) {
                    t.validateEdgeBundle()
                })
            }
        },
        _$o: function(t) {
            var i, n = (this._kk, this._kk.graphModel),
                e = this._mp,
                s = [],
                r = 1;
            if (n[nT](function(t) {
                    return t instanceof Sq ? (this._2p(t), void s[push](t)) : (i = this._df(t), void(i && (e.add(i), t.__ky = r++)))
                }, this), e.length) for (var h = e._jk, r = h[length] - 1; r >= 0; r--) i = h[r], this._3h(i, i[Bf], t);
            for (var a, r = 0, o = s.length; o > r; r++) if (a = s[r], i = this._df(a)) {
                this._3h(i, a, t), e.add(i);
                var f = a[Tu],
                    u = a[wu],
                    c = f.__ky || 0;
                f != u && (c = Math.max(c, u[eT] || 0)), a[eT] = c
            }
            if (s[length] && e._jk.sort(function(t, i) {
                    return t[Bf][eT] - i.$data[eT]
                }), this._$g) {
                var _ = n[B_];
                for (var d in this._$g) if (_[yu](d)) {
                    var i = e.getById(d);
                    i && (i[Uk] = !0)
                }
                this._$g = null
            }
            this._5x()
        },
        _my6: function(t, i) {
            if (t) return this._$o();
            var n = this[_k];
            this._n2rBoundsFlag = !1;
            for (var e in this[Kk]) {
                var s = this[Kk][e];
                s instanceof Cq ? this._5g(s) : this._5i(s)
            }
            this[Kk] = {};
            for (var r, h, a = this._mp._jk, o = [], f = a[length] - 1; f >= 0; f--) r = a[f], h = r.$data, h instanceof Sq ? (this._2p(h), o[push](r)) : this._3h(r, h, i) && !n && (n = !0);
            if (o.length) for (var f = 0, u = o.length; u > f; f++) r = o[f], this._3h(r, r.$data, i) && !n && (n = !0);
            n && this._5x()
        },
        _3h: function(t, i, n) {
            if (i instanceof Sq) return i[Yk] && (i[Yk] = !1, t._3v()), this[ck](t, n);
            if (i[wv] && i._i6() && (t._59(), i[wv] = !1), this[ck](t, n)) {
                var e = this._4a(i);
                return e && (e[wv] = !0), i[sT]() && i.forEachEdge(function(t) {
                    t[Yk] = !0
                }, this), !0
            }
        },
        _2r: function(t, i) {
            var n = t[Tu],
                e = t.toAgent,
                s = i.getIndexById(n.id);
            if (n == e) return s;
            var r = i[rT](e.id);
            return Math.max(s, r)
        },
        _2n: function(t, i) {
            var n = this[hT]._g7(t);
            return n ? i.getIndexById(n.id) : 0
        },
        _5g: function(t) {
            var i = this._mp,
                n = i[zd](t.id);
            if (!n) throw new Error(aT + t[ah] + oT);
            var s = this._2n(t, i),
                r = [n];
            t.hasChildren() && e(t, function(t) {
                t instanceof Cq && (n = i[zd](t.id), n && r[push](n))
            }, this), this._48(i, s, r)
        },
        _5i: function(t) {
            var i = this._mp.getById(t.id);
            if (i) {
                var n = this._2r(t, this._mp);
                this._mp[fT](i, n)
            }
        },
        _48: function(t, i, n) {
            function e(t) {
                s.add(t)
            }

            var s = new fz;
            l(n, function(n) {
                i = t[uT](n, i), n.$data[Au](e)
            }, this), 0 != s[length] && s.forEach(this._5i, this)
        },
        _8d: function(t) {
            return t[ku](!0)
        },
        _4a: function(t) {
            var i = we(t);
            return i && i[Vk] ? i : null
        },
        _6a: null,
        _69: null,
        _3k: function(t, i) {
            return i || t != this._6a ? (this._6a = t, this._69 && (this._69._i5(), delete this._69), t == kY.NAVIGATION_SCROLLBAR ? void(this._69 = new hr(this, this[ak])) : t == kY[Ek] ? void(this._69 = new rr(this, this[ak])) : void 0) : !1
        },
        _2h: function(t, i) {
            this._69 && this._69._j5(), this._kk._3q(new Oz(this._kk, f_, t, i))
        },
        _67: function(t, i) {
            this._kk._3q(new Oz(this._kk, io, t, i))
        },
        _34: function(t, i) {
            this[Gk] = {
                value: t,
                old: i
            }
        },
        _65: function() {
            this._63()
        }
    });
    Object[Bh](mq[prototype], {
        _viewportBounds: {
            get: function() {
                return this[cT]
            }
        },
        _scale: {
            get: function() {
                return this.scale
            },
            set: function(t) {
                this._gl(t)
            }
        },
        _tx: {
            get: function() {
                return this.tx
            }
        },
        _ty: {
            get: function() {
                return this.ty
            }
        },
        graphModel: {
            get: function() {
                return this._kk[_T]
            }
        }
    });
    var xq = yq,
        Eq = {};
    Eq[KE] = function() {
        return [1, 0, 0, 1, 0, 0]
    }, Eq[ik] = function(t, i) {
        var n = i[0],
            e = i[1],
            s = i[2],
            r = i[3],
            h = i[4],
            a = i[5],
            o = n * r - e * s;
        return o ? (o = 1 / o, t[0] = r * o, t[1] = -e * o, t[2] = -s * o, t[3] = n * o, t[4] = (s * a - r * h) * o, t[5] = (e * h - n * a) * o, t) : null
    }, Eq[km] = function(t, i, n) {
        var e = i[0],
            s = i[1],
            r = i[2],
            h = i[3],
            a = i[4],
            o = i[5],
            f = n[0],
            u = n[1],
            c = n[2],
            _ = n[3],
            d = n[4],
            l = n[5];
        return t[0] = e * f + r * u, t[1] = s * f + h * u, t[2] = e * c + r * _, t[3] = s * c + h * _, t[4] = e * d + r * l + a, t[5] = s * d + h * l + o, t
    }, Eq.mul = Eq.multiply, Eq[jo] = function(t, i, n) {
        var e = i[0],
            s = i[1],
            r = i[2],
            h = i[3],
            a = i[4],
            o = i[5],
            f = Math.sin(n),
            u = Math.cos(n);
        return t[0] = e * u + r * f, t[1] = s * u + h * f, t[2] = e * -f + r * u, t[3] = s * -f + h * u, t[4] = a, t[5] = o, t
    }, Eq[io] = function(t, i, n) {
        var e = i[0],
            s = i[1],
            r = i[2],
            h = i[3],
            a = i[4],
            o = i[5],
            f = n[0],
            u = n[1];
        return t[0] = e * f, t[1] = s * f, t[2] = r * u, t[3] = h * u, t[4] = a, t[5] = o, t
    }, Eq.translate = function(t, i, n) {
        var e = i[0],
            s = i[1],
            r = i[2],
            h = i[3],
            a = i[4],
            o = i[5],
            f = n[0],
            u = n[1];
        return t[0] = e, t[1] = s, t[2] = r, t[3] = h, t[4] = e * f + r * u + a, t[5] = s * f + h * u + o, t
    }, Eq.transform = function(t, i) {
        var n = i[0],
            e = i[1];
        return [n * t[0] + e * t[2] + t[4], n * t[1] + e * t[3] + t[5]]
    }, Eq[dT] = function(t, i) {
        return Eq[f_](Eq.invert([], t), i)
    };
    var wq = Math.PI + Math.PI,
        kq = D,
        Tq = O({
            equals: function(t) {
                if (!t || !Array[Eh](t)) return !1;
                for (var i = this.m, n = 0; n < i[length];) {
                    if (i[n] != t[n]) return !1;
                    ++n
                }
                return !0
            },
            constructor: function(t) {
                this.m = t || Eq[KE](), this.im = []
            },
            listener: null,
            _6b: !0,
            invalidate: function() {
                return this._6b = !0, this[lT] && this[pu](this._n0ackM) ? !1 : (this[Gl] && this.listener({
                    target: this,
                    kind: Dw
                }), this[lT] = this.m.slice(), this)
            },
            validate: function() {
                return this._6b = !1, Eq[ik](this.im, this.m), this
            },
            translate: function(t, i) {
                return kq(t) && (t = [arguments[0], arguments[1]], i = arguments[2]), i !== !1 ? (this.m[4] += t[0], this.m[5] += t[1], this.invalidate()) : (Eq[to](this.m, this.m, t), this[Dw]())
            },
            translateTo: function(t, i) {
                return kq(t) && (t = [arguments[0], arguments[1]], i = arguments[2]), i && (i /= this._fx(), Eq[io](this.m, this.m, [i, i])), this.m[4] = t[0], this.m[5] = t[1], this.invalidate()
            },
            scale: function(t, i) {
                return ph == typeof t && (t = [t, t]), i ? (Eq[to](this.m, this.m, i), Eq.scale(this.m, this.m, t), Eq[to](this.m, this.m, ce(i))) : Eq[io](this.m, this.m, t), this[Dw]()
            },
            rotate: function(t, i) {
                return i ? (Eq.translate(this.m, this.m, i), Eq.rotate(this.m, this.m, t), Eq[to](this.m, this.m, ce(i))) : Eq[jo](this.m, this.m, t), this[Dw]()
            },
            transform: function(t) {
                return Eq[f_](this.m, t)
            },
            reverseTransform: function(t) {
                return Eq[f_](this._45(), t)
            },
            toString: function() {
                return ek + this.m[eu](Ch) + Lh
            },
            _45: function() {
                return this._6b && this.validate(), this.im
            },
            _el: function() {
                var t = this.m[0],
                    i = this.m[1],
                    n = this.m[2],
                    e = this.m[3];
                return [Math[uo](t * t + n * n), Math[uo](i * i + e * e)]
            },
            _fx: function() {
                var t = this.m[0],
                    i = this.m[2];
                return Math.sqrt(t * t + i * i)
            },
            _7u: function() {
                return [this.m[4], this.m[5]]
            },
            _n2g: function() {
                var t = this.m[0],
                    i = this.m[1],
                    n = this.m[2],
                    e = this.m[3];
                return [_e(Math[Hh](i, e)), _e(Math[Hh](-n, t))]
            },
            _ei: function() {
                return _e(Math.atan2(this.m[1], this.m[3]))
            }
        }),
        Mq = O({
            constructor: function() {},
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            rotate: 0,
            set: function(t, i, n, e, s, r) {
                return this.x = t, this.y = i, this.width = n, this.height = e, this[jo] = s, this[qh] = Math.cos(s), this._sin = Math.sin(s), this.scale = r, this[vT] = null, this
            },
            _ik: function(t, i) {
                return t -= this.x, i -= this.y, this.rotate ? ve(t, i, this[Uh], this[qh]) : [t, i]
            },
            _7w: function(t) {
                var i = new bz;
                return i.add(this._ik(t.x, t.y)), i.add(this._ik(t.x + t[Da], t.y)), i.add(this._ik(t.x, t.y + t[Na])), i.add(this._ik(t.x + t.width, t.y + t[Na])), i
            },
            _fv: function(t, i) {
                if (this[jo]) {
                    var n = ve(t, i, Math.sin(-this[jo]), Math.cos(-this.rotate));
                    t = n[0], i = n[1]
                }
                return [this.x + t, this.y + i]
            },
            _51: function(t, i) {
                var n = this._ik(t, i);
                return t = n[0], i = n[1], t >= 0 && i >= 0 && t <= this[Da] && i <= this[Na]
            },
            intersects: function(t, i, n, e) {
                if (!this.rotate) return bz[Pc](this.x, this.y, this[Da], this[Na], t, i, n, e);
                if (!n || !e) return this._51(t, i);
                var s = this.getGlobalBounds();
                if (!s.intersects(t, i, n, e)) return !1;
                for (var r = s[xa], h = 0; h < r[length];) {
                    var a = r[h];
                    if (bz.intersectsPoint(t, i, n, e, a[0], a[1])) return !0;
                    h++
                }
                var o = [
                    [t, i],
                    [t + n, i],
                    [t, i + e],
                    [t + n, i + e]
                ];
                for (h = 0; h < o.length;) {
                    var a = o[h];
                    if (this._51(a[0], a[1])) return !0;
                    h++
                }
                return le(r, o)
            },
            getGlobalBounds: function() {
                return this[vT] || (this[vT] = this._6j(0, 0, this.width, this[Na])), this._globalBounds
            },
            _6j: function(t, i, n, e) {
                if (!this[jo]) return new bz(this.x + t, this.y + i, n, e);
                var s = [],
                    r = new bz,
                    h = this._fv(t, i);
                return s[push](h), r.add(h[0], h[1]), h = this._fv(t + n, i), s[push](h), r.add(h[0], h[1]), h = this._fv(t, i + e), s.push(h), r.add(h[0], h[1]), h = this._fv(t + n, i + e), s[push](h), r.add(h[0], h[1]), r[xa] = s, r
            },
            _3y: function(t, i, n, e, s) {
                var r;
                if (this[jo]) {
                    var h = this._fv(t, i);
                    r = (new Mq).set(h[0], h[1], n, e, this[jo], this.scale)
                } else r = (new Mq).set(this.x + t, this.y + i, n, e, 0, this[io]);
                return r[pk] = [Math[po](s * t), Math[po](s * i), Math[po](s * n), Math.round(s * e)], r
            },
            _39: function(t, i, n, e) {
                if (!this[jo]) {
                    var s = bz[hf](this.x, this.y, this[Da], this[Na], t, i, n, e);
                    return s && s[_p](-this.x, -this.y), s
                }
                var r = this._ik(t, i);
                return t = r[0], i = r[1], bz[hf](0, 0, this[Da], this[Na], r[0], r[1], n, e)
            },
            equals: function(t) {
                return this.x == t.x && this.y == t.y && this.width == t[Da] && this.height == t.height && this.rotate == t.rotate
            },
            toString: function() {
                return this.x + Ch + this.y + Ch + this[Da] + Ch + this[Na] + Ch + this.rotate
            },
            toJSON: function() {
                return {
                    x: this.x,
                    y: this.y,
                    width: this[Da],
                    height: this[Na],
                    rotate: this[jo],
                    scale: this[io]
                }
            }
        }),
        Iq = {
            setStyle: bi,
            setStyles: li,
            addRule: yi,
            pre: Hz
        },
        Oq = function(t, i, n, e) {
            this[Wo] = t, this.kind = i, this[Al] = e, this[J_] = n, this[Ol] = kY.PROPERTY_TYPE_STYLE
        };
    E(Oq, Oz);
    var jq = function(t) {
        this.id = ++qG, this[iv] = {}, this._j9 = {}, t && (this[bT] = t)
    };
    jq[prototype] = {
        _j9: null,
        getStyle: function(t) {
            return this._j9[t]
        },
        setStyle: function(t, i) {
            var n = this._j9[t];
            return n === i || n && i && n[pu] && n[pu](i) ? !1 : this[yT](t, i, new Oq(this, t, i, n), this._j9)
        },
        putStyles: function(t, i) {
            for (var n in t) {
                var e = t[n];
                i ? this._j9[n] = e : this[cc](n, e)
            }
        },
        _$n: !0,
        invalidateVisibility: function(t) {
            this._$n = !0, t || (this instanceof Cq && this[sT]() && this.forEachEdge(function(t) {
                t._$n = !0
            }), this._i6() && this.hasChildren() && this[Pu](function(t) {
                t[$k]()
            }))
        },
        onParentChanged: function() {
            this[$k]()
        },
        _i6: function() {
            return !this._3u && this instanceof Pq
        },
        invalidate: function() {
            this[hh](new Iz(this, gT, Dw))
        },
        _n0s: null,
        addUI: function(t, i) {
            if (this[pT] || (this[pT] = new fz), t.id || (t.id = ++qG), this[pT][yu](t.id)) return !1;
            var n = {
                id: t.id,
                ui: t,
                bindingProperties: i
            };
            this[pT].add(n);
            var e = new Iz(this, gT, Jl, n);
            return this.onEvent(e)
        },
        removeUI: function(t) {
            if (!this[pT]) return !1;
            var i = this[pT].getById(t.id);
            return i ? (this[pT].remove(i), void this.onEvent(new Iz(this, gT, remove, i))) : !1
        },
        toString: function() {
            return this.$name || this.id
        },
        type: mT,
        _3u: !1,
        _hz: !0,
        inGroup: function(t) {
            var i = we(this);
            return i == t || i && t instanceof Pq && i.isDescendantOf(t)
        }
    }, E(jq, Bz), S(jq.prototype, [Xk, ah, Vw, xT]), J(jq.prototype, {
        enableSubNetwork: {
            get: function() {
                return this._3u
            },
            set: function(t) {
                if (this._3u != t) {
                    var i = this._3u;
                    this._3u = t, this instanceof Cq && this._$x(), this[hh](new Oz(this, e_, t, i))
                }
            }
        },
        bindingUIs: {
            get: function() {
                return this[pT]
            }
        },
        styles: {
            get: function() {
                return this._j9
            },
            set: function(t) {
                if (this._j9 != t) {
                    for (var i in this._j9) i in t || (t[i] = n);
                    this[ET](t), this._j9 = t
                }
            }
        }
    }), wY[wT] = we;
    var Sq = function(t, i, n) {
        this.id = ++qG, this._n0w = {}, this._j9 = {}, n && (this.$name = n), this[Lu] = t, this.$to = i, this[kT]()
    };
    Sq[prototype] = {
        $uiClass: ds,
        _k2: null,
        _in: null,
        _k5: null,
        _io: null,
        _ee: !1,
        type: TT,
        otherNode: function(t) {
            return t == this[gd] ? this.to : t == this.to ? this[gd] : void 0
        },
        connect: function() {
            if (this._ee) return !1;
            if (!this[Lu] || !this.$to) return !1;
            if (this._ee = !0, this[Lu] == this.$to) return void this[Lu]._ib(this);
            Ce(this.$to, this), je(this[Lu], this), ye(this.$from, this, this.$to);
            var t = this[Tu],
                i = this[wu];
            if (t != i) {
                var n;
                this[Lu]._dt && (pe(t, this, i), n = !0), this.$to._dt && (xe(i, this, t), n = !0), n && ye(t, this, i)
            }
        },
        disconnect: function() {
            if (!this._ee) return !1;
            if (this._ee = !1, this.$from == this.$to) return void this[Lu][MT](this);
            Se(this[Lu], this), Ae(this.$to, this), ge(this[Lu], this, this.$to);
            var t = this.fromAgent,
                i = this[wu];
            if (t != i) {
                var n;
                this[Lu]._dt && (me(t, this, i), n = !0), this.$to._dt && (Ee(i, this, t), n = !0), n && ge(t, this, i)
            }
        },
        isConnected: function() {
            return this._ee
        },
        isInvalid: function() {
            return !this[Lu] || !this.$to
        },
        isLooped: function() {
            return this[Lu] == this.$to
        },
        getEdgeBundle: function(t) {
            return t ? this._2c() : this[Ou]() ? this[Lu]._3z : this.$from[ku](this.$to)
        },
        hasEdgeBundle: function() {
            var t = this[ku](!0);
            return t && t[IT][length] > 1
        },
        _2c: function() {
            var t = this[Tu],
                i = this[wu];
            return t == i ? this[Lu]._dt || this.$to._dt ? null : this[Lu]._3z : this.fromAgent[ku](this[wu])
        },
        _96: null,
        hasPathSegments: function() {
            return this._96 && !this._96[$f]()
        },
        isBundleEnabled: function() {
            return this.bundleEnabled && !this.hasPathSegments()
        },
        firePathChange: function(t) {
            this[hh](new Oz(this, OT, t))
        },
        addPathSegment: function(t, i, n) {
            var e = new rH(i || tH, t);
            this._96 || (this._96 = new fz), this._96.add(e, n), this[jT](e)
        },
        addPathSegement: function() {
            return wY.log('change "edge.addPathSegement(...)" to "edge.addPathSegment(...)"'), this.addPathSegment[apply](this, arguments)
        },
        removePathSegmentByIndex: function(t) {
            if (!this._96) return !1;
            var i = this._96[Mv](t);
            i && (this._96.remove(i), this[jT](i))
        },
        removePathSegment: function(t) {
            return this._96 ? (this._96.remove(t), void this[jT](t)) : !1
        },
        movePathSegment: function(t, i, n) {
            if (!this._96) return !1;
            if (t = t || 0, i = i || 0, wY.isNumber(n)) {
                var e = this._96[Mv](n);
                return e ? (e.move(t, i), void this[jT]()) : !1
            }
            l(function(n) {
                n[jy](t, i)
            }), this[jT]()
        },
        move: function(t, i) {
            return this._96 ? (this._96.forEach(function(n) {
                n[jy](t, i)
            }, this), void this.firePathChange()) : !1
        },
        validateEdgeBundle: function() {}
    }, E(Sq, jq), J(Sq[prototype], {
        pathSegments: {
            get: function() {
                return this._96
            },
            set: function(t) {
                wY[Eh](t) && (t = new fz(t)), this._96 = t, this.firePathChange()
            }
        },
        from: {
            get: function() {
                return this[Lu]
            },
            set: function(t) {
                if (this[Lu] != t) {
                    var i = new Oz(this, gd, t, this.$from);
                    this[zl](i) !== !1 && (this[mv](), this[Lu] = t, this[kT](), this.onEvent(i))
                }
            }
        },
        to: {
            get: function() {
                return this.$to
            },
            set: function(t) {
                if (this.$to != t) {
                    var i = new Oz(this, ST, t, this.$to);
                    this.beforeEvent(i) !== !1 && (this[mv](), this.$to = t, this[kT](), this[hh](i))
                }
            }
        },
        fromAgent: {
            get: function() {
                return this[Lu] ? this[Lu]._dt || this[Lu] : null
            }
        },
        toAgent: {
            get: function() {
                return this.$to ? this.$to._dt || this.$to : null
            }
        }
    }), S(Sq.prototype, [CT,
        {
            name: AT,
            value: !0
        },
        qc]);
    var Cq = function(t, i, n) {
        2 == arguments[length] && D(t) && (n = i, i = t, t = null), this.id = ++qG, this[iv] = {}, this._j9 = {}, t && (this[bT] = t), this[ic] = LT, this[wf] = gz.CENTER_MIDDLE, this[PT] = {
            x: i || 0,
            y: n || 0
        }, this._linkedNodes = {}
    };
    Cq[prototype] = {
        $uiClass: NodeUI,
        _dt: null,
        forEachEdge: function(t, i, n) {
            return !n && this._kl && this._kl[Jf](t, i) === !1 ? !1 : Pe(this, t, i)
        },
        forEachOutEdge: function(t, i) {
            return Re(this, t, i)
        },
        forEachInEdge: function(t, i) {
            return De(this, t, i)
        },
        getEdges: function() {
            var t = [];
            return this[Au](function(i) {
                t.push(i)
            }), t
        },
        _ig: null,
        _gc: null,
        _jg: null,
        _ie: null,
        _my7: 0,
        _8v: 0,
        hasInEdge: function() {
            return null != this._ig
        },
        hasOutEdge: function() {
            return null != this._gc
        },
        hasEdge: function() {
            return null != this._ig || null != this._gc || this[RT]()
        },
        linkedWith: function(t) {
            return t.from == this || t.to == this || t[Tu] == this || t[wu] == this
        },
        hasEdgeWith: function(t) {
            var i = this[ku](t);
            return i && i.edges[length] > 0
        },
        _kl: null,
        _3z: null,
        hasLoops: function() {
            return this._kl && this._kl[length] > 0
        },
        _ib: function(t) {
            return this._kl || (this._kl = new fz, this._3z = new QU(this, this, this._kl)), this._3z._il(t)
        },
        _n2j: function(t) {
            return this._3z ? this._3z._dg(t) : void 0
        },
        getEdgeBundle: function(t) {
            return t == this ? this._3z : this[DT][t.id] || t[DT][this.id]
        },
        _6m: function() {
            return this._8z && this._8z[length]
        },
        _4w: function() {
            return this._8c && this._8c[length]
        },
        _8y: function() {
            return this._6m() || this._4w()
        },
        _8c: null,
        _8z: null,
        _n0y: function() {
            var t = this._dt,
                i = be(this);
            if (t != i) {
                var n = Le(this);
                this._91(i), n[Jf](function(t) {
                    var i = t[Tu],
                        n = t[wu],
                        t = t[tc],
                        e = t.$from._dt,
                        s = t.$to._dt;
                    i != n && (i && me(i, t, n || t.$to), n && Ee(n, t, i || t.$from)), e != s && (e && pe(e, t, s || t.$to), s && xe(s, t, e || t[Lu]), ye(e || t[Lu], t, s || t.$to))
                }, this)
            }
        },
        onParentChanged: function() {
            this[$k](), this._n0y()
        },
        _8a: null,
        _$x: function() {
            var t;
            if (this._3u ? t = null : (t = this._dt, t || this._go !== !1 || (t = this)), this._8a == t) return !1;
            if (this._8a = t, this._fp && this._fp._jk[length]) for (var i, n = this._fp._jk, e = 0, s = n[length]; s > e; e++) i = n[e], i instanceof Cq && i._91(t)
        },
        setLocation: function(t, i) {
            if (this[PT] && this.$location.x == t && this.$location.y == i) return !1;
            var n;
            n = this[PT] ? {
                x: this.$location.x,
                y: this[PT].y
            } : this[PT];
            var e = new Oz(this, NT, n, {
                x: t,
                y: i
            });
            return this.beforeEvent(e) === !1 ? !1 : (this[PT] ? (this.$location.x = t, this[PT].y = i) : this[PT] = new _z(t, i), this[hh](e), !0)
        },
        _ds: null,
        addFollower: function(t) {
            return null == t ? !1 : t[BT] = this
        },
        removeFollower: function(t) {
            return this._ds && this._ds.contains(t) ? t.host = null : !1
        },
        hasFollowers: function() {
            return this._ds && !this._ds[$f]()
        },
        toFollowers: function() {
            return this[$T]() ? this._ds.toDatas() : null
        },
        clearFollowers: function() {
            this[$T]() && (this[FT](), l(this.toFollowers(), function(t) {
                t.host = null
            }))
        },
        getFollowerIndex: function(t) {
            return this._ds && this._ds[Zc](t) ? this._ds.indexOf(t) : -1
        },
        setFollowerIndex: function(t, i) {
            return this._ds && this._ds.contains(t) ? void this._ds[pv](t, i) : -1
        },
        getFollowerCount: function() {
            return this._ds ? this._ds[length] : 0
        },
        _90: function() {
            return this._ds ? this._ds : (this._ds = new fz, this._ds)
        },
        isFollow: function(t) {
            if (!t || !this[GT]) return !1;
            for (var i = this[GT]; i;) {
                if (i == t) return !0;
                i = i._host
            }
            return !1
        },
        _91: function(t) {
            return t == this._dt ? !1 : (this._dt = t, this[$k](), void this._$x())
        },
        type: zT
    }, E(Cq, jq), J(Cq.prototype, {
        loops: {
            get: function() {
                return this._kl
            }
        },
        edgeCount: {
            get: function() {
                return this[Mu] + this._8v
            }
        },
        agentNode: {
            get: function() {
                return this._dt || this
            }
        },
        host: {
            set: function(t) {
                if (this == t || t == this[GT]) return !1;
                var i = new Oz(this, BT, this._host, t);
                if (!1 === this[zl](i)) return !1;
                var n = null,
                    e = null,
                    s = this[GT];
                if (null != t && (n = new Oz(t, YT, null, this), !1 === t[zl](n))) return !1;
                if (null != s && (e = new Oz(s, HT, null, this), !1 === s[zl](e))) return !1;
                if (this[GT] = t, null != t) {
                    var r = t._90();
                    r.add(this)
                }
                if (null != s) {
                    var r = s._90();
                    r.remove(this)
                }
                return this[hh](i), null != t && t[hh](n), null != s && s[hh](e), !0
            },
            get: function() {
                return this[GT]
            }
        }
    }), S(Cq[prototype], [NT, Bw, zp, jo, qT]), J(Cq[prototype], {
        x: {
            get: function() {
                return this[NT].x
            },
            set: function(t) {
                t != this.location.x && (this[NT] = new _z(t, this[NT].y))
            }
        },
        y: {
            get: function() {
                return this.location.y
            },
            set: function(t) {
                t != this.location.y && (this[NT] = new _z(this.location.x, t))
            }
        }
    });
    var Aq = function(t, i) {
        t instanceof aH && (i = t, t = n), w(this, Aq, [t]), this[UT] = i || new aH, this.anchorPosition = null, this[Xk] = ar, oz[WT] || (oz[WT] = {}, oz.SHAPENODE_STYLES[Nq[XT]] = !1), this.putStyles(oz[WT])
    };
    Aq[prototype] = {
        $uiClass: ar,
        type: VT,
        moveTo: function(t, i) {
            this[UT][Ru](t, i), this[jT]()
        },
        lineTo: function(t, i) {
            this.path[Du](t, i), this[jT]()
        },
        quadTo: function(t, i, n, e) {
            this.path[Nu](t, i, n, e), this.firePathChange()
        },
        curveTo: function(t, i, n, e, s, r) {
            this[UT][Bu](t, i, n, e, s, r), this[jT]()
        },
        arcTo: function(t, i, n, e, s) {
            this.path[dp](t, i, n, e, s), this[jT]()
        },
        closePath: function() {
            this.path[of](), this[jT]()
        },
        clear: function() {
            this[UT].clear(), this[jT]()
        },
        removePathSegmentByIndex: function(t) {
            this[UT][ZT](t) !== !1 && this.firePathChange()
        },
        firePathChange: function() {
            this[UT]._6b = !0, this.onEvent(new Oz(this, OT))
        }
    }, E(Aq, Cq), J(Aq[prototype], {
        path: {
            get: function() {
                return this[zp]
            },
            set: function(t) {
                this[zp] = t
            }
        },
        pathSegments: {
            get: function() {
                return this[UT][JT]
            },
            set: function(t) {
                this[UT][JT] = t || [], this[jT]()
            }
        },
        length: {
            get: function() {
                return this[UT][length]
            }
        }
    }), wY.ShapeNode = Aq;
    var Lq = {
        _jm: {},
        register: function(t, i) {
            Lq._jm[t] = i
        },
        getShape: function(t, i, e, s, r, h) {
            s === n && (s = i, r = e, i = 0, e = 0), s || (s = 50), r || (r = 50);
            var a = Lq._jm[t];
            return a ? a[KT] instanceof Function ? a[KT](i, e, s, r, h) : a : void 0
        },
        getRect: function(t, i, n, e, s, r, h) {
            return t instanceof Object && Da in t && (i = t.y, n = t[Da], e = t.height, s = t.rx, r = t.ry, h = t[UT], t = t.x), Ne(h || new aH, t, i, n, e, s, r)
        },
        getAllShapes: function(t, i, n, e, s) {
            var r = {};
            for (var h in Lq._jm) {
                var a = Lq.getShape(h, t, i, n, e, s);
                a && (r[h] = a)
            }
            return r
        },
        createRegularShape: function(t, i, n, e, s) {
            return He(t, i, n, e, s)
        }
    };
    es(), ss.prototype = {
        type: QT
    }, E(ss, Aq), wY.Bus = ss, rs[prototype] = {
        _g7: function(t) {
            var i, n = t._jp;
            i = n ? n._fp : this[gv];
            var e = i[indexOf](t);
            if (0 > e) throw new Error(Tv + t + "' not exist in the box");
            for (; e >= 0;) {
                if (0 == e) return n instanceof Cq ? n : null;
                e -= 1;
                var r = i.getByIndex(e);
                if (r = s(r)) return r
            }
            return null
        },
        forEachNode: function(t, i) {
            this[Jf](function(n) {
                return n instanceof Cq && t.call(i, n) === !1 ? !1 : void 0
            })
        },
        _3l: null
    }, E(rs, Fz), J(rs.prototype, {
        propertyChangeDispatcher: {
            get: function() {
                return this._$q
            }
        },
        currentSubNetwork: {
            get: function() {
                return this._3l
            },
            set: function(t) {
                if (t && !t[e_] && (t = null), this._3l != t) {
                    var i = this._3l;
                    this._3l = t, this._$q[hh](new Oz(this, tM, t, i))
                }
            }
        }
    }), oz.GROUP_TYPE = kY[iM], oz.GROUP_PADDING = 5, oz[nM] = !0, oz[eM] = {
        width: 60,
        height: 60
    };
    var Pq = function(t, i, e) {
        w(this, Pq, arguments), (i === n || e === n) && (this[PT].invalidateFlag = !0), this.$groupType = oz.GROUP_TYPE, this[mf] = oz[sM], this[ic] = uH[rM], this[hM] = oz.GROUP_MIN_SIZE, this[Vk] = oz.GROUP_EXPANDED
    };
    Pq[prototype] = {
        type: aM,
        $uiClass: nr,
        _8w: function() {
            return !this._go && !this._dt
        },
        forEachOutEdge: function(t, i, n) {
            return Re(this, t, i) === !1 ? !1 : !n && this._8w() && this._8c ? this._8c.forEach(t, i) : void 0
        },
        forEachInEdge: function(t, i, n) {
            return De(this, t, i) === !1 ? !1 : !n && this._8w() && this._8z ? this._8z[Jf](t, i) : void 0
        },
        forEachEdge: function(t, i, n) {
            return k(this, Pq, Au, arguments) === !1 ? !1 : n || n || !this._8w() ? void 0 : this._8z && this._8z.forEach(t, i) === !1 ? !1 : this._8c ? this._8c.forEach(t, i) : void 0
        },
        hasInEdge: function(t) {
            return t ? null != this._ig : null != this._ig || this._6m()
        },
        hasOutEdge: function(t) {
            return t ? null != this._gc : null != this._gc || this._4w()
        },
        hasEdge: function(t) {
            return t ? null != this._ig || null != this._gc : null != this._ig || null != this._gc || this._8y()
        }
    }, E(Pq, Cq), J(Pq[prototype], {
        expanded: {
            get: function() {
                return this._go
            },
            set: function(t) {
                if (this._go != t) {
                    var i = new Oz(this, Vk, t, this._go);
                    this[zl](i) !== !1 && (this._go = t, this._$x(), this[hh](i), this._dt || hs.call(this))
                }
            }
        }
    }), S(Pq[prototype], [oM, fM, Ho, uM]), wY.Group = Pq, as[prototype][Oo] = cM, E(as, Cq), wY.Text = as;
    var BaseUI = function(t) {
        this._jb = new bz, this._7q = new bz, this._fl = new bz, this.id = ++qG, t && (this[ko] = t)
    };
    BaseUI[prototype] = {
        invalidate: function() {
            this[Jk]()
        },
        _1h: !0,
        _jb: null,
        _7q: null,
        _fl: null,
        _myp: !1,
        _jo: 1,
        _ji: 1,
        _hz: !0,
        _7s: 0,
        _73: 0,
        _jp: null,
        _myt: null,
        borderColor: _M,
        borderLineDash: null,
        borderLineDashOffset: null,
        syncSelection: !0,
        syncSelectionStyles: !0,
        _13: function() {
            this[dM] = fi(this[qT], this._7s, this._73)
        },
        setMeasuredBounds: function(t, i, n, e) {
            return t instanceof Object && (n = t.x, e = t.y, i = t[Na], t = t[Da]), this._jb[Da] == t && this._jb[Na] == i && this._jb.x == n && this._jb.y == e ? !1 : void this._jb.set(n || 0, e || 0, t || 0, i || 0)
        },
        initialize: function() {},
        measure: function() {},
        draw: function() {},
        _7p: function(t, i, n) {
            n[lm] == kY.SELECTION_TYPE_SHADOW ? (t.shadowColor = n.selectionColor, t[Ap] = n.selectionShadowBlur * i, t.shadowOffsetX = (n[lM] || 0) * i, t[Lp] = (n[cm] || 0) * i) : this._1r(t, i, n)
        },
        _1r: function(t, i, n) {
            var e = n.selectionBorder || 0;
            n[vM] && (t[Tp] = n[vM], t[bM](this._7q.x - e / 2, this._7q.y - e / 2, this._7q.width + e, this._7q.height + e)), t.strokeStyle = n.selectionColor, t[To] = e, t[yM](this._7q.x - e / 2, this._7q.y - e / 2, this._7q[Da] + e, this._7q.height + e)
        },
        _j7: function(t, i, n, e) {
            if (!this._hz) return !1;
            if (this[gM] || (n = this[Uk]), (n && !this[pM] || !e) && (e = this), t[Qa](), 1 != this.$alpha && (t.globalAlpha = this[mM]), t[to](this.$x, this.$y), this[lf] && this[vf] && t.rotate(this[vf]), (this[xM] || this[EM]) && t[to](this[xM], this[EM]), this[cf] && t[jo](this[cf]), this[bf] && this[uf] && t[to](-this[uf].x, -this[uf].y), this[S_] && (t[S_] = this.shadowColor, t[Ap] = this[Ap] * i, t[wM] = this[wM] * i, t[Lp] = this[Lp] * i), n && e[lm] == kY.SELECTION_TYPE_BORDER_RECT && (this._1r(t, i, e), n = !1), this._$m() && this[Mf] && !this[Mf][kM]) {
                this[Mf][vo]();
                var s = {
                    lineWidth: this[Ef],
                    strokeStyle: this[TM],
                    lineDash: this[MM],
                    lineDashOffset: this[IM],
                    fillColor: this[OM],
                    fillGradient: this[Tf],
                    lineCap: Jg,
                    lineJoin: po
                };
                this[Mf][$o](t, i, s, n, e), n = !1, t[S_] = Lm
            }
            t[ym](), this[$o](t, i, n, e), t[Pm]()
        },
        invalidateData: function() {
            this.$invalidateData = !0, this.$invalidateSize = !0, this._1h = !0
        },
        invalidateSize: function() {
            this[yf] = !0, this._1h = !0
        },
        invalidateRender: function() {
            this._1h = !0
        },
        _4s: function() {},
        _$m: function() {
            return this[OM] || this[jM] || this[Ef]
        },
        _3s: function() {
            return this[OM] || this[jM]
        },
        doValidate: function() {
            return this[SM] && (this.$invalidateData = !1, this[CM]() !== !1 && (this[yf] = !0)), this.$invalidateSize && this.validateSize && this[AM](), zn.call(this) ? (this[Lx] = !0, this[LM] && this[LM](), !0) : this[PM] ? (this.$invalidateRotate = !0, this[PM] = !1, !0) : void 0
        },
        validate: function() {
            var t = this._hz;
            return this.$invalidateVisibility && (this[RM] = !1, this._hz = this.$visible, !this._hz || (this.$data || this[DM]) && this._4s() !== !1 || (this._hz = !1)), this._hz ? (this._1h = !1, this[nc] || (this[NM](), this[nc] = !0), this[BM]()) : t != this._hz
        },
        _ik: function(t, i) {
            return t -= this.$x, i -= this.$y, Gn[call](this, {
                x: t,
                y: i
            })
        },
        hitTest: function(t, i, n, e) {
            if (t -= this.$x, i -= this.$y, !this._fl.intersectsPoint(t, i, n)) return !1;
            var s = Gn[call](this, {
                x: t,
                y: i
            });
            return t = s.x, i = s.y, !e && this._$m() && this[Mf] && this[Mf][Jc](t, i, n, !1, this.$border, this[OM] || this.$backgroundGradient) ? !0 : this[$M](t, i, n)
        },
        doHitTest: function(t, i, n) {
            return this._jb[go](t, i, n)
        },
        hitTestByBounds: function(t, i, n, e) {
            var s = this._ik(t, i);
            return !e && this._$m() && this[Mf] && this[Mf][Jc](t, i, n, !1, this[Ef], this[OM] || this.$backgroundGradient) ? !0 : this._jb[go](s.x, s.y, n)
        },
        onDataChanged: function() {
            this[SM] = !0, this._1h = !0, this[RM] = !0
        },
        getBounds: function() {
            var t = this._fl.clone();
            return t[_p](this.x, this.y), this.parent && (this.parent.rotate && Oi(t, this[Eu][jo], t), t[_p](this[Eu].x || 0, this[Eu].y || 0)), t
        },
        destroy: function() {
            this._i5ed = !0
        },
        _dm: !1
    }, J(BaseUI.prototype, {
        originalBounds: {
            get: function() {
                return this._jb
            }
        },
        data: {
            get: function() {
                return this[Bf]
            },
            set: function(t) {
                if (this[Bf] != t) {
                    var i = this[Bf];
                    this.$data = t, this.onDataChanged(t, i)
                }
            }
        },
        parent: {
            get: function() {
                return this._jp
            }
        },
        showOnTop: {
            get: function() {
                return this._dm
            },
            set: function(t) {
                t != this._dm && (this._dm = t, this._1h = !0, this._jp && this._jp[FM] && this._jp[FM](this))
            }
        }
    }), fs(BaseUI.prototype, {
        visible: {
            value: !0,
            validateFlags: [GM, zM]
        },
        showEmpty: {
            validateFlags: [GM]
        },
        anchorPosition: {
            value: gz[yl],
            validateFlags: [YM, zM]
        },
        position: {
            value: gz[yl],
            validateFlags: [zM]
        },
        offsetX: {
            value: 0,
            validateFlags: [zM]
        },
        offsetY: {
            value: 0,
            validateFlags: [zM]
        },
        layoutByAnchorPoint: {
            value: !0,
            validateFlags: [zy, YM, zM]
        },
        padding: {
            value: 0,
            validateFlags: [zy]
        },
        border: {
            value: 0,
            validateFlags: [zy]
        },
        borderRadius: {
            value: oz[op]
        },
        showPointer: {
            value: !1,
            validateFlags: [zy]
        },
        pointerX: {
            value: 0,
            validateFlags: [zy]
        },
        pointerY: {
            value: 0,
            validateFlags: [zy]
        },
        pointerWidth: {
            value: oz[fp]
        },
        backgroundColor: {
            validateFlags: [zy]
        },
        backgroundGradient: {
            validateFlags: [zy, HM]
        },
        selected: {
            value: !1,
            validateFlags: [zy]
        },
        selectionBorder: {
            value: oz[rp],
            validateFlags: [zy]
        },
        selectionShadowBlur: {
            value: oz.SELECTION_SHADOW_BLUR,
            validateFlags: [zy]
        },
        selectionColor: {
            value: oz[ap],
            validateFlags: [zy]
        },
        selectionType: {
            value: oz.SELECTION_TYPE,
            validateFlags: [zy]
        },
        selectionShadowOffsetX: {
            value: 0,
            validateFlags: [zy]
        },
        selectionShadowOffsetY: {
            value: 0,
            validateFlags: [zy]
        },
        shadowBlur: {
            value: 0,
            validateFlags: [zy]
        },
        shadowColor: {
            validateFlags: [zy]
        },
        shadowOffsetX: {
            value: 0,
            validateFlags: [zy]
        },
        shadowOffsetY: {
            value: 0,
            validateFlags: [zy]
        },
        renderColorBlendMode: {},
        renderColor: {},
        x: {
            value: 0,
            validateFlags: [zM]
        },
        y: {
            value: 0,
            validateFlags: [zM]
        },
        rotatable: {
            value: !0,
            validateFlags: [qM, zy]
        },
        rotate: {
            value: 0,
            validateFlags: [qM, zy]
        },
        _hostRotate: {
            validateFlags: [qM]
        },
        lineWidth: {
            value: 0,
            validateFlags: [Vy]
        },
        alpha: {
            value: 1
        }
    });
    var Dq = [kY[uc], kY[UM], kY[nv]];
    cs[prototype] = {
        removeBinding: function(t) {
            for (var i = Dq[length]; --i >= 0;) {
                var n = Dq[i],
                    e = this[n];
                for (var s in e) {
                    var r = e[s];
                    Array[Eh](r) ? (v(r, function(i) {
                        return i[rc] == t
                    }, this), r.length || delete e[s]) : r[rc] == t && delete e[s]
                }
            }
        },
        _1q: function(t, i, n) {
            if (!n && (n = this[i[Ol] || kY[uc]], !n)) return !1;
            var e = n[t];
            e ? (Array[Eh](e) || (n[t] = e = [e]), e.push(i)) : n[t] = i
        },
        _2a: function(t, i, n, e, s, r) {
            t = t || kY[uc];
            var h = this[t];
            if (!h) return !1;
            var a = {
                property: i,
                propertyType: t,
                bindingProperty: e,
                target: n,
                callback: s,
                invalidateSize: r
            };
            this._1q(i, a, h)
        },
        onBindingPropertyChange: function(t, i, n, e) {
            var s = this[n || kY.PROPERTY_TYPE_ACCESSOR];
            if (!s) return !1;
            var r = s[i];
            return r ? (t._1h = !0, us(t, r, n, e), !0) : !1
        },
        initBindingProperties: function(t, i) {
            for (var e = Dq[length]; --e >= 0;) {
                var s = Dq[e],
                    r = this[s];
                for (var h in r) {
                    var a = r[h];
                    if (a[oc]) {
                        var o = a[rc];
                        if (o) {
                            if (!(o instanceof BaseUI || (o = t[o]))) continue
                        } else o = t;
                        var f;
                        f = i === !1 ? t[hc](a[ac], s) : s == kY.PROPERTY_TYPE_STYLE ? t[Gc].getStyle(t[Bf], a.property) : t[Bf][a.property], f !== n && (o[a.bindingProperty] = f)
                    }
                }
            }
        }
    };
    var Nq = {};
    Nq[ap] = WM, Nq[rp] = XM, Nq[hp] = "selection.shadow.blur", Nq[VM] = "selection.shadow.offset.x", Nq[ZM] = "selection.shadow.offset.y", Nq[ep] = JM, Nq.RENDER_COLOR = KM, Nq.RENDER_COLOR_BLEND_MODE = "render.color.blend.mode", Nq[QM] = tI, Nq[iI] = nI, Nq[eI] = sI, Nq[rI] = hI, Nq[aI] = oI, Nq[fI] = uI, Nq[cI] = _I, Nq[dI] = lI, Nq[vI] = "shape.line.dash.offset", Nq[bI] = yI, Nq[gI] = pI, Nq[mI] = xI, Nq[EI] = wI, Nq.LINE_CAP = kI, Nq.LINE_JOIN = TI, Nq.LAYOUT_BY_PATH = MI, Nq.BACKGROUND_COLOR = II, Nq[OI] = jI, Nq.BORDER = SI, Nq.BORDER_COLOR = CI, Nq[AI] = LI, Nq[PI] = "border.line.dash.offset", Nq[op] = RI, Nq[DI] = Ho, Nq[NI] = "image.background.color", Nq[BI] = "image.background.gradient", Nq.IMAGE_BORDER = $I, Nq[FI] = Nq[GI] = zI, Nq[YI] = "image.border.line.dash", Nq[HI] = "image.border.line.dash.offset", Nq[qI] = Nq[UI] = WI, Nq[XI] = VI, Nq[ZI] = JI, Nq[KI] = QI, Nq[tO] = iO, Nq[nO] = eO, Nq.LABEL_POSITION = sO, Nq[rO] = hO, Nq[aO] = "label.anchor.position", Nq[oO] = fO, Nq[uO] = cO, Nq[_O] = dO, Nq[lO] = vO, Nq[bO] = yO, Nq.LABEL_POINTER_WIDTH = gO, Nq[pO] = mO, Nq[xO] = EO, Nq[wO] = kO, Nq[TO] = MO, Nq[IO] = OO, Nq[jO] = SO, Nq.LABEL_BORDER = CO, Nq[AO] = LO, Nq[PO] = "label.background.color", Nq[RO] = "label.background.gradient", Nq[DO] = NO, Nq[BO] = $O, Nq[FO] = GO, Nq[zO] = "label.shadow.offset.x", Nq[YO] = "label.shadow.offset.y", Nq[HO] = qO, Nq[UO] = WO, Nq[XO] = "group.background.color", Nq[VO] = "group.background.gradient", Nq[ZO] = JO, Nq[KO] = QO, Nq.GROUP_STROKE_LINE_DASH = "group.stroke.line.dash", Nq[tj] = "group.stroke.line.dash.offset", Nq[ij] = "edge.bundle.label.rotate", Nq[nj] = "edge.bundle.label.position", Nq.EDGE_BUNDLE_LABEL_ANCHOR_POSITION = "edge.bundle.label.anchor.position", Nq[ej] = "edge.bundle.label.color", Nq[sj] = "edge.bundle.label.font.size", Nq[rj] = "edge.bundle.label.font.family", Nq.EDGE_BUNDLE_LABEL_FONT_STYLE = "edge.bundle.label.font.style", Nq.EDGE_BUNDLE_LABEL_PADDING = "edge.bundle.label.padding", Nq[hj] = "edge.bundle.label.pointer.width", Nq[aj] = "edge.bundle.label.pointer", Nq.EDGE_BUNDLE_LABEL_RADIUS = "edge.bundle.label.radius", Nq.EDGE_BUNDLE_LABEL_OFFSET_X = "edge.bundle.label.offset.x", Nq.EDGE_BUNDLE_LABEL_OFFSET_Y = "edge.bundle.label.offset.y", Nq[oj] = "edge.bundle.label.border", Nq[fj] = "edge.bundle.label.border.color", Nq[uj] = "edge.bundle.label.background.color", Nq.EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT = "edge.bundle.label.background.gradient", Nq[cj] = "edge.bundle.label.rotatable", Nq[_j] = dj, Nq[lj] = vj, Nq[bj] = yj, Nq[gj] = pj, Nq[mj] = xj, Nq[Ej] = "edge.line.dash.offset", Nq[wj] = kj, Nq.EDGE_TO_OFFSET = Tj, Nq.EDGE_BUNDLE_GAP = Mj, Nq[Qc] = Ij, Nq.EDGE_EXTEND = Oj, Nq[Ac] = jj, Nq.EDGE_SPLIT_BY_PERCENT = "edge.split.by.percent", Nq[Tc] = Sj, Nq[dc] = Cj, Nq[Ic] = Aj, Nq[jc] = Lj, Nq[Pj] = Rj, Nq[Dj] = Nj, Nq.ARROW_FROM = Bj, Nq[$j] = Fj, Nq[Gj] = zj, Nq[Yj] = Hj, Nq[qj] = "arrow.from.stroke.style", Nq.ARROW_FROM_OUTLINE = Uj, Nq[Wj] = "arrow.from.outline.style", Nq.ARROW_FROM_LINE_DASH = Xj, Nq[Vj] = "arrow.from.line.dash.offset", Nq[Zj] = "arrow.from.fill.color", Nq.ARROW_FROM_FILL_GRADIENT = "arrow.from.fill.gradient", Nq.ARROW_FROM_LINE_CAP = Jj, Nq.ARROW_FROM_LINE_JOIN = Kj, Nq[XT] = Qj, Nq[tS] = iS, Nq[nS] = eS, Nq[sS] = rS, Nq.ARROW_TO_STROKE_STYLE = "arrow.to.stroke.style", Nq.ARROW_TO_OUTLINE = hS, Nq[aS] = "arrow.to.outline.style", Nq[oS] = fS, Nq[uS] = "arrow.to.line.dash.offset", Nq[cS] = _S, Nq[dS] = "arrow.to.fill.gradient", Nq[lS] = vS, Nq[bS] = yS;
    var Bq = new cs,
        $q = kY[uc],
        Fq = kY[UM],
        Gq = !1;
    Bq._2a(Fq, Nq.SELECTION_TYPE, null, lm), Bq._2a(Fq, Nq[rp], null, _m), Bq._2a(Fq, Nq[hp], null, um), Bq._2a(Fq, Nq[ap], null, fm), Bq._2a(Fq, Nq[VM], null, "selectionShadowOffsetX"), Bq._2a(Fq, Nq[ZM], null, "selectionShadowOffsetY"), Bq._2a($q, ah, _E, ko), Bq._2a(Fq, Nq[rO], _E, rk), Bq._2a(Fq, Nq[gS], _E, Vp), Bq._2a(Fq, Nq[aO], _E, qT), Bq._2a(Fq, Nq[oO], _E, pS), Bq._2a(Fq, Nq.LABEL_FONT_SIZE, _E, V_), Bq._2a(Fq, Nq[mS], _E, ug), Bq._2a(Fq, Nq.LABEL_BORDER_STYLE, _E, TM), Bq._2a(Fq, Nq[PO], _E, xS), Bq._2a(Fq, Nq.LABEL_ON_TOP, _E, ES), Gq || (Bq._2a(Fq, Nq.SHADOW_BLUR, null, Ap), Bq._2a(Fq, Nq.SHADOW_COLOR, null, S_), Bq._2a(Fq, Nq[rI], null, wM), Bq._2a(Fq, Nq.SHADOW_OFFSET_Y, null, Lp), Bq._2a(Fq, Nq.LABEL_FONT_FAMILY, _E, Z_), Bq._2a(Fq, Nq[lO], _E, X_), Bq._2a(Fq, Nq[jO], _E, wS), Bq._2a(Fq, Nq[nO], _E, jo), Bq._2a(Fq, Nq[bO], _E, Ho), Bq._2a(Fq, Nq[kS], _E, TS), Bq._2a(Fq, Nq[pO], _E, MS), Bq._2a(Fq, Nq.LABEL_RADIUS, _E, IS), Bq._2a(Fq, Nq.LABEL_OFFSET_X, _E, xM), Bq._2a(Fq, Nq[TO], _E, EM), Bq._2a(Fq, Nq.LABEL_ROTATABLE, _E, OS), Bq._2a(Fq, Nq[RO], _E, If), Bq._2a(Fq, Nq.LABEL_SIZE, _E, Bw), Bq._2a(Fq, Nq[BO], _E, Ap), Bq._2a(Fq, Nq.LABEL_SHADOW_COLOR, _E, S_), Bq._2a(Fq, Nq[zO], _E, wM), Bq._2a(Fq, Nq[YO], _E, Lp), Bq._2a(Fq, Nq[HO], _E, Vw), Bq._2a(Fq, Nq[jS], null, Dp), Bq._2a(Fq, Nq.RENDER_COLOR_BLEND_MODE, null, Np), Bq._2a(Fq, Nq[QM], null, tI));
    var zq = new cs;
    zq._2a($q, NT), zq._2a($q, qT, null, SS), zq._2a($q, jo, null, jo), Gq || (zq._2a(Fq, Nq[CS], null, xS), zq._2a(Fq, Nq[OI], null, If), zq._2a(Fq, Nq[DI], null, Ho), zq._2a(Fq, Nq[AS], null, ug), zq._2a(Fq, Nq.BORDER_RADIUS, null, IS), zq._2a(Fq, Nq[LS], null, TM), zq._2a(Fq, Nq.BORDER_LINE_DASH, null, MM), zq._2a(Fq, Nq[PI], null, IM)), zq._2a($q, zp, zp, ko, PS), zq._2a($q, Bw, zp, Bw), zq._2a(Fq, Nq[fI], zp, To), zq._2a(Fq, Nq[cI], zp, O_), zq._2a(Fq, Nq[bI], zp, RS), zq._2a(Fq, Nq.LAYOUT_BY_PATH, zp, Df), Gq || (zq._2a(Fq, Nq[KI], zp, DS), zq._2a(Fq, Nq[mI], zp, NS), zq._2a(Fq, Nq[EI], zp, vm), zq._2a(Fq, Nq.SHAPE_FILL_GRADIENT, zp, bm), zq._2a(Fq, Nq[dI], zp, Ff), zq._2a(Fq, Nq.SHAPE_LINE_DASH_OFFSET, zp, Wf), zq._2a(Fq, Nq[BS], zp, dm), zq._2a(Fq, Nq[$S], zp, I_), zq._2a(Fq, Nq.IMAGE_BACKGROUND_COLOR, zp, xS), zq._2a(Fq, Nq[BI], zp, If), zq._2a(Fq, Nq.IMAGE_PADDING, zp, Ho), zq._2a(Fq, Nq.IMAGE_BORDER, zp, ug), zq._2a(Fq, Nq[UI], zp, IS), zq._2a(Fq, Nq[GI], zp, TM), zq._2a(Fq, Nq[YI], zp, MM), zq._2a(Fq, Nq[HI], zp, IM), zq._2a(Fq, Nq[ZI], zp, Vw), zq._2a(Fq, Nq.IMAGE_ALPHA, zp, tI)), zq._2a($q, Vk, null, null, FS), zq._2a($q, e_, null, null, FS);
    var Yq = new cs;
    Yq._2a($q, fM, null, null, GS), Yq._2a($q, uM, null, null, GS), Yq._2a($q, oM, null, null, GS), Yq._2a($q, Ho, null, null, GS), Yq._2a(Fq, Nq[XO], zS, RS), Yq._2a(Fq, Nq[VO], zS, bm), Yq._2a(Fq, Nq[ZO], zS, To), Yq._2a(Fq, Nq[KO], zS, O_), Yq._2a(Fq, Nq[YS], zS, Ff), Yq._2a(Fq, Nq.GROUP_STROKE_LINE_DASH_OFFSET, zS, Wf);
    var Hq = new cs;
    Hq._2a($q, gd, zS, null, HS), Hq._2a($q, ST, zS, null, HS), Hq._2a($q, CT, zS, null, HS), Hq._2a(Fq, Nq[qS], zS, null, HS), Hq._2a(Fq, Nq[_j], zS, To), Hq._2a(Fq, Nq.EDGE_COLOR, zS, O_), Hq._2a(Fq, Nq[US], zS, WS), Hq._2a(Fq, Nq.ARROW_TO, zS, XS), Gq || (Hq._2a(Fq, Nq[Pj], null, Wc, HS), Hq._2a(Fq, Nq[Dj], null, Xc, HS), Hq._2a(Fq, Nq[bj], zS, NS), Hq._2a(Fq, Nq[gj], zS, vm), Hq._2a(Fq, Nq.EDGE_LINE_DASH, zS, Ff), Hq._2a(Fq, Nq[Ej], zS, Wf), Hq._2a(Fq, Nq[Ac], zS, null, HS), Hq._2a(Fq, Nq[wj], zS, null, HS), Hq._2a(Fq, Nq[VS], zS, null, HS), Hq._2a(Fq, Nq[BS], zS, dm), Hq._2a(Fq, Nq.LINE_JOIN, zS, I_), Hq._2a($q, OT, null, null, HS, !0), Hq._2a($q, qc, null, null, HS, !0), Hq._2a(Fq, Nq[$j], zS, ZS), Hq._2a(Fq, Nq[Gj], zS, JS), Hq._2a(Fq, Nq.ARROW_FROM_STROKE, zS, KS), Hq._2a(Fq, Nq[qj], zS, QS), Hq._2a(Fq, Nq[tC], zS, iC), Hq._2a(Fq, Nq[Wj], zS, "fromArrowOutlineStyle"), Hq._2a(Fq, Nq[Zj], zS, nC), Hq._2a(Fq, Nq[eC], zS, "fromArrowFillGradient"), Hq._2a(Fq, Nq[sC], zS, rC), Hq._2a(Fq, Nq[Vj], zS, "fromArrowLineDashOffset"), Hq._2a(Fq, Nq[hC], zS, aC), Hq._2a(Fq, Nq[oC], zS, fC), Hq._2a(Fq, Nq.ARROW_TO_SIZE, zS, uC), Hq._2a(Fq, Nq[nS], zS, cC), Hq._2a(Fq, Nq[sS], zS, _C), Hq._2a(Fq, Nq[dC], zS, lC), Hq._2a(Fq, Nq[vC], zS, bC), Hq._2a(Fq, Nq[aS], zS, yC), Hq._2a(Fq, Nq[cS], zS, gC), Hq._2a(Fq, Nq[dS], zS, pC), Hq._2a(Fq, Nq[oS], zS, mC), Hq._2a(Fq, Nq.ARROW_TO_LINE_DASH_OFFSET, zS, "toArrowLineDashOffset"), Hq._2a(Fq, Nq[bS], zS, xC), Hq._2a(Fq, Nq[lS], zS, EC));
    var qq = new cs;
    qq._2a(Fq, Nq.EDGE_BUNDLE_LABEL_COLOR, wC, pS), qq._2a(Fq, Nq[nj], wC, Vp), qq._2a(Fq, Nq[kC], wC, qT), qq._2a(Fq, Nq.EDGE_BUNDLE_LABEL_FONT_SIZE, wC, V_), qq._2a(Fq, Nq[cj], wC, OS), Gq || (qq._2a(Fq, Nq.EDGE_BUNDLE_LABEL_ROTATE, wC, jo), qq._2a(Fq, Nq[rj], wC, Z_), qq._2a(Fq, Nq.EDGE_BUNDLE_LABEL_FONT_STYLE, wC, X_), qq._2a(Fq, Nq.EDGE_BUNDLE_LABEL_PADDING, wC, Ho), qq._2a(Fq, Nq[hj], wC, TS), qq._2a(Fq, Nq[aj], wC, MS), qq._2a(Fq, Nq[TC], wC, IS), qq._2a(Fq, Nq[MC], wC, xM), qq._2a(Fq, Nq[IC], wC, EM), qq._2a(Fq, Nq[oj], wC, ug), qq._2a(Fq, Nq[fj], wC, TM), qq._2a(Fq, Nq[uj], wC, xS), qq._2a(Fq, Nq[OC], wC, If));
    var Uq = new cs;
    Uq._2a($q, NT), Uq._2a(Fq, Nq.BACKGROUND_COLOR, null, xS), Uq._2a(Fq, Nq[OI], null, If), Uq._2a(Fq, Nq[DI], null, Ho), Uq._2a(Fq, Nq[AS], null, ug), Uq._2a(Fq, Nq[op], null, IS), Uq._2a(Fq, Nq[LS], null, TM), Uq._2a(Fq, Nq.BORDER_LINE_DASH, null, MM), Uq._2a(Fq, Nq[PI], null, IM), Uq._2a($q, jo, null, jo), Uq._2a($q, OT, null, null, jC), Uq._2a($q, UT, zp, ko), Uq._2a($q, Bw, zp, Bw), Uq._2a(Fq, Nq[fI], zp, To), Uq._2a(Fq, Nq[cI], zp, O_), Uq._2a(Fq, Nq.SHAPE_FILL_COLOR, zp, RS), Uq._2a(Fq, Nq.SHAPE_FILL_GRADIENT, zp, bm), Gq || (Uq._2a(Fq, Nq[mI], zp, NS), Uq._2a(Fq, Nq[EI], zp, vm), Uq._2a(Fq, Nq[dI], zp, Ff), Uq._2a(Fq, Nq.SHAPE_LINE_DASH_OFFSET, zp, Wf), Uq._2a(Fq, Nq[BS], zp, dm), Uq._2a(Fq, Nq[$S], zp, I_), Uq._2a(Fq, Nq.LAYOUT_BY_PATH, zp, Df), Uq._2a(Fq, Nq[NI], zp, xS), Uq._2a(Fq, Nq[BI], zp, If), Uq._2a(Fq, Nq[XI], zp, Ho), Uq._2a(Fq, Nq[SC], zp, ug), Uq._2a(Fq, Nq.IMAGE_BORDER_RADIUS, zp, IS), Uq._2a(Fq, Nq[GI], zp, TM), Uq._2a(Fq, Nq.IMAGE_BORDER_LINE_DASH, zp, MM), Uq._2a(Fq, Nq[HI], zp, IM), Uq._2a(Fq, Nq[US], zp, WS), Uq._2a(Fq, Nq[$j], zp, ZS), Uq._2a(Fq, Nq[Gj], zp, JS), Uq._2a(Fq, Nq.ARROW_FROM_STROKE, zp, KS), Uq._2a(Fq, Nq.ARROW_FROM_STROKE_STYLE, zp, QS), Uq._2a(Fq, Nq.ARROW_FROM_FILL_COLOR, zp, nC), Uq._2a(Fq, Nq.ARROW_FROM_FILL_GRADIENT, zp, "fromArrowFillGradient"), Uq._2a(Fq, Nq[sC], zp, rC), Uq._2a(Fq, Nq[Vj], zp, "fromArrowLineDashOffset"), Uq._2a(Fq, Nq[hC], zp, aC), Uq._2a(Fq, Nq.ARROW_FROM_LINE_CAP, zp, fC), Uq._2a(Fq, Nq.ARROW_TO_SIZE, zp, uC), Uq._2a(Fq, Nq.ARROW_TO_OFFSET, zp, cC), Uq._2a(Fq, Nq[XT], zp, XS), Uq._2a(Fq, Nq[sS], zp, _C), Uq._2a(Fq, Nq.ARROW_TO_STROKE_STYLE, zp, lC), Uq._2a(Fq, Nq[cS], zp, gC), Uq._2a(Fq, Nq.ARROW_TO_FILL_GRADIENT, zp, pC), Uq._2a(Fq, Nq[oS], zp, mC), Uq._2a(Fq, Nq[uS], zp, "toArrowLineDashOffset"), Uq._2a(Fq, Nq[bS], zp, xC), Uq._2a(Fq, Nq[lS], zp, EC));
    var Wq = function(t, i) {
            return t = t.zIndex, i = i[Vw], t == i ? 0 : (t = t || 0, i = i || 0, t > i ? 1 : i > t ? -1 : void 0)
        },
        ElementUI = function(t, i) {
            this[Ak] = new bz, w(this, ElementUI, arguments), this.id = this[Bf].id, this.graph = i, this._fp = [], this._n27 = new cs
        };
    ElementUI[prototype] = {
        syncSelection: !1,
        graph: null,
        layoutByAnchorPoint: !1,
        _n27: null,
        _fp: null,
        addChild: function(t, i) {
            t._jp = this, i !== n ? g(this._fp, t, i) : this._fp.push(t), t._dm && this[FM](t), this[CC](), this[AC](), this[LC] = !0
        },
        removeChild: function(t) {
            this[PC].removeBinding(t), t._jp = null, p(this._fp, t), this._js && this._js.remove(t), this[AC](), this[LC] = !0
        },
        getProperty: function(t, i) {
            return i == kY.PROPERTY_TYPE_STYLE ? this[Gc].getStyle(this.$data, t) : i == kY.PROPERTY_TYPE_CLIENT ? this[Bf].get(t) : this.$data[t]
        },
        getStyle: function(t) {
            return this.graph[_c](this[Bf], t)
        },
        _$s: function(t, i, n) {
            var e = this[PC][RC](this, t, i, n);
            return Bq[RC](this, t, i, n) || e
        },
        onPropertyChange: function(t) {
            if (Vw == t[Il]) return this[Wk](), !0;
            if (gT == t.type) {
                if (Dw == t[Il]) return this[Dw](), !0;
                var i = t.value;
                return i && i.ui ? (Jl == t[Il] ? this._9i(i) : remove == t[Il] && this[Ev](i.ui), !0) : !1
            }
            return this._$s(t[Il], t.propertyType || $q, t[J_])
        },
        label: null,
        initLabel: function() {
            var t = new Zq;
            t[ah] = _E, this[DC](t), this[_E] = t
        },
        initialize: function() {
            this.initLabel(), this.$data._n0s && this[Bf][pT][Jf](this._9i, this), Bq.initBindingProperties(this), this._n27[NC](this, !1)
        },
        addBinding: function(t, i) {
            return i[ac] ? (i[rc] = t, void this._n27._1q(i[ac], i)) : !1
        },
        _fs: function(t, i) {
            var n = this[Bf];
            if (!n._n0s) return !1;
            var e = n[pT][zd](t.id);
            if (!e || !e.bindingProperties) return !1;
            var s = e.bindingProperties;
            if ($(s)) {
                var r = !1;
                return l(s, function(t) {
                    return ko == t[oc] ? (r = _s(n, i, t[ac], t.propertyType), !1) : void 0
                }, this), r
            }
            return ko == s[oc] ? _s(n, i, s[ac], s.propertyType) : !1
        },
        _9i: function(t) {
            var i = t.ui;
            if (i) {
                var n = t[BC];
                n && (Array[Eh](n) ? n.forEach(function(t) {
                    this[$C](i, t)
                }, this) : this.addBinding(i, n)), this[DC](i)
            }
        },
        validate: function() {
            return this[nc] || (this[NM](), this[nc] = !0), this[BM]()
        },
        _$c: !0,
        invalidateChildrenIndex: function() {
            this._$c = !0
        },
        doValidate: function() {
            if (this._1h && (this._1h = !1, this[FC]() && (this.measure(), this[yf] = !0), this._$c && (this._$c = !1, tz ? this._fp = d(this._fp, Wq) : this._fp.sort(Wq))), zn.call(this) && (this[Lx] = !0), this[Lx]) {
                _H[call](this), this.uiBounds.setByRect(this._fl);
                var t = this.$selectionBorder || 0,
                    i = Math.max(this[GC] || 0, this[zC] || 0, this[YC] || 0),
                    n = Math.max(this[HC] || 0, this[qC] || 0),
                    e = Math.max(2 * t, this[UC], this[WC]);
                e += oz[XC] || 0;
                var s = e - i,
                    r = e + i,
                    h = e - n,
                    a = e + n;
                return 0 > s && (s = 0), 0 > r && (r = 0), 0 > h && (h = 0), 0 > a && (a = 0), this.uiBounds.grow(h, s, a, r), this[LM] && this[LM](), this.$invalidateBounds = !0, !0
            }
        },
        validateChildren: function() {
            var t = this[LC];
            this[LC] = !1;
            var i = this._n0ody,
                n = this[VC];
            i && (i[ZC] = this[ZC], i[JC] = this.$renderColorBlendMode, i[KC] = this[KC], i.$shadowBlur = this[UC], i[zC] = this[zC], i.$shadowOffsetY = this.$shadowOffsetY), this[VC] = !1, i && i._1h && (n = i[vo]() || n, i.$x = 0, i.$y = 0, i[Lx] && _H[call](i), t = !0);
            for (var e = 0, s = this._fp[length]; s > e; e++) {
                var r = this._fp[e];
                if (r != i) {
                    var h = r._1h && r.validate();
                    (h || n) && r._hz && Un(r, i, this), !t && h && (t = !0)
                }
            }
            return t
        },
        measure: function() {
            this._jb[Hd]();
            for (var t, i, n = 0, e = this._fp[length]; e > n; n++) t = this._fp[n], t._hz && (i = t._fl, i[Da] <= 0 || i[Na] <= 0 || this._jb.addRect(t.$x + i.x, t.$y + i.y, i[Da], i[Na]))
        },
        _js: null,
        _mym: function(t) {
            if (!this._js) {
                if (!t[ES]) return;
                return this._js = new fz, this._js.add(t)
            }
            return t[ES] ? this._js.add(t) : this._js[remove](t)
        },
        draw: function(t, i, n) {
            for (var e, s = 0, r = this._fp.length; r > s; s++) e = this._fp[s], e._hz && !e[ES] && e._j7(t, i, n, this)
        },
        _9e: function(t, i) {
            if (!this._hz || !this._js || !this._js.length) return !1;
            t[Qa](), t[to](this.$x, this.$y), this.$rotatable && this.$_hostRotate && t[jo](this[vf]), (this.offsetX || this[EM]) && t.translate(this.offsetX, this[EM]), this[cf] && t.rotate(this.$rotate), this[bf] && this._myt && t.translate(-this._myt.x, -this[uf].y), this[S_] && (t.shadowColor = this[S_], t[Ap] = this[Ap] * i, t.shadowOffsetX = this[wM] * i, t.shadowOffsetY = this[Lp] * i), t[ym]();
            for (var n, e = 0, s = this._fp.length; s > e; e++) n = this._fp[e], n._hz && n[ES] && n._j7(t, i, this[Uk], this);
            t.restore()
        },
        doHitTest: function(t, i, n) {
            if (n) {
                if (!this._jb.intersectsRect(t - n, i - n, 2 * n, 2 * n)) return !1
            } else if (!this._jb[go](t, i)) return !1;
            return this[QC](t, i, n)
        },
        hitTestChildren: function(t, i, n) {
            for (var e, s = this._fp[length] - 1; s >= 0; s--) if (e = this._fp[s], e._hz && e[Jc](t, i, n)) return e;
            return !1
        },
        destroy: function() {
            this[Dx] = !0;
            for (var t, i = this._fp.length - 1; i >= 0; i--) t = this._fp[i], t[dy]()
        }
    }, E(ElementUI, BaseUI), J(ElementUI[prototype], {
        renderColorBlendMode: {
            get: function() {
                return this[JC]
            },
            set: function(t) {
                this[JC] = t, this._1h = !0, this[tA] && (this[tA].renderColorBlendMode = this.$renderColorBlendMode)
            }
        },
        renderColor: {
            get: function() {
                return this[ZC]
            },
            set: function(t) {
                this[ZC] = t, this._1h = !0, this[tA] && (this[tA].renderColor = this[ZC])
            }
        },
        bodyBounds: {
            get: function() {
                if (this[iA]) {
                    this[iA] = !1;
                    var t, i = this[tA];
                    t = i && i._hz && !this._$m() ? i._fl[clone]() : this._fl[clone](), this[jo] && Oi(t, this.rotate, t), t.x += this.$x, t.y += this.$y, this._dd = t
                }
                return this._dd
            }
        },
        bounds: {
            get: function() {
                return new bz((this.$x || 0) + this[Ak].x, (this.$y || 0) + this[Ak].y, this.uiBounds.width, this[Ak].height)
            }
        },
        body: {
            get: function() {
                return this._n0ody
            },
            set: function(t) {
                t && this[nA] != t && (this[nA] = t, this[VC] = !0, this[AC]())
            }
        }
    }), oz[XC] = 1;
    var Vq = function() {
        w(this, Vq, arguments)
    };
    Vq.prototype = {
        strokeStyle: Cp,
        lineWidth: 0,
        fillColor: null,
        fillGradient: null,
        _jo: 1,
        _ji: 1,
        outline: 0,
        onDataChanged: function(t) {
            k(this, Vq, eA, arguments), this._ku && this._7o && this._ku._6v(this._7o, this), t && this[PS](t)
        },
        _n20: function(t) {
            this._ku = gn(t), this._ku[vo](), (this._ku._le == NY || this._ku._72()) && (this._7o || (this._7o = function() {
                this[Jk](), this._jp && this._jp.graph && (this._jp.invalidateSize(), this._jp.graph[Dw]())
            }), this._ku[Uo](this._7o, this))
        },
        _ku: null,
        initialize: function() {
            this[PS](this.$data)
        },
        _4s: function() {
            return this._ku && this._ku.draw
        },
        _9k: function(t) {
            if (!t || t.width <= 0 || t.height <= 0 || !this[sA] || !(this[Bw] instanceof Object)) return this._jo = 1, void(this._ji = 1);
            var i = this[Bw][Da],
                e = this[Bw][Na];
            if ((i === n || null === i) && (i = -1), (e === n || null === e) && (e = -1), 0 > i && 0 > e) return this._jo = 1, void(this._ji = 1);
            var s, r, h = t[Da],
                a = t[Na];
            i >= 0 && (s = i / h), e >= 0 && (r = e / a), 0 > i ? s = r : 0 > e && (r = s), this._jo = s, this._ji = r
        },
        validateSize: function() {
            if (this.$invalidateScale) {
                this.$invalidateScale = !1;
                var t = this[rA];
                this._jo, this._ji, this._9k(t), this[hA](t[Da] * this._jo, t[Na] * this._ji, t.x * this._jo, t.y * this._ji)
            }
        },
        measure: function() {
            var t = this._ku[yo](this.lineWidth + this[NS]);
            return t ? (this[aA] = !0, void(this[rA] = t[clone]())) : void this._jb.set(0, 0, 0, 0)
        },
        onBoundsChanged: function() {
            this[oA] = !0
        },
        _1i: function() {
            this[oA] = !1, this[fA] = this[bm] ? HY.prototype[uA][call](this[cA], this._7q) : null
        },
        _jv: function(t) {
            var i, n;
            if (ag == this.$adjustType) i = 1, n = -1;
            else {
                if (og != this[_A]) return;
                i = -1, n = 1
            }
            var e = this._jb.cx,
                s = this._jb.cy;
            t.translate(e, s), t[io](i, n), t[to](-e, -s)
        },
        draw: function(t, i, n, e) {
            if (this._jo && this._ji) {
                if (this[oA] && this._1i(), t[Qa](), this[_A] && this._jv(t), this._ku._le == $Y) return t.scale(this._jo, this._ji), this._ku._m5[$o](t, i, this, n, e || this), void t[Pm]();
                n && this._7p(t, i, e), this._ku[$o](t, i, this, this._jo, this._ji), t[Pm]()
            }
        },
        doHitTest: function(t, i, n) {
            if (this._ku[Jc]) {
                if (ag == this.$adjustType) {
                    var e = this._jb.cy;
                    i = 2 * e - i
                } else if (og == this.$adjustType) {
                    var s = this._jb.cx;
                    t = 2 * s - t
                }
                t /= this._jo, i /= this._ji;
                var r = (this._jo + this._ji) / 2;
                return r > 1 && (n /= r, n = 0 | n), this._ku._m5 instanceof aH ? this._ku._m5[Jc](t, i, n, !0, this.$lineWidth, this[dA] || this[cA]) : this._ku.hitTest(t, i, n)
            }
            return !0
        },
        $invalidateScale: !0,
        $invalidateFillGradient: !0
    }, E(Vq, BaseUI), fs(Vq[prototype], {
        adjustType: {},
        fillColor: {},
        size: {
            validateFlags: [zy, lA]
        },
        fillGradient: {
            validateFlags: [vA]
        }
    }), J(Vq[prototype], {
        originalBounds: {
            get: function() {
                return this[rA]
            }
        }
    }), oz.ALIGN_POSITION = gz[yl];
    var Zq = function() {
        w(this, Zq, arguments), this[pS] = oz.LABEL_COLOR
    };
    Zq[prototype] = {
        color: oz[oO],
        showPointer: !0,
        fontSize: null,
        fontFamily: null,
        fontStyle: null,
        _h2: null,
        alignPosition: null,
        measure: function() {
            this[eo];
            var t = Di(this.$data, this.$fontSize, this.$fontFamily, this[bA], oz[no], this.$font);
            if (this._h2 = t, this.$size) {
                var i = this.$size[Da] || 0,
                    n = this.$size[Na] || 0;
                return this[hA](i > t.width ? i : t[Da], n > t.height ? n : t[Na])
            }
            return this[hA](t[Da], t[Na])
        },
        doHitTest: function(t, i, n) {
            return this[Bf] ? jn(t, i, n, this) : !1
        },
        draw: function(t, i, n, e) {
            if (n && this._7p(t, i, e), this[yA] || oz[Za], this.$rotatable && this[vf]) {
                var s = un(this[vf]);
                s > uz && 3 * uz > s && (t[to](this._jb[Da] / 2, this._jb[Na] / 2), t[jo](Math.PI), t[to](-this._jb.width / 2, -this._jb.height / 2))
            }
            var r = this[wS] || oz[gA],
                h = r[hl],
                a = r[al],
                o = 0;
            h == mz ? (h = Uc, o += this._jb[Da] / 2) : h == xz ? (h = Xh, o += this._jb.width) : h = qo;
            var f = 0;
            a == wz ? f = (this._jb[Na] - this._h2[Na]) / 2 : a == kz && (f = this._jb[Na] - this._h2[Na]), t.fillStyle = this[pS], Ri(t, this[Bf], o, f, h, this[pA], this.$fontSize, this.$fontStyle, oz[no], this[mA])
        },
        _4s: function() {
            return null != this[Bf] || this[sA]
        },
        $invalidateFont: !0
    }, E(Zq, BaseUI), fs(Zq[prototype], {
        size: {
            validateFlags: [Vy]
        },
        fontStyle: {
            validateFlags: [Vy, xA]
        },
        fontSize: {
            validateFlags: [Vy, xA]
        },
        fontFamily: {
            validateFlags: [Vy, xA]
        }
    }), J(Zq.prototype, {
        font: {
            get: function() {
                return this[EA] && (this[EA] = !1, this[mA] = (this[bA] || oz[Va]) + gh + (this.$fontSize || oz[Za]) + Ja + (this[pA] || oz.FONT_FAMILY)), this[mA]
            }
        }
    });
    var Jq = function(t) {
        t = t || new aH, this[wA] = new bz, w(this, Jq, [t])
    };
    Jq.prototype = {
        layoutByPath: !0,
        layoutByAnchorPoint: !1,
        measure: function() {
            this[kA] = !0, this[TA] = !0, this.$data[yo](this[MA] + this[IA], this[wA]), this[hA](this[wA])
        },
        validateSize: function() {
            if (this.$invalidateFromArrow || this[TA]) {
                var t = this[wA][clone]();
                if (this[kA]) {
                    this[kA] = !1;
                    var i = this[OA]();
                    i && t.add(i)
                }
                if (this[TA]) {
                    this.$invalidateToArrow = !1;
                    var i = this[jA]();
                    i && t.add(i)
                }
                this.setMeasuredBounds(t)
            }
        },
        validateFromArrow: function() {
            if (!this[Bf]._j4 || !this[SA]) return void(this[CA] = null);
            var t = this[Bf],
                i = 0,
                n = 0,
                e = this[AA];
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0, i > 0 && 1 > i && (i *= t._j4)), this.fromArrowLocation = t.getLocation(i, n), this[LA][jo] = Math.PI + this.fromArrowLocation[jo] || 0, this[CA] = Bs(this[SA], this[PA]);
            var s = this[CA][yo](this[RA][To] + this[RA][NS]);
            return this[DA] instanceof wY.Gradient ? this[RA]._fillGradient = HY.prototype.generatorGradient.call(this[DA], s) : this[RA] && (this.fromArrowStyles._fillGradient = null), s[_p](this[LA].x, this.fromArrowLocation.y), ji(s, this.fromArrowLocation[jo], s, this.fromArrowLocation.x, this[LA].y), s
        },
        validateToArrow: function() {
            if (!this.$data._j4 || !this.$toArrow) return void(this.$toArrowShape = null);
            var t = this.$data,
                i = 0,
                n = 0,
                e = this[NA];
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0), 0 > i && i > -1 && (i *= t._j4), i += t._j4, this.toArrowLocation = t.getLocation(i, n), this[BA] = Bs(this[$A], this[FA]);
            var s = this[BA][yo](this[GA][To] + this[GA].outline);
            return this[pC] instanceof wY[zA] ? this.toArrowStyles[fA] = HY[prototype][uA][call](this[pC], s) : this[GA] && (this.toArrowStyles[fA] = null), s[_p](this[YA].x, this.toArrowLocation.y), ji(s, this.toArrowLocation.rotate, s, this[YA].x, this[YA].y), s
        },
        _27: function(t) {
            var i = t ? "from" : ST,
                e = this[i + HA];
            e === n && (e = this[MA]);
            var s = this[i + qA];
            s === n && (s = this[O_]);
            var r = this[i + UA];
            r || (this[i + UA] = r = {}), r[To] = e, r.strokeStyle = s, r[Ff] = this[i + WA], r[Wf] = this[i + XA], r.fillColor = this[i + VA], r[bm] = this[i + ZA], r.lineCap = this[i + JA], r.lineJoin = this[i + KA], r[NS] = this[i + QA] || 0, r.outlineStyle = this[i + tL]
        },
        doValidate: function() {
            return this[SA] && this._27(!0), this.$toArrow && this._27(!1), k(this, Jq, BM)
        },
        drawArrow: function(t, i, n, e) {
            if (this[SA] && this[CA]) {
                t[Qa]();
                var s = this[LA],
                    r = s.x,
                    h = s.y,
                    a = s[jo];
                t[to](r, h), a && t.rotate(a), this[CA].draw(t, i, this.fromArrowStyles, n, e), t[Pm]()
            }
            if (this.$toArrow && this[BA]) {
                t[Qa]();
                var s = this[YA],
                    r = s.x,
                    h = s.y,
                    a = s[jo];
                t[to](r, h), a && t[jo](a), this[BA].draw(t, i, this[GA], n, e), t.restore()
            }
        },
        outlineStyle: null,
        outline: 0,
        onBoundsChanged: function() {
            this.$invalidateFillGradient = !0
        },
        _1i: function() {
            this[oA] = !1, this._fillGradient = this[cA] ? HY.prototype.generatorGradient[call](this.$fillGradient, this._7q) : null
        },
        draw: function(t, i, n, e) {
            this[oA] && this._1i(), this[Bf][$o](t, i, this, n, e), this.drawArrow(t, i, n, e)
        },
        doHitTest: function(t, i, n) {
            if (this[Bf][Jc](t, i, n, !0, this.$lineWidth + this.$outline, this[dA] || this[cA])) return !0;
            if (this[$A] && this[BA]) {
                var e = t - this[YA].x,
                    s = i - this.toArrowLocation.y;
                if (this[YA].rotate) {
                    var r = Ti(e, s, -this.toArrowLocation[jo]);
                    e = r.x, s = r.y
                }
                var h = this.toArrowStyles[RS] || this[GA].fillGradient;
                if (this[BA][Jc](e, s, n, !0, this[GA][To], h)) return !0
            }
            if (this[SA] && this[CA]) {
                var e = t - this[LA].x,
                    s = i - this[LA].y;
                if (this[LA][jo]) {
                    var r = Ti(e, s, -this[LA].rotate);
                    e = r.x, s = r.y
                }
                var h = this[RA].fillColor || this[RA][bm];
                if (this.$fromArrowShape[Jc](e, s, n, !0, this[RA][To], h)) return !0
            }
            return !1
        },
        $fromArrowOutline: 0,
        $toArrowOutline: 0,
        $invalidateFillGradient: !0,
        $invalidateFromArrow: !0,
        $invalidateToArrow: !0
    }, E(Jq, BaseUI), fs(Jq[prototype], {
        fillColor: {},
        fillGradient: {
            validateFlags: [vA]
        },
        fromArrowOffset: {
            validateFlags: [iL, zy]
        },
        fromArrowSize: {
            validateFlags: [iL, zy]
        },
        fromArrow: {
            validateFlags: [iL, zy]
        },
        fromArrowOutline: {
            validateFlags: [iL, zy]
        },
        fromArrowStroke: {
            validateFlags: [iL, zy]
        },
        fromArrowStrokeStyle: {
            validateFlags: [iL]
        },
        toArrowOffset: {
            validateFlags: [nL, zy]
        },
        toArrowSize: {
            validateFlags: [nL, zy]
        },
        toArrow: {
            validateFlags: [nL, zy]
        },
        toArrowOutline: {
            validateFlags: [nL, zy]
        },
        toArrowStroke: {
            validateFlags: [nL, zy]
        },
        toArrowStrokeStyle: {
            validateFlags: [nL]
        },
        outline: {
            value: 0,
            validateFlags: [Vy]
        }
    }), J(Jq[prototype], {
        length: {
            get: function() {
                return this.data.length
            }
        }
    }), ds[prototype] = {
        shape: null,
        path: null,
        initialize: function() {
            k(this, ds, NM), this[UT] = new aH, this[UT]._dx = !1, this[zS] = new Jq(this[UT]), this[DC](this[zS], 0), this._n0ody = this.shape, Hq[NC](this)
        },
        _1d: !0,
        _5q: null,
        _$m: function() {
            return !1
        },
        _3s: function() {
            return !1
        },
        validatePoints: function() {
            this[zS].invalidateData();
            var t = this[Bf],
                i = this.path;
            i[Hd]();
            var n = t.fromAgent,
                e = t[wu];
            n && e && Hs(this, t, i, n, e)
        },
        drawLoopedEdge: function(t, i, n, e) {
            Xs(this, e, t)
        },
        drawEdge: function(t, i, n, e, s, r) {
            var h = s[Uc],
                a = r.center;
            if (e == kY.EDGE_TYPE_ZIGZAG) {
                var o = (h.x + a.x) / 2,
                    f = (h.y + a.y) / 2,
                    u = h.x - a.x,
                    c = h.y - a.y,
                    _ = Math.sqrt(u * u + c * c),
                    d = Math.atan2(c, u);
                d += Math.PI / 6, _ *= .04, _ > 30 && (_ = 30);
                var l = Math.cos(d) * _,
                    v = Math.sin(d) * _;
                return t[Du](o - v, f + l), void t[Du](o + v, f - l)
            }
            var b = Ws(this, this[ko], s, r, i, n, h, a);
            b && (t._fk = b)
        },
        _24: function() {
            if (!this[Bf][Ck]()) return null;
            var t = this.graph._8j._8d(this[Bf]);
            if (!t || !t[eL](this.graph) || !t._go) return null;
            var i = t[sL](this);
            return t[rL](this[Bf]) || (i = -i), i
        },
        checkBundleLabel: function() {
            var t = this.getBundleLabel();
            return t ? (this[wC] || this[hL](), this.bundleLabel._hz = !0, void(this[wC][ko] = t)) : void(this[wC] && (this[wC]._hz = !1, this.bundleLabel.data = null))
        },
        createBundleLabel: function() {
            var t = new Zq;
            t[aL] = !1, this[wC] = t, this[DC](this.bundleLabel), qq[NC](this)
        },
        getBundleLabel: function() {
            return this.graph.getBundleLabel(this[ko])
        },
        doValidate: function() {
            return this._1d && (this._1d = !1, this[oL]()), this.checkBundleLabel(), k(this, ds, BM)
        },
        _3v: function() {
            this._1d = !0, this.invalidateSize()
        },
        _$s: function(t, i, n) {
            var e = this[PC].onBindingPropertyChange(this, t, i, n);
            return e = Bq.onBindingPropertyChange(this, t, i, n) || e, this[wC] && this[wC][Bf] && (e = qq[RC](this, t, i, n) || e), Hq.onBindingPropertyChange(this, t, i, n) || e
        }
    }, E(ds, ElementUI), ds.drawReferenceLine = function(t, i, n, e) {
        if (t.moveTo(i.x, i.y), !e || e == kY[fL]) return void t[Du](n.x, n.y);
        if (e == kY[mc]) t[Du](i.x, n.y);
        else if (e == kY[bc]) t.lineTo(n.x, i.y);
        else if (0 == e[indexOf](kY[Rc])) {
            var s;
            s = e == kY[vc] ? !0 : e == kY[Dc] ? !1 : Math.abs(i.x - n.x) > Math.abs(i.y - n.y);
            var r = (i.x + n.x) / 2,
                h = (i.y + n.y) / 2;
            s ? (t[Du](r, i.y), t.lineTo(r, n.y)) : (t[Du](i.x, h), t.lineTo(n.x, h))
        } else if (0 == e.indexOf(kY[kc])) {
            var s, a = Kq[Nq[qS]] || 0;
            s = e == kY.EDGE_TYPE_ELBOW_HORIZONTAL ? !0 : e == kY.EDGE_TYPE_ELBOW_VERTICAL ? !1 : Math.abs(i.x - n.x) > Math.abs(i.y - n.y), s ? (t[Du](i.x + a, i.y), t[Du](n.x - a, n.y)) : (t.lineTo(i.x, i.y + a), t[Du](n.x, n.y - a))
        } else if (0 == e[indexOf](uL)) {
            var a = Kq[Nq[qS]] || 0;
            if (e == kY.EDGE_TYPE_EXTEND_TOP) {
                var o = Math.min(i.y, n.y) - a;
                t[Du](i.x, o), t[Du](n.x, o)
            } else if (e == kY[wc]) {
                var o = Math.max(i.y, n.y) + a;
                t[Du](i.x, o), t[Du](n.x, o)
            } else if (e == kY[yc]) {
                var f = Math.min(i.x, n.x) - a;
                t[Du](f, i.y), t[Du](f, n.y)
            } else if (e == kY.EDGE_TYPE_EXTEND_RIGHT) {
                var f = Math.max(i.x, n.x) + a;
                t[Du](f, i.y), t[Du](f, n.y)
            }
        } else if (e == kY[cL]) {
            var r = (i.x + n.x) / 2,
                h = (i.y + n.y) / 2,
                u = i.x - n.x,
                c = i.y - n.y,
                _ = Math.sqrt(u * u + c * c),
                d = Math[Hh](c, u);
            d += Math.PI / 6, _ *= .04, _ > 30 && (_ = 30);
            var l = Math.cos(d) * _,
                v = Math.sin(d) * _;
            t.lineTo(r - v, h + l), t[Du](r + v, h - l)
        }
        t.lineTo(n.x, n.y)
    }, J(ds.prototype, {
        length: {
            get: function() {
                return this[UT] ? this[UT].length : 0
            }
        }
    }), ds[prototype][Ba] = function(t, i, n) {
        var e = En(this[UT], t, i, n);
        if (e && e[length] > 2) {
            var s = this[ko],
                r = e[e[length] - 1];
            s[_L] = r[Oo] == tH ? e[splice](1, e.length - 2) : e[splice](1, e.length - 1)
        }
    }, NodeUI.prototype = {
        _2e: null,
        image: null,
        initialize: function() {
            k(this, NodeUI, NM), this._myj(), zq[NC](this)
        },
        _n20: function() {
            this.data[zp] ? this[zp] && (this[tA] = this[zp]) : this[_E] && (this[tA] = this[_E])
        },
        _myj: function() {
            this[zp] = new Vq, this[DC](this[zp], 0), this._n20()
        },
        doValidate: function() {
            this[tA] && (this instanceof nr && !this[Bf].groupImage && this._5m() ? this[tA].$layoutByAnchorPoint = !1 : (this[tA][bf] = null != this._2e, this[tA].anchorPosition = this._2e));
            var t = this.$data[PT],
                i = 0,
                n = 0;
            t && (i = t.x, n = t.y);
            var e = this.$x != i || this.$y != n;
            return e && (this[iA] = !0), this.$x = i, this.$y = n, ElementUI[prototype][BM][call](this) || e
        },
        _$s: function(t, i, n) {
            var e = this[PC][RC](this, t, i, n);
            return e = Bq.onBindingPropertyChange(this, t, i, n) || e, zq[RC](this, t, i, n) || e
        }
    }, E(NodeUI, ElementUI);
    var Kq = {};
    Kq[Nq.SELECTION_COLOR] = oz[ap], Kq[Nq[rp]] = oz[rp], Kq[Nq[hp]] = oz[hp], Kq[Nq[ep]] = kY[sp], Kq[Nq[VM]] = 2, Kq[Nq[ZM]] = 2, Kq[Nq[oO]] = oz[oO], Kq[Nq.LABEL_POSITION] = gz[gl], Kq[Nq.LABEL_ANCHOR_POSITION] = gz[bl], Kq[Nq[bO]] = new yz(0, 2), Kq[Nq[kS]] = 8, Kq[Nq.LABEL_RADIUS] = 8, Kq[Nq[pO]] = !0, Kq[Nq[mS]] = 0, Kq[Nq[AO]] = Cp, Kq[Nq[DO]] = !0, Kq[Nq[PO]] = null, Kq[Nq.LABEL_BACKGROUND_GRADIENT] = null, Kq[Nq.EDGE_COLOR] = dL, Kq[Nq[_j]] = 1.5, Kq[Nq[Pj]] = !0, Kq[Nq.EDGE_TO_AT_EDGE] = !0, Kq[Nq[XO]] = V(3438210798), Kq[Nq[ZO]] = 1, Kq[Nq[KO]] = Cp, Kq[Nq.ARROW_TO] = !0, Kq[Nq[$j]] = oz.ARROW_SIZE, Kq[Nq.ARROW_TO_SIZE] = oz[Nc], Kq[Nq.EDGE_LOOPED_EXTAND] = 10, Kq[Nq[jc]] = 8, Kq[Nq.EDGE_CORNER] = kY.EDGE_CORNER_ROUND, Kq[Nq.EDGE_SPLIT_BY_PERCENT] = !0, Kq[Nq[qS]] = 20, Kq[Nq[Tc]] = .5, Kq[Nq.EDGE_SPLIT_VALUE] = 20, Kq[Nq.EDGE_BUNDLE_GAP] = 20, Kq[Nq.EDGE_BUNDLE_LABEL_ANCHOR_POSITION] = gz[gl], Kq[Nq[nj]] = gz[bl], Kq[Nq[ej]] = lL, Kq[Nq[fI]] = 1, Kq[Nq[cI]] = vL, Kq[Nq.RENDER_COLOR_BLEND_MODE] = oz[Ko], Kq[Nq.ALPHA] = 1, oz[Kc] = 2;
    var Graph = function(i, n) {
        this._$q = new Pz, this._$q.on(function(t) {
            tM == t[Il] && this[$k]()
        }, this), this._1k = new Pz, this._1k[ld](function(t) {
            !this[tM] || t.kind != Nz.KIND_CLEAR && t[Il] != Nz.KIND_REMOVE || this[hT].contains(this.currentSubNetwork) || (this[tM] = null)
        }, this), this._8 = new Pz, this._10 = new Pz, this._$i = new Pz, this._$l = new Pz, this[hT] = n || new rs, this._8j = new mq(this, i), this._2l = new Ar(this), this._16 = new Pz, this._onresize = Uz(window, bL, function() {
            this[yL]()
        }, !1, this), this._8j[ak].ondrop = function(t) {
            this[gL](t)
        }.bind(this), this._8j[ak][pL] = function(t) {
            this.ondragover(t)
        }.bind(this)
    };
    Graph.prototype = {
        originAtCenter: !0,
        editable: !1,
        ondragover: function(t) {
            wY[mL](t)
        },
        getDropInfo: function(t, i) {
            var n = null;
            if (i) try {
                n = JSON[Ma](i)
            } catch (e) {}
            return n
        },
        ondrop: function(t) {
            var i = t.dataTransfer;
            if (i) {
                var n = i[xL](EL),
                    e = this[wL](t, n);
                e || (e = {}, e[zp] = i.getData(zp), e[Oo] = i[xL](Oo), e[_E] = i[xL](_E), e.groupImage = i[xL](uM));
                var s = this.globalToLocal(t);
                if (s = this.toLogical(s.x, s.y), !(this[kL] instanceof Function && this[kL][call](this, t, s, e) === !1) && (e.image || e[_E] || e.type)) {
                    var r = e[zp],
                        h = e.type,
                        a = e[_E],
                        o = e[uM];
                    wY.stopEvent(t);
                    var f;
                    if (h && TL != h ? ML == h ? f = this[IL](a, s.x, s.y) : OL == h ? f = this.createShapeNode(a, s.x, s.y) : jL == h ? (f = this[SL](a, s.x, s.y), o && (o = tr(o), o && (f[uM] = o))) : (h = K(h), h instanceof Function && h[prototype] instanceof Cq && (f = new h, f[ah] = a, f.location = new _z(s.x, s.y), this[_T].add(f))) : f = this[CL](a, s.x, s.y), f) {
                        if (r && (r = tr(r), r && (f.image = r)), t[OE]) {
                            var u = this.getElementByMouseEvent(t);
                            u && this._n08(u) && (f[Eu] = u)
                        }
                        if (e[AL]) for (var c in e.properties) f[c] = e[AL][c];
                        if (e[LL]) for (var c in e[LL]) f.set(c, e[LL][c]);
                        if (e[PL] && f.putStyles(e[PL]), this[RL](f, t, e) === !1) return !1;
                        var _ = new Cr(this, Cr.ELEMENT_CREATED, t, f);
                        return this.onInteractionEvent(_), f
                    }
                }
            }
        },
        _n08: function(t) {
            return t.enableSubNetwork || t instanceof Pq || t.droppable
        },
        enableDoubleClickToOverview: !0,
        _8j: null,
        _$q: null,
        _1k: null,
        _8: null,
        _$l: null,
        _10: null,
        _$i: null,
        _1o: function(t) {
            return this._$q[zl](t)
        },
        _3q: function(t) {
            this._$q[hh](t), $w == t[Il] && this[DL]()
        },
        isVisible: function(t) {
            return this._8j._f8(t)
        },
        isMovable: function(t) {
            return (t instanceof Cq || t instanceof Sq && t[$c]()) && t[NL] !== !1
        },
        isSelectable: function(t) {
            return t[BL] !== !1
        },
        isEditable: function(t) {
            return t[aL] !== !1
        },
        isRotatable: function(t) {
            return t.rotatable !== !1
        },
        isResizable: function(t) {
            return t[$L] !== !1
        },
        canLinkFrom: function(t) {
            return t[FL] !== !1 && t[GL] !== !1
        },
        canLinkTo: function(t) {
            return t[FL] !== !1 && t[zL] !== !1
        },
        createNode: function(t, i, n) {
            var e = new Cq(t, i, n);
            return this._kkModel.add(e), e
        },
        createText: function(t, i, n) {
            var e = new as(t, i, n);
            return this[_T].add(e), e
        },
        createShapeNode: function(t, i, n, e) {
            D(i) && (e = n, n = i, i = null);
            var s = new Aq(t, i);
            return s.$location = new _z(n, e), this._kkModel.add(s), s
        },
        createGroup: function(t, i, n) {
            var e = new Pq(t, i, n);
            return this[_T].add(e), e
        },
        createEdge: function(text, start, end) {
            if (text instanceof Cq) {
                var e = end;
                end = start, start = text, text = e
            }
            var s = new Sq(start, end);
            return text && (s[bT] = text), this[_T].add(s), s
        },
        addElement: function(t, i) {
            this[_T].add(t), i && t[hasChildren]() && t[Pu](function(t) {
                this.addElement(t, i)
            }, this)
        },
        removeElement: function(t) {
            this._kkModel[remove](t)
        },
        clear: function() {
            this[_T].clear()
        },
        getStyle: function(t, i) {
            var e = t._j9[i];
            return e !== n ? e : this[YL](i)
        },
        getDefaultStyle: function(t) {
            if (this._j9) {
                var i = this._j9[t];
                if (i !== n) return i
            }
            return Kq[t]
        },
        _2u: function(t, i) {
            if (!this.limitedBounds || this[HL][Zc](this[cT])) return i && i(), !1;
            t = this._22(), this.stopAnimation();
            var n, e, s, r = this.viewportBounds,
                h = this[HL],
                a = r[Da] / this[HL].width,
                o = r[Na] / this.limitedBounds[Na];
            if (1 >= a && 1 >= o) return n = h[qo] > r[qo] ? h[qo] : h[Xh] < r[Xh] ? r[qo] - (r[Xh] - h[Xh]) : r.left, e = h.top > r.top ? h.top : h.bottom < r[Wh] ? r.top - (r.bottom - h[Wh]) : r.top, void this[lk](-n * this[io], -e * this.scale, this[io], !1, i);
            var f = a > o;
            s = Math.max(a, o), f ? (n = h.x, e = h.y + (r.top - h.top) * (1 - s) / s, e >= h.y ? e = h.y : e < h[Wh] - r[Na] / s && (e = h[Wh] - r[Na] / s)) : (e = h.y, n = h.x + (r[qo] - h.left) * (1 - s) / s, n >= h.x ? n = h.x : n < h.right - r.width / s && (n = h[Xh] - r[Da] / s)), s *= this.scale, n *= s, e *= s, this[lk](-n, -e, s, t, i)
        },
        checkLimitedBounds: function(t) {
            return this[qL] || !this.limitedBounds || this[HL][Zc](this[cT]) ? !1 : (this._n2heckingBounds = !0, void this.callLater(function() {
                this._2u(t, function() {
                    this[qL] = !1
                }.bind(this))
            }, this))
        },
        zoomByMouseEvent: function(t, i, n, e) {
            var s = this.globalToLocal(t);
            return D(i) ? this[UL](Math.pow(this[WL], i), s.x, s.y, n, e) : i ? this[XL](s.x, s.y, n, e) : this[VL](s.x, s.y, n, e)
        },
        resetScale: 1,
        translate: function(t, i, n) {
            return this[lk](this.tx + t, this.ty + i, this.scale, n)
        },
        translateTo: function(t, i, n, e, s) {
            if (n && (n = Math.min(this[Gp], Math.max(this.minScale, n))), e) {
                var r = this._53();
                return void r._kt(t, i, n, e, s)
            }
            var h = this._8j[ZL](t, i, n);
            return s && s(), h
        },
        centerTo: function(t, i, e, s, r) {
            return (!e || 0 >= e) && (e = this[io]), s === n && (s = this._22()), this[lk](this.width / 2 - t * e, this[Na] / 2 - i * e, e, s, r)
        },
        moveToCenter: function(t, i) {
            if (arguments[2] === !1 || !this._8j.isInvalidate()) {
                var n = this[bo];
                return void this[JL](n.cx, n.cy, t, i)
            }
            return this._8j._myp || (i = !1), this[KL](this.moveToCenter[ch](this, t, i, !1))
        },
        zoomToOverview: function(t, i) {
            if (arguments[2] === !1 || !this._8j[QL]()) {
                var n = this._8j._1l();
                return void(n && (i && (n[io] = Math.min(n[io], i)), this[JL](n.cx, n.cy, n[io], t)))
            }
            return this._8j[nc] || (t = !1), this[KL](this.zoomToOverview[ch](this, t, i, !1))
        },
        _22: function() {
            return this._8j[nc] ? this[tP] === n || null === this[tP] ? oz.ZOOM_ANIMATE : this[tP] : !1
        },
        zoomAt: function(t, i, e, s, r) {
            s === n && (s = this._22()), i === n && (i = this.width / 2), i = i || 0, e === n && (e = this[Na] / 2), e = e || 0;
            var h = this.scale;
            return t = Math.min(this[Gp], Math.max(this[iP], h * t)), i = t * (this.tx - i) / h + i, e = t * (this.ty - e) / h + e, this.translateTo(i, e, t, s, r)
        },
        zoomOut: function(t, i, n, e) {
            return this.zoomAt(1 / this.scaleStep, t, i, n, e)
        },
        zoomIn: function(t, i, n, e) {
            return this.zoomAt(this.scaleStep, t, i, n, e)
        },
        _53: function() {
            return this._panAnimation || (this[nP] = new rU(this)), this[nP]
        },
        onAnimationStart: function() {},
        onAnimationEnd: function() {},
        isAnimating: function() {
            return this._panAnimation && this[nP]._dy()
        },
        enableInertia: !0,
        _9d: function(t, i) {
            var n = this._53();
            return n._gw(t || 0, i || 0)
        },
        stopAnimation: function() {
            this[nP] && this[nP]._m3()
        },
        getUI: function(t) {
            return Q(t) ? this._8j._3d(t) : this._8j._lc(t)
        },
        getUIByMouseEvent: function(t) {
            return this._8j._3d(t)
        },
        hitTest: function(t) {
            return this._8j[Jc](t)
        },
        globalToLocal: function(t) {
            return this._8j._7z(t)
        },
        toCanvas: function(t, i) {
            return this._8j._fj(t, i)
        },
        toLogical: function(t, i) {
            return Q(t) ? this._8j._$e(t) : this._8j._f4(t, i)
        },
        getElementByMouseEvent: function(t) {
            var i = this._8j._3d(t);
            return i ? i[Bf] : void 0
        },
        getElement: function(t) {
            if (Q(t)) {
                var i = this._8j._3d(t);
                return i ? i.$data : null
            }
            return this[_T].getById(t)
        },
        invalidate: function() {
            this._8j._n2r()
        },
        invalidateUI: function(t) {
            t[Dw](), this[Dw]()
        },
        invalidateElement: function(t) {
            this._8j._3f(t)
        },
        getUIBounds: function(t) {
            return this._8j._2m(t)
        },
        forEachVisibleUI: function(t, i) {
            return this._8j._3w(t, i)
        },
        forEachReverseVisibleUI: function(t, i) {
            return this._8j._$u(t, i)
        },
        forEachUI: function(t, i) {
            return this._8j._fb(t, i)
        },
        forEachReverseUI: function(t, i) {
            return this._8j._41(t, i)
        },
        forEach: function(t, i) {
            return this[_T].forEach(t, i)
        },
        getElementByName: function(t) {
            var i;
            return this[_T].forEach(function(n) {
                return n[ah] == t ? (i = n, !1) : void 0
            }), i
        },
        focus: function(i) {
            if (i) {
                var n = window[sd] || window.pageXOffset,
                    e = window[rd] || window.pageYOffset;
                return this[eP][sP](), void window[hd](n, e)
            }
            this[eP][sP]()
        },
        callLater: function(t, i, n) {
            this._8j._f1(t, i, n)
        },
        exportImage: function(t, i) {
            return ur(this, t, i)
        },
        setSelection: function(t) {
            return this[_T]._selectionModel.set(t)
        },
        select: function(t) {
            return this[_T][lv][ad](t)
        },
        unselect: function(t) {
            return this[_T][lv].unselect(t)
        },
        reverseSelect: function(t) {
            return this[_T][lv][rP](t)
        },
        selectAll: function() {
            fr(this)
        },
        unSelectAll: function() {
            this.selectionModel[Hd]()
        },
        unselectAll: function() {
            this.unSelectAll()
        },
        isSelected: function(t) {
            return this[_T]._selectionModel.contains(t)
        },
        sendToTop: function(t) {
            Me(this[_T], t)
        },
        sendToBottom: function(t) {
            Ie(this._kkModel, t)
        },
        moveElements: function(t, i, n) {
            var e = [],
                s = new fz;
            return l(t, function(t) {
                t instanceof Cq ? e[push](t) : t instanceof Sq && s.add(t)
            }), this._do(e, i, n, s)
        },
        _do: function(t, i, n, e) {
            if (0 == i && 0 == n || 0 == t.length && 0 == e[length]) return !1;
            if (0 != t[length]) {
                var s = this._3o(t);
                e = this._3p(s, e), l(s, function(t) {
                    var e = t[PT];
                    e ? t[hP](e.x + i, e.y + n) : t.setLocation(i, n)
                })
            }
            return e && e.length && this._dq(e, i, n), !0
        },
        _dq: function(t, i, n) {
            t[Jf](function(t) {
                t[jy](i, n)
            })
        },
        _3p: function(t, i) {
            return this[hT].forEach(function(n) {
                n instanceof Sq && this.isMovable(n) && t[Zc](n.fromAgent) && t.contains(n[wu]) && i.add(n)
            }, this), i
        },
        _3o: function(t) {
            var i = new fz;
            return l(t, function(t) {
                !this[aP](t), i.add(t), ke(t, i, this[oP])
            }, this), i
        },
        reverseExpanded: function(t) {
            if (!t[Ck]()) return !1;
            var i = t[ku](!0);
            return i ? i[fP]() !== !1 ? (this[Dw](), !0) : void 0 : !1
        },
        _2l: null,
        _16: null,
        beforeInteractionEvent: function(t) {
            return this._16[zl](t)
        },
        onInteractionEvent: function(t) {
            this._16[hh](t)
        },
        addCustomInteraction: function(t) {
            this._2l[uP](t)
        },
        removeCustomInteraction: function(t) {
            this._2l[cP](t)
        },
        enableWheelZoom: !0,
        enableTooltip: !0,
        getTooltip: function(t) {
            return t[xT] || t[ah]
        },
        updateViewport: function() {
            this._8j._65()
        },
        destroy: function() {
            this._3q(new Oz(this, dy, !0, this[Dx])), this[Dx] = !0, Wz(window, bL, this[_P]), this._2l[dy](), this[hT] = new rs;
            var i = this.html;
            this._8j._i5(), i && (i[dP] = "")
        },
        onPropertyChange: function(t, i, n) {
            this._$q.addListener(function(e) {
                e.kind == t && i[call](n, e)
            })
        },
        removeSelection: function() {
            var t = this.selectionModel._jk;
            return t && 0 != t[length] ? (t = t[slice](), this[_T][remove](t), t) : !1
        },
        removeSelectionByInteraction: function(t) {
            var i = this[B_][dd];
            return i && 0 != i.length ? void wY[rg](lP + i.length, function() {
                var i = this.removeSelection();
                if (i) {
                    var n = new Cr(this, Cr[vP], t, i);
                    this[bP](n)
                }
            }, this) : !1
        },
        createShapeByInteraction: function(t, i, n, e) {
            var s = new aH(i);
            i[length] > 2 && s[of]();
            var r = this.createShapeNode(yP, s, n, e);
            this[RL](r, t);
            var h = new Cr(this, Cr[gP], t, r);
            return this[bP](h), r
        },
        createLineByInteraction: function(t, i, n, e) {
            var s = new aH(i),
                r = this[pP](mP, s, n, e);
            r.setStyle(wY[xP].SHAPE_FILL_COLOR, null), r.setStyle(wY.Styles[gI], null), r[cc](wY[xP][EP], !0), this.onElementCreated(r, t);
            var h = new Cr(this, Cr[gP], t, r);
            return this.onInteractionEvent(h), r
        },
        createEdgeByInteraction: function(t, i, n, e) {
            var s = this[wP](kP, t, i);
            if (e) s._96 = e;
            else {
                var r = this.edgeUIClass,
                    h = this[CT];
                this[TP] && (r = this.interactionProperties[Xk] || r, h = this[TP][CT] || h), r && (s[Xk] = r), h && (s[CT] = h)
            }
            this.onElementCreated(s, n);
            var a = new Cr(this, Cr[gP], n, s);
            return this[bP](a), s
        },
        onElementCreated: function(t) {
            !t[Eu] && this[tM] && (t[Eu] = this[tM])
        },
        allowEmptyLabel: !1,
        startLabelEdit: function(t, i, n, e) {
            var s = this;
            n[MP](e.x, e.y, i[ko], this[_c](t, Nq[uO]), function(n) {
                return s[IP](t, i, n, i.parent)
            })
        },
        onLabelEdit: function(t, i, n, e) {
            return n || this[OP] ? void(_E == i.name ? t.name = n : e._fs(i, n) === !1 && (i.data = n, this[jP](t))) : (wY[eg](SP), !1)
        },
        setInteractionMode: function(t, i) {
            this.interactionMode = t, this.interactionProperties = i
        },
        upSubNetwork: function() {
            return this._3l ? this[tM] = ir(this._3l) : !1
        },
        _$n: !1,
        invalidateVisibility: function() {
            this._$n = !0, this.invalidate()
        },
        getBundleLabel: function(t) {
            var i = t.getEdgeBundle(!0);
            return i && i[CP] == t ? AP + i[LP][length] : null
        },
        zoomAnimation: null,
        pauseRendering: function(t, i) {
            (this[PP] || i) && this._8j._62(t)
        },
        _47: n,
        enableRectangleSelectionByRightButton: !0
    }, J(Graph[prototype], {
        center: {
            get: function() {
                return this[dk](this[RP][bk] / 2, this.html[D_] / 2)
            }
        },
        visibleFilter: {
            get: function() {
                return this[Sk]
            },
            set: function(t) {
                this[Sk] = t, this[$k]()
            }
        },
        topCanvas: {
            get: function() {
                return this._8j[Ok]
            }
        },
        propertyChangeDispatcher: {
            get: function() {
                return this._$q
            }
        },
        listChangeDispatcher: {
            get: function() {
                return this._1k
            }
        },
        dataPropertyChangeDispatcher: {
            get: function() {
                return this._8
            }
        },
        selectionChangeDispatcher: {
            get: function() {
                return this._$l
            }
        },
        parentChangeDispatcher: {
            get: function() {
                return this._10
            }
        },
        childIndexChangeDispatcher: {
            get: function() {
                return this._$i
            }
        },
        interactionDispatcher: {
            get: function() {
                return this._16
            }
        },
        cursor: {
            set: function(t) {
                this[eP][ea][DP] = t || this._2l.defaultCursor
            },
            get: function() {
                return this.canvasPanel[ea][DP]
            }
        },
        interactionMode: {
            get: function() {
                return this._2l._n2urrentMode
            },
            set: function(t) {
                var i = this[NP];
                i != t && (this._2l.currentMode = t, this._3q(new Oz(this, NP, t, i)))
            }
        },
        scaleStep: {
            get: function() {
                return this._8j._et
            },
            set: function(t) {
                this._8j._et = t
            }
        },
        maxScale: {
            get: function() {
                return this._8j._gb
            },
            set: function(t) {
                this._8j._gb = t
            }
        },
        minScale: {
            get: function() {
                return this._8j._g9
            },
            set: function(t) {
                this._8j._g9 = t
            }
        },
        scale: {
            get: function() {
                return this._8j[lb]
            },
            set: function(t) {
                return this._8j[lb] = t
            }
        },
        tx: {
            get: function() {
                return this._8j._tx
            }
        },
        ty: {
            get: function() {
                return this._8j._ty
            }
        },
        styles: {
            get: function() {
                return this._j9
            },
            set: function(t) {
                this._j9 = t
            }
        },
        selectionModel: {
            get: function() {
                return this[_T][lv]
            }
        },
        graphModel: {
            get: function() {
                return this[_T]
            },
            set: function(t) {
                if (this[_T] == t) return !1;
                var i = this[_T],
                    n = new Oz(this, hT, i, t);
                return this._1o(n) === !1 ? !1 : (null != i && (i.propertyChangeDispatcher.removeListener(this._$q, this), i[_v][Nx](this._1k, this), i[vv][Nx](this._8, this), i[bv][Nx](this._10, this), i.childIndexChangeDispatcher[Nx](this._$i, this), i[dv][Nx](this._$l, this)), this[_T] = t, this._kkModel && (this[_T][BP][ld](this._$q, this), this[_T][_v].addListener(this._1k, this), this[_T].dataChangeDispatcher[ld](this._8, this), this._kkModel[bv][ld](this._10, this), this[_T][yv][ld](this._$i, this), this[_T].selectionChangeDispatcher[ld](this._$l, this)), this._8j && this._8j._la(), void this._3q(n))
            }
        },
        count: {
            get: function() {
                return this[_T][length]
            }
        },
        width: {
            get: function() {
                return this.html[bk]
            }
        },
        height: {
            get: function() {
                return this[RP][D_]
            }
        },
        viewportBounds: {
            get: function() {
                return this._8j[$P]
            }
        },
        bounds: {
            get: function() {
                return this._8j._43()
            }
        },
        canvasPanel: {
            get: function() {
                return this._8j[ak]
            }
        },
        html: {
            get: function() {
                return this._8j[ak].parentNode
            }
        },
        navigationType: {
            get: function() {
                return this._8j._6a
            },
            set: function(t) {
                this._8j._3k(t)
            }
        },
        _3l: {
            get: function() {
                return this[_T]._3l
            }
        },
        currentSubNetwork: {
            get: function() {
                return this[_T][tM]
            },
            set: function(t) {
                this[_T][tM] = t
            }
        },
        limitedBounds: {
            get: function() {
                return this._limitedBounds
            },
            set: function(t) {
                return bz[pu](t, this[FP]) ? !1 : t ? void(this[FP] = new bz(t)) : void(this._limitedBounds = null)
            }
        },
        ratio: {
            get: function() {
                return this._8j[Wa]
            }
        },
        delayedRendering: {
            get: function() {
                return this._47 === n ? oz[GP] : this._47
            },
            set: function(t) {
                t != this.delayedRendering && (this._47 = t, this.pauseRendering(!1, !0))
            }
        },
        fullRefresh: {
            get: function() {
                return this._8j.fullRefresh
            },
            set: function(t) {
                this._8j[Yw] = t
            }
        }
    }), oz[GP] = !0, oz[zP] = 60, oz[YP] = 60, nr[prototype] = {
        initialize: function() {
            k(this, nr, NM), this[FS]()
        },
        _myf: function() {
            this._m7 = new aH, this[zS] = new Vq(this._m7), this[zS][Df] = !1, this.addChild(this[zS], 0), this[tA] = this[zS]
        },
        checkBody: function() {
            return this._5m() ? (this._25 = !0, this.shape ? (this[zS][rk] = !0, this.body = this[zS]) : (this._myf(), Yq[NC](this)), void(this[zp] && (this[zp][rk] = !1))) : (this[zp] ? (this[zp][rk] = !0, this.body = this.image) : this[HP](), void(this[zS] && (this[zS].visible = !1)))
        },
        _5m: function() {
            return this.$data._i6() && this[Bf][Vk]
        },
        _m7: null,
        _25: !0,
        _59: function() {
            this._1h = !0, this._25 = !0
        },
        doValidate: function() {
            if (this._25 && this._5m()) {
                if (this._25 = !1, this[zS][Jk](), this.$data.groupImage) {
                    this[zS][ko] = this[Bf][uM];
                    var t = this._20();
                    return this[zS][xM] = t.x + t[Da] / 2, this[zS].offsetY = t.y + t.height / 2, this[zS].size = {
                        width: t[Da],
                        height: t[Na]
                    }, NodeUI[prototype][BM][call](this)
                }
                this[zS][xM] = 0, this.shape.offsetY = 0;
                var i = this._8n(this[Bf][fM]);
                this._m7.clear(), i instanceof bz ? Ne(this._m7, i.x, i.y, i[Da], i[Na], i.rx, i.ry) : i instanceof Qi ? Be(this._m7, i) : i instanceof tn && $e(this._m7, i), this._m7._6b = !0, this.shape[Jk]()
            }
            return NodeUI.prototype[BM].call(this)
        },
        _6z: function(t, i, n, e, s) {
            switch (ph != typeof e && (e = -i / 2), ph != typeof s && (s = -n / 2), t) {
                case kY[qP]:
                    var r = Math.max(i, n) / 2;
                    return new Qi(e + i / 2, s + n / 2, r);
                case kY[UP]:
                    return new tn(e + i / 2, s + n / 2, i, n);
                default:
                    return new bz(e, s, i, n)
            }
        },
        _20: function() {
            return this._8n(null)
        },
        _8n: function(t) {
            var i, e, s = this[ko],
                r = s[Ho],
                h = s.minSize,
                a = oz[zP],
                o = oz[YP];
            if (h && (ph == typeof h.width && (a = h[Da]), ph == typeof h.height && (o = h[Na]), i = h.x, e = h.y), !s[hasChildren]()) return this._6z(t, a, o, i, e);
            var f, u = this.$data._fp._jk;
            (t == kY.GROUP_TYPE_CIRCLE || t == kY[UP]) && (f = []);
            for (var c, _, d, l, v = new bz, b = 0, y = u.length; y > b; b++) {
                var g = u[b];
                if (this.graph[$_](g)) {
                    var p = this.graph[zc](g);
                    p && (c = p.$x + p._fl.x, _ = p.$y + p._fl.y, d = p._fl[Da], l = p._fl[Na], v[el](c, _, d, l), f && (f.push({
                        x: c,
                        y: _
                    }), f[push]({
                        x: c + d,
                        y: _
                    }), f[push]({
                        x: c + d,
                        y: _ + l
                    }), f[push]({
                        x: c,
                        y: _ + l
                    })))
                }
            }
            if (v[$f]()) return this._6z(t, a, o, i, e);
            var m = this.$data[PT];
            m ? m[WP] && (m.invalidateFlag = !1, i === n && (m.x = v.cx), e === n && (m.y = v.cy)) : m = this.$data[PT] = {
                x: v.cx,
                y: v.cy
            }, r && v[xf](r), ph == typeof i && i + m.x < v.x && (v[Da] += v.x - (i + m.x), v.x = i + m.x, f && f[push]({
                x: v.x,
                y: v.cy
            })), ph == typeof e && e + m.y < v.y && (v[Na] += v.y - (v.y, e + m.y), v.y = e + m.y, f && f[push]({
                x: v.cx,
                y: v.y
            }));
            var x, i = m.x,
                e = m.y;
            if (t == kY[qP]) {
                x = nn(f), x.cx -= i, x.cy -= e;
                var E = Math.max(a, o) / 2;
                return x.r < E && (x.cx += E - x.r, x.cy += E - x.r, x.r = E), x
            }
            return t == kY.GROUP_TYPE_ELLIPSE ? (x = en(f, v), x.cx -= i, x.cy -= e, x[Da] < a && (x.cx += (a - x[Da]) / 2, x[Da] = a), x[Na] < o && (x.cy += (o - x.height) / 2, x[Na] = o), x) : (x = v, v[Da] < a && (v[Da] = a), v.height < o && (v[Na] = o), v[_p](-i, -e), x)
        },
        _$s: function(t, i, n) {
            if (!this._5m()) return k(this, nr, XP, arguments);
            var e = this[PC][RC](this, t, i, n);
            return e = Bq[RC](this, t, i, n) || e, e = zq[RC](this, t, i, n) || e, Yq[RC](this, t, i, n) || e
        }
    }, E(nr, NodeUI), wY[VP] = nr;
    var tU = {
        draw: function() {}
    };
    oz[M_] = null, oz[m_] = null;
    var iU = {
            position: kw,
            "text-align": Uc
        },
        nU = {
            padding: ZP,
            transition: JP
        },
        eU = {
            position: y_,
            display: KP
        };
    yi(QP, "opacity:0.7;vertical-align:middle;"), yi(".Q-Graph-Nav img:hover,img.hover", tR), hz || (yi(iR, nR + Hz(eR) + sR), yi(rR, hR + Hz(eR) + aR)), rr[prototype] = {
        _d9: function(t, i) {
            return t._hz == i ? !1 : (t._hz = i, void(t.style[wp] = i ? "visible" : v_))
        },
        _30: function(t, i) {
            var n = i / 2 - this._left._img[D_] / 2 + $a;
            this[E_]._img.style.top = n, this[w_]._img[ea].top = n, this._navPane[ea][Da] = t + $a, this[__][ea][Na] = i + $a
        },
        _my2: function(t, i, n, e) {
            this._d9(this._top, t), this._d9(this[E_], i), this._d9(this[T_], n), this._d9(this._right, e)
        },
        _i5: function() {
            var t = this._navPane[pp];
            t && t[Ev](this._navPane)
        },
        _j5: function() {
            var t = this[P_]._kk;
            if (t) {
                var i = t[bo];
                if (i[$f]()) return void this[Po](!1, !1, !1, !1);
                var n = t[cT],
                    e = n.y > i.y + 1,
                    s = n.x > i.x + 1,
                    r = n[Wh] < i[Wh] - 1,
                    h = n[Xh] < i[Xh] - 1;
                this[Po](e, s, r, h)
            }
        }
    };
    var sU = 10;
    yi(oR, fR), yi(uR, "background-color: #7E7E7E;" + Hz(eR) + ": background-color 0.2s linear;"), yi(".Q-Graph-ScrollBar--V", "width: 8px;right: 0px;"), yi(".Q-Graph-ScrollBar--H", "height: 8px;bottom: 0px;"), yi(".Q-Graph-ScrollBar--V.Both", cR), yi(".Q-Graph-ScrollBar--H.Both", _R), hz || (yi(dR, nR + Hz(eR) + lR), yi(".Q-Graph:hover .Q-Graph-ScrollPane", hR + Hz(eR) + ":opacity 0.3s linear;")), hr.prototype = {
        _i5: function() {
            this[vR]._i5(), this._horizontalDragSupport._i5(), delete this._verticalDragSupport, delete this._horizontalDragSupport, this._m4[pp] && this._m4[pp][Ev](this._m4)
        },
        _m4: null,
        _myh: null,
        _86: null,
        init: function(t) {
            var n = document[s_](r_);
            n.className = bR, li(n, {
                width: p_,
                height: p_,
                position: y_
            });
            var e = document.createElement(r_);
            e.className = "Q-Graph-ScrollBar Q-Graph-ScrollBar--V";
            var s = document.createElement(r_);
            s.className = "Q-Graph-ScrollBar Q-Graph-ScrollBar--H", n.appendChild(e), n[c_](s), t.appendChild(n), this._m4 = n, this._86 = s, this[yR] = e, s.isH = !0;
            var r = this,
                h = {
                    onstart: function(t, i) {
                        i[lh].add(R_)
                    },
                    onrelease: function(t, i) {
                        i[lh][remove](R_)
                    },
                    ondrag: function(t, i) {
                        var n = r[P_]._kk;
                        if (n) {
                            var e = i.isH,
                                s = e ? t.dx : t.dy;
                            if (s && i.scale) {
                                var h = n[io] / i[io];
                                e ? n.translate(-h * s, 0) : n[to](0, -h * s), wY.stopEvent(t)
                            }
                        }
                    },
                    enddrag: function(t, i) {
                        var n = r._n0aseCanvas._kk;
                        if (n && n[gR]) {
                            var e = i.isH,
                                s = e ? t.vx : t.vy;
                            if (Math.abs(s) > .1) {
                                var h = n.scale / i[io];
                                s *= h, e ? n._9d(-s, 0) : n._9d(0, -s)
                            }
                        }
                    }
                };
            this[vR] = new pi(e, h), this._horizontalDragSupport = new pi(s, h)
        },
        _30: function() {
            var t = this[P_]._kk;
            t && t.callLater(this._j5[ch](this))
        },
        _j5: function() {
            var t = this[P_]._kk;
            if (t) {
                var i = t[bo];
                if (i[$f]()) return this._4f(!1), void this._4k(!1);
                var n = t[cT],
                    e = t.width,
                    s = t.height,
                    r = t[io],
                    h = 1 / r,
                    a = n.x > i.x + h || n[Xh] < i[Xh] - h,
                    o = n.y > i.y + h || n[Wh] < i[Wh] - h,
                    f = a && o;
                f ? (P(this[yR], pR), P(this._86, pR)) : (R(this[yR], pR), R(this._86, pR)), this._4f(a, n, i, f ? e - sU : e), this._4k(o, n, i, f ? s - sU : s)
            }
        },
        _4f: function(t, i, n, e) {
            if (!t) return this._86.style[cw] = b_, void(this._86[io] = 0);
            var s = Math.min(i.x, n.x),
                r = Math.max(i[Xh], n[Xh]),
                h = r - s,
                a = e / h;
            this._86[io] = a, this._86[ea][qo] = parseInt((i.x - s) * a) + $a, this._86.style[Xh] = parseInt((r - i.right) * a) + $a, this._86[ea].display = ""
        },
        _4k: function(t, i, n, e) {
            if (!t) return this[yR][ea][cw] = b_, void(this._myh.scale = 0);
            var s = Math.min(i.y, n.y),
                r = Math.max(i[Wh], n.bottom),
                h = r - s,
                a = e / h;
            this._myh.scale = a, this[yR][ea].top = parseInt((i.y - s) * a) + $a, this[yR].style[Wh] = parseInt((r - i[Wh]) * a) + $a, this[yR].style.display = ""
        }
    }, ar[prototype] = {
        shape: null,
        initialize: function() {
            k(this, ar, NM), this[HP](), Uq.initBindingProperties(this)
        },
        _myj: function() {
            this[zp] = new Jq(this[Bf][UT]), this.addChild(this[zp], 0), this[tA] = this.image
        },
        invalidateShape: function() {
            this.image.invalidateData(), this[Wk]()
        },
        _$s: function(t, i, n) {
            var e = this._n27[RC](this, t, i, n);
            return e = Bq.onBindingPropertyChange(this, t, i, n) || e, Uq.onBindingPropertyChange(this, t, i, n) || e
        },
        doValidate: function() {
            this[tA] && (this.image[ko] = this[ko].path, this.body[bf] = null != this._2e, this[tA][qT] = this._2e);
            var t = this.$data[PT],
                i = 0,
                n = 0;
            t && (i = t.x, n = t.y);
            var e = this.$x != i || this.$y != n;
            return e && (this[iA] = !0), this.$x = i, this.$y = n, ElementUI.prototype[BM][call](this) || e
        }
    }, E(ar, ElementUI), J(ar[prototype], {
        path: {
            get: function() {
                return this.data[UT]
            }
        },
        length: {
            get: function() {
                return this.data[length]
            }
        }
    }), ar[prototype].addPoint = function(t, i, n) {
        var e = this._ik(t, i),
            s = this[ko],
            r = En(s[UT], e.x, e.y, n);
        r && (s.pathSegments = r)
    }, or.prototype = {
        _mg: function() {
            this._j2.style[wp] = rk
        },
        _jl: function() {
            this._j2.style[wp] = v_
        },
        clear: function() {
            this._9a[Hd](), this._n2r()
        },
        contains: function(t) {
            return t instanceof Object && t.id && (t = t.id), this._9a[yu](t)
        },
        _4v: function(t) {
            Iq[cc](this._j2, f_, t ? ek + t.join(Ch) + ")" : "")
        },
        addDrawable: function(t, i) {
            if (i) {
                var n = {
                    id: ++qG,
                    drawable: t,
                    scope: i
                };
                return this._9a.add(n), n
            }
            return t.id || (t.id = ++qG), this._9a.add(t), t
        },
        removeDrawable: function(t) {
            return t.id ? void this._9a.remove(t) : this._9a.removeById(t)
        },
        _9a: null,
        invalidate: function() {
            this[Nw]()
        },
        _n2r: function() {
            this[P_]._6b || this._j7()
        },
        _iw: function(t, i) {
            this._j2.setSize(t, i)
        },
        _j7: function() {
            var t = this[P_][lb],
                i = this.g;
            i._kr(), i.save(), this[P_]._9s(i);
            for (var n = this._9a._jk, e = 0, s = n[length]; s > e; e++) i[Qa](), i.beginPath(), this._hk(i, n[e], t), i[Pm]();
            i[Pm]()
        },
        _hk: function(t, i, n) {
            return i instanceof Function ? void i(t, n) : void(i[mR] instanceof Function && i.scope && i[mR].call(i[Yl], t, n))
        }
    }, oz[xR] = !0;
    var rU = function(t) {
        this._kk = t
    };
    oz.ANIMATION_MAXTIME = 600, oz.ANIMATION_TYPE = pY.easeOut, rU.prototype = {
        _kk: null,
        _my: .001,
        _dv: null,
        _n22: function(t) {
            return t > 1 ? 1 : -1 > t ? -1 : t
        },
        _gw: function(t, i, n) {
            this._m3(), t *= .6, i *= .6, t = this[ER](t), i = this[ER](i);
            var e = Math[uo](t * t + i * i);
            if (.01 > e) return !1;
            var s = Math.min(oz[wR], e / this._my);
            this[kR] = t, this[TR] = i, this._myX = t / s, this._myY = i / s, this._7i(this._5k, s, pY[MR], n)
        },
        _7i: function(t, i, n, e, s) {
            this._dv && this._dv._m3(), s && (this[IR] = !0, this._kk[OR](!0)), this._4o(), this._dv = new xY(t, this, i, n), this._dv._7c = this._7c[ch](this), this._dv._ks(e)
        },
        _4o: function() {
            this._kk[jR]()
        },
        _7c: function() {
            this[IR] && (this._kk[OR](!1), delete this.__delayRender), this._kk[SR]()
        },
        _dy: function() {
            return this._dv && this._dv._dy()
        },
        _5k: function(t, i) {
            if (0 != t) {
                var n = this._speedX * i - .5 * this[CR] * i * i,
                    e = this[TR] * i - .5 * this._myY * i * i;
                this._speedX -= this[CR] * i, this[TR] -= this[AR] * i, this._kk.translate(n, e)
            }
        },
        _m3: function() {
            this._dv && this._dv._m3()
        },
        _iv: function(t) {
            var i = this[LR] + (this[PR] - this[LR]) * t,
                n = this._fromTY + (this[RR] - this._fromTY) * t,
                e = this._fromScale + (this[DR] - this[NR]) * t;
            this._kk[lk](i, n, e, this.toInt)
        },
        _kt: function(t, i, n, e, s) {
            this._m3();
            var r = this._kk,
                h = r.scale;
            if (0 >= n && (n = h), t != r.tx || i != r.ty || n != h) {
                var a, o, f;
                e instanceof Object && (a = e.duration, o = e[BR], f = e.animationType);
                var u = r.tx,
                    c = r.ty;
                if (!a) if (n != h) {
                    var _ = n > h ? n / h : h / n;
                    _ = Math.log(_) / Math.log(1.3), a = 60 * _
                } else {
                    var d = dz(t, i, u, c);
                    a = d / 2
                }
                o = o || oz[wR], f = f || oz[$R], a = Math.min(o, a), this[LR] = u, this[FR] = c, this[NR] = h, this[PR] = t, this[RR] = i, this[DR] = n, this._7i(this._iv, a, f, s, n != h)
            }
        }
    }, oz[GR] = 8, oz.INTERACTION_HANDLER_SIZE_DESKTOP = 4, oz[zR] = 30, oz[YR] = 20;
    var hU = Math.PI / 4;
    cr[prototype] = {
        onElementRemoved: function(t, i) {
            this.element && (t == this[HR] || $(t) && m(t, this[HR])) && this[dy](i)
        },
        onClear: function(t) {
            this[HR] && this[dy](t)
        },
        destroy: function() {
            delete this.element, this[qR]()
        },
        invalidate: function() {
            this[z_][Dw]()
        },
        removeDrawable: function() {
            this[UR] && (this.topCanvas[qR](this[UR]), delete this[UR], this[Dw]())
        },
        addDrawable: function() {
            this[UR] || (this._fzId = this[z_][WR](this.doDraw, this).id, this[Dw]())
        },
        doDraw: function() {},
        escapable: !0,
        onkeydown: function(t, i) {
            this[XR] && 27 == t.keyCode && (z(t), this[dy](i))
        }
    }, wY[VR] = cr, _r[prototype] = {
        defaultCursor: q_,
        getInteractionInstances: function(t) {
            if (!this[Y_]) return null;
            for (var i = [], n = 0, e = this[Y_].length; e > n; n++) {
                var s = this[Y_][n];
                s instanceof Function ? i[push](new s(t)) : s instanceof Object && i[push](s)
            }
            return i
        }
    }, dr[prototype] = {
        _e2: null,
        _jy: null,
        destroy: function() {
            k(this, dr, dy, arguments), delete this._jy, delete this._98, delete this._e2
        },
        doDraw: function(t) {
            var i = this[xa];
            i && (i[Jf](function(i) {
                this[ZR](t, i)
            }, this), this[JR] && t[of](), this[KR](t))
        },
        styleDraw: function(t) {
            var i = lr(this.graph.interactionProperties, this[QR](this[Gc]));
            i[To] && (t.lineWidth = i[To], i.lineCap && (t[dm] = i[dm]), i.lineJoin && (t.lineJoin = i[I_]), i[Ff] && (t.lineDash = i[Ff], t.lineDashOffset = i[Wf] || 0), t[O_] = i[O_], t[Eo]()), i[Tp] && (t[Tp] = i[Tp], t[wo]())
        },
        drawPoint: function(t, i, n) {
            if (n) return void t.moveTo(i.x, i.y);
            if (wY[Eh](i)) {
                var e = i[0],
                    s = i[1];
                t[kx](e.x, e.y, s.x, s.y)
            } else t[Du](i.x, i.y)
        },
        setCurrentPoint: function(t) {
            this[tD] = t
        },
        addPoint: function(t) {
            this._jy || (this._jy = [], this[WR]()), this._jy[push](t), this[Dw]()
        }
    }, E(dr, cr), J(dr[prototype], {
        currentPoint: {
            get: function() {
                return this._98
            },
            set: function(t) {
                this._98 = t, this[Dw]()
            }
        },
        prevPoint: {
            get: function() {
                return this._jy && this._jy[length] ? this._jy[this._jy[length] - 1] : null
            }
        },
        points: {
            get: function() {
                return this._98 && this._jy && this._jy[length] ? this._jy[concat](this._98) : void 0
            }
        }
    }), wY[iD] = dr, vr[prototype] = {
        destroy: function() {
            k(this, vr, dy, arguments), delete this[nD], this._l0 && (clearTimeout(this._l0), delete this._l0)
        },
        doDraw: function(t, i) {
            return this._jy ? this._jy[length] <= 1 ? gr[prototype][eD].call(this, t, i) : void k(this, vr, eD, arguments) : void 0
        },
        ondblclick: function(t, i) {
            this.destroy(i)
        },
        finish: function(t, i, n) {
            var e;
            this._jy && this._jy.length >= 2 && (this._jy[Xx](), e = new fz, l(this._jy, function(t) {
                if (wY[Eh](t)) {
                    var i = t[0],
                        n = t[1];
                    e.add(new rH(kY.SEGMENT_QUAD_TO, [i.x, i.y, n.x, n.y]))
                } else e.add(new rH(kY.SEGMENT_LINE_TO, [t.x, t.y]))
            }, this)), i[sD](this[nD], n, t, e), this.destroy(i)
        },
        _n0f: function(t, i) {
            return t instanceof Cq && i[GL](t)
        },
        _e5: function(t, i) {
            return t instanceof Cq && i[zL](t, this[nD])
        },
        _9c: function(t, i) {
            var n = i.getUI(t);
            return n && n.bodyBounds ? n[Yc].center : t[NT]
        },
        onstart: function(t, i) {
            if (this[nD]) {
                var n = t[xL]();
                return this._e5(n, i) ? void this[rD](t, i, n) : void this[Ba](this[hD](t))
            }
        },
        startdrag: function(t, i) {
            if (!this[nD] && !t[aD]) {
                var n = t[xL]();
                n && this[oD](n, i) && (t.responded = !0, this[nD] = n, this[Ba](this._9c(n, i)))
            }
        },
        _n0z: function(t) {
            this._l0 && (clearTimeout(this._l0), delete this._l0), this._l0 = setTimeout(function(t) {
                if (delete this._l0, this.start && this.currentPoint) {
                    var i = t.x - this.currentPoint.x,
                        n = t.y - this[tD].y;
                    Math.sqrt(i * i + n * n) * this[Gc][io] <= 2 && this[Ba](this[tD])
                }
            }.bind(this, this[hD](t)), oz[Nv])
        },
        ondrag: function(t, i) {
            this.onmousemove(t, i)
        },
        enddrag: function(t, i) {
            if (this.start) {
                var n = t[xL]();
                this._e5(n, i) && this.finish(t, i, n)
            }
        },
        onrelease: function(t, i) {
            Qz(t) && this[dy](i)
        },
        onmousemove: function(t, i) {
            this[nD] && (this.currentPoint = this[hD](t), Qz(t) && this[fD](t, i))
        },
        toLogicalPoint: function(t) {
            return this[Gc][dk](t)
        },
        getDefaultDrawStyles: function() {
            return {
                lineWidth: this.graph[YL](Nq.EDGE_WIDTH),
                strokeStyle: this[Gc].getDefaultStyle(Nq[lj]),
                lineDash: this[Gc][YL](Nq[mj]),
                lineDashOffset: this[Gc].getDefaultStyle(Nq[Ej]),
                lineCap: this[Gc][YL](Nq[BS]),
                lineJoin: this[Gc][YL](Nq[$S])
            }
        }
    }, E(vr, dr), wY.CreateEdgeInteraction = vr, br[prototype] = {
        getDefaultDrawStyles: function() {
            return {
                lineWidth: this[Gc][YL](Nq[fI]),
                strokeStyle: this[Gc][YL](Nq[cI]),
                fillStyle: this[Gc][YL](Nq.SHAPE_FILL_COLOR)
            }
        },
        finish: function(t, i) {
            if (this._jy && this._jy[length]) {
                var n = this._jy,
                    e = 0,
                    s = 0,
                    r = 0;
                n[Jf](function(t) {
                    return wY[Eh](t) ? void t[Jf](function() {
                        e += t.x, s += t.y, r++
                    }) : (e += t.x, s += t.y, void r++)
                }), e /= r, s /= r;
                var h = [];
                n[Jf](function(t, i) {
                    if (0 == i) return void h[push](new rH(kY.SEGMENT_MOVE_TO, [t.x - e, t.y - s]));
                    if (wY[Eh](t)) {
                        var n = t[0],
                            r = t[1];
                        h[push](new rH(kY[em], [n.x - e, n.y - s, r.x - e, r.y - s]))
                    } else h[push](new rH(kY[uD], [t.x - e, t.y - s]))
                }), this[s_](t, h, e, s), this[dy](i)
            }
        },
        startdrag: function(t) {
            t.responded = !0
        },
        createElement: function(t, i, n, e) {
            return this[Gc][cD](t, i, n, e)
        },
        onstart: function(t, i) {
            var n = i[dk](t);
            this._e2 = n, this[Ba](n)
        },
        onmousemove: function(t, i) {
            this._e2 && (this[tD] = i[dk](t))
        },
        ondblclick: function(t, i) {
            if (this._e2) {
                if (this._jy.length < 3) return void this[dy](i);
                delete this._jy[this._jy[length] - 1], this.finish(t, i)
            }
        },
        isClosePath: !0
    }, E(br, dr), wY.CreateShapeInteraction = br, yr.prototype = {
        isClosePath: !1,
        createElement: function(t, i, n, e) {
            return this.graph[_D](t, i, n, e)
        },
        getDefaultDrawStyles: function() {
            return {
                lineWidth: Kq[Nq[fI]],
                strokeStyle: Kq[Nq[cI]],
                lineDash: this[Gc][YL](Nq[dI]),
                lineDashOffset: this.graph[YL](Nq[vI]),
                lineCap: this[Gc][YL](Nq[BS]),
                lineJoin: this[Gc][YL](Nq[$S])
            }
        }
    }, E(yr, br), wY.CreateLineInteraction = yr, gr[prototype] = {
        destroy: function(t) {
            k(this, gr, dy, arguments), t.cursor = "", this[nD] = null
        },
        doDraw: function(t) {
            if (this.start && this.currentPoint) {
                var i, n;
                this[Gc].interactionProperties && (i = this[Gc].interactionProperties[Xk], n = this[Gc][TP][CT]), i = i || this.graph[dD] || wY[lD], n = n || this.graph.edgeType;
                var e = i[vD] || wY[lD][vD],
                    s = this[Gc][zc](this[nD]);
                s && s[Yc] && (s = s[Yc][Uc], e(t, s, this[tD], n), this[KR](t))
            }
        },
        canLinkFrom: function(t, i) {
            return t instanceof Cq && i.canLinkFrom(t)
        },
        canLinkTo: function(t, i) {
            return t instanceof Cq && i[zL](t, this[nD])
        },
        startdrag: function(t, i) {
            var n = t.getData();
            this[GL](n, i) && (t[aD] = !0, this[nD] = n, i[DP] = Oy, this[WR]())
        },
        ondrag: function(t, i) {
            this[nD] && (wY.stopEvent(t), this.currentPoint = i[dk](t), this[Dw]())
        },
        enddrag: function(t, i) {
            if (this.start) {
                this[Dw]();
                var n = t.getData();
                this[zL](n, i) && i[sD](this[nD], n, t), this.destroy(i)
            }
        },
        getDefaultDrawStyles: function() {
            return {
                lineWidth: this.graph[YL](Nq[_j]),
                strokeStyle: this.graph[YL](Nq.EDGE_COLOR),
                lineDash: this[Gc][YL](Nq.EDGE_LINE_DASH),
                lineDashOffset: this.graph[YL](Nq[Ej]),
                lineCap: this[Gc][YL](Nq.LINE_CAP),
                lineJoin: this[Gc][YL](Nq[$S])
            }
        }
    }, E(gr, dr), wY[bD] = gr, oz[yD] = !1, kr[prototype] = {
        html: null,
        createHTML: function() {
            var t = document[s_](gD);
            t[dh] = pD, t.style.position = kw, t.style[Op] = Uc, t[ea][ug] = mD, t.style[Ho] = xD, t[ea][ED] = "0px 0px 10px rgba(40, 85, 184, 0.75)", t.style[cw] = b_, t[ea][bw] = v_;
            var n = this;
            return t.oninput = function(t) {
                n.onValueChange(t)
            }, t[wD] = function(t) {
                return 27 == t[SE] ? void n[kD]() : void 0
            }, t.onkeypress = function(i) {
                if (13 == i.keyCode || 10 == i[SE]) {
                    if (i[kh](), i[jE] || i[TD] || i.shiftKey) return Er(t, ho), void n[MD](i);
                    n.stopEdit()
                }
            }, document[tA].appendChild(t), t
        },
        setText: function(t, i) {
            this[RP][J_] = t || "", i && (this[RP][ea][V_] = i), wr(this[RP]), this[ID](this[RP])
        },
        onSizeChange: function(t) {
            var i = (t[U_], t[W_], xr(t));
            return t[ea].width = i[Da] + 30 + $a, t[ea][Na] = i[Na] + 10 + $a, i
        },
        onValueChange: function(t) {
            var i = t.target;
            this[ID](i), i[ea][qo] = i.x - i[U_] / 2 + $a
        },
        onClickOnWindow: function(t) {
            t[rc] != this[RP] && (oz.LABEL_EDITOR_SUBMIT_WHEN_LOST_FOCUS ? this[OD]() : this[kD]())
        },
        startEdit: function(i, n, e, s, r) {
            this[RP] || (this.html = this.createHTML()), this.stopEditWhenClickOnWindow || (this.stopEditWhenClickOnWindow = function(t) {
                this[jD](t)
            }[ch](this)), window.addEventListener(Mb, this.stopEditWhenClickOnWindow, !0), this[fc] = r, this[RP].x = i, this[RP].y = n, this.html[ea].display = KP, mr(this.html, i, n), this[SD](e, s || 10), mr(this[RP], i, n)
        },
        isEditing: function() {
            return b_ != this[RP][ea][cw]
        },
        cancelEdit: function() {
            this.stopEdit(!0)
        },
        stopEdit: function(i) {
            if (this[CD]()) {
                window.removeEventListener(Mb, this.stopEditWhenClickOnWindow);
                var n = this.html[J_];
                if (!i && this.callback && this[fc](n) === !1) return !1;
                this[RP][ea].display = b_, this[RP][J_] = null, this.callback = null
            }
        },
        destroy: function() {
            this[RP] && document.body[Ev](this[RP])
        }
    }, wY[AD] = kr;
    var aU = function(t) {
        this[Gc] = t
    };
    aU[prototype] = {
        destroy: function(t) {
            t.labelEditor && (t.labelEditor[dy](), delete t[LD])
        },
        ondblclick: function(t, i) {
            var n = t[xL]();
            if (n) {
                if (n[PD] !== !1) {
                    if (i[aL] && i.isEditable(n)) {
                        var e = i[Jc](t);
                        if (e instanceof Zq && e[aL] !== !1) {
                            var s = i[LD];
                            s || (i[LD] = s = new kr);
                            var r = e.getBounds();
                            return r = i[qk](r.x + r[Da] / 2, r.y + r[Na] / 2), r = pr(r.x, r.y, i[RP]), void i.startLabelEdit(n, e, s, r)
                        }
                    }
                    var h = n instanceof Pq,
                        a = n instanceof Sq && n[RD]();
                    return n._3u && (mi(t) || !h && !a) ? void(i.currentSubNetwork = n) : h ? (n[Vk] = !n[Vk], void this.graph[bP](new Cr(this[Gc], Cr.GROUP_EXPANDED, t, n))) : void(a && this[Gc][fP](n) && this[Gc].onInteractionEvent(new Cr(this[Gc], Cr[DD], t, n)))
                }
            } else {
                if (i.currentSubNetwork) return void i[ND]();
                if (i[BD]) {
                    var o = i[$D] || 1;
                    Math.abs(i[io] - o) < 1e-4 ? i[FD]() : i.moveToCenter(o)
                }
            }
        }
    };
    var oU = function(t) {
        this[Gc] = t
    };
    oU[prototype] = {
        onkeydown: function(t, i) {
            if (i[aL]) {
                var n = t.keyCode;
                if (8 == n || 46 == n || 127 == n) return i.removeSelectionByInteraction(t), void F(t);
                if (mi(t)) {
                    if (67 == n);
                    else if (86 == n);
                    else if (90 == n);
                    else if (89 != n) return;
                    F(t)
                }
            }
        }
    }, wY[GD] = oU;
    var fU = function(t) {
        this[Gc] = t
    };
    fU[prototype] = {
        onkeydown: function(i, n) {
            if (i[ma] && 83 == i[SE]) {
                var e = n[zD](n.scale, n[cT]),
                    s = window[ja](),
                    r = s.document;
                r.title = YD + e[Da] + HD + e[Na];
                var h = r[s_](a_);
                h.src = e[ko], r[tA][c_](h), F(i)
            }
        }
    };
    var uU = function(t) {
        this[Gc] = t
    };
    uU.prototype = {
        destroy: function() {
            delete this[qD], delete this.currentDraggingElement
        },
        _1t: function(t) {
            var i = new fz;
            return t[B_][Jf](function(n) {
                t[aP](n) && t[$_](n) && i.add(n)
            }, this), i
        },
        onstart: function(t, i) {
            this[UD] && this[dy](i)
        },
        startdrag: function(t, i) {
            if (!(t.responded || t[Fh] && 1 != t[Fh][length])) {
                var n = t[xL]();
                if (!n || !i[WD](n) || !i[aP](n)) return void this.destroy(i);
                t[aD] = !0, this.currentDraggingElement = n, this[qD] = this._1t(i);
                var e = new Cr(i, Cr[XD], t, this[UD], this.draggingElements.datas);
                return i.beforeInteractionEvent(e) === !1 ? void this[dy](i) : void i[bP](e)
            }
        },
        ondrag: function(t, i) {
            if (this[UD]) {
                if (t[Fh] && 1 != t[Fh][length]) return void this[ny](t, i);
                z(t);
                var n = t.dx,
                    e = t.dy,
                    s = i[io];
                n /= s, e /= s;
                var r = new Cr(i, Cr.ELEMENT_MOVING, t, this.currentDraggingElement, this[qD].datas);
                i[VD](this.draggingElements[dd], n, e), i[bP](r)
            }
        },
        enddrag: function(t, i) {
            if (this.currentDraggingElement) {
                if (this[qD] && this.draggingElements.length) {
                    if (t[OE]) {
                        var n, e = i[dk](t),
                            s = e.x,
                            r = e.y;
                        i[ZD](function(t) {
                            var i = t[ko];
                            if (!this.draggingElements[Zc](i) && t.uiBounds[go](s - t.x, r - t.y) && t[Jc](s, r, 1)) {
                                if (i instanceof wY[kP]) {
                                    if (!i[e_]) return;
                                    for (var e = this[qD][length]; e-- > 0;) {
                                        var h = this.draggingElements.get(e);
                                        if (h instanceof wY[TL] && h[JD](i)) return
                                    }
                                    return n = i, !1
                                }
                                return (i[e_] || i._i6() && i[Vk]) && (n = i), !1
                            }
                        }, this), n && this.draggingElements.forEach(function(t) {
                            for (var i = t.parent; i;) {
                                if (this[qD][Zc](i)) return;
                                i = i[Eu]
                            }
                            t.parent = n
                        }, this)
                    }
                    var h = new Cr(i, Cr[KD], t, this[UD], this[qD][dd]);
                    i.onInteractionEvent(h)
                }
                this.destroy(i)
            }
        },
        onpinch: function(t, i) {
            this[UD] && this.enddrag(t, i)
        },
        step: 1,
        onkeydown: function(t, i) {
            if (mi(t)) {
                var n, e;
                if (37 == t[SE] ? n = -1 : 39 == t[SE] ? n = 1 : 38 == t[SE] ? e = -1 : 40 == t.keyCode && (e = 1), n || e) {
                    var s = this._1t(i)[dd];
                    if (0 != s[length]) {
                        F(t), n = n || 0, e = e || 0;
                        var r = this.step / i[io],
                            h = new Cr(i, Cr[KD], t, null, s);
                        i[VD](s, n * r, e * r), i[bP](h)
                    }
                }
            }
        }
    };
    var cU = function(t) {
        this[Gc] = t
    };
    cU.prototype = {
        onkeydown: function(t, i) {
            mi(t) || (37 == t[SE] ? (this._57(i, 1, 0), F(t)) : 39 == t[SE] ? (this._57(i, -1, 0), F(t)) : 38 == t[SE] ? (this._57(i, 0, 1), F(t)) : 40 == t[SE] && (this._57(i, 0, -1), F(t)))
        },
        _57: function(t, i, n) {
            t._9d(i, n)
        },
        onstart: function(t, i) {
            this._ks && this.destroy(i)
        },
        _ks: !1,
        startdrag: function(t, i) {
            if (!t.responded) {
                t[aD] = !0, this._ks = !0, i.cursor = dY;
                var n = new Cr(i, Cr[QD], t);
                i[bP](n)
            }
        },
        ondrag: function(t, i) {
            this._ks && i[to](t.dx || 0, t.dy || 0)
        },
        enddrag: function(t, i) {
            if (this._ks) {
                if (i.enableInertia !== !1) {
                    var n = t.vx,
                        e = t.vy;
                    (Math.abs(n) > .1 || Math.abs(e) > .1) && i._9d(n, e)
                }
                this.destroy(i);
                var s = new Cr(i, Cr[tN], t);
                i[bP](s)
            }
        },
        startpinch: function(t, i) {
            i[OR](!0)
        },
        onpinch: function(t, i) {
            this._ks = !0;
            var n = t[vb];
            if (n) {
                var e = i.globalToLocal(t.center);
                i.zoomAt(n, e.x, e.y, !1)
            }
        },
        endpinch: function(t, i) {
            i[OR](!1)
        },
        destroy: function(t) {
            this._ks = !1, t[DP] = null
        }
    }, Tr[prototype] = {
        _1b: function(t) {
            this[HR] && t.source == this[HR] && this[Gc].callLater(function() {
                this._j5()
            }, this)
        },
        _7: function() {
            this[iN] || (this[iN] = !0, this[Gc][nN].addListener(this._1b, this))
        },
        _5: function() {
            this._m5PropertyChangeListing = !1, this.graph[nN][Nx](this._1b, this)
        },
        onElementRemoved: function(t, i) {
            this.element && (t == this[HR] || Array[Eh](t) && m(t, this[HR])) && this.destroy(i)
        },
        onClear: function(t) {
            this[HR] && this[dy](t)
        },
        destroy: function() {
            this[Gc][DP] = null, this[HR] && delete this.element[eN], this[sN] = !1, delete this[HR], delete this._96, delete this._98, delete this._n2anEdit, this._79(), this._5()
        },
        _79: function() {
            this.drawLineId && (this[z_][qR](this[rN]), delete this[rN], this[z_][Dw]())
        },
        _n0e: function() {
            this[rN] && this[z_].contains(this.drawLineId) || (this.drawLineId = this[z_][WR](this[hN], this).id, this[z_][Dw]())
        },
        _96: null,
        _5o: function(t) {
            this._96 = t, this[Dw]()
        },
        _e4: function(t, i, n) {
            t.beginPath(), i.isControlPoint ? t[xu](i.x - this.handlerSize / n, i.y - this[od] / n, this[od] / n * 2, this.handlerSize / n * 2) : t.arc(i.x, i.y, this[od] / n, 0, 2 * Math.PI, !1), t[To] = 1 / n, t.lineDash = [], t[O_] = C_, t.fillStyle = "rgba(255, 255, 0, 0.8)", t[Eo](), t[wo]()
        },
        _fz: function(t, i, n, e) {
            e ? t.moveTo(i, n) : t[Du](i, n)
        },
        drawLine: function(t, i) {
            if (this._96 && this._96.length) {
                t.save();
                var n = this[HR] instanceof Aq;
                n && (t[to](this[HR].x, this.element.y), this[HR].rotate && t[jo](this[HR][jo]));
                var e, s = [];
                t[ym](), this._96.length, this._96[Jf](function(i) {
                    if (i[Oo] != kY.SEGMENT_CLOSE) for (var n = 0, r = i[xa]; n + 1 < r[length];) {
                        var h = r[n],
                            a = r[n + 1],
                            o = {
                                x: h,
                                y: a,
                                isControlPoint: this._7b(i, n)
                            };
                        s[push](o), this._fz(t, o.x, o.y, null == e), e = o, n += 2
                    }
                }, this), t.lineWidth = 1 / i, t.lineDash = [2 / i, 3 / i], t.strokeStyle = aN, t.stroke(), s[Jf](function(n) {
                    this._e4(t, n, i)
                }, this), t[Pm]()
            }
        },
        invalidate: function() {
            this[z_][Dw]()
        },
        _38: function(t) {
            if (this[HR] != t && (this[HR] && this[dy](), t && this[oN](t))) {
                var i = this._5b(t, this[Gc]);
                i && (this.element = t, t[eN] = !0, this._n2anEdit = !0, this._5o(i), this._7(), this[fN]())
            }
        },
        _j5: function() {
            if (this[rN] && this[HR]) {
                var t = this._5b(this[HR], this[Gc]);
                return t ? void this._5o(t) : void this.destroy(this.graph)
            }
        },
        _5b: function(t, i) {
            if (i[oN](t)) {
                var n = t[_L] || [];
                n instanceof fz && (n = n[qd]());
                var e = i[zc](t);
                if (e instanceof wY[lD]) {
                    var s = t.fromAgent,
                        r = t[wu],
                        h = i[zc](s),
                        a = i[zc](r),
                        o = h[Yc][clone](),
                        f = a[Yc].clone(),
                        u = o[Uc],
                        c = f.center,
                        _ = e[_c](wY.Styles[wj]),
                        d = e.getStyle(wY.Styles[VS]);
                    _ && (u.x += _.x || 0, u.y += _.y || 0), d && (c.x += d.x || 0, c.y += d.y || 0), n[splice](0, 0, new wY[am](kY[nm], [u.x, u.y])), n.push(new wY[am](kY[nm], [c.x, c.y]))
                }
                return n
            }
        },
        _ik: function(t, i) {
            t -= this[HR].x, i -= this[HR].y;
            var n = {
                x: t,
                y: i
            };
            return this[HR][jo] && $s(n, -this[HR][jo]), n
        },
        onclick: function(t, i) {
            if (i.editable && t[jE] && this[HR]) {
                var n = this._gh(t, i);
                if (n && n[uN]) return void this[HR].removePathSegmentByIndex(n[Xl]);
                if (this[HR] == t.getData()) {
                    var e = i.toLogical(t),
                        s = i.getUI(this[HR]);
                    s[Ba](e.x, e.y, this[od] || 2)
                }
            }
        },
        isEditable: function(t) {
            return this[Gc].isEditable(t) && (t instanceof Aq || t instanceof Sq && (!t[Ou]() || t[$c]()))
        },
        ondblclick: function(t, i) {
            if (!i.editable) return void(this.element && this.destroy(i));
            var n = t[xL]();
            return !n || n == this[HR] || n[eN] ? void this[dy](i) : void this._38(n)
        },
        onstart: function(t, i) {
            if (this[sN] = !0, !i[aL]) return void(this[HR] && this[dy](i));
            if (!t[aD]) {
                if (this[HR] && this._gh(t, i)) return void(t.responded = !0);
                var n = t[xL]();
                return n && i[cN](n) && n instanceof Aq ? void(this[HR] && n != this[HR] && this[dy]()) : void this._38(n)
            }
        },
        onrelease: function() {
            this._mousePressed = !1, this[HR] && (this[_N] = !0)
        },
        _98: null,
        _gh: function(t, i) {
            var n = i[dk](t);
            this[HR] instanceof Aq && (n = this._ik(n.x, n.y));
            var e, s = i.scale,
                r = this[od] / s,
                h = this._96,
                a = h[length],
                o = this[HR] instanceof wY[kP];
            return h[Jf](function(t, s) {
                for (var f = 0, u = t[xa]; f + 1 < u[length];) {
                    var c = u[f],
                        _ = u[f + 1],
                        d = dz(n.x, n.y, c, _);
                    if (r > d) {
                        if (e = {
                                oldPoints: u[slice](0),
                                segment: t,
                                index: s,
                                pointIndex: f
                            }, o && (e[Xl] -= 1), o && !Mr(t) && (0 == s || s == h.length - 1)) {
                            e.isEndPoint = !0;
                            var l = 0 == s;
                            e[dN] = l;
                            var v = l ? wY[xP][wj] : wY.Styles[VS],
                                b = i[_c](this.element, v) || {};
                            e[lN] = [b.x || 0, b.y || 0]
                        }
                        return this._7b(t, f) && (e.isControlPoint = !0, s > 0 && (e[vN] = h instanceof fz ? h[Mv](s - 1) : h[s - 1]), a > s + 1 && (e.nextSegment = h instanceof fz ? h[Mv](s + 1) : h[s + 1], e[bN][xa] && (e[yN] = e.nextSegment.points[slice](0)))), !1
                    }
                    f += 2
                }
            }, this), e
        },
        _7b: function(t, i) {
            return i == t.points[length] - 2
        },
        startdrag: function(t, i) {
            if (this.element && this[_N] && (this._98 = this._gh(t, i), this._98)) {
                this._79(), t[aD] = !0;
                var n = new Cr(i, Cr[gN], t, this[HR]);
                n[pN] = this._98, i[bP](n)
            }
        },
        onkeyup: function(t, i) {
            this[sN] && 16 != !t[SE] && this.element && this._98 && this._98.delta && this._n2b(this._98[Rb].x, this._98[Rb].y, i, t, !1)
        },
        onkeydown: function(t, i) {
            this[sN] && this[HR] && this._98 && t[OE] && this._98.delta && this[mN](this._98[Rb].x, this._98.delta.y, i, t, !0)
        },
        _n2b: function(t, i, n, e, s) {
            var r = this._98,
                h = this.element,
                a = r[lN],
                o = r.segment;
            if (r.isEndPoint) {
                var f = r.isFrom ? wY[xP][wj] : wY.Styles.EDGE_TO_OFFSET,
                    u = {
                        x: a[0] + t,
                        y: a[1] + i
                    };
                return void h[cc](f, u)
            }
            if (s && r[uN]) {
                var c = {
                        x: a[a[length] - 2] + t,
                        y: a[a.length - 1] + i
                    },
                    _ = r.prevSegment,
                    d = r[bN],
                    l = 20 / n.scale,
                    v = Number[sl],
                    b = v,
                    y = v,
                    g = v;
                _ && (_ = _[Io], v = Math.abs(c.x - _.x), y = Math.abs(c.y - _.y)), d && (d = d[Io], b = Math.abs(c.x - d.x), g = Math.abs(c.y - d.y)), l > v && b > v ? t += _.x - c.x : l > b && v > b && (t += d.x - c.x), l > y && g > y ? i += _.y - c.y : l > g && y > g && (i += d.y - c.y)
            }
            if (r[uN] && Mr(o)) {
                for (var p = o.points[length] - 4; p < o[xa][length];) {
                    var m = a[p] + t,
                        x = a[p + 1] + i;
                    o[xa][p] = m, o[xa][p + 1] = x, p += 2
                }
                if (r.nextSegment && Mr(r[bN])) {
                    var E = r[yN],
                        m = E[0] + t,
                        x = E[1] + i;
                    r[bN][xa][0] = m, r[bN][xa][1] = x
                }
            } else {
                var p = r.pointIndex,
                    m = a[p] + t,
                    x = a[p + 1] + i;
                o[xa][p] = m, o[xa][p + 1] = x
            }
            h.firePathChange();
            var w = new Cr(n, Cr[xN], e, h);
            w[pN] = r, n[bP](w)
        },
        ondrag: function(t, i) {
            if (this[HR] && this._98) {
                var n = this._98,
                    e = this[HR],
                    s = t[EN],
                    r = t[gy],
                    h = i.scale;
                if (s /= h, r /= h, e[jo]) {
                    var a = {
                        x: s,
                        y: r
                    };
                    $s(a, -e.rotate), s = a.x, r = a.y
                }
                n.delta = {
                    x: s,
                    y: r
                }, this._n2b(s, r, i, t, t[OE])
            }
        },
        enddrag: function(t, i) {
            if (this[HR] && this._98) {
                this._n0e(), this._j5();
                var n = new Cr(i, Cr[wN], t, this.element);
                n[pN] = this._98, i.onInteractionEvent(n)
            }
        },
        onmousemove: function(t, i) {
            this[HR] && (i.cursor = t[jE] && (this._gh(t, i) || this.element == t[xL]()) ? "crosshair" : null)
        }
    }, oz[kN] = 1, oz[TN] = V(3724541951), oz[MN] = V(1430753245);
    var _U = function(t) {
        this.graph = t, this[z_] = t._8j[Ok]
    };
    _U.prototype = {
        onstart: function(t, i) {
            this._ks && this.destroy(i)
        },
        startdrag: function(t, i) {
            t[aD] || (t[aD] = !0, this._ks = i[dk](t), i[DP] = Oy, this._$yId = this.topCanvas.addDrawable(this._$y, this).id)
        },
        ondrag: function(t, i) {
            if (this._ks) {
                z(t), this._end = i[dk](t), this.invalidate();
                var n = new Cr(i, Cr[IN], t, i.selectionModel);
                i.onInteractionEvent(n)
            }
        },
        enddrag: function(t, i) {
            if (this._ks) {
                this[ON] && (clearTimeout(this._fnTimer), this[ON] = null), this._fn(!0), this[dy](i);
                var n = new Cr(i, Cr[jN], t, i[B_]);
                i[bP](n)
            }
        },
        onpinch: function(t, i) {
            this._ks && this.enddrag(t, i)
        },
        _$y: function(t, i) {
            t.strokeStyle = oz[TN], t[Tp] = oz[MN], t[To] = oz[kN] / i;
            var n = this._ks.x,
                e = this._ks.y;
            t.rect(n, e, this[SN].x - n, this[SN].y - e), t[wo](), t.stroke()
        },
        invalidate: function() {
            return this.invalidateFlag ? void this[z_].invalidate() : (this[WP] = !0, void(this[ON] = setTimeout(this._fn.bind(this), 100)))
        },
        _fn: function(t) {
            if (this[WP] = !1, this._fnTimer = null, !this._ks || ZG && !t) return void this[z_][Dw]();
            var i = Math.min(this._ks.x, this[SN].x),
                n = Math.min(this._ks.y, this[SN].y),
                e = Math.abs(this._ks.x - this[SN].x),
                s = Math.abs(this._ks.y - this[SN].y);
            if (!e || !s) return void this.graph[B_].clear();
            var r, h = [],
                a = this.graph[io];
            if (this[Gc].forEachVisibleUI(function(t) {
                    t._hz && this[Gc][F_](t.$data) && (r = t._fl, (ai(i, n, e, s, r.x + t._x, r.y + t._y, r.width, r[Na]) || Cn(i, n, e, s, t, a)) && h[push](t.$data))
                }, this), this.graph[B_].set(h), this[z_].invalidate(), !t) {
                var o = new Cr(this.graph, Cr[CN], null, this[Gc].selectionModel);
                this[Gc][bP](o)
            }
        },
        destroy: function(t) {
            this._ks = null, t.cursor = null, this._$yId && (this[z_][qR](this._$yId), delete this._$yId, this.topCanvas[Dw]())
        }
    };
    var dU = O({
            "super": _U,
            onstart: null,
            startdrag: null,
            ondrag: null,
            enddrag: null,
            accept: function(t, i, n) {
                return n.enableRectangleSelectionByRightButton !== !1
            },
            oncontextmenu: function(t, i) {
                i[AN] || z(t)
            },
            onstart2: function() {
                _U[prototype].onstart[apply](this, arguments)
            },
            startdrag2: function(t, i) {
                t[aD] || (i[AN] && i[AN][LN] instanceof Function && i[AN].hide(), _U[prototype][Zb].apply(this, arguments))
            },
            ondrag2: function() {
                _U[prototype].ondrag[apply](this, arguments)
            },
            enddrag2: function() {
                _U[prototype][ny][apply](this, arguments)
            }
        }),
        hU = Math.PI / 4;
    Ir[prototype] = {
        _e7: !1,
        _e9: !1,
        _1b: function(t) {
            this[HR] && t[Wo] == this[HR] && this[Gc][KL](function() {
                this._9g()
            }, this)
        },
        _7: function() {
            this[iN] || (this[iN] = !0, this[Gc][nN][ld](this._1b, this))
        },
        _5: function() {
            this._m5PropertyChangeListing = !1, this[Gc].dataPropertyChangeDispatcher[Nx](this._1b, this)
        },
        onElementRemoved: function(t, i) {
            this.element && (t == this[HR] || $(t) && m(t, this[HR])) && this[dy](i)
        },
        onClear: function(t) {
            this[HR] && this[dy](t)
        },
        ondblclick: function(t, i) {
            this.element && this[dy](i)
        },
        destroy: function(t) {
            t[DP] = null, delete this.element, delete this._dd, delete this[nA], delete this._98, delete this._n2anEdit, delete this._jy, delete this._rotatePoint, delete this._e9, delete this._e7, delete this[PN], this._79(), this._5()
        },
        _79: function() {
            this._fzId && (this.topCanvas[qR](this._fzId), delete this[UR], this.topCanvas[Dw]())
        },
        _n0e: function() {
            this[UR] && this[z_].contains(this[UR]) || (this._fzId = this[z_][WR](this._fz, this).id, this[z_][Dw]())
        },
        _dd: null,
        _jy: null,
        _7x: function(t) {
            this._dd = t;
            var i = this._dd.x,
                n = this._dd.y,
                e = this._dd.width,
                s = this._dd.height;
            if (this[HR] instanceof Pq && this[HR].expanded, this._e9) {
                var r = [];
                r[push]({
                    x: i,
                    y: n,
                    p: gz.LEFT_TOP,
                    cursor: RN,
                    rotate: 5 * hU
                }), r[push]({
                    x: i + e / 2,
                    y: n,
                    p: gz[bl],
                    cursor: DN,
                    rotate: 6 * hU
                }), r.push({
                    x: i + e,
                    y: n,
                    p: gz[NN],
                    cursor: fd,
                    rotate: 7 * hU
                }), r[push]({
                    x: i,
                    y: n + s / 2,
                    p: gz[ll],
                    cursor: BN,
                    rotate: 4 * hU
                }), r[push]({
                    x: i,
                    y: n + s,
                    p: gz[vl],
                    cursor: fd,
                    rotate: 3 * hU
                }), r[push]({
                    x: i + e,
                    y: n + s / 2,
                    p: gz[pl],
                    cursor: BN,
                    rotate: 0
                }), r[push]({
                    x: i + e / 2,
                    y: n + s,
                    p: gz[gl],
                    cursor: DN,
                    rotate: 2 * hU
                }), r[push]({
                    x: i + e,
                    y: n + s,
                    p: gz.RIGHT_BOTTOM,
                    cursor: RN,
                    rotate: hU
                }), this._jy = r
            }
            this._rotatePoint = this._e7 ? {
                x: i + e / 2,
                y: n,
                cursor: lY
            } : null, this[Nw]()
        },
        _e4: function(t, i, n, e) {
            t[ym]();
            var s = (this[od] - 1) / e;
            t[xu](i - s, n - s, 2 * s, 2 * s), t[To] = 1 / e, t[Ff] = [], t[O_] = C_, t[Tp] = "rgba(255, 255, 255, 0.8)", t.stroke(), t.fill()
        },
        _58: function(t, i, n, e, s, r) {
            s = s || this[od], r = r || $N, t[ym](), s /= e, t.arc(i, n, s, 0, 2 * Math.PI, !1), t[To] = 1 / e, t[Ff] = [], t[O_] = C_, t[Tp] = r, t[Eo](), t[wo]()
        },
        _ik: function(t, i) {
            t -= this.element.x, i -= this[HR].y;
            var n = {
                x: t,
                y: i
            };
            return this[HR].rotate && $s(n, -this.element[jo]), n
        },
        _fz: function(t, i) {
            if (this._dd) {
                if (t[Qa](), t[to](this[HR].x, this.element.y), this[HR][jo] && t.rotate(this.element[jo]), this[FN]) {
                    this._58(t, 0, 0, i, 3, GN);
                    var n = this._rotatePoint.x,
                        e = this._rotatePoint.y - this._rotateHandleLength / i;
                    t[ym](), t[Ru](n, this[FN].y), t[Du](n, e), t[To] = 1 / i, t.strokeStyle = aN, t.stroke(), this._58(t, n, e, i)
                }
                if (this._jy) {
                    var s = this._dd.x,
                        r = this._dd.y,
                        h = this._dd[Da],
                        a = this._dd.height;
                    t[ym](), t[xu](s, r, h, a), t[To] = 1 / i, t.lineDash = [2 / i, 3 / i], t[O_] = aN, t[Eo](), l(this._jy, function(n) {
                        this._e4(t, n.x, n.y, i)
                    }, this)
                }
                t.restore()
            }
        },
        _n2r: function() {
            this.topCanvas.invalidate()
        },
        _38: function(t, i, n, e) {
            this.element = t, this[fN]();
            var s = i.getUI(t);
            this._n0ody = s.body, this._e9 = n, this._e7 = e, this._9g(), this._7()
        },
        _9g: function() {
            if (this[UR]) {
                var t = Or(this[nA], this[nA]._jb),
                    i = Or(this._n0ody, this._n0ody._7q);
                this[PN] = new yz(t.y - i.y, t.x - i.x, i.bottom - t.bottom, i.right - t[Xh]), this._7x(i)
            }
        },
        _n0c: function(t, i) {
            return i.isResizable(t)
        },
        _n0a: function(t, i) {
            return (!t._i6() || !t[Vk]) && i.isRotatable(t)
        },
        _d4: function(t, i) {
            return t instanceof Cq && i[oN](t)
        },
        onstart: function(t, i) {
            if (!i[aL]) return void(this[HR] && this[dy](i));
            if (!t[aD]) {
                var n = i.getUI(t),
                    e = t[xL]();
                if (e != this.element) {
                    if (this[HR]) {
                        if (this._gh(t, i)) return void(t.responded = !0);
                        this[dy](i)
                    }
                    if (e && !e[eN] && this._d4(e, i)) {
                        var s = this[zN](e, i, n),
                            r = this[YN](e, i, n);
                        (s || r) && this._38(e, i, s, r)
                    }
                }
            }
        },
        onrelease: function(t, i) {
            this[HR] && (this[_N] = !0, this[fN](), i.callLater(function() {
                this._9g()
            }, this))
        },
        _98: null,
        _gh: function(t, i) {
            var n = i[dk](t);
            n = this._ik(n.x, n.y);
            var e = i[io],
                s = this[od] / e;
            if (this._rotatePoint) {
                var r = this[FN].x,
                    h = this[FN].y - this[HN] / e;
                if (dz(n.x, n.y, r, h) < s) return this[FN]
            }
            if (this._jy && this._jy[length]) {
                var a;
                return l(this._jy, function(t) {
                    return dz(n.x, n.y, t.x, t.y) < s ? (a = t, !1) : void 0
                }, this), a
            }
        },
        onmousemove: function(t, i) {
            if (this[HR]) {
                var n = this._gh(t, i);
                if (!n) return void(i.cursor = null);
                if (n != this[FN] && this[HR][jo]) {
                    var e = n[jo] + this[HR][jo];
                    return void(i[DP] = jr(e))
                }
                i[DP] = n[DP]
            }
        },
        startdrag: function(t, i) {
            if (this[HR] && (this._79(), this._n2anEdit && (this._98 = this._gh(t, i), this._98))) {
                if (t[aD] = !0, this._98 == this[FN]) return this._98.start = i[dk](t), void(this._98[jo] = this[HR][jo] || 0);
                var n = new Cr(i, Cr[qN], t, this[HR]);
                n[pN] = this._98, i[bP](n)
            }
        },
        _77: function(t, i, n, e, s, r) {
            var h = this._dd,
                a = h.x,
                o = h.y,
                f = h[Da],
                u = h[Na];
            if (r) {
                var c = e != f;
                c ? s = e * u / f : e = s * f / u
            }
            var _ = t[UT]._fk,
                d = e / f,
                l = s / u,
                v = -a * d + i,
                b = -o * l + n;
            _[Jf](function(t) {
                if (t[Oo] != kY.SEGMENT_CLOSE) {
                    var e = t[xa];
                    if (e && e[length]) for (var s = 0, r = e[length]; r > s; s += 2) {
                        var h = e[s],
                            f = e[s + 1];
                        e[s] = (h - a) * d + i - v, e[s + 1] = (f - o) * l + n - b
                    }
                }
            }), this._dd.set(i - v, n - b, e, s), t.setLocation(t.x + v, t.y + b), t[jT]()
        },
        _9m: function(t, i, n, e, s) {
            this._dd.set(i, n, e, s), t[oM] = {
                x: i,
                y: n,
                width: e,
                height: s
            }
        },
        _4c: function(t, i, n, e, s) {
            if (this[HR] instanceof Pq) return this._9m(this[HR], t, i, n, e, s);
            if (this.element instanceof Aq) return this._77(this[HR], t, i, n, e, s);
            var r = this[nA] instanceof Zq;
            if (!r && s) {
                var h = this._dd,
                    a = this._n0ody.originalBounds,
                    o = n != h[Da];
                o ? e = n * a[Na] / a[Da] : n = e * a.width / a[Na]
            }
            var f = this[HR][qT],
                u = new vz(n - this[PN].left - this[PN][Xh], e - this[PN].top - this._insets[Wh]);
            if (u[Da] < 1 && (n = this._insets[qo] + this[PN].right + 1, u[Da] = 1), u[Na] < 1 && (e = this._insets.top + this[PN][Wh] + 1, u.height = 1), r ? this[HR].setStyle(Nq[IO], u) : this.element[Bw] = u, f) {
                var c = fi(f, n, e),
                    _ = c.x + t - (this[nA][xM] || 0),
                    d = c.y + i - (this[nA][EM] || 0);
                if (this._dd.set(t - _, i - d, n, e), this[HR].rotate) {
                    var c = $s({
                        x: _,
                        y: d
                    }, this[HR][jo]);
                    _ = c.x, d = c.y
                }
                this.element.x += _, this[HR].y += d
            } else {
                var _ = this._dd.x * n / this._dd[Da] - t,
                    d = this._dd.y * e / this._dd.height - i;
                if (this._dd.set(t + _, i + d, n, e), this.element.rotate) {
                    var c = $s({
                        x: _,
                        y: d
                    }, this.element.rotate);
                    _ = c.x, d = c.y
                }
                this[HR].x -= _, this[HR].y -= d
            }
        },
        ondrag: function(t, i) {
            if (this[HR] && this._98) if (this._98 != this[FN]) {
                var n = t.dx,
                    e = t.dy,
                    s = i.scale;
                if (n /= s, e /= s, this[HR].rotate) {
                    var r = {
                        x: n,
                        y: e
                    };
                    $s(r, -this[HR][jo]), n = r.x, e = r.y
                }
                var h = this._98.p,
                    a = this._dd,
                    o = a.x,
                    f = a.y,
                    u = a[Da],
                    c = a[Na];
                h[hl] == pz ? n >= u ? (o += u, u = n - u || 1) : (o += n, u -= n) : h[hl] == xz && (-n >= u ? (u = -n - u || 1, o -= u) : u += n), h[al] == Ez ? e >= c ? (f += c, c = e - c || 1) : (f += e, c -= e) : h[al] == kz && (-e >= c ? (c = -e - c || 1, f -= c) : c += e), this._4c(o, f, u, c, t[OE]);
                var _ = new Cr(i, Cr.RESIZING, t, this[HR]);
                _[pN] = this._98, i[bP](_)
            } else {
                var r = i.toLogical(t),
                    d = _n(r.x, r.y, this.element.x, this[HR].y, this._98[nD].x, this._98.start.y, !0);
                d += this._98[jo] || 0, t.shiftKey && (d = Math[po](d / Math.PI * 4) * Math.PI / 4), this.element[jo] = d % (2 * Math.PI);
                var _ = new Cr(i, Cr[UN], t, this[HR])
            }
        },
        enddrag: function(t, i) {
            if (this.element && this._98 && this._98 != this._rotatePoint) {
                var n = new Cr(i, Cr.RESIZE_END, t, this[HR]);
                n[pN] = this._98, i[bP](n)
            }
        }
    }, wY[WN] = Ir;
    var lU = function(t) {
        this.graph = t
    };
    lU.prototype = {
        onstart2: function(t, i) {
            this[Ub](t, i)
        },
        onstart: function(t, i) {
            if (!t[aD]) {
                var n = t.getData();
                if (n && !i[F_](n) && (n = null), n && mi(t)) {
                    i[rP](n);
                    var e = new Cr(i, Cr[XN], t, i[B_]);
                    return void i[bP](e)
                }
                if (!n || !i[B_].isSelected(n)) {
                    n ? (i[VN](n), i[ZN](n)) : i[VN](null);
                    var e = new Cr(i, Cr[XN], t, i.selectionModel);
                    i.onInteractionEvent(e)
                }
            }
        },
        onkeydown: function(t, i) {
            return 27 == t[SE] ? void i[JN]() : void(mi(t) && 65 == t[SE] && (i[KN](), F(t)))
        }
    };
    var vU = 0,
        bU = 15;
    oz[QN] = 3e3, oz.TOOLTIP_DELAY = 1e3;
    var yU = tB;
    yi($h + yU, {
        "background-color": iB,
        overflow: v_,
        "box-shadow": "0 5px 10px rgba(136, 136, 136, 0.5)",
        color: Cp,
        "pointer-events": b_,
        border: nB,
        padding: eB,
        display: KP,
        position: kw
    });
    var gU = function(t) {
        this.graph = t, this[sB] = {}
    };
    gU[prototype] = {
        _n0n: null,
        _n0l: null,
        _n0j: function() {
            delete this[rB], this._n0n.data && (this[hB] || (this[hB] = document[s_](r_), this[hB][dh] = yU), this._n0l.parentNode || document[tA][c_](this[hB]), this._d3(this.graph, this[sB].data))
        },
        _d3: function(t, i) {
            var n = t[aB](i),
                e = EL == i.tooltipType;
            n && !e && (n = n[Kh](/\n/g, oB)), e ? this[hB][fB] = n || "" : this._n0l[dP] = n || "";
            var s = this[sB].evt[uB] + vU,
                r = this[sB].evt[ba] + bU;
            Sr(this[hB], s, r), this[cB] && (clearTimeout(this[cB]), delete this._deleteTimer), this._deleteTimer = setTimeout(this._8f.bind(this), t.tooltipDuration || oz[QN])
        },
        _8f: function() {
            delete this[cB], this[hB] && this._n0l[pp] && this[hB].parentNode.removeChild(this[hB]), delete this._n0l, this._n0n = {}
        },
        _e0: function(t, i, n, e) {
            if (!this[hB]) {
                var s = e.tooltipDelay;
                return isNaN(s) && (s = oz.TOOLTIP_DELAY), void(this._initTimer = setTimeout(this[_B][ch](this), s))
            }
            this._d3(e, t)
        },
        onstart: function(t, i) {
            this.destroy(i)
        },
        onmousemove: function(t, i) {
            if (i.enableTooltip) {
                var n = t.getData();
                if (this._n0n.evt = t, this._n0n[ko] != n && (this[sB][ko] = n, this[rB] && (clearTimeout(this[rB]), delete this[rB]), n)) {
                    var e = i[aB](n);
                    e && this._e0(n, e, t, i)
                }
            }
        },
        destroy: function() {
            this[rB] && (clearTimeout(this[rB]), delete this._initTimer), this[cB] && (clearTimeout(this._deleteTimer), delete this._deleteTimer), this[hB] && this._8f(), this[sB] = {}
        }
    };
    var pU = function(t) {
        this[Gc] = t
    };
    pU[prototype] = {
        _fn: function() {
            delete this._l0
        },
        destroy: function(t) {
            this._l0 && this._fn(t)
        },
        onmousewheel: function(t, i) {
            if (i[dB] !== !1 && t[Rb]) {
                var n = t.delta > 0,
                    e = i[io];
                if (!(n && i[Gp] - e < 1e-4 || !n && e - i.minScale < 1e-4)) {
                    z(t);
                    var s = Math.sqrt(Math.abs(t[Rb]));
                    n || (s = -s), this._l0 && clearTimeout(this._l0), this._l0 = setTimeout(this._fn[ch](this, i), 100), i.zoomByMouseEvent(t, s)
                }
            }
        }
    };
    var mU = function(t) {
        this[Gc] = t
    };
    mU.prototype = {
        onclick: function(t, i) {
            i.zoomByMouseEvent(t, !mi(t))
        }
    };
    var xU = function(t) {
        this.graph = t
    };
    xU[prototype] = {
        onclick: function(t, i) {
            i.zoomByMouseEvent(t, mi(t))
        }
    }, E(Cr, Iz), Cr[XD] = lB, Cr.ELEMENT_MOVING = vB, Cr[KD] = bB, Cr[gP] = yB, Cr[vP] = gB, Cr[gN] = pB, Cr.POINT_MOVING = mB, Cr[wN] = xB, Cr[qN] = EB, Cr.RESIZING = wB, Cr.RESIZE_END = kB, Cr[UN] = TB, Cr[MB] = IB, Cr[QD] = OB, Cr[tN] = jB, Cr[nM] = SB, Cr[DD] = CB, Cr[XN] = ad, Cr.SELECT_START = AB, Cr[CN] = LB, Cr[jN] = PB, Cr[RB] = DB, Ar[prototype] = {
        _94: function(t) {
            if (this[NB]) switch (t.kind) {
                case Nz[fv]:
                    this[NB][BB](t.data);
                    break;
                case Nz.KIND_CLEAR:
                    this[NB][$B](t.data)
            }
        },
        destroy: function() {
            delete this._kk, delete this._4m, this._interactionSupport && (this[NB]._i5(), delete this[NB])
        },
        _kk: null,
        _4m: null,
        defaultMode: null,
        _gn: function(t, i, n) {
            this._4m[t] = new _r(i, n), t == this[vd] && this[NB]._mkInteraction(i)
        },
        addCustomInteraction: function(t) {
            this._interactionSupport._mrCustomInteractionListener(t)
        },
        removeCustomInteraction: function(t) {
            this[NB][FB](t)
        },
        _mj: function(t) {
            var i = this._4m[t];
            return i ? i : EU[t]
        }
    }, J(Ar[prototype], {
        defaultCursor: {
            get: function() {
                return this[GB] ? this[GB][H_] : void 0
            }
        },
        currentMode: {
            get: function() {
                return this[zB]
            },
            set: function(t) {
                this[zB] != t && (this[zB], this._interactionSupport || (this[NB] = new fY(this._kk)), this[zB] = t, this[GB] = this._mj(this[zB]), this._kk.cursor = this[H_], this._interactionSupport._mkInteraction(this[GB] ? this[GB][YB](this._kk) : []))
            }
        }
    });
    var EU = {};
    oz.registerInteractions = function(t, i, n) {
        var e = new _r(i, n);
        EU[t] = e
    }, kY[HB] = qB, kY[bd] = q_, kY.INTERACTION_MODE_SELECTION = id, kY.INTERACTION_MODE_ZOOMIN = UB, kY.INTERACTION_MODE_ZOOMOUT = WB, kY[XB] = VB, kY[ZB] = JB, kY[KB] = QB, kY[t$] = i$, oz[n$](kY[HB], [lU, cU, pU, fU, aU, gU, dU]), oz[n$](kY[XB], [oU, gr, lU, cU, pU, fU, gU]), oz[n$](kY[ZB], [oU, Tr, lU, vr, cU, pU, fU, gU]), oz[n$](kY.INTERACTION_MODE_CREATE_SHAPE, [oU, br, lU, cU, pU, fU, gU]), oz[n$](kY[t$], [yr, lU, cU, pU, fU, gU]), oz[n$](kY.INTERACTION_MODE_DEFAULT, [oU, Ir, Tr, lU, uU, cU, pU, fU, aU, gU, dU]), oz[n$](kY[e$], [oU, Ir, Tr, lU, uU, _U, cU, pU, fU, aU, gU]), oz[n$](kY[s$], [pU, fU, mU], uY), oz[n$](kY.INTERACTION_MODE_ZOOMOUT, [pU, fU, xU], cY), wY[r$] = cU, wY.SelectionInteraction = lU, wY[h$] = uU, wY[a$] = pU, wY[o$] = aU, wY[f$] = fU, wY[u$] = gU, wY[c$] = _U, wY.RectangleSelectionInteractionByRightButton = dU, wY[_$] = Tr;
    var wU = function(t) {
        this[Gc] = t
    };
    wY[d$] = wU, wU.prototype = {
        getNodeBounds: function(t) {
            return this[Gc][l$](t)
        },
        isLayoutable: function(t) {
            return this.graph[$_](t) && t[v$] !== !1
        },
        getLayoutResult: function() {},
        updateLocations: function(t, i, n, e, s) {
            if (i === !0) {
                if (this.animate || (this.animate = new eW), n && (this[b$].duration = n), e && (this.animate[y$] = e), this.animate[g$] = t, s) {
                    var r = s,
                        h = this;
                    s = function() {
                        r[call](h, t)
                    }
                }
                return void this.animate.start(s)
            }
            for (var a in t) {
                var o = t[a],
                    f = o.node;
                f.setLocation(o.x, o.y)
            }
            s && s[call](this, t)
        },
        _fw: function(t) {
            var i, n, e, s = null;
            t && (i = t[p$], s = t[fc], n = t[m$], e = t[y$]);
            var r = this[x$](t);
            return r ? (this[E$](r, i, n, e, s), r) : !1
        },
        doLayout: function(t, i) {
            return this.graph && i !== !0 ? void this[Gc].callLater(function() {
                this._fw(t)
            }, this) : this._fw(t)
        }
    };
    var kU = 110,
        TU = 120,
        MU = 130,
        IU = 210,
        OU = 220,
        jU = 230,
        SU = 111,
        CU = 112,
        AU = 121,
        LU = 122,
        PU = 211,
        RU = 212,
        DU = 221,
        NU = 222;
    kY[w$] = kU, kY.DIRECTION_LEFT = TU, kY[k$] = MU, kY[T$] = IU, kY[M$] = OU, kY[I$] = jU, kY[O$] = SU, kY.DIRECTION_RIGHT_BOTTOM = CU, kY[j$] = AU, kY[S$] = LU, kY[C$] = PU, kY[A$] = RU, kY.DIRECTION_TOP_LEFT = DU, kY[L$] = NU;
    var BU = P$,
        $U = R$,
        FU = D$,
        GU = N$;
    kY[B$] = BU, kY.LAYOUT_TYPE_EVEN_HORIZONTAL = FU, kY[$$] = GU, kY[F$] = $U, wY[G$] = Lr;
    var zU = function(t) {
        this[Gc] = t
    };
    zU[prototype] = {
        hGap: 50,
        vGap: 50,
        parentChildrenDirection: IU,
        layoutType: BU,
        defaultSize: {
            width: 50,
            height: 60
        },
        getNodeSize: function(t) {
            if (this[Gc]._8j[nc]) {
                var i = this[Gc][zc](t);
                if (i) return i._fl
            }
            return t[zp] && t.image[bo] ? {
                width: t[zp].bounds[Da],
                height: t.image[bo][Na]
            } : this[z$]
        },
        _n29: function(t, i) {
            if (this[Y$](t)) {
                var n, e = this[H$](t);
                n = e instanceof bz ? [-e.x, -e.y] : [e[Da] / 2, e.height / 2];
                var s = t.id,
                    r = (t[q$], i ? this._9o[i.id] : this._n04);
                this._9o[s] = new YU(this[U$](t), this[W$](t), this[X$](t), t.parentChildrenDirection, r, t, e[Da], e[Na], n)
            }
        },
        getHGap: function(t) {
            return t && D(t[V$]) ? t.hGap : this[V$]
        },
        getVGap: function(t) {
            return t && D(t[Z$]) ? t[Z$] : this[Z$]
        },
        getLayoutType: function(t) {
            return t && t.layoutType ? t.layoutType : this.layoutType
        },
        _9o: null,
        _n04: null,
        _kr: function() {
            this._9o = null, this._n04 = null
        },
        getLayoutResult: function(t) {
            var i, n, e, s, r = this[Gc];
            t instanceof Object && (i = t.x, n = t.y, r = t[J$] || this.graph, e = t.bounds, s = t[K$]), this._9o = {}, this._n04 = new YU, this[Q$]._mk(this[V$], this[Z$], this[q$], this[tF]);
            var h = {},
                a = hW(r, this[iF], this, !1, s);
            return a && (this._n04._fw(i || 0, n || 0, h), e && e.set(this[Q$].x, this[Q$].y, this[Q$][Da], this[Q$].height)), this._kr(), h
        },
        doLayout: function(t, i) {
            if (D(t)) {
                var n = t,
                    e = 0;
                D(i) && (e = i), t = {
                    x: n,
                    y: e
                }, i = !0
            }
            return k(this, zU, nF, [t, i])
        }
    }, E(zU, wU);
    var YU = function(t, i, n, e, s, r, h, a, o) {
        this._ma = t || 0, this._mc = i || 0, this[tF] = n, this[q$] = e, this[eF] = s, s && s._fr(this), this[sF] = r, this._di = h, this[rF] = a, this._mynchorLocation = o
    };
    YU[prototype] = {
        _mk: function(t, i, n, e) {
            this._ma = t, this._mc = i, this.parentChildrenDirection = n, this[tF] = e
        },
        _89: function() {
            this._fp = []
        },
        _ma: 0,
        _mc: 0,
        _fp: null,
        _di: 0,
        _n2w: 0,
        layoutType: null,
        parentChildrenDirection: null,
        _fr: function(t) {
            this._fp || (this._fp = []), this._fp.push(t)
        },
        _n2u: function(t, i, n, e) {
            var s = new bz;
            return n(this._fp, function(n) {
                n._36(t, i), s.add(n), e ? t += n.width + this._ma : i += n[Na] + this._mc
            }, this), s
        },
        _84: function(t, i, n, e, s) {
            var r, h = e ? this._ma : this._mc,
                a = e ? this._mc : this._ma,
                o = e ? "width" : Na,
                f = e ? "height" : Da,
                u = e ? "_di" : rF,
                c = e ? "_n2w" : hF,
                _ = e ? "hostDX" : aF,
                d = e ? "hostDY" : oF,
                v = new bz,
                b = 0,
                y = 0,
                g = [],
                p = 0,
                m = 0;
            n(this._fp, function(n) {
                var s = m >= y;
                n[fF] = s ? e ? TU : OU : e ? kU : IU, n._36(t, i), s ? (g.push(n), b = Math.max(b, n[o]), y += n[f] + a) : (r || (r = []), r[push](n), p = Math.max(p, n[o]), m += n[f] + a)
            }, this), y -= a, m -= a;
            var x = Math.max(y, m),
                E = h,
                w = 0;
            this.node && (s && (E += this[u] + h, x > this[c] ? this[d] = (x - this[c]) / 2 : w = (this[c] - x) / 2), this[_] = b + E / 2 - this[u] / 2);
            var k = 0,
                T = w;
            return l(g, function(t) {
                e ? t[_p](b - t[o], T) : t[_p](T, b - t[o]), T += a + t[f], v.add(t)
            }, this), r ? (T = w, k = b + E, l(r, function(t) {
                e ? t[_p](k, T) : t[_p](T, k), T += a + t[f], v.add(t)
            }, this), v) : v
        },
        offset: function(t, i) {
            this.x += t, this.y += i, this[uF] += t, this.nodeY += i, this._6q(t, i)
        },
        _n07: function(t, i) {
            return 2 * this.cx - t - i - t
        },
        _n06: function(t, i) {
            return 2 * this.cy - t - i - t
        },
        _me: function(t) {
            if (this._fp && 0 != this._fp.length) {
                if (t) return this[sF] && (this[uF] += this[cF](this.nodeX, this._di)), void l(this._fp, function(t) {
                    t[_p](this[cF](t.x, t.width), 0)
                }, this);
                this[sF] && (this[_F] += this[dF](this.nodeY, this._n2w)), l(this._fp, function(t) {
                    t.offset(0, this._n06(t.y, t[Na]))
                }, this)
            }
        },
        _6q: function(t, i) {
            this._fp && l(this._fp, function(n) {
                n.offset(t, i)
            }, this)
        },
        _36: function(t, i) {
            return this.x = t || 0, this.y = i || 0, this._fp && 0 != this._fp.length ? void this._1c(this.x, this.y, this.layoutType) : void(this.node && (this[Da] = this._di, this[Na] = this[rF], this.nodeX = this.x, this[_F] = this.y))
        },
        _6h: function(t) {
            if (this.node) {
                var i = this[lF],
                    n = i[0],
                    e = i[1];
                t[this[sF].id] = {
                    node: this.node,
                    x: this[uF] + n,
                    y: this[_F] + e,
                    left: this[uF],
                    top: this[_F],
                    width: this._di,
                    height: this[rF]
                }
            }
            this._fp && l(this._fp, function(i) {
                i._6h(t)
            }, this)
        },
        _fw: function(t, i, n) {
            this._36(t, i), this._6h(n)
        },
        _1c: function(t, i, e) {
            var s, r = t,
                h = i;
            !this.parentChildrenDirection && this.parentBounds && (this[q$] = this[fF] || this.parentBounds.parentChildrenDirection);
            var a = this[q$],
                o = Lr(a);
            if (this.node) {
                s = a == MU || a == jU;
                var f = Pr(a);
                s || (o ? t += this._di + this._ma : i += this[rF] + this._mc)
            }
            var u, c = this[sF] && this[sF][vF] ? b : l;
            if (e == $U) u = this._84(t, i, c, !o, s);
            else {
                var _;
                _ = e == BU ? !o : e == FU, u = this[bF](t, i, c, _, s)
            }
            var d = 0,
                v = 0;
            if (u && !u[$f]() && (d = u[Da], v = u[Na], this.add(u)), this[sF]) {
                if (this[uF] = r, this.nodeY = h, this[oF] !== n || this[aF] !== n) this[uF] += this[oF] || 0, this[_F] += this.hostDY || 0;
                else {
                    var y;
                    y = a == IU || a == OU || a == TU || a == kU ? 1 : a == RU || a == NU || a == LU || a == CU ? 0 : 2, o ? 1 == y ? this.nodeY += v / 2 - this[rF] / 2 : 2 == y && (this[_F] += v - this[rF]) : 1 == y ? this.nodeX += d / 2 - this._di / 2 : 2 == y && (this[uF] += d - this._di)
                }
                this[el](this[uF], this[_F], this._di, this[rF]), f && this._me(o)
            }
        },
        node: null,
        uiBounds: null
    }, E(YU, bz), Dr[prototype] = {
        layoutDatas: null,
        isMovable: function(t) {
            return !this[md][t.id]
        },
        _75: !1,
        _35: function() {
            this._75 = !0, this[Gc]._1k.addListener(this._92, this), this[Gc]._16[ld](this._1v, this)
        },
        _19: function() {
            this._75 = !1, this[Gc]._1k[Nx](this._92, this), this[Gc]._16[Nx](this._1v, this)
        },
        invalidateFlag: !0,
        invalidateLayoutDatas: function() {
            this[WP] = !0
        },
        resetLayoutDatas: function() {
            return this.invalidateFlag = !1, this[yF] = Rr.call(this)
        },
        _1v: function(t) {
            Cr.ELEMENT_MOVE_START == t[Il] ? (this[md] = {}, t.datas[Jf](function(t) {
                this[md][t.id] = t
            }, this)) : Cr[KD] == t[Il] && (this[md] = {})
        },
        _92: function() {
            this[gF]()
        },
        isRunning: function() {
            return this[pF] && this.timer._dy()
        },
        getLayoutResult: function() {
            this[mF](), this[xF]();
            for (var t = this[EF](this.layoutDatas[wF] || 0, this.layoutDatas.edgeCount || 0), i = 0; t > i && this[kF](!1) !== !1; i++);
            var n = this[yF][TF];
            return this[MF](), n
        },
        _lj: function() {
            return !1
        },
        step: function(t) {
            if (t === !1) return this._lj(this.timeStep);
            (this[WP] || !this[yF]) && this[xF]();
            var i = this._lj(t),
                n = this[yF][TF];
            for (var e in n) {
                var s = n[e],
                    r = s[sF];
                this[aP](r) ? r[hP](s.x, s.y) : (s.x = r.x, s.y = r.y, s.vx = 0, s.vy = 0)
            }
            return i
        },
        onstop: function() {
            delete this[yF]
        },
        start: function(t) {
            if (this.isRunning()) return !1;
            this._75 || this._35(), this[IF] || (this._jrr = function(t) {
                return this.step(t)
            }[ch](this)), this.invalidateLayoutDatas(), this[pF] = new mY(this[IF]);
            var i = this;
            return this[pF]._ks(function() {
                i[MF](), t && t()
            }), !0
        },
        stop: function() {
            this[pF] && (this[pF]._m3(), this[MF]())
        },
        getMaxIterations: function(t) {
            return Math.min(1e3, 3 * t + 10)
        },
        minEnergyFunction: function(t, i) {
            return 10 + Math.pow(t + i, 1.4)
        },
        resetGraph: function() {
            this._75 || this._35(), this.resetLayoutDatas()
        },
        destroy: function() {
            this[mF](), this._19()
        }
    }, E(Dr, wU);
    var HU = function(t, i, n, e) {
        this.graph = t, D(i) && (this[El] = i), D(n) && (this.gap = n), D(e) && (this[OF] = e)
    };
    wY[jF] = HU;
    var qU = SF,
        UU = CF,
        WU = AF,
        XU = LF;
    kY.ANGLE_SPACING_PROPORTIONAL = qU, kY[PF] = UU, kY.RADIUS_MODE_UNIFORM = WU, kY[RF] = XU, HU[prototype] = {
        angleSpacing: qU,
        radiusMode: XU,
        gap: 4,
        radius: 50,
        startAngle: 0,
        _9o: null,
        _n04: null,
        _kr: function() {
            this._9o = null, this._n04 = null
        },
        getLayoutResult: function(t) {
            var i, n = 0,
                e = 0,
                s = this[Gc];
            t instanceof Object && (n = t.cx || 0, e = t.cy || 0, s = t.root || this.graph, i = t[bo]), this._9o = {}, this._n04 = new JU(this);
            var r = {},
                h = aW(s, this._n29, this);
            return h && (this._n04._fp && 1 == this[Q$]._fp[length] && (this[Q$] = this[Q$]._fp[0]), this[Q$]._ez(!0), this._n04._5u(n, e, this.startAngle, r, i)), this._kr(), r
        },
        _n29: function(t, i) {
            if (this[Y$](t)) {
                var n = i ? this._9o[i.id] : this[Q$];
                this._9o[t.id] = new JU(this, t, n)
            }
        },
        defaultSize: 40,
        getRadius: function() {
            return this[El]
        },
        getNodeSize: function(t) {
            if (this[Gc]._8j[nc]) {
                var i = this[Gc][zc](t);
                if (i) return (i._fl.width + i._fl.height) / 2
            }
            return this.defaultSize
        },
        getGap: function() {
            return this.gap
        },
        _2j: function(t, i, n) {
            return this.getNodeSize(t, i, n) + this[DF](t, i, n)
        }
    };
    var VU = function(t) {
            var i, n = this._fp[length],
                e = 0,
                s = 0;
            if (l(this._fp, function(t) {
                    var n = t._ez();
                    1 > n && (n = 1), s += n, n > e && (e = n, i = t)
                }, this), n > 1) {
                var r = 0,
                    h = {},
                    a = s / n / 3;
                s = 0, l(this._fp, function(t) {
                    var i = t._mi;
                    a > i && (i = a), h[t.id] = i, s += i
                }, this);
                var o = wq / s;
                l(this._fp, function(i, n) {
                    var e = h[i.id],
                        s = e * o;
                    0 === n && (r = t ? -s / 2 : -s), i._kp = r + s / 2, i._kq = s, r += s
                }, this)
            }
            return [e, i._kq]
        },
        ZU = function(t) {
            var i = this._8s,
                n = 2 * Math.PI / i,
                e = 0,
                s = t ? 0 : i > 1 ? -n / 2 : 0;
            return l(this._fp, function(t) {
                t._kp = s % wq, s += n, t._kq = n;
                var i = t._ez();
                i > e && (e = i)
            }, this), [e, n]
        },
        JU = function(t, i, n) {
            this[NF] = t, i && (this._m9 = i, this.id = i.id), n && (n._fr(this), n._mh = !1, this._ko = n._ko + 1)
        },
        wq = 2 * Math.PI;
    JU[prototype] = {
        _kq: 0,
        _kp: 0,
        _k0: 0,
        _er: 0,
        _n0u: 0,
        _ko: 0,
        _mh: !0,
        _mi: 0,
        _gf: 0,
        _fp: null,
        _m9: null,
        _fr: function(t) {
            this._fp || (this._fp = []), this._fp[push](t), t.parent = this
        },
        _gj: function(t) {
            if (this._kp = (this._kp + t) % wq, this._fp) {
                var i = this._fp[length];
                if (1 == i) return void this._fp[0]._gj(this._kp);
                t = this._kp + Math.PI, l(this._fp, function(i) {
                    i._gj(t)
                }, this)
            }
        },
        _8s: 0,
        _5w: function(t) {
            return this._m9 && (this._gf = this[NF]._2j(this._m9, this._ko, this._mh) / 2), this._fp ? (this._gf, this._8s = this._fp.length, this._8s <= 2 || this[NF][BF] == UU ? ZU.call(this, t) : VU[call](this, t)) : null
        },
        _ez: function(t) {
            var i = this._5w(t);
            if (!i) return this._mi = this._gf;
            var n = i[0],
                e = i[1],
                s = this[NF].getRadius(this._m9, this._ko);
            if (s < this._gf && (s = this._gf), this._er = s, this._gf + n > s && (s = this._gf + n), n && this._8s > 1 && e < Math.PI) {
                var r = n / Math.sin(e / 2);
                r > s && (s = r)
            }
            return this._k0 = s, this._mi = s + n, this._m9 && this._fp && this[NF].radiusMode == XU && l(this._fp, function(t) {
                var i = t._mi;
                1 == t._8s && (i /= 2);
                var n = this._gf + i,
                    e = t._kq;
                if (e && e < Math.PI) {
                    var s = Math.sin(e / 2),
                        r = i / s;
                    r > i && (i = r)
                }
                n > i && (i = n), t[$F] = i
            }, this), (!this._m9 || t) && this._gj(0), this._mi
        },
        _5u: function(t, i, n, e, s) {
            if (this._m9 && (e[this._m9.id] = {
                    x: t,
                    y: i,
                    node: this._m9
                }, s && s[el](t - this._gf / 2, i - this._gf / 2, this._gf, this._gf)), this._fp) {
                if (!this._m9 && 1 == this._fp[length]) return void this._fp[0]._5u(t, i, n, e, s);
                n = n || 0;
                var r = this._k0,
                    h = this._er;
                l(this._fp, function(a) {
                    var o = r;
                    a[$F] && (o = Math.max(h, a._n0u));
                    var f = a._kp + n,
                        u = t + o * Math.cos(f),
                        c = i + o * Math.sin(f);
                    a._5u(u, c, n, e, s)
                }, this)
            }
        }
    }, E(HU, wU);
    var KU = function() {
        w(this, KU, arguments)
    };
    E(KU, Nr);
    var QU = function(t, i) {
        this[FF] = t, this[GF] = i, t == i ? (this.isLooped = !0, this._kn = t._kl) : this._kn = new fz, this._8p = [], this._go = oz.EDGE_BUNDLE_EXPANDED
    };
    oz[zF] = !0, QU.prototype = {
        node1: null,
        node2: null,
        _kn: null,
        _go: oz.EDGE_BUNDLE_EXPANDED,
        _8p: null,
        _gr: null,
        agentEdge: null,
        _myz: function(t, i, n) {
            this._kn[Jf](function(e) {
                return n && e[Lu] != n && e[Tu] != n ? void 0 : t.call(i, e)
            })
        },
        _5e: 0,
        _5c: 0,
        _il: function(t, i) {
            return this._kn.add(t) === !1 ? !1 : (i == this[FF] ? this._5e++ : this._5c++, this[nc] ? void this._11(t) : void(this[nc] = !0))
        },
        _dg: function(t, i) {
            return this._kn[remove](t) === !1 ? !1 : (i == this[FF] ? this._5e-- : this._5c--, this._11(t), void this._kn[Jf](function(t) {
                t._edgeBundleInvalidateFlag = !0, t[Yk] = !0
            }, this))
        },
        _11: function(t) {
            this[YF] = !0, this._6b = !0, t[Qk] = !0, t[Yk] = !0
        },
        _n2r: function() {
            this._6b || (this._6b = !0, this._kn[Jf](function(t) {
                t[Qk] = !0
            }))
        },
        isEmpty: function() {
            return this._kn[$f]()
        },
        isPositiveOrder: function(t) {
            return this[FF] == t[Lu] || this[FF] == t[Tu]
        },
        canBind: function(t) {
            return t && this._6b && this._fn(t), this._kn[length] > 1 && this._8p[length] > 1
        },
        _i8: function(t) {
            return this._8p[indexOf](t)
        },
        getYOffset: function(t) {
            return this._gr[t.id]
        },
        _44: function(t) {
            if (!this.canBind()) return void(this._gr = {});
            var i = {},
                n = this._8p[length];
            if (!(2 > n)) {
                var e = 0,
                    s = this._8p[0];
                i[s.id] = 0;
                for (var r = 1; n > r; r++) {
                    s = this._8p[r];
                    var h = t.getStyle(s, Nq[HF]) || Kq[Nq[HF]];
                    e += h, i[s.id] = e
                }
                if (!this.isLooped) for (var a = e / 2, r = 0; n > r; r++) s = this._8p[r], i[s.id] -= a;
                this._gr = i
            }
        },
        _myu: function(t) {
            return this._go == t ? !1 : (this._go = t, this[Nw](), !0)
        },
        reverseExpanded: function() {
            return this._myu(!this._go)
        },
        _15: function() {
            this[YF] = !1, this._8p[length] = 0;
            var t;
            this._kn[Jf](function(i) {
                if (i.isBundleEnabled()) {
                    if (!this[rL](i)) return t || (t = []), void t[push](i);
                    this._8p[push](i)
                }
            }, this), t && (this._8p = t[concat](this._8p))
        },
        _f8: function(t) {
            return t == this[CP] || !this[eL]() || this._go
        },
        _fn: function(t) {
            this._6b = !1, this._kn.forEach(function(t) {
                t._edgeBundleInvalidateFlag = !1
            }), this._n2rBindableFlag && this._15();
            var i = this._go,
                n = this.canBind(),
                e = !n || i;
            l(this._8p, function(t) {
                t._$n = !0, t._hzInBundle = e, e && (t[Yk] = !0)
            }, this), e ? this._9w(null, t) : (this._9w(this._8p[0], t), this.agentEdge[qF] = !0, this[CP][Yk] = !0), e && this._44(t)
        },
        _9w: function(t, i) {
            if (t != this[CP]) {
                var n = this.agentEdge;
                return this[CP] = t, i && i._3q(new Oz(this, CP, t, n)), !0
            }
        }
    }, J(QU.prototype, {
        bindableEdges: {
            get: function() {
                return this._8p
            }
        },
        edges: {
            get: function() {
                return this._kn._jk
            }
        },
        length: {
            get: function() {
                return this._kn ? this._kn[length] : 1
            }
        },
        expanded: {
            get: function() {
                return this._go
            },
            set: function(t) {
                return this._go == t ? !1 : (this._go = t, void this[Nw]())
            }
        }
    });
    var tW = function() {
            function t(t, i) {
                this[sF] = t, this[tA] = i
            }

            function i() {
                this[UF] = [], this[WF] = 0
            }

            var n = -1e6,
                e = .8;
            i.prototype = {
                isEmpty: function() {
                    return 0 === this[WF]
                },
                push: function(i, n) {
                    var e = this.stack[this[WF]];
                    e ? (e[sF] = i, e[tA] = n) : this.stack[this.popIdx] = new t(i, n), ++this[WF]
                },
                pop: function() {
                    return this.popIdx > 0 ? this[UF][--this[WF]] : void 0
                },
                reset: function() {
                    this.popIdx = 0
                }
            };
            var s = [],
                r = new i,
                h = function() {
                    this.body = null, this.quads = [], this[XF] = 0, this.massX = 0, this.massY = 0, this.left = 0, this.top = 0, this[Wh] = 0, this.right = 0, this[VF] = !1
                },
                a = [],
                o = 0,
                f = function() {
                    var t;
                    return a[o] ? (t = a[o], t.quads[0] = null, t[ZF][1] = null, t[ZF][2] = null, t.quads[3] = null, t[tA] = null, t.mass = t[JF] = t[KF] = 0, t[qo] = t.right = t.top = t.bottom = 0, t.isInternal = !1) : (t = new h, a[o] = t), ++o, t
                },
                u = f(),
                c = function(t, i) {
                    var n = Math.abs(t.x - i.x),
                        e = Math.abs(t.y - i.y);
                    return 1e-8 > n && 1e-8 > e
                },
                _ = function(t) {
                    for (r[QF](), r[push](u, t); !r.isEmpty();) {
                        var i = r.pop(),
                            n = i.node,
                            e = i.body;
                        if (n[VF]) {
                            var s = e.x,
                                h = e.y;
                            n[XF] = n[XF] + e[XF], n[JF] = n.massX + e[XF] * s, n[KF] = n[KF] + e[XF] * h;
                            var a = 0,
                                o = n[qo],
                                _ = (n.right + o) / 2,
                                d = n.top,
                                l = (n[Wh] + d) / 2;
                            if (s > _) {
                                a += 1;
                                var v = o;
                                o = _, _ += _ - v
                            }
                            if (h > l) {
                                a += 2;
                                var b = d;
                                d = l, l += l - b
                            }
                            var y = n[ZF][a];
                            y || (y = f(), y.left = o, y.top = d, y[Xh] = _, y[Wh] = l, n.quads[a] = y), r[push](y, e)
                        } else if (n[tA]) {
                            var g = n.body;
                            if (n[tA] = null, n.isInternal = !0, c(g, e)) {
                                if (n.right - n[qo] < 1e-8) return;
                                do {
                                    var p = Math[jh](),
                                        m = (n[Xh] - n[qo]) * p,
                                        x = (n.bottom - n.top) * p;
                                    g.x = n.left + m, g.y = n.top + x
                                } while (c(g, e))
                            }
                            r[push](n, g), r.push(n, e)
                        } else n.body = e
                    }
                },
                d = function(t) {
                    var i, r, h, a, o = s,
                        f = 1,
                        c = 0,
                        _ = 1;
                    for (o[0] = u; f;) {
                        var d = o[c],
                            l = d.body;
                        f -= 1, c += 1, l && l !== t ? (r = l.x - t.x, h = l.y - t.y, a = Math[uo](r * r + h * h), 0 === a && (r = (Math.random() - .5) / 50, h = (Math.random() - .5) / 50, a = Math[uo](r * r + h * h)), i = n * l.mass * t[XF] / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * r, t.fy = t.fy + i * h) : (r = d[JF] / d[XF] - t.x, h = d[KF] / d.mass - t.y, a = Math.sqrt(r * r + h * h), 0 === a && (r = (Math[jh]() - .5) / 50, h = (Math[jh]() - .5) / 50, a = Math[uo](r * r + h * h)), (d[Xh] - d.left) / a < e ? (i = n * d[XF] * t[XF] / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * r, t.fy = t.fy + i * h) : (d[ZF][0] && (o[_] = d[ZF][0], f += 1, _ += 1), d[ZF][1] && (o[_] = d[ZF][1], f += 1, _ += 1), d[ZF][2] && (o[_] = d.quads[2], f += 1, _ += 1), d[ZF][3] && (o[_] = d[ZF][3], f += 1, _ += 1)))
                    }
                },
                l = function(t, i) {
                    n = i;
                    var e, s = Number.MAX_VALUE,
                        r = Number[sl],
                        h = Number.MIN_VALUE,
                        a = Number[tG],
                        c = t,
                        d = c[length];
                    for (e = d; e--;) {
                        var l = c[e].x,
                            v = c[e].y;
                        s > l && (s = l), l > h && (h = l), r > v && (r = v), v > a && (a = v)
                    }
                    var b = h - s,
                        y = a - r;
                    for (b > y ? a = r + b : h = s + y, o = 0, u = f(), u[qo] = s, u[Xh] = h, u.top = r, u[Wh] = a, e = d; e--;) _(c[e], u)
                };
            return {
                init: l,
                update: d
            }
        },
        iW = function(t) {
            t.fx -= t.x * this[iG], t.fy -= t.y * this[iG]
        },
        nW = function(t) {
            if (0 != t.k) {
                var i = this._d6,
                    n = t[gd],
                    e = t.to,
                    s = e.x - n.x,
                    r = e.y - n.y,
                    h = s * s + r * r,
                    a = Math[uo](h) || .1,
                    o = (a - i) * t.k * this[nG];
                o /= a;
                var f = o * s,
                    u = o * r;
                e.fx -= f, e.fy -= u, n.fx += f, n.fy += u
            }
        };
    Nr[prototype] = {
        appendNodeInfo: function(t, i) {
            i[XF] = t[eG] || 1, i.fx = 0, i.fy = 0, i.vx = 0, i.vy = 0
        },
        appendEdgeInfo: function(t, i) {
            i.k = t[sG] || 1
        },
        setMass: function(t, i) {
            t.layoutMass = i, this[yF] && this[yF].nodes && (t = this[yF][TF][t.id], t && (t.mass = i))
        },
        setElasticity: function(t, i) {
            t[sG] = i, this[yF] && this[yF].edges && (t = this[yF][IT][t.id], t && (t.k = i))
        },
        _d6: 50,
        _hw: .5,
        timeStep: .15,
        repulsion: 50,
        attractive: .1,
        elastic: 3,
        _m1: 1e3,
        _k8: function(t) {
            return this._m1 + .3 * (t - this._m1)
        },
        _lj: function(t, i) {
            var n = (Date.now(), this[yF][TF]);
            for (var e in n) {
                var s = n[e];
                i && (s.x += Math[jh]() - .5, s.y += Math.random() - .5), iW.call(this, s)
            }
            var r = this[yF][rG];
            if (r) for (var e in r) {
                var h = r[e],
                    a = h[children],
                    o = 0,
                    f = 0;
                a[Jf](function(t) {
                    o += t.x, f += t.y
                }), o /= a[length], f /= a[length];
                var u = 10 * this.attractive;
                a[Jf](function(t) {
                    t.fx -= (t.x - o) * u, t.fy -= (t.y - f) * u
                })
            }
            var c = this[hG];
            c || (c = this._nbodyForce = tW()), c[N_](this[yF][aG], -this.repulsion * this[oG] * this[oG]);
            for (var e in n) c[fG](n[e]);
            if (this.elastic) {
                var _ = this[yF][IT];
                for (var e in _) nW[call](this, _[e])
            }
            return this._lk(t)
        },
        _lk: function(t) {
            var i = this[yF][uG],
                n = (this[yF][cG], this[yF][TF]),
                t = this[_G],
                e = 0,
                s = this._hw;
            for (var r in n) {
                var h = n[r],
                    a = h.fx / h.mass,
                    o = h.fy / h.mass,
                    f = h.vx += a * t,
                    u = h.vy += o * t;
                h.x += f * t, h.y += u * t, i > e && (e += 2 * (f * f + u * u)), h.fx = 0, h.fy = 0, h.vx *= s, h.vy *= s
            }
            return this.layoutDatas.currentEnergy = e, e >= i
        }
    }, E(Nr, Dr), wY[dG] = Nr;
    var eW = function(t) {
        this.locations = t
    };
    eW[prototype] = {
        oldLocations: null,
        _f9: null,
        duration: 700,
        animationType: pY[MR],
        _6f: function(t) {
            if (this._f9 = t, this[lG] = {}, t) for (var i in t) {
                var n = t[i],
                    e = n[sF];
                this.oldLocations[i] = {
                    x: e.x,
                    y: e.y
                }
            }
        },
        setLocation: function(t, i, n) {
            t[hP](i, n)
        },
        forEach: function(t, i) {
            for (var n in this[g$]) {
                var e = this[lG][n],
                    s = this[g$][n];
                t[call](i, e, s)
            }
        },
        _k3: function(t) {
            this[Jf](function(i, n) {
                var e = n[sF],
                    s = i.x + (n.x - i.x) * t,
                    r = i.y + (n.y - i.y) * t;
                this[hP](e, s, r)
            }, this)
        },
        stop: function() {
            this[vG] && this[vG]._m3()
        },
        start: function(t) {
            this[vG] ? (this._mynimate._m3(), this._mynimate._ip = this[m$], this[vG]._dvType = this[y$], this._mynimate[bG] = this[bG]) : this._mynimate = new xY(this._k3, this, this[m$], this[y$]), this[vG]._ks(t)
        }
    }, J(eW[prototype], {
        locations: {
            get: function() {
                return this._f9
            },
            set: function(t) {
                this._f9 != t && this._6f(t)
            }
        }
    });
    var sW = function(t) {
            var i, n = new fz;
            return t[Jf](function(t) {
                t instanceof Cq && (t.hasInEdge() ? !i && t[yG]() && (i = t) : n.add(t))
            }), n.isEmpty() && i && n.add(i), n
        },
        rW = function(t, i, n, e, s, r) {
            if (i instanceof Bz) return t(i, n, e, s, r), i;
            if (i instanceof Graph) {
                var h = new fz;
                i._kkModel[Jf](function(t) {
                    return i[$_](t) ? t._i6() && t._go && t[hasChildren]() ? void(t[PT] && (t[PT][WP] = !1)) : void h.add(t) : void 0
                }), i = h
            }
            var i = sW(i, e);
            return l(i, function(i) {
                t(i, n, e, s, r)
            }), i
        },
        hW = function(t, i, n, e, s) {
            return rW(oW, t, i, n, e, s)
        },
        aW = function(t, i, n, e, s) {
            return rW(fW, t, i, n, e, s)
        };
    rs[prototype].forEachByTopoDepthFirstSearch = function(t, i, n, e) {
        hW(this, t, i, n, e)
    }, rs[prototype][gG] = function(t, i, n, e) {
        t instanceof Object && 1 == arguments[length] && (i = t[Yl]), aW(this, t, i, n, e)
    }, wY[pG] = hW, wY[gG] = aW;
    var oW = function(t, i, n, e, s) {
            function r(t, i, n, e, s, h, a, o) {
                t[Ed] = h, e || i[call](n, t, o, a), Br(t, function(o) {
                    r(o, i, n, e, s, h, a + 1, t)
                }, o, s, h, n), e && i[call](n, t, o, a)
            }

            r(t, i, n, e, s, {}, 0)
        },
        fW = function(t, i, n, e, s) {
            function r(t, i, n, e, s, h, a) {
                var o, f = t[length];
                t.forEach(function(t, r) {
                    var u = t.v;
                    u[Ed] = h, e || i[call](n, u, t._from, a, r, f), Br(u, function(t) {
                        o || (o = []), t._marker = h, o[push]({
                            v: t,
                            _from: u
                        })
                    }, u, s, h, n)
                }), o && r(o, i, n, e, s, h, a + 1), e && t.forEach(function(t, e) {
                    i.call(n, t.v, t[mG], a, e, f)
                })
            }

            r([{
                v: t
            }], i, n, e, s, {}, 0)
        };
    wY[xG] = V, wY.log = ti, wY[Yh] = ni, wY[zh] = ii, wY[EG] = XG, wY[wG] = WG, wY.isWebkit = JG, wY[kG] = KG, wY[TG] = QG, wY[MG] = iz, wY.isChrome = tz, wY[IG] = nz, wY[OG] = Kq, wY[jG] = oz, wY[xP] = Nq, wY[SG] = kY, wY[CG] = uH, wY.Graph = Graph, wY.BaseUI = BaseUI, wY.ElementUI = ElementUI, wY.NodeUI = NodeUI, wY[lD] = ds, wY[AG] = Zq, wY[LG] = Vq, wY.Shapes = Lq, wY[PG] = aH, wY[zA] = HY, wY[RG] = Cr, wY[yw] = jq, wY[TL] = Cq, wY[kP] = Sq, wY[DG] = rs, wY[NG] = QU, wY[BG] = zU, wY[ah] = $G;
    var uW = FG;
    return wY[AE] = GG, wY[zG] = YG, wY.copyright = "Copyright © 2017 Qunee.com", wY.css = li, wY.IDrawable = tU, ti = function() {}, wY[PE] = HG, wY
}(window, document);