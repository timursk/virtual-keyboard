import rows from './data.js';

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

  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  root.append(keyboard);


  const description = document.createElement('p');
  description.className = 'description';
  description.innerHTML = 'Keyboard was created in the <b>Windows</b> OS';
  root.append(description);

  const info = document.createElement('p');
  info.className = 'info';
  info.innerHTML = 'Language switch combination: <b>Left Shift + Alt</b>';
  root.append(info);

  document.body.append(root);

  return {
    root,
    title,
    textarea,
    keyboard,
    description,
    info,
  };
}

function initTextarea(container) {
  rows.forEach((rowData) => {
    const rowContainer = document.createElement('div');
    rowContainer.className = 'row';

    rowData.forEach(({ui, shiftUi, switchUi, keyClass}) => {
      const keyContainer = document.createElement('div');
      keyContainer.className = `key ${keyClass}`;

      // !!!

      rowContainer.append(keyContainer);
    });

    container.append(rowContainer);
  });
}

const { keyboard } = init();
initTextarea(keyboard);

document.addEventListener('keydown', (e) => {
  console.log(e);
  // textarea.focus();
});
