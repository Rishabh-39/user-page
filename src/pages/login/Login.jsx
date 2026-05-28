import { useState } from "react";

function Login({
  user,
  setIsAuthenticated,
}) {

  const [loginData, setLoginData] =
    useState({
      phone: "",
      password: "",
    });

  const handleChange = (e) => {

    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      loginData.phone === user.phone &&
      loginData.password === user.password
    ) {

      alert("Login Successful");

      setIsAuthenticated(true);

    } else {

      alert("Invalid Phone Number or Password");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="space-y-2"
      >

        {/* PHONE NUMBER */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={loginData.phone}
          onChange={handleChange}
          className="w-full h-12 rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none resize-none bg-white/60 focus:border-purple-400 transition-colors placeholder:text-gray-400"
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          className="w-full h-12 rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none resize-none bg-white/60 focus:border-purple-400 transition-colors placeholder:text-gray-400"
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full h-11 md:h-12 rounded-lg bg-[#000a3d] text-white text-sm md:text-base font-semibold hover:scale-[1.01] transition-all shadow-md hover:shadow-lg mt-3"
        >
          Login
        </button>

      </form>
    </div>
  );
}

export default Login;