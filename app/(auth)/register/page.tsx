import Image from "next/image";
import RegisterForm from "./_components/register-form";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="max-w-md w-full text-center">
                <Image src="/logos/logo.svg" alt="Logo Nefropapers" width={42} height={42} className="mx-auto mb-4" />
                <h1 className="text-2xl font-semibold">Bem-vindo(a) ao Painel Nefropapers</h1>
                <p className="text-md font-medium mt-1 text-muted-foreground">
                    Faça cadastro e tenha acesso a conteúdos exclusivos.
                </p>
                <div>
                    <RegisterForm />
                </div>
                <div className="mt-2">
                    <span className="text-sm font-medium text-muted-foreground mt-4">Já tem uma conta? <Link className="text-foreground hover:underline" href="/login">Faça login</Link></span>
                </div>
            </div>
        </div>
    )
}