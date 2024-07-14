import { vars } from '@vook-client/design-system'
import { style } from '@vanilla-extract/css'

export const deviceScreen = style({
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: 1080,
  height: 500,
  backgroundColor: '#fff',
  borderRight: `8px solid ${vars.colors['palette-gray-800']}`,
  borderTop: `8px solid ${vars.colors['palette-gray-800']}`,
  borderTopRightRadius: '30px',
  borderBottomRightRadius: '3px',
})

export const deviceScreenHeader = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  paddingRight: 20,
  height: 50.55,
  backgroundColor: '#000',
  borderTopRightRadius: '22px',
})

export const deviceScreenURLHeader = style({
  position: 'absolute',
  width: '100%',
  display: 'flex',
  gap: 15,
  justifyContent: 'flex-end',
  alignItems: 'center',
  paddingRight: 20,
  height: 50.54,
  backgroundColor: '#35363A',
  zIndex: 2,
})

export const deviceScreenURL = style({
  display: 'flex',
  width: '100%',
  borderRadius: 22,
  gap: 12,
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: '#202124',
  height: 33.7,
  paddingRight: 15,
})

export const deviceScreenText = style({
  position: 'absolute',
  top: 82,
  left: 60,
  zIndex: 1,
})

export const VookLogoContainer = style({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow:
    '0px 4.77px 9.55px rgba(0, 0, 0, 0.08), 0px 0px 4.77px rgba(0, 0, 0, 0.08)',
  top: 197,
  left: 373,
  width: 38,
  height: 38,
  borderRadius: 38.2,
})

export const chromeExtensionContainer = style({
  width: 635,
  display: 'flex',
  flexDirection: 'column',
  gap: 19,
  position: 'absolute',
  right: 52,
  bottom: 20.55,
  padding: 19,
  boxShadow:
    '0px 4.77px 9.55px rgba(0, 0, 0, 0.08), 0px 0px 4.77px rgba(0, 0, 0, 0.08)',
  borderRadius: 7.16,
})

export const chromeExtensionHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
})

export const chromeExtensionTableContainer = style({
  borderRadius: 4.77,
  border: `1.19px solid ${vars.colors['semantic-line-alternative']}`,
})

export const chromeExtensionTableHeaderText = style({
  display: 'flex',
  width: 143,
  padding: '6px 14px',
  alignItems: 'center',
  backgroundColor: vars.colors['palette-primary-50'],
})

export const chromeExtensionTable = style({
  display: 'flex',
  width: 143,
  padding: '9.5px 14.32px',
  alignItems: 'center',
})

export const chromeExtensionFooter = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 4,
})

export const drag = style({
  backgroundColor: 'rgba(0, 119, 255, 0.22)',
})
