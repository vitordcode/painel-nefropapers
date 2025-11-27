import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { Resend } from "resend";
import ForgotPasswordEmail from "@/components/emails/reset-password";
import { db } from "@/db/drizzle";
import { schema } from "@/db/schema";

const resend = new Resend(process.env.RESEND_API_KEY as string);

export const auth = betterAuth({
  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, _request) => {
      // await sendEmail({
      //   to: user.email,
      //   subject: "Verificar e-mail",
      //   text: `Clique no link abaixo para verificar seu e-mail: ${url}`,
      // });
    },
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
  },
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      resend.emails.send({
        from: "noreply@nefropapers.com.br",
        to: user.email,
        subject: "Redefinir senha",
        react: ForgotPasswordEmail({
          resetUrl: url,
          userEmail: user.email,
        }),
      });
    },
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  plugins: [nextCookies()],
});
