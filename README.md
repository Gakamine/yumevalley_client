# Yumevalley client

Yumevalley Client is working along with the Ruby on rails server. The client is working on VueJS to respect the following infrastructure:

![infrastructure scheme](https://cdn.discordapp.com/attachments/530053167988211718/595954346487709696/YumeValley_infra.jpg)

## Project setup
You must download NodeJS to run the client. Run ```npm run serve``` to start the client.

## Additional informations
The client is sending GraphQL request to the server endpoints ```https://api.yumevalley.com/``` and ```https://api.yumevalley.com/auth```.
Learn more about GraphQL here: https://graphql.org/.

## List of packages used
|    Package name     |Version used|               Description              |
|---------------------|------------|----------------------------------------|
|apollo-cache-inmemory| 1.6.3      |Used to cache GrapQL requests           |
|apollo-client        | 2.6.4      |Used to send GraphQL requests           |
|apollo-link          | 1.2.13     |Used to send GraphQL requests to an URL |
|apollo-link-http     | 1.5.16     |Used to send GraphQL requests to an URL |
|bootstrap            | 4.3.1      |CSS components                          |
|bootstrap-vue        | 2.0.3      |CSS Components                          |
|core-js              | 2.6.5      |Core                                    |
|graphql              | 14.5.7     |GraphQL core                            |
|graphql-tag          | 2.10.1     |GraphQL core                            |
|jquery               | 3.4.1      |Core                                    |
|tachyons             | 4.11.1     |Core                                    |
|vue                  | 2.6.10     |Core                                    |
|vue-apollo           | 3.0.0-rc.6 |GraohQL client                          |
|vue-closable         | 0.0.3      |Toggle components                       |
|vue-feather-icons    | 4.21.0     |Icons                                   |
|vue-my-dropdown      | 2.1.0      |Dropdown menu                           |
|vue-router           | 3.1.3      |Setting routes                          |
|vue-switches         | 2.0.1      |Design components                       |
