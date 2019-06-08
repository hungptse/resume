import React, { Component } from "react";
import { Tag, Timeline } from "antd";
import { connect } from "react-redux";
import { Button, Icon, Label } from "semantic-ui-react";
class Resume extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const {
      information,
      skill_front_end,
      skill_back_end,
      skill_others,
      objective,
      education,
      activities,
      projects,
      workingEXP
    } = this.props.data;
    const listInformation = Object.keys(information).map(key => (
      <p key={key}>
        {key} : {information[key]}  
      </p>
    ));

    const listSkillFrontEnd = skill_front_end.map(value => (
      <Button content={value} style={{ marginTop: 5 }} size="small" secondary basic />
    ));

    const listSkillBackEnd = skill_back_end.map(value => (
      <Button content={value}  style={{ marginTop: 5 }} size="small" secondary basic />
    ));

    const objectiveList = objective.map(value => (
      <div dangerouslySetInnerHTML={{ __html: value }} />
    ));
    const listSkillOthers = skill_others.map(value => (
      <Button
        style={{ marginTop: 5 }}
        content={value}
        size="small"
        secondary
        basic
      />
    ));

    const listEducation = Object.keys(education).map(key => (
      <Timeline.Item color="gray" className="education" key={education[key]}>
        {key}
        <p>{education[key]}</p>
      </Timeline.Item>
    ));

    const listWorking = Object.keys(workingEXP).map(key => (
      <Timeline.Item color="gray" className="education" key={workingEXP[key]}>
        {key}
        <p>{workingEXP[key]}</p>
      </Timeline.Item>
    ));

    const listProjects = Object.keys(projects).map(key => (
      <Timeline.Item color="gray" key={projects[key]}>
        <span dangerouslySetInnerHTML={{ __html: key }} />
        <p>{projects[key]}</p>
      </Timeline.Item>
    ));
    const listActivities = Object.keys(activities).map(key => (
      <Timeline.Item color="gray" key={activities[key]}>
        <span dangerouslySetInnerHTML={{ __html: key }} />
        <p>{activities[key]}</p>
      </Timeline.Item>
    ));

    return (
      <div className="resume">
        <div className="print-button">
          <Button icon="download" size="large" onClick={() => window.print()} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <h3>
            <Icon name="quote left" /> Information
          </h3>
          {listInformation}
        </div>
        <div style={{ marginBottom: 10 }}>
          <h3>
            <Icon name="location arrow" /> Objective
          </h3>
          {objectiveList}
        </div>
        <div style={{ marginBottom: 5 }}>
          <h3>
            <Icon name="graduation" /> Education
          </h3>
          <Timeline>{listEducation}</Timeline>
        </div>
        <div style={{ marginBottom: 5 }}>
          <h3>
            <Icon name="briefcase" /> Working Experience
          </h3>
          <Timeline>{listWorking}</Timeline>
        </div>
        <div style={{ marginBottom: 10 }}>
          <h3>
            <Icon name="code" /> Skills
          </h3>
          <div style={{ marginBottom: 10 }}>
            <Button as="div" labelPosition="right">
              <Button basic color="blue">
                <Icon name="clone outline" />
                Front-end
              </Button>
            </Button>
            {listSkillFrontEnd}
          </div>
        </div>
        <div style={{ marginBottom: 10 }}>
          <Button as="div" labelPosition="right">
            <Button basic color="blue">
              <Icon name="database" />
              Back-end
            </Button>
          </Button>
          {listSkillBackEnd}
        </div>
        <div style={{ marginBottom: 10 }}>
          <h3>
            <Icon name="setting" /> Others
          </h3>
          <div>
            <Button as="div" labelPosition="right">
              <Button basic color="blue">
                <Icon name="database" />
                Tool
              </Button>
            </Button>
            {listSkillOthers}
          </div>
        </div>
        <div style={{ marginTop: 10 }}>
          <h3>
            <Icon name="fork" /> Projects
          </h3>
          <Timeline>{listProjects}</Timeline>
        </div>
        <div>
          <h3>
            <Icon name="paw" /> Activities
          </h3>
          <Timeline>{listActivities}</Timeline>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  data: state.resume
});

export default connect(mapStateToProps)(Resume);
