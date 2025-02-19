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
    return <DropdownMenu>
        <DropdownMenuTrigger
            asChild
            className='flex gap-4 max-w-[100px]'
        >

        </DropdownMenuTrigger>
        <DropdownMenuContent></DropdownMenuContent>
    </DropdownMenu>;
}

export default LinksDropdown;
