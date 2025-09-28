import type { PropsWithChildren } from 'react'
import { Header } from '@/components/shared/Header'

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <main className='min-h-screen text-gray-400'>
            <Header />
            <div className='container py-10'>{children}</div>
        </main>
    )
}
