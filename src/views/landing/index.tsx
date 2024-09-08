import Table from '@components/Table';
import { Container } from 'reactstrap';
import LandingFilter from './LandingFilter';
import useGetVotes from './useGetVotes';
import useLandingFilter from './useLandingFilter';

const Index = () => {
  const { data } = useGetVotes();
  const { filters, handleFilterChange } = useLandingFilter();

  return (
    <div className="h-100 my-5">
      <Container>
        <LandingFilter filters={filters} onChangeFilter={handleFilterChange} />
        <Table heads={['Name', 'Votes']}>
          {data.map((item) => {
            const { name, vote_count } = item;

            return (
              <tr key={name}>
                <td>{name}</td>
                <td>{vote_count}</td>
              </tr>
            );
          })}
        </Table>
      </Container>
    </div>
  );
};

export default Index;
