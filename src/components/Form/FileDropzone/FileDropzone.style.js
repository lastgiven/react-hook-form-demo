import styled from 'styled-components';

export const DropZoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const TextHeader = styled.div`
  margin-bottom: 10px;
  color: #63636d;
  font-size: 14px;
  font-weight: 400;
  align-self: flex-start;
`;

export const DropZoneArea = styled.div`
  padding: 5px;
  width: 100%;
  height: 40px;
  border: 1px dashed #bfbfcc;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 5px;
  background-color: #f8f8f8;
  border-radius: 4px;
  &:hover {
    border: 1px dashed #242a4d;
  }
  transition: all 0.3s ease;
`;

export const Input = styled.input`
  display: none;
`;

export const TextWrapper = styled.div`
  display: flex;
  color: #b6b7b5;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Icon = styled.i`
  margin-right: 15px;
  font-size: 16px;
  width: 16px;
  height: 16px;
  color: ${(props) => (props.IconColor ? props.IconColor : '')};
`;

export const Button = styled.button`
  margin-left: 11px;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.37px;
  line-height: 16px;
  height: 24px;
  width: 100px;
  border-radius: 3px;
  cursor: pointer;
  background-color: #242a4d;
  border: none;
  color: white;
`;

export const Validation = styled.div`
  width: 100%;
  color: grey;
  font-size: 12px;
  line-height: auto;
  margin: 5px 0;
  padding-left: 5px;
  margin-bottom: 1%;
  overflow: visible;
  white-space: wrap;
`;

export const FileWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const FileName = styled.div`
  color: #242a4d;
  font-size: 14px;
  font-weight: 400;
  align-self: flex-start;
  margin-bottom: 5px;
  margin-right: 155px;
  line-height: 1.429;
  font-family: 'Open Sans', sans-serif;
`;

export const FileSize = styled.div`
  color: #777777;
  line-height: 1.429;
  font-size: 14px;
  font-weight: 400;
  align-self: flex-end;
  margin-bottom: 5px;
  font-family: 'Open Sans', sans-serif;
`;

export const FileIcon = styled.div`
  font-size: 16px;
  color: #39c568;
  margin-right: 15px;
  margin-left: 20px;
`;

export const RemoveIcon = styled.div`
  font-size: 16px;
  color: #b6b7b5;
  margin-right: 15px;
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    color: #00000;
  }
  transition: all 0.1s ease;
`;
