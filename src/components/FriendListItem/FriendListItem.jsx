import styles from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friend}>
      <img className={styles.avatar} src={avatar} alt={`${name} avatar`} />
      <p className={styles.name}>{name}</p>
      <p
        className={clsx(
          styles.status,
          isOnline ? styles.online : styles.offline
        )}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
