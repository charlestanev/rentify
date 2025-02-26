'use client'

import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'

type SubmitButtonProps = {
    className?: string
    text?: string
}

export function SubmitButton({ className = "", text = "submit" }: SubmitButtonProps) {
    const { pending } = useFormStatus()

    return (
        <Button
            type='submit'
            disabled={pending}
            className={`capitalize ${className}`}
            size='lg'
        >
            {pending
                ? <>
                    <Loader2 className="animate-spin mr-2 h-4 w-4" />
                    Please wait...
                </>
                : text
            }
        </Button>
    )
}