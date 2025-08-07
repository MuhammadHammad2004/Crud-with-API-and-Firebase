import { Route, Routes } from "react-router-dom";
import Home from "./Screen/Home";
import { Createuser } from "./Screen/Createuser";
import { Edituser } from "./Screen/Edituser";
import Signup from "./Screen/Signup";
import Signin from "./Screen/Signin";
import { SaveyourDta } from "./Screen/AddDatabase";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createuser" element={<Createuser />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/saveyourdata" element={<SaveyourDta />} />
      <Route path="/edituser/:id" element={<Edituser />} />
    </Routes>
  );
};

export default App;
