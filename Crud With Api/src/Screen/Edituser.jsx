import { Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { React, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Edituser = () => {
  const { id } = useParams();
  const [updatedUser, setupdatedUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((response) => {
        setupdatedUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const editUser = () => {
    axios
      .put(`http://localhost:3000/users/${id}`, updatedUser)
      .then(() => {
        alert("Updated Successfuly !!!!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form>
      <Paper elevation={5} sx={{ padding: 3 }}>
        <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 5 }}>
          Edit User
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          value={updatedUser.name}
          sx={{ marginBottom: 5 }}
          placeholder="Name"
          onChange={(e) =>
            setupdatedUser({ ...updatedUser, name: e.target.value })
          }
        />
        <TextField
          fullWidth
          sx={{ marginBottom: 5 }}
          placeholder="User Name"
          variant="outlined"
          value={updatedUser.username}
          onChange={(e) =>
            setupdatedUser({ ...updatedUser, username: e.target.value })
          }
        />
        <TextField
          fullWidth
          sx={{ marginBottom: 5 }}
          placeholder="Email"
          variant="outlined"
          value={updatedUser.email}
          onChange={(e) =>
            setupdatedUser({ ...updatedUser, email: e.target.value })
          }
        />
        <TextField
          fullWidth
          sx={{ marginBottom: 5 }}
          placeholder="Phone"
          variant="outlined"
          value={updatedUser.phone}
          onChange={(e) =>
            setupdatedUser({ ...updatedUser, phone: e.target.value })
          }
        />
        <Button
          variant="contained"
          color="success"
          sx={{ margin: 2 }}
          onClick={editUser}
        >
          Save Now
        </Button>
      </Paper>
    </form>
  );
};
