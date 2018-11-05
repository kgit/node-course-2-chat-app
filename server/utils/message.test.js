var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Bob';
    var text = 'Hello there';
    var message = generateMessage(from, text);
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(message.createdAt).toBeGreaterThan(0);
  });
});
