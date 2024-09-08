type VOTE = {
  name: string;
  vote_count: integer;
  party: string;
};

type VOTES = VOTE[] | [];

type ISLANDS = 'luzon' | 'visayas' | 'mindanao';
type REGIONS =
  | 'barrm'
  | 'car'
  | 'ncr'
  | 'region-1'
  | 'region-2'
  | 'region-3'
  | 'region-4-a'
  | 'region-4-b'
  | 'region-5'
  | 'region-6'
  | 'region-7'
  | 'region-8'
  | 'region-9'
  | 'region-10'
  | 'region-11'
  | 'region-12'
  | 'region-13';
