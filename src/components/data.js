import { atom } from 'recoil';

export const taskListAtom = atom({
  key: 'taskListAtom',
  default: [],
});

export const newTaskAtom = atom ({
    key: 'newTaskAtom',
    default: '',
})