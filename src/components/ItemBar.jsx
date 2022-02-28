import { React, useContext } from 'react'
import ItemContext from '../context/ItemContext'

const ItemBar = () => {
    const {item} = useContext(ItemContext);
    const nameForUrl = item.name.replace(/ /g, "_");
    const imgUrl = `https://oldschool.runescape.wiki/images/${nameForUrl}.png?2f64c`;

    return (
        <div className="bg-neutral shadow-lg p-3 rounded-2xl w-4/5 mx-auto my-5 md:w-3/5 lg:w-1/2">
            <div className="container">
                <div tabIndex="0" className="collapse collapse-plus">
                    <input type="checkbox" /> 
                    <div className="collapse-title flex text-xl text-center align-center justify-center font-medium">
                        <img src={imgUrl} alt="" className='hidden md:inline pr-2'/>
                        <div> View more information on the {item.name}. </div>
                    </div>
                        <div className="collapse-content">
                            <div className="divider"></div> 
                            <div className='text-center'>{item.examine}</div>
                            <div className="divider"></div>
                            <div className="grid grid-cols-2 text-center">
                                <div>Low Alch: {item.lowalch}</div>
                                <div>High Alch: {item.highalch}</div>
                            </div>
                            <div className="grid grid-cols-2 text-center">
                                <div>GE Buy Limit: {item.limit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                                <div>Item ID: {item.id}</div>
                            </div>
                            <div className="divider"></div>
                            <div className='text-center'>
                                You can view more information about this item on its official wiki page <a className="link link-accent" href={`https://oldschool.runescape.wiki/w/${nameForUrl}`}>here</a>.
                            </div>
                        </div>
                </div>
            </div>
        </div>
  )
}

export default ItemBar