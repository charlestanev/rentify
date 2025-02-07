import Navbar from '@/components/navbar/Navbar'
import { Button } from '@/components/ui/button'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <h1 className='text-3xl'>HomePage</h1>
      <Button
        variant={'secondary'}
        size={'lg'}
        className='bg-red-400 capitalize'
      >Click me</Button>

      <Navbar></Navbar>

    </>
  )
}

export default HomePage