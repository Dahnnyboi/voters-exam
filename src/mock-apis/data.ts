import { convertJsonToData } from '@utils/functions';

export const getCountryVotes = (voteType?: VOTE_TYPES) =>
  convertJsonToData<VOTES>(
    () => import(`@assets/country/${voteType || 'president'}.json`)
  );

export const getIslandVotes = (island: ISLANDS, voteType?: VOTE_TYPES) =>
  convertJsonToData<VOTES>(
    () =>
      import(`@assets/island-group/${island}/${voteType || 'president'}.json`)
  );

export const getRegionVotes = (
  island: ISLANDS,
  region: REGIONS,
  voteType?: VOTE_TYPES
) =>
  convertJsonToData<VOTES>(
    () =>
      import(
        `@assets/region/${island}/${region}/${voteType || 'president'}.json`
      )
  );

export const getProvincesVotes = (
  island: ISLANDS,
  region: REGIONS,
  province: PROVINCES,
  voteType?: VOTE_TYPES
) =>
  convertJsonToData<VOTES>(
    () =>
      import(
        `@assets/provinces/${island}/${region}/${province}/${voteType || 'president'}.json`
      )
  );

export const getMunicipalitiesVotes = (
  island: ISLANDS,
  region: REGIONS,
  province: PROVINCES,
  municipality: MUNICIPALITIES,
  voteType?: VOTE_TYPES
) =>
  convertJsonToData<VOTES>(
    () =>
      import(
        `@assets/municipalities/${island}/${region}/${province}/${municipality}/${voteType || 'president'}.json`
      )
  );
