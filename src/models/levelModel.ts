import {MatiereModel} from "./MatiereModel";

export type LevelModel = {
    id: number | null;
    name: string;
    slug: string | null;
    matieres?: MatiereModel[];
    created_at: string;
    updated_at: string;
}