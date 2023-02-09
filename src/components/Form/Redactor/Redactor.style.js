import styled from 'styled-components';
import { COLOR_PRIMARY, COLOR_GREY } from '../../../common/styles/Colors';

export const InputHeader = styled.div`
  margin-bottom: 10px;
  color: #63636d;
  font-size: 14px;
  font-weight: 400;
`;

export default styled.div`
  border: ${(props) => (props.border ? '1px solid #e6e6e6' : 'none')};
  border-radius: 4px;
  padding: 15px;
  margin-bottom: ${(props) => (props.fullScreen ? '0' : '15px')};
  height: ${(props) => (props.fullScreen ? '100%' : 'auto')};
  width: ${(props) => (props.fullScreen ? '100%' : 'auto')};

  &.invalid {
    border: 1px solid $red;
  }
  &.valid {
    border: 1px solid ${COLOR_PRIMARY};
  }

  .DraftEditor-root {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 15px;
    line-height: 1.429;
    position: relative;
    height: ${(props) => (props.fullScreen ? 'calc(100% - 35px)' : 'auto')};

    .public-DraftEditorPlaceholder-root {
      color: ${COLOR_GREY};
      position: absolute;
    }

    .DraftEditor-editorContainer {
      min-height: ${(props) => (props.fullScreen ? '100%' : '200px')};
      max-height: ${(props) => (props.fullScreen ? '100%' : '49vh')};
      overflow-y: auto;
      ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        background: white;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.2);
      }
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 5px;
      }

      scrollbar-face-color: rgba(0, 0, 0, 0.3); /* Firefox 63 compatibility */
      scrollbar-track-color: rgba(0, 0, 0, 0.2); /* Firefox 63 compatibility */
      scrollbar-color: rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.2);
      scrollbar-width: thin;
    }
  }

  .redactorItems {
    .material-icons {
      color: ${COLOR_PRIMARY};
      margin-right: 15px;
      cursor: pointer;
      position: relative;
      padding: 2.5px;
      transition: border 0.2s ease-in-out;
      border: 2px solid transparent;

      &.active {
        border: 2px solid ${COLOR_PRIMARY};
      }

      &::before,
      &::after {
        box-sizing: inherit;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
      }
      &::before,
      &::after {
        // Set border to invisible, so we don't see a 4px border on a 0x0 element before the transition starts
        border: 2px solid transparent;
        width: 0;
        height: 0;
      }

      // This covers the top & right borders (expands right, then down)
      &::before {
        top: -2px;
        left: 2px;
      }

      // And this the bottom & left borders (expands left, then up)
      &::after {
        bottom: -2px;
        right: 2px;
      }

      &:hover::before,
      &:hover::after {
        width: 100%;
        height: 100%;
      }

      &:hover::before {
        border-top-color: ${COLOR_PRIMARY}; // Make borders visible
        border-right-color: ${COLOR_PRIMARY};
        transition: width 0.125s ease-out,
          // Width expands first
          height 0.125s ease-out 0.125s; // And then height
      }

      &:hover::after {
        border-bottom-color: ${COLOR_PRIMARY}; // Make borders visible
        border-left-color: ${COLOR_PRIMARY};
        transition: border-color 0s ease-out 0.25s,
          // Wait for ::before to finish before showing border
          width 0.125s ease-out 0.25s,
          // And then exanding width
          height 0.125s ease-out 0.375s; // And finally height
      }
    }
  }
`;
