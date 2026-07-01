import { useLocation } from "react-router-dom";

interface ScrollProgressProps {
    isDark: boolean
}

//Componente funcional principal
export default function ScrollProgress({ isDark }: ScrollProgressProps) {

    // Hook que retorna informações da rota atual (URL)
    const location = useLocation();

    // Define a ordem lógica das páginas do site
    const pageOrder = ['/', '/about', '/projects', '/findme'];

    // Descobre em qual posição da lista está a página atual
    const indexAtual = pageOrder.indexOf(location.pathname);

    // Calcula o progresso em porcentagem baseado na posição atual
    // Se não encontrar a rota, retorna 0%
    const scrollProgress = indexAtual !== -1 
        ? ((indexAtual + 1) / pageOrder.length) * 100 
        : 0;

    // Renderização do componente
    return (
        <div 
            className='absolute left-0 w-full h-1 bg-black/15 z-[9999] top-16 block md:hidden'>
            <div
                style={{
                    height: "100%",
                    width: `${scrollProgress}%`,
                    backgroundColor: isDark ? '#F5A623' : '#3B82F6',
                    transition: 'width 0.4s ease-in-out',
                }}
            />
        </div>
    );
}