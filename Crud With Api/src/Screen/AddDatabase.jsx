import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Config/config";

export const SaveyourDta = () => {
  const navigate = useNavigate();

  const [databasename, setDataname] = useState("");
  const [databaseusername, setDatausername] = useState("");
  const [databaseemail, setDataemail] = useState("");
  const [databasepassword, setDatapassword] = useState("");

  const addData = async () => {
    try {
      let userData = {
        username: databasename,
        userlastname: databaseusername,
        useremail: databaseemail,
        userpassword: databasepassword,
      };

      const id = Math.round(Math.random() * 100).toString();

      const saveData = await setDoc(doc(db, "users", id), userData);
      console.log("Data Add Successfuly");
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form>
      <Paper elevation={5} sx={{ padding: 3 }}>
        <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 5 }}>
          Create New User
        </Typography>
        <TextField
          fullWidth
          sx={{ marginBottom: 5 }}
          label="Name"
          variant="outlined"
          onChange={(e) => setDataname(e.target.value)}
          required
        />
        <TextField
          fullWidth
          sx={{ marginBottom: 5 }}
          label="User Name"
          variant="outlined"
          onChange={(e) => setDatausername(e.target.value)}
          required
        />
        <TextField
          fullWidth
          sx={{ marginBottom: 5 }}
          label="Email"
          variant="outlined"
          onChange={(e) => setDataemail(e.target.value)}
          required
        />
        <TextField
          fullWidth
          sx={{ marginBottom: 5 }}
          label="Phone"
          variant="outlined"
          onChange={(e) => setDatapassword(e.target.value)}
          required
        />
        <Button
          variant="contained"
          color="success"
          sx={{ margin: 2 }}
          onClick={addData}
        >
          Add Data
        </Button>
      </Paper>
    </form>
  );
};
