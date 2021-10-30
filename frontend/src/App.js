import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Management Tool</h1>
        <img src="img/logo512.png" alt="Logo" width="128" height="128" />
        <div className="buttons">
        <a>
          <span class="text">Sign Up</span>
          <span class="line -right"></span>
          <span class="line -top"></span>
          <span class="line -left"></span>
          <span class="line -bottom"></span>
        </a>
        <a>
          <span class="text">Login</span>
          <span class="line -right"></span>
          <span class="line -top"></span>
          <span class="line -left"></span>
          <span class="line -bottom"></span>
        </a>
        </div>
      </div>
    </div>
  );
}

export default App;
