import { apply, CSSRules } from 'twind';

// Based on https://github.com/tigt/mini-svg-data-uri/blob/master/index.js (License MIT)
const specialHexEncode = (match: string): string => {
  switch (
    match // Browsers tolerate these characters, and they're frequent
  ) {
    case '%20':
      return ' ';
    case '%3D':
      return '=';
    case '%3A':
      return ':';
    case '%2F':
      return '/';
    default:
      return match.toLowerCase(); // compresses better
  }
};

const svgToDataUri = (svgString: string): string => {
  return (
    'data:image/svg+xml,' +
    encodeURIComponent(
      svgString.trim().replace(/\s+/g, ' ').replace(/"/g, "'")
    ).replace(/%[\dA-F]{2}/g, specialHexEncode)
  );
};

const toggle = (): CSSRules => ({
  '&': apply`
    appearance-none p-0 inline-block align-middle select-none
    flex-shrink-0
    ${() => ({ colorAdjust: 'exact', backgroundOrigin: 'border-box' })}
  `,
  '&:focus': apply`outline-none`,
  '&:checked': apply`bg(center no-repeat) ${() => ({
    backgroundSize: `100% 100%`,
  })}`,
});

const checkbox = (): CSSRules => ({
  '&': apply`rounded-none ${() => ({
    backgroundSize: `25%`,
  })}`,
  '&:checked': apply`border-transparent bg-current ${() => ({
    backgroundImage: `url("${svgToDataUri(
      `<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>`
    )}")`,
    backgroundSize: `100%`,
    '&:disabled': {
      backgroundImage: `url("${svgToDataUri(
        `<svg viewBox="0 0 16 16" fill='rgba(255, 255, 255, 0.5)' xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>`
      )}")`,
    },
  })}`,
  '&:indeterminate': apply`border-transparent bg(current center no-repeat) ${() => ({
    backgroundImage: `url("${svgToDataUri(
      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>`
    )}")`,
    backgroundSize: `100% 100%`,
    '&:disabled': {
      backgroundImage: `url("${svgToDataUri(
        `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="rgba(255, 255, 255, 0.5)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>`
      )}")`,
    },
  })}`,
  '&:indeterminate:hover,&:indeterminate:focus': apply`border-transparent bg-current`,
  '&:checked:hover,&:checked:focus': apply`border-transparent bg-current`,
});

const radio = (): CSSRules => ({
  '&': apply`rounded-full ${() => ({
    display: `flex`,
    alignItems: 'center',
    justifyContent: 'center',
    transitionTimingFunction: 'ease',
    transitionProperty: 'box-shadow, border-color',
    transitionDuration: '200ms',
  })}`,
  '&::before': {
    content: `''`,
    display: 'block',
    borderRadius: '50%',
    height: 0,
    width: 0,
    transitionTimingFunction: 'ease',
    transitionProperty: 'height, width',
    transitionDuration: '200ms',
  },
  '&:checked::before': {
    height: '50%',
    width: '50%',
  },
});

export const formCheckbox = apply(toggle, checkbox);
export const formRadio = apply(toggle, radio);
