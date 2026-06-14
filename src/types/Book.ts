export interface Book {
    id: number;
    title: string;
    author: string;
    cover: string;
    year: number;
    category: string;
    completed: boolean;
    favorite?: boolean;
    quote?: string;
    reflection?: string;
}