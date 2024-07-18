import styled from '@emotion/styled'

export const TermListBox = styled.article`
  border-radius: 4px;
  border: 1px solid rgba(112, 115, 124, 0.16);

  max-height: 200px;
  width: 100%;
  min-width: 500px;
  overflow-y: scroll;
`

export const BlankTermList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  padding-block: 19px;
  margin-top: 16px;

  p {
    margin: 0;

    font-size: 14px;
    line-height: 140%;
    letter-spacing: -0.01em;

    color: rgba(22, 23, 25, 0.6);
  }
`

export const SearchWindowBlankButton = styled.a`
  align-items: center;
  padding: 6px 10px;

  border-radius: 4px;
  border: 1px solid rgba(112, 115, 124, 0.22);
  background-color: transparent;

  font-size: 13px;
  letter-spacing: -0.02em;
  color: rgba(22, 23, 25, 1);
  fill: rgba(22, 23, 25, 1);
  transition: background-color 0.2s;

  text-decoration-line: none;

  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }

  svg {
    margin-right: 7px;
  }
`

export const TermListVocabularyTitle = styled.div`
  width: 100%;
  padding: 12px 24px;
  box-sizing: border-box;
`
