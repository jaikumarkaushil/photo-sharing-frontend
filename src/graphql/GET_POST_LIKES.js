import { gql } from "@apollo/client";

const GET_POST_LIKES = gql`
    query getPostLike($post_id: ID!) {
        getPostLikes(idPost: $post_id) {
            _id
            fullName
            userName
            email
            profileImage
        }
    }
`;

export default GET_POST_LIKES;
