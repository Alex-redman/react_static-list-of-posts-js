import './UserInfo.scss';

export const UserInfo = ({ comment }) => (
  <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
    {comment.email}
  </a>
);
