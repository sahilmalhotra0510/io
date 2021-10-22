function loadTomlFiles(pagePath,divID) {
  d3.text(pagePath).then(function(data) {
    // Path is replaced further down page. Reactivate after adding menu.
    var pencil = "<div class='markdownEye' style='display:none;position:absolute;font-size:28px;right:0px;text-decoration:none;opacity:.7'><a href='" + pagePath + "' style='color:#555'>…</a></div>";
    // CUSTOM About YAML metadata converter: https://github.com/showdownjs/showdown/issues/260

    // Also try adding simpleLineBreaks http://demo.showdownjs.com/

    var converter = new showdown.Converter({tables:true, metadata:true, simpleLineBreaks: true}),
    html = pencil + converter.makeHtml(data);

    var metadata = converter.getMetadata(true); // returns a string with the raw metadata
    var metadataFormat = converter.getMetadataFormat(); // returns the format of the metadata

    // This returns YAML and JSON at top of README.md page.
    if (metadata) {
      //alert(metadata);

      /*
      // UNDER DEVELOPMENT
      // Planning to use one of these:
      // https://github.com/jeremyfa/yaml.js  (See: https://www.npmjs.com/package/yamljs)
      // https://github.com/nodeca/js-yaml

      obj = jsYaml.load(metadata, { schema: SEXY_SCHEMA });

      result.setOption('mode', 'javascript');
      result.setValue(inspect(obj, false, 10));

      convertToHtmlTable(obj);

      html = metadata + html;
      */
    }
    //document.getElementById(divID).innerHTML = html; // Overwrites

    var thediv = document.getElementById(divID);
    //loadIntoDiv(pageFolder,divID,thediv,html,0,callback);
    thediv.innerHTML = data;
    convertTomlToHtml(); // Move this

  });
}