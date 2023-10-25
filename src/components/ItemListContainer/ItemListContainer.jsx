import React,{useState,useEffect} from "react"
import ItemList from "../ItemList/ItemList";
import ItemCount from "../ItemCount/ItemCount"


const notebooks = [
    { id: 1, Image: "https://images.fravega.com/f300/a97719964699f470ea0f5c669ece6434.jpg.webp", title:"HP 15"},
    { id: 2, Image: "https://images.fravega.com/f300/a836331332121683eebbaf83249ea978.jpg.webp", title:"Lenovo IP 3 14ITL6"},
    { id: 3, Image: "https://images.fravega.com/f300/65bb70573f7ea2c48444fd256f57c9a0.jpg.webp", title:"ASUS X515EA"}
];


const ItemListContainer = ({greeting}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise((resolve) => {
            setTimeout(() => {
                resolve(notebooks);
            }, 3000);
        });
        getData.then(res => setData(res));
    }, [])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <div> 
            <h1>{greeting}</h1>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList data={data}/>
        </div>
    );
}

export default ItemListContainer