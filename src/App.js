import React from 'react';
import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';


console.log(AlexaImage)
console.log(SiriImage)

function App() {
  
  return (
    <div className="container">
    <section className="section">
      <div className="columns">
        <div className="column is-3">
          <ProfileCard title="Alexa" handle="Alexa99" image={AlexaImage} />
        </div>
        <div className="column is-3">
          <ProfileCard title="Cortana" handle="Cortana@32" image={CortanaImage} />
        </div>
        <div className="column is-3">
          <ProfileCard title="Siri" handle="@Siri01" image={SiriImage} />
        </div>
      </div>
    </section>
  </div>
  );
}

export default App;