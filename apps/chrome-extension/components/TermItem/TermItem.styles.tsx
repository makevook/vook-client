import styled from '@emotion/styled'

export const TermBox = styled.div`
  display: grid;
  grid-template-columns: 120px 120px 1fr;

  border-bottom: 1px solid rgba(112, 115, 124, 0.16);

  &.header > div {
    background-color: #efeffc;
    color: #161719;
  }
`

export const TermSqaure = styled.div`
  padding: 8px 12px;
  word-break: break-word;

  &.term {
    color: #5d5ce5;
  }

  &.synonyms {
    color: rgba(22, 23, 25, 0.6);
  }

  &.meaning {
    color: #161719;
    word-break: keep-all;
  }

  strong {
    font-weight: 400;
    background-color: #fff2b2;
    word-break: keep-all;
  }
`
