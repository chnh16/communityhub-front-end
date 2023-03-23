import { PostDetailGetAllRes } from "../postdetail/PostDetailGetAllRes"
import { PostBookmarkRes } from "./PostBookmarkRes"
import { PostLikeRes } from "./PostLikeRes"

export interface PostGetAllRes {
  id : string
  userId : string
  fullName :  string
  postTitle : string
  postContent :  string
  postTypeId :  string
  categoryName : string
  isLiked : PostLikeRes
  isBookmarked : PostBookmarkRes
  likeCount : number
  detailCount : number
  postDetail : PostDetailGetAllRes[]
}