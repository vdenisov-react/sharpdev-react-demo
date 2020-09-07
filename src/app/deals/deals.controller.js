import React, { useEffect, useState } from 'react';
import { get } from 'lodash';

// template
import DealsView from './deals.view';

// services
import { DealsService } from '../@core/api/services';

export function Deals() {
    const [dealsList, setDealsList] = useState([]);

    useEffect(() => {
        DealsService.getAll()
            .then(res => {
                const deals = get(res, 'data.trans_token') || [];
                console.log('DEALS =>', deals);
                setDealsList(deals);
            })
            .catch(err => {
                console.log('ERR =>', err);
            });
    }, []);

    return (
        <DealsView
            ctrl={{
                dealsList,
            }}
        />
    );
}
