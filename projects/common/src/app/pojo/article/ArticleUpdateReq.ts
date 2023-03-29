import { FileInsertReq } from "../file/FileInsertReq"

export interface ArticleUpdateReq {
    id : string
    articleTitle: string
    articleContent: string
    photoId?: FileInsertReq
    ver : number
}