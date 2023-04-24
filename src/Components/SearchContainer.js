import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearFilter, handleChange } from "../FeaturesUser/all-jobs/AllJobsSlice";
import styled from "styled-components";
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";

function SearchContainer() {
  const { search, isLoading, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);

  const { statusOptions,jobTypeOptions } =
    useSelector((store) => store.job);
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
      e.preventDefault();
      dispatch(clearFilter())
    }
    const handleSearch = (e)=>{
      if(isLoading) return;
      dispatch(handleChange({name:e.target.name,value:e.target.value}))
    }

  return  <Wrapper>
  <form className='form'>
    <h4 className="mb-4">Search form</h4>
    <div className='form-center'>
      {/* search position */}
      <FormRow
        type='text'
        name='search'
        value={search}
        handleChange={handleSearch}
      />
      {/* search by status */}
      <FormRowSelect
        labelText='status'
        name='searchStatus'
        value={searchStatus}
        handleChange={handleSearch}
        list={['all', ...statusOptions]}
      />

      {/* search by type*/}
      <FormRowSelect
        labelText='type'
        name='searchType'
        value={searchType}
        handleChange={handleSearch}
        list={['all', ...jobTypeOptions]}
      />
      {/* sort */}
      <FormRowSelect
        name='sort'
        value={sort}
        handleChange={handleSearch}
        list={sortOptions}
      />
      <button
        className='btn btn-block btn-success'
        disabled={isLoading}
        onClick={clearFilter}
      >
        clear filters
      </button>
    </div>
  </form>
</Wrapper>;
}

const Wrapper = styled.section`
.form {
  width: 100%;
  max-width: 100%;
  background:white;
  padding:20px;
  border-radius:4px;
}
.form-input,
.form-select,
.btn-block {
  height: 40px;
  text-transform:capitalize;
}
.form-row {
  margin-bottom: 0;
}
.form-center {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 2rem;
  row-gap: 0.5rem;
  text-transform:capitalize;
}
h5 {
  font-weight: 700;
}
.btn-block {
  align-self: end;
  margin-top:1rem;
}
@media (min-width: 768px) {
  .form-center {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 992px) {
  .form-center {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .btn-block {
    margin-bottom:1rem;
  }
}
`

export default SearchContainer;
