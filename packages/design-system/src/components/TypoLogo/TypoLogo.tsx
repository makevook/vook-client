type TypoLogoSizes = 'big' | 'small'

const typoLogos: {
  [key in TypoLogoSizes]: JSX.Element
} = {
  small: (
    <svg
      width="60"
      height="20"
      viewBox="0 0 60 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Typo Logo</title>
      <path
        d="M13.9146 2H17.421L11.5096 16.9611H7.91138L2 2H5.78181L9.85736 13.0143L13.9146 2Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.0242 11.3916C30.0242 8.14663 27.2167 5.79492 23.3078 5.79492C19.3988 5.79492 16.5913 8.14663 16.5913 11.3916C16.5913 14.6366 19.3988 16.9883 23.3078 16.9883C27.2167 16.9883 30.0242 14.6366 30.0242 11.3916ZM23.3075 14.3033C25.1622 14.3033 26.6658 13.0003 26.6658 11.393C26.6658 9.78568 25.1622 8.4827 23.3075 8.4827C21.4528 8.4827 19.9493 9.78568 19.9493 11.393C19.9493 13.0003 21.4528 14.3033 23.3075 14.3033Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.8006 11.4043C44.8006 8.15933 41.9931 5.80762 38.0841 5.80762C34.1752 5.80762 31.3677 8.15933 31.3677 11.4043C31.3677 14.6493 34.1752 17.001 38.0841 17.001C41.9931 17.001 44.8006 14.6493 44.8006 11.4043ZM38.0837 14.3151C39.9384 14.3151 41.442 13.0122 41.442 11.4048C41.442 9.79754 39.9384 8.49456 38.0837 8.49456C36.229 8.49456 34.7255 9.79754 34.7255 11.4048C34.7255 13.0122 36.229 14.3151 38.0837 14.3151Z"
        fill="black"
      />
      <path
        d="M49.1851 14.9426L49.2585 11.4547L53.8665 7.08569H57.2811L52.8568 11.5832L51.3698 12.7948L49.1851 14.9426ZM46.8169 16.9619V3.34082H49.6808V16.9619H46.8169ZM54.1786 16.9619L50.8374 12.8131L52.6365 10.5919L57.6483 16.9619H54.1786Z"
        fill="black"
      />
    </svg>
  ),
  big: (
    <svg
      width="150"
      height="50"
      viewBox="0 0 150 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Typo Logo</title>
      <path
        d="M34.7864 5H43.5525L28.774 42.4028H19.7785L5 5H14.4545L24.6434 32.5358L34.7864 5Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M75.0603 28.4781C75.0603 20.3656 68.0415 14.4863 58.2692 14.4863C48.4968 14.4863 41.478 20.3656 41.478 28.4781C41.478 36.5906 48.4968 42.4699 58.2692 42.4699C68.0415 42.4699 75.0603 36.5906 75.0603 28.4781ZM58.2686 35.7565C62.9054 35.7565 66.6642 32.4991 66.6642 28.4808C66.6642 24.4625 62.9054 21.2051 58.2686 21.2051C53.6319 21.2051 49.873 24.4625 49.873 28.4808C49.873 32.4991 53.6319 35.7565 58.2686 35.7565Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M112.002 28.5103C112.002 20.3978 104.983 14.5186 95.2106 14.5186C85.4382 14.5186 78.4194 20.3978 78.4194 28.5103C78.4194 36.6228 85.4382 42.5021 95.2106 42.5021C104.983 42.5021 112.002 36.6228 112.002 28.5103ZM95.21 35.7858C99.8468 35.7858 103.606 32.5284 103.606 28.5101C103.606 24.4918 99.8468 21.2344 95.21 21.2344C90.5733 21.2344 86.8145 24.4918 86.8145 28.5101C86.8145 32.5284 90.5733 35.7858 95.21 35.7858Z"
        fill="black"
      />
      <path
        d="M122.963 37.3559L123.146 28.6363L134.666 17.7137H143.203L132.142 28.9575L128.424 31.9865L122.963 37.3559ZM117.042 42.4042V8.35156H124.202V42.4042H117.042ZM135.446 42.4042L127.093 32.0324L131.591 26.4793L144.121 42.4042H135.446Z"
        fill="black"
      />
    </svg>
  ),
}

export interface TypoLogoProps {
  size?: TypoLogoSizes
}

export const TypoLogo = ({ size = 'big' }: TypoLogoProps) => {
  return typoLogos[size]
}
