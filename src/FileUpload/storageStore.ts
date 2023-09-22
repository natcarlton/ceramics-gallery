import { create, SetState } from 'zustand';
import {getStorage} from "firebase/storage";
import {firebaseApp} from "../firebaseConfig";

const storage = {
    storage: getStorage(firebaseApp)
};

const storageStore = create((set: SetState<any>) => ({
    ...storage,
    setStorage: (appliedFilters: any) => {
        set(() => ({ appliedFilters }));
    },
}));

export default storageStore;
