import { PollingChoiceGetAllRes } from "../pollingchoice/PollingChoiceGetAllRes";

export interface PollingDetailGetAllRes {
  id : string,
  postId : string,
  pollingQuestion : string,
  listChoice : PollingChoiceGetAllRes[]
}