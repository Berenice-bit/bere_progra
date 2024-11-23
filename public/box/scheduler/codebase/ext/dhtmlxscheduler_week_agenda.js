/*

@license
dhtmlxScheduler v.5.3.8 Professional

This software can be used only as part of dhtmlx.com site.
You are not allowed to use it on any other site

(c) XB Software Ltd.

*/
Scheduler.plugin(function(e) {
    e._wa = {}, e.xy.week_agenda_scale_height = 20, e.templates.week_agenda_event_text = function(t, a, n, i) {
        return e.templates.event_date(t) + " " + n.text
    }, e.date.week_agenda_start = e.date.week_start, e.date.week_agenda_end = function(t) {
        return e.date.add(t, 7, "day")
    }, e.date.add_week_agenda = function(t, a) {
        return e.date.add(t, 7 * a, "day")
    }, e.attachEvent("onSchedulerReady", function() {
        var t = e.templates;
        t.week_agenda_date || (t.week_agenda_date = t.week_date)
    }), function() {
        var t = e.date.date_to_str("%l, %F %d");
        e.templates.week_agenda_scale_date = function(e) {
            return t(e)
        }
    }(), e.attachEvent("onTemplatesReady", function() {
        var t = e.render_data;
        e.render_data = function(a) {
            if ("week_agenda" != this._mode)
                return t.apply(this, arguments);
            e.week_agenda_view(!0)
        };
        var a = function() {
                e._cols = [];
                var t = parseInt(e._els.dhx_cal_data[0].style.width);
                e._cols.push(Math.floor(t / 2)), e._cols.push(t - e._cols[0] - 1), e._colsS = {
                    0: [],
                    1: []
                }
                ;
                for (var a = parseInt(e._els.dhx_cal_data[0].style.height), n = 0; n < 3; n++)
                    e._colsS[0].push(Math.floor(a / (3 - e._colsS[0].length))), a -= e._colsS[0][n];
                e._colsS[1].push(e._colsS[0][0]), e._colsS[1].push(e._colsS[0][1]), a = e._colsS[0][e._colsS[0].length - 1], e._colsS[1].push(Math.floor(a / 2)), e._colsS[1].push(a - e._colsS[1][e._colsS[1].length - 1])
            },
            n = function() {
                a(), e._els.dhx_cal_data[0].innerHTML = "", e._rendered = [];
                for (var t = "", n = 0; n < 2; n++) {
                    var i = e._cols[n],
                        r = "dhx_wa_column";
                    1 == n && (r += " dhx_wa_column_last"),
                    t += "<div class='" + r + "' style='width: " + i + "px;'>";
                    for (var o = 0; o < e._colsS[n].length; o++) {
                        var _ = e.xy.week_agenda_scale_height - 2;
                        t += "<div class='dhx_wa_day_cont'><div style='height:" + _ + "px; line-height:" + _ + "px;' class='dhx_wa_scale_bar'></div><div style='height:" + (e._colsS[n][o] - _ - 2) + "px;' class='dhx_wa_day_data' day='" + Math.min(6, 2 * o + n) + "'></div></div>"
                    }
                    t += "</div>"
                }
                var d = e._getNavDateElement();
                d && (d.innerHTML = e.templates[e._mode + "_date"](e._min_date, e._max_date, e._mode)),
                e._els.dhx_cal_data[0].innerHTML = t;
                for (var s = e._els.dhx_cal_data[0].getElementsByTagName("div"), l = [], n = 0; n < s.length; n++)
                    "dhx_wa_day_cont" == s[n].className && l.push(s[n]);
                e._wa._selected_divs = [];
                for (var c = e.get_visible_events(), h = e.date.week_start(e._date), u = e.date.add(h, 1, "day"), n = 0; n < 7; n++) {
                    l[n]._date = h, e._waiAria.weekAgendaDayCell(l[n], h);
                    var v = l[n].childNodes[0],
                        g = l[n].childNodes[1];
                    v.innerHTML = e.templates.week_agenda_scale_date(h);
                    for (var f = [], p = 0; p < c.length; p++) {
                        var m = c[p]
                        ;
                        m.start_date < u && m.end_date > h && f.push(m)
                    }
                    f.sort(function(e, t) {
                        return e.start_date.valueOf() == t.start_date.valueOf() ? e.id > t.id ? 1 : -1 : e.start_date > t.start_date ? 1 : -1
                    });
                    for (var o = 0; o < f.length; o++) {
                        var y = f[o],
                            x = document.createElement("div");
                        e._rendered.push(x);
                        var b = e.templates.event_class(y.start_date, y.end_date, y);
                        x.className = "dhx_wa_ev_body" + (b ? " " + b : ""), e.config.rtl && (x.className += " dhx_wa_ev_body_rtl"), y._text_style && (x.style.cssText = y._text_style), y.color && (x.style.background = y.color),
                        y.textColor && (x.style.color = y.textColor), e._select_id && y.id == e._select_id && (e.config.week_agenda_select || void 0 === e.config.week_agenda_select) && (x.className += " dhx_cal_event_selected", e._wa._selected_divs.push(x));
                        var w = "";
                        y._timed || (w = "middle", y.start_date.valueOf() >= h.valueOf() && y.start_date.valueOf() <= u.valueOf() && (w = "start"), y.end_date.valueOf() >= h.valueOf() && y.end_date.valueOf() <= u.valueOf() && (w = "end")), x.innerHTML = e.templates.week_agenda_event_text(y.start_date, y.end_date, y, h, w),
                        x.setAttribute("event_id", y.id), e._waiAria.weekAgendaEvent(x, y), g.appendChild(x)
                    }
                    h = e.date.add(h, 1, "day"), u = e.date.add(u, 1, "day")
                }
            };
        e.week_agenda_view = function(t) {
            if (e._min_date = e.date.week_start(e._date), e._max_date = e.date.add(e._min_date, 1, "week"), e.set_sizes(), t) {
                e._table_view = e._allow_dnd = !0, void 0 === e._wa._prev_data_border && (e._wa._prev_data_border = e._els.dhx_cal_data[0].style.borderTopWidth), e._els.dhx_cal_data[0].style.borderTopWidth = 0, e._els.dhx_cal_data[0].style.overflowY = "hidden",
                e._els.dhx_cal_date[0].innerHTML = "", e._els.dhx_cal_data[0].style.top = parseInt(e._els.dhx_cal_data[0].style.top) - 20 - 1 + "px", e._els.dhx_cal_data[0].style.height = parseInt(e._els.dhx_cal_data[0].style.height) + 20 + 1 + "px", e._els.dhx_cal_header[0].style.display = "none";
                var a = e.$container.querySelector(".dhx_cal_scale_placeholder");
                a && (a.style.display = "none"), n()
            } else
                e._table_view = e._allow_dnd = !1, void 0 !== e._wa._prev_data_border && (e._els.dhx_cal_data[0].style.borderTopWidth = e._wa._prev_data_border,
                delete e._wa._prev_data_border), e._els.dhx_cal_data[0].style.overflowY = "auto", e._els.dhx_cal_data[0].style.top = parseInt(e._els.dhx_cal_data[0].style.top) + 20 + "px", e._els.dhx_cal_data[0].style.height = parseInt(e._els.dhx_cal_data[0].style.height) - 20 + "px", e._els.dhx_cal_header[0].style.display = "block"
        }, e.mouse_week_agenda = function(t) {
            for (var a, n = t.ev, i = n.srcElement || n.target; i.parentNode;)
                i._date && (a = i._date), i = i.parentNode;
            if (!a)
                return t;
            t.x = 0;
            var r = a.valueOf() - e._min_date.valueOf()
            ;
            if (t.y = Math.ceil(r / 6e4 / this.config.time_step), "move" == this._drag_mode && this._drag_pos && this._is_pos_changed(this._drag_pos, t)) {
                var o;
                this._drag_event._dhx_changed = !0, this._select_id = this._drag_id;
                for (var _ = 0; _ < e._rendered.length; _++)
                    e._drag_id == this._rendered[_].getAttribute("event_id") && (o = this._rendered[_]);
                if (!e._wa._dnd) {
                    var d = o.cloneNode(!0);
                    this._wa._dnd = d, d.className = o.className, d.id = "dhx_wa_dnd", d.className += " dhx_wa_dnd", document.body.appendChild(d)
                }
                var s = document.getElementById("dhx_wa_dnd");
                s.style.top = (n.pageY || n.clientY) + 20 + "px", s.style.left = (n.pageX || n.clientX) + 20 + "px"
            }
            return t
        }, e.attachEvent("onBeforeEventChanged", function(t, a, n) {
            if ("week_agenda" == this._mode && "move" == this._drag_mode) {
                var i = document.getElementById("dhx_wa_dnd");
                i.parentNode.removeChild(i), e._wa._dnd = !1
            }
            return !0
        }), e.attachEvent("onEventSave", function(e, t, a) {
            return a && "week_agenda" == this._mode && (this._select_id = e), !0
        }), e._wa._selected_divs = [],
        e.attachEvent("onClick", function(t, a) {
            if ("week_agenda" == this._mode && (e.config.week_agenda_select || void 0 === e.config.week_agenda_select)) {
                if (e._wa._selected_divs)
                    for (var n = 0; n < this._wa._selected_divs.length; n++) {
                        var i = this._wa._selected_divs[n];
                        i.className = i.className.replace(/ dhx_cal_event_selected/, "")
                    }
                return this.for_rendered(t, function(t) {
                    t.className += " dhx_cal_event_selected", e._wa._selected_divs.push(t)
                }), e._select_id = t, !1
            }
            return !0
        })
    })
});

