import React from 'react';
import Paper from 'material-ui/Paper';
import './footer.css'
import GitHub from '../images/github-icon.png';
import LinkedIn from '../images/linkedin-icon.png';
import Email from '../images/email-icon.png';
import Node from '../images/nodejs.png';
import ReactIcon from '../images/react-icon.png';

const style = {
  height: 150,
  width: '100%',
  textAlign: 'center',
  display: 'inline-block',
  background: 'grey',
  overflow: 'hidden',
  marginBottom: '-10px',
};

const Footer = () => (
  <div>
    <Paper style={style} zDepth={1} rounded={false}>
      <div>
        <p className="footer-content"><span>Built by Peter Benvenuto with</span>
        <img className="react-icon" src={ReactIcon} alt="react icon" />
        <img className="node-icon" src={Node} alt="node icon" /></p>
      </div>
      <a href="https://github.com/PeterBen90" target="blank"><img className="github-icon" src={GitHub} alt="github icon" /></a>
      <a href="https://www.linkedin.com/in/peter-benvenuto" target="blank"><img className="linkedin-icon" src={LinkedIn} alt="linkedin icon" /></a>
      <a href="mailto:peterbenvenuto90@gmail.com" target="_top"><img className="email-icon" src={Email} alt="email icon" /></a>
    </Paper>
  </div>
);

export default Footer;