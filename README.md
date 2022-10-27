# Clean Code
> My humble thoughts.

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

The least you can do is make it look nice, don't be rude.

1. Use blank line to separate parts that do their individual things,
2. Break line if it's getting too long and out of screen,
3. Put related stuff close to each other,
4. Try to maintain a meaningful stream of thoughts top to bottom.

### What about Comments?

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

Don't do this here and do that there.
Try to have a principle, use the same pattern for the same thing.

### Stand on the giants

If your programming language has style guides, use it.
If your programming language has formatter, use it.
If your team has conventions, follow it.

If there is any more precise consensus, they should be prioritized before this general guide.
