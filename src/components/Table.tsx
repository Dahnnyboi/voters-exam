import { Table as ReactTable } from 'reactstrap';

interface TableProps {
  heads: string[];
  children: React.ReactNode;
}

const Table = (props: TableProps) => {
  const { heads, children } = props;

  return (
    <ReactTable bordered striped>
      <thead>
        <tr>
          {heads.map((head) => (
            <th key={head}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </ReactTable>
  );
};

export default Table;
