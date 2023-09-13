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
        React GCE Tutorial 2023
      </div>
    </div>
  );
}

export default FunPopup;
