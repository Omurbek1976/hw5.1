import "./Comment.css";
const Comment = (props) => {
  return (
    <div className="Comment">
      <div className="Comment-img">
        <img src={props.el.author.avatarUrl} alt="images" />
        <p>{props.el.author.name}</p>
      </div>
      <div className="Comment-date">
        <p>{props.el.text}</p>
        <p>{props.el.date.toLocaleDateString()}</p>
      </div>
    </div>
  );
};
export default Comment;
