

function print(){
    console.log("Hello");
  }
  function printBye(){
    console.log("Bye");
  }
function handleMouseOver(){
    console.log("You double Clicked");
}
export default function Button(){
    return(
        <div>
    <button onClick={print}>Click me!</button>
    <p onMouseOver={printBye}>Lorem ipsum, dolor sit amet consectetur 
    adipisicing elit. Ea numquam non error! Maxime quaerat
     voluptatibus eveniet consectetur dolore dignissimos 
     voluptatem rerum, voluptas porro iusto itaque unde! 
     Accusantium reprehenderit nulla laborum?</p>

     <button onDoubleClick={handleMouseOver}>double clicked me</button>
    </div>
)
};