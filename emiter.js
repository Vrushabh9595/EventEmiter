const EventEmitter = require('events')

class Logger extends EventEmitter{
    logInfo(message){
        this.emit('info', message)
    }

    logWarn(message){
        this.emit('warn', message)
    }

    logError(message){
        this.emit('error', message)
    }

    logDebug(message){
        this.emit('debug',message)
    }

    logTrace(message){
        this.emit('trace', message)
    }
}
const logger = new Logger();

logger.on('info',(msg)=>{console.log(`Info:${msg}`)});
logger.on('warn',(msg)=>{console.warn(`Warning:${msg}`)});

logger.on('error',(msg)=>{console.error(`Error:${msg}`)});

logger.on('debug',(msg)=>{console.log(`Debug:${msg}`)});

logger.on('trace',(msg)=>{console.log(`Trace:${msg}`)});

logger.logInfo('Server started on port 3000');
logger.logWarn('Request processed , but response time was slow');
logger.logError('Request failed due to server error');
logger.logDebug('Event Triggered')
logger.logTrace('API Call Started');









