import { FileInsertReq } from "../file/FileInsertReq"

export interface ArticleInsertReq {
    articleTitle: string
    articleContent: string
    photoId?: FileInsertReq[]
}