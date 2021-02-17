import "./App.css";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import users from "./db/user.json";
const { name, tag, location, avatar, stats } = users;

// console.log(users);

function App() {
  return (
    <div className="App">
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </div>
  );
}

export default App;
