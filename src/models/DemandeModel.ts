export type DemandeModel = {
    demande_id: number;
    user_id: number;
    initiateur: 'ecole' | 'user';
    response: 'accept' | 'refuse' | 'attente';
    user_name: string;
    demande_at: string;
}