import { FileInsertReq } from "../file/FileInsertReq"
import { PollingChoiceInsertReq } from "../pollingchoice/PollingChoiceInsertReq"

export interface PostInsertReq{
  postTitle : string,
  postContent : string,
  categoryId : string,
  isPremium : boolean,
  file : FileInsertReq[],
  polling : PollingChoiceInsertReq[]
}