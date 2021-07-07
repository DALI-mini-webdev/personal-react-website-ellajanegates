import React from 'react';
import "./ImageGallery.css";
import ridge from '../../images/IMG_9653.jpg';
import packTrip from '../../images/IMG_9099.JPG';
import lake from '../../images/IMG_9783.JPG';
import ropes from '../../images/IMG_9687.JPG';
import street from '../../images/IMG_0944.JPG';
import tamara from '../../images/05ff788d-c54c-4c95-92c5-082976dc1fa9.jpg';
import ocho from '../../../src/images/d5c7d0c7-ce78-404a-a9ff-91abd45d963d.JPG';


class ImageGallery extends React.Component {
  constructor(props){
    super(props);
    this.state={
      slideIndex: 1,
    }
  }

    render() {
      
        return(
          <div>
            <div className="slideshow-container">
              <div>
                <div className="mySlides">
                  <div className="numbertext">1 / 7</div>
                  <a target="_blank" rel="noreferrer" href={street}>
                        <img src={street} alt="Street" width="1000" height="400"/>
                      </a>
                      <div className="desc">A street near my house in Mexico</div>
                </div>

                <div className="mySlides">
                  <div className="numbertext">2 / 7</div>
                  <a target="_blank" rel="noreferrer" href={ocho}>
                    <img src={ocho} alt="Sign" width="600" height="400"/>
                </a>
                <div className="desc">Women's March</div>
                </div>

                <div className="mySlides">
                  <div className="numbertext">3 / 7</div>
                  <a target="_blank" rel="noreferrer" href={tamara}>
                    <img src={tamara} alt="tamara" width="600" height="400"/>
                  </a>
                <div className="desc">My host sister and I on a hike</div>
              
                <div className="mySlides">
                    <div className="numbertext">4 / 7</div>
                    <a target="_blank" rel="noreferrer" href={ridge}>
                      <img src={ridge} alt="Ridge Walk" width="1000" height="400"/>
                    </a>
                    <div className="desc">Hiking with coworkers in Colorado</div>
                </div>

                <div className="mySlides">
                    <div className="numbertext">5 / 7</div>
                    <a target="_blank" rel="noreferrer" href={packTrip}>
                      <img src={packTrip} alt="Horse" width="600" height="400"/>
                    </a>
                    <div className="desc">Leading a pack trip through the mountains</div>
                </div>

                <div className="mySlides">
                    <div className="numbertext">6 / 7</div>
                    <a target="_blank" rel="noreferrer" href={lake}>
                      <img src={lake} alt="Ice Canoeing" width="600" height="400"/>
                    </a>
                    <div className="desc">Breaking up a frozen lake</div>
                </div>

                <div className="mySlides">
                    <div className="numbertext">7 / 7</div>
                    <a target="_blank" rel="noreferrer" href={ropes}>
                      <img src={ropes} alt="Ropes Course" width="600" height="400"/>
                    </a>
                    <div className="desc">Hanging out in the ropes course</div>
                </div>
              </div>

              <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
              <a className="next" onClick="plusSlides(1)">&#10095;</a>
            </div>

            
          </div>
          </div>

        );
    }
}
export default ImageGallery;