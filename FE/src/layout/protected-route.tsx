import toast from "react-hot-toast";
import { redirect, useNavigate } from "react-router-dom";
import { User } from "../types/types";
import { useEffect, useState } from "react";

const AuthedRoute = ({
  user,
  isAuth,
  children,
}: {
  isAuth: boolean | null;
  user: User | null;
  children: React.ReactNode;
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, []);

  if (!user && !isAuth) {
    toast.dismiss(); //It will dismiss all toast before calling current one.
    toast.error("Please login again.");
    navigate("/");
  }

  return <>{children}</>;
};

export default AuthedRoute;
