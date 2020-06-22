import React, { Component } from 'react'
import classNames from "classnames"
import BottomNav from '../../components/BottomNav'

export default class BasicLayout extends Component {
    render() {

        const {children} = this.props
        return (
            <div className={classNames('basicLayout')}>
              <article>
              {children}
              </article>
              <BottomNav></BottomNav>
            </div>
        )
    }
}
