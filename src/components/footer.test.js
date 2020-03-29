import React from 'react';
import Footer from './footer';
import { shallow } from 'enzyme';


describe('<Footer />', () => {
    it('Renders without crashing', () => {
        shallow(<Footer/>);
    });
});