import React, { useState } from 'react';
import { MdOutlineFileUpload } from 'react-icons/md';
import { FcCheckmark } from 'react-icons/fc';
import { VscClose } from 'react-icons/vsc';
import { BiLoader } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import {
  DropZoneWrapper,
  TextHeader,
  DropZoneArea,
  Input,
  TextWrapper,
  Icon,
  Button,
  Validation,
  FileWrapper,
  Ul,
  Li,
  FileName,
  FileSize,
  FileIcon,
  RemoveIcon,
} from './FileDropzone.style';

const FileDropzone = ({ name, register, required, validationLabel, error, label, onChange, disabled }) => {
  const [loading, setLoading] = useState(false);

  const { acceptedFiles, getRootProps, open, getInputProps } = useDropzone({
    maxFiles: 5,
    multiple: true,
  });

  //  fake loading  remove later
  const fakeLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 20000);
  };

  const files = acceptedFiles.map((file) => (
    <Li key={file.path}>
      <FileName>{file.path}</FileName>
      <FileSize>{`  ${Math.round(file.size / 1024)} kb`}</FileSize>
      <FileIcon>{loading ? <BiLoader /> : <FcCheckmark />}</FileIcon>
      <RemoveIcon onClick={() => fakeLoading()}>
        <VscClose />
      </RemoveIcon>
    </Li>
  ));

  return (
    <DropZoneWrapper>
      <TextHeader>{label}</TextHeader>
      <DropZoneArea {...getRootProps()}>
        <Input
          onChange={onChange}
          disabled={disabled}
          {...(register ? register(name, required) : {})}
          {...getInputProps()}
        />
        <TextWrapper>
          <Icon>
            <MdOutlineFileUpload />
          </Icon>
          <p>Drop a file to add, or</p>
          <Button value="Browse" type="button" onClick={open}>
            BROWSE
          </Button>
        </TextWrapper>
      </DropZoneArea>
      {!error && validationLabel && <Validation>{validationLabel}</Validation>}
      <div>{error}</div>
      <FileWrapper>
        <Ul>{files}</Ul>
      </FileWrapper>
    </DropZoneWrapper>
  );
};

FileDropzone.defaultProps = {
  label: '',
  name: '',
  validationLabel: undefined,
  error: undefined,
  register: undefined,
  required: undefined,
  disabled: false,
  onChange: undefined,
};

FileDropzone.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  validationLabel: PropTypes.string,
  error: PropTypes.object,
  register: PropTypes.func,
  required: PropTypes.object,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default FileDropzone;
