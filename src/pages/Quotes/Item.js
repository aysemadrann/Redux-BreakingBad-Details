import React from 'react';

function item({item}) {
    return (
        <div style={{padding:'10px'}}><li>{item.quote}<strong>{item.author}</strong></li></div>
    )
}

export default item;
