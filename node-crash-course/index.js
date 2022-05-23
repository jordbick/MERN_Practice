const Logger = require('./logger.js');

// Instatiate new Logger as it is a class
const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener', data));

logger.log('Hello World');
logger.log('Hello');
logger.log('Hi');