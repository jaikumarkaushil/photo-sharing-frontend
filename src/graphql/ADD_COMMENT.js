import { gql } from "@apollo/client";

const ADD_COMMENT = gql`
    mutation AddCommentMutation($post_id: ID!, $comment: String!) {
        addComment(idPost: $post_id, comment: $comment) {
            message
            success
        }
    }
`;

export default ADD_COMMENT;
