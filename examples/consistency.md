## BAD

```typescript
const isA = type === "A";

const handleSuccess = (result) => {};

if (isA) {
  doSomething(handleSuccess, (error) => {});
} else if (type === "B") {
  // ...
}
```

## GOOD

```typescript
const isA = type === "A";
const isB = type === "B";

const handleSuccess = (result) => {};
const handleError = (error) => {};

if (isA) {
  doSomething(handleSuccess, handleError);
} else if (isB) {
  // ...
}
```
