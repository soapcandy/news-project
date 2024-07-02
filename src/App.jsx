import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsPage from "./components/NewsPage";
import Category from "./components/Category";

function App() {
  return (
    <BrowserRouter>
      <Category />
      <Routes>
        <Route path="/:category?" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
