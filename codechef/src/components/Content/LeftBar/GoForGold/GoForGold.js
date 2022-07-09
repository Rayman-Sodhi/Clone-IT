import React from 'react';
import img from '../../../../assets/images/goForGold.png';
import Card from '../../../Card/Card';

const SearchForGold = () => {
    return (
        <Card>
            <img style={{height: '100%', width: '100%'}} src={img} alt="Go For Gold" />
        </Card>
    )
}

export default SearchForGold;
