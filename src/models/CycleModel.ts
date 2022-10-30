import {LevelModel} from "./levelModel";

export type CycleModel = {
    id: number;
    name: string;
    slug: string;
    levels?: LevelModel[];
    created_at: string;
    updated_at: string;
}