import { ProfileState } from "./profile/types";

export interface AppState {
  profile: ProfileState;
}

export type BaseAction<T = string> = {
  type: T;
};

export type ActionGeneratorType0<T = BaseAction> = () => T;

export type ActionGeneratorType1<P1 = any, T = BaseAction> = (p1: P1) => T;

export type ActionGeneratorType2<P1 = any, P2 = any, T = BaseAction> = (p1: P1, p2: P2) => T;
