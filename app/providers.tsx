'use client';

import React from 'react'
import { ThemeProvider } from './theme-provider';
import { Toaster } from '@/components/ui/toaster';

const providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Toaster />
            <ThemeProvider
                attribute="class"
                defaultTheme='system'
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </>
    )
}

export default providers