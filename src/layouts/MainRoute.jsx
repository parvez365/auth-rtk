import { Outlet } from "react-router";
import Header from "../common/Header";
import Footer from "../common/Footer";

const MainRoute = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainRoute;
