import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchAllQuotes, quotesSelector, statusSelector, errorSelector } from '../../redux/quotesSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import Item from '../Quotes/Item';

function Quotes() {
        
    const data = useSelector(quotesSelector);
    const status = useSelector(statusSelector);
    const error = useSelector(errorSelector);
    const dispatch = useDispatch();
    useEffect(() => {
       if(status === 'idle') {
        dispatch(fetchAllQuotes());
       }
    }, [dispatch, status]);


    if(error) {
        return <Error message={error} />;
    }
    return (
        <div>
             {status === 'loading' && <Loading />}
             {status === 'succeeded' && data.map((item) => <Item key={item.quote_id} item={item}/>)}
             {<div style={{textAlign:'center', padding:'10px'}}>{data.length} Quotes</div>}
        </div>
    );
}

export default Quotes;
