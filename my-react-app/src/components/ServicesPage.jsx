import React from "react";
import ServiceCard from "./ServiceCard";
import services from "../content/services";

function ServicesPage() {
    return (
        <div>
            <h1>Services</h1>
            <ul>
                <li><a href="#Farming">Farming</a></li>
                <li><a href="#Whatever else">Whatever else</a></li>
            </ul>
            <div>
                {services.map((service) => {
                    return (
                        <ServiceCard 
                            key={service.id}
                            id={service.name}
                            name={service.name}
                            description={service.description}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ServicesPage;