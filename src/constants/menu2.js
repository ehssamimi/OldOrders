const data = [
    {
        id: "OldOrders",
        icon: "iconsminds-air-balloon-1",
        label: "OldOrders",
        to: "/orders",
        subs: [
            {
                icon: "simple-icon-layers",
                label: "Old",
                to: "/orders/old",
                subs: [
                    {
                        icon: "simple-icon-arrow-right",
                        label: "yesterday",
                        to: "/orders/old/yesterday"
                    },
                    {
                        icon: "simple-icon-arrow-right",
                        label: "show",
                        to: "/resource-management/game-mode/show"
                    }
                ]
            },

            {
                icon: "simple-icon-paper-plane",
                label: "present",
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

];
export default data;
