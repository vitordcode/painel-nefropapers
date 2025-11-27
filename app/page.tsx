"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";


export default function Home() {
  const router = useRouter();

  async function handleSignOut() {
    await authClient.signOut();
    router.push("/login");
  }
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <h1 className="text-6xl font-semibold">Painel Nefropapers</h1>
      <Button onClick={() => handleSignOut()}>Sair</Button>
    </div>
  );
}
