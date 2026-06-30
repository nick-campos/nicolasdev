import { useLocation } from "react-router-dom";

interface ScrollProgressProps {
    isDark: boolean
}

export default function ScrollProgress({ isDark }: ScrollProgressProps) {
    const location = useLocation();

    const pageOrder = ['/', '/about', '/projects', '/findme'];
    const indexAtual = pageOrder.indexOf(location.pathname);

    const scrollProgress = indexAtual !== -1 
        ? ((indexAtual + 1) / pageOrder.length) * 100 
        : 0;

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