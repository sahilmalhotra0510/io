## Impact Label Widgets

<!--
<ol>
<li>
</li>
</ol>
-->



Review the [Top 7 Environmental impact footprints](https://footprinthero.com/best-carbon-footprint-calculators).

Details on our [Environmental Impact Profiles](../../io/template/).

We're using [CoolClimate json](https://github.com/localsite/engine-storybook/blob/master/public/static/json/coolclimate-family.json) as our standard for sharing profile footprint data. View a sample [footprint.mdx](../../community/projects/cinematic/) file which uses variable names from [CoolClimate's Excel sheet](https://api-central.berkeley.edu/api/11).

PROJECTS

1. Mockup updates for Footprint interface using existing APIs.  

2. Create HTML outout that matches our [environmental impact label](../../io/template/) mockup using EPD data from [Cement Toy Json](../template/feed/toy100.json)

3. Toggle to a <a href="../../apps/">mini-label (see size in upper right)</a>

4. Toggle to a cinematic <a href="../../community/projects/#cinematic">super-labels</a> using the six impact sets:  
Air, Water, Land, Energy, Health and Prosperity. [Samples](../../apps/)

<!--
Here's a [blank starter for building TypeScript apps](https://stackblitz.com/edit/typescript) within [stackblitz.com](https://stackblitz.com)
-->

Abrie has started React work in this <a href="https://github.com/abrie/zctaimpacts">ZCTA Impacts repo</a>. Here's the <a href="https://zctaimpacts.abrie.dev/#zip=30318">resulting label output</a>. Check out [React 18 with Blitz.js](https://blitzjs.com) for data layer abstraction that eliminates the need for REST/GraphQL.

TODO: Format Abrie's work to match our [HTML template](../../io/template/) (right column). Shorten numbers. Drive location filters by URL hash [param values](../../localsite/) like #zip=30318 and #geo=US13121,US1308 for counties. Compare location to national average and add red and green to the right to indicated hotspots.



[Expand the YAML metadata editing process](../../community/projects/#profile-editor) created by Italy to edit any entity profile stored on GitHub.

<span style="display:none" class="local">

Update our [3.0 Mockup](../../../apps/smm/) to apply labels for communities, companies, products and individuals.  

<a href="https://www.figma.com/file/mVZUSQCMBsIMu9bp7Y8qsS/Impact-Footprint?node-id=0%3A1" target="fig">Contribute to Figma Mockup</a>
Get started contributing to the design process in React:

Start by forking and cloning our [Engine-Storybook](https://github.com/localsite/engine-storybook) repo.
</span>




