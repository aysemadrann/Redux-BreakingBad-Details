import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacters } from '../../redux/characterSlice';
import Masonry from 'react-masonry-css';
import './styles.css';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import {
    Link
  } from "react-router-dom";



function Home() {
const characters = useSelector((state) => state.characters.items);
const status = useSelector((state) => state.characters.status);
const nextPage = useSelector((state) => state.characters.page);
const error = useSelector((state) => state.characters.error);
const hasPage = useSelector((state) => state.characters.hasNextPage);
const dispatch = useDispatch();

useEffect(() => {
    if(status === 'idle'){
        dispatch(fetchCharacters());
    } 
},[dispatch, status]);


if(status === 'failed') {
    return <Error message={error}/>
}
    return (
        
        <div>
            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {characters.map((character) => (
                 <div key={character.char_id}>
                    <Link to={`/char/${character.char_id}`}>
                        <img className='character__img' src={character.img} alt={character.name} />
                        <div className='char__name'>{character.name}</div>
                    </Link>
                 </div>
                ))}
            </Masonry>   
            <div style={{padding:15, textAlign:'center'}}>
                {status === 'loading' && <Loading/> }
                {hasPage && !status !== 'loading' && (<button onClick={() => dispatch(fetchCharacters(nextPage))}>Load More ({nextPage})</button>)}
                {
                    !hasPage && <div>There is nothing to be shown</div>
                }
    
            </div>
        </div>
    )
}

export default Home;
