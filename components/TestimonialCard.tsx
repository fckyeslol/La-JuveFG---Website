type TestimonialCardProps = {
  name: string;
  role: string;
  text: string;
};

export default function TestimonialCard({
  name,
  role,
  text,
}: TestimonialCardProps) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-quote">“</div>
      <p className="testimonial-text">{text}</p>

      <div className="testimonial-footer">
        <h4 className="testimonial-name">{name}</h4>
        <p className="testimonial-role">{role}</p>
      </div>
    </article>
  );
}