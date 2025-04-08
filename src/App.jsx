import Action from "./components/Action"
import BestSeller from "./components/BestSeller"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Grill from "./components/Grill"
import Header from "./components/Header"
import Main from "./components/Main"
import Oriental from "./components/Oriental"
import Statistics from "./components/Statistics"


function App() {
  

  return (
    <div className=" text-black">
      <Header/>
      <Main/>
      <BestSeller/>
      <Oriental/>
      <Statistics/>
      <Grill/>
      <Features/>
      <Action/>
      <Footer/>
    </div>
  )
}

export default App
