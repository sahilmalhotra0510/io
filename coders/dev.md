## Quick Dive

We're creating environmental impact scoring tools with US EPA industry data.

1. Learn about the [7 top footprint tools](https://footprinthero.com/best-carbon-footprint-calculators) including the [CoolCarbon Calculator](https://coolclimate.berkeley.edu/calculator) and the [US EPA Carbon Footprint Calculator](https://www3.epa.gov/carbon-footprint-calculator/)
2. View Environmental [impact templates](https://model.earth/community/projects/#widgets) for [Product EPDs](https://buildingtransparency.org/ec3/epds) and the [BuildingTransparency.org API](../../io/template/feed/)
3. Add to our [interface in Figma](https://www.figma.com/file/mVZUSQCMBsIMu9bp7Y8qsS/Neighborhood-Impact-Footprint?node-id=18%3A6) for showing everyone's real-time score for 24 impact areas. Install [Figma Unify](https://www.figma.com/community/plugin/1009866256233241860/Unify%3A-Figma-to-React%2C-React-Native-and-HTML%2FCSS) to convert Figma components into clean React.  
4. Explore [NextJS](https://nextjs.org/) using our [Engine-Storybook](https://github.com/localsite/engine-storybook) repo.  


A child is born with a positive carbon capture score.  How many days before the average US child's score becomes negative? How does this compare to other countires? Participate in [our next event](../../io/coders/).


## Development Environment

Start by adding one of our REACT builds to your local machine:

<!--
1. **Our Blitz RealWorld starter site**
We are creating a <a href="https://codebase.show/projects/realworld?category=fullstack">RealWorld sample </a> for Blitz.js - Copy Prisma table structure file from [Prisma in NestJS sample](https://github.com/lujakob/nestjs-realworld-example-app/tree/prisma) when creating Blitz RealWorld sample in [blitz-realworld-example](https://github.com/blitz-js/blitz-realworld-example) repo.
-->

<!--
See [NextJS with Prisma example](https://github.com/prisma/prisma-examples/tree/latest/javascript/rest-nextjs)
-->

1. **Impact Labels using NextJS with Typescript and Tailwind CSS**
Fork and clone our [Engine-Storybook](https://github.com/localsite/engine-storybook) repo.  
To use typescript, the Engine-Storybook repo has a [typescript branch](https://github.com/localsite/engine-storybook/tree/typescript). Here are the [steps to add Storybook](https://model.earth/engine/) to the typescript branch.  
Create processes to display [impact label widgets](../../community/projects/#widgets).
Create a [mini-label score layout](../../community/projects/#miniwidget) that expands into a [cinematic label](../../community/projects/#cinematic) for large screens.  

<!--
Didn't use, but the steps are worth reviewing:
https://telmo.is/writing/create-a-nextjs-typescript-and-tailwindcss-project
-->

2. **React for Pulling API data into static JSON files**  
Copy how our [EPA widgets](../../io/charts/) save static JSON files by using <code>npm run download</code> and apply to the openEPD Building Transparency API.  Register in the BuildingTransparency.org site to get a bearer token - see our [openEPD pull notes](../../io/template/feed/).  Change from [toy json](../template/feed/toy100.json) to the new static files to speed up <a href="../../../io/template/feed/">Building Transparency API Display</a>
<!--- 1st and 3rd Tuesday of the month at 7 PM ET<br>-->

3. **React form for saving profile edits directly to GitHub**  
We’re updating the Italian PublicCode-editor to add code devloped by Code for America to edit YAML files directly on GitHub. <a href="../../community/projects/#profile-editor">Project Details</a>  Are there any good starting points for forms that update [.mdx](https://mdxjs.com/) files directly on GitHub? MDX is used in our [Engine-Storybook](https://github.com/localsite/engine-storybook) repo.



## Join Us on Slack

<a href="https://codeforatlanta.slack.com" target="_blank">CodeForAtlanta.slack.com</a> &nbsp; <b>Slack Channel: #neighborhood</b> - Get your [Slack Invite](http://slack.codeforatlanta.org)
[Join our Democracy Lab Team](https://www.democracylab.org/projects/834)  
<!--
<a href="https://join.slack.com/t/openseattle/shared_invite/enQtNzczMjg5MzYyNzg4LTgwZDExYmE2MWQ4N2ZiN2VmNDllMmU3ODI0YWFkMTQ5ODY4MGMwNDBhOTQwNTU3OGJmYTI5ZTE3YWQ2NTdjYWY">Open Seattle Slack</a> &nbsp; <b>Slack Channel: #neighborhood</b> 
[React Blitz.js Discord group](https://discord.com/invite/blitzjs)
<a href="https://github.com/democracylab/CivicTechExchange/">DemocracyLab Developer's Slack</a>
-->

<!--
<a href="https://democracylab-org.slack.com/">democracylab-org.slack.com</a><br><br>


## Projects

Join us in creating web applications using the [US EPA's Embeddable Input-Output Widgets (USEEIO)](../../io/charts)  
-->
