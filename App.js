import React, {Suspense} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {Canvas} from "@react-three/fiber/native";
import Box from './src/components/Box'
import ReactModel from "./src/components/ReactModel";

export default function App() {
  return (
    <View style={styles.container}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />

        <Suspense fallback={null}>
          <ReactModel position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
