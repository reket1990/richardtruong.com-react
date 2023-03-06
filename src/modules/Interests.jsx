import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Interests.css';
import Quote from './submodules/Quote';
// Images for interests
import algoPic from '../images/algorithm.webp';
import gamesPic from '../images/gamecube-controller.png';
import cardsPic from '../images/cards.webp';
import pingPongPic from '../images/ping-pong.png';

// TODO: Make admin tool to modify interests
const interests = [{
  name: 'Algorithms',
  description: 'I love solving problems and optimizing. It\'s beautiful that there are so many ways to approach a problem, and depending on the solution, the performance is highly variable. There is an amazing satisfaction when a good algorithm works!',
  image: algoPic,
  style: { backgroundColor: 'orange' },
},
{
  name: 'Games',
  description: 'Games encompass some of my favorite attributes for a pastime: fun, competitive, interactive, challenging, fair. Some of my favorite video games are Super Smash Bros. Melee, Starcraft: Brood War, League of Legends, Ocarina of Time and Mega Man X2.',
  image: gamesPic,
  style: { backgroundColor: 'yellowgreen' },
},
{
  name: 'Cardistry and Magic',
  description: 'Being blown away with unbelievable feats and wonder is one of the best feelings in the world. I love being able to share this feeling through the beauty of cardistry and magic. My current favorite deck of cards is the FW17 Virtuoso Deck.',
  image: cardsPic,
  style: { backgroundColor: '#666' },
},
{
  name: 'Ping Pong',
  description: 'Everyone needs a little bit of exercise in their life. I love the simplicity of ping pong, along with its approachable and easy to learn, hard to master attribute. Some of my other favorite sports to play are Tennis and Sabre Fencing.',
  image: pingPongPic,
  style: { backgroundColor: 'lightskyblue' },
}];

let interestNum = 0;

function Interests() {
  return (
    <div id="interests">
      <Grid className="scroll-module">
        <h2 className="text-center">Interests</h2>
        <Quote
          quote="Time you enjoy wasting is not wasted time."
          author="John Lennon"
        />
        <hr />
        {interests.map((interest) => {
          interestNum += 1;
          if (interestNum % 2) {
            return (
              <Row key={`interest-${interest.name}`} className="interest-row">
                <Col sm={4} md={3}>
                  <div className="interest-image-container">
                    <img className="interest-image" src={interest.image} alt={interest.name} />
                    <div className="interest-image-background" style={interest.style} />
                  </div>
                </Col>
                <Col sm={8} md={9}>
                  <h3>{ interest.name }</h3>
                  <p>{ interest.description }</p>
                </Col>
              </Row>
            );
          }
          // else
          return (
            <Row key={`interest-${interest.name}`} className="interest-row">
              <Col sm={4} md={3} className="visible-xs-block">
                <div className="interest-image-container">
                  <img className="interest-image" src={interest.image} alt={interest.name} />
                  <div className="interest-image-background" style={interest.style} />
                </div>
              </Col>
              <Col sm={8} md={9}>
                <h3>{ interest.name }</h3>
                <p>{ interest.description }</p>
              </Col>
              <Col sm={4} md={3} className="hidden-xs">
                <div className="interest-image-container">
                  <img className="interest-image" src={interest.image} alt={interest.name} />
                  <div className="interest-image-background" style={interest.style} />
                </div>
              </Col>
            </Row>
          );
        })}
      </Grid>
    </div>
  );
}

export default Interests;
