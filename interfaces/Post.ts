export interface Post {
    _id?: string;
    images?: string[];
    post_type: 'text' | 'image' | 'video' | 'audio';
    heading: string;
    category: string;
    prompt: string;
    tags: string[];
}