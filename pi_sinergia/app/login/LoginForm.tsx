'use client'

import { useEffect, useState } from "react";
import Input from "../components/inputs/Input";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { SafeUser } from "@/types";

interface LoginFormProps{
    currentUser: SafeUser | null;
}

const LoginForm: React.FC<LoginFormProps> = ({currentUser}) => {
    const [isLoading, setIsLoading] = useState(false)
    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({defaultValues:{
        email:'',
        password:'',

    }})

    const router = useRouter()

    useEffect(() => {
        if(currentUser){
            router.push("/");
            router.refresh();
        }
    },[])

    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        signIn('credentials', {...data, redirect:false }).then((callback) => {
            setIsLoading(false);

            if(callback?.ok){
                router.push("/");
                router.refresh();
                toast.success("Logado");
            }

            if(callback?.error){
                toast.error(callback.error)
            }
        })
    };

    if(currentUser){
        return <p className="text-center">Já está logado. Redirecionando...</p>
    }

    return (
        <>
        <h1 className=" flex font-bold text-2xl justify-center ">Login</h1>
        <Button outline label="Continuar com Google" icon={AiOutlineGoogle} onClick={() =>{signIn('google')}} custom="w-full"/>
        <hr className="bg-slate-300 w-full h-px"/>
        <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required/>
        <Input id="password" label="Senha" disabled={isLoading} register={register} errors={errors} required type="password"/>
        <Button label={isLoading ? "Carregando..." : "Login"} custom="w-full"onClick={handleSubmit(onSubmit)}/> 
        <p className="text-sm">Não possui uma conta? {" "}<Link href='/register' className="underline"> Criar uma conta</Link></p>
        </>

      );
}
 
export default LoginForm;