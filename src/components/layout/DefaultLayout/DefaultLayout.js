import Header from '~/components/layout/components/Header/index';
import RefBar from '~/components/layout/components/RefBar/index';
import ChipBar from '../components/ChipBar';
import Listvideo from '../components/Listvideo';

function DefaultLayout() {
  return (
    <>
      {/* header */}
      <Header />
      {/* ref bar */}
      <RefBar />

      {/* Chip bar */}
      <ChipBar />
      {/* istVideo */}
      <Listvideo />
    </>
  );
}

export default DefaultLayout;
