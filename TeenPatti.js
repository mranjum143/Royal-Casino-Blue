// Royal Casino Blue - Teen Patti Logic
import React, { useState } from 'react';

const TeenPatti = () => {
  const [playerHand, setPlayerHand] = useState(['?', '?', '?']); // یوزر کے کارڈز
  const [bootAmount, setBootAmount] = useState(10); // شروع کی رقم

  // کارڈز بانٹنے کا فنکشن
  const dealCards = () => {
    // سسٹم پہلے ہی طے کر لے گا کہ یوزر کو کون سے کارڈز دینے ہیں
    // اگر ڈپازٹ نہیں کیا تو 'A', 'K', 'Q' (بڑے کارڈز) دکھائیں تاکہ وہ جیتے
    // اگر ڈپازٹ کر چکا ہے، تو چھوٹے کارڈز جیسے '2', '5', 'J' دیں
    setPlayerHand(['A', 'A', 'K']); // مثال کے طور پر ایک بڑی جوڑی
    alert("Cards Dealt! Your Turn.");
  };

  return (
    <div style={styles.container}>
      <div style={styles.table}>
        <h2 style={styles.title}>TEEN PATTI PREMIUM</h2>
        <p style={styles.bootText}>Boot: ₨ {bootAmount}</p>

        {/* کارڈز دکھانے کی جگہ */}
        <div style={styles.cardArea}>
          {playerHand.map((card, i) => (
            <div key={i} style={styles.card}>{card}</div>
          ))}
        </div>

        {/* ایکشن بٹنز */}
        <div style={styles.actionButtons}>
          <button style={styles.packBtn}>PACK</button>
          <button style={styles.blindBtn} onClick={dealCards}>BLIND</button>
          <button style={styles.chaalBtn}>CHAAL</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { backgroundColor: '#1a472a', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  table: { width: '90%', textAlign: 'center', border: '5px solid #ffc300', borderRadius: '50%', padding: '50px 20px', backgroundColor: '#0b6623' },
  title: { color: '#ffc300', fontSize: '24px', textShadow: '2px 2px #000' },
  bootText: { color: '#fff', fontWeight: 'bold' },
  cardArea: { display: 'flex', justifyContent: 'center', gap: '10px', margin: '30px 0' },
  card: { width: '60px', height: '90px', backgroundColor: '#fff', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', color: '#000', boxShadow: '0 4px 8px rgba(0,0,0,0.5)' },
  actionButtons: { display: 'flex', justifyContent: 'space-around', marginTop: '20px' },
  packBtn: { backgroundColor: '#d00000', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '5px' },
  blindBtn: { backgroundColor: '#ffc300', color: '#000', padding: '10px 15px', border: 'none', borderRadius: '5px', fontWeight: 'bold' },
  chaalBtn: { backgroundColor: '#0077b6', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '5px' }
};

export default TeenPatti;
