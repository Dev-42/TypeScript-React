type GreetProps = {
    name: string,
    age: number,
    isLogged: boolean
}
const Greet = (props : GreetProps) => {
  return (
    <div>
      {props.isLogged ? <h2>Welcome {props.name} your age is {props.age}</h2> : <h2>Welcome Guest</h2>}
    </div>
  )
}

export default Greet
