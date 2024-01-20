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

## Prop drilling
Prop drilling es el proceso de pasar props a componentes hijos que no los necesitan. 
Cuidado con esto, ya que puede hacer que tu código sea más difícil de mantener si hacemos mucho prop drilling.

## Lifting the state up
Lifting the state up es el proceso de modificar el estado de un componente padre desde un componente hijo.
Usando los props, podemos pasar funciones que modifiquen el estado del componente padre desde el componente hijo.

(ver ejemplo en el código donde se modifica el estado de `MoviesList` desde el componente `MovieCard`)

  