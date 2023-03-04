import './about.css';
import backgroundImage from './images/headshot1.jpg';

export default function About() {
  return (
  <>
  <div className="image-container" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    <div className = "rectangle"> 
      <h1 className = "text"><span className = "about-anika">About</span> <p className = "ak">Anika Kojima</p></h1>
      </div>
      <div className = "rectangle2"> 
      <h1 className = "text2">Pilates Instructor</h1>
      </div>
      <div className = "rectangle3"> 
      <h1 className = "text3">Professional Dancer</h1>
      </div>
      
  </>
   
  );
}
