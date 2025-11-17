import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const unstable_settings = {
  headerTitle: "Settings",
};

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.header}>Settings</Text>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>

        <SettingItem
          icon="person-outline"
          label="Edit Profile"
          onPress={() => console.log("Edit Profile")}
        />

        <SettingItem
          icon="lock-closed-outline"
          label="Change Password"
          onPress={() => console.log("Change Password")}
        />
      </View>

      {/* Preferences */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>

        <SettingItem
          icon="notifications-outline"
          label="Notifications"
          onPress={() => console.log("Notifications")}
        />

        <SettingItem
          icon="language-outline"
          label="Language"
          onPress={() => console.log("Language")}
        />
      </View>

      {/* Support */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>

        <SettingItem
          icon="help-circle-outline"
          label="Help & Support"
          onPress={() => console.log("Help")}
        />

        <SettingItem
          icon="mail-outline"
          label="Contact Us"
          onPress={() => console.log("Contact")}
        />
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

function SettingItem({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Ionicons name={icon} size={22} color="#555" style={{ width: 30 }} />
      <Text style={styles.itemLabel}>{label}</Text>
      <Ionicons name="chevron-forward" size={20} color="#aaa" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: "700",
    marginTop: 40,
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#444",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  itemLabel: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  logoutButton: {
    backgroundColor: "#ff4c4c",
    paddingVertical: 15,
    borderRadius: 12,
    marginBottom: 40,
  },
  logoutText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
