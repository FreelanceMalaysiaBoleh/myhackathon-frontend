import Map, { Marker, Popup } from "react-map-gl";

import { useState } from "react";

const MapboxMap = () => {
    const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAP_GL_TOKEN;

    const markers = [
        { id: 1, longitude: 101.6869, latitude: 3.139, label: "Kuala Lumpur" },
        { id: 2, longitude: 110.3592, latitude: 1.5533, label: "Kuching" },
    ];

    const [popupInfo, setPopupInfo] = useState<{ id: number; longitude: number; latitude: number; label: string; } | null>(null);

    return (
        <div style={{ height: "500px", width: "100%", maxWidth: "1011px" }}>
            <Map
                initialViewState={{
                    longitude: 109.0919,
                    latitude: 4.2105,
                    zoom: 5,
                }}
                style={{ width: "100%", height: "100%" }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxAccessToken={MAPBOX_TOKEN}
            >
                {markers.map((marker) => (
                    <Marker
                        key={marker.id}
                        longitude={marker.longitude}
                        latitude={marker.latitude}
                        anchor="bottom"
                        onClick={(e) => {
                            e.originalEvent.stopPropagation();
                            setPopupInfo(marker);
                        }}
                    >
                        <div style={{ color: "red", cursor: "pointer" }}>📍</div>
                    </Marker>
                ))}

                {popupInfo && (
                    <Popup
                        longitude={popupInfo.longitude}
                        latitude={popupInfo.latitude}
                        anchor="top"
                        onClose={() => setPopupInfo(null)}
                    >
                        {popupInfo.label}
                    </Popup>
                )}
            </Map>
        </div>
    );
};

export default MapboxMap;