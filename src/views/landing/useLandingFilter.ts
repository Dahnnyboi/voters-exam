import { useSearchParams } from 'react-router-dom';
import qs from 'qs';
import cleanDeep from 'clean-deep';

const useLandingFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = qs.parse(searchParams.toString());

  const filters = {
    reverse: searchParams.get('reverse') as string | undefined,
    island: searchParams.get('island') as ISLANDS | undefined,
    regions: searchParams.get('regions') as REGIONS | undefined,
    provinces: searchParams.get('provinces') as string | undefined,
    municipality: searchParams.get('municipality') as string | undefined,
  };

  const handleFilterChange = (name: string, value: string | null) => {
    setSearchParams(qs.stringify(cleanDeep({ ...query, [name]: value })));
  };

  return { filters, handleFilterChange };
};

export default useLandingFilter;
