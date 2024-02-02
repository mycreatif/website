import "./style.css";

export const Avatar = ({
  title,
  subtitle,
  avatar,
}: {
  avatar: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="avatarContainer">
      <img
        width={100}
        height={100}
        src={avatar}
        alt="Avatar"
        className="avatar"
      />
      <span className="avatarTitle">{title}</span>
      <span className="avatarSubtitle">{subtitle}</span>
    </div>
  );
};
