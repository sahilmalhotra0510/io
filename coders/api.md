# API for Workflow (Meal Prep and Local Requests)

We're creating embedable workflow lists using the SeeClickFix open311 request system as our API syntax for requesting nutritious meal prep and other forms of local workforce mobilization.

We'll display a list of requests by zip code from the [SeeClickFix open311 API](https://dev.seeclickfix.com)

We'll assemble meal requests using [FDA API food profiles](https://model.earth/data-commons/dist/food) with our YAML/JSON [OpenFootprint](/OpenFootprint) label formatter using the [FDA API](https://fdc.nal.usda.gov/api-guide.html).

We'll fund the meals sent to SeeClickFix using the [OpenCollective API GraphQL](https://graphql-docs-v2.opencollective.com/access) which is accessible via [altairgraphql.dev](https://altairgraphql.dev).

TO DO: Send a meal funding request to our OpenFootprint account or another OpenCollective.com account.