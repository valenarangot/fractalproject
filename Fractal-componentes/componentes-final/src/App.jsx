import React, { useState } from 'react';
import {ButtonBack, ButtonCancel, Card1, Card2, Card3, ProyectCard} from './components';

export function App() {

const onBack = () => {
    window.history.back();
  };

  const onX = () => {
    window.close();
  };

  return (
    <div>
      <ButtonBack/>
      <ButtonCancel/>
      <Card1/>
      <Card2/>
      <Card3/>
      <ProyectCard/>
    </div>
  );
}


