import {ref, uploadBytesResumable, getDownloadURL, getStorage} from "firebase/storage";
import {firebaseApp} from "./firebaseConfig";
import storageStore from "./FileUpload/storageStore";

// const storage = storageStore.getState()
const storage = getStorage(firebaseApp)

export const firebaseUploadFile = (file: File) => {
console.log(storage)
    // Create the file metadata
    /** @type {any} */
    const metadata = {
        contentType: 'image/jpeg'
    };

// Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, 'images/' + file.name);
     const uploadTask = uploadBytesResumable(storageRef, file, metadata);
//
// Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            console.error("error")
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                storageStore.getState().setStorage(storage)
            });
        }
    );
}
