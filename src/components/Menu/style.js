import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px 0;
  background-color: #5098a3;

  ul {
    display: flex;
    list-style: none;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1px;
    flex-wrap: wrap;

    li {
      margin: 0 24px;

      a {
        color: white;
        text-decoration: none;
      }
    }

    .active {
      font-weight: bold;
    }
  }
`;
