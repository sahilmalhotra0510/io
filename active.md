# Active Projects

Pre-processed data for local industry levels (including employment, establishments and payroll).

Files for Timelines and Observable: [industries/naics/US/counties](https://github.com/ModelEarth/community-data/tree/master/industries/naics/US/counties)

- [Tabulator for Timeline Data](/data-pipeline/timelines/tabulator/)
- [Process Industries by State and County](/community-data/process/python/bea) - Gaurav
- [Process Industries by Zip](/community-data/process/naics/) - Gaurav
- [Build IO json for all states](/io/charts/) - Honglin<!-- Zhu -->
- [Process Multi-County State Regions (ChatGPT)](/community-data/us/edd/)
- [Process Product Impact Profiles by Zip](/io/template/feed/)
- [Process US Census by Zip and International Postal Codes](/zip/io/#zip=10001) - Chen and Gary
- [Process All the Places by Zip](/places) - Chen
- [SQLite in Browser for Timelines](/data-pipeline/timelines/sqlite/) - We need help deploying to Github. [Like this.](https://phiresky.github.io/blog/2021/hosting-sqlite-databases-on-github-pages/)
- [Timeline Data Prep, Random Forest](/data-pipeline/timelines/prep/all/) - Sijia
<!--

	mark huang - deep learning

	Overview video
	https://platform.openai.com/docs/actions/introduction

	https://retool.com/component-library

	- 

	[Google Places API]() - Hours of Operation, All The Places Recyclers, BuildingTransparency Manufacturers



	We need to figure out a crosswalk from the Naics6 department of labor data we pull for levels of employment, as it relates to the new 72 sectors the EPA now uses. Previously they used 389 sectors.  The sectors are a fairly close match to the naics values.
-->



<!-- [Imputation for NAICS Using Machine Learning](/machine-learning/)-->

Exploration areas

- [Observable Framework Notes](/data-pipeline/timelines/observable)
- [ChatGPT Web Assistant Repo](https://github.com/Niek/chatgpt-web) - We need help deploying to Github. [Like this.](https://niek.github.io/chatgpt-web/)
- [Google Data Commons API](https://docs.datacommons.org/api/) - Pull International, Push impact data from US EPA
- [CensusReporter.com](https://CensusReporter.com)
- [Process Farm Fresh Data](/community-data/process/python/farmfresh/)
- [Commodity Flow Survey for Counties](https://github.com/modelearth/commodity-flow-survey)
- [International Data Pipeline](/data-pipeline/international/) - Imports and exports by country by year

<!--   
[Zipcode files with employment levels](https://github.com/modelearth/community-data/tree/master/us/zipcodes/naics) - Includes nunber of Establishments and Employees 
-->

---
<br>

TO DO: [Update our state map filter](#geoview=country) with color levels like the [new report maps](https://figshare.com/collections/USEEIO_State_Models_v1_0_-_Supporting_Figures/7041473) from US EPA engineer Wes Ingwersen.
<br>

Feb 2024

Hi State Partners,

I’m happy to share that our report, supporting figures and all the data files for v1.0 of the USEEIO State Models are now published. [View Report](https://cfpub.epa.gov/si/si_public_record_Report.cfm?dirEntryId=360453&Lab=CESER)

[Excel version of 2020 models](http://doi.org/10.23719/1530076) for all states:

We have files with models for all states for a given year in a native useeior Model format on a public server as well.

We have 100’s of supporting figures [including maps of the U.S.](https://doi.org/10.6084/m9.figshare.c.7041473) showing environmental pressure intensity grouped by indicator and commodity for all states and rankings of sectors by consumption by environmental pressure for 2020.

Please review the materials and let Wes know if you have any questions.
 
[The industry comparisons](../localsite/info/) draw on our EPA data prepared and presented using useeior (R Language),  useeio.js and the [useeio-widgets](../io/charts/) (Javascript and HTML using the USEEIO-API). Let us know if you have priorities and interests there and could provide us with some interactive feedback (testing) as we put that together.

As a reminder (and mentioned in the report) we’re working on Consumption-based GHG inventories (CBEI) for Maine and other Northeast states as an application of these models but the functionalities we develop and describe will be available for all States. We anticipate that being completed by early summer. 
 

Wesley W. Ingwersen, Ph.D.
Center for Environmental Solutions and Emergency Response (CESER)
Office of Research and Development
US Environmental Protection Agency

[Contact Model.Earth Team](../io/team/)


<!--
Frome several years ago: 

- <a href="../../../localsite/info/#showloc">Industries and Impacts by county</a> - great to also include by zip! 
- [Bureau of Labor Statistics (BLS)](https://www.bls.gov/data/)  
- [Solar Companies](../../localsite/map/#show=solar)   
- [Electric Vehicle Ecosystems](../../localsite/info/#state=GA&show=vehicles)  
- [Commute Times and Walkability](../)  
<br>
-->

<!--
<b>EV Challenge Statements</b>  

1. Where are concentrations of electric and hydrogen vehicle parts manufacturers emerging?  

2. Where are combustion vehicle manufacturers likely to be impacted?  

3. How can we improve the visualization of supply chain inflow and outflow for local impacts on jobs, value added and the environment?  
-->

<!--
<b>Growing EV Ecosystems</b>  

1. University of Georgia - 33 new Proterra electric buses coming in 2021  
1. Georgia Power - Half of system fleet vehicles will be electric by 2030  
1. Hartsfield–Jackson Atlanta International Airport - [GreeningATL](https://www.17sustainabledevelopmentgoals.org/greeningatl-the-most-resilient-airport-globally/)  
1. Lyft partnership pilot program to add 50 EVs  
1. German GEDIA building $85 million [EV Parts Plant near Dalton, GA](https://www.bizjournals.com/atlanta/news/2020/07/29/gedia-automotive-group-plant-dalton-georgia.html)  
1. Korean SK Innovation's $1.6 billion plant adds $960 million [EV battery expansion in Commerce, GA](https://www.bizjournals.com/atlanta/news/2020/06/30/sk-innovation-georgia-electric-vehicle-plant.html)   
-->
