# Embeddable Input-Output Widgets
<div class="floatright">
<img src="../img/logo/epa.png" style="width:100%; max-width:200px; margin-left:30px">
</div>
Our [Local Industry Evaluator](../../localsite/info/) contains widgets using Leaflet maps, JQuery and React.  
Check out more [App Samples](../../io/) and [get started creating a site](https://model.earth/localsite/start/).  
Add a page to the [apps repo](../../apps/) and participate in our [Sustainable Communities Web Challenge](../../community/challenge/).  

<!--
## Environmentally-Extended <span style="white-space:nowrap">Input-Output Model</span>

In RStudio
Tools > Install Packages > devtools

OR

install.packages(‘devtools’)          
library(devtools)

Rstudio has devtools intalled already, so maybe just library(devtools) to call in the package
-->

The static json files used here are generated from the EPA API which uses the US Environmentally-Extended Input-Output R-Language data&nbsp;pipeline [USEEIOR](https://github.com/USEPA/USEEIOR). 


<!--(It replaces the use of [IOMB](https://github.com/USEPA/USEEIO_API/wiki/Build))-->

<!--
Here are [old model files](https://www.dropbox.com/sh/af48m0jsusgr3jg/AACzBSJwujR6LU0jZBhAzys6a?dl=0) for testing. (Better to use the newer data in the [static JSON files](https://github.com/modelearth/io/tree/main/build/api)) - [Build locally](../../charts/#build)
-->



## USEEIO React Widgets

[View documentation and functions](https://msrocka.github.io/useeio-widget-builds/apidoc/) generated using [TypeDoc](https://typedoc.org/).  Learn about [USEEIO API Industry Data](../about/api/)  

The React widgets in the [io repo](https://github.com/modelearth/io/) originate from the EPA's [USEEIO-widgets repo](https://github.com/USEPA/useeio-widgets/).   
[The build folder](../build) is copied from USEEIO-widgets into the io repo to provide a static copy of the API's json files.  
The io repo includes additional code for integrating widgets.   

- [Inflow-Outflow Chart](inflow-outflow/#set=prosperity&indicators=VADD,JOBS) - [Tires](inflow-outflow/#sectors=326210&set=prosperity&indicators=JOBS,VADD) - (<a href="../build/iochart.html#indicators=ENRG,GHG,VADD&sectors=113000,327310,327400,333613,335912,336111,562111,562212">Widget only</a>)<!-- &page=1&count=10 --><!-- [imfast.io](https://useeiowidgets.imfast.io/iochart.html#sectors=322130,325520,327910,541200)-->  
- [Sector List - Mosaic](../build/sector_list.html?view=mosaic&count=50)  
- [Sector List - Mosaic Limit Sectors](../build/sector_list.html?naics=333613,335912,336111&view=mosaic&count=50)  
- [Sector List - Display Values](../build/sector_list.html?view=mosaic&showvalues=true)  
- [Sector List - Two positive indicators](../build/sector_list.html#view=mosaic&view_indicators=JOBS,VADD&showvalues=true)
<!--
- [Sector List IO - Tire manufacturing (older version)](../build/iotables.html#sectors=326210&page=5)  
-->
- [Industry Impact Bars with Configuration](../build/impact_chart_config.html)    
- [More React widgets](../build/) and <!-- ([Recent build 1](https://msrocka.github.io/useeio-widget-builds/)) --> [Recent developer build (thetisiboth)](https://thetisiboth.github.io/useeio-widget-builds/)  

## JQuery Widgets 

- [NAICS Industry List](../../localsite/info/naics/) - JQuery with Python Machine Learning Pre-processing
- [Impact Bubble Chart](bubble/) - D3 and JQuery  
- [Sankey Chart](sankey/) - D3 with Python prep  


<!--
If your local widgets reference the "useeio" folder, they may need to be updated occasionally as parameters change. For stability, point your local widgets at one of the [numbered backups](https://model.earth/eeio/build.2020.002) or copy the useeio folder into your project.


([old version](https://model.earth/eeio/build.2020.001), [pre-React](https://model.earth/eeio/build.2020.003) and [new version](useeio)) 
-->

## Related Map Work

- [Simple embedded map sample](/localsite/info/embed.html)
- [Farm Fresh Produce Map (from CSV files on GitHub)](../../localsite/map/#show=farmfresh) - Leaflet and JQuery  
<!-- 
- [PPE Supplier Map (from Google Sheet)](../../localsite/map/#show=suppliers) - Leaflet and JQuery  
-->
---
<br>


# Run Widgets locally for Development

1.) Create a folder for your webroot at Documents/Web or wherever you prefer.
2.) Start a local web server by right clicking your web folder and open a terminal command prompt.  Paste the following and hit return to run. This terminal will be locked from further commands since it is running your local server.

	python -m http.server 8887

3.) Open a new terminal and pull down these repos from Github. Hit return to run.

	git clone https://github.com/ModelEarth/localsite localsite &&  
	git clone https://github.com/ModelEarth/io io &&  
	git clone https://github.com/ModelEarth/apps apps

Optional: This large 1.6 GB folder is linked to in the localsite side-navigation:

	git clone https://github.com/ModelEarth/community community

If you'll be contributing changes, fork first the repo you're editing and clone from your fork. [Turn on GitHub Pages](/localsite/start/steps/#github-pages) so we can review your changes.

Run the following occasionally to refresh your local clones:

	cd localsite &&  
	git pull https://github.com/ModelEarth/localsite main &&  
	cd ../io &&  
	git pull https://github.com/ModelEarth/io main &&  
	cd ../apps &&  
	git pull https://github.com/ModelEarth/apps main &&  
	cd ../community &&  
	git pull https://github.com/ModelEarth/community master &&  
	cd ../

4.) View and update content at the following

[http://localhost:8887/apps](http://localhost:8887/apps)
[http://localhost:8887/localsite/info](http://localhost:8887/localsite/info)
<br>


# About Local Folders

The [localsite repo](../../localsite/) contains maps, navigation and impact visualization.  

You can set parameters in the URL or javascript to control the display of the widgets.  [View examples in apps repo](../../apps/).

The current [io folder](https://github.com/modelearth/io/) contains a built copy of the "[build](../build)" folder from [useeio-widgets](https://github.com/usepa/useeio-widgets), plus extra JQuery widgets.  

You can create new pages in [our apps repo](/apps/). To share your work, [Fork the apps repo](https://github.com/modelearth/apps/) before you clone it.



<br>

# Build a fresh instance of the model

You can skip this section since [io/build](../build/) already contains a built instance.

You'll use these step if you are editing the USEEIO React Widgets locally. 

Fork and clone the [USEEIO-widgets](https://github.com/USEPA/useeio-widgets/) repo into your webroot. The USEEIO-widgets repo contains only React widgets. It doesn't contain any JQuery.

	git clone https://github.com/USEPA/useeio-widgets useeio-widgets

<!--
<span style="background:red; padding:3px; color:#fff">NOTE:</span> The code in the useeio-widgets repo currently causes a runaway processor in the browser when used with the "localsite" repo. To avoid, the "localsite/build" folder contains the recent code from [Recent build 2](https://thetisiboth.github.io/useeio-widget-builds/).
-->

#### Node Version Manager

You'll need a current version of [Node.js](https://nodejs.org) installed. 

Check that the `node` and `npm` commands are available in your systems path.
You can test this by running `node -v` and `npm -v` on the command line.

Here are options for installing node if the version commands above find nothing.  

[NPMjs.com](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) recommends installing a Node Version Manager like [nvm](https://github.com/nvm-sh/nvm) to avoid permission errors when you run npm packages globally.

Or [Install node/npm](https://nodejs.org/en/download) locally. The installer includes the Node.js package manager (npm) within it, so you won't need to install npm separately.

Or update to the latest stable version of NodeJS
<!-- https://askubuntu.com/questions/426750/how-can-i-update-my-nodejs-to-the-latest-version-->

	npm install -g n
	sudo n stable


#### Open a terminal or use VS Code:     

A. You can right-click the repo folder and choose "New Terminal at Folder" on a Mac. &nbsp; [Sublime Text](https://www.sublimetext.com/) is a nice simple code editor.

B. Or you can open the folder from VS Code.  Shortcut for opening VS Code: Open a command prompt in the repo folder and type `code .` or `code `  This may be necessary if your build does not run when opening with File > Open in VS Code.

You may need to [Configure your VS Code Editor](https://code.visualstudio.com/docs/setup/setup-overview) so running `code .` launches the editor.  Avoid running in the parent folder containing your repo(s) or your VS Code editor may not allow you to run subsequent commands inside its terminal.

To open a command shell window within VS Code by typing (Ctrl + \` backtick) or go to the "View > Terminal". 

<!--

```
cd io
```

Or use <code>cd useeio-widgets</code> if you are just using the source repo.  
-->

#### Install Node.js Modules  

The following will add a node_modules folder containing javascript source libraries (dependencies) that will be used to output code for the widgets.  

	cd useeio-widgets
	npm install

<!--
You can ignore errors (about 11), including "Error: `gyp` failed with exit code: 1".  

If you receive a "high severity vulnerabilities" warning, run the following as advised:  

	npm audit fix
-->
<!--
pre-React and with React, ignored:
	`gyp` failed with exit code: 1
-->
Then build the widget libraries. If you are using the "io" repo you'll already have a pre-built "build" folder.

<!--
<span style="background:red; padding:3px; color:#fff">NOTE:</span> We recommend avoiding running the following build command. The code in the useeio-widgets repo currently causes a runaway processor in the browser when used with the "localsite" repo. To avoid, the "localsite/build" folder contains the recent code from [Recent build 2](https://thetisiboth.github.io/useeio-widget-builds/).
-->

We switched from recent node-v20.10.0 to older 12.22.6 to avoid this error:
error:0308010C:digital envelope routines::unsupported

```
nvm install 12.22.6
nvm use 12.22.6

npm run build
```

This will create or update the `build` folder and a `lib` sub-folder containing small JavaScript libraries used by the USEEIO widgets.  

Once built, the `build` folder contains [example HTML files](https://model.earth/io/build/) that demonstrate the usage of these widgets.  
<!--
Note: After building, remove   a { color: #555; } in widget.css.

To Do: Surround all USEEIO widgets with a class called .ioWidget and update widget.css to limit to .ioWidget.
-->
<br>

# JSON files from API

You can skip this step since we've already populated the **io/build/api folder** for you.

We generated static .json files from the USEEIO API so pages load faster, and you can work locally when not online, like on an airplane.

<span class="local-block" style="display:none;">
The production API requires an API key which we store in a [private Google Doc](https://docs.google.com/document/d/1FsIATg3XS-ZlyrNabZBIR9mdhSTWv22-yp0ZCyF80rg/edit?pli=1)
</span>

There is also a staging instance of the [USEEIO API](https://github.com/USEPA/USEEIO_API). However this server is often shutdown and will return a 404 error at <a href="https://smmtool.app.cloud.gov/" target="_blank">endpoint overview</a>. Every 90 days the staging server requires a reboot. You can email the [contact person](https://github.com/USEPA/USEEIO_API/wiki/People#Contact) to restart.

Again, you don't need to run this since we're using a json instance of the API.

	npm run download -- --endpoint https://smmtool.app.cloud.gov/api

Running the above mirrors API data into the static json files in the `build/api` folder. 

You may optionally [request the key](https://github.com/USEPA/USEEIO_API/wiki/Use-the-API) to the production API to run the following (Interns may use the key in our Google Sheet):  

```
npm run download -- --endpoint https://api.edap-cluster.com/useeio/api --apikey [Add API key here]
```

Important: We copied and renamed the folder USEEIOv2.0.1-411 to USEEIOv2.0 when placing in io/build/api so existing paths to USEEIOv2.0 in code do not need to be changed.

<!--
1. Duplicate USEEIOv1.2 to USEEIO for existing script in non-React widgets.  
2. Duplicate USEEIOv1.2 to GAUSEEIO since GA data currently only resides on the staging server.  

Manually copy the GAUSEEIO to a new folder called USEEIOv1.2 for Inflow-Outflow Chart  
-->



Learn more about [using the USEEIO API](https://github.com/USEPA/USEEIO_API/wiki/Use-the-API)


# View widgets

You now have two options for viewing the widgets locally.

<b>Option 1:</b> View at the following URL if the "io" folder resides in your webroot. (Your port number may differ.) 

[http://localhost:8887/io/build](http://localhost:8887/io/build)  

<b>Option 2:</b> Start a server using the command <code>npm run server</code>.

Then open the default port (8080) at http://localhost:8080 in your browser to see the widgets.  Your command window will become inoperable since it is running a server.  Open a new command window (by clicking plus) to issue further commands.  



If you are working in a direct fork of the "useeio-widgets" repo, view here:  

[http://localhost:8887/useeio-widgets/build](http://localhost:8887/useeio-widgets/build)  

Use the up-arrow to run the build line after making a change.  

	npm run build



View the output of your build at [http://localhost:8887/io/build](http://localhost:8887/io/build) 

Learn more in the VS Code [Node.js Tutorial](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial). 

### You may also contribute to the USEEIO-widget repo directly

To make updates in the NodeJS source code, fork the [USEEIO-widgets](https://github.com/USEPA/useeio-widgets/) repo and save in your local webroot (where you've [pointed](../../localsite/start/) http://localhost:8887/)  

Edit the files that reside in useeio-widgets/src. (Avoid editing files in useeio-widgets/build, these will be overwritten when you run the build.) 

Build when editing - [Amplify React App](../../aws/amplify/) uses `npm start` to build on-the-fly.  
Another option: [LiveReload](https://www.logicbig.com/tutorials/misc/typescript/project-auto-refresh-with-live-reload.html) might refresh your browser as you edit.  
Install using the [Extension Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery)  (Please update our documentation, not yet confirmed). 

Get under the hood! Mess with our [Python Samples](../../community/resources/useeio) and 
[add a new technology to the matrix using RStudio](../naics).

<!--
From the following:
https://stackoverflow.com/questions/18428374/commands-not-found-on-zsh

1. Use a good text editor like VS Code and open your .zshrc file (should be in your home directory. 

Command+Shift+H
Command+Shift+Dot

if you don't see it, be sure to right-click in the file folder when opening and choose option to 'show hidden files').

2. find where it states: export PATH=a-bunch-of-paths-separated-by-colons:

3. insert this at the end of the line, before the end-quote: :$HOME/.local/bin

-->
<br>

# React Update Requests

Here are two items for the near-term React wishlist. These will allow positive jobs and value-added to be compared with negative impacts. Total Amounts would be displayed, with a toggle to Per-Dollar Spent.

1.) When clicking on the [Sector List](/io/build/sector_list.html?view=mosaic&count=100&indicators=ACID,ETOX,EUTR) column headers:

1a. Invert the arrows, so a high impact filter is indicated by an upward arrow.

1b. Add checkboxes to indicate which columns are current filters. When unchecking, retain the other selected columns. (screenshot attached)

1c. When clicking a column title or arrow, retain the other selected columns. Their checked boxes will remain checked.

<a href="inflow-outflow/img/mockup-checkboxes.png"><img src="inflow-outflow/img/mockup-checkboxes.png" style="width:100%"></a><br>

2.) Add total amounts to the [Inflow-Outflow Chart](/io/charts/inflow-outflow/#set=prosperity&indicators=VADD,JOBS) and show total amounts by default. See [React sample](/localsite/info/data/totals/).  Update values displayed when the hash value changes from vtype=total to vtype=perdollar and back. (Pre-calculate both, so chart does not need to reload.)

<br>

# FAQs

### Why are some values in the demand vector $0 (blank)?

In some cases there is no final demand for the respective commodity and the production of that commodity is only driven by intermediate industry transactions (note that there are different demand vectors in the model and that the selected demand can be controlled via the configuration attributes). 


### How is code formatting enforced?

The `.editorconfig` file contains the formatting settings. Modern editors have plugins for checking EditorConfig settings. This maintains consistency so we can see in the diffs what changed. There is also a ESLint configuration in the project for other settings like semicolon rules etc.


[Project Areas](../../community/projects/) 
