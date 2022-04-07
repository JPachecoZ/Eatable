import CardItem from "./components/CardItem";
import Total from "./components/TotalCart";

function AuthenticatedApp() {
  return (
    <div className="App">
      <CardItem></CardItem>
      <Total/>
    </div>
  );
}

export default AuthenticatedApp;
