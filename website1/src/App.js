import React from 'react';
import './App.css';
import EllaID from './images/EllaID.jpg';
import cooking from './images/cooking.png';
import hiking from './images/IMG_9518.JPG';
import skiing from './images/IMG_0031.JPG';
import horses from './images/IMG_3842.jpg';
import ridge from './images/IMG_9653.jpg';
import packTrip from './images/IMG_9099.JPG';
import lake from './images/IMG_9783.JPG';
import ropes from './images/IMG_9687.JPG'

function App() {
  return (
    <div className="App">
      <head>
        <title>Ella Gates</title>
        <link rel="stylesheet" href="style.css"/>
    </head>
    <body>
        <img src={EllaID} alt=""/>
        <h1 className="blue-text">About Me</h1>
        <p>Hi! I’m Ella, a '24 from Brooklyn, NY. I’m planning to major in Computer Science with a second major or minor in Linguistics.</p>
        <div>
            <p>In my free time I like to:</p>
            <ul>
              <li>cook</li>
              <img src={cooking} alt=""/>
              <li>hike</li>
              <img src={hiking} alt=""/>
              <li>ski</li>
              <img src={skiing} alt=""/>
              <li>ride horses/play polocrosse</li>
              <img src={horses} alt=""/>
            </ul>
          </div>
        <p>I took a gap year last year and worked at an outdoor education center in Colorado and then lived in Mexico City for a few months.</p>
        
        <div className="gallery">
            <a target="_blank" rel="noreferrer" href={ridge}>
              <img src={ridge} alt="Ridge Walk" width="1000" height="400"/>
            </a>
            <div className="desc">Hiking with coworkers in Colorado</div>
          </div>
          
          <div className="gallery">
            <a target="_blank" rel="noreferrer" href={packTrip}>
              <img src={packTrip} alt="Horse" width="600" height="400"/>
            </a>
            <div className="desc">Leading a pack trip through the mountains</div>
          </div>
          
          <div className="gallery">
            <a target="_blank" rel="noreferrer" href={lake}>
              <img src={lake} alt="Ice Canoeing" width="600" height="400"/>
            </a>
            <div className="desc">Breaking up a frozen lake</div>
          </div>
          
          <div className="gallery">
            <a target="_blank" rel="noreferrer" href={ropes}>
              <img src={ropes} alt="Ropes Course" width="600" height="400"/>
            </a>
            <div className="desc">Hanging out in the ropes course</div>
          </div>

          </body>
    </div>
  );
}

export default App;
