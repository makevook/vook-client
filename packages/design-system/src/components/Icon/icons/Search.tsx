import { icon } from '../Icon.css'

export const searchIcons = {
  'search-big': (
    <span className={icon({ size: 'big' })}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.927 15.0396L18.4001 18.3996M17.2801 9.43961C17.2801 13.7695 13.77 17.2796 9.4401 17.2796C5.11019 17.2796 1.6001 13.7695 1.6001 9.43961C1.6001 5.1097 5.11019 1.59961 9.4401 1.59961C13.77 1.59961 17.2801 5.1097 17.2801 9.43961Z"
          stroke="#161719"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  ),
  'search-medium': (
    <span className={icon({ size: 'medium' })}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5192 10.6L13 13M12.2 6.6C12.2 9.69279 9.69279 12.2 6.6 12.2C3.50721 12.2 1 9.69279 1 6.6C1 3.50721 3.50721 1 6.6 1C9.69279 1 12.2 3.50721 12.2 6.6Z"
          stroke="#161719"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </span>
  ),
  'search-small': (
    <span className={icon({ size: 'small' })}>
      <svg
        width="11"
        height="11"
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.13939 8.2L10 10M9.4 5.2C9.4 7.5196 7.5196 9.4 5.2 9.4C2.8804 9.4 1 7.5196 1 5.2C1 2.8804 2.8804 1 5.2 1C7.5196 1 9.4 2.8804 9.4 5.2Z"
          stroke="#161719"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  ),
}
