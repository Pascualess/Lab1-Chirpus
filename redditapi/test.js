function apiCall() {
    let url = `https://www.reddit.com/r/aww/.json`;
    fetch(url)
      .then((response) => response.json())
      .then((redditData) => {
        for (let i = 0; i < redditData.result.length; i++) {
  
          const post = redditData.data.children[0].data
          const title = document.createElement(`h1`);
          // title.innerText = redditData[i].name;
          title.innerText = post.title[i];
          
  
          const img = document.createElement(`img`)
          img.src = post.thumbnail
  
          
  
          const url = document.createElement(`a`)
          url.innertext = post.url
  
          document.body.appendChild(title);
          document.body.appendChild(img);
          document.body.appendChild(url);
        }
      });
  }
  apiCall();
  