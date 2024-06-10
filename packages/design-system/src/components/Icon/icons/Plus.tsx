import { icon } from '../Icon.css'

export const plusIcons = {
  'plus-big': (
    <span className={icon({ size: 'big' })}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>plus big</title>
        <path
          d="M9 1L9 17M17 9L1 9"
          stroke="#161719"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  ),
  'plus-medium': (
    <span className={icon({ size: 'medium' })}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>plus medium</title>
        <path
          d="M7 1L7 13M13 7L1 7"
          stroke="#161719"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </span>
  ),
  'plus-small': (
    <span className={icon({ size: 'small' })}>
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>plus small</title>
        <path
          d="M5 1L5 9M9 5L1 5"
          stroke="#161719"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  ),
}
