import styled from "styled-components";

export const MainAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 100vw;
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
  justify-content: space-between;
  align-items: center;
  min-width: 27rem;
  max-width: 27rem;
  min-height: 15rem;
  gap: 1rem;
  margin: 5px;
  background-color: white;
  border-radius: 35px;
  // border-color: #6ddfff;
  border: 1px;
  box-shadow: 3px 3px 3px 3px #084f63;
  padding: 10px;
  z-index: 0;
  :hover {
    //border: 3px solid blueviolet;
    box-shadow: 3px 3px 3px 3px blueviolet;
    border: 2px solid blueviolet;
  }
`;

export const SectionsTileLong = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 15rem;
  gap: 1rem;
  margin: 5px;
  background-color: white;
  border-radius: 35px;
  // border-color: #6ddfff;
  border: 1px;
  box-shadow: 3px 3px 3px 3px #084f63;
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
  width: 25rem;
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
  width: 27rem;
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
  width: 25rem;
  height: 30px;
  padding-left: 15px;
  border: 1px solid blueviolet;
  border-radius: 35px;
  cursor: pointer;
`;

export const CallbackAndMemoContainer = styled.div`
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
  font-weight: 600;
`;

export const ReactMemoChildStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #610c6a;
  background-color: #ef85da;
  border-radius: 35px;
  height: 4rem;
`;

export const InformatorStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  color: #610c6a;
  border-top: 2px solid #610c6a;
  border-width: thin;
  height: 2rem;
  font-size: 1.5rem;
  margin-bottom: 0%;
`;

export const SoloIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  :hover {
    color: #6ddfff;
  }
`;

export const OnlyOnHoover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 30rem;
  min-height: 15rem;
  bottom: 250%;
  gap: 1rem;
  margin-top: -50px;
  background-color: white;
  border-radius: 35px;
  // border-color: #6ddfff;
  border: 1px;
  box-shadow: 3px 3px 3px 3px #084f63;
  padding: 10px;
  z-index: 10000000000;
  position: relative;
  :hover {
    //border: 3px solid blueviolet;
    box-shadow: 3px 3px 3px 3px blueviolet;
    border: 2px solid blueviolet;
  }
`;
export const RowInsideSectionDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const MainRowInsideSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 25px;
`;
export const InsideSectionDivColumn = styled.div`
  display: flex;
  width: 15rem;
  padding: 10px;
  height: 10rem;
  gap: 10px;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  align-content: center;
  font-size: 1.5rem;
  border-right: 1px solid #610c6a;
  border-left: 1px solid #610c6a;
`;

export const ApiContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  min-height: 14rem;
  align-items: center;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  height: 14rem;
`;
