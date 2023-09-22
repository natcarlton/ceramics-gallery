import FileUploadField from "./FileUploadField";
import {ShowFiles} from "./ShowFiles";
import React from "react";

const FileUploadFieldContainer = () => {
    // const [storage, setStorag]

    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
            <FileUploadField/>
            <ShowFiles  />
        </div>
    )
}

export default  FileUploadFieldContainer