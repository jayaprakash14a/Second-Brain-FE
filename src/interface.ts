export interface ContentsModel {
    contents: [],
    shared: boolean,
    onDelete: (contentId: Number) => void
}

export interface Content {
    title: string,
    link: string,
    type: string,
    id: Number
}

export interface Contents {
    Contents: Content[]
}

export interface UserContent {
    username: string;
    contents: Content[];
    refresh: () => void;
}