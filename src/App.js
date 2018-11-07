import React, { Component } from 'react';
import styles from './App.css';
import CSSModules from 'react-css-modules';
import { Button, WhiteSpace, WingBlank, List } from 'antd-mobile';
import * as newsService from './services/news';

const Item = List.Item;
const Brief = Item.Brief;

class App extends Component {
  state = {
    list:[]
  };
  componentDidMount() {
    newsService.fetch().then(data=>{
    	this.setState({list: data.hotEvents.lists})
    })
  }
  render() {
    return (
      <div styleName="list" >
        <div styleName="App">
	        hello vw-layout
	    </div>
		<List renderHeader={() => '一个vw vh 栗子'}>
	        
	        {this.state.list.map(item=>(
	        	<Item
		          arrow="horizontal"
		          multipleLine
		          platform="android"
		          key={item.id}
		        >	

		         <img src={item.poster}/>
		          {item.title} <Brief>{item.author.loginname}</Brief>
		        </Item>
        	))}
	     </List>
      </div>
    );
  }
}

export default CSSModules(App, styles);
