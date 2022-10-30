import {CycleModel} from "./CycleModel";
import {LevelModel} from "./levelModel";
import {MatiereModel} from "./MatiereModel";
import {ContentModel} from "./ContentModel";
import {AuthorModel} from "./AuthorModel";

export type CoursModel = {
    id: number | null;
    name: string;
    slug: string | null;
    description: string | null;
    path_image: string ;
    is_active: boolean | 1 | 0;
    cycles: CycleModel[];
    levels: LevelModel[];
    matieres: MatiereModel[];
    contents: ContentModel[];
    authors: AuthorModel[];
    created_at: string;
    updated_at: string;
};