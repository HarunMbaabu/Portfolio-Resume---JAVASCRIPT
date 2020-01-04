<b> Sample Portfolio-Resume---JAVASCRIPT </b>
<p> This is a simple web based portfolio developed using Reactjs JavaScript front end framework. feel free to clone or fork and edit. <br> 
  A link to the web page https://harunportfolio.herokuapp.com/ </p>
<p> The resume part of the website looks as in the screenshot below.</p>


![alt text](https://github.com/HarunHM/Portfolio-Resume---JAVASCRIPT/blob/gh-pages/Screenshot%20from%202020-01-04%2012-38-31.png?raw=true)



<p> Feel free to Clone it as edit to suit your details and deploy to heroku as show below: </p>

<b> 1). Clone the repository. </b> 
<p> $ git clone https://github.com/HarunHM/Portfolio-Resume---JAVASCRIPT.git .<br> 
  You can also download as a zip file to your local machine  and unzip it anywhere locally in your PC</p>
<b> 2). Navagate to the folder. </b>
<p> You can use the terminal if you are on Linux and MacOS or use CMD or powershell for windows users and navigate               localy to the folder where the the folder was downloaded into.

<b> 3). Run npm install && npm start. </b> 
<p> This will install all dependances required by the application to run and open the application on localhost port 3000, you you can open the folder into your favourite text editor and edit the code to suit your needs.</p>


<h1> Deploying on HEROKU: </h1>
<B>To deploy React/node app should read the article below:</p>
<b>1). Editing scripts and package.json file </b>
<p>  
Chech the version of npm and node you are using to to avoid errors while deploying and edit your package.json file. <br>
  
<code> npm -v </code>    Press enter

<code> node -v </code>   Press enter

MIne looked ad show below:
<code>
  <pre>
{
  "name": "deploy",
  "version": "0.1.0",
  "private": true,
  "engines": {
    "npm": "5.7.1",
    "node": "9.5.0"
  },
  "dependencies": {
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-scripts": "1.1.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
  </pre>
  <code>
    </p>
<p>
<b> 2).Create Heroku Git Repository.</b> <br>
With your terminal still open navigate to your React app folder and change directory into it. Now we need to connect our project to Heroku. If you haven’t already installed the Heroku CLI. To make sure it’s installed correctly run this command:<b><br>
  <code>
heroku --version <br>
  </code>
 </b>
You should see your Heroku CLI version. Once that is installed we need to setup up Heroku git repository by running these commands:<br>
<b>
  <code>
heroku login (Enter your Heroku credentials)<br>
git init<br>
git add .<br>
git commit -m “initial commit” <br>
heroku create (You should see two links after running this command. Copy the second one) <br>
git remote add heroku PASTE THE LINK YOU JUST COPIED <br>
git push heroku master <br>
    </code>
 </b>
  </p>
  <p>
Once you run the last command Heroku will start to run some tests on your app. If everything goes right you should see a successful deploy message. Now you’re able to navigate to your app by running: <br>
<p>
  <code> heroku open </code>
Anytime you make changes to your app and want to re-deploy the only commands you need to run are:<br>
<code>
git add . <br>
git commit -m “any message goes here” <br>
git push heroku master <br>
  </code>
  </p>
<br><br>
  <b> For Non-Techie's Here is a simple and easier method </b> <br>
  <p> 
Now that I made you go through all of that process, there is an easier method if you use Github. All you have to do is log into your Heroku account; click “new” then “create new app” and give your app a name. After clicking create you should be greeted with a dashboard for the app you just created. Navigate to the deploy tab and sync your Github account with Heroku. After syncing your Github account and can search for the repository you want to sync with Heroku by scrolling down to “App connected to Github” section and searching for the repository you want to sync. You can also set up automatic deployment, so every time you push to the master branch Heroku will rebuild your app for you.
  </p>  
    
    
