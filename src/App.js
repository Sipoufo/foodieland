import { BrowserRouter } from "react-router-dom";
import Router from './routers/index'

function App() {
  return (
    /**
     * Important:
     *    This use for tell to your browser that you use a route for navigate
     */
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
