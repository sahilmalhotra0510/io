## Open Footprint

### Environmental Profiles for Individuals, Organizations, Products and Communities.

[Open Footprint Forum](https://www.opengroup.org/openfootprint-forum)  
[US EPA Carbon Footprint Calculator](https://www3.epa.gov/carbon-footprint-calculator/)

View Environmental [impact templates](https://model.earth/community/projects/#widgets) for [Product EPDs](https://buildingtransparency.org/ec3/epds) and the [BuildingTransparency.org API](../../io/template/feed/)

Our [Environmental Impact Profiles](../../io/template/) display 24 impacts for top industries for states and counties.  

Side navigation is not yet active.  
[stand-alone version](../../localsite/info/page/) for developers.

---

[7 top footprint tools](https://footprinthero.com/best-carbon-footprint-calculators) 

<!-- https://coolclimate.berkeley.edu/calculator Same as the following, but maybe slower -->
The [CoolClimate Footprint Calculator](https://coolclimate.org/calculator) from Berkeley ranked first out of the [Top 7 Environmental impact footprints](https://footprinthero.com/best-carbon-footprint-calculators).  It loads with avearges, so you see helpful impact info immediately.

Here's a [CoolClimate profile json](https://github.com/localsite/engine-storybook/blob/master/public/static/json/coolclimate-family.json) sample for sharing profile footprint data. View a sample [footprint.mdx](../../localsite/impact/) file which uses parameter names from [CoolClimate's Excel sheet](https://api-central.berkeley.edu/api/11).

PROJECTS

1. Create HTML output that matches our [environmental impact label](../../io/template/) mockup using OpenEPD data from [Cement Toy Json](../template/feed/toy100.json)

2. Toggle to a <a href="../../apps/">mini-label (see size in upper right)</a> over a <a href="../../community/projects/#cinematic">cinematic background</a> using the six impact sets:  
Air, Water, Land, Energy, Health and Prosperity.

<!--
Here's a [blank starter for building TypeScript apps](https://stackblitz.com/edit/typescript) within [stackblitz.com](https://stackblitz.com)
-->

Abrie has started React work in this <a href="https://github.com/abrie/zctaimpacts">ZCTA Impacts repo</a>. Here's the <a href="https://zctaimpacts.abrie.dev/#zip=30318">resulting label output</a>. Check out [React 18 with Blitz.js](https://blitzjs.com) for data layer abstraction that eliminates the need for REST/GraphQL.

TODO: Format Abrie's work to match our [HTML template](../../io/template/) (right column). Shorten numbers. Drive location filters by URL hash [param values](../../localsite/) like #zip=30318 and #geo=US13121,US1308 for counties. Compare location to national average and add red and green to the right to indicated hotspots.



[Expand the YAML metadata editing process](../../community/projects/#profile-editor) created by Italy to edit any entity profile stored on GitHub.

Our <a href="../../../apps/smm/">3.0 Mockup</a><br><br>

<!--
<a href="https://www.figma.com/file/mVZUSQCMBsIMu9bp7Y8qsS/Impact-Footprint?node-id=0%3A1" target="fig">Contribute to Figma Mockup</a>
-->

### Labela and Mini-widgets Impact Scores

The mini-label will provide a quick overview of the impact score (footprint) for individuals, communities and products. Adjacent to each score will be a real-time data point - like air quality, water quality, energy use, land use, new jobs created.  View placeholder in upper right of our [community&nbsp;starter&nbsp;pages](../../../apps/)

The mini-label will expand into both the Impact Label and the Cinematic Interface.






