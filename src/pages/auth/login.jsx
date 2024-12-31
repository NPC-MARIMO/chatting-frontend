import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/auth/Slice";

const initialState = {
  email: "",
  password: "",
};

function Login() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const onSubmit = (event) => {
      event.preventDefault(); 
      console.log(event)
      dispatch(loginUser(formData)).then((data) => {
        if (data?.payload?.success) {
          alert("Login successfully");
          setFormData(initialState);
          navigate("/");
        }
      });
    }

  return (
    <>
      <div className="w-full p-16">
        <div className="w-full flex items-center justify-center flex-col rounded-md text-white font-semibold p-5 bg-[#FFA49A]">
          <h1 className="text-3xl mb-3 text-red-500">Login</h1>
          <form action="" className="p-5">
            <label htmlFor="" className="ml-3 text-red-500">
              Email
            </label>
            <input
              type="text"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className="bg-transparent mt-1 border-2 p-3 outline-none transition-all focus:border-red-500 rounded-md w-full border-[#ea867a]"
            />
            <label htmlFor="" className="ml-3 text-red-500">
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
              className="bg-transparent mt-1 outline-none transition-all focus:border-red-500 border-2 p-3 rounded-md w-full border-[#ea867a]"
            />
            <input
              type="submit"
              className="w-full p-3 mt-5 bg-red-500 rounded-md"
              onClick={(e) => onSubmit(e)}
              value={"Login"}
            />
            <p className="w-full text-center mt-3">
              <Link className="text-red-500 text-center ">
                Forgot Password ?
              </Link>
            </p>
            <p className="w-full text-center mt-3">Don't have an Account ?</p>
            <button className="w-full p-3 bg-transparent border-2 border-red-500 mt-3 text-red-500 rounded-md">
              <Link to="/auth/signin">Create an Account</Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
