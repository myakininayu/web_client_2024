import { create } from 'zustand';

const useExcelStore = create((set) => ({
  excelData: null,
  
  setExcelData: (data) => set({ excelData: data }),
  clearExcelData: () => set({ excelData: null }),
}));

export default useExcelStore;