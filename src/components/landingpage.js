import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profile from './my_profile.jpg';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={profile}
              alt="avatar"
              className="avatar-img"
             style={{ height: '250px',width:'200px'}}
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | JavaScript | React | Python|Flask | NodeJS |MySQL | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/mbaabu-h-mwenda-8a89ab174/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/HarunHM" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* twitter */}
          <a href="https://twitter.com/GrayHat36124333" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>

          {/* whatsapp */}
          <a href="#" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-whatsapp" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
