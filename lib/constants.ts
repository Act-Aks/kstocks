export const routes = {
    Dashboard: "/",
    Search: "/search",
    Watchlist: "/watchlist",
    SignIn: "/sign-in",
    SignUp: "/sign-up",
} as const;

export const navItems = [
    { href: routes.Dashboard, label: "Dashboard" },
    { href: routes.Search, label: "Search" },
    { href: routes.Watchlist, label: "Watchlist" },
] as const;
