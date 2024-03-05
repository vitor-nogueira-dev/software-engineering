const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    fillList(data);
  });

function fillList(data) {
  const listContainer = document.querySelector('#list-container');
  const ul = document.createElement('ul');
  data.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item.name;
    ul.appendChild(li);
  });
  listContainer.appendChild(ul);
}
