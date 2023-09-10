import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './Agents.css'

const Agents = (props) => {

    const url = 'http://localhost:8080/agents/' + props.role

    const [agents, setAgents] = useState([])

    useEffect(() => {
        fetchData();
    },)

    const fetchData = async () => {
        await fetch(url)
            .then(result => result.json())
            .then(data => setAgents(data))
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <>
            <div className='agents'>
                {agents.map((agent) => (
                    < Card
                        key={agent.name}
                        name={agent.name}
                        img={agent.img}
                        role={agent.role}
                        country={agent.country}
                    />
                ))}
            </div>
        </>
    )
}

export default Agents