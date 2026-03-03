
1 Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll:
Ans:
- getElementById(id): Returns a single element with the specified id.
- getElementsByClassName(className): Returns a HTMLCollection of all elements with the specified class name. 
- querySelector(selector): it returns the first element that matches the CSS selector given. It would be id, class, tag, or attributes
- querySelectorAll(selector): Returns a static NodeList of all elements that match the CSS selector.

2. How to create and insert a new element into the DOM:

Ans: const newElement = document.createElement('tagName');

3 What is Event Bubbling? And how does it work?

Ans:  Event bubbling is the way to find the target element from DOM. First it tiggers an element then it’s parent then it’s grandparent so on until finding the root.

4 What is Event Delegation in JavaScript? Why is it useful?

Ans: Event delegation is a technique where it attaching event listeners  to a common parent instead of many child elements.

- It’s simplify the codes
- It reduces the number of event listeners.
- It’s make code dynamic.

5. Difference between preventDefault() and stopPropagation() methods:

Ans:
- preventDefault() stops the default action of an element from happening.


- stopPropagation() stops the event from bubbling up to other elements. 

