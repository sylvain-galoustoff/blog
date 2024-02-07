import { atom } from 'recoil'

const loadedState = atom({
    key: 'loadedState',
    default: false
})

export default loadedState