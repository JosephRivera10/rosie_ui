import { expect } from 'chai';
import { shallow } from 'enzyme';
import inject from 'inject-loader!../index'; // eslint-disable-line
import React from 'react';
import sinon from 'sinon';

describe('<MessageContent />', () => {
  let wrapper;
  let className;
  let message;
  let onClose;
  let type;

  const sandbox = sinon.createSandbox();
  const MessageContent = inject({
    './useStyles': () => ({}),
  }).default;

  beforeEach(() => {
    className = 'testClass';
    message = 'Test popup message.';
    type = 'info';
    onClose = sandbox.spy();
    wrapper = shallow(
      <MessageContent
        className={className}
        message={message}
        type={type}
        onClose={onClose}
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
