const row1 = [
  {
    ui: '`', shiftUi: '~', switchUi: 'ё', keyClass: 'Backquote',
  },
  { ui: '1', shiftUi: '!', keyClass: 'Digit1' },
  { ui: '2', shiftUi: '@', keyClass: 'Digit2' },
  { ui: '3', shiftUi: '#', keyClass: 'Digit3' },
  { ui: '4', shiftUi: '$', keyClass: 'Digit4' },
  { ui: '5', shiftUi: '%', keyClass: 'Digit5' },
  { ui: '6', shiftUi: '^', keyClass: 'Digit6' },
  { ui: '7', shiftUi: '&', keyClass: 'Digit7' },
  { ui: '8', shiftUi: '*', keyClass: 'Digit8' },
  { ui: '9', shiftUi: '(', keyClass: 'Digit9' },
  { ui: '0', shiftUi: ')', keyClass: 'Digit0' },
  { ui: '-', shiftUi: '_', keyClass: 'Minus' },
  { ui: '=', shiftUi: '+', keyClass: 'Equal' },
  { ui: 'Backspace', keyClass: 'Backspace' }];

const row2 = [
  { ui: 'tab', keyClass: 'Tab' },
  { ui: 'q', switchUi: 'й', keyClass: 'KeyQ' },
  { ui: 'w', switchUi: 'ц', keyClass: 'KeyW' },
  { ui: 'e', switchUi: 'у', keyClass: 'KeyE' },
  { ui: 'r', switchUi: 'к', keyClass: 'KeyR' },
  { ui: 't', switchUi: 'е', keyClass: 'KeyT' },
  { ui: 'y', switchUi: 'н', keyClass: 'KeyY' },
  { ui: 'u', switchUi: 'г', keyClass: 'KeyU' },
  { ui: 'i', switchUi: 'ш', keyClass: 'KeyI' },
  { ui: 'o', switchUi: 'щ', keyClass: 'KeyO' },
  { ui: 'p', switchUi: 'з', keyClass: 'KeyP' },
  {
    ui: '[', shiftUi: '{', switchUi: 'х', keyClass: 'BracketLeft',
  },
  {
    ui: ']', shiftUi: '}', switchUi: 'ъ', keyClass: 'BracketRight',
  },
  { ui: '\\', shiftUi: '|', keyClass: 'Backslash' },
  { ui: 'del', keyClass: 'Delete' },
];

const row3 = [
  { ui: 'capslock', keyClass: 'CapsLock' },
  { ui: 'a', switchUi: 'ф', keyClass: 'KeyA' },
  { ui: 's', switchUi: 'ы', keyClass: 'KeyS' },
  { ui: 'd', switchUi: 'в', keyClass: 'KeyD' },
  { ui: 'f', switchUi: 'а', keyClass: 'KeyF' },
  { ui: 'g', switchUi: 'п', keyClass: 'KeyG' },
  { ui: 'h', switchUi: 'р', keyClass: 'KeyH' },
  { ui: 'j', switchUi: 'о', keyClass: 'KeyJ' },
  { ui: 'k', switchUi: 'л', keyClass: 'KeyK' },
  { ui: 'l', switchUi: 'д', keyClass: 'KeyL' },
  {
    ui: ';', shiftUi: ':', switchUi: 'ж', keyClass: 'Semicolon',
  },
  {
    ui: "'", shiftUi: '"', switchUi: 'э', keyClass: 'Quote',
  },
  { ui: 'enter', keyClass: 'Enter' },
];

const row4 = [
  { ui: 'shift', keyClass: 'ShiftLeft' },
  { ui: 'z', switchUi: 'я', keyClass: 'KeyZ' },
  { ui: 'x', switchUi: 'ч', keyClass: 'KeyX' },
  { ui: 'c', switchUi: 'с', keyClass: 'KeyC' },
  { ui: 'v', switchUi: 'м', keyClass: 'KeyV' },
  { ui: 'b', switchUi: 'и', keyClass: 'KeyB' },
  { ui: 'n', switchUi: 'т', keyClass: 'KeyN' },
  { ui: 'm', switchUi: 'ь', keyClass: 'KeyM' },
  {
    ui: ',', shiftUi: '<', switchUi: 'б', keyClass: 'Comma',
  },
  {
    ui: '.', shiftUi: '>', switchUi: 'ю', keyClass: 'Period',
  },
  {
    ui: '/', shiftUi: '?', switchUi: '.', keyClass: 'Slash',
  },
  { ui: '↑', keyClass: 'ArrowUp' },
  { ui: 'shift', keyClass: 'ShiftRight' },
];

const row5 = [
  { ui: 'ctrl', keyClass: 'ControlLeft' },
  { ui: 'win', keyClass: 'MetaLeft' },
  { ui: 'alt', keyClass: 'AltLeft' },
  { ui: '_____', keyClass: 'Space' },
  { ui: 'alt', keyClass: 'AltRight' },
  { ui: '←', keyClass: 'ArrowLeft' },
  { ui: '↓', keyClass: 'ArrowDown' },
  { ui: '→', keyClass: 'ArrowRight' },
  { ui: 'ctrl', keyClass: 'ControlRight' },
];

const rows = [row1, row2, row3, row4, row5];

export default rows;
