import { useEffect, useState } from "react";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";
import LoadingPage from "../pages/LoadingPage";
import { login } from "../services/products-service";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //Login - prueba
  const credentials = {
    email: "test@mail.com",
    password: "letmein"
  }

  useEffect(() => {
    login(credentials)
      .then(setUser) 
      .catch((error) => console.log(error));
  }, []);
  console.log(user)
  /////////////////////

  if (isLoading) {
    return <LoadingPage />;
  } else {
    return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
  }
}

export default App;
