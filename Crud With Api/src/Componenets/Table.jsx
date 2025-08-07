import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function BasicTable({ userdata }) {
  const navigate = useNavigate();

  const deleteHandler = (deletId) => {
    axios
      .delete(`http://localhost:3000/users/${deletId}`)
      .then(() => {
        alert("This will delet Perminantly !");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Paper elevation={5} sx={{ borderRadius: 5 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">UserName</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userdata.map((e, i) => (
              <TableRow
                key={e.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {e.id}
                </TableCell>
                <TableCell align="right">{e.name}</TableCell>
                <TableCell align="right">{e.username}</TableCell>
                <TableCell align="right">{e.email}</TableCell>
                <TableCell align="right">{e.phone}</TableCell>
                <TableCell align="right" sx={{ display: "flex", gap: 4 }}>
                  <DeleteForeverIcon
                    color="error"
                    onClick={() => deleteHandler(e.id)}
                    sx={{ cursor: "pointer" }}
                  />
                  <EditIcon
                    onClick={() => navigate(`/edituser/${e.id}`)}
                    sx={{ cursor: "pointer" }}
                    color="success"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
