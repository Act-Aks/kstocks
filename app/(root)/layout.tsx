import type { PropsWithChildren } from 'react'
import { Header } from '@/components/shared/Header'

/**
 * Root layout component that renders the application header and a centered content container.
 *
 * @param children - Elements to display as the page content inside the layout's container
 * @returns The layout element containing the header and the provided children
 */
export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <main className='min-h-screen text-gray-400'>
            <Header />
            <div className='container py-10'>{children}</div>
        </main>
    )
}