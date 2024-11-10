/** author Abdulkarim Getachew abdulkarimgmohammed@gmai.com */

import { defineStore } from "pinia";
export const useCourseStore = defineStore({
  id: "course",

  state: () => {
    return {
      planPopupOpen: false,
      personalTabActive: true, // true for personal, false for team
    };
  },

  getters: {
    isPlanPopupOpened() {
      return this.planPopupOpen;
    },
    isPersonalPlanActive() {
      return this.personalTabActive;
    },
  },

  actions: {
    handleOpenPlanPopup(value) {
      this.planPopupOpen = value;
    },
    handleChangePlanTab(value) {
      this.personalTabActive = value;
    },
  },
});
