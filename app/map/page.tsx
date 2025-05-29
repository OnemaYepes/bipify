// app/map/page.tsx
export default function MapPage() {
    return (
        <iframe 
            src="/api/map" 
            style={{ width: '100%', height: '100vh', border: 'none' }}
            title="Mapa de Talleres"
        />
    );
}