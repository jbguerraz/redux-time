import React from 'react'

import {connect} from 'react-redux'
import {TimeControlsComponent} from 'warped-time'


const mapStateToProps = ({animations}) => ({
    speed: animations.speed,
    current_timestamp: animations.current_timestamp,
    last_timestamp: animations.last_timestamp,
})

const mapDispatchToProps = (dispatch) => ({
	setTime: (warped_time) => {
		dispatch({type: 'SET_WARPED_TIME', warped_time})
	}
    setSpeed: (speed) => {
        dispatch({type: 'SET_ANIMATION_SPEED', speed})
    },
})

export const AnimationControls = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TimeControlsComponent)
