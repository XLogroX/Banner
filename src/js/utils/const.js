const RENDER_POSITION = {
  BEFOREEND: 'beforeend',
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  AFTEREND: 'afterend',
};

const BANNER_WIDTH = 298;
const BANNER_HEIGHT = 398;

const ROWS_LIMIT = 3;

const bannerStyle = {
  'display': 'flex',
  'padding': '10px',
  'backgroundSize': 'cover',
  'backgroundPosition': '50% 50%',
  'flexDirection': 'column',
  'width': BANNER_WIDTH + 'px',
  'minHeight': BANNER_HEIGHT + 'px',
  'fontSize': '30px',
  'textDecoration': 'none',
  'color': '#000000',
};

const textContainerStyle = {
  'margin': '0',
  'marginTop': 'auto',
  'wordBreak': 'break-word',
};

export {RENDER_POSITION, BANNER_HEIGHT, BANNER_WIDTH, ROWS_LIMIT, bannerStyle, textContainerStyle};
