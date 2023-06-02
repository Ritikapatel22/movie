import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./component/content";
import Movie from "./component/movie";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />}></Route>
          <Route path="/movie" element={<Movie />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
