import Profile from "./components/Profile/Profile";
import userData from "./JSON/userData.json";
import friends from "./JSON/friends.json";
import FriendList from "./components/FriendList/FriendList";
import transactions from "./JSON/transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
