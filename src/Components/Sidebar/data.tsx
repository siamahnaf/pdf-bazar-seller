import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdOutlineBusAlert } from "react-icons/md";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { IoSettings } from "react-icons/io5";

export const NavList = [
    {
        id: "/",
        name: "Dashboard",
        icon: <MdOutlineSpaceDashboard />,
        path: "/"
    },
    {
        id: "/sales",
        name: "Flash Sales",
        icon: <MdOutlineBusAlert />,
        path: "/sales"
    },
    {
        id: "/products",
        name: "Products",
        icon: <MdLocalGroceryStore />,
        path: "/products"
    },
    {
        id: "/orders",
        name: "Orders",
        icon: <FaClipboardList />,
        path: "/orders"
    },
    {
        id: "/reviews",
        name: "Reviews",
        icon: <MdReviews />,
        path: "/reviews"
    },
    {
        id: "/money-withdraw",
        name: "Money Withdraw",
        icon: <MdPayments />,
        path: "/money-withdraw"
    },

    {
        id: "/shop-settings",
        name: "Shop Settings",
        icon: <IoSettings />,
        path: "/shop-settings"
    },
]
