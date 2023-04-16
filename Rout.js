import Nav from "./components/Nav/Nav";
import Section from "./components/Section/Section";
import Airppp from "./components/Section/airSelectBox/Airppp";
import Jeju from "./components/Section/jeju/Jeju";
import Footer from "./components/Section/Footer";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Gangwon from "./components/Section/Gangwon/Gangwon";
import Busan from "./components/Section/Gangwon/Busan";
import Seoul from "./components/Section/Gangwon/Seoul";
import Jeonrado from "./components/Section/Gangwon/Jeonrado";
import Choongchung from "./components/Section/Gangwon/Choongchung";
import Hongdo from "./components/Section/Gangwon/Hongdo";
import Jejusi from "./components/Section/jeju/Jejusi";
import Jungmoon from "./components/Section/jeju/Jungmoon";
import Seoguipo from "./components/Section/jeju/Seoguipo";
import Aewoul from "./components/Section/jeju/Aewoul";
import Sungsan from "./components/Section/jeju/Sungsan";
import Login from "./Login";
import Feed from "./components/Nav/Feed";
import Checkout from "./Checkout";
import ScrollToTop from "./ScrollTop";
import ReviewFeed from "./Review/ReviewFeed";
import SearchPage from "./components/Nav/SearchPage";

const Rout = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <div>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Section />} />
            <Route path="/ReviewFeed" element={<ReviewFeed />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Feed" element={<Feed />} />
            <Route path="/Airppp" element={<Airppp />} />
            <Route path="/Jeju" element={<Jeju />} />
            <Route path="/gangwon" element={<Gangwon />} />
            <Route path="/busan" element={<Busan />} />
            <Route path="/seoul" element={<Seoul />} />
            <Route path="/jeonrado" element={<Jeonrado />} />
            <Route path="/choongchung" element={<Choongchung />} />
            <Route path="/hongdo" element={<Hongdo />} />
            <Route path="/jejusi" element={<Jejusi />} />
            <Route path="/jungmoon" element={<Jungmoon />} />
            <Route path="/seoguipo" element={<Seoguipo />} />
            <Route path="/aewoul" element={<Aewoul />} />
            <Route path="/sungsan" element={<Sungsan />} />
            <Route path="/SearchPage" element={<SearchPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default Rout;
