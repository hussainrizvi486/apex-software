import React from "react"
import { Badge } from "../ui/Badge";

export interface TypeService {
    title: string,
    description: string
    badges: string[],
    image: string,
}

interface TypeServiceProps {
    service: TypeService
}


export const ServiceCard: React.FC<TypeServiceProps> = ({ service }) => {
    return (
        <div className="flex gap-1 service-card" >
            <div className="left flex-auto">
                <div className="text-xl font-bold">
                    {service?.title}
                </div>
                <div className="text-sm mt-3">
                    {service?.description}
                </div>
                <div className="flex gap mt-3">
                    {service?.badges.map((val, i) => (
                        <Badge key={i}>{val}</Badge>
                    ))}
                </div>

                <div className="mt-3 flex gap">
                    <button className="btn btn-sm btn-primary">Let's chat</button>
                    <button className="btn-outline btn btn-sm ">Learn More</button>
                </div>
            </div>

            <div className="right">
                <img src={service?.image} alt="" />
            </div>
        </div>

    )
}