import { FormData } from "../page";
import styles from "../styles.module.scss";

type SettingsProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

export const Settings = ({ formData, setFormData }: SettingsProps) => {
  return (
    <div className={styles.settingsForm}>
      <label style={{ fontWeight: "bold" }}>Theme</label>
      <div className={styles.themeOptions}>
        <div>
          <input
            type="radio"
            id="dark"
            checked={formData.theme === "dark"}
            onChange={() => setFormData({ ...formData, theme: "dark" })}
          />{" "}
          Dark
        </div>
        <div>
          <input
            type="radio"
            id="light"
            checked={formData.theme === "light"}
            onChange={() => setFormData({ ...formData, theme: "light" })}
          />{" "}
          Light
        </div>
        <div>
          <input
            type="radio"
            id="default"
            checked={formData.theme === "system"}
            onChange={() => setFormData({ ...formData, theme: "system" })}
          />{" "}
          System
        </div>
      </div>
    </div>
  );
};
