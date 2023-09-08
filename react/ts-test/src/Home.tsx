import React from 'react'
import List from './component/List'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <List title='구기 종목' />
            <List title='육상 종목' />
            <List title='수상 종목' />
        </>
    )
}

export default Home