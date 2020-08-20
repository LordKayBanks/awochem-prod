import React from 'react';
import bag from '../img/layers.png';
import cogwheel from '../img/cogwheel.png';
import pen from '../img/pen.png';
import browser from '../img/browser.png';
import factory from '../img/factory.jpeg';
import PropTypes from 'prop-types';

export default class About extends React.Component {
  render() {
    return (
      <div
        id="about-container"
        className="content-containers container text-center mt-5"
      >
        <h1 id="about" className={this.props.bounceLeft}>
          About
        </h1>
        <div className="row mt-5">
          <div className={'col-6 col-sm-6 col-md-3 ' + this.props.fadeInLeft}>
            <img src={pen} alt="" />
            <h4>Design</h4>
          </div>
          <div className={'col-6 col-sm-6 col-md-3 ' + this.props.fadeInLeft}>
            <img src={bag} alt="" />
            <h4>Print</h4>
          </div>
          <div className={'col-6 col-sm-6 col-md-3 ' + this.props.fadeInRight}>
            <img src={browser} alt="" />
            <h4>Durable</h4>
          </div>
          <div className={'col-6 col-sm-6 col-md-3 ' + this.props.fadeInRight}>
            <img src={cogwheel} alt="" />
            <h4>Reliable</h4>
          </div>
        </div>

        <div className="row" style={{ marginTop: 7 + 'rem' }}>
          <div className="col-12 col-lg-6 hidden">
            <img
              className={'img-fluid ' + this.props.fadeIn}
              src={factory}
              alt=""
              style={{
                borderRadius: 0.35 + 'rem',
                // borderRadius: 50 + '%',
                height: 350 + 'px',
                width: 350 + 'px',
                boxShadow: '3px 0px 20px 0px #0000002b',
              }}
            />
            {/* <div className={'about-item mytext pt-3 ' + this.props.fadeIn}> */}
            <div className={'about-item mytext ' + this.props.fadeIn}>
              We specialize in the manufacturing of high quality industrial and
              personal use plastic bags. <br />
              We produce a wide range of varieties and sizes from the very thin
              personal shopping bags (.5 mils) to customized industrial plastic
              bags. <br />
              We also print custom messages/templates on the plastic bags we
              produce. Likewise we take printing orders from interested
              customers.
            </div>
          </div>
          <div
            className={'col-12 col-sm-12 col-md-12 col-lg-6 ' + this.props.tada}
          >
            <div className="services">
              <h2>Extrusion:</h2>
              <div className="services__body">
                As per customer requests and price negotiation, we utilize both
                virgin and recycled Poly Vinyl Chloride materials to manufacture
                industrial and personal plastic bags of various dimensions and
                thickness.
              </div>
            </div>

            <div className="services">
              <h2>Printing:</h2>
              <div className="services__body">
                We can print company names, messages, texts and templates and
                other customer requests on the plastic bags we produce. We
                likewise take printing orders to print on plastic bags
                manufactured elsewhere.
              </div>
            </div>

            <div className="services">
              <h2>Cutting:</h2>
              <div className="services__body">
                We cut to standard and customized sizes to customers'
                satisfaction.
              </div>
            </div>

            <div className="services">
              <h2>Other services:</h2>
              <div className="services__body">
                <h6>
                  Packaging and delivery: <br />
                </h6>
                We offer flexible packing and delivery within Lagos Mainland.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  bounceLeft: PropTypes.string,
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
  fadeIn: PropTypes.string,
  tada: PropTypes.string,
};
