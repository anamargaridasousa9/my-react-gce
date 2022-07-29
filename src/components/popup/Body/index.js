import "../styles.css";

const Body = ({ playlist }) => {
  const funLogoSrc = process.env.PUBLIC_URL + "/icons/music-logo.png";

  return (
    <div className="popup__body">
      <div>
        {playlist.map((song, index) => (
          <a
            key={index}
            href={song.url}
            className="popup__body__list text-start btn btn-light mb-1"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="popup__body__logo"
              src={funLogoSrc}
              alt="Fun Logo"
            />
            {song.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Body;
