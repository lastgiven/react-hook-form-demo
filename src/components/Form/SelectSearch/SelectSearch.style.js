import styled from 'styled-components';

export const Div = styled.div``;

export const SelectHeader = styled.div`
  margin-bottom: 10px;
  color: #777777;
  font-size: ${(props) => props.fontSize || '12px'};
  font-weight: 400;
  align-self: flex-start;
  font-family: 'Open Sans', sans-serif;
`;

export const Container = styled.div`
  margin: ${(props) => (props.margin ? props.margin : '0')};
  width: 100%;
`;

export const Validation = styled.div`
  width: 100%;
  color: grey;
  font-size: 12px;
  line-height: auto;
  margin: 0;
  padding-left: 5px;
  margin-bottom: 1%;
  overflow: visible;
  white-space: wrap;
`;

export const style = {
  control: (base) => ({
    ...base,
    border: '1px solid #eaeaea',
    boxShadow: 'none',
    padding: '1.1px 8px 1.1px',
    fontFamily: 'Open Sans',
    '&:hover': {
      border: '1px solid #eaeaea',
    },
  }),
  option: (base, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    return {
      ...base,
      backgroundColor: state.isSelected ? '#fff' : '#fff',
      color: state.isSelected ? '#21284e' : '#21284e',
      opacity,
      '&:hover': {
        backgroundColor: '#00d6a2',
      },
    };
  },
  placeholder: (base) => ({
    ...base,
    fontSize: '14px',
    fontFamily: 'Open Sans',
    color: '#777777',
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: 'none',
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: '#02002d',
  }),
  menu: (base) => ({
    ...base,
    marginTop: '0',
    border: '1px solid #eaeaea',
    boxShadow: 'none',
  }),
  loadingIndicator: (base) => ({
    ...base,
    color: '#00d6a2',
  }),
  noOptionsMessage: (base) => ({
    ...base,
    color: '#00d6a2',
    fontFamily: 'Open Sans',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.1 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};
