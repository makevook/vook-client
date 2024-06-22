import { icon } from '../Icon.css'

export const alertIcons = {
  'alert-success-icon-big': (
    <span className={icon({ size: 'big' })}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          fill="#00AE50"
        />
        <path
          d="M15.7215 10L11.4545 14.267L9 11.8125"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  ),
  'alert-success-icon-medium': (
    <span className={icon({ size: 'medium' })}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
          fill="#00AE50"
        />
        <path
          d="M14.481 11L11.6363 13.8447L10 12.2083"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  ),
  'alert-success-icon-small': (
    <span className={icon({ size: 'small' })}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
          fill="#00AE50"
        />
        <path
          d="M10.481 7L7.63634 9.84467L6 8.20833"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  ),
  'alert-info-icon-big': (
    <span className={icon({ size: 'big' })}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          fill="#006AFF"
        />
        <path
          d="M12 12V7.5M12 15.3354V15.375"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  ),
  'alert-info-icon-medium': (
    <span className={icon({ size: 'medium' })}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
          fill="#006AFF"
        />
        <path
          d="M12 12V8.5M12 14.5942V14.625"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  ),
  'alert-info-icon-small': (
    <span className={icon({ size: 'small' })}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
          fill="#006AFF"
        />
        <path
          d="M8 8V5M8 10.2236V10.25"
          stroke="white"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  ),
  'alert-warning-icon-big': (
    <span className={icon({ size: 'big' })}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.33007 20C4.7811 20 3.47392 18.9763 3.06265 17.5757C2.88709 16.9778 3.10281 16.3551 3.43276 15.8249L9.10269 5.60102C10.4311 3.46632 13.5689 3.46633 14.8973 5.60103L20.5672 15.8249C20.8972 16.3551 21.1129 16.9778 20.9373 17.5757C20.5261 18.9763 19.2189 20 17.6699 20H6.33007Z"
          fill="#EC8D00"
        />
        <path
          d="M12 12.8996V8.41406M12 16.2244V16.2638"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  ),
  'alert-warning-icon-medium': (
    <span className={icon({ size: 'medium' })}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.27506 18.6654C5.98425 18.6654 4.89494 17.8123 4.55221 16.6451C4.40591 16.1469 4.58567 15.6279 4.86063 15.1861L9.58557 6.66622C10.6926 4.8873 13.3074 4.8873 14.4144 6.66622L19.1394 15.1861C19.4143 15.6279 19.5941 16.1469 19.4478 16.6451C19.1051 17.8123 18.0157 18.6654 16.7249 18.6654H7.27506Z"
          fill="#EC8D00"
        />
        <path
          d="M12 12.7497V9.01172M12 15.5203V15.5532"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  ),
  'alert-warning-icon-small': (
    <span className={icon({ size: 'small' })}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.22005 13.3346C3.1874 13.3346 2.31595 12.6522 2.04177 11.7184C1.92473 11.3199 2.06854 10.9047 2.28851 10.5512L6.06846 3.73532C6.95407 2.31218 9.04594 2.31219 9.93154 3.73532L13.7115 10.5512C13.9315 10.9047 14.0753 11.3199 13.9582 11.7184C13.6841 12.6522 12.8126 13.3346 11.78 13.3346H4.22005Z"
          fill="#EC8D00"
        />
        <path
          d="M8 8.59975V5.60938M8 10.8162V10.8425"
          stroke="white"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  ),
  'alert-error-icon-big': (
    <span className={icon({ size: 'big' })}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          fill="#FF3333"
        />
        <path
          d="M15.1818 8.81641L11.9999 11.9984M11.9999 11.9984L8.81787 15.1804M11.9999 11.9984L15.1818 15.1804M11.9999 11.9984L8.81787 8.81641"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  ),
  'alert-error-icon-medium': (
    <span className={icon({ size: 'medium' })}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
          fill="#FF3333"
        />
        <path
          d="M14 10L12 12M12 12L10 14M12 12L14 14M12 12L10 10"
          stroke="white"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    </span>
  ),
  'alert-error-icon-small': (
    <span className={icon({ size: 'small' })}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
          fill="#FF3333"
        />
        <path
          d="M10 6L8 8M8 8L6 10M8 8L10 10M8 8L6 6"
          stroke="white"
          strokeLinecap="round"
        />
      </svg>
    </span>
  ),
}
