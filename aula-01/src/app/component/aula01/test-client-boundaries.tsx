export async function TestClientBoundaries() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return <h1>Test client boundaries</h1>
}
