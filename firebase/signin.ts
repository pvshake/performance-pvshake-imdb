import { app } from "./config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);

interface Login {
  email: string;
  password: string;
}

export default async function signIn(values: Login) {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
  } catch (e) {
    error = e;
  }

  return { result, error };
}
