import styled from 'styled-components';

const Wrapper = styled.div`
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  --shadow-2: 0px 2px 4px rgba(0, 0, 0, 0.1);
  header{
    padding: 1rem 1.5rem;
    border-bottom: 1px solid grey;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: #007bff;
    border-radius: 4px;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
  }
  .info {
    h5 {
      margin-bottom: 0.25rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: grey;
      letter-spacing: var(--letterSpacing);
    }
  }
  .pending {
    background: #fcefc7;
    color: #e9b949;
  }
  .interview {
    background: #e0e8f9;
    color: #647acb;
  }
  .declined {
    color: #d66a6a;
    background: #ffeeee;
  }
  .content {
    padding: 1rem;
    margin-left:0.7rem;
  }
  .content-center {
    align-items:start;
    display: grid;
    color:grey;
    margin-top:-4rem;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  .status {
    border-radius: 4px;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: center;
    width: 100px;
    height: 30px;
    margin-top: 0.5rem;
  }
  footer {
    margin-top: 1rem;
  }
  .edit-btn,
  .delete-btn {
    letter-spacing: 2px;
    cursor: pointer;
   height: 40px;
  }
  .edit-btn {
    color: var(--green-dark);
    background: skyblue;
    margin-right: 0.5rem;
  }
  .delete-btn {
    color: var(--red-dark);
    background: pink;
  }
  &:hover .actions {
    visibility: visible;
  }
`;

export default Wrapper;