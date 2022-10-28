## BAD

```typescript
const processTransactions = (transactions) => {
  if (isTransactionsValid(transactions)) {
    console.log("No transactions provided");
    return;
  }

  for (const transaction of transactions) {
    if (transaction.status !== "OPEN") {
      fs.write();
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

```typescript
const processTransaction = (transaction) => {
  validateTransaction(transaction);

  if (isPayment(transaction)) {
    processPayment(transaction);
  } else if (isRefund(transaction)) {
    processRefund(transaction);
  }
};
```

```typescript
const processPayment = (transaction) => {
  if (isCrypto(transaction)) {
    processCryptoPayment(transaction);
  } else if (isPaypal(transaction)) {
    processPaypalPayment(transaction);
  } else if (isVisa(transaction)) {
    processVisaPayment(transaction);
  }
};
```

```typescript
const processRefund = (transaction) => {
  if (isCrypto(transaction)) {
    processCryptoRefund(transaction);
  } else if (isPaypal(transaction)) {
    processPaypalRefund(transaction);
  } else if (isVisa(transaction)) {
    processVisaRefund(transaction);
  }
};
```

```typescript
const isPayment = (transaction) => {
  return transaction.type === "PAYMENT";
};

const isRefund = (transaction) => {
  return transaction.type === "REFUND";
};

const isCrypto = (transaction) => {
  return transaction.method === "CRYPTO";
};

const isPaypal = (transaction) => {
  return transaction.method === "PAYPAL";
};

const isVisa = (transaction) => {
  return transaction.method === "VISA";
};
```
