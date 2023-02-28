import React from 'react';
import { Grid } from 'react-bootstrap';
import './Skills.css';
import Quote from './submodules/Quote';
import SkillPair from './submodules/SkillPair';

const programmingLanguages = [{
  name: 'JavaScript/ReactJS',
  value: 5,
}, {
  name: 'HTML/CSS',
  value: 5,
}, {
  name: 'Python',
  value: 4,
}];

const tools = [{
  name: 'Git',
  value: 5,
}, {
  name: 'VSCode',
  value: 5,
}, {
  name: 'Google Cloud Services',
  value: 4,
}, {
  name: 'Amazon Web Services',
  value: 4,
}, {
  name: 'Spanner / GraphQL',
  value: 3,
}, {
  name: 'MySQL',
  value: 5,
}, {
  name: 'BigQuery',
  value: 4,
}, {
  name: 'MongoDB',
  value: 4,
}, {
  name: 'ElasticSearch',
  value: 4,
}, {
  name: 'Photoshop',
  value: 3,
}];

const languages = [{
  name: 'English',
  value: 'Native',
},
{
  name: 'Chinese - Teo Chew',
  value: 'Fluent Speaker',
},
{
  name: 'Vietnamese',
  value: 'Fluent Speaker',
},
{
  name: 'Chinese - Mandarin',
  value: 'Basic (A2)',
}];

// Group skills in pairs
const groupPairs = (input) => {
  const output = [];
  Object.keys(input).forEach((index) => {
    if (index % 2 === 1) {
      // Add pair
      output.push([input[index - 1], input[index]]);
    } else if (index == input.length - 1) { // eslint-disable-line eqeqeq
      // Add last single element
      output.push([input[index], { name: '', value: '' }]);
    }
  });
  return output;
};

const programmingLanguagePairs = groupPairs(programmingLanguages);
const toolPairs = groupPairs(tools);
const languagePairs = groupPairs(languages);

function Skills() {
  return (
    <div id="skills">
      <Grid className="scroll-module">
        <h2 className="text-center">Skills</h2>
        <Quote
          quote="The problem with the world is that the intelligent people are full of doubts, while the stupid ones are full of confidence." // eslint-disable-line max-len
          author="Charles Bukowski"
        />
        <hr />
        <h3>Programming Languages</h3>
        {programmingLanguagePairs.map(([pl1, pl2]) => <SkillPair key={`pl-${pl1.name}-${pl2.name}`} entry1={pl1} entry2={pl2} />)}
        <hr />
        <h3>Tools</h3>
        {toolPairs.map(([tool1, tool2]) => <SkillPair key={`tool-${tool1.name}-${tool2.name}`} entry1={tool1} entry2={tool2} />)}
        <hr />
        <h3>Languages</h3>
        {languagePairs.map(([language1, language2]) => <SkillPair key={`language-${language1.name}-${language2.name}`} entry1={language1} entry2={language2} />)}
      </Grid>
    </div>
  );
}

export default Skills;
