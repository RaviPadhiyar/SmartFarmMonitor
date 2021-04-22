import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <iframe title='moisture' width={450} height={260} style={{border: '1px solid #cccccc'}} src="https://thingspeak.com/channels/1349067/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15" />
      <iframe title='humidity' width={450} height={260} style={{border: '1px solid #cccccc'}} src="https://thingspeak.com/channels/1349067/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Humidity&type=line" />
      <iframe title='temp' width={450} height={260} style={{border: '1px solid #cccccc'}} src="https://thingspeak.com/channels/1349067/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Temperature&type=line" />
      <hr/>
      <hr/>
      <div className='container'>
        <h2>Current Reading</h2>
      </div>
    </div>
  );
}

export default App;
