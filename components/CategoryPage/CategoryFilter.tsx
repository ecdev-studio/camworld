import {NextComponentType} from "next";
import React, {useState} from "react";

const CategoryFilter: NextComponentType<{}, {}, {}> = () => {
    // const [viewPrice, setViewPrice] = useState(false);
    return (
        <div className="filter">
            {/*<div className={viewPrice ? 'filter__category filter__category--active' : 'filter__category'}>*/}
            {/*    <button className="h5 filter__category__title" onClick={() => setViewPrice(prev=>!prev)}>Price <span*/}
            {/*        className="filter__category__arrow"> </span></button>*/}
            {/*    <div className="filter__category__rage">*/}
            {/*        <div className="filter__category__price-range">*/}
            {/*            <input type="text"*/}
            {/*                   className={minPrice > value.value.min || value.value.max < value.value.min ?*/}
            {/*                       'filter__category__input error' : 'filter__category__input'} value={value.value.min}*/}
            {/*                   onChange={e => setValue(prev => {*/}
            {/*                           return {*/}
            {/*                               value: {*/}
            {/*                                   min: e.target.value?parseInt(e.target.value):0,*/}
            {/*                                   max: prev.value.max*/}
            {/*                               }*/}
            {/*                           }*/}
            {/*                       }*/}
            {/*                   )}/>*/}
            {/*            <span>-</span>*/}
            {/*            <input type="text"*/}
            {/*                   className={maxPrice < value.value.max || value.value.max < value.value.min ?*/}
            {/*                       'filter__category__input error' : 'filter__category__input'} value={value.value.max}*/}
            {/*                   onChange={e => setValue(prev => {*/}
            {/*                           return {*/}
            {/*                               value: {*/}
            {/*                                   min: prev.value.min,*/}
            {/*                                   max: e.target.value?parseInt(e.target.value):0*/}
            {/*                               }*/}
            {/*                           }*/}
            {/*                       }*/}
            {/*                   )}/>*/}
            {/*            <button onClick={priceButtonValidation ? sortHandler : null}*/}
            {/*                    className={priceButtonValidation ? 'filter__category__button' : 'filter__category__button not-active'}>OK*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*        <InputRange maxValue={maxPrice} minValue={minPrice}*/}
            {/*                    value={value.value} onChange={value => setValue({ value })} formatLabel={() => {}}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*{categories && categories.taxonomies && categories.taxonomies.length > 0 && categories.taxonomies.map((item) => {*/}
            {/*    return (*/}
            {/*        <FilterItem item={item} key={item.id}/>*/}
            {/*    )*/}
            {/*})}*/}
        </div>
    );
}


export default CategoryFilter