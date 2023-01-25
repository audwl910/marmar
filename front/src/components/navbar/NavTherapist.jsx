import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import ClassDropDown from './ClassDropDown';
import MyDropDown from './MyDropDown';

export default function NavTherapist() {
  const [temp, setTemp] = useState(false);
  const onClass = () => {
    console.log(temp);
    setTemp(!temp);
  };
  return (
    <S.Box>
      <Link to="/">마르마르 소개</Link>
      <ClassDropDown />
      <S.Class
        type="button"
        onClick={onClass}
        className={`${temp ? 'bg-yellow-300' : 'bg-slate-300'}`}
      >
        방생성
      </S.Class>
      <MyDropDown />
    </S.Box>
  );
}

const S = {
  Box: styled.div`
    ${tw`flex justify-around items-center font-cafe24 space-x-6`}
  `,
  Class: styled.button`
    ${tw`p-2 rounded-xl`}
  `,
};
