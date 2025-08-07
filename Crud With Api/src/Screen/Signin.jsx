import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/config";
import { useState } from "react";
import { Paper, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [siginemail, setsigninEmail] = useState("");
  const [signinpassword, setsigninPassword] = useState("");

  const navigate = useNavigate();

  const signIN = () => {
    signInWithEmailAndPassword(auth, siginemail, signinpassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage);
      });
  };
  return (
    <Paper style={{ padding: "2rem", maxWidth: "400px", margin: "2rem auto" }}>
      <form onSubmit={signIN}>
        <h1 style={{ textAlign: "center" }}>Sign In</h1>

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setsigninEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setsigninPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "1rem" }}
          onClick={() => navigate("/")}
        >
          Sign In
        </Button>
      </form>
    </Paper>
  );
};

export default Signin;
