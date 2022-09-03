import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 0.625rem;

  display: flex;
  align-items: center;

  .symbolImg {
    border-radius: 50%;
    width: 24px;
    height: 24px;

    background-color: #ffffff;

    img {
      border-radius: 50%;
    }
  }

  .name {
    margin-left: 0.5rem;
  }
`;
