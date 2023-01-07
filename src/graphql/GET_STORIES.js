import { gql } from "@apollo/client";

const GET_STORIES = gql`
    query GetStories {
        getStories {
            _id
            username
            profileImage
        }
    }
`;

export default GET_STORIES;
