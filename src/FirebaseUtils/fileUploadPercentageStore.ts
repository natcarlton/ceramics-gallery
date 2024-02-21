import { create, SetState } from 'zustand';

export type FileUploadPercentageStore = {
  percentage: number | undefined;
};

export const defaultFileUploadPercentageStore: FileUploadPercentageStore = {
    percentage: undefined,
};

const fileUploadPercentageStore = create((set: SetState<any>) => ({
    fileUploadPercentageStoreProps: { ...defaultFileUploadPercentageStore },

    setFileUploadPercentage: (fileUploadPercentageStoreProps: FileUploadPercentageStore) => {
        set(() => ({ fileUploadPercentageStore }));
    },
}));

export default fileUploadPercentageStore;
