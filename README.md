# QAA Technical Interview Example

This is a web app that can be used as an practical example for a technical interview. The web app includes a "new feature" that the QAA candidate would check against given acceptance criteria.

## Instructions

1. Navigate to [QA Form](https://qaa-technical-interview-example.vercel.app/)
2. Enable the feature by adding and item to localStorage with the key `show-survey` and the value of `true`
3. Read User Story and Acceptance Criteria
4. Test new feature and note discrepencies with given Acceptance Criteria
5. Discuss any additional edge cases worth testing and what to do if anything is discovered

## User Story

As a marketer I would like a survey on the site so that I can get more information about our users.

## Acceptance Criteria

- Dialog component for survey shows on page load
- Clicking the "x" icon at any point in the survey, closes the dialog
- CTA on main page says "GETTING TO KNOW YOU SURVEY"
- Clicking "GETTING TO KNOW YOU SURVEY" CTA opens dialog on first screen (Screen that says "Hello!" at the top)
- Information from inputs should persist when using prev/next buttons

### Dialog

- Title:
  - Font Size: 20px
  - Font Weight: 500
- Copy:
  - Font Size: 14px
  - Font Weight: 400
- Prev/Next/Close Buttons:
  - Font Size: 14px
  - Font Weight: 500
  - Color: rgba(4, 20, 35, 0.294)
  - Color when disabled: rgba(0, 0, 0, 0.9)
  - Button is disabled if there is an input field and it is empty
  - Clicking the button adds data to the dataLayer
- X icon (close button):
  - Clicking button closes dialog. Dialog should start on first screen when opened again

### First Screen

- Title: "Hello!"
- Copy: "Let's get to know each other. What is your name?"
- Input: text input for name
- Button: "NEXT"

### Second Screen

- Title: "Nice to meet you [name]!"
- Copy: "What is your favorite single digit integer?"
- Input: number input for favorite number
- Buttons: "PREV" & "NEXT"

### Last Screen

- Title: "Thanks for sharing, [name]!"
- Copy: "My favorite number is 3, but [favorite-number] is a pretty cool number too! Have a great day [name]." or "That's cool! 3 is my favorite number as well. Have a great day [name]."
- Input: number input for favorite number
- Buttons: "PREV" & "CLOSE"

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
