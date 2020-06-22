import React, { Component } from 'react'
import BottomNav from '../../components/BottomNav'
import BasicLayout from '../../layout/BasicLayout'

export default class HomePage extends Component {
    render() {
        return (
            <BasicLayout>
                <h3>HomePage</h3>
                <BottomNav></BottomNav>
            </BasicLayout>
        )
    }
}
