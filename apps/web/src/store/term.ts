import { GetTermResponse } from '@vook-client/api'
import { create } from 'zustand'

export interface TermModalDataType {
  termUid: string
  name: string
  meaning: string
  synonym: string[]
}

interface VocabularyState {
  modalData: TermModalDataType
  setModalData: (data: TermModalDataType) => void
  checkList: string[]
  setCheckList: (
    list: string[] | ((prevCheckList: string[]) => string[]),
  ) => void
  handleCheckList: (uid: string, response: GetTermResponse | null) => void
}

export const useVocabularyStore = create<VocabularyState>((set, get) => ({
  modalData: {
    termUid: '',
    name: '',
    meaning: '',
    synonym: [],
  },
  checkList: [],
  setModalData: (data) => set((prev) => ({ ...prev, modalData: data })),
  setCheckList: (list) =>
    set((state) => ({
      checkList: typeof list === 'function' ? list(state.checkList) : list,
    })),
  handleCheckList: (uid, response) => {
    const { checkList, setCheckList } = get()

    if (uid === 'all' && checkList.length > 0 && checkList.includes('all')) {
      setCheckList([])
      return
    }
    if (uid === 'all') {
      if (response !== null) {
        setCheckList(response.result.map((data) => data.termUid))
      }
      setCheckList((prevCheckList) => [...prevCheckList, 'all'])
      return
    }

    if (checkList.includes(uid)) {
      setCheckList((prevCheckList) => prevCheckList.filter((id) => id !== uid))
    } else {
      setCheckList((prevCheckList) => [...prevCheckList, uid])
    }
  },
}))

export const useVocabulary = () => {
  const { modalData, checkList, setModalData, setCheckList } =
    useVocabularyStore()

  return { modalData, checkList, setModalData, setCheckList }
}
