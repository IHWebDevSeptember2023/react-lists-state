# Lists in react | Conditional rendering | Prop drilling | Lifting the state up

## Lists in react
En esta clase hemos aprendido como renderizar arrays de elementos en React usando map()

```javascript
function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Peter', age: 30 },
    { id: 3, name: 'Jill', age: 40 },
  ]);


  return (
    <div className="App">
      <h1>Lists in React</h1>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}
```

Recuerda que los maps necesitan una `key` para poder renderizar correctamente los elementos.

## Conditional rendering
Podemos renderizar componentes o partes de html condicionalmente usando operadores ternarios o el operador `&&`

```javascript
function App() {
  const isLoggedIn = true;
  const userNamr = 'John';

    return (
        <div className="App">
        <h1>Conditional rendering</h1>
        {isLoggedIn ? <h2>Welcome {userNamr}</h2> : <h2>Welcome Guest</h2>}
        {isLoggedIn && <h2>Welcome {userNamr}</h2>}
        </div>
    );
}
```

  