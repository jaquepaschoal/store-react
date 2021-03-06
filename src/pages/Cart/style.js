import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 151px);

  h1 {
    color: #20232a;
    margin-top: 100px;
  }

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 90%;

    span {
      text-transform: uppercase;
      font-weight: 700;
      color: #c3c3c3;
      font-size: 14px;
      margin-right: 52px;
    }

    p {
      margin-right: 119px;
      font-weight: bold;
      color: #5098a3;
      font-size: 20px;
    }
  }
`;

export const Table = styled.table`
  margin: 20px;
  border: 1px solid #c3c3c3;
  text-align: left;
  width: 90%;
  text-align: center;

  img {
    width: 42px;
  }

  td,
  th {
    padding: 8px 0;

    &.left {
      text-align: left;
    }

    &.spotlight {
      font-weight: bold;
      color: #5098a3;
    }
  }

  th {
    text-transform: uppercase;
    font-weight: 700;
    color: #c3c3c3;
    font-size: 14px;
    padding-top: 15px;
  }

  p {
    font-weight: bold;
  }

  span {
    font-weight: inherit;
    font-size: 14px;
    color: #c3c3c3;
  }
`;

export const Image = styled.td`
  width: 90px;
`;

export const Description = styled.td`
  width: 105px;
  input {
    width: 40px;
    border: 1px solid rgba(195, 195, 195, 0.5);
    border-radius: 2px;
    padding: 3px;
    outline: none;
  }

  i {
    color: #c3c3c3;
    cursor: pointer;
  }
`;
