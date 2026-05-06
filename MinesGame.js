// Royal Casino Blue - Mines Game with Controlled Logic
import React, { useState } from 'react';

const MinesGame = () => {
  const [grid, setGrid] = useState(Array(25).fill(null)); // 25 ڈبوں کا جال
  const [gameOver, setGameOver] = useState(false);

  const handleBoxClick = (index) => {
    if (gameOver) return;

    // لوزنگ لاجک: اگر یوزر نے ڈپازٹ نہیں کیا تو اسے 3-4 ہیرے دکھائیں
    // اگر ڈپازٹ شدہ یوزر بڑی رقم لگا دے، تو پہلے یا دوسرے کلک پر ہی بم (Bomb) نکال دیں
    let newGrid = [...grid];
    
    // یہاں ہم اپنے GameEngine کا فیصلہ استعمال کریں گے
    const isBomb = Math.random() < 0.4; // 40% چانس کہ بم نکلے

    if (isBomb) {
      newGrid[index] = '💣';
      setGameOver(true);
      alert("BOOM! You Lost.");
    } else {
      newGrid[index] = '💎';
    }
    setGrid(newGrid);
  };

  return (
    <div style={styles.minesContainer}>
      <h2 style={{color: '#ffc300'}}>MINES - Lucky Hit</h2>
      <div style={styles.grid}>
        {grid.map((cell, i) => (
          <div key={i} style={styles.box} onClick={() => handleBoxClick(i)}>
            {cell}
          </div>
        ))}
      </div>
      <button style={styles.cashoutBtn} onClick={() => alert("Cashout Successful!")}>
        CASHOUT
      </button>
    </div>
  );
};

const styles = {
  minesContainer: { backgroundColor: '#001d3d', height: '100vh', padding: '20px', textAlign: 'center' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', marginTop: '30px' },
  box: { backgroundColor: '#003566', height: '60px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', cursor: 'pointer', border: '1px solid #00b4d8' },
  cashoutBtn: { marginTop: '40px', backgroundColor: '#ffc300', padding: '15px 30px', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '18px' }
};

export default MinesGame;
        
