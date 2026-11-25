import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Cabecalho } from '../components/Cabecalho';
import { Rodape } from '../components/Rodape';
import styles from './MapasPage.module.css';

const PONTOS_EXEMPLO = [
    {
        id: 1,
        nome: 'Estação Canoas / La Salle',
        endereco: 'Av. Victor Barreto, Centro - Canoas',
        linhas: '5000 Mathías Velho, 5100 Laranjeiras, TM1 Transversal',
        coords: [-29.9189, -51.1825],
    },
    {
        id: 2,
        nome: 'ParkShopping Canoas',
        endereco: 'Av. Farroupilha, 4545 - Marechal Rondon',
        linhas: '5202 São José, 5304 Guajuviras',
        coords: [-29.9122, -51.1631],
    },
];

export function MapasPage() {
    // 1. Refs para o elemento DOM do mapa e para a instância do Leaflet
    const mapContainerRef = useRef(null);
    const mapInstanceRef = useRef(null);

    // 2. Estados para busca e ponto selecionado
    const [busca, setBusca] = useState('');
    const [pontoSelecionado, setPontoSelecionado] = useState(null);

    // 3. Inicializa o mapa quando a página monta
    useEffect(() => {
        if (!mapContainerRef.current || mapInstanceRef.current) return;

        const map = L.map(mapContainerRef.current).setView([-29.9189, -51.1782], 14);
        mapInstanceRef.current = map;

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

        PONTOS_EXEMPLO.forEach((ponto) => {
            const marker = L.marker(ponto.coords).addTo(map);
            marker.on('click', () => {
                setPontoSelecionado(ponto);
                map.flyTo(ponto.coords, 16);
            });
        });

        return () => {
            map.remove();
            mapInstanceRef.current = null;
        };
    }, []);

    return (
        <div className={styles.paginaMapasWrapper}>
            <Cabecalho variante="usuario" />
            <main className={mapaArea}>
                {/* 4. Liga esta div ao useRef */}
                <div
                    id="mapa"
                    ref={mapContainerRef}
                    aria-label="Mapa de Canoas"
                    style={{ width: '100%', height: '500px' }}
                />

                <section className={styles.mapaBusca} aria-labelledby="titulo-busca">
                    <h2 id="titulo-busca">Para onde vamos?</h2>
                    <p>Explore os pontos de Canoas.</p>

                    <label htmlFor="busca-mapa">Buscar ponto ou linha</label>
                    <input
                        id="busca-mapa"
                        type="search"
                        placeholder="Buscar ponto ou linha"
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                    />
                </section>

                {pontoSelecionado && (
                    <section
                        id="detalhes-ponto"
                        className={mapaDetalhes}
                        aria-labelledby="nome-ponto"
                    >
                        <button
                            id="fechar-detalhes"
                            type="button"
                            onClick={() => setPontoSelecionado(null)}
                        >
                            Fechar
                        </button>

                        <p>Ponto de ônibus</p>
                        <h2 id="nome-ponto">{pontoSelecionado.nome}</h2>
                        <p id="endereco-ponto">{pontoSelecionado.endereco}</p>
                        <p id="linhas-ponto">{pontoSelecionado.linhas}</p>
                    </section>
                )}
            </main>
            <Rodape />
        </div>
    );
}

export default MapasPage;