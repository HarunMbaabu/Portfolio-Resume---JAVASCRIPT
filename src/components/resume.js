import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import profile from './my_profile.jpg';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={profile}
                alt="avatar"
                style={{height: '350px', width:'300px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Harun Mwenda</h2>
            <h4 style={{color: 'grey'}}>Software Developer.</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p style={{textAlign:'justify'}}>Am a Python and JavaScript developer, with more than 4 years full stack web development experience using ReactJS, NodeJs, Flask, Django, GraphQl, Cascading style sheets(CSS) and Html Bootstarp. I also have been involved in many design thinking panels, i have worked with Toptal and Gitlab as a remote engineer in the past, i believe in small code for optmal tasks. I have one year experience in Data analysis and visualization using using Python and R.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(+254) 0798166628</p>
            <h5>Email</h5>
            <p> mbaabuharun8@gmail.com</p>
            <h5>Web</h5>
            <p>www.luxtechacademy.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2020}
              endYear={2017}
              schoolName="Murang'a University of Technology"
              schoolDescription="Bachelor of science (Mathematics and computer science), 
                                 where is specialized  in applied statistics with programming."
               />

               <Education
                 startYear={2019}
                 endYear={2019}
                 schoolName="Edureka leaarning community"
                 schoolDescription="I enrolled for a DevOps training at Edureka where i learnt: what is DevOps,
                                    DevOps tools, DevOps life cycle and how to think like a software engineer."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Remote Developer Upwork"
              jobDescription="Where i used to develop full stack software for clients at upwork, i used Flask, ReacJs and docker to containerize the applications.I was exposed to different front end and backend tools"
              />

              <Experience
                startYear={2019}
                endYear={2019}
                jobName="Remote Developer at Toptal"
                jobDescription="MId 2019 i secured a 4 months contract with TopTal  where i developed front end solution for different start-up and clients globally using ReactJs, I worked with different developers globally and get expose of different DEvOps tools"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Python"
                progress={100}
                />
                <Skills
                  skill="JavaScript"
                  progress={90}
                  />
                  <Skills
                    skill="React.js"
                    progress={80}
                    />
                    <Skills
                      skill="HTML/CSS"
                      progress={70}
                      />
                      <Skills
                      skill="NodeJS"
                      progress={50}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
