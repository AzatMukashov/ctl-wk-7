import React from 'react';
import {OrderItem} from "../types";
import IconX from '../assets/remov.png';

interface DetailsOrderProps {
    order: OrderItem[];
    onRemove: (item: OrderItem) => void;
}

const DetailsOrder: React.FC<DetailsOrderProps> = ({order, onRemove}) => {
    const totalPrice = order.reduce((total, orderItem) =>
        total + orderItem.item.price * orderItem.quantity, 0);
    return (
        <div className="details-lbl">
            <label className="lbl-rdr-dtls">Order Details:</label>
            <div className="order-dtls">
                {order.length === 0 ? (
                    <div className="text-div">
                        <p>Order is empty!</p>
                        <p>Please add some items!</p>
                    </div>
                ) : (
                    <>
                        <ul className="ul-marker">
                            {order.map((orderItem) => (
                                <li className="li-marker"
                                    key={orderItem.item.id}>
                                    <div className="item-namee">{orderItem.item.name}</div>
                                    <div className="item-deteils">
                                    <span
                                        className="span-itemPrice">x{orderItem.quantity} - {orderItem.item.price * orderItem.quantity} KGS
                                    </span>
                                        <button className="remove-x"
                                                onClick={() => onRemove(orderItem)}
                                                type="button"
                                        ><img className="ic-x"
                                              src={IconX}
                                              alt="x"/>
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <p className="total-price">Total price: <span>{totalPrice} KGS</span></p>
                    </>
                )}
            </div>
        </div>
    );
};

export default DetailsOrder;