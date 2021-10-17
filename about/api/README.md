# About API

[Embeddable IO Widgets](../../charts) use the [static JSON files](https://github.com/modelearth/io/tree/main/build/api) output from the USEEIO API.

[USEEIOR](https://github.com/USEPA/USEEIOR) generates most of the model files for the API. (It replaces the use of [IOMB](https://github.com/USEPA/USEEIO_API/wiki/Build))
<!--
Here are [old model files](https://www.dropbox.com/sh/af48m0jsusgr3jg/AACzBSJwujR6LU0jZBhAzys6a?dl=0) for testing. (Better to use the newer data in the [static JSON files](https://github.com/modelearth/io/tree/main/build/api)) - [Build locally](../../charts/#build)
-->
Also see our [Display Datasets](../../../localsite/info/data/) and [Industries by Zip](../../../community/industries/) pages.  



## Data Sources

### US Bureau of Labor Statistics (BLS)

<a href="https://github.com/modelearth/machine-learning">Our pre-processed NAICS</a> - Machine Learning repo currently outputting 2, 4 and 6 digit NAICS industries
[Our current preprocessed NAICS data](https://github.com/modelearth/community-data/tree/master/us/state) - Being replaced by the process above  

Via [Flowsa Flow-By-Activity Datasets](https://github.com/USEPA/flowsa/wiki/Available-Data#flow-by-activity-datasets)
County Quarterly Census of Employment and Wages

### US Census - Quarterly Workforce Indicators (QWI)

<a href="https://www.census.gov/data/developers/data-sets/qwi.html">Quarterly Workforce Indicators (QWI)</a> - Used by Drawdown Georgia for 3-digit NAICS
[QWI provides 2, 3 and 4 digit NAICS Industries](https://lehd.ces.census.gov/data/schema/latest/lehd_public_use_schema.html#_industry)

<!--
* [US Department of Commerce](https://github.com/USEPA/flowsa/wiki/Available-Data#flow-by-activity-datasets)
-->
### US EPA - Flowsa Flow-By-Activity Datasets

[US EPA Flowsa](https://github.com/USEPA/flowsa/wiki/Available-Data#flow-by-activity-datasets) data processing library includes:

* [US Bureau of Economic Analysis (BEA)](https://www.bea.gov/data/industries/gross-output-by-industry)
GDP Gross Output, Make Before Redefinitions, Use Before Redefinitions

* [US Bureau of Land Management Public Land Statistics](https://www.blm.gov/about/data/public-land-statistics)


* [Bureau of Labor Statistics Quarterly Census of Employment and Wages](https://www.bls.gov/cew/)

* [Water Withdrawals for the United States](https://pubs.acs.org/doi/abs/10.1021/es903147k?journalCode=esthag)

* [Census Bureau County Business Patterns](https://www.census.gov/programs-surveys/cbp.html)

* [Energy Information Administration - Energy Consumption Survey](https://www.eia.gov/consumption/)
[Manufacturing](https://www.eia.gov/consumption/manufacturing/), [Commercial Buildings](https://www.eia.gov/consumption/commercial/) - Land, Water, Energy - County, Regional and National

* [Inventory of U.S. Greenhouse Gas Emissions and Sinks](https://www.epa.gov/ghgemissions/inventory-us-greenhouse-gas-emissions-and-sinks)

* [Environmental Protection Agency National Emissions Inventory](https://www.epa.gov/air-emissions-inventories/national-emissions-inventory-nei)


