import gql from 'graphql-tag'
export const GET_CREATION_QUERY = gql`
    query GetCreationQuery($url: String!) {
        creation(creationUrl: $url) {
            title
            creationDate
            coverUrl
            description
            user {
                id
                username
            }
            tags {
                id
                tagname
            }
        }
        chapter(creationUrl: $url,order:"desc",offset:0) {
            id
            title
            coverUrl
            creationDate
            description
            chapterNumber
        }  
    }
`