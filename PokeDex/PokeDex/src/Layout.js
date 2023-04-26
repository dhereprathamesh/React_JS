import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import AdminPage from "./Pages/AdminPage/AdminPage";
import Overview from "./Pages/Overview/Overview";
import Sidebar from "./components/AdminPage/SideBar/Sidebar";
import helper from './utils/helper';
import PokeDetails from "./Pages/PokemonDetailsPage/PokeDetails";

function Layout() {
  const isAuth = parseInt(helper.getLocalStorage('isAuthenticated')) || 0;

  const [isAuthenticated, updateAuthenticated] = React.useState(isAuth);
  if (!isAuthenticated) {
    return (
      <>
        <Auth updateAuth={updateAuthenticated}/>
      </>
    );
  }

  return (
    <>
    {/* <BrowserRouter> */}
    {/* <Routes>
    <Route path="/" element={<Auth />} />
    </Routes>  */}
      <Sidebar>
        <Routes>
          <Route path="/dashboard" element={<AdminPage />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/details" element={<PokeDetails />} />
        </Routes> 
      </Sidebar>
      {/* </BrowserRouter>   */}
    </>
  );
}

export default Layout;
