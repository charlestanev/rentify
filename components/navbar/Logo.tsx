import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { FiHome } from 'react-icons/fi'

const Logo = () => {
    return (
        <div>
            <Button asChild>
                <Link href='/'>
                    <FiHome className='w-6 h-6' />
                </Link>
            </Button>
        </div>
    )
}

export default Logo