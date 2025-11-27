"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Form } from "../ui/form";

const resetPasswordSchema = z.object({
    password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
    confirmPassword: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
});

export function ResetPasswordForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const form = useForm<z.infer<typeof resetPasswordSchema>>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    async function onSubmit(values: z.infer<typeof resetPasswordSchema>) {
        if (!token) {
            toast.error("Token de redefinição não encontrado");
            return;
        }

        const { error } = await authClient.resetPassword({
            newPassword: values.password,
            token: token,
        });

        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Senha redefinida com sucesso");
            router.push("/login");
        }
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Redefinir senha</CardTitle>
                    <CardDescription>
                        Digite sua nova senha abaixo para redefinir sua senha
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="password">Nova senha</FieldLabel>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="********"
                                        {...form.register("password")}
                                    />
                                    <FieldError errors={[form.formState.errors.password]} />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="confirmPassword">Confirmar senha</FieldLabel>
                                    <Input
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="********"
                                        {...form.register("confirmPassword")}
                                    />
                                    <FieldError errors={[form.formState.errors.confirmPassword]} />
                                </Field>
                                <Field>
                                    <Button
                                        type="submit"
                                        className="w-full"
                                        disabled={form.formState.isSubmitting}
                                    >
                                        {form.formState.isSubmitting ? (
                                            <>
                                                <Loader2 className="animate-spin" />
                                                Redefinindo senha...
                                            </>
                                        ) : (
                                            "Redefinir senha"
                                        )}
                                    </Button>
                                    <FieldDescription className="text-center">
                                        Não recebeu um link de redefinição de senha?{" "}
                                        <Link href="/forgot-password" className="underline-offset-4 hover:underline">
                                            Solicitar redefinição de senha
                                        </Link>
                                    </FieldDescription>
                                </Field>
                            </FieldGroup>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
