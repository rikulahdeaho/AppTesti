import { StyleSheet, FlatList, Pressable } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';

import { Text, View } from '@/components/Themed';

const GENERAL_ITEMS = [
  { id: '1', title: 'Siri' },
  { id: '2', title: 'Spotlight Search' },
  { id: '3', title: 'Text Size' },
  { id: 'auto', title: 'Auto-Lock' },
];

export default function DetailScreen() {
  const { title } = useLocalSearchParams();
  const items = title === 'General' ? GENERAL_ITEMS : [{ id: 'x1', title: 'Option 1' }];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />}
        renderItem={({ item }) => (
          item.title === 'Auto-Lock' ? (
            <Link href={`/options?title=${encodeURIComponent(item.title)}`} asChild>
              <Pressable style={styles.row}>
                <Text style={styles.rowText}>{item.title}</Text>
                <Text style={styles.rowChevron}>›</Text>
              </Pressable>
            </Link>
          ) : (
            <Pressable style={styles.row}>
              <Text style={styles.rowText}>{item.title}</Text>
            </Pressable>
          )
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
  rowChevron: {
    fontSize: 20,
    color: '#888',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
  },
});