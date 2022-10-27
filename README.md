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

