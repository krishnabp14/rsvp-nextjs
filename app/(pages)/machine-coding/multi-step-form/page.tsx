"use client";
import { useState } from "react";
import styles from "./styles.module.scss";
import { PersonalDetails } from "./components/personal-details";
import { Intersts } from "./components/interests";
import { Settings } from "./components/settings";

export type FormData = {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  maritualStatus: string;
  dob: string;
  address: string;
  emergencyContact: string;
  hobbies: string[];
  skills: string[];
  theme: string;
};

const MultiStepForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    maritualStatus: "single",
    dob: new Date().toLocaleDateString("en-CA"),
    address: "",
    emergencyContact: "",
    hobbies: [],
    skills: [],
    theme: "light",
  });

  const [errors, setErrors] = useState({});

  const tabConfig = [
    {
      id: 1,
      name: "Personal Details",
      component: (
        <PersonalDetails
          formData={formData}
          setFormData={setFormData}
          errors={errors}
        />
      ),
    },
    {
      id: 2,
      name: "Interests",
      component: <Intersts formData={formData} setFormData={setFormData} />,
    },
    {
      id: 3,
      name: "Settings",
      component: <Settings formData={formData} setFormData={setFormData} />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const validate = () => {
    if (!formData.firstName) {
      setErrors((prev) => ({ ...prev, firstName: "First Name is required" }));
    }

    if (!formData.lastName) {
      setErrors((prev) => ({ ...prev, lastName: "Last Name is required" }));
    }

    if (!formData.mobile) {
      setErrors((prev) => ({ ...prev, mobile: "Mobile is required" }));
    }

    if (!formData.email) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
    }

    if (!formData.address) {
      setErrors((prev) => ({ ...prev, address: "Address is required" }));
    }

    if (!formData.emergencyContact) {
      setErrors((prev) => {
        return { ...prev, emergencyContact: "Emergency contact is required" };
      });
    }

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.mobile ||
      !formData.email ||
      !formData.address ||
      !formData.emergencyContact
    ) {
      return false;
    }

    setErrors({});
    return true;
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (validate() && activeIndex < tabConfig.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div className={styles.multiStepForm}>
      <div>
        <h1 className={styles.title}>Multi step form</h1>

        <div className={styles.tabItems}>
          {tabConfig.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`${styles.tabItem} ${
                  activeIndex === index ? styles.active : ""
                }`}
                onClick={() => validate() && setActiveIndex(index)}
              >
                {item.name}
              </div>
            );
          })}
        </div>

        <div className={styles.form}>{tabConfig[activeIndex].component}</div>

        <div className={styles.btns}>
          <div className={styles.prevNextBtn}>
            {activeIndex > 0 && <button onClick={handlePrev}>Prev</button>}
            {activeIndex < tabConfig.length - 1 && (
              <button onClick={handleNext}>Next</button>
            )}
          </div>

          <div className={styles.submitBtn}>
            <button
              onClick={() => {
                alert("Form Submitted Successfully");
                setFormData({
                  firstName: "",
                  lastName: "",
                  mobile: "",
                  email: "",
                  maritualStatus: "single",
                  dob: new Date().toLocaleDateString("en-CA"),
                  address: "",
                  emergencyContact: "",
                  hobbies: [],
                  skills: [],
                  theme: "light",
                });
                setActiveIndex(0);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className={styles.formDataViewer}>
        <h1 className={styles.title}>Form Data Visualizer</h1>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default MultiStepForm;
