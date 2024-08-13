import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { memo, useCallback, useState } from 'react';



const center = {
    lat: -29.72434425354004,
    lng: -49.996089935302734,
};


function MyComponent() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map: any) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map: any) {
        setMap(null)
    }, [])

    return isLoaded ? (
        /* @ts-ignore */
        <GoogleMap
            mapContainerClassName='w-full h-96'
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker position={center} />
            <></>
        </GoogleMap>
    ) : <></>
}

export default memo(MyComponent)