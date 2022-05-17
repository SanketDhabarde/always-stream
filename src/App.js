import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, RequiresAuth } from "./components";
import {
  Explore,
  History,
  Home,
  LikedVideos,
  Login,
  NotFound,
  Playlists,
  PlaylistVideos,
  Profile,
  Signup,
  SingleVideo,
  WatchLater,
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
        <Route
          path="/playlists"
          element={
            <RequiresAuth>
              <Playlists />
            </RequiresAuth>
          }
        />
        <Route
          path="/playlist/:id"
          element={
            <RequiresAuth>
              <PlaylistVideos />
            </RequiresAuth>
          }
        />
        <Route
          path="/watch-later"
          element={
            <RequiresAuth>
              <WatchLater />
            </RequiresAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RequiresAuth>
              <History />
            </RequiresAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
