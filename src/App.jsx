import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import styled from "styled-components";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


const Container = styled.div`
  height: 100vh;
  /* scroll-snap-type: y mandatory; */
  /* scroll-behavior: smooth; */
  overflow-x:hidden;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bw.jpg");
  &::-webkit-scrollbar{
    display: none;
  }
  @media only screen and (max-width: 768px) {
    height: 100vh;
    width: 100%;
  }
`;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path:"/dashboard",
    element: <Dashboard/>
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  }
]);
function App() {
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
