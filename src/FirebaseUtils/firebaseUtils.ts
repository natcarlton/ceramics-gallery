import {getDownloadURL, listAll, ref} from "firebase/storage";
import {storage} from "./firebaseConfig";

const fetchImages = async () => {
    const listRef = ref(storage, 'images');
    let result = await listAll(listRef);
    console.log(result)
    let urlPromises = result.items.map(imageRef => getDownloadURL(imageRef))

    return Promise.all(urlPromises);
}

export const loadImages = async () => {
    const urls = await fetchImages();
    return urls
}