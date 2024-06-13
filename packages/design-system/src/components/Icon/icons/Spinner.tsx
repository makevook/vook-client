/* eslint-disable react/no-unknown-property */
import { icon } from '../Icon.css'

export const spinnerIcons = {
  'spinner-big': (
    <span className={icon({ size: 'big' })}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <radialGradient
          id="a"
          cx=".66"
          fx=".66"
          cy=".313"
          fy=".313"
          gradientTransform="scale(1.5)"
        >
          <stop offset="0" stopColor="#AEAEAE" />
          <stop offset=".3" stopColor="#AEAEAE" stopOpacity=".9" />
          <stop offset=".6" stopColor="#AEAEAE" stopOpacity=".6" />
          <stop offset=".8" stopColor="#AEAEAE" stopOpacity=".3" />
          <stop offset="1" stopColor="#AEAEAE" stopOpacity="0" />
        </radialGradient>
        <circle
          transform-origin="center"
          fill="none"
          stroke="url(#a)"
          strokeWidth="24"
          strokeLinecap="round"
          strokeDasharray="200 1000"
          cx="100"
          cy="100"
          r="70"
        >
          <animateTransform
            type="rotate"
            attributeName="transform"
            calcMode="spline"
            dur="2"
            values="360;0"
            keyTimes="0;1"
            keySplines="0 0 1 1"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          transform-origin="center"
          fill="none"
          opacity=".2"
          stroke="#AEAEAE"
          strokeWidth="24"
          strokeLinecap="round"
          cx="100"
          cy="100"
          r="70"
        />
      </svg>{' '}
    </span>
  ),
  'spinner-medium': (
    <span className={icon({ size: 'medium' })}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <radialGradient
          id="a11"
          cx=".66"
          fx=".66"
          cy=".3125"
          fy=".3125"
          gradientTransform="scale(1.5)"
        >
          <stop offset="0" stop-color="#AEAEAE" />
          <stop offset=".3" stop-color="#AEAEAE" stop-opacity=".9" />
          <stop offset=".6" stop-color="#AEAEAE" stop-opacity=".6" />
          <stop offset=".8" stop-color="#AEAEAE" stop-opacity=".3" />
          <stop offset="1" stop-color="#AEAEAE" stop-opacity="0" />
        </radialGradient>
        <circle
          transform-origin="center"
          fill="none"
          stroke="url(#a11)"
          stroke-width="14"
          stroke-linecap="round"
          stroke-dasharray="200 1000"
          stroke-dashoffset="0"
          cx="100"
          cy="100"
          r="70"
        >
          <animateTransform
            type="rotate"
            attributeName="transform"
            calcMode="spline"
            dur="2"
            values="360;0"
            keyTimes="0;1"
            keySplines="0 0 1 1"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          transform-origin="center"
          fill="none"
          opacity=".2"
          stroke="#AEAEAE"
          stroke-width="14"
          stroke-linecap="round"
          cx="100"
          cy="100"
          r="70"
        />
      </svg>
    </span>
  ),
  'spinner-small': (
    <span className={icon({ size: 'small' })}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <radialGradient
          id="a11"
          cx=".66"
          fx=".66"
          cy=".3125"
          fy=".3125"
          gradientTransform="scale(1.5)"
        >
          <stop offset="0" stop-color="#AEAEAE" />
          <stop offset=".3" stop-color="#AEAEAE" stop-opacity=".9" />
          <stop offset=".6" stop-color="#AEAEAE" stop-opacity=".6" />
          <stop offset=".8" stop-color="#AEAEAE" stop-opacity=".3" />
          <stop offset="1" stop-color="#AEAEAE" stop-opacity="0" />
        </radialGradient>
        <circle
          transform-origin="center"
          fill="none"
          stroke="url(#a11)"
          stroke-width="10"
          stroke-linecap="round"
          stroke-dasharray="200 1000"
          stroke-dashoffset="0"
          cx="100"
          cy="100"
          r="70"
        >
          <animateTransform
            type="rotate"
            attributeName="transform"
            calcMode="spline"
            dur="2"
            values="360;0"
            keyTimes="0;1"
            keySplines="0 0 1 1"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          transform-origin="center"
          fill="none"
          opacity=".2"
          stroke="#AEAEAE"
          stroke-width="10"
          stroke-linecap="round"
          cx="100"
          cy="100"
          r="70"
        />
      </svg>
    </span>
  ),
}
