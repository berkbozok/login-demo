function LogoAndTitle() {
    const styles = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    };
    return (
      <div className="loginImg" style={styles}>
        <br/>
        <img
          src="https://i.imgur.com/co3jxYH.png"
          alt="Trulli"
          width="200"
          height="200"
        ></img>
        <h1>Welcome To Sky Source</h1>
        <h2>Log in</h2>
        <br/>
      </div>
    );
  }
  
  export default LogoAndTitle;
  