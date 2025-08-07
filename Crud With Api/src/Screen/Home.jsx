import React, { useEffect, useState } from "react";
import BasicTable from "../Componenets/Table";
import axios from "axios";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import Signup from "./Signup";

const Home = () => {
  let [userData, setuserData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        setuserData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Box>
        <Button
          variant="contained"
          color="success"
          sx={{ margin: 2, float: "right" }}
          onClick={() => navigate("/signin")}
        >
          LogIn
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{ margin: 2, float: "right" }}
          onClick={() => navigate("/saveyourdata")}
        >
          Add Your Data
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{ margin: 2, float: "right" }}
          onClick={() => navigate("/signup")}
        >
          Signup
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{ margin: 2, float: "right" }}
          onClick={() => navigate("/createuser")}
          endIcon={<EditIcon />}
        >
          Create User
        </Button>
        <BasicTable userdata={userData} />
      </Box>
    </>
  );
};

export default Home;
