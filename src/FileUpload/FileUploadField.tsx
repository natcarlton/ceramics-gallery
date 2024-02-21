import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {firebaseUploadFile} from "./firebaseUploadFile";
import fileUploadPercentageStore from "../FirebaseUtils/fileUploadPercentageStore";
import {fileUploadStyles} from "./styles/fileUploadStyles";
import { AiOutlineUpload } from "react-icons/ai";

const FileUploadField = () => {
    const onDrop = useCallback((acceptedFiles: any) => {
        firebaseUploadFile(acceptedFiles[0])
    }, [])


    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    const { fileUploadPercentageStoreProps } = fileUploadPercentageStore(
        (state: { fileUploadPercentageStoreProps: any; }) => ({
            fileUploadPercentageStoreProps: state.fileUploadPercentageStoreProps,
        })
    );
    console.log("fileUploadPercentageStoreProps", fileUploadPercentageStoreProps)

    return (
        <div {...getRootProps()}  style={fileUploadStyles().fileUploadButtonContainer}>
            <input {...getInputProps()}/>
            <div style={fileUploadStyles().fileUploadButton}>
                <AiOutlineUpload size={'2em'}/>
                    <p>Upload Photo</p>
                {
                    fileUploadPercentageStoreProps.percentage !== undefined ?
                        <div>{fileUploadPercentageStoreProps.percentage}</div>    :
                        <></>
                }
            </div>
        </div>
    )
}

export default FileUploadField