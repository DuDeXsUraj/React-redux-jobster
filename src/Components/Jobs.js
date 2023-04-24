import React from "react";
import { useDispatch } from "react-redux";
import Wrapper from "../assets/Wrappers/Jobs";
import { Link } from "react-router-dom";
import JobsInfo from "./JobsInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment/moment";
import {
  faBriefcase,
  faCalendar,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { deleteJob } from "../FeaturesUser/job/JobSlice";
import { setEditJob } from "../FeaturesUser/job/JobSlice";
function Jobs({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) {
 const dispatch = useDispatch();
  const date = moment(createdAt).format('MMM Do, YYYY');
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobsInfo
            text={jobLocation}
            icon={<FontAwesomeIcon icon={faLocationArrow} />}
          />
          <JobsInfo text={date} icon={<FontAwesomeIcon icon={faCalendar} />} />
          <JobsInfo
            text={jobType}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              className="btn edit-btn"
              onClick={() => {dispatch(setEditJob({editJobId:_id,position,company,jobLocation,jobType,status}))}}
            >
              edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={()=>dispatch(deleteJob(_id))}
            >
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
}

export default Jobs;
