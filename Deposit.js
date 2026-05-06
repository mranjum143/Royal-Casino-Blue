// Royal Casino Blue - Automated JazzCash Redirect Logic
import React, { useState } from 'react';

const Deposit = () => {
  const [amount, setAmount] = useState(100);
  
  // آپ کی فراہم کردہ تفصیلات [User Summary]
  const adminDetails = {
    number: "03037264598",
    name: "Ahmad Nafees Anjum",
    method: "JazzCash"
  };

  const handlePayNow = () => {
    // جاز کیش ایپ کھولنے کا ڈیپ لنک
    const jazzCashURL = `intent://transfer?number=${adminDetails.number}&amount=${amount}#Intent;scheme=jazzcash;package=com.techlogix.mobilinkcustomer;end`;

    // یوزر کو میسج دکھانا اور ری ڈائریکٹ کرنا
    alert(`Redirecting to JazzCash... \nPay ₨ ${amount} to ${adminDetails.name}`);
    
    window.location.href = jazzCashURL;

    // نوٹ: اگر ایپ نہیں کھلتی تو یوزر مینوئلی نمبر کاپی کر سکے گا
    setTimeout(() => {
      console.log("If app didn't open, please pay manually to: " + adminDetails.number);
    }, 2000);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Fast Deposit (JazzCash)</h2>
      
      <div style={styles.amountBox}>
        <p>Select Amount:</p>
        <div style={styles.grid}>
          {[100, 500, 1000, 2000].map(val => (
            <button key={val} onClick={() => setAmount(val)} style={amount === val ? styles.activeBtn : styles.btn}>
              ₨ {val}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.accountCard}>
        <p style={styles.label}>Receiver Name:</p>
        <p style={styles.value}>{adminDetails.name}</p>
        <p style={styles.label}>Account Number:</p>
        <p style={styles.value}>{adminDetails.number}</p>
      </div>

      <button style={styles.payNowBtn} onClick={handlePayNow}>
        Pay ₨ {amount} Now
      </button>

      <p style={styles.secureNote}>🔒 Secure Payment via JazzCash</p>
    </div>
  );
};

const styles = {
  container: { backgroundColor: '#001d3d', height: '100vh', padding: '20px', color: '#fff', textAlign: 'center', fontFamily: 'Arial' },
  title: { color: '#ffc300', marginBottom: '20px' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' },
  btn: { padding: '15px', backgroundColor: '#003566', border: '1px solid #ffc300', color: '#fff', borderRadius: '8px' },
  activeBtn: { padding: '15px', backgroundColor: '#ffc300', color: '#000', fontWeight: 'bold', borderRadius: '8px', border: 'none' },
  accountCard: { marginTop: '30px', padding: '20px', backgroundColor: '#000814', borderRadius: '15px', border: '1px solid #333' },
  label: { color: '#aaa', fontSize: '12px', margin: 0 },
  value: { fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: '#ffc300' },
  payNowBtn: { marginTop: '40px', width: '100%', padding: '18px', backgroundColor: '#d00000', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '18px', fontWeight: 'bold' },
  secureNote: { marginTop: '15px', fontSize: '12px', color: '#888' }
};

export default Deposit;
