import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, Animated, Easing, Pressable, FlatList } from 'react-native';

import { Text, View } from '@/components/Themed';

const DATA = [
  { id: '1', title: 'First' },
  { id: '2', title: 'Second' },
  { id: '3', title: 'Third' },
];

export default function TabTwoScreen() {
  const scale = useRef(new Animated.Value(1)).current;
  const [running, setRunning] = useState(true);
  const pulseAnimRef = useRef<Animated.CompositeAnimation | null>(null);

  // pulssi-loop
  useEffect(() => {
    const anim = Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.15,
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );
    pulseAnimRef.current = anim;
    if (running) anim.start();
    return () => anim.stop();
  }, [scale, running]);

  useEffect(() => {
    if (running) pulseAnimRef.current?.start();
    else pulseAnimRef.current?.stop();
  }, [running]);

  // listan slide-in animaatiot
  const itemAnims = useRef(DATA.map(() => new Animated.Value(0))).current;
  useEffect(() => {
    Animated.stagger(
      120,
      itemAnims.map(a =>
        Animated.timing(a, {
          toValue: 1,
          duration: 400,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        })
      )
    ).start();
  }, [itemAnims]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Animations Demo</Text>

      <Animated.View
        style={[
          styles.pulse,
          {
            transform: [{ scale }],
            opacity: scale.interpolate({ inputRange: [1, 1.15], outputRange: [1, 0.85] }),
          },
        ]}
      />

      <Pressable style={styles.button} onPress={() => setRunning(r => !r)}>
        <Text style={styles.buttonText}>{running ? 'Pause' : 'Start'}</Text>
      </Pressable>

      <FlatList
        data={DATA}
        keyExtractor={i => i.id}
        style={{ width: '100%' }}
        contentContainerStyle={styles.list}
        renderItem={({ item, index }) => {
          const a = itemAnims[index];
          return (
            <Animated.View
              style={[
                styles.listItem,
                {
                  opacity: a,
                  transform: [
                    {
                      translateY: a.interpolate({ inputRange: [0, 1], outputRange: [20, 0] }),
                    },
                  ],
                },
              ]}
            >
              <Text style={styles.itemText}>{item.title}</Text>
            </Animated.View>
          );
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 40 },
  title: { fontSize: 20, fontWeight: 'bold' },
  pulse: {
    width: 120,
    height: 120,
    borderRadius: 999,
    backgroundColor: '#4f46e5',
    marginTop: 20,
    marginBottom: 16,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#e6e6e6',
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: { fontWeight: '600' },
  list: { paddingHorizontal: 16, paddingTop: 8 },
  listItem: {
    backgroundColor: 'transparent',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
  },
  itemText: { fontSize: 16 },
  separator: { marginVertical: 18, height: 1, width: '80%' },
});
