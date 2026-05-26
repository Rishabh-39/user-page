import { useState } from "react";

function Signup({ setUser, setIsLogin }) {
  const [signupData, setSignupData] = useState({
    childName: "",
    parentName: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
    dob: "",
    Name: "",
    Phone: "",
    Relation: "",
  });

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!signupData.childName || !signupData.parentName || !signupData.gender || 
        !signupData.dob || !signupData.phone || !signupData.email || 
        !signupData.address || !signupData.password || !signupData.confirmPassword ||
        !signupData.name || !signupData.phone || !signupData.relation) {
      alert("Please fill in all required fields");
      return;
    }
    
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    if (signupData.password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
    
    if (!/^\d{10}$/.test(signupData.phone)) {
      alert("Please enter a valid phone number");
      return;
    }
    
    setUser({ email: signupData.email, password: signupData.password });
    alert("Account Created Successfully");
    setIsLogin(true);
  };

  const inputClass =
    "w-full h-9 md:h-10 rounded-lg border border-gray-300 px-3 text-sm outline-none bg-white/60 focus:border-purple-400 transition-colors placeholder:text-gray-400";

  const labelClass = "block text-xs md:text-sm font-medium text-gray-700 mb-1";
  const requiredStar = <span className="text-red-500 text-xs ml-0.5">*</span>;

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Scrollable Container with hidden scrollbar */}
      <div className="h-[500px] md:h-[550px] overflow-y-auto scrollbar-hide">
        
        <form onSubmit={handleSubmit} className="space-y-3 pr-1">
          
          {/* Child Name */}
          <div>
            <label className={labelClass}>
              Child Name{requiredStar}
            </label>
            <input
              type="text"
              name="childName"
              placeholder="Enter child's full name"
              value={signupData.childName}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          {/* Parent Name */}
          <div>
            <label className={labelClass}>
              Parent Name{requiredStar}
            </label>
            <input
              type="text"
              name="parentName"
              placeholder="Enter parent's full name"
              value={signupData.parentName}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className={labelClass}>
              Gender{requiredStar}
            </label>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <label className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border cursor-pointer transition-all text-sm font-medium
                ${signupData.gender === "Male"
                  ? "border-purple-500 bg-purple-50 text-purple-700"
                  : "border-gray-200 bg-white/60 text-gray-600 hover:border-purple-300"
                }`}>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                  className="hidden"
                  required
                />
                👦 Boy
              </label>

              <label className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border cursor-pointer transition-all text-sm font-medium
                ${signupData.gender === "Female"
                  ? "border-purple-500 bg-purple-50 text-purple-700"
                  : "border-gray-200 bg-white/60 text-gray-600 hover:border-purple-300"
                }`}>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                  className="hidden"
                  required
                />
                👧 Girl
              </label>
            </div>
          </div>

          {/* Date of Birth */}
          <div>
            <label className={labelClass}>
              Date of Birth{requiredStar}
            </label>
            <input
              type="date"
              name="dob"
              value={signupData.dob}
              onChange={handleChange}
              className={`${inputClass} w-full`}
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className={labelClass}>
              Phone Number{requiredStar}
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter number"
              value={signupData.phone}
              onChange={handleChange}
              className={inputClass}
              required
              pattern="[0-9]{10}"
              maxLength="10"
            />
          </div>

          {/* Email */}
          <div>
            <label className={labelClass}>
              Email{requiredStar}
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={signupData.email}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className={labelClass}>
              Address{requiredStar}
            </label>
            <textarea
              name="address"
              placeholder="Enter complete address with city and PIN code"
              value={signupData.address}
              onChange={handleChange}
              rows="2"
              className="w-full rounded-lg border border-gray-300 px-3 py-1.5 text-sm outline-none resize-none bg-white/60 focus:border-purple-400 transition-colors placeholder:text-gray-400"
              required
            />
          </div>

          {/* Create Password */}
          <div>
            <label className={labelClass}>
              Create Password{requiredStar}
            </label>
            <input
              type="password"
              name="password"
              placeholder="Minimum 6 characters"
              value={signupData.password}
              onChange={handleChange}
              className={inputClass}
              required
              minLength="6"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className={labelClass}>
              Confirm Password{requiredStar}
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter your password"
              value={signupData.confirmPassword}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          {/* Emergency Contact Section */}
          <div className="bg-gray-100/80 rounded-xl p-3 space-y-3">
            <h2 className="text-sm md:text-base font-semibold text-gray-800">Emergency Contact</h2>

            {/* Contact Name */}
            <div>
              <label className={labelClass}>
                Name{requiredStar}
              </label>
              <input
                type="text"
                name="Name"
                placeholder="Enter name"
                value={signupData.name}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>

            {/* Contact Phone */}
            <div>
              <label className={labelClass}>
                Phone Number{requiredStar}
              </label>
              <input
                type="tel"
                name="Phone Number"
                placeholder="Enter number"
                value={signupData.phone}
                onChange={handleChange}
                className={inputClass}
                required
                pattern="[0-9]{10}"
                maxLength="10"
              />
            </div>

            {/* Relation With Child */}
            <div>
              <label className={labelClass}>
                Relation With Child{requiredStar}
              </label>
              <input
                type="text"
                name="Relation"
                placeholder="E.g., Mother, Father, Uncle"
                value={signupData.relation}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-9 md:h-10 rounded-lg bg-[#000a3d] text-white text-sm font-semibold hover:scale-[1.01] transition-all shadow-md hover:shadow-lg mt-2"
          >
            Register
          </button>

          {/* Note about required fields */}
          <p className="text-xs text-gray-500 text-center mt-2 pb-1">
            <span className="text-red-500">*</span> All fields are required
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;