'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems, routes } from '@/lib/constants'

export const NavItem: React.FC = () => {
    const pathname = usePathname()

    function isActive(path: string) {
        if (path === routes.Dashboard) {
            return pathname === routes.Dashboard
        }
        return pathname.startsWith(path)
    }

    return (
        <ul
            className={
                'flex flex-col gap-3 p-2 font-medium sm:flex-row sm:gap-10'
            }
        >
            {navItems.map(({ href, label }) => (
                <li key={href}>
                    <Link
                        className={`transition-colors hover:text-yellow-500 ${
                            isActive(href) ? 'text-gray-100' : ''
                        }`}
                        href={href}
                    >
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
