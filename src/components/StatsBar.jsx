import React from 'react'

const StatsBar = ({StatOne, StatTwo, StatThree}) => {
    return (
        <div className="container mx-auto w-full my-5">
            <div className="w-90 shadow-lg stats stats-vertical md:stats-horizontal w-full">
                {StatOne}
                {StatTwo}
                {StatThree}
            </div>
        </div>
    )
}

export default StatsBar