import React, { Component } from 'react';


class Sql extends Component {

  state = {
    users: [],
    user: {
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    this.getuser();
  }

  getUser = _ => {
    fetch('http://localhost:4000/users')
    .then(response => response.json())
    .then(response => this.setState({users: response.data}))
    .catch(err => console.error(err))
  }

  addUsers = _ => {
    const {user} = this.state;
    fetch(`http://localhost:4000/users/add?email=${user.email}&password=${user.password}`)
      .then(this.getUser)
      .catch(err => console.error(err))
  }

  renderUsers = ({users_id, email, password}) => <div key={users_id}>{users_id} - {email}: {password}</div>;

  render() {
    const {users, user} = this.state;
    return (
      <div className="App">
       {users.map(this.renderUsers)}
       <div>
         email: 
         <input 
           value={user.email} 
           onChange={e => this.setState({user: {...user, email: e.target.value}})} /> 
            | password: 
         <input 
           value={user.password}
           onChange={e => this.setState({user: {...user, password: e.target.value}})} />
           <button onClick={this.addusers}>Add</button>
         </div>
      </div>
    );
  }
}

export default Sql;
