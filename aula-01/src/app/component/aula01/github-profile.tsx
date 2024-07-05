export async function GithubProfile() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('https://api.github.com/users/DaniloThiago')
  const user = await response.json()
  return (
    <pre className="bg-black text-yellow-600 p-2">
      {JSON.stringify(user, null, 2)}
    </pre>
  )
}
