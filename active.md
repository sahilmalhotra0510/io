Regular meetings: [Sunday 10PM EST and Monday Noon EST](/io/coders/)
<!--Overview Session on Tuesday at Noon ET for new team members.-->

# Active Projects

[Mike Bostock provides an assist](https://github.com/observablehq/framework/discussions/1030)!

What's New! [API Key Local Storage](../localsite/tools/storage/api/) - By Loren and [ChatGPT](https://chat.openai.com)  
Fork our new repos: [Earthscape Chatbot UI](../localsite/start/earthscape) 
and [Observable DataCommons](/data-pipeline/timelines/observable/).

<!--
CSV Files to use for Timelines, Observable, and AI Training at: [industries/naics/US/counties](https://github.com/ModelEarth/community-data/tree/master/industries/naics/US/counties)  
Pre-processed data for county industry levels, based on employment, establishments and payroll.-->

**ML with Python and JavaScript (Observable and TensorFlow)**

- [ML for Community Forecasting](../data-pipeline/timelines/training/naics/) - Lily, Sijia, Alison, Irene, Honglin, Ronan, Luwei, Wenxi, Magie
- [International Google Data Commons API](/data-pipeline/international/) - with [Observable Data Loaders](https://observablehq.com/framework/loaders) - Kargil, Parth
- [Observable with Data Commons](/data-pipeline/timelines/observable) - [Data Loaders How-To](https://github.com/kargilthakur/Observables-DataLoader/tree/master/docs) - Kargil

**Observable Visualization Projects**

- [PyTorch ML and Data Visualization](/machine-learning/pytorch/cluster/) - Network Graphs, Sankey and Chord - Honglin, Rupesh
- [Sankey Industry Chart](/io/charts/sankey/)
- [Chord Chart Data Prep](/io/charts/chord/)
- [Earthscape Chatbot Charts](../localsite/start/earthscape) 

**Local Industry and Places Timelines**

- [React - Navigation using Indicators List from IO Chart](/io/charts/inflow-outflow/#set=prosperity&indicators=VADD,JOBS)
- [React - Display totals in Jobs Reports](/localsite/info/#indicators=JOBS) by updating the [Input-Output Total Display](/localsite/info/data/totals/)
- [Tabulator - Merge in industry year rows using Javascript (1-3)](/data-pipeline/timelines/tabulator/) - Rupesh<!--Vadlamudi-->
- [Tabulator - Merge in titles using Javascript (4)](/data-pipeline/timelines/tabulator/) - Dinesh, Fanyi, Rupesh
- [Annual NAICS - Process Industries by Zip Code](/data-pipeline/industries/naics) - Gaurav
- [Steps for SQLite in Browser](/data-pipeline/timelines/sqlite/phiresky/) - [Example (Runs SQL)](https://phiresky.github.io/blog/2021/hosting-sqlite-databases-on-github-pages/) - Aashish
- [Impact Label Pipeline](/apps/impact) - Too optimize and change inputs
- [Python - Timeline Data Prep](/data-pipeline/timelines/prep/industries/) - Ronan
- [Python - Process All the Places by State and Zip](/places) - Carolyn
- [BuildingTransparency - API Aggregates of States and Countries](/io/template/product/) - Luwei
- [BuildingTransparency - JSON file pull for impact templates](/io/template/product/) - Harsha<!-- Later display with SQLite -->
- [BuildingTransparency - Product Impact Profiles by State and Zip](/io/template/feed/)
- [Python - Census Zip Code and International Postal Code Data Files](/zip/io/#zip=10001) - Gary
- [Python - State Regions using Sets of Counties (and ChatGPT)](/community-data/us/edd/) - Fanyi


<!-- [ML - NAICS Imputation Using Machine Learning](https://github.com/ModelEarth/machine-learning) - Honglin-->
<!-- [CMD - Build IO .json files from EPA API for all 50 states](/io/charts/) - Honglin (next week)--><!-- Zhu -->

<!--
Welcome! - Our next Model.earth meetup is Thursday at Noon EDT

Hi, thanks for registering with our ModelEarth team!

We're meeting tonight (Sunday) at 10PM EDT, and again on Thursday at Noon EDT.
(We also do focused meetups Mondays and Tuesdays in the afternoon.)

Let me know which of the following areas you're interested in:
Javascript, React, D3, Leaflet, Python, Forecasting with ML

Our meetup link is here. (It's always the same)
https://model.earth/io/coders

Here are our active projects:
https://model.earth/io

You can pull down our main repos with a single cmd. First make a fork of the data-pipeline and data-commons repos in GitHub.com/modelearth. Then select the checkboxes for those 2 repos here:

https://model.earth/localsite/start/steps

Let me know if you need a welcome letter for the OPT program.

Looking forward to working with you!

Loren Heyns



	mark huang - deep learning

	Overview video
	https://platform.openai.com/docs/actions/introduction

	https://retool.com/component-library

	- 

	[Google Places API]() - Hours of Operation, All The Places Recyclers, BuildingTransparency Manufacturers



	We need to figure out a crosswalk from the Naics6 department of labor data we pull for levels of employment, as it relates to the new 72 sectors the EPA now uses. Previously they used 389 sectors.  The sectors are a fairly close match to the naics values.
-->

**API and AI areas**

- [ChatGPT Web Assistant Repo](https://github.com/Niek/chatgpt-web) - [Example uses OpenAi API](https://niek.github.io/chatgpt-web/) - Mahimna and everyone
- [Streamlit AI Images](/data-pipeline/research/stream) - [Kishor's Repo](https://github.com/mannurkishorreddy/streamlit-replicate-img-app) [Our Fork](https://github.com/ModelEarth/replicate) - Kishor
- [Google Data Commons API](https://docs.datacommons.org/api/) - Push in US EPA [impact data](/community/tools/)
- [AI Process for Farm Fresh Data](/community-data/process/python/farmfresh/) - Apply ML to assist Food Deserts
- [Commodity Flow Survey for Counties](https://github.com/modelearth/commodity-flow-survey)
- [Use our state map filter](#geoview=country) with colors for [new report maps](https://figshare.com/collections/USEEIO_State_Models_v1_0_-_Supporting_Figures/7041473) - ML with 24 EPA impacts - Honglin and Irean

<!--
Industry2vec: an Implementation for Industry Code Vector Representation
https://medium.com/wbaa/industry2vec-an-implementation-for-industry-code-vector-representation-68ec5f5de9a4
-->

---
<br>Feb 2024 - from Wes Ingwersen, US EPA Engineer:

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

---
<br>

Additional Exploration
- [CensusReporter.com](https://CensusReporter.com)
- [Microsoft Planetary Computer](https://planetarycomputer.microsoft.com/)

<!--   
[Zipcode files with employment levels](https://github.com/modelearth/community-data/tree/master/us/zipcodes/naics) - Includes nunber of Establishments and Employees 
-->

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
