# Phono Mandarin

Get instant feedback on your Mandarin tone pronunciation.

## Table of Contents 

* [General Info](#general-info)
* [Video](#video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [License](#license)
* [Contact](#contact)

## General Info

Phono Mandarin is a full stack web app built with a React frontend and Django backend. It makes use of Mozilla's WebSpeech API to access the browser's speech recognition functionality to access the user's microphone and checks the recognized speech against a displayed flashcard. Once the app has determined correct tonal pronunctiation the flashcard's background will change colors to become green to provide instant feedback. User's have the ability to save flashcards to their own deck and may switch between practicing only those selected flashcards or the entire deck provided.

## Video 

[Phono Mandarin on Youtube](https://youtu.be/2d-KcMdh9ic) 

## Technologies 

* React JS - version 6.14.5
* Django - version 3.0.8
* Mozilla's Web Speech API
* SQLite3
* HTML/CSS

## Setup

This app is stored in two different GitHub respositories, the frontend can be found [here](https://github.com/nolan-dyke/mod5_project) and the backend may be found [here](https://github.com/nolan-dyke/capstone_backend). Both should be cloned to your local machine, in seperate files. Next the React dependencies for the frontend can be installed with npm by:
`$ npm install`
The python dependencies for the Django backend can be installed using pip:
`$ pip install -r requirements.txt`

Additionally, the backend contains migrations that should be run in order to have access to its functionality. Run the following commands:

```
$ python manage.py makemigrations
$ python manage.py migrate
```

The Django backend should be served on port 3000 and can be done by running the command 

`$ python manage.py runserver 3000`

The frontend may be served on any port and can be accomplished by running the command:

`$ npm start`

At this point you may navigate the app in the browser. You may create a new user profile, or use the test user credentials log in: 
```
username: test
password: 12345
```

## Features 

* Full authentication
* Login or create new profile
* Voice recognition
* Responsive pronunciation verification
* Save flashcards to a user's deck
* Remove flashcards from a user's deck


## Status 

This project is finished with the option to expand flashcard decks and future deployment coming soon.

## License 

This project is an open source project in accordance with the MIT open source initiative license.

## Contact

[GitHub](https://github.com/nolan-dyke)
[LinkedIn](linkedin.com/in/nolan-dyke)

