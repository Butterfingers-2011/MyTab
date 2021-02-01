import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
//  */
export const UserHome = (props) => {
  const {email} = props
  // const splitting = () => {
  //   let total = parseInt(document.querySelector('#total').value);
  //   let people = parseInt(document.querySelector('#people').value);
  //   let tipPercent = document.querySelector('#tipPercent')

  //   if (tipPercent.value !== "") {
  //     let calcPercent = parseInt(tipPercent.value)
  //     const totalWithTip = total + (calcPercent * total) / 100;
  //     document.querySelector('#perPerson').innerHTML = (totalWithTip / people).toFixed(2);
  //   }
  //   else {
  //     const result = total / people;
  //     document.querySelector('#perPerson').innerHTML = result.toFixed(2);
  //   }
  //  }

  // document.querySelector('#addTip').addEventListener('click', (e) => {
  //   e.preventDefault();
  //   showTipInput();
  // })

  // const showTipInput = () => {
  //   const tipBtns = document.querySelector('#tipInput')
  //   if (tipBtns.style.display === "block") {
  //     tipBtns.style.display = "none"
  //   } else {
  //     tipBtns.style.display = "block"
  //   }
  // }

  // const splitBtn = document.querySelector('#splitBtn')
  //   splitBtn.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     splitting();
  // })

  // document.querySelector('#resetBtn').addEventListener('click', (e) => {
  //   e.preventDefault();
  //   document.querySelector('form').reset();
  //   document.querySelector('#perPerson').innerHTML = "0"
  // })

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <div className="wrapper">
        <div className="header">MyTab</div>

        <form className="insert">
          <label id="totalL">
            <i className="fas fa-coins" /> How much?
          </label>
          <input type="number" id="total" placeholder="add the total" />

          <label id="totalL">
            <i className="fas fa-users" /> How many?
          </label>
          <input
            type="number"
            id="people"
            placeholder="add the number of people"
          />

          <label id="tipL">
            <i className="fas fa-heart" /> Feelin' generous?{' '}
            <button id="addTip">Add a tip</button>
          </label>
          <div id="tipInput">
            <input
              type="number"
              id="tipPercent"
              placeholder="add % of the total"
            />
          </div>
          <div className="buttonSpace">
            <button id="splitBtn">Split!</button>
            <button id="resetBtn">Reset</button>
          </div>
          <div id="perPerson">0</div>
        </form>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string,
}
