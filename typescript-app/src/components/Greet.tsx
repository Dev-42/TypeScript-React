type GreetProps = {
    name: string,
    age: number
}
const Greet = (props : GreetProps) => {
  return (
    <div>
      <h2>Welcome {props.name} your age is {props.age}</h2>
    </div>
  )
}

export default Greet
