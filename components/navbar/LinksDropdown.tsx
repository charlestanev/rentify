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
                <Button variant='outline' className='flex gap-4 max-w-[100px] bg-red-600'>
                    <LuAlignLeft className='w-6 h-6' />
                    <UserIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className='w-52'
                align='start'
                sideOffset={10}
            >
                
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LinksDropdown;
