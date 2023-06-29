import React from "react";
// import MenuList from "./MenuList";
// import Navbar from "./Navbar";
// import About from "./About";
import Navbar from "./Navbar";
import Login from "./components/Login_S";
import Register from "./components/Register_S";
import MenuList from "./pages/MenuList";
import About from "./pages/About";
import { APP_ROUTES } from "./utils/constants";
import { Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <h3 className="heading-3" style={{ textAlign: "center" }}>
          Welcome to the Menu App
        </h3>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<Navigate to={APP_ROUTES.MENU_LIST} />}
          />
          <Route path={APP_ROUTES.REGISTER} exact element={<Register />} />
          <Route path={APP_ROUTES.LOG_IN} element={<Login />} />
          <Route path={APP_ROUTES.MENU_LIST} element={<MenuList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

// -- Notes --

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken;
// }

// {
/* <section className="menulist">
        <MenuList />
      </section>

      <About /> */
// }

// const [token, setToken] = useState()

  // if (!token) {
  //   return <Login setToken={setToken} />
  // }
