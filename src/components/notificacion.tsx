import { Toaster, toast } from 'react-hot-toast';

const Notificacion = (props) => {
  return (
    <div style={{ padding: 20 }}>
      <h1>Ejemplo npm en React</h1>

      <button onClick={() => toast(props.mensaje)}>
        Mostrar notificación
      </button>

      <Toaster />
    </div>
  );
}

export default Notificacion;