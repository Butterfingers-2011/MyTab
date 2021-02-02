import React from 'react'
import {connect} from 'react-redux'
import {_loadAFriend} from '../../store/friends/friends'

class Friend extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.loadFriend(
      this.props.user.id,
      this.props.location.state.friend.Friends.friendId
    )
  }
  render() {
    const friend = this.props.location.state.friend
    return (
      <div className="friend-individual">
        <h4>
          {friend.firstName} {friend.lastName}
        </h4>
        <h5>{friend.email}</h5>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadFriend: (userId, friendId) => dispatch(_loadAFriend(userId, friendId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Friend)
