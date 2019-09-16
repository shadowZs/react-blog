import React, {Component} from 'react';
import { Comment, Icon, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import './index.scss'

class List extends Component{
  constructor(props){
    super(props)
    this.state = {
      likes: 0,
      dislikes: 0,
      action: null
    }
  }

  like(){
    this.setState({
      likes: this.state.likes + 1
    })
  }

  dislike(){
    this.setState({
      dislikes: this.state.dislikes + 1
    })
  }

  render(){
    const { likes, dislikes, action } = this.state;
    const actions = [
      <span key="comment-basic-like">
        <Tooltip title="喜欢">
          <Icon
            type="like"
            theme={action === 'liked' ? 'filled' : 'outlined'}
            onClick={this.like.bind(this)}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
      </span>,
      <span key=' key="comment-basic-dislike"'>
        <Tooltip title="不喜欢">
          <Icon
            type="dislike"
            theme={action === 'disliked' ? 'filled' : 'outlined'}
            onClick={this.dislike.bind(this)}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
      </span>,
      <span key="comment-basic-reply-to">Reply to</span>,
    ];
    return (
      <Comment
        actions={actions}
        author={<a>Han Solo</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <p>
            We supply a series of design principles, practical patterns and high quality design
            resources (Sketch and Axure), to help people create their product prototypes beautifully
            and efficiently.
          </p>
        }
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
    )
  }
}


export default List;
