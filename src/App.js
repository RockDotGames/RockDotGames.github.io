import './App.css';

import announcements from './announcements.json'

function App() {
  return (
    <div className="App">
    <div class="header">
    <img style={{display: "inline"}} src="RockDotLogo NoText.png" alt="logo" width="300" hight="300" />
    <h3 style={{display: "inline", position: "absolute"}}>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎RockDotGames</h3>
    </div>
    <h2>Welcome to RockDotGames</h2>
    <p>RockDotGames is a small development group for small projects made in Unity.</p>
    <br />
    <h2>Games</h2>
    <iframe title="driving goose" class="iframeitch" frameborder="0" src="https://itch.io/embed/802854" width="552" height="167"><a href="https://rockdotgames.itch.io/driving-goose">Driving Goose by RockDotGames</a></iframe>
    <h2>Discord</h2>
    <iframe title="discord" src="https://discordapp.com/widget?id=770682036742127636&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    <h2>Patreon</h2>
    <a href="https://www.patreon.com/RockDotGames?fan_landing=true">Click Here</a>
    <br />
    <br />
    <br />
    <h2>The Team</h2>
    <p>OCS - Main Developer</p>
    <p>codeflight - Web Dev</p>
    <p>Stealth9_ - Developer</p>
    <p>Retrofins - Developer</p>
    <br />
    <h2>Discord Team</h2>
    <p>OCS - Admin</p>
    <p>codeflight - Admin</p>
    <p>Stealth9_ - Admin</p>
    <p>Retrofins - Admin</p>
    <p>Spacey - Admin</p>
    <p>ObliviousWaffle - Events</p>
    <p>werr3222werrr - Moderator</p>
    <p>JuMpeR6790 - Moderator</p>
    <p>LivingSkeleton11 - Moderator</p>
    <br />
    <br />
    <h2>Announcements</h2>
    {announcements.map(({date, name, text, date2, name2, text2}) => {
      return (
        <div>
          <h3>{date} - {name}</h3>
          <p>{text}</p>
          <br />
          <h3>{date2} - {name2}</h3>
          <p>{text2}</p>
          <br />
          <br />
          <br />
        </div>
      )
    })}
    <footer>
    <p>Email: <br />
    <a href="rockdotgames@gmail.com">rockdotgames@gmail.com</a></p>
    </footer>
    </div>
  );
}

export default App;
