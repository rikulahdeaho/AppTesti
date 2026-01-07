import { StyleSheet, FlatList, Pressable } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

import { Text, View } from '@/components/Themed';

const OPTIONS = ['1 Minute', '2 Minutes', '3 Minutes', '4 Minutes', '5 Minutes', 'Never'];

export default function OptionsScreen() {
  const { title } = useLocalSearchParams();
  const [selected, setSelected] = useState('1 Minute');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        data={OPTIONS}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />}
        renderItem={({ item }) => (
          <Pressable style={styles.row} onPress={() => setSelected(item)}>
            <Text style={styles.rowText}>{item}</Text>
            <Text style={styles.check}>{selected === item ? '✓' : ''}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    paddingBottom: 12,
  },
  row: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowText: {
    fontSize: 16,
  },
  check: {
    fontSize: 18,
    color: '#0a84ff',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
  },
});