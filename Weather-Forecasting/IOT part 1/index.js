var serialport = require('serialport');
var portName = 'COM3';
var sp = new serialport.SerialPort(portName, {
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false,
    parser: serialport.parsers.readline("\r\n")
});

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'heroku',
  auth: {
    user: 'himanshu.agarwal1111@heroku.com',
    pass: '******'
  }
});

sp.on('data', function(input) {
    var hot_flag=0;
    var cold_flag=0;
    console.log(input);
    if(input>=40)
    {
        console.log(" !!!! To Hot: Generate alert");
        if(hot_flag=!1){
            send_email("Temperater crossed 40 degree celcius");
            hot_flag=1;
        }
    }
    else if (input<=8)
    {
        console.log("!!! To Cold: Generate alert");
        if(cold_flag=!1){
            send_email("Temperater is under 8 degree celcius");
            hot_flag=1;
        }
    }
    else if(hot_flag || cold_flag){
        hot_flag=0;
        cold_flag=0;
    }
});



function send_email(message){
    var mailOptions = {
        from: 'alerts@weatherapplication.com',
        to: 'himanshu.agarwal1111@gmail.com',
        subject: '!!Alert!!',
        html: '<h1>Welcome To weather application</h1><p>'+meassage+'!</p>'
      }

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}