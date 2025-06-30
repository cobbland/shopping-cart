import App from './App.jsx';
import Home from "./components/Home";
import Shop from './components/Shop.jsx';

const route = [
  {
    path: "/",
    element: <App />,
    children: [
      { 
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ]
  },
]

export default route;