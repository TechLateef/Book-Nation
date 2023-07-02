import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Header } from "./components";
import { createBrowserHistory } from "history";
import { SignUp } from "./pages";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const queryClient = new QueryClient();
const history = createBrowserHistory();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Router history={history}>
          <Routes>
            <Route path="/">
              <Route index element={<SignUp />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
