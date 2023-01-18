import { StyleSheet, Text, View, StatusBar } from "react-native";
import MapView from "react-native-maps";

export default function App() {
  const regiaoInicial = {
    latitude: -10,
    longitude: -55,
    // latitudeDelta: 0.09,
    // longitudeDelta: 0.0421,
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
          mapType="standard" // satellite, hybrid, standard
          userInterfaceStyle="dark" // somente IOS
          maxZoomLevel={15}
          minZoomLevel={5}
        />
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
