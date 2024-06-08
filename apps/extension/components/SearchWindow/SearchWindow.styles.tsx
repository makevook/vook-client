import styled from '@emotion/styled'

import type { Position } from '../../store/toggle'

export const SearchWindowBox = styled.div<{ position: Position }>`
  position: absolute;

  top: ${({ position }) => position.y + 40}px;
  left: ${({ position }) => position.x}px;

  padding: 16px;

  width: 500px;

  border-radius: 6px;

  background-color: #ffffff;
  box-shadow:
    0px 4px 8px rgba(0, 0, 0, 0.08),
    0px 0px 4px rgba(0, 0, 0, 0.08);

  animation: appear 0.5s ease-out forwards;

  button {
    width: fit-content;
    height: fit-content;
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }

  @keyframes appear {
    0% {
      transform: translateY(10px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

export const SearchWindowHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  margin-bottom: 16px;

  .term-header {
    display: flex;
    align-items: center;
    width: 100%;

    img {
      width: 22px;
      height: 22px;
      margin-right: 6px;
      transform: translateY(-2px);
    }

    p {
      font-size: 14px;
      font-weight: 700;
      line-height: 1.2;

      &.query {
        display: block;
        max-width: 50%;

        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      &.tail {
        margin-left: 3px;
      }
    }
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
  }
`

export const SearchWindowLink = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 16px;

  a {
    color: #006aff;
    text-decoration-line: none;
    font-size: 13px;
  }

  svg {
    margin-left: 3px;
    transform: translateY(1px);
  }
`
