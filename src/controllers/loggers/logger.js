const {createLogger,transports,format}= require('winston');
const { combine, timestamp, label, prettyPrint, message } = format;


const kccErrorLogger = createLogger({

    format: combine(
        label({ label: 'ERROR!!', message: true }),
        timestamp(),
        prettyPrint(),
      ),
    transports:[
        new transports.Console(),
        new transports.File({
            filename: "error.log",
            level: 'error',
            format: format.combine(format.timestamp(), format.json())
        })
    ]
})

module.exports= {
    kccErrorLogger
}

