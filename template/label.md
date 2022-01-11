## Widgets - Environmental Profile Labels - React and YAML

<a href="../../../io/template/"><img src="../../../io/template/img/label-sample.png" style="float:right; width:100%; max-width:300px; margin-left:30px; margin-bottom:30px"></a>

<!--
<ol>
<li>
</li>
</ol>
-->
1. Start with the following [nextjs-typescript-tailwind repo](https://github.com/modelearth/nextjs-typescript-tailwind)

2. Implement a new standard-sized [environmental label](../../io/template/) inspired by "nutritional labels" 

3. Design an interactive layout for our <a href="../../apps/">mini-labels</a> and cinematic <a href="../../community/projects/#cinematic">super-labels</a> using the six impact sets: Air, Water, Land, Energy, Health and Prosperity. [Samples](../../apps/)

We're building toward interactive label functionality in React.
Abrie has started React work in this <a href="https://github.com/abrie/zctaimpacts">ZCTA Impacts repo</a>. Here's the <a href="https://zctaimpacts.abrie.dev/#zip=30318">resulting label output</a>. Check out [React 18 with Blitz.js](https://blitzjs.com) for data layer abstraction that eliminates the need for REST/GraphQL.

TODO: Format Abrie's work to match our [HTML template](../../io/template/) (right column). Shorten numbers. Drive location filters by URL hash [param values](../../localsite/) like #zip=30318 and #geo=US13121,US1308 for counties. Compare location to national average and add red and green to the right to indicated hotspots.


Update our [3.0 Mockup](../../../apps/smm/) to apply labels for communities, companies, products and individuals.  


[Expand the YAML metadata editing process](../../community/projects/#profile-editor) created by Italy to edit any entity profile stored on GitHub.

## Mini and Super Widgets - Layout Design and Mock-Ups

### Mini-Labels

The mini-label will provide a very brief summary of a location's score (for countries, states, counties and zips). Adjacent to each score will be a real-time data point - like air quality, water quality, energy use, land proposals, avoidable daily deaths, new jobs created.  [View&nbsp;starter&nbsp;pages](../../apps/)

### Super-Labels

This is where it gets exciting! We're creating expanded cinematic labels around themes like Marvel comics, The Last Airbender and [National&nbsp;Parks](../../apps/land/).


