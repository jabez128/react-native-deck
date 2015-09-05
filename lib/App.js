
'use strict'

var React = require('react-native')
var _ = require("underscore")
var Dimensions = require('Dimensions')
var Card = require('./Card.js')
var {
	View,
	StyleSheet,
} = React

var types = [
			 {
			 	type :"♠︎",
			 	color: "black"
			 },{
			 	type: "♦",
			 	color: "red",
			 },{
			 	type: "♥︎",
			 	color: "red"
			 },
			 {
			 	type: "♣︎",
			 	color: "black"
			 }]

var orders = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]

var screen = Dimensions.get('window')

var App = React.createClass({

	_recover(){
		var initTop = screen.height/2-88
		var initLeft = screen.width/2-62
		var count = 26
		var matches = types.map((type)=> {
			return orders.map((order)=>{
				count -= 0.5
				return {
					type: type.type,
					color: type.color,
					order: order
				}
			})
		})
		matches = _.shuffle(matches.reduce((p,c)=>{return p.concat(c)}))
		this.Decks = matches.map((item)=> {
				count -= 0.5
				return (<Card customStyle={{top: initTop+count,left:initLeft+count}} color={item.color} type={item.type} order={item.order} />)
		})
		return this.Decks
	},
	render(){
		return (<View style={styles.table}>
					{this._recover()}
				</View>)
	}
})

var styles = StyleSheet.create({
	table:{
		flex: 1,
		backgroundColor: "#49A077"
	}
})

module.exports = App
