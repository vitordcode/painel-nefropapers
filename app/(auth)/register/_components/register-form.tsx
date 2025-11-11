import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterForm() {
    return (
        <form className="flex flex-col gap-4 mt-8">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label>Nome Completo</Label>
                    <Input type="text" placeholder="Jhon Doe" />
                </div>
                <div className="space-y-2">
                    <Label>Email</Label>
                    <Input type="email" placeholder="m@exemplo.com" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label>Telefone</Label>
                    <Input type="tel" placeholder="(00) 5566-7788" />
                </div>
                <div className="space-y-2">
                    <Label>CRM</Label>
                    <Input type="text" placeholder="123456" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label>Estado</Label>
                    <Input type="text" placeholder="Ex: SP, RJ, MG, etc." />
                </div>
                <div className="space-y-2">
                    <Label>Especialidade</Label>
                    <Input type="text" placeholder="Ex: Cardiologista, Clínica Médica, etc." />
                </div>
            </div>
            <Button type="submit">Criar conta</Button>
        </form>
    )
}