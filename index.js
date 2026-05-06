// Royal Casino Blue - App Entry Point
import React, { useState } from 'react';
import LoadingScreen from './LoadingScreen';
import Dashboard from './App';
import DragonTiger from './DragonTiger';
import AdminPanel from './AdminPanel';

const MainApp = () => {
  const [screen, setScreen] = useState('loading'); // شروع میں لوڈنگ اسکرین

  // اسکرین تبدیل کرنے کا لاجک
  const handleLoadingFinished = () => {
    setScreen('dashboard');
  };

  return (
    <>
      {screen === 'loading' && <LoadingScreen onFinished={handleLoadingFinished} />}
      {screen === 'dashboard' && <Dashboard onGameSelect={() => setScreen('dragontiger')} />}
      {screen === 'dragontiger' && <DragonTiger onBack={() => setScreen('dashboard')} />}
      
      {/* خفیہ ایڈمن پینل تک رسائی (صرف ڈویلپر کے لیے) */}
      {/* آپ اسے کسی خاص بٹن یا کوڈ سے لنک کر سکتے ہیں */}
    </>
  );
};

export default MainApp;
