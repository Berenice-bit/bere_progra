/*

@license
dhtmlxScheduler v.5.3.8 Professional

This software can be used only as part of dhtmlx.com site.
You are not allowed to use it on any other site

(c) XB Software Ltd.

*/
Scheduler.plugin(function(e) {
    e._temp_matrix_scope = function() {
        function t(e, a) {
            if (a = a || [], e.children)
                for (var n = 0; n < e.children.length; n++)
                    a.push(e.children[n].key), t(e.children[n], a);
            return a
        }
        function a(e, t) {
            var a = t.order[e];
            return void 0 === a && (a = "$_" + e), a
        }
        function n(e, t) {
            if (t[e.key] = e, e.children)
                for (var a = 0; a < e.children.length; a++)
                    n(e.children[a], t)
        }
        function i(e) {
            for (var t = {}, a = e.y_unit_original || e.y_unit, i = 0; i < a.length; i++)
                n(a[i], t);
            return t
        }
        function r(t, n) {
            function r(e, t, a, n) {
                e[t] || (e[t] = [])
                ;
                for (var i = a; i <= n; i++)
                    e[t][i] || (e[t][i] = []), e[t][i].push(h)
            }
            for (var o = [], _ = 0; _ < n.y_unit.length; _++)
                o[_] = [];
            var d;
            o[d] || (o[d] = []);
            var s = i(n),
                l = "tree" == n.render;
            l && (o.$tree = {});
            for (var c = n.y_property, _ = 0; _ < t.length; _++) {
                var h = t[_],
                    u = h[c];
                d = a(u, n);
                var g = e._get_date_index(n, h.start_date),
                    v = e._get_date_index(n, h.end_date);
                h.end_date.valueOf() == n._trace_x[v].valueOf() && (v -= 1), o[d] || (o[d] = []), r(o, d, g, v);
                var f = s[u];
                if (l && f && f.$parent)
                    for (; f.$parent;) {
                        var m = s[f.$parent];
                        r(o.$tree, m.key, g, v), f = m
                    }
            }
            return o
        }
        function o() {
            var e = document.createElement("p");
            e.style.width = "100%", e.style.height = "200px";
            var t = document.createElement("div");
            t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.style.visibility = "hidden", t.style.width = "200px", t.style.height = "150px", t.style.overflow = "hidden", t.appendChild(e), document.body.appendChild(t);
            var a = e.offsetWidth;
            t.style.overflow = "scroll";
            var n = e.offsetWidth;
            return a == n && (n = t.clientWidth), document.body.removeChild(t), a - n
        }
        function _(t) {
            return e._helpers.formatDate(t)
        }
        function d(t, a) {
            var n = t.querySelector(".dhx_timeline_data_wrapper");
            return a.scrollable || (n = e.$container.querySelector(".dhx_cal_data")), n
        }
        function s(e) {
            return e.querySelector(".dhx_timeline_label_wrapper")
        }
        function l() {
            return e.$container.querySelector(".dhx_cal_data .dhx_timeline_label_col")
        }
        function c(t, a, n, i) {
            function r(e) {
                if (e = e || window.event, !e.shiftKey) {
                    var t = e.deltaY || e.detail || -e.wheelDelta;
                    t = t < 0 ? -100 : 100, _.scrollTop += t,
                    e.preventDefault && e.preventDefault()
                }
            }
            a._is_ev_creating = !1;
            var _ = d(t, a),
                c = e._els.dhx_cal_header[0],
                h = s(t);
            if (h && (h.addEventListener ? "onwheel" in document ? h.addEventListener("wheel", r) : "onmousewheel" in document && h.addEventListener("mousewheel", r) : h.attachEvent("onmousewheel", r), !h.$eventsAttached)) {
                h.$eventsAttached = !0;
                var u = {
                    pageX: 0,
                    pageY: 0
                };
                h.addEventListener("touchstart", function(e) {
                    var t = e;
                    e.touches && (t = e.touches[0]), u = {
                        pageX: t.pageX,
                        pageY: t.pageY
                    }
                }), h.addEventListener("touchmove", function(e) {
                    var t = e;
                    e.touches && (t = e.touches[0]);
                    var a = u.pageY - t.pageY;
                    u = {
                        pageX: t.pageX,
                        pageY: t.pageY
                    }, a && (_.scrollTop += a), e && e.preventDefault && e.preventDefault()
                })
            }
            var g;
            if (_.onscroll = function(r) {
                var s = d(t, a),
                    h = s.scrollTop,
                    u = a.scrollHelper.getScrollValue(s),
                    v = e._timeline_smart_render.getViewPort(a.scrollHelper, 0, u, h),
                    f = l();
                if (a.scrollable && (f.style.top = -h + "px"), !1 !== a.smart_rendering) {
                    if ((u !== a._x_scroll || a._is_ev_creating) && (a.second_scale ? e._timeline_smart_render.updateHeader(a, v, c.children[1]) : e._timeline_smart_render.updateHeader(a, v, c.children[0])), e.config.rtl) {
                        var m = +e.$container.querySelector(".dhx_timeline_label_wrapper").style.height.replace("px", ""),
                            p = a._section_height[a.y_unit.length] + a._label_rows[a._label_rows.length - 1].top;
                        a.scrollHelper.getMode() == a.scrollHelper.modes.minMax && (p > m || "tree" == a.render) ? c.style.right = -1 - u - o() + "px" : c.style.right = -1 - u + "px",
                        c.style.left = "unset"
                    } else
                        c.style.left = -1 - u + "px";
                    (a._options_changed || h !== a._y_scroll || a._is_ev_creating) && e._timeline_smart_render.updateLabels(a, v, f), a._is_ev_creating = !1, e._timeline_smart_render.updateGridCols(a, v), e._timeline_smart_render.updateGridRows(a, v);
                    var y = !1;
                    "cell" != a.render && (window.requestAnimationFrame ? (y = !0, g && cancelAnimationFrame(g), g = requestAnimationFrame(function() {
                        e._timeline_smart_render.updateEvents(a, v), g = 0,
                        a.callEvent("onScroll", [a.scrollHelper.getScrollValue(_), _.scrollTop])
                    })) : e._timeline_smart_render.updateEvents(a, v));
                    var b = 0;
                    a._scales = {};
                    var x;
                    x = "cell" === a.render ? s.querySelectorAll(".dhx_timeline_data_col .dhx_timeline_data_row") : s.querySelectorAll(".dhx_timeline_data_col .dhx_matrix_line");
                    for (var w = 0, k = x.length; w < k; w++) {
                        var D = x[w].getAttribute("data-section-id"),
                            E = a.order[D];
                        n[E] = i[E].height, a._scales[D] = x[w]
                    }
                    for (var w = 0, k = n.length; w < k; w++)
                        b += n[w]
                        ;
                    e.$container.querySelector(".dhx_timeline_data_col").style.height = b + "px";
                    var S = s.scrollTop,
                        N = a.scrollHelper.getScrollValue(s),
                        M = a._summ - e.$container.querySelector(".dhx_cal_data").offsetWidth + a.dx + a.custom_scroll_width;
                    e._timeline_save_scroll_pos(a, S, N, M), y || a.callEvent("onScroll", [N, S]), a._is_new_view = !1
                }
            }, !_.$eventsAttached) {
                _.$eventsAttached = !0;
                var v = {
                    pageX: 0,
                    pageY: 0
                };
                _.addEventListener("touchstart", function(e) {
                    var t = e;
                    e.touches && (t = e.touches[0]), v = {
                        pageX: t.pageX,
                        pageY: t.pageY
                    }
                }),
                _.addEventListener("touchmove", function(t) {
                    var n = t;
                    t.touches && (n = t.touches[0]);
                    var i = l(),
                        r = v.pageX - n.pageX,
                        o = v.pageY - n.pageY;
                    if (v = {
                        pageX: n.pageX,
                        pageY: n.pageY
                    }, (r || o) && !e.getState().drag_id) {
                        var d = Math.abs(r),
                            s = Math.abs(o),
                            c = Math.sqrt(r * r + o * o),
                            h = d / c,
                            u = s / c;
                        h < .42 ? r = 0 : u < .42 && (o = 0), a.scrollHelper.setScrollValue(a.scrollHelper.getScrollValue(_) + r), _.scrollTop += o, a.scrollable && o && (i.style.top = -_.scrollTop + "px")
                    }
                    return t && t.preventDefault && t.preventDefault(), !1
                })
            }
            a.scroll_position && a._is_new_view ? a.scrollTo(a.scroll_position) : e._timeline_set_scroll_pos(t, a), a._is_ev_creating = !0
        }
        function h(e, t) {
            if (e.closest)
                return e.closest(t);
            if (e.matches || e.msMatchesSelector || e.webkitMatchesSelector) {
                var a = e;
                if (!document.documentElement.contains(a))
                    return null;
                do {
                    if ((a.matches || a.msMatchesSelector || a.webkitMatchesSelector).call(a, t))
                        return a;
                    a = a.parentElement || a.parentNode
                } while (null !== a && 1 === a.nodeType);
                return null
            }
            return window.console.error("Your browser is not supported"), null
        }
        function u(t, a) {
            var n = e.matrix[e._mode],
                i = {},
                r = {},
                o = a;
            for (i.x = t.touches ? t.touches[0].pageX : t.pageX, i.y = t.touches ? t.touches[0].pageY : t.pageY, r.left = o.offsetLeft + n.dx, r.top = o.offsetTop; o;)
                r.left += o.offsetLeft, r.top += o.offsetTop, o = o.offsetParent;
            return {
                x: i.x - r.left,
                y: i.y - r.top
            }
        }
        function g(t) {
            S && clearInterval(S), e._schedulerOuter = e.$container.querySelector(".dhx_timeline_data_wrapper");
            var a = {
                pageX: t.touches ? t.touches[0].pageX : t.pageX,
                pageY: t.touches ? t.touches[0].pageY : t.pageY
            };
            S = setInterval(function() {
                v(a)
            }, E)
        }
        function v(t) {
            if (!e.getState().drag_id)
                return clearInterval(S), void (N = null);
            var a = e.matrix[e._mode];
            if (a) {
                var n = e._schedulerOuter,
                    i = u(t, n),
                    r = n.offsetWidth - a.dx,
                    o = n.offsetHeight,
                    _ = i.x,
                    d = i.y,
                    s = a.autoscroll || {};
                e._merge(s, {
                    range_x: 200,
                    range_y: 100,
                    speed_x: 20,
                    speed_y: 10
                });
                var l = f(_, r, N ? N.x : 0, s.range_x);
                a.scrollable || (l = 0);
                var c = f(d, o, N ? N.y : 0, s.range_y);
                !c && !l || N || (N = {
                    x: _,
                    y: d
                }, l = 0,
                c = 0), l *= s.speed_x, c *= s.speed_y, l && c && (Math.abs(l / 5) > Math.abs(c) ? c = 0 : Math.abs(c / 5) > Math.abs(l) && (l = 0)), l || c ? (N.started = !0, m(l, c)) : clearInterval(S)
            }
        }
        function f(e, t, a, n) {
            return e < n && (!N || N.started || e < a) ? -1 : t - e < n && (!N || N.started || e > a) ? 1 : 0
        }
        function m(t, a) {
            var n = e._schedulerOuter;
            a && (n.scrollTop += a), t && (n.scrollLeft += t)
        }
        var p = function() {
            return function() {
                function e() {
                    var e = document.createElement("div")
                    ;
                    e.style.cssText = "direction: rtl;overflow: auto;width:100px;height: 100px;position:absolute;top: -100500px;left: -100500px;";
                    var t = document.createElement("div");
                    return t.style.cssText = "width: 100500px;height: 1px;", e.appendChild(t), e
                }
                function t() {
                    var t = _.minMax,
                        a = e();
                    return document.body.appendChild(a), a.scrollLeft > 0 ? t = _.minMax : (a.scrollLeft = -50, t = -50 === a.scrollLeft ? _.nMaxMin : _.maxMin), document.body.removeChild(a), t
                }
                function a(e, t) {
                    var a = r();
                    return a === _.nMaxMin ? e ? -e : 0 : a === _.minMax ? t - e : e
                }
                function n(e) {
                    var t = getComputedStyle(e).direction;
                    if (t && "ltr" !== t) {
                        var n = e.scrollWidth - e.offsetWidth;
                        return a(e.scrollLeft, n)
                    }
                    return e.scrollLeft
                }
                function i(e, t) {
                    var n = getComputedStyle(e).direction;
                    if (n && "ltr" !== n) {
                        var i = e.scrollWidth - e.offsetWidth,
                            r = a(t, i);
                        e.scrollLeft = r
                    } else
                        e.scrollLeft = t
                }
                function r() {
                    return o || (o = t()), o
                }
                var o,
                    _ = {
                        minMax: "[0;max]",
                        maxMin: "[max;0]",
                        nMaxMin: "[-max;0]"
                    };
                return {
                    modes: _,
                    getMode: r,
                    normalizeValue: a,
                    getScrollValue: n,
                    setScrollValue: i
                }
            }
        }();
        e.matrix = {},
        e._merge = function(e, t) {
            for (var a in t)
                void 0 === e[a] && (e[a] = t[a])
        }, e.createTimelineView = function(a) {
            function n(a, n, i) {
                var r = e._timeline_smart_render.getPreparedEvents(i),
                    o = i.order[a],
                    _ = i.y_unit[o];
                if (!_)
                    return [];
                var d = [a];
                n && t(_, d);
                for (var s = [], l = 0; l < d.length; l++) {
                    var o = i.order[d[l]];
                    if (void 0 !== o && r[o])
                        s = s.concat(r[o]);
                    else if (r.undefined)
                        for (var c = 0; c < r.undefined.length; c++) {
                            var h = r.undefined[c];
                            h[i.y_property] == d[l] && s.push(h)
                        }
                }
                return s
            }
            function i(t, a, n, i) {
                var r = e._timeline_smart_render.getPreparedEvents(i),
                    o = [],
                    _ = [],
                    d = i.order[t],
                    s = i.y_unit[d];
                if (!s)
                    return [];
                var l = e._get_date_index(i, a);
                return r.$matrix ? (o = r.$matrix[d][l] || [], n && r.$matrix.$tree && r.$matrix.$tree[s.key] && (_ = r.$matrix.$tree[s.key][l] || []), o.concat(_)) : r[d] || []
            }
            function r(t, a, n) {
                for (var i = e.date[n.name + "_start"](new Date(t)), r = 0, o = i, _ = n.x_step, d = n.x_unit; o < a;)
                    r++, o = e.date.add(o, _, d);
                return r
            }
            e._skin_init(), e._merge(a, {
                scrollHelper: p(),
                column_width: 100,
                autoscroll: {
                    range_x: 200,
                    range_y: 100,
                    speed_x: 20,
                    speed_y: 10
                },
                _is_new_view: !0,
                _section_autowidth: !0,
                _x_scroll: 0,
                _y_scroll: 0,
                _h_cols: {},
                _label_rows: [],
                section_autoheight: !0,
                name: "matrix",
                x: "time",
                y: "time",
                x_step: 1,
                x_unit: "hour",
                y_unit: "day",
                y_step: 1,
                x_start: 0,
                x_size: 24,
                y_start: 0,
                y_size: 7,
                render: "cell",
                dx: 200,
                dy: 50,
                event_dy: e.xy.bar_height - 5,
                event_min_dy: e.xy.bar_height - 5,
                resize_events: !0,
                fit_events: !0,
                show_unassigned: !1,
                second_scale: !1,
                round_position: !1,
                _logic: function(t, a, n) {
                    var i = {}
                    ;
                    return e.checkEvent("onBeforeSectionRender") && (i = e.callEvent("onBeforeSectionRender", [t, a, n])), i
                }
            }), a._original_x_start = a.x_start, "day" != a.x_unit && (a.first_hour = a.last_hour = 0), a._start_correction = a.first_hour ? 60 * a.first_hour * 60 * 1e3 : 0, a._end_correction = a.last_hour ? 60 * (24 - a.last_hour) * 60 * 1e3 : 0, e.checkEvent("onTimelineCreated") && e.callEvent("onTimelineCreated", [a]), dhtmlxEventable(a);
            var _ = e.render_data;
            e.render_data = function(t, n) {
                if (this._mode != a.name)
                    return _.apply(this, arguments)
                    ;
                if (n && !a.show_unassigned && "cell" != a.render)
                    for (var i = 0; i < t.length; i++)
                        this.clear_event(t[i]), this.render_timeline_event.call(this.matrix[this._mode], t[i], !0);
                else
                    e._renderMatrix.call(a, !0, !0)
            }, e.matrix[a.name] = a, e.templates[a.name + "_cell_value"] = function(e) {
                return e ? e.length : ""
            }, e.templates[a.name + "_cell_class"] = function(e) {
                return ""
            }, e.templates[a.name + "_scalex_class"] = function(e) {
                return ""
            }, e.templates[a.name + "_second_scalex_class"] = function(e) {
                return ""
            },
            e.templates[a.name + "_scaley_class"] = function(e, t, a) {
                return ""
            }, e.templates[a.name + "_scale_label"] = function(e, t, a) {
                return t
            }, e.templates[a.name + "_tooltip"] = function(e, t, a) {
                return a.text
            }, e.templates[a.name + "_date"] = function(t, a) {
                return t.getDay() == a.getDay() && a - t < 864e5 || +t == +e.date.date_part(new Date(a)) || +e.date.add(t, 1, "day") == +a && 0 === a.getHours() && 0 === a.getMinutes() ? e.templates.day_date(t) : t.getDay() != a.getDay() && a - t < 864e5 ? e.templates.day_date(t) + " &ndash; " + e.templates.day_date(a) : e.templates.week_date(t, a)
            }, e.templates[a.name + "_scale_date"] = e.date.date_to_str(a.x_date || e.config.hour_date),
            e.templates[a.name + "_second_scale_date"] = e.date.date_to_str(a.second_scale && a.second_scale.x_date ? a.second_scale.x_date : e.config.hour_date), e.date["add_" + a.name + "_private"] = function(t, n) {
                var i = n,
                    r = a.x_unit;
                if ("minute" == a.x_unit || "hour" == a.x_unit) {
                    var o = i;
                    "hour" == a.x_unit && (o *= 60), o % 1440 || (i = o / 1440, r = "day")
                }
                return e.date.add(t, i, r)
            }, e.date["add_" + a.name] = function(t, n, i) {
                var r = e.date["add_" + a.name + "_private"](t, (a.x_length || a.x_size) * a.x_step * n);
                if ("minute" == a.x_unit || "hour" == a.x_unit) {
                    var o = a.x_length || a.x_size,
                        _ = "hour" == a.x_unit ? 60 * a.x_step : a.x_step;
                    if (_ * o % 1440)
                        if (+e.date.date_part(new Date(t)) == +e.date.date_part(new Date(r)))
                            a.x_start += n * o;
                        else {
                            var d = 1440 / (o * _) - 1,
                                s = Math.round(d * o);
                            a.x_start = n > 0 ? a.x_start - s : s + a.x_start
                        }
                }
                return r
            }, e.date[a.name + "_start"] = function(t) {
                var n = e.date[a.x_unit + "_start"] || e.date.day_start,
                    i = n.call(e.date, t),
                    r = i.getTimezoneOffset();
                i = e.date.add(i, a.x_step * a.x_start, a.x_unit);
                var o = i.getTimezoneOffset();
                return r != o && i.setTime(i.getTime() + 6e4 * (o - r)), i
            }, a.scrollTo = e.bind(function(t) {
                if (t) {
                    var a;
                    a = t.date ? t.date : t.left ? t.left : t;
                    var n = -1;
                    t.section ? n = this.posFromSection(t.section) : t.top && (n = t.top);
                    var i;
                    if (i = "number" == typeof a ? a : this.posFromDate(a), e.config.rtl) {
                        var r = +e.$container.querySelector(".dhx_timeline_label_wrapper").style.height.replace("px", ""),
                            _ = this._section_height[this.y_unit.length] + this._label_rows[this._label_rows.length - 1].top;
                        this.scrollHelper.getMode() == this.scrollHelper.modes.minMax && (_ > r || "tree" == this.render) && (i -= o())
                    }
                    var d = e.$container.querySelector(".dhx_timeline_data_wrapper");
                    this.scrollable || (d = e.$container.querySelector(".dhx_cal_data")), this.scrollable && this.scrollHelper.setScrollValue(d, i), n > 0 && (d.scrollTop = n)
                }
            }, a), a.getScrollPosition = e.bind(function() {
                return {
                    left: this._x_scroll || 0,
                    top: this._y_scroll || 0
                }
            }, a), a.posFromDate = e.bind(function(t) {
                return e._timeline_getX({
                    start_date: t
                }, !1, this) - 1
            }, a), a.posFromSection = e.bind(function(e) {
                var t = this.order[e];
                if (void 0 === t)
                    return -1;
                var a = 0
                ;
                for (var n in this.order)
                    this.order[n] < t && (a += this._section_height[n]);
                return a
            }, a), a.selectEvents = e.bind(function(e) {
                var t = e.section,
                    a = e.date,
                    r = e.selectNested;
                return a ? i(t, a, r, this) : t ? n(t, r, this) : void 0
            }, a), a.setRange = e.bind(function(t, a) {
                var n = e.date[this.name + "_start"](new Date(t)),
                    i = r(t, a, this);
                this.x_size = i, e.setCurrentView(n, this.name)
            }, a), e.callEvent("onOptionsLoad", [a]), e[a.name + "_view"] = function(t) {
                t ? e._set_timeline_dates(a) : e._renderMatrix.apply(a, arguments)
            };
            var d = new Date
            ;
            e.date.add(d, a.x_step, a.x_unit).valueOf(), d.valueOf();
            e["mouse_" + a.name] = function(t) {
                var n = this._drag_event;
                if (this._drag_id && (n = this.getEvent(this._drag_id)), a.scrollable && !t.converted) {
                    if (t.converted = 1, t.x += -a.dx + a._x_scroll, e.config.rtl) {
                        var i = +e.$container.querySelector(".dhx_timeline_label_wrapper").style.height.replace("px", ""),
                            r = a._section_height[a.y_unit.length] + a._label_rows[a._label_rows.length - 1].top;
                        t.x += e.xy.scale_width,
                        a.scrollHelper.getMode() == a.scrollHelper.modes.minMax && (r > i || "tree" == a.render) && (t.x += o())
                    }
                    t.y += a._y_scroll
                } else
                    e.config.rtl ? t.x -= a.dx - e.xy.scale_width : t.x -= a.dx;
                var _ = e._timeline_drag_date(a, t.x);
                if (t.x = 0, t.force_redraw = !0, t.custom = !0, "move" == this._drag_mode && this._drag_id && this._drag_event) {
                    var n = this.getEvent(this._drag_id),
                        d = this._drag_event;
                    if (t._ignores = this._ignores_detected || a._start_correction || a._end_correction, void 0 === d._move_delta && (d._move_delta = (n.start_date - _) / 6e4,
                    this.config.preserve_length && t._ignores && (d._move_delta = this._get_real_event_length(n.start_date, _, a), d._event_length = this._get_real_event_length(n.start_date, n.end_date, a))), this.config.preserve_length && t._ignores) {
                        var s = (d._event_length, this._get_fictional_event_length(_, d._move_delta, a, !0));
                        _ = new Date(_ - s)
                    } else
                        _ = e.date.add(_, d._move_delta, "minute")
                }
                if ("resize" == this._drag_mode && n && (this.config.timeline_swap_resize && this._drag_id && (this._drag_from_start && +_ > +n.end_date ? this._drag_from_start = !1 : !this._drag_from_start && +_ < +n.start_date && (this._drag_from_start = !0)), t.resize_from_start = this._drag_from_start, !this.config.timeline_swap_resize && this._drag_id && this._drag_from_start && +_ >= +e.date.add(n.end_date, -e.config.time_step, "minute") && (_ = e.date.add(n.end_date, -e.config.time_step, "minute"))), a.round_position)
                    switch (this._drag_mode) {
                    case "move":
                        this.config.preserve_length || (_ = e._timeline_get_rounded_date.call(a, _, !1), "day" == a.x_unit && (t.custom = !1));
                        break;
                    case "resize":
                        this._drag_event && (null !== this._drag_event._resize_from_start && void 0 !== this._drag_event._resize_from_start || (this._drag_event._resize_from_start = t.resize_from_start), t.resize_from_start = this._drag_event._resize_from_start, _ = e._timeline_get_rounded_date.call(a, _, !this._drag_event._resize_from_start))
                    }
                this._resolve_timeline_section(a, t),
                t.section && this._update_timeline_section({
                    pos: t,
                    event: this.getEvent(this._drag_id),
                    view: a
                }), t.y = Math.round((this._correct_shift(_, 1) - this._min_date) / (6e4 * this.config.time_step)), t.shift = this.config.time_step, a.round_position && "new-size" == this._drag_mode && _ <= this._drag_start && (t.shift = e.date.add(this._drag_start, a.x_step, a.x_unit) - this._drag_start);
                var l = this._is_pos_changed(this._drag_pos, t);
                return this._drag_pos && l && (this._drag_event._dhx_changed = !0),
                l || this._drag_pos.has_moved || (t.force_redraw = !1), t
            }
        }, e._prepare_timeline_events = function(t) {
            var a = [];
            if ("cell" == t.render)
                a = e._timeline_trace_events.call(t);
            else {
                for (var n = e.get_visible_events(), i = t.order, r = 0; r < n.length; r++) {
                    var o = n[r],
                        _ = o[t.y_property],
                        d = t.order[_];
                    t.y_unit[d];
                    if (t.show_unassigned && !_) {
                        for (var s in i)
                            if (i.hasOwnProperty(s)) {
                                d = i[s], a[d] || (a[d] = []);
                                var l = e._lame_copy({}, o);
                                l[t.y_property] = s, a[d].push(l);
                                break
                            }
                    } else
                        a[d] || (a[d] = []), a[d].push(o)
                }
                a.$matrix = e._timeline_trace_events.call(t)
            }
            return a
        }, e._populate_timeline_rendered = function(t) {
            e._rendered = [];
            for (var a = t.querySelectorAll("div[event_id]"), n = 0; n < a.length; n++)
                e._rendered.push(a[n])
        }, e._get_timeline_event_height = function(e, t) {
            var a = e[t.y_property],
                n = t.event_dy;
            return "full" == t.event_dy && (n = t.section_autoheight ? t._section_height[a] - 6 : t.dy - 3), t.resize_events && (n = Math.max(Math.floor(n / (e._count || 1)), t.event_min_dy)), n
        }, e._get_timeline_event_y = function(t, a) {
            var n = t || 0,
                i = 2 + n * a + (n ? 2 * n : 0);
            return e.config.cascade_event_display && (i = 2 + n * e.config.cascade_event_margin + (n ? 2 * n : 0)), i
        }, e.render_timeline_event = function(t, a) {
            var n = t[this.y_property];
            if (!n)
                return "";
            var i = t._sorder,
                r = e._timeline_getX(t, !1, this),
                o = e._timeline_getX(t, !0, this),
                _ = e._get_timeline_event_height(t, this),
                d = _ - 2;
            t._inner || "full" != this.event_dy || (d = (d + 2) * (t._count - i) - 2), d += 3;
            var s = e._get_timeline_event_y(t._sorder, _),
                l = _ + s + 2
                ;
            (!this._events_height[n] || this._events_height[n] < l) && (this._events_height[n] = l);
            var c = e.templates.event_class(t.start_date, t.end_date, t);
            c = "dhx_cal_event_line " + (c || ""), e.getState().select_id == t.id && (c += " dhx_cal_event_selected"), t._no_drag_move && (c += " no_drag_move")
            ;
            var h = t.color ? "background:" + t.color + ";" : "",
                u = t.textColor ? "color:" + t.textColor + ";" : "",
                g = e.templates.event_bar_text(t.start_date, t.end_date, t),
                v = "<div " + e._waiAria.eventBarAttrString(t) + " event_id='" + t.id + "' class='" + c + "' style='" + h + u + "position:absolute; top:" + s + "px; height: " + d + "px; " + (e.config.rtl ? "right:" : "left:") + r + "px; width:" + Math.max(0, o - r) + "px;" + (t._text_style || "") + "'>";
            if (e.config.drag_resize && !e.config.readonly) {
                var f = "dhx_event_resize",
                    m = d + 1,
                    p = "<div class='" + f + " " + f + "_start' style='height: " + m + "px;'></div>",
                    y = "<div class='" + f + " " + f + "_end' style='height: " + m + "px;'></div>";
                v += (t._no_resize_start ? "" : p) + (t._no_resize_end ? "" : y)
            }
            if (v += g + "</div>", !a)
                return v;
            var b = document.createElement("div");
            b.innerHTML = v;
            var x = this._scales[n];
            x && (e._rendered.push(b.firstChild), x.appendChild(b.firstChild))
        }, e._timeline_trace_events = function() {
            return r(e.get_visible_events(), this)
        }, e._timeline_getX = function(t, a, n) {
            var i = 0,
                r = n._step,
                o = n.round_position,
                _ = 0,
                d = a ? t.end_date : t.start_date;
            d.valueOf() > e._max_date.valueOf() && (d = e._max_date);
            var s = d - e._min_date_timeline;
            if (s > 0) {
                var l = e._get_date_index(n, d);
                e._ignores[l] && (o = !0);
                for (var c = 0; c < l; c++)
                    i += e._cols[c];
                var h = e._timeline_get_rounded_date.apply(n, [d, !1]);
                o ? +d > +h && a && (_ = e._cols[l]) : (s = d - h, n.first_hour || n.last_hour ? (s -= n._start_correction, s < 0 && (s = 0), (_ = Math.round(s / r)) > e._cols[l] && (_ = e._cols[l])) : _ = Math.round(s / r))
            }
            e._border_box_events()
            ;
            return i += a ? 0 === s || o ? _ - 2 : _ : _ + 1
        }, e._timeline_get_rounded_date = function(t, a) {
            var n = e._get_date_index(this, t),
                i = this._trace_x[n];
            return a && +t != +this._trace_x[n] && (i = this._trace_x[n + 1] ? this._trace_x[n + 1] : e.date.add(this._trace_x[n], this.x_step, this.x_unit)), new Date(i)
        }, e._timeline_skip_ignored = function(t) {
            if (e._ignores_detected)
                for (var a, n, i, r, o = 0; o < t.length; o++) {
                    for (r = t[o], i = !1, a = e._get_date_index(this, r.start_date), n = e._get_date_index(this, r.end_date); a < n;) {
                        if (!e._ignores[a]) {
                            i = !0;
                            break
                        }
                        a++
                    }
                    i || a != n || e._ignores[n] || +r.end_date > +this._trace_x[n] && (i = !0), i || (t.splice(o, 1), o--)
                }
        }, e._timeline_calculate_event_positions = function(t) {
            if (t && "cell" != this.render) {
                e._timeline_skip_ignored.call(this, t), t.sort(this.sort || function(e, t) {
                    return e.start_date.valueOf() == t.start_date.valueOf() ? e.id > t.id ? 1 : -1 : e.start_date > t.start_date ? 1 : -1
                });
                for (var a = [], n = t.length, i = -1, r = null, o = 0; o < n; o++) {
                    var _ = t[o];
                    _._inner = !1
                    ;
                    var d = this.round_position ? e._timeline_get_rounded_date.apply(this, [_.start_date, !1]) : _.start_date;
                    for (this.round_position ? e._timeline_get_rounded_date.apply(this, [_.end_date, !0]) : _.end_date; a.length;) {
                        if (!(a[a.length - 1].end_date.valueOf() <= d.valueOf()))
                            break;
                        a.splice(a.length - 1, 1)
                    }
                    for (var s = !1, l = 0; l < a.length; l++) {
                        var c = a[l];
                        if (c.end_date.valueOf() <= d.valueOf()) {
                            s = !0, _._sorder = c._sorder, a.splice(l, 1), _._inner = !0;
                            break
                        }
                    }
                    if (a.length && (a[a.length - 1]._inner = !0),
                    !s)
                        if (a.length)
                            if (a.length <= a[a.length - 1]._sorder) {
                                if (a[a.length - 1]._sorder)
                                    for (var h = 0; h < a.length; h++) {
                                        for (var u = !1, g = 0; g < a.length; g++)
                                            if (a[g]._sorder == h) {
                                                u = !0;
                                                break
                                            }
                                        if (!u) {
                                            _._sorder = h;
                                            break
                                        }
                                    }
                                else
                                    _._sorder = 0;
                                _._inner = !0
                            } else {
                                for (var v = a[0]._sorder, f = 1; f < a.length; f++)
                                    a[f]._sorder > v && (v = a[f]._sorder);
                                _._sorder = v + 1, i < _._sorder && (i = _._sorder, r = _), _._inner = !1
                            }
                        else
                            _._sorder = 0;
                    a.push(_), a.length > (a.max_count || 0) ? (a.max_count = a.length, _._count = a.length) : _._count = _._count ? _._count : 1
                }
                for (var m = 0; m < t.length; m++)
                    t[m]._count = a.max_count, e._register_copy && e._register_copy(t[m]);
                (r || t[0]) && e.render_timeline_event.call(this, r || t[0], !1)
            }
        }, e._timeline_get_events_html = function(t) {
            var a = "";
            if (t && "cell" != this.render)
                for (var n = 0; n < t.length; n++)
                    a += e.render_timeline_event.call(this, t[n], !1);
            return a
        }, e._timeline_update_events_html = function(t) {
            var a = "";
            if (t && "cell" != this.render) {
                var n = e.getView(),
                    i = {},
                    r = function(e, t) {
                        return e + "_" + t
                    };
                t.forEach(function(e) {
                    i[r(e.id, e[n.y_property])] = !0
                }),
                e._rendered.forEach(function(e) {
                    if (e.parentNode) {
                        var t = e.parentNode.getAttribute("data-section-id");
                        i[r(e.getAttribute("event_id"), t)] && e.parentNode.removeChild(e)
                    }
                });
                for (var o = 0; o < t.length; o++)
                    a += e.render_timeline_event.call(this, t[o], !1)
            }
            return a
        }, e._timeline_get_block_stats = function(t, a) {
            var n = {};
            return a._sch_height = t.offsetHeight, n.style_data_wrapper = (e.config.rtl ? "padding-right:" : "padding-left:") + a.dx + "px;", n.style_label_wrapper = "width: " + a.dx + "px;",
            a.scrollable ? (n.style_data_wrapper += "height:" + (a._sch_height - 1) + "px;", void 0 === a.html_scroll_width && (a.html_scroll_width = o()), a._section_autowidth ? a.custom_scroll_width = 0 : a.custom_scroll_width = a.html_scroll_width, n.style_label_wrapper += "height:" + (a._sch_height - 1 - a.custom_scroll_width) + "px;") : (n.style_data_wrapper += "height:" + (a._sch_height - 1) + "px;", n.style_label_wrapper += "height:" + (a._sch_height - 1) + "px;overflow:visible;"), n
        }, e._timeline_get_cur_row_stats = function(t, a) {
            var n = t._logic(t.render, t.y_unit[a], t);
            if (e._merge(n, {
                height: t.dy
            }), t.section_autoheight) {
                var i = t.scrollable ? t._sch_height - e.xy.scroll_width : t._sch_height;
                t.y_unit.length * n.height < i && (n.height = Math.max(n.height, Math.floor((i - 1) / t.y_unit.length)))
            }
            return t._section_height[t.y_unit[a].key] = n.height,
            n.td_className || (n.td_className = "dhx_matrix_scell" + (e.templates[t.name + "_scaley_class"](t.y_unit[a].key, t.y_unit[a].label, t.y_unit[a]) ? " " + e.templates[t.name + "_scaley_class"](t.y_unit[a].key, t.y_unit[a].label, t.y_unit[a]) : "")), n.td_content || (n.td_content = e.templates[t.name + "_scale_label"](t.y_unit[a].key, t.y_unit[a].label, t.y_unit[a])), e._merge(n, {
                tr_className: "",
                style_height: "height:" + n.height + "px;",
                style_width: "width:" + t.dx + "px;",
                summ_width: "width:" + t._summ + "px;",
                table_className: ""
            }), n
        },
        e._timeline_get_fit_events_stats = function(e, t, a) {
            if (e.fit_events) {
                var n = e._events_height[e.y_unit[t].key] || 0;
                a.height = n > a.height ? n : a.height, a.style_height = "height:" + a.height + "px;", a.style_line_height = "line-height:" + (a.height - 1) + "px;", e._section_height[e.y_unit[t].key] = a.height
            }
            return a.style_height = "height:" + a.height + "px;", a.style_line_height = "line-height:" + (a.height - 1) + "px;", e._section_height[e.y_unit[t].key] = a.height, a
        }, e._timeline_set_scroll_pos = function(e, t) {
            var a = e.querySelector(".dhx_timeline_data_wrapper");
            a.scrollTop = t._y_scroll || 0, t.scrollHelper.setScrollValue(a, t._x_scroll || 0), t.scrollHelper.getMode() != t.scrollHelper.modes.maxMin && a.scrollLeft == t._summ - a.offsetWidth + t.dx && (a.scrollLeft += o())
        }, e._timeline_save_scroll_pos = function(e, t, a, n) {
            e._y_scroll = t || 0, e._x_scroll = a || 0
        }, e._timeline_get_html_for_cell_data_row = function(e, t, a, n) {
            return "<div class='dhx_timeline_data_row' data-section-id='" + n + "' data-section-index='" + e + "' style='" + t.summ_width + t.style_height + " position:absolute; top:" + a + "px;'>"
        }, e._timeline_get_html_for_cell_ignores = function(e) {
            return '<div class="dhx_matrix_cell dhx_timeline_data_cell" style="' + e.style_height + e.style_line_height + ';display:none"></div>'
        }, e._timeline_get_html_for_cell = function(t, a, n, i, r, o) {
            var d = n._trace_x[t],
                s = n.y_unit[a],
                l = e._cols[t],
                c = _(d),
                h = e.templates[n.name + "_cell_value"](i, d, s)
                ;
            return "<div data-col-id='" + t + "' data-col-date='" + c + "' class='dhx_matrix_cell dhx_timeline_data_cell " + e.templates[n.name + "_cell_class"](i, d, s) + "' style='width:" + l + "px;" + r.style_height + r.style_line_height + (e.config.rtl ? " right:" : "  left:") + o + "px;'><div style='width:auto'>" + h + "</div></div>"
        }, e._timeline_get_html_for_bar_matrix_line = function(e, t, a, n) {
            return "<div style='" + t.summ_width + " " + t.style_height + " position:absolute; top:" + a + "px;' data-section-id='" + n + "' data-section-index='" + e + "' class='dhx_matrix_line'>"
        }, e._timeline_get_html_for_bar_data_row = function(e) {
            return "<div class='dhx_timeline_data_row " + e.table_className + "' style='" + e.summ_width + " " + e.style_height + "' >"
        }, e._timeline_get_html_for_bar_ignores = function() {
            return ""
        }, e._timeline_get_html_for_bar = function(t, a, n, i, r, o) {
            var d = _(n._trace_x[t]),
                s = n.y_unit[a],
                l = ""
                ;
            n.cell_template && (l = e.templates[n.name + "_cell_value"](i, n._trace_x[t], s, o));
            var c = "line-height:" + n._section_height[s.key] + "px;";
            return "<div class='dhx_matrix_cell dhx_timeline_data_cell " + e.templates[n.name + "_cell_class"](i, n._trace_x[t], s, o) + "' style='width:" + e._cols[t] + "px; " + (e.config.rtl ? "right:" : "left:") + r + "px;'  data-col-id='" + t + "' data-col-date='" + d + "' ><div style='width:auto; height:100%;position:relative;" + c + "'>" + l + "</div></div>"
        }, e._timeline_render_scale_header = function(t, a) {
            var n = e.$container.querySelector(".dhx_timeline_scale_header");
            if (n && n.parentNode.removeChild(n), a) {
                n = document.createElement("div");
                var i = "dhx_timeline_scale_header";
                t.second_scale && (i += " dhx_timeline_second_scale");
                var r = e.xy.scale_height;
                n.className = i, n.style.cssText = ["width:" + (t.dx - 1) + "px", "height:" + r + "px", "line-height:" + r + "px", "top:" + (e.xy.nav_height + 2) + "px", e.config.rtl ? "right:0" : "left:0"].join(";"), n.innerHTML = e.locale.labels[t.name + "_scale_header"] || "", e.$container.appendChild(n)
            }
        },
        e._timeline_y_scale = function(t) {
            var a = e._timeline_get_block_stats(t, this),
                n = this.scrollable ? " dhx_timeline_scrollable_data" : "",
                i = "<div class='dhx_timeline_table_wrapper'>",
                r = "<div class='dhx_timeline_label_wrapper' style='" + a.style_label_wrapper + "'><div class='dhx_timeline_label_col'>",
                o = "<div class='dhx_timeline_data_wrapper" + n + "' style='" + a.style_data_wrapper + "'><div class='dhx_timeline_data_col'>";
            e._load_mode && e._load(), e._timeline_smart_render.clearPreparedEventsCache(_)
            ;
            var _ = e._timeline_smart_render.getPreparedEvents(this);
            e._timeline_smart_render.cachePreparedEvents(_);
            for (var d = 0, s = 0; s < e._cols.length; s++)
                d += e._cols[s];
            var l = new Date,
                h = e._cols.length - e._ignores_detected;
            l = (e.date.add(l, this.x_step * h, this.x_unit) - l - (this._start_correction + this._end_correction) * h) / d, this._step = l, this._summ = d;
            var u = e._colsS.heights = [],
                g = [];
            this._events_height = {}, this._section_height = {}, this._label_rows = [];
            var v = !1,
                f = 0,
                m = null
                ;
            (this.scrollable || this.smart_rendering) && (m = e._timeline_smart_render.getViewPort(this.scrollHelper, this._sch_height)), e._timeline_smart_render._rendered_labels_cache = [], e._timeline_smart_render._rendered_events_cache = [];
            var p,
                y = !!m;
            p = this.scrollable ? !1 !== this.smart_rendering && !!y : !!this.smart_rendering && y;
            for (var b = [], x = 0, w = 0; w < this.y_unit.length; w++) {
                var k = e._timeline_get_cur_row_stats(this, w);
                b.push(k), x += k.height
            }
            m && x < m.scrollTop && (m.scrollTop = Math.max(0, x - m.height))
            ;
            for (var w = 0; w < this.y_unit.length; w++) {
                var k = b[w],
                    D = this.y_unit[w];
                e._timeline_calculate_event_positions.call(this, _[w]), k = e._timeline_get_fit_events_stats(this, w, k);
                var E = "<div class='dhx_timeline_label_row " + k.tr_className + "' style='top:" + f + "px;" + k.style_height + k.style_line_height + "'data-row-index='" + w + "' data-row-id='" + D.key + "'><div class='" + k.td_className + "' style='" + k.style_width + " height:" + k.height + "px;' " + e._waiAria.label(k.td_content) + ">" + k.td_content + "</div></div>"
                ;
                if (p && this._label_rows.push({
                    div: E,
                    top: f,
                    section: D
                }), p && (e._timeline_smart_render.isInYViewPort({
                    top: f,
                    bottom: f + k.height
                }, m) || (v = !0)), f += k.height, v)
                    v = !1;
                else {
                    r += E, p && e._timeline_smart_render._rendered_labels_cache.push(w);
                    var S = 0;
                    if ("cell" == this.render) {
                        o += e._timeline_get_html_for_cell_data_row(w, k, f - k.height, D.key);
                        for (var N = 0; N < e._cols.length; N++)
                            e._ignores[N] && !p ? o += e._timeline_get_html_for_cell_ignores(k) : p && y ? e._timeline_smart_render.isInXViewPort({
                                left: S,
                                right: S + e._cols[N]
                            }, m) && (o += e._timeline_get_html_for_cell(N, w, this, _[w][N], k, S)) : o += e._timeline_get_html_for_cell(N, w, this, _[w][N], k, S), S += e._cols[N];
                        o += "</div>"
                    } else {
                        o += e._timeline_get_html_for_bar_matrix_line(w, k, f - k.height, D.key);
                        var M = _[w];
                        p && y && (M = e._timeline_smart_render.getVisibleEventsForRow(this, m, _, w));
                        o += e._timeline_get_events_html.call(this, M), o += e._timeline_get_html_for_bar_data_row(k)
                        ;
                        for (var N = 0; N < e._cols.length; N++)
                            e._ignores[N] ? o += e._timeline_get_html_for_bar_ignores() : p && y ? e._timeline_smart_render.isInXViewPort({
                                left: S,
                                right: S + e._cols[N]
                            }, m) && (o += e._timeline_get_html_for_bar(N, w, this, _[w], S)) : o += e._timeline_get_html_for_bar(N, w, this, _[w], S), S += e._cols[N];
                        o += "</div></div>"
                    }
                }
                k.sectionKey = D.key, g.push(k)
            }
            if (i += r + "</div></div>", i += o + "</div></div>", i += "</div>", this._matrix = _, t.innerHTML = i, p) {
                e.$container.querySelector(".dhx_timeline_data_col").style.height = f + "px"
            }
            e._populate_timeline_rendered(t), this._scales = {};
            for (var s = 0, A = g.length; s < A; s++) {
                u.push(g[s].height);
                var C = g[s].sectionKey;
                e._timeline_finalize_section_add(this, C, t)
            }
            p && e._timeline_smart_render && (e._timeline_smart_render._rendered_events_cache = []), (p || this.scrollable) && c(t, this, u, g)
        }, e._timeline_finalize_section_add = function(t, a, n) {
            var i = t._scales[a] = n.querySelector(".dhx_timeline_data_col [data-section-id='" + a + "']");
            i && e.callEvent("onScaleAdd", [i, a])
        },
        e.attachEvent("onBeforeViewChange", function(t, a, n, i) {
            if (e.matrix[n]) {
                var r = e.matrix[n];
                if (r.scrollable) {
                    if ("tree" == r.render && t === n && a === i)
                        return !0;
                    r._x_scroll = r._y_scroll = 0, e.$container.querySelector(".dhx_timeline_scrollable_data") && e._timeline_set_scroll_pos(e._els.dhx_cal_data[0], r)
                }
            }
            return !0
        }), e._timeline_x_dates = function(t) {
            var a = e._min_date,
                n = e._max_date;
            e._process_ignores(a, this.x_size, this.x_unit, this.x_step, t);
            for (var i = (this.x_size, t && e._ignores_detected,
                0), r = 0; +a < +n;)
                if (this._trace_x[r] = new Date(a), "month" == this.x_unit && e.date[this.x_unit + "_start"] && (a = e.date[this.x_unit + "_start"](new Date(a))), a = e.date.add(a, this.x_step, this.x_unit), e.date[this.x_unit + "_start"] && (a = e.date[this.x_unit + "_start"](a)), e._ignores[r] || i++, r++, t)
                    if (i < this.x_size && !(+a < +n))
                        n = e.date["add_" + this.name + "_private"](n, (this.x_length || this.x_size) * this.x_step);
                    else if (i >= this.x_size) {
                        e._max_date = a;
                        break
                    }
            return {
                total: r,
                displayed: i
            }
        }, e._timeline_x_scale = function(t) {
            var a = e.xy.scale_height,
                n = this._header_resized || e.xy.scale_height;
            e._cols = [], e._colsS = {
                height: 0
            }, this._trace_x = [];
            var i = e._x - this.dx - e.xy.scroll_width;
            if (this.scrollable && this.column_width > 0) {
                var r = this.column_width * this.x_size;
                r > i && (i = r, this._section_autowidth = !1)
            }
            var o = [this.dx];
            e._els.dhx_cal_header[0].style.width = o[0] + i + "px"
            ;
            for (var d = e._min_date_timeline = e._min_date, s = e.config.preserve_scale_length, l = e._timeline_x_dates.call(this, s), c = l.displayed, h = l.total, u = 0; u < h; u++)
                e._ignores[u] ? (e._cols[u] = 0, c++) : e._cols[u] = Math.floor(i / (c - u)), i -= e._cols[u], o[u + 1] = o[u] + e._cols[u];
            if (t.innerHTML = "<div></div>", this.second_scale) {
                for (var g = this.second_scale.x_unit, v = [this._trace_x[0]], f = [], m = [this.dx, this.dx], p = 0, y = 0; y < this._trace_x.length; y++) {
                    var b = this._trace_x[y];
                    e._timeline_is_new_interval(g, b, v[p]) && (++p, v[p] = b, m[p + 1] = m[p])
                    ;
                    var x = p + 1;
                    f[p] = e._cols[y] + (f[p] || 0), m[x] += e._cols[y]
                }
                t.innerHTML = "<div></div><div></div>";
                var w = t.firstChild;
                w.style.height = n + "px";
                var k = t.lastChild;
                k.style.position = "relative", k.className = "dhx_bottom_scale_container";
                for (var D = 0; D < v.length; D++) {
                    var E = v[D],
                        S = e.templates[this.name + "_second_scalex_class"](E),
                        N = document.createElement("div");
                    N.className = "dhx_scale_bar dhx_second_scale_bar" + (S ? " " + S : ""), e.set_xy(N, f[D] - 1, n - 3, m[D], 0), N.innerHTML = e.templates[this.name + "_second_scale_date"](E),
                    w.appendChild(N)
                }
            }
            e.xy.scale_height = n, t = t.lastChild, this._h_cols = {};
            for (var M = 0; M < this._trace_x.length; M++)
                if (!e._ignores[M]) {
                    d = this._trace_x[M], e._render_x_header(M, o[M], d, t);
                    var A = e.templates[this.name + "_scalex_class"](d);
                    A && (t.lastChild.className += " " + A), t.lastChild.setAttribute("data-col-id", M), t.lastChild.setAttribute("data-col-date", _(d));
                    var C = t.lastChild.cloneNode(!0);
                    this._h_cols[M] = {
                        div: C,
                        left: o[M]
                    }
                }
            e.xy.scale_height = a;
            var T = this._trace_x;
            t.onclick = function(t) {
                var a = e._timeline_locate_hcell(t);
                a && e.callEvent("onXScaleClick", [a.x, T[a.x], t || event])
            }, t.ondblclick = function(t) {
                var a = e._timeline_locate_hcell(t);
                a && e.callEvent("onXScaleDblClick", [a.x, T[a.x], t || event])
            }
        }, e._timeline_is_new_interval = function(t, a, n) {
            switch (t) {
            case "hour":
                return a.getHours() != n.getHours() || e._timeline_is_new_interval("day", a, n);
            case "day":
                return !(a.getDate() == n.getDate() && a.getMonth() == n.getMonth() && a.getFullYear() == n.getFullYear());
            case "week":
                return !(e.date.week_start(new Date(a)).valueOf() == e.date.week_start(new Date(n)).valueOf());
            case "month":
                return !(a.getMonth() == n.getMonth() && a.getFullYear() == n.getFullYear());
            case "year":
                return !(a.getFullYear() == n.getFullYear());
            default:
                return !1
            }
        }, e._timeline_reset_scale_height = function(t) {
            if (this._header_resized && (!t || !this.second_scale)) {
                e.xy.scale_height /= 2, this._header_resized = !1;
                var a = e._els.dhx_cal_header[0];
                a.className = a.className.replace(/ dhx_second_cal_header/gi, "")
            }
        },
        e._timeline_set_full_view = function(t) {
            if (e._timeline_reset_scale_height.call(this, t), t) {
                this.second_scale && !this._header_resized && (this._header_resized = e.xy.scale_height, e.xy.scale_height *= 2, e._els.dhx_cal_header[0].className += " dhx_second_cal_header"), e.set_sizes(), e._init_matrix_tooltip();
                var a = e._min_date;
                if (e._timeline_x_scale.call(this, e._els.dhx_cal_header[0]), e.$container.querySelector(".dhx_timeline_scrollable_data")) {
                    var n = e._timeline_smart_render.getViewPort(this.scrollHelper),
                        i = e._timeline_smart_render.getVisibleHeader(this, n);
                    i && (this.second_scale ? e._els.dhx_cal_header[0].children[1].innerHTML = i : e._els.dhx_cal_header[0].children[0].innerHTML = i)
                }
                e._timeline_y_scale.call(this, e._els.dhx_cal_data[0]), e._min_date = a;
                var r = e._getNavDateElement();
                r && (r.innerHTML = e.templates[this.name + "_date"](e._min_date, e._max_date)), e._mark_now && e._mark_now(), e._timeline_reset_scale_height.call(this, t)
            }
            e._timeline_render_scale_header(this, t), e._timeline_hideToolTip()
        }, e._timeline_hideToolTip = function() {
            e._tooltip && (e._tooltip.style.display = "none", e._tooltip.date = "")
        }, e._timeline_showToolTip = function(t, a, n) {
            if ("cell" == t.render) {
                var i = a.x + "_" + a.y,
                    r = t._matrix[a.y][a.x];
                if (!r)
                    return e._timeline_hideToolTip();
                if (r.sort(function(e, t) {
                    return e.start_date > t.start_date ? 1 : -1
                }), e._tooltip) {
                    if (e._tooltip.date == i)
                        return;
                    e._tooltip.innerHTML = ""
                } else {
                    var o = e._tooltip = document.createElement("div")
                    ;
                    o.className = "dhx_year_tooltip", e.config.rtl && (o.className += " dhx_tooltip_rtl"), document.body.appendChild(o), o.onclick = e._click.dhx_cal_data
                }
                for (var _ = "", d = 0; d < r.length; d++) {
                    var s = r[d].color ? "background-color:" + r[d].color + ";" : "",
                        l = r[d].textColor ? "color:" + r[d].textColor + ";" : "";
                    _ += "<div class='dhx_tooltip_line' event_id='" + r[d].id + "' style='" + s + l + "'>", _ += "<div class='dhx_tooltip_date'>" + (r[d]._timed ? e.templates.event_date(r[d].start_date) : "") + "</div>",
                    _ += "<div class='dhx_event_icon icon_details'>&nbsp;</div>", _ += e.templates[t.name + "_tooltip"](r[d].start_date, r[d].end_date, r[d]) + "</div>"
                }
                e._tooltip.style.display = "", e._tooltip.style.top = "0px", e.config.rtl && n.left - e._tooltip.offsetWidth >= 0 || document.body.offsetWidth - a.src.offsetWidth - n.left - e._tooltip.offsetWidth < 0 ? e._tooltip.style.left = n.left - e._tooltip.offsetWidth + "px" : e._tooltip.style.left = n.left + a.src.offsetWidth + "px", e._tooltip.date = i, e._tooltip.innerHTML = _,
                document.body.offsetHeight - n.top - e._tooltip.offsetHeight < 0 ? e._tooltip.style.top = n.top - e._tooltip.offsetHeight + a.src.offsetHeight + "px" : e._tooltip.style.top = n.top + "px"
            }
        }, e._matrix_tooltip_handler = function(t) {
            var a = e.matrix[e._mode];
            if (a && "cell" == a.render) {
                if (a) {
                    var n = e._locate_cell_timeline(t),
                        t = t || event;
                    t.target || t.srcElement;
                    if (n)
                        return e._timeline_showToolTip(a, n, e.$domHelpers.getOffset(n.src))
                }
                e._timeline_hideToolTip()
            }
        }, e._init_matrix_tooltip = function() {
            e._detachDomEvent(e._els.dhx_cal_data[0], "mouseover", e._matrix_tooltip_handler), e.event(e._els.dhx_cal_data[0], "mouseover", e._matrix_tooltip_handler)
        }, e._set_timeline_dates = function(t) {
            e._min_date = e.date[t.name + "_start"](new Date(e._date)), e._max_date = e.date["add_" + t.name + "_private"](e._min_date, t.x_size * t.x_step), e.date[t.x_unit + "_start"] && (e._max_date = e.date[t.x_unit + "_start"](e._max_date)), e._table_view = !0
        }, e._renderMatrix = function(t, a) {
            a || (e._els.dhx_cal_data[0].scrollTop = 0),
            e._set_timeline_dates(this), e._timeline_set_full_view.call(this, t)
        }, e._timeline_html_index = function(t) {
            for (var a = t.parentNode.childNodes, n = -1, i = 0; i < a.length; i++)
                if (a[i] == t) {
                    n = i;
                    break
                }
            var r = n;
            if (e._ignores_detected)
                for (var o in e._ignores)
                    e._ignores[o] && 1 * o <= r && r++;
            return r
        }, e._timeline_locate_hcell = function(t) {
            t = t || event;
            for (var a = t.target ? t.target : t.srcElement; a && "DIV" != a.tagName;)
                a = a.parentNode;
            if (a && "DIV" == a.tagName) {
                if ("dhx_scale_bar" == e._getClassName(a).split(" ")[0])
                    return {
                        x: e._timeline_html_index(a),
                        y: -1,
                        src: a,
                        scale: !0
                    }
            }
        }, e._locate_cell_timeline = function(t) {
            t = t || event;
            for (var a = t.target ? t.target : t.srcElement, n = {}, i = e.matrix[e._mode], r = e.getActionData(t), o = e._ignores, _ = 0, d = 0; d < i._trace_x.length - 1 && !(+r.date < i._trace_x[d + 1]); d++)
                o[d] || _++;
            n.x = 0 === _ ? 0 : d, n.y = i.order[r.section];
            var s = (e._isRender("cell"), 0);
            if (i.scrollable && "cell" === i.render) {
                if (!i._scales[r.section] || !i._scales[r.section].querySelector(".dhx_matrix_cell"))
                    return
                    ;
                var l = i._scales[r.section].querySelector(".dhx_matrix_cell");
                if (!l)
                    return;
                var c = l.offsetLeft;
                if (c > 0) {
                    for (var u = e._timeline_drag_date(i, c), g = 0; g < i._trace_x.length - 1 && !(+u < i._trace_x[g + 1]); g++)
                        ;
                    s = g
                }
            }
            n.src = i._scales[r.section] ? i._scales[r.section].querySelectorAll(".dhx_matrix_cell")[d - s] : null;
            var v = !1,
                f = h(a, ".dhx_matrix_scell");
            return f && (a = f, v = !0), v ? (n.x = -1, n.src = a, n.scale = !0) : n.x = d, n
        };
        var y = e._click.dhx_cal_data;
        e._click.dhx_marked_timespan = e._click.dhx_cal_data = function(t) {
            var a = y.apply(this, arguments),
                n = e.matrix[e._mode];
            if (n) {
                var i = e._locate_cell_timeline(t);
                i && (i.scale ? e.callEvent("onYScaleClick", [i.y, n.y_unit[i.y], t || event]) : (e.callEvent("onCellClick", [i.x, i.y, n._trace_x[i.x], (n._matrix[i.y] || {})[i.x] || [], t || event]), e._timeline_set_scroll_pos(e._els.dhx_cal_data[0], n)))
            }
            return a
        }, e.dblclick_dhx_matrix_cell = function(t) {
            var a = e.matrix[e._mode];
            if (a) {
                var n = e._locate_cell_timeline(t)
                ;
                n && (n.scale ? e.callEvent("onYScaleDblClick", [n.y, a.y_unit[n.y], t || event]) : e.callEvent("onCellDblClick", [n.x, n.y, a._trace_x[n.x], (a._matrix[n.y] || {})[n.x] || [], t || event]))
            }
        };
        var b = e.dblclick_dhx_marked_timespan || function() {};
        e.dblclick_dhx_marked_timespan = function(t) {
            return e.matrix[e._mode] ? e.dblclick_dhx_matrix_cell(t) : b.apply(this, arguments)
        }, e.dblclick_dhx_matrix_scell = function(t) {
            return e.dblclick_dhx_matrix_cell(t)
        }, e._isRender = function(t) {
            return e.matrix[e._mode] && e.matrix[e._mode].render == t
        }, e.attachEvent("onCellDblClick", function(t, a, n, i, r) {
            if (!this.config.readonly && ("dblclick" != r.type || this.config.dblclick_create)) {
                var o = e.matrix[e._mode],
                    _ = {};
                _.start_date = o._trace_x[t], _.end_date = o._trace_x[t + 1] ? o._trace_x[t + 1] : e.date.add(o._trace_x[t], o.x_step, o.x_unit), o._start_correction && (_.start_date = new Date(1 * _.start_date + o._start_correction)), o._end_correction && (_.end_date = new Date(_.end_date - o._end_correction)),
                _[o.y_property] = o.y_unit[a].key, e.addEventNow(_, null, r)
            }
        }), e.attachEvent("onBeforeDrag", function(t, a, n) {
            return !e._isRender("cell")
        }), e.attachEvent("onEventChanged", function(e, t) {
            t._timed = this.isOneDayEvent(t)
        }), e.attachEvent("onBeforeEventChanged", function(e, t, a, n) {
            return e && (e._move_delta = void 0), n && (n._move_delta = void 0), !0
        }), e._is_column_visible = function(t) {
            var a = e.matrix[e._mode],
                n = e._get_date_index(a, t);
            return !e._ignores[n]
        };
        var x = e._render_marked_timespan
        ;
        e._render_marked_timespan = function(t, a, n, i, r) {
            if (!e.config.display_marked_timespans)
                return [];
            if (e.matrix && e.matrix[e._mode]) {
                if (e._isRender("cell"))
                    return;
                var o = e._lame_copy({}, e.matrix[e._mode]);
                o.round_position = !1;
                var _ = [],
                    d = [],
                    s = [],
                    l = t.sections ? t.sections.units || t.sections.timeline : null;
                if (n)
                    s = [a], d = [n];
                else {
                    var c = o.order;
                    if (l)
                        c.hasOwnProperty(l) && (d.push(l), s.push(o._scales[l]));
                    else if (o._scales)
                        for (var h in c)
                            c.hasOwnProperty(h) && o._scales[h] && (d.push(h), s.push(o._scales[h]))
                }
                var i = i ? new Date(i) : e._min_date,
                    r = r ? new Date(r) : e._max_date;
                if (i.valueOf() < e._min_date.valueOf() && (i = new Date(e._min_date)), r.valueOf() > e._max_date.valueOf() && (r = new Date(e._max_date)), !o._trace_x)
                    return;
                for (var u = 0; u < o._trace_x.length && !e._is_column_visible(o._trace_x[u]); u++)
                    ;
                if (u == o._trace_x.length)
                    return;
                var g = [];
                if (t.days > 6) {
                    var v = new Date(t.days);
                    e.date.date_part(new Date(i)) <= +v && +r >= +v && g.push(v)
                } else
                    g.push.apply(g, e._get_dates_by_index(t.days))
                    ;
                for (var f = t.zones, m = e._get_css_classes_by_config(t), p = 0; p < d.length; p++) {
                    a = s[p], n = d[p];
                    for (var u = 0; u < g.length; u++)
                        for (var y = g[u], b = 0; b < f.length; b += 2) {
                            var w = f[b],
                                k = f[b + 1],
                                D = new Date(+y + 60 * w * 1e3),
                                E = new Date(+y + 60 * k * 1e3);
                            if (D = new Date(D.valueOf() + 1e3 * (D.getTimezoneOffset() - y.getTimezoneOffset()) * 60), E = new Date(E.valueOf() + 1e3 * (E.getTimezoneOffset() - y.getTimezoneOffset()) * 60), i < E && r > D) {
                                var S = e._get_block_by_config(t);
                                S.className = m;
                                var N = e._timeline_getX({
                                        start_date: D
                                    }, !1, o) - 1,
                                    M = e._timeline_getX({
                                        start_date: E
                                    }, !1, o) - 1,
                                    A = Math.max(1, M - N - 1),
                                    C = o._section_height[n] - 1 || o.dy - 1;
                                S.style.cssText = "height: " + C + "px; " + (e.config.rtl ? "right: " : "left: ") + N + "px; width: " + A + "px; top: 0;", a.insertBefore(S, a.firstChild), _.push(S)
                            }
                        }
                }
                return _
            }
            return x.apply(e, [t, a, n])
        };
        var w = e._append_mark_now;
        e._append_mark_now = function(t, a) {
            if (e.matrix && e.matrix[e._mode]) {
                var n = e._currentDate(),
                    i = e._get_zone_minutes(n),
                    r = {
                        days: +e.date.date_part(n),
                        zones: [i, i + 1],
                        css: "dhx_matrix_now_time",
                        type: "dhx_now_time"
                    }
                    ;
                return e._render_marked_timespan(r)
            }
            return w.apply(e, [t, a])
        };
        var k = e._mark_timespans;
        e._mark_timespans = function() {
            if (e.matrix && e.matrix[e.getState().mode]) {
                for (var t = [], a = e.matrix[e.getState().mode], n = a.y_unit, i = 0; i < n.length; i++) {
                    var r = n[i].key,
                        o = a._scales[r],
                        _ = e._on_scale_add_marker(o, r);
                    t.push.apply(t, _)
                }
                return t
            }
            return k.apply(this, arguments)
        };
        var D = e._on_scale_add_marker;
        e._on_scale_add_marker = function(t, a) {
            if (e.matrix && e.matrix[e._mode]) {
                var n = [],
                    i = e._marked_timespans
                    ;
                if (i && e.matrix && e.matrix[e._mode])
                    for (var r = e._mode, o = e._min_date, _ = e._max_date, d = i.global, s = e.date.date_part(new Date(o)); s < _; s = e.date.add(s, 1, "day")) {
                        var l = +s,
                            c = s.getDay(),
                            h = [],
                            u = d[l] || d[c];
                        if (h.push.apply(h, e._get_configs_to_render(u)), i[r] && i[r][a]) {
                            var g = [],
                                v = e._get_types_to_render(i[r][a][c], i[r][a][l]);
                            g.push.apply(g, e._get_configs_to_render(v)), g.length && (h = g)
                        }
                        for (var f = 0; f < h.length; f++) {
                            var m = h[f],
                                p = m.days;
                            p < 7 ? (p = l,
                            n.push.apply(n, e._render_marked_timespan(m, t, a, s, e.date.add(s, 1, "day"))), p = c) : n.push.apply(n, e._render_marked_timespan(m, t, a, s, e.date.add(s, 1, "day")))
                        }
                    }
                return n
            }
            return D.apply(this, arguments)
        }, e._resolve_timeline_section = function(e, t) {
            var a = 0,
                n = 0;
            for (a; a < this._colsS.heights.length && !((n += this._colsS.heights[a]) > t.y); a++)
                ;
            e.y_unit[a] || (a = e.y_unit.length - 1), this._drag_event && !this._drag_event._orig_section && (this._drag_event._orig_section = e.y_unit[a].key), t.fields = {},
            a >= 0 && e.y_unit[a] && (t.section = t.fields[e.y_property] = e.y_unit[a].key)
        }, e._update_timeline_section = function(e) {
            var t = e.view,
                a = e.event,
                n = e.pos;
            if (a) {
                if (a[t.y_property] != n.section) {
                    var i = this._get_timeline_event_height(a, t);
                    a._sorder = this._get_dnd_order(a._sorder, i, t._section_height[n.section])
                }
                a[t.y_property] = n.section
            }
        }, e._get_date_index = function(e, t) {
            for (var a = e._trace_x, n = 0, i = a.length - 1, r = t.valueOf(); i - n > 3;) {
                var o = n + Math.floor((i - n) / 2);
                a[o].valueOf() > r ? i = o : n = o
            }
            for (var _ = n; _ <= i && +t >= +a[_ + 1];)
                _++
                ;
            return _
        }, e._timeline_drag_date = function(t, a) {
            var n = t,
                i = {
                    x: a
                };
            if (!n._trace_x.length)
                return new Date(e.getState().date);
            var r,
                o,
                _ = 0,
                d = 0;
            for (d; d <= this._cols.length - 1; d++)
                if (o = this._cols[d], (_ += o) > i.x) {
                    r = (i.x - (_ - o)) / o, r = r < 0 ? 0 : r;
                    break
                }
            if (n.round_position) {
                var s = 1,
                    l = e.getState().drag_mode;
                l && "move" != l && "create" != l && (s = .5), r >= s && d++, r = 0
            }
            if (0 === d && this._ignores[0])
                for (d = 1, r = 0; this._ignores[d];)
                    d++;
            else if (d == this._cols.length && this._ignores[d - 1]) {
                for (d = this._cols.length - 1, r = 0; this._ignores[d];)
                    d--;
                d++
            }
            var c;
            if (d >= n._trace_x.length)
                c = e.date.add(n._trace_x[n._trace_x.length - 1], n.x_step, n.x_unit), n._end_correction && (c = new Date(c - n._end_correction));
            else {
                var h = r * o * n._step + n._start_correction;
                c = new Date(+n._trace_x[d] + h)
            }
            return c
        }, e.attachEvent("onBeforeTodayDisplayed", function() {
            for (var t in e.matrix) {
                var a = e.matrix[t];
                a.x_start = a._original_x_start
            }
            return !0
        }), e.attachEvent("onOptionsLoad", function() {
            for (var t in e.matrix) {
                var a = e.matrix[t];
                a.order = {}, e.callEvent("onOptionsLoadStart", [])
                ;
                for (var t = 0; t < a.y_unit.length; t++)
                    a.order[a.y_unit[t].key] = t;
                e.callEvent("onOptionsLoadFinal", []), e._date && a.name == e._mode && (a._options_changed = !0, e.setCurrentView(e._date, e._mode), setTimeout(function() {
                    a._options_changed = !1
                }))
            }
        }), e.attachEvent("onEventIdChange", function() {
            var t = e.getView();
            t && e.matrix[t.name] && e._timeline_smart_render && (e._timeline_smart_render.clearPreparedEventsCache(), e._timeline_smart_render.getPreparedEvents(t))
        }), e.attachEvent("onBeforeDrag", function(t, a, n) {
            if ("resize" == a) {
                var i = n.target || n.srcElement;
                e._getClassName(i).indexOf("dhx_event_resize_end") < 0 ? e._drag_from_start = !0 : e._drag_from_start = !1
            }
            return !0
        });
        var E = 10,
            S = null,
            N = null,
            M = e.attachEvent("onSchedulerReady", function() {
                e.matrix && (e.event(document.body, "mousemove", g), e.detachEvent(M))
            });
        e._timeline_smart_render = {
            _prepared_events_cache: null,
            _rendered_events_cache: [],
            _rendered_header_cache: [],
            _rendered_labels_cache: [],
            _rows_to_delete: [],
            _rows_to_add: [],
            _cols_to_delete: [],
            _cols_to_add: [],
            getViewPort: function(t, a, n, i) {
                var r = e.$container.querySelector(".dhx_cal_data"),
                    o = r.getBoundingClientRect(),
                    _ = e.$container.querySelector(".dhx_timeline_scrollable_data");
                _ && void 0 === n && (n = t.getScrollValue(_)), void 0 === i && (i = _ ? _.scrollTop : r.scrollTop);
                var d = {};
                for (var s in o)
                    d[s] = o[s];
                return d.scrollLeft = n || 0, d.scrollTop = i || 0, a && (o.height = a), d
            },
            isInXViewPort: function(e, t) {
                var a = t.scrollLeft,
                    n = t.width + t.scrollLeft;
                return e.left < n + 100 && e.right > a - 100
            },
            isInYViewPort: function(e, t) {
                var a = t.scrollTop,
                    n = t.height + t.scrollTop;
                return e.top < n + 100 && e.bottom > a - 100
            },
            getVisibleHeader: function(t, a) {
                var n = "";
                this._rendered_header_cache = [];
                for (var i in t._h_cols) {
                    var r = t._h_cols[i];
                    if (this.isInXViewPort({
                        left: r.left,
                        right: r.left + e._cols[i]
                    }, a)) {
                        n += r.div.outerHTML, this._rendered_header_cache.push(r.div.getAttribute("data-col-id"))
                    }
                }
                return n
            },
            updateHeader: function(t, a, n) {
                this._cols_to_delete = [], this._cols_to_add = []
                ;
                for (var i = e.$container.querySelectorAll(".dhx_cal_header > div"), r = i[i.length - 1].querySelectorAll(".dhx_scale_bar"), o = [], _ = 0; _ < r.length; _++)
                    o.push(r[_].getAttribute("data-col-id"));
                if (this.getVisibleHeader(t, a)) {
                    for (var d = this._rendered_header_cache.slice(), s = [], _ = 0, l = o.length; _ < l; _++) {
                        var c = d.indexOf(o[_]);
                        c > -1 ? d.splice(c, 1) : s.push(o[_])
                    }
                    s.length && (this._cols_to_delete = s.slice(), this._deleteHeaderCells(s, t, n)), d.length && (this._cols_to_add = d.slice(), this._addHeaderCells(d, t, n))
                }
            },
            _deleteHeaderCells: function(e, t, a) {
                for (var n = 0; n < e.length; n++) {
                    var i = a.querySelector('[data-col-id="' + e[n] + '"]');
                    i && a.removeChild(i)
                }
            },
            _addHeaderCells: function(e, t, a) {
                for (var n = "", i = 0; i < e.length; i++)
                    n += t._h_cols[e[i]].div.outerHTML;
                a.insertAdjacentHTML("beforeEnd", n)
            },
            getVisibleLabels: function(e, t) {
                if (e._label_rows.length) {
                    var a = "";
                    this._rendered_labels_cache = [];
                    for (var n = 0; n < e._label_rows.length; n++)
                        if (this.isInYViewPort({
                            top: e._label_rows[n].top,
                            bottom: e._label_rows[n].top + e._section_height[e.y_unit[n].key]
                        }, t)) {
                            var i = e._label_rows[n].div;
                            a += i, this._rendered_labels_cache.push(n)
                        }
                    return a
                }
            },
            updateLabels: function(e, t, a) {
                this._rows_to_delete = [], this._rows_to_add = [];
                var n = this._rendered_labels_cache.slice();
                if (n.length || (this.getVisibleLabels(e, t), n = this._rendered_labels_cache.slice()), this.getVisibleLabels(e, t)) {
                    for (var i = this._rendered_labels_cache.slice(), r = [], o = 0, _ = n.length; o < _; o++) {
                        var d = i.indexOf(n[o]);
                        d > -1 ? i.splice(d, 1) : r.push(n[o])
                    }
                    r.length && (this._rows_to_delete = r.slice(), this._deleteLabelCells(r, e, a)), i.length && (this._rows_to_add = i.slice(), this._addLabelCells(i, e, a))
                }
            },
            _deleteLabelCells: function(e, t, a) {
                for (var n = 0; n < e.length; n++) {
                    var i = a.querySelector('[data-row-index="' + e[n] + '"]');
                    i && a.removeChild(i)
                }
            },
            _addLabelCells: function(e, t, a) {
                for (var n = "", i = 0; i < e.length; i++)
                    n += t._label_rows[e[i]].div;
                a.insertAdjacentHTML("beforeEnd", n)
            },
            clearPreparedEventsCache: function() {
                this.cachePreparedEvents(null)
            },
            cachePreparedEvents: function(e) {
                this._prepared_events_cache = e, this._prepared_events_coordinate_cache = e
            },
            getPreparedEvents: function(t) {
                var a;
                return this._prepared_events_cache ? a = this._prepared_events_cache : (a = e._prepare_timeline_events(t), a.$coordinates = {}, this.cachePreparedEvents(a)), a
            },
            updateEvents: function(t, a) {
                var n = this.getPreparedEvents(t),
                    i = this._rendered_events_cache.slice();
                this._rendered_events_cache = [];
                var r = e.$container.querySelector(".dhx_cal_data .dhx_timeline_data_col");
                if (r) {
                    for (var o = 0; o < this._rendered_labels_cache.length; o++) {
                        var _ = this._rendered_labels_cache[o],
                            d = [],
                            s = i[_] ? i[_].slice() : [];
                        e._timeline_calculate_event_positions.call(t, n[_]);
                        for (var l = e._timeline_smart_render.getVisibleEventsForRow(t, a, n, _), c = 0, h = l.length; c < h; c++) {
                            var u = s.indexOf(l[c].id);
                            u > -1 ? s.splice(u, 1) : d.push(l[c])
                        }
                        var g = r.querySelector('[data-section-index="' + _ + '"]');
                        s.length && this._deleteEvents(s, t, g), d.length && this._addEvents(d, t, g, _)
                    }
                    e._populate_timeline_rendered(e.$container), t._matrix = n
                }
            },
            _deleteEvents: function(e, t, a) {
                for (var n = 0; n < e.length; n++) {
                    var i = a.querySelector('[event_id="' + e[n] + '"]');
                    i && (i.classList.contains("dhx_in_move") || a.removeChild(i))
                }
            },
            _addEvents: function(t, a, n, i) {
                var r = e._timeline_update_events_html.call(a, t);
                n.insertAdjacentHTML("beforeEnd", r)
            },
            getVisibleEventsForRow: function(t, a, n, i) {
                var r = [];
                if ("cell" == t.render)
                    r = n;
                else {
                    var o = n[i];
                    if (o)
                        for (var _ = 0, d = o.length; _ < d; _++) {
                            var s,
                                l,
                                c = o[_],
                                h = i + "_" + c.id;
                            n.$coordinates && n.$coordinates[h] ? (s = n.$coordinates[h].xStart,
                            l = n.$coordinates[h].xEnd) : (s = e._timeline_getX(c, !1, t), l = e._timeline_getX(c, !0, t), n.$coordinates && (n.$coordinates[h] = {
                                xStart: s,
                                xEnd: l
                            })), e._timeline_smart_render.isInXViewPort({
                                left: s,
                                right: l
                            }, a) && (r.push(c), this._rendered_events_cache[i] || (this._rendered_events_cache[i] = []), this._rendered_events_cache[i].push(c.id))
                        }
                }
                return r
            },
            getVisibleRowCellsHTML: function(t, a, n, i, r) {
                for (var o, _ = "", d = this._rendered_header_cache, s = 0; s < d.length; s++) {
                    var l = d[s];
                    o = t._h_cols[l].left - t.dx,
                    e._ignores[l] ? "cell" == t.render ? _ += e._timeline_get_html_for_cell_ignores(n) : _ += e._timeline_get_html_for_bar_ignores() : "cell" == t.render ? _ += e._timeline_get_html_for_cell(l, r, t, i[r][l], n, o) : _ += e._timeline_get_html_for_bar(l, r, t, i[r], o)
                }
                return _
            },
            getVisibleTimelineRowsHTML: function(t, a, n, i) {
                var r = "",
                    o = e._timeline_get_cur_row_stats(t, i);
                o = e._timeline_get_fit_events_stats(t, i, o);
                var _ = t._label_rows[i];
                return "cell" == t.render ? (r += e._timeline_get_html_for_cell_data_row(i, o, _.top, _.section.key),
                r += this.getVisibleRowCellsHTML(t, a, o, n, i), r += "</div>") : (r += e._timeline_get_html_for_bar_matrix_line(i, o, _.top, _.section.key), r += e._timeline_get_html_for_bar_data_row(o), r += this.getVisibleRowCellsHTML(t, a, o, n, i), r += "</div></div>"), r
            },
            updateGridRows: function(e, t) {
                this._rows_to_delete.length && this._deleteGridRows(this._rows_to_delete), this._rows_to_add.length && this._addGridRows(this._rows_to_add, e, t)
            },
            _deleteGridRows: function(t) {
                var a = e.$container.querySelector(".dhx_cal_data .dhx_timeline_data_col");
                if (a) {
                    for (var n = 0; n < t.length; n++) {
                        var i = a.querySelector('[data-section-index="' + t[n] + '"]');
                        a.removeChild(i)
                    }
                    this._rows_to_delete = []
                }
            },
            _addGridRows: function(t, a, n) {
                var i = e.$container.querySelector(".dhx_cal_data .dhx_timeline_data_col");
                if (i) {
                    for (var r = this.getPreparedEvents(a), o = "", _ = 0; _ < t.length; _++)
                        o += this.getVisibleTimelineRowsHTML(a, n, r, t[_]);
                    i.insertAdjacentHTML("beforeEnd", o)
                    ;
                    for (var _ = 0; _ < t.length; _++)
                        e._timeline_finalize_section_add(a, a.y_unit[t[_]].key, i);
                    e._mark_now && e._mark_now(), this._rows_to_add = []
                }
            },
            updateGridCols: function(t, a) {
                for (var n = this._rendered_header_cache, i = {}, r = {}, o = 0; o < n.length; o++)
                    r[n[o]] = !0;
                var _ = e.$container.querySelector(".dhx_timeline_data_row");
                if (_)
                    for (var d = _.querySelectorAll("[data-col-id]"), o = 0; o < d.length; o++)
                        i[d[o].getAttribute("data-col-id")] = !0;
                var s = [],
                    l = [];
                for (var o in i)
                    r[o] || s.push(o);
                for (var o in r)
                    i[o] || l.push(o)
                    ;
                s.length && this._deleteGridCols(s, t), l.length && this._addGridCols(l, t, a)
            },
            _deleteGridCols: function(t, a) {
                var n = e.$container.querySelector(".dhx_cal_data .dhx_timeline_data_col");
                if (n) {
                    for (var i = 0; i < this._rendered_labels_cache.length; i++) {
                        var r;
                        if (r = "cell" == a.render ? n.querySelector('[data-section-index="' + this._rendered_labels_cache[i] + '"]') : n.querySelector('[data-section-index="' + this._rendered_labels_cache[i] + '"] .dhx_timeline_data_row '))
                            for (var o = 0; o < t.length; o++) {
                                var _ = r.querySelector('[data-col-id="' + t[o] + '"]');
                                _ && r.removeChild(_)
                            }
                    }
                    this._cols_to_delete = []
                }
            },
            _addGridCols: function(t, a, n) {
                var i = e.$container.querySelector(".dhx_cal_data .dhx_timeline_data_col");
                if (i) {
                    for (var r = this.getPreparedEvents(a), o = 0; o < this._rendered_labels_cache.length; o++) {
                        var _ = this._rendered_labels_cache[o],
                            d = "",
                            s = e._timeline_get_cur_row_stats(a, _);
                        s = e._timeline_get_fit_events_stats(a, _, s);
                        var l
                        ;
                        if (l = "cell" == a.render ? i.querySelector('[data-section-index="' + _ + '"]') : i.querySelector('[data-section-index="' + _ + '"] .dhx_timeline_data_row')) {
                            for (var c = 0; c < t.length; c++) {
                                if (!l.querySelector('[data-col-id="' + t[c] + '"]')) {
                                    var h = this.getVisibleGridCell(a, n, s, r, _, t[c]);
                                    h && (d += h)
                                }
                            }
                            l.insertAdjacentHTML("beforeEnd", d)
                        }
                    }
                    this._cols_to_add = []
                }
            },
            getVisibleGridCell: function(t, a, n, i, r, o) {
                if (t._h_cols[o]) {
                    var _ = "",
                        d = t._h_cols[o].left - t.dx
                        ;
                    return "cell" == t.render ? e._ignores[o] || (_ += e._timeline_get_html_for_cell(o, r, t, i[r][o], n, d)) : e._ignores[o] || (_ += e._timeline_get_html_for_bar(o, r, t, i[r], d)), _
                }
            }
        }
    }, e._temp_matrix_scope()
});

