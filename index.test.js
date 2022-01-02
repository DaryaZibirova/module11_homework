const getMonth = require('./index.js');

describe ('test function getMonth', function() {

  it ('add 4 to receive April, add 8 to receive August', function() {
    expect(getMonth(4)).toBe('April');
    expect(getMonth(8)).toBe('August');
  }),

  it ('add 77 to receive Not found', function() {
    expect(getMonth(77)).toBe('Not found');
  });

  it ('add text to receive Not found', function() {
    expect(getMonth('omg')).toBe('Not found');
  });

});