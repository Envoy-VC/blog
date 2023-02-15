import { gql, request } from "graphql-request";

export const getPostCardData = async () => {
  const query = gql`
    query PostCardData {
      postsConnection {
        edges {
          node {
            coverImage {
              url
            }
            date
            slug
            title
            id
            posts_for_author {
              ... on Author {
                id
                name
                picture {
                  url
                }
              }
            }
            posts_for_category {
              ... on Category {
                id
                name
              }
            }
          }
        }
      }
    }
  `;
};
