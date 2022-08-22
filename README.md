# cs465-fullstack

## Architecture

### Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

<p>Many different frontend development techniques were used over the several iterations of the full stack application. The first iteration had the public facing site built in static HTML which provided no interactivity with the database and could not be updated when the database changed. The second itteration made use of handlebars html templating so that certain elements of the page such as the header and footer could be used on multiple pages without having duplicate code, allowing updating of page elements to only need to be applied to one location in the codebase. This also helped reduce loading times for users as the elements they have already retrieved from the server can be reused on the other pages of the site. The html was then stripped of any hardcoded data and modified to use data passed to it from the controller using javascript. At first this data came from a json file until the database was implemented and hooked into using mongoose to fetch and serve the data to the handlebars templates. The Angular SPA loads the entire application at once in the browser and doesn't require page refreshes to render new content and reflect changes in data. This allows for fast page changes between users and a lighter server load as only data and not resources need to be served to the user after the initial load.</p>

### Why did the backend use a NoSQL MongoDB database?

<p>MonogDB was chosen as the backend due to the ability to easily interface with it via mongoose, and the ability to easily define and update schemas, and ability to scale as the project grows.</p>

## Functionality

### How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

<p>JSON differs from Javascript in that it's not a programming language but a format for defining Javascript objects in a way that is easily readable by humans. JSON makes it easy to send and recieve data and convert them back to objects in the application. The front and back end are able to easily send data to eachother this way no matter what's being done with the data.</p>

### Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

<p> </p>
