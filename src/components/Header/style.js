import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  background-color: #20232a;

  a {
    display: flex;
    align-items: center;
    margin-right: 20px;
    color: white;
    text-decoration: none;
    font-weight: 200;
  }

  i {
    margin-right: 10px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  b {
    color: #61dafb;
  }

  h2 {
    color: #326c7c;
  }

  b,
  h2 {
    font-weight: 800 !important;
  }

  img {
    width: 23px;
    margin-left: 10px;
  }
`;
