import {ref, getDownloadURL, listAll} from "firebase/storage";
import {useEffect, useRef, useState} from "react";
import storageStore from "./storageStore";


export const ShowFiles = () => {
    const [files, setFiles] = useState<any>([])
    const { storage } = storageStore(
        (state: { storage: any }) => ({
            storage: state.storage,
        })
    );

    const currentStorage = useRef(storage)

    useEffect(() => {
        const fetchImages = async () => {
            const listRef = ref(storage, 'images');
            let result = await listAll(listRef);
            console.log(result)
            let urlPromises = result.items.map(imageRef => getDownloadURL(imageRef))

            return Promise.all(urlPromises);
        }

        const loadImages = async () => {
            const urls = await fetchImages();
            setFiles(urls);
        }
        loadImages();
        console.log('here')
    }, [storage]);

    return (
        <div>
            {
                files.map((image: string | undefined, key: any) => {
                    return <img src={image} alt={image} width={200} key={key}/>
                })
            }
        </div>)
}