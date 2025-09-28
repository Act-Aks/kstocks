import Image from 'next/image'
import Link from 'next/link'
import { NavItem } from '@/components/shared/NavItem'
import { UserDropdown } from '@/components/shared/UserDropdown'

export const Header: React.FC = () => {
    return (
        <header className={'header sticky top-0'}>
            <div className={'header-wrapper container'}>
                <Link href={'/'}>
                    <Image
                        src={'/icons/logo.svg'}
                        alt='Kstocks logo'
                        width={140}
                        height={32}
                        className={'h-8 w-auto cursor-pointer'}
                    />
                </Link>
                <nav className={'hidden sm:block'}>
                    <NavItem />
                </nav>
                <UserDropdown />
            </div>
        </header>
    )
}
