import { useState } from "react";
import Login from "../../components/auth/Login";
import Signup from "../../components/auth/Signup";

function Auth({ user, setUser, setIsAuthenticated }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center overflow-hidden p-4 sm:p-6 md:p-8"
      style={{
        backgroundImage:
          "url('/Gemini_Generated_Image_amnm9mamnm9mamnm.png')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

      {/* AUTH CARD */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl bg-white/80 backdrop-blur-lg rounded-[24px] sm:rounded-[32px] md:rounded-[40px] shadow-2xl px-5 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 lg:px-12 lg:py-8 overflow-y-auto md:overflow-visible"
      >

        {/* HEADING */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#05051d] mb-1 md:mb-2">
          Welcome 👋
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-5 md:mb-6">
          Fill in the details to continue
        </p>

        {/* TABS */}
        <div className="flex border-b border-gray-300 mb-4 sm:mb-5 md:mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 pb-2 md:pb-3 text-sm sm:text-base md:text-lg font-semibold transition-all ${
              isLogin
                ? "border-b-4 border-purple-500 text-black"
                : "text-gray-500"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 pb-2 md:pb-3 text-sm sm:text-base md:text-lg font-semibold transition-all ${
              !isLogin
                ? "border-b-4 border-purple-500 text-black"
                : "text-gray-500"
            }`}
          >
            Signup
          </button>
        </div>

        {/* FORM */}
        {isLogin ? (
          <Login
            user={user}
            setIsAuthenticated={setIsAuthenticated}
          />
        ) : (
          <Signup
            setUser={setUser}
            setIsLogin={setIsLogin}
          />
        )}

      </div>
    </div>
  );
}

export default Auth;