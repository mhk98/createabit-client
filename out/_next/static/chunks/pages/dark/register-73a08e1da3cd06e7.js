(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4343],
  {
    61251: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/dark/register",
        function () {
          return t(77534);
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
          o = document.querySelector(
            'link[href="/light/assets/css/style.css"]'
          ),
          a = document.querySelector(
            'link[href="/dark/assets/css/plugins.css"]'
          ),
          l = document.querySelector(
            'link[href="/light/assets/css/plugins.css"]'
          );
        if (t && !s) {
          document.querySelector("noscript").before(l),
            document.querySelector("noscript").before(o);
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
          document.querySelector("noscript").before(a),
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
          ? (document.head.append(r), o && o.remove(), l && l.remove())
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
                  { offsetWidth: n, offsetHeight: o } = this;
                (s.style.transform = "translate("
                  .concat((t / n) * 50 - 25, "px, ")
                  .concat((r / o) * 50 - 25, "px)")),
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
          return a;
        },
      });
      var r = t(85893),
        n = t(67294),
        o = () => {
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
        a = () => (
          (0, n.useEffect)(() => {
            o();
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
        o = t(9008),
        a = t.n(o),
        l = t(18918),
        i = t(83538),
        c = t(42037);
      s.Z = (e) => {
        let { children: s, lightMode: t } = e;
        return (
          (0, n.useEffect)(() => {
            (0, l.Z)({ lightMode: t });
          }, [t]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(a(), {
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
              (0, r.jsx)(i.Z, {}),
              (0, r.jsx)(c.Z, {}),
              s,
            ],
          })
        );
      };
    },
    77534: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return v;
          },
        });
      var r = t(85893),
        n = t(67294),
        o = t(9008),
        a = t.n(o),
        l = t(28235),
        i = t(5121),
        c = t(41664),
        d = t.n(c),
        u = t(39332),
        m = t(86501),
        h = () => {
          let e = (0, u.useRouter)(),
            [s, t] = (0, n.useState)({ Name: "", Email: "", Password: "" }),
            o = (e) => {
              t({ ...s, [e.target.name]: e.target.value });
            },
            a = async (t) => {
              t.preventDefault();
              try {
                let t = await i.Z.post(
                  "https://createabit-backend.onrender.com/api/v1/user/register",
                  s
                );
                t &&
                  (m.ZP.success("Successfully Register"),
                  e.push("/dark/login")),
                  console.log("RegisterData", t.data);
              } catch (e) {
                console.error("Error:", e);
              }
            };
          return (0, r.jsxs)("div", {
            className: "register-container",
            children: [
              (0, r.jsx)("h3", { children: "Register" }),
              (0, r.jsxs)("form", {
                onSubmit: a,
                className: "register-form",
                children: [
                  (0, r.jsxs)("div", {
                    className: "form-group",
                    children: [
                      (0, r.jsx)("label", {
                        htmlFor: "username",
                        children: "Name",
                      }),
                      (0, r.jsx)("input", {
                        className: "form-input",
                        type: "text",
                        name: "Name",
                        id: "username",
                        value: s.Name,
                        onChange: o,
                        required: !0,
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "form-group",
                    children: [
                      (0, r.jsx)("label", {
                        htmlFor: "email",
                        children: "Email",
                      }),
                      (0, r.jsx)("input", {
                        className: "form-input",
                        type: "email",
                        name: "Email",
                        id: "email",
                        value: s.Email,
                        onChange: o,
                        required: !0,
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "form-group",
                    children: [
                      (0, r.jsx)("label", {
                        htmlFor: "password",
                        children: "Password",
                      }),
                      (0, r.jsx)("input", {
                        className: "form-input",
                        type: "password",
                        name: "Password",
                        id: "password",
                        value: s.Password,
                        onChange: o,
                        required: !0,
                      }),
                    ],
                  }),
                  (0, r.jsx)("button", {
                    type: "submit",
                    className: "mt-3 butn butn-md butn-bord radius-10",
                    children: "Register",
                  }),
                  (0, r.jsxs)("p", {
                    className: "mt-2",
                    children: [
                      (0, r.jsx)("span", {
                        children: "Alreay have an account?",
                      }),
                      (0, r.jsx)("span", {
                        children: (0, r.jsxs)(d(), {
                          href: "/dark/login",
                          className: "text-primary",
                          children: [" ", "Sign In"],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        p = t(98876),
        f = t(21453);
      function g() {
        return (
          (0, n.useEffect)(
            () => (
              document.body.classList.add("main-bg"),
              gsap.registerPlugin(ScrollTrigger, ScrollSmoother),
              ScrollTrigger.normalizeScroll(!0),
              ScrollSmoother.create({ smooth: 2, effects: !0 }),
              () => document.body.classList.remove("main-bg")
            ),
            []
          ),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(a(), {
                children: (0, r.jsx)("title", {
                  children: "Createabit - User Register",
                }),
              }),
              (0, r.jsx)(p.Z, {}),
              (0, r.jsxs)("div", {
                id: "smooth-wrapper",
                children: [
                  (0, r.jsx)(f.default, {}),
                  (0, r.jsx)("div", {
                    id: "smooth-content",
                    children: (0, r.jsx)("main", {
                      className: "main-bg",
                      children: (0, r.jsx)(h, {}),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      g.getLayout = (e) => (0, r.jsx)(l.Z, { children: e });
      var v = g;
    },
    11163: function (e, s, t) {
      e.exports = t(57875);
    },
  },
  function (e) {
    e.O(0, [1664, 5121, 1453, 9774, 2888, 179], function () {
      return e((e.s = 61251));
    }),
      (_N_E = e.O());
  },
]);
