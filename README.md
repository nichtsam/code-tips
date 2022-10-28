# Clean Code
> My humble thoughts.

## Heads up

This does not always apply.  
Keep an open mind.  
Care what you wrote.  
Use common sense.

Clean Code is about writing readable code for humans,  
if it reads excellent, you don’t need to force rules upon it.

## What is Clean Code not?

- This is not a “Once and for All Perfect Solution”.
- This is not about Extensibility.

## What is Clean Code?
> Clean code is simple and direct.  
> Clean code reads like well-written prose.  
> Clean code never obscures the designer’s intent but rather is full of crisp abstractions and straightforward lines of control.  
>
> \- Grady Booch

It’s not just code that works, it’s code that is easy to understand.  
Clean code should be intuitive instructions, not encrypted mystery.  

It should be
- **Readable and meaningful**
- **Easy to write and to maintain**
- **Intuitive**

And it should 
- **Reduce cognitive load**

## Name things nicely

> [examples](./examples/cognitive/naming.md)

### Variables & Constants : Noun
This is a "thing", so name it as a thing.

### Booleans : Question | Noun

Booleans answer questions, so name it as a question.  
Booleans can also represent if a feature is turned on or not, so name it after the feature.

### Methods & Functions :  Imperative | Question | Noun 
> I haven't really thought it through yet.

Methods do things, a method is an operation, you're telling the machine to do something,  
so name it as an imperative sentence.  
If Methods returns a Boolean, you should name it after the question that boolean answers.  
Accessor functions(getter/setter) work internally, and to the interface user it's just like a property, so name it as a noun.

### Classes : Noun

This is an abstraction of a "thing", so name it as a thing.

## Make it easy to read

### Format your code

> [examples](./examples/formatting.md)

The least you can do is make it look nice, don't be rude.

1. Use blank line to separate parts that do their individual things,
2. Break line if it's getting too long and out of screen,
3. Put related stuff close to each other,
4. Try to maintain a meaningful stream of thoughts top to bottom.

### What about Comments?

> [examples](./examples/commenting.md)

Avoid them, they usually bad.  
Consider comments as the last resort, the unfortunate necessity.

Don't get me wrong, good comments are great, but bad comments are real bad.

Comments often get ignored.  
Comments lie,  
if it didn't get update with the code, it transfer into misleading gibberish.

You should always fight to write self-explaining code,  
comments are results of failing to do that.

### Stay consistent
> should this be here ?

> [examples](./examples/consistency.md)

Don't do this here and do that there.  
Try to have a principle, use the same pattern for the same thing.

### Stand on the giants

If your programming language has style guides, use it.  
If your programming language has formatter, use it.  
If your team has conventions, follow it.

If there is any more precise consensus, they should be prioritized before this general guide.

## Reduce cognitive burden

### Counts of parameters

> [examples](./examples/cognitive/parameters)

Remembering parameters is a burden.  
You will need to remember the meaning of each and the order of them.

None is awesome, though not always achievable.  
One is great, very good possible option.  
Two is ok, think twice.  
Three is not ideal, a bit of challenging to call.  
More is intimidating.

A special case is the Rest Parameters,  
I think it only make sense to use them in two cases,
1. it's the only parameter, 
2. the second parameter that complements the first one.

If you need more than three, there probably is a way to group certain things together and reduce the load.

### Boolean Flag

> [examples](./examples/cognitive/boolean-flag.md)

Boolean Flag is a kind of parameter you should try to avoid.  
It’s not easy to grasp, it hides context, and it limits you.  
Seeing a boolean in arguments does not give you any clue of what question it's answering.

There are exceptions,  
it’s fine to use boolean flag if it’s the only parameter,  
or if it’s forced to be explicit set with property name.

### One thing at a function

> [examples](./examples/cognitive/one-thing.md)

Function should do one thing and one thing only.

So what is One Thing?

A Function is doing one thing when everything inside it directly contributes to it.  
A Function is doing one thing when you cannot meaningfully extract another function from it.

### Levels of Abstraction

> [examples](./examples/cognitive/levels-of-abstraction.md)

There is a fundamental rule for a function,  
that every line of a function should be at the same level of abstraction,  
and that level should be one level below the function's name.

This helps achieve [One thing at a function](#one-thing-at-a-function).

### Don't repeat yourself

> [examples](./examples/cognitive/dry.md) Haven't done this.

Write DRY code. Reusability rocks.  
If you find yourself repeating codes that can be meaningfully extract, please do so.

### Make Side Effects Obvious

> [examples](./examples/cognitive/make-side-effect-obvious.md)

It's dangerous to have implicit side effects.  
It adds complicity, hides connection, and makes debugging difficult.

Avoid them if you can,  
if you cannot, make it clear to everyone that there is one.

### Guards

> [examples](./examples/cognitive/guards.md)

Fail fast, deal with failure upfront.  
Thereafter, we can simply drop the concerns.

Guarding failures beforehand is better than running code only if conditions are met.  
Remembering context is hard, failing fast strips concerns away.

---

_Here ends the jourey, I hope you had fun._
