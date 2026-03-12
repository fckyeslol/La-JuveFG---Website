type ActionCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function ActionCard({
  title,
  description,
  icon,
}: ActionCardProps) {
  return (
    <article className="feature-card">
      <div className="feature-icon-wrap">
        <span className="feature-icon">{icon}</span>
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-text">{description}</p>
    </article>
  );
}