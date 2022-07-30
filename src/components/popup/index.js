/* The following comment is needed when using the chrome api */
/*global chrome*/

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { playlist } from "./values";
import "./styles.css";
import { useEffect, useState } from "react";

const FunPopup = () => {
  const [ytPlaylist, setYtPlaylist] = useState([]);

  useEffect(() => {
    if (chrome.storage) {
      chrome.storage.local.get({ funVideos: [] }, function (result) {
        setYtPlaylist(result.funVideos);
      });
    } else {
      /* when testing the UI in yarn start */
      setYtPlaylist(playlist);
    }
  }, []);

  return (
    <div className="popup__font">
      <Header />
      <Body playlist={ytPlaylist} />
      <Footer />
    </div>
  );
};

export default FunPopup;
