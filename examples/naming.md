> It all comes down to context.

## Variables & Constants : Noun

What is stored:
An object containing user information {
name,
age,
email,
}

```typescript
// ! BAD

const u = {}; // WTF
const data = {}; // could be anything.

// ? OK

const userData = {}; // redundant, could make sense if it's some intermediate object.
const person = {}; // unspecific

// * GOOD

const user = {}; // clear and simple
const customer = {}; // even more clear
```

## Booleans : Question | Noun

What is stored: Can user can a can as a canner can can a can?

```typescript
// ! BAD

const c = false; // WTF
const value = false; // could be anything.

// ? OK

const can = false; // doesn't imply a boolean, could be the can.
const canCan = false; // could be a function, be context would probably give you clue.

// * GOOD

const canUserCan = false; // Ok I know this isn't the best example ever, but this would be better.
```

## Methods & Functions : Imperative | Question | Noun

What does the function do: format a date/time into string.

```typescript
// ! BAD

const process = () => {}; // duh.
const handle = () => {}; // what do function do?

// ? OK

const format = () => {}; // ok, but what?
const stringify = () => {}; // not 100% specific.

// * GOOD

const formatDateTime = () => {}; // I think this is fairly clear.

class DateTime {
  format: () => void;
}
const dateTime = new DateTime();
dateTime.format(); // Also good.
```

## Classes : Noun

What is stored: User

```typescript
// ! BAD
class Entity {}
class Thing {}

// ? OK

class UserObj {} // of course.
class AppUser {} // naturally.

// * GOOD

class User {} // clear and simple
class Admin {} // even more clear
```
