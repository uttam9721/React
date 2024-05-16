import Product from './Product'
import MsgBox from './MsgBox';
import './App.css'

function App(props) {
  

  return(
    <>
    <h1>Main Component</h1>
    <MsgBox userName="uttam" textColor="black"/> 
    <MsgBox userName="maurya" textColor="blue"/> 
    </>
  )

}
export default App;