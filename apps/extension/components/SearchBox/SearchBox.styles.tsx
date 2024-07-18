import styled from '@emotion/styled'

export const SearchBoxContainer = styled.form`
  position: relative;

  min-width: 400px;
  width: fit-content;
  width: 500px;
`

export const SearchBoxInputBox = styled.div`
  position: relative;
  box-sizing: border-box;

  width: 100%;

  padding: 0px;
`

export const SearchBoxInput = styled.input`
  width: 100%;
  height: 58px;

  background: #ffffff;
  border: 1px solid rgba(112, 115, 124, 0.22);
  border-radius: 6px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  font-feature-settings: 'ss10' on;

  padding-left: 70px;
  box-sizing: border-box;

  ::placeholder {
    color: rgba(22, 23, 25, 0.25);
  }
`

export const SearchBoxIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;

  top: 0;
  left: 0;

  height: 58px;
  width: 70px;
  z-index: 20;
`

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background-color: transparent;

  position: absolute;
  top: 0;
  right: 0;

  height: 58px;
  width: 70px;

  cursor: pointer;
  z-index: 20;
`
