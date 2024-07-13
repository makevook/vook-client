import styled from '@emotion/styled'
import { tokens } from '@vook-client/design-system'

export const TermBox = styled.div`
  display: grid;
  grid-template-columns: 160px 160px 1fr;
  transition: background-color 0.5s;

  :hover {
    background-color: ${tokens.colors['component-alternative']};
  }
`

export const TermSqaure = styled.div`
  padding: 8px 12px;
  word-break: break-word;

  &.term {
    color: #5d5ce5;
  }

  &.synonyms {
  }

  &.meaning {
    word-break: keep-all;
  }

  strong {
    background-color: #fff2b2;
    word-break: keep-all;
  }
`
