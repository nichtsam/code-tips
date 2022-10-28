## Examples

```typescript
user.save(); // excellent

console.log("something"); // great

new Point(10, 20); // good

calc(10, 20, "add"); // not ideal

new Square(10, 10, 20, 20); // difficult to understand
```

## IMPROVING

Lots of ways to improve.

```typescript
calc('add',{
    first: 10,
    second: 20,
})

calc({
    method: 'add'
    first: 10,
    second: 20,
})

new Square({
    x1: 10,
    y1: 10,
    x2: 20,
    y2: 20,
});

const a = new Point(10, 10);
const b = new Point(20, 20);
new Square(a,b);
```

## REST PARAMETER

all is one:

```typescript
sum(10, 20, 30, 40, 50);
```

second one is for first one:

```rust
println!("{} is a {} usage of {}", "This", "Acceptable", "Rest Parameter");
```
