---
title: How you can use github Action
description: Automate, customize, and execute your software development workflows right in your repository with GitHub Actions.
date: June 21, 2021
updatedOn : Mar 21, 2022
coverImage: /images/post/gitaction.png
tags: github Action,
---

### Introduction
You only need a GitHub repository to create and run a GitHub Actions workflow. 

So how GitHub action works, __when something happens in your repo or to your repo some action will be executed in the response. this event can we commit, creation of issue, contributor join, pull request etc__. that is it you write like on this event run this code simple !!

 Github action is for to automate tasks that cut time of the developer, one good example can be __CICD__ pipeline and this is meant for the developer so you will not need a DevOps person in the team and also it is integrated with the GitHub so need to add any third-party tool.

workflow is the chain of the action, let say we have a node app when someone push code in master we need these steps to be executed
1. make docker image from current code
2. push docker image to private docker registry 
3. deploy that image 

so all these steps are action and this is deployment workflow we can say.

### syntext of github action file [yaml], This harbour bridge GitHub integration test workflow.

```yml
on:
  push:
    branches:
      - master
  pull_request:
name: integration-tests-against-emulator
jobs:
  test:
    runs-on: ubuntu-latest
    env:
      # set PostgreSQL related environment variables
      PGHOST: localhost
      PGPORT: 5432
      PGUSER: postgres
      PGDATABASE: postgres
      PGPASSWORD: postgres

      # set MySQL related environment variables
      DB_HOST: localhost
      MYSQLHOST: localhost
      MYSQLPORT: 3306
      MYSQLUSER: root
      MYSQLDATABASE: test
      MYSQLPWD: root

      # set DynamoDB related environment variables
      AWS_ACCESS_KEY_ID: dummyId
      AWS_SECRET_ACCESS_KEY: dummyKey
      AWS_REGION: dummyRegion
      DYNAMODB_ENDPOINT_OVERRIDE: http://localhost:8000

      # sql server envs
      SA_PASSWORD: tCUE9c1&Ucp0

    services:
      spanner_emulator:
        image: gcr.io/cloud-spanner-emulator/emulator:1.2.0
        ports:
          - 9010:9010
          - 9020:9020
      postgres:
        image: postgres:9.6
        env:
          POSTGRES_USER: postgres
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: postgres
        ports:
        - 5432:5432
        # needed because the postgres container does not provide a healthcheck
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5
      mariadb:
        image: mariadb:10.3
        env:
          MYSQL_ROOT_PASSWORD: root
          MYSQL_DATABASE: test
        ports:
        - 3306:3306
        # needed because the mysql container does not provide a healthcheck
        options: --health-cmd="mysqladmin ping" --health-interval=10s --health-timeout=5s --health-retries=3
      dynamodb_emulator:
        image: amazon/dynamodb-local:1.16.0
        ports:
        - 8000:8000
        options: --workdir /home/dynamodblocal --health-cmd "curl --fail http://127.0.0.1:8000/shell/ || exit 1" --health-interval 10s --health-timeout 5s --health-retries 5
      sqlserver:
        image: mcr.microsoft.com/mssql/server
        env:
          SA_PASSWORD: ${{env.SA_PASSWORD}}
          MSSQL_PID: Express
          ACCEPT_EULA: Y
        ports:
          - 1433:1433
        options:
          --health-cmd "/opt/mssql-tools/bin/sqlcmd -U sa -P $SA_PASSWORD -Q 'select 1' -b -o /dev/null"
          --health-interval 10s --health-timeout 5s --health-retries 3

    steps:
      - uses: actions/checkout@v2

      # init a PostgresSQL database from the test_data
      - name: Install PostgreSQL 12 client required for loading .sql files
        run: |
          sudo bash -c "echo deb http://apt.postgresql.org/pub/repos/apt/ bionic-pgdg main >> /etc/apt/sources.list.d/pgdg.list"
          wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
          sudo apt-get update
          sudo apt-get -yq install libpq-dev postgresql-client-12
      - run: psql --version
      - run: psql -f test_data/pg_dump.test.out

      # init a MySQL database from the test_data
      - run: mysql --version
      - run: mysql -v -P 3306 --protocol=tcp -u root -proot test < test_data/mysqldump.test.out

      # init sql server with test_data
      - name: Install sqlcmd required for loading .sql files
        run: |
          curl https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -
          curl https://packages.microsoft.com/config/ubuntu/16.04/prod.list | sudo tee /etc/apt/sources.list.d/msprod.list
          sudo apt-get update 
          sudo apt-get install mssql-tools unixodbc-dev
          echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bash_profile
      - run: sqlcmd -?
      - run: sqlcmd -U sa -P ${SA_PASSWORD} -i test_data/sqlserver.test.out

      # create a spanner instance
      - uses: google-github-actions/setup-gcloud@master
        with:
          version: '290.0.1'
      - run: gcloud info
      - run: gcloud config configurations create emulator
      - run: gcloud config set auth/disable_credentials true
      - run: gcloud config set project emulator-test-project
      - run: gcloud config set api_endpoint_overrides/spanner http://localhost:9020/
      - run: gcloud spanner instances create test-instance --config=emulator-config --description="Test Instance" --nodes=1

      # run tests
      - uses: actions/setup-go@v2
        with:
          go-version: '1.13'
      - run: go version
      - run: go test -v ./...
        env:
          SPANNER_EMULATOR_HOST: localhost:9010
          HARBOURBRIDGE_TESTS_GCLOUD_PROJECT_ID: emulator-test-project
          HARBOURBRIDGE_TESTS_GCLOUD_INSTANCE_ID: test-instance

```