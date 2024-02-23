import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://createabit-server-uao6.onrender.com/api/v1/user/register",
        // "https://createabit-server-uao6.onrender.com/api/v1/user/register",

        formData
      );

      if (response) {
        toast.success("Successfully Register");

        router.push("/dark/login");
      }

      console.log("RegisterData", response.data);
      // Handle the response data as needed, e.g., redirect to a new page or show a success message.
    } catch (error) {
      console.error("Error:", error);
      // Handle the error, e.g., show an error message to the user.
    }
  };

  return (
    <div className="register-container">
      <h3>Register</h3>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className="form-input"
            type="text"
            name="Name"
            id="username"
            value={formData.Name} // Corrected property name
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-input"
            type="email"
            name="Email"
            id="email"
            value={formData.Email} // Corrected property name
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-input"
            type="password"
            name="Password"
            id="password"
            value={formData.Password} // Corrected property name
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="mt-3 butn butn-md butn-bord radius-10">
          Register
        </button>
        <p className="mt-2">
          <span>Alreay have an account?</span>
          <span>
            <Link href="/dark/login" className="text-primary">
              {" "}
              Sign In
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
