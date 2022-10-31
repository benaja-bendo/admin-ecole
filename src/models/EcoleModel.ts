import {TypeEcoleModel} from "./TypeEcoleModel";
import {CycleModel} from "./CycleModel";
import {LocationModel} from "./LocationModel";

export type EcoleModel = {
    id: number;
    name: string;
    slug: string;
    email: string;
    description: string;
    avantages: string;
    path_logo: string;
    path_baniere: string;
    images_ecole: [{
        id: number;
        ecole_id?: number;
        path_image: string;
        description: string;
        created_at: string;
        updated_at: string;
    }];
    site_web: string | null;
    category: "private" | "public";
    type_ecole: TypeEcoleModel[];
    cycles: CycleModel[];
    location: LocationModel[];
    demandes: any[];
    users: any[];
    created_at: string;
    updated_at: string;
};
