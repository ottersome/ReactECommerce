import logo from './logo.svg';
import './App.css';
import React from 'react'
import Products from './components/Products'
import data from './data.json'

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            products : data.products,
            size:"",
            sort:""
        };
    }
    render(){
        return (
            <div className="grid-container">
            <header>
            <a href="/">Shopping Cart</a>
            </header>
            <main>
                <div classname="content">
                <Products products={this.state.products}></Products>
                </div>
                <div className="sidebar">
                Cart Items
                </div>
            </main>
            <footer>
            Rights thing here
            </footer>
            </div>
        );
    }
};

export default App;
