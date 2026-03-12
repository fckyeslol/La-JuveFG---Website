type PartnerCardProps = {
  title: string;
  description: string;
};

export default function PartnerCard({ title, description }: PartnerCardProps) {
  return (
    <article className="partner-card">
      <h3 className="partner-title">{title}</h3>
      <p className="partner-text">{description}</p>
    </article>
  );
}