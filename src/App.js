import {Routes, Route} from "react-router-dom";
import 'reset-css';
import '../src/assets/scss/style.scss';
import Layout from "./component/layout/Layout";
import News from "./component/news/News";
import Banks from "./component/banks/Banks";
import NotFound from "./component/notFound/NotFound";
import Home from "./component/home/Home";


function App() {
  return (
      <Routes>
          <Route>
              <Route path='/' element={<Layout/>}>
                  <Route index element={<Home/>}/>
                  <Route path='/news' element={<News/>}/>
                  <Route path='/banks' element={<Banks/>}/>
                  <Route path='*' element={<NotFound/>}/>
              </Route>
          </Route>
      </Routes>
  );
}

export default App;
