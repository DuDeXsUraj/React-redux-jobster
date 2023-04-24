import styled from "styled-components";

const Wrapper = styled.div`
       display:block;
       box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
        .sidebar-container {
          background: var(--white);
          min-height: 100vh;
          height: 100%;
          width: 250px;
          margin-left: -250px;
          margin-top:-30px;
          transition: 0.3s ease-in-out;
        
        }
        

        .content {
          position: sticky;
          top:0;
        }
        .show-sidebar {
          margin-left: 0;
        }
        header {
          height: 6rem;
          display: flex;
          align-items: center;
          padding-left: 2.5rem;
          margin-left:-30px;
        }
        .nav-links {
          padding-top: 2rem;
          display: flex;
          flex-direction: column;
        }
        .nav-link {
          display: flex;
          align-items: center;
          color: grey;
          padding: 1rem 0rem;
          padding-left: 2.5rem;
          text-transform: capitalize;
          transition: 0.3s ease-in-out;
          margin-left:-30px;
        }
        .nav-link:hover {
          background: aliceblue;
          padding-left:2rem;
          color:grey;
        }
        .nav-link:hover .icon {
          color: blue;
        }
        .icon {
          font-size: 1.5rem;
          margin-right: 1rem;
          display: grid;
          place-items: center;
          transition: 0.3s ease-in-out;
        }
        .active {
          color: var(--grey-900);
        }
        .active .icon {
          color: var(--primary-500);
        }
      }

@media(max-width:992px){
    display:none;
}
` 
export default Wrapper;