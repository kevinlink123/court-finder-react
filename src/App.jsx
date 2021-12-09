import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Map from './components/Map';
import Home from './components/Home';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            courtsInformation: [
                {
                    id: 1,
                    latitud: -34.54121919252799,
                    longitud: -58.470372217082385,
                    courtName: 'Plaza Felix Lima',
                    nickname: 'La Lima'
                }
            ]
        }
    }

    render() {
        return(
            <div className="mx-auto">
                <nav className="flex items-center justify-between flex-wrap bg-black p-6">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                    <span className="font-semibold text-xl tracking-tight">Court Finder</span>
                    </div>
                    <div className="block lg:hidden">
                    <button onClick={this.toggleMenu} id='boton' className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                    </div>
                    <div id='menu' className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden">
                    <div className="text-sm lg:flex-grow">
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 font-mono text-white hover:text-gray-500 mr-4">
                        Docs
                        </a>
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 font-mono text-white hover:text-gray-500 mr-4">
                        Examples
                        </a>
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 font-mono text-white text hover:text-gray-500 hover">
                        Blog
                        </a>
                    </div>
                    <div>
                        <a href="#" className="inline-block text-sm px-6 py-4 leading-none border rounded font-mono text-white border-white hover:border-transparent hover:text-black hover:bg-gray-50 mt-4 lg:mt-0">Login/Sign Up</a>
                    </div>
                    </div>
                </nav>
                {/* <Map
                courtsInformation={this.state.courtsInformation}
                /> */}

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/map" element={<Map />} />
                </Routes>
            </div>
        )
    }
}

export default App;
