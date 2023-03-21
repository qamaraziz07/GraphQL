import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";
import CreateQuote from "./Components/CreateQuote";
import Home from "./Components/Home";
import OtherUserProfile from "./Components/OtherUserProfile";
import { Navigate } from "react-router";

export const UnAuthRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  {path:"*", element:<Navigate to="/login"/>},
  
];

export const AuthRoutes =[
  { path: "/", element: <Home /> },
  { path: "/create", element: <CreateQuote /> },
  { path: "/profile", element: <Profile /> },
  { path: "/profile/:userid", element: <OtherUserProfile /> },
  {path:"*", element:<Navigate to="/"/>},

]