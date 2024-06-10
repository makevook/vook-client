import { icon } from '../Icon.css'

export const closeIcons = {
  'close-icon-big': (
    <span className={icon({ size: 'big' })}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 1L1 17M17 17L1 1"
          stroke="#161719"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  ),
  'close-icon-medium': (
    <span className={icon({ size: 'medium' })}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 1L1 13M13 13L1 1"
          stroke="#161719"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </span>
  ),
  'close-icon-small': (
    <span className={icon({ size: 'small' })}>
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 1L1 9M9 9L1 0.999998"
          stroke="#161719"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  ),
  'close-circle-big': (
    <span className={icon({ size: 'big' })}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="11" fill="#70737C" fillOpacity="0.15" />
        <path
          d="M14.1818 7.81836L10.9999 11.0003M10.9999 11.0003L7.81787 14.1823M10.9999 11.0003L14.1818 14.1823M10.9999 11.0003L7.81787 7.81836"
          stroke="#5A5C63"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  ),
  'close-circle-medium': (
    <span className={icon({ size: 'medium' })}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="9" cy="9" r="8.5" fill="#70737C" fillOpacity="0.15" />
        <path
          d="M11.4586 6.54102L8.99982 8.99982M8.99982 8.99982L6.54102 11.4586M8.99982 8.99982L11.4586 11.4586M8.99982 8.99982L6.54102 6.54102"
          stroke="#5A5C63"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    </span>
  ),
  'close-circle-small': (
    <span className={icon({ size: 'small' })}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="6" cy="6" r="6" fill="#70737C" fillOpacity="0.15" />
        <path
          d="M7.63876 4.36133L5.99955 6.00053M5.99955 6.00053L4.36035 7.63973M5.99955 6.00053L7.63876 7.63973M5.99955 6.00053L4.36035 4.36133"
          stroke="#5A5C63"
          strokeLinecap="round"
        />
      </svg>
    </span>
  ),
  'close-square-big': (
    <span className={icon({ size: 'big' })}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.375 21C4.51104 21 3 19.489 3 17.625V6.37498C3 4.51103 4.51104 3 6.375 3H17.625C19.489 3 21 4.51103 21 6.37498L21 17.625C21 19.489 19.489 21 17.625 21H6.375Z"
          stroke="#70737C"
          strokeOpacity="0.22"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M15.1818 8.81836L11.9999 12.0003M11.9999 12.0003L8.81787 15.1823M11.9999 12.0003L15.1818 15.1823M11.9999 12.0003L8.81787 8.81836"
          stroke="#5A5C63"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  ),
  'close-square-medium': (
    <span className={icon({ size: 'medium' })}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.625 19C6.17525 19 5 17.8248 5 16.375V7.62499C5 6.17525 6.17525 5 7.625 5H16.375C17.8247 5 19 6.17525 19 7.62499L19 16.375C19 17.8248 17.8247 19 16.375 19H7.625Z"
          stroke="#70737C"
          strokeOpacity="0.22"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M14.4747 9.52539L11.9998 12.0003M11.9998 12.0003L9.5249 14.4751M11.9998 12.0003L14.4747 14.4751M11.9998 12.0003L9.5249 9.52539"
          stroke="#5A5C63"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    </span>
  ),
  'close-square-small': (
    <span className={icon({ size: 'small' })}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.875 13C3.83947 13 3 12.1605 3 11.125V4.87499C3 3.83946 3.83947 3 4.875 3H11.125C12.1605 3 13 3.83946 13 4.87499L13 11.125C13 12.1605 12.1605 13 11.125 13H4.875Z"
          stroke="#70737C"
          strokeOpacity="0.22"
          strokeWidth="0.866667"
          strokeLinecap="round"
        />
        <path
          d="M9.64944 6.35059L7.99953 8.0005M7.99953 8.0005L6.34961 9.65042M7.99953 8.0005L9.64944 9.65042M7.99953 8.0005L6.34961 6.35059"
          stroke="#5A5C63"
          strokeLinecap="round"
        />
      </svg>
    </span>
  ),
}
