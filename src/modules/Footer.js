import React from 'react';
import { Button } from 'react-bootstrap';
import './Footer.css';

const Footer = () => (
  <div id="footer" className="text-center">
    <p>This project is built with React and Bootstrap</p>
    <Button href="https://github.com/reket1990/richardtruong.com-react/" target="_blank" rel="noopener noreferrer">
      <span className="fa fa-github-square" />See project on github
    </Button>
  </div>
);

export default Footer;
