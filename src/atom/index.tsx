import { atom } from "recoil";

export const loadingState = atom({
  key: "loadingState",
  default: false,
});
export const authorizationState = atom({
  key: "authorization",
  default: ""
})