import { create } from 'zustand'

interface EditFormStore {
    formIndex: number | undefined;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useEditFormModal = create<EditFormStore>((set) => ({
    formIndex: undefined,
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export default useEditFormModal;