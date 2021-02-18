import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import "./App.css";
import users from "./db/user.json";
// console.log(users);
import statData from "./db/statistical-data.json";
// console.log(statData);
import friendsData from "./db/friends.json";
// console.log(friendsData);
import items from "./db/transactions.json";
console.log(items);

function App() {
  const { name, tag, location, avatar, stats } = users;
  return (
    <div className="App">
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics db={statData} />
      <FriendList db={friendsData} />
      <TransactionHistory db={items} />
    </div>
  );
}

export default App;
