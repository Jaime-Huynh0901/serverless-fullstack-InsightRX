# Project-IRX: VILLAIN App for the HERO API (AWS)

![Project license badge](https://img.shields.io/badge/license-MIT-brightgreen)

**Client: InsightRX**

The InsightRx event capture service (HERO) needs a UI in order to make it easier to use and to manage. The goal of this project is to create a web application that will be used to manage HERO event capture and perform some simple analysis on the captured event data.

[Live Demo](http://website-sqazxz7.s3-website.us-east-1.amazonaws.com/)

# Actors & Stakeholders

## Apollo or Nova developer (Developer)

```
A developer who is charged with creating new event types
and generating events of those types that capture what product users
(i.e. Apollo/Nova) do when they interact with the user interface.
Using event type definitions, developers should be able to create events
that correspond to those types that are then emitted to HERO in order
to capture user behavior.
```

**Actor Goals (Developer):**

- Create/Read/Update/Delete event types
- Generate sample events of a registered type for use in instrumenting a product front-end with HERO tracking capability

## Analytics User (User)

```
A product stakeholder who wants to know how the product
(i.e. Apollo or Nova) is being used by seeing at a minimum a
time series view of what types of events have been captured and
some summary metrics around them (min, max, average) over a date range.
Additionally, they would like to see the details of events over time.
Users may be  product managers, marketers, or executives who
are interested in how a product is being used.
```

**Actor Goals (User):**

- Select and view event types for a product
- View events for a product
  - As time chart
  - As pie chart or bar graph
- View the details of an individual event
- Filter viewed events
  - By date range
  - By event properties

# Table of Contents

- [Installation](#Installation)
- [Deployed](#Deployed)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Credits](#Credits)
- [License](#License)
- [Tests](#License)
- [Questions](#Questions)
- [AWSsetup](#AWS-SETUP)

## Installation

1. Locate the root folder of the HERO application.
2. `cd api` then run `npm install`
3. `cd site` then run `npm install`

## Start Redis (open new terminal from root)

`cd api`
`cd redis-stable`
`src/redis-server`

## Start Application (open new terminal from root)

- `cd api`
- `npm start`
- Go to [localhost:3000](http://localhost:3000).

## Deployed
Deployed application in AWS: [Live Application](http://website-sqazxz7.s3-website.us-east-1.amazonaws.com/)

## Usage

```
Key Technologies  Used:
Node.js - React.js - Redux - Express - JavaScript - JSON Schema - Redis - Trie tree - AWS - Serverless - DynamoDB
```

## Contributing

Pull requests are welcome. Please use the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md) and for major changes, please open an issue beforehand to discuss the changes.

## Credits

This project was worked on by CALA (California Los Angeles) Technologies.

The team consists of:
• Carmen Obied ([carmenobied](https://github.com/carmenobied)),
• Tai Huynh ([jaime-huynh0901](https://github.com/Jaime-Huynh0901)),
• Pierre André Lowenstein ([palowenstein](https://github.com/palowenstein)),
• Alek Valencia ([alek2535](https://github.com/alek2535))
• Juan Rascon ([jayskratch](https://github.com/jayskratch)).

## License

[MIT License](https://github.com/carmenobied/Project-IRX/blob/master/LICENSE) | Copyright © [2020] CALA Technologies

## Tests

There are currently no tests for this project.

## Questions

Have questions? Contact us at:

##### Email: info.cala@gmail.com

## AWS-SETUP

### How to configure AWS serverless

Add your AWS credentials in the `.env` file in the root director in the following format:

```text
AWS_ACCESS_KEY_ID=JAFJ89109JASFKLJASF
AWS_SECRET_ACCESS_KEY=AJ91J9A0SFA0S9FSKAFLASJFLJ

# This signs you JWT tokens used for auth.  Enter a random string in here that's ~40 characters in length.
tokenSecret=yourSecretKey

# Only add this if you want a custom domain.  Purchase it on AWS Route53 in your target AWS account first.
domain=serverless-fullstack-app.com
```

In the root folder of the project, run `serverless deploy`

Lastly, you will need to add your API domain manually to your React application in `./site/src/config.js`, so that you interact with your serverless Express.js back-end. You can find your API url by going into `./api` and running `serverless info` and copying the `url:` value. It should look something like this `https://9jfalnal19.execute-api.us-east-1.amazonaws.com` or it will look like the custom domain you have set.

**Note:** Upon the first deployment of your website, it will take a 2-3 minutes for the Cloudfront (CDN) URL to work. Until then, you can access it via the `bucketUrl`.

If you want to add custom domains to your landing pages and API, either hardcode them in your `serverless.yml` or reference them as environment variables in `serverless.yml`, like this:

```yaml
inputs:
  domain: ${env:domain}
```

```text
domain=serverless-fullstack-app.com
```
