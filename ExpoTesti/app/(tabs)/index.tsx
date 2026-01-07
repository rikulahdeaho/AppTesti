import { StyleSheet, Pressable, FlatList } from 'react-native';
import { Link } from 'expo-router';

import { Text, View } from '@/components/Themed';

const DATA = [
  { id: '1', title: 'General' },
  { id: '2', title: 'Notifications' },
  { id: '3', title: 'Privacy' },
  { id: '4', title: 'About' },
];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        style={styles.list}
        ItemSeparatorComponent={() => (
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        )}
        renderItem={({ item }) => (
          <Link href={`/detail?title=${encodeURIComponent(item.title)}`} asChild>
            <Pressable style={styles.row}>
              <Text style={styles.rowText}>{item.title}</Text>
              <Text style={styles.rowChevron}>›</Text>
            </Pressable>
          </Link>
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
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20,
  },
  list: {
    backgroundColor: 'transparent',
  },
  row: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowText: {
    fontSize: 16,
  },
  rowChevron: {
    fontSize: 20,
    color: '#888',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
  },
});
