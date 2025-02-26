'use client'

import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'

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
        >
            {text}
        </Button>
    )
}