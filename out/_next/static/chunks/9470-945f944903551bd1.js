"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9470],
  {
    53547: function (e, s, t) {
      var a = t(85893);
      s.Z = function (e) {
        let { data: s } = e;
        return (0, a.jsx)("header", {
          className: "pb-0 work-header section-padding",
          children: (0, a.jsx)("div", {
            className: "container mt-80",
            children: (0, a.jsx)("div", {
              className: "row",
              children: (0, a.jsx)("div", {
                className: "col-12",
                children: (0, a.jsxs)("div", {
                  className: "caption",
                  children: [
                    (0, a.jsx)("h6", {
                      className: "sub-title",
                      children: s.subTitle,
                    }),
                    (0, a.jsx)("h1", {
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
    45558: function (e, s, t) {
      var a = t(85893),
        l = t(5551),
        r = t(43920),
        i = t(86664),
        n = t(54465),
        c = t(39332),
        d = t(67294),
        o = t(9944),
        h = t(93785);
      let m = (0, n.J)(
        "pk_test_51L1rVDH0VF27tpW3LEs6Z66fVvzRIoh08xSbY4zSyiG03Q2pwNVzhq8JoYv4s4xF4zwObI3gLNUjus6dFj0ltrvr00m17agrob"
      );
      s.Z = function (e) {
        let { lightMode: s } = e,
          [t, n] = (0, d.useState)([]),
          [u, x] = (0, d.useState)([]),
          [p, j] = (0, d.useState)(""),
          [g, v] = (0, d.useState)(""),
          [N, f] = (0, d.useState)(""),
          [b, S] = (0, d.useState)(""),
          [y, C] = (0, d.useState)(""),
          [E, F] = (0, d.useState)(""),
          [_, k] = (0, d.useState)(""),
          [w, q] = (0, d.useState)(""),
          [P, z] = (0, d.useState)(""),
          [I, A] = (0, d.useState)(""),
          [T, L] = (0, d.useState)(""),
          [Z, D] = (0, d.useState)(""),
          [Y, R] = (0, d.useState)(""),
          [V, G] = (0, d.useState)(!1),
          O = (0, c.useRouter)(),
          $ = (0, o.jl)();
        (0, d.useEffect)(() => {
          $ || O.push("/dark/login");
        }, [O]),
          (0, d.useEffect)(() => {
            let e = localStorage.getItem("subtotal");
            n(e);
            let s = localStorage.getItem("total");
            x(s);
          }, []);
        let { data: B, isLoading: J, isError: W, error: H } = (0, l.G1)(),
          [M, Q] = (0, d.useState)([]),
          [U, K] = (0, d.useState)([]),
          { data: X, isLoading: ee, isError: es, error: et } = (0, r.Nk)();
        (0, d.useEffect)(() => {
          if (es) console.error("Error fetching cart data:", et);
          else if (!ee && X && X.data.length > 0) {
            let e = X.data[X.data.length - 1];
            K(e);
          }
        }, [X, ee, es, et]),
          console.log("orderData", U),
          (0, d.useEffect)(() => {
            W
              ? console.error("Error fetching cart data:", H)
              : !J && B && B.data && Q(B.data);
          }, [B, J, W, H]);
        let ea = {
          orderDetails: M,
          FirstName: p,
          LastName: g,
          Email: N,
          Country: b,
          City: y,
          Area: E,
          PostCode: _,
          Address: w,
          Phone: P,
          orderDetails: M,
          SubTotal: U.subtotal,
          Total: U.total,
          Shipping_FirstName: T,
          Shipping_LastName: Z,
          Shipping_Address: Y,
        };
        return (0, a.jsx)("section", {
          className: "shop-checkout ".concat(
            s ? "light" : "",
            " section-padding"
          ),
          children: (0, a.jsx)("div", {
            className: "container",
            children: (0, a.jsxs)("div", {
              className: "row",
              children: [
                (0, a.jsx)("div", {
                  className: "col-lg-6",
                  children: (0, a.jsxs)("div", {
                    className: "order-form md-mb50",
                    children: [
                      (0, a.jsx)("h6", {
                        className: "mb-40",
                        children: "Billing Details",
                      }),
                      (0, a.jsxs)("form", {
                        action: "contact.php",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "row",
                            children: [
                              (0, a.jsx)("div", {
                                className: "col-md-6",
                                children: (0, a.jsxs)("div", {
                                  className: "form-group",
                                  children: [
                                    (0, a.jsx)("label", {
                                      htmlFor: "",
                                      children: "First Name *",
                                    }),
                                    (0, a.jsx)("input", {
                                      onChange: (e) => j(e.target.value),
                                      type: "text",
                                      name: "first_name",
                                      required: !0,
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "col-md-6",
                                children: (0, a.jsxs)("div", {
                                  className: "form-group",
                                  children: [
                                    (0, a.jsx)("label", {
                                      htmlFor: "",
                                      children: "last Name *",
                                    }),
                                    (0, a.jsx)("input", {
                                      onChange: (e) => v(e.target.value),
                                      type: "text",
                                      name: "last_name",
                                      required: !0,
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "col-12",
                                children: (0, a.jsxs)("div", {
                                  className: "form-group",
                                  children: [
                                    (0, a.jsx)("label", {
                                      htmlFor: "",
                                      children: "Your Email *",
                                    }),
                                    (0, a.jsx)("input", {
                                      onChange: (e) => f(e.target.value),
                                      type: "email",
                                      name: "email",
                                      required: !0,
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "col-12",
                                children: (0, a.jsxs)("div", {
                                  className: "form-group",
                                  children: [
                                    (0, a.jsx)("label", {
                                      htmlFor: "",
                                      children: "Country *",
                                    }),
                                    (0, a.jsx)("input", {
                                      onChange: (e) => S(e.target.value),
                                      type: "text",
                                      name: "country",
                                      required: !0,
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "col-md-4",
                                children: (0, a.jsxs)("div", {
                                  className: "form-group",
                                  children: [
                                    (0, a.jsx)("label", {
                                      htmlFor: "",
                                      children: "City / Town *",
                                    }),
                                    (0, a.jsx)("input", {
                                      onChange: (e) => C(e.target.value),
                                      type: "text",
                                      name: "city",
                                      required: !0,
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "col-md-4",
                                children: (0, a.jsxs)("div", {
                                  className: "form-group",
                                  children: [
                                    (0, a.jsx)("label", {
                                      htmlFor: "",
                                      children: "Area *",
                                    }),
                                    (0, a.jsx)("input", {
                                      onChange: (e) => F(e.target.value),
                                      type: "text",
                                      name: "area",
                                      required: !0,
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "col-md-4",
                                children: (0, a.jsxs)("div", {
                                  className: "form-group",
                                  children: [
                                    (0, a.jsx)("label", {
                                      htmlFor: "",
                                      children: "Post Code *",
                                    }),
                                    (0, a.jsx)("input", {
                                      onChange: (e) => k(e.target.value),
                                      type: "text",
                                      name: "postal_code",
                                      required: !0,
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "col-12",
                                children: (0, a.jsxs)("div", {
                                  className: "form-group",
                                  children: [
                                    (0, a.jsx)("label", {
                                      htmlFor: "",
                                      children: "Address *",
                                    }),
                                    (0, a.jsx)("input", {
                                      onChange: (e) => q(e.target.value),
                                      type: "text",
                                      name: "address",
                                      required: !0,
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "col-md-6",
                                children: (0, a.jsxs)("div", {
                                  className: "form-group",
                                  children: [
                                    (0, a.jsx)("label", {
                                      htmlFor: "",
                                      children: "Phone *",
                                    }),
                                    (0, a.jsx)("input", {
                                      onChange: (e) => z(e.target.value),
                                      type: "text",
                                      name: "phone",
                                      required: !0,
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "col-md-6",
                                children: (0, a.jsxs)("div", {
                                  className: "form-group",
                                  children: [
                                    (0, a.jsx)("label", {
                                      htmlFor: "",
                                      children: "Company Name *",
                                    }),
                                    (0, a.jsx)("input", {
                                      onChange: (e) => A(e.target.value),
                                      type: "text",
                                      name: "company",
                                      required: !0,
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsxs)("h6", {
                                children: [
                                  (0, a.jsx)("input", {
                                    type: "checkbox",
                                    checked: V,
                                    onChange: () => {
                                      G(!V);
                                    },
                                  }),
                                  "Same As Billing",
                                ],
                              }),
                              V &&
                                (0, a.jsxs)("div", {
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: "col-md-6",
                                      children: (0, a.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                          (0, a.jsx)("label", {
                                            htmlFor: "",
                                            children: "First Name *",
                                          }),
                                          (0, a.jsx)("input", {
                                            onChange: (e) => L(e.target.value),
                                            type: "text",
                                            name: "shipping_first_name",
                                            value: p || "",
                                            required: !0,
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "col-md-6",
                                      children: (0, a.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                          (0, a.jsx)("label", {
                                            htmlFor: "",
                                            children: "Last Name *",
                                          }),
                                          (0, a.jsx)("input", {
                                            onChange: (e) => D(e.target.value),
                                            type: "text",
                                            name: "shipping_last_name",
                                            value: g || "",
                                            required: !0,
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "col-md-6",
                                      children: (0, a.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                          (0, a.jsx)("label", {
                                            htmlFor: "",
                                            children: "Address*",
                                          }),
                                          (0, a.jsx)("input", {
                                            onChange: (e) => R(e.target.value),
                                            type: "text",
                                            name: "shipping_address",
                                            value: w || "",
                                            required: !0,
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
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "col-lg-5 offset-lg-1",
                  children: (0, a.jsxs)("div", {
                    className: "checkout-order-info",
                    children: [
                      (0, a.jsx)("h4", {
                        className: "mb-40",
                        children: "Your Order",
                      }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsxs)("ul", {
                            className: "rest",
                            children: [
                              M.map((e) =>
                                (0, a.jsx)(
                                  "li",
                                  {
                                    className: "mb-5",
                                    children: (0, a.jsxs)("div", {
                                      className: "d-flex align-items-center",
                                      children: [
                                        (0, a.jsx)("div", {
                                          children: (0, a.jsx)("p", {
                                            children: e.title,
                                          }),
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "ml-auto",
                                          children: (0, a.jsxs)("h5", {
                                            className: "fz-18",
                                            children: ["$", e.price],
                                          }),
                                        }),
                                      ],
                                    }),
                                  },
                                  e.id
                                )
                              ),
                              (0, a.jsx)("li", {
                                className: "pt-10 bord-thin-top",
                                children: (0, a.jsxs)("div", {
                                  className: "d-flex align-items-center",
                                  children: [
                                    (0, a.jsx)("div", {
                                      children: (0, a.jsx)("h6", {
                                        children: "Subtotal",
                                      }),
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "ml-auto",
                                      children: (0, a.jsxs)("h5", {
                                        className: "main-color4 fz-20",
                                        children: ["$", U.subTotal],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)("li", {
                                className:
                                  "pt-10 bord-thin-top bord-thin-bottom",
                                children: (0, a.jsxs)("div", {
                                  className: "d-flex align-items-center",
                                  children: [
                                    (0, a.jsx)("div", {
                                      children: (0, a.jsx)("h6", {
                                        children: "Total",
                                      }),
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "ml-auto",
                                      children: (0, a.jsxs)("h5", {
                                        className: "main-color4 fz-20",
                                        children: ["$", U.total],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "mt-40 text",
                            children: (0, a.jsxs)("p", {
                              children: [
                                "Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our",
                                " ",
                                ".",
                              ],
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "mt-30",
                            children: (0, a.jsx)(i.Elements, {
                              stripe: m,
                              children: (0, a.jsx)(h.Z, { checkoutInfo: ea }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      };
    },
    93785: function (e, s, t) {
      var a = t(85893),
        l = t(7453),
        r = t(43920),
        i = t(86664),
        n = t(5121),
        c = t(39332),
        d = t(67294),
        o = t(86501),
        h = t(9944);
      s.Z = (e) => {
        let { checkoutInfo: s } = e,
          t = (0, i.useStripe)(),
          m = (0, i.useElements)(),
          [u, x] = (0, d.useState)(""),
          [p, j] = (0, d.useState)(!1),
          [g, v] = (0, d.useState)(""),
          [N, f] = (0, d.useState)(""),
          [b] = (0, l.F9)(),
          [S, y] = (0, d.useState)(null),
          C = (0, h.bG)();
        console.log("checkoutInfo", s);
        let [E, F] = (0, d.useState)([]),
          { data: _, isLoading: k, isError: w, error: q } = (0, r.Nk)();
        (0, d.useEffect)(() => {
          if (w) console.error("Error fetching cart data:", q);
          else if (!k && _ && _.data.length > 0) {
            let e = _.data[_.data.length - 1];
            F(e);
          }
        }, [_, k, w, q]);
        let P = E.total;
        (0, d.useEffect)(() => {
          P > 0 &&
            n.Z.post(
              "http://localhost:5000/api/v1/payment/create-payment-intent",
              { Price: P }
            )
              .then((e) => {
                console.log("res.data.clientSecret", e.data.clientSecret),
                  x(e.data.clientSecret);
              })
              .catch((e) => {
                console.error("Error fetching client secret:", e.message);
              });
        }, [P]);
        let z = (0, c.useRouter)(),
          I = async (e) => {
            if ((e.preventDefault(), !t || !m)) return;
            let a = m.getElement(i.CardElement);
            if (null == a) return;
            let { error: l } = await t.createPaymentMethod({
              type: "card",
              card: a,
            });
            l && (console.log("error", l), f(l.message)), j(!0);
            let { paymentIntent: r, error: n } = await t.confirmCardPayment(u, {
              payment_method: {
                card: a,
                billing_details: { email: C.Email, name: C.Name },
              },
            });
            if (n) {
              console.log("confirmError", n),
                y("Payment failed. Please try again.");
              return;
            }
            if (
              (console.log("paymentIntent", r),
              j(!1),
              r && "succeeded" === r.status)
            ) {
              v(r.id),
                console.log("transcationId", r.id),
                o.ZP.success("Transaction complete with transactionId", g);
              let e = await b(s);
              "Success" === e.data.status
                ? z.push("/dark/page-purchase-success")
                : z.push("/dark/page-purchase-failed");
            }
          };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("form", {
              onSubmit: I,
              children: [
                (0, a.jsx)(i.CardElement, {
                  options: {
                    style: {
                      base: {
                        fontSize: "20px",
                        color: "white",
                        "::placeholder": { color: "white" },
                      },
                      invalid: { color: "#9e2146" },
                    },
                  },
                }),
                (0, a.jsx)("button", {
                  type: "submit",
                  disabled: !t || !u || p,
                  style: {
                    padding: "12px 20px",
                    marginTop: "15px",
                    fontSize: "16px",
                    border: "2px solid #430571",
                    color: "#430571",
                    fontWeight: "800",
                    borderRadius: "50px",
                    width: "100%",
                  },
                  children: "Place Order",
                }),
              ],
            }),
            N &&
              (0, a.jsx)("p", { className: "ml-8 text-red-500", children: N }),
            S &&
              (0, a.jsx)("p", { className: "ml-8 text-red-500", children: S }),
          ],
        });
      };
    },
  },
]);
