import React, { Component } from "react";
import { Avatar, Tooltip, Icon } from "antd";
import { connect } from "react-redux";
import avatar from "../../public/avatar.jpg";
class Introduction extends Component {
componentDidMount(){
    console.log(this.props);
    
}
  render() {
    const { name, description, github, facebook } = this.props.intro;
    return (
      <div className="intro">
        <div>
          <Avatar size={220} src={avatar} />
          <h1 className="name">{name}</h1>
          <p className="description">{description}</p>
          <div className="nav">
            <ul>
              <li>
                <Tooltip placement="top" title="Resume">
                    <Icon type="solution" />
                </Tooltip>
              </li>
              <li>
                <Tooltip placement="top" title="Github">
                  <a href={github} target="_blank">
                    <Icon type="github" />
                  </a>
                </Tooltip>
              </li>
              <li>
                <Tooltip placement="top" title="Facebook">
                  <a href={facebook} target="_blank">
                    <Icon type="facebook" />
                  </a>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps)(Introduction);
