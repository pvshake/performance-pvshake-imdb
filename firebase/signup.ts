import { app } from "./config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);

interface Login {
  email: string;
  password: string;
}

export default async function signUp(values: Login) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
  } catch (e) {
    error = e;
  }

  return { result, error };
}
