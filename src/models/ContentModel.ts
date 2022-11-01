export type ContentModel = {
    id?: number | null;
    content: string | null;
    type_content: "video" | "text" | "image" | "audio" | null;
    contentable_id?: number | null;
    contentable_type?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
}