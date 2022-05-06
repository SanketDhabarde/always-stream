import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, RequiresAuth } from "./components";
import {
  Explore,
  Home,
  LikedVideos,
  Login,
  Profile,
  Signup,
  SingleVideo,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/video/:videoId" element={<SingleVideo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
        <Route
          path="/liked"
          element={
            <RequiresAuth>
              <LikedVideos />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
