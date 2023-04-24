import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import FormRow from "../../Components/FormRow";

import { FormRowSelect } from "../../Components";
import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from "../../FeaturesUser/job/JobSlice";
import Wrapper from "../../assets/Wrappers/DashboardFormPage";

function AddJobs() {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    if (!position || !company || !jobLocation) {
      toast.error("Please Fill Out All Fields");
      return;
    }

    if(isEditing){
      dispatch(editJob({jobId:editJobId,job:{position,company,jobLocation,jobType,status}}))
      return;
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }));
    e.preventDefault();
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  useEffect(() => {
    if(!isEditing)
   {
    dispatch(handleChange({ name: "jobLocation", value: user.location }));
}},[]);

  return (
    <Wrapper>
      <h3 className="mb-3">{isEditing ? 'edit job' : 'add job'}</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-center">
          <FormRow
            name="position"
            type="text"
            value={position}
            handleChange={handleJobInput}
          />

          <FormRow
            name="company"
            type="text"
            value={company}
            handleChange={handleJobInput}
          />

          <FormRow
            name="jobLocation"
            type="text"
            value={jobLocation}
            labelText="job location"
            handleChange={handleJobInput}
          />
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          <FormRowSelect
            name="jobType"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />

          <div className="btn-container mb-3">
            <button
              type="button"
              className="btn btn-block clear-btn bg-secondary"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type="button"
              className="btn btn-block"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}

export default AddJobs;
