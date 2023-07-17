import Action from "./Components/Action";
import Animation from "./Components/Animation";
import Drama from "./Components/Drama";
import Horror from "./Components/Horror";
import ScinceFiction from "./Components/ScinceFiction";
import Headernav from "./pages/Home page/Headernav";
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  return (
    <div>
      <BrowserRouter>
         <Headernav/>
         <Routes>
          <Route path="/action" element={<Action/>}/>
          <Route path="/animation" element={<Animation/>}/>
          <Route path="/drama" element={<Drama/>}/>
          <Route path="/horror" element={<Horror/>}/>
          <Route path="/sci-fiction" element={<ScinceFiction/>}/>
         </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
