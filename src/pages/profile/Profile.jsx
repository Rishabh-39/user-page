function Profile({
  user,
  setIsAuthenticated,
}) {

  return (

    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-10">

      <div className="w-full max-w-4xl bg-white rounded-[40px] shadow-2xl p-16 flex flex-col items-center">

        <img
        //   src="https://i.pravatar.cc/200"
          alt="profile"
          className="w-40 h-40 rounded-full mb-8"
        />

        <h1 className="text-5xl font-bold mb-4">
          Welcome Back 👋
        </h1>

        <p className="text-2xl text-gray-500 mb-10">
          {user.email}
        </p>

        <button
          onClick={() =>
            setIsAuthenticated(false)
          }
          className="px-12 py-5 rounded-full bg-[#000a3d] text-white text-2xl font-semibold"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Profile;