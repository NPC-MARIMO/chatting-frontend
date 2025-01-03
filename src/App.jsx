import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import Signin from "./pages/auth/signin";
import Login from "./pages/auth/login";
import Home from "./pages/home/home";
import { useDispatch, useSelector } from "react-redux";
import CheckAuth from "./components/common/check-auth";
import { useEffect } from "react";
import { checkAuth } from "./store/auth/Slice";
import HomeLayout from "./components/home/layout";

function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  console.log(isAuthenticated);
  return (
    <>
      <div className="flex flex-col bg-white">
        <Routes>
          <Route
            path="/"
            element ={
              <CheckAuth isAuthenticated={isAuthenticated} user={user} >
                <HomeLayout />
              </CheckAuth>
            }
          >
            <Route path ="home" element={<Home />} />
          </Route>
          <Route
            path="/auth"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <AuthLayout />
              </CheckAuth>
            }
          >
            <Route path="login" element={<Login />} />
            <Route path="signin" element={<Signin />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
