import {
  ADD_FRIEND_ERROR,
  ADD_FRIEND_SUCCESS,
  DELETE_FRIEND,
  GET_FRIENDS,
  INVITE_FRIEND,
  INVALID_EMAIL,
} from './friendTypes'

/* ACTION CREATORS */
export const getFriends = (friends) => ({
  type: GET_FRIENDS,
  friends: friends,
})

export const addFriendSuccess = (friend) => ({
  type: ADD_FRIEND_SUCCESS,
  friend,
})

export const addFriendError = (error) => ({
  type: ADD_FRIEND_ERROR,
  error: error,
})

export const inviteFriend = (email) => ({
  type: INVITE_FRIEND,
  error: `${email} no in database`,
})

export const invalidEmail = (email, error) => ({
  type: INVALID_EMAIL,
  error: error,
  // make alert to notify user this isn't valid email address
})

export const deleteFriend = (friendId) => ({
  type: DELETE_FRIEND,
  friendId,
})