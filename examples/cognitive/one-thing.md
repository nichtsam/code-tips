## BAD

```typescript
const processTransactions = (transactions) => {
  if (!transactions || transactions.length === 0) {
    console.log("No transactions provided");
    return;
  }

  for (const transaction of transactions) {
    if (transaction.status !== "OPEN") {
      return;
    }

    if (transaction.type === "PAYMENT") {
      if (transaction.method === "CRYPTO") {
        processCryptoPayment(transaction);
      }
      if (transaction.method === "PAYPAL") {
        processPaypalPayment(transaction);
      }
      if (transaction.method === "VISA") {
        processVisaPayment(transaction);
      }
    } else if (transaction.type === "REFUND") {
      if (transaction.method === "CRYPTO") {
        processCryptoRefund(transaction);
      }
      if (transaction.method === "PAYPAL") {
        processPaypalRefund(transaction);
      }
      if (transaction.method === "VISA") {
        processVisaRefund(transaction);
      }
    }
  }
};
```

## GOOD

```typescript
const processTransactions = (transactions) => {
  validateTransactions(transactions);

  for (const transaction of transactions) {
    processTransaction(transaction);
  }
};
```
