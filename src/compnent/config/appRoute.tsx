import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import User from "../Screens/userPage";
// import Signin from "../Screens/signIn";
// import Dashboard from "../Screens/dashboard";
import Home from "../Screens/home";
export default function AppRoute() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="signIn" element={<Signin/>}/>
            <Route path="user/:id" element={<User/>}/>
            <Route path="dashboard/*" element={<Dashboard/>}/> */}
        </Routes>
      </Router>
    </div>
  )
}
