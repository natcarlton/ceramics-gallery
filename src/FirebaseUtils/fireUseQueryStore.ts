import { create, SetState } from 'zustand';

export type FireUseQueryStoreState = {
  triggerTime: Date;
};

export const defaultFireUseQueryState: FireUseQueryStoreState = {
  triggerTime: new Date(Date.now()),
};

const fireUseQueryStore = create((set: SetState<any>) => ({
    fireUseQueryStoreProps: { ...defaultFireUseQueryState },

    setFireUseQuery: (fireUseQueryStoreProps: FireUseQueryStoreState) => {
        set(() => ({ fireUseQueryStoreProps }));
    },
}));

export default fireUseQueryStore;
