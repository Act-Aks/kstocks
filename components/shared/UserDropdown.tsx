'use client'

import { Avatar } from '@radix-ui/react-avatar'
import { LogOutIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { NavItem } from '@/components/shared/NavItem'
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { routes } from '@/lib/constants'

export const UserDropdown: React.FC = () => {
    const router = useRouter()

    function signOut() {
        router.push(routes.SignIn)
    }

    const user = {
        name: 'Kstocks Logo',
        email: 'kstocks@logo.com',
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={'ghost'}
                    className={
                        'flex items-center gap-3 text-gray-400 hover:text-yellow-500'
                    }
                >
                    <Avatar className={'h-8 w-8'}>
                        <AvatarImage src='https://github.com/shadcn.png' />
                        <AvatarFallback
                            className={
                                'bg-yellow-500 font-bold text-sm text-yellow-900'
                            }
                        >
                            Aks
                        </AvatarFallback>
                    </Avatar>
                    <div className={'hidden items-start md:flex'}>
                        <span className={'font-medium text-base text-gray-400'}>
                            {user.name}
                        </span>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={'text-gray-400'}>
                <DropdownMenuLabel>
                    <div className={'relative flex items-center gap-3 py-2'}>
                        <Avatar className={'h-10 w-10'}>
                            <AvatarImage src='https://github.com/shadcn.png' />
                            <AvatarFallback
                                className={
                                    'bg-yellow-500 font-bold text-sm text-yellow-900'
                                }
                            >
                                Aks
                            </AvatarFallback>
                        </Avatar>
                        <div className={'flex flex-col'}>
                            <span
                                className={
                                    'font-medium text-base text-gray-400'
                                }
                            >
                                {user.name}
                            </span>
                            <span className={'text-gray-400 text-sm'}>
                                {user.email}
                            </span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className={'bg-gray-600'} />
                <DropdownMenuItem
                    onClick={signOut}
                    className={
                        'cursor-pointer font-medium text-gray-100 text-md transition-colors focus:bg-transparent focus:text-yellow-500'
                    }
                >
                    <LogOutIcon className={'mr-2 hidden h-4 w-4 sm:block'} />
                    Logout
                </DropdownMenuItem>
                <DropdownMenuSeparator
                    className={'hidden bg-gray-600 sm:block'}
                />
                <nav className={'sm:hidden'}>
                    <NavItem />
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
