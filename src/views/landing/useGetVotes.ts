import qs from 'qs';
import { useState, useEffect } from 'react';
import countryPresidents from '@assets/country/president.json';
import { sortObjectByKey, reverseObjectByKey } from '@utils/functions';
import { useSearchParams } from 'react-router-dom';
import { REVERSE } from '@constants/variables';

const useGetVotes = () => {
  const [searchParams] = useSearchParams();
  const query = qs.parse(searchParams.toString());
  const [data, setData] = useState<VOTES>([]);

  useEffect(() => {
    const { reverse, island, regions } = query;

    // Mock API
    let data = countryPresidents.data;

    if (reverse === REVERSE.yes) {
      data = reverseObjectByKey(data, 'name') as VOTES;
      data = reverseObjectByKey(data, 'vote_count') as VOTES;
    }

    data = sortObjectByKey(data, 'vote_count') as VOTES;

    setData(data);
  }, [searchParams]);

  return { data };
};

export default useGetVotes;
