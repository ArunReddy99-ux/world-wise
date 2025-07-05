import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import Logo from "./Logo";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      {/* Outlet is used for nested routing in React,like in our SPA when we visit app/cities,app/form,app/countries  the Sidebar renders and the respective output appears where <Outlet/> is placed in Sidebar  */}
      <Outlet />
      <Footer />
    </div>
  );
}
export default Sidebar;
