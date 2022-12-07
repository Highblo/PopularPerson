import { defineStore } from 'pinia';

export const useStore = defineStore("personsListStore", {
  state: () => ({
    personsList: [],
  })
})