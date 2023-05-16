import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';

export default function AddressMap() {

    return (
        <YMaps apikey={'e825584a-4146-46a9-8d46-07a5cb38224f'}>
            <div>
                <Map width={'100%'} height={'734px'} defaultState={{ center: [54.574132, 54.536865], zoom: 18 }}>
                    <Placemark geometry={[54.574168, 54.538491]} />
                </Map>
            </div>
        </YMaps>
    )
}
