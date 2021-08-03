import React from 'react';
import {useDropzone} from 'react-dropzone';
import './file-upload.scss'
const FileUpload = ({acceptedFileType,savefile,...props}) => {

    const onDrop = React.useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
          savefile(file);
        })
      }, [savefile])
    
    const {acceptedFiles, fileRejections, getRootProps, getInputProps} = useDropzone({accept: '.csv', onDrop});

    const acceptedFileItems = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path}
            - {file.size}
            bytes
        </li>
    ));

    const fileRejectionItems = fileRejections.map(({file, errors}) => (
        <li key={file.path}>
            {file.path}
            - {file.size}
            bytes
            <ul>
                {errors.map(e => (
                    <li key={e.code}>{e.message}</li>
                ))}
            </ul>
        </li>
    ));

    return (
        <section className="container">
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()}/>
                <p>Drag 'n' drop some files here, or click to select files</p>
                <em>{acceptedFileType}</em>
            </div>
            <aside>
                <h4>Accepted files</h4>
                <ul>{acceptedFileItems}</ul>
                <h4>Rejected files</h4>
                <ul>{fileRejectionItems}</ul>
            </aside>
        </section>
    );
}

export default FileUpload;