import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./Components/DetailPage";
import EditData from "./Components/EditData";
import GetAPIData from "./Components/GetAPIData";
import PostData from "./Components/PostData";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetAPIData />} />
          <Route path="/uploaddata" element={<PostData />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/edit/:editid" element={<EditData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
