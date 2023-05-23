import styled from "styled-components";

export const MainAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 25px;
  //background-color: #46d1f7;
  background: linear-gradient(
    to right,
    #6ddfff,
    #c5e9f3,
    #6ddfff,
    #c5e9f3,
    #6ddfff,
    #c5e9f3,
    #6ddfff
  );
  margin: 0;
  padding: 20px;
`;

export const RowContaier = styled.div`
  display: flex;
  width: 100%;
  gap: 25px;
  min-height: 15rem;
`;

export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 5px;
  margin-left: 17px;
  margin-right: 15px;
  font-size: 1.2rem;
`;

export const SectionsTile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  min-width: 30rem;
  min-height: 15rem;
  gap: 1rem;
  margin: 5px;
  background-color: white;
  border-radius: 35px;
  border-color: rgb(223, 217, 217);
  border: 1px;
  box-shadow: 3px 3px 3px 3px rgb(223, 217, 217);
  padding: 10px;
  z-index: 0;
  :hover {
    //border: 3px solid blueviolet;
    box-shadow: 3px 3px 3px 3px blueviolet;
    border: 2px solid blueviolet;
  }
`;

export const Tilediv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 35rem;
  justify-content: center;
  align-items: center;
  border: 3px solid;
  border-radius: 35px;
  border-color: blueviolet;
  font-weight: bold;
  font-size: 2rem;
`;

export const TiledivLong = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 35rem;
  justify-content: center;
  align-items: center;
  border: 3px solid;
  border-radius: 35px;
  border-color: blueviolet;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;

export const Input = styled.input`
  width: 450px;
  height: 30px;
  padding-left: 15px;
  border: 1px solid blueviolet;
  border-radius: 35px;
  cursor: pointer;
`;

export const ContextAndMemoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ButtonStyled = styled.button`
  cursor: pointer;
  border-radius: 35px;
  height: 30px;
  border-color: #610c6a;
  box-shadow: 2px 2px 2px 2px rgb(244, 126, 220);
`;

export const ReactMemoChildStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #610c6a;
  background-color: #ef85da;
  border-radius: 35px;
  height: 5rem;
`;
