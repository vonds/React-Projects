import React, { Component } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Navbar.css'

class Navbar extends Component {
    render() {
        const { level, changeLevel } = this.props
        return (
            <header className='Navbar'>
                <section className='logo'>
                    <a href='#'>reactColorPicker</a>
                </section>
                <section className='slider-container'>
                    <span>Level: { level }</span>
                    <section className='slider'>
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={changeLevel}
                        />
                    </section>
                </section>
            </header>
        )
    }
}

export default Navbar