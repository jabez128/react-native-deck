'use strict'

var React = require('react-native')

var {
	View,
	StyleSheet,
	Text,
	PanResponder
} = React

var Card = React.createClass({
	getInitialState(){
		return {
			move: {},
			init: this.props.customStyle,
			bodyColor: {backgroundColor: 'white'}
		}
	},
	componentWillMount(){
		this._panResponder = PanResponder.create({
		  onStartShouldSetPanResponder: (evt, gestureState) => true,
	      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
	      onMoveShouldSetPanResponder: (evt, gestureState) => true,
	      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
	      onPanResponderTerminationRequest: (evt, gestureState) => true,
	      onPanResponderGrant: (evt,gestureState) =>{
	      	this.setState({
	      		bodyColor: {backgroundColor: 'rgba(59,55,56,0.5)'}
	      	})
	      },
	      onPanResponderMove: (evt, gestureState) => {
	      	this.setState({
	      		move: {transform: [{translateX: gestureState.dx},{translateY: gestureState.dy}]}
	      	})
	      },
	      onPanResponderRelease: (evt,gestureState) => {
	      	this.setState({
	      		bodyColor: {backgroundColor: 'white'},
	      		move: {},
	      		init: {top: this.state.init.top + gestureState.dy,left: this.state.init.left+gestureState.dx}
	      	})
	      }
		})
	},
	render(){
		return (
			<View {...this._panResponder.panHandlers} style={[styles.card,this.state.bodyColor,this.state.init,this.state.move]}>
				<View style={styles.leftTop}>
					<Text style={[styles.type,{color: this.props.color}]}>{this.props.type}</Text>
					<Text style={[styles.order,{color: this.props.color}]}>{this.props.order}</Text>
				</View>
				<View style={styles.rightBottom}>
					<Text style={[styles.type,{color: this.props.color}]}>{this.props.type}</Text>
					<Text style={[styles.order,{color: this.props.color}]}>{this.props.order}</Text>
				</View>
				<View style={styles.center}>
					<Text style={[styles.centerLogo,{color: this.props.color}]}>{this.props.type}</Text>
				</View>
			</View>
		)
	}
})

var styles = StyleSheet.create({
	card: {
		width: 124,
		height: 176,
		backgroundColor: 'white',
		borderRadius: 12,
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center'
	},
	leftTop: {
		width: 20,
		height: 40,
		flexDirection: 'column',
		position: 'absolute',
		top: 0,
		left: 0,
		backgroundColor: 'transparent'
	},
	rightBottom: {
		width: 20,
		height: 40,
		flexDirection: 'column',
		position: 'absolute',
		bottom: 0,
		right: 0,
		backgroundColor: 'transparent',
		transform: [{rotateX:'180deg'}]
	},
	type: {
		height: 20,
		textAlign: 'center',
	},
	order: {
		height: 20,
		textAlign: 'center',
	},
	center: {
		width: 80,
		height: 80,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent'
	},
	centerLogo: {
		fontSize: 80,
		flex: 1,
		textAlign: 'center',
		lineHeight: 90
	}

})

module.exports = Card