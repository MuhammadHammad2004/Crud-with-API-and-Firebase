import { Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Createuser = () => {
  const navigate = useNavigate();

  const [newuserData, setnewuserData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  axios
    .post("http://localhost:3000/users", newuserData)
    .then(() => {
      alert("New User Added Successfuly");
      navigate("/");
    })
    .catch((err) => {
      console.log(err);
    });

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
          onChange={(e) =>
            setnewuserData({ ...newuserData, name: e.target.value })
          }
          required
        />
        <TextField
          fullWidth
          sx={{ marginBottom: 5 }}
          label="User Name"
          variant="outlined"
          onChange={(e) =>
            setnewuserData({ ...newuserData, username: e.target.value })
          }
          required
        />
        <TextField
          fullWidth
          sx={{ marginBottom: 5 }}
          label="Email"
          variant="outlined"
          onChange={(e) =>
            setnewuserData({ ...newuserData, email: e.target.value })
          }
          required
        />
        <TextField
          fullWidth
          sx={{ marginBottom: 5 }}
          label="Phone"
          variant="outlined"
          onChange={(e) =>
            setnewuserData({ ...newuserData, phone: e.target.value })
          }
          required
        />
        <Button
          variant="contained"
          color="success"
          sx={{ margin: 2 }}
          onClick={createuserData}
        >
          Create User
        </Button>
      </Paper>
    </form>
  );
};
