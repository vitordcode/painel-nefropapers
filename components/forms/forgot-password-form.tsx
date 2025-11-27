"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
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
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Form } from "../ui/form";

const formSchema = z.object({
    email: z.string().email(),
});

export function ForgotPasswordForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const { error } = await authClient.requestPasswordReset({
            email: values.email,
            redirectTo: "/reset-password",
        });

        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Password reset email sent");
        }
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Solicitar redefinição de senha</CardTitle>
                    <CardDescription>
                        Digite seu email abaixo para solicitar uma redefinição de senha
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="email">E-mail</FieldLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="exemplo@exemplo.com"
                                        {...form.register("email")}
                                    />
                                    <FieldError errors={[form.formState.errors.email]} />
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
                                                Enviando...
                                            </>
                                        ) : (
                                            "Redefinir senha"
                                        )}
                                    </Button>
                                </Field>
                            </FieldGroup>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}