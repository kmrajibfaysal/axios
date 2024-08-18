// const getJoke = async () => {
//   try {
//     const config = { headers: { Accept: 'application/json' } };
//     const res = await axios.get('https://icanhazdadjoke.com/', config);
//     return res.data.joke;
//   } catch (e) {
//     throw e;
//   }
// };

// // getDadJoke();
// const button = document.querySelector('button');
// const joke_container = document.querySelector('#joke_container');

// button.addEventListener('click', async () => {
//   const newJoke = await getJoke();
//   const newLi = document.createElement('li');
//   newLi.textContent = newJoke;
//   joke_container.append(newLi);
// });

const form = document.querySelector('form');
const search_box = document.querySelector('#search_box');
const spinner = document.querySelector('#spinner');
const searchResultImage = document.querySelector('#searchResultImage');

const getSearchResult = async (q) => {
  const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${q}`);
  // console.log(res);
  // for (let s of res.data) {
  //   console.log(s.show.image.medium);
  // }
  // console.log( res.data[0].show.image.medium)
  // console.log(res.data);
  return res;
};

// getSearchResult('dark');

form.addEventListener('submit', async (e) => {
  searchResultImage.innerHTML = '';
  spinner.classList.add('lds-ring');
  e.preventDefault();
  const searchResult = await getSearchResult(search_box.value);
  const newDiv = document.createElement('div');

  // console.log(searchResult);
  for (let result of searchResult.data) {
    // console.log(x);
    // result.show.image && console.log(result.show.image.medium);
    const newImg = document.createElement('img');
    newImg.src = result.show.image.medium;
    result.show.image.medium && newDiv.append(newImg);
  }
  search_box.value = '';
  spinner.classList.remove('lds-ring');
  searchResultImage.append(newDiv);
});
