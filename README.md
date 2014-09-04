This is a sample website for a web based Fresh Food ordering service. The main working codes are in index.html, main.js and style.css. The website is Search Engine Optimized with Keywords and Description taken from main HelloFresh website (with some minor additions)

The website can have a sleeker, more optimized design using some dedicated frameworks for single page web applications like AngularJS or with added dynamics using ReactJS, but in order to showcase my skills in using pure Javascript and CSS, I have taken help of minimal set of additional libraries (JQuery, Twitter Bootstrap.

index.html loads the JS and CSS files as well as data from data.js. It is mainly responsible for generating the basic structure of webpage as seen on a computer screen. Main.js, based on JQuery, reads the JSON data and loads the appropriate parts of HTML structure. It also optimizes the look for a mobile screen. Styling is done using Twitter Bootstrap and custom style.css

Main.js file helps in dynamic loading of content on HTML page index.html using the JSON data. 

Func1 : It populates the left side carousel of the page and its corresponding modal (openModal function). It uses 2 variables (content and indicators) which correspond to the HTML code for Carousel and its side indicators.

Func2 : It checks for password mismatch in registration form, in case the "password field" and "repeat password" field are not entered equal by the user.

Func3 : It rearranges the HTML coding for a better optimized view on a mobile device. Mainly, it removes the right side of webpage, and places the login/registration forms in a modal.