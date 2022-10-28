## BAD

```typescript
const log = (message, isError) => {
  if (isError) {
    console.error(message);
  } else {
    console.log(message);
  }
};

log("Something real bad just happened", true);
```

## OK

```typescript
const processPayment = ({ payment, isTest }) => {};

const setIsOpen = (boolean) => {};
```

## IMPROVEMENT FOR BAD

```typescript
const log = (message) => {
  console.log(message);
};

const logError = (message) => {
  console.error(message);
};

log("Hi there");
logError("Something real bad just happened");
```
