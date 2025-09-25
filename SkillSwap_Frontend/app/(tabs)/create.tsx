import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { router } from 'expo-router';
import { useColorScheme } from '@/hooks/use-color-scheme';

const categories = ['Programming', 'Music', 'Art', 'Wellness', 'Language', 'Sports', 'Cooking', 'Other'];

export default function CreatePostScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState('');
  const [sessions, setSessions] = useState('');
  const colorScheme = useColorScheme();

  const handlePost = () => {
    if (!title.trim() || !description.trim() || !category || !duration || !sessions) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Log the data to console as specified in requirements
    const postData = {
      title: title.trim(),
      description: description.trim(),
      category,
      duration,
      sessions: parseInt(sessions),
      createdAt: new Date().toISOString(),
    };

    console.log('New skill offer posted:', postData);
    
    Alert.alert(
      'Success!',
      'Your skill offer has been posted successfully.',
      [
        {
          text: 'OK',
          onPress: () => {
            // Navigate back to Home Feed
            router.replace('/(tabs)');
          },
        },
      ]
    );
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
      paddingBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: colorScheme === 'dark' ? '#333' : '#e0e0e0',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colorScheme === 'dark' ? '#fff' : '#000',
    },
    cancelButton: {
      paddingHorizontal: 12,
      paddingVertical: 6,
    },
    cancelText: {
      fontSize: 16,
      color: '#007AFF',
    },
    content: {
      flex: 1,
      padding: 20,
    },
    inputGroup: {
      marginBottom: 24,
    },
    label: {
      fontSize: 16,
      fontWeight: '600',
      color: colorScheme === 'dark' ? '#fff' : '#000',
      marginBottom: 8,
    },
    input: {
      backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#fff',
      borderWidth: 1,
      borderColor: colorScheme === 'dark' ? '#333' : '#ddd',
      borderRadius: 12,
      paddingHorizontal: 16,
      paddingVertical: 14,
      fontSize: 16,
      color: colorScheme === 'dark' ? '#fff' : '#000',
    },
    textArea: {
      height: 120,
      textAlignVertical: 'top',
    },
    categoryContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
    },
    categoryChip: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: colorScheme === 'dark' ? '#333' : '#ddd',
      backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#fff',
    },
    categoryChipSelected: {
      backgroundColor: '#007AFF',
      borderColor: '#007AFF',
    },
    categoryText: {
      fontSize: 14,
      color: colorScheme === 'dark' ? '#fff' : '#000',
    },
    categoryTextSelected: {
      color: '#fff',
    },
    durationContainer: {
      flexDirection: 'row',
      gap: 12,
    },
    durationInput: {
      flex: 1,
    },
    sessionsInput: {
      flex: 1,
    },
    postButton: {
      backgroundColor: '#007AFF',
      borderRadius: 12,
      paddingVertical: 16,
      alignItems: 'center',
      marginTop: 20,
    },
    postButtonDisabled: {
      backgroundColor: colorScheme === 'dark' ? '#333' : '#ccc',
    },
    postButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
    required: {
      color: '#FF3B30',
    },
  });

  const isFormValid = title.trim() && description.trim() && category && duration && sessions;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => router.back()}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Offer</Text>
        <View style={{ width: 60 }} />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Title <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., Python Programming Basics"
              placeholderTextColor={colorScheme === 'dark' ? '#666' : '#999'}
              value={title}
              onChangeText={setTitle}
              maxLength={100}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Description <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Describe what you'll teach and what learners can expect..."
              placeholderTextColor={colorScheme === 'dark' ? '#666' : '#999'}
              value={description}
              onChangeText={setDescription}
              multiline
              maxLength={500}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Category <Text style={styles.required}>*</Text>
            </Text>
            <View style={styles.categoryContainer}>
              {categories.map((cat) => (
                <TouchableOpacity
                  key={cat}
                  style={[
                    styles.categoryChip,
                    category === cat && styles.categoryChipSelected,
                  ]}
                  onPress={() => setCategory(cat)}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      category === cat && styles.categoryTextSelected,
                    ]}
                  >
                    {cat}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Session Details <Text style={styles.required}>*</Text>
            </Text>
            <View style={styles.durationContainer}>
              <View style={styles.durationInput}>
                <Text style={[styles.label, { fontSize: 14, marginBottom: 4 }]}>
                  Duration
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g., 1 hour"
                  placeholderTextColor={colorScheme === 'dark' ? '#666' : '#999'}
                  value={duration}
                  onChangeText={setDuration}
                />
              </View>
              <View style={styles.sessionsInput}>
                <Text style={[styles.label, { fontSize: 14, marginBottom: 4 }]}>
                  Sessions Available
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g., 5"
                  placeholderTextColor={colorScheme === 'dark' ? '#666' : '#999'}
                  value={sessions}
                  onChangeText={setSessions}
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={[
              styles.postButton,
              !isFormValid && styles.postButtonDisabled,
            ]}
            onPress={handlePost}
            disabled={!isFormValid}
          >
            <Text style={styles.postButtonText}>Post Offer</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
