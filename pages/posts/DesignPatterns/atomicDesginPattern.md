---
title: Modern web development through Atomic Design Pattern
date: 2022/12/12
description: Modern web development through Atomic Design Pattern
tag: Atomic Design Pattern
author: You
---

### What is Atomic Design?
Atomic Design is a method for creating user interfaces (UI) that is based on the idea of building UI components in a hierarchical manner, starting with the smallest, most atomic (indivisible) components and working up to larger, more complex ones. It gets its name from its relation to the laws of chemistry, using atoms and molecules to make up an organism. Think back to those high school chemistry days, learning that everything in the universe is made up of tiny atoms, all working together to create the reality we live in. Atomic Design works the same way. For example, small UI elements like buttons, iconography, typography are considered the atoms, while the entire page is the living organism.

To organize your components using the Atomic Design pattern, we would typically follow these steps:

**Atoms**: Find the "atoms"—the smallest, most autonomous parts of your user interface. These could include text fields, buttons, form inputs, and hooks that carry out common tasks. 

**Molecules**: group related atoms to create molecules, which are components that perform a specific task or function. For example, you might have a molecule that represents a search form, with a button and a form input.

**Organisms**: Combine molecules to create larger, more complex components known as organisms. These could represent entire sections of a page, such as a header, a footer, or a main content area. 

**Templates**:  arrangements of organisms that form the structure of a page.

**Pages**: are complete layouts that use templates and include all of the necessary content.


By following this process, we can effectively organize our components into a hierarchy that reflects the atomic design pattern. This can help make your code more modular and reusable and can make it easier to develop and maintain applications.


### Example of a simple to-do application using the Atomic Design pattern in

![Drag Racing](carbon-20221216-021149.jpg)

This example defines four levels of the Atomic Design hierarchy: Atoms, Molecules, Organisms, and Templates. Atoms are the basic building blocks of the application, such as an input field or button. Molecules are composed of atoms and represent a slightly more complex UI element, such as a form that includes an input field and a button. Organisms are composed of molecules and atoms, and represent a more complex UI element such as a list of to-do items. Finally, the template is the highest level of the hierarchy and represents the overall layout of the application.

### Folder structure for atomic pattern

```
    Components 
    ├── atoms
    │   ├── Input.tsx
    │   ├── button.tsx
    │   └── useFetch.tsx // custom hooks 
    ├── molecules
    │   ├── Todo.tsx
    │   └── Form.tsx
    ├── organisms
    │   ├── TodoList.tsx
    └── pages
        ├── TodoApp.js
```