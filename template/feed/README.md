<img style="float:right" src="https://www.buildingtransparency.org/static/assets/svg/logo.svg">

<h1 id="pageTitle"><span class="ziptext"></span> Environmental Product Declarations (EPD)</h1>
<a href="https://buildingtransparency.org/ec3/material-search">Building Transparency OpenEPD Material Search</a> - Google signin works   

Check out how much faster the list displays when <a href="../../../community/resources/diffbot/#feed=epd">loaded from a static json file</a>.  
<a href="../../products/">View Feed on Map</a> (allow 8 seconds)

View our [Product YAML notes](../product/) for steps on using Postman.  

<b>TO DO:</b> Automate saving API as JSON files using <code>npm run download</code> technique from <a href="../../charts/">EPA widgets</a>.<br>
By using a static json file, we'll load 30,000+ records (775K) in a quarter of a second, similar to the <a href="https://publictreemap.org">Santa Monica tree inventory</a>.

<!-- ALSO SEE: desktop/swagger -->

Get your bearer token from logging into the <a href="https://openepd.buildingtransparency.org/#/epds/get_epds_id">Swagger OpenEPD API</a>, then you can paste in in the following to run from a console:

	curl -X 'GET' \
	'https://openepd.buildingtransparency.org/api/epds?page_number=1&page_size=100' \
	-H 'accept: application/json' \
	-H 'filter: {"epds.name":"ASTM International"}' \
	-H 'Authorization: Bearer [Your Bearer Token]'

Field documentation: <a href="https://docs.google.com/spreadsheets/d/1q2TW0GlLlK7yH3k5TSsWGmXyL94KPI9VUWWv9vid63A/edit">OpenEPD spreadsheet</a> - <a href="https://buildingtransparency.org/ec3/creator-contacts/epds">How to Get an EPD</a> - <a href="https://www.oneclicklca.com/simple-epd-guide/">EPD Guide</a><br><br>

<!--
Phil wrote: Soft search terms is a feature where we *delete* search terms if there are zero returns.  It's not really what you want in an API. 

Modify the API URL used in this page to return only the interesting fields, including the company and product names. Add a toggle to load all values.<br><br>
-->

Generate an <a href="../">Impact Profile</a> from the BuildingTransparency.org feed and local industry data. 


You could build on <a href="../../../community/projects/#widgets">Abrie's React work</a>:<br><br>

Abrie has started React work in this <a href="https://github.com/abrie/zctaimpacts">ZCTA Impacts repo</a>. Here's the <a href="https://zctaimpacts.abrie.dev/#zip=30318">resulting label output</a>. Check out [React 18 with Blitz.js](https://blitzjs.com) for data layer abstraction that eliminates the need for REST/GraphQL.

TO DO:
Format Abrie's work to match our [HTML template](../../io/template/) (right column). Shorten numbers. Drive location filters by URL hash [param values](../../localsite/) like #zip=30318 and #geo=US13121,US1308 for counties. Compare location to national average and add red and green to the right to indicated hotspots.

Here's a [blank starter for building TypeScript apps](https://stackblitz.com/edit/typescript) within [stackblitz.com](https://stackblitz.com)


<div id="urlDisplay" style="overflow-wrap: break-word;"></div>

<div id="clickToExpand" style="display:none">Click bars to expand</div>