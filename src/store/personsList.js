import axios from "axios";
import { defineStore } from "pinia";

export const useStore = defineStore("personsListStore", {
  state: () => ({
    personsList: [],
    popularPerson: "",
    count: 1,
    imageUrl: "",
  }),
  actions: {
    async getData() {
      const url =
        "https://api.bing.microsoft.com/v7.0/search?" +
        "count=10&responseFilter=images" +
        `&q=${this.popularPerson}`;
      const option = {
        headers: {
          "Ocp-Apim-Subscription-Key": "734029bc08524d749814985d0373ed63",
        },
      };
      await axios.get(url, option).then(res => {
        this.imageUrl = res.data.images.value[0].contentUrl;
        console.log(this.imageUrl);
      });
    },
    addPopularPerson() {
      if (this.popularPerson === "") return;
      const personInfo = {
        person: this.popularPerson,
        count: this.count,
        image: this.imageUrl,
      };
      const res = this.personsList.map((personInfo) => personInfo.person);
      const index = res.indexOf(this.popularPerson);
      if (index >= 0) {
        this.personsList[index].count++;
      } else {
        this.getData();
        this.personsList.push(personInfo);
        console.log(personInfo);
      }
      this.popularPerson = "";
    },
  },
});
