![](https://imgur.com/nrzSgGZ.png)

## Inspiration

For HackViolet 2023, we created a web-application called **Fert**, which provides aspiring and experienced gardeners with a platform to learn new skills and share their knowledge. We were inspired to build this project to encourage people to plant and grow food in their own homes. According to the Food and Agriculture Organization of the United Nations - FOA - the world will need to produce `70%` more food for an <u>additional</u> `2.3 billion` people by `2050`. This goal is difficult to achieve with already rampant poverty and hunger, as well as climate change. This motivated us to create a web-application that could tackle this ecological problem by inspiring people around the world to harvest in their own backyards, so they are not as reliant on mass production. The name for our project, **Fert**, is inspired by the word ‘fertilizer,’ where clients can also use it as a verb. Examples include “Have you ferted today?” or “Put your fert on the dirt!”

## What it does

**Fert** initially helps users to start planting by recommending different plants based on the user’s location, budget and climate conditions. This is done by collecting a user's zip-code and outputting their temperate zone as well as recommended temperature range. It then adds selected plants to the user’s plant catalog, called 'My Plants'. In the catalog, plants are displayed as cards which include planting instructions and a time lapse. The time lapse compiles stored photos of a certain plant as a slideshow to display a timeline of the plant’s growth. 

Our web-application sends the user notifications at a random time everyday, reminding them to water and take a progress picture of their plants which can later be turned into a time lapse. It also provides users the ability to interact with others in the plant community and get advice on their plants’ health. The user can then see the progress of their fellow _**Ferters**_ by viewing their profile in the form of a modal. This encourages <u>_community based learning_</u> and helps the user stay motivated to water and grow their food plants!

![](https://imgur.com/RIStgK9.png)

## How we built it

We primarily built the web-application using `React`. First, we designed collaboratively wire-frames on `Figma`. Next, using Visual Studio Code’s Live Share feature, our team constructed a skeleton of the website. We used `HTML5` and `CSS3` for setting up the website infrastructure and design. We then used `React` for component based structure, with customized components from `MaterialUI` to complete our layout. `Twilio` was used to send daily SMS messages to notify users to take pictures and water their plants. `JavaScript` and `Flask` were used for more web application functionality. The plant suggestion feature was implemented using `FrostLine` open source API to take a given ZIP code and retrieve its corresponding plant hardiness zone, and temperature range in which it can survive and sustain.

![](https://imgur.com/tK39ZBx.png)

## Challenges we ran into

- disagreements with our initial UI/UX Figma design
- lack of accessible APIs related our topic
- deprecated libraries

## Accomplishments that we're proud of

We were able to systematically delegate duties and create a functional web application within 24 hours. If one of us was struggling, we all worked to alleviate their burden and help each other out.

Our web application also helps users find what plant hardiness zone they are in. This is important to help new planters determine what plants would be best suited for their environment. This unique feature allows for an inclusive experience that allows for any user to find what plant works best for them.

## What we learned

Aside from applying our past knowledge of `JavaScript`, `HTML`, and `CSS`, we learned how to utilize `REST APIs` to gather essential information for our application’s main functionality. We utilized GitHub as our source control software for this project, which involved coordination and communication between our team members to maintain error-free source code.

## What's next for Fert

One of our original intentions for **Fert** was to allow for more communication between users similar to any other social media platform (e.g. comments, likes, etc.). We decided not to prioritize this process as we had many concerns over the possibility of cyberbullying and harassment. Given more time, we would love to implement means for users to communicate and encourage each other to plant more. Having a social feed with daily pictures of plants would be beneficial in keeping track of the health of your own plant as well as seeing what types of foods other people are planting. Fellow _**ferters**_ could react to these daily pictures using certain emojis, thus encouraging the user to keep harvesting in their backyard!

![](https://imgur.com/GNriDHw.png)

## Developers

### [Chau Le](https://www.linkedin.com/in/chaunble/), [Ria Vadhavkar](https://www.linkedin.com/in/riavadhavkar/), [Aditi Diwan](https://www.linkedin.com/in/aditi-diwan/), [Anthony Nguyen](https://www.linkedin.com/in/ant33nguyen)

![](https://imgur.com/t4wOxGI.png)
