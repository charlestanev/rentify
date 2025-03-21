'use client';
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { actionFunction } from '@/utils/types';

const initialState = {
    message: '',
};

function FormContainer({ action, children }: { action: actionFunction, children: React.ReactNode }) {

    return <form action={children}></form>
}

export default FormContainer;