// Royal Casino Blue - Dragon vs Tiger Table Logic
import React, { useState } from 'react';

const DragonTiger = () => {
  const [status, setStatus] = useState("Place Your Bets!"); // گیم کی حالت
  const [lastWinners, setLastWinners] = useState(['D', 'T', 'D', 'D', 'T']); // پچھلے رزلٹ (Patterns)

  return (
    <div style={styles.tableContainer}>
      {/* پچھلے رزلٹ کی پٹی (History Patterns) */}
      <div style={styles.historyBar}>
        {lastWinners.map((win, i) => (
          <div key={i} style={win === 'D' ? styles.dotD : styles.dotT}>{win}</div>
        ))}
      </div>

      {/* اصلی ٹیبل جہاں ڈریگن اور ٹائیگر کی تصاویر ہوں گی */}
      <div style={styles.battleField}>
        <div style={styles.sideBox}>
          <h1 style={{color: 'red'}}>DRAGON</h1>
          <div style={styles.cardSlot}>?</div> {/* کارڈ یہاں ظاہر ہوگا */}
        </div>

        <div style={styles.vsText}>VS</div>

        <div style={styles.sideBox}>
          <h1 style={{color: 'yellow'}}>TIGER</h1>
          <div style={styles.cardSlot}>?</div> {/* کارڈ یہاں ظاہر ہوگا */}
        </div>
      </div>

      {/* بیٹ لگانے والے بٹنز */}
      <div style={styles.betArea}>
        <button style={styles.betBtnD}>Bet Dragon</button>
        <button style={styles.betBtnTie}>TIE</button>
        <button style={styles.betBtnT}>Bet Tiger</button>
      </div>

      <div style={styles.statusText}>{status}</div>
    </div>
  );
};

// ٹیبل کے گرافکس (CSS)
const styles = {
  tableContainer: { backgroundColor: '#004b23', height: '100vh', padding: '10px', textAlign: 'center' }, // سبز ٹیبل لک
  historyBar: { display: 'flex', justifyContent: 'center', gap: '5px', marginBottom: '20px' },
  dotD: { backgroundColor: 'red', color: 'white', borderRadius: '50%', width: '25px', height: '25px', fontSize: '12px', lineHeight: '25px' },
  dotT: { backgroundColor: 'yellow', color: 'black', borderRadius: '50%', width: '25px', height: '25px', fontSize: '12px', lineHeight: '25px' },
  battleField: { display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '50px' },
  cardSlot: { width: '80px', height: '120px', backgroundColor: 'white', borderRadius: '10px', border: '2px dashed #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', color: '#000' },
  vsText: { fontSize: '40px', fontWeight: 'bold', color: 'white', fontStyle: 'italic' },
  betArea: { display: 'flex', justifyContent: 'space-around', marginTop: '100px' },
  betBtnD: { backgroundColor: 'red', color: 'white', padding: '15px', borderRadius: '10px', border: 'none', fontWeight: 'bold' },
  betBtnT: { backgroundColor: 'yellow', color: 'black', padding: '15px', borderRadius: '10px', border: 'none', fontWeight: 'bold' },
  betBtnTie: { backgroundColor: 'green', color: 'white', padding: '15px', borderRadius: '10px', border: 'none', fontWeight: 'bold' },
  statusText: { marginTop: '30px', color: '#ffc300', fontSize: '20px', fontWeight: 'bold' }
};

export default DragonTiger;
