﻿/*
 Highcharts JS v5.0.9 (2017-03-08)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (J, a) { "object" === typeof module && module.exports ? module.exports = J.document ? a(J) : a : J.Highcharts = a(J) })("undefined" !== typeof window ? window : this, function (J) {
    J = function () {
        var a = window, B = a.document, w = a.navigator && a.navigator.userAgent || "", D = B && B.createElementNS && !!B.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, F = /(edge|msie|trident)/i.test(w) && !window.opera, q = !D, d = /Firefox/.test(w), g = d && 4 > parseInt(w.split("Firefox/")[1], 10); return a.Highcharts ? a.Highcharts.error(16, !0) : {
            product: "Highcharts",
            version: "5.0.9", deg2rad: 2 * Math.PI / 360, doc: B, hasBidiBug: g, hasTouch: B && void 0 !== B.documentElement.ontouchstart, isMS: F, isWebKit: /AppleWebKit/.test(w), isFirefox: d, isTouchDevice: /(Mobile|Android|Windows Phone)/.test(w), SVG_NS: "http://www.w3.org/2000/svg", chartCount: 0, seriesTypes: {}, symbolSizes: {}, svg: D, vml: q, win: a, charts: [], marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"], noop: function () { }
        }
    }(); (function (a) {
        var B = [], w = a.charts, D = a.doc, F = a.win; a.error = function (q, d) {
            q = a.isNumber(q) ? "Highcharts error #" +
                q + ": www.highcharts.com/errors/" + q : q; if (d) throw Error(q); F.console && console.log(q)
        }; a.Fx = function (a, d, g) { this.options = d; this.elem = a; this.prop = g }; a.Fx.prototype = {
            dSetter: function () { var a = this.paths[0], d = this.paths[1], g = [], h = this.now, n = a.length, m; if (1 === h) g = this.toD; else if (n === d.length && 1 > h) for (; n--;) m = parseFloat(a[n]), g[n] = isNaN(m) ? a[n] : h * parseFloat(d[n] - m) + m; else g = d; this.elem.attr("d", g, null, !0) }, update: function () {
                var a = this.elem, d = this.prop, g = this.now, h = this.options.step; if (this[d + "Setter"]) this[d +
                    "Setter"](); else a.attr ? a.element && a.attr(d, g, null, !0) : a.style[d] = g + this.unit; h && h.call(a, g, this)
            }, run: function (a, d, g) { var h = this, q = function (a) { return q.stopped ? !1 : h.step(a) }, m; this.startTime = +new Date; this.start = a; this.end = d; this.unit = g; this.now = this.start; this.pos = 0; q.elem = this.elem; q.prop = this.prop; q() && 1 === B.push(q) && (q.timerId = setInterval(function () { for (m = 0; m < B.length; m++) B[m]() || B.splice(m--, 1); B.length || clearInterval(q.timerId) }, 13)) }, step: function (a) {
                var d = +new Date, g, h = this.options; g = this.elem;
                var q = h.complete, m = h.duration, f = h.curAnim, c; if (g.attr && !g.element) g = !1; else if (a || d >= m + this.startTime) { this.now = this.end; this.pos = 1; this.update(); a = f[this.prop] = !0; for (c in f) !0 !== f[c] && (a = !1); a && q && q.call(g); g = !1 } else this.pos = h.easing((d - this.startTime) / m), this.now = this.start + (this.end - this.start) * this.pos, this.update(), g = !0; return g
            }, initPath: function (q, d, g) {
                function h(a) {
                    var b, e; for (p = a.length; p--;) b = "M" === a[p] || "L" === a[p], e = /[a-zA-Z]/.test(a[p + 3]), b && e && a.splice(p + 1, 0, a[p + 1], a[p + 2], a[p + 1], a[p +
                        2])
                } function n(a, c) { for (; a.length < e;) { a[0] = c[e - a.length]; var l = a.slice(0, b);[].splice.apply(a, [0, 0].concat(l)); I && (l = a.slice(a.length - b), [].splice.apply(a, [a.length, 0].concat(l)), p--) } a[0] = "M" } function m(a, c) { for (var l = (e - a.length) / b; 0 < l && l--;) r = a.slice().splice(a.length / t - b, b * t), r[0] = c[e - b - l * b], v && (r[b - 6] = r[b - 2], r[b - 5] = r[b - 1]), [].splice.apply(a, [a.length / t, 0].concat(r)), I && l-- } d = d || ""; var f, c = q.startX, E = q.endX, v = -1 < d.indexOf("C"), b = v ? 7 : 3, e, r, p; d = d.split(" "); g = g.slice(); var I = q.isArea, t = I ? 2 : 1, A;
                v && (h(d), h(g)); if (c && E) { for (p = 0; p < c.length; p++) if (c[p] === E[0]) { f = p; break } else if (c[0] === E[E.length - c.length + p]) { f = p; A = !0; break } void 0 === f && (d = []) } d.length && a.isNumber(f) && (e = g.length + f * t * b, A ? (n(d, g), m(g, d)) : (n(g, d), m(d, g))); return [d, g]
            }
        }; a.extend = function (a, d) { var g; a || (a = {}); for (g in d) a[g] = d[g]; return a }; a.merge = function () {
            var q, d = arguments, g, h = {}, n = function (m, f) {
                var c, d; "object" !== typeof m && (m = {}); for (d in f) f.hasOwnProperty(d) && (c = f[d], a.isObject(c, !0) && "renderTo" !== d && "number" !== typeof c.nodeType ?
                    m[d] = n(m[d] || {}, c) : m[d] = f[d]); return m
            }; !0 === d[0] && (h = d[1], d = Array.prototype.slice.call(d, 2)); g = d.length; for (q = 0; q < g; q++) h = n(h, d[q]); return h
        }; a.pInt = function (a, d) { return parseInt(a, d || 10) }; a.isString = function (a) { return "string" === typeof a }; a.isArray = function (a) { a = Object.prototype.toString.call(a); return "[object Array]" === a || "[object Array Iterator]" === a }; a.isObject = function (q, d) { return q && "object" === typeof q && (!d || !a.isArray(q)) }; a.isNumber = function (a) { return "number" === typeof a && !isNaN(a) }; a.erase =
            function (a, d) { for (var g = a.length; g--;) if (a[g] === d) { a.splice(g, 1); break } }; a.defined = function (a) { return void 0 !== a && null !== a }; a.attr = function (q, d, g) { var h, n; if (a.isString(d)) a.defined(g) ? q.setAttribute(d, g) : q && q.getAttribute && (n = q.getAttribute(d)); else if (a.defined(d) && a.isObject(d)) for (h in d) q.setAttribute(h, d[h]); return n }; a.splat = function (q) { return a.isArray(q) ? q : [q] }; a.syncTimeout = function (a, d, g) { if (d) return setTimeout(a, d, g); a.call(0, g) }; a.pick = function () {
                var a = arguments, d, g, h = a.length; for (d =
                    0; d < h; d++) if (g = a[d], void 0 !== g && null !== g) return g
            }; a.css = function (q, d) { a.isMS && !a.svg && d && void 0 !== d.opacity && (d.filter = "alpha(opacity\x3d" + 100 * d.opacity + ")"); a.extend(q.style, d) }; a.createElement = function (q, d, g, h, n) { q = D.createElement(q); var m = a.css; d && a.extend(q, d); n && m(q, { padding: 0, border: "none", margin: 0 }); g && m(q, g); h && h.appendChild(q); return q }; a.extendClass = function (q, d) { var g = function () { }; g.prototype = new q; a.extend(g.prototype, d); return g }; a.pad = function (a, d, g) {
                return Array((d || 2) + 1 - String(a).length).join(g ||
                    0) + a
            }; a.relativeLength = function (a, d) { return /%$/.test(a) ? d * parseFloat(a) / 100 : parseFloat(a) }; a.wrap = function (a, d, g) { var h = a[d]; a[d] = function () { var a = Array.prototype.slice.call(arguments), m = arguments, f = this; f.proceed = function () { h.apply(f, arguments.length ? arguments : m) }; a.unshift(h); a = g.apply(this, a); f.proceed = null; return a } }; a.getTZOffset = function (q) { var d = a.Date; return 6E4 * (d.hcGetTimezoneOffset && d.hcGetTimezoneOffset(q) || d.hcTimezoneOffset || 0) }; a.dateFormat = function (q, d, g) {
                if (!a.defined(d) || isNaN(d)) return a.defaultOptions.lang.invalidDate ||
                    ""; q = a.pick(q, "%Y-%m-%d %H:%M:%S"); var h = a.Date, n = new h(d - a.getTZOffset(d)), m, f = n[h.hcGetHours](), c = n[h.hcGetDay](), E = n[h.hcGetDate](), v = n[h.hcGetMonth](), b = n[h.hcGetFullYear](), e = a.defaultOptions.lang, r = e.weekdays, p = e.shortWeekdays, I = a.pad, h = a.extend({
                        a: p ? p[c] : r[c].substr(0, 3), A: r[c], d: I(E), e: I(E, 2, " "), w: c, b: e.shortMonths[v], B: e.months[v], m: I(v + 1), y: b.toString().substr(2, 2), Y: b, H: I(f), k: f, I: I(f % 12 || 12), l: f % 12 || 12, M: I(n[h.hcGetMinutes]()), p: 12 > f ? "AM" : "PM", P: 12 > f ? "am" : "pm", S: I(n.getSeconds()), L: I(Math.round(d %
                            1E3), 3)
                    }, a.dateFormats); for (m in h) for (; -1 !== q.indexOf("%" + m);) q = q.replace("%" + m, "function" === typeof h[m] ? h[m](d) : h[m]); return g ? q.substr(0, 1).toUpperCase() + q.substr(1) : q
            }; a.formatSingle = function (q, d) { var g = /\.([0-9])/, h = a.defaultOptions.lang; /f$/.test(q) ? (g = (g = q.match(g)) ? g[1] : -1, null !== d && (d = a.numberFormat(d, g, h.decimalPoint, -1 < q.indexOf(",") ? h.thousandsSep : ""))) : d = a.dateFormat(q, d); return d }; a.format = function (q, d) {
                for (var g = "{", h = !1, n, m, f, c, E = [], v; q;) {
                    g = q.indexOf(g); if (-1 === g) break; n = q.slice(0,
                        g); if (h) { n = n.split(":"); m = n.shift().split("."); c = m.length; v = d; for (f = 0; f < c; f++) v = v[m[f]]; n.length && (v = a.formatSingle(n.join(":"), v)); E.push(v) } else E.push(n); q = q.slice(g + 1); g = (h = !h) ? "}" : "{"
                } E.push(q); return E.join("")
            }; a.getMagnitude = function (a) { return Math.pow(10, Math.floor(Math.log(a) / Math.LN10)) }; a.normalizeTickInterval = function (q, d, g, h, n) {
                var m, f = q; g = a.pick(g, 1); m = q / g; d || (d = n ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === h && (1 === g ? d = a.grep(d, function (a) { return 0 === a % 1 }) : .1 >= g && (d = [1 / g])));
                for (h = 0; h < d.length && !(f = d[h], n && f * g >= q || !n && m <= (d[h] + (d[h + 1] || d[h])) / 2); h++); return f = a.correctFloat(f * g, -Math.round(Math.log(.001) / Math.LN10))
            }; a.stableSort = function (a, d) { var g = a.length, h, n; for (n = 0; n < g; n++) a[n].safeI = n; a.sort(function (a, f) { h = d(a, f); return 0 === h ? a.safeI - f.safeI : h }); for (n = 0; n < g; n++) delete a[n].safeI }; a.arrayMin = function (a) { for (var d = a.length, g = a[0]; d--;) a[d] < g && (g = a[d]); return g }; a.arrayMax = function (a) { for (var d = a.length, g = a[0]; d--;) a[d] > g && (g = a[d]); return g }; a.destroyObjectProperties =
                function (a, d) { for (var g in a) a[g] && a[g] !== d && a[g].destroy && a[g].destroy(), delete a[g] }; a.discardElement = function (q) { var d = a.garbageBin; d || (d = a.createElement("div")); q && d.appendChild(q); d.innerHTML = "" }; a.correctFloat = function (a, d) { return parseFloat(a.toPrecision(d || 14)) }; a.setAnimation = function (q, d) { d.renderer.globalAnimation = a.pick(q, d.options.chart.animation, !0) }; a.animObject = function (q) { return a.isObject(q) ? a.merge(q) : { duration: q ? 500 : 0 } }; a.timeUnits = {
                    millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5,
                    day: 864E5, week: 6048E5, month: 24192E5, year: 314496E5
                }; a.numberFormat = function (q, d, g, h) { q = +q || 0; d = +d; var n = a.defaultOptions.lang, m = (q.toString().split(".")[1] || "").length, f, c; -1 === d ? d = Math.min(m, 20) : a.isNumber(d) || (d = 2); c = (Math.abs(q) + Math.pow(10, -Math.max(d, m) - 1)).toFixed(d); m = String(a.pInt(c)); f = 3 < m.length ? m.length % 3 : 0; g = a.pick(g, n.decimalPoint); h = a.pick(h, n.thousandsSep); q = (0 > q ? "-" : "") + (f ? m.substr(0, f) + h : ""); q += m.substr(f).replace(/(\d{3})(?=\d)/g, "$1" + h); d && (q += g + c.slice(-d)); return q }; Math.easeInOutSine =
                    function (a) { return -.5 * (Math.cos(Math.PI * a) - 1) }; a.getStyle = function (q, d) { return "width" === d ? Math.min(q.offsetWidth, q.scrollWidth) - a.getStyle(q, "padding-left") - a.getStyle(q, "padding-right") : "height" === d ? Math.min(q.offsetHeight, q.scrollHeight) - a.getStyle(q, "padding-top") - a.getStyle(q, "padding-bottom") : (q = F.getComputedStyle(q, void 0)) && a.pInt(q.getPropertyValue(d)) }; a.inArray = function (a, d) { return d.indexOf ? d.indexOf(a) : [].indexOf.call(d, a) }; a.grep = function (a, d) { return [].filter.call(a, d) }; a.find = function (a,
                        d) { return [].find.call(a, d) }; a.map = function (a, d) { for (var g = [], h = 0, n = a.length; h < n; h++) g[h] = d.call(a[h], a[h], h, a); return g }; a.offset = function (a) { var d = D.documentElement; a = a.getBoundingClientRect(); return { top: a.top + (F.pageYOffset || d.scrollTop) - (d.clientTop || 0), left: a.left + (F.pageXOffset || d.scrollLeft) - (d.clientLeft || 0) } }; a.stop = function (a, d) { for (var g = B.length; g--;) B[g].elem !== a || d && d !== B[g].prop || (B[g].stopped = !0) }; a.each = function (a, d, g) { return Array.prototype.forEach.call(a, d, g) }; a.addEvent = function (q,
                            d, g) { function h(a) { a.target = a.srcElement || F; g.call(q, a) } var n = q.hcEvents = q.hcEvents || {}; q.addEventListener ? q.addEventListener(d, g, !1) : q.attachEvent && (q.hcEventsIE || (q.hcEventsIE = {}), q.hcEventsIE[g.toString()] = h, q.attachEvent("on" + d, h)); n[d] || (n[d] = []); n[d].push(g); return function () { a.removeEvent(q, d, g) } }; a.removeEvent = function (q, d, g) {
                                function h(a, c) { q.removeEventListener ? q.removeEventListener(a, c, !1) : q.attachEvent && (c = q.hcEventsIE[c.toString()], q.detachEvent("on" + a, c)) } function n() {
                                    var a, c; if (q.nodeName) for (c in d ?
                                        (a = {}, a[d] = !0) : a = f, a) if (f[c]) for (a = f[c].length; a--;) h(c, f[c][a])
                                } var m, f = q.hcEvents, c; f && (d ? (m = f[d] || [], g ? (c = a.inArray(g, m), -1 < c && (m.splice(c, 1), f[d] = m), h(d, g)) : (n(), f[d] = [])) : (n(), q.hcEvents = {}))
                            }; a.fireEvent = function (q, d, g, h) {
                                var n; n = q.hcEvents; var m, f; g = g || {}; if (D.createEvent && (q.dispatchEvent || q.fireEvent)) n = D.createEvent("Events"), n.initEvent(d, !0, !0), a.extend(n, g), q.dispatchEvent ? q.dispatchEvent(n) : q.fireEvent(d, n); else if (n) for (n = n[d] || [], m = n.length, g.target || a.extend(g, {
                                    preventDefault: function () {
                                        g.defaultPrevented =
                                            !0
                                    }, target: q, type: d
                                }), d = 0; d < m; d++) (f = n[d]) && !1 === f.call(q, g) && g.preventDefault(); h && !g.defaultPrevented && h(g)
                            }; a.animate = function (q, d, g) {
                                var h, n = "", m, f, c; a.isObject(g) || (h = arguments, g = { duration: h[2], easing: h[3], complete: h[4] }); a.isNumber(g.duration) || (g.duration = 400); g.easing = "function" === typeof g.easing ? g.easing : Math[g.easing] || Math.easeInOutSine; g.curAnim = a.merge(d); for (c in d) a.stop(q, c), f = new a.Fx(q, g, c), m = null, "d" === c ? (f.paths = f.initPath(q, q.d, d.d), f.toD = d.d, h = 0, m = 1) : q.attr ? h = q.attr(c) : (h = parseFloat(a.getStyle(q,
                                    c)) || 0, "opacity" !== c && (n = "px")), m || (m = d[c]), m && m.match && m.match("px") && (m = m.replace(/px/g, "")), f.run(h, m, n)
                            }; a.seriesType = function (q, d, g, h, n) { var m = a.getOptions(), f = a.seriesTypes; m.plotOptions[q] = a.merge(m.plotOptions[d], g); f[q] = a.extendClass(f[d] || function () { }, h); f[q].prototype.type = q; n && (f[q].prototype.pointClass = a.extendClass(a.Point, n)); return f[q] }; a.uniqueKey = function () { var a = Math.random().toString(36).substring(2, 9), d = 0; return function () { return "highcharts-" + a + "-" + d++ } }(); F.jQuery && (F.jQuery.fn.highcharts =
                                function () { var q = [].slice.call(arguments); if (this[0]) return q[0] ? (new (a[a.isString(q[0]) ? q.shift() : "Chart"])(this[0], q[0], q[1]), this) : w[a.attr(this[0], "data-highcharts-chart")] }); D && !D.defaultView && (a.getStyle = function (q, d) {
                                    var g = { width: "clientWidth", height: "clientHeight" }[d]; if (q.style[d]) return a.pInt(q.style[d]); "opacity" === d && (d = "filter"); if (g) return q.style.zoom = 1, Math.max(q[g] - 2 * a.getStyle(q, "padding"), 0); q = q.currentStyle[d.replace(/\-(\w)/g, function (a, d) { return d.toUpperCase() })]; "filter" ===
                                        d && (q = q.replace(/alpha\(opacity=([0-9]+)\)/, function (a, d) { return d / 100 })); return "" === q ? 1 : a.pInt(q)
                                }); Array.prototype.forEach || (a.each = function (a, d, g) { for (var h = 0, n = a.length; h < n; h++) if (!1 === d.call(g, a[h], h, a)) return h }); Array.prototype.indexOf || (a.inArray = function (a, d) { var g, h = 0; if (d) for (g = d.length; h < g; h++) if (d[h] === a) return h; return -1 }); Array.prototype.filter || (a.grep = function (a, d) { for (var g = [], h = 0, n = a.length; h < n; h++) d(a[h], h) && g.push(a[h]); return g }); Array.prototype.find || (a.find = function (a, d) {
                                    var g,
                                        h = a.length; for (g = 0; g < h; g++) if (d(a[g], g)) return a[g]
                                })
    })(J); (function (a) {
        var B = a.each, w = a.isNumber, D = a.map, F = a.merge, q = a.pInt; a.Color = function (d) { if (!(this instanceof a.Color)) return new a.Color(d); this.init(d) }; a.Color.prototype = {
            parsers: [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function (a) { return [q(a[1]), q(a[2]), q(a[3]), parseFloat(a[4], 10)] } }, {
                regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function (a) {
                    return [q(a[1]),
                    q(a[2]), q(a[3]), 1]
                }
            }], names: { white: "#ffffff", black: "#000000" }, init: function (d) { var g, h, n, m; if ((this.input = d = this.names[d] || d) && d.stops) this.stops = D(d.stops, function (f) { return new a.Color(f[1]) }); else if (d && "#" === d[0] && (g = d.length, d = parseInt(d.substr(1), 16), 7 === g ? h = [(d & 16711680) >> 16, (d & 65280) >> 8, d & 255, 1] : 4 === g && (h = [(d & 3840) >> 4 | (d & 3840) >> 8, (d & 240) >> 4 | d & 240, (d & 15) << 4 | d & 15, 1])), !h) for (n = this.parsers.length; n-- && !h;) m = this.parsers[n], (g = m.regex.exec(d)) && (h = m.parse(g)); this.rgba = h || [] }, get: function (a) {
                var d =
                    this.input, h = this.rgba, n; this.stops ? (n = F(d), n.stops = [].concat(n.stops), B(this.stops, function (m, f) { n.stops[f] = [n.stops[f][0], m.get(a)] })) : n = h && w(h[0]) ? "rgb" === a || !a && 1 === h[3] ? "rgb(" + h[0] + "," + h[1] + "," + h[2] + ")" : "a" === a ? h[3] : "rgba(" + h.join(",") + ")" : d; return n
            }, brighten: function (a) { var d, h = this.rgba; if (this.stops) B(this.stops, function (d) { d.brighten(a) }); else if (w(a) && 0 !== a) for (d = 0; 3 > d; d++) h[d] += q(255 * a), 0 > h[d] && (h[d] = 0), 255 < h[d] && (h[d] = 255); return this }, setOpacity: function (a) { this.rgba[3] = a; return this }
        };
        a.color = function (d) { return new a.Color(d) }
    })(J); (function (a) {
        var B, w, D = a.addEvent, F = a.animate, q = a.attr, d = a.charts, g = a.color, h = a.css, n = a.createElement, m = a.defined, f = a.deg2rad, c = a.destroyObjectProperties, E = a.doc, v = a.each, b = a.extend, e = a.erase, r = a.grep, p = a.hasTouch, I = a.inArray, t = a.isArray, A = a.isFirefox, H = a.isMS, x = a.isObject, l = a.isString, z = a.isWebKit, u = a.merge, N = a.noop, G = a.pick, k = a.pInt, y = a.removeEvent, S = a.splat, L = a.stop, O = a.svg, R = a.SVG_NS, K = a.symbolSizes, M = a.win; B = a.SVGElement = function () { return this };
        B.prototype = {
            opacity: 1, SVG_NS: R, textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "), init: function (a, b) { this.element = "span" === b ? n(b) : E.createElementNS(this.SVG_NS, b); this.renderer = a }, animate: function (C, b, k) { b = a.animObject(G(b, this.renderer.globalAnimation, !0)); 0 !== b.duration ? (k && (b.complete = k), F(this, C, b)) : (this.attr(C, null, k), b.step && b.step.call(this)); return this }, colorGradient: function (C, b, k) {
                var e = this.renderer,
                    y, c, l, P, r, f, p, d, g, h, z, K = [], A; C.linearGradient ? c = "linearGradient" : C.radialGradient && (c = "radialGradient"); if (c) {
                        l = C[c]; r = e.gradients; p = C.stops; h = k.radialReference; t(l) && (C[c] = l = { x1: l[0], y1: l[1], x2: l[2], y2: l[3], gradientUnits: "userSpaceOnUse" }); "radialGradient" === c && h && !m(l.gradientUnits) && (P = l, l = u(l, e.getRadialAttr(h, P), { gradientUnits: "userSpaceOnUse" })); for (z in l) "id" !== z && K.push(z, l[z]); for (z in p) K.push(p[z]); K = K.join(","); r[K] ? h = r[K].attr("id") : (l.id = h = a.uniqueKey(), r[K] = f = e.createElement(c).attr(l).add(e.defs),
                            f.radAttr = P, f.stops = [], v(p, function (C) { 0 === C[1].indexOf("rgba") ? (y = a.color(C[1]), d = y.get("rgb"), g = y.get("a")) : (d = C[1], g = 1); C = e.createElement("stop").attr({ offset: C[0], "stop-color": d, "stop-opacity": g }).add(f); f.stops.push(C) })); A = "url(" + e.url + "#" + h + ")"; k.setAttribute(b, A); k.gradient = K; C.toString = function () { return A }
                    }
            }, applyTextOutline: function (a) {
                var C = this.element, b, k, y, l; -1 !== a.indexOf("contrast") && (a = a.replace(/contrast/g, this.renderer.getContrast(C.style.fill))); this.fakeTS = !0; this.ySetter = this.xSetter;
                b = [].slice.call(C.getElementsByTagName("tspan")); a = a.split(" "); k = a[a.length - 1]; (y = a[0]) && "none" !== y && (y = y.replace(/(^[\d\.]+)(.*?)$/g, function (a, C, b) { return 2 * C + b }), v(b, function (a) { "highcharts-text-outline" === a.getAttribute("class") && e(b, C.removeChild(a)) }), l = C.firstChild, v(b, function (a, b) {
                    0 === b && (a.setAttribute("x", C.getAttribute("x")), b = C.getAttribute("y"), a.setAttribute("y", b || 0), null === b && C.setAttribute("y", 0)); a = a.cloneNode(1); q(a, {
                        "class": "highcharts-text-outline", fill: k, stroke: k, "stroke-width": y,
                        "stroke-linejoin": "round"
                    }); C.insertBefore(a, l)
                }))
            }, attr: function (a, b, k, e) {
                var C, y = this.element, l, c = this, f; "string" === typeof a && void 0 !== b && (C = a, a = {}, a[C] = b); if ("string" === typeof a) c = (this[a + "Getter"] || this._defaultGetter).call(this, a, y); else {
                    for (C in a) b = a[C], f = !1, e || L(this, C), this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(C) && (l || (this.symbolAttr(a), l = !0), f = !0), !this.rotation || "x" !== C && "y" !== C || (this.doTransform = !0), f || (f = this[C + "Setter"] || this._defaultSetter, f.call(this,
                        b, C, y)); this.doTransform && (this.updateTransform(), this.doTransform = !1)
                } k && k(); return c
            }, addClass: function (a, b) { var C = this.attr("class") || ""; -1 === C.indexOf(a) && (b || (a = (C + (C ? " " : "") + a).replace("  ", " ")), this.attr("class", a)); return this }, hasClass: function (a) { return -1 !== q(this.element, "class").indexOf(a) }, removeClass: function (a) { q(this.element, "class", (q(this.element, "class") || "").replace(a, "")); return this }, symbolAttr: function (a) {
                var C = this; v("x y r start end width height innerR anchorX anchorY".split(" "),
                    function (b) { C[b] = G(a[b], C[b]) }); C.attr({ d: C.renderer.symbols[C.symbolName](C.x, C.y, C.width, C.height, C) })
            }, clip: function (a) { return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none") }, crisp: function (a, b) {
                var C, k = {}, e; b = b || a.strokeWidth || 0; e = Math.round(b) % 2 / 2; a.x = Math.floor(a.x || this.x || 0) + e; a.y = Math.floor(a.y || this.y || 0) + e; a.width = Math.floor((a.width || this.width || 0) - 2 * e); a.height = Math.floor((a.height || this.height || 0) - 2 * e); m(a.strokeWidth) && (a.strokeWidth = b); for (C in a) this[C] !== a[C] &&
                    (this[C] = k[C] = a[C]); return k
            }, css: function (a) {
                var C = this.styles, e = {}, y = this.element, l, c = "", f = !C, r = ["textOverflow", "width"]; a && a.color && (a.fill = a.color); if (C) for (l in a) a[l] !== C[l] && (e[l] = a[l], f = !0); if (f) {
                    C && (a = b(C, e)); C = this.textWidth = a && a.width && "auto" !== a.width && "text" === y.nodeName.toLowerCase() && k(a.width); this.styles = a; C && !O && this.renderer.forExport && delete a.width; if (H && !O) h(this.element, a); else {
                        C = function (a, b) { return "-" + b.toLowerCase() }; for (l in a) -1 === I(l, r) && (c += l.replace(/([A-Z])/g, C) + ":" +
                            a[l] + ";"); c && q(y, "style", c)
                    } this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), a && a.textOutline && this.applyTextOutline(a.textOutline))
                } return this
            }, getStyle: function (a) { return M.getComputedStyle(this.element || this, "").getPropertyValue(a) }, strokeWidth: function () {
                var a = this.getStyle("stroke-width"), b; a.indexOf("px") === a.length - 2 ? a = k(a) : (b = E.createElementNS(R, "rect"), q(b, { width: a, "stroke-width": 0 }), this.element.parentNode.appendChild(b), a = b.getBBox().width, b.parentNode.removeChild(b));
                return a
            }, on: function (a, b) { var C = this, k = C.element; p && "click" === a ? (k.ontouchstart = function (a) { C.touchEventFired = Date.now(); a.preventDefault(); b.call(k, a) }, k.onclick = function (a) { (-1 === M.navigator.userAgent.indexOf("Android") || 1100 < Date.now() - (C.touchEventFired || 0)) && b.call(k, a) }) : k["on" + a] = b; return this }, setRadialReference: function (a) { var b = this.renderer.gradients[this.element.gradient]; this.element.radialReference = a; b && b.radAttr && b.animate(this.renderer.getRadialAttr(a, b.radAttr)); return this }, translate: function (a,
                b) { return this.attr({ translateX: a, translateY: b }) }, invert: function (a) { this.inverted = a; this.updateTransform(); return this }, updateTransform: function () {
                    var a = this.translateX || 0, b = this.translateY || 0, k = this.scaleX, e = this.scaleY, y = this.inverted, l = this.rotation, c = this.element; y && (a += this.width, b += this.height); a = ["translate(" + a + "," + b + ")"]; y ? a.push("rotate(90) scale(-1,1)") : l && a.push("rotate(" + l + " " + (c.getAttribute("x") || 0) + " " + (c.getAttribute("y") || 0) + ")"); (m(k) || m(e)) && a.push("scale(" + G(k, 1) + " " + G(e, 1) + ")");
                    a.length && c.setAttribute("transform", a.join(" "))
                }, toFront: function () { var a = this.element; a.parentNode.appendChild(a); return this }, align: function (a, b, k) {
                    var C, y, c, f, r = {}; y = this.renderer; c = y.alignedObjects; var p, d; if (a) { if (this.alignOptions = a, this.alignByTranslate = b, !k || l(k)) this.alignTo = C = k || "renderer", e(c, this), c.push(this), k = null } else a = this.alignOptions, b = this.alignByTranslate, C = this.alignTo; k = G(k, y[C], y); C = a.align; y = a.verticalAlign; c = (k.x || 0) + (a.x || 0); f = (k.y || 0) + (a.y || 0); "right" === C ? p = 1 : "center" ===
                        C && (p = 2); p && (c += (k.width - (a.width || 0)) / p); r[b ? "translateX" : "x"] = Math.round(c); "bottom" === y ? d = 1 : "middle" === y && (d = 2); d && (f += (k.height - (a.height || 0)) / d); r[b ? "translateY" : "y"] = Math.round(f); this[this.placed ? "animate" : "attr"](r); this.placed = !0; this.alignAttr = r; return this
                }, getBBox: function (a, k) {
                    var e, C = this.renderer, y, l = this.element, c = this.styles, r, p = this.textStr, d, m = C.cache, t = C.cacheKeys, u; k = G(k, this.rotation); y = k * f; r = l && B.prototype.getStyle.call(l, "font-size"); void 0 !== p && (u = p.toString(), -1 === u.indexOf("\x3c") &&
                        (u = u.replace(/[0-9]/g, "0")), u += ["", k || 0, r, c && c.width, c && c.textOverflow].join()); u && !a && (e = m[u]); if (!e) {
                            if (l.namespaceURI === this.SVG_NS || C.forExport) { try { (d = this.fakeTS && function (a) { v(l.querySelectorAll(".highcharts-text-outline"), function (b) { b.style.display = a }) }) && d("none"), e = l.getBBox ? b({}, l.getBBox()) : { width: l.offsetWidth, height: l.offsetHeight }, d && d("") } catch (U) { } if (!e || 0 > e.width) e = { width: 0, height: 0 } } else e = this.htmlGetBBox(); C.isSVG && (a = e.width, C = e.height, c && "11px" === c.fontSize && 17 === Math.round(C) &&
                                (e.height = C = 14), k && (e.width = Math.abs(C * Math.sin(y)) + Math.abs(a * Math.cos(y)), e.height = Math.abs(C * Math.cos(y)) + Math.abs(a * Math.sin(y)))); if (u && 0 < e.height) { for (; 250 < t.length;) delete m[t.shift()]; m[u] || t.push(u); m[u] = e }
                        } return e
                }, show: function (a) { return this.attr({ visibility: a ? "inherit" : "visible" }) }, hide: function () { return this.attr({ visibility: "hidden" }) }, fadeOut: function (a) { var b = this; b.animate({ opacity: 0 }, { duration: a || 150, complete: function () { b.attr({ y: -9999 }) } }) }, add: function (a) {
                    var b = this.renderer,
                        k = this.element, e; a && (this.parentGroup = a); this.parentInverted = a && a.inverted; void 0 !== this.textStr && b.buildText(this); this.added = !0; if (!a || a.handleZ || this.zIndex) e = this.zIndexSetter(); e || (a ? a.element : b.box).appendChild(k); if (this.onAdd) this.onAdd(); return this
                }, safeRemoveChild: function (a) { var b = a.parentNode; b && b.removeChild(a) }, destroy: function () {
                    var a = this.element || {}, b = this.renderer.isSVG && "SPAN" === a.nodeName && this.parentGroup, k, y; a.onclick = a.onmouseout = a.onmouseover = a.onmousemove = a.point = null; L(this);
                    this.clipPath && (this.clipPath = this.clipPath.destroy()); if (this.stops) { for (y = 0; y < this.stops.length; y++) this.stops[y] = this.stops[y].destroy(); this.stops = null } for (this.safeRemoveChild(a); b && b.div && 0 === b.div.childNodes.length;) a = b.parentGroup, this.safeRemoveChild(b.div), delete b.div, b = a; this.alignTo && e(this.renderer.alignedObjects, this); for (k in this) delete this[k]; return null
                }, xGetter: function (a) { "circle" === this.element.nodeName && ("x" === a ? a = "cx" : "y" === a && (a = "cy")); return this._defaultGetter(a) }, _defaultGetter: function (a) {
                    a =
                        G(this[a], this.element ? this.element.getAttribute(a) : null, 0); /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a)); return a
                }, dSetter: function (a, b, k) { a && a.join && (a = a.join(" ")); /(NaN| {2}|^$)/.test(a) && (a = "M 0 0"); k.setAttribute(b, a); this[b] = a }, alignSetter: function (a) { this.element.setAttribute("text-anchor", { left: "start", center: "middle", right: "end" }[a]) }, opacitySetter: function (a, b, k) { this[b] = a; k.setAttribute(b, a) }, titleSetter: function (a) {
                    var b = this.element.getElementsByTagName("title")[0]; b || (b = E.createElementNS(this.SVG_NS,
                        "title"), this.element.appendChild(b)); b.firstChild && b.removeChild(b.firstChild); b.appendChild(E.createTextNode(String(G(a), "").replace(/<[^>]*>/g, "")))
                }, textSetter: function (a) { a !== this.textStr && (delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this)) }, fillSetter: function (a, b, k) { "string" === typeof a ? k.setAttribute(b, a) : a && this.colorGradient(a, b, k) }, visibilitySetter: function (a, b, k) { "inherit" === a ? k.removeAttribute(b) : k.setAttribute(b, a) }, zIndexSetter: function (a, b) {
                    var e = this.renderer,
                        y = this.parentGroup, l = (y || e).element || e.box, c, C = this.element, f; c = this.added; var r; m(a) && (C.zIndex = a, a = +a, this[b] === a && (c = !1), this[b] = a); if (c) { (a = this.zIndex) && y && (y.handleZ = !0); b = l.childNodes; for (r = 0; r < b.length && !f; r++) y = b[r], c = y.zIndex, y !== C && (k(c) > a || !m(a) && m(c) || 0 > a && !m(c) && l !== e.box) && (l.insertBefore(C, y), f = !0); f || l.appendChild(C) } return f
                }, _defaultSetter: function (a, b, k) { k.setAttribute(b, a) }
        }; B.prototype.yGetter = B.prototype.xGetter; B.prototype.translateXSetter = B.prototype.translateYSetter = B.prototype.rotationSetter =
            B.prototype.verticalAlignSetter = B.prototype.scaleXSetter = B.prototype.scaleYSetter = function (a, b) { this[b] = a; this.doTransform = !0 }; w = a.SVGRenderer = function () { this.init.apply(this, arguments) }; w.prototype = {
                Element: B, SVG_NS: R, init: function (a, b, k, e, y, l) {
                    var c; e = this.createElement("svg").attr({ version: "1.1", "class": "highcharts-root" }); c = e.element; a.appendChild(c); -1 === a.innerHTML.indexOf("xmlns") && q(c, "xmlns", this.SVG_NS); this.isSVG = !0; this.box = c; this.boxWrapper = e; this.alignedObjects = []; this.url = (A || z) && E.getElementsByTagName("base").length ?
                        M.location.href.replace(/#.*?$/, "").replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : ""; this.createElement("desc").add().element.appendChild(E.createTextNode("Created with Highcharts 5.0.9")); this.defs = this.createElement("defs").add(); this.allowHTML = l; this.forExport = y; this.gradients = {}; this.cache = {}; this.cacheKeys = []; this.imgCount = 0; this.setSize(b, k, !1); var C; A && a.getBoundingClientRect && (b = function () {
                            h(a, { left: 0, top: 0 }); C = a.getBoundingClientRect(); h(a, {
                                left: Math.ceil(C.left) -
                                C.left + "px", top: Math.ceil(C.top) - C.top + "px"
                            })
                        }, b(), this.unSubPixelFix = D(M, "resize", b))
                }, definition: function (a) { function b(a, e) { var y; v(S(a), function (a) { var l = k.createElement(a.tagName), c, C = {}; for (c in a) "tagName" !== c && "children" !== c && "textContent" !== c && (C[c] = a[c]); l.attr(C); l.add(e || k.defs); a.textContent && l.element.appendChild(E.createTextNode(a.textContent)); b(a.children || [], l); y = l }); return y } var k = this; return b(a) }, isHidden: function () { return !this.boxWrapper.getBBox().width }, destroy: function () {
                    var a =
                        this.defs; this.box = null; this.boxWrapper = this.boxWrapper.destroy(); c(this.gradients || {}); this.gradients = null; a && (this.defs = a.destroy()); this.unSubPixelFix && this.unSubPixelFix(); return this.alignedObjects = null
                }, createElement: function (a) { var b = new this.Element; b.init(this, a); return b }, draw: N, getRadialAttr: function (a, b) { return { cx: a[0] - a[2] / 2 + b.cx * a[2], cy: a[1] - a[2] / 2 + b.cy * a[2], r: b.r * a[2] } }, buildText: function (a) {
                    var b = a.element, e = this, y = e.forExport, l = G(a.textStr, "").toString(), c = -1 !== l.indexOf("\x3c"),
                        f = b.childNodes, C, p, d, m, t = q(b, "x"), u = a.styles, g = a.textWidth, z = u && u.lineHeight, K = u && u.textOutline, A = u && "ellipsis" === u.textOverflow, x = u && "nowrap" === u.whiteSpace, n = f.length, H = g && !a.added && this.box, L = function (a) { return z ? k(z) : e.fontMetrics(void 0, a.getAttribute("style") ? a : b).h }, u = [l, A, x, z, K, u && u.fontSize, g].join(); if (u !== a.textCache) {
                            for (a.textCache = u; n--;) b.removeChild(f[n]); c || K || A || g || -1 !== l.indexOf(" ") ? (C = /<.*class="([^"]+)".*>/, p = /<.*style="([^"]+)".*>/, d = /<.*href="(http[^"]+)".*>/, H && H.appendChild(b),
                                l = c ? l.replace(/<(b|strong)>/g, '\x3cspan class\x3d"highcharts-strong"\x3e').replace(/<(i|em)>/g, '\x3cspan class\x3d"highcharts-emphasized"\x3e').replace(/<a/g, "\x3cspan").replace(/<\/(b|strong|i|em|a)>/g, "\x3c/span\x3e").split(/<br.*?>/g) : [l], l = r(l, function (a) { return "" !== a }), v(l, function (k, l) {
                                    var c, f = 0; k = k.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||\x3cspan").replace(/<\/span>/g, "\x3c/span\x3e|||"); c = k.split("|||"); v(c, function (k) {
                                        if ("" !== k || 1 === c.length) {
                                            var r = {}, u = E.createElementNS(e.SVG_NS, "tspan"),
                                                z, v; C.test(k) && (z = k.match(C)[1], q(u, "class", z)); p.test(k) && (v = k.match(p)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), q(u, "style", v)); d.test(k) && !y && (q(u, "onclick", 'location.href\x3d"' + k.match(d)[1] + '"'), h(u, { cursor: "pointer" })); k = (k.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "\x3c").replace(/&gt;/g, "\x3e"); if (" " !== k) {
                                                    u.appendChild(E.createTextNode(k)); f ? r.dx = 0 : l && null !== t && (r.x = t); q(u, r); b.appendChild(u); !f && l && (!O && y && h(u, { display: "block" }), q(u, "dy", L(u))); if (g) {
                                                        r = k.replace(/([^\^])-/g, "$1- ").split(" ");
                                                        z = 1 < c.length || l || 1 < r.length && !x; for (var K, n, H = [], P = L(u), S = a.rotation, G = k, I = G.length; (z || A) && (r.length || H.length);) a.rotation = 0, K = a.getBBox(!0), n = K.width, !O && e.forExport && (n = e.measureSpanWidth(u.firstChild.data, a.styles)), K = n > g, void 0 === m && (m = K), A && m ? (I /= 2, "" === G || !K && .5 > I ? r = [] : (G = k.substring(0, G.length + (K ? -1 : 1) * Math.ceil(I)), r = [G + (3 < g ? "\u2026" : "")], u.removeChild(u.firstChild))) : K && 1 !== r.length ? (u.removeChild(u.firstChild), H.unshift(r.pop())) : (r = H, H = [], r.length && !x && (u = E.createElementNS(R, "tspan"),
                                                            q(u, { dy: P, x: t }), v && q(u, "style", v), b.appendChild(u)), n > g && (g = n)), r.length && u.appendChild(E.createTextNode(r.join(" ").replace(/- /g, "-"))); a.rotation = S
                                                    } f++
                                                }
                                        }
                                    })
                                }), m && a.attr("title", a.textStr), H && H.removeChild(b), K && a.applyTextOutline && a.applyTextOutline(K)) : b.appendChild(E.createTextNode(l.replace(/&lt;/g, "\x3c").replace(/&gt;/g, "\x3e")))
                        }
                }, getContrast: function (a) { a = g(a).rgba; return 510 < a[0] + a[1] + a[2] ? "#000000" : "#FFFFFF" }, button: function (a, b, k, e, y, l, c, r, f) {
                    var p = this.label(a, b, k, f, null, null, null, null,
                        "button"), C = 0; p.attr(u({ padding: 8, r: 2 }, y)); D(p.element, H ? "mouseover" : "mouseenter", function () { 3 !== C && p.setState(1) }); D(p.element, H ? "mouseout" : "mouseleave", function () { 3 !== C && p.setState(C) }); p.setState = function (a) { 1 !== a && (p.state = C = a); p.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][a || 0]) }; return p.on("click", function (a) { 3 !== C && e.call(p, a) })
                }, crispLine: function (a, b) {
                    a[1] === a[4] && (a[1] = a[4] = Math.round(a[1]) - b % 2 / 2);
                    a[2] === a[5] && (a[2] = a[5] = Math.round(a[2]) + b % 2 / 2); return a
                }, path: function (a) { var k = {}; t(a) ? k.d = a : x(a) && b(k, a); return this.createElement("path").attr(k) }, circle: function (a, b, k) { a = x(a) ? a : { x: a, y: b, r: k }; b = this.createElement("circle"); b.xSetter = b.ySetter = function (a, b, k) { k.setAttribute("c" + b, a) }; return b.attr(a) }, arc: function (a, b, k, e, y, l) { x(a) ? (e = a, b = e.y, k = e.r, a = e.x) : e = { innerR: e, start: y, end: l }; a = this.symbol("arc", a, b, k, k, e); a.r = k; return a }, rect: function (a, b, k, e, y, l) {
                    y = x(a) ? a.r : y; l = this.createElement("rect");
                    a = x(a) ? a : void 0 === a ? {} : { x: a, y: b, width: Math.max(k, 0), height: Math.max(e, 0) }; y && (a.r = y); l.rSetter = function (a, b, k) { q(k, { rx: a, ry: a }) }; return l.attr(a)
                }, setSize: function (a, b, k) { var e = this.alignedObjects, y = e.length; this.width = a; this.height = b; for (this.boxWrapper.animate({ width: a, height: b }, { step: function () { this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") }) }, duration: G(k, !0) ? void 0 : 0 }); y--;) e[y].align() }, g: function (a) {
                    var b = this.createElement("g"); return a ? b.attr({
                        "class": "highcharts-" +
                        a
                    }) : b
                }, image: function (a, k, e, y, l) { var c = { preserveAspectRatio: "none" }; 1 < arguments.length && b(c, { x: k, y: e, width: y, height: l }); c = this.createElement("image").attr(c); c.element.setAttributeNS ? c.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : c.element.setAttribute("hc-svg-href", a); return c }, symbol: function (a, k, e, y, l, c) {
                    var r = this, f, p = this.symbols[a], u = m(k) && p && this.symbols[a](Math.round(k), Math.round(e), y, l, c), t = /^url\((.*?)\)$/, C, g; p ? (f = this.path(u), b(f, { symbolName: a, x: k, y: e, width: y, height: l }),
                        c && b(f, c)) : t.test(a) && (C = a.match(t)[1], f = this.image(C), f.imgwidth = G(K[C] && K[C].width, c && c.width), f.imgheight = G(K[C] && K[C].height, c && c.height), g = function () { f.attr({ width: f.width, height: f.height }) }, v(["width", "height"], function (a) { f[a + "Setter"] = function (a, b) { var k = {}, e = this["img" + b], y = "width" === b ? "translateX" : "translateY"; this[b] = a; m(e) && (this.element && this.element.setAttribute(b, e), this.alignByTranslate || (k[y] = ((this[b] || 0) - e) / 2, this.attr(k))) } }), m(k) && f.attr({ x: k, y: e }), f.isImg = !0, m(f.imgwidth) && m(f.imgheight) ?
                            g() : (f.attr({ width: 0, height: 0 }), n("img", { onload: function () { var a = d[r.chartIndex]; 0 === this.width && (h(this, { position: "absolute", top: "-999em" }), E.body.appendChild(this)); K[C] = { width: this.width, height: this.height }; f.imgwidth = this.width; f.imgheight = this.height; f.element && g(); this.parentNode && this.parentNode.removeChild(this); r.imgCount--; if (!r.imgCount && a && a.onload) a.onload() }, src: C }), this.imgCount++)); return f
                }, symbols: {
                    circle: function (a, b, k, e) {
                        return this.arc(a + k / 2, b + e / 2, k / 2, e / 2, {
                            start: 0, end: 2 * Math.PI,
                            open: !1
                        })
                    }, square: function (a, b, k, e) { return ["M", a, b, "L", a + k, b, a + k, b + e, a, b + e, "Z"] }, triangle: function (a, b, k, e) { return ["M", a + k / 2, b, "L", a + k, b + e, a, b + e, "Z"] }, "triangle-down": function (a, b, k, e) { return ["M", a, b, "L", a + k, b, a + k / 2, b + e, "Z"] }, diamond: function (a, b, k, e) { return ["M", a + k / 2, b, "L", a + k, b + e / 2, a + k / 2, b + e, a, b + e / 2, "Z"] }, arc: function (a, b, k, e, y) {
                        var l = y.start, c = y.r || k, f = y.r || e || k, r = y.end - .001; k = y.innerR; e = y.open; var p = Math.cos(l), u = Math.sin(l), d = Math.cos(r), r = Math.sin(r); y = y.end - l < Math.PI ? 0 : 1; c = ["M", a + c * p, b + f * u,
                            "A", c, f, 0, y, 1, a + c * d, b + f * r]; m(k) && c.push(e ? "M" : "L", a + k * d, b + k * r, "A", k, k, 0, y, 0, a + k * p, b + k * u); c.push(e ? "" : "Z"); return c
                    }, callout: function (a, b, k, e, y) {
                        var l = Math.min(y && y.r || 0, k, e), c = l + 6, f = y && y.anchorX; y = y && y.anchorY; var r; r = ["M", a + l, b, "L", a + k - l, b, "C", a + k, b, a + k, b, a + k, b + l, "L", a + k, b + e - l, "C", a + k, b + e, a + k, b + e, a + k - l, b + e, "L", a + l, b + e, "C", a, b + e, a, b + e, a, b + e - l, "L", a, b + l, "C", a, b, a, b, a + l, b]; f && f > k ? y > b + c && y < b + e - c ? r.splice(13, 3, "L", a + k, y - 6, a + k + 6, y, a + k, y + 6, a + k, b + e - l) : r.splice(13, 3, "L", a + k, e / 2, f, y, a + k, e / 2, a + k, b + e - l) : f &&
                            0 > f ? y > b + c && y < b + e - c ? r.splice(33, 3, "L", a, y + 6, a - 6, y, a, y - 6, a, b + l) : r.splice(33, 3, "L", a, e / 2, f, y, a, e / 2, a, b + l) : y && y > e && f > a + c && f < a + k - c ? r.splice(23, 3, "L", f + 6, b + e, f, b + e + 6, f - 6, b + e, a + l, b + e) : y && 0 > y && f > a + c && f < a + k - c && r.splice(3, 3, "L", f - 6, b, f, b - 6, f + 6, b, k - l, b); return r
                    }
                }, clipRect: function (b, k, e, y) { var l = a.uniqueKey(), c = this.createElement("clipPath").attr({ id: l }).add(this.defs); b = this.rect(b, k, e, y, 0).add(c); b.id = l; b.clipPath = c; b.count = 0; return b }, text: function (a, b, k, e) {
                    var y = !O && this.forExport, l = {}; if (e && (this.allowHTML ||
                        !this.forExport)) return this.html(a, b, k); l.x = Math.round(b || 0); k && (l.y = Math.round(k)); if (a || 0 === a) l.text = a; a = this.createElement("text").attr(l); y && a.css({ position: "absolute" }); e || (a.xSetter = function (a, b, k) { var e = k.getElementsByTagName("tspan"), y, l = k.getAttribute(b), c; for (c = 0; c < e.length; c++) y = e[c], y.getAttribute(b) === l && y.setAttribute(b, a); k.setAttribute(b, a) }); return a
                }, fontMetrics: function (a, b) {
                    a = b && B.prototype.getStyle.call(b, "font-size"); a = /px/.test(a) ? k(a) : /em/.test(a) ? parseFloat(a) * (b ? this.fontMetrics(null,
                        b.parentNode).f : 16) : 12; b = 24 > a ? a + 3 : Math.round(1.2 * a); return { h: b, b: Math.round(.8 * b), f: a }
                }, rotCorr: function (a, b, k) { var e = a; b && k && (e = Math.max(e * Math.cos(b * f), 4)); return { x: -a / 3 * Math.sin(b * f), y: e } }, label: function (k, e, l, c, f, r, p, d, t) {
                    var g = this, z = g.g("button" !== t && "label"), h = z.text = g.text("", 0, 0, p).attr({ zIndex: 1 }), K, A, n = 0, x = 3, E = 0, C, H, L, S, G, I = {}, q, M = /^url\((.*?)\)$/.test(c), N = M, O, P, R, Q; t && z.addClass("highcharts-" + t); N = !0; O = function () { return K.strokeWidth() % 2 / 2 }; P = function () {
                        var a = h.element.style, k = {}; A = (void 0 ===
                            C || void 0 === H || G) && m(h.textStr) && h.getBBox(); z.width = (C || A.width || 0) + 2 * x + E; z.height = (H || A.height || 0) + 2 * x; q = x + g.fontMetrics(a && a.fontSize, h).b; N && (K || (z.box = K = g.symbols[c] || M ? g.symbol(c) : g.rect(), K.addClass(("button" === t ? "" : "highcharts-label-box") + (t ? " highcharts-" + t + "-box" : "")), K.add(z), a = O(), k.x = a, k.y = (d ? -q : 0) + a), k.width = Math.round(z.width), k.height = Math.round(z.height), K.attr(b(k, I)), I = {})
                    }; R = function () {
                        var a = E + x, b; b = d ? 0 : q; m(C) && A && ("center" === G || "right" === G) && (a += { center: .5, right: 1 }[G] * (C - A.width));
                        if (a !== h.x || b !== h.y) h.attr("x", a), void 0 !== b && h.attr("y", b); h.x = a; h.y = b
                    }; Q = function (a, b) { K ? K.attr(a, b) : I[a] = b }; z.onAdd = function () { h.add(z); z.attr({ text: k || 0 === k ? k : "", x: e, y: l }); K && m(f) && z.attr({ anchorX: f, anchorY: r }) }; z.widthSetter = function (b) { C = a.isNumber(b) ? b : null }; z.heightSetter = function (a) { H = a }; z["text-alignSetter"] = function (a) { G = a }; z.paddingSetter = function (a) { m(a) && a !== x && (x = z.padding = a, R()) }; z.paddingLeftSetter = function (a) { m(a) && a !== E && (E = a, R()) }; z.alignSetter = function (a) {
                        a = {
                            left: 0, center: .5,
                            right: 1
                        }[a]; a !== n && (n = a, A && z.attr({ x: L }))
                    }; z.textSetter = function (a) { void 0 !== a && h.textSetter(a); P(); R() }; z["stroke-widthSetter"] = function (a, b) { a && (N = !0); this["stroke-width"] = a; Q(b, a) }; z.rSetter = function (a, b) { Q(b, a) }; z.anchorXSetter = function (a, b) { f = a; Q(b, Math.round(a) - O() - L) }; z.anchorYSetter = function (a, b) { r = a; Q(b, a - S) }; z.xSetter = function (a) { z.x = a; n && (a -= n * ((C || A.width) + 2 * x)); L = Math.round(a); z.attr("translateX", L) }; z.ySetter = function (a) { S = z.y = Math.round(a); z.attr("translateY", S) }; var T = z.css; return b(z,
                        { css: function (a) { if (a) { var b = {}; a = u(a); v(z.textProps, function (k) { void 0 !== a[k] && (b[k] = a[k], delete a[k]) }); h.css(b) } return T.call(z, a) }, getBBox: function () { return { width: A.width + 2 * x, height: A.height + 2 * x, x: A.x - x, y: A.y - x } }, destroy: function () { y(z.element, "mouseenter"); y(z.element, "mouseleave"); h && (h = h.destroy()); K && (K = K.destroy()); B.prototype.destroy.call(z); z = g = P = R = Q = null } })
                }
            }; a.Renderer = w
    })(J); (function (a) {
        var B = a.attr, w = a.createElement, D = a.css, F = a.defined, q = a.each, d = a.extend, g = a.isFirefox, h = a.isMS, n =
            a.isWebKit, m = a.pInt, f = a.SVGRenderer, c = a.win, E = a.wrap; d(a.SVGElement.prototype, {
                htmlCss: function (a) { var b = this.element; if (b = a && "SPAN" === b.tagName && a.width) delete a.width, this.textWidth = b, this.updateTransform(); a && "ellipsis" === a.textOverflow && (a.whiteSpace = "nowrap", a.overflow = "hidden"); this.styles = d(this.styles, a); D(this.element, a); return this }, htmlGetBBox: function () { var a = this.element; "text" === a.nodeName && (a.style.position = "absolute"); return { x: a.offsetLeft, y: a.offsetTop, width: a.offsetWidth, height: a.offsetHeight } },
                htmlUpdateTransform: function () {
                    if (this.added) {
                        var a = this.renderer, b = this.element, e = this.x || 0, c = this.y || 0, f = this.textAlign || "left", d = { left: 0, center: .5, right: 1 }[f], t = this.styles; D(b, { marginLeft: this.translateX || 0, marginTop: this.translateY || 0 }); this.inverted && q(b.childNodes, function (e) { a.invertChild(e, b) }); if ("SPAN" === b.tagName) {
                            var g = this.rotation, h = m(this.textWidth), x = t && t.whiteSpace, l = [g, f, b.innerHTML, this.textWidth, this.textAlign].join(); l !== this.cTT && (t = a.fontMetrics(b.style.fontSize).b, F(g) && this.setSpanRotation(g,
                                d, t), D(b, { width: "", whiteSpace: x || "nowrap" }), b.offsetWidth > h && /[ \-]/.test(b.textContent || b.innerText) && D(b, { width: h + "px", display: "block", whiteSpace: x || "normal" }), this.getSpanCorrection(b.offsetWidth, t, d, g, f)); D(b, { left: e + (this.xCorr || 0) + "px", top: c + (this.yCorr || 0) + "px" }); n && (t = b.offsetHeight); this.cTT = l
                        }
                    } else this.alignOnAdd = !0
                }, setSpanRotation: function (a, b, e) {
                    var f = {}, p = h ? "-ms-transform" : n ? "-webkit-transform" : g ? "MozTransform" : c.opera ? "-o-transform" : ""; f[p] = f.transform = "rotate(" + a + "deg)"; f[p + (g ? "Origin" :
                        "-origin")] = f.transformOrigin = 100 * b + "% " + e + "px"; D(this.element, f)
                }, getSpanCorrection: function (a, b, e) { this.xCorr = -a * e; this.yCorr = -b }
            }); d(f.prototype, {
                html: function (a, b, e) {
                    var c = this.createElement("span"), f = c.element, m = c.renderer, t = m.isSVG, g = function (a, b) { q(["opacity", "visibility"], function (e) { E(a, e + "Setter", function (a, e, c, l) { a.call(this, e, c, l); b[c] = e }) }) }; c.textSetter = function (a) { a !== f.innerHTML && delete this.bBox; f.innerHTML = this.textStr = a; c.htmlUpdateTransform() }; t && g(c, c.element.style); c.xSetter =
                        c.ySetter = c.alignSetter = c.rotationSetter = function (a, b) { "align" === b && (b = "textAlign"); c[b] = a; c.htmlUpdateTransform() }; c.attr({ text: a, x: Math.round(b), y: Math.round(e) }).css({ position: "absolute" }); f.style.whiteSpace = "nowrap"; c.css = c.htmlCss; t && (c.add = function (a) {
                            var b, e = m.box.parentNode, r = []; if (this.parentGroup = a) {
                                if (b = a.div, !b) {
                                    for (; a;) r.push(a), a = a.parentGroup; q(r.reverse(), function (a) {
                                        var l, f = B(a.element, "class"); f && (f = { className: f }); b = a.div = a.div || w("div", f, {
                                            position: "absolute", left: (a.translateX ||
                                                0) + "px", top: (a.translateY || 0) + "px", display: a.display, opacity: a.opacity, pointerEvents: a.styles && a.styles.pointerEvents
                                        }, b || e); l = b.style; d(a, { on: function () { c.on.apply({ element: r[0].div }, arguments); return a }, translateXSetter: function (b, e) { l.left = b + "px"; a[e] = b; a.doTransform = !0 }, translateYSetter: function (b, e) { l.top = b + "px"; a[e] = b; a.doTransform = !0 } }); g(a, l)
                                    })
                                }
                            } else b = e; b.appendChild(f); c.added = !0; c.alignOnAdd && c.htmlUpdateTransform(); return c
                        }); return c
                }
            })
    })(J); (function (a) {
        function B() {
            var d = a.defaultOptions.global,
                n = g.moment; if (d.timezone) { if (n) return function (a) { return -n.tz(a, d.timezone).utcOffset() }; a.error(25) } return d.useUTC && d.getTimezoneOffset
        } function w() {
            var h = a.defaultOptions.global, n, m = h.useUTC, f = m ? "getUTC" : "get", c = m ? "setUTC" : "set"; a.Date = n = h.Date || g.Date; n.hcTimezoneOffset = m && h.timezoneOffset; n.hcGetTimezoneOffset = B(); n.hcMakeTime = function (a, c, b, e, f, p) { var r; m ? (r = n.UTC.apply(0, arguments), r += F(r)) : r = (new n(a, c, d(b, 1), d(e, 0), d(f, 0), d(p, 0))).getTime(); return r }; D("Minutes Hours Day Date Month FullYear".split(" "),
                function (a) { n["hcGet" + a] = f + a }); D("Milliseconds Seconds Minutes Hours Date Month FullYear".split(" "), function (a) { n["hcSet" + a] = c + a })
        } var D = a.each, F = a.getTZOffset, q = a.merge, d = a.pick, g = a.win; a.defaultOptions = {
            symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: {
                loading: "Loading...", months: "January February March April May June July August September October November December".split(" "), shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                decimalPoint: ".", numericSymbols: "kMGTPE".split(""), resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: " "
            }, global: { useUTC: !0 }, chart: { borderRadius: 0, colorCount: 10, defaultSeriesType: "line", ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], resetZoomButton: { theme: { zIndex: 20 }, position: { align: "right", x: -10, y: 10 } }, width: null, height: null }, title: { text: "Chart title", align: "center", margin: 15, widthAdjust: -44 }, subtitle: { text: "", align: "center", widthAdjust: -44 }, plotOptions: {}, labels: {
                style: {
                    position: "absolute",
                    color: "#333333"
                }
            }, legend: { enabled: !0, align: "center", layout: "horizontal", labelFormatter: function () { return this.name }, borderColor: "#999999", borderRadius: 0, navigation: {}, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, squareSymbol: !0, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: {} }, loading: {}, tooltip: {
                enabled: !0, animation: a.svg, borderRadius: 3, dateTimeLabelFormats: {
                    millisecond: "%A, %b %e, %H:%M:%S.%L", second: "%A, %b %e, %H:%M:%S", minute: "%A, %b %e, %H:%M", hour: "%A, %b %e, %H:%M",
                    day: "%A, %b %e, %Y", week: "Week from %A, %b %e, %Y", month: "%B %Y", year: "%Y"
                }, footerFormat: "", padding: 8, snap: a.isTouchDevice ? 25 : 10, headerFormat: '\x3cspan class\x3d"highcharts-header"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e', pointFormat: '\x3cspan class\x3d"highcharts-color-{point.colorIndex}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cspan class\x3d"highcharts-strong"\x3e{point.y}\x3c/span\x3e\x3cbr/\x3e'
            }, credits: {
                enabled: !0, href: "http://www.highcharts.com", position: {
                    align: "right", x: -10, verticalAlign: "bottom",
                    y: -5
                }, text: "Highcharts.com"
            }
        }; a.setOptions = function (d) { a.defaultOptions = q(!0, a.defaultOptions, d); w(); return a.defaultOptions }; a.getOptions = function () { return a.defaultOptions }; a.defaultPlotOptions = a.defaultOptions.plotOptions; w()
    })(J); (function (a) {
        var B = a.arrayMax, w = a.arrayMin, D = a.defined, F = a.destroyObjectProperties, q = a.each, d = a.erase, g = a.merge, h = a.pick; a.PlotLineOrBand = function (a, d) { this.axis = a; d && (this.options = d, this.id = d.id) }; a.PlotLineOrBand.prototype = {
            render: function () {
                var a = this, d = a.axis, f = d.horiz,
                    c = a.options, E = c.label, v = a.label, b = c.to, e = c.from, r = c.value, p = D(e) && D(b), I = D(r), t = a.svgElem, A = !t, H = [], x, l = h(c.zIndex, 0), z = c.events, H = { "class": "highcharts-plot-" + (p ? "band " : "line ") + (c.className || "") }, u = {}, q = d.chart.renderer, G = p ? "bands" : "lines", k; k = d.log2lin; d.isLog && (e = k(e), b = k(b), r = k(r)); u.zIndex = l; G += "-" + l; (k = d[G]) || (d[G] = k = q.g("plot-" + G).attr(u).add()); A && (a.svgElem = t = q.path().attr(H).add(k)); if (I) H = d.getPlotLinePath(r, t.strokeWidth()); else if (p) H = d.getPlotBandPath(e, b, c); else return; if (A && H && H.length) {
                        if (t.attr({ d: H }),
                            z) for (x in c = function (b) { t.on(b, function (k) { z[b].apply(a, [k]) }) }, z) c(x)
                    } else t && (H ? (t.show(), t.animate({ d: H })) : (t.hide(), v && (a.label = v = v.destroy()))); E && D(E.text) && H && H.length && 0 < d.width && 0 < d.height && !H.flat ? (E = g({ align: f && p && "center", x: f ? !p && 4 : 10, verticalAlign: !f && p && "middle", y: f ? p ? 16 : 10 : p ? 6 : -4, rotation: f && !p && 90 }, E), this.renderLabel(E, H, p, l)) : v && v.hide(); return a
            }, renderLabel: function (a, d, f, c) {
                var g = this.label, m = this.axis.chart.renderer; g || (g = {
                    align: a.textAlign || a.align, rotation: a.rotation, "class": "highcharts-plot-" +
                    (f ? "band" : "line") + "-label " + (a.className || "")
                }, g.zIndex = c, this.label = g = m.text(a.text, 0, 0, a.useHTML).attr(g).add()); c = [d[1], d[4], f ? d[6] : d[1]]; d = [d[2], d[5], f ? d[7] : d[2]]; f = w(c); m = w(d); g.align(a, !1, { x: f, y: m, width: B(c) - f, height: B(d) - m }); g.show()
            }, destroy: function () { d(this.axis.plotLinesAndBands, this); delete this.axis; F(this) }
        }; a.AxisPlotLineOrBandExtension = {
            getPlotBandPath: function (a, d) {
                d = this.getPlotLinePath(d, null, null, !0); (a = this.getPlotLinePath(a, null, null, !0)) && d ? (a.flat = a.toString() === d.toString(),
                    a.push(d[4], d[5], d[1], d[2], "z")) : a = null; return a
            }, addPlotBand: function (a) { return this.addPlotBandOrLine(a, "plotBands") }, addPlotLine: function (a) { return this.addPlotBandOrLine(a, "plotLines") }, addPlotBandOrLine: function (d, g) { var f = (new a.PlotLineOrBand(this, d)).render(), c = this.userOptions; f && (g && (c[g] = c[g] || [], c[g].push(d)), this.plotLinesAndBands.push(f)); return f }, removePlotBandOrLine: function (a) {
                for (var g = this.plotLinesAndBands, f = this.options, c = this.userOptions, h = g.length; h--;) g[h].id === a && g[h].destroy();
                q([f.plotLines || [], c.plotLines || [], f.plotBands || [], c.plotBands || []], function (c) { for (h = c.length; h--;) c[h].id === a && d(c, c[h]) })
            }
        }
    })(J); (function (a) {
        var B = a.correctFloat, w = a.defined, D = a.destroyObjectProperties, F = a.isNumber, q = a.pick, d = a.deg2rad; a.Tick = function (a, d, n, m) { this.axis = a; this.pos = d; this.type = n || ""; this.isNew = !0; n || m || this.addLabel() }; a.Tick.prototype = {
            addLabel: function () {
                var a = this.axis, d = a.options, n = a.chart, m = a.categories, f = a.names, c = this.pos, E = d.labels, v = a.tickPositions, b = c === v[0], e = c === v[v.length -
                    1], f = m ? q(m[c], f[c], c) : c, m = this.label, v = v.info, r; a.isDatetimeAxis && v && (r = d.dateTimeLabelFormats[v.higherRanks[c] || v.unitName]); this.isFirst = b; this.isLast = e; d = a.labelFormatter.call({ axis: a, chart: n, isFirst: b, isLast: e, dateTimeLabelFormat: r, value: a.isLog ? B(a.lin2log(f)) : f }); w(m) ? m && m.attr({ text: d }) : (this.labelLength = (this.label = m = w(d) && E.enabled ? n.renderer.text(d, 0, 0, E.useHTML).add(a.labelGroup) : null) && m.getBBox().width, this.rotation = 0)
            }, getLabelSize: function () {
                return this.label ? this.label.getBBox()[this.axis.horiz ?
                    "height" : "width"] : 0
            }, handleOverflow: function (a) {
                var g = this.axis, n = a.x, m = g.chart.chartWidth, f = g.chart.spacing, c = q(g.labelLeft, Math.min(g.pos, f[3])), f = q(g.labelRight, Math.max(g.pos + g.len, m - f[1])), E = this.label, v = this.rotation, b = { left: 0, center: .5, right: 1 }[g.labelAlign], e = E.getBBox().width, r = g.getSlotWidth(), p = r, I = 1, t, A = {}; if (v) 0 > v && n - b * e < c ? t = Math.round(n / Math.cos(v * d) - c) : 0 < v && n + b * e > f && (t = Math.round((m - n) / Math.cos(v * d))); else if (m = n + (1 - b) * e, n - b * e < c ? p = a.x + p * (1 - b) - c : m > f && (p = f - a.x + p * b, I = -1), p = Math.min(r,
                    p), p < r && "center" === g.labelAlign && (a.x += I * (r - p - b * (r - Math.min(e, p)))), e > p || g.autoRotation && (E.styles || {}).width) t = p; t && (A.width = t, (g.options.labels.style || {}).textOverflow || (A.textOverflow = "ellipsis"), E.css(A))
            }, getPosition: function (a, d, n, m) {
                var f = this.axis, c = f.chart, g = m && c.oldChartHeight || c.chartHeight; return {
                    x: a ? f.translate(d + n, null, null, m) + f.transB : f.left + f.offset + (f.opposite ? (m && c.oldChartWidth || c.chartWidth) - f.right - f.left : 0), y: a ? g - f.bottom + f.offset - (f.opposite ? f.height : 0) : g - f.translate(d + n, null,
                        null, m) - f.transB
                }
            }, getLabelPosition: function (a, h, n, m, f, c, E, v) { var b = this.axis, e = b.transA, r = b.reversed, p = b.staggerLines, g = b.tickRotCorr || { x: 0, y: 0 }, t = f.y; w(t) || (t = 0 === b.side ? n.rotation ? -8 : -n.getBBox().height : 2 === b.side ? g.y + 8 : Math.cos(n.rotation * d) * (g.y - n.getBBox(!1, 0).height / 2)); a = a + f.x + g.x - (c && m ? c * e * (r ? -1 : 1) : 0); h = h + t - (c && !m ? c * e * (r ? 1 : -1) : 0); p && (n = E / (v || 1) % p, b.opposite && (n = p - n - 1), h += b.labelOffset / p * n); return { x: a, y: Math.round(h) } }, getMarkPath: function (a, d, n, m, f, c) {
                return c.crispLine(["M", a, d, "L", a + (f ?
                    0 : -n), d + (f ? n : 0)], m)
            }, renderGridLine: function (a, d, n) { var g = this.axis, f = this.gridLine, c = {}, h = this.pos, v = this.type, b = g.tickmarkOffset, e = g.chart.renderer; f || (v || (c.zIndex = 1), a && (c.opacity = 0), this.gridLine = f = e.path().attr(c).addClass("highcharts-" + (v ? v + "-" : "") + "grid-line").add(g.gridGroup)); if (!a && f && (a = g.getPlotLinePath(h + b, f.strokeWidth() * n, a, !0))) f[this.isNew ? "attr" : "animate"]({ d: a, opacity: d }) }, renderMark: function (a, d, n) {
                var g = this.axis, f = g.chart.renderer, c = this.type, h = g.tickSize(c ? c + "Tick" : "tick"),
                    v = this.mark, b = !v, e = a.x; a = a.y; h && (g.opposite && (h[0] = -h[0]), b && (this.mark = v = f.path().addClass("highcharts-" + (c ? c + "-" : "") + "tick").add(g.axisGroup)), v[b ? "attr" : "animate"]({ d: this.getMarkPath(e, a, h[0], v.strokeWidth() * n, g.horiz, f), opacity: d }))
            }, renderLabel: function (a, d, n, m) {
                var f = this.axis, c = f.horiz, g = f.options, h = this.label, b = g.labels, e = b.step, r = f.tickmarkOffset, p = !0, I = a.x; a = a.y; h && F(I) && (h.xy = a = this.getLabelPosition(I, a, h, c, b, r, m, e), this.isFirst && !this.isLast && !q(g.showFirstLabel, 1) || this.isLast && !this.isFirst &&
                    !q(g.showLastLabel, 1) ? p = !1 : !c || f.isRadial || b.step || b.rotation || d || 0 === n || this.handleOverflow(a), e && m % e && (p = !1), p && F(a.y) ? (a.opacity = n, h[this.isNew ? "attr" : "animate"](a)) : h.attr("y", -9999), this.isNew = !1)
            }, render: function (a, d, n) { var g = this.axis, f = g.horiz, c = this.getPosition(f, this.pos, g.tickmarkOffset, d), h = c.x, v = c.y, g = f && h === g.pos + g.len || !f && v === g.pos ? -1 : 1; n = q(n, 1); this.isActive = !0; this.renderGridLine(d, n, g); this.renderMark(c, n, g); this.renderLabel(c, d, n, a) }, destroy: function () { D(this, this.axis) }
        }
    })(J);
    (function (a) {
        var B = a.addEvent, w = a.animObject, D = a.arrayMax, F = a.arrayMin, q = a.AxisPlotLineOrBandExtension, d = a.correctFloat, g = a.defaultOptions, h = a.defined, n = a.deg2rad, m = a.destroyObjectProperties, f = a.each, c = a.extend, E = a.fireEvent, v = a.format, b = a.getMagnitude, e = a.grep, r = a.inArray, p = a.isArray, I = a.isNumber, t = a.isString, A = a.merge, H = a.normalizeTickInterval, x = a.pick, l = a.PlotLineOrBand, z = a.removeEvent, u = a.splat, N = a.syncTimeout, G = a.Tick; a.Axis = function () { this.init.apply(this, arguments) }; a.Axis.prototype = {
            defaultOptions: {
                dateTimeLabelFormats: {
                    millisecond: "%H:%M:%S.%L",
                    second: "%H:%M:%S", minute: "%H:%M", hour: "%H:%M", day: "%e. %b", week: "%e. %b", month: "%b '%y", year: "%Y"
                }, endOnTick: !1, labels: { enabled: !0, x: 0 }, minPadding: .01, maxPadding: .01, minorTickLength: 2, minorTickPosition: "outside", startOfWeek: 1, startOnTick: !1, tickLength: 10, tickmarkPlacement: "between", tickPixelInterval: 100, tickPosition: "outside", title: { align: "middle" }, type: "linear"
            }, defaultYAxisOptions: {
                endOnTick: !0, tickPixelInterval: 72, showLastLabel: !0, labels: { x: -8 }, maxPadding: .05, minPadding: .05, startOnTick: !0, title: {
                    rotation: 270,
                    text: "Values"
                }, stackLabels: { enabled: !1, formatter: function () { return a.numberFormat(this.total, -1) } }
            }, defaultLeftAxisOptions: { labels: { x: -15 }, title: { rotation: 270 } }, defaultRightAxisOptions: { labels: { x: 15 }, title: { rotation: 90 } }, defaultBottomAxisOptions: { labels: { autoRotation: [-45], x: 0 }, title: { rotation: 0 } }, defaultTopAxisOptions: { labels: { autoRotation: [-45], x: 0 }, title: { rotation: 0 } }, init: function (a, b) {
                var k = b.isX; this.chart = a; this.horiz = a.inverted ? !k : k; this.isXAxis = k; this.coll = this.coll || (k ? "xAxis" : "yAxis");
                this.opposite = b.opposite; this.side = b.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3); this.setOptions(b); var e = this.options, c = e.type; this.labelFormatter = e.labels.formatter || this.defaultLabelFormatter; this.userOptions = b; this.minPixelPadding = 0; this.reversed = e.reversed; this.visible = !1 !== e.visible; this.zoomEnabled = !1 !== e.zoomEnabled; this.hasNames = "category" === c || !0 === e.categories; this.categories = e.categories || this.hasNames; this.names = this.names || []; this.isLog = "logarithmic" === c; this.isDatetimeAxis =
                    "datetime" === c; this.positiveValuesOnly = this.isLog && !this.allowNegativeLog; this.isLinked = h(e.linkedTo); this.ticks = {}; this.labelEdge = []; this.minorTicks = {}; this.plotLinesAndBands = []; this.alternateBands = {}; this.len = 0; this.minRange = this.userMinRange = e.minRange || e.maxZoom; this.range = e.range; this.offset = e.offset || 0; this.stacks = {}; this.oldStacks = {}; this.stacksTouched = 0; this.min = this.max = null; this.crosshair = x(e.crosshair, u(a.options.tooltip.crosshairs)[k ? 0 : 1], !1); var y; b = this.options.events; -1 === r(this, a.axes) &&
                        (k ? a.axes.splice(a.xAxis.length, 0, this) : a.axes.push(this), a[this.coll].push(this)); this.series = this.series || []; a.inverted && k && void 0 === this.reversed && (this.reversed = !0); this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine; for (y in b) B(this, y, b[y]); this.lin2log = e.linearToLogConverter || this.lin2log; this.isLog && (this.val2lin = this.log2lin, this.lin2val = this.lin2log)
            }, setOptions: function (a) {
                this.options = A(this.defaultOptions, "yAxis" === this.coll && this.defaultYAxisOptions, [this.defaultTopAxisOptions,
                this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], A(g[this.coll], a))
            }, defaultLabelFormatter: function () {
                var b = this.axis, e = this.value, c = b.categories, l = this.dateTimeLabelFormat, f = g.lang, d = f.numericSymbols, f = f.numericSymbolMagnitude || 1E3, r = d && d.length, p, u = b.options.labels.format, b = b.isLog ? Math.abs(e) : b.tickInterval; if (u) p = v(u, this); else if (c) p = e; else if (l) p = a.dateFormat(l, e); else if (r && 1E3 <= b) for (; r-- && void 0 === p;) c = Math.pow(f, r + 1), b >= c && 0 === 10 * e % c && null !==
                    d[r] && 0 !== e && (p = a.numberFormat(e / c, -1) + d[r]); void 0 === p && (p = 1E4 <= Math.abs(e) ? a.numberFormat(e, -1) : a.numberFormat(e, -1, void 0, "")); return p
            }, getSeriesExtremes: function () {
                var a = this, b = a.chart; a.hasVisibleSeries = !1; a.dataMin = a.dataMax = a.threshold = null; a.softThreshold = !a.isXAxis; a.buildStacks && a.buildStacks(); f(a.series, function (k) {
                    if (k.visible || !b.options.chart.ignoreHiddenSeries) {
                        var c = k.options, l = c.threshold, y; a.hasVisibleSeries = !0; a.positiveValuesOnly && 0 >= l && (l = null); if (a.isXAxis) c = k.xData, c.length &&
                            (k = F(c), I(k) || k instanceof Date || (c = e(c, function (a) { return I(a) }), k = F(c)), a.dataMin = Math.min(x(a.dataMin, c[0]), k), a.dataMax = Math.max(x(a.dataMax, c[0]), D(c))); else if (k.getExtremes(), y = k.dataMax, k = k.dataMin, h(k) && h(y) && (a.dataMin = Math.min(x(a.dataMin, k), k), a.dataMax = Math.max(x(a.dataMax, y), y)), h(l) && (a.threshold = l), !c.softThreshold || a.positiveValuesOnly) a.softThreshold = !1
                    }
                })
            }, translate: function (a, b, e, c, l, f) {
                var k = this.linkedParent || this, y = 1, d = 0, r = c ? k.oldTransA : k.transA; c = c ? k.oldMin : k.min; var p = k.minPixelPadding;
                l = (k.isOrdinal || k.isBroken || k.isLog && l) && k.lin2val; r || (r = k.transA); e && (y *= -1, d = k.len); k.reversed && (y *= -1, d -= y * (k.sector || k.len)); b ? (a = (a * y + d - p) / r + c, l && (a = k.lin2val(a))) : (l && (a = k.val2lin(a)), a = y * (a - c) * r + d + y * p + (I(f) ? r * f : 0)); return a
            }, toPixels: function (a, b) { return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos) }, toValue: function (a, b) { return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0) }, getPlotLinePath: function (a, b, e, c, l) {
                var k = this.chart, y = this.left, f = this.top, d, r, p = e && k.oldChartHeight ||
                    k.chartHeight, u = e && k.oldChartWidth || k.chartWidth, g; d = this.transB; var t = function (a, b, k) { if (a < b || a > k) c ? a = Math.min(Math.max(b, a), k) : g = !0; return a }; l = x(l, this.translate(a, null, null, e)); a = e = Math.round(l + d); d = r = Math.round(p - l - d); I(l) ? this.horiz ? (d = f, r = p - this.bottom, a = e = t(a, y, y + this.width)) : (a = y, e = u - this.right, d = r = t(d, f, f + this.height)) : g = !0; return g && !c ? null : k.renderer.crispLine(["M", a, d, "L", e, r], b || 1)
            }, getLinearTickPositions: function (a, b, e) {
                var k, c = d(Math.floor(b / a) * a); e = d(Math.ceil(e / a) * a); var l = []; if (this.single) return [b];
                for (b = c; b <= e;) { l.push(b); b = d(b + a); if (b === k) break; k = b } return l
            }, getMinorTickPositions: function () {
                var a = this, b = a.options, e = a.tickPositions, c = a.minorTickInterval, l = [], d = a.pointRangePadding || 0, r = a.min - d, d = a.max + d, p = d - r; if (p && p / c < a.len / 3) if (a.isLog) f(this.paddedTicks, function (b, e, k) { e && l.push.apply(l, a.getLogTickPositions(c, k[e - 1], k[e], !0)) }); else if (a.isDatetimeAxis && "auto" === b.minorTickInterval) l = l.concat(a.getTimeTicks(a.normalizeTimeTickInterval(c), r, d, b.startOfWeek)); else for (b = r + (e[0] - r) % c; b <= d &&
                    b !== l[0]; b += c) l.push(b); 0 !== l.length && a.trimTicks(l); return l
            }, adjustForMinRange: function () {
                var a = this.options, b = this.min, e = this.max, c, l = this.dataMax - this.dataMin >= this.minRange, d, r, p, u, g, t; this.isXAxis && void 0 === this.minRange && !this.isLog && (h(a.min) || h(a.max) ? this.minRange = null : (f(this.series, function (a) { u = a.xData; for (r = g = a.xIncrement ? 1 : u.length - 1; 0 < r; r--) if (p = u[r] - u[r - 1], void 0 === d || p < d) d = p }), this.minRange = Math.min(5 * d, this.dataMax - this.dataMin))); e - b < this.minRange && (t = this.minRange, c = (t - e + b) / 2,
                    c = [b - c, x(a.min, b - c)], l && (c[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin), b = D(c), e = [b + t, x(a.max, b + t)], l && (e[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax), e = F(e), e - b < t && (c[0] = e - t, c[1] = x(a.min, e - t), b = D(c))); this.min = b; this.max = e
            }, getClosest: function () { var a; this.categories ? a = 1 : f(this.series, function (b) { var e = b.closestPointRange, k = b.visible || !b.chart.options.chart.ignoreHiddenSeries; !b.noSharedTooltip && h(e) && k && (a = h(a) ? Math.min(a, e) : e) }); return a }, nameToX: function (a) {
                var b = p(this.categories),
                    e = b ? this.categories : this.names, k = a.options.x, c; a.series.requireSorting = !1; h(k) || (k = !1 === this.options.uniqueNames ? a.series.autoIncrement() : r(a.name, e)); -1 === k ? b || (c = e.length) : c = k; this.names[c] = a.name; return c
            }, updateNames: function () {
                var a = this; 0 < this.names.length && (this.names.length = 0, this.minRange = void 0, f(this.series || [], function (b) {
                    b.xIncrement = null; if (!b.points || b.isDirtyData) b.processData(), b.generatePoints(); f(b.points, function (e, k) {
                        var c; e.options && (c = a.nameToX(e), c !== e.x && (e.x = c, b.xData[k] =
                            c))
                    })
                }))
            }, setAxisTranslation: function (a) {
                var b = this, e = b.max - b.min, k = b.axisPointRange || 0, c, l = 0, d = 0, r = b.linkedParent, p = !!b.categories, u = b.transA, g = b.isXAxis; if (g || p || k) c = b.getClosest(), r ? (l = r.minPointOffset, d = r.pointRangePadding) : f(b.series, function (a) { var e = p ? 1 : g ? x(a.options.pointRange, c, 0) : b.axisPointRange || 0; a = a.options.pointPlacement; k = Math.max(k, e); b.single || (l = Math.max(l, t(a) ? 0 : e / 2), d = Math.max(d, "on" === a ? 0 : e)) }), r = b.ordinalSlope && c ? b.ordinalSlope / c : 1, b.minPointOffset = l *= r, b.pointRangePadding =
                    d *= r, b.pointRange = Math.min(k, e), g && (b.closestPointRange = c); a && (b.oldTransA = u); b.translationSlope = b.transA = u = b.options.staticScale || b.len / (e + d || 1); b.transB = b.horiz ? b.left : b.bottom; b.minPixelPadding = u * l
            }, minFromRange: function () { return this.max - this.range }, setTickInterval: function (e) {
                var k = this, c = k.chart, l = k.options, r = k.isLog, p = k.log2lin, u = k.isDatetimeAxis, g = k.isXAxis, t = k.isLinked, z = l.maxPadding, m = l.minPadding, A = l.tickInterval, v = l.tickPixelInterval, n = k.categories, G = k.threshold, q = k.softThreshold, N, B,
                    w, D; u || n || t || this.getTickAmount(); w = x(k.userMin, l.min); D = x(k.userMax, l.max); t ? (k.linkedParent = c[k.coll][l.linkedTo], c = k.linkedParent.getExtremes(), k.min = x(c.min, c.dataMin), k.max = x(c.max, c.dataMax), l.type !== k.linkedParent.options.type && a.error(11, 1)) : (!q && h(G) && (k.dataMin >= G ? (N = G, m = 0) : k.dataMax <= G && (B = G, z = 0)), k.min = x(w, N, k.dataMin), k.max = x(D, B, k.dataMax)); r && (k.positiveValuesOnly && !e && 0 >= Math.min(k.min, x(k.dataMin, k.min)) && a.error(10, 1), k.min = d(p(k.min), 15), k.max = d(p(k.max), 15)); k.range && h(k.max) &&
                        (k.userMin = k.min = w = Math.max(k.min, k.minFromRange()), k.userMax = D = k.max, k.range = null); E(k, "foundExtremes"); k.beforePadding && k.beforePadding(); k.adjustForMinRange(); !(n || k.axisPointRange || k.usePercentage || t) && h(k.min) && h(k.max) && (p = k.max - k.min) && (!h(w) && m && (k.min -= p * m), !h(D) && z && (k.max += p * z)); I(l.floor) ? k.min = Math.max(k.min, l.floor) : I(l.softMin) && (k.min = Math.min(k.min, l.softMin)); I(l.ceiling) ? k.max = Math.min(k.max, l.ceiling) : I(l.softMax) && (k.max = Math.max(k.max, l.softMax)); q && h(k.dataMin) && (G = G || 0, !h(w) &&
                            k.min < G && k.dataMin >= G ? k.min = G : !h(D) && k.max > G && k.dataMax <= G && (k.max = G)); k.tickInterval = k.min === k.max || void 0 === k.min || void 0 === k.max ? 1 : t && !A && v === k.linkedParent.options.tickPixelInterval ? A = k.linkedParent.tickInterval : x(A, this.tickAmount ? (k.max - k.min) / Math.max(this.tickAmount - 1, 1) : void 0, n ? 1 : (k.max - k.min) * v / Math.max(k.len, v)); g && !e && f(k.series, function (a) { a.processData(k.min !== k.oldMin || k.max !== k.oldMax) }); k.setAxisTranslation(!0); k.beforeSetTickPositions && k.beforeSetTickPositions(); k.postProcessTickInterval &&
                                (k.tickInterval = k.postProcessTickInterval(k.tickInterval)); k.pointRange && !A && (k.tickInterval = Math.max(k.pointRange, k.tickInterval)); e = x(l.minTickInterval, k.isDatetimeAxis && k.closestPointRange); !A && k.tickInterval < e && (k.tickInterval = e); u || r || A || (k.tickInterval = H(k.tickInterval, null, b(k.tickInterval), x(l.allowDecimals, !(.5 < k.tickInterval && 5 > k.tickInterval && 1E3 < k.max && 9999 > k.max)), !!this.tickAmount)); this.tickAmount || (k.tickInterval = k.unsquish()); this.setTickPositions()
            }, setTickPositions: function () {
                var a =
                    this.options, b, e = a.tickPositions, c = a.tickPositioner, l = a.startOnTick, d = a.endOnTick; this.tickmarkOffset = this.categories && "between" === a.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0; this.minorTickInterval = "auto" === a.minorTickInterval && this.tickInterval ? this.tickInterval / 5 : a.minorTickInterval; this.single = this.min === this.max && h(this.min) && !this.tickAmount && !1 !== a.allowDecimals; this.tickPositions = b = e && e.slice(); !b && (b = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,
                        a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), b.length > this.len && (b = [b[0], b.pop()]), this.tickPositions = b, c && (c = c.apply(this, [this.min, this.max]))) && (this.tickPositions = b = c); this.paddedTicks = b.slice(0); this.trimTicks(b, l, d); this.isLinked || (this.single && (this.min -= .5, this.max += .5), e || c || this.adjustTickAmount())
            }, trimTicks: function (a,
                b, e) { var k = a[0], c = a[a.length - 1], l = this.minPointOffset || 0; if (!this.isLinked) { if (b) this.min = k; else for (; this.min - l > a[0];) a.shift(); if (e) this.max = c; else for (; this.max + l < a[a.length - 1];) a.pop(); 0 === a.length && h(k) && a.push((c + k) / 2) } }, alignToOthers: function () { var a = {}, b, e = this.options; !1 === this.chart.options.chart.alignTicks || !1 === e.alignTicks || this.isLog || f(this.chart[this.coll], function (k) { var e = k.options, e = [k.horiz ? e.left : e.top, e.width, e.height, e.pane].join(); k.series.length && (a[e] ? b = !0 : a[e] = 1) }); return b },
            getTickAmount: function () { var a = this.options, b = a.tickAmount, e = a.tickPixelInterval; !h(a.tickInterval) && this.len < e && !this.isRadial && !this.isLog && a.startOnTick && a.endOnTick && (b = 2); !b && this.alignToOthers() && (b = Math.ceil(this.len / e) + 1); 4 > b && (this.finalTickAmt = b, b = 5); this.tickAmount = b }, adjustTickAmount: function () {
                var a = this.tickInterval, b = this.tickPositions, e = this.tickAmount, c = this.finalTickAmt, l = b && b.length; if (l < e) {
                    for (; b.length < e;) b.push(d(b[b.length - 1] + a)); this.transA *= (l - 1) / (e - 1); this.max = b[b.length -
                        1]
                } else l > e && (this.tickInterval *= 2, this.setTickPositions()); if (h(c)) { for (a = e = b.length; a--;) (3 === c && 1 === a % 2 || 2 >= c && 0 < a && a < e - 1) && b.splice(a, 1); this.finalTickAmt = void 0 }
            }, setScale: function () {
                var a, b; this.oldMin = this.min; this.oldMax = this.max; this.oldAxisLength = this.len; this.setAxisSize(); b = this.len !== this.oldAxisLength; f(this.series, function (b) { if (b.isDirtyData || b.isDirty || b.xAxis.isDirty) a = !0 }); b || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ?
                    (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = b || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks()
            }, setExtremes: function (a, b, e, l, d) { var k = this, r = k.chart; e = x(e, !0); f(k.series, function (a) { delete a.kdTree }); d = c(d, { min: a, max: b }); E(k, "setExtremes", d, function () { k.userMin = a; k.userMax = b; k.eventArgs = d; e && r.redraw(l) }) }, zoom: function (a,
                b) { var e = this.dataMin, k = this.dataMax, c = this.options, l = Math.min(e, x(c.min, e)), c = Math.max(k, x(c.max, k)); if (a !== this.min || b !== this.max) this.allowZoomOutside || (h(e) && (a < l && (a = l), a > c && (a = c)), h(k) && (b < l && (b = l), b > c && (b = c))), this.displayBtn = void 0 !== a || void 0 !== b, this.setExtremes(a, b, !1, void 0, { trigger: "zoom" }); return !0 }, setAxisSize: function () {
                    var a = this.chart, b = this.options, e = b.offsets || [0, 0, 0, 0], c = this.horiz, l = x(b.width, a.plotWidth - e[3] + e[1]), d = x(b.height, a.plotHeight - e[0] + e[2]), f = x(b.top, a.plotTop + e[0]),
                        b = x(b.left, a.plotLeft + e[3]), e = /%$/; e.test(d) && (d = Math.round(parseFloat(d) / 100 * a.plotHeight)); e.test(f) && (f = Math.round(parseFloat(f) / 100 * a.plotHeight + a.plotTop)); this.left = b; this.top = f; this.width = l; this.height = d; this.bottom = a.chartHeight - d - f; this.right = a.chartWidth - l - b; this.len = Math.max(c ? l : d, 0); this.pos = c ? b : f
                }, getExtremes: function () { var a = this.isLog, b = this.lin2log; return { min: a ? d(b(this.min)) : this.min, max: a ? d(b(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax } },
            getThreshold: function (a) { var b = this.isLog, e = this.lin2log, k = b ? e(this.min) : this.min, b = b ? e(this.max) : this.max; null === a ? a = k : k > a ? a = k : b < a && (a = b); return this.translate(a, 0, 1, 0, 1) }, autoLabelAlign: function (a) { a = (x(a, 0) - 90 * this.side + 720) % 360; return 15 < a && 165 > a ? "right" : 195 < a && 345 > a ? "left" : "center" }, tickSize: function (a) { var b = this.options, e = b[a + "Length"], k = x(b[a + "Width"], "tick" === a && this.isXAxis ? 1 : 0); if (k && e) return "inside" === b[a + "Position"] && (e = -e), [e, k] }, labelMetrics: function () {
                return this.chart.renderer.fontMetrics(this.options.labels.style &&
                    this.options.labels.style.fontSize, this.ticks[0] && this.ticks[0].label)
            }, unsquish: function () {
                var a = this.options.labels, b = this.horiz, e = this.tickInterval, c = e, l = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / e), d, r = a.rotation, p = this.labelMetrics(), u, t = Number.MAX_VALUE, g, z = function (a) { a /= l || 1; a = 1 < a ? Math.ceil(a) : 1; return a * e }; b ? (g = !a.staggerLines && !a.step && (h(r) ? [r] : l < x(a.autoRotationLimit, 80) && a.autoRotation)) && f(g, function (a) {
                    var b; if (a === r || a && -90 <= a && 90 >= a) u = z(Math.abs(p.h / Math.sin(n * a))), b = u +
                        Math.abs(a / 360), b < t && (t = b, d = a, c = u)
                }) : a.step || (c = z(p.h)); this.autoRotation = g; this.labelRotation = x(d, r); return c
            }, getSlotWidth: function () { var a = this.chart, b = this.horiz, e = this.options.labels, c = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), l = a.margin[3]; return b && 2 > (e.step || 0) && !e.rotation && (this.staggerLines || 1) * this.len / c || !b && (l && l - a.spacing[3] || .33 * a.chartWidth) }, renderUnsquish: function () {
                var a = this.chart, b = a.renderer, e = this.tickPositions, c = this.ticks, l = this.options.labels, d = this.horiz,
                    r = this.getSlotWidth(), p = Math.max(1, Math.round(r - 2 * (l.padding || 5))), u = {}, g = this.labelMetrics(), z = l.style && l.style.textOverflow, m, h = 0, x, v; t(l.rotation) || (u.rotation = l.rotation || 0); f(e, function (a) { (a = c[a]) && a.labelLength > h && (h = a.labelLength) }); this.maxLabelLength = h; if (this.autoRotation) h > p && h > g.h ? u.rotation = this.labelRotation : this.labelRotation = 0; else if (r && (m = { width: p + "px" }, !z)) for (m.textOverflow = "clip", x = e.length; !d && x--;) if (v = e[x], p = c[v].label) p.styles && "ellipsis" === p.styles.textOverflow ? p.css({ textOverflow: "clip" }) :
                        c[v].labelLength > r && p.css({ width: r + "px" }), p.getBBox().height > this.len / e.length - (g.h - g.f) && (p.specCss = { textOverflow: "ellipsis" }); u.rotation && (m = { width: (h > .5 * a.chartHeight ? .33 * a.chartHeight : a.chartHeight) + "px" }, z || (m.textOverflow = "ellipsis")); if (this.labelAlign = l.align || this.autoLabelAlign(this.labelRotation)) u.align = this.labelAlign; f(e, function (a) { var b = (a = c[a]) && a.label; b && (b.attr(u), m && b.css(A(m, b.specCss)), delete b.specCss, a.rotation = u.rotation) }); this.tickRotCorr = b.rotCorr(g.b, this.labelRotation ||
                            0, 0 !== this.side)
            }, hasData: function () { return this.hasVisibleSeries || h(this.min) && h(this.max) && !!this.tickPositions }, addTitle: function (a) {
                var b = this.chart.renderer, e = this.horiz, c = this.opposite, k = this.options.title, l; this.axisTitle || ((l = k.textAlign) || (l = (e ? { low: "left", middle: "center", high: "right" } : { low: c ? "right" : "left", middle: "center", high: c ? "left" : "right" })[k.align]), this.axisTitle = b.text(k.text, 0, 0, k.useHTML).attr({ zIndex: 7, rotation: k.rotation || 0, align: l }).addClass("highcharts-axis-title").add(this.axisGroup),
                    this.axisTitle.isNew = !0); this.axisTitle[a ? "show" : "hide"](!0)
            }, generateTick: function (a) { var b = this.ticks; b[a] ? b[a].addLabel() : b[a] = new G(this, a) }, getOffset: function () {
                var a = this, b = a.chart, e = b.renderer, c = a.options, l = a.tickPositions, d = a.ticks, r = a.horiz, p = a.side, u = b.inverted ? [1, 0, 3, 2][p] : p, g, t, z = 0, m, A = 0, v = c.title, n = c.labels, G = 0, H = b.axisOffset, b = b.clipOffset, E = [-1, 1, 1, -1][p], I, q = c.className, N = a.axisParent, w = this.tickSize("tick"); g = a.hasData(); a.showAxis = t = g || x(c.showEmpty, !0); a.staggerLines = a.horiz && n.staggerLines;
                a.axisGroup || (a.gridGroup = e.g("grid").attr({ zIndex: c.gridZIndex || 1 }).addClass("highcharts-" + this.coll.toLowerCase() + "-grid " + (q || "")).add(N), a.axisGroup = e.g("axis").attr({ zIndex: c.zIndex || 2 }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (q || "")).add(N), a.labelGroup = e.g("axis-labels").attr({ zIndex: n.zIndex || 7 }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels " + (q || "")).add(N)); if (g || a.isLinked) f(l, function (b, e) { a.generateTick(b, e) }), a.renderUnsquish(), !1 === n.reserveSpace || 0 !== p && 2 !== p &&
                    { 1: "left", 3: "right" }[p] !== a.labelAlign && "center" !== a.labelAlign || f(l, function (a) { G = Math.max(d[a].getLabelSize(), G) }), a.staggerLines && (G *= a.staggerLines, a.labelOffset = G * (a.opposite ? -1 : 1)); else for (I in d) d[I].destroy(), delete d[I]; v && v.text && !1 !== v.enabled && (a.addTitle(t), t && (z = a.axisTitle.getBBox()[r ? "height" : "width"], m = v.offset, A = h(m) ? 0 : x(v.margin, r ? 5 : 10))); a.renderLine(); a.offset = E * x(c.offset, H[p]); a.tickRotCorr = a.tickRotCorr || { x: 0, y: 0 }; e = 0 === p ? -a.labelMetrics().h : 2 === p ? a.tickRotCorr.y : 0; A = Math.abs(G) +
                        A; G && (A = A - e + E * (r ? x(n.y, a.tickRotCorr.y + 8 * E) : n.x)); a.axisTitleMargin = x(m, A); H[p] = Math.max(H[p], a.axisTitleMargin + z + E * a.offset, A, g && l.length && w ? w[0] + E * a.offset : 0); c = c.offset ? 0 : 2 * Math.floor(a.axisLine.strokeWidth() / 2); b[u] = Math.max(b[u], c)
            }, getLinePath: function (a) {
                var b = this.chart, e = this.opposite, c = this.offset, l = this.horiz, k = this.left + (e ? this.width : 0) + c, c = b.chartHeight - this.bottom - (e ? this.height : 0) + c; e && (a *= -1); return b.renderer.crispLine(["M", l ? this.left : k, l ? c : this.top, "L", l ? b.chartWidth - this.right :
                    k, l ? c : b.chartHeight - this.bottom], a)
            }, renderLine: function () { this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup)) }, getTitlePosition: function () {
                var a = this.horiz, b = this.left, e = this.top, c = this.len, l = this.options.title, d = a ? b : e, f = this.opposite, r = this.offset, p = l.x || 0, u = l.y || 0, g = this.chart.renderer.fontMetrics(l.style && l.style.fontSize, this.axisTitle).f, c = { low: d + (a ? 0 : c), middle: d + c / 2, high: d + (a ? c : 0) }[l.align], b = (a ? e + this.height : b) + (a ? 1 : -1) * (f ? -1 : 1) * this.axisTitleMargin +
                    (2 === this.side ? g : 0); return { x: a ? c + p : b + (f ? this.width : 0) + r + p, y: a ? b + u - (f ? this.height : 0) + r : c + u }
            }, renderMinorTick: function (a) { var b = this.chart.hasRendered && I(this.oldMin), e = this.minorTicks; e[a] || (e[a] = new G(this, a, "minor")); b && e[a].isNew && e[a].render(null, !0); e[a].render(null, !1, 1) }, renderTick: function (a, b) { var e = this.isLinked, c = this.ticks, l = this.chart.hasRendered && I(this.oldMin); if (!e || a >= this.min && a <= this.max) c[a] || (c[a] = new G(this, a)), l && c[a].isNew && c[a].render(b, !0, .1), c[a].render(b) }, render: function () {
                var a =
                    this, b = a.chart, e = a.options, c = a.isLog, d = a.lin2log, r = a.isLinked, p = a.tickPositions, u = a.axisTitle, g = a.ticks, t = a.minorTicks, z = a.alternateBands, m = e.stackLabels, h = e.alternateGridColor, A = a.tickmarkOffset, x = a.axisLine, v = a.showAxis, n = w(b.renderer.globalAnimation), H, E; a.labelEdge.length = 0; a.overlap = !1; f([g, t, z], function (a) { for (var b in a) a[b].isActive = !1 }); if (a.hasData() || r) a.minorTickInterval && !a.categories && f(a.getMinorTickPositions(), function (b) { a.renderMinorTick(b) }), p.length && (f(p, function (b, e) {
                        a.renderTick(b,
                            e)
                    }), A && (0 === a.min || a.single) && (g[-1] || (g[-1] = new G(a, -1, null, !0)), g[-1].render(-1))), h && f(p, function (e, k) { E = void 0 !== p[k + 1] ? p[k + 1] + A : a.max - A; 0 === k % 2 && e < a.max && E <= a.max + (b.polar ? -A : A) && (z[e] || (z[e] = new l(a)), H = e + A, z[e].options = { from: c ? d(H) : H, to: c ? d(E) : E, color: h }, z[e].render(), z[e].isActive = !0) }), a._addedPlotLB || (f((e.plotLines || []).concat(e.plotBands || []), function (b) { a.addPlotBandOrLine(b) }), a._addedPlotLB = !0); f([g, t, z], function (a) {
                        var e, c, l = [], k = n.duration; for (e in a) a[e].isActive || (a[e].render(e,
                            !1, 0), a[e].isActive = !1, l.push(e)); N(function () { for (c = l.length; c--;) a[l[c]] && !a[l[c]].isActive && (a[l[c]].destroy(), delete a[l[c]]) }, a !== z && b.hasRendered && k ? k : 0)
                    }); x && (x[x.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(x.strokeWidth()) }), x.isPlaced = !0, x[v ? "show" : "hide"](!0)); u && v && (u[u.isNew ? "attr" : "animate"](a.getTitlePosition()), u.isNew = !1); m && m.enabled && a.renderStackTotals(); a.isDirty = !1
            }, redraw: function () {
                this.visible && (this.render(), f(this.plotLinesAndBands, function (a) { a.render() })); f(this.series,
                    function (a) { a.isDirty = !0 })
            }, keepProps: "extKey hcEvents names series userMax userMin".split(" "), destroy: function (a) { var b = this, e = b.stacks, c, l = b.plotLinesAndBands, k; a || z(b); for (c in e) m(e[c]), e[c] = null; f([b.ticks, b.minorTicks, b.alternateBands], function (a) { m(a) }); if (l) for (a = l.length; a--;) l[a].destroy(); f("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "), function (a) { b[a] && (b[a] = b[a].destroy()) }); for (k in b) b.hasOwnProperty(k) && -1 === r(k, b.keepProps) && delete b[k] }, drawCrosshair: function (a,
                b) {
                var e, c = this.crosshair, l = x(c.snap, !0), k, d = this.cross; a || (a = this.cross && this.cross.e); this.crosshair && !1 !== (h(b) || !l) ? (l ? h(b) && (k = this.isXAxis ? b.plotX : this.len - b.plotY) : k = a && (this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos), h(k) && (e = this.getPlotLinePath(b && (this.isXAxis ? b.x : x(b.stackY, b.y)), null, null, null, k) || null), h(e) ? (b = this.categories && !this.isRadial, d || (this.cross = d = this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (b ? "category " : "thin ") + c.className).attr({
                    zIndex: x(c.zIndex,
                        2)
                }).add()), d.show().attr({ d: e }), b && !c.width && d.attr({ "stroke-width": this.transA }), this.cross.e = a) : this.hideCrosshair()) : this.hideCrosshair()
            }, hideCrosshair: function () { this.cross && this.cross.hide() }
        }; c(a.Axis.prototype, q)
    })(J); (function (a) {
        var B = a.Axis, w = a.Date, D = a.dateFormat, F = a.defaultOptions, q = a.defined, d = a.each, g = a.extend, h = a.getMagnitude, n = a.getTZOffset, m = a.normalizeTickInterval, f = a.pick, c = a.timeUnits; B.prototype.getTimeTicks = function (a, m, b, e) {
            var r = [], p = {}, h = F.global.useUTC, t, A = new w(m - Math.abs(n(m))),
                v = w.hcMakeTime, x = a.unitRange, l = a.count, z; if (q(m)) {
                    A[w.hcSetMilliseconds](x >= c.second ? 0 : l * Math.floor(A.getMilliseconds() / l)); if (x >= c.second) A[w.hcSetSeconds](x >= c.minute ? 0 : l * Math.floor(A.getSeconds() / l)); if (x >= c.minute) A[w.hcSetMinutes](x >= c.hour ? 0 : l * Math.floor(A[w.hcGetMinutes]() / l)); if (x >= c.hour) A[w.hcSetHours](x >= c.day ? 0 : l * Math.floor(A[w.hcGetHours]() / l)); if (x >= c.day) A[w.hcSetDate](x >= c.month ? 1 : l * Math.floor(A[w.hcGetDate]() / l)); x >= c.month && (A[w.hcSetMonth](x >= c.year ? 0 : l * Math.floor(A[w.hcGetMonth]() /
                        l)), t = A[w.hcGetFullYear]()); if (x >= c.year) A[w.hcSetFullYear](t - t % l); if (x === c.week) A[w.hcSetDate](A[w.hcGetDate]() - A[w.hcGetDay]() + f(e, 1)); t = A[w.hcGetFullYear](); e = A[w.hcGetMonth](); var u = A[w.hcGetDate](), E = A[w.hcGetHours](); if (w.hcTimezoneOffset || w.hcGetTimezoneOffset) z = (!h || !!w.hcGetTimezoneOffset) && (b - m > 4 * c.month || n(m) !== n(b)), A = A.getTime(), A = new w(A + n(A)); h = A.getTime(); for (m = 1; h < b;) r.push(h), h = x === c.year ? v(t + m * l, 0) : x === c.month ? v(t, e + m * l) : !z || x !== c.day && x !== c.week ? z && x === c.hour ? v(t, e, u, E + m * l) : h +
                            x * l : v(t, e, u + m * l * (x === c.day ? 1 : 7)), m++; r.push(h); x <= c.hour && 1E4 > r.length && d(r, function (a) { 0 === a % 18E5 && "000000000" === D("%H%M%S%L", a) && (p[a] = "day") })
                } r.info = g(a, { higherRanks: p, totalRange: x * l }); return r
        }; B.prototype.normalizeTimeTickInterval = function (a, d) {
            var b = d || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]]; d = b[b.length - 1]; var e = c[d[0]], f = d[1], p; for (p =
                0; p < b.length && !(d = b[p], e = c[d[0]], f = d[1], b[p + 1] && a <= (e * f[f.length - 1] + c[b[p + 1][0]]) / 2); p++); e === c.year && a < 5 * e && (f = [1, 2, 5]); a = m(a / e, f, "year" === d[0] ? Math.max(h(a / e), 1) : 1); return { unitRange: e, count: a, unitName: d[0] }
        }
    })(J); (function (a) {
        var B = a.Axis, w = a.getMagnitude, D = a.map, F = a.normalizeTickInterval, q = a.pick; B.prototype.getLogTickPositions = function (a, g, h, n) {
            var d = this.options, f = this.len, c = this.lin2log, E = this.log2lin, v = []; n || (this._minorAutoInterval = null); if (.5 <= a) a = Math.round(a), v = this.getLinearTickPositions(a,
                g, h); else if (.08 <= a) for (var f = Math.floor(g), b, e, r, p, I, d = .3 < a ? [1, 2, 4] : .15 < a ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; f < h + 1 && !I; f++) for (e = d.length, b = 0; b < e && !I; b++) r = E(c(f) * d[b]), r > g && (!n || p <= h) && void 0 !== p && v.push(p), p > h && (I = !0), p = r; else g = c(g), h = c(h), a = d[n ? "minorTickInterval" : "tickInterval"], a = q("auto" === a ? null : a, this._minorAutoInterval, d.tickPixelInterval / (n ? 5 : 1) * (h - g) / ((n ? f / this.tickPositions.length : f) || 1)), a = F(a, null, w(a)), v = D(this.getLinearTickPositions(a, g, h), E), n || (this._minorAutoInterval = a / 5); n || (this.tickInterval =
                    a); return v
        }; B.prototype.log2lin = function (a) { return Math.log(a) / Math.LN10 }; B.prototype.lin2log = function (a) { return Math.pow(10, a) }
    })(J); (function (a) {
        var B = a.dateFormat, w = a.each, D = a.extend, F = a.format, q = a.isNumber, d = a.map, g = a.merge, h = a.pick, n = a.splat, m = a.syncTimeout, f = a.timeUnits; a.Tooltip = function () { this.init.apply(this, arguments) }; a.Tooltip.prototype = {
            init: function (a, d) {
                this.chart = a; this.options = d; this.crosshairs = []; this.now = { x: 0, y: 0 }; this.isHidden = !0; this.split = d.split && !a.inverted; this.shared = d.shared ||
                    this.split
            }, cleanSplit: function (a) { w(this.chart.series, function (c) { var d = c && c.tt; d && (!d.isActive || a ? c.tt = d.destroy() : d.isActive = !1) }) }, applyFilter: function () {
                var a = this.chart; a.renderer.definition({
                    tagName: "filter", id: "drop-shadow-" + a.index, opacity: .5, children: [{ tagName: "feGaussianBlur", in: "SourceAlpha", stdDeviation: 1 }, { tagName: "feOffset", dx: 1, dy: 1 }, { tagName: "feComponentTransfer", children: [{ tagName: "feFuncA", type: "linear", slope: .3 }] }, {
                        tagName: "feMerge", children: [{ tagName: "feMergeNode" }, {
                            tagName: "feMergeNode",
                            in: "SourceGraphic"
                        }]
                    }]
                }); a.renderer.definition({ tagName: "style", textContent: ".highcharts-tooltip-" + a.index + "{filter:url(#drop-shadow-" + a.index + ")}" })
            }, getLabel: function () { var a = this.chart.renderer, d = this.options; this.label || (this.label = this.split ? a.g("tooltip") : a.label("", 0, 0, d.shape || "callout", null, null, d.useHTML, null, "tooltip").attr({ padding: d.padding, r: d.borderRadius }), this.applyFilter(), this.label.addClass("highcharts-tooltip-" + this.chart.index), this.label.attr({ zIndex: 8 }).add()); return this.label },
            update: function (a) { this.destroy(); this.init(this.chart, g(!0, this.options, a)) }, destroy: function () { this.label && (this.label = this.label.destroy()); this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy()); clearTimeout(this.hideTimer); clearTimeout(this.tooltipTimeout) }, move: function (a, d, f, b) {
                var e = this, c = e.now, p = !1 !== e.options.animation && !e.isHidden && (1 < Math.abs(a - c.x) || 1 < Math.abs(d - c.y)), g = e.followPointer || 1 < e.len; D(c, {
                    x: p ? (2 * c.x + a) / 3 : a, y: p ? (c.y + d) / 2 : d, anchorX: g ? void 0 : p ? (2 * c.anchorX +
                        f) / 3 : f, anchorY: g ? void 0 : p ? (c.anchorY + b) / 2 : b
                }); e.getLabel().attr(c); p && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () { e && e.move(a, d, f, b) }, 32))
            }, hide: function (a) { var c = this; clearTimeout(this.hideTimer); a = h(a, this.options.hideDelay, 500); this.isHidden || (this.hideTimer = m(function () { c.getLabel()[a ? "fadeOut" : "hide"](); c.isHidden = !0 }, a)) }, getAnchor: function (a, f) {
                var c, b = this.chart, e = b.inverted, r = b.plotTop, p = b.plotLeft, g = 0, t = 0, m, h; a = n(a); c = a[0].tooltipPos; this.followPointer &&
                    f && (void 0 === f.chartX && (f = b.pointer.normalize(f)), c = [f.chartX - b.plotLeft, f.chartY - r]); c || (w(a, function (a) { m = a.series.yAxis; h = a.series.xAxis; g += a.plotX + (!e && h ? h.left - p : 0); t += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!e && m ? m.top - r : 0) }), g /= a.length, t /= a.length, c = [e ? b.plotWidth - t : g, this.shared && !e && 1 < a.length && f ? f.chartY - r : e ? b.plotHeight - g : t]); return d(c, Math.round)
            }, getPosition: function (a, d, f) {
                var b = this.chart, e = this.distance, c = {}, p = f.h || 0, g, t = ["y", b.chartHeight, d, f.plotY + b.plotTop, b.plotTop, b.plotTop +
                    b.plotHeight], m = ["x", b.chartWidth, a, f.plotX + b.plotLeft, b.plotLeft, b.plotLeft + b.plotWidth], n = !this.followPointer && h(f.ttBelow, !b.inverted === !!f.negative), x = function (a, b, l, d, f, r) { var k = l < d - e, g = d + e + l < b, u = d - e - l; d += e; if (n && g) c[a] = d; else if (!n && k) c[a] = u; else if (k) c[a] = Math.min(r - l, 0 > u - p ? u : u - p); else if (g) c[a] = Math.max(f, d + p + l > b ? d : d + p); else return !1 }, l = function (a, b, l, d) { var k; d < e || d > b - e ? k = !1 : c[a] = d < l / 2 ? 1 : d > b - l / 2 ? b - l - 2 : d - l / 2; return k }, z = function (a) { var b = t; t = m; m = b; g = a }, u = function () {
                        !1 !== x.apply(0, t) ? !1 !==
                            l.apply(0, m) || g || (z(!0), u()) : g ? c.x = c.y = 0 : (z(!0), u())
                    }; (b.inverted || 1 < this.len) && z(); u(); return c
            }, defaultFormatter: function (a) { var c = this.points || n(this), d; d = [a.tooltipFooterHeaderFormatter(c[0])]; d = d.concat(a.bodyFormatter(c)); d.push(a.tooltipFooterHeaderFormatter(c[0], !0)); return d }, refresh: function (a, d) {
                var c, b, e = a, f, p = {}, g = []; c = this.options.formatter || this.defaultFormatter; var p = this.shared, t; clearTimeout(this.hideTimer); this.followPointer = n(e)[0].series.tooltipOptions.followPointer; f = this.getAnchor(e,
                    d); d = f[0]; b = f[1]; !p || e.series && e.series.noSharedTooltip ? p = e.getLabelConfig() : (w(e, function (a) { a.setState("hover"); g.push(a.getLabelConfig()) }), p = { x: e[0].category, y: e[0].y }, p.points = g, e = e[0]); this.len = g.length; p = c.call(p, this); t = e.series; this.distance = h(t.tooltipOptions.distance, 16); !1 === p ? this.hide() : (c = this.getLabel(), this.isHidden && c.attr({ opacity: 1 }).show(), this.split ? this.renderSplit(p, a) : (c.attr({ text: p && p.join ? p.join("") : p }), c.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" +
                        h(e.colorIndex, t.colorIndex)), this.updatePosition({ plotX: d, plotY: b, negative: e.negative, ttBelow: e.ttBelow, h: f[2] || 0 })), this.isHidden = !1)
            }, renderSplit: function (c, d) {
                var f = this, b = [], e = this.chart, r = e.renderer, p = !0, g = this.options, t, m = this.getLabel(); w(c.slice(0, d.length + 1), function (a, c) {
                    c = d[c - 1] || { isHeader: !0, plotX: d[0].plotX }; var l = c.series || f, z = l.tt, u = "highcharts-color-" + h(c.colorIndex, (c.series || {}).colorIndex, "none"); z || (l.tt = z = r.label(null, null, null, "callout").addClass("highcharts-tooltip-box " + u).attr({
                        padding: g.padding,
                        r: g.borderRadius
                    }).add(m)); z.isActive = !0; z.attr({ text: a }); a = z.getBBox(); u = a.width + z.strokeWidth(); c.isHeader ? (t = a.height, u = Math.max(0, Math.min(c.plotX + e.plotLeft - u / 2, e.chartWidth - u))) : u = c.plotX + e.plotLeft - h(g.distance, 16) - u; 0 > u && (p = !1); a = (c.series && c.series.yAxis && c.series.yAxis.pos) + (c.plotY || 0); a -= e.plotTop; b.push({ target: c.isHeader ? e.plotHeight + t : a, rank: c.isHeader ? 1 : 0, size: l.tt.getBBox().height + 1, point: c, x: u, tt: z })
                }); this.cleanSplit(); a.distribute(b, e.plotHeight + t); w(b, function (a) {
                    var b = a.point,
                        c = b.series; a.tt.attr({ visibility: void 0 === a.pos ? "hidden" : "inherit", x: p || b.isHeader ? a.x : b.plotX + e.plotLeft + h(g.distance, 16), y: a.pos + e.plotTop, anchorX: b.isHeader ? b.plotX + e.plotLeft : b.plotX + c.xAxis.pos, anchorY: b.isHeader ? a.pos + e.plotTop - 15 : b.plotY + c.yAxis.pos })
                })
            }, updatePosition: function (a) { var c = this.chart, d = this.getLabel(), d = (this.options.positioner || this.getPosition).call(this, d.width, d.height, a); this.move(Math.round(d.x), Math.round(d.y || 0), a.plotX + c.plotLeft, a.plotY + c.plotTop) }, getDateFormat: function (a,
                d, g, b) { var e = B("%m-%d %H:%M:%S.%L", d), c, p, m = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 }, t = "millisecond"; for (p in f) { if (a === f.week && +B("%w", d) === g && "00:00:00.000" === e.substr(6)) { p = "week"; break } if (f[p] > a) { p = t; break } if (m[p] && e.substr(m[p]) !== "01-01 00:00:00.000".substr(m[p])) break; "week" !== p && (t = p) } p && (c = b[p]); return c }, getXDateFormat: function (a, d, f) { d = d.dateTimeLabelFormats; var b = f && f.closestPointRange; return (b ? this.getDateFormat(b, a.x, f.options.startOfWeek, d) : d.day) || d.year }, tooltipFooterHeaderFormatter: function (a,
                    d) { var c = d ? "footer" : "header"; d = a.series; var b = d.tooltipOptions, e = b.xDateFormat, f = d.xAxis, p = f && "datetime" === f.options.type && q(a.key), c = b[c + "Format"]; p && !e && (e = this.getXDateFormat(a, b, f)); p && e && (c = c.replace("{point.key}", "{point.key:" + e + "}")); return F(c, { point: a, series: d }) }, bodyFormatter: function (a) { return d(a, function (a) { var c = a.series.tooltipOptions; return (c.pointFormatter || a.point.tooltipFormatter).call(a.point, c.pointFormat) }) }
        }
    })(J); (function (a) {
        var B = a.addEvent, w = a.attr, D = a.charts, F = a.css, q = a.defined,
            d = a.doc, g = a.each, h = a.extend, n = a.fireEvent, m = a.offset, f = a.pick, c = a.removeEvent, E = a.splat, v = a.Tooltip, b = a.win; a.Pointer = function (a, b) { this.init(a, b) }; a.Pointer.prototype = {
                init: function (a, b) { this.options = b; this.chart = a; this.runChartClick = b.chart.events && !!b.chart.events.click; this.pinchDown = []; this.lastValidTouch = {}; v && b.tooltip.enabled && (a.tooltip = new v(a, b.tooltip), this.followTouchMove = f(b.tooltip.followTouchMove, !0)); this.setDOMEvents() }, zoomOption: function (a) {
                    var b = this.chart, e = b.options.chart, c =
                        e.zoomType || "", b = b.inverted; /touch/.test(a.type) && (c = f(e.pinchType, c)); this.zoomX = a = /x/.test(c); this.zoomY = c = /y/.test(c); this.zoomHor = a && !b || c && b; this.zoomVert = c && !b || a && b; this.hasZoom = a || c
                }, normalize: function (a, c) {
                    var e, d; a = a || b.event; a.target || (a.target = a.srcElement); d = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] : a; c || (this.chartPosition = c = m(this.chart.container)); void 0 === d.pageX ? (e = Math.max(a.x, a.clientX - c.left), c = a.y) : (e = d.pageX - c.left, c = d.pageY - c.top); return h(a, {
                        chartX: Math.round(e),
                        chartY: Math.round(c)
                    })
                }, getCoordinates: function (a) { var b = { xAxis: [], yAxis: [] }; g(this.chart.axes, function (e) { b[e.isXAxis ? "xAxis" : "yAxis"].push({ axis: e, value: e.toValue(a[e.horiz ? "chartX" : "chartY"]) }) }); return b }, getKDPoints: function (a, b, c) {
                    var e = [], d, p, r; g(a, function (a) { d = a.noSharedTooltip && b; p = !b && a.directTouch; a.visible && !d && !p && f(a.options.enableMouseTracking, !0) && (r = a.searchPoint(c, !d && 1 === a.kdDimensions)) && r.series && e.push(r) }); e.sort(function (a, e) {
                        var c = a.distX - e.distX, l = a.dist - e.dist, d = (e.series.group &&
                            e.series.group.zIndex) - (a.series.group && a.series.group.zIndex); return 0 !== c && b ? c : 0 !== l ? l : 0 !== d ? d : a.series.index > e.series.index ? -1 : 1
                    }); if (b) for (a = e.length; a--;) (e[a].x !== e[0].x || e[a].series.noSharedTooltip) && e.splice(a, 1); return e
                }, getPointFromEvent: function (a) { a = a.target; for (var b; a && !b;) b = a.point, a = a.parentNode; return b }, getHoverData: function (a, b, c, d, t, m) {
                    var e = a; a = b; var p; if (d) t ? (p = [], g(c, function (a) {
                        var b = a.noSharedTooltip && t, c = !t && a.directTouch; a.visible && !b && !c && f(a.options.enableMouseTracking,
                            !0) && (a = a.searchKDTree({ clientX: e.clientX, plotY: e.plotY }, !b && 1 === a.kdDimensions)) && a.series && p.push(a)
                    }), 0 === p.length && (p = [e])) : p = [e]; else { if (a && !a.options.stickyTracking) p = this.getKDPoints([a], t, m); else { if (!t) if (a) a.options.stickyTracking || (c = [a]); else for (d = 0; d < c.length; d++) if (c[d].directTouch || !c[d].options.stickyTracking) c = []; p = this.getKDPoints(c, t, m) } a = (e = p[0]) && e.series } p.sort(function (a, b) { return a.series.index - b.series.index }); return { hoverPoint: e, hoverSeries: a, hoverPoints: p }
                }, runPointActions: function (b,
                    c) {
                    var e = this.chart, f = e.tooltip, r = f ? f.shared : !1, m = c || e.hoverPoint, h = m && m.series || e.hoverSeries; c = this.getHoverData(m, h, e.series, !!c || h && h.directTouch, r, b); var n, l, m = c.hoverPoint; n = (h = c.hoverSeries) && h.tooltipOptions.followPointer; l = (r = r && m && !m.series.noSharedTooltip) ? c.hoverPoints : [m]; if (m && (m !== e.hoverPoint || f && f.isHidden)) {
                        g(e.hoverPoints || [], function (b) { -1 === a.inArray(b, l) && b.setState() }); g(l || [], function (a) { a.setState("hover") }); if (e.hoverSeries !== h) h.onMouseOver(); h && !h.directTouch && (e.hoverPoint &&
                            e.hoverPoint.firePointEvent("mouseOut"), m.firePointEvent("mouseOver")); e.hoverPoints = l; e.hoverPoint = m; f && f.refresh(r ? l : m, b)
                    } else n && f && !f.isHidden && (m = f.getAnchor([{}], b), f.updatePosition({ plotX: m[0], plotY: m[1] })); this.unDocMouseMove || (this.unDocMouseMove = B(d, "mousemove", function (b) { var e = D[a.hoverChartIndex]; if (e) e.pointer.onDocumentMouseMove(b) })); g(l, function (a) { g(e.axes, function (e) { (!a || a.series && a.series[e.coll] === e) && e.drawCrosshair(b, a) }) })
                }, reset: function (a, b) {
                    var e = this.chart, c = e.hoverSeries,
                        d = e.hoverPoint, f = e.hoverPoints, r = e.tooltip, m = r && r.shared ? f : d; a && m && g(E(m), function (b) { b.series.isCartesian && void 0 === b.plotX && (a = !1) }); if (a) r && m && (r.refresh(m), d && (d.setState(d.state, !0), g(e.axes, function (a) { a.crosshair && a.drawCrosshair(null, d) }))); else { if (d) d.onMouseOut(); f && g(f, function (a) { a.setState() }); if (c) c.onMouseOut(); r && r.hide(b); this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()); g(e.axes, function (a) { a.hideCrosshair() }); this.hoverX = e.hoverPoints = e.hoverPoint = null }
                }, scaleGroups: function (a,
                    b) { var e = this.chart, c; g(e.series, function (d) { c = a || d.getPlotBox(); d.xAxis && d.xAxis.zoomEnabled && d.group && (d.group.attr(c), d.markerGroup && (d.markerGroup.attr(c), d.markerGroup.clip(b ? e.clipRect : null)), d.dataLabelsGroup && d.dataLabelsGroup.attr(c)) }); e.clipRect.attr(b || e.clipBox) }, dragStart: function (a) { var b = this.chart; b.mouseIsDown = a.type; b.cancelClick = !1; b.mouseDownX = this.mouseDownX = a.chartX; b.mouseDownY = this.mouseDownY = a.chartY }, drag: function (a) {
                        var b = this.chart, e = b.options.chart, c = a.chartX, d = a.chartY,
                            f = this.zoomHor, g = this.zoomVert, m = b.plotLeft, l = b.plotTop, z = b.plotWidth, u = b.plotHeight, h, n = this.selectionMarker, k = this.mouseDownX, q = this.mouseDownY, v = e.panKey && a[e.panKey + "Key"]; n && n.touch || (c < m ? c = m : c > m + z && (c = m + z), d < l ? d = l : d > l + u && (d = l + u), this.hasDragged = Math.sqrt(Math.pow(k - c, 2) + Math.pow(q - d, 2)), 10 < this.hasDragged && (h = b.isInsidePlot(k - m, q - l), b.hasCartesianSeries && (this.zoomX || this.zoomY) && h && !v && !n && (this.selectionMarker = n = b.renderer.rect(m, l, f ? 1 : z, g ? 1 : u, 0).attr({
                                "class": "highcharts-selection-marker",
                                zIndex: 7
                            }).add()), n && f && (c -= k, n.attr({ width: Math.abs(c), x: (0 < c ? 0 : c) + k })), n && g && (c = d - q, n.attr({ height: Math.abs(c), y: (0 < c ? 0 : c) + q })), h && !n && e.panning && b.pan(a, e.panning)))
                    }, drop: function (a) {
                        var b = this, e = this.chart, c = this.hasPinched; if (this.selectionMarker) {
                            var d = { originalEvent: a, xAxis: [], yAxis: [] }, f = this.selectionMarker, m = f.attr ? f.attr("x") : f.x, x = f.attr ? f.attr("y") : f.y, l = f.attr ? f.attr("width") : f.width, z = f.attr ? f.attr("height") : f.height, u; if (this.hasDragged || c) g(e.axes, function (e) {
                                if (e.zoomEnabled && q(e.min) &&
                                    (c || b[{ xAxis: "zoomX", yAxis: "zoomY" }[e.coll]])) { var f = e.horiz, k = "touchend" === a.type ? e.minPixelPadding : 0, g = e.toValue((f ? m : x) + k), f = e.toValue((f ? m + l : x + z) - k); d[e.coll].push({ axis: e, min: Math.min(g, f), max: Math.max(g, f) }); u = !0 }
                            }), u && n(e, "selection", d, function (a) { e.zoom(h(a, c ? { animation: !1 } : null)) }); this.selectionMarker = this.selectionMarker.destroy(); c && this.scaleGroups()
                        } e && (F(e.container, { cursor: e._cursor }), e.cancelClick = 10 < this.hasDragged, e.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown =
                            [])
                    }, onContainerMouseDown: function (a) { a = this.normalize(a); this.zoomOption(a); a.preventDefault && a.preventDefault(); this.dragStart(a) }, onDocumentMouseUp: function (b) { D[a.hoverChartIndex] && D[a.hoverChartIndex].pointer.drop(b) }, onDocumentMouseMove: function (a) { var b = this.chart, e = this.chartPosition; a = this.normalize(a, e); !e || this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || this.reset() }, onContainerMouseLeave: function (b) {
                        var e = D[a.hoverChartIndex]; e && (b.relatedTarget ||
                            b.toElement) && (e.pointer.reset(), e.pointer.chartPosition = null)
                    }, onContainerMouseMove: function (b) { var e = this.chart; q(a.hoverChartIndex) && D[a.hoverChartIndex] && D[a.hoverChartIndex].mouseIsDown || (a.hoverChartIndex = e.index); b = this.normalize(b); b.returnValue = !1; "mousedown" === e.mouseIsDown && this.drag(b); !this.inClass(b.target, "highcharts-tracker") && !e.isInsidePlot(b.chartX - e.plotLeft, b.chartY - e.plotTop) || e.openMenu || this.runPointActions(b) }, inClass: function (a, b) {
                        for (var e; a;) {
                            if (e = w(a, "class")) {
                                if (-1 !==
                                    e.indexOf(b)) return !0; if (-1 !== e.indexOf("highcharts-container")) return !1
                            } a = a.parentNode
                        }
                    }, onTrackerMouseOut: function (a) { var b = this.chart.hoverSeries; a = a.relatedTarget || a.toElement; if (!(!b || !a || b.options.stickyTracking || this.inClass(a, "highcharts-tooltip") || this.inClass(a, "highcharts-series-" + b.index) && this.inClass(a, "highcharts-tracker"))) b.onMouseOut() }, onContainerClick: function (a) {
                        var b = this.chart, c = b.hoverPoint, e = b.plotLeft, d = b.plotTop; a = this.normalize(a); b.cancelClick || (c && this.inClass(a.target,
                            "highcharts-tracker") ? (n(c.series, "click", h(a, { point: c })), b.hoverPoint && c.firePointEvent("click", a)) : (h(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - e, a.chartY - d) && n(b, "click", a)))
                    }, setDOMEvents: function () {
                        var b = this, c = b.chart.container; c.onmousedown = function (a) { b.onContainerMouseDown(a) }; c.onmousemove = function (a) { b.onContainerMouseMove(a) }; c.onclick = function (a) { b.onContainerClick(a) }; B(c, "mouseleave", b.onContainerMouseLeave); 1 === a.chartCount && B(d, "mouseup", b.onDocumentMouseUp); a.hasTouch && (c.ontouchstart =
                            function (a) { b.onContainerTouchStart(a) }, c.ontouchmove = function (a) { b.onContainerTouchMove(a) }, 1 === a.chartCount && B(d, "touchend", b.onDocumentTouchEnd))
                    }, destroy: function () { var b; c(this.chart.container, "mouseleave", this.onContainerMouseLeave); a.chartCount || (c(d, "mouseup", this.onDocumentMouseUp), c(d, "touchend", this.onDocumentTouchEnd)); clearInterval(this.tooltipTimeout); for (b in this) this[b] = null }
            }
    })(J); (function (a) {
        var B = a.charts, w = a.each, D = a.extend, F = a.map, q = a.noop, d = a.pick; D(a.Pointer.prototype, {
            pinchTranslate: function (a,
                d, n, m, f, c) { this.zoomHor && this.pinchTranslateDirection(!0, a, d, n, m, f, c); this.zoomVert && this.pinchTranslateDirection(!1, a, d, n, m, f, c) }, pinchTranslateDirection: function (a, d, n, m, f, c, q, v) {
                    var b = this.chart, e = a ? "x" : "y", g = a ? "X" : "Y", p = "chart" + g, h = a ? "width" : "height", t = b["plot" + (a ? "Left" : "Top")], A, H, x = v || 1, l = b.inverted, z = b.bounds[a ? "h" : "v"], u = 1 === d.length, E = d[0][p], G = n[0][p], k = !u && d[1][p], y = !u && n[1][p], S; n = function () {
                        !u && 20 < Math.abs(E - k) && (x = v || Math.abs(G - y) / Math.abs(E - k)); H = (t - G) / x + E; A = b["plot" + (a ? "Width" : "Height")] /
                            x
                    }; n(); d = H; d < z.min ? (d = z.min, S = !0) : d + A > z.max && (d = z.max - A, S = !0); S ? (G -= .8 * (G - q[e][0]), u || (y -= .8 * (y - q[e][1])), n()) : q[e] = [G, y]; l || (c[e] = H - t, c[h] = A); c = l ? 1 / x : x; f[h] = A; f[e] = d; m[l ? a ? "scaleY" : "scaleX" : "scale" + g] = x; m["translate" + g] = c * t + (G - c * E)
                }, pinch: function (a) {
                    var g = this, n = g.chart, m = g.pinchDown, f = a.touches, c = f.length, E = g.lastValidTouch, v = g.hasZoom, b = g.selectionMarker, e = {}, r = 1 === c && (g.inClass(a.target, "highcharts-tracker") && n.runTrackerClick || g.runChartClick), p = {}; 1 < c && (g.initiated = !0); v && g.initiated && !r &&
                        a.preventDefault(); F(f, function (a) { return g.normalize(a) }); "touchstart" === a.type ? (w(f, function (a, b) { m[b] = { chartX: a.chartX, chartY: a.chartY } }), E.x = [m[0].chartX, m[1] && m[1].chartX], E.y = [m[0].chartY, m[1] && m[1].chartY], w(n.axes, function (a) { if (a.zoomEnabled) { var b = n.bounds[a.horiz ? "h" : "v"], c = a.minPixelPadding, e = a.toPixels(d(a.options.min, a.dataMin)), f = a.toPixels(d(a.options.max, a.dataMax)), l = Math.max(e, f); b.min = Math.min(a.pos, Math.min(e, f) - c); b.max = Math.max(a.pos + a.len, l + c) } }), g.res = !0) : g.followTouchMove &&
                            1 === c ? this.runPointActions(g.normalize(a)) : m.length && (b || (g.selectionMarker = b = D({ destroy: q, touch: !0 }, n.plotBox)), g.pinchTranslate(m, f, e, b, p, E), g.hasPinched = v, g.scaleGroups(e, p), g.res && (g.res = !1, this.reset(!1, 0)))
                }, touch: function (g, h) {
                    var n = this.chart, m, f; if (n.index !== a.hoverChartIndex) this.onContainerMouseLeave({ relatedTarget: !0 }); a.hoverChartIndex = n.index; 1 === g.touches.length ? (g = this.normalize(g), (f = n.isInsidePlot(g.chartX - n.plotLeft, g.chartY - n.plotTop)) && !n.openMenu ? (h && this.runPointActions(g),
                        "touchmove" === g.type && (h = this.pinchDown, m = h[0] ? 4 <= Math.sqrt(Math.pow(h[0].chartX - g.chartX, 2) + Math.pow(h[0].chartY - g.chartY, 2)) : !1), d(m, !0) && this.pinch(g)) : h && this.reset()) : 2 === g.touches.length && this.pinch(g)
                }, onContainerTouchStart: function (a) { this.zoomOption(a); this.touch(a, !0) }, onContainerTouchMove: function (a) { this.touch(a) }, onDocumentTouchEnd: function (d) { B[a.hoverChartIndex] && B[a.hoverChartIndex].pointer.drop(d) }
        })
    })(J); (function (a) {
        var B = a.addEvent, w = a.charts, D = a.css, F = a.doc, q = a.extend, d = a.noop,
            g = a.Pointer, h = a.removeEvent, n = a.win, m = a.wrap; if (n.PointerEvent || n.MSPointerEvent) {
                var f = {}, c = !!n.PointerEvent, E = function () { var a, c = []; c.item = function (a) { return this[a] }; for (a in f) f.hasOwnProperty(a) && c.push({ pageX: f[a].pageX, pageY: f[a].pageY, target: f[a].target }); return c }, v = function (b, c, f, g) { "touch" !== b.pointerType && b.pointerType !== b.MSPOINTER_TYPE_TOUCH || !w[a.hoverChartIndex] || (g(b), g = w[a.hoverChartIndex].pointer, g[c]({ type: f, target: b.currentTarget, preventDefault: d, touches: E() })) }; q(g.prototype,
                    {
                        onContainerPointerDown: function (a) { v(a, "onContainerTouchStart", "touchstart", function (a) { f[a.pointerId] = { pageX: a.pageX, pageY: a.pageY, target: a.currentTarget } }) }, onContainerPointerMove: function (a) { v(a, "onContainerTouchMove", "touchmove", function (a) { f[a.pointerId] = { pageX: a.pageX, pageY: a.pageY }; f[a.pointerId].target || (f[a.pointerId].target = a.currentTarget) }) }, onDocumentPointerUp: function (a) { v(a, "onDocumentTouchEnd", "touchend", function (a) { delete f[a.pointerId] }) }, batchMSEvents: function (a) {
                            a(this.chart.container,
                                c ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown); a(this.chart.container, c ? "pointermove" : "MSPointerMove", this.onContainerPointerMove); a(F, c ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
                        }
                    }); m(g.prototype, "init", function (a, c, d) { a.call(this, c, d); this.hasZoom && D(c.container, { "-ms-touch-action": "none", "touch-action": "none" }) }); m(g.prototype, "setDOMEvents", function (a) { a.apply(this); (this.hasZoom || this.followTouchMove) && this.batchMSEvents(B) }); m(g.prototype, "destroy", function (a) {
                        this.batchMSEvents(h);
                        a.call(this)
                    })
            }
    })(J); (function (a) {
        var B, w = a.addEvent, D = a.css, F = a.discardElement, q = a.defined, d = a.each, g = a.isFirefox, h = a.marginNames, n = a.merge, m = a.pick, f = a.setAnimation, c = a.stableSort, E = a.win, v = a.wrap; B = a.Legend = function (a, c) { this.init(a, c) }; B.prototype = {
            init: function (a, c) { this.chart = a; this.setOptions(c); c.enabled && (this.render(), w(this.chart, "endResize", function () { this.legend.positionCheckboxes() })) }, setOptions: function (a) {
                var b = m(a.padding, 8); this.options = a; this.itemMarginTop = a.itemMarginTop || 0; this.initialItemX =
                    this.padding = b; this.initialItemY = b - 5; this.itemHeight = this.maxItemWidth = 0; this.symbolWidth = m(a.symbolWidth, 16); this.pages = []
            }, update: function (a, c) { var b = this.chart; this.setOptions(n(!0, this.options, a)); this.destroy(); b.isDirtyLegend = b.isDirtyBox = !0; m(c, !0) && b.redraw() }, colorizeItem: function (a, c) { a.legendGroup[c ? "removeClass" : "addClass"]("highcharts-legend-item-hidden") }, positionItem: function (a) {
                var b = this.options, c = b.symbolPadding, b = !b.rtl, d = a._legendItemPos, f = d[0], d = d[1], g = a.checkbox; (a = a.legendGroup) &&
                    a.element && a.translate(b ? f : this.legendWidth - f - 2 * c - 4, d); g && (g.x = f, g.y = d)
            }, destroyItem: function (a) { var b = a.checkbox; d(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function (b) { a[b] && (a[b] = a[b].destroy()) }); b && F(a.checkbox) }, destroy: function () { function a(a) { this[a] && (this[a] = this[a].destroy()) } d(this.getAllItems(), function (b) { d(["legendItem", "legendGroup"], a, b) }); d("clipRect up down pager nav box title group".split(" "), a, this); this.display = null }, positionCheckboxes: function (a) {
                var b = this.group &&
                    this.group.alignAttr, c, f = this.clipHeight || this.legendHeight, g = this.titleHeight; b && (c = b.translateY, d(this.allItems, function (e) { var d = e.checkbox, p; d && (p = c + g + d.y + (a || 0) + 3, D(d, { left: b.translateX + e.checkboxOffset + d.x - 20 + "px", top: p + "px", display: p > c - 6 && p < c + f - 6 ? "" : "none" })) }))
            }, renderTitle: function () {
                var a = this.padding, c = this.options.title, d = 0; c.text && (this.title || (this.title = this.chart.renderer.label(c.text, a - 3, a - 4, null, null, null, null, null, "legend-title").attr({ zIndex: 1 }).add(this.group)), a = this.title.getBBox(),
                    d = a.height, this.offsetWidth = a.width, this.contentGroup.attr({ translateY: d })); this.titleHeight = d
            }, setText: function (b) { var c = this.options; b.legendItem.attr({ text: c.labelFormat ? a.format(c.labelFormat, b) : c.labelFormatter.call(b) }) }, renderItem: function (a) {
                var b = this.chart, c = b.renderer, d = this.options, f = "horizontal" === d.layout, g = this.symbolWidth, h = d.symbolPadding, n = this.padding, q = f ? m(d.itemDistance, 20) : 0, l = !d.rtl, z = d.width, u = d.itemMarginBottom || 0, v = this.itemMarginTop, G = this.initialItemX, k = a.legendItem, y =
                    !a.series, E = !y && a.series.drawLegendSymbol ? a.series : a, L = E.options, L = this.createCheckboxForItem && L && L.showCheckbox, w = d.useHTML; k || (a.legendGroup = c.g("legend-item").addClass("highcharts-" + E.type + "-series highcharts-color-" + a.colorIndex + (a.options.className ? " " + a.options.className : "") + (y ? " highcharts-series-" + a.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), a.legendItem = k = c.text("", l ? g + h : -h, this.baseline || 0, w).attr({ align: l ? "left" : "right", zIndex: 2 }).add(a.legendGroup), this.baseline || (this.fontMetrics =
                        c.fontMetrics(12, k), this.baseline = this.fontMetrics.f + 3 + v, k.attr("y", this.baseline)), this.symbolHeight = d.symbolHeight || this.fontMetrics.f, E.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, k, w), L && this.createCheckboxForItem(a)); this.colorizeItem(a, a.visible); this.setText(a); c = k.getBBox(); g = a.checkboxOffset = d.itemWidth || a.legendItemWidth || g + h + c.width + q + (L ? 20 : 0); this.itemHeight = h = Math.round(a.legendItemHeight || c.height); f && this.itemX - G + g > (z || b.chartWidth - 2 * n - G - d.x) && (this.itemX = G, this.itemY +=
                            v + this.lastLineHeight + u, this.lastLineHeight = 0); this.maxItemWidth = Math.max(this.maxItemWidth, g); this.lastItemY = v + this.itemY + u; this.lastLineHeight = Math.max(h, this.lastLineHeight); a._legendItemPos = [this.itemX, this.itemY]; f ? this.itemX += g : (this.itemY += v + h + u, this.lastLineHeight = h); this.offsetWidth = z || Math.max((f ? this.itemX - G - q : g) + n, this.offsetWidth)
            }, getAllItems: function () {
                var a = []; d(this.chart.series, function (b) {
                    var c = b && b.options; b && m(c.showInLegend, q(c.linkedTo) ? !1 : void 0, !0) && (a = a.concat(b.legendItems ||
                        ("point" === c.legendType ? b.data : b)))
                }); return a
            }, adjustMargins: function (a, c) { var b = this.chart, e = this.options, f = e.align.charAt(0) + e.verticalAlign.charAt(0) + e.layout.charAt(0); e.floating || d([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function (d, g) { d.test(f) && !q(a[g]) && (b[h[g]] = Math.max(b[h[g]], b.legend[(g + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][g] * e[g % 2 ? "x" : "y"] + m(e.margin, 12) + c[g])) }) }, render: function () {
                var a = this, e = a.chart, f = e.renderer, g = a.group, m, h, A, q, x = a.box, l = a.options,
                    z = a.padding; a.itemX = a.initialItemX; a.itemY = a.initialItemY; a.offsetWidth = 0; a.lastItemY = 0; g || (a.group = g = f.g("legend").attr({ zIndex: 7 }).add(), a.contentGroup = f.g().attr({ zIndex: 1 }).add(g), a.scrollGroup = f.g().add(a.contentGroup)); a.renderTitle(); m = a.getAllItems(); c(m, function (a, b) { return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0) }); l.reversed && m.reverse(); a.allItems = m; a.display = h = !!m.length; a.lastLineHeight = 0; d(m, function (b) { a.renderItem(b) }); A = (l.width || a.offsetWidth) +
                        z; q = a.lastItemY + a.lastLineHeight + a.titleHeight; q = a.handleOverflow(q); q += z; x || (a.box = x = f.rect().addClass("highcharts-legend-box").attr({ r: l.borderRadius }).add(g), x.isNew = !0); 0 < A && 0 < q && (x[x.isNew ? "attr" : "animate"](x.crisp({ x: 0, y: 0, width: A, height: q }, x.strokeWidth())), x.isNew = !1); x[h ? "show" : "hide"](); "none" === g.getStyle("display") && (A = q = 0); a.legendWidth = A; a.legendHeight = q; d(m, function (b) { a.positionItem(b) }); h && g.align(n(l, { width: A, height: q }), !0, "spacingBox"); e.isResizing || this.positionCheckboxes()
            }, handleOverflow: function (a) {
                var b =
                    this, c = this.chart, f = c.renderer, g = this.options, h = g.y, c = c.spacingBox.height + ("top" === g.verticalAlign ? -h : h) - this.padding, h = g.maxHeight, n, q = this.clipRect, x = g.navigation, l = m(x.animation, !0), z = x.arrowSize || 12, u = this.nav, v = this.pages, G = this.padding, k, y = this.allItems, E = function (a) { a ? q.attr({ height: a }) : q && (b.clipRect = q.destroy(), b.contentGroup.clip()); b.contentGroup.div && (b.contentGroup.div.style.clip = a ? "rect(" + G + "px,9999px," + (G + a) + "px,0)" : "auto") }; "horizontal" !== g.layout || "middle" === g.verticalAlign || g.floating ||
                        (c /= 2); h && (c = Math.min(c, h)); v.length = 0; a > c && !1 !== x.enabled ? (this.clipHeight = n = Math.max(c - 20 - this.titleHeight - G, 0), this.currentPage = m(this.currentPage, 1), this.fullHeight = a, d(y, function (a, b) { var c = a._legendItemPos[1]; a = Math.round(a.legendItem.getBBox().height); var e = v.length; if (!e || c - v[e - 1] > n && (k || c) !== v[e - 1]) v.push(k || c), e++; b === y.length - 1 && c + a - v[e - 1] > n && v.push(c); c !== k && (k = c) }), q || (q = b.clipRect = f.clipRect(0, G, 9999, 0), b.contentGroup.clip(q)), E(n), u || (this.nav = u = f.g().attr({ zIndex: 1 }).add(this.group),
                            this.up = f.symbol("triangle", 0, 0, z, z).on("click", function () { b.scroll(-1, l) }).add(u), this.pager = f.text("", 15, 10).addClass("highcharts-legend-navigation").add(u), this.down = f.symbol("triangle-down", 0, 0, z, z).on("click", function () { b.scroll(1, l) }).add(u)), b.scroll(0), a = c) : u && (E(), this.nav = u.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0); return a
            }, scroll: function (a, c) {
                var b = this.pages, e = b.length; a = this.currentPage + a; var d = this.clipHeight, g = this.pager, m = this.padding; a > e && (a = e); 0 < a && (void 0 !==
                    c && f(c, this.chart), this.nav.attr({ translateX: m, translateY: d + this.padding + 7 + this.titleHeight, visibility: "visible" }), this.up.attr({ "class": 1 === a ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" }), g.attr({ text: a + "/" + e }), this.down.attr({ x: 18 + this.pager.getBBox().width, "class": a === e ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" }), c = -b[a - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: c }), this.currentPage = a, this.positionCheckboxes(c))
            }
        }; a.LegendSymbolMixin = {
            drawRectangle: function (a,
                c) { var b = a.symbolHeight, e = a.options.squareSymbol; c.legendSymbol = this.chart.renderer.rect(e ? (a.symbolWidth - b) / 2 : 0, a.baseline - b + 1, e ? b : a.symbolWidth, b, m(a.options.symbolRadius, b / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(c.legendGroup) }, drawLineMarker: function (a) {
                    var b = this.options.marker, c, d = a.symbolWidth, f = a.symbolHeight; c = f / 2; var g = this.chart.renderer, h = this.legendGroup; a = a.baseline - Math.round(.3 * a.fontMetrics.b); this.legendLine = g.path(["M", 0, a, "L", d, a]).addClass("highcharts-graph").attr({}).add(h);
                    b && !1 !== b.enabled && (c = Math.min(m(b.radius, c), c), 0 === this.symbol.indexOf("url") && (b = n(b, { width: f, height: f }), c = 0), this.legendSymbol = b = g.symbol(this.symbol, d / 2 - c, a - c, 2 * c, 2 * c, b).addClass("highcharts-point").add(h), b.isMarker = !0)
                }
        }; (/Trident\/7\.0/.test(E.navigator.userAgent) || g) && v(B.prototype, "positionItem", function (a, c) { var b = this, e = function () { c._legendItemPos && a.call(b, c) }; e(); setTimeout(e) })
    })(J); (function (a) {
        var B = a.addEvent, w = a.animObject, D = a.attr, F = a.doc, q = a.Axis, d = a.createElement, g = a.defaultOptions,
            h = a.discardElement, n = a.charts, m = a.css, f = a.defined, c = a.each, E = a.extend, v = a.find, b = a.fireEvent, e = a.getStyle, r = a.grep, p = a.isNumber, I = a.isObject, t = a.isString, A = a.Legend, H = a.marginNames, x = a.merge, l = a.Pointer, z = a.pick, u = a.pInt, N = a.removeEvent, G = a.seriesTypes, k = a.splat, y = a.svg, S = a.syncTimeout, L = a.win, O = a.Renderer, R = a.Chart = function () { this.getArgs.apply(this, arguments) }; a.chart = function (a, b, c) { return new R(a, b, c) }; R.prototype = {
                callbacks: [], getArgs: function () {
                    var a = [].slice.call(arguments); if (t(a[0]) || a[0].nodeName) this.renderTo =
                        a.shift(); this.init(a[0], a[1])
                }, init: function (b, c) { var e, d = b.series; b.series = null; e = x(g, b); e.series = b.series = d; this.userOptions = b; b = e.chart; d = b.events; this.margin = []; this.spacing = []; this.bounds = { h: {}, v: {} }; this.callback = c; this.isResizing = 0; this.options = e; this.axes = []; this.series = []; this.hasCartesianSeries = b.showAxes; var l; this.index = n.length; n.push(this); a.chartCount++; if (d) for (l in d) B(this, l, d[l]); this.xAxis = []; this.yAxis = []; this.pointCount = this.colorCounter = this.symbolCounter = 0; this.firstRender() },
                initSeries: function (b) { var c = this.options.chart; (c = G[b.type || c.type || c.defaultSeriesType]) || a.error(17, !0); c = new c; c.init(this, b); return c }, orderSeries: function (a) { var b = this.series; for (a = a || 0; a < b.length; a++) b[a] && (b[a].index = a, b[a].name = b[a].name || "Series " + (b[a].index + 1)) }, isInsidePlot: function (a, b, c) { var e = c ? b : a; a = c ? a : b; return 0 <= e && e <= this.plotWidth && 0 <= a && a <= this.plotHeight }, redraw: function (e) {
                    var d = this.axes, l = this.series, f = this.pointer, k = this.legend, g = this.isDirtyLegend, m, u, z = this.hasCartesianSeries,
                        p = this.isDirtyBox, h, t = this.renderer, n = t.isHidden(), r = []; this.setResponsive && this.setResponsive(!1); a.setAnimation(e, this); n && this.cloneRenderTo(); this.layOutTitles(); for (e = l.length; e--;) if (h = l[e], h.options.stacking && (m = !0, h.isDirty)) { u = !0; break } if (u) for (e = l.length; e--;) h = l[e], h.options.stacking && (h.isDirty = !0); c(l, function (a) { a.isDirty && "point" === a.options.legendType && (a.updateTotals && a.updateTotals(), g = !0); a.isDirtyData && b(a, "updatedData") }); g && k.options.enabled && (k.render(), this.isDirtyLegend = !1);
                    m && this.getStacks(); z && c(d, function (a) { a.updateNames(); a.setScale() }); this.getMargins(); z && (c(d, function (a) { a.isDirty && (p = !0) }), c(d, function (a) { var c = a.min + "," + a.max; a.extKey !== c && (a.extKey = c, r.push(function () { b(a, "afterSetExtremes", E(a.eventArgs, a.getExtremes())); delete a.eventArgs })); (p || m) && a.redraw() })); p && this.drawChartBox(); b(this, "predraw"); c(l, function (a) { (p || a.isDirty) && a.visible && a.redraw(); a.isDirtyData = !1 }); f && f.reset(!0); t.draw(); b(this, "redraw"); b(this, "render"); n && this.cloneRenderTo(!0);
                    c(r, function (a) { a.call() })
                }, get: function (a) { function b(b) { return b.id === a || b.options && b.options.id === a } var c, e = this.series, d; c = v(this.axes, b) || v(this.series, b); for (d = 0; !c && d < e.length; d++) c = v(e[d].points || [], b); return c }, getAxes: function () { var a = this, b = this.options, e = b.xAxis = k(b.xAxis || {}), b = b.yAxis = k(b.yAxis || {}); c(e, function (a, b) { a.index = b; a.isX = !0 }); c(b, function (a, b) { a.index = b }); e = e.concat(b); c(e, function (b) { new q(a, b) }) }, getSelectedPoints: function () {
                    var a = []; c(this.series, function (b) {
                        a = a.concat(r(b.points ||
                            [], function (a) { return a.selected }))
                    }); return a
                }, getSelectedSeries: function () { return r(this.series, function (a) { return a.selected }) }, setTitle: function (a, b, e) {
                    var d = this, l = d.options, f; f = l.title = x(l.title, a); l = l.subtitle = x(l.subtitle, b); c([["title", a, f], ["subtitle", b, l]], function (a, b) {
                        var c = a[0], e = d[c], l = a[1]; a = a[2]; e && l && (d[c] = e = e.destroy()); a && a.text && !e && (d[c] = d.renderer.text(a.text, 0, 0, a.useHTML).attr({ align: a.align, "class": "highcharts-" + c, zIndex: a.zIndex || 4 }).add(), d[c].update = function (a) {
                            d.setTitle(!b &&
                                a, b && a)
                        })
                    }); d.layOutTitles(e)
                }, layOutTitles: function (a) {
                    var b = 0, e, d = this.renderer, l = this.spacingBox; c(["title", "subtitle"], function (a) { var c = this[a], e = this.options[a], f; c && (f = d.fontMetrics(f, c).b, c.css({ width: (e.width || l.width + e.widthAdjust) + "px" }).align(E({ y: b + f + ("title" === a ? -3 : 2) }, e), !1, "spacingBox"), e.floating || e.verticalAlign || (b = Math.ceil(b + c.getBBox().height))) }, this); e = this.titleOffset !== b; this.titleOffset = b; !this.isDirtyBox && e && (this.isDirtyBox = e, this.hasRendered && z(a, !0) && this.isDirtyBox &&
                        this.redraw())
                }, getChartSize: function () { var b = this.options.chart, c = b.width, b = b.height, d = this.renderToClone || this.renderTo; f(c) || (this.containerWidth = e(d, "width")); f(b) || (this.containerHeight = e(d, "height")); this.chartWidth = Math.max(0, c || this.containerWidth || 600); this.chartHeight = Math.max(0, a.relativeLength(b, this.chartWidth) || this.containerHeight || 400) }, cloneRenderTo: function (a) {
                    var b = this.renderToClone, c = this.container; if (a) {
                        if (b) {
                            for (; b.childNodes.length;) this.renderTo.appendChild(b.firstChild);
                            h(b); delete this.renderToClone
                        }
                    } else c && c.parentNode === this.renderTo && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), m(b, { position: "absolute", top: "-9999px", display: "block" }), b.style.setProperty && b.style.setProperty("display", "block", "important"), F.body.appendChild(b), c && b.appendChild(c)
                }, setClassName: function (a) { this.container.className = "highcharts-container " + (a || "") }, getContainer: function () {
                    var b, c = this.options, e = c.chart, l, f; b = this.renderTo; var k = a.uniqueKey(), g; b ||
                        (this.renderTo = b = e.renderTo); t(b) && (this.renderTo = b = F.getElementById(b)); b || a.error(13, !0); l = u(D(b, "data-highcharts-chart")); p(l) && n[l] && n[l].hasRendered && n[l].destroy(); D(b, "data-highcharts-chart", this.index); b.innerHTML = ""; e.skipClone || b.offsetWidth || this.cloneRenderTo(); this.getChartSize(); l = this.chartWidth; f = this.chartHeight; this.container = b = d("div", { id: k }, void 0, this.renderToClone || b); this._cursor = b.style.cursor; this.renderer = new (a[e.renderer] || O)(b, l, f, null, e.forExport, c.exporting && c.exporting.allowHTML);
                    this.setClassName(e.className); for (g in c.defs) this.renderer.definition(c.defs[g]); this.renderer.chartIndex = this.index
                }, getMargins: function (a) {
                    var b = this.spacing, c = this.margin, e = this.titleOffset; this.resetMargins(); e && !f(c[0]) && (this.plotTop = Math.max(this.plotTop, e + this.options.title.margin + b[0])); this.legend.display && this.legend.adjustMargins(c, b); this.extraMargin && (this[this.extraMargin.type] = (this[this.extraMargin.type] || 0) + this.extraMargin.value); this.extraTopMargin && (this.plotTop += this.extraTopMargin);
                    a || this.getAxisMargins()
                }, getAxisMargins: function () { var a = this, b = a.axisOffset = [0, 0, 0, 0], e = a.margin; a.hasCartesianSeries && c(a.axes, function (a) { a.visible && a.getOffset() }); c(H, function (c, d) { f(e[d]) || (a[c] += b[d]) }); a.setChartSize() }, reflow: function (a) {
                    var b = this, c = b.options.chart, d = b.renderTo, l = f(c.width), k = c.width || e(d, "width"), c = c.height || e(d, "height"), d = a ? a.target : L; if (!l && !b.isPrinting && k && c && (d === L || d === F)) {
                        if (k !== b.containerWidth || c !== b.containerHeight) clearTimeout(b.reflowTimeout), b.reflowTimeout =
                            S(function () { b.container && b.setSize(void 0, void 0, !1) }, a ? 100 : 0); b.containerWidth = k; b.containerHeight = c
                    }
                }, initReflow: function () { var a = this, b; b = B(L, "resize", function (b) { a.reflow(b) }); B(a, "destroy", b) }, setSize: function (e, d, l) {
                    var f = this, k = f.renderer; f.isResizing += 1; a.setAnimation(l, f); f.oldChartHeight = f.chartHeight; f.oldChartWidth = f.chartWidth; void 0 !== e && (f.options.chart.width = e); void 0 !== d && (f.options.chart.height = d); f.getChartSize(); f.setChartSize(!0); k.setSize(f.chartWidth, f.chartHeight, l); c(f.axes,
                        function (a) { a.isDirty = !0; a.setScale() }); f.isDirtyLegend = !0; f.isDirtyBox = !0; f.layOutTitles(); f.getMargins(); f.redraw(l); f.oldChartHeight = null; b(f, "resize"); S(function () { f && b(f, "endResize", null, function () { --f.isResizing }) }, w(void 0).duration)
                }, setChartSize: function (a) {
                    var b = this.inverted, e = this.renderer, d = this.chartWidth, l = this.chartHeight, f = this.options.chart, k = this.spacing, g = this.clipOffset, m, u, p, z; this.plotLeft = m = Math.round(this.plotLeft); this.plotTop = u = Math.round(this.plotTop); this.plotWidth = p =
                        Math.max(0, Math.round(d - m - this.marginRight)); this.plotHeight = z = Math.max(0, Math.round(l - u - this.marginBottom)); this.plotSizeX = b ? z : p; this.plotSizeY = b ? p : z; this.plotBorderWidth = f.plotBorderWidth || 0; this.spacingBox = e.spacingBox = { x: k[3], y: k[0], width: d - k[3] - k[1], height: l - k[0] - k[2] }; this.plotBox = e.plotBox = { x: m, y: u, width: p, height: z }; d = 2 * Math.floor(this.plotBorderWidth / 2); b = Math.ceil(Math.max(d, g[3]) / 2); e = Math.ceil(Math.max(d, g[0]) / 2); this.clipBox = {
                            x: b, y: e, width: Math.floor(this.plotSizeX - Math.max(d, g[1]) / 2 -
                                b), height: Math.max(0, Math.floor(this.plotSizeY - Math.max(d, g[2]) / 2 - e))
                        }; a || c(this.axes, function (a) { a.setAxisSize(); a.setAxisTranslation() })
                }, resetMargins: function () { var a = this, b = a.options.chart; c(["margin", "spacing"], function (e) { var d = b[e], l = I(d) ? d : [d, d, d, d]; c(["Top", "Right", "Bottom", "Left"], function (c, d) { a[e][d] = z(b[e + c], l[d]) }) }); c(H, function (b, c) { a[b] = z(a.margin[c], a.spacing[c]) }); a.axisOffset = [0, 0, 0, 0]; a.clipOffset = [0, 0, 0, 0] }, drawChartBox: function () {
                    var a = this.options.chart, b = this.renderer, c = this.chartWidth,
                        e = this.chartHeight, d = this.chartBackground, l = this.plotBackground, f = this.plotBorder, k, g, m = this.plotLeft, u = this.plotTop, p = this.plotWidth, z = this.plotHeight, h = this.plotBox, t = this.clipRect, n = this.clipBox, r = "animate"; d || (this.chartBackground = d = b.rect().addClass("highcharts-background").add(), r = "attr"); k = g = d.strokeWidth(); d[r]({ x: g / 2, y: g / 2, width: c - g - k % 2, height: e - g - k % 2, r: a.borderRadius }); r = "animate"; l || (r = "attr", this.plotBackground = l = b.rect().addClass("highcharts-plot-background").add()); l[r](h); t ? t.animate({
                            width: n.width,
                            height: n.height
                        }) : this.clipRect = b.clipRect(n); r = "animate"; f || (r = "attr", this.plotBorder = f = b.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add()); f[r](f.crisp({ x: m, y: u, width: p, height: z }, -f.strokeWidth())); this.isDirtyBox = !1
                }, propFromSeries: function () { var a = this, b = a.options.chart, e, d = a.options.series, l, f; c(["inverted", "angular", "polar"], function (c) { e = G[b.type || b.defaultSeriesType]; f = b[c] || e && e.prototype[c]; for (l = d && d.length; !f && l--;) (e = G[d[l].type]) && e.prototype[c] && (f = !0); a[c] = f }) }, linkSeries: function () {
                    var a =
                        this, b = a.series; c(b, function (a) { a.linkedSeries.length = 0 }); c(b, function (b) { var c = b.options.linkedTo; t(c) && (c = ":previous" === c ? a.series[b.index - 1] : a.get(c)) && c.linkedParent !== b && (c.linkedSeries.push(b), b.linkedParent = c, b.visible = z(b.options.visible, c.options.visible, b.visible)) })
                }, renderSeries: function () { c(this.series, function (a) { a.translate(); a.render() }) }, renderLabels: function () {
                    var a = this, b = a.options.labels; b.items && c(b.items, function (c) {
                        var e = E(b.style, c.style), d = u(e.left) + a.plotLeft, l = u(e.top) +
                            a.plotTop + 12; delete e.left; delete e.top; a.renderer.text(c.html, d, l).attr({ zIndex: 2 }).css(e).add()
                    })
                }, render: function () {
                    var a = this.axes, b = this.renderer, e = this.options, d, l, f; this.setTitle(); this.legend = new A(this, e.legend); this.getStacks && this.getStacks(); this.getMargins(!0); this.setChartSize(); e = this.plotWidth; d = this.plotHeight -= 21; c(a, function (a) { a.setScale() }); this.getAxisMargins(); l = 1.1 < e / this.plotWidth; f = 1.05 < d / this.plotHeight; if (l || f) c(a, function (a) { (a.horiz && l || !a.horiz && f) && a.setTickInterval(!0) }),
                        this.getMargins(); this.drawChartBox(); this.hasCartesianSeries && c(a, function (a) { a.visible && a.render() }); this.seriesGroup || (this.seriesGroup = b.g("series-group").attr({ zIndex: 3 }).add()); this.renderSeries(); this.renderLabels(); this.addCredits(); this.setResponsive && this.setResponsive(); this.hasRendered = !0
                }, addCredits: function (a) {
                    var b = this; a = x(!0, this.options.credits, a); a.enabled && !this.credits && (this.credits = this.renderer.text(a.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click",
                        function () { a.href && (L.location.href = a.href) }).attr({ align: a.position.align, zIndex: 8 }).add().align(a.position), this.credits.update = function (a) { b.credits = b.credits.destroy(); b.addCredits(a) })
                }, destroy: function () {
                    var e = this, d = e.axes, l = e.series, f = e.container, k, g = f && f.parentNode; b(e, "destroy"); n[e.index] = void 0; a.chartCount--; e.renderTo.removeAttribute("data-highcharts-chart"); N(e); for (k = d.length; k--;) d[k] = d[k].destroy(); this.scroller && this.scroller.destroy && this.scroller.destroy(); for (k = l.length; k--;) l[k] =
                        l[k].destroy(); c("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "), function (a) { var b = e[a]; b && b.destroy && (e[a] = b.destroy()) }); f && (f.innerHTML = "", N(f), g && h(f)); for (k in e) delete e[k]
                }, isReadyToRender: function () {
                    var a = this; return y || L != L.top || "complete" === F.readyState ? !0 : (F.attachEvent("onreadystatechange", function () {
                        F.detachEvent("onreadystatechange", a.firstRender); "complete" ===
                            F.readyState && a.firstRender()
                    }), !1)
                }, firstRender: function () { var a = this, e = a.options; if (a.isReadyToRender()) { a.getContainer(); b(a, "init"); a.resetMargins(); a.setChartSize(); a.propFromSeries(); a.getAxes(); c(e.series || [], function (b) { a.initSeries(b) }); a.linkSeries(); b(a, "beforeRender"); l && (a.pointer = new l(a, e)); a.render(); if (!a.renderer.imgCount && a.onload) a.onload(); a.cloneRenderTo(!0) } }, onload: function () {
                    c([this.callback].concat(this.callbacks), function (a) { a && void 0 !== this.index && a.apply(this, [this]) },
                        this); b(this, "load"); b(this, "render"); f(this.index) && !1 !== this.options.chart.reflow && this.initReflow(); this.onload = null
                }
            }
    })(J); (function (a) {
        var B, w = a.each, D = a.extend, F = a.erase, q = a.fireEvent, d = a.format, g = a.isArray, h = a.isNumber, n = a.pick, m = a.removeEvent; B = a.Point = function () { }; B.prototype = {
            init: function (a, c, d) {
                var f = a.chart.options.chart.colorCount; this.series = a; this.applyOptions(c, d); a.options.colorByPoint ? (c = a.colorCounter, a.colorCounter++ , a.colorCounter === f && (a.colorCounter = 0)) : c = a.colorIndex; this.colorIndex =
                    n(this.colorIndex, c); a.chart.pointCount++; return this
            }, applyOptions: function (a, c) {
                var d = this.series, f = d.options.pointValKey || d.pointValKey; a = B.prototype.optionsToObject.call(this, a); D(this, a); this.options = this.options ? D(this.options, a) : a; a.group && delete this.group; f && (this.y = this[f]); this.isNull = n(this.isValid && !this.isValid(), null === this.x || !h(this.y, !0)); this.selected && (this.state = "select"); "name" in this && void 0 === c && d.xAxis && d.xAxis.hasNames && (this.x = d.xAxis.nameToX(this)); void 0 === this.x && d &&
                    (this.x = void 0 === c ? d.autoIncrement(this) : c); return this
            }, optionsToObject: function (a) { var c = {}, d = this.series, f = d.options.keys, b = f || d.pointArrayMap || ["y"], e = b.length, m = 0, p = 0; if (h(a) || null === a) c[b[0]] = a; else if (g(a)) for (!f && a.length > e && (d = typeof a[0], "string" === d ? c.name = a[0] : "number" === d && (c.x = a[0]), m++); p < e;) f && void 0 === a[m] || (c[b[p]] = a[m]), m++ , p++; else "object" === typeof a && (c = a, a.dataLabels && (d._hasPointLabels = !0), a.marker && (d._hasPointMarkers = !0)); return c }, getClassName: function () {
                return "highcharts-point" +
                    (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
            }, getZone: function () {
                var a = this.series, c = a.zones, a = a.zoneAxis || "y", d = 0, g; for (g = c[d]; this[a] >= g.value;) g = c[++d]; g && g.color && !this.options.color && (this.color =
                    g.color); return g
            }, destroy: function () { var a = this.series.chart, c = a.hoverPoints, d; a.pointCount--; c && (this.setState(), F(c, this), c.length || (a.hoverPoints = null)); if (this === a.hoverPoint) this.onMouseOut(); if (this.graphic || this.dataLabel) m(this), this.destroyElements(); this.legendItem && a.legend.destroyItem(this); for (d in this) this[d] = null }, destroyElements: function () { for (var a = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], c, d = 6; d--;) c = a[d], this[c] && (this[c] = this[c].destroy()) }, getLabelConfig: function () {
                return {
                    x: this.category,
                    y: this.y, color: this.color, colorIndex: this.colorIndex, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal
                }
            }, tooltipFormatter: function (a) { var c = this.series, f = c.tooltipOptions, g = n(f.valueDecimals, ""), b = f.valuePrefix || "", e = f.valueSuffix || ""; w(c.pointArrayMap || ["y"], function (c) { c = "{point." + c; if (b || e) a = a.replace(c + "}", b + c + "}" + e); a = a.replace(c + "}", c + ":,." + g + "f}") }); return d(a, { point: this, series: this.series }) }, firePointEvent: function (a, c,
                d) { var f = this, b = this.series.options; (b.point.events[a] || f.options && f.options.events && f.options.events[a]) && this.importEvents(); "click" === a && b.allowPointSelect && (d = function (a) { f.select && f.select(null, a.ctrlKey || a.metaKey || a.shiftKey) }); q(this, a, c, d) }, visible: !0
        }
    })(J); (function (a) {
        var B = a.addEvent, w = a.animObject, D = a.arrayMax, F = a.arrayMin, q = a.correctFloat, d = a.Date, g = a.defaultOptions, h = a.defined, n = a.each, m = a.erase, f = a.extend, c = a.fireEvent, E = a.grep, v = a.isArray, b = a.isNumber, e = a.isString, r = a.merge, p = a.pick,
            I = a.removeEvent, t = a.splat, A = a.SVGElement, H = a.syncTimeout, x = a.win; a.Series = a.seriesType("line", null, {
                allowPointSelect: !1, showCheckbox: !1, animation: { duration: 1E3 }, events: {}, marker: { radius: 4, states: { hover: { animation: { duration: 50 }, enabled: !0, radiusPlus: 2 } } }, point: { events: {} }, dataLabels: { align: "center", formatter: function () { return null === this.y ? "" : a.numberFormat(this.y, -1) }, verticalAlign: "bottom", x: 0, y: 0, padding: 5 }, cropThreshold: 300, pointRange: 0, softThreshold: !0, states: {
                    hover: {
                        animation: { duration: 50 }, lineWidthPlus: 1,
                        marker: {}, halo: { size: 10 }
                    }, select: { marker: {} }
                }, stickyTracking: !0, turboThreshold: 1E3
            }, {
                    isCartesian: !0, pointClass: a.Point, sorted: !0, requireSorting: !0, directTouch: !1, axisTypes: ["xAxis", "yAxis"], colorCounter: 0, parallelArrays: ["x", "y"], coll: "series", init: function (a, b) {
                        var c = this, e, d, l = a.series, g; c.chart = a; c.options = b = c.setOptions(b); c.linkedSeries = []; c.bindAxes(); f(c, { name: b.name, state: "", visible: !1 !== b.visible, selected: !0 === b.selected }); d = b.events; for (e in d) B(c, e, d[e]); if (d && d.click || b.point && b.point.events &&
                            b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0; c.getColor(); c.getSymbol(); n(c.parallelArrays, function (a) { c[a + "Data"] = [] }); c.setData(b.data, !1); c.isCartesian && (a.hasCartesianSeries = !0); l.length && (g = l[l.length - 1]); c._i = p(g && g._i, -1) + 1; a.orderSeries(this.insert(l))
                    }, insert: function (a) { var c = this.options.index, e; if (b(c)) { for (e = a.length; e--;) if (c >= p(a[e].options.index, a[e]._i)) { a.splice(e + 1, 0, this); break } -1 === e && a.unshift(this); e += 1 } else a.push(this); return p(e, a.length - 1) }, bindAxes: function () {
                        var b =
                            this, c = b.options, e = b.chart, d; n(b.axisTypes || [], function (l) { n(e[l], function (a) { d = a.options; if (c[l] === d.index || void 0 !== c[l] && c[l] === d.id || void 0 === c[l] && 0 === d.index) b.insert(a.series), b[l] = a, a.isDirty = !0 }); b[l] || b.optionalAxis === l || a.error(18, !0) })
                    }, updateParallelArrays: function (a, c) { var e = a.series, d = arguments, l = b(c) ? function (b) { var d = "y" === b && e.toYData ? e.toYData(a) : a[b]; e[b + "Data"][c] = d } : function (a) { Array.prototype[c].apply(e[a + "Data"], Array.prototype.slice.call(d, 2)) }; n(e.parallelArrays, l) }, autoIncrement: function () {
                        var a =
                            this.options, b = this.xIncrement, c, e = a.pointIntervalUnit, b = p(b, a.pointStart, 0); this.pointInterval = c = p(this.pointInterval, a.pointInterval, 1); e && (a = new d(b), "day" === e ? a = +a[d.hcSetDate](a[d.hcGetDate]() + c) : "month" === e ? a = +a[d.hcSetMonth](a[d.hcGetMonth]() + c) : "year" === e && (a = +a[d.hcSetFullYear](a[d.hcGetFullYear]() + c)), c = a - b); this.xIncrement = b + c; return b
                    }, setOptions: function (a) {
                        var b = this.chart, c = b.options.plotOptions, b = b.userOptions || {}, e = b.plotOptions || {}, d = c[this.type]; this.userOptions = a; c = r(d, c.series,
                            a); this.tooltipOptions = r(g.tooltip, g.plotOptions[this.type].tooltip, b.tooltip, e.series && e.series.tooltip, e[this.type] && e[this.type].tooltip, a.tooltip); null === d.marker && delete c.marker; this.zoneAxis = c.zoneAxis; a = this.zones = (c.zones || []).slice(); !c.negativeColor && !c.negativeFillColor || c.zones || a.push({ value: c[this.zoneAxis + "Threshold"] || c.threshold || 0, className: "highcharts-negative" }); a.length && h(a[a.length - 1].value) && a.push({}); return c
                    }, getCyclic: function (a, b, c) {
                        var e, d = this.chart, l = this.userOptions,
                            f = a + "Index", g = a + "Counter", m = c ? c.length : p(d.options.chart[a + "Count"], d[a + "Count"]); b || (e = p(l[f], l["_" + f]), h(e) || (d.series.length || (d[g] = 0), l["_" + f] = e = d[g] % m, d[g] += 1), c && (b = c[e])); void 0 !== e && (this[f] = e); this[a] = b
                    }, getColor: function () { this.getCyclic("color") }, getSymbol: function () { this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols) }, drawLegendSymbol: a.LegendSymbolMixin.drawLineMarker, setData: function (c, d, f, g) {
                        var l = this, k = l.points, m = k && k.length || 0, h, t = l.options, z = l.chart, u =
                            null, r = l.xAxis, q = t.turboThreshold, A = this.xData, x = this.yData, H = (h = l.pointArrayMap) && h.length; c = c || []; h = c.length; d = p(d, !0); if (!1 !== g && h && m === h && !l.cropped && !l.hasGroupedData && l.visible) n(c, function (a, b) { k[b].update && a !== t.data[b] && k[b].update(a, !1, null, !1) }); else {
                                l.xIncrement = null; l.colorCounter = 0; n(this.parallelArrays, function (a) { l[a + "Data"].length = 0 }); if (q && h > q) {
                                    for (f = 0; null === u && f < h;) u = c[f], f++; if (b(u)) for (f = 0; f < h; f++) A[f] = this.autoIncrement(), x[f] = c[f]; else if (v(u)) if (H) for (f = 0; f < h; f++) u = c[f], A[f] =
                                        u[0], x[f] = u.slice(1, H + 1); else for (f = 0; f < h; f++) u = c[f], A[f] = u[0], x[f] = u[1]; else a.error(12)
                                } else for (f = 0; f < h; f++) void 0 !== c[f] && (u = { series: l }, l.pointClass.prototype.applyOptions.apply(u, [c[f]]), l.updateParallelArrays(u, f)); e(x[0]) && a.error(14, !0); l.data = []; l.options.data = l.userOptions.data = c; for (f = m; f--;) k[f] && k[f].destroy && k[f].destroy(); r && (r.minRange = r.userMinRange); l.isDirty = z.isDirtyBox = !0; l.isDirtyData = !!k; f = !1
                            } "point" === t.legendType && (this.processData(), this.generatePoints()); d && z.redraw(f)
                    },
                    processData: function (b) {
                        var c = this.xData, e = this.yData, d = c.length, f; f = 0; var l, g, m = this.xAxis, p, h = this.options; p = h.cropThreshold; var t = this.getExtremesFromAll || h.getExtremesFromAll, n = this.isCartesian, h = m && m.val2lin, r = m && m.isLog, q, A; if (n && !this.isDirty && !m.isDirty && !this.yAxis.isDirty && !b) return !1; m && (b = m.getExtremes(), q = b.min, A = b.max); if (n && this.sorted && !t && (!p || d > p || this.forceCrop)) if (c[d - 1] < q || c[0] > A) c = [], e = []; else if (c[0] < q || c[d - 1] > A) f = this.cropData(this.xData, this.yData, q, A), c = f.xData, e = f.yData,
                            f = f.start, l = !0; for (p = c.length || 1; --p;) d = r ? h(c[p]) - h(c[p - 1]) : c[p] - c[p - 1], 0 < d && (void 0 === g || d < g) ? g = d : 0 > d && this.requireSorting && a.error(15); this.cropped = l; this.cropStart = f; this.processedXData = c; this.processedYData = e; this.closestPointRange = g
                    }, cropData: function (a, b, c, e) { var d = a.length, f = 0, l = d, g = p(this.cropShoulder, 1), m; for (m = 0; m < d; m++) if (a[m] >= c) { f = Math.max(0, m - g); break } for (c = m; c < d; c++) if (a[c] > e) { l = c + g; break } return { xData: a.slice(f, l), yData: b.slice(f, l), start: f, end: l } }, generatePoints: function () {
                        var a = this.options.data,
                            b = this.data, c, e = this.processedXData, d = this.processedYData, f = this.pointClass, g = e.length, m = this.cropStart || 0, p, h = this.hasGroupedData, n, r = [], q; b || h || (b = [], b.length = a.length, b = this.data = b); for (q = 0; q < g; q++) p = m + q, h ? (n = (new f).init(this, [e[q]].concat(t(d[q]))), n.dataGroup = this.groupMap[q]) : (n = b[p]) || void 0 === a[p] || (b[p] = n = (new f).init(this, a[p], e[q])), n.index = p, r[q] = n; if (b && (g !== (c = b.length) || h)) for (q = 0; q < c; q++) q !== m || h || (q += g), b[q] && (b[q].destroyElements(), b[q].plotX = void 0); this.data = b; this.points = r
                    },
                    getExtremes: function (a) { var c = this.yAxis, e = this.processedXData, d, f = [], l = 0; d = this.xAxis.getExtremes(); var g = d.min, m = d.max, p, h, t, n; a = a || this.stackedYData || this.processedYData || []; d = a.length; for (n = 0; n < d; n++) if (h = e[n], t = a[n], p = (b(t, !0) || v(t)) && (!c.positiveValuesOnly || t.length || 0 < t), h = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (e[n + 1] || h) >= g && (e[n - 1] || h) <= m, p && h) if (p = t.length) for (; p--;) null !== t[p] && (f[l++] = t[p]); else f[l++] = t; this.dataMin = F(f); this.dataMax = D(f) }, translate: function () {
                        this.processedXData ||
                            this.processData(); this.generatePoints(); var a = this.options, c = a.stacking, e = this.xAxis, d = e.categories, f = this.yAxis, k = this.points, g = k.length, m = !!this.modifyValue, t = a.pointPlacement, n = "between" === t || b(t), r = a.threshold, A = a.startFromThreshold ? r : 0, x, v, H, E, I = Number.MAX_VALUE; "between" === t && (t = .5); b(t) && (t *= p(a.pointRange || e.pointRange)); for (a = 0; a < g; a++) {
                                var w = k[a], B = w.x, D = w.y; v = w.low; var F = c && f.stacks[(this.negStacks && D < (A ? 0 : r) ? "-" : "") + this.stackKey], J; f.positiveValuesOnly && null !== D && 0 >= D && (w.isNull = !0);
                                w.plotX = x = q(Math.min(Math.max(-1E5, e.translate(B, 0, 0, 0, 1, t, "flags" === this.type)), 1E5)); c && this.visible && !w.isNull && F && F[B] && (E = this.getStackIndicator(E, B, this.index), J = F[B], D = J.points[E.key], v = D[0], D = D[1], v === A && E.key === F[B].base && (v = p(r, f.min)), f.positiveValuesOnly && 0 >= v && (v = null), w.total = w.stackTotal = J.total, w.percentage = J.total && w.y / J.total * 100, w.stackY = D, J.setOffset(this.pointXOffset || 0, this.barW || 0)); w.yBottom = h(v) ? f.translate(v, 0, 1, 0, 1) : null; m && (D = this.modifyValue(D, w)); w.plotY = v = "number" ===
                                    typeof D && Infinity !== D ? Math.min(Math.max(-1E5, f.translate(D, 0, 1, 0, 1)), 1E5) : void 0; w.isInside = void 0 !== v && 0 <= v && v <= f.len && 0 <= x && x <= e.len; w.clientX = n ? q(e.translate(B, 0, 0, 0, 1, t)) : x; w.negative = w.y < (r || 0); w.category = d && void 0 !== d[w.x] ? d[w.x] : w.x; w.isNull || (void 0 !== H && (I = Math.min(I, Math.abs(x - H))), H = x); w.zone = this.zones.length && w.getZone()
                            } this.closestPointRangePx = I
                    }, getValidPoints: function (a, b) {
                        var c = this.chart; return E(a || this.points || [], function (a) {
                            return b && !c.isInsidePlot(a.plotX, a.plotY, c.inverted) ?
                                !1 : !a.isNull
                        })
                    }, setClip: function (a) {
                        var b = this.chart, c = this.options, e = b.renderer, d = b.inverted, f = this.clipBox, l = f || b.clipBox, g = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, l.height, c.xAxis, c.yAxis].join(), m = b[g], p = b[g + "m"]; m || (a && (l.width = 0, b[g + "m"] = p = e.clipRect(-99, d ? -b.plotLeft : -b.plotTop, 99, d ? b.chartWidth : b.chartHeight)), b[g] = m = e.clipRect(l), m.count = { length: 0 }); a && !m.count[this.index] && (m.count[this.index] = !0, m.count.length += 1); !1 !== c.clip && (this.group.clip(a || f ? m : b.clipRect), this.markerGroup.clip(p),
                            this.sharedClipKey = g); a || (m.count[this.index] && (delete m.count[this.index], --m.count.length), 0 === m.count.length && g && b[g] && (f || (b[g] = b[g].destroy()), b[g + "m"] && (this.markerGroup.clip(), b[g + "m"] = b[g + "m"].destroy())))
                    }, animate: function (a) { var b = this.chart, c = w(this.options.animation), e; a ? this.setClip(c) : (e = this.sharedClipKey, (a = b[e]) && a.animate({ width: b.plotSizeX }, c), b[e + "m"] && b[e + "m"].animate({ width: b.plotSizeX + 99 }, c), this.animate = null) }, afterAnimate: function () { this.setClip(); c(this, "afterAnimate") },
                    drawPoints: function () {
                        var a = this.points, c = this.chart, e, d, f, k, g = this.options.marker, m, h, t, n, r = this.markerGroup, q = p(g.enabled, this.xAxis.isRadial ? !0 : null, this.closestPointRangePx >= 2 * g.radius); if (!1 !== g.enabled || this._hasPointMarkers) for (d = 0; d < a.length; d++) f = a[d], e = f.plotY, k = f.graphic, m = f.marker || {}, h = !!f.marker, t = q && void 0 === m.enabled || m.enabled, n = f.isInside, t && b(e) && null !== f.y ? (e = p(m.symbol, this.symbol), f.hasImage = 0 === e.indexOf("url"), t = this.markerAttribs(f, f.selected && "select"), k ? k[n ? "show" : "hide"](!0).animate(t) :
                            n && (0 < t.width || f.hasImage) && (f.graphic = k = c.renderer.symbol(e, t.x, t.y, t.width, t.height, h ? m : g).add(r)), k && k.addClass(f.getClassName(), !0)) : k && (f.graphic = k.destroy())
                    }, markerAttribs: function (a, b) { var c = this.options.marker, e = a.marker || {}, d = p(e.radius, c.radius); b && (c = c.states[b], b = e.states && e.states[b], d = p(b && b.radius, c && c.radius, d + (c && c.radiusPlus || 0))); a.hasImage && (d = 0); a = { x: Math.floor(a.plotX) - d, y: a.plotY - d }; d && (a.width = a.height = 2 * d); return a }, destroy: function () {
                        var a = this, b = a.chart, e = /AppleWebKit\/533/.test(x.navigator.userAgent),
                            d, f = a.data || [], k, g, p; c(a, "destroy"); I(a); n(a.axisTypes || [], function (b) { (p = a[b]) && p.series && (m(p.series, a), p.isDirty = p.forceRedraw = !0) }); a.legendItem && a.chart.legend.destroyItem(a); for (d = f.length; d--;) (k = f[d]) && k.destroy && k.destroy(); a.points = null; clearTimeout(a.animationTimeout); for (g in a) a[g] instanceof A && !a[g].survive && (d = e && "group" === g ? "hide" : "destroy", a[g][d]()); b.hoverSeries === a && (b.hoverSeries = null); m(b.series, a); b.orderSeries(); for (g in a) delete a[g]
                    }, getGraphPath: function (a, b, c) {
                        var e = this,
                            d = e.options, f = d.step, l, g = [], m = [], p; a = a || e.points; (l = a.reversed) && a.reverse(); (f = { right: 1, center: 2 }[f] || f && 3) && l && (f = 4 - f); !d.connectNulls || b || c || (a = this.getValidPoints(a)); n(a, function (l, k) {
                                var t = l.plotX, n = l.plotY, r = a[k - 1]; (l.leftCliff || r && r.rightCliff) && !c && (p = !0); l.isNull && !h(b) && 0 < k ? p = !d.connectNulls : l.isNull && !b ? p = !0 : (0 === k || p ? k = ["M", l.plotX, l.plotY] : e.getPointSpline ? k = e.getPointSpline(a, l, k) : f ? (k = 1 === f ? ["L", r.plotX, n] : 2 === f ? ["L", (r.plotX + t) / 2, r.plotY, "L", (r.plotX + t) / 2, n] : ["L", t, r.plotY], k.push("L",
                                    t, n)) : k = ["L", t, n], m.push(l.x), f && m.push(l.x), g.push.apply(g, k), p = !1)
                            }); g.xMap = m; return e.graphPath = g
                    }, drawGraph: function () {
                        var a = this, b = (this.gappedPath || this.getGraphPath).call(this), c = [["graph", "highcharts-graph"]]; n(this.zones, function (a, b) { c.push(["zone-graph-" + b, "highcharts-graph highcharts-zone-graph-" + b + " " + (a.className || "")]) }); n(c, function (c, e) {
                            e = c[0]; var d = a[e]; d ? (d.endX = b.xMap, d.animate({ d: b })) : b.length && (a[e] = a.chart.renderer.path(b).addClass(c[1]).attr({ zIndex: 1 }).add(a.group)); d && (d.startX =
                                b.xMap, d.isArea = b.isArea)
                        })
                    }, applyZones: function () {
                        var a = this, b = this.chart, c = b.renderer, e = this.zones, d, f, g = this.clips || [], m, h = this.graph, t = this.area, r = Math.max(b.chartWidth, b.chartHeight), q = this[(this.zoneAxis || "y") + "Axis"], A, x, v = b.inverted, H, E, w, I, B = !1; e.length && (h || t) && q && void 0 !== q.min && (x = q.reversed, H = q.horiz, h && h.hide(), t && t.hide(), A = q.getExtremes(), n(e, function (e, l) {
                            d = x ? H ? b.plotWidth : 0 : H ? 0 : q.toPixels(A.min); d = Math.min(Math.max(p(f, d), 0), r); f = Math.min(Math.max(Math.round(q.toPixels(p(e.value,
                                A.max), !0)), 0), r); B && (d = f = q.toPixels(A.max)); E = Math.abs(d - f); w = Math.min(d, f); I = Math.max(d, f); q.isXAxis ? (m = { x: v ? I : w, y: 0, width: E, height: r }, H || (m.x = b.plotHeight - m.x)) : (m = { x: 0, y: v ? I : w, width: r, height: E }, H && (m.y = b.plotWidth - m.y)); g[l] ? g[l].animate(m) : (g[l] = c.clipRect(m), h && a["zone-graph-" + l].clip(g[l]), t && a["zone-area-" + l].clip(g[l])); B = e.value > A.max
                        }), this.clips = g)
                    }, invertGroups: function (a) {
                        function b() {
                            n(["group", "markerGroup"], function (b) {
                                c[b] && (e.renderer.isVML && c[b].attr({ width: c.yAxis.len, height: c.xAxis.len }),
                                    c[b].width = c.yAxis.len, c[b].height = c.xAxis.len, c[b].invert(a))
                            })
                        } var c = this, e = c.chart, d; c.xAxis && (d = B(e, "resize", b), B(c, "destroy", d), b(a), c.invertGroups = b)
                    }, plotGroup: function (a, b, c, e, d) { var f = this[a], l = !f; l && (this[a] = f = this.chart.renderer.g(b).attr({ zIndex: e || .1 }).add(d), f.addClass("highcharts-series-" + this.index + " highcharts-" + this.type + "-series highcharts-color-" + this.colorIndex + " " + (this.options.className || ""))); f.attr({ visibility: c })[l ? "attr" : "animate"](this.getPlotBox()); return f }, getPlotBox: function () {
                        var a =
                            this.chart, b = this.xAxis, c = this.yAxis; a.inverted && (b = c, c = this.xAxis); return { translateX: b ? b.left : a.plotLeft, translateY: c ? c.top : a.plotTop, scaleX: 1, scaleY: 1 }
                    }, render: function () {
                        var a = this, b = a.chart, c, e = a.options, d = !!a.animate && b.renderer.isSVG && w(e.animation).duration, f = a.visible ? "inherit" : "hidden", g = e.zIndex, m = a.hasRendered, p = b.seriesGroup, h = b.inverted; c = a.plotGroup("group", "series", f, g, p); a.markerGroup = a.plotGroup("markerGroup", "markers", f, g, p); d && a.animate(!0); c.inverted = a.isCartesian ? h : !1; a.drawGraph &&
                            (a.drawGraph(), a.applyZones()); a.drawDataLabels && a.drawDataLabels(); a.visible && a.drawPoints(); a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker(); a.invertGroups(h); !1 === e.clip || a.sharedClipKey || m || c.clip(b.clipRect); d && a.animate(); m || (a.animationTimeout = H(function () { a.afterAnimate() }, d)); a.isDirty = !1; a.hasRendered = !0
                    }, redraw: function () {
                        var a = this.chart, b = this.isDirty || this.isDirtyData, c = this.group, e = this.xAxis, d = this.yAxis; c && (a.inverted && c.attr({ width: a.plotWidth, height: a.plotHeight }),
                            c.animate({ translateX: p(e && e.left, a.plotLeft), translateY: p(d && d.top, a.plotTop) })); this.translate(); this.render(); b && delete this.kdTree
                    }, kdDimensions: 1, kdAxisArray: ["clientX", "plotY"], searchPoint: function (a, b) { var c = this.xAxis, e = this.yAxis, d = this.chart.inverted; return this.searchKDTree({ clientX: d ? c.len - a.chartY + c.pos : a.chartX - c.pos, plotY: d ? e.len - a.chartX + e.pos : a.chartY - e.pos }, b) }, buildKDTree: function () {
                        function a(c, e, d) {
                            var f, l; if (l = c && c.length) return f = b.kdAxisArray[e % d], c.sort(function (a, b) {
                                return a[f] -
                                    b[f]
                            }), l = Math.floor(l / 2), { point: c[l], left: a(c.slice(0, l), e + 1, d), right: a(c.slice(l + 1), e + 1, d) }
                        } this.buildingKdTree = !0; var b = this, c = b.kdDimensions; delete b.kdTree; H(function () { b.kdTree = a(b.getValidPoints(null, !b.directTouch), c, c); b.buildingKdTree = !1 }, b.options.kdNow ? 0 : 1)
                    }, searchKDTree: function (a, b) {
                        function c(a, b, g, k) {
                            var m = b.point, p = e.kdAxisArray[g % k], t, n, r = m; n = h(a[d]) && h(m[d]) ? Math.pow(a[d] - m[d], 2) : null; t = h(a[f]) && h(m[f]) ? Math.pow(a[f] - m[f], 2) : null; t = (n || 0) + (t || 0); m.dist = h(t) ? Math.sqrt(t) : Number.MAX_VALUE;
                            m.distX = h(n) ? Math.sqrt(n) : Number.MAX_VALUE; p = a[p] - m[p]; t = 0 > p ? "left" : "right"; n = 0 > p ? "right" : "left"; b[t] && (t = c(a, b[t], g + 1, k), r = t[l] < r[l] ? t : m); b[n] && Math.sqrt(p * p) < r[l] && (a = c(a, b[n], g + 1, k), r = a[l] < r[l] ? a : r); return r
                        } var e = this, d = this.kdAxisArray[0], f = this.kdAxisArray[1], l = b ? "distX" : "dist"; this.kdTree || this.buildingKdTree || this.buildKDTree(); if (this.kdTree) return c(a, this.kdTree, this.kdDimensions, this.kdDimensions)
                    }
                })
    })(J); (function (a) {
        function B(a, d, c, g, h) {
            var b = a.chart.inverted; this.axis = a; this.isNegative =
                c; this.options = d; this.x = g; this.total = null; this.points = {}; this.stack = h; this.rightCliff = this.leftCliff = 0; this.alignOptions = { align: d.align || (b ? c ? "left" : "right" : "center"), verticalAlign: d.verticalAlign || (b ? "middle" : c ? "bottom" : "top"), y: n(d.y, b ? 4 : c ? 14 : -6), x: n(d.x, b ? c ? -6 : 6 : 0) }; this.textAlign = d.textAlign || (b ? c ? "right" : "left" : "center")
        } var w = a.Axis, D = a.Chart, F = a.correctFloat, q = a.defined, d = a.destroyObjectProperties, g = a.each, h = a.format, n = a.pick; a = a.Series; B.prototype = {
            destroy: function () { d(this, this.axis) }, render: function (a) {
                var d =
                    this.options, c = d.format, c = c ? h(c, this) : d.formatter.call(this); this.label ? this.label.attr({ text: c, visibility: "hidden" }) : this.label = this.axis.chart.renderer.text(c, null, null, d.useHTML).css(d.style).attr({ align: this.textAlign, rotation: d.rotation, visibility: "hidden" }).add(a)
            }, setOffset: function (a, d) {
                var c = this.axis, f = c.chart, g = f.inverted, b = c.reversed, b = this.isNegative && !b || !this.isNegative && b, e = c.translate(c.usePercentage ? 100 : this.total, 0, 0, 0, 1), c = c.translate(0), c = Math.abs(e - c); a = f.xAxis[0].translate(this.x) +
                    a; var m = f.plotHeight, g = { x: g ? b ? e : e - c : a, y: g ? m - a - d : b ? m - e - c : m - e, width: g ? c : d, height: g ? d : c }; if (d = this.label) d.align(this.alignOptions, null, g), g = d.alignAttr, d[!1 === this.options.crop || f.isInsidePlot(g.x, g.y) ? "show" : "hide"](!0)
            }
        }; D.prototype.getStacks = function () { var a = this; g(a.yAxis, function (a) { a.stacks && a.hasVisibleSeries && (a.oldStacks = a.stacks) }); g(a.series, function (d) { !d.options.stacking || !0 !== d.visible && !1 !== a.options.chart.ignoreHiddenSeries || (d.stackKey = d.type + n(d.options.stack, "")) }) }; w.prototype.buildStacks =
            function () { var a = this.series, d, c = n(this.options.reversedStacks, !0), g = a.length, h; if (!this.isXAxis) { this.usePercentage = !1; for (h = g; h--;) a[c ? h : g - h - 1].setStackedPoints(); for (h = g; h--;) d = a[c ? h : g - h - 1], d.setStackCliffs && d.setStackCliffs(); if (this.usePercentage) for (h = 0; h < g; h++) a[h].setPercentStacks() } }; w.prototype.renderStackTotals = function () {
                var a = this.chart, d = a.renderer, c = this.stacks, g, h, b = this.stackTotalGroup; b || (this.stackTotalGroup = b = d.g("stack-labels").attr({ visibility: "visible", zIndex: 6 }).add()); b.translate(a.plotLeft,
                    a.plotTop); for (g in c) for (h in a = c[g], a) a[h].render(b)
            }; w.prototype.resetStacks = function () { var a = this.stacks, d, c; if (!this.isXAxis) for (d in a) for (c in a[d]) a[d][c].touched < this.stacksTouched ? (a[d][c].destroy(), delete a[d][c]) : (a[d][c].total = null, a[d][c].cum = null) }; w.prototype.cleanStacks = function () { var a, d, c; if (!this.isXAxis) for (d in this.oldStacks && (a = this.stacks = this.oldStacks), a) for (c in a[d]) a[d][c].cum = a[d][c].total }; a.prototype.setStackedPoints = function () {
                if (this.options.stacking && (!0 === this.visible ||
                    !1 === this.chart.options.chart.ignoreHiddenSeries)) {
                    var a = this.processedXData, d = this.processedYData, c = [], g = d.length, h = this.options, b = h.threshold, e = h.startFromThreshold ? b : 0, r = h.stack, h = h.stacking, p = this.stackKey, w = "-" + p, t = this.negStacks, A = this.yAxis, H = A.stacks, x = A.oldStacks, l, z, u, D, G, k, y; A.stacksTouched += 1; for (G = 0; G < g; G++) k = a[G], y = d[G], l = this.getStackIndicator(l, k, this.index), D = l.key, u = (z = t && y < (e ? 0 : b)) ? w : p, H[u] || (H[u] = {}), H[u][k] || (x[u] && x[u][k] ? (H[u][k] = x[u][k], H[u][k].total = null) : H[u][k] = new B(A,
                        A.options.stackLabels, z, k, r)), u = H[u][k], null !== y && (u.points[D] = u.points[this.index] = [n(u.cum, e)], q(u.cum) || (u.base = D), u.touched = A.stacksTouched, 0 < l.index && !1 === this.singleStacks && (u.points[D][0] = u.points[this.index + "," + k + ",0"][0])), "percent" === h ? (z = z ? p : w, t && H[z] && H[z][k] ? (z = H[z][k], u.total = z.total = Math.max(z.total, u.total) + Math.abs(y) || 0) : u.total = F(u.total + (Math.abs(y) || 0))) : u.total = F(u.total + (y || 0)), u.cum = n(u.cum, e) + (y || 0), null !== y && (u.points[D].push(u.cum), c[G] = u.cum); "percent" === h && (A.usePercentage =
                            !0); this.stackedYData = c; A.oldStacks = {}
                }
            }; a.prototype.setPercentStacks = function () { var a = this, d = a.stackKey, c = a.yAxis.stacks, h = a.processedXData, n; g([d, "-" + d], function (b) { for (var d = h.length, f, g; d--;) if (f = h[d], n = a.getStackIndicator(n, f, a.index, b), f = (g = c[b] && c[b][f]) && g.points[n.key]) g = g.total ? 100 / g.total : 0, f[0] = F(f[0] * g), f[1] = F(f[1] * g), a.stackedYData[d] = f[1] }) }; a.prototype.getStackIndicator = function (a, d, c, g) { !q(a) || a.x !== d || g && a.key !== g ? a = { x: d, index: 0, key: g } : a.index++; a.key = [c, d, a.index].join(); return a }
    })(J);
    (function (a) {
        var B = a.addEvent, w = a.Axis, D = a.createElement, F = a.css, q = a.defined, d = a.each, g = a.erase, h = a.extend, n = a.fireEvent, m = a.inArray, f = a.isNumber, c = a.isObject, E = a.merge, v = a.pick, b = a.Point, e = a.Series, r = a.seriesTypes, p = a.setAnimation, I = a.splat; h(a.Chart.prototype, {
            addSeries: function (a, b, c) { var d, e = this; a && (b = v(b, !0), n(e, "addSeries", { options: a }, function () { d = e.initSeries(a); e.isDirtyLegend = !0; e.linkSeries(); b && e.redraw(c) })); return d }, addAxis: function (a, b, c, d) {
                var e = b ? "xAxis" : "yAxis", f = this.options; a =
                    E(a, { index: this[e].length, isX: b }); new w(this, a); f[e] = I(f[e] || {}); f[e].push(a); v(c, !0) && this.redraw(d)
            }, showLoading: function (a) {
                var b = this, c = b.options, d = b.loadingDiv, e = function () { d && F(d, { left: b.plotLeft + "px", top: b.plotTop + "px", width: b.plotWidth + "px", height: b.plotHeight + "px" }) }; d || (b.loadingDiv = d = D("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, b.container), b.loadingSpan = D("span", { className: "highcharts-loading-inner" }, null, d), B(b, "redraw", e)); d.className = "highcharts-loading";
                b.loadingSpan.innerHTML = a || c.lang.loading; b.loadingShown = !0; e()
            }, hideLoading: function () { var a = this.loadingDiv; a && (a.className = "highcharts-loading highcharts-loading-hidden"); this.loadingShown = !1 }, propsRequireDirtyBox: "backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "), propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions".split(" "),
            update: function (a, b) {
                var c, e = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle" }, g = a.chart, h, p; if (g) { E(!0, this.options.chart, g); "className" in g && this.setClassName(g.className); if ("inverted" in g || "polar" in g) this.propFromSeries(), h = !0; for (c in g) g.hasOwnProperty(c) && (-1 !== m("chart." + c, this.propsRequireUpdateSeries) && (p = !0), -1 !== m(c, this.propsRequireDirtyBox) && (this.isDirtyBox = !0)) } for (c in a) {
                    if (this[c] && "function" === typeof this[c].update) this[c].update(a[c], !1); else if ("function" === typeof this[e[c]]) this[e[c]](a[c]);
                    "chart" !== c && -1 !== m(c, this.propsRequireUpdateSeries) && (p = !0)
                } a.plotOptions && E(!0, this.options.plotOptions, a.plotOptions); d(["xAxis", "yAxis", "series"], function (b) { a[b] && d(I(a[b]), function (a, c) { (c = q(a.id) && this.get(a.id) || this[b][c]) && c.coll === b && c.update(a, !1) }, this) }, this); h && d(this.axes, function (a) { a.update({}, !1) }); p && d(this.series, function (a) { a.update({}, !1) }); a.loading && E(!0, this.options.loading, a.loading); c = g && g.width; g = g && g.height; f(c) && c !== this.chartWidth || f(g) && g !== this.chartHeight ? this.setSize(c,
                    g) : v(b, !0) && this.redraw()
            }, setSubtitle: function (a) { this.setTitle(void 0, a) }
        }); h(b.prototype, {
            update: function (a, b, d, e) {
                function f() {
                    g.applyOptions(a); null === g.y && h && (g.graphic = h.destroy()); c(a, !0) && (h && h.element && a && a.marker && a.marker.symbol && (g.graphic = h.destroy()), a && a.dataLabels && g.dataLabel && (g.dataLabel = g.dataLabel.destroy())); p = g.index; m.updateParallelArrays(g, p); t.data[p] = c(t.data[p], !0) || c(a, !0) ? g.options : a; m.isDirty = m.isDirtyData = !0; !m.fixedBox && m.hasCartesianSeries && (k.isDirtyBox = !0); "point" ===
                        t.legendType && (k.isDirtyLegend = !0); b && k.redraw(d)
                } var g = this, m = g.series, h = g.graphic, p, k = m.chart, t = m.options; b = v(b, !0); !1 === e ? f() : g.firePointEvent("update", { options: a }, f)
            }, remove: function (a, b) { this.series.removePoint(m(this, this.series.data), a, b) }
        }); h(e.prototype, {
            addPoint: function (a, b, c, d) {
                var e = this.options, f = this.data, g = this.chart, m = this.xAxis, m = m && m.hasNames && m.names, h = e.data, k, p, t = this.xData, n, r; b = v(b, !0); k = { series: this }; this.pointClass.prototype.applyOptions.apply(k, [a]); r = k.x; n = t.length; if (this.requireSorting &&
                    r < t[n - 1]) for (p = !0; n && t[n - 1] > r;) n--; this.updateParallelArrays(k, "splice", n, 0, 0); this.updateParallelArrays(k, n); m && k.name && (m[r] = k.name); h.splice(n, 0, a); p && (this.data.splice(n, 0, null), this.processData()); "point" === e.legendType && this.generatePoints(); c && (f[0] && f[0].remove ? f[0].remove(!1) : (f.shift(), this.updateParallelArrays(k, "shift"), h.shift())); this.isDirtyData = this.isDirty = !0; b && g.redraw(d)
            }, removePoint: function (a, b, c) {
                var d = this, e = d.data, f = e[a], g = d.points, m = d.chart, h = function () {
                    g && g.length === e.length &&
                        g.splice(a, 1); e.splice(a, 1); d.options.data.splice(a, 1); d.updateParallelArrays(f || { series: d }, "splice", a, 1); f && f.destroy(); d.isDirty = !0; d.isDirtyData = !0; b && m.redraw()
                }; p(c, m); b = v(b, !0); f ? f.firePointEvent("remove", null, h) : h()
            }, remove: function (a, b, c) { function d() { e.destroy(); f.isDirtyLegend = f.isDirtyBox = !0; f.linkSeries(); v(a, !0) && f.redraw(b) } var e = this, f = e.chart; !1 !== c ? n(e, "remove", null, d) : d() }, update: function (a, b) {
                var c = this, e = this.chart, f = this.userOptions, g = this.oldType || this.type, m = a.type || f.type ||
                    e.options.chart.type, p = r[g].prototype, n = ["group", "markerGroup", "dataLabelsGroup"], k; if (m && m !== g || void 0 !== a.zIndex) n.length = 0; d(n, function (a) { n[a] = c[a]; delete c[a] }); a = E(f, { animation: !1, index: this.index, pointStart: this.xData[0] }, { data: this.options.data }, a); this.remove(!1, null, !1); for (k in p) this[k] = void 0; h(this, r[m || g].prototype); d(n, function (a) { c[a] = n[a] }); this.init(e, a); this.oldType = g; e.linkSeries(); v(b, !0) && e.redraw(!1)
            }
        }); h(w.prototype, {
            update: function (a, b) {
                var c = this.chart; a = c.options[this.coll][this.options.index] =
                    E(this.userOptions, a); this.destroy(!0); this.init(c, h(a, { events: void 0 })); c.isDirtyBox = !0; v(b, !0) && c.redraw()
            }, remove: function (a) { for (var b = this.chart, c = this.coll, e = this.series, f = e.length; f--;) e[f] && e[f].remove(!1); g(b.axes, this); g(b[c], this); b.options[c].splice(this.options.index, 1); d(b[c], function (a, b) { a.options.index = b }); this.destroy(); b.isDirtyBox = !0; v(a, !0) && b.redraw() }, setTitle: function (a, b) { this.update({ title: a }, b) }, setCategories: function (a, b) { this.update({ categories: a }, b) }
        })
    })(J); (function (a) {
        var B =
            a.each, w = a.map, D = a.pick, F = a.Series, q = a.seriesType; q("area", "line", { softThreshold: !1, threshold: 0 }, {
                singleStacks: !1, getStackPoints: function () {
                    var a = [], g = [], h = this.xAxis, n = this.yAxis, m = n.stacks[this.stackKey], f = {}, c = this.points, q = this.index, v = n.series, b = v.length, e, r = D(n.options.reversedStacks, !0) ? 1 : -1, p, I; if (this.options.stacking) {
                        for (p = 0; p < c.length; p++) f[c[p].x] = c[p]; for (I in m) null !== m[I].total && g.push(I); g.sort(function (a, b) { return a - b }); e = w(v, function () { return this.visible }); B(g, function (c, d) {
                            var t =
                                0, x, l; if (f[c] && !f[c].isNull) a.push(f[c]), B([-1, 1], function (a) { var h = 1 === a ? "rightNull" : "leftNull", n = 0, t = m[g[d + a]]; if (t) for (p = q; 0 <= p && p < b;) x = t.points[p], x || (p === q ? f[c][h] = !0 : e[p] && (l = m[c].points[p]) && (n -= l[1] - l[0])), p += r; f[c][1 === a ? "rightCliff" : "leftCliff"] = n }); else { for (p = q; 0 <= p && p < b;) { if (x = m[c].points[p]) { t = x[1]; break } p += r } t = n.translate(t, 0, 1, 0, 1); a.push({ isNull: !0, plotX: h.translate(c, 0, 0, 0, 1), x: c, plotY: t, yBottom: t }) }
                        })
                    } return a
                }, getGraphPath: function (a) {
                    var d = F.prototype.getGraphPath, h = this.options,
                        n = h.stacking, m = this.yAxis, f, c, q = [], v = [], b = this.index, e, r = m.stacks[this.stackKey], p = h.threshold, w = m.getThreshold(h.threshold), t, h = h.connectNulls || "percent" === n, A = function (c, d, f) { var g = a[c]; c = n && r[g.x].points[b]; var l = g[f + "Null"] || 0; f = g[f + "Cliff"] || 0; var h, t, g = !0; f || l ? (h = (l ? c[0] : c[1]) + f, t = c[0] + f, g = !!l) : !n && a[d] && a[d].isNull && (h = t = p); void 0 !== h && (v.push({ plotX: e, plotY: null === h ? w : m.getThreshold(h), isNull: g, isCliff: !0 }), q.push({ plotX: e, plotY: null === t ? w : m.getThreshold(t), doCurve: !1 })) }; a = a || this.points;
                    n && (a = this.getStackPoints()); for (f = 0; f < a.length; f++) if (c = a[f].isNull, e = D(a[f].rectPlotX, a[f].plotX), t = D(a[f].yBottom, w), !c || h) h || A(f, f - 1, "left"), c && !n && h || (v.push(a[f]), q.push({ x: f, plotX: e, plotY: t })), h || A(f, f + 1, "right"); f = d.call(this, v, !0, !0); q.reversed = !0; c = d.call(this, q, !0, !0); c.length && (c[0] = "L"); c = f.concat(c); d = d.call(this, v, !1, h); c.xMap = f.xMap; this.areaPath = c; return d
                }, drawGraph: function () {
                    this.areaPath = []; F.prototype.drawGraph.apply(this); var a = this, g = this.areaPath, h = this.options, n = [["area",
                        "highcharts-area"]]; B(this.zones, function (a, d) { n.push(["zone-area-" + d, "highcharts-area highcharts-zone-area-" + d + " " + a.className]) }); B(n, function (d) { var f = d[0], c = a[f]; c ? (c.endX = g.xMap, c.animate({ d: g })) : (c = a[f] = a.chart.renderer.path(g).addClass(d[1]).attr({ zIndex: 0 }).add(a.group), c.isArea = !0); c.startX = g.xMap; c.shiftUnit = h.step ? 2 : 1 })
                }, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle
            })
    })(J); (function (a) {
        var B = a.pick; a = a.seriesType; a("spline", "line", {}, {
            getPointSpline: function (a, D, F) {
                var q = D.plotX, d =
                    D.plotY, g = a[F - 1]; F = a[F + 1]; var h, n, m, f; if (g && !g.isNull && !1 !== g.doCurve && !D.isCliff && F && !F.isNull && !1 !== F.doCurve && !D.isCliff) { a = g.plotY; m = F.plotX; F = F.plotY; var c = 0; h = (1.5 * q + g.plotX) / 2.5; n = (1.5 * d + a) / 2.5; m = (1.5 * q + m) / 2.5; f = (1.5 * d + F) / 2.5; m !== h && (c = (f - n) * (m - q) / (m - h) + d - f); n += c; f += c; n > a && n > d ? (n = Math.max(a, d), f = 2 * d - n) : n < a && n < d && (n = Math.min(a, d), f = 2 * d - n); f > F && f > d ? (f = Math.max(F, d), n = 2 * d - f) : f < F && f < d && (f = Math.min(F, d), n = 2 * d - f); D.rightContX = m; D.rightContY = f } D = ["C", B(g.rightContX, g.plotX), B(g.rightContY, g.plotY),
                        B(h, q), B(n, d), q, d]; g.rightContX = g.rightContY = null; return D
            }
        })
    })(J); (function (a) { var B = a.seriesTypes.area.prototype, w = a.seriesType; w("areaspline", "spline", a.defaultPlotOptions.area, { getStackPoints: B.getStackPoints, getGraphPath: B.getGraphPath, setStackCliffs: B.setStackCliffs, drawGraph: B.drawGraph, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle }) })(J); (function (a) {
        var B = a.animObject, w = a.each, D = a.extend, F = a.isNumber, q = a.merge, d = a.pick, g = a.Series, h = a.seriesType, n = a.svg; h("column", "line", {
            borderRadius: 0,
            groupPadding: .2, marker: null, pointPadding: .1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { halo: !1 } }, dataLabels: { align: null, verticalAlign: null, y: null }, softThreshold: !1, startFromThreshold: !0, stickyTracking: !1, tooltip: { distance: 6 }, threshold: 0
        }, {
                cropShoulder: 0, directTouch: !0, trackerGroups: ["group", "dataLabelsGroup"], negStacks: !0, init: function () { g.prototype.init.apply(this, arguments); var a = this, d = a.chart; d.hasRendered && w(d.series, function (c) { c.type === a.type && (c.isDirty = !0) }) }, getColumnMetrics: function () {
                    var a =
                        this, f = a.options, c = a.xAxis, g = a.yAxis, h = c.reversed, b, e = {}, n = 0; !1 === f.grouping ? n = 1 : w(a.chart.series, function (c) { var d = c.options, f = c.yAxis, l; c.type === a.type && c.visible && g.len === f.len && g.pos === f.pos && (d.stacking ? (b = c.stackKey, void 0 === e[b] && (e[b] = n++), l = e[b]) : !1 !== d.grouping && (l = n++), c.columnIndex = l) }); var p = Math.min(Math.abs(c.transA) * (c.ordinalSlope || f.pointRange || c.closestPointRange || c.tickInterval || 1), c.len), q = p * f.groupPadding, t = (p - 2 * q) / (n || 1), f = Math.min(f.maxPointWidth || c.len, d(f.pointWidth, t * (1 -
                            2 * f.pointPadding))); a.columnMetrics = { width: f, offset: (t - f) / 2 + (q + ((a.columnIndex || 0) + (h ? 1 : 0)) * t - p / 2) * (h ? -1 : 1) }; return a.columnMetrics
                }, crispCol: function (a, d, c, g) { var f = this.chart, b = this.borderWidth, e = -(b % 2 ? .5 : 0), b = b % 2 ? .5 : 1; f.inverted && f.renderer.isVML && (b += 1); c = Math.round(a + c) + e; a = Math.round(a) + e; g = Math.round(d + g) + b; e = .5 >= Math.abs(d) && .5 < g; d = Math.round(d) + b; g -= d; e && g && (--d, g += 1); return { x: a, y: d, width: c - a, height: g } }, translate: function () {
                    var a = this, f = a.chart, c = a.options, h = a.dense = 2 > a.closestPointRange *
                        a.xAxis.transA, h = a.borderWidth = d(c.borderWidth, h ? 0 : 1), n = a.yAxis, b = a.translatedThreshold = n.getThreshold(c.threshold), e = d(c.minPointLength, 5), r = a.getColumnMetrics(), p = r.width, q = a.barW = Math.max(p, 1 + 2 * h), t = a.pointXOffset = r.offset; f.inverted && (b -= .5); c.pointPadding && (q = Math.ceil(q)); g.prototype.translate.apply(a); w(a.points, function (c) {
                            var g = d(c.yBottom, b), h = 999 + Math.abs(g), h = Math.min(Math.max(-h, c.plotY), n.len + h), l = c.plotX + t, m = q, r = Math.min(h, g), A, v = Math.max(h, g) - r; Math.abs(v) < e && e && (v = e, A = !n.reversed &&
                                !c.negative || n.reversed && c.negative, r = Math.abs(r - b) > e ? g - e : b - (A ? e : 0)); c.barX = l; c.pointWidth = p; c.tooltipPos = f.inverted ? [n.len + n.pos - f.plotLeft - h, a.xAxis.len - l - m / 2, v] : [l + m / 2, h + n.pos - f.plotTop, v]; c.shapeType = "rect"; c.shapeArgs = a.crispCol.apply(a, c.isNull ? [c.plotX, n.len / 2, 0, 0] : [l, r, m, v])
                        })
                }, getSymbol: a.noop, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle, drawGraph: function () { this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data") }, drawPoints: function () {
                    var a = this, d = this.chart, c = d.renderer,
                        g = a.options.animationLimit || 250, h; w(a.points, function (b) { var e = b.graphic; if (F(b.plotY) && null !== b.y) { h = b.shapeArgs; if (e) e[d.pointCount < g ? "animate" : "attr"](q(h)); else b.graphic = e = c[b.shapeType](h).add(b.group || a.group); e.addClass(b.getClassName(), !0) } else e && (b.graphic = e.destroy()) })
                }, animate: function (a) {
                    var d = this, c = this.yAxis, g = d.options, h = this.chart.inverted, b = {}; n && (a ? (b.scaleY = .001, a = Math.min(c.pos + c.len, Math.max(c.pos, c.toPixels(g.threshold))), h ? b.translateX = a - c.len : b.translateY = a, d.group.attr(b)) :
                        (b[h ? "translateX" : "translateY"] = c.pos, d.group.animate(b, D(B(d.options.animation), { step: function (a, b) { d.group.attr({ scaleY: Math.max(.001, b.pos) }) } })), d.animate = null))
                }, remove: function () { var a = this, d = a.chart; d.hasRendered && w(d.series, function (c) { c.type === a.type && (c.isDirty = !0) }); g.prototype.remove.apply(a, arguments) }
            })
    })(J); (function (a) { a = a.seriesType; a("bar", "column", null, { inverted: !0 }) })(J); (function (a) {
        var B = a.Series; a = a.seriesType; a("scatter", "line", {
            lineWidth: 0, marker: { enabled: !0 }, tooltip: {
                headerFormat: '\x3cspan class\x3d"highcharts-color-{point.colorIndex}"\x3e\u25cf\x3c/span\x3e \x3cspan class\x3d"highcharts-header"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',
                pointFormat: "x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"
            }
        }, { sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: !1, kdDimensions: 2, drawGraph: function () { this.options.lineWidth && B.prototype.drawGraph.call(this) } })
    })(J); (function (a) {
        var B = a.pick, w = a.relativeLength; a.CenteredSeriesMixin = {
            getCenter: function () {
                var a = this.options, F = this.chart, q = 2 * (a.slicedOffset || 0), d = F.plotWidth - 2 * q, F = F.plotHeight -
                    2 * q, g = a.center, g = [B(g[0], "50%"), B(g[1], "50%"), a.size || "100%", a.innerSize || 0], h = Math.min(d, F), n, m; for (n = 0; 4 > n; ++n) m = g[n], a = 2 > n || 2 === n && /%$/.test(m), g[n] = w(m, [d, F, h, g[2]][n]) + (a ? q : 0); g[3] > g[2] && (g[3] = g[2]); return g
            }
        }
    })(J); (function (a) {
        var B = a.addEvent, w = a.defined, D = a.each, F = a.extend, q = a.inArray, d = a.noop, g = a.pick, h = a.Point, n = a.Series, m = a.seriesType, f = a.setAnimation; m("pie", "line", {
            center: [null, null], clip: !1, colorByPoint: !0, dataLabels: {
                distance: 30, enabled: !0, formatter: function () {
                    return null === this.y ?
                        void 0 : this.point.name
                }, x: 0
            }, ignoreHiddenPoint: !0, legendType: "point", marker: null, size: null, showInLegend: !1, slicedOffset: 10, stickyTracking: !1, tooltip: { followPointer: !0 }
        }, {
                isCartesian: !1, requireSorting: !1, directTouch: !0, noSharedTooltip: !0, trackerGroups: ["group", "dataLabelsGroup"], axisTypes: [], pointAttribs: a.seriesTypes.column.prototype.pointAttribs, animate: function (a) {
                    var c = this, d = c.points, b = c.startAngleRad; a || (D(d, function (a) {
                        var d = a.graphic, e = a.shapeArgs; d && (d.attr({
                            r: a.startR || c.center[3] / 2, start: b,
                            end: b
                        }), d.animate({ r: e.r, start: e.start, end: e.end }, c.options.animation))
                    }), c.animate = null)
                }, updateTotals: function () { var a, d = 0, f = this.points, b = f.length, e, g = this.options.ignoreHiddenPoint; for (a = 0; a < b; a++) e = f[a], 0 > e.y && (e.y = null), d += g && !e.visible ? 0 : e.y; this.total = d; for (a = 0; a < b; a++) e = f[a], e.percentage = 0 < d && (e.visible || !g) ? e.y / d * 100 : 0, e.total = d }, generatePoints: function () { n.prototype.generatePoints.call(this); this.updateTotals() }, translate: function (a) {
                    this.generatePoints(); var c = 0, d = this.options, b = d.slicedOffset,
                        e = b + (d.borderWidth || 0), f, h, m, n = d.startAngle || 0, q = this.startAngleRad = Math.PI / 180 * (n - 90), n = (this.endAngleRad = Math.PI / 180 * (g(d.endAngle, n + 360) - 90)) - q, H = this.points, x = d.dataLabels.distance, d = d.ignoreHiddenPoint, l, z = H.length, u; a || (this.center = a = this.getCenter()); this.getX = function (b, c) { m = Math.asin(Math.min((b - a[1]) / (a[2] / 2 + x), 1)); return a[0] + (c ? -1 : 1) * Math.cos(m) * (a[2] / 2 + x) }; for (l = 0; l < z; l++) {
                            u = H[l]; f = q + c * n; if (!d || u.visible) c += u.percentage / 100; h = q + c * n; u.shapeType = "arc"; u.shapeArgs = {
                                x: a[0], y: a[1], r: a[2] /
                                2, innerR: a[3] / 2, start: Math.round(1E3 * f) / 1E3, end: Math.round(1E3 * h) / 1E3
                            }; m = (h + f) / 2; m > 1.5 * Math.PI ? m -= 2 * Math.PI : m < -Math.PI / 2 && (m += 2 * Math.PI); u.slicedTranslation = { translateX: Math.round(Math.cos(m) * b), translateY: Math.round(Math.sin(m) * b) }; f = Math.cos(m) * a[2] / 2; h = Math.sin(m) * a[2] / 2; u.tooltipPos = [a[0] + .7 * f, a[1] + .7 * h]; u.half = m < -Math.PI / 2 || m > Math.PI / 2 ? 1 : 0; u.angle = m; e = Math.min(e, x / 5); u.labelPos = [a[0] + f + Math.cos(m) * x, a[1] + h + Math.sin(m) * x, a[0] + f + Math.cos(m) * e, a[1] + h + Math.sin(m) * e, a[0] + f, a[1] + h, 0 > x ? "center" : u.half ?
                                "right" : "left", m]
                        }
                }, drawGraph: null, drawPoints: function () { var a = this, d = a.chart.renderer, f, b, e; D(a.points, function (c) { null !== c.y && (b = c.graphic, e = c.shapeArgs, f = c.getTranslate(), b ? b.setRadialReference(a.center).animate(F(e, f)) : (c.graphic = b = d[c.shapeType](e).setRadialReference(a.center).attr(f).add(a.group), c.visible || b.attr({ visibility: "hidden" })), b.addClass(c.getClassName())) }) }, searchPoint: d, sortByAngle: function (a, d) { a.sort(function (a, b) { return void 0 !== a.angle && (b.angle - a.angle) * d }) }, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle,
                getCenter: a.CenteredSeriesMixin.getCenter, getSymbol: d
            }, {
                init: function () { h.prototype.init.apply(this, arguments); var a = this, d; a.name = g(a.name, "Slice"); d = function (c) { a.slice("select" === c.type) }; B(a, "select", d); B(a, "unselect", d); return a }, setVisible: function (a, d) {
                    var c = this, b = c.series, e = b.chart, f = b.options.ignoreHiddenPoint; d = g(d, f); a !== c.visible && (c.visible = c.options.visible = a = void 0 === a ? !c.visible : a, b.options.data[q(c, b.data)] = c.options, D(["graphic", "dataLabel", "connector", "shadowGroup"], function (b) {
                        if (c[b]) c[b][a ?
                            "show" : "hide"](!0)
                    }), c.legendItem && e.legend.colorizeItem(c, a), a || "hover" !== c.state || c.setState(""), f && (b.isDirty = !0), d && e.redraw())
                }, slice: function (a, d, h) { var b = this.series; f(h, b.chart); g(d, !0); this.sliced = this.options.sliced = w(a) ? a : !this.sliced; b.options.data[q(this, b.data)] = this.options; this.graphic.animate(this.getTranslate()) }, getTranslate: function () { return this.sliced ? this.slicedTranslation : { translateX: 0, translateY: 0 } }, haloPath: function (a) {
                    var c = this.shapeArgs; return this.sliced || !this.visible ?
                        [] : this.series.chart.renderer.symbols.arc(c.x, c.y, c.r + a, c.r + a, { innerR: this.shapeArgs.r, start: c.start, end: c.end })
                }
            })
    })(J); (function (a) {
        var B = a.addEvent, w = a.arrayMax, D = a.defined, F = a.each, q = a.extend, d = a.format, g = a.map, h = a.merge, n = a.noop, m = a.pick, f = a.relativeLength, c = a.Series, E = a.seriesTypes, v = a.stableSort; a.distribute = function (a, c) {
            function b(a, b) { return a.target - b.target } var d, e = !0, f = a, h = [], m; m = 0; for (d = a.length; d--;) m += a[d].size; if (m > c) {
                v(a, function (a, b) { return (b.rank || 0) - (a.rank || 0) }); for (m = d = 0; m <=
                    c;) m += a[d].size, d++; h = a.splice(d - 1, a.length)
            } v(a, b); for (a = g(a, function (a) { return { size: a.size, targets: [a.target] } }); e;) { for (d = a.length; d--;) e = a[d], m = (Math.min.apply(0, e.targets) + Math.max.apply(0, e.targets)) / 2, e.pos = Math.min(Math.max(0, m - e.size / 2), c - e.size); d = a.length; for (e = !1; d--;) 0 < d && a[d - 1].pos + a[d - 1].size > a[d].pos && (a[d - 1].size += a[d].size, a[d - 1].targets = a[d - 1].targets.concat(a[d].targets), a[d - 1].pos + a[d - 1].size > c && (a[d - 1].pos = c - a[d - 1].size), a.splice(d, 1), e = !0) } d = 0; F(a, function (a) {
                var b = 0; F(a.targets,
                    function () { f[d].pos = a.pos + b; b += f[d].size; d++ })
            }); f.push.apply(f, h); v(f, b)
        }; c.prototype.drawDataLabels = function () {
            var a = this, c = a.options, f = c.dataLabels, g = a.points, n, t, q = a.hasRendered || 0, v, x, l = m(f.defer, !0), z = a.chart.renderer; if (f.enabled || a._hasPointLabels) a.dlProcessOptions && a.dlProcessOptions(f), x = a.plotGroup("dataLabelsGroup", "data-labels", l && !q ? "hidden" : "visible", f.zIndex || 6), l && (x.attr({ opacity: +q }), q || B(a, "afterAnimate", function () {
                a.visible && x.show(!0); x[c.animation ? "animate" : "attr"]({ opacity: 1 },
                    { duration: 200 })
            })), t = f, F(g, function (b) {
                var c, e = b.dataLabel, g, l, p, q = b.connector, r = !e; n = b.dlOptions || b.options && b.options.dataLabels; if (c = m(n && n.enabled, t.enabled) && null !== b.y) for (l in f = h(t, n), g = b.getLabelConfig(), v = f.format ? d(f.format, g) : f.formatter.call(g, f), p = f.rotation, g = { r: f.borderRadius || 0, rotation: p, padding: f.padding, zIndex: 1 }, g) void 0 === g[l] && delete g[l]; !e || c && D(v) ? c && D(v) && (e ? g.text = v : (e = b.dataLabel = z[p ? "text" : "label"](v, 0, -9999, f.shape, null, null, f.useHTML, null, "data-label"), e.addClass("highcharts-data-label-color-" +
                    b.colorIndex + " " + (f.className || "") + (f.useHTML ? "highcharts-tracker" : ""))), e.attr(g), e.added || e.add(x), a.alignDataLabel(b, e, f, null, r)) : (b.dataLabel = e.destroy(), q && (b.connector = q.destroy()))
            })
        }; c.prototype.alignDataLabel = function (a, c, d, f, g) {
            var b = this.chart, e = b.inverted, h = m(a.plotX, -9999), n = m(a.plotY, -9999), l = c.getBBox(), p, r = d.rotation, v = d.align, w = this.visible && (a.series.forceDL || b.isInsidePlot(h, Math.round(n), e) || f && b.isInsidePlot(h, e ? f.x + 1 : f.y + f.height - 1, e)), k = "justify" === m(d.overflow, "justify"); w &&
                (p = b.renderer.fontMetrics(void 0, c).b, f = q({ x: e ? b.plotWidth - n : h, y: Math.round(e ? b.plotHeight - h : n), width: 0, height: 0 }, f), q(d, { width: l.width, height: l.height }), r ? (k = !1, e = b.renderer.rotCorr(p, r), e = { x: f.x + d.x + f.width / 2 + e.x, y: f.y + d.y + { top: 0, middle: .5, bottom: 1 }[d.verticalAlign] * f.height }, c[g ? "attr" : "animate"](e).attr({ align: v }), h = (r + 720) % 360, h = 180 < h && 360 > h, "left" === v ? e.y -= h ? l.height : 0 : "center" === v ? (e.x -= l.width / 2, e.y -= l.height / 2) : "right" === v && (e.x -= l.width, e.y -= h ? 0 : l.height)) : (c.align(d, null, f), e = c.alignAttr),
                    k ? this.justifyDataLabel(c, d, e, l, f, g) : m(d.crop, !0) && (w = b.isInsidePlot(e.x, e.y) && b.isInsidePlot(e.x + l.width, e.y + l.height)), d.shape && !r && c.attr({ anchorX: a.plotX, anchorY: a.plotY })); w || (c.attr({ y: -9999 }), c.placed = !1)
        }; c.prototype.justifyDataLabel = function (a, c, d, f, g, h) {
            var b = this.chart, e = c.align, m = c.verticalAlign, l, n, p = a.box ? 0 : a.padding || 0; l = d.x + p; 0 > l && ("right" === e ? c.align = "left" : c.x = -l, n = !0); l = d.x + f.width - p; l > b.plotWidth && ("left" === e ? c.align = "right" : c.x = b.plotWidth - l, n = !0); l = d.y + p; 0 > l && ("bottom" === m ? c.verticalAlign =
                "top" : c.y = -l, n = !0); l = d.y + f.height - p; l > b.plotHeight && ("top" === m ? c.verticalAlign = "bottom" : c.y = b.plotHeight - l, n = !0); n && (a.placed = !h, a.align(c, null, g))
        }; E.pie && (E.pie.prototype.drawDataLabels = function () {
            var b = this, d = b.data, f, h = b.chart, n = b.options.dataLabels, q = m(n.connectorPadding, 10), A = m(n.connectorWidth, 1), v = h.plotWidth, x = h.plotHeight, l, z = n.distance, u = b.center, E = u[2] / 2, B = u[1], k = 0 < z, y, D, J, O, R = [[], []], K, M, C, P, Q = [0, 0, 0, 0]; b.visible && (n.enabled || b._hasPointLabels) && (F(d, function (a) {
                a.dataLabel && a.visible &&
                    a.dataLabel.shortened && (a.dataLabel.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), a.dataLabel.shortened = !1)
            }), c.prototype.drawDataLabels.apply(b), F(d, function (a) { a.dataLabel && a.visible && (R[a.half].push(a), a.dataLabel._pos = null) }), F(R, function (c, d) {
                var e, l, k = c.length, m, p, t; if (k) for (b.sortByAngle(c, d - .5), 0 < z && (e = Math.max(0, B - E - z), l = Math.min(B + E + z, h.plotHeight), m = g(c, function (a) { if (a.dataLabel) return t = a.dataLabel.getBBox().height || 21, { target: a.labelPos[1] - e + t / 2, size: t, rank: a.y } }), a.distribute(m,
                    l + t - e)), P = 0; P < k; P++) f = c[P], J = f.labelPos, y = f.dataLabel, C = !1 === f.visible ? "hidden" : "inherit", p = J[1], m ? void 0 === m[P].pos ? C = "hidden" : (O = m[P].size, M = e + m[P].pos) : M = p, K = n.justify ? u[0] + (d ? -1 : 1) * (E + z) : b.getX(M < e + 2 || M > l - 2 ? p : M, d), y._attr = { visibility: C, align: J[6] }, y._pos = { x: K + n.x + ({ left: q, right: -q }[J[6]] || 0), y: M + n.y - 10 }, J.x = K, J.y = M, null === b.options.size && (D = y.getBBox().width, p = null, K - D < q ? (p = Math.round(D - K + q), Q[3] = Math.max(p, Q[3])) : K + D > v - q && (p = Math.round(K + D - v + q), Q[1] = Math.max(p, Q[1])), 0 > M - O / 2 ? Q[0] = Math.max(Math.round(-M +
                        O / 2), Q[0]) : M + O / 2 > x && (Q[2] = Math.max(Math.round(M + O / 2 - x), Q[2])), y.sideOverflow = p)
            }), 0 === w(Q) || this.verifyDataLabelOverflow(Q)) && (this.placeDataLabels(), k && A && F(this.points, function (a) { var c; l = a.connector; if ((y = a.dataLabel) && y._pos && a.visible) { C = y._attr.visibility; if (c = !l) a.connector = l = h.renderer.path().addClass("highcharts-data-label-connector highcharts-color-" + a.colorIndex).add(b.dataLabelsGroup); l[c ? "attr" : "animate"]({ d: b.connectorPath(a.labelPos) }); l.attr("visibility", C) } else l && (a.connector = l.destroy()) }))
        },
            E.pie.prototype.connectorPath = function (a) { var b = a.x, c = a.y; return m(this.options.dataLabels.softConnector, !0) ? ["M", b + ("left" === a[6] ? 5 : -5), c, "C", b, c, 2 * a[2] - a[4], 2 * a[3] - a[5], a[2], a[3], "L", a[4], a[5]] : ["M", b + ("left" === a[6] ? 5 : -5), c, "L", a[2], a[3], "L", a[4], a[5]] }, E.pie.prototype.placeDataLabels = function () {
                F(this.points, function (a) {
                    var b = a.dataLabel; b && a.visible && ((a = b._pos) ? (b.sideOverflow && (b._attr.width = b.getBBox().width - b.sideOverflow, b.css({ width: b._attr.width + "px", textOverflow: "ellipsis" }), b.shortened =
                        !0), b.attr(b._attr), b[b.moved ? "animate" : "attr"](a), b.moved = !0) : b && b.attr({ y: -9999 }))
                }, this)
            }, E.pie.prototype.alignDataLabel = n, E.pie.prototype.verifyDataLabelOverflow = function (a) {
                var b = this.center, c = this.options, d = c.center, g = c.minSize || 80, h, m; null !== d[0] ? h = Math.max(b[2] - Math.max(a[1], a[3]), g) : (h = Math.max(b[2] - a[1] - a[3], g), b[0] += (a[3] - a[1]) / 2); null !== d[1] ? h = Math.max(Math.min(h, b[2] - Math.max(a[0], a[2])), g) : (h = Math.max(Math.min(h, b[2] - a[0] - a[2]), g), b[1] += (a[0] - a[2]) / 2); h < b[2] ? (b[2] = h, b[3] = Math.min(f(c.innerSize ||
                    0, h), h), this.translate(b), this.drawDataLabels && this.drawDataLabels()) : m = !0; return m
            }); E.column && (E.column.prototype.alignDataLabel = function (a, d, f, g, n) {
                var b = this.chart.inverted, e = a.series, p = a.dlBox || a.shapeArgs, q = m(a.below, a.plotY > m(this.translatedThreshold, e.yAxis.len)), l = m(f.inside, !!this.options.stacking); p && (g = h(p), 0 > g.y && (g.height += g.y, g.y = 0), p = g.y + g.height - e.yAxis.len, 0 < p && (g.height -= p), b && (g = { x: e.yAxis.len - g.y - g.height, y: e.xAxis.len - g.x - g.width, width: g.height, height: g.width }), l || (b ? (g.x += q ?
                    0 : g.width, g.width = 0) : (g.y += q ? g.height : 0, g.height = 0))); f.align = m(f.align, !b || l ? "center" : q ? "right" : "left"); f.verticalAlign = m(f.verticalAlign, b || l ? "middle" : q ? "top" : "bottom"); c.prototype.alignDataLabel.call(this, a, d, f, g, n)
            })
    })(J); (function (a) {
        var B = a.Chart, w = a.each, D = a.pick, F = a.addEvent; B.prototype.callbacks.push(function (a) {
            function d() {
                var d = []; w(a.series || [], function (a) {
                    var g = a.options.dataLabels, h = a.dataLabelCollections || ["dataLabel"]; (g.enabled || a._hasPointLabels) && !g.allowOverlap && a.visible && w(h,
                        function (f) { w(a.points, function (a) { a[f] && (a[f].labelrank = D(a.labelrank, a.shapeArgs && a.shapeArgs.height), d.push(a[f])) }) })
                }); a.hideOverlappingLabels(d)
            } d(); F(a, "redraw", d)
        }); B.prototype.hideOverlappingLabels = function (a) {
            var d = a.length, g, h, n, m, f, c, q, v, b, e = function (a, b, c, d, e, f, g, l) { return !(e > a + c || e + g < a || f > b + d || f + l < b) }; for (h = 0; h < d; h++) if (g = a[h]) g.oldOpacity = g.opacity, g.newOpacity = 1; a.sort(function (a, b) { return (b.labelrank || 0) - (a.labelrank || 0) }); for (h = 0; h < d; h++) for (n = a[h], g = h + 1; g < d; ++g) if (m = a[g], n && m &&
                n.placed && m.placed && 0 !== n.newOpacity && 0 !== m.newOpacity && (f = n.alignAttr, c = m.alignAttr, q = n.parentGroup, v = m.parentGroup, b = 2 * (n.box ? 0 : n.padding), f = e(f.x + q.translateX, f.y + q.translateY, n.width - b, n.height - b, c.x + v.translateX, c.y + v.translateY, m.width - b, m.height - b))) (n.labelrank < m.labelrank ? n : m).newOpacity = 0; w(a, function (a) { var b, c; a && (c = a.newOpacity, a.oldOpacity !== c && a.placed && (c ? a.show(!0) : b = function () { a.hide() }, a.alignAttr.opacity = c, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, b)), a.isOld = !0) })
        }
    })(J); (function (a) {
        var B =
            a.addEvent, w = a.Chart, D = a.createElement, F = a.css, q = a.defaultOptions, d = a.defaultPlotOptions, g = a.each, h = a.extend, n = a.fireEvent, m = a.hasTouch, f = a.inArray, c = a.isObject, E = a.Legend, v = a.merge, b = a.pick, e = a.Point, r = a.Series, p = a.seriesTypes, I = a.svg; a = a.TrackerMixin = {
                drawTrackerPoint: function () {
                    var a = this, b = a.chart.pointer, c = function (a) { var c = b.getPointFromEvent(a); if (void 0 !== c) c.onMouseOver(a) }; g(a.points, function (a) {
                        a.graphic && (a.graphic.element.point = a); a.dataLabel && (a.dataLabel.div ? a.dataLabel.div.point = a :
                            a.dataLabel.element.point = a)
                    }); a._hasTracking || (g(a.trackerGroups, function (d) { if (a[d] && (a[d].addClass("highcharts-tracker").on("mouseover", c).on("mouseout", function (a) { b.onTrackerMouseOut(a) }), m)) a[d].on("touchstart", c) }), a._hasTracking = !0)
                }, drawTrackerGraph: function () {
                    var a = this, b = a.options.trackByArea, c = [].concat(b ? a.areaPath : a.graphPath), d = c.length, e = a.chart, f = e.pointer, h = e.renderer, n = e.options.tooltip.snap, p = a.tracker, k, q = function () { if (e.hoverSeries !== a) a.onMouseOver() }, r = "rgba(192,192,192," +
                        (I ? .0001 : .002) + ")"; if (d && !b) for (k = d + 1; k--;) "M" === c[k] && c.splice(k + 1, 0, c[k + 1] - n, c[k + 2], "L"), (k && "M" === c[k] || k === d) && c.splice(k, 0, "L", c[k - 2] + n, c[k - 1]); p ? p.attr({ d: c }) : a.graph && (a.tracker = h.path(c).attr({ "stroke-linejoin": "round", visibility: a.visible ? "visible" : "hidden", stroke: r, fill: b ? r : "none", "stroke-width": a.graph.strokeWidth() + (b ? 0 : 2 * n), zIndex: 2 }).add(a.group), g([a.tracker, a.markerGroup], function (a) {
                            a.addClass("highcharts-tracker").on("mouseover", q).on("mouseout", function (a) { f.onTrackerMouseOut(a) });
                            if (m) a.on("touchstart", q)
                        }))
                }
            }; p.column && (p.column.prototype.drawTracker = a.drawTrackerPoint); p.pie && (p.pie.prototype.drawTracker = a.drawTrackerPoint); p.scatter && (p.scatter.prototype.drawTracker = a.drawTrackerPoint); h(E.prototype, {
                setItemEvents: function (a, b, c) {
                    var d = this.chart.renderer.boxWrapper, e = "highcharts-legend-" + (a.series ? "point" : "series") + "-active"; (c ? b : a.legendGroup).on("mouseover", function () { a.setState("hover"); d.addClass(e) }).on("mouseout", function () { d.removeClass(e); a.setState() }).on("click",
                        function (b) { var c = function () { a.setVisible && a.setVisible() }; b = { browserEvent: b }; a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : n(a, "legendItemClick", b, c) })
                }, createCheckboxForItem: function (a) { a.checkbox = D("input", { type: "checkbox", checked: a.selected, defaultChecked: a.selected }, this.options.itemCheckboxStyle, this.chart.container); B(a.checkbox, "click", function (b) { n(a.series || a, "checkboxClick", { checked: b.target.checked, item: a }, function () { a.select() }) }) }
            }); h(w.prototype, {
                showResetZoom: function () {
                    var a =
                        this, b = q.lang, c = a.options.chart.resetZoomButton, d = c.theme, e = d.states, f = "chart" === c.relativeTo ? null : "plotBox"; this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function () { a.zoomOut() }, d, e && e.hover).attr({ align: c.position.align, title: b.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(c.position, !1, f)
                }, zoomOut: function () { var a = this; n(a, "selection", { resetSelection: !0 }, function () { a.zoom() }) }, zoom: function (a) {
                    var d, e = this.pointer, f = !1, l; !a || a.resetSelection ? g(this.axes, function (a) {
                        d =
                            a.zoom()
                    }) : g(a.xAxis.concat(a.yAxis), function (a) { var b = a.axis; e[b.isXAxis ? "zoomX" : "zoomY"] && (d = b.zoom(a.min, a.max), b.displayBtn && (f = !0)) }); l = this.resetZoomButton; f && !l ? this.showResetZoom() : !f && c(l) && (this.resetZoomButton = l.destroy()); d && this.redraw(b(this.options.chart.animation, a && a.animation, 100 > this.pointCount))
                }, pan: function (a, b) {
                    var c = this, d = c.hoverPoints, e; d && g(d, function (a) { a.setState() }); g("xy" === b ? [1, 0] : [1], function (b) {
                        b = c[b ? "xAxis" : "yAxis"][0]; var d = b.horiz, f = a[d ? "chartX" : "chartY"], d = d ?
                            "mouseDownX" : "mouseDownY", g = c[d], k = (b.pointRange || 0) / 2, l = b.getExtremes(), h = b.toValue(g - f, !0) + k, k = b.toValue(g + b.len - f, !0) - k, m = k < h, g = m ? k : h, h = m ? h : k, m = b.toValue(b.toPixels(l.min) - b.minPixelPadding), k = b.toValue(b.toPixels(l.max) + b.minPixelPadding), m = Math.min(l.dataMin, m) - g, l = h - Math.max(l.dataMax, k); b.series.length && 0 > m && 0 > l && (b.setExtremes(g, h, !1, !1, { trigger: "pan" }), e = !0); c[d] = f
                    }); e && c.redraw(!1); F(c.container, { cursor: "move" })
                }
            }); h(e.prototype, {
                select: function (a, c) {
                    var d = this, e = d.series, l = e.chart; a = b(a,
                        !d.selected); d.firePointEvent(a ? "select" : "unselect", { accumulate: c }, function () { d.selected = d.options.selected = a; e.options.data[f(d, e.data)] = d.options; d.setState(a && "select"); c || g(l.getSelectedPoints(), function (a) { a.selected && a !== d && (a.selected = a.options.selected = !1, e.options.data[f(a, e.data)] = a.options, a.setState(""), a.firePointEvent("unselect")) }) })
                }, onMouseOver: function (a) { var b = this.series.chart.pointer; this.firePointEvent("mouseOver"); b.runPointActions(a, this) }, onMouseOut: function () {
                    var a = this.series.chart;
                    this.firePointEvent("mouseOut"); g(a.hoverPoints || [], function (a) { a.setState() }); a.hoverPoints = a.hoverPoint = null
                }, importEvents: function () { if (!this.hasImportedEvents) { var a = v(this.series.options.point, this.options).events, b; this.events = a; for (b in a) B(this, b, a[b]); this.hasImportedEvents = !0 } }, setState: function (a, c) {
                    var e = Math.floor(this.plotX), f = this.plotY, g = this.series, h = g.options.states[a] || {}, m = d[g.type].marker && g.options.marker, n = m && !1 === m.enabled, p = m && m.states && m.states[a] || {}, k = !1 === p.enabled, q =
                        g.stateMarkerGraphic, r = this.marker || {}, t = g.chart, v = g.halo, w, A = m && g.markerAttribs; a = a || ""; if (!(a === this.state && !c || this.selected && "select" !== a || !1 === h.enabled || a && (k || n && !1 === p.enabled) || a && r.states && r.states[a] && !1 === r.states[a].enabled)) {
                            A && (w = g.markerAttribs(this, a)); if (this.graphic) this.state && this.graphic.removeClass("highcharts-point-" + this.state), a && this.graphic.addClass("highcharts-point-" + a), w && this.graphic.animate(w, b(t.options.chart.animation, p.animation, m.animation)), q && q.hide(); else {
                                if (a &&
                                    p) if (m = r.symbol || g.symbol, q && q.currentSymbol !== m && (q = q.destroy()), q) q[c ? "animate" : "attr"]({ x: w.x, y: w.y }); else m && (g.stateMarkerGraphic = q = t.renderer.symbol(m, w.x, w.y, w.width, w.height).add(g.markerGroup), q.currentSymbol = m); q && (q[a && t.isInsidePlot(e, f, t.inverted) ? "show" : "hide"](), q.element.point = this)
                            } (e = h.halo) && e.size ? (v || (g.halo = v = t.renderer.path().add(A ? g.markerGroup : g.group)), v[c ? "animate" : "attr"]({ d: this.haloPath(e.size) }), v.attr({ "class": "highcharts-halo highcharts-color-" + b(this.colorIndex, g.colorIndex) }),
                                v.point = this) : v && v.point && v.point.haloPath && v.animate({ d: v.point.haloPath(0) }); this.state = a
                        }
                }, haloPath: function (a) { return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - a, this.plotY - a, 2 * a, 2 * a) }
            }); h(r.prototype, {
                onMouseOver: function () { var a = this.chart, b = a.hoverSeries; if (b && b !== this) b.onMouseOut(); this.options.events.mouseOver && n(this, "mouseOver"); this.setState("hover"); a.hoverSeries = this }, onMouseOut: function () {
                    var a = this.options, b = this.chart, c = b.tooltip, d = b.hoverPoint; b.hoverSeries =
                        null; if (d) d.onMouseOut(); this && a.events.mouseOut && n(this, "mouseOut"); !c || a.stickyTracking || c.shared && !this.noSharedTooltip || c.hide(); this.setState()
                }, setState: function (a) { var b = this; a = a || ""; b.state !== a && (g([b.group, b.markerGroup, b.dataLabelsGroup], function (c) { c && (b.state && c.removeClass("highcharts-series-" + b.state), a && c.addClass("highcharts-series-" + a)) }), b.state = a) }, setVisible: function (a, b) {
                    var c = this, d = c.chart, e = c.legendItem, f, h = d.options.chart.ignoreHiddenSeries, m = c.visible; f = (c.visible = a = c.options.visible =
                        c.userOptions.visible = void 0 === a ? !m : a) ? "show" : "hide"; g(["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"], function (a) { if (c[a]) c[a][f]() }); if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c) c.onMouseOut(); e && d.legend.colorizeItem(c, a); c.isDirty = !0; c.options.stacking && g(d.series, function (a) { a.options.stacking && a.visible && (a.isDirty = !0) }); g(c.linkedSeries, function (b) { b.setVisible(a, !1) }); h && (d.isDirtyBox = !0); !1 !== b && d.redraw(); n(c, f)
                }, show: function () { this.setVisible(!0) }, hide: function () { this.setVisible(!1) },
                select: function (a) { this.selected = a = void 0 === a ? !this.selected : a; this.checkbox && (this.checkbox.checked = a); n(this, a ? "select" : "unselect") }, drawTracker: a.drawTrackerGraph
            })
    })(J); (function (a) {
        var B = a.Chart, w = a.each, D = a.inArray, F = a.isArray, q = a.isObject, d = a.pick, g = a.splat; B.prototype.setResponsive = function (d) {
            var g = this.options.responsive, h = [], f = this.currentResponsive; g && g.rules && w(g.rules, function (c) { void 0 === c._id && (c._id = a.uniqueKey()); this.matchResponsiveRule(c, h, d) }, this); var c = a.merge.apply(0, a.map(h,
                function (c) { return a.find(g.rules, function (a) { return a._id === c }).chartOptions })), h = h.toString() || void 0; h !== (f && f.ruleIds) && (f && this.update(f.undoOptions, d), h ? (this.currentResponsive = { ruleIds: h, mergedOptions: c, undoOptions: this.currentOptions(c) }, this.update(c, d)) : this.currentResponsive = void 0)
        }; B.prototype.matchResponsiveRule = function (a, g) {
            var h = a.condition; (h.callback || function () {
                return this.chartWidth <= d(h.maxWidth, Number.MAX_VALUE) && this.chartHeight <= d(h.maxHeight, Number.MAX_VALUE) && this.chartWidth >=
                    d(h.minWidth, 0) && this.chartHeight >= d(h.minHeight, 0)
            }).call(this) && g.push(a._id)
        }; B.prototype.currentOptions = function (a) { function d(a, c, h, m) { var b, e; for (b in a) if (!m && -1 < D(b, ["series", "xAxis", "yAxis"])) for (a[b] = g(a[b]), h[b] = [], e = 0; e < a[b].length; e++) c[b][e] && (h[b][e] = {}, d(a[b][e], c[b][e], h[b][e], m + 1)); else q(a[b]) ? (h[b] = F(a[b]) ? [] : {}, d(a[b], c[b] || {}, h[b], m + 1)) : h[b] = c[b] || null } var h = {}; d(a, this.options, h, 0); return h }
    })(J); return J
});

/**
 * Custom Axis extension to allow emulation of negative values on a logarithmic
 * Y axis. Note that the scale is not mathematically correct, as a true
 * logarithmic axis never reaches or crosses zero.
 */
(function (H) {
    // Pass error messages
    H.Axis.prototype.allowNegativeLog = true;

    // Override conversions
    H.Axis.prototype.log2lin = function (num) {
        var isNegative = num < 0,
            adjustedNum = Math.abs(num),
            result;
        if (adjustedNum < 10) {
            adjustedNum += (10 - adjustedNum) / 10;
        }
        result = Math.log(adjustedNum) / Math.LN10;
        return isNegative ? -result : result;
    };
    H.Axis.prototype.lin2log = function (num) {
        var isNegative = num < 0,
            absNum = Math.abs(num),
            result = Math.pow(10, absNum);
        if (result < 10) {
            result = (10 * (result - 1)) / (10 - 1);
        }
        return isNegative ? -result : result;
    };
}(Highcharts));