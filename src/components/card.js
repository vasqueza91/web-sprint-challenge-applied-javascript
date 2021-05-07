import axios from 'axios'
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //


const dCard = document.createElement('div');
const dHeadLine = document.createElement('div');
const dAuthor = document.createElement('div');
const dImage = document.createElement('div');
const photo = document.createElement('img');
const aName = document.createElement('span');

dCard.appendChild(dHeadLine);
dCard.appendChild(dAuthor);
dAuthor.appendChild(dImage);
dImage.appendChild(photo);
dAuthor.appendChild(aName);

dCard.classList.add('card');
dHeadLine.classList.add('headline');
dAuthor.classList.add('author');
dImage.classList.add('img-container');

photo.src = article.authorPhoto;

dHeadLine.textContent = article.headline;
aName.textContent = article.authorName;

dCard.addEventListener('click', e => {
  console.log(article.headline)
});

return dCard;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const arr = ["javascript", "bootstrap", "technology", "jquery", "node"];
  axios
  .get('https://lambda-times-api.herokuapp.com/articles')
  .then((res) => {
    console.log(res);
    arr.forEach(topic => {
      res.data.articles[topic].forEach(el =>{
        const newDiv = Card(el);
        document.querySelector(selector).appendChild(newDiv);
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });
}

export { Card, cardAppender }
