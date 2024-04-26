'use client'

import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle` 
  ${reset} 

  a{
    text-decoration: none;

    color: inherit;
  }

  *{
    box-sizing: border-box;
  }

  input, textarea {
    user-select: auto;
  }

  input:focus {
    outline: none;
  }

  button {
    padding: 0;

    border: none;

    background: none;
    cursor: pointer;
  }
`

export default GlobalStyles
