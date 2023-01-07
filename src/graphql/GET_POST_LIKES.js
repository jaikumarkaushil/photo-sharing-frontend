import { gql } from "@apollo/client";

const GET_POST_LIKES = gql`
    query getPostLike($post_id: ID!) {
        addLike(idPost: $post_id) {
            message
            success
        }
    }
`;

export default GET_POST_LIKES;
