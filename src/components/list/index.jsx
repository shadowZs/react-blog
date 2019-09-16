import React, {Component} from 'react'
import { List, Avatar } from 'antd';
import './index.scss'

class CompnentList extends Component{
  constructor(props){
    super(props)

    this.state = {
      list: [{title: 111},{title: 222},{title: 333}],
    }
  }

  render(){
    return(
      <div className='list-container'>
        <List
          itemLayout="horizontal"
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </div>
    )
  }
}


export default CompnentList;
