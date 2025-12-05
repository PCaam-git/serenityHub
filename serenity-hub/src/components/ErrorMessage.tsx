interface ErrorMessageProps {
    message: string;
}

function ErrorMessage({ message} : ErrorMessageProps) {
    return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#fff5f5', 
      border: '1px solid #feb2b2', 
      borderRadius: '8px', 
      color: '#c53030',
      margin: '20px 0',
      textAlign: 'center'
    }}>
      <strong>⚠️ Error:</strong> {message}
    </div>
    );
}

export default ErrorMessage;