import { Component } from "react";
import "../../App.css";
import EllaID from '../../images/EllaID.jpg';
import cooking from '../../images/cooking.png';
import hiking from '../../images/IMG_9518.JPG';
import skiing from '../../images/IMG_0031.JPG';
import horses from '../../images/IMG_3842.jpg';
import ImageGallery from "../ImageGallery/ImageGallery";

class About extends Component {
    render() {
        return (
            <div>
          <img src={EllaID} alt=""/>
          <h1>About Me</h1>
          <p>Hi! I’m Ella, a '24 from Brooklyn, NY. I’m planning to major in Computer Science with a second major or minor in Linguistics.</p>
          <button type="button" onClick={() => alert("hi!")}> Say hi! </button>
          
          <div>
              <p>In my free time I like to:</p>
                <div className="image">
                  <p>cook</p>
                  <img src={cooking} alt=""/>
                </div>
                <div className="image">           
                  <p>hike</p>
                  <img src={hiking} alt=""/>
                </div>
                <div className="image">
                  <p>ski</p>
                  <img src={skiing} alt=""/>
                </div>
                <div className="image">
                  <p>ride horses/play polocrosse</p>
                  <img src={horses} alt=""/>
                </div>
            </div>
          <p>I took a gap year last year and worked at an outdoor education center in Colorado and then lived in Mexico City for a few months.</p>
          
          <ImageGallery />
            </div>
        );
    }
}
export default About;