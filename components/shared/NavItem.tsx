"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, routes } from "@/lib/constants";

export const NavItem: React.FC = () => {
    const pathname = usePathname();

    function isActive(path: string) {
        if (path === routes.Dashboard) {
            return pathname === routes.Dashboard;
        }
        return pathname.startsWith(path);
    }

    return (
        <ul
            className={
                "flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium"
            }
        >
            {navItems.map(({ href, label }) => (
                <li key={href}>
                    <Link
                        href={href}
                        className={`hover:text-yellow-500 transition-colors ${
                            isActive(href) ? "text-gray-100" : ""
                        }`}
                    >
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
