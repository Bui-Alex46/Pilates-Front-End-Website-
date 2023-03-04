import image from './images/pilates.jpg';
import image1 from './images/stretch.jpg';
import image2 from './images/stretch.jpg';
import image3 from './images/headshot2.JPG';
import "./home.css";

export default function Home() {
  return (
    <div className="image-container">
      <img src={image} alt="AK Pilates Studio"></img>
      <div className="image-text">
        <h1 className="welcome">Welcome to AK Pilates Studio</h1>
        <p className="path">Your path to wellness starts here</p>
        <div className="rectangles-container">

          <div className="rectangle11" style ={{ backgroundImage: `url(${image1})` }} >
            <h2 className="rectangle-text">Strength & Conditioning</h2>
            <ul className = "list">
              <li> Core Workouts</li>
              <li> Reformers </li>
              <li> Pilate Stretches </li>
            </ul>
          </div>

          <div className="rectangle22" style={{ backgroundImage: `url(${image2})` }}>
            <h2 className="rectangle-text">Flexibility Training</h2>
            <ul className="list">
              <li> Resistance Band </li>
              <li> Block Exercises </li>
            </ul>
          </div>

          <div className="rectangle33" style={{ backgroundImage: `url(${image3})` }}>
            <h2 className="rectangle-text">Dance Incorporated Workouts</h2>
            <ul className="list">
              <li> Barre Exercises </li>
              <li> Fundamental Dance Techniques </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
