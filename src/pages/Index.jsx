import { useState } from 'react';
import DiaryList from '../components/Dirays/DiaryList';
import IndexHeader from '../components/Layout/IndexHeader';

const Index = () => {
  const [pickDate, setPickDate] = useState('');
  return (
    <>
      <IndexHeader setPickDate={setPickDate} />
      <DiaryList indexDate={pickDate} />
    </>
  );
};

export default Index;
