import "./componenets/directory/directory.styles.scss"
import { Routes, Route } from "react-router-dom"

import Home from "./routes/home/home";
import Navbar from "./routes/Navbar/navbar";
import SignIn from "./routes/sign-in/sign-in";

const App = () => {
  const Shop = () => {
    return ( 
      <div>this is shopping card</div>
     );
  }
 
 
  
  return (
    <Routes>
    <Route path="/" element={<Navbar />}>
    <Route index element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/sign-in" element={<SignIn />} />
    </Route>
    
    </Routes>
   
  );
}

export default App;
