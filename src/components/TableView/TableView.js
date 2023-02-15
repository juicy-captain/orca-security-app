import { TableRowSpoiler } from 'components/TableRowSpoiler/TableRowSpoiler';
import PropTypes from 'prop-types';
import { Table, TableHeadingCell, TableHeadingRow } from './TableView.styles';

export const TableView = ({ data }) => {
  return (
    <Table>
      <TableHeadingRow>
        <TableHeadingCell risk>&nbsp;</TableHeadingCell>
        <TableHeadingCell name>Name</TableHeadingCell>
        <TableHeadingCell file>File name</TableHeadingCell>
        <TableHeadingCell ipv4>IP Address v4</TableHeadingCell>
        <TableHeadingCell ipv6>IP Address v6</TableHeadingCell>
        <TableHeadingCell scan>Scan source</TableHeadingCell>
      </TableHeadingRow>

      {data.map((el, i) => (
        <TableRowSpoiler
          key={`row_${i}`}
          riskIcon={el.riskLevelIcon}
          name={el.name}
          fileName={el.fileName}
          fileSize={el.fileSize}
          ipv4={el.ipv4}
          ipv6={el.ipv6}
          scanSource={el.scanSource}
        />
      ))}
    </Table>
  );
};

Table.propTypes = {
  data: PropTypes.object,
};
