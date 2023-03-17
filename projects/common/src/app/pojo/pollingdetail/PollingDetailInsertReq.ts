import { PollingChoiceInsertReq } from "../pollingchoice/PollingChoiceInsertReq";

export interface PollingDetailInsertReq {
  postId : string,
  pollingQuestion : string,
  choices : PollingChoiceInsertReq[]
}