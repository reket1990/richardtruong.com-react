import React from 'react';
import { Grid } from 'react-bootstrap';
import './Experiences.css';
import Quote from './submodules/Quote';
import Experience from './submodules/Experience';

// TODO: Make admin tool to modify experiences
const educations = [{
  name: 'Harvey Mudd College',
  start_date: 'August 2008',
  end_date: 'May 2012',
  title: 'Bachelor of Science',
  description: 'Computer Science and Mathematics (Joint Major)',
  location: 'Claremont, CA',
  website: 'https://www.hmc.edu',
}];

const careers = [{
  name: 'Honey',
  start_date: 'October 2017',
  end_date: 'Present',
  title: 'Software Engineer III',
  description: '',
  location: 'Los Angeles, CA',
  website: 'https://www.joinhoney.com',
},
{
  name: 'Whalerock Industries',
  start_date: 'May 2016',
  end_date: 'Present',
  title: 'Senior Software Engineer',
  description:
    '• Created serverless backend microservices for video livestreaming, recording and viewer statistics for the Kardashian Apps (Python, AWS Lambda, API Gateway, Kinesis, SNS, DynamoDB)\n' +
    '• Developed product search services for the Zendaya App and integrated search with Shopify webhooks (Python, Elasticsearch, AWS Lambda, API Gateway)\n' +
    '• Built a wrapper for HLS VOD player, Ooyala player, and custom Firebase based livestream player for simpler video integration in both web and mobile for the Zendaya App (JavaScript, Swift, Firebase)',
  location: 'West Hollywood, CA',
  website: 'http://www.whalerockindustries.com',
},
{
  name: 'Demand Media (now Leaf Group)',
  start_date: 'September 2014',
  end_date: 'May 2016',
  title: 'Senior Fullstack Software Engineer',
  description:
    '• Constructed new features for and maintained ehow.com including converting to a responsive website, building new templates and SEO (PHP/Kohana, JavaScript, HTML, CSS/LESS, MongoDB, Bootstrap)\n' +
    '• Gathered and processed large sets of page view data for ehow.com (Python, Hadoop)\n' +
    '• Developed a faceted search for techwalla.com (Elasticsearch, Python, JavaScript/MithrilJS)',
  location: 'Santa Monica, CA',
  website: 'https://www.leafgroup.com',
},
{
  name: '2Advanced Studios / Bad Juju Games',
  start_date: 'June 2012',
  end_date: 'March 2014',
  title: 'Developer',
  description:
    '• Built websites including Bandai Namco Games, World Tekken Federation, Naruto Shippuden Games, Savini Forged, Great Company (PHP/Kohana/WordPress, MySQL)\n' +
    '• Implemented and maintained server backend and its functions for Tekken Tag Tournament 2, Ace Combat, Flip Riders and other games (Python, Redis, Cassandra)\n' +
    '• Created backend services for Designer Con 2012 App (PHP, MySQL)',
  location: 'Aliso Viejo, CA',
  website: 'http://www.badjuju.com',
}];

const Experiences = () => (
  <div id="experiences">
    <Grid className="scroll-module">
      <h2 className="text-center">Experiences</h2>
      <Quote
        quote="Try something new, only to prove that it's not the right choice, and you'll be amazed at the people you meet, the way your perspectives change and ultimately what your ambitions and dreams become." // eslint-disable-line max-len
        author="Casually Explained"
        media="10 Pieces of Life Advice"
        style={{ maxWidth: '600px' }}
      />
      <hr />
      <h3>Education</h3>
      {educations.map(education =>
        <Experience key={`education-${education.name}`} entry={education} />)}
      <hr />
      <h3>Careers</h3>
      {careers.map(career =>
        <Experience key={`career-${career.name}`} entry={career} />)}
    </Grid>
  </div>
);

export default Experiences;
