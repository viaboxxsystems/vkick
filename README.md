V-Kick
======

Set up
------

* npm install (installs node dependencies, including gulp)
* bower install (installs bower components)


Build and run locally
---------------------

* To start gulp with live reload: `gulp watch`
* To start gulp serving normally: `gulp serve`
* Build (default): `gulp build`
* Build distributable: `gulp zip`

Run the backend
---------------
Run `node backend/rest.js`

Deploy
------

* Download and extract built zip from https://tera.viaboxxsystems.de/jenkins/job/V-Kick/lastSuccessfulBuild/artifact/zip/archive.zip
* cd into extracted dir
* Do `npm install`
* Run `node app.js`


Images
------

Grass Background: http://www.webtexture.net/photoshop-resources/patterns/super-high-quality-seamless-green-grass-texture/
