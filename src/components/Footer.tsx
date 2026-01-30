import reactIcon from '../assets/react.svg';
import linkedin from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import gitco from '../assets/githubcopilot.svg';

export function Footer() {
  return (
    <footer
      style={{
        padding: '10px',
        backgroundColor: '#282c34',
        color: 'white',
        textAlign: 'center',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
      }}
    >
      <div className="row d-flex justify-content-left">
        <p>
          with <img src={reactIcon} alt="React" style={{ verticalAlign: 'middle', margin: '0 5px' }} />,
          <img src={gitco} alt="GitHub Copilot" style={{ verticalAlign: 'middle', margin: '0 5px', height:'37px', filter: 'invert(100%)' }} /> 
          by Hossein Farahkordmahaleh
        </p>
      </div>
      <div className="social-media" style={{ marginTop: '10px' }}>
        <a
          href="https://www.linkedin.com/in/hosseinfarah/"
          target="_blank"
          rel="noreferrer"
          style={{ margin: '0 10px' }}
        >
          <img src={linkedin} alt="Linkedin" style={{ width: '24px', height: '24px' }} />
        </a>
        <a
          href="https://github.com/hosseinfarah/"
          target="_blank"
          rel="noreferrer"
          style={{ margin: '0 10px' }}
        >
          <img src={githubIcon} alt="GitHub" style={{ width: '24px', height: '24px' }} />
        </a>
      </div>
    </footer>
  );
}
