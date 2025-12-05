function LoadingSpinner() {
    return (
        <div style={{ 
      padding: '40px', 
      textAlign: 'center', 
      color: '#4a5568',
      backgroundColor: '#f7fafc',
      borderRadius: '8px',
      margin: '20px 0'
    }}>
      <div style={{ fontSize: '2rem', marginBottom: '10px' }}>⏳</div>
      <p style={{ margin: 0, fontWeight: 500 }}>Cargando contenido...</p>
    </div>   
    );
}

export default LoadingSpinner;