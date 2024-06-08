import styled from '@emotion/styled'

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
