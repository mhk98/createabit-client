"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1674],
  {
    18918: function (e, s, a) {
      a.d(s, {
        Z: function () {
          return l;
        },
      });
      function l(e) {
        let { preview: s, lightMode: a } = e,
          l = document.querySelector(
            'link[href="/landing-preview/css/preview-style.css"]'
          ),
          t = document.querySelector('link[href="/dark/assets/css/style.css"]'),
          r = document.querySelector(
            'link[href="/light/assets/css/style.css"]'
          ),
          i = document.querySelector(
            'link[href="/dark/assets/css/plugins.css"]'
          ),
          c = document.querySelector(
            'link[href="/light/assets/css/plugins.css"]'
          );
        if (a && !s) {
          document.querySelector("noscript").before(c),
            document.querySelector("noscript").before(r);
          let e = document.querySelectorAll(
            'link[href="/light/assets/css/plugins.css"]'
          );
          e.length > 1 && e[0].remove();
          let s = document.querySelectorAll(
            'link[href="/light/assets/css/style.css"]'
          );
          s.length > 1 && s[0].remove();
        }
        if (!a && !s) {
          document.querySelector("noscript").before(i),
            document.querySelector("noscript").before(t);
          let e = document.querySelectorAll(
            'link[href="/dark/assets/css/plugins.css"]'
          );
          e.length > 1 && e[0].remove();
          let s = document.querySelectorAll(
            'link[href="/dark/assets/css/style.css"]'
          );
          s.length > 1 && s[0].remove();
        }
        s && l
          ? (document.head.append(l), r && r.remove(), c && c.remove())
          : !s && l && l.remove();
      }
    },
    83538: function (e, s, a) {
      var l = a(85893),
        t = a(67294);
      s.Z = function () {
        return (
          (0, t.useEffect)(() => {
            let e = document.querySelectorAll(".hover-this"),
              s = document.querySelector(".cursor"),
              a = function (e) {
                let s = this.querySelector(".hover-anim"),
                  { offsetX: a, offsetY: l } = e,
                  { offsetWidth: t, offsetHeight: r } = this;
                (s.style.transform = "translate("
                  .concat((a / t) * 50 - 25, "px, ")
                  .concat((l / r) * 50 - 25, "px)")),
                  "mouseleave" === e.type && (s.style.transform = "");
              };
            e.forEach((e) => e.addEventListener("mousemove", a)),
              e.forEach((e) => e.addEventListener("mouseleave", a)),
              window.addEventListener("mousemove", (e) => {
                let { clientX: a, clientY: l } = e;
                (s.style.left = a + "px"), (s.style.top = l + "px");
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
          (0, l.jsx)("div", { className: "cursor" })
        );
      };
    },
    98876: function (e, s, a) {
      var l = a(85893),
        t = a(67294);
      s.Z = function () {
        return (
          (0, t.useEffect)(() => {
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
          (0, l.jsxs)("div", {
            className: "loader-wrap",
            children: [
              (0, l.jsx)("svg", {
                viewBox: "0 0 1000 1000",
                preserveAspectRatio: "none",
                children: (0, l.jsx)("path", {
                  id: "svg",
                  d: "M0,1005S175,995,500,995s500,5,500,5V0H0Z",
                }),
              }),
              (0, l.jsx)("div", {
                className: "loader-wrap-heading",
                children: (0, l.jsx)("span", {
                  children: (0, l.jsxs)("h2", {
                    className: "load-text",
                    children: [
                      (0, l.jsx)("span", { children: "L" }),
                      (0, l.jsx)("span", { children: "o" }),
                      (0, l.jsx)("span", { children: "a" }),
                      (0, l.jsx)("span", { children: "d" }),
                      (0, l.jsx)("span", { children: "i" }),
                      (0, l.jsx)("span", { children: "n" }),
                      (0, l.jsx)("span", { children: "g" }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      };
    },
    42037: function (e, s, a) {
      a.d(s, {
        Z: function () {
          return i;
        },
      });
      var l = a(85893),
        t = a(67294),
        r = () => {
          let e = document.querySelector(".progress-wrap"),
            s = document.querySelector(".progress-wrap path"),
            a = s.getTotalLength(),
            l = () => {
              let e = window.pageYOffset,
                l = document.documentElement.scrollHeight - window.innerHeight;
              s.style.strokeDashoffset = a - (e * a) / l;
            };
          e &&
            ((s.style.transition = s.style.WebkitTransition = "none"),
            (s.style.strokeDasharray = a + " " + a),
            (s.style.strokeDashoffset = a),
            s.getBoundingClientRect(),
            (s.style.transition = s.style.WebkitTransition =
              "stroke-dashoffset 10ms linear"),
            l(),
            window.addEventListener("scroll", l),
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
          (0, t.useEffect)(() => {
            r();
          }, []),
          (0, l.jsx)("div", {
            className: "progress-wrap cursor-pointer",
            children: (0, l.jsx)("svg", {
              className: "progress-circle svg-content",
              width: "100%",
              height: "100%",
              viewBox: "-1 -1 102 102",
              children: (0, l.jsx)("path", {
                d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98",
              }),
            }),
          })
        );
    },
    51317: function (e, s, a) {
      var l = a(85893),
        t = a(37513),
        r = a(41664),
        i = a.n(r);
      s.Z = function (e) {
        let { lightMode: s } = e;
        return (0, l.jsx)("footer", {
          className: "sub-bg",
          children: (0, l.jsxs)("div", {
            className: "footer-container",
            children: [
              (0, l.jsx)("div", {
                className: "container pb-80 pt-80 ontop",
                children: (0, l.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, l.jsx)("div", {
                      className: "col-lg-3",
                      children: (0, l.jsxs)("div", {
                        className: "colum md-mb50",
                        children: [
                          (0, l.jsx)("div", {
                            className: "tit mb-20",
                            children: (0, l.jsx)("h6", { children: "Address" }),
                          }),
                          (0, l.jsx)("div", {
                            className: "text",
                            children: (0, l.jsx)("p", {
                              children:
                                "901 South Highland St, Suite # 301,Arlington, VA 22041",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className: "col-lg-3 offset-lg-1",
                      children: (0, l.jsxs)("div", {
                        className: "colum md-mb50",
                        children: [
                          (0, l.jsx)("div", {
                            className: "tit mb-20",
                            children: (0, l.jsx)("h6", { children: "Company" }),
                          }),
                          (0, l.jsxs)("div", {
                            className: "text",
                            children: [
                              (0, l.jsx)("p", {
                                className: "mb-10",
                                children: (0, l.jsx)("a", {
                                  href: "#0",
                                  children: "info@createabit.com",
                                }),
                              }),
                              (0, l.jsx)("h5", {
                                children: (0, l.jsx)("a", {
                                  href: "#",
                                  children: "+703-347-6512",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className: "col-lg-2 md-mb50",
                      children: [
                        (0, l.jsx)("div", {
                          className: "tit mb-20",
                          children: (0, l.jsx)("h6", {
                            children: "Information",
                          }),
                        }),
                        (0, l.jsxs)("ul", {
                          className: "rest social-text ",
                          children: [
                            (0, l.jsx)("li", {
                              className: "mr-30",
                              children: (0, l.jsx)(i(), {
                                href: "/".concat(
                                  s ? "light" : "dark",
                                  "/page-team"
                                ),
                                children: "Our Team",
                              }),
                            }),
                            (0, l.jsx)("li", {
                              className: "mr-30",
                              children: (0, l.jsx)(i(), {
                                href: "/".concat(
                                  s ? "light" : "dark",
                                  "/page-team"
                                ),
                                children: "Our Client",
                              }),
                            }),
                            (0, l.jsx)("li", {
                              className: "mr-30",
                              children: (0, l.jsx)(i(), {
                                href: "/".concat(
                                  s ? "light" : "dark",
                                  "/blog-list/"
                                ),
                                children: "Our Blog",
                              }),
                            }),
                            (0, l.jsx)("li", {
                              children: (0, l.jsx)(i(), {
                                href: "/".concat(
                                  s ? "light" : "dark",
                                  "/shop-list"
                                ),
                                children: "Shop",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "col-lg-3",
                      children: [
                        (0, l.jsx)("div", {
                          className: "tit mb-20",
                          children: (0, l.jsx)("h6", { children: "Social" }),
                        }),
                        (0, l.jsxs)("ul", {
                          className: "rest social-text ",
                          children: [
                            (0, l.jsx)("li", {
                              className: "mr-30",
                              children: (0, l.jsx)(i(), {
                                href: "/".concat(
                                  s ? "light" : "dark",
                                  "/page-team"
                                ),
                                children: "Facebook",
                              }),
                            }),
                            (0, l.jsx)("li", {
                              className: "mr-30",
                              children: (0, l.jsx)(i(), {
                                href: "/".concat(
                                  s ? "light" : "dark",
                                  "/page-team"
                                ),
                                children: "Instagram",
                              }),
                            }),
                            (0, l.jsx)("li", {
                              className: "mr-30",
                              children: (0, l.jsx)(i(), {
                                href: "/".concat(
                                  s ? "light" : "dark",
                                  "/blog-list/"
                                ),
                                children: "Twitter",
                              }),
                            }),
                            (0, l.jsx)("li", {
                              children: (0, l.jsx)(i(), {
                                href: "/".concat(
                                  s ? "light" : "dark",
                                  "/shop-list"
                                ),
                                children: "LInkedin",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, l.jsx)("div", {
                className: "sub-footer pt-40 pb-40 bord-thin-top ontop",
                children: (0, l.jsx)("div", {
                  className: "container",
                  children: (0, l.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, l.jsx)("div", {
                        className: "col-lg-4",
                        children: (0, l.jsx)("div", {
                          className: "logo",
                          children: (0, l.jsx)("a", {
                            href: "#",
                            children: (0, l.jsx)("img", {
                              src: "/dark/assets/imgs/logo-".concat(
                                s ? "dark" : "light",
                                ".png"
                              ),
                              alt: "",
                            }),
                          }),
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: "col-lg-8",
                        children: (0, l.jsx)("div", {
                          className: "copyright d-flex",
                          children: (0, l.jsx)("div", {
                            className: "ml-auto",
                            children: (0, l.jsxs)("p", {
                              className: "fz-13",
                              children: [
                                "\xa9 2023 Geekfolio is Proudly Powered by",
                                " ",
                                (0, l.jsxs)("span", {
                                  className: "underline",
                                  children: [
                                    " ",
                                    (0, l.jsx)("a", {
                                      href: t.a,
                                      children: t.v,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        });
      };
    },
    53547: function (e, s, a) {
      var l = a(85893);
      s.Z = function (e) {
        let { data: s } = e;
        return (0, l.jsx)("header", {
          className: "pb-0 work-header section-padding",
          children: (0, l.jsx)("div", {
            className: "container mt-80",
            children: (0, l.jsx)("div", {
              className: "row",
              children: (0, l.jsx)("div", {
                className: "col-12",
                children: (0, l.jsxs)("div", {
                  className: "caption",
                  children: [
                    (0, l.jsx)("h6", {
                      className: "sub-title",
                      children: s.subTitle,
                    }),
                    (0, l.jsx)("h1", {
                      style: { textAlign: "left" },
                      children: s.title,
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      };
    },
    28810: function (e, s, a) {
      a.d(s, {
        Z: function () {
          return v;
        },
      });
      var l = a(85893),
        t = a(5551),
        r = a(45730),
        i = a(5121),
        c = a(25675),
        n = a.n(c),
        d = a(41664),
        o = a.n(d),
        h = a(39332),
        m = a(67294),
        x = a(93680),
        u = a(81173),
        j = a(86501),
        p = a(9944),
        g = function () {
          var e;
          let s = localStorage.getItem("userId");
          function a(e) {
            let s = e.currentTarget,
              a = parseInt(s[0].value),
              l = parseInt(s[1].value),
              t = document.querySelectorAll(".range-input input");
            l - a >= 1e3 &&
              l <= t[1].max &&
              ("input-min" === e.currentTarget.className
                ? (t[0].value = a)
                : (t[1].value = l));
          }
          function c(e) {
            let s = document.querySelectorAll(".range-input input"),
              a = document.querySelectorAll(".price-input input"),
              l = document.querySelector(".slider-range .progress"),
              t = parseInt(s[0].value),
              r = parseInt(s[1].value);
            r - t < 1e3
              ? "range-min" === e.currentTarget.className
                ? (s[0].value = r - 1e3)
                : (s[1].value = t + 1e3)
              : ((a[0].value = t),
                (a[1].value = r),
                (l.style.left = (t / s[0].max) * 100 + "%"),
                (l.style.right = 100 - (r / s[1].max) * 100 + "%"));
          }
          let d = (0, h.useRouter)();
          function g(e) {
            e.stopPropagation();
            let s = document.querySelector(".select-options");
            "none" === s.style.display
              ? (s.style.display = "block")
              : (s.style.display = "none"),
              document
                .querySelector(".select-styled")
                .classList.toggle("active");
          }
          function v(e) {
            e.stopPropagation(),
              document
                .querySelector(".select-styled")
                .classList.remove("active"),
              (document.querySelector(".select-styled").innerHTML =
                e.currentTarget.innerHTML),
              (document.querySelector("select").value =
                e.currentTarget.getAttribute("rel")),
              (document.querySelector(".select-options").style.display =
                "none");
          }
          let { data: f, isLoading: N, isError: y, error: b } = (0, r.C$)(),
            w = null == f ? void 0 : f.data,
            { data2: k, isLoading2: S, isError2: C, error2: L } = (0, t.G1)(s),
            [P, q] = (0, m.useState)([]);
          (0, m.useEffect)(() => {
            C
              ? console.error2("Error fetching cart data:", L)
              : !S && k && k.data && q(k.data);
          }, [k, S, C, L]);
          let [I] = (0, t.i6)(),
            H = (e, s) => {
              if (P.some((s) => s.Product_Id === e.Product_Id))
                alert("This product is already in the cart.");
              else {
                let a = [...P, e];
                q(a);
                let l = {
                  title: e.title,
                  price: e.price,
                  Image: e.Image,
                  usertblUserID: s,
                };
                console.log("cart data here", e),
                  I(l),
                  localStorage.setItem("cart", JSON.stringify(a)),
                  j.ZP.success("Product added to the cart");
              }
            },
            [Z, E] = (0, m.useState)(null),
            T = async (e) => {
              E(e);
            },
            { data: A, isLoading: M, error: B } = (0, r.u6)(Z);
          console.log("data1", A);
          let F = (0, p.jl)(),
            [V, D] = (0, m.useState)(!1),
            _ = () => {
              D(!0);
            },
            [z, O] = (0, m.useState)({ Email: "", Password: "" }),
            $ = (e) => {
              O({ ...z, [e.target.name]: e.target.value });
            };
          console.log("formData", z);
          let G = async (e) => {
            e.preventDefault();
            try {
              let e = await i.Z.post(
                "http://localhost:5000/api/v1/user/login",
                z
              );
              e.data.data.accessToken &&
                (j.ZP.success("Successfully Logged In"),
                localStorage.setItem("userId", e.data.data.user.User_ID),
                d.push("/")),
                (0, p.MG)({ accessToken: e.data.data.accessToken });
            } catch (e) {
              console.error("Error:", e);
            }
          };
          return (0, l.jsxs)("div", {
            className: "row",
            children: [
              (0, l.jsx)("div", {
                className: "col-lg-3",
                children: (0, l.jsxs)("div", {
                  className: "sidebar md-mb80",
                  children: [
                    (0, l.jsx)("div", {
                      className: "mb-40 item search",
                      children: (0, l.jsx)("form", {
                        action: "contact.php",
                        children: (0, l.jsxs)("div", {
                          className: "form-group",
                          children: [
                            (0, l.jsx)("input", {
                              type: "text",
                              name: "shop_search",
                              placeholder: "Search",
                            }),
                            (0, l.jsx)("button", {
                              type: "submit",
                              children: (0, l.jsx)("span", {
                                className: "pe-7s-search",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className: "mb-40 item categories",
                      children: [
                        (0, l.jsx)("div", {
                          className: "title",
                          children: (0, l.jsx)("h6", {
                            children: "Categories",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "dot-list",
                          children: (0, l.jsxs)("ul", {
                            className: "rest",
                            children: [
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)("a", {
                                  onClick: () => T("Technology"),
                                  children: "Technology",
                                }),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)("a", {
                                  onClick: () => T("Accessories"),
                                  children: "Accessories",
                                }),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)("a", {
                                  onClick: () => T("Furniture"),
                                  children: "Furniture",
                                }),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)("a", {
                                  onClick: () => T("Clothes"),
                                  children: "Clothes",
                                }),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)("a", {
                                  onClick: () => T("Jewellery"),
                                  children: "Jewellery",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "mb-40 item price-range",
                      children: [
                        (0, l.jsx)("div", {
                          className: "title",
                          children: (0, l.jsx)("h6", {
                            children: "Filter by Price",
                          }),
                        }),
                        (0, l.jsxs)("div", {
                          className: "wrapper",
                          children: [
                            (0, l.jsx)("div", {
                              className: "slider-range",
                              children: (0, l.jsx)("div", {
                                className: "progress",
                              }),
                            }),
                            (0, l.jsxs)("div", {
                              className: "range-input",
                              children: [
                                (0, l.jsx)("input", {
                                  type: "range",
                                  className: "range-min",
                                  min: "10",
                                  max: "10000",
                                  defaultValue: "10",
                                  step: "100",
                                  onInput: c,
                                }),
                                (0, l.jsx)("input", {
                                  type: "range",
                                  className: "range-max",
                                  min: "0",
                                  max: "10000",
                                  defaultValue: "7500",
                                  step: "100",
                                  onInput: c,
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className:
                                "price-input d-flex align-items-center mt-15",
                              children: [
                                (0, l.jsx)("div", {
                                  children: (0, l.jsxs)("div", {
                                    className: "field",
                                    children: [
                                      (0, l.jsx)("span", { children: "$" }),
                                      (0, l.jsx)("input", {
                                        type: "number",
                                        className: "input-min",
                                        defaultValue: "10",
                                        onInput: a,
                                      }),
                                    ],
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "ml-auto",
                                  children: (0, l.jsxs)("div", {
                                    className: "field",
                                    children: [
                                      (0, l.jsx)("span", { children: "$" }),
                                      (0, l.jsx)("input", {
                                        type: "number",
                                        className: "input-max",
                                        defaultValue: "7500",
                                        onInput: a,
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "mb-40 item best-sale",
                      children: [
                        (0, l.jsx)("div", {
                          className: "title",
                          children: (0, l.jsx)("h6", {
                            children: "Best Sellers",
                          }),
                        }),
                        (0, l.jsxs)("div", {
                          className: "line-list d-flex align-items-center",
                          children: [
                            (0, l.jsx)("div", {
                              children: (0, l.jsx)("div", {
                                className: "img",
                                children: (0, l.jsx)("img", {
                                  src: "/dark/assets/imgs/shop/1.jpg",
                                  alt: "",
                                }),
                              }),
                            }),
                            (0, l.jsx)("div", {
                              children: (0, l.jsxs)("div", {
                                className: "cont",
                                children: [
                                  (0, l.jsxs)("div", {
                                    className: "rate",
                                    children: [
                                      (0, l.jsx)("i", {
                                        className: "fas fa-star",
                                      }),
                                      (0, l.jsx)("i", {
                                        className: "fas fa-star",
                                      }),
                                      (0, l.jsx)("i", {
                                        className: "fas fa-star",
                                      }),
                                      (0, l.jsx)("i", {
                                        className: "fas fa-star",
                                      }),
                                      (0, l.jsx)("i", {
                                        className: "fas fa-star",
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)("h6", { children: "Men Hooded" }),
                                  (0, l.jsx)("h5", { children: "$130.00" }),
                                ],
                              }),
                            }),
                            (0, l.jsx)("a", {
                              href: "#0",
                              className: "over-link",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "line-list d-flex align-items-center",
                          children: [
                            (0, l.jsx)("div", {
                              children: (0, l.jsx)("div", {
                                className: "img",
                                children: (0, l.jsx)("img", {
                                  src: "/dark/assets/imgs/shop/3.jpg",
                                  alt: "",
                                }),
                              }),
                            }),
                            (0, l.jsx)("div", {
                              children: (0, l.jsxs)("div", {
                                className: "cont",
                                children: [
                                  (0, l.jsxs)("div", {
                                    className: "rate",
                                    children: [
                                      (0, l.jsx)("i", {
                                        className: "fas fa-star",
                                      }),
                                      (0, l.jsx)("i", {
                                        className: "fas fa-star",
                                      }),
                                      (0, l.jsx)("i", {
                                        className: "fas fa-star",
                                      }),
                                      (0, l.jsx)("i", {
                                        className: "fas fa-star",
                                      }),
                                      (0, l.jsx)("i", {
                                        className: "fas fa-star",
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)("h6", { children: "Men Hooded" }),
                                  (0, l.jsx)("h5", { children: "$130.00" }),
                                ],
                              }),
                            }),
                            (0, l.jsx)("a", {
                              href: "#0",
                              className: "over-link",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "line-list d-flex align-items-center",
                          children: [
                            (0, l.jsx)("div", {
                              children: (0, l.jsx)("div", {
                                className: "img",
                                children: (0, l.jsx)("img", {
                                  src: "/dark/assets/imgs/shop/5.jpg",
                                  alt: "",
                                }),
                              }),
                            }),
                            (0, l.jsx)("div", {
                              children: (0, l.jsxs)("div", {
                                className: "cont",
                                children: [
                                  (0, l.jsxs)("div", {
                                    className: "rate",
                                    children: [
                                      (0, l.jsx)("i", {
                                        className: "fas fa-star",
                                      }),
                                      (0, l.jsx)("i", {
                                        className: "fas fa-star",
                                      }),
                                      (0, l.jsx)("i", {
                                        className: "fas fa-star",
                                      }),
                                      (0, l.jsx)("i", {
                                        className: "fas fa-star",
                                      }),
                                      (0, l.jsx)("i", {
                                        className: "fas fa-star",
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)("h6", { children: "Men Hooded" }),
                                  (0, l.jsx)("h5", { children: "$130.00" }),
                                ],
                              }),
                            }),
                            (0, l.jsx)("a", {
                              href: "#0",
                              className: "over-link",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "item tags",
                      children: [
                        (0, l.jsx)("div", {
                          className: "title",
                          children: (0, l.jsx)("h6", {
                            children: "Popular Tags",
                          }),
                        }),
                        (0, l.jsxs)("div", {
                          className: "tags-links",
                          children: [
                            (0, l.jsx)("a", { href: "#0", children: "Design" }),
                            (0, l.jsx)("a", {
                              href: "#0",
                              children: "Development",
                            }),
                            (0, l.jsx)("a", { href: "#0", children: "Tech" }),
                            (0, l.jsx)("a", { href: "#0", children: "Blog" }),
                            (0, l.jsx)("a", {
                              href: "#0",
                              children: "Branding",
                            }),
                            (0, l.jsx)("a", { href: "#0", children: "Mobile" }),
                            (0, l.jsx)("a", {
                              href: "#0",
                              children: "ThemesCamp",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, l.jsx)("div", {
                className: "col-lg-9",
                children: b
                  ? (0, l.jsx)(l.Fragment, {
                      children: "Oh no, there was an error",
                    })
                  : N
                  ? (0, l.jsx)(l.Fragment, { children: "Loading..." })
                  : f || A
                  ? (0, l.jsxs)("div", {
                      className: "shop-products",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "mb-40 top-side d-flex align-items-end",
                          children: [
                            (0, l.jsx)("div", {
                              children: (0, l.jsx)("h6", {
                                className: "fz-16 line-height-1",
                                children: "Showing 1–9 of 12 results",
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className: "ml-auto",
                              children: (0, l.jsxs)("div", {
                                className: "select",
                                children: [
                                  (0, l.jsxs)("select", {
                                    className: "form-control select-hidden",
                                    onClick: g,
                                    children: [
                                      (0, l.jsx)("option", {
                                        value: "Most Popular",
                                        children: "Most Popular",
                                      }),
                                      (0, l.jsx)("option", {
                                        value: "Sort by average rating",
                                        children: "Sort by average rating",
                                      }),
                                      (0, l.jsx)("option", {
                                        value: "Price [Lowest to Highest]",
                                        children: "Price [Lowest to Highest]",
                                      }),
                                      (0, l.jsx)("option", {
                                        value: "Price [Highest to Lowest]",
                                        children: "Price [Highest to Lowest]",
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "select-styled",
                                    onClick: g,
                                    children: "Most Popular",
                                  }),
                                  (0, l.jsxs)("ul", {
                                    className: "select-options",
                                    children: [
                                      (0, l.jsx)("li", {
                                        rel: "Most Popular",
                                        onClick: v,
                                        children: "Most Popular",
                                      }),
                                      (0, l.jsx)("li", {
                                        rel: "Sort by average rating",
                                        onClick: v,
                                        children: "Sort by average rating",
                                      }),
                                      (0, l.jsx)("li", {
                                        rel: "Price [Lowest to Highest]",
                                        onClick: v,
                                        children: "Price [Lowest to Highest]",
                                      }),
                                      (0, l.jsx)("li", {
                                        rel: "Price [Highest to Lowest]",
                                        onClick: v,
                                        children: "Price [Highest to Lowest]",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        Z && "Success" === A.status
                          ? (0, l.jsx)("div", {
                              className: "row",
                              children:
                                null === (e = A.data) || void 0 === e
                                  ? void 0
                                  : e.map((e) =>
                                      (0, l.jsxs)(
                                        "div",
                                        {
                                          className: "col-md-4 col-lg-4",
                                          children: [
                                            (0, l.jsxs)("div", {
                                              className: "item mb-50",
                                              children: [
                                                (0, l.jsxs)("div", {
                                                  className: "img",
                                                  children: [
                                                    (0, l.jsx)(n(), {
                                                      src: "http://localhost:5000/".concat(
                                                        e.Image
                                                      ),
                                                      alt: "",
                                                      width: 300,
                                                      height: 200,
                                                    }),
                                                    F
                                                      ? (0, l.jsx)("button", {
                                                          onClick: () =>
                                                            H(e, s),
                                                          className:
                                                            "cart-color add-cart",
                                                          children:
                                                            "Add to Cart",
                                                        })
                                                      : (0, l.jsx)("button", {
                                                          onClick: _,
                                                          className:
                                                            "cart-color add-cart",
                                                          children:
                                                            "Add to Cart",
                                                        }),
                                                    (0, l.jsx)("span", {
                                                      className: "fav",
                                                      children: (0, l.jsx)(
                                                        "i",
                                                        {
                                                          className:
                                                            "far fa-heart",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                (0, l.jsxs)("div", {
                                                  className: "cont",
                                                  children: [
                                                    (0, l.jsx)("div", {
                                                      className: "rate",
                                                    }),
                                                    (0, l.jsx)("h6", {
                                                      children: e.title,
                                                    }),
                                                    (0, l.jsxs)("h5", {
                                                      children: ["$", e.price],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, l.jsxs)(u.Z, {
                                              show: V,
                                              onHide: () => D(!1),
                                              children: [
                                                (0, l.jsx)(u.Z.Header, {
                                                  closeButton: !0,
                                                  children: (0, l.jsx)(
                                                    u.Z.Title,
                                                    {
                                                      className: "text-dark",
                                                      children:
                                                        "Welcome! Please Login to continue.",
                                                    }
                                                  ),
                                                }),
                                                (0, l.jsx)(u.Z.Body, {
                                                  children: (0, l.jsxs)(
                                                    "form",
                                                    {
                                                      onSubmit: G,
                                                      className:
                                                        "register-form",
                                                      children: [
                                                        (0, l.jsxs)("div", {
                                                          className:
                                                            "form-group",
                                                          children: [
                                                            (0, l.jsx)(
                                                              "label",
                                                              {
                                                                className:
                                                                  "text-left ",
                                                                htmlFor:
                                                                  "email",
                                                                children:
                                                                  "Email",
                                                              }
                                                            ),
                                                            (0, l.jsx)(
                                                              "input",
                                                              {
                                                                className:
                                                                  "form-input",
                                                                type: "email",
                                                                name: "Email",
                                                                id: "email",
                                                                value: z.email,
                                                                onChange: $,
                                                                required: !0,
                                                              }
                                                            ),
                                                          ],
                                                        }),
                                                        (0, l.jsxs)("div", {
                                                          className:
                                                            "form-group",
                                                          children: [
                                                            (0, l.jsx)(
                                                              "label",
                                                              {
                                                                className:
                                                                  "text-left ",
                                                                htmlFor:
                                                                  "password",
                                                                children:
                                                                  "Password",
                                                              }
                                                            ),
                                                            (0, l.jsx)(
                                                              "input",
                                                              {
                                                                className:
                                                                  "form-input",
                                                                type: "password",
                                                                name: "Password",
                                                                id: "password",
                                                                value:
                                                                  z.Password,
                                                                onChange: $,
                                                                required: !0,
                                                              }
                                                            ),
                                                          ],
                                                        }),
                                                        (0, l.jsx)("button", {
                                                          type: "submit",
                                                          className:
                                                            "mt-3 butn butn-md butn-bord radius-10",
                                                          children: "Login",
                                                        }),
                                                      ],
                                                    }
                                                  ),
                                                }),
                                                (0, l.jsx)(u.Z.Footer, {
                                                  children: (0, l.jsx)(x.Z, {
                                                    variant: "dark",
                                                    onClick: () => D(!1),
                                                    children: "Close",
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        e.Product_Id
                                      )
                                    ),
                            })
                          : (0, l.jsx)("div", {
                              className: "row",
                              children:
                                null == w
                                  ? void 0
                                  : w.map((e) =>
                                      (0, l.jsxs)(
                                        "div",
                                        {
                                          className: "col-md-4 col-lg-4",
                                          children: [
                                            (0, l.jsxs)("div", {
                                              className: "item mb-50",
                                              children: [
                                                (0, l.jsxs)("div", {
                                                  className: "img",
                                                  children: [
                                                    (0, l.jsx)(n(), {
                                                      src: "http://localhost:5000/".concat(
                                                        e.Image
                                                      ),
                                                      alt: "",
                                                      width: 300,
                                                      height: 200,
                                                    }),
                                                    F
                                                      ? (0, l.jsx)("button", {
                                                          onClick: () =>
                                                            H(e, s),
                                                          className:
                                                            "cart-color add-cart",
                                                          children:
                                                            "Add to Cart",
                                                        })
                                                      : (0, l.jsx)("button", {
                                                          onClick: _,
                                                          className:
                                                            "cart-color add-cart",
                                                          children:
                                                            "Add to Cart",
                                                        }),
                                                    (0, l.jsx)("span", {
                                                      className: "fav",
                                                      children: (0, l.jsx)(
                                                        "i",
                                                        {
                                                          className:
                                                            "far fa-heart",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                (0, l.jsxs)("div", {
                                                  className: "cont",
                                                  children: [
                                                    (0, l.jsx)("div", {
                                                      className: "rate",
                                                    }),
                                                    (0, l.jsx)("h6", {
                                                      children: e.title,
                                                    }),
                                                    (0, l.jsxs)("h5", {
                                                      children: ["$", e.price],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, l.jsxs)(u.Z, {
                                              size: "lg",
                                              show: V,
                                              onHide: () => D(!1),
                                              children: [
                                                (0, l.jsx)(u.Z.Header, {
                                                  closeButton: !0,
                                                  children: (0, l.jsx)(
                                                    u.Z.Title,
                                                    {
                                                      className:
                                                        "mx-auto text-dark",
                                                      children:
                                                        "Please Login to continue",
                                                    }
                                                  ),
                                                }),
                                                (0, l.jsx)(u.Z.Body, {
                                                  children: (0, l.jsxs)("div", {
                                                    className: "row",
                                                    children: [
                                                      (0, l.jsxs)("div", {
                                                        className: "col-lg-6",
                                                        children: [
                                                          (0, l.jsxs)("form", {
                                                            onSubmit: G,
                                                            className:
                                                              "register-form",
                                                            children: [
                                                              (0, l.jsxs)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "form-group",
                                                                  children: [
                                                                    (0, l.jsx)(
                                                                      "label",
                                                                      {
                                                                        className:
                                                                          "text-left text-dark",
                                                                        htmlFor:
                                                                          "email",
                                                                        children:
                                                                          "Email",
                                                                      }
                                                                    ),
                                                                    (0, l.jsx)(
                                                                      "input",
                                                                      {
                                                                        className:
                                                                          "form-input text-dark",
                                                                        type: "email",
                                                                        name: "Email",
                                                                        id: "email",
                                                                        value:
                                                                          z.email,
                                                                        onChange:
                                                                          $,
                                                                        required:
                                                                          !0,
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, l.jsxs)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "form-group",
                                                                  children: [
                                                                    (0, l.jsx)(
                                                                      "label",
                                                                      {
                                                                        className:
                                                                          "text-left text-dark",
                                                                        htmlFor:
                                                                          "password",
                                                                        children:
                                                                          "Password",
                                                                      }
                                                                    ),
                                                                    (0, l.jsx)(
                                                                      "input",
                                                                      {
                                                                        className:
                                                                          "form-input",
                                                                        type: "password",
                                                                        name: "Password",
                                                                        id: "password",
                                                                        value:
                                                                          z.Password,
                                                                        onChange:
                                                                          $,
                                                                        required:
                                                                          !0,
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, l.jsx)(
                                                                "button",
                                                                {
                                                                  type: "submit",
                                                                  className:
                                                                    "mt-3 text-white bg-black butn butn-md butn-bord radius-10",
                                                                  style: {
                                                                    width:
                                                                      "300px",
                                                                  },
                                                                  children:
                                                                    "Login",
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          (0, l.jsxs)("p", {
                                                            className:
                                                              "mt-2 text-center text-black",
                                                            children: [
                                                              (0, l.jsx)(
                                                                "span",
                                                                {
                                                                  children:
                                                                    "Don't have account?",
                                                                }
                                                              ),
                                                              (0, l.jsx)(
                                                                "span",
                                                                {
                                                                  children: (0,
                                                                  l.jsx)(o(), {
                                                                    href: "/dark/register",
                                                                    className:
                                                                      "text-primary",
                                                                    children:
                                                                      "Sign Up",
                                                                  }),
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      (0, l.jsxs)("div", {
                                                        className:
                                                          "mt-3 col-lg-6",
                                                        children: [
                                                          (0, l.jsxs)(
                                                            "button",
                                                            {
                                                              type: "submit",
                                                              className:
                                                                "mt-3 text-white align-middle butn butn-md butn-bord radius-10",
                                                              style: {
                                                                backgroundColor:
                                                                  "#3B5998",
                                                                display: "flex",
                                                                alignItems:
                                                                  "center",
                                                                width: "300px",
                                                              },
                                                              children: [
                                                                (0, l.jsx)(
                                                                  "svg",
                                                                  {
                                                                    xmlns:
                                                                      "http://www.w3.org/2000/svg",
                                                                    viewBox:
                                                                      "0 0 320 512",
                                                                    height: 30,
                                                                    width: 18,
                                                                    fill: "white",
                                                                    children:
                                                                      (0,
                                                                      l.jsx)(
                                                                        "path",
                                                                        {
                                                                          d: "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z",
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                                (0, l.jsx)(
                                                                  "span",
                                                                  {
                                                                    style: {
                                                                      fontSize:
                                                                        "25px",
                                                                      marginLeft:
                                                                        "10px",
                                                                    },
                                                                    children:
                                                                      "Facebook",
                                                                  }
                                                                ),
                                                              ],
                                                            }
                                                          ),
                                                          (0, l.jsxs)(
                                                            "button",
                                                            {
                                                              type: "submit",
                                                              className:
                                                                "mt-3 text-white align-middle butn butn-md butn-bord radius-10",
                                                              style: {
                                                                backgroundColor:
                                                                  "#D34836",
                                                                display: "flex",
                                                                alignItems:
                                                                  "center",
                                                                width: "300px",
                                                              },
                                                              children: [
                                                                (0, l.jsx)(
                                                                  "svg",
                                                                  {
                                                                    xmlns:
                                                                      "http://www.w3.org/2000/svg",
                                                                    viewBox:
                                                                      "0 0 640 512",
                                                                    height: 30,
                                                                    width: 45,
                                                                    fill: "white",
                                                                    children:
                                                                      (0,
                                                                      l.jsx)(
                                                                        "path",
                                                                        {
                                                                          d: "M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448 204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9 54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7 109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z",
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                                (0, l.jsx)(
                                                                  "span",
                                                                  {
                                                                    style: {
                                                                      fontSize:
                                                                        "25px",
                                                                      marginLeft:
                                                                        "10px",
                                                                    },
                                                                    children:
                                                                      "Google",
                                                                  }
                                                                ),
                                                              ],
                                                            }
                                                          ),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                                (0, l.jsx)(u.Z.Footer, {
                                                  children: (0, l.jsx)(x.Z, {
                                                    className:
                                                      "text-white bg-black border-0",
                                                    onClick: () => D(!1),
                                                    children: "Close",
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        e.Product_Id
                                      )
                                    ),
                            }),
                      ],
                    })
                  : null,
              }),
            ],
          });
        },
        v = function () {
          return (0, l.jsx)("section", {
            className: "main-shop section-padding",
            children: (0, l.jsx)("div", {
              className: "container",
              children: (0, l.jsx)("div", {
                className: "row md-marg",
                children: (0, l.jsx)(g, {}),
              }),
            }),
          });
        };
    },
    28235: function (e, s, a) {
      var l = a(85893),
        t = a(67294),
        r = a(9008),
        i = a.n(r),
        c = a(18918),
        n = a(83538),
        d = a(42037);
      s.Z = (e) => {
        let { children: s, lightMode: a } = e;
        return (
          (0, t.useEffect)(() => {
            (0, c.Z)({ lightMode: a });
          }, [a]),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(i(), {
                children: a
                  ? (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)("link", {
                          rel: "stylesheet",
                          href: "/light/assets/css/plugins.css",
                        }),
                        (0, l.jsx)("link", {
                          rel: "stylesheet",
                          href: "/light/assets/css/style.css",
                        }),
                      ],
                    })
                  : (0, l.jsx)("link", {
                      rel: "stylesheet",
                      href: "/dark/assets/css/base.css",
                    }),
              }),
              (0, l.jsx)(n.Z, {}),
              (0, l.jsx)(d.Z, {}),
              s,
            ],
          })
        );
      };
    },
    37513: function (e) {
      e.exports = JSON.parse(
        '{"v":"ThemesCamp","a":"https://themeforest.net/user/themescamp"}'
      );
    },
  },
]);
