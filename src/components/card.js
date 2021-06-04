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


const divCard = document.createElement('div');
const divHeadLine = document.createElement('div');
const divAuthor = document.createElement('div');
const divImage = document.createElement('div');
const photo = document.createElement('img');
const authorName = document.createElement('span');

divCard.appendChild(divHeadLine);
divCard.appendChild(divAuthor);
divAuthor.appendChild(divImage);
divImage.appendChild(photo);
divAuthor.appendChild(authorName);

divCard.classList.add('card');
divHeadLine.classList.add('headline');
divAuthor.classList.add('author');
divImage.classList.add('img-container');

photo.src = article.authorPhoto;

divHeadLine.textContent = article.headline;
authorName.textContent = article.authorName;

divCard.addEventListener('click', e => {
  console.log(article.headline)
});

return divCard;
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

  // const arr = ["javascript", "bootstrap", "technology", "jquery", "node"];
  
  axios
  .get('https://lambda-times-api.herokuapp.com/articles')
  .then((res) => {
    console.log(res)
    selector = document.querySelector('.cards-container')
    const javascript = res.data.articles.javascript
    console.log(javascript)
    javascript.forEach(obj => {
      const javaCard = Card(obj)
      selector.appendChild(javaCard)
    })
    const bootstrap = res.data.articles.bootstrap
    bootstrap.forEach(obj => {
      const bootCard = Card(obj)
      selector.appendChild(bootCard)
    })
    const technology = res.data.articles.technology
    technology.forEach(obj => {
      const techCard = Card(obj)
      selector.appendChild(techCard)
    })
    const jquery = res.data.articles.jquery
    jquery.forEach(obj => {
      const jQueryCard = Card(obj)
      selector.appendChild(jQueryCard)
    })
    const node = res.data.articles.node
    node.forEach(obj => {
      const nodeCard = Card(obj)
      selector.appendChild(nodeCard)
    })
    
    // javascript
    // selector.appendChild(javascript)
    // const art = res.data.articles
    // console.log(art);
    // const { 'javascript' }
    
    // arr.forEach(topic => {
    //   res.data.articles[topic].forEach(el =>{
    //     const newDiv = Card(el);
    //     document.querySelector(selector).appendChild(newDiv);
    //   });
    // });
  })
  .catch((err) => {
    console.log(err);
  });
}

  // selector = document.querySelector('.cards-container')

  // axios
  // .get('https://lambda-times-api.herokuapp.com/articles')
  // .then((res) => {
  //   console.log(res);
  //   // Array.forEach((topic) => {
  //   //   const articles = res.data.articles.forEach
  //   // })
  //   const obj = res.data.articles
  //   Object.keys(obj).forEach(key => {
  //     console.log(key, obj[key])
  //     key.forEach()
      // console.log(key)
      // javaScript = val[0]
      // console.log(javaScript)
    // })
    // const article = res.data.articles;
    // article.forEach(({}) => {
    //   const articleCard = Card({ authorName, authorPhoto, headline })
    //   selector.appendChildren(articleCard)
    // })
    // const javaScript = articles.javascript;
    // const bootStrap = articles.bootstrap;
    // const technology = articles.technology;
    // const jQuery = articles.jquery;
    // const nodeJs = articles.node;
    // console.log(articles)

    
    // selector.appendChild(Card(javaScript[0]));
    // selector.appendChild(Card(javaScript[1]));
    // selector.appendChild(Card(javaScript[2]));
    // selector.appendChild(Card(javaScript[3]));
    // selector.appendChild(Card(bootStrap[0]));
    // selector.appendChild(Card(bootStrap[1]));
    // selector.appendChild(Card(bootStrap[2]));
    // selector.appendChild(Card(technology[0]));
    // selector.appendChild(Card(technology[1]));
    // selector.appendChild(Card(technology[2]));
    // selector.appendChild(Card(jQuery[0]));
    // selector.appendChild(Card(jQuery[1]));
    // selector.appendChild(Card(jQuery[2]));
    // selector.appendChild(Card(nodeJs[0]));
    // selector.appendChild(Card(nodeJs[1]));
//   })
//   .catch(err => {
//     console.log(err)
//   })
//   .finally(() => {
//     console.log("Finsihed")
//   })
// }

export { Card, cardAppender }
