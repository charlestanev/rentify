'use client';

import { useToast } from "@/hooks/use-toast";
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
        <SignOutButton redirectUrl="/">
            <button className="w-full text-left" onClick={handleLogout}>
                Logout
            </button>
        </SignOutButton>
    )
}

export default SignOutLink