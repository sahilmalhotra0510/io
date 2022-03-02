---
title: International Impact Labels using openEPD with YAML
topics:
 - Trend toward standards for readability and machine learning
 - Compliments use of PDF files for product profiles
---


The [Central Concrete EPD data](https://github.com/modelearth/io/blob/master/template/product/product-concrete.yaml) was pulled from the BuildingTransparency.org API using:  

Get your bearer key here: [https://openepd.buildingtransparency.org](https://openepd.buildingtransparency.org)  



### In your command terminal, get the "Bearer" secret key for your username
~~~
curl -X POST "https://etl-api.cqd.io/api/rest-auth/login" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"username\":\"YOUR_USERNAME_EMAIL\",\"password\":\"YOUR PASSWORD\"}"
~~~

RETURNS

~~~
{"key":"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","last_login":"2021-08-12T02:49:09.850397Z"}%   
~~~

Which you'll append as:

~~~
-H "Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
~~~

Example

~~~
curl -X 'GET' \
 'https://openepd.buildingtransparency.org/api/epds?page_number=1&page_size=100' \
 -H 'accept: application/json' \
 -H 'filter: {"epds.name":"ASTM International"}' \
 -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
~~~

Tip: Use the [EC3 frontend](https://buildingtransparency.org/ec3/material-search) of the tool and watch the commands it issues in the dev inspector's network tab. 

Georgia Mass Timber:

~~~
https://buildingtransparency.org/api/materials?page_number=1&page_size=25&soft_search_terms=true&category=b03dba1dca5b49acb1a5aa4daab546b4&jurisdiction=US-FL&epd__date_validity_ends__gt=2021-08-24
~~~





~~~
curl -X 'GET' \
  'https://openepd.buildingtransparency.org/api/epds?page_number=1&page_size=1' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
~~~



To convert to yaml, the json can be pasted in either: [json2yaml.com](https://www.json2yaml.com/) or [editor.swagger.io](https://editor.swagger.io)


# For Postman

Click on "import" tab on the upper left side.
Select the Raw Text option and paste your cURL command.
Hit import and you will have the command in your Postman builder!
Click Send to post the command.


## For io/template OpenEPD swagger

https://etl-api.cqd.io/

https://openepd.buildingtransparency.org/#/epds/get_epds_id  

Inside Postman, you can load the YAML file https://etl-api.cqd.io/swagger.yaml which will import all the schemas.


