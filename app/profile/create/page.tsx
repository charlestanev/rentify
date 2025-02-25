import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react'

const createProfileAction = async (formData: FormData) => {
    'use server';
    const firstName = formData.get('firstName') as string;
    console.log(firstName);
}

const CreateProfilePage = () => {
    return (
        <section className='bg-red-300'>
            <h1 className='text-2xl font-semibold mb-8 capitalize'>new user</h1>
            <div className='border p-8 rounded-md max-w-lg'>
                <form action={createProfileAction}>
                    <div className="mb-2">
                        <Label htmlFor='firstName'>First Name</Label>
                        <Input type='text' id='firstName' name='firstName' />
                    </div>
                    <Button type='submit'>Create Profile</Button>
                </form>
            </div>
        </section>
    )
}

export default CreateProfilePage