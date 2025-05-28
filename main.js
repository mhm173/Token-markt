// JavaScript لتحميل التطبيقات من JSON
fetch('data/apps.json')
.then(res => res.json())
.then(data => {
  const container = document.getElementById('app-list');
  data.forEach(app => {
    const div = document.createElement('div');
    div.innerHTML = `<a href='apps/${app.slug}.html'>${app.name}</a>`;
    container.appendChild(div);
  });
});