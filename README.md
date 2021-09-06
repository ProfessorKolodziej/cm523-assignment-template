# Hello, world!

Today, we'll build on our knowledge of HTML tags by making our first changes to HTML, and practice using our new knowledge of GitHub. You'll also learn two new skills: how to preview your work in a web browser as you change it, and how to test your changes and see feedback in GitHub.

## Requirements

- [ ] Change the title of the page to "Hello, world!"
- [ ] Add a paragraph in the first line of the body tag with the text "Hello, world!", using the `<p>` tag.
- [ ] Add another paragraph telling us who you are, and what you're looking forward to most in this class.
- [ ] After class, choose one HTML element that interests you from [the MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) and briefly explain what it does, as well as why you think it is interesting. Use the snippet below to get started:
	```
		<h2>My favorite new HTML element</h2>
		<!-- This is a comment. It helps provide instructions, and doesn't show in final HTML. You can delete it if you want, and replace this with what your favorite HTML element is, and why. Hint: if you want to show your HTML element like a tag in the text, like in the example, you may need to escape the HTML element using a tool like https://www.freeformatter.com/html-escape.html -->
		<h3>How to use this element</h3>
		<code>
			<!-- Try adding an example of how to use your HTML element here. You can use MDN's examples as a starting point. -->
		</code>
		<p>All information is from <cite><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">MDN docs</a></cite></p>
	```

## Finished Assignment Example

<img width="1552" alt="Screen Shot 2020-08-18 at 2 04 36 PM" src="https://user-images.githubusercontent.com/1828613/90549036-e21c4b00-e15b-11ea-8828-b8dcd5d076de.png">

## First: What new things are we learning in this lesson, and why?

Today, we're going to learn all about how to preview and test your changes, so you can be successful in this class! We'll be doing this using a program called `npm`. `npm` stands for Node Package Manager, and it helps us leverage other people's code to make our lives easier while developing websites. You don't need to know much about `npm` yet, except that you'll see it in some commands you can run, like this: `npm run start`. This command is the command you'll use to preview your work.

One of the hardest things to learn when learning a new programming language is the **syntax** of the language. The syntax of a new language is all those little rules that everyone agrees are consistent so that we are all on the same page about the _meaning_ of what we're saying. Computers are especially picky about syntax. In HTML, syntax includes things like how a **tag** is written. Everyone agrees that HTML tags have a syntax like this: `<tagname>your content</tagname>`. Notice the placement of things like `<`, `>`, and `/` in the example. That's syntax!

Because syntax can be hard to get right the first time, I've also added a special command, `npm run test`, that will test your code to make sure the syntax is right, and that your assignment meets the assignment requirements. If you run this and get a message that all tests passed, you'll know you're getting full points on this assignment! The same checks here are the same checks you'll see in GitHub on your branch. This is called autograding.

### New terms

- **Syntax:** A special set of rules for how to write code that tells a computer how to read the code. Each language has its own syntax.
- **Tag:** A piece of HTML code that helps a computer understand the meaning of your content. Different tags have different meanings, and tags have a **syntax** that helps a computer understand where that meaning starts and ends, like so: `<tagname>your content</tagname>`. For example, an h1 tag means that the content inside is the main heading for the page, and looks like `<h1>Your Title Here</h1>`.
- **npm:** Node Package Manager. A package manager helps us use and leverage other people's code to make our lives easier. As your professor, I'm using `npm` to create a special command that will help you see your HTML, CSS, and JavaScript changes instantly in a browser. You'll learn more about `npm` as we go!
- **`npm run start`:** A Terminal command that will show a preview of your work in the browser.
- **`npm run test`:** A Terminal command that will help you check if you completed all the assignment requirements correctly.

## Instructions

These instructions will build on your knowledge by having you practice the same set of skills you learned in Test Your Connections, but without the step by step screenshots. See if you can remember how to do each step without the help of the screenshots. If you are having trouble or getting stuck, head back over to the Test Your Connections assignment instructions for a reminder.

### 1. Clone this repository and find it on your computer

1. Use the "Open with Github Desktop" button to open this repository in Tower.
2. When the window opens in Tower, choose Clone.
3. In Tower, click Repositories, then select your repository, then click "Open".

### 2. New: Install development dependencies (Only once per assignment)

You only need to install development dependencies when you first start the assignment. Once you've run `npm install` on an assignment, you don't need to do it again. When you start a **new** assignment, that's when you'll run this command.

| Step | Screenshot |
| --- | --- |
| <p>Drag the folder onto the Terminal icon. A new window will appear with the folder name in it.</p> <small style="font-size: 0.75em;">_Alternately, you can also open Terminal or Command Propmt, type_ `cd`, _add a space, drag and drop the folder into the Terminal window, and then press enter. But this way is easier._ `cd` _stands for "change directory"._</small> | <img width="2048" alt="Screen Shot 2021-09-06 at 1 14 25 PM" src="https://user-images.githubusercontent.com/1828613/132248395-bf069451-9f08-4638-8137-1014c9831e02.png"> | 
| Type the following command into the window, and then hit enter: `npm install`. | <img width="918" alt="Screen Shot 2021-09-06 at 1 23 33 PM" src="https://user-images.githubusercontent.com/1828613/132248753-fa646f4e-3c3b-471e-87e2-121f1814ec1b.png"> | 
| Allow the install script to run. This is installing your development dependencies - the things that make your website run. Wait until you see a screen similar to this. You can ignore the vulnerabilities message - that's my job to maintain! | <img width="918" alt="Screen Shot 2021-09-06 at 1 24 39 PM" src="https://user-images.githubusercontent.com/1828613/132248805-8675a3cc-894d-4eb1-a64f-84f6e545274f.png"> | 

### 3. New: Start the assignment (When you're ready to start work)

You'll run the `npm run start` command each time you're ready to start work. For example, if you work, and then shut your computer down, and then come back the next day, you'll only have to run `npm run start`.

| Step | Screenshot |
| --- | --- |
| Clear the screen using the Command + K keyboard shortcut if you are on a Mac, or `cls` and hit enter if you are on Windows. This will make it easier to see what you are doing, and is a good habit to get into each time you run a new command. Then type `npm run start`, and hit enter. | <img width="918" alt="Screen Shot 2021-09-06 at 1 27 10 PM" src="https://user-images.githubusercontent.com/1828613/132248989-d42351df-8112-4f2e-949c-d8428f723cbc.png"> | 
| <p>A new browser window will open, and your terminal will look like the screenshot to the right. What is happening is that the terminal is watching your files for changes, and at this point, you can put it off to the side.</p> <p>The browser shows a preview of your assignment. There's nothing there yet - that's okay! Next, you'll make a change in VSCode, and the browser will show your changes automatically.</p> | <img width="996" alt="Screen Shot 2021-09-06 at 1 28 45 PM" src="https://user-images.githubusercontent.com/1828613/132249364-bc643fff-0cb7-4053-9748-48b202c39c90.png"> | 

### 4. Open the folder in VSCode, and make changes to the HTML

1. Drag and drop the folder from the window in Finder into VSCode.
2. Read the requirements above carefully. Then, use the information in the requirements to make a change to your code.
3. Save your changes. Your browser should automatically update and reflect the changes when you save!
4. Keep working until you are happy with your assignment progress, and ready to double check it meets the assignment requirements. Check your Terminal if changes stop showing up in the browser - there is probably an error in your code.
5. Once you've reviewed the requirements and sample image to be sure your code looks similar, commit it!

### 5. Commit and push your changes to GitHub

1. Open Tower, and make sure you are in your Repository view, and that you've clicked "Working Copy".
2. Click “Stage All”.
3. Write a commit message in the Commit Subject area. Keep it short and descriptive of the changes you made.
4. Hit “Commit”. This creates a commit, and your changes will “disappear”.
5. Look for a small arrow with a number next to your **branch**. This is how many changes you will be pushing. Click the small up arrow to push your changes to GitHub.

### 6. New: Test your code

| Step | Screenshot |
| --- | --- |
| To run the test, you will need to stop the command you have been running (`npm run start`). Use the Control + C shortcut in Terminal to stop the start command. Your Terminal will look like the right (click to see a larger view). If you have the folder name and dollar sign at the bottom, that is how you know it is stopped. | ![Screen Shot 2021-09-06 at 3 33 47 PM](https://user-images.githubusercontent.com/1828613/132256087-48d7b5bc-0d8c-42a4-89a5-c8c25a53e4ff.png) | 
| Clear the terminal using Command + K, and then run the following command: `npm run test`. | ![Screen Shot 2021-09-06 at 4 26 04 PM](https://user-images.githubusercontent.com/1828613/132258839-9ddbdc27-6518-4751-ad5c-07b9109f4bfc.png) | 
| If there is a problem with your HTML, the test will stop, and your results will look like this. Follow the tips on the screen, and work on errors from top to bottom, rerunning `npm run test` each time you make a change to see if the change worked. In this example, the error is related to a missing close tag. | ![Screen Shot 2021-09-06 at 4 11 32 PM](https://user-images.githubusercontent.com/1828613/132258314-a9b14fe8-11ef-4c47-88d9-35dd434d6872.png) | 
| If your HTML is valid, but you are missing an assignment requirement, your test results will look similar to this. Look for phrases or sentences in the error that are familiar. Again, rerun `npm run test` each time you make a change. | <img width="1777" alt="Screen Shot 2021-09-06 at 3 47 36 PM" src="https://user-images.githubusercontent.com/1828613/132257223-da888ea5-a845-4ee5-a539-ab5d266b4ee0.png"> | 
| A successful test will look like this. Keep going until your test is successful! If you're stuck, don't get discouraged, and reach out to your classmates to compare notes! | ![Screen Shot 2021-09-06 at 4 17 14 PM](https://user-images.githubusercontent.com/1828613/132258456-b0b7f43c-4155-4e9b-bca9-40e81fccda53.png) | 
| Return to Tower, and then commit and push any new changes you've made to Github. | ![Screen Shot 2021-09-06 at 4 17 14 PM](https://user-images.githubusercontent.com/1828613/131233610-2619d900-50f0-4b0f-899a-741d8fb088a6.png) | 

## 7. New: Check Autograding to see how you did!

1. Find your changes on GitHub.
2. Once you are on the Pull Requests tab, head to Conversation.
3. This is where you will see the results of Autograding, and any additional comments I make on your assignment. I'll give you additional feedback on things like performance and coding style, so you know how to improve your code for next time.
4. With luck, all the tests will pass, since Autograding uses the same `npm run test` command as you did earlier!
5. Once you pass the tests on GitHub, send me a link to the pull request in Blackboard.
