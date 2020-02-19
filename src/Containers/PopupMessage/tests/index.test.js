import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import PopupMessage from '../index';

describe('<PopupMessage />', () => {
  let wrapper;
  let anchorOrigin;
  let duration;
  let message;
  let open;
  let setOpen;
  let type;

  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    anchorOrigin = { horizontal: 'left', vertical: 'bottom' };
    duration = 500;
    message = 'Test popup message.';
    open = false;
    setOpen = sandbox.spy();
    type = 'info';
    wrapper = shallow(
      <PopupMessage
        anchorOrigin={anchorOrigin}
        duration={duration}
        message={message}
        open={open}
        setOpen={setOpen}
        type={type}
      />,
    );
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('renders without crashing', () => {
    expect(wrapper).to.be.present();
  });
});
