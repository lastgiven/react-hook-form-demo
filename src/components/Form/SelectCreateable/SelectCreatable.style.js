// custom styling for deal input
import styled from 'styled-components';

export const Div = styled.div``;

export const style = {
  control: (base) => ({
    ...base,
    border: 'none',
    marginBottom: '1rem',
    backgroundColor: 'transparent',
    borderBottom: '1px solid #242A4D',
    borderRadius: '0',
    boxShadow: 'none',
    '&:hover': {
      borderBottom: '1px solid #242A4D',
    },
    fontSize: '26px',
    fontWeight: '700',
  }),
  option: (base) => ({
    ...base,
    backgroundColor: '#fff',
    color: '#21284e',
    '&:hover': {
      backgroundColor: '#00d6a2',
    },
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: 'none',
  }),
  placeholder: (base) => ({
    ...base,
    color: '#21284e',
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: '#02002d',
    '&:hover': {
      color: '#02002d',
    },
  }),
  menu: (base) => ({
    ...base,
    marginTop: '7px',
    border: '0px solid #eaeaea',
    boxShadow: '0 2px 44px 0px #DFDFDF',
    backgroundColor: '#ffff',
    width: '80%',
  }),
  menuList: (base) => ({
    ...base,
    overflowY: ' auto',
    '::-webkit-scrollbar': {
      width: '4px',
      height: '0px',
    },
    '::-webkit-scrollbar-track': {
      background: '#f1f1f1',
    },
    '::-webkit-scrollbar-thumb': {
      background: '#888',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
  }),
  loadingIndicator: (base) => ({
    ...base,
    color: '#00d6a2',
  }),
  clearIndicator: (base) => ({
    ...base,
    color: '#a5a8ac',
    '&:hover': {
      color: '#242A4D',
    },
  }),
};

export default style;
