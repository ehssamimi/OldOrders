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
            to: "/chichi-man/sign-in/:id?/:step?",
        },
            {
                icon: "simple-icon-list",
                id: "chchiMan-list",
                label: "لیست",
                to: "/chichi-man/list",
            },
            {
                icon: "iconsminds-preview",
                id: "chchiMan-situation",
                label: "وضعیت چی چی من ها",
                to: "/chichi-man/situation",
            },
            {
                icon: "simple-icon-present",
                id: "chchiMan-history-orders",
                label: "تاریخچه سفارشات",
                to: "/chichi-man/history-orders",
            },
            {
                icon: "simple-icon-user-follow",
                id: "chchiMan-vote",
                label: "نظر سنجی",
                to: "/chichi-man/vote",
                subs: [{
                    icon: "iconsminds-bar-chart-4",
                    label: "کاربر به چی چی",
                    to: "/chichi-man/vote/users-to-chichi"
                },
                    {
                        icon: "iconsminds-statistic",
                        label: "چی چی به کاربر",
                        to: "/chichi-man/vote/chichi-to-users"
                    }]
            },
            {
                icon: "simple-icon-user-follow",
                id: "chchiMan-statistic",
                label: "آمارها",
                to: "/chichi-man/statistic",
                subs: [{
                    icon: "iconsminds-bar-chart-4",
                    label: "کیفی",
                    to: "/chichi-man/statistic/quality"
                },
                    {
                        icon: "iconsminds-statistic",
                        label: "کمی",
                        to: "/chichi-man/statistic/quantity"
                    }]
            },
            {
                icon: "simple-icon-wallet",
                id: "chchiMan-check-out",
                label: "تسویه حساب ها",
                to: "/chichi-man/check-out",
            },
            {
                icon: "iconsminds-check",
                id: "chchiMan-status",
                label: "وضعیت",
                to: "/chichi-man/status",
            },


        // {
        //     icon: "simple-icon-info",
        //     id: "chchiMan-info",
        //     label: "اطلاعات",
        //     to: "/chichi-man/info",
        //     subs: [{
        //         icon: "iconsminds-smartphone-4",
        //         label: "سفر فعلی",
        //         to: "/chichi-man/info/current-trip"
        //     },{
        //         icon: "iconsminds-smartphone-4",
        //         label: "اصلی",
        //         to: "/chichi-man/info/main"
        //     }, {
        //         icon: "iconsminds-smartphone-4",
        //         label: "تسویه حساب",
        //         to: "/chichi-man/info/check-out"
        //     }, {
        //         icon: "iconsminds-smartphone-4",
        //         label: "نتایج کلی نظرسنجی ها",
        //         to: "/chichi-man/info/vote"
        //     }, {
        //         icon: "iconsminds-smartphone-4",
        //         label: "آمارها",
        //         to: "/chichi-man/info/static"
        //     },{
        //         icon: "iconsminds-smartphone-4",
        //         label: "اطلاعات ثبت نام",
        //         to: "/chichi-man/info/submit-info"
        //     },{
        //         icon: "iconsminds-smartphone-4",
        //         label: "تاریخچه سفرها ",
        //         to: "/chichi-man/info/trip-history"
        //     }
        //     ,{
        //         icon: "iconsminds-smartphone-4",
        //         label: "وضعیت ها",
        //         to: "/chichi-man/info/situation"
        //     },
        //     ]
        // },

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
        },{
            icon: "iconsminds-user",
            id: "support-message",
            label: "پیامها",
            to: "/support/message",
            subs: [{
                icon: "iconsminds-new-mail",
                id: "support-message-user",
                label: "پیام های کاربران",
                to: "/support/message/users",
                subs: [{
                    icon: "iconsminds-smartphone-4",
                    id: "mobilehomepage",
                    label: "صفحه اصلی موبایل",
                    to: "/home-page/main"
                }]
            }]
        },
        ]
    },
    {
        id: "HomePages",
        icon: "iconsminds-monitor---phone",
        label: "home page",
        to: "/home-page",
        subs: [{
            icon: "iconsminds-smartphone-4",
            id: "mobilehomepage",
            label: "صفحه اصلی موبایل",
            to: "/home-page/main",
            subs: [{
                icon: "iconsminds-smartphone-4",
                label: "create",
                to: "/home-page/main/create"
            }, {
                icon: "iconsminds-smartphone-4",
                label: "edit",
                to: "/home-page/main/edit/:name?"
            }, {
                icon: "iconsminds-smartphone-4",
                label: "active",
                to: "/home-page/main/active"
            },
            ]
        },
            // {
            //     icon: "iconsminds-smartphone-4",
            //     id: "mobilehomepage",
            //     label: "crop img",
            //     to: "/home-page/crop-img",
            // },
            {
                icon: "iconsminds-smartphone-4",
                id: "header-slider",
                label: "اسلایدر بالای صفحه",
                to: "/home-page/header-slider",
            },
            {
                icon: "iconsminds-smartphone-4",
                id: "categories-home-page",
                label: "دسته بندی",
                to: "/home-page/categories",
            },
            {
                icon: "iconsminds-smartphone-4",
                id: "wonder-package-home-page",
                label: "پکیج های شگفت انگیز",
                to: "/home-page/wonder-package",
            },
            {
                icon: "iconsminds-smartphone-4",
                id: "wonder-package-home-page",
                label: "اسلایدر",
                to: "/home-page/slider",
            },
            {
                icon: "iconsminds-smartphone-4",
                id: "banner-home-page",
                label: "بنر",
                to: "/home-page/banner",
            },
            {
                icon: "iconsminds-smartphone-4",
                id: "item-list-home-page",
                label: "آیتم",
                to: "/home-page/item-list",
            },
        ]
    },
    {
        id: "bug-reporter",
        icon: "iconsminds-mail",
        label: "گزارش مشکلات",
        to: "/bug-report",
        subs: [{
            icon: "iconsminds-business-man-woman",
            id: "users-report-Bug",
            label: "کاربران",
            to: "/bug-report/user",
        },
            {
                icon: "iconsminds-king-2",
                id: "admin-report-Bug",
                label: "ادمین",
                to: "/bug-report/admin",
            },
        ]
    },
    {
        id: "content",
        icon: "iconsminds-mail",
        label: "محتوا",
        to: "/content",
        subs: [{
            icon: "iconsminds-smartphone-4",
            id: "product",
            label: "محصولات",
            to: "/content/product",
            subs: [{
                icon: "iconsminds-posterous",
                label: "همه",
                to: "/content/product/all"
            }, {
                icon: "iconsminds-add",
                label: "اضافه کردن",
                to: "/content/product/add/:Id?"
            },
            //     {
            //     icon: "iconsminds-file-edit",
            //     label: "حذف و ویرایش",
            //     to: "/content/product/delete-edit"
            // },
            //
            ]
        },
            {
                icon: "iconsminds-posterous",
                id: "categories",
                label: "دسته بندی",
                to: "/content/category",
                subs: [{
                    icon: "iconsminds-posterous",
                    label: "همه",
                    to: "/content/category/all"
                }, {
                    icon: "iconsminds-add",
                    label: "اضافه کردن",
                    to: "/content/category/add"
                },
                //     {
                //     icon: "iconsminds-file-edit",
                //     label: "حذف و ویرایش",
                //     to: "/content/category/delete-edit"
                // },
                ]
            },
            // {
            //     icon: "iconsminds-delicious",
            //     id: "sub-category",
            //     label: "زیر دسته",
            //     to: "/content/sub-category",
            //     subs: [{
            //         icon: "iconsminds-posterous",
            //         label: "همه",
            //         to: "/content/sub-category/all"
            //     }, {
            //         icon: "iconsminds-add",
            //         label: "اضاقه کردن",
            //         to: "/content/sub-category/add"
            //     }, {
            //         icon: "iconsminds-file-edit",
            //         label: "حذف و ویرایش",
            //         to: "/content/sub-category/delete-edit"
            //     },
            //     ]
            // },


        ]
    },
];
export default data;
