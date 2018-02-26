import React from 'react';
import ReactDOM from 'react-dom';
import WorkoutApp from './components/WorkoutApp.js';

var config = {
  apiKey: "AIzaSyA9Y13gS8bS_8I-gq-QFr-rYw74gsSP6Vo",
  authDomain: "fitnessproject-c9f5e.firebaseapp.com",
  databaseURL: "https://fitnessproject-c9f5e.firebaseio.com",
  projectId: "fitnessproject-c9f5e",
  storageBucket: "fitnessproject-c9f5e.appspot.com",
  messagingSenderId: "947397936558"
};
firebase.initializeApp(config);




class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      loggedIn: false,
      user: {},
      userText: ''
    }
    this.signOut = this.signOut.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addText = this.addText.bind(this);
  }
  
  componentDidMount() {
   
    firebase.auth().onAuthStateChanged((res) => {
      console.log(res);
      if (res) {
        this.setState({
          loggedIn: true,
          user: res
        })
      } else {
        this.setState({
          loggedIn: false,
          user: {}
        })
      }
    })
  }

  signIn() {
    console.log('signed in');
    const provider = new firebase.auth.GoogleAuthProvider();

    provider.setCustomParameters({
      prompt: 'select_account'
    })

    firebase.auth().signInWithPopup(provider)
      .then((user) => {
        console.log(user);
      })

  }

  signOut() {
    console.log('signed out');
    firebase.auth().signOut();

    // this.setState({
    //   loggedIn: false
    // })
  }

  handleChange(e) {
    console.log(e.target.value);

    this.setState({
      [e.target.id]: e.target.value

    })
  }

  addText(e) {
    e.preventDefault();
    console.log('form submited');

    const dbRef = firebase.database().ref(`users/${this.state.user.uid}`);

    dbRef.push(this.state.userText);

    this.setState({
      userText: ''
    })
  }

  render() {
    return (
      <div>
        <header className="workoutAppHeader">
          <div className="workoutAppHeader__wrapper">
            <div className="workoutAppHeader__imageWrapper">
              <img src="/dev/assets/logo.png" alt=""/>
            </div>
            <h1 className="workoutAppHeader__title">Fitness Daily</h1>
          </div>
        </header>
        <div className="workoutAppAuth">
          <div className="workoutAppAuth__wrapper">
            {this.state.loggedIn ?
              <div className="workoutAppAuth__content">
                <h2 className="workoutAppAuth__title">Welcome, {this.state.user.displayName}</h2>
                <form
                  action=""
                  onSubmit={this.addText}
                >
                  <button className="workoutAppAuth__signout"
                    onClick={this.signOut}>
                      Sign Out
                  </button>
                </form>
              </div>
              :
              <div>
                <h2 className="workoutAppAuth__signInTitle">Sign in</h2>
                <button
                  className="workoutAppAuth__signInButton" 
                  onClick={this.signIn}>Sign in
                </button>
              </div>
            }
          </div>
        </div>
        <main className="workoutAppMain">
          <div className="workoutAppMain__wrapper">
            <WorkoutApp />
          </div>
        </main>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
