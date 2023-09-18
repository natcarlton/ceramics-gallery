import {firebaseApp} from "./firebaseConfig";
import {getStorage, ref, listAll, getDownloadURL} from "firebase/storage";
import {useEffect, useState} from "react";


export const ShowFiles = () => {
    const storage = getStorage(firebaseApp);
    const listRef = ref(storage, 'images');
    const [all, setAll] = useState<any>([])



    // getAll.items.forEach((item) => {
    //
    // })
    //
    // const getImages =  getDownloadURL(ref(storage, res.items[0].fullPath))
    // }

    useEffect(() => {
        // all =
        //     .then((res) => {
        //         // return res
        //         // res.prefixes.forEach((folderRef) => {
        //         //     return folderRef
        //         // });
        //         res.items.forEach((itemRef) => {
        //             // All the items under listRef.
        //             return itemRef
        //         });
        //     }).catch((error) => {
        //         // Uh-oh, an error occurred!
        //     })
        // console.log(all)
        // const res = getAll().then(res => {
        //     return getImages(res)
        // })
        //
        // // const images = res.then((url) => {
        // //     console.log(url)
        // //     return <img src={url}/>
        // // })

        const a = listAll(listRef).then((res) => {
            return res
        })
        setAll(a)

        console.log(all)
    }, [])
    console.log("outside ue", all)
// Find all the prefixes and items.
    return (
    <div>
        {
        all !== undefined && all.map((image: any) => {
            image.then((i: string | undefined) => {
                console.log(i)
                return <img src={i} height={100} width={100}/>
            })
        })
        }
    </div>)
    

}