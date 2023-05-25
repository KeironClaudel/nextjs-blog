import React from 'react';

const Clock = () => {

    // **** Variable para manipular el tiempo más adelante *** //
    const d = new Date();

    const [currentTime, setCurrentTime] = React.useState('');


    // ** Funcion para el reloj ** //
    React.useEffect(() => {

        /// 
        // Para que el reloj funcione, es necesario implementar *UNA SOLA LINEA DE CODIGO* en la que se obtengan las horas, minutos y segundos
        // anteriormente en el codigo se definió una variable tipo New Date, debe hacer uso de ella.
        // Imaginese un reloj en la vida real e intente concatenar esa imagen fisica, en el codigo por ejemplo (16:45:00).
        // En el PDF del taller se dará la solución en caso de no lograrlo.
        ///
        
        // Escribe la linea de codigo bajo este comentario, pista: const date: ??????


        
        const timer = setInterval(() => {
            setCurrentTime(date);
        }, 1000);

        return () => clearInterval(timer);
    }, [currentTime]);

    return <>{currentTime}</>;
};


// Exportar vista estilizada
export default function Home() {
    return (
        <>
            <main>
                <h1>
                    <Clock />
                </h1>
            </main>
            <style jsx>{`
                main {
                    position: absolute;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    left: 50%;
                    font-family: 'sans-serif';
                }
            `}</style>
        </>
    );
}
