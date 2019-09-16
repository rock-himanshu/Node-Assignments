/*
/* Grove - Temperature Sensor (TMP36)
*  Bluetooth Module with name RN-42
*  This sensor detects the environment temperature,
*  Connect the signal of this sensor to A0, use the 
*  Serial monitor to get the result.
*/
#include <math.h>;
int outputpin = A2;
int rawvoltage = 0;
void setup()
{
Serial.begin(9600);
}
void loop()
{
rawvoltage = analogRead(outputpin);// read the outputpin of TMP36
float voltage = rawvoltage/205.0;// get the rawvoltage value in V
float celsiustemp = 100.0 * volts - 50; // calculating in celcius
Serial.print(celsiustemp);
Serial.println("°Celcius");
delay(2000);//delay of 2 seconds
}

