import Greetings from "./Greetings";

export function App() {
  return (
    <>
      <Greetings
        firstName={"John"}
        age={30}
        car={{ color: "Blue", speed: 150 }}
        doSomething={function () {
          return <h1>Hello to React World</h1>;
        }}
      >{<img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png"
        alt="Logo React"
        width={100}
      />
      }</Greetings>
    </>
  )
}
