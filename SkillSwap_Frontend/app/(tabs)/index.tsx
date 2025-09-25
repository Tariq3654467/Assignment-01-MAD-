import { useColorScheme } from '@/hooks/use-color-scheme';
import React from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Dummy data as specified in requirements
const dummyOffers = [
  {
    id: 1,
    title: 'Python Tutoring',
    user: 'Ali',
    description: 'Learn Python programming from basics to advanced concepts. Perfect for beginners!',
    category: 'Programming',
    duration: '1 hour',
    rating: 4.8,
    sessionsLeft: 3,
  },
  {
    id: 2,
    title: 'Guitar Lessons',
    user: 'Fatima',
    description: 'Acoustic guitar lessons for beginners. Learn your favorite songs!',
    category: 'Music',
    duration: '45 minutes',
    rating: 4.9,
    sessionsLeft: 5,
  },
  {
    id: 3,
    title: 'Drawing Basics',
    user: 'Ahmed',
    description: 'Fundamental drawing techniques and art theory for aspiring artists.',
    category: 'Art',
    duration: '1.5 hours',
    rating: 4.7,
    sessionsLeft: 2,
  },
  {
    id: 4,
    title: 'Yoga & Meditation',
    user: 'Sara',
    description: 'Relaxing yoga sessions with meditation techniques for stress relief.',
    category: 'Wellness',
    duration: '1 hour',
    rating: 4.9,
    sessionsLeft: 4,
  },
];

interface SkillOffer {
  id: number;
  title: string;
  user: string;
  description: string;
  category: string;
  duration: string;
  rating: number;
  sessionsLeft: number;
}

const SkillOfferCard = ({ offer }: { offer: SkillOffer }) => {
  const colorScheme = useColorScheme();
  
  const styles = StyleSheet.create({
    card: {
      backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#fff',
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
      borderWidth: 1,
      borderColor: colorScheme === 'dark' ? '#333' : '#f0f0f0',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 12,
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      color: colorScheme === 'dark' ? '#fff' : '#000',
      flex: 1,
      marginRight: 12,
    },
    category: {
      backgroundColor: '#007AFF',
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 12,
    },
    categoryText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: '500',
    },
    user: {
      fontSize: 16,
      color: colorScheme === 'dark' ? '#ccc' : '#666',
      marginBottom: 8,
    },
    description: {
      fontSize: 14,
      color: colorScheme === 'dark' ? '#ccc' : '#666',
      lineHeight: 20,
      marginBottom: 12,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    duration: {
      fontSize: 14,
      color: colorScheme === 'dark' ? '#999' : '#888',
    },
    rating: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    ratingText: {
      fontSize: 14,
      color: colorScheme === 'dark' ? '#fff' : '#000',
      marginLeft: 4,
    },
    sessionsLeft: {
      fontSize: 12,
      color: '#007AFF',
      fontWeight: '500',
    },
    bookButton: {
      backgroundColor: '#007AFF',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 20,
      marginTop: 12,
    },
    bookButtonText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: '600',
      textAlign: 'center',
    },
  });

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <View style={styles.header}>
        <Text style={styles.title}>{offer.title}</Text>
        <View style={styles.category}>
          <Text style={styles.categoryText}>{offer.category}</Text>
        </View>
      </View>
      
      <Text style={styles.user}>by {offer.user}</Text>
      <Text style={styles.description}>{offer.description}</Text>
      
      <View style={styles.footer}>
        <Text style={styles.duration}>{offer.duration}</Text>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>⭐ {offer.rating}</Text>
        </View>
      </View>
      
      <Text style={styles.sessionsLeft}>{offer.sessionsLeft} sessions left</Text>
      
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book Session</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#000' : '#f5f5f5',
    },
    header: {
      backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#fff',
      paddingHorizontal: 20,
      paddingTop: 60,
      paddingBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: colorScheme === 'dark' ? '#333' : '#e0e0e0',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: colorScheme === 'dark' ? '#fff' : '#000',
      marginBottom: 4,
    },
    subtitle: {
      fontSize: 16,
      color: colorScheme === 'dark' ? '#ccc' : '#666',
    },
    content: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    emptyState: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 40,
    },
    emptyText: {
      fontSize: 18,
      color: colorScheme === 'dark' ? '#ccc' : '#666',
      textAlign: 'center',
      marginBottom: 8,
    },
    emptySubtext: {
      fontSize: 14,
      color: colorScheme === 'dark' ? '#999' : '#888',
      textAlign: 'center',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SkillSwap</Text>
        <Text style={styles.subtitle}>Discover skills to learn and share</Text>
      </View>
      
      <View style={styles.content}>
        <FlatList
          data={dummyOffers}
          renderItem={({ item }) => <SkillOfferCard offer={item} />}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>No skill offers available</Text>
              <Text style={styles.emptySubtext}>
                Be the first to post a skill offer!
              </Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}