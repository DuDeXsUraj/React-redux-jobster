import { faBug, faCalendarCheck, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';
import StatItem from './StatItem';

import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs);

  const defaultStats = [
    {
      title: 'pending applications',
      count: stats.pending || 0,
      icon: <FontAwesomeIcon icon={faSuitcaseRolling}/> ,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: 'interviews scheduled',
      count: stats.interview || 0,
      icon:<FontAwesomeIcon icon={faCalendarCheck }/>,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'jobs declined',
      count: stats.declined || 0,
      icon: <FontAwesomeIcon icon={faBug}/>,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  row-gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
  }
`
export default StatsContainer;