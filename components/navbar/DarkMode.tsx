"use client"

import * as React from "react"
import { JSX } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"

export default function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [icon, setIcon] = useState<JSX.Element | null>(null);

    useEffect(() => {
        setIcon(
            theme === "dark" || theme === "system"
                ? <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all dark:-rotate-90 dark:scale-100" />
                : <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-100" />
        );
    }, [theme]);

    if (!icon) {
        return null;
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    size="icon"
                    onClick={() => setTheme(theme === "dark" || theme === "system" ? "light" : "dark")}
                >
                    {icon}
                </Button>
            </DropdownMenuTrigger>
        </DropdownMenu>
    );
}