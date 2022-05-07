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
    jQuery(document).ready(
        function ($) {
            AOS.init({ duration: 700, easing: "linear", once: !0 });

            setTimeout(function () {
                jQuery(".logo-main").addClass('fade');
            }, 3000);

            var screen_width1 = jQuery(window).width();
            if (screen_width1 >= 481) {
                setTimeout(function () {
                    jQuery(".soial-main").addClass('fade');
                }, 5000);
            }

            var home_s1 = new Swiper('.section1 .swiper-container', {
                loop: true,
                // effect: 'fade',
                // fadeEffect: {
                //     crossFade: true
                // },
                autoplay: {
                    delay: 4000
                },
                navigation: {
                    nextEl: '.section1 .swiper-container .swiper-button-next',
                    prevEl: '.section1 .swiper-container .swiper-button-prev',
                },
            });
            setTimeout(function () {
                jQuery(".content_abs").addClass('fade');
            }, 4500);

            jQuery('.section3 .top .left').tabs();
            jQuery(".content_scroll").mCustomScrollbar({
                theme: "custom"
            });

            var home_s4 = new Swiper('.section4  .swiper-container', {
                autoplay: {
                    delay: 4000
                },
                slidesPerView: 1,
                breakpoints: {
                    481: {
                        slidesPerView: 2,
                    }
                },
                pagination: {
                    el: '.section4  .swiper-container .swiper-pagination',
                    clickable: true,
                    type: 'custom',
                    renderCustom: function (swiper, current, total) {
                        if (current < 10) {
                            current = '0' + current;
                        }
                        if (total < 10) {
                            total = '0' + total;
                        }
                        return '<span className="current">' + current + '</span>' +
                            ' <span> / </span> ' +
                            '<span className="total">' + total + '</span>';
                    }
                },
                navigation: {
                    nextEl: '.section4  .swiper-container .swiper-button-next',
                    prevEl: '.section4  .swiper-container .swiper-button-prev',
                },
            });

            var width_window = $(window).width();
            if (width_window > 769) {
                jQuery('.section5 svg path').hover(function () {
                    jQuery('.section5 .list_item .item').removeClass('active');
                    jQuery('._tooltip-js').html = "";
                    var id = jQuery(this).attr('class');
                    jQuery('[data-svg = "' + id + '"]').addClass('active');

                }, function () {
                    jQuery('.section5 .list_item .item').removeClass('active');
                });
            } else {
                jQuery('.section5 svg path').click(function () {
                    jQuery('.section5 svg path').removeClass('active');
                    jQuery('.section5 .list_item .item').removeClass('active');
                    jQuery('._tooltip-js').html = "";
                    var id = jQuery(this).attr('class');
                    jQuery('[data-svg = "' + id + '"]').addClass('active');
                    jQuery(this).addClass('active');
                });
                jQuery('.close_svg').click(function () {
                    jQuery('.section5 svg path').removeClass('active');
                    jQuery('.section5 .list_item .item').removeClass('active');
                });
            }

            var home_s6 = new Swiper('.section6  .swiper-container', {
                autoplay: {
                    delay: 4000
                },
                spaceBetween: 5,
                slidesPerView: 2,
                breakpoints: {
                    481: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                    769: {
                        spaceBetween: 5,
                        slidesPerView: 4,
                    }
                },
                pagination: {
                    el: '.section6  .swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.section6  .swiper-button-next',
                    prevEl: '.section6 .swiper-container .swiper-button-prev',
                },
            });

            jQuery('.section7 ').tabs();
            var home_s711 = new Swiper('.slide1', {
                loop: true,
                speed: 1200,
                autoplay: {
                    delay: 1000
                },
                spaceBetween: 20,
                slidesPerView: 1,
                breakpoints: {
                    481: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    769: {
                        slidesPerView: 1,
                        spaceBetween: 60,
                    }
                },
                pagination: {
                    el: '.slide1 .swiper-pagination',
                    clickable: true,
                },
            });
            var home_s72 = new Swiper('.slide2', {
                loop: true,
                speed: 1200,
                autoplay: {
                    delay: 1000
                },
                spaceBetween: 20,
                slidesPerView: 1,
                breakpoints: {
                    481: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    769: {
                        slidesPerView: 1,
                        spaceBetween: 60,
                    }
                },
                pagination: {
                    el: '.slide2 .swiper-pagination',
                    clickable: true,
                },
            });
            var home_s73 = new Swiper('.slide3', {
                loop: true,
                speed: 1200,
                autoplay: {
                    delay: 1000
                },
                spaceBetween: 20,
                slidesPerView: 1,
                breakpoints: {
                    481: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    769: {
                        slidesPerView: 1,
                        spaceBetween: 60,
                    }
                },
                pagination: {
                    el: '.slide3 .swiper-pagination',
                    clickable: true,
                },
            });
            var home_s74 = new Swiper('.slide4', {
                loop: true,
                speed: 1200,
                autoplay: {
                    delay: 1000
                },
                spaceBetween: 20,
                slidesPerView: 1,
                breakpoints: {
                    481: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    769: {
                        slidesPerView: 1,
                        spaceBetween: 60,
                    }
                },
                pagination: {
                    el: '.slide4 .swiper-pagination',
                    clickable: true,
                },
            });
            jQuery(".section7 .list_tab a").on('click', function (event) {
                home_s711.update();
                home_s72.update();
                home_s73.update();
                home_s74.update();
            });
            var home_pp = new Swiper('.slide_ppp', {
                speed: 1200,
                loop: true,
                // autoplay: {
                //     delay: 1000
                // },
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                slidesPerView: 1,
                navigation: {
                    nextEl: '.slide_ppp .swiper-button-next',
                    prevEl: '.slide_ppp .swiper-button-prev',
                },
            });

            jQuery(".list-content .content_tab .read-more").on('click', function (event) {
                jQuery(".slide_pp").addClass("popup_download_active");
                jQuery('html, body').css('overflow-y', 'hidden');
                home_pp.update();
                var data_order = jQuery(this).attr('data-index');
                var votevalue = parseInt(data_order);
                home_pp.slideTo(votevalue);
            });
            jQuery(".close").on('click', function (event) {
                jQuery(".slide_pp").removeClass("popup_download_active");
                jQuery('html, body').css('overflow-y', 'unset');
                home_pp.update();
            });

            var slide_ss8 = new Swiper('#slide_ss8', {
                loop: true,
                speed: 1200,
                // autoplay: {
                //     delay: 1000
                // },
                spaceBetween: 10,
                slidesPerView: 2,
                breakpoints: {
                    481: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                },
            });
            slide_ss8.on('slideChange', function () {
                slide_ss8.update();
                jQuery(".section8 .top .left .img").removeClass('active');
                var data_bonus = jQuery('.section8 .top .right .swiper-container').find('.swiper-slide-active').attr('data-bonus');
                jQuery('.section8 .top .left [data-image = "' + data_bonus + '"]').addClass('active');
            });
            jQuery(".content_scroll").mCustomScrollbar({
                theme: "custom"
            });
            var screen_width1 = jQuery(window).width();
            if (screen_width1 < 769) {
                jQuery(".content_scroll_tab").mCustomScrollbar({
                    theme: "custom"
                });
            }
            var home_s81 = new Swiper('.list_popup_ss8 .popup1 .slide_item .swiper-container', {
                loop: true,
                speed: 1200,
                autoplay: {
                    delay: 1000
                },
                spaceBetween: 10,
                slidesPerView: 2,
                breakpoints: {
                    481: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                },
                navigation: {
                    nextEl: '.list_popup_ss8 .popup1 .slide_item .swiper-button-next',
                    prevEl: '.list_popup_ss8 .popup1 .slide_item .swiper-button-prev',
                },
            });
            home_s81.on('slideChange', function () {
                home_s81.update();
                jQuery(".list_popup_ss8 .popup1 .left .img").removeClass('active');
                var data_order = jQuery('.list_popup_ss8 .popup1').find('.swiper-slide-active').attr('data-item');

                jQuery('.list_popup_ss8 .popup1 .left [data-img = "' + data_order + '"]').addClass('active');
            });
            //
            var home_s82 = new Swiper('.list_popup_ss8 .popup2 .slide_item .swiper-container', {
                loop: true,
                speed: 1200,
                autoplay: {
                    delay: 1000
                },
                spaceBetween: 10,
                slidesPerView: 2,
                breakpoints: {
                    481: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                },
                navigation: {
                    nextEl: '.list_popup_ss8 .popup2 .slide_item .swiper-button-next',
                    prevEl: '.list_popup_ss8 .popup2 .slide_item .swiper-button-prev',
                },
            });
            home_s82.on('slideChange', function () {
                home_s82.update();
                jQuery(".list_popup_ss8 .popup2 .left .img").removeClass('active');
                var data_order = jQuery('.list_popup_ss8 .popup2').find('.swiper-slide-active').attr('data-item');

                jQuery('.list_popup_ss8 .popup2 .left [data-img = "' + data_order + '"]').addClass('active');
            });

            //
            var home_s83 = new Swiper('.list_popup_ss8 .popup3 .slide_item .swiper-container', {
                loop: true,
                speed: 1200,
                autoplay: {
                    delay: 1000
                },
                spaceBetween: 10,
                slidesPerView: 2,
                breakpoints: {
                    481: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                },
                navigation: {
                    nextEl: '.list_popup_ss8 .popup3 .slide_item .swiper-button-next',
                    prevEl: '.list_popup_ss8 .popup3 .slide_item .swiper-button-prev',
                },
            });
            home_s83.on('slideChange', function () {
                home_s83.update();
                jQuery(".list_popup_ss8 .popup3 .left .img").removeClass('active');
                var data_order = jQuery('.list_popup_ss8 .popup3').find('.swiper-slide-active').attr('data-item');

                jQuery('.list_popup_ss8 .popup3 .left [data-img = "' + data_order + '"]').addClass('active');
            });

            //
            var home_s84 = new Swiper('.list_popup_ss8 .popup4 .slide_item .swiper-container', {
                loop: true,
                speed: 1200,
                autoplay: {
                    delay: 1000
                },
                spaceBetween: 10,
                slidesPerView: 2,
                breakpoints: {
                    481: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                },
                navigation: {
                    nextEl: '.list_popup_ss8 .popup4 .slide_item .swiper-button-next',
                    prevEl: '.list_popup_ss8 .popup4 .slide_item .swiper-button-prev',
                },
            });
            home_s84.on('slideChange', function () {
                home_s84.update();
                jQuery(".list_popup_ss8 .popup4 .left .img").removeClass('active');
                var data_order = jQuery('.list_popup_ss8 .popup4').find('.swiper-slide-active').attr('data-item');

                jQuery('.list_popup_ss8 .popup4 .left [data-img = "' + data_order + '"]').addClass('active');
            });

            //
            var home_s85 = new Swiper('.list_popup_ss8 .popup5 .slide_item .swiper-container', {
                loop: true,
                speed: 1200,
                autoplay: {
                    delay: 1000
                },
                spaceBetween: 10,
                slidesPerView: 2,
                breakpoints: {
                    481: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                },
                navigation: {
                    nextEl: '.list_popup_ss8 .popup5 .slide_item .swiper-button-next',
                    prevEl: '.list_popup_ss8 .popup5 .slide_item .swiper-button-prev',
                },
            });
            home_s85.on('slideChange', function () {
                home_s85.update();
                jQuery(".list_popup_ss8 .popup5 .left .img").removeClass('active');
                var data_order = jQuery('.list_popup_ss8 .popup5').find('.swiper-slide-active').attr('data-item');

                jQuery('.list_popup_ss8 .popup5 .left [data-img = "' + data_order + '"]').addClass('active');
            });

            //

            jQuery(".section8 .bottom .item").on('click', function (event) {
                var data_pa = jQuery(this).attr('data-pa');
                jQuery('.list_popup_ss8 [data-chi = "' + data_pa + '"]').addClass('popup_download_active');
                jQuery('html, body').css('overflow-y', 'hidden');
            });
            jQuery(".close2").on('click', function (event) {
                jQuery('.list_popup_ss8 .popup').removeClass('popup_download_active');
                jQuery('html, body').css('overflow-y', 'unset');
            });
            jQuery(".list_popup_ss8 .bgr").on('click', function (event) {
                jQuery('.list_popup_ss8 .popup').removeClass('popup_download_active');
                jQuery('html, body').css('overflow-y', 'unset');
            });


            var slide_new_home = new Swiper('.slide_3d', {
                effect: 'coverflow',
                fadeEffect: {
                    crossFade: true
                },
                speed: 1000,
                slidesPerView: 1,
                slidesPerColumn: 3,
                slidesPerColumnFill: 'row',
                spaceBetween: 0,
                pagination: {
                    el: '.slide_3d .swiper-pagination',
                    clickable: true,
                    type: 'custom',
                    renderCustom: function (swiper, current, total) {
                        if (current < 10) {
                            current = '0' + current;
                        }
                        if (total < 10) {
                            total = '0' + total;
                        }
                        return '<span className="current">' + current + '</span>' +
                            ' <span> / </span> ' +
                            '<span className="total">' + total + '</span>';
                    }
                },
                navigation: {
                    nextEl: '.slide_3d .swiper-button-next',
                    prevEl: '.slide_3d .swiper-button-prev',
                },
            });

            var slide_new_home = new Swiper('.slide_3d', {
                effect: 'coverflow',
                fadeEffect: {
                    crossFade: true
                },
                speed: 1000,
                slidesPerView: 1,
                slidesPerColumn: 3,
                slidesPerColumnFill: 'row',
                spaceBetween: 0,
                pagination: {
                    el: '.slide_3d .swiper-pagination',
                    clickable: true,
                    type: 'custom',
                    renderCustom: function (swiper, current, total) {
                        if (current < 10) {
                            current = '0' + current;
                        }
                        if (total < 10) {
                            total = '0' + total;
                        }
                        return '<span className="current">' + current + '</span>' +
                            ' <span> / </span> ' +
                            '<span className="total">' + total + '</span>';
                    }
                },
                navigation: {
                    nextEl: '.slide_3d .swiper-button-next',
                    prevEl: '.slide_3d .swiper-button-prev',
                },
            });


            jQuery(".popup_download_click").on('click', function (e) {
                Validator({
                    form: '#form-subscribe',
                    formGroupSelector: '#form-subscribe ._form_group',
                    errorSelector: '#form-subscribe ._error_msg',
                    classError: 'invalid',
                    rules: [
                        Validator.isMinLength('#contact_name', 2),
                        Validator.isText('#contact_name'),
                        Validator.isRequired('#contact_name'),
                        Validator.isRequired('#contact_phone'),
                        Validator.isPhone('#contact_phone'),
                        Validator.isRequired('#contact_email'),
                        Validator.isEmail('#contact_email'),
                    ],
                    onSubmit: (data) => {
                        const token = document.querySelector('#contact_nonce').value
                        const form = $('#form-subscribe')
                        const fieldGroup = form.find('.form-field-all')
                        const btnSubmit = form.find('.popup_download_click')
                        const btnSubmitHtml = btnSubmit.html();
                        const btnSubmitText = btnSubmit.text();
                        const messageMain = form.find('.frm_msg')
                        jQuery.ajax({
                            type: 'POST',
                            dataType: 'JSON',
                            url: 'https://thesapphiremansions.com/wp-admin/admin-ajax.php',
                            data: {
                                action: 'formCommonAjax',
                                data: data,
                                nonce: token,
                                postTitle: 'contact_phone',
                                postType: 'register',
                            },

                            beforeSend: () => {
                                btnSubmit.html('...');
                                btnSubmit.prop('disabled', false)
                            },
                            complete: () => {
                                btnSubmit.text(btnSubmitText)
                                btnSubmit.remove()
                            },
                            success: (res) => {
                                if (res.success) {
                                    btnSubmit.remove();
                                    form.trigger('reset');
                                }
                                messageMain.text(res.data)
                            },
                            error: (jqXHR, textStatus, errorThrown) => {
                                console.log('The following error occured: ' + jqXHR, textStatus, errorThrown);
                            }
                        });
                    }
                });
            });
            var distanceBefore = 100;
            var imagelz1 = 0;
            var imagelz2 = 0;
            var imagelz3 = 0;
            var imagelz4 = 0;
            $(window).scroll(function () {
                if (imagelz1 == 0 && $(".image-lz-1").length) {
                    var imagelz1Top = $('.image-lz-1').offset().top - window.innerHeight;
                    if ($(window).scrollTop() > (imagelz1Top - distanceBefore)) {
                        $('.image-lz-1').css("background-image", "url('https://res.cloudinary.com/dtphd39ig/image/upload/v1651911982/spa/images/image1_or7gx1.png')");
                        imagelz1 = 1;
                    }
                }
                if (imagelz2 == 0 && $(".image-lz-2").length) {
                    var imagelz2Top = $('.image-lz-2').offset().top - window.innerHeight;
                    if ($(window).scrollTop() > (imagelz2Top - distanceBefore)) {
                        $('.image-lz-2').css("background-image", "url('https://res.cloudinary.com/dtphd39ig/image/upload/v1651912562/spa/images/image2_xxaunv.png')");
                        imagelz2 = 1;
                    }
                }
                if (imagelz3 == 0 && $(".image-lz-3").length) {
                    var imagelz3Top = $('.image-lz-3').offset().top - window.innerHeight;
                    if ($(window).scrollTop() > (imagelz3Top - distanceBefore)) {
                        $('.image-lz-3').css("background-image", "url('https://res.cloudinary.com/dtphd39ig/image/upload/v1651913478/spa/images/image3_paeejf.png')");
                        imagelz3 = 1;
                    }
                }
                if (imagelz4 == 0 && $(".image-lz-4").length) {
                    var imagelz4Top = $('.image-lz-4').offset().top - window.innerHeight;
                    if ($(window).scrollTop() > (imagelz4Top - distanceBefore)) {
                        $('.image-lz-3').css("background-image", "url('https://res.cloudinary.com/dtphd39ig/image/upload/v1651913478/spa/images/image3_paeejf.png')");
                        imagelz4 = 1;
                    }
                }
            });
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
