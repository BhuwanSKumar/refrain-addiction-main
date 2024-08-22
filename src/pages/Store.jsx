import create from 'zustand';

const useSharedStore = create((set) => ({
  sharedData: '',
  setSharedData: (data) => set({ sharedData: data }),
}));

export default useSharedStore;