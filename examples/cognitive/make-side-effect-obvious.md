## BAD

```typescript
const user = { name: "goodman", age: 20 };
createId(user); // user : {name: 'goodman', age: 20, id: 'goodman20'}
```

## GOOD

```typescript
const user = { name: "goodman", age: 20 };
addId(user); // user : {name: 'goodman', age: 20, id: 'goodman20'}
```
