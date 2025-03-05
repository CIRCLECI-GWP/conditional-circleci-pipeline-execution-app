# Conditional Pipeline Execution

[![CircleCI](https://circleci.com/gh/CIRCLECI-GWP/conditional-circleci-pipeline-execution-app.svg?style=svg)](https://circleci.com/gh/CIRCLECI-GWP/conditional-circleci-pipeline-execution-app)

<p align="center"><img src="https://avatars3.githubusercontent.com/u/59034516"></p>

A Node API project with tests linting packages setup for the purpose of demonstrating the use of the Conditional Pipeline Execution feature within CircleCI.

## Setting up the prject

### Clone the repository:

run the following command on your terminal to clone the repository:

```bash
git clone https://github.com/CIRCLECI-GWP/conditional-circleci-pipeline-execution-app.git

cd conditional-circleci-pipeline-execution-app
```

### install the dependencies

Install the dependencies using the following command:

```bash
npm install
```

### Create Mongo Atlas Account

Since, we want to be able to distribute the data to multiple users and also execute the pipeline in CircleCI, we need to create an account on [Mongo Atlas](https://docs.atlas.mongodb.com/getting-started/). Once we have an account, under Collections, we need to create a database and a collection. The database name is `expressAPI` and the collection name is `posts`. Once this is done, we need to copy the connection url and add it to our `.env` file and also as an environment variable to CircleCI. The variable name is `DB_CONNECTION` and the value is the connection url will be something like the following:

```js
mongodb+srv://<dbUser>:<user_password>@cluster0.jigii.mongodb.net/expressAPI?retryWrites=true&w=majority
```

**Note:** <i>You also need to grant explicit permissions to the database user being used to drop a database as this is not set up a default permission in the Mongo Atlas dashboard.</i>

Once this has been added to the `.env`, we are good to go. You can test the connection by executing the tests.

Note: If you are not running CircleCI, you can skip this step and locally install Mongo on your machine and configure the `DB_CONNECTION` environment variable to your local mongo connection.

## Running tests

```bash
npm test
```

## Details

This repo is built following a tutorial published on CircleCI blog under the CircleCI Guest Writer Program.

-   Blog post: [Conditional CircleCI Pipeline Execution][blog]
-   Author's GitHub profile: [Waweru Mwaura][author]

### About CircleCI Guest Writer Program

Join a team of freelance writers and write about your favorite technology topics for the CircleCI blog. Read more about the program [here][gwp-program].

Reviewers: [Ron Powell][ron], [Stanley Ndagi][stan], [Amos Omondi][amos]

[blog]: https://circleci.com/blog/conditional-circleci-pipeline-execution/
[author]: https://github.com/mwaz
[gwp-program]: https://circle.ci/3ahQxfu
[ron]: https://github.com/ronpowelljr
[stan]: https://github.com/NdagiStanley
[amos]: https://github.com/amos-o
