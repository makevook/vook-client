const semantic = {
  /* Primary */
  'semantic-primary-normal': '#5D5CE5',
  'semantic-primary-strong': '#5554D0',
  'semantic-primary-heavy': '#4241A3',
  /* label */
  'semantic-label-title': '#161719',
  'semantic-label-normal': '#161719',
  'semantic-label-assistive': 'rgba(22, 23, 25, 0.25)',
  'semantic-label-alternative': 'rgba(22, 23, 25, 0.6)',
  'semantic-label-disabled': 'rgba(22, 23, 25, 0.16)',
  /* line  */
  'semantic-line-normal': 'rgba(112, 115, 124, 0.22)',
}

const link = {
  'link-blue': '#006AFF',
}

const common = {
  'common-white': '#FFFFFF',
  'common-black': '#000000',
}

const palette = {
  /* Primary */
  'palette-primary-50': '#EFEFFC',
  'palette-primary-100': '#CDCCF7',
  'palette-primary-200': '#B4B5F3',
  'palette-primary-300': '#9292EE',
  'palette-primary-400': '#7D7DEA',
  'palette-primary-500': '#5D5CE5',
  'palette-primary-600': '#5554D0',
  'palette-primary-700': '#4241A3',
  'palette-primary-800': '#34327E',
  'palette-primary-900': '#272760',
  /* Gray */
  'palette-gray-50': '#F0F0F2',
  'palette-gray-100': '#E2E3E5',
  'palette-gray-200': '#C6C7CB',
  'palette-gray-300': '#A9ABB0',
  'palette-gray-400': '#8D8F96',
  'palette-gray-500': '#70737C',
  'palette-gray-600': '#5A5C63',
  'palette-gray-700': '#43464A',
  'palette-gray-800': '#2D2E32',
  'palette-gray-900': '#161819',
}

const component = {
  'component-normal': 'rgba(112, 115, 124, 0.05)',
  'component-alternative': 'rgba(112, 115, 124, 0.08)',
  'component-strong': 'rgba(112, 115, 124, 0.15)',
}

const hiliting = {
  yellow: '#FFF2B2',
}

export const colors = {
  ...semantic,
  ...link,
  ...common,
  ...palette,
  ...component,
  ...hiliting,
  inherit: 'inherit',
} as const
