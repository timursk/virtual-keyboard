const row1 = [
  {
    ui: '`', shiftUi: '~', switchUi: 'ё', class: 'Backquote',
  },
  { ui: '1', shiftUi: '!', class: 'Digit1' },
  { ui: '2', shiftUi: '@', class: 'Digit2' },
  { ui: '3', shiftUi: '#', class: 'Digit3' },
  { ui: '4', shiftUi: '$', class: 'Digit4' },
  { ui: '5', shiftUi: '%', class: 'Digit5' },
  { ui: '6', shiftUi: '^', class: 'Digit6' },
  { ui: '7', shiftUi: '&', class: 'Digit7' },
  { ui: '8', shiftUi: '*', class: 'Digit8' },
  { ui: '9', shiftUi: '(', class: 'Digit9' },
  { ui: '0', shiftUi: ')', class: 'Digit0' },
  { ui: '-', shiftUi: '_', class: 'Minus' },
  { ui: '=', shiftUi: '+', class: 'Equal' },
  { ui: 'Backspace', class: 'Backspace' }];

const row2 = [
  { ui: 'Tab', class: 'Tab' },
  { ui: 'q', switchUi: 'й', class: 'KeyQ' },
  { ui: 'w', switchUi: 'ц', class: 'KeyW' },
  { ui: 'e', switchUi: 'у', class: 'KeyE' },
  { ui: 'r', switchUi: 'к', class: 'KeyR' },
  { ui: 't', switchUi: 'е', class: 'KeyT' },
  { ui: 'y', switchUi: 'н', class: 'KeyY' },
  { ui: 'u', switchUi: 'г', class: 'KeyU' },
  { ui: 'i', switchUi: 'ш', class: 'KeyI' },
  { ui: 'o', switchUi: 'щ', class: 'KeyO' },
  { ui: 'p', switchUi: 'з', class: 'KeyP' },
  {
    ui: '[', shiftUi: '{', switchUi: 'х', class: 'BracketLeft',
  },
  {
    ui: ']', shiftUi: '}', switchUi: 'ъ', class: 'BracketRight',
  },
  { ui: '\\', shiftUi: '|', class: 'Backslash' },
  { ui: 'Del', class: 'Del' },
];

const row3 = [
  { ui: 'CapsLock', class: 'CapsLock' },
  { ui: 'a', switchUi: 'ф', class: 'KeyA' },
  { ui: 's', switchUi: 'ы', class: 'KeyS' },
  { ui: 'd', switchUi: 'в', class: 'KeyD' },
  { ui: 'f', switchUi: 'а', class: 'KeyF' },
  { ui: 'g', switchUi: 'п', class: 'KeyG' },
  { ui: 'h', switchUi: 'р', class: 'KeyH' },
  { ui: 'j', switchUi: 'о', class: 'KeyJ' },
  { ui: 'k', switchUi: 'л', class: 'KeyK' },
  { ui: 'l', switchUi: 'д', class: 'KeyL' },
  {
    ui: ';', shiftUi: ':', switchUi: 'ж', class: 'Semicolon',
  },
  {
    ui: "'", shiftUi: '"', switchUi: 'э', class: 'Quote',
  },
  { ui: 'Enter', class: 'Enter' },
];

const row4 = [
  { ui: 'Shift', class: 'ShiftLeft' },
  { ui: 'z', switchUi: 'я', class: 'KeyZ' },
  { ui: 'x', switchUi: 'ч', class: 'KeyX' },
  { ui: 'c', switchUi: 'с', class: 'KeyC' },
  { ui: 'v', switchUi: 'м', class: 'KeyV' },
  { ui: 'b', switchUi: 'и', class: 'KeyB' },
  { ui: 'n', switchUi: 'т', class: 'KeyN' },
  { ui: 'm', switchUi: 'ь', class: 'KeyM' },
  {
    ui: ',', shiftUi: '<', switchUi: 'б', class: 'Comma',
  },
  {
    ui: '.', shiftUi: '>', switchUi: 'ю', class: 'Period',
  },
  {
    ui: '/', shiftUi: '?', switchUi: '.', class: 'Slash',
  },
  { ui: 'UP', class: 'ArrowUp' },
  { ui: 'Shift', class: 'ShiftRight' },
];

const row5 = [
  { ui: 'Ctrl', class: 'ControlLeft' },
  { ui: 'Win', class: 'MetaLeft' },
  { ui: 'Alt', class: 'Alt' },
  { ui: 'SPACE', class: 'Space' },
  { ui: 'Alt', class: 'AltRight' },
  { ui: 'Left', class: 'ArrowLeft' },
  { ui: 'Down', class: 'ArrowDown' },
  { ui: 'Right', class: 'ArrowRight' },
  { ui: 'Ctrl', class: 'ControlRight' },
];

const rows = [row1, row2, row3, row4, row5];

export default { rows };
