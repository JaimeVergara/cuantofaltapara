import { useEffect, useState } from "react";

// Calcula cuánto falta para la próxima vez que llegue el día (mes/dia).
// Si la fecha de este año ya pasó, cuenta hacia la del año siguiente,
// así el contador funciona todos los años sin cambiar el código.
// Durante el mismo día del evento se muestra el mensaje de celebración.
function calcularTiempo(mes, dia) {
    const now = new Date();
    const anio = now.getFullYear();
    const inicioDia = new Date(anio, mes - 1, dia);
    const finDia = new Date(anio, mes - 1, dia + 1);

    if (now >= inicioDia && now < finDia) {
        return { finished: true };
    }

    const targetDate = now < inicioDia ? inicioDia : new Date(anio + 1, mes - 1, dia);
    const difference = targetDate - now;

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
}

export default function Contador({ id, mes, dia, finalMensaje }) {
    const [timeLeft, setTimeLeft] = useState(() => calcularTiempo(mes, dia));

    useEffect(() => {
        setTimeLeft(calcularTiempo(mes, dia));
        // El intervalo sigue corriendo: al terminar el día del evento
        // vuelve a contar automáticamente hacia el próximo año.
        const interval = setInterval(() => {
            setTimeLeft(calcularTiempo(mes, dia));
        }, 1000);
        return () => clearInterval(interval);
    }, [mes, dia]);

    if (timeLeft.finished) {
        return <h1 className="text-center text-3xl font-bold mt-5">{finalMensaje}</h1>;
    }

    return (
        <div id={id}>
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
