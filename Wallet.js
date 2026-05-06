// Royal Casino Blue - Wallet & Withdrawal Protection
const checkWithdrawalLimit = (balance, totalDeposit) => {
    if (totalDeposit < 100) {
        return {
            allowed: false,
            message: "Withdrawal Locked! Minimum 100rs deposit required to activate account."
        };
    }
    
    if (balance < 500) {
        return {
            allowed: false,
            message: "Minimum withdrawal amount is 300rs."
        };
    }

    return { allowed: true, message: "Request Sent to Admin." };
};
