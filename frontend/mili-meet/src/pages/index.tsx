import { useSession, signIn, signOut } from "next-auth/react"

function Index() {
  const { data } = useSession();

  console.log(data);

  if (data) {
    return (
      <>
        Signed in as {data.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export default Index;
