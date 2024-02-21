import {useEffect, useState} from "react";
import {useQuery} from "react-query";
import {loadImages} from "../FirebaseUtils/firebaseUtils";
import fireUseQueryStore from "../FirebaseUtils/fireUseQueryStore";
import {galleryStyles} from "./styles/galleryStyles";

export const ShowFiles = () => {
    const [files, setFiles] = useState<any>([])

    const {data, status, refetch} = useQuery('firebase', loadImages)
    const { fireUseQueryStoreProps } = fireUseQueryStore(
        (state: { fireUseQueryStoreProps: any; }) => ({
            fireUseQueryStoreProps: state.fireUseQueryStoreProps,
        })
    );

    useEffect(() => {
        refetch()
    }, [fireUseQueryStoreProps])

    useEffect(() => {
        if (status === 'success') {
            setFiles(data)
        }
    }, [data, status]);

    return (
        <div style={{...galleryStyles().gallery}}>
            {
                files.map((image: string | undefined, key: any) => {
                    return <img src={image} alt={image} width={200} height={200} style={{objectFit: 'cover'}} key={key}/>
                })
            }
        </div>)
}