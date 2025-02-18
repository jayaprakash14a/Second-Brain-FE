export interface ContentsModel {
    contents: Content[],
    shared: boolean,
    onDelete: (_id: string) => void
}

export interface Content {
    title: string,
    link: string,
    type: ContentType,
    _id: string
}

export interface Contents {
    Contents: Content[]
}

export interface UserContent {
    username: string;
    contents: Content[];
    refresh: () => void;
}

export enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

export interface ContentModal {
    open : boolean,
    onClose : ()=>void
}

// type ContentType = "twitter" | "youtube" | "text";
