## Quizgame 

#The Swedish Trivia is a short fun quiz for users to get a short break in their everyday life. Maybe during their work break with their colleagues?
the trivia quiz is for young grown-ups with little or no knowledge about Sweden. 
<img width="1085" alt="amiresponsivequiz" src="https://user-images.githubusercontent.com/117651816/208406002-a4bab8b8-449a-460d-82e1-709b36f3e03f.png">

## Features 

* at the top of the page you can use a small navigation bar with a login feature and a direct link to the home page. The bar is easy to locate and has a hoover function for the user to understand when the links are being pressed.
* The main function of the site is the actual trivia quiz. It's set in the middle of the page on the homepage. When the user submits the correct answer an alert window pops up to give feedback to the user about this. A window also pops up when the user types in an incorrect answer.
* When the quiz is finalized the user takes part in a score for the quiz.
* After name registration the user is directed to a thank you page with a button where the user easily can access the home page with the quiz. 


## Bugs 
* When I started to build the quiz site I wanted to build a monkey with code in JS. I followed a tutorial for this but failed and failed to complete this. Due to time limitations, I had to let this idea go. The monkey did not appear on the page. 

## Validator testing 

<img width="919" alt="print screen accessibility" src="https://user-images.githubusercontent.com/117651816/208402954-2c69e3fc-743a-4e8a-a681-2f7abe99dc38.png">

* HTML had an error in using the anchor element as a descendent of a button element. Had trouble fixing this. The Solution was to use onclick with a href inside of it. Used https://validator.w3.org/#validate_by_input.
* CSS had no error. Used https://jigsaw.w3.org/css-validator/
* Javascript had errors due to missing semicolons at several lines. This was corrected. The code also had an error due to that JShint didn't support the used version. This was solved with: /*jshint esversion: 6 */. 
Used https://jshint.com/ 

## Unfixed bugs 
* no unfixed bugs. 

## Deployment 
* The site was deployed to GitHub pages. The deploy on GitHub you follow these steps: 
* Enter your repository in GitHub- when there press the settings tab. Navigate to the page's category. When there- use the drop-down menu and choose the main branch. After doing this, it takes a few minutes- when GitHub has finalized the page a link will be provided. 

Live link: https://kaeb13.github.io/quizgame/

## Credits 

* Thank you for
https://www.youtube.com/watch?v=HfEcdPWTcvs&list=PLjBo-3nd7Mx4f2fsW6hb6fbFxKSNVPQft&index=1&ab_channel=CodingwithRumaysa 
* For a structure with quiz code, followed this tutorial.
https://www.youtube.com/watch?v=w9GNyw8AvlM&ab_channel=BroCode
* for user inlog page. 
https://htmlcolorcodes.com/color-picker/
https://www.funtrivia.com/en/Geography/Sweden-3858.html
* for help with some of the questions. 
http://www.sussex.ac.uk/tel/resource/tel_website/accessiblecontrast/?q=FFFFFF~003b49~1d4289~94a596~e56db1~d3273e~00bfb2~d6d2c4~ffc845~dc582a~41b6e6~1b365d~be84a3~5d3754~7da1c4~f2c75c~d0d3d4~007a78~000000
* for help using colors that helped with the site's accessibility. 
https://www.w3schools.com/css/css_align.asp
https://www.w3schools.com/css/css3_mediaqueries_ex.asp
https://www.w3schools.com/howto/howto_js_topnav.asp
https://www.sitepoint.com/community/t/why-wont-my-text-decoration-go-away/4674
https://www.w3docs.com/snippets/html/how-to-create-an-html-button-that-acts-like-a-link.html
https://www.codegrepper.com/tpc/%27template+literal+syntax%27+is+only+available+in+es6+%28use+%27esversion%3A+6%27%29.
