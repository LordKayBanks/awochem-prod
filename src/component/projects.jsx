import React from 'react';
import Vmarine from '../img/Vmarine.jpg';
import aguaDeLuz from '../img/aguaDeLuz.png';
import todo from '../img/todolist.png';
import PropTypes from 'prop-types';

export default class Projects extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="my-projects" className="container-fluid bg-light mt-5">
          <div className=" project-container container bg-light pb-5">
            <h1
              id="projects"
              className={'text-center ' + this.props.fadeInRight}
            >
              Contacts
            </h1>
            <div className="row my-5">
              <div className={'col-12 col-sm-12 col-md-6 contact-item'}>
                <h3>Office</h3>
                <div>
                  <span>Address: </span>
                  <div>Plot 4A Olufunsho Ayodle Street, Abule-Egba, lagos.</div>
                </div>
                <div>
                  <span>Tel: </span>
                  <div>08054528088, 08023220766</div>
                </div>
                <div>
                  <span>Email: </span>
                  <div>zac_y56@yahoo.com</div>
                </div>
              </div>
              <div className={'col-12 col-sm-12 col-md-6 contact-item'}>
                <h3>Factory</h3>
                <div>
                  <span>Address: </span>
                  <div>27/29 Ahmed Tijani Street, Ahmadiya Lagos.</div>
                </div>
                <div>
                  <span>Tel: </span>
                  <div>NA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Projects.propTypes = {
  bounceIn: PropTypes.string,
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
  fadeIn: PropTypes.string,
  tada: PropTypes.string,
};
