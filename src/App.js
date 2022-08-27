import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  ChannelDetail,
  Feed,
  VideoDetail,
  SearchFeed,
  Navbar,
} from "./Components/index";

import { Box } from "@mui/material";

function App() {
  return (
    <Router>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
