import React from 'react';
import ReactDOM from 'react-dom';
import WorkoutApp from './components/WorkoutApp.js';

const config = {
  apiKey: "AIzaSyAqPJc57BgcX4zuLSC6m-OIMTzCEutOXII",
  authDomain: "workoutapp-6f6fc.firebaseapp.com",
  databaseURL: "https://workoutapp-6f6fc.firebaseio.com",
  projectId: "workoutapp-6f6fc",
  storageBucket: "",
  messagingSenderId: "296523729029"
};
firebase.initializeApp(config);



class App extends React.Component {
  
//   constructor() {
//     super();

//     this.state = {
//       loggedIn: false,
//       user: {},
//       userText: ''
//     }
//     this.signOut = this.signOut.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.addText = this.addText.bind(this);
//     this.signIn = this.signIn.bind(this);
//   }

//   componentDidMount() {
   
//   firebase.auth().onAuthStateChanged((res) => {
//     if (res) {
//       this.setState({
//         loggedIn: true,
//         user: res
//       })
//     } 
//     else {
//       this.setState({
//         loggedIn: false,
//         user: {}
//       })
//     }
//   })
// }


//   signIn() {
//     const provider = new firebase.auth.GoogleAuthProvider();

//     provider.setCustomParameters({
//       prompt: 'select_account'
//     })

//     firebase.auth().signInWithPopup(provider)
//       .then((user) => {
//       })

//   }

//   signOut() {
//     firebase.auth().signOut();

//     // this.setState({
//     //   loggedIn: false
//     // })
//   }

//   handleChange(e) {

//     this.setState({
//       [e.target.id]: e.target.value

//     })
//   }

//   addText(e) {
//     e.preventDefault();

//     const dbRef = firebase.database().ref(`${this.state.user.uid}`);

//     dbRef.push(this.state.userText);

//     this.setState({
//       userText: ''
//     })
//   }

  render() {
    return (
      <div>
        <header className="workoutAppHeader">
          <div className="workoutAppHeader__wrapper">
            <h1 className="workoutAppHeader__title">Fi<span><img src="./dev/assets/logo.png" alt="" /></span>ness <span className="workoutAppHeader__title-remove">Daily</span></h1>
          </div>
        </header>
        <main className="workoutAppMain">
          <div className="workoutAppMain__wrapper">
            <WorkoutApp />
          </div>
        </main>
      </div>  
        // <div className="workoutAppAuth">
        //   <div className="workoutAppAuth__wrapper">
        //     {this.state.loggedIn ?
        //       <div className="workoutAppAuth__content">
        //         <h2 className="workoutAppAuth__title">Welcome, {this.state.user.displayName}</h2>
        //         <form
        //           action=""
        //           onSubmit={this.addText}
        //         >
        //           <button className="workoutAppAuth__signout"
        //             onClick={this.signOut}>
        //               Sign Out
        //           </button>
        //         </form>
               
        //       </div>
        //       :
        //       <div>
        //         <h2 className="workoutAppAuth__signInTitle">Sign in</h2>
        //         <button
        //           className="workoutAppAuth__signInButton" 
        //           onClick={this.signIn}>Sign in
        //         </button>
        //       </div>
        //     }
        //   </div>
        // </div>

    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
