import React from 'react'

const Stat = ({title, stat, desc}) => {

    return (
        <div className="stat bg-neutral place-items-center place-content-center">
            <div className="stat-title">{title}</div> 
                <div className={`stat-value ${stat === 'TRUE' && 'text-success'} ${stat === 'FALSE' && 'text-error'}`}>
                    {stat}  
                </div> 
            <div className={`stat-desc`} >{desc}</div>
        </div>

    )
}

export default Stat