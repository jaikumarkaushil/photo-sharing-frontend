import { gql } from "@apollo/client";

const GET_FEED = gql`
  query getFeed {
    getAllPosts {
        _id
        idUser {
            _id
            fullName
            userName
            email
            profileImage
            isActive
            isPrivate
        }
        caption
        imageURL
        likes
        postLikes {
            _id
            idPost
            createdAt
            updatedAt
        }
        comments {
            _id
            idPost
            comment
            createdAt
            updatedAt
        }
        createdAt
        updatedAt
    }
  }
`;

export default GET_FEED;
