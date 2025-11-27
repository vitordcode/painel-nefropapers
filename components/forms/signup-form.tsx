"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { signUp } from "@/server/users"
import { Form } from "../ui/form"

const signUpSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
  confirmPassword: z.string().min(8, "A confirmação de senha deve ter pelo menos 8 caracteres"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
});


export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    }
  })
  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    const { success, message } = await signUp(values.name, values.email, values.password);
    if (success) {
      toast.success(message as string);
      router.push("/");
    } else {
      toast.error(message as string);
    }
  }

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Criar uma conta</CardTitle>
        <CardDescription>
          Digite suas informações abaixo para criar sua conta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field className="gap-1">
                <FieldLabel htmlFor="name">Nome completo</FieldLabel>
                <Input id="name" type="text" placeholder="João da Silva" {...form.register("name")} />
                <FieldError errors={[form.formState.errors.name]} />
              </Field>
              <Field className="gap-1">
                <FieldLabel htmlFor="email">E-mail</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="exemplo@exemplo.com"
                  {...form.register("email")}
                />
                <FieldError errors={[form.formState.errors.email]} />
              </Field>
              <Field className="gap-1">
                <FieldLabel htmlFor="password">Senha</FieldLabel>
                <Input id="password" type="password" {...form.register("password")} />
                <FieldError errors={[form.formState.errors.password]} />
              </Field>
              <Field className="gap-1">
                <FieldLabel htmlFor="confirm-password">
                  Confirmar senha
                </FieldLabel>
                <Input id="confirm-password" type="password" {...form.register("confirmPassword")} />
                <FieldError errors={[form.formState.errors.confirmPassword]} />
              </Field>
              <FieldGroup className="gap-1">
                <Field className="gap-1">
                  <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" />
                        Criando conta...
                      </>
                    ) : (
                      "Criar conta"
                    )}
                  </Button>
                  <FieldDescription className="px-6 text-center">
                    Já tem uma conta? <Link href="/login">Entrar</Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </FieldGroup>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
