import { UserInfo } from '../UserInfo/UserInfo';
import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{comment.name}</strong>
      {' by '}
      <UserInfo user={{ name: comment.name, email: comment.email }} />
    </div>
    <div className="CommentInfo__body">{comment.body}</div>
  </div>
);
