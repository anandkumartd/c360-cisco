import React, { Component } from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import Paper from "@material-ui/core/Paper";
import MapCard from "./MapCard";
import "./SideBar.css";
import { AsYouType } from "libphonenumber-js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Parser from "../../../utils/parsers/Parser";
import { fetchAttributes } from "../../../actions/attributeActions";

//import { fetchProfiles } from "../../../actions/profilesActions";

var dateFormat = require("dateformat");
class SideBar extends Component {
  state = {};
componentDidMount(){
  const profile = this.props.profile;
  //const customerID = (profile["cdp_customer_id"] == null ? "" : profile["cdp_customer_id"]);
 //this.props.fetchAttributes(customerID);
 const attributes = this.props.attributes;
}
  componentWillMount() {
  
  }

  render() {
    const profile = this.props.profile;
    const attributes = this.props.attributes;
    const return_name =
      (profile["first_name"] == null ? "" : profile["first_name"]) +
      " " +
      (profile["last_name"] == null ? "" : profile["last_name"]);

      const return_biz = profile["bus_name"] == null
      ? ""
      : profile["bus_name"];
      const return_mail =  profile["bus_email"] == null
        ? ""
        : profile["bus_email"];

        const return_cats =  profile["acount_cat"] == null
        ? ""
        : profile["acount_cat"];

        const return_score = profile["bombora"] == null
        ? ""
        : profile["bombora"];
   

    const return_email = profile["email"] == null ? "" : profile["email"];
    const return_phone = profile["phone"] == null ? "" : profile["phone"];
    // const phoneNumber = parsePhoneNumberFromString(return_phone);
    const phoneNumber = new AsYouType("US").input(return_phone);
    // console.log("phoneNumber: " + phoneNumber);
    //console.log("phoneNumber: " + phoneNumber);
    const return_gender =profile["gender"] == null ? "" : profile["gender"];
    const return_birth =
    profile["dob"] == null ? "" : dateFormat(profile["dob"], "mediumDate");
    const return_age = profile["age"] == null ? "" : profile["age"];
    const return_street =
      (profile["number"] == null ? "" : profile["number"]) +
      " " +
      (profile["street"] == null ? "" : profile["street"].toLowerCase());
    const return_city =
    profile["city"] == null ? "" :profile["city"].toLowerCase();
    const return_state =
      (profile["state"] == null ? "" : profile["state"]) +
      " " +
      (profile["postcode"] == null ? "" : profile["postcode"]);
    const return_facebook = profile["facebook"] == null ? "" : profile["facebook"];
    const return_linkedin = profile["linkedin"] == null ? "" : profile["linkedin"];
    const return_pinterest =profile["pinterest"] == null ? "" : profile["pinterest"];
    const return_reddit = profile["reddit"] == null ? "" : profile["reddit"];
    const return_twitter = profile["twitter"] == null ? "" : profile["twitter"];
    
//console.log(attributes);
    return (
      <div className={"sidebar"}>
     
        <p className={"name"}>{return_biz}</p>
        <p className={"email"}>
          <span className={"emailIcon"}>
            <SvgIcon>
              <path
                d="M0.9,0C0.1,0-0.3,1.1,0.3,1.6l6.8,5.5C7.4,7.3,7.7,7.4,8,7.4c0.3,0,0.6-0.1,0.9-0.3l4.7-3.9
  L13,2.5L8.3,6.4l0,0C8.2,6.4,8.1,6.4,8,6.4c-0.1,0-0.2,0-0.3-0.1L1.2,1h13.6H15v1.1l0.7-0.6l0,0C16.3,1,15.9,0,15.1,0H0.9z M1,3.7
  c0-0.3-0.2-0.5-0.5-0.5S0,3.4,0,3.7v7C0,11.4,0.6,12,1.2,12h13.5c0.7,0,1.2-0.6,1.2-1.2v-7c0-0.3-0.2-0.5-0.5-0.5S15,3.4,15,3.7v7
  c0,0.1-0.1,0.2-0.2,0.2H1.2C1.1,11,1,10.9,1,10.7V3.7z"
              />
            </SvgIcon>
          </span>
          <span className={"emailText"}>{return_mail}</span>
        </p>
        <p className={"phone"}>
          <span className={"phoneIcon"}>
            <SvgIcon>
              <path
                d="M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z M0,8c0-4.4,3.6-8,8-8s8,3.6,8,8
  s-3.6,8-8,8S0,12.4,0,8z M5.7,2.9C5.9,2.9,6,3,6.1,3.1l1.6,2.4C7.8,5.7,7.8,6,7.6,6.2L7.1,6.7C7,6.8,7,7,7.1,7.2l0,0
  c0.2,0.3,0.5,0.6,0.8,0.9c0.3,0.3,0.6,0.6,0.9,0.8l0,0h0C9,9,9.2,9,9.3,8.9l0.5-0.5c0.2-0.2,0.4-0.2,0.6-0.1l2.4,1.6
  c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0,0.3-0.1,0.4l-1.2,1.2c-0.6,0.6-1.6,0.9-2.4,0.6c-1.2-0.4-2.4-1.2-3.5-2.3C4.7,9.1,3.9,7.8,3.5,6.7
  c-0.3-0.9,0-1.8,0.6-2.4l0,0l1.2-1.2C5.4,2.9,5.6,2.9,5.7,2.9z M4.8,5C4.8,5,4.8,5,4.8,5C4.4,5.3,4.3,5.9,4.5,6.3l0,0
  c0.4,1,1,2.1,2,3.1c1,1,2.1,1.7,3.1,2.1c0.5,0.2,1,0,1.4-0.3l0,0l0.8-0.8l-1.6-1L10,9.6c-0.5,0.5-1.3,0.5-1.8,0.1
  c-0.3-0.3-0.7-0.6-1-0.9c-0.3-0.3-0.6-0.7-0.9-1C5.9,7.2,5.9,6.4,6.4,6l0.2-0.2l-1-1.6L4.8,5z"
              />
            </SvgIcon>
          </span>
          <span className={"phoneText"}>{phoneNumber}</span>
        </p>
        <p className={"account"}><span className={"accountIcon"}>
            <SvgIcon>
              <path
                d="M24.61,10.95c0-0.52-0.29-0.99-0.75-1.22l-1.83-0.92l1.83-0.92c0,0,0,0,0,0c0.47-0.23,0.75-0.7,0.75-1.22
                c0-0.52-0.29-0.99-0.75-1.22L13.51,0.28c-0.76-0.38-1.66-0.38-2.41,0L0.75,5.46C0.29,5.69,0,6.16,0,6.68C0,7.2,0.29,7.67,0.75,7.9
                l1.83,0.92L0.75,9.73C0.29,9.96,0,10.43,0,10.95c0,0.52,0.29,0.99,0.75,1.22l1.83,0.92l-1.83,0.92C0.29,14.24,0,14.71,0,15.23
                c0,0.52,0.29,0.99,0.75,1.22l10.35,5.17c0.38,0.19,0.79,0.28,1.21,0.28s0.83-0.09,1.21-0.28l10.35-5.17
                c0.47-0.23,0.75-0.7,0.75-1.22c0-0.52-0.29-0.99-0.75-1.22l-1.83-0.92l1.83-0.92C24.33,11.94,24.61,11.47,24.61,10.95z M1.26,6.89
                C1.15,6.83,1.13,6.73,1.13,6.68s0.02-0.15,0.13-0.21L11.61,1.3c0.22-0.11,0.46-0.16,0.7-0.16c0.24,0,0.48,0.05,0.7,0.16l10.35,5.17
                c0.11,0.06,0.13,0.16,0.13,0.21s-0.02,0.15-0.13,0.21l-10.35,5.17c-0.44,0.22-0.96,0.22-1.4,0L1.26,6.89z M23.35,15.02
                c0.11,0.06,0.13,0.15,0.13,0.21c0,0.05-0.02,0.15-0.13,0.21l-10.35,5.17c-0.44,0.22-0.96,0.22-1.4,0L1.26,15.44
                c-0.11-0.06-0.13-0.16-0.13-0.21c0-0.05,0.02-0.15,0.13-0.21l2.59-1.3l7.25,3.62c0.38,0.19,0.79,0.28,1.21,0.28
                c0.41,0,0.83-0.09,1.21-0.28l7.25-3.62L23.35,15.02z M23.35,11.16l-10.35,5.17c-0.44,0.22-0.96,0.22-1.4,0L1.26,11.16
                c-0.11-0.06-0.13-0.16-0.13-0.21c0-0.05,0.02-0.15,0.13-0.21l2.59-1.3l7.25,3.62c0.38,0.19,0.79,0.28,1.21,0.28
                c0.41,0,0.83-0.09,1.21-0.28l7.25-3.62l2.59,1.3c0.11,0.06,0.13,0.16,0.13,0.21C23.48,11.01,23.47,11.1,23.35,11.16z"
              />
            </SvgIcon>
          </span>
          <span className={"accountText"}>Account Category: {return_cats}</span></p>
        <p className={"score"}>
        <span className={"scoreIcon"}>
            <SvgIcon>
              <path
                d="M0,0v26.94h19.16V0H0z M18.04,25.8H1.12V1.14h16.92V25.8z M3.78,13.81h12.17v1.16H3.78V13.81z M3.78,16.52
                h12.17v1.16H3.78V16.52z M3.78,19.22h12.17v1.16H3.78V19.22z M3.78,21.71h12.17v1.16H3.78V21.71z M10.49,8.59l0.18,0.61h1.34
                l-1.54-4.28H9.2L7.65,9.2h1.3l0.19-0.61H10.49z M9.84,6.35h0.01l0.38,1.32h-0.8L9.84,6.35z M13.28,6.18v1.06h-1.04v0.92h1.04V9.2
                h0.9V8.15h1.04V7.23h-1.04V6.18H13.28z M11.27,12.54c2.9,0,5.27-1.9,5.27-4.86s-2.36-5.36-5.27-5.36c-0.89,0-2.25,0.44-2.46,0.62
                C8.6,3.14,8.67,3.57,9.06,3.39c0.39-0.19,1.41-0.56,2.22-0.56c2.63,0,4.78,2.18,4.78,4.86s-2.14,4.36-4.78,4.36S6.5,10.36,6.5,7.68
                c0-0.85,0.44-2.17,0.6-2.34c0.16-0.17-0.24-0.6-0.4-0.3c-0.16,0.3-0.69,1.68-0.69,2.64C6.01,10.64,8.37,12.54,11.27,12.54z"
              />
            </SvgIcon>
          </span>
        
          <span className={"scoreText"}>Bombora Score: {return_score}</span></p>
        
        <div className={"socials"}><ul>
          <li className={
       profile["facebook"] == null || profile["facebook"] === 0 ? 
      "facebook inactive"
      : "facebook active"}>
        <SvgIcon><path  d="M5.8,16V9.2h2.6l0.4-3h-3V4.3c0-0.9,0.2-1.5,1.5-1.5h1.6V0.1C8.6,0.1,7.6,0,6.5,0
          C4.2,0,2.6,1.4,2.6,4v2.3H0v3h2.6V16H5.8z"/></SvgIcon>
            </li>
          <li className={
        profile["linkedin"] == null || profile["linkedin"] === 0 ? 
      "linkedin inactive"
      : "linkedin active"}>
        <SvgIcon><path d="M14.7,16h-3.4c0,0,0-5.8,0-6.3c0-0.4,0-1.9-1.5-1.9c-1.3,0-1.5,1.4-1.5,1.9c0,0.5,0,6.3,0,6.3
  H5.1V4.9h3.4v1.5c0,0,0.7-1.5,2.6-1.5c2,0,3.6,1.6,3.6,4.8V16z M0,4.8h3.4V16H0V4.8z M1.7,3.7C0.7,3.7,0,2.8,0,1.8
  C0,0.8,0.7,0,1.7,0c1,0,1.7,0.8,1.7,1.8C3.4,2.8,2.8,3.7,1.7,3.7z"/></SvgIcon></li>
          <li className={profile["reddit"] == null || profile["reddit"] === 0 ? 
      "reddit inactive"
      : "reddit active"}>
        <SvgIcon><path d="M7.9,0c4.3,0,7.9,3.5,7.9,7.8s-3.5,7.8-7.9,7.8S0,12.1,0,7.8S3.5,0,7.9,0z M10.9,6.8c-0.2,0-0.4,0.1-0.6,0.2
  C9.7,6.6,8.9,6.4,8.2,6.4l0.4-1.3l1.1,0.3c0,0.4,0.4,0.7,0.8,0.7c0.4,0,0.8-0.3,0.8-0.8c0-0.4-0.4-0.8-0.8-0.8
  c-0.3,0-0.6,0.2-0.7,0.4L8.5,4.6c-0.1,0-0.2,0-0.3,0.1L7.7,6.4C6.9,6.4,6.1,6.6,5.4,7C5.3,6.8,5.1,6.8,4.9,6.8
  c-0.5,0-0.9,0.4-0.9,0.9c0,0.3,0.2,0.6,0.4,0.8c0,0.1,0,0.1,0,0.2c0,0.6,0.4,1.2,1.1,1.7C6,10.8,6.9,11,7.8,11
  c0.9,0,1.8-0.2,2.5-0.7c0.7-0.4,1.1-1,1.1-1.7c0-0.1,0-0.1,0-0.2c0.3-0.2,0.4-0.5,0.4-0.8C11.8,7.2,11.4,6.8,10.9,6.8z M10.5,4.9
  c0.2,0,0.4,0.2,0.4,0.4c0,0.2-0.2,0.4-0.4,0.4c-0.2,0-0.4-0.2-0.4-0.4C10.1,5.1,10.3,4.9,10.5,4.9z M6.1,8.3c0-0.3,0.2-0.5,0.5-0.5
  C7,7.7,7.2,8,7.2,8.3c0,0.3-0.2,0.5-0.5,0.5C6.4,8.8,6.1,8.6,6.1,8.3z M9.2,9.8c-0.3,0.3-0.7,0.4-1.3,0.4c0,0,0,0,0,0c0,0,0,0,0,0
  c-0.6,0-1-0.1-1.3-0.4c-0.1-0.1-0.1-0.2,0-0.3c0.1-0.1,0.2-0.1,0.3,0c0.2,0.2,0.5,0.3,1,0.3c0,0,0,0,0,0c0,0,0,0,0,0
  c0.5,0,0.8-0.1,1-0.3c0.1-0.1,0.2-0.1,0.3,0C9.2,9.6,9.2,9.7,9.2,9.8z M9,8.8c-0.3,0-0.5-0.2-0.5-0.5C8.5,8,8.7,7.7,9,7.7
  c0.3,0,0.5,0.2,0.5,0.5C9.6,8.6,9.3,8.8,9,8.8z"/></SvgIcon></li>
          <li className={profile["twitter"] == null ||profile["twitter"] === 0 ? 
      "twitter inactive"
      : "twitter active"}>
        <SvgIcon><path d="M16,1.5C15.4,1.8,14.8,2,14.1,2c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8
  c-0.6-0.6-1.4-1-2.4-1C9.3,0,7.8,1.5,7.8,3.3c0,0.3,0,0.5,0.1,0.7C5.2,3.9,2.7,2.6,1.1,0.6c-0.3,0.5-0.4,1-0.4,1.6
  c0,1.1,0.6,2.1,1.5,2.7c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,7.8,2.7,7.9,2.4,7.9c-0.2,0-0.4,0-0.6-0.1
  c0.4,1.3,1.6,2.2,3.1,2.3c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4
  C15,2.8,15.6,2.2,16,1.5z"/></SvgIcon></li>
          </ul></div>
        <Paper>
          <MapCard attributes={profile} />
        </Paper>
        <p className={"address"}>
          <span className={"street"}>{return_street}</span>
          <span className={"city"}>, {return_city}</span>
          <span className={"state"}>, {return_state}</span>, United States
        </p>
      </div>
    );
  }
}

SideBar.propTypes = {
  fetchAttributes: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  attributes: state.attributes.item
});

const mapActionsToProps = {
  fetchAttributes: fetchAttributes
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SideBar);
