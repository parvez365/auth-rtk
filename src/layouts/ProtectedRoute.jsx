import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router";
import { openLoginModal } from "../redux/slices/loginSlice";

const ProtectedRoute = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openLoginModal());
  }, [dispatch]);

  return <Outlet />;
};

export default ProtectedRoute;
