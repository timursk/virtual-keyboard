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

function initKeyboard(container) {
  rows.forEach((rowData) => {
    const rowContainer = document.createElement('div');
    rowContainer.className = 'row';

    rowData.forEach(({ui, shiftUi, switchUi, switchShiftUi, keyClass}) => {
      const keyContainer = document.createElement('div');
      keyContainer.className = `key ${keyClass}`;

      const engUi = document.createElement('span');
      engUi.className = `eng`;
      engUi.innerText = ui;

      const rusUi = document.createElement('span');
      rusUi.className = `rus hidden`;
      rusUi.innerText = switchUi || ui;

      const engShiftUi = document.createElement('span');
      engShiftUi.className = `engShift hidden`;
      engShiftUi.innerText = shiftUi || (ui.length === 1 ? ui.toUpperCase() : ui);

      const rusShiftUi = document.createElement('span');
      rusShiftUi.className = `rusShift hidden`;
      rusShiftUi.innerText = switchShiftUi || shiftUi || (ui.length === 1 ? ui.toUpperCase() : ui);
      
      const engCaps = document.createElement('span');
      engCaps.className = `engCaps hidden`;
      engCaps.innerText = (ui.length === 1) ? ui.toUpperCase() : ui;

      const rusCaps = document.createElement('span');
      rusCaps.className = `rusCaps hidden`;
      const rusCapsUi = switchUi || ui; 
      rusCaps.innerText = (rusCapsUi.length === 1) ? rusCapsUi.toUpperCase() : rusCapsUi;

      const engCapsShift = document.createElement('span');
      engCapsShift.className = `engCapsShift hidden`;
      engCapsShift.innerText = shiftUi || ui;

      const rusCapsShift = document.createElement('span');
      rusCapsShift.className = `rusCapsShift hidden`;
      rusCapsShift.innerText = switchShiftUi || shiftUi || ui;
      
      keyContainer.append(engUi, rusUi, engShiftUi, rusShiftUi, engCaps, rusCaps, engCapsShift, rusCapsShift);
      rowContainer.append(keyContainer);
    });

    container.append(rowContainer);
  });
}

function updateKeyboard(container) {
  let activeClassName = '';

  if (state.isEng) {
    activeClassName += 'eng';
  }
  else if (state.isRus) {
    activeClassName += 'rus';
  }

  if (state.isCapsLock) {
    activeClassName += 'Caps';
  }
  if (state.isShift) {
    activeClassName += 'Shift';
  }

  switchKeyboard(container, activeClassName)
}

function switchKeyboard(container, activeClassName) {
  const keyboardRows = container.children;

  for (let i = 0; i < keyboardRows.length; i++) {
    const row = keyboardRows[i];
    const rowKeys = row.children;

    for (let j = 0; j < rowKeys.length; j++) {
      const keyContainer = rowKeys[j];
      const keySymbols = keyContainer.children;

      for (let n = 0; n < keySymbols.length; n++) {
        const symbol = keySymbols[n];
        if (symbol.classList.contains(activeClassName)) {
          symbol.classList.remove('hidden');
        }
        else {
          symbol.classList.add('hidden');
        }
      }
    }
  }
}

const state = {
  isShift: false,
  isCapsLock: false,
  isCapsPressed: false,
  isEng: true,
  isRus: false,
}
const { keyboard, textarea } = init();
initKeyboard(keyboard);

document.addEventListener('keydown', (e) => {
  const keyClassName = e.code;
  
  if (keyClassName === 'CapsLock') {
    if (!state.isCapsPressed) {
      const keyboardKey = keyboard.querySelector(`.${keyClassName}`);
      keyboardKey.classList.toggle('active');
      state.isCapsLock = keyboardKey.classList.contains('active');
      updateKeyboard(keyboard);
      state.isCapsPressed = true;
    }
    return;
  }
  else if ((keyClassName === 'ShiftRight') || (keyClassName === 'ShiftLeft')) {
    if (!state.isShift) {
      state.isShift = true;
      updateKeyboard(keyboard);
    }
  }
  else if (keyClassName === 'Tab') {
    e.preventDefault();
    textarea.focus();
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    
    textarea.value = textarea.value.slice(0, start) + '\t' + textarea.value.slice(end);
    textarea.selectionStart = textarea.selectionEnd = start + 1;
    
  }
  
  textarea.focus();
  const keyboardKey = keyboard.querySelector(`.${keyClassName}`);
  keyboardKey?.classList.add('active');
});

document.addEventListener('keyup', (e) => {  
  const keyClassName = e.code;

  if (keyClassName === 'CapsLock') {
    state.isCapsPressed = false;
    return;  
  }
  else if ((keyClassName === 'ShiftRight') || (keyClassName === 'ShiftLeft')) {
    if (state.isShift) {
      state.isShift = false;
      updateKeyboard(keyboard);
    }
  }
  
  const keyboardKey = keyboard.querySelector(`.${keyClassName}`);
  keyboardKey.classList.remove('active');
});