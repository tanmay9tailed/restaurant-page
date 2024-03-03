import React, { useEffect, useState } from 'react';

const MyOrder = () => {
    const [orderData, setOrderData] = useState({});

    const fetchMyOrder = async () => {
        const userEmail = localStorage.getItem('userEmail');
        if (!userEmail) return;

        try {
            const response = await fetch("http://localhost:5000/api/myorderData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: userEmail
                })
            });
            const responseData = await response.json();
            setOrderData(responseData.orderData);
            console.log(orderData)
        } catch (error) {
            console.error('Error fetching order data:', error);
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    return (
        <div style={{background: "linear-gradient(rgb(28, 28, 28), rgb(55, 55, 55))",minHeight:"100vh"}}>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap',alignItems:"self-start", paddingTop:"15vh"}}>
            {orderData && orderData.order_data && orderData.order_data.map((orderItem, index) => (
                <div key={index} style={{ margin: '10px', width: '250px',border: '1px solid #ccc', borderRadius: '5px', }}>
                    {orderItem.map((item, itemIndex) => (
                        <div key={itemIndex} style={{  padding: '10px' ,color:"white"}}>
                            {/* {console.log(item.Order_data) } */}
                            {item.Order_data && (
                                <div style={{ textAlign: 'center',borderBottom:"2px solid white"}}>
                                    {item.Order_data}
                                </div>
                            )}
                            {!item.Order_data && (
                                <div>
                                    <div style={{ width: '100%', height: '120px', overflow: 'hidden' }}>
                                        <img src={item.img} alt="..." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ padding: '10px' }}>
                                        <h5>{item.name}</h5>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span>{item.qty}</span>
                                            <span>{item.size}</span>
                                            <span>{item.Order_date}</span>
                                            <div style={{ fontSize: '1.2rem' }}>₹{item.price}/-</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
        </div>
    );
}

export default MyOrder;

