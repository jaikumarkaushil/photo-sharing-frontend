import { gql } from "@apollo/client";

const LIKE = gql`
    mutation LikeMutation($post_id: ID!) {
        addLike(idPost: $post_id) {
            message
            success
        }
    }
`;

export default LIKE;
