{
    const t = (...t) => e => t.reduce((t, e) => e(t), e),
        e = (t, e, r) => Object.defineProperty(t, e, {
            value: r,
            writable: !0,
            configurable: !0,
            enumerable: !0
        }),
        r = t => t[0],
        a = t => t[t.length - 1],
        n = (t, e) => Math.floor(Math.random() * (e - t)) + t,
        o = (t, e) => {
            const r = n => {
                n - a >= e && (a = n, t()), requestAnimationFrame(r)
            };
            let a = performance.now();
            requestAnimationFrame(r)
        },
        s = (t, e, r, a) => r * (t /= a) * Math.pow(t, 3) + e,
        l = (t, e, r, a) => -r * ((t = t / a - 1) * Math.pow(t, 3) - 1) + e,
        i = (t, e, r, a) => (t /= a / 2) < 1 ? r / 2 * Math.pow(t, 4) + e : -r / 2 * ((t -= 2) * Math.pow(t, 3) - 2) + e,
        c = (t, e, r, a, n) => (null == n && (n = 1.70158), (t /= a / 2) < 1 ? r / 2 * (t * t * ((1 + (n *= 1.525)) * t - n)) + e : r / 2 * ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2) + e),
        m = (t, e, r, a, n = 700) => {
            if (0 == t || 0 == r) return e;
            if (1 == (t /= a)) return e + r;
            const o = r,
                s = a * (1 - Math.min(n, 999) / 1e3),
                l = o < Math.abs(r) ? s / 4 : s / (2 * Math.PI) * Math.asin(r / o);
            return o * Math.pow(2, -10 * t) * Math.sin((t * a - l) * (2 * Math.PI) / s) + r + e
        }; {
        const t = document.getElementById("intro"),
            n = t => t.split(" ").map(Number);
        let o = {
            polygon: [{
                points: n("10.4 7 5.8 10.7 7.1 12.3 13.6 7 7.1 1.7 5.8 3.3")
            }],
            rect: [{
                x: 2,
                y: 6,
                width: 9
            }]
        };
        const s = Object.keys(o).reduce((r, a) => e(r, a, t.querySelector(`ul ${a}`)), {});
        if (s.polygon && s.rect) {
            o.polygon.push({
                points: n(s.polygon.getAttribute("points"))
            }), o.rect.push(Object.keys(r(o.rect)).reduce((t, r) => e(t, r, Number(s.rect.getAttribute(r))), {}));
            const i = () => o = Object.keys(o).reduce((t, r) => e(t, r, [...o[r]].reverse()), {}),
                c = () => Object.keys(o).reduce((t, r) => e(t, r, a(o[r])), {});
            let m, u = c();
            const p = () => {
                const t = Object.assign({}, u),
                    a = {
                        polygon: {
                            points: r(o.polygon).points.map((t, e) => t - u.polygon.points[e])
                        },
                        rect: Object.keys(r(o.rect)).reduce((t, a) => e(t, a, r(o.rect)[a] - u.rect[a]), {})
                    },
                    n = {
                        start: performance.now(),
                        total: 400
                    },
                    p = r => {
                        e(n, "elapsed", r - n.start), u = {
                            polygon: {
                                points: t.polygon.points.map((t, e) => l(n.elapsed, t, a.polygon.points[e], n.total))
                            },
                            rect: Object.keys(a.rect).reduce((r, o) => e(r, o, l(n.elapsed, t.rect[o], a.rect[o], n.total)), {})
                        }, s.polygon.setAttribute("points", u.polygon.points.join(" ")), Object.keys(u.rect).forEach(t => s.rect.setAttribute(t, u.rect[t])), n.elapsed < n.total && (m = requestAnimationFrame(p))
                    };
                cancelAnimationFrame(m), i(), u = c(), m = requestAnimationFrame(p)
            };
            ["mouseenter", "mouseleave"].forEach(e => t.querySelector("li:first-child a").addEventListener(e, p))
        }
    } {
        const t = t => Object.keys(r).find(e => e != t.state),
            r = {
                inactive: {
                    fill: [185, 244, 188],
                    cx: 27
                },
                active: {
                    fill: [27, 185, 120],
                    cx: 39
                }
            },
            a = Array.from(document.querySelectorAll("#complete-toolkit g"), (t, a) => ["rect", "circle"].reduce((r, a) => e(r, a, t.querySelector(a)), {
                time: {},
                state: Object.keys(r)[a]
            })),
            o = a => {
                const n = t(a),
                    o = {
                        total: 700
                    },
                    s = t => {
                        null == o.start && e(o, "start", t), e(o, "elapsed", t - o.start);
                        const l = r[a.state].fill.map((t, e) => {
                            const a = r[n].fill[e] - t,
                                s = i(o.elapsed, t, a, o.total);
                            return Math.round(s)
                        }).join(",");
                        a.rect.setAttribute("fill", `rgb(${l})`);
                        const c = r[a.state].cx,
                            m = r[n].cx - c,
                            u = i(o.elapsed, c, m, o.total);
                        a.circle.setAttribute("cx", u), o.elapsed < o.total ? requestAnimationFrame(s) : e(a, "state", n)
                    };
                requestAnimationFrame(s)
            },
            s = t => {
                a.forEach(r => {
                    const {
                        time: a
                    } = r;
                    null == a.start && (e(a, "start", t), e(a, "delay", n(800, 8e3))), e(a, "elapsed", t - a.start), a.elapsed >= a.delay && (o(r), delete a.start)
                }), requestAnimationFrame(s)
            };
        requestAnimationFrame(s)
    } {
        const r = document.getElementById("programming-languages"),
            a = ["clojure", "erlang", "fsharp", "go", "haskell", "javascript", "php", "python", "r", "ruby", "rust", "scala", "scheme", "swift"],
            s = (t, e, r) => {
                if (Math.abs(t) > e) return n(-r, r);
                const a = Math.sqrt(Math.pow(e, 2) - Math.pow(t, 2));
                return (2 * Math.round(Math.random()) - 1) * n(a, r)
            };
        o(t(() => a[n(0, a.length)], t => {
            const e = document.createElement("img");
            return e.alt = t, e.src = `/img/v3/home/programming-languages/${t}.svg`, r.appendChild(e), e.setAttribute("aria-hidden", !0), e
        }, t => {
            const a = {
                    total: 12e3
                },
                o = {};
            e(o, "translateX", n(-120, 120)), e(o, "translateY", s(o.translateX, 60, 120)), e(o, "rotate", n(-800, 800));
            const i = n => {
                null == a.start && e(a, "start", n), e(a, "elapsed", n - a.start);
                const s = l(a.elapsed, 0, 1, a.total);
                t.style.opacity = Math.abs(1 - s), t.style.transform = Object.keys(o).map(t => {
                    return `${t}(${o[t]*s}${/rotate/.test(t)?"deg":"px"})`
                }).join(" "), a.elapsed < a.total ? requestAnimationFrame(i) : r.removeChild(t)
            };
            requestAnimationFrame(i)
        }), 500)
    } {
        const t = t => ["x", "y"].reduce((e, r) => {
                const a = `c${r}`;
                return e + (e.length ? " " : "") + t.nextElementSibling.getAttribute(a)
            }, ""),
            r = Array.from(document.querySelectorAll("#developers-first .heading-icon path"), (e, r) => ({
                element: e,
                center: t(e),
                direction: r ? -1 : 1
            })),
            a = 15e3,
            n = 360,
            o = {},
            s = t => {
                null == o.start && e(o, "start", t), e(o, "elapsed", t - o.start), e(o, "progress", o.elapsed / a);
                const l = Math.min(n * o.progress, n);
                r.forEach(t => t.element.setAttribute("transform", `rotate(${l*t.direction} ${t.center})`)), l == n && delete o.start, requestAnimationFrame(s)
            };
        requestAnimationFrame(s)
    } {
        const e = document.querySelector("#always-improving .heading-icon"),
            n = e.getElementsByTagName("path"),
            l = t => t.getAttribute("fill").match(/\d+/g).map(Number),
            m = (() => {
                const e = t(r, Number);
                return t => e(/\d+/.exec(t.getAttribute("transform")))
            })(),
            u = {
                fills: [l(r(n)), l(a(n))],
                delta: m(a(n)),
                scale: {
                    ratio: .5,
                    cy: e.querySelector("circle").getAttribute("r") / 2
                }
            },
            p = (t, e) => {
                const [r, a, n] = e.map(Math.round);
                return t.setAttribute("fill", `rgb(${r},${a},${n})`), t
            },
            d = {
                move(t, e, n) {
                    const o = l => {
                        const i = l - e,
                            m = r(u.fills).map((t, e) => s(i, t, a(u.fills)[e] - t, n)),
                            d = c(i, 0, u.delta, n, 4);
                        p(t, m).setAttribute("transform", `translate(${d})`), i < n && requestAnimationFrame(o)
                    };
                    requestAnimationFrame(o)
                }, leave(t, r, a) {
                    const n = o => {
                        const l = o - r,
                            i = Math.max(0, s(l, 1, -1, a)),
                            c = s(l, 1, -u.scale.ratio, a),
                            m = s(l, u.delta, 80, a),
                            p = s(l, 0, u.scale.cy, a);
                        t.setAttribute("fill-opacity", i), t.setAttribute("transform", `translate(${m} ${p}) scale(${c})`), l < a ? requestAnimationFrame(n) : e.removeChild(t)
                    };
                    requestAnimationFrame(n)
                }, enter(t, e, r) {
                    const a = n => {
                        const o = n - e,
                            s = i(o, 0, 1, r),
                            l = i(o, u.scale.ratio, u.scale.ratio, r),
                            c = i(o, -40, 40, r),
                            m = i(o, u.scale.cy, -u.scale.cy, r);
                        t.setAttribute("fill-opacity", s), t.setAttribute("transform", `translate(${c} ${m}) scale(${l})`), o < r && requestAnimationFrame(a)
                    };
                    requestAnimationFrame(a)
                }
            };
        o(() => {
            const t = {
                move: r(n),
                leave: a(n),
                enter: r(n).cloneNode()
            };
            e.insertBefore(t.enter, t.move).setAttribute("fill-opacity", 0), Object.keys(t).forEach(e => d[e](t[e], performance.now(), 700))
        }, 4e3)
    } {
        const t = document.querySelector("#global-scale .heading-icon path"),
            a = /\d+\.?\d/g,
            n = [{
                d: t.getAttribute("d")
            }, {
                d: "M26.1,32.1 C25,31 24,31.3 24,33 L24,40 C24,41.1 24.9,42 26,42 L33,42 C34.7,42 35.1,41.1 33.9,39.9 L31.8,37.8 L37.8,31.8 L39.9,33.9 C41,35 42,34.7 42,33 L42,26 C42,24.9 41.1,24 40,24 L33,24 C31.3,24 30.9,24.9 32.1,26.1 L34.3,28.3 L28.3,34.3 L26.1,32.1"
            }].map(t => e(t, "numbers", t.d.match(a).map(Number))),
            s = r(n).d.split(a),
            l = t => t.reduce((t, e, r) => t + s[r] + e, ""),
            i = () => {
                const r = n.find(t => t != c),
                    a = {
                        start: performance.now(),
                        total: 1200
                    },
                    o = n => {
                        e(a, "elapsed", n - a.start);
                        const s = c.numbers.map((t, e) => m(a.elapsed, t, r.numbers[e] - t, a.total));
                        t.setAttribute("d", l(s)), a.elapsed < a.total ? requestAnimationFrame(o) : c = r
                    };
                requestAnimationFrame(o)
            };
        let c = r(n);
        o(i, 4e3)
    }
}