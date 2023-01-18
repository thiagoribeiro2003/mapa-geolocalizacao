import { StyleSheet, Text, View, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const regiaoInicial = {
    latitude: -10,
    longitude: -55,
    // latitudeDelta: 0.09,
    // longitudeDelta: 0.0421,
    latitudeDelta: 10,
    longitudeDelta: 10,
  };

  const localizacao = {
    latitude: -33.861886,
    longitude: -63.987,
    latitudeDelta: 10,
    longitudeDelta: 10,
  };

  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView
          style={estilos.mapa}
          initialRegion={regiaoInicial}
          liteMode={false} // somente Android
          mapType="satellite" // satellite, hybrid, standard
          userInterfaceStyle="dark" // somente IOS
          // maxZoomLevel={15}
          // minZoomLevel={1}
        >
          <Marker
            coordinate={localizacao}
            title="Aqui!!!"
            draggable
            onPress={(event) => {
              console.log(event.nativeEvent);
            }}
          />
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
