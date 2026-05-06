// Royal Casino Blue - Main Dashboard & Bonus Logic
import React, { useState } from 'react';

const App = () => {
  // آٹو بونس سیٹ اپ: 70 روپے [User Summary]
  const [balance, setBalance] = useState(70.00);

  return (
    <div style={styles.body}>
      {/* ہیڈر جہاں بیلنس شو ہوگا */}
      <div style={styles.header}>
        <h2 style={styles.logoText}>Royal Casino Blue</h2>
        <div style={styles.balanceBox}>
          <span style={styles.coinIcon}>💰</span>
          <span style={styles.balanceAmount}>₨ {balance.toFixed(2)}</span>
        </div>
      </div>

      {/* گیمز کی لسٹ (15 گیمز کے لیے جگہ) */}
      <div style={styles.gameGrid}>
        <div style={styles.gameCard}>Dragon vs Tiger</div>
        <div style={styles.gameCard}>Teen Patti</div>
        <div style={styles.gameCard}>Mines</div>
        <div style={styles.gameCard}>Roulette</div>
        <div style={styles.gameCard}>7 Up Down</div>
        {/* باقی گیمز کے ڈبے یہاں بنیں گے */}
      </div>

      {/* نیچے والی پٹی (Bottom Menu) */}
      <div style={styles.footer}>
        <button style={styles.menuBtn}>Deposit</button>
        <button style={styles.menuBtn}>Withdraw</button>
        <button style={styles.menuBtn}>Profile</button>
      </div>
    </div>
  );
};

// گرافکس (CSS) جو ایپ کو "Blue & Gold" لک دیں گے
const styles = {
  body: { backgroundColor: '#001d3d', color: '#fff', height: '100vh', fontFamily: 'Arial' },
  header: { display: 'flex', justifyContent: 'space-between', padding: '15px', backgroundColor: '#000814', borderBottom: '2px solid #ffc300' },
  logoText: { color: '#ffc300', margin: 0 },
  balanceBox: { backgroundColor: '#003566', padding: '5px 15px', borderRadius: '20px', border: '1px solid #ffc300' },
  balanceAmount: { fontWeight: 'bold', color: '#ffc300' },
  gameGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', padding: '20px' },
  gameCard: { height: '100px', backgroundColor: '#003566', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', border: '1px solid #0056b3' },
  footer: { position: 'fixed', bottom: 0, width: '100%', display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: '#000814' },
  menuBtn: { backgroundColor: '#ffc300', border: 'none', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold' }
};

export default App;
