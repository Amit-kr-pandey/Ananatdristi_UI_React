import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Account.css';

const About = () => {

  // const componentDidMount = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.watchPosition(function (position) {
  //       console.log("Latitude is :", position.coords.latitude);
  //       console.log("Longitude is :", position.coords.longitude);
  //     });
  //   }
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     console.log("Current Location " + position);
  //   });
  // }

  return (
    <div className='container'>
      <div className='row'>
        <div className="bg" style={{ justifyContent: "space-around", display: "flex", height: "50em", backgroundImage: "url(" + 'https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg' + ")" }}>
          <div>
            <h1 style={{ color: "#f8d2d2", margin: "8em 2px 2px 2px" }}>About Us</h1>
          </div>
        </div>
      </div>
      <div className='row'>
        <h1>About Us</h1>
        <span>
          Baba Baidyanath Mandir is Administered by a 5 (Five) Member Committee known as “Sanchalan evam Prabahndah Upsamati”. This committee is formed under the provisions of Baba Baidyanath Dham-Basukinath Shrine Area Development Authority Act, 2015 (Act No. 6 of 2016).
          Temple Management Committee (Baba Baidyanath Mandir) Administrator :
          Temple Incharge:
        </span>
      </div>
    </div>
    //<img class="d-block w-100" src="https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg" />
  );
}

export default About;