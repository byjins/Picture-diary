import { useState } from 'react';
import DiaryList from '../components/DiaryList';
import IndexHeader from '../Layout/IndexHeader';

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
