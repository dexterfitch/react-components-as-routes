import React from 'react';

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <h1>Signup!</h1>
        <form>
          <div>
            <label htmlFor="username">Username</label><br />
            <input type="text" name="username" placeholder="Username" />
          </div>
          <br />
          <div>
            <label htmlFor="password">Password</label><br />
            <input type="password" name="password" placeholder="Password" />
          </div>
          <br />
          <input type="submit" value="Signup" />
        </form>
      </div>
    )
  }
}