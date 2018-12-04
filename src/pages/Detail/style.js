import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 30px;
  min-height: calc(100vh - 211px);

  .Toastify__toast--info {
    background-color: #a2b2bc;
  }

  .Toastify__toast-body {
    margin: auto 30px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: 572px) {
    flex-direction: column;
    padding: 20px 30px;
  }
`;

export const ContainerImg = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  padding: 20px;
  height: 300px;
  border: 1px solid #c3c3c3;

  img {
    height: 300px;
  }

  @media (max-width: 572px) {
    width: 85%;
  }
`;

export const Description = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 0 30px;

  @media (max-width: 572px) {
    width: 100%;
    padding: 0;
    margin-top: 10px;
  }

  h2 {
    color: #20232a;
    font-weight: 800;
  }

  span {
    color: #c3c3c3;
    font-size: 16px;
  }

  button {
    width: 100%;
    background-color: #5098a3;
    border: none;
    border-radius: 2px;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    padding: 15px 0;
    margin-top: 20px;
    transition: 0.2s ease-in;
    cursor: pointer;

    &:hover {
      background-color: #427f89;
    }
  }
`;

export const Price = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #5098a3;
  margin-top: 50px;
  letter-spacing: 1px;
`;
