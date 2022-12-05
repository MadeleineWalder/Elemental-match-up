# Pokémon Rock - Paper - Scissors!

This website is made to display and run the traditional childhood game of rock-paper-scissors but with a fun twist. Based on the famous 'Rock-Paper-Scissors-Lizard-Spock game from the popular TV series The Big Bang Theory, my game is using the type match ups from the world wide famouse franchise of Pokémon. There are five different options for the users to choose from, and although there are many more Pokémon types eacvh of these five have two weaknesses and two strengths. This makes it an equal chance of winning or loosing no matter what you pick, just like in regular rock-paper-scissors. The goal with this website was to make a fun looking game that is also fairly simple so it is easy for children use. They are able to play against the computer and see the scores clearly. As well as being a childrens game, the website could also be considered educational in helping children to learn the type match ups as this would be very helpful when playing the Pokémon card or video games.

### Link to deployed site:

![A screenshot of my finished website appearing on different devices](./docs/screenshots/)

[Photo taken using amiresponsive.com](https://ui.dev/amiresponsive)

---

## User Expectations / Stories

- As a user I would like to be able to play a simple game against the computer
- As a user I would like the website to be child friendly and easy to use
- As a user I should be able to see clear instructions/rules for the game
- As a user I need to be able to see my score and the computers score


---

## Target Audience
- The target audience for this website is definitely children at around 5 - 12 years old. It is at this young age that most people are introduced to rock-paper-scissors, usually in primary school. However this game is a little more complex with it having five options rather than 3, hence why I would argue that chldren up to 12 years old would find it interesting. Especially if they are into Pokémon, which is aimed at children of this age group too and is still widely popular today.
-  To cater to ages 5 -12 years the site needs to be easy to read and navigate with the help of clear, simple text and bold colours. Use of images will help to explain the rules better than lots of written instructions.

---

## Existing Features:

### *Design Features:*

- **Color Scheme:** I wanted the colour scheme to be bright ans playful to appeal to children. It is also based around the colours often used in the Pokémon franchise itself to clearly show what the game is about. I used the a blue outline with yellow text for the header, taking inspiration from the classic blue and yellow Pokémon logo. Of course due to copyright I could not use their actual logo in my work. The colours of the buttons match the corresponding ones on the diagram and are based off of what colours are commonly used for each type in the Pokémon games, for example red for fire, light blue for ice and so on. This will help anyone who has played the video games to remember the types and noy get confused by the colours chosen. I kept the background white and used black text for two reasons: this is how text oftent appears in the video games, and it is easy to read for young children whilst contrasting nicely from the brightly coloured buttons and diagram.

- **Font:** I used a font called 'Nerko One' which I found on Google Fonts. I chose it because it has a fun yet simplistic look to suit my young target audience. It's not too complicated but also suits the playful Pokémon theme very well as it's quite bold and curvy. I decided to stick with this font for the entire site (except in the diagram image as I couldn't use it there) as it worked do well and gave the site a complete, clean look. Multiple fonts on a website with not so much content coould look messy and be harder for young children to read. At first I was annoyed that I could'nt add the same font into the diagram, but then I realised this was probably better. It having a different font from the buttons shows that it is not interactable, but a separate image that cannot be clicked on. Helvetica is the name of the font used in the diagram and I chose it because it's a little thinner which gives it a simple and clean look. Again it's very easy to read, which is essential for the diagram to convey information effectively.

### *Structural Features:*

- **The Header:** In the header I simply used a h1 element to write the title of my page. I didn't want it to be too long as that would be confusing and not very eye-catching. So I went with 'Pokémon Rock-Paper-Scissors' instead of something like 'Ice-Ground-Fire-Grass-Rock', which would be an obvious name for it since the game itself is based on Rock-Paper-Scissors-Lizard-Spock. However this is a little too long and hard to remember to appeal for my target audience. Referencing both Pokémon and rock-paper-scissors in the header immediatly tells the user what the game is about.

- **The Diagram:** The diagram I made myself using a website called [Diagrams.net](https://app.diagrams.net/) which allows you to create your own diagrams and save them to your pc. They have tons of complex templates to choose from but I decided to start from scratch as my diagram was going to be fairly simple. One feature which is really useful about this website is that you can use hex code to choose colours for your diagram. This allowed me to pick colours that fit well with my colour scheme and could be encorperated elsewhere on my site if necessary. This is one of the reason why I decided to create my own diagram and use it as an image for my website. Another main reason is that there aren't many images currently available of this diagram using Pokémon types. I did mange to find this one below, but I didn't think it was good enough to use in my site. It isn't very clear, the quality of image isn't great and the colours don't stand out.

![An image of the types diagram I based my own diagram off of](./docs/screenshots/typesimg.webp)

- Using the squared background to help align, I began making my diagram with the same basic structure as the first image. It shows how the different types effect each other really clearly.

![An image of the types diagram I made myself](./docs/screenshots/diagram1.jpg) 

- Then I added the bright colours and black text to fit my colour scheme.

![An image of the types diagram I made myself](./docs/screenshots/diagram2.jpg)

- **The Choice Area:** This is the name given to a class which is applied to the div containing my buttons. It is the area of the page where the user can choose their option out of the five given types. The buttons match the exact same hex colour as their corresponding rectangle on the diagram to clearly link them. This helps the user see what choice is effective aginst/ weak against what. They also have a hover rule applied in the CSS so that they turn black with white text when hovered over. This is also where the JavaScript comes in. An event listener is applied to the buttons. When a buttons is clicked, its name or 'data-type' is set as the user's choice. A function is then called to make the computer pick a random answer out of the same five options. THis is set as the computers choice. The users and computers choices are then compared in another function. The result is then displayed in the next section of the page.

- **The Result Area:** The result area consists of three paragraphs each with a span for an answer to be put into. The colours here are black text on a white background, keeping with the flow of the page. The users choice is diplayed using JavaScript, so the user can check what they picked, as is the computers random answer. If the function comparing the two choices finds that they are the same, it will siplay the message: "The computer chose the same answer, it's a draw!". If it finds that the users choice beats the computers choice, it will display: "You win!". If the computer beats the user it will display: "You loose!". This helps the user understand what is happening. It is of course important that they know if they won or not.

- **The Score Area:** As the name might suggest the scores are displayed here. Appon determining if the user won, lost or drew a function is called in JavaScript which changes the score acordingly. If it finds that the result was "The computer chose the same answer, it's a draw!" it will do nothing. No points will be awarded. If the answer was "You win!" it will increase the users score by 1. Likewise if the result was "You loose!" it will increase the computers score by 1. The two different scores are written on separate lines to help prevent the user confusing the two.

- **The Footer:**