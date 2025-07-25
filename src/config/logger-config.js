const { createLogger, format, transports } = require('winston');
// createLogger is a function rest both are object 
const { combine, timestamp, label, printf } = format; // we destructure the format object in which we get the combine,timestamp,label,printf

/**
 * printf is help to print the log which take callback function as an argument inside a callback function you get the object which you destructure 
level -> it is the severity level e.g log is successfully created so level is info 
lets say error log so level of log is error, lets say warning log so level of log is warning
timestamp -> it helps us to print when will this log happen if you want to see the log from this day to this day you don't want to see the whole vlog then this timestamp helps
label -> label helps us to determine that from which module or folder error came from 
 */

const customFormat = printf(({level,message,label,timestamp})=>{
    return `${timestamp}: ${level}: ${message}`;
})

const logger = createLogger({
  format: combine(
    timestamp({format : 'YYYY-MM-DD HH:mm:ss'}),
    customFormat
  ),
// you want that you log was print in console also and for later debugging you store your log in some log file also so what you do that you mention all of the stream where you actually put your logs inside the transport array 
  transports: [
    new transports.Console(), //if you use winston it print the log in console
    new transports.File({filename : 'combined.log'})
]
// now when anyone use my logger function the log not just come inside the console but they also come inside the combined.log file 
});
module.exports = logger