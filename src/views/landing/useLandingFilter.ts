import { useSearchParams } from 'react-router-dom';
import qs from 'qs';
import cleanDeep from 'clean-deep';

const useLandingFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = qs.parse(searchParams.toString());

  const filters = {
    reverse: searchParams.get('reverse') as string | undefined,
    vote_type: searchParams.get('vote_type') as VOTE_TYPES | undefined,
    island: searchParams.get('island') as ISLANDS | undefined,
    region: searchParams.get('region') as REGIONS | undefined,
    province: searchParams.get('province') as PROVINCES | undefined,
    municipality: searchParams.get('municipality') as
      | MUNICIPALITIES
      | undefined,
  };

  const handleFilterChange = (
    name: string,
    value: string | null,
    arrays?: string[]
  ) => {
    const clearedQuery: Record<string, undefined> = {};

    (arrays || []).forEach((arr) => {
      clearedQuery[arr] = undefined;
    });

    setSearchParams(
      qs.stringify(cleanDeep({ ...query, [name]: value, ...clearedQuery }))
    );
  };

  return { filters, handleFilterChange };
};

export default useLandingFilter;
