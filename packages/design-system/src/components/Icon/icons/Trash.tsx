import { icon } from '../Icon.css'

export const trashIcons = {
  'trash-big': (
    <span className={icon({ size: 'big' })}>
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>trash</title>
        <path
          d="M1 4.17647H17M6 1H12M7 14.7647V8.41177M11 14.7647V8.41177M12.5 19H5.5C4.39543 19 3.5 18.0519 3.5 16.8824L3.0434 5.27937C3.01973 4.67783 3.47392 4.17647 4.04253 4.17647H13.9575C14.5261 4.17647 14.9803 4.67783 14.9566 5.27937L14.5 16.8824C14.5 18.0519 13.6046 19 12.5 19Z"
          stroke="#161719"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  ),
  'trash-medium': (
    <span className={icon({ size: 'medium' })}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>trash</title>
        <path
          d="M5 6.90441H19M9.375 4.125H14.625M10.25 16.1691V10.6103M13.75 16.1691V10.6103M15.0625 19.875H8.9375C7.971 19.875 7.1875 19.0454 7.1875 18.0221L6.78798 7.86945C6.76726 7.3431 7.16468 6.90441 7.66222 6.90441H16.3378C16.8353 6.90441 17.2327 7.3431 17.212 7.86945L16.8125 18.0221C16.8125 19.0454 16.029 19.875 15.0625 19.875Z"
          stroke="#161719"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  ),
  'trash-small': (
    <span className={icon({ size: 'small' })}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>trash</title>
        <path
          d="M2.6665 4.11765H13.3332M5.99984 2H9.99984M6.6665 11.1765V6.94118M9.33317 11.1765V6.94118M10.3332 14H5.6665C4.93012 14 4.33317 13.3679 4.33317 12.5882L4.02877 4.85292C4.01299 4.45189 4.31578 4.11765 4.69486 4.11765H11.3048C11.6839 4.11765 11.9867 4.45189 11.9709 4.85292L11.6665 12.5882C11.6665 13.3679 11.0695 14 10.3332 14Z"
          stroke="#161719"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  ),
}
