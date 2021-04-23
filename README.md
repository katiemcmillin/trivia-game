# Project Overview

## Project Name

You Don't Know Jill

## Project Description

My project will be a trivia game with the ability to search by category and difficulty level

## API and Data Sample

Specify the API you are using and include a link. Show us a snippet of JSON returned by your API so we know you can access it and get the info you need
```
{
            "category": "Art",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which artist&rsquo;s studio was known as &#039;The Factory&#039;?",
            "correct_answer": "Andy Warhol",
            "incorrect_answers": [
                "Roy Lichtenstein",
                "David Hockney",
                "Peter Blake"
            ]
        },
        {
            "category": "Art",
            "type": "multiple",
            "difficulty": "hard",
            "question": "Albrecht D&uuml;rer&#039;s birthplace and place of death were in...",
            "correct_answer": "N&uuml;rnberg",
            "incorrect_answers": [
                "Augsburg",
                "Bamberg",
                "Berlin"
            ]
        },
        {
            "category": "Art",
            "type": "boolean",
            "difficulty": "medium",
            "question": "Vincent van Gogh cut off one of his ears.",
            "correct_answer": "True",
            "incorrect_answers": [
                "False"
            ]
        },
```

Open Trivia Database

https://opentdb.com/api.php?amount=10&category=25

## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

https://github.com/katiemcmillin/trivia-game/blob/main/wireframes/Trivia%20game%20-%20Phone.png
https://github.com/katiemcmillin/trivia-game/blob/main/wireframes/Trivia%20game%20-%20Window.png

### MVP/PostMVP

#### MVP 
- Asks users for name
- Find and use external api 
- Render data on page 
- Keep track of score
- Search by category and difficulty 

#### PostMVP  
- Add music
- Add sounds for correct and incorrect answers
- Multi-player option
- Add option for random category selection
- Timer

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|April 16-18| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|April 19| Project Approval | Complete
|April 19| Core Application Structure (HTML, CSS, etc.) | Complete
|April 19-21| Pseudocode / actual code | Complete
|April 21| MVP  | Complete
|April 22| Post-MVP | Incomplete
|April 23| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes
https://lucid.app/lucidchart/f37033e3-f212-4840-9858-2979d7a0c05a/view?page=0_0#

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Finding API/Project Approval                | H | 5hrs| 5hrs |5hrs |
| Setting up intitial HTML/CSS/JS and linking | H | 1hr | 1hr | 1hr |
| Pseudocode                                  | M | 1hr | .5hr | .5hr |
| Setting up/working with API                 | H | 3hrs| 4hrs | 4hrs |
| Setting up functionality/writing code       | H | 5hrs| 16hrs | 16hrs |
| Basic CSS                                   | H | 5hrs| 7hrs | 7hrs|
| Responsive Design                           | M | 2hrs| 2hrs | 2hrs |
| Advanced CSS / Animations/Transitions       | L | 8hrs| 1hr | 1hr |
| Total | H | 30hrs | 36.5hrs| 36.5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function makePrettyString(str) {
  str = str.replace(/&quot;/g, '"');
  str = str.replace(/&#039;/g, "'");
  str = str.replace(/&ldquo;/g, '"');
  str = str.replace(/&amp;/g, '&');
  str = str.replace(/&rdquo;/g, '"');
  str = str.replace(/&eacute;/g, 'é');
  str = str.replace(/&iacute;/g, 'í');
  str = str.replace(/&uuml;/g, 'ü');
  str = str.replace(/&ecirc;/g, 'î');
  str = str.replace(/&ntilde;/g, 'ñ');
  str = str.replace(/&ouml;/g, 'ö');
  str = str.replace(/&oacute;/g, 'ó');
  str = str.replace(/&aacute;/g, 'á');
  str = str.replace(/&uacute;/g, 'ú');
  str = str.replace(/&deg;/g, '°');
  str = str.replace(/&rsquo;/g, "'");
  str = str.replace(/&shy;/g, "");
  str = str.replace(/&Eacute;/g, 'É');
  str = str.replace(/&euml;/g, 'ë');
  return str;
}
```
I'm proud of this function that cleans up the special characters that did not render correctly.
## Change Log

 I used local storage for my API and user input so that I could have multiple HTML files and be able to access the information on all of them.

 I added a page that shows the final score.

 I took out the game name out of the game page in all screen sizes, and the category out for mobile.
