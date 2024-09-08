import { Row, Col } from 'reactstrap';

import Select from '@components/Select';
import { createSelectOptions } from '@utils/functions';
import {
  ISLAND_GROUP,
  ISLAND_REGIONS,
  REVERSE,
  REGIONS_PROVINCES,
} from '@constants/variables';

interface LandingFilterProps {
  filters: {
    reverse: string | undefined;
    island: ISLANDS | undefined;
    regions: REGIONS | undefined;
    provinces: string | undefined;
    municipality: string | undefined;
  };
  onChangeFilter: (name: string, value: string | null) => void;
}

const LandingFilter = (props: LandingFilterProps) => {
  const { filters, onChangeFilter } = props;

  const { reverse, island, regions, provinces } = filters;

  return (
    <Row className="mb-3">
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
          onChange={(value) => onChangeFilter('island', value)}
          placeholder="Select Island Group"
          defaultValue={island}
        />
      </Col>
      <Col>
        <Select
          options={createSelectOptions(island ? ISLAND_REGIONS[island] : {})}
          onChange={(value) => onChangeFilter('regions', value)}
          placeholder="Select Region"
          defaultValue={regions}
          disabled={!island}
        />
      </Col>
      <Col>
        <Select
          options={createSelectOptions(
            regions ? REGIONS_PROVINCES[regions] : {}
          )}
          onChange={(value) => onChangeFilter('provinces', value)}
          placeholder="Select Provinces"
          defaultValue={provinces}
          disabled={!provinces}
        />
      </Col>
    </Row>
  );
};

export default LandingFilter;
