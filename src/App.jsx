import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import AuthLayout from "./components/auth/layout";
import Signin from "./pages/auth/signin";
import Login from "./pages/auth/login";
import { useSelector } from "react-redux";
import CheckAuth from "./components/common/check-auth";

function App() {

  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );

  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
        <Routes>
        <Route
          path="/"
          element={
            <CheckAuth
              isAuthenticated={isAuthenticated}
              user={user}
            ></CheckAuth>
          }
        />

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
