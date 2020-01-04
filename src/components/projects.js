import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import luxtech from './one.png';
import resume from './my_profile.jpg';
import techtalk from './tech.png';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', backgroundImage: `url(${luxtech})`}} >
              LuxTech Website</CardTitle>
            <CardText>
              This is fully functional website developed using Flask, HTML5, CSS3 AND JavaScript
 
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/HarunHM/Lux-FLask-Version-1.00">GitHub </a></Button>
              <Button colored><a href="#">CodePen </a></Button>
              <Button colored><a href="https://lux-academy-flask.herokuapp.com/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', backgroundImage: `url(${resume})`}}>Personal Resume</CardTitle>
            <CardText>
              Personal resume which i developed using python Flask, CSS3, HTML5 and JavaScript
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/HarunHM/Uploading-Personal-Resume">GitHub </a></Button>
              <Button colored><a href="#">CodePen</a></Button>
              <Button colored><a href="https://harunresume.netlify.com/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px',  backgroundImage: `url(${techtalk})`}}>Tech Talk KE</CardTitle>
            <CardText>
               this is a social platform where experienced developers shares ideas, developers using Flask Backend
            </CardText>
            <CardActions border>
              <Button colored> <a href="#">GitHub </a></Button>
              <Button colored><a href="#">CodePen </a></Button>
              <Button colored><a href="#">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>React</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>Django</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Flask</Tab>
          <Tab>React</Tab>
          <Tab>Django</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
