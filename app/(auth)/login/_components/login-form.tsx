import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
    return (
        <form className="flex flex-col gap-4">
            <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" placeholder="Email" />
            </div>
            <div className="space-y-2">
                <Label>Senha</Label>
                <Input type="password" placeholder="Senha" />
            </div>
            <Button type="submit">Entrar</Button>
        </form>
    )
}