let stackoverflow = document.querySelector("#stackoverflow");
let breathalyzer = document.querySelector("#breathalyzer");
let extension = document.querySelector("#extension");
let autocorrect = document.querySelector("#autocorrect");
let bullet = document.querySelector("#bullet");
let shopping = document.querySelector("#shopping");

stackoverflow.innerHTML = `I completed this project in my pre-final year under the guidance of coding club, IITG. 
It is a knowledge-sharing platform with features of asking questions, providing answers, upvoting and downvoting 
posts. Users can upload images and filter questions based on custom or pre-defined tags like hostel, department 
and clubs.It was developed using MERN stack and  had in-built Outlook authentication.`;

breathalyzer.innerHTML = `I worked on this prototype during first Internship with Cygnusa. The main idea is to create a virtual 
Breath Analyzer which can help us to minimize the Road Accidents which happen at highways or busy areas due to
drunk truck drivers/Packers and Movers.The Analyzer will be a small machine which will measure the Ethanol and Alcohol
content in the Breath and then give results accordingly. The machine will be integrated with GPS and a
sensor-operated Alarm system.`;

extension.innerHTML = `I completed this project in the beginning of my final year. Here I built a chrome extension that is
linked with codeforces. It is a randomizer Tool for Codeforces which gives a random question based on the filters set.
It uses the Codeforces API and Question data to give away the results and redirects to the respective question.`;

autocorrect.innerHTML = `The project aims at building a prototype modal which corrects words upto one edits. The Modal uses 
basic NLP concepts of creating a Counter/Probability Matrix. The Framework for this modal was built from scratch. 4 edit functions
were built namely Delete,Insert,Replace and Swap.Vocablary is made using Shakesphere.txt, Default vocabulary words available in nltk.corpus
and a personalized vocabulary with Proper Nouns and Person's Names. There were a total of 2,14,677 words in the vocabulary.`;

bullet.innerHTML = `This was my first project based on a real-life scenerio. I built this project as an application which is used
by a third party. I developed this project in my Sophomore year using various computer vision techniques and Image Sensing
technologies like CNN, 3-D imaging, etc. The modal predicts 5 different kinds of bullets from the image of the bullet mark and
it predicts with a accuracy of 95%.`;

shopping.innerHTML = `It was a prediction modal. It predicts the list of two other items/products which are frequently bought 
together whenever an item/product is added to the cart. The modal was trained over a Deep neural network containing more than 1
million nodes.`;
