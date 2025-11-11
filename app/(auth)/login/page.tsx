import LoginForm from "./_components/login-form";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="max-w-md w-full text-center">
                <Image src="/logos/logo.svg" alt="Logo Nefropapers" width={42} height={42} className="mx-auto mb-4" />
                <h1 className="text-2xl font-semibold">Bem-vindo(a) ao Painel Nefropapers</h1>
                <p className="text-md font-medium mt-1 text-muted-foreground">
                    Faça login e tenha acesso a conteúdos exclusivos.
                </p>
                <div className="flex flex-col gap-2 w-full  mt-8">
                    <LoginForm />
                </div>
                <div className="mt-2">
                    <span className="text-sm text-muted-foreground font-medium">Não tem uma conta? <Link className="text-foreground hover:underline" href="/register">Cadastre-se</Link></span>
                </div>
            </div>
        </div>
    )
}