# dose
## Version 1.0

## The story of 'dose'

The 'dose' app was inspired by my mother, a retired Doctor of Pharmacy.  Her drive to help others and her all-consuming interest in pharmacy made for a varied and fascinating career in hospital pharmacy, retail pharmacy, and pharmaceutical supply services for retirement homes.  She was always looking for a way to help people manage their health conditions more thoroughly, but the technology to do so was lacking until recently.  I decided that I would make it my mission to help my mother's dream pharmacy app a reality.

## What can 'dose' do?
Now, 'dose' can help people in the community better manage their oral medications.  This application can also give caregivers a way to help their loved ones with doctor visits and medication management.  This application allows users to log in, add medication information, update medications when changes are necessary, delete medications that are no longer in use or have expired, see a list of all current medications, and get voice reminders on a schedule set by the patient when the medication is entered.

## Getting Started
This will get the project up and working on your local machine.

- First, clone the project using this command: ```git clone git@github.com:mozecode/dose.git```

- Then run ```npm install``` to install all of the dependencies listed below.

- Be sure that nodemon is installed as well with ```npm install nodemon```.

- Please contact me at greta.moseley@gmail.com for information about how to set up the .env and config files that are gitignored in this project, or if you have any other questions.  The APIs used in the project are open, so you won't need any API keys.

- To set up the database, run ```sequelize db:migrate```.

- Then seed the database with the ```sequelize db:seed:all``` command.

- To run the project, run ```npm start``` on the command line and go to localhost:4000 in your browser.

## Dependencies
    bcrypt-nodejs 0.0.3,
    body-parser 1.18.2,
    dotenv 4.0.0,
    express 4.16.1,
    express-flash 0.0.2,
    express-session 1.15.6
    font-awesome: 4.7.0,
    later 1.2.0,
    passport 0.4.0,
    passport-local 1.0.0,
    pg 7.3.0,
    pg-hstore 2.3.2,
    pug 2.0.0-rc.4,
    sequelize 4.13.5,
    bootstrap 4.0.0-beta,
    jquery 3.2.1,
    method-override 2.3.10

## APIs
- [HTML5 Speech Synthesis API](http://creative-punch.net/2014/10/intro-html5-speech-synthesis-api/)

- [rxNorm API](https://mor.nlm.nih.gov/download/rxnav/RxNormAPIs.html#) courtesy of the National Library of Medicine

## How to use 'dose'

'dose' can be used on any device, from phone to tablet to desktop.

- Log into the application and start by adding a current prescription or adding your drug allergies.

- At any point in the application, you can click Menu in the navbar to return to the main menu page.

- Once you've added your information, click on the Account view in the navbar to see your general user information summary.

- To update or delete any of your medication information, go to the Update a Prescription view.  Here you can make changes to the information pre-filled in the form and submit it, or you can delete the drug you selected, simply by clicking the delete button.


- To see a list of your prescriptions by time and get voice reminders of what to take when, click "See my Prescriptions" on the main menu page.


## So, what will version 2 look like?
- I hope to add the ability for users to receive text message reminders to take their medications on schedule, regardless of whether they are logged into the app.  Currently the application only gives reminders if the user is logged in and on the "See My Prescriptions" page.

- I would like to add the ability for users to call their pharmacist through the application to discuss medicines, side effects, etc.

- I would like to find a more comprehensive API to use for including topical, liquid, and other medications and change the user interface accordingly, depending on medication types.

- I would also like to add alerts if a user enters a medication that they are allergic to, so that they can discuss the issue with their doctor or pharmacist. Currently the app stores allergy information, but since often people are allergic to a whole class of drugs, I need to find an API that I could use to compare entered prescriptions with all drugs in the class of drugs the patient is allergic to in order to make sure that the app functions properly.


## THANK YOUs!!!
I need to say a great big THANK YOU to my amazing teachers, my fellow students, and Nashville Software School.

To Joe, the Dumbledore to my Loony Lovegood, thank you SO MUCH for taking us from ordinary muggles to web wizards in a little more than 6 months.  Your dedication and drive shaped us and will continue to guide us in our new lives.  You're such a gifted teacher.

To Jufe, our Node guru, thank you for your keen eyes, your persistence, and for some of the most creative thinking about programming I've seen yet.

To Greg, our oasis of quiet calm in the midst of all this delightful insanity, thank you so much for helping each of us find that well of strength inside ourselves to draw on when we need it.  That, and your musical suggestions are completely awesome to work to....

I am so grateful for this experience and for the new world that Nashville Software School has opened up for me and my classmates.


## License Information

[CC BY-NC-ND License](https://creativecommons.org/licenses/by-nc-nd/4.0/)

## The Obligatory Disclaimers

This application was created as a student project, and is not intended to replace the advice of your medical doctor or pharmacist.  I am not responsible for medication errors, allergic reactions, drug interactions or injury resulting from use of this application, I am simply trying to help give people a tool to manage their own medicines more efficiently and remember to take them on time.  Use at your own risk.

"This product uses publicly available data from the U.S. National Library of Medicine (NLM), National Institutes of Health, Department of Health and Human Services; NLM is not responsible for the product and does not endorse or recommend this or any other product."

## About the Author

Greta Moseley is a graduate of Nashville Software School's Cohort 20.  A former Latin Teacher and Project Manager in the construction field, she is now a Software Engineer.  Contact her at greta.moseley@gmail.com.