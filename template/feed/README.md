<img style="float:right" src="https://www.buildingtransparency.org/static/assets/svg/logo.svg">

<h1 id="pageTitle"><span class="ziptext"></span> Environmental Product Declarations (EPD)</h1>
<a href="https://buildingtransparency.org/ec3/material-search">Building Transparency OpenEPD Material Search</a> - 
<a href="../../products/">View Feed on Map</a> (allow 8 seconds)
<br><br>


Check out how much faster the list displays when <a href="../../../community/resources/diffbot/#feed=epd">loaded from a static json file</a>.<br><br>

View our [Product YAML notes](../product/) for steps on using Postman.  

<b>TO DO:</b> Automate saving API as JSON files using <code>npm run download</code> technique from <a href="../../charts/">EPA widgets</a>.<br>
By using a static json file, we'll load 30,000+ records (775K) in a quarter of a second, similar to the <a href="https://publictreemap.org">Santa Monica tree inventory</a>.
<br><br>

<!-- ALSO SEE: desktop/swagger -->

Get your bearer token from logging into the <a href="https://openepd.buildingtransparency.org/#/epds/get_epds_id">Swagger OpenEPD API</a>, then you can paste in in the following to run from a console:<br><br>

<pre><code style="padding:0px">
curl -X 'GET' \
'https://openepd.buildingtransparency.org/api/epds?page_number=1&page_size=100' \
-H 'accept: application/json' \
-H 'filter: {"epds.name":"ASTM International"}' \
-H 'Authorization: Bearer [Your Bearer Token]'
</code></pre>

Field documentation: <a href="https://docs.google.com/spreadsheets/d/1q2TW0GlLlK7yH3k5TSsWGmXyL94KPI9VUWWv9vid63A/edit">OpenEPD spreadsheet</a> - <a href="https://buildingtransparency.org/ec3/creator-contacts/epds">How to Get an EPD</a> - <a href="https://www.oneclicklca.com/simple-epd-guide/">EPD Guide</a><br><br>

<!--
Phil wrote: Soft search terms is a feature where we *delete* search terms if there are zero returns.  It's not really what you want in an API. 

Modify the API URL used in this page to return only the interesting fields, including the company and product names. Add a toggle to load all values.<br><br>
-->
<b>TO DO:</b> Generate an <a href="../">Impact Profile</a> from the BuildingTransparency.org feed and local industry data. You could build on <a href="../../../community/projects/#widgets">Abrie's React work</a><br><br>

<div id="urlDisplay" style="overflow-wrap: break-word;"></div>

<div id="clickToExpand" style="display:none">Click bars to expand</div>