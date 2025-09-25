import { useColorScheme } from '@/hooks/use-color-scheme';
import { router } from 'expo-router';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

// Dummy data as specified in requirements
const user = {
  name: 'Your Name',
  email: 'test@student.com',
  skills: ['React Native', 'Guitar', 'Photography'],
  bio: 'A passionate developer and musician looking to share my skills with the world.',
  rating: 4.8,
  sessionsCompleted: 12,
  sessionsOffered: 8,
};

export default function ProfileScreen() {
  const colorScheme = useColorScheme();

  const handleEditProfile = () => {
    // In a real app, this would navigate to edit profile screen
    console.log('Edit profile pressed');
  };

  const handleLogout = () => {
    // In a real app, this would clear auth state and navigate to login
    router.replace('/login');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#000' : '#f5f5f5',
    },
    header: {
      backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#fff',
      paddingHorizontal: 20,
      paddingTop: 60,
      paddingBottom: 30,
      borderBottomWidth: 1,
      borderBottomColor: colorScheme === 'dark' ? '#333' : '#e0e0e0',
      alignItems: 'center',
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#007AFF',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
    },
    avatarText: {
      fontSize: 36,
      fontWeight: 'bold',
      color: '#fff',
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colorScheme === 'dark' ? '#fff' : '#000',
      marginBottom: 4,
    },
    email: {
      fontSize: 16,
      color: colorScheme === 'dark' ? '#ccc' : '#666',
      marginBottom: 16,
    },
    rating: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    ratingText: {
      fontSize: 16,
      color: colorScheme === 'dark' ? '#fff' : '#000',
      marginLeft: 4,
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 16,
      paddingTop: 20,
      borderTopWidth: 1,
      borderTopColor: colorScheme === 'dark' ? '#333' : '#e0e0e0',
    },
    stat: {
      alignItems: 'center',
    },
    statNumber: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colorScheme === 'dark' ? '#fff' : '#000',
    },
    statLabel: {
      fontSize: 14,
      color: colorScheme === 'dark' ? '#ccc' : '#666',
      marginTop: 4,
    },
    content: {
      flex: 1,
      padding: 20,
    },
    section: {
      backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#fff',
      borderRadius: 16,
      padding: 20,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
      borderWidth: 1,
      borderColor: colorScheme === 'dark' ? '#333' : '#f0f0f0',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: colorScheme === 'dark' ? '#fff' : '#000',
      marginBottom: 12,
    },
    bio: {
      fontSize: 16,
      color: colorScheme === 'dark' ? '#ccc' : '#666',
      lineHeight: 24,
    },
    skillsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
    },
    skillChip: {
      backgroundColor: '#007AFF',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
    },
    skillText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: '500',
    },
    buttonContainer: {
      flexDirection: 'row',
      gap: 12,
    },
    editButton: {
      flex: 1,
      backgroundColor: '#007AFF',
      borderRadius: 12,
      paddingVertical: 14,
      alignItems: 'center',
    },
    logoutButton: {
      flex: 1,
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: colorScheme === 'dark' ? '#333' : '#ddd',
      borderRadius: 12,
      paddingVertical: 14,
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#fff',
    },
    logoutButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: colorScheme === 'dark' ? '#fff' : '#000',
    },
    emptySkills: {
      fontSize: 14,
      color: colorScheme === 'dark' ? '#999' : '#888',
      fontStyle: 'italic',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
          </Text>
        </View>
        
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        
        <View style={styles.rating}>
          <Text>⭐</Text>
          <Text style={styles.ratingText}>{user.rating}</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{user.sessionsCompleted}</Text>
            <Text style={styles.statLabel}>Sessions Completed</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{user.sessionsOffered}</Text>
            <Text style={styles.statLabel}>Sessions Offered</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.bio}>{user.bio}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Skills</Text>
          {user.skills.length > 0 ? (
            <View style={styles.skillsContainer}>
              {user.skills.map((skill, index) => (
                <View key={index} style={styles.skillChip}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
            </View>
          ) : (
            <Text style={styles.emptySkills}>No skills added yet</Text>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
