import React from "react";
import Login from "../components/pages/Login";
import Chats from "../components/pages/Chats";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../context/authContext";

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chats} />  
            <Route path="/" component={Login} /> 
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
