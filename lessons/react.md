---
title: 'React in 60 seconds'
preset: 'react'
---

<StepHead>

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

const app = React.createElement(
  'h1',
  { style: { color: 'teal' } },
  'Hello React'
)

ReactDOM.render(app, document.getElementById('root'))
```

</StepHead>

React provides a createElement function to declare what we want to render to the DOM

<StepHead>

```jsx focus=4
import React from 'react'
import ReactDOM from 'react-dom'

const app = <h1 style={{ color: 'teal' }}>Hello React</h1>

ReactDOM.render(app, document.getElementById('root'))
```

</StepHead>

But instead of using createElement directly you can use JSX.

<StepHead>

```jsx focus=4:10
import React from 'react'
import ReactDOM from 'react-dom'

function MyComponent() {
  return (
    <div>
      <button>Hello</button>
    </div>
  )
}

const app = <h1 style={{ color: 'teal' }}>Hello React</h1>

ReactDOM.render(app, document.getElementById('root'))
```

</StepHead>

To create a component you only need to write a function with a name that starts with a capital letter.

<StepHead>

```jsx focus=4[10:20],12:17
import React from 'react'
import ReactDOM from 'react-dom'

function MyComponent() {
  return (
    <div>
      <button>Hello</button>
    </div>
  )
}

const app = (
  <div>
    <MyComponent />
    <MyComponent />
  </div>
)

ReactDOM.render(app, document.getElementById('root'))
```

</StepHead>

Now you can use that function in JSX.

<StepHead>

```jsx focus=14[18:29],15[18:31]
import React from 'react'
import ReactDOM from 'react-dom'

function MyComponent() {
  return (
    <div>
      <button>Hello</button>
    </div>
  )
}

const app = (
  <div>
    <MyComponent name="Messi" />
    <MyComponent name="Ronaldo" />
  </div>
)

ReactDOM.render(app, document.getElementById('root'))
```

</StepHead>

You can assign attributes

<StepHead>

```jsx focus=4[22:29],14[18:29],15[18:31]
import React from 'react'
import ReactDOM from 'react-dom'

function MyComponent({ name }) {
  return (
    <div>
      <button>Hello</button>
    </div>
  )
}

const app = (
  <div>
    <MyComponent name="Messi" />
    <MyComponent name="Ronaldo" />
  </div>
)

ReactDOM.render(app, document.getElementById('root'))
```

</StepHead>

And React will pass them to the component as parameters

<StepHead>

```jsx focus=4[22:29],7
import React from 'react'
import ReactDOM from 'react-dom'

function MyComponent({ name }) {
  return (
    <div>
      <button>{name}</button>
    </div>
  )
}

const app = (
  <div>
    <MyComponent name="Messi" />
    <MyComponent name="Ronaldo" />
  </div>
)

ReactDOM.render(app, document.getElementById('root'))
```

</StepHead>

Inside JSX, you use curly braces to wrap dynamic data

<StepHead>

```jsx focus=5,9
import React from 'react'
import ReactDOM from 'react-dom'

function MyComponent({ name }) {
  const goalCount = 2
  return (
    <div>
      <button>{name}</button>
      {'⚽'.repeat(goalCount)}
    </div>
  )
}

const app = (
  <div>
    <MyComponent name="Messi" />
    <MyComponent name="Ronaldo" />
  </div>
)

ReactDOM.render(app, document.getElementById('root'))
```

</StepHead>

In fact you can wrap any javascript expression.

<StepHead>

```jsx focus=7:9,13[15:35]
import React from 'react'
import ReactDOM from 'react-dom'

function MyComponent({ name }) {
  const goalCount = 2

  const handleClick = (event) => {
    // do something
  }

  return (
    <div>
      <button onClick={handleClick}>{name}</button>
      {'⚽'.repeat(goalCount)}
    </div>
  )
}

const app = (
  <div>
    <MyComponent name="Messi" />
    <MyComponent name="Ronaldo" />
  </div>
)

ReactDOM.render(app, document.getElementById('root'))
```

</StepHead>

To add event listeners you pass a function to the corresponding attribute

<StepHead>

```jsx focus=5
import React from 'react'
import ReactDOM from 'react-dom'

function MyComponent({ name }) {
  const [goalCount, setCount] = React.useState(2)

  const handleClick = (event) => {
    // do something
  }
  return (
    <div>
      <button onClick={handleClick}>{name}</button>
      {'⚽'.repeat(goalCount)}
    </div>
  )
}

const app = (
  <div>
    <MyComponent name="Messi" />
    <MyComponent name="Ronaldo" />
  </div>
)

ReactDOM.render(app, document.getElementById('root'))
```

</StepHead>

To add state to a component there's the useState function from React.

<StepHead>

```jsx focus=5,7:9
import React from 'react'
import ReactDOM from 'react-dom'

function MyComponent({ name }) {
  const [goalCount, setCount] = React.useState(2)

  const handleClick = (event) => {
    setCount(goalCount + 1)
  }

  return (
    <div>
      <button onClick={handleClick}>{name}</button>
      {'⚽'.repeat(goalCount)}
    </div>
  )
}

const app = (
  <div>
    <MyComponent name="Messi" />
    <MyComponent name="Ronaldo" />
  </div>
)

ReactDOM.render(app, document.getElementById('root'))
```

</StepHead>

It gives you a function to update the state.

<StepHead>

```jsx focus=5,7:9,13,14

```

</StepHead>

When you call it, React will know it needs to re-render the component.

<StepHead>

```jsx focus=19
import React from 'react'
import ReactDOM from 'react-dom'

function MyComponent({ name }) {
  const [goalCount, setCount] = React.useState(2)

  const handleClick = (event) => {
    setCount(goalCount + 1)
  }

  return (
    <div>
      <button onClick={handleClick}>{name}</button>
      {'⚽'.repeat(goalCount)}
    </div>
  )
}

const players = ['Messi', 'Ronaldo', 'Laspada']

const app = (
  <div>
    <MyComponent name="Messi" />
    <MyComponent name="Ronaldo" />
  </div>
)

ReactDOM.render(app, document.getElementById('root'))
```

</StepHead>

To render a list

<StepHead>

```jsx focus=19,23[6:34],24,25[1:6]
import React from 'react'
import ReactDOM from 'react-dom'

function MyComponent({ name }) {
  const [goalCount, setCount] = React.useState(2)

  const handleClick = (event) => {
    setCount(goalCount + 1)
  }

  return (
    <div>
      <button onClick={handleClick}>{name}</button>
      {'⚽'.repeat(goalCount)}
    </div>
  )
}

const players = ['Messi', 'Ronaldo', 'Laspada']

const app = (
  <div>
    {players.map((playerName) => (
      <MyComponent name={playerName} key={playerName} />
    ))}
  </div>
)

ReactDOM.render(app, document.getElementById('root'))
```

</StepHead>

you can map each list item to an element using javascript.

<StepHead>

```jsx focus=24[38:54]

```

</StepHead>

React only needs a unique key for each element, to find out when something changes.

<StepHead>

```jsx focus=21:27,30,34
import React from 'react'
import ReactDOM from 'react-dom'

function MyComponent({ name }) {
  const [goalCount, setCount] = React.useState(2)

  const handleClick = (event) => {
    setCount(goalCount + 1)
  }

  return (
    <div>
      <button onClick={handleClick}>{name}</button>
      {'⚽'.repeat(goalCount)}
    </div>
  )
}

const players = ['Messi', 'Ronaldo', 'Laspada']

function MyBox() {
  return (
    <div style={{ border: '8px solid deeppink' }}>
      // TODO something
    </div>
  )
}

const app = (
  <MyBox>
    {players.map((playerName) => (
      <MyComponent name={playerName} key={playerName} />
    ))}
  </MyBox>
)

ReactDOM.render(app, document.getElementById('root'))
```

</StepHead>

If you want to compose components together

<StepHead>

```jsx focus=21[16:27],24,30:34
import React from 'react'
import ReactDOM from 'react-dom'

function MyComponent({ name }) {
  const [goalCount, setCount] = React.useState(2)

  const handleClick = (event) => {
    setCount(goalCount + 1)
  }

  return (
    <div>
      <button onClick={handleClick}>{name}</button>
      {'⚽'.repeat(goalCount)}
    </div>
  )
}

const players = ['Messi', 'Ronaldo', 'Laspada']

function MyBox({ children }) {
  return (
    <div style={{ border: '8px solid deeppink' }}>
      {children}
    </div>
  )
}

const app = (
  <MyBox>
    {players.map((playerName) => (
      <MyComponent name={playerName} key={playerName} />
    ))}
  </MyBox>
)

ReactDOM.render(app, document.getElementById('root'))
```

</StepHead>

React passes the nested elements inside a special property called children.
