
import {
  RouterProvider
} from "react-router-dom";
import './style.scss';
import router from './router';

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
