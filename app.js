const getJoke = async () => {
  try {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
  } catch (e) {
    throw e;
  }
};

// getDadJoke();
const button = document.querySelector('button');
const joke_container = document.querySelector('#joke_container');

button.addEventListener('click', async () => {
  const newJoke = await getJoke();
  const newLi = document.createElement('li');
  newLi.textContent = newJoke;
  joke_container.append(newLi);
});
