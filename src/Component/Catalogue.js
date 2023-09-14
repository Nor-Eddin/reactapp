/* eslint-disable no-useless-escape */
import React, { Component } from 'react';
import CardProduct from './Card';


export default class Catalogue extends Component {
    static displayName = Catalogue.name;

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    componentDidMount() {
        this.listProductsData();

    }

    static renderForecastsTable(forecasts) {
        
        return (
            <>
                {forecasts.map(forecast =>
                    <CardProduct key={forecast.id} T={forecast.title} P={forecast.price} C={forecast.category} />
                )}
            </>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
            : Catalogue.renderForecastsTable(this.state.forecasts);

        return (
            <div className="container mt-5">
                <h1 id="tabelLabel" >Catalogue</h1>
                {contents}
            </div>
        );
    }
   
    async listProductsData() {
        const response = await fetch('product');
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
        
    }
}
