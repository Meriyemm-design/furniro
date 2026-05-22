import "@styles/commonStyles.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop"
import ProductDetailPage from "./Pages/ProductDetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/productdetailpage" element={<ProductDetailPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
