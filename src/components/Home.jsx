import React, { Component } from "react";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render(){
        return(
            <div className="container mx-auto">
                    <div className="title">Explora las canchas de basquet de Argentina</div>
                    <div className="card bg-gray-50 py-24 mx-auto my-10">

                        <div className="grid grid-cols-3 items-center mx-auto text-center font-mono text-xl lg:my-6 font-bold uppercase">
                            <div className="mx-auto col-span-3 lg:col-span-2 w-full px-10">
                                <textarea 
                                placeholder="Donde vas a jugar hoy?" 
                                className="w-full text-center mx-auto rounded shadow py-6 lg:pt-10 align-middle text-md lg:text-xl"  
                                />
                            </div>
                            <div className="container px-10 col-span-3 mt-12 lg:my-0 lg:col-span-1 ">
                                <button className="btn btn-black mx-auto w-full">
                                    Buscar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}