/* The following comment is needed when using the chrome api*/
/*global chrome*/

import ReactDOM from "react-dom";
import AddToPlayList from "../components/content";

const ELEMENT_TYPE = "div";
const ELEMENT_ID = "fun-gce";
const PLAYER_ADS_ID = "player-ads";

let hasElement = false;
const musicLogoDir = "/icons/music-logo.png";

const messagesFromBackground = (message, sender, sendResponse) => {
  if (message && message.sender === "background") {
    switch (message.type) {
      case "youtube_page":
        handleYoutubePage(message);
        break;
      default:
        break;
    }
    sendResponse("content.js got your message");
  }
};

const listenToBackground = () => {
  chrome.runtime.onMessage.addListener(messagesFromBackground);
};

listenToBackground();

export const handleYoutubePage = (message) => {
  const url = message.url;

  if (hasElement) {
    removeElementFromPage();
  }

  addElementToPage(url);
};

const removeElementFromPage = () => {
  let funElement = document.getElementById(ELEMENT_ID);
  if (funElement) funElement.remove();
};

const addElementToPage = (url) => {
  let youtubeElem = document.getElementById(PLAYER_ADS_ID);
  if (youtubeElem) {
    injectElement(youtubeElem, url);
  } else {
    // did not found player ads element
    addListenerToYoutubePage(url);
  }
};

const injectElement = (youtubeElem, url) => {
  const app = document.createElement(ELEMENT_TYPE);
  app.id = ELEMENT_ID;

  let parentElem = youtubeElem.parentElement;
  if (parentElem) parentElem.prepend(app);

  const musicLogoSrc = chrome.runtime.getURL(musicLogoDir);

  ReactDOM.render(<AddToPlayList musicLogo={musicLogoSrc} url={url} />, app);

  hasElement = true;
};

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

const addListenerToYoutubePage = (url) => {
  // We will observe for mutations in the body of the page
  const divContainer = document.getElementsByTagName("body")[0];

  // Callback function to execute when mutations are observed
  const callback = function (mutationsList, observer) {
    const playerAdsElement = document.getElementById(PLAYER_ADS_ID);
    if (playerAdsElement) {
      // Found player-ads div element
      injectElement(playerAdsElement, url);
      // You can stop observing
      observer.disconnect();
    }
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(divContainer, config);
};
