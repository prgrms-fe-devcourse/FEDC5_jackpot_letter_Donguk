import styled from '@emotion/styled';

export const Container = styled.div`
  .sidebar-items-title {
    margin-top: 2.5rem;
    margin-bottom: 0.625rem;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .sidebar-items-container {
    padding: 0px;
    margin: 0px;
    list-style: none;

    .sidebar-item {
      display: flex;
      align-items: center;
      height: 4.25rem;
      border-bottom: 1px solid #d2d2d2;
      cursor: pointer;

      a {
        width: 100%;
        height: 100%;
        line-height: 4.25rem;
      }
    }
  }
`;
