import qs from 'qs';
import { useState, useEffect } from 'react';
import { sortObjectByKey, reverseObjectByKey } from '@utils/functions';
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
    const getData = async (query: qs.ParsedQs) => {
      const { vote_type, reverse, island, region, province, municipality } =
        query as VOTE_QUERY;

      let data;
      if (island && region && province && municipality) {
        const { data: votes } = await getMunicipalitiesVotes(
          island,
          region,
          province,
          municipality,
          vote_type
        );

        data = votes;
      } else if (island && region && province) {
        const { data: votes } = await getProvincesVotes(
          island,
          region,
          province,
          vote_type
        );

        data = votes;
      } else if (island && region) {
        const { data: votes } = await getRegionVotes(island, region, vote_type);

        data = votes;
      } else if (island) {
        const { data: votes } = await getIslandVotes(island, vote_type);

        data = votes;
      } else {
        const { data: votes } = await getCountryVotes(vote_type);

        data = votes;
      }

      if (reverse === REVERSE.yes) {
        data = reverseObjectByKey(data, 'name') as VOTES;
        data = reverseObjectByKey(data, 'vote_count') as VOTES;
      }

      data = sortObjectByKey(data, 'vote_count') as VOTES;

      setData(data);
    };

    getData(query);
  }, [searchParams]);

  return { data };
};

export default useGetVotes;
