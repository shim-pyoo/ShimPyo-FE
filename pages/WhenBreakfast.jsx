import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import ToolBar from '../entities/WhenBreakfast/ui/Toolbar';
import BreakfastText from '../entities/WhenBreakfast/ui/BreakfastText';
import BreakfastTimePicker from '../entities/WhenBreakfast/ui/BreakfastTimePicker';
import BreakfastNextButton from '../entities/WhenBreakfast/ui/BreakfastNextButton';
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity } from 'react-native';

export default function WhenBreakfast({route}) {
  const {mealTiming, intakeTiming} = route.params;
  const [isComplete, setIsComplete] = useState(false);
  const [imageToggle, setImageToggle] = useState(false); // 이미지 상태 관리
  const [breakfastTime, setBreakfastTime] = useState();
  const navigation = useNavigation();

  const handleButtonClick = () => {
    if (isComplete) {
      navigation.navigate('WhenLunch',{mealTiming, intakeTiming, breakfastTime}); // WhenLunch 페이지로 이동
    } else {
      alert("시간을 먼저 설정해주세요.");
    }
  };

  const handleImagePress = () => {
    setImageToggle(prevState => !prevState); // 이미지 상태 토글
  };

  return (
    <MainLayout>
      <ToolBar />
      <BreakfastText />
      <BreakfastTimePicker setIsTimeSettingComplete={setIsComplete} setBreakfastTime={setBreakfastTime} />
      
      {/* 이미지가 있는 부분 */}
      <TouchableOpacity onPress={handleImagePress} activeOpacity={1}>
        <ImageWrapper source={imageToggle ? require('../assets/images/Checked.png') : require('../assets/images/NoCheck.png')} />
      </TouchableOpacity>
      
      <ButtonWrapper>
        <BreakfastNextButton onPress={handleButtonClick} isComplete={isComplete} />
      </ButtonWrapper>
    </MainLayout>
  );ㅌ
}

const MainLayout = styled.View`

  background-color: #f7f7fb;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  bottom: 53px;
  left: 0;
  right: 0;
  align-items: center;
`;

const ImageWrapper = styled(Image)`
  width: 110px;
  height: 22px;
  margin-top:40px;
`;
