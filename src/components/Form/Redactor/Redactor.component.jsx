import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Editor, RichUtils, getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';
import { FiBold, FiItalic, FiUnderline } from 'react-icons/fi';
import { AiOutlineOrderedList, AiOutlineUnorderedList } from 'react-icons/ai';
import { BsBlockquoteLeft } from 'react-icons/bs';
import RedactorStyle, { InputHeader } from './Redactor.style';

const { hasCommandModifier } = KeyBindingUtil;

function myKeyBindingFn(e) {
  if (e.keyCode === 83 /* `S` key */ && hasCommandModifier(e)) {
    return {
      e,
      command: 'myeditor-save',
    };
  }
  if (e.keyCode === 9) {
    return {
      e,
      command: 'tab',
    };
  }
  return getDefaultKeyBinding(e);
}

const INLINE_STYLES = [
  { icon: <FiBold />, style: 'BOLD' },
  { icon: <FiItalic />, style: 'ITALIC' },
  { icon: <FiUnderline />, style: 'UNDERLINE' },
];

const BLOCK_TYPES = [
  { icon: <AiOutlineOrderedList />, style: 'ordered-list-item' },
  { icon: <AiOutlineUnorderedList />, style: 'unordered-list-item' },
  { icon: <BsBlockquoteLeft />, style: 'blockquote' },
];

const InlineStyleControls = ({ editorState, onToggle }) => {
  const currentStyle = editorState.getCurrentInlineStyle();
  return (
    <>
      {INLINE_STYLES.map((type, i) => (
        <StyleButton
          key={type.style}
          active={currentStyle.has(type.style)}
          icon={type.icon}
          onToggle={onToggle}
          style={type.style}
          index={i}
        />
      ))}
    </>
  );
};

InlineStyleControls.propTypes = {
  editorState: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const BlockStyleControls = ({ editorState, onToggle }) => {
  const selection = editorState.getSelection();
  const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

  return (
    <>
      {BLOCK_TYPES.map((type, i) => (
        <StyleButton
          key={type.style}
          active={type.style === blockType}
          icon={type.icon}
          onToggle={onToggle}
          style={type.style}
          index={i}
        />
      ))}
    </>
  );
};

BlockStyleControls.propTypes = {
  editorState: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const StyleButton = ({ style, active, onToggle, icon, index }) => {
  let className = 'material-icons';
  if (active) {
    className += ' active';
  }

  return (
    <i
      className={className}
      role="menuitem"
      title="Toggle to change style"
      tabIndex={index}
      onMouseDown={() => {
        onToggle(style);
      }}
    >
      {icon}
    </i>
  );
};

StyleButton.propTypes = {
  style: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  icon: PropTypes.element.isRequired,
  index: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const Redactor = ({ value, onChange, className, header, fullScreen, placeholder }) => {
  const editor = useRef(null);

  const handleKeyCommand = ({ command, e }, eState) => {
    if (command === 'tab') {
      const newEditorState = RichUtils.onTab(e, value, 4 /* maxDepth */);
      if (newEditorState !== value) {
        onChange(newEditorState);
        return 'handled';
      }
      return 'not-handled';
    }
    const newState = RichUtils.handleKeyCommand(eState, command);
    if (newState) {
      onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const toggleBlockType = (blockType) => {
    onChange(RichUtils.toggleBlockType(value, blockType));
  };

  const toggleInlineStyle = (inlineStyle) => {
    onChange(RichUtils.toggleInlineStyle(value, inlineStyle));
  };

  const focusEditor = () => {
    editor.current.focus();
  };

  return (
    <>
      {header && <InputHeader>{header}</InputHeader>}
      <RedactorStyle className={`redactor ${className}`} onClick={focusEditor} fullScreen={fullScreen}>
        <Editor
          editorState={value}
          onChange={onChange}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={myKeyBindingFn}
          placeholder={placeholder}
          spellCheck
          ref={editor}
        />
        <div className="redactorItems">
          <InlineStyleControls editorState={value} onToggle={toggleInlineStyle} />
          <BlockStyleControls editorState={value} onToggle={toggleBlockType} />
        </div>
      </RedactorStyle>
    </>
  );
};

Redactor.defaultProps = {
  className: '',
  header: '',
  fullScreen: false,
  placeholder: '',
};

Redactor.propTypes = {
  value: PropTypes.object.isRequired,
  className: PropTypes.string,
  header: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  fullScreen: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default Redactor;
