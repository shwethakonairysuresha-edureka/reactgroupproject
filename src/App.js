import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layouts/Header";
import Landing from "./components/layouts/Landing";
import Footer from "./components/layouts/Footer";
import AdminDashboard from "./components/layouts/AdminDashboard";
import UserDashboard from "./components/layouts/UserDashboard";
import Product from "./components/layouts/Product";

import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AddProduct from "./components/auth/AddProduct";
import UpdateProduct1 from "./components/auth/UpdateProduct1";
import DeleteProduct from "./components/auth/DeleteProduct";
import PostList from './components/layouts/PostList'

import {Provider} from 'react-redux';
import store from './redux/store/store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
      <Header></Header>
      <Route exact path = "/" component = {Landing}></Route>
      <Route exact path = "/login" component = {Login}></Route>
      <Route exact path = "/register" component = {Register}></Route>
      <Route exact path = "/admindashboard" component = {AdminDashboard}></Route>
      <Route exact path = "/userdashboard" component = {UserDashboard}></Route>
      <Route exact path = "/product" component = {Product}></Route>
      <Route exact path = "/addproduct" component = {AddProduct}></Route>
      <Route exact path = "/updateproduct1" component = {UpdateProduct1}></Route>
      <Route exact path = "/deleteproduct" component = {DeleteProduct}></Route>
      {/*<Route exact path = "/sample" component = {sample}></Route>*/}
      <Footer></Footer>
      </Router>
    </div>
    </Provider>
  );
}

export default App;












const postList = [
  {
    id:1,
    content:'This world is beautiful',
    user:'Shinchan'
  },
  {
    id:2,
    content:'Good Morning',
    user:'Naruto'
  },
  {
    id:3,
    content:'Have a Nice Day.',
    user:'Sasuke'
  },
  {
    id:4,
    content:'I love Anime.. Anime is Life',
    user:'Kakashi'
  }
]