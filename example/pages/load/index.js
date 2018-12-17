import React from 'react';
import {withLoad} from 'release/dist/roo-bat.min';
import Layout from 'layout/layout';
import './style.scss';
import 'clipboard'
@withLoad(false)
export default class Loading extends React.Component {
    construct(){
         state={
             value:'23'
         }
     }
     componentDidMount(){
         console.log(21232312);
     }
    render() {
        console.log(this.props,'this.props')
        return (
            <div>
                load test;
            </div>
        );
    }
};

