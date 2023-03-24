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
  likeCount : number
  detailCount : number
  postDetail : PostDetailGetAllRes[]
  fileId : string[]
  showComment : boolean
}