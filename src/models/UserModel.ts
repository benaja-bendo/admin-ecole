import { RoleModel } from "./RoleModel";
export type UserModel = {
  id: number;
  name: string;
  slug: string;
  first_name: string;
  last_name: string;
  image_path: string;
  address: string;
  genre: "M" | "F";
  city: string;
  phone: string;
  email: string;
  password: string | null;
  created_at: Date;
  updated_at: Date;
  roles: RoleModel[];
  demandes?: any[];
  ecoles?: [{
    initiateur: string;
    demande_id: number;
    ecole_id: number;
    ecole_name: string;
    accept_at: string;
  }];
};

enum G {
  "M",
  "F",
}
