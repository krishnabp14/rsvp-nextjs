import { FormData } from "../page";
import styles from "../styles.module.scss";

export type InterstsProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

export const Intersts = ({ formData, setFormData }: InterstsProps) => {
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: "hobbies" | "skills",
    value: string
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: prevData[key].includes(value)
        ? prevData[key].filter((item) => item !== value)
        : [...prevData[key], value],
    }));
  };

  return (
    <div className={styles.interestsForm}>
      <label style={{ fontWeight: "bold" }}>Hobbies</label>
      <div className={styles.hobbiesCheckBoxes}>
        <div>
          <input
            type="checkbox"
            id="reading"
            onChange={(e) => handleOnChange(e, "hobbies", "reading")}
            checked={!!formData.hobbies.includes("reading")}
          />{" "}
          Reading
        </div>
        <div>
          <input
            type="checkbox"
            id="movies"
            checked={!!formData.hobbies.includes("movies")}
            onChange={(e) => handleOnChange(e, "hobbies", "movies")}
          />{" "}
          Watching Movies
        </div>
        <div>
          <input
            type="checkbox"
            id="travel"
            checked={!!formData.hobbies.includes("travel")}
            onChange={(e) => handleOnChange(e, "hobbies", "travel")}
          />{" "}
          Travelling
        </div>
        <div>
          <input
            type="checkbox"
            id="dance"
            checked={!!formData.hobbies.includes("dance")}
            onChange={(e) => handleOnChange(e, "hobbies", "dance")}
          />{" "}
          Dancing
        </div>
      </div>

      <label style={{ fontWeight: "bold" }}>Skills</label>
      <div className={styles.hobbiesCheckBoxes}>
        <div>
          <input
            type="checkbox"
            id="ai-ml"
            checked={!!formData.skills.includes("ai-ml")}
            onChange={(e) => handleOnChange(e, "skills", "ai-ml")}
          />{" "}
          AI + ML
        </div>
        <div>
          <input
            type="checkbox"
            id="dsa"
            checked={!!formData.skills.includes("dsa")}
            onChange={(e) => handleOnChange(e, "skills", "dsa")}
          />{" "}
          DSA
        </div>
        <div>
          <input
            type="checkbox"
            id="web-dev"
            checked={!!formData.skills.includes("web-dev")}
            onChange={(e) => handleOnChange(e, "skills", "web-dev")}
          />{" "}
          Web Dev
        </div>
        <div>
          <input
            type="checkbox"
            id="app-dev"
            checked={!!formData.skills.includes("app-dev")}
            onChange={(e) => handleOnChange(e, "skills", "app-dev")}
          />{" "}
          App Dev
        </div>
      </div>
    </div>
  );
};
