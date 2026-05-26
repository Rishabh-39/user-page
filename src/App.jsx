import { useState } from "react";
import Auth from "./pages/auth/Auth";
import Profile from "./pages/profile/Profile";

function App() {

  const [isAuthenticated, setIsAuthenticated] =
    useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (

    <>
      {isAuthenticated ? (

        <Profile
          user={user}
          setIsAuthenticated={setIsAuthenticated}
        />

      ) : (

        <Auth
          user={user}
          setUser={setUser}
          setIsAuthenticated={setIsAuthenticated}
        />

      )}
    </>
  );
}

export default App;