(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [167],
  {
    4096: function (e, s, t) {
      "use strict";
      var c = t(85893),
        l = t(5551),
        a = t(43920),
        n = t(25675),
        i = t.n(n),
        r = t(41664),
        o = t.n(r),
        d = t(39332),
        h = t(67294),
        u = t(86501),
        m = t(9944);
      s.Z = function (e) {
        let { lightMode: s } = e,
          t = (0, d.useRouter)(),
          n = (0, m.jl)();
        console.log("userLoggedIn", n);
        let r = localStorage.getItem("userId"),
          { data: x, isLoading: j, isError: p, error: N } = (0, l.G1)(r),
          [f, g] = (0, h.useState)([]);
        (0, h.useEffect)(() => {
          p
            ? console.error("Error fetching cart data:", N)
            : !j && x && x.data && g(x.data);
        }, [x, j, p, N]);
        let b = (e, s) => {
            g((t) =>
              t.map((t) => (t.Cart_Id === e ? { ...t, quantity: s } : t))
            );
            let t = y();
            F(t - S);
            let c = JSON.stringify(f);
            localStorage.setItem("cart", c);
          },
          v = (e, s) => e * s,
          y = () => f.reduce((e, s) => e + v(s.price, s.quantity), 0),
          [k] = (0, l.vF)(),
          w = async (e) => {
            if (e && window.confirm("Do you want to delete?")) {
              console.log("productId", e), await k(e);
              let s = f.filter((s) => s.Cart_Id !== e);
              g(s);
              let t = y();
              F(t - S);
              let c = JSON.stringify(s);
              localStorage.setItem("cart", c);
            }
          },
          [C, I] = (0, h.useState)(""),
          [S, _] = (0, h.useState)(0),
          [z, F] = (0, h.useState)(y()),
          [P] = (0, a.kD)(),
          q = async () => {
            let e = y(),
              s = {
                orderDetails: f,
                subtotal: e.toFixed(2),
                total: (e - S).toFixed(2),
              },
              c = await P(s);
            c &&
              (u.ZP.success("Now you are ready for proceed checkout"),
              t.push("/dark/shop-checkout"));
          };
        return (0, c.jsx)("section", {
          className: "shop-cart ".concat(s ? "light" : "", " section-padding"),
          children: (0, c.jsx)("div", {
            className: "container",
            children: (0, c.jsx)("div", {
              className: "row justify-content-center",
              children: (0, c.jsxs)("div", {
                className: "col-lg-11",
                children: [
                  (0, c.jsx)("div", {
                    children: (0, c.jsxs)("table", {
                      children: [
                        (0, c.jsx)("thead", {
                          children: (0, c.jsxs)("tr", {
                            children: [
                              (0, c.jsx)("th", { children: "Product" }),
                              (0, c.jsx)("th", { children: "Price" }),
                              (0, c.jsx)("th", { children: "Quantity" }),
                              (0, c.jsx)("th", { children: "Subtotal" }),
                              (0, c.jsx)("th", { children: "\xa0" }),
                            ],
                          }),
                        }),
                        (0, c.jsx)("tbody", {
                          children:
                            null == f
                              ? void 0
                              : f.map((e) =>
                                  (0, c.jsxs)(
                                    "tr",
                                    {
                                      children: [
                                        (0, c.jsx)("td", {
                                          "data-column": "Product",
                                          children: (0, c.jsxs)("div", {
                                            className:
                                              "d-flex align-items-center",
                                            children: [
                                              (0, c.jsx)("div", {
                                                children: (0, c.jsx)("div", {
                                                  className: "img icon-img-80",
                                                  children: (0, c.jsx)(i(), {
                                                    src: "http://localhost:5000/".concat(
                                                      e.Image
                                                    ),
                                                    alt: "",
                                                    width: 70,
                                                    height: 50,
                                                  }),
                                                }),
                                              }),
                                              (0, c.jsx)("div", {
                                                className: "ml-30",
                                                children: (0, c.jsx)("h6", {
                                                  children: e.title,
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, c.jsx)("td", {
                                          "data-column": "price",
                                          children: (0, c.jsxs)("h5", {
                                            className: "main-color4 fz-18",
                                            children: ["$", e.price],
                                          }),
                                        }),
                                        (0, c.jsx)("td", {
                                          "data-column": "Quantity",
                                          children: (0, c.jsxs)("div", {
                                            className: "counter",
                                            children: [
                                              (0, c.jsx)("span", {
                                                className: "down",
                                                onClick: () =>
                                                  b(e.Cart_Id, e.quantity - 1),
                                                children: "-",
                                              }),
                                              (0, c.jsx)("input", {
                                                type: "text",
                                                value: e.quantity,
                                                readOnly: !0,
                                              }),
                                              (0, c.jsx)("span", {
                                                className: "up",
                                                onClick: () =>
                                                  b(e.Cart_Id, e.quantity + 1),
                                                children: "+",
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, c.jsx)("td", {
                                          "data-column": "Subtotal",
                                          children: (0, c.jsxs)("h5", {
                                            className: "main-color4 fz-18",
                                            children: [
                                              "$",
                                              v(e.price, e.quantity).toFixed(2),
                                            ],
                                          }),
                                        }),
                                        (0, c.jsx)("td", {
                                          className: "remove",
                                          children: (0, c.jsx)("button", {
                                            style: {
                                              backgroundColor: "white",
                                              color: "black",
                                            },
                                            onClick: () => {
                                              w(e.Cart_Id);
                                            },
                                            children: (0, c.jsx)("span", {
                                              className: "pe-7s-close",
                                            }),
                                          }),
                                        }),
                                      ],
                                    },
                                    e.Cart_Id
                                  )
                                ),
                        }),
                      ],
                    }),
                  }),
                  (0, c.jsxs)("div", {
                    className: "row mt-80",
                    children: [
                      (0, c.jsx)("div", {
                        className: "col-lg-6",
                        children: (0, c.jsxs)("div", {
                          className: "mt-40 coupon",
                          children: [
                            (0, c.jsx)("h4", { children: "Discount" }),
                            (0, c.jsx)("p", {
                              className: "fz-13",
                              children:
                                "Enter your coupon code if you have one.",
                            }),
                            (0, c.jsxs)("form", {
                              action: "contact.php",
                              children: [
                                (0, c.jsxs)("div", {
                                  className: "form-group d-flex mt-30",
                                  children: [
                                    (0, c.jsx)("input", {
                                      type: "text",
                                      name: "coupon_code",
                                      value: C,
                                      onChange: (e) => {
                                        I(e.target.value);
                                      },
                                    }),
                                    (0, c.jsx)("button", {
                                      type: "button",
                                      className: "butn butn-md butn-bord",
                                      onClick: () => {
                                        if ("OCT20" === C) {
                                          let e = y(),
                                            s = (20 * e) / 100;
                                          _(s), F(e - s);
                                        }
                                      },
                                      children: (0, c.jsx)("span", {
                                        children: "Apply",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, c.jsx)("span", {
                                  className: "mt-10 fz-13 opacity-7",
                                  children: "Coupon code",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, c.jsx)("div", {
                        className: "col-lg-4 offset-lg-2",
                        children:
                          f &&
                          f.length > 0 &&
                          (0, c.jsxs)("div", {
                            className: "mt-40 total",
                            children: [
                              (0, c.jsx)("h4", { children: "Cart totals" }),
                              (0, c.jsxs)("ul", {
                                className: "rest mt-30",
                                children: [
                                  (0, c.jsx)("li", {
                                    className: "mb-5",
                                    children: (0, c.jsxs)("h6", {
                                      children: [
                                        "Subtotal :",
                                        " ",
                                        (0, c.jsxs)("span", {
                                          className: "ml-10 fz-16 main-color4",
                                          children: ["$", y().toFixed(2)],
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, c.jsx)("li", {
                                    className: "mb-5",
                                    children: (0, c.jsxs)("h6", {
                                      children: [
                                        "Discount :",
                                        " ",
                                        (0, c.jsxs)("span", {
                                          className: "ml-10 fz-16 main-color4",
                                          children: ["-$", S.toFixed(2)],
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, c.jsx)("li", {
                                    className: "mb-5",
                                    children: (0, c.jsxs)("h6", {
                                      children: [
                                        "Total :",
                                        " ",
                                        (0, c.jsxs)("span", {
                                          className: "ml-10 fz-16 main-color4",
                                          children: ["$", (y() - S).toFixed(2)],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              n
                                ? (0, c.jsx)("span", {
                                    onClick: q,
                                    className:
                                      "cursor-pointer butn butn-md butn-bord mt-30",
                                    children: (0, c.jsx)(o(), {
                                      href: "/dark/shop-checkout/",
                                      className: "text-u fz-13 fw-600",
                                      children: "Proceed to checkout",
                                    }),
                                  })
                                : (0, c.jsx)("span", {
                                    onClick: () => {
                                      let e = window.confirm(
                                        "Please login first. Do you want to go to the login page?"
                                      );
                                      e && t.push("/dark/login");
                                    },
                                    className:
                                      "cursor-pointer butn butn-md butn-bord mt-30",
                                    children: (0, c.jsx)(o(), {
                                      href: "/dark/login/",
                                      className: "text-u fz-13 fw-600",
                                      children: "Proceed to checkout",
                                    }),
                                  }),
                            ],
                          }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      };
    },
    53547: function (e, s, t) {
      "use strict";
      var c = t(85893);
      s.Z = function (e) {
        let { data: s } = e;
        return (0, c.jsx)("header", {
          className: "pb-0 work-header section-padding",
          children: (0, c.jsx)("div", {
            className: "container mt-80",
            children: (0, c.jsx)("div", {
              className: "row",
              children: (0, c.jsx)("div", {
                className: "col-12",
                children: (0, c.jsxs)("div", {
                  className: "caption",
                  children: [
                    (0, c.jsx)("h6", {
                      className: "sub-title",
                      children: s.subTitle,
                    }),
                    (0, c.jsx)("h1", {
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
    11163: function (e, s, t) {
      e.exports = t(57875);
    },
  },
]);
