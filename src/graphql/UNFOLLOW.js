import { gql } from "@apollo/client";

const FOLLOW = gql`
    mutation UnfollowMutation($user_id: ID!) {
        unfollowUser(id: $user_id) {
            message
            success
        }
    }
`;

export default FOLLOW;
