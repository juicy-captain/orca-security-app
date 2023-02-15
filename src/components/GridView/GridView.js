import { IpInfo } from 'components/IpInfo/IpInfo';
import { ScanSource } from 'components/ScanSource/ScanSourсe';
import PropTypes from 'prop-types';
import {
  Filename,
  FileSize,
  GridInfoBig,
  GridInfoKey,
  GridInfoLine,
  GridInfoSmall,
  GridInfoValue,
  GridItem,
  GridItems,
  MoreInfoButton,
  RiskIcon,
} from './GridView.styles';

export const GridView = ({ data, openModal }) => {
  return (
    <GridItems>
      {data.map((el, i) => (
        <GridItem key={`item_${i}`}>
          <GridInfoSmall>
            <GridInfoLine>
              <GridInfoKey>Risk level:</GridInfoKey>
              <GridInfoValue>
                <RiskIcon width={8} height={8} level={el.riskLevelIcon} />
                {el.riskLevel}
              </GridInfoValue>
            </GridInfoLine>
            <GridInfoLine>
              <GridInfoKey>Name:</GridInfoKey>
              <GridInfoValue>{el.name}</GridInfoValue>
            </GridInfoLine>
            <GridInfoLine file>
              <GridInfoKey>File name:</GridInfoKey>
              <GridInfoValue>
                <Filename>{el.fileName}</Filename>
                <FileSize> {el.fileSize}</FileSize>
              </GridInfoValue>
            </GridInfoLine>
          </GridInfoSmall>
          <GridInfoBig>
            <GridInfoLine>
              <GridInfoKey>IP Address v4:</GridInfoKey>
              <GridInfoValue>
                <IpInfo ip={el.ipv4} width={10} height={12} />
              </GridInfoValue>
            </GridInfoLine>
            <GridInfoLine>
              <GridInfoKey>IP Address v6:</GridInfoKey>
              <GridInfoValue>
                <IpInfo ip={el.ipv6} width={10} height={12} />
              </GridInfoValue>
            </GridInfoLine>
            <GridInfoLine scan>
              <GridInfoKey>Scan source:</GridInfoKey>
              <GridInfoValue>
                <ScanSource link={el.scanSource} />
              </GridInfoValue>
            </GridInfoLine>
          </GridInfoBig>
          <MoreInfoButton onClick={openModal}>Show additional info</MoreInfoButton>
        </GridItem>
      ))}
    </GridItems>
  );
};

GridView.propTypes = {
  openModal: PropTypes.func,
  data: PropTypes.array,
};
