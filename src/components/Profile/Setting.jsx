import { useState, useEffect } from "react";
import { ToggleSwitch, Alert } from "flowbite-react";
import { getUserSetting, updateUserSetting } from "../../api/setting/setting";

const Settings = () => {
  const [theme, setTheme] = useState("Light");
  const [language, setLanguage] = useState("English");
  const [notifications, setNotifications] = useState({
    twoFactor: false,
    push: false,
    desktop: false,
    email: false,
  });
  const [alert, setAlert] = useState({ message: "", type: "", visible: false });

  useEffect(() => {
    const fetchUserSettings = async () => {
      try {
        const data = await getUserSetting();
        if (data?.data) {
          const userSettings = data.data;
          setTheme(userSettings.appearance === "dark" ? "Dark" : "Light");
          setLanguage(userSettings.language === "en" ? "English" : "Other");
          setNotifications({
            twoFactor: !!userSettings.two_factor_authentication,
            push: !!userSettings.push_notifications,
            desktop: !!userSettings.desktop_notification,
            email: !!userSettings.email_notifications,
          });
        }
      } catch (error) {
        console.error("Failed to fetch user settings:", error);
      }
    };

    fetchUserSettings();
  }, []);

  const handleToggle = async (key, value) => {
    try {
  
      setNotifications((prev) => ({ ...prev, [key]: value }));
      const apiKeyMap = {
        twoFactor: "two_factor_authentication",
        push: "push_notifications",
        desktop: "desktop_notification",
        email: "email_notifications",
      };

      await updateUserSetting({ [apiKeyMap[key]]: value ? 1 : 0 });

      setAlert({
        message: "Settings updated successfully.",
        type: "success",
        visible: true,
      });
    } catch (error) {
      console.error("Failed to update user settings:", error);

    
      setAlert({
        message: "Failed to update settings. Please try again.",
        type: "failure",
        visible: true,
      });

 
      setNotifications((prev) => ({ ...prev, [key]: !value }));
    } finally {

      setTimeout(() => setAlert({ ...alert, visible: false }), 3000);
    }
  };

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>

      {/* Alert Section */}
      {alert.visible && (
        <Alert
          color={alert.type === "success" ? "green" : "red"}
          onDismiss={() => setAlert({ ...alert, visible: false })}
        >
          {alert.message}
        </Alert>
      )}

      {/* Theme Setting */}
      <div className="flex items-center justify-between mb-6 border-b pb-4">
        <div>
          <h4 className="font-medium text-gray-700">Appearance</h4>
          <p className="text-sm text-gray-500">
            Customize how your theme looks on your device.
          </p>
        </div>
        <div className="relative">
          <select
            value={theme}
            disabled
            className="block w-36 bg-gray-200 border border-gray-300 text-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 cursor-not-allowed"
          >
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
      </div>

      {/* Language Setting */}
      <div className="flex items-center justify-between mb-6 border-b pb-4">
        <div>
          <h4 className="font-medium text-gray-700">Language</h4>
          <p className="text-sm text-gray-500">Select your language.</p>
        </div>
        <div className="relative">
          <select
            value={language}
            disabled
            className="block w-36 bg-gray-200 border border-gray-300 text-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 cursor-not-allowed"
          >
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </div>

      {/* Notifications */}
      <div className="space-y-6">
        {[
          {
            label: "Two-factor Authentication",
            key: "twoFactor",
            description: "Keep your account secure by enabling 2FA via mail.",
          },
          {
            label: "Push Notifications",
            key: "push",
            description: "Receive push notifications.",
          },
          {
            label: "Desktop Notification",
            key: "desktop",
            description: "Receive push notifications on desktop.",
          },
          {
            label: "Email Notifications",
            key: "email",
            description: "Receive email notifications.",
          },
        ].map(({ label, key, description }) => (
          <div
            key={key}
            className="flex items-center justify-between border-b pb-4"
          >
            <div>
              <h4 className="font-medium text-gray-700">{label}</h4>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
            <ToggleSwitch
              checked={notifications[key]}
              label=""
              onChange={() => handleToggle(key, !notifications[key])}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
