import { GithubUser } from "@/components/GithubUser/GithubUser";
import { DialogProvider } from "@/contexts/DialogContext/DialogContext";
import { Suspense } from "react";

export default async function Home() {
  return (
    <DialogProvider>
      <Suspense fallback={<p>Carregando...</p>}>
        <GithubUser username="jeffyMesquita" />
      </Suspense>
      <Suspense fallback={<p>Carregando...</p>}>
        <GithubUser username="diego3g" />
      </Suspense>
    </DialogProvider>
  );
}
