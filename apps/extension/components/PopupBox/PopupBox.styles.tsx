import styled from '@emotion/styled'

export const PopupBoxContainer = styled.div`
  min-width: 450px;
  max-width: 700px;
  margin: 20px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  justify-content: center;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
  }
`

export const LogoutButton = styled.button`
  position: fixed;
  top: 40px;
  right: 75px;

  font-size: 12px;
  color: black;
  border: 1px solid rgba(122, 115, 124, 0.22);
  border-radius: 4px;
  background-color: transparent;
  padding: 4px 6px;

  cursor: pointer;

  :hover {
    background-color: rgba(122, 115, 124, 0.1);
  }
`
