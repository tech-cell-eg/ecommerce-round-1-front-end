import api, { handleError } from "../axiosConfig";

// Function to get user setting
export const getUserSetting = async () => {
  try {
    const response = await api.get("user-settings");
    return response.data;
  } catch (error) {
    handleError(error, "Failed to get user setting");
  }
};

// Function to update user settings
export const updateUserSetting = async (updatedSettings) => {
    try {
      const response = await api.patch("user-settings", updatedSettings);
      return response.data;
    } catch (error) {
      handleError(error, "Failed to update user setting");
    }
  };
  