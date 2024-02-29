<a href="https://www.buildingtransparency.org" target="bt"><img style="float:right" src="https://www.buildingtransparency.org/static/assets/svg/logo.svg"></a>

<a href="../">Footprint Builder</a><br>
<h1 id="pageTitle"><span class="ziptext"></span> Environmental Product Declarations (EPD)</h1>

**From BuildingTransparency.org**
[About OpenEPD](https://www.buildingtransparency.org/programs/openepd/)
[Material Search](https://buildingtransparency.org/ec3/material-search) - Google Login works
[OpenEPD API](https://openepd.buildingtransparency.org/) - Swagger UI

The API key expires every 72 hours.
The 401 error is replaced by a list when you update the key.
(Currently you have to [download our repos](../../../localsite/start/steps/) to edit the key)

<b>TO DO:</b> Allow site users to enter their BuildingTransparency key here. Use [javascript sample on starter page](../../../localsite/start/steps/).

*Your API Key (Not yet activated):*
<input type="text" id="btKey" class="textInput" style="width:210px" placeholder="Your API Key"  autofocus onfocus="this.select()" oninputX="updateKey()"><br><br>

<b>TO DO:</b> Automate saving API as .json or .csv files using <code>npm run download</code> technique from <a href="../../charts/">EPA widgets</a>.<br>

View our [Product YAML notes](../product/) for steps on using Postman.  


## Display Footprints from Static Files

Check out how faster the EPD product list displays when <a href="../../../community/resources/diffbot/#feed=epd">loaded from a static json file</a>. 

 
<!--
<a href="../../products/#show=openepd">View Feed on Map</a> (allow 8 seconds) - also now 401 (Unauthorized) 
-->



<!--
By using a static json file, we'll load 30,000+ records (775K) in a quarter of a second, similar to the <a href="https://publictreemap.org">Santa Monica tree inventory</a>.
-->

Get your bearer token from logging into the <a href="https://openepd.buildingtransparency.org/#/epds/get_epds_id">OpenEPD Swagger API</a>, then you can paste in in the following to run from a console:

	curl -X 'GET' \
	'https://openepd.buildingtransparency.org/api/epds?page_number=1&page_size=100' \
	-H 'accept: application/json' \
	-H 'filter: {"epds.name":"ASTM International"}' \
	-H 'Authorization: Bearer [Your Bearer Token]'

We recomend saving your own private desktop swagger file with your API commands. Coordinate updates with Loren.

Field documentation:
<a href="https://docs.google.com/spreadsheets/d/1q2TW0GlLlK7yH3k5TSsWGmXyL94KPI9VUWWv9vid63A/edit">OpenEPD spreadsheet</a> - Are these variable also accessible in the API?
<a href="https://buildingtransparency.org/ec3/creator-contacts/epds">How to Get an EPD</a> - Includes  “nutrition label” image
<a href="https://www.oneclicklca.com/simple-epd-guide/" target="epdGuide">EPD Guide</a> - One Click LCA<br>

<b>TO DO:</b> Modify the API URL used in this page to return only the interesting fields, including the company and product names. Add a toggle to load all values.

<!--
Phil wrote: Soft search terms is a feature where we *delete* search terms if there are zero returns.  It's not really what you want in an API. 
-->

Here's a [blank starter for building TypeScript apps](https://stackblitz.com/edit/typescript) within [stackblitz.com](https://stackblitz.com)

You could build on <a href="../../../community/projects/#widgets">Abrie's React work</a> - Abrie has started React work in this <a href="https://github.com/abrie/zctaimpacts">ZCTA Impacts repo</a>. Here's the <a href="https://zctaimpacts.abrie.dev/#zip=30318">resulting label output</a>. 


Abrie's work could be formatted to match our [HTML template](../../io/template/) (right column). Shorten numbers. Drive location filters by URL hash [param values](../../localsite/) like #zip=30318 and #geo=US13121,US1308 for counties. Compare location to national average and add red and green to the right to indicated hotspots.

Check out [React with Blitz.js](https://blitzjs.com) for data layer abstraction that eliminates the need for REST/GraphQL.

Output Display:
<div id="urlDisplay" style="overflow-wrap: break-word;"></div>

<div id="clickToExpand" style="display:none">Click bars to expand</div>