import assert from 'assert';
import {it, describe} from 'mocha';
import {getStatistic} from './statistics';
describe(`Game`, () => {
  it(`#getStatistic`, () => {
    assert.equal(getStatistic([{id: 1}], 2), null);
  });
});
