import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from '../../components/ui/dropdown-menu';
import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from '../ui/button';
import UserIcon from './UserIcon';
import { links } from '@/utils/links';
import SignOutLink from './SignOutLink';

function LinksDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' className='flex gap-4 max-w-[100px] bg-rose-600'>
                    <LuAlignLeft className='w-6 h-6' />
                    <UserIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className='w-40'
                align='start'
                sideOffset={5}
            >
                {links.map((link, i) => {
                    return <DropdownMenuItem key={i}>
                        <Link
                            href={link.href}
                            className='capitalize w-full hover:bg-gray-200 dark:hover:bg-rose-600 px-3 py-2 hover:rounded-sm'
                        >
                            {link.label}
                        </Link>
                    </DropdownMenuItem>
                })}
                <DropdownMenuSeparator />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LinksDropdown;
