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

    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      {/* PHONE NUMBER */}
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={loginData.phone}
        onChange={handleChange}
        className="w-full h-16 rounded-2xl border border-gray-300 px-5 text-lg outline-none focus:border-purple-500"
      />

      {/* PASSWORD */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={loginData.password}
        onChange={handleChange}
        className="w-full h-16 rounded-2xl border border-gray-300 px-5 text-lg outline-none focus:border-purple-500"
      />

      {/* BUTTON */}
      <button
        type="submit"
        className="w-full h-16 rounded-2xl bg-[#000a3d] text-white text-xl font-semibold hover:scale-[1.01] transition-all"
      >
        Login
      </button>

    </form>
  );
}

export default Login;