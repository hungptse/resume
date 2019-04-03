import React, { Component } from "react";
import { Tag, Timeline } from "antd";
import { connect } from "react-redux";
import { Button, Icon } from "semantic-ui-react";
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
      achievements,
      projects
    } = this.props.data;
    const listInformation = Object.keys(information).map(key => (
      <p key={key}>
        {key} : <b>{information[key]}</b>
      </p>
    ));

    const listSkillFrontEnd = skill_front_end.map(value => (
      <Button content={value} size="small" secondary basic />
    ));

    const listSkillBackEnd = skill_back_end.map(value => (
      <Button content={value} size="small" secondary basic />
    ));

    const objectiveList = objective.map(value => (
      <div dangerouslySetInnerHTML={{ __html: value }} />
    ));
    const listSkillOthers = skill_others.map(value => (
      <Button content={value} size="small" secondary basic />
    ));

    const listEducation = Object.keys(education).map(key => (
      <Timeline.Item color="gray" className="education" key={education[key]}>
        {key}
        <p>{education[key]}</p>
      </Timeline.Item>
    ));

    const listProjects = Object.keys(projects).map(key => (
      <Timeline.Item color="gray" className="education" key={projects[key]}>
        <span dangerouslySetInnerHTML={{ __html: key }} />
        <p>{projects[key]}</p>
      </Timeline.Item>
    ));

    const listAchievements = achievements.map(value => (
      <Timeline.Item color="gray" key={value}>
        {value}
      </Timeline.Item>
    ));

    return (
      <div className="resume">
        <div className="print-button">
          <Button icon="download" size="large" onClick={() => window.print()} />
        </div>
        <h3>
          <Icon name="caret right" /> Information
        </h3>
        {listInformation}
        <h3>
          <Icon name="caret right" /> Objective
        </h3>
        {objectiveList}
        <h3>
          <Icon name="caret right" /> Education
        </h3>
        <Timeline>{listEducation}</Timeline>
        <h3>
          <Icon name="caret right" /> Skills
        </h3>
        <div style={{marginBottom : 10}}>
        <Button content={<Icon name="clone outline" />} size="small" secondary basic label="Front-end:"/>
        {listSkillFrontEnd}
        </div>
        <div>
        <Button content={<Icon name="database" />} size="small" secondary basic label="Back-end:"/>
        {listSkillBackEnd}
        </div>
        <h3>
          <Icon name="caret right" /> Others
        </h3>
        {listSkillOthers}
        <h3>
          <Icon name="caret right" /> Projects
        </h3>
        <Timeline>{listProjects}</Timeline>
        {/* <h2># Achievements</h2>
        <Timeline className="timeline-list">{listAchievements}</Timeline> */}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  data: state.resume
});

export default connect(mapStateToProps)(Resume);
