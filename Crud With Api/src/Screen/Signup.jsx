import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/config";
import { useState } from "react";
import { Paper, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [signinName, setsignupName] = useState("");
  const [email, setsignupEmail] = useState("");
  const [password, setsignupPassword] = useState("");

  const navigate = useNavigate();

  const signup = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Signup Successfully");
        console.log(userCredential.user);
      })
      .catch((error) => {
        alert(error.code);
        alert(error.message);
      });
  };


  
  return (
    <Paper style={{ padding: "2rem", maxWidth: "400px", margin: "2rem auto" }}>
      <form onSubmit={signup}>
        <h1 style={{ textAlign: "center" }}>Sign Up</h1>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setsignupName(e.target.value)}
        />

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setsignupEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setsignupPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "1rem" }}
          onClick={() => navigate("/")}
        >
          Sign Up
        </Button>
      </form>
    </Paper>
  );
};

export default Signup;
