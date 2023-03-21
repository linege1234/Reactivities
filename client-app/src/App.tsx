import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function App() {
    const [activities, setActivities] = React.useState([]);
    React.useEffect(() => {
        //fetch대신 하는거 axios
        axios.get('http://localhost:5000/api/activities')
            .then(res => {
                console.log(res);
                setActivities(res.data);
            })
    }, [])
    //리스트들을 맵을 이용해서 컴포넌트를 사용함. 그러면 컴포넌트들이 리스트에 맞게끔 만들어줌
    //모든지 리스트를 맵을 이용해서 함수를 사용하고 싶다면, key를 만들어줘야함
  return (
    <div className="App">
      <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <ul>
                  {activities.map((activity: any) => (
                      <li key={activity.id}>{activity.title}</li>
                  )
                  )}
              </ul>
      </header>
    </div>
  );
}

export default App;
