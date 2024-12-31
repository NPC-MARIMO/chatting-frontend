import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      <div class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] h-[100vh] w-full flex items-center justify-center">
        <div className="w-[40vw] h-full flex items-center justify-center ">
          <Outlet />
        </div>
        <div className="w-[40vw] h-full flex items-center flex-col justify-center">
          <div className="app">
            <div className="logo"></div>
            <h1 className=" text-transparent bg-clip-text bg-gradient-to-r from-[#6641aa] to-[#de0ac1] via-[#ed1664] text-5xl font-bold">
              EVO-Bond
            </h1>
          </div>

          <p class="text-zinc-300 text-xl font-bold mt-2"> 
            Where LOLs and OMGs Happen
          </p>

        </div>
      </div>
    </>
  );
}

export default AuthLayout;
