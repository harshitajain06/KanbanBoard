/* @jest-environment jsdom */
import counterComment from './commentsCounter.js';

describe('Test count fucn', () => {
  test('Counts the number comments', () => {
    const count = [];
    const div = document.createElement('div');
    counterComment(div, count);
    expect(div.innerHTML).toBe('');
  });
});