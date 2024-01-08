const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a*b)

  return (
    <div>
      <p>Hello Simon</p>
      <p>
        {a} times {b} is {a*b}
      </p>
    </div>
  )
}

export default App