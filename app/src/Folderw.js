import React, { useEffect, useState } from 'react';

const PrintData = ({ folder, handleState, handleDelete }) => {
    const [data, setdata] = useState('');

    useEffect(() => {
        setdata(folder);
    }, [folder]);

    return (
        <div style={{ position: 'relative', marginLeft: '10px' }}>
            <button
                style={{
                    width: '100px',
                    backgroundColor: data.status ? 'grey' : '',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    position: 'relative',  // Ensuring positioning is relative
                    left: '10px',  // Corrected from 'Left' to 'left'
                    top: '10px',  // Optional: add a 'top' offset to move the button down a bit
                }}
                onClick={() => handleState(data.name)}
            >
                {data.name}
            </button>

            {
                data.status && (
                    <button
                        onClick={() => handleDelete(data.name)}
                        style={{
                            marginLeft: '10px',
                            backgroundColor: 'red',
                            border: 'none',
                            borderRadius: "10px",
                            cursor: 'pointer'
                        }}
                    >
                        delete
                    </button>
                )
            }

            <div>
                {
                    data.status && Array.isArray(data.child) && data.child.length > 0 ?
                        data.child.map((item, index) => {
                            return <PrintData key={index} folder={item} handleState={handleState} handleDelete={handleDelete} />
                        }) : null
                }
            </div>
        </div>
    );
}

const Folderw = () => {
    const [data, setdata] = useState([
        { name: 'a', status: false, child: [{ name: 'sub a', status: false, child: [] }] },
        { name: 'b', status: false, child: [{ name: 'sub b', status: false, child: [] }] },
        { name: 'c', status: false, child: [{ name: 'sub c', status: false, child: [] }] },
        { name: 'd', status: false, child: [{ name: 'sub d', status: false, child: [] }] },
    ]);



    console.log(data)

    const handleState = (value) => {
        const changeState = (data) => {
            return data.map((item) => {
                if (typeof item === 'object') {
                    return {
                        ...item,
                        status: item.name === value ? !item.status : item.status,
                        child: item.child ? changeState(item.child) : []
                    };
                }
                return item;
            });
        };

        setdata(changeState(data));
    };

    const handleDelete = (value) => {

        const deleteItems = (data) => {

            // return data.map((item) => {
            //     return item.name === value ? data.filter((a) => a.name !== value) : 
            //     (item.child?.length?{ ...item, child: deleteItems(item.child) }:item)
            // })


            return data.filter((item)=>{
                return item.name!==value
            }).map((item)=>{
                return {...item,child:item.child?deleteItems(item.child):[]}
            })
        }

        setdata(deleteItems(data));

    };

    return (
        <div>
            <h1>Folder Structure</h1>

            {
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            {
                                typeof item === 'object' ?
                                    <PrintData
                                        folder={item}
                                        handleState={handleState}
                                        handleDelete={handleDelete}
                                    /> :
                                    <p>{item}</p>
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Folderw;
