import { useEffect, useState } from "react";

export default function Contador() {
    const [timeLeft, setTimeLeft] = useState({});

    const fechaObjetivo = "2025-09-18T00:00:00";
    const finalMensaje = "🎉 ¡Feliz 18 de Septiembre! 🥳";
   
    useEffect(() => {
        // Fecha objetivo
        const targetDate = new Date(fechaObjetivo).getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({ finished: true });
            } 
            else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    if (timeLeft.finished) {
        return <h1 className="text-center text-3xl font-bold mt-5">{finalMensaje}</h1>; 
    }

    return (
        <div id="contador">
            <div className="text-center text-xl font-bold"> 
                <p>
                    {timeLeft.days} días 
                </p>
                <h2>
                    {timeLeft.hours} horas {timeLeft.minutes} minutos {timeLeft.seconds} segundos
                </h2>
            </div>
        </div>
    );
}
