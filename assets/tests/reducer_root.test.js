import { describe, it } from 'mocha';
import { expect } from 'chai';
import rootReducer from '../reducers';

describe('root reducer', () => {
  it('is a function', () => {
    expect(rootReducer).to.be.a('function');
  });
});
