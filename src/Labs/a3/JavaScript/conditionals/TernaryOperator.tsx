function TeneraryOperator() {
    let loggedIn = true;
    let TeneraryOperator = true;
    let NotShown = false;
    return(
       <div>
          <h2>Logged In</h2>
          { loggedIn ? <p>Welcome</p> : <p>Please login</p> }
          <h2>TeneraryOperator</h2>
          { TeneraryOperator ? <p>Hello TeneraryOperator</p> : <p>It is false</p> }
          { NotShown ? <p>Show if true</p> : <p>It is false</p> }
       </div>
    )
}

export default TeneraryOperator