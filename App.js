import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Pressable,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const regiaoInicial = {
    // Estado de SP
    latitude: -23.533773,
    longitude: -46.65529,
    // latitudeDelta: 0.09,
    // longitudeDelta: 0.0421,
    latitudeDelta: 10,
    longitudeDelta: 10,
  };

  /* Usando state para controlar a localização*/
  const [localizacaoClicada, setLocalizacaoClicada] = useState();

  const marcarLocal = (event) => {
    setLocalizacaoClicada({
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });

    console.log(localizacaoClicada);
  };

  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView
          style={estilos.mapa}
          region={localizacaoClicada ?? regiaoInicial}
          liteMode={false}
          mapType="standard"
          userInterfaceStyle="dark"
          onPress={(e) =>
            setLocalizacaoClicada({
              ...localizacaoClicada, // o spred (...) junta os dados
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            })
          }
        >
          {localizacaoClicada && (
            <Marker
              coordinate={localizacaoClicada}
              title="Aqui!!!"
              onPress={(e) => console.log(e.nativeEvent)}
            />
          )}

          {/* <Image source={require("./assets/iconeMarcador.png")} /> */}
        </MapView>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  mapa: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
});
