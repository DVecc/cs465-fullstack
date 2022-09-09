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

<p>The application was recfactored many times to improve the efficiancy and functionality, refactoring the static html into handbar templates was one of htese cases which allowed for the modulization and reuse of components while reducing redundancy of code within the code base. Reducing redundacy in this way also helps make upkeep easier as updates and changes to the layout of the website will only need to be made to one file.</p>

## Testing

### Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

<p>Methods are the meat of the website of the application, they give the site its functionaltiy and allow the retrieval and modification of data in the backend. The RESTFUL api makes use of these methods in order to provide a way for users and other applications to interact with the database. The application endpoints are urls that must be sent http request to in order to request a particular resource from the api. Due to the nature of endpoints, security needs to be implemented to prevent unauthorized users from accessing resources or making unauthorized changes to the database. In this application we implemented a basic form of security with an authentication service that issued a java web token upon login that would be saved in the browsers local storage, and is then provided to the authentication middleware to verify that a user within the database made the request.</p>

## Reflection

### How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

<p>This course was extremely helpful for me in reaching my professional goals as it's given me the skills to finally create something that feels useful and tangible for my portfolio. Being able to now create a fullstack application has given me a greater understanding of how websites serve content to users and provide public RESTFUL apis for other applications to access and implement. I'm excited to further learn about web development in the next fullstack course and to potentially pursue a profession in fullstack web development.</p>
