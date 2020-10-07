# Countries

This app was created to practice React. You can use it to view some information about different countries.
You need to start typing in the search field to find a country. When you enter the exact name or press "Show" near some country's name you can see a detailed page with information. Info is accuired from **restcountries.eu**. Below you can see some info about capital city of that country, including the current weather. Weather info is gathered from **weatherstack.com** service. 

### Running the app

First, you need to run:

	git clone https://github.com/yaripey/countries

Then, you should install packages with:

	npm install

Later, you need to get API key from **weatherstack.com**. Register there and you can get one for free. Create new .env file within the app's root directory and place the following string there:

	REACT_APP_API_KEY=<key>

where `<key>` is your API key from **weatherstack.com**

After this you can run the following to start the app.

	npm run