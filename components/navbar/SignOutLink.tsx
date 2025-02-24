'use client';

import { useToast } from "@/ui/use-toast";
import { SignOutButton } from "@clerk/nextjs";

const SignOutLink = () => {
    const { toast } = useToast();
    const handleLogout = () => {
        toast({
            title: 'Logged out',
            description: 'You have been logged out',
            duration: 5000
        });
    }

    return (
        <SignOutButton afterSignOutUrl="/">
            Sign out
        </SignOutButton>
    )
}

export default SignOutLink