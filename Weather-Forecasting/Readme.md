This project is being inspired by Indian Farmer hardwork. This project can be used for creating smart Green-house for temperature and vegition contol.
-------------------------- 
 project Part 1:(IOT Based)
--------------------------
Hardware requirement:
1x Ardino UNO microcontroller.
1X Bluetooth Module. RN-14.
1X Analog TMP-36 Thermostat.
1X battery.

Note: Required good internet connectivity, nodeJs and www.plotly.com account(open source account for data analysis)

step 1) Download IOT repository with required IOT Tools.
step 2) simulate ardino uno coding.ino to ardino and change serial port if required.
step 3) install plotly with "node install plotly" and run index.js and reading update.js with node.
step 4) setup reading update.js with plotly account.

---------------------
Application setup:
--------------------
1) install node<br>
2) open Terminal<br>
3) Install node Module using npm command on specific folder "weatherforecasting".<br>
    Execute to install npm express framework, ejs framework,request module and body-parser module<br>
    3.1) npm install express<br>
    3.2) npm install request<br>
    3.3) npm install body-parser<br>
    3.4) npm install ejs<br>
    or unzip node_module.zip file in root folder of project.
    
4) Run node server.js on folder weatherforecasting<br>
5) open Link http://localhost:3000/<br>
6) Test Application.<br>

<b>Application preview :</b><br>
Demo hosting Link: <a hreaf="https://weather-forcast123.herokuapp.com">https://weather-forcast123.herokuapp.com</a>
<img src="output.png" alt="working image">
