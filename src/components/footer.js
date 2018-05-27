import React from 'react';
import Paper from 'material-ui/Paper';
import './footer.css'
import Node from '../images/nodejs.png';
import ReactIcon from '../images/react-icon.png';
import FontAwesome from 'react-fontawesome';

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
      <a className='icons' href="https://github.com/PeterBen90" target="blank" name="github">
        <FontAwesome
          name="github"
          size='2x'
        />
      </a>

      <a className='icons' href="https://www.linkedin.com/in/peter-benvenuto" target="blank" name="linkedin">
        <FontAwesome
          name="linkedin"
          size='2x'
        />
      </a>
      <a className='icons' href="mailto:peterbenvenuto90@gmail.com" target="blank" name="email-info">
        <FontAwesome
         name="envelope"
         size='2x'
        />
      </a>
    </Paper>
  </div>
);

export default Footer;