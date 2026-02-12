import { useEffect, useState} from 'react';
import { Link} from 'react-router-dom';
import lago from '../utils/lago.jpg';

interface AdviceData {
  slip: {
    id: number;
    advice: string;
  };
}

function Home() {
  const [advice, setAdvice] = useState<string>("Loading inspiration...");

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then((data: AdviceData) => {
      setAdvice(data.slip.advice);
    })
    .catch(() => {
      setAdvice("Breathe deep and keep going"); // Mensaje por defecto en caso de error
    });
  }, []);

  // Estilos para la tarjetas de categorías
  const cardStyle = {
    padding: '40px 30px',
    backgroundColor: 'var(--bg-card)', 
    borderRadius: '16px', 
    textDecoration: 'none',
    color: 'var(--text-primary)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '220px',
    border: '1px solid var(--border-color)', 
    cursor: 'pointer',
    textAlign: 'center' as const,
    position: 'relative' as const, 
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };    


  return (
    <div style={{
      position: 'relative',
      backgroundImage: `url(${lago})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'hidden'
    }}>

{/* Mejora del contraste con un overlay. Permite la lectura del texto blanco sobre el fondo */}
      <div className="home-overlay"
        style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 0
      }}></div>
      
      {/* Blob Orgánico Superior (Teal más oscuro) */}
      <div className="organic-blob" style={{
        top: '-150px', left: '-150px', 
        width: '500px', height: '500px',
        backgroundColor: 'var(--color-secondary)',
        opacity: 0.4
      }}></div>

      {/* Esquina inferior derecha: Coral */}
      <div className="organic-blob" style={{
        bottom: '-150px', right: '-150px', 
        width: '600px', height: '600px',
        backgroundColor: 'var(--color-accent)',
        animationDelay: '-5s' // Para que se mueva a destiempo
      }}></div>


      {/* Contenido Principal */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '80px 20px' }}>
      
      {/* Bienvenida y API de Frases */}
      <div className="animate-entry" 
      style={{ 
        textAlign: 'center', 
        marginBottom: '60px',
        maxWidth: '800px'}}>
        <h1 style={{ 
          color: 'var(--color-neutral-white)', 
          fontSize: '3.5rem', 
          fontWeight: '600',
          textShadow: '0 2px 10px rgba(0,0,0,0.2)',
          margin: 0,
          lineHeight: '1.2',
          letterSpacing: '-0.5px'
          }}>
          Your safe space to find wellness and mental health tools.
          </h1>
          </div>

        {/* Tarjeta de la Frase del Día. Entra segundo con 0.5s delay*/}
        <div className="animate-entry"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(15px)',
          padding: '40px',
          borderRadius: '16px',
          maxWidth: '700px',
          width: '100%',
          marginBottom: '100px',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          textAlign: 'center',
          color: 'var(--color-neutral-white)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          animationDelay: '0.5s' 
        }}>
          <p style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            fontFamily: 'var(--font-heading)',
            fontWeight: '300',
            margin: 0
          }}>
            "{advice}"
          </p>
      </div>

      {/* Categorías*/}

      <div style={{ width: '100%', maxWidth:'1000px', textAlign: 'center' }}>
          {/* Entra tercero con 0.8s delay */}
        <h3 style={{
          color: 'var(--color-accent)', 
          marginBottom: '50px', 
          textAlign: 'center',
          fontWeight: '700',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontSize: '1.1rem',
          textShadow: '0 2px 10px rgba(0,0,0,0.2)',
          animationDelay: '0.8s'
        }}>
          Start your journey
        </h3>
{/*Línea conectora para las tarjetas*/}
          <svg 
            className="animate-entry"
            style={{
              position: 'absolute',
              top: '65%', 
              left: '0',
              width: '100%',
              height: '200px',
              zIndex: 0, // Detrás de las tarjetas
              pointerEvents: 'none',
              opacity: 0.6,
              transform: 'translateY(-20%)',
              animationDelay: '0.4s'
            }}
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
          >
            <path 
              d="M0,100 C250,150 750,50 1000,100" 
              fill="none" 
              stroke="var(--color-accent)" 
              strokeWidth="2" 
              strokeDasharray="10 10" // Línea punteada sutil
              opacity="0.5"
            />
          </svg>


        <div className="cards-container">
        {/* Patrón de puntos sutil */}


        {/*Tarjetas - Entran en cascada (0.4s, 0.5s, 0.6s) */}

            <Link to="/resources?category=mindfulness" style={{...cardStyle, animationDelay: '1s'}} className="hover-card animate-entry">
                  <div className="bg-pattern-dots"></div>
              <h3 style={{ color: 'var(--color-primary)', margin: '0 0 10px 0', fontSize: '1.8rem' }}>Mindfulness</h3>
              <p style={{ margin:0, color: 'var(--text-secondary)', fontSize: '1rem' }}>
                Meditation techniques and awareness.
              </p>
            </Link>

            <Link to="/resources?category=exercise" style={{...cardStyle, animationDelay: '1s'}} className="hover-card animate-entry">
                  <div className="bg-pattern-dots"></div>
              <h3 style={{ color: 'var(--color-primary)', margin: '0 0 10px 0', fontSize: '1.8rem' }}>Physical Exercise</h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1rem' }}>
                Activate your body to heal your mind.
              </p>       
            </Link>

            <Link to="/resources?category=nutrition" style={{...cardStyle, animationDelay: '1s'}} className="hover-card animate-entry">
                  <div className="bg-pattern-dots"></div>
              <h3 style={{ color: 'var(--color-primary)', margin: '0 0 10px 0', fontSize: '1.8rem' }}>Nutrition</h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1rem' }}>
                Healthy eating for a healthy brain.
              </p>
            </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
