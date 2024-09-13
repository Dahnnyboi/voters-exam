import { Row, Col } from 'reactstrap';

import Select from '@components/Select';
import { createSelectOptions } from '@utils/functions';
import {
  ISLAND_GROUP,
  ISLAND_REGIONS,
  REVERSE,
  REGIONS_PROVINCES,
  VOTE_TYPE,
  PROVINCES_MUNICIPALITIES,
} from '@constants/variables';

interface LandingFilterProps {
  filters: {
    reverse: string | undefined;
    island: ISLANDS | undefined;
    region: REGIONS | undefined;
    province: PROVINCES | undefined;
    municipality: MUNICIPALITIES | undefined;
  };
  onChangeFilter: (
    name: string,
    value: string | null,
    array?: string[]
  ) => void;
}

const LandingFilter = (props: LandingFilterProps) => {
  const { filters, onChangeFilter } = props;

  const { reverse, island, region, province, municipality } = filters;

  return (
    <Row className="mb-3">
      <Col>
        <Select
          options={createSelectOptions(VOTE_TYPE)}
          onChange={(value) => onChangeFilter('vote_type', value)}
          placeholder="Select type"
          defaultValue={reverse}
        />
      </Col>
      <Col>
        <Select
          options={createSelectOptions(REVERSE)}
          onChange={(value) => onChangeFilter('reverse', value)}
          placeholder="Select reverse"
          defaultValue={reverse}
        />
      </Col>
      <Col>
        <Select
          options={createSelectOptions(ISLAND_GROUP)}
          onChange={(value) => {
            onChangeFilter('island', value, [
              'region',
              'province',
              'municipality',
            ]);
          }}
          placeholder="Select Island Group"
          defaultValue={island}
        />
      </Col>
      <Col>
        <Select
          options={createSelectOptions(island ? ISLAND_REGIONS[island] : {})}
          onChange={(value) => {
            onChangeFilter('region', value, ['province', 'municipality']);
          }}
          placeholder="Select Region"
          defaultValue={region}
          disabled={!island}
        />
      </Col>
      <Col>
        <Select
          options={createSelectOptions(region ? REGIONS_PROVINCES[region] : {})}
          onChange={(value) => {
            onChangeFilter('province', value, ['municipality']);
          }}
          placeholder="Select Provinces"
          defaultValue={province}
          disabled={!region}
        />
      </Col>
      <Col>
        <Select
          options={createSelectOptions(
            province ? PROVINCES_MUNICIPALITIES[province] : {}
          )}
          onChange={(value) => onChangeFilter('municipality', value)}
          placeholder="Select Municipality"
          defaultValue={municipality}
          disabled={!province}
        />
      </Col>
    </Row>
  );
};

export default LandingFilter;
