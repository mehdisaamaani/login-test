import LoginApi from "./components/Login";

import { Routes, Route, Link } from "react-router-dom";
import ContentUser from "./components/ContentUser";
function App() {
  return (
    <>
<Routes>
  <Route path="/test" element={<ContentUser/>}/>
    <Route path="/" element={<LoginApi/>}/>
    </Routes>
    
    

  </>
  );
}

export default App;
