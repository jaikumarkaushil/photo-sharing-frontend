import { gql } from "@apollo/client";

const GET_FEED = gql`
  query getFeed {
    # getAllPosts {
    #     id
    #     idUser
    #     filename
    #     mimetype
    #     path
    #     likes
    #     created_at
    #     updated_at
    #     comments {
    #         id
    #         idUser
    #         idPost
    #         comment
    #         created_at
    #         updated_at
    #     }
    #     postLikes {
    #         id
    #         idUser
    #         idPost
    #         created_at
    #         updated_at
    #     }
    # }
    getAllPosts {
    _id
    idUser {
      _id
      fullName
      userName
      email
      profileImage
    }
    caption
    imageURL
    likes
    postLikes {
      _id
      idUser
      idPost
      createdAt
      updatedAt
    }
    comments {
      _id
      idUser
      idPost
      comment
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
`;

export default GET_FEED;
