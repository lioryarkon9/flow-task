import { TGeo } from "./geo.types";

export type TAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: TGeo;
};
