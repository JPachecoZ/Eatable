import { useState } from "react";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";
import LoadingPage from "../pages/LoadingPage";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <LoadingPage />;
  } else {
    return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
  }
}

export default App;
