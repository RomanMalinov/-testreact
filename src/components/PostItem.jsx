import MyButton from "./UI/button/MyButton";

const PostItem = function (props) {
  return (
    <div>
      <div className="post">
        <div className="post__container">
          <strong>
            {props.number}.{props.post.title}
          </strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__buttons">
          <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
