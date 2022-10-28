## BAD

```typescript
const processTransaction = (transaction) => {
  if (transaction.type === "PAYMENT") {
    if (transaction.status === "OPEN") {
      if (transaction.method === "CRYPTO") {
        processCryptoPayment(transaction);
      }
      if (transaction.method === "PAYPAL") {
        processPaypalPayment(transaction);
      }
      if (transaction.method === "VISA") {
        processVisaPayment(transaction);
      }
    }
  } else if (transaction.type === "REFUND") {
    if (transaction.status === "OPEN") {
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
const processTransaction = (transaction) => {
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
};
```
