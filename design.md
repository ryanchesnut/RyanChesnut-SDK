Design Document
Introduction
This document describes the design and architecture of the LOTR-SDK software. LOTR-SDK is a software development kit that allows users to query for data on the Lord of the Rings movies.

User Interface Mockup

Architecture
LOTR-SDK is built using Node.js and relies on the-one-api (https://the-one-api.dev/) for data.
You can find the full documentation here.
https://the-one-api.dev/documentation

Architecture Diagram

Data Model
The data model used in Project X is designed to be simple and flexible. There are two main entities in the system: Movies and Quotes for now.

type Movie = {
\_id: string;
name: string;
runtimeInMinutes: number;
budgetInMillions: number;
boxOfficeRevenueInMillions: number;
academyAwardNominations: number;
academyAwardWins: number;
rottenTomatoesScore: number;
};

export type Quote = {
\_id: string;
dialog: string;
movie: string;
character: string;
id: string;
};

Security
LOTR-SDK relies on a Bearer token to make authenticated calls. You generate a token and pass it to the setup object.

Deployment
LOTR-SDK is deployed as an NPM package and can be installed using npm or yarn

yarn add rchesnut-lotr-sdk
or
npm install rchesnut-lotr-sdk

Dependencies
LOTR-SDK uses the following external libraries and frameworks:

node-fetch

LOTR-SDK includes a comprehensive test suite to ensure that the system functions as expected. The tests are implemented using the unittest framework, and cover all major components of the system. We also use pytest for test discovery and coverage to measure test coverage.
