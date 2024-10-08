import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getMedicineTimeLeft, getTimeLeft } from '../api/MainApi';
import SettingComponent from './SettingComponent';

export default function SettingComponentSection() {

  const [pill, setPill] = useState('로딩 중...');
  const [hospital, setHospital] = useState('로딩 중...');
  
  const loadLeftTime = () => {
    getTimeLeft().then((res) => setHospital(res)).catch(() => setHospital("병원 정보를 불러오는 중 오류가 발생했습니다."));
    getMedicineTimeLeft().then((res) => setPill(res)).catch(()=>setPill("end"))
  }

  useEffect(() => {
    loadLeftTime();
  }, [])

  return (
    <MainLayout>
      <SettingComponent type="pill" value={pill} />
      <SettingComponent type="hospital" value={hospital} />
    </MainLayout>
  )
}


const MainLayout = styled.View`
  width: 100%;
  height: 140px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
  bottom: 1%;
`;