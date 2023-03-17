import { PollingChoiceUpdateReq } from "../pollingchoice/PollingChoiceUpdateReq";

export interface PollingDetailUpdateReq {
  id : string,
  pollingQuestion :  string,
  choices : PollingChoiceUpdateReq[],
  ver : number
}