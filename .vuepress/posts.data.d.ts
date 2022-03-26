export interface PostData {
    title: string,
    href: string,
    date: string,
    tags?: string[],
    cover?: string,
    excerpt: string,
}
export declare const data: PostData[]
