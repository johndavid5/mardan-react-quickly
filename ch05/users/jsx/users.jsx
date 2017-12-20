class Users extends React.Component {

  constructor(props){
    super(props);
	// Make it easy on yourself...initialize
    // state with "blanks" so you won't have
	// to have conditional, error-prone code
    // later...
    this.state = { users: [] };
  }/* constructor() */

  componentDidMount(){

    let url = this.props['data-url'];
	const sWho = "Users::componentDidMount";

    console.log(`${sWho}(): doing fetch(${url})...`);
    fetch(this.props['data-url'])
    .then((response)=>{
       console.log(`${sWho}(): Got response=`, response);
       return response.json();
	}
	)
    .then((users)=>{
        console.log(`${sWho}(): Got users = `, users );
		this.setState({users: users})}
	)
    .catch((err)=>{alert(`${sWho}: Error during fetch: ${err}`)});
  }

  render(){
    return <div className="container">
    <h1>List of Users</h1>
    <table className="table-striped table-condensed table table-bordered table-hover">
      <tbody>{this.state.users.map((user)=>
        <tr key={user.id}>
          <td>{user.first_name} {user.last_name}</td>
          <td>{user.email}</td>
          <td>{user.ip_address}</td>
        </tr>)}
      </tbody>
     </table>
    </div>
  }

}/* class Users */
