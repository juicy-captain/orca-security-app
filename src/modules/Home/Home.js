import { GridView } from 'components/GridView/GridView';
import { Header } from 'components/Header/Header';
import { Modal } from 'components/Modal/Modal';
import { TableView } from 'components/TableView/TableView';
import { useState } from 'react';

const data = [
  {
    riskLevel: 'High',
    riskLevelIcon: 'high',
    name: 'Luctus',
    fileName: 'Luctus.ppt',
    fileSize: '(2Mb)',
    ipv4: '38.21.46.43/5',
    ipv6: '2855:93c2:2469:6cde:643b:e139:6aae:6e00',
    scanSource: 'https://dropbox.com/nulla/dapibus.xml',
  },
  {
    riskLevel: 'Medium',
    riskLevelIcon: 'medium',
    name: 'Ante',
    fileName: 'Ante.tiff',
    fileSize: '(10Mb)',
    ipv4: '75.128.66.66/28',
    ipv6: 'efcd:8153:a72c:7e0e:4200:896d:74d:bac1',
    scanSource: 'https://ow.ly/curae.aspx',
  },
  {
    riskLevel: 'Medium',
    riskLevelIcon: 'medium',
    name: 'ElitProinInterdum',
    fileName: 'ElitProinInterdum.xls',
    fileSize: '(3Mb)',
    ipv4: '204.200.5.2/1',
    ipv6: 'a454:1732:7eeb:b137:a1d:9d52:813b:506e',
    scanSource: 'http://google.com/sit.aspx',
  },
  {
    riskLevel: 'Low',
    riskLevelIcon: 'low',
    name: 'Non',
    fileName: 'Non.ppt',
    fileSize: '(536Kb)',
    ipv4: '127.234.110.193/28',
    ipv6: 'efcd:8153:a72c:7e0e:4200:896d:74d:bac1',
    scanSource: 'http://hex.com/pede.json',
  },
];

const Home = () => {
  const [currentView, setView] = useState('table');
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSpoilerOpened, setSpoiler] = useState(false);
  return (
    <div>
      <Header currentView={currentView} setView={setView} />

      {currentView === 'table' ? (
        <TableView
          isSpoilerOpened={isSpoilerOpened}
          setSpoiler={() => setSpoiler(!isSpoilerOpened)}
          data={data}
        />
      ) : (
        <GridView data={data} openModal={() => setModalOpen(true)} />
      )}
      <Modal opened={isModalOpen} setModalAction={() => setModalOpen(!isModalOpen)} />
    </div>
  );
};

export default Home;
