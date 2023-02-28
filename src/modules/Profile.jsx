import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Profile.css';
import Quote from './submodules/Quote';
import profilePic from '../images/richard_truong.webp';

// Calculate age
const ageMS = Date.now() - new Date('08/23/1990').getTime();
const age = new Date(ageMS).getUTCFullYear() - 1970;

function Profile() {
  return (
    <div id="profile">
      <Grid className="scroll-module">
        <h2 className="text-center">Profile</h2>
        <Quote
          quote="The person that you will spend the most time with in life is yourself, so it's best to make yourself as interesting as possible."
        />
        <hr />
        <Row>
          <Col md={4}>
            <h3>About me</h3>
            <p>
              Early career software engineer getting things done one line of code at a time.
              Passionate about algorithms and building scalable applications.
              Able to multitask and complete tasks quickly with strong attention to detail.
            </p>
            <p>
              Broad technical skill set but always enthusiastic about learning.
              Currently most experienced in Python and JavaScript.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <img src={profilePic} alt="Richard Truong" />
          </Col>
          <Col md={4}>
            <h3>Details</h3>
            <p>
              <strong>Name:</strong>
              <br />
              Richard Truong
            </p>
            <p>
              <strong>Age:</strong>
              <br />
              {age}
              {' '}
              years
            </p>
            <p>
              <strong>Location:</strong>
              <br />
              Los Angeles, California, United States
            </p>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default Profile;
