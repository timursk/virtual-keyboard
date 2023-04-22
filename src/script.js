function init() {
  const root = document.createElement('main');
  root.className = 'main';

  const title = document.createElement('h1');
  title.className = 'title';
  title.innerText = 'Virtual keyboard';
  root.append(title);

  const textarea = document.createElement('textarea');
  textarea.className = 'textarea';
  root.append(textarea);

  const description = document.createElement('p');
  description.className = 'description';
  description.innerHTML = 'Keyboard was created in the <b>Windows</b> OS';
  root.append(description);

  const info = document.createElement('p');
  info.className = 'info';
  info.innerHTML = 'Language switch combination: <b>Left Shift + Alt</b>';
  root.append(info);

  document.body.append(root);
}

init();
