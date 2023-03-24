import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { icons, SIZES } from '../../../constants';
import styles from './welcome.style';

import { useState } from 'react'
import { useRouter } from 'expo-router';

const jobTypes = ["Full-Time", "Part-Time", "Freelancer", "Internship", "Temporary", "Conttact", "Commissions", "Volunteer"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Freelancer');

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Mehmet Akif</Text>
        <Text style={styles.welcomeMessage}>JOB JOB JOB</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
          style={styles.searchInput}
          value=""
          onChange={() => {}}
          placeholder='What are you looking for?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
          source = {icons.search}
          resaizeMode="contain"
          style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity 
            style={styles.tab(activeJobType, item)}
            onPress={() => {
              setActiveJobType(item);
              router.push(`/search/${item}`)
            }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor = {item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome