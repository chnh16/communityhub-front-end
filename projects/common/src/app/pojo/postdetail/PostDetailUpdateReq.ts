import { FileInsertReq } from "../file/FileInsertReq";

export interface PostDetailUpdateReq{
  id : string,
  postId : string,
  file : FileInsertReq,
  detailContent : string,
  ver : number
}