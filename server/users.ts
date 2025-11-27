"use server";

import { auth } from "@/lib/auth";

export const signIn = async (email: string, password: string) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
    return { success: true, message: "Login realizado com sucesso" };
  } catch (error) {
    const e = error as Error;
    return {
      success: false,
      message:
        e.message ||
        "Erro ao fazer login, tente novamente ou entre em contato com o suporte",
    };
  }
};

export const signUp = async (name: string, email: string, password: string) => {
  try {
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });
    return { success: true, message: "Conta criada com sucesso" };
  } catch (error) {
    const e = error as Error;
    return {
      success: false,
      message:
        e.message ||
        "Erro ao criar conta, tente novamente ou entre em contato com o suporte",
    };
  }
};
