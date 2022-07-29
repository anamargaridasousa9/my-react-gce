import "../styles.css";

const Header = () => {
  const rrLogoSrc = process.env.PUBLIC_URL + "/icons/rr-logo-white.svg";
  const githubLogoSrc = process.env.PUBLIC_URL + "/icons/github-logo-white.svg";

  return (
    <div className="popup__header d-flex">
      <div className="me-auto">My Youtube Playlist</div>

      <div>
        <a
          href="https://romantic-fibula-b7b.notion.site/React-Google-Chrome-Extension-for-beginners-or-not-Final-df8567b3dc774744aff44385a18c289a"
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
