import { FileInsertReq } from "../file/FileInsertReq"

export interface PostDetailInsertReq {
  postId : string,
  file : FileInsertReq,
  detailContent : string
}