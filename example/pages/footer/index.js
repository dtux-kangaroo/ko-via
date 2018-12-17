import React from 'react';
import {withFooter} from 'release/dist/roo-bat.min';
import Layout from 'layout/layout';
import './style.scss';
import 'clipboard'
@withFooter('美的很')
export default class Footer extends React.Component {

    render() {
        console.log(this.props,'this.props')
        return (
            <div>
                this is footer!!!

            </div>
        );
    }
};

