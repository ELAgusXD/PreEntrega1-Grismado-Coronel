import React,{useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';


const notebook = { id: 1, Image: "https://images.fravega.com/f300/a97719964699f470ea0f5c669ece6434.jpg.webp", title:"HP 15"}


export const ItemDetailContainer = () => {
    const[data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(notebook);
            }, 3000);
        });

        getData.then(res => setData(res));
}, [])    
    
    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer