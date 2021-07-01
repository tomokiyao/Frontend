import './App.css';

function App({ message, title }) {
  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <p className="subtitle">{title}</p>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;
