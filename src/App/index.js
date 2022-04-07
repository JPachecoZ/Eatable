import { lazy, Suspense } from "react";
import UnauthenticatedApp from "./UnauthenticatedApp";
import LoadingPage from "../pages/LoadingPage";
import { useAuth } from "../context/auth-context";

const AuthenticatedApp = lazy(() => import("./AuthenticatedApp"));

function App() {
  const { user } = useAuth();

  return user ? (
    <Suspense fallback={<LoadingPage />}>
      <AuthenticatedApp />
    </Suspense>
  ) : (
    <UnauthenticatedApp />
  );
}

export default App;
