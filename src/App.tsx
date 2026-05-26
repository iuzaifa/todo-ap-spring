import Header from "./component/Header";
import AppRoutes from "./routes/AppRoutes";
import { isLoggedIn } from "./utils/utils.ts";

function App() {
  const loggedIn = isLoggedIn();

  return (
    <>
      {loggedIn ? <Header /> : null}
      <AppRoutes />
    </>
  );
}

export default App;



