---
title: Modern web development through Atomic Design Pattern
date: 2022/12/12
description: Modern web development through Atomic Design Pattern
tag: Atomic Design Pattern
author: Bharat Bhavnasi
---

# Modern web development through Atomic Design Pattern

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

```js 
import React from 'react';

// Atoms
const Checkbox = ({ checked, onChange }) => (
  <input type="checkbox" checked={checked} onChange={onChange} />
);

const TextInput = ({ value, onChange }) => (
  <input type="text" value={value} onChange={onChange} />
);

// Molecules
const TodoItem = ({ text, completed, onChange }) => (
  <div>
    <Checkbox checked={completed} onChange={onChange} />
    <TextInput value={text} onChange={onChange} />
  </div>
);

// Organisms
const TodoList = ({ todos, onTodoChange }) => (
  <div>
    {todos.map((todo, index) => (
      <TodoItem key={index} {...todo} onChange={onTodoChange(index)} />
    ))}
  </div>
);

// Templates
const TodoApp = ({ todos, onTodoChange }) => (
  <div>
    <h1>My Todo List</h1>
    <TodoList todos={todos} onTodoChange={onTodoChange} />
  </div>
);

// Pages
const HomePage = () => (
  <div>
    <TodoApp
      todos={[
        { text: 'Task 1', completed: false },
        { text: 'Task 2', completed: true },
      ]}
      onTodoChange={(index) => (event) => {
        // Handle todo change
      }}
    />
  </div>
);

export default HomePage;

```

This example defines four levels of the Atomic Design hierarchy: Atoms, Molecules, Organisms, and Templates. Atoms are the basic building blocks of the application, such as an input field or Checkbox. Molecules are composed of atoms and represent a slightly more complex UI element, such as a form that includes an input field and a button. Organisms are composed of molecules and atoms, and represent a more complex UI element such as a list of to-do items. Finally, the template is the highest level of the hierarchy and represents the overall layout of the application.

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

### How will Atomic Design benefit any project ?

**Control over the content**

You have more control over the content you and your team are creating, because you work with a methodology that makes you reuse the components you have created.

**Easily scalable**

It's easy to scale your applications because you have reusable components in place.

**Faster Prototyping**

Design cycles go from weeks to days because designers can pick and combine the needed elements from an existing library.

**Alignment with all team members**

It's easy to align with designers and frontend teams because they already know about atomic components and they will have a better understanding of how you are structuring your space.

**Single source of truth**

You will generate a common language and a single source of truth by using the same methodology between teams, creating a design system.

**Improved reusability, maintenance and updates**

As you are using reusable components, you will improve reusability. It will be easy to update your application or change the behavior/look-and-feel and you will have less components to fight with.

**Reduced time in testing**

By reusing previously created components, you will save time by reducing testing phases for each use case, driving efficiency in project delivery