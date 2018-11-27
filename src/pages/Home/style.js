import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  height: calc(100vh - 191px);

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid #c3c3c3;
    width: calc((100% / 5) - 25px);
    margin: 40px 40px;
    height: 350px;
    transition: 0.1s ease-in-out;
  }

  img {
    width: 150px;
  }

  h2 {
    margin-top: 23px;
    font-size: 18px;
    color: #20232a;
  }

  h3 {
    font-weight: inherit;
    font-size: 16px;
    color: #c3c3c3;
  }

  span {
    margin-top: 11px;
    font-size: 26px;
    color: #5098a3;
    font-weight: 700;
  }

  &:hover {
    box-shadow: 0px 1px 9px rgba(0, 0, 0, 0.15);
  }
`;
