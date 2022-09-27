import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@mantine/core";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Button onClick={() => signOut()}>Sign out {session.user.email}</Button>
      </>
    );
  }
  return (
    <>
      <Button onClick={() => signIn()}>Sign in</Button>
    </>
  );
}
