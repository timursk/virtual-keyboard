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
  info.innerHTML = 'Language switch combination: hold <b>Left Shift + Alt</b>';
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
      rusShiftUi.innerText = switchShiftUi || shiftUi || 
          (switchUi && switchUi.length === 1 ? switchUi.toUpperCase() : switchUi) ||
          (ui.length === 1 ? ui.toUpperCase() : ui);
      
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
      rusCapsShift.innerText = switchShiftUi || shiftUi || switchUi || ui;
      
      keyContainer.append(engUi, rusUi, engShiftUi, rusShiftUi, engCaps, rusCaps, engCapsShift, rusCapsShift);
      rowContainer.append(keyContainer);
    });

    container.append(rowContainer);
  });
}

function updateKeyboard(container) {
  let activeClassName = '';
  const { isEng, isRus, isCapsLock, isShift } = state;

  if (isEng) {
    activeClassName += 'eng';
  }
  else if (isRus) {
    activeClassName += 'rus';
  }

  if (isCapsLock) {
    activeClassName += 'Caps';
  }
  if (isShift) {
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

function insertInKeyboard(val) {
  textarea.focus();
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  
  textarea.value = `${textarea.value.slice(0, start)}${val}${textarea.value.slice(end)}`;
  textarea.selectionStart = textarea.selectionEnd = start + 1;
}

function removeInKeyboard(isBack) {
  textarea.focus();
  const start = textarea.selectionStart - (isBack ? 1 : 0);
  const end = textarea.selectionEnd + (!isBack ? 1 : 0);
  
  textarea.value = `${textarea.value.slice(0, start)}${textarea.value.slice(end)}`;
  textarea.selectionStart = textarea.selectionEnd = start;
}

function onKeyPressed(keyClass, keyContainer) {
  const isEnabled = keyContainer?.classList.contains('active');

  if (keyClass === 'Tab') {
    insertInKeyboard('\t');
  }
  else if (keyClass === 'CapsLock') {
    state.isCapsLock = isEnabled;
    updateKeyboard(keyboard);
  }
  else if ((keyClass === 'ShiftLeft') || (keyClass === 'ShiftRight')) {
    state.isShift = isEnabled;
    updateKeyboard(keyboard);
  }
  else if (keyClass === 'Enter') {
    insertInKeyboard('\n');
  }
  else if (keyClass === 'Backspace') {
    removeInKeyboard(true);
  }
  else if (keyClass === 'Delete') {
    removeInKeyboard(false);    
  }
  else if ((keyClass === 'AltLeft') || (keyClass === 'AltRight')) {
    if (state.isShift) {
      state.isEng = !state.isEng; 
      state.isRus = !state.isRus;
      updateKeyboard(keyboard);

      localStorage.setItem('lang', state.isEng ? 'eng' : 'rus');
    }
  }
  else if ((keyClass === 'ControlLeft') || (keyClass === 'ControlRight')) {
    // nothing
  }
  else if (keyClass === 'Space') {
    insertInKeyboard(' ');
  }
  else if (keyClass === 'MetaLeft') {
    // nothing 
  }
  else if (keyContainer) {
    let val = '';
    const keySymbols = keyContainer.children;
    for (let i = 0; i < keySymbols.length; i++) {
      const keySymbol = keySymbols[i];
      if (keySymbol.classList.contains('hidden')) {
        continue;
      }

      val = keySymbol.innerText;
      break;
    }

    insertInKeyboard(val);
  }
}

const state = {
  isShift: false,
  isCapsLock: false,
  isEng: true,
  isRus: false,
}

const savedLang = localStorage.getItem('lang');
if (savedLang === 'eng') {
  state.isEng = true;
  state.isRus = false;
}
else if (savedLang === 'rus') {
  state.isEng = false;
  state.isRus = true;
}

const { keyboard, textarea } = init();
initKeyboard(keyboard);
updateKeyboard(keyboard);

document.addEventListener('keydown', (e) => {
  const { code: keyClassName, repeat } = e;
  
  if (keyClassName === 'CapsLock') {
    if (!repeat) {
      const keyboardKey = keyboard.querySelector(`.${keyClassName}`);
      keyboardKey.classList.toggle('active');
      state.isCapsLock = keyboardKey.classList.contains('active');
      updateKeyboard(keyboard);
    }
    return;
  }
  else if ((keyClassName === 'ShiftRight') || (keyClassName === 'ShiftLeft')) {
    if (!repeat) {
      state.isShift = !state.isShift;
      updateKeyboard(keyboard);
    }
  }
  
  e.preventDefault();
  textarea.focus();
  const keyboardKey = keyboard.querySelector(`.${keyClassName}`);
  keyboardKey?.classList.add('active');
  onKeyPressed(keyClassName, keyboardKey);
});

document.addEventListener('keyup', (e) => {  
  const { code: keyClassName } = e;

  if (keyClassName === 'CapsLock') {
    return;  
  }
  else if ((keyClassName === 'ShiftRight') || (keyClassName === 'ShiftLeft')) {
    if (state.isShift) {
      state.isShift = false;
      updateKeyboard(keyboard);
    }
  }
  
  const keyboardKey = keyboard.querySelector(`.${keyClassName}`);
  keyboardKey?.classList.remove('active');
});

let lastClickedTarget = null;

keyboard.addEventListener('mousedown', (e) => {
  const { target } = e;
  const { parentElement } = target;
  const isTargetKey = target.classList.contains('key'); 
  const isParentKey = parentElement.classList.contains('key'); 

  if (!isTargetKey && !isParentKey) {
    return;
  }

  const keyContainer = isTargetKey ? target : parentElement;
  lastClickedTarget = keyContainer;
  keyContainer.classList.toggle('active');
  const isEnabled = keyContainer.classList.contains('active');
  const keyClass = keyContainer.classList[keyContainer.classList.length - (isEnabled ? 2 : 1)];

  onKeyPressed(keyClass, keyContainer);
});

keyboard.addEventListener('mouseup', (e) => {
  if (lastClickedTarget && lastClickedTarget.classList.contains('active')) {
    if (lastClickedTarget.classList.contains('CapsLock')) {
      // nothing
    }
    else if (lastClickedTarget.classList.contains('ShiftLeft') || lastClickedTarget.classList.contains('ShiftRight')) {
      state.isShift = !state.isShift;
      updateKeyboard(keyboard);
      lastClickedTarget.classList.remove('active');
    }
    else {
      lastClickedTarget.classList.remove('active');
    }
    lastClickedTarget = null;
  }
});

// TODO: на клик по клавишам сделать так же как и клик мышкой тк не все состояния сохраняются(например капс клавишой нажать а шифт мышкой)