# Hello, world!

Today, we'll build on our knowledge of HTML tags by making our first changes to HTML, and practice using our new knowledge of GitHub. You'll also learn two new skills: how to preview your work in a web browser as you change it, and how to create a branch and open a pull request in GitHub.

## Requirements

- [ ] Change the title of the page to "Hello, world!"
- [ ] Add a paragraph in the first line of the body tag with the text "Hello, world!", using the `<p>` tag.
- [ ] Add another paragraph telling us who you are, and what you're looking forward to most in this class.
- [ ] After class, choose one HTML element that interests you from [the MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) to introduce to the class. Use the snippet below to get started:
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

One of the hardest things to learn when learning a new programming language is the **syntax** of the language. The syntax of a new language is all those little rules that everyone agrees are consistent so that we are all on the same page about the _meaning_ of what we're saying. Computers are especially picky about syntax. In HTML, syntax includes things like how a **tag** is written. Everyone agrees that HTML tags have a syntax like this: `<tag-name>your content</tag-name>`. Notice the placement of things like `<`, `>`, and `/` in the example. That's syntax!

Because syntax can be hard to get right the first time, I've also added a special command, `npm run test`, that will test your code to make sure the syntax is right, and that your assignment meets the assignment requirements. If you run this and get a message that all tests passed, you'll know you're getting full points on this assignment! The same checks here are the same checks you'll see in GitHub on your branch. This is called autograding.

Before we talk about branches, let's review that new information one more time. You'll be using `npm run start` to start all your assignment work, and then `npm run test` to make sure it meets assignment requirements.

A **branch** is a set of code changes (commits!) that all go together. In the Test Your Connections assignment, you worked on the `main` branch. Today, you'll learn how to create an `assignment` branch. 

Branches are required to make a **pull request**. Pull Requests are the heart of collaboration on GitHub. When you open a pull request, you’re proposing a set of changes, and asking that someone review them. In the last assignment, GitHub Classroom automatically opened a branch for you that contained your changes to the assignment, and that was what allowed me to review your work as your professor. Today, you're going to learn how to do that yourself.

If this sounds like a lot, don't worry - it will come naturally eventually! Keep following the instructions. As you repeat these steps, you'll start to learn them by heart and it will get less overwhelming.

### New terms

- **Syntax:** A special set of rules for how to write code that tells a computer how to read the code. Each language has its own syntax.
- **Tag:** A piece of HTML code that helps a computer understand the meaning of your content. Different tags have different meanings, and tags have a **syntax** that helps a computer understand where that meaning starts and ends, like so: `<tag-name>your content</tag-name>`. For example, an h1 tag means that the content inside is the main heading for the page, and looks like `<h1>Your Title Here</h1>`.
- **npm:** Node Package Manager. A package manager helps us use and leverage other people's code to make our lives easier. As your professor, I'm using `npm` to create a special command that will help you see your HTML, CSS, and JavaScript changes instantly in a browser. You'll learn more about `npm` as we go!
- **`npm run start`:** A Terminal command that will show a preview of your work in the browser.
- **`npm run test`:** A Terminal command that will help you check if you completed all the assignment requirements correctly.
- **Branch:** A set of [commits](https://github.com/ProfessorKolodziej/cm523-test-your-connections#new-terms) that are all related to one another.
- **Pull Request:** A way to propose your changes and ask for a review of your code. Pull requests help developers collaborate and review each other's code!

## Instructions

These instructions will build on your knowledge by having you practice the same set of skills you learned in Test Your Connections, but without the step by step screenshots. See if you can remember how to do each step without the help of the screenshots. If you are having trouble or getting stuck, head back over to the Test Your Connections assignment instructions for a reminder.

### 1. Clone this repository and find it on your computer

1. Use the "Open with Github Desktop" button to open this repository in Tower.
2. When the window opens in Tower, choose Clone.
3. In Tower, click Repositories, then select your repository, then click "Open".

### 2. New: Create a branch in Tower

| Step | Screenshot |
| --- | --- |
| Open Tower, and make sure you are in your Repository view, and that you've clicked "Working Copy". Then, right click the **main** branch and select "Create new branch from main...". | <img width="1843" alt="Screen Shot 2021-09-06 at 11 47 01 AM" src="https://user-images.githubusercontent.com/1828613/132241164-77318d57-996f-40bd-a162-d0cf6b754e97.png"> | 
| Name your new branch “assignment”. The starting point should be main. Make sure “track branch main” is unchecked, and “check out branch” is checked. When you've verified the settings are correct, click "Create branch". | <img width="1838" alt="Screen Shot 2021-09-06 at 11 47 23 AM" src="https://user-images.githubusercontent.com/1828613/132241506-0d47b71f-4418-47f7-b147-589709fdb2e3.png"> | 
| You will now be on the assignment branch. Look for the `head` tag to confirm. | <img width="1845" alt="Screen Shot 2021-09-06 at 11 53 42 AM" src="https://user-images.githubusercontent.com/1828613/132241752-95f499d1-f1f0-4676-9d45-e69c8792ed9b.png"> | 
| Finally, right click the Working Copy and select Reveal in Finder to open up the location of your assignment in Finder. | <img width="1735" alt="Screen Shot 2021-09-06 at 11 56 04 AM" src="https://user-images.githubusercontent.com/1828613/132241974-323068a7-4493-48ce-a477-5563c0e936a0.png"> | 

### 2. New: Install dependencies and start the project

| Step | Screenshot |
| --- | --- |
| Open Tower, and make sure you are in your Repository view, and that you've clicked "Working Copy". <ol><li>Click “Stage All”</li><li>Write a commit message in the Commit Subject area. Keep it short and descriptive of the changes you made.</li><li>Hit “Commit”. This creates a commit, and your changes will “disappear”.</li></ol> | ![image9](https://user-images.githubusercontent.com/1828613/130551912-d3ffbeca-089d-4311-a2de-d82258eb9676.png) | 
| This is what that "disappearing" will look like. Don't panic, your changes are still there! You can see they are because now there will be a small arrow with a number. This is how many changes you will be pushing. It's time to **push** your changes. Click the small up arrow to push your changes to GitHub. | ![image6](https://user-images.githubusercontent.com/1828613/130552156-9fd93037-8f3d-479f-a314-40e1d18ee5f8.png) | 

### 3. Open the folder in VSCode, and make a change to the HTML

1. Drag and drop the folder from the window in Finder into VSCode.
2. Read the requirements above carefully. Then, use the information in the requirements to make a change to your code.
3. Save your changes. Your browser should automatically update and reflect the changes!

### 4. New: Test your code

| Step | Screenshot |
| --- | --- |
| Open Tower, and make sure you are in your Repository view, and that you've clicked "Working Copy". <ol><li>Click “Stage All”</li><li>Write a commit message in the Commit Subject area. Keep it short and descriptive of the changes you made.</li><li>Hit “Commit”. This creates a commit, and your changes will “disappear”.</li></ol> | ![image9](https://user-images.githubusercontent.com/1828613/130551912-d3ffbeca-089d-4311-a2de-d82258eb9676.png) | 
| This is what that "disappearing" will look like. Don't panic, your changes are still there! You can see they are because now there will be a small arrow with a number. This is how many changes you will be pushing. It's time to **push** your changes. Click the small up arrow to push your changes to GitHub. | ![image6](https://user-images.githubusercontent.com/1828613/130552156-9fd93037-8f3d-479f-a314-40e1d18ee5f8.png) | 

### 5. Commit and push your changes to GitHub

1. Open Tower, and make sure you are in your Repository view, and that you've clicked "Working Copy".
2. Click “Stage All”.
3. Write a commit message in the Commit Subject area. Keep it short and descriptive of the changes you made.
4. Hit “Commit”. This creates a commit, and your changes will “disappear”.
5. Look for a small arrow with a number next to your **branch**. This is how many changes you will be pushing. Click the small up arrow to push your changes to GitHub.

### 6. New: Open a pull request on GitHub for feedback

| Step | Screenshot |
| --- | --- |
| Open Tower, and make sure you are in your Repository view, and that you've clicked "Working Copy". <ol><li>Click “Stage All”</li><li>Write a commit message in the Commit Subject area. Keep it short and descriptive of the changes you made.</li><li>Hit “Commit”. This creates a commit, and your changes will “disappear”.</li></ol> | ![image9](https://user-images.githubusercontent.com/1828613/130551912-d3ffbeca-089d-4311-a2de-d82258eb9676.png) | 
| This is what that "disappearing" will look like. Don't panic, your changes are still there! You can see they are because now there will be a small arrow with a number. This is how many changes you will be pushing. It's time to **push** your changes. Click the small up arrow to push your changes to GitHub. | ![image6](https://user-images.githubusercontent.com/1828613/130552156-9fd93037-8f3d-479f-a314-40e1d18ee5f8.png) | 

## 6. New: Check Autograding to see how you did!

This repository uses Autograding to check the basic assignment requirements. Once you pass these requirements, [send me a link to the pull request in Blackboard](https://mymedia.bu.edu/media/Put+it+All+TogetherA+Blackboard%2C+Github%2C+Glitch/1_66r1kz2n?st=825). I'll give you additional feedback on things like performance and coding style, so you know how to improve your code for next time.

[Learn more about Autograding in this video](https://mymedia.bu.edu/media/Put+it+All+TogetherA+Blackboard%2C+Github%2C+Glitch/1_66r1kz2n?st=676)
