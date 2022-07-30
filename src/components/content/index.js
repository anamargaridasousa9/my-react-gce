/* The following comment is needed when using the chrome api, for the build to succeed */
/*global chrome*/

import { useState } from "react";
import classNames from "classnames";
import { useEffect } from "react";

const AddToPlayList = ({ url, musicLogo }) => {
  const [videoName, setVideoName] = useState("");
  const videoNameTrim = videoName.trim(); //Removes whitespace from the beginning and end of the videoName string
  const [saved, setSaved] = useState(false);

  const handleNameChange = (event) => {
    setVideoName(event.target.value);
  };

  const addSongToPlayList = () => {
    if (videoNameTrim) {
      chrome.storage.local.get({ funVideos: [] }, function (result) {
        var funVideos = result.funVideos;
        funVideos.push({ name: videoNameTrim, url: url });

        chrome.storage.local.set({ funVideos: funVideos });
      });
      setVideoName("");
      setSaved(true);
    }
  };

  useEffect(() => {
    setSaved(false);
  }, [url]);

  return (
    <>
      <div className="fun-gce__card">
        <div className="fun-gce__container fun-gce-d-flex fun-gce-align-center">
          <div className="fun-gce-d-flex fun-gce-align-center fun-gce__video">
            <div className="fun-gce-me-auto">
              <img className="fun-gce__logo" src={musicLogo} alt="Music Logo" />
            </div>
            <input
              type="text"
              name="videoName"
              placeholder={saved ? "Saved!" : "Insert video name here..."}
              className="fun-gce__input"
              value={videoName}
              onChange={handleNameChange}
              disabled={saved}
            />
          </div>
          {!saved && (
            <button
              className={classNames([
                "fun-gce__button",
                !videoNameTrim && "fun-gce__button--disabled",
              ])}
              onClick={() => addSongToPlayList()}
              disabled={saved}
            >
              +
            </button>
          )}
        </div>
      </div>
      <br />
    </>
  );
};

export default AddToPlayList;
