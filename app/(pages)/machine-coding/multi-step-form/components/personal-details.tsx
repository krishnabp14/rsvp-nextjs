import { FormData } from "../page";
import styles from "../styles.module.scss";

export type PersonalDetailsProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  errors: { [key: string]: string };
};

export const PersonalDetails = ({
  formData,
  setFormData,
  errors,
}: PersonalDetailsProps) => {
  const handleFormData = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    key: keyof FormData
  ) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  console.log(errors);

  return (
    <div className={styles.personalDetailsForm}>
      <div className={styles.item}>
        <label>First Name : </label>

        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => handleFormData(e, "firstName")}
        ></input>
        {errors.firstName && (
          <p style={{ fontSize: "12px", color: "red" }}>{errors.firstName}</p>
        )}
      </div>
      <div className={styles.item}>
        <label>Last Name : </label>
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => handleFormData(e, "lastName")}
        ></input>
        {errors.lastName && (
          <p style={{ fontSize: "12px", color: "red" }}>{errors.lastName}</p>
        )}
      </div>
      <div className={styles.item}>
        <label>Mobile Num : </label>
        <input
          type="text"
          placeholder="+91 xxxxxxxxxx"
          value={formData.mobile}
          onChange={(e) => handleFormData(e, "mobile")}
        ></input>
        {errors.mobile && (
          <p style={{ fontSize: "12px", color: "red" }}>{errors.mobile}</p>
        )}
      </div>
      <div className={styles.item}>
        <label>Email : </label>
        <input
          type="text"
          placeholder="xyz@gmail.com"
          value={formData.email}
          onChange={(e) => handleFormData(e, "email")}
        ></input>
        {errors.email && (
          <p style={{ fontSize: "12px", color: "red" }}>{errors.email}</p>
        )}
      </div>
      <div className={styles.item}>
        <label>Marritual Status</label>
        <select
          onChange={(e) => handleFormData(e, "maritualStatus")}
          value={formData.maritualStatus}
        >
          <option id="single">Single</option>
          <option id="married">Married</option>
        </select>
      </div>
      <div className={styles.item}>
        <label>Date of Birth : </label>
        <input
          type="date"
          onChange={(e) => handleFormData(e, "dob")}
          value={formData.dob}
        ></input>
      </div>
      <div className={styles.item}>
        <label>Address</label>
        <textarea
          placeholder="Address Line 1 Address Line 2"
          onChange={(e) => handleFormData(e, "address")}
          value={formData.address}
        ></textarea>
        {errors.address && (
          <p style={{ fontSize: "12px", color: "red" }}>{errors.address}</p>
        )}
      </div>
      <div className={styles.item}>
        <label>Emergency contact : </label>
        <input
          type="text"
          placeholder="+91 xxxxxxxxxx"
          value={formData.emergencyContact}
          onChange={(e) => handleFormData(e, "emergencyContact")}
        ></input>
        {errors.emergencyContact && (
          <p style={{ fontSize: "12px", color: "red" }}>
            {errors.emergencyContact}
          </p>
        )}
      </div>
    </div>
  );
};
