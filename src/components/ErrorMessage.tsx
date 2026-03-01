interface ErrorMessageProps {
  message: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="status-box status-box--error">
      <strong>Error:</strong> {message}
    </div>
  );
}

export default ErrorMessage;
