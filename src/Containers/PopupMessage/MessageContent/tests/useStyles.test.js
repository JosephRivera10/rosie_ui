import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import useStyles from '../useStyles';


const MockComponent = () => {
  const classes = useStyles();
  // Pull the first class out of makeStyles.js, whatever it is.
  return <div className={Object.values(classes)[0]} />;
};

describe('useStyles.js', () => {
  it('should create at least one class', () => {
    const wrapper = shallow(<MockComponent />);
    const div = wrapper.find('div');
    expect(div.props().className).to.be.ok;
  });
});
