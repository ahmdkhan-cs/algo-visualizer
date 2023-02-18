import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Sequential from "./pages/Searching/Sequential";
import Binary from "./pages/Searching/Binary";
import Bubble from "./pages/Sorting/Bubble";
import 'bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";



function App() {
  return (
    <div className="app d-flex">
      <div className="container-fluid p-0">
        <Topbar />
        <div className="container py-3">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/searching/sequential" element={<Sequential />}/>
            <Route path="/searching/binary" element={<Binary />}/>
            <Route path="/sorting/bubble" element={<Bubble />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
