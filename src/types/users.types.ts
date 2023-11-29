import { TAddress } from "./addresses.types";
import { TCompany } from "./companies.types";

export type TUser = {
  id: number;
  name?: string;
  username?: string;
  email?: string;
  address?: TAddress;
  phone?: string;
  website?: string;
  company?: TCompany;
};
