export const theme = 'dark';
//const theme = 'light';
export const lightTheme = theme === 'light';

export const color = lightTheme ? 'white' : '#090D17';
export const color2 = lightTheme ? 'white' : '#090D17';
export const color3 = lightTheme ? '#053c18' : '#52CE99';

if (lightTheme) {
  document.body.style.background = '#e1eaee';
  document.body.style.color = '#090D17';
}

export const lightBlueBackground = `background-color: ${color}`;
export const bgColor2 = `background-color: ${color2}`;
export const greenBackgroundColor = `background-color: ${color3}`;

export const fontColorGreen  = `color: #03A9F4`
export const fontColorWhite  = `color: #fff`
export const subtleBoxShadow = `box-shadow: 0px 0px 5px 1px ${lightTheme ? '#a9b6ff' : '#121d5b'}`
export const greenBoxShadow  = `box-shadow: 0px 0px 4px 2px #52CE99`
export const redBoxShadow    = `box-shadow: 0px 0px 2px 2px #CA3F29`
export const crimson = `color: #B23925`
export const seagreen = `color: #52CE99`

export const fontSizeBig = 'font-size: 2em'
export const fontSize1 = 'font-size: 1.5em'
export const fontSize2 = 'font-size: 1em'
export const fontSize3 = 'font-size: .75em'

export const textCenter = 'text-align: center'
