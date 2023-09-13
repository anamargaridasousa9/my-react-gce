import "../styles.css";

const Header = () => {
  const rrLogoSrc = process.env.PUBLIC_URL + "/icons/rr-logo-white.svg";
  const githubLogoSrc = process.env.PUBLIC_URL + "/icons/github-logo-white.svg";

  return (
    <div className="popup__header d-flex">
      <div className="me-auto">My YouTube Playlist</div>

      <div>
        <a
          href="https://medium.com/runtime-revolution/react-google-chrome-extension-for-beginners-or-not-part-i-a5cd6d9f2e40"
          target="_blank"
          rel="noreferrer"
        >
          <img className="popup__header__icon" src={rrLogoSrc} alt="Blog" />
        </a>
        <a
          href="https://github.com/anamargaridasousa9/my-extension/tree/hooks"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="popup__header__icon"
            src={githubLogoSrc}
            alt="Github"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
