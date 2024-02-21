import FileUploadField from "./FileUploadField";
import {ShowFiles} from "./ShowFiles";
import React from "react";
import {QueryClient, QueryClientProvider} from 'react-query'

const FileUploadFieldContainer = () => {
    const queryClient = new QueryClient()


    return (
        <QueryClientProvider client={queryClient}>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                <FileUploadField/>
                <ShowFiles/>
            </div>
        </QueryClientProvider>
    )
}

export default FileUploadFieldContainer