import React, { Component } from 'react'
import '../App.css';

 class Home extends Component {
   constructor(props){
    super(props);
    this.state={
      age:20,
      status:0,
      homeLink:[],

    };
    setTimeout(() => {
 
      this.setState({
        status:1
      })
    }, 3000);
   }
   
// render edilmeden önce çağırılır
  componentWillMount(){
    console.log("Component will mount");
  }
  
  componentDidMount(){
    console.log("Component Dip Mount")
  }

  componentWillReceiveProps(nextProps){
    console.log("Component wiil Receive",nextProps)
  }

  componentWillUpdate(nextProps,nextState){
    
   console.log("compnent will update",nextProps,nextState)
  }

  componentWillUnmount(){
    console.log("Component Will Unmount");
  }

   shouldComponentUpdate(nextProps,nextState){

    console.log("compnent should update",nextProps,nextState)
    if(nextState.status === 1){
      return false;
    }
    return true;
   }

   onMakeOlder = () => {
     this.setState({
       age:this.state.age + 3
     })
   }

   onChangeHandle= (e) =>{

    this.setState({
      homeLink:e.target.value
    })

   }


  render() {

    console.log("render")

    return (
      <div className="home">
        <p>Home Welcome</p>
        <p>Your name is : {this.props.name} ----- your age is : {this.state.age}</p>
        <p>Status : {this.state.status }</p>
        <p>User Object : {this.props.user.name}</p>
        <div>
          <h3>Hobbies</h3>
          <ul>
            {this.props.user.hobbies.map((hoby,i)=> <li key={i}>{hoby}</li>)}
          </ul>
        </div>
        <button onClick={() => this.onMakeOlder()} >Make me Older</button>
        <br/><br/>
        <input type="text" onChange={(e) => this.onChangeHandle(e)}/>
        <p>{this.state.homeLink}</p>

      </div>
    )
  }
}

export default Home;
