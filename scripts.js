var screen_width1 = jQuery(window).width();
jQuery("#click-menu").on("click", function (t) {
    jQuery("#menu-toggle").toggleClass("active"), jQuery(this).toggleClass("active");
}),
    jQuery(document).ready(function (t) {
        jQuery("#menu-toggle .menu-main li a").click(function () {
            jQuery("#menu-toggle .menu-main li a").removeClass("active");
            var e = t(this).attr("data-id");
            jQuery("html, body").animate({ scrollTop: t("." + e).offset().top }), jQuery(this).addClass("active");
        }),
            jQuery(".sectionclick").click(function () {
                jQuery("html, body").animate({ scrollTop: t(".section12").offset().top });
            });
    }),
    jQuery(document).ready(function (t) {
        AOS.init({ duration: 700, easing: "linear", once: !0 });
    }),
    (function (t) {
        t.fn.tabs = function () {
            var e = t(this),
                i = e.find("[data-head]"),
                n = e.find("[data-content]");
            return (
                (this.reset = function () {
                    i.not(i.first()).removeClass("is-active"), n.not(n.first()).hide();
                }.call(this)),
                (this.headClick = i.click(function (e) {
                    if ((e.preventDefault(), t(this).hasClass("is-active"))) return !1;
                    var a = t(this).attr("href");
                    i.removeClass("is-active"), n.hide(), t(this).addClass("is-active"), t(a).fadeIn();
                })),
                this
            );
        };
    })(jQuery);


const Validator = (e) => {
    let r = {};
    const t = document.querySelector(e.form),
        o = (e, r) => {
            for (; e.parentElement;) {
                if (e.parentElement.matches(r)) return e.parentElement;
                e = e.parentElement;
            }
        },
        s = (s, a) => {
            const l = o(s, e.formGroupSelector).querySelector(e.errorSelector),
                n = r[a.selector];
            let c;
            for (let e = 0; e < n.length; e++) {
                switch (s.type) {
                    case "radio":
                    case "checkbox":
                        c = t.querySelector(a.selector + ":checked") ? n[e](t.querySelector(a.selector + ":checked").value) : n[e]("");
                        break;
                    default:
                        c = n[e](s.value);
                }
                if (c) break;
            }
            return c ? ((l.innerText = c), o(s, e.formGroupSelector).classList.add(e.classError)) : ((l.innerText = ""), o(s, e.formGroupSelector).classList.remove(e.classError)), !c;
        };
    if (t) {
        const a = e.rules;
        a.forEach((a) => {
            Array.isArray(r[a.selector]) ? r[a.selector].push(a.testing) : (r[a.selector] = [a.testing]);
            const l = t.querySelectorAll(a.selector);
            Array.from(l).forEach((r) => {
                r &&
                    ((r.onblur = () => {
                        s(r, a);
                    }),
                        (r.oninput = () => {
                            (o(r, e.formGroupSelector).querySelector(e.errorSelector).innerText = ""), o(r, e.formGroupSelector).classList.remove(e.classError);
                        }));
            });
        }),
            (t.onsubmit = (r) => {
                r.preventDefault();
                let o = !0;
                if (
                    (a.forEach((e) => {
                        const r = t.querySelector(e.selector);
                        s(r, e) || (o = !1);
                    }),
                        o)
                )
                    if ("function" == typeof e.onSubmit) {
                        const r = t.querySelectorAll("[name]"),
                            o = Array.from(r).reduce((e, r) => {
                                switch (r.type) {
                                    case "radio":
                                        e[r.name] = t.querySelector('input[name="' + r.name + '"]:checked').value;
                                        break;
                                    case "checkbox":
                                        if (!r.matches(":checked")) return (e[r.name] = ""), e;
                                        Array.isArray(e[r.name]) || (e[r.name] = []), e[r.name].push(r.value);
                                        break;
                                    case "file":
                                        e[r.name] = r.file;
                                        break;
                                    default:
                                        e[r.name] = r.value;
                                }
                                return e;
                            }, {});
                        e.onSubmit(o);
                    } else t.submit();
            });
    }
};
(Validator.isRequired = (e, r) => ({ selector: e, testing: (e) => (e.trim() ? void 0 : r || "Please enter this field.") })),
    (Validator.isEmail = function (e, r) {
        return {
            selector: e,
            testing: (e) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e) ? void 0 : r || "Invalid email.";
            },
        };
    }),
    (Validator.isMinLength = (e, r = 6, t) => ({ selector: e, testing: (e) => (e.length >= r ? void 0 : t || `Please enter at least ${r} characters.`) })),
    (Validator.isConfirmed = (e, r, t) => ({ selector: e, testing: (e) => (e === r() ? void 0 : t || "The password does not match.") })),
    (Validator.isPhone = (e, r) => ({
        selector: e,
        testing: (e) => {
            return /(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(e) ? void 0 : r || "Invalid phone number.";
        },
    })),
    (Validator.isNumber = (e, r) => ({
        selector: e,
        testing: (e) => {
            return /^[0-9]+$/.test(e) ? void 0 : r || "This field can only be entered numeric characters.";
        },
    })),
    (Validator.isText = (e, r) => ({
        selector: e,
        testing: (e) => {
            return /^([a-zA-ZĂ€ĂĂ‚ĂƒĂˆĂ‰ĂĂŒĂĂ’Ă“Ă”Ă•Ă™ĂÄ‚ÄÄ¨Å¨Æ Ă Ă¡Ă¢Ă£Ă¨Ă©ĂªĂ¬Ă­Ă²Ă³Ă´ĂµĂ¹ĂºÄƒÄ‘Ä©Å©Æ¡Æ¯Ä‚áº áº¢áº¤áº¦áº¨áºªáº¬áº®áº°áº²áº´áº¶áº¸áººáº¼á»€á»€á»‚Æ°Äƒáº¡áº£áº¥áº§áº©áº«áº­áº¯áº±áº³áºµáº·áº¹áº»áº½á»á»á»ƒá»„á»†á»ˆá»á»Œá»á»á»’á»”á»–á»˜á»á»œá»á» á»¢á»¤á»¦á»¨á»ªá»…á»‡á»‰á»‹á»á»á»‘á»“á»•á»—á»™á»›á»á»Ÿá»¡á»£á»¥á»§á»©á»«á»¬á»®á»°á»²á»´Ăá»¶á»¸á»­á»¯á»±á»³á»µá»·á»¹\s]+)$/i.test(
                e
            )
                ? void 0
                : r || "This field can only be entered text.";
        },
    }));
