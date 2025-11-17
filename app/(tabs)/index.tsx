import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

export const unstable_settings = {
  headerTitle: "Profile",
};

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerBackground} />
        <Image
          source={require("@/assets/images/profile-pic.jpg")}
          style={styles.profileImage}
        />
      </View>

      {/* User Info */}
      <Text style={styles.name}>John Doe</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Phone</Text>
        <Text style={styles.value}>9876543210</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Mail</Text>
        <Text style={styles.value}>example@gmail.com</Text>
      </View>

      {/* Options Section */}
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="person-outline" size={22} color="#000" />
          <Text style={styles.optionText}>Profile details</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="settings-outline" size={22} color="#000" />
          <Link href="/settings" asChild>
            <Pressable>
              <Text style={styles.optionText}>Settings</Text>
            </Pressable>
          </Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="log-out-outline" size={22} color="red" />
          <Text style={[styles.optionText, { color: "red" }]}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    paddingTop: 40,
  },
  header: {
    alignItems: "center",
    width: "100%",
  },
  headerBackground: {
    backgroundColor: "#c8b6ff",
    width: "100%",
    height: 120,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: "absolute",
    top: 70,
    borderWidth: 4,
    borderColor: "#FFF",
  },
  name: {
    marginTop: 60,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    color: "#777",
  },
  value: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  optionContainer: {
    marginTop: 30,
    width: "85%",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#000",
  },
});
