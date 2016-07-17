'use strict';

const backgroundColor = '#282a36';
const foregroundColor = '#f8f8f2';

const borderColor = backgroundColor;
const cursorColor = foregroundColor;

const cyan = '#8be9fd';
const green = '#50fa7b';
const orange = '#ffb86c';
const pink = '#ff79c6';
const purple = '#bd93f9';
const red = '#ff5555';
const yellow = '#f1fa8c';

exports.decorateConfig = config => {

  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors: [
      cyan,
      green,
      orange,
      pink,
      purple,
      red,
      yellow
    ],
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        mix-blend-mode: difference;
      }
    `,
    css: `
      ${config.css || ''}
      .tab_active:before {
        font-weight: bold;
        border-color: rgba(255, 106, 193, 0.25);
      }
    `
  });
};
