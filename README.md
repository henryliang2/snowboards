# Canadian Snowboards

This is a project showcasing snowboards manufactured in Canada.
The project was built using React, GraphQL, and AWS (PostgreSQL).

See the [Live Project](https://canadiansnowboards.netlify.app) here.  

The goal of this project for me was to implement my knowledge of
RDBMS and GraphQL into a full-stack project with. I decided to showcase
Canadian-manufactured snowboards as I am personally a huge snowboard
nerd and also a big proponent of buying locally-manufactured products and
supporting small businesses.

## Internal API

Canadian Snowboards uses an internal API built with Express and GraphQL that allows for retreival from the database.

The database is [accessible here](https://canadiansnowboards-server.herokuapp.com/graphql) (GraphiQL is enabled).

The repository for the API is [located here](https://github.com/henryliang2/snowboards-be).

## Data Storage

No external API was used for this project - all data is stored using Amazon RDS.
Canadian Snowboards uses PostgreSQL for data storage. See the database schema and sample rows below:

![ER Diagram](public/ERD.png)

![Sample Rows](public/snapshot.png)

## Technologies

React, Express, GraphQL, SQL, AWS (PostgreSQL)
