import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Profile.css';
import profilePic from '../images/richard_truong.jpg';

// Calculate age
var ageMS = Date.now() - new Date('08/23/1990').getTime();
var age = new Date(ageMS).getUTCFullYear() - 1970;

class Profile extends Component {
  render() {
    return (
      <div id="profile">
        <Grid className="scroll-module">
          <Row className="text-center">
            <h2 className="text-center">Profile</h2>
          </Row>
          <Row>
            <Col md={4}>
              <h3>About me</h3>
              <p>Early career software engineer getting things done one line of code at a time. Passionate about algorithms and building scalable applications. Able to multitask and complete tasks quickly with strong attention to detail.</p>
              <p>Broad technical skill set but always enthusiastic about learning. Currently most experienced in Python, PHP and JavaScript.</p>
            </Col>
            <Col md={4} className="text-center">
              <img src={profilePic} alt="Richard Truong" />
            </Col>
            <Col md={4}>
              <h3>Details</h3>
              <p><strong>Name:</strong><br />Richard Truong</p>
              <p><strong>Age:</strong><br />{age} years</p>
              <p><strong>Location:</strong><br />California, United States</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Profile;

