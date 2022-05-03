import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { Explore, Home, SingleVideo } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:videoId" element={<SingleVideo />} />
      </Routes>
    </div>
  );
}

export default App;
