export async function createAccount(object: any) {
  const resultBack = await fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });

  return await resultBack.json();
}
