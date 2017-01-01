/* eslint-env node, mocha */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import SpeedSlider from '../speed-slider.jsx';

describe('<SpeedSlider>', function() {
  describe('#render', function() {
    it('renders', function() {
      const wrapper = shallow(<SpeedSlider />);
      expect(wrapper.find(SpeedSlider)).to.be.ok;
    });
  });
});
