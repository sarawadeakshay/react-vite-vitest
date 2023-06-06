import { create } from 'zustand';

const useExpandCollapse = create((set) => {
  return {
    isExpandMode: false,
    setIsExpandMode: () => set((state: any) => ({ isExpandMode: !state.isExpandMode }))
  };
});

export default useExpandCollapse;
