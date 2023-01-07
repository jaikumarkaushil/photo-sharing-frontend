import { gql } from "@apollo/client";

const UNLIKE = gql`
    mutation UnlikeMutation($post_id: ID!) {
        deleteLike(idPost: $post_id) {
            message
            success
        }
    }
`;

export default UNLIKE;
