import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {firebaseUploadFile} from "../firebaseUploadFile";

export const FileUploadField = () => {
    const onDrop = useCallback((acceptedFiles: any) => {
        firebaseUploadFile(acceptedFiles[0])
        console.log(acceptedFiles)
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    )
}