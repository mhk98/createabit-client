(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2610],
  {
    25153: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/dark/page-service-details/[id]",
        function () {
          return t(25902);
        },
      ]);
    },
    18918: function (e, s, t) {
      "use strict";
      function r(e) {
        let { preview: s, lightMode: t } = e,
          r = document.querySelector(
            'link[href="/landing-preview/css/preview-style.css"]'
          ),
          n = document.querySelector('link[href="/dark/assets/css/style.css"]'),
          l = document.querySelector(
            'link[href="/light/assets/css/style.css"]'
          ),
          i = document.querySelector(
            'link[href="/dark/assets/css/plugins.css"]'
          ),
          o = document.querySelector(
            'link[href="/light/assets/css/plugins.css"]'
          );
        if (t && !s) {
          document.querySelector("noscript").before(o),
            document.querySelector("noscript").before(l);
          let e = document.querySelectorAll(
            'link[href="/light/assets/css/plugins.css"]'
          );
          e.length > 1 && e[0].remove();
          let s = document.querySelectorAll(
            'link[href="/light/assets/css/style.css"]'
          );
          s.length > 1 && s[0].remove();
        }
        if (!t && !s) {
          document.querySelector("noscript").before(i),
            document.querySelector("noscript").before(n);
          let e = document.querySelectorAll(
            'link[href="/dark/assets/css/plugins.css"]'
          );
          e.length > 1 && e[0].remove();
          let s = document.querySelectorAll(
            'link[href="/dark/assets/css/style.css"]'
          );
          s.length > 1 && s[0].remove();
        }
        s && r
          ? (document.head.append(r), l && l.remove(), o && o.remove())
          : !s && r && r.remove();
      }
      t.d(s, {
        Z: function () {
          return r;
        },
      });
    },
    83538: function (e, s, t) {
      "use strict";
      var r = t(85893),
        n = t(67294);
      s.Z = function () {
        return (
          (0, n.useEffect)(() => {
            let e = document.querySelectorAll(".hover-this"),
              s = document.querySelector(".cursor"),
              t = function (e) {
                let s = this.querySelector(".hover-anim"),
                  { offsetX: t, offsetY: r } = e,
                  { offsetWidth: n, offsetHeight: l } = this;
                (s.style.transform = "translate("
                  .concat((t / n) * 50 - 25, "px, ")
                  .concat((r / l) * 50 - 25, "px)")),
                  "mouseleave" === e.type && (s.style.transform = "");
              };
            e.forEach((e) => e.addEventListener("mousemove", t)),
              e.forEach((e) => e.addEventListener("mouseleave", t)),
              window.addEventListener("mousemove", (e) => {
                let { clientX: t, clientY: r } = e;
                (s.style.left = t + "px"), (s.style.top = r + "px");
              }),
              document.querySelectorAll("a, .cursor-pointer").forEach((e) => {
                e.addEventListener("mousemove", () => {
                  s.classList.add("cursor-active");
                }),
                  e.addEventListener("mouseleave", () => {
                    s.classList.remove("cursor-active");
                  });
              });
          }, []),
          (0, r.jsx)("div", { className: "cursor" })
        );
      };
    },
    98876: function (e, s, t) {
      "use strict";
      var r = t(85893),
        n = t(67294);
      s.Z = function () {
        return (
          (0, n.useEffect)(() => {
            let e = document.getElementById("svg"),
              s = gsap.timeline();
            s.to(
              ".loader-wrap-heading .load-text , .loader-wrap-heading .cont",
              { delay: 1.5, y: -100, opacity: 0 }
            ),
              s
                .to(e, {
                  duration: 0.5,
                  attr: { d: "M0 502S175 272 500 272s500 230 500 230V0H0Z" },
                  ease: "power2.easeIn",
                })
                .to(e, {
                  duration: 0.5,
                  attr: { d: "M0 2S175 1 500 1s500 1 500 1V0H0Z" },
                  ease: "power2.easeOut",
                }),
              s.to(".loader-wrap", { y: -1500 }),
              s.to(".loader-wrap", { zIndex: -1, display: "none" }),
              s.from("header", { y: 200 }, "-=1.5"),
              s.from(
                "header .container",
                { y: 40, opacity: 0, delay: 0.3 },
                "-=1.5"
              );
          }, []),
          (0, r.jsxs)("div", {
            className: "loader-wrap",
            children: [
              (0, r.jsx)("svg", {
                viewBox: "0 0 1000 1000",
                preserveAspectRatio: "none",
                children: (0, r.jsx)("path", {
                  id: "svg",
                  d: "M0,1005S175,995,500,995s500,5,500,5V0H0Z",
                }),
              }),
              (0, r.jsx)("div", {
                className: "loader-wrap-heading",
                children: (0, r.jsx)("span", {
                  children: (0, r.jsxs)("h2", {
                    className: "load-text",
                    children: [
                      (0, r.jsx)("span", { children: "L" }),
                      (0, r.jsx)("span", { children: "o" }),
                      (0, r.jsx)("span", { children: "a" }),
                      (0, r.jsx)("span", { children: "d" }),
                      (0, r.jsx)("span", { children: "i" }),
                      (0, r.jsx)("span", { children: "n" }),
                      (0, r.jsx)("span", { children: "g" }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      };
    },
    42037: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return i;
        },
      });
      var r = t(85893),
        n = t(67294),
        l = () => {
          let e = document.querySelector(".progress-wrap"),
            s = document.querySelector(".progress-wrap path"),
            t = s.getTotalLength(),
            r = () => {
              let e = window.pageYOffset,
                r = document.documentElement.scrollHeight - window.innerHeight;
              s.style.strokeDashoffset = t - (e * t) / r;
            };
          e &&
            ((s.style.transition = s.style.WebkitTransition = "none"),
            (s.style.strokeDasharray = t + " " + t),
            (s.style.strokeDashoffset = t),
            s.getBoundingClientRect(),
            (s.style.transition = s.style.WebkitTransition =
              "stroke-dashoffset 10ms linear"),
            r(),
            window.addEventListener("scroll", r),
            window.addEventListener("scroll", function () {
              window.pageYOffset > 150
                ? e.classList.add("active-progress")
                : document
                    .querySelector(".progress-wrap")
                    .classList.remove("active-progress");
            }),
            e.addEventListener("click", function (e) {
              return (
                e.preventDefault(),
                window.scrollTo({ top: 0, behavior: "smooth" }),
                !1
              );
            }));
        },
        i = () => (
          (0, n.useEffect)(() => {
            l();
          }, []),
          (0, r.jsx)("div", {
            className: "progress-wrap cursor-pointer",
            children: (0, r.jsx)("svg", {
              className: "progress-circle svg-content",
              width: "100%",
              height: "100%",
              viewBox: "-1 -1 102 102",
              children: (0, r.jsx)("path", {
                d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98",
              }),
            }),
          })
        );
    },
    28235: function (e, s, t) {
      "use strict";
      var r = t(85893),
        n = t(67294),
        l = t(9008),
        i = t.n(l),
        o = t(18918),
        c = t(83538),
        a = t(42037);
      s.Z = (e) => {
        let { children: s, lightMode: t } = e;
        return (
          (0, n.useEffect)(() => {
            (0, o.Z)({ lightMode: t });
          }, [t]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(i(), {
                children: t
                  ? (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)("link", {
                          rel: "stylesheet",
                          href: "/light/assets/css/plugins.css",
                        }),
                        (0, r.jsx)("link", {
                          rel: "stylesheet",
                          href: "/light/assets/css/style.css",
                        }),
                      ],
                    })
                  : (0, r.jsx)("link", {
                      rel: "stylesheet",
                      href: "/dark/assets/css/base.css",
                    }),
              }),
              (0, r.jsx)(c.Z, {}),
              (0, r.jsx)(a.Z, {}),
              s,
            ],
          })
        );
      };
    },
    25902: function (e, s, t) {
      "use strict";
      t.r(s);
      var r = t(85893),
        n = t(98876),
        l = t(34294),
        i = t(28235),
        o = t(9008),
        c = t.n(o),
        a = t(11163),
        d = t(21453);
      function u() {
        let e = (0, a.useRouter)(),
          { id: s } = e.query,
          {
            data: t,
            isLoading: i,
            isError: o,
            isSuccess: u,
            error: h,
          } = (0, l.m)(s),
          f = null == t ? void 0 : t.data;
        return (
          console.log("serviceDetails", t),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(c(), {
                children: (0, r.jsx)("title", {
                  children: "Createabit - Services",
                }),
              }),
              (0, r.jsx)(n.Z, {}),
              (0, r.jsx)(d.default, {}),
              (0, r.jsx)("main", {
                children: h
                  ? (0, r.jsx)(r.Fragment, {
                      children: "Oh no, there was an error",
                    })
                  : i
                  ? (0, r.jsx)(r.Fragment, { children: "Loading..." })
                  : t
                  ? (0, r.jsxs)("div", {
                      className: "service",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "serviceDetails",
                          children: [
                            (0, r.jsx)("div", {
                              children: (0, r.jsx)("img", {
                                src: "https://createabit-backend.onrender.com/".concat(
                                  null == f ? void 0 : f.image
                                ),
                                alt: "",
                              }),
                            }),
                            (0, r.jsxs)("div", {
                              children: [
                                (0, r.jsx)("h2", {
                                  children: null == f ? void 0 : f.title,
                                }),
                                (0, r.jsx)("p", {
                                  className: "mt-8",
                                  children: null == f ? void 0 : f.text1,
                                }),
                                " ",
                                (0, r.jsx)("br", {}),
                                (0, r.jsx)("p", {
                                  children: null == f ? void 0 : f.text2,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "serviceDetails-title",
                          children: [
                            (0, r.jsx)("h2", {
                              children: null == f ? void 0 : f.question,
                            }),
                            (0, r.jsxs)("div", {
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "serviceDetails-feature",
                                  children: [
                                    (0, r.jsx)("p", {
                                      className: "shadow-lg p-4 rounded-lg",
                                      children:
                                        null == f ? void 0 : f.shortText1,
                                    }),
                                    (0, r.jsx)("p", {
                                      className: "shadow-lg p-4 rounded-lg",
                                      children:
                                        null == f ? void 0 : f.shortText2,
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className: "serviceDetails-feature",
                                  children: [
                                    (0, r.jsx)("p", {
                                      className: "shadow-lg p-4 rounded-lg",
                                      children:
                                        null == f ? void 0 : f.shortText3,
                                    }),
                                    (0, r.jsx)("p", {
                                      className: "shadow-lg p-4 rounded-lg",
                                      children:
                                        null == f ? void 0 : f.shortText4,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    })
                  : null,
              }),
            ],
          })
        );
      }
      (u.getLayout = (e) => (0, r.jsx)(i.Z, { children: e })), (s.default = u);
    },
    11163: function (e, s, t) {
      e.exports = t(57875);
    },
  },
  function (e) {
    e.O(0, [1664, 1453, 9774, 2888, 179], function () {
      return e((e.s = 25153));
    }),
      (_N_E = e.O());
  },
]);
