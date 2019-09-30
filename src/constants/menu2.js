const data = [
    {
        id: "OldOrders",
        icon: "iconsminds-air-balloon-1",
        label: "سفارشات ",
        to: "/orders",
        subs: [
            {
                icon: "simple-icon-layers",
                label: "سفارشات گذشته",
                to: "/orders/old",
                subs: [
                    {
                        icon: "simple-icon-arrow-right",
                        label: "روز قبل",
                        to: "/orders/old/yesterday"
                    },
                    {
                        icon: "simple-icon-arrow-right",
                        label: "دو روز قبل",
                        to: "/orders/old/before-yesterday"
                    }
                    ,
                    {
                        icon: "simple-icon-arrow-right",
                        label: "هفته جاری",
                        to: "/orders/old/current-week"
                    } ,
                    {
                        icon: "simple-icon-arrow-right",
                        label: "هفته گذشته",
                        to: "/orders/old/past-week"
                    },
                    {
                        icon: "simple-icon-arrow-right",
                        label: "ماه جاری",
                        to: "/orders/old/current-month"
                    },
                    {
                        icon: "simple-icon-arrow-right",
                        label: "ماه گذشته",
                        to: "/orders/old/past-month"
                    },
                    {
                        icon: "simple-icon-arrow-right",
                        label: "زمان انتخابی",
                        to: "/orders/old/select-time"
                    }
                ]
            },

            {
                icon: "simple-icon-paper-plane",
                label: "سفارشات امروز",
                to: "/orders/present",
                subs: [
                    {
                        icon: "simple-icon-arrow-right",
                        label: "پرداخت موفق",
                        to: "/orders/present/successpaid"
                    },
                    {
                        icon: "simple-icon-arrow-right",
                        label: "ثبت موفق",
                        to: "/orders/present/sabt"
                    }, {
                        icon: "simple-icon-arrow-right",
                        label: "جمع آوری در انبار",
                        to: "/orders/present/collect"
                    }, {
                        icon: "simple-icon-arrow-right",
                        label: "منتظر تایید پیک",
                        to: "/orders/present/waiting-accept-chichi"
                    }, {
                        icon: "simple-icon-arrow-right",
                        label: "پیک در حال حرکت",
                        to: "/orders/present/chichi-on-go"
                    }, {
                        icon: "simple-icon-arrow-right",
                        label: "پیک منتظر گیرنده",
                        to: "/orders/present/chichi-waiting-customer"
                    }, {
                        icon: "simple-icon-arrow-right",
                        label: "تحویل گیرنده شد",
                        to: "/orders/present/delivered"
                    }
                ]

            }
        ]
    },

    {
        id: "ChchiMan",
        icon: "iconsminds-digital-drawing",
        label: "چی چی من",
        to: "/chichi-man",
        subs: [{
            icon: "simple-icon-user-follow",
            id: "chchiMan-sign",
            label: "ثبت نام",
            to: "/chichi-man/sign-in",
        },

        ]
    },
    {
        id: "Support",
        icon: "simple-icon-call-in",
        label: "پشتیبانی",
        to: "/support",
        subs: [{
            icon: "iconsminds-user",
            id: "users",
            label: "کاربران",
            to: "/support/users",
        },
        ]
    },

];
export default data;
