import { playlist } from "./values";

function FunPopup() {
  return (
    <div>
      <div id="fun-header">
        <h1>My youtube playlist</h1>
      </div>
      <div id="fun-body">
        <ul>
          {playlist.map((video, index) => (
            <li key={index}>
              <a href={video.url} target="_blank" rel="noreferrer">
                {video.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div id="fun-footer">
        <a
          href="https://www.notion.so/React-Google-Chrome-Extension-for-beginners-or-not-Onboarding-92da8245f8234e1bb44abf7a6e90405c"
          target="_blank"
          rel="noreferrer"
        >
          React GCE Tutorial 2021
        </a>
      </div>
    </div>
  );
}

export default FunPopup;
