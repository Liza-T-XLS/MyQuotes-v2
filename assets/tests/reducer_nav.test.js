import { describe, it } from 'mocha';
import { expect } from 'chai';
import navReducer from '../reducers/nav';
import { SET_OPEN } from '../actions/nav';

describe('nav reducer', () => {
  it('is a function', () => {
    expect(navReducer).to.be.a('function');
  });
  it('matches initial state', () => {
    const expectedInitialState = {
      open: false,
    };
    expect(navReducer()).to.deep.equal(expectedInitialState);
  });
  it('handles SET_OPEN', () => {
    const action = {
      type: SET_OPEN,
      boolean: true,
    };
    const expectedState = {
      open: true,
    };
    expect(navReducer(undefined, action)).to.deep.equal(expectedState);
  });
});
