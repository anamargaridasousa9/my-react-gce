import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { playlist } from "./values";
import "./styles.css";

const FunPopup = () => {
  return (
    <div className="popup__font">
      <Header />
      <Body playlist={playlist} />
      <Footer />
    </div>
  );
};

export default FunPopup;
