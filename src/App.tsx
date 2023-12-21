import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cryptos from "./pages/Cryptos";
import CryptoDetail from "./pages/CryptoDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
   <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coins" element={<Cryptos />} />
      <Route path="/coins/:coinId" element={<CryptoDetail />} />
    </Routes>
    <Footer />
   </>
  );
};

export default App;