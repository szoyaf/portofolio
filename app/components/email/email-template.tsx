interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>
        <strong>From Email:</strong> {email}
      </p>
      <p>{message}</p>
    </div>
  );
}
