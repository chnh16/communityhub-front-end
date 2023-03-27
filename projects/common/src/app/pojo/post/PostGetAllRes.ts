import { PollingAnswerRes } from "../pollinganswer/PollingAnswerRes"
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
  likeCount : number
  detailCount : number
  postDetail : PostDetailGetAllRes[]
  pollingChoice : PollingChoiceGetAllRes[]
  fileId : string[]
  showComment : boolean
}