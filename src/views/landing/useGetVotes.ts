import qs from 'qs';
import { useState, useEffect } from 'react';
import { sortObjectByKey, reverseObjectValue } from '@utils/functions';
import { useSearchParams } from 'react-router-dom';
import { REVERSE } from '@constants/variables';
import {
  getCountryVotes,
  getIslandVotes,
  getRegionVotes,
  getProvincesVotes,
  getMunicipalitiesVotes,
} from '@mock-apis/data';

const useGetVotes = () => {
  const [searchParams] = useSearchParams();
  const query = qs.parse(searchParams.toString());

  const [data, setData] = useState<VOTES>([]);

  useEffect(() => {
    const getVotes = async (query: VOTE_QUERY) => {
      const { vote_type, island, region, province, municipality } =
        query as VOTE_QUERY;

      if (municipality)
        return getMunicipalitiesVotes(
          island,
          region,
          province,
          municipality,
          vote_type
        );
      if (province)
        return getProvincesVotes(island, region, province, vote_type);
      if (region) return getRegionVotes(island, region, vote_type);
      if (island) return getIslandVotes(island, vote_type);

      return getCountryVotes(vote_type);
    };

    const getData = async (query: VOTE_QUERY) => {
      // 1. get the votes from json files
      let data = await getVotes(query);

      const { reverse } = query;

      // 2. reverse if there is a query for reversing
      if (reverse === REVERSE.yes) data = reverseObjectValue<VOTE>(data);
      // 3. sort the array of votes
      data = sortObjectByKey(data, 'vote_count');

      setData(data);
    };

    getData(query as VOTE_QUERY);
  }, [searchParams]);

  return { data };
};

export default useGetVotes;
