export type User = {
    id: number;
    name: string;
    slug: string;
    first_name: string;
    last_name: string;
    image_path: string;
    address: string;
    genre: G;
    city: string;
    phone: string;
    email: string;
    password: string | null;
    created_at: Date;
    updated_at: Date;
}

enum G {
    'M',
    'F'
}