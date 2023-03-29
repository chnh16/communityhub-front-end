import { PollingAnswerRes } from "../pollinganswer/PollingAnswerRes"
import { PollingAnswerGetCountRes } from "../pollinganswer/PollingAnswerGetCountRes"
import { PollingChoiceGetAllRes } from "../pollingchoice/PollingChoiceGetAllRes"
import { PostDetailGetAllRes } from "../postdetail/PostDetailGetAllRes"
import { PostBookmarkRes } from "./PostBookmarkRes"
import { PostLikeRes } from "./PostLikeRes"

export interface PostGetAllRes {
  id : string
  userId : string
  userFileId : string
  fullName :  string
  postTitle : string
  postContent :  string
  postTypeId :  string
  postedAt : Date
  categoryName : string
  isLiked : PostLikeRes | null
  isBookmarked : PostBookmarkRes | null
  isAnswered : PollingAnswerRes | null
  postDetail : PostDetailGetAllRes[]
  pollingChoice : PollingChoiceGetAllRes[]
  pollingAnswer : PollingAnswerGetCountRes[]
  fileId : string[]
  showComment : boolean
  isPremium : boolean
  likeCount : number
  detailCount : number
}