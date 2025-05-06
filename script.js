async function fetchData() {
  const res = await fetch('data.json');
  return res.json();
}

function showRandomItem(items) {
  const random = items[Math.floor(Math.random() * items.length)];
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <h2>${random.title}</h2>
    <img src="${random.image}" alt="${random.title}" />
    <p><a href="${random.link}" target="_blank">詳細を見る</a></p>
  `;
}

document.getElementById('show-button').addEventListener('click', async () => {
  const items = await fetchData();
  showRandomItem(items);
});
