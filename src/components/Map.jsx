import React, { Component } from "react";
import * as L from 'leaflet';

export default class Map extends Component {
    constructor(props){
        super(props);

        this.state = {
            centerLocation: {
                latitud: -34.54121919252799,
                longitud: -58.470372217082385
            },
            zoom: 13,

        }
    }

    componentDidMount() {
        let mymap = L.map('mapid').setView([this.state.centerLocation.latitud, this.state.centerLocation.longitud], 17);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1Ijoia2V2aW5saW5rMTIzIiwiYSI6ImNrdjJ3N28ybjhhMHczMG1hYnhobDdwcmgifQ.s12VIkr24ay2gIoY4BhcRw'
        }).addTo(mymap);
    }

    render() {
        return(
            <div className='h-screen my-10'>
                <div
                className='h-3/5 lg:h-4/5'
                id='mapid'></div>
            </div>
        )
    }
}