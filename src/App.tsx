import './App.css'
import ItemAddButton from "./components/ItemAddButton.tsx";
import DetailsOrder from "./components/DeteilsOrder.tsx";
import {MenuItem, OrderItem} from "./types";
import React, {useState} from "react";

const App: React.FC = () => {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const menuItems: MenuItem[] = [
        {id: 1, name: 'Hamburger', price: 80, image: 'src/assets/fork-knife.png'},
        {id: 2, name: 'Coffee', price: 90, image: 'src/assets/cup.png'},
        {id: 3, name: 'Cheeseburger', price: 50, image: 'src/assets/fork-knife.png'},
        {id: 4, name: 'Tea', price: 40, image: 'src/assets/cup.png'},
        {id: 5, name: 'Fries', price: 60, image: 'src/assets/fork-knife.png'},
        {id: 6, name: 'Cola', price: 70, image: 'src/assets/cup.png'},
    ];
    const handleAddItem = (item: MenuItem) => {
        setOrder((prev) => {
            const existingItem = prev.find((orderItem) =>
                orderItem.item.id === item.id);
            if (existingItem) {
                return prev.map((orderItem) =>
                    orderItem.item.id === item.id
                        ? {...orderItem, quantity: orderItem.quantity + 1}
                        : orderItem
                );
            }
            return [...prev, {item, quantity: 1}];
        });
    };
    const handleRemoveItem = (itemToRemove: OrderItem) => {
        setOrder((prev) => prev.filter((orderItem) =>
            orderItem.item.id !== itemToRemove.item.id));
    };
    return (
        <div className="app">
            <div className="order-details">
                <DetailsOrder order={order} onRemove={handleRemoveItem}/>
            </div>
            <div className="label-addItems">
                <label className="label-add">Add items:</label>
                <div className="add-items">
                    {menuItems.map((item) => (
                        <ItemAddButton key={item.id} item={item} onAdd={handleAddItem}/>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default App
