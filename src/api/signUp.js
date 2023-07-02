import client from "./client";

export async function signUp({ username, email, password }) {
  console.log({ username, email });
  const resp = await client.post("/auth/signup", { username, email, password });
  const token = resp?.data?.token;

  if (token) {
    window.localStorage.setItem("token", token);
  }
  return resp.data;
}
