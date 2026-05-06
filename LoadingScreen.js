// Royal Casino Blue - Professional Loading Screen
import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // لوڈنگ بار کو آہستہ آہستہ آگے بڑھانے کا لاجک
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinished, 500); // 100% ہونے کے بعد ڈیش بورڈ پر لے جائے گا
          return 100;
        }
        return prev + 2; // لوڈنگ کی رفتار
      });
    }, 50); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      {/* ایپ کا مین لوگو */}
      <div style={styles.logoContainer}>
        <div style={styles.crownIcon}>👑</div>
        <h1 style={styles.logoTitle}>ROYAL CASINO</h1>
        <h2 style={styles.logoSubtitle}>BLUE</h2>
      </div>

      {/* لوڈنگ بار اور ٹیکسٹ */}
      <div style={styles.loadingArea}>
        <p style={styles.loadingText}>Checking Security Assets... {progress}%</p>
        <div style={styles.progressContainer}>
          <div style={{ ...styles.progressBar, width: `${progress}%` }}></div>
        </div>
      </div>

      <p style={styles.versionText}>Version 1.0.4 Build (Official)</p>
    </div>
  );
};

const styles = {
  container: { backgroundColor: '#000814', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Arial' },
  logoContainer: { textAlign: 'center', marginBottom: '50px' },
  crownIcon: { fontSize: '60px', marginBottom: '10px' },
  logoTitle: { color: '#ffc300', fontSize: '35px', margin: 0, letterSpacing: '2px' },
  logoSubtitle: { color: '#00b4d8', fontSize: '25px', margin: 0 },
  loadingArea: { width: '80%', textAlign: 'center' },
  loadingText: { color: '#fff', fontSize: '14px', marginBottom: '10px', fontStyle: 'italic' },
  progressContainer: { width: '100%', height: '10px', backgroundColor: '#003566', borderRadius: '5px', overflow: 'hidden', border: '1px solid #ffc300' },
  progressBar: { height: '100%', backgroundColor: '#ffc300', boxShadow: '0 0 10px #ffc300' },
  versionText: { position: 'absolute', bottom: '20px', color: '#333', fontSize: '12px' }
};

export default LoadingScreen;
