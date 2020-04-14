## Creating Middleware in Node
---
As you may well know, middleware provide additional functionality to node applications. They provide your node application with capabilities that either do not ship natively with node or are too time consuming for one person to write from scratch. That being said, situations do arise when you may find it nessesary to create your own middleware. There are several reasons to why this may be deemed fit:
    
    - When there is no existing node module in the npm registry to handle you required use case.
    - When the existing node modules no longer supported, outdated or pose a security risk.
    - out of pure curiosity.

If you fall in any of the above cases, then you are in good company as this tutorial is aimed at providing basic knowledge that one can leavelage to creating their own node modules.

#### Basics
What is module?
What are javascript modules?
Examples of javascript modules
is testing nessesary?
Publishing your node module
documenting your module
is marketing nessesary
maintaining your module
updating your module
finding colaborators
what defines a good module
things to consider before writing a module
Popular Backend node modules
Popular frontend node modules
### Additions
Differences between python and node modules

<code style="color:red;"> perform sanity checks on this before continuing </code>Middleware follow a waterfall approach in execution. This simply means that the middleware at the top execute first then hand over to the preseeding modules