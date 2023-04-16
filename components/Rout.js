import Nav from "./Nav/Nav";
import Section from "./Section/Section";
import Airppp from "./Section/airSelectBox/Airppp";
import Jeju from "./Section/jeju/Jeju";
import Footer from "./Section/Footer";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Gangwon from "./Section/Gangwon/Gangwon";
import Busan from "./Section/Gangwon/Busan";
import Seoul from "./Section/Gangwon/Seoul";
import Jeonrado from "./Section/Gangwon/Jeonrado";
import Choongchung from "./Section/Gangwon/Choongchung";
import Hongdo from "./Section/Gangwon/Hongdo";
import Jejusi from "./Section/jeju/Jejusi";
import Jungmoon from "./Section/jeju/Jungmoon";
import Seoguipo from "./Section/jeju/Seoguipo";
import Aewoul from "./Section/jeju/Aewoul";
import Sungsan from "./Section/jeju/Sungsan";
import Login from "./Login";
import Feed from "./Nav/Feed";
import Checkout from "./Checkout/Checkout";
import ScrollToTop from "./ScrollTop";
import ReviewFeed from "../Review/ReviewFeed";
import SearchPage from "./Nav/SearchPage";

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
