import React from 'react';
import { withHeader } from 'dist/main.umd.min';
import Layout from 'layout/layout';
import './style.scss';
@withHeader
export default class Footer extends React.Component {

    render() {
        console.log(this.props, 'this.props')
        return (
            <div>
                this is footer!!!
            </div>
        );
    }
};

