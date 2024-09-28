import React from 'react';
import {MenuItem} from '../types';

interface ItemAddButtonProps {
    item: MenuItem;
    onAdd: (item: MenuItem) => void;
}

const ItemAddButton: React.FC<ItemAddButtonProps> = ({item, onAdd}) => {
    return (
        <div className="btns-div">
            <button
                type="button"
                onClick={() => onAdd(item)}
            ><img className="image-ing"
                  src={item.image}
                  alt={item.name}/>
                <div className="name-price">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">Price: {item.price} KGS</span>
                </div>
            </button>
        </div>
    );
};

export default ItemAddButton;