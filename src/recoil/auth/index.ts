import { atom, selector } from "recoil";

export const authState = atom({
  key: "authState",
  default: "",
});

export const isAuthedSelector = selector({
  key: "isAuthedSelector",
  get: ({ get }) => !!get(authState),
});

// export const authState = atomFamily({
//   key: "authState",
//   default:
//     ({ name, password }: { name: string; password: string }) =>
//     async () => {
//       return await dummySignInApi({ name, password });
//     },
// });
