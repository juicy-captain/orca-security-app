import { Button } from 'components/Button/Button';
import { DownloadActions } from 'components/DownloadActions/DownloadActions';
import { IpInfo } from 'components/IpInfo/IpInfo';
import { ScanSource } from 'components/ScanSource/ScanSourсe';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  ButtonsWrapper,
  MoreInfoContent,
  MoreInfoText,
  MoreInfoTitle,
  MoreInfoWrapper,
  RiskIcon,
  TableCell,
  TableRow,
} from './TableRowSpoiler.styles';

export const TableRowSpoiler = ({
  riskIcon,
  name,
  fileName,
  fileSize,
  ipv4,
  ipv6,
  scanSource,
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <TableRow onClick={() => setIsActive(!isActive)}>
        <TableCell risk>
          <RiskIcon level={riskIcon} width={12} height={12} />
        </TableCell>
        <TableCell name>{name}</TableCell>
        <TableCell file>
          {fileName} <span>{fileSize}</span>
        </TableCell>
        <TableCell ipv4>
          <IpInfo ip={ipv4} width={10} height={12} />
        </TableCell>
        <TableCell ipv6>
          <IpInfo ip={ipv6} width={10} height={12} />
        </TableCell>
        <TableCell scan>
          <ScanSource link={scanSource} />
        </TableCell>
      </TableRow>

      <MoreInfoWrapper>
        <CSSTransition in={isActive} timeout={400} classNames="spoiler">
          <MoreInfoContent>
            <MoreInfoTitle>Additional info</MoreInfoTitle>
            <MoreInfoText>
              data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAANBSURBVDjLXZNrSFNhGMcPQQQRfYv60meJoiCtROuDZRcEA6MP3ckwS0tlZVlptnXRqavMaqZ5Ka1Jq1bOmWiXs466mqZzLs0103CmLp27HOdlaf+es2xFL/xe/jzv8/+/vA/nMACYsWpmDiEmjEQTMU+o/wvVFs+e64mAP3XGoWLmEtljzXv7vSMsXM37bHp1ZEPyK6+WsM+ifa+O4tyGuJHxzjQ79euJpb4AWwWT6tLv/zY1VI3hd9GOD8oQXtowglvNNhS3DfoQ9DWuB23K1R6nSeLh205+J18LMZex3mPOu41p9qH6aIfuQciPvHd9eGQcgIL7CrmqA3mPO3DvdQ8Uhn6UvGXxSb11Ztz6eHro+TIzeQOYLwXMhq7C+ebGopWebLYHFfo+qNhedFtdGHHxGHaNwdznQnldN0rqe/GoUgajIniys3BhK3kDfINILq7KSXlqQmFDL5R0m7BGnU58/jaICdIC/E/gjqYbcq0F6UoO8aW6K74ZCNveghbtqScm3Kkxo5Nu9vz4Cd7jwe2SUtgoyD05iae1b8B9diJT2Q6hV/D4A3bmcnaRohVZD42wjXsxOjmDKTo4K5bggaoSKRckqNPpwQ5acEKuh9ArePwB2zNr7LFFeohLDejjvRQyA6vTjcuyqz4zZ2hHWtMJiOpjkfDmEGLL1BA8/
            </MoreInfoText>
            <ButtonsWrapper>
              <Button buttonType="primary" {...props}>
                Download
              </Button>
              <DownloadActions />
            </ButtonsWrapper>
          </MoreInfoContent>
        </CSSTransition>
      </MoreInfoWrapper>
    </div>
  );
};

TableRowSpoiler.propTypes = {
  riskIcon: PropTypes.string,
  name: PropTypes.string,
  fileName: PropTypes.string,
  fileSize: PropTypes.string,
  ipv4: PropTypes.string,
  ipv6: PropTypes.string,
  scanSource: PropTypes.string,
};
