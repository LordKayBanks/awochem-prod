import React from 'react';
import PropTypes from 'prop-types';

import WOW from 'wowjs';

export default class Background extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div id="my-background" className="background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="videos">
          <video src="/Videos/Video-1.mp4" autoPlay muted loop></video>
          <video src="/Videos/Video-2.mp4" autoPlay muted loop></video>
        </div>
        <div className="top-container flex">
          <h1>
            Welcome to
            <br />
            AWOCHEM LIMITED
          </h1>
          {/* offset can be cahnged in node modules wowjs default file */}
          <button
            className={'work-button ' + this.props.bounceIn}
            data-wow-offset="0"
            onClick={() => {
              let node = document.getElementById(
                this.props.aboutRef.current.props.id
              );

              window.scrollTo({
                top: node.offsetTop,
                behavior: 'smooth',
              });
            }}
          >
            Browse
          </button>
        </div>
      </div>
    );
  }
}

Background.propTypes = {
  aboutRef: PropTypes.object,
  bounceIn: PropTypes.string,
};
